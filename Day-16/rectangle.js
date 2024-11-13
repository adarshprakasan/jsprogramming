class rectangle {
  constructor(len, wid) {
    this.length = len;
    this.width = wid;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

let rect1 = new rectangle(10, 20);

console.log(rect1);
console.log("Area :", rect1.area());
console.log("Perimeter :", rect1.perimeter());
