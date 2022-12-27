const LOGINBUTTON = '#loginSubmit';
const MODALMESSAGE = '.modal-body';
const MODALMESSAGEBUTTON = '.modal-footer > .btn';

class LoginPage {
    loginButton = () => cy.get(LOGINBUTTON);

    modalMessage = () => cy.get(MODALMESSAGE);

    modalMessageButon = () => cy.get(MODALMESSAGEBUTTON);
}

export default LoginPage;
