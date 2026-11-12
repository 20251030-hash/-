// 1. 首頁：點擊按鈕彈出優惠訊息
const promoBtn = document.getElementById("promoBtn");
if (promoBtn) {
  promoBtn.addEventListener("click", function () {
    alert("🎉 恭喜獲得限時優惠碼：【BKK2026】\n結帳時輸入即享全單 85 折優惠！");
  });
}

// 2. 產品頁：點擊「立即搶購」按鈕提示
const buyButtons = document.querySelectorAll(".buyBtn");
buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const productName = this.getAttribute("data-product");
    alert(`已將「${productName}」加入購物車！🛒`);
  });
});

// 3. 聯絡我們：送出表單互動提示
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // 防止網頁重新整理
    const userName = document.getElementById("name").value;
    alert(`謝謝你，${userName}！我們已收到你的訊息，會盡快回覆你。`);
    contactForm.reset();
  });
}