import * as _ from "react";
import O1, { useMemo as R1, createElement as k1, useRef as nt, useLayoutEffect as A1, useEffect as N1 } from "react";
var nr = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Z1() {
  if (ji) return kt;
  ji = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var a = null;
    if (n !== void 0 && (a = "" + n), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      n = {};
      for (var o in i)
        o !== "key" && (n[o] = i[o]);
    } else n = i;
    return i = n.ref, {
      $$typeof: s,
      type: r,
      key: a,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return kt.Fragment = e, kt.jsx = t, kt.jsxs = t, kt;
}
var At = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fi;
function D1() {
  return Fi || (Fi = 1, process.env.NODE_ENV !== "production" && function() {
    function s(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === ee ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case M:
          return "Fragment";
        case v:
          return "Portal";
        case T:
          return "Profiler";
        case w:
          return "StrictMode";
        case N:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case R:
            return (g.displayName || "Context") + ".Provider";
          case E:
            return (g._context.displayName || "Context") + ".Consumer";
          case k:
            var S = g.render;
            return g = g.displayName, g || (g = S.displayName || S.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case I:
            return S = g.displayName || null, S !== null ? S : s(g.type) || "Memo";
          case j:
            S = g._payload, g = g._init;
            try {
              return s(g(S));
            } catch {
            }
        }
      return null;
    }
    function e(g) {
      return "" + g;
    }
    function t(g) {
      try {
        e(g);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var P = S.error, z = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return P.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          z
        ), e(g);
      }
    }
    function r() {
    }
    function i() {
      if (Q === 0) {
        ue = console.log, Kt = console.info, er = console.warn, tr = console.error, rr = console.group, ne = console.groupCollapsed, Ri = console.groupEnd;
        var g = {
          configurable: !0,
          enumerable: !0,
          value: r,
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
      Q++;
    }
    function n() {
      if (Q--, Q === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: X({}, g, { value: ue }),
          info: X({}, g, { value: Kt }),
          warn: X({}, g, { value: er }),
          error: X({}, g, { value: tr }),
          group: X({}, g, { value: rr }),
          groupCollapsed: X({}, g, { value: ne }),
          groupEnd: X({}, g, { value: Ri })
        });
      }
      0 > Q && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(g) {
      if (Pr === void 0)
        try {
          throw Error();
        } catch (P) {
          var S = P.stack.trim().match(/\n( *(at )?)/);
          Pr = S && S[1] || "", ki = -1 < P.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < P.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Pr + g + ki;
    }
    function o(g, S) {
      if (!g || Or) return "";
      var P = Rr.get(g);
      if (P !== void 0) return P;
      Or = !0, P = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var z = null;
      z = fe.H, fe.H = null, i();
      try {
        var ae = {
          DetermineComponentFrameRoot: function() {
            try {
              if (S) {
                var Ue = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ue.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ue, []);
                  } catch (Fe) {
                    var ir = Fe;
                  }
                  Reflect.construct(g, [], Ue);
                } else {
                  try {
                    Ue.call();
                  } catch (Fe) {
                    ir = Fe;
                  }
                  g.call(Ue.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Fe) {
                  ir = Fe;
                }
                (Ue = g()) && typeof Ue.catch == "function" && Ue.catch(function() {
                });
              }
            } catch (Fe) {
              if (Fe && ir && typeof Fe.stack == "string")
                return [Fe.stack, ir.stack];
            }
            return [null, null];
          }
        };
        ae.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var q = Object.getOwnPropertyDescriptor(
          ae.DetermineComponentFrameRoot,
          "name"
        );
        q && q.configurable && Object.defineProperty(
          ae.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Z = ae.DetermineComponentFrameRoot(), je = Z[0], pt = Z[1];
        if (je && pt) {
          var ce = je.split(`
`), et = pt.split(`
`);
          for (Z = q = 0; q < ce.length && !ce[q].includes(
            "DetermineComponentFrameRoot"
          ); )
            q++;
          for (; Z < et.length && !et[Z].includes(
            "DetermineComponentFrameRoot"
          ); )
            Z++;
          if (q === ce.length || Z === et.length)
            for (q = ce.length - 1, Z = et.length - 1; 1 <= q && 0 <= Z && ce[q] !== et[Z]; )
              Z--;
          for (; 1 <= q && 0 <= Z; q--, Z--)
            if (ce[q] !== et[Z]) {
              if (q !== 1 || Z !== 1)
                do
                  if (q--, Z--, 0 > Z || ce[q] !== et[Z]) {
                    var Rt = `
` + ce[q].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Rt.includes("<anonymous>") && (Rt = Rt.replace("<anonymous>", g.displayName)), typeof g == "function" && Rr.set(g, Rt), Rt;
                  }
                while (1 <= q && 0 <= Z);
              break;
            }
        }
      } finally {
        Or = !1, fe.H = z, n(), Error.prepareStackTrace = P;
      }
      return ce = (ce = g ? g.displayName || g.name : "") ? a(ce) : "", typeof g == "function" && Rr.set(g, ce), ce;
    }
    function f(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var S = g.prototype;
        return o(
          g,
          !(!S || !S.isReactComponent)
        );
      }
      if (typeof g == "string") return a(g);
      switch (g) {
        case N:
          return a("Suspense");
        case A:
          return a("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case k:
            return g = o(g.render, !1), g;
          case I:
            return f(g.type);
          case j:
            S = g._payload, g = g._init;
            try {
              return f(g(S));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var g = fe.A;
      return g === null ? null : g.getOwner();
    }
    function u(g) {
      if (Oe.call(g, "key")) {
        var S = Object.getOwnPropertyDescriptor(g, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function c(g, S) {
      function P() {
        Ai || (Ai = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: P,
        configurable: !0
      });
    }
    function d() {
      var g = s(this.type);
      return Ni[g] || (Ni[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function p(g, S, P, z, ae, q) {
      return P = q.ref, g = {
        $$typeof: b,
        type: g,
        key: S,
        props: q,
        _owner: ae
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: d
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
    function m(g, S, P, z, ae, q) {
      if (typeof g == "string" || typeof g == "function" || g === M || g === T || g === w || g === N || g === A || g === F || typeof g == "object" && g !== null && (g.$$typeof === j || g.$$typeof === I || g.$$typeof === R || g.$$typeof === E || g.$$typeof === k || g.$$typeof === Ee || g.getModuleId !== void 0)) {
        var Z = S.children;
        if (Z !== void 0)
          if (z)
            if (ie(Z)) {
              for (z = 0; z < Z.length; z++)
                h(Z[z], g);
              Object.freeze && Object.freeze(Z);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else h(Z, g);
      } else
        Z = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? z = "null" : ie(g) ? z = "array" : g !== void 0 && g.$$typeof === b ? (z = "<" + (s(g.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : z = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          z,
          Z
        );
      if (Oe.call(S, "key")) {
        Z = s(g);
        var je = Object.keys(S).filter(function(ce) {
          return ce !== "key";
        });
        z = 0 < je.length ? "{key: someKey, " + je.join(": ..., ") + ": ...}" : "{key: someKey}", Zi[Z + z] || (je = 0 < je.length ? "{" + je.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          z,
          Z,
          je,
          Z
        ), Zi[Z + z] = !0);
      }
      if (Z = null, P !== void 0 && (t(P), Z = "" + P), u(S) && (t(S.key), Z = "" + S.key), "key" in S) {
        P = {};
        for (var pt in S)
          pt !== "key" && (P[pt] = S[pt]);
      } else P = S;
      return Z && c(
        P,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), p(g, Z, q, ae, l(), P);
    }
    function h(g, S) {
      if (typeof g == "object" && g && g.$$typeof !== P1) {
        if (ie(g))
          for (var P = 0; P < g.length; P++) {
            var z = g[P];
            L(z) && y(z, S);
          }
        else if (L(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? P = null : (P = $ && g[$] || g["@@iterator"], P = typeof P == "function" ? P : null), typeof P == "function" && P !== g.entries && (P = P.call(g), P !== g))
          for (; !(g = P.next()).done; )
            L(g.value) && y(g.value, S);
      }
    }
    function L(g) {
      return typeof g == "object" && g !== null && g.$$typeof === b;
    }
    function y(g, S) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, S = C(S), !Di[S])) {
        Di[S] = !0;
        var P = "";
        g && g._owner != null && g._owner !== l() && (P = null, typeof g._owner.tag == "number" ? P = s(g._owner.type) : typeof g._owner.name == "string" && (P = g._owner.name), P = " It was passed a child from " + P + ".");
        var z = fe.getCurrentStack;
        fe.getCurrentStack = function() {
          var ae = f(g.type);
          return z && (ae += z() || ""), ae;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          S,
          P
        ), fe.getCurrentStack = z;
      }
    }
    function C(g) {
      var S = "", P = l();
      return P && (P = s(P.type)) && (S = `

Check the render method of \`` + P + "`."), S || (g = s(g)) && (S = `

Check the top-level render call using <` + g + ">."), S;
    }
    var x = O1, b = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), E = Symbol.for("react.consumer"), R = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), $ = Symbol.iterator, ee = Symbol.for("react.client.reference"), fe = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Oe = Object.prototype.hasOwnProperty, X = Object.assign, Ee = Symbol.for("react.client.reference"), ie = Array.isArray, Q = 0, ue, Kt, er, tr, rr, ne, Ri;
    r.__reactDisabledLog = !0;
    var Pr, ki, Or = !1, Rr = new (typeof WeakMap == "function" ? WeakMap : Map)(), P1 = Symbol.for("react.client.reference"), Ai, Ni = {}, Zi = {}, Di = {};
    At.Fragment = M, At.jsx = function(g, S, P, z, ae) {
      return m(g, S, P, !1, z, ae);
    }, At.jsxs = function(g, S, P, z, ae) {
      return m(g, S, P, !0, z, ae);
    };
  }()), At;
}
var zi;
function j1() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? nr.exports = Z1() : nr.exports = D1()), nr.exports;
}
var O = j1();
const z2 = ({
  children: s,
  mode: e = "warning",
  pulseAnimation: t = !0
}) => /* @__PURE__ */ O.jsx("div", { className: `piece ${t && "animate-pulse"}`, children: /* @__PURE__ */ O.jsx(
  "div",
  {
    className: `glowedBorder ${e === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${e} label`,
    children: s
  }
) }), B2 = ({ barsCount: s, currentBarIndex: e }) => {
  function t() {
    const r = [];
    for (let i = 0; i < s; i++)
      r.push(
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < e ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ O.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${s * 10}px` }, children: [
    /* @__PURE__ */ O.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ O.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ O.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ O.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ O.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ O.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: t() }),
    /* @__PURE__ */ O.jsx("div", { className: "h-[15px]" })
  ] });
}, I2 = ({ unitNumber: s, subjectName: e }) => /* @__PURE__ */ O.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ O.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ O.jsx("div", { className: "text-2xl font-[600] label", children: s }),
  /* @__PURE__ */ O.jsx("div", { className: "text-xl font-[400] label", children: e })
] }), F1 = ({
  rowsCount: s,
  tilesPerRowCount: e,
  animationActive: t = !1
}) => {
  function r() {
    return Array(s).fill(null).map((i, n) => /* @__PURE__ */ O.jsx("div", { className: "hex-row rotate-method", children: Array(e).fill(null).map((a, o) => /* @__PURE__ */ O.jsx("div", { className: `hex ${t ? "animation-active" : ""}` }, o)) }, n));
  }
  return /* @__PURE__ */ O.jsx("div", { className: "piece rotateMethod", children: r() });
}, z1 = (s) => R1(() => {
  const e = (n, a) => {
    const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return o[(n + a) % o.length];
  }, t = (n, a) => (n % a).toString(), r = `U-${t(s * 3, 9)}`, i = `${e(s, 20)}${t(s * 7, 99)}`;
  return `${r}${i}`;
}, [s]), B1 = ({ title: s, sciFiCode: e, isActive: t }) => {
  const r = z1(e);
  return /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${t ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ O.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${t ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ O.jsx(
                "div",
                {
                  className: `font-bold w-full ${t ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: s
                }
              ),
              /* @__PURE__ */ O.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ O.jsx(
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
}, Y2 = ({ options: s, width: e = "w-full" }) => /* @__PURE__ */ O.jsx("div", { className: `flex flex-col gap-2 ${e}`, children: s.map((t, r) => /* @__PURE__ */ k1(B1, { ...t, key: r, sciFiCode: r })) }), Bi = () => /* @__PURE__ */ O.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ O.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ O.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ O.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ O.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ O.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] });
function ze(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function pn(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
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
var xe = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, wt = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ci, oe, U, we = 1e8, V = 1 / we, Vr = Math.PI * 2, I1 = Vr / 4, Y1 = 0, mn = Math.sqrt, $1 = Math.cos, V1 = Math.sin, re = function(e) {
  return typeof e == "string";
}, H = function(e) {
  return typeof e == "function";
}, $e = function(e) {
  return typeof e == "number";
}, hi = function(e) {
  return typeof e > "u";
}, De = function(e) {
  return typeof e == "object";
}, de = function(e) {
  return e !== !1;
}, di = function() {
  return typeof window < "u";
}, ar = function(e) {
  return H(e) || re(e);
}, gn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, le = Array.isArray, Ur = /(?:-?\.?\d|\.)+/gi, Ln = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Lt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, kr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, yn = /[+-]=-?[.\d]+/, Cn = /[^,'"\[\]\s]+/gi, U1 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, G, ke, Xr, _i, ve = {}, _r = {}, xn, vn = function(e) {
  return (_r = ht(e, ve)) && ge;
}, pi = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Vt = function(e, t) {
  return !t && console.warn(e);
}, En = function(e, t) {
  return e && (ve[e] = t) && _r && (_r[e] = t) || ve;
}, Ut = function() {
  return 0;
}, X1 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, fr = {
  suppressEvents: !0,
  kill: !1
}, q1 = {
  suppressEvents: !0
}, mi = {}, We = [], qr = {}, bn, Le = {}, Ar = {}, Ii = 30, ur = [], gi = "", Li = function(e) {
  var t = e[0], r, i;
  if (De(t) || H(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = ur.length; i-- && !ur[i].targetTest(t); )
      ;
    r = ur[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Gn(e[i], r))) || e.splice(i, 1);
  return e;
}, st = function(e) {
  return e._gsap || Li(Te(e))[0]._gsap;
}, Mn = function(e, t, r) {
  return (r = e[t]) && H(r) ? e[t]() : hi(r) && e.getAttribute && e.getAttribute(t) || r;
}, _e = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, J = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, te = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, xt = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, G1 = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, pr = function() {
  var e = We.length, t = We.slice(0), r, i;
  for (qr = {}, We.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, wn = function(e, t, r, i) {
  We.length && !oe && pr(), e.render(t, r, oe && t < 0 && (e._initted || e._startAt)), We.length && !oe && pr();
}, Tn = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Cn).length < 2 ? t : re(e) ? e.trim() : e;
}, Sn = function(e) {
  return e;
}, Pe = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, W1 = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, ht = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Yi = function s(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = De(t[r]) ? s(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, mr = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, Bt = function(e) {
  var t = e.parent || G, r = e.keyframes ? W1(le(e.keyframes)) : Pe;
  if (de(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, H1 = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Pn = function(e, t, r, i, n) {
  var a = e[i], o;
  if (n)
    for (o = t[n]; a && a[n] > o; )
      a = a._prev;
  return a ? (t._next = a._next, a._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = a, t.parent = t._dp = e, t;
}, Mr = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, a = t._next;
  n ? n._next = a : e[r] === t && (e[r] = a), a ? a._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Je = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, ot = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, J1 = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Gr = function(e, t, r, i) {
  return e._startAt && (oe ? e._startAt.revert(fr) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Q1 = function s(e) {
  return !e || e._ts && s(e.parent);
}, $i = function(e) {
  return e._repeat ? Tt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, Tt = function(e, t) {
  var r = Math.floor(e /= t);
  return e && r === e ? r - 1 : r;
}, gr = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, wr = function(e) {
  return e._end = te(e._start + (e._tDur / Math.abs(e._ts || e._rts || V) || 0));
}, Tr = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = te(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), wr(e), r._dirty || ot(r, e)), e;
}, On = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = gr(e.rawTime(), t), (!t._dur || Qt(0, t.totalDuration(), r) - t._tTime > V) && t.render(r, !0)), ot(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -V;
  }
}, Ae = function(e, t, r, i) {
  return t.parent && Je(t), t._start = te(($e(r) ? r : r || e !== G ? be(e, r, t) : e._time) + t._delay), t._end = te(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Pn(e, t, "_first", "_last", e._sort ? "_start" : 0), Wr(t) || (e._recent = t), i || On(e, t), e._ts < 0 && Tr(e, e._tTime), e;
}, Rn = function(e, t) {
  return (ve.ScrollTrigger || pi("scrollTrigger", t)) && ve.ScrollTrigger.create(t, e);
}, kn = function(e, t, r, i, n) {
  if (Ci(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !oe && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && bn !== ye.frame)
    return We.push(e), e._lazy = [n, i], 1;
}, K1 = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, Wr = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, e0 = function(e, t, r, i) {
  var n = e.ratio, a = t < 0 || !t && (!e._start && K1(e) && !(!e._initted && Wr(e)) || (e._ts < 0 || e._dp._ts < 0) && !Wr(e)) ? 0 : 1, o = e._rDelay, f = 0, l, u, c;
  if (o && e._repeat && (f = Qt(0, e._tDur, t), u = Tt(f, o), e._yoyo && u & 1 && (a = 1 - a), u !== Tt(e._tTime, o) && (n = 1 - a, e.vars.repeatRefresh && e._initted && e.invalidate())), a !== n || oe || i || e._zTime === V || !t && e._zTime) {
    if (!e._initted && kn(e, t, i, r, f))
      return;
    for (c = e._zTime, e._zTime = t || (r ? V : 0), r || (r = t && !c), e.ratio = a, e._from && (a = 1 - a), e._time = 0, e._tTime = f, l = e._pt; l; )
      l.r(a, l.d), l = l._next;
    t < 0 && Gr(e, t, r, !0), e._onUpdate && !r && Ce(e, "onUpdate"), f && e._repeat && !r && e.parent && Ce(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === a && (a && Je(e, 1), !r && !oe && (Ce(e, a ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, t0 = function(e, t, r) {
  var i;
  if (r > t)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, St = function(e, t, r, i) {
  var n = e._repeat, a = te(t) || 0, o = e._tTime / e._tDur;
  return o && !i && (e._time *= a / e._dur), e._dur = a, e._tDur = n ? n < 0 ? 1e10 : te(a * (n + 1) + e._rDelay * n) : a, o > 0 && !i && Tr(e, e._tTime = e._tDur * o), e.parent && wr(e), r || ot(e.parent, e), e;
}, Vi = function(e) {
  return e instanceof he ? ot(e) : St(e, e._dur);
}, r0 = {
  _start: 0,
  endTime: Ut,
  totalDuration: Ut
}, be = function s(e, t, r) {
  var i = e.labels, n = e._recent || r0, a = e.duration() >= we ? n.endTime(!1) : e._dur, o, f, l;
  return re(t) && (isNaN(t) || t in i) ? (f = t.charAt(0), l = t.substr(-1) === "%", o = t.indexOf("="), f === "<" || f === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = a), i[t]) : (f = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), l && r && (f = f / 100 * (le(r) ? r[0] : r).totalDuration()), o > 1 ? s(e, t.substr(0, o - 1), r) + f : a + f)) : t == null ? a : +t;
}, It = function(e, t, r) {
  var i = $e(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), a = t[n], o, f;
  if (i && (a.duration = t[1]), a.parent = r, e) {
    for (o = a, f = r; f && !("immediateRender" in o); )
      o = f.vars.defaults || {}, f = de(f.vars.inherit) && f.parent;
    a.immediateRender = de(o.immediateRender), e < 2 ? a.runBackwards = 1 : a.startAt = t[n - 1];
  }
  return new K(t[0], a, t[n + 1]);
}, Ke = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Qt = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, se = function(e, t) {
  return !re(e) || !(t = U1.exec(e)) ? "" : t[1];
}, i0 = function(e, t, r) {
  return Ke(r, function(i) {
    return Qt(e, t, i);
  });
}, Hr = [].slice, An = function(e, t) {
  return e && De(e) && "length" in e && (!t && !e.length || e.length - 1 in e && De(e[0])) && !e.nodeType && e !== ke;
}, n0 = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return re(i) && !t || An(i, 1) ? (n = r).push.apply(n, Te(i)) : r.push(i);
  }) || r;
}, Te = function(e, t, r) {
  return U && !t && U.selector ? U.selector(e) : re(e) && !r && (Xr || !Pt()) ? Hr.call((t || _i).querySelectorAll(e), 0) : le(e) ? n0(e, r) : An(e) ? Hr.call(e, 0) : e ? [e] : [];
}, Jr = function(e) {
  return e = Te(e)[0] || Vt("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Te(t, r.querySelectorAll ? r : r === e ? Vt("Invalid scope") || _i.createElement("div") : e);
  };
}, Nn = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Zn = function(e) {
  if (H(e))
    return e;
  var t = De(e) ? e : {
    each: e
  }, r = lt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, a = {}, o = i > 0 && i < 1, f = isNaN(i) || o, l = t.axis, u = i, c = i;
  return re(i) ? u = c = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && f && (u = i[0], c = i[1]), function(d, p, m) {
    var h = (m || t).length, L = a[h], y, C, x, b, v, M, w, T, E;
    if (!L) {
      if (E = t.grid === "auto" ? 0 : (t.grid || [1, we])[1], !E) {
        for (w = -we; w < (w = m[E++].getBoundingClientRect().left) && E < h; )
          ;
        E < h && E--;
      }
      for (L = a[h] = [], y = f ? Math.min(E, h) * u - 0.5 : i % E, C = E === we ? 0 : f ? h * c / E - 0.5 : i / E | 0, w = 0, T = we, M = 0; M < h; M++)
        x = M % E - y, b = C - (M / E | 0), L[M] = v = l ? Math.abs(l === "y" ? b : x) : mn(x * x + b * b), v > w && (w = v), v < T && (T = v);
      i === "random" && Nn(L), L.max = w - T, L.min = T, L.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (E > h ? h - 1 : l ? l === "y" ? h / E : E : Math.max(E, h / E)) || 0) * (i === "edges" ? -1 : 1), L.b = h < 0 ? n - h : n, L.u = se(t.amount || t.each) || 0, r = r && h < 0 ? Un(r) : r;
    }
    return h = (L[d] - L.min) / L.max || 0, te(L.b + (r ? r(h) : h) * L.v) + L.u;
  };
}, Qr = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = te(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + ($e(r) ? 0 : se(r));
  };
}, Dn = function(e, t) {
  var r = le(e), i, n;
  return !r && De(e) && (i = r = e.radius || we, e.values ? (e = Te(e.values), (n = !$e(e[0])) && (i *= i)) : e = Qr(e.increment)), Ke(t, r ? H(e) ? function(a) {
    return n = e(a), Math.abs(n - a) <= i ? n : a;
  } : function(a) {
    for (var o = parseFloat(n ? a.x : a), f = parseFloat(n ? a.y : 0), l = we, u = 0, c = e.length, d, p; c--; )
      n ? (d = e[c].x - o, p = e[c].y - f, d = d * d + p * p) : d = Math.abs(e[c] - o), d < l && (l = d, u = c);
    return u = !i || l <= i ? e[u] : a, n || u === a || $e(a) ? u : u + se(a);
  } : Qr(e));
}, jn = function(e, t, r, i) {
  return Ke(le(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return le(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, a0 = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, a) {
      return a(n);
    }, i);
  };
}, s0 = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || se(r));
  };
}, o0 = function(e, t, r) {
  return zn(e, t, 0, 1, r);
}, Fn = function(e, t, r) {
  return Ke(r, function(i) {
    return e[~~t(i)];
  });
}, l0 = function s(e, t, r) {
  var i = t - e;
  return le(e) ? Fn(e, s(0, e.length), t) : Ke(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, f0 = function s(e, t, r) {
  var i = t - e, n = i * 2;
  return le(e) ? Fn(e, s(0, e.length - 1), t) : Ke(r, function(a) {
    return a = (n + (a - e) % n) % n || 0, e + (a > i ? n - a : a);
  });
}, Xt = function(e) {
  for (var t = 0, r = "", i, n, a, o; ~(i = e.indexOf("random(", t)); )
    a = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, a - i - 7).match(o ? Cn : Ur), r += e.substr(t, i - t) + jn(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), t = a + 1;
  return r + e.substr(t, e.length - t);
}, zn = function(e, t, r, i, n) {
  var a = t - e, o = i - r;
  return Ke(n, function(f) {
    return r + ((f - e) / a * o || 0);
  });
}, u0 = function s(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!n) {
    var a = re(e), o = {}, f, l, u, c, d;
    if (r === !0 && (i = 1) && (r = null), a)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (le(e) && !le(t)) {
      for (u = [], c = e.length, d = c - 2, l = 1; l < c; l++)
        u.push(s(e[l - 1], e[l]));
      c--, n = function(m) {
        m *= c;
        var h = Math.min(d, ~~m);
        return u[h](m - h);
      }, r = t;
    } else i || (e = ht(le(e) ? [] : {}, e));
    if (!u) {
      for (f in t)
        yi.call(o, e, f, "get", t[f]);
      n = function(m) {
        return Ei(m, o) || (a ? e.p : e);
      };
    }
  }
  return Ke(r, n);
}, Ui = function(e, t, r) {
  var i = e.labels, n = we, a, o, f;
  for (a in i)
    o = i[a] - t, o < 0 == !!r && o && n > (o = Math.abs(o)) && (f = a, n = o);
  return f;
}, Ce = function(e, t, r) {
  var i = e.vars, n = i[t], a = U, o = e._ctx, f, l, u;
  if (n)
    return f = i[t + "Params"], l = i.callbackScope || e, r && We.length && pr(), o && (U = o), u = f ? n.apply(l, f) : n.call(l), U = a, u;
}, Dt = function(e) {
  return Je(e), e.scrollTrigger && e.scrollTrigger.kill(!!oe), e.progress() < 1 && Ce(e, "onInterrupt"), e;
}, yt, Bn = [], In = function(e) {
  if (e)
    if (e = !e.name && e.default || e, di() || e.headless) {
      var t = e.name, r = H(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: Ut,
        render: Ei,
        add: yi,
        kill: w0,
        modifier: M0,
        rawVars: 0
      }, a = {
        targetTest: 0,
        get: 0,
        getSetter: vi,
        aliases: {},
        register: 0
      };
      if (Pt(), e !== i) {
        if (Le[t])
          return;
        Pe(i, Pe(mr(e, n), a)), ht(i.prototype, ht(n, mr(e, a))), Le[i.prop = t] = i, e.targetTest && (ur.push(i), mi[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      En(t, i), e.register && e.register(ge, i, pe);
    } else
      Bn.push(e);
}, Y = 255, jt = {
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
}, Nr = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * Y + 0.5 | 0;
}, Yn = function(e, t, r) {
  var i = e ? $e(e) ? [e >> 16, e >> 8 & Y, e & Y] : 0 : jt.black, n, a, o, f, l, u, c, d, p, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), jt[e])
      i = jt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), a = e.charAt(2), o = e.charAt(3), e = "#" + n + n + a + a + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & Y, i & Y, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & Y, e & Y];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(Ur), !t)
        f = +i[0] % 360 / 360, l = +i[1] / 100, u = +i[2] / 100, a = u <= 0.5 ? u * (l + 1) : u + l - u * l, n = u * 2 - a, i.length > 3 && (i[3] *= 1), i[0] = Nr(f + 1 / 3, n, a), i[1] = Nr(f, n, a), i[2] = Nr(f - 1 / 3, n, a);
      else if (~e.indexOf("="))
        return i = e.match(Ln), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(Ur) || jt.transparent;
    i = i.map(Number);
  }
  return t && !m && (n = i[0] / Y, a = i[1] / Y, o = i[2] / Y, c = Math.max(n, a, o), d = Math.min(n, a, o), u = (c + d) / 2, c === d ? f = l = 0 : (p = c - d, l = u > 0.5 ? p / (2 - c - d) : p / (c + d), f = c === n ? (a - o) / p + (a < o ? 6 : 0) : c === a ? (o - n) / p + 2 : (n - a) / p + 4, f *= 60), i[0] = ~~(f + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, $n = function(e) {
  var t = [], r = [], i = -1;
  return e.split(He).forEach(function(n) {
    var a = n.match(Lt) || [];
    t.push.apply(t, a), r.push(i += a.length + 1);
  }), t.c = r, t;
}, Xi = function(e, t, r) {
  var i = "", n = (e + i).match(He), a = t ? "hsla(" : "rgba(", o = 0, f, l, u, c;
  if (!n)
    return e;
  if (n = n.map(function(d) {
    return (d = Yn(d, t, 1)) && a + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (u = $n(e), f = r.c, f.join(i) !== u.c.join(i)))
    for (l = e.replace(He, "1").split(Lt), c = l.length - 1; o < c; o++)
      i += l[o] + (~f.indexOf(o) ? n.shift() || a + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!l)
    for (l = e.split(He), c = l.length - 1; o < c; o++)
      i += l[o] + n[o];
  return i + l[c];
}, He = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in jt)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
}(), c0 = /hsl[a]?\(/, Vn = function(e) {
  var t = e.join(" "), r;
  if (He.lastIndex = 0, He.test(t))
    return r = c0.test(t), e[1] = Xi(e[1], r), e[0] = Xi(e[0], r, $n(e[1])), !0;
}, qt, ye = function() {
  var s = Date.now, e = 500, t = 33, r = s(), i = r, n = 1e3 / 240, a = n, o = [], f, l, u, c, d, p, m = function h(L) {
    var y = s() - i, C = L === !0, x, b, v, M;
    if ((y > e || y < 0) && (r += y - t), i += y, v = i - r, x = v - a, (x > 0 || C) && (M = ++c.frame, d = v - c.time * 1e3, c.time = v = v / 1e3, a += x + (x >= n ? 4 : n - x), b = 1), C || (f = l(h)), b)
      for (p = 0; p < o.length; p++)
        o[p](v, d, M, L);
  };
  return c = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(L) {
      return d / (1e3 / (L || 60));
    },
    wake: function() {
      xn && (!Xr && di() && (ke = Xr = window, _i = ke.document || {}, ve.gsap = ge, (ke.gsapVersions || (ke.gsapVersions = [])).push(ge.version), vn(_r || ke.GreenSockGlobals || !ke.gsap && ke || {}), Bn.forEach(In)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && c.sleep(), l = u || function(L) {
        return setTimeout(L, a - c.time * 1e3 + 1 | 0);
      }, qt = 1, m(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(f), qt = 0, l = Ut;
    },
    lagSmoothing: function(L, y) {
      e = L || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(L) {
      n = 1e3 / (L || 240), a = c.time * 1e3 + n;
    },
    add: function(L, y, C) {
      var x = y ? function(b, v, M, w) {
        L(b, v, M, w), c.remove(x);
      } : L;
      return c.remove(L), o[C ? "unshift" : "push"](x), Pt(), x;
    },
    remove: function(L, y) {
      ~(y = o.indexOf(L)) && o.splice(y, 1) && p >= y && p--;
    },
    _listeners: o
  }, c;
}(), Pt = function() {
  return !qt && ye.wake();
}, D = {}, h0 = /^[\d.\-M][\d.\-,\s]/, d0 = /["']/g, _0 = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, a = r.length, o, f, l; n < a; n++)
    f = r[n], o = n !== a - 1 ? f.lastIndexOf(",") : f.length, l = f.substr(0, o), t[i] = isNaN(l) ? l.replace(d0, "").trim() : +l, i = f.substr(o + 1).trim();
  return t;
}, p0 = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, m0 = function(e) {
  var t = (e + "").split("("), r = D[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [_0(t[1])] : p0(e).split(",").map(Tn)) : D._CE && h0.test(e) ? D._CE("", e) : r;
}, Un = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Xn = function s(e, t) {
  for (var r = e._first, i; r; )
    r instanceof he ? s(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? s(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, lt = function(e, t) {
  return e && (H(e) ? e : D[e] || m0(e)) || t;
}, _t = function(e, t, r, i) {
  r === void 0 && (r = function(f) {
    return 1 - t(1 - f);
  }), i === void 0 && (i = function(f) {
    return f < 0.5 ? t(f * 2) / 2 : 1 - t((1 - f) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, a;
  return _e(e, function(o) {
    D[o] = ve[o] = n, D[a = o.toLowerCase()] = r;
    for (var f in n)
      D[a + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = D[o + "." + f] = n[f];
  }), n;
}, qn = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, Zr = function s(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), a = n / Vr * (Math.asin(1 / i) || 0), o = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * V1((u - a) * n) + 1;
  }, f = e === "out" ? o : e === "in" ? function(l) {
    return 1 - o(1 - l);
  } : qn(o);
  return n = Vr / n, f.config = function(l, u) {
    return s(e, l, u);
  }, f;
}, Dr = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(a) {
    return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(n) {
    return 1 - r(1 - n);
  } : qn(r);
  return i.config = function(n) {
    return s(e, n);
  }, i;
};
_e("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  _t(s + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
D.Linear.easeNone = D.none = D.Linear.easeIn;
_t("Elastic", Zr("in"), Zr("out"), Zr());
(function(s, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, n = function(o) {
    return o < t ? s * o * o : o < r ? s * Math.pow(o - 1.5 / e, 2) + 0.75 : o < i ? s * (o -= 2.25 / e) * o + 0.9375 : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
  };
  _t("Bounce", function(a) {
    return 1 - n(1 - a);
  }, n);
})(7.5625, 2.75);
_t("Expo", function(s) {
  return s ? Math.pow(2, 10 * (s - 1)) : 0;
});
_t("Circ", function(s) {
  return -(mn(1 - s * s) - 1);
});
_t("Sine", function(s) {
  return s === 1 ? 1 : -$1(s * I1) + 1;
});
_t("Back", Dr("in"), Dr("out"), Dr());
D.SteppedEase = D.steps = ve.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, a = 1 - V;
    return function(o) {
      return ((i * Qt(0, a, o) | 0) + n) * r;
    };
  }
};
wt.ease = D["quad.out"];
_e("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return gi += s + "," + s + "Params,";
});
var Gn = function(e, t) {
  this.id = Y1++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Mn, this.set = t ? t.getSetter : vi;
}, Gt = /* @__PURE__ */ function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, St(this, +t.duration, 1, 1), this.data = t.data, U && (this._ctx = U, U.data.push(this)), qt || ye.wake();
  }
  var e = s.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, St(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (Pt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Tr(this, r), !n._dp || n.parent || On(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Ae(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === V || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), wn(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + $i(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + $i(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Tt(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -V ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? gr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -V ? 0 : this._rts, this.totalTime(Qt(-Math.abs(this._delay), this._tDur, n), i !== !1), wr(this), J1(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Ae(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (de(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? gr(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = q1);
    var i = oe;
    return oe = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), oe = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Vi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Vi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(be(this, r), de(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, de(i));
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -V : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - V);
  }, e.eventCallback = function(r, i, n) {
    var a = this.vars;
    return arguments.length > 1 ? (i ? (a[r] = i, n && (a[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete a[r], this) : a[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var a = H(r) ? r : Sn, o = function() {
        var l = i.then;
        i.then = null, H(a) && (a = a(i)) && (a.then || a === i) && (i.then = l), n(a), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, e.kill = function() {
    Dt(this);
  }, s;
}();
Pe(Gt.prototype, {
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
var he = /* @__PURE__ */ function(s) {
  pn(e, s);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = de(r.sortChildren), G && Ae(r.parent || G, ze(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Rn(ze(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, a) {
    return It(0, arguments, this), this;
  }, t.from = function(i, n, a) {
    return It(1, arguments, this), this;
  }, t.fromTo = function(i, n, a, o) {
    return It(2, arguments, this), this;
  }, t.set = function(i, n, a) {
    return n.duration = 0, n.parent = this, Bt(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new K(i, n, be(this, a), 1), this;
  }, t.call = function(i, n, a) {
    return Ae(this, K.delayedCall(0, i, n), a);
  }, t.staggerTo = function(i, n, a, o, f, l, u) {
    return a.duration = n, a.stagger = a.stagger || o, a.onComplete = l, a.onCompleteParams = u, a.parent = this, new K(i, a, be(this, f)), this;
  }, t.staggerFrom = function(i, n, a, o, f, l, u) {
    return a.runBackwards = 1, Bt(a).immediateRender = de(a.immediateRender), this.staggerTo(i, n, a, o, f, l, u);
  }, t.staggerFromTo = function(i, n, a, o, f, l, u, c) {
    return o.startAt = a, Bt(o).immediateRender = de(o.immediateRender), this.staggerTo(i, n, o, f, l, u, c);
  }, t.render = function(i, n, a) {
    var o = this._time, f = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = i <= 0 ? 0 : te(i), c = this._zTime < 0 != i < 0 && (this._initted || !l), d, p, m, h, L, y, C, x, b, v, M, w;
    if (this !== G && u > f && i >= 0 && (u = f), u !== this._tTime || a || c) {
      if (o !== this._time && l && (u += this._time - o, i += this._time - o), d = u, b = this._start, x = this._ts, y = !x, c && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (M = this._yoyo, L = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(L * 100 + i, n, a);
        if (d = te(u % L), u === f ? (h = this._repeat, d = l) : (h = ~~(u / L), h && h === u / L && (d = l, h--), d > l && (d = l)), v = Tt(this._tTime, L), !o && this._tTime && v !== h && this._tTime - v * L - this._dur <= 0 && (v = h), M && h & 1 && (d = l - d, w = 1), h !== v && !this._lock) {
          var T = M && v & 1, E = T === (M && h & 1);
          if (h < v && (T = !T), o = T ? 0 : u % l ? l : u, this._lock = 1, this.render(o || (w ? 0 : te(h * L)), n, !l)._lock = 0, this._tTime = u, !n && this.parent && Ce(this, "onRepeat"), this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, f = this._tDur, E && (this._lock = 2, o = T ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !w && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          Xn(this, w);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (C = t0(this, te(o), te(d)), C && (u -= d - (d = C._start))), this._tTime = u, this._time = d, this._act = !x, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && d && !n && !h && (Ce(this, "onStart"), this._tTime !== u))
        return this;
      if (d >= o && i >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && C !== p) {
            if (p.parent !== this)
              return this.render(i, n, a);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, n, a), d !== this._time || !this._ts && !y) {
              C = 0, m && (u += this._zTime = -V);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var R = i < 0 ? i : d; p; ) {
          if (m = p._prev, (p._act || R <= p._end) && p._ts && C !== p) {
            if (p.parent !== this)
              return this.render(i, n, a);
            if (p.render(p._ts > 0 ? (R - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (R - p._start) * p._ts, n, a || oe && (p._initted || p._startAt)), d !== this._time || !this._ts && !y) {
              C = 0, m && (u += this._zTime = R ? -V : V);
              break;
            }
          }
          p = m;
        }
      }
      if (C && !n && (this.pause(), C.render(d >= o ? 0 : -V)._zTime = d >= o ? 1 : -1, this._ts))
        return this._start = b, wr(this), this.render(i, n, a);
      this._onUpdate && !n && Ce(this, "onUpdate", !0), (u === f && this._tTime >= this.totalDuration() || !u && o) && (b === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (u === f && this._ts > 0 || !u && this._ts < 0) && Je(this, 1), !n && !(i < 0 && !o) && (u || o || !f) && (Ce(this, u === f && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < f && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var a = this;
    if ($e(n) || (n = be(this, n, i)), !(i instanceof Gt)) {
      if (le(i))
        return i.forEach(function(o) {
          return a.add(o, n);
        }), this;
      if (re(i))
        return this.addLabel(i, n);
      if (H(i))
        i = K.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Ae(this, i, n) : this;
  }, t.getChildren = function(i, n, a, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), a === void 0 && (a = !0), o === void 0 && (o = -we);
    for (var f = [], l = this._first; l; )
      l._start >= o && (l instanceof K ? n && f.push(l) : (a && f.push(l), i && f.push.apply(f, l.getChildren(!0, n, a)))), l = l._next;
    return f;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
      if (n[a].vars.id === i)
        return n[a];
  }, t.remove = function(i) {
    return re(i) ? this.removeLabel(i) : H(i) ? this.killTweensOf(i) : (Mr(this, i), i === this._recent && (this._recent = this._last), ot(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = te(ye.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = be(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, a) {
    var o = K.delayedCall(0, n || Ut, a);
    return o.data = "isPause", this._hasPause = 1, Ae(this, o, be(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = be(this, i); n; )
      n._start === i && n.data === "isPause" && Je(n), n = n._next;
  }, t.killTweensOf = function(i, n, a) {
    for (var o = this.getTweensOf(i, a), f = o.length; f--; )
      Xe !== o[f] && o[f].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var a = [], o = Te(i), f = this._first, l = $e(n), u; f; )
      f instanceof K ? G1(f._targets, o) && (l ? (!Xe || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && a.push(f) : (u = f.getTweensOf(o, n)).length && a.push.apply(a, u), f = f._next;
    return a;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var a = this, o = be(a, i), f = n, l = f.startAt, u = f.onStart, c = f.onStartParams, d = f.immediateRender, p, m = K.to(a, Pe({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale()) || V,
      onStart: function() {
        if (a.pause(), !p) {
          var L = n.duration || Math.abs((o - (l && "time" in l ? l.time : a._time)) / a.timeScale());
          m._dur !== L && St(m, L, 0, 1).render(m._time, !0, !0), p = 1;
        }
        u && u.apply(m, c || []);
      }
    }, n));
    return d ? m.render(0) : m;
  }, t.tweenFromTo = function(i, n, a) {
    return this.tweenTo(n, Pe({
      startAt: {
        time: be(this, i)
      }
    }, a));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Ui(this, be(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Ui(this, be(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + V);
  }, t.shiftChildren = function(i, n, a) {
    a === void 0 && (a = 0);
    for (var o = this._first, f = this.labels, l; o; )
      o._start >= a && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in f)
        f[l] >= a && (f[l] += i);
    return ot(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, a; n; )
      a = n._next, this.remove(n), n = a;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ot(this);
  }, t.totalDuration = function(i) {
    var n = 0, a = this, o = a._last, f = we, l, u, c;
    if (arguments.length)
      return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
    if (a._dirty) {
      for (c = a.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), u = o._start, u > f && a._sort && o._ts && !a._lock ? (a._lock = 1, Ae(a, o, u - o._delay, 1)._lock = 0) : f = u, u < 0 && o._ts && (n -= u, (!c && !a._dp || c && c.smoothChildTiming) && (a._start += u / a._ts, a._time -= u, a._tTime -= u), a.shiftChildren(-u, !1, -1 / 0), f = 0), o._end > n && o._ts && (n = o._end), o = l;
      St(a, a === G && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
    }
    return a._tDur;
  }, e.updateRoot = function(i) {
    if (G._ts && (wn(G, gr(i, G)), bn = ye.frame), ye.frame >= Ii) {
      Ii += xe.autoSleep || 120;
      var n = G._first;
      if ((!n || !n._ts) && xe.autoSleep && ye._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ye.sleep();
      }
    }
  }, e;
}(Gt);
Pe(he.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var g0 = function(e, t, r, i, n, a, o) {
  var f = new pe(this._pt, e, t, 0, 1, e1, null, n), l = 0, u = 0, c, d, p, m, h, L, y, C;
  for (f.b = r, f.e = i, r += "", i += "", (y = ~i.indexOf("random(")) && (i = Xt(i)), a && (C = [r, i], a(C, e, t), r = C[0], i = C[1]), d = r.match(kr) || []; c = kr.exec(i); )
    m = c[0], h = i.substring(l, c.index), p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1), m !== d[u++] && (L = parseFloat(d[u - 1]) || 0, f._pt = {
      _next: f._pt,
      p: h || u === 1 ? h : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: L,
      c: m.charAt(1) === "=" ? xt(L, m) - L : parseFloat(m) - L,
      m: p && p < 4 ? Math.round : 0
    }, l = kr.lastIndex);
  return f.c = l < i.length ? i.substring(l, i.length) : "", f.fp = o, (yn.test(i) || y) && (f.e = 0), this._pt = f, f;
}, yi = function(e, t, r, i, n, a, o, f, l, u) {
  H(i) && (i = i(n || 0, e, a));
  var c = e[t], d = r !== "get" ? r : H(c) ? l ? e[t.indexOf("set") || !H(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : c, p = H(c) ? l ? v0 : Qn : xi, m;
  if (re(i) && (~i.indexOf("random(") && (i = Xt(i)), i.charAt(1) === "=" && (m = xt(d, i) + (se(d) || 0), (m || m === 0) && (i = m))), !u || d !== i || Kr)
    return !isNaN(d * i) && i !== "" ? (m = new pe(this._pt, e, t, +d || 0, i - (d || 0), typeof c == "boolean" ? b0 : Kn, 0, p), l && (m.fp = l), o && m.modifier(o, this, e), this._pt = m) : (!c && !(t in e) && pi(t, i), g0.call(this, e, t, d, i, p, f || xe.stringFilter, l));
}, L0 = function(e, t, r, i, n) {
  if (H(e) && (e = Yt(e, n, t, r, i)), !De(e) || e.style && e.nodeType || le(e) || gn(e))
    return re(e) ? Yt(e, n, t, r, i) : e;
  var a = {}, o;
  for (o in e)
    a[o] = Yt(e[o], n, t, r, i);
  return a;
}, Wn = function(e, t, r, i, n, a) {
  var o, f, l, u;
  if (Le[e] && (o = new Le[e]()).init(n, o.rawVars ? t[e] : L0(t[e], i, n, a, r), r, i, a) !== !1 && (r._pt = f = new pe(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== yt))
    for (l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length; u--; )
      l[o._props[u]] = f;
  return o;
}, Xe, Kr, Ci = function s(e, t, r) {
  var i = e.vars, n = i.ease, a = i.startAt, o = i.immediateRender, f = i.lazy, l = i.onUpdate, u = i.runBackwards, c = i.yoyoEase, d = i.keyframes, p = i.autoRevert, m = e._dur, h = e._startAt, L = e._targets, y = e.parent, C = y && y.data === "nested" ? y.vars.targets : L, x = e._overwrite === "auto" && !ci, b = e.timeline, v, M, w, T, E, R, k, N, A, I, j, F, $;
  if (b && (!d || !n) && (n = "none"), e._ease = lt(n, wt.ease), e._yEase = c ? Un(lt(c === !0 ? n : c, wt.ease)) : 0, c && e._yoyo && !e._repeat && (c = e._yEase, e._yEase = e._ease, e._ease = c), e._from = !b && !!i.runBackwards, !b || d && !i.stagger) {
    if (N = L[0] ? st(L[0]).harness : 0, F = N && i[N.prop], v = mr(i, mi), h && (h._zTime < 0 && h.progress(1), t < 0 && u && o && !p ? h.render(-1, !0) : h.revert(u && m ? fr : X1), h._lazy = 0), a) {
      if (Je(e._startAt = K.set(L, Pe({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !h && de(f),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return Ce(e, "onUpdate");
        },
        stagger: 0
      }, a))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe || !o && !p) && e._startAt.revert(fr), o && m && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && m && !h) {
      if (t && (o = !1), w = Pe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !h && de(f),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, v), F && (w[N.prop] = F), Je(e._startAt = K.set(L, w)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe ? e._startAt.revert(fr) : e._startAt.render(-1, !0)), e._zTime = t, !o)
        s(e._startAt, V, V);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, f = m && de(f) || f && !m, M = 0; M < L.length; M++) {
      if (E = L[M], k = E._gsap || Li(L)[M]._gsap, e._ptLookup[M] = I = {}, qr[k.id] && We.length && pr(), j = C === L ? M : C.indexOf(E), N && (A = new N()).init(E, F || v, e, j, C) !== !1 && (e._pt = T = new pe(e._pt, E, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(ee) {
        I[ee] = T;
      }), A.priority && (R = 1)), !N || F)
        for (w in v)
          Le[w] && (A = Wn(w, v, e, j, E, C)) ? A.priority && (R = 1) : I[w] = T = yi.call(e, E, w, "get", v[w], j, C, 0, i.stringFilter);
      e._op && e._op[M] && e.kill(E, e._op[M]), x && e._pt && (Xe = e, G.killTweensOf(E, I, e.globalTime(t)), $ = !e.parent, Xe = 0), e._pt && f && (qr[k.id] = 1);
    }
    R && t1(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = l, e._initted = (!e._op || e._pt) && !$, d && t <= 0 && b.render(we, !0, !0);
}, y0 = function(e, t, r, i, n, a, o, f) {
  var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, c, d, p;
  if (!l)
    for (l = e._ptCache[t] = [], d = e._ptLookup, p = e._targets.length; p--; ) {
      if (u = d[p][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return Kr = 1, e.vars[t] = "+=0", Ci(e, o), Kr = 0, f ? Vt(t + " not eligible for reset") : 1;
      l.push(u);
    }
  for (p = l.length; p--; )
    c = l[p], u = c._pt || c, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + a * u.c, u.c = r - u.s, c.e && (c.e = J(r) + se(c.e)), c.b && (c.b = u.s + se(c.b));
}, C0 = function(e, t) {
  var r = e[0] ? st(e[0]).harness : 0, i = r && r.aliases, n, a, o, f;
  if (!i)
    return t;
  n = ht({}, t);
  for (a in i)
    if (a in n)
      for (f = i[a].split(","), o = f.length; o--; )
        n[f[o]] = n[a];
  return n;
}, x0 = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", a, o;
  if (le(t))
    o = r[e] || (r[e] = []), t.forEach(function(f, l) {
      return o.push({
        t: l / (t.length - 1) * 100,
        v: f,
        e: n
      });
    });
  else
    for (a in t)
      o = r[a] || (r[a] = []), a === "ease" || o.push({
        t: parseFloat(e),
        v: t[a],
        e: n
      });
}, Yt = function(e, t, r, i, n) {
  return H(e) ? e.call(t, r, i, n) : re(e) && ~e.indexOf("random(") ? Xt(e) : e;
}, Hn = gi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Jn = {};
_e(Hn + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return Jn[s] = 1;
});
var K = /* @__PURE__ */ function(s) {
  pn(e, s);
  function e(r, i, n, a) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = s.call(this, a ? i : Bt(i)) || this;
    var f = o.vars, l = f.duration, u = f.delay, c = f.immediateRender, d = f.stagger, p = f.overwrite, m = f.keyframes, h = f.defaults, L = f.scrollTrigger, y = f.yoyoEase, C = i.parent || G, x = (le(r) || gn(r) ? $e(r[0]) : "length" in i) ? [r] : Te(r), b, v, M, w, T, E, R, k;
    if (o._targets = x.length ? Li(x) : Vt("GSAP target " + r + " not found. https://gsap.com", !xe.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = p, m || d || ar(l) || ar(u)) {
      if (i = o.vars, b = o.timeline = new he({
        data: "nested",
        defaults: h || {},
        targets: C && C.data === "nested" ? C.vars.targets : x
      }), b.kill(), b.parent = b._dp = ze(o), b._start = 0, d || ar(l) || ar(u)) {
        if (w = x.length, R = d && Zn(d), De(d))
          for (T in d)
            ~Hn.indexOf(T) && (k || (k = {}), k[T] = d[T]);
        for (v = 0; v < w; v++)
          M = mr(i, Jn), M.stagger = 0, y && (M.yoyoEase = y), k && ht(M, k), E = x[v], M.duration = +Yt(l, ze(o), v, E, x), M.delay = (+Yt(u, ze(o), v, E, x) || 0) - o._delay, !d && w === 1 && M.delay && (o._delay = u = M.delay, o._start += u, M.delay = 0), b.to(E, M, R ? R(v, E, x) : 0), b._ease = D.none;
        b.duration() ? l = u = 0 : o.timeline = 0;
      } else if (m) {
        Bt(Pe(b.vars.defaults, {
          ease: "none"
        })), b._ease = lt(m.ease || i.ease || "none");
        var N = 0, A, I, j;
        if (le(m))
          m.forEach(function(F) {
            return b.to(x, F, ">");
          }), b.duration();
        else {
          M = {};
          for (T in m)
            T === "ease" || T === "easeEach" || x0(T, m[T], M, m.easeEach);
          for (T in M)
            for (A = M[T].sort(function(F, $) {
              return F.t - $.t;
            }), N = 0, v = 0; v < A.length; v++)
              I = A[v], j = {
                ease: I.e,
                duration: (I.t - (v ? A[v - 1].t : 0)) / 100 * l
              }, j[T] = I.v, b.to(x, j, N), N += j.duration;
          b.duration() < l && b.to({}, {
            duration: l - b.duration()
          });
        }
      }
      l || o.duration(l = b.duration());
    } else
      o.timeline = 0;
    return p === !0 && !ci && (Xe = ze(o), G.killTweensOf(x), Xe = 0), Ae(C, ze(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (c || !l && !m && o._start === te(C._time) && de(c) && Q1(ze(o)) && C.data !== "nested") && (o._tTime = -V, o.render(Math.max(0, -u) || 0)), L && Rn(ze(o), L), o;
  }
  var t = e.prototype;
  return t.render = function(i, n, a) {
    var o = this._time, f = this._tDur, l = this._dur, u = i < 0, c = i > f - V && !u ? f : i < V ? 0 : i, d, p, m, h, L, y, C, x, b;
    if (!l)
      e0(this, i, n, a);
    else if (c !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (d = c, x = this.timeline, this._repeat) {
        if (h = l + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(h * 100 + i, n, a);
        if (d = te(c % h), c === f ? (m = this._repeat, d = l) : (m = ~~(c / h), m && m === te(c / h) && (d = l, m--), d > l && (d = l)), y = this._yoyo && m & 1, y && (b = this._yEase, d = l - d), L = Tt(this._tTime, h), d === o && !a && this._initted && m === L)
          return this._tTime = c, this;
        m !== L && (x && this._yEase && Xn(x, y), this.vars.repeatRefresh && !y && !this._lock && this._time !== h && this._initted && (this._lock = a = 1, this.render(te(h * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (kn(this, u ? i : d, a, n, c))
          return this._tTime = 0, this;
        if (o !== this._time && !(a && this.vars.repeatRefresh && m !== L))
          return this;
        if (l !== this._dur)
          return this.render(i, n, a);
      }
      if (this._tTime = c, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = C = (b || this._ease)(d / l), this._from && (this.ratio = C = 1 - C), d && !o && !n && !m && (Ce(this, "onStart"), this._tTime !== c))
        return this;
      for (p = this._pt; p; )
        p.r(C, p.d), p = p._next;
      x && x.render(i < 0 ? i : x._dur * x._ease(d / this._dur), n, a) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Gr(this, i, n, a), Ce(this, "onUpdate")), this._repeat && m !== L && this.vars.onRepeat && !n && this.parent && Ce(this, "onRepeat"), (c === this._tDur || !c) && this._tTime === c && (u && !this._onUpdate && Gr(this, i, !0, !0), (i || !l) && (c === this._tDur && this._ts > 0 || !c && this._ts < 0) && Je(this, 1), !n && !(u && !o) && (c || o || y) && (Ce(this, c === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < f && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, a, o, f) {
    qt || ye.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || Ci(this, l), u = this._ease(l / this._dur), y0(this, i, n, a, o, u, l, f) ? this.resetTo(i, n, a, o, 1) : (Tr(this, 0), this.parent || Pn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Dt(this) : this;
    if (this.timeline) {
      var a = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Xe && Xe.vars.overwrite !== !0)._first || Dt(this), this.parent && a !== this.timeline.totalDuration() && St(this, this._dur * this.timeline._tDur / a, 0, 1), this;
    }
    var o = this._targets, f = i ? Te(i) : o, l = this._ptLookup, u = this._pt, c, d, p, m, h, L, y;
    if ((!n || n === "all") && H1(o, f))
      return n === "all" && (this._pt = 0), Dt(this);
    for (c = this._op = this._op || [], n !== "all" && (re(n) && (h = {}, _e(n, function(C) {
      return h[C] = 1;
    }), n = h), n = C0(o, n)), y = o.length; y--; )
      if (~f.indexOf(o[y])) {
        d = l[y], n === "all" ? (c[y] = n, m = d, p = {}) : (p = c[y] = c[y] || {}, m = n);
        for (h in m)
          L = d && d[h], L && ((!("kill" in L.d) || L.d.kill(h) === !0) && Mr(this, L, "_pt"), delete d[h]), p !== "all" && (p[h] = 1);
      }
    return this._initted && !this._pt && u && Dt(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return It(1, arguments);
  }, e.delayedCall = function(i, n, a, o) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: a,
      onReverseCompleteParams: a,
      callbackScope: o
    });
  }, e.fromTo = function(i, n, a) {
    return It(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, a) {
    return G.killTweensOf(i, n, a);
  }, e;
}(Gt);
Pe(K.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_e("staggerTo,staggerFrom,staggerFromTo", function(s) {
  K[s] = function() {
    var e = new he(), t = Hr.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var xi = function(e, t, r) {
  return e[t] = r;
}, Qn = function(e, t, r) {
  return e[t](r);
}, v0 = function(e, t, r, i) {
  return e[t](i.fp, r);
}, E0 = function(e, t, r) {
  return e.setAttribute(t, r);
}, vi = function(e, t) {
  return H(e[t]) ? Qn : hi(e[t]) && e.setAttribute ? E0 : xi;
}, Kn = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, b0 = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, e1 = function(e, t) {
  var r = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, Ei = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, M0 = function(e, t, r, i) {
  for (var n = this._pt, a; n; )
    a = n._next, n.p === i && n.modifier(e, t, r), n = a;
}, w0 = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Mr(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, T0 = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, t1 = function(e) {
  for (var t = e._pt, r, i, n, a; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : a) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : a = t, t = r;
  }
  e._pt = n;
}, pe = /* @__PURE__ */ function() {
  function s(t, r, i, n, a, o, f, l, u) {
    this.t = r, this.s = n, this.c = a, this.p = i, this.r = o || Kn, this.d = f || this, this.set = l || xi, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = T0, this.m = r, this.mt = n, this.tween = i;
  }, s;
}();
_e(gi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return mi[s] = 1;
});
ve.TweenMax = ve.TweenLite = K;
ve.TimelineLite = ve.TimelineMax = he;
G = new he({
  sortChildren: !1,
  defaults: wt,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
xe.stringFilter = Vn;
var ft = [], cr = {}, S0 = [], qi = 0, P0 = 0, jr = function(e) {
  return (cr[e] || S0).map(function(t) {
    return t();
  });
}, ei = function() {
  var e = Date.now(), t = [];
  e - qi > 2 && (jr("matchMediaInit"), ft.forEach(function(r) {
    var i = r.queries, n = r.conditions, a, o, f, l;
    for (o in i)
      a = ke.matchMedia(i[o]).matches, a && (f = 1), a !== n[o] && (n[o] = a, l = 1);
    l && (r.revert(), f && t.push(r));
  }), jr("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), qi = e, jr("matchMedia"));
}, r1 = /* @__PURE__ */ function() {
  function s(t, r) {
    this.selector = r && Jr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = P0++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(r, i, n) {
    H(r) && (n = i, i = r, r = H);
    var a = this, o = function() {
      var l = U, u = a.selector, c;
      return l && l !== a && l.data.push(a), n && (a.selector = Jr(n)), U = a, c = i.apply(a, arguments), H(c) && a._r.push(c), U = l, a.selector = u, a.isReverted = !1, c;
    };
    return a.last = o, r === H ? o(a, function(f) {
      return a.add(null, f);
    }) : r ? a[r] = o : o;
  }, e.ignore = function(r) {
    var i = U;
    U = null, r(this), U = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? r.push.apply(r, i.getTweens()) : i instanceof K && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var o = n.getTweens(), f = n.data.length, l; f--; )
        l = n.data[f], l.data === "isFlip" && (l.revert(), l.getChildren(!0, !0, !1).forEach(function(u) {
          return o.splice(o.indexOf(u), 1);
        }));
      for (o.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, c) {
        return c.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), f = n.data.length; f--; )
        l = n.data[f], l instanceof he ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof K) && l.revert && l.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var a = ft.length; a--; )
        ft[a].id === this.id && ft.splice(a, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, s;
}(), O0 = /* @__PURE__ */ function() {
  function s(t) {
    this.contexts = [], this.scope = t, U && U.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(r, i, n) {
    De(r) || (r = {
      matches: r
    });
    var a = new r1(0, n || this.scope), o = a.conditions = {}, f, l, u;
    U && !a.selector && (a.selector = U.selector), this.contexts.push(a), i = a.add("onMatch", i), a.queries = r;
    for (l in r)
      l === "all" ? u = 1 : (f = ke.matchMedia(r[l]), f && (ft.indexOf(a) < 0 && ft.push(a), (o[l] = f.matches) && (u = 1), f.addListener ? f.addListener(ei) : f.addEventListener("change", ei)));
    return u && i(a, function(c) {
      return a.add(null, c);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, s;
}(), Lr = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return In(i);
    });
  },
  timeline: function(e) {
    return new he(e);
  },
  getTweensOf: function(e, t) {
    return G.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    re(e) && (e = Te(e)[0]);
    var n = st(e || {}).get, a = r ? Sn : Tn;
    return r === "native" && (r = ""), e && (t ? a((Le[t] && Le[t].get || n)(e, t, r, i)) : function(o, f, l) {
      return a((Le[o] && Le[o].get || n)(e, o, f, l));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Te(e), e.length > 1) {
      var i = e.map(function(u) {
        return ge.quickSetter(u, t, r);
      }), n = i.length;
      return function(u) {
        for (var c = n; c--; )
          i[c](u);
      };
    }
    e = e[0] || {};
    var a = Le[t], o = st(e), f = o.harness && (o.harness.aliases || {})[t] || t, l = a ? function(u) {
      var c = new a();
      yt._pt = 0, c.init(e, r ? u + r : u, yt, 0, [e]), c.render(1, c), yt._pt && Ei(1, yt);
    } : o.set(e, f);
    return a ? l : function(u) {
      return l(e, f, r ? u + r : u, o, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = ge.to(e, ht((i = {}, i[t] = "+=0.1", i.paused = !0, i), r || {})), a = function(f, l, u) {
      return n.resetTo(t, f, l, u);
    };
    return a.tween = n, a;
  },
  isTweening: function(e) {
    return G.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = lt(e.ease, wt.ease)), Yi(wt, e || {});
  },
  config: function(e) {
    return Yi(xe, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, a = e.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !Le[o] && !ve[o] && Vt(t + " effect requires " + o + " plugin.");
    }), Ar[t] = function(o, f, l) {
      return r(Te(o), Pe(f || {}, n), l);
    }, a && (he.prototype[t] = function(o, f, l) {
      return this.add(Ar[t](o, De(f) ? f : (l = f) && {}, this), l);
    });
  },
  registerEase: function(e, t) {
    D[e] = lt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? lt(e, t) : D;
  },
  getById: function(e) {
    return G.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new he(e), i, n;
    for (r.smoothChildTiming = de(e.smoothChildTiming), G.remove(r), r._dp = 0, r._time = r._tTime = G._time, i = G._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof K && i.vars.onComplete === i._targets[0])) && Ae(r, i, i._start - i._delay), i = n;
    return Ae(G, r, 0), r;
  },
  context: function(e, t) {
    return e ? new r1(e, t) : U;
  },
  matchMedia: function(e) {
    return new O0(e);
  },
  matchMediaRefresh: function() {
    return ft.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || ei();
  },
  addEventListener: function(e, t) {
    var r = cr[e] || (cr[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = cr[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: l0,
    wrapYoyo: f0,
    distribute: Zn,
    random: jn,
    snap: Dn,
    normalize: o0,
    getUnit: se,
    clamp: i0,
    splitColor: Yn,
    toArray: Te,
    selector: Jr,
    mapRange: zn,
    pipe: a0,
    unitize: s0,
    interpolate: u0,
    shuffle: Nn
  },
  install: vn,
  effects: Ar,
  ticker: ye,
  updateRoot: he.updateRoot,
  plugins: Le,
  globalTimeline: G,
  core: {
    PropTween: pe,
    globals: En,
    Tween: K,
    Timeline: he,
    Animation: Gt,
    getCache: st,
    _removeLinkedListItem: Mr,
    reverting: function() {
      return oe;
    },
    context: function(e) {
      return e && U && (U.data.push(e), e._ctx = U), U;
    },
    suppressOverwrites: function(e) {
      return ci = e;
    }
  }
};
_e("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Lr[s] = K[s];
});
ye.add(he.updateRoot);
yt = Lr.to({}, {
  duration: 0
});
var R0 = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, k0 = function(e, t) {
  var r = e._targets, i, n, a;
  for (i in t)
    for (n = r.length; n--; )
      a = e._ptLookup[n][i], a && (a = a.d) && (a._pt && (a = R0(a, i)), a && a.modifier && a.modifier(t[i], e, r[n], i));
}, Fr = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, a) {
      a._onInit = function(o) {
        var f, l;
        if (re(n) && (f = {}, _e(n, function(u) {
          return f[u] = 1;
        }), n = f), t) {
          f = {};
          for (l in n)
            f[l] = t(n[l]);
          n = f;
        }
        k0(o, n);
      };
    }
  };
}, ge = Lr.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var a, o, f;
    this.tween = r;
    for (a in t)
      f = e.getAttribute(a) || "", o = this.add(e, "setAttribute", (f || 0) + "", t[a], i, n, 0, 0, a), o.op = a, o.b = f, this._props.push(a);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      oe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, Fr("roundProps", Qr), Fr("modifiers"), Fr("snap", Dn)) || Lr;
K.version = he.version = ge.version = "3.12.5";
xn = 1;
di() && Pt();
D.Power0;
D.Power1;
D.Power2;
D.Power3;
D.Power4;
D.Linear;
D.Quad;
D.Cubic;
D.Quart;
D.Quint;
D.Strong;
D.Elastic;
D.Back;
D.SteppedEase;
D.Bounce;
D.Sine;
D.Expo;
D.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Gi, qe, vt, bi, at, Wi, Mi, A0 = function() {
  return typeof window < "u";
}, Ve = {}, it = 180 / Math.PI, Et = Math.PI / 180, mt = Math.atan2, Hi = 1e8, wi = /([A-Z])/g, N0 = /(left|right|width|margin|padding|x)/i, Z0 = /[\s,\(]\S/, Ne = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, ti = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, D0 = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, j0 = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, F0 = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, i1 = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, n1 = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, z0 = function(e, t, r) {
  return e.style[t] = r;
}, B0 = function(e, t, r) {
  return e.style.setProperty(t, r);
}, I0 = function(e, t, r) {
  return e._gsap[t] = r;
}, Y0 = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, $0 = function(e, t, r, i, n) {
  var a = e._gsap;
  a.scaleX = a.scaleY = r, a.renderTransform(n, a);
}, V0 = function(e, t, r, i, n) {
  var a = e._gsap;
  a[t] = r, a.renderTransform(n, a);
}, W = "transform", me = W + "Origin", U0 = function s(e, t) {
  var r = this, i = this.target, n = i.style, a = i._gsap;
  if (e in Ve && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ne[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(o) {
        return r.tfm[o] = Be(i, o);
      }) : this.tfm[e] = a.x ? a[e] : Be(i, e), e === me && (this.tfm.zOrigin = a.zOrigin);
    else
      return Ne.transform.split(",").forEach(function(o) {
        return s.call(r, o, t);
      });
    if (this.props.indexOf(W) >= 0)
      return;
    a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(me, t, "")), e = W;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, a1 = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, X0 = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, n, a;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(wi, "-$1").toLowerCase());
  if (this.tfm) {
    for (a in this.tfm)
      i[a] = this.tfm[a];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Mi(), (!n || !n.isStart) && !r[W] && (a1(r), i.zOrigin && r[me] && (r[me] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, s1 = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: X0,
    save: U0
  };
  return e._gsap || ge.core.getCache(e), t && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, o1, ri = function(e, t) {
  var r = qe.createElementNS ? qe.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : qe.createElement(e);
  return r && r.style ? r : qe.createElement(e);
}, Ze = function s(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(wi, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && s(e, Ot(t) || t, 1) || "";
}, Ji = "O,Moz,ms,Ms,Webkit".split(","), Ot = function(e, t, r) {
  var i = t || at, n = i.style, a = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); a-- && !(Ji[a] + e in n); )
    ;
  return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Ji[a] : "") + e;
}, ii = function() {
  A0() && window.document && (Gi = window, qe = Gi.document, vt = qe.documentElement, at = ri("div") || {
    style: {}
  }, ri("div"), W = Ot(W), me = W + "Origin", at.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", o1 = !!Ot("perspective"), Mi = ge.core.reverting, bi = 1);
}, zr = function s(e) {
  var t = ri("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, a;
  if (vt.appendChild(t), t.appendChild(this), this.style.display = "block", e)
    try {
      a = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = s;
    } catch {
    }
  else this._gsapBBox && (a = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), vt.removeChild(t), this.style.cssText = n, a;
}, Qi = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, l1 = function(e) {
  var t;
  try {
    t = e.getBBox();
  } catch {
    t = zr.call(e, !0);
  }
  return t && (t.width || t.height) || e.getBBox === zr || (t = zr.call(e, !0)), t && !t.width && !t.x && !t.y ? {
    x: +Qi(e, ["x", "cx", "x1"]) || 0,
    y: +Qi(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, f1 = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && l1(e));
}, dt = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in Ve && t !== me && (t = W), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(wi, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Ge = function(e, t, r, i, n, a) {
  var o = new pe(e._pt, t, r, 0, 1, a ? n1 : i1);
  return e._pt = o, o.b = i, o.e = n, e._props.push(r), o;
}, Ki = {
  deg: 1,
  rad: 1,
  turn: 1
}, q0 = {
  grid: 1,
  flex: 1
}, Qe = function s(e, t, r, i) {
  var n = parseFloat(r) || 0, a = (r + "").trim().substr((n + "").length) || "px", o = at.style, f = N0.test(t), l = e.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (f ? "Width" : "Height"), c = 100, d = i === "px", p = i === "%", m, h, L, y;
  if (i === a || !n || Ki[i] || Ki[a])
    return n;
  if (a !== "px" && !d && (n = s(e, t, r, "px")), y = e.getCTM && f1(e), (p || a === "%") && (Ve[t] || ~t.indexOf("adius")))
    return m = y ? e.getBBox()[f ? "width" : "height"] : e[u], J(p ? n / m * c : n / 100 * m);
  if (o[f ? "width" : "height"] = c + (d ? a : i), h = ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, y && (h = (e.ownerSVGElement || {}).parentNode), (!h || h === qe || !h.appendChild) && (h = qe.body), L = h._gsap, L && p && L.width && f && L.time === ye.time && !L.uncache)
    return J(n / L.width * c);
  if (p && (t === "height" || t === "width")) {
    var C = e.style[t];
    e.style[t] = c + i, m = e[u], C ? e.style[t] = C : dt(e, t);
  } else
    (p || a === "%") && !q0[Ze(h, "display")] && (o.position = Ze(e, "position")), h === e && (o.position = "static"), h.appendChild(at), m = at[u], h.removeChild(at), o.position = "absolute";
  return f && p && (L = st(h), L.time = ye.time, L.width = h[u]), J(d ? m * n / c : m && n ? c / m * n : 0);
}, Be = function(e, t, r, i) {
  var n;
  return bi || ii(), t in Ne && t !== "transform" && (t = Ne[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ve[t] && t !== "transform" ? (n = Ht(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Cr(Ze(e, me)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = yr[t] && yr[t](e, t, r) || Ze(e, t) || Mn(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Qe(e, t, n, r) + r : n;
}, G0 = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = Ot(t, e, 1), a = n && Ze(e, n, 1);
    a && a !== r ? (t = n, r = a) : t === "borderColor" && (r = Ze(e, "borderTopColor"));
  }
  var o = new pe(this._pt, e.style, t, 0, 1, e1), f = 0, l = 0, u, c, d, p, m, h, L, y, C, x, b, v;
  if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (h = e.style[t], e.style[t] = i, i = Ze(e, t) || i, h ? e.style[t] = h : dt(e, t)), u = [r, i], Vn(u), r = u[0], i = u[1], d = r.match(Lt) || [], v = i.match(Lt) || [], v.length) {
    for (; c = Lt.exec(i); )
      L = c[0], C = i.substring(f, c.index), m ? m = (m + 1) % 5 : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (m = 1), L !== (h = d[l++] || "") && (p = parseFloat(h) || 0, b = h.substr((p + "").length), L.charAt(1) === "=" && (L = xt(p, L) + b), y = parseFloat(L), x = L.substr((y + "").length), f = Lt.lastIndex - x.length, x || (x = x || xe.units[t] || b, f === i.length && (i += x, o.e += x)), b !== x && (p = Qe(e, t, h, x) || 0), o._pt = {
        _next: o._pt,
        p: C || l === 1 ? C : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: y - p,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    o.c = f < i.length ? i.substring(f, i.length) : "";
  } else
    o.r = t === "display" && i === "none" ? n1 : i1;
  return yn.test(i) && (o.e = 0), this._pt = o, o;
}, en = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, W0 = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = en[r] || r, t[1] = en[i] || i, t.join(" ");
}, H0 = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, a = r._gsap, o, f, l;
    if (n === "all" || n === !0)
      i.cssText = "", f = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], Ve[o] && (f = 1, o = o === "transformOrigin" ? me : W), dt(r, o);
    f && (dt(r, W), a && (a.svg && r.removeAttribute("transform"), Ht(r, 1), a.uncache = 1, a1(i)));
  }
}, yr = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var a = e._pt = new pe(e._pt, t, r, 0, 0, H0);
      return a.u = i, a.pr = -10, a.tween = n, e._props.push(r), 1;
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
}, Wt = [1, 0, 0, 1, 0, 0], u1 = {}, c1 = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, tn = function(e) {
  var t = Ze(e, W);
  return c1(t) ? Wt : t.substr(7).match(Ln).map(J);
}, Ti = function(e, t) {
  var r = e._gsap || st(e), i = e.style, n = tn(e), a, o, f, l;
  return r.svg && e.getAttribute("transform") ? (f = e.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? Wt : n) : (n === Wt && !e.offsetParent && e !== vt && !r.svg && (f = i.display, i.display = "block", a = e.parentNode, (!a || !e.offsetParent) && (l = 1, o = e.nextElementSibling, vt.appendChild(e)), n = tn(e), f ? i.display = f : dt(e, "display"), l && (o ? a.insertBefore(e, o) : a ? a.appendChild(e) : vt.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ni = function(e, t, r, i, n, a) {
  var o = e._gsap, f = n || Ti(e, !0), l = o.xOrigin || 0, u = o.yOrigin || 0, c = o.xOffset || 0, d = o.yOffset || 0, p = f[0], m = f[1], h = f[2], L = f[3], y = f[4], C = f[5], x = t.split(" "), b = parseFloat(x[0]) || 0, v = parseFloat(x[1]) || 0, M, w, T, E;
  r ? f !== Wt && (w = p * L - m * h) && (T = b * (L / w) + v * (-h / w) + (h * C - L * y) / w, E = b * (-m / w) + v * (p / w) - (p * C - m * y) / w, b = T, v = E) : (M = l1(e), b = M.x + (~x[0].indexOf("%") ? b / 100 * M.width : b), v = M.y + (~(x[1] || x[0]).indexOf("%") ? v / 100 * M.height : v)), i || i !== !1 && o.smooth ? (y = b - l, C = v - u, o.xOffset = c + (y * p + C * h) - y, o.yOffset = d + (y * m + C * L) - C) : o.xOffset = o.yOffset = 0, o.xOrigin = b, o.yOrigin = v, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[me] = "0px 0px", a && (Ge(a, o, "xOrigin", l, b), Ge(a, o, "yOrigin", u, v), Ge(a, o, "xOffset", c, o.xOffset), Ge(a, o, "yOffset", d, o.yOffset)), e.setAttribute("data-svg-origin", b + " " + v);
}, Ht = function(e, t) {
  var r = e._gsap || new Gn(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, a = "px", o = "deg", f = getComputedStyle(e), l = Ze(e, me) || "0", u, c, d, p, m, h, L, y, C, x, b, v, M, w, T, E, R, k, N, A, I, j, F, $, ee, fe, Oe, X, Ee, ie, Q, ue;
  return u = c = d = h = L = y = C = x = b = 0, p = m = 1, r.svg = !!(e.getCTM && f1(e)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (i[W] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[W] !== "none" ? f[W] : "")), i.scale = i.rotate = i.translate = "none"), w = Ti(e, r.svg), r.svg && (r.uncache ? (ee = e.getBBox(), l = r.xOrigin - ee.x + "px " + (r.yOrigin - ee.y) + "px", $ = "") : $ = !t && e.getAttribute("data-svg-origin"), ni(e, $ || l, !!$ || r.originIsAbsolute, r.smooth !== !1, w)), v = r.xOrigin || 0, M = r.yOrigin || 0, w !== Wt && (k = w[0], N = w[1], A = w[2], I = w[3], u = j = w[4], c = F = w[5], w.length === 6 ? (p = Math.sqrt(k * k + N * N), m = Math.sqrt(I * I + A * A), h = k || N ? mt(N, k) * it : 0, C = A || I ? mt(A, I) * it + h : 0, C && (m *= Math.abs(Math.cos(C * Et))), r.svg && (u -= v - (v * k + M * A), c -= M - (v * N + M * I))) : (ue = w[6], ie = w[7], Oe = w[8], X = w[9], Ee = w[10], Q = w[11], u = w[12], c = w[13], d = w[14], T = mt(ue, Ee), L = T * it, T && (E = Math.cos(-T), R = Math.sin(-T), $ = j * E + Oe * R, ee = F * E + X * R, fe = ue * E + Ee * R, Oe = j * -R + Oe * E, X = F * -R + X * E, Ee = ue * -R + Ee * E, Q = ie * -R + Q * E, j = $, F = ee, ue = fe), T = mt(-A, Ee), y = T * it, T && (E = Math.cos(-T), R = Math.sin(-T), $ = k * E - Oe * R, ee = N * E - X * R, fe = A * E - Ee * R, Q = I * R + Q * E, k = $, N = ee, A = fe), T = mt(N, k), h = T * it, T && (E = Math.cos(T), R = Math.sin(T), $ = k * E + N * R, ee = j * E + F * R, N = N * E - k * R, F = F * E - j * R, k = $, j = ee), L && Math.abs(L) + Math.abs(h) > 359.9 && (L = h = 0, y = 180 - y), p = J(Math.sqrt(k * k + N * N + A * A)), m = J(Math.sqrt(F * F + ue * ue)), T = mt(j, F), C = Math.abs(T) > 2e-4 ? T * it : 0, b = Q ? 1 / (Q < 0 ? -Q : Q) : 0), r.svg && ($ = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !c1(Ze(e, W)), $ && e.setAttribute("transform", $))), Math.abs(C) > 90 && Math.abs(C) < 270 && (n ? (p *= -1, C += h <= 0 ? 180 : -180, h += h <= 0 ? 180 : -180) : (m *= -1, C += C <= 0 ? 180 : -180)), t = t || r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + a, r.y = c - ((r.yPercent = c && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + a, r.z = d + a, r.scaleX = J(p), r.scaleY = J(m), r.rotation = J(h) + o, r.rotationX = J(L) + o, r.rotationY = J(y) + o, r.skewX = C + o, r.skewY = x + o, r.transformPerspective = b + a, (r.zOrigin = parseFloat(l.split(" ")[2]) || !t && r.zOrigin || 0) && (i[me] = Cr(l)), r.xOffset = r.yOffset = 0, r.force3D = xe.force3D, r.renderTransform = r.svg ? Q0 : o1 ? h1 : J0, r.uncache = 0, r;
}, Cr = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, Br = function(e, t, r) {
  var i = se(t);
  return J(parseFloat(t) + parseFloat(Qe(e, "x", r + "px", i))) + i;
}, J0 = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, h1(e, t);
}, tt = "0deg", Nt = "0px", rt = ") ", h1 = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, a = r.x, o = r.y, f = r.z, l = r.rotation, u = r.rotationY, c = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, h = r.scaleY, L = r.transformPerspective, y = r.force3D, C = r.target, x = r.zOrigin, b = "", v = y === "auto" && e && e !== 1 || y === !0;
  if (x && (c !== tt || u !== tt)) {
    var M = parseFloat(u) * Et, w = Math.sin(M), T = Math.cos(M), E;
    M = parseFloat(c) * Et, E = Math.cos(M), a = Br(C, a, w * E * -x), o = Br(C, o, -Math.sin(M) * -x), f = Br(C, f, T * E * -x + x);
  }
  L !== Nt && (b += "perspective(" + L + rt), (i || n) && (b += "translate(" + i + "%, " + n + "%) "), (v || a !== Nt || o !== Nt || f !== Nt) && (b += f !== Nt || v ? "translate3d(" + a + ", " + o + ", " + f + ") " : "translate(" + a + ", " + o + rt), l !== tt && (b += "rotate(" + l + rt), u !== tt && (b += "rotateY(" + u + rt), c !== tt && (b += "rotateX(" + c + rt), (d !== tt || p !== tt) && (b += "skew(" + d + ", " + p + rt), (m !== 1 || h !== 1) && (b += "scale(" + m + ", " + h + rt), C.style[W] = b || "translate(0, 0)";
}, Q0 = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, a = r.x, o = r.y, f = r.rotation, l = r.skewX, u = r.skewY, c = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, h = r.yOrigin, L = r.xOffset, y = r.yOffset, C = r.forceCSS, x = parseFloat(a), b = parseFloat(o), v, M, w, T, E;
  f = parseFloat(f), l = parseFloat(l), u = parseFloat(u), u && (u = parseFloat(u), l += u, f += u), f || l ? (f *= Et, l *= Et, v = Math.cos(f) * c, M = Math.sin(f) * c, w = Math.sin(f - l) * -d, T = Math.cos(f - l) * d, l && (u *= Et, E = Math.tan(l - u), E = Math.sqrt(1 + E * E), w *= E, T *= E, u && (E = Math.tan(u), E = Math.sqrt(1 + E * E), v *= E, M *= E)), v = J(v), M = J(M), w = J(w), T = J(T)) : (v = c, T = d, M = w = 0), (x && !~(a + "").indexOf("px") || b && !~(o + "").indexOf("px")) && (x = Qe(p, "x", a, "px"), b = Qe(p, "y", o, "px")), (m || h || L || y) && (x = J(x + m - (m * v + h * w) + L), b = J(b + h - (m * M + h * T) + y)), (i || n) && (E = p.getBBox(), x = J(x + i / 100 * E.width), b = J(b + n / 100 * E.height)), E = "matrix(" + v + "," + M + "," + w + "," + T + "," + x + "," + b + ")", p.setAttribute("transform", E), C && (p.style[W] = E);
}, K0 = function(e, t, r, i, n) {
  var a = 360, o = re(n), f = parseFloat(n) * (o && ~n.indexOf("rad") ? it : 1), l = f - i, u = i + l + "deg", c, d;
  return o && (c = n.split("_")[1], c === "short" && (l %= a, l !== l % (a / 2) && (l += l < 0 ? a : -a)), c === "cw" && l < 0 ? l = (l + a * Hi) % a - ~~(l / a) * a : c === "ccw" && l > 0 && (l = (l - a * Hi) % a - ~~(l / a) * a)), e._pt = d = new pe(e._pt, t, r, i, l, D0), d.e = u, d.u = "deg", e._props.push(r), d;
}, rn = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, e2 = function(e, t, r) {
  var i = rn({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = r.style, o, f, l, u, c, d, p, m;
  i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), a[W] = t, o = Ht(r, 1), dt(r, W), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[W], a[W] = t, o = Ht(r, 1), a[W] = l);
  for (f in Ve)
    l = i[f], u = o[f], l !== u && n.indexOf(f) < 0 && (p = se(l), m = se(u), c = p !== m ? Qe(r, f, l, m) : parseFloat(l), d = parseFloat(u), e._pt = new pe(e._pt, o, f, c, d - c, ti), e._pt.u = m || 0, e._props.push(f));
  rn(o, i);
};
_e("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", a = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
    return e < 2 ? s + o : "border" + o + s;
  });
  yr[e > 1 ? "border" + s : s] = function(o, f, l, u, c) {
    var d, p;
    if (arguments.length < 4)
      return d = a.map(function(m) {
        return Be(o, m, l);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (u + "").split(" "), p = {}, a.forEach(function(m, h) {
      return p[m] = d[h] = d[h] || d[(h - 1) / 2 | 0];
    }), o.init(f, p, c);
  };
});
var d1 = {
  name: "css",
  register: ii,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var a = this._props, o = e.style, f = r.vars.startAt, l, u, c, d, p, m, h, L, y, C, x, b, v, M, w, T;
    bi || ii(), this.styles = this.styles || s1(e), T = this.styles.props, this.tween = r;
    for (h in t)
      if (h !== "autoRound" && (u = t[h], !(Le[h] && Wn(h, t, r, i, e, n)))) {
        if (p = typeof u, m = yr[h], p === "function" && (u = u.call(r, i, e, n), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = Xt(u)), m)
          m(this, e, h, u, r) && (w = 1);
        else if (h.substr(0, 2) === "--")
          l = (getComputedStyle(e).getPropertyValue(h) + "").trim(), u += "", He.lastIndex = 0, He.test(l) || (L = se(l), y = se(u)), y ? L !== y && (l = Qe(e, h, l, y) + y) : L && (u += L), this.add(o, "setProperty", l, u, i, n, 0, 0, h), a.push(h), T.push(h, 0, o[h]);
        else if (p !== "undefined") {
          if (f && h in f ? (l = typeof f[h] == "function" ? f[h].call(r, i, e, n) : f[h], re(l) && ~l.indexOf("random(") && (l = Xt(l)), se(l + "") || l === "auto" || (l += xe.units[h] || se(Be(e, h)) || ""), (l + "").charAt(1) === "=" && (l = Be(e, h))) : l = Be(e, h), d = parseFloat(l), C = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), C && (u = u.substr(2)), c = parseFloat(u), h in Ne && (h === "autoAlpha" && (d === 1 && Be(e, "visibility") === "hidden" && c && (d = 0), T.push("visibility", 0, o.visibility), Ge(this, o, "visibility", d ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)), h !== "scale" && h !== "transform" && (h = Ne[h], ~h.indexOf(",") && (h = h.split(",")[0]))), x = h in Ve, x) {
            if (this.styles.save(h), b || (v = e._gsap, v.renderTransform && !t.parseTransform || Ht(e, t.parseTransform), M = t.smoothOrigin !== !1 && v.smooth, b = this._pt = new pe(this._pt, o, W, 0, 1, v.renderTransform, v, 0, -1), b.dep = 1), h === "scale")
              this._pt = new pe(this._pt, v, "scaleY", v.scaleY, (C ? xt(v.scaleY, C + c) : c) - v.scaleY || 0, ti), this._pt.u = 0, a.push("scaleY", h), h += "X";
            else if (h === "transformOrigin") {
              T.push(me, 0, o[me]), u = W0(u), v.svg ? ni(e, u, 0, M, 0, this) : (y = parseFloat(u.split(" ")[2]) || 0, y !== v.zOrigin && Ge(this, v, "zOrigin", v.zOrigin, y), Ge(this, o, h, Cr(l), Cr(u)));
              continue;
            } else if (h === "svgOrigin") {
              ni(e, u, 1, M, 0, this);
              continue;
            } else if (h in u1) {
              K0(this, v, h, d, C ? xt(d, C + u) : u);
              continue;
            } else if (h === "smoothOrigin") {
              Ge(this, v, "smooth", v.smooth, u);
              continue;
            } else if (h === "force3D") {
              v[h] = u;
              continue;
            } else if (h === "transform") {
              e2(this, u, e);
              continue;
            }
          } else h in o || (h = Ot(h) || h);
          if (x || (c || c === 0) && (d || d === 0) && !Z0.test(u) && h in o)
            L = (l + "").substr((d + "").length), c || (c = 0), y = se(u) || (h in xe.units ? xe.units[h] : L), L !== y && (d = Qe(e, h, l, y)), this._pt = new pe(this._pt, x ? v : o, h, d, (C ? xt(d, C + c) : c) - d, !x && (y === "px" || h === "zIndex") && t.autoRound !== !1 ? F0 : ti), this._pt.u = y || 0, L !== y && y !== "%" && (this._pt.b = l, this._pt.r = j0);
          else if (h in o)
            G0.call(this, e, h, l, C ? C + u : u);
          else if (h in e)
            this.add(e, h, l || e[h], C ? C + u : u, i, n);
          else if (h !== "parseTransform") {
            pi(h, u);
            continue;
          }
          x || (h in o ? T.push(h, 0, o[h]) : T.push(h, 1, l || e[h])), a.push(h);
        }
      }
    w && t1(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Mi())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: Be,
  aliases: Ne,
  getSetter: function(e, t, r) {
    var i = Ne[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Ve && t !== me && (e._gsap.x || Be(e, "x")) ? r && Wi === r ? t === "scale" ? Y0 : I0 : (Wi = r || {}) && (t === "scale" ? $0 : V0) : e.style && !hi(e.style[t]) ? z0 : ~t.indexOf("-") ? B0 : vi(e, t);
  },
  core: {
    _removeProperty: dt,
    _getMatrix: Ti
  }
};
ge.utils.checkPrefix = Ot;
ge.core.getStyleSaver = s1;
(function(s, e, t, r) {
  var i = _e(s + "," + e + "," + t, function(n) {
    Ve[n] = 1;
  });
  _e(e, function(n) {
    xe.units[n] = "deg", u1[n] = 1;
  }), Ne[i[13]] = s + "," + e, _e(r, function(n) {
    var a = n.split(":");
    Ne[a[1]] = i[a[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_e("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  xe.units[s] = "px";
});
ge.registerPlugin(d1);
var bt = ge.registerPlugin(d1) || ge;
bt.core.Tween;
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var t2 = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, r2 = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, i2 = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, n2 = /(^[#\.][a-z]|[a-y][a-z])/i, a2 = Math.PI / 180, s2 = 180 / Math.PI, sr = Math.sin, or = Math.cos, Se = Math.abs, Ie = Math.sqrt, o2 = Math.atan2, ai = 1e8, nn = function(e) {
  return typeof e == "string";
}, _1 = function(e) {
  return typeof e == "number";
}, l2 = function(e) {
  return typeof e > "u";
}, f2 = {}, u2 = {}, xr = 1e5, p1 = function(e) {
  return Math.round((e + ai) % 1 * xr) / xr || (e < 0 ? 0 : 1);
}, B = function(e) {
  return Math.round(e * xr) / xr || 0;
}, an = function(e) {
  return Math.round(e * 1e10) / 1e10 || 0;
}, sn = function(e, t, r, i) {
  var n = e[t], a = i === 1 ? 6 : si(n, r, i);
  if ((a || !i) && a + r + 2 < n.length)
    return e.splice(t, 0, n.slice(0, r + a + 2)), n.splice(0, r + a), 1;
}, m1 = function(e, t, r) {
  var i = e.length, n = ~~(r * i);
  if (e[n] > t) {
    for (; --n && e[n] > t; )
      ;
    n < 0 && (n = 0);
  } else
    for (; e[++n] < t && n < i; )
      ;
  return n < i ? n : i - 1;
}, c2 = function(e, t) {
  var r = e.length;
  for (e.reverse(); r--; )
    e[r].reversed || _2(e[r]);
}, on = function(e, t) {
  return t.totalLength = e.totalLength, e.samples ? (t.samples = e.samples.slice(0), t.lookup = e.lookup.slice(0), t.minLength = e.minLength, t.resolution = e.resolution) : e.totalPoints && (t.totalPoints = e.totalPoints), t;
}, h2 = function(e, t) {
  var r = e.length, i = e[r - 1] || [], n = i.length;
  r && t[0] === i[n - 2] && t[1] === i[n - 1] && (t = i.concat(t.slice(2)), r--), e[r] = t;
};
function hr(s) {
  s = nn(s) && n2.test(s) && document.querySelector(s) || s;
  var e = s.getAttribute ? s : 0, t;
  return e && (s = s.getAttribute("d")) ? (e._gsPath || (e._gsPath = {}), t = e._gsPath[s], t && !t._dirty ? t : e._gsPath[s] = vr(s)) : s ? nn(s) ? vr(s) : _1(s[0]) ? [s] : s : console.warn("Expecting a <path> element or an SVG path data string");
}
function d2(s) {
  for (var e = [], t = 0; t < s.length; t++)
    e[t] = on(s[t], s[t].slice(0));
  return on(s, e);
}
function _2(s) {
  var e = 0, t;
  for (s.reverse(); e < s.length; e += 2)
    t = s[e], s[e] = s[e + 1], s[e + 1] = t;
  s.reversed = !s.reversed;
}
var p2 = function(e, t) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(e.attributes), n = i.length, a;
  for (t = "," + t + ","; --n > -1; )
    a = i[n].nodeName.toLowerCase(), t.indexOf("," + a + ",") < 0 && r.setAttributeNS(null, a, i[n].nodeValue);
  return r;
}, m2 = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, g2 = function(e, t) {
  for (var r = t ? t.split(",") : [], i = {}, n = r.length; --n > -1; )
    i[r[n]] = +e.getAttribute(r[n]) || 0;
  return i;
};
function L2(s, e) {
  var t = s.tagName.toLowerCase(), r = 0.552284749831, i, n, a, o, f, l, u, c, d, p, m, h, L, y, C, x, b, v, M, w, T, E;
  return t === "path" || !s.getBBox ? s : (l = p2(s, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), E = g2(s, m2[t]), t === "rect" ? (o = E.rx, f = E.ry || o, n = E.x, a = E.y, p = E.width - o * 2, m = E.height - f * 2, o || f ? (h = n + o * (1 - r), L = n + o, y = L + p, C = y + o * r, x = y + o, b = a + f * (1 - r), v = a + f, M = v + m, w = M + f * r, T = M + f, i = "M" + x + "," + v + " V" + M + " C" + [x, w, C, T, y, T, y - (y - L) / 3, T, L + (y - L) / 3, T, L, T, h, T, n, w, n, M, n, M - (M - v) / 3, n, v + (M - v) / 3, n, v, n, b, h, a, L, a, L + (y - L) / 3, a, y - (y - L) / 3, a, y, a, C, a, x, b, x, v].join(",") + "z") : i = "M" + (n + p) + "," + a + " v" + m + " h" + -p + " v" + -m + " h" + p + "z") : t === "circle" || t === "ellipse" ? (t === "circle" ? (o = f = E.r, c = o * r) : (o = E.rx, f = E.ry, c = f * r), n = E.cx, a = E.cy, u = o * r, i = "M" + (n + o) + "," + a + " C" + [n + o, a + c, n + u, a + f, n, a + f, n - u, a + f, n - o, a + c, n - o, a, n - o, a - c, n - u, a - f, n, a - f, n + u, a - f, n + o, a - c, n + o, a].join(",") + "z") : t === "line" ? i = "M" + E.x1 + "," + E.y1 + " L" + E.x2 + "," + E.y2 : (t === "polyline" || t === "polygon") && (d = (s.getAttribute("points") + "").match(r2) || [], n = d.shift(), a = d.shift(), i = "M" + n + "," + a + " L" + d.join(","), t === "polygon" && (i += "," + n + "," + a + "z")), l.setAttribute("d", y1(l._gsRawPath = vr(i))), e && s.parentNode && (s.parentNode.insertBefore(l, s), s.parentNode.removeChild(s)), l);
}
function g1(s, e, t) {
  var r = s[e], i = s[e + 2], n = s[e + 4], a;
  return r += (i - r) * t, i += (n - i) * t, r += (i - r) * t, a = i + (n + (s[e + 6] - n) * t - i) * t - r, r = s[e + 1], i = s[e + 3], n = s[e + 5], r += (i - r) * t, i += (n - i) * t, r += (i - r) * t, B(o2(i + (n + (s[e + 7] - n) * t - i) * t - r, a) * s2);
}
function L1(s, e, t) {
  t = l2(t) ? 1 : an(t) || 0, e = an(e) || 0;
  var r = Math.max(0, ~~(Se(t - e) - 1e-8)), i = d2(s);
  if (e > t && (e = 1 - e, t = 1 - t, c2(i), i.totalLength = 0), e < 0 || t < 0) {
    var n = Math.abs(~~Math.min(e, t)) + 1;
    e += n, t += n;
  }
  i.totalLength || ut(i);
  var a = t > 1, o = ln(i, e, f2, !0), f = ln(i, t, u2), l = f.segment, u = o.segment, c = f.segIndex, d = o.segIndex, p = f.i, m = o.i, h = d === c, L = p === m && h, y, C, x, b, v, M, w, T;
  if (a || r) {
    for (y = c < d || h && p < m || L && f.t < o.t, sn(i, d, m, o.t) && (d++, y || (c++, L ? (f.t = (f.t - o.t) / (1 - o.t), p = 0) : h && (p -= m))), Math.abs(1 - (t - e)) < 1e-5 ? c = d - 1 : !f.t && c ? c-- : sn(i, c, p, f.t) && y && d++, o.t === 1 && (d = (d + 1) % i.length), v = [], M = i.length, w = 1 + M * r, T = d, w += (M - d + c) % M, b = 0; b < w; b++)
      h2(v, i[T++ % M]);
    i = v;
  } else if (x = f.t === 1 ? 6 : si(l, p, f.t), e !== t)
    for (C = si(u, m, L ? o.t / f.t : o.t), h && (x += C), l.splice(p + x + 2), (C || m) && u.splice(0, m + C), b = i.length; b--; )
      (b < d || b > c) && i.splice(b, 1);
  else
    l.angle = g1(l, p + x, 0), p += x, o = l[p], f = l[p + 1], l.length = l.totalLength = 0, l.totalPoints = i.totalPoints = 8, l.push(o, f, o, f, o, f, o, f);
  return i.totalLength = 0, i;
}
function y2(s, e, t) {
  e = e || 0, s.samples || (s.samples = [], s.lookup = []);
  var r = ~~s.resolution || 12, i = 1 / r, n = s.length, a = s[e], o = s[e + 1], f = e ? e / 6 * r : 0, l = s.samples, u = s.lookup, c = (e ? s.minLength : ai) || ai, d = l[f + t * r - 1], p = e ? l[f - 1] : 0, m, h, L, y, C, x, b, v, M, w, T, E, R, k, N, A, I;
  for (l.length = u.length = 0, h = e + 2; h < n; h += 6) {
    if (L = s[h + 4] - a, y = s[h + 2] - a, C = s[h] - a, v = s[h + 5] - o, M = s[h + 3] - o, w = s[h + 1] - o, x = b = T = E = 0, Se(L) < 0.01 && Se(v) < 0.01 && Se(C) + Se(w) < 0.01)
      s.length > 8 && (s.splice(h, 6), h -= 6, n -= 6);
    else
      for (m = 1; m <= r; m++)
        k = i * m, R = 1 - k, x = b - (b = (k * k * L + 3 * R * (k * y + R * C)) * k), T = E - (E = (k * k * v + 3 * R * (k * M + R * w)) * k), A = Ie(T * T + x * x), A < c && (c = A), p += A, l[f++] = p;
    a += L, o += v;
  }
  if (d)
    for (d -= p; f < l.length; f++)
      l[f] += d;
  if (l.length && c) {
    if (s.totalLength = I = l[l.length - 1] || 0, s.minLength = c, I / c < 9999)
      for (A = N = 0, m = 0; m < I; m += c)
        u[A++] = l[N] < m ? ++N : N;
  } else
    s.totalLength = l[0] = 0;
  return e ? p - l[e / 2 - 1] : p;
}
function ut(s, e) {
  var t, r, i;
  for (i = t = r = 0; i < s.length; i++)
    s[i].resolution = ~~e || 12, r += s[i].length, t += y2(s[i]);
  return s.totalPoints = r, s.totalLength = t, s;
}
function si(s, e, t) {
  if (t <= 0 || t >= 1)
    return 0;
  var r = s[e], i = s[e + 1], n = s[e + 2], a = s[e + 3], o = s[e + 4], f = s[e + 5], l = s[e + 6], u = s[e + 7], c = r + (n - r) * t, d = n + (o - n) * t, p = i + (a - i) * t, m = a + (f - a) * t, h = c + (d - c) * t, L = p + (m - p) * t, y = o + (l - o) * t, C = f + (u - f) * t;
  return d += (y - d) * t, m += (C - m) * t, s.splice(
    e + 2,
    4,
    B(c),
    //first control point
    B(p),
    B(h),
    //second control point
    B(L),
    B(h + (d - h) * t),
    //new fabricated anchor on line
    B(L + (m - L) * t),
    B(d),
    //third control point
    B(m),
    B(y),
    //fourth control point
    B(C)
  ), s.samples && s.samples.splice(e / 6 * s.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function ln(s, e, t, r) {
  t = t || {}, s.totalLength || ut(s), (e < 0 || e > 1) && (e = p1(e));
  var i = 0, n = s[0], a, o, f, l, u, c, d;
  if (!e)
    d = c = i = 0, n = s[0];
  else if (e === 1)
    d = 1, i = s.length - 1, n = s[i], c = n.length - 8;
  else {
    if (s.length > 1) {
      for (f = s.totalLength * e, u = c = 0; (u += s[c++].totalLength) < f; )
        i = c;
      n = s[i], l = u - n.totalLength, e = (f - l) / (u - l) || 0;
    }
    a = n.samples, o = n.resolution, f = n.totalLength * e, c = n.lookup.length ? n.lookup[~~(f / n.minLength)] || 0 : m1(a, f, e), l = c ? a[c - 1] : 0, u = a[c], u < f && (l = u, u = a[++c]), d = 1 / o * ((f - l) / (u - l) + c % o), c = ~~(c / o) * 6, r && d === 1 && (c + 6 < n.length ? (c += 6, d = 0) : i + 1 < s.length && (c = d = 0, n = s[++i]));
  }
  return t.t = d, t.i = c, t.path = s, t.segment = n, t.segIndex = i, t;
}
function fn(s, e, t, r) {
  var i = s[0], n = r || {}, a, o, f, l, u, c, d, p, m;
  if ((e < 0 || e > 1) && (e = p1(e)), i.lookup || ut(s), s.length > 1) {
    for (f = s.totalLength * e, u = c = 0; (u += s[c++].totalLength) < f; )
      i = s[c];
    l = u - i.totalLength, e = (f - l) / (u - l) || 0;
  }
  return a = i.samples, o = i.resolution, f = i.totalLength * e, c = i.lookup.length ? i.lookup[e < 1 ? ~~(f / i.minLength) : i.lookup.length - 1] || 0 : m1(a, f, e), l = c ? a[c - 1] : 0, u = a[c], u < f && (l = u, u = a[++c]), d = 1 / o * ((f - l) / (u - l) + c % o) || 0, m = 1 - d, c = ~~(c / o) * 6, p = i[c], n.x = B((d * d * (i[c + 6] - p) + 3 * m * (d * (i[c + 4] - p) + m * (i[c + 2] - p))) * d + p), n.y = B((d * d * (i[c + 7] - (p = i[c + 1])) + 3 * m * (d * (i[c + 5] - p) + m * (i[c + 3] - p))) * d + p), t && (n.angle = i.totalLength ? g1(i, c, d >= 1 ? 1 - 1e-9 : d || 1e-9) : i.angle || 0), n;
}
function Ft(s, e, t, r, i, n, a) {
  for (var o = s.length, f, l, u, c, d; --o > -1; )
    for (f = s[o], l = f.length, u = 0; u < l; u += 2)
      c = f[u], d = f[u + 1], f[u] = c * e + d * r + n, f[u + 1] = c * t + d * i + a;
  return s._dirty = 1, s;
}
function C2(s, e, t, r, i, n, a, o, f) {
  if (!(s === o && e === f)) {
    t = Se(t), r = Se(r);
    var l = i % 360 * a2, u = or(l), c = sr(l), d = Math.PI, p = d * 2, m = (s - o) / 2, h = (e - f) / 2, L = u * m + c * h, y = -c * m + u * h, C = L * L, x = y * y, b = C / (t * t) + x / (r * r);
    b > 1 && (t = Ie(b) * t, r = Ie(b) * r);
    var v = t * t, M = r * r, w = (v * M - v * x - M * C) / (v * x + M * C);
    w < 0 && (w = 0);
    var T = (n === a ? -1 : 1) * Ie(w), E = T * (t * y / r), R = T * -(r * L / t), k = (s + o) / 2, N = (e + f) / 2, A = k + (u * E - c * R), I = N + (c * E + u * R), j = (L - E) / t, F = (y - R) / r, $ = (-L - E) / t, ee = (-y - R) / r, fe = j * j + F * F, Oe = (F < 0 ? -1 : 1) * Math.acos(j / Ie(fe)), X = (j * ee - F * $ < 0 ? -1 : 1) * Math.acos((j * $ + F * ee) / Ie(fe * ($ * $ + ee * ee)));
    isNaN(X) && (X = d), !a && X > 0 ? X -= p : a && X < 0 && (X += p), Oe %= p, X %= p;
    var Ee = Math.ceil(Se(X) / (p / 4)), ie = [], Q = X / Ee, ue = 4 / 3 * sr(Q / 2) / (1 + or(Q / 2)), Kt = u * t, er = c * t, tr = c * -r, rr = u * r, ne;
    for (ne = 0; ne < Ee; ne++)
      i = Oe + ne * Q, L = or(i), y = sr(i), j = or(i += Q), F = sr(i), ie.push(L - ue * y, y + ue * L, j + ue * F, F - ue * j, j, F);
    for (ne = 0; ne < ie.length; ne += 2)
      L = ie[ne], y = ie[ne + 1], ie[ne] = L * Kt + y * tr + A, ie[ne + 1] = L * er + y * rr + I;
    return ie[ne - 2] = o, ie[ne - 1] = f, ie;
  }
}
function vr(s) {
  var e = (s + "").replace(i2, function(E) {
    var R = +E;
    return R < 1e-4 && R > -1e-4 ? 0 : R;
  }).match(t2) || [], t = [], r = 0, i = 0, n = 2 / 3, a = e.length, o = 0, f = "ERROR: malformed path: " + s, l, u, c, d, p, m, h, L, y, C, x, b, v, M, w, T = function(R, k, N, A) {
    C = (N - R) / 3, x = (A - k) / 3, h.push(R + C, k + x, N - C, A - x, N, A);
  };
  if (!s || !isNaN(e[0]) || isNaN(e[1]))
    return console.log(f), t;
  for (l = 0; l < a; l++)
    if (v = p, isNaN(e[l]) ? (p = e[l].toUpperCase(), m = p !== e[l]) : l--, c = +e[l + 1], d = +e[l + 2], m && (c += r, d += i), l || (L = c, y = d), p === "M")
      h && (h.length < 8 ? t.length -= 1 : o += h.length), r = L = c, i = y = d, h = [c, d], t.push(h), l += 2, p = "L";
    else if (p === "C")
      h || (h = [0, 0]), m || (r = i = 0), h.push(c, d, r + e[l + 3] * 1, i + e[l + 4] * 1, r += e[l + 5] * 1, i += e[l + 6] * 1), l += 6;
    else if (p === "S")
      C = r, x = i, (v === "C" || v === "S") && (C += r - h[h.length - 4], x += i - h[h.length - 3]), m || (r = i = 0), h.push(C, x, c, d, r += e[l + 3] * 1, i += e[l + 4] * 1), l += 4;
    else if (p === "Q")
      C = r + (c - r) * n, x = i + (d - i) * n, m || (r = i = 0), r += e[l + 3] * 1, i += e[l + 4] * 1, h.push(C, x, r + (c - r) * n, i + (d - i) * n, r, i), l += 4;
    else if (p === "T")
      C = r - h[h.length - 4], x = i - h[h.length - 3], h.push(r + C, i + x, c + (r + C * 1.5 - c) * n, d + (i + x * 1.5 - d) * n, r = c, i = d), l += 2;
    else if (p === "H")
      T(r, i, r = c, i), l += 1;
    else if (p === "V")
      T(r, i, r, i = c + (m ? i - r : 0)), l += 1;
    else if (p === "L" || p === "Z")
      p === "Z" && (c = L, d = y, h.closed = !0), (p === "L" || Se(r - c) > 0.5 || Se(i - d) > 0.5) && (T(r, i, c, d), p === "L" && (l += 2)), r = c, i = d;
    else if (p === "A") {
      if (M = e[l + 4], w = e[l + 5], C = e[l + 6], x = e[l + 7], u = 7, M.length > 1 && (M.length < 3 ? (x = C, C = w, u--) : (x = w, C = M.substr(2), u -= 2), w = M.charAt(1), M = M.charAt(0)), b = C2(r, i, +e[l + 1], +e[l + 2], +e[l + 3], +M, +w, (m ? r : 0) + C * 1, (m ? i : 0) + x * 1), l += u, b)
        for (u = 0; u < b.length; u++)
          h.push(b[u]);
      r = h[h.length - 2], i = h[h.length - 1];
    } else
      console.log(f);
  return l = h.length, l < 6 ? (t.pop(), l = 0) : h[0] === h[l - 2] && h[1] === h[l - 1] && (h.closed = !0), t.totalPoints = o + l, t;
}
function x2(s, e) {
  e === void 0 && (e = 1);
  for (var t = s[0], r = 0, i = [t, r], n = 2; n < s.length; n += 2)
    i.push(t, r, s[n], r = (s[n] - t) * e / 2, t = s[n], -r);
  return i;
}
function oi(s, e) {
  Se(s[0] - s[2]) < 1e-4 && Se(s[1] - s[3]) < 1e-4 && (s = s.slice(2));
  var t = s.length - 2, r = +s[0], i = +s[1], n = +s[2], a = +s[3], o = [r, i, r, i], f = n - r, l = a - i, u = Math.abs(s[t] - r) < 1e-3 && Math.abs(s[t + 1] - i) < 1e-3, c, d, p, m, h, L, y, C, x, b, v, M, w, T, E;
  for (u && (s.push(n, a), n = r, a = i, r = s[t - 2], i = s[t - 1], s.unshift(r, i), t += 4), e = e || e === 0 ? +e : 1, p = 2; p < t; p += 2)
    c = r, d = i, r = n, i = a, n = +s[p + 2], a = +s[p + 3], !(r === n && i === a) && (m = f, h = l, f = n - r, l = a - i, L = Ie(m * m + h * h), y = Ie(f * f + l * l), C = Ie(Math.pow(f / y + m / L, 2) + Math.pow(l / y + h / L, 2)), x = (L + y) * e * 0.25 / C, b = r - (r - c) * (L ? x / L : 0), v = r + (n - r) * (y ? x / y : 0), M = r - (b + ((v - b) * (L * 3 / (L + y) + 0.5) / 4 || 0)), w = i - (i - d) * (L ? x / L : 0), T = i + (a - i) * (y ? x / y : 0), E = i - (w + ((T - w) * (L * 3 / (L + y) + 0.5) / 4 || 0)), (r !== c || i !== d) && o.push(
      B(b + M),
      // first control point
      B(w + E),
      B(r),
      // anchor
      B(i),
      B(v + M),
      // second control point
      B(T + E)
    ));
  return r !== n || i !== a || o.length < 4 ? o.push(B(n), B(a), B(n), B(a)) : o.length -= 2, o.length === 2 ? o.push(r, i, r, i, r, i) : u && (o.splice(0, 6), o.length = o.length - 6), o;
}
function y1(s) {
  _1(s[0]) && (s = [s]);
  var e = "", t = s.length, r, i, n, a;
  for (i = 0; i < t; i++) {
    for (a = s[i], e += "M" + B(a[0]) + "," + B(a[1]) + " C", r = a.length, n = 2; n < r; n++)
      e += B(a[n++]) + "," + B(a[n++]) + " " + B(a[n++]) + "," + B(a[n++]) + " " + B(a[n++]) + "," + B(a[n]) + " ";
    a.closed && (e += "z");
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
var Ye, ct, Si, Sr, zt, dr, Er, $t, Re = "transform", li = Re + "Origin", C1, x1 = function(e) {
  var t = e.ownerDocument || e;
  for (!(Re in e.style) && ("msTransform" in e.style) && (Re = "msTransform", li = Re + "Origin"); t.parentNode && (t = t.parentNode); )
    ;
  if (ct = window, Er = new Jt(), t) {
    Ye = t, Si = t.documentElement, Sr = t.body, $t = Ye.createElementNS("http://www.w3.org/2000/svg", "g"), $t.style.transform = "none";
    var r = t.createElement("div"), i = t.createElement("div"), n = t && (t.body || t.firstElementChild);
    n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), C1 = i.offsetParent !== r, n.removeChild(r));
  }
  return t;
}, v2 = function(e) {
  for (var t, r; e && e !== Sr; )
    r = e._gsap, r && r.uncache && r.get(e, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), t ? t.push(r) : t = [r]), e = e.parentNode;
  return t;
}, v1 = [], E1 = [], E2 = function() {
  return ct.pageYOffset || Ye.scrollTop || Si.scrollTop || Sr.scrollTop || 0;
}, b2 = function() {
  return ct.pageXOffset || Ye.scrollLeft || Si.scrollLeft || Sr.scrollLeft || 0;
}, Pi = function(e) {
  return e.ownerSVGElement || ((e.tagName + "").toLowerCase() === "svg" ? e : null);
}, M2 = function s(e) {
  if (ct.getComputedStyle(e).position === "fixed")
    return !0;
  if (e = e.parentNode, e && e.nodeType === 1)
    return s(e);
}, Ir = function s(e, t) {
  if (e.parentNode && (Ye || x1(e))) {
    var r = Pi(e), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = r ? t ? "rect" : "g" : "div", a = t !== 2 ? 0 : 100, o = t === 3 ? 100 : 0, f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = Ye.createElementNS ? Ye.createElementNS(i.replace(/^https/, "http"), n) : Ye.createElement(n);
    return t && (r ? (dr || (dr = s(e)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + a + "," + o + ")"), dr.appendChild(l)) : (zt || (zt = s(e), zt.style.cssText = f), l.style.cssText = f + "width:0.1px;height:0.1px;top:" + o + "px;left:" + a + "px", zt.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, w2 = function(e) {
  for (var t = new Jt(), r = 0; r < e.numberOfItems; r++)
    t.multiply(e.getItem(r).matrix);
  return t;
}, T2 = function(e) {
  var t = e.getCTM(), r;
  return t || (r = e.style[Re], e.style[Re] = "none", e.appendChild($t), t = $t.getCTM(), e.removeChild($t), r ? e.style[Re] = r : e.style.removeProperty(Re.replace(/([A-Z])/g, "-$1").toLowerCase())), t || Er.clone();
}, S2 = function(e, t) {
  var r = Pi(e), i = e === r, n = r ? v1 : E1, a = e.parentNode, o, f, l, u, c, d;
  if (e === ct)
    return e;
  if (n.length || n.push(Ir(e, 1), Ir(e, 2), Ir(e, 3)), o = r ? dr : zt, r)
    i ? (l = T2(e), u = -l.e / l.a, c = -l.f / l.d, f = Er) : e.getBBox ? (l = e.getBBox(), f = e.transform ? e.transform.baseVal : {}, f = f.numberOfItems ? f.numberOfItems > 1 ? w2(f) : f.getItem(0).matrix : Er, u = f.a * l.x + f.c * l.y, c = f.b * l.x + f.d * l.y) : (f = new Jt(), u = c = 0), t && e.tagName.toLowerCase() === "g" && (u = c = 0), (i ? r : a).appendChild(o), o.setAttribute("transform", "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + (f.e + u) + "," + (f.f + c) + ")");
  else {
    if (u = c = 0, C1)
      for (f = e.offsetParent, l = e; l && (l = l.parentNode) && l !== f && l.parentNode; )
        (ct.getComputedStyle(l)[Re] + "").length > 4 && (u = l.offsetLeft, c = l.offsetTop, l = 0);
    if (d = ct.getComputedStyle(e), d.position !== "absolute" && d.position !== "fixed")
      for (f = e.offsetParent; a && a !== f; )
        u += a.scrollLeft || 0, c += a.scrollTop || 0, a = a.parentNode;
    l = o.style, l.top = e.offsetTop - c + "px", l.left = e.offsetLeft - u + "px", l[Re] = d[Re], l[li] = d[li], l.position = d.position === "fixed" ? "fixed" : "absolute", e.parentNode.appendChild(o);
  }
  return o;
}, Yr = function(e, t, r, i, n, a, o) {
  return e.a = t, e.b = r, e.c = i, e.d = n, e.e = a, e.f = o, e;
}, Jt = /* @__PURE__ */ function() {
  function s(t, r, i, n, a, o) {
    t === void 0 && (t = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), a === void 0 && (a = 0), o === void 0 && (o = 0), Yr(this, t, r, i, n, a, o);
  }
  var e = s.prototype;
  return e.inverse = function() {
    var r = this.a, i = this.b, n = this.c, a = this.d, o = this.e, f = this.f, l = r * a - i * n || 1e-10;
    return Yr(this, a / l, -i / l, -n / l, r / l, (n * f - a * o) / l, -(r * f - i * o) / l);
  }, e.multiply = function(r) {
    var i = this.a, n = this.b, a = this.c, o = this.d, f = this.e, l = this.f, u = r.a, c = r.c, d = r.b, p = r.d, m = r.e, h = r.f;
    return Yr(this, u * i + d * a, u * n + d * o, c * i + p * a, c * n + p * o, f + m * i + h * a, l + m * n + h * o);
  }, e.clone = function() {
    return new s(this.a, this.b, this.c, this.d, this.e, this.f);
  }, e.equals = function(r) {
    var i = this.a, n = this.b, a = this.c, o = this.d, f = this.e, l = this.f;
    return i === r.a && n === r.b && a === r.c && o === r.d && f === r.e && l === r.f;
  }, e.apply = function(r, i) {
    i === void 0 && (i = {});
    var n = r.x, a = r.y, o = this.a, f = this.b, l = this.c, u = this.d, c = this.e, d = this.f;
    return i.x = n * o + a * l + c || 0, i.y = n * f + a * u + d || 0, i;
  }, s;
}();
function Mt(s, e, t, r) {
  if (!s || !s.parentNode || (Ye || x1(s)).documentElement === s)
    return new Jt();
  var i = v2(s), n = Pi(s), a = n ? v1 : E1, o = S2(s, t), f = a[0].getBoundingClientRect(), l = a[1].getBoundingClientRect(), u = a[2].getBoundingClientRect(), c = o.parentNode, d = !r && M2(s), p = new Jt((l.left - f.left) / 100, (l.top - f.top) / 100, (u.left - f.left) / 100, (u.top - f.top) / 100, f.left + (d ? 0 : b2()), f.top + (d ? 0 : E2()));
  if (c.removeChild(o), i)
    for (f = i.length; f--; )
      l = i[f], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
  return e ? p.inverse() : p;
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
var P2 = "x,translateX,left,marginLeft,xPercent".split(","), O2 = "y,translateY,top,marginTop,yPercent".split(","), R2 = Math.PI / 180, Me, b1, gt, fi, $r, un, k2 = function() {
  return Me || typeof window < "u" && (Me = window.gsap) && Me.registerPlugin && Me;
}, Zt = function(e, t, r, i) {
  for (var n = t.length, a = i === 2 ? 0 : i, o = 0; o < n; o++)
    e[a] = parseFloat(t[o][r]), i === 2 && (e[a + 1] = 0), a += 2;
  return e;
}, Ct = function(e, t, r) {
  return parseFloat(e._gsap.get(e, t, r || "px")) || 0;
}, M1 = function(e) {
  var t = e[0], r = e[1], i;
  for (i = 2; i < e.length; i += 2)
    t = e[i] += t, r = e[i + 1] += r;
}, cn = function(e, t, r, i, n, a, o, f, l) {
  if (o.type === "cubic")
    t = [t];
  else {
    o.fromCurrent !== !1 && t.unshift(Ct(r, i, f), n ? Ct(r, n, l) : 0), o.relative && M1(t);
    var u = n ? oi : x2;
    t = [u(t, o.curviness)];
  }
  return t = a(w1(t, r, o)), br(e, r, i, t, "x", f), n && br(e, r, n, t, "y", l), ut(t, o.resolution || (o.curviness === 0 ? 20 : 12));
}, A2 = function(e) {
  return e;
}, N2 = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, hn = function(e, t, r) {
  var i = Mt(e), n = 0, a = 0, o;
  return (e.tagName + "").toLowerCase() === "svg" ? (o = e.viewBox.baseVal, o.width || (o = {
    width: +e.getAttribute("width"),
    height: +e.getAttribute("height")
  })) : o = t && e.getBBox && e.getBBox(), t && t !== "auto" && (n = t.push ? t[0] * (o ? o.width : e.offsetWidth || 0) : t.x, a = t.push ? t[1] * (o ? o.height : e.offsetHeight || 0) : t.y), r.apply(n || a ? i.apply({
    x: n,
    y: a
  }) : {
    x: i.e,
    y: i.f
  });
}, ui = function(e, t, r, i) {
  var n = Mt(e.parentNode, !0, !0), a = n.clone().multiply(Mt(t)), o = hn(e, r, n), f = hn(t, i, n), l = f.x, u = f.y, c;
  return a.e = a.f = 0, i === "auto" && t.getTotalLength && t.tagName.toLowerCase() === "path" && (c = t.getAttribute("d").match(N2) || [], c = a.apply({
    x: +c[0],
    y: +c[1]
  }), l += c.x, u += c.y), c && (c = a.apply(t.getBBox()), l -= c.x, u -= c.y), a.e = l - o.x, a.f = u - o.y, a;
}, w1 = function(e, t, r) {
  var i = r.align, n = r.matrix, a = r.offsetX, o = r.offsetY, f = r.alignOrigin, l = e[0][0], u = e[0][1], c = Ct(t, "x"), d = Ct(t, "y"), p, m, h;
  return !e || !e.length ? hr("M0,0L0,0") : (i && (i === "self" || (p = fi(i)[0] || t) === t ? Ft(e, 1, 0, 0, 1, c - l, d - u) : (f && f[2] !== !1 ? Me.set(t, {
    transformOrigin: f[0] * 100 + "% " + f[1] * 100 + "%"
  }) : f = [Ct(t, "xPercent") / -100, Ct(t, "yPercent") / -100], m = ui(t, p, f, "auto"), h = m.apply({
    x: l,
    y: u
  }), Ft(e, m.a, m.b, m.c, m.d, c + m.e - (h.x - m.e), d + m.f - (h.y - m.f)))), n ? Ft(e, n.a, n.b, n.c, n.d, n.e, n.f) : (a || o) && Ft(e, 1, 0, 0, 1, a || 0, o || 0), e);
}, br = function(e, t, r, i, n, a) {
  var o = t._gsap, f = o.harness, l = f && f.aliases && f.aliases[r], u = l && l.indexOf(",") < 0 ? l : r, c = e._pt = new b1(e._pt, t, u, 0, 0, A2, 0, o.set(t, u, e));
  c.u = gt(o.get(t, u, a)) || 0, c.path = i, c.pp = n, e._props.push(u);
}, Z2 = function(e, t) {
  return function(r) {
    return e || t !== 1 ? L1(r, e, t) : r;
  };
}, T1 = {
  version: "3.12.5",
  name: "motionPath",
  register: function(e, t, r) {
    Me = e, gt = Me.utils.getUnit, fi = Me.utils.toArray, $r = Me.core.getStyleSaver, un = Me.core.reverting || function() {
    }, b1 = r;
  },
  init: function(e, t, r) {
    if (!Me)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof t == "object" && !t.style) || !t.path) && (t = {
      path: t
    });
    var i = [], n = t, a = n.path, o = n.autoRotate, f = n.unitX, l = n.unitY, u = n.x, c = n.y, d = a[0], p = Z2(t.start, "end" in t ? t.end : 1), m, h;
    if (this.rawPaths = i, this.target = e, this.tween = r, this.styles = $r && $r(e, "transform"), (this.rotate = o || o === 0) && (this.rOffset = parseFloat(o) || 0, this.radians = !!t.useRadians, this.rProp = t.rotation || "rotation", this.rSet = e._gsap.set(e, this.rProp, this), this.ru = gt(e._gsap.get(e, this.rProp)) || 0), Array.isArray(a) && !("closed" in a) && typeof d != "number") {
      for (h in d)
        !u && ~P2.indexOf(h) ? u = h : !c && ~O2.indexOf(h) && (c = h);
      u && c ? i.push(cn(this, Zt(Zt([], a, u, 0), a, c, 1), e, u, c, p, t, f || gt(a[0][u]), l || gt(a[0][c]))) : u = c = 0;
      for (h in d)
        h !== u && h !== c && i.push(cn(this, Zt([], a, h, 2), e, h, 0, p, t, gt(a[0][h])));
    } else
      m = p(w1(hr(t.path), e, t)), ut(m, t.resolution), i.push(m), br(this, e, t.x || "x", m, "x", t.unitX || "px"), br(this, e, t.y || "y", m, "y", t.unitY || "px");
  },
  render: function(e, t) {
    var r = t.rawPaths, i = r.length, n = t._pt;
    if (t.tween._time || !un()) {
      for (e > 1 ? e = 1 : e < 0 && (e = 0); i--; )
        fn(r[i], e, !i && t.rotate, r[i]);
      for (; n; )
        n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, e), n = n._next;
      t.rotate && t.rSet(t.target, t.rProp, r[0].angle * (t.radians ? R2 : 1) + t.rOffset + t.ru, t, e);
    } else
      t.styles.revert();
  },
  getLength: function(e) {
    return ut(hr(e)).totalLength;
  },
  sliceRawPath: L1,
  getRawPath: hr,
  pointsToSegment: oi,
  stringToRawPath: vr,
  rawPathToString: y1,
  transformRawPath: Ft,
  getGlobalMatrix: Mt,
  getPositionOnPath: fn,
  cacheRawPathMeasurements: ut,
  convertToPath: function(e, t) {
    return fi(e).map(function(r) {
      return L2(r, t !== !1);
    });
  },
  convertCoordinates: function(e, t, r) {
    var i = Mt(t, !0, !0).multiply(Mt(e));
    return r ? i.apply(r) : i;
  },
  getAlignMatrix: ui,
  getRelativePosition: function(e, t, r, i) {
    var n = ui(e, t, r, i);
    return {
      x: n.e,
      y: n.f
    };
  },
  arrayToRawPath: function(e, t) {
    t = t || {};
    var r = Zt(Zt([], e, t.x || "x", 0), e, t.y || "y", 1);
    return t.relative && M1(r), [t.type === "cubic" ? r : oi(r, t.curviness)];
  }
};
k2() && Me.registerPlugin(T1);
bt.registerPlugin(T1);
const $2 = ({ children: s }) => /* @__PURE__ */ O.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed]", children: [
  /* @__PURE__ */ O.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center", children: [
    /* @__PURE__ */ O.jsx("div", { className: "ml-2 mt-2", children: /* @__PURE__ */ O.jsx(F1, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "font-bold h-[40px] flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "EVANGELION 2.0"
      }
    )
  ] }),
  /* @__PURE__ */ O.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ O.jsx(Bi, {}) }),
  /* @__PURE__ */ O.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ O.jsx(Bi, {}) }),
  /* @__PURE__ */ O.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ O.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ O.jsx("div", { className: "content", children: s }) }) })
] }), V2 = ({
  headBlockChildren: s,
  width: e,
  height: t,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: a
}) => /* @__PURE__ */ O.jsxs("div", { className: "card-container relative", style: { width: e, height: t }, children: [
  /* @__PURE__ */ O.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${a ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ O.jsx("div", { className: `text-${i} head-block`, children: s }),
        /* @__PURE__ */ O.jsx("div", { className: `text-${i} main-block'`, children: n })
      ]
    }
  ),
  /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `artifact text-${r} ${a ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ O.jsx("div", { className: `icon-artifact text-${r}`, "data-augmented-ui": "br-clip border" })
] }), D2 = (s) => /* @__PURE__ */ _.createElement("svg", { width: 890, height: 810, viewBox: "0 0 890 881", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...s }, /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-2", opacity: 0.4, d: "M650.452 598.927C628.472 626.548 600.789 649.711 569.551 666.494L567.372 662.531C598.059 646.04 625.272 623.275 646.868 596.13L650.452 598.927Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-3", d: "M685.193 541.14C677.055 559.797 666.718 577.502 654.496 593.828L650.844 591.128C662.86 575.084 673.011 557.689 681.002 539.363L685.193 541.14Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-4", opacity: 0.4, d: "M702.058 394.584C703.089 399.567 703.649 404.617 704.336 409.648C704.729 412.163 704.895 414.698 705.102 417.223L705.72 424.818C705.848 427.353 705.887 429.898 705.985 432.433L706.103 436.24L706.162 438.143L706.132 440.047L705.975 447.661L705.897 451.468L705.622 455.266L701.067 454.994L701.332 451.265L701.41 447.525L701.558 440.037L701.587 438.163L701.528 436.288L701.41 432.549C701.322 430.053 701.283 427.557 701.155 425.071L700.547 417.612C700.34 415.126 700.174 412.63 699.791 410.163C699.113 405.219 698.573 400.256 697.553 395.361L702.058 394.584Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-5", d: "M688.815 347.626C694.018 361.058 698.102 374.898 701.027 388.99L696.561 389.884C693.694 376.044 689.679 362.437 684.565 349.248L688.815 347.626Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-6", opacity: 0.4, d: "M416.154 695.894L410.745 695.243C408.939 695.019 407.132 694.835 405.346 694.485L394.606 692.64L383.965 690.27L381.304 689.668L378.683 688.94L373.431 687.483L374.698 683.142L379.852 684.569L382.433 685.288L385.045 685.88L395.49 688.211L406.043 690.027C407.8 690.367 409.577 690.552 411.344 690.766L416.665 691.407L416.154 695.894Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-7", d: "M688.815 347.626C694.018 361.058 698.102 374.898 701.027 388.99L696.561 389.884C693.694 376.044 689.679 362.437 684.565 349.248L688.815 347.626Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-8", d: "M354.003 681.141L345.924 678.013C344.57 677.518 343.264 676.887 341.939 676.314L337.982 674.556C332.652 672.322 327.587 669.544 322.413 666.98C319.871 665.621 317.387 664.145 314.874 662.736L311.114 660.6C309.877 659.861 308.67 659.065 307.452 658.298L300.149 653.665L293.08 648.692C291.902 647.857 290.715 647.051 289.556 646.187L286.15 643.535C283.892 641.748 281.575 640.029 279.357 638.194C275.008 634.416 270.531 630.793 266.428 626.743L263.286 623.781C262.236 622.8 261.186 621.809 260.214 620.76L254.235 614.545L252.743 612.981L251.32 611.359L248.483 608.115C246.608 605.94 244.654 603.832 242.907 601.54C213.692 566.004 194.608 522.522 187.844 477.245L192.36 476.594C199.006 521.066 217.746 563.799 246.46 598.714C248.169 600.967 250.093 603.036 251.938 605.173L254.726 608.358L256.12 609.951L257.583 611.485L263.463 617.594C264.425 618.633 265.456 619.605 266.487 620.566L269.569 623.48C273.594 627.452 278.002 631.016 282.272 634.726C284.452 636.523 286.729 638.223 288.948 639.971L292.295 642.584C293.434 643.429 294.602 644.225 295.76 645.041L302.711 649.926L309.887 654.481C311.084 655.229 312.272 656.015 313.49 656.744L317.191 658.842C319.664 660.231 322.099 661.678 324.602 663.008C329.687 665.524 334.655 668.253 339.897 670.448L343.784 672.176C345.08 672.74 346.356 673.371 347.691 673.847L355.623 676.926L354.003 681.141Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M688.815 347.626C694.018 361.058 698.102 374.898 701.027 388.99L696.561 389.884C693.694 376.044 689.679 362.437 684.565 349.248L688.815 347.626Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M645.17 274.387C652.493 283.196 659.492 292.306 665.569 302.008L661.721 304.427C655.752 294.889 648.871 285.935 641.685 277.281L645.17 274.387Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-8", opacity: 0.4, d: "M186.284 415.125L187.325 406.724L187.845 402.519C188.032 401.12 188.316 399.741 188.552 398.343L190.015 390C190.545 387.232 191.251 384.493 191.86 381.735C192.999 376.199 194.707 370.809 196.209 365.36C196.562 363.991 197.053 362.67 197.495 361.33L198.86 357.319C199.782 354.648 200.607 351.948 201.706 349.335L204.828 341.449C205.319 340.128 205.928 338.846 206.517 337.554L208.274 333.699C210.502 328.503 213.231 323.54 215.803 318.499C221.311 308.622 227.152 298.891 233.935 289.81L236.419 286.362C237.243 285.216 238.166 284.128 239.04 283.011L244.331 276.358C246.167 274.202 248.061 272.085 249.917 269.948L252.724 266.753L255.669 263.684L261.589 257.565L267.783 251.728C268.824 250.767 269.835 249.767 270.895 248.825L274.135 246.057C276.304 244.221 278.425 242.337 280.633 240.55C285.149 237.102 289.527 233.47 294.249 230.304L297.734 227.856C298.902 227.04 300.041 226.195 301.258 225.457L308.464 220.883C310.83 219.309 313.363 217.989 315.817 216.561L319.528 214.453L321.383 213.395L323.287 212.424L330.895 208.558C331.533 208.238 332.162 207.907 332.8 207.597L334.744 206.723L338.641 204.974C359.384 195.534 381.481 189.163 403.972 185.414C415.251 183.763 426.609 182.452 438.026 182.277C443.73 181.986 449.433 182.219 455.137 182.316L457.277 182.355L459.407 182.5L463.677 182.802L467.948 183.103C469.371 183.2 470.794 183.277 472.208 183.481C477.862 184.21 483.556 184.705 489.152 185.793C491.959 186.288 494.777 186.735 497.575 187.279L505.919 189.153C507.313 189.474 508.707 189.765 510.091 190.105L514.214 191.251L522.45 193.543L530.569 196.233L534.623 197.583L538.609 199.128L546.58 202.216L554.384 205.693L558.282 207.431L562.091 209.354L569.708 213.22L577.13 217.435C578.367 218.144 579.614 218.824 580.831 219.562L584.434 221.844C586.829 223.379 589.254 224.865 591.619 226.438L598.589 231.343L595.9 234.994L589.047 230.168C586.721 228.623 584.335 227.167 581.989 225.651L578.455 223.408C577.257 222.689 576.03 222.019 574.823 221.32L567.529 217.173L560.049 213.375L556.308 211.481L552.48 209.772L544.813 206.353L536.989 203.314L533.072 201.798L529.086 200.478L521.115 197.836L513.026 195.583L508.982 194.456C507.627 194.116 506.253 193.835 504.888 193.524L496.691 191.688C493.942 191.154 491.174 190.727 488.416 190.231C482.908 189.153 477.323 188.677 471.766 187.959C470.382 187.764 468.978 187.687 467.584 187.59L463.393 187.298L459.201 187.007L457.1 186.861L454.999 186.822C449.394 186.735 443.788 186.492 438.193 186.784C426.982 186.949 415.82 188.24 404.737 189.862C382.64 193.543 360.935 199.798 340.555 209.073L336.727 210.792L334.812 211.647C334.184 211.948 333.566 212.278 332.937 212.589L325.457 216.386L323.592 217.338L321.766 218.377L318.124 220.455C315.709 221.864 313.225 223.155 310.899 224.709L303.821 229.196C302.623 229.925 301.504 230.75 300.355 231.547L296.929 233.955C292.286 237.073 287.986 240.637 283.549 244.027C281.379 245.785 279.298 247.64 277.168 249.436L273.987 252.156C272.947 253.078 271.946 254.059 270.925 255.011L264.838 260.741L259.027 266.753L256.131 269.764L253.372 272.911C251.546 275.008 249.681 277.087 247.875 279.204L242.672 285.74C241.818 286.838 240.915 287.896 240.1 289.033L237.665 292.422C231 301.348 225.267 310.904 219.848 320.607C217.325 325.56 214.635 330.436 212.446 335.544L210.718 339.332C210.149 340.594 209.55 341.847 209.059 343.149L205.996 350.889C204.916 353.453 204.112 356.105 203.199 358.727L201.863 362.67C201.422 363.991 200.941 365.292 200.597 366.633C199.125 371.984 197.436 377.277 196.327 382.716C195.728 385.425 195.041 388.116 194.511 390.835L193.068 399.032C192.842 400.402 192.557 401.761 192.371 403.131L191.86 407.258L190.839 415.514L186.284 415.125Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { className: "circle-1-frag frag-1", d: "M547.806 676.906C534.426 682.529 520.584 687.055 506.448 690.444L505.378 686.055C519.259 682.733 532.855 678.285 546 672.759L547.806 676.906Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("g", { opacity: 0.8 }, /* @__PURE__ */ _.createElement("path", { d: "M36.8621 440.387H28.1447C28.1447 351.86 56.0637 267.472 108.878 196.35C134.294 162.124 164.765 132.056 199.428 106.998C234.513 81.6401 273.142 61.9634 314.235 48.5315L316.974 56.7188C149.431 111.495 36.8621 265.685 36.8621 440.387Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M242.74 801.192C184.163 768.958 133.685 722.611 96.7446 667.175L104.029 662.425C140.194 716.706 189.631 762.081 246.981 793.646L242.74 801.192Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M445.201 852.986V844.362C512.318 844.362 578.857 827.91 637.64 796.782C723.713 751.194 790.566 676.634 825.886 586.816L834.015 589.943C797.938 681.674 729.662 757.827 641.753 804.387C581.713 836.184 513.742 852.986 445.201 852.986Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M679.194 109.271C610.408 61.6039 529.488 36.401 445.201 36.401V27.7766C531.295 27.7766 613.942 53.5137 684.201 102.201L679.194 109.271Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("path", { d: "M417.096 880.326C414.848 880.19 412.61 880.035 410.371 879.86L410.892 873.275C413.1 873.44 415.299 873.596 417.518 873.732L417.096 880.326ZM400.967 879.044C398.729 878.821 396.49 878.588 394.262 878.335L395.018 871.77C397.217 872.022 399.416 872.246 401.624 872.459L400.967 879.044ZM321.618 864.01C319.458 863.388 317.298 862.757 315.148 862.116L317.092 855.803C319.213 856.444 321.333 857.066 323.463 857.668L321.618 864.01ZM290.783 853.996C288.663 853.22 286.562 852.433 284.461 851.627L286.866 845.46C288.938 846.256 291.019 847.033 293.1 847.79L290.783 853.996ZM203.924 811.02C202.03 809.816 200.155 808.592 198.28 807.359L201.98 801.862C203.826 803.076 205.681 804.28 207.537 805.465L203.924 811.02ZM177.36 792.684C175.563 791.344 173.777 789.994 172 788.634L176.094 783.419C177.841 784.759 179.608 786.099 181.375 787.42L177.36 792.684ZM128.649 750.592C127.069 749.009 125.498 747.416 123.937 745.813L128.757 741.239C130.288 742.822 131.839 744.385 133.391 745.939L128.649 750.592ZM106.738 727.059C105.275 725.369 103.832 723.67 102.389 721.96L107.523 717.736C108.937 719.416 110.36 721.086 111.803 722.757L106.738 727.059ZM838.884 646.983L832.984 643.875C834.025 641.942 835.055 639.99 836.067 638.038L842.006 641.049C840.985 643.04 839.944 645.011 838.884 646.983ZM37.9321 619.42C37.0191 617.399 36.1258 615.37 35.2521 613.33L41.3974 610.737C42.2613 612.738 43.1448 614.738 44.0381 616.739L37.9321 619.42ZM859.323 603.307L853.118 600.86C853.943 598.82 854.748 596.771 855.533 594.722L861.777 597.072C860.982 599.151 860.167 601.229 859.323 603.307ZM25.8869 589.788C25.131 587.7 24.3849 585.602 23.6486 583.494L29.9608 581.348C30.6775 583.417 31.4137 585.486 32.1696 587.544L25.8869 589.788ZM865.056 588.273L858.763 586.068C859.509 584 860.236 581.921 860.952 579.833L867.274 581.95C866.548 584.068 865.812 586.175 865.056 588.273ZM882.245 526.533L875.687 525.251C876.119 523.105 876.531 520.958 876.934 518.802L883.501 519.987C883.099 522.172 882.677 524.357 882.245 526.533ZM885.101 510.79L878.505 509.741C878.858 507.585 879.192 505.419 879.506 503.243L886.113 504.195C885.798 506.39 885.455 508.585 885.101 510.79ZM3.22973 496.581C2.94505 494.376 2.67998 492.171 2.42475 489.957L9.06088 489.229C9.3063 491.404 9.57137 493.58 9.84624 495.746L3.22973 496.581ZM0.314144 464.706C0.196343 462.482 0.0883511 460.267 0 458.043L6.67541 457.781C6.76376 459.976 6.86193 462.161 6.98955 464.346L0.314144 464.706ZM883.325 414.795C883.197 412.61 883.05 410.415 882.893 408.239L889.558 407.763C889.715 409.978 889.863 412.192 890 414.416L883.325 414.795ZM9.76769 385.678L3.14135 384.853C3.42604 382.648 3.72055 380.443 4.03469 378.239L10.6512 379.161C10.3371 381.337 10.0426 383.503 9.76769 385.678ZM12.0452 370.071L5.45813 369.012C5.82135 366.817 6.19439 364.622 6.58706 362.437L13.1643 363.593C12.7716 365.749 12.3986 367.905 12.0452 370.071ZM14.8921 354.56L8.34427 353.259C8.78603 351.074 9.24741 348.898 9.71862 346.732L16.2468 348.131C15.7756 350.268 15.324 352.414 14.8921 354.56ZM875.039 352.317C874.597 350.171 874.126 348.024 873.645 345.887L880.164 344.46C880.645 346.626 881.116 348.801 881.577 350.977L875.039 352.317ZM26.8391 308.787L20.4778 306.786C21.165 304.66 21.862 302.533 22.5786 300.415L28.9104 302.513C28.2036 304.601 27.5165 306.689 26.8391 308.787ZM862.847 306.612C862.16 304.524 861.463 302.445 860.756 300.377L867.078 298.25C867.804 300.347 868.511 302.465 869.198 304.572L862.847 306.612ZM37.6376 279L31.4334 276.543C32.2678 274.465 33.1219 272.406 33.9955 270.347L40.1507 272.901C39.3064 274.931 38.4622 276.961 37.6376 279ZM851.931 276.98C851.096 274.96 850.252 272.94 849.388 270.939L855.543 268.365C856.417 270.405 857.271 272.444 858.115 274.503L851.931 276.98ZM823.815 220.659C822.696 218.775 821.557 216.901 820.409 215.036L826.112 211.608C827.281 213.502 828.429 215.405 829.568 217.318L823.815 220.659ZM815.51 207.247C814.322 205.402 813.115 203.566 811.908 201.74L817.483 198.108C818.72 199.963 819.938 201.818 821.145 203.692L815.51 207.247ZM797.438 181.335C796.122 179.577 794.787 177.839 793.442 176.1L798.733 172.079C800.098 173.837 801.453 175.615 802.797 177.392L797.438 181.335ZM766.898 145.031C765.396 143.429 763.874 141.836 762.343 140.253L767.172 135.688C768.723 137.291 770.265 138.912 771.796 140.544L766.898 145.031ZM755.844 133.668C754.273 132.114 752.702 130.579 751.112 129.055L755.765 124.315C757.375 125.869 758.975 127.423 760.566 128.996L755.844 133.668ZM707.692 92.3817C705.916 91.0706 704.139 89.7692 702.342 88.4872L706.259 83.1358C708.075 84.4372 709.891 85.7581 711.698 87.0886L707.692 92.3817ZM694.754 83.1649C692.928 81.9217 691.092 80.6786 689.256 79.4549L692.977 73.9675C694.842 75.2107 696.698 76.4636 698.553 77.7261L694.754 83.1649ZM667.866 66.1396C665.961 65.0227 664.037 63.9252 662.113 62.8374L665.412 57.0976C667.375 58.2048 669.319 59.3217 671.253 60.4483L667.866 66.1396ZM565.349 22.6584C563.219 22.0562 561.088 21.4735 558.948 20.9102L560.676 14.5294C562.846 15.1024 565.015 15.6948 567.175 16.3067L565.349 22.6584ZM534.397 15.1607C532.237 14.7236 530.058 14.2963 527.878 13.8787L529.135 7.39097C531.344 7.80859 533.552 8.2456 535.751 8.69236L534.397 15.1607ZM471.245 6.93447C469.036 6.80821 466.828 6.6917 464.619 6.60429L464.904 0C467.152 0.0971212 469.4 0.213702 471.638 0.33996L471.245 6.93447Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M838.884 646.982L832.984 643.874C834.025 641.942 835.056 639.989 836.067 638.037L842.006 641.048C840.985 643.039 839.944 645.01 838.884 646.982ZM14.8921 354.56L8.34436 353.258C8.78612 351.073 9.2475 348.898 9.7187 346.732L16.2469 348.13C15.7757 350.267 15.3241 352.413 14.8921 354.56ZM851.931 276.979C851.096 274.959 850.252 272.939 849.388 270.938L855.543 268.365C856.417 270.404 857.271 272.444 858.115 274.503L851.931 276.979Z", fill: "#FFAA00" }), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M853.558 440.451L853.556 441.792L862.175 441.807L862.177 440.467L853.558 440.451Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M826.577 585.034L826.09 586.284L834.132 589.352L834.62 588.101L826.577 585.034Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M854.162 470.412L854.112 471.079L860.926 471.579L860.976 470.911L854.162 470.412Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M850.905 499.974L850.806 500.636L857.565 501.627L857.664 500.965L850.905 499.974Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M845.381 529.117L845.233 529.77L851.899 531.248L852.047 530.595L845.381 529.117Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M837.832 557.968L837.636 558.609L844.174 560.569L844.37 559.928L837.832 557.968Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M825.902 586.446L825.41 587.694L833.441 590.791L833.933 589.542L825.902 586.446Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M747.957 711.503L747.046 712.495L753.425 718.23L754.337 717.238L747.957 711.503Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M815.71 614.649L815.418 615.253L821.584 618.165L821.876 617.56L815.71 614.649Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M807.333 644.856L801.394 641.506L801.737 640.923L807.667 644.274L807.333 644.856Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M791.302 670.545L785.637 666.777L786.01 666.214L791.685 669.982L791.302 670.545Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M768.256 690.256L767.838 690.783L773.215 694.953L773.633 694.426L768.256 690.256Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M746.998 712.638L746.084 713.627L752.441 719.385L753.356 718.397L746.998 712.638Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M628.416 801.419L627.205 802.02L631.067 809.643L632.278 809.043L628.416 801.419Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M731.124 740.54L726.432 735.625L726.922 735.169L731.615 740.083L731.124 740.54Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M704.369 754.781L703.844 755.205L708.162 760.443L708.687 760.02L704.369 754.781Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M683.826 778.62L679.91 773.085L680.469 772.706L684.386 778.242L683.826 778.62Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M658.225 795.044L654.73 789.236L655.309 788.896L658.814 794.694L658.225 795.044Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M627.13 802.042L625.917 802.638L629.751 810.275L630.964 809.679L627.13 802.042Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M484.386 842.522L483.037 842.646L483.84 851.136L485.189 851.012L484.386 842.522Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M600.257 816.067L599.63 816.32L602.21 822.579L602.838 822.326L600.257 816.067Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M573.595 832.921L571.485 826.492L572.133 826.278L574.243 832.708L573.595 832.921Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M543.279 834.44L542.621 834.599L544.243 841.165L544.901 841.006L543.279 834.44Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M513.912 840.362L513.244 840.473L514.376 847.139L515.044 847.028L513.912 840.362Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M482.863 842.604L481.513 842.723L482.285 851.216L483.634 851.097L482.863 842.604Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M333.522 828.931L331.18 837.137L332.484 837.502L334.826 829.295L333.522 828.931Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M452.762 846.032L452.085 846.044L452.203 852.803L452.88 852.791L452.762 846.032Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M422.052 845.527L421.673 852.276L422.35 852.313L422.728 845.564L422.052 845.527Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M392.07 842.622L391.202 849.327L391.874 849.412L392.742 842.707L392.07 842.622Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M361.777 844.673L361.11 844.547L362.474 837.923L363.142 838.059L361.777 844.673Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M332.092 828.617L329.72 836.815L331.023 837.184L333.395 828.986L332.092 828.617Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M199.111 762.827L193.921 769.635L195.002 770.442L200.192 763.634L199.111 762.827Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M303.286 821.259L300.929 827.603L301.565 827.835L303.922 821.49L303.286 821.259Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M275.545 809.825L272.719 815.979L273.336 816.256L276.162 810.102L275.545 809.825Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M248.775 796.682L245.503 802.616L246.097 802.937L249.37 797.003L248.775 796.682Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M222.921 781.402L219.224 787.087L219.794 787.449L223.491 781.765L222.921 781.402Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M198.053 761.933L192.838 768.722L193.924 769.539L199.14 762.749L198.053 761.933Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M98.1046 653.13L90.7912 657.643L91.5083 658.781L98.8216 654.267L98.1046 653.13Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M173.907 744.665L169.391 749.737L169.899 750.18L174.415 745.107L173.907 744.665Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M152.131 724.283L147.255 729.019L147.73 729.497L152.606 724.762L152.131 724.283Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M131.936 702.257L126.726 706.629L127.164 707.14L132.374 702.768L131.936 702.257Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M113.472 679.004L107.953 682.989L108.352 683.53L113.871 679.545L113.472 679.004Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M97.1824 651.821L89.8493 656.301L90.561 657.442L97.8942 652.961L97.1824 651.821Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M43.8321 514.694L35.3612 516.269L35.6114 517.586L44.0823 516.011L43.8321 514.694Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M81.1184 627.29L75.0614 630.419L75.3748 631.013L81.4318 627.884L81.1184 627.29Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M68.1596 600.435L61.8847 603.109L62.1527 603.725L68.4276 601.051L68.1596 600.435Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M57.4389 572.742L50.9838 574.955L51.2053 575.587L57.6604 573.375L57.4389 572.742Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M48.6911 544.336L42.0861 546.064L42.259 546.711L48.864 544.983L48.6911 544.336Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M43.5206 513.206L35.0436 514.747L35.2884 516.065L43.7654 514.524L43.5206 513.206Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M35.3351 364.707L35.0901 366.025L43.567 367.567L43.8121 366.249L35.3351 364.707Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M37.4482 484.477L30.6569 485.214L30.7306 485.879L37.522 485.142L37.4482 484.477Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M35.4439 454.926L28.6154 455.168L28.6398 455.837L35.4682 455.595L35.4439 454.926Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M28.6277 424.909L28.6035 425.578L35.4319 425.821L35.4562 425.152L28.6277 424.909Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M30.7627 394.861L30.6894 395.526L37.4815 396.259L37.5549 395.594L30.7627 394.861Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M35.5581 363.167L35.3081 364.484L43.779 366.057L44.0289 364.74L35.5581 363.167Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M90.5851 223.243L89.873 224.383L97.2053 228.865L97.9174 227.725L90.5851 223.243Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M42.2413 334.089L42.068 334.736L48.6717 336.468L48.8451 335.821L42.2413 334.089Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M51.2556 305.228L51.0344 305.861L57.4908 308.07L57.712 307.437L51.2556 305.228Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M62.1952 277.068L61.9272 277.683L68.2022 280.357L68.4701 279.742L62.1952 277.068Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M75.351 249.789L75.0381 250.384L81.0978 253.506L81.4107 252.912L75.351 249.789Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M91.4242 221.975L90.7079 223.113L98.0238 227.621L98.7401 226.484L91.4242 221.975Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M193.88 111.259L192.801 112.07L198.013 118.862L199.092 118.051L193.88 111.259Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M108.341 197.275L107.942 197.817L113.462 201.8L113.861 201.259L108.341 197.275Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M127.24 173.543L126.802 174.054L132.014 178.424L132.452 177.913L127.24 173.543Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M147.774 151.291L147.299 151.769L152.176 156.503L152.651 156.025L147.774 151.291Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M169.984 130.581L169.475 131.024L173.992 136.096L174.5 135.653L169.984 130.581Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M195.091 110.312L194.009 111.119L199.196 117.929L200.278 117.123L195.091 110.312Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M331.007 43.6528L329.704 44.0212L332.073 52.2202L333.376 51.8518L331.007 43.6528Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M219.845 93.2882L219.276 93.6514L222.978 99.3321L223.547 98.969L219.845 93.2882Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M246.054 77.8121L245.46 78.1331L248.732 84.0667L249.327 83.7457L246.054 77.8121Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M273.376 64.4968L272.759 64.7737L275.582 70.929L276.199 70.6521L273.376 64.4968Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M301.641 52.9706L301.005 53.2019L303.363 59.5465L303.999 59.3152L301.641 52.9706Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M332.496 43.2178L331.192 43.5815L333.531 51.789L334.835 51.4253L332.496 43.2178Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M482.244 29.519L481.473 38.0122L482.822 38.1322L483.593 29.639L482.244 29.519Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M361.758 36.0548L361.094 36.1887L362.459 42.8118L363.123 42.6779L361.758 36.0548Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M391.855 31.2729L391.184 31.3582L392.055 38.0622L392.727 37.9769L391.855 31.2729Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M422.292 28.4764L421.615 28.5132L421.991 35.2627L422.667 35.2259L422.292 28.4764Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M452.091 28.0337L451.969 34.792L452.646 34.804L452.768 28.0457L452.091 28.0337Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M483.76 29.6271L482.96 38.1177L484.309 38.2421L485.109 29.7515L483.76 29.6271Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M629.824 70.475L625.986 78.1104L627.199 78.7072L631.037 71.0719L629.824 70.475Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M514.303 33.5682L513.169 40.2339L513.837 40.3451L514.971 33.6795L514.303 33.5682Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M544.226 39.5814L542.603 46.1477L543.261 46.3069L544.884 39.7406L544.226 39.5814Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M573.625 47.874L571.511 54.3018L572.155 54.5092L574.269 48.0814L573.625 47.874Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M602.286 58.1587L599.702 64.4167L600.329 64.6701L602.913 58.412L602.286 58.1587Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M631.139 71.0966L627.273 78.7183L628.484 79.3194L632.349 71.6978L631.139 71.0966Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M752.414 161.46L746.058 167.22L746.973 168.208L753.329 162.448L752.414 161.46Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M658.294 85.7227L654.793 91.5278L655.375 91.8712L658.876 86.0661L658.294 85.7227Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M683.769 102.17L679.849 107.706L680.404 108.091L684.324 102.555L683.769 102.17Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M708.189 120.315L703.872 125.554L704.397 125.978L708.714 120.738L708.189 120.315Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M731.137 140.166L726.441 145.076L726.933 145.537L731.629 140.627L731.137 140.166Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M753.434 162.557L747.055 168.292L747.966 169.283L754.345 163.549L753.434 162.557Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M833.466 290.023L825.435 293.117L825.926 294.366L833.958 291.272L833.466 290.023Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M773.304 185.886L767.93 190.06L768.348 190.587L773.722 186.413L773.304 185.886Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M786.01 214.551L785.637 213.997L791.301 210.229L791.684 210.782L786.01 214.551Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M801.736 239.85L801.393 239.258L807.332 235.917L807.666 236.499L801.736 239.85Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M821.662 262.603L815.493 265.511L815.785 266.116L821.953 263.208L821.662 262.603Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M834.074 291.39L826.031 294.456L826.518 295.707L834.561 292.641L834.074 291.39Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ _.createElement("path", { d: "M862.18 438.964L853.561 438.978L853.563 440.318L862.182 440.304L862.18 438.964Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M844.17 320.231L837.631 322.189L837.827 322.83L844.366 320.871L844.17 320.231Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M851.959 349.492L845.291 350.964L845.438 351.618L852.107 350.145L851.959 349.492Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M857.51 379.147L850.752 380.136L850.851 380.798L857.609 379.809L857.51 379.147Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M860.854 409.197L854.04 409.702L854.091 410.37L860.904 409.864L860.854 409.197Z", fill: "#606060" })), /* @__PURE__ */ _.createElement("path", { d: "M286.445 67.6445L283.362 60.4187C293.493 56.1939 303.919 52.3188 314.364 48.9001L316.848 56.3493C306.609 59.7 296.38 63.4975 286.445 67.6445Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M242.927 800.852C234.798 796.375 226.719 791.567 218.905 786.566L223.215 779.981C230.882 784.895 238.814 789.615 246.785 794.005L242.927 800.852Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M321.617 864.01C319.457 863.388 317.298 862.757 315.148 862.116L317.092 855.803C319.212 856.444 321.332 857.065 323.463 857.668L321.617 864.01Z", fill: "#FF2233" }), /* @__PURE__ */ _.createElement("path", { d: "M882.245 526.533L875.688 525.251C876.12 523.105 876.532 520.958 876.934 518.802L883.502 519.987C883.099 522.172 882.677 524.358 882.245 526.533Z", fill: "#FF2233" }), /* @__PURE__ */ _.createElement("path", { d: "M0.314144 464.706C0.196343 462.482 0.0883511 460.268 0 458.043L6.6754 457.781C6.76376 459.976 6.86193 462.161 6.98955 464.347L0.314144 464.706Z", fill: "#FFAA00" }), /* @__PURE__ */ _.createElement("path", { d: "M755.843 133.668C754.272 132.114 752.702 130.579 751.111 129.054L755.764 124.315C757.374 125.869 758.975 127.423 760.565 128.996L755.843 133.668Z", fill: "#FFAA22", fillOpacity: 0.8 }), /* @__PURE__ */ _.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ _.createElement("path", { d: "M445.487 833.359C226.209 833.359 47.8083 656.861 47.8083 439.921C47.8083 222.981 226.209 46.4829 445.487 46.4829V48.7458C227.475 48.7458 50.1055 224.224 50.1055 439.911C50.1055 655.598 227.475 831.077 445.487 831.077V833.359Z", fill: "#A69595" })), /* @__PURE__ */ _.createElement("path", { opacity: 0.3, d: "M304.605 578.765C227.317 501.971 227.416 377.297 304.9 300.629C382.393 223.962 508.421 223.865 586.033 300.338L646.926 240.094C535.731 130.405 355.073 130.502 243.996 240.395C132.929 350.278 132.831 529.02 243.692 639.029L304.605 578.765Z", fill: "#787377", fillOpacity: 0.6 }), /* @__PURE__ */ _.createElement("path", { d: "M144.268 437.007H112.255V443.32H144.268V437.007Z", fill: "#FFAA00" }), /* @__PURE__ */ _.createElement("path", { className: "red-square", d: "M778.206 437.007H746.193V443.32H778.206V437.007Z", fill: "#FF2233" }), /* @__PURE__ */ _.createElement("path", { d: "M218.271 211.166L213.76 215.63L236.396 238.025L240.908 233.561L218.271 211.166Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M654.032 642.288L649.52 646.752L672.156 669.147L676.668 664.683L654.032 642.288Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { opacity: 0.5, d: "M445.319 157.89V243.056C479.746 243.007 514.183 251.729 544.88 269.191L587.731 195.282C543.81 170.322 494.569 157.841 445.319 157.89Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M444.544 794.889C442.119 794.889 439.704 794.86 437.289 794.811C409.547 794.112 381.873 790.266 355.034 783.37L350.008 782.127L332.574 776.892L315.424 770.793L298.608 763.849C298.077 763.635 297.567 763.383 297.056 763.14C296.782 763.004 296.507 762.878 296.232 762.752L282.174 756.089C281.153 755.584 280.172 755.05 279.19 754.516C278.65 754.224 278.11 753.933 277.56 753.642C253.126 740.861 230.145 725.302 209.255 707.383C208.116 707.286 207.017 707.14 205.947 707.004L202 706.48L194.422 705.411L186.735 704.236L178.862 702.682L178.676 702.498C145.672 669.739 118.401 629.88 99.7979 587.225C81.1165 544.443 70.4948 497.465 69.0615 451.371L70.7893 451.323C72.2029 497.213 82.7854 543.967 101.378 586.554C119.854 628.928 146.938 668.544 179.707 701.109L187.02 702.556L194.667 703.721L206.163 705.314C207.351 705.47 208.48 705.615 209.667 705.712L209.952 705.732L210.168 705.916C231.019 723.825 253.971 739.375 278.365 752.136C278.915 752.428 279.465 752.729 280.015 753.02C280.977 753.545 281.948 754.069 282.93 754.555L296.968 761.198C297.243 761.324 297.528 761.46 297.812 761.596C298.293 761.829 298.784 762.062 299.275 762.266L316.052 769.191L333.113 775.261L350.46 780.476L355.456 781.71C382.178 788.576 409.724 792.403 437.329 793.102C464.531 793.665 492.214 791.043 519.623 785.313C545.725 779.942 572.074 771.114 597.931 759.061L602.633 756.876C602.908 756.749 603.193 756.614 603.478 756.487C603.969 756.264 604.469 756.031 604.95 755.788L619.862 747.989L634.351 739.51L643 733.897C643.825 733.353 644.669 732.809 645.503 732.265C647.516 730.964 649.607 729.624 651.531 728.157C653.052 727.04 654.574 725.952 656.086 724.865C660.091 721.99 664.234 719.018 668.072 715.823L676.171 709.364L683.897 702.566C687.922 699.176 691.74 695.456 695.432 691.853C696.59 690.717 697.758 689.59 698.926 688.464C700.968 686.57 702.902 684.491 704.757 682.491L713.121 673.546C714.525 671.934 715.919 670.273 717.313 668.612C718.128 667.641 718.943 666.67 719.767 665.708L724.754 659.803L726.295 657.783C743.259 636.241 757.739 612.748 769.342 587.943L770.913 588.662C759.25 613.593 744.702 637.193 727.67 658.832L726.109 660.871L721.093 666.815C720.268 667.777 719.453 668.748 718.638 669.719C717.235 671.38 715.831 673.05 714.407 674.692L706.024 683.656C704.139 685.686 702.185 687.784 700.114 689.707C698.956 690.824 697.797 691.95 696.639 693.077C692.918 696.7 689.08 700.448 685.026 703.857L677.28 710.666L669.162 717.134C665.294 720.368 661.122 723.359 657.087 726.244C655.575 727.332 654.054 728.419 652.552 729.517C650.579 731.012 648.468 732.372 646.426 733.693C645.592 734.227 644.757 734.771 643.933 735.315L635.245 740.958L620.686 749.475L605.736 757.303C605.225 757.565 604.705 757.798 604.194 758.032C603.919 758.158 603.635 758.284 603.36 758.42L598.648 760.605C572.673 772.706 546.197 781.583 519.956 786.983C494.875 792.238 469.528 794.889 444.544 794.889Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { d: "M779.717 568.343L778.097 567.731C793.264 528.611 801.422 488.102 802.345 447.35C803.14 406.063 796.73 365.263 783.3 326.084L779.364 315.177C778.932 313.954 778.5 312.749 777.999 311.623L772.041 297.317L765.424 283.36C764.943 282.292 764.383 281.253 763.834 280.243L758.199 269.705C748.195 251.728 736.553 234.508 723.604 218.513C710.646 202.507 696.186 187.521 680.627 173.953C665.342 160.696 648.418 148.488 630.335 137.669L630.1 137.533L626.094 128.656L623.552 123.654C621.274 119.216 618.908 114.719 616.513 110.281C588.761 96.2758 558.997 85.5633 528.034 78.4249C526.591 78.0364 525.109 77.7548 523.686 77.4829C523.214 77.3955 522.733 77.2983 522.262 77.2109L507.714 74.3847L504.818 73.9671C502.992 73.7146 501.166 73.4426 499.33 73.1804C493.45 72.3257 487.363 71.4322 481.346 71.0049L472.471 70.1793C471.382 70.0628 470.439 69.9948 469.566 69.9754L457.697 69.4509C457.01 69.4218 456.313 69.3927 455.616 69.3635C454.369 69.3053 453.073 69.247 451.807 69.2373L434.019 69.3344L416.29 70.2862L398.629 72.0732C396.097 72.4131 393.495 72.8113 390.972 73.1998C389.627 73.4037 388.283 73.6077 386.938 73.8117L381.077 74.6955C379.83 74.8897 378.564 75.1422 377.347 75.3947C376.659 75.5307 375.972 75.6764 375.285 75.8027L363.672 78.1238C361.188 78.6677 358.665 79.3088 356.221 79.9206C354.876 80.2605 353.541 80.6004 352.196 80.9307L345.02 82.7274L329.46 87.4086C328.155 87.7777 326.849 88.2342 325.602 88.6906C325.033 88.8946 324.454 89.0985 323.884 89.2928L318.308 91.2644C312.644 93.1388 307.039 95.4405 301.62 97.6646C299.843 98.393 298.066 99.1215 296.28 99.8402C294.738 100.433 293.207 101.151 291.734 101.831L280.17 107.202C279.866 107.348 279.542 107.493 279.218 107.639C278.649 107.901 278.089 108.154 277.539 108.445L264.434 115.302C264.13 115.467 263.816 115.622 263.511 115.787C262.952 116.079 262.392 116.37 261.842 116.671L246.548 125.626L231.724 135.28L217.372 145.623C216.872 145.982 216.391 146.381 215.9 146.769C215.625 146.992 215.35 147.216 215.075 147.43C213.662 148.566 212.238 149.693 210.815 150.829C206.161 154.519 201.351 158.336 196.904 162.415L192.457 166.329C192.006 166.737 191.544 167.135 191.073 167.543C190.082 168.408 189.051 169.301 188.118 170.243L177.516 180.528C176.731 181.276 176.093 181.908 175.484 182.587L171.449 186.909C170.527 187.91 169.584 188.9 168.652 189.901C166.924 191.736 165.147 193.64 163.429 195.543L152.032 209.034L141.322 223.048C139.859 225.117 138.406 227.224 136.953 229.342C136.187 230.458 135.412 231.585 134.646 232.702L130.484 238.762L122.022 252.505C121.845 252.796 121.659 253.097 121.472 253.399C121.148 253.923 120.814 254.447 120.53 254.982L113.314 268.142C112.441 269.734 111.528 271.376 110.772 273.036L105.638 283.632C105.343 284.254 105.039 284.885 104.734 285.507C104.194 286.614 103.625 287.76 103.144 288.906L96.2821 305.145C95.3888 307.514 94.5151 309.933 93.6414 312.341C93.18 313.604 92.7285 314.866 92.2671 316.129C90.1172 321.665 88.36 327.434 86.6715 333.009C86.1218 334.815 85.5721 336.622 85.0125 338.418L84.1584 341.225C83.9817 341.818 83.8345 342.42 83.6872 343.022C83.6087 343.362 83.5203 343.692 83.432 344.032L79.4954 359.678L76.9333 372.595C76.8056 373.265 76.6682 373.945 76.5308 374.625C76.2854 375.859 76.0399 377.092 75.8141 378.335L73.2716 395.739C73.0065 398.284 72.7611 400.858 72.5157 403.431C72.3881 404.752 72.2703 406.063 72.1427 407.384L71.5929 413.221C71.4653 414.464 71.4162 415.737 71.3671 416.97C71.3377 417.669 71.3083 418.359 71.269 419.058L70.7487 430.771L69.0209 430.693L69.5412 418.971C69.5805 418.281 69.6099 417.592 69.6296 416.912C69.6787 415.659 69.7277 414.357 69.8554 413.066L70.4051 407.229C70.5327 405.908 70.6603 404.597 70.7781 403.286C71.0236 400.702 71.269 398.119 71.534 395.535L74.0864 378.073C74.3122 376.791 74.5576 375.548 74.8128 374.295C74.9503 373.625 75.0877 372.945 75.2153 372.275L77.7971 359.309L81.7435 343.614C81.8318 343.274 81.9104 342.954 81.9987 342.624C82.1558 341.992 82.3129 341.361 82.4896 340.74L83.3535 337.923C83.913 336.126 84.4628 334.32 85.0125 332.523C86.7206 326.919 88.4778 321.111 90.6473 315.537C91.0989 314.293 91.5603 313.031 92.0217 311.768C92.8954 309.35 93.7789 306.922 94.6918 304.513L101.564 288.246C102.064 287.061 102.634 285.886 103.193 284.759C103.497 284.137 103.802 283.526 104.096 282.904L109.221 272.308C110.006 270.608 110.929 268.938 111.822 267.316L119.037 254.156C119.342 253.583 119.685 253.039 120.039 252.486C120.215 252.194 120.402 251.903 120.579 251.611L129.07 237.82L133.262 231.721C134.038 230.604 134.803 229.487 135.569 228.361C137.022 226.243 138.475 224.116 139.967 222.019L150.716 207.946L162.163 194.407C163.9 192.474 165.697 190.561 167.424 188.716C168.357 187.725 169.29 186.725 170.212 185.724L174.247 181.412C174.924 180.664 175.661 179.946 176.358 179.285L186.94 169.02C187.902 168.048 188.953 167.126 189.974 166.242C190.435 165.844 190.887 165.446 191.338 165.038L195.775 161.133C200.252 157.025 205.082 153.189 209.764 149.479C211.188 148.352 212.611 147.216 214.025 146.08C214.309 145.856 214.574 145.643 214.84 145.429C215.35 145.021 215.851 144.613 216.381 144.234L230.762 133.871L245.654 124.169L260.998 115.185C261.577 114.865 262.147 114.564 262.726 114.263C263.03 114.107 263.334 113.942 263.639 113.787L276.754 106.93C277.333 106.629 277.922 106.357 278.521 106.075C278.835 105.93 279.149 105.794 279.454 105.638L291.028 100.268C292.53 99.5683 294.081 98.8398 295.671 98.2279C297.438 97.519 299.215 96.7906 300.992 96.0622C306.44 93.8284 312.075 91.5072 317.778 89.623L323.344 87.6514C323.924 87.4572 324.483 87.2532 325.043 87.0493C326.329 86.5928 327.654 86.1169 329.009 85.7382L344.598 81.0472L351.823 79.2408C353.168 78.9105 354.503 78.5706 355.838 78.2404C358.292 77.6188 360.835 76.9778 363.358 76.4242L375 74.0933C375.688 73.9671 376.365 73.8214 377.042 73.6854C378.289 73.4329 379.575 73.1707 380.861 72.9667L386.722 72.0829C388.067 71.879 389.412 71.675 390.756 71.4711C393.279 71.0826 395.891 70.6843 398.463 70.3444L416.192 68.5477L433.999 67.5959L451.836 67.4988C453.142 67.5085 454.458 67.5668 455.724 67.6348C456.411 67.6639 457.108 67.7028 457.795 67.7222L469.654 68.2466C470.547 68.2661 471.539 68.3438 472.668 68.4603L481.513 69.2858C487.579 69.7229 493.695 70.6164 499.605 71.4711C501.431 71.7333 503.257 72.0052 505.083 72.2577L508.018 72.6851L522.615 75.521C523.087 75.6181 523.558 75.7056 524.029 75.793C525.492 76.0746 527.004 76.366 528.476 76.7642C559.625 83.9414 589.605 94.751 617.554 108.882L617.799 109.008L617.927 109.242C620.371 113.758 622.786 118.351 625.113 122.887L627.665 127.928L628.48 129.695L631.474 136.358C649.556 147.196 666.481 159.414 681.785 172.681C697.413 186.307 711.952 201.371 724.969 217.454C737.986 233.518 749.688 250.834 759.74 268.909L765.385 279.456C765.944 280.495 766.523 281.564 767.014 282.671L773.641 296.647L779.609 310.972C780.13 312.147 780.561 313.371 780.984 314.565L784.95 325.54C798.448 364.923 804.887 405.918 804.092 447.408C803.15 488.344 794.953 529.038 779.717 568.343Z", fill: "#606060" }), /* @__PURE__ */ _.createElement("path", { id: "path-1", opacity: 0.01, fillRule: "evenodd", clipRule: "evenodd", d: "M445 695.178C587.553 695.178 703.089 581.384 703.089 441.044C703.089 300.705 587.553 186.911 445 186.911C302.447 186.911 186.911 300.705 186.911 441.044C186.911 581.384 302.447 695.178 445 695.178ZM445 696.178C588.091 696.178 704.089 581.951 704.089 441.044C704.089 300.138 588.091 185.911 445 185.911C301.909 185.911 185.911 300.138 185.911 441.044C185.911 581.951 301.909 696.178 445 696.178Z", fill: "#CDBDBD" }), /* @__PURE__ */ _.createElement("path", { id: "path-3", opacity: 0.01, d: "M857.367 440.55C857.367 666.382 672.522 849.456 444.506 849.456C216.489 849.456 31.6444 666.382 31.6444 440.55C31.6444 214.718 216.489 31.6445 444.506 31.6445C672.522 31.6445 857.367 214.718 857.367 440.55Z", fill: "#CFCDCD" }), /* @__PURE__ */ _.createElement("path", { opacity: 0.01, d: "M890 440.056C890 683.092 692.538 880.111 448.956 880.111C205.373 880.111 7.9111 683.092 7.9111 440.056C7.9111 197.02 205.373 0 448.956 0C692.538 0 890 197.02 890 440.056Z", fill: "#D9D9D9" }), /* @__PURE__ */ _.createElement("path", { id: "path-2", className: "path-2", opacity: 0.01, d: "M756.5 443.517C756.5 612.003 616.815 748.589 444.506 748.589C272.196 748.589 132.511 612.003 132.511 443.517C132.511 275.03 272.196 138.444 444.506 138.444C616.815 138.444 756.5 275.03 756.5 443.517Z", fill: "#D9D9D9" }));
/*!
 * @gsap/react 2.1.1
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
let dn = typeof window < "u" ? A1 : N1, _n = (s) => s && !Array.isArray(s) && typeof s == "object", lr = [], j2 = {}, S1 = bt;
const Oi = (s, e = lr) => {
  let t = j2;
  _n(s) ? (t = s, s = null, e = "dependencies" in t ? t.dependencies : lr) : _n(e) && (t = e, e = "dependencies" in t ? t.dependencies : lr), s && typeof s != "function" && console.warn("First parameter must be a function or config object");
  const { scope: r, revertOnUpdate: i } = t, n = nt(!1), a = nt(S1.context(() => {
  }, r)), o = nt((l) => a.current.add(null, l)), f = e && e.length && !i;
  return dn(() => {
    if (s && a.current.add(s, r), !f || !n.current)
      return () => a.current.revert();
  }, e), f && dn(() => (n.current = !0, () => a.current.revert()), lr), { context: a.current, contextSafe: o.current };
};
Oi.register = (s) => {
  S1 = s;
};
Oi.headless = !0;
const U2 = () => {
  const s = nt(null), e = nt(null), t = nt(null), r = nt(null);
  Oi(() => {
    var f, l, u;
    const n = (f = s.current) == null ? void 0 : f.querySelector(".red-square"), a = (l = s.current) == null ? void 0 : l.querySelector(".frag-8"), o = (u = s.current) == null ? void 0 : u.querySelector(".frag-7");
    n && (e.current = bt.to(n, {
      motionPath: {
        path: "#path-2",
        // Use the circle's path as the track
        align: "#path-2",
        // Ensure fragment is aligned to path
        alignOrigin: [0.5, 0.5],
        // Center the fragment along its path
        autoRotate: !0
      },
      transformOrigin: "50% 50%",
      duration: 8,
      ease: "power1.out"
    })), a && (t.current = bt.to(a, {
      motionPath: {
        path: "#path-1",
        align: "#path-1",
        alignOrigin: [0.428, 0.68],
        autoRotate: -45.5,
        end: 0.42
      },
      duration: 10,
      ease: "power1.out"
    })), o && (r.current = bt.to(o, {
      motionPath: {
        path: "#path-1",
        align: "#path-1",
        alignOrigin: [0.58, 0.52],
        autoRotate: 108
      },
      duration: 8,
      ease: "power1.out"
    }));
  });
  const i = (n) => {
    var l, u;
    const a = window.innerWidth, f = n.clientX / a < 0.5 ? -1 : 1;
    (l = e.current) == null || l.timeScale(f), (u = t.current) == null || u.timeScale(f);
  };
  return /* @__PURE__ */ O.jsx("div", { onMouseMove: i, children: /* @__PURE__ */ O.jsx(D2, { ref: s }) });
};
export {
  V2 as Card,
  U2 as Circle,
  z2 as EvaBorderPanel,
  Y2 as EvaOptionList,
  B2 as EvaProgressBar,
  F1 as EvaTilePanel,
  I2 as EvaUnitBox,
  $2 as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
