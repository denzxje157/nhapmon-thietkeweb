# 🚀 BÀI TẬP BUỔI 6: THE INTERACTIVE SHOWCASE & PORTFOLIO NGUYỄN HOÀNG ANH

**Sinh viên:** Nguyễn Hoàng Anh  
**Mã số GitHub:** [@denzxje157](https://github.com/denzxje157)  
**Đơn vị:** Khoa Công nghệ Thông tin – Trường Đại học Lạc Hồng (LHU)  
**Vai trò:** Team Leader & Lead Architect  
**Mục tiêu sự nghiệp:** Giảng viên Đại học & Nhà nghiên cứu Khoa học (Deep Learning & Embedded IoT)  
**Tính năng mới nâng cấp:** 
- ☀️/🌙 **Chuyển đổi giao diện Sáng / Tối (Dark / Light Theme Switcher)** lưu tự động vào `localStorage`.
- 📱 **Tối ưu hóa trải nghiệm Mobile App Native:** Thanh điều hướng đáy (Bottom App Bar), meta tags PWA, chống nhấp nháy tap highlight.
- 📚 **Hành trình Học tập Toàn diện từ Tuần 1 đến Tuần 5:** Chi tiết nội dung, kỹ năng AI và link trực tiếp đến các buổi học.
- ⚡ **Bộ 6 Bài tập CSS Chuyển động chuyên sâu:** Tối ưu hóa GPU 60 FPS.

---

## 📂 Danh mục tệp tin trong thư mục `buoi_6/`:

| Tệp tin | Vai trò & Nội dung chi tiết | Kỹ thuật nổi bật |
| :--- | :--- | :--- |
| [index.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/index.html) | **Trang mục lục trung tâm (Showcase Hub & Portfolio cá nhân):**<br>• Hiển thị chân dung thật của Nguyễn Hoàng Anh (`anh.png`) và Logo LHU (`logo.png`).<br>• Nút bật/tắt Dark & Light Mode mượt mà ở cả Desktop và Mobile.<br>• Chuyên mục chi tiết tổng kết từ Tuần 1 đến Tuần 5 với đầy đủ liên kết.<br>• Thanh điều hướng đáy Mobile App Bar và Sticky Responsive Nav.<br>• Trình diễn trực tiếp 6 mini preview bài tập chuyển động. | Dark/Light Mode, Mobile App PWA, CSS Grid, GPU 60FPS. |
| [style.css](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/style.css) | **Hệ thống Design System đa theme:**<br>Khai báo biến CSS Tokens cho cả chế độ Sáng (`:root`) và Tối (`[data-theme="dark"]`), bố cục Mobile App Bottom Nav, Spacing scale. | CSS Variables, Clamp fluid typography, Transitions. |
| [bai-tap.css](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai-tap.css) | **Mã CSS chuyên sâu cho 6 bài tập:**<br>Chứa toàn bộ Keyframes, cubic-bezier và thuộc tính 3D độc lập. | `@keyframes`, `transform-style: preserve-3d`, `steps()`. |
| [bai1_fab.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai1_fab.html) | **Bài 1: Floating Action Button (FAB):**<br>Nút cố định góc dưới bên phải với hiệu ứng lan tỏa sóng (Pulse Animation) và submenu Zalo/Messenger/Hotline. | `position: fixed;`, `animation: pulseAnimation 2s infinite`. |
| [bai2_cardflip.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai2_cardflip.html) | **Bài 2: 3D Card Flip Effect:**<br>Thẻ hồ sơ nhân sự của Nguyễn Hoàng Anh (ảnh chân dung thật) lật 180 độ theo trục Y trong không gian phối cảnh 3D. Hỗ trợ cả di chuột lẫn chạm màn hình. | `perspective: 1000px`, `backface-visibility: hidden`. |
| [bai3_typing.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai3_typing.html) | **Bài 3: Pure CSS Typing Effect:**<br>Dòng chữ tự gõ tuần tự giới thiệu Nguyễn Hoàng Anh kèm con trỏ nhấp nháy, lập trình 100% bằng CSS thuần (không dùng JS), không cắt chữ. | `animation: steps()`, `white-space: nowrap; overflow: hidden;`. |
| [bai4_parallax.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai4_parallax.html) | **Bài 4: Parallax Background Depth:**<br>Kỹ thuật ảnh nền cố định tạo chiều sâu không gian khi cuộn trang. | `background-attachment: fixed; background-size: cover;`. |
| [bai5_hamburger.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai5_hamburger.html) | **Bài 5: Modern Hamburger Menu:**<br>Biểu tượng 3 gạch ngang biến đổi mượt mà thành dấu "X" đóng mở với hàm cubic-bezier nảy đàn hồi. | `transform: rotate(45deg)`, `opacity: 0`, cubic-bezier đàn hồi. |
| [bai6_skillbar.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/bai6_skillbar.html) | **Bài 6: Skill Bar Animation:**<br>Thanh tiến độ tự động chạy từ 0% đến mức phần trăm mong muốn và cố định kết quả khi load trang. | `animation-fill-mode: forwards;`, nút thử lại Reflow. |
| [prompt_logic.md](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/prompt_logic.md) | **Nhật ký Prompting (Prompt Log):**<br>Bảng lưu trữ các câu lệnh AI chất lượng cao và giải trình tư duy UX/kỹ thuật. | Chuẩn Phụ lục 2 Giáo trình LHU. |

---

## 🔍 Hướng dẫn kiểm tra và chạy thử:
1. Mở file [index.html](file:///c:/Users/Admin/Downloads/All-Project/nhapmon-thietkeweb/buoi_6/index.html) bằng trình duyệt web bất kỳ (Chrome, Edge).
2. Thử nghiệm nút **☀️ / 🌙 Chế độ** trên thanh điều hướng hoặc ở thanh đáy trên điện thoại: Toàn bộ giao diện chuyển đổi giữa Dark Mode và Light Mode mượt mà.
3. Kéo xuống phần **"Hành trình Học tập & Thực hành từ Tuần 1 đến Tuần 5"** để xem tổng kết chi tiết từng tuần học và nhấp vào các nút liên kết trực tiếp đến bài tập tương ứng.
4. Thu nhỏ cửa sổ trình duyệt dưới 768px để kiểm tra giao diện Mobile App: Thanh điều hướng đáy (Bottom App Bar) xuất hiện, nút FAB tự động nâng cao độ, bố cục tự căn chỉnh hoàn hảo.
