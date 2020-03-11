const Outfit = require("./Outfit");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const runType = process.argv[2];

const processInputRecursive = (input) => {
	try {
		if(Outfit.add(input)) {
		    process.exit(0);
	    }
	    askQuestionRecursive();
	} catch(e) {
		process.exit(1);
	}	
}

const processInputs = (inputs) => {
	items = inputs.split(" ");
	items.forEach(item => {
		try {
			if(Outfit.add(item)) {
				console.log(item);
		    	process.exit(0);
	        }
		} catch(e) {
			process.exit(1);
		}
	});
	console.log("fail");

}


const askQuestionRecursive = () => {
	rl.question("pick an item: ",processInputRecursive);
}

const askQuestion = () => {
	rl.question("enter items: ",processInputs);
}


if(runType === "poll") {
	askQuestionRecursive();
} else {
    askQuestion()
}