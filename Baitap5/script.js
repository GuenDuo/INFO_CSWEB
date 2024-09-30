// Lấy container gallery
const gallery = document.querySelector('.gallery');

// Tạo 24 ảnh bài tập
for (let i = 1; i <= 24; i++) {
    // Tạo thẻ img
    const img = document.createElement('img');
    // Gán src cho img theo thứ tự Level1 -> Level24
    img.src = `images/Level${i}.png`;
    // Gán alt để mô tả ảnh
    img.alt = `Bài tập Level ${i}`;
    // Thêm img vào gallery
    gallery.appendChild(img);
}

// Xử lý modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('imgModal');
const captionText = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

// Khi click vào một ảnh trong gallery
gallery.addEventListener('click', function(event) {
    if(event.target.tagName === 'IMG') {
        modal.style.display = "block";
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
});

// Khi click vào nút đóng
closeBtn.onclick = function() { 
    modal.style.display = "none";
}

// Khi click ngoài ảnh để đóng modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
