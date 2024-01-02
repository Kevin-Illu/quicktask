class Select {
    constructor(id) {
        this.setOptions = (options) => {
            options.forEach((option) => {
                const optionTag = document.createElement('option');
                optionTag.value = option;
                optionTag.innerText = option;
                this.select.appendChild(optionTag);
            });
        };
        this.getValue = () => {
            const option = this.select.options[this.select.selectedIndex];
            return option.value === 'add state' ? 'To-do' : option.value;
        };
        this.setCurrentValue = (state) => {
            const current = this.states.indexOf(state);
            this.select.selectedIndex = current;
        };
        this.cleanOptions = () => {
            for (let i = this.select.options.length - 1; i >= 0; i--) {
                this.select.remove(i);
            }
        };
        this.select = document.createElement('select');
        this.select.setAttribute('id', id);
        this.states = [
            'Active',
            'To-do',
            'Waiting',
            'Canceled',
            'Deferred',
            'Completed',
        ];
    }
}
export default Select;
