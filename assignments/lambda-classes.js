// CODE here for your Lambda Classes

class PersonParent {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class InstructorChild extends PersonParent {
    constructor(ChildAttributes) {
        super(ChildAttributes);
        this.specialty = ChildAttributes.specialty;
        this.favLanguage = ChildAttributes.favLanguage;
        this.catchPhrase = ChildAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

// variable for test
const testinstructor = new InstructorChild({
    name: "Jay",
    age: 19,
    location: "LA",
    gender: "male",
    specialty: "coding",
    favLanguage: "JS",
    catchPhrase: "This is a test run"
});
//end variable for test

class StudentChild extends PersonParent {
    constructor(ChildAttributes) {
        super(ChildAttributes);
        this.previousBackground = ChildAttributes.previousBackground;
        this.className = ChildAttributes.className;
        this.favSubjects = ChildAttributes.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

// start variable for studentchild

const teststudentchild = new StudentChild ({
    name: "Jay",
    age: 19,
    location: "LA",
    gender: "male",
    previousBackground: "C#",
    className: "web17",
    favSubjects: ["CSS", "JS", "HTML"]
})

// end test for studentchild

class ProjectManagersChild extends InstructorChild {
    constructor(ChildAttributes) {
        super(ChildAttributes);
        this.gradClassName = ChildAttributes.gradClassName;
        this.favInstructor = ChildAttributes.favInstructor;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @${channel} standy times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}


// start variable for ProjectManagerChild
const testpm = new ProjectManagersChild ({
    name: "Jay2",
    age: 19,
    location: "LA",
    gender: "male",
    specialty: "coding",
    favLanguage: "JS",
    catchPhrase: "This is a test run",
    gradClassName: "WEB17" ,
    favInstructor: "Kevin"
})
// end variable for ProjectManagerChild



// test for instructor speak
console.log(testinstructor.speak());
// end test for instructor speak

// test for instructor demo
console.log(testinstructor.demo("JS"));
// end test for instructor demo

// test for instructor grade
console.log(testinstructor.grade(teststudentchild, "CSS"));
// end test for instructor grade

// test for student listsSubjects
console.log(teststudentchild.listsSubjects());
// end test for student listsSubjects

// test for student PRAssignment
console.log(teststudentchild.PRAssignment("HTML"));
// end test for student PRAssignment

// test for student sprintChallenge
console.log(teststudentchild.sprintChallenge("JavaScript"));
// end test for student sprintChallenge

// test for PM standup
console.log(testpm.standup("WEB17HOME"));
// end test for PM standup

// test for PM debugsCode
console.log(testpm.debugsCode(teststudentchild, "JS"));
// end test for PM debugsCode
