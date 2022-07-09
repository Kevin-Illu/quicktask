import { addStyles } from '../utils/add-styles.js';
class Button {
    constructor({ icon = null, text = null, func = null, styles = [] }) {
        this.appendContent = (settings) => {
            const { icon, text, func, styles } = settings;
            addStyles(this.button, styles);
            if (func !== null)
                this.button.onclick = func;
            if (!icon && !text) {
                const message = `Provide a valid icon or text for the 
			button if you provide both then the button will 
			contain icon and text`;
                throw new Error(message);
            }
            else if (icon && text) {
                this._img.src = icon;
                this._text.innerText = text;
                this._container.appendChild(this._img);
                this._container.appendChild(this._text);
                this.button.appendChild(this._container);
            }
            else if (!icon) {
                this._text.innerText = text || 'no hay texto :/';
                this.button.appendChild(this._text);
            }
            else if (!text) {
                this._img.src = icon;
                this.button.appendChild(this._img);
            }
        };
        this.renameButton = (text) => {
            this._text.innerText = text;
        };
        this.button = document.createElement("button");
        this._settings = { icon, text, func, styles };
        this._text = document.createElement("p");
        this._img = document.createElement("img");
        this._container = document.createElement("div");
        this.appendContent(this._settings);
    }
    ;
}
;
export default Button;
