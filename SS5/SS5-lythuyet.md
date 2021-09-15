4 Buổi trước mình học: HTML + CSS

- Web cần có gì
- Web chia làm 2 phần chính là:
  - Front-end: Giao diện người dùng (UI: User Interface), Trải nghiệm người dùng (UX: User Ex)
  - Back-end: Xử lý các tính năng, tác vụ bên trong. (Ngôn ngữ lập trình để xử lý vấn đề đặt ra).

Javascript: (JS) là gì?

- Là ngôn ngữ lập trình, và nó thường được sử dụng cho web (cụ thể hơn là được nhúng vào HTML).

Lợi thế của JS là ?

- Sự tương tác với server ít hơn
- Phản hồi nhanh chóng tới khách truy cập
- tăng khả năng tương tác
- Giao diện phong phú hơn

Lưu ý:

- File Javascript luôn có đuôi là: ".js"
- Để file.js hoạt động, ta phải nhúng file.js vào HTML thông qua thẻ <script src=""></script> với thuộc tính là src (vị trí nhúng file.js: trước thẻ đóng </body>)

Lưu trữ trong web dùng gì??

- Lưu trữ data trong web thông qua "biến" của Ngôn ngữ lập trình
- Khai báo biến: Có 3 cách khai báo trong JS

  - let <tênbiến>; (Ưu tiên sử dụng let)
  - var <tênbiến>;
  - const <tênbiến>; (khai báo hằng số: không thể thay đổi được)

- Toán tử trong Javascript

  - "=": Toán tử gán giá trị cho biến (thay đổi giá trị hoặc khởi tạo giá trị cho biến)

    <!-- toán tử  -->

  - "+": phép toán cộng
  - "-": phép toán trừ
  - "\": phép toán nhân
  - "/": phép toán chia
    ==> Các phép toán tử cộng trừ nhân chia chỉ dành cho số;

        <!-- toán tử so sánh -->

  - ">": Phép so sánh lớn hơn
  - "<": Phép so sánh nhỏ hơn
  - "==": Phép so sánh bằng (So sánh tương đối)
  - "===": Phép so sánh băng (So sánh tuyệt đối)
  - "!=": Phép so sánh khác
    ==> Tất cả các phép toán tử so sánh đều trả về kết quả: đúng hoặc sai

- Câu điều kiện trong JS: if - (else if) - else: Sử dụng để lọc giá trị, loại bỏ trường hợp,...

  - Cú pháp:
    if(<biểu thức điều kiện>){
    .... code
    }
    else if(){
    .codingggg
    }
    else{
    .code của else
    }

- Vòng lặp trong Javascript (3 vòng lặp cơ bản)

  1. Vòng lặp while (kiểm tra điều kiện, nếu "đúng" =>chạy code trong while và tiếp tục kiểm tra điều kiện).

     Cú pháp:

  while(<biểu thức điều kiện>){
  .. code trong while
  }

  2. Vòng lặp do - while (cho người dùng lặp lần đầu tiên, sau đó kiểm tra điều kiện (đúng)=> lặp tiếp
     (sai)=> thoát khỏi vòng lặp )

     Cú pháp:

  do{
  ... code
  }
  while(<biểu thức điều kiện>);

  3. Vòng lặp for: (Cho người dùng biết trước số lần lặp);
     Cú pháp:
     for( "giá trị đầu vào" ; <"điều kiện lặp"> ; "câu lệnh thực thi sau khi lặp"){
     ... coding
     }
