import { getUser } from "User";

describe("describe", () => {
  test("test", () => {
    const user: { name: string; age: number } = getUser();
    expect(user.name).toEqual("Uasia");
  });
});
