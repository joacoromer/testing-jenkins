const HOME = 'Home';
const UPLOAD_TEST_LOGS = 'Upload Test Logs';
const LOCATIONS = 'Locations';
const PROJECTS = 'Projects';
const ROBOTS = 'Robots';
const TEST_RECORDS = 'Test Records';
const TEST_SERIES = 'Test Series';
const TAGS = 'Tags';
const TEST_RECORD_METADATA = 'Test Record Metadata';
const FILES = 'Files';
const MY_SAVED_FILTERS = 'My Saved Filters';
const FEEDBACK_HELP = 'Feedback & Help?';

class MainMenuPage {
    homeItem = () => cy.contains(HOME);

    uploadTestLogsItem = () => cy.contains(UPLOAD_TEST_LOGS);

    locationsItem = () => cy.contains(LOCATIONS);

    projectsItem = () => cy.contains(PROJECTS);

    robotsItem = () => cy.contains(ROBOTS);

    testRecordsItem = () => cy.contains(TEST_RECORDS);

    testSeriesitem = () => cy.contains(TEST_SERIES);

    tagsItem = () => cy.contains(TAGS);

    testRecordMetadataItem = () => cy.contains(TEST_RECORD_METADATA);

    filesItem = () => cy.contains(FILES);

    mySavedFiltersItem = () => cy.contains(MY_SAVED_FILTERS);

    feedbackHelpItem = () => cy.contains(FEEDBACK_HELP);
}

export default MainMenuPage;
