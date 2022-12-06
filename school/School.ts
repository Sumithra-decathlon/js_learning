import Class6 from "./Class6";
// import * as readline from 'node:readline';
// import { stdin, stdout } from 'process';
const prompt = require("prompt-sync")({ sigint: true });
const class6 = new Class6();

let flag = true;

async function main() {
    // class6.setName("kishan");
    // class6.setName("prince");
    // class6.setName("kumar");
    // class6.setMarks("kishan", "class_6", 95, 92, "T1");
    // class6.getMarks("kishan", "class_6");
    while (flag) {
        console.log("1. Add Student \n2. Set Marks \n3. Get All Students Details \n4. Get Class Details \n5. Get Student Details \n6. Get Topper \n7. Terminate \n");
        let pnt = prompt("Please share your point- ");
        switch (pnt) {
            case "1":
                var name = prompt("Please Enter Name- ");
                var className = prompt("Please Enter Class- ");
                class6.setName(name, className);
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "2":
                var name = prompt("Please Enter Name- ");
                var className = prompt("Please Enter Class- ");
                var test = prompt("Please Enter Test Name- ");
                var marks1 = prompt("Please Enter Math Marks- ");
                var marks2 = prompt("Please enter Science Marks- ");
                class6.setMarks(name, className, marks1, marks2, test);
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "3":
                class6.getAllStudentsDetails();
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "4":
                var className = prompt("Please Enter Class- ");
                class6.getClassDetails(className);
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "5":
                var name = prompt("Please Enter Name- ");
                var className = prompt("Please Enter Class- ");
                class6.getMarks(name, className);
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "6":
                var name = prompt("Please Enter Name- ");
                var className = prompt("Please Enter Class- ");
                var test = prompt("Please Enter Test Name- ");
                var marks1 = prompt("Please Enter Math Marks- ");
                var marks2 = prompt("Please enter Science Marks- ");
                class6.setMarks(name, className, marks1, marks2, test);
                console.log("..............................................................");
                console.log("                      ");
                break;
            case "7":
                // flag = false;
                class6.getTopper();
                break;
            default:
                flag = false;
                break;
        }
    }
}

main();