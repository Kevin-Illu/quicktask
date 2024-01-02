import Button from '../../../components/Button.js';
const maximize = () => {
    const btn = document.querySelector('.btn-maximize');
    btn.classList.toggle('active');
    btn.classList.contains('active')
        ? window.mainApi.trafficsLightsAction('maximize')
        : window.mainApi.trafficsLightsAction('rezise');
};
const minimize = () => window.mainApi.trafficsLightsAction('minimize');
const close = () => window.mainApi.trafficsLightsAction('close');
const btnMaximizeSettings = {
    iconPath: './public/assets/maximize.svg',
    action: maximize,
    styles: ['btn', 'btn-maximize'],
};
const btnMinimizeSettings = {
    iconPath: './public/assets/minimize.svg',
    action: minimize,
    styles: ['btn', 'btn-minimize'],
};
const btnCloseSettings = {
    iconPath: './public/assets/close.svg',
    action: close,
    styles: ['btn', 'btn-close'],
};
export const btnMaximize = new Button(btnMaximizeSettings);
export const btnMinimize = new Button(btnMinimizeSettings);
export const btnClose = new Button(btnCloseSettings);
