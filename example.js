//file based , Build In, Third-Party

const fs =require("fs");

fs.readFile("./exampleAns.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    //  100000
    console.log(data);
});

console.log("i'm first");
