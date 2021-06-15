const rollys = require("../index")
const DataSchema = require("./schema/schema.js")

new DataSchema("Tuna", 00, 0000000000, "Owner", true, true, true, true)

rollys.all()

console.log(rollys.all())
