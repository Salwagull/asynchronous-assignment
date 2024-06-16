"use strict";
/*Question # 1

Write a simple asynchronous TypeScript function fetchGreeting that returns a
greeting message after a 2-second delay using setTimeout.*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchGreeting(greetingMessage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(greetingMessage);
            resolve("success");
        }, 2000);
    });
}
;
function getfetchGreeting() {
    return __awaiter(this, void 0, void 0, function* () {
        const greeting = yield fetchGreeting("greeting,Message");
        console.log(greeting);
    });
}
;
getfetchGreeting();
/*Question # 2
Write a function simulateTask that simulates a task by logging "Task started",
waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.*/
function simulateTask() {
    console.log("Tast Started");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task Completed");
        }, 1000);
    });
}
simulateTask().then((response) => {
    console.log(response);
});
/*Question # 3
Write a function fetchData that returns a Promise which resolves with the string
"Data fetched successfully!" after a delay of 1 second.*/
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}
;
fetchData().then((response) => {
    console.log(response);
});
/*Question # 4
Write a function fetchWithError that returns a Promise. It should randomly either
resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
delay of 1 second. Handle the rejection using .catch*/
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 8.5) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Data fetch failed");
            }
        }, 1000);
    });
}
fetchWithError()
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
    console.log(error);
});
/*Question # 5
Write a function executeSequentially that executes two functions fetchData and
processData sequentially using Promises, and logs the results in the order they are
called.*/
function executeSequentially() {
    function fetchData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully");
            }, 1000);
        });
    }
}
function processData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Data processed successfully! ");
        }, 1000);
    });
}
fetchData()
    .then((response) => {
    console.log(response);
    return processData();
})
    .then((response) => {
    console.log(response);
})
    .catch((error) => {
    console.error(error);
});
executeSequentially();
