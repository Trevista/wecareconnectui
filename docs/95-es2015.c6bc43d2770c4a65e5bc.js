(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{LPIf:function(b,e,d){"use strict";d.r(e),d.d(e,"DashboardModule",function(){return c});var r=d("ofXK"),i=d("tyNb"),t=d("fXoL");const a=[{path:"",component:(()=>{class b{constructor(){}ngOnInit(){Morris.Area({element:"morrisArea",data:[{y:"2013",a:60},{y:"2014",a:100},{y:"2015",a:240},{y:"2016",a:120},{y:"2017",a:80},{y:"2018",a:100},{y:"2019",a:300}],xkey:"y",ykeys:["a"],labels:["Revenue"],lineColors:["#1b5a90"],lineWidth:2,fillOpacity:.5,gridTextSize:10,hideHover:"auto",resize:!0,redraw:!0}),Morris.Line({element:"morrisLine",data:[{y:"2015",a:100,b:30},{y:"2016",a:20,b:60},{y:"2017",a:90,b:120},{y:"2018",a:50,b:80},{y:"2019",a:120,b:150}],xkey:"y",ykeys:["a","b"],labels:["Doctors","Patients"],lineColors:["#1b5a90","#ff9d00"],lineWidth:1,gridTextSize:10,hideHover:"auto",resize:!0,redraw:!0})}}return b.\u0275fac=function(e){return new(e||b)},b.\u0275cmp=t.Nb({type:b,selectors:[["app-dashboard"]],decls:181,vars:0,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card"],[1,"card-body"],[1,"dash-widget-header"],[1,"dash-widget-icon","text-primary","border-primary"],[1,"fe","fe-money"],[1,"dash-count"],[1,"dash-widget-info"],[1,"text-muted"],[1,"progress","progress-sm"],[1,"progress-bar","bg-primary","w-50"],[1,"dash-widget-icon","text-success"],[1,"fe","fe-credit-card"],[1,"progress-bar","bg-success","w-50"],[1,"dash-widget-icon","text-danger","border-danger"],[1,"fe","fe-folder"],[1,"progress-bar","bg-danger","w-50"],[1,"dash-widget-icon","text-warning","border-warning"],[1,"fe","fe-users"],[1,"progress-bar","bg-warning","w-50"],[1,"col-md-12","col-lg-6"],[1,"card","card-chart"],[1,"card-header"],[1,"card-title"],["id","morrisArea"],["id","morrisLine"],[1,"col-md-12"],[1,"card","card-table"],[1,"table-responsive"],[1,"table","table-hover","table-center","mb-0"],[1,"text-right"],[1,"table-avatar"]],template:function(b,e){1&b&&(t.Zb(0,"div",0),t.Zb(1,"div",1),t.Zb(2,"div",2),t.Zb(3,"div",3),t.Zb(4,"div",4),t.Zb(5,"h3",5),t.Mc(6,"Welcome Admin!"),t.Yb(),t.Zb(7,"ul",6),t.Zb(8,"li",7),t.Mc(9,"Dashboard"),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(10,"div",3),t.Zb(11,"div",8),t.Zb(12,"div",9),t.Zb(13,"div",10),t.Zb(14,"div",11),t.Zb(15,"span",12),t.Ub(16,"i",13),t.Yb(),t.Zb(17,"div",14),t.Zb(18,"h3"),t.Mc(19,"$50.00"),t.Yb(),t.Yb(),t.Yb(),t.Zb(20,"div",15),t.Zb(21,"h6",16),t.Mc(22,"Sales Today"),t.Yb(),t.Zb(23,"div",17),t.Ub(24,"div",18),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(25,"div",8),t.Zb(26,"div",9),t.Zb(27,"div",10),t.Zb(28,"div",11),t.Zb(29,"span",19),t.Ub(30,"i",20),t.Yb(),t.Zb(31,"div",14),t.Zb(32,"h3"),t.Mc(33,"$5.22"),t.Yb(),t.Yb(),t.Yb(),t.Zb(34,"div",15),t.Zb(35,"h6",16),t.Mc(36,"Expense Today"),t.Yb(),t.Zb(37,"div",17),t.Ub(38,"div",21),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(39,"div",8),t.Zb(40,"div",9),t.Zb(41,"div",10),t.Zb(42,"div",11),t.Zb(43,"span",22),t.Ub(44,"i",23),t.Yb(),t.Zb(45,"div",14),t.Zb(46,"h3"),t.Mc(47,"485"),t.Yb(),t.Yb(),t.Yb(),t.Zb(48,"div",15),t.Zb(49,"h6",16),t.Mc(50,"Medicine"),t.Yb(),t.Zb(51,"div",17),t.Ub(52,"div",24),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(53,"div",8),t.Zb(54,"div",9),t.Zb(55,"div",10),t.Zb(56,"div",11),t.Zb(57,"span",25),t.Ub(58,"i",26),t.Yb(),t.Zb(59,"div",14),t.Zb(60,"h3"),t.Mc(61,"50"),t.Yb(),t.Yb(),t.Yb(),t.Zb(62,"div",15),t.Zb(63,"h6",16),t.Mc(64,"Staff"),t.Yb(),t.Zb(65,"div",17),t.Ub(66,"div",27),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(67,"div",3),t.Zb(68,"div",28),t.Zb(69,"div",29),t.Zb(70,"div",30),t.Zb(71,"h4",31),t.Mc(72,"Revenue"),t.Yb(),t.Yb(),t.Zb(73,"div",10),t.Ub(74,"div",32),t.Yb(),t.Yb(),t.Yb(),t.Zb(75,"div",28),t.Zb(76,"div",29),t.Zb(77,"div",30),t.Zb(78,"h4",31),t.Mc(79,"Status"),t.Yb(),t.Yb(),t.Zb(80,"div",10),t.Ub(81,"div",33),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Zb(82,"div",3),t.Zb(83,"div",34),t.Zb(84,"div",35),t.Zb(85,"div",30),t.Zb(86,"h4",31),t.Mc(87,"Latest Customers"),t.Yb(),t.Yb(),t.Zb(88,"div",10),t.Zb(89,"div",36),t.Zb(90,"table",37),t.Zb(91,"thead"),t.Zb(92,"tr"),t.Zb(93,"th"),t.Mc(94,"#"),t.Yb(),t.Zb(95,"th"),t.Mc(96,"Name"),t.Yb(),t.Zb(97,"th"),t.Mc(98,"Address"),t.Yb(),t.Zb(99,"th"),t.Mc(100,"Telephone"),t.Yb(),t.Zb(101,"th"),t.Mc(102,"Email"),t.Yb(),t.Zb(103,"th",38),t.Mc(104,"Date added"),t.Yb(),t.Yb(),t.Yb(),t.Zb(105,"tbody"),t.Zb(106,"tr"),t.Zb(107,"td"),t.Mc(108,"01"),t.Yb(),t.Zb(109,"td"),t.Zb(110,"h2",39),t.Mc(111," Ruby Perrin "),t.Yb(),t.Yb(),t.Zb(112,"td"),t.Mc(113,"takrakka"),t.Yb(),t.Zb(114,"td"),t.Zb(115,"h2",39),t.Mc(116," +54 1245463984 "),t.Yb(),t.Yb(),t.Zb(117,"td"),t.Mc(118,"Rubyperring@yahoo.mail"),t.Yb(),t.Zb(119,"td",38),t.Mc(120,"April 14, 2020"),t.Yb(),t.Yb(),t.Zb(121,"tr"),t.Zb(122,"td"),t.Mc(123,"02"),t.Yb(),t.Zb(124,"td"),t.Zb(125,"h2",39),t.Mc(126," Darren Elder "),t.Yb(),t.Yb(),t.Zb(127,"td"),t.Mc(128,"339, Terromont Street"),t.Yb(),t.Zb(129,"td"),t.Zb(130,"h2",39),t.Mc(131," +54 874654536 "),t.Yb(),t.Yb(),t.Zb(132,"td"),t.Mc(133,"darrenelder@gmail.com"),t.Yb(),t.Zb(134,"td",38),t.Mc(135,"April 15, 2020"),t.Yb(),t.Yb(),t.Zb(136,"tr"),t.Zb(137,"td"),t.Mc(138,"03"),t.Yb(),t.Zb(139,"td"),t.Zb(140,"h2",39),t.Mc(141," Deborah Angel "),t.Yb(),t.Yb(),t.Zb(142,"td"),t.Mc(143,"takrakka"),t.Yb(),t.Zb(144,"td"),t.Zb(145,"h2",39),t.Mc(146," +54 3647787889 "),t.Yb(),t.Yb(),t.Zb(147,"td"),t.Mc(148,"deborahangel@yahoo.com"),t.Yb(),t.Zb(149,"td",38),t.Mc(150,"April 16, 2020"),t.Yb(),t.Yb(),t.Zb(151,"tr"),t.Zb(152,"td"),t.Mc(153,"04"),t.Yb(),t.Zb(154,"td"),t.Zb(155,"h2",39),t.Mc(156," Ruby Perrin "),t.Yb(),t.Yb(),t.Zb(157,"td"),t.Mc(158,"2061 Angus Road"),t.Yb(),t.Zb(159,"td"),t.Zb(160,"h2",39),t.Mc(161," +54 1245463984 "),t.Yb(),t.Yb(),t.Zb(162,"td"),t.Mc(163,"Rubyperring@yahoo.mail"),t.Yb(),t.Zb(164,"td",38),t.Mc(165,"April 17, 2020"),t.Yb(),t.Yb(),t.Zb(166,"tr"),t.Zb(167,"td"),t.Mc(168,"05"),t.Yb(),t.Zb(169,"td"),t.Zb(170,"h2",39),t.Mc(171," Krystyna Rodriquez "),t.Yb(),t.Yb(),t.Zb(172,"td"),t.Mc(173,"takrakka"),t.Yb(),t.Zb(174,"td"),t.Zb(175,"h2",39),t.Mc(176," +54 8965722222 "),t.Yb(),t.Yb(),t.Zb(177,"td"),t.Mc(178,"krystynarodriquez@gmail.com"),t.Yb(),t.Zb(179,"td",38),t.Mc(180,"April 18, 2020"),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb(),t.Yb())},styles:[""]}),b})()}];let Y=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=t.Rb({type:b}),b.\u0275inj=t.Qb({imports:[[i.i.forChild(a)],i.i]}),b})();var Z=d("JgOp");let c=(()=>{class b{}return b.\u0275fac=function(e){return new(e||b)},b.\u0275mod=t.Rb({type:b}),b.\u0275inj=t.Qb({imports:[[r.b,Y,Z.ForgotPasswordModule]]}),b})()}}]);