import { displayLog } from './utils';
//import { Observable } from 'rxjs';
import { from } from 'rxjs';

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
}