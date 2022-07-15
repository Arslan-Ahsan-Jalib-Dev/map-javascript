//******** Map method javascript ****************//
/* Number Multiple by 3 with simple for loop and with map example */
//* using for loop *//
var original_array = [3, 4, 5, 6];
var triple_array = [];
for (i = 0; i < original_array.length; i++) {
    triple_array[i] = original_array[i] * 3;
}
//console.log(triple_array);
//* using map method *//

var result = original_array.map((val, index) => {
    return val * 3;
});
//console.log(result);


/* 1) square root example  */

var arr = [4, 9, 16, 25];

var result = arr.map((val, index) => {
    return Math.sqrt(val);
});
//console.log(result);

/* 2) square root example  */
var result = arr.map((val, index) => {
    var a = val * 10;
    return a;
});
//console.log(result);

/* 3) Return Full Name using plus operator  */

const persons = [
    {
        firstname: "Malcom",
        lastname: "Reynolds"
    },
    {
        firstname: "Kaylee",
        lastname: "Frye"
    },
    {
        firstname: "Jayne",
        lastname: "Cobb"
    }
];

var result = persons.map((val, index) => {
    var a = val.firstname + " " + val.lastname;
    return a;
});
//console.log(result);

/* 4) Return Full Name return like html */

var result = persons.map((val, index) => {
    var a = `<h3>${val.firstname},${val.lastname}</h3>`;
    return a;
});
//console.log(result);

/* 5) Multiply each number with 50 store it in this argument and use it (note this not works in arrow functions in map example) */

let arr1 = [2, 3, 5, 7]

var result = arr1.map(function (element, index, array) {
    var a = element * this;
    return a;
}, 50);
//console.log(result);

/* 6) Add mth before eact value in the array */

var code = [101, 102, 103, 104, 105];

var result = code.map((val, index) => {
    var a = `mth${val}`;
    return a;
});
//console.log(result);

/* 7) Calculate the length of each element */

const names = ["Bilbo", "Gandalf", "Nazgul"];

var result = names.map((val, index) => {

    return val.length;
});
//console.log(result);

/*One of the really commons use cases for the map() function on the 
  front-end is to wrap data in HTML:
*/
/* 8) Map through each object in the array and get  the full name and age of the person
      and display them on page
*/

let users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 17
    },
    {
        firstName: "Stephen",
        lastName: "Matt",
        age: 16
    },
    {
        firstName: "Abigail",
        lastName: "Susu",
        age: 15
    }
];

var my_content = document.getElementById("wrapper");

var contained_html = users.map((val, index) => {
    var full_name_age =
        `
                       <h3>${val.firstName} ${val.lastName}</h3>
                       <p>${val.age}</p>`;
    return full_name_age;
});
//my_content.innerHTML=contained_html;

/* 9) marks greater than 40 name and result status pass else fail */

const mathStudents = [
    {
        name: 'Jane',
        score: 60,
        enrollmentYear: 2019
    },
    {
        name: 'Emmy',
        score: 40,
        enrollmentYear: 2020
    },
    {
        name: 'John',
        score: 43,
        enrollmentYear: 2019
    },
    {
        name: 'Linda',
        score: 20,
        enrollmentYear: 2019
    }
]

var result = mathStudents.map((val, index) => {
    var student_record={};
    student_record.name=val.name;
    if (val.score > 40) {
         student_record.status="Pass";
         
    } else {
         student_record.status="Fail";
    }
    return student_record;
});
//console.log(result);

/* 10) Reverse array and multiply it with 2 */
/* reverse method reverse the array element it will  change the orignal array */

const numbers = [21, 32, 43, 54, 65];

var result = numbers.reverse().map((val, index) => {
    return val * 2;
});
//console.log(result);

/* 11) Iterate on object value and add 5 to it */
const scores = {
    math: 50,
    English: 70,
    Physics: 45,
    Agric: 60
};

var result = Object.values(scores).map((val, index) => {
    return val + 5;
});
//console.log(result);

/* 12) Return Name with net Earning of Employees (not a suitable solution for map method because we ar not geting out put from return array*/

const employees = [
    {
        name: "Adam",
        salary: 5000,
        bonus: 500,
        tax: 1000
    },
    {
        name: "Noah",
        salary: 8000,
        bonus: 1500,
        tax: 2500
    },
    {
        name: "Fabiano",
        salary: 1500,
        bonus: 500,
        tax: 200
    },
    {
        name: "Alireza",
        salary: 4500,
        bonus: 1000,
        tax: 900
    },
];

var result = employees.map((val, index) => {
    var employe_details={};
    employe_details.name = val.name;
    employe_details.netsalery = (val.salary + val.bonus) - val.tax;
    return employe_details;
});
//console.log(result);

/* 13) marks greater than 40 pass else fail return with complete details (not a suitable solution for map method because we ar not geting out put from return array)*/
var result = mathStudents.map((val, index) => {
    student_info={};
    student_info=val;
    if (val.score > 40) {
        student_info.status="pass";
    } else {
        student_info.status="fail";
    }
    return student_info;
});
//console.log(result);

/* 14) Given the array of radius of circle calculate the area corrosponding to each element*/

/* soloving the example using simple for loop  */

var radius_array=[10,30,50];
var area_arry=[];
for(i=0;i<radius_array.length;i++){
    area=Math.floor(Math.PI * radius_array[i] * radius_array[i]);
    area_arry.push(area);
}
//console.log(area_arry);

/* soloving the example using map for loop  */

var result=radius_array.map((val,index)=>{
    return Math.floor(Math.PI * val *val);
});
//console.log(result);

/* 15) Reformatting Array Objects */
const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

var result=myUsers.map((val,index)=>{
    var fist_info={};
    fist_info[val.name]=val.likes;
    fist_info.age=val.name.length * 10;
    return fist_info;
});
//console.log(result);

/* 16) implementing our own map method */
var array=[5,6,7,8,9]
var a=map(inc,array);
function map(callback,arr){
    var arr2=[];
    for(i=0;i<arr.length;i++){
        arr2[i]=inc(arr[i]);
    }
    return arr2;
}
function inc(num) {
  return num=num+1;
}
//console.log(a);

/* 17) Extracting object keys with map */
const originalArray = [
  { a: 1, b: 'first' },
  { a: 2, b: 'second' },
  { a: 3, b: 'third' },
];
var result=originalArray.map((val,index)=>{
    return val.b;
});
//console.log(result);

/* 18) Using map to iterate through an object */
const object = {
  a: 1,
  b: 2,
  c: 3,
};
const arry=Object.entries(object);
var result=arry.map(([key,values])=>{
    return [key , values *2];
});
//console.log(result);

/* 19) Map Method for 2-dimensional Arrays multiply with 2 */
const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
 var result=myArray.map((val,index)=>{
              var b=val.map((number,i)=>{
                  number=number * 2;
                  return number;
              });
     return b;
 });
//console.log(result);

/* 20) The thisValue Parameter (plural Example) (note this not works in arrow functions in map example)*/
var fruites=['Mango', 'Potato', 'Tomato'];

var result=fruites.map(function(val,index){
   
    var value = val + this;
    return value;
},'es');

//console.log(result);

/********* Comparisan example with reduce starts picking those examples that returns array only*/
/* 20) Double the even number */

var arr=[2,3,4,5,67,8,9,10];

/* with map result will be [4,undefined,8,undefined,....] return value for which the condition is not
satisfied
*/

/* 21) Get the names of all employess */
var data=[
    {
        name:"Arslan Shakeel",
        age: 28,
        salary:80000
    },
    {
        name:"Junaid",
        age: 26,
        salary:56000
    },
    {
        name:"Usman",
        age: 32,
        salary:78000
    },
    {
        name:"Naem",
        age: 33,
        salary:90000
    },
    {
        name:"Khalid",
        age: 55,
        salary:56000
    },
    {
        name:"Nouman",
        age: 23,
        salary:33000
    },
    {
        name:"Saad",
        age: 43,
        salary:45000
    },
    {
        name:"Raja Shaheen",
        age: 28,
        salary:90000
    }
];

var result=data.map((val,index)=>{
    return val.name;
});
//console.log(result);

/* 22) Use salary property as Lookup for Employee // Grouping Employee With Salary */
        /*    output
        0: Array(80001) [ <10 empty slots>, … ]
        1: Array(56001) [ <10 empty slots>, … ]
        2: Array(78001) [ <10 empty slots>, … ]
        3: Array(90001) [ <10 empty slots>, … ]
        4: Array(56001) [ <10 empty slots>, … ]
        5: Array(33001) [ <10 empty slots>, … ]
        6: Array(45001) [ <10 empty slots>, … ]
        7: Array(90001) [ <10 empty slots>, … ]
        */

/* 23) Occurence / frequency of each ellement from array of objects */




