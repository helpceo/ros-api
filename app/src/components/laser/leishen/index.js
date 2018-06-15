import React, { Component } from 'react';
import { Button  } from 'antd';
import './index.css';
const {ipcRenderer} = window.require('electron')
export class Leishen extends Component {
    handleClick = function() {
        ipcRenderer.on('asynchronous-reply', (event, arg) => {
            console.log(arg)
        })
        ipcRenderer.send('asynchronous-message', 'true')
    }
    render() {
        return (
            <div className="wrap">
                <h2>镭神激光的介绍</h2>
                <p>
                    激光传感器的作用是，扫描机器人周围的物体，并以点云的形式进行表示。 因此，激光传感器分为二维激光传感器和三维激光传感器，会分别提供二维点云和三维点云数据。
                </p>
                <h3>深圳镭神智能生产的激光雷达</h3>
                <p>
                    <span>ROS驱动：</span>
                    <a href="https://github.com/leishen-lidar/LS01D">https://github.com/leishen-lidar/LS01D</a>
                </p>
                <div className="wr">
                    <Button type="primary" onClick={this.handleClick}>启动激光</Button>
                </div>
                <h2>1.安装镭神ls01d激光ROS驱动包</h2>
                <code>
                    $ git clone https://github.com/leishen-lidar/LS01D
                </code>
                <p>
                    然后将其中对应的ROS驱动包重命名，即将ls01D Ros文件夹重命名为ls01d， 将重命名后的ls01d文件夹拷贝到工作区,例如:~/catkin_ws/src文件夹下。
                </p>
                <h2>2.编译</h2>
                <code>
                    $ cd ~/catkin_ws
                </code>
                <br/>
                <code>
                    $ catkin_make
                </code>
                <h2>3.为了防止串口名称的冲突，可执行以下命令，将激光传感器映射为特定的名称。</h2>
                <code>
                    $ roscd ls01d/scripts
                </code>
                <br/>
                <code>
                    $ sudo sh create_udev_rules.sh
                </code>
                <h2>4.启动激光驱动，查看发布的消息</h2>
                <code>
                    $ roslaunch ls01d ls01d.launch
                </code>

            </div>
        );
    }
}