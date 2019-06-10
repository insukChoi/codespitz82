if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var equals = Kotlin.equals;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  Body.prototype = Object.create(El.prototype);
  Body.prototype.constructor = Body;
  Div.prototype = Object.create(El.prototype);
  Div.prototype.constructor = Div;
  Canvas.prototype = Object.create(El.prototype);
  Canvas.prototype.constructor = Canvas;
  Method.prototype = Object.create(Enum.prototype);
  Method.prototype.constructor = Method;
  function app$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    if ((Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE()).keyCode !== 13)
      return;
    var input = Kotlin.isType(tmp$_0 = it.target, HTMLInputElement) ? tmp$_0 : throwCCE();
    var v = input.value;
    (tmp$_1 = document.querySelector('#result')) != null ? (tmp$_1.innerHTML = v + ' = ' + calc(v)) : null;
    return Unit;
  }
  function app() {
    var tmp$, tmp$_0;
    (tmp$ = document.querySelector('#base')) != null ? (tmp$.innerHTML = '\n        <input id="input"/>\n        <div id="result"><\/div>\n    ') : null;
    (tmp$_0 = document.querySelector('#input')) != null ? (tmp$_0.addEventListener('keyup', app$lambda), Unit) : null;
  }
  var cleanUp;
  var multDiv;
  var paren;
  function ex(v) {
    var $receiver = replace(cleanUp.replace_x2uqeu$(v, ''), '-', '+-');
    var regex = multDiv;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var tmp$_0 = foundMatch.groupValues;
        var left = tmp$_0.get_za3lpa$(1);
        var op = tmp$_0.get_za3lpa$(2);
        var right = tmp$_0.get_za3lpa$(3);
        var l = toDouble(replace(left, '+', ''));
        var r = toDouble(replace(right, '+', ''));
        tmp$.call(sb, replace((equals(op, '*') ? l * r : l / r).toString(), '-', '+-'));
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    var tmp$_1;
    var accumulator = 0.0;
    tmp$_1 = split(replace_20wsma$result, Kotlin.charArrayOf(43)).iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      accumulator = accumulator + (isBlank(element) ? 0.0 : toDouble(element));
    }
    return accumulator;
  }
  function calc(v) {
    var r = v;
    while (paren.containsMatchIn_6bul2c$(r)) {
      var $receiver = r;
      var regex = paren;
      var replace_20wsma$result;
      replace_20wsma$break: do {
        var match = regex.find_905azu$($receiver);
        if (match == null) {
          replace_20wsma$result = $receiver.toString();
          break replace_20wsma$break;
        }
        var lastStart = 0;
        var length = $receiver.length;
        var sb = StringBuilder_init(length);
        do {
          var foundMatch = ensureNotNull(match);
          sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
          sb.append_gw00v9$(ex(foundMatch.groupValues.get_za3lpa$(1)).toString());
          lastStart = foundMatch.range.endInclusive + 1 | 0;
          match = foundMatch.next();
        }
         while (lastStart < length && match != null);
        if (lastStart < length) {
          sb.append_ezbsdh$($receiver, lastStart, length);
        }
        replace_20wsma$result = sb.toString();
      }
       while (false);
      r = replace_20wsma$result;
    }
    return ex(r);
  }
  function FetchParam() {
    this.queries = LinkedHashMap_init();
    this.headers = LinkedHashMap_init();
    this.method = 'GET';
  }
  FetchParam.$metadata$ = {kind: Kind_CLASS, simpleName: 'FetchParam', interfaces: []};
  function fetch$lambda$lambda(f) {
    var k = f.component1(), v = f.component2();
    return k + '=' + v.toString();
  }
  function fetch(url, block) {
    var $receiver = new FetchParam();
    block($receiver);
    var tmp$ = window;
    var tmp$_0 = $receiver.method;
    var obj = {};
    var tmp$_1;
    tmp$_1 = $receiver.headers.entries.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      var k = element.key;
      var v = element.value;
      obj[k] = v;
    }
    var body = !equals($receiver.method, 'GET') ? joinToString(toList($receiver.queries), '&', void 0, void 0, void 0, void 0, fetch$lambda$lambda) : null;
    var referrer;
    var referrerPolicy;
    var mode;
    var credentials;
    var cache;
    var redirect;
    var integrity;
    var keepalive;
    var window_0;
    referrer = undefined;
    referrerPolicy = undefined;
    mode = undefined;
    credentials = undefined;
    cache = undefined;
    redirect = undefined;
    integrity = undefined;
    keepalive = undefined;
    window_0 = undefined;
    var o = {};
    o['method'] = tmp$_0;
    o['headers'] = obj;
    o['body'] = body;
    o['referrer'] = referrer;
    o['referrerPolicy'] = referrerPolicy;
    o['mode'] = mode;
    o['credentials'] = credentials;
    o['cache'] = cache;
    o['redirect'] = redirect;
    o['integrity'] = integrity;
    o['keepalive'] = keepalive;
    o['window'] = window_0;
    return tmp$.fetch(new Request(url, o));
  }
  function testFetch$lambda($receiver) {
    $receiver.headers.put_xwzc9p$('X-Auth', 'kotlin');
    $receiver.queries.put_xwzc9p$('page', 1);
    $receiver.method = 'POST';
    return Unit;
  }
  function testFetch$lambda_0(it) {
    return it.text();
  }
  function testFetch$lambda_1(it) {
    println(it);
    return Unit;
  }
  function testFetch() {
    fetch('test.json', testFetch$lambda).then(testFetch$lambda_0).then(testFetch$lambda_1);
  }
  function El(tagname) {
    this.tagname = tagname;
    var tmp$, tmp$_0, tmp$_1;
    if (equals(this.tagname, 'body')) {
      tmp$ = document.body;
      if (tmp$ == null) {
        throw Kotlin.newThrowable('no body');
      }
      tmp$_1 = tmp$;
    }
     else
      tmp$_1 = Kotlin.isType(tmp$_0 = document.createElement(this.tagname), HTMLElement) ? tmp$_0 : throwCCE();
    this.el = tmp$_1;
  }
  Object.defineProperty(El.prototype, 'html', {get: function () {
    return this.el.innerHTML;
  }, set: function (value) {
    this.el.innerHTML = value;
  }});
  El.prototype.get_61zpoe$ = function (key) {
    var tmp$;
    return (tmp$ = this.el.getAttribute(key)) != null ? tmp$ : '';
  };
  El.prototype.set_bm4g0d$ = function (key, value) {
    this.el.setAttribute(key, value.toString());
  };
  El.prototype.invoke = function () {
    return this.el;
  };
  El.prototype.plusAssign_1qf$ = function (child) {
    this.el.appendChild(child.el);
  };
  El.prototype.minusAssign_1qf$ = function (child) {
    this.el.removeChild(child.el);
  };
  Object.defineProperty(El.prototype, 'style', {get: function () {
    return this.el.style;
  }});
  El.$metadata$ = {kind: Kind_CLASS, simpleName: 'El', interfaces: []};
  function Body() {
    Body_instance = this;
    El.call(this, 'body');
  }
  Body.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Body', interfaces: [El]};
  var Body_instance = null;
  function Body_getInstance() {
    if (Body_instance === null) {
      new Body();
    }
    return Body_instance;
  }
  function Div() {
    El.call(this, 'div');
  }
  Div.$metadata$ = {kind: Kind_CLASS, simpleName: 'Div', interfaces: [El]};
  function Canvas() {
    El.call(this, 'canvas');
  }
  Object.defineProperty(Canvas.prototype, 'context', {get: function () {
    var tmp$, tmp$_0, tmp$_1;
    return Kotlin.isType(tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.el, HTMLCanvasElement) ? tmp$ : null) != null ? tmp$_0.getContext('2d') : null, CanvasRenderingContext2D) ? tmp$_1 : null;
  }});
  Canvas.$metadata$ = {kind: Kind_CLASS, simpleName: 'Canvas', interfaces: [El]};
  function htmlBuilder() {
    var $receiver = new IntRange(0, 5);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = new Div();
      $receiver_0.html = 'div-' + item;
      tmp$_0.call(destination, $receiver_0);
    }
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      Body_getInstance().plusAssign_1qf$(element);
    }
    var tmp$_2 = Body_getInstance();
    var $receiver_1 = new Canvas();
    var tmp$_3;
    $receiver_1.set_bm4g0d$('width', 500);
    $receiver_1.set_bm4g0d$('height', 500);
    if ((tmp$_3 = $receiver_1.context) != null) {
      tmp$_3.lineWidth = 10.0;
      tmp$_3.strokeRect(75.0, 140.0, 150.0, 110.0);
      tmp$_3.fillRect(130.0, 190.0, 40.0, 60.0);
      tmp$_3.moveTo(50.0, 140.0);
      tmp$_3.lineTo(150.0, 60.0);
      tmp$_3.lineTo(250.0, 140.0);
      tmp$_3.closePath();
      tmp$_3.stroke();
    }
    tmp$_2.plusAssign_1qf$($receiver_1);
  }
  var rex;
  function main() {
    app();
    htmlBuilder();
    testFetch();
  }
  function Method(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Method_initFields() {
    Method_initFields = function () {
    };
    Method$POST_instance = new Method('POST', 0);
    Method$GET_instance = new Method('GET', 1);
  }
  var Method$POST_instance;
  function Method$POST_getInstance() {
    Method_initFields();
    return Method$POST_instance;
  }
  var Method$GET_instance;
  function Method$GET_getInstance() {
    Method_initFields();
    return Method$GET_instance;
  }
  Method.$metadata$ = {kind: Kind_CLASS, simpleName: 'Method', interfaces: [Enum]};
  function Method$values() {
    return [Method$POST_getInstance(), Method$GET_getInstance()];
  }
  Method.values = Method$values;
  function Method$valueOf(name) {
    switch (name) {
      case 'POST':
        return Method$POST_getInstance();
      case 'GET':
        return Method$GET_getInstance();
      default:throwISE('No enum constant Method.' + name);
    }
  }
  Method.valueOf_61zpoe$ = Method$valueOf;
  function Request_0(url, method, form, timeout, ok, fail) {
  }
  Request_0.$metadata$ = {kind: Kind_CLASS, simpleName: 'Request', interfaces: []};
  function RequestBuilder(url) {
    this.url_0 = url;
    this.method = Method$GET_getInstance();
    this.form_0 = LinkedHashMap_init();
    this.timeout = 0;
    this.ok = null;
    this.fail = null;
  }
  RequestBuilder.prototype.form_puj7f4$ = function (key, value) {
    this.form_0.put_xwzc9p$(key, value);
  };
  RequestBuilder.prototype.build = function () {
    var $receiver = this.form_0;
    return new Request_0(this.url_0, this.method, !$receiver.isEmpty() ? $receiver : null, this.timeout, this.ok, this.fail);
  };
  RequestBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'RequestBuilder', interfaces: []};
  function RequestBuilder_0(url, block) {
    var $receiver = new RequestBuilder(url);
    block($receiver);
    return $receiver.build();
  }
  function request$lambda$lambda(it) {
    return Unit;
  }
  function request$lambda$lambda_0(it) {
    return Unit;
  }
  function request$lambda($receiver) {
    $receiver.method = Method$POST_getInstance();
    $receiver.form_puj7f4$('name', 'hika');
    $receiver.form_puj7f4$('email', 'antop@naver.com');
    $receiver.timeout = 5000;
    $receiver.ok = request$lambda$lambda;
    $receiver.fail = request$lambda$lambda_0;
    return Unit;
  }
  var request;
  _.app = app;
  _.ex_61zpoe$ = ex;
  _.calc_61zpoe$ = calc;
  _.FetchParam = FetchParam;
  _.fetch_1j3ip6$ = fetch;
  _.testFetch = testFetch;
  _.El = El;
  Object.defineProperty(_, 'Body', {get: Body_getInstance});
  _.Div = Div;
  _.Canvas = Canvas;
  _.htmlBuilder = htmlBuilder;
  _.main = main;
  Object.defineProperty(Method, 'POST', {get: Method$POST_getInstance});
  Object.defineProperty(Method, 'GET', {get: Method$GET_getInstance});
  _.Method = Method;
  _.Request = Request_0;
  _.RequestBuilder = RequestBuilder;
  _.RequestBuilder_n78k77$ = RequestBuilder_0;
  cleanUp = Regex_init('[^.\\d-+*\\/]');
  multDiv = Regex_init('((?:\\+-)?[.\\d]+)([*\\/])((?:\\+-)?[.\\d]+)');
  paren = Regex_init('\\(([^()]*)\\)');
  rex = Regex_init('<([a-zA-Z0-9]+)((?:\\s+[a-zA-Z-]+(?:\\s*=\\s*"[^"]*")?)*)\\s*/?');
  request = RequestBuilder_0('http://api.com', request$lambda);
  main();
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map
