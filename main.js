// Hàm này chạy khi bấm nút "Lưu Hồ Sơ"
function luuHoSo() {
    // 1. Lấy giá trị người dùng nhập từ giao diện
    let maNV = document.getElementById('maNV').value;
    let hoTen = document.getElementById('hoTen').value;
    let phongBan = document.getElementById('phongBan').value;
    let bacLuong = document.getElementById('bacLuong').value;

    // Kiểm tra xem có nhập thiếu không
    if(maNV === '' || hoTen === '') {
        alert("Vui lòng nhập đủ Mã CCVC và Họ Tên!");
        return; // Dừng lại, không chạy tiếp
    }

    // 2. Gói thông tin thành một Đối tượng (Object)
    let nhanVienMoi = {
        maNV: maNV,
        hoTen: hoTen,
        phongBan: phongBan,
        bacLuong: bacLuong
    };

    // 3. Lấy danh sách cũ từ localStorage (nếu chưa có thì tạo mảng rỗng [])
    let danhSach = JSON.parse(localStorage.getItem('DanhSachCongChuc')) || [];

    // 4. Thêm nhân viên mới vào danh sách
    danhSach.push(nhanVienMoi);

    // 5. Cất danh sách mới cập nhật ngược lại vào localStorage
    localStorage.setItem('DanhSachCongChuc', JSON.stringify(danhSach));

    // Thông báo và xóa trắng form
    alert("Đã lưu hồ sơ thành công!");
    document.getElementById('maNV').value = '';
    document.getElementById('hoTen').value = '';
    document.getElementById('bacLuong').value = '';

    // Cập nhật lại màn hình hiển thị
    hienThiDanhSach();
}

// Hàm này chạy để in danh sách ra màn hình
function hienThiDanhSach() {
    let danhSach = JSON.parse(localStorage.getItem('DanhSachCongChuc')) || [];
    let theUl = document.getElementById('danhSachHienThi');
    
    // Xóa dữ liệu cũ trên màn hình
    theUl.innerHTML = ''; 

    // Lặp qua danh sách và in từng người ra
    danhSach.forEach(function(nv) {
        theUl.innerHTML += `<li><strong>${nv.maNV}</strong> - ${nv.hoTen} - ${nv.phongBan} - Hệ số: ${nv.bacLuong}</li>`;
    });
}

// Tự động hiển thị danh sách ngay khi vừa mở web lên
hienThiDanhSach();