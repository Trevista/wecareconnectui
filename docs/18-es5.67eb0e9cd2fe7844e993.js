!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8FnB":function(n,o,b){"use strict";b.r(o),b.d(o,"InvoiceReportsModule",function(){return h});var c=b("ofXK"),i=b("njyG"),r=b("tyNb"),a=b("EVdn"),l=b("fXoL"),d=b("1+kh"),s=b("K3ix");function u(t,e){if(1&t){var n=l.ac();l.Zb(0,"tr"),l.Zb(1,"td"),l.Zb(2,"a"),l.Mc(3),l.Yb(),l.Yb(),l.Zb(4,"td"),l.Mc(5),l.Yb(),l.Zb(6,"td"),l.Zb(7,"h2",18),l.Zb(8,"a",19),l.Ub(9,"img",20),l.Yb(),l.Zb(10,"a",8),l.Mc(11),l.Yb(),l.Yb(),l.Yb(),l.Zb(12,"td"),l.Mc(13),l.Yb(),l.Zb(14,"td",14),l.Zb(15,"span",21),l.Mc(16),l.Yb(),l.Yb(),l.Zb(17,"td",15),l.Zb(18,"div",22),l.Zb(19,"a",23),l.jc("click",function(){l.Dc(n);var t=e.$implicit,o=l.mc(),b=l.Ac(36);return o.deleteModal(b,t)}),l.Ub(20,"i",24),l.Mc(21," Delete "),l.Yb(),l.Yb(),l.Yb(),l.Yb()}if(2&t){var o=e.$implicit;l.Gb(3),l.Nc(o.invoiceNumber),l.Gb(2),l.Nc(o.patient_id),l.Gb(4),l.tc("src",o.profile,l.Fc),l.Gb(1),l.tc("routerLink","doc-profile"),l.Gb(1),l.Oc("",o.patient_name," "),l.Gb(2),l.Nc(o.total_amount),l.Gb(3),l.Nc(o.status)}}function f(t,e){if(1&t){var n=l.ac();l.Zb(0,"div",25),l.Zb(1,"h4",26),l.Mc(2,"Delete"),l.Yb(),l.Zb(3,"button",27),l.jc("click",function(){return l.Dc(n),l.mc().modalRef.hide()}),l.Zb(4,"span",28),l.Mc(5,"\xd7"),l.Yb(),l.Yb(),l.Yb(),l.Zb(6,"div",29),l.Mc(7," Are you sure want to delete this speciality? "),l.Zb(8,"div",30),l.Zb(9,"button",31),l.jc("mouseover",function(){return l.Dc(n),l.mc().btnColor()})("click",function(){return l.Dc(n),l.mc().deleteReport()}),l.Mc(10,"Yes"),l.Yb(),l.Zb(11,"button",32),l.jc("mouseover",function(){return l.Dc(n),l.mc().btnColorNo()}),l.Mc(12,"No"),l.Yb(),l.Yb(),l.Yb()}}var m,p,y,v=[{path:"",component:(m=function(){function n(e,o){t(this,n),this.commonService=e,this.modalService=o,this.transactions=[],this.dtOptions={}}var o,b,c;return o=n,(b=[{key:"ngOnInit",value:function(){this.getTransactions(),this.dtOptions={pagingType:"full_numbers",pageLength:5,processing:!0}}},{key:"getTransactions",value:function(){var t=this;this.commonService.getTransactions().subscribe(function(e){t.transactions=e,a(function(){a("table").DataTable()})},function(e){return t.errorMessage=e})}},{key:"deleteModal",value:function(t,e){this.id=e.id,this.modalRef=this.modalService.show(t,{class:"modal-sm modal-dialog-centered"})}},{key:"deleteReport",value:function(){var t=this;this.transactions=this.transactions.filter(function(e){return e.id!==t.id}),this.modalRef.hide()}},{key:"btnColor",value:function(){document.getElementById("btn-yes").style.backgroundColor="#00d0f1",document.getElementById("btn-yes").style.border="1px solid #00d0f1",document.getElementById("btn-yes").style.color="#fff",document.getElementById("btn-no").style.backgroundColor="#fff",document.getElementById("btn-no").style.border="1px solid #fff",document.getElementById("btn-no").style.color="#000"}},{key:"btnColorNo",value:function(){document.getElementById("btn-no").style.backgroundColor="#00d0f1",document.getElementById("btn-no").style.border="1px solid #00d0f1",document.getElementById("btn-no").style.color="#fff",document.getElementById("btn-yes").style.backgroundColor="#fff",document.getElementById("btn-yes").style.border="1px solid #fff",document.getElementById("btn-yes").style.color="#000"}}])&&e(o.prototype,b),c&&e(o,c),n}(),m.\u0275fac=function(t){return new(t||m)(l.Tb(d.a),l.Tb(s.a))},m.\u0275cmp=l.Nb({type:m,selectors:[["app-invoice-reports"]],decls:37,vars:2,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"datatable","table","table-hover","table-center","mb-0"],[1,"text-center"],[1,"text-right"],[4,"ngFor","ngForOf"],["delete",""],[1,"table-avatar"],[1,"avatar","avatar-sm","mr-2"],["alt","User Image",1,"avatar-img","rounded-circle",3,"src"],[1,"badge","badge-pill","bg-success","inv-badge"],[1,"actions"],["data-toggle","modal",1,"btn","btn-sm","bg-danger-light",3,"click"],[1,"fe","fe-trash"],[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","text-center"],[2,"margin-top","25px"],["type","button","id","btn-yes",1,"btn","btn-default",3,"mouseover","click"],["type","button","id","btn-no",1,"btn","btn-primary",3,"mouseover"]],template:function(t,e){1&t&&(l.Zb(0,"div",0),l.Zb(1,"div",1),l.Zb(2,"div",2),l.Zb(3,"div",3),l.Zb(4,"div",4),l.Zb(5,"h3",5),l.Mc(6,"Invoice Report"),l.Yb(),l.Zb(7,"ul",6),l.Zb(8,"li",7),l.Zb(9,"a",8),l.Mc(10,"Dashboard"),l.Yb(),l.Yb(),l.Zb(11,"li",9),l.Mc(12,"Invoice Report"),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Zb(13,"div",3),l.Zb(14,"div",4),l.Zb(15,"div",10),l.Zb(16,"div",11),l.Zb(17,"div",12),l.Zb(18,"table",13),l.Zb(19,"thead"),l.Zb(20,"tr"),l.Zb(21,"th"),l.Mc(22,"Invoice Number"),l.Yb(),l.Zb(23,"th"),l.Mc(24,"Patient ID"),l.Yb(),l.Zb(25,"th"),l.Mc(26,"Patient Name"),l.Yb(),l.Zb(27,"th"),l.Mc(28,"Total Amount"),l.Yb(),l.Zb(29,"th",14),l.Mc(30,"Status"),l.Yb(),l.Zb(31,"th",15),l.Mc(32,"Actions"),l.Yb(),l.Yb(),l.Yb(),l.Zb(33,"tbody"),l.Kc(34,u,22,7,"tr",16),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Yb(),l.Kc(35,f,13,0,"ng-template",null,17,l.Lc)),2&t&&(l.Gb(9),l.tc("routerLink",""),l.Gb(25),l.tc("ngForOf",e.transactions))},directives:[r.h,c.k],styles:[""]}),m)}],g=((y=function e(){t(this,e)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=l.Rb({type:y}),y.\u0275inj=l.Qb({imports:[[r.i.forChild(v)],r.i]}),y),h=((p=function e(){t(this,e)}).\u0275fac=function(t){return new(t||p)},p.\u0275mod=l.Rb({type:p}),p.\u0275inj=l.Qb({imports:[[c.b,g,i.a]]}),p)},njyG:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("fXoL"),b=n("ofXK"),c=function(){function t(){}var e;return e=t,t.forRoot=function(){return{ngModule:e}},t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.Rb({type:t}),t.\u0275inj=o.Qb({imports:[[b.b]]}),t}()}}])}();