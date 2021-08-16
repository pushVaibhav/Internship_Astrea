var x=`Company has strong expertise in Salesforce communities, Service Cloud Implementation, Apex and Visualforce development, Lightning Components and Pardot. Company is a Salesforce certified ISV, OEM partnar. Company is also a Salesforce certified Product Development Organization (PDO)
Company is a Salesforce.org certified partner and works constantly with NonProfits to provide the necessary support to automate their operations and get the best of Salesforce. Company offers discounted rates for NonProfits needing Salesforce customization. Company works on the Salesforce NPSP implementations, Fundraising & Payments for its NonProfit partnersCompany is an accredited Salesforce Einstein Analytics partner and also one of the highest rated partners with Klipfolio`

// Solution 1
// var y= x.replaceAll("Company","Astrea")
// console.log(y)

// Solution 2
var y= /Company/igm
var str = x.replace(y,'Astrea')
console.log(str)

// Solution in one line on browser's console
x.replace(/company/igm,'Astrea')