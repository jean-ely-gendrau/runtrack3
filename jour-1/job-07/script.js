function jourtravaille(date) {
  // API Jour Ferier exemple d'appel pour 2020 dans la metropole :  https://calendrier.api.gouv.fr/jours-feries/metropole/2020.json
  const jourFerier = async (anne) => {
    try {
      const fetchApi = await fetch(
        `https://calendrier.api.gouv.fr/jours-feries/metropole/${anne}.json`
      );
      const response = await fetchApi.json();
      //DEBUG console.log(response);
      return response;
    } catch (error) {
      const response = { error: "service injoignable" };
      return response;
    }
  };

  // Init la fonction asyncrone
  const resultFecth = jourFerier(date.getFullYear());

  // Avertissement
  console.log(
    "Vauillez patientez le temps de récuperer les jours férié de l'API"
  );

  function returnResult(date, resultFecth) {
    //DEBUG console.log(date, resultFecth);
    // les jours de la semaine en lettre correspondant à la valeur retourner par getMonth en lettre
    let jour = [
      "dimanche",
      "lundi",
      "mardi",
      "mercredi",
      "jeudi",
      "vendredi",
      "samedi",
    ];

    // les mois de l'année en lettre correspondant à la valeur retourner par getMonth
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

    // les mois de l'année  en nombre correspondant à la valeur retourner par getMonth
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
    let dayWeek = date.getDay(); // Jour de la semaine en numérique : 0 pour dimanche .... 6 pour samedi
    let day = date.getDate(); // Retourne le jour courant de la date ex 1, 2, ...., 30
    let month = date.getMonth(); // Retourne le mois courant en numérique de la date ex 0 pour janvier, .... , 11 pour decembre
    let year = date.getFullYear(); // Retourne l'année en numérique exemple : 2024

    // Format date pour la vérification du résultat de l'API
    let formatDate = `${year}-${moisNumber[month]}-${day
      .toString()
      .padStart(2, "0")}`; // On ajoute un zéro devant les jours pour avoir le bon format. ex : 00, 01

    // Vérification si c'est un weekend
    if (dayWeek === 0 || dayWeek === 6) {
      result = `Non, le ${jour[dayWeek]} ${day} ${mois[month]} est un weekend`;

      /* Vérification si c'est un jour férier graçe à l'api
       * on peu gérer Liste les jours fériés pour une zone,
       * 20 ans dans le passé et 5 ans dans le futur
       */
    } else if (resultFecth.hasOwnProperty(formatDate)) {
      //calendrier.api.gouv.fr/jours-feries/metropole/2020.json
      result = `Le ${jour[dayWeek]} ${day} ${mois[month]} est un jour férié : ${resultFecth[formatDate]}`;

      // Si ce n'est aucune des autre condition alors c'est un jour travaillé
    } else {
      result = `Oui, le ${jour[dayWeek]} ${day} ${mois[month]} est un jour travaillé`;
    }
    console.log(result); // résultat
  }

  // Resultat de la promese
  resultFecth.then((data) =>
    data?.error
      ? console.log("une erreur viens de ce produire patienter un moment.")
      : returnResult(date, data)
  );
}

jourtravaille(new Date("2020, 1, 1"));

// On attent 5 sec
setTimeout(() => {
  jourtravaille(new Date("2020, 1, 2"));
}, 2000);

// On attent 5 sec
setTimeout(() => {
  jourtravaille(new Date("2020, 1, 5"));
}, 5000);
