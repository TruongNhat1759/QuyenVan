// JavaScript Document
$(function() {
	'use strict';
	var objectFunction= {
		init: function(){
			this.toggleMenu();
			this.handleScroll();
		},

		toggleMenu: function() {
			$('.nav-setting, .toggle-menu, .bg-openmenu').on('click', () => {
				$('#navigation').toggleClass('active');
				$('.toggle-menu').toggleClass('active');
				$('#content').toggleClass('active');
				if($('.toggle-menu').hasClass('active')) {
					$('.toggle-menu img').prop('src', './images/ic_menu_close.svg');
				} else {
					$('.toggle-menu img').prop('src', './images/ic_menu_open.svg');
				}
			})
		},

		handleScroll: function() {
			let curScroll = 0;
			$(window).bind('load resize scroll', () => {
				if ($(window).scrollTop() > curScroll ) {
					$('#header').css({
						'top': -$('#header').outerHeight()
					})
					$('#navigation').css({
						'height': '100%',
						'top': '0'
					});
				} else {
					$('#header').css({
						'top': ''
					})
					$('#navigation').css({
						'height': '',
						'top': ''
					});
				}
				curScroll = $(window).scrollTop();
			})
		}
  };
  objectFunction.init();
});


