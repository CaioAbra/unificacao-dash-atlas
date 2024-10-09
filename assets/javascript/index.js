$(document).ready(function () {
    // $('#sidebarCollapse').on('click', function () {
    //     $('#sidebar').toggleClass('active');

    //     // if ($('#sidebar').hasClass('active')) {
    //     $('.iconDesactive').toggleClass('d-none');
    //     $('.iconActive').toggleClass('d-none');

    //     $('.sidebar-header div.img-logo').toggleClass('col-8');
    //     $('.sidebar-header div.img-logo').toggleClass('mb-3');
    //     $('.sidebar-header div.btn-sidebar').toggleClass('col-4');
    //     // }
    // });


    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'],
            datasets: [{
                label: 'Receita',
                data: [10000, 12000, 14000, 13000, 15000, 16000, 18000, 20000, 22000],
                backgroundColor: '#DE8734',
                borderColor: '#DE8734',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // if(('#sidebar').hasClass){}
});

$('button.togle').on('click', function () {
    console.log('test');
    $('#sidebar').toggleClass('active');
});


$(document).ready(function () {
    checkWidth();

    $(window).resize(function () {
        checkWidth();
    });

    function checkWidth() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1366) {
            console.log("Tela pequena (mobile)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/sidebar/sidebar_sm.svg');
            $('.tableDesk').hide();
            $('.tableMobile').show();



        } else {
            console.log("Tela grande (desktop)");
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/btn-reduce.svg');
            $('.tableDesk').show();
            $('.tableMobile').hide();


            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');



                // if ($('#sidebar').hasClass('active')) {
                $('.iconDesactive').toggleClass('d-none');
                $('.iconActive').toggleClass('d-none');

                $('.sidebar-header div.img-logo').toggleClass('col-8');
                $('.sidebar-header div.img-logo').toggleClass('mb-3');
                $('.sidebar-header div.btn-sidebar').toggleClass('col-4');
                // }
            });
        }


        if (windowWidth <= 1024) {

            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
            });
        }

        if (windowWidth <= 768) { $('img.iconDesactive').attr('src', './src/img/logo/ATLAS icone 2.svg'); }
    }
});
