export {}
type IactionSystemButton = 'close' | 'maximize' | 'resize' | 'minimize'
declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    mainApi: {
      // eslint-disable-next-line no-unused-vars
      trafficsLightsAction(action: IactionSystemButton): void
    }
  }
}
