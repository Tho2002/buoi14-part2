///localstorage :là kho lưu trữ ở phía người dùng
//lưu trữ dữ liệu vô thời hạn ,dữ liệu được lưu trữ cho tới khi người dùng xóa lịch xử trình duyệt web
//localstorage có 5 phương thức :
//setItem():Thêm dữ liệu vào localStorage
// localStorage.setItem("fullname", "luu duc tho"); //dạng key value
//getItem():lấy dữ liệu từ localStorage
const fullname = localStorage.getItem("fullname"); //dạngkey

const check = document.querySelector("#test1");
check.innerHTML = fullname;
const currentMode = localStorage.getItem("mode");
if (currentMode) {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
}
const buttonChangemode = document.querySelector("#change-mode");
buttonChangemode.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.classList.toggle("dark");
  const currentMode = localStorage.getItem("mode");
  if (currentMode) {
    localStorage.setItem("mode", "");
  } else {
    localStorage.setItem("mode", "dark");
  }
});
