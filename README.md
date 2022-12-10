# js_learning

### Requirement

typescript: [https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/)

#### Prerequisite - (Install Dependencies)
``npm install``


### Problem Statement

- There’s a school with classes between 6th to 10th. Each class can have any number of students and each student is studying maths and science. After the final exams, the principal is looking to fetch information about the names of toppers based on average marks students have scored in Maths and science from each class to reward them. Design a program that allows principle to get this information


- The Team RCB has submitted its team or an upcoming match. The details of the team are as described in the json the end of this document
    
    - Write a test that validates that the team has only foreign players.
    - Write a test that validates that there is at least one wicket keeper.

#### Problem Statement 1- 
This code has developed in such a way that all the data is taken by terminal for example - student name, marks, test, class.

To providing data from `Terminal`-

  - class name should be in this format - `class_name`, eg- ``class_6``
  - All three test name should be in this format - `T1/2/3`, eg. for test 1- ``T1``
  - For setting marks, 1st marks is Math marks and 2nd marks is Science marks

Structure - 
```aidl
    +-- data
        +-- schoolData.json
            <In this file we are storing data related to school problem statement>
    +-- school
        +-- Class.ts
            <In this file we are doing all code related work means get marks, set marks etc...>
        +-- school.ts
            <In this file we are calling all methods>
```

#### Problem Statement 2-

  - In this problem statement, I have stored all the team data in `team.ts` file. In this problem I'm not taking any data from Terminal, all the data is pre-stored in `data/team` file.
  - `ReadTeamData` is a class, where I'm reading all the team data and sending to `teamValidation`
  - In `teamValidation`, using `console.assert` I'm doing all validation.

Structure -
```aidl
    +-- data
        +-- team.ts
            <In this file I am storing data related to team(RCB)>
    +-- ipl
        +-- ReadTeamData.ts
            <In this file I'm reading all the team data and sending to teamValidation>
        +-- teamValidation.ts
            <In this file using console.assert I'm doing all validation part>
```


#### To run `PS-1` - 
```aidl
npm run school
```
`or`
```
npx ts-node --esm school/school
```
#### To run `PS-2` - 
```aidl
npm run team
```
`or`
```
npx ts-node --esm ipl/teamValidation
```


