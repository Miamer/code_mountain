import React from "react";
import { Link } from "gatsby";
import { Layout, Breadcrumb } from "antd";

const { Content } = Layout;

function Projet3() {
  return (
    <Content style={{ padding: "0 50px" }} defKey="3">
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Projet 3</Breadcrumb.Item>
      </Breadcrumb>
      <Link to="/">retour page d 'acceuil </Link>
      <h1> Projet 3 - WebRTC</h1>
      En construction
    </Content>
  );
}

export default Projet3;
