function Adams(){
    var H = 0.1, //шаг
        N = 10, // количетсво итераций
        T = 0,
        W = [],
        K1,K2,K3,K4;

    W[0] = 1; //начальное значение
    load3(T, W[0]);
    for (var i=1; i <= 3; i++)
    {
       K1 = H * func(T, W[i-1]);
       K2 = H * func(T + H/2, W[i-1] + K1/2);
       K3 = H * func(T + H/2, W[i-1] + K2/2);
       K4 = H * func(T + H, W[i-1] + K3);

       W[i] = W[i-1] + 1/6*(K1 + 2*K2 + 2*K3 + K4);

       T = +(T+H).toFixed(1);

       load3(T, W[i]);
    }

    /*Use Adam-Bashforth 4-step explicit method */
    for(var i = 4; i <= N; i++)
    {
        K1 = 55 * func(T, W[i-1]) - 59 * func(T-H, W[i-2]) + 37 * func(T-2*H, W[i-3]) - 9 * func(T-3 *H, W[i-4]);
        W[i] = W[i-1] + H/24*K1;

        T = +(T+H).toFixed(1);


        load3(T, W[i]);
    }
}

//----------------------------------------------------------

function RungeKutta(){
    var h = 0.1, //шаг
        n = 10, // количетсво итераций
        x = 0, // x0
        y = 1, //y0
        k1, k2, k3, k4;

    for (var i = 0; i < n; i++)
    {
        load2(x,y);
        k1 = func(x, y);
        k2 = func(x + h/2, y + (h*k1)/2 );
        k3 = func(x + h/2, y + (h*k2)/2 );
        k4 = func(x + h, y + h*k3 );

        y += h*((k1 + 2*k2 + 2*k3 + k4)/6);

        x = +(x+h).toFixed(1);
    }
    load2(x,y);
}

//-----------------------------------------------------------

function euler() {
    var h = 0.1, // шаг
        n = 10, // количество итераций
        x = 0, // x0
        y = 1; // y0

    for (var i = 0; i < n; i++)
    {
        load1(x,y);
        y += h/2*(func(x, y) + func(+(x+h).toFixed(1), y + h*func(x, y))); // вычисление yi
        x = +(x+h).toFixed(1);
    }
    load1(x,y);
}

function func(numx, numy){
    var node = math.parse(document.getElementById('eq').value);

    let scope = {x: numx, y: numy};
    return node.compile().eval(scope);
}
