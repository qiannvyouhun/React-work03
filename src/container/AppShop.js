import React, { Component } from 'react'
import { NavBar,Carousel, WingBlank,SearchBar, Button, WhiteSpace} from 'antd-mobile';

export default class AppShop extends Component {
    state = {
        data: ['1', '2','3','4'],
        imgHeight: 176,
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn'],
          });
        }, 100);
      }
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff',height:'64px'}}
                    rightContent={[
                        <div className='iconfont icon-gouwuche' style={{marginRight: '16px'}}></div>
                    ]}
                    >
                    商城                   
                    </NavBar> 
                    <div style={{position:'absolute',top:'64px',height:'40px','z-index':'1',width:'100%',opacity:'0.5'}} >
                    <SearchBar placeholder="输入关键字搜索" ref={ref => this.autoFocusInst = ref} style={{backgroundColor:'black'}}/>

                    </div>
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                
                    dotActiveStyle={{  backgroundColor: '#3fcccb' }}
                >                     
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                        <img
                            src={require(`../images/img3-`+val+`.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                  </Carousel>
                  <div>
                      <img src={require(`../images/3-1.jpg`)} style={{height:'auto',width:'100%'}}></img>
                  </div>
                  <div style={{backgroundColor:'#eeeeee',width:'100%'}}>     
                    <img src={require(`../images/3-2.jpg`)} style={{height:'auto',width:'45%',margin:'10px 0 0 10px'}}></img>
                    <img src={require(`../images/3-3.jpg`)} style={{height:'auto',width:'45%',margin:'10px 10px 0 0',float:'right'}}></img> 
                  </div>
                  <img src={require(`../images/3-4.jpg`)} style={{width:'100%'}}></img>
            </div>
        )
    }
}
