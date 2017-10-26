import Benchmark from "benchmarkjs-pretty";
import { isValidIBAN } from "../src/index";
// tslint:disable-next-line no-implicit-dependencies
import { isValid } from "iban";

const iban = "AL47212110090000000235698741";
let counter = 0;
new Benchmark("iban")
  .add("iban.js", () => {
    if (isValid(iban)) {
      counter++;
    }
  })
  .add("miniban", () => {
    if (isValidIBAN(iban)) {
      counter++;
    }
  })
  .run();
