import Pt, { useMemo as Mt, createElement as Ot } from "react";
import kt from "gsap";
var Se = { exports: {} }, pe = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function Lt() {
  if (nt) return pe;
  nt = 1;
  var i = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, n, o) {
    var l = null;
    if (o !== void 0 && (l = "" + o), n.key !== void 0 && (l = "" + n.key), "key" in n) {
      o = {};
      for (var f in n)
        f !== "key" && (o[f] = n[f]);
    } else o = n;
    return n = o.ref, {
      $$typeof: i,
      type: r,
      key: l,
      ref: n !== void 0 ? n : null,
      props: o
    };
  }
  return pe.Fragment = e, pe.jsx = t, pe.jsxs = t, pe;
}
var ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function $t() {
  return it || (it = 1, process.env.NODE_ENV !== "production" && function() {
    function i(a) {
      if (a == null) return null;
      if (typeof a == "function")
        return a.$$typeof === le ? null : a.displayName || a.name || null;
      if (typeof a == "string") return a;
      switch (a) {
        case T:
          return "Fragment";
        case C:
          return "Portal";
        case M:
          return "Profiler";
        case P:
          return "StrictMode";
        case W:
          return "Suspense";
        case Y:
          return "SuspenseList";
      }
      if (typeof a == "object")
        switch (typeof a.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), a.$$typeof) {
          case k:
            return (a.displayName || "Context") + ".Provider";
          case j:
            return (a._context.displayName || "Context") + ".Consumer";
          case L:
            var v = a.render;
            return a = a.displayName, a || (a = v.displayName || v.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
          case H:
            return v = a.displayName || null, v !== null ? v : i(a.type) || "Memo";
          case U:
            v = a._payload, a = a._init;
            try {
              return i(a(v));
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
        var v = !1;
      } catch {
        v = !0;
      }
      if (v) {
        v = console;
        var b = v.error, R = typeof Symbol == "function" && Symbol.toStringTag && a[Symbol.toStringTag] || a.constructor.name || "Object";
        return b.call(
          v,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), e(a);
      }
    }
    function r() {
    }
    function n() {
      if (J === 0) {
        ne = console.log, we = console.info, Ne = console.warn, Ee = console.error, Te = console.group, B = console.groupCollapsed, Ze = console.groupEnd;
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
      J++;
    }
    function o() {
      if (J--, J === 0) {
        var a = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, a, { value: ne }),
          info: $({}, a, { value: we }),
          warn: $({}, a, { value: Ne }),
          error: $({}, a, { value: Ee }),
          group: $({}, a, { value: Te }),
          groupCollapsed: $({}, a, { value: B }),
          groupEnd: $({}, a, { value: Ze })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function l(a) {
      if (Ye === void 0)
        try {
          throw Error();
        } catch (b) {
          var v = b.stack.trim().match(/\n( *(at )?)/);
          Ye = v && v[1] || "", Qe = -1 < b.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < b.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Ye + a + Qe;
    }
    function f(a, v) {
      if (!a || Be) return "";
      var b = Ge.get(a);
      if (b !== void 0) return b;
      Be = !0, b = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var R = null;
      R = F.H, F.H = null, n();
      try {
        var G = {
          DetermineComponentFrameRoot: function() {
            try {
              if (v) {
                var te = function() {
                  throw Error();
                };
                if (Object.defineProperty(te.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(te, []);
                  } catch (Q) {
                    var je = Q;
                  }
                  Reflect.construct(a, [], te);
                } else {
                  try {
                    te.call();
                  } catch (Q) {
                    je = Q;
                  }
                  a.call(te.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Q) {
                  je = Q;
                }
                (te = a()) && typeof te.catch == "function" && te.catch(function() {
                });
              }
            } catch (Q) {
              if (Q && je && typeof Q.stack == "string")
                return [Q.stack, je.stack];
            }
            return [null, null];
          }
        };
        G.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var O = Object.getOwnPropertyDescriptor(
          G.DetermineComponentFrameRoot,
          "name"
        );
        O && O.configurable && Object.defineProperty(
          G.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var E = G.DetermineComponentFrameRoot(), Z = E[0], se = E[1];
        if (Z && se) {
          var z = Z.split(`
`), ie = se.split(`
`);
          for (E = O = 0; O < z.length && !z[O].includes(
            "DetermineComponentFrameRoot"
          ); )
            O++;
          for (; E < ie.length && !ie[E].includes(
            "DetermineComponentFrameRoot"
          ); )
            E++;
          if (O === z.length || E === ie.length)
            for (O = z.length - 1, E = ie.length - 1; 1 <= O && 0 <= E && z[O] !== ie[E]; )
              E--;
          for (; 1 <= O && 0 <= E; O--, E--)
            if (z[O] !== ie[E]) {
              if (O !== 1 || E !== 1)
                do
                  if (O--, E--, 0 > E || z[O] !== ie[E]) {
                    var he = `
` + z[O].replace(
                      " at new ",
                      " at "
                    );
                    return a.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", a.displayName)), typeof a == "function" && Ge.set(a, he), he;
                  }
                while (1 <= O && 0 <= E);
              break;
            }
        }
      } finally {
        Be = !1, F.H = R, o(), Error.prepareStackTrace = b;
      }
      return z = (z = a ? a.displayName || a.name : "") ? l(z) : "", typeof a == "function" && Ge.set(a, z), z;
    }
    function c(a) {
      if (a == null) return "";
      if (typeof a == "function") {
        var v = a.prototype;
        return f(
          a,
          !(!v || !v.isReactComponent)
        );
      }
      if (typeof a == "string") return l(a);
      switch (a) {
        case W:
          return l("Suspense");
        case Y:
          return l("SuspenseList");
      }
      if (typeof a == "object")
        switch (a.$$typeof) {
          case L:
            return a = f(a.render, !1), a;
          case H:
            return c(a.type);
          case U:
            v = a._payload, a = a._init;
            try {
              return c(a(v));
            } catch {
            }
        }
      return "";
    }
    function s() {
      var a = F.A;
      return a === null ? null : a.getOwner();
    }
    function d(a) {
      if (de.call(a, "key")) {
        var v = Object.getOwnPropertyDescriptor(a, "key").get;
        if (v && v.isReactWarning) return !1;
      }
      return a.key !== void 0;
    }
    function u(a, v) {
      function b() {
        Ke || (Ke = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          v
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(a, "key", {
        get: b,
        configurable: !0
      });
    }
    function h() {
      var a = i(this.type);
      return et[a] || (et[a] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), a = this.props.ref, a !== void 0 ? a : null;
    }
    function g(a, v, b, R, G, O) {
      return b = O.ref, a = {
        $$typeof: S,
        type: a,
        key: v,
        props: O,
        _owner: G
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(a, "ref", {
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
    function x(a, v, b, R, G, O) {
      if (typeof a == "string" || typeof a == "function" || a === T || a === M || a === P || a === W || a === Y || a === I || typeof a == "object" && a !== null && (a.$$typeof === U || a.$$typeof === H || a.$$typeof === k || a.$$typeof === j || a.$$typeof === L || a.$$typeof === _e || a.getModuleId !== void 0)) {
        var E = v.children;
        if (E !== void 0)
          if (R)
            if (q(E)) {
              for (R = 0; R < E.length; R++)
                p(E[R], a);
              Object.freeze && Object.freeze(E);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else p(E, a);
      } else
        E = "", (a === void 0 || typeof a == "object" && a !== null && Object.keys(a).length === 0) && (E += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), a === null ? R = "null" : q(a) ? R = "array" : a !== void 0 && a.$$typeof === S ? (R = "<" + (i(a.type) || "Unknown") + " />", E = " Did you accidentally export a JSX literal instead of a component?") : R = typeof a, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          R,
          E
        );
      if (de.call(v, "key")) {
        E = i(a);
        var Z = Object.keys(v).filter(function(z) {
          return z !== "key";
        });
        R = 0 < Z.length ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}", tt[E + R] || (Z = 0 < Z.length ? "{" + Z.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          E,
          Z,
          E
        ), tt[E + R] = !0);
      }
      if (E = null, b !== void 0 && (t(b), E = "" + b), d(v) && (t(v.key), E = "" + v.key), "key" in v) {
        b = {};
        for (var se in v)
          se !== "key" && (b[se] = v[se]);
      } else b = v;
      return E && u(
        b,
        typeof a == "function" ? a.displayName || a.name || "Unknown" : a
      ), g(a, E, O, G, s(), b);
    }
    function p(a, v) {
      if (typeof a == "object" && a && a.$$typeof !== At) {
        if (q(a))
          for (var b = 0; b < a.length; b++) {
            var R = a[b];
            y(R) && _(R, v);
          }
        else if (y(a))
          a._store && (a._store.validated = 1);
        else if (a === null || typeof a != "object" ? b = null : (b = re && a[re] || a["@@iterator"], b = typeof b == "function" ? b : null), typeof b == "function" && b !== a.entries && (b = b.call(a), b !== a))
          for (; !(a = b.next()).done; )
            y(a.value) && _(a.value, v);
      }
    }
    function y(a) {
      return typeof a == "object" && a !== null && a.$$typeof === S;
    }
    function _(a, v) {
      if (a._store && !a._store.validated && a.key == null && (a._store.validated = 1, v = N(v), !rt[v])) {
        rt[v] = !0;
        var b = "";
        a && a._owner != null && a._owner !== s() && (b = null, typeof a._owner.tag == "number" ? b = i(a._owner.type) : typeof a._owner.name == "string" && (b = a._owner.name), b = " It was passed a child from " + b + ".");
        var R = F.getCurrentStack;
        F.getCurrentStack = function() {
          var G = c(a.type);
          return R && (G += R() || ""), G;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          v,
          b
        ), F.getCurrentStack = R;
      }
    }
    function N(a) {
      var v = "", b = s();
      return b && (b = i(b.type)) && (v = `

Check the render method of \`` + b + "`."), v || (a = i(a)) && (v = `

Check the top-level render call using <` + a + ">."), v;
    }
    var w = Pt, S = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), k = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), Y = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), re = Symbol.iterator, le = Symbol.for("react.client.reference"), F = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, $ = Object.assign, _e = Symbol.for("react.client.reference"), q = Array.isArray, J = 0, ne, we, Ne, Ee, Te, B, Ze;
    r.__reactDisabledLog = !0;
    var Ye, Qe, Be = !1, Ge = new (typeof WeakMap == "function" ? WeakMap : Map)(), At = Symbol.for("react.client.reference"), Ke, et = {}, tt = {}, rt = {};
    ge.Fragment = T, ge.jsx = function(a, v, b, R, G) {
      return x(a, v, b, !1, R, G);
    }, ge.jsxs = function(a, v, b, R, G) {
      return x(a, v, b, !0, R, G);
    };
  }()), ge;
}
var ot;
function Yt() {
  return ot || (ot = 1, process.env.NODE_ENV === "production" ? Se.exports = Lt() : Se.exports = $t()), Se.exports;
}
var m = Yt();
const Er = ({ width: i, height: e }) => {
  const t = () => {
  }, r = () => {
  };
  return /* @__PURE__ */ m.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: t,
      onMouseLeave: r,
      style: { width: `${i}px`, height: `${e}px` },
      children: "pizdaq"
    }
  );
}, Tr = ({
  children: i,
  mode: e = "warning",
  pulseAnimation: t = !0
}) => /* @__PURE__ */ m.jsx("div", { className: `piece ${t && "animate-pulse"}`, children: /* @__PURE__ */ m.jsx(
  "div",
  {
    className: `glowedBorder ${e === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${e} label`,
    children: i
  }
) }), jr = ({ barsCount: i, currentBarIndex: e }) => {
  function t() {
    const r = [];
    for (let n = 0; n < i; n++)
      r.push(
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${n < e ? "visible" : "hidden"}`
          },
          n
        )
      );
    return r;
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${i * 10}px` }, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ m.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ m.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ m.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ m.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ m.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: t() }),
    /* @__PURE__ */ m.jsx("div", { className: "h-[15px]" })
  ] });
}, Sr = ({ unitNumber: i, subjectName: e }) => /* @__PURE__ */ m.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ m.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ m.jsx("div", { className: "text-2xl font-[600] label", children: i }),
  /* @__PURE__ */ m.jsx("div", { className: "text-xl font-[400] label", children: e })
] }), Bt = ({
  rowsCount: i,
  tilesPerRowCount: e,
  animationActive: t = !1
}) => {
  function r() {
    return Array(i).fill(null).map((n, o) => /* @__PURE__ */ m.jsx("div", { className: "hex-row rotate-method", children: Array(e).fill(null).map((l, f) => /* @__PURE__ */ m.jsx("div", { className: `hex ${t ? "animation-active" : ""}` }, f)) }, o));
  }
  return /* @__PURE__ */ m.jsx("div", { className: "piece rotateMethod", children: r() });
}, Gt = (i) => Mt(() => {
  const e = (o, l) => {
    const f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return f[(o + l) % f.length];
  }, t = (o, l) => (o % l).toString(), r = `U-${t(i * 3, 9)}`, n = `${e(i, 20)}${t(i * 7, 99)}`;
  return `${r}${n}`;
}, [i]), zt = ({ title: i, sciFiCode: e, isActive: t }) => {
  const r = Gt(e);
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${t ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ m.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ m.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${t ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ m.jsx(
                "div",
                {
                  className: `font-bold w-full ${t ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: i
                }
              ),
              /* @__PURE__ */ m.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ m.jsx(
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
}, Cr = ({ options: i, width: e = "w-full" }) => /* @__PURE__ */ m.jsx("div", { className: `flex flex-col gap-2 ${e}`, children: i.map((t, r) => /* @__PURE__ */ Ot(zt, { ...t, key: r, sciFiCode: r })) }), at = () => /* @__PURE__ */ m.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ m.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ m.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ m.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ m.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ m.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
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
var Wt = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ut = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, qt = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Dt = /(^[#\.][a-z]|[a-y][a-z])/i, Xt = Math.PI / 180, It = 180 / Math.PI, Ce = Math.sin, Re = Math.cos, X = Math.abs, K = Math.sqrt, Vt = Math.atan2, qe = 1e8, lt = function(e) {
  return typeof e == "string";
}, xt = function(e) {
  return typeof e == "number";
}, Ft = function(e) {
  return typeof e > "u";
}, Jt = {}, Ht = {}, Me = 1e5, vt = function(e) {
  return Math.round((e + qe) % 1 * Me) / Me || (e < 0 ? 0 : 1);
}, A = function(e) {
  return Math.round(e * Me) / Me || 0;
}, st = function(e) {
  return Math.round(e * 1e10) / 1e10 || 0;
}, ft = function(e, t, r, n) {
  var o = e[t], l = n === 1 ? 6 : De(o, r, n);
  if ((l || !n) && l + r + 2 < o.length)
    return e.splice(t, 0, o.slice(0, r + l + 2)), o.splice(0, r + l), 1;
}, bt = function(e, t, r) {
  var n = e.length, o = ~~(r * n);
  if (e[o] > t) {
    for (; --o && e[o] > t; )
      ;
    o < 0 && (o = 0);
  } else
    for (; e[++o] < t && o < n; )
      ;
  return o < n ? o : n - 1;
}, Zt = function(e, t) {
  var r = e.length;
  for (e.reverse(); r--; )
    e[r].reversed || er(e[r]);
}, ct = function(e, t) {
  return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t;
}, Qt = function(e, t) {
  var r = e.length, n = e[r - 1] || [], o = n.length;
  r && t[0] === n[o - 2] && t[1] === n[o - 1] && (t = n.concat(t.slice(2)), r--), e[r] = t;
};
function Ae(i) {
  i = lt(i) && Dt.test(i) && document.querySelector(i) || i;
  var e = i.getAttribute ? i : 0, t;
  return e && (i = i.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[i], t && !t._dirty ? t : e._gsPath[i] = Oe(i)) : i ? lt(i) ? Oe(i) : xt(i[0]) ? [i] : i : console.warn("Expecting a <path> element or an SVG path data string");
}
function Kt(i) {
  for (var e = [], t = 0; t < i.length; t++)
    e[t] = ct(i[t], i[t].slice(0));
  return ct(i, e);
}
function er(i) {
  var e = 0, t;
  for (i.reverse(); e < i.length; e += 2)
    t = i[e], i[e] = i[e + 1], i[e + 1] = t;
  i.reversed = !i.reversed;
}
var tr = function(e, t) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), n = [].slice.call(e.attributes), o = n.length, l;
  for (t = "," + t + ","; --o > -1; )
    l = n[o].nodeName.toLowerCase(), t.indexOf("," + l + ",") < 0 && r.setAttributeNS(null, l, n[o].nodeValue);
  return r;
}, rr = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, nr = function(e, t) {
  for (var r = t ? t.split(",") : [], n = {}, o = r.length; --o > -1; )
    n[r[o]] = +e.getAttribute(r[o]) || 0;
  return n;
};
function ir(i, e) {
  var t = i.tagName.toLowerCase(), r = 0.552284749831, n, o, l, f, c, s, d, u, h, g, x, p, y, _, N, w, S, C, T, P, M, j;
  return t === "path" || !i.getBBox ? i : (s = tr(i, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), j = nr(i, rr[t]), t === "rect" ? (f = j.rx, c = j.ry || f, o = j.x, l = j.y, g = j.width - f * 2, x = j.height - c * 2, f || c ? (p = o + f * (1 - r), y = o + f, _ = y + g, N = _ + f * r, w = _ + f, S = l + c * (1 - r), C = l + c, T = C + x, P = T + c * r, M = T + c, n = "M" + w + "," + C + " V" + T + " C" + [w, P, N, M, _, M, _ - (_ - y) / 3, M, y + (_ - y) / 3, M, y, M, p, M, o, P, o, T, o, T - (T - C) / 3, o, C + (T - C) / 3, o, C, o, S, p, l, y, l, y + (_ - y) / 3, l, _ - (_ - y) / 3, l, _, l, N, l, w, S, w, C].join(",") + "z") : n = "M" + (o + g) + "," + l + " v" + x + " h" + -g + " v" + -x + " h" + g + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (f = c = j.r, u = f * r) : (f = j.rx, c = j.ry, u = c * r), o = j.cx, l = j.cy, d = f * r, n = "M" + (o + f) + "," + l + " C" + [o + f, l + u, o + d, l + c, o, l + c, o - d, l + c, o - f, l + u, o - f, l, o - f, l - u, o - d, l - c, o, l - c, o + d, l - c, o + f, l - u, o + f, l].join(",") + "z") : t === "line" ? n = "M" + j.x1 + "," + j.y1 + " L" + j.x2 + "," + j.y2 : (t === "polyline" || t === "polygon") && (h = (i.getAttribute("points") + "").match(Ut) || [], o = h.shift(), l = h.shift(), n = "M" + o + "," + l + " L" + h.join(","), t === "polygon" && (n += "," + o + "," + l + "z")), s.setAttribute("d", _t(s._gsRawPath = Oe(n))), e && i.parentNode && (i.parentNode.insertBefore(s, i), i.parentNode.removeChild(i)), s);
}
function mt(i, e, t) {
  var r = i[e], n = i[e + 2], o = i[e + 4], l;
  return r += (n - r) * t, n += (o - n) * t, r += (n - r) * t, l = n + (o + (i[e + 6] - o) * t - n) * t - r, r = i[e + 1], n = i[e + 3], o = i[e + 5], r += (n - r) * t, n += (o - n) * t, r += (n - r) * t, A(Vt(n + (o + (i[e + 7] - o) * t - n) * t - r, l) * It);
}
function yt(i, e, t) {
  t = Ft(t) ? 1 : st(t) || 0, e = st(e) || 0;
  var r = Math.max(0, ~~(X(t - e) - 1e-8)), n = Kt(i);
  if (e > t && (e = 1 - e, t = 1 - t, Zt(n), n.totalLength = 0), e < 0 || t < 0) {
    var o = Math.abs(~~Math.min(e, t)) + 1;
    e += o, t += o;
  }
  n.totalLength || oe(n);
  var l = t > 1, f = ut(n, e, Jt, !0), c = ut(n, t, Ht), s = c.segment, d = f.segment, u = c.segIndex, h = f.segIndex, g = c.i, x = f.i, p = h === u, y = g === x && p, _, N, w, S, C, T, P, M;
  if (l || r) {
    for (_ = u < h || p && g < x || y && c.t < f.t, ft(n, h, x, f.t) && (h++, _ || (u++, y ? (c.t = (c.t - f.t) / (1 - f.t), g = 0) : p && (g -= x))), Math.abs(1 - (t - e)) < 1e-5 ? u = h - 1 : !c.t && u ? u-- : ft(n, u, g, c.t) && _ && h++, f.t === 1 && (h = (h + 1) % n.length), C = [], T = n.length, P = 1 + T * r, M = h, P += (T - h + u) % T, S = 0; S < P; S++)
      Qt(C, n[M++ % T]);
    n = C;
  } else if (w = c.t === 1 ? 6 : De(s, g, c.t), e !== t)
    for (N = De(d, x, y ? f.t / c.t : f.t), p && (w += N), s.splice(g + w + 2), (N || x) && d.splice(0, x + N), S = n.length; S--; )
      (S < h || S > u) && n.splice(S, 1);
  else
    s.angle = mt(s, g + w, 0), g += w, f = s[g], c = s[g + 1], s.length = s.totalLength = 0, s.totalPoints = n.totalPoints = 8, s.push(f, c, f, c, f, c, f, c);
  return n.totalLength = 0, n;
}
function or(i, e, t) {
  e = e || 0, i.samples || (i.samples = [], i.lookup = []);
  var r = ~~i.resolution || 12, n = 1 / r, o = i.length, l = i[e], f = i[e + 1], c = e ? e / 6 * r : 0, s = i.samples, d = i.lookup, u = (e ? i.minLength : qe) || qe, h = s[c + t * r - 1], g = e ? s[c - 1] : 0, x, p, y, _, N, w, S, C, T, P, M, j, k, L, W, Y, H;
  for (s.length = d.length = 0, p = e + 2; p < o; p += 6) {
    if (y = i[p + 4] - l, _ = i[p + 2] - l, N = i[p] - l, C = i[p + 5] - f, T = i[p + 3] - f, P = i[p + 1] - f, w = S = M = j = 0, X(y) < 0.01 && X(C) < 0.01 && X(N) + X(P) < 0.01)
      i.length > 8 && (i.splice(p, 6), p -= 6, o -= 6);
    else
      for (x = 1; x <= r; x++)
        L = n * x, k = 1 - L, w = S - (S = (L * L * y + 3 * k * (L * _ + k * N)) * L), M = j - (j = (L * L * C + 3 * k * (L * T + k * P)) * L), Y = K(M * M + w * w), Y < u && (u = Y), g += Y, s[c++] = g;
    l += y, f += C;
  }
  if (h)
    for (h -= g; c < s.length; c++)
      s[c] += h;
  if (s.length && u) {
    if (i.totalLength = H = s[s.length - 1] || 0, i.minLength = u, H / u < 9999)
      for (Y = W = 0, x = 0; x < H; x += u)
        d[Y++] = s[W] < x ? ++W : W;
  } else
    i.totalLength = s[0] = 0;
  return e ? g - s[e / 2 - 1] : g;
}
function oe(i, e) {
  var t, r, n;
  for (n = t = r = 0; n < i.length; n++)
    i[n].resolution = ~~e || 12, r += i[n].length, t += or(i[n]);
  return i.totalPoints = r, i.totalLength = t, i;
}
function De(i, e, t) {
  if (t <= 0 || t >= 1)
    return 0;
  var r = i[e], n = i[e + 1], o = i[e + 2], l = i[e + 3], f = i[e + 4], c = i[e + 5], s = i[e + 6], d = i[e + 7], u = r + (o - r) * t, h = o + (f - o) * t, g = n + (l - n) * t, x = l + (c - l) * t, p = u + (h - u) * t, y = g + (x - g) * t, _ = f + (s - f) * t, N = c + (d - c) * t;
  return h += (_ - h) * t, x += (N - x) * t, i.splice(
    e + 2,
    4,
    A(u),
    //first control point
    A(g),
    A(p),
    //second control point
    A(y),
    A(p + (h - p) * t),
    //new fabricated anchor on line
    A(y + (x - y) * t),
    A(h),
    //third control point
    A(x),
    A(_),
    //fourth control point
    A(N)
  ), i.samples && i.samples.splice(e / 6 * i.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function ut(i, e, t, r) {
  t = t || {}, i.totalLength || oe(i), (e < 0 || e > 1) && (e = vt(e));
  var n = 0, o = i[0], l, f, c, s, d, u, h;
  if (!e)
    h = u = n = 0, o = i[0];
  else if (e === 1)
    h = 1, n = i.length - 1, o = i[n], u = o.length - 8;
  else {
    if (i.length > 1) {
      for (c = i.totalLength * e, d = u = 0; (d += i[u++].totalLength) < c; )
        n = u;
      o = i[n], s = d - o.totalLength, e = (c - s) / (d - s) || 0;
    }
    l = o.samples, f = o.resolution, c = o.totalLength * e, u = o.lookup.length ? o.lookup[~~(c / o.minLength)] || 0 : bt(l, c, e), s = u ? l[u - 1] : 0, d = l[u], d < c && (s = d, d = l[++u]), h = 1 / f * ((c - s) / (d - s) + u % f), u = ~~(u / f) * 6, r && h === 1 && (u + 6 < o.length ? (u += 6, h = 0) : n + 1 < i.length && (u = h = 0, o = i[++n]));
  }
  return t.t = h, t.i = u, t.path = i, t.segment = o, t.segIndex = n, t;
}
function dt(i, e, t, r) {
  var n = i[0], o = r || {}, l, f, c, s, d, u, h, g, x;
  if ((e < 0 || e > 1) && (e = vt(e)), n.lookup || oe(i), i.length > 1) {
    for (c = i.totalLength * e, d = u = 0; (d += i[u++].totalLength) < c; )
      n = i[u];
    s = d - n.totalLength, e = (c - s) / (d - s) || 0;
  }
  return l = n.samples, f = n.resolution, c = n.totalLength * e, u = n.lookup.length ? n.lookup[e < 1 ? ~~(c / n.minLength) : n.lookup.length - 1] || 0 : bt(l, c, e), s = u ? l[u - 1] : 0, d = l[u], d < c && (s = d, d = l[++u]), h = 1 / f * ((c - s) / (d - s) + u % f) || 0, x = 1 - h, u = ~~(u / f) * 6, g = n[u], o.x = A((h * h * (n[u + 6] - g) + 3 * x * (h * (n[u + 4] - g) + x * (n[u + 2] - g))) * h + g), o.y = A((h * h * (n[u + 7] - (g = n[u + 1])) + 3 * x * (h * (n[u + 5] - g) + x * (n[u + 3] - g))) * h + g), t && (o.angle = n.totalLength ? mt(n, u, h >= 1 ? 1 - 1e-9 : h || 1e-9) : n.angle || 0), o;
}
function ve(i, e, t, r, n, o, l) {
  for (var f = i.length, c, s, d, u, h; --f > -1; )
    for (c = i[f], s = c.length, d = 0; d < s; d += 2)
      u = c[d], h = c[d + 1], c[d] = u * e + h * r + o, c[d + 1] = u * t + h * n + l;
  return i._dirty = 1, i;
}
function ar(i, e, t, r, n, o, l, f, c) {
  if (!(i === f && e === c)) {
    t = X(t), r = X(r);
    var s = n % 360 * Xt, d = Re(s), u = Ce(s), h = Math.PI, g = h * 2, x = (i - f) / 2, p = (e - c) / 2, y = d * x + u * p, _ = -u * x + d * p, N = y * y, w = _ * _, S = N / (t * t) + w / (r * r);
    S > 1 && (t = K(S) * t, r = K(S) * r);
    var C = t * t, T = r * r, P = (C * T - C * w - T * N) / (C * w + T * N);
    P < 0 && (P = 0);
    var M = (o === l ? -1 : 1) * K(P), j = M * (t * _ / r), k = M * -(r * y / t), L = (i + f) / 2, W = (e + c) / 2, Y = L + (d * j - u * k), H = W + (u * j + d * k), U = (y - j) / t, I = (_ - k) / r, re = (-y - j) / t, le = (-_ - k) / r, F = U * U + I * I, de = (I < 0 ? -1 : 1) * Math.acos(U / K(F)), $ = (U * le - I * re < 0 ? -1 : 1) * Math.acos((U * re + I * le) / K(F * (re * re + le * le)));
    isNaN($) && ($ = h), !l && $ > 0 ? $ -= g : l && $ < 0 && ($ += g), de %= g, $ %= g;
    var _e = Math.ceil(X($) / (g / 4)), q = [], J = $ / _e, ne = 4 / 3 * Ce(J / 2) / (1 + Re(J / 2)), we = d * t, Ne = u * t, Ee = u * -r, Te = d * r, B;
    for (B = 0; B < _e; B++)
      n = de + B * J, y = Re(n), _ = Ce(n), U = Re(n += J), I = Ce(n), q.push(y - ne * _, _ + ne * y, U + ne * I, I - ne * U, U, I);
    for (B = 0; B < q.length; B += 2)
      y = q[B], _ = q[B + 1], q[B] = y * we + _ * Ee + Y, q[B + 1] = y * Ne + _ * Te + H;
    return q[B - 2] = f, q[B - 1] = c, q;
  }
}
function Oe(i) {
  var e = (i + "").replace(qt, function(j) {
    var k = +j;
    return k < 1e-4 && k > -1e-4 ? 0 : k;
  }).match(Wt) || [], t = [], r = 0, n = 0, o = 2 / 3, l = e.length, f = 0, c = "ERROR: malformed path: " + i, s, d, u, h, g, x, p, y, _, N, w, S, C, T, P, M = function(k, L, W, Y) {
    N = (W - k) / 3, w = (Y - L) / 3, p.push(k + N, L + w, W - N, Y - w, W, Y);
  };
  if (!i || !isNaN(e[0]) || isNaN(e[1]))
    return console.log(c), t;
  for (s = 0; s < l; s++)
    if (C = g, isNaN(e[s]) ? (g = e[s].toUpperCase(), x = g !== e[s]) : s--, u = +e[s + 1], h = +e[s + 2], x && (u += r, h += n), s || (y = u, _ = h), g === "M")
      p && (p.length < 8 ? t.length -= 1 : f += p.length), r = y = u, n = _ = h, p = [u, h], t.push(p), s += 2, g = "L";
    else if (g === "C")
      p || (p = [0, 0]), x || (r = n = 0), p.push(u, h, r + e[s + 3] * 1, n + e[s + 4] * 1, r += e[s + 5] * 1, n += e[s + 6] * 1), s += 6;
    else if (g === "S")
      N = r, w = n, (C === "C" || C === "S") && (N += r - p[p.length - 4], w += n - p[p.length - 3]), x || (r = n = 0), p.push(N, w, u, h, r += e[s + 3] * 1, n += e[s + 4] * 1), s += 4;
    else if (g === "Q")
      N = r + (u - r) * o, w = n + (h - n) * o, x || (r = n = 0), r += e[s + 3] * 1, n += e[s + 4] * 1, p.push(N, w, r + (u - r) * o, n + (h - n) * o, r, n), s += 4;
    else if (g === "T")
      N = r - p[p.length - 4], w = n - p[p.length - 3], p.push(r + N, n + w, u + (r + N * 1.5 - u) * o, h + (n + w * 1.5 - h) * o, r = u, n = h), s += 2;
    else if (g === "H")
      M(r, n, r = u, n), s += 1;
    else if (g === "V")
      M(r, n, r, n = u + (x ? n - r : 0)), s += 1;
    else if (g === "L" || g === "Z")
      g === "Z" && (u = y, h = _, p.closed = !0), (g === "L" || X(r - u) > 0.5 || X(n - h) > 0.5) && (M(r, n, u, h), g === "L" && (s += 2)), r = u, n = h;
    else if (g === "A") {
      if (T = e[s + 4], P = e[s + 5], N = e[s + 6], w = e[s + 7], d = 7, T.length > 1 && (T.length < 3 ? (w = N, N = P, d--) : (w = P, N = T.substr(2), d -= 2), P = T.charAt(1), T = T.charAt(0)), S = ar(r, n, +e[s + 1], +e[s + 2], +e[s + 3], +T, +P, (x ? r : 0) + N * 1, (x ? n : 0) + w * 1), s += d, S)
        for (d = 0; d < S.length; d++)
          p.push(S[d]);
      r = p[p.length - 2], n = p[p.length - 1];
    } else
      console.log(c);
  return s = p.length, s < 6 ? (t.pop(), s = 0) : p[0] === p[s - 2] && p[1] === p[s - 1] && (p.closed = !0), t.totalPoints = f + s, t;
}
function lr(i, e) {
  e === void 0 && (e = 1);
  for (var t = i[0], r = 0, n = [t, r], o = 2; o < i.length; o += 2)
    n.push(t, r, i[o], r = (i[o] - t) * e / 2, t = i[o], -r);
  return n;
}
function Xe(i, e) {
  X(i[0] - i[2]) < 1e-4 && X(i[1] - i[3]) < 1e-4 && (i = i.slice(2));
  var t = i.length - 2, r = +i[0], n = +i[1], o = +i[2], l = +i[3], f = [r, n, r, n], c = o - r, s = l - n, d = Math.abs(i[t] - r) < 1e-3 && Math.abs(i[t + 1] - n) < 1e-3, u, h, g, x, p, y, _, N, w, S, C, T, P, M, j;
  for (d && (i.push(o, l), o = r, l = n, r = i[t - 2], n = i[t - 1], i.unshift(r, n), t += 4), e = e || e === 0 ? +e : 1, g = 2; g < t; g += 2)
    u = r, h = n, r = o, n = l, o = +i[g + 2], l = +i[g + 3], !(r === o && n === l) && (x = c, p = s, c = o - r, s = l - n, y = K(x * x + p * p), _ = K(c * c + s * s), N = K(Math.pow(c / _ + x / y, 2) + Math.pow(s / _ + p / y, 2)), w = (y + _) * e * 0.25 / N, S = r - (r - u) * (y ? w / y : 0), C = r + (o - r) * (_ ? w / _ : 0), T = r - (S + ((C - S) * (y * 3 / (y + _) + 0.5) / 4 || 0)), P = n - (n - h) * (y ? w / y : 0), M = n + (l - n) * (_ ? w / _ : 0), j = n - (P + ((M - P) * (y * 3 / (y + _) + 0.5) / 4 || 0)), (r !== u || n !== h) && f.push(
      A(S + T),
      // first control point
      A(P + j),
      A(r),
      // anchor
      A(n),
      A(C + T),
      // second control point
      A(M + j)
    ));
  return r !== o || n !== l || f.length < 4 ? f.push(A(o), A(l), A(o), A(l)) : f.length -= 2, f.length === 2 ? f.push(r, n, r, n, r, n) : d && (f.splice(0, 6), f.length = f.length - 6), f;
}
function _t(i) {
  xt(i[0]) && (i = [i]);
  var e = "", t = i.length, r, n, o, l;
  for (n = 0; n < t; n++) {
    for (l = i[n], e += "M" + A(l[0]) + "," + A(l[1]) + " C", r = l.length, o = 2; o < r; o++)
      e += A(l[o++]) + "," + A(l[o++]) + " " + A(l[o++]) + "," + A(l[o++]) + " " + A(l[o++]) + "," + A(l[o]) + " ";
    l.closed && (e += "z");
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
var ee, ae, Je, $e, be, Pe, ke, me, V = "transform", Ie = V + "Origin", wt, Nt = function(e) {
  var t = e.ownerDocument || e;
  for (!(V in e.style) && ("msTransform" in e.style) && (V = "msTransform", Ie = V + "Origin"); t.parentNode && (t = t.parentNode); )
    ;
  if (ae = window, ke = new ye(), t) {
    ee = t, Je = t.documentElement, $e = t.body, me = ee.createElementNS("http://www.w3.org/2000/svg", "g"), me.style.transform = "none";
    var r = t.createElement("div"), n = t.createElement("div"), o = t && (t.body || t.firstElementChild);
    o && o.appendChild && (o.appendChild(r), r.appendChild(n), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), wt = n.offsetParent !== r, o.removeChild(r));
  }
  return t;
}, sr = function(e) {
  for (var t, r; e && e !== $e; )
    r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
  return t;
}, Et = [], Tt = [], fr = function() {
  return ae.pageYOffset || ee.scrollTop || Je.scrollTop || $e.scrollTop || 0;
}, cr = function() {
  return ae.pageXOffset || ee.scrollLeft || Je.scrollLeft || $e.scrollLeft || 0;
}, He = function(e) {
  return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, ur = function i(e) {
  if (ae.getComputedStyle(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return i(e);
}, ze = function i(e, t) {
  if (e.parentNode && (ee || Nt(e))) {
    var r = He(e), n = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", o = r ? t ? "rect" : "g" : "div", l = t !== 2 ? 0 : 100, f = t === 3 ? 100 : 0, c = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", s = ee.createElementNS ? ee.createElementNS(n.replace(/^https/, "http"), o) : ee.createElement(o);
    return t && (r ? (Pe || (Pe = i(e)), s.setAttribute("width", 0.01), s.setAttribute("height", 0.01), s.setAttribute("transform", "translate(" + l + "," + f + ")"), Pe.appendChild(s)) : (be || (be = i(e), be.style.cssText = c), s.style.cssText = c + "width:0.1px;height:0.1px;top:" + f + "px;left:" + l + "px", be.appendChild(s))), s;
  }
  throw "Need document and parent.";
}, dr = function(e) {
  for (var t = new ye(), r = 0; r < e.numberOfItems; r++)
    t.multiply(e.getItem(r).matrix);
  return t;
}, hr = function(e) {
  var t = e.getCTM(), r;
  return t || (r = e.style[V], e.style[V] = "none", e.appendChild(me), t = me.getCTM(), e.removeChild(me), r ? e.style[V] = r : e.style.removeProperty(V.replace(/([A-Z])/g, "-$1").toLowerCase())), t || ke.clone();
}, pr = function(e, t) {
  var r = He(e), n = e === r, o = r ? Et : Tt, l = e.parentNode, f, c, s, d, u, h;
  if (e === ae)
    return e;
  if (o.length || o.push(ze(e, 1), ze(e, 2), ze(e, 3)), f = r ? Pe : be, r)
    n ? (s = hr(e), d = -s.e / s.a, u = -s.f / s.d, c = ke) : e.getBBox ? (s = e.getBBox(), c = e.transform ? e.transform.baseVal : {}, c = c.numberOfItems ? c.numberOfItems > 1 ? dr(c) : c.getItem(0).matrix : ke, d = c.a * s.x + c.c * s.y, u = c.b * s.x + c.d * s.y) : (c = new ye(), d = u = 0), t && e.tagName.toLowerCase() === "g" && (d = u = 0), (n ? r : l).appendChild(f), f.setAttribute("transform", "matrix(" + c.a + "," + c.b + "," + c.c + "," + c.d + "," + (c.e + d) + "," + (c.f + u) + ")");
  else {
    if (d = u = 0, wt)
      for (c = e.offsetParent, s = e; s && (s = s.parentNode) && s !== c && s.parentNode; )
        (ae.getComputedStyle(s)[V] + "").length > 4 && (d = s.offsetLeft, u = s.offsetTop, s = 0);
    if (h = ae.getComputedStyle(e), h.position !== "absolute" && h.position !== "fixed")
      for (c = e.offsetParent; l && l !== c; )
        d += l.scrollLeft || 0, u += l.scrollTop || 0, l = l.parentNode;
    s = f.style, s.top = e.offsetTop - u + "px", s.left = e.offsetLeft - d + "px", s[V] = h[V], s[Ie] = h[Ie], s.position = h.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(f);
  }
  return f;
}, We = function(e, t, r, n, o, l, f) {
  return e.a = t, e.b = r, e.c = n, e.d = o, e.e = l, e.f = f, e;
}, ye = /* @__PURE__ */ function() {
  function i(t, r, n, o, l, f) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), n === void 0 && (n = 0), o === void 0 && (o = 1), l === void 0 && (l = 0), f === void 0 && (f = 0), We(this, t, r, n, o, l, f);
  }
  var e = i.prototype;
  return e.inverse = function() {
    var r = this.a, n = this.b, o = this.c, l = this.d, f = this.e, c = this.f, s = r * l - n * o || 1e-10;
    return We(this, l / s, -n / s, -o / s, r / s, (o * c - l * f) / s, -(r * c - n * f) / s);
  }, e.multiply = function(r) {
    var n = this.a, o = this.b, l = this.c, f = this.d, c = this.e, s = this.f, d = r.a, u = r.c, h = r.b, g = r.d, x = r.e, p = r.f;
    return We(this, d * n + h * l, d * o + h * f, u * n + g * l, u * o + g * f, c + x * n + p * l, s + x * o + p * f);
  }, e.clone = function() {
    return new i(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var n = this.a, o = this.b, l = this.c, f = this.d, c = this.e, s = this.f;
    return n === r.a && o === r.b && l === r.c && f === r.d && c === r.e && s === r.f;
  }, e.apply = function(r, n) {
    n === void 0 && (n = {});
    var o = r.x, l = r.y, f = this.a, c = this.b, s = this.c, d = this.d, u = this.e, h = this.f;
    return n.x = o * f + l * s + u || 0, n.y = o * c + l * d + h || 0, n;
  }, i;
}();
function ue(i, e, t, r) {
  if (!i || !i.parentNode || (ee || Nt(i)).documentElement === i)
    return new ye();
  var n = sr(i), o = He(i), l = o ? Et : Tt, f = pr(i, t), c = l[0].getBoundingClientRect(), s = l[1].getBoundingClientRect(), d = l[2].getBoundingClientRect(), u = f.parentNode, h = !r && ur(i), g = new ye((s.left - c.left) / 100, (s.top - c.top) / 100, (d.left - c.left) / 100, (d.top - c.top) / 100, c.left + (h ? 0 : cr()), c.top + (h ? 0 : fr()));
  if (u.removeChild(f), n)
    for (c = n.length; c--; )
      s = n[c], s.scaleX = s.scaleY = 0, s.renderTransform(1, s);
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
var gr = "x,translateX,left,marginLeft,xPercent".split(","), xr = "y,translateY,top,marginTop,yPercent".split(","), vr = Math.PI / 180, D, jt, fe, Ve, Ue, ht, br = function() {
  return D || typeof window < "u" && (D = window.gsap) && D.registerPlugin && D;
}, xe = function(e, t, r, n) {
  for (var o = t.length, l = n === 2 ? 0 : n, f = 0; f < o; f++)
    e[l] = parseFloat(t[f][r]), n === 2 && (e[l + 1] = 0), l += 2;
  return e;
}, ce = function(e, t, r) {
  return parseFloat(e._gsap.get(e, t, r || "px")) || 0;
}, St = function(e) {
  var t = e[0], r = e[1], n;
  for (n = 2; n < e.length; n += 2)
    t = e[n] += t, r = e[n + 1] += r;
}, pt = function(e, t, r, n, o, l, f, c, s) {
  if (f.type === "cubic")
    t = [t];
  else {
    f.fromCurrent !== !1 && t.unshift(ce(r, n, c), o ? ce(r, o, s) : 0), f.relative && St(t);
    var d = o ? Xe : lr;
    t = [d(t, f.curviness)];
  }
  return t = l(Ct(t, r, f)), Le(e, r, n, t, "x", c), o && Le(e, r, o, t, "y", s), oe(t, f.resolution || (f.curviness === 0 ? 20 : 12));
}, mr = function(e) {
  return e;
}, yr = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, gt = function(e, t, r) {
  var n = ue(e), o = 0, l = 0, f;
  return (e.tagName + "").toLowerCase() === "svg" ? (f = e.viewBox.baseVal, f.width || (f = {
    width: +e.getAttribute("width"),
    height: +e.getAttribute("height")
  })) : f = t && e.getBBox && e.getBBox(), t && t !== "auto" && (o = t.push ? t[0] * (f ? f.width : e.offsetWidth || 0) : t.x, l = t.push ? t[1] * (f ? f.height : e.offsetHeight || 0) : t.y), r.apply(o || l ? n.apply({
    x: o,
    y: l
  }) : {
    x: n.e,
    y: n.f
  });
}, Fe = function(e, t, r, n) {
  var o = ue(e.parentNode, !0, !0), l = o.clone().multiply(ue(t)), f = gt(e, r, o), c = gt(t, n, o), s = c.x, d = c.y, u;
  return l.e = l.f = 0, n === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (u = t.getAttribute("d").match(yr) || [], u = l.apply({
    x: +u[0],
    y: +u[1]
  }), s += u.x, d += u.y), u && (u = l.apply(t.getBBox()), s -= u.x, d -= u.y), l.e = s - f.x, l.f = d - f.y, l;
}, Ct = function(e, t, r) {
  var n = r.align, o = r.matrix, l = r.offsetX, f = r.offsetY, c = r.alignOrigin, s = e[0][0], d = e[0][1], u = ce(t, "x"), h = ce(t, "y"), g, x, p;
  return !e || !e.length ? Ae("M0,0L0,0") : (n && (n === "self" || (g = Ve(n)[0] || t) === t ? ve(e, 1, 0, 0, 1, u - s, h - d) : (c && c[2] !== !1 ? D.set(t, {
    transformOrigin: c[0] * 100 + "% " + c[1] * 100 + "%"
  }) : c = [ce(t, "xPercent") / -100, ce(t, "yPercent") / -100], x = Fe(t, g, c, "auto"), p = x.apply({
    x: s,
    y: d
  }), ve(e, x.a, x.b, x.c, x.d, u + x.e - (p.x - x.e), h + x.f - (p.y - x.f)))), o ? ve(e, o.a, o.b, o.c, o.d, o.e, o.f) : (l || f) && ve(e, 1, 0, 0, 1, l || 0, f || 0), e);
}, Le = function(e, t, r, n, o, l) {
  var f = t._gsap, c = f.harness, s = c && c.aliases && c.aliases[r], d = s && s.indexOf(",") < 0 ? s : r, u = e._pt = new jt(e._pt, t, d, 0, 0, mr, 0, f.set(t, d, e));
  u.u = fe(f.get(t, d, l)) || 0, u.path = n, u.pp = o, e._props.push(d);
}, _r = function(e, t) {
  return function(r) {
    return e || t !== 1 ? yt(r, e, t) : r;
  };
}, Rt = {
  version: "3.12.5",
  name: "motionPath",
  register: function(e, t, r) {
    D = e, fe = D.utils.getUnit, Ve = D.utils.toArray, Ue = D.core.getStyleSaver, ht = D.core.reverting || function() {
    }, jt = r;
  },
  init: function(e, t, r) {
    if (!D)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof t == "object" && !t.style) || !t.path) && (t = {
      path: t
    });
    var n = [], o = t, l = o.path, f = o.autoRotate, c = o.unitX, s = o.unitY, d = o.x, u = o.y, h = l[0], g = _r(t.start, "end" in t ? t.end : 1), x, p;
    if (this.rawPaths = n, this.target = e, this.tween = r, this.styles = Ue && Ue(e, "transform"), (this.rotate = f || f === 0) && (this.rOffset = parseFloat(f) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = fe(e._gsap.get(e, this.rProp)) || 0), Array.isArray(l) && !("closed" in l) && typeof h != "number") {
      for (p in h)
        !d && ~gr.indexOf(p) ? d = p : !u && ~xr.indexOf(p) && (u = p);
      d && u ? n.push(pt(this, xe(xe([], l, d, 0), l, u, 1), e, d, u, g, t, c || fe(l[0][d]), s || fe(l[0][u]))) : d = u = 0;
      for (p in h)
        p !== d && p !== u && n.push(pt(this, xe([], l, p, 2), e, p, 0, g, t, fe(l[0][p])));
    } else
      x = g(Ct(Ae(t.path), e, t)), oe(x, t.resolution), n.push(x), Le(this, e, t.x || "x", x, "x", t.unitX || "px"), Le(this, e, t.y || "y", x, "y", t.unitY || "px");
  },
  render: function(e, t) {
    var r = t.rawPaths, n = r.length, o = t._pt;
    if (t.tween._time || !ht()) {
      for (e > 1 ? e = 1 : e < 0 && (e = 0); n--; )
        dt(r[n], e, !n && t.rotate, r[n]);
      for (; o; )
        o.set(o.t, o.p, o.path[o.pp] + o.u, o.d, e), o = o._next;
      t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? vr : 1) + t.rOffset + t.ru, t, e);
    } else
      t.styles.revert();
  },
  getLength: function(e) {
    return oe(Ae(e)).totalLength;
  },
  sliceRawPath: yt,
  getRawPath: Ae,
  pointsToSegment: Xe,
  stringToRawPath: Oe,
  rawPathToString: _t,
  transformRawPath: ve,
  getGlobalMatrix: ue,
  getPositionOnPath: dt,
  cacheRawPathMeasurements: oe,
  convertToPath: function(e, t) {
    return Ve(e).map(function(r) {
      return ir(r, t !== !1);
    });
  },
  convertCoordinates: function(e, t, r) {
    var n = ue(t, !0, !0).multiply(ue(e));
    return r ? n.apply(r) : n;
  },
  getAlignMatrix: Fe,
  getRelativePosition: function(e, t, r, n) {
    var o = Fe(e, t, r, n);
    return {
      x: o.e,
      y: o.f
    };
  },
  arrayToRawPath: function(e, t) {
    t = t || {};
    var r = xe(xe([], e, t.x || "x", 0), e, t.y || "y", 1);
    return t.relative && St(r), [t.type === "cubic" ? r : Xe(r, t.curviness)];
  }
};
br() && D.registerPlugin(Rt);
kt.registerPlugin(Rt);
const Rr = ({ children: i }) => /* @__PURE__ */ m.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ m.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ m.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ m.jsx(Bt, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ m.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ m.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ m.jsx(at, {}) }),
  /* @__PURE__ */ m.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ m.jsx(at, {}) }),
  /* @__PURE__ */ m.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ m.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ m.jsx("div", { className: "content", children: i }) }) })
] }), Ar = ({
  headBlockChildren: i,
  width: e,
  height: t,
  borderColor: r,
  textColor: n,
  mainBlockChildren: o,
  animated: l
}) => /* @__PURE__ */ m.jsxs("div", { className: "card-container relative", style: { width: e, height: t }, children: [
  /* @__PURE__ */ m.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${l ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: `text-${n} head-block`, children: i }),
        /* @__PURE__ */ m.jsx("div", { className: `text-${n} main-block'`, children: o })
      ]
    }
  ),
  /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `artifact text-${r} ${l ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ m.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] });
export {
  Ar as Card,
  Tr as EvaBorderPanel,
  Er as EvaFingerPrintButton,
  Cr as EvaOptionList,
  jr as EvaProgressBar,
  Bt as EvaTilePanel,
  Sr as EvaUnitBox,
  Rr as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
