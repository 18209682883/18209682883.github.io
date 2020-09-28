$(function(){
	//上下滑动功能
	document.addEventListener("touchmove",function(e){e.preventDefault();},{passive:false});
	var mainISC = new IScroll("#box",{
		probeType:2//开启scroll事件
	});

	//数据至少模拟10条，默认的显示出前三条
	var json_num = 0;//用于保存数据的总条数
	$.ajax({
		type:"get",
		url:"json/data.json",
		async:true,
		success:function(res){
//			console.log(res);
			var pics = res.picList;
			//获取数据的总条数
			json_num  = pics.length;
			
			var str = "";
			for(var i in pics){
				//默认三条
				if(i > 2){
					break;
				}
				str +=`				
						<li>
							<div class="one-pic-list-left"><img src="${pics[i].src}"/></div>
							<div class="one-pic-list-right">
								<h4>
									<span>${pics[i].from}</span>
									<strong>${pics[i].title}</strong>
								</h4>
								<p>
									<strong>￥${pics[i].cur_price}</strong>
									<em>${pics[i].from}价￥${pics[i].yuan_price}</em>
								</p>
								<div class="sale-num">已售${pics[i].sale_num}</div>
								<div class="money">
									<span>${pics[i].juan}元卷</span>
									<span>预估收益：￥${pics[i].shouyi}元</span>
								</div>
							</div>
						</li>					
					`;
			}
			
			
			$("#tab-one-pic-list>ul").html(str);
			//每次ajax渲染之后，一定要重新刷新.content区域
			mainISC.refresh();
		}
	});



	//给滑动对象mainISC绑定滑动事件
	var flag = true;//true:开，表示可以使用上拉或者下拉，  false:关，表示所有的功能都不使用
	mainISC.on("scroll",function(){

		//获取提升框的高度
		var tipHei = $(".refresh").height();//单位：px

		//下拉功能
		if(this.y >= tipHei && flag == true){
			flag = false;
			//状态2
			$(".refresh").html("松手刷新").addClass("a");
			
			//设置滚动最小距离为提示框的高度,保证提示框显示
			this.minScrollY = tipHei;	
		}
		//上拉功能
		if(this.y <= -tipHei+this.maxScrollY && flag == true){	
			flag = false;
			
			//判断依据：ul》li的长度      小于    json对象中picList的长度，说明数据未加载完成
			var li_num = $("#tab-one-pic-list>ul>li").length;	
//			console.log(li_num,json_num);
			if(li_num < json_num){
				//状态2
				$(".more").html("松手刷新").addClass("b");	
				//设置滚动最大距离   为    提示框的高度的负值和最大滚动距离,保证提示框显示
				this.maxScrollY = -tipHei+this.maxScrollY;		
			}
			

		}		
	})
	
	//给滑动对象mainISC绑定滑动结束事件
	mainISC.on("scrollEnd",function(){
		//下拉
		if($(".refresh").hasClass("a")){
				//状态3
				$(".refresh").html("正在加载数据，请稍后");
				
				//加载数据
				setTimeout(function(){
					//修改图文列表中第一个li的图片
					$("#tab-one-pic-list>ul>li:first-child").find("img").attr("src","img/huasheng_06.jpg")
	
					//刷新.content页面
					mainISC.refresh();
					$(".refresh").html("下拉刷新").removeClass("a");
					//打开开关
					flag = true;
					
				},3000)				
		}
		//上拉
		if($(".more").hasClass("b")){
				//状态3
				$(".more").html("正在加载数据，请稍后");
				
				//加载数据
				setTimeout(function(){
					//创建li,添加到ul
					$.getJSON("json/data.json",{},function(res){
						var pics = res.picList;
						//获取下一条数据的下标
						var i = $("#tab-one-pic-list>ul>li").length;
						if(i<6 && i+1>=6){
							//加载一条
							var	str =`				
									<li>
										<div class="one-pic-list-left"><img src="${pics[i].src}"/></div>
										<div class="one-pic-list-right">
											<h4>
												<span>${pics[i].from}</span>
												<strong>${pics[i].title}</strong>
											</h4>
											<p>
												<strong>￥${pics[i].cur_price}</strong>
												<em>${pics[i].from}价￥${pics[i].yuan_price}</em>
											</p>
											<div class="sale-num">已售${pics[i].sale_num}</div>
											<div class="money">
												<span>${pics[i].juan}元卷</span>
												<span>预估收益：￥${pics[i].shouyi}元</span>
											</div>
										</div>
									</li>
								`;
						}else if(i+1<6){
							//加载两条
							var	str =`				
									<li>
										<div class="one-pic-list-left"><img src="${pics[i].src}"/></div>
										<div class="one-pic-list-right">
											<h4>
												<span>${pics[i].from}</span>
												<strong>${pics[i].title}</strong>
											</h4>
											<p>
												<strong>￥${pics[i].cur_price}</strong>
												<em>${pics[i].from}价￥${pics[i].yuan_price}</em>
											</p>
											<div class="sale-num">已售${pics[i].sale_num}</div>
											<div class="money">
												<span>${pics[i].juan}元卷</span>
												<span>预估收益：￥${pics[i].shouyi}元</span>
											</div>
										</div>
									</li>
									<li>
										<div class="one-pic-list-left"><img src="${pics[i+1].src}"/></div>
										<div class="one-pic-list-right">
											<h4>
												<span>${pics[i+1].from}</span>
												<strong>${pics[i+1].title}</strong>
											</h4>
											<p>
												<strong>￥${pics[i+1].cur_price}</strong>
												<em>${pics[i+1].from}价￥${pics[i+1].yuan_price}</em>
											</p>
											<div class="sale-num">已售${pics[i+1].sale_num}</div>
											<div class="money">
												<span>${pics[i+1].juan}元卷</span>
												<span>预估收益：￥${pics[i+1].shouyi}元</span>
											</div>
										</div>
									</li>
								`;	
							
							
							
							
						}
												
								
						
					$("#tab-one-pic-list>ul").append(str);
					//每次ajax渲染之后，一定要重新刷新.content区域
					mainISC.refresh();	
						
						
					})


					
					//刷新.content页面
					mainISC.refresh();
					
					//判断是否到底的临界值：ul>li的长度      等于    json对象中picList的长度
					var li_num = $("#tab-one-pic-list>ul>li").length+2;
					console.log(li_num,json_num);
					if(li_num >= json_num){
						$(".more").html("到底了").removeClass("b");
					}else{
						$(".more").html("上拉刷新").removeClass("b");	
					}
					
					flag = true;
				},3000)				
		}		
		
		
	});
	
	
	
	
	//选项卡---头部导航部分
	new IScroll("#header-nav",{scrollX:true,scrollY:false})
	
	//点击标题，选项卡切换
	$("#header-nav>ul>li").tap(function(){
		$(this).addClass("header-nav-active").siblings().removeClass("header-nav-active");
		var index = $(this).index();
		//根据下标，找对应的轮播图内容切换
		TabSwiper.slideTo(index);
	})
	
	//选项卡---轮播图部分
	var TabSwiper = new Swiper("#content-tab-bann",{
		onSlideChangeEnd:function(s){
			var index = s.activeIndex;
//			console.log(index);/
			//根据下标，实现头部标题切换
			$("#header-nav>ul>li").eq(index).addClass("header-nav-active").siblings().removeClass("header-nav-active");
		}
	});
	
	

	
	//实现轮播图，并且图片数据要渲染
	$.ajax({
		url:"json/data.json",//请求数据的地址
		type:"get",//获取数据的方式
		success:function(res){//成功回调函数			
			var bann = res.banner;
			var str = "";//保存轮播图片
			for(var i in  bann){
				str += `
						<div class="swiper-slide"><img src="${bann[i].src}" alt="" /></div>
						`;
				
			}
			
			//添加到选项卡1中的轮播图
			$("#tab-one-bann>.swiper-wrapper").html(str);
			
				//选项卡1轮播图
			new Swiper("#tab-one-bann",{
				autoplay:1500
			})
	
			
			
			
		},
		errror:function(e){//失败回调函数
			console.log(e);
		}
	})
	
	//底部导航
	$("footer>ul>li").click(function(){
		$(this).addClass("footer-active").siblings().removeClass("footer-active");
	})
	
	//底部导航切换
	$("footer>ul>li").click(function(){
		$(this).addClass("footer-active").siblings().removeClass("footer-active");
	})
	
	
	
	
	
})
