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
      criteria: "Nothing",
      estimatedtime: "Nothing",
      distinctive: C.START_DISTINCTIVE,
      currentPage: C.START_DISTINCTIVE,
      utilityInProgress: "",
      contentInProgress: localStorage.getItem("contentInProgress"),
      qualityInProgress: localStorage.getItem("qualityInProgress"),
      efficacyInProgress: "",
      contentText: localStorage.getItem("contentText"),
      utilityText: localStorage.getItem("utilityText"),
      qualityText: localStorage.getItem("qualityText"),
      efficacyText: localStorage.getItem("efficacyText"),
      contentIndicator1: "na",
      utilityIndicator1: "na",
      qualityIndicator1: "na",
      efficacyIndicator1: "na",
    };
  }

  changeContentText(contentText) {
    localStorage.setItem("contentText", contentText);
    this.setState({contentText});

    if(contentText !== ""){
      localStorage.setItem("contentInProgress", "In Progress...");
    }
    else{
      localStorage.setItem("contentInProgress", "");
    }

    this.setState({contentInProgress: localStorage.getItem("contentInProgress")});
  }

  changeContentRadio(val) {
    this.setState({contentIndicator1: val})
    localStorage.setItem("contentIndicator1", val);
    localStorage.setItem("contentInProgress", "In Progress...");
    this.setState({contentInProgress: localStorage.getItem("contentInProgress")});
  }

  changeUtilityText(utilityText) {
    this.setState({utilityText});
    if(utilityText !== ""){
      this.setState({utilityInProgress: "In Progress..."});
    }
    else{
      this.setState({utilityInProgress: ""});
    }
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
    if(qualityText !== ""){
      this.setState({qualityInProgress: "In Progress..."});
    }
    else{
      this.setState({qualityInProgress: ""});
    }
  }

  changeEfficacyText(efficacyText) {
    this.setState({efficacyText});
    if(efficacyText !== ""){
      this.setState({efficacyInProgress: "In Progress..."});
    }
    else{
      this.setState({efficacyInProgress: ""});
    }
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
      <div class="block block__flush-top">
        <h1>Curriculum Review</h1>
        <p>Middle School Example Curriculum</p>
        <p>Start the review by selecting a dimension. You do not need to complete all dimensions in one sitting. You’ll be able to download a dimension report for each dimension as well as a summary report at the end.</p>
        
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
