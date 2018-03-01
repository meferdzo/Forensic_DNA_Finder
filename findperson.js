console.log("I'm connected");
document.getElementById("findbtn").addEventListener("click", findSuspect);

let dnaSequence = "HHHKLJ140L98IHYYYN";
let suspect = "";
let suspectname = "";
let suspectstring = "";
let currentName = "";

let suspects = {
  "John Novak": {
    "hair": "black",
    "eyes": "green",
    "race": "asian",
  },
  "Vin Diesel": {
    "hair": "blonde",
    "eyes": "brown",
    "race": "caucasian",
  },
  "Guy Fawkes": {
    "hair": "black",
    "eyes": "brown",
    "race": "hispanic",
  }
};

let suspectstest = {
  "John Novak": {
    "hair": "brown",
    "eyes": "black",
    "race": "hispanic",
  },
  "Vin Diesel": {
    "hair": "blonde",
    "eyes": "brown",
    "race": "caucasian",
  },
  "Guy Fawkes": {
    "hair": "black",
    "eyes": "brown",
    "race": "hispanic",
  }
};


let legend = {
  "hair": {
    "brown": "HHHKLJ",
    "black": "HHHKLI",
    "blonde": "HHLH1L",
    "white": "HHLH2L"
  },
  "eyes": {
    "black": "140L98",
    "green": "140A98",
    "brown": "140A88",
    "blue": "140L97"
  },
  "race": {
    "asian": "1HYYYN",
    "hispanic": "IHYYYN",
    "caucasian": "IHYYNN",
  }
};


function findSuspect() {
  for (let key in legend) {
    for (let key2 in legend[key]) {
      if (dnaSequence.indexOf(legend[key][key2]) !== -1) {
        //console.log( `Sequence ${dnaSequence} is in ${legend[key][key2]}.` );
        //console.log(key, key2, legend)
        suspect = `${suspect} ${key2}`;
      }
    }
  }

  for (let n in suspectstest) {
    for (let nval in suspectstest[n]) {
      suspectstring = `${suspectstring} ${n, nval, suspectstest[n][nval]}`;

      //console.log(`****${suspect}****`);
      //console.log(`++++${suspectstring}++++`);

      if (suspectstring == suspect) {
        currentName = n + currentName;
        //console.log(currentName);
      }
    }
  }
  console.log(`DNA belongs to ${currentName}`);
  document.getElementById("result").innerHTML= `DNA belongs to ${currentName}`;
}
