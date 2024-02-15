<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./styles.css">
  <title>Jour 3 - Jquery</title>
</head>

<body>
  <section>
    <h1>Jour 3 Jquery - Job-02</h1>
    <article>
      <button id="addButton" class="button-start">Démarrer la partie</button>

      <p>Puzzle Arc en Ciel, regardez bien l'image, un fois que vous démarre la partie les pièces seront mélanger et vous devrai la reproduire à l'identique dans la fenêtre.</p>
      <div class="content">
        <div class="draggable-box ui-widget-content">
          <img id="draggable-1" src="./images/arc1.png">
          <img id="draggable-2" src="./images/arc2.png">
          <img id="draggable-3" src="./images/arc3.png">
          <img id="draggable-4" src="./images/arc4.png">
          <img id="draggable-5" src="./images/arc5.png">
          <img id="draggable-6" src="./images/arc6.png">
        </div>

        <div class="wrap">
          <div class="content-drop wrapper">
            <div id="drop-one" class="drop one ui-widget-content"></div>
            <div id="drop-two" class="drop two ui-widget-content"></div>
            <div id="drop-three" class="drop three ui-widget-content"></div>
            <div id="drop-four" class="drop four ui-widget-content"></div>
            <div id="drop-five" class="drop five ui-widget-content"></div>
            <div id="drop-six" class="drop six ui-widget-content"></div>
          </div>
        </div>
      </div>
    </article>
  </section>
  <!-- ADD SCRIPT -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
  <script src="./script.js"></script>
</body>

</html>