describe("Criar Categoria", () => {
    it('espero q 2 + 2 seja 4 ', () => {
        const soma = 2 + 2
        const resultado = 4
        expect(soma).toBe(resultado)
    })
    it("espero que 2 + 2 nao seja 5", () => {
        const soma = 2 + 2
        const resultado = 5

        expect(soma).not.toBe(resultado )
    })
})