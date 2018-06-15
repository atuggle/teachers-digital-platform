import React from "react";

export default class RadioButtonSelectable extends React.Component {
    render() {
        let ariaChecked = "false";
        let svgClasses = "m-form-field_radio-icon";

        if (this.props.isChecked) {
            ariaChecked = "true";
            svgClasses += " is-active";
        }

        if (!this.props.showButton) {
            return null;
        } else {
            return (
                <div className="m-form-field
                                m-form-field__radio
                                m-form-field__display
                                m-form-field__lg-target">
                    <div className="a-label">
                    <input className="a-radio" type="radio" value="0"
                        id={this.props.criterionRefId}
                        name={this.props.name}
                        ref={this.props.ref}
                        checked={this.props.criterionAnswers["quality-crt-question-1.1.2"] === 'yes'}
                        onChange={() => {this.criterionAnswerChanged('quality-crt-question-1.1.2', 'yes')}} />
                    </div>
                </div>
            );
        }
    }
}



////


export default class RadioButtonEditable extends React.Component {

    generateUniqueId() {
        return this.props.currentCriterionRefId + "_" + this.props.uniqueId;
    }

    render() {
        if (this.props.showButton === "false" && this.props.radioText === "NA") {
            return null;
        } else {
            return (
                <div className="m-form-field
                                m-form-field__radio
                                m-form-field__lg-target">
                    <input className="a-radio" type="radio" value="0"
                        id={this.generateUniqueId()}
                        name={this.props.currentCriterionRefId}
                        ref={this.props.currentCriterionRefId}
                        checked={this.props.isChecked}
                        onChange={() => {this.props.radioButtonClicked()}} />

                    <label className="a-label" htmlFor={this.generateUniqueId()}>
                        {this.props.radioText}
                    </label>
                </div>
            );
        }
    }
}