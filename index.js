//The module is licensed by MIT,Modül MİT lisanslıdır
//Github: https://github.com/DeveloperKubilay/kubitdb
//Discord: https://discord.gg/4Xpwwz6pgN
//Good day, good coding :),İyi günler İyi kodlamalar :)

const fs = require('fs');

function load(file){ try{return JSON.parse(fs.readFileSync(file, 'utf-8'))}catch (e){
if(String(e).split("Error: ENOENT: no such file or directory").length > 1){this.mkdirfile = ""
file.split("/").map((x,c)=>{
if(c === file.split("/").length-1) return;
this.mkdirfile += x+"/"
fs.mkdirSync(this.mkdirfile,{ recursive: true })
});write(file, {});
return JSON.parse(fs.readFileSync(file, 'utf-8'))
}else {return {}}}};
function write(file, data){ try{fs.writeFileSync(file, JSON.stringify(data, undefined, 2))}catch{}};

class kubitdb {constructor(file) {
this.file = file || 'kubitdb.json'
if (this.file === 'kubitdb.json') { try { load(this.file); } catch { write(this.file, {}); } } else {
if(this.file.split('.')[this.file.split('.').length - 1] !== 'json') this.file = this.file + '.json'
if (!this.file.includes('./')) {this.file = './' + this.file}
try { load(this.file); } catch {write(this.file, {});}}}

set(data, value) {
if (!data) return;
if (value == undefined) return;
let fileData = load(this.file)
fileData[data] = value;
write(this.file, fileData);
return;}

ayarla(data, value) {
if (!data) return;
if (value == undefined) return;
let fileData = load(this.file)
fileData[data] = value;
write(this.file, fileData);
return;}

add(data, value) {
if (!data) return;
if (value == undefined) return;
if (typeof value == "number") {let fileData = load(this.file)
if (fileData[data] === undefined) return this.set(data, value);
if (typeof fileData[data]!== "number") return;
if (isNaN(fileData[data])) return this.set(data, value);
fileData[data] = fileData[data] + value;
write(this.file, fileData);
return;} else {let fileData = load(this.file)
if (typeof fileData[data]!== "number") return;
if (fileData[data] === undefined) return;
if (isNaN(fileData[data])) return;
fileData[data] = fileData[data] + value;
write(this.file, fileData);
return;}}

ekle(data, value) {
if (!data) return;
if (value == undefined) return;
if (typeof value == "number") {let fileData = load(this.file)
if (fileData[data] === undefined) return this.set(data, value);
if (typeof fileData[data]!== "number") return;
if (isNaN(fileData[data])) return this.set(data, value);
fileData[data] = fileData[data] + value;
write(this.file, fileData);
return;} else {let fileData = load(this.file)
if (typeof fileData[data]!== "number") return;
if (fileData[data] === undefined) return;
if (isNaN(fileData[data])) return;
fileData[data] = fileData[data] + value;
write(this.file, fileData);
return;}}

subtract(data, value) {
if (!data) return;
if (value == undefined) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

substr(data, value) {
if (!data) return;
if (value == undefined) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

cıkar(data, value) {
if (!data) return;
if (value == undefined) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

push(array, value) {
if (!array) return;
if (value == undefined) return;
let fileData = load(this.file)
if (fileData[array] && Array.isArray(fileData[array])) {
fileData[array].push(value)
write(this.file, fileData)} else if (!fileData[array]) { this.set(array, [value]) }
return;}

it(array, value) {
if (!array) return;
if (value == undefined) return;
let fileData = load(this.file)
if (fileData[array] && Array.isArray(fileData[array])) {
fileData[array].push(value)
write(this.file, fileData)
} else if (!fileData[array]) { this.set(array, [value]) }
return;}

delete(array, index) {
let fileData = load(this.file)
if(!fileData[array]) return;
if (!array) return;
if (index === undefined) {
fileData[array] = undefined;
write(this.file, fileData);} else {
let fileData = load(this.file)
if (isNaN(fileData[array]-index)) return;
fileData[array] = fileData[array] - index;
write(this.file, fileData);} return;}
del(array, index) {
let fileData = load(this.file)
if(!fileData[array]) return;
if (!array) return;
if (index === undefined) {
fileData[array] = undefined;
write(this.file, fileData);} else {
let fileData = load(this.file)
if (isNaN(fileData[array]-index)) return;
fileData[array] = fileData[array] - index;
write(this.file, fileData);} return;}

sil(array, index) {
let fileData = load(this.file)
if(!fileData[array]) return;
if (!array) return;
if (index === undefined) {
fileData[array] = undefined;
write(this.file, fileData);} else {
let fileData = load(this.file)
if (isNaN(fileData[array]-index)) return;
fileData[array] = fileData[array] - index;
write(this.file, fileData);} return;}
  
has(data) {
if (!data) return;
let fileData = load(this.file)
if (!fileData[data]) return false;
if (fileData[data]) return true;}

varmı(data) {
if (!data) return;
let fileData = load(this.file)
if (!fileData[data]) return false;
if (fileData[data]) return true;}

clear() { write(this.file, {}); return; }
clearAll() { write(this.file, {}); return; }
temizle() { write(this.file, {}); return; }
deleteAll() { write(this.file, {}); return; }

fetchAll() { return load(this.file); }
getAll() { return load(this.file); }
all() { return load(this.file); }
hepsi() { return load(this.file); }
hepsinial() { return load(this.file); }

fetch(data) {
if (!data) return;
let fileData = load(this.file)
return fileData[data]}

get(data) {
if (!data) return;
let fileData = load(this.file)
return fileData[data]}

bak(data) {
if (!data) return;
let fileData = load(this.file)
return fileData[data]}

al(data) {
if (!data) return;
let fileData = load(this.file)
return fileData[data]}

hesapla(data, operator, value) {
if (!data) return;
if (!operator) return;
if (value == undefined) return;
if (typeof value !== "number") return;
let fileData = load(this.file)
if (typeof fileData[data] !== "number") return;
if (operator === "-") {let i = fileData[data] - value;
return i} else if (operator === "+") {let ii = fileData[data] + value;
return ii} else if (operator === "*") {let iii = fileData[data] * value;
return iii} else if (operator === "/") {let iiii = fileData[data] / value;
return iiii} else { return; }}

math(data, operator, value) {if (!data) return;
if (!operator) return;
if (value == undefined) return;
if (typeof value !== "number") return;
let fileData = load(this.file)
if (typeof fileData[data] !== "number") return;
if (operator === "-") {let i = fileData[data] - value;
return i} else if (operator === "+") {let ii = fileData[data] + value;
return ii} else if (operator === "*") {let iii = fileData[data] * value;
return iii} else if (operator === "/") {let iiii = fileData[data] / value;
return iiii} else { return; }}

}module.exports = kubitdb;