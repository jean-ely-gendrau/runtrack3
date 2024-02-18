<?php
$userBdd = 'root';
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
  for ($i = 0; $i < $number; $i++) {
    $numberPad = str_pad($number, 3, "", STR_PAD_LEFT);
    $sqlInsert .= "('{$numberRandom[$i]}-{$numberPad}', '{$numberRandom[$i]}-{$numberPad}', '{$numberRandom[$i]}-{$numberPad}@gmail.com'),";
  }

  return $sqlInsert;
};

//Connexion PDO BDD
try {
  $dbConnect = new PDO('mysql:host=localhost;dbname=jour-4-job-04;charset=utf8', $userBdd);
} catch (Exception $error) {
  die('Erreur : ' . $error->getMessage()); // Si une erreur est relevé
}

$selectUsers = $dbConnect->prepare('SELECT * FROM utilisateur');
$selectUsers->execute(); // Execute la requête

$Users = $selectUsers->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json; charset=utf-8');
echo json_encode($Users);
