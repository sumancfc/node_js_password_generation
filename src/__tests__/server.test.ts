import request from "supertest";
import app from "../app";
import createPassword from "../helpers/createPassword";
import savePassword from "../helpers/savePassword";

// Mock createPassword and savePassword
jest.mock("../helpers/createPassword", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../helpers/savePassword", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("API Endpoints", () => {
  const mockCreatePassword = createPassword as jest.MockedFunction<
    typeof createPassword
  >;
  const mockSavePassword = savePassword as jest.MockedFunction<
    typeof savePassword
  >;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the index page", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("<title>Password Generator</title>");
  });

  it("should generate a password with the given options", async () => {
    const options = {
      length: 12,
      includeSymbols: true,
      includeNumbers: true,
      customSet: "",
      saveToFile: false,
    };

    mockCreatePassword.mockReturnValue("mockPassword");

    const response = await request(app).post("/generate").send(options);

    expect(response.status).toBe(200);
    expect(response.body.password).toBe("mockPassword");
    expect(mockCreatePassword).toHaveBeenCalledWith(
      options.length,
      options.includeSymbols,
      options.includeNumbers,
      options.customSet
    );
  });

  it("should save the generated password if saveToFile is true", async () => {
    const options = {
      length: 12,
      includeSymbols: true,
      includeNumbers: true,
      customSet: "",
      saveToFile: true,
    };

    mockCreatePassword.mockReturnValue("mockPassword");

    const response = await request(app).post("/generate").send(options);

    expect(response.status).toBe(200);
    expect(response.body.password).toBe("mockPassword");
    expect(mockSavePassword).toHaveBeenCalledWith("mockPassword");
  });
});
