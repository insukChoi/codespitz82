enum class Method{POST, GET}

typealias listener = (String) -> Unit

class Request(
        url:String,
        method:Method,
        form:MutableMap<String, String>?,
        timeout:Int,
        ok:listener?,
        fail:listener?
)

class RequestBuilder(private val url:String){
    var method: Method = Method.GET
    private val form = mutableMapOf<String, String>()
    var timeout = 0
    fun form(key: String, value: String) { this.form[key] = value }
    var ok: listener? = null
    var fail: listener? = null
    fun build() = Request(url, method, form.takeIf { it.isNotEmpty() }, timeout, ok, fail)
}

fun RequestBuilder(url: String, block: RequestBuilder.() -> Unit) = RequestBuilder(url).apply(block).build()

val request = RequestBuilder("http://api.com") {
    method = Method.POST
    form("name", "hika")
    form("email", "antop@naver.com")
    timeout = 5_000
    ok = {}
    fail = {}
}
