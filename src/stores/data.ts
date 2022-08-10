import {defineStore} from "pinia";
import type {AllData} from "@/assets/Types";

export const useDataStore = defineStore({
    id: 'data',
    state: () => ({
        data: undefined as AllData | undefined
    }),
    getters: {
        isDataLoaded: state => state.data !== undefined,
        getArmi: state => state.data?.armi ?? [],
        getArmature: state => state.data?.armature ?? [],
        getCronologia: state => state.data?.cronologia ?? [],
        getPersonaggi: state => state.data?.personaggi ?? [],
        getProfessions: state => state.data?.professions ?? [],
    },
    actions: {
        loadData(loadedData: AllData) {
            this.data = loadedData;
        },
        deleteData() {
            this.data = undefined;
        },
    }
});