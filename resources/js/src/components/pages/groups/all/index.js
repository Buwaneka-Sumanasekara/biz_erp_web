import React,{useEffect,useState} from "react";
import { Button } from "react-bootstrap";
import {connect} from 'react-redux';

import DefaultTemplate from "../../../templates/default";
import {GroupListTable} from "../../../UI/molecules"


import * as ProductActions from "../../../../redux-states/product/actions";


const GroupCreatePage = (props) => {
  const {match}= props;
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [arGroupData, setGroupArray] = useState([]);

  const GroupId=match.params.id;

    useEffect(() => {
      onLoadGroupData();
    }, [GroupId]);
  
   
  

    function onLoadGroupData() {
      
      setLoading(true);
      setError("");
      props
        .getAllGroups(GroupId)
        .then((res) => {
            console.log(res);
            setGroupArray(res);
        })
        .catch((er) => {
          setError(er.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }

  return (
    <DefaultTemplate title={`Group - Level ${GroupId}`} extra={[<Button key={1} >{"New"}</Button>]}>
        <GroupListTable data={arGroupData} isLoading={isLoading}/>
    </DefaultTemplate>
  );
};


const mapStateToProps = state => ({
 
});
const mapDispatchToProps = {
  getAllGroups: ProductActions.getAllGroups,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupCreatePage);
