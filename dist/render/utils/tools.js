export const RemoveChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
export const addStyles = (element, styles) => {
    styles.forEach((style) => element.classList.add(style));
};
