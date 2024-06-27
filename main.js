// main.js
import $ from 'jquery';

// Função para inicializar a galeria de fotos
function initGallery() {
  // Seleciona a galeria de fotos
  const gallery = $('.galeria');

  // Adiciona evento de click às imagens
  gallery.find('img').on('click', function() {
    // Abre a imagem em uma janela modal
    const src = $(this).attr('src');
    const alt = $(this).attr('alt');
    $('#modal-image').attr('src', src);
    $('#modal-alt').text(alt);
    $('#modal').fadeIn();
  });

  // Adiciona evento de click ao botão de fechar da janela modal
  $('#modal-close').on('click', function() {
    $('#modal').fadeOut();
  });
}

// Função para inicializar a página
function initPage() {
  initGallery();
}

// Inicializa a página quando o documento estiver pronto
$(document).ready(initPage);