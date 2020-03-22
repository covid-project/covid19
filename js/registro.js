document.querySelector('#login').addEventListener('click',registro)


function registro(){
  var usuario = document.getElementById('user').value;
  var contraseña = document.getElementById('contra').value;

  window.location.href = 'supermercado.html'
}
