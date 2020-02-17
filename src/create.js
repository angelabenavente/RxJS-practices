import { displayLog } from './utils';
// import { Observable } from 'rxjs';
// import { from } from 'rxjs';
// import { of, range } from 'rxjs';
// import { Subscription } from 'rxjs/internal/Subscription';
// import { interval, timer } from 'rxjs';
// import { mapTo } from 'rxjs/operators';
// import { map } from 'rxjs/operators';
// import { map, filter } from 'rxjs/operators';
// import { map, tap } from 'rxjs/operators';
// import { map, first } from 'rxjs/operators';
// import { map, take } from 'rxjs/operators';
// import { map, takeWhile } from 'rxjs/operators';
// import { map, takeWhile, tap, last } from 'rxjs/operators';
// import { map, takeWhile, tap, takeLast } from 'rxjs/operators';
// import { map, tap, skip } from 'rxjs/operators';
// import { map, takeWhile, tap, reduce} from 'rxjs/operators';
import { map, takeWhile, tap, scan, startWith, endWith, distinct, distinctUntilChanged, pairwise, share} from 'rxjs/operators';

import { fromEvent, Subject, BehaviorSubject } from 'rxjs';
import { updateDisplay } from './utils';

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
	// Hot observable Subject 

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

	// Hot observable BehaviorSubject (has initial state & last value)

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

}