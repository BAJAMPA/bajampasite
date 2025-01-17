// Selecionar todas as imagens da galeria
const galleryItems = document.querySelectorAll('.gallery-item');

// Criar o modal dinamicamente
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <img class="modal-content" id="modal-image">
`;

// Adicionar o modal ao corpo
document.body.appendChild(modal);

// Selecionar os elementos do modal
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Função para abrir o modal
galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImage.src = item.src; // Definir a imagem no modal
  });
});

// Função para fechar o modal ao clicar no "X"
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar o modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
