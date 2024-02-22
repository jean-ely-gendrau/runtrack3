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
  echo json_encode(''); // Si une erreur est relevé
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
elseif (isset($_POST['action']) && $_POST['action'] === 'userConnect') :

elseif (isset($_POST['action']) && $_POST['action'] === 'addUser') :

// Vérification des inputs
// nom doit contenir minimum 3 caracthère et 25 au maximum
// prénom doit contenir minimum 3 caracthère et 25 au maximum
// email est tester avec filter_var FILTER_VALIDATE_EMAIL
// password doit contenir une minuscule et une majuscule minimum,un chiffre minimum, un caracthère spécial minimum de type % $ ; ! - _ , et il devras faire entre 6 et 25 carathères.
// passwordCompare sera identique au précedent. 
elseif (isset($_POST['action']) && $_POST['action'] === 'regEx') :
  if (isset($_POST['nameInput']) && isset($_POST['valInput'])) :
    $valuesInput = htmlspecialchars(trim($_POST['valInput']));
    switch ($_POST['nameInput']):
      case 'nom':
        if (preg_match('/^(\w{3,25})$/', $valuesInput)) :
          echo json_encode(true); // Si le masque est bon true
          exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        endif;

        echo json_encode("Votre nom n'est pas conforme"); // si la condition n'as pas était remplit alors on retourne un message d'érreur
        exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        break;

      case  'prenom':
        if (preg_match('/^(\w{3,25})$/', $valuesInput)) :
          echo json_encode(true); // Si le masque est bon true
          exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        endif;

        echo json_encode("Votre prénom n'est pas conforme"); // si la condition n'as pas était remplit alors on retourne un message d'érreur
        exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        break;
      case 'email':

        if (filter_var($valuesInput, FILTER_VALIDATE_EMAIL)) :
          echo json_encode(true); // Si le masque est bon true
          exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        endif;

        echo json_encode("Votre adresse email n'as pas un format valid."); // si la condition n'as pas était remplit alors on retourne un message d'érreur
        exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        break;
      case 'password':

        if (preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) :
          echo json_encode(true); // Si le masque est bon true
          exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        endif;

        echo json_encode("Votre dois être conforme au modèle exemple : A12xHs5a!25"); // si la condition n'as pas était remplit alors on retourne un message d'érreur
        exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        break;
      case 'passwordCompare':

        if (isset($_POST['keyInputPwd']) && isset($_POST['valInputPwd']) && $_POST['valInputPwd'] === $valuesInput && preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) :
          echo json_encode(true); // Si le masque est bon true
          exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        endif;

        echo json_encode("Les deux mots de passe ne sont pas identique"); // si la condition n'as pas était remplit alors on retourne un message d'érreur
        exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
        break;
    endswitch;
  endif;

  echo json_encode($_POST); // Si une erreur est relevé
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
else :
  echo json_encode('Ooops une erreur viens de ce produire'); // Si une erreur est relevé
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
endif;
