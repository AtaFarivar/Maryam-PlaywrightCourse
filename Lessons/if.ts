const age = 20;

if (age >= 18) {
  console.log("بزرگسالی");
}

const age = 15;

if (age >= 18) {
  console.log("بزرگسالی");
} else {
  console.log("کوچیکی");
}

const light = "yellow";

if (light === "green") {
  console.log("برو");
} else if (light === "yellow") {
  console.log("آماده شو");
} else {
  console.log("وایسا");
}

const battery = 15;

if (battery < 20) {
  console.log("⚠️ شارژر رو بزن، الانه که خاموش شه");
} else if (battery < 50) {
  console.log("🔋 بد نیست، ولی مراقب باش");
} else {
  console.log("✅ خیالت راحت");
}
