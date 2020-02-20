import { displayLog, updateDisplay } from './utils';
// import { Subscription } from 'rxjs/internal/Subscription';
import { Observable, map, mapTo, filter, first , last, skipt, reduce, take, takeWhile, takeLast, tap, scan, startWith, endWith, distinct, distinctUntilChanged, pairwise, share, sampleTime, auditTime, throttleTime, delay, bufferTime, debounceTime} from 'rxjs/operators';
import { fromEvent, interval, of, range, from, timer, Subject, BehaviorSubject, zip, merge } from 'rxjs';

export default () => {
	/*
	// Create observer
	const hello = Observable.create(function(observer){
		observer.next("Hello");
		setTimeout(()=>{
			observer.next("World");
			observer.complete();
		}, 2000);
	});

	const observer = {
		next: event => displayLog(event),
		error: err => console.err("[ERR]", err),
		complete: () => displayLog("[DONE]")
	}

	const subscribe = hello.subscribe(observer);
	const subscribe2 = hello.subscribe(observer);
	subscribe.unsubscribe();
	*/

	/*
	// From function

	const myArray = [1,2,3,4,5];
	const myString = "Helo World"
	const myPromise = new Promise(resolve => setTimeout(() => {
		resolve("Hello World");
	}, 2000));

	// const observable = from(myArray);
	// const observable = from(myString);
	const observable = from(myPromise);
	const subscription = observable.subscribe(val => displayLog(val));
	*/

	/*
	// Of & range functions

	const source = of(1,2,3,4,5,6);
	const source2 = of(
		[1,2,3],
		"Hello World",
		{foo:"bar"},
		function sayHellow() {
			return "Hi!"
		}
	)

	const source3 = range(3,10); // Number range starts at 3 and it has 10 numbers

	const subscription = source3.subscribe( data => displayLog(data));
	*/

	/*
	// Interval & timer functions

	const source = interval(500);
	//interval return a infinite sequence. It need finish subcription 
	const subscription = source.subscribe(data => displayLog(data));

	timer(3000).subscribe(() => subscription.unsubscribe())
	// setTimeout(() => subscription.unsubscribe(), 3000);

	const source2 = timer(4000, 100); // start at 4000ms and work for 100ms
	const subscription2 = source2.subscribe(data => displayLog(`2 - ${data}`));

	timer(6000).subscribe(() => subscription2.unsubscribe());
	*/

	/*
	// fromEvent function

	const actionBtn = document.getElementById('action-btn');
	const source = fromEvent(actionBtn, 'click');

	source.subscribe(event => {
		displayLog(`click event at pos (${event.x}, ${event.y})`);
	})

	fromEvent(document, 'click').subscribe(event => {
		console.log(event);
	})
	*/

	/*
	//mapTo operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		mapTo('CLICK')
	);
	const subcription = click$.subscribe(data => displayLog(data));
	*/

	/*
	//map operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]) // Return the square os the grid clicked
	);
	const subcription = click$.subscribe(data => displayLog(data));
	*/

	/*
	//filter operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), // Return the square os the grid clicked
		filter(val => (val[0] + val [1]) % 2 != 0)
	);
	const subcription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Tap operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		tap(val => console.log('before: ', val)), //read the data stream and generate functions before it
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]),
		tap(val => console.log(`after: (${val})`))
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// First operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		first(val => val[0] > 3) // Return the value of the first time that event it's done with this condition
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Take operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		take(4) // Return the value of a number of events
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// TakeWhile operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		takeWhile(([col, row]) => col > 3) // Return the value of a number of events
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Last operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		takeWhile(([col, row]) => col > 3),
		tap(val => console.log(`valid in takeWhile: [${val}]`)),
		last() // Return the last value
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// TakeLast operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		takeWhile(([col, row]) => col > 3),
		tap(val => console.log(`valid in takeWhile: [${val}]`)),
		takeLast(3) // Return the last (valid because the tap) three values
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Skip operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]), 
		tap(val => console.log(`cell: [${val}]`)),
		skip(5) //Only for 5 times
	);
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Reduce operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]),
		takeWhile(([col, row]) => col !=0),
		tap(val => console.log(`cell: [${val}]`)),
		reduce((accumulated, current) => {
			return {
				clicks: accumulated.clicks + 1,
				cells: [...accumulated.cells, current]
			}, {clicks: 0, cells:[]}
		})
	);
	const subscription = click$.subscribe(data => displayLog(`${data.clicks} clicks: ${JSON.stringify(data.cells)}`));
	*/

	/*
	// StartWith & endWidth operators

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]),
		takeWhile(([col, row]) => col !=0),
		tap(val => console.log(`cell: [${val}]`)),
		startWith("grid dimesios: ", "10x10"),
		endWith("game finished", "bye!") //when click in the first column and string is closed
		
	);
	const subscription = click$.subscribe(data => displayLog(data));
 */

 /*
 // Distinct operator

 const grid = document.getElementById('grid');
 const click$ = fromEvent(grid, 'click').pipe(
	 map(val => [
		 Math.floor(val.offsetX / 50),
		 Math.floor(val.offsetY / 50)
	 ]),
	 takeWhile(([col, row]) => col !=0),
	 tap(val => console.log(`cell: [${val}]`)),
	 distinct(([col, row]) => `${col} - ${row}`) // let pass only not repeated value
 );

 const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// DistinctUntilChanged operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]),
		takeWhile(([col, row]) => col !=0),
		tap(val => console.log(`cell: [${val}]`)),
		distinctUntilChanged( // let pass only not inmediatly repeated value
			(cell1, cell2) =>
			(cell1[0] == cell2[0]) &&
			(cell1[1] == cell2[1])
		) 
	);
 
	const subscription = click$.subscribe(data => displayLog(data));
	*/

	/*
	// Pairwise operator for pair of consecutive events

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt)),
		pairwise(),
		tap(([previus, current]) => {
			updateDisplay(current > previus ? 'DESC' : 'ASC');
		}),
		map(([previus, current]) => current)
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
*/

/*
	// Share operator for share only one instance with all its subscriptios

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
				const docHeight = docElement.scrollHeight - docElement.clientHeight;
				return (evt / docHeight) * 100;
		}),
		share()
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
	
	const subscription2 = scrollProgress$.subscribe(
		val => updateDisplay(`${ Math.floor(val)} %`)
	)
*/

/*
	// Hot observer Subject 

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	const scrollProgressHot$ = new Subject();
	scrollProgress$.subscribe(scrollProgressHot$)
	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgressHot$.subscribe(updateProgressBar);

	const subscription2 = scrollProgressHot$.subscribe(
		val => updateDisplay(`${ Math.floor(val)} %`)
	);

	scrollProgressHot$.next(0);
*/

/*
	// Hot observer BehaviorSubject (has initial state & last value)

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	const scrollProgressHot$ = new BehaviorSubject(0);
	scrollProgress$.subscribe(scrollProgressHot$)
	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgressHot$.subscribe(updateProgressBar);

	const subscription2 = scrollProgressHot$.subscribe(
		val => updateDisplay(`${ Math.floor(val)} %`)
	);

	console.log("scroll initial state: ", scrollProgressHot$.value);
*/

/*
	// SampleTime operator 

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		tap(event => console.log("scroll: ", event)),
		sampleTime(50),
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
*/

/*
	// AuditTime operator add a little delay when it recibes a evet

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		tap(event => console.log("scroll: ", event)),
		auditTime(50),
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
*/

/*
	// ThrottleTime operator stop to hear the event while x time (take care because it dont recibe the last result)

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		tap(event => console.log("scroll: ", event)),
		throttleTime(50),
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		})
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
*/

/*

	// Delay operator 

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		}),
		delay(500)
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
*/

/*
	// BufferTime operator accumule values and show them in array

	const progressBar = document.getElementById('progress-bar');
	const docElement = document.documentElement;

	//function to update progress bar width on view
	const updateProgressBar = (percentage) => {
		progressBar.style.width = `${percentage}%`;
	}

	//observable that returns scroll (from top) on scroll events
	const scroll$ = fromEvent(document, 'scroll').pipe(
		map(() => docElement.scrollTop),
		tap(evt => console.log("[scroll]: ", evt))
	);

	//observable that returns the amount of page scroll progress
	const scrollProgress$ = scroll$.pipe(
		map(evt => {
			const docHeight = docElement.scrollHeight - docElement.clientHeight;
			return (evt / docHeight) * 100;
		}),
		bufferTime(50, 1000),
		tap(event => console.log("[buffer]: ", event))
	)

	//subscribe to scroll progress to paint a progress bar
	const subscription = scrollProgress$.subscribe(updateProgressBar);
	*/

	// DebounceTime operator

	/*
	const inputBox = document.getElementById('input-box');
	const inputSrc$ = fromEvent(inputBox, "input").pipe(
		debounceTime(300),
		map( event => event.target.value)
	)

	inputSrc$.subscribe(displayLog);
	*/
	
	
	// // Zip function
	// /** init canvas and context reference  */
	// const canvas = document.getElementById('drawboard');
	// const ctx = canvas.getContext('2d');

	// /** method to draw a line in canvas  */
	// const drawLine = (initCoords, endCoords) => {
	// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// 	ctx.beginPath();
	// 	ctx.moveTo(initCoords.x, initCoords.y);
	// 	ctx.lineTo(endCoords.x, endCoords.y);
	// 	ctx.strokeStyle = 'black';
	// 	ctx.lineWidth = 2;
	// 	ctx.stroke();
	// 	ctx.closePath();
	// }

	// /** helper method to retrieve local coords from click */
	// const getLocalClickCoords = (event, parent) =>{
	// 	return {
	// 		x: event.clientX - parent.offsetLeft,
	// 		y: event.clientY - parent.offsetTop,
	// 	}
	// }

	// /** observable from canvas mouse down events */
	// const mouseStart$ = fromEvent(canvas, 'mousedown').pipe(
	// 	map(event => {
	// 		return {
	// 			label: 'start',
	// 			coords: getLocalClickCoords(event, canvas)
	// 		}
	// 	}));

	// /** observable from canvas mouse up events */
	// const mouseEnd$ = fromEvent(canvas, 'mouseup').pipe(
	// 	map(event => {
	// 		return {
	// 			label: 'end',
	// 			coords: getLocalClickCoords(event, canvas)
	// 		}
	// 	}));

	// /** observable from canvas mouse move events */
	// const mouseMove$ = fromEvent(canvas, 'mousemove').pipe(
	// 	map(event => {
	// 		return {
	// 			label: 'drawing',
	// 			coords: getLocalClickCoords(event, canvas)
	// 		}
	// 	}));        

	// //TODO: draw current line
	// 	const drawLine$ = zip(mouseStart$, mouseEnd$).pipe(
	// 		tap(console.log),
	// 		map(([start, end]) => {
	// 			return {
	// 				origin: start.coords,
	// 				end: end.coords
	// 			}
	// 		})
	// 	);

	// 	drawLine$.subscribe(data => drawLine(data.origin, data.end));
	

	// Merge function
	/** init canvas and context reference  */
	const canvas = document.getElementById('drawboard');
	const ctx = canvas.getContext('2d');

	/** method to draw a line in canvas  */
	const drawLine = (initCoords, endCoords) => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();
		ctx.moveTo(initCoords.x, initCoords.y);
		ctx.lineTo(endCoords.x, endCoords.y);
		ctx.strokeStyle = 'black';
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.closePath();
	}

	/** helper method to retrieve local coords from click */
	const getLocalClickCoords = (event, parent) =>{
		return {
			x: event.clientX - parent.offsetLeft,
			y: event.clientY - parent.offsetTop,
		}
	}

	/** observable from canvas mouse down events */
	const mouseStart$ = fromEvent(canvas, 'mousedown').pipe(
		map(event => {
			return {
				label: 'start',
				coords: getLocalClickCoords(event, canvas)
			}
		}));

	/** observable from canvas mouse up events */
	const mouseEnd$ = fromEvent(canvas, 'mouseup').pipe(
		map(event => {
			return {
				label: 'end',
				coords: getLocalClickCoords(event, canvas)
			}
		}));

	/** observable from canvas mouse move events */
	const mouseMove$ = fromEvent(canvas, 'mousemove').pipe(
		map(event => {
			return {
				label: 'drawing',
				coords: getLocalClickCoords(event, canvas)
			}
		}));        

	//TODO: draw current line
	const computeDrawState = (prevState, evet) => {
		switch(prevState.label){
			case 'init':
			case 'end':
				if(event.label == 'start') {
					return {origin:event.coords, ...event}
				}
				break;
			case 'start':
			case 'drawing':
				return {origin: prevState.origin, ...event}
		};
		return prevState;
	};

	const drawLine$ = merge(mouseStart$, mouseMove$, mouseEnd$).pipe(
		scan(computeDrawState, {label: 'init'}),
		filter(data => data.origin && data.coords),
		distinctUntilChanged(),
		tap(console.log)
	)

		drawLine$.subscribe(data => drawLine(data.origin, data.coords));
}