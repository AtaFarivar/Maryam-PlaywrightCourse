await page.goto("https://booking.com");

// اگه پاپ‌آپ اومد، ببندش. اگه نیومد، ادامه بده
try {
  await page.locator(".signin-popup-close").click();
  console.log("پاپ‌آپ اومد، بستمش");
} catch {
  console.log("پاپ‌آپ نیومد، ادامه می‌دم");
}
