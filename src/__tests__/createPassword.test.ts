import createPassword from "../helpers/createPassword";

describe("createPassword", () => {
  it("should generate a password of the specified length", () => {
    const length = 12;
    const password = createPassword(length, true, true, "");
    expect(password).toHaveLength(length);
  });

  it("should include symbols if specified", () => {
    const password = createPassword(12, true, true, "");
    expect(/[!@#$%^&*(),.?":{}|<>]/.test(password)).toBeTruthy();
  });

  it("should include numbers if specified", () => {
    const password = createPassword(12, true, true, "");
    expect(/\d/.test(password)).toBeTruthy();
  });

  it("should use custom character set if provided", () => {
    const customSet = "abcd1234";
    const password = createPassword(12, false, false, customSet);
    expect(
      [...password].every((char) => customSet.includes(char))
    ).toBeTruthy();
  });

  it("should generate a password with only alphabets if no symbols or numbers are specified", () => {
    const password = createPassword(12, false, false, "");
    expect(/^[A-Za-z]+$/.test(password)).toBeTruthy();
  });

  it("should generate a password with only symbols if custom set contains only symbols", () => {
    const customSet = "!@#$%^&*()";
    const password = createPassword(12, true, false, customSet);
    expect(/^[!@#$%^&*()]+$/.test(password)).toBeTruthy();
  });

  it("should generate a password with only numbers if custom set contains only numbers", () => {
    const customSet = "0123456789";
    const password = createPassword(12, false, true, customSet);
    expect(/^[0-9]+$/.test(password)).toBeTruthy();
  });
});
