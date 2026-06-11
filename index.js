const EventEmiter = require("events");



const eventEmiter = new EventEmiter();

eventEmiter.on("fire",()=>{
    console.log("this event has been emited");
});



eventEmiter.on("fire", ()=>{
    for(let i=0;i<10;i++){
        console.log(`no:${i}`);
    }
});


console.log("this is event emiter demo start");
//fire once trigger two function
eventEmiter.emit("fire");

console.log("this is event emiter demo end");
