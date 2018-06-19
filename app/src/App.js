import React, { Component } from 'react';
import { Layout,Menu,Icon } from 'antd';
import './index.css';
import {Profile} from './components/about/Profile'
import {Install} from './components/installation/index'
import {Leishen} from './components/laser/leishen/index'
const {Sider, Content} = Layout;
const { SubMenu } = Menu;


class App extends Component {
    componentWillMount() {
        this.content = <Profile />;
    }
    handleClick = (e) => {
        if(e.key === "profile"){
            this.content = <Profile />;
        }
        if(e.key === "install"){
            this.content = <Install />;
        }
        if(e.key === "leishen"){
            this.content = <Leishen />;
        }
        this.setState({});
    }
    render() {
        const logo = require("./assert/imgs/Icon-Small.png")
        return (
            <Layout >
                <Sider theme="light">
                    <img alt="example" src={logo} />
                    <Menu
                        mode="inline"
                        onClick={this.handleClick}
                        defaultSelectedKeys={['profile']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" /> ROS 基础</span>}>
                            <Menu.Item key="profile">1. 介绍</Menu.Item>
                            <Menu.Item key="install">2. 安装</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="laptop" />激光雷达</span>}>
                            <Menu.Item key="leishen">镭神</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"
                                 title={<span><Icon type="notification" />subnav 3</span>}>
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Content>{this.content }</Content>
            </Layout>
        );
    }
}
export default App;
