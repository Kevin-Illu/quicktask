export const RemoveChild = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};
