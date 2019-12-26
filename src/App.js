import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class App extends React.Component{
    state = {
        collapsed: false,
      }
    
    onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
    }
    render () {
        return (
            <div>
                 <Layout className="app">
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className="sider">
                        <div className="logo" />
                            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                                <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>Weicom</span>
                                </Menu.Item>
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="3">用户列表</Menu.Item>
                                    <Menu.Item key="4">权限管理</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header className="header" />
                            <Content>
                                <Breadcrumb>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                                </Breadcrumb>
                                <div>Bill is a cat.</div>
                            </Content>
                        </Layout>
                </Layout>
            </div>
        )
    }
}

export default App