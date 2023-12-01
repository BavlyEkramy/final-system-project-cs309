import {v4 as uuidv4} from "uuid";
// let students =[
//     {
//         id: "1",
//         name: 'Mohammed',
//         age: 25
//     },
//     {
//         id: "2",
//         name: 'Ali',
//         age: 26
//     },
//     {
//         id: "3",
//         name: 'Mohammed',
//         age: 27
//     }
// ];


// const getstudent = ("/student/:id",( request,response ) => {
//     const id =(request.params.id);
//     const student = students.find((student) => student.id === id)
//     if(student){
//         response.json(student);
//     }
//     else{
//         response.status(404).send("Student not found");
//     }
 
//     console.log( student)
    
// });