        // Валидация формы
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('callBackForm');
            const successToast = new bootstrap.Toast(document.getElementById('successToast'));
            
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                event.stopPropagation();
                
                if (form.checkValidity()) {
                    // Форма валидна - показываем уведомление и закрываем модальное окно
                    successToast.show();
                    
                    // Закрываем модальное окно через 1 секунду
                    setTimeout(() => {
                        const modal = bootstrap.Modal.getInstance(document.getElementById('callBackModal'));
                        modal.hide();
                        form.reset();
                        form.classList.remove('was-validated');
                    }, 1000);
                }
                
                form.classList.add('was-validated');
            });
            
            // Сбрасываем валидацию при открытии модального окна
            document.getElementById('callBackModal').addEventListener('show.bs.modal', function() {
                form.reset();
                form.classList.remove('was-validated');
            });
        });
// Функция для показа уведомления о добавлении в корзину
function showCartNotification() {
    // Создаем и показываем toast через Bootstrap
    const cartToast = new bootstrap.Toast(document.getElementById('cartToast'));
    cartToast.show();
}

// Добавляем обработчики событий на все кнопки "В корзину"
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showCartNotification();
        });
    });
});