(this["webpackJsonptrello-geek"]=this["webpackJsonptrello-geek"]||[]).push([[0],{115:function(e,t,n){},123:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(12),r=n.n(a),o=(n(115),n(9)),c=n(96),s=n(154),d=n(159),l=n(160),u=n(32),b=n(157),j=n(165),p=n(171),f=n(94),O=n.n(f),m=n(166),k=n(5),g={green:"#1dc33b",yellow:"#f7d400",red:"#fd4d39"},x=Object(s.a)((function(e){return{paper:{padding:e.spacing(1),margin:e.spacing(1),color:"#0f1e3d",cursor:"pointer"},title:{fontSize:"15px",textAlign:"left"},label:{backgroundColor:g.green,padding:"4px",width:"37px",borderRadius:"5px",marginBottom:"5px"},editIcon:{fontSize:"15px",visibility:"hidden"},closeIcon:{fontSize:"15px",cursor:"pointer"}}})),h="task",T=function(e){var t=e.task,n=e.onClickEdit,a=x(),r=Object(i.useState)(!1),o=Object(u.a)(r,2),c=o[0],s=o[1],p=Object(m.a)((function(){return{type:h,item:{id:t.id,labelColor:t.labelColor,description:t.description,order:t.order},collect:function(e){return{isDragging:!!e.isDragging()}}}}),[t]),f=Object(u.a)(p,2),T=f[0].isDragging,v=f[1];return Object(k.jsx)("div",{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:Object(k.jsx)(b.a,{className:a.paper,ref:v,style:{visibility:T?"hidden":"visible",cursor:"move"},children:Object(k.jsxs)(d.a,{container:!0,spacing:0,children:[Object(k.jsx)(d.a,{item:!0,xs:11,children:Object(k.jsx)(j.a,{component:"div",className:a.label,style:{backgroundColor:g[t.labelColor]}})}),Object(k.jsx)(d.a,{item:!0,xs:1,children:Object(k.jsx)(O.a,{className:a.closeIcon,style:{visibility:!c||T?"hidden":"visible"},onClick:n})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(l.a,{className:a.title,variant:"body2",children:t.description})})]})})})},v=n(95),C=n.n(v),E=n(167),I=Object(s.a)((function(e){return{paper:{padding:e.spacing(1),color:e.palette.text.secondary,backgroundColor:"#ebecf0"},title:{fontSize:"15px",color:"#0f1e3d",fontWeight:"bold",textAlign:"left",marginLeft:e.spacing(1),cursor:"pointer"},addBtn:{color:"#697889",marginLeft:e.spacing(1),fontSize:"17px",cursor:"pointer"},addIcon:{position:"relative",top:"5px"},columnNaneInput:{padding:"0","& input":{padding:"6px"}}}})),S=function(e){var t=e.children,n=e.onDragItemTask,i=e.task,a=e.columnTasks,r=e.columnId,o=Object(E.a)((function(){return{accept:h,drop:function(e){var t=i,o=e,c="";a.forEach((function(t){var n=t.tasks.find((function(t){return t.id===e.id}));n&&(o=n,c=t.id)})),n(t,o,c,r)},canDrop:function(e){return e.id!==i.id},collect:function(e){return{isOver:!!e.isOver()}}}})),c=Object(u.a)(o,2),s=c[0].isOver,d=c[1];return Object(k.jsx)("div",{ref:d,style:{borderRadius:"5px",transition:"background-color 0.5s",backgroundColor:s?"#9e9faf":"transparent"},children:t})},N=function(e){var t=e.title,n=e.cards,a=e.onAddTask,r=e.onEditCard,o=e.onDragItemTask,c=e.columnTasks,s=e.columnId,d=e.onEditColumnName,f=I(),O=Object(i.useState)(!1),m=Object(u.a)(O,2),g=m[0],x=m[1];return Object(k.jsxs)(b.a,{className:f.paper,children:[Object(k.jsxs)(j.a,{component:"div",onClick:function(){x(!0)},children:[g&&Object(k.jsx)(p.a,{id:"columnNameInput",fullWidth:!0,variant:"outlined",className:f.columnNaneInput,defaultValue:t,onBlur:function(e){x(!1),d(s,e.target.value)}}),!g&&Object(k.jsx)(l.a,{className:f.title,variant:"h6",children:t})]}),n.length>0&&n.map((function(e){return Object(k.jsx)(S,{onDragItemTask:o,task:e,columnTasks:c,columnId:s,children:Object(k.jsx)(T,{task:e,onClickEdit:function(){return r(e)}})},e.id)})),Object(k.jsxs)(l.a,{className:f.addBtn,variant:"subtitle2",onClick:a,children:[Object(k.jsx)(C.a,{className:f.addIcon})," Add another card"]})]})};N.defaultProps={title:"",cards:[]};var w=N,y=n(168),D=n(174),A=n(163),_=n(172),M=n(170),L={green:"#1dc33b",yellow:"#f7d400",red:"#fd4d39"},R=Object.keys(L),z=Object(s.a)((function(e){return{paper:{padding:e.spacing(1),margin:e.spacing(1),color:"#0f1e3d",cursor:"pointer"},title:{fontSize:"15px",textAlign:"left"},label:{padding:"14px",width:"37px",borderRadius:"5px",marginLeft:"5px"},descriptionInput:{marginTop:"15px",marginBottom:"15px"},editIcon:{fontSize:"15px",visibility:"hidden"},closeIcon:{fontSize:"15px",cursor:"pointer"}}})),B=function(e){var t=e.task,n=e.open,a=e.onClose,r=e.onSave,c=e.onDelete,s=(e.onCancel,z()),l=Object(i.useState)(Object(o.a)({},t)),f=Object(u.a)(l,2),O=f[0],m=f[1];Object(i.useEffect)((function(){m(n?Object(o.a)({},t):{id:Object(M.a)(),labelColor:"green",description:""})}),[n,t]);var g=function(){return Object(k.jsx)("form",{id:"taskForm",onSubmit:function(e){e.preventDefault(),r(Object(o.a)(Object(o.a)({},O),{},{labelColor:e.target[0].value,description:e.target[1].value}))},children:Object(k.jsx)(b.a,{className:s.paper,children:Object(k.jsxs)(d.a,{container:!0,spacing:0,children:[Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(y.a,{fullWidth:!0,id:"categoryColorInput",defaultValue:O.labelColor,children:R.map((function(e){return Object(k.jsx)(D.a,{value:e,children:Object(k.jsx)(j.a,{component:"div",className:s.label,style:{backgroundColor:L[e]}})})}))})}),Object(k.jsx)(d.a,{item:!0,xs:12,children:Object(k.jsx)(p.a,{id:"taskDescriptionInput",multiline:!0,rows:4,fullWidth:!0,variant:"outlined",defaultValue:O.description,className:s.descriptionInput})}),Object(k.jsx)(d.a,{item:!0,xs:9,children:Object(k.jsx)(A.a,{variant:"contained",color:"primary",type:"submit",children:"Save"})}),Object(k.jsx)(d.a,{item:!0,xs:3,children:Object(k.jsx)(A.a,{variant:"contained",onClick:c,children:"Delete"})})]})})})};return Object(k.jsx)(_.a,{"aria-labelledby":"task-edit",open:n,onClose:a,children:Object(k.jsx)(g,{})})},K=Object(s.a)((function(e){return{root:{padding:e.spacing(1),flexGrow:1},titleApp:{color:"#ffffff",fontSize:"30px",paddingLeft:"5px",fontWeight:400,marginBottom:"5px",marginTop:"10px"}}})),P=function(e){var t=e.columnTasks,n=e.onAddTask,i=e.onDeleteTask,a=e.onEditCard,r=e.onCancelEdit,o=e.currentTask,c=e.isEditionMode,s=e.onSaveTask,u=e.onDragItemTask,b=e.onEditColumnName,j=K();return Object(k.jsxs)("div",{className:j.root,children:[Object(k.jsx)(d.a,{container:!0,spacing:3,children:Object(k.jsx)(d.a,{item:!0,children:Object(k.jsx)(l.a,{className:j.titleApp,variant:"h1",children:"TASK MANAGEMENT BOARD"})})}),Object(k.jsx)(d.a,{container:!0,spacing:3,children:t.length>0&&t.map((function(e,i){return Object(k.jsx)(d.a,{item:!0,xs:!0,children:Object(k.jsx)(w,{title:e.title,cards:e.tasks,onAddTask:function(){return n(t,i)},onEditCard:function(e){return a(e)},onDragItemTask:u,columnTasks:t,columnId:e.id,onEditColumnName:b})},e.id)}))}),o&&Object(k.jsx)(B,{task:o,onSave:function(e){return s(e)},onDelete:function(){return i(o.id)},onClose:r,onCancel:r,open:c})]})};P.defaultProps={columnTasks:[]};var F=P,V="SET_CURRENT_TASK",W="SET_TASK_LIST",G="SET_EDITION_MODE",U="SAVE_TASK",Y="REPLACE_ORDER_TASK",J="RENAME_COLUMN_NAME",X="DELETE_TASK",H=function(e){return{type:V,task:e}},q=function(e){return{type:G,isEditionMode:e}},Q=n(68),Z=n(67),$={current:null,list:[{id:Object(M.a)(),title:"Todo",order:1,tasks:[{id:Object(M.a)(),labelColor:"green",description:"This is a Todo list with items that can be marked off",order:1},{id:Object(M.a)(),labelColor:"yellow",description:"You can categorize each item with a Color (Red, Yellow, Green)",order:2},{id:Object(M.a)(),labelColor:"red",description:"Hover on a item to edit",order:3}]},{id:Object(M.a)(),title:"In progress",order:2,tasks:[{id:Object(M.a)(),labelColor:"green",description:"You can click and drag items up and down the list",order:1},{id:Object(M.a)(),labelColor:"yellow",description:"As well drag items from one column to the other",order:2}]},{id:Object(M.a)(),title:"Done",order:3,tasks:[{id:Object(M.a)(),labelColor:"red",description:"As well rename the Columns",order:1}]}],isEditionMode:!1},ee=function(e,t){return e.order>t.order?1:t.order>e.order?-1:0},te=Object(Z.a)((function(e){return e.task.list}),(function(e){return e})),ne=Object(Z.a)((function(e){return e.task.current}),(function(e){return e})),ie=Object(Z.a)((function(e){return e.task.isEditionMode}),(function(e){return e})),ae=Object(c.a)((function(e){return{columnTasks:te(e),currentTask:ne(e),isEditionMode:ie(e)}}),(function(e){return{onAddTask:function(t,n){var i={id:Object(M.a)(),labelColor:"green",description:""};t[n].tasks.push(i),e({type:W,list:t}),e(q(!0)),e(H(i))},onDeleteTask:function(t){e(function(e){return{type:X,taskId:e}}(t)),e(q(!1))},onEditCard:function(t){e(q(!0)),e(H(t))},onCancelEdit:function(){e(q(!1))},onSaveTask:function(t){e(function(e){return{type:U,task:e}}(t)),e(q(!1))},onDragItemTask:function(t,n,i,a){e(function(e,t,n,i){return{type:Y,originalTask:e,newTask:t,originalTaskColumnId:n,newTaskColumnId:i}}(Object(o.a)({},t),Object(o.a)({},n),i,a))},onEditColumnName:function(t,n){e(function(e,t){return{type:J,id:e,newName:t}}(t,n))}}}))(F),re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,177)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))},oe=n(52),ce=n(25),se=Object(ce.b)({task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(o.a)(Object(o.a)({},e),{},{current:Object(o.a)({},t.task)});case W:var n=Object(o.a)({},t).list.map((function(e){return e.tasks=e.tasks.sort(ee),e}));return Object(o.a)(Object(o.a)({},e),{},{list:n});case G:return Object(o.a)(Object(o.a)({},e),{},{isEditionMode:t.isEditionMode});case U:var i=Object(o.a)({},e).list.map((function(e){return e.tasks=e.tasks.map((function(e){return e.id===t.task.id?t.task:e})).sort(ee),e}));return Object(o.a)(Object(o.a)({},e),{},{list:i});case Y:var a=Object(o.a)({},e).list,r=function(e){var n=e.tasks.find((function(e){return e.id===t.newTask.id})),i=e.tasks.find((function(e){return e.id===t.originalTask.id}));return n&&i&&(n.order=t.originalTask.order,i.order=t.newTask.order,e.tasks=e.tasks.sort(ee)),e},c=a;return t.originalTaskColumnId===t.newTaskColumnId&&(c=a.map((function(e){return t.originalTaskColumnId===e.id?r(e):e}))),t.originalTaskColumnId!==t.newTaskColumnId&&(c=a.map((function(e){if(t.originalTaskColumnId===e.id&&(e.tasks=e.tasks.filter((function(e){return e.id!==t.newTask.id})).sort(ee)),t.newTaskColumnId===e.id){var n=Object(o.a)(Object(o.a)({},t.newTask),{},{order:t.originalTask.order});e.tasks.push(n),e.tasks=e.tasks.map((function(n){return n.id===t.originalTask.id&&(n.order=e.tasks.length),n})),e.tasks=e.tasks.sort(ee)}return e}))),Object(o.a)(Object(o.a)({},e),{},{list:Object(Q.a)(c)});case J:var s=Object(o.a)({},e).list.map((function(e){return e.id===t.id&&(e.title=t.newName),e}));return Object(o.a)(Object(o.a)({},e),{},{list:Object(Q.a)(s)});case X:var d=Object(o.a)({},e).list.map((function(e){return e.tasks=e.tasks.filter((function(e){return e.id!==t.taskId})).sort(ee),e}));return Object(o.a)(Object(o.a)({},e),{},{list:Object(Q.a)(d)});default:return e}}}),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.c,le=Object(ce.d)(se,de()),ue=n(164),be=n(97),je=le;r.a.render(Object(k.jsx)(ue.a,{backend:be.a,children:Object(k.jsx)(oe.a,{store:je,children:Object(k.jsx)(ae,{})})}),document.getElementById("root")),re()}},[[123,1,2]]]);
//# sourceMappingURL=main.387e8fdf.chunk.js.map