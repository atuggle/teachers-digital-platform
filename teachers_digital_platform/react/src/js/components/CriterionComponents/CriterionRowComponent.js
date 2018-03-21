import React from "react";

import CriterionAnswerComponent from "./CriterionAnswerComponent";

export default class CriterionRowComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            rowAnswer: ""
        }
    }
    
    render () {
        return (
            <div>
                <p>
                    This is a test Comment to see if this works:{this.state.rowAnswer}
                </p>
            </div>
        )
    }
}