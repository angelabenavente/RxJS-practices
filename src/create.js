import { displayLog } from './utils';
// import { Observable } from 'rxjs';
// import { from } from 'rxjs';
// import { of, range } from 'rxjs';
// import { Subscription } from 'rxjs/internal/Subscription';
// import { interval, timer } from 'rxjs';
// import { mapTo } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

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

	//map operator

	const grid = document.getElementById('grid');
	const click$ = fromEvent(grid, 'click').pipe(
		map(val => [
			Math.floor(val.offsetX / 50),
			Math.floor(val.offsetY / 50)
		]) // Return the square os the grid clicked
	);
	const subcription = click$.subscribe(data => displayLog(data));

}