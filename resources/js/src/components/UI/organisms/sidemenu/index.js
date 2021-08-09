import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";

import * as UserActions from "../../../../redux-states/user/actions";

import CommonFunctions from "../../../../utils/CommonFunctions";

import { Menu } from "antd";

const { SubMenu } = Menu;

// submenu keys of first level

const SideMenuComponent = (props) => {
  const { children, permissions, permissions_uimenu_tree } = props;
  let history = useHistory();
  const location = useLocation();


  useEffect(()=>{
    return getKeyOfCurrentPath();
  },[children])


  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys,setSelectedKeys] = useState([]);
  

  const rootSubmenuKeys = permissions.map((value) => value.id);


  function getKeyOfCurrentPath(){
    const url=location.pathname;
    const found = permissions.find((element) => element.url_path == url);
    setSelectedKeys([`${found.id}`]);
    setTimeout(()=>{
     const arParents=CommonFunctions.getAllParentsOfTree(permissions,found,[`${found.id}`])
      setOpenKeys(arParents);
     
    },500);
  }
  

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function handleClick(e) {
    setSelectedKeys([e.key]);
    const found = permissions.find((element) => element.id == e.key);

    if (found && found.url_path !== "") {
      history.push(found.url_path);
    }
  }

  function renderSubMenu(menu) {
    if (menu.childNodes.length > 0) {
      return (
        <SubMenu key={menu.id} title={menu.display_name}>
          {menu.childNodes
            .sort((a, b) => {
              return a.order < b.order ? -1 : 1;
            })
            .map((submenu, i) => {
              if (submenu.childNodes.length > 0) {
                return renderSubMenu(submenu);
              } else {
                return (
                  <Menu.Item key={submenu.id}>{submenu.display_name}</Menu.Item>
                );
              }
            })}
        </SubMenu>
      );
    } else {
      return <Menu.Item key={menu.id}>{menu.display_name}</Menu.Item>;
    }
  }

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={handleClick}
      selectedKeys={selectedKeys}
    >
      {permissions_uimenu_tree
        .sort((a, b) => {
          return a.order < b.order ? -1 : 1;
        })
        .map((menu, i) => renderSubMenu(menu))}
    </Menu>
  );


};

const mapStateToProps = (state) => ({
  permissions_uimenu_tree: state.user.permissions_uimenu_tree,
  permissions: state.user.permissions,
});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
