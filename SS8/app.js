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
    firstName: form.firstName.value.trim(),
    ///////////cha.con      . giá trị của con
    lastName: form.lastName.value.trim(),
    email: form.email.value.trim(),
    password: form.password.value.trim(),
    confirmPassword: form.confirmPassword.value.trim()

  }

  console.log(user);

  form.firstName.value = "";
  form.lastName.value = "";
  form.email.value = "";
  form.password.value = "";
  form.confirmPassword.value = "";
});


// Hàm trim(): dùng để xóa dấu khoảng cách thừa ở hai bên trái và phải của string