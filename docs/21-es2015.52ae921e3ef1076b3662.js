(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{P9Qw:function(t,e,c){"use strict";c.r(e),c.d(e,"SpecialitiesModule",function(){return y});var i=c("ofXK"),n=c("3Pt+"),o=c("tyNb"),b=c("fXoL");let l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Nb({type:t,selectors:[["app-add"]],decls:2,vars:0,template:function(t,e){1&t&&(b.Zb(0,"p"),b.Mc(1,"add works!"),b.Yb())},styles:[""]}),t})();var a=c("EVdn"),d=c("1+kh"),r=c("K3ix");function s(t,e){if(1&t){const t=b.ac();b.Zb(0,"tr"),b.Zb(1,"td"),b.Mc(2),b.Yb(),b.Zb(3,"td"),b.Zb(4,"h2",22),b.Zb(5,"a",23),b.Ub(6,"img",24),b.Yb(),b.Zb(7,"a"),b.Mc(8),b.Yb(),b.Yb(),b.Yb(),b.Zb(9,"td",17),b.Zb(10,"div",25),b.Zb(11,"a",26),b.jc("click",function(){b.Dc(t);const c=e.$implicit,i=b.mc(),n=b.Ac(35);return i.editModal(n,c)}),b.Ub(12,"i",27),b.Mc(13," Edit "),b.Yb(),b.Zb(14,"a",28),b.jc("click",function(){b.Dc(t);const c=e.$implicit,i=b.mc(),n=b.Ac(37);return i.deleteModal(n,c)}),b.Ub(15,"i",29),b.Mc(16," Delete "),b.Yb(),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=e.$implicit;b.Gb(2),b.Nc(t.key),b.Gb(4),b.tc("src",t.img,b.Fc),b.Gb(2),b.Nc(t.speciality)}}function m(t,e){if(1&t){const t=b.ac();b.Zb(0,"div",30),b.Zb(1,"h4",31),b.Mc(2,"Add Specialities"),b.Yb(),b.Zb(3,"button",32),b.jc("click",function(){return b.Dc(t),b.mc().modalRef.hide()}),b.Zb(4,"span",33),b.Mc(5,"\xd7"),b.Yb(),b.Yb(),b.Yb(),b.Zb(6,"div",34),b.Zb(7,"form"),b.Zb(8,"div",35),b.Zb(9,"div",36),b.Zb(10,"div",37),b.Zb(11,"label"),b.Mc(12,"Specialities"),b.Yb(),b.Zb(13,"input",38),b.jc("ngModelChange",function(e){return b.Dc(t),b.mc().name=e}),b.Yb(),b.Yb(),b.Yb(),b.Zb(14,"div",36),b.Zb(15,"div",37),b.Zb(16,"label"),b.Mc(17,"Image"),b.Yb(),b.Ub(18,"input",39),b.Yb(),b.Yb(),b.Yb(),b.Zb(19,"button",40),b.jc("click",function(){return b.Dc(t),b.mc().save()}),b.Mc(20,"Save Changes"),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=b.mc();b.Gb(13),b.tc("ngModel",t.name)}}function u(t,e){if(1&t){const t=b.ac();b.Zb(0,"div",30),b.Zb(1,"h4",31),b.Mc(2,"Edit Specialities"),b.Yb(),b.Zb(3,"button",32),b.jc("click",function(){return b.Dc(t),b.mc().modalRef.hide()}),b.Zb(4,"span",33),b.Mc(5,"\xd7"),b.Yb(),b.Yb(),b.Yb(),b.Zb(6,"div",34),b.Zb(7,"form"),b.Zb(8,"div",35),b.Zb(9,"div",36),b.Zb(10,"div",37),b.Zb(11,"label"),b.Mc(12,"Specialities"),b.Yb(),b.Zb(13,"input",38),b.jc("ngModelChange",function(e){return b.Dc(t),b.mc().name=e}),b.Yb(),b.Yb(),b.Yb(),b.Zb(14,"div",36),b.Zb(15,"div",37),b.Zb(16,"label"),b.Mc(17,"Image"),b.Yb(),b.Ub(18,"input",39),b.Yb(),b.Yb(),b.Yb(),b.Zb(19,"button",40),b.jc("click",function(){return b.Dc(t),b.mc().update()}),b.Mc(20,"Edit"),b.Yb(),b.Yb(),b.Yb()}if(2&t){const t=b.mc();b.Gb(13),b.tc("ngModel",t.name)}}function f(t,e){if(1&t){const t=b.ac();b.Zb(0,"div",30),b.Zb(1,"h4",31),b.Mc(2,"Delete"),b.Yb(),b.Zb(3,"button",32),b.jc("click",function(){return b.Dc(t),b.mc().modalRef.hide()}),b.Zb(4,"span",33),b.Mc(5,"\xd7"),b.Yb(),b.Yb(),b.Yb(),b.Zb(6,"div",41),b.Mc(7," Are you sure want to delete this speciality? "),b.Zb(8,"div",42),b.Zb(9,"button",43),b.jc("mouseover",function(){return b.Dc(t),b.mc().btnColor()})("click",function(){return b.Dc(t),b.mc().deleteSpeciality()}),b.Mc(10,"Yes"),b.Yb(),b.Zb(11,"button",44),b.jc("mouseover",function(){return b.Dc(t),b.mc().btnColorNo()})("click",function(){return b.Dc(t),b.mc().decline()}),b.Mc(12,"No"),b.Yb(),b.Yb(),b.Yb()}}let p=(()=>{class t{constructor(t,e){this.commonService=t,this.modalService=e,this.speciality=[]}ngOnInit(){this.getSpecialityList()}getSpecialityList(){this.commonService.getSpeciality().subscribe(t=>{this.speciality=t,a(function(){a("table").DataTable()})},t=>this.errorMessage=t)}openModal(t){this.modalRef=this.modalService.show(t,{class:"modal-lg modal-dialog-centered"})}editModal(t,e){this.id=e.id,this.modalRef=this.modalService.show(t,{class:"modal-lg modal-dialog-centered"})}deleteModal(t,e){this.id=e.id,this.modalRef=this.modalService.show(t,{class:"modal-sm modal-dialog-centered"})}save(){this.modalRef.hide()}update(){this.modalRef.hide()}deleteSpeciality(){this.speciality=this.speciality.filter(t=>t.id!==this.id),this.commonService.deleteSpeciality(this.id).subscribe(t=>{this.modalRef.hide(),this.getSpecialityList()})}decline(){this.modalRef.hide()}btnColor(){document.getElementById("btn-yes").style.backgroundColor="#00d0f1",document.getElementById("btn-yes").style.border="1px solid #00d0f1",document.getElementById("btn-yes").style.color="#fff",document.getElementById("btn-no").style.backgroundColor="#fff",document.getElementById("btn-no").style.border="1px solid #fff",document.getElementById("btn-no").style.color="#000"}btnColorNo(){document.getElementById("btn-no").style.backgroundColor="#00d0f1",document.getElementById("btn-no").style.border="1px solid #00d0f1",document.getElementById("btn-no").style.color="#fff",document.getElementById("btn-yes").style.backgroundColor="#fff",document.getElementById("btn-yes").style.border="1px solid #fff",document.getElementById("btn-yes").style.color="#000"}}return t.\u0275fac=function(e){return new(e||t)(b.Tb(d.a),b.Tb(r.a))},t.\u0275cmp=b.Nb({type:t,selectors:[["app-view"]],decls:38,vars:2,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-7","col-auto"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-sm-5","col"],["data-toggle","modal",1,"btn","btn-primary","float-right","mt-2",3,"click"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"datatable","table","table-hover","table-center","mb-0"],[1,"text-right"],[4,"ngFor","ngForOf"],["template",""],["edittemplate",""],["delete",""],[1,"table-avatar"],[1,"avatar","avatar-sm","mr-2"],["alt","Speciality",1,"avatar-img",3,"src"],[1,"actions"],["data-toggle","modal",1,"btn","btn-sm","bg-success-light",3,"click"],[1,"fe","fe-pencil"],["data-toggle","modal",1,"btn","btn-sm","bg-danger-light",3,"click"],[1,"fe","fe-trash"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"row","form-row"],[1,"col-12","col-sm-6"],[1,"form-group"],["type","text","name","speciality",1,"form-control",3,"ngModel","ngModelChange"],["type","file",1,"form-control"],["type","submit",1,"btn","btn-primary","btn-block",3,"click"],[1,"modal-body","text-center"],[2,"margin-top","25px"],["type","button","id","btn-yes",1,"btn","btn-default",3,"mouseover","click"],["type","button","id","btn-no",1,"btn","btn-primary",3,"mouseover","click"]],template:function(t,e){if(1&t){const t=b.ac();b.Zb(0,"div",0),b.Zb(1,"div",1),b.Zb(2,"div",2),b.Zb(3,"div",3),b.Zb(4,"div",4),b.Zb(5,"h3",5),b.Mc(6,"Specialities"),b.Yb(),b.Zb(7,"ul",6),b.Zb(8,"li",7),b.Zb(9,"a",8),b.Mc(10,"Dashboard"),b.Yb(),b.Yb(),b.Zb(11,"li",9),b.Mc(12,"Specialities"),b.Yb(),b.Yb(),b.Yb(),b.Zb(13,"div",10),b.Zb(14,"a",11),b.jc("click",function(){b.Dc(t);const c=b.Ac(33);return e.openModal(c)}),b.Mc(15," Add "),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Zb(16,"div",3),b.Zb(17,"div",12),b.Zb(18,"div",13),b.Zb(19,"div",14),b.Zb(20,"div",15),b.Zb(21,"table",16),b.Zb(22,"thead"),b.Zb(23,"tr"),b.Zb(24,"th"),b.Mc(25,"#"),b.Yb(),b.Zb(26,"th"),b.Mc(27,"Specialities"),b.Yb(),b.Zb(28,"th",17),b.Mc(29,"Actions"),b.Yb(),b.Yb(),b.Yb(),b.Zb(30,"tbody"),b.Kc(31,s,17,3,"tr",18),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Yb(),b.Kc(32,m,21,1,"ng-template",null,19,b.Lc),b.Kc(34,u,21,1,"ng-template",null,20,b.Lc),b.Kc(36,f,13,0,"ng-template",null,21,b.Lc)}2&t&&(b.Gb(9),b.tc("routerLink",""),b.Gb(22),b.tc("ngForOf",e.speciality))},directives:[o.h,i.k,n.x,n.p,n.q,n.b,n.o,n.r],styles:["h5.modal-title.pull-left[_ngcontent-%COMP%]{font-size:20px!important;margin-bottom:0!important;line-height:1.5!important}"]}),t})();const Y=[{path:"",component:p,children:[{path:"",redirectTo:"view",pathMatch:"full"},{path:"add",component:l},{path:"view",component:p}]}];let h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({imports:[[o.i.forChild(Y)],o.i]}),t})();var Z=c("njyG");let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({imports:[[i.b,h,n.j,Z.a]]}),t})()},njyG:function(t,e,c){"use strict";c.d(e,"a",function(){return o});var i=c("fXoL"),n=c("ofXK"),o=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.Rb({type:t}),t.\u0275inj=i.Qb({imports:[[n.b]]}),t}()}}]);