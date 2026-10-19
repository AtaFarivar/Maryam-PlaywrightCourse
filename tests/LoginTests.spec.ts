import { test } from "@playwright/test";
import { CommonActions } from "../common/CommonActions";
import { LoginLocators } from "../pages/LoginLocators";
import { MESSAGES } from "../data/messages";
import { URLS } from "../data/urls";
import { USERS } from "../data/users";

test.describe("Login Tests", () => {
  let common: CommonActions;
  let login: LoginLocators;

  test.beforeEach(async ({ page }) => {
    common = new CommonActions(page);
    login = new LoginLocators(page);
    //Navigate to a website
    await common.goto(URLS.baseUrl);

    //Validate the login page and elements

    await common.expectTitle(URLS.title);
    await common.expectVisible(login.usernameInput);
    await common.expectEnabled(login.usernameInput);
    await common.expectVisible(login.passwordInput);
    await common.expectEnabled(login.passwordInput);
    await common.expectVisible(login.loginBtn);
    await common.expectEnabled(login.loginBtn);
  });

  test(
    "1-Successful Login Test",
    { tag: ["@smoke", "@critical", "@regression"] },
    async () => {
      await common.fill(login.usernameInput, USERS.standard.username);
      await common.fill(login.passwordInput, USERS.standard.password);
      await common.expectValue(login.usernameInput, USERS.standard.username);
      await common.expectValue(login.passwordInput, USERS.standard.password);
      await common.click(login.loginBtn);
      await common.expectUrl(URLS.successfulLoginUrl);
    },
  );
  test(
    "2-Wrong Username Test",
    { tag: ["@smoke", "@regression"] },
    async () => {
      await common.fill(login.usernameInput, USERS.wrongUser.username);
      await common.fill(login.passwordInput, USERS.wrongUser.password);
      await common.expectValue(login.usernameInput, USERS.wrongUser.username);
      await common.expectValue(login.passwordInput, USERS.wrongUser.password);
      await common.click(login.loginBtn);
      await common.expectVisible(login.errorMessage);
      await common.expectText(login.errorMessage, MESSAGES.wrongCredentials);
    },
  );
  test(
    "3-Wrong Password Test",
    { tag: ["@smoke", "@regression"] },
    async () => {
      await common.fill(login.usernameInput, USERS.wrongPass.username);
      await common.fill(login.passwordInput, USERS.wrongPass.password);
      await common.expectValue(login.usernameInput, USERS.wrongPass.username);
      await common.expectValue(login.passwordInput, USERS.wrongPass.password);
      await common.click(login.loginBtn);
      await common.expectVisible(login.errorMessage);
      await common.expectText(login.errorMessage, MESSAGES.wrongCredentials);
    },
  );
  test("4-Empty Username Test", { tag: ["@regression"] }, async () => {
    await common.fill(login.usernameInput, USERS.emptyUser.username);
    await common.fill(login.passwordInput, USERS.emptyUser.password);
    await common.expectValue(login.usernameInput, USERS.emptyUser.username);
    await common.expectValue(login.passwordInput, USERS.emptyUser.password);
    await common.click(login.loginBtn);
    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptyUser);
  });
  test("5-Empty Password Test1 ", { tag: ["@regression"] }, async () => {
    await common.fill(login.usernameInput, USERS.emptyPass.username);
    await common.fill(login.passwordInput, USERS.emptyPass.password);
    await common.expectValue(login.usernameInput, USERS.emptyPass.username);
    await common.expectValue(login.passwordInput, USERS.emptyPass.password);
    await common.click(login.loginBtn);
    await common.expectVisible(login.errorMessage);
    await common.expectText(login.errorMessage, MESSAGES.emptyPass);
  });
});
