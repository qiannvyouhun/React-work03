import React, { Component } from 'react'
import { NavBar,TabBar, Icon} from 'antd-mobile';
export default class AppInspiration extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'tuijian',
          
        };
      }

    render() {
        return (
            <div>
                <NavBar
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]} style={{backgroundColor:'#3fcccb',color:'#fff',height:'64px'}}
                >灵感</NavBar>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="top"
                    >
                    <TabBar.Item
                        key="tuijian"
                        icon={
                            <span>推荐</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>推荐</span>
                        }
                        selected={this.state.selectedTab === 'tuijian'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'tuijian',
                        });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <span>冬季</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>冬季</span>
                        }
                        key="dongji"
                        selected={this.state.selectedTab === 'dongji'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'dongji',
                        });
                        }}
                        data-seed="logId1"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                        <span>宜家</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>宜家</span>
                        }
                        key="yijia"
                        selected={this.state.selectedTab === 'yijia'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'yijia',
                        });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key="xiaoqingxin"
                        icon={
                            <span>小清新</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>小清新</span>
                        }
                        selected={this.state.selectedTab === 'xiaoqingxin'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'xiaoqingxin',
                        });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key="xiaohuxing"
                        icon={
                            <span>小户型</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>小户型</span>
                        }
                        selected={this.state.selectedTab === 'xiaohuxing'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'xiaohuxing',
                        });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        key="gexingsecai"
                        icon={
                            <span>个性色彩</span>
                        }
                        selectedIcon={
                        <span style={{color:'#3fcccb'}}>个性色彩</span>
                        }
                        selected={this.state.selectedTab === 'gexingsecai'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'gexingsecai',
                        });
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    </TabBar>
                    <div style={{backgroundColor:'#eeeeee',width:'100%'}}>
                        <img src={require(`../images/2-1.jpg`)} style={{height:'auto',width:'45%',margin:'10px 13px 0 10px'}}></img>
                        <img src={require(`../images/2-2.jpg`)} style={{height:'auto',width:'45%',margin:'10px 10px 0 0',float:'right'}}></img>
                        <img src={require(`../images/2-3.jpg`)} style={{height:'auto',width:'45%',margin:'10px 13px 0 10px'}}></img>
                        <img src={require(`../images/2-4.jpg`)} style={{height:'auto',width:'45%',margin:'10px 10px 0 0',float:'right'}}></img>
                        <img src={require(`../images/2-5.jpg`)} style={{height:'auto',width:'45%',margin:'10px 13px 0 10px'}}></img>
                        <img src={require(`../images/2-6.jpg`)} style={{height:'auto',width:'45%',margin:'10px 10px 0 0',float:'right'}}></img>
                    </div>
            </div>
        )
    }
}
