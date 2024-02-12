function jourtravaille(date) {
  // API Jour Ferier exemple d'appel pour 2020 dans la metropole :  https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json
  const jourFerier = async (anne) => {
    try {
      const fetchApi = await fetch(
        `https://calendrier.api.gouv.fr/jours-feries/metropole/${anne}.json`
      );
      const response = await fetchApi.json();
      //console.log(response);
      return response;
    } catch (error) {
      const response = { error: "service injoignable" };
      return response;
    }
  };
  const resultFecth = jourFerier(date.getFullYear());

  console.log(
    "Vauillez patientez le temps de récuperer les jours férié de l'API"
  );

  function returnResult(date, resultFecth) {
    console.log(date, resultFecth);
    let jour = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
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

    let moisNumber = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    let result = "";
    let dayWeek = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let formatDate = `${year}-${moisNumber[month]}-${day
      .toString()
      .padStart(2, "0")}`;

    // Vérification si c'est un weekend
    if (dayWeek === 0 || dayWeek === 6) {
      result = `Non, le ${jour[day]} ${day} ${mois[month]} est un weekend`;
    } else if (resultFecth.hasOwnProperty(formatDate)) {
      //calendrier.api.gouv.fr/jours-feries/metropole/2020.json
      result = `Le ${jour[day]} ${day} ${mois[month]} est un jour férié : ${resultFecth[formatDate]}`;
    } else {
      result = `Oui, le ${jour[day]} ${day} ${mois[month]} est un jour travaillé`;
    }
    console.log(result);
  }

  resultFecth.then((data) => returnResult(date, data));
}

jourtravaille(new Date("2020, 1, 1"));
setTimeout(() => {
  jourtravaille(new Date("2020, 1, 2"));
}, 2000);
setTimeout(() => {
  jourtravaille(new Date("2020, 1, 3"));
}, 2000);
