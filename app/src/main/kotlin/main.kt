fun main(){
    app()
    //println(pass(3){it * 2})
    //reverseFor(listOf("a", "b", "c"), ::println)
}

fun pass(v:Int, block:(Int)->Int) = block(v)

inline fun <T>reverseFor(v:List<T>, block: (T) -> Unit){
    var i = v.size
    while (i-- > 0) block(v[i])
}
