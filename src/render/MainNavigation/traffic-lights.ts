import Button from '../components/Button.js';
import { Settings } from '../types/index';

const close = () => window.mainApi.trafficsLightsAction('close');
const maximize = () => {
	const btn: HTMLButtonElement | null = document.querySelector('.btn-maximize');
	if (btn) {
		btn.classList.toggle('active')
		btn.classList.contains('active') ?
			window.mainApi.trafficsLightsAction('maximize')
			: window.mainApi.trafficsLightsAction('rezise');
	}
};
const minimize = () => window.mainApi.trafficsLightsAction('minimize');

const btnMaximizeSettings = {
	icon: './public/assets/maximize.svg',
	text: null,
	func: maximize,
	styles: ["btn", "btn-maximize"]
}
const btnMinimizeSettings = {
	icon: './public/assets/minimize.svg',
	text: null,
	func: minimize,
	styles: ["btn", "btn-minimize"],
}
const btnCloseSettings: Settings = {
	icon: './public/assets/close.svg',
	text: null,
	func: close,
	styles: ["btn", "btn-close"],
}

export const btnMaximize = new Button(btnMaximizeSettings);
export const btnMinimize = new Button(btnMinimizeSettings);
export const btnClose = new Button(btnCloseSettings);
