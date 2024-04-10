# nodejs-notes-repo
# 1. Introduction
### 1.1. What is NodeJS ?
>Node.js is an open-source and cross-platform JavaScript runtime environment[...]runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser[...]runs in a single process[...]provides a set of asynchronous I/O primitives in its standard library[...]using non-blocking paradigms, making blocking behavior the exception rather than the norm. [^1]

>[!IMPORTANT]
>NodeJs is a single-threaded, JS runtime environment, based on an asyncronous I/O event driven architecture

### 1.2 Async Vs Sync
NodeJS offers the possibility to execute many different tasks in a blocking way (synchronous) and non-blocking way (asynchronous). Sync proccesses will be the ones that go step-by-step, so a proccess won't be executed until the previous ones are finished. Async ones will be executed, "all at the same time" independently. The finished ones will be executed while other async proccesses happen.

Node, at its core, is based on callback functions to provide that asychronicity. Node has inner modules that give the possibility of working with promises instead, promisifying the callbacks.

More about async vs sync, callbacks, promises, promisification and overall asychronous javascript [here](https://javascript.info/callbacks). All the "Promises, async/await" chapter covers async topics, some of which, like Microtasks are really handy for understanding the preference some async functions have over others (something event loop handles).

[Promises - Part 8 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=2d7s3spWAzo&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=8)

>[!TIP]
>Callbacks first parameters in Node, are errors.

### 1.3. Event Loop : NodeJs Internal execution
[Philip Roberts: ¿Que diablos es el "event loop" (bucle de eventos) de todos modos? | JSConf EU](https://www.youtube.com/embed/8aGhZQkoFbQ)
[Por qué JS "necesita" async-await y otros lenguajes no?](https://www.youtube.com/embed/C_eFawNnmC4)



### Bibliography
[^1]: [Oficial NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
[^2]: [@midudev - NodeJs Course Repository](https://github.com/midudev/curso-node-js.git)
