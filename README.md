# Todo CLI

A simple command-line interface (CLI) application for managing your to-do list. This project allows users to add, remove, list, and mark tasks as complete using a Node.js-based CLI tool.

## Features
- Add new tasks to your to-do list.
- List all tasks.
- Mark tasks as completed.
- Remove tasks from the list.
- Stored in JSON format.

## Prerequisites
Make sure you have **Node.js** installed on your system.

## Installation
Clone the repository and install dependencies:
```sh
git clone https://github.com/SidW111/Todo_CLI.git
cd Todo_CLI
npm install
```

## Usage
Run the CLI with the following commands:

### Add a task
```sh
node index.js add Buy_groceries 5pm
```

### List all tasks
```sh
node index.js list
```

### Mark a task as complete
```sh
node index.js mark Buy_groceries
```

### Remove a task
```sh
node index.js remove Buy_groceries
```


## File Structure
```
Todo_CLI/
│── index.js      # Main CLI logic
│── todos.json    # Persistent storage for tasks
│── package.json  # Project dependencies
│── README.md     # Documentation
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.


