import React from 'react'
import {Component} from 'react'
import './Sousuo.styl'
import {getSousuoData} from '../../api'

export default class Sousuo extends Component {

  state={
    list:['拖鞋','9.9元爆品超值购','粽子礼盒，限时8折','风扇','烟台大樱桃','耳机','电动牙刷69元起','袜子','夏凉床品','杯子','爆款  行李箱','女鞋'],
    text:'',
    currentIndex:0,    //当前点击导航栏下标
    searchDataList:[]
  }


  handleNav=(index)=>{
    this.setState({
      currentIndex:index
    })
  }


  //清除输入关键字
  clearInput=()=>{
    this.refs.clearInput.value=''
    console.log(this,'this')
    this.setState({
      text:''
    })
    // console.log('清除数据')
  }

  //遍产生历热门搜索
  hotSearchList=()=>{
    const {list} = this.state
    // console.log(navList,'000000000000000000000000000000')
    return list.map((item,index)=>
      <li className={list===index ? 'on' : ''} onClick={()=>this.handleNav(index)} key={index} >{item}</li>
    )

  }

  // 搜索数据列表
  searchDataList=()=>{
    const {searchDataList} = this.state
    // console.log(searchDataList,'000000000000000000000000000000')
    if(searchDataList.data)
    return searchDataList.data.map((item,index)=>
      <li key={index} >{item}</li>
    )
  }

  //是否显示热门搜索
  isShowHotSearch=()=>{
    const {text}=this.state
    if(!text){
      return (
        <div className="con">
          <p className="title">热门搜索</p>
          <ul className="list">
            {
              this.hotSearchList()
            }
          </ul>
        </div>
      )
    }else {
      return(
        <ul className="sousuoList">
          {
            this.searchDataList()
          }
        </ul>
      )
    }
  }

  //是否显示取消按钮
  isShowEmpty=()=>{
    const {text}=this.state
    if(text){
      return(
        <span className="item_icon" onClick={this.clearInput}>
          <i className="iconfont iconquxiao1"></i>
        </span>
      )
    }
  }

  back = () => {
    this.props.history.goBack()
  }


//根据关键字发送请求，获取数据
  handleInputChange=async (event)=>{
    // console.log(event,'input')
    // console.log(event.target.value,'input')
    // console.log(event.target,'input')
    const value=event.target.value

    console.log(value,'value')


    const result=await getSousuoData(event.target.value)
    // console.log(result,'result')


    // console.log(result,'result')

    this.setState({
      text:value,
      searchDataList:result
    })
  }



  render() {

    return (
      <div id="sousuo">
        <div className="content">
          <div className="header">
            <div className="left">
              <span className="item_icon">
                <i className="iconfont iconiconsousuo"></i>
              </span>
              <input type="text" ref='clearInput' placeholder="英国摩飞榨汁杯，仅199元"  onChange={this.handleInputChange}/>
              {
                this.isShowEmpty()
              }
            </div>
            <div className="right" onClick={this.back}>取消</div>
          </div>
          {
            this.isShowHotSearch()
          }
        </div>
      </div>
    )
  }
}
