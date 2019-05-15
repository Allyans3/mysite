const eps = 0.001;

function jacobi_method(dataA, dataB, n)
{
    var a = JSON.parse(JSON.stringify(dataA));
    var b = JSON.parse(JSON.stringify(dataB));
	var p = [];
    var x = [];
	var norm = 0;
    for(var i=0; i < n; i++)
        x[i] = 0;

    if(!condition(a))
        return;

	do {
		for (var i = 0; i < n; i++) {
			p[i] = b[i];
			for (var g = 0; g < n; g++) {
				if (i != g)
					p[i] -= a[i][g] * x[g];
			}
			p[i] /= a[i][i];
		}
        norm = Math.abs(x[0] - p[0]);
		for (var h = 0; h < n; h++) {
			if (Math.abs(x[h] - p[h]) > norm)
				norm = Math.abs(x[h] - p[h]);
			x[h] = p[h];
		}
	} while (norm > eps);

    for(var i = 0; i< x.length; i++)
        load4("x"+(i+1), x[i]);
}

//-----------------------------------------------------------------

function zeidel_method(dataA, dataB, n){
    var a = JSON.parse(JSON.stringify(dataA));
    var b = JSON.parse(JSON.stringify(dataB));
    var p = [];
    var x = [];

    for(var i=0; i < n; i++)
        x[i] = 0;

    if(!condition(a))
        return;

    do {
        for (var i = 0; i < n; i++)
            p[i] = x[i];
        for (var i = 0; i < n; i++)
        {
            var cnt= 0;
            for (var j = 0; j < i; j++)
                cnt += (a[i][j] * x[j]);
            for (var j = i + 1; j < n; j++)
                cnt += (a[i][j] * p[j]);
            x[i] = (b[i] - cnt) / a[i][i];
        }
    }
    while (!converge(x, p, n));
    for(var i = 0; i< x.length; i++)
        load3("x"+(i+1), x[i]);
}

function converge(x, p, n){
    var norm = 0;
    for (var i = 0; i < n; i++)
        norm += (x[i] - p[i])*(x[i] - p[i]);
    return (Math.sqrt(norm)<eps);
}

function condition(a){
    var condA=0, condB=0;
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a.length; j++){
            if(a[i][i] != a[i][j])
                condB += Math.abs(a[i][j]);
            else
                condA = Math.abs(a[i][i]);
        }
        if(condA < condB){
            console.log("Система не прошла проверку на сходимость!");
            return false;
        }
        condB = 0;
    }
    return true;
}

//-----------------------------------------------------------------

function kramer_method(a, b, n) {
    // a - 2d array
    // b - 1d array
    var det  = math.det(a);
    if(!condition(a))
        return;
    if(det == 0) {
        console.log("Determinant is equal to zero!");
        return;
    }

    var array;
    var solutions = [];
    var ii = 0;
    for(var i = 0;i < n;i++) {
        array = JSON.parse(JSON.stringify(a));
        for(var col = 0;col < n;col++) {
            array[col][i] = b[col];
        }

        var delta_det = math.det(array);
        solutions.push((delta_det/det).toFixed(4));
        ii++;
        load1("x" + ii, solutions[i]);
    }

    return solutions;
}

//-----------------------------------------------------------------

function gausse_method(dataA,dataB,iter_item) {
    if(!condition(dataA))
        return;
    var m = JSON.parse(JSON.stringify(dataA));
    var n = iter_item;
    for( var i = 0; i < iter_item; i++){
        m[i].push(dataB[i]);
    }
    for(iter_item=0;iter_item<(n-1);iter_item++) {
        if (m[iter_item][iter_item] == 0)
            SwapRows(iter_item);
        for(j=n; j>=iter_item; j--) {
            m[iter_item][j] /= m[iter_item][iter_item];
        }
        for(i=iter_item+1; i<n; i++) {
            for(j=n;j>=iter_item;j--) {
                m[i][j] -= m[iter_item][j] * m[i][iter_item];
            }
        }
    }
    Answers(m,n);
}

function SwapRows(iter_item) {
    for(i=iter_item+1;i<n;i++) {
        if(m[i][iter_item] !== 0) {
            for(j=0;j<=n;j++) {
                k = m[i-1][j];
                m[i-1][j] = m[i][j];
                m[i][j] = k;
            }
        }
    }
}

function Answers(m, col) {
    var n = col;
    var l= [];
    l[n-1] = m[n-1][n]/m[n-1][n-1];
    for(var i=n-2;i>=0;i--) {
        k=0;
        for(j=n-1;j>i;j--) {
            k = (m[i][j]*l[j]) + k;
        }
        l[i] = m[i][n] - k;
    }
    for(var gg = 0; gg < l.length; gg++){
        load2("x"+(gg+1), l[gg]);
    }
}
