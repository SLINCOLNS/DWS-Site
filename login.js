document.getElementById('loginBtn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    var modalOverlay = document.getElementById('modal-overlay'); // Получаем размытый фон

    modal.style.display = 'block';
    modalOverlay.style.display = 'block'; // Отображаем размытый фон

    // Close the modal and modal overlay when clicking on the close button
    modal.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
        modalOverlay.style.display = 'none'; // Скрываем размытый фон
    });

    // Close the modal and modal overlay when clicking outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalOverlay.style.display = 'none'; // Скрываем размытый фон
        }
    });
});
