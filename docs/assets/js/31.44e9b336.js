(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{181:function(t,n,a){"use strict";a.r(n);var e=a(0),s=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("::before   ::after  伪对象选择器\n过渡动画{ transition:是一个复合属性\n          transition-property 表示参与过度的属性，多个属性用逗号隔开   all为默认值\n          transition-duration表示过度动画的持续时长/动画的速度曲线 s  ms \n          transition-timing-function:设置动画过渡类型效果\n                                     ease-in先慢后快\n                                     ease-out先快后慢\n                                     ease-in-out慢快慢（ease）\n                                     linear 匀速\n                                     ease 默认值（慢快慢）。\n           transition：1s 1s  延迟一秒执行动画一秒\n鼠标事件：hover  active  visited focus  checked \ntransform:skew(45deg) x轴旋转45°transform:skewY(45deg) transform:skew(x，y) 可以填负值\ntransform:rotate(45deg) 旋转== rotateZ(45deg)  元素默认绕Z轴转\ntransform:rotate3d(1,1,1,45deg);前三个参数表示旋转的方向，第四个参数为旋转的角度，前三个参数只有0和1，0表示不参与旋转，1表示参与旋转。\ntransform：scale（2） 宽和高都放大2倍  scale（0）表示隐藏元素 scale（1）保持不变   大于一表示放大  小于一表示缩小 最小为0  不支持%缩放\ntransform:translate(50px)  位移可以是正负值  可以用% 支持Z轴\nscale（） 用于缩放 \ntransform-style:preserve-3d\nperspective:9rem;\ntransform-origin 设置元素的基准点 top  center  50% 50%\ntransform:rotate(16000deg) scale(2); 多种变形用空格隔开\n\n所有属性都能参与动画，但并不是所有属性都有动画效果。\n")])])]),a("h3",{attrs:{id:"_12-27"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-27","aria-hidden":"true"}},[t._v("#")]),t._v(" 12.27")]),t._v(" "),a("p",[t._v("0351-2529422")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('自定义字体 又叫(非官方字体/服务器端字体(不需要安装，不受环境影响))\n语法：@font-face{\n  font-family:"text"; //字体名称\n  src:url("../ad.ttf") ,url("../ad.woff"),url("../ad.eot"),url("../ad.svg");\n  // url指的是字体上传到服务器\t的路径，src指的是服务器接收后存放的位置  解决兼容性\n  字体格式：\n  ttf  woff   eot   svg \n  为了做到浏览器的兼容性需要上传多种字体格式\n  format检测文件格式类型\n  1.旋转xyz位移向下\n  2.位移向下\n  3.y轴旋转\n  4.位移向上\n  5.透明度变化\n')])])]),a("h3",{attrs:{id:"_12-29"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-29","aria-hidden":"true"}},[t._v("#")]),t._v(" 12.29")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@keyframes  定义动画   \nanimation：new  6s  linear  2s  \nanimation-name:new 表示调用动画的名称\nanimation-duration:动画的持续时间\nanimation-timing-function:动画类型\nanimation-delay:动画的延迟\nanimation-iteration-count:动画执行的次数\ninfinite表示无限循环\nanimation-direction:动画执行的放向\nnormal（正常方向）\nalternate（正反交替）\nanimation-fill-mode:动画结束时的停留状态\nforwards表示结束时的状态\nbackforwards表示开始时的状态\nnone默认值\nboth开始或结束时的状态\nanimation-play-state:动画是否暂停\npaused暂停\nrunning运行\n\nanimation-name的默认值为none，表示取消动画\n\n@keyframes +动画名称\n0%{}  开始帧  ==from\n100%{}结束帧  ==to\n关键帧动画的单位必须是百分比\n")])])]),a("p",[t._v("5075977218436")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("backface-visibility:hidden属性的作用是隐藏元素背面解决动画的闪屏问题,其默认值是visible。\n")])])]),a("h3",{attrs:{id:"_1-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("animate。css库\nshake(抖动) flash（闪烁）bounce（弹跳）翻转（flip） 旋转（rotateIn/rotateOut）淡入淡出（fadeIn）\n使用时元素必须添加animated类\ndisplay：none  不支持动画\n")])])]),a("h3",{attrs:{id:"_1-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3")]),t._v(" "),a("h3",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局","aria-hidden":"true"}},[t._v("#")]),t._v(" flex布局")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex布局 弹性盒子布局\n新弹性盒；display：flex;  老弹性盒：display:box;\n子元素就会作为弹性盒进行伸缩，子元素默认水平排列，即使有溢出也#不会换行#\n只能控制直属子元素\nfloat/clear/vertical-align  失效\njustify-content:设置检索子元素主轴的对齐方式\nflex-start;顶对其\ncontent;居中对齐\nflex-end;末对其\ndisplay: inline-flex;将对象作为内联块级弹性伸缩盒显示\n弹性盒为块元素\n弹性盒会默认继承父元素的高度\n")])])]),a("h3",{attrs:{id:"flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction","aria-hidden":"true"}},[t._v("#")]),t._v(" flex-direction")]),t._v(" "),a("p",[t._v("flex-direction:决定主轴的方向")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("row(默认值)：主轴为水平方向，起点在左端。\nrow-reverse：主轴为水平方向，起点在右端。\ncolumn：主轴为垂直方向，起点在上端。\ncolumn-reverse：主轴为垂直方向，起点在下沿。\n")])])]),a("p",[t._v("justify-content 元素在主轴方向上的对齐方式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex-start(默认值):起点对齐\nflex-end:末端对其\ncenter:居中\nspace-between:两端对齐，项目之间的间隔都相等。\nspace-around:每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍\n")])])]),a("p",[t._v("flex-wrap:决定元素是否换行显示")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nowrap\nwrap\nwrap-reverse\n")])])]),a("p",[t._v("align-items定义了元素在侧轴上的对齐方式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex-start:交叉轴的起点对齐。\nflex-end:交叉轴的终点对齐。\ncenter：交叉轴的中点对齐。\nbaseline:项目在第一行文字的基线对齐。\nstretch（默认值）:如果项目未设置高度或设为auto，将占满整个容器的高度\n")])])]),a("p",[t._v("flex-flow")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex-direction和flex-wrap的混合属性\n设置子元素书否换行以及排列方式\n")])])]),a("p",[t._v("align-content")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("设置元素多根轴线的对齐方式（如果只有一根轴线则不会生效）\n")])])]),a("p",[t._v("order用于设置子元素显示次序值越大显示越靠后，默认值为0，可以识别负值")]),t._v(" "),a("p",[t._v("子项目")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("flex:1\ngrow 子项目分配父容器的剩余空间\nbasis 设置元素的基准值\nshrink 有溢出内容时的收缩比例\nauto  表示 1 1 auto\nalign-self覆盖父元素align-items的属性设置自己在侧轴上独特的对齐方式\n")])])]),a("p",[t._v("overflow-y:scroll;")]),t._v(" "),a("p",[t._v("渐变")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("background:-webkit-gradient(linear,0%,0%,0%,90%,from(red),to(blue));淘汰\n\nbackground:-webkit-linear-gradient(left,#ccc 0%,#fff 10%)\n")])])]),a("p",[t._v("字间距")]),t._v(" "),a("p",[t._v("letter-spacing")]),t._v(" "),a("h3",{attrs:{id:"鼠标样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标样式","aria-hidden":"true"}},[t._v("#")]),t._v(" 鼠标样式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cursor：pointer  点击状态\n        move  移动状态\n        wait  加载状态\n")])])]),a("p",[t._v("多行文本省略")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("display:-webkit-box;需要用老版本的弹性盒子实现\n-webkit-box-orient:vertical;===flex-direction:column;\nword-break:break-all;强制文本换行显示\n-webkit-line-clamp:2;最多显示n行\noverflow:hidden; 非visible(溢出可见)\ntext-overflow:ellipsis;  clip(切除)\n\n单行文本省略\n\n%text{\n  white-space:nowrap;\n  text-overflow:ellipsis;\n  overflow:hidden;\n}\n")])])]),a("p",[t._v("text-indent    首行缩进")]),t._v(" "),a("p",[t._v("border-image:用于设置边框图像")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("border-image-source:url()\nborder-image-slice切片大小\nborder-image-outset偏移量\nborder-image-repeat:repeat round stretch\n")])])]),a("p",[t._v("background-clip:content-box;内容向外裁剪")]),t._v(" "),a("p",[t._v("​                               padding-box")]),t._v(" "),a("p",[t._v("​                                border-box")]),t._v(" "),a("p",[t._v("background-origin:border-box;背景图绘制的起点content-box")]),t._v(" "),a("h2",{attrs:{id:"移动端兼容问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端兼容问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动端兼容问题")]),t._v(" "),a("p",[t._v("非可点击元素设置cursor：pointer；")]),t._v(" "),a("p",[t._v("背景图片模糊：使用2倍的背景图代替img标签")]),t._v(" "),a("p",[t._v("background：contain；")]),t._v(" "),a("p",[t._v("输入框在最底部时点击软键盘时遮挡")]),t._v(" "),a("p",[t._v("content=“emall=no”")]),t._v(" "),a("p",[t._v("content=“telephone=no”")]),t._v(" "),a("p",[t._v("touch-callout:none; 禁止系统的默认菜单弹出")]),t._v(" "),a("p",[t._v("baceface-visibility:hidden;解决闪屏问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<input autocapitalize="off" autocorrect="off">\n')])])]),a("h2",{attrs:{id:"input的placeholder会出现文本位置偏上的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input的placeholder会出现文本位置偏上的情况","aria-hidden":"true"}},[t._v("#")]),t._v(" input的placeholder会出现文本位置偏上的情况")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("line-height:normal;\n")])])]),a("p",[t._v("android下取消输入语音按钮")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("input：：-webkit-input-speech-button{display:none}\n")])])]),a("p",[t._v("css动画页面闪白卡顿")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("解决方法:开启硬件加速\n尽可能使用合成属性\n")])])]),a("p",[t._v("fixed定位缺陷")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("通过iscroll插件解决这个问题\niOS不支持Android比iOS好\n")])])]),a("h3",{attrs:{id:"阻止旋转屏幕时字体大小改变"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阻止旋转屏幕时字体大小改变","aria-hidden":"true"}},[t._v("#")]),t._v(" 阻止旋转屏幕时字体大小改变")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("html,bodt,form,...{-webkit-text-size-adjust:none(100%);}\n")])])]),a("p",[t._v("ios6下伪类hover")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("给元素添加(add)class   .box:hover\n")])])]),a("p",[t._v("在移动端修改难看的点击高亮效果")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("-webkit-tap-highlight-color:rgba(0,0,0,0);\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('a href="tel打电话    mailto发邮件    sms发短信"\n')])])]),a("p",[t._v("防止滚动条卡顿,慢")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("overflow-scrolling:touch\n")])])]),a("h4",{attrs:{id:"appearance：none-取消表单元素默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appearance：none-取消表单元素默认样式","aria-hidden":"true"}},[t._v("#")]),t._v(" appearance：none  取消表单元素默认样式")]),t._v(" "),a("p",[t._v("retina屏的1px边框")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("border-width:thin;\n")])])]),a("p",[t._v("强制竖屏")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("content=“portrait”强制竖屏 landscape强制横屏\n")])])]),a("h2",{attrs:{id:"媒体查询（响应式布局）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询（响应式布局）","aria-hidden":"true"}},[t._v("#")]),t._v(" 媒体查询（响应式布局）")]),t._v(" "),a("p",[t._v("核心：media   query")]),t._v(" "),a("p",[t._v("概念：在不同的临界点下设置不同的样式内容")]),t._v(" "),a("p",[t._v("@media   媒介类型（screen所有浏览器）   关键词（and not(非某种设备) only（仅有的设备） ）   （查询条件）{}")]),t._v(" "),a("p",[t._v("TV print handheld(手持设备) all(所有设备)print()")]),t._v(" "),a("p",[t._v("查询条件")]),t._v(" "),a("p",[t._v("多个查询条件用and连接")]),t._v(" "),a("p",[t._v("缺点：加大页面代码的加载量，加载速度较慢")]),t._v(" "),a("p",[t._v("媒体类型和关键词可以一起省略  all市默认值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<meta name="viewport" content="width=device-width,initial..."/>\n媒体查询必须结合<meta>使用\n媒体查询可以检测到用户的手持方向\norientation:landscape(横屏)\norientation:portrait(竖屏)\naspect-ratio(检测浏览器可视宽高的比例):320/480;\n\n<link rel="stylesheet" href="css/check.css" media="screen and (min-width:768px)"> 调用条件\n\n')])])]),a("p",[t._v("thick边框粗线")]),t._v(" "),a("p",[t._v("text-transform:capitalize;英文首字母大写")]),t._v(" "),a("p",[t._v("​                           :uppercase 全部大写")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('article{\n  column-count:3;(用于实现多栏布局的栏目数，正整数)\n  column-width:200px;(表示每一栏的宽度)\n  columns是一个符合属性:\n         3   300px  表示最多显示三栏，每栏300px的宽度\n  多栏布局中元素一定要有宽度，其中width表示所有栏目的总宽度\n  column-gap:设置栏间距\n  多栏布局的宽度始终相等，只适合做文章排版，不适合做网站，height要自适应\n  column-rule:5px solid #eee;(用于实现栏目之间的分割线)\n  column-rule-width    column-rule-style \n  column-rule-color\n  length  thin  thick medium中等线\n  column-rule-style有9个值none不算\n  column-span:all/none(表示是否横跨所有列)\n}\ndiv{\n  @include num(2rem,2rem);\n  background:url(../xxx.png);\n  overflow:hidden(非visible)；\n  resize:both;vertical;horizontal;none;\n  resize:用户以拖动的形式改变原有尺寸的大小\n}\n\n<input type="file" accept="image/$.png">文件域  accept(限定文件上传的格式)\n accept="image/*"限定只能上传图片格式\n format 用于检测格式类型\n \n \n <link rel="shortcut icon" href="img/logo-tianmao.jpg" />\n 实现苹果自定义图片\t\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("outline:30px solid #eee;不站位  不能单独设置某一方向的轮廓\noutline-offset:50px;设置轮廓线的偏移量（可以为负值）\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("input 中disabled禁用状态背景成灰色 readonly只读状态\n")])])]),a("h3",{attrs:{id:"bootstarp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstarp","aria-hidden":"true"}},[t._v("#")]),t._v(" bootstarp")]),t._v(" "),a("p",[t._v("开源的第三方UI框架   由三部分构成 HTML  css  js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("jQuery 主要是解决兼容问题\n\nbootstarp专注于移动端  移动优先\nbootstarp中全局*{font-size:14px;}\nbootstarp的核心是组件\n\n")])])]),a("h3",{attrs:{id:"按钮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按钮","aria-hidden":"true"}},[t._v("#")]),t._v(" 按钮")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("按钮样式名.btn\n.btn           基础按钮\n.btn-default   默认按钮\n.btn-primary   主要按钮\n.btn-success   成功按钮\n.btn-warning   警告按钮\n.btn-info      信息按钮\n.btn-danger    危险按钮\n.btn-link      链接按钮\n.btn-inverse   逆操作\n\nbtn-lg 大型按钮   btn-sm 小型按钮 btn-xs 迷你按钮\n")])])]),a("h3",{attrs:{id:"nav"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nav","aria-hidden":"true"}},[t._v("#")]),t._v(" nav")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nav是创建导航的类\n\n.nav-list 列表导航\n.nav-tabs 切换性导航，标签页导航\n.nav-pills 胶囊试导航\n.nav-stacked 叠放式导航\n     .dropdown给li添加下拉样式\n     .breadcrumb 面包屑导航\n     \n")])])]),a("h3",{attrs:{id:"文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 文本")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n")])])]),a("p",[t._v("表单用于数据的交互")]),t._v(" "),a("p",[t._v("表格中th是标题单元格  可以自动加粗和居中")]),t._v(" "),a("p",[t._v("border-collapse:collapsing; 合并表格边框线")]),t._v(" "),a("p",[t._v("cellspace单元格间距")]),t._v(" "),a("p",[t._v("1像素表格的写法")]),t._v(" "),a("h3",{attrs:{id:"表格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表格","aria-hidden":"true"}},[t._v("#")]),t._v(" 表格")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".table 基础表格\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('通过用tr的bgcolor覆盖table的bgcolor  table上设置cellspacing\nalign="center"在table上会让table居中\nalign="center"在tr上会让文本居中\n\n')])])]),a("p",[t._v("无样式列表")]),t._v(" "),a("p",[t._v("unstyled 去除项目列表符号")]),t._v(" "),a("h3",{attrs:{id:"栅格系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#栅格系统","aria-hidden":"true"}},[t._v("#")]),t._v(" 栅格系统")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("栅格系统中嵌套的列要满足12列\nrow要清除margin否则会出现横滚\ncol-lg-  表示超大屏1200px以上\ncol-md-  中屏992-1200px\ncol-sm-  小屏768-992px\ncol-xs-  小屏768px以下移动端\n\ncol-md-offset- 指偏移量 占位\n\n被嵌套的列不一定是12\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('content:"字符"\n        none 取消\n        attr(class)添加属性的属性值\n        url()图片\n')])])]),a("h2",{attrs:{id:"高级h5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级h5","aria-hidden":"true"}},[t._v("#")]),t._v(" 高级H5")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("width = device-width\n宽度 = 设备宽\ninitial-scale = 1.0\nminimum-scale = 1.0\nmaximum-scale = 1.0\nuser-scalable = no //默认yes\n\n内核\n-webkit- 谷歌\n-ms- IE\n-moz- 火狐\n\nPPI : 屏幕显示密度\nDPR ：设备物理像素和逻辑像素的对应关系，即物理像素/逻辑像素\nResolution : 分辨率\n\nhttp: https: ssh: 网络协议 protocol\nhost 域名\nport 端口\npathname 文件路径\n\n方法返回元素的大小及其相对于视口的位置\nDom元素.getBoundingClientRect() 返回值是一个对象\n\nwindow.navigator.appVersion 获取当前浏览器版本信息\nwindow.devicePixelRatio 获取当前设备的dpr\n\n\niphone 4/5  320\niphone 6/7/8  375\niphone 6/7/8p 414\n\nviewport相关的单位有四个，分别是vw vh vmin vmax\n\nvw：是Viewport's width的简写,1vw等于window.innerWidth的1%\nvh：和vw类似，是Viewport's height的简写，1vh等于window.innerHeihgt的1%\nvmin：vmin的值是当前vw和vh中较小的值\nvmax：vmax的值是当前vw和vh中较大的值\n\nvmin和vmax是根据Viewport中长度偏大的那个维度值计算出来的，如果window.innerHeight > window.innerWidth则vmin取百分之一的window.innerWidth，vmax取百分之一的window.innerHeight计算\n")])])]),a("h3",{attrs:{id:"响应式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式","aria-hidden":"true"}},[t._v("#")]),t._v(" 响应式")]),t._v(" "),a("p",[t._v("meida 媒体查询 推荐使用")]),t._v(" "),a("p",[t._v("onresize  js的方法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/根目录\n./ 当前\n../ 上级目录\n\ncalc()可以动态计算\n\n@media关键字\n  and 和\n  only 唯一\n  not 除了之外\n")])])]),a("p",[t._v("sass")]),t._v(" "),a("p",[t._v("%名字{")]),t._v(" "),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("@extend 继承和占位符")]),t._v(" "),a("p",[t._v("@mixin 名字($a:30px){}         @include 混合宏")]),t._v(" "),a("p",[t._v("$变量")]),t._v(" "),a("p",[t._v("声明函数")]),t._v(" "),a("p",[t._v("@function name(){")]),t._v(" "),a("p",[t._v("​\t@return")]),t._v(" "),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("调用函数")]),t._v(" "),a("p",[t._v("name()")]),t._v(" "),a("p",[t._v("for循环")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@for 变量 from to end+1{\n\t循环体\n}\n@for 变量 from strat through end{\n\t循环体\n}\neg:\n八个div\n@for $i from to 9{\n\tdiv:nth-child(#{$i}){\tbackground:rgba(255,$i*20,$i*20,$i*0.1)\n}\n}\n")])])]),a("p",[t._v("$.ajax({")]),t._v(" "),a("p",[t._v("json")]),t._v(" "),a("p",[t._v("jsoncallback")]),t._v(" "),a("p",[t._v("})")]),t._v(" "),a("p",[t._v("查看电脑IP地址")]),t._v(" "),a("p",[t._v("ipconfig   ipv4")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("js  \nclassList  返回类名集合\nclassList.add(要添加的类名)\nremoveClass()删除\ncontains()是否含有\nhasClass()检测\n")])])]),a("p",[t._v("visibility:hidden  //占位隐藏  余姚设置动画的元素要设置")]),t._v(" "),a("p",[t._v("pointer-events:none||auto(默认值);穿透一切事件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("transform:translate() scale() rotate() skew();\n上左负，右下正\n")])])]),a("p",[t._v("steps() 定义的是分帧动画")]),t._v(" "),a("p",[t._v("getComputedStyle(dom节点)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("粘性定位\nposition:sticky;\ntop:0;\nleft:0;\n")])])]),a("p",[t._v("Object.assign({},def,opt)===$.extend()")]),t._v(" "),a("p",[t._v("jquery 相对大一些 兼容了各个浏览器")]),t._v(" "),a("p",[t._v("zepto.js 类似于jQuery 轻量级 适用于移动端 增加了移动端事件")]),t._v(" "),a("p",[t._v("​\t手指系列事件:")]),t._v(" "),a("p",[t._v("​\ttap:移动端点击事件  click有300ms 延迟")]),t._v(" "),a("p",[t._v("​\tlongTap:长按事件")]),t._v(" "),a("h3",{attrs:{id:"swiper事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swiper事件","aria-hidden":"true"}},[t._v("#")]),t._v(" Swiper事件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("swipe 滑动事件\nswipeLeft 左滑事件\nswipeRight 右滑事件\nswipeUp 上滑事件\nswipeDown 下滑事件\nlongTap 长按事件\ntap 移动端点击事件\ndoubleTap 双击事件\n\nrequestAnimationFrame()\n浏览器专门用来做动画的API，当页面不处于激活状态时会暂停动画，减少了浏览器cpu消耗\n接收一个回调函数\n返回值是requseId 数字\n\ncancelAnimationFrame(requseId)  取消动画\n")])])]),a("h2",{attrs:{id:"touch事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#touch事件","aria-hidden":"true"}},[t._v("#")]),t._v(" touch事件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("touchstart 手指摁下\ntouchmove  移动\n可以获取手指位置信息  e.touches[0]  类数组\ntouchend  离开\ntouchcancel 取消监听touch事件\n")])])]),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("transitionend\n过渡动画结束事件 需要考虑兼容\nwebkitTransitionEnd || mozTransitionEnd  || msTransitionEnd\n\nanimationStart\n帧动画开始后触发事件\nanimationlteration\n帧动画重复后触发事件\nanimationEnd\n帧动画结束后触发事件\n")])])]),a("p",[t._v("本地存储")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("localstorage --\x3e  本地永久存储\nsessionStorage  --\x3e  只存储一次性浏览器关闭清除\n只能用于客户端 \n一般用于移动端 有API\n浏览器定义了一些方法可以直接使用\nHTML5新增的\n添加属性\nStorage.setItem(key,value) Storage.key=value  Storage['key']=value\n获取值\nStorage.getItem(key) Storage.key Storage['key']\n返回对应的value \n删除值\nStorage.removeItem(key)   delete Storage.key\n删除全部\nStorage.clear()\n获取Key 返回下标为index的key\nStorage.key()\n\n如果key 不存在 返回null\n\n属性值默认转为字符串\n\n本地存储只支持字符串格式的数据 数组和对象进行存储时自动调用toString()方法转为字符串进行存储\n\ncookies  可以用于客户端也可以用于服务端\n一般用于PC端\n自己封装插件  jquery.cookies.js\n存储临时数据\n")])])]),a("h3",{attrs:{id:"拖放"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拖放","aria-hidden":"true"}},[t._v("#")]),t._v(" 拖放")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("draggable  拖放属性\n默认  a  img  标签的draggable=true;\n让元素拖动可设draggable=true;\n")])])]),a("p",[t._v("drag  拖  不支持手机  不支持IE9以下的浏览器")]),t._v(" "),a("p",[t._v("元素拖放必须设置draggable=true;")]),t._v(" "),a("p",[t._v("drop 放")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("源对象\ndragstart 源对象开始拖放\ndrag拖放过程\ndragend 源对象拖放结束\n\n过程对象\ndragenter源对象开始进入过程对象范围内\ndragover源对象在过程对象范围内移动\ndragleave源对象离开过程对象\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('文件域\n原生DOM节点input标签type为file的元素.files\n\n功能:得到上传文件列表\n\n返回值:对象\n\n<input type="file" multiple> 默认只能上传一个文件 加了multiple属性可以上传多个文件\nvar files=$(this)[0].files[0]; 电脑本地文件\nfiles得到一个文件对象{\n\tname:文件名称,\n\tsize:文件大小单位b(字节),kb(千字节) mb(兆字节)\n\ttype:文件类型,\n\tlastModified 文件创建时间\n}\n1mb=1024kb\n1lb=1024b\n电脑本地文件 通过Filereader对象读取到浏览器里\nvar readerObject = new FileReader();\n设置要读取的文件\nreaderObject.readAsDataURL(files);\nreaderObject.onload=function(){\n  获取读取结果\n  console.log(this.result);返回值是一个base64格式的字符串\n  var src=this.result;\n}\n获取音频视频总时长\naudio/video.duration 返回值为number 单位为s\n获取当前播放时长\naudio/video.currentTime 返回值为number 单位为s\n')])])]),a("h3",{attrs:{id:"video-audio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#video-audio","aria-hidden":"true"}},[t._v("#")]),t._v(" video audio")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("video 视频\naudio 音频\n\nsrc=\"要加载音频和视频的路径\"\nautoplay 自动播放\nloop 循环播放\n\naudio或video对象.play() 播放\n\n音频或视频加载完成事件 canplaythrough\n  一般浏览器都会禁止此事件\naudio或video对象.addEventListener('canplaythrough',function(){\n  play()\n})\n可以通过按钮绑定\nbtn.onclick=function(){\n  audio或video对象.play()\n}\n\n")])])]),a("h3",{attrs:{id:"swiper-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swiper-插件","aria-hidden":"true"}},[t._v("#")]),t._v(" Swiper 插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1、引入css\n2、定义样式\n    swiper-container  父元素  加了overflow：hidden\n    swiper-wrapper  ul  加了 display:flex\n    swiper-slide   li  \n    swiper-pagination 分页器类名 居中\n3、引入JS\n    实例化swiper\n    var navdata=['已处理'，'待处理'];\n \tnew Swiper(父元素，{\n \t\t//分页器组件\n  \t\tpagination:{\n\t\t\tel:dom元素, \n\t\t\tclickable:true,\n            type: ‘bullets’  圆点（默认）\n                  ‘fraction’  分式 \n                  ‘progressbar’  进度条\n                  ‘custom’ 自定义   //分页器样式  ,\n            renderBullet:function(index,classname){\n  \t\t\t\trenturn '<span \t\t\tclass=\"'+classname+'\">'+navdata[index]+'</span>';\n  \t\t\t}\n\t\t},\n\t\t//切换效果\n\t\teffect: 默认为\"slide\"（位移切换），可设置为'slide'（普通切换、默\t\t\t\t\t认）,\"fade\"（淡入）\"cube\"（方块）\"coverflow\"（3d流）\"flip\"（3d翻转）,\n\t\t//自动切换组件\n\t\t//autoplay:true,  3000\n\t\tautoplay:{\n\t\t\tdelay:1000,//延迟时间\n\t\t\tdisableOnInteraction: true/false  \n\t\t\t用户操作swiper之后，是否禁止autoplay。默认为true：停止。\t\t\t\n\t\t},\n\t\t//无缝轮播\n\t\tloop:true,   //默认为false\n\t\t//初始显示轮播下标\n\t\tinitialSlide:2,\n\t\t//轮播方向\n\t\tdirection:可设置水平(horizontal)或垂直(vertical) ,\n\t\t//回调函数\n\t\ton:{\n  \t\t\t过渡滑块\n  \t\t\tslideChangeTransitionStart:function(){\n  \t\t\t\tconsole.log(this.activeIndex);\n  \t\t\t\tconsole.log(this.realIndex)\n\t\t\t}\n\t\t}\n\t})\n4、操作\n\t实例对象.slideTo(index)  切换到指定的slide\n")])])]),a("h3",{attrs:{id:"better-scroll插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-scroll插件","aria-hidden":"true"}},[t._v("#")]),t._v(" Better-scroll插件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('better-scroll是一款重点解决移动端（已支持PC端）各种滚动场景需求的插件\n\n1、引入JS\n2、父元素的高度或宽度一定要小于子元素的宽度或高度\n\t2.1 父元素要添加相对定位和overflow:hidden\n\t2.2 只查找父元素下第一个子元素 忽略其他子元素\n\n做横滚时父元素宽度不会被撑开 要动态计算子元素的宽度\n\n3、实例化滚动条  \nnew BScroll(父元素,配置项)  默认垂直滚动\n\n常用配置项{\n  scrollbar:false/true 显示滚动条 默认为不显示\n  scrollY:true/false 垂直方向滚动\n  scrollX:false/true 水平方向滚动\n  probeType:0/1/2/3 滚动条探测指数 0是不获取滚动位置不触发scroll事件 \n  \t\t\t\t\t1是滚动停止时触发 2是滚动过程中触发 3是实时触发\n  click:true 能否使用点击事件\n}\n\n上拉加载更多：\n\n1、滚动事件 监测滚动位置 判断loading状态\n默认不激活\nBScroll实例对象.on("scroll",function(){\n  滚动触发操作\n})\nBScroll实例对象.y 当前滚动y轴距离\nBScroll实例对象.x 当前滚动x轴距离\nBScroll实例对象.maxScrollY 最大滚动y轴距离\nBScroll实例对象.maxScrollX 最大滚动x轴距离\n\n2、滚动停止事件 回到初始状态\nBScroll实例对象.on("scrollEnd",function(){\n  滚动条停止滚动触发操作\n})\n3、手指松开判断是否加载数据\nBScroll实例对象.on("touchEnd",function(){\n  if(dom.getAttribute("data-down")==="释放加载更多"){\n  \tfor(var i=0;i<10;i++){\n  \t\tvar p=document.createElement("p");\n  \t\tp.innerHTML=i;\n  \t\tdom.appendChild(p);\n  \t\tBScroll实例对象.refresh();\n\t}\n  }\n})\n4、dom结构发生变化 刷新滚动条 重新计算滚动距离\nBScroll实例对象.refresh();\n\nBScroll实例对象.scrollToElement(dom节点，运动时间，滚动条距当前节点x轴的距离，滚动条距当前节点y轴的距离)\noffsetx true 在父元素中间\noffsety true 在父元素中间\n\nBScroll实例对象.scrollTo(x,y,time)\nx:x轴的距离\ny:y轴的距离\ntime:时间\n\n滚动事件\n实例对象.on("scroll",function(){ \n})\n\n属性\n实例对象.x 当前x轴的距离\n实例对象.y 当前y轴的距离\n实例对象.maxScrollX 当前x轴最大滚动距离\n实例对象.maxScrollY 当前y轴最大滚动距离\n')])])]),a("h2",{attrs:{id:"canvas画布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas画布","aria-hidden":"true"}},[t._v("#")]),t._v(" canvas画布")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('canvas 用于在网页实时生成图像 ，并可以操作图像内容，是一个用JS操作的位图（bitmap）\n\n画布 默认宽300 高150，宽高不能直接在style样式里设置，必须通过属性width，height设置 不带单位 \nJS设置和获取\n\t获取：canvas节点.width    canvas节点.height\n\t设置：canvas节点.width=number  canvas节点.height=number\ncanvas和img可以直接通过width和height属性设置或获取宽高\n获取画布\n\tcanvas节点.getContext("2d");\n\t左上负数 右下正数  \n设置起点\n\t画布.moveTo(x,y)\n设置结束点\n\t画布.lineTo(x,y)\n描边\n\t画布.stroke() (默认黑色)\n设置描边颜色\n\t画布.strokeStyle=颜色值\n填充\n\t画布.fill()\n设置填充颜色\n\t画布.fillStyle=颜色值\n开始路径\n\t画布.beginPath()\n结束路径\n\t画布.closePath()\n绘制矩形\t\n\t画布.rect(x,y,w,h);\n\tw:width 正数向右负数向左;\n\th:height正数向下负数向上;\n填充矩形\n\t画布.fillRect(x,y,w,h) ==> rect()+fill()\n描边矩形\n\t画布.strokeRect(x,y,w,h) ==> rect()+stroke()\n清除矩形内容\n\t画布.clearRect(x,y,w,h)\n绘制文字\n\t画布.fillText(文本内容，x,y) 实心文字\n\t画布.strokeText(文本内容，x,y) 空心文字\n设置文字大小\n\t画布.font=文字大小 粗细 字体\n设置文字水平对齐方式\n\t画布.textAlign="center|left(默认)|right|start|end"\n设置文字垂直对齐方式\n\t画布.textBaseline="top|bottom(默认)|middle"\n绘制虚线\n\t画布.setLineDash([线段长度，线段间距]);\n旋转画布(以画布原点旋转)\n\t画布.rotate(弧度)\n移动画布原点\n\t画布.translate(x,y)\n绘制弧形\n\t画布.arc(x,y,r,start,end,顺时针(false)逆时针(true));\n\tx,y圆心点\n\tr半径\n\tstart起始弧度  0度在3点钟方向\n\tend 停止弧度\nMath.PI/180 一角度等于多少弧度\n设置描边宽度\n\t画布.lineWidth=数字\n本身角度加起始角度等于终止角度\n公式\n\tMath.cos(弧度)*半径=x;\n\tMath.sin(弧度)*半径=y;\n滚动条标签\n  input type="range" value="1" min="1" max="10" \tstep="8"\n  value越小显示在左边,最小1最大10,一次移动8\n导出画布\n\tcanvas.节点.toDataURL();\n设置或返回如何将一个源(新的)图像绘制到目标(已有)图像上\n源对象=你打算放置到画布上的绘图\n目标对象=你已经放置在画布上的绘图\n\tglobalCompositeOperation="destination-out"\n\tglobalCompositeOperation="source-over"(默认)\n保存画布状态\n\t画布.save()\n还原画布状态\n\t画布.restore()\n设置阴影颜色\n\t画布.shadowColor=颜色值\n设置模糊程度\n\t画布.shadowBlur=数值\n设置阴影x轴的距离\n\t画布.shadowOffsetX=数值\n设置阴影y轴的距离\n\t画布.shadowOffsetY=数值\n设置虚线\n\t画布.setLineDash([参数，参数])\n\t第一个参数是线段长度,第二个参数是每段的距离\n渐变添加颜色\n\t画布.addColorStop()\n渐变\n与CSS3中的渐变类似 \ncanvas中的渐变也分为线性渐变和径向渐变 \n和图案填充的类似，需要定义我们的渐变规则\n\n线性渐变\n\ncreateLinearGradient(x1, y1, x2, y2) \n表示定义从一点到另一点的线性渐变 \n返回一个CanvasGradient()对象 \n上面有addColorStop()用来定义我们的渐变色 \n0就是起始点，1是终点\n\neg:\nvar lGradient = ctx.createLinearGradient(0, 0, 0, 250);\nlGradient.addColorStop(0, \'#000\');\nlGradient.addColorStop(1, \'#fff\');\nctx.fillStyle = lGradient;\nctx.fillRect(0, 0, 500, 250);\n\n径向渐变\n\ncreateRadialGradient(x1, y1, r1, x2, y2, r2) \n相比线性渐变，多了两个点的半径参数 \n除此之外使用方法和上面是一样的 \n就不多做解释了 \n比如说我们可以绘制一个渐变同心圆\n\nvar rGradient = ctx.createRadialGradient(250, 250, 100, 250, 250, 250);\nrGradient.addColorStop(0, \'#fff\');\nrGradient.addColorStop(0.5, \'#000\');\nrGradient.addColorStop(1, \'#fff\');\nctx.fillStyle = rGradient;\nctx.fillRect(0, 0, 500, 500);\n\n导出图片\ncanvas节点.toDataURL()\n\n获取像素数据\n  画布.getImageData(x,y,w,h)返回ImageData对象，该\t对象拷贝了画布指定矩形的像素返回\t\t\t\tImageDatacolor/alpha以素组形式存在\n  \n设置指定像素数据\n\t画布.putImageData(像素数据对象,x,y)\n\n绘制图片\n画布.drawImage(要绘制的图片对象,绘制的起点坐标（x,y）,绘制图片的宽和高（w,h）)\n\n灰度图片计算公式\n\t0.299*r+0.578*g+0.114*b\n\n三角函数\n\t正弦：sin =对边/斜边 =y/r\n\t余弦：cos =领边/斜边=x/r\n\tMath.sin(弧度)\n\tMath.cos(弧度)\n\t\nImage的complete 属性可返回浏览器是否已完成对图片的加载，加载完成返回true 否则返回false\n\nencodeURIComponent() 编码\nencodeURI() 编码\ndecodeURIComponent 解码\ndecodeRI 解码\n')])])]),a("h2",{attrs:{id:"swiper-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swiper-animation","aria-hidden":"true"}},[t._v("#")]),t._v(" swiper-animation")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.引入四个文件\n    swiper.css\n    animation.css\n    swiper.js\n    swiper.animation.js\n2.添加动画的元素\n    首先给元素添加.ani类名\n    属性\n    swiper-animate-effect：切换效果，例如 fadeInUp \n    swiper-animate-duration：可选，动画持续时间（单位秒），例如 0.5s\n    swiper-animate-delay：可选，动画延迟时间（单位秒），例如 0.3s\n\n3.swiper初始化 init\n     swiperAnimateCache(); //隐藏动画元素 \n     swiperAnimate(); //开始动画\n\n4.切换slide  slideChnageTransitionStart || slideChnageTransitionEnd\n    swiperAnimate(); //开始执行某一页动画\n")])])]),a("h2",{attrs:{id:"bootstrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap","aria-hidden":"true"}},[t._v("#")]),t._v(" bootstrap")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('\x3c!-- HTML5 shim 和 Respond.js 是为了让 IE8 支持 HTML5 元素和媒体查询（media queries）功能 --\x3e\n    \x3c!-- 警告：通过 file:// 协议（就是直接将 html 页面拖拽到浏览器中）访问页面时 Respond.js 不起作用 --\x3e\n    \x3c!--[if lt IE 9]>\n      <script src="https://cdn.bootcss.com/html5shiv/3.7.3/html5shiv.min.js"><\/script>\n      <script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"><\/script>\n    <![endif]--\x3e\nbootstrap是最受欢迎的HTML,CSS,JS框架，用于响应式布局、移动项目优先的WEB项目\n    \n1、父容器\n\t.container 响应式布局 会根据浏览器宽度发生改变 4个断点\n\twinw>1200 1170\n\twinw>992 970\n\twinw>768 750\n\twindw<768 100%\n\t.container-fluid 流式布局 宽度永远100%\n2、文字对齐方式\n\t.text-center 居中\n\t.text-left 左对齐\n\t.text-right 右对齐\n\t.text-nowrap 不换行\n3、文字大小写\n\t.tetx-capitalize 首字母大写\n4、表格\n\t.table 基础类\n\t.table-striped 条纹表格\n\t.table-bordered 带表框表格\n\t.table-hover 悬停表格\n\t.table-condensed 紧缩表格\n\t状态类\n\t.active 灰色（悬停状态）\n\t.success 绿色（成功状态）\n\t.info 蓝色（信息状态）\n\t.warning 黄色（警告状态）\n\t.danger 红色（危险状态）\n\t \n\t 响应式表格\n\t \ttable 外加一个div div加类名.table-responsive\n5、表单\n\tdiv加 .form-group 让表单组获得更好的排列\n\t.form-control 表单控件给input元素添加\n\tform加 .from-inline 水平排列的表单 让form-group在一行显示\n\t\t   .form-horizontal 让label 和 input 在一行显示\n\t\t   \t\t\t\t\tinput外加div 给div和label宽度\n\tlabel加 .control-label 让label元素和input元素水平垂直对齐\n\tspan加 .form-control-feedback 文本框后图标(小眼睛等)\n\t\n\t\tcss自带样式\tpointer-events:auto(默认值)|none(不识别任何事件)\n6、辅助类\n\t.center-block 让内容块居中 ==> margin:0 auto;\n\t关闭按钮 \n\t<button type="button" class="close"><span>&times;</span></button>\n\t倒三角\n\t<span class="caret"></span>\n\t快速浮动\n\t.pull-left\n\t.pull-right\n\t清浮动\n\t.clearfix\n\t显示隐藏\n\t.show .hidden\n7、按钮\n\t.btn 基础类名\n\t.btn-lg 大按钮\n\t.btn-md 中等按钮(默认按钮大小)\n\t.btn-sm 小按钮\n\t.btn-xs 最小按钮\n\t\n\t按钮状态\n\t.btn-default 默认\n\t.btn-success 成功(绿色)\n\t.btn-primary 首选项(深蓝色)\n\t.btn-info 信息(浅蓝色)\n\t.btn-warning 警告(黄色)\n\t.btn-danger 危险(红色)\n\t.btn-link 链接\n8、***栅格系统***\n\t行 .row   列.col\n\t1行分为12列\n\tcol-1 ==> width:8.3333%\n\tcol-2 ==> width:16.6666%\n\tcol-3 ==> width:25%\n\tcol-6 ==> width:50%\n\tcol-9 ==> width:75%\n\tcol-12 ==> width:100%\n\t\n\t.col-xs- 超小屏幕 <768px\n\t.col-sm- 小屏幕 >=768px\n\t.col-md- 中屏幕 >=992px\n\t.col-lg- 大屏幕 >=1200px\n\t\n\t.col-屏幕-offset-[0|12] 列偏移 相当于margin-left\n9、导航\n\t\n10、模态框\n\t结构\n\t.modal\n\t\t.modal-dialog\n\t\t\t.modal-content\n\t\t\t\t.modal-header\n\t\t\t\t.modal-body\n\t\t\t\t.modal-footer\n\t目标元素\n\tdata-target="#dialog"\n\t切换类型\n\tdata-toggle="modal"\n\t关闭模态框\n\tdata-dismiss="modal"\n')])])])])}],!1,null,null,null);n.default=s.exports}}]);