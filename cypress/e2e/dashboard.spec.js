describe('dashboard', ()=>{
    it('frontpage can be opened', ()=>{
        cy.visit('http://localhost:3000')
        cy.contains('Travl dashboard')
    })
})