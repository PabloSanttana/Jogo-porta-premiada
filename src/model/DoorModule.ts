export default class DoorModule {
  #number: number;
  #gift: boolean;
  #selected: boolean;
  #open: boolean;

  constructor(number: number, gift = false, selected = false, open = false) {
    this.#number = number;
    this.#gift = gift;
    this.#selected = selected;
    this.#open = open;
  }

  get number() {
    return this.#number;
  }

  get gift() {
    return this.#gift;
  }

  get selected() {
    return this.#selected;
  }
  get open() {
    return this.#open;
  }

  deselect() {
    const setected = false;
    return new DoorModule(this.number, this.gift, setected, this.open);
  }
  toggleSelected() {
    const setected = !this.selected;
    return new DoorModule(this.number, this.gift, setected, this.open);
  }
  openDoor() {
    const open = true;
    return new DoorModule(this.number, this.gift, this.selected, open);
  }
}
