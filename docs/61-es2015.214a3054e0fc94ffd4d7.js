(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"U4+L":function(b,i,t){"use strict";t.r(i),t.d(i,"BlogModule",function(){return d});var c=t("ofXK"),a=t("tyNb"),e=t("fXoL"),r=t("1+kh");const o=function(b){return{id:b}};function l(b,i){if(1&b&&(e.Zb(0,"div",36),e.Zb(1,"div",37),e.Zb(2,"a",38),e.Ub(3,"img",39),e.Yb(),e.Yb(),e.Zb(4,"h3",40),e.Zb(5,"a",38),e.Mc(6),e.Yb(),e.Yb(),e.Zb(7,"div",41),e.Zb(8,"div",42),e.Zb(9,"ul"),e.Zb(10,"li"),e.Zb(11,"div",43),e.Zb(12,"a",7),e.Ub(13,"img",44),e.Zb(14,"span"),e.Mc(15),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Zb(16,"li"),e.Ub(17,"i",45),e.Mc(18),e.nc(19,"date"),e.Yb(),e.Zb(20,"li"),e.Ub(21,"i",46),e.Mc(22),e.Yb(),e.Zb(23,"li"),e.Ub(24,"i",47),e.Mc(25),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Zb(26,"div",48),e.Zb(27,"p"),e.Mc(28),e.Yb(),e.Zb(29,"a",49),e.Mc(30,"Read More"),e.Yb(),e.Yb(),e.Yb()),2&b){const b=i.$implicit;e.Gb(2),e.tc("routerLink","/blog-details")("queryParams",e.wc(18,o,b.id)),e.Gb(1),e.uc("src",b.img,e.Fc),e.Gb(2),e.tc("routerLink","/blog-details")("queryParams",e.wc(20,o,b.id)),e.Gb(1),e.Nc(b.title),e.Gb(6),e.tc("routerLink","/patients/doctor-profile"),e.Gb(1),e.uc("src",b.doctor_pic,e.Fc),e.Gb(2),e.Nc(b.doctor_name),e.Gb(3),e.Nc(e.pc(19,15,b.createdAt,"d MMM yyyy")),e.Gb(4),e.Oc("",b.comments," Comments"),e.Gb(3),e.Nc(b.type),e.Gb(3),e.Nc(b.description),e.Gb(1),e.tc("routerLink","/blog-details")("queryParams",e.wc(22,o,b.id))}}function n(b,i){1&b&&(e.Zb(0,"div",12),e.Zb(1,"div",50),e.Zb(2,"div",51),e.Zb(3,"nav"),e.Zb(4,"ul",52),e.Zb(5,"li",53),e.Zb(6,"a",54),e.Ub(7,"i",55),e.Yb(),e.Yb(),e.Zb(8,"li",56),e.Zb(9,"a",57),e.Mc(10,"1"),e.Yb(),e.Yb(),e.Zb(11,"li",58),e.Zb(12,"a",57),e.Mc(13,"2 "),e.Zb(14,"span",59),e.Mc(15,"(current)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(16,"li",56),e.Zb(17,"a",57),e.Mc(18,"3"),e.Yb(),e.Yb(),e.Zb(19,"li",56),e.Zb(20,"a",57),e.Ub(21,"i",60),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb())}function s(b,i){if(1&b&&(e.Zb(0,"li"),e.Zb(1,"div",61),e.Zb(2,"a",38),e.Ub(3,"img",62),e.Yb(),e.Yb(),e.Zb(4,"div",63),e.Zb(5,"h4"),e.Zb(6,"a",38),e.Mc(7),e.Yb(),e.Yb(),e.Zb(8,"p"),e.Mc(9),e.nc(10,"date"),e.Yb(),e.Yb(),e.Yb()),2&b){const b=i.$implicit;e.Gb(2),e.tc("routerLink","/blog-details")("queryParams",e.wc(10,o,b.id)),e.Gb(1),e.tc("src",b.img,e.Fc),e.Gb(3),e.tc("routerLink","/blog-details")("queryParams",e.wc(12,o,b.id)),e.Gb(1),e.Nc(b.title),e.Gb(2),e.Oc(" ",e.pc(10,7,b.createdAt,"dd MMM yyyy"),"")}}const Y=[{path:"",component:(()=>{class b{constructor(b){this.commonService=b,this.blogs=[],this.firstBlock=[],this.blog=!1}ngOnInit(){this.getBlogs(),this.getBlogdetails(),window.scrollTo(0,0)}getBlogs(){this.commonService.getBlogs().subscribe(b=>{this.blogs=b})}getBlogdetails(){this.commonService.getBlogsDetails(1).subscribe(b=>{this.firstBlock=b})}}return b.\u0275fac=function(i){return new(i||b)(e.Tb(r.a))},b.\u0275cmp=e.Nb({type:b,selectors:[["app-blog"]],decls:139,vars:12,consts:[[1,"breadcrumb-bar"],[1,"container-fluid"],[1,"row","align-items-center"],[1,"col-md-12","col-12"],["aria-label","breadcrumb",1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"breadcrumb-title"],[1,"content"],[1,"container"],[1,"row"],[1,"col-lg-8","col-md-12"],["class","blog",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"col-lg-4","col-md-12","sidebar-right","theiaStickySidebar"],[1,"card","search-widget"],[1,"card-body"],[1,"search-form"],[1,"input-group"],["type","text","placeholder","Search...",1,"form-control"],[1,"input-group-append"],["type","submit",1,"btn","btn-primary"],[1,"fa","fa-search"],[1,"card","post-widget"],[1,"card-header"],[1,"card-title"],[1,"latest-posts"],[4,"ngFor","ngForOf"],[1,"card","category-widget"],[1,"categories"],["href","javascript:void(0)"],[1,"card","tags-widget"],[1,"tags"],["href","javascript:void(0)",1,"tag"],[1,"blog"],[1,"blog-image"],[3,"routerLink","queryParams"],["alt","Post Image",1,"img-fluid",3,"src"],[1,"blog-title"],[1,"blog-info","clearfix"],[1,"post-left"],[1,"post-author"],["alt","Post Author",3,"src"],[1,"far","fa-clock"],[1,"far","fa-comments"],[1,"fa","fa-tags"],[1,"blog-content"],[1,"read-more",3,"routerLink","queryParams"],[1,"col-md-12"],[1,"blog-pagination"],[1,"pagination","justify-content-center"],[1,"page-item","disabled"],["tabindex","-1",1,"page-link"],[1,"fas","fa-angle-double-left"],[1,"page-item"],[1,"page-link"],[1,"page-item","active"],[1,"sr-only"],[1,"fas","fa-angle-double-right"],[1,"post-thumb"],["alt","",1,"img-fluid",3,"src"],[1,"post-info"]],template:function(b,i){1&b&&(e.Zb(0,"div",0),e.Zb(1,"div",1),e.Zb(2,"div",2),e.Zb(3,"div",3),e.Zb(4,"nav",4),e.Zb(5,"ol",5),e.Zb(6,"li",6),e.Zb(7,"a",7),e.Mc(8,"Home"),e.Yb(),e.Yb(),e.Zb(9,"li",8),e.Mc(10,"Blog"),e.Yb(),e.Yb(),e.Yb(),e.Zb(11,"h2",9),e.Mc(12,"Blog List"),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Zb(13,"div",10),e.Zb(14,"div",11),e.Zb(15,"div",12),e.Zb(16,"div",13),e.Kc(17,l,31,24,"div",14),e.nc(18,"slice"),e.Kc(19,n,22,0,"div",15),e.Yb(),e.Zb(20,"div",16),e.Zb(21,"div",17),e.Zb(22,"div",18),e.Zb(23,"form",19),e.Zb(24,"div",20),e.Ub(25,"input",21),e.Zb(26,"div",22),e.Zb(27,"button",23),e.Ub(28,"i",24),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Zb(29,"div",25),e.Zb(30,"div",26),e.Zb(31,"h4",27),e.Mc(32,"Latest Posts"),e.Yb(),e.Yb(),e.Zb(33,"div",18),e.Zb(34,"ul",28),e.Kc(35,s,11,14,"li",29),e.nc(36,"slice"),e.Yb(),e.Yb(),e.Yb(),e.Zb(37,"div",30),e.Zb(38,"div",26),e.Zb(39,"h4",27),e.Mc(40,"Blog Categories"),e.Yb(),e.Yb(),e.Zb(41,"div",18),e.Zb(42,"ul",31),e.Zb(43,"li"),e.Zb(44,"a",32),e.Mc(45,"Cardiology "),e.Zb(46,"span"),e.Mc(47,"(62)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(48,"li"),e.Zb(49,"a",32),e.Mc(50,"Health Care "),e.Zb(51,"span"),e.Mc(52,"(27)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(53,"li"),e.Zb(54,"a",32),e.Mc(55,"Nutritions "),e.Zb(56,"span"),e.Mc(57,"(41)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(58,"li"),e.Zb(59,"a",32),e.Mc(60,"Health Tips "),e.Zb(61,"span"),e.Mc(62,"(16)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(63,"li"),e.Zb(64,"a",32),e.Mc(65,"Medical Research "),e.Zb(66,"span"),e.Mc(67,"(55)"),e.Yb(),e.Yb(),e.Yb(),e.Zb(68,"li"),e.Zb(69,"a",32),e.Mc(70,"Health Treatment "),e.Zb(71,"span"),e.Mc(72,"(07)"),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Zb(73,"div",33),e.Zb(74,"div",26),e.Zb(75,"h4",27),e.Mc(76,"Tags"),e.Yb(),e.Yb(),e.Zb(77,"div",18),e.Zb(78,"ul",34),e.Zb(79,"li"),e.Zb(80,"a",35),e.Mc(81,"Children"),e.Yb(),e.Yb(),e.Zb(82,"li"),e.Zb(83,"a",35),e.Mc(84,"Disease"),e.Yb(),e.Yb(),e.Zb(85,"li"),e.Zb(86,"a",35),e.Mc(87,"Appointment"),e.Yb(),e.Yb(),e.Zb(88,"li"),e.Zb(89,"a",35),e.Mc(90,"Booking"),e.Yb(),e.Yb(),e.Zb(91,"li"),e.Zb(92,"a",35),e.Mc(93,"Kids"),e.Yb(),e.Yb(),e.Zb(94,"li"),e.Zb(95,"a",35),e.Mc(96,"Health"),e.Yb(),e.Yb(),e.Zb(97,"li"),e.Zb(98,"a",35),e.Mc(99,"Family"),e.Yb(),e.Yb(),e.Zb(100,"li"),e.Zb(101,"a",35),e.Mc(102,"Tips"),e.Yb(),e.Yb(),e.Zb(103,"li"),e.Zb(104,"a",35),e.Mc(105,"Shedule"),e.Yb(),e.Yb(),e.Zb(106,"li"),e.Zb(107,"a",35),e.Mc(108,"Treatment"),e.Yb(),e.Yb(),e.Zb(109,"li"),e.Zb(110,"a",35),e.Mc(111,"Dr"),e.Yb(),e.Yb(),e.Zb(112,"li"),e.Zb(113,"a",35),e.Mc(114,"Clinic"),e.Yb(),e.Yb(),e.Zb(115,"li"),e.Zb(116,"a",35),e.Mc(117,"Online"),e.Yb(),e.Yb(),e.Zb(118,"li"),e.Zb(119,"a",35),e.Mc(120,"Health Care"),e.Yb(),e.Yb(),e.Zb(121,"li"),e.Zb(122,"a",35),e.Mc(123,"Consulting"),e.Yb(),e.Yb(),e.Zb(124,"li"),e.Zb(125,"a",35),e.Mc(126,"Doctors"),e.Yb(),e.Yb(),e.Zb(127,"li"),e.Zb(128,"a",35),e.Mc(129,"Neurology"),e.Yb(),e.Yb(),e.Zb(130,"li"),e.Zb(131,"a",35),e.Mc(132,"Dentists"),e.Yb(),e.Yb(),e.Zb(133,"li"),e.Zb(134,"a",35),e.Mc(135,"Specialist"),e.Yb(),e.Yb(),e.Zb(136,"li"),e.Zb(137,"a",35),e.Mc(138,"Doccure"),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb(),e.Yb()),2&b&&(e.Gb(7),e.tc("routerLink",""),e.Gb(10),e.tc("ngForOf",e.qc(18,4,i.blogs,0,4)),e.Gb(2),e.tc("ngIf",i.blog),e.Gb(16),e.tc("ngForOf",e.qc(36,8,i.blogs,0,5)))},directives:[a.h,c.k,c.l],pipes:[c.t,c.d],styles:[".breadcrumb-bar[_ngcontent-%COMP%]{background-color:#15558d;padding:15px 0}"]}),b})()}];let Z=(()=>{class b{}return b.\u0275fac=function(i){return new(i||b)},b.\u0275mod=e.Rb({type:b}),b.\u0275inj=e.Qb({imports:[[a.i.forChild(Y)],a.i]}),b})(),d=(()=>{class b{}return b.\u0275fac=function(i){return new(i||b)},b.\u0275mod=e.Rb({type:b}),b.\u0275inj=e.Qb({imports:[[c.b,Z]]}),b})()}}]);