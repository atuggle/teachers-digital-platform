import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import ContentPrintElementaryPage from '../js/components/pages/ContentPrintElementaryPage';
import renderer from 'react-test-renderer';

let result;

const contentElementaryProps = {
    currentPage: "ContentPrintElementaryPage",
    contentIsDone: true,
    contentStatus: "complete",
    contentSummaryView: true,
    criterionAnswers: {},
    criterionClickedTitles: {},
    criterionCompletionStatuses: {},
    criterionScores: {"content-elementary-crt-1":{"criterionName":"content-elementary-crt-1","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":2,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-elementary-crt-2":{"criterionName":"content-elementary-crt-2","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":4,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-elementary-crt-3":{"criterionName":"content-elementary-crt-3","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":6,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-elementary-crt-4":{"criterionName":"content-elementary-crt-4","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":2,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-elementary-crt-5":{"criterionName":"content-elementary-crt-5","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":2,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-elementary-crt-6":{"criterionName":"content-elementary-crt-6","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":1,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":false,"meets":true,"doesnotmeet":false}},
    cirriculumTitle: "",
    dimensionOverallScores: {},
    distinctiveCompletedDate: {},
    finalSummaryShowEntireReview: false,
    gradeRange: "",
    numberFinalSummaryViews: "",
    resetPrintButtonState: (() => {}),
    studyAnswers: {},
};

afterAll(() => {
    result.unmount();
});

test ('Content Print Elementary Page renders correctly', () => {
    result = renderer.create(
        <ContentPrintElementaryPage {...contentElementaryProps}/>,
    );

    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});