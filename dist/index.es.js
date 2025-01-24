import * as a from "react";
import Pe, { useRef as ve, useMemo as Ve, createElement as Ze } from "react";
import N from "gsap";
var he = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Fe() {
  if (_e) return me;
  _e = 1;
  var n = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function c(d, f, C) {
    var h = null;
    if (C !== void 0 && (h = "" + C), f.key !== void 0 && (h = "" + f.key), "key" in f) {
      C = {};
      for (var v in f)
        v !== "key" && (C[v] = f[v]);
    } else C = f;
    return f = C.ref, {
      $$typeof: n,
      type: d,
      key: h,
      ref: f !== void 0 ? f : null,
      props: C
    };
  }
  return me.Fragment = u, me.jsx = c, me.jsxs = c, me;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function Ge() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === je ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case W:
          return "Fragment";
        case we:
          return "Portal";
        case X:
          return "Profiler";
        case J:
          return "StrictMode";
        case V:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case F:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function c(e) {
      try {
        u(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var r = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), u(e);
      }
    }
    function d() {
    }
    function f() {
      if (T === 0) {
        te = console.log, re = console.info, oe = console.warn, ne = console.error, ae = console.group, le = console.groupCollapsed, se = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      T++;
    }
    function C() {
      if (T--, T === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: j({}, e, { value: te }),
          info: j({}, e, { value: re }),
          warn: j({}, e, { value: oe }),
          error: j({}, e, { value: ne }),
          group: j({}, e, { value: ae }),
          groupCollapsed: j({}, e, { value: le }),
          groupEnd: j({}, e, { value: se })
        });
      }
      0 > T && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function h(e) {
      if (B === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          B = t && t[1] || "", ie = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + B + e + ie;
    }
    function v(e, t) {
      if (!e || U) return "";
      var r = Y.get(e);
      if (r !== void 0) return r;
      U = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var l = null;
      l = E.H, E.H = null, f();
      try {
        var x = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var w = function() {
                  throw Error();
                };
                if (Object.defineProperty(w.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(w, []);
                  } catch (k) {
                    var M = k;
                  }
                  Reflect.construct(e, [], w);
                } else {
                  try {
                    w.call();
                  } catch (k) {
                    M = k;
                  }
                  e.call(w.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (k) {
                  M = k;
                }
                (w = e()) && typeof w.catch == "function" && w.catch(function() {
                });
              }
            } catch (k) {
              if (k && M && typeof k.stack == "string")
                return [k.stack, M.stack];
            }
            return [null, null];
          }
        };
        x.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          x.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          x.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = x.DetermineComponentFrameRoot(), y = o[0], _ = o[1];
        if (y && _) {
          var g = y.split(`
`), L = _.split(`
`);
          for (o = p = 0; p < g.length && !g[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; o < L.length && !L[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (p === g.length || o === L.length)
            for (p = g.length - 1, o = L.length - 1; 1 <= p && 0 <= o && g[p] !== L[o]; )
              o--;
          for (; 1 <= p && 0 <= o; p--, o--)
            if (g[p] !== L[o]) {
              if (p !== 1 || o !== 1)
                do
                  if (p--, o--, 0 > o || g[p] !== L[o]) {
                    var O = `
` + g[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, O), O;
                  }
                while (1 <= p && 0 <= o);
              break;
            }
        }
      } finally {
        U = !1, E.H = l, C(), Error.prepareStackTrace = r;
      }
      return g = (g = e ? e.displayName || e.name : "") ? h(g) : "", typeof e == "function" && Y.set(e, g), g;
    }
    function m(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return v(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return h(e);
      switch (e) {
        case V:
          return h("Suspense");
        case Z:
          return h("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return e = v(e.render, !1), e;
          case D:
            return m(e.type);
          case F:
            t = e._payload, e = e._init;
            try {
              return m(e(t));
            } catch {
            }
        }
      return "";
    }
    function b() {
      var e = E.A;
      return e === null ? null : e.getOwner();
    }
    function R(e) {
      if (ee.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function S(e, t) {
      function r() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: r,
        configurable: !0
      });
    }
    function be() {
      var e = n(this.type);
      return de[e] || (de[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ye(e, t, r, l, x, p) {
      return r = p.ref, e = {
        $$typeof: A,
        type: e,
        key: t,
        props: p,
        _owner: x
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function I(e, t, r, l, x, p) {
      if (typeof e == "string" || typeof e == "function" || e === W || e === X || e === J || e === V || e === Z || e === Ee || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === D || e.$$typeof === Q || e.$$typeof === K || e.$$typeof === P || e.$$typeof === Le || e.getModuleId !== void 0)) {
        var o = t.children;
        if (o !== void 0)
          if (l)
            if (G(o)) {
              for (l = 0; l < o.length; l++)
                z(o[l], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else z(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : G(e) ? l = "array" : e !== void 0 && e.$$typeof === A ? (l = "<" + (n(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          l,
          o
        );
      if (ee.call(t, "key")) {
        o = n(e);
        var y = Object.keys(t).filter(function(g) {
          return g !== "key";
        });
        l = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", fe[o + l] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          o,
          y,
          o
        ), fe[o + l] = !0);
      }
      if (o = null, r !== void 0 && (c(r), o = "" + r), R(t) && (c(t.key), o = "" + t.key), "key" in t) {
        r = {};
        for (var _ in t)
          _ !== "key" && (r[_] = t[_]);
      } else r = t;
      return o && S(
        r,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ye(e, o, p, x, b(), r);
    }
    function z(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
        if (G(e))
          for (var r = 0; r < e.length; r++) {
            var l = e[r];
            $(l) && H(l, t);
          }
        else if ($(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? r = null : (r = q && e[q] || e["@@iterator"], r = typeof r == "function" ? r : null), typeof r == "function" && r !== e.entries && (r = r.call(e), r !== e))
          for (; !(e = r.next()).done; )
            $(e.value) && H(e.value, t);
      }
    }
    function $(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function H(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = ke(t), !ue[t])) {
        ue[t] = !0;
        var r = "";
        e && e._owner != null && e._owner !== b() && (r = null, typeof e._owner.tag == "number" ? r = n(e._owner.type) : typeof e._owner.name == "string" && (r = e._owner.name), r = " It was passed a child from " + r + ".");
        var l = E.getCurrentStack;
        E.getCurrentStack = function() {
          var x = m(e.type);
          return l && (x += l() || ""), x;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          r
        ), E.getCurrentStack = l;
      }
    }
    function ke(e) {
      var t = "", r = b();
      return r && (r = n(r.type)) && (t = `

Check the render method of \`` + r + "`."), t || (e = n(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var Ne = Pe, A = Symbol.for("react.transitional.element"), we = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var K = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), q = Symbol.iterator, je = Symbol.for("react.client.reference"), E = Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, j = Object.assign, Le = Symbol.for("react.client.reference"), G = Array.isArray, T = 0, te, re, oe, ne, ae, le, se;
    d.__reactDisabledLog = !0;
    var B, ie, U = !1, Y = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), ce, de = {}, fe = {}, ue = {};
    pe.Fragment = W, pe.jsx = function(e, t, r, l, x) {
      return I(e, t, r, !1, l, x);
    }, pe.jsxs = function(e, t, r, l, x) {
      return I(e, t, r, !0, l, x);
    };
  }()), pe;
}
var dt = he.exports, Oe;
function Be() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? he.exports = Fe() : he.exports = Ge()), he.exports;
}
var s = Be();
const ft = ({
  children: n,
  mode: u = "warning",
  pulseAnimation: c = !0
}) => /* @__PURE__ */ s.jsx("div", { className: `piece ${c && "animate-pulse"}`, children: /* @__PURE__ */ s.jsx(
  "div",
  {
    className: `glowedBorder ${u === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${u} label`,
    children: n
  }
) }), ut = ({ barsCount: n, currentBarIndex: u }) => {
  function c() {
    const d = [];
    for (let f = 0; f < n; f++)
      d.push(
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${f < u ? "visible" : "hidden"}`
          },
          f
        )
      );
    return d;
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${n * 10}px` }, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ s.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ s.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ s.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ s.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ s.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ s.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: c() }),
    /* @__PURE__ */ s.jsx("div", { className: "h-[15px]" })
  ] });
}, mt = ({ unitNumber: n, subjectName: u }) => /* @__PURE__ */ s.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ s.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ s.jsx("div", { className: "text-2xl font-[600] label", children: n }),
  /* @__PURE__ */ s.jsx("div", { className: "text-xl font-[400] label", children: u })
] }), Ue = (n) => /* @__PURE__ */ a.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ a.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ a.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ a.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ a.createElement("defs", null, /* @__PURE__ */ a.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ a.createElement("rect", { width: 80, height: 80, fill: "white" })))), pt = ({ width: n, height: u }) => {
  const c = ve(null), d = ve(
    N.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), f = (m) => (d.current.clear(), d.current.to(m(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(m(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(m(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(m(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(m(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(m(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(m(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(m(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(m("text"), {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  }).to(m(".scanner"), {
    opacity: 1,
    y: 80,
    duration: 1,
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
  })), C = (m, b = !1) => {
    m.forEach((R) => {
      const S = R.getTotalLength();
      b ? N.to(R, {
        stroke: "currentColor"
      }) : (N.set(R, {
        strokeDasharray: S,
        strokeDashoffset: S,
        stroke: "transparent"
      }), N.to(R, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, h = () => {
    const m = N.utils.selector(c.current), b = m(".stroke-fng");
    C(b), f(m), d.current.play();
  }, v = () => {
    if (c.current) {
      const m = N.utils.selector(c.current), b = m(".stroke-fng");
      d.current.reverse(), N.killTweensOf(b), C(b, !0), N.killTweensOf(m(".scanner")), N.set(m(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ s.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: h,
      onMouseLeave: v,
      style: { height: u, width: n },
      children: /* @__PURE__ */ s.jsx(Ue, { ref: c })
    }
  );
}, Ye = ({
  rowsCount: n,
  tilesPerRowCount: u,
  animationActive: c = !1
}) => {
  function d() {
    return Array(n).fill(null).map((f, C) => /* @__PURE__ */ s.jsx("div", { className: "hex-row rotate-method", children: Array(u).fill(null).map((h, v) => /* @__PURE__ */ s.jsx("div", { className: `hex ${c ? "animation-active" : ""}` }, v)) }, C));
  }
  return /* @__PURE__ */ s.jsx("div", { className: "piece rotateMethod", children: d() });
}, Ie = (n) => Ve(() => {
  const u = (C, h) => {
    const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return v[(C + h) % v.length];
  }, c = (C, h) => (C % h).toString(), d = `U-${c(n * 3, 9)}`, f = `${u(n, 20)}${c(n * 7, 99)}`;
  return `${d}${f}`;
}, [n]), ze = ({ title: n, sciFiCode: u, isActive: c }) => {
  const d = Ie(u);
  return /* @__PURE__ */ s.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ s.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${c ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ s.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: d })
          }
        ),
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${c ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `font-bold w-full ${c ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: n
                }
              ),
              /* @__PURE__ */ s.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                d,
                " AV-OK"
              ] }),
              /* @__PURE__ */ s.jsx(
                "div",
                {
                  className: `w-[10px] h-[5px] mr-10 mt-auto 
            ${c ? "bg-white" : "dark:group-hover:bg-[#0F172A] group-hover:bg-white"}
          `
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Ct = ({ options: n, width: u = "w-full" }) => /* @__PURE__ */ s.jsx("div", { className: `flex flex-col gap-2 ${u}`, children: n.map((c, d) => /* @__PURE__ */ Ze(ze, { ...c, key: d, sciFiCode: d })) }), Se = () => /* @__PURE__ */ s.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ s.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ s.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ s.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] }), ht = ({ children: n }) => /* @__PURE__ */ s.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ s.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ s.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ s.jsx(Ye, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ s.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ s.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ s.jsx(Se, {}) }),
  /* @__PURE__ */ s.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ s.jsx(Se, {}) }),
  /* @__PURE__ */ s.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ s.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ s.jsx("div", { className: "content", children: n }) }) })
] }), xt = ({
  headBlockChildren: n,
  width: u,
  height: c,
  borderColor: d,
  textColor: f,
  mainBlockChildren: C,
  animated: h
}) => /* @__PURE__ */ s.jsxs("div", { className: "card-container relative", style: { width: u, height: c }, children: [
  /* @__PURE__ */ s.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${d} ${h ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: `text-${f} head-block`, children: n }),
        /* @__PURE__ */ s.jsx("div", { className: `text-${f} main-block'`, children: C })
      ]
    }
  ),
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `artifact text-${d} ${h ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ s.jsx(
    "div",
    {
      className: `icon-artifact text-${d} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] });
var ge = { exports: {} }, Ce = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function He() {
  if (Me) return Ce;
  Me = 1;
  var n = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function c(d, f, C) {
    var h = null;
    if (C !== void 0 && (h = "" + C), f.key !== void 0 && (h = "" + f.key), "key" in f) {
      C = {};
      for (var v in f)
        v !== "key" && (C[v] = f[v]);
    } else C = f;
    return f = C.ref, {
      $$typeof: n,
      type: d,
      key: h,
      ref: f !== void 0 ? f : null,
      props: C
    };
  }
  return Ce.Fragment = u, Ce.jsx = c, Ce.jsxs = c, Ce;
}
var xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function Je() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === je ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case W:
          return "Fragment";
        case we:
          return "Portal";
        case X:
          return "Profiler";
        case J:
          return "StrictMode";
        case V:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Q:
            return (e.displayName || "Context") + ".Provider";
          case K:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case D:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case F:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function c(e) {
      try {
        u(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var r = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return r.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), u(e);
      }
    }
    function d() {
    }
    function f() {
      if (T === 0) {
        te = console.log, re = console.info, oe = console.warn, ne = console.error, ae = console.group, le = console.groupCollapsed, se = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: d,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      T++;
    }
    function C() {
      if (T--, T === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: j({}, e, { value: te }),
          info: j({}, e, { value: re }),
          warn: j({}, e, { value: oe }),
          error: j({}, e, { value: ne }),
          group: j({}, e, { value: ae }),
          groupCollapsed: j({}, e, { value: le }),
          groupEnd: j({}, e, { value: se })
        });
      }
      0 > T && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function h(e) {
      if (B === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          B = t && t[1] || "", ie = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + B + e + ie;
    }
    function v(e, t) {
      if (!e || U) return "";
      var r = Y.get(e);
      if (r !== void 0) return r;
      U = !0, r = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var l = null;
      l = E.H, E.H = null, f();
      try {
        var x = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var w = function() {
                  throw Error();
                };
                if (Object.defineProperty(w.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(w, []);
                  } catch (k) {
                    var M = k;
                  }
                  Reflect.construct(e, [], w);
                } else {
                  try {
                    w.call();
                  } catch (k) {
                    M = k;
                  }
                  e.call(w.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (k) {
                  M = k;
                }
                (w = e()) && typeof w.catch == "function" && w.catch(function() {
                });
              }
            } catch (k) {
              if (k && M && typeof k.stack == "string")
                return [k.stack, M.stack];
            }
            return [null, null];
          }
        };
        x.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var p = Object.getOwnPropertyDescriptor(
          x.DetermineComponentFrameRoot,
          "name"
        );
        p && p.configurable && Object.defineProperty(
          x.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var o = x.DetermineComponentFrameRoot(), y = o[0], _ = o[1];
        if (y && _) {
          var g = y.split(`
`), L = _.split(`
`);
          for (o = p = 0; p < g.length && !g[p].includes(
            "DetermineComponentFrameRoot"
          ); )
            p++;
          for (; o < L.length && !L[o].includes(
            "DetermineComponentFrameRoot"
          ); )
            o++;
          if (p === g.length || o === L.length)
            for (p = g.length - 1, o = L.length - 1; 1 <= p && 0 <= o && g[p] !== L[o]; )
              o--;
          for (; 1 <= p && 0 <= o; p--, o--)
            if (g[p] !== L[o]) {
              if (p !== 1 || o !== 1)
                do
                  if (p--, o--, 0 > o || g[p] !== L[o]) {
                    var O = `
` + g[p].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, O), O;
                  }
                while (1 <= p && 0 <= o);
              break;
            }
        }
      } finally {
        U = !1, E.H = l, C(), Error.prepareStackTrace = r;
      }
      return g = (g = e ? e.displayName || e.name : "") ? h(g) : "", typeof e == "function" && Y.set(e, g), g;
    }
    function m(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var t = e.prototype;
        return v(
          e,
          !(!t || !t.isReactComponent)
        );
      }
      if (typeof e == "string") return h(e);
      switch (e) {
        case V:
          return h("Suspense");
        case Z:
          return h("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case P:
            return e = v(e.render, !1), e;
          case D:
            return m(e.type);
          case F:
            t = e._payload, e = e._init;
            try {
              return m(e(t));
            } catch {
            }
        }
      return "";
    }
    function b() {
      var e = E.A;
      return e === null ? null : e.getOwner();
    }
    function R(e) {
      if (ee.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function S(e, t) {
      function r() {
        ce || (ce = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      r.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: r,
        configurable: !0
      });
    }
    function be() {
      var e = n(this.type);
      return de[e] || (de[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function ye(e, t, r, l, x, p) {
      return r = p.ref, e = {
        $$typeof: A,
        type: e,
        key: t,
        props: p,
        _owner: x
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: be
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function I(e, t, r, l, x, p) {
      if (typeof e == "string" || typeof e == "function" || e === W || e === X || e === J || e === V || e === Z || e === Ee || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === D || e.$$typeof === Q || e.$$typeof === K || e.$$typeof === P || e.$$typeof === Le || e.getModuleId !== void 0)) {
        var o = t.children;
        if (o !== void 0)
          if (l)
            if (G(o)) {
              for (l = 0; l < o.length; l++)
                z(o[l], e);
              Object.freeze && Object.freeze(o);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else z(o, e);
      } else
        o = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? l = "null" : G(e) ? l = "array" : e !== void 0 && e.$$typeof === A ? (l = "<" + (n(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          l,
          o
        );
      if (ee.call(t, "key")) {
        o = n(e);
        var y = Object.keys(t).filter(function(g) {
          return g !== "key";
        });
        l = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", fe[o + l] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          o,
          y,
          o
        ), fe[o + l] = !0);
      }
      if (o = null, r !== void 0 && (c(r), o = "" + r), R(t) && (c(t.key), o = "" + t.key), "key" in t) {
        r = {};
        for (var _ in t)
          _ !== "key" && (r[_] = t[_]);
      } else r = t;
      return o && S(
        r,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), ye(e, o, p, x, b(), r);
    }
    function z(e, t) {
      if (typeof e == "object" && e && e.$$typeof !== Re) {
        if (G(e))
          for (var r = 0; r < e.length; r++) {
            var l = e[r];
            $(l) && H(l, t);
          }
        else if ($(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? r = null : (r = q && e[q] || e["@@iterator"], r = typeof r == "function" ? r : null), typeof r == "function" && r !== e.entries && (r = r.call(e), r !== e))
          for (; !(e = r.next()).done; )
            $(e.value) && H(e.value, t);
      }
    }
    function $(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function H(e, t) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, t = ke(t), !ue[t])) {
        ue[t] = !0;
        var r = "";
        e && e._owner != null && e._owner !== b() && (r = null, typeof e._owner.tag == "number" ? r = n(e._owner.type) : typeof e._owner.name == "string" && (r = e._owner.name), r = " It was passed a child from " + r + ".");
        var l = E.getCurrentStack;
        E.getCurrentStack = function() {
          var x = m(e.type);
          return l && (x += l() || ""), x;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          t,
          r
        ), E.getCurrentStack = l;
      }
    }
    function ke(e) {
      var t = "", r = b();
      return r && (r = n(r.type)) && (t = `

Check the render method of \`` + r + "`."), t || (e = n(e)) && (t = `

Check the top-level render call using <` + e + ">."), t;
    }
    var Ne = Pe, A = Symbol.for("react.transitional.element"), we = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var K = Symbol.for("react.consumer"), Q = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Ee = Symbol.for("react.offscreen"), q = Symbol.iterator, je = Symbol.for("react.client.reference"), E = Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, j = Object.assign, Le = Symbol.for("react.client.reference"), G = Array.isArray, T = 0, te, re, oe, ne, ae, le, se;
    d.__reactDisabledLog = !0;
    var B, ie, U = !1, Y = new (typeof WeakMap == "function" ? WeakMap : Map)(), Re = Symbol.for("react.client.reference"), ce, de = {}, fe = {}, ue = {};
    xe.Fragment = W, xe.jsx = function(e, t, r, l, x) {
      return I(e, t, r, !1, l, x);
    }, xe.jsxs = function(e, t, r, l, x) {
      return I(e, t, r, !0, l, x);
    };
  }()), xe;
}
var gt = ge.exports, Ae;
function Xe() {
  return Ae || (Ae = 1, process.env.NODE_ENV === "production" ? ge.exports = He() : ge.exports = Je()), ge.exports;
}
var i = Xe();
const Ke = ({
  children: n,
  mode: u = "warning",
  pulseAnimation: c = !0
}) => /* @__PURE__ */ i.jsx("div", { className: `piece ${c && "animate-pulse"}`, children: /* @__PURE__ */ i.jsx(
  "div",
  {
    className: `glowedBorder ${u === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${u} label`,
    children: n
  }
) }), Qe = ({ barsCount: n, currentBarIndex: u }) => {
  function c() {
    const d = [];
    for (let f = 0; f < n; f++)
      d.push(
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${f < u ? "visible" : "hidden"}`
          },
          f
        )
      );
    return d;
  }
  return /* @__PURE__ */ i.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${n * 10}px` }, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ i.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ i.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ i.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ i.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ i.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: c() }),
    /* @__PURE__ */ i.jsx("div", { className: "h-[15px]" })
  ] });
}, qe = ({ unitNumber: n, subjectName: u }) => /* @__PURE__ */ i.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ i.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ i.jsx("div", { className: "text-2xl font-[600] label", children: n }),
  /* @__PURE__ */ i.jsx("div", { className: "text-xl font-[400] label", children: u })
] }), et = (n) => /* @__PURE__ */ a.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ a.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ a.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ a.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ a.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ a.createElement("defs", null, /* @__PURE__ */ a.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ a.createElement("rect", { width: 80, height: 80, fill: "white" })))), tt = ({ width: n, height: u }) => {
  const c = ve(null), d = ve(
    N.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), f = (m) => (d.current.clear(), d.current.to(m(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(m(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(m(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(m(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(m(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(m(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(m(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(m(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(m("text"), {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  }).to(m(".scanner"), {
    opacity: 1,
    y: 80,
    duration: 1,
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
  })), C = (m, b = !1) => {
    m.forEach((R) => {
      const S = R.getTotalLength();
      b ? N.to(R, {
        stroke: "currentColor"
      }) : (N.set(R, {
        strokeDasharray: S,
        strokeDashoffset: S,
        stroke: "transparent"
      }), N.to(R, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, h = () => {
    const m = N.utils.selector(c.current), b = m(".stroke-fng");
    C(b), f(m), d.current.play();
  }, v = () => {
    if (c.current) {
      const m = N.utils.selector(c.current), b = m(".stroke-fng");
      d.current.reverse(), N.killTweensOf(b), C(b, !0), N.killTweensOf(m(".scanner")), N.set(m(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ i.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: h,
      onMouseLeave: v,
      style: { height: u, width: n },
      children: /* @__PURE__ */ i.jsx(et, { ref: c })
    }
  );
}, De = ({
  rowsCount: n,
  tilesPerRowCount: u,
  animationActive: c = !1
}) => {
  function d() {
    return Array(n).fill(null).map((f, C) => /* @__PURE__ */ i.jsx("div", { className: "hex-row rotate-method", children: Array(u).fill(null).map((h, v) => /* @__PURE__ */ i.jsx("div", { className: `hex ${c ? "animation-active" : ""}` }, v)) }, C));
  }
  return /* @__PURE__ */ i.jsx("div", { className: "piece rotateMethod", children: d() });
}, rt = (n) => Ve(() => {
  const u = (C, h) => {
    const v = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return v[(C + h) % v.length];
  }, c = (C, h) => (C % h).toString(), d = `U-${c(n * 3, 9)}`, f = `${u(n, 20)}${c(n * 7, 99)}`;
  return `${d}${f}`;
}, [n]), ot = ({ title: n, sciFiCode: u, isActive: c }) => {
  const d = rt(u);
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ i.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${c ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ i.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: d })
          }
        ),
        /* @__PURE__ */ i.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${c ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `font-bold w-full ${c ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: n
                }
              ),
              /* @__PURE__ */ i.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                d,
                " AV-OK"
              ] }),
              /* @__PURE__ */ i.jsx(
                "div",
                {
                  className: `w-[10px] h-[5px] mr-10 mt-auto 
            ${c ? "bg-white" : "dark:group-hover:bg-[#0F172A] group-hover:bg-white"}
          `
                }
              )
            ]
          }
        )
      ]
    }
  );
}, nt = ({ options: n, width: u = "w-full" }) => /* @__PURE__ */ i.jsx("div", { className: `flex flex-col gap-2 ${u}`, children: n.map((c, d) => /* @__PURE__ */ Ze(ot, { ...c, key: d, sciFiCode: d })) }), We = () => /* @__PURE__ */ i.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ i.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ i.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ i.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] }), at = ({ children: n }) => /* @__PURE__ */ i.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ i.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ i.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ i.jsx(De, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ i.jsx(We, {}) }),
  /* @__PURE__ */ i.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ i.jsx(We, {}) }),
  /* @__PURE__ */ i.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ i.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ i.jsx("div", { className: "content", children: n }) }) })
] }), lt = ({
  headBlockChildren: n,
  width: u,
  height: c,
  borderColor: d,
  textColor: f,
  mainBlockChildren: C,
  animated: h
}) => /* @__PURE__ */ i.jsxs("div", { className: "card-container relative", style: { width: u, height: c }, children: [
  /* @__PURE__ */ i.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${d} ${h ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: `text-${f} head-block`, children: n }),
        /* @__PURE__ */ i.jsx("div", { className: `text-${f} main-block'`, children: C })
      ]
    }
  ),
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `artifact text-${d} ${h ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ i.jsx(
    "div",
    {
      className: `icon-artifact text-${d} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] }), st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ButtonFinger: tt,
  Card: lt,
  EvaBorderPanel: Ke,
  EvaOptionList: nt,
  EvaProgressBar: Qe,
  EvaTilePanel: De,
  EvaUnitBox: qe,
  GeometricLayout: at
}, Symbol.toStringTag, { value: "Module" }));
console.log(" Arara", st);
export {
  pt as ButtonFinger,
  xt as Card,
  ft as EvaBorderPanel,
  Ct as EvaOptionList,
  ut as EvaProgressBar,
  Ye as EvaTilePanel,
  mt as EvaUnitBox,
  ht as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
