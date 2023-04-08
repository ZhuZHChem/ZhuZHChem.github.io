import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Layout, Menu, Button } from "@arco-design/web-react";
import {
  IconHome,
  IconCalendar,
  IconCaretRight,
  IconCaretLeft,
} from "@arco-design/web-react/icon";

const MenuItem = Menu.Item;
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="layout-collapse-demo">
      <Sider collapsed={collapsed} collapsible trigger={null} breakpoint="xl">
        <div className="logo" />
        <Menu
          defaultOpenKeys={["1"]}
          defaultSelectedKeys={["0_3"]}
          style={{ width: "100%" }}
        >
          <Link to={"/home"}>
            <MenuItem key="home">
              <IconHome />
              Home
            </MenuItem>
          </Link>

          <Link to={"/publication"}>
            <MenuItem key="publication">
              <IconCalendar />
              Publication
            </MenuItem>
          </Link>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Button
            shape="round"
            className="trigger"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <IconCaretRight /> : <IconCaretLeft />}
          </Button>
        </Header>
        <Layout style={{ padding: "0 24px" }}>
          <Content>
            <Outlet />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
