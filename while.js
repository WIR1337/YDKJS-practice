var i = 0;

// цикл `while..true` будет выполняться вечно, не так ли?
while (true) {
	// прервать цикл?
	if ((i < 9) === false) {
		break;
	}

	console.log( i );
	++i;
}
console.log(i)

while (numOfCustomers > 0) {
	console.log( "Чем я могу вам помочь?" );

	// помощь покупателю...

	numOfCustomers = numOfCustomers - 1;
}

// против:

do {
	console.log( "Чем я могу вам помочь?" );

	// помощь покупателю...

	numOfCustomers = numOfCustomers - 1;
} while (numOfCustomers > 0);