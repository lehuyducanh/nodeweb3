# nodeweb3

## Description

Đây là một gói npm đơn giản được tạo ra để mô phỏng các chức năng cơ bản.

## Install

Để cài đặt gói này, hãy sử dụng câu lệnh sau:

```bash
npm install nodeweb3
```

Sử dụng
Sau khi đã cài đặt, bạn có thể sử dụng gói này như sau:

```JavaScript
// Import the NodeNumpy class
const NodeNumpy = require("node-numpy");

// Create some arrays
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// Use the add method
let result = NodeNumpy.add(arr1, arr2);
console.log(result); // Outputs: [7, 9, 11, 13, 15]

// Use the subtract method
result = NodeNumpy.subtract(arr1, arr2);
console.log(result); // Outputs: [-5, -5, -5, -5, -5]

// Use the multiply method
result = NodeNumpy.multiply(arr1, arr2);
console.log(result); // Outputs: [6, 14, 24, 36, 50]

// Use the divide method
result = NodeNumpy.divide(arr1, arr2);
console.log(result); // Outputs: [0.16666666666666666, 0.2857142857142857, 0.375, 0.4444444444444444, 0.5]

// Use the dot method
result = NodeNumpy.dot(arr1, arr2);
console.log(result); // Outputs: 130

// Use the sum method
result = NodeNumpy.sum(arr1);
console.log(result); // Outputs: 15

// Use the mean method
result = NodeNumpy.mean(arr1);
console.log(result); // Outputs: 3

// Use the max method
result = NodeNumpy.max(arr1);
console.log(result); // Outputs: 5

// Use the min method
result = NodeNumpy.min(arr1);
console.log(result); // Outputs: 1
```
