// ハンバーガーメニューの制御
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// メニュー項目をクリックしたら閉じる
const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  });
});
