(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{oKA5:function(b,t,e){"use strict";e.r(t),e.d(t,"CheckoutModule",function(){return d});var i=e("ofXK"),r=e("tyNb"),a=e("fXoL");const o=[{path:"",component:(()=>{class b{constructor(){}ngOnInit(){}}return b.\u0275fac=function(t){return new(t||b)},b.\u0275cmp=a.Nb({type:b,selectors:[["app-checkout"]],decls:160,vars:2,consts:[[1,"breadcrumb-bar"],[1,"container-fluid"],[1,"row","align-items-center"],[1,"col-md-12","col-12"],["aria-label","breadcrumb",1,"page-breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],["aria-current","page",1,"breadcrumb-item","active"],[1,"breadcrumb-title"],[1,"content"],[1,"container"],[1,"row"],[1,"col-md-6","col-lg-7"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"info-widget"],[1,"col-md-6","col-sm-12"],[1,"form-group","card-label"],["type","text",1,"form-control"],["type","email",1,"form-control"],[1,"exist-customer"],["href","javascript:void(0)"],[1,"terms-accept"],[1,"custom-checkbox"],["type","checkbox","id","terms_accept"],["for","terms_accept"],[1,"pl-0","ml-0","mb-2"],["rows","5","name","shipping",1,"form-control"],[1,"payment-widget"],[1,"payment-list"],[1,"payment-radio","credit-card-option"],["type","radio","name","radio","checked",""],[1,"checkmark"],[1,"col-md-6"],["for","card_name"],["id","card_name","type","text",1,"form-control"],["for","card_number"],["id","card_number","placeholder","1234  5678  9876  5432","type","text",1,"form-control"],[1,"col-md-4"],["for","expiry_month"],["id","expiry_month","placeholder","MM","type","text",1,"form-control"],["for","expiry_year"],["id","expiry_year","placeholder","YY","type","text",1,"form-control"],["for","cvv"],["id","cvv","type","text",1,"form-control"],[1,"payment-radio","paypal-option"],["type","radio","name","radio"],["type","checkbox","id","terms_accept1"],["for","terms_accept1"],[1,"submit-section","mt-4"],["type","button",1,"btn","btn-primary","submit-btn",3,"routerLink"],[1,"col-md-6","col-lg-5","theiaStickySidebar"],[1,"card","booking-card"],[1,"table-responsive"],[1,"table","table-center","mb-0"],[1,"text-right"],[1,"booking-summary","pt-5"],[1,"booking-item-wrap"],[1,"booking-date"],[1,"booking-fee"],[1,"booking-total"],[1,"booking-total-list"],[1,"total-cost"]],template:function(b,t){1&b&&(a.Zb(0,"div",0),a.Zb(1,"div",1),a.Zb(2,"div",2),a.Zb(3,"div",3),a.Zb(4,"nav",4),a.Zb(5,"ol",5),a.Zb(6,"li",6),a.Zb(7,"a",7),a.Mc(8,"Home"),a.Yb(),a.Yb(),a.Zb(9,"li",8),a.Mc(10,"Checkout"),a.Yb(),a.Yb(),a.Yb(),a.Zb(11,"h2",9),a.Mc(12,"Checkout"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(13,"div",10),a.Zb(14,"div",11),a.Zb(15,"div",12),a.Zb(16,"div",13),a.Zb(17,"div",14),a.Zb(18,"div",15),a.Zb(19,"h3",16),a.Mc(20,"Billing details"),a.Yb(),a.Yb(),a.Zb(21,"div",17),a.Zb(22,"form"),a.Zb(23,"div",18),a.Zb(24,"h4",16),a.Mc(25,"Personal Information"),a.Yb(),a.Zb(26,"div",12),a.Zb(27,"div",19),a.Zb(28,"div",20),a.Zb(29,"label"),a.Mc(30,"First Name"),a.Yb(),a.Ub(31,"input",21),a.Yb(),a.Yb(),a.Zb(32,"div",19),a.Zb(33,"div",20),a.Zb(34,"label"),a.Mc(35,"Last Name"),a.Yb(),a.Ub(36,"input",21),a.Yb(),a.Yb(),a.Zb(37,"div",19),a.Zb(38,"div",20),a.Zb(39,"label"),a.Mc(40,"Email"),a.Yb(),a.Ub(41,"input",22),a.Yb(),a.Yb(),a.Zb(42,"div",19),a.Zb(43,"div",20),a.Zb(44,"label"),a.Mc(45,"Phone"),a.Yb(),a.Ub(46,"input",21),a.Yb(),a.Yb(),a.Yb(),a.Zb(47,"div",23),a.Mc(48,"Existing Customer? "),a.Zb(49,"a",24),a.Mc(50,"Click here to login"),a.Yb(),a.Yb(),a.Yb(),a.Zb(51,"div",18),a.Zb(52,"h4",16),a.Mc(53,"Shipping Details"),a.Yb(),a.Zb(54,"div",25),a.Zb(55,"div",26),a.Ub(56,"input",27),a.Zb(57,"label",28),a.Mc(58,"Ship to a different address?"),a.Yb(),a.Yb(),a.Yb(),a.Zb(59,"div",20),a.Zb(60,"label",29),a.Mc(61,"Order notes (Optional)"),a.Yb(),a.Ub(62,"textarea",30),a.Yb(),a.Yb(),a.Zb(63,"div",31),a.Zb(64,"h4",16),a.Mc(65,"Payment Method"),a.Yb(),a.Zb(66,"div",32),a.Zb(67,"label",33),a.Ub(68,"input",34),a.Ub(69,"span",35),a.Mc(70," Credit card "),a.Yb(),a.Zb(71,"div",12),a.Zb(72,"div",36),a.Zb(73,"div",20),a.Zb(74,"label",37),a.Mc(75,"Name on Card"),a.Yb(),a.Ub(76,"input",38),a.Yb(),a.Yb(),a.Zb(77,"div",36),a.Zb(78,"div",20),a.Zb(79,"label",39),a.Mc(80,"Card Number"),a.Yb(),a.Ub(81,"input",40),a.Yb(),a.Yb(),a.Zb(82,"div",41),a.Zb(83,"div",20),a.Zb(84,"label",42),a.Mc(85,"Expiry Month"),a.Yb(),a.Ub(86,"input",43),a.Yb(),a.Yb(),a.Zb(87,"div",41),a.Zb(88,"div",20),a.Zb(89,"label",44),a.Mc(90,"Expiry Year"),a.Yb(),a.Ub(91,"input",45),a.Yb(),a.Yb(),a.Zb(92,"div",41),a.Zb(93,"div",20),a.Zb(94,"label",46),a.Mc(95,"CVV"),a.Yb(),a.Ub(96,"input",47),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(97,"div",32),a.Zb(98,"label",48),a.Ub(99,"input",49),a.Ub(100,"span",35),a.Mc(101," Paypal "),a.Yb(),a.Yb(),a.Zb(102,"div",25),a.Zb(103,"div",26),a.Ub(104,"input",50),a.Zb(105,"label",51),a.Mc(106,"I have read and accept "),a.Zb(107,"a",24),a.Mc(108,"Terms & Conditions"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(109,"div",52),a.Zb(110,"a",53),a.Mc(111,"Confirm and Pay"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(112,"div",54),a.Zb(113,"div",55),a.Zb(114,"div",15),a.Zb(115,"h3",16),a.Mc(116,"Your Order"),a.Yb(),a.Yb(),a.Zb(117,"div",17),a.Zb(118,"div",56),a.Zb(119,"table",57),a.Zb(120,"tr"),a.Zb(121,"th"),a.Mc(122,"Product"),a.Yb(),a.Zb(123,"th",58),a.Mc(124,"Total"),a.Yb(),a.Yb(),a.Zb(125,"tbody"),a.Zb(126,"tr"),a.Zb(127,"td"),a.Mc(128,"Safi Natural Blood Purifier Syrup 200 ml Manufactured By Hamdard (Wakf) Laboratories"),a.Yb(),a.Zb(129,"td",58),a.Mc(130,"$200"),a.Yb(),a.Yb(),a.Zb(131,"tr"),a.Zb(132,"td"),a.Mc(133,"Safi Natural Blood Purifier Syrup 200 ml"),a.Yb(),a.Zb(134,"td",58),a.Mc(135,"$200"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Zb(136,"div",59),a.Zb(137,"div",60),a.Zb(138,"ul",61),a.Zb(139,"li"),a.Mc(140,"Subtotal "),a.Zb(141,"span"),a.Mc(142,"$5,877.00"),a.Yb(),a.Yb(),a.Zb(143,"li"),a.Mc(144,"Shipping "),a.Zb(145,"span"),a.Mc(146,"$25.00"),a.Yb(),a.Yb(),a.Yb(),a.Zb(147,"ul",62),a.Zb(148,"li"),a.Mc(149,"Tax "),a.Zb(150,"span"),a.Mc(151,"$0.00"),a.Yb(),a.Yb(),a.Yb(),a.Zb(152,"div",63),a.Zb(153,"ul",64),a.Zb(154,"li"),a.Zb(155,"span"),a.Mc(156,"Total"),a.Yb(),a.Zb(157,"span",65),a.Mc(158,"$160"),a.Yb(),a.Yb(),a.Ub(159,"li"),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb(),a.Yb()),2&b&&(a.Gb(7),a.tc("routerLink",""),a.Gb(103),a.tc("routerLink","/pharmacy/success"))},directives:[r.h],styles:[""]}),b})()}];let c=(()=>{class b{}return b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=a.Rb({type:b}),b.\u0275inj=a.Qb({imports:[[r.i.forChild(o)],r.i]}),b})(),d=(()=>{class b{}return b.\u0275fac=function(t){return new(t||b)},b.\u0275mod=a.Rb({type:b}),b.\u0275inj=a.Qb({imports:[[i.b,c]]}),b})()}}]);