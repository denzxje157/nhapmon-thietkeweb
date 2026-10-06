# 🤖 NHẬT KÝ ĐỒNG HÀNH CÙNG AI (PROMPT LOG) - BUỔI 6

**Học phần:** Thiết kế Web (111101) – Trường Đại học Lạc Hồng (LHU)  
**Nhánh Git:** `feature/hoanganh-task-leader`  
**Chủ đề:** The Interactive Showcase & Hoàn thiện Giao diện Đa tầng

---

## 1. Thông tin công cụ AI sử dụng
* **Công cụ cốt lõi:** Google Antigravity / Gemini 3.8 Flash (High) Code Assistant.
* **Môi trường:** Visual Studio Code & Chrome DevTools (Device Emulation).
* **Quy trình áp dụng:** Vibe Coding Flow (Định hướng kiến trúc -> Ra lệnh Prompt chi tiết -> Kiểm tra Reflow/Repaint -> Tinh chỉnh GPU & CSS Variables).

---

## 2. Nhật ký quá trình thực hiện (Các câu lệnh Prompt quan trọng)

| STT | Phân hệ / Bài tập | Nội dung câu lệnh Prompt chi tiết | Kết quả & Tinh chỉnh của sinh viên |
| :--- | :--- | :--- | :--- |
| **01** | **Bài 1: Floating Action Button** | *"Hãy tạo một nút tròn cố định ở góc dưới bên phải màn hình. Sử dụng CSS Animation để tạo hiệu ứng 'phập phồng' (pulse) co giãn liên tục và mượt mà bằng @keyframes. Nút có màu xanh gradient, đổ bóng lan tỏa và icon tin nhắn ở giữa. Khi click thì mở rộng menu gồm Zalo, Messenger và Hotline."* | AI đã sinh đúng cấu trúc fixed và animation. Tinh chỉnh: Tạm dừng animation (`animation-play-state: paused`) khi hover để người dùng dễ bấm. |
| **02** | **Bài 2: 3D Card Flip Effect** | *"Tạo hiệu ứng lật thẻ (Card Flip) bằng CSS thuần cho hồ sơ nhân sự. Cấu trúc gồm container chính và hai thẻ con .card-front, .card-back. Khi hover vào thẻ, nó sẽ xoay 180 độ theo trục Y để hiện mặt sau. Sử dụng transform-style: preserve-3d và backface-visibility: hidden. Đảm bảo hiệu ứng có chiều sâu 3D mượt mà và hoạt động tốt trên cả điện thoại (chạm để lật)."* | AI sinh CSS xoay mượt. Tinh chỉnh: Bổ sung sự kiện chạm `click` trên di động để hỗ trợ thiết bị cảm ứng không có chuột rê (hover). |
| **03** | **Bài 3: Typing Effect** | *"Hãy viết mã CSS tạo hiệu ứng máy đánh chữ (Typing effect) cho một tiêu đề. Chữ sẽ xuất hiện dần dần từ trái sang phải bằng animation thay đổi width với hàm steps(), kèm theo con trỏ nhấp nháy ở cuối dòng chữ. Tuyệt đối không sử dụng JavaScript."* | AI hoàn thành chuẩn xác cú pháp `steps(n, end)` kết hợp `@keyframes blink` cho con trỏ chữ. |
| **04** | **Bài 4: Parallax Background** | *"Hướng dẫn cách tạo hiệu ứng Parallax đơn giản cho một Section bằng CSS. Khi cuộn trang, ảnh nền phải giữ cố định hoặc di chuyển chậm hơn nội dung phía trên. Hãy đảm bảo ảnh hiển thị sắc nét, căn giữa trung tâm và tối ưu trên mọi màn hình."* | Tinh chỉnh: Thêm lớp overlay màu tối (`radial-gradient`) để độ tương phản chữ trắng phía trên luôn rõ ràng. |
| **05** | **Bài 5: Modern Hamburger Menu** | *"Tạo hiệu ứng chuyển đổi biểu tượng Hamburger (3 gạch) thành dấu X bằng CSS Transition. Nút chứa 3 thẻ span. Khi thêm class 'active', thanh trên cùng xoay 45 độ và trượt xuống giữa, thanh giữa mờ dần và co nhỏ biến mất, thanh dưới cùng xoay -45 độ và trượt lên giữa. Tinh chỉnh hàm cubic-bezier nảy nhẹ để hoạt ảnh sống động."* | Tinh chỉnh: Sử dụng `cubic-bezier(0.68, -0.6, 0.32, 1.6)` giúp 2 thanh khi khép thành chữ "X" có độ nảy cơ học đẹp mắt. |
| **06** | **Bài 6: Skill Bar Animation** | *"Viết CSS cho các thanh tiến trình (Progress bars) hiển thị kỹ năng lập trình web. Khi trang được tải, các thanh này sẽ tự động chạy từ 0% đến mức phần trăm cụ thể (ví dụ 95%, 90%, 85%) trong vòng 1.8 giây với hiệu ứng chuyển động mượt mà. Sử dụng thuộc tính animation-fill-mode: forwards để cố định thanh sau khi chạy xong."* | Tinh chỉnh: Thêm nút 'Chạy lại Animation' thông qua thủ thuật Reflow (`void fill.offsetWidth`) trong JavaScript. |
| **07** | **Index Hub & Design System** | *"Hãy đóng vai chuyên gia UI/UX kiến trúc hệ thống Design System với CSS Variables tại :root. Xây dựng một trang mục lục trung tâm (Showcase Hub) kết nối toàn bộ các buổi học từ Tuần 1 đến Tuần 5, có Header dính cố định, Hero gõ chữ, Grid bài tập và Footer 3 cột chuẩn Semantic HTML5."* | Tinh chỉnh: Bổ sung toàn diện các thẻ ngữ nghĩa Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`. |

---

## 3. Bài học kinh nghiệm & Đạo đức sử dụng AI
1. **Làm chủ cấu trúc trước khi ra lệnh:** AI chỉ sinh ra đoạn mã tốt nhất khi nhận được các ràng buộc kỹ thuật rõ ràng (ví dụ: *dùng CSS thuần không dùng JS*, *dùng transform thay vì left/top*, *giữ animation-fill-mode: forwards*).
2. **Loại bỏ hiện tượng Reflow/Repaint:** Khi làm việc với chuyển động, nếu dùng `top`, `left`, `margin` thì trình duyệt phải tính toán lại hình học trên CPU gây giật khung hình. Việc chỉ đạo AI dùng `transform: translate3d()` và `opacity` giúp đẩy toàn bộ gánh nặng sang GPU.
3. **Cam kết trách nhiệm sinh viên LHU:** Nhóm đã đọc, hiểu và tự tay tinh chỉnh trên 90% các thuộc tính CSS, kiểm thử độc lập trên giả lập màn hình di động Chrome DevTools (375px, 768px, 1200px).
