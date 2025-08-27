# 🌍 Multi-Language Portfolio Setup Guide

## Tổng quan

Dự án portfolio của bạn giờ đã được tích hợp tính năng chuyển đổi ngôn ngữ linh hoạt giữa tiếng Anh và tiếng Việt. Người dùng có thể dễ dàng chuyển đổi ngôn ngữ bằng cách click vào các nút ngôn ngữ.

## 📁 Files đã được thêm/cập nhật

### 1. Files mới được tạo:

- `js/translations.js` - Chứa dữ liệu dịch thuật và logic chuyển đổi ngôn ngữ
- `css/language-toggle.css` - Styles cho nút chuyển đổi ngôn ngữ
- `language-demo.html` - File demo để test tính năng

### 2. Files đã được cập nhật:

- `index.html` - Thêm link CSS và JavaScript cho tính năng đa ngôn ngữ
- `js/script.js` - Cập nhật typing animation để hỗ trợ đa ngôn ngữ

## 🚀 Cách sử dụng

### Kiểm tra tính năng:

1. Mở file `language-demo.html` trong trình duyệt
2. Click vào nút 🇺🇸 EN hoặc 🇻🇳 VI ở sidebar
3. Quan sát nội dung website tự động chuyển đổi ngôn ngữ

### Tích hợp vào website chính:

File `index.html` đã được cập nhật với tính năng đa ngôn ngữ. Bạn chỉ cần:

1. Upload tất cả files lên server
2. Tính năng sẽ hoạt động tự động

## 🎯 Tính năng

### ✅ Đã hoàn thành:

- ✅ Chuyển đổi ngôn ngữ EN/VI
- ✅ Lưu ngôn ngữ đã chọn trong localStorage
- ✅ Responsive design cho mobile
- ✅ Cập nhật tất cả nội dung: navigation, home, about, services, portfolio, contact
- ✅ Typing animation với ngôn ngữ tương ứng
- ✅ Smooth transitions khi chuyển đổi
- ✅ Profile information và tooltips

### 🔧 Cấu trúc dữ liệu:

```javascript
const translations = {
    en: {
        nav: { home: "Home", about: "About", ... },
        home: { greeting: "I'm", profession: "I'm a", ... },
        about: { title: "About Me", ... },
        services: { title: "Services", ... },
        portfolio: { title: "Portfolio", ... },
        contact: { title: "Contact", ... }
    },
    vi: {
        // Tương tự với nội dung tiếng Việt
    }
}
```

## 🎨 Customization

### Thêm ngôn ngữ mới:

1. Mở `js/translations.js`
2. Thêm ngôn ngữ mới vào object `translations`
3. Cập nhật UI buttons trong `LanguageManager.createLanguageToggle()`

### Chỉnh sửa nội dung:

1. Mở `js/translations.js`
2. Tìm key tương ứng trong object `translations`
3. Cập nhật nội dung
4. Save file và refresh trang

### Styling buttons:

Chỉnh sửa file `css/language-toggle.css` để thay đổi giao diện nút chuyển đổi.

## 📱 Responsive Design

### Desktop:

- Nút ngôn ngữ hiển thị ở sidebar footer
- Full-size buttons với flag và text

### Mobile/Tablet:

- Nút ngôn ngữ hiển thị ở góc phải trên cùng
- Compact design để tiết kiệm không gian
- Không bị che bởi navigation toggle

## 🛠️ Troubleshooting

### Nếu tính năng không hoạt động:

1. Kiểm tra Console (F12) xem có lỗi JavaScript không
2. Đảm bảo file `js/translations.js` được load đúng
3. Kiểm tra thứ tự load JavaScript files

### Nếu nội dung không được dịch:

1. Kiểm tra console xem có lỗi không
2. Đảm bảo các selectors trong `updateContent()` đúng với HTML structure
3. Kiểm tra dữ liệu translations có đầy đủ không

### Performance:

- Tính năng sử dụng localStorage để lưu ngôn ngữ đã chọn
- Không có API calls, hoàn toàn client-side
- Lightweight và nhanh

## 🌟 Demo Links

- **Full Portfolio**: `index.html` (đã tích hợp tính năng)
- **Language Demo**: `language-demo.html` (demo focused)

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ thêm hoặc muốn tùy chỉnh tính năng, vui lòng liên hệ!

---

**🎉 Chúc mừng! Portfolio của bạn giờ đã hỗ trợ đa ngôn ngữ!**

Tính năng này sẽ giúp bạn tiếp cận được nhiều đối tượng khách hàng hơn, đặc biệt là cả khách hàng nước ngoài (English) và khách hàng Việt Nam.
