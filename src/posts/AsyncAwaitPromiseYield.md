<h1>Async Await</h1>

Taken from

-  [Fireship Youtube Video](https://www.youtube.com/watch?v=vn3tm0quoqE)
- https://javascript.info/async

<h2>Table of Contents</h2>

[TOC]

# NodeJS Event Loop

Watch videos: 

- Jake Archibald's Talk: [https://youtu.be/cCOL7MC4Pl0](https://www.youtube.com/watch?v=cCOL7MC4Pl0&t=0s) 

- Demos with Angular: [https://www.youtube.com/channel/UCYFd...](https://www.youtube.com/channel/UCYFd7Qy93YP7gPERnxP545A)

Both the browser and NodeJS are always running a single threaded event loop to run your code

On the first go around

- Run all your synchronus code
- Queue up asynchronus events to be called back later
- **Macro Tasks**  like set timeout or set interval will be executed on the next event loop
- **Micro Tasks** like a fulfilled promise then it will be called back before the start of the next event loop

## Example

**Code**

```javascript
console.log('Synchronus 1')

setTimeout(_ => console.log('Timeout 2'), 0)  // 0 Second timeout
```



**Output**



# Callbacks

- You say here's a function that I need to run but first I to go get some data from the network (getData)
- The event loops says okay I'll keep doing my thing while you do your thing in a separate thread pool
- At some point in the future getData will finish and let the event loop know that it is ready to be called back

# Promises

# Async Await

# Yield

# Questions

## Promise Questions

- Why don't I have to write resolve when resolvoing a promise
- Does **then** return a promise or resolve a promise
- What does **finally** do?

