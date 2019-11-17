import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome';
import AppShop from './AppShop';
import AppInspiration from './AppInspiration';
export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-home'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px',color:'#3fcccb'}} className='iconfont icon-home'></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            <AppHome/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-LC_icon_light_line'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px',color:'#3fcccb'}} className='iconfont icon-LC_icon_light_line'></i>
            }
            title="灵感"
            key="inspiration"
            selected={this.state.selectedTab === 'inspiration'}
            onPress={() => {
              this.setState({
                selectedTab: 'inspiration',
              });
            }}
            data-seed="logId1"
          >
            <AppInspiration/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shop'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px',color:'#3fcccb'}} className='iconfont icon-shop'></i>
            }
            title="商城"
            key="shop"
            selected={this.state.selectedTab === 'shop'}
            onPress={() => {
              this.setState({
                selectedTab: 'shop',
              });
            }}
          >
            <AppShop/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-my'></i>
            }
            selectedIcon={
                <i style={{fontSize:22,lineHeight:'22px',color:'#3fcccb'}} className='iconfont icon-my'></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'my'}
            onPress={() => {
              this.setState({
                selectedTab: 'my',
              });
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}