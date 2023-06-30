// use callback;
// rederence type
// react memo

// tránh tạo ra hàm mới không cần thiết trong function components

/**
 * tạo ra phạm vi mới độc lập
 * tạo ha hai hàm y hệt nhau nhưng so sánh tham chiếu khác nhau
 * useCallback lưu ra ngoài phạm vi hàm app
 * return lại tham chiếu cho cái biến handleIncrement
 * 
 * 
 * dùng memo + useCallback với object array function
 */ 