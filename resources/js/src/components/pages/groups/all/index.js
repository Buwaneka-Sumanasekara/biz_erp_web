import React,{useEffect} from "react";
import {connect} from 'react-redux';

import DefaultTemplate from "../../../templates/default";

const GroupCreatePage = (props) => {
  const {match}= props;
    useEffect(() => {
   
    }, []);
  
   

  return (
    <DefaultTemplate title={`Group`}>
      <div>Group Specific  {match.params.id}</div>
    </DefaultTemplate>
  );
};


const mapStateToProps = state => ({
 
});
const mapDispatchToProps = {

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupCreatePage);
