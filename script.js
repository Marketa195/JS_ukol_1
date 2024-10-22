const jmeno = prompt("Zadej své křestní jméno bez diakritiky").toLowerCase();

const prijmeni = prompt("Zadej své příjmení bez diakritiky").toLowerCase();

console.log(jmeno);

console.log(jmeno.trim());

console.log(prijmeni);

console.log(prijmeni.trim());

const castJmena = jmeno.slice(0, 3);

const castPrijmeni = prijmeni.slice(0, 5);

const vyslednaAdresa = `<p>Vysledna adresa je ${castPrijmeni}${castJmena}@fit.cvut.cz</p>`;

document.body.innerHTML = vyslednaAdresa;