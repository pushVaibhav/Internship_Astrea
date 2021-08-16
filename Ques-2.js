var x='abcdefghijklmnopqrstuvwxyz'.split('');
var z='hpcklhhpk'.split('');
var c=0;
for(i=0;i<=26;i++)
{
    for(j=0;j<z.length;j++)
    {
        if(x[i]==z[j])
        { c++
        }
    }
    if(c!=0)
    {
        console.log('Frequency of ' + x[i] + ' is ' + c)
        c=0
    }
}