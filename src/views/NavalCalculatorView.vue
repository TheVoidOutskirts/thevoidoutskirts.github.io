<template>
    <div class="container">
        <!-- Selezione attaccante -->
        <div class="row">
            <div class="col-6">
                <div class="mb-4">
                    <h2 class="text-center">Scegli un attaccante</h2>
                    <!--suppress HtmlUnknownTag -->
                    <v-select :options="spaceShip" label="nome" v-model="attacker"></v-select>
                </div>
                <div v-show="attacker" class="mb-4">
                    <h2>Dettagli personaggio</h2>
                    <div><span class="h4">Nome:</span> <span class="ps-3">{{ attacker?.nome }}</span></div>
                    <div><span class="h4">Classe:</span> <span class="ps-3">{{ attacker?.classe }}</span></div>
                    <span class="h4">Armi:</span>
                    <div v-if="attackerWeapons.length === 0">La Nave non ha armi</div>
                    <div v-else>
                        <v-select :options="attackerWeapons" label="nome" v-model="weapon"></v-select>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="attackerAllWeaponsCheckbox"
                            v-model="useAllWeapons">
                        <label class="form-check-label" for="attackerAllWeaponsCheckbox">Mostra tutte le armi</label>
                    </div>
                </div>
                <div style="flex-basis: 1000px">
                    <h1 id="titoloNave">Nave</h1>
                    <canvas width="1000px" height="1500px" ref="imgCanvas"></canvas>
                    <input type="range" min="-180" max="180" value="0" class="slider" id="slider" ref="slider">
                </div>
                <canvas ref="imgCanvas2"></canvas>
            </div>
            <div id="battle button">
                <input type="button" id="button" ref="button" value="Initiate Battle">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
//import section
import { spaceShip } from "@/assets/SpaceShip";
import { armiNavi } from "@/assets/ArmiNavi";
import { computed, onMounted, ref, watch } from "vue";
import { exportDefaultSpecifier, jsxClosingElement, numberLiteralTypeAnnotation } from "@babel/types";

const imgCanvas = ref<HTMLCanvasElement | undefined>(undefined)
const imgCanvas2 = ref<HTMLCanvasElement | undefined>(undefined)
const canvas = ref<HTMLCanvasElement | undefined>(undefined)
const slider = ref<HTMLInputElement | undefined>(undefined)
const button = ref<HTMLInputElement | undefined>(undefined)

interface Nave {
    nome: string;
    classe: string;
    armi: string[];
    piantaNave: string;
}
interface Arma {
    nome: string;
    tipo: string;
    danno: number;
}


const attacker = ref<Nave | null>(null);
const Navi = ref<Nave[]>([]);
const weapons: Arma[] = [];

const useAllWeapons = ref(false);

const attackerWeapons = computed<Arma[]>(() => {
    if (attacker.value == null) return [];
    // todo return not only all weapons, but also the weapons owned by the character (by marking their name in some way)
    // this to be able to use modifications owned by the player!
    if (useAllWeapons.value) return armiNavi;

    const weapons: Arma[] = [];

    attacker.value?.armi.forEach(wc => {
        const foundWeapon = armiNavi.find(w => w.codice == wc)
        if (foundWeapon !== undefined) {
            weapons.push(foundWeapon);
        }
    })

    return weapons;
});

const weapon = ref<Arma | null>(null);

// Fix for vue-select not emitting an event when the selection is cleared.
watch(attacker, () => {
    weapon.value = attackerWeapons.value[0];
    init(attacker.value?.piantaNave!, function (rgbMatrix: number[][][] | undefined) {
        htmlPlotNave(attacker.value?.nome!, rgbMatrix)
    })

})

type plotMatrix = number[][][] | undefined;

function computeHitPathMatrix(planMatrix: plotMatrix, initialPosition: number[], angle: number) { // Costruisce il path del proiettile
    if (!planMatrix) {
        return
    }
    let hitMatrix = planMatrix.map(a => [...a.map(x => [...x])])

    // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

    let x = initialPosition
    let p = initialPosition

    let projectileStrength = 100.0
    let dt = 0.05
    let d = [dt * Math.cos(angle), dt * Math.sin(angle)]
    let hasHit = false

    x = x.map((v, i) => v + d[i])

    while (0.0 <= x[0] && x[0] <= 1.0 * planMatrix[3][0].length
        && 0.0 <= x[1] && x[1] <= 1.0 * planMatrix[3].length
        && projectileStrength > 0.0) {

        const [xj, xi] = [Math.floor(x[0]), Math.floor(x[1])]
        const [pj, pi] = [Math.floor(p[0]), Math.floor(p[1])]

        if (hitMatrix[3][xi][xj] == 1) {
            if (xj > pj || xj < pj || xi < pi || xi > pi) { hitMatrix[3][xi][xj] = -1; hasHit = true }
            else
                ;
            if (hasHit) {
                projectileStrength -= 0.1
                hasHit = false
            }
        }

        p = [...x]

        x = x.map((v, i) => v + d[i])
    }

    return hitMatrix
}

function computeDamageMatrix(planMatrix: plotMatrix, initialPosition: number[], angle: number) { // Costruisce il path del proiettile
    if (!planMatrix) {
        return
    }
    let damageMatrix = planMatrix.map(a => [...a.map(x => [...x])])
    console.log(damageMatrix)
    // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

    let x = initialPosition
    let p = initialPosition

    let projectileStrength = 100.0
    let dt = 0.05
    let d = [dt * Math.cos(angle), dt * Math.sin(angle)]
    let hasHit = false

    x = x.map((v, i) => v + d[i])

    while (0.0 <= x[0] && x[0] <= 1.0 * planMatrix[3][0].length
        && 0.0 <= x[1] && x[1] <= 1.0 * planMatrix[3].length
        && projectileStrength > 0.0) {

        const [xj, xi] = [Math.floor(x[0]), Math.floor(x[1])]
        const [pj, pi] = [Math.floor(p[0]), Math.floor(p[1])]

        if (damageMatrix[3][xi][xj] == 1) {
            if (xj > pj || xj < pj || xi < pi || xi > pi) { damageMatrix[3][xi][xj] = -1; hasHit = true }
            else
                ;
            if (hasHit) {
                projectileStrength -= 0.1
                hasHit = false
            }
        }

        p = [...x]

        x = x.map((v, i) => v + d[i])
    }

    return damageMatrix
}

function htmlPlotNave(nomeNave: string, rgbMatrix: number[][][] | undefined) { // pianta nave

    const ctx = imgCanvas.value?.getContext("2d")
    const blockSize = 20
    const blockSeparation = 2
    const blockTotal = blockSize + blockSeparation
    const arrowLength = 50

    const toCanvas = (x: number) => 20 + x * blockTotal
    const fromCanvas = (x: number) => (x - 20) / blockTotal
    const toRadians = (x: number) => x / 360 * Math.PI * 2
    const draw = (i: number, j: number, color: string) => {
        if (!ctx)
            return

        ctx.fillStyle = color
        ctx.fillRect(toCanvas(j), toCanvas(i), blockSize, blockSize)
    }

    let START: number[] | null = null

    if (imgCanvas.value) {
        imgCanvas.value.onmousedown = (e) => {
            START = [fromCanvas(e.offsetX), fromCanvas(e.offsetY)]
            drawShip()
        }
    }
    if (button.value) {
        button.value.onclick = _ => {
            drawShip()
        }
    }
    if (slider.value) {
        slider.value.oninput = _ => {
            drawShip()
        }
    }

    const drawShip = () => {
        if (!ctx || !imgCanvas.value || !slider.value)
            return

        ctx.fillStyle = "Grey"
        ctx.fillRect(0, 0, imgCanvas.value.width, imgCanvas.value.height);

        let shipPlan: number[][][] | undefined = []

        if (START === null || slider.value === null) {
            shipPlan = rgbMatrix
        } else if (button.value === null) {
            shipPlan = computeHitPathMatrix(rgbMatrix, START, toRadians(parseInt(slider.value.value)))
        } else { shipPlan = computeDamageMatrix(rgbMatrix, START, toRadians(parseInt(slider.value.value))) }

        if (!shipPlan || shipPlan.length === 0)
           return

        shipPlan[3].forEach((row, i) => {
            row.forEach((item, j) => {
                if (!shipPlan )
                return
                switch (item) {
                    case 0:
                        draw(i, j, "white");
                        break
                    case 1:
                        draw(i, j, `rgb(${shipPlan[0][i][j]}, ${shipPlan[1][i][j]}, ${shipPlan[2][i][j]})`);
                        break
                    case -1:
                        draw(i, j, `rgb(100, 100, 100)`);
                }
            })
        })


        if (START != null) {
            console.log(START)
            const POS = [toCanvas(START[0]), toCanvas(START[1])]

            const sliderAngle = Number(slider.value) / 360 * Math.PI * 2

            ctx.strokeStyle = "white"
            ctx.lineWidth = 2
            ctx.beginPath();
            ctx.moveTo(POS[0], POS[1])
            ctx.lineTo(POS[0] + Math.cos(sliderAngle) * arrowLength
                , POS[1] + Math.sin(sliderAngle) * arrowLength)
            ctx.stroke()
        }
    }
    const sliderValue = [START, slider.value]
    drawShip()

}

function init(src: string, callback: Function) {
    var img = new Image;
    if (!/^data/.test(src))
        img.crossOrigin = ''
    let rgbMatrix: number[][][] | undefined = [];
    img.src = src
    img.onload = function () {
        rgbMatrix = computeRGBmatrix(img)
        callback(rgbMatrix)
    }
}
function computeRGBmatrix(img: HTMLImageElement) {
    const ctx = imgCanvas2.value?.getContext("2d");

    let rgbMatrix: number[][][] | undefined = [];
    if (imgCanvas.value != undefined) {
        imgCanvas.value.width = img.width * 20 + img.width * 3
        imgCanvas.value.height = img.height * 20 + img.height * 2.5
    }
    ctx?.drawImage(img, 0, 0)
    if (img.width !== 0 && img.height !== 0) {
        console.log('collecting data')
        const imgdata: ImageData | undefined = ctx?.getImageData(0, 0, img.width, img.height);
        rgbMatrix = getPixels(imgdata);
    }
    return rgbMatrix
}

function getPixels(imageData: ImageData | undefined) {
    // get colors rgba (4 pix sequentially)

    let x = 0;
    let y = 0;
    let rgbMatrix = [
        Array(imageData?.height).fill(undefined).map(() => Array(imageData?.width).fill(undefined)),
        Array(imageData?.height).fill(undefined).map(() => Array(imageData?.width).fill(undefined)),
        Array(imageData?.height).fill(undefined).map(() => Array(imageData?.width).fill(undefined)),
        Array(imageData?.height).fill(undefined).map(() => Array(imageData?.width).fill(undefined))
    ];
    for (var i = 0; i < 3; i++) {
        if (!imageData?.width) {
            return
        }
        for (var j = i; j < imageData.data.length; j += 4) {
            rgbMatrix[i][y][x] = imageData?.data[j];
            if (imageData?.data[j] !== 255 && imageData?.data[j + 1] !== 255 && imageData?.data[j + 2] !== 255 && i == 0) {
                rgbMatrix[3][y][x] = 1;
            } else if (i != 1 && i != 2) {
                rgbMatrix[3][y][x] = 0;
            }
            if (x == imageData.width - 1) {
                x = -1;
                y++;
            }
            x++;
        }
        y = 0
    }
    return rgbMatrix
}



</script>

<style scoped>

</style>