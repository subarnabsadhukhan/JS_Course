# How JavaScript Works Behind the Scenes

JAVASCRIPT IS A HIGH-LEVEL, PROTOTYPE-BASED OBJECT-ORIENTED,
MULTI-PARADIGM, INTERPRETED OR JUST-IN-TIME COMPILED,
DYNAMIC, SINGLE-THREADED, GARBAGE-COLLECTED PROGRAMMING
LANGUAGE WITH FIRST-CLASS FUNCTIONS AND A NON-BLOCKING
EVENT LOOP CONCURRENCY MODEL.

**Explanation by ChatGPT -**

Certainly! The definition you provided describes JavaScript in various technical terms. Let's break down each terminology:

1. **High-Level:** JavaScript is a high-level language, meaning it provides abstractions and features that allow you to work with complex concepts without needing to understand low-level details. This makes it easier for developers to write code.

2. **Prototype-Based:** JavaScript uses a prototype-based object-oriented programming (OOP) model. Instead of classes, it uses prototypes to create objects and define their behavior. Objects can inherit properties and methods from other objects.

3. **Object-Oriented:** JavaScript is an object-oriented language, which means it revolves around the concept of objects. Objects are instances of classes (or prototypes) and can have properties and methods associated with them.

4. **Multi-Paradigm:** JavaScript supports multiple programming paradigms, including object-oriented, imperative, and functional programming. This flexibility allows developers to choose the best approach for a particular task.

5. **Interpreted or Just-in-Time Compiled:** JavaScript code can be executed directly by an interpreter in a web browser or on the server. Some JavaScript engines also use Just-in-Time (JIT) compilation to convert JavaScript code into machine code for faster execution.

6. **Dynamic:** JavaScript is a dynamically typed language, meaning you don't need to declare variable types explicitly. Types are determined at runtime, making it more flexible but potentially prone to runtime errors.

7. **Single-Threaded:** JavaScript runs in a single thread, which means it processes one task at a time. This can lead to performance issues for CPU-intensive tasks, but JavaScript mitigates this using asynchronous programming techniques.

8. **Garbage-Collected:** JavaScript uses automatic memory management, known as garbage collection. The language automatically deallocates memory when objects are no longer needed, reducing the risk of memory leaks.

9. **Programming Language:** JavaScript is a language that allows you to write instructions for a computer to execute.

10. **First-Class Functions:** In JavaScript, functions are treated as first-class citizens. This means you can assign functions to variables, pass them as arguments to other functions, and return them from functions.

11. **Non-Blocking Event Loop:** JavaScript's concurrency model is based on an event loop, which allows it to handle asynchronous tasks efficiently without blocking the main execution thread. This is crucial for building responsive web applications.

12. **Concurrency Model:** JavaScript's concurrency model defines how it handles multiple tasks at the same time. It achieves concurrency through mechanisms like callbacks, promises, and async/await, allowing developers to write non-blocking code.

In summary, JavaScript is a versatile, high-level, prototype-based, object-oriented, multi-paradigm, dynamically typed, single-threaded, garbage-collected programming language with first-class functions. It uses an event loop concurrency model to manage asynchronous operations efficiently, making it well-suited for web development and a wide range of other applications.

> Follow this PDF [Link](./readme-assets/How-JavaScript-Works-Behind-the-Scenes.pdf)

## How is JavaScript Code Executed?

JavaScript code is executed in various environments, primarily web browsers and server-side runtime environments like Node.js. The process of executing JavaScript code generally involves the following steps:

1. **Parsing:** The JavaScript code is first loaded by the browser or runtime environment. The code is then parsed, which means it's analyzed to understand its structure and syntax. During parsing, the code is converted into an Abstract Syntax Tree (AST), a data structure that represents the code's structure.

2. **Compilation/Interpretation:** Depending on the JavaScript engine used, the code may be compiled or interpreted. Some engines use a combination of both techniques, which is often referred to as Just-in-Time (JIT) compilation.

   - **Compilation (JIT):** In JIT compilation, the JavaScript code is initially parsed and converted into an intermediate representation. Then, this representation is compiled into machine code or bytecode, which is executed directly by the computer's processor. V8, the engine used in Google Chrome, is known for its JIT compilation.

   - **Interpretation:** In pure interpretation, the parsed code is executed line by line, with each line being translated into machine-level instructions by an interpreter as it's executed. This approach can be slower than compilation but is more accessible in some cases.

3. **Execution:** Once the code is parsed and compiled/interpreted, it's executed. JavaScript code is typically executed sequentially, one statement at a time, unless it encounters asynchronous operations.

4. **Asynchronous Operations:** JavaScript is often used for tasks that involve waiting for external resources, such as data from a server or user interactions. To avoid blocking the main thread and ensure responsiveness, JavaScript uses an event loop and various asynchronous mechanisms like callbacks, Promises, and async/await. When an asynchronous operation is encountered, it is scheduled, and the code continues executing other tasks until the asynchronous operation completes, at which point its callback is executed.

5. **Garbage Collection:** As JavaScript code runs, it creates objects and consumes memory. To prevent memory leaks, JavaScript engines perform garbage collection. This process identifies and deallocates memory that is no longer in use, freeing up resources.

6. **Execution Contexts and Scopes:** JavaScript code operates within execution contexts, which include the global scope and function scopes. Variables and functions have scope within these contexts, and the engine manages the scope chain to access variables and functions correctly.

7. **Error Handling:** If an error occurs during execution, JavaScript provides mechanisms for error handling, such as try-catch blocks, to gracefully handle exceptions and prevent the entire script from crashing.

8. **DOM Manipulation (in a browser):** When JavaScript is used in a web browser, it can interact with the Document Object Model (DOM) to manipulate web page elements dynamically. This includes tasks like changing text, handling user events, and making AJAX requests.

In summary, JavaScript code execution involves parsing, compilation/interpretation, execution of synchronous and asynchronous operations, garbage collection, and error handling. Understanding how these steps work together is crucial for writing efficient and responsive JavaScript applications.

## WHAT IS AN EXECUTION CONTEXT?

An execution context is a fundamental concept in JavaScript's runtime environment. It represents the environment in which JavaScript code is executed, and it keeps track of various aspects of code execution, including variables, functions, and the scope in which they operate. Understanding execution contexts is essential for understanding how JavaScript manages and runs your code.

There are two main types of execution contexts in JavaScript:

1. **Global Execution Context:** The global execution context is the outermost context and represents the entire JavaScript program. When your JavaScript code first starts running, a global execution context is created automatically. It contains two important components:

   - The **Global Object:** In a browser environment, the global object is usually the `window` object. In Node.js, it's the `global` object. This object provides access to global variables and functions.

   - The **Global Scope:** This is the outermost scope in which variables and functions declared without the `var`, `let`, or `const` keywords become global variables and functions, accessible from anywhere in the code.

2. **Function Execution Context:** When a function is called, a new function execution context is created. Each function call results in a new execution context, forming a stack of execution contexts known as the **"call stack."** This stack follows the Last-In, First-Out (LIFO) principle.

   _A function execution context includes:_

   - The function's local scope: Variables declared within the function, including function parameters, are accessible within this scope.

   - Arguments object: A special object that holds the values passed as arguments to the function.

   - Reference to the outer (parent) execution context: This reference is crucial for the scope chain, allowing access to variables in the parent execution context.

   - The `this` keyword: The value of `this` depends on how the function is called and is determined when the function is invoked.

   - Variables declared with `let` and `const` are also part of the function's scope but are not initialized until they are encountered in the code.

Execution contexts are important for variable scoping, function execution, and managing the scope chain, which determines where variables can be accessed. When a function is called, a new function execution context is pushed onto the call stack, and when the function completes, its context is popped off the stack.

## SCOPING AND SCOPE IN JAVASCRIPT (Summary)

🟩 Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”;

🟩 There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;

🟩 Only let and const variables are block-scoped. Variables declared with var end up in the closest function scope;

🟩 In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the
code functions and blocks are written;

🟩 Every scope always has access to all the variables from all its outer scopes. This is the scope chain!

🟩 When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking
for. This is called variable lookup;

🟩 The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;

🟩 The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;

🟩 The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
