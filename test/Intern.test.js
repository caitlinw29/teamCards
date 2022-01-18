const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    test("should return an object when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect(obj).toEqual({name: undefined, id: undefined, email: undefined, school: undefined});
    });

    test("should set name, id, email, and school through arguments", () => {
      const name = "Caitlin";
      const id = 5;
      const email = "email@yahoo.com";
      const school = "GT"

      const obj = new Intern("Caitlin", 5, "email@yahoo.com", "GT");

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.school).toEqual(school);
    });
  });

  describe("getSchool", () => {
    test("should return a string", () => {
      const obj = new Intern("Caitlin", 5, "yahoo@yahoo.com", "GT").getSchool();

      expect(typeof obj).toEqual("string");
    });

    test("should return a string that contains the Intern's school", () => {
      const obj = new Intern("Caitlin", 5, "yahoo@yahoo.com", "GT").getSchool();

      expect(obj).toEqual("GT");
    });
  });

  describe("getRole", () => {
    test("should return Intern", () => {
      const obj = new Intern().getRole();

      expect(obj).toEqual("Intern");
    });
  });
});