# Quy tắc Thiết kế & Phát triển Web (Skill Guidelines)

## 1. Công nghệ sử dụng
- Chỉ sử dụng chuẩn **HTML5 Semantic**, **CSS3 hiện đại**, và **JavaScript thuần (Vanilla JS)**.
- Tách biệt rõ ràng cấu trúc dự án:
  - `css/` chứa file stylesheet (`style.css`).
  - `js/` chứa file mã nguồn JavaScript (`script.js`).
  - `images/`, `video/` chứa tài nguyên đa phương tiện (nếu có).

## 2. Phong cách thiết kế UI/UX
- Áp dụng triệt để phong cách **Glassmorphism** sang trọng:
  - Nền mờ kính: `backdrop-filter: blur(12px - 20px);`
  - Bo góc mềm mại: `border-radius: 12px - 20px;`
  - Viền mờ phản quang: `border: 1px solid rgba(255, 255, 255, 0.2);`
  - Đổ bóng tinh tế: `box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);`
- Phản hồi tương tác (Micro-interactions): hiệu ứng hover, active, smooth transitions trên các nút bấm, input, card.
- Chuẩn Responsive trên mọi thiết bị: Desktop, Tablet, Mobile (Flexbox, CSS Grid, Media Queries, Mobile-first).

## 3. Tiêu chuẩn chức năng Danh sách (List Operations)
Mọi chức năng quản lý danh sách dữ liệu cần hỗ trợ đầy đủ các tiêu chí:
1. **Tìm kiếm (Search)**: Tìm kiếm thời gian thực theo tiêu đề/nội dung.
2. **Lọc (Filter)**: Lọc theo trạng thái, danh mục hoặc độ ưu tiên.
3. **Sắp xếp (Sort)**: Sắp xếp theo tên/tiêu đề (A-Z, Z-A), thời gian tạo hoặc độ ưu tiên.
4. **Phân trang (Pagination)**: Hỗ trợ các mốc hiển thị (10, 20, 50, Tất cả - All).

## 4. Quản lý trạng thái và Dữ liệu (State & Data Persistence)
- Sử dụng cấu trúc dữ liệu tường minh dạng **Array of Objects**.
- Lưu trữ trạng thái liên tục vào **LocalStorage** (danh sách công việc, lịch trình, theme, cài đặt người dùng) để duy trì khi F5 hoặc mở lại trình duyệt.
- Code module hóa sạch sẽ: hàm render, hàm cập nhật, hàm lưu storage, hàm xử lý sự kiện độc lập.

## 5. Quy trình & Tương tác
- Luôn lập kế hoạch trước khi code hoặc thay đổi cấu trúc code.
- Cung cấp các tùy chọn giao diện/tính năng cho người dùng lựa chọn.
