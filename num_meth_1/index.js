function draw() {
    try {
        // compile the expression once
        const expression = document.getElementById('eq').value;
        const expr = math.compile(expression);

        // evaluate the expression repeatedly for different values of x
        const xValues = math.range(-20, 20, 0.1).toArray();
        const yValues = xValues.map(function (x) {
            return expr.eval({x: x});
        })

        // render the plot using plotly
        const trace1 = {
        x: xValues,
        y: yValues,
        mode: 'lines',
        type: 'scatter'
        }

        var layout = {
          autosize: true,
          height: 300,
          margin: {
            l: 15,
            r: 0,
            b: 15,
            t: 7
          }
        };
        const data = [trace1];
        Plotly.newPlot('plot', data,layout);
    }
    catch (err) {
        console.error(err);
        alert(err);
    }
}

$(document).on('change', '#eq', function() {
    draw();
});

$(document).on('change', '#b', function() {
    $('#table1').bootstrapTable({});
    $('#table2').bootstrapTable({});
    $('#table3').bootstrapTable({});
    $('#table4').bootstrapTable({});
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    console.log(isNaN(a));
    if(!isNaN(a)){
        data.splice(0,data.length);
        division_method(a,b);
        data.splice(0,data.length);
        horde_method(a,b);
        data.splice(0,data.length);
        newton_method(a);
        data.splice(0,data.length);
        simple_iter_method(a,b);
    }
});

var data = [];

function load1(id,first,second,third){
    data.push({
           id: id,
           first: first,
           second: second,
           third: third});
    $('#table1').bootstrapTable("load", data);
}

function load2(id,first,second){
    data.push({
        id: id,
        first: first,
        second: second});
    $('#table2').bootstrapTable("load", data);
}

function load3(id,first,second){
     data.push({
         id: id,
         first: first,
         second: second});
     $('#table3').bootstrapTable("load", data);
}

function load4(id,first,second){
     data.push({
         id: id,
         first: first,
         second: second});
     $('#table4').bootstrapTable("load", data);
}
