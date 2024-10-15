import { Layout } from "antd";
import { IMainLayout } from "../types/layout-types";

const { Header, Footer, Content } = Layout;

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Layout>
      <Header className="text-white">This is a header</Header>
      <Content className="bg-red-200">{children}</Content>
      <Footer>This is a footer</Footer>
    </Layout>
  );
};

export default MainLayout;
