(this.webpackJsonptodosreact=this.webpackJsonptodosreact||[]).push([[0],{13:function(e){e.exports=JSON.parse('{"e":"Unsorted","a":"Important, Urgent","b":"Important, Not Urgent","c":"Not Important, Urgent","d":"Not Important, Not Urgent","g":"Unsorted To Dos","f":"Finished To Dos"}')},69:function(e,t,a){e.exports=a(81)},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=a(28),l=a(47),u=a(121),d=Object(l.b)({name:"todos",initialState:[],reducers:{add:function(e,t){return e.concat({id:Object(u.a)(),text:t.payload.text,active:!0,category:null})},remove:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},toggle:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].active=!e[a].active},categorize:function(e,t){var a=e.findIndex((function(e){return e.id===t.payload.id}));e[a].category=t.payload.category}}}),m=a(119),s=a(13),f=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).todos;return r.a.createElement(m.a,{m:2,flexGrow:1},r.a.createElement(h,{onClick:function(t){e(d.actions.add({text:t}))}}),r.a.createElement(m.a,null,s.g,t.filter((function(e){return e.active})).map((function(e){return r.a.createElement(C,Object.assign({},e,{key:e.id}))}))),r.a.createElement(m.a,null,s.f,t.filter((function(e){return!e.active})).map((function(e){return r.a.createElement(C,Object.assign({},e,{key:e.id}))}))))},p=a(34),b=a(113),v=a(114),E=Object(b.a)((function(e){var t;return{root:(t={display:"flex"},Object(p.a)(t,e.breakpoints.down("sm"),{flexDirection:"column"}),Object(p.a)(t,e.breakpoints.up("md"),{flexDirection:"row"}),t)}})),g=function(){var e=E();return r.a.createElement(m.a,{className:e.root},r.a.createElement(v.a,null),r.a.createElement(f,null),r.a.createElement(j,null))},x=Object(b.a)((function(e){var t;return{wrapper:{display:"flex",flexWrap:"wrap"},matrixfield:(t={},Object(p.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(p.a)(t,e.breakpoints.up("md"),{width:"50%"}),t)}})),j=function(){var e=x();return r.a.createElement(m.a,{m:2,flexGrow:2,className:e.wrapper},r.a.createElement(m.a,{className:e.matrixfield},s.a),r.a.createElement(m.a,{className:e.matrixfield},s.b),r.a.createElement(m.a,{className:e.matrixfield},s.c),r.a.createElement(m.a,{className:e.matrixfield},s.d))},w=a(61),y=a(118),O=a(116),h=function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),o=a[0],c=a[1];return r.a.createElement(m.a,{display:"flex",flexDirection:"row"},r.a.createElement(y.a,{id:"filled-basic",label:"Filled",variant:"filled",value:o,onChange:function(e){return c(e.target.value)},fullWidth:!0}),r.a.createElement(O.a,{variant:"contained",onClick:function(){e.onClick(o),c("")}},"+"))},k=a(120),N=a(58),C=function(e){var t=e.id,a=e.text,n=e.active,o=(e.category,Object(i.b)());return r.a.createElement(m.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},r.a.createElement(m.a,{style:n?{color:"#000000",textDecoration:"none"}:{color:"#A9A9A9",textDecoration:"line-through"}},r.a.createElement(k.a,{onClick:function(){return o(d.actions.toggle({id:t}))},checked:!n}),a),r.a.createElement(m.a,null," ",r.a.createElement(N.a,{onChange:function(e){return o(d.actions.categorize({id:t,category:e.currentTarget.value}))}},r.a.createElement("option",{value:null},s.e),r.a.createElement("option",{value:"a1"},s.a),r.a.createElement("option",{value:"a2"},s.b),r.a.createElement("option",{value:"b1"},s.c),r.a.createElement("option",{value:"b2"},s.d)),r.a.createElement(O.a,{variant:"contained",onClick:function(){return o(d.actions.remove({id:t}))}},"Yeet")))},I=a(11),D=a(49),U=a(59),S=a.n(U),W=Object(D.a)({key:"root",storage:S.a},Object(I.c)({todos:d.reducer})),A=Object(l.a)({reducer:W,middleware:[]});Object(D.b)(A);var J=A;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=a(117),z=a(60);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:J},r.a.createElement(T.a,{theme:Object(z.a)()},r.a.createElement(g,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[69,1,2]]]);
//# sourceMappingURL=main.0d90ff25.chunk.js.map