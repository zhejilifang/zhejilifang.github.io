## git

~~~	
Git是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
版本控制系统是用来记录项目修改历史的
和git类似的还有SVN SVN是一个集中式的版本控制系统
区别：
GIT不仅仅是个版本控制系统，它也是个内容管理系统(CMS),工作管理系统等。

如果你是一个具有使用SVN背景的人，你需要做一定的思想转换，来适应GIT提供的一些概念和特征。

Git 与 SVN 区别点：

1、GIT是分布式的，SVN不是：这是GIT和其它非分布式的版本控制系统，例如SVN，CVS等，最核心的区别。

2、GIT把内容按元数据方式存储，而SVN是按文件：所有的资源控制系统都是把文件的元信息隐藏在一个类似.svn,.cvs等的文件夹里。

3、GIT分支和SVN的分支不同：分支在SVN中一点不特别，就是版本库中的另外的一个目录。

4、GIT没有一个全局的版本号，而SVN有：目前为止这是跟SVN相比GIT缺少的最大的一个特征。

5、GIT的内容完整性要优于SVN：GIT的内容存储使用的是SHA-1哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。

git config --global user.name xxxx 全局配置用户名
git config --global user.email xxxx 全局配置邮箱
git config --list 查看全局配置 

git init 初始化一个本地版本库
git status 查看工作区和暂存区状态
工作区的修改提交到本地版本库需要两部
第一步：git add . 把工作区所有的修改提交到暂存区
第二步：git commit -m '描述'把暂存区的修改提交到本地版本库

git add 指定文件名 filename1 filename2
git log 查看历史记录
git reflog 查看所有的历史记录
ls 查看当前文件夹下有哪些文件
cd 进入某一个文件 cd..退出
clear 清屏
cat 文件名 查看文件内容
git diff 查看工作区具体修改
git diff --cached 查看暂存区具体的修改

q 退出

撤销：
	1、撤销工作区的修改 git checkout -- index.html(文件名)
	2、撤销暂存区的修改 
		第一步：先把修改从暂存区撤回到工作区
			git reset index.html(文件名)
		第二步：撤销工作区的修改
			git checkout -- index.html(文件名)
	3、版本回退 
			git reset --hard HEAD^ 回退到上一个版本
			git reset --hard HEAD^^ 回退到上上个版本
			git reset --hard commit_id 回退到指定版本


github
gitHub是一个面向开源及私有软件项目的托管平台，因为只支持git 作为唯一的版本库格式进行托管，故名gitHub。
github 支持两种传输协议 https和ssh
	ssh协议需要配置公钥和秘钥
	https协议需要用户名密码
git clone 仓库的地址 克隆远程仓库
.gitignore 设置忽略文件
git push origin master 把本地版本库的修改提交到远程
git remote add origin 仓库地址 把本地仓库和远程仓库关联起来
git remote -v 查看关联的远程仓库是否成功
git pull origin master 从远程拉取代码到本地

echo '# new'>>README.md 
git init  git add README.md git commit -m 

分支：
git branch 分支名  新建一个分支
git branch 查看本地分支
git branch -a 查看所有的分支
git branch -r 查看远程分支
git checkout 分支名 切换分支
git branch -D 分支名 删除没有合并的分支
git branch -d 分支名 删除                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
分支
git cheackout -b 分支名 创建并切换分支
<<<<<<< HEAD ===== >>>>>>> 冲突 ===> 手动解决

git merge 分支名(dev) 确保你现在所在的master,把dev分支合并到master分支


~~~

## 团队合作开发步骤
![步骤一](/step1.png)
![步骤二](/step2.png)
![步骤三](/step3.png)

###	gulp

~~~
gulp是一个前段自动化构建工具 基于node体系
优点：易于使用、构建快速、插件高质、易于学习

安装：
	全局安装gulp4.0：npm install gulp@next --global 
	全局安装gulp-cli:npm install gulp-cli --global
	本地安装：npm install gulp@next --save-dev
    
    在项目根目录下建立一个gulpfile.js的文件
    
引入：var gulp=require('gulp');

=====
gulp的api
1、gulp.task(任务名,回调函数)  建gulp任务
	任务名：default ,执行：gulp
	任务名：task,执行：gulp task
2、gulp.src(读取文件的规则,[opt]) 
	有一个pipe()方法
	规则：必须为字符串或数组
		* 匹配所有的文件
        ** 匹配0个或多个文件夹
        {jpg,png} 或
        ! 非 不匹配
	第二个参数可选,必须为对象 {base:'src'}
3、gulp.dest(输出的文件目录) 输出文件

插件：gulp-sass 编译sass
	引入：var sass=require('gulp-sass');
	gulp.task('sassTask',function(){
  		return gulp.src('./src/sass/*.scss')
  			.pipe(sass())
  			.pipe(gulp.dest('./src/css'))
	});
	gulp.task('watch',function(){
		return gulp.watch('./src/sass/*.scss',gulp.series('sassTask'))
	});
监听：gulp.watch();

gulp任务的执行顺序是异步的 
gulp.series(task1,task2...);串行执行
gulp.parallel(task1,task2...);并行执行

压缩css gulp-clean-css
var minCss=require('gulp-clean-css')
压缩js gulp-uglify
var uglify=require('gulp-uglify');

起服务插件gulp-webserver
	server({
  		port:9090, 配置端口号
  		host:'169.254.204.130', 配置ip
  		livereload:true, 自动刷新浏览器
  		open:true, 自动打开浏览器
  		fallback:'demo.htm',配置默认打开的文件
  		middleware:function(req,res,next){
  			
		},拦截前端请求
	})
	
gulp-babel ES6插件
babel-preset-es2015必须下载

.pipe(babel({
  	presets:["es2015"]
}))

gulp-autoprefixer 自动添加前缀插件
gulp-concat 合并文件
gulp-clean 删除文件
gulp-htmlmin 压缩html
gulp-rev 添加后缀MD5
gulp-rev-collector 替换文件
~~~

### browserify

~~~
Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。

可以进行模块化开发 基于node体系,不是基于gulp体系

var browserify=require('browserify');

//转换流
var source=require('vinyl-source-stream');
var buffer=require('vinyl-buffer');

//读取调试
var sourcemaps=require('gulp-sourcemaps') ;
//合并文件流
var merge2=require('merge2');
//重命名文件
var rename=require('gulp-rename');

gulp.task('bundle',function(){
  	var fileArr=['./src/js/index.js','./src/js/detail.js'];
  	var streamArr=fileArr.map(function(entry){
  		return browserify({
          entries:'./src/js/index.js' ,//入口文件
          debug:true
        }).bundle() //返回的是node普通的文件流
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(rename({
  			extname:'.bundle.js',
  			dirname:''
		}))
        .pipe(sourcemaps.init({loadMaps:true}))
        .pipe(sourcemaps.write()) //写入路径
        .pipe(gulp.dest('./src/js/bundle'))
	})
	return merge2(streamArr)
})

~~~

### require.js

~~~
requirejs是一个js模块载入框架 遵循AMD规范 ==>异步加载规范

nodejs 遵循commonjs规范 ==>同步加载规范

好处：
	1、解决了文件之间的依赖
	2、异步加载，不会阻塞页面的加载

Api:requirejs、require、define
	requirejs===require
用法：
	require([依赖模块名],function(){//载入模块
	})
	第一个参数：数据类型array [模块1，模块2]
	第二个参数：回调函数 执行代码
	
	define(模块名,[],function(){
  		return
	});
	第一个参数：模块名 数据类型string 一般不写
	第二个参数：依赖的模块 数据类型array 即使只有一个依赖模块也必须为数组
	第三个参数：回调函数 要执行的代码

async="true" 设置requirejs 为异步加载 ie为defer
data-main 指定项目主入口文件
require.config({ //配置
	baseUrl:'/js/', 配置基准路径 绝对路径 需要起服务
  	paths:{
  		'jquery':'./libs/jquery-3.3.1.min', 
  		'index':'./page/index' //不能加.js后缀
	},
	shim:{	//配置不符合AMD规范的
		'util':{
  			// export:'sum' 只导出一个
  			init:function(){ //导出多个
  				return {
  					sum:sum,
  					min:min
				}
			},
			deps:['jquery'] //设置依赖
		}
	}
});
require['index']
路径查找规则：
	1、在页面引入模块，路径相对于页面的路径去查找
	2、如果指定了path和主入口文件，要相对于主入口文件查找
	3、如果指定了baseUrl，路径相对于baseUrl路径查找

http-server 起一个小型服务 
	npm install http-server -g
	http-server -p 端口号
	

~~~

### handlebars

~~~
Handlebars 是 JavaScript 一个语义模板库，通过对view和data的分离来快速构建Web模板。

handlebars表达式 以{{开始，以}}结尾

循环:
{{#each 数组}} 

{{/each}}

../访问父级  . 访问子级

{{!单行注释内容}}
{{!--多行注释内容--}}

注册帮助：一定要放在获取数据之前
{{addIndex @index}}
Handlebars.registerHelper('addIndex',function(index){
  	return index+1
})

{{#if true/false}}
	条件为真显示
	{{else}}
	条件为假显示
{{/if}}

{{#unless true/false}}
	条件为假显示
	{{else}}
	条件为真显示
{{/unless}}

{{#with this指向}}
{{/with}}

<script src="handlebar.js"></script>
<script id="tpl" type="text/x-handlebars-template">
    <div class="entry">
      <h1>{{title}}</h1>
      <div class="body">
        {{body}}
      </div>
	</div>
</script>
第一步：获取handlebars模板
var source=$('#tpl').html();
第二步：编译模板
var template=Handlebars.compile(source);
第三部：传入数据
var context = {title: "My New Post", body: "This is my first post!"}
var html    = template(context);
第四步：渲染页面
$('.warp').html(html)

~~~



