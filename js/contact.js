// お問い合わせフォームの送信処理
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // フォームデータを取得
      const formData = {
        inquiryType:
          document.querySelector('input[name="inquiry-type"]:checked')?.value ||
          "",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      // 問い合わせ種別のラベルを取得
      const inquiryTypeLabels = {
        ticket: "チケットについて",
        venue: "会場について",
        info: "公開情報について",
        other: "その他",
      };
      formData.inquiryTypeLabel = inquiryTypeLabels[formData.inquiryType] || "";

      // セッションストレージに保存
      sessionStorage.setItem("contactFormData", JSON.stringify(formData));

      // 確認画面へ遷移
      window.location.href = "contact-confirm.html";
    });
  }
});
