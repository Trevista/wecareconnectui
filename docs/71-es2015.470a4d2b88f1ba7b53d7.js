(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{C6JL:function(b,a,t){"use strict";t.r(a),t.d(a,"ScheduletimingModule",function(){return c});var e=t("ofXK"),i=t("tyNb"),d=t("fXoL"),l=t("eSIH");const o=[{path:"",component:(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(a){return new(a||b)},b.\u0275cmp=d.Nb({type:b,selectors:[["app-scheduletiming"]],decls:129,vars:0,consts:[[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"card-title"],[1,"profile-box"],[1,"col-lg-4"],[1,"form-group"],["width","100%"],["selected","selected"],[1,"col-md-12"],[1,"card","schedule-widget","mb-0"],[1,"schedule-header"],[1,"schedule-nav"],[1,"nav","nav-tabs","nav-justified"],[1,"nav-item"],["data-toggle","tab","href","#slot_sunday",1,"nav-link"],["data-toggle","tab","href","#slot_monday",1,"nav-link","active"],["data-toggle","tab","href","#slot_tuesday",1,"nav-link"],["data-toggle","tab","href","#slot_wednesday",1,"nav-link"],["data-toggle","tab","href","#slot_thursday",1,"nav-link"],["data-toggle","tab","href","#slot_friday",1,"nav-link"],["data-toggle","tab","href","#slot_saturday",1,"nav-link"],[1,"tab-content","schedule-cont"],["id","slot_sunday",1,"tab-pane","fade"],[1,"card-title","d-flex","justify-content-between"],["data-toggle","modal","href","#add_time_slot",1,"edit-link"],[1,"fa","fa-plus-circle"],[1,"text-muted","mb-0"],["id","slot_monday",1,"tab-pane","fade","show","active"],["data-toggle","modal","href","#edit_time_slot",1,"edit-link"],[1,"fa","fa-edit","mr-1"],[1,"doc-times"],[1,"doc-slot-list"],["href","javascript:void(0)",1,"delete_schedule"],[1,"fa","fa-times"],["id","slot_tuesday",1,"tab-pane","fade"],["id","slot_wednesday",1,"tab-pane","fade"],["id","slot_thursday",1,"tab-pane","fade"],["id","slot_friday",1,"tab-pane","fade"],["id","slot_saturday",1,"tab-pane","fade"]],template:function(b,a){1&b&&(d.Zb(0,"div",0),d.Zb(1,"div",1),d.Zb(2,"div",2),d.Zb(3,"div",3),d.Zb(4,"h4",4),d.Mc(5,"Schedule Timings"),d.Yb(),d.Zb(6,"div",5),d.Zb(7,"div",0),d.Zb(8,"div",6),d.Zb(9,"div",7),d.Zb(10,"label"),d.Mc(11,"Timing Slot Duration"),d.Yb(),d.Zb(12,"ng-select2",8),d.Zb(13,"option"),d.Mc(14,"-"),d.Yb(),d.Zb(15,"option"),d.Mc(16,"15 mins"),d.Yb(),d.Zb(17,"option",9),d.Mc(18,"30 mins"),d.Yb(),d.Zb(19,"option"),d.Mc(20,"45 mins"),d.Yb(),d.Zb(21,"option"),d.Mc(22,"1 Hour"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(23,"div",0),d.Zb(24,"div",10),d.Zb(25,"div",11),d.Zb(26,"div",12),d.Zb(27,"div",13),d.Zb(28,"ul",14),d.Zb(29,"li",15),d.Zb(30,"a",16),d.Mc(31,"Sunday"),d.Yb(),d.Yb(),d.Zb(32,"li",15),d.Zb(33,"a",17),d.Mc(34,"Monday"),d.Yb(),d.Yb(),d.Zb(35,"li",15),d.Zb(36,"a",18),d.Mc(37,"Tuesday"),d.Yb(),d.Yb(),d.Zb(38,"li",15),d.Zb(39,"a",19),d.Mc(40,"Wednesday"),d.Yb(),d.Yb(),d.Zb(41,"li",15),d.Zb(42,"a",20),d.Mc(43,"Thursday"),d.Yb(),d.Yb(),d.Zb(44,"li",15),d.Zb(45,"a",21),d.Mc(46,"Friday"),d.Yb(),d.Yb(),d.Zb(47,"li",15),d.Zb(48,"a",22),d.Mc(49,"Saturday"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(50,"div",23),d.Zb(51,"div",24),d.Zb(52,"h4",25),d.Zb(53,"span"),d.Mc(54,"Time Slots"),d.Yb(),d.Zb(55,"a",26),d.Ub(56,"i",27),d.Mc(57," Add Slot"),d.Yb(),d.Yb(),d.Zb(58,"p",28),d.Mc(59,"Not Available"),d.Yb(),d.Yb(),d.Zb(60,"div",29),d.Zb(61,"h4",25),d.Zb(62,"span"),d.Mc(63,"Time Slots"),d.Yb(),d.Zb(64,"a",30),d.Ub(65,"i",31),d.Mc(66,"Edit"),d.Yb(),d.Yb(),d.Zb(67,"div",32),d.Zb(68,"div",33),d.Mc(69," 8:00 pm - 11:30 pm "),d.Zb(70,"a",34),d.Ub(71,"i",35),d.Yb(),d.Yb(),d.Zb(72,"div",33),d.Mc(73," 11:30 pm - 1:30 pm "),d.Zb(74,"a",34),d.Ub(75,"i",35),d.Yb(),d.Yb(),d.Zb(76,"div",33),d.Mc(77," 3:00 pm - 5:00 pm "),d.Zb(78,"a",34),d.Ub(79,"i",35),d.Yb(),d.Yb(),d.Zb(80,"div",33),d.Mc(81," 6:00 pm - 11:00 pm "),d.Zb(82,"a",34),d.Ub(83,"i",35),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(84,"div",36),d.Zb(85,"h4",25),d.Zb(86,"span"),d.Mc(87,"Time Slots"),d.Yb(),d.Zb(88,"a",26),d.Ub(89,"i",27),d.Mc(90," Add Slot"),d.Yb(),d.Yb(),d.Zb(91,"p",28),d.Mc(92,"Not Available"),d.Yb(),d.Yb(),d.Zb(93,"div",37),d.Zb(94,"h4",25),d.Zb(95,"span"),d.Mc(96,"Time Slots"),d.Yb(),d.Zb(97,"a",26),d.Ub(98,"i",27),d.Mc(99," Add Slot"),d.Yb(),d.Yb(),d.Zb(100,"p",28),d.Mc(101,"Not Available"),d.Yb(),d.Yb(),d.Zb(102,"div",38),d.Zb(103,"h4",25),d.Zb(104,"span"),d.Mc(105,"Time Slots"),d.Yb(),d.Zb(106,"a",26),d.Ub(107,"i",27),d.Mc(108," Add Slot"),d.Yb(),d.Yb(),d.Zb(109,"p",28),d.Mc(110,"Not Available"),d.Yb(),d.Yb(),d.Zb(111,"div",39),d.Zb(112,"h4",25),d.Zb(113,"span"),d.Mc(114,"Time Slots"),d.Yb(),d.Zb(115,"a",26),d.Ub(116,"i",27),d.Mc(117," Add Slot"),d.Yb(),d.Yb(),d.Zb(118,"p",28),d.Mc(119,"Not Available"),d.Yb(),d.Yb(),d.Zb(120,"div",40),d.Zb(121,"h4",25),d.Zb(122,"span"),d.Mc(123,"Time Slots"),d.Yb(),d.Zb(124,"a",26),d.Ub(125,"i",27),d.Mc(126," Add Slot"),d.Yb(),d.Yb(),d.Zb(127,"p",28),d.Mc(128,"Not Available"),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb())},directives:[l.a],styles:[""]}),b})()}];let n=(()=>{class b{}return b.\u0275fac=function(a){return new(a||b)},b.\u0275mod=d.Rb({type:b}),b.\u0275inj=d.Qb({imports:[[i.i.forChild(o)],i.i]}),b})(),c=(()=>{class b{}return b.\u0275fac=function(a){return new(a||b)},b.\u0275mod=d.Rb({type:b}),b.\u0275inj=d.Qb({imports:[[l.b,e.b,n]]}),b})()}}]);