function calculate(event){
  event.preventDefault(); 

  let alcoolInput = document.getElementById('alcool').value;
  let gasolineInput = document.getElementById('gasoline').value;
  let contentResult = document.getElementById('content-result');
  let textResult = document.getElementById('text-result');

  let alcoolSpan = document.getElementById('alcool-result')
  let gasolineSpan = document.getElementById('gasoline-result')

  // Cálculo  alcool / gasolina
  // Se o resultado for menor que 0.7, compensa colocar álcool

  let calculation = (alcoolInput / gasolineInput);

  if(calculation < 0.7){
    textResult.innerHTML = "Compensa usar ÁLCOOL";
  } else {
    textResult.innerHTML = "Compensa usar GASOLINA";
  }

  gasolineSpan.innerHTML = "Gasolina R$ " + gasolineInput;
  alcoolSpan.innerHTML = "Alcool R$ " + alcoolInput;

  contentResult.classList.remove('hide')


}