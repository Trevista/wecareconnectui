(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{X3zk:function(t,e,o){"use strict";o.r(e),o.d(e,"LoginModule",function(){return d});var n=o("ofXK"),i=o("3Pt+"),r=o("tyNb"),s=o("fXoL"),c=o("1+kh"),b=o("ej43"),a=o("5eHb");const l=[{path:"",component:(()=>{class t{constructor(t,e,o,n){this.router=t,this.commonService=e,this.authService=o,this.toastr=n,this.isPatient=!1,this.doctors=[],this.patients=[],this.username="",this.password="",this.username="",this.password="",this.doctors=[],this.patients=[]}ngOnInit(){this.getpatients(),this.getDoctors()}checkType(t){this.isPatient=!!t.target.checked}login(t,e){this.authService.login({email:t,password:e}).subscribe(t=>{this.toastr.success("","Login success!"),this.commonService.nextmessage(t.role+"Login"),"Doctor"===t.role?this.router.navigate(["/doctor/dashboard"]):"User"===t.role&&this.router.navigate(["/patients/dashboard"])},t=>this.toastr.error("","Login failed!")),localStorage.setItem("auth","true"),localStorage.setItem("patient",this.isPatient.toString())}getDoctors(){this.commonService.getDoctors().subscribe(t=>{this.doctors=t})}getpatients(){this.commonService.getpatients().subscribe(t=>{this.patients=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Tb(r.e),s.Tb(c.a),s.Tb(b.a),s.Tb(a.b))},t.\u0275cmp=s.Nb({type:t,selectors:[["app-login"]],decls:54,vars:5,consts:[[1,"content"],[1,"container-fluid"],[1,"row"],[1,"col-md-8","offset-md-2"],[1,"account-content"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-7","col-lg-6","login-left"],["src","assets/img/login-banner.png","alt","Doccure Login",1,"img-fluid"],[1,"col-md-12","col-lg-6","login-right"],[1,"login-header"],[1,"form-group","form-focus"],["type","text","name","name","id","username",1,"form-control","floating",3,"ngModel","ngModelChange"],[1,"focus-label"],[1,"required"],["type","password","name","password","id","password",1,"form-control","floating",3,"ngModel","ngModelChange"],[1,"custom_check"],["type","checkbox","name","gender_type",3,"ngModel","ngModelChange","click"],[1,"checkmark"],[1,"text-right"],[1,"forgot-link",3,"routerLink"],["type","submit",1,"btn","btn-primary","btn-block","btn-lg","login-btn",3,"click"],[1,"login-or"],[1,"or-line"],[1,"span-or"],[1,"row","form-row","social-login"],[1,"col-6"],["href","javascript:void(0)",1,"btn","btn-facebook","btn-block"],[1,"fab","fa-facebook-f","mr-1"],[1,"btn","btn-google","btn-block"],[1,"fab","fa-google","mr-1"],[1,"text-center","dont-have"],[3,"routerLink"]],template:function(t,e){1&t&&(s.Zb(0,"div",0),s.Zb(1,"div",1),s.Zb(2,"div",2),s.Zb(3,"div",3),s.Zb(4,"div",4),s.Zb(5,"div",5),s.Zb(6,"div",6),s.Ub(7,"img",7),s.Yb(),s.Zb(8,"div",8),s.Zb(9,"div",9),s.Zb(10,"h3"),s.Mc(11,"Login "),s.Zb(12,"span"),s.Mc(13,"Doccure"),s.Yb(),s.Yb(),s.Yb(),s.Zb(14,"form"),s.Zb(15,"div",10),s.Zb(16,"input",11),s.jc("ngModelChange",function(t){return e.username=t}),s.Yb(),s.Zb(17,"label",12),s.Mc(18,"Username"),s.Zb(19,"span",13),s.Mc(20,"*"),s.Yb(),s.Yb(),s.Yb(),s.Zb(21,"div",10),s.Zb(22,"input",14),s.jc("ngModelChange",function(t){return e.password=t}),s.Yb(),s.Zb(23,"label",12),s.Mc(24,"Password"),s.Zb(25,"span",13),s.Mc(26,"*"),s.Yb(),s.Yb(),s.Yb(),s.Zb(27,"div"),s.Zb(28,"label",15),s.Zb(29,"input",16),s.jc("ngModelChange",function(t){return e.isPatient=t})("click",function(t){return e.checkType(t)}),s.Yb(),s.Ub(30,"span",17),s.Mc(31," Patients "),s.Yb(),s.Yb(),s.Zb(32,"div",18),s.Zb(33,"a",19),s.Mc(34,"Forgot Password ?"),s.Yb(),s.Yb(),s.Zb(35,"button",20),s.jc("click",function(){return e.login(e.username,e.password)}),s.Mc(36,"Login"),s.Yb(),s.Zb(37,"div",21),s.Ub(38,"span",22),s.Zb(39,"span",23),s.Mc(40,"or"),s.Yb(),s.Yb(),s.Zb(41,"div",24),s.Zb(42,"div",25),s.Zb(43,"a",26),s.Ub(44,"i",27),s.Mc(45," Login"),s.Yb(),s.Yb(),s.Zb(46,"div",25),s.Zb(47,"a",28),s.Ub(48,"i",29),s.Mc(49," Login"),s.Yb(),s.Yb(),s.Yb(),s.Zb(50,"div",30),s.Mc(51,"Don\u2019t have an account? "),s.Zb(52,"a",31),s.Mc(53,"Register"),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb(),s.Yb()),2&t&&(s.Gb(16),s.tc("ngModel",e.username),s.Gb(6),s.tc("ngModel",e.password),s.Gb(7),s.tc("ngModel",e.isPatient),s.Gb(4),s.tc("routerLink","/forgot-password"),s.Gb(19),s.tc("routerLink","/Register"))},directives:[i.x,i.p,i.q,i.b,i.o,i.r,i.a,r.h],styles:[".required[_ngcontent-%COMP%]{color:red;padding-left:3px}.content[_ngcontent-%COMP%]{padding-bottom:50px}.form-focus[_ngcontent-%COMP%]   .focus-label[_ngcontent-%COMP%]{font-size:13px}.form-control[_ngcontent-%COMP%]{font-size:14px!important}"]}),t})()}];let g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({imports:[[r.i.forChild(l)],r.i]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Rb({type:t}),t.\u0275inj=s.Qb({imports:[[n.b,i.j,g]]}),t})()}}]);