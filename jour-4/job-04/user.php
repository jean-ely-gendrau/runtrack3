<?php
header('Content-Type: application/json; charset=utf-8'); // HEADER JSON
// file_get_contents("php://input") est un flux en lecture seule qui permet de lire les données brut du corp de la requête
$content = trim(file_get_contents("php://input"));

$data = json_decode($content, true); // transmorfe les données json en tableau associatif des données transmise par FETCH JS

/*************************************** FONCTION PHP ***************************************/
// Connection PDO
function connectPdo()
{
  //Connexion PDO BDD
  $userBdd = 'root';
  try {
    $dbConnect = new PDO('mysql:host=localhost;dbname=jour-4-job-04;charset=utf8', $userBdd); // Connection PDO
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

// Création de la table utilisateurs
function createTable()
{
  try {
    $dbConnect = connectPdo(); // Connection PDO

    $sqlCreateUsers = "CREATE TABLE utilisateurs (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nom varchar(255) NOT NULL,
  prenom varchar(255) NOT NULL,
  email varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;"; // SQL CREATE TABLE utilisateurs

    $req = $dbConnect->prepare($sqlCreateUsers);
    $req->execute(); // Execute la requête
  } catch (Exception $error) {
    echo json_encode('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
    exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
  }
}

// Crétion d'utilisateur Aléatoir en base de données
function createUser($number = 10)
{
  // Prénom aléatoir pour l'exercise par ChatGPT
  $prenoms = [
    "Alice",
    "Bob",
    "Claire",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Hector",
    "Isabel",
    "Jack",
    "Kate",
    "Liam",
    "Mia",
    "Nathan",
    "Olivia",
    "Peter",
    "Quinn",
    "Rachel",
    "Samuel",
    "Taylor",
    "Ursula",
    "Vincent",
    "Wendy",
    "Xavier",
    "Yvonne",
    "Zachary",
    "Abigail",
    "Benjamin",
    "Chloe",
    "Daniel",
    "Emily",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Jessica",
    "Kevin",
    "Lily",
    "Michael",
    "Natalie",
    "Oscar",
    "Paige",
    "Quentin",
    "Rebecca",
    "Sarah",
    "Thomas",
    "Uma",
    "Victor",
    "Walter",
    "Xena",
  ];
  $dbConnect = connectPdo(); // Connection PDO

  $sqlInsert = "INSERT INTO utilisateurs (nom, prenom, email) VALUES "; // SQL INSERT
  $numberRandom = array_rand($prenoms, $number); // RAND NUMBERS

  // Tant que on à pas attein le nombre d'utilisateur à créer
  for ($i = 0; $i < $number; $i++) :
    // numberRandom is_array : Vérifie que c'est bien un array , car pour un élément array_rand ne retourne pas un tableau mais interger du nombre aléatoire.
    $numberRandom = is_array($numberRandom) ? $numberRandom[$i] : $numberRandom;
    $numberPad = str_pad("{$number}{$i}", 3, 0, STR_PAD_LEFT); // Formatage du nombre exemple 1 -> 001
    // SQL INSERT SUITE
    $sqlInsert .= "('{$prenoms[$numberRandom]}-{$numberPad}', '{$prenoms[$numberRandom]}-{$numberPad}', '{$prenoms[$numberRandom]}-{$numberPad}@gmail.com')";
    // Si c'est la fin on insére ; dans la chaîne pour terminer la requête sinon on met la , pour continué la requête.
    $sqlInsert .= $number - 1 === $i ? ";" : ",";
  endfor;


  // Si sqlInsert
  if ($sqlInsert) {
    try {
      $req = $dbConnect->prepare($sqlInsert); // Prepare
      $req->execute(); // Execute la requête
    } catch (Exception $error) {
      echo json_encode('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
      exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
    }
  }
}

/*************************************** CONDITION PHP ***************************************/

// Si l'action de la requête JS est updateResult
if (isset($data['action']) && $data['action'] === 'updateResult') :
  try {
    $dbConnect = connectPdo(); // Connection PDO
    // Sélection de tout les utilisateurs en BDD
    $selectUsers = $dbConnect->prepare('SELECT * FROM utilisateur');
    $selectUsers->execute(); // Execute la requête

    $users = $selectUsers->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users); // Retourne les résultats JSON à JS
    exit(); // Arrête le script pour éviter les erreur lié au résultat JSON

  } catch (Exception $error) {

    echo json_encode('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
    exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
  }

// Si l'action de la requête JS est addUsers
elseif (isset($data['action']) && $data['action'] === 'addUsers') :

  $number = isset($data['numbers']) ? $data['number'] : 1;
  createUser(intval($number));

  echo json_encode("Action réalisée avec succée"); // Retourne les résultats JSON à JS
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON

// Si l'action de la requête JS est initProject
elseif (isset($data['action']) && $data['action'] === 'initProject') :

  try {

    $dbConnect = connectPdo(); // Connection PDO
    $sql = $dbConnect->prepare("SELECT * FROM utilisateurs"); // Sélections des utilisateurs en BDD
    $sql->execute(); // Execute
    $req =  $sql->fetchAll(PDO::FETCH_ASSOC); // fetch all resultats en tableau  associatif.
  } catch (Exception $e) {
    // Si il y à une erreur on converti en json l'erreur et on l'enregistre dans la variable
    // $req = json_encode($e->getMessage()); On pourrais retourner l'erreur. Mais ici nous allons plutôt traîter l'erreur et afficher les résultats correct.

    createTable(); // Création de la table utilisateur
    createUser(); // Création d'utilisateurs aléatoir

    // Sélection des utilisateurs
    $sql = $dbConnect->prepare("SELECT * FROM utilisateurs");
    $sql->execute();
    $req =  $sql->fetchAll(PDO::FETCH_ASSOC);
  }

  echo json_encode($req); // Retourne les résultats JSON à JS
  exit(); // Arrête le script pour éviter les erreur lié au résultat JSON
endif;
