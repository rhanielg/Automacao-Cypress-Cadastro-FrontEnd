///<reference types="cypress"/>

describe('Cadastro de Entregador', () => {
    it('Cadastro com sucesso', () => {
        cy.visit('https://buger-eats.vercel.app/')
        cy.viewport(1440,900)

        cy.get('a[href="/deliver"]').click()
        cy.get('h1').should('contain', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Entregador',
            CPF: '12345678923',
            Email: 'entregador@teste.com',
            Whatsapp: '11999999999',
            Endereco: {
                CEP: '85301000',
                Numero: '3234',
                Complemento: 'Apartamento 10'
            }

        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.CPF)
        cy.get('input[name="email"]').type(entregador.Email)
        cy.get('input[name="whatsapp"]').type(entregador.Whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.Endereco.CEP)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(entregador.Endereco.Numero)
        cy.get('input[name="address-details"]').type(entregador.Endereco.Complemento)
        
        cy.get('.delivery-method > :nth-child(1)').click()

        cy.get('input[accept="image/*"]').attachFile('novo-modelo_CNH.jpg')
        cy.get('.button-success').click()
        cy.get('#swal2-title').should('contain', 'Aí Sim...')
    })

    it('Cadastro sem CNH', () => {
        cy.visit('https://buger-eats.vercel.app/')
        cy.viewport(1440,900)

        cy.get('a[href="/deliver"]').click()
        cy.get('h1').should('contain', 'Cadastre-se para  fazer entregas')

        var entregador = {
            nome: 'Entregador',
            CPF: '12345678923',
            Email: 'entregador@teste.com',
            Whatsapp: '11999999999',
            Endereco: {
                CEP: '85301000',
                Numero: '3234',
                Complemento: 'Apartamento 10'
            }

        }

        cy.get('input[name="name"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.CPF)
        cy.get('input[name="email"]').type(entregador.Email)
        cy.get('input[name="whatsapp"]').type(entregador.Whatsapp)

        cy.get('input[name="postalcode"]').type(entregador.Endereco.CEP)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(entregador.Endereco.Numero)
        cy.get('input[name="address-details"]').type(entregador.Endereco.Complemento)
        
        cy.get('.delivery-method > :nth-child(1)').click()

        cy.get('.button-success').click()
        cy.get('span[class="alert-error"]').should('contain', 'Adicione uma foto da sua CNH')
    })


    it('Cadastro com campos em branco', () => {
        cy.visit('https://buger-eats.vercel.app/')
        cy.viewport(1440,900)

        cy.get('a[href="/deliver"]').click()
        cy.get('h1').should('contain', 'Cadastre-se para  fazer entregas')

        cy.get('.button-success').click()
        
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .alert-error').should('contain', 'É necessário informar o nome')
        cy.get(':nth-child(2) > :nth-child(2) > .alert-error').should('contain', 'É necessário informar o CPF')
        cy.get(':nth-child(3) > :nth-child(1) > .alert-error').should('contain', 'É necessário informar o email')
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .alert-error').should('contain', 'É necessário informar o CEP')
        cy.get(':nth-child(4) > :nth-child(1) > .alert-error').should('contain', 'É necessário informar o número do endereço')
        cy.get(':nth-child(4) > .alert-error').should('contain', 'Selecione o método de entrega')
        cy.get('form > :nth-child(6)').should('contain', 'Adicione uma foto da sua CNH')
    })

})