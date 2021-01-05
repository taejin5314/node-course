const userName = 'Taejin';
const userAge = 26;

const user = {
    name: userName,
    age: userAge,
    location: 'Toronto'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label;
// const stock = product.stock;

const { label, stock } = product
console.log(label);
console.log(stock)