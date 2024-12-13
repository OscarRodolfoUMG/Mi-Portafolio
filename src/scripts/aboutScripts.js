function copiarEmail() {
    const emailInput = document.getElementById("email");
    emailInput.select();
    emailInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(emailInput.value)
        .then(() => {
            alert("¡Correo copiado al portapapeles!");
        })
        .catch((err) => {
            console.error("Error al copiar el correo: ", err);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.querySelector('.close-btn');

    document.querySelectorAll('.view-btn').forEach(button => {
      button.addEventListener('click', () => {
        const imgSrc = button.getAttribute('data-img');
        modalImg.src = imgSrc;
        modal.style.display = 'block';
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });