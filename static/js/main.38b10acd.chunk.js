(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{74:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(18),i=n.n(a),s=n(6),l=n(2),o=n(7),d=n(84),j=n(80),b=n(81),h=n(82),u=n(83),m=n(86),O=n(79),x=n(57),g=n(77),f=(n(55),n(1));function p(e){function t(t,n,c){e.onToggleComplete(t,n,c)}return Object(f.jsx)("tbody",{children:e.list.map((function(n,c){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:c+1}),Object(f.jsx)("td",{children:n.name}),Object(f.jsx)("td",{children:Object(f.jsx)(h.a.Check,{type:"checkbox",checked:n.model,onChange:function(e){t(n.id,"model",e.target.checked)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(h.a.Check,{type:"checkbox",checked:n.controller,onChange:function(e){t(n.id,"controller",e.target.checked)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(h.a.Check,{type:"checkbox",checked:n.seeder,onChange:function(e){t(n.id,"seeder",e.target.checked)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(g.a,{onClick:function(){return e.onRemove(n.id)},children:"Remove "})})]},n.id)}))})}var v=n(85),y=n(78);function T(e){var t=r.a.useState(""),n=Object(o.a)(t,2),a=n[0],i=n[1],s=Object(c.useRef)(null);function l(e){for(var t="",n=0;n<e;n++)t+="    ";return t}function d(e){return e+"\n"}return Object(f.jsxs)(v.a,{children:[Object(f.jsxs)(v.a.Header,{children:["Generated YAML File for"," ",Object(f.jsx)("a",{href:"https://blueprint.laravelshift.com/",children:"Laravel Blueprint"})]}),Object(f.jsxs)(v.a.Body,{children:[Object(f.jsxs)(v.a.Text,{children:[Object(f.jsxs)(y.a,{variant:"info",children:[Object(f.jsx)("b",{children:"Pro tip"}),": You can edit the below content manually, for further customization."]}),Object(f.jsx)(x.a,{as:"textarea",value:a,ref:s,onChange:function(e){return i(e.target.value)},rows:10})]}),Object(f.jsx)(g.a,{variant:"primary",onClick:function(){var t="",n="",c=0,r=0;e.list.length>0&&(t=d("models:"));for(var a=0;a<e.list.length;a++){t+=d(l(1)+e.list[a].name+":");var s=e.list[a].members;console.log(s.length);for(var o=0;o<s.length;o++)t+=d(l(2)+s[o].colName+": "+s[o].dataType+" "+s[o].options);var j=e.list[a].belongsTo.length,b=e.list[a].belongsToMany.length,h=e.list[a].hasMany.length;j+b+h>0&&(t+=d(l(2)+"relationships:"),t+=j>0?d(l(3)+"belongsTo: "+e.list[a].belongsTo):"",t+=b>0?d(l(3)+"belongsToMany: "+e.list[a].belongsToMany):"",t+=h>0?d(l(3)+"hasMany: "+e.list[a].hasMany):""),!1!==e.list[a].seeder&&(0===c?n=e.list[a].name:n+=", "+e.list[a].name,c++),!1!==e.list[a].controller&&r++}if(c>0&&(t+=d("seeders: "+n)),r>0){t+=d("controllers:");for(var u=0;u<e.list.length;u++)t+=d(l(1)+e.list[u].name+":"),t+=d(l(2)+"resource")}i(t)},children:"Generate YAML"}),"\xa0",Object(f.jsx)(g.a,{variant:"primary",onClick:function(e){s.current.select(),document.execCommand("copy"),e.target.focus()},children:"Copy YAML"})]})]})}var C=["Select datatype","bigIncrements","bigInteger","binary","boolean","char","dateTimeTz","dateTime","date","decimal","double","enum","float","foreignId","foreignIdFor","foreignUuid","geometryCollection","geometry","id","increments","integer","ipAddress","json","jsonb","lineString","longText","macAddress","mediumIncrements","mediumInteger","mediumText","morphs","multiLineString","multiPoint","multiPolygon","nullableMorphs","nullableTimestamps","nullableUuidMorphs","point","polygon","rememberToken","set","smallIncrements","smallInteger","softDeletesTz","softDeletes","string","string:5","string:10","string:50","string:100","string:500","text","timeTz","time","timestampTz","timestamp","timestampsTz","timestamps","tinyIncrements","tinyInteger","tinyText","unsignedBigInteger","unsignedDecimal","unsignedInteger","unsignedMediumInteger","unsignedSmallInteger","unsignedTinyInteger","uuidMorphs","uuid","year"],M=[];function k(e){var t=r.a.useState(M),n=Object(o.a)(t,2),a=n[0],i=n[1],j=r.a.useState(""),b=Object(o.a)(j,2),u=b[0],m=b[1];function p(e,t,n){var c=a.map((function(c){return c.id===e?Object(l.a)(Object(l.a)({},c),{},Object(s.a)({},t,n)):c}));i(c)}return Object(c.useEffect)((function(){e.updateMembers(e.id,"members",a)}),[a]),Object(f.jsx)("div",{children:Object(f.jsxs)(v.a,{children:[Object(f.jsxs)(v.a.Header,{children:[Object(f.jsx)("b",{children:e.name}),Object(f.jsx)(S,{id:e.id,name:u,onChange:function(e){m(e.target.value)},onAdd:function(){console.log(u);var e=a.concat({id:Object(d.a)(),colName:u,dataType:"",options:""});i(e),m("")}})]}),Object(f.jsx)(v.a.Body,{children:a.length>0&&Object(f.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"Column name"}),Object(f.jsx)("th",{children:"Data type"}),Object(f.jsx)("th",{children:"Options"}),Object(f.jsx)("th",{children:"Delete"})]})}),Object(f.jsx)("tbody",{children:a.map((function(e,t){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:t+1}),Object(f.jsx)("td",{children:e.colName}),Object(f.jsx)("td",{children:Object(f.jsx)(h.a.Select,{onChange:function(t){return p(e.id,"dataType",t.target.value)},value:e.dataType,children:C.map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)}))})}),Object(f.jsx)("td",{children:Object(f.jsx)(x.a,{as:"textarea",placeholder:"Add nullable default enum etc..",value:e.options,onChange:function(t){return p(e.id,"options",t.target.value)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(g.a,{onClick:function(){return function(e){var t=a.filter((function(t){return t.id!==e}));i(t)}(e.id)},children:"Remove "})})]},e.id)}))})]})})]})})}var S=function(e){var t=e.name,n=e.onChange,c=e.onAdd;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",value:t,onChange:n})," \xa0",Object(f.jsx)(g.a,{onClick:c,children:"Add column"})]})},A=n(28),I=n(29),N=n(51),D=n(50),R=n(59),B=n.n(R),L=function(e){Object(N.a)(n,e);var t=Object(D.a)(n);function n(e){var c;return Object(A.a)(this,n),(c=t.call(this,e)).state={count:0},c}return Object(I.a)(n,[{key:"componentDidMount",value:function(){var e=this;B.a.visits().then((function(t){e.setState({count:t.value})}))}},{key:"render",value:function(){return Object(f.jsxs)(y.a,{variant:"info",children:[Object(f.jsxs)("div",{className:"text-center",children:["This page has been requested: ",this.state.count," times"]}),Object(f.jsx)("div",{className:"text-center",children:Object(f.jsx)("b",{children:"Sivakumar Kumar"})}),Object(f.jsx)("div",{className:"text-center",children:"Software Developer - \ud83c\uddee\ud83c\uddf3 | \ud83c\uddf8\ud83c\uddea"}),Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("br",{}),Object(f.jsx)("h6",{children:"This site uses React Bootstrap UI Framework."})]})]})}}]),n}(r.a.Component),w=[],z=function(e){var t=e.name,n=e.onChange,c=e.onAdd;return Object(f.jsxs)("div",{children:[Object(f.jsx)("input",{type:"text",value:t,onChange:n,autofocus:!0})," \xa0",Object(f.jsx)(g.a,{onClick:c,children:"Add model"})]})},U=function(){var e,t=r.a.useState(w),n=Object(o.a)(t,2),c=n[0],a=n[1],i=r.a.useState(""),g=Object(o.a)(i,2),v=g[0],y=g[1];function C(e,t,n){var r=c.map((function(c){return c.id===e?Object(l.a)(Object(l.a)({},c),{},Object(s.a)({},t,n)):c}));a(r)}return Object(f.jsx)("div",{children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(b.a,{expand:"lg",variant:"light",bg:"light",children:Object(f.jsx)(j.a,{children:Object(f.jsx)(b.a.Brand,{href:"#",children:"LARAFAST"})})}),Object(f.jsx)("hr",{}),Object(f.jsx)(h.a.Label,{children:"Enter a table name"}),Object(f.jsx)(z,{name:v,onChange:function(e){y(e.target.value)},onAdd:function(){var e=c.concat({id:Object(d.a)(),name:v,model:!0,controller:!0,seeder:!0,migration:!0,isComplete:!0,members:[],belongsTo:"",belongsToMany:"",hasMany:""});a(e),y("")}}),Object(f.jsx)("br",{}),Object(f.jsxs)(u.a,(e={defaultActiveKey:"profile",id:"uncontrolled-tab-example",className:"mb-3"},Object(s.a)(e,"defaultActiveKey","Summary"),Object(s.a)(e,"children",[c.length>0&&Object(f.jsx)(m.a,{eventKey:"Summary",title:"Summary",children:Object(f.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"#"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Model"}),Object(f.jsx)("th",{children:"Controller"}),Object(f.jsx)("th",{children:"Seeder"}),Object(f.jsx)("th",{children:"Delete"})]})}),Object(f.jsx)(p,{list:c,onToggleComplete:C,onRemove:function(e){var t=c.filter((function(t){return t.id!==e}));a(t)}})]})}),c.map((function(e,t){return Object(f.jsxs)(m.a,{eventKey:e.name,title:e.name,children:[Object(f.jsx)(k,Object(l.a)({updateMembers:C},e),t),Object(f.jsx)("br",{}),Object(f.jsxs)("b",{children:["Relationships for: ",e.name]}),Object(f.jsxs)(O.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"belongsTo"}),Object(f.jsx)("th",{children:"belongsToMany"}),Object(f.jsx)("th",{children:"hasMany"})]})}),Object(f.jsx)("tbody",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:Object(f.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.belongsTo,onChange:function(t){return C(e.id,"belongsTo",t.target.value)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.belongsToMany,onChange:function(t){return C(e.id,"belongsToMany",t.target.value)}})}),Object(f.jsx)("td",{children:Object(f.jsx)(x.a,{as:"textarea",placeholder:"Use comma separated list of multiple values",value:e.hasMany,onChange:function(t){return C(e.id,"hasMany",t.target.value)}})})]})})]})]})}))]),e)),Object(f.jsx)(T,{list:c}),Object(f.jsx)(L,{})]})})},K=document.getElementById("root");i.a.render(Object(f.jsx)(c.StrictMode,{children:Object(f.jsx)(U,{})}),K)}},[[74,1,2]]]);
//# sourceMappingURL=main.38b10acd.chunk.js.map