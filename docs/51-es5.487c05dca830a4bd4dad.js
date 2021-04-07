!function(){function b(b,t){if(!(b instanceof t))throw new TypeError("Cannot call a class as a function")}function t(b,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(b,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"97H2":function(o,e,i){"use strict";i.r(e),i.d(e,"BasicInputsModule",function(){return Z});var n,l,c,r=i("ofXK"),p=i("tyNb"),a=i("fXoL"),d=[{path:"",component:(n=function(){function o(){b(this,o)}var e,i,n;return e=o,(i=[{key:"ngOnInit",value:function(){}}])&&t(e.prototype,i),n&&t(e,n),o}(),n.\u0275fac=function(b){return new(b||n)},n.\u0275cmp=a.Nb({type:n,selectors:[["app-basic-inputs"]],decls:138,vars:0,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"breadcrumb-item","active"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],["action","#"],[1,"form-group","row"],[1,"col-form-label","col-md-2"],[1,"col-md-10"],["type","text",1,"form-control"],["type","password",1,"form-control"],["type","text","disabled","disabled",1,"form-control"],["type","text","value","readonly","readonly","readonly",1,"form-control"],["type","text","placeholder","Placeholder",1,"form-control"],["type","file",1,"form-control"],[1,"form-control"],[1,"radio"],["type","radio","name","radio"],[1,"checkbox"],["type","checkbox","name","checkbox"],["rows","5","cols","5","placeholder","Enter text here",1,"form-control"],[1,"form-group","mb-0","row"],[1,"input-group"],[1,"input-group-prepend"],[1,"input-group-text"],[1,"input-group-append"],["type","button",1,"btn","btn-primary"],["type","text","placeholder",".form-control-lg",1,"form-control","form-control-lg"],["type","text","placeholder",".form-control",1,"form-control"],["type","text","placeholder",".form-control-sm",1,"form-control","form-control-sm"]],template:function(b,t){1&b&&(a.Zb(0,"div",0),a.Zb(1,"div",1),a.Zb(2,"div",2),a.Zb(3,"div",3),a.Zb(4,"div",4),a.Zb(5,"h3",5),a.Mc(6,"Basic Inputs"),a.Yb(),a.Zb(7,"ul",6),a.Zb(8,"li",7),a.Zb(9,"a"),a.Mc(10,"Dashboard"),a.Yb(),a.Yb(),a.Zb(11,"li",8),a.Mc(12,"Basic Inputs"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(13,"div",3),a.Zb(14,"div",9),a.Zb(15,"div",10),a.Zb(16,"div",11),a.Zb(17,"h4",12),a.Mc(18,"Basic Inputs"),a.Yb(),a.Yb(),a.Zb(19,"div",13),a.Zb(20,"form",14),a.Zb(21,"div",15),a.Zb(22,"label",16),a.Mc(23,"Text Input"),a.Yb(),a.Zb(24,"div",17),a.Ub(25,"input",18),a.Yb(),a.Yb(),a.Zb(26,"div",15),a.Zb(27,"label",16),a.Mc(28,"Password"),a.Yb(),a.Zb(29,"div",17),a.Ub(30,"input",19),a.Yb(),a.Yb(),a.Zb(31,"div",15),a.Zb(32,"label",16),a.Mc(33,"Disabled Input"),a.Yb(),a.Zb(34,"div",17),a.Ub(35,"input",20),a.Yb(),a.Yb(),a.Zb(36,"div",15),a.Zb(37,"label",16),a.Mc(38,"Readonly Input"),a.Yb(),a.Zb(39,"div",17),a.Ub(40,"input",21),a.Yb(),a.Yb(),a.Zb(41,"div",15),a.Zb(42,"label",16),a.Mc(43,"Placeholder"),a.Yb(),a.Zb(44,"div",17),a.Ub(45,"input",22),a.Yb(),a.Yb(),a.Zb(46,"div",15),a.Zb(47,"label",16),a.Mc(48,"File Input"),a.Yb(),a.Zb(49,"div",17),a.Ub(50,"input",23),a.Yb(),a.Yb(),a.Zb(51,"div",15),a.Zb(52,"label",16),a.Mc(53,"Default Select"),a.Yb(),a.Zb(54,"div",17),a.Zb(55,"select",24),a.Zb(56,"option"),a.Mc(57,"-- Select --"),a.Yb(),a.Zb(58,"option"),a.Mc(59,"Option 1"),a.Yb(),a.Zb(60,"option"),a.Mc(61,"Option 2"),a.Yb(),a.Zb(62,"option"),a.Mc(63,"Option 3"),a.Yb(),a.Zb(64,"option"),a.Mc(65,"Option 4"),a.Yb(),a.Zb(66,"option"),a.Mc(67,"Option 5"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(68,"div",15),a.Zb(69,"label",16),a.Mc(70,"Radio"),a.Yb(),a.Zb(71,"div",17),a.Zb(72,"div",25),a.Zb(73,"label"),a.Ub(74,"input",26),a.Mc(75," Option 1 "),a.Yb(),a.Yb(),a.Zb(76,"div",25),a.Zb(77,"label"),a.Ub(78,"input",26),a.Mc(79," Option 2 "),a.Yb(),a.Yb(),a.Zb(80,"div",25),a.Zb(81,"label"),a.Ub(82,"input",26),a.Mc(83," Option 3 "),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(84,"div",15),a.Zb(85,"label",16),a.Mc(86,"Checkbox"),a.Yb(),a.Zb(87,"div",17),a.Zb(88,"div",27),a.Zb(89,"label"),a.Ub(90,"input",28),a.Mc(91," Option 1 "),a.Yb(),a.Yb(),a.Zb(92,"div",27),a.Zb(93,"label"),a.Ub(94,"input",28),a.Mc(95," Option 2 "),a.Yb(),a.Yb(),a.Zb(96,"div",27),a.Zb(97,"label"),a.Ub(98,"input",28),a.Mc(99," Option 3 "),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(100,"div",15),a.Zb(101,"label",16),a.Mc(102,"Textarea"),a.Yb(),a.Zb(103,"div",17),a.Ub(104,"textarea",29),a.Yb(),a.Yb(),a.Zb(105,"div",30),a.Zb(106,"label",16),a.Mc(107,"Input Addons"),a.Yb(),a.Zb(108,"div",17),a.Zb(109,"div",31),a.Zb(110,"div",32),a.Zb(111,"span",33),a.Mc(112,"$"),a.Yb(),a.Yb(),a.Ub(113,"input",18),a.Zb(114,"div",34),a.Zb(115,"button",35),a.Mc(116,"Button"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(117,"div",10),a.Zb(118,"div",11),a.Zb(119,"h4",12),a.Mc(120,"Input Sizes"),a.Yb(),a.Yb(),a.Zb(121,"div",13),a.Zb(122,"form",14),a.Zb(123,"div",15),a.Zb(124,"label",16),a.Mc(125,"Large Input"),a.Yb(),a.Zb(126,"div",17),a.Ub(127,"input",36),a.Yb(),a.Yb(),a.Zb(128,"div",15),a.Zb(129,"label",16),a.Mc(130,"Default Input"),a.Yb(),a.Zb(131,"div",17),a.Ub(132,"input",37),a.Yb(),a.Yb(),a.Zb(133,"div",30),a.Zb(134,"label",16),a.Mc(135,"Small Input"),a.Yb(),a.Zb(136,"div",17),a.Ub(137,"input",38),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb())},styles:[""]}),n)}],Y=((c=function t(){b(this,t)}).\u0275fac=function(b){return new(b||c)},c.\u0275mod=a.Rb({type:c}),c.\u0275inj=a.Qb({imports:[[p.i.forChild(d)],p.i]}),c),Z=((l=function t(){b(this,t)}).\u0275fac=function(b){return new(b||l)},l.\u0275mod=a.Rb({type:l}),l.\u0275inj=a.Qb({imports:[[r.b,Y]]}),l)}}])}();