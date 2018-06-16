import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import RequiredListItemLink from "../common/RequiredListItemLink";

import { ContentElementaryCriterion } from "../../content_data/contentElementary";
import { ContentMiddleCriterion } from "../../content_data/contentMiddle";
import { ContentHighCriterion } from "../../content_data/contentHigh";
import { QualityContent } from "../../content_data/qualityContent";
import { UtilityContent } from "../../content_data/utilityContent";
import { EfficacyContent } from "../../content_data/efficacyContent";

export default class FormLevelErrorMessageComponent extends React.Component {
    getDimensionData() {
        if (this.props.currentPage === C.CONTENT_PAGE) {
            if (this.props.gradeRange === C.GRADE_ELEMENTARY) {
                return ContentElementaryCriterion;
            } else if (this.props.gradeRange === C.GRADE_MIDDLE) {
                return ContentMiddleCriterion;
            } else {
                return ContentHighCriterion;
            }
        } else if (this.props.currentPage === C.QUALITY_PAGE) {
            return QualityContent;
        } else if (this.props.currentPage === C.UTILITY_PAGE) {
            return UtilityContent;
        } else if (this.props.currentPage === C.EFFICACY_PAGE) {
            return EfficacyContent;   
        }
    }

    getAllCriterionForCurrentPage() {
        let content = this.getDimensionData();
        let allCriterionObjects = [];

        for (let criterionNumber in content.criterion) {
            for (let rowIndex in content.criterion[criterionNumber].rows) {
                for (let componentIndex in content.criterion[criterionNumber].rows[rowIndex].components) {
                    allCriterionObjects.push(content.criterion[criterionNumber].rows[rowIndex].components[componentIndex]);
                }
            }
        }

        return allCriterionObjects;
    }

    getMissingRequierdFields() {
        let missingCriterion = []; 
        let currentDimension = this.props.currentPage.toLowerCase();
        let allCriterionForPage = this.getAllCriterionForCurrentPage();

        for (let index in allCriterionForPage) {
            let key = allCriterionForPage[index].criterionRefId;
            let value = this.props.criterionAnswers[key];
            if (key.indexOf(currentDimension) >= 0 && key.indexOf("optional") < 0) {
                if (value === "" || value === null || value === undefined) {
                    missingCriterion.push(allCriterionForPage[index]);
                }
            }
        }

        return missingCriterion;
    }
    render() {
        return (
            <div className="m-notification
                    m-notification__visible
                    m-notification__error
                    u-mb30">
                <SvgIcon icon={C.ICON_X_ROUND} />
                <div className="m-notification_content">
                    <div className="h4 m-notification_message">
                        <p>The following form fields are incomplete or have errors:</p>
                        <ul>
                            {
                                this.getMissingRequierdFields().map(
                                    (criterion, i) => 
                                    <RequiredListItemLink key={i} {...this.props} criterion={criterion}/>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}