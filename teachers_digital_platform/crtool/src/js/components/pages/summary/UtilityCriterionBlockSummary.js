import React from "react";

import CriterionComponent from "../../criterion/CriterionComponent";
import { UtilityContent } from "../../../content_data/utilityContent";
import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";

export default class UtilityCriterionBlockSummary extends React.Component {

    render() {
        let wrapperClasses = "u-page-break-before";

        if (this.props.hasBottomBorder === "true") {
            wrapperClasses += " block block__flush-top block__padded-bottom block__border-bottom";
        }

        return (
            <React.Fragment>
                {this.props.qualitySummaryView !== "true" &&
                <div className={wrapperClasses}>
                    {UtilityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={UtilityContent.criterion[i]} {...this.props} criterionAnswerChanged={this.props.criterionStudyAnswerChanged}/>)}
                </div>
                }
                {this.props.utilityInProgress === "complete" && this.props.utilitySummaryView === "true" &&
                    <div className={wrapperClasses}>
                        <DimensionIconTitleComponent
                            {...this.props}
                            dimensionName="Utility"
                            dimensionTitle={"Utility criterion"}
                            isH1="true" />
                        <p className="lead-paragraph">
                            The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.
                        </p>
                        {UtilityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={UtilityContent.criterion[i]} {...this.props} />)}
                    </div>
                }
                {this.props.utilityInProgress !== "complete" && this.props.utilitySummaryView === "true" &&
                    <DimensionNotReviewedComponent dimensionTitle="Utility criterion" dimensionName="Utility" {...this.props} />
                }
            </React.Fragment>
        );
    }
}
