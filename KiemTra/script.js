// Chọn các phần tử cần thiết từ DOM
const form = document.querySelector('.box_form');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const cityInput = document.getElementById('city');
const zipInput = document.getElementById('zip');

// Hàm kiểm tra tính hợp lệ của các trường thông tin
function validateInputs() {
    let isValid = true;

    // Kiểm tra định dạng Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Vui lòng nhập địa chỉ email hợp lệ.");
        isValid = false;
        emailInput.focus();
    }

    // Kiểm tra định dạng số điện thoại (10 chữ số)
    const phonePattern = /^\d{10}$/; // Chỉ cho phép số điện thoại 10 chữ số
    if (!phonePattern.test(phoneInput.value)) {
        alert("Vui lòng nhập số điện thoại hợp lệ (10 chữ số).");
        isValid = false;
        phoneInput.focus();
    }

    // Kiểm tra các trường còn lại
    if (addressInput.value.trim() === '') {
        alert("Vui lòng nhập địa chỉ.");
        isValid = false;
        addressInput.focus();
    }

    if (cityInput.value.trim() === '') {
        alert("Vui lòng nhập thành phố.");
        isValid = false;
        cityInput.focus();
    }

    if (zipInput.value.trim() === '') {
        alert("Vui lòng nhập mã ZIP.");
        isValid = false;
        zipInput.focus();
    }

    return isValid;
}

// Lắng nghe sự kiện gửi biểu mẫu
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn hành động gửi mặc định của biểu mẫu

    // Kiểm tra tính hợp lệ của các trường
    if (validateInputs()) {
        // Nếu tất cả các trường hợp lệ, hiển thị thông báo thành công
        alert('Thành công!');
        // Bạn có thể thực hiện các hành động khác ở đây, như gửi dữ liệu đến server
    }
});
