//   // [2. Navigation]
//   function personite_navigation(){

//     // Close all submenus when dropdown is hiding
//     $('.navbar-nav > .dropdown').on('hide.bs.dropdown', function() {
//       var $submenus = $(this).find('.dropdown-submenu');

//       $submenus.removeClass('show dropdown-target');
//       $submenus.find('.dropdown-menu').removeClass('show');
//     });

//     // Add hovered class
//     $('.navbar-nav > .dropdown').on('shown.bs.dropdown', function() {
//       if (window.innerWidth > 991) {
//         $(this).addClass('hovered');
//       } else {
//         $(this).removeClass('hovered');
//       }
//     });

//     // Enable clicks inside dropdown
//     $(document).on('click', '.navbar-nav > .dropdown', function(e) {
//       e.stopPropagation();
//     });

//     // Dropdown
//     var navbarDropdown = document.querySelectorAll('.navbar-nav > .dropdown, .navbar-nav .dropdown-submenu');

//     [].forEach.call(navbarDropdown, function(dropdown) {
//       'mouseenter mouseleave click'.split(' ').forEach(function(event) {
//         dropdown.addEventListener(event, function(e) {
//           if (window.innerWidth >= siteNavbar_expand && siteNavbar_dropdownHover === true ) {
//             // Hover

//             var _this = this;

//             if( event === 'mouseenter' ){
//               if( _this.classList.contains('dropdown') ){
//                 var toggle = _this.querySelector('[data-toggle="dropdown"]');

//                 if( _this.classList.contains('show') ){
//                   $(toggle).dropdown('hide');
//                   $(toggle).blur();
//                 } else {
//                   $(toggle).dropdown('show');

//                   e.stopPropagation();
//                 }
//               } else if( _this.classList.contains('dropdown-submenu') ){
//                 if( $(_this).parent().find('.dropdown-target') ){
//                   $(_this).parent().find('.dropdown-target.dropdown-submenu').removeClass('show dropdown-target');
//                 }

//                 _this.classList.add('hovered', 'show', 'dropdown-target');
//               }
//             } else {
//               if( _this.classList.contains('dropdown') ){
//                 var toggle = _this.querySelector('[data-toggle="dropdown"]');

//                 $(toggle).dropdown('hide');
//                 $(toggle).blur();
//               } else if( _this.classList.contains('dropdown-submenu') ){
//                 _this.classList.remove('show', 'dropdown-target');
//               }
//             }
//           } else {
//             // Click

//             if( event === 'click' && e.target.classList.contains('dropdown-toggle') && e.target.parentNode.classList.contains('dropdown-submenu') ){
//               if( e.target.parentNode.classList.contains('dropdown') ){
//                 return true;
//               }

//               e.stopPropagation();
//               e.preventDefault();

//               var _this = e.target,
//                 ddSubmenu = _this.parentNode,
//                 ddMenu = _this.nextElementSibling;

//               if( ddSubmenu.classList.contains('show') ){

//                 ddSubmenu.classList.remove('show', 'dropdown-target');
//                 ddMenu.classList.remove('show');

//                 if( ddMenu.querySelectorAll('.dropdown-target').length > 0 ){
//                   var submenuNodeList = ddMenu.querySelectorAll('.dropdown-target.dropdown-submenu'), i;

//                   for (i = 0; i < submenuNodeList.length; ++i) {
//                     submenuNodeList[i].classList.remove('show', 'dropdown-target');
//                     submenuNodeList[i].querySelector('.dropdown-menu').classList.remove('show');
//                   }
//                 }
//               } else {
//                 if( ddSubmenu.parentNode.querySelectorAll('.dropdown-target').length > 0 ){
//                   var submenuNodeList = ddSubmenu.parentNode.querySelectorAll('.dropdown-target.dropdown-submenu'), i;

//                   for (i = 0; i < submenuNodeList.length; ++i) {
//                     submenuNodeList[i].classList.remove('show', 'dropdown-target');
//                     submenuNodeList[i].querySelector('.dropdown-menu').classList.remove('show');
//                   }
//                 }

//                 ddSubmenu.classList.add('hovered', 'show', 'dropdown-target');
//                 ddMenu.classList.add('show');
//               }
//             }
//           }
//         });
//       });
//     });

//     // Navigation collapse
//     $siteNavbarCollapse.on( 'show.bs.collapse', function(){
//       $siteNavbar.addClass('navbar-toggled-show');
//       $siteNavbarToggler.blur();
//       personite_navChangeClasses('toggled');
//     });

//     $siteNavbarCollapse.on( 'hidden.bs.collapse', function(){
//       $siteNavbar.removeClass('navbar-toggled-show');
//       $siteNavbarToggler.blur();

//       if ( $siteNavbar.hasClass('scrolled') ){
//         personite_navChangeClasses('scrolled');
//       } else {
//         personite_navChangeClasses();
//       }
//     });

//     // Clickable Links
//     $(document).on( 'click', 'a.scrollto, .site-navbar a[href^="#"]', function(e){
//       var target;

//       // Make sure this.hash has a value before overriding default behavior
//       if ( this.hash !== '' && this.hash !== '#!' && $( this.hash ).length > 0 ){
//         target = this.hash;
//       } else {
//         return false;
//       }

//       if( target !== '' ){
//         // Prevent default anchor click behavior
//         e.preventDefault();

//         if( $( target ).length > 0 ){
//           var targetPosition = parseInt( Math.max( document.querySelector(target).offsetTop, $(target).offset().top ), 10 );

//           $(window).scrollTo(targetPosition,800);

//           $(this).blur();
//         }
//       }

//       return false;
//     });

//     // Back to top
//     $(document).on( 'click', '.btn-back-to-top', function(e){
//       e.preventDefault();

//       $(window).scrollTo(0,800);

//       $(this).blur();
//     });

//     // Close nav on click outside of '.sitenav-collapse-inner'
//     $(document).on( 'click touchstart', function(e){
//       if ( $siteNavbar.is(e.target) || $(e.target).closest('.site-navbar').hasClass('site-navbar') || $(e.target).hasClass('navbar-toggler') || $(e.target).hasClass('navbar-toggler-alternative') ){
//         return;
//       }

//       if ( $siteNavbarToggler.attr('aria-expanded') === 'true' ){
//         $siteNavbarToggler.trigger('click');
//       }
//     });

// }


// function personite_navOnScroll(){
//     if ( $siteNavbar.length > 0 ){
//       var currentPos = $(window).scrollTop();

//       if ( currentPos > 0 ){
//         if ( $siteNavbar.hasClass('scrolled') ){
//           return;
//         }

//         $siteNavbar.addClass('scrolled').removeClass('scrolled-0');

//         if( $siteNavbar.hasClass('navbar-toggled-show') ){
//           personite_navChangeClasses('toggled');
//         } else {
//           personite_navChangeClasses('scrolled');
//         }
//       } else {
//         $siteNavbar.removeClass('scrolled').addClass('scrolled-0');

//         if( $siteNavbar.hasClass('navbar-toggled-show') ){
//           personite_navChangeClasses('toggled');
//         } else if( $body.hasClass('flyer-open') ){
//           personite_navChangeClasses('flyer');
//         } else {
//           personite_navChangeClasses();
//         }
//       }
//     }
//   }


  
//   var nav_event_old;
//   function personite_navChangeClasses(nav_event){
//     if( nav_event_old === nav_event && !( nav_event == '' || nav_event == undefined ) )
//       return;

//     if( nav_event === 'toggled' && siteNavbar_toggled ){
//       $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_scrolled);
//       $siteNavbar.addClass(siteNavbar_toggled);
//     } else if( nav_event === 'scrolled' && siteNavbar_scrolled ){
//       $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_base, siteNavbar_toggled);
//       $siteNavbar.addClass(siteNavbar_scrolled);
//     } else {
//       if(siteNavbar_base){
//         $siteNavbar.removeClass('navbar-light navbar-dark', siteNavbar_toggled, siteNavbar_scrolled);
//         $siteNavbar.addClass(siteNavbar_base);
//       }
//     }

//     if( $siteNavbar.hasClass('navbar-light') ){
//       $('[data-on-navbar-light]').each(function(){
//         var el = $(this);

//         if( el.attr('data-on-navbar-dark') ){
//           el.removeClass(el.attr('data-on-navbar-dark'));
//         }
//         if( el.attr('data-on-navbar-light') ){
//           el.addClass(el.attr('data-on-navbar-light'));
//         }
//       });
//     } else if( $siteNavbar.hasClass('navbar-dark') ){
//       $('[data-on-navbar-dark]').each(function(){
//         var el = $(this);

//         if( el.attr('data-on-navbar-light') ){
//           el.removeClass(el.attr('data-on-navbar-light'));
//         }
//         if( el.attr('data-on-navbar-dark') ){
//           el.addClass(el.attr('data-on-navbar-dark'));
//         }
//       });
//     }

//     nav_event_old = nav_event;
//   }