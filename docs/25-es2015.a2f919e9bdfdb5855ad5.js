(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{MBHg:function(t,e,c){"use strict";c.r(e),c.d(e,"ExpiredModule",function(){return p});var b=c("ofXK"),i=c("njyG"),n=c("tyNb"),o=c("EVdn"),r=c("fXoL"),a=c("1+kh"),d=c("K3ix");function s(t,e){if(1&t){const t=r.ac();r.Zb(0,"tr"),r.Zb(1,"td"),r.Mc(2),r.Yb(),r.Zb(3,"td"),r.Zb(4,"h2",17),r.Zb(5,"span",18),r.Ub(6,"img",19),r.Yb(),r.Mc(7),r.Yb(),r.Yb(),r.Zb(8,"td"),r.Mc(9),r.Yb(),r.Zb(10,"td"),r.Mc(11),r.Yb(),r.Zb(12,"td"),r.Mc(13),r.Yb(),r.Zb(14,"td"),r.Zb(15,"span",20),r.Mc(16),r.Yb(),r.Yb(),r.Zb(17,"td"),r.Mc(18,"0%"),r.Yb(),r.Zb(19,"td"),r.Zb(20,"span",20),r.Mc(21),r.Yb(),r.Yb(),r.Zb(22,"td"),r.Zb(23,"div",21),r.Zb(24,"a",22),r.Ub(25,"i",23),r.Mc(26," Edit "),r.Yb(),r.Zb(27,"a",24),r.jc("click",function(){r.Dc(t);const c=e.$implicit,b=r.mc(),i=r.Ac(42);return b.deleteModal(i,c)}),r.Ub(28,"i",25),r.Mc(29," Delete "),r.Yb(),r.Yb(),r.Yb(),r.Yb()}if(2&t){const t=e.$implicit;r.Gb(2),r.Nc(t.id),r.Gb(4),r.uc("src",t.img,r.Fc),r.Gb(1),r.Oc(" ",t.name," "),r.Gb(2),r.Nc(t.genetic_name),r.Gb(2),r.Nc(t.category),r.Gb(2),r.Oc("$",t.price,""),r.Gb(3),r.Nc(t.quantity),r.Gb(5),r.Nc(t.expire),r.Gb(3),r.tc("routerLink","/pharmacy-admin/edit-product")}}function l(t,e){if(1&t){const t=r.ac();r.Zb(0,"div",26),r.Zb(1,"h4",27),r.Mc(2,"Delete"),r.Yb(),r.Zb(3,"button",28),r.jc("click",function(){return r.Dc(t),r.mc().modalRef.hide()}),r.Zb(4,"span",29),r.Mc(5,"\xd7"),r.Yb(),r.Yb(),r.Yb(),r.Zb(6,"div",30),r.Zb(7,"p",31),r.Mc(8,"are you sure you want to delete?"),r.Yb(),r.Zb(9,"div",32),r.Zb(10,"button",33),r.jc("click",function(){return r.Dc(t),r.mc().deleteProduct()}),r.Mc(11,"Yes"),r.Yb(),r.Zb(12,"button",34),r.jc("click",function(){return r.Dc(t),r.mc().decline()}),r.Mc(13,"No"),r.Yb(),r.Yb(),r.Yb()}}const u=[{path:"",component:(()=>{class t{constructor(t,e){this.commonService=t,this.modalService=e,this.products=[]}ngOnInit(){this.getProducts()}getProducts(){this.commonService.getProducts().subscribe(t=>{this.products=t,o(function(){o("table").DataTable()})},t=>this.errorMessage=t)}openModal(t){this.modalRef=this.modalService.show(t,{class:"modal-lg modal-dialog-centered"})}deleteModal(t,e){this.id=e.id,this.modalRef=this.modalService.show(t,{class:"modal-sm modal-dialog-centered"})}save(){this.modalRef.hide()}deleteProduct(){this.products=this.products.filter(t=>t.id!==this.id),this.commonService.deleteProduct(this.id).subscribe(t=>{this.modalRef.hide(),this.getProducts()})}decline(){this.modalRef.hide()}}return t.\u0275fac=function(e){return new(e||t)(r.Tb(a.a),r.Tb(d.a))},t.\u0275cmp=r.Nb({type:t,selectors:[["app-expired"]],decls:43,vars:2,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table","table-hover","table-center","mb-0"],[4,"ngFor","ngForOf"],["delete",""],[1,"table-avatar"],[1,"avatar","avatar-sm","mr-2"],["alt","product image",1,"avatar-img",3,"src"],[1,"btn","btn-sm","bg-danger-light"],[1,"actions"],[1,"btn","btn-sm","bg-success-light",3,"routerLink"],[1,"fe","fe-pencil"],["data-toggle","modal","data-toggle","modal","data-target","#deleteConfirmModal",1,"btn","btn-sm","bg-danger-light",3,"click"],[1,"fe","fe-trash"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","text-center"],["id","acc_msg"],[2,"margin-top","25px"],["type","button","id","btn-yes",1,"btn","btn-success","si_accept_confirm",3,"click"],["type","button",1,"btn","btn-danger","si_accept_cancel",3,"click"]],template:function(t,e){1&t&&(r.Zb(0,"div",0),r.Zb(1,"div",1),r.Zb(2,"div",2),r.Zb(3,"div",3),r.Zb(4,"div",4),r.Zb(5,"h3",5),r.Mc(6,"Expired"),r.Yb(),r.Zb(7,"ul",6),r.Zb(8,"li",7),r.Zb(9,"a",8),r.Mc(10,"Medicine"),r.Yb(),r.Yb(),r.Zb(11,"li",9),r.Mc(12,"Expired"),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Zb(13,"div",3),r.Zb(14,"div",10),r.Zb(15,"div",11),r.Zb(16,"div",12),r.Zb(17,"div",13),r.Zb(18,"table",14),r.Zb(19,"thead"),r.Zb(20,"tr"),r.Zb(21,"th"),r.Mc(22,"#"),r.Yb(),r.Zb(23,"th"),r.Mc(24,"Brand Name"),r.Yb(),r.Zb(25,"th"),r.Mc(26,"Genetic Name"),r.Yb(),r.Zb(27,"th"),r.Mc(28,"Category"),r.Yb(),r.Zb(29,"th"),r.Mc(30,"Price"),r.Yb(),r.Zb(31,"th"),r.Mc(32,"Quantity"),r.Yb(),r.Zb(33,"th"),r.Mc(34,"Discount"),r.Yb(),r.Zb(35,"th"),r.Mc(36,"Expire"),r.Yb(),r.Zb(37,"th"),r.Mc(38,"Action"),r.Yb(),r.Yb(),r.Yb(),r.Zb(39,"tbody"),r.Kc(40,s,30,9,"tr",15),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Yb(),r.Kc(41,l,14,0,"ng-template",null,16,r.Lc)),2&t&&(r.Gb(9),r.tc("routerLink",""),r.Gb(31),r.tc("ngForOf",e.products))},directives:[n.h,b.k],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[n.i.forChild(u)],n.i]}),t})(),p=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Rb({type:t}),t.\u0275inj=r.Qb({imports:[[b.b,m,i.a]]}),t})()},njyG:function(t,e,c){"use strict";c.d(e,"a",function(){return n});var b=c("fXoL"),i=c("ofXK"),n=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=b.Rb({type:t}),t.\u0275inj=b.Qb({imports:[[i.b]]}),t}()}}]);