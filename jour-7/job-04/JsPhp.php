<?php

header("Content-Type: text/plain; charset=utf-8;");

function bufferForm($formHtml)
{
  ob_start();
  include_once(__DIR__ . DIRECTORY_SEPARATOR . "formTailwind/list-voie.php");
  $listVoie = join('', LIST_VOIE);
  eval(" ?>" . $formHtml);
  return ob_get_clean();
}

if (isset($_POST['action']) && $_POST['action'] === 'selectForm') :

  $directory = __DIR__ . DIRECTORY_SEPARATOR . "formTailwind/";
  $formHtml = false;

  if (!empty($_POST['filename']) && file_exists($directory . htmlspecialchars(trim($_POST['filename'])) . ".php")) :

    $formHtml = file_get_contents($directory . $_POST['filename'] . ".php");

    if ($_POST['filename'] === 'inscription-model-c') :
      echo bufferForm($formHtml);
      exit();
    endif;
  endif;



  echo $formHtml ? $formHtml : false;
  exit();

else :

  echo false;
  exit();
endif;
