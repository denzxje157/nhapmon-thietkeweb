Lớp: 
--Premise: Hãy đóng vai trò là 1 dev web có nhiều năm kinh nghiệm, có chuyên môn sâu về các công nghệ web và chỉ sử dụng HTML và CSS để dev dự án này
1."Hãy viết mã CSS transition cho một button sao cho khi hover nó sẽ nâng
lên 3px, thêm box-shadow đậm hơn, và sử dụng hàm timing 'cubic-bezier' để chuyển
động trông tự nhiên hơn."
2."Tạo một vòng tròn loading bằng CSS sử dụng animation xoay 360 độ vô
hạn. Sử dụng border-top-color khác với các phần còn lại để tạo hiệu ứng xoay."
3.Hãy tích hợp thư viện AOS vào file HTML thông qua CDN
và cách thêm thuộc tính 'data-aos' vào các thẻ section để chúng hiện ra khi cuộn xuống."
4.Hãy thay đổi thuộc tính top/left thành transform để tránh gây giật lag trên điện thoại 
Bài về nhà:
promt:Bài 1: Floating Action Button (FAB): Tạo một nút tròn "Liên hệ" luôn nằm ở góc màn
hình và có hiệu ứng "phập phồng" (pulse animation) để thu hút sự chú ý.
● Bài 2: Card Flip Effect: Thiết kế một thẻ nhân sự. Khi hover, thẻ sẽ lật 180 độ để hiện
thông tin liên hệ ở mặt sau.
● Bài 3: Typing Effect: Sử dụng CSS (không dùng JS) để tạo hiệu ứng chữ đang tự gõ
cho dòng giới thiệu: "Tôi là một Web Developer...".
● Bài 4: Parallax Image: Tạo một banner có hiệu ứng ảnh nền di chuyển chậm hơn nội
dung khi cuộn trang (sử dụng background-attachment: fixed).
● Bài 5: Modern Hamburger Menu: Biến đổi biểu tượng 3 gạch ngang thành dấu "X" một
cách mượt mà khi người dùng mở Menu (Sử dụng CSS Transitions).
> Bài 6: Skill Bar Animation: Khi trang web tải xong, các thanh kỹ năng (HTML 90%, CSS 85%...) sẽ chạy từ 0% đến giá trị đích. dựa vào cái yêu cầu này hãy truy cập vào luồng này `C:\Users\HOANG MINH PHAT\OneDrive\Documents\nhapmon-thietkeweb\Buoi5\Portfolio` và xây dựng portfolio chỉ sử dụng html và CSS,và có thể sử dụng thư viện AOS và reponsive vào web của tôi, về phần kỹ năng thì mình chuyên về cái IOT và Machine learning.
> 
> *Yêu cầu bổ sung (Prompt 2):* trong luồng `C:\Users\HOANG MINH PHAT\OneDrive\Documents\nhapmon-thietkeweb\Buoi5\Portfolio` tạo cho mình thêm nhiều kỹ năng lập trình cũng như kỹ năng phân tích và tư duy logic và thêm cho mình 1 vài thành tích nổi bật, chừa cái chỗ để mình gắn hình ảnh vào code và cũng như thêm cái mục tiêu hướng tới cũng như cái địa điểm mong muốn đến là thành phố Paris và thành phố Nice, à thêm kỹ năng thì Tiếng Anh đạt trình độ B2 Vstep và biết tiếng Pháp.

---

## 2. Kết quả thực hiện (AI Response & Action)

Đã thiết kế hoàn thiện Portfolio với bộ cục HTML5 / CSS3 chuẩn Reponsive tại thư mục: `Buoi5/Portfolio`

- **Trang bị chủ đề:** Cấu hình tông màu Neon (Dark Mode) chuẩn xu hướng công nghệ (Tech/IoT).
- **Responsive:** Hỗ trợ tốt trên màn hình máy tính (PC), máy tính bảng và điện thoại di động thông qua `@media query`.
- **Thư viện bên thứ 3:** Tích hợp `AOS.js` cho hiệu ứng khi cuộn trang và `FontAwesome` cho hệ thống Icon.

### Các tính năng đã lập trình theo yêu cầu ban đầu:
1. **(Bài 1) Floating Action Button:** Thiết lập vị trí fixed, có gradient và hiệu ứng vòng sáng phập phồng bằng `@keyframes pulse`.
2. **(Bài 2) Card Flip:** Xây dựng thẻ `transform-style: preserve-3d`, sử dụng hiệu ứng lật 3D (xoay Y 180 độ) để tiết lộ thông tin liên hệ.
3. **(Bài 3) Typing Effect:** Xử lý CSS thuần bằng tính năng `steps()` và border để tạo con trỏ nhấp nháy, thay đoạn text thành chuyên ngành "IoT & Machine Learning Engineer".
4. **(Bài 4) Parallax Background:** Sử dụng `background-attachment: fixed` tại khu vực Hero Banner để tạo độ sâu.
5. **(Bài 5) Hamburger Menu:** Dùng Input Checkbox hack để điều hướng menu toàn màn hình và hiệu ứng CSS Transitions xoay thẻ span thành chữ X.
6. **(Bài 6) Skill Bar Animation:** Kết hợp thư viện bắt sự kiện cuộn (AOS) để thay đổi chiều dài các thanh kỹ năng từ `0%` chạy tới giá trị cấu hình qua hàm `var(--target)`.

### Các tính năng bổ sung (Theo yêu cầu mới):
1. **Thêm Kỹ năng:** Bổ sung các nhóm kỹ năng mới vào phần `#skills` như *Tư duy Logic & Phân tích thuật toán*, và Kỹ năng ngôn ngữ: *Tiếng Anh B2 Vstep*, *Tiếng Pháp (Giao tiếp)*.
2. **Mục Thành Tích Nổi Bật (`#achievements`):** Thiết kế dạng Grid Card (lưới thẻ), chừa sẵn các khung giữ chỗ (Placeholder có icon và text) để có thể dễ dàng thay đổi hình ảnh thật bằng thẻ `<img>` vào HTML.
3. **Mục Tiêu Hướng Tới (`#goals`):** Lập trình giao diện đặc biệt với bố cục chia cột (Flexbox), mô tả niềm đam mê và mục tiêu phát triển bản thân tại 2 thành phố xinh đẹp của Pháp là **Paris** và **Nice**. Có kèm hình ảnh minh họa sống động sử dụng hiệu ứng xếp chồng (overlapping) và phóng to khi rê chuột (hover scale).
4. **Cập nhật Menu Điều Hướng:** Bổ sung liên kết neo (anchor link) `#achievements` và `#goals` vào thanh Menu Hamburger để trải nghiệm cuộn trang xuyên suốt.
