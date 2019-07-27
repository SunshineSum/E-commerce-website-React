import React,{Component} from 'react'
import {Switch, BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom'
import './components/Footer/Footer.styl'

import Classify from './pages/Classify/Classify'
import Home from './pages/Home/Home'
import Personal from './pages/Personal/Personal'
import Search from './pages/Search/Search'
import ShopCart from './pages/ShopCart/ShopCart'
import Sousuo from './pages/Sousuo/Sousuo'



class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <div>
          <div id="footer">
            <NavLink to='/home' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont iconshouye-"></i>
              </span>
              <span>首页</span>
            </NavLink>
            <NavLink to='/classify' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont iconicon-faxian-weixuanzhong"></i>
              </span>
              <span>分类</span>
            </NavLink>
            <NavLink to='/search' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont iconiconsousuo"></i>
              </span>
              <span>识物</span>
            </NavLink>
            <NavLink to='/shopCart' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont iconicongouwuche"></i>
              </span>
              <span>购物车</span>
            </NavLink>
            <NavLink to='/personal' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont icongerenzhongxinwoderenwubiaozhuntouxianxing"></i>
              </span>
              <span>个人</span>
            </NavLink>
          </div>

          <Switch>
            <Route path='/classify' component={Classify}/>
            <Route path='/home' component={Home}/>
            <Route path='/personal' component={Personal}/>
            <Route path='/search' component={Search}/>
            <Route path='/shopCart' component={ShopCart}/>
            <Route path='/sousuo' component={Sousuo}/>
            <Redirect to='/home' />
            <Route/>
          </Switch>
        </div>

      </BrowserRouter>
    )
  }
}
export default App
