(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{60:function(e){e.exports=JSON.parse('[{"car":"skoda","logo":"http://pngimg.com/uploads/skoda/skoda_PNG12353.png","model":[{"id":"1","name":"skoda-superb","baseRate":0.089,"operationInKiev":0.15,"operationalAllowance":0.25,"ageCar":[0.03,0.05,0.07,0.09],"img":"https://eugene-skoda.ru/wp-content/uploads/2018/04/superb.png"},{"id":"2","name":"skoda-octavia","baseRate":0.085,"operationInKiev":0.15,"operationalAllowance":0.25,"ageCar":[0.03,0.05,0.07,0.09],"img":"https://tuning.com.ua/c/8600-medium_default/skoda-octavia1996-2010.jpg"},{"id":"3","name":"skoda-fabia","baseRate":0.06,"operationInKiev":0.15,"operationalAllowance":0.25,"ageCar":[0.03,0.05,0.07,0.09],"img":"https://sibavto.ua/wp-content/uploads/2018/10/fabia1_1.png"}]},{"car":"volkswagen","logo":"https://s3.amazonaws.com/static.revolutionparts.com/assets/images/volkswagen.png","model":[{"id":"4","name":"volkswagen-caddy","baseRate":0.076,"operationInKiev":0.15,"operationalAllowance":0.25,"ageCar":[0.03,0.05,0.07,0.09],"img":"https://chip48.com/wp-content/uploads/2017/07/Caddy.png"}]},{"car":"chevrolet","logo":"http://pngimg.com/uploads/chevrolet/%D1%81hevrolet_PNG157.png","model":[{"id":"5","name":"chevrolet-Lacetti","baseRate":0.083,"operationInKiev":0.15,"operationalAllowance":0.25,"ageCar":[0.03,0.05,0.07,0.09],"img":"https://lenzcars.com/wp-content/uploads/2019/07/kisspng-daewoo-lacetti-car-chevrolet-daewoo-lanos-5aed7080f27cd3.9417802015255102729932.png"}]}]')},66:function(e,a,t){e.exports=t(78)},71:function(e,a,t){},72:function(e,a,t){},78:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(9),c=t.n(l),r=(t(71),t(35)),i=t(15),m=(t(72),t(115)),s=t(59),u=t.n(s),d=t(120),g=t(135),p=t(136),b=t(121),f=t(122),h=t(123),E=function(e){var a=e.arrCars,t=e.getCarMarc,l=Object(n.useState)(!1),c=Object(i.a)(l,2),r=c[0],s=c[1],E=Object(m.a)((function(e){return{cover:{width:120,paddingRight:35},title:{fontWeight:800,fontSize:18},nameLogo:{}}}))();return o.a.createElement(o.a.Fragment,null,a.map((function(e,a){return o.a.createElement(g.a,{expanded:r==="panel".concat(a+1),onChange:(n="panel".concat(a+1),function(e,a){s(!!a&&n)}),key:e.logo},o.a.createElement(p.a,{children:!0,className:E.Panel,"aria-controls":"panel1bh-content",id:"panel1bh-header",expandIcon:o.a.createElement(u.a,null)},o.a.createElement(d.a,{className:E.grid,container:!0,alignItems:"center",direction:"row"},o.a.createElement(b.a,{className:E.cover,image:e.logo,component:"img"}),o.a.createElement("h2",{className:E.title},e.car.toUpperCase()))),e.model.map((function(e){return o.a.createElement(f.a,{onClick:function(){return t(e)},key:e.id},o.a.createElement(d.a,{className:E.grid,container:!0,alignItems:"center",direction:"row"},o.a.createElement(b.a,{className:E.cover,image:e.img,component:"img"}),o.a.createElement(h.a,{className:E.title,component:"h2"},e.name)))})));var n})))},v=t(60),w=t(38),k=t(124),N=t(137),O=t(134),j=t(139),C=t(140),y=t(127),I=function(e,a){try{localStorage.setItem(e,JSON.stringify(a))}catch(t){throw new Error}},M=function(e){try{var a=localStorage.getItem(e);return a?JSON.parse(a):null}catch(t){throw new Error}},S=Object(m.a)((function(e){return{form:{"& > *":{margin:e.spacing(1)}},text:{height:50},selectEmpty:{marginTop:e.spacing(2)}}})),A={age1:"",operNad:"",oldMileage:"",newMileage:""},x=function(e){var a=e.car,t=e.carTotalAll,l=Object(n.useState)(A),c=Object(i.a)(l,2),m=c[0],s=c[1],u=function(e){var a=e.target.name,t=e.target.value;s(Object(r.a)({},m,Object(w.a)({},a,t)))};Object(n.useEffect)((function(){var e=M("carTotalAll");e?s(e):I("carTotalAll",[])}),[]),Object(n.useEffect)((function(){I("carTotalAll",Object(r.a)({},m))}),[m]);var d=m.age1,g=m.operNad,p=m.oldMileage,b=m.newMileage,f=S();return o.a.createElement("form",{onSubmit:function(){var e=m.age1,n=m.operNad,o={age:e||n,oldMileage:m.oldMileage,newMileage:m.newMileage,baseRate:a.baseRate,operationInKiev:a.operationInKiev,operationalAllowance:a.operationalAllowance};m.newMileage<m.oldMileage?alert("Nooooo"):t(o)}},o.a.createElement(k.a,{fullWidth:!0,variant:"outlined",className:f.form},o.a.createElement(N.a,{id:"demo-simple-select-label"},"\u0412\u0456\u043a \u0410\\\u041c"),o.a.createElement(O.a,{labelId:"demo-simple-select-filled-label",id:"1",variant:"outlined",name:"age1",value:d,onChange:u,disabled:!!g},o.a.createElement(j.a,{key:26},"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"),a.ageCar.map((function(e){return o.a.createElement(j.a,{key:e,value:e},"".concat(e," %"))})))),o.a.createElement(k.a,{fullWidth:!0,variant:"outlined",className:f.form},o.a.createElement(N.a,{id:"demo-simple-select-label"},"\u041d\u0430\u043f\u0440\u0443\u0436\u0435\u043d\u0456 \u0443\u043c\u043e\u0432\u0438"),o.a.createElement(O.a,{labelId:"demo-simple-select-filled-label",id:"2",variant:"outlined",name:"operNad",value:g,onChange:u,disabled:!!d},o.a.createElement(j.a,{key:53},"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"),o.a.createElement(j.a,{key:54,value:.1},"10 %"))),o.a.createElement(k.a,{fullWidth:!0,className:f.form},o.a.createElement(C.a,{id:"1",label:"\u0421\u0442\u0430\u0440\u0438\u0439 \u043f\u0440\u043e\u0431\u0456\u0433",variant:"outlined",autoFocus:!0,onChange:u,name:"oldMileage",value:p,type:"number",required:!0}),o.a.createElement(C.a,{id:"2",label:"\u041d\u043e\u0432\u0438\u0439 \u043f\u0440\u043e\u0431\u0456\u0433",variant:"outlined",onChange:u,name:"newMileage",value:b,type:"number",required:!0}),o.a.createElement(y.a,{type:"submit",className:f.text,variant:"contained",color:"primary"},"\u0414\u0430\u043b\u0456")))},F=t(4),R=t(131),T=t(133),K=t(128),z=t(130),J=t(132),W=t(129),_=t(119),P=Object(F.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:18}}}))(K.a),q=Object(F.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.background.default}}}}))(W.a),G=Object(m.a)({table:{minWidth:375},km:{color:"black"},lit:{color:"#191970"},totalNumber:{color:"#191970",fontSize:40},totalNumberContainer:{display:"flex",justifyContent:"center",marginTop:20}}),L=function(e){var a=e.finishTotal,t=G(),n=a.age,l=a.baseRate,c=a.newMileage,r=a.oldMileage,i=a.operationInKiev,m=a.operationalAllowance,s=c-r,u=s*l,d=s*l*i,g=s<=10?s*l*m:(s-10)*l*m,p=(.1===n?s-10:s)*l*n,b=u+d+g+p,f=function(e,a,t){return{name:e,km:a,lit:t}},h=[f("\u0411\u0430\u0437\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430 ".concat(l,"%"),"".concat(s),"".concat(u.toFixed(2))),f("\u0415\u043a\u0441.\u043f\u043e \u043c.\u041a\u0438\u0454\u0432\u0443 ".concat(i,"%"),"".concat(s),"".concat(d.toFixed(2))),f("\u041e\u043f\u0435\u0440. \u041d\u0430\u0434\u0431\u0430\u0432\u043a\u0430 ".concat(m,"%"),"".concat(s<=10?s:s-10),"".concat(g.toFixed(2))),f("".concat(.1===n?"\u041d\u0430\u043f\u0440\u0443\u0436\u0435\u043d\u0456 \u0443\u043c\u043e\u0432\u0438":"\u0412\u0456\u043a \u0410\u043c"," ").concat(n,"%"),"".concat(s>10&&.1===n?s-10:s),"".concat(p.toFixed(2)))];return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{component:_.a},o.a.createElement(R.a,{className:t.table,"aria-label":"customized table"},o.a.createElement(J.a,null,o.a.createElement(W.a,null,o.a.createElement(P,null,"\u041c\u0430\u0440\u0448\u0442\u0440\u0443\u0442 \u0442\u0430 \u0443\u043c\u043e\u0432\u0438 \u0440\u0443\u0445\u0443"),o.a.createElement(P,{align:"right"},"\u041a\u043c\\\u043f\u0440"),o.a.createElement(P,{align:"right"},"\u0424\u0430\u043a.\u043b\u0456\u0442\u0440\xa0"))),o.a.createElement(T.a,null,h.map((function(e){return o.a.createElement(q,{key:e.name},o.a.createElement(P,{component:"th",scope:"row"},e.name),o.a.createElement(P,{className:t.km,align:"right"},e.km),o.a.createElement(P,{className:t.lit,align:"right"},e.lit))}))))),o.a.createElement("div",{className:t.totalNumberContainer},o.a.createElement("h2",{className:t.totalNumber},"\u0421\u043f\u0430\u043b\u0435\u043d\u043e: ",b.toFixed(2)," \u043b")))};var B=function(){var e=Object(n.useState)({}),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)({}),m=Object(i.a)(c,2),s=m[0],u=m[1],d=Object(n.useState)(!0),g=Object(i.a)(d,2),p=g[0],b=g[1],f=Object(n.useState)(!1),h=Object(i.a)(f,2),w=h[0],k=h[1],N=Object(n.useState)(!1),O=Object(i.a)(N,2),j=O[0],C=O[1];return o.a.createElement(o.a.Fragment,null,p&&o.a.createElement(E,{arrCars:v,getCarMarc:function(e){l(e),k(!0),b(!1)}}),w&&o.a.createElement(x,{car:t,carTotalAll:function(e){u(Object(r.a)({},e)),C(!0),k(!1)}}),j&&o.a.createElement(L,{finishTotal:s}))};c.a.render(o.a.createElement(B,null),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.29efbd31.chunk.js.map