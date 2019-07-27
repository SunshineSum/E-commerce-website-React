import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
// import Sousuo from '../Sousuo/Sousuo'

class Classify extends Component {
  render(){
    return(
      <div>
        <NavLink to='/sousuo' activeClassName='active'>
              <span className="item_icon">
                <i className="iconfont icongerenzhongxinwoderenwubiaozhuntouxianxing"></i>
              </span>
          <span>个人</span>
        </NavLink>
      </div>
    )
  }
}
export default Classify
