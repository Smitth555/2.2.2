function submitSearch(event) {
    event.preventDefault(); 
    // Получаем значение, введенное пользователем в поле поиска
    const searchValue = document.getElementById('searchInput').value;
    
    // Выполняем проверку на основе введенного значения и перенаправляем на соответствующую страницу
    
    if (searchValue === 'одежда') {
      window.location.href = 'menu1.html';
    } else if (searchValue === 'одеда') {
      window.location.href = ' menu1.html';
    } else if (searchValue === 'оджда') {
      window.location.href = 'menu1.html';
    } else {
      window.location.href = 'default.html';
    }
  }
function updateSearchBar(keyword) {
    document.getElementById('searchInput').value = keyword;
  }