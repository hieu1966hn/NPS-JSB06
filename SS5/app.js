// code JS tại đây


// Câu lệnh in ra màn hình web
// document.write("Hello World!!! của Javascript");


// Khai báo biến bằng câu lệnh let
// let x = 3 + 1;



// // Khai báo biến bằng câu lệnh var 
// var y = 123;
// y = 321;


// // Khai báo biến bằng câu lệnh const  (hằng số: Không thể thay đổi)
// const address = 'Quận Tây Hồ, Thành phố Hà Nội, đất nước Việt Nam';
// const Pi = 3.14;



// // Câu điều kiện
// let age = 10; // khai báo biến age có giá trị là 15;

// if (age > 15) { // Nếu điều kiện trả về đúng: thì chạy code trong if. Sai => bỏ qua code trong if
//   document.write("Bạn đã đủ tuổi để vào học lớp 10");
// }
// else if (age == 15) { // điều kiện con bên trong if - else 
//   document.write("Bạn vừa đủ tuổi để vào lớp 10");
// }
// else if (age === 10) {
//   document.write("Bạn bị cấm học cấp 3");
// }
// else { // trường hợp còn lại
//   // code else chỉ chạy khi điều kiện ở if trả về là sai:
//   document.write("Bạn chưa đủ tuổi vào lớp 10");
// }


// Vòng lặp
/**
 * Bài toán: In ra các số từ 1 -> 10
 */
// document.write(1 + '<br>')
// document.write(2 + '<br>')
// document.write(3 + '<br>')


////// VD: Về vòng lặp while
// let i = 1; // khai bao bien i voi gia tri la: 1

// while (i <= 10) { // dk tra ve dung => chay code trong while
//   console.log(i);// in lan 1: 1, in lan 2: 2, in lan 3: 3, ..., in lan 10: 10
//   i = i + 1; // tang gia tri i len 1 don vi,
// }


/////// VD: Về vòng lặp do - while

// let i = 1;

// do {
//   console.log(i);// in lan 1: 1, in lan 2: 2, in lan 3: 3, ..., in lan 10: 10
//   i = i + 1; // tang gia tri i len 1 don vi,
// }
// while (i <= 10);

/////// VD: Về vòng lặp for
let i;
for (i = 1; i <= 10; i = i + 1) {
  console.log(i);
}

