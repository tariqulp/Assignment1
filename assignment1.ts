{
  //
  function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  /*   console.log(formatString("hello")); // "HELLO"
  console.log(formatString("HeLLo", true)); // "HELLO"
  console.log(formatString("HELLO", false)); // "hello" */
  //

  type Item = {
    title: string;
    rating: number;
  };

  // Function using the type
  function filterByRating(items: Item[]): Item[] {
    return items.filter((item) => item.rating >= 4);
  }
  const books: Item[] = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  // console.log(filterByRating(books));
  //
  // Generic function to concatenate multiple arrays
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  /* console.log(concatenateArrays(["a", "b"], ["c"]));
  console.log(concatenateArrays([1, 2], [3, 4], [5])); */

  //
  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");

  /* console.log(myCar.getInfo());
  console.log(myCar.getModel()); */

  //

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  /*   console.log(processValue("therickypsm"));
  console.log(processValue(15)); */
  //

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let mostExpensive = products[0];

    for (const product of products) {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    }

    return mostExpensive;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  // console.log(getMostExpensiveProduct(products));

  //

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }

  /*   console.log(getDayType(Day.Monday));
  console.log(getDayType(Day.Sunday)); */

  //

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); // 1 second delay
    });
  }

  /*   squareAsync(4).then(console.log);
  squareAsync(-3).catch(console.error); */

  //
}
