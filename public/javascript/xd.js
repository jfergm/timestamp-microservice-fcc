let btn = document.getElementById('xdbtn');

let txt = document.getElementById('xdtxt');

btn.addEventListener('click', function() {
  window.location.href = `/${txt.value}`;
});

txt.addEventListener('keyup', function(e) {
 if( e.code == 'Enter') {
   window.location.href = `/${txt.value}`;
 }
});