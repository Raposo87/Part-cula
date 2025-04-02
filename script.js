 // Selecionando os elementos do DOM
 const navToggle = document.querySelector('.nav-toggle');
 const closeNav = document.querySelector('.close-nav');
 const nav = document.querySelector('nav');
 const navLinks = document.querySelectorAll('nav ul li a');
 
 // Função para abrir o menu
 navToggle.addEventListener('click', () => {
     nav.classList.add('open');
 });
 
 // Função para fechar o menu
 closeNav.addEventListener('click', () => {
     nav.classList.remove('open');
 });
 
 // Fechar o menu quando um link é clicado
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         nav.classList.remove('open');
     });
 });
 
 // Fechar o menu quando clicar fora dele
 document.addEventListener('click', (e) => {
     const isClickInside = nav.contains(e.target) || navToggle.contains(e.target);
     
     if (!isClickInside && nav.classList.contains('open')) {
         nav.classList.remove('open');
     }
 });
 
 // Verificar o tamanho da tela ao redimensionar
 window.addEventListener('resize', () => {
     if (window.innerWidth > 768 && nav.classList.contains('open')) {
         nav.classList.remove('open');
     }
 });