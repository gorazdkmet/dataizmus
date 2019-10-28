<!DOCTYPE html>
<html lang="sk">

<?php include_once 'parts/head.php' ?>

<body>

  <div class="maingrid">

    <?php include_once 'parts/header.php' ?>

    <div class="mainbar wh100per relative">

        <?php include_once 'parts/searchbar.php' ?>

        <nav id="mainbar__navbar" class="mainbar__navbar overflow">
            <ul class="navbar__list slide-down">
                <li class="navbar__item"><a class="navbar__link active" href="index.php"><h3>Analýzy</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="themes.php"><h3>Oblasti</h3></a></li>
                <li class="navbar__item"><a class="navbar__link navbar__link--selected active" href="method.php"><h3>Metodika</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="we.php"><h3>O nás</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="contact.php"><h3>Kontakt</h3></a></li>
            </ul>
        </nav>
      </div>
      <div class="gradientbar"></div>

      <?php include_once 'parts/webtitles.php' ?>

    <main class="main">
        <div class="main__content" id="method">
            <aside>
              <div class="content__intro clearfix">
                    <p class="intro__text" >Metódy práce</p>
                    <p class="arrow active" ><a href="#footer"><em class="icon-down-open-1"></em></a></p>
                </div>
            </aside>
            <article class="content__article">

                <p>Naše metódy a zdroje</p>

            </article>
            <aside>
              <div class="content__outro clearfix">
                <p class="arrow active" ><a ref="#header"><em class="icon-up-open-1"></em></a></p>
              </div>
            </aside>
        </div>
    </main>

    <?php
    include_once 'parts/footer.php';
    include_once 'parts/scripts.php'
    ?>
  </div>

</body>
</html>
