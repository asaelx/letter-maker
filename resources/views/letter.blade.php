<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>Christmas Letter</title>
  <link rel="stylesheet" href="/css/master.css">
</head>
<body>
  <div class="page xmas">
    <div class="letterhead"><img src="img/header.svg" alt="header" class="img"></div>
    <div class="title"><img src="img/top.svg" alt="" class="img top"><img src="img/left.svg" alt="" class="img left"><img src="img/right.svg" alt="" class="img right"><img src="img/bottom.svg" alt="" class="img bottom">
      <h1>Feliz Navidad</h1>
    </div>
    <div class="wrapper">
      <div class="date editable">San Francisco de Campeche, Camp., {{ date('d') . ' de ' . $months[date('n') - 1] . ' del ' . date('Y') }}.</div>
      <div class="content editable">
        <p> <b>A quién corresponda</b></p>
        <p>P r e s e n t e</p><br>
        <p>Diciembre, un mes que nos trae la brisa de la serenidad, de la paz, de soñar con lo imposible y creer que los milagros se producen.</p>
        <p>No olvidemos que los regalos y la cena de navidad pueden quedar en un segundo plano porque lo más importante es compartir lo mejor que tenemos en nuestro corazón con las personas que queremos.</p>
        <p>Amar, perdonar, disfrutar, salud y prosperidad, todo lo que nos trae este mes lo tienes en tus manos, sólo debes creer y saber que ese milagro que esperas, se cumplirá.</p>
        <p>La más hermosa celebración de todo el año es la navidad porque reúne a las familias para compartir los mejores sentimientos. Dejemos que el espíritu de esta festividad se quede en nuestros corazones. ¡Felices fiestas!</p><br><br>
        <p>Atentamente,</p><br><br><br><br>
        <p>Ing. Asael Octavio Chávez Jaimes</p>
      </div>
    </div>
    <div class="nativity"><img src="img/nativity.svg" alt="nativity" class="img"></div>
  </div>
  <script type="text/javascript" src="/js/all.js"></script>
</body>