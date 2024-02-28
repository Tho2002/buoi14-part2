// /// Phần localstorage :là kho lưu trữ ở phía người dùng
// //lưu trữ dữ liệu vô thời hạn ,dữ liệu được lưu trữ cho tới khi người dùng xóa lịch xử trình duyệt web
// //localstorage có 5 phương thức :
// //  1  setItem(key,value):Thêm dữ liệu vào localStorage
// //    vd  : localStorage.setItem("fullname", "luu duc tho"); //dạng key value
// // 2 getItem(key):lấy dữ liệu từ localStorage
// //  vd const fullname = localStorage.getItem("fullname"); //dạngkey
// //3 removeItem(key): xóa dữ liệu
// // const remove = localStorage.removeItem("name"); /// xóa dữ liệu

// // const check = document.querySelector("#test1");
// // check.innerHTML = fullname;
// // const currentMode = localStorage.getItem("mode");
// // if (currentMode) {
// //   const body = document.querySelector("body");
// //   body.classList.toggle("dark");
// // }
// // const buttonChangemode = document.querySelector("#change-mode");
// // buttonChangemode.addEventListener("click", () => {
// //   const body = document.querySelector("body");
// //   body.classList.toggle("dark");
// //   const currentMode = localStorage.getItem("mode");
// //   if (currentMode) {
// //     localStorage.setItem("mode", "");
// //   } else {
// //     localStorage.setItem("mode", "dark");
// //   }
// // });
// ///4 localStorage.clear() xóa hết toàn bộ dữ liệu
// //5 localStorage.key(index)  lấy ra key của localStorage

// //sessionStorage  là kho lưu trữ theo phiên dữ liệu sẽ mất đi khi tắt trình duyệt
// //có 5 phương thức
// //  1  setItem(key,value):Thêm dữ liệu vào sessionStorage
// // 2 getItem(key):lấy dữ liệu từ sessionStorage
// //3 removeItem(key): xóa dữ liệu
// //4 localStorage.clear() xóa hết toàn bộ dữ liệu
// //5 localStorage.key(index)  lấy ra key của sessionStorage

// //03 closure(bao đóng)//1 hàm bên trong hàm khác

// //04 default paramaters(Tham số mặc định)
// // vd1
// // const tong = (a, b) => {
// //   return a + b;
// // };
// // const ketQua = tong(10, 20);
// // console.log(ketQua);
// // vd2
// // const tong = (a, b) => {
// //   a = a || 0;
// //   b = b || 0;
// //   return a + b;
// // };
// // const ketQua = tong(10, 20);
// // console.log(ketQua);
// //05 Spread syntax áp dụng cho mảng và object
// //để lặp lai các phần tử của mảng hoặc đối tượng obj
// //cú pháp ...name
// //mảng
// // vd1
// // const mang1 = [1, 2, 3, 4];
// // const mang2 = [...mang1, 9, 10, 8];
// // console.log(mang2);
// // vd2
// // const listUser = ["tho", "tho1", "tho2", "tho3"];
// // const listFE = ["tho6", "tho7", "tho8"];
// // const newList = [...listUser, ...listFE];
// // console.log(newList);
// //object
// // const student = {
// //   name: "luu duc tho",
// //   age: 22,
// // };
// // const student2 = {
// //   email: "ldtho1604@gmail.com",
// // };
// // const student3 = { ...student, ...student2 };
// // console.log(student3);

// ///06 Rest parameter áp dụng cho1 hàm
// // const tinhTong = (...numbers) => {
// //   let tong = 0;
// //   for (const number of numbers) {
// //     tong += number;
// //   }
// //   return tong;
// // };
// // const ketqua = tinhTong(10, 20, 30, 40, 50, 60);
// // console.log(ketqua);

// // 07 DESTRUCTURINg(phá vỡ cấu trúc)để dễ dàng lấy phần tử của arr hoặc obj
// // VD//vd
// // const time = ["10", "24", "50"];

// // const [hour, minute, second] = time;
// // // const hour = time[0];
// // // const minute = time[1];
// // // const second = time[2];
// // console.log(hour);
// // console.log(minute);
// // console.log(second);

// //obj

// const user = {
//   name: "luu duc tho",
//   age: 22,
//   adress: "nam dinh",
// };
// const { name, age, adress } = user;
// console.log(user);
