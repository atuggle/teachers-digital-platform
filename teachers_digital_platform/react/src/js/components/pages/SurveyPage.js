import React from "react";

export default class SurveyPage extends React.Component {
    handleChange(e) {
        const textdata = e.target.value;
        this.props.changeText(textdata);
    }

    render() {
        return (
            <div>
                <input value={this.props.textdata} onChange={this.handleChange.bind(this)} />
            </div>
        );
    }
}
