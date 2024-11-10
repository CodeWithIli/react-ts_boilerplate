import { Layout } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header className="text-white">This is a header</Header>
      <Content className="bg-red-200">{children}</Content>
      <Footer>This is a footer</Footer>
    </Layout>
  );
};

export default MainLayout;
