import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import ContentPrintHighPage from '../js/components/pages/ContentPrintHighPage';
import renderer from 'react-test-renderer';

let result;

const contentHighProps = {
    currentPage: "ContentPrintHighPage",
    contentIsDone: true,
    contentStatus: "complete",
    contentSummaryView: true,
    criterionAnswers: {},
    criterionClickedTitles: {},
    criterionCompletionStatuses: {},
    criterionScores: {"content-high-crt-1":{"criterionName":"content-high-crt-1","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":6,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-high-crt-2":{"criterionName":"content-high-crt-2","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":9,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-high-crt-3":{"criterionName":"content-high-crt-3","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":4,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-high-crt-4":{"criterionName":"content-high-crt-4","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":10,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-high-crt-5":{"criterionName":"content-high-crt-5","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":7,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-high-crt-6":{"criterionName":"content-high-crt-6","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":3,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false}},
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

test ('Content Print High Page renders correctly', () => {
    result = renderer.create(
        <ContentPrintHighPage {...contentHighProps}/>,
    );

    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});