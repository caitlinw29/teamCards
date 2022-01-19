const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    test("should return an object when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect(obj).toEqual({name: undefined, id: undefined, email: undefined, github: undefined});
    });

    test("should set name, id, email, and github through arguments", () => {
      const name = "Caitlin";
      const id = 5;
      const email = "email@yahoo.com";
      const github = "caitlinw"

      const obj = new Engineer("Caitlin", 5, "email@yahoo.com", "caitlinw");

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.github).toEqual(github);
    });
  });

  describe("getGithub", () => {
    test("should return a string", () => {
      const obj = new Engineer("Caitlin", 5, "yahoo@yahoo.com", "caitlinw").getGithub();

      expect(typeof obj).toEqual("string");
    });

    test("should return a string that contains the Engineer's github username", () => {
      const obj = new Engineer("Caitlin", 5, "yahoo@yahoo.com", "caitlinw").getGithub();

      expect(obj).toEqual("caitlinw");
    });
  });

  describe("getRole", () => {
    test("should return Engineer", () => {
      const obj = new Engineer().getRole();

      expect(obj).toEqual("Engineer");
    });
  });
});