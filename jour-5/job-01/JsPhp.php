<?php
header('Content-Type: application/json; charset=utf-8'); // HEADER JSON

/*************************************** FONCTION PHP ***************************************/
// Connection PDO
function connectPdo()
{
  //Connexion PDO BDD
  $userBdd = 'root';
  try {
    $dbConnect = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', $userBdd); // Connection PDO

    return $dbConnect;
  } catch (Exception $error) {
    // Si SQLSTATE[HY000] [1049] est levé alors la BDD n'existe pas on va pouvoir gérer cette erreur
    if (str_starts_with($error->getMessage(), "SQLSTATE[HY000] [1049]")) :
      echo json_encode("error no bdd"); // On retourne l'erreur en JSOn pour traitement par JS
      exit(); // Arrête le script pour éviter les erreur lié au résultat JSON

    // Dans tout les autres cas on retourne l'erreur en JSON
    // Il faudrait gérer ici les autres types erreurs possible, mais ce n'est pas le but de l'exercise.
    else :
      echo json_encode('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
      exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
    endif;
  }
}

/*************************************** CONDITION PHP ***************************************/

if (isset($_POST['action']) && $_POST['action'] === 'initProject') :
  $connectPDO = connectPdo();
elseif (isset($_POST['action']) && $_POST['action'] === 'userConnect') :

elseif (isset($_POST['action']) && $_POST['action'] === 'addUser') :

else :
  echo json_encode('Ooops une erreur viens de ce produire'); // Si une erreur est relevé
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
endif;
