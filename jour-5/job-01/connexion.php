<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body class="d-flex flex-column">
  <article>
    <h1 id="title-SignIn" class="mb-1">Connexion au module PHP-JS</h1>

    <form class="mb-1" id="form-connexion" method="post">
      <input class="mb-1 p-2 rounded" type="email" id="email" name="email" placeholder="votre email" />
      <input class="mb-1 p-2 rounded" type="password" id="password" name="password" placeholder="votre mots de passe" />
      <button id="addUser" type="submit" class="btn btn-success">Connection</button>
    </form>
  </article>
  <!-- ADD SCRIPT -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  <script src=" ./script.js"></script>
</body>

</html>