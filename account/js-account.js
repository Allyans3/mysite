$(document).ready(function() {
    $(".fa-times").on("click", function() {
        $(".sidebar").removeClass("active");
    });
    $(".burger-btn").on("click", function() {
        $(".sidebar").addClass("active");
    });

    $(".content").niceScroll({cursorcolor: "#40c3de"});

    jsNav();

    function jsNav(){
        var $link=$(".js-nav-link"),$subNav=$(".js-subnav");
        if($link.length){
            $link.on("click",function(){
                var self=$(this), thisNav=self.siblings(".js-subnav"), li=self.closest("li");
                $link.removeClass("active");
                if(li.hasClass("active")){
                    if(!li.hasClass("current")){
                        self.removeClass("active");
                        li.removeClass("active");
                        thisNav.slideUp(300);
                    }
                }else{
                    $subNav.each(function(){
                        var sli=$(this).closest("li");
                        if(sli.hasClass("active")&&!sli.hasClass("current")){
                            self.removeClass("active");
                            $(this).slideUp(300);
                            sli.removeClass("active");
                        }
                    });
                    $(".sidebar-nav-list-item").removeClass("active");
                    self.addClass("active");
                    li.addClass("active");
                    thisNav.slideDown(300);
                }
            });
        }
    }

    // var ctx = document.getElementById('myChart').getContext('2d');
    // var chart = new Chart(ctx, {
    //     // The type of chart we want to create
    //     type: 'bar',
    //
    //     // The data for our dataset
    //     data: {
    //         labels: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth'],
    //         datasets: [{
    //             label: 'My First dataset',
    //             backgroundColor: 'rgb(255, 99, 132)',
    //             borderColor: 'rgb(255, 99, 132)',
    //             data: [10, 5, 14, 20, 0, 0]
    //         }]
    //     },
    //
    //     // Configuration options go here
    //     options: {}
    // });

});
