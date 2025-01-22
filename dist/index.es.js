import Ts from "react";
var ti = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rr;
function ws() {
  if (Rr) return Ee;
  Rr = 1;
  var a = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(i, r, n) {
    var s = null;
    if (n !== void 0 && (s = "" + n), r.key !== void 0 && (s = "" + r.key), "key" in r) {
      n = {};
      for (var o in r)
        o !== "key" && (n[o] = r[o]);
    } else n = r;
    return r = n.ref, {
      $$typeof: a,
      type: i,
      key: s,
      ref: r !== void 0 ? r : null,
      props: n
    };
  }
  return Ee.Fragment = t, Ee.jsx = e, Ee.jsxs = e, Ee;
}
var ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Ss() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && function() {
    function a(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === Q ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case S:
          return "Fragment";
        case b:
          return "Portal";
        case O:
          return "Profiler";
        case P:
          return "StrictMode";
        case R:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case k:
            return (g.displayName || "Context") + ".Provider";
          case T:
            return (g._context.displayName || "Context") + ".Consumer";
          case M:
            var C = g.render;
            return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case I:
            return C = g.displayName || null, C !== null ? C : a(g.type) || "Memo";
          case L:
            C = g._payload, g = g._init;
            try {
              return a(g(C));
            } catch {
            }
        }
      return null;
    }
    function t(g) {
      return "" + g;
    }
    function e(g) {
      try {
        t(g);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var E = C.error, F = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return E.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          F
        ), t(g);
      }
    }
    function i() {
    }
    function r() {
      if (Z === 0) {
        ut = console.log, He = console.info, Ze = console.warn, Je = console.error, Qe = console.group, it = console.groupCollapsed, Or = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0
        };
        Object.defineProperties(console, {
          info: g,
          log: g,
          warn: g,
          error: g,
          group: g,
          groupCollapsed: g,
          groupEnd: g
        });
      }
      Z++;
    }
    function n() {
      if (Z--, Z === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, g, { value: ut }),
          info: $({}, g, { value: He }),
          warn: $({}, g, { value: Ze }),
          error: $({}, g, { value: Je }),
          group: $({}, g, { value: Qe }),
          groupCollapsed: $({}, g, { value: it }),
          groupEnd: $({}, g, { value: Or })
        });
      }
      0 > Z && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(g) {
      if (Pi === void 0)
        try {
          throw Error();
        } catch (E) {
          var C = E.stack.trim().match(/\n( *(at )?)/);
          Pi = C && C[1] || "", Cr = -1 < E.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < E.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Pi + g + Cr;
    }
    function o(g, C) {
      if (!g || Oi) return "";
      var E = Ci.get(g);
      if (E !== void 0) return E;
      Oi = !0, E = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var F = null;
      F = at.H, at.H = null, r();
      try {
        var rt = {
          DetermineComponentFrameRoot: function() {
            try {
              if (C) {
                var Ut = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ut.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ut, []);
                  } catch (zt) {
                    var Ke = zt;
                  }
                  Reflect.construct(g, [], Ut);
                } else {
                  try {
                    Ut.call();
                  } catch (zt) {
                    Ke = zt;
                  }
                  g.call(Ut.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (zt) {
                  Ke = zt;
                }
                (Ut = g()) && typeof Ut.catch == "function" && Ut.catch(function() {
                });
              }
            } catch (zt) {
              if (zt && Ke && typeof zt.stack == "string")
                return [zt.stack, Ke.stack];
            }
            return [null, null];
          }
        };
        rt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var X = Object.getOwnPropertyDescriptor(
          rt.DetermineComponentFrameRoot,
          "name"
        );
        X && X.configurable && Object.defineProperty(
          rt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var D = rt.DetermineComponentFrameRoot(), Lt = D[0], ce = D[1];
        if (Lt && ce) {
          var ft = Lt.split(`
`), Qt = ce.split(`
`);
          for (D = X = 0; X < ft.length && !ft[X].includes(
            "DetermineComponentFrameRoot"
          ); )
            X++;
          for (; D < Qt.length && !Qt[D].includes(
            "DetermineComponentFrameRoot"
          ); )
            D++;
          if (X === ft.length || D === Qt.length)
            for (X = ft.length - 1, D = Qt.length - 1; 1 <= X && 0 <= D && ft[X] !== Qt[D]; )
              D--;
          for (; 1 <= X && 0 <= D; X--, D--)
            if (ft[X] !== Qt[D]) {
              if (X !== 1 || D !== 1)
                do
                  if (X--, D--, 0 > D || ft[X] !== Qt[D]) {
                    var Ce = `
` + ft[X].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Ce.includes("<anonymous>") && (Ce = Ce.replace("<anonymous>", g.displayName)), typeof g == "function" && Ci.set(g, Ce), Ce;
                  }
                while (1 <= X && 0 <= D);
              break;
            }
        }
      } finally {
        Oi = !1, at.H = F, n(), Error.prepareStackTrace = E;
      }
      return ft = (ft = g ? g.displayName || g.name : "") ? s(ft) : "", typeof g == "function" && Ci.set(g, ft), ft;
    }
    function f(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var C = g.prototype;
        return o(
          g,
          !(!C || !C.isReactComponent)
        );
      }
      if (typeof g == "string") return s(g);
      switch (g) {
        case R:
          return s("Suspense");
        case A:
          return s("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case M:
            return g = o(g.render, !1), g;
          case I:
            return f(g.type);
          case L:
            C = g._payload, g = g._init;
            try {
              return f(g(C));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var g = at.A;
      return g === null ? null : g.getOwner();
    }
    function l(g) {
      if (Et.call(g, "key")) {
        var C = Object.getOwnPropertyDescriptor(g, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function h(g, C) {
      function E() {
        Er || (Er = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      E.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: E,
        configurable: !0
      });
    }
    function _() {
      var g = a(this.type);
      return kr[g] || (kr[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function d(g, C, E, F, rt, X) {
      return E = X.ref, g = {
        $$typeof: w,
        type: g,
        key: C,
        props: X,
        _owner: rt
      }, (E !== void 0 ? E : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: _
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function p(g, C, E, F, rt, X) {
      if (typeof g == "string" || typeof g == "function" || g === S || g === O || g === P || g === R || g === A || g === z || typeof g == "object" && g !== null && (g.$$typeof === L || g.$$typeof === I || g.$$typeof === k || g.$$typeof === T || g.$$typeof === M || g.$$typeof === bt || g.getModuleId !== void 0)) {
        var D = C.children;
        if (D !== void 0)
          if (F)
            if (et(D)) {
              for (F = 0; F < D.length; F++)
                c(D[F], g);
              Object.freeze && Object.freeze(D);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(D, g);
      } else
        D = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? F = "null" : et(g) ? F = "array" : g !== void 0 && g.$$typeof === w ? (F = "<" + (a(g.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : F = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          F,
          D
        );
      if (Et.call(C, "key")) {
        D = a(g);
        var Lt = Object.keys(C).filter(function(ft) {
          return ft !== "key";
        });
        F = 0 < Lt.length ? "{key: someKey, " + Lt.join(": ..., ") + ": ...}" : "{key: someKey}", Mr[D + F] || (Lt = 0 < Lt.length ? "{" + Lt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          D,
          Lt,
          D
        ), Mr[D + F] = !0);
      }
      if (D = null, E !== void 0 && (e(E), D = "" + E), l(C) && (e(C.key), D = "" + C.key), "key" in C) {
        E = {};
        for (var ce in C)
          ce !== "key" && (E[ce] = C[ce]);
      } else E = C;
      return D && h(
        E,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), d(g, D, X, rt, u(), E);
    }
    function c(g, C) {
      if (typeof g == "object" && g && g.$$typeof !== bs) {
        if (et(g))
          for (var E = 0; E < g.length; E++) {
            var F = g[E];
            m(F) && y(F, C);
          }
        else if (m(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? E = null : (E = j && g[j] || g["@@iterator"], E = typeof E == "function" ? E : null), typeof E == "function" && E !== g.entries && (E = E.call(g), E !== g))
          for (; !(g = E.next()).done; )
            m(g.value) && y(g.value, C);
      }
    }
    function m(g) {
      return typeof g == "object" && g !== null && g.$$typeof === w;
    }
    function y(g, C) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, C = x(C), !Ar[C])) {
        Ar[C] = !0;
        var E = "";
        g && g._owner != null && g._owner !== u() && (E = null, typeof g._owner.tag == "number" ? E = a(g._owner.type) : typeof g._owner.name == "string" && (E = g._owner.name), E = " It was passed a child from " + E + ".");
        var F = at.getCurrentStack;
        at.getCurrentStack = function() {
          var rt = f(g.type);
          return F && (rt += F() || ""), rt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          C,
          E
        ), at.getCurrentStack = F;
      }
    }
    function x(g) {
      var C = "", E = u();
      return E && (E = a(E.type)) && (C = `

Check the render method of \`` + E + "`."), C || (g = a(g)) && (C = `

Check the top-level render call using <` + g + ">."), C;
    }
    var v = Ts, w = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), k = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), j = Symbol.iterator, Q = Symbol.for("react.client.reference"), at = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Et = Object.prototype.hasOwnProperty, $ = Object.assign, bt = Symbol.for("react.client.reference"), et = Array.isArray, Z = 0, ut, He, Ze, Je, Qe, it, Or;
    i.__reactDisabledLog = !0;
    var Pi, Cr, Oi = !1, Ci = new (typeof WeakMap == "function" ? WeakMap : Map)(), bs = Symbol.for("react.client.reference"), Er, kr = {}, Mr = {}, Ar = {};
    ke.Fragment = S, ke.jsx = function(g, C, E, F, rt) {
      return p(g, C, E, !1, F, rt);
    }, ke.jsxs = function(g, C, E, F, rt) {
      return p(g, C, E, !0, F, rt);
    };
  }()), ke;
}
var Nr;
function Ps() {
  return Nr || (Nr = 1, process.env.NODE_ENV === "production" ? ti.exports = ws() : ti.exports = Ss()), ti.exports;
}
var ei = Ps();
const wa = ({ unitNumber: a, subjectName: t }) => /* @__PURE__ */ ei.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ ei.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ ei.jsx("div", { className: "text-2xl font-[600] label", children: a }),
  /* @__PURE__ */ ei.jsx("div", { className: "text-xl font-[400] label", children: t })
] });
function Ft(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function an(a, t) {
  a.prototype = Object.create(t.prototype), a.prototype.constructor = a, a.__proto__ = t;
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var xt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, Te = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ar, st, U, St = 1e8, V = 1 / St, Yi = Math.PI * 2, Os = Yi / 4, Cs = 0, un = Math.sqrt, Es = Math.cos, ks = Math.sin, tt = function(t) {
  return typeof t == "string";
}, W = function(t) {
  return typeof t == "function";
}, jt = function(t) {
  return typeof t == "number";
}, ur = function(t) {
  return typeof t > "u";
}, Nt = function(t) {
  return typeof t == "object";
}, ht = function(t) {
  return t !== !1;
}, fr = function() {
  return typeof window < "u";
}, ii = function(t) {
  return W(t) || tt(t);
}, fn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ot = Array.isArray, ji = /(?:-?\.?\d|\.)+/gi, ln = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, pe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ei = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, hn = /[+-]=-?[.\d]+/, cn = /[^,'"\[\]\s]+/gi, Ms = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, q, Mt, Vi, lr, vt = {}, li = {}, _n, dn = function(t) {
  return (li = fe(t, vt)) && pt;
}, hr = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ye = function(t, e) {
  return !e && console.warn(t);
}, pn = function(t, e) {
  return t && (vt[t] = e) && li && (li[t] = e) || vt;
}, je = function() {
  return 0;
}, As = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, si = {
  suppressEvents: !0,
  kill: !1
}, Rs = {
  suppressEvents: !0
}, cr = {}, Gt = [], Ui = {}, gn, gt = {}, ki = {}, Lr = 30, oi = [], _r = "", dr = function(t) {
  var e = t[0], i, r;
  if (Nt(e) || W(e) || (t = [t]), !(i = (e._gsap || {}).harness)) {
    for (r = oi.length; r-- && !oi[r].targetTest(e); )
      ;
    i = oi[r];
  }
  for (r = t.length; r--; )
    t[r] && (t[r]._gsap || (t[r]._gsap = new Yn(t[r], i))) || t.splice(r, 1);
  return t;
}, re = function(t) {
  return t._gsap || dr(Pt(t))[0]._gsap;
}, mn = function(t, e, i) {
  return (i = t[e]) && W(i) ? t[e]() : ur(i) && t.getAttribute && t.getAttribute(e) || i;
}, ct = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, H = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, K = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ye = function(t, e) {
  var i = e.charAt(0), r = parseFloat(e.substr(2));
  return t = parseFloat(t), i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r;
}, Ds = function(t, e) {
  for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
    ;
  return r < i;
}, hi = function() {
  var t = Gt.length, e = Gt.slice(0), i, r;
  for (Ui = {}, Gt.length = 0, i = 0; i < t; i++)
    r = e[i], r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
}, yn = function(t, e, i, r) {
  Gt.length && !st && hi(), t.render(e, i, st && e < 0 && (t._initted || t._startAt)), Gt.length && !st && hi();
}, xn = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(cn).length < 2 ? e : tt(t) ? t.trim() : t;
}, vn = function(t) {
  return t;
}, Ct = function(t, e) {
  for (var i in e)
    i in t || (t[i] = e[i]);
  return t;
}, Ns = function(t) {
  return function(e, i) {
    for (var r in i)
      r in e || r === "duration" && t || r === "ease" || (e[r] = i[r]);
  };
}, fe = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, zr = function a(t, e) {
  for (var i in e)
    i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = Nt(e[i]) ? a(t[i] || (t[i] = {}), e[i]) : e[i]);
  return t;
}, ci = function(t, e) {
  var i = {}, r;
  for (r in t)
    r in e || (i[r] = t[r]);
  return i;
}, ze = function(t) {
  var e = t.parent || q, i = t.keyframes ? Ns(ot(t.keyframes)) : Ct;
  if (ht(t.inherit))
    for (; e; )
      i(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ls = function(t, e) {
  for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
    ;
  return i < 0;
}, bn = function(t, e, i, r, n) {
  var s = t[r], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t, e;
}, bi = function(t, e, i, r) {
  i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[i] === e && (t[i] = s), s ? s._prev = n : t[r] === e && (t[r] = n), e._next = e._prev = e.parent = null;
}, Ht = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, ne = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var i = t; i; )
      i._dirty = 1, i = i.parent;
  return t;
}, zs = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, $i = function(t, e, i, r) {
  return t._startAt && (st ? t._startAt.revert(si) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r));
}, Fs = function a(t) {
  return !t || t._ts && a(t.parent);
}, Fr = function(t) {
  return t._repeat ? we(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, we = function(t, e) {
  var i = Math.floor(t /= e);
  return t && i === t ? i - 1 : i;
}, _i = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Ti = function(t) {
  return t._end = K(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
}, wi = function(t, e) {
  var i = t._dp;
  return i && i.smoothChildTiming && t._ts && (t._start = K(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ti(t), i._dirty || ne(i, t)), t;
}, Tn = function(t, e) {
  var i;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = _i(t.rawTime(), e), (!e._dur || We(0, e.totalDuration(), i) - e._tTime > V) && e.render(i, !0)), ne(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (i = t; i._dp; )
        i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
    t._zTime = -V;
  }
}, At = function(t, e, i, r) {
  return e.parent && Ht(e), e._start = K((jt(i) ? i : i || t !== q ? Tt(t, i, e) : t._time) + e._delay), e._end = K(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), bn(t, e, "_first", "_last", t._sort ? "_start" : 0), Xi(e) || (t._recent = e), r || Tn(t, e), t._ts < 0 && wi(t, t._tTime), t;
}, wn = function(t, e) {
  return (vt.ScrollTrigger || hr("scrollTrigger", e)) && vt.ScrollTrigger.create(e, t);
}, Sn = function(t, e, i, r, n) {
  if (gr(t, e, n), !t._initted)
    return 1;
  if (!i && t._pt && !st && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && gn !== mt.frame)
    return Gt.push(t), t._lazy = [n, r], 1;
}, Bs = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, Xi = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Is = function(t, e, i, r) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Bs(t) && !(!t._initted && Xi(t)) || (t._ts < 0 || t._dp._ts < 0) && !Xi(t)) ? 0 : 1, o = t._rDelay, f = 0, u, l, h;
  if (o && t._repeat && (f = We(0, t._tDur, e), l = we(f, o), t._yoyo && l & 1 && (s = 1 - s), l !== we(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || st || r || t._zTime === V || !e && t._zTime) {
    if (!t._initted && Sn(t, e, r, i, f))
      return;
    for (h = t._zTime, t._zTime = e || (i ? V : 0), i || (i = e && !h), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = f, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    e < 0 && $i(t, e, i, !0), t._onUpdate && !i && yt(t, "onUpdate"), f && t._repeat && !i && t.parent && yt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Ht(t, 1), !i && !st && (yt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Ys = function(t, e, i) {
  var r;
  if (i > e)
    for (r = t._first; r && r._start <= i; ) {
      if (r.data === "isPause" && r._start > e)
        return r;
      r = r._next;
    }
  else
    for (r = t._last; r && r._start >= i; ) {
      if (r.data === "isPause" && r._start < e)
        return r;
      r = r._prev;
    }
}, Se = function(t, e, i, r) {
  var n = t._repeat, s = K(e) || 0, o = t._tTime / t._tDur;
  return o && !r && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : K(s * (n + 1) + t._rDelay * n) : s, o > 0 && !r && wi(t, t._tTime = t._tDur * o), t.parent && Ti(t), i || ne(t.parent, t), t;
}, Br = function(t) {
  return t instanceof lt ? ne(t) : Se(t, t._dur);
}, js = {
  _start: 0,
  endTime: je,
  totalDuration: je
}, Tt = function a(t, e, i) {
  var r = t.labels, n = t._recent || js, s = t.duration() >= St ? n.endTime(!1) : t._dur, o, f, u;
  return tt(e) && (isNaN(e) || e in r) ? (f = e.charAt(0), u = e.substr(-1) === "%", o = e.indexOf("="), f === "<" || f === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (o < 0 ? n : i).totalDuration() / 100 : 1)) : o < 0 ? (e in r || (r[e] = s), r[e]) : (f = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), u && i && (f = f / 100 * (ot(i) ? i[0] : i).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), i) + f : s + f)) : e == null ? s : +e;
}, Fe = function(t, e, i) {
  var r = jt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, f;
  if (r && (s.duration = e[1]), s.parent = i, t) {
    for (o = s, f = i; f && !("immediateRender" in o); )
      o = f.vars.defaults || {}, f = ht(f.vars.inherit) && f.parent;
    s.immediateRender = ht(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new J(e[0], s, e[n + 1]);
}, Jt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, We = function(t, e, i) {
  return i < t ? t : i > e ? e : i;
}, nt = function(t, e) {
  return !tt(t) || !(e = Ms.exec(t)) ? "" : e[1];
}, Vs = function(t, e, i) {
  return Jt(i, function(r) {
    return We(t, e, r);
  });
}, qi = [].slice, Pn = function(t, e) {
  return t && Nt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Nt(t[0])) && !t.nodeType && t !== Mt;
}, Us = function(t, e, i) {
  return i === void 0 && (i = []), t.forEach(function(r) {
    var n;
    return tt(r) && !e || Pn(r, 1) ? (n = i).push.apply(n, Pt(r)) : i.push(r);
  }) || i;
}, Pt = function(t, e, i) {
  return U && !e && U.selector ? U.selector(t) : tt(t) && !i && (Vi || !Pe()) ? qi.call((e || lr).querySelectorAll(t), 0) : ot(t) ? Us(t, i) : Pn(t) ? qi.call(t, 0) : t ? [t] : [];
}, Gi = function(t) {
  return t = Pt(t)[0] || Ye("Invalid scope") || {}, function(e) {
    var i = t.current || t.nativeElement || t;
    return Pt(e, i.querySelectorAll ? i : i === t ? Ye("Invalid scope") || lr.createElement("div") : t);
  };
}, On = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Cn = function(t) {
  if (W(t))
    return t;
  var e = Nt(t) ? t : {
    each: t
  }, i = se(e.ease), r = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = r > 0 && r < 1, f = isNaN(r) || o, u = e.axis, l = r, h = r;
  return tt(r) ? l = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[r] || 0 : !o && f && (l = r[0], h = r[1]), function(_, d, p) {
    var c = (p || e).length, m = s[c], y, x, v, w, b, S, P, O, T;
    if (!m) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, St])[1], !T) {
        for (P = -St; P < (P = p[T++].getBoundingClientRect().left) && T < c; )
          ;
        T < c && T--;
      }
      for (m = s[c] = [], y = f ? Math.min(T, c) * l - 0.5 : r % T, x = T === St ? 0 : f ? c * h / T - 0.5 : r / T | 0, P = 0, O = St, S = 0; S < c; S++)
        v = S % T - y, w = x - (S / T | 0), m[S] = b = u ? Math.abs(u === "y" ? w : v) : un(v * v + w * w), b > P && (P = b), b < O && (O = b);
      r === "random" && On(m), m.max = P - O, m.min = O, m.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (T > c ? c - 1 : u ? u === "y" ? c / T : T : Math.max(T, c / T)) || 0) * (r === "edges" ? -1 : 1), m.b = c < 0 ? n - c : n, m.u = nt(e.amount || e.each) || 0, i = i && c < 0 ? Fn(i) : i;
    }
    return c = (m[_] - m.min) / m.max || 0, K(m.b + (i ? i(c) : c) * m.v) + m.u;
  };
}, Wi = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(i) {
    var r = K(Math.round(parseFloat(i) / t) * t * e);
    return (r - r % 1) / e + (jt(i) ? 0 : nt(i));
  };
}, En = function(t, e) {
  var i = ot(t), r, n;
  return !i && Nt(t) && (r = i = t.radius || St, t.values ? (t = Pt(t.values), (n = !jt(t[0])) && (r *= r)) : t = Wi(t.increment)), Jt(e, i ? W(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= r ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), f = parseFloat(n ? s.y : 0), u = St, l = 0, h = t.length, _, d; h--; )
      n ? (_ = t[h].x - o, d = t[h].y - f, _ = _ * _ + d * d) : _ = Math.abs(t[h] - o), _ < u && (u = _, l = h);
    return l = !r || u <= r ? t[l] : s, n || l === s || jt(s) ? l : l + nt(s);
  } : Wi(t));
}, kn = function(t, e, i, r) {
  return Jt(ot(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
    return ot(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) * i * r) / r;
  });
}, $s = function() {
  for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
    e[i] = arguments[i];
  return function(r) {
    return e.reduce(function(n, s) {
      return s(n);
    }, r);
  };
}, Xs = function(t, e) {
  return function(i) {
    return t(parseFloat(i)) + (e || nt(i));
  };
}, qs = function(t, e, i) {
  return An(t, e, 0, 1, i);
}, Mn = function(t, e, i) {
  return Jt(i, function(r) {
    return t[~~e(r)];
  });
}, Gs = function a(t, e, i) {
  var r = e - t;
  return ot(t) ? Mn(t, a(0, t.length), e) : Jt(i, function(n) {
    return (r + (n - t) % r) % r + t;
  });
}, Ws = function a(t, e, i) {
  var r = e - t, n = r * 2;
  return ot(t) ? Mn(t, a(0, t.length - 1), e) : Jt(i, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > r ? n - s : s);
  });
}, Ve = function(t) {
  for (var e = 0, i = "", r, n, s, o; ~(r = t.indexOf("random(", e)); )
    s = t.indexOf(")", r), o = t.charAt(r + 7) === "[", n = t.substr(r + 7, s - r - 7).match(o ? cn : ji), i += t.substr(e, r - e) + kn(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return i + t.substr(e, t.length - e);
}, An = function(t, e, i, r, n) {
  var s = e - t, o = r - i;
  return Jt(n, function(f) {
    return i + ((f - t) / s * o || 0);
  });
}, Hs = function a(t, e, i, r) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = tt(t), o = {}, f, u, l, h, _;
    if (i === !0 && (r = 1) && (i = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (ot(t) && !ot(e)) {
      for (l = [], h = t.length, _ = h - 2, u = 1; u < h; u++)
        l.push(a(t[u - 1], t[u]));
      h--, n = function(p) {
        p *= h;
        var c = Math.min(_, ~~p);
        return l[c](p - c);
      }, i = e;
    } else r || (t = fe(ot(t) ? [] : {}, t));
    if (!l) {
      for (f in e)
        pr.call(o, t, f, "get", e[f]);
      n = function(p) {
        return xr(p, o) || (s ? t.p : t);
      };
    }
  }
  return Jt(i, n);
}, Ir = function(t, e, i) {
  var r = t.labels, n = St, s, o, f;
  for (s in r)
    o = r[s] - e, o < 0 == !!i && o && n > (o = Math.abs(o)) && (f = s, n = o);
  return f;
}, yt = function(t, e, i) {
  var r = t.vars, n = r[e], s = U, o = t._ctx, f, u, l;
  if (n)
    return f = r[e + "Params"], u = r.callbackScope || t, i && Gt.length && hi(), o && (U = o), l = f ? n.apply(u, f) : n.call(u), U = s, l;
}, Re = function(t) {
  return Ht(t), t.scrollTrigger && t.scrollTrigger.kill(!!st), t.progress() < 1 && yt(t, "onInterrupt"), t;
}, ge, Rn = [], Dn = function(t) {
  if (t)
    if (t = !t.name && t.default || t, fr() || t.headless) {
      var e = t.name, i = W(t), r = e && !i && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: je,
        render: xr,
        add: pr,
        kill: ho,
        modifier: lo,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: yr,
        aliases: {},
        register: 0
      };
      if (Pe(), t !== r) {
        if (gt[e])
          return;
        Ct(r, Ct(ci(t, n), s)), fe(r.prototype, fe(n, ci(t, s))), gt[r.prop = e] = r, t.targetTest && (oi.push(r), cr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      pn(e, r), t.register && t.register(pt, r, _t);
    } else
      Rn.push(t);
}, Y = 255, De = {
  aqua: [0, Y, Y],
  lime: [0, Y, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, Y],
  navy: [0, 0, 128],
  white: [Y, Y, Y],
  olive: [128, 128, 0],
  yellow: [Y, Y, 0],
  orange: [Y, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [Y, 0, 0],
  pink: [Y, 192, 203],
  cyan: [0, Y, Y],
  transparent: [Y, Y, Y, 0]
}, Mi = function(t, e, i) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (i - e) * t * 6 : t < 0.5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * Y + 0.5 | 0;
}, Nn = function(t, e, i) {
  var r = t ? jt(t) ? [t >> 16, t >> 8 & Y, t & Y] : 0 : De.black, n, s, o, f, u, l, h, _, d, p;
  if (!r) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), De[t])
      r = De[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return r = parseInt(t.substr(1, 6), 16), [r >> 16, r >> 8 & Y, r & Y, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), r = [t >> 16, t >> 8 & Y, t & Y];
    } else if (t.substr(0, 3) === "hsl") {
      if (r = p = t.match(ji), !e)
        f = +r[0] % 360 / 360, u = +r[1] / 100, l = +r[2] / 100, s = l <= 0.5 ? l * (u + 1) : l + u - l * u, n = l * 2 - s, r.length > 3 && (r[3] *= 1), r[0] = Mi(f + 1 / 3, n, s), r[1] = Mi(f, n, s), r[2] = Mi(f - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return r = t.match(ln), i && r.length < 4 && (r[3] = 1), r;
    } else
      r = t.match(ji) || De.transparent;
    r = r.map(Number);
  }
  return e && !p && (n = r[0] / Y, s = r[1] / Y, o = r[2] / Y, h = Math.max(n, s, o), _ = Math.min(n, s, o), l = (h + _) / 2, h === _ ? f = u = 0 : (d = h - _, u = l > 0.5 ? d / (2 - h - _) : d / (h + _), f = h === n ? (s - o) / d + (s < o ? 6 : 0) : h === s ? (o - n) / d + 2 : (n - s) / d + 4, f *= 60), r[0] = ~~(f + 0.5), r[1] = ~~(u * 100 + 0.5), r[2] = ~~(l * 100 + 0.5)), i && r.length < 4 && (r[3] = 1), r;
}, Ln = function(t) {
  var e = [], i = [], r = -1;
  return t.split(Wt).forEach(function(n) {
    var s = n.match(pe) || [];
    e.push.apply(e, s), i.push(r += s.length + 1);
  }), e.c = i, e;
}, Yr = function(t, e, i) {
  var r = "", n = (t + r).match(Wt), s = e ? "hsla(" : "rgba(", o = 0, f, u, l, h;
  if (!n)
    return t;
  if (n = n.map(function(_) {
    return (_ = Nn(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), i && (l = Ln(t), f = i.c, f.join(r) !== l.c.join(r)))
    for (u = t.replace(Wt, "1").split(pe), h = u.length - 1; o < h; o++)
      r += u[o] + (~f.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (l.length ? l : n.length ? n : i).shift());
  if (!u)
    for (u = t.split(Wt), h = u.length - 1; o < h; o++)
      r += u[o] + n[o];
  return r + u[h];
}, Wt = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in De)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), Zs = /hsl[a]?\(/, zn = function(t) {
  var e = t.join(" "), i;
  if (Wt.lastIndex = 0, Wt.test(e))
    return i = Zs.test(e), t[1] = Yr(t[1], i), t[0] = Yr(t[0], i, Ln(t[1])), !0;
}, Ue, mt = function() {
  var a = Date.now, t = 500, e = 33, i = a(), r = i, n = 1e3 / 240, s = n, o = [], f, u, l, h, _, d, p = function c(m) {
    var y = a() - r, x = m === !0, v, w, b, S;
    if ((y > t || y < 0) && (i += y - e), r += y, b = r - i, v = b - s, (v > 0 || x) && (S = ++h.frame, _ = b - h.time * 1e3, h.time = b = b / 1e3, s += v + (v >= n ? 4 : n - v), w = 1), x || (f = u(c)), w)
      for (d = 0; d < o.length; d++)
        o[d](b, _, S, m);
  };
  return h = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return _ / (1e3 / (m || 60));
    },
    wake: function() {
      _n && (!Vi && fr() && (Mt = Vi = window, lr = Mt.document || {}, vt.gsap = pt, (Mt.gsapVersions || (Mt.gsapVersions = [])).push(pt.version), dn(li || Mt.GreenSockGlobals || !Mt.gsap && Mt || {}), Rn.forEach(Dn)), l = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && h.sleep(), u = l || function(m) {
        return setTimeout(m, s - h.time * 1e3 + 1 | 0);
      }, Ue = 1, p(2));
    },
    sleep: function() {
      (l ? cancelAnimationFrame : clearTimeout)(f), Ue = 0, u = je;
    },
    lagSmoothing: function(m, y) {
      t = m || 1 / 0, e = Math.min(y || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = h.time * 1e3 + n;
    },
    add: function(m, y, x) {
      var v = y ? function(w, b, S, P) {
        m(w, b, S, P), h.remove(v);
      } : m;
      return h.remove(m), o[x ? "unshift" : "push"](v), Pe(), v;
    },
    remove: function(m, y) {
      ~(y = o.indexOf(m)) && o.splice(y, 1) && d >= y && d--;
    },
    _listeners: o
  }, h;
}(), Pe = function() {
  return !Ue && mt.wake();
}, N = {}, Js = /^[\d.\-M][\d.\-,\s]/, Qs = /["']/g, Ks = function(t) {
  for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, o, f, u; n < s; n++)
    f = i[n], o = n !== s - 1 ? f.lastIndexOf(",") : f.length, u = f.substr(0, o), e[r] = isNaN(u) ? u.replace(Qs, "").trim() : +u, r = f.substr(o + 1).trim();
  return e;
}, to = function(t) {
  var e = t.indexOf("(") + 1, i = t.indexOf(")"), r = t.indexOf("(", e);
  return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
}, eo = function(t) {
  var e = (t + "").split("("), i = N[e[0]];
  return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [Ks(e[1])] : to(t).split(",").map(xn)) : N._CE && Js.test(t) ? N._CE("", t) : i;
}, Fn = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Bn = function a(t, e) {
  for (var i = t._first, r; i; )
    i instanceof lt ? a(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? a(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
}, se = function(t, e) {
  return t && (W(t) ? t : N[t] || eo(t)) || e;
}, he = function(t, e, i, r) {
  i === void 0 && (i = function(f) {
    return 1 - e(1 - f);
  }), r === void 0 && (r = function(f) {
    return f < 0.5 ? e(f * 2) / 2 : 1 - e((1 - f) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: i,
    easeInOut: r
  }, s;
  return ct(t, function(o) {
    N[o] = vt[o] = n, N[s = o.toLowerCase()] = i;
    for (var f in n)
      N[s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = N[o + "." + f] = n[f];
  }), n;
}, In = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ai = function a(t, e, i) {
  var r = e >= 1 ? e : 1, n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Yi * (Math.asin(1 / r) || 0), o = function(l) {
    return l === 1 ? 1 : r * Math.pow(2, -10 * l) * ks((l - s) * n) + 1;
  }, f = t === "out" ? o : t === "in" ? function(u) {
    return 1 - o(1 - u);
  } : In(o);
  return n = Yi / n, f.config = function(u, l) {
    return a(t, u, l);
  }, f;
}, Ri = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var i = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, r = t === "out" ? i : t === "in" ? function(n) {
    return 1 - i(1 - n);
  } : In(i);
  return r.config = function(n) {
    return a(t, n);
  }, r;
};
ct("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  he(a + ",Power" + (e - 1), t ? function(i) {
    return Math.pow(i, e);
  } : function(i) {
    return i;
  }, function(i) {
    return 1 - Math.pow(1 - i, e);
  }, function(i) {
    return i < 0.5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2;
  });
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
he("Elastic", Ai("in"), Ai("out"), Ai());
(function(a, t) {
  var e = 1 / t, i = 2 * e, r = 2.5 * e, n = function(o) {
    return o < e ? a * o * o : o < i ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < r ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  he("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
he("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
he("Circ", function(a) {
  return -(un(1 - a * a) - 1);
});
he("Sine", function(a) {
  return a === 1 ? 1 : -Es(a * Os) + 1;
});
he("Back", Ri("in"), Ri("out"), Ri());
N.SteppedEase = N.steps = vt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var i = 1 / t, r = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - V;
    return function(o) {
      return ((r * We(0, s, o) | 0) + n) * i;
    };
  }
};
Te.ease = N["quad.out"];
ct("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return _r += a + "," + a + "Params,";
});
var Yn = function(t, e) {
  this.id = Cs++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : mn, this.set = e ? e.getSetter : yr;
}, $e = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Se(this, +e.duration, 1, 1), this.data = e.data, U && (this._ctx = U, U.data.push(this)), Ue || mt.wake();
  }
  var t = a.prototype;
  return t.delay = function(i) {
    return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay), this._delay = i, this) : this._delay;
  }, t.duration = function(i) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(i) {
    return arguments.length ? (this._dirty = 0, Se(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(i, r) {
    if (Pe(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (wi(this, i), !n._dp || n.parent || Tn(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && At(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === V || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i), yn(this, i, r)), this;
  }, t.time = function(i, r) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Fr(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time;
  }, t.totalProgress = function(i, r) {
    return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(i, r) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Fr(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(i, r) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? we(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(i, r) {
    if (!arguments.length)
      return this._rts === -V ? 0 : this._rts;
    if (this._rts === i)
      return this;
    var n = this.parent && this._ts ? _i(this.parent._time, this) : this._tTime;
    return this._rts = +i || 0, this._ts = this._ps || i === -V ? 0 : this._rts, this.totalTime(We(-Math.abs(this._delay), this._tDur, n), r !== !1), Ti(this), zs(this);
  }, t.paused = function(i) {
    return arguments.length ? (this._ps !== i && (this._ps = i, i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, t.startTime = function(i) {
    if (arguments.length) {
      this._start = i;
      var r = this.parent || this._dp;
      return r && (r._sort || !this.parent) && At(r, this, i - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(i) {
    return this._start + (ht(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(i) {
    var r = this.parent || this._dp;
    return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _i(r.rawTime(i), this) : this._tTime : this._tTime;
  }, t.revert = function(i) {
    i === void 0 && (i = Rs);
    var r = st;
    return st = i, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i), this.totalTime(-0.01, i.suppressEvents)), this.data !== "nested" && i.kill !== !1 && this.kill(), st = r, this;
  }, t.globalTime = function(i) {
    for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
      n = r._start + n / (Math.abs(r._ts) || 1), r = r._dp;
    return !this.parent && this._sat ? this._sat.globalTime(i) : n;
  }, t.repeat = function(i) {
    return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i, Br(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(i) {
    if (arguments.length) {
      var r = this._time;
      return this._rDelay = i, Br(this), r ? this.time(r) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(i) {
    return arguments.length ? (this._yoyo = i, this) : this._yoyo;
  }, t.seek = function(i, r) {
    return this.totalTime(Tt(this, i), ht(r));
  }, t.restart = function(i, r) {
    return this.play().totalTime(i ? -this._delay : 0, ht(r));
  }, t.play = function(i, r) {
    return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
  }, t.reverse = function(i, r) {
    return i != null && this.seek(i || this.totalDuration(), r), this.reversed(!0).paused(!1);
  }, t.pause = function(i, r) {
    return i != null && this.seek(i, r), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(i) {
    return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -V : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, t.isActive = function() {
    var i = this.parent || this._dp, r = this._start, n;
    return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - V);
  }, t.eventCallback = function(i, r, n) {
    var s = this.vars;
    return arguments.length > 1 ? (r ? (s[i] = r, n && (s[i + "Params"] = n), i === "onUpdate" && (this._onUpdate = r)) : delete s[i], this) : s[i];
  }, t.then = function(i) {
    var r = this;
    return new Promise(function(n) {
      var s = W(i) ? i : vn, o = function() {
        var u = r.then;
        r.then = null, W(s) && (s = s(r)) && (s.then || s === r) && (r.then = u), n(s), r.then = u;
      };
      r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? o() : r._prom = o;
    });
  }, t.kill = function() {
    Re(this);
  }, a;
}();
Ct($e.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -V,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var lt = /* @__PURE__ */ function(a) {
  an(t, a);
  function t(i, r) {
    var n;
    return i === void 0 && (i = {}), n = a.call(this, i) || this, n.labels = {}, n.smoothChildTiming = !!i.smoothChildTiming, n.autoRemoveChildren = !!i.autoRemoveChildren, n._sort = ht(i.sortChildren), q && At(i.parent || q, Ft(n), r), i.reversed && n.reverse(), i.paused && n.paused(!0), i.scrollTrigger && wn(Ft(n), i.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(r, n, s) {
    return Fe(0, arguments, this), this;
  }, e.from = function(r, n, s) {
    return Fe(1, arguments, this), this;
  }, e.fromTo = function(r, n, s, o) {
    return Fe(2, arguments, this), this;
  }, e.set = function(r, n, s) {
    return n.duration = 0, n.parent = this, ze(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new J(r, n, Tt(this, s), 1), this;
  }, e.call = function(r, n, s) {
    return At(this, J.delayedCall(0, r, n), s);
  }, e.staggerTo = function(r, n, s, o, f, u, l) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = u, s.onCompleteParams = l, s.parent = this, new J(r, s, Tt(this, f)), this;
  }, e.staggerFrom = function(r, n, s, o, f, u, l) {
    return s.runBackwards = 1, ze(s).immediateRender = ht(s.immediateRender), this.staggerTo(r, n, s, o, f, u, l);
  }, e.staggerFromTo = function(r, n, s, o, f, u, l, h) {
    return o.startAt = s, ze(o).immediateRender = ht(o.immediateRender), this.staggerTo(r, n, o, f, u, l, h);
  }, e.render = function(r, n, s) {
    var o = this._time, f = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, l = r <= 0 ? 0 : K(r), h = this._zTime < 0 != r < 0 && (this._initted || !u), _, d, p, c, m, y, x, v, w, b, S, P;
    if (this !== q && l > f && r >= 0 && (l = f), l !== this._tTime || s || h) {
      if (o !== this._time && u && (l += this._time - o, r += this._time - o), _ = l, w = this._start, v = this._ts, y = !v, h && (u || (o = this._zTime), (r || !n) && (this._zTime = r)), this._repeat) {
        if (S = this._yoyo, m = u + this._rDelay, this._repeat < -1 && r < 0)
          return this.totalTime(m * 100 + r, n, s);
        if (_ = K(l % m), l === f ? (c = this._repeat, _ = u) : (c = ~~(l / m), c && c === l / m && (_ = u, c--), _ > u && (_ = u)), b = we(this._tTime, m), !o && this._tTime && b !== c && this._tTime - b * m - this._dur <= 0 && (b = c), S && c & 1 && (_ = u - _, P = 1), c !== b && !this._lock) {
          var O = S && b & 1, T = O === (S && c & 1);
          if (c < b && (O = !O), o = O ? 0 : l % u ? u : l, this._lock = 1, this.render(o || (P ? 0 : K(c * m)), n, !u)._lock = 0, this._tTime = l, !n && this.parent && yt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, f = this._tDur, T && (this._lock = 2, o = O ? u : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Bn(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = Ys(this, K(o), K(_)), x && (l -= _ - (_ = x._start))), this._tTime = l, this._time = _, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = r, o = 0), !o && _ && !n && !c && (yt(this, "onStart"), this._tTime !== l))
        return this;
      if (_ >= o && r >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s), _ !== this._time || !this._ts && !y) {
              x = 0, p && (l += this._zTime = -V);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var k = r < 0 ? r : _; d; ) {
          if (p = d._prev, (d._act || k <= d._end) && d._ts && x !== d) {
            if (d.parent !== this)
              return this.render(r, n, s);
            if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || st && (d._initted || d._startAt)), _ !== this._time || !this._ts && !y) {
              x = 0, p && (l += this._zTime = k ? -V : V);
              break;
            }
          }
          d = p;
        }
      }
      if (x && !n && (this.pause(), x.render(_ >= o ? 0 : -V)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = w, Ti(this), this.render(r, n, s);
      this._onUpdate && !n && yt(this, "onUpdate", !0), (l === f && this._tTime >= this.totalDuration() || !l && o) && (w === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !u) && (l === f && this._ts > 0 || !l && this._ts < 0) && Ht(this, 1), !n && !(r < 0 && !o) && (l || o || !f) && (yt(this, l === f && r >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(l < f && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(r, n) {
    var s = this;
    if (jt(n) || (n = Tt(this, n, r)), !(r instanceof $e)) {
      if (ot(r))
        return r.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (tt(r))
        return this.addLabel(r, n);
      if (W(r))
        r = J.delayedCall(0, r);
      else
        return this;
    }
    return this !== r ? At(this, r, n) : this;
  }, e.getChildren = function(r, n, s, o) {
    r === void 0 && (r = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -St);
    for (var f = [], u = this._first; u; )
      u._start >= o && (u instanceof J ? n && f.push(u) : (s && f.push(u), r && f.push.apply(f, u.getChildren(!0, n, s)))), u = u._next;
    return f;
  }, e.getById = function(r) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === r)
        return n[s];
  }, e.remove = function(r) {
    return tt(r) ? this.removeLabel(r) : W(r) ? this.killTweensOf(r) : (bi(this, r), r === this._recent && (this._recent = this._last), ne(this));
  }, e.totalTime = function(r, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = K(mt.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))), a.prototype.totalTime.call(this, r, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(r, n) {
    return this.labels[r] = Tt(this, n), this;
  }, e.removeLabel = function(r) {
    return delete this.labels[r], this;
  }, e.addPause = function(r, n, s) {
    var o = J.delayedCall(0, n || je, s);
    return o.data = "isPause", this._hasPause = 1, At(this, o, Tt(this, r));
  }, e.removePause = function(r) {
    var n = this._first;
    for (r = Tt(this, r); n; )
      n._start === r && n.data === "isPause" && Ht(n), n = n._next;
  }, e.killTweensOf = function(r, n, s) {
    for (var o = this.getTweensOf(r, s), f = o.length; f--; )
      $t !== o[f] && o[f].kill(r, n);
    return this;
  }, e.getTweensOf = function(r, n) {
    for (var s = [], o = Pt(r), f = this._first, u = jt(n), l; f; )
      f instanceof J ? Ds(f._targets, o) && (u ? (!$t || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && s.push(f) : (l = f.getTweensOf(o, n)).length && s.push.apply(s, l), f = f._next;
    return s;
  }, e.tweenTo = function(r, n) {
    n = n || {};
    var s = this, o = Tt(s, r), f = n, u = f.startAt, l = f.onStart, h = f.onStartParams, _ = f.immediateRender, d, p = J.to(s, Ct({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || V,
      onStart: function() {
        if (s.pause(), !d) {
          var m = n.duration || Math.abs((o - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          p._dur !== m && Se(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        l && l.apply(p, h || []);
      }
    }, n));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(r, n, s) {
    return this.tweenTo(n, Ct({
      startAt: {
        time: Tt(this, r)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(r) {
    return r === void 0 && (r = this._time), Ir(this, Tt(this, r));
  }, e.previousLabel = function(r) {
    return r === void 0 && (r = this._time), Ir(this, Tt(this, r), 1);
  }, e.currentLabel = function(r) {
    return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + V);
  }, e.shiftChildren = function(r, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, f = this.labels, u; o; )
      o._start >= s && (o._start += r, o._end += r), o = o._next;
    if (n)
      for (u in f)
        f[u] >= s && (f[u] += r);
    return ne(this);
  }, e.invalidate = function(r) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(r), n = n._next;
    return a.prototype.invalidate.call(this, r);
  }, e.clear = function(r) {
    r === void 0 && (r = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), r && (this.labels = {}), ne(this);
  }, e.totalDuration = function(r) {
    var n = 0, s = this, o = s._last, f = St, u, l, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
    if (s._dirty) {
      for (h = s.parent; o; )
        u = o._prev, o._dirty && o.totalDuration(), l = o._start, l > f && s._sort && o._ts && !s._lock ? (s._lock = 1, At(s, o, l - o._delay, 1)._lock = 0) : f = l, l < 0 && o._ts && (n -= l, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += l / s._ts, s._time -= l, s._tTime -= l), s.shiftChildren(-l, !1, -1 / 0), f = 0), o._end > n && o._ts && (n = o._end), o = u;
      Se(s, s === q && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(r) {
    if (q._ts && (yn(q, _i(r, q)), gn = mt.frame), mt.frame >= Lr) {
      Lr += xt.autoSleep || 120;
      var n = q._first;
      if ((!n || !n._ts) && xt.autoSleep && mt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || mt.sleep();
      }
    }
  }, t;
}($e);
Ct(lt.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var io = function(t, e, i, r, n, s, o) {
  var f = new _t(this._pt, t, e, 0, 1, qn, null, n), u = 0, l = 0, h, _, d, p, c, m, y, x;
  for (f.b = i, f.e = r, i += "", r += "", (y = ~r.indexOf("random(")) && (r = Ve(r)), s && (x = [i, r], s(x, t, e), i = x[0], r = x[1]), _ = i.match(Ei) || []; h = Ei.exec(r); )
    p = h[0], c = r.substring(u, h.index), d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1), p !== _[l++] && (m = parseFloat(_[l - 1]) || 0, f._pt = {
      _next: f._pt,
      p: c || l === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ye(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, u = Ei.lastIndex);
  return f.c = u < r.length ? r.substring(u, r.length) : "", f.fp = o, (hn.test(r) || y) && (f.e = 0), this._pt = f, f;
}, pr = function(t, e, i, r, n, s, o, f, u, l) {
  W(r) && (r = r(n || 0, t, s));
  var h = t[e], _ = i !== "get" ? i : W(h) ? u ? t[e.indexOf("set") || !W(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, d = W(h) ? u ? ao : $n : mr, p;
  if (tt(r) && (~r.indexOf("random(") && (r = Ve(r)), r.charAt(1) === "=" && (p = ye(_, r) + (nt(_) || 0), (p || p === 0) && (r = p))), !l || _ !== r || Hi)
    return !isNaN(_ * r) && r !== "" ? (p = new _t(this._pt, t, e, +_ || 0, r - (_ || 0), typeof h == "boolean" ? fo : Xn, 0, d), u && (p.fp = u), o && p.modifier(o, this, t), this._pt = p) : (!h && !(e in t) && hr(e, r), io.call(this, t, e, _, r, d, f || xt.stringFilter, u));
}, ro = function(t, e, i, r, n) {
  if (W(t) && (t = Be(t, n, e, i, r)), !Nt(t) || t.style && t.nodeType || ot(t) || fn(t))
    return tt(t) ? Be(t, n, e, i, r) : t;
  var s = {}, o;
  for (o in t)
    s[o] = Be(t[o], n, e, i, r);
  return s;
}, jn = function(t, e, i, r, n, s) {
  var o, f, u, l;
  if (gt[t] && (o = new gt[t]()).init(n, o.rawVars ? e[t] : ro(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = f = new _t(i._pt, n, t, 0, 1, o.render, o, 0, o.priority), i !== ge))
    for (u = i._ptLookup[i._targets.indexOf(n)], l = o._props.length; l--; )
      u[o._props[l]] = f;
  return o;
}, $t, Hi, gr = function a(t, e, i) {
  var r = t.vars, n = r.ease, s = r.startAt, o = r.immediateRender, f = r.lazy, u = r.onUpdate, l = r.runBackwards, h = r.yoyoEase, _ = r.keyframes, d = r.autoRevert, p = t._dur, c = t._startAt, m = t._targets, y = t.parent, x = y && y.data === "nested" ? y.vars.targets : m, v = t._overwrite === "auto" && !ar, w = t.timeline, b, S, P, O, T, k, M, R, A, I, L, z, j;
  if (w && (!_ || !n) && (n = "none"), t._ease = se(n, Te.ease), t._yEase = h ? Fn(se(h === !0 ? n : h, Te.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), t._from = !w && !!r.runBackwards, !w || _ && !r.stagger) {
    if (R = m[0] ? re(m[0]).harness : 0, z = R && r[R.prop], b = ci(r, cr), c && (c._zTime < 0 && c.progress(1), e < 0 && l && o && !d ? c.render(-1, !0) : c.revert(l && p ? si : As), c._lazy = 0), s) {
      if (Ht(t._startAt = J.set(m, Ct({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !c && ht(f),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return yt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st || !o && !d) && t._startAt.revert(si), o && p && e <= 0 && i <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (l && p && !c) {
      if (e && (o = !1), P = Ct({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !c && ht(f),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), z && (P[R.prop] = z), Ht(t._startAt = J.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (st ? t._startAt.revert(si) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, V, V);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, f = p && ht(f) || f && !p, S = 0; S < m.length; S++) {
      if (T = m[S], M = T._gsap || dr(m)[S]._gsap, t._ptLookup[S] = I = {}, Ui[M.id] && Gt.length && hi(), L = x === m ? S : x.indexOf(T), R && (A = new R()).init(T, z || b, t, L, x) !== !1 && (t._pt = O = new _t(t._pt, T, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(Q) {
        I[Q] = O;
      }), A.priority && (k = 1)), !R || z)
        for (P in b)
          gt[P] && (A = jn(P, b, t, L, T, x)) ? A.priority && (k = 1) : I[P] = O = pr.call(t, T, P, "get", b[P], L, x, 0, r.stringFilter);
      t._op && t._op[S] && t.kill(T, t._op[S]), v && t._pt && ($t = t, q.killTweensOf(T, I, t.globalTime(e)), j = !t.parent, $t = 0), t._pt && f && (Ui[M.id] = 1);
    }
    k && Gn(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !j, _ && e <= 0 && w.render(St, !0, !0);
}, no = function(t, e, i, r, n, s, o, f) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], l, h, _, d;
  if (!u)
    for (u = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length; d--; ) {
      if (l = _[d][e], l && l.d && l.d._pt)
        for (l = l.d._pt; l && l.p !== e && l.fp !== e; )
          l = l._next;
      if (!l)
        return Hi = 1, t.vars[e] = "+=0", gr(t, o), Hi = 0, f ? Ye(e + " not eligible for reset") : 1;
      u.push(l);
    }
  for (d = u.length; d--; )
    h = u[d], l = h._pt || h, l.s = (r || r === 0) && !n ? r : l.s + (r || 0) + s * l.c, l.c = i - l.s, h.e && (h.e = H(i) + nt(h.e)), h.b && (h.b = l.s + nt(h.b));
}, so = function(t, e) {
  var i = t[0] ? re(t[0]).harness : 0, r = i && i.aliases, n, s, o, f;
  if (!r)
    return e;
  n = fe({}, e);
  for (s in r)
    if (s in n)
      for (f = r[s].split(","), o = f.length; o--; )
        n[f[o]] = n[s];
  return n;
}, oo = function(t, e, i, r) {
  var n = e.ease || r || "power1.inOut", s, o;
  if (ot(e))
    o = i[t] || (i[t] = []), e.forEach(function(f, u) {
      return o.push({
        t: u / (e.length - 1) * 100,
        v: f,
        e: n
      });
    });
  else
    for (s in e)
      o = i[s] || (i[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, Be = function(t, e, i, r, n) {
  return W(t) ? t.call(e, i, r, n) : tt(t) && ~t.indexOf("random(") ? Ve(t) : t;
}, Vn = _r + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Un = {};
ct(Vn + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Un[a] = 1;
});
var J = /* @__PURE__ */ function(a) {
  an(t, a);
  function t(i, r, n, s) {
    var o;
    typeof r == "number" && (n.duration = r, r = n, n = null), o = a.call(this, s ? r : ze(r)) || this;
    var f = o.vars, u = f.duration, l = f.delay, h = f.immediateRender, _ = f.stagger, d = f.overwrite, p = f.keyframes, c = f.defaults, m = f.scrollTrigger, y = f.yoyoEase, x = r.parent || q, v = (ot(i) || fn(i) ? jt(i[0]) : "length" in r) ? [i] : Pt(i), w, b, S, P, O, T, k, M;
    if (o._targets = v.length ? dr(v) : Ye("GSAP target " + i + " not found. https://gsap.com", !xt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || _ || ii(u) || ii(l)) {
      if (r = o.vars, w = o.timeline = new lt({
        data: "nested",
        defaults: c || {},
        targets: x && x.data === "nested" ? x.vars.targets : v
      }), w.kill(), w.parent = w._dp = Ft(o), w._start = 0, _ || ii(u) || ii(l)) {
        if (P = v.length, k = _ && Cn(_), Nt(_))
          for (O in _)
            ~Vn.indexOf(O) && (M || (M = {}), M[O] = _[O]);
        for (b = 0; b < P; b++)
          S = ci(r, Un), S.stagger = 0, y && (S.yoyoEase = y), M && fe(S, M), T = v[b], S.duration = +Be(u, Ft(o), b, T, v), S.delay = (+Be(l, Ft(o), b, T, v) || 0) - o._delay, !_ && P === 1 && S.delay && (o._delay = l = S.delay, o._start += l, S.delay = 0), w.to(T, S, k ? k(b, T, v) : 0), w._ease = N.none;
        w.duration() ? u = l = 0 : o.timeline = 0;
      } else if (p) {
        ze(Ct(w.vars.defaults, {
          ease: "none"
        })), w._ease = se(p.ease || r.ease || "none");
        var R = 0, A, I, L;
        if (ot(p))
          p.forEach(function(z) {
            return w.to(v, z, ">");
          }), w.duration();
        else {
          S = {};
          for (O in p)
            O === "ease" || O === "easeEach" || oo(O, p[O], S, p.easeEach);
          for (O in S)
            for (A = S[O].sort(function(z, j) {
              return z.t - j.t;
            }), R = 0, b = 0; b < A.length; b++)
              I = A[b], L = {
                ease: I.e,
                duration: (I.t - (b ? A[b - 1].t : 0)) / 100 * u
              }, L[O] = I.v, w.to(v, L, R), R += L.duration;
          w.duration() < u && w.to({}, {
            duration: u - w.duration()
          });
        }
      }
      u || o.duration(u = w.duration());
    } else
      o.timeline = 0;
    return d === !0 && !ar && ($t = Ft(o), q.killTweensOf(v), $t = 0), At(x, Ft(o), n), r.reversed && o.reverse(), r.paused && o.paused(!0), (h || !u && !p && o._start === K(x._time) && ht(h) && Fs(Ft(o)) && x.data !== "nested") && (o._tTime = -V, o.render(Math.max(0, -l) || 0)), m && wn(Ft(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(r, n, s) {
    var o = this._time, f = this._tDur, u = this._dur, l = r < 0, h = r > f - V && !l ? f : r < V ? 0 : r, _, d, p, c, m, y, x, v, w;
    if (!u)
      Is(this, r, n, s);
    else if (h !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== l) {
      if (_ = h, v = this.timeline, this._repeat) {
        if (c = u + this._rDelay, this._repeat < -1 && l)
          return this.totalTime(c * 100 + r, n, s);
        if (_ = K(h % c), h === f ? (p = this._repeat, _ = u) : (p = ~~(h / c), p && p === K(h / c) && (_ = u, p--), _ > u && (_ = u)), y = this._yoyo && p & 1, y && (w = this._yEase, _ = u - _), m = we(this._tTime, c), _ === o && !s && this._initted && p === m)
          return this._tTime = h, this;
        p !== m && (v && this._yEase && Bn(v, y), this.vars.repeatRefresh && !y && !this._lock && this._time !== c && this._initted && (this._lock = s = 1, this.render(K(c * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Sn(this, l ? r : _, s, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (u !== this._dur)
          return this.render(r, n, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (w || this._ease)(_ / u), this._from && (this.ratio = x = 1 - x), _ && !o && !n && !p && (yt(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(x, d.d), d = d._next;
      v && v.render(r < 0 ? r : v._dur * v._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = r), this._onUpdate && !n && (l && $i(this, r, n, s), yt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && yt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (l && !this._onUpdate && $i(this, r, !0, !0), (r || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Ht(this, 1), !n && !(l && !o) && (h || o || y) && (yt(this, h === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < f && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(r) {
    return (!r || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(r), a.prototype.invalidate.call(this, r);
  }, e.resetTo = function(r, n, s, o, f) {
    Ue || mt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), l;
    return this._initted || gr(this, u), l = this._ease(u / this._dur), no(this, r, n, s, o, l, u, f) ? this.resetTo(r, n, s, o, 1) : (wi(this, 0), this.parent || bn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(r, n) {
    if (n === void 0 && (n = "all"), !r && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Re(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(r, n, $t && $t.vars.overwrite !== !0)._first || Re(this), this.parent && s !== this.timeline.totalDuration() && Se(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, f = r ? Pt(r) : o, u = this._ptLookup, l = this._pt, h, _, d, p, c, m, y;
    if ((!n || n === "all") && Ls(o, f))
      return n === "all" && (this._pt = 0), Re(this);
    for (h = this._op = this._op || [], n !== "all" && (tt(n) && (c = {}, ct(n, function(x) {
      return c[x] = 1;
    }), n = c), n = so(o, n)), y = o.length; y--; )
      if (~f.indexOf(o[y])) {
        _ = u[y], n === "all" ? (h[y] = n, p = _, d = {}) : (d = h[y] = h[y] || {}, p = n);
        for (c in p)
          m = _ && _[c], m && ((!("kill" in m.d) || m.d.kill(c) === !0) && bi(this, m, "_pt"), delete _[c]), d !== "all" && (d[c] = 1);
      }
    return this._initted && !this._pt && l && Re(this), this;
  }, t.to = function(r, n) {
    return new t(r, n, arguments[2]);
  }, t.from = function(r, n) {
    return Fe(1, arguments);
  }, t.delayedCall = function(r, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: r,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(r, n, s) {
    return Fe(2, arguments);
  }, t.set = function(r, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(r, n);
  }, t.killTweensOf = function(r, n, s) {
    return q.killTweensOf(r, n, s);
  }, t;
}($e);
Ct(J.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ct("staggerTo,staggerFrom,staggerFromTo", function(a) {
  J[a] = function() {
    var t = new lt(), e = qi.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var mr = function(t, e, i) {
  return t[e] = i;
}, $n = function(t, e, i) {
  return t[e](i);
}, ao = function(t, e, i, r) {
  return t[e](r.fp, i);
}, uo = function(t, e, i) {
  return t.setAttribute(e, i);
}, yr = function(t, e) {
  return W(t[e]) ? $n : ur(t[e]) && t.setAttribute ? uo : mr;
}, Xn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, fo = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, qn = function(t, e) {
  var i = e._pt, r = "";
  if (!t && e.b)
    r = e.b;
  else if (t === 1 && e.e)
    r = e.e;
  else {
    for (; i; )
      r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r, i = i._next;
    r += e.c;
  }
  e.set(e.t, e.p, r, e);
}, xr = function(t, e) {
  for (var i = e._pt; i; )
    i.r(t, i.d), i = i._next;
}, lo = function(t, e, i, r) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === r && n.modifier(t, e, i), n = s;
}, ho = function(t) {
  for (var e = this._pt, i, r; e; )
    r = e._next, e.p === t && !e.op || e.op === t ? bi(this, e, "_pt") : e.dep || (i = 1), e = r;
  return !i;
}, co = function(t, e, i, r) {
  r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
}, Gn = function(t) {
  for (var e = t._pt, i, r, n, s; e; ) {
    for (i = e._next, r = n; r && r.pr > e.pr; )
      r = r._next;
    (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e, (e._next = r) ? r._prev = e : s = e, e = i;
  }
  t._pt = n;
}, _t = /* @__PURE__ */ function() {
  function a(e, i, r, n, s, o, f, u, l) {
    this.t = i, this.s = n, this.c = s, this.p = r, this.r = o || Xn, this.d = f || this, this.set = u || mr, this.pr = l || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(i, r, n) {
    this.mSet = this.mSet || this.set, this.set = co, this.m = i, this.mt = n, this.tween = r;
  }, a;
}();
ct(_r + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return cr[a] = 1;
});
vt.TweenMax = vt.TweenLite = J;
vt.TimelineLite = vt.TimelineMax = lt;
q = new lt({
  sortChildren: !1,
  defaults: Te,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
xt.stringFilter = zn;
var oe = [], ai = {}, _o = [], jr = 0, po = 0, Di = function(t) {
  return (ai[t] || _o).map(function(e) {
    return e();
  });
}, Zi = function() {
  var t = Date.now(), e = [];
  t - jr > 2 && (Di("matchMediaInit"), oe.forEach(function(i) {
    var r = i.queries, n = i.conditions, s, o, f, u;
    for (o in r)
      s = Mt.matchMedia(r[o]).matches, s && (f = 1), s !== n[o] && (n[o] = s, u = 1);
    u && (i.revert(), f && e.push(i));
  }), Di("matchMediaRevert"), e.forEach(function(i) {
    return i.onMatch(i, function(r) {
      return i.add(null, r);
    });
  }), jr = t, Di("matchMedia"));
}, Wn = /* @__PURE__ */ function() {
  function a(e, i) {
    this.selector = i && Gi(i), this.data = [], this._r = [], this.isReverted = !1, this.id = po++, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    W(i) && (n = r, r = i, i = W);
    var s = this, o = function() {
      var u = U, l = s.selector, h;
      return u && u !== s && u.data.push(s), n && (s.selector = Gi(n)), U = s, h = r.apply(s, arguments), W(h) && s._r.push(h), U = u, s.selector = l, s.isReverted = !1, h;
    };
    return s.last = o, i === W ? o(s, function(f) {
      return s.add(null, f);
    }) : i ? s[i] = o : o;
  }, t.ignore = function(i) {
    var r = U;
    U = null, i(this), U = r;
  }, t.getTweens = function() {
    var i = [];
    return this.data.forEach(function(r) {
      return r instanceof a ? i.push.apply(i, r.getTweens()) : r instanceof J && !(r.parent && r.parent.data === "nested") && i.push(r);
    }), i;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(i, r) {
    var n = this;
    if (i ? function() {
      for (var o = n.getTweens(), f = n.data.length, u; f--; )
        u = n.data[f], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
          return o.splice(o.indexOf(l), 1);
        }));
      for (o.map(function(l) {
        return {
          g: l._dur || l._delay || l._sat && !l._sat.vars.immediateRender ? l.globalTime(0) : -1 / 0,
          t: l
        };
      }).sort(function(l, h) {
        return h.g - l.g || -1 / 0;
      }).forEach(function(l) {
        return l.t.revert(i);
      }), f = n.data.length; f--; )
        u = n.data[f], u instanceof lt ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof J) && u.revert && u.revert(i);
      n._r.forEach(function(l) {
        return l(i, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), r)
      for (var s = oe.length; s--; )
        oe[s].id === this.id && oe.splice(s, 1);
  }, t.revert = function(i) {
    this.kill(i || {});
  }, a;
}(), go = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, U && U.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(i, r, n) {
    Nt(i) || (i = {
      matches: i
    });
    var s = new Wn(0, n || this.scope), o = s.conditions = {}, f, u, l;
    U && !s.selector && (s.selector = U.selector), this.contexts.push(s), r = s.add("onMatch", r), s.queries = i;
    for (u in i)
      u === "all" ? l = 1 : (f = Mt.matchMedia(i[u]), f && (oe.indexOf(s) < 0 && oe.push(s), (o[u] = f.matches) && (l = 1), f.addListener ? f.addListener(Zi) : f.addEventListener("change", Zi)));
    return l && r(s, function(h) {
      return s.add(null, h);
    }), this;
  }, t.revert = function(i) {
    this.kill(i || {});
  }, t.kill = function(i) {
    this.contexts.forEach(function(r) {
      return r.kill(i, !0);
    });
  }, a;
}(), di = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function(r) {
      return Dn(r);
    });
  },
  timeline: function(t) {
    return new lt(t);
  },
  getTweensOf: function(t, e) {
    return q.getTweensOf(t, e);
  },
  getProperty: function(t, e, i, r) {
    tt(t) && (t = Pt(t)[0]);
    var n = re(t || {}).get, s = i ? vn : xn;
    return i === "native" && (i = ""), t && (e ? s((gt[e] && gt[e].get || n)(t, e, i, r)) : function(o, f, u) {
      return s((gt[o] && gt[o].get || n)(t, o, f, u));
    });
  },
  quickSetter: function(t, e, i) {
    if (t = Pt(t), t.length > 1) {
      var r = t.map(function(l) {
        return pt.quickSetter(l, e, i);
      }), n = r.length;
      return function(l) {
        for (var h = n; h--; )
          r[h](l);
      };
    }
    t = t[0] || {};
    var s = gt[e], o = re(t), f = o.harness && (o.harness.aliases || {})[e] || e, u = s ? function(l) {
      var h = new s();
      ge._pt = 0, h.init(t, i ? l + i : l, ge, 0, [t]), h.render(1, h), ge._pt && xr(1, ge);
    } : o.set(t, f);
    return s ? u : function(l) {
      return u(t, f, i ? l + i : l, o, 1);
    };
  },
  quickTo: function(t, e, i) {
    var r, n = pt.to(t, fe((r = {}, r[e] = "+=0.1", r.paused = !0, r), i || {})), s = function(f, u, l) {
      return n.resetTo(e, f, u, l);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return q.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = se(t.ease, Te.ease)), zr(Te, t || {});
  },
  config: function(t) {
    return zr(xt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, i = t.effect, r = t.plugins, n = t.defaults, s = t.extendTimeline;
    (r || "").split(",").forEach(function(o) {
      return o && !gt[o] && !vt[o] && Ye(e + " effect requires " + o + " plugin.");
    }), ki[e] = function(o, f, u) {
      return i(Pt(o), Ct(f || {}, n), u);
    }, s && (lt.prototype[e] = function(o, f, u) {
      return this.add(ki[e](o, Nt(f) ? f : (u = f) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    N[t] = se(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? se(t, e) : N;
  },
  getById: function(t) {
    return q.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var i = new lt(t), r, n;
    for (i.smoothChildTiming = ht(t.smoothChildTiming), q.remove(i), i._dp = 0, i._time = i._tTime = q._time, r = q._first; r; )
      n = r._next, (e || !(!r._dur && r instanceof J && r.vars.onComplete === r._targets[0])) && At(i, r, r._start - r._delay), r = n;
    return At(q, i, 0), i;
  },
  context: function(t, e) {
    return t ? new Wn(t, e) : U;
  },
  matchMedia: function(t) {
    return new go(t);
  },
  matchMediaRefresh: function() {
    return oe.forEach(function(t) {
      var e = t.conditions, i, r;
      for (r in e)
        e[r] && (e[r] = !1, i = 1);
      i && t.revert();
    }) || Zi();
  },
  addEventListener: function(t, e) {
    var i = ai[t] || (ai[t] = []);
    ~i.indexOf(e) || i.push(e);
  },
  removeEventListener: function(t, e) {
    var i = ai[t], r = i && i.indexOf(e);
    r >= 0 && i.splice(r, 1);
  },
  utils: {
    wrap: Gs,
    wrapYoyo: Ws,
    distribute: Cn,
    random: kn,
    snap: En,
    normalize: qs,
    getUnit: nt,
    clamp: Vs,
    splitColor: Nn,
    toArray: Pt,
    selector: Gi,
    mapRange: An,
    pipe: $s,
    unitize: Xs,
    interpolate: Hs,
    shuffle: On
  },
  install: dn,
  effects: ki,
  ticker: mt,
  updateRoot: lt.updateRoot,
  plugins: gt,
  globalTimeline: q,
  core: {
    PropTween: _t,
    globals: pn,
    Tween: J,
    Timeline: lt,
    Animation: $e,
    getCache: re,
    _removeLinkedListItem: bi,
    reverting: function() {
      return st;
    },
    context: function(t) {
      return t && U && (U.data.push(t), t._ctx = U), U;
    },
    suppressOverwrites: function(t) {
      return ar = t;
    }
  }
};
ct("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return di[a] = J[a];
});
mt.add(lt.updateRoot);
ge = di.to({}, {
  duration: 0
});
var mo = function(t, e) {
  for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
    i = i._next;
  return i;
}, yo = function(t, e) {
  var i = t._targets, r, n, s;
  for (r in e)
    for (n = i.length; n--; )
      s = t._ptLookup[n][r], s && (s = s.d) && (s._pt && (s = mo(s, r)), s && s.modifier && s.modifier(e[r], t, i[n], r));
}, Ni = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(r, n, s) {
      s._onInit = function(o) {
        var f, u;
        if (tt(n) && (f = {}, ct(n, function(l) {
          return f[l] = 1;
        }), n = f), e) {
          f = {};
          for (u in n)
            f[u] = e(n[u]);
          n = f;
        }
        yo(o, n);
      };
    }
  };
}, pt = di.registerPlugin({
  name: "attr",
  init: function(t, e, i, r, n) {
    var s, o, f;
    this.tween = i;
    for (s in e)
      f = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (f || 0) + "", e[s], r, n, 0, 0, s), o.op = s, o.b = f, this._props.push(s);
  },
  render: function(t, e) {
    for (var i = e._pt; i; )
      st ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), i = i._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var i = e.length; i--; )
      this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
  }
}, Ni("roundProps", Wi), Ni("modifiers"), Ni("snap", En)) || di;
J.version = lt.version = pt.version = "3.12.5";
_n = 1;
fr() && Pe();
N.Power0;
N.Power1;
N.Power2;
N.Power3;
N.Power4;
N.Linear;
N.Quad;
N.Cubic;
N.Quart;
N.Quint;
N.Strong;
N.Elastic;
N.Back;
N.SteppedEase;
N.Bounce;
N.Sine;
N.Expo;
N.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Vr, Xt, xe, vr, ie, Ur, br, xo = function() {
  return typeof window < "u";
}, Vt = {}, ee = 180 / Math.PI, ve = Math.PI / 180, _e = Math.atan2, $r = 1e8, Tr = /([A-Z])/g, vo = /(left|right|width|margin|padding|x)/i, bo = /[\s,\(]\S/, Rt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Ji = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, To = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, wo = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, So = function(t, e) {
  var i = e.s + e.c * t;
  e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
}, Hn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Zn = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Po = function(t, e, i) {
  return t.style[e] = i;
}, Oo = function(t, e, i) {
  return t.style.setProperty(e, i);
}, Co = function(t, e, i) {
  return t._gsap[e] = i;
}, Eo = function(t, e, i) {
  return t._gsap.scaleX = t._gsap.scaleY = i;
}, ko = function(t, e, i, r, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = i, s.renderTransform(n, s);
}, Mo = function(t, e, i, r, n) {
  var s = t._gsap;
  s[e] = i, s.renderTransform(n, s);
}, G = "transform", dt = G + "Origin", Ao = function a(t, e) {
  var i = this, r = this.target, n = r.style, s = r._gsap;
  if (t in Vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Rt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return i.tfm[o] = Bt(r, o);
      }) : this.tfm[t] = s.x ? s[t] : Bt(r, t), t === dt && (this.tfm.zOrigin = s.zOrigin);
    else
      return Rt.transform.split(",").forEach(function(o) {
        return a.call(i, o, e);
      });
    if (this.props.indexOf(G) >= 0)
      return;
    s.svg && (this.svgo = r.getAttribute("data-svg-origin"), this.props.push(dt, e, "")), t = G;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Jn = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Ro = function() {
  var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Tr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      r[s] = this.tfm[s];
    r.svg && (r.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = br(), (!n || !n.isStart) && !i[G] && (Jn(i), r.zOrigin && i[dt] && (i[dt] += " " + r.zOrigin + "px", r.zOrigin = 0, r.renderTransform()), r.uncache = 1);
  }
}, Qn = function(t, e) {
  var i = {
    target: t,
    props: [],
    revert: Ro,
    save: Ao
  };
  return t._gsap || pt.core.getCache(t), e && e.split(",").forEach(function(r) {
    return i.save(r);
  }), i;
}, Kn, Qi = function(t, e) {
  var i = Xt.createElementNS ? Xt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Xt.createElement(t);
  return i && i.style ? i : Xt.createElement(t);
}, Dt = function a(t, e, i) {
  var r = getComputedStyle(t);
  return r[e] || r.getPropertyValue(e.replace(Tr, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && a(t, Oe(e) || e, 1) || "";
}, Xr = "O,Moz,ms,Ms,Webkit".split(","), Oe = function(t, e, i) {
  var r = e || ie, n = r.style, s = 5;
  if (t in n && !i)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Xr[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Xr[s] : "") + t;
}, Ki = function() {
  xo() && window.document && (Vr = window, Xt = Vr.document, xe = Xt.documentElement, ie = Qi("div") || {
    style: {}
  }, Qi("div"), G = Oe(G), dt = G + "Origin", ie.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Kn = !!Oe("perspective"), br = pt.core.reverting, vr = 1);
}, Li = function a(t) {
  var e = Qi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
  if (xe.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return i && (r ? i.insertBefore(this, r) : i.appendChild(this)), xe.removeChild(e), this.style.cssText = n, s;
}, qr = function(t, e) {
  for (var i = e.length; i--; )
    if (t.hasAttribute(e[i]))
      return t.getAttribute(e[i]);
}, ts = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Li.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Li || (e = Li.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +qr(t, ["x", "cx", "x1"]) || 0,
    y: +qr(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, es = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ts(t));
}, le = function(t, e) {
  if (e) {
    var i = t.style, r;
    e in Vt && e !== dt && (e = G), i.removeProperty ? (r = e.substr(0, 2), (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), i.removeProperty(r === "--" ? e : e.replace(Tr, "-$1").toLowerCase())) : i.removeAttribute(e);
  }
}, qt = function(t, e, i, r, n, s) {
  var o = new _t(t._pt, e, i, 0, 1, s ? Zn : Hn);
  return t._pt = o, o.b = r, o.e = n, t._props.push(i), o;
}, Gr = {
  deg: 1,
  rad: 1,
  turn: 1
}, Do = {
  grid: 1,
  flex: 1
}, Zt = function a(t, e, i, r) {
  var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", o = ie.style, f = vo.test(e), u = t.tagName.toLowerCase() === "svg", l = (u ? "client" : "offset") + (f ? "Width" : "Height"), h = 100, _ = r === "px", d = r === "%", p, c, m, y;
  if (r === s || !n || Gr[r] || Gr[s])
    return n;
  if (s !== "px" && !_ && (n = a(t, e, i, "px")), y = t.getCTM && es(t), (d || s === "%") && (Vt[e] || ~e.indexOf("adius")))
    return p = y ? t.getBBox()[f ? "width" : "height"] : t[l], H(d ? n / p * h : n / 100 * p);
  if (o[f ? "width" : "height"] = h + (_ ? s : r), c = ~e.indexOf("adius") || r === "em" && t.appendChild && !u ? t : t.parentNode, y && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Xt || !c.appendChild) && (c = Xt.body), m = c._gsap, m && d && m.width && f && m.time === mt.time && !m.uncache)
    return H(n / m.width * h);
  if (d && (e === "height" || e === "width")) {
    var x = t.style[e];
    t.style[e] = h + r, p = t[l], x ? t.style[e] = x : le(t, e);
  } else
    (d || s === "%") && !Do[Dt(c, "display")] && (o.position = Dt(t, "position")), c === t && (o.position = "static"), c.appendChild(ie), p = ie[l], c.removeChild(ie), o.position = "absolute";
  return f && d && (m = re(c), m.time = mt.time, m.width = c[l]), H(_ ? p * n / h : p && n ? h / p * n : 0);
}, Bt = function(t, e, i, r) {
  var n;
  return vr || Ki(), e in Rt && e !== "transform" && (e = Rt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Vt[e] && e !== "transform" ? (n = qe(t, r), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : gi(Dt(t, dt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = pi[e] && pi[e](t, e, i) || Dt(t, e) || mn(t, e) || (e === "opacity" ? 1 : 0))), i && !~(n + "").trim().indexOf(" ") ? Zt(t, e, n, i) + i : n;
}, No = function(t, e, i, r) {
  if (!i || i === "none") {
    var n = Oe(e, t, 1), s = n && Dt(t, n, 1);
    s && s !== i ? (e = n, i = s) : e === "borderColor" && (i = Dt(t, "borderTopColor"));
  }
  var o = new _t(this._pt, t.style, e, 0, 1, qn), f = 0, u = 0, l, h, _, d, p, c, m, y, x, v, w, b;
  if (o.b = i, o.e = r, i += "", r += "", r === "auto" && (c = t.style[e], t.style[e] = r, r = Dt(t, e) || r, c ? t.style[e] = c : le(t, e)), l = [i, r], zn(l), i = l[0], r = l[1], _ = i.match(pe) || [], b = r.match(pe) || [], b.length) {
    for (; h = pe.exec(r); )
      m = h[0], x = r.substring(f, h.index), p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1), m !== (c = _[u++] || "") && (d = parseFloat(c) || 0, w = c.substr((d + "").length), m.charAt(1) === "=" && (m = ye(d, m) + w), y = parseFloat(m), v = m.substr((y + "").length), f = pe.lastIndex - v.length, v || (v = v || xt.units[e] || w, f === r.length && (r += v, o.e += v)), w !== v && (d = Zt(t, e, c, v) || 0), o._pt = {
        _next: o._pt,
        p: x || u === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: y - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = f < r.length ? r.substring(f, r.length) : "";
  } else
    o.r = e === "display" && r === "none" ? Zn : Hn;
  return hn.test(r) && (o.e = 0), this._pt = o, o;
}, Wr = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Lo = function(t) {
  var e = t.split(" "), i = e[0], r = e[1] || "50%";
  return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i, i = r, r = t), e[0] = Wr[i] || i, e[1] = Wr[r] || r, e.join(" ");
}, zo = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var i = e.t, r = i.style, n = e.u, s = i._gsap, o, f, u;
    if (n === "all" || n === !0)
      r.cssText = "", f = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        o = n[u], Vt[o] && (f = 1, o = o === "transformOrigin" ? dt : G), le(i, o);
    f && (le(i, G), s && (s.svg && i.removeAttribute("transform"), qe(i, 1), s.uncache = 1, Jn(r)));
  }
}, pi = {
  clearProps: function(t, e, i, r, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new _t(t._pt, e, i, 0, 0, zo);
      return s.u = r, s.pr = -10, s.tween = n, t._props.push(i), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Xe = [1, 0, 0, 1, 0, 0], is = {}, rs = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Hr = function(t) {
  var e = Dt(t, G);
  return rs(e) ? Xe : e.substr(7).match(ln).map(H);
}, wr = function(t, e) {
  var i = t._gsap || re(t), r = t.style, n = Hr(t), s, o, f, u;
  return i.svg && t.getAttribute("transform") ? (f = t.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? Xe : n) : (n === Xe && !t.offsetParent && t !== xe && !i.svg && (f = r.display, r.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (u = 1, o = t.nextElementSibling, xe.appendChild(t)), n = Hr(t), f ? r.display = f : le(t, "display"), u && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : xe.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, tr = function(t, e, i, r, n, s) {
  var o = t._gsap, f = n || wr(t, !0), u = o.xOrigin || 0, l = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, d = f[0], p = f[1], c = f[2], m = f[3], y = f[4], x = f[5], v = e.split(" "), w = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, S, P, O, T;
  i ? f !== Xe && (P = d * m - p * c) && (O = w * (m / P) + b * (-c / P) + (c * x - m * y) / P, T = w * (-p / P) + b * (d / P) - (d * x - p * y) / P, w = O, b = T) : (S = ts(t), w = S.x + (~v[0].indexOf("%") ? w / 100 * S.width : w), b = S.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * S.height : b)), r || r !== !1 && o.smooth ? (y = w - u, x = b - l, o.xOffset = h + (y * d + x * c) - y, o.yOffset = _ + (y * p + x * m) - x) : o.xOffset = o.yOffset = 0, o.xOrigin = w, o.yOrigin = b, o.smooth = !!r, o.origin = e, o.originIsAbsolute = !!i, t.style[dt] = "0px 0px", s && (qt(s, o, "xOrigin", u, w), qt(s, o, "yOrigin", l, b), qt(s, o, "xOffset", h, o.xOffset), qt(s, o, "yOffset", _, o.yOffset)), t.setAttribute("data-svg-origin", w + " " + b);
}, qe = function(t, e) {
  var i = t._gsap || new Yn(t);
  if ("x" in i && !e && !i.uncache)
    return i;
  var r = t.style, n = i.scaleX < 0, s = "px", o = "deg", f = getComputedStyle(t), u = Dt(t, dt) || "0", l, h, _, d, p, c, m, y, x, v, w, b, S, P, O, T, k, M, R, A, I, L, z, j, Q, at, Et, $, bt, et, Z, ut;
  return l = h = _ = c = m = y = x = v = w = 0, d = p = 1, i.svg = !!(t.getCTM && es(t)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (r[G] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[G] !== "none" ? f[G] : "")), r.scale = r.rotate = r.translate = "none"), P = wr(t, i.svg), i.svg && (i.uncache ? (Q = t.getBBox(), u = i.xOrigin - Q.x + "px " + (i.yOrigin - Q.y) + "px", j = "") : j = !e && t.getAttribute("data-svg-origin"), tr(t, j || u, !!j || i.originIsAbsolute, i.smooth !== !1, P)), b = i.xOrigin || 0, S = i.yOrigin || 0, P !== Xe && (M = P[0], R = P[1], A = P[2], I = P[3], l = L = P[4], h = z = P[5], P.length === 6 ? (d = Math.sqrt(M * M + R * R), p = Math.sqrt(I * I + A * A), c = M || R ? _e(R, M) * ee : 0, x = A || I ? _e(A, I) * ee + c : 0, x && (p *= Math.abs(Math.cos(x * ve))), i.svg && (l -= b - (b * M + S * A), h -= S - (b * R + S * I))) : (ut = P[6], et = P[7], Et = P[8], $ = P[9], bt = P[10], Z = P[11], l = P[12], h = P[13], _ = P[14], O = _e(ut, bt), m = O * ee, O && (T = Math.cos(-O), k = Math.sin(-O), j = L * T + Et * k, Q = z * T + $ * k, at = ut * T + bt * k, Et = L * -k + Et * T, $ = z * -k + $ * T, bt = ut * -k + bt * T, Z = et * -k + Z * T, L = j, z = Q, ut = at), O = _e(-A, bt), y = O * ee, O && (T = Math.cos(-O), k = Math.sin(-O), j = M * T - Et * k, Q = R * T - $ * k, at = A * T - bt * k, Z = I * k + Z * T, M = j, R = Q, A = at), O = _e(R, M), c = O * ee, O && (T = Math.cos(O), k = Math.sin(O), j = M * T + R * k, Q = L * T + z * k, R = R * T - M * k, z = z * T - L * k, M = j, L = Q), m && Math.abs(m) + Math.abs(c) > 359.9 && (m = c = 0, y = 180 - y), d = H(Math.sqrt(M * M + R * R + A * A)), p = H(Math.sqrt(z * z + ut * ut)), O = _e(L, z), x = Math.abs(O) > 2e-4 ? O * ee : 0, w = Z ? 1 / (Z < 0 ? -Z : Z) : 0), i.svg && (j = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !rs(Dt(t, G)), j && t.setAttribute("transform", j))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (d *= -1, x += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (p *= -1, x += x <= 0 ? 180 : -180)), e = e || i.uncache, i.x = l - ((i.xPercent = l && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s, i.y = h - ((i.yPercent = h && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s, i.z = _ + s, i.scaleX = H(d), i.scaleY = H(p), i.rotation = H(c) + o, i.rotationX = H(m) + o, i.rotationY = H(y) + o, i.skewX = x + o, i.skewY = v + o, i.transformPerspective = w + s, (i.zOrigin = parseFloat(u.split(" ")[2]) || !e && i.zOrigin || 0) && (r[dt] = gi(u)), i.xOffset = i.yOffset = 0, i.force3D = xt.force3D, i.renderTransform = i.svg ? Bo : Kn ? ns : Fo, i.uncache = 0, i;
}, gi = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, zi = function(t, e, i) {
  var r = nt(e);
  return H(parseFloat(e) + parseFloat(Zt(t, "x", i + "px", r))) + r;
}, Fo = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ns(t, e);
}, Kt = "0deg", Me = "0px", te = ") ", ns = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, f = i.z, u = i.rotation, l = i.rotationY, h = i.rotationX, _ = i.skewX, d = i.skewY, p = i.scaleX, c = i.scaleY, m = i.transformPerspective, y = i.force3D, x = i.target, v = i.zOrigin, w = "", b = y === "auto" && t && t !== 1 || y === !0;
  if (v && (h !== Kt || l !== Kt)) {
    var S = parseFloat(l) * ve, P = Math.sin(S), O = Math.cos(S), T;
    S = parseFloat(h) * ve, T = Math.cos(S), s = zi(x, s, P * T * -v), o = zi(x, o, -Math.sin(S) * -v), f = zi(x, f, O * T * -v + v);
  }
  m !== Me && (w += "perspective(" + m + te), (r || n) && (w += "translate(" + r + "%, " + n + "%) "), (b || s !== Me || o !== Me || f !== Me) && (w += f !== Me || b ? "translate3d(" + s + ", " + o + ", " + f + ") " : "translate(" + s + ", " + o + te), u !== Kt && (w += "rotate(" + u + te), l !== Kt && (w += "rotateY(" + l + te), h !== Kt && (w += "rotateX(" + h + te), (_ !== Kt || d !== Kt) && (w += "skew(" + _ + ", " + d + te), (p !== 1 || c !== 1) && (w += "scale(" + p + ", " + c + te), x.style[G] = w || "translate(0, 0)";
}, Bo = function(t, e) {
  var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, o = i.y, f = i.rotation, u = i.skewX, l = i.skewY, h = i.scaleX, _ = i.scaleY, d = i.target, p = i.xOrigin, c = i.yOrigin, m = i.xOffset, y = i.yOffset, x = i.forceCSS, v = parseFloat(s), w = parseFloat(o), b, S, P, O, T;
  f = parseFloat(f), u = parseFloat(u), l = parseFloat(l), l && (l = parseFloat(l), u += l, f += l), f || u ? (f *= ve, u *= ve, b = Math.cos(f) * h, S = Math.sin(f) * h, P = Math.sin(f - u) * -_, O = Math.cos(f - u) * _, u && (l *= ve, T = Math.tan(u - l), T = Math.sqrt(1 + T * T), P *= T, O *= T, l && (T = Math.tan(l), T = Math.sqrt(1 + T * T), b *= T, S *= T)), b = H(b), S = H(S), P = H(P), O = H(O)) : (b = h, O = _, S = P = 0), (v && !~(s + "").indexOf("px") || w && !~(o + "").indexOf("px")) && (v = Zt(d, "x", s, "px"), w = Zt(d, "y", o, "px")), (p || c || m || y) && (v = H(v + p - (p * b + c * P) + m), w = H(w + c - (p * S + c * O) + y)), (r || n) && (T = d.getBBox(), v = H(v + r / 100 * T.width), w = H(w + n / 100 * T.height)), T = "matrix(" + b + "," + S + "," + P + "," + O + "," + v + "," + w + ")", d.setAttribute("transform", T), x && (d.style[G] = T);
}, Io = function(t, e, i, r, n) {
  var s = 360, o = tt(n), f = parseFloat(n) * (o && ~n.indexOf("rad") ? ee : 1), u = f - r, l = r + u + "deg", h, _;
  return o && (h = n.split("_")[1], h === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), h === "cw" && u < 0 ? u = (u + s * $r) % s - ~~(u / s) * s : h === "ccw" && u > 0 && (u = (u - s * $r) % s - ~~(u / s) * s)), t._pt = _ = new _t(t._pt, e, i, r, u, To), _.e = l, _.u = "deg", t._props.push(i), _;
}, Zr = function(t, e) {
  for (var i in e)
    t[i] = e[i];
  return t;
}, Yo = function(t, e, i) {
  var r = Zr({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, o, f, u, l, h, _, d, p;
  r.svg ? (u = i.getAttribute("transform"), i.setAttribute("transform", ""), s[G] = e, o = qe(i, 1), le(i, G), i.setAttribute("transform", u)) : (u = getComputedStyle(i)[G], s[G] = e, o = qe(i, 1), s[G] = u);
  for (f in Vt)
    u = r[f], l = o[f], u !== l && n.indexOf(f) < 0 && (d = nt(u), p = nt(l), h = d !== p ? Zt(i, f, u, p) : parseFloat(u), _ = parseFloat(l), t._pt = new _t(t._pt, o, f, h, _ - h, Ji), t._pt.u = p || 0, t._props.push(f));
  Zr(o, r);
};
ct("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", i = "Right", r = "Bottom", n = "Left", s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  pi[t > 1 ? "border" + a : a] = function(o, f, u, l, h) {
    var _, d;
    if (arguments.length < 4)
      return _ = s.map(function(p) {
        return Bt(o, p, u);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (l + "").split(" "), d = {}, s.forEach(function(p, c) {
      return d[p] = _[c] = _[c] || _[(c - 1) / 2 | 0];
    }), o.init(f, d, h);
  };
});
var ss = {
  name: "css",
  register: Ki,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, i, r, n) {
    var s = this._props, o = t.style, f = i.vars.startAt, u, l, h, _, d, p, c, m, y, x, v, w, b, S, P, O;
    vr || Ki(), this.styles = this.styles || Qn(t), O = this.styles.props, this.tween = i;
    for (c in e)
      if (c !== "autoRound" && (l = e[c], !(gt[c] && jn(c, e, i, r, t, n)))) {
        if (d = typeof l, p = pi[c], d === "function" && (l = l.call(i, r, t, n), d = typeof l), d === "string" && ~l.indexOf("random(") && (l = Ve(l)), p)
          p(this, t, c, l, i) && (P = 1);
        else if (c.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(c) + "").trim(), l += "", Wt.lastIndex = 0, Wt.test(u) || (m = nt(u), y = nt(l)), y ? m !== y && (u = Zt(t, c, u, y) + y) : m && (l += m), this.add(o, "setProperty", u, l, r, n, 0, 0, c), s.push(c), O.push(c, 0, o[c]);
        else if (d !== "undefined") {
          if (f && c in f ? (u = typeof f[c] == "function" ? f[c].call(i, r, t, n) : f[c], tt(u) && ~u.indexOf("random(") && (u = Ve(u)), nt(u + "") || u === "auto" || (u += xt.units[c] || nt(Bt(t, c)) || ""), (u + "").charAt(1) === "=" && (u = Bt(t, c))) : u = Bt(t, c), _ = parseFloat(u), x = d === "string" && l.charAt(1) === "=" && l.substr(0, 2), x && (l = l.substr(2)), h = parseFloat(l), c in Rt && (c === "autoAlpha" && (_ === 1 && Bt(t, "visibility") === "hidden" && h && (_ = 0), O.push("visibility", 0, o.visibility), qt(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), c !== "scale" && c !== "transform" && (c = Rt[c], ~c.indexOf(",") && (c = c.split(",")[0]))), v = c in Vt, v) {
            if (this.styles.save(c), w || (b = t._gsap, b.renderTransform && !e.parseTransform || qe(t, e.parseTransform), S = e.smoothOrigin !== !1 && b.smooth, w = this._pt = new _t(this._pt, o, G, 0, 1, b.renderTransform, b, 0, -1), w.dep = 1), c === "scale")
              this._pt = new _t(this._pt, b, "scaleY", b.scaleY, (x ? ye(b.scaleY, x + h) : h) - b.scaleY || 0, Ji), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              O.push(dt, 0, o[dt]), l = Lo(l), b.svg ? tr(t, l, 0, S, 0, this) : (y = parseFloat(l.split(" ")[2]) || 0, y !== b.zOrigin && qt(this, b, "zOrigin", b.zOrigin, y), qt(this, o, c, gi(u), gi(l)));
              continue;
            } else if (c === "svgOrigin") {
              tr(t, l, 1, S, 0, this);
              continue;
            } else if (c in is) {
              Io(this, b, c, _, x ? ye(_, x + l) : l);
              continue;
            } else if (c === "smoothOrigin") {
              qt(this, b, "smooth", b.smooth, l);
              continue;
            } else if (c === "force3D") {
              b[c] = l;
              continue;
            } else if (c === "transform") {
              Yo(this, l, t);
              continue;
            }
          } else c in o || (c = Oe(c) || c);
          if (v || (h || h === 0) && (_ || _ === 0) && !bo.test(l) && c in o)
            m = (u + "").substr((_ + "").length), h || (h = 0), y = nt(l) || (c in xt.units ? xt.units[c] : m), m !== y && (_ = Zt(t, c, u, y)), this._pt = new _t(this._pt, v ? b : o, c, _, (x ? ye(_, x + h) : h) - _, !v && (y === "px" || c === "zIndex") && e.autoRound !== !1 ? So : Ji), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = u, this._pt.r = wo);
          else if (c in o)
            No.call(this, t, c, u, x ? x + l : l);
          else if (c in t)
            this.add(t, c, u || t[c], x ? x + l : l, r, n);
          else if (c !== "parseTransform") {
            hr(c, l);
            continue;
          }
          v || (c in o ? O.push(c, 0, o[c]) : O.push(c, 1, u || t[c])), s.push(c);
        }
      }
    P && Gn(this);
  },
  render: function(t, e) {
    if (e.tween._time || !br())
      for (var i = e._pt; i; )
        i.r(t, i.d), i = i._next;
    else
      e.styles.revert();
  },
  get: Bt,
  aliases: Rt,
  getSetter: function(t, e, i) {
    var r = Rt[e];
    return r && r.indexOf(",") < 0 && (e = r), e in Vt && e !== dt && (t._gsap.x || Bt(t, "x")) ? i && Ur === i ? e === "scale" ? Eo : Co : (Ur = i || {}) && (e === "scale" ? ko : Mo) : t.style && !ur(t.style[e]) ? Po : ~e.indexOf("-") ? Oo : yr(t, e);
  },
  core: {
    _removeProperty: le,
    _getMatrix: wr
  }
};
pt.utils.checkPrefix = Oe;
pt.core.getStyleSaver = Qn;
(function(a, t, e, i) {
  var r = ct(a + "," + t + "," + e, function(n) {
    Vt[n] = 1;
  });
  ct(t, function(n) {
    xt.units[n] = "deg", is[n] = 1;
  }), Rt[r[13]] = a + "," + t, ct(i, function(n) {
    var s = n.split(":");
    Rt[s[1]] = r[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ct("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  xt.units[a] = "px";
});
pt.registerPlugin(ss);
var os = pt.registerPlugin(ss) || pt;
os.core.Tween;
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var jo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Vo = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Uo = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, $o = /(^[#\.][a-z]|[a-y][a-z])/i, Xo = Math.PI / 180, qo = 180 / Math.PI, ri = Math.sin, ni = Math.cos, Ot = Math.abs, It = Math.sqrt, Go = Math.atan2, er = 1e8, Jr = function(t) {
  return typeof t == "string";
}, as = function(t) {
  return typeof t == "number";
}, Wo = function(t) {
  return typeof t > "u";
}, Ho = {}, Zo = {}, mi = 1e5, us = function(t) {
  return Math.round((t + er) % 1 * mi) / mi || (t < 0 ? 0 : 1);
}, B = function(t) {
  return Math.round(t * mi) / mi || 0;
}, Qr = function(t) {
  return Math.round(t * 1e10) / 1e10 || 0;
}, Kr = function(t, e, i, r) {
  var n = t[e], s = r === 1 ? 6 : ir(n, i, r);
  if ((s || !r) && s + i + 2 < n.length)
    return t.splice(e, 0, n.slice(0, i + s + 2)), n.splice(0, i + s), 1;
}, fs = function(t, e, i) {
  var r = t.length, n = ~~(i * r);
  if (t[n] > e) {
    for (; --n && t[n] > e; )
      ;
    n < 0 && (n = 0);
  } else
    for (; t[++n] < e && n < r; )
      ;
  return n < r ? n : r - 1;
}, Jo = function(t, e) {
  var i = t.length;
  for (t.reverse(); i--; )
    t[i].reversed || ta(t[i]);
}, tn = function(t, e) {
  return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e;
}, Qo = function(t, e) {
  var i = t.length, r = t[i - 1] || [], n = r.length;
  i && e[0] === r[n - 2] && e[1] === r[n - 1] && (e = r.concat(e.slice(2)), i--), t[i] = e;
};
function ui(a) {
  a = Jr(a) && $o.test(a) && document.querySelector(a) || a;
  var t = a.getAttribute ? a : 0, e;
  return t && (a = a.getAttribute("d")) ? (t._gsPath || (t._gsPath = {}), e = t._gsPath[a], e && !e._dirty ? e : t._gsPath[a] = yi(a)) : a ? Jr(a) ? yi(a) : as(a[0]) ? [a] : a : console.warn("Expecting a <path> element or an SVG path data string");
}
function Ko(a) {
  for (var t = [], e = 0; e < a.length; e++)
    t[e] = tn(a[e], a[e].slice(0));
  return tn(a, t);
}
function ta(a) {
  var t = 0, e;
  for (a.reverse(); t < a.length; t += 2)
    e = a[t], a[t] = a[t + 1], a[t + 1] = e;
  a.reversed = !a.reversed;
}
var ea = function(t, e) {
  var i = document.createElementNS("http://www.w3.org/2000/svg", "path"), r = [].slice.call(t.attributes), n = r.length, s;
  for (e = "," + e + ","; --n > -1; )
    s = r[n].nodeName.toLowerCase(), e.indexOf("," + s + ",") < 0 && i.setAttributeNS(null, s, r[n].nodeValue);
  return i;
}, ia = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, ra = function(t, e) {
  for (var i = e ? e.split(",") : [], r = {}, n = i.length; --n > -1; )
    r[i[n]] = +t.getAttribute(i[n]) || 0;
  return r;
};
function na(a, t) {
  var e = a.tagName.toLowerCase(), i = 0.552284749831, r, n, s, o, f, u, l, h, _, d, p, c, m, y, x, v, w, b, S, P, O, T;
  return e === "path" || !a.getBBox ? a : (u = ea(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), T = ra(a, ia[e]), e === "rect" ? (o = T.rx, f = T.ry || o, n = T.x, s = T.y, d = T.width - o * 2, p = T.height - f * 2, o || f ? (c = n + o * (1 - i), m = n + o, y = m + d, x = y + o * i, v = y + o, w = s + f * (1 - i), b = s + f, S = b + p, P = S + f * i, O = S + f, r = "M" + v + "," + b + " V" + S + " C" + [v, P, x, O, y, O, y - (y - m) / 3, O, m + (y - m) / 3, O, m, O, c, O, n, P, n, S, n, S - (S - b) / 3, n, b + (S - b) / 3, n, b, n, w, c, s, m, s, m + (y - m) / 3, s, y - (y - m) / 3, s, y, s, x, s, v, w, v, b].join(",") + "z") : r = "M" + (n + d) + "," + s + " v" + p + " h" + -d + " v" + -p + " h" + d + "z") : e === "circle" || e === "ellipse" ? (e === "circle" ? (o = f = T.r, h = o * i) : (o = T.rx, f = T.ry, h = f * i), n = T.cx, s = T.cy, l = o * i, r = "M" + (n + o) + "," + s + " C" + [n + o, s + h, n + l, s + f, n, s + f, n - l, s + f, n - o, s + h, n - o, s, n - o, s - h, n - l, s - f, n, s - f, n + l, s - f, n + o, s - h, n + o, s].join(",") + "z") : e === "line" ? r = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : (e === "polyline" || e === "polygon") && (_ = (a.getAttribute("points") + "").match(Vo) || [], n = _.shift(), s = _.shift(), r = "M" + n + "," + s + " L" + _.join(","), e === "polygon" && (r += "," + n + "," + s + "z")), u.setAttribute("d", cs(u._gsRawPath = yi(r))), t && a.parentNode && (a.parentNode.insertBefore(u, a), a.parentNode.removeChild(a)), u);
}
function ls(a, t, e) {
  var i = a[t], r = a[t + 2], n = a[t + 4], s;
  return i += (r - i) * e, r += (n - r) * e, i += (r - i) * e, s = r + (n + (a[t + 6] - n) * e - r) * e - i, i = a[t + 1], r = a[t + 3], n = a[t + 5], i += (r - i) * e, r += (n - r) * e, i += (r - i) * e, B(Go(r + (n + (a[t + 7] - n) * e - r) * e - i, s) * qo);
}
function hs(a, t, e) {
  e = Wo(e) ? 1 : Qr(e) || 0, t = Qr(t) || 0;
  var i = Math.max(0, ~~(Ot(e - t) - 1e-8)), r = Ko(a);
  if (t > e && (t = 1 - t, e = 1 - e, Jo(r), r.totalLength = 0), t < 0 || e < 0) {
    var n = Math.abs(~~Math.min(t, e)) + 1;
    t += n, e += n;
  }
  r.totalLength || ae(r);
  var s = e > 1, o = en(r, t, Ho, !0), f = en(r, e, Zo), u = f.segment, l = o.segment, h = f.segIndex, _ = o.segIndex, d = f.i, p = o.i, c = _ === h, m = d === p && c, y, x, v, w, b, S, P, O;
  if (s || i) {
    for (y = h < _ || c && d < p || m && f.t < o.t, Kr(r, _, p, o.t) && (_++, y || (h++, m ? (f.t = (f.t - o.t) / (1 - o.t), d = 0) : c && (d -= p))), Math.abs(1 - (e - t)) < 1e-5 ? h = _ - 1 : !f.t && h ? h-- : Kr(r, h, d, f.t) && y && _++, o.t === 1 && (_ = (_ + 1) % r.length), b = [], S = r.length, P = 1 + S * i, O = _, P += (S - _ + h) % S, w = 0; w < P; w++)
      Qo(b, r[O++ % S]);
    r = b;
  } else if (v = f.t === 1 ? 6 : ir(u, d, f.t), t !== e)
    for (x = ir(l, p, m ? o.t / f.t : o.t), c && (v += x), u.splice(d + v + 2), (x || p) && l.splice(0, p + x), w = r.length; w--; )
      (w < _ || w > h) && r.splice(w, 1);
  else
    u.angle = ls(u, d + v, 0), d += v, o = u[d], f = u[d + 1], u.length = u.totalLength = 0, u.totalPoints = r.totalPoints = 8, u.push(o, f, o, f, o, f, o, f);
  return r.totalLength = 0, r;
}
function sa(a, t, e) {
  t = t || 0, a.samples || (a.samples = [], a.lookup = []);
  var i = ~~a.resolution || 12, r = 1 / i, n = a.length, s = a[t], o = a[t + 1], f = t ? t / 6 * i : 0, u = a.samples, l = a.lookup, h = (t ? a.minLength : er) || er, _ = u[f + e * i - 1], d = t ? u[f - 1] : 0, p, c, m, y, x, v, w, b, S, P, O, T, k, M, R, A, I;
  for (u.length = l.length = 0, c = t + 2; c < n; c += 6) {
    if (m = a[c + 4] - s, y = a[c + 2] - s, x = a[c] - s, b = a[c + 5] - o, S = a[c + 3] - o, P = a[c + 1] - o, v = w = O = T = 0, Ot(m) < 0.01 && Ot(b) < 0.01 && Ot(x) + Ot(P) < 0.01)
      a.length > 8 && (a.splice(c, 6), c -= 6, n -= 6);
    else
      for (p = 1; p <= i; p++)
        M = r * p, k = 1 - M, v = w - (w = (M * M * m + 3 * k * (M * y + k * x)) * M), O = T - (T = (M * M * b + 3 * k * (M * S + k * P)) * M), A = It(O * O + v * v), A < h && (h = A), d += A, u[f++] = d;
    s += m, o += b;
  }
  if (_)
    for (_ -= d; f < u.length; f++)
      u[f] += _;
  if (u.length && h) {
    if (a.totalLength = I = u[u.length - 1] || 0, a.minLength = h, I / h < 9999)
      for (A = R = 0, p = 0; p < I; p += h)
        l[A++] = u[R] < p ? ++R : R;
  } else
    a.totalLength = u[0] = 0;
  return t ? d - u[t / 2 - 1] : d;
}
function ae(a, t) {
  var e, i, r;
  for (r = e = i = 0; r < a.length; r++)
    a[r].resolution = ~~t || 12, i += a[r].length, e += sa(a[r]);
  return a.totalPoints = i, a.totalLength = e, a;
}
function ir(a, t, e) {
  if (e <= 0 || e >= 1)
    return 0;
  var i = a[t], r = a[t + 1], n = a[t + 2], s = a[t + 3], o = a[t + 4], f = a[t + 5], u = a[t + 6], l = a[t + 7], h = i + (n - i) * e, _ = n + (o - n) * e, d = r + (s - r) * e, p = s + (f - s) * e, c = h + (_ - h) * e, m = d + (p - d) * e, y = o + (u - o) * e, x = f + (l - f) * e;
  return _ += (y - _) * e, p += (x - p) * e, a.splice(
    t + 2,
    4,
    B(h),
    //first control point
    B(d),
    B(c),
    //second control point
    B(m),
    B(c + (_ - c) * e),
    //new fabricated anchor on line
    B(m + (p - m) * e),
    B(_),
    //third control point
    B(p),
    B(y),
    //fourth control point
    B(x)
  ), a.samples && a.samples.splice(t / 6 * a.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function en(a, t, e, i) {
  e = e || {}, a.totalLength || ae(a), (t < 0 || t > 1) && (t = us(t));
  var r = 0, n = a[0], s, o, f, u, l, h, _;
  if (!t)
    _ = h = r = 0, n = a[0];
  else if (t === 1)
    _ = 1, r = a.length - 1, n = a[r], h = n.length - 8;
  else {
    if (a.length > 1) {
      for (f = a.totalLength * t, l = h = 0; (l += a[h++].totalLength) < f; )
        r = h;
      n = a[r], u = l - n.totalLength, t = (f - u) / (l - u) || 0;
    }
    s = n.samples, o = n.resolution, f = n.totalLength * t, h = n.lookup.length ? n.lookup[~~(f / n.minLength)] || 0 : fs(s, f, t), u = h ? s[h - 1] : 0, l = s[h], l < f && (u = l, l = s[++h]), _ = 1 / o * ((f - u) / (l - u) + h % o), h = ~~(h / o) * 6, i && _ === 1 && (h + 6 < n.length ? (h += 6, _ = 0) : r + 1 < a.length && (h = _ = 0, n = a[++r]));
  }
  return e.t = _, e.i = h, e.path = a, e.segment = n, e.segIndex = r, e;
}
function rn(a, t, e, i) {
  var r = a[0], n = i || {}, s, o, f, u, l, h, _, d, p;
  if ((t < 0 || t > 1) && (t = us(t)), r.lookup || ae(a), a.length > 1) {
    for (f = a.totalLength * t, l = h = 0; (l += a[h++].totalLength) < f; )
      r = a[h];
    u = l - r.totalLength, t = (f - u) / (l - u) || 0;
  }
  return s = r.samples, o = r.resolution, f = r.totalLength * t, h = r.lookup.length ? r.lookup[t < 1 ? ~~(f / r.minLength) : r.lookup.length - 1] || 0 : fs(s, f, t), u = h ? s[h - 1] : 0, l = s[h], l < f && (u = l, l = s[++h]), _ = 1 / o * ((f - u) / (l - u) + h % o) || 0, p = 1 - _, h = ~~(h / o) * 6, d = r[h], n.x = B((_ * _ * (r[h + 6] - d) + 3 * p * (_ * (r[h + 4] - d) + p * (r[h + 2] - d))) * _ + d), n.y = B((_ * _ * (r[h + 7] - (d = r[h + 1])) + 3 * p * (_ * (r[h + 5] - d) + p * (r[h + 3] - d))) * _ + d), e && (n.angle = r.totalLength ? ls(r, h, _ >= 1 ? 1 - 1e-9 : _ || 1e-9) : r.angle || 0), n;
}
function Ne(a, t, e, i, r, n, s) {
  for (var o = a.length, f, u, l, h, _; --o > -1; )
    for (f = a[o], u = f.length, l = 0; l < u; l += 2)
      h = f[l], _ = f[l + 1], f[l] = h * t + _ * i + n, f[l + 1] = h * e + _ * r + s;
  return a._dirty = 1, a;
}
function oa(a, t, e, i, r, n, s, o, f) {
  if (!(a === o && t === f)) {
    e = Ot(e), i = Ot(i);
    var u = r % 360 * Xo, l = ni(u), h = ri(u), _ = Math.PI, d = _ * 2, p = (a - o) / 2, c = (t - f) / 2, m = l * p + h * c, y = -h * p + l * c, x = m * m, v = y * y, w = x / (e * e) + v / (i * i);
    w > 1 && (e = It(w) * e, i = It(w) * i);
    var b = e * e, S = i * i, P = (b * S - b * v - S * x) / (b * v + S * x);
    P < 0 && (P = 0);
    var O = (n === s ? -1 : 1) * It(P), T = O * (e * y / i), k = O * -(i * m / e), M = (a + o) / 2, R = (t + f) / 2, A = M + (l * T - h * k), I = R + (h * T + l * k), L = (m - T) / e, z = (y - k) / i, j = (-m - T) / e, Q = (-y - k) / i, at = L * L + z * z, Et = (z < 0 ? -1 : 1) * Math.acos(L / It(at)), $ = (L * Q - z * j < 0 ? -1 : 1) * Math.acos((L * j + z * Q) / It(at * (j * j + Q * Q)));
    isNaN($) && ($ = _), !s && $ > 0 ? $ -= d : s && $ < 0 && ($ += d), Et %= d, $ %= d;
    var bt = Math.ceil(Ot($) / (d / 4)), et = [], Z = $ / bt, ut = 4 / 3 * ri(Z / 2) / (1 + ni(Z / 2)), He = l * e, Ze = h * e, Je = h * -i, Qe = l * i, it;
    for (it = 0; it < bt; it++)
      r = Et + it * Z, m = ni(r), y = ri(r), L = ni(r += Z), z = ri(r), et.push(m - ut * y, y + ut * m, L + ut * z, z - ut * L, L, z);
    for (it = 0; it < et.length; it += 2)
      m = et[it], y = et[it + 1], et[it] = m * He + y * Je + A, et[it + 1] = m * Ze + y * Qe + I;
    return et[it - 2] = o, et[it - 1] = f, et;
  }
}
function yi(a) {
  var t = (a + "").replace(Uo, function(T) {
    var k = +T;
    return k < 1e-4 && k > -1e-4 ? 0 : k;
  }).match(jo) || [], e = [], i = 0, r = 0, n = 2 / 3, s = t.length, o = 0, f = "ERROR: malformed path: " + a, u, l, h, _, d, p, c, m, y, x, v, w, b, S, P, O = function(k, M, R, A) {
    x = (R - k) / 3, v = (A - M) / 3, c.push(k + x, M + v, R - x, A - v, R, A);
  };
  if (!a || !isNaN(t[0]) || isNaN(t[1]))
    return console.log(f), e;
  for (u = 0; u < s; u++)
    if (b = d, isNaN(t[u]) ? (d = t[u].toUpperCase(), p = d !== t[u]) : u--, h = +t[u + 1], _ = +t[u + 2], p && (h += i, _ += r), u || (m = h, y = _), d === "M")
      c && (c.length < 8 ? e.length -= 1 : o += c.length), i = m = h, r = y = _, c = [h, _], e.push(c), u += 2, d = "L";
    else if (d === "C")
      c || (c = [0, 0]), p || (i = r = 0), c.push(h, _, i + t[u + 3] * 1, r + t[u + 4] * 1, i += t[u + 5] * 1, r += t[u + 6] * 1), u += 6;
    else if (d === "S")
      x = i, v = r, (b === "C" || b === "S") && (x += i - c[c.length - 4], v += r - c[c.length - 3]), p || (i = r = 0), c.push(x, v, h, _, i += t[u + 3] * 1, r += t[u + 4] * 1), u += 4;
    else if (d === "Q")
      x = i + (h - i) * n, v = r + (_ - r) * n, p || (i = r = 0), i += t[u + 3] * 1, r += t[u + 4] * 1, c.push(x, v, i + (h - i) * n, r + (_ - r) * n, i, r), u += 4;
    else if (d === "T")
      x = i - c[c.length - 4], v = r - c[c.length - 3], c.push(i + x, r + v, h + (i + x * 1.5 - h) * n, _ + (r + v * 1.5 - _) * n, i = h, r = _), u += 2;
    else if (d === "H")
      O(i, r, i = h, r), u += 1;
    else if (d === "V")
      O(i, r, i, r = h + (p ? r - i : 0)), u += 1;
    else if (d === "L" || d === "Z")
      d === "Z" && (h = m, _ = y, c.closed = !0), (d === "L" || Ot(i - h) > 0.5 || Ot(r - _) > 0.5) && (O(i, r, h, _), d === "L" && (u += 2)), i = h, r = _;
    else if (d === "A") {
      if (S = t[u + 4], P = t[u + 5], x = t[u + 6], v = t[u + 7], l = 7, S.length > 1 && (S.length < 3 ? (v = x, x = P, l--) : (v = P, x = S.substr(2), l -= 2), P = S.charAt(1), S = S.charAt(0)), w = oa(i, r, +t[u + 1], +t[u + 2], +t[u + 3], +S, +P, (p ? i : 0) + x * 1, (p ? r : 0) + v * 1), u += l, w)
        for (l = 0; l < w.length; l++)
          c.push(w[l]);
      i = c[c.length - 2], r = c[c.length - 1];
    } else
      console.log(f);
  return u = c.length, u < 6 ? (e.pop(), u = 0) : c[0] === c[u - 2] && c[1] === c[u - 1] && (c.closed = !0), e.totalPoints = o + u, e;
}
function aa(a, t) {
  t === void 0 && (t = 1);
  for (var e = a[0], i = 0, r = [e, i], n = 2; n < a.length; n += 2)
    r.push(e, i, a[n], i = (a[n] - e) * t / 2, e = a[n], -i);
  return r;
}
function rr(a, t) {
  Ot(a[0] - a[2]) < 1e-4 && Ot(a[1] - a[3]) < 1e-4 && (a = a.slice(2));
  var e = a.length - 2, i = +a[0], r = +a[1], n = +a[2], s = +a[3], o = [i, r, i, r], f = n - i, u = s - r, l = Math.abs(a[e] - i) < 1e-3 && Math.abs(a[e + 1] - r) < 1e-3, h, _, d, p, c, m, y, x, v, w, b, S, P, O, T;
  for (l && (a.push(n, s), n = i, s = r, i = a[e - 2], r = a[e - 1], a.unshift(i, r), e += 4), t = t || t === 0 ? +t : 1, d = 2; d < e; d += 2)
    h = i, _ = r, i = n, r = s, n = +a[d + 2], s = +a[d + 3], !(i === n && r === s) && (p = f, c = u, f = n - i, u = s - r, m = It(p * p + c * c), y = It(f * f + u * u), x = It(Math.pow(f / y + p / m, 2) + Math.pow(u / y + c / m, 2)), v = (m + y) * t * 0.25 / x, w = i - (i - h) * (m ? v / m : 0), b = i + (n - i) * (y ? v / y : 0), S = i - (w + ((b - w) * (m * 3 / (m + y) + 0.5) / 4 || 0)), P = r - (r - _) * (m ? v / m : 0), O = r + (s - r) * (y ? v / y : 0), T = r - (P + ((O - P) * (m * 3 / (m + y) + 0.5) / 4 || 0)), (i !== h || r !== _) && o.push(
      B(w + S),
      // first control point
      B(P + T),
      B(i),
      // anchor
      B(r),
      B(b + S),
      // second control point
      B(O + T)
    ));
  return i !== n || r !== s || o.length < 4 ? o.push(B(n), B(s), B(n), B(s)) : o.length -= 2, o.length === 2 ? o.push(i, r, i, r, i, r) : l && (o.splice(0, 6), o.length = o.length - 6), o;
}
function cs(a) {
  as(a[0]) && (a = [a]);
  var t = "", e = a.length, i, r, n, s;
  for (r = 0; r < e; r++) {
    for (s = a[r], t += "M" + B(s[0]) + "," + B(s[1]) + " C", i = s.length, n = 2; n < i; n++)
      t += B(s[n++]) + "," + B(s[n++]) + " " + B(s[n++]) + "," + B(s[n++]) + " " + B(s[n++]) + "," + B(s[n]) + " ";
    s.closed && (t += "z");
  }
  return t;
}
/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Yt, ue, Sr, Si, Le, fi, xi, Ie, kt = "transform", nr = kt + "Origin", _s, ds = function(t) {
  var e = t.ownerDocument || t;
  for (!(kt in t.style) && ("msTransform" in t.style) && (kt = "msTransform", nr = kt + "Origin"); e.parentNode && (e = e.parentNode); )
    ;
  if (ue = window, xi = new Ge(), e) {
    Yt = e, Sr = e.documentElement, Si = e.body, Ie = Yt.createElementNS("http://www.w3.org/2000/svg", "g"), Ie.style.transform = "none";
    var i = e.createElement("div"), r = e.createElement("div"), n = e && (e.body || e.firstElementChild);
    n && n.appendChild && (n.appendChild(i), i.appendChild(r), i.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), _s = r.offsetParent !== i, n.removeChild(i));
  }
  return e;
}, ua = function(t) {
  for (var e, i; t && t !== Si; )
    i = t._gsap, i && i.uncache && i.get(t, "x"), i && !i.scaleX && !i.scaleY && i.renderTransform && (i.scaleX = i.scaleY = 1e-4, i.renderTransform(1, i), e ? e.push(i) : e = [i]), t = t.parentNode;
  return e;
}, ps = [], gs = [], fa = function() {
  return ue.pageYOffset || Yt.scrollTop || Sr.scrollTop || Si.scrollTop || 0;
}, la = function() {
  return ue.pageXOffset || Yt.scrollLeft || Sr.scrollLeft || Si.scrollLeft || 0;
}, Pr = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, ha = function a(t) {
  if (ue.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return a(t);
}, Fi = function a(t, e) {
  if (t.parentNode && (Yt || ds(t))) {
    var i = Pr(t), r = i ? i.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = i ? e ? "rect" : "g" : "div", s = e !== 2 ? 0 : 100, o = e === 3 ? 100 : 0, f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", u = Yt.createElementNS ? Yt.createElementNS(r.replace(/^https/, "http"), n) : Yt.createElement(n);
    return e && (i ? (fi || (fi = a(t)), u.setAttribute("width", 0.01), u.setAttribute("height", 0.01), u.setAttribute("transform", "translate(" + s + "," + o + ")"), fi.appendChild(u)) : (Le || (Le = a(t), Le.style.cssText = f), u.style.cssText = f + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", Le.appendChild(u))), u;
  }
  throw "Need document and parent.";
}, ca = function(t) {
  for (var e = new Ge(), i = 0; i < t.numberOfItems; i++)
    e.multiply(t.getItem(i).matrix);
  return e;
}, _a = function(t) {
  var e = t.getCTM(), i;
  return e || (i = t.style[kt], t.style[kt] = "none", t.appendChild(Ie), e = Ie.getCTM(), t.removeChild(Ie), i ? t.style[kt] = i : t.style.removeProperty(kt.replace(/([A-Z])/g, "-$1").toLowerCase())), e || xi.clone();
}, da = function(t, e) {
  var i = Pr(t), r = t === i, n = i ? ps : gs, s = t.parentNode, o, f, u, l, h, _;
  if (t === ue)
    return t;
  if (n.length || n.push(Fi(t, 1), Fi(t, 2), Fi(t, 3)), o = i ? fi : Le, i)
    r ? (u = _a(t), l = -u.e / u.a, h = -u.f / u.d, f = xi) : t.getBBox ? (u = t.getBBox(), f = t.transform ? t.transform.baseVal : {}, f = f.numberOfItems ? f.numberOfItems > 1 ? ca(f) : f.getItem(0).matrix : xi, l = f.a * u.x + f.c * u.y, h = f.b * u.x + f.d * u.y) : (f = new Ge(), l = h = 0), e && t.tagName.toLowerCase() === "g" && (l = h = 0), (r ? i : s).appendChild(o), o.setAttribute("transform", "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + (f.e + l) + "," + (f.f + h) + ")");
  else {
    if (l = h = 0, _s)
      for (f = t.offsetParent, u = t; u && (u = u.parentNode) && u !== f && u.parentNode; )
        (ue.getComputedStyle(u)[kt] + "").length > 4 && (l = u.offsetLeft, h = u.offsetTop, u = 0);
    if (_ = ue.getComputedStyle(t), _.position !== "absolute" && _.position !== "fixed")
      for (f = t.offsetParent; s && s !== f; )
        l += s.scrollLeft || 0, h += s.scrollTop || 0, s = s.parentNode;
    u = o.style, u.top = t.offsetTop - h + "px", u.left = t.offsetLeft - l + "px", u[kt] = _[kt], u[nr] = _[nr], u.position = _.position === "fixed" ? "fixed" : "absolute", t.parentNode.appendChild(o);
  }
  return o;
}, Bi = function(t, e, i, r, n, s, o) {
  return t.a = e, t.b = i, t.c = r, t.d = n, t.e = s, t.f = o, t;
}, Ge = /* @__PURE__ */ function() {
  function a(e, i, r, n, s, o) {
    e === void 0 && (e = 1), i === void 0 && (i = 0), r === void 0 && (r = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), Bi(this, e, i, r, n, s, o);
  }
  var t = a.prototype;
  return t.inverse = function() {
    var i = this.a, r = this.b, n = this.c, s = this.d, o = this.e, f = this.f, u = i * s - r * n || 1e-10;
    return Bi(this, s / u, -r / u, -n / u, i / u, (n * f - s * o) / u, -(i * f - r * o) / u);
  }, t.multiply = function(i) {
    var r = this.a, n = this.b, s = this.c, o = this.d, f = this.e, u = this.f, l = i.a, h = i.c, _ = i.b, d = i.d, p = i.e, c = i.f;
    return Bi(this, l * r + _ * s, l * n + _ * o, h * r + d * s, h * n + d * o, f + p * r + c * s, u + p * n + c * o);
  }, t.clone = function() {
    return new a(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(i) {
    var r = this.a, n = this.b, s = this.c, o = this.d, f = this.e, u = this.f;
    return r === i.a && n === i.b && s === i.c && o === i.d && f === i.e && u === i.f;
  }, t.apply = function(i, r) {
    r === void 0 && (r = {});
    var n = i.x, s = i.y, o = this.a, f = this.b, u = this.c, l = this.d, h = this.e, _ = this.f;
    return r.x = n * o + s * u + h || 0, r.y = n * f + s * l + _ || 0, r;
  }, a;
}();
function be(a, t, e, i) {
  if (!a || !a.parentNode || (Yt || ds(a)).documentElement === a)
    return new Ge();
  var r = ua(a), n = Pr(a), s = n ? ps : gs, o = da(a, e), f = s[0].getBoundingClientRect(), u = s[1].getBoundingClientRect(), l = s[2].getBoundingClientRect(), h = o.parentNode, _ = !i && ha(a), d = new Ge((u.left - f.left) / 100, (u.top - f.top) / 100, (l.left - f.left) / 100, (l.top - f.top) / 100, f.left + (_ ? 0 : la()), f.top + (_ ? 0 : fa()));
  if (h.removeChild(o), r)
    for (f = r.length; f--; )
      u = r[f], u.scaleX = u.scaleY = 0, u.renderTransform(1, u);
  return t ? d.inverse() : d;
}
/*!
 * MotionPathPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var pa = "x,translateX,left,marginLeft,xPercent".split(","), ga = "y,translateY,top,marginTop,yPercent".split(","), ma = Math.PI / 180, wt, ms, de, sr, Ii, nn, ya = function() {
  return wt || typeof window < "u" && (wt = window.gsap) && wt.registerPlugin && wt;
}, Ae = function(t, e, i, r) {
  for (var n = e.length, s = r === 2 ? 0 : r, o = 0; o < n; o++)
    t[s] = parseFloat(e[o][i]), r === 2 && (t[s + 1] = 0), s += 2;
  return t;
}, me = function(t, e, i) {
  return parseFloat(t._gsap.get(t, e, i || "px")) || 0;
}, ys = function(t) {
  var e = t[0], i = t[1], r;
  for (r = 2; r < t.length; r += 2)
    e = t[r] += e, i = t[r + 1] += i;
}, sn = function(t, e, i, r, n, s, o, f, u) {
  if (o.type === "cubic")
    e = [e];
  else {
    o.fromCurrent !== !1 && e.unshift(me(i, r, f), n ? me(i, n, u) : 0), o.relative && ys(e);
    var l = n ? rr : aa;
    e = [l(e, o.curviness)];
  }
  return e = s(xs(e, i, o)), vi(t, i, r, e, "x", f), n && vi(t, i, n, e, "y", u), ae(e, o.resolution || (o.curviness === 0 ? 20 : 12));
}, xa = function(t) {
  return t;
}, va = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, on = function(t, e, i) {
  var r = be(t), n = 0, s = 0, o;
  return (t.tagName + "").toLowerCase() === "svg" ? (o = t.viewBox.baseVal, o.width || (o = {
    width: +t.getAttribute("width"),
    height: +t.getAttribute("height")
  })) : o = e && t.getBBox && t.getBBox(), e && e !== "auto" && (n = e.push ? e[0] * (o ? o.width : t.offsetWidth || 0) : e.x, s = e.push ? e[1] * (o ? o.height : t.offsetHeight || 0) : e.y), i.apply(n || s ? r.apply({
    x: n,
    y: s
  }) : {
    x: r.e,
    y: r.f
  });
}, or = function(t, e, i, r) {
  var n = be(t.parentNode, !0, !0), s = n.clone().multiply(be(e)), o = on(t, i, n), f = on(e, r, n), u = f.x, l = f.y, h;
  return s.e = s.f = 0, r === "auto" && e.getTotalLength && e.tagName.toLowerCase() === "path" && (h = e.getAttribute("d").match(va) || [], h = s.apply({
    x: +h[0],
    y: +h[1]
  }), u += h.x, l += h.y), h && (h = s.apply(e.getBBox()), u -= h.x, l -= h.y), s.e = u - o.x, s.f = l - o.y, s;
}, xs = function(t, e, i) {
  var r = i.align, n = i.matrix, s = i.offsetX, o = i.offsetY, f = i.alignOrigin, u = t[0][0], l = t[0][1], h = me(e, "x"), _ = me(e, "y"), d, p, c;
  return !t || !t.length ? ui("M0,0L0,0") : (r && (r === "self" || (d = sr(r)[0] || e) === e ? Ne(t, 1, 0, 0, 1, h - u, _ - l) : (f && f[2] !== !1 ? wt.set(e, {
    transformOrigin: f[0] * 100 + "% " + f[1] * 100 + "%"
  }) : f = [me(e, "xPercent") / -100, me(e, "yPercent") / -100], p = or(e, d, f, "auto"), c = p.apply({
    x: u,
    y: l
  }), Ne(t, p.a, p.b, p.c, p.d, h + p.e - (c.x - p.e), _ + p.f - (c.y - p.f)))), n ? Ne(t, n.a, n.b, n.c, n.d, n.e, n.f) : (s || o) && Ne(t, 1, 0, 0, 1, s || 0, o || 0), t);
}, vi = function(t, e, i, r, n, s) {
  var o = e._gsap, f = o.harness, u = f && f.aliases && f.aliases[i], l = u && u.indexOf(",") < 0 ? u : i, h = t._pt = new ms(t._pt, e, l, 0, 0, xa, 0, o.set(e, l, t));
  h.u = de(o.get(e, l, s)) || 0, h.path = r, h.pp = n, t._props.push(l);
}, ba = function(t, e) {
  return function(i) {
    return t || e !== 1 ? hs(i, t, e) : i;
  };
}, vs = {
  version: "3.12.5",
  name: "motionPath",
  register: function(t, e, i) {
    wt = t, de = wt.utils.getUnit, sr = wt.utils.toArray, Ii = wt.core.getStyleSaver, nn = wt.core.reverting || function() {
    }, ms = i;
  },
  init: function(t, e, i) {
    if (!wt)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof e == "object" && !e.style) || !e.path) && (e = {
      path: e
    });
    var r = [], n = e, s = n.path, o = n.autoRotate, f = n.unitX, u = n.unitY, l = n.x, h = n.y, _ = s[0], d = ba(e.start, "end" in e ? e.end : 1), p, c;
    if (this.rawPaths = r, this.target = t, this.tween = i, this.styles = Ii && Ii(t, "transform"), (this.rotate = o || o === 0) && (this.rOffset = parseFloat(o) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = de(t._gsap.get(t, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && typeof _ != "number") {
      for (c in _)
        !l && ~pa.indexOf(c) ? l = c : !h && ~ga.indexOf(c) && (h = c);
      l && h ? r.push(sn(this, Ae(Ae([], s, l, 0), s, h, 1), t, l, h, d, e, f || de(s[0][l]), u || de(s[0][h]))) : l = h = 0;
      for (c in _)
        c !== l && c !== h && r.push(sn(this, Ae([], s, c, 2), t, c, 0, d, e, de(s[0][c])));
    } else
      p = d(xs(ui(e.path), t, e)), ae(p, e.resolution), r.push(p), vi(this, t, e.x || "x", p, "x", e.unitX || "px"), vi(this, t, e.y || "y", p, "y", e.unitY || "px");
  },
  render: function(t, e) {
    var i = e.rawPaths, r = i.length, n = e._pt;
    if (e.tween._time || !nn()) {
      for (t > 1 ? t = 1 : t < 0 && (t = 0); r--; )
        rn(i[r], t, !r && e.rotate, i[r]);
      for (; n; )
        n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, t), n = n._next;
      e.rotate && e.rSet(e.target, e.rProp, i[0].angle * (e.radians ? ma : 1) + e.rOffset + e.ru, e, t);
    } else
      e.styles.revert();
  },
  getLength: function(t) {
    return ae(ui(t)).totalLength;
  },
  sliceRawPath: hs,
  getRawPath: ui,
  pointsToSegment: rr,
  stringToRawPath: yi,
  rawPathToString: cs,
  transformRawPath: Ne,
  getGlobalMatrix: be,
  getPositionOnPath: rn,
  cacheRawPathMeasurements: ae,
  convertToPath: function(t, e) {
    return sr(t).map(function(i) {
      return na(i, e !== !1);
    });
  },
  convertCoordinates: function(t, e, i) {
    var r = be(e, !0, !0).multiply(be(t));
    return i ? r.apply(i) : r;
  },
  getAlignMatrix: or,
  getRelativePosition: function(t, e, i, r) {
    var n = or(t, e, i, r);
    return {
      x: n.e,
      y: n.f
    };
  },
  arrayToRawPath: function(t, e) {
    e = e || {};
    var i = Ae(Ae([], t, e.x || "x", 0), t, e.y || "y", 1);
    return e.relative && ys(i), [e.type === "cubic" ? i : rr(i, e.curviness)];
  }
};
ya() && wt.registerPlugin(vs);
os.registerPlugin(vs);
export {
  wa as EvaUnitBox
};
//# sourceMappingURL=index.es.js.map
