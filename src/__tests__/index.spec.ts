import { equal } from "assert";
import { isValidIBAN as isValid } from "../";

describe("IBAN", () => {
  describe(".isValid", () => {
    it("should return false when input is not a String", () => {
      equal(isValid(1), false);
      equal(isValid([]), false);
      equal(isValid({}), false);
      equal(isValid(true), false);
    });

    it("should return false for an unknown country code digit", () => {
      equal(isValid("ZZ68539007547034"), false);
    });

    it("should return true for a valid belgian IBAN", () => {
      equal(isValid("BE68539007547034"), true);
    });

    it("should return true for a valid Dutch IBAN", () => {
      equal(isValid("NL86INGB0002445588"), true);
    });

    it("should return true for a valid Moldovan IBAN", () => {
      equal(isValid("MD75EX0900002374642125EU"), true);
    });

    // iban.js checks for this but all online validators mark this as invalid...
    // it("should return true for a valid Saint-Lucia IBAN", () => {
    //   equal(isValid("LC55HEMM000100010012001200023015"), true);
    // });

    it("should return false for an incorrect check digit", () => {
      equal(isValid("BE68539007547035"), false);
    });
  });
});
