const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    test("should return an object when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect(obj).toEqual({name: undefined, id: undefined, email: undefined});
    });

    test("should set name, id, and email through arguments", () => {
      const name = "Caitlin";
      const id = 5;
      const email = "email@yahoo.com";

      const obj = new Employee("Caitlin", 5, "email@yahoo.com");

      expect(obj.name).toEqual(name);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });

  describe("getName", () => {
    test("should return a string", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getName();

      expect(typeof obj).toEqual("string");
    });

    test("should return a string that contains the Employee name", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getName();

      expect(obj).toEqual("Caitlin");
    });
  });

  describe("getId", () => {
    test("should return a number", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getId();

      expect(typeof obj).toEqual("number");
    });

    test("should return a number that matches the Employee id", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getId();

      expect(obj).toEqual(5);
    });
  });

  describe("getEmail", () => {
    test("should return a string", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getEmail();

      expect(typeof obj).toEqual("string");
    });

    test("should return a string that contains the Employee email", () => {
      const obj = new Employee("Caitlin", 5, "yahoo@yahoo.com").getEmail();

      expect(obj).toEqual("yahoo@yahoo.com");
    });
  });

  describe("getRole", () => {
    test("should return Employee", () => {
      const obj = new Employee().getRole();

      expect(obj).toEqual("Employee");
    });
  });
});