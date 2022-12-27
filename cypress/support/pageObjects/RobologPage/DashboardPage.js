const NEW_DASHBOARD = 'add dashboard';
const DASHBOARD_NAME = '.btn-group > .form-control';
const ADD_BUTTON = 'form.ng-valid > .btn-group > .btn';
const START_MESSAGE = 'Start building this dashboard';
const ERROR_MESSAGE = '.toast-message';
const OPTIONS_BUTTON = '#dashboard-menu > .btn';
const CHANGE_NAME = 'change dashboard name';

class DashboardPage {
    addDashboardButton = () => cy.contains(NEW_DASHBOARD);

    dashboardName = () => cy.get(DASHBOARD_NAME);

    addButton = () => cy.get(ADD_BUTTON);

    startMessage = () => cy.contains(START_MESSAGE);

    errorMessage = () => cy.get(ERROR_MESSAGE);

    findDashboard = (dashboardName) => cy.contains(dashboardName);

    dashboardAlreadyExists = (dashboardName) =>
        cy.get(
            'div[aria-label="The dashboard with name ' +
                dashboardName +
                ' already exists"]',
        );

    optionsButton = () => cy.get(OPTIONS_BUTTON);

    changeDashboardName = () => cy.contains(CHANGE_NAME);
}

export default DashboardPage;
