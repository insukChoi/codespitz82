import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.css.CSSStyleDeclaration
import kotlin.browser.document

abstract class El(val tagname: String){
    protected val el = when(tagname){
        "body" -> document.body ?: throw Throwable("no body")
        else -> document.createElement(tagname) as HTMLElement
    }

    var html:String get() = el.innerHTML
                    set(value){el.innerHTML = value}

    operator fun get(key:String) = el.getAttribute(key) ?: ""
    operator fun set(key:String, value: Any) = el.setAttribute(key, "$value")
    operator fun invoke() = el
    operator fun plusAssign(child:El){el.appendChild(child.el)}
    operator fun minusAssign(child:El){el.removeChild(child.el)}
    val style:CSSStyleDeclaration get() = el.style
}

object Body : El("body")
class Div : El("div")
class H2 : El("h2")
class Canvas : El("canvas") {
    val context: CanvasRenderingContext2D? get() = (el as? HTMLCanvasElement)?.getContext("2d") as? CanvasRenderingContext2D
}


fun htmlBuilder() {
    // for 0~5
    (0..5).map {
        Div().apply { html = "div-$it" }
    }.forEach {
        Body += it // plusAssign
    }

    Body += Canvas().apply {
        this["width"] = 500 // set
        this["height"] = 500 // set
        context?.run {
            // hide this keyword
            lineWidth = 10.0
            strokeRect(75.0, 140.0, 150.0, 110.0)
            fillRect(130.0, 190.0, 40.0, 60.0)
            moveTo(50.0, 140.0)
            lineTo(150.0, 60.0)
            lineTo(250.0, 140.0)
            closePath()
            stroke()
        }
    }

}