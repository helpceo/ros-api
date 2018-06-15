import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

export class Profile extends Component {
    render() {
        const logo = require("../../assert/imgs/ros_equation.png")
        const dataSource = [{
            key: '1',
            name: 'Ubuntu版本',
            electric:"10.04-11.10",
            fuerte:"10.04-11.10-12.04",
            groovy:"11.10-12.04-12.10",
            hydro:"12.04-12.10-13.04",
            indigo:"13.10-14.04",
            jade:"14.04-14.10-15.04",
            kinetic:"15.10-16.04",
            luna:"16.04-16.10-17.04",
            melodic:"17.10-18.04"
            }];
          
          const columns = [{
            title: 'ROS版本',
            dataIndex: 'name',
            key: 'name',
          }, {
            title: 'electric',
            dataIndex: 'electric',
            key: 'electric',
          }, {
            title: 'fuerte',
            dataIndex: 'fuerte',
            key: 'fuerte',
          }, {
            title: 'groovy',
            dataIndex: 'groovy',
            key: 'groovy',
          }
          , {
            title: 'hydro',
            dataIndex: 'hydro',
            key: 'hydro',
          }
          , {
            title: 'indigo',
            dataIndex: 'indigo',
            key: 'indigo',
          }
          , {
            title: 'jade',
            dataIndex: 'jade',
            key: 'jade',
          }
          , {
            title: 'kinetic',
            dataIndex: 'kinetic',
            key: 'kinetic',
          }
          , {
            title: 'luna',
            dataIndex: 'luna',
            key: 'luna',
          }, {
            title: 'melodic',
            dataIndex: 'melodic',
            key: 'melodic',
          }
        ];
        return (
            <div className="wrap">
                <h2>ROS简介</h2>
                <p>
                官方定义：ROS(Robot Operating System)是面向机器人的开源的元操作系统(meta-operating system)。它能够提供类似传统操作系统的诸多功能,如硬件抽象、底层设备控制、常用功能实现、进程间消息传递和程序包管理等。此外,它还提供相关工具和库,用于获取、编译、编辑代码以及在多个计算机之间运行程序完成分布式计算。
                </p>
                <p>ROS = 管道+工具+能力+生态</p>
                <img alt="examples" src={logo} />
                <h2>ROS版本介绍</h2>
                <Table dataSource={dataSource} columns={columns} bordered="true"/>
            </div>
        );
    }
}