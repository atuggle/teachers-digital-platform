import React from 'react';
import ReactDOM from 'react-dom';
import C from '../js/business.logic/constants';
import ContentPrintMiddlePage from '../js/components/pages/ContentPrintMiddlePage';
import renderer from 'react-test-renderer';

let result;

const contentMidldleProps = {
    currentPage: "ContentPrintElementaryPage",
    contentIsDone: true,
    contentStatus: "complete",
    contentSummaryView: true,
    criterionAnswers: {},
    criterionClickedTitles: {},
    criterionCompletionStatuses: {},
    criterionScores: {"content-middle-crt-1":{"criterionName":"content-middle-crt-1","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":3,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-middle-crt-2":{"criterionName":"content-middle-crt-2","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":8,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-middle-crt-3":{"criterionName":"content-middle-crt-3","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":5,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-middle-crt-4":{"criterionName":"content-middle-crt-4","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":7,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-middle-crt-5":{"criterionName":"content-middle-crt-5","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":4,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false},"content-middle-crt-6":{"criterionName":"content-middle-crt-6","has_beneficial":false,"all_essential_yes":true,"essential_total_yes":2,"essential_total_no":0,"beneficial_total_yes":0,"beneficial_total_no":0,"answered_all_complete":true,"exceeds":true,"meets":false,"doesnotmeet":false}},
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

test ('Content Print Middle Page renders correctly', () => {
    result = renderer.create(
        <ContentPrintMiddlePage {...contentMidldleProps}/>,
    );

    let tree = result.toJSON();
    expect(tree).toMatchSnapshot();
});