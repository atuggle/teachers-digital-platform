import React from "react";

import C from "../../constants";
import ContentCriterionPage from "./ContentCriterionPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {
    render() {
        return (
            <div>
                {this.props.currentPage === C.CONTENT_DISTINCTIVE ? (
                    <ContentCriterionPage currentPage={this.props.currentPage} />
                ) : (
                    <StartCriterionPage currentPage={this.props.currentPage} />
                )}
            </div>
            
        );
    }
}
