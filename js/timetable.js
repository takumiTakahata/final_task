// タイムテーブルの日付切り替え機能
document.addEventListener("DOMContentLoaded", function () {
  const dateButtons = document.querySelectorAll(".date-btn");
  const timetables = {
    "5/2": document.getElementById("timetable-5-2"),
    "5/3": document.getElementById("timetable-5-3"),
  };

  dateButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedDate = this.getAttribute("data-date");

      // すべてのボタンからactiveクラスを削除
      dateButtons.forEach((btn) => btn.classList.remove("active"));

      // クリックされたボタンにactiveクラスを追加
      this.classList.add("active");

      // すべてのテーブルを非表示にする
      Object.values(timetables).forEach((table) => {
        if (table) {
          table.style.display = "none";
        }
      });

      // 選択された日付のテーブルを表示
      if (timetables[selectedDate]) {
        timetables[selectedDate].style.display = "table";
      }
    });
  });
});
