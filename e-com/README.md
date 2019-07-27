##一、下载React脚手架

	create-react-app xxx :下载模板项目

###1、修改WebStorm配置（解决报红）

	在WebStorm设置中
		Settings-->Languages-->JavaScript-->修改为Reac JSX

###2、下载stylus

	1、安装stylus依赖包
		npm install stylus stylus-loader --save-dev

	2、把配置文件暴露出来
		npm run eject  // 选择Y
		注：要删除文件中的 .get文件、.getignore文件

	3、修改配置文件: config/webpack.config.js
		// 注意: 根据已有的sass的配置修改, 并添加在相应的位置
	
		const stylusRegex = /\.(stylus|styl)$/;
		const stylusModuleRegex = /\.module\.(stylus|styl)$/;
	
		{
	      test: stylusRegex,
	      exclude: stylusModuleRegex,
	      use: getStyleLoaders(
	        {
	          importLoaders: 2,
	          sourceMap: isEnvProduction && shouldUseSourceMap,
	        },
	        'stylus-loader'
	      ),
	      // Don't consider CSS imports dead code even if the
	      // containing package claims to have no side effects.
	      // Remove this when webpack adds a warning or an error for this.
	      // See https://github.com/webpack/webpack/issues/6571
	      sideEffects: true,
	    },
	
		{
	      test: stylusModuleRegex,
	      use: getStyleLoaders(
	        {
	          importLoaders: 2,
	          sourceMap: isEnvProduction && shouldUseSourceMap,
	          modules: true,
	          getLocalIdent: getCSSModuleLocalIdent,
	        },
	        'stylus-loader'
	      ),
	    },
	4、解决开发环境运行缺包问题(也有可能提示缺少别的包或不缺)
		npm start  查看控制台提示
		yarn add @babel/plugin-transform-react-jsx-source
		yarn add @babel/plugin-transform-react-jsx-self


###3、stylus中rem适配

	1、html中：
		$(document).ready(function () {
	      !(function () {
	        let width = document.documentElement.clientWidth;
	        let styleNode = document.createElement('style');
	        styleNode.innerHTML = 'html{font-size: ' + width / 10 + 'px !important;}';
	        document.head.appendChild(styleNode);
	      })()
	2、stylus中
		（1）定义变量
			$rem = 75
		（2）使用
			标签属性名 （尺寸/$rem）rem
				列：width (690/$rem)rem


###4、代理

	（1）在package.json文件中配置
		"proxy": "http://m.you.163.com"
	（2）定义接口请求函数
		列：export const getRecommendData = () => ajax('/topic/v1/find/recAuto.json')

###5、点击回调传值

	需要在回调的外侧再包一层回调，保证他不----------------------------------
		onClick={()=>this.handleNav(index)}

###6、遍历显示标签（动态显示某个标签属性）
	
	js：
		navListItem=()=>{
		    const {navList,currentIndex} = this.state
		    console.log(navList,'000000000000000000000000000000')
		    return navList.map((item,index)=>
			
			方法一：
				<li className={`${currentIndex===index ? 'on' : ''} item`} onClick={()=>this.handleNav(index)} key={index} >{item}</li>
	
			方法二：
				<li className={[currentIndex===index ? 'on' : '','item'].join(' ')} onClick={()=>this.handleNav(index)} key={index} >{item}</li>
		    )
		    
		}

	html：
		<div>
            {
              this.navListItem()
            }
          </div>
	

###7、路由的返回和前进功能

	<button onClick={this.back}>返回</button>&nbsp;
    <button onClick={this.forward}>前进</button>&nbsp;

		back = () => {
	    	this.props.history.goBack()
	  	}

		forward = () => {
	    	this.props.history.goForward()
		}

###8、input绑定onChange监听回调，在回调函数中通过event.target.value获取输入的值

	列：<input type="text"  onChange={this.handleInputChange}/>

		handleInputChange=async (event)=>{
		    const value=event.target.value
		
		    const result=await getSousuoData(event.target.value)
		
		    this.setState({
				searchDataList:result
	    	})
		}

###9、点击路由跳转，使之带有特殊的标签属性
	(1)在点击的路由标签设置属性名--activeClassName='active'
		列：<NavLink to='/personal' activeClassName='active'></NavLink>
	(2)在css中设置将要显示的属性

###10、清除输入框文本
	（1）绑定点击监听回调
	（2）设置ref属性
	（3）在回调函数中使用refs属性清空输入框文本
	（4）修改状态数据，控制清除按钮的显示/隐藏
		列：<input type="text" ref='clearInput' placeholder="英国摩飞榨汁杯，仅199元"  onChange={this.handleInputChange}/>

		//清除输入关键字
		  clearInput=()=>{
		    this.refs.clearInput.value=''

		    this.setState({
		      text:''
		    })
		  }





