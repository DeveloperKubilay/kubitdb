# KubitDB
Yeni versiyon **kubitdb@1.4.8**
Modülün sahibi **kubi#5443**
## Bilgiler 
**Yardım:** [Yardım sunucusu](https://discord.gg/4Xpwwz6pgN) 
### Kullanımı
```js
const {kubitdb} = require('kubitdb')
const db = new kubitdb("kubitdb")//kaydeceği dosyanın ismi değiştirebilirsiniz
//İsterseniz const db = new kubitdb("./kubitdb.json") olarak kullanabilirsiniz

db.ayarla('deneme','açık')
db.set('deneme','true')
/*/
{
  "deneme": "açık"
}
/*/

db.ekle("para", 31)
db.add("para", 31)
/*/
{
  "para": 31
}
/*/
db.it("serverSettings", { whitelist: "on", playerCount: "12" })
db.push("serverSettings", { whitelist: "on", playerCount: "12" })
/*/
"serverSettings": [
    {
      "whitelist": "on",
      "playerCount": "12"
    }
  ]
/*/
db.varmı("prefix") 
db.has("prefix") 
/*/
true
false
/*/
db.al("para")
db.bak("para")
db.get("para")
db.fetch("para")
/*/
500
/*/
db.cıkar("para", 400)
db.subtract("para", 400)
db.substr("para", 400)
/*/
100
/*/
db.sil("serverStatus")
db.delete("serverStatus")
/*/
{}
/*/
db.sil("serverStatus",1)
db.delete("serverStatus",100)
/*/
{
  "serverStatus": 9
}
/*/
db.hepsi()
db.hepsinial()
db.all()
db.fetchAll()
db.getAll()
/*/
{
  money: 500,
  deneme: "abc"
}
/*/
db.temizle()
db.clear()
db.deleteAll()
db.clearAll()
/*/
{}
/*/

//hesapla ve math data'ya kaydetmez db.al,db.fetch gibidir
db.math("elma","+",10)
db.hesapla("elma","+",10)
/*/
10
/*/
```
### Online Database için
##### KubitDBonline
- ```npm i kubitdbonline```
##### [KubitDB online kullanımı](https://www.npmjs.com/package/kubitdbonline) 

##### Hatamı alıyorsun [Yardım sunucumuza gel](https://discord.gg/4Xpwwz6pgN) 
##### KubitDB'yi Yüklemek için
- ```npm i kubitdb```
