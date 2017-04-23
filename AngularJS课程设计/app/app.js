var app=angular.module("myapp",['routeJs','ngRoute']);
app.controller("mainctrl",function($scope){
	
	// 导航
	 $scope.nav = [
                    { name: "首页", icon: "glyphicon glyphicon-home" },
                    { name: "简介", icon: "glyphicon glyphicon-file" },
                    { name: "信息", icon: "glyphicon glyphicon-envelope" },
                    { name: "操作", icon: "glyphicon glyphicon-cog" },
                ];
    $scope.nav1 = [
                    { name: "设置栏目"},
                    { name: "更多设置"},
                    { name: "分割线"},  
                ]; 
    // 用户信息
    $scope.user={name:'别无所求',img:"images/a0.jpg"};
    // 粉丝
    $scope.fans = [
                    { name: "小王", img: "images/a1.jpg" ,work:"设计师，博客",age:1},
                    { name: "张琳", img: "images/a2.jpg" ,work:"作家，杂志编辑",age:4},
                    { name: "李小明", img: "images/a3.jpg" ,work:"艺术总监，电影剪辑",age:2},
                    { name: "赵大城", img: "images/a4.jpg" ,work:"音乐家，运动员",age:3},                    
                ];
    // 用户            
    $scope.yonghu = [
                    { name: "小鱼儿", img: "images/a9.jpg" ,commen:"为全面贯彻落实司法责任制，优化审判资源配置，充分发挥各级人民法院院庭长对审判工作的示范、引领和指导作用，根据《中央政法委关于严格执行法官、检察官遴选标准和程序的通知》《最高人民法院关于完善人民法院司法责任制的若干意见》等有关规定，结合审判工作实际，就加强院庭长办理案件工作提出如下意见："},
                    { name: "帕金森", img: "images/a6.jpg" ,commen:"日动影移，日穿帘隙，时间悄无声息地离去。不知不觉，那么多渐行渐远的岁月，如今只剩下依稀的背影，翻过岁月的篱墙，面对那些悄然散场的旧时光，莞尔一笑，只言感恩岁月，不诉岁月离殇。"},
                    { name: "请叫我大帅柯", img: "images/a4.jpg" ,commen:"这世界上的很多事，有时候和我们眼睛看到的不一样。很多时候要我们慢慢地体会才会知道。我们不能急着看结果，就像种下一棵小花，你要耐心地等它破土发芽，慢慢长大，才能看到它开出美丽的花。尘世间的事也一样，要在时间里发酵，岁月里沉香，人生那些百思不得其解的事情，到后来时间会一一给你答案。岁月有时候特别用心良苦，它时常会给你很多磨难，其实它是想让你变得更好。"},
                    { name: "月亮的影子", img: "images/a2.jpg" ,commen:"孩子的时候，我们简单地把人划分为好人或坏人。只是后来长大了，知道了，好人没有你想象的那么好，坏人也没有你想象的那么坏。正如，外表坚强的人，也许内心很脆弱，而外表柔弱的人，却有着一颗强韧的心。"},                    
                ];            
    // 下拉菜单            
    $scope.menuState={
    	show: true
    }
    $scope.toggleMenu=function() {
    	$scope.menuState.show=!$scope.menuState.show;
    }
     $scope.list={
        show: true
    }
	$scope.toggle=function() {
        $scope.list.show=!$scope.list.show;
    }

   $scope.send=function()
    {   
        var val=document.getElementById("comment").value;  
        $scope.val=val;
    }


});

