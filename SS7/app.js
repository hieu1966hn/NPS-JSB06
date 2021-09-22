//  Tạo đối tượng Object

// let dog = {}; // => bạn đã tạo thành công đối tượng dog
// // console.log(dog);

// // Thêm thuộc tính cho đối tượng dog
// dog.name = "Ngáo"

// console.log(dog);



let Hieu = {
  // key: value,
  name: "N.T.H",
  age: 25,
  sex: "Male",
  cccd: 123456789123,
  address: "Hà Nội",
  hobbies: "Coding",
  crush: "Ngọc Trinh"


}

console.log(Hieu);
// =>  Thuộc tính làm nên đối tượng đó


/// Thao tác C,R,U,D đối với Object




// C:  thêm 1 thuộc tính weight vào đối tượng trên
Hieu.weight = "70kg" // Nếu như đã có thuộc tính này, => update giá trị => 70
// Nếu như chưa có thuộc tính này=> thêm mới vào Object.


console.log("Đối tượng Hieu sau khi them thuộc tính weight là:", Hieu);


// R: Sử dụng console.log(obj)

// U: Update 1 thuộc tính trong Object
Hieu.weight = "65kg";
console.log("Đối tượng Hieu sau khi update thuộc tính weight là:", Hieu);


// D: Delete 1 thuộc tính trong Object: 
delete Hieu.weight;
console.log("Đối tượng Hieu sau khi Delete thuộc tính weight là:", Hieu);