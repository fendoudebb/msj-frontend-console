webpackJsonp([9],{PBcg:function(t,e){},mqp1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),o=i("SJI6"),a={name:"post-pv-list",data:function(){var t=this;return{postPvListTableLoading:!1,pageSize:this.getPvListSize(),totalCount:1,currentPage:1,postPvList:[],postPvListColumns:[{type:"index",width:60,align:"center"},{title:"ID",key:"postId",align:"center",ellipsis:!0,minWidth:50},{title:"标题",key:"title",align:"center",ellipsis:!0,minWidth:300,render:function(t,e){return t("div",[t("span",{style:{display:"inline-block",width:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},domProps:{title:e.row.title}},e.row.title)])}},{title:"阅读数",key:"pv",align:"center",ellipsis:!0,minWidth:100},{title:"状态",key:"postStatus",align:"center",ellipsis:!0,minWidth:90,render:function(t,e){var i=e.row.postStatus,n="",s="";return"AUDIT"===i?(n="待审核",s="orange"):"ONLINE"===i?(n="上线",s="green"):"OFFLINE"===i?(n="下线",s="red"):"PRIVATE"===i?(n="私人",s="lightskyblue"):"DRAFT"===i&&(n="草稿",s="lightskyblue"),t("Tag",{props:{color:s}},n)}},{title:"操作",key:"action",align:"center",ellipsis:!0,minWidth:90,render:function(e,i){var n=[];if("ONLINE"===i.row.postStatus){var s=e("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.watchPostById(i.row.postId)}}},"查看");n.push(s)}return e("div",[n])}}]}},methods:s()({},Object(o.mapMutations)(["setPvListPage"]),Object(o.mapGetters)(["getPvListSize"]),Object(o.mapActions)(["handlePostPvList"]),{watchPostById:function(t){window.open("https://www.zhangbj.com/p/"+t+".html")},changePage:function(t){this.setPvListPage(t),this.getPostPvList()},getPostPvList:function(){var t=this;this.postPvListTableLoading=!0,this.handlePostPvList().then(function(e){t.totalCount=e.data.totalCount,t.postPvList=e.data.post,t.postPvListTableLoading=!1}).catch(function(e){t.postPvListTableLoading=!1})}}),created:function(){this.getPostPvList()},mounted:function(){}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"20px",padding:"20px","background-color":"white"}},[i("Table",{attrs:{border:"",stripe:"","highlight-row":!0,data:t.postPvList,columns:t.postPvListColumns,loading:t.postPvListTableLoading}}),t._v(" "),i("div",{staticStyle:{margin:"20px",overflow:"hidden"}},[i("Page",{attrs:{"page-size":t.pageSize,total:t.totalCount,current:t.currentPage,"show-elevator":"","show-total":""},on:{"on-change":t.changePage}})],1)],1)},staticRenderFns:[]};var r=i("VU/8")(a,l,!1,function(t){i("PBcg")},"data-v-7753552c",null);e.default=r.exports}});
//# sourceMappingURL=9.960fedf17381bcf1fd20.js.map