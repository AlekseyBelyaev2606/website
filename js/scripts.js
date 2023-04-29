function pressing() {
    var InputValue = document.getElementById('email').value;
    if (InputValue === null) {
        alert('Значение равно null');
      }
    else{
        alert("Данные отправлены " + InputValue);
    }
}

function alerted(){
    alert("Вы нажали на кнопку");
  }