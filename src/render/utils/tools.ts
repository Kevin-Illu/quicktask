export const RemoveChild = (parent: HTMLElement) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export const addStyles = (element: HTMLElement, styles: string[]): void => {
  styles.forEach((style) => element.classList.add(style))
}
