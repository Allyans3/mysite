$(document).on('change', '#eq', function() {
    $('#table1').bootstrapTable({});
    $('#table2').bootstrapTable({});
    $('#table3').bootstrapTable({});
    data.splice(0,data.length);
    euler();
    data.splice(0,data.length);
    RungeKutta();
    data.splice(0,data.length);
    Adams();
});

var data = [];

function load1(x, y){
    data.push({
           x: x,
           y: y.toFixed(3)
    });
    $('#table1').bootstrapTable("load", data);
}

function load2(x, y){
    data.push({
           x: x,
           y: y.toFixed(3)
    });
    $('#table2').bootstrapTable("load", data);
}

function load3(x, y){
    data.push({
           x: x,
           y: y.toFixed(3)
    });
    $('#table3').bootstrapTable("load", data);
}
