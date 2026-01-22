// お問い合わせ確認画面のデータ表示
document.addEventListener("DOMContentLoaded", function () {
  // セッションストレージからデータを取得
  const formDataStr = sessionStorage.getItem("contactFormData");

  if (!formDataStr) {
    // データがない場合は入力画面に戻る
    window.location.href = "contact.html";
    return;
  }

  const formData = JSON.parse(formDataStr);

  // 確認画面にデータを表示
  const confirmItems = document.querySelectorAll(".confirm-item");

  // 問い合わせ種別
  confirmItems[0].querySelector(".confirm-value").textContent =
    formData.inquiryTypeLabel || "-";

  // お名前
  confirmItems[1].querySelector(".confirm-value").textContent =
    formData.name || "-";

  // メールアドレス
  confirmItems[2].querySelector(".confirm-value").textContent =
    formData.email || "-";

  // 電話番号
  confirmItems[3].querySelector(".confirm-value").textContent =
    formData.phone || "-";

  // お問い合わせ内容
  confirmItems[4].querySelector(".confirm-value").textContent =
    formData.message || "-";

  // 送信ボタンのクリック処理
  const submitBtn = document.querySelector(".submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", function () {
      // 送信処理（実際にはサーバーへ送信する処理を実装）
      alert("お問い合わせを送信しました。");

      // セッションストレージをクリア
      sessionStorage.removeItem("contactFormData");

      // トップページへ遷移
      window.location.href = "index.html";
    });
  }
});
