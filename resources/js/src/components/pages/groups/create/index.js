import React,{useEffect} from "react";
import {connect} from 'react-redux';

import DefaultTemplate from "../../../templates/default";

const GroupCreatePage = (props) => {

    useEffect(() => {
   
    }, []);
  
   

  return (
    <DefaultTemplate>
      <div>Group create</div>
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
