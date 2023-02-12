export const addStyles = (element: HTMLElement, styles: string[]): void => {
  styles.forEach((style) => element.classList.add(style))
}
