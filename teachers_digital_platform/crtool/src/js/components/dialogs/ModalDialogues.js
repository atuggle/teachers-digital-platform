import React from "react";
import SaveWorkModal from "./SaveWorkModal";
import StartOverModal from "./StartOverModal";

export default class ModalDialogues extends React.Component {
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
      }

      renderDialogue() {
          if(this.props.dialogue==='SaveMyWork'){
            return(SaveWorkModal);
          }
          else {
            return (StartOverModal);
          }
      }
      
    render() {
        return(
            <div className="l-survey-top">
                <button type="button" onClick={(e) => {this.openSaveWorkModalDialog()}}>Can I save my work?</button>
                <div className="o-modal"
                    id="save-work-modal-dialog"
                    aria-hidden="true"
                    role="alertdialog"
                    aria-labelledby="example-modal-title"
                    aria-describedby="example-modal-desc">
                    <div className="o-modal_backdrop"></div>
                    <div className="o-modal_container">
                    <form className="o-modal_content">
                      <span ref={this.setWrapperRef}>
                        <this.renderDialogue />
                      </span>
                    </form>
                    </div>
                </div>
            </div>
        );
    }
}