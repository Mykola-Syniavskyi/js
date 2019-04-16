 

 class Calculator 
{   
   constructor()
   {
        this._a = 0;
        this._b = 0;
   } 
    

    SetA = function(a)
    {
        if (parseInt(a) || parseFloat(a))
        {
            this._a = +a; 
        }
        else
        {
           return this._a = 'a - isn`t num!';
        }
    }


    SetB = function(b)
    {
        if (parseInt(b) || parseFloat(b) || 0 == b)
        {
            this._b = +b;
        }
        else
        {
           return this._b = 'b - isn`t num!';
        }
    }

    GetA = function()
    {
        return this._a;
    }


    GetB = function()
    {
        return this._b;
    }

    
    add = function()
    {          
       return  this._a + this._b; 
    }

    substract  = function()
    {
        return this._a - this._b;
    }

    multiply  = function()
    {
        return this._a * this._b;
    }

    divide = function()
    {
        if (0 !== this._b)
        {
            return this._a / this._b;
        }
        else 
        {
        return 'divide by zero is forbidden';
        }
    }

    result = function()
    {
        var add = this.add();
        var substr = this.substract();
        var mult = this.multiply();
        var div = this.divide();
        console.log('result of add:' + add + ';\n',
            'result of substract:' + substr+';\n',
            'result of multiply:' + mult+';\n',
            'result of divide:' + div+';');
    }
    
}    

var calc = new Calculator();
calc.SetA(4);
calc.SetB(5);
calc.result();


var calc = new Calculator();
calc.SetA(5);
calc.SetB('0');
calc.result();

var calc = new Calculator();
calc.SetA(5);
calc.SetB('g1');
calc.result();