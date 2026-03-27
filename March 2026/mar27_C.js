/**
 * JavaScript Closure
 * A closure happens when a function remembers variables from its outer scope even after the outer function has finished running.
 *
 * In simple words:
 * A function can “carry” data from the place where it was created.
 * That means even if the outer function is done, the inner function still has access to its variables.
 *
 * Every time you create a function inside another function, you automatically create a closure. JavaScript does this behind the scenes.
 */

const outer = () => {
	const name = 'Chirag';

	const inner = () => {
		console.log(name); // Chirag
	};

	return inner;
};

const result = outer();
result();

// Closure with Counter Example
const makeCounter = () => {
	let count = 0;

	const increment = () => {
		count++;
	};
	const decrement = () => {
		count--;
	};
	const getCount = () => {
		return count;
	};

	return {
		increment,
		decrement,
		getCount,
	};
};

const counter = makeCounter();

counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3

console.log(counter.getCount());

// Separate Closures Keep Separate Memory
const counter1 = makeCounter();
const counter2 = makeCounter();

counter1.increment(); // 1
counter1.increment(); // 2
console.log('counter1.getCount()', counter1.getCount());

counter2.increment(); // 1
counter2.increment(); // 2
counter2.decrement(); // 1

console.log('counter2.getCount()', counter2.getCount());

// Closure for Private Variable
// Closure is often used to hide data
function bankAccount() {
	let balance = 1000;

	return {
		deposit(amount) {
			balance += amount;
		},

		withdraw(amount) {
			if (amount > balance) {
				console.log('Not enough funds!');
			} else {
				balance -= amount;
			}
		},

		getBalance() {
			return balance;
		},
	};
}

const account = bankAccount();

account.deposit(500);
console.log('account.balance', account.getBalance());
account.withdraw(200);
console.log('account.balance', account.getBalance());
account.withdraw(2000);
console.log('account.balance', account.getBalance());

// Closures let you create custom functions on the fly.
const multiplyBy = (factor) => {
	return (number) => {
		return number * factor; // 'factor' is remembered via closure
	};
};

const double = multiplyBy(2);
const triple = multiplyBy(3);
const times10 = multiplyBy(10);

console.log('double(5) 2 * 5 = ', double(5)); // Output: 10
console.log('triple(5) 3 * 5 = ', triple(5)); // Output: 15
console.log('times10(5) 10 * 5 = ', times10(5)); // Output: 50

// Closure inside setTimeout
const greet = () => {
	let name = 'JavaScript';

	setTimeout(() => {
		console.log(name);
	}, 1000);
};

greet();
