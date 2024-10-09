// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    const totalItems = this.data.reduce((p) => {
      this.data == true;
      return p + 1;
    }, 0);
    return totalItems;
  }
  printNumbers() {
    //print the numbers in data
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i], i);
    }
  }
  odds() {
    //return the odd numbers in data
    const oddNumbers = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 >= 1) {
        oddNumbers.push(this.data[i]);
      }
    }
    return oddNumbers;
  }

  evens() {
    //return the even numbers in data
    const evenNumbers = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] % 2 == 0) {
        evenNumbers.push(this.data[i]);
      }
    }
    return evenNumbers;
  }
  sum() {
    //return the sum of the numbers
    const getSum = this.data.reduce((p, c) => {
      return p + c;
    }, 0);
    return getSum;
  }
  product() {
    //return the product of the numbers
    const getProduct = this.data.reduce((p, c) => {
      return p * c;
    }, 1);
    return getProduct;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    let nums = this.data.filter((number) => number > target);
    return nums;
  }

  howMany(target) {
    //return the count of a given number
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        count++;
      }
    }
    return count;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
