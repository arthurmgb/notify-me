const viewed = localStorage.getItem('visto');
localStorage.setItem('visto', 1);
if(viewed == 1){
    window.location.href = '../index.html';
}