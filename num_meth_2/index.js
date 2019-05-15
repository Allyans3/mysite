var cnt = 2;

 $('.but1').click(function(){
    $('#tableA').append($("#tableA tr:last").clone());
    $('#tableB').append($("#tableB tr:last").clone());
    $('#tableA tr').append($("<td  contenteditable='true'>"));
    cnt++;
 });

 $('.but2').click(function(){
    if(document.getElementById("tableA").rows.length >= 3){
        $('#tableA tr:last').remove();
        $('#tableB tr:last').remove();
        $('#tableA tr').find('td:last,th:last').remove();
        cnt--;
    }
 });

$(document).on('click', '#solve', function() {
    var dataA = GetCellValues("tableA",true);
    var dataB = GetCellValues("tableB",false);
    console.log(dataA);
    console.log(dataB);

    $('#table1').bootstrapTable({});
    $('#table2').bootstrapTable({});
    $('#table3').bootstrapTable({});
    $('#table4').bootstrapTable({});

    data.splice(0,data.length);
    kramer_method(dataA,dataB, cnt);

    data.splice(0,data.length);
    gausse_method(dataA,dataB, cnt);

    data.splice(0,data.length);
    zeidel_method(dataA,dataB, cnt);

    data.splice(0,data.length);
    jacobi_method(dataA,dataB, cnt);
    if(data.length == 0){
        $('#table1').bootstrapTable('destroy'); //Destroy bootstrap table
        $('#table2').bootstrapTable('destroy'); //Destroy bootstrap table
        $('#table3').bootstrapTable('destroy'); //Destroy bootstrap table
        $('#table4').bootstrapTable('destroy'); //Destroy bootstrap table
        $('#table1').bootstrapTable();
        $('#table2').bootstrapTable();
        $('#table3').bootstrapTable();
        $('#table4').bootstrapTable();
        $("tr.no-records-found td").text("Система не прошла проверку на сходимость!")
    }

});

var data= [];

function GetCellValues(tables,matrixes) {
    var matrix = [];
    var table = document.getElementById(tables);
    for (var r = 0, n = table.rows.length; r < n; r++) {
        if(matrixes)
            matrix[r] = [];
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
            if(matrixes)
                matrix[r].push(Number(table.rows[r].cells[c].innerHTML));
            else
                matrix.push(Number(table.rows[r].cells[c].innerHTML));
        }
    }
    return matrix;
}

function load1(id,first){
    data.push({
        id: id,
        first: first
    });
    $('#table1').bootstrapTable("load", data);
}

function load2(id,first){
    data.push({
        id: id,
        first: first
    });
    $('#table2').bootstrapTable("load", data);
}

function load3(id,first){
    data.push({
        id: id,
        first: first
    });
    $('#table3').bootstrapTable("load", data);
}

function load4(id,first){
    data.push({
        id: id,
        first: first
    });
    $('#table4').bootstrapTable("load", data);
}
