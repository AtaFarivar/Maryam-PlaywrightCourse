// این تابع رو در دسترس بقیه‌ی فایل‌ها بذار
export function add(a: number, b: number) {
  return a + b;
}

// این constant رو هم در دسترس بذار
export const PI = 3.14;

// این تابع فقط توی همین فایل قابل استفاده‌ست (export نداره)
function internalHelper() {
  console.log("این مخفیه");
}
// بیار add و PI رو از فایل math
import { add, PI } from "./math";

console.log(add(2, 3)); // 5
console.log(PI); // 3.14
