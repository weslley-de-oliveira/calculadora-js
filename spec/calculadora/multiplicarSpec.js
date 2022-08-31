describe("Suíte de testes de multiplicação", function() {

    let Calculadora = require('../../src/js/calculadora');

    it("Deve retornar 6 para 2 e 3", function() {
        expect(Calculadora.multiplicar(2, 3)).toEqual(6);
    });

    it("Deve retornar 6 para 2 e 3 em formato texto", function() {
        expect(Calculadora.multiplicar('2', '3')).toEqual(6);
    });

    it("Deve retornar 4.5 para 1.5 e 3 em formato texto", function() {
        expect(Calculadora.multiplicar(1.5, 3)).toEqual(4.5);
    });

    it("Deve retornar 0 para valor 1 inválido", function() {
        expect(Calculadora.multiplicar(undefined, 4)).toEqual(0);
    });

    it("Deve retornar 0 para valor 2 inválido", function() {
        expect(Calculadora.multiplicar(4, undefined)).toEqual(0);
    });
});