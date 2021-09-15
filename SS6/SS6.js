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
let i = 1;
while (i <= 10) { // Điều kiện để dừng vòng lặp.
  // Câu lệnh xét xem i có phai là số lẻ hay ko, có => in ra
  if (i % 2 != 0) {
    console.log(i);
  }

  i = i + 1; // là tăng i lên 1 đơn vị
}


