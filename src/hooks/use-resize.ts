import { onMounted } from "vue";

export default function(){

    const width = $ref();

    function onResize(e: Event){
        console.log(e);
    }

    onMounted(() => {
        document.addEventListener("resize", onResize);
    });
    return {};
}
