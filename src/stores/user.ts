import { defineStore } from "pinia";
// import { ref } from "vue";

export interface UserState {
    info: { readonly [key: string]: any } | null;
    count: number;
}

const useUserStore = defineStore({
    id: "user",
    state: (): UserState => ({
        info: null,
        count: 0,
    }),
    getters: {
        doubleCount: s => s.count * 2,
    },
    actions: {
        increment() {
            this.count++;
        },
    }
});
// const useUserStore = defineStore("user", () => {
//     const count = ref(0);
//     const info = ref({});

//     const increment = () => {
//         count.value++;
//     };

//     return {
//         count,
//         info,
//         increment,
//     };
// }, {
//     persistedstate: {
//         paths: ["count", "info"]
//     }
// });

export { useUserStore };

export default useUserStore;
