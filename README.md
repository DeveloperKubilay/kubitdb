# KubitDB
## Json based database, Json tabanlı veritabanı
**Help:** [Github](https://github.com/DeveloperKubilay/kubitdb/) 
### Use of,Kullanımı
```js
const kubitdb = require('kubitdb')
const db = new kubitdb("kubitdb")
//You can change the name of the file to save
//You can use const db = new kubitdb("./kubitdb.json") if you want
//kaydeceği dosyanın ismi değiştirebilirsiniz
//İsterseniz const db = new kubitdb("./kubitdb.json") olarak kullanabilirsiniz

db.ayarla('test','evet')
db.set('test','true')
/*/
{
  "test": "evet"
}
/*/

db.ekle("test", 50)
db.add("test", 50)
/*/
{
  "test": 50
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
db.del("serverStatus")
/*/
{}
/*/
db.sil("serverStatus",1)
db.delete("serverStatus",100)
db.del("serverStatus",100)
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
  "money": 500,
  "deneme": "abc"
}
/*/
db.temizle()
db.clear()
db.deleteAll()
db.clearAll()
/*/
{}
/*/

//calculate and does not save math data is like db.al,db.fetch
//hesapla ve math data'ya kaydetmez db.al,db.fetch gibidir
db.math("apple","+",10)
db.hesapla("apple","+",10)
/*/
10
/*/
```
##### To download KubitDB, KubitDB indirmek için
- ```npm i kubitdb```

### For Online Database,To download KubitDBonline
##### Çevrimiçi Veritabanı için, KubitDBonline indirmek için
- ```npm i kubitdbonline```
##### [KubitDB online](https://www.npmjs.com/package/kubitdbonline) 
