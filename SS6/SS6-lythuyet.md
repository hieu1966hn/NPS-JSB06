Toán tử

- %: Phép chia lấy dư

String: (chuỗi)

- chuỗi.length: lấy ra được độ dài của chuỗi (số phần tử của chuỗi).

Array (mảng):
Bài toán: 1 nhà hàng có 200 món ăn: muốn nhờ các dev lưu trữ lại toàn bộ món ăn này: "thịt chó", "cá nướng", "đậu lướt ván"..

let monAn0 = "thịt chó"
let monAn1 = "cá nướng"
let monAn2 = "đậu lướt ván"
==> Không nên làm vậy

Mà nhờ đó ta có 1 khái niệm để lưu trữ như sau: Array

- Array là mảng, hay gọi là 1 kiểu dữ liệu mà giá trị của nó có thể chứa nhiều giá trị khác (bao gồm 1 hoặc nhiều mảng khác bên trong). (mỗi 1 giá trị của mảng được gọi là elment_phần tử)

- Khai báo mảng:
  cú pháp:
  let <tênmảng> = [];

- Các phương thức đi kèm với mảng

  - arr.push(): Thêm 1 hoặc nhiều phần tử vào cuối mảng
  - arr.indexOf: Trả về vị trí của phần tử mảng sao cho thỏa mãn điều kiện được tìm;
  - arr.splice();

- Các kiểu Dữ Liệu trong JS:
  - String: chuỗi: được viết bên trong 3 loại ngoặc:
    ''
    ""
    ``: phía dưới nút: "Esc"
  - Number: số

Thao tác C,R,U,D với Array:

- C: Create: tạo ra, thêm một hoặc nhiều phần tử vào mảng
- R: Read: in ra mảng
- U: Update phần tử trong mảng
- D: Delete: xóa phần tử trong mảng

Lưu ý:

- prompt(): là phương thức cho người dùng nhập vào 1 giá trị dạng chuỗi trên trình duyệt
- Chuyển chuỗi -> kiểu Number: Number(x): với x là 1 chuỗi bất kỳ;
- Vị trí của các phần tử trong mảng bắt đầu từ vị trí thứ 0
- So sánh tương đối: so sánh về giá trị: VD: 1 == "1" => đúng, vì 2 giá trị bằng
- So sánh tuyệt đối: so sánh về giá trị và về kiểu dữ liệu:
  VD: 1 === "1" => Sai, vì 2 giá trị bằng nhau, nhưng kiểu dữ liệu khác nhau
  Number != String
