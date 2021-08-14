import React,{useEffect} from "react";
import {connect} from 'react-redux';

import DefaultTemplate from "../../../templates/default";



const GroupMappingPage = (props) => {
  const {match}= props;
    useEffect(() => {
   
    }, []);
  

    
   


  return (
    <DefaultTemplate title={`Group Mapping`}>
    
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
)(GroupMappingPage);
