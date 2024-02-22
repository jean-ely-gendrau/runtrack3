<?php
$host = "localhost";
$db = htmlspecialchars("utilisateurs");
if (isset($_POST['install']) && $_POST['install'] === "install") :

  $root = "root";

  try {
    $dbConnect = new PDO('mysql:host=localhost;charset=utf8', $root);
    $dbConnect->exec("CREATE DATABASE `$db`;")
      or die(print_r($dbConnect->errorInfo(), true));

    $dbConnect = new PDO("mysql:host=localhost;dbname={$db};charset=utf8", $root);
    $sqlCreateUsers = "CREATE TABLE utilisateurs (
        id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nom varchar(255) NOT NULL,
        prenom varchar(255) NOT NULL,
        email varchar(255) NOT NULL,
        password varchar(255) NOT NULL
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;"; // SQL CREATE TABLE utilisateurs

    $req = $dbConnect->prepare($sqlCreateUsers);
    $req->execute(); // Execute la requête

    header("Location: index.php");
  } catch (Exception $error) {
    die('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
  }
endif;
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Install Jour-4 Job-04</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>

<body class="d-flex flex-column">
  <article class="d-flex flex-column border-1 border-black p-4 gap-5">
    <h1 id="title">Install Jour-4 Job-04 - Création BDD <?= $db; ?></h1>

    <p>La base de données <?= $db; ?> n'existe pas sur vôtre <?= $host; ?>, cliquez sur créer pour la générer. Nous sommes sur localhost et le nom d'utilisateur est root, la base ne comporte aucun mot de pass. Sur un serveur de production, vous devrez avoir un mot de pass sécuriser et utiliser un utilisateur dédié à la base pour un meilleur sécuriser.</p>
    <form method="post">
      <button name="install" value="install" type="submit" class="bg-success p-2 border-1 border-black rounded">Créér la base <?= $db; ?></button>
    </form>
  </article>
  <!-- ADD SCRIPT -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>

</html>