var a="Welcome to JavaScript World"
a= a.split('')
for(i=0;i<a.length-1;i++)
{
    for(j=i+1;j<a.length;j++)
    {
        if(a[i]==a[j]&&a[i]!=' ')
        {
            console.log(a[i]+'is a duplication character')
        }
    }
}