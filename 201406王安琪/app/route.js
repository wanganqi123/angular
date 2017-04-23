angular.module('routeJs',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
		.when('/',{template:'<div class="m_bottom"><div class="padder"><div class="streamline b-l b-info m-l-lg m-b padder-v" id="myCircle"><div><h3>分享你的心情！</h3><div><textarea  style="width:300px;height:100px;" id="emotionMsg"></textarea><br/></br><input type="file" id="emotionImg"></br><input type="button"value="发表状态"ng-click="sendEmotionMsg()" class="btn btn-success btn-group-sm"><br/><br/></div></div><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="images/a9.jpg"class="img-circle"alt="..."></a><div class="m-l-lg"><div class="m-b-xs"><a href=""class="h4">小鱼儿</a><span class="text-muted m-l-sm pull-right">现在</span></div><div class="m-b"><div>不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你永远在我旁边带路。我想牵着你永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。</div><div class="m-t-sm"><a href=""class="text-muted m-xs"><i class="icon-action-redo"></i></a><a href=""class="text-muted m-xs"><i class="icon-star"></i></a><a href=""class="text-muted m-xs"><i class="icon-refresh"></i>13</a></div></div></div></div><!--.comment-reply--><div class="m-l-lg"><a class="pull-left thumb-sm avatar"><img src="images/a5.jpg"></a><div class="m-l-xxl panel b-a"id="coo"><div class="panel-heading pos-rlt"><span class="arrow left pull-up"></span><span class="text-muted m-l-sm pull-right">10m ago</span><a href="">大张李</a>希望你能每天都快乐</div></div></div><!--/.comment-reply--><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="images/a3.jpg"alt="..."></a><div class="m-l-lg m-b-lg panel b-a bg-light lt"><div class="panel-heading pos-rlt b-light"><span class="arrow arrow-light left"></span><a href="">我是黄小明</a><span class="text-muted m-l-sm pull-right">1h ago</span></div><div class="panel-body"><div>我只是从这里路过......</div></div></div></div><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="images/a6.jpg"class="img-circle"alt="..."></a><div class="m-l-lg m-b-lg"><div class="m-b-xs"><a href=""class="h4">帕金森</a><span class="text-muted m-l-sm pull-right">3h ago</span></div><div class="m-b"><div class="m-b">日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。</div><img src="images/c5.jpg"class="b b-a wrapper-xs bg-white img-responsive"><div class="m-t-sm"><a href=""class="text-muted m-xs"><i class="icon-action-redo"></i></a><a href=""class="text-muted m-xs"><i class="icon-star"></i></a><a href=""class="text-muted m-xs"><i class="icon-refresh"></i>13</a></div></div></div></div><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="images/a4.jpg"class="img-circle"alt="..."></a><div class="m-l-lg m-b-lg"><div class="m-b-xs"><a href=""class="h4">请叫我大帅柯</a><span class="text-muted m-l-sm pull-right">4h ago</span></div><div id="commentArea"><div class="m-b">这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。</div><div class="panel panel-default m-t-md m-b-n-sm pos-rlt"id="comment"><form><textarea class="form-control no-border"rows="3"placeholder="Your comment..."id="commentMsg"></textarea></form><div class="panel-footer bg-light lter"><button class="btn btn-info pull-right btn-sm"ng-click="sendMsg()">评论</button><ul class="nav nav-pills nav-sm"><li><a href=""><i class="fa fa-camera text-muted"></i></a></li><li><a href=""><i class="fa fa-video-camera text-muted"></i></a></li></ul></div></div></div></div></div><div><a class="pull-left thumb-sm avatar m-l-n-md"><img src="images/a2.jpg"alt="..."></a><div class="m-l-lg panel b-a"><div class="panel-heading pos-rlt b-b b-light"><span class="arrow left"></span><a href="">月亮的影子</a><label class="label bg-light m-l-xs">VIP</label><span class="text-muted m-l-sm pull-right">9h ago</span></div><div class="panel-body"><blockquote><p>孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。</p><small>穿起越云层的时间<cite title="Source Title">源标题</cite></small></blockquote><div>穿起越云层的时间</div></div></div></div></div></div></div>'})
		.when('/aboutme',{template:'<div style="margin-left:30px;margin-top:30px"><img src="images/img.png" class="img-circle"><a class="h4" style="color:green;font-size:15px;">&nbsp;ML朱老板的作品· · · · · ·（全部2.181读者）</a></br></br><a href="#"><img src="images/book1.png"></a><a href="#" style="margin-left:50px;"><img src="images/book2.png"></a></div><hr style="height:1px;border:none;border-top:1px solid #555555;" /></hr><div style="margin-left:30px;margin-top:30px"><img src="images/img.png" class="img-circle"><a class="h4" style="color:green;font-size:15px;">&nbsp;ML朱老板的日记· · · · · ·（<a>全部</a>）</a></br></br><p style="padding-left:10px;">孤独者的游戏</br>2017-04-13 16:08:42</p><div><img src="images/diary1.png" style="float:right;padding-left:50px;padding-right:100px;"><p style="padding-left:10px;">说的就是游戏。 我从来不算是个爱玩游戏的人，虽然每个时代的大部分游戏我也都没落下过。从街霸到俄罗斯方块再到超级玛丽，然后是红警、模拟城市2000、帝国、星际、大富翁、暗黑、CS、石器时代……如今虽已奔四，家里 PS4、XBOX One、WiiU 也都一样不差，只是开机的时间并不多。 （好吧，我承认我是个爱玩游戏的人。） ...  <a href="#">(63回应）</a> </p></div></br><h3 style="margin-left:10px"></h3></div><hr style="height:1px;border:none;border-top:1px solid #555555;" /></hr><div style="margin-left:30px;margin-top:30px"><img src="images/img.png" class="img-circle"><a class="h4" style="color:green;font-size:15px;">&nbsp;ML朱老板的相册· · · · · ·（<a>创建12</a> · <a>关注0</a> ）</a></br></br><a href="#"><img src="images/pic1.png"></a><a href="#" style="margin-left:50px;"><img src="images/pic2.png"></a><a href="#" style="margin-left:50px;"><img src="images/pic3.png"></a></div></br><hr style="height:1px;border:none;border-top:1px solid #555555;" /></hr><div style="margin-left:30px;margin-top:30px"><img src="images/img.png" class="img-circle"><a class="h4" style="color:green;font-size:15px;">&nbsp;ML朱老板的书· · · · · ·(<a> 22本在读 · 28本想读 · 78本读过</a> )</a></br></br><p style="color:gray;font-size:15px;">在读:</p><a href="#"><img src="images/boo1.png"></a><a href="#" style="margin-left:50px;"><img src="images/boo2.png"></a><a href="#"><img src="images/boo3.png" style="margin-left:50px;"></a><a href="#" style="margin-left:50px;"><img src="images/boo4.png"></a><p style="color:gray;font-size:15px;padding-top:30px;">想读:</p><a href="#"><img src="images/boo5.png"></a><a href="#" style="margin-left:50px;"><img src="images/boo6.png"></a><a href="#"><img src="images/boo7.png" style="margin-left:50px;"></a><a href="#" style="margin-left:50px;"><img src="images/boo8.png"></a><hr style="height:1px;border:none;border-top:1px solid #555555;" /></hr></div>'})
		.when('/edit',{template:'<div class="m_bottom"><div class="padder"></br></br><img src="{{displaySrc}}" class="img-circle">&nbsp;&nbsp&nbsp;JPG或PNG格式，最大3MB，不支持GIF </br></br>&nbsp;<input type="file" value="设置头像" id="displaysrc"><br/>&nbsp<input type="button" value="确认保存" ng-click="setFuc()"></br></br></br>用户名：<input style="background:transparent;border:1px solid #ffffff" type="text" value="{{userName}}" id="username"><br/></br> </br></div></div>'})
		.otherwise({redirectTo:'/'});
	}])

