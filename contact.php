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
                <li class="navbar__item"><a class="navbar__link active" href="method.php"><h3>Metodika</h3></a></li>
                <li class="navbar__item"><a class="navbar__link active" href="we.php"><h3>O nás</h3></a></li>
                <li class="navbar__item"><a class="navbar__link navbar__link--selected active" href="contact.php"><h3>Kontakt</h3></a></li>
            </ul>
        </nav>
      </div>
      <div class="gradientbar"></div>

<?php include_once 'parts/webtitles.php' ?>

  <main class="main">
    <div class="main__content" id="contact">
            <aside>
              <div class="content__intro clearfix">
                    <p class="intro__text">Napíšte nám</p>
                    <p class="arrow active" ><a href="#footer"><em class="icon-down-open-1"></em></a></p>
                </div>
            </aside>
            <article>
                <h6>Dobrý deň,</h6>
                <p>ak máte pripomienku / otázku / návrh alebo by ste sa chceli akokoľvek inak vyjadriť k našej práci, budeme radi ak si nájdete čas napísať nám:</p>
                <form action="php/mail.php" method="POST">
                    <div>
                        <textarea type="textarea" name="message" placeholder="Vaša správa" required></textarea>
                    </div>
                    <div class="name-email-form">
                        <div class="name-form">
                            <label>Meno:</label>
                            <input type="text" name="name" placeholder="Vaše meno" required>
                        </div>
                        <div class="email-form">
                            <label>Email:</label>
                            <input type="email" name="email" value="@" required>
                        </div>
                    </div>
                    <div class="submit-form">
                        <button type="submit" value="Send" >Odoslať</button>
                    </div>
                </form>
                <p>Prípadne môžete napísať priamo na <a href="mailto:gorazd.kmet@outlook.com">gorazd.kmet@outlook.com</a>. Prosím uveďte aj Vaše meno a emailovú adresu aby sme Vás mohli kontaktovať s reakciou.</p>
            </article>
            <aside>
              <div class="content__outro clearfix">
                <p class="outro__text">Ďakujeme</p>
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
