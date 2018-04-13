import React from "react";

export default class SaveWorkModal extends React.Component {
    constructor(props) {
      super(props);

      this.setWrapperRef = this.setWrapperRef.bind(this);
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /** Set the wrapper ref */
    setWrapperRef(node) {
    this.wrapperRef = node;
    }

    /** Alert if clicked on outside of element */
    handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        let saveWorkModalDialog = document.getElementById('save-work-modal-dialog');
        if (saveWorkModalDialog.classList.contains('o-modal__visible')) {
          saveWorkModalDialog.classList.remove('o-modal__visible');
        }
      }
    }

    openSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('save-work-modal-dialog');
        saveWorkModalDialog.classList.add('o-modal__visible');
    }

    closeSaveWorkModalDialog() {
        let saveWorkModalDialog = document.getElementById('save-work-modal-dialog');
        saveWorkModalDialog.classList.remove('o-modal__visible');
    }

    render() {
        return (
            <div id="example-modal-desc">
                <p>This tool uses cookies to temporarily save your work. To load answers you’ve already completed, use the same computer and browser, and don't clear your cookies.</p>
                <p>To save a permanent copy of your work, please download a summary of each dimension as you complete it. You can download an overall summary of findings after completing any dimension as well.</p>
                <p>You can only work on a single curriculum at a time.</p>
            </div>
        );
    }
}
