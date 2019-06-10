fun main(){
    app()
    //println(pass(3){it * 2})
    //reverseFor(listOf("a", "b", "c"), ::println)
    println(Test("a","b").run { a+b })

    println(MapTest().run {
        this["name"] = "insuk"
        job = "developer"
        this["firstName"] = "Choi"
        this["lastName"] = "insuk"
        "$name , $job , $fullName"
    })
}

class Test(val a:String, val b:String)

class MapTest{
    private val map = mutableMapOf<String, String>()
    operator fun get(key:String) = map[key]
    operator fun set(key:String, value:String) { map[key] = value }
    val name:String? get() = map["name"]
    var job:String? get() = map["job"]
                    set(value) {value?.let { map["job"] = it }}
    val fullName by lazy { map["firstName"] + " " + map["lastName"] }
}

fun pass(v:Int, block:(Int)->Int) = block(v)

inline fun <T>reverseFor(v:List<T>, block: (T) -> Unit){
    var i = v.size
    while (i-- > 0) block(v[i])
}
