import React from "react";

import CriterionRowComponent from "./CriterionRowComponent";

export default class ContentCriterionComponent extends React.Component {
    changeContentText(e) {
        const contentText = e.target.value;
        this.props.changeContentText(contentText);
    }

    changeContentRadio(e) {
        this.props.changeContentRadio("In Progress...");
    }   

    render () {
        return (
            <div className="CriterionPageTextFormat">
                <ol>
                    <li>
                        <h4>Indicator</h4>
                        <p>People save for the future, and might have different goals for saving and make different choices about how to save.</p>
                        <h4>Component</h4>
                        <p>One can save money in various ways, including at home in a piggy bank or at a commercial bank, credit union, or savings and loan institution.</p>
                        <p>Saving helps individuals act on future opportunities, meet short-term and long-term goals, and address financial emergencies.</p>
                        <div className="m-form-field m-form-field__radio">
                            <input className="a-radio" type="radio" name="radio_1" id="test_1" onChange={this.changeContentRadio.bind(this)} />
                            <label className="a-label" >Yes</label>
                        </div>
                        <div className="m-form-field m-form-field__radio">
                            <input className="a-radio" type="radio" name="radio_1" id="test_2" onChange={this.changeContentRadio.bind(this)} />
                            <label className="a-label" >No</label>
                        </div>
                    </li>
                </ol>


                <h3>My notes</h3>
                <p className="m-form-field m-form-field__textarea">
                    <label className="a-label a-label__heading">
                        Write your notes for this criterion <em>(Optional)</em>
                    </label>
                    <br />
                    <textarea className="a-text-input" id="test_7" value={this.props.contentText} onChange={this.changeContentText.bind(this)} ></textarea>
                </p>
            </div>
        )
    }
}