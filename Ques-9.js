var x=[1,2,39,4,5,8,33,37]
var a= x[0]
var b= x[0]
for(i=1;i<x.length;i++)
{
    if(a<x[i])
    {
        a=x[i]
    }
    if(b<a && x[i]>b)
    {
        b=x[i];
    }
}
console.log("Second largest number is : " + b)