// API Jour Ferier exemple d'appel pour 2020 dans la metropole :  https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json
async function jourFerier(anne) {
  const reponse = await fetch(
    `https://calendrier.api.gouv.fr/jours-feries/metropole/${anne}.json`
  );
  const response = await reponse.json();
  return response;
}

function jourtravaille(date) {
  const jourFerier = jourFerier();

  let jour = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi",
    "dimanche",
  ];

  let mois = [
    "janvier",
    "fevrier",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "decembre",
  ];

  let result = "";
  let dayWeek = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getYear();

  let formatDate = `${year}-${month}-${day}`;

  //calendrier.api.gouv.fr/jours-feries/metropole/2020.json
  if (dayWeek === 0 || dayWeek === 6) {
    result = `Non, le ${jour[day]} ${dayWeek} ${mois[month]} est un weekend`;
  } else {
    result = `Oui, le ${jour[day]} ${dayWeek} ${mois[month]} est un jour travaillé`;
  }

  console.log(result);
}
jourtravaille(new Date("2020, 6, 17"));
