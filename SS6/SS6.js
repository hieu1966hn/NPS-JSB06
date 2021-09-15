// // // console.log("SS6.js onload");

// // let firstName = "Hiếu";
// // let surName = "Trung";
// // let lastName = "Nguyễn";

// // console.log(lastName, surName, firstName);

// // bài 1 done


// // Bài 2: lấy ra được số dư của phép chia: Ta sử dụng toán tử %
// // console.log(4 % 3); // => in ra số dư của phép chia 4/3


// // Bài 3;

// let x = "Hello World!";
// console.log(x.length); // in ra độ dài chuỗi



////////////////////////SS6
/**
 * Bài 01:
 * a) in ra các số lẻ từ 1-10 (dùng while)
 * 1. In ra các số từ 1-10
 * 2. Xét điều kiện nếu là số lẻ thì mới được in.
 * 3. Ko phải phải số lẻ thì thôi.
 *
 *
 * b) in ra các số chẵn từ 1-10  (dùng do-while)
 *
 */
// xong ý a)
// let i = 1;
// while (i <= 10) { // Điều kiện để dừng vòng lặp.
//   // Câu lệnh xét xem i có phai là số lẻ hay ko, có => in ra
//   if (i % 2 != 0) {
//     console.log(i);
//   }

//   i = i + 1; // là tăng i lên 1 đơn vị
// }

// giá trị i hiện tại là: 11 (i=11)


// ý b) in ra số chăn
// console.log("in ra số chăn");
// i = 1; // ==> i giá trị về lại là 1;
// do {
//   if (i % 2 === 0) { // dùng 2 dấu bằng liền 
//     console.log(i);
//   }

//   i = i + 1; // là tăng i lên 1 đơn vị
// }
// while (i <= 10);



let monAn0 = "thịt chó"
let monAn1 = "cá nướng"
let monAn2 = "đậu lướt ván"

////// Array: Mảng và kiểu dữ liệu mảng

// khai báo 1 mảng;
let arr = ["thịt chó", "cá nướng", "đậu lướt ván"];
// biến arr với giá trị hiện có là 1 mảng;

// NS ==>
// + Mảng arr hiện có 3 phần tử trong mảng
// + Mảng arr hiện tại đang chứa là: 3 giá trị chuỗi (String)

// in ra mảng arr
// console.log(arr);

////////// Tiếp tục với mảng arr hiện có 3 phần tử ban đầu
// Thêm mới 1  phần tử vào cuối mảng = phương thức .push();
arr.push("mắm tôm");
console.log(arr);


// Update 1 phần tử trong mảng:
/**
 *  Để update 1 phần tử trong mảng,
 * ta phải lấy ra được vị trí của phần tử đó trong mảng
 *
 * Để lấy được giá trị của 1 phần tử trong mảng ta sử dụng cú pháp:
 * arr[x] || Với x là vị trí hiện tại của phần tử đó
 */
arr[0] = "thịt mèo"
console.log("mảng sau khi update là:", arr);




