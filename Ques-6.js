var a=[1,2,3,4,5,6,7,8,9]
var z=[1,2,3,4,3,5,1,7,3,9]
var c=0
for(i=0;i<a.length;i++)
{
    for(j=0;j<z.length;j++)
    {
        if(a[i]==z[j])
        {
            c++;
        }
    }
    if(c!=0)
    {
        console.log(a[i] + "->" + c)
        c=0
    }
}