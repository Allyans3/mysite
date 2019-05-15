function division_method(a, b,h = 0.001) {
    var c = (a + b) / 2;
    var i = 0;
    while(Math.abs(func(c)) > h)
    {
        if(func(a) * func(c) < 0)
        {
            b = c;
        }
        else
        {
            a = c;
        }
        i++;
        c = (a + b) / 2;
        load1(i,a,b,c);
    }

    return c;
}

function horde_method(a, b, h = 0.001) {
    var i=0;
    while(math.abs(b - a) > h)
    {
    	a = b - (b - a) * func(b) / (func(b) - func(a));
    	b = a + (a - b) * func(a) / (func(a) - func(b));
        i++;
        load2(i,a,b);
    }

    return b;
}

function newton_method(x0, h = 0.001, max_iter = 100) {
    var i  = 0;
    var x;
    while(i < max_iter) {
        x = x0 - func(x0)/df(x0);
        x0 = x;
        i++;
        load3(i,x0,x);
        if(func(x) <= h) {
            return x;
        }

    }
    return x;
}

function fi(a, b, x) {
    return x - Math.exp(a - b) * func(x);
}


function simple_iter_method(a, b, h=0.001, max_iter=100) {
    var x0 = a;
    var i = 0;
    while(i < max_iter) {
        x = fi(a, b, x0);
        if(Math.abs(x - x0) <= h) {
            return x;
        }
        x0 = x;
        i++;
        load4(i,x0,x);
    }

    return x;
}

function df(num){
    var x = math.parse(document.getElementById('eq').value);
    return math.derivative(x, 'x').eval({x: num});
}

function func(num){
    var node = math.parse(document.getElementById('eq').value);

    let scope = {x: num};
    return node.compile().eval(scope);
}
