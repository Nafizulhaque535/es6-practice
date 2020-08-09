function add(num1, num2 = 20){      // here 20 is backup value

    return num1 + num2;
}

const total = add(15, 1);
console.log(total);