import React from "react";

import C from "../constants"; 
import ContentDistinctive from "./distinctives/ContentDistinctive";
import UtilityDistinctive from "./distinctives/UtilityDistinctive";
import QualityDistinctive from "./distinctives/QualityDistinctive";
import EfficacyDistinctive from "./distinctives/EfficacyDistinctive";
import SurveyPageContainer from "./pages/SurveyPageContainer";

export default class CustomerReviewToolComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      textdata: "Hello World",
      title: "Nothing",
      description: "Nothing",
      criteria: "Nothing",
      estimatedtime: "Nothing",
      distinctive: C.START_DISTINCTIVE,
      currentPage: C.START_DISTINCTIVE,
      utilityInProgress: "",
      contentInProgress: "",
      qualityInProgress: "",
      efficacyInProgress: "",
      contentText: "",
      utilityText: "",
      qualityText: "",
      efficacyText: "",
      contentIndicator1: "na",
      utilityIndicator1: "na",
      qualityIndicator1: "na",
      efficacyIndicator1: "na",
    };
  }

  changeContentText(contentText) {
    this.setState({contentText});
    this.setState({contentInProgress: "In Progress..."});
  }

  changeContentRadio(val) {
    this.setState({contentIndicator1: val})
    this.setState({contentInProgress: "In Progress..."});
  }

  changeUtilityText(utilityText) {
    this.setState({utilityText});
    this.setState({utilityInProgress: "In Progress..."});
  }

  changeUtilityRadio(val) {
    this.setState({utilityIndicator1: val})
    this.setState({utilityInProgress: "In Progress..."});
  }

  changeQualityRadio(val) {
    this.setState({qualityIndicator1: val})
    this.setState({qualityInProgress: "In Progress..."});
  }

  changeQualityText(qualityText) {
    this.setState({qualityText});
    this.setState({qualityInProgress: "In Progress..."});
  }

  changeEfficacyText(efficacyText) {
    this.setState({efficacyText});
    this.setState({efficacyInProgress: "In Progress..."});
  }

  changeEfficacyRadio(val) {
    this.setState({efficacyIndicator1: val})
    this.setState({efficacynProgress: "In Progress..."});
  }

  distinctiveClicked(clickedDistinctive) {
    this.setState({clickedDistinctive});
    this.setState({currentPage:clickedDistinctive});
  }

  render() {
    return (
      <div>
        <div className="DistinctivesBlock" >
          <ContentDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.contentInProgress} title="Content" criteria="6 criteria" estimatedtime="Est. time 30 min" description="Covers core knowledge and skills in content standards" />
          <UtilityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.utilityInProgress} title="Utility"  criteria="7 criteria" estimatedtime="Est. time 30 min" description="Supports effective teaching" />
          <QualityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.qualityInProgress} title="Quality" criteria="5 criteria" estimatedtime="Est. time 30 min" description="Accurate and well presented" />
          <EfficacyDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} inProgress={this.state.efficacytInProgress} title="Efficacy" criteria="3 criteria" estimatedtime="Est. time 30 min" description="Improves financial knowledge, skills, or behaviors" />
        </div>
        <div >
          <SurveyPageContainer className="SurveyPage" 
            currentPage={this.state.currentPage} 
            contentText={this.state.contentText}
            changeContentText={this.changeContentText.bind(this)}
            changeContentRadio={this.changeContentRadio.bind(this)}
            
            utilityText={this.state.utilityText}
            changeUtilityText={this.changeUtilityText.bind(this)}
            changeUtilityRadio={this.changeUtilityRadio.bind(this)}
            
            qualityText={this.state.qualityText}
            changeQualityText={this.changeQualityText.bind(this)}
            changeQualityRadio={this.changeQualityRadio.bind(this)}
            
            efficacyText={this.state.efficacyText}
            changeEfficacyText={this.changeEfficacyText.bind(this)}
            changeEfficacyRadio={this.changeEfficacyRadio.bind(this)}
             />
        </div>
      </div>
    );
  }
}
