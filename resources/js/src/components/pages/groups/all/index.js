import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import DefaultTemplate from "../../../templates/default";

import { GroupListTable } from "../../../UI/molecules";
import { GroupCreateModal } from "../../../UI/organisms";

import * as ProductActions from "../../../../redux-states/product/actions";

const GroupCreatePage = (props) => {
  const { match } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [Error, setError] = useState("");
  const [arGroupData, setGroupArray] = useState([]);

  const GroupId = match.params.id;

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
    <DefaultTemplate
      title={`Group - Level ${GroupId}`}
      extra={[<Button key={1} onClick={()=>setModalVisible(true)} >{"New"}</Button>]}
    >
      <GroupListTable data={arGroupData} isLoading={isLoading} />
      <GroupCreateModal
      GroupNo={GroupId}
      GroupName={`Level ${GroupId}`}
        isVisible={isModalVisible}
        onSuccessAndClose={() => {
          onLoadGroupData();
          setModalVisible(false);
        }}
        onClosed={() => setModalVisible(false)}
      />
    </DefaultTemplate>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  getAllGroups: ProductActions.getAllGroups,
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupCreatePage);
