!function(){function i(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function e(i,e){for(var b=0;b<e.length;b++){var a=e[b];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(i,a.key,a)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"7K4W":function(b,a,t){"use strict";t.r(a),t.d(a,"ReviewsModule",function(){return l});var n,s,o,r=t("ofXK"),c=t("tyNb"),d=t("fXoL"),m=[{path:"",component:(n=function(){function b(){i(this,b)}var a,t,n;return a=b,(t=[{key:"ngOnInit",value:function(){}}])&&e(a.prototype,t),n&&e(a,n),b}(),n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=d.Nb({type:n,selectors:[["app-reviews"]],decls:231,vars:0,consts:[[1,"doc-review","review-listing"],[1,"comments-list"],[1,"comment"],["alt","User Image","src","assets/img/patients/patient.jpg",1,"avatar","rounded-circle"],[1,"comment-body"],[1,"meta-data"],[1,"comment-author"],[1,"comment-date"],[1,"review-count","rating"],[1,"fas","fa-star","filled"],[1,"fas","fa-star"],[1,"recommended"],[1,"far","fa-thumbs-up"],[1,"comment-content"],[1,"comment-reply"],["href","javascript:void(0)",1,"comment-btn"],[1,"fas","fa-reply"],[1,"recommend-btn"],["href","javascript:void(0)",1,"like-btn"],["href","javascript:void(0)",1,"dislike-btn"],[1,"far","fa-thumbs-down"],[1,"comments-reply"],["alt","User Image","src","assets/img/doctors/doctor-thumb-02.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient2.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient3.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient4.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient5.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient9.jpg",1,"avatar","rounded-circle"],["alt","User Image","src","assets/img/patients/patient8.jpg",1,"avatar","rounded-circle"]],template:function(i,e){1&i&&(d.Zb(0,"div",0),d.Zb(1,"ul",1),d.Zb(2,"li"),d.Zb(3,"div",2),d.Ub(4,"img",3),d.Zb(5,"div",4),d.Zb(6,"div",5),d.Zb(7,"span",6),d.Mc(8,"Richard Wilson"),d.Yb(),d.Zb(9,"span",7),d.Mc(10,"Reviewed 2 Days ago"),d.Yb(),d.Zb(11,"div",8),d.Ub(12,"i",9),d.Ub(13,"i",9),d.Ub(14,"i",9),d.Ub(15,"i",9),d.Ub(16,"i",10),d.Yb(),d.Yb(),d.Zb(17,"p",11),d.Ub(18,"i",12),d.Mc(19," I recommend the doctor"),d.Yb(),d.Zb(20,"p",13),d.Mc(21," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(22,"div",14),d.Zb(23,"a",15),d.Ub(24,"i",16),d.Mc(25," Reply "),d.Yb(),d.Zb(26,"p",17),d.Zb(27,"span"),d.Mc(28,"Recommend?"),d.Yb(),d.Zb(29,"a",18),d.Ub(30,"i",12),d.Mc(31," Yes "),d.Yb(),d.Zb(32,"a",19),d.Ub(33,"i",20),d.Mc(34," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(35,"ul",21),d.Zb(36,"li"),d.Zb(37,"div",2),d.Ub(38,"img",22),d.Zb(39,"div",4),d.Zb(40,"div",5),d.Zb(41,"span",6),d.Mc(42,"Dr. Darren Elder"),d.Yb(),d.Zb(43,"span",7),d.Mc(44,"Reviewed 3 Days ago"),d.Yb(),d.Yb(),d.Zb(45,"p",13),d.Mc(46," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(47,"div",14),d.Zb(48,"a",15),d.Ub(49,"i",16),d.Mc(50," Reply "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(51,"li"),d.Zb(52,"div",2),d.Ub(53,"img",23),d.Zb(54,"div",4),d.Zb(55,"div",5),d.Zb(56,"span",6),d.Mc(57,"Travis Trimble"),d.Yb(),d.Zb(58,"span",7),d.Mc(59,"Reviewed 4 Days ago"),d.Yb(),d.Zb(60,"div",8),d.Ub(61,"i",9),d.Ub(62,"i",9),d.Ub(63,"i",9),d.Ub(64,"i",9),d.Ub(65,"i",9),d.Yb(),d.Yb(),d.Zb(66,"p",13),d.Mc(67," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(68,"div",14),d.Zb(69,"a",15),d.Ub(70,"i",16),d.Mc(71," Reply "),d.Yb(),d.Zb(72,"p",17),d.Zb(73,"span"),d.Mc(74,"Recommend?"),d.Yb(),d.Zb(75,"a",18),d.Ub(76,"i",12),d.Mc(77," Yes "),d.Yb(),d.Zb(78,"a",19),d.Ub(79,"i",20),d.Mc(80," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(81,"li"),d.Zb(82,"div",2),d.Ub(83,"img",24),d.Zb(84,"div",4),d.Zb(85,"div",5),d.Zb(86,"span",6),d.Mc(87,"Carl Kelly"),d.Yb(),d.Zb(88,"span",7),d.Mc(89,"Reviewed 5 Days ago"),d.Yb(),d.Zb(90,"div",8),d.Ub(91,"i",9),d.Ub(92,"i",9),d.Ub(93,"i",9),d.Ub(94,"i",9),d.Ub(95,"i",9),d.Yb(),d.Yb(),d.Zb(96,"p",13),d.Mc(97," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(98,"div",14),d.Zb(99,"a",15),d.Ub(100,"i",16),d.Mc(101," Reply "),d.Yb(),d.Zb(102,"p",17),d.Zb(103,"span"),d.Mc(104,"Recommend?"),d.Yb(),d.Zb(105,"a",18),d.Ub(106,"i",12),d.Mc(107," Yes "),d.Yb(),d.Zb(108,"a",19),d.Ub(109,"i",20),d.Mc(110," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(111,"li"),d.Zb(112,"div",2),d.Ub(113,"img",25),d.Zb(114,"div",4),d.Zb(115,"div",5),d.Zb(116,"span",6),d.Mc(117,"Michelle Fairfax"),d.Yb(),d.Zb(118,"span",7),d.Mc(119,"Reviewed 6 Days ago"),d.Yb(),d.Zb(120,"div",8),d.Ub(121,"i",9),d.Ub(122,"i",9),d.Ub(123,"i",9),d.Ub(124,"i",9),d.Ub(125,"i",9),d.Yb(),d.Yb(),d.Zb(126,"p",13),d.Mc(127," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(128,"div",14),d.Zb(129,"a",15),d.Ub(130,"i",16),d.Mc(131," Reply "),d.Yb(),d.Zb(132,"p",17),d.Zb(133,"span"),d.Mc(134,"Recommend?"),d.Yb(),d.Zb(135,"a",18),d.Ub(136,"i",12),d.Mc(137," Yes "),d.Yb(),d.Zb(138,"a",19),d.Ub(139,"i",20),d.Mc(140," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(141,"li"),d.Zb(142,"div",2),d.Ub(143,"img",26),d.Zb(144,"div",4),d.Zb(145,"div",5),d.Zb(146,"span",6),d.Mc(147,"Gina Moore"),d.Yb(),d.Zb(148,"span",7),d.Mc(149,"Reviewed 1 Week ago"),d.Yb(),d.Zb(150,"div",8),d.Ub(151,"i",9),d.Ub(152,"i",9),d.Ub(153,"i",9),d.Ub(154,"i",9),d.Ub(155,"i",9),d.Yb(),d.Yb(),d.Zb(156,"p",13),d.Mc(157," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(158,"div",14),d.Zb(159,"a",15),d.Ub(160,"i",16),d.Mc(161," Reply "),d.Yb(),d.Zb(162,"p",17),d.Zb(163,"span"),d.Mc(164,"Recommend?"),d.Yb(),d.Zb(165,"a",18),d.Ub(166,"i",12),d.Mc(167," Yes "),d.Yb(),d.Zb(168,"a",19),d.Ub(169,"i",20),d.Mc(170," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(171,"li"),d.Zb(172,"div",2),d.Ub(173,"img",27),d.Zb(174,"div",4),d.Zb(175,"div",5),d.Zb(176,"span",6),d.Mc(177,"Walter Roberson"),d.Yb(),d.Zb(178,"span",7),d.Mc(179,"Reviewed 1 Week ago"),d.Yb(),d.Zb(180,"div",8),d.Ub(181,"i",9),d.Ub(182,"i",9),d.Ub(183,"i",9),d.Ub(184,"i",9),d.Ub(185,"i",9),d.Yb(),d.Yb(),d.Zb(186,"p",13),d.Mc(187," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(188,"div",14),d.Zb(189,"a",15),d.Ub(190,"i",16),d.Mc(191," Reply "),d.Yb(),d.Zb(192,"p",17),d.Zb(193,"span"),d.Mc(194,"Recommend?"),d.Yb(),d.Zb(195,"a",18),d.Ub(196,"i",12),d.Mc(197," Yes "),d.Yb(),d.Zb(198,"a",19),d.Ub(199,"i",20),d.Mc(200," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Zb(201,"li"),d.Zb(202,"div",2),d.Ub(203,"img",28),d.Zb(204,"div",4),d.Zb(205,"div",5),d.Zb(206,"span",6),d.Mc(207,"Daniel Griffing"),d.Yb(),d.Zb(208,"span",7),d.Mc(209,"Reviewed on 1 Nov 2019"),d.Yb(),d.Zb(210,"div",8),d.Ub(211,"i",9),d.Ub(212,"i",9),d.Ub(213,"i",9),d.Ub(214,"i",9),d.Ub(215,"i",9),d.Yb(),d.Yb(),d.Zb(216,"p",13),d.Mc(217," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus "),d.Yb(),d.Zb(218,"div",14),d.Zb(219,"a",15),d.Ub(220,"i",16),d.Mc(221," Reply "),d.Yb(),d.Zb(222,"p",17),d.Zb(223,"span"),d.Mc(224,"Recommend?"),d.Yb(),d.Zb(225,"a",18),d.Ub(226,"i",12),d.Mc(227," Yes "),d.Yb(),d.Zb(228,"a",19),d.Ub(229,"i",20),d.Mc(230," No "),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb(),d.Yb())},styles:[""]}),n)}],u=((o=function e(){i(this,e)}).\u0275fac=function(i){return new(i||o)},o.\u0275mod=d.Rb({type:o}),o.\u0275inj=d.Qb({imports:[[c.i.forChild(m)],c.i]}),o),l=((s=function e(){i(this,e)}).\u0275fac=function(i){return new(i||s)},s.\u0275mod=d.Rb({type:s}),s.\u0275inj=d.Qb({imports:[[r.b,u]]}),s)}}])}();