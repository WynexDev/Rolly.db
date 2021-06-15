const fs = require("fs")

/** 
 * 
 * Coded By Roffly
 * 
 */


class rollydb {

    constructor(){
        
        if (!fs.existsSync("rollydb")){

            if(!fs.existsSync(`./json.rolly`)) {
                fs.writeFileSync(`./json.rolly`, "{}");
                return;
            }
        
        } else {
            if(!fs.existsSync(`./json.rolly`)) {
                fs.writeFileSync(`./json.rolly`, "{}");
               
            }
        }
    }


/** 
 * 
 * Coded By Roffly
 * 
 */

    create(veri, değer) {
        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
        if(!değer) throw new TypeError('No value specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    rollydbs[veri] = değer
    return fs.writeFileSync('./json.rolly', JSON.stringify(rollydbs, null, 3))
    
}


    findData(veri) {
        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    if(!rollydbs[veri]) throw new TypeError('[Rolly] Böyle Bir Veri Bulunamadı')
    return rollydbs[veri]


}

    get(veri) {
        if(!veri) throw new TypeError('No data specified. Need Help? Check Out: discord.gg/raVhvnK8xG')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    if(!rollydbs[veri]) throw new TypeError('[Rolly] Böyle Bir Veri Bulunamadı')
    return rollydbs[veri]


    }


    delete(veri) {
    if(!veri) throw new TypeError('Veri Girmediniz')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    if(!rollydbs[veri]) throw new TypeError('[Rolly] Böyle Bir Veri Bulunamadı')
    delete rollydbs[veri]
    return fs.writeFileSync('./json.rolly', JSON.stringify(rollydbs, null, 3))
}

    backup(dosyaAdı) {
    if(!dosyaAdı) throw new TypeError('Dosya Adı Girmediniz')
    const rollydbs = JSON.parse(fs.readFileSync('./json.rolly', "utf8"))
    return fs.writeFileSync(`./json.${dosyaAdı}`, JSON.stringify(rollydbs, null, 3))
}

    coder() {
        console.log("Coded By Roffly")
    }

    coders() {
        console.log("Coded By Roffly")
    }

}


module.exports = new rollydb
/** 
* 
* Coded By Roffly
* 
*/