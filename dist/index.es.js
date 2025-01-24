import * as j from "react";
import ks, { useMemo as Ss, createElement as Es, useRef as Li } from "react";
var ir = { exports: {} }, Ne = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Di;
function Ps() {
  if (Di) return Ne;
  Di = 1;
  var a = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, i, n) {
    var s = null;
    if (n !== void 0 && (s = "" + n), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      n = {};
      for (var o in i)
        o !== "key" && (n[o] = i[o]);
    } else n = i;
    return i = n.ref, {
      $$typeof: a,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return Ne.Fragment = t, Ne.jsx = e, Ne.jsxs = e, Ne;
}
var Re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ji;
function Os() {
  return ji || (ji = 1, process.env.NODE_ENV !== "production" && function() {
    function a(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === tt ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case T:
          return "Fragment";
        case b:
          return "Portal";
        case S:
          return "Profiler";
        case k:
          return "StrictMode";
        case A:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case M:
            return (g.displayName || "Context") + ".Provider";
          case C:
            return (g._context.displayName || "Context") + ".Consumer";
          case N:
            var E = g.render;
            return g = g.displayName, g || (g = E.displayName || E.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case I:
            return E = g.displayName || null, E !== null ? E : a(g.type) || "Memo";
          case z:
            E = g._payload, g = g._init;
            try {
              return a(g(E));
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
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var P = E.error, B = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return P.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          B
        ), t(g);
      }
    }
    function r() {
    }
    function i() {
      if (Q === 0) {
        ut = console.log, Qe = console.info, Ke = console.warn, tr = console.error, er = console.group, nt = console.groupCollapsed, Pi = console.groupEnd;
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
          log: X({}, g, { value: ut }),
          info: X({}, g, { value: Qe }),
          warn: X({}, g, { value: Ke }),
          error: X({}, g, { value: tr }),
          group: X({}, g, { value: er }),
          groupCollapsed: X({}, g, { value: nt }),
          groupEnd: X({}, g, { value: Pi })
        });
      }
      0 > Q && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(g) {
      if (Er === void 0)
        try {
          throw Error();
        } catch (P) {
          var E = P.stack.trim().match(/\n( *(at )?)/);
          Er = E && E[1] || "", Oi = -1 < P.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < P.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Er + g + Oi;
    }
    function o(g, E) {
      if (!g || Pr) return "";
      var P = Or.get(g);
      if (P !== void 0) return P;
      Pr = !0, P = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var B = null;
      B = ft.H, ft.H = null, i();
      try {
        var st = {
          DetermineComponentFrameRoot: function() {
            try {
              if (E) {
                var Xt = function() {
                  throw Error();
                };
                if (Object.defineProperty(Xt.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Xt, []);
                  } catch (Bt) {
                    var rr = Bt;
                  }
                  Reflect.construct(g, [], Xt);
                } else {
                  try {
                    Xt.call();
                  } catch (Bt) {
                    rr = Bt;
                  }
                  g.call(Xt.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Bt) {
                  rr = Bt;
                }
                (Xt = g()) && typeof Xt.catch == "function" && Xt.catch(function() {
                });
              }
            } catch (Bt) {
              if (Bt && rr && typeof Bt.stack == "string")
                return [Bt.stack, rr.stack];
            }
            return [null, null];
          }
        };
        st.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var G = Object.getOwnPropertyDescriptor(
          st.DetermineComponentFrameRoot,
          "name"
        );
        G && G.configurable && Object.defineProperty(
          st.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var L = st.DetermineComponentFrameRoot(), Ft = L[0], pe = L[1];
        if (Ft && pe) {
          var ht = Ft.split(`
`), ee = pe.split(`
`);
          for (L = G = 0; G < ht.length && !ht[G].includes(
            "DetermineComponentFrameRoot"
          ); )
            G++;
          for (; L < ee.length && !ee[L].includes(
            "DetermineComponentFrameRoot"
          ); )
            L++;
          if (G === ht.length || L === ee.length)
            for (G = ht.length - 1, L = ee.length - 1; 1 <= G && 0 <= L && ht[G] !== ee[L]; )
              L--;
          for (; 1 <= G && 0 <= L; G--, L--)
            if (ht[G] !== ee[L]) {
              if (G !== 1 || L !== 1)
                do
                  if (G--, L--, 0 > L || ht[G] !== ee[L]) {
                    var Me = `
` + ht[G].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", g.displayName)), typeof g == "function" && Or.set(g, Me), Me;
                  }
                while (1 <= G && 0 <= L);
              break;
            }
        }
      } finally {
        Pr = !1, ft.H = B, n(), Error.prepareStackTrace = P;
      }
      return ht = (ht = g ? g.displayName || g.name : "") ? s(ht) : "", typeof g == "function" && Or.set(g, ht), ht;
    }
    function f(g) {
      if (g == null) return "";
      if (typeof g == "function") {
        var E = g.prototype;
        return o(
          g,
          !(!E || !E.isReactComponent)
        );
      }
      if (typeof g == "string") return s(g);
      switch (g) {
        case A:
          return s("Suspense");
        case R:
          return s("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case N:
            return g = o(g.render, !1), g;
          case I:
            return f(g.type);
          case z:
            E = g._payload, g = g._init;
            try {
              return f(g(E));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var g = ft.A;
      return g === null ? null : g.getOwner();
    }
    function u(g) {
      if (Mt.call(g, "key")) {
        var E = Object.getOwnPropertyDescriptor(g, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function h(g, E) {
      function P() {
        Mi || (Mi = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      P.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: P,
        configurable: !0
      });
    }
    function _() {
      var g = a(this.type);
      return Ni[g] || (Ni[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function d(g, E, P, B, st, G) {
      return P = G.ref, g = {
        $$typeof: w,
        type: g,
        key: E,
        props: G,
        _owner: st
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(g, "ref", {
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
    function p(g, E, P, B, st, G) {
      if (typeof g == "string" || typeof g == "function" || g === T || g === S || g === k || g === A || g === R || g === F || typeof g == "object" && g !== null && (g.$$typeof === z || g.$$typeof === I || g.$$typeof === M || g.$$typeof === C || g.$$typeof === N || g.$$typeof === wt || g.getModuleId !== void 0)) {
        var L = E.children;
        if (L !== void 0)
          if (B)
            if (it(L)) {
              for (B = 0; B < L.length; B++)
                c(L[B], g);
              Object.freeze && Object.freeze(L);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(L, g);
      } else
        L = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? B = "null" : it(g) ? B = "array" : g !== void 0 && g.$$typeof === w ? (B = "<" + (a(g.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : B = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          B,
          L
        );
      if (Mt.call(E, "key")) {
        L = a(g);
        var Ft = Object.keys(E).filter(function(ht) {
          return ht !== "key";
        });
        B = 0 < Ft.length ? "{key: someKey, " + Ft.join(": ..., ") + ": ...}" : "{key: someKey}", Ri[L + B] || (Ft = 0 < Ft.length ? "{" + Ft.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          B,
          L,
          Ft,
          L
        ), Ri[L + B] = !0);
      }
      if (L = null, P !== void 0 && (e(P), L = "" + P), u(E) && (e(E.key), L = "" + E.key), "key" in E) {
        P = {};
        for (var pe in E)
          pe !== "key" && (P[pe] = E[pe]);
      } else P = E;
      return L && h(
        P,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), d(g, L, G, st, l(), P);
    }
    function c(g, E) {
      if (typeof g == "object" && g && g.$$typeof !== Ts) {
        if (it(g))
          for (var P = 0; P < g.length; P++) {
            var B = g[P];
            m(B) && x(B, E);
          }
        else if (m(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? P = null : (P = Y && g[Y] || g["@@iterator"], P = typeof P == "function" ? P : null), typeof P == "function" && P !== g.entries && (P = P.call(g), P !== g))
          for (; !(g = P.next()).done; )
            m(g.value) && x(g.value, E);
      }
    }
    function m(g) {
      return typeof g == "object" && g !== null && g.$$typeof === w;
    }
    function x(g, E) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, E = y(E), !Ai[E])) {
        Ai[E] = !0;
        var P = "";
        g && g._owner != null && g._owner !== l() && (P = null, typeof g._owner.tag == "number" ? P = a(g._owner.type) : typeof g._owner.name == "string" && (P = g._owner.name), P = " It was passed a child from " + P + ".");
        var B = ft.getCurrentStack;
        ft.getCurrentStack = function() {
          var st = f(g.type);
          return B && (st += B() || ""), st;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          E,
          P
        ), ft.getCurrentStack = B;
      }
    }
    function y(g) {
      var E = "", P = l();
      return P && (P = a(P.type)) && (E = `

Check the render method of \`` + P + "`."), E || (g = a(g)) && (E = `

Check the top-level render call using <` + g + ">."), E;
    }
    var v = ks, w = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), M = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), Y = Symbol.iterator, tt = Symbol.for("react.client.reference"), ft = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Mt = Object.prototype.hasOwnProperty, X = Object.assign, wt = Symbol.for("react.client.reference"), it = Array.isArray, Q = 0, ut, Qe, Ke, tr, er, nt, Pi;
    r.__reactDisabledLog = !0;
    var Er, Oi, Pr = !1, Or = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ts = Symbol.for("react.client.reference"), Mi, Ni = {}, Ri = {}, Ai = {};
    Re.Fragment = T, Re.jsx = function(g, E, P, B, st) {
      return p(g, E, P, !1, B, st);
    }, Re.jsxs = function(g, E, P, B, st) {
      return p(g, E, P, !0, B, st);
    };
  }()), Re;
}
var zi;
function Ms() {
  return zi || (zi = 1, process.env.NODE_ENV === "production" ? ir.exports = Ps() : ir.exports = Os()), ir.exports;
}
var O = Ms();
const Ra = ({
  children: a,
  mode: t = "warning",
  pulseAnimation: e = !0
}) => /* @__PURE__ */ O.jsx("div", { className: `piece ${e && "animate-pulse"}`, children: /* @__PURE__ */ O.jsx(
  "div",
  {
    className: `glowedBorder ${t === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${t} label`,
    children: a
  }
) }), Aa = ({ barsCount: a, currentBarIndex: t }) => {
  function e() {
    const r = [];
    for (let i = 0; i < a; i++)
      r.push(
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < t ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ O.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${a * 10}px` }, children: [
    /* @__PURE__ */ O.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ O.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ O.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ O.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ O.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ O.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: e() }),
    /* @__PURE__ */ O.jsx("div", { className: "h-[15px]" })
  ] });
}, La = ({ unitNumber: a, subjectName: t }) => /* @__PURE__ */ O.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ O.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ O.jsx("div", { className: "text-2xl font-[600] label", children: a }),
  /* @__PURE__ */ O.jsx("div", { className: "text-xl font-[400] label", children: t })
] }), Ns = ({
  rowsCount: a,
  tilesPerRowCount: t,
  animationActive: e = !1
}) => {
  function r() {
    return Array(a).fill(null).map((i, n) => /* @__PURE__ */ O.jsx("div", { className: "hex-row rotate-method", children: Array(t).fill(null).map((s, o) => /* @__PURE__ */ O.jsx("div", { className: `hex ${e ? "animation-active" : ""}` }, o)) }, n));
  }
  return /* @__PURE__ */ O.jsx("div", { className: "piece rotateMethod", children: r() });
}, Rs = (a) => Ss(() => {
  const t = (n, s) => {
    const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return o[(n + s) % o.length];
  }, e = (n, s) => (n % s).toString(), r = `U-${e(a * 3, 9)}`, i = `${t(a, 20)}${e(a * 7, 99)}`;
  return `${r}${i}`;
}, [a]), As = ({ title: a, sciFiCode: t, isActive: e }) => {
  const r = Rs(t);
  return /* @__PURE__ */ O.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ O.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${e ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ O.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ O.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${e ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ O.jsx(
                "div",
                {
                  className: `font-bold w-full ${e ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: a
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
            ${e ? "bg-white" : "dark:group-hover:bg-[#0F172A] group-hover:bg-white"}
          `
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Da = ({ options: a, width: t = "w-full" }) => /* @__PURE__ */ O.jsx("div", { className: `flex flex-col gap-2 ${t}`, children: a.map((e, r) => /* @__PURE__ */ Es(As, { ...e, key: r, sciFiCode: r })) }), Fi = () => /* @__PURE__ */ O.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
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
function Vt(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function hn(a, t) {
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
var bt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ke = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, fi, at, U, St = 1e8, W = 1 / St, $r = Math.PI * 2, Ls = $r / 4, Ds = 0, cn = Math.sqrt, js = Math.cos, zs = Math.sin, rt = function(t) {
  return typeof t == "string";
}, H = function(t) {
  return typeof t == "function";
}, Wt = function(t) {
  return typeof t == "number";
}, ui = function(t) {
  return typeof t > "u";
}, zt = function(t) {
  return typeof t == "object";
}, _t = function(t) {
  return t !== !1;
}, hi = function() {
  return typeof window < "u";
}, nr = function(t) {
  return H(t) || rt(t);
}, _n = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, lt = Array.isArray, Yr = /(?:-?\.?\d|\.)+/gi, dn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, xe = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Mr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, pn = /[+-]=-?[.\d]+/, gn = /[^,'"\[\]\s]+/gi, Fs = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Z, At, Wr, ci, Ct = {}, cr = {}, mn, xn = function(t) {
  return (cr = ce(t, Ct)) && mt;
}, _i = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Ye = function(t, e) {
  return !e && console.warn(t);
}, yn = function(t, e) {
  return t && (Ct[t] = e) && cr && (cr[t] = e) || Ct;
}, We = function() {
  return 0;
}, Bs = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, ar = {
  suppressEvents: !0,
  kill: !1
}, Vs = {
  suppressEvents: !0
}, di = {}, Ht = [], Ur = {}, vn, xt = {}, Nr = {}, Bi = 30, lr = [], pi = "", gi = function(t) {
  var e = t[0], r, i;
  if (zt(e) || H(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = lr.length; i-- && !lr[i].targetTest(e); )
      ;
    r = lr[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Wn(t[i], r))) || t.splice(i, 1);
  return t;
}, oe = function(t) {
  return t._gsap || gi(Et(t))[0]._gsap;
}, bn = function(t, e, r) {
  return (r = t[e]) && H(r) ? t[e]() : ui(r) && t.getAttribute && t.getAttribute(e) || r;
}, dt = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, J = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, et = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, be = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Is = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, _r = function() {
  var t = Ht.length, e = Ht.slice(0), r, i;
  for (Ur = {}, Ht.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Cn = function(t, e, r, i) {
  Ht.length && !at && _r(), t.render(e, r, at && e < 0 && (t._initted || t._startAt)), Ht.length && !at && _r();
}, wn = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(gn).length < 2 ? e : rt(t) ? t.trim() : t;
}, Tn = function(t) {
  return t;
}, Ot = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, $s = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, ce = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Vi = function a(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = zt(e[r]) ? a(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, dr = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, Be = function(t) {
  var e = t.parent || Z, r = t.keyframes ? $s(lt(t.keyframes)) : Ot;
  if (_t(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, Ys = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, kn = function(t, e, r, i, n) {
  var s = t[i], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, wr = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Qt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, ae = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Ws = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Xr = function(t, e, r, i) {
  return t._startAt && (at ? t._startAt.revert(ar) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Us = function a(t) {
  return !t || t._ts && a(t.parent);
}, Ii = function(t) {
  return t._repeat ? Se(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Se = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, pr = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Tr = function(t) {
  return t._end = et(t._start + (t._tDur / Math.abs(t._ts || t._rts || W) || 0));
}, kr = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = et(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Tr(t), r._dirty || ae(r, t)), t;
}, Sn = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = pr(t.rawTime(), e), (!e._dur || Je(0, e.totalDuration(), r) - e._tTime > W) && e.render(r, !0)), ae(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -W;
  }
}, Lt = function(t, e, r, i) {
  return e.parent && Qt(e), e._start = et((Wt(r) ? r : r || t !== Z ? Tt(t, r, e) : t._time) + e._delay), e._end = et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), kn(t, e, "_first", "_last", t._sort ? "_start" : 0), Gr(e) || (t._recent = e), i || Sn(t, e), t._ts < 0 && kr(t, t._tTime), t;
}, En = function(t, e) {
  return (Ct.ScrollTrigger || _i("scrollTrigger", e)) && Ct.ScrollTrigger.create(e, t);
}, Pn = function(t, e, r, i, n) {
  if (xi(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !at && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && vn !== yt.frame)
    return Ht.push(t), t._lazy = [n, i], 1;
}, Xs = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, Gr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Gs = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Xs(t) && !(!t._initted && Gr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Gr(t)) ? 0 : 1, o = t._rDelay, f = 0, l, u, h;
  if (o && t._repeat && (f = Je(0, t._tDur, e), u = Se(f, o), t._yoyo && u & 1 && (s = 1 - s), u !== Se(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || at || i || t._zTime === W || !e && t._zTime) {
    if (!t._initted && Pn(t, e, i, r, f))
      return;
    for (h = t._zTime, t._zTime = e || (r ? W : 0), r || (r = e && !h), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = f, l = t._pt; l; )
      l.r(s, l.d), l = l._next;
    e < 0 && Xr(t, e, r, !0), t._onUpdate && !r && vt(t, "onUpdate"), f && t._repeat && !r && t.parent && vt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Qt(t, 1), !r && !at && (vt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Zs = function(t, e, r) {
  var i;
  if (r > e)
    for (i = t._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > e)
        return i;
      i = i._next;
    }
  else
    for (i = t._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < e)
        return i;
      i = i._prev;
    }
}, Ee = function(t, e, r, i) {
  var n = t._repeat, s = et(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : et(s * (n + 1) + t._rDelay * n) : s, o > 0 && !i && kr(t, t._tTime = t._tDur * o), t.parent && Tr(t), r || ae(t.parent, t), t;
}, $i = function(t) {
  return t instanceof ct ? ae(t) : Ee(t, t._dur);
}, qs = {
  _start: 0,
  endTime: We,
  totalDuration: We
}, Tt = function a(t, e, r) {
  var i = t.labels, n = t._recent || qs, s = t.duration() >= St ? n.endTime(!1) : t._dur, o, f, l;
  return rt(e) && (isNaN(e) || e in i) ? (f = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), f === "<" || f === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = s), i[e]) : (f = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && r && (f = f / 100 * (lt(r) ? r[0] : r).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), r) + f : s + f)) : e == null ? s : +e;
}, Ve = function(t, e, r) {
  var i = Wt(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, f;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (o = s, f = r; f && !("immediateRender" in o); )
      o = f.vars.defaults || {}, f = _t(f.vars.inherit) && f.parent;
    s.immediateRender = _t(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new K(e[0], s, e[n + 1]);
}, te = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Je = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, ot = function(t, e) {
  return !rt(t) || !(e = Fs.exec(t)) ? "" : e[1];
}, Hs = function(t, e, r) {
  return te(r, function(i) {
    return Je(t, e, i);
  });
}, Zr = [].slice, On = function(t, e) {
  return t && zt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && zt(t[0])) && !t.nodeType && t !== At;
}, Js = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return rt(i) && !e || On(i, 1) ? (n = r).push.apply(n, Et(i)) : r.push(i);
  }) || r;
}, Et = function(t, e, r) {
  return U && !e && U.selector ? U.selector(t) : rt(t) && !r && (Wr || !Pe()) ? Zr.call((e || ci).querySelectorAll(t), 0) : lt(t) ? Js(t, r) : On(t) ? Zr.call(t, 0) : t ? [t] : [];
}, qr = function(t) {
  return t = Et(t)[0] || Ye("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Et(e, r.querySelectorAll ? r : r === t ? Ye("Invalid scope") || ci.createElement("div") : t);
  };
}, Mn = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Nn = function(t) {
  if (H(t))
    return t;
  var e = zt(t) ? t : {
    each: t
  }, r = le(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = i > 0 && i < 1, f = isNaN(i) || o, l = e.axis, u = i, h = i;
  return rt(i) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && f && (u = i[0], h = i[1]), function(_, d, p) {
    var c = (p || e).length, m = s[c], x, y, v, w, b, T, k, S, C;
    if (!m) {
      if (C = e.grid === "auto" ? 0 : (e.grid || [1, St])[1], !C) {
        for (k = -St; k < (k = p[C++].getBoundingClientRect().left) && C < c; )
          ;
        C < c && C--;
      }
      for (m = s[c] = [], x = f ? Math.min(C, c) * u - 0.5 : i % C, y = C === St ? 0 : f ? c * h / C - 0.5 : i / C | 0, k = 0, S = St, T = 0; T < c; T++)
        v = T % C - x, w = y - (T / C | 0), m[T] = b = l ? Math.abs(l === "y" ? w : v) : cn(v * v + w * w), b > k && (k = b), b < S && (S = b);
      i === "random" && Mn(m), m.max = k - S, m.min = S, m.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (C > c ? c - 1 : l ? l === "y" ? c / C : C : Math.max(C, c / C)) || 0) * (i === "edges" ? -1 : 1), m.b = c < 0 ? n - c : n, m.u = ot(e.amount || e.each) || 0, r = r && c < 0 ? In(r) : r;
    }
    return c = (m[_] - m.min) / m.max || 0, et(m.b + (r ? r(c) : c) * m.v) + m.u;
  };
}, Hr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = et(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Wt(r) ? 0 : ot(r));
  };
}, Rn = function(t, e) {
  var r = lt(t), i, n;
  return !r && zt(t) && (i = r = t.radius || St, t.values ? (t = Et(t.values), (n = !Wt(t[0])) && (i *= i)) : t = Hr(t.increment)), te(e, r ? H(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), f = parseFloat(n ? s.y : 0), l = St, u = 0, h = t.length, _, d; h--; )
      n ? (_ = t[h].x - o, d = t[h].y - f, _ = _ * _ + d * d) : _ = Math.abs(t[h] - o), _ < l && (l = _, u = h);
    return u = !i || l <= i ? t[u] : s, n || u === s || Wt(s) ? u : u + ot(s);
  } : Hr(t));
}, An = function(t, e, r, i) {
  return te(lt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return lt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, Qs = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, Ks = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || ot(r));
  };
}, to = function(t, e, r) {
  return Dn(t, e, 0, 1, r);
}, Ln = function(t, e, r) {
  return te(r, function(i) {
    return t[~~e(i)];
  });
}, eo = function a(t, e, r) {
  var i = e - t;
  return lt(t) ? Ln(t, a(0, t.length), e) : te(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, ro = function a(t, e, r) {
  var i = e - t, n = i * 2;
  return lt(t) ? Ln(t, a(0, t.length - 1), e) : te(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, Ue = function(t) {
  for (var e = 0, r = "", i, n, s, o; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), o = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(o ? gn : Yr), r += t.substr(e, i - e) + An(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, Dn = function(t, e, r, i, n) {
  var s = e - t, o = i - r;
  return te(n, function(f) {
    return r + ((f - t) / s * o || 0);
  });
}, io = function a(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = rt(t), o = {}, f, l, u, h, _;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (lt(t) && !lt(e)) {
      for (u = [], h = t.length, _ = h - 2, l = 1; l < h; l++)
        u.push(a(t[l - 1], t[l]));
      h--, n = function(p) {
        p *= h;
        var c = Math.min(_, ~~p);
        return u[c](p - c);
      }, r = e;
    } else i || (t = ce(lt(t) ? [] : {}, t));
    if (!u) {
      for (f in e)
        mi.call(o, t, f, "get", e[f]);
      n = function(p) {
        return bi(p, o) || (s ? t.p : t);
      };
    }
  }
  return te(r, n);
}, Yi = function(t, e, r) {
  var i = t.labels, n = St, s, o, f;
  for (s in i)
    o = i[s] - e, o < 0 == !!r && o && n > (o = Math.abs(o)) && (f = s, n = o);
  return f;
}, vt = function(t, e, r) {
  var i = t.vars, n = i[e], s = U, o = t._ctx, f, l, u;
  if (n)
    return f = i[e + "Params"], l = i.callbackScope || t, r && Ht.length && _r(), o && (U = o), u = f ? n.apply(l, f) : n.call(l), U = s, u;
}, De = function(t) {
  return Qt(t), t.scrollTrigger && t.scrollTrigger.kill(!!at), t.progress() < 1 && vt(t, "onInterrupt"), t;
}, ye, jn = [], zn = function(t) {
  if (t)
    if (t = !t.name && t.default || t, hi() || t.headless) {
      var e = t.name, r = H(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: We,
        render: bi,
        add: mi,
        kill: vo,
        modifier: yo,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: vi,
        aliases: {},
        register: 0
      };
      if (Pe(), t !== i) {
        if (xt[e])
          return;
        Ot(i, Ot(dr(t, n), s)), ce(i.prototype, ce(n, dr(t, s))), xt[i.prop = e] = i, t.targetTest && (lr.push(i), di[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      yn(e, i), t.register && t.register(mt, i, pt);
    } else
      jn.push(t);
}, $ = 255, je = {
  aqua: [0, $, $],
  lime: [0, $, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, $],
  navy: [0, 0, 128],
  white: [$, $, $],
  olive: [128, 128, 0],
  yellow: [$, $, 0],
  orange: [$, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [$, 0, 0],
  pink: [$, 192, 203],
  cyan: [0, $, $],
  transparent: [$, $, $, 0]
}, Rr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * $ + 0.5 | 0;
}, Fn = function(t, e, r) {
  var i = t ? Wt(t) ? [t >> 16, t >> 8 & $, t & $] : 0 : je.black, n, s, o, f, l, u, h, _, d, p;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), je[t])
      i = je[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & $, i & $, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & $, t & $];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = p = t.match(Yr), !e)
        f = +i[0] % 360 / 360, l = +i[1] / 100, u = +i[2] / 100, s = u <= 0.5 ? u * (l + 1) : u + l - u * l, n = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Rr(f + 1 / 3, n, s), i[1] = Rr(f, n, s), i[2] = Rr(f - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(dn), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(Yr) || je.transparent;
    i = i.map(Number);
  }
  return e && !p && (n = i[0] / $, s = i[1] / $, o = i[2] / $, h = Math.max(n, s, o), _ = Math.min(n, s, o), u = (h + _) / 2, h === _ ? f = l = 0 : (d = h - _, l = u > 0.5 ? d / (2 - h - _) : d / (h + _), f = h === n ? (s - o) / d + (s < o ? 6 : 0) : h === s ? (o - n) / d + 2 : (n - s) / d + 4, f *= 60), i[0] = ~~(f + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Bn = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Jt).forEach(function(n) {
    var s = n.match(xe) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, Wi = function(t, e, r) {
  var i = "", n = (t + i).match(Jt), s = e ? "hsla(" : "rgba(", o = 0, f, l, u, h;
  if (!n)
    return t;
  if (n = n.map(function(_) {
    return (_ = Fn(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (u = Bn(t), f = r.c, f.join(i) !== u.c.join(i)))
    for (l = t.replace(Jt, "1").split(xe), h = l.length - 1; o < h; o++)
      i += l[o] + (~f.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!l)
    for (l = t.split(Jt), h = l.length - 1; o < h; o++)
      i += l[o] + n[o];
  return i + l[h];
}, Jt = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in je)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), no = /hsl[a]?\(/, Vn = function(t) {
  var e = t.join(" "), r;
  if (Jt.lastIndex = 0, Jt.test(e))
    return r = no.test(e), t[1] = Wi(t[1], r), t[0] = Wi(t[0], r, Bn(t[1])), !0;
}, Xe, yt = function() {
  var a = Date.now, t = 500, e = 33, r = a(), i = r, n = 1e3 / 240, s = n, o = [], f, l, u, h, _, d, p = function c(m) {
    var x = a() - i, y = m === !0, v, w, b, T;
    if ((x > t || x < 0) && (r += x - e), i += x, b = i - r, v = b - s, (v > 0 || y) && (T = ++h.frame, _ = b - h.time * 1e3, h.time = b = b / 1e3, s += v + (v >= n ? 4 : n - v), w = 1), y || (f = l(c)), w)
      for (d = 0; d < o.length; d++)
        o[d](b, _, T, m);
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
      mn && (!Wr && hi() && (At = Wr = window, ci = At.document || {}, Ct.gsap = mt, (At.gsapVersions || (At.gsapVersions = [])).push(mt.version), xn(cr || At.GreenSockGlobals || !At.gsap && At || {}), jn.forEach(zn)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && h.sleep(), l = u || function(m) {
        return setTimeout(m, s - h.time * 1e3 + 1 | 0);
      }, Xe = 1, p(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(f), Xe = 0, l = We;
    },
    lagSmoothing: function(m, x) {
      t = m || 1 / 0, e = Math.min(x || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = h.time * 1e3 + n;
    },
    add: function(m, x, y) {
      var v = x ? function(w, b, T, k) {
        m(w, b, T, k), h.remove(v);
      } : m;
      return h.remove(m), o[y ? "unshift" : "push"](v), Pe(), v;
    },
    remove: function(m, x) {
      ~(x = o.indexOf(m)) && o.splice(x, 1) && d >= x && d--;
    },
    _listeners: o
  }, h;
}(), Pe = function() {
  return !Xe && yt.wake();
}, D = {}, so = /^[\d.\-M][\d.\-,\s]/, oo = /["']/g, ao = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, f, l; n < s; n++)
    f = r[n], o = n !== s - 1 ? f.lastIndexOf(",") : f.length, l = f.substr(0, o), e[i] = isNaN(l) ? l.replace(oo, "").trim() : +l, i = f.substr(o + 1).trim();
  return e;
}, lo = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, fo = function(t) {
  var e = (t + "").split("("), r = D[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ao(e[1])] : lo(t).split(",").map(wn)) : D._CE && so.test(t) ? D._CE("", t) : r;
}, In = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, $n = function a(t, e) {
  for (var r = t._first, i; r; )
    r instanceof ct ? a(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? a(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, le = function(t, e) {
  return t && (H(t) ? t : D[t] || fo(t)) || e;
}, de = function(t, e, r, i) {
  r === void 0 && (r = function(f) {
    return 1 - e(1 - f);
  }), i === void 0 && (i = function(f) {
    return f < 0.5 ? e(f * 2) / 2 : 1 - e((1 - f) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, s;
  return dt(t, function(o) {
    D[o] = Ct[o] = n, D[s = o.toLowerCase()] = r;
    for (var f in n)
      D[s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = D[o + "." + f] = n[f];
  }), n;
}, Yn = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Ar = function a(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / $r * (Math.asin(1 / i) || 0), o = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * zs((u - s) * n) + 1;
  }, f = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : Yn(o);
  return n = $r / n, f.config = function(l, u) {
    return a(t, l, u);
  }, f;
}, Lr = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Yn(r);
  return i.config = function(n) {
    return a(t, n);
  }, i;
};
dt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  de(a + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
D.Linear.easeNone = D.none = D.Linear.easeIn;
de("Elastic", Ar("in"), Ar("out"), Ar());
(function(a, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(o) {
    return o < e ? a * o * o : o < r ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  de("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
de("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
de("Circ", function(a) {
  return -(cn(1 - a * a) - 1);
});
de("Sine", function(a) {
  return a === 1 ? 1 : -js(a * Ls) + 1;
});
de("Back", Lr("in"), Lr("out"), Lr());
D.SteppedEase = D.steps = Ct.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - W;
    return function(o) {
      return ((i * Je(0, s, o) | 0) + n) * r;
    };
  }
};
ke.ease = D["quad.out"];
dt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return pi += a + "," + a + "Params,";
});
var Wn = function(t, e) {
  this.id = Ds++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : bn, this.set = e ? e.getSetter : vi;
}, Ge = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Ee(this, +e.duration, 1, 1), this.data = e.data, U && (this._ctx = U, U.data.push(this)), Xe || yt.wake();
  }
  var t = a.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Ee(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (Pe(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (kr(this, r), !n._dp || n.parent || Sn(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Lt(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === W || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Cn(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Ii(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Ii(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Se(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -W ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? pr(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -W ? 0 : this._rts, this.totalTime(Je(-Math.abs(this._delay), this._tDur, n), i !== !1), Tr(this), Ws(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Pe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== W && (this._tTime -= W)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Lt(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (_t(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? pr(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Vs);
    var i = at;
    return at = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), at = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, $i(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, $i(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(Tt(this, r), _t(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, _t(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -W : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -W, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - W);
  }, t.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = H(r) ? r : Tn, o = function() {
        var l = i.then;
        i.then = null, H(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, t.kill = function() {
    De(this);
  }, a;
}();
Ot(Ge.prototype, {
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
  _zTime: -W,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ct = /* @__PURE__ */ function(a) {
  hn(t, a);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = a.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = _t(r.sortChildren), Z && Lt(r.parent || Z, Vt(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && En(Vt(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return Ve(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return Ve(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, o) {
    return Ve(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, Be(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new K(i, n, Tt(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return Lt(this, K.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, o, f, l, u) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = u, s.parent = this, new K(i, s, Tt(this, f)), this;
  }, e.staggerFrom = function(i, n, s, o, f, l, u) {
    return s.runBackwards = 1, Be(s).immediateRender = _t(s.immediateRender), this.staggerTo(i, n, s, o, f, l, u);
  }, e.staggerFromTo = function(i, n, s, o, f, l, u, h) {
    return o.startAt = s, Be(o).immediateRender = _t(o.immediateRender), this.staggerTo(i, n, o, f, l, u, h);
  }, e.render = function(i, n, s) {
    var o = this._time, f = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = i <= 0 ? 0 : et(i), h = this._zTime < 0 != i < 0 && (this._initted || !l), _, d, p, c, m, x, y, v, w, b, T, k;
    if (this !== Z && u > f && i >= 0 && (u = f), u !== this._tTime || s || h) {
      if (o !== this._time && l && (u += this._time - o, i += this._time - o), _ = u, w = this._start, v = this._ts, x = !v, h && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (_ = et(u % m), u === f ? (c = this._repeat, _ = l) : (c = ~~(u / m), c && c === u / m && (_ = l, c--), _ > l && (_ = l)), b = Se(this._tTime, m), !o && this._tTime && b !== c && this._tTime - b * m - this._dur <= 0 && (b = c), T && c & 1 && (_ = l - _, k = 1), c !== b && !this._lock) {
          var S = T && b & 1, C = S === (T && c & 1);
          if (c < b && (S = !S), o = S ? 0 : u % l ? l : u, this._lock = 1, this.render(o || (k ? 0 : et(c * m)), n, !l)._lock = 0, this._tTime = u, !n && this.parent && vt(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), o && o !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, f = this._tDur, C && (this._lock = 2, o = S ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !x)
            return this;
          $n(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Zs(this, et(o), et(_)), y && (u -= _ - (_ = y._start))), this._tTime = u, this._time = _, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && _ && !n && !c && (vt(this, "onStart"), this._tTime !== u))
        return this;
      if (_ >= o && i >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s), _ !== this._time || !this._ts && !x) {
              y = 0, p && (u += this._zTime = -W);
              break;
            }
          }
          d = p;
        }
      else {
        d = this._last;
        for (var M = i < 0 ? i : _; d; ) {
          if (p = d._prev, (d._act || M <= d._end) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (M - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (M - d._start) * d._ts, n, s || at && (d._initted || d._startAt)), _ !== this._time || !this._ts && !x) {
              y = 0, p && (u += this._zTime = M ? -W : W);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(_ >= o ? 0 : -W)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = w, Tr(this), this.render(i, n, s);
      this._onUpdate && !n && vt(this, "onUpdate", !0), (u === f && this._tTime >= this.totalDuration() || !u && o) && (w === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (u === f && this._ts > 0 || !u && this._ts < 0) && Qt(this, 1), !n && !(i < 0 && !o) && (u || o || !f) && (vt(this, u === f && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < f && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (Wt(n) || (n = Tt(this, n, i)), !(i instanceof Ge)) {
      if (lt(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (rt(i))
        return this.addLabel(i, n);
      if (H(i))
        i = K.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Lt(this, i, n) : this;
  }, e.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -St);
    for (var f = [], l = this._first; l; )
      l._start >= o && (l instanceof K ? n && f.push(l) : (s && f.push(l), i && f.push.apply(f, l.getChildren(!0, n, s)))), l = l._next;
    return f;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return rt(i) ? this.removeLabel(i) : H(i) ? this.killTweensOf(i) : (wr(this, i), i === this._recent && (this._recent = this._last), ae(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = et(yt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = Tt(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var o = K.delayedCall(0, n || We, s);
    return o.data = "isPause", this._hasPause = 1, Lt(this, o, Tt(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = Tt(this, i); n; )
      n._start === i && n.data === "isPause" && Qt(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var o = this.getTweensOf(i, s), f = o.length; f--; )
      Gt !== o[f] && o[f].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], o = Et(i), f = this._first, l = Wt(n), u; f; )
      f instanceof K ? Is(f._targets, o) && (l ? (!Gt || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && s.push(f) : (u = f.getTweensOf(o, n)).length && s.push.apply(s, u), f = f._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = Tt(s, i), f = n, l = f.startAt, u = f.onStart, h = f.onStartParams, _ = f.immediateRender, d, p = K.to(s, Ot({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || W,
      onStart: function() {
        if (s.pause(), !d) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          p._dur !== m && Ee(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        u && u.apply(p, h || []);
      }
    }, n));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, Ot({
      startAt: {
        time: Tt(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Yi(this, Tt(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Yi(this, Tt(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + W);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, f = this.labels, l; o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in f)
        f[l] >= s && (f[l] += i);
    return ae(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return a.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), ae(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, o = s._last, f = St, l, u, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (h = s.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), u = o._start, u > f && s._sort && o._ts && !s._lock ? (s._lock = 1, Lt(s, o, u - o._delay, 1)._lock = 0) : f = u, u < 0 && o._ts && (n -= u, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, !1, -1 / 0), f = 0), o._end > n && o._ts && (n = o._end), o = l;
      Ee(s, s === Z && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (Z._ts && (Cn(Z, pr(i, Z)), vn = yt.frame), yt.frame >= Bi) {
      Bi += bt.autoSleep || 120;
      var n = Z._first;
      if ((!n || !n._ts) && bt.autoSleep && yt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || yt.sleep();
      }
    }
  }, t;
}(Ge);
Ot(ct.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var uo = function(t, e, r, i, n, s, o) {
  var f = new pt(this._pt, t, e, 0, 1, Hn, null, n), l = 0, u = 0, h, _, d, p, c, m, x, y;
  for (f.b = r, f.e = i, r += "", i += "", (x = ~i.indexOf("random(")) && (i = Ue(i)), s && (y = [r, i], s(y, t, e), r = y[0], i = y[1]), _ = r.match(Mr) || []; h = Mr.exec(i); )
    p = h[0], c = i.substring(l, h.index), d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1), p !== _[u++] && (m = parseFloat(_[u - 1]) || 0, f._pt = {
      _next: f._pt,
      p: c || u === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? be(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, l = Mr.lastIndex);
  return f.c = l < i.length ? i.substring(l, i.length) : "", f.fp = o, (pn.test(i) || x) && (f.e = 0), this._pt = f, f;
}, mi = function(t, e, r, i, n, s, o, f, l, u) {
  H(i) && (i = i(n || 0, t, s));
  var h = t[e], _ = r !== "get" ? r : H(h) ? l ? t[e.indexOf("set") || !H(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h, d = H(h) ? l ? go : Zn : yi, p;
  if (rt(i) && (~i.indexOf("random(") && (i = Ue(i)), i.charAt(1) === "=" && (p = be(_, i) + (ot(_) || 0), (p || p === 0) && (i = p))), !u || _ !== i || Jr)
    return !isNaN(_ * i) && i !== "" ? (p = new pt(this._pt, t, e, +_ || 0, i - (_ || 0), typeof h == "boolean" ? xo : qn, 0, d), l && (p.fp = l), o && p.modifier(o, this, t), this._pt = p) : (!h && !(e in t) && _i(e, i), uo.call(this, t, e, _, i, d, f || bt.stringFilter, l));
}, ho = function(t, e, r, i, n) {
  if (H(t) && (t = Ie(t, n, e, r, i)), !zt(t) || t.style && t.nodeType || lt(t) || _n(t))
    return rt(t) ? Ie(t, n, e, r, i) : t;
  var s = {}, o;
  for (o in t)
    s[o] = Ie(t[o], n, e, r, i);
  return s;
}, Un = function(t, e, r, i, n, s) {
  var o, f, l, u;
  if (xt[t] && (o = new xt[t]()).init(n, o.rawVars ? e[t] : ho(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = f = new pt(r._pt, n, t, 0, 1, o.render, o, 0, o.priority), r !== ye))
    for (l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length; u--; )
      l[o._props[u]] = f;
  return o;
}, Gt, Jr, xi = function a(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, o = i.immediateRender, f = i.lazy, l = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, _ = i.keyframes, d = i.autoRevert, p = t._dur, c = t._startAt, m = t._targets, x = t.parent, y = x && x.data === "nested" ? x.vars.targets : m, v = t._overwrite === "auto" && !fi, w = t.timeline, b, T, k, S, C, M, N, A, R, I, z, F, Y;
  if (w && (!_ || !n) && (n = "none"), t._ease = le(n, ke.ease), t._yEase = h ? In(le(h === !0 ? n : h, ke.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), t._from = !w && !!i.runBackwards, !w || _ && !i.stagger) {
    if (A = m[0] ? oe(m[0]).harness : 0, F = A && i[A.prop], b = dr(i, di), c && (c._zTime < 0 && c.progress(1), e < 0 && u && o && !d ? c.render(-1, !0) : c.revert(u && p ? ar : Bs), c._lazy = 0), s) {
      if (Qt(t._startAt = K.set(m, Ot({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: !c && _t(f),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return vt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (at || !o && !d) && t._startAt.revert(ar), o && p && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (u && p && !c) {
      if (e && (o = !1), k = Ot({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !c && _t(f),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), F && (k[A.prop] = F), Qt(t._startAt = K.set(m, k)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (at ? t._startAt.revert(ar) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, W, W);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, f = p && _t(f) || f && !p, T = 0; T < m.length; T++) {
      if (C = m[T], N = C._gsap || gi(m)[T]._gsap, t._ptLookup[T] = I = {}, Ur[N.id] && Ht.length && _r(), z = y === m ? T : y.indexOf(C), A && (R = new A()).init(C, F || b, t, z, y) !== !1 && (t._pt = S = new pt(t._pt, C, R.name, 0, 1, R.render, R, 0, R.priority), R._props.forEach(function(tt) {
        I[tt] = S;
      }), R.priority && (M = 1)), !A || F)
        for (k in b)
          xt[k] && (R = Un(k, b, t, z, C, y)) ? R.priority && (M = 1) : I[k] = S = mi.call(t, C, k, "get", b[k], z, y, 0, i.stringFilter);
      t._op && t._op[T] && t.kill(C, t._op[T]), v && t._pt && (Gt = t, Z.killTweensOf(C, I, t.globalTime(e)), Y = !t.parent, Gt = 0), t._pt && f && (Ur[N.id] = 1);
    }
    M && Jn(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !Y, _ && e <= 0 && w.render(St, !0, !0);
}, co = function(t, e, r, i, n, s, o, f) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, _, d;
  if (!l)
    for (l = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length; d--; ) {
      if (u = _[d][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return Jr = 1, t.vars[e] = "+=0", xi(t, o), Jr = 0, f ? Ye(e + " not eligible for reset") : 1;
      l.push(u);
    }
  for (d = l.length; d--; )
    h = l[d], u = h._pt || h, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c, u.c = r - u.s, h.e && (h.e = J(r) + ot(h.e)), h.b && (h.b = u.s + ot(h.b));
}, _o = function(t, e) {
  var r = t[0] ? oe(t[0]).harness : 0, i = r && r.aliases, n, s, o, f;
  if (!i)
    return e;
  n = ce({}, e);
  for (s in i)
    if (s in n)
      for (f = i[s].split(","), o = f.length; o--; )
        n[f[o]] = n[s];
  return n;
}, po = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, o;
  if (lt(e))
    o = r[t] || (r[t] = []), e.forEach(function(f, l) {
      return o.push({
        t: l / (e.length - 1) * 100,
        v: f,
        e: n
      });
    });
  else
    for (s in e)
      o = r[s] || (r[s] = []), s === "ease" || o.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, Ie = function(t, e, r, i, n) {
  return H(t) ? t.call(e, r, i, n) : rt(t) && ~t.indexOf("random(") ? Ue(t) : t;
}, Xn = pi + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Gn = {};
dt(Xn + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Gn[a] = 1;
});
var K = /* @__PURE__ */ function(a) {
  hn(t, a);
  function t(r, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Be(i)) || this;
    var f = o.vars, l = f.duration, u = f.delay, h = f.immediateRender, _ = f.stagger, d = f.overwrite, p = f.keyframes, c = f.defaults, m = f.scrollTrigger, x = f.yoyoEase, y = i.parent || Z, v = (lt(r) || _n(r) ? Wt(r[0]) : "length" in i) ? [r] : Et(r), w, b, T, k, S, C, M, N;
    if (o._targets = v.length ? gi(v) : Ye("GSAP target " + r + " not found. https://gsap.com", !bt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || _ || nr(l) || nr(u)) {
      if (i = o.vars, w = o.timeline = new ct({
        data: "nested",
        defaults: c || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), w.kill(), w.parent = w._dp = Vt(o), w._start = 0, _ || nr(l) || nr(u)) {
        if (k = v.length, M = _ && Nn(_), zt(_))
          for (S in _)
            ~Xn.indexOf(S) && (N || (N = {}), N[S] = _[S]);
        for (b = 0; b < k; b++)
          T = dr(i, Gn), T.stagger = 0, x && (T.yoyoEase = x), N && ce(T, N), C = v[b], T.duration = +Ie(l, Vt(o), b, C, v), T.delay = (+Ie(u, Vt(o), b, C, v) || 0) - o._delay, !_ && k === 1 && T.delay && (o._delay = u = T.delay, o._start += u, T.delay = 0), w.to(C, T, M ? M(b, C, v) : 0), w._ease = D.none;
        w.duration() ? l = u = 0 : o.timeline = 0;
      } else if (p) {
        Be(Ot(w.vars.defaults, {
          ease: "none"
        })), w._ease = le(p.ease || i.ease || "none");
        var A = 0, R, I, z;
        if (lt(p))
          p.forEach(function(F) {
            return w.to(v, F, ">");
          }), w.duration();
        else {
          T = {};
          for (S in p)
            S === "ease" || S === "easeEach" || po(S, p[S], T, p.easeEach);
          for (S in T)
            for (R = T[S].sort(function(F, Y) {
              return F.t - Y.t;
            }), A = 0, b = 0; b < R.length; b++)
              I = R[b], z = {
                ease: I.e,
                duration: (I.t - (b ? R[b - 1].t : 0)) / 100 * l
              }, z[S] = I.v, w.to(v, z, A), A += z.duration;
          w.duration() < l && w.to({}, {
            duration: l - w.duration()
          });
        }
      }
      l || o.duration(l = w.duration());
    } else
      o.timeline = 0;
    return d === !0 && !fi && (Gt = Vt(o), Z.killTweensOf(v), Gt = 0), Lt(y, Vt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !l && !p && o._start === et(y._time) && _t(h) && Us(Vt(o)) && y.data !== "nested") && (o._tTime = -W, o.render(Math.max(0, -u) || 0)), m && En(Vt(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var o = this._time, f = this._tDur, l = this._dur, u = i < 0, h = i > f - W && !u ? f : i < W ? 0 : i, _, d, p, c, m, x, y, v, w;
    if (!l)
      Gs(this, i, n, s);
    else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (_ = h, v = this.timeline, this._repeat) {
        if (c = l + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(c * 100 + i, n, s);
        if (_ = et(h % c), h === f ? (p = this._repeat, _ = l) : (p = ~~(h / c), p && p === et(h / c) && (_ = l, p--), _ > l && (_ = l)), x = this._yoyo && p & 1, x && (w = this._yEase, _ = l - _), m = Se(this._tTime, c), _ === o && !s && this._initted && p === m)
          return this._tTime = h, this;
        p !== m && (v && this._yEase && $n(v, x), this.vars.repeatRefresh && !x && !this._lock && this._time !== c && this._initted && (this._lock = s = 1, this.render(et(c * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Pn(this, u ? i : _, s, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (w || this._ease)(_ / l), this._from && (this.ratio = y = 1 - y), _ && !o && !n && !p && (vt(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      v && v.render(i < 0 ? i : v._dur * v._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Xr(this, i, n, s), vt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && vt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && Xr(this, i, !0, !0), (i || !l) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Qt(this, 1), !n && !(u && !o) && (h || o || x) && (vt(this, h === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < f && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, o, f) {
    Xe || yt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || xi(this, l), u = this._ease(l / this._dur), co(this, i, n, s, o, u, l, f) ? this.resetTo(i, n, s, o, 1) : (kr(this, 0), this.parent || kn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? De(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Gt && Gt.vars.overwrite !== !0)._first || De(this), this.parent && s !== this.timeline.totalDuration() && Ee(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, f = i ? Et(i) : o, l = this._ptLookup, u = this._pt, h, _, d, p, c, m, x;
    if ((!n || n === "all") && Ys(o, f))
      return n === "all" && (this._pt = 0), De(this);
    for (h = this._op = this._op || [], n !== "all" && (rt(n) && (c = {}, dt(n, function(y) {
      return c[y] = 1;
    }), n = c), n = _o(o, n)), x = o.length; x--; )
      if (~f.indexOf(o[x])) {
        _ = l[x], n === "all" ? (h[x] = n, p = _, d = {}) : (d = h[x] = h[x] || {}, p = n);
        for (c in p)
          m = _ && _[c], m && ((!("kill" in m.d) || m.d.kill(c) === !0) && wr(this, m, "_pt"), delete _[c]), d !== "all" && (d[c] = 1);
      }
    return this._initted && !this._pt && u && De(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return Ve(1, arguments);
  }, t.delayedCall = function(i, n, s, o) {
    return new t(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: o
    });
  }, t.fromTo = function(i, n, s) {
    return Ve(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return Z.killTweensOf(i, n, s);
  }, t;
}(Ge);
Ot(K.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
dt("staggerTo,staggerFrom,staggerFromTo", function(a) {
  K[a] = function() {
    var t = new ct(), e = Zr.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var yi = function(t, e, r) {
  return t[e] = r;
}, Zn = function(t, e, r) {
  return t[e](r);
}, go = function(t, e, r, i) {
  return t[e](i.fp, r);
}, mo = function(t, e, r) {
  return t.setAttribute(e, r);
}, vi = function(t, e) {
  return H(t[e]) ? Zn : ui(t[e]) && t.setAttribute ? mo : yi;
}, qn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, xo = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, Hn = function(t, e) {
  var r = e._pt, i = "";
  if (!t && e.b)
    i = e.b;
  else if (t === 1 && e.e)
    i = e.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round((r.s + r.c * t) * 1e4) / 1e4) + i, r = r._next;
    i += e.c;
  }
  e.set(e.t, e.p, i, e);
}, bi = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, yo = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, vo = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? wr(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, bo = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, Jn = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, pt = /* @__PURE__ */ function() {
  function a(e, r, i, n, s, o, f, l, u) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || qn, this.d = f || this, this.set = l || yi, this.pr = u || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = bo, this.m = r, this.mt = n, this.tween = i;
  }, a;
}();
dt(pi + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return di[a] = 1;
});
Ct.TweenMax = Ct.TweenLite = K;
Ct.TimelineLite = Ct.TimelineMax = ct;
Z = new ct({
  sortChildren: !1,
  defaults: ke,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
bt.stringFilter = Vn;
var fe = [], fr = {}, Co = [], Ui = 0, wo = 0, Dr = function(t) {
  return (fr[t] || Co).map(function(e) {
    return e();
  });
}, Qr = function() {
  var t = Date.now(), e = [];
  t - Ui > 2 && (Dr("matchMediaInit"), fe.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, o, f, l;
    for (o in i)
      s = At.matchMedia(i[o]).matches, s && (f = 1), s !== n[o] && (n[o] = s, l = 1);
    l && (r.revert(), f && e.push(r));
  }), Dr("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), Ui = t, Dr("matchMedia"));
}, Qn = /* @__PURE__ */ function() {
  function a(e, r) {
    this.selector = r && qr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = wo++, e && this.add(e);
  }
  var t = a.prototype;
  return t.add = function(r, i, n) {
    H(r) && (n = i, i = r, r = H);
    var s = this, o = function() {
      var l = U, u = s.selector, h;
      return l && l !== s && l.data.push(s), n && (s.selector = qr(n)), U = s, h = i.apply(s, arguments), H(h) && s._r.push(h), U = l, s.selector = u, s.isReverted = !1, h;
    };
    return s.last = o, r === H ? o(s, function(f) {
      return s.add(null, f);
    }) : r ? s[r] = o : o;
  }, t.ignore = function(r) {
    var i = U;
    U = null, r(this), U = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof a ? r.push.apply(r, i.getTweens()) : i instanceof K && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
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
      }).sort(function(u, h) {
        return h.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), f = n.data.length; f--; )
        l = n.data[f], l instanceof ct ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof K) && l.revert && l.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var s = fe.length; s--; )
        fe[s].id === this.id && fe.splice(s, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, a;
}(), To = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, U && U.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(r, i, n) {
    zt(r) || (r = {
      matches: r
    });
    var s = new Qn(0, n || this.scope), o = s.conditions = {}, f, l, u;
    U && !s.selector && (s.selector = U.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (l in r)
      l === "all" ? u = 1 : (f = At.matchMedia(r[l]), f && (fe.indexOf(s) < 0 && fe.push(s), (o[l] = f.matches) && (u = 1), f.addListener ? f.addListener(Qr) : f.addEventListener("change", Qr)));
    return u && i(s, function(h) {
      return s.add(null, h);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, a;
}(), gr = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return zn(i);
    });
  },
  timeline: function(t) {
    return new ct(t);
  },
  getTweensOf: function(t, e) {
    return Z.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    rt(t) && (t = Et(t)[0]);
    var n = oe(t || {}).get, s = r ? Tn : wn;
    return r === "native" && (r = ""), t && (e ? s((xt[e] && xt[e].get || n)(t, e, r, i)) : function(o, f, l) {
      return s((xt[o] && xt[o].get || n)(t, o, f, l));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Et(t), t.length > 1) {
      var i = t.map(function(u) {
        return mt.quickSetter(u, e, r);
      }), n = i.length;
      return function(u) {
        for (var h = n; h--; )
          i[h](u);
      };
    }
    t = t[0] || {};
    var s = xt[e], o = oe(t), f = o.harness && (o.harness.aliases || {})[e] || e, l = s ? function(u) {
      var h = new s();
      ye._pt = 0, h.init(t, r ? u + r : u, ye, 0, [t]), h.render(1, h), ye._pt && bi(1, ye);
    } : o.set(t, f);
    return s ? l : function(u) {
      return l(t, f, r ? u + r : u, o, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = mt.to(t, ce((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(f, l, u) {
      return n.resetTo(e, f, l, u);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return Z.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = le(t.ease, ke.ease)), Vi(ke, t || {});
  },
  config: function(t) {
    return Vi(bt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !xt[o] && !Ct[o] && Ye(e + " effect requires " + o + " plugin.");
    }), Nr[e] = function(o, f, l) {
      return r(Et(o), Ot(f || {}, n), l);
    }, s && (ct.prototype[e] = function(o, f, l) {
      return this.add(Nr[e](o, zt(f) ? f : (l = f) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    D[t] = le(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? le(t, e) : D;
  },
  getById: function(t) {
    return Z.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ct(t), i, n;
    for (r.smoothChildTiming = _t(t.smoothChildTiming), Z.remove(r), r._dp = 0, r._time = r._tTime = Z._time, i = Z._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof K && i.vars.onComplete === i._targets[0])) && Lt(r, i, i._start - i._delay), i = n;
    return Lt(Z, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Qn(t, e) : U;
  },
  matchMedia: function(t) {
    return new To(t);
  },
  matchMediaRefresh: function() {
    return fe.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Qr();
  },
  addEventListener: function(t, e) {
    var r = fr[t] || (fr[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = fr[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: eo,
    wrapYoyo: ro,
    distribute: Nn,
    random: An,
    snap: Rn,
    normalize: to,
    getUnit: ot,
    clamp: Hs,
    splitColor: Fn,
    toArray: Et,
    selector: qr,
    mapRange: Dn,
    pipe: Qs,
    unitize: Ks,
    interpolate: io,
    shuffle: Mn
  },
  install: xn,
  effects: Nr,
  ticker: yt,
  updateRoot: ct.updateRoot,
  plugins: xt,
  globalTimeline: Z,
  core: {
    PropTween: pt,
    globals: yn,
    Tween: K,
    Timeline: ct,
    Animation: Ge,
    getCache: oe,
    _removeLinkedListItem: wr,
    reverting: function() {
      return at;
    },
    context: function(t) {
      return t && U && (U.data.push(t), t._ctx = U), U;
    },
    suppressOverwrites: function(t) {
      return fi = t;
    }
  }
};
dt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return gr[a] = K[a];
});
yt.add(ct.updateRoot);
ye = gr.to({}, {
  duration: 0
});
var ko = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, So = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = ko(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, jr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var f, l;
        if (rt(n) && (f = {}, dt(n, function(u) {
          return f[u] = 1;
        }), n = f), e) {
          f = {};
          for (l in n)
            f[l] = e(n[l]);
          n = f;
        }
        So(o, n);
      };
    }
  };
}, mt = gr.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, o, f;
    this.tween = r;
    for (s in e)
      f = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (f || 0) + "", e[s], i, n, 0, 0, s), o.op = s, o.b = f, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      at ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, jr("roundProps", Hr), jr("modifiers"), jr("snap", Rn)) || gr;
K.version = ct.version = mt.version = "3.12.5";
mn = 1;
hi() && Pe();
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
var Xi, Zt, Ce, Ci, se, Gi, wi, Eo = function() {
  return typeof window < "u";
}, Ut = {}, ne = 180 / Math.PI, we = Math.PI / 180, ge = Math.atan2, Zi = 1e8, Ti = /([A-Z])/g, Po = /(left|right|width|margin|padding|x)/i, Oo = /[\s,\(]\S/, Dt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Kr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Mo = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, No = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Ro = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Kn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, ts = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ao = function(t, e, r) {
  return t.style[e] = r;
}, Lo = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Do = function(t, e, r) {
  return t._gsap[e] = r;
}, jo = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, zo = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Fo = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, q = "transform", gt = q + "Origin", Bo = function a(t, e) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (t in Ut && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Dt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = It(i, o);
      }) : this.tfm[t] = s.x ? s[t] : It(i, t), t === gt && (this.tfm.zOrigin = s.zOrigin);
    else
      return Dt.transform.split(",").forEach(function(o) {
        return a.call(r, o, e);
      });
    if (this.props.indexOf(q) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(gt, e, "")), t = q;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, es = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Vo = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ti, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = wi(), (!n || !n.isStart) && !r[q] && (es(r), i.zOrigin && r[gt] && (r[gt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, rs = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Vo,
    save: Bo
  };
  return t._gsap || mt.core.getCache(t), e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, is, ti = function(t, e) {
  var r = Zt.createElementNS ? Zt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Zt.createElement(t);
  return r && r.style ? r : Zt.createElement(t);
}, jt = function a(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Ti, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && a(t, Oe(e) || e, 1) || "";
}, qi = "O,Moz,ms,Ms,Webkit".split(","), Oe = function(t, e, r) {
  var i = e || se, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(qi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? qi[s] : "") + t;
}, ei = function() {
  Eo() && window.document && (Xi = window, Zt = Xi.document, Ce = Zt.documentElement, se = ti("div") || {
    style: {}
  }, ti("div"), q = Oe(q), gt = q + "Origin", se.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", is = !!Oe("perspective"), wi = mt.core.reverting, Ci = 1);
}, zr = function a(t) {
  var e = ti("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (Ce.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Ce.removeChild(e), this.style.cssText = n, s;
}, Hi = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, ns = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = zr.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === zr || (e = zr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +Hi(t, ["x", "cx", "x1"]) || 0,
    y: +Hi(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, ss = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && ns(t));
}, _e = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in Ut && e !== gt && (e = q), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(Ti, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, qt = function(t, e, r, i, n, s) {
  var o = new pt(t._pt, e, r, 0, 1, s ? ts : Kn);
  return t._pt = o, o.b = i, o.e = n, t._props.push(r), o;
}, Ji = {
  deg: 1,
  rad: 1,
  turn: 1
}, Io = {
  grid: 1,
  flex: 1
}, Kt = function a(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", o = se.style, f = Po.test(e), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (f ? "Width" : "Height"), h = 100, _ = i === "px", d = i === "%", p, c, m, x;
  if (i === s || !n || Ji[i] || Ji[s])
    return n;
  if (s !== "px" && !_ && (n = a(t, e, r, "px")), x = t.getCTM && ss(t), (d || s === "%") && (Ut[e] || ~e.indexOf("adius")))
    return p = x ? t.getBBox()[f ? "width" : "height"] : t[u], J(d ? n / p * h : n / 100 * p);
  if (o[f ? "width" : "height"] = h + (_ ? s : i), c = ~e.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, x && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Zt || !c.appendChild) && (c = Zt.body), m = c._gsap, m && d && m.width && f && m.time === yt.time && !m.uncache)
    return J(n / m.width * h);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = h + i, p = t[u], y ? t.style[e] = y : _e(t, e);
  } else
    (d || s === "%") && !Io[jt(c, "display")] && (o.position = jt(t, "position")), c === t && (o.position = "static"), c.appendChild(se), p = se[u], c.removeChild(se), o.position = "absolute";
  return f && d && (m = oe(c), m.time = yt.time, m.width = c[u]), J(_ ? p * n / h : p && n ? h / p * n : 0);
}, It = function(t, e, r, i) {
  var n;
  return Ci || ei(), e in Dt && e !== "transform" && (e = Dt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Ut[e] && e !== "transform" ? (n = qe(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : xr(jt(t, gt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = mr[e] && mr[e](t, e, r) || jt(t, e) || bn(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Kt(t, e, n, r) + r : n;
}, $o = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Oe(e, t, 1), s = n && jt(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = jt(t, "borderTopColor"));
  }
  var o = new pt(this._pt, t.style, e, 0, 1, Hn), f = 0, l = 0, u, h, _, d, p, c, m, x, y, v, w, b;
  if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (c = t.style[e], t.style[e] = i, i = jt(t, e) || i, c ? t.style[e] = c : _e(t, e)), u = [r, i], Vn(u), r = u[0], i = u[1], _ = r.match(xe) || [], b = i.match(xe) || [], b.length) {
    for (; h = xe.exec(i); )
      m = h[0], y = i.substring(f, h.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), m !== (c = _[l++] || "") && (d = parseFloat(c) || 0, w = c.substr((d + "").length), m.charAt(1) === "=" && (m = be(d, m) + w), x = parseFloat(m), v = m.substr((x + "").length), f = xe.lastIndex - v.length, v || (v = v || bt.units[e] || w, f === i.length && (i += v, o.e += v)), w !== v && (d = Kt(t, e, c, v) || 0), o._pt = {
        _next: o._pt,
        p: y || l === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: x - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = f < i.length ? i.substring(f, i.length) : "";
  } else
    o.r = e === "display" && i === "none" ? ts : Kn;
  return pn.test(i) && (o.e = 0), this._pt = o, o;
}, Qi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Yo = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Qi[r] || r, e[1] = Qi[i] || i, e.join(" ");
}, Wo = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, o, f, l;
    if (n === "all" || n === !0)
      i.cssText = "", f = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], Ut[o] && (f = 1, o = o === "transformOrigin" ? gt : q), _e(r, o);
    f && (_e(r, q), s && (s.svg && r.removeAttribute("transform"), qe(r, 1), s.uncache = 1, es(i)));
  }
}, mr = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new pt(t._pt, e, r, 0, 0, Wo);
      return s.u = i, s.pr = -10, s.tween = n, t._props.push(r), 1;
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
}, Ze = [1, 0, 0, 1, 0, 0], os = {}, as = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Ki = function(t) {
  var e = jt(t, q);
  return as(e) ? Ze : e.substr(7).match(dn).map(J);
}, ki = function(t, e) {
  var r = t._gsap || oe(t), i = t.style, n = Ki(t), s, o, f, l;
  return r.svg && t.getAttribute("transform") ? (f = t.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? Ze : n) : (n === Ze && !t.offsetParent && t !== Ce && !r.svg && (f = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (l = 1, o = t.nextElementSibling, Ce.appendChild(t)), n = Ki(t), f ? i.display = f : _e(t, "display"), l && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : Ce.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ri = function(t, e, r, i, n, s) {
  var o = t._gsap, f = n || ki(t, !0), l = o.xOrigin || 0, u = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, d = f[0], p = f[1], c = f[2], m = f[3], x = f[4], y = f[5], v = e.split(" "), w = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, T, k, S, C;
  r ? f !== Ze && (k = d * m - p * c) && (S = w * (m / k) + b * (-c / k) + (c * y - m * x) / k, C = w * (-p / k) + b * (d / k) - (d * y - p * x) / k, w = S, b = C) : (T = ns(t), w = T.x + (~v[0].indexOf("%") ? w / 100 * T.width : w), b = T.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * T.height : b)), i || i !== !1 && o.smooth ? (x = w - l, y = b - u, o.xOffset = h + (x * d + y * c) - x, o.yOffset = _ + (x * p + y * m) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = w, o.yOrigin = b, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!r, t.style[gt] = "0px 0px", s && (qt(s, o, "xOrigin", l, w), qt(s, o, "yOrigin", u, b), qt(s, o, "xOffset", h, o.xOffset), qt(s, o, "yOffset", _, o.yOffset)), t.setAttribute("data-svg-origin", w + " " + b);
}, qe = function(t, e) {
  var r = t._gsap || new Wn(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", o = "deg", f = getComputedStyle(t), l = jt(t, gt) || "0", u, h, _, d, p, c, m, x, y, v, w, b, T, k, S, C, M, N, A, R, I, z, F, Y, tt, ft, Mt, X, wt, it, Q, ut;
  return u = h = _ = c = m = x = y = v = w = 0, d = p = 1, r.svg = !!(t.getCTM && ss(t)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (i[q] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[q] !== "none" ? f[q] : "")), i.scale = i.rotate = i.translate = "none"), k = ki(t, r.svg), r.svg && (r.uncache ? (tt = t.getBBox(), l = r.xOrigin - tt.x + "px " + (r.yOrigin - tt.y) + "px", Y = "") : Y = !e && t.getAttribute("data-svg-origin"), ri(t, Y || l, !!Y || r.originIsAbsolute, r.smooth !== !1, k)), b = r.xOrigin || 0, T = r.yOrigin || 0, k !== Ze && (N = k[0], A = k[1], R = k[2], I = k[3], u = z = k[4], h = F = k[5], k.length === 6 ? (d = Math.sqrt(N * N + A * A), p = Math.sqrt(I * I + R * R), c = N || A ? ge(A, N) * ne : 0, y = R || I ? ge(R, I) * ne + c : 0, y && (p *= Math.abs(Math.cos(y * we))), r.svg && (u -= b - (b * N + T * R), h -= T - (b * A + T * I))) : (ut = k[6], it = k[7], Mt = k[8], X = k[9], wt = k[10], Q = k[11], u = k[12], h = k[13], _ = k[14], S = ge(ut, wt), m = S * ne, S && (C = Math.cos(-S), M = Math.sin(-S), Y = z * C + Mt * M, tt = F * C + X * M, ft = ut * C + wt * M, Mt = z * -M + Mt * C, X = F * -M + X * C, wt = ut * -M + wt * C, Q = it * -M + Q * C, z = Y, F = tt, ut = ft), S = ge(-R, wt), x = S * ne, S && (C = Math.cos(-S), M = Math.sin(-S), Y = N * C - Mt * M, tt = A * C - X * M, ft = R * C - wt * M, Q = I * M + Q * C, N = Y, A = tt, R = ft), S = ge(A, N), c = S * ne, S && (C = Math.cos(S), M = Math.sin(S), Y = N * C + A * M, tt = z * C + F * M, A = A * C - N * M, F = F * C - z * M, N = Y, z = tt), m && Math.abs(m) + Math.abs(c) > 359.9 && (m = c = 0, x = 180 - x), d = J(Math.sqrt(N * N + A * A + R * R)), p = J(Math.sqrt(F * F + ut * ut)), S = ge(z, F), y = Math.abs(S) > 2e-4 ? S * ne : 0, w = Q ? 1 / (Q < 0 ? -Q : Q) : 0), r.svg && (Y = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !as(jt(t, q)), Y && t.setAttribute("transform", Y))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = u - ((r.xPercent = u && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = h - ((r.yPercent = h && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = _ + s, r.scaleX = J(d), r.scaleY = J(p), r.rotation = J(c) + o, r.rotationX = J(m) + o, r.rotationY = J(x) + o, r.skewX = y + o, r.skewY = v + o, r.transformPerspective = w + s, (r.zOrigin = parseFloat(l.split(" ")[2]) || !e && r.zOrigin || 0) && (i[gt] = xr(l)), r.xOffset = r.yOffset = 0, r.force3D = bt.force3D, r.renderTransform = r.svg ? Xo : is ? ls : Uo, r.uncache = 0, r;
}, xr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, Fr = function(t, e, r) {
  var i = ot(e);
  return J(parseFloat(e) + parseFloat(Kt(t, "x", r + "px", i))) + i;
}, Uo = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ls(t, e);
}, re = "0deg", Ae = "0px", ie = ") ", ls = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, f = r.z, l = r.rotation, u = r.rotationY, h = r.rotationX, _ = r.skewX, d = r.skewY, p = r.scaleX, c = r.scaleY, m = r.transformPerspective, x = r.force3D, y = r.target, v = r.zOrigin, w = "", b = x === "auto" && t && t !== 1 || x === !0;
  if (v && (h !== re || u !== re)) {
    var T = parseFloat(u) * we, k = Math.sin(T), S = Math.cos(T), C;
    T = parseFloat(h) * we, C = Math.cos(T), s = Fr(y, s, k * C * -v), o = Fr(y, o, -Math.sin(T) * -v), f = Fr(y, f, S * C * -v + v);
  }
  m !== Ae && (w += "perspective(" + m + ie), (i || n) && (w += "translate(" + i + "%, " + n + "%) "), (b || s !== Ae || o !== Ae || f !== Ae) && (w += f !== Ae || b ? "translate3d(" + s + ", " + o + ", " + f + ") " : "translate(" + s + ", " + o + ie), l !== re && (w += "rotate(" + l + ie), u !== re && (w += "rotateY(" + u + ie), h !== re && (w += "rotateX(" + h + ie), (_ !== re || d !== re) && (w += "skew(" + _ + ", " + d + ie), (p !== 1 || c !== 1) && (w += "scale(" + p + ", " + c + ie), y.style[q] = w || "translate(0, 0)";
}, Xo = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, f = r.rotation, l = r.skewX, u = r.skewY, h = r.scaleX, _ = r.scaleY, d = r.target, p = r.xOrigin, c = r.yOrigin, m = r.xOffset, x = r.yOffset, y = r.forceCSS, v = parseFloat(s), w = parseFloat(o), b, T, k, S, C;
  f = parseFloat(f), l = parseFloat(l), u = parseFloat(u), u && (u = parseFloat(u), l += u, f += u), f || l ? (f *= we, l *= we, b = Math.cos(f) * h, T = Math.sin(f) * h, k = Math.sin(f - l) * -_, S = Math.cos(f - l) * _, l && (u *= we, C = Math.tan(l - u), C = Math.sqrt(1 + C * C), k *= C, S *= C, u && (C = Math.tan(u), C = Math.sqrt(1 + C * C), b *= C, T *= C)), b = J(b), T = J(T), k = J(k), S = J(S)) : (b = h, S = _, T = k = 0), (v && !~(s + "").indexOf("px") || w && !~(o + "").indexOf("px")) && (v = Kt(d, "x", s, "px"), w = Kt(d, "y", o, "px")), (p || c || m || x) && (v = J(v + p - (p * b + c * k) + m), w = J(w + c - (p * T + c * S) + x)), (i || n) && (C = d.getBBox(), v = J(v + i / 100 * C.width), w = J(w + n / 100 * C.height)), C = "matrix(" + b + "," + T + "," + k + "," + S + "," + v + "," + w + ")", d.setAttribute("transform", C), y && (d.style[q] = C);
}, Go = function(t, e, r, i, n) {
  var s = 360, o = rt(n), f = parseFloat(n) * (o && ~n.indexOf("rad") ? ne : 1), l = f - i, u = i + l + "deg", h, _;
  return o && (h = n.split("_")[1], h === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), h === "cw" && l < 0 ? l = (l + s * Zi) % s - ~~(l / s) * s : h === "ccw" && l > 0 && (l = (l - s * Zi) % s - ~~(l / s) * s)), t._pt = _ = new pt(t._pt, e, r, i, l, Mo), _.e = u, _.u = "deg", t._props.push(r), _;
}, tn = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Zo = function(t, e, r) {
  var i = tn({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, f, l, u, h, _, d, p;
  i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), s[q] = e, o = qe(r, 1), _e(r, q), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[q], s[q] = e, o = qe(r, 1), s[q] = l);
  for (f in Ut)
    l = i[f], u = o[f], l !== u && n.indexOf(f) < 0 && (d = ot(l), p = ot(u), h = d !== p ? Kt(r, f, l, p) : parseFloat(l), _ = parseFloat(u), t._pt = new pt(t._pt, o, f, h, _ - h, Kr), t._pt.u = p || 0, t._props.push(f));
  tn(o, i);
};
dt("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  mr[t > 1 ? "border" + a : a] = function(o, f, l, u, h) {
    var _, d;
    if (arguments.length < 4)
      return _ = s.map(function(p) {
        return It(o, p, l);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (u + "").split(" "), d = {}, s.forEach(function(p, c) {
      return d[p] = _[c] = _[c] || _[(c - 1) / 2 | 0];
    }), o.init(f, d, h);
  };
});
var fs = {
  name: "css",
  register: ei,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, o = t.style, f = r.vars.startAt, l, u, h, _, d, p, c, m, x, y, v, w, b, T, k, S;
    Ci || ei(), this.styles = this.styles || rs(t), S = this.styles.props, this.tween = r;
    for (c in e)
      if (c !== "autoRound" && (u = e[c], !(xt[c] && Un(c, e, r, i, t, n)))) {
        if (d = typeof u, p = mr[c], d === "function" && (u = u.call(r, i, t, n), d = typeof u), d === "string" && ~u.indexOf("random(") && (u = Ue(u)), p)
          p(this, t, c, u, r) && (k = 1);
        else if (c.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(c) + "").trim(), u += "", Jt.lastIndex = 0, Jt.test(l) || (m = ot(l), x = ot(u)), x ? m !== x && (l = Kt(t, c, l, x) + x) : m && (u += m), this.add(o, "setProperty", l, u, i, n, 0, 0, c), s.push(c), S.push(c, 0, o[c]);
        else if (d !== "undefined") {
          if (f && c in f ? (l = typeof f[c] == "function" ? f[c].call(r, i, t, n) : f[c], rt(l) && ~l.indexOf("random(") && (l = Ue(l)), ot(l + "") || l === "auto" || (l += bt.units[c] || ot(It(t, c)) || ""), (l + "").charAt(1) === "=" && (l = It(t, c))) : l = It(t, c), _ = parseFloat(l), y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), c in Dt && (c === "autoAlpha" && (_ === 1 && It(t, "visibility") === "hidden" && h && (_ = 0), S.push("visibility", 0, o.visibility), qt(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), c !== "scale" && c !== "transform" && (c = Dt[c], ~c.indexOf(",") && (c = c.split(",")[0]))), v = c in Ut, v) {
            if (this.styles.save(c), w || (b = t._gsap, b.renderTransform && !e.parseTransform || qe(t, e.parseTransform), T = e.smoothOrigin !== !1 && b.smooth, w = this._pt = new pt(this._pt, o, q, 0, 1, b.renderTransform, b, 0, -1), w.dep = 1), c === "scale")
              this._pt = new pt(this._pt, b, "scaleY", b.scaleY, (y ? be(b.scaleY, y + h) : h) - b.scaleY || 0, Kr), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              S.push(gt, 0, o[gt]), u = Yo(u), b.svg ? ri(t, u, 0, T, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0, x !== b.zOrigin && qt(this, b, "zOrigin", b.zOrigin, x), qt(this, o, c, xr(l), xr(u)));
              continue;
            } else if (c === "svgOrigin") {
              ri(t, u, 1, T, 0, this);
              continue;
            } else if (c in os) {
              Go(this, b, c, _, y ? be(_, y + u) : u);
              continue;
            } else if (c === "smoothOrigin") {
              qt(this, b, "smooth", b.smooth, u);
              continue;
            } else if (c === "force3D") {
              b[c] = u;
              continue;
            } else if (c === "transform") {
              Zo(this, u, t);
              continue;
            }
          } else c in o || (c = Oe(c) || c);
          if (v || (h || h === 0) && (_ || _ === 0) && !Oo.test(u) && c in o)
            m = (l + "").substr((_ + "").length), h || (h = 0), x = ot(u) || (c in bt.units ? bt.units[c] : m), m !== x && (_ = Kt(t, c, l, x)), this._pt = new pt(this._pt, v ? b : o, c, _, (y ? be(_, y + h) : h) - _, !v && (x === "px" || c === "zIndex") && e.autoRound !== !1 ? Ro : Kr), this._pt.u = x || 0, m !== x && x !== "%" && (this._pt.b = l, this._pt.r = No);
          else if (c in o)
            $o.call(this, t, c, l, y ? y + u : u);
          else if (c in t)
            this.add(t, c, l || t[c], y ? y + u : u, i, n);
          else if (c !== "parseTransform") {
            _i(c, u);
            continue;
          }
          v || (c in o ? S.push(c, 0, o[c]) : S.push(c, 1, l || t[c])), s.push(c);
        }
      }
    k && Jn(this);
  },
  render: function(t, e) {
    if (e.tween._time || !wi())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: It,
  aliases: Dt,
  getSetter: function(t, e, r) {
    var i = Dt[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Ut && e !== gt && (t._gsap.x || It(t, "x")) ? r && Gi === r ? e === "scale" ? jo : Do : (Gi = r || {}) && (e === "scale" ? zo : Fo) : t.style && !ui(t.style[e]) ? Ao : ~e.indexOf("-") ? Lo : vi(t, e);
  },
  core: {
    _removeProperty: _e,
    _getMatrix: ki
  }
};
mt.utils.checkPrefix = Oe;
mt.core.getStyleSaver = rs;
(function(a, t, e, r) {
  var i = dt(a + "," + t + "," + e, function(n) {
    Ut[n] = 1;
  });
  dt(t, function(n) {
    bt.units[n] = "deg", os[n] = 1;
  }), Dt[i[13]] = a + "," + t, dt(r, function(n) {
    var s = n.split(":");
    Dt[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
dt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  bt.units[a] = "px";
});
mt.registerPlugin(fs);
var Nt = mt.registerPlugin(fs) || mt;
Nt.core.Tween;
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ho = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Jo = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Qo = /(^[#\.][a-z]|[a-y][a-z])/i, Ko = Math.PI / 180, ta = 180 / Math.PI, sr = Math.sin, or = Math.cos, Pt = Math.abs, $t = Math.sqrt, ea = Math.atan2, ii = 1e8, en = function(t) {
  return typeof t == "string";
}, us = function(t) {
  return typeof t == "number";
}, ra = function(t) {
  return typeof t > "u";
}, ia = {}, na = {}, yr = 1e5, hs = function(t) {
  return Math.round((t + ii) % 1 * yr) / yr || (t < 0 ? 0 : 1);
}, V = function(t) {
  return Math.round(t * yr) / yr || 0;
}, rn = function(t) {
  return Math.round(t * 1e10) / 1e10 || 0;
}, nn = function(t, e, r, i) {
  var n = t[e], s = i === 1 ? 6 : ni(n, r, i);
  if ((s || !i) && s + r + 2 < n.length)
    return t.splice(e, 0, n.slice(0, r + s + 2)), n.splice(0, r + s), 1;
}, cs = function(t, e, r) {
  var i = t.length, n = ~~(r * i);
  if (t[n] > e) {
    for (; --n && t[n] > e; )
      ;
    n < 0 && (n = 0);
  } else
    for (; t[++n] < e && n < i; )
      ;
  return n < i ? n : i - 1;
}, sa = function(t, e) {
  var r = t.length;
  for (t.reverse(); r--; )
    t[r].reversed || la(t[r]);
}, sn = function(t, e) {
  return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e;
}, oa = function(t, e) {
  var r = t.length, i = t[r - 1] || [], n = i.length;
  r && e[0] === i[n - 2] && e[1] === i[n - 1] && (e = i.concat(e.slice(2)), r--), t[r] = e;
};
function ur(a) {
  a = en(a) && Qo.test(a) && document.querySelector(a) || a;
  var t = a.getAttribute ? a : 0, e;
  return t && (a = a.getAttribute("d")) ? (t._gsPath || (t._gsPath = {}), e = t._gsPath[a], e && !e._dirty ? e : t._gsPath[a] = vr(a)) : a ? en(a) ? vr(a) : us(a[0]) ? [a] : a : console.warn("Expecting a <path> element or an SVG path data string");
}
function aa(a) {
  for (var t = [], e = 0; e < a.length; e++)
    t[e] = sn(a[e], a[e].slice(0));
  return sn(a, t);
}
function la(a) {
  var t = 0, e;
  for (a.reverse(); t < a.length; t += 2)
    e = a[t], a[t] = a[t + 1], a[t + 1] = e;
  a.reversed = !a.reversed;
}
var fa = function(t, e) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(t.attributes), n = i.length, s;
  for (e = "," + e + ","; --n > -1; )
    s = i[n].nodeName.toLowerCase(), e.indexOf("," + s + ",") < 0 && r.setAttributeNS(null, s, i[n].nodeValue);
  return r;
}, ua = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, ha = function(t, e) {
  for (var r = e ? e.split(",") : [], i = {}, n = r.length; --n > -1; )
    i[r[n]] = +t.getAttribute(r[n]) || 0;
  return i;
};
function ca(a, t) {
  var e = a.tagName.toLowerCase(), r = 0.552284749831, i, n, s, o, f, l, u, h, _, d, p, c, m, x, y, v, w, b, T, k, S, C;
  return e === "path" || !a.getBBox ? a : (l = fa(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), C = ha(a, ua[e]), e === "rect" ? (o = C.rx, f = C.ry || o, n = C.x, s = C.y, d = C.width - o * 2, p = C.height - f * 2, o || f ? (c = n + o * (1 - r), m = n + o, x = m + d, y = x + o * r, v = x + o, w = s + f * (1 - r), b = s + f, T = b + p, k = T + f * r, S = T + f, i = "M" + v + "," + b + " V" + T + " C" + [v, k, y, S, x, S, x - (x - m) / 3, S, m + (x - m) / 3, S, m, S, c, S, n, k, n, T, n, T - (T - b) / 3, n, b + (T - b) / 3, n, b, n, w, c, s, m, s, m + (x - m) / 3, s, x - (x - m) / 3, s, x, s, y, s, v, w, v, b].join(",") + "z") : i = "M" + (n + d) + "," + s + " v" + p + " h" + -d + " v" + -p + " h" + d + "z") : e === "circle" || e === "ellipse" ? (e === "circle" ? (o = f = C.r, h = o * r) : (o = C.rx, f = C.ry, h = f * r), n = C.cx, s = C.cy, u = o * r, i = "M" + (n + o) + "," + s + " C" + [n + o, s + h, n + u, s + f, n, s + f, n - u, s + f, n - o, s + h, n - o, s, n - o, s - h, n - u, s - f, n, s - f, n + u, s - f, n + o, s - h, n + o, s].join(",") + "z") : e === "line" ? i = "M" + C.x1 + "," + C.y1 + " L" + C.x2 + "," + C.y2 : (e === "polyline" || e === "polygon") && (_ = (a.getAttribute("points") + "").match(Ho) || [], n = _.shift(), s = _.shift(), i = "M" + n + "," + s + " L" + _.join(","), e === "polygon" && (i += "," + n + "," + s + "z")), l.setAttribute("d", ps(l._gsRawPath = vr(i))), t && a.parentNode && (a.parentNode.insertBefore(l, a), a.parentNode.removeChild(a)), l);
}
function _s(a, t, e) {
  var r = a[t], i = a[t + 2], n = a[t + 4], s;
  return r += (i - r) * e, i += (n - i) * e, r += (i - r) * e, s = i + (n + (a[t + 6] - n) * e - i) * e - r, r = a[t + 1], i = a[t + 3], n = a[t + 5], r += (i - r) * e, i += (n - i) * e, r += (i - r) * e, V(ea(i + (n + (a[t + 7] - n) * e - i) * e - r, s) * ta);
}
function ds(a, t, e) {
  e = ra(e) ? 1 : rn(e) || 0, t = rn(t) || 0;
  var r = Math.max(0, ~~(Pt(e - t) - 1e-8)), i = aa(a);
  if (t > e && (t = 1 - t, e = 1 - e, sa(i), i.totalLength = 0), t < 0 || e < 0) {
    var n = Math.abs(~~Math.min(t, e)) + 1;
    t += n, e += n;
  }
  i.totalLength || ue(i);
  var s = e > 1, o = on(i, t, ia, !0), f = on(i, e, na), l = f.segment, u = o.segment, h = f.segIndex, _ = o.segIndex, d = f.i, p = o.i, c = _ === h, m = d === p && c, x, y, v, w, b, T, k, S;
  if (s || r) {
    for (x = h < _ || c && d < p || m && f.t < o.t, nn(i, _, p, o.t) && (_++, x || (h++, m ? (f.t = (f.t - o.t) / (1 - o.t), d = 0) : c && (d -= p))), Math.abs(1 - (e - t)) < 1e-5 ? h = _ - 1 : !f.t && h ? h-- : nn(i, h, d, f.t) && x && _++, o.t === 1 && (_ = (_ + 1) % i.length), b = [], T = i.length, k = 1 + T * r, S = _, k += (T - _ + h) % T, w = 0; w < k; w++)
      oa(b, i[S++ % T]);
    i = b;
  } else if (v = f.t === 1 ? 6 : ni(l, d, f.t), t !== e)
    for (y = ni(u, p, m ? o.t / f.t : o.t), c && (v += y), l.splice(d + v + 2), (y || p) && u.splice(0, p + y), w = i.length; w--; )
      (w < _ || w > h) && i.splice(w, 1);
  else
    l.angle = _s(l, d + v, 0), d += v, o = l[d], f = l[d + 1], l.length = l.totalLength = 0, l.totalPoints = i.totalPoints = 8, l.push(o, f, o, f, o, f, o, f);
  return i.totalLength = 0, i;
}
function _a(a, t, e) {
  t = t || 0, a.samples || (a.samples = [], a.lookup = []);
  var r = ~~a.resolution || 12, i = 1 / r, n = a.length, s = a[t], o = a[t + 1], f = t ? t / 6 * r : 0, l = a.samples, u = a.lookup, h = (t ? a.minLength : ii) || ii, _ = l[f + e * r - 1], d = t ? l[f - 1] : 0, p, c, m, x, y, v, w, b, T, k, S, C, M, N, A, R, I;
  for (l.length = u.length = 0, c = t + 2; c < n; c += 6) {
    if (m = a[c + 4] - s, x = a[c + 2] - s, y = a[c] - s, b = a[c + 5] - o, T = a[c + 3] - o, k = a[c + 1] - o, v = w = S = C = 0, Pt(m) < 0.01 && Pt(b) < 0.01 && Pt(y) + Pt(k) < 0.01)
      a.length > 8 && (a.splice(c, 6), c -= 6, n -= 6);
    else
      for (p = 1; p <= r; p++)
        N = i * p, M = 1 - N, v = w - (w = (N * N * m + 3 * M * (N * x + M * y)) * N), S = C - (C = (N * N * b + 3 * M * (N * T + M * k)) * N), R = $t(S * S + v * v), R < h && (h = R), d += R, l[f++] = d;
    s += m, o += b;
  }
  if (_)
    for (_ -= d; f < l.length; f++)
      l[f] += _;
  if (l.length && h) {
    if (a.totalLength = I = l[l.length - 1] || 0, a.minLength = h, I / h < 9999)
      for (R = A = 0, p = 0; p < I; p += h)
        u[R++] = l[A] < p ? ++A : A;
  } else
    a.totalLength = l[0] = 0;
  return t ? d - l[t / 2 - 1] : d;
}
function ue(a, t) {
  var e, r, i;
  for (i = e = r = 0; i < a.length; i++)
    a[i].resolution = ~~t || 12, r += a[i].length, e += _a(a[i]);
  return a.totalPoints = r, a.totalLength = e, a;
}
function ni(a, t, e) {
  if (e <= 0 || e >= 1)
    return 0;
  var r = a[t], i = a[t + 1], n = a[t + 2], s = a[t + 3], o = a[t + 4], f = a[t + 5], l = a[t + 6], u = a[t + 7], h = r + (n - r) * e, _ = n + (o - n) * e, d = i + (s - i) * e, p = s + (f - s) * e, c = h + (_ - h) * e, m = d + (p - d) * e, x = o + (l - o) * e, y = f + (u - f) * e;
  return _ += (x - _) * e, p += (y - p) * e, a.splice(
    t + 2,
    4,
    V(h),
    //first control point
    V(d),
    V(c),
    //second control point
    V(m),
    V(c + (_ - c) * e),
    //new fabricated anchor on line
    V(m + (p - m) * e),
    V(_),
    //third control point
    V(p),
    V(x),
    //fourth control point
    V(y)
  ), a.samples && a.samples.splice(t / 6 * a.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function on(a, t, e, r) {
  e = e || {}, a.totalLength || ue(a), (t < 0 || t > 1) && (t = hs(t));
  var i = 0, n = a[0], s, o, f, l, u, h, _;
  if (!t)
    _ = h = i = 0, n = a[0];
  else if (t === 1)
    _ = 1, i = a.length - 1, n = a[i], h = n.length - 8;
  else {
    if (a.length > 1) {
      for (f = a.totalLength * t, u = h = 0; (u += a[h++].totalLength) < f; )
        i = h;
      n = a[i], l = u - n.totalLength, t = (f - l) / (u - l) || 0;
    }
    s = n.samples, o = n.resolution, f = n.totalLength * t, h = n.lookup.length ? n.lookup[~~(f / n.minLength)] || 0 : cs(s, f, t), l = h ? s[h - 1] : 0, u = s[h], u < f && (l = u, u = s[++h]), _ = 1 / o * ((f - l) / (u - l) + h % o), h = ~~(h / o) * 6, r && _ === 1 && (h + 6 < n.length ? (h += 6, _ = 0) : i + 1 < a.length && (h = _ = 0, n = a[++i]));
  }
  return e.t = _, e.i = h, e.path = a, e.segment = n, e.segIndex = i, e;
}
function an(a, t, e, r) {
  var i = a[0], n = r || {}, s, o, f, l, u, h, _, d, p;
  if ((t < 0 || t > 1) && (t = hs(t)), i.lookup || ue(a), a.length > 1) {
    for (f = a.totalLength * t, u = h = 0; (u += a[h++].totalLength) < f; )
      i = a[h];
    l = u - i.totalLength, t = (f - l) / (u - l) || 0;
  }
  return s = i.samples, o = i.resolution, f = i.totalLength * t, h = i.lookup.length ? i.lookup[t < 1 ? ~~(f / i.minLength) : i.lookup.length - 1] || 0 : cs(s, f, t), l = h ? s[h - 1] : 0, u = s[h], u < f && (l = u, u = s[++h]), _ = 1 / o * ((f - l) / (u - l) + h % o) || 0, p = 1 - _, h = ~~(h / o) * 6, d = i[h], n.x = V((_ * _ * (i[h + 6] - d) + 3 * p * (_ * (i[h + 4] - d) + p * (i[h + 2] - d))) * _ + d), n.y = V((_ * _ * (i[h + 7] - (d = i[h + 1])) + 3 * p * (_ * (i[h + 5] - d) + p * (i[h + 3] - d))) * _ + d), e && (n.angle = i.totalLength ? _s(i, h, _ >= 1 ? 1 - 1e-9 : _ || 1e-9) : i.angle || 0), n;
}
function ze(a, t, e, r, i, n, s) {
  for (var o = a.length, f, l, u, h, _; --o > -1; )
    for (f = a[o], l = f.length, u = 0; u < l; u += 2)
      h = f[u], _ = f[u + 1], f[u] = h * t + _ * r + n, f[u + 1] = h * e + _ * i + s;
  return a._dirty = 1, a;
}
function da(a, t, e, r, i, n, s, o, f) {
  if (!(a === o && t === f)) {
    e = Pt(e), r = Pt(r);
    var l = i % 360 * Ko, u = or(l), h = sr(l), _ = Math.PI, d = _ * 2, p = (a - o) / 2, c = (t - f) / 2, m = u * p + h * c, x = -h * p + u * c, y = m * m, v = x * x, w = y / (e * e) + v / (r * r);
    w > 1 && (e = $t(w) * e, r = $t(w) * r);
    var b = e * e, T = r * r, k = (b * T - b * v - T * y) / (b * v + T * y);
    k < 0 && (k = 0);
    var S = (n === s ? -1 : 1) * $t(k), C = S * (e * x / r), M = S * -(r * m / e), N = (a + o) / 2, A = (t + f) / 2, R = N + (u * C - h * M), I = A + (h * C + u * M), z = (m - C) / e, F = (x - M) / r, Y = (-m - C) / e, tt = (-x - M) / r, ft = z * z + F * F, Mt = (F < 0 ? -1 : 1) * Math.acos(z / $t(ft)), X = (z * tt - F * Y < 0 ? -1 : 1) * Math.acos((z * Y + F * tt) / $t(ft * (Y * Y + tt * tt)));
    isNaN(X) && (X = _), !s && X > 0 ? X -= d : s && X < 0 && (X += d), Mt %= d, X %= d;
    var wt = Math.ceil(Pt(X) / (d / 4)), it = [], Q = X / wt, ut = 4 / 3 * sr(Q / 2) / (1 + or(Q / 2)), Qe = u * e, Ke = h * e, tr = h * -r, er = u * r, nt;
    for (nt = 0; nt < wt; nt++)
      i = Mt + nt * Q, m = or(i), x = sr(i), z = or(i += Q), F = sr(i), it.push(m - ut * x, x + ut * m, z + ut * F, F - ut * z, z, F);
    for (nt = 0; nt < it.length; nt += 2)
      m = it[nt], x = it[nt + 1], it[nt] = m * Qe + x * tr + R, it[nt + 1] = m * Ke + x * er + I;
    return it[nt - 2] = o, it[nt - 1] = f, it;
  }
}
function vr(a) {
  var t = (a + "").replace(Jo, function(C) {
    var M = +C;
    return M < 1e-4 && M > -1e-4 ? 0 : M;
  }).match(qo) || [], e = [], r = 0, i = 0, n = 2 / 3, s = t.length, o = 0, f = "ERROR: malformed path: " + a, l, u, h, _, d, p, c, m, x, y, v, w, b, T, k, S = function(M, N, A, R) {
    y = (A - M) / 3, v = (R - N) / 3, c.push(M + y, N + v, A - y, R - v, A, R);
  };
  if (!a || !isNaN(t[0]) || isNaN(t[1]))
    return console.log(f), e;
  for (l = 0; l < s; l++)
    if (b = d, isNaN(t[l]) ? (d = t[l].toUpperCase(), p = d !== t[l]) : l--, h = +t[l + 1], _ = +t[l + 2], p && (h += r, _ += i), l || (m = h, x = _), d === "M")
      c && (c.length < 8 ? e.length -= 1 : o += c.length), r = m = h, i = x = _, c = [h, _], e.push(c), l += 2, d = "L";
    else if (d === "C")
      c || (c = [0, 0]), p || (r = i = 0), c.push(h, _, r + t[l + 3] * 1, i + t[l + 4] * 1, r += t[l + 5] * 1, i += t[l + 6] * 1), l += 6;
    else if (d === "S")
      y = r, v = i, (b === "C" || b === "S") && (y += r - c[c.length - 4], v += i - c[c.length - 3]), p || (r = i = 0), c.push(y, v, h, _, r += t[l + 3] * 1, i += t[l + 4] * 1), l += 4;
    else if (d === "Q")
      y = r + (h - r) * n, v = i + (_ - i) * n, p || (r = i = 0), r += t[l + 3] * 1, i += t[l + 4] * 1, c.push(y, v, r + (h - r) * n, i + (_ - i) * n, r, i), l += 4;
    else if (d === "T")
      y = r - c[c.length - 4], v = i - c[c.length - 3], c.push(r + y, i + v, h + (r + y * 1.5 - h) * n, _ + (i + v * 1.5 - _) * n, r = h, i = _), l += 2;
    else if (d === "H")
      S(r, i, r = h, i), l += 1;
    else if (d === "V")
      S(r, i, r, i = h + (p ? i - r : 0)), l += 1;
    else if (d === "L" || d === "Z")
      d === "Z" && (h = m, _ = x, c.closed = !0), (d === "L" || Pt(r - h) > 0.5 || Pt(i - _) > 0.5) && (S(r, i, h, _), d === "L" && (l += 2)), r = h, i = _;
    else if (d === "A") {
      if (T = t[l + 4], k = t[l + 5], y = t[l + 6], v = t[l + 7], u = 7, T.length > 1 && (T.length < 3 ? (v = y, y = k, u--) : (v = k, y = T.substr(2), u -= 2), k = T.charAt(1), T = T.charAt(0)), w = da(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +T, +k, (p ? r : 0) + y * 1, (p ? i : 0) + v * 1), l += u, w)
        for (u = 0; u < w.length; u++)
          c.push(w[u]);
      r = c[c.length - 2], i = c[c.length - 1];
    } else
      console.log(f);
  return l = c.length, l < 6 ? (e.pop(), l = 0) : c[0] === c[l - 2] && c[1] === c[l - 1] && (c.closed = !0), e.totalPoints = o + l, e;
}
function pa(a, t) {
  t === void 0 && (t = 1);
  for (var e = a[0], r = 0, i = [e, r], n = 2; n < a.length; n += 2)
    i.push(e, r, a[n], r = (a[n] - e) * t / 2, e = a[n], -r);
  return i;
}
function si(a, t) {
  Pt(a[0] - a[2]) < 1e-4 && Pt(a[1] - a[3]) < 1e-4 && (a = a.slice(2));
  var e = a.length - 2, r = +a[0], i = +a[1], n = +a[2], s = +a[3], o = [r, i, r, i], f = n - r, l = s - i, u = Math.abs(a[e] - r) < 1e-3 && Math.abs(a[e + 1] - i) < 1e-3, h, _, d, p, c, m, x, y, v, w, b, T, k, S, C;
  for (u && (a.push(n, s), n = r, s = i, r = a[e - 2], i = a[e - 1], a.unshift(r, i), e += 4), t = t || t === 0 ? +t : 1, d = 2; d < e; d += 2)
    h = r, _ = i, r = n, i = s, n = +a[d + 2], s = +a[d + 3], !(r === n && i === s) && (p = f, c = l, f = n - r, l = s - i, m = $t(p * p + c * c), x = $t(f * f + l * l), y = $t(Math.pow(f / x + p / m, 2) + Math.pow(l / x + c / m, 2)), v = (m + x) * t * 0.25 / y, w = r - (r - h) * (m ? v / m : 0), b = r + (n - r) * (x ? v / x : 0), T = r - (w + ((b - w) * (m * 3 / (m + x) + 0.5) / 4 || 0)), k = i - (i - _) * (m ? v / m : 0), S = i + (s - i) * (x ? v / x : 0), C = i - (k + ((S - k) * (m * 3 / (m + x) + 0.5) / 4 || 0)), (r !== h || i !== _) && o.push(
      V(w + T),
      // first control point
      V(k + C),
      V(r),
      // anchor
      V(i),
      V(b + T),
      // second control point
      V(S + C)
    ));
  return r !== n || i !== s || o.length < 4 ? o.push(V(n), V(s), V(n), V(s)) : o.length -= 2, o.length === 2 ? o.push(r, i, r, i, r, i) : u && (o.splice(0, 6), o.length = o.length - 6), o;
}
function ps(a) {
  us(a[0]) && (a = [a]);
  var t = "", e = a.length, r, i, n, s;
  for (i = 0; i < e; i++) {
    for (s = a[i], t += "M" + V(s[0]) + "," + V(s[1]) + " C", r = s.length, n = 2; n < r; n++)
      t += V(s[n++]) + "," + V(s[n++]) + " " + V(s[n++]) + "," + V(s[n++]) + " " + V(s[n++]) + "," + V(s[n]) + " ";
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
var Yt, he, Si, Sr, Fe, hr, br, $e, Rt = "transform", oi = Rt + "Origin", gs, ms = function(t) {
  var e = t.ownerDocument || t;
  for (!(Rt in t.style) && ("msTransform" in t.style) && (Rt = "msTransform", oi = Rt + "Origin"); e.parentNode && (e = e.parentNode); )
    ;
  if (he = window, br = new He(), e) {
    Yt = e, Si = e.documentElement, Sr = e.body, $e = Yt.createElementNS("http://www.w3.org/2000/svg", "g"), $e.style.transform = "none";
    var r = e.createElement("div"), i = e.createElement("div"), n = e && (e.body || e.firstElementChild);
    n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), gs = i.offsetParent !== r, n.removeChild(r));
  }
  return e;
}, ga = function(t) {
  for (var e, r; t && t !== Sr; )
    r = t._gsap, r && r.uncache && r.get(t, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), e ? e.push(r) : e = [r]), t = t.parentNode;
  return e;
}, xs = [], ys = [], ma = function() {
  return he.pageYOffset || Yt.scrollTop || Si.scrollTop || Sr.scrollTop || 0;
}, xa = function() {
  return he.pageXOffset || Yt.scrollLeft || Si.scrollLeft || Sr.scrollLeft || 0;
}, Ei = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, ya = function a(t) {
  if (he.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return a(t);
}, Br = function a(t, e) {
  if (t.parentNode && (Yt || ms(t))) {
    var r = Ei(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = r ? e ? "rect" : "g" : "div", s = e !== 2 ? 0 : 100, o = e === 3 ? 100 : 0, f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = Yt.createElementNS ? Yt.createElementNS(i.replace(/^https/, "http"), n) : Yt.createElement(n);
    return e && (r ? (hr || (hr = a(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), hr.appendChild(l)) : (Fe || (Fe = a(t), Fe.style.cssText = f), l.style.cssText = f + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", Fe.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, va = function(t) {
  for (var e = new He(), r = 0; r < t.numberOfItems; r++)
    e.multiply(t.getItem(r).matrix);
  return e;
}, ba = function(t) {
  var e = t.getCTM(), r;
  return e || (r = t.style[Rt], t.style[Rt] = "none", t.appendChild($e), e = $e.getCTM(), t.removeChild($e), r ? t.style[Rt] = r : t.style.removeProperty(Rt.replace(/([A-Z])/g, "-$1").toLowerCase())), e || br.clone();
}, Ca = function(t, e) {
  var r = Ei(t), i = t === r, n = r ? xs : ys, s = t.parentNode, o, f, l, u, h, _;
  if (t === he)
    return t;
  if (n.length || n.push(Br(t, 1), Br(t, 2), Br(t, 3)), o = r ? hr : Fe, r)
    i ? (l = ba(t), u = -l.e / l.a, h = -l.f / l.d, f = br) : t.getBBox ? (l = t.getBBox(), f = t.transform ? t.transform.baseVal : {}, f = f.numberOfItems ? f.numberOfItems > 1 ? va(f) : f.getItem(0).matrix : br, u = f.a * l.x + f.c * l.y, h = f.b * l.x + f.d * l.y) : (f = new He(), u = h = 0), e && t.tagName.toLowerCase() === "g" && (u = h = 0), (i ? r : s).appendChild(o), o.setAttribute("transform", "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + (f.e + u) + "," + (f.f + h) + ")");
  else {
    if (u = h = 0, gs)
      for (f = t.offsetParent, l = t; l && (l = l.parentNode) && l !== f && l.parentNode; )
        (he.getComputedStyle(l)[Rt] + "").length > 4 && (u = l.offsetLeft, h = l.offsetTop, l = 0);
    if (_ = he.getComputedStyle(t), _.position !== "absolute" && _.position !== "fixed")
      for (f = t.offsetParent; s && s !== f; )
        u += s.scrollLeft || 0, h += s.scrollTop || 0, s = s.parentNode;
    l = o.style, l.top = t.offsetTop - h + "px", l.left = t.offsetLeft - u + "px", l[Rt] = _[Rt], l[oi] = _[oi], l.position = _.position === "fixed" ? "fixed" : "absolute", t.parentNode.appendChild(o);
  }
  return o;
}, Vr = function(t, e, r, i, n, s, o) {
  return t.a = e, t.b = r, t.c = i, t.d = n, t.e = s, t.f = o, t;
}, He = /* @__PURE__ */ function() {
  function a(e, r, i, n, s, o) {
    e === void 0 && (e = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), Vr(this, e, r, i, n, s, o);
  }
  var t = a.prototype;
  return t.inverse = function() {
    var r = this.a, i = this.b, n = this.c, s = this.d, o = this.e, f = this.f, l = r * s - i * n || 1e-10;
    return Vr(this, s / l, -i / l, -n / l, r / l, (n * f - s * o) / l, -(r * f - i * o) / l);
  }, t.multiply = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, f = this.e, l = this.f, u = r.a, h = r.c, _ = r.b, d = r.d, p = r.e, c = r.f;
    return Vr(this, u * i + _ * s, u * n + _ * o, h * i + d * s, h * n + d * o, f + p * i + c * s, l + p * n + c * o);
  }, t.clone = function() {
    return new a(this.a, this.b, this.c, this.d, this.e, this.f);
  }, t.equals = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, f = this.e, l = this.f;
    return i === r.a && n === r.b && s === r.c && o === r.d && f === r.e && l === r.f;
  }, t.apply = function(r, i) {
    i === void 0 && (i = {});
    var n = r.x, s = r.y, o = this.a, f = this.b, l = this.c, u = this.d, h = this.e, _ = this.f;
    return i.x = n * o + s * l + h || 0, i.y = n * f + s * u + _ || 0, i;
  }, a;
}();
function Te(a, t, e, r) {
  if (!a || !a.parentNode || (Yt || ms(a)).documentElement === a)
    return new He();
  var i = ga(a), n = Ei(a), s = n ? xs : ys, o = Ca(a, e), f = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), u = s[2].getBoundingClientRect(), h = o.parentNode, _ = !r && ya(a), d = new He((l.left - f.left) / 100, (l.top - f.top) / 100, (u.left - f.left) / 100, (u.top - f.top) / 100, f.left + (_ ? 0 : xa()), f.top + (_ ? 0 : ma()));
  if (h.removeChild(o), i)
    for (f = i.length; f--; )
      l = i[f], l.scaleX = l.scaleY = 0, l.renderTransform(1, l);
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
var wa = "x,translateX,left,marginLeft,xPercent".split(","), Ta = "y,translateY,top,marginTop,yPercent".split(","), ka = Math.PI / 180, kt, vs, me, ai, Ir, ln, Sa = function() {
  return kt || typeof window < "u" && (kt = window.gsap) && kt.registerPlugin && kt;
}, Le = function(t, e, r, i) {
  for (var n = e.length, s = i === 2 ? 0 : i, o = 0; o < n; o++)
    t[s] = parseFloat(e[o][r]), i === 2 && (t[s + 1] = 0), s += 2;
  return t;
}, ve = function(t, e, r) {
  return parseFloat(t._gsap.get(t, e, r || "px")) || 0;
}, bs = function(t) {
  var e = t[0], r = t[1], i;
  for (i = 2; i < t.length; i += 2)
    e = t[i] += e, r = t[i + 1] += r;
}, fn = function(t, e, r, i, n, s, o, f, l) {
  if (o.type === "cubic")
    e = [e];
  else {
    o.fromCurrent !== !1 && e.unshift(ve(r, i, f), n ? ve(r, n, l) : 0), o.relative && bs(e);
    var u = n ? si : pa;
    e = [u(e, o.curviness)];
  }
  return e = s(Cs(e, r, o)), Cr(t, r, i, e, "x", f), n && Cr(t, r, n, e, "y", l), ue(e, o.resolution || (o.curviness === 0 ? 20 : 12));
}, Ea = function(t) {
  return t;
}, Pa = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, un = function(t, e, r) {
  var i = Te(t), n = 0, s = 0, o;
  return (t.tagName + "").toLowerCase() === "svg" ? (o = t.viewBox.baseVal, o.width || (o = {
    width: +t.getAttribute("width"),
    height: +t.getAttribute("height")
  })) : o = e && t.getBBox && t.getBBox(), e && e !== "auto" && (n = e.push ? e[0] * (o ? o.width : t.offsetWidth || 0) : e.x, s = e.push ? e[1] * (o ? o.height : t.offsetHeight || 0) : e.y), r.apply(n || s ? i.apply({
    x: n,
    y: s
  }) : {
    x: i.e,
    y: i.f
  });
}, li = function(t, e, r, i) {
  var n = Te(t.parentNode, !0, !0), s = n.clone().multiply(Te(e)), o = un(t, r, n), f = un(e, i, n), l = f.x, u = f.y, h;
  return s.e = s.f = 0, i === "auto" && e.getTotalLength && e.tagName.toLowerCase() === "path" && (h = e.getAttribute("d").match(Pa) || [], h = s.apply({
    x: +h[0],
    y: +h[1]
  }), l += h.x, u += h.y), h && (h = s.apply(e.getBBox()), l -= h.x, u -= h.y), s.e = l - o.x, s.f = u - o.y, s;
}, Cs = function(t, e, r) {
  var i = r.align, n = r.matrix, s = r.offsetX, o = r.offsetY, f = r.alignOrigin, l = t[0][0], u = t[0][1], h = ve(e, "x"), _ = ve(e, "y"), d, p, c;
  return !t || !t.length ? ur("M0,0L0,0") : (i && (i === "self" || (d = ai(i)[0] || e) === e ? ze(t, 1, 0, 0, 1, h - l, _ - u) : (f && f[2] !== !1 ? kt.set(e, {
    transformOrigin: f[0] * 100 + "% " + f[1] * 100 + "%"
  }) : f = [ve(e, "xPercent") / -100, ve(e, "yPercent") / -100], p = li(e, d, f, "auto"), c = p.apply({
    x: l,
    y: u
  }), ze(t, p.a, p.b, p.c, p.d, h + p.e - (c.x - p.e), _ + p.f - (c.y - p.f)))), n ? ze(t, n.a, n.b, n.c, n.d, n.e, n.f) : (s || o) && ze(t, 1, 0, 0, 1, s || 0, o || 0), t);
}, Cr = function(t, e, r, i, n, s) {
  var o = e._gsap, f = o.harness, l = f && f.aliases && f.aliases[r], u = l && l.indexOf(",") < 0 ? l : r, h = t._pt = new vs(t._pt, e, u, 0, 0, Ea, 0, o.set(e, u, t));
  h.u = me(o.get(e, u, s)) || 0, h.path = i, h.pp = n, t._props.push(u);
}, Oa = function(t, e) {
  return function(r) {
    return t || e !== 1 ? ds(r, t, e) : r;
  };
}, ws = {
  version: "3.12.5",
  name: "motionPath",
  register: function(t, e, r) {
    kt = t, me = kt.utils.getUnit, ai = kt.utils.toArray, Ir = kt.core.getStyleSaver, ln = kt.core.reverting || function() {
    }, vs = r;
  },
  init: function(t, e, r) {
    if (!kt)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof e == "object" && !e.style) || !e.path) && (e = {
      path: e
    });
    var i = [], n = e, s = n.path, o = n.autoRotate, f = n.unitX, l = n.unitY, u = n.x, h = n.y, _ = s[0], d = Oa(e.start, "end" in e ? e.end : 1), p, c;
    if (this.rawPaths = i, this.target = t, this.tween = r, this.styles = Ir && Ir(t, "transform"), (this.rotate = o || o === 0) && (this.rOffset = parseFloat(o) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = me(t._gsap.get(t, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && typeof _ != "number") {
      for (c in _)
        !u && ~wa.indexOf(c) ? u = c : !h && ~Ta.indexOf(c) && (h = c);
      u && h ? i.push(fn(this, Le(Le([], s, u, 0), s, h, 1), t, u, h, d, e, f || me(s[0][u]), l || me(s[0][h]))) : u = h = 0;
      for (c in _)
        c !== u && c !== h && i.push(fn(this, Le([], s, c, 2), t, c, 0, d, e, me(s[0][c])));
    } else
      p = d(Cs(ur(e.path), t, e)), ue(p, e.resolution), i.push(p), Cr(this, t, e.x || "x", p, "x", e.unitX || "px"), Cr(this, t, e.y || "y", p, "y", e.unitY || "px");
  },
  render: function(t, e) {
    var r = e.rawPaths, i = r.length, n = e._pt;
    if (e.tween._time || !ln()) {
      for (t > 1 ? t = 1 : t < 0 && (t = 0); i--; )
        an(r[i], t, !i && e.rotate, r[i]);
      for (; n; )
        n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, t), n = n._next;
      e.rotate && e.rSet(e.target, e.rProp, r[0].angle * (e.radians ? ka : 1) + e.rOffset + e.ru, e, t);
    } else
      e.styles.revert();
  },
  getLength: function(t) {
    return ue(ur(t)).totalLength;
  },
  sliceRawPath: ds,
  getRawPath: ur,
  pointsToSegment: si,
  stringToRawPath: vr,
  rawPathToString: ps,
  transformRawPath: ze,
  getGlobalMatrix: Te,
  getPositionOnPath: an,
  cacheRawPathMeasurements: ue,
  convertToPath: function(t, e) {
    return ai(t).map(function(r) {
      return ca(r, e !== !1);
    });
  },
  convertCoordinates: function(t, e, r) {
    var i = Te(e, !0, !0).multiply(Te(t));
    return r ? i.apply(r) : i;
  },
  getAlignMatrix: li,
  getRelativePosition: function(t, e, r, i) {
    var n = li(t, e, r, i);
    return {
      x: n.e,
      y: n.f
    };
  },
  arrayToRawPath: function(t, e) {
    e = e || {};
    var r = Le(Le([], t, e.x || "x", 0), t, e.y || "y", 1);
    return e.relative && bs(r), [e.type === "cubic" ? r : si(r, e.curviness)];
  }
};
Sa() && kt.registerPlugin(ws);
Nt.registerPlugin(ws);
const ja = ({ children: a }) => /* @__PURE__ */ O.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ O.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ O.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ O.jsx(Ns, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ O.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ O.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ O.jsx(Fi, {}) }),
  /* @__PURE__ */ O.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ O.jsx(Fi, {}) }),
  /* @__PURE__ */ O.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ O.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ O.jsx("div", { className: "content", children: a }) }) })
] }), za = ({
  headBlockChildren: a,
  width: t,
  height: e,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: s
}) => /* @__PURE__ */ O.jsxs("div", { className: "card-container relative", style: { width: t, height: e }, children: [
  /* @__PURE__ */ O.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ O.jsx("div", { className: `text-${i} head-block`, children: a }),
        /* @__PURE__ */ O.jsx("div", { className: `text-${i} main-block'`, children: n })
      ]
    }
  ),
  /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `artifact text-${r} ${s ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ O.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] }), Ma = (a) => /* @__PURE__ */ j.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...a }, /* @__PURE__ */ j.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ j.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ j.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ j.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ j.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ j.createElement("defs", null, /* @__PURE__ */ j.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ j.createElement("rect", { width: 80, height: 80, fill: "white" })))), Fa = ({ width: a, height: t, onCLick: e }) => {
  const r = Li(null), i = Li(
    Nt.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), n = (l) => (i.current.clear(), i.current.to(l(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(l(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(l(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(l(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(l(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(l(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(l(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(l(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(l("text"), {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  }).to(l(".scanner"), {
    opacity: 1,
    y: 80,
    duration: 1,
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
  })), s = (l, u = !1) => {
    l.forEach((h) => {
      const _ = h.getTotalLength();
      u ? Nt.to(h, {
        stroke: "currentColor"
      }) : (Nt.set(h, {
        strokeDasharray: _,
        strokeDashoffset: _,
        stroke: "transparent"
      }), Nt.to(h, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, o = () => {
    const l = Nt.utils.selector(r.current), u = l(".stroke-fng");
    s(u), n(l), i.current.play();
  }, f = () => {
    if (r.current) {
      const l = Nt.utils.selector(r.current), u = l(".stroke-fng");
      i.current.reverse(), Nt.killTweensOf(u), s(u, !0), Nt.killTweensOf(l(".scanner")), Nt.set(l(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ O.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: o,
      onMouseLeave: f,
      onClick: e,
      style: { width: `${a}px`, height: `${t}px` },
      children: /* @__PURE__ */ O.jsx(Ma, { ref: r })
    }
  );
};
export {
  za as Card,
  Ra as EvaBorderPanel,
  Da as EvaOptionList,
  Aa as EvaProgressBar,
  Ns as EvaTilePanel,
  La as EvaUnitBox,
  Fa as FingerPrintButton,
  ja as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
