const mobile = {
    brand: 'Samsung',
    price: 20000,
    color: 'black',
    camera: '200mp'
}

// for of : array

// for in : object
// to get property
for (const property in mobile) {
    // console.log(property);
    // console.log(mobile[property]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
    console.log(key, ':', mobile[key])
}