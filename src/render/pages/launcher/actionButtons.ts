import Button from '../../components/Button.js'

export const closeButton = new Button({
  iconPath: './public/assets/close.svg',
  events: {
    click: () => window.mainApi.trafficsLightsAction('close'),
  },
})

export const resizeButton = new Button({
  iconPath: './public/assets/maximize.svg',
  events: {
    click: () => {
      window.mainApi.trafficsLightsAction('maximize')
    },
  },
})

export const minimizeButton = new Button({
  iconPath: './public/assets/minimize.svg',
  events: {
    click: () => window.mainApi.trafficsLightsAction('minimize'),
  },
})
