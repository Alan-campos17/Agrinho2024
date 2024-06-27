// main.js
import $ from 'jquery';

// Função para adicionar efeitos de scroll às seções
function addScrollEffects() {
  $(window).scroll(function() {
    const scrollPosition = $(window).scrollTop();
    const sections = $('section');

    sections.each(function() {
      const sectionTop = $(this).offset().top;
      const sectionHeight = $(this).height();

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        $(this).addClass('active');
      } else {
        $(this).removeClass('active');
      }
    });
  });
}

// Função para adicionar efeitos de hover aos botões
function addHoverEffects() {
  $('.btn').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });
}

// Função para inicializar a página
function initPage() {
  addScrollEffects();
  addHoverEffects();
}

// Inicializa a página quando o documento estiver pronto
$(document).ready(initPage);