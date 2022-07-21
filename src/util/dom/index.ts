export function getParentNode(node: HTMLElement, level = 0) {
    let index = 0,
        parentNode: HTMLElement | null = node.parentNode as HTMLElement;
    while (index < level) {
        parentNode = parentNode?.parentNode as HTMLElement;
        index++;
    }
    return parentNode;
}

export default {};
