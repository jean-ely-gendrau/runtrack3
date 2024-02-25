<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/output.css" rel="stylesheet">
  <title>Jour-7 Tailwind CSS</title>
</head>

<body>
  <header>
    <nav>
      <a href="./index.php" title="Accueil">Accueil</a>
      <a href="./index.php" title="Accueil">Connexion</a>
      <a href="./index.php" title="Accueil">Inscriptio</a>
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
      <labe for="homme">Masculin</labe>
      <input type="radio" id="homme" name="genre" value="homme">
      <labe for="femme">Féminin</labe>
      <input type="radio" id="femme" name="genre" value="femme">
      <labe for="nongr">Non-Genré</labe>
      <input type="radio" id="nongr" name="genre" value="nongr">

      <labe for="nom">Nom</labe>
      <input type="text" id="nom" name="nom" placeholder="Votre Nom">

      <labe for="prenom">Prénom</labe>
      <input type="text" id="prenom" name="prenom" placeholder="Votre prénom">

      <labe for="adress">Adresse</labe>
      <input type="text" id="adress" name="adress" placeholder="Votre adresse">

      <labe for="email">Email</labe>
      <input type="email" id="email" name="email" placeholder="Votre email">

      <labe for="password">Mot de pass</labe>
      <input type="password" id="password" name="password" placeholder="Votre mot de pass">

      <labe for="passwordComfirm">Confirmer le mot de pass</labe>
      <input type="password" id="passwordComfirm" name="passwordComfirm" placeholder="Confirmer le mot de pass">

      <fieldset>
        <caption>Choissez vos passions</caption>

        <labe for="computer"></labe>
        <input type="checkbox" id="computer" name="computer" value="informatique">

        <labe for="travel"></labe>
        <input type="checkbox" id="travel" name="travel" value="voyages">

        <labe for="sport"></labe>
        <input type="checkbox" id="sport" name="sport" value="sport">

        <labe for="reading"></labe>
        <input type="checkbox" id="reading" name="reading" value="lecture">
      </fieldset>

      <button id="btn-validate" type="submit">Valider</button>
    </form>
  </section>

  <footer>
    <ul>
      <li><a href="./index.php" title="Accueil">Accueil</a></li>
      <li><a href="./index.php" title="Accueil">Connexion</a></li>
      <li><a href="./index.php" title="Accueil">Inscriptio</a></li>
      <li><a href="./index.php" title="Accueil">Recherche</a></li>
    </ul>
  </footer>
</body>

</html>