import React from "react";

import CriterionComponent from "../../criterion/CriterionComponent";
import { QualityContent } from "../../../content_data/qualityContent";
import DimensionIconTitleComponent from "../../common/DimensionIconTitleComponent";
import DimensionNotReviewedComponent from "../../common/DimensionNotReviewedComponent";

export default class QualityCriterionBlockSummary extends React.Component {

    render() {
        let wrapperClasses = "u-page-break-before";

        if (this.props.hasBottomBorder === "true") {
            wrapperClasses += " block block__flush-top block__padded-bottom block__border-bottom";
        }

        return (
            <React.Fragment>
                {this.props.qualitySummaryView !== "true" &&
                <div className={wrapperClasses}>
                    {QualityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={QualityContent.criterion[i]} {...this.props} />)}
                </div>
                }
                {this.props.qualityInProgress === "complete" && this.props.qualitySummaryView === "true" &&
                    <div className={wrapperClasses}>
                        <DimensionIconTitleComponent
                            {...this.props}
                            dimensionName="Quality"
                            dimensionTitle={"Quality criterion"}
                            isH1="true" />
                        <p className="lead-paragraph">
                            The quality dimension assesses whether curriculum materials are clear, accurate, and objective and how easy the materials are for teachers and students to access.
                        </p>
                        {QualityContent.criterion.map((criterion, i) => <CriterionComponent key={i} criterionData={QualityContent.criterion[i]} {...this.props} />)}
                    </div>
                }
                {this.props.qualityInProgress !== "complete" && this.props.qualitySummaryView === "true" &&
                    <DimensionNotReviewedComponent dimensionTitle="Quality criterion" dimensionName="Quality" {...this.props} />
                }
            </React.Fragment>
        );
    }
}
