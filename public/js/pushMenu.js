var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
    showRightPush = document.getElementById( 'showRightPush' ),
	//rightPushButton = document.getElementById( 'rightPushButton' ),
    rightPushButton = $("html"),
	body = document.body;
	//$(document).click(closeSidebar);
	//rightPushButton.onclick(closeSidebar);
 
$("html").click(closeSidebar);


showRightPush.onclick = function(e) {
	e.stopPropagation();
	if(!classie.hasClass(this, 'active')){
		classie.toggle( this, 'active' );
	    classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
	}
	
};

//rightPushButton.onclick = closeSidebar();

function closeSidebar(e) {
	if(classie.hasClass(showRightPush, 'active')
		&& !$(e.target).hasClass("dontclose") ){
		
		classie.toggle( body, 'cbp-spmenu-push-toleft' );
		classie.toggle( menuRight, 'cbp-spmenu-open' );
		classie.toggle( showRightPush, 'active');
	}
};

/*
function disableOther( button ) {
    if( button !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
    }
}

function disableOther( button ) {
	if( button !== 'rightPushButton' ) {
		classie.toggle( rightPushButton, 'disabled' );
	}
}
*/

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */

( function( window ) {

	'use strict';

// class helper functions from bonzo https://github.		com/ded/bonzo

function classReg( className ) {
	return new RegExp("(^|\\s+)" + className + "(\\s+|$)		");
}

// classList support for class management
// altho to be fair, the api sucks because it won't 		accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
	hasClass = function( elem, c ) {
		return elem.classList.contains( c );
	};
	addClass = function( elem, c ) {
		elem.classList.add( c );
	};
	removeClass = function( elem, c ) {
		elem.classList.remove( c );
	};
}
else {
	hasClass = function( elem, c ) {
		return classReg( c ).test( elem.className );
	};
	addClass = function( elem, c ) {
		if ( !hasClass( elem, c ) ) {
			elem.className = elem.className + ' ' + c;
		}
	};
	removeClass = function( elem, c ) {
		elem.className = elem.className.replace( classReg( c ), ' ' );
	};
}

function toggleClass( elem, c ) {
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
}

window.classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

})( window );

