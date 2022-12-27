const ENVS = {
    production: Cypress.env('RobologProd'),
    staging: Cypress.env('RobologStaging'),
    dev: Cypress.env('RobologTesting'),
};

class Utils {
    goToPage = (urlReplace) => {
        cy.document().then((doc) => {
            doc.location.replace(urlReplace);
        });

        return;
    };

    sites(environment) {
        let url = ENVS[environment];
        return url;
    }
}

export default Utils;
