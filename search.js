function submitSearch(event) {
    event.preventDefault(); 
    // Получаем значение, введенное пользователем в поле поиска
    const searchValue = document.getElementById('searchInput').value;
    
    // Выполняем проверку на основе введенного значения и перенаправляем на соответствующую страницу
    
    if (searchValue === 'одежда') {
      window.location.href = 'product.html';
    } else if (searchValue === 'банан') {
      window.location.href = 'banana.html';
    } else if (searchValue === 'апельсин') {
      window.location.href = 'orange.html';
    } else {
      window.location.href = 'default.html';
    }
  }
function updateSearchBar(keyword) {
    document.getElementById('searchInput').value = keyword;
  }