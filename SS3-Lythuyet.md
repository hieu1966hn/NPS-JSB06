- Giới thiệu display: flex (flexbox).

    + Flex là gì ?
        ^ 1 layout pattern: mộ trong những pattern giúp mình dễ dàng thiết kế layout linh hoạt, Phân chia không gian giưa items, sắp xếp trái -> phải, trên -> dưới, khoảng cách, thứ tự của các items trong 1 container

    + Flex có công dụng gì trong trang web?
        ^ Cấu trúc: 2 phần chính 
            * Hộp chứa cha (flex-container)
            * Các phần tử con nằm trong cha


Thuộc tính của flex container
- display
- flex-direction: Để đinh huong hiển thị của các item con, việc thay đổi hướng hiện thị flex có thể cho phép ta thay đổi vị trí của các item.
- flex-wrap: DÙng để kiểm soát việc bọc các items nằm gọn trong container. Nếu chúng ta giảm chiều rộng của trình duyệt, chúng ta có thể ko nhìn thấy một số item trên cùng 1 dòng.
- flex-flow: kết hợp của flex-direction và flex-wrap;
- justify-content: Dùng để căn chỉnh vị trí của các items so với trục chính. có 6 giá trị justify-content
    + flex-start: vị trí bắt đầu
    + flex-end: vị trí cuối cùng

- align-items
- align-content