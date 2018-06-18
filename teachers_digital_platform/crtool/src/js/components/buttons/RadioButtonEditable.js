import React from "react";

export default class RadioButtonEditable extends React.Component {

    generateUniqueId() {
        return this.props.componentData.criterionRefId + "_" + this.props.letter;
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
                        name={this.props.componentData.criterionRefId}
                        ref={this.props.componentData.criterionRefId}
                        checked={this.props.isChecked}
                        onChange= {this.props.criterionAnswerChanged} />

                    <label className="a-label" htmlFor={this.generateUniqueId()}>
                        {this.props.radioText}
                    </label>
                </div>
            );
        }
    }
}
