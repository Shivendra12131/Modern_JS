//object literal


//array of objects

// // console.log(blogs);
// let user={
//     name:'shivendra',
//     age:'30',
//     email:'shivendra@gmail.com',
//     location:'berling',
//     // blogs:['why mac&cheese rules','0 things to make here'],
//     // login(){
//     //     console.log('the user is logegd in ');
//     // },
//     logout(){
//         console.log('the user is logegd out');
//     },
//     logBlogs(){
//         // console.log(this);// user object
//         console.log('this user has resturn following blogs');
//         this.blogs.forEach(blog=>{
//             console.log(blog.title,blog.likes);
//         })
//     },
//     blogs:[
//         {title:'shivendara singh jiii',likes:30},// object,
//         {title:'0febfeibfeioioheebf',likes:23},
//         {title:'ssifhsfbsfs'}
//     ],
    

// };
// user.logBlogs();
// user.logBlogs();
// console.log(this);
// user.login();
//arrow fucntuon with this gives a window object

// console.log(user);
// console.log(user.name);
// // user.age=35;
// console.log(user.age);

// console.log(user['name']); //i have to give the key in string way

// user['age']=400;
// console.log(user['age']);
// const key='location';
// const aggeee='age';

// // console.log(user[aggeee]);

// // console.log(typeof user);


// //Math object 
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);
// const area=7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// //random numbers
// console.log(Math.random());

// console.log(Math.round(Math.random()));
// console.log(Math.round(Math.random()*100));



/*
PRIMITIVE TYPES 
NUMBERS
STRINGS
BOOLEANS
NULL
UNDEFINED
SYMBOLS
  stored in stack -> FAST TO ACCESS
  LOCKS THE VARIABLES NAME WITH THE VALUE


REFERNCE TYPE
ALL TYPES OF OBJECTS
OOBJECT LITERAL
ARRAYS
FUNCTIONS
DATES 
ALL OTHER OBJECTS


IT IS STORED IN HEAP
SLOWER 


*/


// //primitive values
// let scoreone=50;
// let scortwo=scoreone;
// console.log(`score 1${scoreone} and seciond value is ${scortwo}`);
//refernce type
userone={name:'ryudu',age:30};
usertwo=userone;
console.log(userone);
console.log(usertwo);
userone.name='heroooo chamngs';
console.log(userone);
console.log(usertwo)