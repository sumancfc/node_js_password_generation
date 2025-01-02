import calculateStrength from "../helpers/calculateStrength";

describe("calculateStrength", () => {
  it('should return "Very Weak" for a password with no criteria met', () => {
    expect(calculateStrength("abcdefghij")).toBe("Very Weak");
  });

  it('should return "Weak" for a password meeting one criterion', () => {
    expect(calculateStrength("abcdefghijklm")).toBe("Weak");
  });

  it('should return "Moderate" for a password meeting three criteria', () => {
    expect(calculateStrength("Abcdef1234")).toBe("Moderate");
  });

  it('should return "Strong" for a password meeting four criteria', () => {
    expect(calculateStrength("Abcdef1234!")).toBe("Strong");
  });

  it('should return "Very Strong" for a password meeting all criteria', () => {
    expect(calculateStrength("A1b2C3d4E5f6G7!")).toBe("Very Strong");
  });
});
