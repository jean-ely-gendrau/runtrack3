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
      exit(); // EXIT
    endif;
  }
}

function hashPassword(string $password)
{

  return sodium_crypto_pwhash_str(
    $password,
    SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,
    SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE
  );
}

function verifyPasswordHash(string $hash, string $password): bool
{
  if ('' === $password || \strlen($password) < 10) :
    return false;
  endif;

  if (sodium_crypto_pwhash_str_verify($hash,  $password)) :
    return true;
  endif;
}

function addUser(array $paramsSqlUser)
{
  $dbConnect = connectPdo(); // Connection PDO

  $sqlInsert = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)"; // SQL INSERT

  // Si sqlInsert
  if ($sqlInsert) {
    try {
      $req = $dbConnect->prepare($sqlInsert); // Prepare
      $req->execute($paramsSqlUser); // Execute la requête
    } catch (Exception $error) {
      echo json_encode('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
      exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
    }
  }
}
function regExMatch(string $keyInput, string $valuesInput)
{

  $valuesInput = htmlspecialchars(trim($valuesInput));

  switch ($keyInput):
    case 'nom':

      if (preg_match('/^(\w{3,25})$/', $valuesInput)) :

        return true; // Si le masque est bon true

      endif;

      return "Votre nom n'est pas conforme"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case  'prenom':

      if (preg_match('/^(\w{3,25})$/', $valuesInput)) :

        return true; // Si le masque est bon true

      endif;

      return "Votre prénom n'est pas conforme"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'email':

      if (filter_var($valuesInput, FILTER_VALIDATE_EMAIL)) :

        return true; // Si le masque est bon true

      endif;

      return "Votre adresse email n'as pas un format valid."; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'password':

      if (preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) :

        return true; // Si le masque est bon true

      endif;

      return "Votre dois être conforme au modèle exemple : A12xHs5a!25"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'passwordCompare':

      if (isset($_POST['password']) && $_POST['password'] === $valuesInput && preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) :

        return true; // Si le masque est bon true

      endif;

      return "Les deux mots de passe ne sont pas identique"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    default:

      return false; // Si aucune clé input n'as était trouvé.

  endswitch;
}
/*************************************** CONDITION PHP ***************************************/

if (isset($_POST['action']) && $_POST['action'] === 'initProject') :
  $connectPDO = connectPdo();
  echo json_encode(''); // Si une erreur est relevé
  exit(); // EXIT
elseif (isset($_POST['action']) && $_POST['action'] === 'userConnect') :

elseif (isset($_POST['action']) && $_POST['action'] === 'addUser') :
  $arrayPostParams = [
    'nom'             => $_POST['nom']             ?? "",
    'prenom'          => $_POST['prenom']          ?? "",
    'email'           => $_POST['email']           ?? "",
    'password'        => $_POST['password']        ?? "",
    'passwordCompare' => $_POST['passwordCompare'] ?? "",
  ];

  $controlArrayParams = array_map('regExMatch', array_keys($arrayPostParams), array_values($arrayPostParams));
  if (!in_array(true, $controlArrayParams)) :
    // Si une erreur survient dans la validations des inputs
    echo json_encode($controlArrayParams);
    exit();
  else :
    unset($arrayPostParams['passwordCompare']);
    $arrayPostParams['password'] = hashPassword($arrayPostParams['password']);
    addUser($arrayPostParams);
    echo json_encode(true); // Si tout c'est bien passé
    exit(); // EXIT
  endif;
// Vérification des inputs
// nom doit contenir minimum 3 caracthère et 25 au maximum
// prénom doit contenir minimum 3 caracthère et 25 au maximum
// email est tester avec filter_var FILTER_VALIDATE_EMAIL
// password doit contenir une minuscule et une majuscule minimum,un chiffre minimum, un caracthère spécial minimum de type % $ ; ! - _ , et il devras faire entre 6 et 25 carathères.
// passwordCompare sera identique au précedent. 
elseif (isset($_POST['action']) && $_POST['action'] === 'regEx') :
  if (isset($_POST['nameInput']) && isset($_POST['valInput'])) :
    $valuesInput = htmlspecialchars(trim($_POST['valInput']));

    $response = regExMatch($_POST['nameInput'], $_POST['valInput']);
    echo json_encode($response); // la reponse à javascript
    exit(); // EXIT
  endif;

  echo json_encode($_POST); // Si une erreur est relevé
  exit(); // EXIT
else :
  echo json_encode('Ooops une erreur viens de ce produire'); // Si une erreur est relevé
  exit(); // EXIT
endif;
