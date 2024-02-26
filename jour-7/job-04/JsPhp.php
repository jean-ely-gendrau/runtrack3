<?php

header("Content-Type: text/plain; charset=utf-8;");

if (isset($_POST['action']) && $_POST['action'] === 'selectForm') :

  $directory = __DIR__ . DIRECTORY_SEPARATOR . "formTailwind/";
  $formHtml = false;

  if (!empty($_POST['filename']) && file_exists($directory . htmlspecialchars(trim($_POST['filename'])) . ".php")) :
    $formHtml = file_get_contents($directory . $_POST['filename'] . ".php");
  endif;

  echo $formHtml ? $formHtml : false;
  exit();

else :

  echo false;
  exit();
endif;
