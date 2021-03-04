import React from "react";
import { Link } from "gatsby";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

function Projet2() {
  return (
    <Content style={{ padding: "0 50px" }} defKey="2">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Projet 2</Breadcrumb.Item>
      </Breadcrumb>

      <Link to="/">retour page d 'acceuil </Link>

      <h1> Fs stream - NodeJS </h1>

      <br />
    </Content>
  );
}

export default Projet2;
