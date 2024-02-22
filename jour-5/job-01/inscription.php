<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscription</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body class="d-flex flex-column">

  <article class="d-flex flex-column">

    <h1 id="title-signUp" class="mb-1">Inscription au module de connexion PHP-JS</h1>

    <form class="mb-1 d-flex flex-column m-auto" id="form-inscription" method="post">
      <label for="nom">Votre nom</label>
      <input class="mb-1 p-2 rounded" type="text" id="nom" name="nom" placeholder="Votre nom" />

      <label for="prenom">Votre prénom</label>
      <input class="mb-1 p-2 rounded" type="text" id="prenom" name="prenom" placeholder="Votre prénom" />

      <label for="email">Votre email</label>
      <input class="mb-1 p-2 rounded" type="email" id="email" name="email" placeholder="Votre email" />

      <label for="password">Votre mot de pass</label>
      <input class="mb-1 p-2 rounded" type="password" id="password" name="password" placeholder="Votre mot de pass" />
      <p id="message-password" class="mb-1 p-2">La longueur de votre mot de passe doit être d'au moins 6 caractères, comprenant au moins une lettre majuscule et un chiffre, ainsi qu'un caractère spécial (_ - ! $ ; % ,)</p>

      <label for="passwordCompare">Confirmer le mot de pass</label>
      <input class="mb-1 p-2 rounded" type="password" id="passwordCompare" name="passwordCompare" placeholder="Confirmer le mot de pass" />

      <button id="addUser" class="btn btn-success">S'enregistrer</button>
    </form>

  </article>
  <!-- ADD SCRIPT -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src=" ./script.js"></script>
</body>

</html>