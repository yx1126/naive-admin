export function getParentNode(node: HTMLElement, level = 1) {
    let index = 0,
        parentNode: HTMLElement | null = node.parentNode as HTMLElement;
    while(index < level - 1) {
        parentNode = parentNode?.parentNode as HTMLElement;
        index++;
    }
    return parentNode;
}

export function $select(selectors: keyof HTMLElementTagNameMap | string) {
    return document.querySelector(selectors);
}

export default {};
