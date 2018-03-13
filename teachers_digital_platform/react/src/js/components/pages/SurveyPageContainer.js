import React from "react";

import C from "../../constants";
import ContentCriterionPage from "./ContentCriterionPage";
import UtilityCriterionPage from "./UtilityCriterionPage";
import QualityCriterionPage from "./QualityCriterionPage";
import EfficacyCriterionPage from "./EfficacyCriterionPage";
import StartCriterionPage from "./StartCriterionPage";

export default class SurveyPageContainer extends React.Component {
    render() {
        if (this.props.currentPage === C.CONTENT_DISTINCTIVE) {
            return (
                <div>
                    <ContentCriterionPage currentPage={this.props.currentPage}
                        contentText={this.props.contentText}
                        changeContentText={this.props.changeContentText}
                        changeContentRadio={this.props.changeContentRadio}/>
                </div>
            );
        } else if (this.props.currentPage === C.UTILITY_DISTINCTIVE) {
            return (
                <div>
                    <UtilityCriterionPage currentPage={this.props.currentPage}
                        utilityText={this.props.utilityText}
                        changeUtilityText={this.props.changeUtilityText}
                        changeUtilityRadio={this.props.changeUtilityRadio}/>
                </div>
            );
        } else if (this.props.currentPage === C.QUALITY_DISTINCTIVE) {
            return (
                <div>
                    <QualityCriterionPage currentPage={this.props.currentPage}
                        qualityText={this.props.qualityText}
                        changeQualityText={this.props.changeQualityText}
                        changeQualityRadio={this.props.changeQualityRadio}/>
                </div>
            );
        } else if (this.props.currentPage === C.EFFICACY_DISTINCTIVE) {
            return (
                <div>
                    <EfficacyCriterionPage currentPage={this.props.currentPage}
                        efficacyText={this.props.efficacyText}
                        changeEfficacyText={this.props.changeEfficacyText}
                        changeEfficacyRadio={this.props.changeEfficacyRadio}/>
                </div>
            );
        } else {
            return (<StartCriterionPage currentPage={this.props.currentPage} />);
        }
    }
}
