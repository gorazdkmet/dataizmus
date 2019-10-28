<!DOCTYPE html>
<html lang="sk">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- force IE newest engine -->
    <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- device width is same as viewport -->
    <meta name="author" content="Gorazd Kmeť">
    <meta name="description" content="Informácie o stránke">
    <meta name="keywords" content="open data, analysis, synthesis, insights, data visualization, dataizm, Slovakia">
    <title>Dataizmus</title>
    <link rel="stylesheet" href="css/fontello.css"> <!-- Fontello -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="icon" href="favicon.ico" type="image/png">
    <!--[if lt IE 9]>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="http://cdnjs.cloudflare.com/ajax/libs/selectivizr/1.0.2/selectivizr-min.js"></script>
    <![endif]-->
</head>
<body>

   <div class="reportgrid">

    <?php include_once 'parts/header.php' ?>

    <div class="mainbar wh100per relative">

        <?php include_once 'parts/searchbar.php' ?>

        <nav id="mainbar__navbar" class="mainbar__navbar overflow">
            <ul class="navbar__list slide-down">
                <li class="navbar__item"><a class="navbar__link active" href="index.php"><h3>Analýzy</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="themes.php"><h3>Oblasti</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="method.php"><h3>Metodika</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="we.php"><h3>O nás</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="contact.php"><h3>Kontakt</h3></a></li>
            </ul>
        </nav>

      </div>
      <div class="gradientbar"></div>
      <main class="report">
        <article class="report__content">
            <header class="report__header">
               <hgroup class="report__titles">
                    <h1 class="report__headline">A Brief Hireport of the Past 100 Years</h1>
                    <h3 class="report__tagline">An analysis of 12 decades of New York Times headlines</h3>
                </hgroup>
                <div class="report__info">
                    <a class="report__author" rel="author" href="we.php">Gorazd Kmeť</a>
                    <time class="report__date"itemprop="published" datetime="2019-08-28" title="August 28th, 2019">28. Augusta 2019</time>
                </div>
            </header>
            <div class="report__text">
                <h5>Väčší podnadpis</h5>
                <h6>Podnadpis</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Pri štýlovaní textu budem využívať všetky dostupné html elementy, ako napríklad em, cite, pre, i, b, section a podobne. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class="report__vis">
                <svg>
                </svg>
            </div>
       </article>
     </main>

    <?php
    include_once 'parts/footer.php';
    include_once 'parts/scripts.php'
    ?>
  </div>

</body>

</html>
