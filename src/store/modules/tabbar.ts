import { defineStore } from 'pinia';

export interface TabbarState {
    selected: number;
}

// @ts-ignore
const useTabbarState = defineStore('app', {
    state: (): TabbarState => ({
        selected: 0
    }),

    getters: {
        
    },

    actions: {
        select(selected :number) {
            this.selected = selected
        }
    },
});

export default useTabbarState;
