(function(e){function t(t){for(var s,i,r=t[0],n=t[1],c=t[2],d=0,m=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);u&&u(t);while(m.length)m.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],s=!0,r=1;r<a.length;r++){var n=a[r];0!==o[n]&&(s=!1)}s&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},o={app:0},l=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],n=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=n;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e67":function(e,t,a){},"21bb":function(e,t,a){"use strict";var s=a("2dad"),o=a.n(s);o.a},2512:function(e,t,a){"use strict";var s=a("f894"),o=a.n(s);o.a},"29fb":function(e,t,a){},"2dad":function(e,t,a){},"41e1":function(e,t,a){"use strict";var s=a("f845"),o=a.n(s);o.a},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},l=[],i=(a("5c0b"),a("2877")),r={},n=Object(i["a"])(r,o,l,!1,null,null,null),c=n.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"content"},[a("el-container",[a("el-header",[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:"/login1.png",alt:""}}),a("div",{staticClass:"header-title"},[e._v("电商后台管理系统")])]),a("div",{staticClass:"header-right"},[a("el-button",{attrs:{type:"info"},on:{click:e.open}},[e._v("退出")])],1)]),a("el-container",[a("el-aside",{style:{width:e.isCollapse?"64px":"199px"},attrs:{width:"199px"}},[a("div",{staticClass:"top-bar",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e._v(" ||| ")]),a("el-row",[a("el-col",{staticStyle:{width:"200px"},attrs:{span:12}},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"collapse-transition":!1,"default-active":"2",collapse:e.isCollapse,"unique-opened":!0,"background-color":"#333744","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-user-solid"}),a("span",[e._v("用户管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"1-1"}},[a("router-link",{attrs:{to:"/home/user"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 用户列表 ")])],1)],1)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-release"}),a("span",[e._v("权限管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"2-1"}},[a("router-link",{attrs:{to:"/home/role"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 角色列表 ")])],1)],1),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"2-2"}},[a("router-link",{attrs:{to:"/home/auth"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 权限列表 ")])],1)],1)],2),a("el-submenu",{attrs:{index:"3"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-goods"}),a("span",[e._v("商品管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"3-1"}},[a("router-link",{attrs:{to:"/home/shop"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 商品列表 ")])],1)],1),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"3-2"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 分类参数 ")])],1),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"3-3"}},[a("router-link",{attrs:{to:"/home/shoplist"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 商品分类 ")])],1)],1)],2),a("el-submenu",{attrs:{index:"4"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-order"}),a("span",[e._v("订单管理")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"4-1"}},[a("router-link",{attrs:{to:"/home/order"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 订单列表 ")])],1)],1)],2),a("el-submenu",{attrs:{index:"5"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-s-platform"}),a("span",[e._v("数据统计")])]),a("el-menu-item-group",[a("el-menu-item",{attrs:{index:"5-1"}},[a("i",{staticClass:"el-icon-menu"}),e._v(" 数据列表 ")])],1)],2)],1)],1)],1)],1),a("el-main",[a("router-view")],1)],1)],1)],1)])},m=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("h3",[e._v("Welcome!")])])])}],f={data(){return{}},created(){},mounted(){},methods:{}},g=f,b=Object(i["a"])(g,p,h,!1,null,"825da5e6",null),v=b.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_name"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("用户管理")]),a("el-breadcrumb-item",[e._v("用户列表")])],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"in-btn"},[a("div",{staticClass:"text"},[a("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.ajaxlogin},model:{value:e.usersParams.query,callback:function(t){e.$set(e.usersParams,"query",t)},expression:"usersParams.query"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:function(t){return e.ajaxlogin()}}})],1),a("div",{staticClass:"add"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加用户")])],1)]),a("div",{staticClass:"adduser"},[a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px",model:e.from}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{model:{value:e.from.name,callback:function(t){e.$set(e.from,"name",t)},expression:"from.name"}})],1),a("el-form-item",{attrs:{label:"密码"}},[a("el-input",{model:{value:e.from.pass,callback:function(t){e.$set(e.from,"pass",t)},expression:"from.pass"}})],1),a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{model:{value:e.from.elme,callback:function(t){e.$set(e.from,"elme",t)},expression:"from.elme"}})],1),a("el-form-item",{attrs:{label:"电话"}},[a("el-input",{model:{value:e.from.phone,callback:function(t){e.$set(e.from,"phone",t)},expression:"from.phone"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ajaxlist(e.from)}}},[e._v("确 定")])],1)],1)],1),[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:e.tableData}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"mobile",label:"电话"}}),a("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),a("el-table-column",{attrs:{label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(a){return e.ajaxstate(t.row.id,t.row.mg_state)}},model:{value:t.row.mg_state,callback:function(a){e.$set(t.row,"mg_state",a)},expression:"scope.row.mg_state"}})]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.ajaxedit(t.row)}}}),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}}),a("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-s-help",circle:""},on:{click:function(t){return e.ajaxxian()}}})]}}])})],1)],a("div",{staticClass:"edit"},[a("el-dialog",{attrs:{title:"编辑页面",visible:e.show,width:"60%"},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),a("el-form-item",{attrs:{label:"邮箱"}},[a("el-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("el-form-item",{attrs:{label:"手机号"}},[a("el-input",{model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addedit()}}},[e._v("确 定")])],1)],1)],1),a("div",{staticClass:"ajaxquan"},[a("el-dialog",{attrs:{title:"分配权限",visible:e.flag,width:"50%"},on:{"update:visible":function(t){e.flag=t}}},[[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.roleName,value:e.value}})})),1)],a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.flag=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ajaxquan()}}},[e._v("确 定")])],1)],2)],1),a("el-pagination",{attrs:{"current-page":e.usersParams.pagenum,"page-sizes":[1,2,4,8,12],"page-size":e.usersParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:Number(e.totalNum)},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],2)],1)},x=[],y={data(){return{dialogVisible:!1,from:{name:"",pass:"",elme:"",phone:""},value:"",ajaxflag:!1,totalNum:"",usersParams:{query:"",pagenum:1,pagesize:4},tableData:[],list:[],flag:!1,show:!1,b:"",username:"",email:"",mobile:"",key:0,delnum:0,options:[],value:""}},created(){},mounted(){this.ajaxlogin()},methods:{ajaxlogin(){this.$axios.get(`/users?query=${this.usersParams.query}&pagenum=${this.usersParams.pagenum}&pagesize=${this.usersParams.pagesize}`).then(e=>{console.log(e),this.tableData=e.data.data.users,console.log(this.tableData),this.totalNum=e.data.data.total,console.log(this.totalNum)})},ajaxlist(){this.$axios.post("/users",{username:this.from.name,password:this.from.pass,email:this.from.elme,mobile:this.from.phone}).then(e=>{console.log(e),this.list=this.tableData,this.list=e.data.meta,""==this.from.name||""==this.from.pass||""==this.from.elme||""==this.from.phone?(this.$message({type:"error",message:"数据不能为空"}),this.dialogVisible=!0):this.$message({type:"success",message:"添加用户成功"}),this.ajaxlogin(),this.from.name=this.from.pass=this.from.emle=this.from.phone=""}),this.dialogVisible=!1},handleSizeChange:function(e){this.usersParams.pagesize=e,console.log(this.size),this.ajaxlogin()},handleCurrentChange:function(e){this.usersParams.pagenum=e,console.log(this.page),this.ajaxlogin()},ajaxxian(e){this.$axios.get("/roles").then(e=>{console.log(e),this.options=e.data.data}),this.flag=!0},ajaxquan(e){this.$axios.put("/users/:id/role").then(e=>{console.log(e.data.meta)}),this.flag=!1},open(e){this.$confirm("此操作将永久删除该数据, 是否继续?","您确定要删除吗",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$axios.delete("/users/"+e).then(e=>{console.log(e),this.ajaxlogin()}),this.$message({message:"删除成功",duration:1500,type:"success"})}).catch(()=>{this.$message({message:"已取消删除",duration:1500,type:"info"})})},ajaxedit(e){this.show=!0,this.b=e.id,this.username=e.username,this.email=e.email,this.mobile=e.mobile,console.log(e)},addedit(){this.$axios.put("/users/"+this.b,{email:this.email,mobile:this.mobile}).then(e=>{console.log(e)}),this.$message({message:"更新成功",duration:1500,type:"success"}),this.show=!1,this.ajaxlogin()},async ajaxstate(e,t){console.log(e,t);let{data:a}=await this.$axios.put(`users/${e}/state/${t}`);console.log(a),this.$message({type:"success",message:"修改用户状态成功",duration:1e3}),this.ajaxlogin()}}},w=y,C=(a("db8b"),Object(i["a"])(w,_,x,!1,null,null,null)),k=C.exports,$={data(){return{isCollapse:!1}},components:{Hello:v,User:k},created(){},mounted(){},methods:{open(){window.sessionStorage.removeItem("token"),this.$confirm("您确定要退出吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({message:"退出成功",duration:1500,type:"success"}),this.$router.push("/login")})},handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)}}},j=$,P=(a("21bb"),Object(i["a"])(j,d,m,!1,null,null,null)),z=P.exports,S=a("a55b"),D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user_role"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("权限管理")]),a("el-breadcrumb-item",[e._v("角色列表")])],1),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"adduser"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!0}}},[e._v("添加用户")])],1),a("div",{staticClass:"add_tan"},[a("el-dialog",{attrs:{title:"添加角色",visible:e.dialogVisible,width:"60%",height:"44%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px",model:e.from}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:e.from.Name,callback:function(t){e.$set(e.from,"Name",t)},expression:"from.Name"}})],1),a("el-form-item",{attrs:{label:"角色描述"}},[a("el-input",{model:{value:e.from.Desc,callback:function(t){e.$set(e.from,"Desc",t)},expression:"from.Desc"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ajaxadd()}}},[e._v("确 定")])],1)],1)],1),a("div",{staticClass:"rolelist"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"expand",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(s,o){return a("el-row",{key:s.id,class:["dbottom",0===o?"dbtop":"","center"]},[a("el-col",{attrs:{span:5}},[a("el-tag",{attrs:{closable:""},on:{close:function(a){return e.open(t.row,s.id)}}},[e._v(" "+e._s(s.authName)+" ")]),a("i",{staticClass:"el-icon-caret-right"})],1),a("el-col",{attrs:{span:19}},e._l(s.children,(function(s,o){return a("el-row",{key:s.id,class:[0===o?"":"dbtop","center"]},[a("el-col",{attrs:{span:6}},[a("el-tag",{attrs:{type:"success",closable:""},on:{close:function(a){return e.open(t.row,s.id)}}},[e._v(e._s(s.authName))]),a("i",{staticClass:"el-icon-caret-right"})],1),a("el-col",{attrs:{span:18}},e._l(s.children,(function(s){return a("el-tag",{key:s.id,attrs:{closable:"",type:"warning"},on:{close:function(a){return e.open(t.row,s.id)}}},[e._v(" "+e._s(s.authName)+" ")])})),1)],1)})),1)],1)}))}}])}),a("el-table-column",{attrs:{type:"index",label:"#",width:"40"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称"}}),a("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.ajaxedit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.ajaxremove(t.row.id)}}},[e._v("删除")]),a("el-button",{attrs:{type:"warning",size:"mini",icon:"el-icon-star-off",circle:""},on:{click:function(a){return e.showSetRight(t.row)}}},[e._v("设置权限")])]}}])})],1)]],2),a("div",{staticClass:"role_edit"},[a("el-dialog",{attrs:{title:"修改用户",visible:e.show,width:"60%"},on:{"update:visible":function(t){e.show=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:e.roleName,callback:function(t){e.roleName=t},expression:"roleName"}})],1),a("el-form-item",{attrs:{label:"活动区域"}},[a("el-input",{model:{value:e.roleDesc,callback:function(t){e.roleDesc=t},expression:"roleDesc"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.show=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ajaxasync()}}},[e._v("确 定")])],1)],1)],1),a("div",{staticClass:"showSetRight"},[a("el-dialog",{attrs:{title:"分配权限",visible:e.showRight,width:"50%"},on:{"update:visible":function(t){e.showRight=t},close:function(t){return e.setRightClose()}}},[a("el-tree",{ref:"treeRef",attrs:{data:e.rightsList,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.deyKeys}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.showRight=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.allotRights()}}},[e._v("确 定")])],1)],1)],1)])],1)},N=[],V={data(){return{dialogVisible:!1,from:{Name:"",Desc:""},tableData:[],list:[],roleid:"",roleName:"",roleDesc:"",show:!1,showRight:!1,rightsList:[],treeProps:{label:"authName",children:"children"},deyKeys:[],roleId:""}},created(){},mounted(){this.ajaxrole()},methods:{ajaxrole(){this.$axios.get("/roles").then(e=>{console.log(e),this.tableData=e.data.data})},ajaxadd(){this.$axios.post("/roles",{roleName:this.from.Name,roleDesc:this.from.Desc}).then(e=>{console.log(e),this.list=this.tableData,this.list=e}),this.ajaxrole(),this.dialogVisible=!1,this.from.Name=this.from.Desc=""},ajaxremove(e){this.$confirm("此操作将永久删除该数据, 是否继续?","删除用户角色",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$axios.delete("/roles/"+e).then(e=>{console.log(e),this.ajaxrole()}),this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},ajaxedit(e){this.show=!0,this.roleid=e.id,this.roleName=e.roleName,this.roleDesc=e.roleDesc},ajaxasync(){this.$axios.put("/roles/"+this.roleid,{roleName:this.roleName,roleDesc:this.roleDesc}).then(e=>{console.log(e),this.$message({message:"修改角色成功",type:"success"}),this.ajaxrole(),this.show=!1})},async open(e,t){let a=await this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch(e=>e);if("confirm"!==a)return this.$message.info("取消了删除");this.$message({message:"删除成功",type:"success"});let{data:s}=await this.$axios.delete(`roles/${e.id}/rights/${t}`);console.log(s),e.children=s.data},async showSetRight(e){this.roleId=e.id;let{data:t}=await this.$axios.get("rights/tree");if(console.log(t),200!==t.meta.status)return this.$message.info("获取数据权限失败");this.rightsList=t.data,console.log(this.rightsList),this.getLeveKeys(e,this.deyKeys),this.showRight=!0},getLeveKeys(e,t){if(!e.children)return t.push(e.id);e.children.forEach(e=>this.getLeveKeys(e,t))},setRightClose(){this.deyKeys=[]},async allotRights(){let e=[...this.$refs.treeRef.getCheckedKeys(),...this.$refs.treeRef.getHalfCheckedKeys()];console.log(e);e.join(",");let{data:t}=await this.$axios.post(`roles/${this.roleId}/rights`,{rids:this.idStr});this.$message({message:"设置权限成功",type:"success"}),this.ajaxrole(),console.log(t),this.showRight=!1}}},q=V,O=(a("b6f4"),Object(i["a"])(q,D,N,!1,null,"38907b87",null)),E=O.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"auth_role"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("权限管理")]),a("el-breadcrumb-item",[e._v("权限列表")])],1),a("div",{staticClass:"auth_card"},[a("el-card",{staticClass:"box-card"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"40"}}),a("el-table-column",{attrs:{prop:"authName",label:"权限名称"}}),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),a("el-table-column",{attrs:{prop:"level",label:"权限等级"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?a("el-tag",[e._v("一级")]):"1"===t.row.level?a("el-tag",{attrs:{type:"success"}},[e._v("二级")]):a("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)]],2)],1)],1)},T=[],L={data(){return{tableData:[]}},created(){},mounted(){this.ajaxquan()},methods:{async ajaxquan(){let{data:e}=await this.$axios.get("/rights/list");console.log(e),this.tableData=e.data}}},B=L,I=(a("fceb"),Object(i["a"])(B,R,T,!1,null,"0a872c48",null)),K=I.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{cote_shop:""}},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品列表")])],1),a("div",{staticClass:"shop_card"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"search_shp"},[a("div",{staticClass:"search"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.ajaxshop},model:{value:e.userParams.query,callback:function(t){e.$set(e.userParams,"query",t)},expression:"userParams.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.ajaxshop},slot:"append"})],1)],1),a("div",{staticClass:"search_btn"},[a("el-button",{attrs:{type:"primary"}},[e._v("添加商品")])],1)]),a("div",{staticClass:"shop_sta"},[[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{staticClass:"table1",attrs:{type:"index",label:"#",width:"40"}}),a("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",width:"700"}}),a("el-table-column",{attrs:{prop:"goods_price",label:"商品价格(元)",width:"110"}}),a("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量",width:"90"}}),a("el-table-column",{attrs:{prop:"add_time",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("timefn")(t.row.add_time)))]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.shopedit(t.row)}}}),a("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.shopdelete(t.row.goods_id)}}})]}}])})],1)]],2),a("div",{staticClass:"shop_pagina"},[a("el-pagination",{attrs:{"current-page":e.userParams.pagenum,"page-sizes":[10,15,20,25],"page-size":e.userParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalnum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"shop_edit"},[a("el-dialog",{attrs:{title:"编辑商品",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{model:{value:e.shopParams.goodsname,callback:function(t){e.$set(e.shopParams,"goodsname",t)},expression:"shopParams.goodsname"}})],1),a("el-form-item",{attrs:{label:"价格区域"}},[a("el-input",{model:{value:e.shopParams.goodsprice,callback:function(t){e.$set(e.shopParams,"goodsprice",t)},expression:"shopParams.goodsprice"}})],1),a("el-form-item",{attrs:{label:"商品重量"}},[a("el-input",{model:{value:e.shopParams.goodswith,callback:function(t){e.$set(e.shopParams,"goodswith",t)},expression:"shopParams.goodswith"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addedit()}}},[e._v("确 定")])],1)],1)],1)])],1)],1)},H=[],F={data(){return{dialogVisible:!1,tableData:[],list:[],userParams:{query:"",pagenum:1,pagesize:10},totalnum:0,dialogVisible:!1,shopParams:{goodsname:"",goodsprice:"",goodswith:"",goodsid:"",goodsnum:""}}},created(){},mounted(){this.ajaxshop()},methods:{async ajaxshop(){let{data:e}=await this.$axios.get("/goods",{params:this.userParams});console.log(e),this.tableData=e.data.goods,this.totalnum=e.data.total,console.log(this.tableData)},handleSizeChange(e){console.log(e),this.userParams.pagesize=e,this.ajaxshop()},handleCurrentChange(e){console.log(e),this.userParams.pagenum=e,this.ajaxshop()},shopedit(e){this.dialogVisible=!0,this.shopParams.goodsid=e.goods_id,this.shopParams.goodsname=e.goods_name,this.shopParams.goodsprice=e.goods_price,this.shopParams.goodswith=e.goods_weight,this.shopParams.goodsnum=e.goods_number,console.log(e)},async addedit(){let{data:e}=await this.$axios.put("/goods/"+this.shopParams.goodsid,{goods_name:this.shopParams.goodsname,goods_price:this.shopParams.goodsprice,goods_weight:this.shopParams.goodswith,goods_number:this.shopParams.goodsnum});console.log(e),this.$message({message:"修改商品成功",type:"success",duration:1e3}),this.ajaxshop(),this.dialogVisible=!1},shopdelete(e){console.log(e),this.$confirm("此操作将永久删除该数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"}),this.$axios.delete("/goods/"+e).then(e=>{console.log(e),this.ajaxshop()})}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})}}},A=F,U=(a("a87d"),Object(i["a"])(A,M,H,!1,null,"5c14e076",null)),J=U.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shoplist"},[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("商品管理")]),a("el-breadcrumb-item",[e._v("商品分类")])],1),a("el-card",{staticClass:"box-card"},[a("el-button",{attrs:{type:"primary"}},[e._v("添加分类")]),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"","row-key":"cat_id","tree-props":{children:"children",hasChildren:"hasChildren"}}},[a("el-table-column",{staticClass:"type",attrs:{type:"index",label:"#",width:"70"}}),a("el-table-column",{attrs:{prop:"cat_name",label:"分类名称",width:"180"}}),a("el-table-column",{attrs:{prop:"name",label:"是否有效",width:"180"}},[a("i",{staticClass:"el-icon-success"})]),a("el-table-column",{attrs:{prop:"cat_level",label:"排序"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"==t.row.cat_level?a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("一级")]):e._e(),"1"==t.row.cat_level?a("el-button",{attrs:{type:"success",size:"mini"}},[e._v("二级")]):e._e(),"2"==t.row.cat_level?a("el-button",{attrs:{type:"warning",size:"mini"}},[e._v("三级")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"edit",attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.listedit(t.row)}}},[e._v("编辑")]),a("el-button",{staticClass:"delete",attrs:{type:"danger",size:"mini",icon:"el-icon-delete",circle:""}},[e._v("删除")])]}}])})],1)],a("div",{staticClass:"list_page"},[a("el-pagination",{attrs:{"current-page":e.listParams.pagenum,"page-sizes":[5,10,15,20],"page-size":e.listParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("div",{staticClass:"shop_dialong"},[a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类名称"}},[a("el-input",{model:{value:e.shopParams.fenname,callback:function(t){e.$set(e.shopParams,"fenname",t)},expression:"shopParams.fenname"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addedit}},[e._v("确 定")])],1)],1)],1)],2)],1)},Y=[],G={data(){return{listParams:{query:"",pagenum:1,pagesize:5},tableData:[],list:[],total:0,dialogVisible:!1,shopParams:{fenname:"",fenid:""}}},created(){},mounted(){this.ajaxshoplist()},methods:{async ajaxshoplist(){let{data:e}=await this.$axios.get("/categories",{params:this.listParams});this.tableData=e.data.result,this.total=e.data.total},handleSizeChange(e){this.listParams.pagesize=e,this.ajaxshoplist()},handleCurrentChange(e){this.listParams.pagenum=e,this.ajaxshoplist()},listedit(e){this.dialogVisible=!0,this.shopParams.fenname=e.cat_name,this.shopParams.fenid=e.cat_id},async addedit(){console.log(this.shopParams.fenname);let{data:e}=await this.$axios.put("/categories/"+this.shopParams.fenid,{cat_name:this.shopParams.fenname});console.log(e),this.$message({type:"success",message:"修改成功"}),this.ajaxshoplist(),this.dialogVisible=!1}}},Q=G,X=(a("41e1"),Object(i["a"])(Q,W,Y,!1,null,"35ac7960",null)),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/home/hello"}}},[e._v("首页")]),a("el-breadcrumb-item",[e._v("订单管理")]),a("el-breadcrumb-item",[e._v("订单列表")])],1),a("div",{staticClass:"order_card"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"order_search"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.ajaxorder},model:{value:e.orderParams.query,callback:function(t){e.$set(e.orderParams,"query",t)},expression:"orderParams.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.ajaxorder},slot:"append"})],1)],1),[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"60"}}),a("el-table-column",{attrs:{prop:"order_number",label:"订单编号",width:"260"}}),a("el-table-column",{attrs:{prop:"order_price",label:"订单价格"}}),a("el-table-column",{attrs:{prop:"is_send",label:"是否付款"},scopedSlots:e._u([{key:"default",fn:function(t){return["否"==t.row.is_send?a("el-button",{attrs:{type:"danger",size:"mini"}},[e._v("未付款")]):e._e(),"是"==t.row.is_send?a("el-button",{attrs:{type:"primary",size:"mini"}},[e._v("已付款")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"is_send",label:"是否发货"}}),a("el-table-column",{attrs:{prop:"create_time",label:"下单时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e._f("timefn")(t.row.create_time))+" ")]}}])}),a("el-table-column",{attrs:{prop:"date",label:"操作"}},[[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit",circle:""},on:{click:e.ajaxadderss}}),a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-location-outline",circle:""}})]],2)],1)],a("el-pagination",{attrs:{"current-page":e.orderParams.pagenum,"page-sizes":[5,10,15,20],"page-size":e.orderParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("div",{staticClass:"adderss"},[a("el-dialog",{attrs:{title:"修改地址",visible:e.adderss,width:"50%"},on:{"update:visible":function(t){e.adderss=t}}},[a("el-form",[a("el-form-item",{attrs:{before:"",label:"省市区/县"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),a("el-form-item",{attrs:{label:"详细地址"}},[a("el-input")],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.adderss=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.adderss=!1}}},[e._v("确 定")])],1)],1)],1)],2)],1)],1)},te=[],ae={data(){return{orderParams:{query:"",pagenum:1,pagesize:5},tableData:[],total:0,adderss:!1}},created(){},mounted(){this.ajaxorder()},methods:{async ajaxorder(){let{data:e}=await this.$axios.get("/orders",{params:this.orderParams});console.log(e),this.tableData=e.data.goods,this.total=e.data.total},handleSizeChange(e){this.orderParams.pagesize=e,this.ajaxorder()},handleCurrentChange(e){this.orderParams.pagenum=e,this.ajaxorder()},ajaxadderss(){this.adderss=!0}}},se=ae,oe=(a("2512"),Object(i["a"])(se,ee,te,!1,null,"e3c91bc4",null)),le=oe.exports;s["default"].use(u["a"]);const ie=[{path:"/",name:"Login",component:S["default"]},{path:"/home",name:"Home",component:z,beforeEnter(e,t,a){sessionStorage.getItem("token")?a():a("/login")},children:[{path:"/home/user",name:"User",component:k},{path:"/home/hello",name:"Hello",component:v},{path:"/",redirect:"/home/hello"},{path:"/home/role",name:"Role",component:E},{path:"/home/auth",name:"Auth",component:K},{path:"/home/shop",name:"Shop",component:J},{path:"/home/shoplist",name:"ShopList",component:Z},{path:"/home/order",name:"Order",component:le}]},{path:"/login",name:"Login",component:function(){return Promise.resolve().then(a.bind(null,"a55b"))}}],re=new u["a"]({routes:ie});var ne=re,ce=a("2f62");s["default"].use(ce["a"]);var ue=new ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),de=a("bc3a"),me=a.n(de),pe=me.a.create({baseURL:"https://www.liulongbin.top:8888/api/private/v1/",timeout:"5000"});pe.interceptors.request.use(e=>{const t=sessionStorage.getItem("token");return t&&(e.headers.Authorization=t),e},e=>{}),pe.interceptors.request.use(e=>{const t=sessionStorage.getItem("token");return t&&(e.headers.Authorization=t),e}),pe.interceptors.response.use(e=>(410==e.data.meta.status&&(sessionStorage.removeItem("token"),ne.push("/login")),e));var he=pe,fe=a("b705"),ge=a.n(fe);a("3880");s["default"].prototype.$axios=he,s["default"].use(ge.a),s["default"].config.productionTip=!1,s["default"].filter("timefn",(function(e){const t=new Date(e),a=t.getFullYear(),s=(t.getMonth()+1+"").padStart(2,0),o=(t.getDate()+"").padStart(2,0),l=(t.getHours()+"").padStart(2,0),i=(t.getMinutes()+"").padStart(2,0),r=(t.getSeconds()+"").padStart(2,0);return`${a}-${s}-${o} ${l}:${i}:${r}`})),new s["default"]({router:ne,store:ue,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"9c0c":function(e,t,a){},a553:function(e,t,a){},a55b:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"login-container",attrs:{"data-v-7cf025fc":""}},[a("div",{staticClass:"login-box",attrs:{"data-v-7cf025fc":""}},[e._m(0),a("form",{staticClass:"el-form",attrs:{"data-v-7cf025fc":""}},[a("div",{staticClass:"el-form-item is-required",attrs:{"data-v-7cf025fc":""}},[a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"0px"}},[a("div",{staticClass:"el-input el-input--prefix",attrs:{"data-v-7cf025fc":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",value:"admin"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._m(1)])])]),a("div",{staticClass:"el-form-item is-required",attrs:{"data-v-7cf025fc":""}},[a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"0px"}},[a("div",{staticClass:"el-input el-input--prefix",attrs:{"data-v-7cf025fc":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"el-input__inner",attrs:{type:"password",autocomplete:"off",value:"123456"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._m(2)])])]),a("div",{staticClass:"el-form-item btn-box",attrs:{"data-v-7cf025fc":""}},[a("div",{staticClass:"el-form-item__content",staticStyle:{"margin-left":"0px"}},[a("button",{staticClass:"el-button el-button--primary",attrs:{"data-v-7cf025fc":"",type:"button"},on:{click:function(t){return e.ajaxlogin()}}},[a("span",[e._v("登录")])]),a("button",{staticClass:"el-button el-button--info",attrs:{"data-v-7cf025fc":"",type:"button"},on:{click:function(t){return e.chong()}}},[a("span",[e._v("重置")])])])])])])])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"avatar-box",attrs:{"data-v-7cf025fc":""}},[a("img",{attrs:{"data-v-7cf025fc":"",src:"/二狗子.png",alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"el-input__prefix"},[a("i",{staticClass:"el-input__icon iconfont icon-user"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"el-input__prefix"},[a("i",{staticClass:"el-input__icon iconfont icon-3702mima"})])}],l={data(){return{username:"admin",password:"123456"}},created(){},mounted(){},methods:{ajaxlogin(){this.$axios.post("/login",{username:this.username,password:this.password}).then(e=>{console.log(e.data),""==this.username||""==this.password?this.$message({message:"用户名和密码不能为空",type:"warning"}):(console.log(e.data.meta.msg),"登录成功"==e.data.meta.msg?(this.$message({message:e.data.meta.msg,duration:1500,type:"success"}),sessionStorage.setItem("token",e.data.data.token),this.$router.push({path:"/home"})):this.$message({message:e.data.meta.msg,duration:1500,type:"error"}))})},chong(){this.username=this.password="",this.$message({message:"重置成功",duration:1500,type:"success"})}}},i=l,r=(a("d6db"),a("2877")),n=Object(r["a"])(i,s,o,!1,null,null,null);t["default"]=n.exports},a87d:function(e,t,a){"use strict";var s=a("29fb"),o=a.n(s);o.a},b6f4:function(e,t,a){"use strict";var s=a("eb4d"),o=a.n(s);o.a},d6db:function(e,t,a){"use strict";var s=a("e67a"),o=a.n(s);o.a},db8b:function(e,t,a){"use strict";var s=a("a553"),o=a.n(s);o.a},e67a:function(e,t,a){},eb4d:function(e,t,a){},f845:function(e,t,a){},f894:function(e,t,a){},fceb:function(e,t,a){"use strict";var s=a("0e67"),o=a.n(s);o.a}});
//# sourceMappingURL=app.67710a51.js.map