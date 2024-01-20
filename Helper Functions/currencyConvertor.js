async function convertCurrency(amount, inputCurrency, targetCurrency) {
  //DOCS: https://www.frankfurter.app/docs/
  const host = "api.frankfurter.app";
  const res = await fetch(
    `https://${host}/latest?amount=${amount}&from=${inputCurrency}&to=${targetCurrency}`
  );
  const data = await res.json();
  const converted = data.rates[targetCurrency];
  return converted;
}

// CALLER
async function get() {
  const data = await convertCurrency(10, "USD", "BGN");
  console.log(data);
}
get(); //expect : 17.9645
