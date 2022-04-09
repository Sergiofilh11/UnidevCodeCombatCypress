describe('Teste do Registro.br', () => {

    const baseUrl = 'https://registro.br/busca-dominio'

    it('Deveria ser possivel consultar um dominio valido que esteja disponivel', () => {

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('batatinha123.com.br')
        cy.get('button').click()
        cy.get('.is-avail-response-available').should('be.visible')
    })

    it('Deveria ser possivel consultar um dominio valido que esteja disponivel sem o .com.br', () => {

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('batatinha123')
        cy.get('button').click()
        cy.get('.is-avail-response-fqdn').should('contains.text','.com.br')
        cy.get('.is-avail-response-available').should('be.visible')
    })

    it('Deveria acusar erro ao consultar um dominio valido que não esteja disponivel', () => {

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('cocacola.com.br')
        cy.get('button').click()
        cy.get('.is-avail-response-not-available').should('be.visible')
    })

    it('Deveria acusar erro ao fazer uma consulta vazia', () => {

        cy.visit(baseUrl)
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    it('Deveria acusar erro ao fazer uma consulta com caracteres especiais', () => {

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('@!#!$!#$!%#%!¨!¨')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    it('Deveria acusar erro ao fazer uma consulta com mais de 26 caracteres', () => {

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('TesteTastandoUmDoistres12345')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })

    it('Deveria acusar erro ao fazer uma consulta com menos de 2 caracteres', () => {
        

        cy.visit(baseUrl)
        cy.get('#is-avail-field').type('T')
        cy.get('button').click()
        cy.get('.font-6').should('be.visible')
    })
})
