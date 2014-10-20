/*!
 * jQuery JavaScript Library v1.10.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-24T18:39Z
 */
!function(e, t) {
function o(e) {
var t = e.length, o = ut.type(e);
return ut.isWindow(e) ? !1 :1 === e.nodeType && t ? !0 :"array" === o || "function" !== o && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
}
function n(e) {
var t = Tt[e] = {};
return ut.each(e.match(pt) || [], function(e, o) {
t[o] = !0;
}), t;
}
function i(e, o, n, i) {
if (ut.acceptData(e)) {
var r, a, s = ut.expando, l = e.nodeType, c = l ? ut.cache :e, u = l ? e[s] :e[s] && s;
if (u && c[u] && (i || c[u].data) || n !== t || "string" != typeof o) return u || (u = l ? e[s] = tt.pop() || ut.guid++ :s), 
c[u] || (c[u] = l ? {} :{
toJSON:ut.noop
}), ("object" == typeof o || "function" == typeof o) && (i ? c[u] = ut.extend(c[u], o) :c[u].data = ut.extend(c[u].data, o)), 
a = c[u], i || (a.data || (a.data = {}), a = a.data), n !== t && (a[ut.camelCase(o)] = n), 
"string" == typeof o ? (r = a[o], null == r && (r = a[ut.camelCase(o)])) :r = a, 
r;
}
}
function r(e, t, o) {
if (ut.acceptData(e)) {
var n, i, r = e.nodeType, a = r ? ut.cache :e, l = r ? e[ut.expando] :ut.expando;
if (a[l]) {
if (t && (n = o ? a[l] :a[l].data)) {
ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) :t in n ? t = [ t ] :(t = ut.camelCase(t), 
t = t in n ? [ t ] :t.split(" ")), i = t.length;
for (;i--; ) delete n[t[i]];
if (o ? !s(n) :!ut.isEmptyObject(n)) return;
}
(o || (delete a[l].data, s(a[l]))) && (r ? ut.cleanData([ e ], !0) :ut.support.deleteExpando || a != a.window ? delete a[l] :a[l] = null);
}
}
}
function a(e, o, n) {
if (n === t && 1 === e.nodeType) {
var i = "data-" + o.replace(Et, "-$1").toLowerCase();
if (n = e.getAttribute(i), "string" == typeof n) {
try {
n = "true" === n ? !0 :"false" === n ? !1 :"null" === n ? null :+n + "" === n ? +n :Ct.test(n) ? ut.parseJSON(n) :n;
} catch (r) {}
ut.data(e, o, n);
} else n = t;
}
return n;
}
function s(e) {
var t;
for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
return !0;
}
function l() {
return !0;
}
function c() {
return !1;
}
function u() {
try {
return Q.activeElement;
} catch (e) {}
}
function d(e, t) {
do e = e[t]; while (e && 1 !== e.nodeType);
return e;
}
function p(e, t, o) {
if (ut.isFunction(t)) return ut.grep(e, function(e, n) {
return !!t.call(e, n, e) !== o;
});
if (t.nodeType) return ut.grep(e, function(e) {
return e === t !== o;
});
if ("string" == typeof t) {
if (Rt.test(t)) return ut.filter(t, e, o);
t = ut.filter(t, e);
}
return ut.grep(e, function(e) {
return ut.inArray(e, t) >= 0 !== o;
});
}
function g(e) {
var t = Ut.split("|"), o = e.createDocumentFragment();
if (o.createElement) for (;t.length; ) o.createElement(t.pop());
return o;
}
function h(e, t) {
return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t :t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) :e;
}
function m(e) {
return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type, e;
}
function f(e) {
var t = io.exec(e.type);
return t ? e.type = t[1] :e.removeAttribute("type"), e;
}
function v(e, t) {
for (var o, n = 0; null != (o = e[n]); n++) ut._data(o, "globalEval", !t || ut._data(t[n], "globalEval"));
}
function w(e, t) {
if (1 === t.nodeType && ut.hasData(e)) {
var o, n, i, r = ut._data(e), a = ut._data(t, r), s = r.events;
if (s) {
delete a.handle, a.events = {};
for (o in s) for (n = 0, i = s[o].length; i > n; n++) ut.event.add(t, o, s[o][n]);
}
a.data && (a.data = ut.extend({}, a.data));
}
}
function y(e, t) {
var o, n, i;
if (1 === t.nodeType) {
if (o = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
i = ut._data(t);
for (n in i.events) ut.removeEvent(t, n, i.handle);
t.removeAttribute(ut.expando);
}
"script" === o && t.text !== e.text ? (m(t).text = e.text, f(t)) :"object" === o ? (t.parentNode && (t.outerHTML = e.outerHTML), 
ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) :"input" === o && to.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
t.value !== e.value && (t.value = e.value)) :"option" === o ? t.defaultSelected = t.selected = e.defaultSelected :("input" === o || "textarea" === o) && (t.defaultValue = e.defaultValue);
}
}
function b(e, o) {
var n, i, r = 0, a = typeof e.getElementsByTagName !== G ? e.getElementsByTagName(o || "*") :typeof e.querySelectorAll !== G ? e.querySelectorAll(o || "*") :t;
if (!a) for (a = [], n = e.childNodes || e; null != (i = n[r]); r++) !o || ut.nodeName(i, o) ? a.push(i) :ut.merge(a, b(i, o));
return o === t || o && ut.nodeName(e, o) ? ut.merge([ e ], a) :a;
}
function _(e) {
to.test(e.type) && (e.defaultChecked = e.checked);
}
function k(e, t) {
if (t in e) return t;
for (var o = t.charAt(0).toUpperCase() + t.slice(1), n = t, i = To.length; i--; ) if (t = To[i] + o, 
t in e) return t;
return n;
}
function x(e, t) {
return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e);
}
function S(e, t) {
for (var o, n, i, r = [], a = 0, s = e.length; s > a; a++) n = e[a], n.style && (r[a] = ut._data(n, "olddisplay"), 
o = n.style.display, t ? (r[a] || "none" !== o || (n.style.display = ""), "" === n.style.display && x(n) && (r[a] = ut._data(n, "olddisplay", M(n.nodeName)))) :r[a] || (i = x(n), 
(o && "none" !== o || !i) && ut._data(n, "olddisplay", i ? o :ut.css(n, "display"))));
for (a = 0; s > a; a++) n = e[a], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[a] || "" :"none"));
return e;
}
function T(e, t, o) {
var n = wo.exec(t);
return n ? Math.max(0, n[1] - (o || 0)) + (n[2] || "px") :t;
}
function C(e, t, o, n, i) {
for (var r = o === (n ? "border" :"content") ? 4 :"width" === t ? 1 :0, a = 0; 4 > r; r += 2) "margin" === o && (a += ut.css(e, o + So[r], !0, i)), 
n ? ("content" === o && (a -= ut.css(e, "padding" + So[r], !0, i)), "margin" !== o && (a -= ut.css(e, "border" + So[r] + "Width", !0, i))) :(a += ut.css(e, "padding" + So[r], !0, i), 
"padding" !== o && (a += ut.css(e, "border" + So[r] + "Width", !0, i)));
return a;
}
function E(e, t, o) {
var n = !0, i = "width" === t ? e.offsetWidth :e.offsetHeight, r = uo(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r);
if (0 >= i || null == i) {
if (i = po(e, t, r), (0 > i || null == i) && (i = e.style[t]), yo.test(i)) return i;
n = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
}
return i + C(e, t, o || (a ? "border" :"content"), n, r) + "px";
}
function M(e) {
var t = Q, o = _o[e];
return o || (o = $(e, t), "none" !== o && o || (co = (co || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), 
t = (co[0].contentWindow || co[0].contentDocument).document, t.write("<!doctype html><html><body>"), 
t.close(), o = $(e, t), co.detach()), _o[e] = o), o;
}
function $(e, t) {
var o = ut(t.createElement(e)).appendTo(t.body), n = ut.css(o[0], "display");
return o.remove(), n;
}
function D(e, t, o, n) {
var i;
if (ut.isArray(t)) ut.each(t, function(t, i) {
o || Eo.test(e) ? n(e, i) :D(e + "[" + ("object" == typeof i ? t :"") + "]", i, o, n);
}); else if (o || "object" !== ut.type(t)) n(e, t); else for (i in t) D(e + "[" + i + "]", t[i], o, n);
}
function L(e) {
return function(t, o) {
"string" != typeof t && (o = t, t = "*");
var n, i = 0, r = t.toLowerCase().match(pt) || [];
if (ut.isFunction(o)) for (;n = r[i++]; ) "+" === n[0] ? (n = n.slice(1) || "*", 
(e[n] = e[n] || []).unshift(o)) :(e[n] = e[n] || []).push(o);
};
}
function I(e, t, o, n) {
function i(s) {
var l;
return r[s] = !0, ut.each(e[s] || [], function(e, s) {
var c = s(t, o, n);
return "string" != typeof c || a || r[c] ? a ? !(l = c) :void 0 :(t.dataTypes.unshift(c), 
i(c), !1);
}), l;
}
var r = {}, a = e === qo;
return i(t.dataTypes[0]) || !r["*"] && i("*");
}
function A(e, o) {
var n, i, r = ut.ajaxSettings.flatOptions || {};
for (i in o) o[i] !== t && ((r[i] ? e :n || (n = {}))[i] = o[i]);
return n && ut.extend(!0, e, n), e;
}
function O(e, o, n) {
for (var i, r, a, s, l = e.contents, c = e.dataTypes; "*" === c[0]; ) c.shift(), 
r === t && (r = e.mimeType || o.getResponseHeader("Content-Type"));
if (r) for (s in l) if (l[s] && l[s].test(r)) {
c.unshift(s);
break;
}
if (c[0] in n) a = c[0]; else {
for (s in n) {
if (!c[0] || e.converters[s + " " + c[0]]) {
a = s;
break;
}
i || (i = s);
}
a = a || i;
}
return a ? (a !== c[0] && c.unshift(a), n[a]) :void 0;
}
function B(e, t, o, n) {
var i, r, a, s, l, c = {}, u = e.dataTypes.slice();
if (u[1]) for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
for (r = u.shift(); r; ) if (e.responseFields[r] && (o[e.responseFields[r]] = t), 
!l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
if (a = c[l + " " + r] || c["* " + r], !a) for (i in c) if (s = i.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
a === !0 ? a = c[i] :c[i] !== !0 && (r = s[0], u.unshift(s[1]));
break;
}
if (a !== !0) if (a && e["throws"]) t = a(t); else try {
t = a(t);
} catch (d) {
return {
state:"parsererror",
error:a ? d :"No conversion from " + l + " to " + r
};
}
}
return {
state:"success",
data:t
};
}
function N() {
try {
return new e.XMLHttpRequest();
} catch (t) {}
}
function H() {
try {
return new e.ActiveXObject("Microsoft.XMLHTTP");
} catch (t) {}
}
function j() {
return setTimeout(function() {
Zo = t;
}), Zo = ut.now();
}
function P(e, t, o) {
for (var n, i = (an[t] || []).concat(an["*"]), r = 0, a = i.length; a > r; r++) if (n = i[r].call(o, t, e)) return n;
}
function z(e, t, o) {
var n, i, r = 0, a = rn.length, s = ut.Deferred().always(function() {
delete l.elem;
}), l = function() {
if (i) return !1;
for (var t = Zo || j(), o = Math.max(0, c.startTime + c.duration - t), n = o / c.duration || 0, r = 1 - n, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
return s.notifyWith(e, [ c, r, o ]), 1 > r && l ? o :(s.resolveWith(e, [ c ]), !1);
}, c = s.promise({
elem:e,
props:ut.extend({}, t),
opts:ut.extend(!0, {
specialEasing:{}
}, o),
originalProperties:t,
originalOptions:o,
startTime:Zo || j(),
duration:o.duration,
tweens:[],
createTween:function(t, o) {
var n = ut.Tween(e, c.opts, t, o, c.opts.specialEasing[t] || c.opts.easing);
return c.tweens.push(n), n;
},
stop:function(t) {
var o = 0, n = t ? c.tweens.length :0;
if (i) return this;
for (i = !0; n > o; o++) c.tweens[o].run(1);
return t ? s.resolveWith(e, [ c, t ]) :s.rejectWith(e, [ c, t ]), this;
}
}), u = c.props;
for (F(u, c.opts.specialEasing); a > r; r++) if (n = rn[r].call(c, e, u, c.opts)) return n;
return ut.map(u, P, c), ut.isFunction(c.opts.start) && c.opts.start.call(e, c), 
ut.fx.timer(ut.extend(l, {
elem:e,
anim:c,
queue:c.opts.queue
})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always);
}
function F(e, t) {
var o, n, i, r, a;
for (o in e) if (n = ut.camelCase(o), i = t[n], r = e[o], ut.isArray(r) && (i = r[1], 
r = e[o] = r[0]), o !== n && (e[n] = r, delete e[o]), a = ut.cssHooks[n], a && "expand" in a) {
r = a.expand(r), delete e[n];
for (o in r) o in e || (e[o] = r[o], t[o] = i);
} else t[n] = i;
}
function R(e, t, o) {
var n, i, r, a, s, l, c = this, u = {}, d = e.style, p = e.nodeType && x(e), g = ut._data(e, "fxshow");
o.queue || (s = ut._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, 
l = s.empty.fire, s.empty.fire = function() {
s.unqueued || l();
}), s.unqueued++, c.always(function() {
c.always(function() {
s.unqueued--, ut.queue(e, "fx").length || s.empty.fire();
});
})), 1 === e.nodeType && ("height" in t || "width" in t) && (o.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
"inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== M(e.nodeName) ? d.zoom = 1 :d.display = "inline-block")), 
o.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
d.overflow = o.overflow[0], d.overflowX = o.overflow[1], d.overflowY = o.overflow[2];
}));
for (n in t) if (i = t[n], tn.exec(i)) {
if (delete t[n], r = r || "toggle" === i, i === (p ? "hide" :"show")) continue;
u[n] = g && g[n] || ut.style(e, n);
}
if (!ut.isEmptyObject(u)) {
g ? "hidden" in g && (p = g.hidden) :g = ut._data(e, "fxshow", {}), r && (g.hidden = !p), 
p ? ut(e).show() :c.done(function() {
ut(e).hide();
}), c.done(function() {
var t;
ut._removeData(e, "fxshow");
for (t in u) ut.style(e, t, u[t]);
});
for (n in u) a = P(p ? g[n] :0, n, c), n in g || (g[n] = a.start, p && (a.end = a.start, 
a.start = "width" === n || "height" === n ? 1 :0));
}
}
function Y(e, t, o, n, i) {
return new Y.prototype.init(e, t, o, n, i);
}
function q(e, t) {
var o, n = {
height:e
}, i = 0;
for (t = t ? 1 :0; 4 > i; i += 2 - t) o = So[i], n["margin" + o] = n["padding" + o] = e;
return t && (n.opacity = n.width = e), n;
}
function W(e) {
return ut.isWindow(e) ? e :9 === e.nodeType ? e.defaultView || e.parentWindow :!1;
}
var U, V, G = typeof t, J = e.location, Q = e.document, K = Q.documentElement, X = e.jQuery, Z = e.$, et = {}, tt = [], ot = "1.10.0", nt = tt.concat, it = tt.push, rt = tt.slice, at = tt.indexOf, st = et.toString, lt = et.hasOwnProperty, ct = ot.trim, ut = function(e, t) {
return new ut.fn.init(e, t, V);
}, dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, pt = /\S+/g, gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ht = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ft = /^[\],:{}\s]*$/, vt = /(?:^|:|,)(?:\s*\[)+/g, wt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, bt = /^-ms-/, _t = /-([\da-z])/gi, kt = function(e, t) {
return t.toUpperCase();
}, xt = function(e) {
(Q.addEventListener || "load" === e.type || "complete" === Q.readyState) && (St(), 
ut.ready());
}, St = function() {
Q.addEventListener ? (Q.removeEventListener("DOMContentLoaded", xt, !1), e.removeEventListener("load", xt, !1)) :(Q.detachEvent("onreadystatechange", xt), 
e.detachEvent("onload", xt));
};
ut.fn = ut.prototype = {
jquery:ot,
constructor:ut,
init:function(e, o, n) {
var i, r;
if (!e) return this;
if ("string" == typeof e) {
if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] :ht.exec(e), 
!i || !i[1] && o) return !o || o.jquery ? (o || n).find(e) :this.constructor(o).find(e);
if (i[1]) {
if (o = o instanceof ut ? o[0] :o, ut.merge(this, ut.parseHTML(i[1], o && o.nodeType ? o.ownerDocument || o :Q, !0)), 
mt.test(i[1]) && ut.isPlainObject(o)) for (i in o) ut.isFunction(this[i]) ? this[i](o[i]) :this.attr(i, o[i]);
return this;
}
if (r = Q.getElementById(i[2]), r && r.parentNode) {
if (r.id !== i[2]) return n.find(e);
this.length = 1, this[0] = r;
}
return this.context = Q, this.selector = e, this;
}
return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) :ut.isFunction(e) ? n.ready(e) :(e.selector !== t && (this.selector = e.selector, 
this.context = e.context), ut.makeArray(e, this));
},
selector:"",
length:0,
toArray:function() {
return rt.call(this);
},
get:function(e) {
return null == e ? this.toArray() :0 > e ? this[this.length + e] :this[e];
},
pushStack:function(e) {
var t = ut.merge(this.constructor(), e);
return t.prevObject = this, t.context = this.context, t;
},
each:function(e, t) {
return ut.each(this, e, t);
},
ready:function(e) {
return ut.ready.promise().done(e), this;
},
slice:function() {
return this.pushStack(rt.apply(this, arguments));
},
first:function() {
return this.eq(0);
},
last:function() {
return this.eq(-1);
},
eq:function(e) {
var t = this.length, o = +e + (0 > e ? t :0);
return this.pushStack(o >= 0 && t > o ? [ this[o] ] :[]);
},
map:function(e) {
return this.pushStack(ut.map(this, function(t, o) {
return e.call(t, o, t);
}));
},
end:function() {
return this.prevObject || this.constructor(null);
},
push:it,
sort:[].sort,
splice:[].splice
}, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function() {
var e, o, n, i, r, a, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
for ("boolean" == typeof s && (u = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), 
c === l && (s = this, --l); c > l; l++) if (null != (r = arguments[l])) for (i in r) e = s[i], 
n = r[i], s !== n && (u && n && (ut.isPlainObject(n) || (o = ut.isArray(n))) ? (o ? (o = !1, 
a = e && ut.isArray(e) ? e :[]) :a = e && ut.isPlainObject(e) ? e :{}, s[i] = ut.extend(u, a, n)) :n !== t && (s[i] = n));
return s;
}, ut.extend({
expando:"jQuery" + (ot + Math.random()).replace(/\D/g, ""),
noConflict:function(t) {
return e.$ === ut && (e.$ = Z), t && e.jQuery === ut && (e.jQuery = X), ut;
},
isReady:!1,
readyWait:1,
holdReady:function(e) {
e ? ut.readyWait++ :ut.ready(!0);
},
ready:function(e) {
if (e === !0 ? !--ut.readyWait :!ut.isReady) {
if (!Q.body) return setTimeout(ut.ready);
ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (U.resolveWith(Q, [ ut ]), ut.fn.trigger && ut(Q).trigger("ready").off("ready"));
}
},
isFunction:function(e) {
return "function" === ut.type(e);
},
isArray:Array.isArray || function(e) {
return "array" === ut.type(e);
},
isWindow:function(e) {
return null != e && e == e.window;
},
isNumeric:function(e) {
return !isNaN(parseFloat(e)) && isFinite(e);
},
type:function(e) {
return null == e ? String(e) :"object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" :typeof e;
},
isPlainObject:function(e) {
var o;
if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return !1;
try {
if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return !1;
} catch (n) {
return !1;
}
if (ut.support.ownLast) for (o in e) return lt.call(e, o);
for (o in e) ;
return o === t || lt.call(e, o);
},
isEmptyObject:function(e) {
var t;
for (t in e) return !1;
return !0;
},
error:function(e) {
throw new Error(e);
},
parseHTML:function(e, t, o) {
if (!e || "string" != typeof e) return null;
"boolean" == typeof t && (o = t, t = !1), t = t || Q;
var n = mt.exec(e), i = !o && [];
return n ? [ t.createElement(n[1]) ] :(n = ut.buildFragment([ e ], t, i), i && ut(i).remove(), 
ut.merge([], n.childNodes));
},
parseJSON:function(t) {
return e.JSON && e.JSON.parse ? e.JSON.parse(t) :null === t ? t :"string" == typeof t && (t = ut.trim(t), 
t && ft.test(t.replace(wt, "@").replace(yt, "]").replace(vt, ""))) ? new Function("return " + t)() :(ut.error("Invalid JSON: " + t), 
void 0);
},
parseXML:function(o) {
var n, i;
if (!o || "string" != typeof o) return null;
try {
e.DOMParser ? (i = new DOMParser(), n = i.parseFromString(o, "text/xml")) :(n = new ActiveXObject("Microsoft.XMLDOM"), 
n.async = "false", n.loadXML(o));
} catch (r) {
n = t;
}
return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + o), 
n;
},
noop:function() {},
globalEval:function(t) {
t && ut.trim(t) && (e.execScript || function(t) {
e.eval.call(e, t);
})(t);
},
camelCase:function(e) {
return e.replace(bt, "ms-").replace(_t, kt);
},
nodeName:function(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
},
each:function(e, t, n) {
var i, r = 0, a = e.length, s = o(e);
if (n) {
if (s) for (;a > r && (i = t.apply(e[r], n), i !== !1); r++) ; else for (r in e) if (i = t.apply(e[r], n), 
i === !1) break;
} else if (s) for (;a > r && (i = t.call(e[r], r, e[r]), i !== !1); r++) ; else for (r in e) if (i = t.call(e[r], r, e[r]), 
i === !1) break;
return e;
},
trim:ct && !ct.call("﻿ ") ? function(e) {
return null == e ? "" :ct.call(e);
} :function(e) {
return null == e ? "" :(e + "").replace(gt, "");
},
makeArray:function(e, t) {
var n = t || [];
return null != e && (o(Object(e)) ? ut.merge(n, "string" == typeof e ? [ e ] :e) :it.call(n, e)), 
n;
},
inArray:function(e, t, o) {
var n;
if (t) {
if (at) return at.call(t, e, o);
for (n = t.length, o = o ? 0 > o ? Math.max(0, n + o) :o :0; n > o; o++) if (o in t && t[o] === e) return o;
}
return -1;
},
merge:function(e, o) {
var n = o.length, i = e.length, r = 0;
if ("number" == typeof n) for (;n > r; r++) e[i++] = o[r]; else for (;o[r] !== t; ) e[i++] = o[r++];
return e.length = i, e;
},
grep:function(e, t, o) {
var n, i = [], r = 0, a = e.length;
for (o = !!o; a > r; r++) n = !!t(e[r], r), o !== n && i.push(e[r]);
return i;
},
map:function(e, t, n) {
var i, r = 0, a = e.length, s = o(e), l = [];
if (s) for (;a > r; r++) i = t(e[r], r, n), null != i && (l[l.length] = i); else for (r in e) i = t(e[r], r, n), 
null != i && (l[l.length] = i);
return nt.apply([], l);
},
guid:1,
proxy:function(e, o) {
var n, i, r;
return "string" == typeof o && (r = e[o], o = e, e = r), ut.isFunction(e) ? (n = rt.call(arguments, 2), 
i = function() {
return e.apply(o || this, n.concat(rt.call(arguments)));
}, i.guid = e.guid = e.guid || ut.guid++, i) :t;
},
access:function(e, o, n, i, r, a, s) {
var l = 0, c = e.length, u = null == n;
if ("object" === ut.type(n)) {
r = !0;
for (l in n) ut.access(e, o, l, n[l], !0, a, s);
} else if (i !== t && (r = !0, ut.isFunction(i) || (s = !0), u && (s ? (o.call(e, i), 
o = null) :(u = o, o = function(e, t, o) {
return u.call(ut(e), o);
})), o)) for (;c > l; l++) o(e[l], n, s ? i :i.call(e[l], l, o(e[l], n)));
return r ? e :u ? o.call(e) :c ? o(e[0], n) :a;
},
now:function() {
return new Date().getTime();
},
swap:function(e, t, o, n) {
var i, r, a = {};
for (r in t) a[r] = e.style[r], e.style[r] = t[r];
i = o.apply(e, n || []);
for (r in t) e.style[r] = a[r];
return i;
}
}), ut.ready.promise = function(t) {
if (!U) if (U = ut.Deferred(), "complete" === Q.readyState) setTimeout(ut.ready); else if (Q.addEventListener) Q.addEventListener("DOMContentLoaded", xt, !1), 
e.addEventListener("load", xt, !1); else {
Q.attachEvent("onreadystatechange", xt), e.attachEvent("onload", xt);
var o = !1;
try {
o = null == e.frameElement && Q.documentElement;
} catch (n) {}
o && o.doScroll && !function i() {
if (!ut.isReady) {
try {
o.doScroll("left");
} catch (e) {
return setTimeout(i, 50);
}
St(), ut.ready();
}
}();
}
return U.promise(t);
}, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
et["[object " + t + "]"] = t.toLowerCase();
}), V = ut(Q), /*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-05-15
 */
function(e, t) {
function o(e, t, o, n) {
var i, r, a, s, l, c, u, d, p, g;
if ((t ? t.ownerDocument || t :q) !== N && B(t), t = t || N, o = o || [], !e || "string" != typeof e) return o;
if (1 !== (s = t.nodeType) && 9 !== s) return [];
if (j && !n) {
if (i = xt.exec(e)) if (a = i[1]) {
if (9 === s) {
if (r = t.getElementById(a), !r || !r.parentNode) return o;
if (r.id === a) return o.push(r), o;
} else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && R(t, r) && r.id === a) return o.push(r), 
o;
} else {
if (i[2]) return it.apply(o, t.getElementsByTagName(e)), o;
if ((a = i[3]) && E.getElementsByClassName && t.getElementsByClassName) return it.apply(o, t.getElementsByClassName(a)), 
o;
}
if (E.qsa && (!P || !P.test(e))) {
if (d = u = Y, p = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
for (c = m(e), (u = t.getAttribute("id")) ? d = u.replace(Ct, "\\$&") :t.setAttribute("id", d), 
d = "[id='" + d + "'] ", l = c.length; l--; ) c[l] = d + f(c[l]);
p = vt.test(e) && t.parentNode || t, g = c.join(",");
}
if (g) try {
return it.apply(o, p.querySelectorAll(g)), o;
} catch (h) {} finally {
u || t.removeAttribute("id");
}
}
}
return S(e.replace(ht, "$1"), t, o, n);
}
function n(e) {
return kt.test(e + "");
}
function i() {
function e(o, n) {
return t.push(o += " ") > $.cacheLength && delete e[t.shift()], e[o] = n;
}
var t = [];
return e;
}
function r(e) {
return e[Y] = !0, e;
}
function a(e) {
var t = N.createElement("div");
try {
return !!e(t);
} catch (o) {
return !1;
} finally {
t.parentNode && t.parentNode.removeChild(t), t = null;
}
}
function s(e, t, o) {
e = e.split("|");
for (var n, i = e.length, r = o ? null :t; i--; ) (n = $.attrHandle[e[i]]) && n !== t || ($.attrHandle[e[i]] = r);
}
function l(e, t) {
var o = e.getAttributeNode(t);
return o && o.specified ? o.value :e[t] === !0 ? t.toLowerCase() :null;
}
function c(e, t) {
return e.getAttribute(t, "type" === t.toLowerCase() ? 1 :2);
}
function u(e) {
return "input" === e.nodeName.toLowerCase() ? e.defaultValue :void 0;
}
function d(e, t) {
var o = t && e, n = o && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);
if (n) return n;
if (o) for (;o = o.nextSibling; ) if (o === t) return -1;
return e ? 1 :-1;
}
function p(e) {
return function(t) {
var o = t.nodeName.toLowerCase();
return "input" === o && t.type === e;
};
}
function g(e) {
return function(t) {
var o = t.nodeName.toLowerCase();
return ("input" === o || "button" === o) && t.type === e;
};
}
function h(e) {
return r(function(t) {
return t = +t, r(function(o, n) {
for (var i, r = e([], o.length, t), a = r.length; a--; ) o[i = r[a]] && (o[i] = !(n[i] = o[i]));
});
});
}
function m(e, t) {
var n, i, r, a, s, l, c, u = G[e + " "];
if (u) return t ? 0 :u.slice(0);
for (s = e, l = [], c = $.preFilter; s; ) {
(!n || (i = mt.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), 
n = !1, (i = ft.exec(s)) && (n = i.shift(), r.push({
value:n,
type:i[0].replace(ht, " ")
}), s = s.slice(n.length));
for (a in $.filter) !(i = _t[a].exec(s)) || c[a] && !(i = c[a](i)) || (n = i.shift(), 
r.push({
value:n,
type:a,
matches:i
}), s = s.slice(n.length));
if (!n) break;
}
return t ? s.length :s ? o.error(e) :G(e, l).slice(0);
}
function f(e) {
for (var t = 0, o = e.length, n = ""; o > t; t++) n += e[t].value;
return n;
}
function v(e, t, o) {
var n = t.dir, i = o && "parentNode" === n, r = U++;
return t.first ? function(t, o, r) {
for (;t = t[n]; ) if (1 === t.nodeType || i) return e(t, o, r);
} :function(t, o, a) {
var s, l, c, u = W + " " + r;
if (a) {
for (;t = t[n]; ) if ((1 === t.nodeType || i) && e(t, o, a)) return !0;
} else for (;t = t[n]; ) if (1 === t.nodeType || i) if (c = t[Y] || (t[Y] = {}), 
(l = c[n]) && l[0] === u) {
if ((s = l[1]) === !0 || s === M) return s === !0;
} else if (l = c[n] = [ u ], l[1] = e(t, o, a) || M, l[1] === !0) return !0;
};
}
function w(e) {
return e.length > 1 ? function(t, o, n) {
for (var i = e.length; i--; ) if (!e[i](t, o, n)) return !1;
return !0;
} :e[0];
}
function y(e, t, o, n, i) {
for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++) (r = e[s]) && (!o || o(r, n, i)) && (a.push(r), 
c && t.push(s));
return a;
}
function b(e, t, o, n, i, a) {
return n && !n[Y] && (n = b(n)), i && !i[Y] && (i = b(i, a)), r(function(r, a, s, l) {
var c, u, d, p = [], g = [], h = a.length, m = r || x(t || "*", s.nodeType ? [ s ] :s, []), f = !e || !r && t ? m :y(m, p, e, s, l), v = o ? i || (r ? e :h || n) ? [] :a :f;
if (o && o(f, v, s, l), n) for (c = y(v, g), n(c, [], s, l), u = c.length; u--; ) (d = c[u]) && (v[g[u]] = !(f[g[u]] = d));
if (r) {
if (i || e) {
if (i) {
for (c = [], u = v.length; u--; ) (d = v[u]) && c.push(f[u] = d);
i(null, v = [], c, l);
}
for (u = v.length; u--; ) (d = v[u]) && (c = i ? at.call(r, d) :p[u]) > -1 && (r[c] = !(a[c] = d));
}
} else v = y(v === a ? v.splice(h, v.length) :v), i ? i(null, a, v, l) :it.apply(a, v);
});
}
function _(e) {
for (var t, o, n, i = e.length, r = $.relative[e[0].type], a = r || $.relative[" "], s = r ? 1 :0, l = v(function(e) {
return e === t;
}, a, !0), c = v(function(e) {
return at.call(t, e) > -1;
}, a, !0), u = [ function(e, o, n) {
return !r && (n || o !== A) || ((t = o).nodeType ? l(e, o, n) :c(e, o, n));
} ]; i > s; s++) if (o = $.relative[e[s].type]) u = [ v(w(u), o) ]; else {
if (o = $.filter[e[s].type].apply(null, e[s].matches), o[Y]) {
for (n = ++s; i > n && !$.relative[e[n].type]; n++) ;
return b(s > 1 && w(u), s > 1 && f(e.slice(0, s - 1).concat({
value:" " === e[s - 2].type ? "*" :""
})).replace(ht, "$1"), o, n > s && _(e.slice(s, n)), i > n && _(e = e.slice(n)), i > n && f(e));
}
u.push(o);
}
return w(u);
}
function k(e, t) {
var n = 0, i = t.length > 0, a = e.length > 0, s = function(r, s, l, c, u) {
var d, p, g, h = [], m = 0, f = "0", v = r && [], w = null != u, b = A, _ = r || a && $.find.TAG("*", u && s.parentNode || s), k = W += null == b ? 1 :Math.random() || .1;
for (w && (A = s !== N && s, M = n); null != (d = _[f]); f++) {
if (a && d) {
for (p = 0; g = e[p++]; ) if (g(d, s, l)) {
c.push(d);
break;
}
w && (W = k, M = ++n);
}
i && ((d = !g && d) && m--, r && v.push(d));
}
if (m += f, i && f !== m) {
for (p = 0; g = t[p++]; ) g(v, h, s, l);
if (r) {
if (m > 0) for (;f--; ) v[f] || h[f] || (h[f] = ot.call(c));
h = y(h);
}
it.apply(c, h), w && !r && h.length > 0 && m + t.length > 1 && o.uniqueSort(c);
}
return w && (W = k, A = b), v;
};
return i ? r(s) :s;
}
function x(e, t, n) {
for (var i = 0, r = t.length; r > i; i++) o(e, t[i], n);
return n;
}
function S(e, t, o, n) {
var i, r, a, s, l, c = m(e);
if (!n && 1 === c.length) {
if (r = c[0] = c[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && E.getById && 9 === t.nodeType && j && $.relative[r[1].type]) {
if (t = ($.find.ID(a.matches[0].replace(Et, Mt), t) || [])[0], !t) return o;
e = e.slice(r.shift().value.length);
}
for (i = _t.needsContext.test(e) ? 0 :r.length; i-- && (a = r[i], !$.relative[s = a.type]); ) if ((l = $.find[s]) && (n = l(a.matches[0].replace(Et, Mt), vt.test(r[0].type) && t.parentNode || t))) {
if (r.splice(i, 1), e = n.length && f(r), !e) return it.apply(o, n), o;
break;
}
}
return I(e, c)(n, t, !j, o, vt.test(e)), o;
}
function T() {}
var C, E, M, $, D, L, I, A, O, B, N, H, j, P, z, F, R, Y = "sizzle" + -new Date(), q = e.document, W = 0, U = 0, V = i(), G = i(), J = i(), Q = !1, K = function() {
return 0;
}, X = typeof t, Z = 1 << 31, et = {}.hasOwnProperty, tt = [], ot = tt.pop, nt = tt.push, it = tt.push, rt = tt.slice, at = tt.indexOf || function(e) {
for (var t = 0, o = this.length; o > t; t++) if (this[t] === e) return t;
return -1;
}, st = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", lt = "[\\x20\\t\\r\\n\\f]", ct = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", dt = ct.replace("w", "w#"), pt = "\\[" + lt + "*(" + ct + ")" + lt + "*(?:([*^$|!~]?=)" + lt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + dt + ")|)|)" + lt + "*\\]", gt = ":(" + ct + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + pt.replace(3, 8) + ")*)|.*)\\)|)", ht = new RegExp("^" + lt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + lt + "+$", "g"), mt = new RegExp("^" + lt + "*," + lt + "*"), ft = new RegExp("^" + lt + "*([>+~]|" + lt + ")" + lt + "*"), vt = new RegExp(lt + "*[+~]"), wt = new RegExp("=" + lt + "*([^\\]'\"]*)" + lt + "*\\]", "g"), yt = new RegExp(gt), bt = new RegExp("^" + dt + "$"), _t = {
ID:new RegExp("^#(" + ct + ")"),
CLASS:new RegExp("^\\.(" + ct + ")"),
TAG:new RegExp("^(" + ct.replace("w", "w*") + ")"),
ATTR:new RegExp("^" + pt),
PSEUDO:new RegExp("^" + gt),
CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + lt + "*(even|odd|(([+-]|)(\\d*)n|)" + lt + "*(?:([+-]|)" + lt + "*(\\d+)|))" + lt + "*\\)|)", "i"),
bool:new RegExp("^(?:" + st + ")$", "i"),
needsContext:new RegExp("^" + lt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + lt + "*((?:-\\d)?\\d*)" + lt + "*\\)|)(?=[^-]|$)", "i")
}, kt = /^[^{]+\{\s*\[native \w/, xt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, St = /^(?:input|select|textarea|button)$/i, Tt = /^h\d$/i, Ct = /'|\\/g, Et = new RegExp("\\\\([\\da-f]{1,6}" + lt + "?|(" + lt + ")|.)", "ig"), Mt = function(e, t, o) {
var n = "0x" + t - 65536;
return n !== n || o ? t :0 > n ? String.fromCharCode(n + 65536) :String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
};
try {
it.apply(tt = rt.call(q.childNodes), q.childNodes), tt[q.childNodes.length].nodeType;
} catch ($t) {
it = {
apply:tt.length ? function(e, t) {
nt.apply(e, rt.call(t));
} :function(e, t) {
for (var o = e.length, n = 0; e[o++] = t[n++]; ) ;
e.length = o - 1;
}
};
}
L = o.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return t ? "HTML" !== t.nodeName :!1;
}, E = o.support = {}, B = o.setDocument = function(e) {
var t = e ? e.ownerDocument || e :q;
return t !== N && 9 === t.nodeType && t.documentElement ? (N = t, H = t.documentElement, 
j = !L(t), E.attributes = a(function(e) {
return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", c, "#" === e.firstChild.getAttribute("href")), 
s(st, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
}), E.input = a(function(e) {
return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
}), s("value", u, E.attributes && E.input), E.getElementsByTagName = a(function(e) {
return e.appendChild(t.createComment("")), !e.getElementsByTagName("*").length;
}), E.getElementsByClassName = a(function(e) {
return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 
2 === e.getElementsByClassName("i").length;
}), E.getById = a(function(e) {
return H.appendChild(e).id = Y, !t.getElementsByName || !t.getElementsByName(Y).length;
}), E.getById ? ($.find.ID = function(e, t) {
if (typeof t.getElementById !== X && j) {
var o = t.getElementById(e);
return o && o.parentNode ? [ o ] :[];
}
}, $.filter.ID = function(e) {
var t = e.replace(Et, Mt);
return function(e) {
return e.getAttribute("id") === t;
};
}) :(delete $.find.ID, $.filter.ID = function(e) {
var t = e.replace(Et, Mt);
return function(e) {
var o = typeof e.getAttributeNode !== X && e.getAttributeNode("id");
return o && o.value === t;
};
}), $.find.TAG = E.getElementsByTagName ? function(e, t) {
return typeof t.getElementsByTagName !== X ? t.getElementsByTagName(e) :void 0;
} :function(e, t) {
var o, n = [], i = 0, r = t.getElementsByTagName(e);
if ("*" === e) {
for (;o = r[i++]; ) 1 === o.nodeType && n.push(o);
return n;
}
return r;
}, $.find.CLASS = E.getElementsByClassName && function(e, t) {
return typeof t.getElementsByClassName !== X && j ? t.getElementsByClassName(e) :void 0;
}, z = [], P = [], (E.qsa = n(t.querySelectorAll)) && (a(function(e) {
e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || P.push("\\[" + lt + "*(?:value|" + st + ")"), 
e.querySelectorAll(":checked").length || P.push(":checked");
}), a(function(e) {
var o = t.createElement("input");
o.setAttribute("type", "hidden"), e.appendChild(o).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && P.push("[*^$]=" + lt + "*(?:''|\"\")"), 
e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
P.push(",.*:");
})), (E.matchesSelector = n(F = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && a(function(e) {
E.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), z.push("!=", gt);
}), P = P.length && new RegExp(P.join("|")), z = z.length && new RegExp(z.join("|")), 
R = n(H.contains) || H.compareDocumentPosition ? function(e, t) {
var o = 9 === e.nodeType ? e.documentElement :e, n = t && t.parentNode;
return e === n || !(!n || 1 !== n.nodeType || !(o.contains ? o.contains(n) :e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
} :function(e, t) {
if (t) for (;t = t.parentNode; ) if (t === e) return !0;
return !1;
}, E.sortDetached = a(function(e) {
return 1 & e.compareDocumentPosition(t.createElement("div"));
}), K = H.compareDocumentPosition ? function(e, o) {
if (e === o) return Q = !0, 0;
var n = o.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(o);
return n ? 1 & n || !E.sortDetached && o.compareDocumentPosition(e) === n ? e === t || R(q, e) ? -1 :o === t || R(q, o) ? 1 :O ? at.call(O, e) - at.call(O, o) :0 :4 & n ? -1 :1 :e.compareDocumentPosition ? -1 :1;
} :function(e, o) {
var n, i = 0, r = e.parentNode, a = o.parentNode, s = [ e ], l = [ o ];
if (e === o) return Q = !0, 0;
if (!r || !a) return e === t ? -1 :o === t ? 1 :r ? -1 :a ? 1 :O ? at.call(O, e) - at.call(O, o) :0;
if (r === a) return d(e, o);
for (n = e; n = n.parentNode; ) s.unshift(n);
for (n = o; n = n.parentNode; ) l.unshift(n);
for (;s[i] === l[i]; ) i++;
return i ? d(s[i], l[i]) :s[i] === q ? -1 :l[i] === q ? 1 :0;
}, t) :N;
}, o.matches = function(e, t) {
return o(e, null, null, t);
}, o.matchesSelector = function(e, t) {
if ((e.ownerDocument || e) !== N && B(e), t = t.replace(wt, "='$1']"), !(!E.matchesSelector || !j || z && z.test(t) || P && P.test(t))) try {
var n = F.call(e, t);
if (n || E.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
} catch (i) {}
return o(t, N, null, [ e ]).length > 0;
}, o.contains = function(e, t) {
return (e.ownerDocument || e) !== N && B(e), R(e, t);
}, o.attr = function(e, o) {
(e.ownerDocument || e) !== N && B(e);
var n = $.attrHandle[o.toLowerCase()], i = n && et.call($.attrHandle, o.toLowerCase()) ? n(e, o, !j) :t;
return i === t ? E.attributes || !j ? e.getAttribute(o) :(i = e.getAttributeNode(o)) && i.specified ? i.value :null :i;
}, o.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, o.uniqueSort = function(e) {
var t, o = [], n = 0, i = 0;
if (Q = !E.detectDuplicates, O = !E.sortStable && e.slice(0), e.sort(K), Q) {
for (;t = e[i++]; ) t === e[i] && (n = o.push(i));
for (;n--; ) e.splice(o[n], 1);
}
return e;
}, D = o.getText = function(e) {
var t, o = "", n = 0, i = e.nodeType;
if (i) {
if (1 === i || 9 === i || 11 === i) {
if ("string" == typeof e.textContent) return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) o += D(e);
} else if (3 === i || 4 === i) return e.nodeValue;
} else for (;t = e[n]; n++) o += D(t);
return o;
}, $ = o.selectors = {
cacheLength:50,
createPseudo:r,
match:_t,
attrHandle:{},
find:{},
relative:{
">":{
dir:"parentNode",
first:!0
},
" ":{
dir:"parentNode"
},
"+":{
dir:"previousSibling",
first:!0
},
"~":{
dir:"previousSibling"
}
},
preFilter:{
ATTR:function(e) {
return e[1] = e[1].replace(Et, Mt), e[3] = (e[4] || e[5] || "").replace(Et, Mt), 
"~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD:function(e) {
return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || o.error(e[0]), 
e[4] = +(e[4] ? e[5] + (e[6] || 1) :2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) :e[3] && o.error(e[0]), 
e;
},
PSEUDO:function(e) {
var o, n = !e[5] && e[2];
return _t.CHILD.test(e[0]) ? null :(e[3] && e[4] !== t ? e[2] = e[4] :n && yt.test(n) && (o = m(n, !0)) && (o = n.indexOf(")", n.length - o) - n.length) && (e[0] = e[0].slice(0, o), 
e[2] = n.slice(0, o)), e.slice(0, 3));
}
},
filter:{
TAG:function(e) {
var t = e.replace(Et, Mt).toLowerCase();
return "*" === e ? function() {
return !0;
} :function(e) {
return e.nodeName && e.nodeName.toLowerCase() === t;
};
},
CLASS:function(e) {
var t = V[e + " "];
return t || (t = new RegExp("(^|" + lt + ")" + e + "(" + lt + "|$)")) && V(e, function(e) {
return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== X && e.getAttribute("class") || "");
});
},
ATTR:function(e, t, n) {
return function(i) {
var r = o.attr(i, e);
return null == r ? "!=" === t :t ? (r += "", "=" === t ? r === n :"!=" === t ? r !== n :"^=" === t ? n && 0 === r.indexOf(n) :"*=" === t ? n && r.indexOf(n) > -1 :"$=" === t ? n && r.slice(-n.length) === n :"~=" === t ? (" " + r + " ").indexOf(n) > -1 :"|=" === t ? r === n || r.slice(0, n.length + 1) === n + "-" :!1) :!0;
};
},
CHILD:function(e, t, o, n, i) {
var r = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
return 1 === n && 0 === i ? function(e) {
return !!e.parentNode;
} :function(t, o, l) {
var c, u, d, p, g, h, m = r !== a ? "nextSibling" :"previousSibling", f = t.parentNode, v = s && t.nodeName.toLowerCase(), w = !l && !s;
if (f) {
if (r) {
for (;m; ) {
for (d = t; d = d[m]; ) if (s ? d.nodeName.toLowerCase() === v :1 === d.nodeType) return !1;
h = m = "only" === e && !h && "nextSibling";
}
return !0;
}
if (h = [ a ? f.firstChild :f.lastChild ], a && w) {
for (u = f[Y] || (f[Y] = {}), c = u[e] || [], g = c[0] === W && c[1], p = c[0] === W && c[2], 
d = g && f.childNodes[g]; d = ++g && d && d[m] || (p = g = 0) || h.pop(); ) if (1 === d.nodeType && ++p && d === t) {
u[e] = [ W, g, p ];
break;
}
} else if (w && (c = (t[Y] || (t[Y] = {}))[e]) && c[0] === W) p = c[1]; else for (;(d = ++g && d && d[m] || (p = g = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v :1 !== d.nodeType) || !++p || (w && ((d[Y] || (d[Y] = {}))[e] = [ W, p ]), 
d !== t)); ) ;
return p -= i, p === n || p % n === 0 && p / n >= 0;
}
};
},
PSEUDO:function(e, t) {
var n, i = $.pseudos[e] || $.setFilters[e.toLowerCase()] || o.error("unsupported pseudo: " + e);
return i[Y] ? i(t) :i.length > 1 ? (n = [ e, e, "", t ], $.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, o) {
for (var n, r = i(e, t), a = r.length; a--; ) n = at.call(e, r[a]), e[n] = !(o[n] = r[a]);
}) :function(e) {
return i(e, 0, n);
}) :i;
}
},
pseudos:{
not:r(function(e) {
var t = [], o = [], n = I(e.replace(ht, "$1"));
return n[Y] ? r(function(e, t, o, i) {
for (var r, a = n(e, null, i, []), s = e.length; s--; ) (r = a[s]) && (e[s] = !(t[s] = r));
}) :function(e, i, r) {
return t[0] = e, n(t, null, r, o), !o.pop();
};
}),
has:r(function(e) {
return function(t) {
return o(e, t).length > 0;
};
}),
contains:r(function(e) {
return function(t) {
return (t.textContent || t.innerText || D(t)).indexOf(e) > -1;
};
}),
lang:r(function(e) {
return bt.test(e || "") || o.error("unsupported lang: " + e), e = e.replace(Et, Mt).toLowerCase(), 
function(t) {
var o;
do if (o = j ? t.lang :t.getAttribute("xml:lang") || t.getAttribute("lang")) return o = o.toLowerCase(), 
o === e || 0 === o.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
return !1;
};
}),
target:function(t) {
var o = e.location && e.location.hash;
return o && o.slice(1) === t.id;
},
root:function(e) {
return e === H;
},
focus:function(e) {
return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
},
enabled:function(e) {
return e.disabled === !1;
},
disabled:function(e) {
return e.disabled === !0;
},
checked:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && !!e.checked || "option" === t && !!e.selected;
},
selected:function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
},
empty:function(e) {
for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
return !0;
},
parent:function(e) {
return !$.pseudos.empty(e);
},
header:function(e) {
return Tt.test(e.nodeName);
},
input:function(e) {
return St.test(e.nodeName);
},
button:function(e) {
var t = e.nodeName.toLowerCase();
return "input" === t && "button" === e.type || "button" === t;
},
text:function(e) {
var t;
return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
},
first:h(function() {
return [ 0 ];
}),
last:h(function(e, t) {
return [ t - 1 ];
}),
eq:h(function(e, t, o) {
return [ 0 > o ? o + t :o ];
}),
even:h(function(e, t) {
for (var o = 0; t > o; o += 2) e.push(o);
return e;
}),
odd:h(function(e, t) {
for (var o = 1; t > o; o += 2) e.push(o);
return e;
}),
lt:h(function(e, t, o) {
for (var n = 0 > o ? o + t :o; --n >= 0; ) e.push(n);
return e;
}),
gt:h(function(e, t, o) {
for (var n = 0 > o ? o + t :o; ++n < t; ) e.push(n);
return e;
})
}
};
for (C in {
radio:!0,
checkbox:!0,
file:!0,
password:!0,
image:!0
}) $.pseudos[C] = p(C);
for (C in {
submit:!0,
reset:!0
}) $.pseudos[C] = g(C);
I = o.compile = function(e, t) {
var o, n = [], i = [], r = J[e + " "];
if (!r) {
for (t || (t = m(e)), o = t.length; o--; ) r = _(t[o]), r[Y] ? n.push(r) :i.push(r);
r = J(e, k(i, n));
}
return r;
}, $.pseudos.nth = $.pseudos.eq, T.prototype = $.filters = $.pseudos, $.setFilters = new T(), 
E.sortStable = Y.split("").sort(K).join("") === Y, B(), [ 0, 0 ].sort(K), E.detectDuplicates = Q, 
ut.find = o, ut.expr = o.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = o.uniqueSort, 
ut.text = o.getText, ut.isXMLDoc = o.isXML, ut.contains = o.contains;
}(e);
var Tt = {};
ut.Callbacks = function(e) {
e = "string" == typeof e ? Tt[e] || n(e) :ut.extend({}, e);
var o, i, r, a, s, l, c = [], u = !e.once && [], d = function(t) {
for (i = e.memory && t, r = !0, s = l || 0, l = 0, a = c.length, o = !0; c && a > s; s++) if (c[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
i = !1;
break;
}
o = !1, c && (u ? u.length && d(u.shift()) :i ? c = [] :p.disable());
}, p = {
add:function() {
if (c) {
var t = c.length;
!function n(t) {
ut.each(t, function(t, o) {
var i = ut.type(o);
"function" === i ? e.unique && p.has(o) || c.push(o) :o && o.length && "string" !== i && n(o);
});
}(arguments), o ? a = c.length :i && (l = t, d(i));
}
return this;
},
remove:function() {
return c && ut.each(arguments, function(e, t) {
for (var n; (n = ut.inArray(t, c, n)) > -1; ) c.splice(n, 1), o && (a >= n && a--, 
s >= n && s--);
}), this;
},
has:function(e) {
return e ? ut.inArray(e, c) > -1 :!(!c || !c.length);
},
empty:function() {
return c = [], a = 0, this;
},
disable:function() {
return c = u = i = t, this;
},
disabled:function() {
return !c;
},
lock:function() {
return u = t, i || p.disable(), this;
},
locked:function() {
return !u;
},
fireWith:function(e, t) {
return t = t || [], t = [ e, t.slice ? t.slice() :t ], !c || r && !u || (o ? u.push(t) :d(t)), 
this;
},
fire:function() {
return p.fireWith(this, arguments), this;
},
fired:function() {
return !!r;
}
};
return p;
}, ut.extend({
Deferred:function(e) {
var t = [ [ "resolve", "done", ut.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ut.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ut.Callbacks("memory") ] ], o = "pending", n = {
state:function() {
return o;
},
always:function() {
return i.done(arguments).fail(arguments), this;
},
then:function() {
var e = arguments;
return ut.Deferred(function(o) {
ut.each(t, function(t, r) {
var a = r[0], s = ut.isFunction(e[t]) && e[t];
i[r[1]](function() {
var e = s && s.apply(this, arguments);
e && ut.isFunction(e.promise) ? e.promise().done(o.resolve).fail(o.reject).progress(o.notify) :o[a + "With"](this === n ? o.promise() :this, s ? [ e ] :arguments);
});
}), e = null;
}).promise();
},
promise:function(e) {
return null != e ? ut.extend(e, n) :n;
}
}, i = {};
return n.pipe = n.then, ut.each(t, function(e, r) {
var a = r[2], s = r[3];
n[r[1]] = a.add, s && a.add(function() {
o = s;
}, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function() {
return i[r[0] + "With"](this === i ? n :this, arguments), this;
}, i[r[0] + "With"] = a.fireWith;
}), n.promise(i), e && e.call(i, i), i;
},
when:function(e) {
var t, o, n, i = 0, r = rt.call(arguments), a = r.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a :0, l = 1 === s ? e :ut.Deferred(), c = function(e, o, n) {
return function(i) {
o[e] = this, n[e] = arguments.length > 1 ? rt.call(arguments) :i, n === t ? l.notifyWith(o, n) :--s || l.resolveWith(o, n);
};
};
if (a > 1) for (t = new Array(a), o = new Array(a), n = new Array(a); a > i; i++) r[i] && ut.isFunction(r[i].promise) ? r[i].promise().done(c(i, n, r)).fail(l.reject).progress(c(i, o, t)) :--s;
return s || l.resolveWith(n, r), l.promise();
}
}), ut.support = function(t) {
var o, n, i, r, a, s, l, c, u, d = Q.createElement("div");
if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
o = d.getElementsByTagName("*") || [], n = d.getElementsByTagName("a")[0], !n || !n.style || !o.length) return t;
r = Q.createElement("select"), s = r.appendChild(Q.createElement("option")), i = d.getElementsByTagName("input")[0], 
n.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, 
t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, 
t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(n.getAttribute("style")), 
t.hrefNormalized = "/a" === n.getAttribute("href"), t.opacity = /^0.5/.test(n.style.opacity), 
t.cssFloat = !!n.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, 
t.enctype = !!Q.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== Q.createElement("nav").cloneNode(!0).outerHTML, 
t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, 
t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, 
t.noCloneChecked = i.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !s.disabled;
try {
delete d.test;
} catch (p) {
t.deleteExpando = !1;
}
i = Q.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), 
i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, 
i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Q.createDocumentFragment(), 
a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, 
d.attachEvent && (d.attachEvent("onclick", function() {
t.noCloneEvent = !1;
}), d.cloneNode(!0).click());
for (u in {
submit:!0,
change:!0,
focusin:!0
}) d.setAttribute(l = "on" + u, "t"), t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", 
t.clearCloneStyle = "content-box" === d.style.backgroundClip;
for (u in ut(t)) break;
return t.ownLast = "0" !== u, ut(function() {
var o, n, i, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = Q.getElementsByTagName("body")[0];
a && (o = Q.createElement("div"), o.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
a.appendChild(o).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", 
t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
ut.swap(a, null != a.style.zoom ? {
zoom:1
} :{}, function() {
t.boxSizing = 4 === d.offsetWidth;
}), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, 
t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
width:"4px"
}).width, n = d.appendChild(Q.createElement("div")), n.style.cssText = d.style.cssText = r, 
n.style.marginRight = n.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)), 
typeof d.style.zoom !== G && (d.innerHTML = "", d.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", 
t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", 
d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), 
a.removeChild(o), o = d = i = n = null);
}), o = r = a = s = n = i = null, t;
}({});
var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Et = /([A-Z])/g;
ut.extend({
cache:{},
noData:{
applet:!0,
embed:!0,
object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(e) {
return e = e.nodeType ? ut.cache[e[ut.expando]] :e[ut.expando], !!e && !s(e);
},
data:function(e, t, o) {
return i(e, t, o);
},
removeData:function(e, t) {
return r(e, t);
},
_data:function(e, t, o) {
return i(e, t, o, !0);
},
_removeData:function(e, t) {
return r(e, t, !0);
},
acceptData:function(e) {
if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
return !t || t !== !0 && e.getAttribute("classid") === t;
}
}), ut.fn.extend({
data:function(e, o) {
var n, i, r = null, s = 0, l = this[0];
if (e === t) {
if (this.length && (r = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
for (n = l.attributes; s < n.length; s++) i = n[s].name, 0 === i.indexOf("data-") && (i = ut.camelCase(i.slice(5)), 
a(l, i, r[i]));
ut._data(l, "parsedAttrs", !0);
}
return r;
}
return "object" == typeof e ? this.each(function() {
ut.data(this, e);
}) :arguments.length > 1 ? this.each(function() {
ut.data(this, e, o);
}) :l ? a(l, e, ut.data(l, e)) :null;
},
removeData:function(e) {
return this.each(function() {
ut.removeData(this, e);
});
}
}), ut.extend({
queue:function(e, t, o) {
var n;
return e ? (t = (t || "fx") + "queue", n = ut._data(e, t), o && (!n || ut.isArray(o) ? n = ut._data(e, t, ut.makeArray(o)) :n.push(o)), 
n || []) :void 0;
},
dequeue:function(e, t) {
t = t || "fx";
var o = ut.queue(e, t), n = o.length, i = o.shift(), r = ut._queueHooks(e, t), a = function() {
ut.dequeue(e, t);
};
"inprogress" === i && (i = o.shift(), n--), r.cur = i, i && ("fx" === t && o.unshift("inprogress"), 
delete r.stop, i.call(e, a, r)), !n && r && r.empty.fire();
},
_queueHooks:function(e, t) {
var o = t + "queueHooks";
return ut._data(e, o) || ut._data(e, o, {
empty:ut.Callbacks("once memory").add(function() {
ut._removeData(e, t + "queue"), ut._removeData(e, o);
})
});
}
}), ut.fn.extend({
queue:function(e, o) {
var n = 2;
return "string" != typeof e && (o = e, e = "fx", n--), arguments.length < n ? ut.queue(this[0], e) :o === t ? this :this.each(function() {
var t = ut.queue(this, e, o);
ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e);
});
},
dequeue:function(e) {
return this.each(function() {
ut.dequeue(this, e);
});
},
delay:function(e, t) {
return e = ut.fx ? ut.fx.speeds[e] || e :e, t = t || "fx", this.queue(t, function(t, o) {
var n = setTimeout(t, e);
o.stop = function() {
clearTimeout(n);
};
});
},
clearQueue:function(e) {
return this.queue(e || "fx", []);
},
promise:function(e, o) {
var n, i = 1, r = ut.Deferred(), a = this, s = this.length, l = function() {
--i || r.resolveWith(a, [ a ]);
};
for ("string" != typeof e && (o = e, e = t), e = e || "fx"; s--; ) n = ut._data(a[s], e + "queueHooks"), 
n && n.empty && (i++, n.empty.add(l));
return l(), r.promise(o);
}
});
var Mt, $t, Dt = /[\t\r\n\f]/g, Lt = /\r/g, It = /^(?:input|select|textarea|button|object)$/i, At = /^(?:a|area)$/i, Ot = /^(?:checked|selected)$/i, Bt = ut.support.getSetAttribute, Nt = ut.support.input;
ut.fn.extend({
attr:function(e, t) {
return ut.access(this, ut.attr, e, t, arguments.length > 1);
},
removeAttr:function(e) {
return this.each(function() {
ut.removeAttr(this, e);
});
},
prop:function(e, t) {
return ut.access(this, ut.prop, e, t, arguments.length > 1);
},
removeProp:function(e) {
return e = ut.propFix[e] || e, this.each(function() {
try {
this[e] = t, delete this[e];
} catch (o) {}
});
},
addClass:function(e) {
var t, o, n, i, r, a = 0, s = this.length, l = "string" == typeof e && e;
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).addClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (o = this[a], n = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace(Dt, " ") :" ")) {
for (r = 0; i = t[r++]; ) n.indexOf(" " + i + " ") < 0 && (n += i + " ");
o.className = ut.trim(n);
}
return this;
},
removeClass:function(e) {
var t, o, n, i, r, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).removeClass(e.call(this, t, this.className));
});
if (l) for (t = (e || "").match(pt) || []; s > a; a++) if (o = this[a], n = 1 === o.nodeType && (o.className ? (" " + o.className + " ").replace(Dt, " ") :"")) {
for (r = 0; i = t[r++]; ) for (;n.indexOf(" " + i + " ") >= 0; ) n = n.replace(" " + i + " ", " ");
o.className = e ? ut.trim(n) :"";
}
return this;
},
toggleClass:function(e, t) {
var o = typeof e, n = "boolean" == typeof t;
return ut.isFunction(e) ? this.each(function(o) {
ut(this).toggleClass(e.call(this, o, this.className, t), t);
}) :this.each(function() {
if ("string" === o) for (var i, r = 0, a = ut(this), s = t, l = e.match(pt) || []; i = l[r++]; ) s = n ? s :!a.hasClass(i), 
a[s ? "addClass" :"removeClass"](i); else (o === G || "boolean" === o) && (this.className && ut._data(this, "__className__", this.className), 
this.className = this.className || e === !1 ? "" :ut._data(this, "__className__") || "");
});
},
hasClass:function(e) {
for (var t = " " + e + " ", o = 0, n = this.length; n > o; o++) if (1 === this[o].nodeType && (" " + this[o].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
return !1;
},
val:function(e) {
var o, n, i, r = this[0];
{
if (arguments.length) return i = ut.isFunction(e), this.each(function(o) {
var r;
1 === this.nodeType && (r = i ? e.call(this, o, ut(this).val()) :e, null == r ? r = "" :"number" == typeof r ? r += "" :ut.isArray(r) && (r = ut.map(r, function(e) {
return null == e ? "" :e + "";
})), n = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== t || (this.value = r));
});
if (r) return n = ut.valHooks[r.type] || ut.valHooks[r.nodeName.toLowerCase()], 
n && "get" in n && (o = n.get(r, "value")) !== t ? o :(o = r.value, "string" == typeof o ? o.replace(Lt, "") :null == o ? "" :o);
}
}
}), ut.extend({
valHooks:{
option:{
get:function(e) {
var t = ut.find.attr(e, "value");
return null != t ? t :e.text;
}
},
select:{
get:function(e) {
for (var t, o, n = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, a = r ? null :[], s = r ? i + 1 :n.length, l = 0 > i ? s :r ? i :0; s > l; l++) if (o = n[l], 
!(!o.selected && l !== i || (ut.support.optDisabled ? o.disabled :null !== o.getAttribute("disabled")) || o.parentNode.disabled && ut.nodeName(o.parentNode, "optgroup"))) {
if (t = ut(o).val(), r) return t;
a.push(t);
}
return a;
},
set:function(e, t) {
for (var o, n, i = e.options, r = ut.makeArray(t), a = i.length; a--; ) n = i[a], 
(n.selected = ut.inArray(ut(n).val(), r) >= 0) && (o = !0);
return o || (e.selectedIndex = -1), r;
}
}
},
attr:function(e, o, n) {
var i, r, a = e.nodeType;
if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === G ? ut.prop(e, o, n) :(1 === a && ut.isXMLDoc(e) || (o = o.toLowerCase(), 
i = ut.attrHooks[o] || (ut.expr.match.bool.test(o) ? $t :Mt)), n === t ? i && "get" in i && null !== (r = i.get(e, o)) ? r :(r = ut.find.attr(e, o), 
null == r ? t :r) :null !== n ? i && "set" in i && (r = i.set(e, n, o)) !== t ? r :(e.setAttribute(o, n + ""), 
n) :(ut.removeAttr(e, o), void 0));
},
removeAttr:function(e, t) {
var o, n, i = 0, r = t && t.match(pt);
if (r && 1 === e.nodeType) for (;o = r[i++]; ) n = ut.propFix[o] || o, ut.expr.match.bool.test(o) ? Nt && Bt || !Ot.test(o) ? e[n] = !1 :e[ut.camelCase("default-" + o)] = e[n] = !1 :ut.attr(e, o, ""), 
e.removeAttribute(Bt ? o :n);
},
attrHooks:{
type:{
set:function(e, t) {
if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
var o = e.value;
return e.setAttribute("type", t), o && (e.value = o), t;
}
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
},
prop:function(e, o, n) {
var i, r, a, s = e.nodeType;
if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !ut.isXMLDoc(e), a && (o = ut.propFix[o] || o, 
r = ut.propHooks[o]), n !== t ? r && "set" in r && (i = r.set(e, n, o)) !== t ? i :e[o] = n :r && "get" in r && null !== (i = r.get(e, o)) ? i :e[o];
},
propHooks:{
tabIndex:{
get:function(e) {
var t = ut.find.attr(e, "tabindex");
return t ? parseInt(t, 10) :It.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 :-1;
}
}
}
}), $t = {
set:function(e, t, o) {
return t === !1 ? ut.removeAttr(e, o) :Nt && Bt || !Ot.test(o) ? e.setAttribute(!Bt && ut.propFix[o] || o, o) :e[ut.camelCase("default-" + o)] = e[o] = !0, 
o;
}
}, ut.each(ut.expr.match.bool.source.match(/\w+/g), function(e, o) {
var n = ut.expr.attrHandle[o] || ut.find.attr;
ut.expr.attrHandle[o] = Nt && Bt || !Ot.test(o) ? function(e, o, i) {
var r = ut.expr.attrHandle[o], a = i ? t :(ut.expr.attrHandle[o] = t) != n(e, o, i) ? o.toLowerCase() :null;
return ut.expr.attrHandle[o] = r, a;
} :function(e, o, n) {
return n ? t :e[ut.camelCase("default-" + o)] ? o.toLowerCase() :null;
};
}), Nt && Bt || (ut.attrHooks.value = {
set:function(e, t, o) {
return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) :Mt && Mt.set(e, t, o);
}
}), Bt || (Mt = {
set:function(e, o, n) {
var i = e.getAttributeNode(n);
return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = o += "", 
"value" === n || o === e.getAttribute(n) ? o :t;
}
}, ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, o, n) {
var i;
return n ? t :(i = e.getAttributeNode(o)) && "" !== i.value ? i.value :null;
}, ut.valHooks.button = {
get:function(e, o) {
var n = e.getAttributeNode(o);
return n && n.specified ? n.value :t;
},
set:Mt.set
}, ut.attrHooks.contenteditable = {
set:function(e, t, o) {
Mt.set(e, "" === t ? !1 :t, o);
}
}, ut.each([ "width", "height" ], function(e, t) {
ut.attrHooks[t] = {
set:function(e, o) {
return "" === o ? (e.setAttribute(t, "auto"), o) :void 0;
}
};
})), ut.support.hrefNormalized || ut.each([ "href", "src" ], function(e, t) {
ut.propHooks[t] = {
get:function(e) {
return e.getAttribute(t, 4);
}
};
}), ut.support.style || (ut.attrHooks.style = {
get:function(e) {
return e.style.cssText || t;
},
set:function(e, t) {
return e.style.cssText = t + "";
}
}), ut.support.optSelected || (ut.propHooks.selected = {
get:function(e) {
var t = e.parentNode;
return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
}
}), ut.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
ut.propFix[this.toLowerCase()] = this;
}), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.each([ "radio", "checkbox" ], function() {
ut.valHooks[this] = {
set:function(e, t) {
return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 :void 0;
}
}, ut.support.checkOn || (ut.valHooks[this].get = function(e) {
return null === e.getAttribute("value") ? "on" :e.value;
});
});
var Ht = /^(?:input|select|textarea)$/i, jt = /^key/, Pt = /^(?:mouse|contextmenu)|click/, zt = /^(?:focusinfocus|focusoutblur)$/, Ft = /^([^.]*)(?:\.(.+)|)$/;
ut.event = {
global:{},
add:function(e, o, n, i, r) {
var a, s, l, c, u, d, p, g, h, m, f, v = ut._data(e);
if (v) {
for (n.handler && (c = n, n = c.handler, r = c.selector), n.guid || (n.guid = ut.guid++), 
(s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
return typeof ut === G || e && ut.event.triggered === e.type ? t :ut.event.dispatch.apply(d.elem, arguments);
}, d.elem = e), o = (o || "").match(pt) || [ "" ], l = o.length; l--; ) a = Ft.exec(o[l]) || [], 
h = f = a[1], m = (a[2] || "").split(".").sort(), h && (u = ut.event.special[h] || {}, 
h = (r ? u.delegateType :u.bindType) || h, u = ut.event.special[h] || {}, p = ut.extend({
type:h,
origType:f,
data:i,
handler:n,
guid:n.guid,
selector:r,
needsContext:r && ut.expr.match.needsContext.test(r),
namespace:m.join(".")
}, c), (g = s[h]) || (g = s[h] = [], g.delegateCount = 0, u.setup && u.setup.call(e, i, m, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) :e.attachEvent && e.attachEvent("on" + h, d))), 
u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? g.splice(g.delegateCount++, 0, p) :g.push(p), 
ut.event.global[h] = !0);
e = null;
}
},
remove:function(e, t, o, n, i) {
var r, a, s, l, c, u, d, p, g, h, m, f = ut.hasData(e) && ut._data(e);
if (f && (u = f.events)) {
for (t = (t || "").match(pt) || [ "" ], c = t.length; c--; ) if (s = Ft.exec(t[c]) || [], 
g = m = s[1], h = (s[2] || "").split(".").sort(), g) {
for (d = ut.event.special[g] || {}, g = (n ? d.delegateType :d.bindType) || g, p = u[g] || [], 
s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--; ) a = p[r], 
!i && m !== a.origType || o && o.guid !== a.guid || s && !s.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (p.splice(r, 1), 
a.selector && p.delegateCount--, d.remove && d.remove.call(e, a));
l && !p.length && (d.teardown && d.teardown.call(e, h, f.handle) !== !1 || ut.removeEvent(e, g, f.handle), 
delete u[g]);
} else for (g in u) ut.event.remove(e, g + t[c], o, n, !0);
ut.isEmptyObject(u) && (delete f.handle, ut._removeData(e, "events"));
}
},
trigger:function(o, n, i, r) {
var a, s, l, c, u, d, p, g = [ i || Q ], h = lt.call(o, "type") ? o.type :o, m = lt.call(o, "namespace") ? o.namespace.split(".") :[];
if (l = d = i = i || Q, 3 !== i.nodeType && 8 !== i.nodeType && !zt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), 
h = m.shift(), m.sort()), s = h.indexOf(":") < 0 && "on" + h, o = o[ut.expando] ? o :new ut.Event(h, "object" == typeof o && o), 
o.isTrigger = r ? 2 :3, o.namespace = m.join("."), o.namespace_re = o.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") :null, 
o.result = t, o.target || (o.target = i), n = null == n ? [ o ] :ut.makeArray(n, [ o ]), 
u = ut.event.special[h] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
if (!r && !u.noBubble && !ut.isWindow(i)) {
for (c = u.delegateType || h, zt.test(c + h) || (l = l.parentNode); l; l = l.parentNode) g.push(l), 
d = l;
d === (i.ownerDocument || Q) && g.push(d.defaultView || d.parentWindow || e);
}
for (p = 0; (l = g[p++]) && !o.isPropagationStopped(); ) o.type = p > 1 ? c :u.bindType || h, 
a = (ut._data(l, "events") || {})[o.type] && ut._data(l, "handle"), a && a.apply(l, n), 
a = s && l[s], a && ut.acceptData(l) && a.apply && a.apply(l, n) === !1 && o.preventDefault();
if (o.type = h, !r && !o.isDefaultPrevented() && (!u._default || u._default.apply(g.pop(), n) === !1) && ut.acceptData(i) && s && i[h] && !ut.isWindow(i)) {
d = i[s], d && (i[s] = null), ut.event.triggered = h;
try {
i[h]();
} catch (f) {}
ut.event.triggered = t, d && (i[s] = d);
}
return o.result;
}
},
dispatch:function(e) {
e = ut.event.fix(e);
var o, n, i, r, a, s = [], l = rt.call(arguments), c = (ut._data(this, "events") || {})[e.type] || [], u = ut.event.special[e.type] || {};
if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
for (s = ut.event.handlers.call(this, e, c), o = 0; (r = s[o++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped(); ) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, 
e.data = i.data, n = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l), 
n !== t && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
return u.postDispatch && u.postDispatch.call(this, e), e.result;
}
},
handlers:function(e, o) {
var n, i, r, a, s = [], l = o.delegateCount, c = e.target;
if (l && c.nodeType && (!e.button || "click" !== e.type)) for (;c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
for (r = [], a = 0; l > a; a++) i = o[a], n = i.selector + " ", r[n] === t && (r[n] = i.needsContext ? ut(n, this).index(c) >= 0 :ut.find(n, this, null, [ c ]).length), 
r[n] && r.push(i);
r.length && s.push({
elem:c,
handlers:r
});
}
return l < o.length && s.push({
elem:this,
handlers:o.slice(l)
}), s;
},
fix:function(e) {
if (e[ut.expando]) return e;
var t, o, n, i = e.type, r = e, a = this.fixHooks[i];
for (a || (this.fixHooks[i] = a = Pt.test(i) ? this.mouseHooks :jt.test(i) ? this.keyHooks :{}), 
n = a.props ? this.props.concat(a.props) :this.props, e = new ut.Event(r), t = n.length; t--; ) o = n[t], 
e[o] = r[o];
return e.target || (e.target = r.srcElement || Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) :e;
},
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(e, t) {
return null == e.which && (e.which = null != t.charCode ? t.charCode :t.keyCode), 
e;
}
},
mouseHooks:{
props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter:function(e, o) {
var n, i, r, a = o.button, s = o.fromElement;
return null == e.pageX && null != o.clientX && (i = e.target.ownerDocument || Q, 
r = i.documentElement, n = i.body, e.pageX = o.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), 
e.pageY = o.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), 
!e.relatedTarget && s && (e.relatedTarget = s === e.target ? o.toElement :s), e.which || a === t || (e.which = 1 & a ? 1 :2 & a ? 3 :4 & a ? 2 :0), 
e;
}
},
special:{
load:{
noBubble:!0
},
focus:{
trigger:function() {
if (this !== u() && this.focus) try {
return this.focus(), !1;
} catch (e) {}
},
delegateType:"focusin"
},
blur:{
trigger:function() {
return this === u() && this.blur ? (this.blur(), !1) :void 0;
},
delegateType:"focusout"
},
click:{
trigger:function() {
return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
!1) :void 0;
},
_default:function(e) {
return ut.nodeName(e.target, "a");
}
},
beforeunload:{
postDispatch:function(e) {
e.result !== t && (e.originalEvent.returnValue = e.result);
}
}
},
simulate:function(e, t, o, n) {
var i = ut.extend(new ut.Event(), o, {
type:e,
isSimulated:!0,
originalEvent:{}
});
n ? ut.event.trigger(i, null, t) :ut.event.dispatch.call(t, i), i.isDefaultPrevented() && o.preventDefault();
}
}, ut.removeEvent = Q.removeEventListener ? function(e, t, o) {
e.removeEventListener && e.removeEventListener(t, o, !1);
} :function(e, t, o) {
var n = "on" + t;
e.detachEvent && (typeof e[n] === G && (e[n] = null), e.detachEvent(n, o));
}, ut.Event = function(e, t) {
return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l :c) :this.type = e, 
t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, 
void 0) :new ut.Event(e, t);
}, ut.Event.prototype = {
isDefaultPrevented:c,
isPropagationStopped:c,
isImmediatePropagationStopped:c,
preventDefault:function() {
var e = this.originalEvent;
this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() :e.returnValue = !1);
},
stopPropagation:function() {
var e = this.originalEvent;
this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
},
stopImmediatePropagation:function() {
this.isImmediatePropagationStopped = l, this.stopPropagation();
}
}, ut.each({
mouseenter:"mouseover",
mouseleave:"mouseout"
}, function(e, t) {
ut.event.special[e] = {
delegateType:t,
bindType:t,
handle:function(e) {
var o, n = this, i = e.relatedTarget, r = e.handleObj;
return (!i || i !== n && !ut.contains(n, i)) && (e.type = r.origType, o = r.handler.apply(this, arguments), 
e.type = t), o;
}
};
}), ut.support.submitBubbles || (ut.event.special.submit = {
setup:function() {
return ut.nodeName(this, "form") ? !1 :(ut.event.add(this, "click._submit keypress._submit", function(e) {
var o = e.target, n = ut.nodeName(o, "input") || ut.nodeName(o, "button") ? o.form :t;
n && !ut._data(n, "submitBubbles") && (ut.event.add(n, "submit._submit", function(e) {
e._submit_bubble = !0;
}), ut._data(n, "submitBubbles", !0));
}), void 0);
},
postDispatch:function(e) {
e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0));
},
teardown:function() {
return ut.nodeName(this, "form") ? !1 :(ut.event.remove(this, "._submit"), void 0);
}
}), ut.support.changeBubbles || (ut.event.special.change = {
setup:function() {
return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function(e) {
"checked" === e.originalEvent.propertyName && (this._just_changed = !0);
}), ut.event.add(this, "click._change", function(e) {
this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0);
})), !1) :(ut.event.add(this, "beforeactivate._change", function(e) {
var t = e.target;
Ht.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function(e) {
!this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0);
}), ut._data(t, "changeBubbles", !0));
}), void 0);
},
handle:function(e) {
var t = e.target;
return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) :void 0;
},
teardown:function() {
return ut.event.remove(this, "._change"), !Ht.test(this.nodeName);
}
}), ut.support.focusinBubbles || ut.each({
focus:"focusin",
blur:"focusout"
}, function(e, t) {
var o = 0, n = function(e) {
ut.event.simulate(t, e.target, ut.event.fix(e), !0);
};
ut.event.special[t] = {
setup:function() {
0 === o++ && Q.addEventListener(e, n, !0);
},
teardown:function() {
0 === --o && Q.removeEventListener(e, n, !0);
}
};
}), ut.fn.extend({
on:function(e, o, n, i, r) {
var a, s;
if ("object" == typeof e) {
"string" != typeof o && (n = n || o, o = t);
for (a in e) this.on(a, o, n, e[a], r);
return this;
}
if (null == n && null == i ? (i = o, n = o = t) :null == i && ("string" == typeof o ? (i = n, 
n = t) :(i = n, n = o, o = t)), i === !1) i = c; else if (!i) return this;
return 1 === r && (s = i, i = function(e) {
return ut().off(e), s.apply(this, arguments);
}, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function() {
ut.event.add(this, e, i, n, o);
});
},
one:function(e, t, o, n) {
return this.on(e, t, o, n, 1);
},
off:function(e, o, n) {
var i, r;
if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace :i.origType, i.selector, i.handler), 
this;
if ("object" == typeof e) {
for (r in e) this.off(r, o, e[r]);
return this;
}
return (o === !1 || "function" == typeof o) && (n = o, o = t), n === !1 && (n = c), 
this.each(function() {
ut.event.remove(this, e, n, o);
});
},
trigger:function(e, t) {
return this.each(function() {
ut.event.trigger(e, t, this);
});
},
triggerHandler:function(e, t) {
var o = this[0];
return o ? ut.event.trigger(e, t, o, !0) :void 0;
}
});
var Rt = /^.[^:#\[\.,]*$/, Yt = /^(?:parents|prev(?:Until|All))/, qt = ut.expr.match.needsContext, Wt = {
children:!0,
contents:!0,
next:!0,
prev:!0
};
ut.fn.extend({
find:function(e) {
var t, o = [], n = this, i = n.length;
if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
for (t = 0; i > t; t++) if (ut.contains(n[t], this)) return !0;
}));
for (t = 0; i > t; t++) ut.find(e, n[t], o);
return o = this.pushStack(i > 1 ? ut.unique(o) :o), o.selector = this.selector ? this.selector + " " + e :e, 
o;
},
has:function(e) {
var t, o = ut(e, this), n = o.length;
return this.filter(function() {
for (t = 0; n > t; t++) if (ut.contains(this, o[t])) return !0;
});
},
not:function(e) {
return this.pushStack(p(this, e || [], !0));
},
filter:function(e) {
return this.pushStack(p(this, e || [], !1));
},
is:function(e) {
return !!p(this, "string" == typeof e && qt.test(e) ? ut(e) :e || [], !1).length;
},
closest:function(e, t) {
for (var o, n = 0, i = this.length, r = [], a = qt.test(e) || "string" != typeof e ? ut(e, t || this.context) :0; i > n; n++) for (o = this[n]; o && o !== t; o = o.parentNode) if (o.nodeType < 11 && (a ? a.index(o) > -1 :1 === o.nodeType && ut.find.matchesSelector(o, e))) {
o = r.push(o);
break;
}
return this.pushStack(r.length > 1 ? ut.unique(r) :r);
},
index:function(e) {
return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) :ut.inArray(e.jquery ? e[0] :e, this) :this[0] && this[0].parentNode ? this.first().prevAll().length :-1;
},
add:function(e, t) {
var o = "string" == typeof e ? ut(e, t) :ut.makeArray(e && e.nodeType ? [ e ] :e), n = ut.merge(this.get(), o);
return this.pushStack(ut.unique(n));
},
addBack:function(e) {
return this.add(null == e ? this.prevObject :this.prevObject.filter(e));
}
}), ut.each({
parent:function(e) {
var t = e.parentNode;
return t && 11 !== t.nodeType ? t :null;
},
parents:function(e) {
return ut.dir(e, "parentNode");
},
parentsUntil:function(e, t, o) {
return ut.dir(e, "parentNode", o);
},
next:function(e) {
return d(e, "nextSibling");
},
prev:function(e) {
return d(e, "previousSibling");
},
nextAll:function(e) {
return ut.dir(e, "nextSibling");
},
prevAll:function(e) {
return ut.dir(e, "previousSibling");
},
nextUntil:function(e, t, o) {
return ut.dir(e, "nextSibling", o);
},
prevUntil:function(e, t, o) {
return ut.dir(e, "previousSibling", o);
},
siblings:function(e) {
return ut.sibling((e.parentNode || {}).firstChild, e);
},
children:function(e) {
return ut.sibling(e.firstChild);
},
contents:function(e) {
return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document :ut.merge([], e.childNodes);
}
}, function(e, t) {
ut.fn[e] = function(o, n) {
var i = ut.map(this, t, o);
return "Until" !== e.slice(-5) && (n = o), n && "string" == typeof n && (i = ut.filter(n, i)), 
this.length > 1 && (Wt[e] || (i = ut.unique(i)), Yt.test(e) && (i = i.reverse())), 
this.pushStack(i);
};
}), ut.extend({
filter:function(e, t, o) {
var n = t[0];
return o && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? ut.find.matchesSelector(n, e) ? [ n ] :[] :ut.find.matches(e, ut.grep(t, function(e) {
return 1 === e.nodeType;
}));
},
dir:function(e, o, n) {
for (var i = [], r = e[o]; r && 9 !== r.nodeType && (n === t || 1 !== r.nodeType || !ut(r).is(n)); ) 1 === r.nodeType && i.push(r), 
r = r[o];
return i;
},
sibling:function(e, t) {
for (var o = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && o.push(e);
return o;
}
});
var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vt = / jQuery\d+="(?:null|\d+)"/g, Gt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"), Jt = /^\s+/, Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kt = /<([\w:]+)/, Xt = /<tbody/i, Zt = /<|&#?\w+;/, eo = /<(?:script|style|link)/i, to = /^(?:checkbox|radio)$/i, oo = /checked\s*(?:[^=]|=\s*.checked.)/i, no = /^$|\/(?:java|ecma)script/i, io = /^true\/(.*)/, ro = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ao = {
option:[ 1, "<select multiple='multiple'>", "</select>" ],
legend:[ 1, "<fieldset>", "</fieldset>" ],
area:[ 1, "<map>", "</map>" ],
param:[ 1, "<object>", "</object>" ],
thead:[ 1, "<table>", "</table>" ],
tr:[ 2, "<table><tbody>", "</tbody></table>" ],
col:[ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
td:[ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
_default:ut.support.htmlSerialize ? [ 0, "", "" ] :[ 1, "X<div>", "</div>" ]
}, so = g(Q), lo = so.appendChild(Q.createElement("div"));
ao.optgroup = ao.option, ao.tbody = ao.tfoot = ao.colgroup = ao.caption = ao.thead, 
ao.th = ao.td, ut.fn.extend({
text:function(e) {
return ut.access(this, function(e) {
return e === t ? ut.text(this) :this.empty().append((this[0] && this[0].ownerDocument || Q).createTextNode(e));
}, null, e, arguments.length);
},
append:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = h(this, e);
t.appendChild(e);
}
});
},
prepend:function() {
return this.domManip(arguments, function(e) {
if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
var t = h(this, e);
t.insertBefore(e, t.firstChild);
}
});
},
before:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this);
});
},
after:function() {
return this.domManip(arguments, function(e) {
this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
});
},
remove:function(e, t) {
for (var o, n = e ? ut.filter(e, this) :this, i = 0; null != (o = n[i]); i++) t || 1 !== o.nodeType || ut.cleanData(b(o)), 
o.parentNode && (t && ut.contains(o.ownerDocument, o) && v(b(o, "script")), o.parentNode.removeChild(o));
return this;
},
empty:function() {
for (var e, t = 0; null != (e = this[t]); t++) {
for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
e.options && ut.nodeName(e, "select") && (e.options.length = 0);
}
return this;
},
clone:function(e, t) {
return e = null == e ? !1 :e, t = null == t ? e :t, this.map(function() {
return ut.clone(this, e, t);
});
},
html:function(e) {
return ut.access(this, function(e) {
var o = this[0] || {}, n = 0, i = this.length;
if (e === t) return 1 === o.nodeType ? o.innerHTML.replace(Vt, "") :t;
if (!("string" != typeof e || eo.test(e) || !ut.support.htmlSerialize && Gt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || ao[(Kt.exec(e) || [ "", "" ])[1].toLowerCase()])) {
e = e.replace(Qt, "<$1></$2>");
try {
for (;i > n; n++) o = this[n] || {}, 1 === o.nodeType && (ut.cleanData(b(o, !1)), 
o.innerHTML = e);
o = 0;
} catch (r) {}
}
o && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith:function() {
var e = ut.map(this, function(e) {
return [ e.nextSibling, e.parentNode ];
}), t = 0;
return this.domManip(arguments, function(o) {
var n = e[t++], i = e[t++];
i && (n && n.parentNode !== i && (n = this.nextSibling), ut(this).remove(), i.insertBefore(o, n));
}, !0), t ? this :this.remove();
},
detach:function(e) {
return this.remove(e, !0);
},
domManip:function(e, t, o) {
e = nt.apply([], e);
var n, i, r, a, s, l, c = 0, u = this.length, d = this, p = u - 1, g = e[0], h = ut.isFunction(g);
if (h || !(1 >= u || "string" != typeof g || ut.support.checkClone) && oo.test(g)) return this.each(function(n) {
var i = d.eq(n);
h && (e[0] = g.call(this, n, i.html())), i.domManip(e, t, o);
});
if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !o && this), n = l.firstChild, 
1 === l.childNodes.length && (l = n), n)) {
for (a = ut.map(b(l, "script"), m), r = a.length; u > c; c++) i = l, c !== p && (i = ut.clone(i, !0, !0), 
r && ut.merge(a, b(i, "script"))), t.call(this[c], i, c);
if (r) for (s = a[a.length - 1].ownerDocument, ut.map(a, f), c = 0; r > c; c++) i = a[c], 
no.test(i.type || "") && !ut._data(i, "globalEval") && ut.contains(s, i) && (i.src ? ut._evalUrl(i.src) :ut.globalEval((i.text || i.textContent || i.innerHTML || "").replace(ro, "")));
l = n = null;
}
return this;
}
}), ut.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
}, function(e, t) {
ut.fn[e] = function(e) {
for (var o, n = 0, i = [], r = ut(e), a = r.length - 1; a >= n; n++) o = n === a ? this :this.clone(!0), 
ut(r[n])[t](o), it.apply(i, o.get());
return this.pushStack(i);
};
}), ut.extend({
clone:function(e, t, o) {
var n, i, r, a, s, l = ut.contains(e.ownerDocument, e);
if (ut.support.html5Clone || ut.isXMLDoc(e) || !Gt.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) :(lo.innerHTML = e.outerHTML, 
lo.removeChild(r = lo.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (n = b(r), 
s = b(e), a = 0; null != (i = s[a]); ++a) n[a] && y(i, n[a]);
if (t) if (o) for (s = s || b(e), n = n || b(r), a = 0; null != (i = s[a]); a++) w(i, n[a]); else w(e, r);
return n = b(r, "script"), n.length > 0 && v(n, !l && b(e, "script")), n = s = i = null, 
r;
},
buildFragment:function(e, t, o, n) {
for (var i, r, a, s, l, c, u, d = e.length, p = g(t), h = [], m = 0; d > m; m++) if (r = e[m], 
r || 0 === r) if ("object" === ut.type(r)) ut.merge(h, r.nodeType ? [ r ] :r); else if (Zt.test(r)) {
for (s = s || p.appendChild(t.createElement("div")), l = (Kt.exec(r) || [ "", "" ])[1].toLowerCase(), 
u = ao[l] || ao._default, s.innerHTML = u[1] + r.replace(Qt, "<$1></$2>") + u[2], 
i = u[0]; i--; ) s = s.lastChild;
if (!ut.support.leadingWhitespace && Jt.test(r) && h.push(t.createTextNode(Jt.exec(r)[0])), 
!ut.support.tbody) for (r = "table" !== l || Xt.test(r) ? "<table>" !== u[1] || Xt.test(r) ? 0 :s :s.firstChild, 
i = r && r.childNodes.length; i--; ) ut.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild; ) s.removeChild(s.firstChild);
s = p.lastChild;
} else h.push(t.createTextNode(r));
for (s && p.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), _), 
m = 0; r = h[m++]; ) if ((!n || -1 === ut.inArray(r, n)) && (a = ut.contains(r.ownerDocument, r), 
s = b(p.appendChild(r), "script"), a && v(s), o)) for (i = 0; r = s[i++]; ) no.test(r.type || "") && o.push(r);
return s = null, p;
},
cleanData:function(e, t) {
for (var o, n, i, r, a = 0, s = ut.expando, l = ut.cache, c = ut.support.deleteExpando, u = ut.event.special; null != (o = e[a]); a++) if ((t || ut.acceptData(o)) && (i = o[s], 
r = i && l[i])) {
if (r.events) for (n in r.events) u[n] ? ut.event.remove(o, n) :ut.removeEvent(o, n, r.handle);
l[i] && (delete l[i], c ? delete o[s] :typeof o.removeAttribute !== G ? o.removeAttribute(s) :o[s] = null, 
tt.push(i));
}
},
_evalUrl:function(e) {
return ut.ajax({
url:e,
type:"GET",
dataType:"script",
async:!1,
global:!1,
"throws":!0
});
}
}), ut.fn.extend({
wrapAll:function(e) {
if (ut.isFunction(e)) return this.each(function(t) {
ut(this).wrapAll(e.call(this, t));
});
if (this[0]) {
var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
return e;
}).append(this);
}
return this;
},
wrapInner:function(e) {
return ut.isFunction(e) ? this.each(function(t) {
ut(this).wrapInner(e.call(this, t));
}) :this.each(function() {
var t = ut(this), o = t.contents();
o.length ? o.wrapAll(e) :t.append(e);
});
},
wrap:function(e) {
var t = ut.isFunction(e);
return this.each(function(o) {
ut(this).wrapAll(t ? e.call(this, o) :e);
});
},
unwrap:function() {
return this.parent().each(function() {
ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes);
}).end();
}
});
var co, uo, po, go = /alpha\([^)]*\)/i, ho = /opacity\s*=\s*([^)]*)/, mo = /^(top|right|bottom|left)$/, fo = /^(none|table(?!-c[ea]).+)/, vo = /^margin/, wo = new RegExp("^(" + dt + ")(.*)$", "i"), yo = new RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"), bo = new RegExp("^([+-])=(" + dt + ")", "i"), _o = {
BODY:"block"
}, ko = {
position:"absolute",
visibility:"hidden",
display:"block"
}, xo = {
letterSpacing:0,
fontWeight:400
}, So = [ "Top", "Right", "Bottom", "Left" ], To = [ "Webkit", "O", "Moz", "ms" ];
ut.fn.extend({
css:function(e, o) {
return ut.access(this, function(e, o, n) {
var i, r, a = {}, s = 0;
if (ut.isArray(o)) {
for (r = uo(e), i = o.length; i > s; s++) a[o[s]] = ut.css(e, o[s], !1, r);
return a;
}
return n !== t ? ut.style(e, o, n) :ut.css(e, o);
}, e, o, arguments.length > 1);
},
show:function() {
return S(this, !0);
},
hide:function() {
return S(this);
},
toggle:function(e) {
var t = "boolean" == typeof e;
return this.each(function() {
(t ? e :x(this)) ? ut(this).show() :ut(this).hide();
});
}
}), ut.extend({
cssHooks:{
opacity:{
get:function(e, t) {
if (t) {
var o = po(e, "opacity");
return "" === o ? "1" :o;
}
}
}
},
cssNumber:{
columnCount:!0,
fillOpacity:!0,
fontWeight:!0,
lineHeight:!0,
opacity:!0,
orphans:!0,
widows:!0,
zIndex:!0,
zoom:!0
},
cssProps:{
"float":ut.support.cssFloat ? "cssFloat" :"styleFloat"
},
style:function(e, o, n, i) {
if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
var r, a, s, l = ut.camelCase(o), c = e.style;
if (o = ut.cssProps[l] || (ut.cssProps[l] = k(c, l)), s = ut.cssHooks[o] || ut.cssHooks[l], 
n === t) return s && "get" in s && (r = s.get(e, !1, i)) !== t ? r :c[o];
if (a = typeof n, "string" === a && (r = bo.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ut.css(e, o)), 
a = "number"), !(null == n || "number" === a && isNaN(n) || ("number" !== a || ut.cssNumber[l] || (n += "px"), 
ut.support.clearCloneStyle || "" !== n || 0 !== o.indexOf("background") || (c[o] = "inherit"), 
s && "set" in s && (n = s.set(e, n, i)) === t))) try {
c[o] = n;
} catch (u) {}
}
},
css:function(e, o, n, i) {
var r, a, s, l = ut.camelCase(o);
return o = ut.cssProps[l] || (ut.cssProps[l] = k(e.style, l)), s = ut.cssHooks[o] || ut.cssHooks[l], 
s && "get" in s && (a = s.get(e, !0, n)), a === t && (a = po(e, o, i)), "normal" === a && o in xo && (a = xo[o]), 
"" === n || n ? (r = parseFloat(a), n === !0 || ut.isNumeric(r) ? r || 0 :a) :a;
}
}), e.getComputedStyle ? (uo = function(t) {
return e.getComputedStyle(t, null);
}, po = function(e, o, n) {
var i, r, a, s = n || uo(e), l = s ? s.getPropertyValue(o) || s[o] :t, c = e.style;
return s && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, o)), 
yo.test(l) && vo.test(o) && (i = c.width, r = c.minWidth, a = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, 
l = s.width, c.width = i, c.minWidth = r, c.maxWidth = a)), l;
}) :Q.documentElement.currentStyle && (uo = function(e) {
return e.currentStyle;
}, po = function(e, o, n) {
var i, r, a, s = n || uo(e), l = s ? s[o] :t, c = e.style;
return null == l && c && c[o] && (l = c[o]), yo.test(l) && !mo.test(o) && (i = c.left, 
r = e.runtimeStyle, a = r && r.left, a && (r.left = e.currentStyle.left), c.left = "fontSize" === o ? "1em" :l, 
l = c.pixelLeft + "px", c.left = i, a && (r.left = a)), "" === l ? "auto" :l;
}), ut.each([ "height", "width" ], function(e, t) {
ut.cssHooks[t] = {
get:function(e, o, n) {
return o ? 0 === e.offsetWidth && fo.test(ut.css(e, "display")) ? ut.swap(e, ko, function() {
return E(e, t, n);
}) :E(e, t, n) :void 0;
},
set:function(e, o, n) {
var i = n && uo(e);
return T(e, o, n ? C(e, t, n, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) :0);
}
};
}), ut.support.opacity || (ut.cssHooks.opacity = {
get:function(e, t) {
return ho.test((t && e.currentStyle ? e.currentStyle.filter :e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" :t ? "1" :"";
},
set:function(e, t) {
var o = e.style, n = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" :"", r = n && n.filter || o.filter || "";
o.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(r.replace(go, "")) && o.removeAttribute && (o.removeAttribute("filter"), 
"" === t || n && !n.filter) || (o.filter = go.test(r) ? r.replace(go, i) :r + " " + i);
}
}), ut(function() {
ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
get:function(e, t) {
return t ? ut.swap(e, {
display:"inline-block"
}, po, [ e, "marginRight" ]) :void 0;
}
}), !ut.support.pixelPosition && ut.fn.position && ut.each([ "top", "left" ], function(e, t) {
ut.cssHooks[t] = {
get:function(e, o) {
return o ? (o = po(e, t), yo.test(o) ? ut(e).position()[t] + "px" :o) :void 0;
}
};
});
}), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"));
}, ut.expr.filters.visible = function(e) {
return !ut.expr.filters.hidden(e);
}), ut.each({
margin:"",
padding:"",
border:"Width"
}, function(e, t) {
ut.cssHooks[e + t] = {
expand:function(o) {
for (var n = 0, i = {}, r = "string" == typeof o ? o.split(" ") :[ o ]; 4 > n; n++) i[e + So[n] + t] = r[n] || r[n - 2] || r[0];
return i;
}
}, vo.test(e) || (ut.cssHooks[e + t].set = T);
});
var Co = /%20/g, Eo = /\[\]$/, Mo = /\r?\n/g, $o = /^(?:submit|button|image|reset|file)$/i, Do = /^(?:input|select|textarea|keygen)/i;
ut.fn.extend({
serialize:function() {
return ut.param(this.serializeArray());
},
serializeArray:function() {
return this.map(function() {
var e = ut.prop(this, "elements");
return e ? ut.makeArray(e) :this;
}).filter(function() {
var e = this.type;
return this.name && !ut(this).is(":disabled") && Do.test(this.nodeName) && !$o.test(e) && (this.checked || !to.test(e));
}).map(function(e, t) {
var o = ut(this).val();
return null == o ? null :ut.isArray(o) ? ut.map(o, function(e) {
return {
name:t.name,
value:e.replace(Mo, "\r\n")
};
}) :{
name:t.name,
value:o.replace(Mo, "\r\n")
};
}).get();
}
}), ut.param = function(e, o) {
var n, i = [], r = function(e, t) {
t = ut.isFunction(t) ? t() :null == t ? "" :t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
};
if (o === t && (o = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e, function() {
r(this.name, this.value);
}); else for (n in e) D(n, e[n], o, r);
return i.join("&").replace(Co, "+");
}, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
ut.fn[t] = function(e, o) {
return arguments.length > 0 ? this.on(t, null, e, o) :this.trigger(t);
};
}), ut.fn.extend({
hover:function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
},
bind:function(e, t, o) {
return this.on(e, null, t, o);
},
unbind:function(e, t) {
return this.off(e, null, t);
},
delegate:function(e, t, o, n) {
return this.on(t, e, o, n);
},
undelegate:function(e, t, o) {
return 1 === arguments.length ? this.off(e, "**") :this.off(t, e || "**", o);
}
});
var Lo, Io, Ao = ut.now(), Oo = /\?/, Bo = /#.*$/, No = /([?&])_=[^&]*/, Ho = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, jo = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Po = /^(?:GET|HEAD)$/, zo = /^\/\//, Fo = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Ro = ut.fn.load, Yo = {}, qo = {}, Wo = "*/".concat("*");
try {
Io = J.href;
} catch (Uo) {
Io = Q.createElement("a"), Io.href = "", Io = Io.href;
}
Lo = Fo.exec(Io.toLowerCase()) || [], ut.fn.load = function(e, o, n) {
if ("string" != typeof e && Ro) return Ro.apply(this, arguments);
var i, r, a, s = this, l = e.indexOf(" ");
return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ut.isFunction(o) ? (n = o, 
o = t) :o && "object" == typeof o && (a = "POST"), s.length > 0 && ut.ajax({
url:e,
type:a,
dataType:"html",
data:o
}).done(function(e) {
r = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) :e);
}).complete(n && function(e, t) {
s.each(n, r || [ e.responseText, t, e ]);
}), this;
}, ut.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
ut.fn[t] = function(e) {
return this.on(t, e);
};
}), ut.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:Io,
type:"GET",
isLocal:jo.test(Lo[1]),
global:!0,
processData:!0,
async:!0,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":Wo,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/xml/,
html:/html/,
json:/json/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":!0,
"text json":ut.parseJSON,
"text xml":ut.parseXML
},
flatOptions:{
url:!0,
context:!0
}
},
ajaxSetup:function(e, t) {
return t ? A(A(e, ut.ajaxSettings), t) :A(ut.ajaxSettings, e);
},
ajaxPrefilter:L(Yo),
ajaxTransport:L(qo),
ajax:function(e, o) {
function n(e, o, n, i) {
var r, d, w, y, _, x = o;
2 !== b && (b = 2, l && clearTimeout(l), u = t, s = i || "", k.readyState = e > 0 ? 4 :0, 
r = e >= 200 && 300 > e || 304 === e, n && (y = O(p, k, n)), y = B(p, y, k, r), 
r ? (p.ifModified && (_ = k.getResponseHeader("Last-Modified"), _ && (ut.lastModified[a] = _), 
_ = k.getResponseHeader("etag"), _ && (ut.etag[a] = _)), 204 === e || "HEAD" === p.type ? x = "nocontent" :304 === e ? x = "notmodified" :(x = y.state, 
d = y.data, w = y.error, r = !w)) :(w = x, (e || !x) && (x = "error", 0 > e && (e = 0))), 
k.status = e, k.statusText = (o || x) + "", r ? m.resolveWith(g, [ d, x, k ]) :m.rejectWith(g, [ k, x, w ]), 
k.statusCode(v), v = t, c && h.trigger(r ? "ajaxSuccess" :"ajaxError", [ k, p, r ? d :w ]), 
f.fireWith(g, [ k, x ]), c && (h.trigger("ajaxComplete", [ k, p ]), --ut.active || ut.event.trigger("ajaxStop")));
}
"object" == typeof e && (o = e, e = t), o = o || {};
var i, r, a, s, l, c, u, d, p = ut.ajaxSetup({}, o), g = p.context || p, h = p.context && (g.nodeType || g.jquery) ? ut(g) :ut.event, m = ut.Deferred(), f = ut.Callbacks("once memory"), v = p.statusCode || {}, w = {}, y = {}, b = 0, _ = "canceled", k = {
readyState:0,
getResponseHeader:function(e) {
var t;
if (2 === b) {
if (!d) for (d = {}; t = Ho.exec(s); ) d[t[1].toLowerCase()] = t[2];
t = d[e.toLowerCase()];
}
return null == t ? null :t;
},
getAllResponseHeaders:function() {
return 2 === b ? s :null;
},
setRequestHeader:function(e, t) {
var o = e.toLowerCase();
return b || (e = y[o] = y[o] || e, w[e] = t), this;
},
overrideMimeType:function(e) {
return b || (p.mimeType = e), this;
},
statusCode:function(e) {
var t;
if (e) if (2 > b) for (t in e) v[t] = [ v[t], e[t] ]; else k.always(e[k.status]);
return this;
},
abort:function(e) {
var t = e || _;
return u && u.abort(t), n(0, t), this;
}
};
if (m.promise(k).complete = f.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || Io) + "").replace(Bo, "").replace(zo, Lo[1] + "//"), 
p.type = o.method || o.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(pt) || [ "" ], 
null == p.crossDomain && (i = Fo.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Lo[1] && i[2] === Lo[2] && (i[3] || ("http:" === i[1] ? "80" :"443")) === (Lo[3] || ("http:" === Lo[1] ? "80" :"443")))), 
p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), 
I(Yo, p, o, k), 2 === b) return k;
c = p.global, c && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), 
p.hasContent = !Po.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Oo.test(a) ? "&" :"?") + p.data, 
delete p.data), p.cache === !1 && (p.url = No.test(a) ? a.replace(No, "$1_=" + Ao++) :a + (Oo.test(a) ? "&" :"?") + "_=" + Ao++)), 
p.ifModified && (ut.lastModified[a] && k.setRequestHeader("If-Modified-Since", ut.lastModified[a]), 
ut.etag[a] && k.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || o.contentType) && k.setRequestHeader("Content-Type", p.contentType), 
k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Wo + "; q=0.01" :"") :p.accepts["*"]);
for (r in p.headers) k.setRequestHeader(r, p.headers[r]);
if (p.beforeSend && (p.beforeSend.call(g, k, p) === !1 || 2 === b)) return k.abort();
_ = "abort";
for (r in {
success:1,
error:1,
complete:1
}) k[r](p[r]);
if (u = I(qo, p, o, k)) {
k.readyState = 1, c && h.trigger("ajaxSend", [ k, p ]), p.async && p.timeout > 0 && (l = setTimeout(function() {
k.abort("timeout");
}, p.timeout));
try {
b = 1, u.send(w, n);
} catch (x) {
if (!(2 > b)) throw x;
n(-1, x);
}
} else n(-1, "No Transport");
return k;
},
getJSON:function(e, t, o) {
return ut.get(e, t, o, "json");
},
getScript:function(e, o) {
return ut.get(e, t, o, "script");
}
}), ut.each([ "get", "post" ], function(e, o) {
ut[o] = function(e, n, i, r) {
return ut.isFunction(n) && (r = r || i, i = n, n = t), ut.ajax({
url:e,
type:o,
dataType:r,
data:n,
success:i
});
};
}), ut.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents:{
script:/(?:java|ecma)script/
},
converters:{
"text script":function(e) {
return ut.globalEval(e), e;
}
}
}), ut.ajaxPrefilter("script", function(e) {
e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
}), ut.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var o, n = Q.head || ut("head")[0] || Q.documentElement;
return {
send:function(t, i) {
o = Q.createElement("script"), o.async = !0, e.scriptCharset && (o.charset = e.scriptCharset), 
o.src = e.url, o.onload = o.onreadystatechange = function(e, t) {
(t || !o.readyState || /loaded|complete/.test(o.readyState)) && (o.onload = o.onreadystatechange = null, 
o.parentNode && o.parentNode.removeChild(o), o = null, t || i(200, "success"));
}, n.insertBefore(o, n.firstChild);
},
abort:function() {
o && o.onload(t, !0);
}
};
}
});
var Vo = [], Go = /(=)\?(?=&|$)|\?\?/;
ut.ajaxSetup({
jsonp:"callback",
jsonpCallback:function() {
var e = Vo.pop() || ut.expando + "_" + Ao++;
return this[e] = !0, e;
}
}), ut.ajaxPrefilter("json jsonp", function(o, n, i) {
var r, a, s, l = o.jsonp !== !1 && (Go.test(o.url) ? "url" :"string" == typeof o.data && !(o.contentType || "").indexOf("application/x-www-form-urlencoded") && Go.test(o.data) && "data");
return l || "jsonp" === o.dataTypes[0] ? (r = o.jsonpCallback = ut.isFunction(o.jsonpCallback) ? o.jsonpCallback() :o.jsonpCallback, 
l ? o[l] = o[l].replace(Go, "$1" + r) :o.jsonp !== !1 && (o.url += (Oo.test(o.url) ? "&" :"?") + o.jsonp + "=" + r), 
o.converters["script json"] = function() {
return s || ut.error(r + " was not called"), s[0];
}, o.dataTypes[0] = "json", a = e[r], e[r] = function() {
s = arguments;
}, i.always(function() {
e[r] = a, o[r] && (o.jsonpCallback = n.jsonpCallback, Vo.push(r)), s && ut.isFunction(a) && a(s[0]), 
s = a = t;
}), "script") :void 0;
});
var Jo, Qo, Ko = 0, Xo = e.ActiveXObject && function() {
var e;
for (e in Jo) Jo[e](t, !0);
};
ut.ajaxSettings.xhr = e.ActiveXObject ? function() {
return !this.isLocal && N() || H();
} :N, Qo = ut.ajaxSettings.xhr(), ut.support.cors = !!Qo && "withCredentials" in Qo, 
Qo = ut.support.ajax = !!Qo, Qo && ut.ajaxTransport(function(o) {
if (!o.crossDomain || ut.support.cors) {
var n;
return {
send:function(i, r) {
var a, s, l = o.xhr();
if (o.username ? l.open(o.type, o.url, o.async, o.username, o.password) :l.open(o.type, o.url, o.async), 
o.xhrFields) for (s in o.xhrFields) l[s] = o.xhrFields[s];
o.mimeType && l.overrideMimeType && l.overrideMimeType(o.mimeType), o.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
try {
for (s in i) l.setRequestHeader(s, i[s]);
} catch (c) {}
l.send(o.hasContent && o.data || null), n = function(e, i) {
var s, c, u, d;
try {
if (n && (i || 4 === l.readyState)) if (n = t, a && (l.onreadystatechange = ut.noop, 
Xo && delete Jo[a]), i) 4 !== l.readyState && l.abort(); else {
d = {}, s = l.status, c = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);
try {
u = l.statusText;
} catch (p) {
u = "";
}
s || !o.isLocal || o.crossDomain ? 1223 === s && (s = 204) :s = d.text ? 200 :404;
}
} catch (g) {
i || r(-1, g);
}
d && r(s, u, d, c);
}, o.async ? 4 === l.readyState ? setTimeout(n) :(a = ++Ko, Xo && (Jo || (Jo = {}, 
ut(e).unload(Xo)), Jo[a] = n), l.onreadystatechange = n) :n();
},
abort:function() {
n && n(t, !0);
}
};
}
});
var Zo, en, tn = /^(?:toggle|show|hide)$/, on = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"), nn = /queueHooks$/, rn = [ R ], an = {
"*":[ function(e, t) {
var o = this.createTween(e, t), n = o.cur(), i = on.exec(t), r = i && i[3] || (ut.cssNumber[e] ? "" :"px"), a = (ut.cssNumber[e] || "px" !== r && +n) && on.exec(ut.css(o.elem, e)), s = 1, l = 20;
if (a && a[3] !== r) {
r = r || a[3], i = i || [], a = +n || 1;
do s = s || ".5", a /= s, ut.style(o.elem, e, a + r); while (s !== (s = o.cur() / n) && 1 !== s && --l);
}
return i && (o.unit = r, o.start = +a || +n || 0, o.end = i[1] ? a + (i[1] + 1) * i[2] :+i[2]), 
o;
} ]
};
ut.Animation = ut.extend(z, {
tweener:function(e, t) {
ut.isFunction(e) ? (t = e, e = [ "*" ]) :e = e.split(" ");
for (var o, n = 0, i = e.length; i > n; n++) o = e[n], an[o] = an[o] || [], an[o].unshift(t);
},
prefilter:function(e, t) {
t ? rn.unshift(e) :rn.push(e);
}
}), ut.Tween = Y, Y.prototype = {
constructor:Y,
init:function(e, t, o, n, i, r) {
this.elem = e, this.prop = o, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), 
this.end = n, this.unit = r || (ut.cssNumber[o] ? "" :"px");
},
cur:function() {
var e = Y.propHooks[this.prop];
return e && e.get ? e.get(this) :Y.propHooks._default.get(this);
},
run:function(e) {
var t, o = Y.propHooks[this.prop];
return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) :e, 
this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
o && o.set ? o.set(this) :Y.propHooks._default.set(this), this;
}
}, Y.prototype.init.prototype = Y.prototype, Y.propHooks = {
_default:{
get:function(e) {
var t;
return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), 
t && "auto" !== t ? t :0) :e.elem[e.prop];
},
set:function(e) {
ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) :e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) :e.elem[e.prop] = e.now;
}
}
}, Y.propHooks.scrollTop = Y.propHooks.scrollLeft = {
set:function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, ut.each([ "toggle", "show", "hide" ], function(e, t) {
var o = ut.fn[t];
ut.fn[t] = function(e, n, i) {
return null == e || "boolean" == typeof e ? o.apply(this, arguments) :this.animate(q(t, !0), e, n, i);
};
}), ut.fn.extend({
fadeTo:function(e, t, o, n) {
return this.filter(x).css("opacity", 0).show().end().animate({
opacity:t
}, e, o, n);
},
animate:function(e, t, o, n) {
var i = ut.isEmptyObject(e), r = ut.speed(t, o, n), a = function() {
var t = z(this, ut.extend({}, e), r);
a.finish = function() {
t.stop(!0);
}, (i || ut._data(this, "finish")) && t.stop(!0);
};
return a.finish = a, i || r.queue === !1 ? this.each(a) :this.queue(r.queue, a);
},
stop:function(e, o, n) {
var i = function(e) {
var t = e.stop;
delete e.stop, t(n);
};
return "string" != typeof e && (n = o, o = e, e = t), o && e !== !1 && this.queue(e || "fx", []), 
this.each(function() {
var t = !0, o = null != e && e + "queueHooks", r = ut.timers, a = ut._data(this);
if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && nn.test(o) && i(a[o]);
for (o = r.length; o--; ) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), 
t = !1, r.splice(o, 1));
(t || !n) && ut.dequeue(this, e);
});
},
finish:function(e) {
return e !== !1 && (e = e || "fx"), this.each(function() {
var t, o = ut._data(this), n = o[e + "queue"], i = o[e + "queueHooks"], r = ut.timers, a = n ? n.length :0;
for (o.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), 
t = r.length; t--; ) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), 
r.splice(t, 1));
for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
delete o.finish;
});
}
}), ut.each({
slideDown:q("show"),
slideUp:q("hide"),
slideToggle:q("toggle"),
fadeIn:{
opacity:"show"
},
fadeOut:{
opacity:"hide"
},
fadeToggle:{
opacity:"toggle"
}
}, function(e, t) {
ut.fn[e] = function(e, o, n) {
return this.animate(t, e, o, n);
};
}), ut.speed = function(e, t, o) {
var n = e && "object" == typeof e ? ut.extend({}, e) :{
complete:o || !o && t || ut.isFunction(e) && e,
duration:e,
easing:o && t || t && !ut.isFunction(t) && t
};
return n.duration = ut.fx.off ? 0 :"number" == typeof n.duration ? n.duration :n.duration in ut.fx.speeds ? ut.fx.speeds[n.duration] :ut.fx.speeds._default, 
(null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
ut.isFunction(n.old) && n.old.call(this), n.queue && ut.dequeue(this, n.queue);
}, n;
}, ut.easing = {
linear:function(e) {
return e;
},
swing:function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
}
}, ut.timers = [], ut.fx = Y.prototype.init, ut.fx.tick = function() {
var e, o = ut.timers, n = 0;
for (Zo = ut.now(); n < o.length; n++) e = o[n], e() || o[n] !== e || o.splice(n--, 1);
o.length || ut.fx.stop(), Zo = t;
}, ut.fx.timer = function(e) {
e() && ut.timers.push(e) && ut.fx.start();
}, ut.fx.interval = 13, ut.fx.start = function() {
en || (en = setInterval(ut.fx.tick, ut.fx.interval));
}, ut.fx.stop = function() {
clearInterval(en), en = null;
}, ut.fx.speeds = {
slow:600,
fast:200,
_default:400
}, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
return ut.grep(ut.timers, function(t) {
return e === t.elem;
}).length;
}), ut.fn.offset = function(e) {
if (arguments.length) return e === t ? this :this.each(function(t) {
ut.offset.setOffset(this, e, t);
});
var o, n, i = {
top:0,
left:0
}, r = this[0], a = r && r.ownerDocument;
if (a) return o = a.documentElement, ut.contains(o, r) ? (typeof r.getBoundingClientRect !== G && (i = r.getBoundingClientRect()), 
n = W(a), {
top:i.top + (n.pageYOffset || o.scrollTop) - (o.clientTop || 0),
left:i.left + (n.pageXOffset || o.scrollLeft) - (o.clientLeft || 0)
}) :i;
}, ut.offset = {
setOffset:function(e, t, o) {
var n = ut.css(e, "position");
"static" === n && (e.style.position = "relative");
var i, r, a = ut(e), s = a.offset(), l = ut.css(e, "top"), c = ut.css(e, "left"), u = ("absolute" === n || "fixed" === n) && ut.inArray("auto", [ l, c ]) > -1, d = {}, p = {};
u ? (p = a.position(), i = p.top, r = p.left) :(i = parseFloat(l) || 0, r = parseFloat(c) || 0), 
ut.isFunction(t) && (t = t.call(e, o, s)), null != t.top && (d.top = t.top - s.top + i), 
null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) :a.css(d);
}
}, ut.fn.extend({
position:function() {
if (this[0]) {
var e, t, o = {
top:0,
left:0
}, n = this[0];
return "fixed" === ut.css(n, "position") ? t = n.getBoundingClientRect() :(e = this.offsetParent(), 
t = this.offset(), ut.nodeName(e[0], "html") || (o = e.offset()), o.top += ut.css(e[0], "borderTopWidth", !0), 
o.left += ut.css(e[0], "borderLeftWidth", !0)), {
top:t.top - o.top - ut.css(n, "marginTop", !0),
left:t.left - o.left - ut.css(n, "marginLeft", !0)
};
}
},
offsetParent:function() {
return this.map(function() {
for (var e = this.offsetParent || K; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position"); ) e = e.offsetParent;
return e || K;
});
}
}), ut.each({
scrollLeft:"pageXOffset",
scrollTop:"pageYOffset"
}, function(e, o) {
var n = /Y/.test(o);
ut.fn[e] = function(i) {
return ut.access(this, function(e, i, r) {
var a = W(e);
return r === t ? a ? o in a ? a[o] :a.document.documentElement[i] :e[i] :(a ? a.scrollTo(n ? ut(a).scrollLeft() :r, n ? r :ut(a).scrollTop()) :e[i] = r, 
void 0);
}, e, i, arguments.length, null);
};
}), ut.each({
Height:"height",
Width:"width"
}, function(e, o) {
ut.each({
padding:"inner" + e,
content:o,
"":"outer" + e
}, function(n, i) {
ut.fn[i] = function(i, r) {
var a = arguments.length && (n || "boolean" != typeof i), s = n || (i === !0 || r === !0 ? "margin" :"border");
return ut.access(this, function(o, n, i) {
var r;
return ut.isWindow(o) ? o.document.documentElement["client" + e] :9 === o.nodeType ? (r = o.documentElement, 
Math.max(o.body["scroll" + e], r["scroll" + e], o.body["offset" + e], r["offset" + e], r["client" + e])) :i === t ? ut.css(o, n, s) :ut.style(o, n, i, s);
}, o, a ? i :t, a, null);
};
});
}), ut.fn.size = function() {
return this.length;
}, ut.fn.andSelf = ut.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = ut :(e.jQuery = e.$ = ut, 
"function" == typeof define && define.amd && define("jquery", [], function() {
return ut;
}));
}(window);