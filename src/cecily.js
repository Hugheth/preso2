/*!
 | ''*Name'*'|cecily|
 |''Version''|0.1|
 |''License''|BSD (http://en.wikipedia.org/wiki/BSD_licenses)|
 !*/
var APP_PATH = "/present";
var RESERVED_TITLES = ["cecily", "chrjs-store.js", "chrjs.js", "jquery.min.js"];

(function($) {
	
	window.cecily = {
		
		display: null,			// The display which tiddlers are attached to
		bag: null,				// The current bag cecily should use
		host: null,				// The current host cecily should use
		store: null,			// The chrjs-store store object
		map: null,				// The title of the current map tiddler
		mapData: null,			// An object containing the positions and sizes of tiddlers in the map
		zooming: 0,				// Currently zooming to a tiddler or to multiple tiddlers
		scale: 1.0,				// The current scale of the display
		zoomTrace: [],			// A list of previously visited tiddlers
		currentTiddler: null,	// The currently zoomed tiddler,
		defaultTiddlers: null,	// A list of default tiddlers
		defaultWidth: 260		// Default width of a tiddler
	};
	
	// Initialise cecily
	cecily.init = function() {
		
		// Set host
		cecily.host = document.location.host;
		
		cecily.display = $('#display');
		
		// Load the map
		cecily.setMap('MyMap', function( ok ) {
			
			if (!ok) cecily.mapData = {};
					  
			// Load the default tiddlers
			cecily.loadTiddler('DefaultTiddlers', function( tiddler ) {
				
				var n = 0;
				
				if (tiddler) {
				
					// Parse list of tiddlers from 
					cecily.defaultTidders = cecily.tiddlersFromFilter(tiddler.text);
					
					for (var i in cecily.defaultTidders) {
						
						if (!ok) {
							cecily.mapData[cecily.defaultTidders[i]] = [n * 50 + 2500, n * 50 + 2500, 260, 500];
							
							// Increment offset so when no MyMap tiddlers display in a stack
							n++;
						}
						
						cecily.showTiddler(cecily.defaultTidders[i]);
					};
					
				} else {
					
					cecily.defaultTiddlers = ['GettingStarted'];
					cecily.mapData['GettingStarted'] = [2550, 2550, 260, 500];
					cecily.showTiddler('GettingStarted');
				}
				
			});
		});
		
		// Prevent default mouse and touch down events
		$.touche.preventDefaults();
		
		// Make the display interactive
		$('#display').touche({
			before: cecily.displayBeforeAction,
			after: cecily.displayAfterAction,
			move: cecily.displayMove,
			click: cecily.displayClick
		});
	};
	
	// Initialise cecily on document load
	$(function() {
		// Set up chrjs-store
		cecily.store = new tiddlyweb.Store(cecily.init);
	});
	
	// Display actions handle dragging and zooming on the display
	
	// Start an action on the display
	cecily.displayBeforeAction = function( data ) {
		
		// Update the display matrix and stop zooming
		cecily.updateDisplayMatrix();
		cecily.zooming = Math.max(0, cecily.zooming - 1);
		
		// Remember initial position
		data.cssX = parseFloat(cecily.display.attr('tx')) || 0;
		data.cssY = parseFloat(cecily.display.attr('ty')) || 0;
		
		// Save trace offset in case dragging swaps fingers
		if (data.count == 1) {
			data.offsetX = data.traces[0].dx;
			data.offsetY = data.traces[0].dy;
		}
		
		if (data.count == 2) {
			
			// Calculate the scale
			data.scale = Math.pow(Math.pow(data.traces[0].x - data.traces[1].x, 2) + Math.pow(data.traces[0].y - data.traces[1].y, 2), 0.5);
			
			// Calculate the midpoint
			data.midpointX = (data.traces[0].x + data.traces[1].x) / 2;
			data.midpointY = (data.traces[0].y + data.traces[1].y) / 2;	
		}
		
		data.tx = data.cssX; 
		data.ty = data.cssY;
	};
	// End an action on the display
	cecily.displayAfterAction = function( data ) {
		
		// Update attributes
		cecily.updateDisplayMatrix();
	};
	// Move on the display
	cecily.displayMove = function( data, trace ) {
		
		// No longer focus on tiddler
		cecily.currentTiddler = null;
		
		// Check for drag
		if (data.count == 1) {
			
			data.tx = data.cssX + trace.dx - data.offsetX;
			data.ty = data.cssY + trace.dy - data.offsetY;
			
			$('body').css({
				'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + cecily.scale + ')',
				'transition': '',
				'-webkit-transition': '',
				'-moz-transition': '',
				'transition': ''
			});
						  
						  // Check 
		} else if (data.count == 2) {
			
			// Calculate the ratio of size change
			data.sFactor = Math.pow(Math.pow(data.traces[0].x - data.traces[1].x, 2) + Math.pow(data.traces[0].y - data.traces[1].y, 2), 0.5) / data.scale * cecily.scale;
			
			// Calculate the new midpoint
			var midX = (data.traces[0].x + data.traces[1].x) / 2;
			var midY = (data.traces[0].y + data.traces[1].y) / 2;
			
			data.tx = data.cssX + (midX - data.midpointX);
			data.ty = data.cssY + (midY - data.midpointY);
			
			$('body').css({
				'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.sFactor + ')',
				'-webkit-transition': '',
				'-moz-transition': '',
				'transition': ''
			});
		}
	};	
	// Click the display
	cecily.displayClick = function() {
		cecily.zoomToTiddler(false);
	};
	
	// Loads the current map and parses into cecily.mapData
	cecily.setMap = function( title, callback ) {
		
		// Load the tiddler
		cecily.loadTiddler(title, function( tiddler ) {
			
			if (!tiddler) {
				callback(false);
				return;
			}
			
			cecily.map = title;
			cecily.mapData = {};
			
			// Parse the map data
			var data = tiddler.text.split("\n");
			
			for (var i in data) {
				
				var vals = data[i].split(' ');
				var name = vals.shift();
				
				cecily.mapData[name] = vals;
			}
			
			callback(true);
		});
	};
	
	// Load a tiddler from the server and callback contents on completion
	cecily.loadTiddler = function( title, callback ) {
		
		cecily.store.get(title, function( tid ) {
			
			if(tid) {
				
				callback(tid);
				
			}  else {
				//TODO: Handle error
				callback(false);
			}
			
		}, true);
	};
	
	// Show a tiddler on the page
	cecily.showTiddler = function( title, callback ) {
		
		callback = callback || $.noop;
		
		// Check for already showing
		if ($('#tiddler' + title).length) {
			callback(true);
			return;
		}
		
		// First load the tiddler
		cecily.loadTiddler(title, function( tiddler ) {
			
			if (!tiddler) {
				callback(false);
				return;
			}		
			
			// Create the element
			var elem = $('<div class="tiddler" id="tiddler' + tiddler.title + '" tiddler="' + tiddler.title + '"></div>');
			
			// Count tiddlers to calculate z-ordering
			var count = $('.tiddler').length;
			
			var x = (cecily.mapData[title]) ? cecily.mapData[title][0]: Math.random() * 4700;
			var y = (cecily.mapData[title]) ? cecily.mapData[title][1]: Math.random() * 4000;
			
			var scale = ((cecily.mapData[title]) ? cecily.mapData[title][2] : cecily.defaultWidth) / cecily.defaultWidth || 1;
			
			elem.css({
				'-webkit-transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
				'-moz-transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
			   'transform': 'translatex(' + x + 'px) translatey(' + y + 'px) scale(' + scale + ')',
				 zIndex: count,
				display: 'none'
			});
			
			// Record position
			elem.attr('tx', x);
			elem.attr('ty', y);
			
			var close = $('<div class="toolbarLink close" style="float:right">close</div>');
			close.touche({
				click: function() {
					cecily.hideTiddler(title);
				},
				stopPropagation: true
			});
			
			var h1 = $('<h1/>');
			h1.append(tiddler.title);
			
			var heading = $('<div class="heading"></div>');
			heading.append(close);
			heading.append(h1);
			
			h1.touche({
				
				before: function( data ) {
					
					if (data.count == 1) {
						
						var title = this.parent().parent().attr('tiddler');
						
						// Remember initial position
						data.cssX = parseFloat(this.parent().parent().attr('tx')) || 0;
						data.cssY = parseFloat(this.parent().parent().attr('ty')) || 0;
						data.offsetX = data.traces[0].dx;
						data.offsetY = data.traces[0].dy;
						data.scale = ((cecily.mapData[title]) ? cecily.mapData[title][2] : cecily.defaultWidth) / cecily.defaultWidth || 1;
						
						// Bring tiddler to front
						cecily.pushTiddlerToFront(title);
					}
					
				},
			 after: function( data ) {
				 
				 if (data.count == 1) {
					 
					 this.parent().parent().attr('tx', data.tx);
					 this.parent().parent().attr('ty', data.ty);
				 }
				 
			 },
			 move: function( data, trace ) {
				 
				 if (data.count == 1) {
					 
					 data.tx = data.cssX + trace.dx / cecily.scale - data.offsetX;
					 data.ty = data.cssY + trace.dy / cecily.scale - data.offsetY;
					 
					 this.parent().parent().css({
						'-webkit-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'-moz-transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'transform': 'translatex(' + data.tx + 'px) translatey(' + data.ty + 'px) translateZ(0) scale(' + data.scale + ')',
						'transition': '',
						'-webkit-transition': '',
						'-moz-transition': '',
						'transition': ''
					 });
					 
				 }
				 
			 },
			 click: function() {
				 
				 if (elem.children('.content:visible').length) {
					 
					 elem.children('.content').slideUp(200);
					 elem.find('.toolbarLink').fadeOut(200);
					 
				 } else {
					 
					 elem.children('.content').slideDown(200);
					 elem.find('.toolbarLink').fadeIn(200);
				 }
			 },
			 propagate: false
			});
			
			elem.append(heading);
			
			var content = $('<div class="content"></div>');
			content.append(tiddler.render);
			
			elem.append(content);
			
			// Zoom on click content
			content.touche({
				
				click: function( data ) {
					cecily.zoomToTiddler(elem.attr('tiddler'));
				},
				
				propagate: false
			});
			
			cecily.display.append(elem);
			
			// Make the tiddler interactive
			cecily.makeTiddlerInteractive(title);
			
			elem.fadeIn(200);
			
			// Set timeout to wait for a draw to calculate height
			setTimeout(function() {
				
				elem.attr('th', elem.height());
				elem.attr('tw', elem.width());
				
				callback(true);
			});
		});
	};
	
	// Hide a tiddler currently showing on the display
	cecily.hideTiddler = function( title ) {
		
		// Get tiddler
		var elem = $('#tiddler' + title);
		
		// Transition
		elem.fadeOut(200);
		
		setTimeout(function() {
			elem.remove();				
		}, 200);
		
		// Re-assign z-indexes
		cecily.assignZOrder();
	};
	
	cecily.pushTiddlerToFront = function( title ) {
		
		var elem = $('#tiddler' + title);
		
		if (!elem.length) return;
						  
						  // Current z-index of tiddler
		var z = elem.css('z-index');
		
		// Reorder view stack
		var tiddlers = $('.tiddler');
		
		tiddlers.each(function() {
			// Reduce z-index of all tiddlers appearing above the target one
			if ($(this).css('z-index') > z)
				$(this).css('z-index', $(this).css('z-index') - 1);
		});
		
		// Push tiddler to front
		elem.css('z-index', tiddlers.length);
	};
	
	// Assign the z-order of the tiddlers
	cecily.assignZOrder = function() {
		
		var i, values = {};
		
		$('.tiddler').each(function() {
			values[$(this).css('z-index')] = $(this);
		});
		
		var keys = [];
		
		// Sort keys
		for (i in values)
			// keys.push(i);
		
		keys.sort();
		
		var n = 1;
		
		// Iterate and reassign z-indexes
		for (i in keys) {
			values[keys[i]].css('z-index', n);
			n++;
		}
	};
	
	// Make tiddler interactive, taking the static html representation of
	// the tiddler and adding cecily specific functionality
	cecily.makeTiddlerInteractive = function( title ) {
		
		// Get tiddler
		var elem = $('#tiddler' + title);
		
		// TODO: Hack to allow internal links in tiddlers that are currently considered to be external links by Twikifier to work correctly
		elem.find('a.externalLink').not('cecily').addClass('cecily').touche({
			
			click: function() {
				
				var link = cecily.tiddlerFromAnchor(this);
				
				if (!link) window.open(this.attr('href'), '_blank');
				
				cecily.showTiddler(link, function( okay ) {
					if (okay)
						cecily.zoomToTiddler(link);
				});
			},
			propagate: false
			
		}).click(function(e) {
			e.preventDefault();
		});
	};
	
	// Filters to parse TiddlyWiki filter syntax
	cecily.filters = {
		
		tiddler: function( results, match ) {
			
			var title = match[1] || match[4];

			results.push(title);

			return results;
		},
		
		tag: function( results, match ) {
			
			var matched = cecily.store().tag(match[3]);
			
			for (var m = 0; m < matched.length; m++) {
				results.push(matched[m].title);
			}
			return results;
		},
		
		sort: function( results, match ) {
			
			return results.sort();
		},
		
		limit: function( results, match ) {
			
			return results.slice(0, parseInt(match[3], 10));
		},
		
		field: function( results, match ) {
			
			var matched = cecily.store().attr(match[2], match[3]);
			
			for (var m = 0; m < matched.length; m++) {
				results.push(matched[m].title);
			}
			return results;
		}
	};
	
	// Resolve a set of TiddlyWiki style filter expressions for tiddlers
	// Input text from a tiddler such as DefaultTiddlers or MainMenu and
	// returns an array of tiddler titles.
	cecily.tiddlersFromFilter = function( input ) {
		
		var re = /([^\s\[\]]+)|(?:\[([ \w\.\-]+)\[([^\]]+)\]\])|(?:\[\[([^\]]+)\]\])/mg;
		
		var results = [];
		
		var match = re.exec(input);
		while( match ) {
			
			var handler = (match[1] || match[4]) ? 'tiddler' : (cecily.filters[match[2]] ? match[2] : 'field');
			results = cecily.filters[handler].call(this, results, match);
			match = re.exec(input);
		}
		
		return results;
	};
	
	// Given a jQuery object containing an anchor element, this function should
	// return the title of the tiddler that it points to, and false if it is an
	// external link
	cecily.tiddlerFromAnchor = function( a ) {
		
		// New tiddler
		var href = a.attr('href');
		
		if (href.split('/').length == 1) return href;
						  
		// Check for in this space
		if (href.substring(0, cecily.host.length) != cecily.host) return false;
						  
		var link = href.substring(cecily.host.length);
		
		// TODO: Don't loose information about bag
		link = link.split('/');
		link = link[link.length - 1];
		
		return link;
	};
	
	cecily.zoomToTiddler = function( title ) {
		
		if (cecily.zooming) return;
		
		cecily.zooming++;
		
		setTimeout(function() {
			cecily.zooming = Math.max(0, cecily.zooming - 1);
		}, 500);
		
		// Zoom to fit all tiddlers
		if (!title) {
			
			// Create bound rectangle to zoom
			var bound = $('<div class="bound"/>');
		
			var bounds = cecily.boundsForTiddlers($('.tiddler'));
			bound.css(bounds).css('position', 'absolute');
			
			cecily.display.append(bound);
			
			bound.zoomTo({
				targetsize: 0.9,
				nativeanimation: true,
				duration: 500
			});
			
			setTimeout(function() {
				bound.remove();
			});
			
			cecily.currentTiddler = null;
			
			return;
		}
		
		cecily.zoomTrace.push(title);
		
		var elem = $('#tiddler' + title);

		var invis = false;
		
		// Reshow content if hidden
		if (!elem.children('.content:visible').length) {

			invis = true;

			// Reshow transparent so height is included in calculating zoom
			elem.children('.content').css('opacity', 0).show();
			
			elem.find('.toolbarLink').fadeIn(200);
		}
		
		if (cecily.currentTiddler && cecily.currentTiddler != title) {
			
			// TODO: Only one zoom motion for now until motion is slower and less buggy
			
			/*
			// Create bound rectangle to zoom
			var bound = $('<div class="bound"/>');

			var bounds = cecily.boundsForTiddlers(elem.add('#tiddler' + cecily.currentTiddler));
			
			bound.css(bounds).css('position', 'absolute');
			
			$('#display').append(bound);
			
			bound.zoomTo({
				targetsize: 1,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});
			
			setTimeout(function() {
				
				// Zoom to the tiddler
				elem.zoomTo({
					targetsize: 0.9,
					duration: 500,
					easing: 'ease-in',
					nativeanimation: true
				});
				
				bound.remove();
				
			}, 500);
			*/
			
			// Zoom to the tiddler
			elem.zoomTo({
				targetsize: 0.9,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});

		} else {
			
			// Zoom to the tiddler
			elem.zoomTo({
				targetsize: 0.9,
				duration: 500,
				easing: 'ease-out',
				nativeanimation: true
			});
		}
		
		cecily.currentTiddler = title;
		
		if (invis) elem.children('.content').hide().css('opacity', 1).slideDown(200);
				
				// Reorder view stack
		cecily.pushTiddlerToFront(title);
	};
	
	// Calculate scale and position of display
	cecily.updateDisplayMatrix = function() {
		
		// TODO: Make less hacky
		var body = $('body');
		var tr = body.css('-webkit-transform') || body.css('-moz-transform') || body.css('transform');
		
		// Currently relies on transform being stored as a matrix
		if (tr.substring(0, 6) != 'matrix') {
			// TODO: Generate an error message or fix
			return;
		}
		
		tr = tr.substring(7);
		tr = tr.substring(0, tr.length - 1);
		tr = tr.split(',');
		
		cecily.display.attr('tx', parseFloat(tr[4]), 10);
		cecily.display.attr('ty', parseFloat(tr[5]), 10);
		cecily.scale = parseFloat(tr[3], 10);
	};
	
	// Returns an object containing left, top, width & height values that represents
	// the bounding box around the tiddlers passed
	cecily.boundsForTiddlers = function( tiddlers ) {
		
		var left = parseFloat(tiddlers.eq(0).attr('tx')), top = parseFloat(tiddlers.eq(0).attr('ty'));
		var right = left + parseFloat(tiddlers.eq(0).attr('tw')), bottom = top + parseFloat(tiddlers.eq(0).attr('th'));
		
		tiddlers = tiddlers.filter(':gt(0)');
		
		tiddlers.each(function() {
			
			var t = $(this);
			
			left = Math.min(t.attr('tx'), left);
			top = Math.min(t.attr('ty'), top);
			right = Math.max(parseFloat(t.attr('tx')) + parseFloat(t.attr('tw')), right);
			bottom = Math.max(parseFloat(t.attr('ty')) + parseFloat(t.attr('th')), bottom);
		});
		
		return {
			left: left,
			top: top,
			width: right - left,
			height: bottom - top
		};
	};
	
})(jQuery);