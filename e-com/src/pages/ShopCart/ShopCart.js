import React from 'react'
import {Component} from 'react'
import {NavLink} from "react-router-dom";
import './ShopCart.styl'
import shop from '../../common/imgs/shop.png'

export default class ShopCart extends Component {

  render() {
    return (
      <div id="shopCart">
        <header className="header">
          <div className="left">购物车</div>
          <NavLink className="right" to='/personal'>
            领劵
          </NavLink>
        </header>
        <ul className="list">
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
        <div className="content">
          <img src={shop} alt=""/>
          <p>去添加点什么吧</p>
        </div>
        <NavLink className="btn" to='/personal'>
            <span>登录</span>
        </NavLink>
      </div>
    )
  }
}
