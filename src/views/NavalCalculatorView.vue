<template>
    <div class="container">
        <!-- Selezione attaccante -->
        <div class="row">
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

            <div class="col">
                <h1 id="titoloNave">Nave</h1>
                <canvas ref="CanvasShip"></canvas>
                <input type="range" min="-180" max="180" value="0" class="slider" id="slider" ref="slider">
            </div>

            <div class="col">
                <h1 id="danniNave">Danni</h1>
                <canvas ref="CanvasDamage"></canvas>
            </div>
            <div id="battle button">
                <input type="button" id="button" ref="button" value="Initiate Battle">
            </div>
            <canvas ref="CanvasLoad"></canvas>
        </div>
    </div>
</template>

<script setup lang="ts">
//import section
import { spaceShip } from "@/assets/SpaceShip";
import { armiNavi } from "@/assets/ArmiNavi";
import { computed, onMounted, ref, watch } from "vue";
import { exportDefaultSpecifier, jsxClosingElement, numberLiteralTypeAnnotation } from "@babel/types";

const CanvasShip = ref<HTMLCanvasElement | undefined>(undefined)
const CanvasDamage = ref<HTMLCanvasElement | undefined>(undefined)
const CanvasLoad = ref<HTMLCanvasElement | undefined>(undefined)
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
    init(attacker.value?.piantaNave!, function (rgbMatrix: number[][][] | undefined, damageMatrix: number[][][], blockSize: number, blockTotal: number) {
        htmlPlotNave(rgbMatrix, damageMatrix, blockSize, blockTotal)
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

function computeDamageMatrix(planMatrix: number[][][], initialPosition: number[], angle: number, Selector: number) { // Costruisce il path del proiettile
    if (!planMatrix) {
        return
    }
    let damageMatrix = planMatrix.map(a => [...a.map(x => [...x])])
    // https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

    let x = initialPosition
    let p = initialPosition

    let projectileStrength = 100.0
    let dt = 0.05
    let d = [dt * Math.cos(angle), dt * Math.sin(angle)]
    let hasHitWall = false
    let hasHitRoom = false
    let hitCounter = 0
    let path: number[][] = []

    const floodFill = (image: number[][][], sr: number, sc: number, newColor: number[]) => {

        const current = [image[0][sr][sc], image[1][sr][sc], image[2][sr][sc]];
        if (current[0] === newColor[0] && current[1] === newColor[1] && current[2] === newColor[2]) {
            return image;
        }

        fill(image, sr, sc, newColor, current);
        return image;
       
    };

    const fill = (image: number[][][], sr: number, sc: number, newColor: number[], current: number[]) => {

        if (image[0][sr][sc] !== current[0] || image[1][sr][sc] !== current[1] || image[2][sr][sc] !== current[2]) { return }

        image[0][sr][sc] = newColor[0];
        image[1][sr][sc] = newColor[1];
        image[2][sr][sc] = newColor[2];

        fill(image, sr - 1, sc, newColor, current);
        fill(image, sr + 1, sc, newColor, current);
        fill(image, sr, sc - 1, newColor, current);
        fill(image, sr, sc + 1, newColor, current);

    }

    x = x.map((v, i) => v + d[i])

    while (0.0 <= x[0] && x[0] <= 1.0 * planMatrix[3][0].length
        && 0.0 <= x[1] && x[1] <= 1.0 * planMatrix[3].length
        && projectileStrength > 0.0) {

        const [xj, xi] = [Math.floor(x[0]), Math.floor(x[1])]
        const [pj, pi] = [Math.floor(p[0]), Math.floor(p[1])]

        if (damageMatrix[3][xi][xj] == 1) {
            if (xj > pj || xj < pj || xi < pi || xi > pi) {
                damageMatrix[3][xi][xj] = -1;
                path[hitCounter] = [xi, xj]
                hasHitWall = true
            }
        }
        else if (damageMatrix[3][xi][xj] == 2) {
            if (xj > pj || xj < pj || xi < pi || xi > pi) {
                damageMatrix[3][xi][xj] = -2 - hitCounter
                path[hitCounter] = [xi, xj]
                hasHitRoom = true
            }
        }

        if (hasHitWall) {
            projectileStrength -= 10
            hitCounter += 1
            hasHitWall = false
        } else if (hasHitRoom) {
            projectileStrength -= 2
            hitCounter += 1
            hasHitRoom = false
        }


        p = [...x]

        x = x.map((v, i) => v + d[i])
    }

    hitCounter = 0

    path.forEach((row, i) => {
        
        if (damageMatrix[3][path[i][0]][path[i][1]] === -1) { hitCounter = 0 }
        else { hitCounter += 1 }
        if (hitCounter > 10) {
            damageMatrix = floodFill(damageMatrix, path[i][0], path[i][1], [204, 204, 0])
        }
        if (hitCounter > 20){
            damageMatrix = floodFill(damageMatrix, path[i][0], path[i][1], [204, 0, 0])
        }        
    })
    return damageMatrix
}

function htmlPlotNave(rgbMatrix: plotMatrix, damageMatrix: number[][][], blockSize: number, blockTotal: number) { // pianta nave

    const ctxShip = CanvasShip.value?.getContext("2d")
    const ctxDamage = CanvasDamage.value?.getContext("2d")
    const arrowLength = 50

    const toCanvas = (x: number) => 20 + x * blockTotal
    const fromCanvas = (x: number) => (x - 20) / blockTotal
    const toRadians = (x: number) => x / 360 * Math.PI * 2
    const drawPlan = (i: number, j: number, color: string) => {
        if (!ctxShip)
            return

        ctxShip.fillStyle = color
        ctxShip.fillRect(toCanvas(j), toCanvas(i), blockSize, blockSize)
    }
    const drawDamage = (i: number, j: number, color: string) => {
        if (!ctxDamage)
            return

        ctxDamage.fillStyle = color
        ctxDamage.fillRect(toCanvas(j), toCanvas(i), blockSize, blockSize)
    }

    let START: number[] | null = null

    if (CanvasShip.value) {
        CanvasShip.value.onmousedown = (e) => {
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
        if (!ctxShip || !ctxDamage || !CanvasShip.value || !slider.value)
            return

        ctxShip.fillStyle = "Grey"
        ctxShip.fillRect(0, 0, CanvasShip.value.width, CanvasShip.value.height);
        ctxDamage.fillStyle = "Grey"
        ctxDamage.fillRect(0, 0, CanvasShip.value.width, CanvasShip.value.height);

        let shipPlan: plotMatrix = []
        let shipDamage: plotMatrix = []

        if (START === null || slider.value === null) {
            shipPlan = rgbMatrix
            shipDamage = damageMatrix


        } else {
            shipPlan = computeHitPathMatrix(rgbMatrix, START, toRadians(parseInt(slider.value.value)))
            shipDamage = computeDamageMatrix(damageMatrix, START, toRadians(parseInt(slider.value.value)), 0)
        }
        if (!shipPlan || !shipDamage)
            return

        shipPlan[3].forEach((row, i) => {
            row.forEach((item, j) => {
                if (!shipPlan)
                    return
                switch (item) {
                    case 0:
                        drawPlan(i, j, "white");
                        break
                    case 1:
                        drawPlan(i, j, `rgb(${shipPlan[0][i][j]}, ${shipPlan[1][i][j]}, ${shipPlan[2][i][j]})`);
                        break
                    case -1:
                        drawPlan(i, j, `rgb(100, 100, 100)`);
                }
            })
        })
        shipDamage[3].forEach((row, i) => {
            row.forEach((item, j) => {
                if (!shipDamage)
                    return
                switch (Math.abs(item)) {
                    case 0:
                        drawDamage(i, j, "white");
                        break
                    case 2:
                        drawDamage(i, j, `rgb(${shipDamage[0][i][j]}, ${shipDamage[1][i][j]}, ${shipDamage[2][i][j]})`);
                        break
                    case 1:
                        drawDamage(i, j, `black`);
                }
            })
        })


        if (START != null) {
            console.log(START)
            const POS = [toCanvas(START[0]), toCanvas(START[1])]

            const sliderAngle = Number(slider.value) / 360 * Math.PI * 2

            ctxShip.strokeStyle = "white"
            ctxShip.lineWidth = 2
            ctxShip.beginPath();
            ctxShip.moveTo(POS[0], POS[1])
            ctxShip.lineTo(POS[0] + Math.cos(sliderAngle) * arrowLength
                , POS[1] + Math.sin(sliderAngle) * arrowLength)
            ctxShip.stroke()
        }
    }
    const sliderValue = [START, slider.value]
    drawShip()

}

function init(src: string, callback: Function) {
    var img = new Image;
    const blockSize = 15
    const blockSeparation = 2
    const blockTotal = blockSize + blockSeparation

    if (!/^data/.test(src))
        img.crossOrigin = ''
    let rgbMatrix: plotMatrix = [];
    img.src = src
    img.onload = function () {
        rgbMatrix = computeRGBmatrix(img, blockTotal)
        if (!rgbMatrix)
            return
        let damageMatrix = rgbMatrix.map(a => [...a.map(x => [...x])])
        rgbMatrix[3].forEach((row, i) => {
            row.forEach((item, j) => {
                if (!rgbMatrix)
                    return

                if (rgbMatrix[0][i][j] === 0 && rgbMatrix[1][i][j] === 0 && rgbMatrix[2][i][j] === 0) {
                    damageMatrix[3][i][j] = 1
                }
                else if (rgbMatrix[3][i][j] === 0) { damageMatrix[3][i][j] = 0 }
                else {
                    damageMatrix[0][i][j] = 0
                    damageMatrix[1][i][j] = 255
                    damageMatrix[2][i][j] = 85
                    damageMatrix[3][i][j] = 2
                }
            })
        })
        callback(rgbMatrix, damageMatrix, blockSize, blockTotal)
    }
}
function computeRGBmatrix(img: HTMLImageElement, blockTotal: number) {
    const ctx = CanvasLoad.value?.getContext("2d");

    let rgbMatrix: plotMatrix = [];
    if (CanvasShip.value != undefined && CanvasDamage.value != undefined) {
        CanvasShip.value.width = img.width * blockTotal + 40
        CanvasShip.value.height = img.height * blockTotal + 40
        CanvasDamage.value.width = img.width * blockTotal + 40
        CanvasDamage.value.height = img.height * blockTotal + 40
    }
    ctx?.drawImage(img, 0, 0)
    if (img.width !== 0 && img.height !== 0) {
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