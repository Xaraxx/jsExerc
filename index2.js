const Emitter = require("./emitter")
const { SAVE } = require("./event-names")

const emitter = new Emitter()

emitter.on(SAVE, () => {
    console.log("On save activated")
})

emitter.on(SAVE, () =>{
    console.log("On save activated 2")
})

emitter.emit(SAVE)