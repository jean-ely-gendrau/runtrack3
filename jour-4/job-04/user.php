<?php
header('Content-Type: application/json; charset=utf-8');
// file_get_contents("php://input") est un flux en lecture seule qui permet de lire les données brut du corp de la requête
$content = trim(file_get_contents("php://input"));

$data = json_decode($content, true); // transmorfe les données json en tableau associatif des données transmise par FETCH JS

function connectPdo()
{
  //Connexion PDO BDD
  $userBdd = 'root';
  try {
    $dbConnect = new PDO('mysql:host=localhost;dbname=jour-4-job-04;charset=utf8', $userBdd);
    return $dbConnect;
  } catch (Exception $error) {
    if (str_starts_with($error->getMessage(), "SQLSTATE[HY000] [1049]")) :
      echo json_encode("error no bdd");
      exit();
    else :
      die('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
    endif;
  }
}

function createTable()
{
  try {
    $dbConnect = connectPdo();

    $sqlCreateUsers = "CREATE TABLE utilisateurs (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nom varchar(255) NOT NULL,
  prenom varchar(255) NOT NULL,
  email varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;";

    $req = $dbConnect->prepare($sqlCreateUsers);
    $req->execute(); // Execute la requête
  } catch (Exception $error) {
    die('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
  }
}

if (isset($data['action']) && $data['action'] === 'install_step2') :
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
  $dbConnect = connectPdo();

  $sqlCreateUsers = "CREATE TABLE utilisateurs (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nom varchar(255) NOT NULL,
  prenom varchar(255) NOT NULL,
  email varchar(255) NOT NULL
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;";

  $usersCreate =  function ($number = 10) {
    global $prenoms;

    $sqlInsert = "INSERT INTO utilisateurs ( nom, prenom, email) VALUES ";
    $numberRandom = array_rand($prenoms, $number);
    for ($i = 0; $i < $number; $i++) :
      $numberPad = str_pad($number, 3, "", STR_PAD_LEFT);
      $sqlInsert .= "('{$numberRandom[$i]}-{$numberPad}', '{$numberRandom[$i]}-{$numberPad}', '{$numberRandom[$i]}-{$numberPad}@gmail.com'),";
    endfor;

    return $sqlInsert;
  };

  $selectUsers = $dbConnect->prepare('SELECT * FROM utilisateur');
  $selectUsers->execute(); // Execute la requête

  $Users = $selectUsers->fetchAll(PDO::FETCH_ASSOC);

  echo json_encode($Users);


elseif (isset($data['action']) && $data['action'] === 'updateResult') :


elseif (isset($data['action']) && $data['action'] === 'initProject') :
  $req = "";
  try {
    $dbConnect = connectPdo();
    $sql = $dbConnect->prepare("SELECT * FROM utilisateurs");
    $req = $sql->fetchAll(PDO::FETCH_ASSOC);
  } catch (Exception $e) {
    // We got an exception (table not found)
    createTable();
  }

  echo json_encode($req);
  exit();
endif;
