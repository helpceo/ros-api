import React, { Component } from 'react';
// import { Table } from 'antd';
import './index.css';

export class Install extends Component {
    render() {
        return (
            <div className="wrap">
                <h2>ROS安装方法</h2>
                <h3>步骤1 添加Ubuntu源地址：</h3>
                <code>
                  sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
                </code>
                <h3>步骤2 设置安全公钥：</h3>
                <code>
                sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 421C365BD9FF1F717815A3895523BAEEB01FA116
                </code>
                <h3>步骤3 更新源：</h3>
                <code>
                sudo apt update
                </code>
                <h3>步骤4 安装：</h3>
                <code>
                sudo apt install ros-kinetic-desktop-full
                </code>
                <p>
                或安装其它包：sudo apt install ros-kinetic-ros-base, sudo apt install ros-kinetic-navigation, sudo apt install gmapping
                </p>
                <h3>步骤5 安装完后，导出环境变量：</h3>
                <code>
                source /opt/ros/kinetic/setup.bash
                </code>
                <p>
                如果不想每次打开终端都导出环境变量，可将其添加到.bashrc文件中：
                </p>
                <code>
                echo "source /opt/ros/kinetic/setup.bash" >> ~/.bashrc
                </code>
            </div>
        );
    }
}