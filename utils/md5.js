function n(n, r) {
  var t = (65535 & n) + (65535 & r);
  return (n >> 16) + (r >> 16) + (t >> 16) << 16 | 65535 & t;
}

function r(r, t, e, o, u, c) {
  return n((f = n(n(t, r), n(o, c))) << (a = u) | f >>> 32 - a, e);
  var f, a;
}

function t(n, t, e, o, u, c, f) {
  return r(t & e | ~t & o, n, t, u, c, f);
}

function e(n, t, e, o, u, c, f) {
  return r(t & o | e & ~o, n, t, u, c, f);
}

function o(n, t, e, o, u, c, f) {
  return r(t ^ e ^ o, n, t, u, c, f);
}

function u(n, t, e, o, u, c, f) {
  return r(e ^ (t | ~o), n, t, u, c, f);
}

function c(r, c) {
  var f, a, i, h, v;
  r[c >> 5] |= 128 << c % 32, r[14 + (c + 64 >>> 9 << 4)] = c;
  var g = 1732584193, l = -271733879, d = -1732584194, C = 271733878;
  for (f = 0; f < r.length; f += 16) l = u(l = u(l = u(l = u(l = o(l = o(l = o(l = o(l = e(l = e(l = e(l = e(l = t(l = t(l = t(l = t(i = l, d = t(h = d, C = t(v = C, g = t(a = g, l, d, C, r[f], 7, -680876936), l, d, r[f + 1], 12, -389564586), g, l, r[f + 2], 17, 606105819), C, g, r[f + 3], 22, -1044525330), d = t(d, C = t(C, g = t(g, l, d, C, r[f + 4], 7, -176418897), l, d, r[f + 5], 12, 1200080426), g, l, r[f + 6], 17, -1473231341), C, g, r[f + 7], 22, -45705983), d = t(d, C = t(C, g = t(g, l, d, C, r[f + 8], 7, 1770035416), l, d, r[f + 9], 12, -1958414417), g, l, r[f + 10], 17, -42063), C, g, r[f + 11], 22, -1990404162), d = t(d, C = t(C, g = t(g, l, d, C, r[f + 12], 7, 1804603682), l, d, r[f + 13], 12, -40341101), g, l, r[f + 14], 17, -1502002290), C, g, r[f + 15], 22, 1236535329), d = e(d, C = e(C, g = e(g, l, d, C, r[f + 1], 5, -165796510), l, d, r[f + 6], 9, -1069501632), g, l, r[f + 11], 14, 643717713), C, g, r[f], 20, -373897302), d = e(d, C = e(C, g = e(g, l, d, C, r[f + 5], 5, -701558691), l, d, r[f + 10], 9, 38016083), g, l, r[f + 15], 14, -660478335), C, g, r[f + 4], 20, -405537848), d = e(d, C = e(C, g = e(g, l, d, C, r[f + 9], 5, 568446438), l, d, r[f + 14], 9, -1019803690), g, l, r[f + 3], 14, -187363961), C, g, r[f + 8], 20, 1163531501), d = e(d, C = e(C, g = e(g, l, d, C, r[f + 13], 5, -1444681467), l, d, r[f + 2], 9, -51403784), g, l, r[f + 7], 14, 1735328473), C, g, r[f + 12], 20, -1926607734), d = o(d, C = o(C, g = o(g, l, d, C, r[f + 5], 4, -378558), l, d, r[f + 8], 11, -2022574463), g, l, r[f + 11], 16, 1839030562), C, g, r[f + 14], 23, -35309556), d = o(d, C = o(C, g = o(g, l, d, C, r[f + 1], 4, -1530992060), l, d, r[f + 4], 11, 1272893353), g, l, r[f + 7], 16, -155497632), C, g, r[f + 10], 23, -1094730640), d = o(d, C = o(C, g = o(g, l, d, C, r[f + 13], 4, 681279174), l, d, r[f], 11, -358537222), g, l, r[f + 3], 16, -722521979), C, g, r[f + 6], 23, 76029189), d = o(d, C = o(C, g = o(g, l, d, C, r[f + 9], 4, -640364487), l, d, r[f + 12], 11, -421815835), g, l, r[f + 15], 16, 530742520), C, g, r[f + 2], 23, -995338651), d = u(d, C = u(C, g = u(g, l, d, C, r[f], 6, -198630844), l, d, r[f + 7], 10, 1126891415), g, l, r[f + 14], 15, -1416354905), C, g, r[f + 5], 21, -57434055), d = u(d, C = u(C, g = u(g, l, d, C, r[f + 12], 6, 1700485571), l, d, r[f + 3], 10, -1894986606), g, l, r[f + 10], 15, -1051523), C, g, r[f + 1], 21, -2054922799), d = u(d, C = u(C, g = u(g, l, d, C, r[f + 8], 6, 1873313359), l, d, r[f + 15], 10, -30611744), g, l, r[f + 6], 15, -1560198380), C, g, r[f + 13], 21, 1309151649), d = u(d, C = u(C, g = u(g, l, d, C, r[f + 4], 6, -145523070), l, d, r[f + 11], 10, -1120210379), g, l, r[f + 2], 15, 718787259), C, g, r[f + 9], 21, -343485551), 
  g = n(g, a), l = n(l, i), d = n(d, h), C = n(C, v);
  return [ g, l, d, C ];
}

function f(n) {
  var r, t = "", e = 32 * n.length;
  for (r = 0; r < e; r += 8) t += String.fromCharCode(n[r >> 5] >>> r % 32 & 255);
  return t;
}

function a(n) {
  var r, t = [];
  for (t[(n.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
  var e = 8 * n.length;
  for (r = 0; r < e; r += 8) t[r >> 5] |= (255 & n.charCodeAt(r / 8)) << r % 32;
  return t;
}

function i(n) {
  var r, t, e = "0123456789abcdef", o = "";
  for (t = 0; t < n.length; t += 1) r = n.charCodeAt(t), o += e.charAt(r >>> 4 & 15) + e.charAt(15 & r);
  return o;
}

function h(n) {
  return unescape(encodeURIComponent(n));
}

function v(n) {
  return f(c(a(r = h(n)), 8 * r.length));
  var r;
}

function g(n, r) {
  return function(n, r) {
      var t, e, o = a(n), u = [], i = [];
      for (u[15] = i[15] = void 0, 16 < o.length && (o = c(o, 8 * n.length)), t = 0; t < 16; t += 1) u[t] = 909522486 ^ o[t], 
      i[t] = 1549556828 ^ o[t];
      return e = c(u.concat(a(r)), 512 + 8 * r.length), f(c(i.concat(e), 640));
  }(h(n), h(r));
}

var l = {
  hex_md5: function(n, r, t) {
      return r ? t ? g(r, n) : i(g(r, n)) : t ? v(n) : function(n) {
          return i(v(n));
      }(n);
  }
};

exports.MD5 = l;