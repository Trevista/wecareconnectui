(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{LZch:function(t,b,e){"use strict";e.r(b),e.d(b,"PatientsModule",function(){return u});var i=e("ofXK"),n=e("njyG"),a=e("tyNb"),c=e("EVdn"),r=e("fXoL"),s=e("1+kh");function o(t,b){if(1&t&&(r.Zb(0,"tr"),r.Zb(1,"td"),r.Mc(2),r.Yb(),r.Zb(3,"td"),r.Zb(4,"h2",17),r.Zb(5,"a",18),r.Ub(6,"img",19),r.Yb(),r.Zb(7,"a"),r.Mc(8),r.Yb(),r.Yb(),r.Yb(),r.Zb(9,"td"),r.Mc(10),r.Yb(),r.Zb(11,"td"),r.Mc(12),r.Yb(),r.Zb(13,"td"),r.Mc(14),r.Yb(),r.Zb(15,"td"),r.Mc(16),r.nc(17,"date"),r.Yb(),r.Zb(18,"td",15),r.Mc(19),r.Yb(),r.Yb()),2&t){const t=b.$implicit;r.Gb(2),r.Nc(t.key),r.Gb(4),r.tc("src",t.img,r.Fc),r.Gb(2),r.Oc("",t.name," "),r.Gb(2),r.Nc(t.age),r.Gb(2),r.Nc(t.address),r.Gb(2),r.Nc(t.phone),r.Gb(2),r.Nc(r.pc(17,8,t.lastvisit,"dd MMM yyyy")),r.Gb(3),r.Oc("$",t.paid,"")}}const d=[{path:"",component:(()=>{class t{constructor(t){this.commonService=t,this.patientsList=[]}ngOnInit(){this.getPatients()}getPatients(){this.commonService.getpatients().subscribe(t=>{this.patientsList=t,c(function(){c("table").DataTable()})},t=>this.errorMessage=t)}}return t.\u0275fac=function(b){return new(b||t)(r.Tb(s.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-patients"]],decls:41,vars:2,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["href","javascript:(0);"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"datatable","table","table-hover","table-center","mb-0"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"table-avatar"],["href","javascript:void(0)",1,"avatar","avatar-sm","mr-2"],["alt","User Image",1,"avatar-img","rounded-circle",3,"src"]],template:function(t,b){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"div",4),r.Zb(5,"h3",5),r.Mc(6,"List of Patient"),r.Yb(),r.Zb(7,"ul",6),r.Zb(8,"li",7),r.Zb(9,"a",8),r.Mc(10,"Dashboard"),r.Yb(),r.Yb(),r.Zb(11,"li",7),r.Zb(12,"a",9),r.Mc(13,"Users"),r.Yb(),r.Yb(),r.Zb(14,"li",10),r.Mc(15,"Patient"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(16,"div",3),r.Zb(17,"div",4),r.Zb(18,"div",11),r.Zb(19,"div",12),r.Zb(20,"div",13),r.Zb(21,"div",13),r.Zb(22,"table",14),r.Zb(23,"thead"),r.Zb(24,"tr"),r.Zb(25,"th"),r.Mc(26,"Patient ID"),r.Yb(),r.Zb(27,"th"),r.Mc(28,"Patient Name"),r.Yb(),r.Zb(29,"th"),r.Mc(30,"Age"),r.Yb(),r.Zb(31,"th"),r.Mc(32,"Address"),r.Yb(),r.Zb(33,"th"),r.Mc(34,"Phone"),r.Yb(),r.Zb(35,"th"),r.Mc(36,"Last Visit"),r.Yb(),r.Zb(37,"th",15),r.Mc(38,"Paid"),r.Yb(),r.Yb(),r.Yb(),r.Zb(39,"tbody"),r.Kc(40,o,20,11,"tr",16),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb()),2&t&&(r.Gb(9),r.tc("routerLink",""),r.Gb(31),r.tc("ngForOf",b.patientsList))},directives:[a.h,i.k],pipes:[i.d],styles:[""]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(b){return new(b||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[a.i.forChild(d)],a.i]}),t})(),u=(()=>{class t{}return t.\u0275fac=function(b){return new(b||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[i.b,Z,n.a]]}),t})()},njyG:function(t,b,e){"use strict";e.d(b,"a",function(){return a});var i=e("fXoL"),n=e("ofXK"),a=function(){function t(){}var b;return b=t,t.forRoot=function(){return{ngModule:b}},t.\u0275fac=function(b){return new(b||t)},t.\u0275mod=i.Rb({type:t}),t.\u0275inj=i.Qb({imports:[[n.b]]}),t}()}}]);