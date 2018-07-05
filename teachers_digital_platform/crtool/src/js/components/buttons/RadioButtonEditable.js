import React from "react";

export default class RadioButtonEditable extends React.Component {

    generateUniqueId() {
        return this.props.criterionRefId + "_" + this.props.letter;
    }

    render() {
        let ariaChecked = "false";
        let svgClasses = "m-form-field_radio-icon";

        if (this.props.isChecked) {
            ariaChecked = "true";
            svgClasses += " is-active";
        }

        if (this.props.showButton === "false" && this.props.radioText === "NA") {
            return null;
        } else {
            return (
                <div className="m-form-field
                                m-form-field__radio
                                m-form-field__lg-target">
                    <input className="a-radio" type="radio" value="0"
                        id={this.generateUniqueId()}
                        name={this.props.text}
                        ref={this.props.text}
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
