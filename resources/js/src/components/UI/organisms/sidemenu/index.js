import React, { useEffect, useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { connect } from "react-redux";


import * as UserActions from "../../../../redux-states/user/actions";

import { Menu } from "antd";

const { SubMenu } = Menu;

// submenu keys of first level

const SideMenuComponent = (props) => {
  const { children, permissions, permissions_tree } = props;
  let history = useHistory();

  const [openKeys, setOpenKeys] = useState([]);

  const rootSubmenuKeys = permissions.map((value) => value.id);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  function handleClick(e) {
  

    const found = permissions.find((element) => (element.id == e.key));

    if(found && found.url_path!==""){
        console.log("click", e);
        history.push(found.url_path);
    }
  }

  function renderSubMenu(menu) {
    if (menu.childNodes.length > 0) {
      return (
        <SubMenu key={menu.id} title={menu.display_name}>
          {menu.childNodes.map((submenu, i) => {
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
    >
      {permissions_tree.map((menu, i) => renderSubMenu(menu))}
    </Menu>
  );

  //   return (
  //     <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }}>
  //       <SubMenu key="sub1" title="Navigation One">
  //         <Menu.Item key="1">Option 1</Menu.Item>
  //         <Menu.Item key="2">Option 2</Menu.Item>
  //         <Menu.Item key="3">Option 3</Menu.Item>
  //         <Menu.Item key="4">Option 4</Menu.Item>
  //       </SubMenu>
  //       <SubMenu key="sub2"  title="Navigation Two">
  //         <Menu.Item key="5">Option 5</Menu.Item>
  //         <Menu.Item key="6">Option 6</Menu.Item>
  //         <SubMenu key="sub3" title="Submenu">
  //           <Menu.Item key="7">Option 7</Menu.Item>
  //           <Menu.Item key="8">Option 8</Menu.Item>
  //         </SubMenu>
  //       </SubMenu>
  //       <SubMenu key="sub4"  title="Navigation Three">
  //         <Menu.Item key="9">Option 9</Menu.Item>
  //         <Menu.Item key="10">Option 10</Menu.Item>
  //         <Menu.Item key="11">Option 11</Menu.Item>
  //         <Menu.Item key="12">Option 12</Menu.Item>
  //       </SubMenu>
  //     </Menu>
  //   );
};

const mapStateToProps = (state) => ({
  permissions_tree: state.user.permissions_tree,
  permissions: state.user.permissions,
});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
