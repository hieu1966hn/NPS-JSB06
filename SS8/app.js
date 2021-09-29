// Nhiệm vụ: in ra thông tin người dùng nhập

/**
 * Sử dụng addEventListener: để lắng nghe sự kiện xảy ra trên web.
 */

const form = document.getElementById('register-form');
console.log(form);

// lắng nghe sự kiện submit trên form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // hàm  ngăn chặn sự kiện f5 mặc định của trình duyệt. => ko bị mất dữ liệu


  // tạo ra 1 đối tượng có tên là user:
  let user = {
    firstName: form.firstName.value,
    ///////////cha.con      . giá trị của con
    lastName: form.lastName.value,
    email: form.email.value,
    password: form.password.value,
    confirmPassword: form.confirmPassword.value

  }

  console.log(user);

});
