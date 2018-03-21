import React from "react";

export default class CriterionAnswerComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            answer: ""
        }
    }

    render () {
        return (
            <div>
                <form>
                    <input type = "radio" name = "yesButton" value = "yes"> Yes </input>
                    <input type = "radio" name = "noButton" value = "no"> No </input>
                    <input type = "radio" name = "NAButton" value = "NA"> N/A </input>
                </form>
            </div>
        )
    }
}