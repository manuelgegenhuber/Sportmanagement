<!--
DESKTOP NAV
-->

    <div style="z-index: 980;" uk-sticky="bottom: #offset">
        <div id="desktopNav">
            <nav class="uk-navbar-container" uk-navbar>
                <img src="img/logoWeb.jpg" alt="Logo" id="topBarLogo" class="logoTopBar">
                <div class="uk-navbar-center">
                    <ul id="navHeaderElements" class="uk-navbar-nav">
                        <li id="index"><a href="index.php">Home</a></li>
                        <li id="training"><a href="training.php" ">Training</a></li>
                        <li id="plan"><a href="plan.php">Pläne</a></li>
                        <li id="profil"><a href="profil.php">Profil</a></li>
                        <li id="vermittlung"><a href="vermittlung.php">Vermittlung</a></li>
                        <li id="versicherung"><a href="versicherung.php">Versicherung</a></li>
                        <li id="mich"><a href="mich.php">Über mich</a></li>
                        <li id="kontakt"><a href="kontakt.php">Kontakt</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    <!--
    MOBILE NAV
    -->
    <div id="mobileNav">

        <div style="z-index: 980;" uk-sticky="bottom: #offset">
            <div class="uk-offcanvas-content">
                <button id="navicon" class="uk-button uk-margin-small-right navButton" type="button" uk-toggle="target: #offcanvas-reveal" uk-icon="icon: menu"></button>
                <div id="floatIcon" class="floatIcon">
                    <img src="img/logoWeb.jpg" alt="Logo" class="floatIconLogo">
                </div>
                <div id="offcanvas-slide" uk-offcanvas="overlay: true">
                    <div class="uk-offcanvas-bar">
                        <button id="closeNaviButton" class="uk-offcanvas-close" type="button" uk-close></button>
                    </div>
                </div>

                <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                    <div class="uk-offcanvas-bar">
                        <br>
                        <div class="mobileNavHead">
                            <div class="pLogoContainer">
                                <img src="img/logoWebTrans.png" class="imgLogoContainer" />
                            </div>
                        </div>
                        <div class="uk-position-center-right uk-margin-medium-right">
                            <ul class="uk-nav uk-nav-default navFont">
                                <li id="homeNaviMob" class="uk-active"><a href="index.php">Home</a></li>
                                <li id="trainingsNaviMob"><a href="training.php">Training</a></li>
                                <li id="planNaviMob"><a href="plan.php">Pläne</a></li>
                                <li id="profilNaviMob"><a href="profil.php">Profil</a></li>
                                <li id="vermittlungNaviMob"><a href="vermittlung.php">Vermittlung</a></li>
                                <li id="verischerungNaviMob"><a href="versicherung.php">Versicherung</a></li>
                                <li id="michNaviMob"><a href="mich.php">Über mich</a></li>
                                <li id="kontaktNaviMob"><a href="kontakt.php">Kontakt</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- NAV END-->
    <header class="header">
        <div class="logo-box">
            <img src="img/logoWeb.jpg" alt="Logo" class="logo">
        </div>

        <div class="text-box">
            <h1 class="heading-primary">
                <!--2 span's because search-enginge optimization highest prio is h1-->
                <span class="heading-primary-main">Sportmanagement</span>

                <span class="heading-primary-sub">"Playing football with your feet is one thing, <br> but playing with your heart is another."</span>
            </h1>
        </div>
    </header>