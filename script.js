window.onload = function() {

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('close');

    const images = document.querySelectorAll('.image');
    images.forEach(function(img) {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        };
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
        modalImg.classList.remove('zoomed'); // Reset zoom when closing
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalImg.classList.remove('zoomed'); // Reset zoom when closing
        }
    };

    // Toggle zoom in and out on click
    modalImg.onclick = function() {
        if (modalImg.classList.contains('zoomed')) {
            modalImg.classList.remove('zoomed');
        } else {
            modalImg.classList.add('zoomed');
        }
    };
};

