const express=require('express')
const fs=require('fs')
const readline=require('readline');
//writing file
// fs.writeFile('file.txt',"Hello from write file method",(err)=>{
//     if(err)
//     {
//         console.log(err);

//     }
//     else
//     console.log('write successful');
// });


// //reading file
// fs.readFile('file.txt','utf8',(err,data)=>{
//     if(err)
//     console.log(err);
//    else
//    console.log(data);

// })

// //appending content to the file
// fs.appendFile('file.txt','This is some more added content',(err)=>{
//     if(err)
//     console.log(err);
//    else
//    console.log('append is successful');
// })

//deleting file
// fs.unlink('file.txt',(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log('file deletion successful');

// })

//Checking if a File or Directory Exists
// if(fs.existsSync('file.txt')){
//     console.log('File exists');
//     fs.appendFile('file.txt','this is text added after checking the file exists or not',()=>{

//     })
// }
// else
// console.log('file does not exists');


//working with directories
//writing file by taking user input
// const r1=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// r1.question('Enter note: ',(note)=>{
//     fs.appendFile('notes.txt',note+'\n',(err)=>{
//         if(err)
//         console.log(err);
//     console.log('Note added successfully');
//     r1.close();
//     });
// });

//copying file
// fs.copyFile('file.txt','destination.txt',(err)=>{
//     if(err)
//     console.log(err);
// console.log('Fle copied successfully');
// })

//renaming a file
// fs.rename('destination.txt','dest1.txt',(err)=>{
//     if(err)
//     console.log(err);
// console.log('File renamed successfully');
// })

//Listing file in a directory
// fs.readdir('C:/Users/Admin/Documents/placement/fullstack/express',(err,files)=>{
//     if(err){
//         console.log(err);
//     }
//     files.forEach(file=>{
//         console.log(file);
//     })
// })

//// making new directory
// fs.mkdir('newDirectory',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('Directory created successfully');
// })

// fs.rmdir('newDirectory',{recursive:true},(err)=>{
//     if(err)
//     console.log(err)
//     console.log('Directory deleted successfully');
// })

//watching for Changes in a File:
// fs.watch('file.txt',(eventType,filename)=>{
//     console.log(`file ${filename} has been modified`);
// })


