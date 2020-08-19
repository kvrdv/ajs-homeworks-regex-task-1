export default class Validator {
  constructor(userName) {
    this.username = userName;
  }

  validateUsername() {
    const val1 = /^[\w-]+$/.test(this.username); // латинские буквы, символы тире -, подчёркивания _ и цифры (0-9) // ожидается: true
    const val2 = /\d{3}/.test(this.username); // не более трёх цифр подряд // ожидается: false
    const val3 = /^[^\d-\_]/.test(this.username); // не начинается цифрами, символами подчёркивания или тире // ожидается: true
    const val4 = /[^\d-\_]$/.test(this.username); // не заканчивается цифрами, символами подчёркивания или тире // ожидается: true

    // console.log(val1);
    // console.log(val2);
    // console.log(val3);
    // console.log(val4);

    return ((val1 === val3 === val4 === true) && (val2 === false));
  }
}
