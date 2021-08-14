import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Animate from "rc-animate";

import * as UserActions from "../../../../redux-states/user/actions";

import CommonFunctions from "../../../../utils/CommonFunctions";

import { Menu, Card, Avatar, Typography } from "antd";
const { Title, Paragraph, Text, Link } = Typography;

import "./style.scss";

const { SubMenu } = Menu;
// submenu keys of first level

const SideMenuComponent = (props) => {
  const { children, permissions, permissions_uimenu_tree, profile } = props;
  let history = useHistory();
  const location = useLocation();

  useEffect(() => {
    return getKeyOfCurrentPath();
  }, [children]);

  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [show, setShow] = useState(true);

  const rootSubmenuKeys = permissions.map((value) => value.id);

  function getKeyOfCurrentPath() {
    const url = location.pathname;
    const found = permissions.find((element) => element.url_path == url);

    if (found !== undefined) {
      setSelectedKeys([`${found.id}`]);
      setTimeout(() => {
        const arParents = CommonFunctions.getAllParentsOfTree(
          permissions,
          found,
          [`${found.id}`]
        );
        setOpenKeys(arParents);
        setShow(true);
      }, 500);
    }
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

  const Acronym = CommonFunctions.getAcronym(
    `${profile.firstname} ${profile.lastname}`
  );
  return (
    <>
      <Card
        style={{
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
        }}
      >
        <Title level={5}>{`~ ${CommonFunctions.generateGreetings()} ~`}</Title>

        <Avatar
          size="large"
          style={{
            backgroundColor: CommonFunctions.getAcronymColor(Acronym),
            verticalAlign: "middle",
          }}
        >
          {Acronym}
        </Avatar>

        <Title level={4}>{`${profile.firstname} ${profile.lastname}`}</Title>
      </Card>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  permissions_uimenu_tree: state.user.permissions_uimenu_tree,
  permissions: state.user.permissions,
  profile: state.user.profile,
});
const mapDispatchToProps = {
  logoutUser: UserActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuComponent);
