#!/usr/bin/env ts-node-script
import data from "../data/schoolData.json";
class Class {
    // name: String;
    setName(name: string, className: string) {
        // this.name = name;
        let flag = false;
        for (const [key, value] of Object.entries(data)) {
            if (key == className) {
                flag = true;
                Object.assign(value, { [`${name}`]: { T1: { "Math": 0, "Science": 0 }, T2: { "Math": 0, "Science": 0 }, T3: { "Math": 0, "Science": 0 } } });
                console.log("Student added successfully!")
                break;
            }
        }
        if (flag == false) {
            console.log(`Class name "${className}" not found. Please provide correct class name`);
        }
        return flag;
        // Object.assign(data.class_6, { [`${name}`]: { T1: { "Math": 0, "Science": 0 }, T2: { "Math": 0, "Science": 0 }, T3: { "Math": 0, "Science": 0 } } });
    }
    setMarks(name: string, className: string, marks1: number, marks2: number, test: string) {
        let flag = false;
        for (const [key, value] of Object.entries(data)) {
            if (key == className) {
                for (let [key1, value1] of Object.entries(data.class_6)) {
                    if (key1 == name) {                                 //key1 = name
                        for (let [key2, value2] of Object.entries(value1)) {
                            if (key2 == test) {
                                Object.assign(value2, { Math: `${marks1}`, Science: `${marks2}` });
                                console.log("Marks added successfully!")
                                flag = true;
                                break;
                            }
                        }
                        if (flag == false) {
                            console.log(`Given test name "${test} is not correct, Please provide correct test name`);
                            break;
                        }
                    }
                }
                if (flag == false) {
                    console.log(`Give name "${name} not present in class, Please provide correct student name`);
                    return flag;
                }
            }
        }
        if (flag == false) {
            console.log(`Class name "${className}" not found. Please provide correct class name`);
        }
        return flag;
    }
    getMarks(name: string, className: string) {
        let flag = false;
        for (const [key, value] of Object.entries(data)) {
            if (key == className) {
                for (const [key1, value1] of Object.entries(value)) {
                    if (key1 == name) {                                 //key1 = name
                        for (const obj of Object.entries(value1)) {
                            console.log("Marks obtained by " + name + " in " + JSON.stringify(obj));
                        }
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    console.log(`Give name "${name} not present in class, Please provide correct student name`);
                    return flag
                }
            }
        }
        if (flag == false) {
            console.log(`Class name "${className}" not found. Please provide correct class name`);
        }
        return flag;
    }
    getAllStudentsDetails() {
        console.log(data);
    }
    getClassDetails(className: string) {
        let flag = false;
        for (const [key, value] of Object.entries(data)) {
            if (key == className) {
                console.log(value);
                flag = true;
                break;
            }
        }
        if (flag == false) {
            console.log(`Class name "${className}" not found. Please provide correct class name`);
        }
        return flag;
    }
    getTopper(){
        let topFromClass6, topFromClass7, topFromClass8, topFromClass9, topFromClass10;
        let percentageFromClass6, percentageFromClass7, percentageFromClass8, percentageFromClass9, percentageFromClass10;
        let topper = {
            "class_6": null,
            "class_7": null,
            "class_8": null,
            "class_9": null,
            "class_10": null,
        }
        let i=6;
        for (const [key, value] of Object.entries(data)) {
            // let obj = {`class_${i}`:{}};
            if (key == `class_${i}`) {
                let average = 0;
                let topperName = "";
                for (const [key1,value1] of Object.entries(value)) {
                    let sum=0;
                    let count = 0;
                    for(const [key2,value2] of Object.entries(value1)){
                        sum += Number(value2.Math);
                        sum += Number(value2.Science);
                        count++;
                    }
                    sum = Math.round(sum/count);
                    average = Math.max(sum,average);
                    if(average==sum){
                        topperName = String(key1);
                    }
                }
                Object.assign(topper,{[`class_${i}`]:{name: topperName, average: average}});
                i++;
            }
        }
        console.log("Topper from School: "+JSON.stringify(topper));
    }

}
export default Class;