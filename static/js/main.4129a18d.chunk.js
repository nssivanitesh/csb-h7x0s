(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{63:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(14),a=n.n(i),s=n(7),l=n(2),o=n(6),d=n(76),j=n(71),h=n(73),b=n(74),u=n(70),m=n(68),O=(n(51),n(1));function x(e){function t(t,n,c){e.onToggleComplete(t,n,c)}return Object(O.jsx)("tbody",{children:e.list.map((function(n,c){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:c+1}),Object(O.jsx)("td",{children:n.name}),Object(O.jsx)("td",{children:Object(O.jsx)(b.a.Check,{type:"checkbox",checked:n.model,onChange:function(e){t(n.id,"model",e.target.checked)}})}),Object(O.jsx)("td",{children:Object(O.jsx)(b.a.Check,{type:"checkbox",checked:n.controller,onChange:function(e){t(n.id,"controller",e.target.checked)}})}),Object(O.jsx)("td",{children:Object(O.jsx)(b.a.Check,{type:"checkbox",checked:n.seeder,onChange:function(e){t(n.id,"seeder",e.target.checked)}})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{onClick:function(){return e.onRemove(n.id)},children:"Remove "})})]},n.id)}))})}var g=n(77),p=n(75),f=n(52);function v(e){var t=r.a.useState(""),n=Object(o.a)(t,2),c=n[0],i=n[1];function a(e){for(var t="",n=0;n<e;n++)t+="    ";return t}function s(e){return e+"\n"}return Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(g.a.Header,{children:["Generated YAML File for"," ",Object(O.jsx)("a",{href:"https://blueprint.laravelshift.com/",children:"Laravel Blueprint"})]}),Object(O.jsxs)(g.a.Body,{children:[Object(O.jsxs)(g.a.Text,{children:[Object(O.jsxs)(p.a,{variant:"info",children:[Object(O.jsx)("b",{children:"Pro tip"}),": You can edit the below content manually, for further customization."]}),Object(O.jsx)(f.a,{as:"textarea",value:c,onChange:function(e){return i(e.target.value)},rows:10})]}),Object(O.jsx)(m.a,{variant:"primary",onClick:function(){var t="",n="",c=0,r=0;e.list.length>0&&(t=s("models:"));for(var l=0;l<e.list.length;l++){t+=s(a(1)+e.list[l].name+":");var o=e.list[l].members;console.log(o.length);for(var d=0;d<o.length;d++)t+=s(a(2)+o[d].colName+": "+o[d].dataType+" "+o[d].options);!1!==e.list[l].seeder&&(0===c?n=e.list[l].name:n+=", "+e.list[l].name,c++),!1!==e.list[l].controller&&r++}if(c>0&&(t+=s("seeders: "+n)),r>0){t+=s("controllers:");for(var j=0;j<e.list.length;j++)t+=s(a(1)+e.list[j].name+":"),t+=s(a(2)+"resource")}i(t)},children:"Generate YAML"})]})]})}var y=n(72),C=n(69),T=["bigIncrements","bigInteger","binary","boolean","char","dateTimeTz","dateTime","date","decimal","double","enum","float","foreignId","foreignIdFor","foreignUuid","geometryCollection","geometry","id","increments","integer","ipAddress","json","jsonb","lineString","longText","macAddress","mediumIncrements","mediumInteger","mediumText","morphs","multiLineString","multiPoint","multiPolygon","nullableMorphs","nullableTimestamps","nullableUuidMorphs","point","polygon","rememberToken","set","smallIncrements","smallInteger","softDeletesTz","softDeletes","string","text","timeTz","time","timestampTz","timestamp","timestampsTz","timestamps","tinyIncrements","tinyInteger","tinyText","unsignedBigInteger","unsignedDecimal","unsignedInteger","unsignedMediumInteger","unsignedSmallInteger","unsignedTinyInteger","uuidMorphs","uuid","year"],k=[];function I(e){var t=r.a.useState(k),n=Object(o.a)(t,2),c=n[0],i=n[1],a=r.a.useState(""),j=Object(o.a)(a,2),h=j[0],x=j[1];function p(){console.log("updates sent to parent"),e.updateMembers(e.id,"members",c)}function v(e,t,n){var r=c.map((function(c){return c.id===e?Object(l.a)(Object(l.a)({},c),{},Object(s.a)({},t,n)):c}));i(r),p()}return Object(O.jsx)("div",{children:Object(O.jsxs)(g.a,{children:[Object(O.jsxs)(g.a.Header,{children:[Object(O.jsx)("b",{children:e.name}),Object(O.jsx)(A,{id:e.id,name:h,onChange:function(e){x(e.target.value),p()},onAdd:function(){console.log(h);var e=c.concat({id:Object(d.a)(),colName:h,dataType:"",options:""});i(e),x(""),p()}}),Object(O.jsx)(y.a,{placement:"right",overlay:Object(O.jsx)(C.a,{id:"overlay-example",children:"Updates are delayed by one user action for table column members in CodeGen."}),children:Object(O.jsx)(m.a,{variant:"secondary",children:"Info on bug."})},"right")]}),Object(O.jsx)(g.a.Body,{children:c.length>0&&Object(O.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Column name"}),Object(O.jsx)("th",{children:"Data type"}),Object(O.jsx)("th",{children:"Options"}),Object(O.jsx)("th",{children:"Delete"})]})}),Object(O.jsx)("tbody",{children:c.map((function(e,t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:t+1}),Object(O.jsx)("td",{children:e.colName}),Object(O.jsx)("td",{children:Object(O.jsx)(b.a.Select,{onChange:function(t){return v(e.id,"dataType",t.target.value)},value:e.dataType,children:T.map((function(e,t){return Object(O.jsx)("option",{value:e,children:e},t)}))})}),Object(O.jsx)("td",{children:Object(O.jsx)(f.a,{as:"textarea",value:e.options,onChange:function(t){return v(e.id,"options",t.target.value)}})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));i(t),p()}(e.id)},children:"Remove "})})]},e.id)}))})]})})]})})}var A=function(e){var t=e.name,n=e.onChange,c=e.onAdd;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",value:t,onChange:n})," \xa0",Object(O.jsx)(m.a,{onClick:c,children:"Add column"})]})},S=[],M=function(e){var t=e.name,n=e.onChange,c=e.onAdd;return Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"text",value:t,onChange:n})," \xa0",Object(O.jsx)(m.a,{onClick:c,children:"Add model"})]})},z=function(){var e=r.a.useState(S),t=Object(o.a)(e,2),n=t[0],c=t[1],i=r.a.useState(""),a=Object(o.a)(i,2),m=a[0],g=a[1];function p(e,t,r){var i=n.map((function(n){return n.id===e?Object(l.a)(Object(l.a)({},n),{},Object(s.a)({},t,r)):n}));c(i)}return Object(O.jsx)("div",{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(h.a,{expand:"lg",variant:"light",bg:"light",children:Object(O.jsx)(j.a,{children:Object(O.jsx)(h.a.Brand,{href:"#",children:"LARAFAST"})})}),Object(O.jsx)("hr",{}),Object(O.jsx)(b.a.Label,{children:"Enter a table name"}),Object(O.jsx)(M,{name:m,onChange:function(e){g(e.target.value)},onAdd:function(){var e=n.concat({id:Object(d.a)(),name:m,model:!0,controller:!0,seeder:!0,migration:!0,isComplete:!0,members:[]});c(e),g("")}}),Object(O.jsx)("hr",{}),n.length>0&&Object(O.jsxs)(u.a,{striped:!0,bordered:!0,hover:!0,children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"#"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Model"}),Object(O.jsx)("th",{children:"Controller"}),Object(O.jsx)("th",{children:"Seeder"}),Object(O.jsx)("th",{children:"Delete"})]})}),Object(O.jsx)(x,{list:n,onToggleComplete:p,onRemove:function(e){var t=n.filter((function(t){return t.id!==e}));c(t)}})]}),n.map((function(e,t){return Object(O.jsx)(I,Object(l.a)({updateMembers:p},e),t)})),Object(O.jsx)("hr",{}),Object(O.jsx)(v,{list:n})]})})},B=document.getElementById("root");a.a.render(Object(O.jsx)(c.StrictMode,{children:Object(O.jsx)(z,{})}),B)}},[[63,1,2]]]);
//# sourceMappingURL=main.4129a18d.chunk.js.map