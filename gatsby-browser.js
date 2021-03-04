import "./src/style/style.css";
import React from "react";
import { Link } from "gatsby"
import { Layout, Menu } from "antd";

const { Header, Footer } = Layout;





export const wrapPageElement = ({ defKey, element, props }) => {


  return (
    <Layout className="layout" {...props}>
      <Header>
        <div className="logo">
          {" "}
          <h1 style={{ margin: "margin 0", marginTop: "-16px", float: "left" }}>
            <Link to="/" style={{ color: "white" }}>
              Code Mountain
            </Link>
          </h1>{" "}
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={defKey}>
            
          <Menu.Item key="1"><Link to='/projet1'>Projet 1</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/projet2'>Projet 2</Link></Menu.Item>
          <Menu.Item key="3"><Link to='/projet3'>Projet 3</Link></Menu.Item>
        </Menu>
      </Header>
      {element}
      <Footer style={{ textAlign: "center" }}>
        AB ©2021 Created by Aymeric Bertrand
      </Footer>
    </Layout>
  );
};
