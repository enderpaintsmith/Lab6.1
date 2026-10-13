import { PhysicalProduct } from "./models/PhysicalProduct";
import { DigitalProduct } from "./models/DigitalProduct";
import { calculateTax } from "./utils/taxCalculator";

const physicalProduct = new PhysicalProduct(
  "P001",
  "Guitar",
  500,
  4
);

const digitalProduct = new DigitalProduct(
  "D001",
  "Music Software",
  100,
  250
);

const products = [physicalProduct, digitalProduct];

for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Final Price: $${calculateTax(product).toFixed(2)}`);
    console.log("-----------------------------");
}