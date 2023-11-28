console.log("working")
const[,,configPath]=process.argv;
function calculate(num1,num2,operation){
    switch(operation){
        case "add":
            return console.log(num1+num2);
            case "sub":
            return console.log(num1-num2);
            case "mul":
            return console.log(num1*num2);
            case "div":
            return console.log(num1/num2);
            default:
                console.log("enter the right operation")
    }
}
//calculate(parseInt(n1),parseInt(n2),op)

import { readFile, writeFile } from "fs";//file systm access

// reading a file
readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
      console.log("Error Occured :", err);
    } else {
      console.log(data);
    }
  });
//write
  const content = "This text file is written in nodejs";
  writeFile("./node.txt", content, (err) => {
    if (err) {
      console.log("Error Occured :", err);
    } else {
      console.log("Written successfully");
    }
  });
  
//   const appendContent = `\n New line added in a file`;
//   fs.appendFile("./node.txt", appendContent, (err) => {
//     if (err) {
//       console.log("error", err);
//     } else {
//       console.log("file updated successfully");
//     }
//   });
  
  // delete a file
//   fs.unlink("./sample.txt", (err) => {
//     if (err) {
//       console.log("error", err);
//     } else {
//       console.log("file deleted successfully");
//     }
//   });

  // read the config files
 readFile(configPath,"utf-8",(err, data) => {
    if (err) {
      console.log("Error Occured :", err);
    } else {
      console.log(data);
      const config=JSON.parse(data);
      console.log(config);
    }
});
   