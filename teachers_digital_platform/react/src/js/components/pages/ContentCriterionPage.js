import React from "react";

import ContentCriterion from "../CriterionComponents/ContentCriterionComponent";

export default class ContentCriterionPage extends React.Component {

    render() {
        return (
            <div>
                <h1 className="block">{this.props.currentPage}</h1>
                <div className="CriterionPageTextFormat">
                    <h1>Criterion 1</h1>
                    <p>Does the curriculum address grade-level appropriate topics for saving and investing? Select yes if the following components are addressed. Select no if the following components are not addressed.</p>

                    <ContentCriterion currentPage={this.props.currentPage}
                            contentText={this.props.contentText}
                            changeContentText={this.props.changeContentText}
                            changeContentRadio={this.props.changeContentRadio}/>

                    <h1>Criterion 2: {this.props.currentPage}</h1>
                    <p>Does the curriculum address grade-level appropriate topics for saving and investing? Select yes if the following components are addressed. Select no if the following components are not addressed.</p>

                    <ContentCriterion currentPage={this.props.currentPage}
                            contentText={this.props.contentText}
                            changeContentText={this.props.changeContentText}
                            changeContentRadio={this.props.changeContentRadio}/>
                </div>
            </div>
        );
    }
}
