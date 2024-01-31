import React from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

// const items = new Array(3).fill(null).map((_, index) => ({
//   key: String(index + 1),
//   label: `nav ${index + 1}`,
// }));

const items = [
  {
    key: "/home",
    label: "Home",
  },
  {
    key: "/profile",
    label: "Profile",
  },
];

const AppLayout = ({ children }) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          onClick={(data) => {
            navigate(data.key);
            // console.log(data);
          }}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> */}
        <div
          style={{
            display: "flex",
            gap: 10,
          }}
        >
          <Link to={"/home"}>
            <div style={{ color: "white", cursor: "pointer" }}>Home</div>
          </Link>
          <Link to={"/profile/asxsda"}>
            <div style={{ color: "white", cursor: "pointer" }}>Profile</div>
          </Link>
        </div>
      </Header>
      <Content
        style={{
          padding: "10px 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;
