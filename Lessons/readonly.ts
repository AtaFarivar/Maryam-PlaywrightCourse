class Person {
  readonly nationalId: string; // ← این قفل می‌شه

  constructor(id: string) {
    this.nationalId = id; // ✅ اینجا اوکیه — یک‌بار مقدار گرفت
  }
}

const ata = new Person("1234567890");

console.log(ata.nationalId); //  می‌تونم بخونم
ata.nationalId = "9999999999"; // خطا! نمی‌تونی عوضش کنی
