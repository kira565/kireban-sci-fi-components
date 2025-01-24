import * as L from "react";
import Pt, { useRef as it, useMemo as Ot, createElement as Wt } from "react";
import $t, { gsap as ee } from "gsap";
var je = { exports: {} }, xe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Vt() {
  if (at) return xe;
  at = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, i) {
    var s = null;
    if (i !== void 0 && (s = "" + i), n.key !== void 0 && (s = "" + n.key), "key" in n) {
      i = {};
      for (var f in n)
        f !== "key" && (i[f] = n[f]);
    } else i = n;
    return n = i.ref, {
      $$typeof: o,
      type: r,
      key: s,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return xe.Fragment = e, xe.jsx = t, xe.jsxs = t, xe;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Bt() {
  return lt || (lt = 1, process.env.NODE_ENV !== "production" && function() {
    function o(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === ce ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case N:
          return "Fragment";
        case j:
          return "Portal";
        case A:
          return "Profiler";
        case R:
          return "StrictMode";
        case G:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case O:
            return (a.displayName || "Context") + ".Provider";
          case k:
            return (a._context.displayName || "Context") + ".Consumer";
          case W:
            var m = a.render;
            return a = a.displayName, a || (a = m.displayName || m.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case J:
            return m = a.displayName || null, m !== null ? m : o(a.type) || "Memo";
          case z:
            m = a._payload, a = a._init;
            try {
              return o(a(m));
            } catch {
            }
        }
      return null;
    }
    function e(a) {
      return "" + a;
    }
    function t(a) {
      try {
        e(a);
        var m = !1;
      } catch {
        m = !0;
      }
      if (m) {
        m = console;
        var C = m.error, S = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return C.call(
          m,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          S
        ), e(a);
      }
    }
    function r() {
    }
    function n() {
      if (q === 0) {
        ie = console.log, Ee = console.info, Ne = console.warn, ke = console.error, Te = console.group, B = console.groupCollapsed, Ke = console.groupEnd;
        var a = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: a,
          log: a,
          warn: a,
          error: a,
          group: a,
          groupCollapsed: a,
          groupEnd: a
        });
      }
      q++;
    }
    function i() {
      if (q--, q === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, a, { value: ie }),
          info: $({}, a, { value: Ee }),
          warn: $({}, a, { value: Ne }),
          error: $({}, a, { value: ke }),
          group: $({}, a, { value: Te }),
          groupCollapsed: $({}, a, { value: B }),
          groupEnd: $({}, a, { value: Ke })
        });
      }
      0 > q && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(a) {
      if (Be === void 0)
        try {
          throw Error();
        } catch (C) {
          var m = C.stack.trim().match(/\n( *(at )?)/);
          Be = m && m[1] || "", et = -1 < C.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < C.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Be + a + et;
    }
    function f(a, m) {
      if (!a || Ye) return "";
      var C = Ze.get(a);
      if (C !== void 0) return C;
      Ye = !0, C = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var S = null;
      S = H.H, H.H = null, n();
      try {
        var Y = {
          DetermineComponentFrameRoot: function() {
            try {
              if (m) {
                var ne = function() {
                  throw Error();
                };
                if (Object.defineProperty(ne.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ne, []);
                  } catch (K) {
                    var Le = K;
                  }
                  Reflect.construct(a, [], ne);
                } else {
                  try {
                    ne.call();
                  } catch (K) {
                    Le = K;
                  }
                  a.call(ne.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (K) {
                  Le = K;
                }
                (ne = a()) && typeof ne.catch == "function" && ne.catch(function() {
                });
              }
            } catch (K) {
              if (K && Le && typeof K.stack == "string")
                return [K.stack, Le.stack];
            }
            return [null, null];
          }
        };
        Y.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var P = Object.getOwnPropertyDescriptor(
          Y.DetermineComponentFrameRoot,
          "name"
        );
        P && P.configurable && Object.defineProperty(
          Y.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var E = Y.DetermineComponentFrameRoot(), Q = E[0], fe = E[1];
        if (Q && fe) {
          var Z = Q.split(`
`), ae = fe.split(`
`);
          for (E = P = 0; P < Z.length && !Z[P].includes(
            "DetermineComponentFrameRoot"
          ); )
            P++;
          for (; E < ae.length && !ae[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          if (P === Z.length || E === ae.length)
            for (P = Z.length - 1, E = ae.length - 1; 1 <= P && 0 <= E && Z[P] !== ae[E]; )
              E--;
          for (; 1 <= P && 0 <= E; P--, E--)
            if (Z[P] !== ae[E]) {
              if (P !== 1 || E !== 1)
                do
                  if (P--, E--, 0 > E || Z[P] !== ae[E]) {
                    var ge = `
` + Z[P].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", a.displayName)), typeof a == "function" && Ze.set(a, ge), ge;
                  }
                while (1 <= P && 0 <= E);
              break;
            }
        }
      } finally {
        Ye = !1, H.H = S, i(), Error.prepareStackTrace = C;
      }
      return Z = (Z = a ? a.displayName || a.name : "") ? s(Z) : "", typeof a == "function" && Ze.set(a, Z), Z;
    }
    function c(a) {
      if (a == null) return "";
      if (typeof a == "function") {
        var m = a.prototype;
        return f(
          a,
          !(!m || !m.isReactComponent)
        );
      }
      if (typeof a == "string") return s(a);
      switch (a) {
        case G:
          return s("Suspense");
        case V:
          return s("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case W:
            return a = f(a.render, !1), a;
          case J:
            return c(a.type);
          case z:
            m = a._payload, a = a._init;
            try {
              return c(a(m));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var a = H.A;
      return a === null ? null : a.getOwner();
    }
    function d(a) {
      if (pe.call(a, "key")) {
        var m = Object.getOwnPropertyDescriptor(a, "key").get;
        if (m && m.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, m) {
      function C() {
        tt || (tt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          m
        ));
      }
      C.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: C,
        configurable: !0
      });
    }
    function h() {
      var a = o(this.type);
      return rt[a] || (rt[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, m, C, S, Y, P) {
      return C = P.ref, a = {
        $$typeof: T,
        type: a,
        key: m,
        props: P,
        _owner: Y
      }, (C !== void 0 ? C : null) !== null ? Object.defineProperty(a, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(a, "ref", { enumerable: !1, value: null }), a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(a, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    }
    function x(a, m, C, S, Y, P) {
      if (typeof a == "string" || typeof a == "function" || a === N || a === A || a === R || a === G || a === V || a === I || typeof a == "object" && a !== null && (a.$$typeof === z || a.$$typeof === J || a.$$typeof === O || a.$$typeof === k || a.$$typeof === W || a.$$typeof === we || a.getModuleId !== void 0)) {
        var E = m.children;
        if (E !== void 0)
          if (S)
            if (D(E)) {
              for (S = 0; S < E.length; S++)
                p(E[S], a);
              Object.freeze && Object.freeze(E);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else p(E, a);
      } else
        E = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? S = "null" : D(a) ? S = "array" : a !== void 0 && a.$$typeof === T ? (S = "<" + (o(a.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : S = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          S,
          E
        );
      if (pe.call(m, "key")) {
        E = o(a);
        var Q = Object.keys(m).filter(function(Z) {
          return Z !== "key";
        });
        S = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", nt[E + S] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          S,
          E,
          Q,
          E
        ), nt[E + S] = !0);
      }
      if (E = null, C !== void 0 && (t(C), E = "" + C), d(m) && (t(m.key), E = "" + m.key), "key" in m) {
        C = {};
        for (var fe in m)
          fe !== "key" && (C[fe] = m[fe]);
      } else C = m;
      return E && u(
        C,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(a, E, P, Y, l(), C);
    }
    function p(a, m) {
      if (typeof a == "object" && a && a.$$typeof !== At) {
        if (D(a))
          for (var C = 0; C < a.length; C++) {
            var S = a[C];
            b(S) && y(S, m);
          }
        else if (b(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? C = null : (C = oe && a[oe] || a["@@iterator"], C = typeof C == "function" ? C : null), typeof C == "function" && C !== a.entries && (C = C.call(a), C !== a))
          for (; !(a = C.next()).done; )
            b(a.value) && y(a.value, m);
      }
    }
    function b(a) {
      return typeof a == "object" && a !== null && a.$$typeof === T;
    }
    function y(a, m) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, m = w(m), !ot[m])) {
        ot[m] = !0;
        var C = "";
        a && a._owner != null && a._owner !== l() && (C = null, typeof a._owner.tag == "number" ? C = o(a._owner.type) : typeof a._owner.name == "string" && (C = a._owner.name), C = " It was passed a child from " + C + ".");
        var S = H.getCurrentStack;
        H.getCurrentStack = function() {
          var Y = c(a.type);
          return S && (Y += S() || ""), Y;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          m,
          C
        ), H.getCurrentStack = S;
      }
    }
    function w(a) {
      var m = "", C = l();
      return C && (C = o(C.type)) && (m = `

Check the render method of \`` + C + "`."), m || (a = o(a)) && (m = `

Check the top-level render call using <` + a + ">."), m;
    }
    var _ = Pt, T = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), R = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), O = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), oe = Symbol.iterator, ce = Symbol.for("react.client.reference"), H = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = Object.prototype.hasOwnProperty, $ = Object.assign, we = Symbol.for("react.client.reference"), D = Array.isArray, q = 0, ie, Ee, Ne, ke, Te, B, Ke;
    r.__reactDisabledLog = !0;
    var Be, et, Ye = !1, Ze = new (typeof WeakMap == "function" ? WeakMap : Map)(), At = Symbol.for("react.client.reference"), tt, rt = {}, nt = {}, ot = {};
    me.Fragment = N, me.jsx = function(a, m, C, S, Y) {
      return x(a, m, C, !1, S, Y);
    }, me.jsxs = function(a, m, C, S, Y) {
      return x(a, m, C, !0, S, Y);
    };
  }()), me;
}
var st;
function Yt() {
  return st || (st = 1, process.env.NODE_ENV === "production" ? je.exports = Vt() : je.exports = Bt()), je.exports;
}
var v = Yt();
const Zt = (o) => /* @__PURE__ */ L.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ L.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ L.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ L.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ L.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ L.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ L.createElement("defs", null, /* @__PURE__ */ L.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ L.createElement("rect", { width: 80, height: 80, fill: "white" })))), Lr = ({ width: o, height: e }) => {
  const t = it(null), r = it(
    ee.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), n = (c) => (r.current.clear(), r.current.to(c(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(c(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(c(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(c(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(c(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(c(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(c(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(c(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(c("text"), {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  }).to(c(".scanner"), {
    opacity: 1,
    y: 80,
    duration: 1,
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
  })), i = (c, l = !1) => {
    c.forEach((d) => {
      const u = d.getTotalLength();
      l ? ee.to(d, {
        stroke: "currentColor"
      }) : (ee.set(d, {
        strokeDasharray: u,
        strokeDashoffset: u,
        stroke: "transparent"
      }), ee.to(d, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, s = () => {
    const c = ee.utils.selector(t.current), l = c(".stroke-fng");
    i(l), n(c), r.current.play();
  }, f = () => {
    if (t.current) {
      const c = ee.utils.selector(t.current), l = c(".stroke-fng");
      r.current.reverse(), ee.killTweensOf(l), i(l, !0), ee.killTweensOf(c(".scanner")), ee.set(c(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ v.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: s,
      onMouseLeave: f,
      style: { width: `${o}px`, height: `${e}px` },
      children: /* @__PURE__ */ v.jsx(Zt, { ref: t })
    }
  );
}, jr = ({
  children: o,
  mode: e = "warning",
  pulseAnimation: t = !0
}) => /* @__PURE__ */ v.jsx("div", { className: `piece ${t && "animate-pulse"}`, children: /* @__PURE__ */ v.jsx(
  "div",
  {
    className: `glowedBorder ${e === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${e} label`,
    children: o
  }
) }), Sr = ({ barsCount: o, currentBarIndex: e }) => {
  function t() {
    const r = [];
    for (let n = 0; n < o; n++)
      r.push(
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${n < e ? "visible" : "hidden"}`
          },
          n
        )
      );
    return r;
  }
  return /* @__PURE__ */ v.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${o * 10}px` }, children: [
    /* @__PURE__ */ v.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ v.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ v.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ v.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ v.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ v.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: t() }),
    /* @__PURE__ */ v.jsx("div", { className: "h-[15px]" })
  ] });
}, Mr = ({ unitNumber: o, subjectName: e }) => /* @__PURE__ */ v.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ v.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ v.jsx("div", { className: "text-2xl font-[600] label", children: o }),
  /* @__PURE__ */ v.jsx("div", { className: "text-xl font-[400] label", children: e })
] }), Gt = ({
  rowsCount: o,
  tilesPerRowCount: e,
  animationActive: t = !1
}) => {
  function r() {
    return Array(o).fill(null).map((n, i) => /* @__PURE__ */ v.jsx("div", { className: "hex-row rotate-method", children: Array(e).fill(null).map((s, f) => /* @__PURE__ */ v.jsx("div", { className: `hex ${t ? "animation-active" : ""}` }, f)) }, i));
  }
  return /* @__PURE__ */ v.jsx("div", { className: "piece rotateMethod", children: r() });
}, zt = (o) => Ot(() => {
  const e = (i, s) => {
    const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return f[(i + s) % f.length];
  }, t = (i, s) => (i % s).toString(), r = `U-${t(o * 3, 9)}`, n = `${e(o, 20)}${t(o * 7, 99)}`;
  return `${r}${n}`;
}, [o]), Dt = ({ title: o, sciFiCode: e, isActive: t }) => {
  const r = zt(e);
  return /* @__PURE__ */ v.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ v.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${t ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ v.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ v.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${t ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  className: `font-bold w-full ${t ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: o
                }
              ),
              /* @__PURE__ */ v.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ v.jsx(
                "div",
                {
                  className: `w-[10px] h-[5px] mr-10 mt-auto 
            ${t ? "bg-white" : "dark:group-hover:bg-[#0F172A] group-hover:bg-white"}
          `
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Rr = ({ options: o, width: e = "w-full" }) => /* @__PURE__ */ v.jsx("div", { className: `flex flex-col gap-2 ${e}`, children: o.map((t, r) => /* @__PURE__ */ Wt(Dt, { ...t, key: r, sciFiCode: r })) }), ct = () => /* @__PURE__ */ v.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ v.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ v.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ v.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ v.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ v.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] });
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ut = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Xt = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, It = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Ft = /(^[#\.][a-z]|[a-y][a-z])/i, Ht = Math.PI / 180, qt = 180 / Math.PI, Se = Math.sin, Me = Math.cos, X = Math.abs, te = Math.sqrt, Jt = Math.atan2, Ue = 1e8, ft = function(e) {
  return typeof e == "string";
}, vt = function(e) {
  return typeof e == "number";
}, Qt = function(e) {
  return typeof e > "u";
}, Kt = {}, er = {}, Pe = 1e5, bt = function(e) {
  return Math.round((e + Ue) % 1 * Pe) / Pe || (e < 0 ? 0 : 1);
}, M = function(e) {
  return Math.round(e * Pe) / Pe || 0;
}, ut = function(e) {
  return Math.round(e * 1e10) / 1e10 || 0;
}, dt = function(e, t, r, n) {
  var i = e[t], s = n === 1 ? 6 : Xe(i, r, n);
  if ((s || !n) && s + r + 2 < i.length)
    return e.splice(t, 0, i.slice(0, r + s + 2)), i.splice(0, r + s), 1;
}, yt = function(e, t, r) {
  var n = e.length, i = ~~(r * n);
  if (e[i] > t) {
    for (; --i && e[i] > t; )
      ;
    i < 0 && (i = 0);
  } else
    for (; e[++i] < t && i < n; )
      ;
  return i < n ? i : n - 1;
}, tr = function(e, t) {
  var r = e.length;
  for (e.reverse(); r--; )
    e[r].reversed || or(e[r]);
}, ht = function(e, t) {
  return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t;
}, rr = function(e, t) {
  var r = e.length, n = e[r - 1] || [], i = n.length;
  r && t[0] === n[i - 2] && t[1] === n[i - 1] && (t = n.concat(t.slice(2)), r--), e[r] = t;
};
function Re(o) {
  o = ft(o) && Ft.test(o) && document.querySelector(o) || o;
  var e = o.getAttribute ? o : 0, t;
  return e && (o = o.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[o], t && !t._dirty ? t : e._gsPath[o] = Oe(o)) : o ? ft(o) ? Oe(o) : vt(o[0]) ? [o] : o : console.warn("Expecting a <path> element or an SVG path data string");
}
function nr(o) {
  for (var e = [], t = 0; t < o.length; t++)
    e[t] = ht(o[t], o[t].slice(0));
  return ht(o, e);
}
function or(o) {
  var e = 0, t;
  for (o.reverse(); e < o.length; e += 2)
    t = o[e], o[e] = o[e + 1], o[e + 1] = t;
  o.reversed = !o.reversed;
}
var ir = function(e, t) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), n = [].slice.call(e.attributes), i = n.length, s;
  for (t = "," + t + ","; --i > -1; )
    s = n[i].nodeName.toLowerCase(), t.indexOf("," + s + ",") < 0 && r.setAttributeNS(null, s, n[i].nodeValue);
  return r;
}, ar = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, lr = function(e, t) {
  for (var r = t ? t.split(",") : [], n = {}, i = r.length; --i > -1; )
    n[r[i]] = +e.getAttribute(r[i]) || 0;
  return n;
};
function sr(o, e) {
  var t = o.tagName.toLowerCase(), r = 0.552284749831, n, i, s, f, c, l, d, u, h, g, x, p, b, y, w, _, T, j, N, R, A, k;
  return t === "path" || !o.getBBox ? o : (l = ir(o, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), k = lr(o, ar[t]), t === "rect" ? (f = k.rx, c = k.ry || f, i = k.x, s = k.y, g = k.width - f * 2, x = k.height - c * 2, f || c ? (p = i + f * (1 - r), b = i + f, y = b + g, w = y + f * r, _ = y + f, T = s + c * (1 - r), j = s + c, N = j + x, R = N + c * r, A = N + c, n = "M" + _ + "," + j + " V" + N + " C" + [_, R, w, A, y, A, y - (y - b) / 3, A, b + (y - b) / 3, A, b, A, p, A, i, R, i, N, i, N - (N - j) / 3, i, j + (N - j) / 3, i, j, i, T, p, s, b, s, b + (y - b) / 3, s, y - (y - b) / 3, s, y, s, w, s, _, T, _, j].join(",") + "z") : n = "M" + (i + g) + "," + s + " v" + x + " h" + -g + " v" + -x + " h" + g + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (f = c = k.r, u = f * r) : (f = k.rx, c = k.ry, u = c * r), i = k.cx, s = k.cy, d = f * r, n = "M" + (i + f) + "," + s + " C" + [i + f, s + u, i + d, s + c, i, s + c, i - d, s + c, i - f, s + u, i - f, s, i - f, s - u, i - d, s - c, i, s - c, i + d, s - c, i + f, s - u, i + f, s].join(",") + "z") : t === "line" ? n = "M" + k.x1 + "," + k.y1 + " L" + k.x2 + "," + k.y2 : (t === "polyline" || t === "polygon") && (h = (o.getAttribute("points") + "").match(Xt) || [], i = h.shift(), s = h.shift(), n = "M" + i + "," + s + " L" + h.join(","), t === "polygon" && (n += "," + i + "," + s + "z")), l.setAttribute("d", Et(l._gsRawPath = Oe(n))), e && o.parentNode && (o.parentNode.insertBefore(l, o), o.parentNode.removeChild(o)), l);
}
function _t(o, e, t) {
  var r = o[e], n = o[e + 2], i = o[e + 4], s;
  return r += (n - r) * t, n += (i - n) * t, r += (n - r) * t, s = n + (i + (o[e + 6] - i) * t - n) * t - r, r = o[e + 1], n = o[e + 3], i = o[e + 5], r += (n - r) * t, n += (i - n) * t, r += (n - r) * t, M(Jt(n + (i + (o[e + 7] - i) * t - n) * t - r, s) * qt);
}
function wt(o, e, t) {
  t = Qt(t) ? 1 : ut(t) || 0, e = ut(e) || 0;
  var r = Math.max(0, ~~(X(t - e) - 1e-8)), n = nr(o);
  if (e > t && (e = 1 - e, t = 1 - t, tr(n), n.totalLength = 0), e < 0 || t < 0) {
    var i = Math.abs(~~Math.min(e, t)) + 1;
    e += i, t += i;
  }
  n.totalLength || le(n);
  var s = t > 1, f = pt(n, e, Kt, !0), c = pt(n, t, er), l = c.segment, d = f.segment, u = c.segIndex, h = f.segIndex, g = c.i, x = f.i, p = h === u, b = g === x && p, y, w, _, T, j, N, R, A;
  if (s || r) {
    for (y = u < h || p && g < x || b && c.t < f.t, dt(n, h, x, f.t) && (h++, y || (u++, b ? (c.t = (c.t - f.t) / (1 - f.t), g = 0) : p && (g -= x))), Math.abs(1 - (t - e)) < 1e-5 ? u = h - 1 : !c.t && u ? u-- : dt(n, u, g, c.t) && y && h++, f.t === 1 && (h = (h + 1) % n.length), j = [], N = n.length, R = 1 + N * r, A = h, R += (N - h + u) % N, T = 0; T < R; T++)
      rr(j, n[A++ % N]);
    n = j;
  } else if (_ = c.t === 1 ? 6 : Xe(l, g, c.t), e !== t)
    for (w = Xe(d, x, b ? f.t / c.t : f.t), p && (_ += w), l.splice(g + _ + 2), (w || x) && d.splice(0, x + w), T = n.length; T--; )
      (T < h || T > u) && n.splice(T, 1);
  else
    l.angle = _t(l, g + _, 0), g += _, f = l[g], c = l[g + 1], l.length = l.totalLength = 0, l.totalPoints = n.totalPoints = 8, l.push(f, c, f, c, f, c, f, c);
  return n.totalLength = 0, n;
}
function cr(o, e, t) {
  e = e || 0, o.samples || (o.samples = [], o.lookup = []);
  var r = ~~o.resolution || 12, n = 1 / r, i = o.length, s = o[e], f = o[e + 1], c = e ? e / 6 * r : 0, l = o.samples, d = o.lookup, u = (e ? o.minLength : Ue) || Ue, h = l[c + t * r - 1], g = e ? l[c - 1] : 0, x, p, b, y, w, _, T, j, N, R, A, k, O, W, G, V, J;
  for (l.length = d.length = 0, p = e + 2; p < i; p += 6) {
    if (b = o[p + 4] - s, y = o[p + 2] - s, w = o[p] - s, j = o[p + 5] - f, N = o[p + 3] - f, R = o[p + 1] - f, _ = T = A = k = 0, X(b) < 0.01 && X(j) < 0.01 && X(w) + X(R) < 0.01)
      o.length > 8 && (o.splice(p, 6), p -= 6, i -= 6);
    else
      for (x = 1; x <= r; x++)
        W = n * x, O = 1 - W, _ = T - (T = (W * W * b + 3 * O * (W * y + O * w)) * W), A = k - (k = (W * W * j + 3 * O * (W * N + O * R)) * W), V = te(A * A + _ * _), V < u && (u = V), g += V, l[c++] = g;
    s += b, f += j;
  }
  if (h)
    for (h -= g; c < l.length; c++)
      l[c] += h;
  if (l.length && u) {
    if (o.totalLength = J = l[l.length - 1] || 0, o.minLength = u, J / u < 9999)
      for (V = G = 0, x = 0; x < J; x += u)
        d[V++] = l[G] < x ? ++G : G;
  } else
    o.totalLength = l[0] = 0;
  return e ? g - l[e / 2 - 1] : g;
}
function le(o, e) {
  var t, r, n;
  for (n = t = r = 0; n < o.length; n++)
    o[n].resolution = ~~e || 12, r += o[n].length, t += cr(o[n]);
  return o.totalPoints = r, o.totalLength = t, o;
}
function Xe(o, e, t) {
  if (t <= 0 || t >= 1)
    return 0;
  var r = o[e], n = o[e + 1], i = o[e + 2], s = o[e + 3], f = o[e + 4], c = o[e + 5], l = o[e + 6], d = o[e + 7], u = r + (i - r) * t, h = i + (f - i) * t, g = n + (s - n) * t, x = s + (c - s) * t, p = u + (h - u) * t, b = g + (x - g) * t, y = f + (l - f) * t, w = c + (d - c) * t;
  return h += (y - h) * t, x += (w - x) * t, o.splice(
    e + 2,
    4,
    M(u),
    //first control point
    M(g),
    M(p),
    //second control point
    M(b),
    M(p + (h - p) * t),
    //new fabricated anchor on line
    M(b + (x - b) * t),
    M(h),
    //third control point
    M(x),
    M(y),
    //fourth control point
    M(w)
  ), o.samples && o.samples.splice(e / 6 * o.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function pt(o, e, t, r) {
  t = t || {}, o.totalLength || le(o), (e < 0 || e > 1) && (e = bt(e));
  var n = 0, i = o[0], s, f, c, l, d, u, h;
  if (!e)
    h = u = n = 0, i = o[0];
  else if (e === 1)
    h = 1, n = o.length - 1, i = o[n], u = i.length - 8;
  else {
    if (o.length > 1) {
      for (c = o.totalLength * e, d = u = 0; (d += o[u++].totalLength) < c; )
        n = u;
      i = o[n], l = d - i.totalLength, e = (c - l) / (d - l) || 0;
    }
    s = i.samples, f = i.resolution, c = i.totalLength * e, u = i.lookup.length ? i.lookup[~~(c / i.minLength)] || 0 : yt(s, c, e), l = u ? s[u - 1] : 0, d = s[u], d < c && (l = d, d = s[++u]), h = 1 / f * ((c - l) / (d - l) + u % f), u = ~~(u / f) * 6, r && h === 1 && (u + 6 < i.length ? (u += 6, h = 0) : n + 1 < o.length && (u = h = 0, i = o[++n]));
  }
  return t.t = h, t.i = u, t.path = o, t.segment = i, t.segIndex = n, t;
}
function gt(o, e, t, r) {
  var n = o[0], i = r || {}, s, f, c, l, d, u, h, g, x;
  if ((e < 0 || e > 1) && (e = bt(e)), n.lookup || le(o), o.length > 1) {
    for (c = o.totalLength * e, d = u = 0; (d += o[u++].totalLength) < c; )
      n = o[u];
    l = d - n.totalLength, e = (c - l) / (d - l) || 0;
  }
  return s = n.samples, f = n.resolution, c = n.totalLength * e, u = n.lookup.length ? n.lookup[e < 1 ? ~~(c / n.minLength) : n.lookup.length - 1] || 0 : yt(s, c, e), l = u ? s[u - 1] : 0, d = s[u], d < c && (l = d, d = s[++u]), h = 1 / f * ((c - l) / (d - l) + u % f) || 0, x = 1 - h, u = ~~(u / f) * 6, g = n[u], i.x = M((h * h * (n[u + 6] - g) + 3 * x * (h * (n[u + 4] - g) + x * (n[u + 2] - g))) * h + g), i.y = M((h * h * (n[u + 7] - (g = n[u + 1])) + 3 * x * (h * (n[u + 5] - g) + x * (n[u + 3] - g))) * h + g), t && (i.angle = n.totalLength ? _t(n, u, h >= 1 ? 1 - 1e-9 : h || 1e-9) : n.angle || 0), i;
}
function ve(o, e, t, r, n, i, s) {
  for (var f = o.length, c, l, d, u, h; --f > -1; )
    for (c = o[f], l = c.length, d = 0; d < l; d += 2)
      u = c[d], h = c[d + 1], c[d] = u * e + h * r + i, c[d + 1] = u * t + h * n + s;
  return o._dirty = 1, o;
}
function fr(o, e, t, r, n, i, s, f, c) {
  if (!(o === f && e === c)) {
    t = X(t), r = X(r);
    var l = n % 360 * Ht, d = Me(l), u = Se(l), h = Math.PI, g = h * 2, x = (o - f) / 2, p = (e - c) / 2, b = d * x + u * p, y = -u * x + d * p, w = b * b, _ = y * y, T = w / (t * t) + _ / (r * r);
    T > 1 && (t = te(T) * t, r = te(T) * r);
    var j = t * t, N = r * r, R = (j * N - j * _ - N * w) / (j * _ + N * w);
    R < 0 && (R = 0);
    var A = (i === s ? -1 : 1) * te(R), k = A * (t * y / r), O = A * -(r * b / t), W = (o + f) / 2, G = (e + c) / 2, V = W + (d * k - u * O), J = G + (u * k + d * O), z = (b - k) / t, I = (y - O) / r, oe = (-b - k) / t, ce = (-y - O) / r, H = z * z + I * I, pe = (I < 0 ? -1 : 1) * Math.acos(z / te(H)), $ = (z * ce - I * oe < 0 ? -1 : 1) * Math.acos((z * oe + I * ce) / te(H * (oe * oe + ce * ce)));
    isNaN($) && ($ = h), !s && $ > 0 ? $ -= g : s && $ < 0 && ($ += g), pe %= g, $ %= g;
    var we = Math.ceil(X($) / (g / 4)), D = [], q = $ / we, ie = 4 / 3 * Se(q / 2) / (1 + Me(q / 2)), Ee = d * t, Ne = u * t, ke = u * -r, Te = d * r, B;
    for (B = 0; B < we; B++)
      n = pe + B * q, b = Me(n), y = Se(n), z = Me(n += q), I = Se(n), D.push(b - ie * y, y + ie * b, z + ie * I, I - ie * z, z, I);
    for (B = 0; B < D.length; B += 2)
      b = D[B], y = D[B + 1], D[B] = b * Ee + y * ke + V, D[B + 1] = b * Ne + y * Te + J;
    return D[B - 2] = f, D[B - 1] = c, D;
  }
}
function Oe(o) {
  var e = (o + "").replace(It, function(k) {
    var O = +k;
    return O < 1e-4 && O > -1e-4 ? 0 : O;
  }).match(Ut) || [], t = [], r = 0, n = 0, i = 2 / 3, s = e.length, f = 0, c = "ERROR: malformed path: " + o, l, d, u, h, g, x, p, b, y, w, _, T, j, N, R, A = function(O, W, G, V) {
    w = (G - O) / 3, _ = (V - W) / 3, p.push(O + w, W + _, G - w, V - _, G, V);
  };
  if (!o || !isNaN(e[0]) || isNaN(e[1]))
    return console.log(c), t;
  for (l = 0; l < s; l++)
    if (j = g, isNaN(e[l]) ? (g = e[l].toUpperCase(), x = g !== e[l]) : l--, u = +e[l + 1], h = +e[l + 2], x && (u += r, h += n), l || (b = u, y = h), g === "M")
      p && (p.length < 8 ? t.length -= 1 : f += p.length), r = b = u, n = y = h, p = [u, h], t.push(p), l += 2, g = "L";
    else if (g === "C")
      p || (p = [0, 0]), x || (r = n = 0), p.push(u, h, r + e[l + 3] * 1, n + e[l + 4] * 1, r += e[l + 5] * 1, n += e[l + 6] * 1), l += 6;
    else if (g === "S")
      w = r, _ = n, (j === "C" || j === "S") && (w += r - p[p.length - 4], _ += n - p[p.length - 3]), x || (r = n = 0), p.push(w, _, u, h, r += e[l + 3] * 1, n += e[l + 4] * 1), l += 4;
    else if (g === "Q")
      w = r + (u - r) * i, _ = n + (h - n) * i, x || (r = n = 0), r += e[l + 3] * 1, n += e[l + 4] * 1, p.push(w, _, r + (u - r) * i, n + (h - n) * i, r, n), l += 4;
    else if (g === "T")
      w = r - p[p.length - 4], _ = n - p[p.length - 3], p.push(r + w, n + _, u + (r + w * 1.5 - u) * i, h + (n + _ * 1.5 - h) * i, r = u, n = h), l += 2;
    else if (g === "H")
      A(r, n, r = u, n), l += 1;
    else if (g === "V")
      A(r, n, r, n = u + (x ? n - r : 0)), l += 1;
    else if (g === "L" || g === "Z")
      g === "Z" && (u = b, h = y, p.closed = !0), (g === "L" || X(r - u) > 0.5 || X(n - h) > 0.5) && (A(r, n, u, h), g === "L" && (l += 2)), r = u, n = h;
    else if (g === "A") {
      if (N = e[l + 4], R = e[l + 5], w = e[l + 6], _ = e[l + 7], d = 7, N.length > 1 && (N.length < 3 ? (_ = w, w = R, d--) : (_ = R, w = N.substr(2), d -= 2), R = N.charAt(1), N = N.charAt(0)), T = fr(r, n, +e[l + 1], +e[l + 2], +e[l + 3], +N, +R, (x ? r : 0) + w * 1, (x ? n : 0) + _ * 1), l += d, T)
        for (d = 0; d < T.length; d++)
          p.push(T[d]);
      r = p[p.length - 2], n = p[p.length - 1];
    } else
      console.log(c);
  return l = p.length, l < 6 ? (t.pop(), l = 0) : p[0] === p[l - 2] && p[1] === p[l - 1] && (p.closed = !0), t.totalPoints = f + l, t;
}
function ur(o, e) {
  e === void 0 && (e = 1);
  for (var t = o[0], r = 0, n = [t, r], i = 2; i < o.length; i += 2)
    n.push(t, r, o[i], r = (o[i] - t) * e / 2, t = o[i], -r);
  return n;
}
function Ie(o, e) {
  X(o[0] - o[2]) < 1e-4 && X(o[1] - o[3]) < 1e-4 && (o = o.slice(2));
  var t = o.length - 2, r = +o[0], n = +o[1], i = +o[2], s = +o[3], f = [r, n, r, n], c = i - r, l = s - n, d = Math.abs(o[t] - r) < 1e-3 && Math.abs(o[t + 1] - n) < 1e-3, u, h, g, x, p, b, y, w, _, T, j, N, R, A, k;
  for (d && (o.push(i, s), i = r, s = n, r = o[t - 2], n = o[t - 1], o.unshift(r, n), t += 4), e = e || e === 0 ? +e : 1, g = 2; g < t; g += 2)
    u = r, h = n, r = i, n = s, i = +o[g + 2], s = +o[g + 3], !(r === i && n === s) && (x = c, p = l, c = i - r, l = s - n, b = te(x * x + p * p), y = te(c * c + l * l), w = te(Math.pow(c / y + x / b, 2) + Math.pow(l / y + p / b, 2)), _ = (b + y) * e * 0.25 / w, T = r - (r - u) * (b ? _ / b : 0), j = r + (i - r) * (y ? _ / y : 0), N = r - (T + ((j - T) * (b * 3 / (b + y) + 0.5) / 4 || 0)), R = n - (n - h) * (b ? _ / b : 0), A = n + (s - n) * (y ? _ / y : 0), k = n - (R + ((A - R) * (b * 3 / (b + y) + 0.5) / 4 || 0)), (r !== u || n !== h) && f.push(
      M(T + N),
      // first control point
      M(R + k),
      M(r),
      // anchor
      M(n),
      M(j + N),
      // second control point
      M(A + k)
    ));
  return r !== i || n !== s || f.length < 4 ? f.push(M(i), M(s), M(i), M(s)) : f.length -= 2, f.length === 2 ? f.push(r, n, r, n, r, n) : d && (f.splice(0, 6), f.length = f.length - 6), f;
}
function Et(o) {
  vt(o[0]) && (o = [o]);
  var e = "", t = o.length, r, n, i, s;
  for (n = 0; n < t; n++) {
    for (s = o[n], e += "M" + M(s[0]) + "," + M(s[1]) + " C", r = s.length, i = 2; i < r; i++)
      e += M(s[i++]) + "," + M(s[i++]) + " " + M(s[i++]) + "," + M(s[i++]) + " " + M(s[i++]) + "," + M(s[i]) + " ";
    s.closed && (e += "z");
  }
  return e;
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
var re, se, Je, Ve, be, Ae, We, ye, F = "transform", Fe = F + "Origin", Nt, kt = function(e) {
  var t = e.ownerDocument || e;
  for (!(F in e.style) && ("msTransform" in e.style) && (F = "msTransform", Fe = F + "Origin"); t.parentNode && (t = t.parentNode); )
    ;
  if (se = window, We = new _e(), t) {
    re = t, Je = t.documentElement, Ve = t.body, ye = re.createElementNS("http://www.w3.org/2000/svg", "g"), ye.style.transform = "none";
    var r = t.createElement("div"), n = t.createElement("div"), i = t && (t.body || t.firstElementChild);
    i && i.appendChild && (i.appendChild(r), r.appendChild(n), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), Nt = n.offsetParent !== r, i.removeChild(r));
  }
  return t;
}, dr = function(e) {
  for (var t, r; e && e !== Ve; )
    r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
  return t;
}, Tt = [], Lt = [], hr = function() {
  return se.pageYOffset || re.scrollTop || Je.scrollTop || Ve.scrollTop || 0;
}, pr = function() {
  return se.pageXOffset || re.scrollLeft || Je.scrollLeft || Ve.scrollLeft || 0;
}, Qe = function(e) {
  return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, gr = function o(e) {
  if (se.getComputedStyle(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return o(e);
}, Ge = function o(e, t) {
  if (e.parentNode && (re || kt(e))) {
    var r = Qe(e), n = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", i = r ? t ? "rect" : "g" : "div", s = t !== 2 ? 0 : 100, f = t === 3 ? 100 : 0, c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = re.createElementNS ? re.createElementNS(n.replace(/^https/, "http"), i) : re.createElement(i);
    return t && (r ? (Ae || (Ae = o(e)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + f + ")"), Ae.appendChild(l)) : (be || (be = o(e), be.style.cssText = c), l.style.cssText = c + "width:0.1px;height:0.1px;top:" + f + "px;left:" + s + "px", be.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, xr = function(e) {
  for (var t = new _e(), r = 0; r < e.numberOfItems; r++)
    t.multiply(e.getItem(r).matrix);
  return t;
}, mr = function(e) {
  var t = e.getCTM(), r;
  return t || (r = e.style[F], e.style[F] = "none", e.appendChild(ye), t = ye.getCTM(), e.removeChild(ye), r ? e.style[F] = r : e.style.removeProperty(F.replace(/([A-Z])/g, "-$1").toLowerCase())), t || We.clone();
}, Cr = function(e, t) {
  var r = Qe(e), n = e === r, i = r ? Tt : Lt, s = e.parentNode, f, c, l, d, u, h;
  if (e === se)
    return e;
  if (i.length || i.push(Ge(e, 1), Ge(e, 2), Ge(e, 3)), f = r ? Ae : be, r)
    n ? (l = mr(e), d = -l.e / l.a, u = -l.f / l.d, c = We) : e.getBBox ? (l = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? xr(c) : c.getItem(0).matrix : We, d = c.a * l.x + c.c * l.y, u = c.b * l.x + c.d * l.y) : (c = new _e(), d = u = 0), t && e.tagName.toLowerCase() === "g" && (d = u = 0), (n ? r : s).appendChild(f), f.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + d) + "," + (c.f + u) + ")");
  else {
    if (d = u = 0, Nt)
      for (c = e.offsetParent, l = e; l && (l = l.parentNode) && l !== c && l.parentNode; )
        (se.getComputedStyle(l)[F] + "").length > 4 && (d = l.offsetLeft, u = l.offsetTop, l = 0);
    if (h = se.getComputedStyle(e), h.position !== "absolute" && h.position !== "fixed")
      for (c = e.offsetParent; s && s !== c; )
        d += s.scrollLeft || 0, u += s.scrollTop || 0, s = s.parentNode;
    l = f.style, l.top = e.offsetTop - u + "px", l.left = e.offsetLeft - d + "px", l[F] = h[F], l[Fe] = h[Fe], l.position = h.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(f);
  }
  return f;
}, ze = function(e, t, r, n, i, s, f) {
  return e.a = t, e.b = r, e.c = n, e.d = i, e.e = s, e.f = f, e;
}, _e = /* @__PURE__ */ function() {
  function o(t, r, n, i, s, f) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), n === void 0 && (n = 0), i === void 0 && (i = 1), s === void 0 && (s = 0), f === void 0 && (f = 0), ze(this, t, r, n, i, s, f);
  }
  var e = o.prototype;
  return e.inverse = function() {
    var r = this.a, n = this.b, i = this.c, s = this.d, f = this.e, c = this.f, l = r * s - n * i || 1e-10;
    return ze(this, s / l, -n / l, -i / l, r / l, (i * c - s * f) / l, -(r * c - n * f) / l);
  }, e.multiply = function(r) {
    var n = this.a, i = this.b, s = this.c, f = this.d, c = this.e, l = this.f, d = r.a, u = r.c, h = r.b, g = r.d, x = r.e, p = r.f;
    return ze(this, d * n + h * s, d * i + h * f, u * n + g * s, u * i + g * f, c + x * n + p * s, l + x * i + p * f);
  }, e.clone = function() {
    return new o(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var n = this.a, i = this.b, s = this.c, f = this.d, c = this.e, l = this.f;
    return n === r.a && i === r.b && s === r.c && f === r.d && c === r.e && l === r.f;
  }, e.apply = function(r, n) {
    n === void 0 && (n = {});
    var i = r.x, s = r.y, f = this.a, c = this.b, l = this.c, d = this.d, u = this.e, h = this.f;
    return n.x = i * f + s * l + u || 0, n.y = i * c + s * d + h || 0, n;
  }, o;
}();
function he(o, e, t, r) {
  if (!o || !o.parentNode || (re || kt(o)).documentElement === o)
    return new _e();
  var n = dr(o), i = Qe(o), s = i ? Tt : Lt, f = Cr(o, t), c = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), d = s[2].getBoundingClientRect(), u = f.parentNode, h = !r && gr(o), g = new _e((l.left - c.left) / 100, (l.top - c.top) / 100, (d.left - c.left) / 100, (d.top - c.top) / 100, c.left + (h ? 0 : pr()), c.top + (h ? 0 : hr()));
  if (u.removeChild(f), n)
    for (c = n.length; c--; )
      l = n[c], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return e ? g.inverse() : g;
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
var vr = "x,translateX,left,marginLeft,xPercent".split(","), br = "y,translateY,top,marginTop,yPercent".split(","), yr = Math.PI / 180, U, jt, ue, He, De, xt, _r = function() {
  return U || typeof window < "u" && (U = window.gsap) && U.registerPlugin && U;
}, Ce = function(e, t, r, n) {
  for (var i = t.length, s = n === 2 ? 0 : n, f = 0; f < i; f++)
    e[s] = parseFloat(t[f][r]), n === 2 && (e[s + 1] = 0), s += 2;
  return e;
}, de = function(e, t, r) {
  return parseFloat(e._gsap.get(e, t, r || "px")) || 0;
}, St = function(e) {
  var t = e[0], r = e[1], n;
  for (n = 2; n < e.length; n += 2)
    t = e[n] += t, r = e[n + 1] += r;
}, mt = function(e, t, r, n, i, s, f, c, l) {
  if (f.type === "cubic")
    t = [t];
  else {
    f.fromCurrent !== !1 && t.unshift(de(r, n, c), i ? de(r, i, l) : 0), f.relative && St(t);
    var d = i ? Ie : ur;
    t = [d(t, f.curviness)];
  }
  return t = s(Mt(t, r, f)), $e(e, r, n, t, "x", c), i && $e(e, r, i, t, "y", l), le(t, f.resolution || (f.curviness === 0 ? 20 : 12));
}, wr = function(e) {
  return e;
}, Er = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, Ct = function(e, t, r) {
  var n = he(e), i = 0, s = 0, f;
  return (e.tagName + "").toLowerCase() === "svg" ? (f = e.viewBox.baseVal, f.width || (f = {
    width: +e.getAttribute("width"),
    height: +e.getAttribute("height")
  })) : f = t && e.getBBox && e.getBBox(), t && t !== "auto" && (i = t.push ? t[0] * (f ? f.width : e.offsetWidth || 0) : t.x, s = t.push ? t[1] * (f ? f.height : e.offsetHeight || 0) : t.y), r.apply(i || s ? n.apply({
    x: i,
    y: s
  }) : {
    x: n.e,
    y: n.f
  });
}, qe = function(e, t, r, n) {
  var i = he(e.parentNode, !0, !0), s = i.clone().multiply(he(t)), f = Ct(e, r, i), c = Ct(t, n, i), l = c.x, d = c.y, u;
  return s.e = s.f = 0, n === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (u = t.getAttribute("d").match(Er) || [], u = s.apply({
    x: +u[0],
    y: +u[1]
  }), l += u.x, d += u.y), u && (u = s.apply(t.getBBox()), l -= u.x, d -= u.y), s.e = l - f.x, s.f = d - f.y, s;
}, Mt = function(e, t, r) {
  var n = r.align, i = r.matrix, s = r.offsetX, f = r.offsetY, c = r.alignOrigin, l = e[0][0], d = e[0][1], u = de(t, "x"), h = de(t, "y"), g, x, p;
  return !e || !e.length ? Re("M0,0L0,0") : (n && (n === "self" || (g = He(n)[0] || t) === t ? ve(e, 1, 0, 0, 1, u - l, h - d) : (c && c[2] !== !1 ? U.set(t, {
    transformOrigin: c[0] * 100 + "% " + c[1] * 100 + "%"
  }) : c = [de(t, "xPercent") / -100, de(t, "yPercent") / -100], x = qe(t, g, c, "auto"), p = x.apply({
    x: l,
    y: d
  }), ve(e, x.a, x.b, x.c, x.d, u + x.e - (p.x - x.e), h + x.f - (p.y - x.f)))), i ? ve(e, i.a, i.b, i.c, i.d, i.e, i.f) : (s || f) && ve(e, 1, 0, 0, 1, s || 0, f || 0), e);
}, $e = function(e, t, r, n, i, s) {
  var f = t._gsap, c = f.harness, l = c && c.aliases && c.aliases[r], d = l && l.indexOf(",") < 0 ? l : r, u = e._pt = new jt(e._pt, t, d, 0, 0, wr, 0, f.set(t, d, e));
  u.u = ue(f.get(t, d, s)) || 0, u.path = n, u.pp = i, e._props.push(d);
}, Nr = function(e, t) {
  return function(r) {
    return e || t !== 1 ? wt(r, e, t) : r;
  };
}, Rt = {
  version: "3.12.5",
  name: "motionPath",
  register: function(e, t, r) {
    U = e, ue = U.utils.getUnit, He = U.utils.toArray, De = U.core.getStyleSaver, xt = U.core.reverting || function() {
    }, jt = r;
  },
  init: function(e, t, r) {
    if (!U)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof t == "object" && !t.style) || !t.path) && (t = {
      path: t
    });
    var n = [], i = t, s = i.path, f = i.autoRotate, c = i.unitX, l = i.unitY, d = i.x, u = i.y, h = s[0], g = Nr(t.start, "end" in t ? t.end : 1), x, p;
    if (this.rawPaths = n, this.target = e, this.tween = r, this.styles = De && De(e, "transform"), (this.rotate = f || f === 0) && (this.rOffset = parseFloat(f) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = ue(e._gsap.get(e, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && typeof h != "number") {
      for (p in h)
        !d && ~vr.indexOf(p) ? d = p : !u && ~br.indexOf(p) && (u = p);
      d && u ? n.push(mt(this, Ce(Ce([], s, d, 0), s, u, 1), e, d, u, g, t, c || ue(s[0][d]), l || ue(s[0][u]))) : d = u = 0;
      for (p in h)
        p !== d && p !== u && n.push(mt(this, Ce([], s, p, 2), e, p, 0, g, t, ue(s[0][p])));
    } else
      x = g(Mt(Re(t.path), e, t)), le(x, t.resolution), n.push(x), $e(this, e, t.x || "x", x, "x", t.unitX || "px"), $e(this, e, t.y || "y", x, "y", t.unitY || "px");
  },
  render: function(e, t) {
    var r = t.rawPaths, n = r.length, i = t._pt;
    if (t.tween._time || !xt()) {
      for (e > 1 ? e = 1 : e < 0 && (e = 0); n--; )
        gt(r[n], e, !n && t.rotate, r[n]);
      for (; i; )
        i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, e), i = i._next;
      t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? yr : 1) + t.rOffset + t.ru, t, e);
    } else
      t.styles.revert();
  },
  getLength: function(e) {
    return le(Re(e)).totalLength;
  },
  sliceRawPath: wt,
  getRawPath: Re,
  pointsToSegment: Ie,
  stringToRawPath: Oe,
  rawPathToString: Et,
  transformRawPath: ve,
  getGlobalMatrix: he,
  getPositionOnPath: gt,
  cacheRawPathMeasurements: le,
  convertToPath: function(e, t) {
    return He(e).map(function(r) {
      return sr(r, t !== !1);
    });
  },
  convertCoordinates: function(e, t, r) {
    var n = he(t, !0, !0).multiply(he(e));
    return r ? n.apply(r) : n;
  },
  getAlignMatrix: qe,
  getRelativePosition: function(e, t, r, n) {
    var i = qe(e, t, r, n);
    return {
      x: i.e,
      y: i.f
    };
  },
  arrayToRawPath: function(e, t) {
    t = t || {};
    var r = Ce(Ce([], e, t.x || "x", 0), e, t.y || "y", 1);
    return t.relative && St(r), [t.type === "cubic" ? r : Ie(r, t.curviness)];
  }
};
_r() && U.registerPlugin(Rt);
$t.registerPlugin(Rt);
const Ar = ({ children: o }) => /* @__PURE__ */ v.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ v.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ v.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ v.jsx(Gt, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ v.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ v.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ v.jsx(ct, {}) }),
  /* @__PURE__ */ v.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ v.jsx(ct, {}) }),
  /* @__PURE__ */ v.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ v.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ v.jsx("div", { className: "content", children: o }) }) })
] }), Pr = ({
  headBlockChildren: o,
  width: e,
  height: t,
  borderColor: r,
  textColor: n,
  mainBlockChildren: i,
  animated: s
}) => /* @__PURE__ */ v.jsxs("div", { className: "card-container relative", style: { width: e, height: t }, children: [
  /* @__PURE__ */ v.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ v.jsx("div", { className: `text-${n} head-block`, children: o }),
        /* @__PURE__ */ v.jsx("div", { className: `text-${n} main-block'`, children: i })
      ]
    }
  ),
  /* @__PURE__ */ v.jsx(
    "div",
    {
      className: `artifact text-${r} ${s ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ v.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] });
export {
  Pr as Card,
  jr as EvaBorderPanel,
  Rr as EvaOptionList,
  Sr as EvaProgressBar,
  Gt as EvaTilePanel,
  Mr as EvaUnitBox,
  Lr as FingerPrintButton,
  Ar as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
