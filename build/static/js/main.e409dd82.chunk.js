(this["webpackJsonptest-react-app"]=this["webpackJsonptest-react-app"]||[]).push([[0],{22:function(e,r,i){"use strict";i.r(r);var t=i(0),s=i.n(t),a=i(10),l=i.n(a),n=i(13),d=i(2);var c=function(){var e=Object(n.a)({initialValues:{email:"",password:""},onSubmit:function(e){alert("Login Successful")},validate:function(e){var r={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(r.email="Username should be an email"):r.email="Field required",e.password||(r.password="Field required"),r}});return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(d.jsx)("div",{children:"Email:"}),Object(d.jsx)("input",{id:"emailField",type:"email",name:"email",onChange:e.handleChange,value:e.values.email}),e.errors.email?Object(d.jsx)("div",{id:"emailError",style:{color:"red"},children:e.errors.email}):null,Object(d.jsx)("div",{children:"Password:"}),Object(d.jsx)("input",{id:"pswField",type:"text",name:"password",onChange:e.handleChange,value:e.values.password}),Object(d.jsx)("br",{}),e.errors.password?Object(d.jsx)("div",{id:"pswError",style:{color:"red"},children:e.errors.password}):null,Object(d.jsx)("button",{id:"submitBtn",type:"submit",children:"Submit"})]})})};l.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(c,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.e409dd82.chunk.js.map