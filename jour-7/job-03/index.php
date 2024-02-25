<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/output.css" rel="stylesheet">
  <title>Jour-7 Tailwind CSS - Job-03</title>
</head>

<body>
  <header class="flex justify-center items-center bg-blue-800 rounded-md p-8 m-2">
    <nav class="w-full flex flex-col md:flex-row md:justify-around lg:text-2xl font-medium text-slate-300">
      <a href="./index.php" title="Accueil">Accueil</a>
      <a href="./index.php" title="Accueil">Connexion</a>
      <a href="./index.php" title="Accueil">Inscription</a>
      <a href="./index.php" title="Accueil">Recherche</a>
    </nav>
  </header>

  <section>
    <h1 class="text-3xl font-bold underline">
      Formulaire avec TailWind !
    </h1>
    <form method="post">
      <fieldset>
        <caption>Chossir son genre</caption>
      </fieldset>
      <label for="homme">Masculin</label>
      <input type="radio" id="homme" name="genre" value="homme">
      <label for="femme">Féminin</label>
      <input type="radio" id="femme" name="genre" value="femme">
      <label for="nongr">Non-Genré</label>
      <input type="radio" id="nongr" name="genre" value="nongr">

      <label for="nom">Nom</label>
      <input type="text" id="nom" name="nom" placeholder="Votre Nom">

      <label for="prenom">Prénom</label>
      <input type="text" id="prenom" name="prenom" placeholder="Votre prénom">

      <label for="adress">Adresse</label>
      <input type="text" id="adress" name="adress" placeholder="Votre adresse">

      <label for="email">Email</label>
      <input type="email" id="email" name="email" placeholder="Votre email">

      <label for="password">Mot de pass</label>
      <input type="password" id="password" name="password" placeholder="Votre mot de pass">

      <label for="passwordComfirm">Confirmer le mot de pass</label>
      <input type="password" id="passwordComfirm" name="passwordComfirm" placeholder="Confirmer le mot de pass">

      <fieldset>
        <caption>Choissez vos passions</caption>

        <label for="computer">Informatique</label>
        <input type="checkbox" id="computer" name="computer" value="informatique">

        <label for="travel">Voyage</label>
        <input type="checkbox" id="travel" name="travel" value="voyages">

        <label for="sport">Sport</label>
        <input type="checkbox" id="sport" name="sport" value="sport">

        <label for="reading">Lecture</label>
        <input type="checkbox" id="reading" name="reading" value="lecture">
      </fieldset>

      <button id="btn-validate" type="submit">Valider</button>
    </form>
  </section>

  <footer class="flex justify-center items-center bg-blue-800 rounded-md p-8 m-2">
    <ul class="list-none">
      <li><a href="./index.php" title="Accueil">Accueil</a></li>
      <li><a href="./index.php" title="Accueil">Connexion</a></li>
      <li><a href="./index.php" title="Accueil">Inscriptio</a></li>
      <li><a href="./index.php" title="Accueil">Recherche</a></li>
    </ul>
  </footer>
</body>

</html>