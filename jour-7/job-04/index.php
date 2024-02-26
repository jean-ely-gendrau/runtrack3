<?php

ini_set("highlight.comment", "#008000");
ini_set("highlight.default", "#000000");
ini_set("highlight.html", "#808080");
ini_set("highlight.keyword", "#0000BB; font-weight: bold");
ini_set("highlight.string", "#DD0000");

$escapeFile = ['.', '..', 'list-voie.php'];
$listForm = scandir(__DIR__ . DIRECTORY_SEPARATOR . "formTailwind");

$diffArray = array_diff($listForm, $escapeFile);
unset($escapeFile, $listForm);

$listOption = join('', array_map(
  function ($fileItem) {
    $fileItem = basename($fileItem, '.php');
    return "<option value='{$fileItem}'>{$fileItem}</option>";
  },
  $diffArray
));
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../src/output.css" rel="stylesheet">
  <title>Jour-7 Tailwind CSS - Job-04</title>
</head>

<body class="flex flex-col gap-y-2 h-screen place-content-between">
  <header class="flex justify-center items-center bg-blue-800 rounded-md p-8 m-2">
    <nav class="w-full flex flex-col md:flex-row md:justify-around lg:text-2xl font-medium text-slate-300">
      <a href="./index.php" title="Accueil">Accueil</a>
      <a href="./index.php" title="Accueil">Connexion</a>
      <a href="./index.php" title="Accueil">Inscription</a>
      <a href="./index.php" title="Accueil">Recherche</a>
    </nav>
  </header>

  <section id="containt-form" class="flex flex-col gap-y-2">
    <h1 class="text-3xl font-bold underline text-center text-blue-950">
      Formulaire avec TailWind !
    </h1>

    <select id="listForm" name="listForm" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-auto">
      <option>Choisir un formulaire</option>
      <?= $listOption; ?>
    </select>

  </section>

  <footer class="flex justify-center items-center bg-slate-800 rounded-md p-8 m-2">
    <div class="w-full flex flex-col text-base md:flex-row md:justify-around lg:text-2xl font-medium text-blue-300">
      <a href="./index.php" title="Accueil">Accueil</a>
      <a href="./index.php" title="Accueil">Connexion</a>
      <a href="./index.php" title="Accueil">Inscription</a>
      <a href="./index.php" title="Accueil">Recherche</a>
    </div>
  </footer>

  <!-- ADD SCRIPT -->
  <script src="./script.js"></script>
</body>

</html>