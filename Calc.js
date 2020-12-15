const errorInput = 'Inputs deben ser números'
module.exports = {
    
    suma: (a, b) => {
        if (isNaN(a) || isNaN(b)) return errorInput;
        return a + b;
    },
    resta: (a, b) => {
        if (isNaN(a) || isNaN(b)) return errorInput;
        return a - b;
    },
    multiplica: (a, b) => {
        if (isNaN(a) || isNaN(b)) return errorInput;
        return a * b;
    },
    divide: (a, b) => {
        if (isNaN(a) || isNaN(b)) return errorInput;
        return a / b;
    }
}