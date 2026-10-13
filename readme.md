Q1 How does TypeScript enforce type safety in this object-oriented program?
===
TypeScript ensures type safety by checking that variables, constructor arguments, function parameters, and return values use  correct data types. It can catch errors during development and compilation before the program runs, making the code more safe.

Q2 How did inheritance reduce code duplication for PhysicalProduct and DigitalProduct?
===
Inheritance reduces code duplication by allowing `PhysicalProduct` and `DigitalProduct` to inherit shared properties and methods from the `Product` class. This avoids rewriting the same code in individual classes, makes the program simpler, and allows for each subclass to add specific properties and behavior.

Q3 What are the benefits of using encapsulation and access modifiers (public, private, protected) in this context?
===
Encapsulation and access modifiers help prevent bugs by controlling how other parts of the program access and/or modify object data. `private` can prevent other code from directly changing a product's price. `public` allows intended access to properties and methods. `protected` allows access within the class and its subclasses. These parameteres make the code safer and easier to maintain.

Q4 If you had to add a new type of product (e.g., a SubscriptionProduct), how would polymorphism make this extension straightforward?

Polymorphism makes it simple to add a `SubscriptionProduct` class because it can inherit shared properties and methods from `Product` we can also override rules if need be such as `getPriceWithTax()` to implement unique  pricing rules. The  `calculateTax()` function can process the new product type as is and we don't need to write a special function. This makes it  easier to extend and maintain the system.