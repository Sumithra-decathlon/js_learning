# js_learning

### Problem Statement

- There’s a school with classes between 6th to 10th. Each class can have any number of students and each student is studying maths and science. After the final exams, the principal is looking to fetch information about the names of toppers based on average marks students have scored in Maths and science from each class to reward them. Design a program that allows principle to get this information


- The Team RCB has submitted its team or an upcoming match. The details of the team are as described in the json the end of this document
    
    - Write a test that validates that the team has only foreign players.
    - Write a test that validates that there is at least one wicket keeper.

#### Problem Statement 1- 
This code has developed in such a way that all the data is taken by terminal for example - student name, marks, test, class.

Structure - 
```aidl
    +-- data
        +-- schoolData.json
        <In this package we are storing data related to school problem statement>
    +-- school
        +-- Class.ts
        <In this package we are doing all code related work means get marks, set marks etc...>
        +-- School.ts
        <This is main package, in this we are calling all methods>
```

