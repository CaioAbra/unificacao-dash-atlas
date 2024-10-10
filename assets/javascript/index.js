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

// graficos de estatistica
$(document).ready(function () {

    // var ctx = document.getElementById('visaoGeralChart').getContext('2d');
    var ctx = document.getElementById('visaoGeralChart').getContext('2d');

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: [
                'Depósitos',
                'Depositantes',
                'FTD’s'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 200, 47],
                backgroundColor: [
                    '#DE8734',
                    '#B9B9B9',
                    '#4D4D4D'
                ],
                hoverOffset: 4
            }]
        }
    });

    var ctxdois = document.getElementById('visaoGeralChartdois').getContext('2d');

    var chart = new Chart(ctxdois, {
        type: 'doughnut',
        data: {
            labels: [
                'Depósitos',
                'Depositantes',
                'FTD’s'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 200, 47],
                backgroundColor: [
                    '#DE8734',
                    '#B9B9B9',
                    '#4D4D4D'
                ],
                hoverOffset: 4
            }]
        }
    });

    var graficoCrescimentoChart = document.getElementById('graficoCrescimentoChart').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChart, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });



    var graficoCrescimentoChartdois = document.getElementById('graficoCrescimentoChartdois').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChartdois, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });


    var graficoCrescimentoChartum = document.getElementById('graficoCrescimentoChartum').getContext('2d');

    var labels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET']; // Definir os rótulos

    var chart = new Chart(graficoCrescimentoChartum, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '', // Deixe o label vazio se quiser esconder o texto da legenda
                data: [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000], // Valores numéricos
                fill: false,
                borderColor: '#DE8734',
                tension: 0.2
            }]
        },
        options: {
            legend: {
                display: false // Esconder a legenda
            },
            scales: {
                yAxes: [{
                    ticks: {
                        // Formatar os valores do eixo Y com "K"
                        callback: function (value, index, values) {
                            return value / 1000 + 'K'; // Exibe como "K"
                        }
                    }
                }]
            }
        }
    });


});

var options = {
    chart: {
        type: 'donut',
        width: '100%'
    },
    series: [45, 30, 25], // Percentuais de Depósitos, Depositantes, e FTD's
    colors: ['#F19B1A', '#A6A6A6', '#353535'], // Cores das fatias
    labels: ['Depósitos', 'Depositantes', 'FTD\'s'],
    legend: {
        show: false // Desabilita a legenda padrão (será customizada fora do gráfico)
    },
    dataLabels: {
        enabled: false // Remove as labels dentro da rosca
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return 'R$ 24.500,20'; // Valor total personalizado
                        },
                        style: {
                            color: '#F4F4F4',
                            fontSize: '16px'
                        }
                    }
                }
            }
        }
    },
    stroke: {
        show: false // Remove a borda branca
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//grafico 1
var options1 = {
    chart: {
        type: 'line',
        height: 300,
        width: '100%',
        toolbar: { show: false } // Remove o menu de exportação
    },
    series: [{
        name: 'Receita',
        data: [20000, 60000, 30000, 80000, 40000, 110000, 60000, 120000] // Valores correspondentes a cada mês
    }],
    colors: ['#F19B1A'], // Cor laranja para a linha
    stroke: {
        curve: 'smooth', // Linha suavizada
        width: 3
    },
    xaxis: {
        categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'],
        labels: {
            style: {
                colors: '#F4F4F4'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#F4F4F4'
            },
            formatter: function (value) {
                return 'R$ ' + value.toLocaleString(); // Formata os valores em reais
            }
        }
    },
    grid: {
        borderColor: '#333',
        strokeDashArray: 4 // Linha pontilhada da grade
    },
    tooltip: {
        y: {
            formatter: function (value) {
                return 'R$ ' + value.toLocaleString();
            }
        }
    }
};

var chart1 = new ApexCharts(document.querySelector("#lineChart1"), options1);
chart1.render();

//grafico2
var options2 = {
    chart: {
        type: 'line',
        height: 300,
        width: '100%',
        toolbar: { show: false }
    },
    series: [{
        name: 'Mês atual',
        data: [400, 700, 500, 800, 600, 1000, 900, 1100, 1000, 1200] // Dados do mês atual
    }, {
        name: 'Mês anterior',
        data: [500, 600, 400, 600, 700, 800, 700, 900, 800, 900], // Dados do mês anterior
        stroke: {
            dashArray: 4 // Linha pontilhada para a comparação
        }
    }],
    colors: ['#F19B1A', '#606060'], // Laranja para mês atual, cinza para o anterior
    stroke: {
        curve: 'smooth',
        width: 2
    },
    xaxis: {
        categories: ['01 SET', '02 SET', '03 SET', '04 SET', '05 SET', '06 SET', '07 SET', '08 SET', '09 SET', '10 SET'],
        labels: {
            style: {
                colors: '#F4F4F4'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#F4F4F4'
            }
        }
    },
    grid: {
        borderColor: '#333',
        strokeDashArray: 4
    },
    tooltip: {
        shared: true, // Tooltip com múltiplos valores
        intersect: false,
        y: {
            formatter: function (value) {
                return value.toLocaleString();
            }
        }
    },
    legend: {
        labels: {
            colors: '#FFFFFF' // Cor branca para as legendas
        }
    }
};

var chart2 = new ApexCharts(document.querySelector("#lineChart2"), options2);
chart2.render();

// grafico3
var options1 = {
    chart: {
        type: 'donut',
        width: '100%'
    },
    series: [175, 80], // Percentuais de Depósitos, Depositantes, e FTD's
    colors: ['#DE8734', '#B9B9B9'], // Cores das fatias
    labels: ['Afiliados totais', 'Novos'],
    legend: {
        show: false // Desabilita a legenda padrão (será customizada fora do gráfico)
    },
    dataLabels: {
        enabled: false // Remove as labels dentro da rosca
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: '70%',
                labels: {
                    show: true,
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                            return '255'; // Valor total personalizado
                        },
                        style: {
                            color: '#B9B9B9',
                            fontSize: '16px'
                        }
                    }
                }
            }
        }
    },
    stroke: {
        show: false // Remove a borda branca
    }
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


$(document).ready(function () {
    var ctx = document.getElementById('chartDash').getContext('2d');
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
});


//carousel
const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,

    speed: 600,
    previousClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2.5,
    },
    // // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.nex',
        prevEl: '.pre',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});