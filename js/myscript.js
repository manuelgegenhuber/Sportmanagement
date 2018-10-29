$(document).ready(function() {
    $("#mainContent").load("mainContent.html");
    $("#footer").load("footer.html");


    $("body").click(function(event) {
        let element = document.elementsFromPoint(event.offsetX, event.offsetY);
        let buttonClicked = element.filter(x => x.id === 'navicon');
        if (buttonClicked.length > 0) {
            if ($("#offcanvas-reveal").hasClass("uk-open") === false) {
                $("#navicon").attr("uk-icon", "icon: close");
            } else {
                $("#navicon").attr("uk-icon", "icon: menu");

            }
        }
    });

    $("#plaenePage").on("click", function() {
        $("header").addClass("headerSmall");

    });

    //Navi Links + Mob

    $("#homeNavi").on("click", function() {
        $("#mainContent").load("mainContent.html");
        clearActive();
        if ($("#homeNavi").hasClass("uk-active") == false) {
            $("#homeNavi").addClass();
        }
    });
    $("#homeNaviMob").on("click", function() {
        $("#mainContent").load("mainContent.html");
    });

    var navLinks = document.getElementById("navHeaderElements").getElementsByTagName("li");
    var activeElement = Array.prototype.slice.call(navLinks).find(function(element) {
        return document.URL.search(element.id) !== -1; //true
    });

    clearActive();
    $(activeElement).addClass("uk-active");

    $([document.documentElement, document.body]).delay(1500).animate({
        scrollTop: $('.contentArea').offset().top
    }, 1000);

    $("#versicherungNaviMob").on("click", function() {
        $("#mainContent").load("versicherung.html");
        document.getElementById('navicon').click();
    });

    $("#michNavi").on("click", function() {
        $("#mainContent").load("mich.html");
        clearActive();
        if ($("#michNavi").hasClass("uk-active") == false) {
            $("#michNavi").addClass("uk-active");
        }

    });
    $("#michNaviMob").on("click", function() {
        $("#mainContent").load("mich.html");
        document.getElementById('navicon').click();
    });

    $("#kontaktNavi").on("click", function() {
        $("#mainContent").load("kontakt.html");
        clearActive();
        if ($("#mainContent").hasClass("uk-active") == false) {
            $("#mainContent").addClass("uk-active");
        }

    });
    $("#kontaktNaviMob").on("click", function() {
        $("#mainContent").load("kontakt.html");
        document.getElementById('navicon').click();
    });

    function clearActive() {
        $("#homeNavi").removeClass("uk-active");
        $("#trainingsNavi").removeClass("uk-active");
        $("#planNavi").removeClass("uk-active");
        $("#profilNavi").removeClass("uk-active");
        $("#vermittlungNavi").removeClass("uk-active");
        $("#versicherungNavi").removeClass("uk-active");
        $("#michNavi").removeClass("uk-active");
        $("#kontaktNavi").removeClass("uk-active");
    }
    //FooterLinks

    $("#footerHomeLink").on("click", function() {
        $("#mainContent").load("mainContent.html");
    });

    $("#footerTrainingLink").on("click", function() {
        $("#mainContent").load("training.html");
    });

    $("#footerPlaneLink").on("click", function() {
        $("#mainContent").load("plan.html");

    });

    $("#footerProfilLink").on("click", function() {
        $("#mainContent").load("profil.html");
    });

    $("#footerVermittlungLink").on("click", function() {
        $("#mainContent").load("vermittlung.html");

    });

    $("#footerVersicherungLink").on("click", function() {
        $("#mainContent").load("versicherung.html");
    });

    $("#footerMichLink").on("click", function() {
        $("#mainContent").load("mich.html");
    });

    $("#footerKontaktLink").on("click", function() {
        console.log("funzt");
        $("#mainContent").load("kontakt.html");
    });



    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 400) {
            jQuery('#topBarLogo').addClass('displayElement')

        } else {
            jQuery('#topBarLogo').removeClass('displayElement');
        }
        if (window.pageYOffset > 50) {
            jQuery('#footballCmd').addClass('undisplayElement');

        } else {
            jQuery('#footballCmd').removeClass('undisplayElement');
        }
    }, true);


});