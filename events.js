const { EventEmitter } = require("events");

const emitter = new EventEmitter();

emitter.on("save", () =>{
    console.log('On save event activated')
})

emitter.on("save", () =>{
    console.log('Anoter on save event activated')
})

emitter.emit("save")
