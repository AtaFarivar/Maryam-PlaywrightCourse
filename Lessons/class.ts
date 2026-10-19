/* class Car {
  brand: string;
  color: string;
  ownerName: string;
  year: number;

drive(){
  console.log("ماشین درحال حرکت است");
}
stop(){
  console.log("ماشین متوقف شد");

}
}
const myCar = new Car();
myCar.brand = "Toyota";
myCar.color = "Blue";
myCar.ownerName = "Maryam";
myCar.year=2026;
myCar.drive();
myCar.stop();
 */
class Car {
  brand: string;
  color: string;
  ownerName: string;
  year: number;

  constructor(brand: string, color: string, ownerName: string, year: number) {
    this.brand = brand;
    this.color = color;
    this.ownerName = ownerName;
    this.year = year;
  }
  drive() {
    console.log("ماشین درحال حرکت است");
  }
  stop() {
    console.log("ماشین متوقف شد");
  }
}
const myCar = new Car("Toyota", "Blue", "Maryam", 2026);
const mycar1 = new Car("Honda", "Red", "Ali", 2020);
const myCar2 = new Car("Ford", "Black", "Sara", 2022);
myCar.drive();
