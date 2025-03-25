const fs= require("fs")
const {program } = require("commander")
const path = require("path")
const { todo } = require("node:test")


const todosFilePath = path.join(__dirname,"todos.json")
console.log(todosFilePath)

function readTodos(){
    if(!fs.existsSync(todosFilePath)){
        return []
    }
    const data = fs.readFileSync(todosFilePath,"utf-8")
    return JSON.parse(data || "[]]")
}

function writeTodos(todos){
    fs.writeFileSync(todosFilePath,JSON.stringify(todos,null,2),"utf-8")
}

program.command("add")
    .description("add a todo")
    .argument("<Todo_Title>","write Todo Title")
    .argument("<time>","add Time")
    .action((todoTitle,time) =>{
        const todos = readTodos()
        const newTodo = {
            Title: todoTitle,
            Time: time,
            Done: false
        }
        todos.push(newTodo)
        writeTodos(todos)
        console.log("todo added succesfully")
    })

program.command("remove")
    .description("to remove a todo")
    .argument("<Todo_Title>", "title of the todo to be removed")
    .action((todoTitle) => {
        let todos = readTodos()
        const updatedTodos = todos.filter((todo) => todo.Title !== todoTitle) 
        if(todos.length === updatedTodos.length){
            console.log("todo not found")
        }else{
            writeTodos(updatedTodos)
            console.log("todo removed Successfully")
        }
    }) 


program.parse()