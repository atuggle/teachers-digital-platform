import React from "react";

export default class RequiredListItemLink extends React.Component {
    getElementLinkWrapperId(element, number, criterionKey) {        
        if (element || number < 2) {
            return element;
        }

        let elementId = criterionKey + "-" + number;
        element = document.getElementById(elementId);

        return this.getElementLinkWrapperId(element, number -1, criterionKey);
    }

    scrollToRequiredCriterion() {
        let elementId = this.props.criterion.criterionRefId.replace("_beneficial", "");
        let element = document.getElementById(elementId + "a");
        if (element === null) {
            let criterionKey = elementId.substr(0, elementId.indexOf(".")-2);
            let startIndx = elementId.indexOf(".") - 1;
            let lastChar = elementId.substr(startIndx, startIndx);
            let number = parseInt(lastChar, 10);
            element = this.getElementLinkWrapperId(element, number, criterionKey)
        }

        element.scrollIntoView();
        window.scrollBy(0, -20);
    }

    getComponentText() {
        return (<div dangerouslySetInnerHTML={{__html: this.props.criterion.componentText}} />);
    }

    render() {
        return (
            <li>
                <button className="a-btn__heading a-btn a-btn__link" data-gtm_ignore="true" onClick={(e) => {this.scrollToRequiredCriterion();}}>
                    {this.getComponentText()}
                </button>
            </li>
        );
    }
}