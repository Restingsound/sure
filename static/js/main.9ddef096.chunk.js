(this["webpackJsonpsure-rocket-insurance"]=this["webpackJsonpsure-rocket-insurance"]||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),n=a(33),i=a.n(n),c=a(35),d=a(44),o=a(83),l=a(17),u=a.n(l),b=a(30),j=a(68),p=a.n(j),_="https://fed-challenge-api.sure.now.sh/api/v1/quotes",O={createNew:function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post(_,t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(_,"/").concat(t.quote.quoteId),t);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.update(e);case 2:r=t.sent,a({type:"UPDATE_QUOTE",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(b.a)(u.a.mark((function t(a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.createNew(e);case 2:r=t.sent,a({type:"UPDATE_QUOTE",data:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_QUOTE":return t.data;default:return e}},m=Object(d.c)({quote:f}),g=Object(d.d)(m,Object(d.a)(o.a)),x=a(22),q=a(11),y=a(183),w=a(179),S=a(185),k=a(1),I=function(){var e=Object(r.useState)(""),t=Object(q.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)(""),i=Object(q.a)(n,2),d=i[0],o=i[1],l=Object(r.useState)(""),j=Object(q.a)(l,2),p=j[0],_=j[1],O=Object(r.useState)(""),h=Object(q.a)(O,2),f=h[0],m=h[1],g=Object(r.useState)(""),I=Object(q.a)(g,2),T=I[0],C=I[1],z=Object(r.useState)(""),A=Object(q.a)(z,2),N=A[0],R=A[1],E=Object(r.useState)(""),L=Object(q.a)(E,2),U=L[0],D=L[1],F=Object(r.useState)({first_name:!1,last_name:!1,address_line_1:!1,address_line_2:!1,address_city:!1,address_region:!1,address_postal:!1}),P=Object(q.a)(F,2),Q=P[0],M=P[1],W=Object(c.b)(),$=function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),Q.first_name&&Q.last_name&&Q.address_line_1&&Q.address_city&&Q.address_region&&Q.address_postal&&d&&a&&p&&T&&N&&U&&Number.isInteger(parseInt(U,10))&&W(v({first_name:a,last_name:d,address:{line_1:p,line_2:f,city:T,region:N,postal:U}}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(e){"first_name"===e.target.id&&(s(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{first_name:!0}))),"last_name"===e.target.id&&(o(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{last_name:!0}))),"address_line_1"===e.target.id&&(_(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{address_line_1:!0}))),"address_line_2"===e.target.id&&(m(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{address_line_2:!0}))),"address_city"===e.target.id&&(C(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{address_city:!0}))),"address_region"===e.target.id&&(R(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{address_region:!0}))),"address_postal"===e.target.id&&(D(e.target.value),M(Object(x.a)(Object(x.a)({},Q),{},{address_postal:!0})))},Z=function(e){return"first_name"===e?Q.first_name&&!a:"last_name"===e?Q.last_name&&!d:"address_line_1"===e?Q.address_line_1&&!p:"address_line_2"===e?Q.address_line_2&&!f:"address_city"===e?Q.address_city&&!T:"address_region"===e?Q.address_region&&!N:"address_postal"===e?Q.address_postal&&!Number.isInteger(parseInt(U,10)):void 0};return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Rating Information"}),Object(k.jsx)("p",{children:"Sure can provide you a quote in seconds just fill out the following information to get started."}),Object(k.jsxs)(y.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},autoComplete:"off",onSubmit:$,children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(w.a,{id:"first_name",label:"First Name",variant:"outlined",required:!0,size:"small",error:Z("first_name"),onChange:J,helperText:Z("first_name")&&"First Name is Required"}),Object(k.jsx)(w.a,{id:"last_name",label:"Last Name",variant:"outlined",required:!0,size:"small",error:Z("last_name"),onChange:J,helperText:Z("last_name")&&"Last Name is Required"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(w.a,{id:"address_line_1",label:"Address Line 1",variant:"outlined",required:!0,size:"small",error:Z("address_line_1"),onChange:J,helperText:Z("address_line_1")&&"Address is Required"}),Object(k.jsx)(w.a,{id:"address_line_2",label:"Address Line 2",variant:"outlined",size:"small",onChange:J})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)(w.a,{id:"address_city",label:"City",variant:"outlined",required:!0,size:"small",error:Z("address_city"),onChange:J,helperText:Z("address_city")&&"City is Required"}),Object(k.jsx)(w.a,{id:"address_region",label:"State",variant:"outlined",required:!0,size:"small",error:Z("address_region"),onChange:J,helperText:Z("address_region")&&"State is Required"})]}),Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{id:"address_postal",label:"Zip Code",variant:"outlined",required:!0,size:"small",error:Z("address_postal"),onChange:J,helperText:Z("address_postal")&&"Zip Code is Required and Must be a Number"})})]}),Object(k.jsx)(S.a,{type:"submit",variant:"contained",children:"Submit"})]})]})},T=a(178),C=a(181),z=function(){var e=Object(c.c)((function(e){return e.quote})),t=Object(c.b)(),a=Object(r.useState)(e.quote.variable_selections.deductible),s=Object(q.a)(a,2),n=s[0],i=s[1],d=Object(r.useState)(e.quote.variable_selections.asteroid_collision),o=Object(q.a)(d,2),l=o[0],j=o[1],p=function(){var a=Object(b.a)(u.a.mark((function a(r){var s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i(parseInt(r.target.value,10)),s={quote:{quoteId:e.quote.quoteId,rating_address:e.quote.rating_address,policy_holder:e.quote.policy_holder,variable_selections:{deductible:parseInt(r.target.value),asteroid_collision:e.quote.variable_selections.asteroid_collision}}},t(h(s));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),_=function(){var a=Object(b.a)(u.a.mark((function a(r){var s;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:j(parseInt(r.target.value,10)),s={quote:{quoteId:e.quote.quoteId,rating_address:e.quote.rating_address,policy_holder:e.quote.policy_holder,variable_selections:{deductible:e.quote.variable_selections.deductible,asteroid_collision:parseInt(r.target.value)}}},t(h(s));case 3:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"Quote Overview"}),Object(k.jsx)("p",{children:"Select your coverage limits."}),Object(k.jsx)("div",{children:Object(k.jsxs)(y.a,{children:["Deductible",Object(k.jsx)(T.a,{sx:{m:1,minWidth:120},labelId:"deductible",id:"deductible",size:"small",value:n,onChange:p,children:e.quote.variable_options.deductible.values.map((function(e,t){return Object(k.jsxs)(C.a,{value:e,children:["$",e]},t)}))}),Object(k.jsx)("br",{}),"Asteroid Collision",Object(k.jsx)(T.a,{sx:{m:1,minWidth:120},labelId:"asteroid_collision",id:"asteroid_collision",size:"small",value:l,onChange:_,children:e.quote.variable_options.asteroid_collision.values.map((function(e,t){return Object(k.jsxs)(C.a,{value:e,children:["$",e]},t)}))}),Object(k.jsx)("br",{}),Object(k.jsxs)(y.a,{sx:{m:1,minWidth:120},children:["Annual Premium: $",e.quote.premium]})]})})]})},A=a(186),N=a(5),R=function(){var e=Object(c.c)((function(e){return e.quote})),t=Object(N.a)("span")({display:"block",margin:"auto",paddingTop:30,paddingLeft:30,color:"white",fontSize:30}),a=Object(N.a)("span")({display:"block",margin:"auto",paddingLeft:80,color:"white",fontSize:30});return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsxs)(t,{children:[Object(k.jsx)("img",{alt:"sure logo",src:"sure/images/sure_white.svg"}),Object(k.jsx)(a,{children:Object(k.jsxs)("h2",{children:["Insure your Rocket with Sure 3"," ",Object(k.jsx)("img",{width:"40",alt:"rocket",src:"sure/images/rocket.svg"})]})})]}),Object(k.jsx)(A.a,{disableGutters:!0,sx:{backgroundColor:"white",fontFamily:"arial",textAlign:"center",padding:1,height:"100vh"},children:e&&e.quote?Object(k.jsx)(z,{}):Object(k.jsx)(I,{})})]}),Object(k.jsx)("div",{dangerouslySetInnerHTML:{__html:'\n    <div>This wil be rendered</div>\n    <script\n        src="https://solve-widget.forethought.ai/embed.js"\n        type="application/javascript"\n        data-api-key="8e9895f0-cad2-4e5f-bd0e-7290e96a613f"\n        data-ft-User-Type="customer"\n        data-ft-workflow-tag="Appliance_owner"\n      ><\/script>\n\n  '}})]})},E=a(177);i.a.render(Object(k.jsxs)(s.a.Fragment,{children:[Object(k.jsx)(E.a,{}),Object(k.jsx)(c.a,{store:g,children:Object(k.jsx)(R,{})})]}),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.9ddef096.chunk.js.map