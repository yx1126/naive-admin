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
    },
});
// const useUserStore = defineStore("user", () => {
//     const count = ref(0);

//     const increment = () => {
//         count.value++;
//     };

//     return {
//         count,
//         increment,
//     };
// });

export { useUserStore };

export default useUserStore;
