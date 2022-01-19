const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    test("should return an object when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect(obj).toEqual({name: undefined, id: undefined, email: undefined, officeNumber: undefined});
    });

    test("should set name, id, email, and officeNumber through arguments", () => {
      const name = "Caitlin";
      const id = 5;
      const email = "email@yahoo.com";
      const officeNumber = 10;

      const obj = new Manager("Caitlin", 5, "email@yahoo.com", 10);

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.officeNumber).toEqual(officeNumber);
    });
  });

  describe("getOfficeNumber", () => {
    test("should return a number", () => {
      const obj = new Manager("Caitlin", 5, "yahoo@yahoo.com", 10).getOfficeNumber();

      expect(typeof obj).toEqual("number");
    });

    test("should return a number that matches the Manager's office number", () => {
      const obj = new Manager("Caitlin", 5, "yahoo@yahoo.com", 10).getOfficeNumber();

      expect(obj).toEqual(10);
    });
  });

  describe("getRole", () => {
    test("should return Manager", () => {
      const obj = new Manager().getRole();

      expect(obj).toEqual("Manager");
    });
  });
});