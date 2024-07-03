// Add event listeners to the buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.1)';
      button.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
    });
  
    button.addEventListener('mouseout', () => {
      button.style.transform = 'scale(1)';
      button.style.boxShadow = 'none';
    });
  });
  
  // Add a scroll effect to the sections
  document.querySelectorAll('section').forEach(section => {
    section.addEventListener('scroll', () => {
      const scrollPosition = section.scrollTop;
      const sectionHeight = section.offsetHeight;
      const opacity = scrollPosition / sectionHeight;
  
      section.style.opacity = opacity;
    });
  });
  
  // Add a fade-in effect to the images
  document.querySelectorAll('img').forEach(image => {
    image.addEventListener('load', () => {
      image.style.opacity = 1;
    });
    image.style.opacity = 0;
  });

  // Seleciona todos os botões com a classe "btn"
const buttons = document.querySelectorAll('.btn');

// Adiciona um evento de clique a cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Animação de clique
    button.classList.add('animate');

    // Remove a classe de animação após 0.5 segundos
    setTimeout(() => {
      button.classList.remove('animate');
    }, 500);
  });
});