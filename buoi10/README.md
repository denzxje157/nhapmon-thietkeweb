# BUỔI 10 - TỔNG HỢP THIẾT KẾ WEB KẾT HỢP HTML5 + CSS3 + JAVASCRIPT

Thư mục `buoi10` chứa trọn vẹn 6 bài tập lớn theo yêu cầu chi tiết từ file giáo trình bài tập, áp dụng chuẩn thiết kế hiện đại **Glassmorphism**, cấu trúc thư mục quy chuẩn (`css/`, `js/`), và tuân thủ các quy tắc trong [`.skill/skill.md`](.skill/skill.md).

---

## 📂 Cấu trúc thư mục

```text
buoi10/
├── .skill/
│   └── skill.md               # Quy tắc thiết kế UI/UX, Glassmorphism, chuẩn danh sách & lưu trữ
├── bai1/                       # BÀI TẬP 1: AI Task Dashboard
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── bai2/                       # BÀI TẬP 2: Weather & Travel Planner
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── bai3/                       # BÀI TẬP 3: Google Sheets Event Registration
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── bai4/                       # BÀI TẬP 4: Luxury Brand Landing Page
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── bai5/                       # BÀI TẬP 5: Dynamic Theme Brand Showcase
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
├── bai6/                       # BÀI TẬP 6: Interactive Immersive Experience
│   ├── css/style.css
│   ├── js/script.js
│   └── index.html
└── README.md
```

---

## 🌟 Tóm tắt chi tiết 6 bài tập

### 1. Bài 1: Personalized AI Dashboard - Quản lý tác vụ cá nhân
- **Giao diện**: Glassmorphism, Responsive CSS Grid & Flexbox, Sidebar có thể ẩn/hiện trên màn hình Mobile.
- **Logic trọng tâm**: Thao tác DOM, Event Delegation, cập nhật đồng hồ số thời gian thực (`setInterval`).
- **Quản lý dữ liệu**: `localStorage` lưu trữ danh sách công việc và theme trạng thái.
- **Mở rộng (Điểm 9-10)**:
  - Phân loại mức độ ưu tiên (**Quan trọng / Bình thường / Thấp**) với viền đổi màu động.
  - Chế độ **Dark / Light Mode** chuyển đổi toàn diện và lưu nhớ khi F5.
  - Tìm kiếm thời gian thực (**Real-time Search**), Bộ lọc trạng thái (Tất cả / Chưa xong / Đã xong), Sắp xếp và Phân trang (10, 20, 50, Tất cả).
  - Bảng thống kê dữ liệu giả lập 5 sinh viên tiêu biểu và tỷ lệ hoàn thành mục tiêu.

---

### 2. Bài 2: Thiết kế ứng dụng Weather & Travel Planner
- **Giao diện**: Hiệu ứng kính mờ `backdrop-filter: blur()`, hình ảnh nền thiên nhiên. Giao diện đổi theme động theo thời tiết của thành phố (Nắng, Mưa, Mây mù, Rét buốt).
- **Dữ liệu**: Quản lý mảng đối tượng giả lập cho các thành phố: Biên Hòa, Đà Lạt, Vũng Tàu, Hà Nội, Sa Pa.
- **Quản lý lịch trình**: Form thêm địa điểm, thời gian dự kiến; đánh dấu "Đã đến"; xóa địa điểm với hiệu ứng CSS transition.
- **Mở rộng (Điểm 9-10)**:
  - **Smart Suggestions**: Tự động đưa ra lời khuyên trang phục và vật dụng dựa trên nhiệt độ thành phố.
  - **Export to Text (.txt)**: Xuất lịch trình du lịch ra file văn bản tải về máy tính sử dụng `Blob` và `URL.createObjectURL`.
  - **Countdown Timer**: Đồng hồ đếm ngược ngày giờ khởi hành chuyến đi được lưu trong `localStorage`.

---

### 3. Bài 3: Xây dựng hệ thống đăng ký sự kiện tích hợp Google Sheets
- **Giao diện**: Minimalist Tech Blue với hiệu ứng quả cầu sáng chuyển động ngầm (Light Blobs).
- **Validation**: Kiểm tra dữ liệu thời gian thực (`input`, `blur`) cho Họ tên, Email hợp lệ, Số điện thoại 10 số bắt đầu bằng 0, Hạng vé.
- **Bất đồng bộ**: Sử dụng `Async/Await` và `Fetch API` kết nối với Google Apps Script Web App. Vô hiệu hóa nút và hiển thị trạng thái `Loading...` chống gửi trùng lặp.
- **Mở rộng (Điểm 9-10)**:
  - **Mã QR Check-in**: Tự động sinh mã QR điện tử (qua QuickChart API) hiển thị trên Popup Modal chúc mừng.
  - **Tự động gửi Email**: Tích hợp mã nguồn Google Apps Script mẫu và khung mô phỏng nội dung Email xác nhận tự động.
  - **Đếm ngược chỗ ngồi**: Giới hạn 50 người đăng ký, tự động khóa form khi đủ 50 người.
  - Bảng danh sách người đã đăng ký hỗ trợ Tìm kiếm, Lọc theo loại vé, Sắp xếp và Phân trang.

---

### 4. Bài 4: Thiết kế Landing Page quảng bá thương hiệu xe điện cao cấp AURA Motors
- **Branding**: Màu Đen - Vàng Gold hoàng gia sang trọng. Font Google Fonts: `Syne` (tiêu đề) và `Inter` (nội dung).
- **Kỹ thuật**: Sticky Header đổi màu nền khi cuộn trang, menu Hamburger cho Mobile, hiệu ứng Scroll Reveal mượt mà bằng `IntersectionObserver`.
- **Thành phần tương tác**:
  - Showroom đổi màu ngoại thất xe tương tác (Vàng hoàng gia, Đen huyền bí, Trắng ngọc trai, Đỏ rực rỡ).
  - Hệ thống **Tabs** kết hợp **Accordion** hiển thị chi tiết thông số kỹ thuật (Động cơ, Pin, Kích thước, Nội thất).
- **Mở rộng (Điểm 9-10)**:
  - **Đa ngôn ngữ (I18n)**: Nút chuyển đổi Tiếng Việt / English toàn bộ nội dung mà không cần tải lại trang.
  - **Popup Khuyến mãi 10 giây**: Tự động hiển thị modal tặng mã giảm giá voucher 10% sau 10 giây lướt web.
  - Danh mục 3 phiên bản xe: Tiêu chuẩn (Standard), Nâng cao (Advanced), Cao cấp (Luxury Flagship).

---

### 5. Bài 5: Xây dựng Brand Showcase với tính năng Dynamic Theme
- **Kỹ thuật biến CSS**: Bắt buộc sử dụng 100% CSS Variables (`--primary-color`, `--bg-color`, `--text-color`, `--font-main`, `--border-radius-base`).
- **Thanh công cụ Theme Toolbar**:
  - Chuyển đổi Dark / Light Mode.
  - 3 bộ Theme thương hiệu đặc sắc: **Eco Green** (Sống xanh), **Luxury Gold** (Thượng lưu hoàng gia), **Cyberpunk Pink** (Tương lai đột phá).
  - Đồng bộ hóa hình ảnh banner, biểu tượng và nội dung copy theo từng theme tương ứng.
- **Mở rộng (Điểm 9-10)**:
  - **Custom Color Picker**: Hộp chọn màu `<input type="color">` cho phép người dùng tự do gán màu chủ đạo trực tiếp vào CSS `:root`.
  - **Transition mượt mà 0.5s**: Chuyển đổi êm dịu, không giật màn hình với `transition: all 0.5s ease`.
  - **Tự động nhận diện theme hệ điều hành**: Áp dụng `window.matchMedia('(prefers-color-scheme: dark)')`.
  - Bảng kiểm tra biến CSS thời gian thực (Inspector) hiển thị giá trị đang áp dụng.

---

### 6. Bài 6: Thiết kế trang "Interactive Immersive Experience"
- **Hiệu năng & Phần cứng**: Tối ưu chuyển động đạt **60 FPS** với `requestAnimationFrame()`, tận dụng GPU qua `will-change: transform`.
- **Custom Cursor & Đuôi sao băng (Trail)**: Con trỏ tùy biến có độ trễ mượt (lag), đi kèm 4 vòng tròn nhỏ phía sau tạo hiệu ứng đuôi sao băng sử dụng công thức nội suy tuyến tính **LERP** (`current = current + (target - current) * factor`). Con trỏ tự phóng to khi lướt qua nút hoặc link.
- **Nút bấm nam châm (Magnetic Button)**: Nút tự động "hút" đàn hồi về phía con trỏ chuột khi chuột ở gần trong bán kính 100px.
- **Scroll Parallax**: Lớp nền di chuyển với vận tốc bằng 0.5 lần tốc độ cuộn thật, tạo cảm giác chiều sâu 3D.
- **Typography Animation**: Hiệu ứng gõ chữ (**Typewriter**) và Scroll Reveal cho **5 câu triết lý sáng tạo & công nghệ**.
- **Mở rộng (Điểm 9-10)**:
  - **Mobile Touch Handling**: Tự động nhận diện thiết bị cảm ứng, ẩn con trỏ chuột tùy biến và chuyển sang hiệu ứng chạm cảm ứng.
  - **Low Motion Mode (Tiết kiệm năng lượng & Tiếp cận)**: Kiểm tra `prefers-reduced-motion` và có nút bấm chuyển đổi tắt/bật chuyển động mạnh.
