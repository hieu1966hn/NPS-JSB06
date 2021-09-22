1. Kiểu dữ liệu Object, Object dùng để làm gì?
2. Giới thiệu về function (hàm) và ứng dụng?
3. Sử dụng Hàm, Object để tương tác với web. (form đăng ký/đăng nhập) => Lấy ra được thông tin người dùng nhập

- Như các em biết: JS có 5 kiểu dữ liệu: Number, String, Boolean (true/false), Undefined, Null và còn 1 kiểu khác nữa đó là Object (KDL phức hợp).

- Object là gì?

  - Object là 1 thực thể độc lập, với thuộc tính và kiểu
  - Thuộc tính: Là một cặp khóa - giá trị chứa tên và giá trị
  - Tên thuộc tính là 1 giá trị duy nhất có thể bị ép buộc vào 1 chuỗi và trỏ đến 1 giá trị
  - Giá trị thuộc tính: Có thể là bất cứ giá trị nào, bao gồm các đối tượng khác hoặc cá hàm được liên kết với tên/khóa.
    - Thuộc tính là gì? Là những trường thông tin dùng để định nghĩa, nói lên được đối tượng đó là gì?

  1. Tạo 1 đối tượng
     C1: Sử dụng từ khóa {} - dùng cách này
     C2: Sử dụng từ khóa new Object();
     C3: sử dụng phương thức static

  Function (Hàm trong Javascript)

  - Định nghĩa hàm: Chức năng, gọi chung là 1 chương trình con có thể gọi tới bên ngoài hoặc bên trong chính nó.

  - Khai báo hàm: Sử dụng từ khóa "Function", theo sau nó là:

  * Tên hàm: Tên hàm được đặt thêm theo camel case ()
  * Danh sách các tham số truyền vào hàm, được đặt trong ngoặc đơn và cách nhau bởi dấu "," + Các câu lệnh JS để tạo ra 1 hàm, được đặt trong ngoặc nhọn {...}
    VD: ...

làm thế nào để chương trình con này chạy được.

- Hàm sẽ chạy được khi: ta gọi tới hàm.

- Hàm có và không trả về giá trị trong JS. Có 2 loại hàm như sau

  - Đối với hàm có giá trị trả về, ta dùng từ khóa "return"
  - Đối với hàm không có giá trị trả về, ta không dùng từ khóa "return"

- Lưu ý
  - Hàm được tạo ra thường để trả về kết quả gì đó thông qua từ khóa "return".
  - Khi câu lệnh "return" được chạy. => ta thoát hàm ngay cả khi hàm chưa xong hết
