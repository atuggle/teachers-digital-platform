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
      distinctive: C.START_DISTINCTIVE
    };
  }

  changeText(textdata) {
    this.setState({textdata});
  }

  distinctiveClicked(clickedDistinctive) {
    this.setState({clickedDistinctive});
    this.setState({currentPage:clickedDistinctive});
  }

  render() {
    return (
      <div>
        <div className="DistinctivesBlock" >
          <ContentDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} title="Content" criteria="6 criteria" estimatedtime="Est. time 30 min" description="Covers core knowledge and skills in content standards" />
          <UtilityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} title="Utility"  criteria="7 criteria" estimatedtime="Est. time 30 min" description="Supports effective teaching" />
          <QualityDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} title="Quality" criteria="5 criteria" estimatedtime="Est. time 30 min" description="Accurate and well presented" />
          <EfficacyDistinctive distinctiveClicked={this.distinctiveClicked.bind(this)} title="Efficacy" criteria="3 criteria" estimatedtime="Est. time 30 min" description="Improves financial knowledge, skills, or behaviors" />
        </div>
        <div >
          <SurveyPageContainer className="SurveyPage" currentPage={this.state.currentPage} />
        </div>
      </div>
    );
  }
}
