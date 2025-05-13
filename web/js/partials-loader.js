function loadPartial(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(error => {
      console.error(`Ошибка загрузки ${url}:`, error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial('main-content', 'partials/main.html');
  loadPartial('balance-content', 'partials/balance.html');
  loadPartial('buy-gift-content', 'partials/buy-gift.html');
  loadPartial('inventory-content', 'partials/inventory.html');
});
