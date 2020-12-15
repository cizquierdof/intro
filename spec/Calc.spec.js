const { suma, resta } = require('../Calc');
const Calc = require('../Calc')

describe('Test de Calc', ()=>{
    describe('Sumar',()=>{
        it('a, b must be number',()=>{
            const a='a';
            const b =2;
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('a, b must be number',()=>{
            const a=2;
            const b ='s';
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('a, b must be number',()=>{
            const a='a';
            const b =null;
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('2+2,4',()=>{
            expect(suma(2,2)).toEqual(4);
        })

    });

    describe('Restar',()=>{
        it('a, b must be number',()=>{
            const a='a';
            const b =2;
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('a, b must be number',()=>{
            const a=2;
            const b ='s';
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('a, b must be number',()=>{
            const a='a';
            const b =null;
            expect(suma(a,b)).toEqual('Inputs deben ser números');
        });

        it('2-2,0',()=>{
            expect(resta(2,2)).toEqual(0);
        })

    });

    
})