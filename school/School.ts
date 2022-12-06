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

// main();


function a() {
    // Online Javascript Editor for free
    // Write, Edit and Run your Javascript code using JS Online Compiler
    let RCB = {
        "name": "Royal Challengers Bangalore",
        "location": "Bangalore",
        "player": [
            {
                "name": "Faf Du Plessis",
                "country": "South Africa",
                "role": "Batsman",
                "price-in-crores": "7"
            },
            {
                "name": "Virat Kohli",
                "country": "India",
                "role": "Batsman",
                "price-in-crores": "15"
            },
            {
                "name": "Glenn Maxwell",
                "country": "Australia",
                "role": "Batsman",
                "price-in-crores": "11"
            },
            {
                "name": "Mohammad Siraj",
                "country": "Australia",
                "role": "Bowler",
                "price-in-crores": "7"
            },
            {
                "name": "Harshal Patel",
                "country": "India",
                "role": "Bowler",
                "price-in-crores": "10.75"
            },
            {
                "name": "Wanindu Hasaranga",
                "country": "Srilanka",
                "role": "Bowler",
                "price-in-crores": "10.75"
            },
            {
                "name": "Dinesh Karthik",
                "country": "India",
                "role": "Wicket-keeper",
                "price-in-crores": "5.5"
            },
            {
                "name": "Shahbaz Ahmed",
                "country": "India",
                "role": "All-Rounder",
                "price-in-crores": "2.4"
            },
            {
                "name": "Rajat Patidar",
                "country": "India",
                "role": "Batsman",
                "price-in-crores": "0.20"
            },
            {
                "name": "Josh Hazlewood",
                "country": "Australia",
                "role": "Bowler",
                "price-in-crores": "7.75"
            },
            {
                "name": "Mahipal Lomror",
                "country": "India",
                "role": "Bowler",
                "price-in-crores": "7.75"
            }
        ]
    }
    let foreigner = 0;
    let wicketKeeper = 0;
    for (const [key, value] of Object.entries(RCB.player)) {
        if(value.country!= "India"){
            foreigner++;
        }
        if(value.role== "Wicket-keeper"){
            wicketKeeper++;
        }
    }
    console.assert(foreigner <= 4, "kjskjdls");
    console.assert(wicketKeeper <= 1, "kjskjdls");

    // for (const [key, value] of Object.entries(RCB)) {
    //     console.log(key);
    //     for (const [key1, value1] of Object.entries(value)) {
    //         if (key1 == "topperName") {
    //             console.log(value1);
    //         }
    //         if (key1 == "average") {
    //             console.log(value1);
    //         }
    //     }
    //     console.log("...................")
    // }
    // for (const [key, value] of Object.entries(school)) {
    //     let marks = 0;
    //     let name = "";
    //     for (const [key1, value1] of Object.entries(value)) {
    //         let sum = 0;
    //         if (typeof value1 == 'object') {
    //             for (const [key2, value2] of Object.entries(value1)) {
    //                 sum += Number(value2);
    //             }
    //             marks = Math.max(marks, sum);
    //             if (sum == marks) {
    //                 name = String(key1);
    //             }
    //         }
    //         if (key1 == "topperName") {
    //             // console.log(value.topperName)
    //             Object.assign(value, { topperName: name });
    //         }
    //         if (key1 == "average") {
    //             Object.assign(value, { average: marks });
    //         }
    //     }
    // }

    // for (const [key, value] of Object.entries(school)) {
    //     console.log(key);
    //     for (const [key1, value1] of Object.entries(value)) {
    //         if (key1 == "topperName") {
    //             console.log(value1);
    //         }
    //         if (key1 == "average") {
    //             console.log(value1);
    //         }
    //     }
    //     console.log("...................")
    // }
    // console.log("Welcome to Programiz!");
}

a();

