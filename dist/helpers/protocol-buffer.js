"use strict";
let protobuf;
!function (g) {
    "use strict";
    var r, e, t, i;
    r = { 1: [function (t, e, r) { e.exports = function (t, e) { for (var r = Array(arguments.length - 1), n = 0, i = 2, o = !0; i < arguments.length;)
                r[n++] = arguments[i++]; return new Promise(function (i, s) { r[n] = function (t) { if (o)
                if (o = !1, t)
                    s(t);
                else {
                    for (var e = Array(arguments.length - 1), r = 0; r < e.length;)
                        e[r++] = arguments[r];
                    i.apply(null, e);
                } }; try {
                t.apply(e || null, r);
            }
            catch (t) {
                o && (o = !1, s(t));
            } }); }; }, {}], 2: [function (t, e, r) { r.length = function (t) { var e = t.length; if (!e)
                return 0; for (var r = 0; 1 < --e % 4 && "=" == (t[0 | e] || "");)
                ++r; return Math.ceil(3 * t.length) / 4 - r; }; for (var n = Array(64), i = Array(123), o = 0; o < 64;)
                i[n[o] = o < 26 ? o + 65 : o < 52 ? o + 71 : o < 62 ? o - 4 : o - 59 | 43] = o++; r.encode = function (t, e, r) { for (var i, o = null, s = [], a = 0, u = 0; e < r;) {
                var f = t[e++];
                switch (u) {
                    case 0:
                        s[a++] = n[f >> 2], i = (3 & f) << 4, u = 1;
                        break;
                    case 1:
                        s[a++] = n[i | f >> 4], i = (15 & f) << 2, u = 2;
                        break;
                    case 2: s[a++] = n[i | f >> 6], s[a++] = n[63 & f], u = 0;
                }
                8191 < a && ((o = o || []).push(String.fromCharCode.apply(String, s)), a = 0);
            } return u && (s[a++] = n[i], s[a++] = 61, 1 === u && (s[a++] = 61)), o ? (a && o.push(String.fromCharCode.apply(String, s.slice(0, a))), o.join("")) : String.fromCharCode.apply(String, s.slice(0, a)); }; var s = "invalid encoding"; r.decode = function (t, e, r) { for (var n, o = r, a = 0, u = 0; u < t.length;) {
                var f = t.charCodeAt(u++);
                if (61 == f && 1 < a)
                    break;
                if ((f = i[f]) === g)
                    throw Error(s);
                switch (a) {
                    case 0:
                        n = f, a = 1;
                        break;
                    case 1:
                        e[r++] = n << 2 | (48 & f) >> 4, n = f, a = 2;
                        break;
                    case 2:
                        e[r++] = (15 & n) << 4 | (60 & f) >> 2, n = f, a = 3;
                        break;
                    case 3: e[r++] = (3 & n) << 6 | f, a = 0;
                }
            } if (1 === a)
                throw Error(s); return r - o; }, r.test = function (t) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t); }; }, {}], 3: [function (t, e, r) { function n(t, e) { function r(t) { if ("string" != typeof t) {
                var e = i();
                if (n.verbose && console.log("codegen: " + e), e = "return " + e, t) {
                    for (var s = Object.keys(t), a = Array(s.length + 1), u = Array(s.length), f = 0; f < s.length;)
                        a[f] = s[f], u[f] = t[s[f++]];
                    return a[f] = e, Function.apply(null, a).apply(null, u);
                }
                return Function(e)();
            } for (var l = Array(arguments.length - 1), p = 0; p < l.length;)
                l[p] = arguments[++p]; if (p = 0, t = t.replace(/%([%dfijs])/g, function (t, e) { var r = l[p++]; switch (e) {
                case "d":
                case "f": return "" + +("" + r);
                case "i": return "" + Math.floor(r);
                case "j": return JSON.stringify(r);
                case "s": return "" + r;
            } return "%"; }), p !== l.length)
                throw Error("parameter count mismatch"); return o.push(t), r; } function i(r) { return "function " + (r || e || "") + "(" + (t && t.join(",") || "") + "){\n  " + o.join("\n  ") + "\n}"; } "string" == typeof t && (e = t, t = g); var o = []; return r.toString = i, r; } (e.exports = n).verbose = !1; }, {}], 4: [function (t, e, r) { function n() { this.t = {}; } (e.exports = n).prototype.on = function (t, e, r) { return (this.t[t] || (this.t[t] = [])).push({ fn: e, ctx: r || this }), this; }, n.prototype.off = function (t, e) { if (t === g)
                this.t = {};
            else if (e === g)
                this.t[t] = [];
            else
                for (var r = this.t[t], n = 0; n < r.length;)
                    r[n].fn === e ? r.splice(n, 1) : ++n; return this; }, n.prototype.emit = function (t) { var e = this.t[t]; if (e) {
                for (var r = [], n = 1; n < arguments.length;)
                    r.push(arguments[n++]);
                for (n = 0; n < e.length;)
                    e[n].fn.apply(e[n++].ctx, r);
            } return this; }; }, {}], 5: [function (t, e, r) { function n(t, e, r) { return e = "function" == typeof e ? (r = e, {}) : e || {}, r ? !e.xhr && o && o.readFile ? o.readFile(t, function (i, o) { return i && "undefined" != typeof XMLHttpRequest ? n.xhr(t, e, r) : i ? r(i) : r(null, e.binary ? o : o.toString("utf8")); }) : n.xhr(t, e, r) : i(n, this, t, e); } e.exports = n; var i = t(1), o = t(7)("fs"); n.xhr = function (t, e, r) { var n = new XMLHttpRequest; n.onreadystatechange = function () { if (4 !== n.readyState)
                return g; if (0 !== n.status && 200 !== n.status)
                return r(Error("status " + n.status)); if (e.binary) {
                if (!(t = n.response))
                    for (var t = [], i = 0; i < n.responseText.length; ++i)
                        t.push(255 & n.responseText.charCodeAt(i));
                return r(null, "undefined" != typeof Uint8Array ? new Uint8Array(t) : t);
            } return r(null, n.responseText); }, e.binary && ("overrideMimeType" in n && n.overrideMimeType("text/plain; charset=x-user-defined"), n.responseType = "arraybuffer"), n.open("GET", t), n.send(); }; }, { 1: 1, 7: 7 }], 6: [function (t, e, r) { function n(t) { function e(t, e, r, n) { var i = e < 0 ? 1 : 0; t(0 === (e = i ? -e : e) ? 0 < 1 / e ? 0 : 2147483648 : isNaN(e) ? 2143289344 : 3.4028234663852886e38 < e ? (i << 31 | 2139095040) >>> 0 : e < 1.1754943508222875e-38 ? (i << 31 | Math.round(e / 1.401298464324817e-45)) >>> 0 : (i << 31 | 127 + (t = Math.floor(Math.log(e) / Math.LN2)) << 23 | 8388607 & Math.round(e * Math.pow(2, -t) * 8388608)) >>> 0, r, n); } function r(t, e, r) { return t = t(e, r), e = 2 * (t >> 31) + 1, r = t >>> 23 & 255, t &= 8388607, 255 == r ? t ? NaN : 1 / 0 * e : 0 == r ? 1.401298464324817e-45 * e * t : e * Math.pow(2, r - 150) * (8388608 + t); } function n(t, e, r) { g[0] = t, e[r] = v[0], e[r + 1] = v[1], e[r + 2] = v[2], e[r + 3] = v[3]; } function u(t, e, r) { g[0] = t, e[r] = v[3], e[r + 1] = v[2], e[r + 2] = v[1], e[r + 3] = v[0]; } function f(t, e) { return v[0] = t[e], v[1] = t[e + 1], v[2] = t[e + 2], v[3] = t[e + 3], g[0]; } function l(t, e) { return v[3] = t[e], v[2] = t[e + 1], v[1] = t[e + 2], v[0] = t[e + 3], g[0]; } function p(t, e, r, n, i, o) { var s, a = n < 0 ? 1 : 0; 0 === (n = a ? -n : n) ? (t(0, i, o + e), t(0 < 1 / n ? 0 : 2147483648, i, o + r)) : isNaN(n) ? (t(0, i, o + e), t(2146959360, i, o + r)) : 1.7976931348623157e308 < n ? (t(0, i, o + e), t((a << 31 | 2146435072) >>> 0, i, o + r)) : n < 2.2250738585072014e-308 ? (t((s = n / 5e-324) >>> 0, i, o + e), t((a << 31 | s / 4294967296) >>> 0, i, o + r)) : (t(4503599627370496 * (s = n * Math.pow(2, -(n = 1024 === (n = Math.floor(Math.log(n) / Math.LN2)) ? 1023 : n))) >>> 0, i, o + e), t((a << 31 | n + 1023 << 20 | 1048576 * s & 1048575) >>> 0, i, o + r)); } function h(t, e, r, n, i) { return e = t(n, i + e), t = t(n, i + r), n = 2 * (t >> 31) + 1, i = t >>> 20 & 2047, r = 4294967296 * (1048575 & t) + e, 2047 == i ? r ? NaN : 1 / 0 * n : 0 == i ? 5e-324 * n * r : n * Math.pow(2, i - 1075) * (r + 4503599627370496); } function c(t, e, r) { b[0] = t, e[r] = O[0], e[r + 1] = O[1], e[r + 2] = O[2], e[r + 3] = O[3], e[r + 4] = O[4], e[r + 5] = O[5], e[r + 6] = O[6], e[r + 7] = O[7]; } function d(t, e, r) { b[0] = t, e[r] = O[7], e[r + 1] = O[6], e[r + 2] = O[5], e[r + 3] = O[4], e[r + 4] = O[3], e[r + 5] = O[2], e[r + 6] = O[1], e[r + 7] = O[0]; } function y(t, e) { return O[0] = t[e], O[1] = t[e + 1], O[2] = t[e + 2], O[3] = t[e + 3], O[4] = t[e + 4], O[5] = t[e + 5], O[6] = t[e + 6], O[7] = t[e + 7], b[0]; } function m(t, e) { return O[7] = t[e], O[6] = t[e + 1], O[5] = t[e + 2], O[4] = t[e + 3], O[3] = t[e + 4], O[2] = t[e + 5], O[1] = t[e + 6], O[0] = t[e + 7], b[0]; } var g, v, b, O, w; return "undefined" != typeof Float32Array ? (g = new Float32Array([-0]), v = new Uint8Array(g.buffer), w = 128 === v[3], t.writeFloatLE = w ? n : u, t.writeFloatBE = w ? u : n, t.readFloatLE = w ? f : l, t.readFloatBE = w ? l : f) : (t.writeFloatLE = e.bind(null, i), t.writeFloatBE = e.bind(null, o), t.readFloatLE = r.bind(null, s), t.readFloatBE = r.bind(null, a)), "undefined" != typeof Float64Array ? (b = new Float64Array([-0]), O = new Uint8Array(b.buffer), w = 128 === O[7], t.writeDoubleLE = w ? c : d, t.writeDoubleBE = w ? d : c, t.readDoubleLE = w ? y : m, t.readDoubleBE = w ? m : y) : (t.writeDoubleLE = p.bind(null, i, 0, 4), t.writeDoubleBE = p.bind(null, o, 4, 0), t.readDoubleLE = h.bind(null, s, 0, 4), t.readDoubleBE = h.bind(null, a, 4, 0)), t; } function i(t, e, r) { e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24; } function o(t, e, r) { e[r] = t >>> 24, e[r + 1] = t >>> 16 & 255, e[r + 2] = t >>> 8 & 255, e[r + 3] = 255 & t; } function s(t, e) { return (t[e] | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0; } function a(t, e) { return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0; } e.exports = n(n); }, {}], 7: [function (t, i, n) { function r(t) { try {
                var i = eval("require")(t);
                if (i && (i.length || Object.keys(i).length))
                    return i;
            }
            catch (t) { } return null; } i.exports = r; }, {}], 8: [function (t, e, r) { var n = r.isAbsolute = function (t) { return /^(?:\/|\w+:)/.test(t); }, i = r.normalize = function (t) { var e = (t = t.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), r = n(t); t = ""; r && (t = e.shift() + "/"); for (var i = 0; i < e.length;)
                ".." === e[i] ? 0 < i && ".." !== e[i - 1] ? e.splice(--i, 2) : r ? e.splice(i, 1) : ++i : "." === e[i] ? e.splice(i, 1) : ++i; return t + e.join("/"); }; r.resolve = function (t, e, r) { return r || (e = i(e)), !n(e) && (t = (t = r ? t : i(t)).replace(/(?:\/|^)[^/]+$/, "")).length ? i(t + "/" + e) : e; }; }, {}], 9: [function (t, e, r) { e.exports = function (t, e, r) { var n = r || 8192, i = n >>> 1, o = null, s = n; return function (r) { return r < 1 || i < r ? t(r) : (n < s + r && (o = t(n), s = 0), r = e.call(o, s, s += r), 7 & s && (s = 1 + (7 | s)), r); }; }; }, {}], 10: [function (t, e, r) { r.length = function (t) { for (var e, r = 0, n = 0; n < t.length; ++n)
                (e = t.charCodeAt(n)) < 128 ? r += 1 : e < 2048 ? r += 2 : 55296 == (64512 & e) && 56320 == (64512 & t.charCodeAt(n + 1)) ? (++n, r += 4) : r += 3; return r; }, r.read = function (t, e, r) { if (r - e < 1)
                return ""; for (var n, i = null, o = [], s = 0; e < r;)
                (n = t[e++]) < 128 ? o[s++] = n : 191 < n && n < 224 ? o[s++] = (31 & n) << 6 | 63 & t[e++] : 239 < n && n < 365 ? (n = ((7 & n) << 18 | (63 & t[e++]) << 12 | (63 & t[e++]) << 6 | 63 & t[e++]) - 65536, o[s++] = 55296 + (n >> 10), o[s++] = 56320 + (1023 & n)) : o[s++] = (15 & n) << 12 | (63 & t[e++]) << 6 | 63 & t[e++], 8191 < s && ((i = i || []).push(String.fromCharCode.apply(String, o)), s = 0); return i ? (s && i.push(String.fromCharCode.apply(String, o.slice(0, s))), i.join("")) : String.fromCharCode.apply(String, o.slice(0, s)); }, r.write = function (t, e, r) { for (var n, i, o = r, s = 0; s < t.length; ++s)
                (n = t.charCodeAt(s)) < 128 ? e[r++] = n : (n < 2048 ? e[r++] = n >> 6 | 192 : (55296 == (64512 & n) && 56320 == (64512 & (i = t.charCodeAt(s + 1))) ? (++s, e[r++] = (n = 65536 + ((1023 & n) << 10) + (1023 & i)) >> 18 | 240, e[r++] = n >> 12 & 63 | 128) : e[r++] = n >> 12 | 224, e[r++] = n >> 6 & 63 | 128), e[r++] = 63 & n | 128); return r - o; }; }, {}], 11: [function (t, e, r) { function n(t, e, r, n) { var i = !1; if (e.resolvedType)
                if (e.resolvedType instanceof o) {
                    t("switch(d%s){", n);
                    for (var s = e.resolvedType.values, a = Object.keys(s), u = 0; u < a.length; ++u)
                        s[a[u]] !== e.typeDefault || i || (t("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', n, n, n), e.repeated || t("break"), i = !0), t("case%j:", a[u])("case %i:", s[a[u]])("m%s=%j", n, s[a[u]])("break");
                    t("}");
                }
                else
                    t('if(typeof d%s!=="object")', n)("throw TypeError(%j)", e.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", n, r, n);
            else {
                var f = !1;
                switch (e.type) {
                    case "double":
                    case "float":
                        t("m%s=Number(d%s)", n, n);
                        break;
                    case "uint32":
                    case "fixed32":
                        t("m%s=d%s>>>0", n, n);
                        break;
                    case "int32":
                    case "sint32":
                    case "sfixed32":
                        t("m%s=d%s|0", n, n);
                        break;
                    case "uint64": f = !0;
                    case "int64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", n, n, f)('else if(typeof d%s==="string")', n)("m%s=parseInt(d%s,10)", n, n)('else if(typeof d%s==="number")', n)("m%s=d%s", n, n)('else if(typeof d%s==="object")', n)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", n, n, n, f ? "true" : "");
                        break;
                    case "bytes":
                        t('if(typeof d%s==="string")', n)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", n, n, n)("else if(d%s.length >= 0)", n)("m%s=d%s", n, n);
                        break;
                    case "string":
                        t("m%s=String(d%s)", n, n);
                        break;
                    case "bool": t("m%s=Boolean(d%s)", n, n);
                }
            } return t; } function i(t, e, r, n) { if (e.resolvedType)
                e.resolvedType instanceof o ? t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", n, r, n, n, r, n, n) : t("d%s=types[%i].toObject(m%s,o)", n, r, n);
            else {
                var i = !1;
                switch (e.type) {
                    case "double":
                    case "float":
                        t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
                        break;
                    case "uint64": i = !0;
                    case "int64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t('if(typeof m%s==="number")', n)("d%s=o.longs===String?String(m%s):m%s", n, n, n)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", n, n, n, n, i ? "true" : "", n);
                        break;
                    case "bytes":
                        t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", n, n, n, n, n);
                        break;
                    default: t("d%s=m%s", n, n);
                }
            } return t; } var o = t(14), s = t(33); r.fromObject = function (t) { var e = t.fieldsArray, r = s.codegen(["d"], t.name + "$fromObject")("if(d instanceof this.ctor)")("return d"); if (!e.length)
                return r("return new this.ctor"); r("var m=new this.ctor"); for (var i = 0; i < e.length; ++i) {
                var a = e[i].resolve(), u = s.safeProp(a.name);
                a.map ? (r("if(d%s){", u)('if(typeof d%s!=="object")', u)("throw TypeError(%j)", a.fullName + ": object expected")("m%s={}", u)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", u), n(r, a, i, u + "[ks[i]]")("}")("}")) : a.repeated ? (r("if(d%s){", u)("if(!Array.isArray(d%s))", u)("throw TypeError(%j)", a.fullName + ": array expected")("m%s=[]", u)("for(var i=0;i<d%s.length;++i){", u), n(r, a, i, u + "[i]")("}")("}")) : (a.resolvedType instanceof o || r("if(d%s!=null){", u), n(r, a, i, u), a.resolvedType instanceof o || r("}"));
            } return r("return m"); }, r.toObject = function (t) { var e = t.fieldsArray.slice().sort(s.compareFieldsById); if (!e.length)
                return s.codegen()("return {}"); for (var r = s.codegen(["m", "o"], t.name + "$toObject")("if(!o)")("o={}")("var d={}"), n = [], a = [], u = [], f = 0; f < e.length; ++f)
                e[f].partOf || (e[f].resolve().repeated ? n : e[f].map ? a : u).push(e[f]); if (n.length) {
                for (r("if(o.arrays||o.defaults){"), f = 0; f < n.length; ++f)
                    r("d%s=[]", s.safeProp(n[f].name));
                r("}");
            } if (a.length) {
                for (r("if(o.objects||o.defaults){"), f = 0; f < a.length; ++f)
                    r("d%s={}", s.safeProp(a[f].name));
                r("}");
            } if (u.length) {
                for (r("if(o.defaults){"), f = 0; f < u.length; ++f) {
                    var l, p = u[f], h = s.safeProp(p.name);
                    p.resolvedType instanceof o ? r("d%s=o.enums===String?%j:%j", h, p.resolvedType.valuesById[p.typeDefault], p.typeDefault) : p.long ? r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", p.typeDefault.low, p.typeDefault.high, p.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", h)("}else")("d%s=o.longs===String?%j:%i", h, p.typeDefault.toString(), p.typeDefault.toNumber()) : p.bytes ? (l = "[" + Array.prototype.slice.call(p.typeDefault).join(",") + "]", r("if(o.bytes===String)d%s=%j", h, String.fromCharCode.apply(String, p.typeDefault))("else{")("d%s=%s", h, l)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", h, h)("}")) : r("d%s=%j", h, p.typeDefault);
                }
                r("}");
            } var c = !1; for (f = 0; f < e.length; ++f) {
                p = e[f];
                var d = t.i.indexOf(p);
                h = s.safeProp(p.name);
                p.map ? (c || (c = !0, r("var ks2")), r("if(m%s&&(ks2=Object.keys(m%s)).length){", h, h)("d%s={}", h)("for(var j=0;j<ks2.length;++j){"), i(r, p, d, h + "[ks2[j]]")("}")) : p.repeated ? (r("if(m%s&&m%s.length){", h, h)("d%s=[]", h)("for(var j=0;j<m%s.length;++j){", h), i(r, p, d, h + "[j]")("}")) : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", h, p.name), i(r, p, d, h), p.partOf && r("if(o.oneofs)")("d%s=%j", s.safeProp(p.partOf.name), p.name)), r("}");
            } return r("return d"); }; }, { 14: 14, 33: 33 }], 12: [function (t, e, r) { e.exports = function (t) { var e = o.codegen(["r", "l"], t.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (t.fieldsArray.filter(function (t) { return t.map; }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()"); t.group && e("if((t&7)===4)")("break"), e("switch(t>>>3){"); for (var r = 0; r < t.fieldsArray.length; ++r) {
                var s = t.i[r].resolve(), a = s.resolvedType instanceof n ? "int32" : s.type, u = "m" + o.safeProp(s.name);
                e("case %i: {", s.id), s.map ? (e("if(%s===util.emptyObject)", u)("%s={}", u)("var c2 = r.uint32()+r.pos"), i.defaults[s.keyType] !== g ? e("k=%j", i.defaults[s.keyType]) : e("k=null"), i.defaults[a] !== g ? e("value=%j", i.defaults[a]) : e("value=null"), e("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", s.keyType)("case 2:"), i.basic[a] === g ? e("value=types[%i].decode(r,r.uint32())", r) : e("value=r.%s()", a), e("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), i.long[s.keyType] !== g ? e('%s[typeof k==="object"?util.longToHash(k):k]=value', u) : e("%s[k]=value", u)) : s.repeated ? (e("if(!(%s&&%s.length))", u, u)("%s=[]", u), i.packed[a] !== g && e("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", u, a)("}else"), i.basic[a] === g ? e(s.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", u, r) : e("%s.push(r.%s())", u, a)) : i.basic[a] === g ? e(s.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", u, r) : e("%s=r.%s()", u, a), e("break")("}");
            } for (e("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0; r < t.i.length; ++r) {
                var f = t.i[r];
                f.required && e("if(!m.hasOwnProperty(%j))", f.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + f.name + "'");
            } return e("return m"); }; var n = t(14), i = t(32), o = t(33); }, { 14: 14, 32: 32, 33: 33 }], 13: [function (t, e, r) { function n(t, e, r, n) { e.resolvedType.group ? t("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", r, n, (e.id << 3 | 3) >>> 0, (e.id << 3 | 4) >>> 0) : t("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", r, n, (e.id << 3 | 2) >>> 0); } e.exports = function (t) { for (var e, r = s.codegen(["m", "w"], t.name + "$encode")("if(!w)")("w=Writer.create()"), a = t.fieldsArray.slice().sort(s.compareFieldsById), u = 0; u < a.length; ++u) {
                var f = a[u].resolve(), l = t.i.indexOf(f), p = f.resolvedType instanceof i ? "int32" : f.type, h = o.basic[p];
                e = "m" + s.safeProp(f.name), f.map ? (r("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", e, f.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", e)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (f.id << 3 | 2) >>> 0, 8 | o.mapKey[f.keyType], f.keyType), h === g ? r("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", l, e) : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | h, p, e), r("}")("}")) : f.repeated ? (r("if(%s!=null&&%s.length){", e, e), f.packed && o.packed[p] !== g ? r("w.uint32(%i).fork()", (f.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", e)("w.%s(%s[i])", p, e)("w.ldelim()") : (r("for(var i=0;i<%s.length;++i)", e), h === g ? n(r, f, l, e + "[i]") : r("w.uint32(%i).%s(%s[i])", (f.id << 3 | h) >>> 0, p, e)), r("}")) : (f.optional && r("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", e, f.name), h === g ? n(r, f, l, e) : r("w.uint32(%i).%s(%s)", (f.id << 3 | h) >>> 0, p, e));
            } return r("return w"); }; var i = t(14), o = t(32), s = t(33); }, { 14: 14, 32: 32, 33: 33 }], 14: [function (t, e, r) { function n(t, e, r, n, o, s) { if (i.call(this, t, r), e && "object" != typeof e)
                throw TypeError("values must be an object"); if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = n, this.comments = o || {}, this.valuesOptions = s, this.reserved = g, e)
                for (var a = Object.keys(e), u = 0; u < a.length; ++u)
                    "number" == typeof e[a[u]] && (this.valuesById[this.values[a[u]] = e[a[u]]] = a[u]); } e.exports = n; var i = t(22), o = (((n.prototype = Object.create(i.prototype)).constructor = n).className = "Enum", t(21)), s = t(33); n.fromJSON = function (t, e) { return t = new n(t, e.values, e.options, e.comment, e.comments), t.reserved = e.reserved, t; }, n.prototype.toJSON = function (t) { return t = !!t && !!t.keepComments, s.toObject(["options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "comment", t ? this.comment : g, "comments", t ? this.comments : g]); }, n.prototype.add = function (t, e, r, n) { if (!s.isString(t))
                throw TypeError("name must be a string"); if (!s.isInteger(e))
                throw TypeError("id must be an integer"); if (this.values[t] !== g)
                throw Error("duplicate name '" + t + "' in " + this); if (this.isReservedId(e))
                throw Error("id " + e + " is reserved in " + this); if (this.isReservedName(t))
                throw Error("name '" + t + "' is reserved in " + this); if (this.valuesById[e] !== g) {
                if (!this.options || !this.options.allow_alias)
                    throw Error("duplicate id " + e + " in " + this);
                this.values[t] = e;
            }
            else
                this.valuesById[this.values[t] = e] = t; return n && (this.valuesOptions === g && (this.valuesOptions = {}), this.valuesOptions[t] = n || null), this.comments[t] = r || null, this; }, n.prototype.remove = function (t) { if (!s.isString(t))
                throw TypeError("name must be a string"); var e = this.values[t]; if (null == e)
                throw Error("name '" + t + "' does not exist in " + this); return delete this.valuesById[e], delete this.values[t], delete this.comments[t], this.valuesOptions && delete this.valuesOptions[t], this; }, n.prototype.isReservedId = function (t) { return o.isReservedId(this.reserved, t); }, n.prototype.isReservedName = function (t) { return o.isReservedName(this.reserved, t); }; }, { 21: 21, 22: 22, 33: 33 }], 15: [function (t, e, r) { function n(t, e, r, n, i, s, l) { if (u.isObject(n) ? (l = i, s = n, n = i = g) : u.isObject(i) && (l = s, s = i, i = g), o.call(this, t, s), !u.isInteger(e) || e < 0)
                throw TypeError("id must be a non-negative integer"); if (!u.isString(r))
                throw TypeError("type must be a string"); if (n !== g && !f.test(n = n.toString().toLowerCase()))
                throw TypeError("rule must be a string rule"); if (i !== g && !u.isString(i))
                throw TypeError("extend must be a string"); this.rule = (n = "proto3_optional" === n ? "optional" : n) && "optional" !== n ? n : g, this.type = r, this.id = e, this.extend = i || g, this.required = "required" === n, this.optional = !this.required, this.repeated = "repeated" === n, this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, this.defaultValue = null, this.long = !!u.Long && a.long[r] !== g, this.bytes = "bytes" === r, this.resolvedType = null, this.extensionField = null, this.declaringField = null, this.n = null, this.comment = l; } e.exports = n; var i, o = t(22), s = (((n.prototype = Object.create(o.prototype)).constructor = n).className = "Field", t(14)), a = t(32), u = t(33), f = /^required|optional|repeated$/; n.fromJSON = function (t, e) { return new n(t, e.id, e.type, e.rule, e.extend, e.options, e.comment); }, Object.defineProperty(n.prototype, "packed", { get: function () { return null === this.n && (this.n = !1 !== this.getOption("packed")), this.n; } }), n.prototype.setOption = function (t, e, r) { return "packed" === t && (this.n = null), o.prototype.setOption.call(this, t, e, r); }, n.prototype.toJSON = function (t) { return t = !!t && !!t.keepComments, u.toObject(["rule", "optional" !== this.rule && this.rule || g, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : g]); }, n.prototype.resolve = function () { var t; return this.resolved ? this : ((this.typeDefault = a.defaults[this.type]) === g ? (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), this.resolvedType instanceof i ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof s && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (!0 !== this.options.packed && (this.options.packed === g || !this.resolvedType || this.resolvedType instanceof s) || delete this.options.packed, Object.keys(this.options).length || (this.options = g)), this.long ? (this.typeDefault = u.Long.fromNumber(this.typeDefault, "u" == (this.type[0] || "")), Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (u.base64.test(this.typeDefault) ? u.base64.decode(this.typeDefault, t = u.newBuffer(u.base64.length(this.typeDefault)), 0) : u.utf8.write(this.typeDefault, t = u.newBuffer(u.utf8.length(this.typeDefault)), 0), this.typeDefault = t), this.map ? this.defaultValue = u.emptyObject : this.repeated ? this.defaultValue = u.emptyArray : this.defaultValue = this.typeDefault, this.parent instanceof i && (this.parent.ctor.prototype[this.name] = this.defaultValue), o.prototype.resolve.call(this)); }, n.d = function (t, e, r, i) { return "function" == typeof e ? e = u.decorateType(e).name : e && "object" == typeof e && (e = u.decorateEnum(e).name), function (o, s) { u.decorateType(o.constructor).add(new n(s, t, e, r, { default: i })); }; }, n.r = function (t) { i = t; }; }, { 14: 14, 22: 22, 32: 32, 33: 33 }], 16: [function (t, e, r) { var n = e.exports = t(17); n.build = "light", n.load = function (t, e, r) { return (e = "function" == typeof e ? (r = e, new n.Root) : e || new n.Root).load(t, r); }, n.loadSync = function (t, e) { return (e = e || new n.Root).loadSync(t); }, n.encoder = t(13), n.decoder = t(12), n.verifier = t(36), n.converter = t(11), n.ReflectionObject = t(22), n.Namespace = t(21), n.Root = t(26), n.Enum = t(14), n.Type = t(31), n.Field = t(15), n.OneOf = t(23), n.MapField = t(18), n.Service = t(30), n.Method = t(20), n.Message = t(19), n.wrappers = t(37), n.types = t(32), n.util = t(33), n.ReflectionObject.r(n.Root), n.Namespace.r(n.Type, n.Service, n.Enum), n.Root.r(n.Type), n.Field.r(n.Type); }, { 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 17: 17, 18: 18, 19: 19, 20: 20, 21: 21, 22: 22, 23: 23, 26: 26, 30: 30, 31: 31, 32: 32, 33: 33, 36: 36, 37: 37 }], 17: [function (t, e, r) { function n() { i.util.r(), i.Writer.r(i.BufferWriter), i.Reader.r(i.BufferReader); } var i = r; i.build = "minimal", i.Writer = t(38), i.BufferWriter = t(39), i.Reader = t(24), i.BufferReader = t(25), i.util = t(35), i.rpc = t(28), i.roots = t(27), i.configure = n, n(); }, { 24: 24, 25: 25, 27: 27, 28: 28, 35: 35, 38: 38, 39: 39 }], 18: [function (t, e, r) { function n(t, e, r, n, o, a) { if (i.call(this, t, e, n, g, g, o, a), !s.isString(r))
                throw TypeError("keyType must be a string"); this.keyType = r, this.resolvedKeyType = null, this.map = !0; } e.exports = n; var i = t(15), o = (((n.prototype = Object.create(i.prototype)).constructor = n).className = "MapField", t(32)), s = t(33); n.fromJSON = function (t, e) { return new n(t, e.id, e.keyType, e.type, e.options, e.comment); }, n.prototype.toJSON = function (t) { return t = !!t && !!t.keepComments, s.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", t ? this.comment : g]); }, n.prototype.resolve = function () { if (this.resolved)
                return this; if (o.mapKey[this.keyType] === g)
                throw Error("invalid key type: " + this.keyType); return i.prototype.resolve.call(this); }, n.d = function (t, e, r) { return "function" == typeof r ? r = s.decorateType(r).name : r && "object" == typeof r && (r = s.decorateEnum(r).name), function (i, o) { s.decorateType(i.constructor).add(new n(o, t, e, r)); }; }; }, { 15: 15, 32: 32, 33: 33 }], 19: [function (t, e, r) { function n(t) { if (t)
                for (var e = Object.keys(t), r = 0; r < e.length; ++r)
                    this[e[r]] = t[e[r]]; } e.exports = n; var i = t(35); n.create = function (t) { return this.$type.create(t); }, n.encode = function (t, e) { return this.$type.encode(t, e); }, n.encodeDelimited = function (t, e) { return this.$type.encodeDelimited(t, e); }, n.decode = function (t) { return this.$type.decode(t); }, n.decodeDelimited = function (t) { return this.$type.decodeDelimited(t); }, n.verify = function (t) { return this.$type.verify(t); }, n.fromObject = function (t) { return this.$type.fromObject(t); }, n.toObject = function (t, e) { return this.$type.toObject(t, e); }, n.prototype.toJSON = function () { return this.$type.toObject(this, i.toJSONOptions); }; }, { 35: 35 }], 20: [function (t, e, r) { function n(t, e, r, n, s, a, u, f, l) { if (o.isObject(s) ? (u = s, s = a = g) : o.isObject(a) && (u = a, a = g), e !== g && !o.isString(e))
                throw TypeError("type must be a string"); if (!o.isString(r))
                throw TypeError("requestType must be a string"); if (!o.isString(n))
                throw TypeError("responseType must be a string"); i.call(this, t, u), this.type = e || "rpc", this.requestType = r, this.requestStream = !!s || g, this.responseType = n, this.responseStream = !!a || g, this.resolvedRequestType = null, this.resolvedResponseType = null, this.comment = f, this.parsedOptions = l; } e.exports = n; var i = t(22), o = (((n.prototype = Object.create(i.prototype)).constructor = n).className = "Method", t(33)); n.fromJSON = function (t, e) { return new n(t, e.type, e.requestType, e.responseType, e.requestStream, e.responseStream, e.options, e.comment, e.parsedOptions); }, n.prototype.toJSON = function (t) { return t = !!t && !!t.keepComments, o.toObject(["type", "rpc" !== this.type && this.type || g, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", t ? this.comment : g, "parsedOptions", this.parsedOptions]); }, n.prototype.resolve = function () { return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), i.prototype.resolve.call(this)); }; }, { 22: 22, 33: 33 }], 21: [function (t, e, r) { function n(t, e) { if (!t || !t.length)
                return g; for (var r = {}, n = 0; n < t.length; ++n)
                r[t[n].name] = t[n].toJSON(e); return r; } function i(t, e) { f.call(this, t, e), this.nested = g, this.e = null; } function o(t) { return t.e = null, t; } e.exports = i; var s, a, u, f = t(22), l = (((i.prototype = Object.create(f.prototype)).constructor = i).className = "Namespace", t(15)), p = t(33), h = t(23); i.fromJSON = function (t, e) { return new i(t, e.options).addJSON(e.nested); }, i.arrayToJSON = n, i.isReservedId = function (t, e) { if (t)
                for (var r = 0; r < t.length; ++r)
                    if ("string" != typeof t[r] && t[r][0] <= e && t[r][1] > e)
                        return !0; return !1; }, i.isReservedName = function (t, e) { if (t)
                for (var r = 0; r < t.length; ++r)
                    if (t[r] === e)
                        return !0; return !1; }, Object.defineProperty(i.prototype, "nestedArray", { get: function () { return this.e || (this.e = p.toArray(this.nested)); } }), i.prototype.toJSON = function (t) { return p.toObject(["options", this.options, "nested", n(this.nestedArray, t)]); }, i.prototype.addJSON = function (t) { if (t)
                for (var e, r = Object.keys(t), n = 0; n < r.length; ++n)
                    e = t[r[n]], this.add((e.fields !== g ? s : e.values !== g ? u : e.methods !== g ? a : e.id !== g ? l : i).fromJSON(r[n], e)); return this; }, i.prototype.get = function (t) { return this.nested && this.nested[t] || null; }, i.prototype.getEnum = function (t) { if (this.nested && this.nested[t] instanceof u)
                return this.nested[t].values; throw Error("no such enum: " + t); }, i.prototype.add = function (t) { if (!(t instanceof l && t.extend !== g || t instanceof s || t instanceof h || t instanceof u || t instanceof a || t instanceof i))
                throw TypeError("object must be a valid nested object"); if (this.nested) {
                var e = this.get(t.name);
                if (e) {
                    if (!(e instanceof i && t instanceof i) || e instanceof s || e instanceof a)
                        throw Error("duplicate name '" + t.name + "' in " + this);
                    for (var r = e.nestedArray, n = 0; n < r.length; ++n)
                        t.add(r[n]);
                    this.remove(e), this.nested || (this.nested = {}), t.setOptions(e.options, !0);
                }
            }
            else
                this.nested = {}; return (this.nested[t.name] = t).onAdd(this), o(this); }, i.prototype.remove = function (t) { if (!(t instanceof f))
                throw TypeError("object must be a ReflectionObject"); if (t.parent !== this)
                throw Error(t + " is not a member of " + this); return delete this.nested[t.name], Object.keys(this.nested).length || (this.nested = g), t.onRemove(this), o(this); }, i.prototype.define = function (t, e) { if (p.isString(t))
                t = t.split(".");
            else if (!Array.isArray(t))
                throw TypeError("illegal path"); if (t && t.length && "" === t[0])
                throw Error("path must be relative"); for (var r = this; 0 < t.length;) {
                var n = t.shift();
                if (r.nested && r.nested[n]) {
                    if (!((r = r.nested[n]) instanceof i))
                        throw Error("path conflicts with non-namespace objects");
                }
                else
                    r.add(r = new i(n));
            } return e && r.addJSON(e), r; }, i.prototype.resolveAll = function () { for (var t = this.nestedArray, e = 0; e < t.length;)
                t[e] instanceof i ? t[e++].resolveAll() : t[e++].resolve(); return this.resolve(); }, i.prototype.lookup = function (t, e, r) { if ("boolean" == typeof e ? (r = e, e = g) : e && !Array.isArray(e) && (e = [e]), p.isString(t) && t.length) {
                if ("." === t)
                    return this.root;
                t = t.split(".");
            }
            else if (!t.length)
                return this; if ("" === t[0])
                return this.root.lookup(t.slice(1), e); var n = this.get(t[0]); if (n) {
                if (1 === t.length) {
                    if (!e || ~e.indexOf(n.constructor))
                        return n;
                }
                else if (n instanceof i && (n = n.lookup(t.slice(1), e, !0)))
                    return n;
            }
            else
                for (var o = 0; o < this.nestedArray.length; ++o)
                    if (this.e[o] instanceof i && (n = this.e[o].lookup(t, e, !0)))
                        return n; return null === this.parent || r ? null : this.parent.lookup(t, e); }, i.prototype.lookupType = function (t) { var e = this.lookup(t, [s]); if (e)
                return e; throw Error("no such type: " + t); }, i.prototype.lookupEnum = function (t) { var e = this.lookup(t, [u]); if (e)
                return e; throw Error("no such Enum '" + t + "' in " + this); }, i.prototype.lookupTypeOrEnum = function (t) { var e = this.lookup(t, [s, u]); if (e)
                return e; throw Error("no such Type or Enum '" + t + "' in " + this); }, i.prototype.lookupService = function (t) { var e = this.lookup(t, [a]); if (e)
                return e; throw Error("no such Service '" + t + "' in " + this); }, i.r = function (t, e, r) { s = t, a = e, u = r; }; }, { 15: 15, 22: 22, 23: 23, 33: 33 }], 22: [function (t, e, r) { function n(t, e) { if (!o.isString(t))
                throw TypeError("name must be a string"); if (e && !o.isObject(e))
                throw TypeError("options must be an object"); this.options = e, this.parsedOptions = null, this.name = t, this.parent = null, this.resolved = !1, this.comment = null, this.filename = null; } (e.exports = n).className = "ReflectionObject"; var i, o = t(33); Object.defineProperties(n.prototype, { root: { get: function () { for (var t = this; null !== t.parent;)
                        t = t.parent; return t; } }, fullName: { get: function () { for (var t = [this.name], e = this.parent; e;)
                        t.unshift(e.name), e = e.parent; return t.join("."); } } }), n.prototype.toJSON = function () { throw Error(); }, n.prototype.onAdd = function (t) { this.parent && this.parent !== t && this.parent.remove(this), this.parent = t, this.resolved = !1, t = t.root, t instanceof i && t.u(this); }, n.prototype.onRemove = function (t) { t = t.root, t instanceof i && t.o(this), this.parent = null, this.resolved = !1; }, n.prototype.resolve = function () { return this.resolved || this.root instanceof i && (this.resolved = !0), this; }, n.prototype.getOption = function (t) { return this.options ? this.options[t] : g; }, n.prototype.setOption = function (t, e, r) { return r && this.options && this.options[t] !== g || ((this.options || (this.options = {}))[t] = e), this; }, n.prototype.setParsedOption = function (t, e, r) { this.parsedOptions || (this.parsedOptions = []); var n, i, s = this.parsedOptions; return r ? (n = s.find(function (e) { return Object.prototype.hasOwnProperty.call(e, t); })) ? (i = n[t], o.setProperty(i, r, e)) : ((n = {})[t] = o.setProperty({}, r, e), s.push(n)) : ((i = {})[t] = e, s.push(i)), this; }, n.prototype.setOptions = function (t, e) { if (t)
                for (var r = Object.keys(t), n = 0; n < r.length; ++n)
                    this.setOption(r[n], t[r[n]], e); return this; }, n.prototype.toString = function () { var t = this.constructor.className, e = this.fullName; return e.length ? t + " " + e : t; }, n.r = function (t) { i = t; }; }, { 33: 33 }], 23: [function (t, e, r) {
                function n(t, e, r, n) { if (Array.isArray(e) || (r = e, e = g), o.call(this, t, r), e !== g && !Array.isArray(e))
                    throw TypeError("fieldNames must be an Array"); this.oneof = e || [], this.fieldsArray = [], this.comment = n; }
                function i(t) { if (t.parent)
                    for (var e = 0; e < t.fieldsArray.length; ++e)
                        t.fieldsArray[e].parent || t.parent.add(t.fieldsArray[e]); }
                e.exports = n;
                var o = t(22), s = (((n.prototype = Object.create(o.prototype)).constructor = n).className = "OneOf", t(15)), a = t(33);
                n.fromJSON = function (t, e) { return new n(t, e.oneof, e.options, e.comment); }, n.prototype.toJSON = function (t) { return t = !!t && !!t.keepComments, a.toObject(["options", this.options, "oneof", this.oneof, "comment", t ? this.comment : g]); },
                    n.prototype.add = function (t) { if (t instanceof s)
                        return t.parent && t.parent !== this.parent && t.parent.remove(t), this.oneof.push(t.name), this.fieldsArray.push(t), i(t.partOf = this), this; throw TypeError("field must be a Field"); }, n.prototype.remove = function (t) { if (!(t instanceof s))
                    throw TypeError("field must be a Field"); var e = this.fieldsArray.indexOf(t); if (e < 0)
                    throw Error(t + " is not a member of " + this); return this.fieldsArray.splice(e, 1), -1 < (e = this.oneof.indexOf(t.name)) && this.oneof.splice(e, 1), t.partOf = null, this; }, n.prototype.onAdd = function (t) { o.prototype.onAdd.call(this, t); for (var e = 0; e < this.oneof.length; ++e) {
                    var r = t.get(this.oneof[e]);
                    r && !r.partOf && (r.partOf = this).fieldsArray.push(r);
                } i(this); }, n.prototype.onRemove = function (t) { for (var e, r = 0; r < this.fieldsArray.length; ++r)
                    (e = this.fieldsArray[r]).parent && e.parent.remove(e); o.prototype.onRemove.call(this, t); }, n.d = function () { for (var t = Array(arguments.length), e = 0; e < arguments.length;)
                    t[e] = arguments[e++]; return function (e, r) { a.decorateType(e.constructor).add(new n(r, t)), Object.defineProperty(e, r, { get: a.oneOfGetter(t), set: a.oneOfSetter(t) }); }; };
            }, { 15: 15, 22: 22, 33: 33 }], 24: [function (t, e, r) { function n(t, e) { return RangeError("index out of range: " + t.pos + " + " + (e || 1) + " > " + t.len); } function i(t) { this.buf = t, this.pos = 0, this.len = t.length; } function o() { return p.Buffer ? function (t) { return (i.create = function (t) { return p.Buffer.isBuffer(t) ? new f(t) : d(t); })(t); } : d; } function s() { var t = new h(0, 0), e = 0; if (!(4 < this.len - this.pos)) {
                for (; e < 3; ++e) {
                    if (this.pos >= this.len)
                        throw n(this);
                    if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128)
                        return t;
                }
                return t.lo = (t.lo | (127 & this.buf[this.pos++]) << 7 * e) >>> 0, t;
            } for (; e < 4; ++e)
                if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 7 * e) >>> 0, this.buf[this.pos++] < 128)
                    return t; if (t.lo = (t.lo | (127 & this.buf[this.pos]) << 28) >>> 0, t.hi = (t.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128)
                return t; if (e = 0, 4 < this.len - this.pos) {
                for (; e < 5; ++e)
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128)
                        return t;
            }
            else
                for (; e < 5; ++e) {
                    if (this.pos >= this.len)
                        throw n(this);
                    if (t.hi = (t.hi | (127 & this.buf[this.pos]) << 7 * e + 3) >>> 0, this.buf[this.pos++] < 128)
                        return t;
                } throw Error("invalid varint encoding"); } function a(t, e) { return (t[e - 4] | t[e - 3] << 8 | t[e - 2] << 16 | t[e - 1] << 24) >>> 0; } function u() { if (this.pos + 8 > this.len)
                throw n(this, 8); return new h(a(this.buf, this.pos += 4), a(this.buf, this.pos += 4)); } e.exports = i; var f, l, p = t(35), h = p.LongBits, c = p.utf8, d = "undefined" != typeof Uint8Array ? function (t) { if (t instanceof Uint8Array || Array.isArray(t))
                return new i(t); throw Error("illegal buffer"); } : function (t) { if (Array.isArray(t))
                return new i(t); throw Error("illegal buffer"); }; i.create = o(), i.prototype.h = p.Array.prototype.subarray || p.Array.prototype.slice, i.prototype.uint32 = (l = 4294967295, function () { if (l = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (l = (l | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128 || (l = (l | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128 || (l = (l | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128 || (l = (l | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128 || !((this.pos += 5) > this.len))))))
                return l; throw this.pos = this.len, n(this, 10); }), i.prototype.int32 = function () { return 0 | this.uint32(); }, i.prototype.sint32 = function () { var t = this.uint32(); return t >>> 1 ^ -(1 & t) | 0; }, i.prototype.bool = function () { return 0 !== this.uint32(); }, i.prototype.fixed32 = function () { if (this.pos + 4 > this.len)
                throw n(this, 4); return a(this.buf, this.pos += 4); }, i.prototype.sfixed32 = function () { if (this.pos + 4 > this.len)
                throw n(this, 4); return 0 | a(this.buf, this.pos += 4); }, i.prototype.float = function () { if (this.pos + 4 > this.len)
                throw n(this, 4); var t = p.float.readFloatLE(this.buf, this.pos); return this.pos += 4, t; }, i.prototype.double = function () { if (this.pos + 8 > this.len)
                throw n(this, 4); var t = p.float.readDoubleLE(this.buf, this.pos); return this.pos += 8, t; }, i.prototype.bytes = function () { var t = this.uint32(), e = this.pos, r = this.pos + t; if (r > this.len)
                throw n(this, t); return this.pos += t, Array.isArray(this.buf) ? this.buf.slice(e, r) : e === r ? new this.buf.constructor(0) : this.h.call(this.buf, e, r); }, i.prototype.string = function () { var t = this.bytes(); return c.read(t, 0, t.length); }, i.prototype.skip = function (t) { if ("number" == typeof t) {
                if (this.pos + t > this.len)
                    throw n(this, t);
                this.pos += t;
            }
            else
                do {
                    if (this.pos >= this.len)
                        throw n(this);
                } while (128 & this.buf[this.pos++]); return this; }, i.prototype.skipType = function (t) { switch (t) {
                case 0:
                    this.skip();
                    break;
                case 1:
                    this.skip(8);
                    break;
                case 2:
                    this.skip(this.uint32());
                    break;
                case 3:
                    for (; 4 != (t = 7 & this.uint32());)
                        this.skipType(t);
                    break;
                case 5:
                    this.skip(4);
                    break;
                default: throw Error("invalid wire type " + t + " at offset " + this.pos);
            } return this; }, i.r = function (t) { f = t, i.create = o(), f.r(); var e = p.Long ? "toLong" : "toNumber"; p.merge(i.prototype, { int64: function () { return s.call(this)[e](!1); }, uint64: function () { return s.call(this)[e](!0); }, sint64: function () { return s.call(this).zzDecode()[e](!1); }, fixed64: function () { return u.call(this)[e](!0); }, sfixed64: function () { return u.call(this)[e](!1); } }); }; }, { 35: 35 }], 25: [function (t, e, r) { function n(t) { i.call(this, t); } e.exports = n; var i = t(24), o = ((n.prototype = Object.create(i.prototype)).constructor = n, t(35)); n.r = function () { o.Buffer && (n.prototype.h = o.Buffer.prototype.slice); }, n.prototype.string = function () { var t = this.uint32(); return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + t, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + t, this.len)); }, n.r(); }, { 24: 24, 35: 35 }], 26: [function (t, e, r) { function n(t) { f.call(this, "", t), this.deferred = [], this.files = []; } function i() { } function o(t, e) { var r, n = e.parent.lookup(e.extend); if (n)
                return ((r = new l(e.fullName, e.id, e.type, e.rule, g, e.options)).declaringField = e).extensionField = r, n.add(r), 1; } e.exports = n; var s, a, u, f = t(21), l = (((n.prototype = Object.create(f.prototype)).constructor = n).className = "Root", t(15)), p = t(14), h = t(23), c = t(33); n.fromJSON = function (t, e) { return e = e || new n, t.options && e.setOptions(t.options), e.addJSON(t.nested); }, n.prototype.resolvePath = c.path.resolve, n.prototype.fetch = c.fetch, n.prototype.load = function t(e, r, n) { function o(t, e) { if (n) {
                var r = n;
                if (n = null, h)
                    throw t;
                r(t, e);
            } } function s(t) { var e = t.lastIndexOf("google/protobuf/"); return -1 < e && (t = t.substring(e), t in u) ? t : null; } function f(t, e) { try {
                if (c.isString(e) && "{" == (e[0] || "") && (e = JSON.parse(e)), c.isString(e)) {
                    a.filename = t;
                    var n, i = a(e, p, r), u = 0;
                    if (i.imports)
                        for (; u < i.imports.length; ++u)
                            (n = s(i.imports[u]) || p.resolvePath(t, i.imports[u])) && l(n);
                    if (i.weakImports)
                        for (u = 0; u < i.weakImports.length; ++u)
                            (n = s(i.weakImports[u]) || p.resolvePath(t, i.weakImports[u])) && l(n, !0);
                }
                else
                    p.setOptions(e.options).addJSON(e.nested);
            }
            catch (t) {
                o(t);
            } h || d || o(null, p); } function l(t, e) { if (!~p.files.indexOf(t))
                if (p.files.push(t), t in u)
                    h ? f(t, u[t]) : (++d, setTimeout(function () { --d, f(t, u[t]); }));
                else if (h) {
                    var r;
                    try {
                        r = c.fs.readFileSync(t).toString("utf8");
                    }
                    catch (r) {
                        return void (e || o(r));
                    }
                    f(t, r);
                }
                else
                    ++d, p.fetch(t, function (r, i) { --d, n && (r ? e ? d || o(null, p) : o(r) : f(t, i)); }); } "function" == typeof r && (n = r, r = g); var p = this; if (!n)
                return c.asPromise(t, p, e, r); var h = n === i, d = 0; c.isString(e) && (e = [e]); for (var y, m = 0; m < e.length; ++m)
                (y = p.resolvePath("", e[m])) && l(y); return h ? p : (d || o(null, p), g); }, n.prototype.loadSync = function (t, e) { if (c.isNode)
                return this.load(t, e, i); throw Error("not supported"); }, n.prototype.resolveAll = function () { if (this.deferred.length)
                throw Error("unresolvable extensions: " + this.deferred.map(function (t) { return "'extend " + t.extend + "' in " + t.parent.fullName; }).join(", ")); return f.prototype.resolveAll.call(this); }; var d = /^[A-Z]/; n.prototype.u = function (t) { if (t instanceof l)
                t.extend === g || t.extensionField || o(0, t) || this.deferred.push(t);
            else if (t instanceof p)
                d.test(t.name) && (t.parent[t.name] = t.values);
            else if (!(t instanceof h)) {
                if (t instanceof s)
                    for (var e = 0; e < this.deferred.length;)
                        o(0, this.deferred[e]) ? this.deferred.splice(e, 1) : ++e;
                for (var r = 0; r < t.nestedArray.length; ++r)
                    this.u(t.e[r]);
                d.test(t.name) && (t.parent[t.name] = t);
            } }, n.prototype.o = function (t) { var e; if (t instanceof l)
                t.extend !== g && (t.extensionField ? (t.extensionField.parent.remove(t.extensionField), t.extensionField = null) : -1 < (e = this.deferred.indexOf(t)) && this.deferred.splice(e, 1));
            else if (t instanceof p)
                d.test(t.name) && delete t.parent[t.name];
            else if (t instanceof f) {
                for (var r = 0; r < t.nestedArray.length; ++r)
                    this.o(t.e[r]);
                d.test(t.name) && delete t.parent[t.name];
            } }, n.r = function (t, e, r) { s = t, a = e, u = r; }; }, { 14: 14, 15: 15, 21: 21, 23: 23, 33: 33 }], 27: [function (t, e, r) { e.exports = {}; }, {}], 28: [function (t, e, r) { r.Service = t(29); }, { 29: 29 }], 29: [function (t, e, r) { function n(t, e, r) { if ("function" != typeof t)
                throw TypeError("rpcImpl must be a function"); i.EventEmitter.call(this), this.rpcImpl = t, this.requestDelimited = !!e, this.responseDelimited = !!r; } e.exports = n; var i = t(35); ((n.prototype = Object.create(i.EventEmitter.prototype)).constructor = n).prototype.rpcCall = function t(e, r, n, o, s) { if (!o)
                throw TypeError("request must be specified"); var a = this; if (!s)
                return i.asPromise(t, a, e, r, n, o); if (!a.rpcImpl)
                return setTimeout(function () { s(Error("already ended")); }, 0), g; try {
                return a.rpcImpl(e, r[a.requestDelimited ? "encodeDelimited" : "encode"](o).finish(), function (t, r) { if (t)
                    return a.emit("error", t, e), s(t); if (null === r)
                    return a.end(!0), g; if (!(r instanceof n))
                    try {
                        r = n[a.responseDelimited ? "decodeDelimited" : "decode"](r);
                    }
                    catch (t) {
                        return a.emit("error", t, e), s(t);
                    } return a.emit("data", r, e), s(null, r); });
            }
            catch (t) {
                return a.emit("error", t, e), setTimeout(function () { s(t); }, 0), g;
            } }, n.prototype.end = function (t) { return this.rpcImpl && (t || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off()), this; }; }, { 35: 35 }], 30: [function (t, e, r) { function n(t, e) { o.call(this, t, e), this.methods = {}, this.f = null; } function i(t) { return t.f = null, t; } e.exports = n; var o = t(21), s = (((n.prototype = Object.create(o.prototype)).constructor = n).className = "Service", t(20)), a = t(33), u = t(28); n.fromJSON = function (t, e) { var r = new n(t, e.options); if (e.methods)
                for (var i = Object.keys(e.methods), o = 0; o < i.length; ++o)
                    r.add(s.fromJSON(i[o], e.methods[i[o]])); return e.nested && r.addJSON(e.nested), r.comment = e.comment, r; }, n.prototype.toJSON = function (t) { var e = o.prototype.toJSON.call(this, t), r = !!t && !!t.keepComments; return a.toObject(["options", e && e.options || g, "methods", o.arrayToJSON(this.methodsArray, t) || {}, "nested", e && e.nested || g, "comment", r ? this.comment : g]); }, Object.defineProperty(n.prototype, "methodsArray", { get: function () { return this.f || (this.f = a.toArray(this.methods)); } }), n.prototype.get = function (t) { return this.methods[t] || o.prototype.get.call(this, t); }, n.prototype.resolveAll = function () { for (var t = this.methodsArray, e = 0; e < t.length; ++e)
                t[e].resolve(); return o.prototype.resolve.call(this); }, n.prototype.add = function (t) { if (this.get(t.name))
                throw Error("duplicate name '" + t.name + "' in " + this); return t instanceof s ? i((this.methods[t.name] = t).parent = this) : o.prototype.add.call(this, t); }, n.prototype.remove = function (t) { if (t instanceof s) {
                if (this.methods[t.name] !== t)
                    throw Error(t + " is not a member of " + this);
                return delete this.methods[t.name], t.parent = null, i(this);
            } return o.prototype.remove.call(this, t); }, n.prototype.create = function (t, e, r) { for (var n, i = new u.Service(t, e, r), o = 0; o < this.methodsArray.length; ++o) {
                var s = a.lcFirst((n = this.f[o]).resolve().name).replace(/[^$\w_]/g, "");
                i[s] = a.codegen(["r", "c"], a.isReserved(s) ? s + "_" : s)("return this.rpcCall(m,q,s,r,c)")({ m: n, q: n.resolvedRequestType.ctor, s: n.resolvedResponseType.ctor });
            } return i; }; }, { 20: 20, 21: 21, 28: 28, 33: 33 }], 31: [function (t, e, r) { function n(t, e) { o.call(this, t, e), this.fields = {}, this.oneofs = g, this.extensions = g, this.reserved = g, this.group = g, this.c = null, this.i = null, this.a = null, this.l = null; } function i(t) { return t.c = t.i = t.a = null, delete t.encode, delete t.decode, delete t.verify, t; } e.exports = n; var o = t(21), s = (((n.prototype = Object.create(o.prototype)).constructor = n).className = "Type", t(14)), a = t(23), u = t(15), f = t(18), l = t(30), p = t(19), h = t(24), c = t(38), d = t(33), y = t(13), m = t(12), v = t(36), b = t(11), O = t(37); Object.defineProperties(n.prototype, { fieldsById: { get: function () { if (!this.c) {
                        this.c = {};
                        for (var t = Object.keys(this.fields), e = 0; e < t.length; ++e) {
                            var r = this.fields[t[e]], n = r.id;
                            if (this.c[n])
                                throw Error("duplicate id " + n + " in " + this);
                            this.c[n] = r;
                        }
                    } return this.c; } }, fieldsArray: { get: function () { return this.i || (this.i = d.toArray(this.fields)); } }, oneofsArray: { get: function () { return this.a || (this.a = d.toArray(this.oneofs)); } }, ctor: { get: function () { return this.l || (this.ctor = n.generateConstructor(this)()); }, set: function (t) { for (var e = t.prototype, r = (e instanceof p || ((t.prototype = new p).constructor = t, d.merge(t.prototype, e)), t.$type = t.prototype.$type = this, d.merge(t, p, !0), this.l = t, 0); r < this.fieldsArray.length; ++r)
                        this.i[r].resolve(); var n = {}; for (r = 0; r < this.oneofsArray.length; ++r)
                        n[this.a[r].resolve().name] = { get: d.oneOfGetter(this.a[r].oneof), set: d.oneOfSetter(this.a[r].oneof) }; r && Object.defineProperties(t.prototype, n); } } }), n.generateConstructor = function (t) { for (var e, r = d.codegen(["p"], t.name), n = 0; n < t.fieldsArray.length; ++n)
                (e = t.i[n]).map ? r("this%s={}", d.safeProp(e.name)) : e.repeated && r("this%s=[]", d.safeProp(e.name)); return r("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]"); }, n.fromJSON = function (t, e) { for (var r = new n(t, e.options), i = (r.extensions = e.extensions, r.reserved = e.reserved, Object.keys(e.fields)), p = 0; p < i.length; ++p)
                r.add((void 0 !== e.fields[i[p]].keyType ? f : u).fromJSON(i[p], e.fields[i[p]])); if (e.oneofs)
                for (i = Object.keys(e.oneofs), p = 0; p < i.length; ++p)
                    r.add(a.fromJSON(i[p], e.oneofs[i[p]])); if (e.nested)
                for (i = Object.keys(e.nested), p = 0; p < i.length; ++p) {
                    var h = e.nested[i[p]];
                    r.add((h.id !== g ? u : h.fields !== g ? n : h.values !== g ? s : h.methods !== g ? l : o).fromJSON(i[p], h));
                } return e.extensions && e.extensions.length && (r.extensions = e.extensions), e.reserved && e.reserved.length && (r.reserved = e.reserved), e.group && (r.group = !0), e.comment && (r.comment = e.comment), r; }, n.prototype.toJSON = function (t) { var e = o.prototype.toJSON.call(this, t), r = !!t && !!t.keepComments; return d.toObject(["options", e && e.options || g, "oneofs", o.arrayToJSON(this.oneofsArray, t), "fields", o.arrayToJSON(this.fieldsArray.filter(function (t) { return !t.declaringField; }), t) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : g, "reserved", this.reserved && this.reserved.length ? this.reserved : g, "group", this.group || g, "nested", e && e.nested || g, "comment", r ? this.comment : g]); }, n.prototype.resolveAll = function () { for (var t = this.fieldsArray, e = 0; e < t.length;)
                t[e++].resolve(); var r = this.oneofsArray; for (e = 0; e < r.length;)
                r[e++].resolve(); return o.prototype.resolveAll.call(this); }, n.prototype.get = function (t) { return this.fields[t] || this.oneofs && this.oneofs[t] || this.nested && this.nested[t] || null; }, n.prototype.add = function (t) { if (this.get(t.name))
                throw Error("duplicate name '" + t.name + "' in " + this); if (t instanceof u && t.extend === g) {
                if ((this.c || this.fieldsById)[t.id])
                    throw Error("duplicate id " + t.id + " in " + this);
                if (this.isReservedId(t.id))
                    throw Error("id " + t.id + " is reserved in " + this);
                if (this.isReservedName(t.name))
                    throw Error("name '" + t.name + "' is reserved in " + this);
                return t.parent && t.parent.remove(t), (this.fields[t.name] = t).message = this, t.onAdd(this), i(this);
            } return t instanceof a ? (this.oneofs || (this.oneofs = {}), (this.oneofs[t.name] = t).onAdd(this), i(this)) : o.prototype.add.call(this, t); }, n.prototype.remove = function (t) { if (t instanceof u && t.extend === g) {
                if (this.fields && this.fields[t.name] === t)
                    return delete this.fields[t.name], t.parent = null, t.onRemove(this), i(this);
                throw Error(t + " is not a member of " + this);
            } if (t instanceof a) {
                if (this.oneofs && this.oneofs[t.name] === t)
                    return delete this.oneofs[t.name], t.parent = null, t.onRemove(this), i(this);
                throw Error(t + " is not a member of " + this);
            } return o.prototype.remove.call(this, t); }, n.prototype.isReservedId = function (t) { return o.isReservedId(this.reserved, t); }, n.prototype.isReservedName = function (t) { return o.isReservedName(this.reserved, t); }, n.prototype.create = function (t) { return new this.ctor(t); }, n.prototype.setup = function () { for (var t = this.fullName, e = [], r = 0; r < this.fieldsArray.length; ++r)
                e.push(this.i[r].resolve().resolvedType); this.encode = y(this)({ Writer: c, types: e, util: d }), this.decode = m(this)({ Reader: h, types: e, util: d }), this.verify = v(this)({ types: e, util: d }), this.fromObject = b.fromObject(this)({ types: e, util: d }), this.toObject = b.toObject(this)({ types: e, util: d }); var n; t = O[t]; return t && ((n = Object.create(this)).fromObject = this.fromObject, this.fromObject = t.fromObject.bind(n), n.toObject = this.toObject, this.toObject = t.toObject.bind(n)), this; }, n.prototype.encode = function (t, e) { return this.setup().encode(t, e); }, n.prototype.encodeDelimited = function (t, e) { return this.encode(t, e && e.len ? e.fork() : e).ldelim(); }, n.prototype.decode = function (t, e) { return this.setup().decode(t, e); }, n.prototype.decodeDelimited = function (t) { return t instanceof h || (t = h.create(t)), this.decode(t, t.uint32()); }, n.prototype.verify = function (t) { return this.setup().verify(t); }, n.prototype.fromObject = function (t) { return this.setup().fromObject(t); }, n.prototype.toObject = function (t, e) { return this.setup().toObject(t, e); }, n.d = function (t) { return function (e) { d.decorateType(e, t); }; }; }, { 11: 11, 12: 12, 13: 13, 14: 14, 15: 15, 18: 18, 19: 19, 21: 21, 23: 23, 24: 24, 30: 30, 33: 33, 36: 36, 37: 37, 38: 38 }], 32: [function (t, e, r) { function n(t, e) { var r = 0, n = {}; for (e |= 0; r < t.length;)
                n[i[r + e]] = t[r++]; return n; } t = t(33); var i = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"]; r.basic = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]), r.defaults = n([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", t.emptyArray, null]), r.long = n([0, 0, 0, 1, 1], 7), r.mapKey = n([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2), r.packed = n([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]); }, { 33: 33 }], 33: [function (t, e, r) { var n, i, o = e.exports = t(35), s = t(27), a = (o.codegen = t(3), o.fetch = t(5), o.path = t(8), o.fs = o.inquire("fs"), o.toArray = function (t) { if (t) {
                for (var e = Object.keys(t), r = Array(e.length), n = 0; n < e.length;)
                    r[n] = t[e[n++]];
                return r;
            } return []; }, o.toObject = function (t) { for (var e = {}, r = 0; r < t.length;) {
                var n = t[r++], i = t[r++];
                i !== g && (e[n] = i);
            } return e; }, /\\/g), u = /"/g, f = (o.isReserved = function (t) { return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(t); }, o.safeProp = function (t) { return !/^[$\w_]+$/.test(t) || o.isReserved(t) ? '["' + t.replace(a, "\\\\").replace(u, '\\"') + '"]' : "." + t; }, o.ucFirst = function (t) { return (t[0] || "").toUpperCase() + t.substring(1); }, /_([a-z])/g), l = (o.camelCase = function (t) { return t.substring(0, 1) + t.substring(1).replace(f, function (t, e) { return e.toUpperCase(); }); }, o.compareFieldsById = function (t, e) { return t.id - e.id; }, o.decorateType = function (e, r) { return e.$type ? (r && e.$type.name !== r && (o.decorateRoot.remove(e.$type), e.$type.name = r, o.decorateRoot.add(e.$type)), e.$type) : (r = new (n = n || t(31))(r || e.name), o.decorateRoot.add(r), r.ctor = e, Object.defineProperty(e, "$type", { value: r, enumerable: !1 }), Object.defineProperty(e.prototype, "$type", { value: r, enumerable: !1 }), r); }, 0); o.decorateEnum = function (e) { var r; return e.$type || (r = new (i = i || t(14))("Enum" + l++, e), o.decorateRoot.add(r), Object.defineProperty(e, "$type", { value: r, enumerable: !1 }), r); }, o.setProperty = function (t, e, r) { if ("object" != typeof t)
                throw TypeError("dst must be an object"); if (e)
                return function t(e, r, n) { var i = r.shift(); return "__proto__" !== i && (0 < r.length ? e[i] = t(e[i] || {}, r, n) : ((r = e[i]) && (n = [].concat(r).concat(n)), e[i] = n)), e; }(t, e = e.split("."), r); throw TypeError("path must be specified"); }, Object.defineProperty(o, "decorateRoot", { get: function () { return s.decorated || (s.decorated = new (t(26))); } }); }, { 14: 14, 26: 26, 27: 27, 3: 3, 31: 31, 35: 35, 5: 5, 8: 8 }], 34: [function (t, e, r) { function n(t, e) { this.lo = t >>> 0, this.hi = e >>> 0; } e.exports = n; var i = t(35), o = n.zero = new n(0, 0), s = (o.toNumber = function () { return 0; }, o.zzEncode = o.zzDecode = function () { return this; }, o.length = function () { return 1; }, n.zeroHash = "\0\0\0\0\0\0\0\0", n.fromNumber = function (t) { var e, r; return 0 === t ? o : (r = (t = (e = t < 0) ? -t : t) >>> 0, t = (t - r) / 4294967296 >>> 0, e && (t = ~t >>> 0, r = ~r >>> 0, 4294967295 < ++r && (r = 0, 4294967295 < ++t && (t = 0))), new n(r, t)); }, n.from = function (t) { if ("number" == typeof t)
                return n.fromNumber(t); if (i.isString(t)) {
                if (!i.Long)
                    return n.fromNumber(parseInt(t, 10));
                t = i.Long.fromString(t);
            } return t.low || t.high ? new n(t.low >>> 0, t.high >>> 0) : o; }, n.prototype.toNumber = function (t) { var e; return !t && this.hi >>> 31 ? (t = 1 + ~this.lo >>> 0, e = ~this.hi >>> 0, -(t + 4294967296 * (e = t ? e : e + 1 >>> 0))) : this.lo + 4294967296 * this.hi; }, n.prototype.toLong = function (t) { return i.Long ? new i.Long(0 | this.lo, 0 | this.hi, !!t) : { low: 0 | this.lo, high: 0 | this.hi, unsigned: !!t }; }, String.prototype.charCodeAt); n.fromHash = function (t) { return "\0\0\0\0\0\0\0\0" === t ? o : new n((s.call(t, 0) | s.call(t, 1) << 8 | s.call(t, 2) << 16 | s.call(t, 3) << 24) >>> 0, (s.call(t, 4) | s.call(t, 5) << 8 | s.call(t, 6) << 16 | s.call(t, 7) << 24) >>> 0); }, n.prototype.toHash = function () { return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24); }, n.prototype.zzEncode = function () { var t = this.hi >> 31; return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ t) >>> 0, this.lo = (this.lo << 1 ^ t) >>> 0, this; }, n.prototype.zzDecode = function () { var t = -(1 & this.lo); return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ t) >>> 0, this.hi = (this.hi >>> 1 ^ t) >>> 0, this; }, n.prototype.length = function () { var t = this.lo, e = (this.lo >>> 28 | this.hi << 4) >>> 0, r = this.hi >>> 24; return 0 == r ? 0 == e ? t < 16384 ? t < 128 ? 1 : 2 : t < 2097152 ? 3 : 4 : e < 16384 ? e < 128 ? 5 : 6 : e < 2097152 ? 7 : 8 : r < 128 ? 9 : 10; }; }, { 35: 35 }], 35: [function (t, e, r) { function n(t, e, r) { for (var n = Object.keys(e), i = 0; i < n.length; ++i)
                t[n[i]] !== g && r || (t[n[i]] = e[n[i]]); return t; } function i(t) { function e(t, r) { if (!(this instanceof e))
                return new e(t, r); Object.defineProperty(this, "message", { get: function () { return t; } }), Error.captureStackTrace ? Error.captureStackTrace(this, e) : Object.defineProperty(this, "stack", { value: Error().stack || "" }), r && n(this, r); } return e.prototype = Object.create(Error.prototype, { constructor: { value: e, writable: !0, enumerable: !1, configurable: !0 }, name: { get: () => t, set: g, enumerable: !1, configurable: !0 }, toString: { value() { return this.name + ": " + this.message; }, writable: !0, enumerable: !1, configurable: !0 } }), e; } var o = r; o.asPromise = t(1), o.base64 = t(2), o.EventEmitter = t(4), o.float = t(6), o.inquire = t(7), o.utf8 = t(10), o.pool = t(9), o.LongBits = t(34), o.isNode = !!("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node), o.global = o.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this, o.emptyArray = Object.freeze ? Object.freeze([]) : [], o.emptyObject = Object.freeze ? Object.freeze({}) : {}, o.isInteger = Number.isInteger || function (t) { return "number" == typeof t && isFinite(t) && Math.floor(t) === t; }, o.isString = function (t) { return "string" == typeof t || t instanceof String; }, o.isObject = function (t) { return t && "object" == typeof t; }, o.isset = o.isSet = function (t, e) { var r = t[e]; return null != r && t.hasOwnProperty(e) && ("object" != typeof r || 0 < (Array.isArray(r) ? r : Object.keys(r)).length); }, o.Buffer = function () { try {
                var t = o.inquire("buffer").Buffer;
                return t.prototype.utf8Write ? t : null;
            }
            catch (t) {
                return null;
            } }(), o.v = null, o.b = null, o.newBuffer = function (t) { return "number" == typeof t ? o.Buffer ? o.b(t) : new o.Array(t) : o.Buffer ? o.v(t) : "undefined" == typeof Uint8Array ? t : new Uint8Array(t); }, o.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, o.Long = o.global.dcodeIO && o.global.dcodeIO.Long || o.global.Long || o.inquire("long"), o.key2Re = /^true|false|0|1$/, o.key32Re = /^-?(?:0|[1-9][0-9]*)$/, o.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, o.longToHash = function (t) { return t ? o.LongBits.from(t).toHash() : o.LongBits.zeroHash; }, o.longFromHash = function (t, e) { return t = o.LongBits.fromHash(t), o.Long ? o.Long.fromBits(t.lo, t.hi, e) : t.toNumber(!!e); }, o.merge = n, o.lcFirst = function (t) { return (t[0] || "").toLowerCase() + t.substring(1); }, o.newError = i, o.ProtocolError = i("ProtocolError"), o.oneOfGetter = function (t) { for (var e = {}, r = 0; r < t.length; ++r)
                e[t[r]] = 1; return function () { for (var t = Object.keys(this), r = t.length - 1; -1 < r; --r)
                if (1 === e[t[r]] && this[t[r]] !== g && null !== this[t[r]])
                    return t[r]; }; }, o.oneOfSetter = function (t) { return function (e) { for (var r = 0; r < t.length; ++r)
                t[r] !== e && delete this[t[r]]; }; }, o.toJSONOptions = { longs: String, enums: String, bytes: String, json: !0 }, o.r = function () { var t = o.Buffer; t ? (o.v = t.from !== Uint8Array.from && t.from || function (e, r) { return new t(e, r); }, o.b = t.allocUnsafe || function (e) { return new t(e); }) : o.v = o.b = null; }; }, { 1: 1, 10: 10, 2: 2, 34: 34, 4: 4, 6: 6, 7: 7, 9: 9 }], 36: [function (t, e, r) { function n(t, e) { return t.name + ": " + e + (t.repeated && "array" !== e ? "[]" : t.map && "object" !== e ? "{k:" + t.keyType + "}" : "") + " expected"; } function i(t, e, r, i) { if (e.resolvedType)
                if (e.resolvedType instanceof o) {
                    t("switch(%s){", i)("default:")("return%j", n(e, "enum value"));
                    for (var s = Object.keys(e.resolvedType.values), a = 0; a < s.length; ++a)
                        t("case %i:", e.resolvedType.values[s[a]]);
                    t("break")("}");
                }
                else
                    t("{")("var e=types[%i].verify(%s);", r, i)("if(e)")("return%j+e", e.name + ".")("}");
            else
                switch (e.type) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        t("if(!util.isInteger(%s))", i)("return%j", n(e, "integer"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", i, i, i, i)("return%j", n(e, "integer|Long"));
                        break;
                    case "float":
                    case "double":
                        t('if(typeof %s!=="number")', i)("return%j", n(e, "number"));
                        break;
                    case "bool":
                        t('if(typeof %s!=="boolean")', i)("return%j", n(e, "boolean"));
                        break;
                    case "string":
                        t("if(!util.isString(%s))", i)("return%j", n(e, "string"));
                        break;
                    case "bytes": t('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', i, i, i)("return%j", n(e, "buffer"));
                } return t; } e.exports = function (t) { var e = s.codegen(["m"], t.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected"), r = t.oneofsArray, o = {}; r.length && e("var p={}"); for (var a = 0; a < t.fieldsArray.length; ++a) {
                var u, f = t.i[a].resolve(), l = "m" + s.safeProp(f.name);
                f.optional && e("if(%s!=null&&m.hasOwnProperty(%j)){", l, f.name), f.map ? (e("if(!util.isObject(%s))", l)("return%j", n(f, "object"))("var k=Object.keys(%s)", l)("for(var i=0;i<k.length;++i){"), function (t, e, r) { switch (e.keyType) {
                    case "int32":
                    case "uint32":
                    case "sint32":
                    case "fixed32":
                    case "sfixed32":
                        t("if(!util.key32Re.test(%s))", r)("return%j", n(e, "integer key"));
                        break;
                    case "int64":
                    case "uint64":
                    case "sint64":
                    case "fixed64":
                    case "sfixed64":
                        t("if(!util.key64Re.test(%s))", r)("return%j", n(e, "integer|Long key"));
                        break;
                    case "bool": t("if(!util.key2Re.test(%s))", r)("return%j", n(e, "boolean key"));
                } }(e, f, "k[i]"), i(e, f, a, l + "[k[i]]")("}")) : f.repeated ? (e("if(!Array.isArray(%s))", l)("return%j", n(f, "array"))("for(var i=0;i<%s.length;++i){", l), i(e, f, a, l + "[i]")("}")) : (f.partOf && (u = s.safeProp(f.partOf.name), 1 === o[f.partOf.name] && e("if(p%s===1)", u)("return%j", f.partOf.name + ": multiple values"), o[f.partOf.name] = 1, e("p%s=1", u)), i(e, f, a, l)), f.optional && e("}");
            } return e("return null"); }; var o = t(14), s = t(33); }, { 14: 14, 33: 33 }], 37: [function (t, e, r) { var n = t(19); r[".google.protobuf.Any"] = { fromObject: function (t) { if (t && t["@type"]) {
                    var e, r = t["@type"].substring(1 + t["@type"].lastIndexOf("/"));
                    r = this.lookup(r);
                    if (r)
                        return ~(e = "." == (t["@type"][0] || "") ? t["@type"].slice(1) : t["@type"]).indexOf("/") || (e = "/" + e), this.create({ type_url: e, value: r.encode(r.fromObject(t)).finish() });
                } return this.fromObject(t); }, toObject: function (t, e) { var r, i, o = "", s = ""; return e && e.json && t.type_url && t.value && (s = t.type_url.substring(1 + t.type_url.lastIndexOf("/")), o = t.type_url.substring(0, 1 + t.type_url.lastIndexOf("/")), (r = this.lookup(s)) && (t = r.decode(t.value))), !(t instanceof this.ctor) && t instanceof n ? (r = t.$type.toObject(t, e), i = "." === t.$type.fullName[0] ? t.$type.fullName.slice(1) : t.$type.fullName, r["@type"] = s = (o = "" === o ? "type.googleapis.com/" : o) + i, r) : this.toObject(t, e); } }; }, { 19: 19 }], 38: [function (t, e, r) { function n(t, e, r) { this.fn = t, this.len = e, this.next = g, this.val = r; } function i() { } function o(t) { this.head = t.head, this.tail = t.tail, this.len = t.len, this.next = t.states; } function s() { this.len = 0, this.head = new n(i, 0, 0), this.tail = this.head, this.states = null; } function a() { return c.Buffer ? function () { return (s.create = function () { return new h; })(); } : function () { return new s; }; } function u(t, e, r) { e[r] = 255 & t; } function f(t, e) { this.len = t, this.next = g, this.val = e; } function l(t, e, r) { for (; t.hi;)
                e[r++] = 127 & t.lo | 128, t.lo = (t.lo >>> 7 | t.hi << 25) >>> 0, t.hi >>>= 7; for (; 127 < t.lo;)
                e[r++] = 127 & t.lo | 128, t.lo = t.lo >>> 7; e[r++] = t.lo; } function p(t, e, r) { e[r] = 255 & t, e[r + 1] = t >>> 8 & 255, e[r + 2] = t >>> 16 & 255, e[r + 3] = t >>> 24; } e.exports = s; var h, c = t(35), d = c.LongBits, y = c.base64, m = c.utf8; s.create = a(), s.alloc = function (t) { return new c.Array(t); }, c.Array !== Array && (s.alloc = c.pool(s.alloc, c.Array.prototype.subarray)), s.prototype.p = function (t, e, r) { return this.tail = this.tail.next = new n(t, e, r), this.len += e, this; }, (f.prototype = Object.create(n.prototype)).fn = function (t, e, r) { for (; 127 < t;)
                e[r++] = 127 & t | 128, t >>>= 7; e[r] = t; }, s.prototype.uint32 = function (t) { return this.len += (this.tail = this.tail.next = new f((t >>>= 0) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : t < 268435456 ? 4 : 5, t)).len, this; }, s.prototype.int32 = function (t) { return t < 0 ? this.p(l, 10, d.fromNumber(t)) : this.uint32(t); }, s.prototype.sint32 = function (t) { return this.uint32((t << 1 ^ t >> 31) >>> 0); }, s.prototype.int64 = s.prototype.uint64 = function (t) { return t = d.from(t), this.p(l, t.length(), t); }, s.prototype.sint64 = function (t) { return t = d.from(t).zzEncode(), this.p(l, t.length(), t); }, s.prototype.bool = function (t) { return this.p(u, 1, t ? 1 : 0); }, s.prototype.sfixed32 = s.prototype.fixed32 = function (t) { return this.p(p, 4, t >>> 0); }, s.prototype.sfixed64 = s.prototype.fixed64 = function (t) { return t = d.from(t), this.p(p, 4, t.lo).p(p, 4, t.hi); }, s.prototype.float = function (t) { return this.p(c.float.writeFloatLE, 4, t); }, s.prototype.double = function (t) { return this.p(c.float.writeDoubleLE, 8, t); }; var v = c.Array.prototype.set ? function (t, e, r) { e.set(t, r); } : function (t, e, r) { for (var n = 0; n < t.length; ++n)
                e[r + n] = t[n]; }; s.prototype.bytes = function (t) { var e, r = t.length >>> 0; return r ? (c.isString(t) && (e = s.alloc(r = y.length(t)), y.decode(t, e, 0), t = e), this.uint32(r).p(v, r, t)) : this.p(u, 1, 0); }, s.prototype.string = function (t) { var e = m.length(t); return e ? this.uint32(e).p(m.write, e, t) : this.p(u, 1, 0); }, s.prototype.fork = function () { return this.states = new o(this), this.head = this.tail = new n(i, 0, 0), this.len = 0, this; }, s.prototype.reset = function () { return this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new n(i, 0, 0), this.len = 0), this; }, s.prototype.ldelim = function () { var t = this.head, e = this.tail, r = this.len; return this.reset().uint32(r), r && (this.tail.next = t.next, this.tail = e, this.len += r), this; }, s.prototype.finish = function () { for (var t = this.head.next, e = this.constructor.alloc(this.len), r = 0; t;)
                t.fn(t.val, e, r), r += t.len, t = t.next; return e; }, s.r = function (t) { h = t, s.create = a(), h.r(); }; }, { 35: 35 }], 39: [function (t, e, r) { function n() { o.call(this); } function i(t, e, r) { t.length < 40 ? s.utf8.write(t, e, r) : e.utf8Write ? e.utf8Write(t, r) : e.write(t, r); } e.exports = n; var o = t(38), s = ((n.prototype = Object.create(o.prototype)).constructor = n, t(35)); n.r = function () { n.alloc = s.b, n.writeBytesBuffer = s.Buffer && s.Buffer.prototype instanceof Uint8Array && "set" === s.Buffer.prototype.set.name ? function (t, e, r) { e.set(t, r); } : function (t, e, r) { if (t.copy)
                t.copy(e, r, 0, t.length);
            else
                for (var n = 0; n < t.length;)
                    e[r++] = t[n++]; }; }, n.prototype.bytes = function (t) { var e = (t = s.isString(t) ? s.v(t, "base64") : t).length >>> 0; return this.uint32(e), e && this.p(n.writeBytesBuffer, e, t), this; }, n.prototype.string = function (t) { var e = s.Buffer.byteLength(t); return this.uint32(e), e && this.p(i, e, t), this; }, n.r(); }, { 35: 35, 38: 38 }] }, e = {}, t = [16], i = function t(n) { var i = e[n]; return i || r[n][0].call(i = e[n] = { exports: {} }, t, i, i.exports), i.exports; }(t[0]), protobuf = i.util.global.protobuf = i, "function" == typeof define && define.amd && define(["long"], function (t) { return t && t.isLong && (i.util.Long = t, i.configure()), i; }), "object" == typeof module && module && module.exports && (module.exports = i);
}(), module.exports = protobuf;
