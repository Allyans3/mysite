$(document).ready(function() {
    $('.btn_burger').on("click",function(){      //Открытие и скрытие меню через бургер
         $('nav').toggleClass('show');
    });

    $('ul li').click(function(){                  //Скрытие Dropdown menu
        $(this).siblings().removeClass('show');
        $(this).toggleClass('show');
    });


    $(".show-login-btn").on("click", function(){  //Открытие логина и скрытие меню
        if($("nav").hasClass("show") == true) {
            $('nav').toggleClass('show');
        }
        $(".login-box").toggleClass("showed");
    });

    $(".hide-login-btn").on("click", function(){  //Скрытие логина по крестику
        $(".login-box").toggleClass("showed");
    });


    if($(".show-login-btn").text().length > 9){
        var str = $(".show-login-btn").text();
        $(".show-login-btn").text(str.substring(0, str.length - (str.length-9)) + "...")
    }
});
