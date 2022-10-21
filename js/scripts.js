const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');


btn.addEventListener('click', function() {
    
  if(menu.style.display === 'grid') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'grid';
  }
});