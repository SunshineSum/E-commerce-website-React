import React from 'react'
import {Component} from 'react'
import {Switch, BrowserRouter, Route, NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import './Search.styl'
import {homeData,getRecommendData} from '../../api'

export default class Search1 extends Component {

  state={
    currentIndex:0,    //当前点击导航栏下标
    navList:[],     //导航列表
    recommendDataList:[],   //推荐数据
  }

  handleNav=(index)=>{
    this.setState({
      currentIndex:index
    })
  }

  async componentDidMount(){
    const {navList} = this.state

    const result1 = await homeData()  // {status: 0, data: []}
    const result2 = await getRecommendData()

   result1.data.kingKongModule.kingKongList.map(item=>{
     // console.log(item,item.text)
     navList.push(item.text)
    })

    // console.log(navList,'99999999999999')
    this.setState({
      navList,
      recommendDataList:result2.data.result
    })

    if(navList){
      new BScroll('.wrapper', {
        click:true,
        scrollX:true
      })
    }

  }


  navListItem=()=>{
    const {navList,currentIndex} = this.state
    // console.log(navList,'000000000000000000000000000000')
    return navList.map((item,index)=>
      <li className={[currentIndex===index ? 'on' : '','item'].join(' ')} onClick={()=>this.handleNav(index)} key={index} >{item}</li>
    )

  }

  recommendDataItem=()=>{
    const {recommendDataList} = this.state
    // console.log(recommendDataList,'----------------------')
    return recommendDataList.map((cItem,index)=>{
      return (<div className="contentWarp" key="index">{
        cItem.topics.map(
          (item) => {
            if (item.type===1){
              return(
                <div key='item.topicId' className="content">
                  <div className="name">
                    <img src={item.avatar} alt=""/>
                      <span>{item.nickname}</span>
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="pic">
                    <img src={item.picUrl} alt=""/>
                  </div>
                  <div className="rcount">
                <span className="item_icon">
                  <i className="iconfont iconiconfontfaxian1"></i>
                </span>
                    <span>{item.readCount}人看过</span>
                  </div>
                </div>
              )
            }else if(item.type===2){
              return(
                <div className="content2" key='item.topicId'>
                  <div className="info">
                    <div className="name2">
                      <span className="ava">
                        <img src={item.avatar} alt=""/>
                      </span>
                      <span className="nickname">{item.nickname}</span>
                    </div>

                    <div className="title2">{item.title}</div>
                    <div className="desc ellipsis">{item.subTitle}</div>
                    <div className="rcount2">
                      <span className="item_icon">
                        <i className="iconfont iconiconfontfaxian1"></i>
                      </span>
                      <span>{item.readCount}人看过</span>
                    </div>
                  </div>
                  <div className="img">
                    <img src={item.picUrl} alt=""/>
                  </div>
                </div>
              )
            }
          }
        )
      }
      </div>)

    })

  }


  render() {

    return (
      <div id="search">
        <header className="header">
          <NavLink className="item_icon" to='/home'>
            <i className="iconfont iconshouye-"></i>
          </NavLink>
          <div className="name">
            <span className="on">发现</span>
            <span>甄选家</span>
          </div>
          <div className="right">
            <NavLink className="item_icon sousuo" to='/search'>
              <i className="iconfont iconiconsousuo"></i>
            </NavLink>
            <NavLink className="item_icon" to='/shopCart'>
              <i className="iconfont iconicongouwuche"></i>
            </NavLink>
          </div>
        </header>
        <div className="nav">
          <div className="wrapper">
            <ul className="content">
              {
                this.navListItem()
              }
            </ul>
          </div>
        </div>
        {
          this.recommendDataItem()
        }
      </div>
    )
  }
}
