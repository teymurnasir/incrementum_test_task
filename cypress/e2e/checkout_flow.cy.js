describe('amazon E2E testing', () => {


  it('checkout flow of amazon', () => {

    // visit the amazon website home page and click signin button
    cy.visithomepage()
    cy.get('#nav-link-accountList-nav-line-1').click();
      
    // fill email input and click continue button
    cy.get('#ap_email').type('teymurnasir@gmail.com')
    cy.get('#continue').click(); 

    // fill Password input and click sign in button
    cy.get('#ap_password').type('1234567Teymur$')
    cy.get('#signInSubmit').click();

    // find search input then type 'harddrive' and click search buttont
    cy.get('#twotabsearchtextbox').type('harddrive')
    cy.get('#nav-search-submit-button').click()  

  
    // find the first product and click
    cy.get('[data-cel-widget="search_result_1"]').find('.a-link-normal').first().click()


    // add the product to the basket then visit homepage 
    cy.get('#add-to-cart-button').click()  
    cy.visithomepage()

    // visit Shopping Cart then visit checkout page
    cy.get('#nav-cart-text-container').click({force: true})     
    cy.get('[name="proceedToRetailCheckout"]').click()   

  }) 


})