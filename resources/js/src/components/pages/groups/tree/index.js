import React,{useEffect} from "react";
import {connect} from 'react-redux';
import { useHistory } from "react-router-dom";
import DefaultTemplate from "../../../templates/default";

const GroupTreePage = (props) => {

  const {match}= props;

    useEffect(() => {
   
    }, []);
  

  return (
    <DefaultTemplate>
      <div>Group Tree</div>
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
)(GroupTreePage);
