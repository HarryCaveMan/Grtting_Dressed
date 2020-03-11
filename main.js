const Outfit = require("./Outfit");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



const processInput = (input) => {
	try {
		if(Outfit.add(input)) {
		    process.exit(0);
	    }
	    askQuestion();
	} catch(e) {
		process.exit(1);
	}	
}


const askQuestion = () => {
	rl.question("pick an item: ",processInput);
}

askQuestion();