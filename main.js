// Đảm bảo mã chạy sau khi trang web đã tải xong toàn bộ HTML
window.onload = function() {
    // 1. Khởi tạo dữ liệu (Lấy từ bộ nhớ máy tính hoặc mảng trống)
    let dsNhanVien = JSON.parse(localStorage.getItem('database_nhansu')) || [];

    // 2. Lấy các "giỏ" dữ liệu từ HTML
    const form = document.getElementById('employeeForm');
    const tableBody = document.getElementById('employeeTable');
    const noDataMessage = document.getElementById('noDataMessage');

    // 3. Hàm hiển thị dữ liệu ra bảng
    function hienThi() {
        if (!tableBody) return; // Bảo vệ nếu không tìm thấy ID table
        
        tableBody.innerHTML = ""; // Xóa bảng cũ

        if (dsNhanVien.length === 0) {
            noDataMessage.classList.remove('d-none');
        } else {
            noDataMessage.classList.add('d-none');
            dsNhanVien.forEach((nv, index) => {
                tableBody.innerHTML += `
                    <tr>
                        <td><strong>${nv.maNV}</strong></td>
                        <td>${nv.hoTen}</td>
                        <td><span class="badge bg-info text-dark">${nv.phongBan}</span></td>
                        <td class="text-danger fw-bold">${nv.heSo}</td>
                        <td class="text-center">
                            <button class="btn btn-sm btn-outline-danger" onclick="xoaNV(${index})">Xóa</button>
                        </td>
                    </tr>`;
            });
        }
    }

    // 4. Xử lý sự kiện khi bấm nút "Lưu"
    if (form) {
        form.onsubmit = function(e) {
            e.preventDefault(); // Không cho trang web tải lại

            // Lấy dữ liệu từ các ô nhập
            const moi = {
                maNV: document.getElementById('maNV').value,
                hoTen: document.getElementById('hoTen').value,
                phongBan: document.getElementById('phongBan').value,
                heSo: document.getElementById('heSo').value
            };

            // Thêm vào mảng và lưu lại vào máy tính (LocalStorage)
            dsNhanVien.push(moi);
            localStorage.setItem('database_nhansu', JSON.stringify(dsNhanVien));

            // Xóa sạch ô nhập và cập nhật lại bảng
            form.reset();
            hienThi();
            alert("Đã thêm hồ sơ: " + moi.hoTen);
        };
    }

    // 5. Hàm xóa nhân viên (Gắn vào cửa sổ trình duyệt để nút Xóa gọi được)
    window.xoaNV = function(index) {
        if(confirm("Bạn có chắc muốn xóa hồ sơ này?")) {
            dsNhanVien.splice(index, 1);
            localStorage.setItem('database_nhansu', JSON.stringify(dsNhanVien));
            hienThi();
        }
    };

    // Chạy hiển thị lần đầu
    hienThi();
};
