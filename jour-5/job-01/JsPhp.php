<?php
isSessionUsers(); // START SESSION
header('Content-Type: application/json; charset=utf-8'); // HEADER JSON

/*************************************** FONCTION PHP ***************************************/
// Fonction qui gére les actions de SESSION
function isSessionUsers(string $action = null, array $params = [])
{
  if (session_status() === PHP_SESSION_NONE) {
    session_start(); // START SESSION
  }

  switch ($action) {
    case 'GET_PARAMS':
      $responseParams = [];

      foreach ($params as $key => $val) :

        if (isset($_SESSION[$val])) :
          $responseParams[$val] = $_SESSION[$val];
        endif;

      endforeach;

      return $responseParams;
      break;

    case 'SET_PARAMS':
      foreach ($params as $key => $val) :
        $_SESSION[$key] = $val;
      endforeach;
      break;

    case 'UPDATE_PARAMS':
      foreach ($params as $key => $val) :
        if (isset($_SESSION[$key])) :
          $_SESSION[$key] = $val;
        endif;
      endforeach;
      break;

    case 'DELETE_PARAMS':
      foreach ($params as $key => $val) :
        if (isset($_SESSION[$val])) :
          unset($_SESSION[$val]);
        endif;
      endforeach;
      break;
  }
}

// Fonction de Connection PDO
function connectPdo()
{
  //Connexion PDO BDD
  $userBdd = 'root';
  try {
    $dbConnect = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8', $userBdd); // Connection PDO

    return $dbConnect; // RETURN CONNECTION PDO
  } catch (Exception $error) {
    // Si SQLSTATE[HY000] [1049] est levé alors la BDD n'existe pas on va pouvoir gérer cette erreur
    if (str_starts_with($error->getMessage(), "SQLSTATE[HY000] [1049]")) :

      echo json_encode("error no bdd"); // RESPONSE JSON VERS JS
      exit(); // EXIT Arrête le script pour éviter les erreur lié au résultat JSON

    else : // Dans tout les autres cas on retourne l'erreur en JSON
      // Il faudrait gérer ici les autres types erreurs possible, mais ce n'est pas le but de l'exercise.

      echo json_encode('Erreur : ' . $error->getMessage()); // RESPONSE JSON CATCH ERREUR
      exit();                                               // EXIT
    endif;
  }
}

// Fonction de securiter Cryptage de password avec SODIUM
function hashPassword(string $password)
{

  return sodium_crypto_pwhash_str(
    $password,
    SODIUM_CRYPTO_PWHASH_OPSLIMIT_INTERACTIVE,
    SODIUM_CRYPTO_PWHASH_MEMLIMIT_INTERACTIVE
  );
}

// Fonction de securiter Verification de Hash de password avec SODIUM
function verifyPasswordHash(string $hash, string $password): bool
{
  if ('' === $password || strlen($password) < 6) :
    return false; // FALSE
  endif;

  if (sodium_crypto_pwhash_str_verify($hash,  $password)) :
    return true; // PASSWORD HASH OK
  endif;

  return false; // RETURN FALSE DEFAULT
}

// Fonction pour ajouter un utilisateur en BDD
function addUser(array $paramsSqlUser)
{
  $dbConnect = connectPdo(); // Connection PDO

  $sqlInsert = "INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (:nom, :prenom, :email, :password)"; // STRING SQL INSERT

  // Si sqlInsert
  if ($sqlInsert) {
    try {
      $req = $dbConnect->prepare($sqlInsert);               // Prepare
      $req->execute($paramsSqlUser);                        // Execute la requête
    } catch (Exception $error) {
      echo json_encode('Erreur : ' . $error->getMessage()); // RESPONSE JSON DU CATCH MESSAGE D'ERREUR
      exit();                                               // EXITE
    }
  }
}
function regExMatch(string $keyInput, string $valuesInput)
{

  $valuesInput = htmlspecialchars(trim($valuesInput));

  switch ($keyInput):
    case 'nom':

      if (preg_match('/^(\w{3,25})$/', $valuesInput)) : // test regex sur les caratère \w min 3 et max 25

        return true; // Si le masque est bon true

      endif;

      return "Votre nom n'est pas conforme"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case  'prenom':

      if (preg_match('/^(\w{3,25})$/', $valuesInput)) :  // test regex sur les caratère \w min 3 et max 25

        return true; // Si le masque est bon true

      endif;

      return "Votre prénom n'est pas conforme"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'email':

      if (filter_var($valuesInput, FILTER_VALIDATE_EMAIL)) : // filter_var FILTER_VALIDATE_EMAIL verifie la conformité d'une email celon RFC 822 voir les execption : https://www.php.net/manual/en/filter.filters.validate.php

        return true; // Si le masque est bon true

      endif;

      return "Votre adresse email n'as pas un format valid."; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'password':

      if (preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) : // test regex une majuscule minimum, un caratère numeric minimum, un caratère spécial minimum % $ , ; ! _ - sont accépté, 6 caratère min et 25 max.

        return true; // Si le masque est bon true

      endif;

      return "Votre dois être conforme au modèle exemple : A12xHs5a!25"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    case 'passwordCompare':

      if (isset($_POST['password']) && $_POST['password'] === $valuesInput && preg_match('/^(?(?=.*[A-Z])(?=.*[0-9])(?=.*[\%\$\,\;\!\-_])[a-zA-Z0-9\%\$\,\;\!\-_]{6,25})$/', $valuesInput)) :  // test si les 2 mots de pass sont identique et que test regex une majuscule minimum, un caratère numeric minimum, un caratère spécial minimum % $ , ; ! _ - sont accépté, 6 caratère min et 25 max.

        return true; // Si le masque est bon true

      endif;

      return "Les deux mots de passe ne sont pas identique"; // si la condition n'as pas était remplit alors on retourne un message d'érreur

    default:

      return false; // Si aucune clé input n'as était trouvé.

  endswitch;
}
/*************************************** CONDITION PHP ***************************************/

if (isset($_POST['action']) && $_POST['action'] === 'initProject') : // Si on est sur la page acceuil

  $connectPDO = connectPdo();  // CONNECT PDO
  $getUsers = isSessionUsers('GET_PARAMS', [
    'nom',
    'prenom',
    'email',
  ]);
  echo json_encode($getUsers); // RESPONSE JSON
  exit();                      // EXIT

elseif (isset($_POST['action']) && $_POST['action'] === 'connectUser') : // Si on connect un utilisateur

  $paramsSqlConnect = [
    'email'    => $_POST['email']    ?? "",
    'password' => $_POST['password'] ?? "",
  ]; // Paramétres $_POST à récupérer

  // Controlle des regExs
  $controlArrayParams = array_map('regExMatch', array_keys($paramsSqlConnect), array_values($paramsSqlConnect));

  if (!in_array(true, $controlArrayParams)) : // Si une erreur survient dans la validations des inputs

    echo json_encode($controlArrayParams);    // RESPONSE JSON
    exit();                                   // EXIT

  else : // Sinon tout c'est bien passée on traite la connection utilisateur

    try {
      $passwordBuffer = $paramsSqlConnect['password'];
      unset($paramsSqlConnect['password']);
      $connectPDO = connectPdo();                // CONNECT PDO
      $sqlConnect = "SELECT * FROM 
                    utilisateurs 
                    WHERE email = :email";       // SQL STRING

      $req = $connectPDO->prepare($sqlConnect);  // PREPARE PDO
      $req->execute($paramsSqlConnect);          // EXECUTE PDO
      $result = $req->fetch(PDO::FETCH_ASSOC);   // FETCH

      // Si on à un résultat et que le hash du password correspond  
      if (
        $result
        && verifyPasswordHash($result['password'], $passwordBuffer)
      ) :
        unset($result['password']);

        isSessionUsers('SET_PARAMS', [
          'nom'    => $result['nom'],
          'prenom' => $result['prenom'],
          'email'  => $result['email'],
        ]);

        echo json_encode(true);               // RESPONSE JSON
        exit();                                  // EXIT

      // Sinon Le mots de pass ne correspond pas
      else :

        echo json_encode(false);                 // RESPONSE JSON
        exit();                                  // EXIT

      endif;
    } catch (Exception $error) {
      echo json_encode($error->getMessage());    // RESPONSE CACTH ERREUR
      exit();                                    // EXIT
    }
  endif;

elseif (isset($_POST['action']) && $_POST['action'] === 'disconnectUser') : // Si l'utilisateur se déconnect

  isSessionUsers('DELETE_PARAMS', [
    'nom',
    'prenom',
    'email',
  ]);

  echo json_encode(true);       // RESPONSE CACTH ERREUR
  exit();                       // EXIT

elseif (isset($_POST['action']) && $_POST['action'] === 'addUser') : // SI on ajoute un utilisateur

  $arrayPostParams = [
    'nom'             => $_POST['nom']             ?? "",
    'prenom'          => $_POST['prenom']          ?? "",
    'email'           => $_POST['email']           ?? "",
    'password'        => $_POST['password']        ?? "",
    'passwordCompare' => $_POST['passwordCompare'] ?? "",
  ]; // Paramétres $_POST à récupérer

  // Controlle des regExs
  $controlArrayParams = array_map('regExMatch', array_keys($arrayPostParams), array_values($arrayPostParams));

  if (!in_array(true, $controlArrayParams)) : // Si une erreur survient dans la validations des inputs

    echo json_encode($controlArrayParams);    // RESPONSE JSON
    exit();                                   // EXIT

  else : // Sinon tout c'est bien passé 

    unset($arrayPostParams['passwordCompare']);                                // Retire le passwordCompare tu tableau de paramètres
    $arrayPostParams['password'] = hashPassword($arrayPostParams['password']); // Hashage du mot de pass SODIUM
    addUser($arrayPostParams);                                                 // Function addUser
    echo json_encode(true);                                                    // RESPONSE JSON
    exit();                                                                    // EXIT
  endif;

// Vérification des inputs
// nom doit contenir minimum 3 caracthère et 25 au maximum
// prénom doit contenir minimum 3 caracthère et 25 au maximum
// email est tester avec filter_var FILTER_VALIDATE_EMAIL
// password doit contenir une minuscule et une majuscule minimum,un chiffre minimum, un caracthère spécial minimum de type % $ ; ! - _ , et il devras faire entre 6 et 25 carathères.
// passwordCompare sera identique au précedent. 
elseif (isset($_POST['action']) && $_POST['action'] === 'regEx') :

  if (isset($_POST['nameInput']) && isset($_POST['valInput'])) :     // Si nameInput && valInput sont bien présent dans la POST variable global

    $valuesInput = htmlspecialchars(trim($_POST['valInput']));       // Converti les caratère spéciaux et retire les espaces blanc en début et fin de chaine.
    $response = regExMatch($_POST['nameInput'], $_POST['valInput']); // Vérifie la regEx
    echo json_encode($response);                                     // RESPONSE JSON à javascript
    exit();                                                          // EXIT
  endif;

  echo json_encode($_POST);                                          // RESPONSE JSON Si nameInput && valInput n'éxiste pas dans la POST variable global
  exit();                                                            // EXIT
else :
  echo json_encode('Ooops une erreur viens de ce produire');         // RESPONSE JSON Si Aucune condition n'est remplit
  exit();                                                            // EXIT
endif;
