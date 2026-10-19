export const USERS = {
  standard: {
    username: "standard_user",
    password: "secret_sauce",
  },
  wrongPass: {
    username: "standard_user",
    password: "wrong_password",
  },
  wrongUser: {
    username: "wrong_user",
    password: "secret_sauce",
  },
  emptyUser: {
    username: "",
    password: "secret_sauce",
  },
  emptyPass: {
    username: "standard_user",
    password: "",
  },
} as const;
