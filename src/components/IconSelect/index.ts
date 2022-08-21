import IconSelect from "./IconSelect.vue";

const svgList = Object.keys(import.meta.glob("../../assets/svg/*.svg")).map(item => {
    const splitList = item.split("/");
    return splitList[splitList.length - 1].split(".")[0];
});

export {
    svgList,
};


export default IconSelect;
