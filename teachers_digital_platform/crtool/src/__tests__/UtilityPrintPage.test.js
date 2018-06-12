import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import UtilityPrintPage from '../js/components/pages/UtilityPrintPage';
import renderer from 'react-test-renderer';

let result;
const utilityProps = {
    currentPage: "UtilityPrintPage",
    criterionAnswers: {},
    criterionClickedTitles: {},
    criterionCompletionStatuses: {},
    criterionScores: {},
    cirriculumTitle: "",
    dimensionOverallScores: {},
    distinctiveCompletedDate: {},
    gradeRange: "",
    numberFinalSummaryViews: "",
    utilityInProgress: false,
    utilityIsDone: true,
    utilityStatus: "",
    studyAnswers: {},

} 

afterAll(() => {
    result.unmount();
});

test ('Utility Print Page renders correctly', () => {
    // Act
    result = renderer.create(
        <UtilityPrintPage {...utilityProps}/>,
        );

    // Assert
    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});