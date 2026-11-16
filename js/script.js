// 2. Напишіть конвертор валют. Користувач вводить кількість USD, вибирає в яку валюту 
// хоче перекласти: EUR, UAN або AZN, і отримує відповідну суму.
const amountOfUsd = prompt("Введіть кількість USD");
const whichCurrencyToConvertTo = prompt("В яку валюту перекласти");
if (whichCurrencyToConvertTo == 'EUR') {
  const result = amountOfUsd * 0.91;
  alert(result);
}
else if (whichCurrencyToConvertTo == 'UAH') {
  const result = amountOfUsd * 45.29;
  alert(result);
}
else if (whichCurrencyToConvertTo == 'AZN') {
  const result = amountOfUsd * 1.70;
  alert(result);
}
