class Select {
    constructor() {
        this.setOptions = (options) => {
            options.forEach(option => {
                const optionTag = document.createElement('option');
                optionTag.value = option;
                optionTag.innerText = option;
                this.select.appendChild(optionTag);
            });
        };
        this.getOption = () => {
            let option = this.select.options[this.select.selectedIndex];
            return option.value === 'add state' ? 'open' : option.value;
        };
        this.setDefaultValue = (state) => {
            this.select.childNodes.forEach(option => {
                if (option.value === state)
                    option.setAttribute('selected', 'selected');
            });
        };
        this.select = document.createElement('select');
        this.select.setAttribute('id', 'todo-state');
    }
}
export default Select;
