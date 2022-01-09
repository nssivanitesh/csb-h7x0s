(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{76:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(18),s=n.n(a),i=n(7),o=n(2),l=n(6),d=n(87),j=n(82),b=n(83),h=n(84),u=n(86),m=n(89),O=n(81),x=n(59),g=n(80),f=n(79),v=(n(57),n(1)),p=["Default","None","Custom"];function y(e){function t(t,n,r){e.onToggleComplete(t,n,r)}return Object(v.jsx)("tbody",{children:e.list.map((function(n,r){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:r+1}),Object(v.jsx)("td",{children:n.name}),Object(v.jsx)("td",{children:Object(v.jsx)(h.a.Check,{type:"checkbox",checked:n.model,onChange:function(e){t(n.id,"model",e.target.checked)}})}),Object(v.jsx)("td",{children:Object(v.jsx)(h.a.Select,{value:n.controller,onChange:function(e){t(n.id,"controller",e.target.value)},children:p.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))})}),Object(v.jsx)("td",{children:Object(v.jsx)(h.a.Check,{type:"checkbox",checked:n.seeder,onChange:function(e){t(n.id,"seeder",e.target.checked)}})}),Object(v.jsx)("td",{children:Object(v.jsx)(f.a,{variant:"danger",onClick:function(){return e.onRemove(n.id)},children:"Remove "})})]},n.id)}))})}var T=n(88);function C(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(r.useRef)(null);function o(e){for(var t="",n=0;n<e;n++)t+="    ";return t}function d(e){return e+"\n"}return Object(v.jsxs)(T.a,{children:[Object(v.jsxs)(T.a.Header,{children:["Generated YAML File for"," ",Object(v.jsx)("a",{href:"https://blueprint.laravelshift.com/",children:"Laravel Blueprint"})]}),Object(v.jsxs)(T.a.Body,{children:[Object(v.jsxs)(T.a.Text,{children:[Object(v.jsxs)(g.a,{variant:"info",children:[Object(v.jsx)("b",{children:"Pro tip"}),": You can edit the below content manually, for further customization."]}),Object(v.jsx)(x.a,{as:"textarea",value:a,ref:i,onChange:function(e){return s(e.target.value)},rows:10})]}),Object(v.jsx)(f.a,{variant:"primary",onClick:function(t){!function(){var t="",n="",r=0,c=0;e.list.length>0&&(t=d("models:"));for(var a=0;a<e.list.length;a++){t+=d(o(1)+e.list[a].name+":");var i=e.list[a].members;console.log(i.length);for(var l=0;l<i.length;l++)t+=d(o(2)+i[l].colName+": "+i[l].dataType+" "+i[l].options);var j=e.list[a].belongsTo.length,b=e.list[a].belongsToMany.length,h=e.list[a].hasMany.length;j+b+h>0&&(t+=d(o(2)+"relationships:"),t+=j>0?d(o(3)+"belongsTo: "+e.list[a].belongsTo):"",t+=b>0?d(o(3)+"belongsToMany: "+e.list[a].belongsToMany):"",t+=h>0?d(o(3)+"hasMany: "+e.list[a].hasMany):""),!1!==e.list[a].seeder&&(0===r?n=e.list[a].name:n+=", "+e.list[a].name,r++),"None"!==e.list[a].controller&&c++}r>0&&(t+=d("seeders: "+n));if(c>0){t+=d("controllers:");for(var u=0;u<e.list.length;u++)"None"!==e.list[u].controller&&(t+=d(o(1)+e.list[u].name+":"),"Default"===e.list[u].controller?t+=d(o(2)+"resource"):t+=e.list[u].controllerText)}s(t)}(),i.current.select(),document.execCommand("copy"),t.target.focus()},children:"Generate & Copy YAML"})]})]})}var M=["Select datatype","bigIncrements","bigInteger","binary","boolean","char","dateTimeTz","dateTime","date","decimal","double","enum","float","foreignId","foreignIdFor","foreignUuid","geometryCollection","geometry","id","increments","integer","ipAddress","json","jsonb","lineString","longText","macAddress","mediumIncrements","mediumInteger","mediumText","morphs","multiLineString","multiPoint","multiPolygon","nullableMorphs","nullableTimestamps","nullableUuidMorphs","point","polygon","rememberToken","set","smallIncrements","smallInteger","softDeletesTz","softDeletes","string","string:5","string:10","string:50","string:100","string:500","text","timeTz","time","timestampTz","timestamp","timestampsTz","timestamps","tinyIncrements","tinyInteger","tinyText","unsignedBigInteger","unsignedDecimal","unsignedInteger","unsignedMediumInteger","unsignedSmallInteger","unsignedTinyInteger","uuidMorphs","uuid","year"],S=[];function k(e){var t=c.a.useState(S),n=Object(l.a)(t,2),a=n[0],s=n[1],j=c.a.useState(""),b=Object(l.a)(j,2),u=b[0],m=b[1];function g(e,t,n){var r=a.map((function(r){return r.id===e?Object(o.a)(Object(o.a)({},r),{},Object(i.a)({},t,n)):r}));s(r)}return Object(r.useEffect)((function(){e.updateMembers(e.id,"members",a)}),[a]),Object(v.jsx)("div",{children:Object(v.jsxs)(T.a,{children:[Object(v.jsxs)(T.a.Header,{children:[Object(v.jsx)("b",{children:e.name}),Object(v.jsx)(A,{id:e.id,name:u,onChange:function(e){m(e.target.value)},onAdd:function(){console.log(u);var e=a.concat({id:Object(d.a)(),colName:u,dataType:"",options:""});s(e),m("")}})]}),Object(v.jsx)(T.a.Body,{children:a.length>0&&Object(v.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Column name"}),Object(v.jsx)("th",{children:"Data type"}),Object(v.jsx)("th",{children:"Options"}),Object(v.jsx)("th",{children:"Delete"})]})}),Object(v.jsx)("tbody",{children:a.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:t+1}),Object(v.jsx)("td",{children:e.colName}),Object(v.jsx)("td",{children:Object(v.jsx)(h.a.Select,{onChange:function(t){return g(e.id,"dataType",t.target.value)},value:e.dataType,children:M.map((function(e,t){return Object(v.jsx)("option",{value:e,children:e},t)}))})}),Object(v.jsx)("td",{children:Object(v.jsx)(x.a,{as:"textarea",placeholder:"Add nullable default enum etc..",value:e.options,onChange:function(t){return g(e.id,"options",t.target.value)}})}),Object(v.jsx)("td",{children:Object(v.jsx)(f.a,{variant:"danger",onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));s(t)}(e.id)},children:"Remove "})})]},e.id)}))})]})})]})})}var A=function(e){var t=e.name,n=e.onChange,r=e.onAdd;return Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"text",value:t,onChange:n})," \xa0",Object(v.jsx)(f.a,{onClick:r,children:"Add column"})]})},I=n(85);function D(e){var t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(l.a)(i,2),d=o[0],j=o[1];return Object(r.useEffect)((function(){e.updateSummary([e.amethod],d)}),[d]),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.amethod},e.ai),Object(v.jsx)("td",{children:Object(v.jsx)(x.a,{as:"textarea",placeholder:"Custom action",value:a,onChange:function(t){s(t.target.value),j(t.target.value.length>0?e.amethod+": "+t.target.value:"")}})}),Object(v.jsx)("td",{children:d})]},e.ai)}var N=["delete","dispatch","find","fire","flash","notify","query","redirect","render","resource","respond","save","send","store","update","validate"];function U(e){var t=c.a.useState({}),n=Object(l.a)(t,2),a=n[0],s=n[1];function d(e,t){var n=Object(i.a)({},e,"            "+t),r=Object(o.a)(Object(o.a)({},a),n);s(r)}return Object(r.useEffect)((function(){e.updateModelSummary([e.cmethod],function(){for(var t="        "+e.cmethod+":\n",n=0,r=0,c=Object.entries(a);r<c.length;r++){var s=Object(l.a)(c[r],2),i=(s[0],s[1]);console.log(i),i.length>12&&(n++,t+=i+"\n")}return 0==n?"":t}())}),[a]),Object(v.jsxs)(I.a.Item,{eventKey:e.ci,children:[Object(v.jsxs)(I.a.Header,{children:[e.cmethod.charAt(0).toUpperCase()+e.cmethod.slice(1)," method"]},e.ci),Object(v.jsx)(I.a.Body,{children:Object(v.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Action"}),Object(v.jsx)("th",{children:"Content"}),Object(v.jsx)("th",{children:"Generated text"})]})}),Object(v.jsx)("tbody",{children:N.map((function(t,n){return Object(v.jsx)(D,{amethod:t,cmethod:e.cmethod,updateSummary:d,ai:n,mi:e.ci})}))})]},e.ci)},e.ci)]})}var B=["index","create","store","show","edit","update","destroy"];function P(e){var t=c.a.useState({}),n=Object(l.a)(t,2),a=n[0],s=n[1];function d(e,t){var n=Object(i.a)({},e,t),r=Object(o.a)(Object(o.a)({},a),n);s(r)}return Object(r.useEffect)((function(){e.onToggleComplete(e.id,"controllerText",function(){for(var e="",t=0,n=0,r=Object.entries(a);n<r.length;n++){var c=Object(l.a)(r[n],2),s=(c[0],c[1]);console.log(s),s.length>0&&(t++,e+=s+"\n")}return 0==t?"":e}())}),[a]),Object(v.jsx)("div",{children:Object(v.jsx)(I.a,{defaultActiveKey:"0",children:B.map((function(e,t){return Object(v.jsx)(U,{updateModelSummary:d,cmethod:e,ci:t})}))})})}var w=n(29),L=n(30),R=n(53),z=n(50),E=n(61),K=n.n(E),F=function(e){Object(R.a)(n,e);var t=Object(z.a)(n);function n(e){var r;return Object(w.a)(this,n),(r=t.call(this,e)).state={count:0},r}return Object(L.a)(n,[{key:"componentDidMount",value:function(){var e=this;K.a.visits().then((function(t){e.setState({count:t.value})}))}},{key:"render",value:function(){return Object(v.jsxs)(g.a,{variant:"info",children:[Object(v.jsxs)("div",{className:"text-center",children:["This page has been requested: ",this.state.count," times"]}),Object(v.jsx)("div",{className:"text-center",children:Object(v.jsx)("b",{children:"Sivakumar Kumar"})}),Object(v.jsx)("div",{className:"text-center",children:"Software Developer - \ud83c\uddee\ud83c\uddf3 | \ud83c\uddf8\ud83c\uddea"}),Object(v.jsxs)("div",{className:"text-center",children:[Object(v.jsx)("br",{}),Object(v.jsx)("h6",{children:"This site uses React Bootstrap UI Framework."})]})]})}}]),n}(c.a.Component),Y=[{id:"a",name:"test1",model:!0,controller:"Default",seeder:!1,migration:!1,isComplete:!1,members:[],controllerText:"",belongsTo:"Posts",belongsToMany:"Posts, Users",hasMany:"Posts, Users"},{id:"b",name:"test2",model:!0,controller:"Default",seeder:!1,migration:!1,isComplete:!1,members:[],controllerText:"",belongsTo:"Posts",belongsToMany:"Posts, Users",hasMany:"Posts, Users"}],G=function(e){var t=e.name,n=e.onChange,r=e.onAdd;return Object(v.jsxs)("div",{children:[Object(v.jsx)("input",{type:"text",value:t,onChange:n})," \xa0",Object(v.jsx)(f.a,{onClick:r,children:"Add model"})]})},H=function(){var e=c.a.useState(Y),t=Object(l.a)(e,2),n=t[0],r=t[1],a=c.a.useState(""),s=Object(l.a)(a,2),f=s[0],p=s[1];function T(e,t,c){var a=n.map((function(n){return n.id===e?Object(o.a)(Object(o.a)({},n),{},Object(i.a)({},t,c)):n}));r(a)}return Object(v.jsx)("div",{children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(b.a,{expand:"lg",variant:"light",bg:"light",children:Object(v.jsx)(j.a,{children:Object(v.jsxs)(b.a.Brand,{href:"#",children:[" ","LARAFAST | Laravel Blueprint YAML Creator"]})})}),Object(v.jsx)("hr",{}),Object(v.jsx)(h.a.Label,{children:"Enter a table name (Singular)"}),Object(v.jsx)(G,{name:f,onChange:function(e){p(e.target.value)},onAdd:function(){var e=n.concat({id:Object(d.a)(),name:f,model:!0,controller:"Default",seeder:!0,migration:!0,isComplete:!0,members:[],controllerText:"",belongsTo:"",belongsToMany:"",hasMany:""});r(e),p("")}}),Object(v.jsx)("br",{}),Object(v.jsxs)(u.a,{id:"uncontrolled-tab-example",className:"mb-3",defaultActiveKey:"Summary",children:[n.length>0&&Object(v.jsx)(m.a,{eventKey:"Summary",title:"Summary",children:Object(v.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"#"}),Object(v.jsx)("th",{children:"Name"}),Object(v.jsx)("th",{children:"Model"}),Object(v.jsx)("th",{children:"Controller"}),Object(v.jsx)("th",{children:"Seeder"}),Object(v.jsx)("th",{children:"Delete"})]})}),Object(v.jsx)(y,{list:n,onToggleComplete:T,onRemove:function(e){var t=n.filter((function(t){return t.id!==e}));r(t)}})]})}),n.map((function(e,t){return Object(v.jsxs)(m.a,{eventKey:e.name,title:e.name,children:[Object(v.jsx)(k,Object(o.a)({updateMembers:T},e),t),Object(v.jsx)("br",{}),Object(v.jsxs)("b",{children:["Relationships for: ",e.name]}),Object(v.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"belongsTo"}),Object(v.jsx)("th",{children:"belongsToMany"}),Object(v.jsx)("th",{children:"hasMany"})]})}),Object(v.jsx)("tbody",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.belongsTo,onChange:function(t){return T(e.id,"belongsTo",t.target.value)}})}),Object(v.jsx)("td",{children:Object(v.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.belongsToMany,onChange:function(t){return T(e.id,"belongsToMany",t.target.value)}})}),Object(v.jsx)("td",{children:Object(v.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.hasMany,onChange:function(t){return T(e.id,"hasMany",t.target.value)}})})]})})]}),"Custom"!==e.controller&&Object(v.jsxs)(g.a,{variant:"info",children:[Object(v.jsx)("b",{children:"Info:"}),' To customize controllers, from the "Summary" tab select "Custom" for Controllers from the dropdown.']}),"Custom"===e.controller&&Object(v.jsxs)("div",{children:[Object(v.jsxs)("b",{children:["Controllers for: ",e.name]}),Object(v.jsx)(P,{id:e.id,onToggleComplete:T}),Object(v.jsx)("br",{})]})]})}))]}),Object(v.jsx)(C,{list:n}),Object(v.jsx)(F,{})]})})},q=document.getElementById("root");s.a.render(Object(v.jsx)(r.StrictMode,{children:Object(v.jsx)(H,{})}),q)}},[[76,1,2]]]);
//# sourceMappingURL=main.55f29906.chunk.js.map