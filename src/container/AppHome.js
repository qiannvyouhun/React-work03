import React, { Component } from 'react'
import { NavBar,Carousel, WingBlank} from 'antd-mobile';

export default class AppHome extends Component {
    state = {
        data: ['1', '2'],
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
            <div>
                <NavBar style={{backgroundColor:'#3fcccb',color:'#fff',height:'64px'}}>住吧家居</NavBar> 
                    <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{ height: 3, width: 20, borderRadius: 0 }}
                    dotActiveStyle={{ height: 3, width: 20, borderRadius: 0, backgroundColor: '#3fcccb' }}
                >                     
                    {[1,2].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: 'auto' }}
                        >
                        <img
                            src={require(`../images/img-`+val+`.jpg`)}
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
                  <div style={{backgroundColor:'#eeeeee'}}>
                       <img src={require(`../images/1-2-1.jpg`)} style={{height:'auto',width:'30%',margin:'10px 10px 10px 9px'}}
                       ></img> 
                       <img src={require(`../images/1-2-2.jpg`)} style={{height:'auto',width:'30%',margin:'0 9px 0 0 '}}
                       ></img>      
                       <img src={require(`../images/1-2-3.jpg`)} style={{height:'auto',width:'30%'}}
                       ></img> 
                  </div>
                  <div style={{height:'40px'}}>
                      <img src={require(`../images/1-7.jpg`)} style={{height:'auto',width:'100%'}}></img>
                  </div>
            </div>
        )
    }
}

