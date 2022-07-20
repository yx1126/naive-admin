import { useApp } from "@/hooks";
export function useStyle() {
    const app = useApp();
    console.log(app);
    return {
        backgroundColor: "#f5f7f9",
    };
}

export default {};
