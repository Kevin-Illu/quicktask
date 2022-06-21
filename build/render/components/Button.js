import { addStyles } from '../utils/add-styles.js';
class Button {
    constructor({ icon = null, text = null, func = null, styles = [] }) {
        this.appendContent = (settings) => {
            const { icon, text, func, styles } = settings;
            addStyles(this.button, styles);
            if (func !== null)
                this.button.onclick = func;
            let p, img;
            if (!icon && !text) {
                const message = `Provide a valid icon or text for the 
			button if you provide both then the button will 
			contain icon and text`;
                throw new Error(message);
            }
            else if (icon && text) {
                const container = document.createElement("div");
                img = document.createElement("img");
                p = document.createElement('p');
                img.src = icon;
                p.innerText = text;
                container.appendChild(img);
                container.appendChild(p);
                this.button.appendChild(container);
            }
            else if (!icon) {
                p = document.createElement('p');
                p.innerText = text || 'no hay texto :/';
                this.button.appendChild(p);
            }
            else if (!text) {
                img = document.createElement('img');
                img.src = icon;
                this.button.appendChild(img);
            }
        };
        this.button = document.createElement("button");
        this._settings = { icon, text, func, styles };
        this.appendContent(this._settings);
    }
    ;
}
;
export default Button;
