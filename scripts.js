/* Quando clicar no (código) ou botão (copiar), abrirá o popup.*/
function mypopupFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

/* myInput - Código do convite */
function inputFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  mypopupFunction();
}

/* SnackBar - Aviso rápido de redirecionamento */
function snackbarFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  x.style.visibility = "show";
  /*setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);*/
  setTimeout(function () {
    x.style.visibility = "hidden";
  }, 3000);
}