// 1. Khi trang web vừa mở, lấy dữ liệu cũ đã lưu trong trình duyệt ra (nếu có)
let dsNhanVien = JSON.parse(localStorage.getItem('database_nhansu')) || [];

const form = document.getElementById('employeeForm');
const tableBody = document.getElementById('employeeTable');

// 2. Hàm để hiển thị danh sách ra bảng
function hienThi() {
    tableBody.innerHTML = "";
    dsNhanVien.forEach((nv, index) => {
        tableBody.innerHTML += `
            <tr>
                <td><strong>${nv.maNV}</strong></td>
                <td>${nv.hoTen}</td>
                <td>${nv.phongBan}</td>
                <td class="text-danger fw-bold">${nv.heSo}</td>
                <td><button class="btn btn-sm btn-outline-danger" onclick="xoaNV(${index})">Xóa</button></td>
            </tr>
        `;
    });
}

// 3. Xử lý khi bấm nút "Lưu Hồ Sơ"
form.onsubmit = function(e) {
    e.preventDefault(); // Chặn trang web bị load lại

    // Lấy giá trị từ các ô nhập
    const moi = {
        maNV: document.getElementById('maNV').value,
        hoTen: document.getElementById('hoTen').value,
        phongBan: document.getElementById('phongBan').value,
        heSo: document.getElementById('heSo').value
    };

    // Thêm vào danh sách và lưu vào bộ nhớ máy tính
    dsNhanVien.push(moi);
    localStorage.setItem('database_nhansu', JSON.stringify(dsNhanVien));

    // Làm sạch form và hiện lại bảng
    form.reset();
    hienThi();
};

// 4. Hàm xóa nhân viên
function xoaNV(index) {
    dsNhanVien.splice(index, 1);
    localStorage.setItem('database_nhansu', JSON.stringify(dsNhanVien));
    hienThi();
}

// Chạy hiển thị lần đầu khi mở web
hienThi();
