//Separating Data with String Split(); because Github can't use PHP
var var1 = "id,first_name,last_name,email,gender,ip_address 1,Quincy,Luckhurst,qluckhurst0@statcounter.com,Male,114.82.67.66 2,Nevin,McCadden,nmccadden1@pcworld.com,Male,246.205.214.19 3,Percival,Brierly,pbrierly2@cloudflare.com,Male,162.113.180.37 4,Jamesy,Ramm,jramm3@alexa.com,Male,234.90.86.213 5,Darnell,Dietmar,ddietmar4@zimbio.com,Male,11.15.38.180 6,Robers,Chafney,rchafney5@adobe.com,Male,242.54.12.61 7,Cami,McIlharga,cmcilharga6@slate.com,Female,123.171.194.0 8,Milton,Armatage,marmatage7@nifty.com,Male,220.123.5.72 9,Faulkner,Jardein,fjardein8@statcounter.com,Male,250.106.34.40 10,Luci,End,lend9@angelfire.com,Female,201.204.171.58"
console.log(var1);
var var2 = var1.split(" ");
console.log(var2);
var categories = var2[0].split(",");
console.log(categories);
var line1 = var2[1].split(",");
console.log(line1);
var line2 = var2[2].split(",");
console.log(line2);
var line3 = var2[3].split(",");
console.log(line3);
var line4 = var2[4].split(",");
console.log(line4);
var line5 = var2[5].split(",");
console.log(line5);
var line6 = var2[6].split(",");
console.log(line6);
var line7 = var2[7].split(",");
console.log(line7);
var line8 = var2[8].split(",");
console.log(line8);
var line9 = var2[9].split(",");
console.log(line9);
var line10 = var2[10].split(",");
console.log(line10);
//This code is a trainwreck
