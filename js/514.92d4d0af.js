"use strict";(self["webpackChunkadah_diary"]=self["webpackChunkadah_diary"]||[]).push([[514],{3116:function(e,a,s){s.d(a,{Z:function(){return o}});var l=s(3396);const r={class:"loader"};function n(e,a){return(0,l.wg)(),(0,l.iD)("p",r)}var t=s(89);const i={},u=(0,t.Z)(i,[["render",n],["__scopeId","data-v-22e8b4a3"]]);var o=u},8514:function(e,a,s){s.r(a),s.d(a,{default:function(){return H}});s(560);var l=s(3396),r=s(9242),n=s(7139),t=s(4870),i=s(2745),u=s(2483),o=s(3116);const d=e=>((0,l.dD)("data-v-3f27d1dc"),e=e(),(0,l.Cn)(),e),c={class:"page"},v={class:"content"},p={class:"title"},m=d((()=>(0,l._)("span",{class:"adi"}," A",-1))),h=d((()=>(0,l._)("span",{class:"adi"},"Di",-1))),f=d((()=>(0,l._)("h1",{class:"sub-title"},"LOG IN YOUR ACCOUNT",-1))),_={class:"form-fields"},w={class:"form-fields"},g={class:"error-message"},b={key:0,class:"error-msg"},k={class:"footer"},I=["disabled"],y={key:0,style:{display:"flex","justify-content":"center"}},C={style:{"margin-left":"10px"}},E={key:1},N=d((()=>(0,l._)("p",null,"or",-1))),U=d((()=>(0,l._)("p",{style:{"font-size":"12px","font-weight":"500"}},"A diary app for Mars G. Sumagang",-1)));var D={__name:"LoginView",setup(e){const a=(0,t.iH)(""),s=(0,t.iH)(""),d=(0,u.tv)(),D=(0,t.iH)("SIGN IN"),G=(0,t.iH)(!1),S=(0,t.iH)(""),H=(0,t.iH)(!1),F=e=>{e.preventDefault(),D.value="SIGNING IN...",G.value=!0,S.value="",H.value=!1,(0,i.e5)((0,i.v0)(),a.value,s.value).then((()=>{localStorage.setItem("userId",(0,i.v0)().currentUser.uid),d.push("/")})).catch((e=>{switch(console.log(e.message),H.value=!0,D.value="SIGN IN",G.value=!1,e.message){case"Firebase: Error (auth/email-already-in-use).":S.value="Email already exist";break;case"Firebase: Error (auth/invalid-email).":S.value="Invalid Email";break;case"Firebase: Error (auth/user-not-found).":S.value="Account not found";break;case"Firebase: Error (auth/wrong-password).":S.value="Invalid Credentials/Password";break;case"Firebase: Error (auth/invalid-login-credentials).":S.value="Invalid Credentials/Password";break;case"Firebase: Error (auth/invalid-credential).":S.value="Invalid Credentials/Password";break;default:S.value="Something went wrong! Please contact the admin"}}))},O=()=>{const e=new i.hJ;(0,i.rh)((0,i.v0)(),e).then((e=>{localStorage.setItem("userId",(0,i.v0)().currentUser.uid),d.push("/")})).catch((e=>{console.log(e)}))},P=()=>{d.push("/register")};return(e,t)=>{const i=(0,l.up)("font-awesome-icon");return(0,l.wg)(),(0,l.iD)("div",c,[(0,l._)("div",v,[(0,l._)("p",p,[(0,l.Wm)(i,{icon:["fas","square-pen"]}),m,(0,l.Uk)("dah's "),h,(0,l.Uk)("ary ")]),f,(0,l._)("form",{onSubmit:F},[(0,l._)("div",_,[(0,l.wy)((0,l._)("input",{type:"email",class:"input",name:"email",placeholder:"Enter Email","onUpdate:modelValue":t[0]||(t[0]=e=>a.value=e),required:""},null,512),[[r.nr,a.value]])]),(0,l._)("div",w,[(0,l.wy)((0,l._)("input",{type:"password",class:"input",name:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>s.value=e),required:""},null,512),[[r.nr,s.value]])]),(0,l._)("div",g,[H.value?((0,l.wg)(),(0,l.iD)("p",b,(0,n.zw)(S.value),1)):(0,l.kq)("",!0)]),(0,l._)("div",k,[(0,l._)("button",{class:(0,n.C_)(G.value?"disabled-btn":"button"),type:"submit",disabled:G.value},[G.value?((0,l.wg)(),(0,l.iD)("span",y,[(0,l.Uk)((0,n.zw)(D.value)+" ",1),(0,l._)("span",C,[(0,l.Wm)(o.Z)])])):((0,l.wg)(),(0,l.iD)("span",E,(0,n.zw)(D.value),1))],10,I),(0,l._)("p",null,[(0,l.Uk)("Dont have an account? "),(0,l._)("span",{onClick:P,class:"click-me"},"Click me!")]),N])],32),(0,l._)("div",{class:"google",onClick:t[2]||(t[2]=(...e)=>O&&O(...e))}," SIGN IN WITH GOOGLE "),U])])}}},G=s(89);const S=(0,G.Z)(D,[["__scopeId","data-v-3f27d1dc"]]);var H=S}}]);
//# sourceMappingURL=514.92d4d0af.js.map