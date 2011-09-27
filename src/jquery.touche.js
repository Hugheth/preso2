(function($) {
	
	// Touché object
	$.touche = {};
	
	// The object that contains information about the current
	// traces in the page, indexed by their touch identifier
	$.touche.traces = {};
	
	// Add a trace to the traces object
	$.touche.addTrace = function( trace ) {
		
		$.touche.traces[trace.id] = trace;
		
		return trace;
	};
	
	// Remove a trace from the traces object
	$.touche.removeTrace = function( trace ) {
		
		delete $.touche.traces[trace.id];
		
		return trace;
	};
	
	// Small function to disable default touches. This is
	// currently a quick fix that won't capture any default
	// touch events i.e. hyperlinks
	$.touche.preventDefaults = function() {
		
		$('body').bind('touchstart', function( e ) {
			e.preventDefault();
		});
	};
	
	// Listeners that handle touch events on the body, to
	// allow elements to follow traces outside their bounds.
	// These are implemented statically for 2 reasons:
	// - Unlike mousemove, there is no overhead for statically listening to the event as touch events are only fired
	//   when a "drag" event occurs (i.e. unlike mousemove)
	// - Touch events contain all the information about touch movement, so we only need one listener for each event
	//
	// It is therefore important NOT to stopPropogation on touchmove and touchend events for touch(function($) {
	
	// Touché object
	$.touche = {};
	
	// The object that contains information about the current
	// traces in the page, indexed by their touch identifier
	$.touche.traces = {};
	
	// Add a trace to the traces object
	$.touche.addTrace = function( trace ) {
		
		$.touche.traces[trace.id] = trace;
		
		return trace;
	};
	
	// Remove a trace from the traces object
	$.touche.removeTrace = function( trace ) {
		
		delete $.touche.traces[trace.id];
		
		return trace;
	};
	
	// Small function to disable default touches and clicks. This is
	// currently a quick fix that won't capture ANY default
	// touchdown events i.e. hyperlinks and clicks
	$.touche.preventDefaults = function() {
		
		// Prevents default scrolling in the iPhone
		$('body').bind('touchstart', function( e ) {
			e.preventDefault();
		});
		
		// Prevents possible browser implemented dragging of content
		$('body').bind('mousedown', function( e ) {
			e.preventDefault();
		});
	};
	
	// Listeners that handle touch events on the body, to
	// allow elements to follow traces outside their bounds.
	// These are implemented statically for 2 reasons:
	// - Unlike mousemove, there is no overhead for statically listening to the event as touch events are only fired
	//   when a "drag" event occurs (i.e. unlike mousemove)
	// - Touch events contain all the information about touch movement, so we only need one listener for each event
	//
	// It is therefore important NOT to stopPropogation on touchmove and touchend events for touché to work properly.
	$.touche.touchStartBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;
 
			// Trigger the start event on the body for anyone who's listening to the trace
			$('body').trigger('tracestart-' + trace.id);
		}
	};
	$.touche.touchMoveBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;

			// Update information about the trace
			trace.x = touch.pageX;
			trace.y = touch.pageY;
			trace.max_dx = Math.max(touch.pageX - trace.sx, trace.dx);
			trace.max_dy = Math.max(touch.pageY - trace.sy, trace.dy);
			trace.dx = touch.pageX - trace.sx;
			trace.dy = touch.pageY - trace.sy;
			
			// Current event
			trace.currentEvent = e;
			trace.currentTouch = touch;

			// Trigger the move event on the body for anyone who's listening to the trace
			$('body').trigger('tracemove-' + trace.id);
		}
	};
	$.touche.touchEndBody = function( e ) {
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			if (!trace) return;

			// Current event
			trace.currentEvent = e;
			trace.currentTouch = touch;
 
			// Trigger the end event on the body for anyone who's listening to the trace
			$('body').trigger('traceend-' + trace.id);
			
			// Check for click
			if (trace.max_dx == 0 && trace.max_dy == 0) $('body').trigger('traceclick-' + trace.id);
			
			$.touche.removeTrace(trace);
		}
	};
	$.touche.mouseDownBody = function( e ) {
		
		// Check for left click only
		if (e.button != 0) return;
		
		var trace = $.touche.traces[-1];
		
		if (!trace) return;
 
		// Add mousemove and mouseup listeners
		$('body').bind('mousemove', $.touche.mouseMoveBody);
		$('body').bind('mouseup', $.touche.mouseUpBody);
		
		// Trigger the start event on the body for anyone who's listening to the trace
		$('body').trigger('tracestart--1');
	};
	$.touche.mouseMoveBody = function( e ) {
		
		var trace = $.touche.traces[-1];
		
		if (!trace) return;
 
		// Update information about the trace
		trace.x = e.pageX;
		trace.y = e.pageY;
		trace.max_dx = Math.max(e.pageX - trace.sx, trace.dx);
		trace.max_dy = Math.max(e.pageY - trace.sy, trace.dy);
		trace.dx = e.pageX - trace.sx;
		trace.dy = e.pageY - trace.sy;	
		
		// Current event
		trace.currentEvent = e;
		trace.currentTouch = null;
		
		// Trigger the move event on the body for anyone who's listening to the trace
		$('body').trigger('tracemove--1');
		
	};
	$.touche.mouseUpBody = function( e ) {
		
		var trace = $.touche.traces[-1];
		
		if (!trace) return;
 
		// Current event
		trace.currentEvent = e;
		trace.currentTouch = null;
 
		// Trigger the end event on the body for anyone who's listening to the trace
		$('body').trigger('traceend--1');
		
		$.touche.removeTrace(trace);
		
		// Check for click
		if (trace.max_dx == 0 && trace.max_dy == 0) $('body').trigger('traceclick--1');
		
		// Unbind mouse event listeners on body as they are not needed
		$('body').unbind('mousemove', $.touche.mouseMoveBody);
		$('body').unbind('mouseup', $.touche.mouseUpBody);
	};

	$.touche.init = function() {
		
		// Bind the static touch listeners to touch and mouse events on the body
		$('body').bind('mousedown', $.touche.mouseDownBody);
		$('body').bind('touchstart', $.touche.touchStartBody);
		$('body').bind('touchmove', $.touche.touchMoveBody);
		$('body').bind('touchend', $.touche.touchEndBody);
	};
	
	// Initialise Touché on document load
	$($.touche.init);
	
	// This function takes a trace and a touché element and binds the element
	// listeners to that trace, meaning it will pick up all the events associated
	// with the trace.
	$.touche.applyTraceToElement = function( trace, element, data ) {
		
		// Functions to allow binding and unbinding of listeners in context
		var tracestart = function() {
			
			var existed = false;
			
			// Check that the trace isn't already listed, otherwise skip adding it twice
			for (var i in data.traces) {
				
				if (data.traces[i].id == trace.id) {
				
					existed = true;
					break;
				};
			}
			
			// Add the trace to the touches array in data
			if (!existed) {
			
				// Call the after event on the element, if there are touches
				if (data.traces.length) data.after.apply(element, [data]);
 
				data.traces.push(trace);
				
				// Increment count
				data.count++;
			}
						
			// Call the start event on the element
			data.start.apply(element, [data, trace]);
			
			// Call the before event on the element
			if (!existed) data.before.apply(element, [data]);
		};
		var tracemove = function() {
			data.move.apply(element, [data, trace]);
		};
		var traceend = function() {
			
			var existed = false;
			
			// Check that the trace exists and remove from the touches array
			for (var i in data.traces) {
				
				if (data.traces[i].id == trace.id) {
					
					// Call the after event on the element
					data.after.apply(element, [data]);
					
					existed = true;
					
					var tr = data.traces.splice(i, 1)[0];
					
					// Decrement count
					data.count--;
					
					break;
				}
			}
			
			// Call the end event on the element, if there are touches
			data.end.apply(element, [data, trace]);
			
			// Call the before event on the element
			if (data.traces.length && existed) data.before.apply(element, [data]);
			
			// Unbind the element from specific trace events
			$('body').unbind('tracestart-' + trace.id, tracestart);
			$('body').unbind('tracemove-' + trace.id, tracemove);
			$('body').unbind('traceend-' + trace.id, traceend);
			
			setTimeout(function() {
				$('body').unbind('traceclick-' + trace.id, traceclick);
			}, 0);
		};
		var traceclick = function() {
			data.click.apply(element, [data, trace]);
		};
		
		// Bind this elements start, end and move listeners to the new trace
		$('body').bind('tracestart-' + trace.id, tracestart);
		$('body').bind('tracemove-' + trace.id, tracemove);
		$('body').bind('traceend-' + trace.id, traceend);
		$('body').bind('traceclick-' + trace.id, traceclick);
	};
	
	// Listeners that handle the start of a touch bound to the specific
	// element that we want to capture movement on. These are responsible
	// for binding the touche element events to the traces that are statically
	// handled above.
	$.touche.touchStartElement = function( e ) {
		
		var t = $(this);
		
		// Get the touché data for this element
		var touche = e.data;
		
		// Iterate through touches
		for (var i = 0; i < e.originalEvent.changedTouches.length; i++) {
			
			var touch = e.originalEvent.changedTouches[i];
			
			var trace = $.touche.traces[touch.identifier];
			
			// Check whether the trace has already been created by a handler
			// of an element that is displaying above the element of this handler.
			if (!trace) {
				
				// Create a new trace
				trace = {
					id: touch.identifier,
					sx: touch.pageX,
					sy: touch.pageY,
					x: touch.pageX,
					y: touch.pageY,
					dx: 0,
					dy: 0,
					max_dx: 0,
					max_dy: 0,
					visible: touche.propagate,
					originalEvent: e,
					currentEvent: e,
					currentTouch: touch,
					target: e.currentTarget
				};
				
				// Add the trace
				$.touche.addTrace(trace);
				
			} else {
				
				// If the trace does exist, check that it is visible
				if (!trace.visible) continue;
			}
			
			// Apply the trace to the element
			$.touche.applyTraceToElement(trace, t, touche);
		}
	};
	// mousedown allows backwards-compatibility for mouse-driven input
	$.touche.mouseDownElement = function( e ) {
			
		// Check for left click only
		if (e.button != 0) return;
		
		var t = $(this);
		
		// Get the touche data for this element
		var touche = e.data;
		
		var trace = $.touche.traces[-1];
		
		// Check whether the trace has already been created by a handler
		// of an element that is displaying above the element of this handler.
		if (!trace) {
			
			// Create a new trace
			trace = {
				id: -1,
				sx: e.pageX,
				sy: e.pageY,
				x: e.pageX,
				y: e.pageY,
				dx: 0,
				dy: 0,
				max_dx: 0,
				max_dy: 0,
				visible: touche.propagate,
				originalEvent: e,
				currentEvent: e,
				currentTouch: null,
				target: e.currentTarget
			};
			
			// Add the trace
			$.touche.addTrace(trace);
			
		} else {
			
			// If the trace does exist, check that it is visible
			if (!trace.visible) return;
		}
	
		// Apply the trace to the element
		$.touche.applyTraceToElement(trace, t, touche);
	};
	
	// The touch function is called on a jQuery object
	// to give it mouse / touch behaviour
	$.fn.touche = function( options ) {
		
		// Iterate through elements
		this.each(function() {
			
			// Clone options to prevent different elements picking up the same clicks
			if (options.clone)
				options = $.extend(true, {}, options);
		});
		
		// Extend the options object with the default options
		for (var i in $.touche.options)
			if (!options[i]) options[i] = $.touche.options[i];
		
		// Bind the touchstart and mousedown listeners
		this.bind('touchstart', options, $.touche.touchStartElement);
		this.bind('mousedown', options, $.touche.mouseDownElement);
		
		// Return the element to allow for function chaining
		return this;
	};

	// Default options
	$.touche.options = {
		traces: [],
		count: 0,
		start: $.noop,
		end: $.noop,
		click: $.noop,
		move: $.noop,
		after: $.noop,
		before: $.noop,
		propagate: true,
		clone: true
	};
	
})(jQuery);