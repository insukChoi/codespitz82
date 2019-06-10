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
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
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
  function main() {
    app();
    var $receiver = new Test('a', 'b');
    println($receiver.a + $receiver.b);
    var $receiver_0 = new MapTest();
    $receiver_0.set_puj7f4$('name', 'insuk');
    $receiver_0.job = 'developer';
    $receiver_0.set_puj7f4$('firstName', 'Choi');
    $receiver_0.set_puj7f4$('lastName', 'insuk');
    println(toString($receiver_0.name) + ' , ' + toString($receiver_0.job) + ' , ' + $receiver_0.fullName);
  }
  function Test(a, b) {
    this.a = a;
    this.b = b;
  }
  Test.$metadata$ = {kind: Kind_CLASS, simpleName: 'Test', interfaces: []};
  function MapTest() {
    this.map_0 = LinkedHashMap_init();
    this.fullName_mltikg$_0 = lazy(MapTest$fullName$lambda(this));
  }
  MapTest.prototype.get_61zpoe$ = function (key) {
    return this.map_0.get_11rb$(key);
  };
  MapTest.prototype.set_puj7f4$ = function (key, value) {
    this.map_0.put_xwzc9p$(key, value);
  };
  Object.defineProperty(MapTest.prototype, 'name', {get: function () {
    return this.map_0.get_11rb$('name');
  }});
  Object.defineProperty(MapTest.prototype, 'job', {get: function () {
    return this.map_0.get_11rb$('job');
  }, set: function (value) {
    if (value != null) {
      this.map_0.put_xwzc9p$('job', value);
    }
  }});
  Object.defineProperty(MapTest.prototype, 'fullName', {get: function () {
    return this.fullName_mltikg$_0.value;
  }});
  function MapTest$fullName$lambda(this$MapTest) {
    return function () {
      return this$MapTest.map_0.get_11rb$('firstName') + ' ' + this$MapTest.map_0.get_11rb$('lastName');
    };
  }
  MapTest.$metadata$ = {kind: Kind_CLASS, simpleName: 'MapTest', interfaces: []};
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
  function Request(url, method, form, timeout, ok, fail) {
  }
  Request.$metadata$ = {kind: Kind_CLASS, simpleName: 'Request', interfaces: []};
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
    return new Request(this.url_0, this.method, !$receiver.isEmpty() ? $receiver : null, this.timeout, this.ok, this.fail);
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
  _.main = main;
  _.Test = Test;
  _.MapTest = MapTest;
  Object.defineProperty(Method, 'POST', {get: Method$POST_getInstance});
  Object.defineProperty(Method, 'GET', {get: Method$GET_getInstance});
  _.Method = Method;
  _.Request = Request;
  _.RequestBuilder = RequestBuilder;
  _.RequestBuilder_n78k77$ = RequestBuilder_0;
  cleanUp = Regex_init('[^.\\d-+*\\/]');
  multDiv = Regex_init('((?:\\+-)?[.\\d]+)([*\\/])((?:\\+-)?[.\\d]+)');
  paren = Regex_init('\\(([^()]*)\\)');
  request = RequestBuilder_0('http://api.com', request$lambda);
  main();
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);

//# sourceMappingURL=app.js.map
