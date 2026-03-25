// Dữ liệu giả lập mô phỏng kết quả từ lệnh: SELECT * FROM Employee FOR JSON AUTO
const dataTuSQL = [
    {
        "MaNV": "NV001",
        "HoTen": "Nguyễn Văn Hùng",
        "PhongBan": "Phòng Hành chính",
        "ChucVu": "Trưởng phòng",
        "HeSoLuong": 4.4,
        "TrangThai": "Đang công tác"
    },
    {
        "MaNV": "NV002",
        "HoTen": "Trần Thị Lan",
        "PhongBan": "Phòng Kế toán",
        "ChucVu": "Chuyên viên",
        "HeSoLuong": 3.2,
        "TrangThai": "Đang công tác"
    },
    {
        "MaNV": "NV003",
        "HoTen": "Lê Minh Quân",
        "PhongBan": "Phòng Tổ chức",
        "ChucVu": "Phó phòng",
        "HeSoLuong": 3.8,
        "TrangThai": "Nghỉ phép"
    }
];

function hienThiDanhSach() {
    const listArea = document.getElementById('employee-list');
    listArea.innerHTML = "";

    dataTuSQL.forEach(item => {
        let row = `
            <tr>
                <td><strong>${item.MaNV}</strong></td>
                <td>${item.HoTen}</td>
                <td>${item.PhongBan}</td>
                <td>${item.ChucVu}</td>
                <td><span class="text-danger fw-bold">${item.HeSoLuong}</span></td>
                <td><span class="badge bg-success status-badge">${item.TrangThai}</span></td>
            </tr>
        `;
        listArea.innerHTML += row;
    });
}

// Gọi hàm chạy khi trang web mở lên
window.onload = hienThiDanhSach;
