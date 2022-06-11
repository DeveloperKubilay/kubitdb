//Modül sürümü: 1.4.8

//Modül MİT lisanslıdır
//fs modülünün yardımı ile çalışmaktadır ve sahibi: Discord kubi#5443
//Halamı hata alıyorsun ozmn discord sunucumuza gel, ticket aç ve sorunu bize bildir 
//Discord sunucumuz https://discord.gg/4Xpwwz6pgN
//İyi günler İyi kodlamalar :)

const fs = require('fs');
const load = (file) => JSON.parse(fs.readFileSync(file, 'utf-8'));
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, undefined, 4));
const extension = (filePath) => { let parts = filePath.split('.'); return parts[parts.length - 1]; }
class kubitdb {constructor(file) {
this.file = file || 'kubitdb.json'
if (this.file === 'kubitdb.json') { try { load(this.file); } catch { write(this.file, {}); } } else {
if(extension(this.file) !== 'json') this.file = this.file + '.json'
if (!this.file.includes('./')) {this.file = './' + this.file}
try { load(this.file); } catch { write(this.file, {});}}}

set(data, value) {
if (!data) return;
if (!value) return;
let fileData = load(this.file)
fileData[data] = value;
write(this.file, fileData);
return;}

ayarla(data, value) {
if (!data) return;
if (!value) return;
let fileData = load(this.file)
fileData[data] = value;
write(this.file, fileData);
return;}

add(data, value) {
if (!data) return;
if (!value) return;
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
if (!value) return;
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
if (!value) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

substr(data, value) {
if (!data) return;
if (!value) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

cıkar(data, value) {
if (!data) return;
if (!value) return;
let fileData = load(this.file)
if (fileData[data] === undefined) return;
if (isNaN(fileData[data]-value)) return;
fileData[data] = fileData[data]-value
write(this.file, fileData);
return;}

push(array, value) {
if (!array) return;
if (!value) return;
let fileData = load(this.file)
if (fileData[array] && Array.isArray(fileData[array])) {
fileData[array].push(value)
write(this.file, fileData)} else if (!fileData[array]) { this.set(array, [value]) }
return;}

it(array, value) {
if (!array) return;
if (!value) return;
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
if (!fileData[data]) fileData[data] = undefined
return fileData[data]}

get(data) {
if (!data) return;
let fileData = load(this.file)
if (!fileData[data]) fileData[data] = undefined
return fileData[data]}

bak(data) {
if (!data) return;
let fileData = load(this.file)
if (!fileData[data]) fileData[data] = undefined
return fileData[data]}

al(data) {
if (!data) return;
let fileData = load(this.file)
if (!fileData[data]) fileData[data] = undefined
return fileData[data]}

hesapla(data, operator, value) {
if (!data) return;
if (!operator) return;
if (!value) return;
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
if (!value) return;
if (typeof value !== "number") return;
let fileData = load(this.file)
if (typeof fileData[data] !== "number") return;
if (operator === "-") {let i = fileData[data] - value;
return i} else if (operator === "+") {let ii = fileData[data] + value;
return ii} else if (operator === "*") {let iii = fileData[data] * value;
return iii} else if (operator === "/") {let iiii = fileData[data] / value;
return iiii} else { return; }}

}module.exports = { kubitdb };