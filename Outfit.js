
const items = {
	"1":"hat",
	"2":"pants",
	"3":"shirt",
	"4":"shoes",
	"5":"socks",
	"6":"leave"
};

const dependencies = {
	"1":["shirt"],
	"2":[],
	"3":[],
	"4":["pants","socks"],
	"5":[],
	"6":["socks","pants","shirt","shoes"]  //the obvious right order
};

const checkDependencies = (entry) => {
	let deps = dependencies[entry];
	if (wearing.indexOf(entry)>-1) {
		wearing.push("fail");
		console.log(wearing.join(" "));
		throw new Error("fail");
	}
	deps.forEach(dep => {
		if(wearing.indexOf(dep)<0) {
			wearing.push("fail");
			console.log(wearing.join(" "));
			throw new Error("fail");
		}
	})
}

const put_on = (entry) => {
	wearing.push(items[entry]);
	didLeave = entry === "6";
}

let didleave = false;
let wearing = [];

Outfit = {
    add : (entry) => {
       checkDependencies(entry);
       put_on(entry);
       if(didLeave){
           console.log(wearing.join(" "));
       }
       return didLeave;
    }
}

module.exports = Outfit;