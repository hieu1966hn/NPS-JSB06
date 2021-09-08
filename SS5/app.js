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



// Câu điều kiện
let age = 10; // khai báo biến age có giá trị là 15;

if (age > 15) { // Nếu điều kiện trả về đúng: thì chạy code trong if. Sai => bỏ qua code trong if
  document.write("Bạn đã đủ tuổi để vào học lớp 10");
}
else if (age == 15) { // điều kiện con bên trong if - else 
  document.write("Bạn vừa đủ tuổi để vào lớp 10");
}
else if (age === 10) {
  document.write("Bạn bị cấm học cấp 3");
}
else { // trường hợp còn lại
  // code else chỉ chạy khi điều kiện ở if trả về là sai:
  document.write("Bạn chưa đủ tuổi vào lớp 10");
}

