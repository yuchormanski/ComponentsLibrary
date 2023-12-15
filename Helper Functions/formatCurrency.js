function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

// locals: en, us, bg ...
// currency: "USD", "BGN" ,'GBP' ...
