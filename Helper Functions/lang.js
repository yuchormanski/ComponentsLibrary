const BG = {
  firstName: "име",
  lastName: "фамилия",
  email: "имейл",
};

const EN = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
};

function lang(phrase, local = "US") {
  //default locals format - bg-BG; en-US

  //const local = window.navigator.language.split('-).at(1);

  const baseLang = local === "BG" ? BG : EN;
  return baseLang[phrase];
}

console.log(lang("firstName", "BG"));
//expected on Bulgarian - име

console.log(lang("firstName"));
//expected on English - firstName

export { lang };
