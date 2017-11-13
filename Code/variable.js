//Separating Data with String Split(); because Github can't use PHP
var var1 = "id,first_name,last_name,email,gender,ip_address
1,Quincy,Luckhurst,qluckhurst0@statcounter.com,Male,114.82.67.66
2,Nevin,McCadden,nmccadden1@pcworld.com,Male,246.205.214.19
3,Percival,Brierly,pbrierly2@cloudflare.com,Male,162.113.180.37
4,Jamesy,Ramm,jramm3@alexa.com,Male,234.90.86.213
5,Darnell,Dietmar,ddietmar4@zimbio.com,Male,11.15.38.180
6,Robers,Chafney,rchafney5@adobe.com,Male,242.54.12.61
7,Cami,McIlharga,cmcilharga6@slate.com,Female,123.171.194.0
8,Milton,Armatage,marmatage7@nifty.com,Male,220.123.5.72
9,Faulkner,Jardein,fjardein8@statcounter.com,Male,250.106.34.40
10,Luci,End,lend9@angelfire.com,Female,201.204.171.58"

var var2 = var1.split(" ");
var categories = var2[0].split(",");
var line1 = var2[1].split(",");
var line2 = var2[2].split(",");
var line3 = var2[3].split(",");
var line4 = var2[4].split(",");
var line5 = var2[5].split(",");
var line6 = var2[6].split(",");
var line7 = var2[7].split(",");
var line8 = var2[8].split(",");
var line9 = var2[9].split(",");
var line10 = var2[10].split(",");
