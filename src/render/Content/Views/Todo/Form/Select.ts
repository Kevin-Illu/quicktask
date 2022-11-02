import { todoState } from "../../../../types/index";

class Select {
  public select: HTMLSelectElement;

  constructor(id: string) {
    this.select = document.createElement('select');
    this.select.setAttribute('id', id);
  }

  public setOptions = (options: string[]): void => {
    options.forEach(option => {
      const optionTag = document.createElement('option');
      optionTag.value = option;
      optionTag.innerText = option;
      this.select.appendChild(optionTag);
    })
  }

  public getValue = (): todoState => {
    let option = this.select.options[this.select.selectedIndex]
    return option.value === "add state" ? "open" : option.value;
  }

  public setCurrentValue = (state: todoState): void => {
    this.select.childNodes.forEach(option => {
      if (option.value === state) {
        option.setAttribute('selected', 'selected');
        return;
      }
    })
  }

  public setDefaultValue = (): void => {
    // console.log(this.select);
  }

  public cleanOptions = () => {
    for (let i = this.select.options.length - 1; i >= 0; i--) {
      this.select.remove(i);
    }
  }
}

export default Select;
