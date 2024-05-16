function canIterate(obj) {
    // checks for null and undefined
    if (obj == null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

// canIterate(new Map()); // true
// canIterate(new Set()); // true
// canIterate(null); // false
// canIterate(10); // false
// canIterate("Netology"); // true

console.log(canIterate(new Map()))
console.log(canIterate(new Set()))
console.log(canIterate(null))
console.log(canIterate(10))
console.log(canIterate("Netology"))