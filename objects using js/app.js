// var student = {
//     rollno:2269,
//     name:"Saad Ayaz Khan",
//     course:"Web Devlpmnt",
//  age:18

// }
// console.log(student)




// var student = {
//     rollno:prompt("Enter Your ROllno"),
//     name:prompt("Name"),
//     course:prompt("Course Name","Web Development"),
//     age:prompt("Enter Your Age")
// }
// console.log(student)


// in and delete  strt

// var student = {
//     rollno:2269,
//     name:"Saad Ayaz Khan",
//     course:"Web And Mob Development",
//     age:18,
// }
// student.name ="Ahsan"
// student.inst ="Saims"
// delete student.rollno
// var a="ID"in student 
// var a="name"in student
// console.log(a)
// console.log(student)

// in and delete  end

// var array=[{
//     rollno:2269,
//     name:"Saad Ayaz Khan",
//     course:"Web And Mob Development",
//     age:18,
// },{
//     rollno:2250,
//     name:"Hamdan Abid",
//     course:"Flutter Course",
//     age:19,
// }, {
//     rollno:2220,
//     name:"Sajid",
//     course:"React Js",
//     age:25,
// },{
// rollno:5006,
// name:"Emaad",
// course:"Web Devlopment",
// age:30,
// }, {
//     rollno:5022,
//     name:"Usama",
//     course:"Mob App Devlopment",
//     age:22,
// },{
//     rollno:5008,
//     name:"ahmer",
//     course:"nodejs mongo db",
//     age:21,
// },{
//     rollno:5090,
//     name:"Luqman",
//     course:"Ms Excel",
//     age:23,
// }, {
//     rollno:5090,
//     name:"Huzaifa",
//     course:"C++",
//     age:26,
// },{
//     rollno:5000,
//     name:"Anas",
//     course:"Cs",
//     age:25,
// }, {
//     rollno:6021,
//     name:"Saqib",
//     course:"Digital Marketing",
//     age:29,
// },
// ]
// console.log(array)
// var student = {
//     rollno:2269,
//     name:"Saad Ayaz Khan",
//     course:"Web And Mob Development",
//     age:18,
// }



// var student1 = {
//     rollno:2250,
//     name:"Hamdan Abid",
//     course:"Flutter Course",
//     age:19,
// }



// var student2 = {
//     rollno:2220,
//     name:"Sajid",
//     course:"React Js",
//     age:25,
// }



// var student3 = {
//     rollno:5006,
//     name:"Emaad",
//     course:"Web Devlopment",
//     age:30,
// }



// var student4 = {
//     rollno:5022,
//     name:"Usama",
//     course:"Mob App Devlopment",
//     age:22,
// }




// var student5 = {
//     rollno:5008,
//     name:"ahmer",
//     course:"nodejs mongo db",
//     age:21,
// }



// var student6 = {
//     rollno:5090,
//     name:"Luqman",
//     course:"Ms Excel",
//     age:23,
// }




// var student7 = {
//     rollno:5090,
//     name:"Huzaifa",
//     course:"C++",
//     age:26,
// }



// var student8 = {
//     rollno:5000,
//     name:"Anas",
//     course:"Cs",
//     age:25,
// }



// var student9 = {
//     rollno:6021,
//     name:"Saqib",
//     course:"Digital Marketing",
//     age:29,
// }


// function search(){
//     for(i=0;i<array.length;i++){
//     
//     console.log(array[i])
// }







// var inp=document.getElementById('inp')
// function search(){
//     for(i=0;i<array.length;i++){
//         if(inp.value == array[i].rollno)
//         console.log(array[i])
//     }
// }


// var obj = {
//     name:"ABC",
//     age:18,
//     address:{
//         houseno:37,
//         street:13,
//         zipcode:75780,
//         Area:"Hawksbay"
//     },
//     abc: function(){
//         console.log("Ghar Mill Gaya")
//     }
// }
// // console.log(obj)
// obj.abc()




var firstname=document.getElementById('firstname')
var lastname=document.getElementById('lastname')
var email=document.getElementById('email')
var obj = {}
function submit(){
    obj.firstname=firstname.value
    obj.lastname=lastname.value
    obj.email=email.value
    console.log(obj)
}