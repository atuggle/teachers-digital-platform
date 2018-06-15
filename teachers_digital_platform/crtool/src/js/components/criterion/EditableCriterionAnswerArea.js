import React from "react";

import RadioButton from "../buttons/RadioButton";
import RadioButtonEditable from "../buttons/RadioButtonEditable";

export default class CriterionAnswerArea extends React.Component {

    showBeneficialText() {
        if (this.props.componentData.showBeneficialText) {
            return (<p className="o-survey_question-helper">Beneficial, but not essential.</p>);
        }
        return null;
    }

    renderComponentText() {
        let text = this.props.componentData.componentText;
        if (text === undefined || text === "") {
            text = <p className="o-survey_question-helper">No information provided</p>;
        }
        if (this.props.componentData.hasInlineHtml && text !== undefined) {
            return (<div className="u-mb15" dangerouslySetInnerHTML={{__html: text}} />);
        } else {
            return (<p>{text}</p>);
        }
    }

    renderTextFieldValue() {
        if (this.props.componentData.criterionTextRefId !== undefined &&
            this.props.criterionAnswers[this.props.componentData.criterionTextRefId] !== undefined &&
            this.props.componentData.criterionTextLabel !== undefined) {

            let text = this.props.criterionAnswers[this.props.componentData.criterionTextRefId];
            if (text === undefined || text === "") {
                text = <p className="o-survey_question-helper">No information provided</p>;
            }
            return (
                <div className="m-form-field m-form-field__text u-mt30">
                    <label className="a-label a-label__heading">
                        {this.props.componentData.criterionTextLabel}
                    </label>
                    <p>
                        {text}
                    </p>
                </div>
            );
        } else {
            return null;
        }
    }

    generateUniqueId() {
        return "radio_" + this.props.componentData.criterionRefId;
    }

    render() {
        return (
            <fieldset className="o-survey_fieldset">
                <div className="o-survey_component">
                    <div className="o-survey_question">
                        <legend className="o-survey_legend" id={this.generateUniqueId()}>
                            {this.renderComponentText()}
                            {this.showBeneficialText()}
                        </legend>
                        {this.renderTextFieldValue()}
                    </div>
                    <div className="o-survey_answer" role="radiogroup" aria-describedby={this.generateUniqueId()}>
                        <RadioButtonEditable
                            radioText="Yes"
                            showButton="true"
                            text={this.props.text}
                            isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'yes'}
                            {...this.props} />
                        <RadioButtonEditable
                            radioText="No"
                            showButton="true"
                            text={this.props.text}
                            isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'no'}
                            {...this.props} />
                        { // if NA button is present
                            this.props.componentData.showNaButton === true &&
                            <RadioButtonEditable
                                radioText="N/A"
                                showButton={this.props.componentData.showNaButton}
                                text={this.props.text}
                                isChecked={this.props.criterionAnswers[this.props.componentData.criterionRefId] === 'na'}
                                {...this.props} />
                        }
                    </div>
                </div>
            </fieldset>
        );
    }
}

// export default class RadioButtonEditable extends React.Component {

//     generateUniqueId() {
//         return this.props.currentCriterionRefId + "_" + this.props.uniqueId;
//     }

//     render() {
//         if (this.props.showButton === "false" && this.props.radioText === "NA") {
//             return null;
//         } else {
//             return (
//                 <div className="m-form-field
//                                 m-form-field__radio
//                                 m-form-field__lg-target">
//                     <input className="a-radio" type="radio" value="0"
//                         id={this.generateUniqueId()}
//                         name={this.props.currentCriterionRefId}
//                         ref={this.props.currentCriterionRefId}
//                         checked={this.props.isChecked}
//                         onChange={() => {this.props.radioButtonClicked()}} />

//                     <label className="a-label" htmlFor={this.generateUniqueId()}>
//                         {this.props.radioText}
//                     </label>
//                 </div>
//             );
//         }
//     }
// }