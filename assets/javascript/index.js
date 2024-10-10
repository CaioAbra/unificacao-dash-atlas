$(document).ready(function () {
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

$(document).ready(function () {

    // Funções para gráficos de doughnut
    function createDoughnutChart(ctx, data, labels) {
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#DE8734', '#B9B9B9', '#4D4D4D'],
                    hoverOffset: 4
                }]
            }
        });
    }

    // Funções para gráficos de linha
    function createLineChart(ctx, data, labels) {
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    fill: false,
                    borderColor: '#DE8734',
                    tension: 0.2
                }]
            },
            options: {
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: {
                            callback: function (value) {
                                return value / 1000 + 'K';
                            }
                        }
                    }]
                }
            }
        });
    }

    // Gráficos Doughnut
    var doughnutData = [300, 200, 47];
    var doughnutLabels = ['Depósitos', 'Depositantes', 'FTD’s'];
    createDoughnutChart(document.getElementById('visaoGeralChart').getContext('2d'), doughnutData, doughnutLabels);
    createDoughnutChart(document.getElementById('visaoGeralChartdois').getContext('2d'), doughnutData, doughnutLabels);

    // Gráficos de Linha
    var lineData = [30000, 60000, 40000, 100000, 40000, 80000, 40000, 60000, 70000];
    var lineLabels = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'];
    createLineChart(document.getElementById('graficoCrescimentoChart').getContext('2d'), lineData, lineLabels);
    createLineChart(document.getElementById('graficoCrescimentoChartdois').getContext('2d'), lineData, lineLabels);

    // Alternância da Sidebar
    function toggleSidebar() {
        $('#sidebar').toggleClass('active');
        $('.iconDesactive').toggleClass('d-none');
        $('.iconActive').toggleClass('d-none');
        $('.sidebar-header div.img-logo').toggleClass('col-8 mb-3');
        $('.sidebar-header div.btn-sidebar').toggleClass('col-4');
    }

    $('#sidebarCollapse').on('click', toggleSidebar);

    // Ajuste de responsividade
    function checkWidth() {
        var windowWidth = $(window).width();

        if (windowWidth <= 1366) {
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/sidebar/sidebar_sm.svg');
        } else {
            $('#sidebarCollapse .img-auto').attr('src', './src/img/icons/btn-reduce.svg');
        }

        if (windowWidth <= 768) {
            $('img.iconDesactive').attr('src', './src/img/logo/ATLAS icone 2.svg');
        }
    }

    checkWidth();
    $(window).resize(function () {
        checkWidth();
    });
});

// Gráficos e configurações de gráficos adicionais
var options = {
    chart: {
        type: 'donut',
        width: '100%'
    },
    series: [45, 30, 25],
    colors: ['#F19B1A', '#A6A6A6', '#353535'],
    labels: ['Depósitos', 'Depositantes', 'FTD\'s'],
    legend: { show: false },
    dataLabels: { enabled: false },
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
                            return 'R$ 24.500,20';
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
    stroke: { show: false }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options1 = {
    chart: { type: 'line', height: 300, width: '100%', toolbar: { show: false } },
    series: [{
        name: 'Receita',
        data: [20000, 60000, 30000, 80000, 40000, 110000, 60000, 120000]
    }],
    colors: ['#F19B1A'],
    stroke: { curve: 'smooth', width: 3 },
    xaxis: {
        categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'],
        labels: { style: { colors: '#F4F4F4' } }
    },
    yaxis: {
        labels: {
            style: { colors: '#F4F4F4' },
            formatter: function (value) {
                return 'R$ ' + value.toLocaleString();
            }
        }
    },
    grid: { borderColor: '#333', strokeDashArray: 4 },
    tooltip: {
        y: { formatter: function (value) { return 'R$ ' + value.toLocaleString(); } }
    }
};

var chart1 = new ApexCharts(document.querySelector("#lineChart1"), options1);
chart1.render();

var options2 = {
    chart: { type: 'line', height: 300, width: '100%', toolbar: { show: false } },
    series: [{
        name: 'Mês atual',
        data: [400, 700, 500, 800, 600, 1000, 900, 1100, 1000, 1200]
    }, {
        name: 'Mês anterior',
        data: [500, 600, 400, 600, 700, 800, 700, 900, 800, 900],
        stroke: { dashArray: 4 }
    }],
    colors: ['#F19B1A', '#606060'],
    stroke: { curve: 'smooth', width: 2 },
    xaxis: {
        categories: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET'],
        labels: { style: { colors: '#F4F4F4' } }
    },
    yaxis: {
        labels: {
            style: { colors: '#F4F4F4' },
            formatter: function (value) {
                return 'R$ ' + value.toLocaleString();
            }
        }
    },
    grid: { borderColor: '#333', strokeDashArray: 4 },
    tooltip: {
        y: { formatter: function (value) { return 'R$ ' + value.toLocaleString(); } }
    }
};

var chart2 = new ApexCharts(document.querySelector("#lineChart2"), options2);
chart2.render();


