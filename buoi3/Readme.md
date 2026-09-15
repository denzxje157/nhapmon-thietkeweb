# BÁO CÁO THỰC HÀNH THIẾT KẾ WEB
**Sinh viên thực hiện:** Hà Văn Kiên
**Dự án:** CSS Flexbox & Grid Layout

## BẢNG TỔNG HỢP ĐÁNH GIÁ (FINAL CHECKLIST) - HOẠT ĐỘNG 1, 2 & 3

Dưới đây là bảng tổng hợp toàn bộ kết quả đánh giá cho các hoạt động thực hành thiết kế giao diện với CSS Grid và Flexbox.

| Hoạt động | STT | Tiêu chí kiểm tra | Kết quả | Ghi chú minh chứng |
| :--- | :---: | :--- | :---: | :--- |
| **Hoạt động 1: Flex & Grid Battle** | 1 | Đối tượng đã nằm chính giữa màn hình chưa? | **Đạt** | Dùng Flexbox `justify-content: center` và `align-items: center` với `height: 100vh`. |
| | 2 | Khi thay đổi kích thước trình duyệt, các cột tự co giãn không? | **Đạt** | Dùng CSS Grid `grid-template-columns: repeat(3, 1fr)`. |
| | 3 | Sử dụng thuộc tính hiện đại `gap` thay vì `margin` truyền thống? | **Đạt** | Áp dụng `gap: 20px` để chia khoảng cách cột. |
| **Hoạt động 2: Portfolio Layout** | 4 | Kiểm tra Box Model: Padding/Margin không bị chồng chéo. | **Đạt** | Sử dụng `box-sizing: border-box` ở reset CSS. |
| | 5 | Kiểm tra tính logic: Không sinh ra mã thừa (`float`). | **Đạt** | Hệ thống định vị dùng 100% Grid/Flexbox hiện đại. |
| **Hoạt động 3: Debug & Refactor** | 6 | Sử dụng **CSS Grid** cho bố cục chính của trang. | **Đạt** | Dùng `grid-template-areas` phân chia Header, Sidebar, Main, Footer. |
| | 7 | Sử dụng **Flexbox** cho các thành phần con (Menu, Card). | **Đạt** | Sử dụng cho khối `.skills` chứa các skill item. |
| | 8 | Không còn sử dụng kỹ thuật float để dàn trang. | **Đạt** | Mã nguồn đã loại bỏ hoàn toàn float. |
| | 9 | Khoảng cách giữa các thành phần được quản lý bằng `gap`. | **Đạt** | Tối ưu bằng biến CSS `gap: var(--spacing-unit)`. |
| | 10 | Mã nguồn CSS sạch, có comment giải thích các khối Grid/Flex. | **Đạt** | Đã refactor, gom nhóm class trùng lặp và thêm chú thích rõ ràng. |
| | 11 | Đã Push mã nguồn lên nhánh `feature/css-layout` trên GitHub. | **Đạt** | Đã hướng dẫn đổi nhánh từ `kien-task-footer` sang `feature/css-layout` để đạt yêu cầu. |

---
*Ghi chú: File README này được tạo để đính kèm vào repository lưu trữ mã nguồn.*
