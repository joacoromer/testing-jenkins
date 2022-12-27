const ROBOT_NAME_BOX = '.form-control-robot-name';
const MISSION_ID_BOX = '.form-control-mission-number';
const TR_COMBO_BOX = '#header-search-form-test-record > .form-control';
const GO_BUTTON = 'button[type="submit"]';
const TABLE_RESULTS = '.p-element';
const NOT_RESULTS = '.not-found-message';
const ROBOT_NAME_ROW =
    '.p-datatable-tbody > :nth-child(1) > .table-cell-field-robot';
const MISSION_ID_ROW = '.table-cell-field-mission_number > span';
const TR_LOADED = '.test-record-loaded';
const NOT_FOUND_MESSAGE = '.card-body > :nth-child(2)';
const USERNAME = '#navbarDropdownMenuLink';
const SWAP_THEME = '#theme-switcher-btn';
const MAIN_MENU = '.menu-toggle';

class PrincipalPage {
    nameRobotBox = () => cy.get(ROBOT_NAME_BOX);

    missionIdBox = () => cy.get(MISSION_ID_BOX);

    trIdBox = () => cy.get(TR_COMBO_BOX);

    goButtonNameAndMission = () => cy.get(GO_BUTTON).eq(0);

    goButtonTRId = () => cy.get(GO_BUTTON).eq(1);

    notResultsMessage = () => cy.get(NOT_RESULTS);

    tableResults = () => cy.get(TABLE_RESULTS);

    robotNameRow = () => cy.get(ROBOT_NAME_ROW);

    idMissionRow = () => cy.get(MISSION_ID_ROW);

    summaryTR = () => cy.get(TR_LOADED);

    notFoundTRMessage = () => cy.get(NOT_FOUND_MESSAGE);

    userName = () => cy.get(USERNAME);

    swapThemeButton = () => cy.get(SWAP_THEME);

    mainMenuButton = () => cy.get(MAIN_MENU);
}

export default PrincipalPage;
