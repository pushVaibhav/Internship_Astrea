var x = "this_is_a_variable"
var y=x.split("_")
console.log(y)
var z=y.map(
    (val,index)=>{
        if(index!=0)
        {
            val=val[0].toUpperCase() + val.slice(1,val.length)
        }
        return val
    }
)
console.log(z.join(''))