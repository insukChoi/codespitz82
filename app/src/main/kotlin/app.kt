import org.w3c.dom.HTMLInputElement
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document

fun app(){
    document.querySelector("#base")?.innerHTML = """
        <input id="input"/>
        <div id="result"></div>
    """
    document.querySelector("#input")?.addEventListener("keyup", {
        if ((it as KeyboardEvent).keyCode != 13) return@addEventListener
        var input = it.target as HTMLInputElement
        val v = input.value

        document.querySelector("#result")?.innerHTML = "$v = ${calc(v)}"
    })
}

/// """...""" : no escaping, newlines
val cleanUp = """[^.\d-+*\/]""".toRegex()
val multDiv = """((?:\+-)?[.\d]+)([*\/])((?:\+-)?[.\d]+)""".toRegex()
val paren = """\(([^()]*)\)""".toRegex()

fun ex(v: String) =
        v.replace(cleanUp, "").replace("-", "+-").replace(multDiv) {
            // _ 변수 : 사용하지 않을 변수를 선언
            val (_, left, op, right) = it.groupValues // destructuring
            val l = left.replace("+", "").toDouble()
            val r = right.replace("+", "").toDouble()
            "${if (op == "*") l * r else l / r}".replace("-", "+-")
        }.split('+').fold(0.0) { sum, v ->
            sum + if (v.isBlank()) 0.0 else v.toDouble()
        }

fun calc(v: String): Double {
    var r = v // 파라미터는 val (상수)이니 var 로 변환
    while (paren.containsMatchIn(r)) r = r.replace(paren) { "${ex(it.groupValues[1])}" }
    return ex(r)
}