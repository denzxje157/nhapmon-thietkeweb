# 🎯 BÀI TẬP BUỔI 5: MICRO-INTERACTIONS, KEYFRAMES SPINNER & AOS PERFORMANCE

Thư mục này chứa toàn bộ các bài tập thực hành theo đề bài của Buổi 5:

---

## 📂 Danh mục tệp tin & Phân công hoạt động:

| Hoạt động | Tệp HTML & CSS | Đáp ứng yêu cầu đề bài |
| :--- | :--- | :--- |
| **Hoạt động 1** (30 phút) | [hoatdong1.html](file:///C:/Users/LHUser/Downloads/nhapmon-thietkeweb/buoi5/hoatdong1.html)<br>[hoatdong1.css](file:///C:/Users/LHUser/Downloads/nhapmon-thietkeweb/buoi5/hoatdong1.css) | **Nút bấm cảm xúc (Micro-interactions):**<br>• Hover: Nâng lên 3px (`translateY(-3px)`), đổi màu, bóng đổ đậm.<br>• Click: Thu nhỏ lại (`scale(0.95)`), bóng co lại.<br>• Sử dụng hàm `cubic-bezier(0.34, 1.56, 0.64, 1)` đàn hồi tự nhiên. |
| **Hoạt động 2, 3 & 4**<br>*(Tích hợp 1 Portfolio duy nhất)* | [hoatdong2-3-4.html](file:///C:/Users/LHUser/Downloads/nhapmon-thietkeweb/buoi5/hoatdong2-3-4.html)<br>[hoatdong2-3-4.css](file:///C:/Users/LHUser/Downloads/nhapmon-thietkeweb/buoi5/hoatdong2-3-4.css) | **Portfolio 3 trong 1 hoàn chỉnh:**<br>• **HĐ 2 ("Loading Master"):** Màn hình Preloader và Spinner Lab với vòng xoay `@keyframes spin` 360 độ vô hạn, `border-top-color` tạo điểm nhấn chuyển động.<br>• **HĐ 3 ("AOS - Scroll Reveal"):** Tích hợp thư viện AOS qua CDN, cấu hình `data-aos="fade-up"`, `zoom-in`, `fade-right`, `flip-up` xuất hiện mượt mà khi cuộn trang.<br>• **HĐ 4 ("Refactoring Performance"):** Refactor toàn bộ chuyển động từ `top/left` sang `transform: translate` để đưa render lên GPU composite layer, loại bỏ Reflow/Repaint, cam kết 60 FPS trên mobile. |

---

## 🔍 Hướng dẫn xem & kiểm tra:
1. Mở file [hoatdong2-3-4.html](file:///C:/Users/LHUser/Downloads/nhapmon-thietkeweb/buoi5/hoatdong2-3-4.html) trên trình duyệt.
2. Bạn sẽ thấy màn hình Preloader Spinner xoay tròn mượt mà trong 1.2s trước khi vào trang chính.
3. Trên thanh Navbar có nút **"🔄 Thử lại Spinner"** để kiểm tra lại animation bất kỳ lúc nào.
4. Cuộn chuột xuống để kiểm tra các hiệu ứng cuộn trang của AOS.
5. Xem khu vực **"⚡ Refactoring Performance"** để thấy so sánh trực quan giữa `top/left` và `transform: translate`.
