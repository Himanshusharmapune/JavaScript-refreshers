## Notes

# JavaScript: Synchronous vs Asynchronous & Blocking vs Non-Blocking

## Asynchronous JavaScript
- JS is single-threaded (one task at a time) and synchronous by default.
- Asynchronous code enables tasks like network requests, timers, and user events to run **without blocking** the main thread.
- Achieved using: Callbacks, Promises, async/await.

---

## Blocking Code
- **Definition:** Blocking code stops execution until the current task completes.
- **Effect:** Blocks the main thread; other code must wait.
- 



# JS Asynchronous Execution - Event Loop

## JS Engine
- **Memory Heap:** Stores variables/data.
- **Call Stack:** Executes functions one at a time (single-threaded).

## Web APIs
- Handle async tasks (setTimeout, fetch, DOM events).
- Register callbacks for later.

## Task Queue
- Stores callbacks waiting to run.
- **Promises** go to microtask queue (higher priority).

## Event Loop
- Moves callbacks from queue to call stack when it's empty.
- Ensures non-blocking, responsive JS execution.

## fetch()
- fetch() is a modern JavaScript method used to make HTTP requests (like getting data from APIs, sending data to servers) and its priority is high