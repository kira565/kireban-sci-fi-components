import ws, { useMemo as Ss, createElement as Ps } from "react";
var er = { exports: {} }, ke = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ai;
function Os() {
  if (Ai) return ke;
  Ai = 1;
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
  return ke.Fragment = t, ke.jsx = e, ke.jsxs = e, ke;
}
var Me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ni;
function Cs() {
  return Ni || (Ni = 1, process.env.NODE_ENV !== "production" && function() {
    function a(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === K ? null : g.displayName || g.name || null;
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
        case N:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case M:
            return (g.displayName || "Context") + ".Provider";
          case T:
            return (g._context.displayName || "Context") + ".Consumer";
          case R:
            var C = g.render;
            return g = g.displayName, g || (g = C.displayName || C.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case I:
            return C = g.displayName || null, C !== null ? C : a(g.type) || "Memo";
          case j:
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
    function r() {
    }
    function i() {
      if (J === 0) {
        ft = console.log, Ze = console.info, Je = console.warn, Qe = console.error, Ke = console.group, it = console.groupCollapsed, Oi = console.groupEnd;
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
      J++;
    }
    function n() {
      if (J--, J === 0) {
        var g = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: X({}, g, { value: ft }),
          info: X({}, g, { value: Ze }),
          warn: X({}, g, { value: Je }),
          error: X({}, g, { value: Qe }),
          group: X({}, g, { value: Ke }),
          groupCollapsed: X({}, g, { value: it }),
          groupEnd: X({}, g, { value: Oi })
        });
      }
      0 > J && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(g) {
      if (Pr === void 0)
        try {
          throw Error();
        } catch (E) {
          var C = E.stack.trim().match(/\n( *(at )?)/);
          Pr = C && C[1] || "", Ci = -1 < E.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < E.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Pr + g + Ci;
    }
    function o(g, C) {
      if (!g || Or) return "";
      var E = Cr.get(g);
      if (E !== void 0) return E;
      Or = !0, E = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var F = null;
      F = lt.H, lt.H = null, i();
      try {
        var nt = {
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
                    var tr = zt;
                  }
                  Reflect.construct(g, [], Ut);
                } else {
                  try {
                    Ut.call();
                  } catch (zt) {
                    tr = zt;
                  }
                  g.call(Ut.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (zt) {
                  tr = zt;
                }
                (Ut = g()) && typeof Ut.catch == "function" && Ut.catch(function() {
                });
              }
            } catch (zt) {
              if (zt && tr && typeof zt.stack == "string")
                return [zt.stack, tr.stack];
            }
            return [null, null];
          }
        };
        nt.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var G = Object.getOwnPropertyDescriptor(
          nt.DetermineComponentFrameRoot,
          "name"
        );
        G && G.configurable && Object.defineProperty(
          nt.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var D = nt.DetermineComponentFrameRoot(), jt = D[0], _e = D[1];
        if (jt && _e) {
          var ut = jt.split(`
`), Kt = _e.split(`
`);
          for (D = G = 0; G < ut.length && !ut[G].includes(
            "DetermineComponentFrameRoot"
          ); )
            G++;
          for (; D < Kt.length && !Kt[D].includes(
            "DetermineComponentFrameRoot"
          ); )
            D++;
          if (G === ut.length || D === Kt.length)
            for (G = ut.length - 1, D = Kt.length - 1; 1 <= G && 0 <= D && ut[G] !== Kt[D]; )
              D--;
          for (; 1 <= G && 0 <= D; G--, D--)
            if (ut[G] !== Kt[D]) {
              if (G !== 1 || D !== 1)
                do
                  if (G--, D--, 0 > D || ut[G] !== Kt[D]) {
                    var Ee = `
` + ut[G].replace(
                      " at new ",
                      " at "
                    );
                    return g.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", g.displayName)), typeof g == "function" && Cr.set(g, Ee), Ee;
                  }
                while (1 <= G && 0 <= D);
              break;
            }
        }
      } finally {
        Or = !1, lt.H = F, n(), Error.prepareStackTrace = E;
      }
      return ut = (ut = g ? g.displayName || g.name : "") ? s(ut) : "", typeof g == "function" && Cr.set(g, ut), ut;
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
        case N:
          return s("Suspense");
        case A:
          return s("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case R:
            return g = o(g.render, !1), g;
          case I:
            return f(g.type);
          case j:
            C = g._payload, g = g._init;
            try {
              return f(g(C));
            } catch {
            }
        }
      return "";
    }
    function l() {
      var g = lt.A;
      return g === null ? null : g.getOwner();
    }
    function u(g) {
      if (kt.call(g, "key")) {
        var C = Object.getOwnPropertyDescriptor(g, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function h(g, C) {
      function E() {
        Ei || (Ei = !0, console.error(
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
      return ki[g] || (ki[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function d(g, C, E, F, nt, G) {
      return E = G.ref, g = {
        $$typeof: w,
        type: g,
        key: C,
        props: G,
        _owner: nt
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
    function p(g, C, E, F, nt, G) {
      if (typeof g == "string" || typeof g == "function" || g === S || g === O || g === P || g === N || g === A || g === z || typeof g == "object" && g !== null && (g.$$typeof === j || g.$$typeof === I || g.$$typeof === M || g.$$typeof === T || g.$$typeof === R || g.$$typeof === Tt || g.getModuleId !== void 0)) {
        var D = C.children;
        if (D !== void 0)
          if (F)
            if (rt(D)) {
              for (F = 0; F < D.length; F++)
                c(D[F], g);
              Object.freeze && Object.freeze(D);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(D, g);
      } else
        D = "", (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), g === null ? F = "null" : rt(g) ? F = "array" : g !== void 0 && g.$$typeof === w ? (F = "<" + (a(g.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : F = typeof g, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          F,
          D
        );
      if (kt.call(C, "key")) {
        D = a(g);
        var jt = Object.keys(C).filter(function(ut) {
          return ut !== "key";
        });
        F = 0 < jt.length ? "{key: someKey, " + jt.join(": ..., ") + ": ...}" : "{key: someKey}", Mi[D + F] || (jt = 0 < jt.length ? "{" + jt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          F,
          D,
          jt,
          D
        ), Mi[D + F] = !0);
      }
      if (D = null, E !== void 0 && (e(E), D = "" + E), u(C) && (e(C.key), D = "" + C.key), "key" in C) {
        E = {};
        for (var _e in C)
          _e !== "key" && (E[_e] = C[_e]);
      } else E = C;
      return D && h(
        E,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), d(g, D, G, nt, l(), E);
    }
    function c(g, C) {
      if (typeof g == "object" && g && g.$$typeof !== Ts) {
        if (rt(g))
          for (var E = 0; E < g.length; E++) {
            var F = g[E];
            m(F) && x(F, C);
          }
        else if (m(g))
          g._store && (g._store.validated = 1);
        else if (g === null || typeof g != "object" ? E = null : (E = Y && g[Y] || g["@@iterator"], E = typeof E == "function" ? E : null), typeof E == "function" && E !== g.entries && (E = E.call(g), E !== g))
          for (; !(g = E.next()).done; )
            m(g.value) && x(g.value, C);
      }
    }
    function m(g) {
      return typeof g == "object" && g !== null && g.$$typeof === w;
    }
    function x(g, C) {
      if (g._store && !g._store.validated && g.key == null && (g._store.validated = 1, C = y(C), !Ri[C])) {
        Ri[C] = !0;
        var E = "";
        g && g._owner != null && g._owner !== l() && (E = null, typeof g._owner.tag == "number" ? E = a(g._owner.type) : typeof g._owner.name == "string" && (E = g._owner.name), E = " It was passed a child from " + E + ".");
        var F = lt.getCurrentStack;
        lt.getCurrentStack = function() {
          var nt = f(g.type);
          return F && (nt += F() || ""), nt;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          C,
          E
        ), lt.getCurrentStack = F;
      }
    }
    function y(g) {
      var C = "", E = l();
      return E && (E = a(E.type)) && (C = `

Check the render method of \`` + E + "`."), C || (g = a(g)) && (C = `

Check the top-level render call using <` + g + ">."), C;
    }
    var v = ws, w = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), M = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Y = Symbol.iterator, K = Symbol.for("react.client.reference"), lt = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, kt = Object.prototype.hasOwnProperty, X = Object.assign, Tt = Symbol.for("react.client.reference"), rt = Array.isArray, J = 0, ft, Ze, Je, Qe, Ke, it, Oi;
    r.__reactDisabledLog = !0;
    var Pr, Ci, Or = !1, Cr = new (typeof WeakMap == "function" ? WeakMap : Map)(), Ts = Symbol.for("react.client.reference"), Ei, ki = {}, Mi = {}, Ri = {};
    Me.Fragment = S, Me.jsx = function(g, C, E, F, nt) {
      return p(g, C, E, !1, F, nt);
    }, Me.jsxs = function(g, C, E, F, nt) {
      return p(g, C, E, !0, F, nt);
    };
  }()), Me;
}
var Di;
function Es() {
  return Di || (Di = 1, process.env.NODE_ENV === "production" ? er.exports = Os() : er.exports = Cs()), er.exports;
}
var k = Es();
const ka = ({
  children: a,
  mode: t = "warning",
  pulseAnimation: e = !0
}) => /* @__PURE__ */ k.jsx("div", { className: `piece ${e && "animate-pulse"}`, children: /* @__PURE__ */ k.jsx(
  "div",
  {
    className: `glowedBorder ${t === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${t} label`,
    children: a
  }
) }), Ma = ({ barsCount: a, currentBarIndex: t }) => {
  function e() {
    const r = [];
    for (let i = 0; i < a; i++)
      r.push(
        /* @__PURE__ */ k.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < t ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ k.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${a * 10}px` }, children: [
    /* @__PURE__ */ k.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ k.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ k.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ k.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ k.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ k.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ k.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: e() }),
    /* @__PURE__ */ k.jsx("div", { className: "h-[15px]" })
  ] });
}, Ra = ({ unitNumber: a, subjectName: t }) => /* @__PURE__ */ k.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ k.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ k.jsx("div", { className: "text-2xl font-[600] label", children: a }),
  /* @__PURE__ */ k.jsx("div", { className: "text-xl font-[400] label", children: t })
] }), ks = ({
  rowsCount: a,
  tilesPerRowCount: t,
  animationActive: e = !1
}) => {
  function r() {
    return Array(a).fill(null).map((i, n) => /* @__PURE__ */ k.jsx("div", { className: "hex-row rotate-method", children: Array(t).fill(null).map((s, o) => /* @__PURE__ */ k.jsx("div", { className: `hex ${e ? "animation-active" : ""}` }, o)) }, n));
  }
  return /* @__PURE__ */ k.jsx("div", { className: "piece rotateMethod", children: r() });
}, Ms = (a) => Ss(() => {
  const t = (n, s) => {
    const o = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return o[(n + s) % o.length];
  }, e = (n, s) => (n % s).toString(), r = `U-${e(a * 3, 9)}`, i = `${t(a, 20)}${e(a * 7, 99)}`;
  return `${r}${i}`;
}, [a]), Rs = ({ title: a, sciFiCode: t, isActive: e }) => {
  const r = Ms(t);
  return /* @__PURE__ */ k.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ k.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${e ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ k.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ k.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${e ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ k.jsx(
                "div",
                {
                  className: `font-bold w-full ${e ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: a
                }
              ),
              /* @__PURE__ */ k.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ k.jsx(
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
}, Aa = ({ options: a, width: t = "w-full" }) => /* @__PURE__ */ k.jsx("div", { className: `flex flex-col gap-2 ${t}`, children: a.map((e, r) => /* @__PURE__ */ Ps(Rs, { ...e, key: r, sciFiCode: r })) }), Li = () => /* @__PURE__ */ k.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ k.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ k.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ k.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ k.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ k.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] });
function Ft(a) {
  if (a === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function ln(a, t) {
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
var vt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, we = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, ai, ot, U, Pt = 1e8, V = 1 / Pt, Ir = Math.PI * 2, As = Ir / 4, Ns = 0, fn = Math.sqrt, Ds = Math.cos, Ls = Math.sin, et = function(t) {
  return typeof t == "string";
}, H = function(t) {
  return typeof t == "function";
}, Yt = function(t) {
  return typeof t == "number";
}, li = function(t) {
  return typeof t > "u";
}, Lt = function(t) {
  return typeof t == "object";
}, ct = function(t) {
  return t !== !1;
}, fi = function() {
  return typeof window < "u";
}, rr = function(t) {
  return H(t) || et(t);
}, un = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, at = Array.isArray, $r = /(?:-?\.?\d|\.)+/gi, hn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ge = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Er = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, cn = /[+-]=-?[.\d]+/, _n = /[^,'"\[\]\s]+/gi, js = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, q, Rt, Yr, ui, bt = {}, ur = {}, dn, pn = function(t) {
  return (ur = ue(t, bt)) && gt;
}, hi = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, $e = function(t, e) {
  return !e && console.warn(t);
}, gn = function(t, e) {
  return t && (bt[t] = e) && ur && (ur[t] = e) || bt;
}, Ye = function() {
  return 0;
}, zs = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, sr = {
  suppressEvents: !0,
  kill: !1
}, Fs = {
  suppressEvents: !0
}, ci = {}, Wt = [], Vr = {}, mn, mt = {}, kr = {}, ji = 30, or = [], _i = "", di = function(t) {
  var e = t[0], r, i;
  if (Lt(e) || H(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = or.length; i-- && !or[i].targetTest(e); )
      ;
    r = or[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new $n(t[i], r))) || t.splice(i, 1);
  return t;
}, ne = function(t) {
  return t._gsap || di(Ot(t))[0]._gsap;
}, xn = function(t, e, r) {
  return (r = t[e]) && H(r) ? t[e]() : li(r) && t.getAttribute && t.getAttribute(e) || r;
}, _t = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, Z = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, tt = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, ye = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Bs = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, hr = function() {
  var t = Wt.length, e = Wt.slice(0), r, i;
  for (Vr = {}, Wt.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, yn = function(t, e, r, i) {
  Wt.length && !ot && hr(), t.render(e, r, ot && e < 0 && (t._initted || t._startAt)), Wt.length && !ot && hr();
}, vn = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(_n).length < 2 ? e : et(t) ? t.trim() : t;
}, bn = function(t) {
  return t;
}, Et = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Is = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, ue = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, zi = function a(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Lt(e[r]) ? a(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, cr = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, ze = function(t) {
  var e = t.parent || q, r = t.keyframes ? Is(at(t.keyframes)) : Et;
  if (ct(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, $s = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Tn = function(t, e, r, i, n) {
  var s = t[i], o;
  if (n)
    for (o = e[n]; s && s[n] > o; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, br = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Zt = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, se = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, Ys = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, Ur = function(t, e, r, i) {
  return t._startAt && (ot ? t._startAt.revert(sr) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Vs = function a(t) {
  return !t || t._ts && a(t.parent);
}, Fi = function(t) {
  return t._repeat ? Se(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, Se = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, _r = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, Tr = function(t) {
  return t._end = tt(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
}, wr = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = tt(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Tr(t), r._dirty || se(r, t)), t;
}, wn = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = _r(t.rawTime(), e), (!e._dur || He(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), se(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -V;
  }
}, At = function(t, e, r, i) {
  return e.parent && Zt(e), e._start = tt((Yt(r) ? r : r || t !== q ? wt(t, r, e) : t._time) + e._delay), e._end = tt(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Tn(t, e, "_first", "_last", t._sort ? "_start" : 0), Xr(e) || (t._recent = e), i || wn(t, e), t._ts < 0 && wr(t, t._tTime), t;
}, Sn = function(t, e) {
  return (bt.ScrollTrigger || hi("scrollTrigger", e)) && bt.ScrollTrigger.create(e, t);
}, Pn = function(t, e, r, i, n) {
  if (gi(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !ot && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && mn !== xt.frame)
    return Wt.push(t), t._lazy = [n, i], 1;
}, Us = function a(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || a(e));
}, Xr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Xs = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Us(t) && !(!t._initted && Xr(t)) || (t._ts < 0 || t._dp._ts < 0) && !Xr(t)) ? 0 : 1, o = t._rDelay, f = 0, l, u, h;
  if (o && t._repeat && (f = He(0, t._tDur, e), u = Se(f, o), t._yoyo && u & 1 && (s = 1 - s), u !== Se(t._tTime, o) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || ot || i || t._zTime === V || !e && t._zTime) {
    if (!t._initted && Pn(t, e, i, r, f))
      return;
    for (h = t._zTime, t._zTime = e || (r ? V : 0), r || (r = e && !h), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = f, l = t._pt; l; )
      l.r(s, l.d), l = l._next;
    e < 0 && Ur(t, e, r, !0), t._onUpdate && !r && yt(t, "onUpdate"), f && t._repeat && !r && t.parent && yt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Zt(t, 1), !r && !ot && (yt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, Gs = function(t, e, r) {
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
}, Pe = function(t, e, r, i) {
  var n = t._repeat, s = tt(e) || 0, o = t._tTime / t._tDur;
  return o && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : tt(s * (n + 1) + t._rDelay * n) : s, o > 0 && !i && wr(t, t._tTime = t._tDur * o), t.parent && Tr(t), r || se(t.parent, t), t;
}, Bi = function(t) {
  return t instanceof ht ? se(t) : Pe(t, t._dur);
}, qs = {
  _start: 0,
  endTime: Ye,
  totalDuration: Ye
}, wt = function a(t, e, r) {
  var i = t.labels, n = t._recent || qs, s = t.duration() >= Pt ? n.endTime(!1) : t._dur, o, f, l;
  return et(e) && (isNaN(e) || e in i) ? (f = e.charAt(0), l = e.substr(-1) === "%", o = e.indexOf("="), f === "<" || f === ">" ? (o >= 0 && (e = e.replace(/=/, "")), (f === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (e in i || (i[e] = s), i[e]) : (f = parseFloat(e.charAt(o - 1) + e.substr(o + 1)), l && r && (f = f / 100 * (at(r) ? r[0] : r).totalDuration()), o > 1 ? a(t, e.substr(0, o - 1), r) + f : s + f)) : e == null ? s : +e;
}, Fe = function(t, e, r) {
  var i = Yt(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], o, f;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (o = s, f = r; f && !("immediateRender" in o); )
      o = f.vars.defaults || {}, f = ct(f.vars.inherit) && f.parent;
    s.immediateRender = ct(o.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new Q(e[0], s, e[n + 1]);
}, Qt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, He = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, st = function(t, e) {
  return !et(t) || !(e = js.exec(t)) ? "" : e[1];
}, Ws = function(t, e, r) {
  return Qt(r, function(i) {
    return He(t, e, i);
  });
}, Gr = [].slice, On = function(t, e) {
  return t && Lt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Lt(t[0])) && !t.nodeType && t !== Rt;
}, Hs = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return et(i) && !e || On(i, 1) ? (n = r).push.apply(n, Ot(i)) : r.push(i);
  }) || r;
}, Ot = function(t, e, r) {
  return U && !e && U.selector ? U.selector(t) : et(t) && !r && (Yr || !Oe()) ? Gr.call((e || ui).querySelectorAll(t), 0) : at(t) ? Hs(t, r) : On(t) ? Gr.call(t, 0) : t ? [t] : [];
}, qr = function(t) {
  return t = Ot(t)[0] || $e("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Ot(e, r.querySelectorAll ? r : r === t ? $e("Invalid scope") || ui.createElement("div") : t);
  };
}, Cn = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, En = function(t) {
  if (H(t))
    return t;
  var e = Lt(t) ? t : {
    each: t
  }, r = oe(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, o = i > 0 && i < 1, f = isNaN(i) || o, l = e.axis, u = i, h = i;
  return et(i) ? u = h = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !o && f && (u = i[0], h = i[1]), function(_, d, p) {
    var c = (p || e).length, m = s[c], x, y, v, w, b, S, P, O, T;
    if (!m) {
      if (T = e.grid === "auto" ? 0 : (e.grid || [1, Pt])[1], !T) {
        for (P = -Pt; P < (P = p[T++].getBoundingClientRect().left) && T < c; )
          ;
        T < c && T--;
      }
      for (m = s[c] = [], x = f ? Math.min(T, c) * u - 0.5 : i % T, y = T === Pt ? 0 : f ? c * h / T - 0.5 : i / T | 0, P = 0, O = Pt, S = 0; S < c; S++)
        v = S % T - x, w = y - (S / T | 0), m[S] = b = l ? Math.abs(l === "y" ? w : v) : fn(v * v + w * w), b > P && (P = b), b < O && (O = b);
      i === "random" && Cn(m), m.max = P - O, m.min = O, m.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (T > c ? c - 1 : l ? l === "y" ? c / T : T : Math.max(T, c / T)) || 0) * (i === "edges" ? -1 : 1), m.b = c < 0 ? n - c : n, m.u = st(e.amount || e.each) || 0, r = r && c < 0 ? Fn(r) : r;
    }
    return c = (m[_] - m.min) / m.max || 0, tt(m.b + (r ? r(c) : c) * m.v) + m.u;
  };
}, Wr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = tt(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Yt(r) ? 0 : st(r));
  };
}, kn = function(t, e) {
  var r = at(t), i, n;
  return !r && Lt(t) && (i = r = t.radius || Pt, t.values ? (t = Ot(t.values), (n = !Yt(t[0])) && (i *= i)) : t = Wr(t.increment)), Qt(e, r ? H(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var o = parseFloat(n ? s.x : s), f = parseFloat(n ? s.y : 0), l = Pt, u = 0, h = t.length, _, d; h--; )
      n ? (_ = t[h].x - o, d = t[h].y - f, _ = _ * _ + d * d) : _ = Math.abs(t[h] - o), _ < l && (l = _, u = h);
    return u = !i || l <= i ? t[u] : s, n || u === s || Yt(s) ? u : u + st(s);
  } : Wr(t));
}, Mn = function(t, e, r, i) {
  return Qt(at(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return at(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, Zs = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, Js = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || st(r));
  };
}, Qs = function(t, e, r) {
  return An(t, e, 0, 1, r);
}, Rn = function(t, e, r) {
  return Qt(r, function(i) {
    return t[~~e(i)];
  });
}, Ks = function a(t, e, r) {
  var i = e - t;
  return at(t) ? Rn(t, a(0, t.length), e) : Qt(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, to = function a(t, e, r) {
  var i = e - t, n = i * 2;
  return at(t) ? Rn(t, a(0, t.length - 1), e) : Qt(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, Ve = function(t) {
  for (var e = 0, r = "", i, n, s, o; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), o = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(o ? _n : $r), r += t.substr(e, i - e) + Mn(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, An = function(t, e, r, i, n) {
  var s = e - t, o = i - r;
  return Qt(n, function(f) {
    return r + ((f - t) / s * o || 0);
  });
}, eo = function a(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(d) {
    return (1 - d) * t + d * e;
  };
  if (!n) {
    var s = et(t), o = {}, f, l, u, h, _;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (at(t) && !at(e)) {
      for (u = [], h = t.length, _ = h - 2, l = 1; l < h; l++)
        u.push(a(t[l - 1], t[l]));
      h--, n = function(p) {
        p *= h;
        var c = Math.min(_, ~~p);
        return u[c](p - c);
      }, r = e;
    } else i || (t = ue(at(t) ? [] : {}, t));
    if (!u) {
      for (f in e)
        pi.call(o, t, f, "get", e[f]);
      n = function(p) {
        return yi(p, o) || (s ? t.p : t);
      };
    }
  }
  return Qt(r, n);
}, Ii = function(t, e, r) {
  var i = t.labels, n = Pt, s, o, f;
  for (s in i)
    o = i[s] - e, o < 0 == !!r && o && n > (o = Math.abs(o)) && (f = s, n = o);
  return f;
}, yt = function(t, e, r) {
  var i = t.vars, n = i[e], s = U, o = t._ctx, f, l, u;
  if (n)
    return f = i[e + "Params"], l = i.callbackScope || t, r && Wt.length && hr(), o && (U = o), u = f ? n.apply(l, f) : n.call(l), U = s, u;
}, Ne = function(t) {
  return Zt(t), t.scrollTrigger && t.scrollTrigger.kill(!!ot), t.progress() < 1 && yt(t, "onInterrupt"), t;
}, me, Nn = [], Dn = function(t) {
  if (t)
    if (t = !t.name && t.default || t, fi() || t.headless) {
      var e = t.name, r = H(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: Ye,
        render: yi,
        add: pi,
        kill: xo,
        modifier: mo,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: xi,
        aliases: {},
        register: 0
      };
      if (Oe(), t !== i) {
        if (mt[e])
          return;
        Et(i, Et(cr(t, n), s)), ue(i.prototype, ue(n, cr(t, s))), mt[i.prop = e] = i, t.targetTest && (or.push(i), ci[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      gn(e, i), t.register && t.register(gt, i, dt);
    } else
      Nn.push(t);
}, $ = 255, De = {
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
}, Mr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * $ + 0.5 | 0;
}, Ln = function(t, e, r) {
  var i = t ? Yt(t) ? [t >> 16, t >> 8 & $, t & $] : 0 : De.black, n, s, o, f, l, u, h, _, d, p;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), De[t])
      i = De[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), o = t.charAt(3), t = "#" + n + n + s + s + o + o + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & $, i & $, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & $, t & $];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = p = t.match($r), !e)
        f = +i[0] % 360 / 360, l = +i[1] / 100, u = +i[2] / 100, s = u <= 0.5 ? u * (l + 1) : u + l - u * l, n = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Mr(f + 1 / 3, n, s), i[1] = Mr(f, n, s), i[2] = Mr(f - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(hn), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match($r) || De.transparent;
    i = i.map(Number);
  }
  return e && !p && (n = i[0] / $, s = i[1] / $, o = i[2] / $, h = Math.max(n, s, o), _ = Math.min(n, s, o), u = (h + _) / 2, h === _ ? f = l = 0 : (d = h - _, l = u > 0.5 ? d / (2 - h - _) : d / (h + _), f = h === n ? (s - o) / d + (s < o ? 6 : 0) : h === s ? (o - n) / d + 2 : (n - s) / d + 4, f *= 60), i[0] = ~~(f + 0.5), i[1] = ~~(l * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, jn = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Ht).forEach(function(n) {
    var s = n.match(ge) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, $i = function(t, e, r) {
  var i = "", n = (t + i).match(Ht), s = e ? "hsla(" : "rgba(", o = 0, f, l, u, h;
  if (!n)
    return t;
  if (n = n.map(function(_) {
    return (_ = Ln(_, e, 1)) && s + (e ? _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : _.join(",")) + ")";
  }), r && (u = jn(t), f = r.c, f.join(i) !== u.c.join(i)))
    for (l = t.replace(Ht, "1").split(ge), h = l.length - 1; o < h; o++)
      i += l[o] + (~f.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!l)
    for (l = t.split(Ht), h = l.length - 1; o < h; o++)
      i += l[o] + n[o];
  return i + l[h];
}, Ht = function() {
  var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in De)
    a += "|" + t + "\\b";
  return new RegExp(a + ")", "gi");
}(), ro = /hsl[a]?\(/, zn = function(t) {
  var e = t.join(" "), r;
  if (Ht.lastIndex = 0, Ht.test(e))
    return r = ro.test(e), t[1] = $i(t[1], r), t[0] = $i(t[0], r, jn(t[1])), !0;
}, Ue, xt = function() {
  var a = Date.now, t = 500, e = 33, r = a(), i = r, n = 1e3 / 240, s = n, o = [], f, l, u, h, _, d, p = function c(m) {
    var x = a() - i, y = m === !0, v, w, b, S;
    if ((x > t || x < 0) && (r += x - e), i += x, b = i - r, v = b - s, (v > 0 || y) && (S = ++h.frame, _ = b - h.time * 1e3, h.time = b = b / 1e3, s += v + (v >= n ? 4 : n - v), w = 1), y || (f = l(c)), w)
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
      dn && (!Yr && fi() && (Rt = Yr = window, ui = Rt.document || {}, bt.gsap = gt, (Rt.gsapVersions || (Rt.gsapVersions = [])).push(gt.version), pn(ur || Rt.GreenSockGlobals || !Rt.gsap && Rt || {}), Nn.forEach(Dn)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, f && h.sleep(), l = u || function(m) {
        return setTimeout(m, s - h.time * 1e3 + 1 | 0);
      }, Ue = 1, p(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(f), Ue = 0, l = Ye;
    },
    lagSmoothing: function(m, x) {
      t = m || 1 / 0, e = Math.min(x || 33, t);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = h.time * 1e3 + n;
    },
    add: function(m, x, y) {
      var v = x ? function(w, b, S, P) {
        m(w, b, S, P), h.remove(v);
      } : m;
      return h.remove(m), o[y ? "unshift" : "push"](v), Oe(), v;
    },
    remove: function(m, x) {
      ~(x = o.indexOf(m)) && o.splice(x, 1) && d >= x && d--;
    },
    _listeners: o
  }, h;
}(), Oe = function() {
  return !Ue && xt.wake();
}, L = {}, io = /^[\d.\-M][\d.\-,\s]/, no = /["']/g, so = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, f, l; n < s; n++)
    f = r[n], o = n !== s - 1 ? f.lastIndexOf(",") : f.length, l = f.substr(0, o), e[i] = isNaN(l) ? l.replace(no, "").trim() : +l, i = f.substr(o + 1).trim();
  return e;
}, oo = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, ao = function(t) {
  var e = (t + "").split("("), r = L[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [so(e[1])] : oo(t).split(",").map(vn)) : L._CE && io.test(t) ? L._CE("", t) : r;
}, Fn = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Bn = function a(t, e) {
  for (var r = t._first, i; r; )
    r instanceof ht ? a(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? a(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, oe = function(t, e) {
  return t && (H(t) ? t : L[t] || ao(t)) || e;
}, ce = function(t, e, r, i) {
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
  return _t(t, function(o) {
    L[o] = bt[o] = n, L[s = o.toLowerCase()] = r;
    for (var f in n)
      L[s + (f === "easeIn" ? ".in" : f === "easeOut" ? ".out" : ".inOut")] = L[o + "." + f] = n[f];
  }), n;
}, In = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, Rr = function a(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / Ir * (Math.asin(1 / i) || 0), o = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * Ls((u - s) * n) + 1;
  }, f = t === "out" ? o : t === "in" ? function(l) {
    return 1 - o(1 - l);
  } : In(o);
  return n = Ir / n, f.config = function(l, u) {
    return a(t, l, u);
  }, f;
}, Ar = function a(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : In(r);
  return i.config = function(n) {
    return a(t, n);
  }, i;
};
_t("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, t) {
  var e = t < 5 ? t + 1 : t;
  ce(a + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
L.Linear.easeNone = L.none = L.Linear.easeIn;
ce("Elastic", Rr("in"), Rr("out"), Rr());
(function(a, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(o) {
    return o < e ? a * o * o : o < r ? a * Math.pow(o - 1.5 / t, 2) + 0.75 : o < i ? a * (o -= 2.25 / t) * o + 0.9375 : a * Math.pow(o - 2.625 / t, 2) + 0.984375;
  };
  ce("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
ce("Expo", function(a) {
  return a ? Math.pow(2, 10 * (a - 1)) : 0;
});
ce("Circ", function(a) {
  return -(fn(1 - a * a) - 1);
});
ce("Sine", function(a) {
  return a === 1 ? 1 : -Ds(a * As) + 1;
});
ce("Back", Ar("in"), Ar("out"), Ar());
L.SteppedEase = L.steps = bt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - V;
    return function(o) {
      return ((i * He(0, s, o) | 0) + n) * r;
    };
  }
};
we.ease = L["quad.out"];
_t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
  return _i += a + "," + a + "Params,";
});
var $n = function(t, e) {
  this.id = Ns++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xn, this.set = e ? e.getSetter : xi;
}, Xe = /* @__PURE__ */ function() {
  function a(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, Pe(this, +e.duration, 1, 1), this.data = e.data, U && (this._ctx = U, U.data.push(this)), Ue || xt.wake();
  }
  var t = a.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, Pe(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (Oe(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (wr(this, r), !n._dp || n.parent || wn(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && At(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === V || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), yn(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Fi(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Fi(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Se(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -V ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? _r(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -V ? 0 : this._rts, this.totalTime(He(-Math.abs(this._delay), this._tDur, n), i !== !1), Tr(this), Ys(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Oe(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && At(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (ct(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? _r(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = Fs);
    var i = ot;
    return ot = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), ot = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, Bi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, Bi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(wt(this, r), ct(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, ct(i));
  }, t.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, t.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, t.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, t.resume = function() {
    return this.paused(!1);
  }, t.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -V : 0)), this) : this._rts < 0;
  }, t.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -V, this;
  }, t.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - V);
  }, t.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, t.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = H(r) ? r : bn, o = function() {
        var l = i.then;
        i.then = null, H(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o;
    });
  }, t.kill = function() {
    Ne(this);
  }, a;
}();
Et(Xe.prototype, {
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
var ht = /* @__PURE__ */ function(a) {
  ln(t, a);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = a.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = ct(r.sortChildren), q && At(r.parent || q, Ft(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Sn(Ft(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return Fe(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return Fe(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, o) {
    return Fe(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, ze(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Q(i, n, wt(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return At(this, Q.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, o, f, l, u) {
    return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = u, s.parent = this, new Q(i, s, wt(this, f)), this;
  }, e.staggerFrom = function(i, n, s, o, f, l, u) {
    return s.runBackwards = 1, ze(s).immediateRender = ct(s.immediateRender), this.staggerTo(i, n, s, o, f, l, u);
  }, e.staggerFromTo = function(i, n, s, o, f, l, u, h) {
    return o.startAt = s, ze(o).immediateRender = ct(o.immediateRender), this.staggerTo(i, n, o, f, l, u, h);
  }, e.render = function(i, n, s) {
    var o = this._time, f = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, u = i <= 0 ? 0 : tt(i), h = this._zTime < 0 != i < 0 && (this._initted || !l), _, d, p, c, m, x, y, v, w, b, S, P;
    if (this !== q && u > f && i >= 0 && (u = f), u !== this._tTime || s || h) {
      if (o !== this._time && l && (u += this._time - o, i += this._time - o), _ = u, w = this._start, v = this._ts, x = !v, h && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (_ = tt(u % m), u === f ? (c = this._repeat, _ = l) : (c = ~~(u / m), c && c === u / m && (_ = l, c--), _ > l && (_ = l)), b = Se(this._tTime, m), !o && this._tTime && b !== c && this._tTime - b * m - this._dur <= 0 && (b = c), S && c & 1 && (_ = l - _, P = 1), c !== b && !this._lock) {
          var O = S && b & 1, T = O === (S && c & 1);
          if (c < b && (O = !O), o = O ? 0 : u % l ? l : u, this._lock = 1, this.render(o || (P ? 0 : tt(c * m)), n, !l)._lock = 0, this._tTime = u, !n && this.parent && yt(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), o && o !== this._time || x !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (l = this._dur, f = this._tDur, T && (this._lock = 2, o = O ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !x)
            return this;
          Bn(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Gs(this, tt(o), tt(_)), y && (u -= _ - (_ = y._start))), this._tTime = u, this._time = _, this._act = !v, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && _ && !n && !c && (yt(this, "onStart"), this._tTime !== u))
        return this;
      if (_ >= o && i >= 0)
        for (d = this._first; d; ) {
          if (p = d._next, (d._act || _ >= d._start) && d._ts && y !== d) {
            if (d.parent !== this)
              return this.render(i, n, s);
            if (d.render(d._ts > 0 ? (_ - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (_ - d._start) * d._ts, n, s), _ !== this._time || !this._ts && !x) {
              y = 0, p && (u += this._zTime = -V);
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
            if (d.render(d._ts > 0 ? (M - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (M - d._start) * d._ts, n, s || ot && (d._initted || d._startAt)), _ !== this._time || !this._ts && !x) {
              y = 0, p && (u += this._zTime = M ? -V : V);
              break;
            }
          }
          d = p;
        }
      }
      if (y && !n && (this.pause(), y.render(_ >= o ? 0 : -V)._zTime = _ >= o ? 1 : -1, this._ts))
        return this._start = w, Tr(this), this.render(i, n, s);
      this._onUpdate && !n && yt(this, "onUpdate", !0), (u === f && this._tTime >= this.totalDuration() || !u && o) && (w === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (u === f && this._ts > 0 || !u && this._ts < 0) && Zt(this, 1), !n && !(i < 0 && !o) && (u || o || !f) && (yt(this, u === f && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < f && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (Yt(n) || (n = wt(this, n, i)), !(i instanceof Xe)) {
      if (at(i))
        return i.forEach(function(o) {
          return s.add(o, n);
        }), this;
      if (et(i))
        return this.addLabel(i, n);
      if (H(i))
        i = Q.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? At(this, i, n) : this;
  }, e.getChildren = function(i, n, s, o) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -Pt);
    for (var f = [], l = this._first; l; )
      l._start >= o && (l instanceof Q ? n && f.push(l) : (s && f.push(l), i && f.push.apply(f, l.getChildren(!0, n, s)))), l = l._next;
    return f;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return et(i) ? this.removeLabel(i) : H(i) ? this.killTweensOf(i) : (br(this, i), i === this._recent && (this._recent = this._last), se(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = tt(xt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = wt(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var o = Q.delayedCall(0, n || Ye, s);
    return o.data = "isPause", this._hasPause = 1, At(this, o, wt(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = wt(this, i); n; )
      n._start === i && n.data === "isPause" && Zt(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var o = this.getTweensOf(i, s), f = o.length; f--; )
      Xt !== o[f] && o[f].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], o = Ot(i), f = this._first, l = Yt(n), u; f; )
      f instanceof Q ? Bs(f._targets, o) && (l ? (!Xt || f._initted && f._ts) && f.globalTime(0) <= n && f.globalTime(f.totalDuration()) > n : !n || f.isActive()) && s.push(f) : (u = f.getTweensOf(o, n)).length && s.push.apply(s, u), f = f._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, o = wt(s, i), f = n, l = f.startAt, u = f.onStart, h = f.onStartParams, _ = f.immediateRender, d, p = Q.to(s, Et({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: o,
      overwrite: "auto",
      duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || V,
      onStart: function() {
        if (s.pause(), !d) {
          var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
          p._dur !== m && Pe(p, m, 0, 1).render(p._time, !0, !0), d = 1;
        }
        u && u.apply(p, h || []);
      }
    }, n));
    return _ ? p.render(0) : p;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, Et({
      startAt: {
        time: wt(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), Ii(this, wt(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), Ii(this, wt(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + V);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var o = this._first, f = this.labels, l; o; )
      o._start >= s && (o._start += i, o._end += i), o = o._next;
    if (n)
      for (l in f)
        f[l] >= s && (f[l] += i);
    return se(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return a.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), se(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, o = s._last, f = Pt, l, u, h;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (h = s.parent; o; )
        l = o._prev, o._dirty && o.totalDuration(), u = o._start, u > f && s._sort && o._ts && !s._lock ? (s._lock = 1, At(s, o, u - o._delay, 1)._lock = 0) : f = u, u < 0 && o._ts && (n -= u, (!h && !s._dp || h && h.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, !1, -1 / 0), f = 0), o._end > n && o._ts && (n = o._end), o = l;
      Pe(s, s === q && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (q._ts && (yn(q, _r(i, q)), mn = xt.frame), xt.frame >= ji) {
      ji += vt.autoSleep || 120;
      var n = q._first;
      if ((!n || !n._ts) && vt.autoSleep && xt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || xt.sleep();
      }
    }
  }, t;
}(Xe);
Et(ht.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var lo = function(t, e, r, i, n, s, o) {
  var f = new dt(this._pt, t, e, 0, 1, qn, null, n), l = 0, u = 0, h, _, d, p, c, m, x, y;
  for (f.b = r, f.e = i, r += "", i += "", (x = ~i.indexOf("random(")) && (i = Ve(i)), s && (y = [r, i], s(y, t, e), r = y[0], i = y[1]), _ = r.match(Er) || []; h = Er.exec(i); )
    p = h[0], c = i.substring(l, h.index), d ? d = (d + 1) % 5 : c.substr(-5) === "rgba(" && (d = 1), p !== _[u++] && (m = parseFloat(_[u - 1]) || 0, f._pt = {
      _next: f._pt,
      p: c || u === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ye(m, p) - m : parseFloat(p) - m,
      m: d && d < 4 ? Math.round : 0
    }, l = Er.lastIndex);
  return f.c = l < i.length ? i.substring(l, i.length) : "", f.fp = o, (cn.test(i) || x) && (f.e = 0), this._pt = f, f;
}, pi = function(t, e, r, i, n, s, o, f, l, u) {
  H(i) && (i = i(n || 0, t, s));
  var h = t[e], _ = r !== "get" ? r : H(h) ? l ? t[e.indexOf("set") || !H(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h, d = H(h) ? l ? _o : Xn : mi, p;
  if (et(i) && (~i.indexOf("random(") && (i = Ve(i)), i.charAt(1) === "=" && (p = ye(_, i) + (st(_) || 0), (p || p === 0) && (i = p))), !u || _ !== i || Hr)
    return !isNaN(_ * i) && i !== "" ? (p = new dt(this._pt, t, e, +_ || 0, i - (_ || 0), typeof h == "boolean" ? go : Gn, 0, d), l && (p.fp = l), o && p.modifier(o, this, t), this._pt = p) : (!h && !(e in t) && hi(e, i), lo.call(this, t, e, _, i, d, f || vt.stringFilter, l));
}, fo = function(t, e, r, i, n) {
  if (H(t) && (t = Be(t, n, e, r, i)), !Lt(t) || t.style && t.nodeType || at(t) || un(t))
    return et(t) ? Be(t, n, e, r, i) : t;
  var s = {}, o;
  for (o in t)
    s[o] = Be(t[o], n, e, r, i);
  return s;
}, Yn = function(t, e, r, i, n, s) {
  var o, f, l, u;
  if (mt[t] && (o = new mt[t]()).init(n, o.rawVars ? e[t] : fo(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = f = new dt(r._pt, n, t, 0, 1, o.render, o, 0, o.priority), r !== me))
    for (l = r._ptLookup[r._targets.indexOf(n)], u = o._props.length; u--; )
      l[o._props[u]] = f;
  return o;
}, Xt, Hr, gi = function a(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, o = i.immediateRender, f = i.lazy, l = i.onUpdate, u = i.runBackwards, h = i.yoyoEase, _ = i.keyframes, d = i.autoRevert, p = t._dur, c = t._startAt, m = t._targets, x = t.parent, y = x && x.data === "nested" ? x.vars.targets : m, v = t._overwrite === "auto" && !ai, w = t.timeline, b, S, P, O, T, M, R, N, A, I, j, z, Y;
  if (w && (!_ || !n) && (n = "none"), t._ease = oe(n, we.ease), t._yEase = h ? Fn(oe(h === !0 ? n : h, we.ease)) : 0, h && t._yoyo && !t._repeat && (h = t._yEase, t._yEase = t._ease, t._ease = h), t._from = !w && !!i.runBackwards, !w || _ && !i.stagger) {
    if (N = m[0] ? ne(m[0]).harness : 0, z = N && i[N.prop], b = cr(i, ci), c && (c._zTime < 0 && c.progress(1), e < 0 && u && o && !d ? c.render(-1, !0) : c.revert(u && p ? sr : zs), c._lazy = 0), s) {
      if (Zt(t._startAt = Q.set(m, Et({
        data: "isStart",
        overwrite: !1,
        parent: x,
        immediateRender: !0,
        lazy: !c && ct(f),
        startAt: null,
        delay: 0,
        onUpdate: l && function() {
          return yt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (ot || !o && !d) && t._startAt.revert(sr), o && p && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (u && p && !c) {
      if (e && (o = !1), P = Et({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: o && !c && ct(f),
        immediateRender: o,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: x
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, b), z && (P[N.prop] = z), Zt(t._startAt = Q.set(m, P)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (ot ? t._startAt.revert(sr) : t._startAt.render(-1, !0)), t._zTime = e, !o)
        a(t._startAt, V, V);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, f = p && ct(f) || f && !p, S = 0; S < m.length; S++) {
      if (T = m[S], R = T._gsap || di(m)[S]._gsap, t._ptLookup[S] = I = {}, Vr[R.id] && Wt.length && hr(), j = y === m ? S : y.indexOf(T), N && (A = new N()).init(T, z || b, t, j, y) !== !1 && (t._pt = O = new dt(t._pt, T, A.name, 0, 1, A.render, A, 0, A.priority), A._props.forEach(function(K) {
        I[K] = O;
      }), A.priority && (M = 1)), !N || z)
        for (P in b)
          mt[P] && (A = Yn(P, b, t, j, T, y)) ? A.priority && (M = 1) : I[P] = O = pi.call(t, T, P, "get", b[P], j, y, 0, i.stringFilter);
      t._op && t._op[S] && t.kill(T, t._op[S]), v && t._pt && (Xt = t, q.killTweensOf(T, I, t.globalTime(e)), Y = !t.parent, Xt = 0), t._pt && f && (Vr[R.id] = 1);
    }
    M && Wn(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = l, t._initted = (!t._op || t._pt) && !Y, _ && e <= 0 && w.render(Pt, !0, !0);
}, uo = function(t, e, r, i, n, s, o, f) {
  var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, _, d;
  if (!l)
    for (l = t._ptCache[e] = [], _ = t._ptLookup, d = t._targets.length; d--; ) {
      if (u = _[d][e], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== e && u.fp !== e; )
          u = u._next;
      if (!u)
        return Hr = 1, t.vars[e] = "+=0", gi(t, o), Hr = 0, f ? $e(e + " not eligible for reset") : 1;
      l.push(u);
    }
  for (d = l.length; d--; )
    h = l[d], u = h._pt || h, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c, u.c = r - u.s, h.e && (h.e = Z(r) + st(h.e)), h.b && (h.b = u.s + st(h.b));
}, ho = function(t, e) {
  var r = t[0] ? ne(t[0]).harness : 0, i = r && r.aliases, n, s, o, f;
  if (!i)
    return e;
  n = ue({}, e);
  for (s in i)
    if (s in n)
      for (f = i[s].split(","), o = f.length; o--; )
        n[f[o]] = n[s];
  return n;
}, co = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, o;
  if (at(e))
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
}, Be = function(t, e, r, i, n) {
  return H(t) ? t.call(e, r, i, n) : et(t) && ~t.indexOf("random(") ? Ve(t) : t;
}, Vn = _i + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Un = {};
_t(Vn + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
  return Un[a] = 1;
});
var Q = /* @__PURE__ */ function(a) {
  ln(t, a);
  function t(r, i, n, s) {
    var o;
    typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : ze(i)) || this;
    var f = o.vars, l = f.duration, u = f.delay, h = f.immediateRender, _ = f.stagger, d = f.overwrite, p = f.keyframes, c = f.defaults, m = f.scrollTrigger, x = f.yoyoEase, y = i.parent || q, v = (at(r) || un(r) ? Yt(r[0]) : "length" in i) ? [r] : Ot(r), w, b, S, P, O, T, M, R;
    if (o._targets = v.length ? di(v) : $e("GSAP target " + r + " not found. https://gsap.com", !vt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = d, p || _ || rr(l) || rr(u)) {
      if (i = o.vars, w = o.timeline = new ht({
        data: "nested",
        defaults: c || {},
        targets: y && y.data === "nested" ? y.vars.targets : v
      }), w.kill(), w.parent = w._dp = Ft(o), w._start = 0, _ || rr(l) || rr(u)) {
        if (P = v.length, M = _ && En(_), Lt(_))
          for (O in _)
            ~Vn.indexOf(O) && (R || (R = {}), R[O] = _[O]);
        for (b = 0; b < P; b++)
          S = cr(i, Un), S.stagger = 0, x && (S.yoyoEase = x), R && ue(S, R), T = v[b], S.duration = +Be(l, Ft(o), b, T, v), S.delay = (+Be(u, Ft(o), b, T, v) || 0) - o._delay, !_ && P === 1 && S.delay && (o._delay = u = S.delay, o._start += u, S.delay = 0), w.to(T, S, M ? M(b, T, v) : 0), w._ease = L.none;
        w.duration() ? l = u = 0 : o.timeline = 0;
      } else if (p) {
        ze(Et(w.vars.defaults, {
          ease: "none"
        })), w._ease = oe(p.ease || i.ease || "none");
        var N = 0, A, I, j;
        if (at(p))
          p.forEach(function(z) {
            return w.to(v, z, ">");
          }), w.duration();
        else {
          S = {};
          for (O in p)
            O === "ease" || O === "easeEach" || co(O, p[O], S, p.easeEach);
          for (O in S)
            for (A = S[O].sort(function(z, Y) {
              return z.t - Y.t;
            }), N = 0, b = 0; b < A.length; b++)
              I = A[b], j = {
                ease: I.e,
                duration: (I.t - (b ? A[b - 1].t : 0)) / 100 * l
              }, j[O] = I.v, w.to(v, j, N), N += j.duration;
          w.duration() < l && w.to({}, {
            duration: l - w.duration()
          });
        }
      }
      l || o.duration(l = w.duration());
    } else
      o.timeline = 0;
    return d === !0 && !ai && (Xt = Ft(o), q.killTweensOf(v), Xt = 0), At(y, Ft(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (h || !l && !p && o._start === tt(y._time) && ct(h) && Vs(Ft(o)) && y.data !== "nested") && (o._tTime = -V, o.render(Math.max(0, -u) || 0)), m && Sn(Ft(o), m), o;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var o = this._time, f = this._tDur, l = this._dur, u = i < 0, h = i > f - V && !u ? f : i < V ? 0 : i, _, d, p, c, m, x, y, v, w;
    if (!l)
      Xs(this, i, n, s);
    else if (h !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u) {
      if (_ = h, v = this.timeline, this._repeat) {
        if (c = l + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(c * 100 + i, n, s);
        if (_ = tt(h % c), h === f ? (p = this._repeat, _ = l) : (p = ~~(h / c), p && p === tt(h / c) && (_ = l, p--), _ > l && (_ = l)), x = this._yoyo && p & 1, x && (w = this._yEase, _ = l - _), m = Se(this._tTime, c), _ === o && !s && this._initted && p === m)
          return this._tTime = h, this;
        p !== m && (v && this._yEase && Bn(v, x), this.vars.repeatRefresh && !x && !this._lock && this._time !== c && this._initted && (this._lock = s = 1, this.render(tt(c * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (Pn(this, u ? i : _, s, n, h))
          return this._tTime = 0, this;
        if (o !== this._time && !(s && this.vars.repeatRefresh && p !== m))
          return this;
        if (l !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = h, this._time = _, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (w || this._ease)(_ / l), this._from && (this.ratio = y = 1 - y), _ && !o && !n && !p && (yt(this, "onStart"), this._tTime !== h))
        return this;
      for (d = this._pt; d; )
        d.r(y, d.d), d = d._next;
      v && v.render(i < 0 ? i : v._dur * v._ease(_ / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Ur(this, i, n, s), yt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && yt(this, "onRepeat"), (h === this._tDur || !h) && this._tTime === h && (u && !this._onUpdate && Ur(this, i, !0, !0), (i || !l) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Zt(this, 1), !n && !(u && !o) && (h || o || x) && (yt(this, h === f ? "onComplete" : "onReverseComplete", !0), this._prom && !(h < f && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, o, f) {
    Ue || xt.wake(), this._ts || this.play();
    var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || gi(this, l), u = this._ease(l / this._dur), uo(this, i, n, s, o, u, l, f) ? this.resetTo(i, n, s, o, 1) : (wr(this, 0), this.parent || Tn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ne(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Xt && Xt.vars.overwrite !== !0)._first || Ne(this), this.parent && s !== this.timeline.totalDuration() && Pe(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var o = this._targets, f = i ? Ot(i) : o, l = this._ptLookup, u = this._pt, h, _, d, p, c, m, x;
    if ((!n || n === "all") && $s(o, f))
      return n === "all" && (this._pt = 0), Ne(this);
    for (h = this._op = this._op || [], n !== "all" && (et(n) && (c = {}, _t(n, function(y) {
      return c[y] = 1;
    }), n = c), n = ho(o, n)), x = o.length; x--; )
      if (~f.indexOf(o[x])) {
        _ = l[x], n === "all" ? (h[x] = n, p = _, d = {}) : (d = h[x] = h[x] || {}, p = n);
        for (c in p)
          m = _ && _[c], m && ((!("kill" in m.d) || m.d.kill(c) === !0) && br(this, m, "_pt"), delete _[c]), d !== "all" && (d[c] = 1);
      }
    return this._initted && !this._pt && u && Ne(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return Fe(1, arguments);
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
    return Fe(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return q.killTweensOf(i, n, s);
  }, t;
}(Xe);
Et(Q.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_t("staggerTo,staggerFrom,staggerFromTo", function(a) {
  Q[a] = function() {
    var t = new ht(), e = Gr.call(arguments, 0);
    return e.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), t[a].apply(t, e);
  };
});
var mi = function(t, e, r) {
  return t[e] = r;
}, Xn = function(t, e, r) {
  return t[e](r);
}, _o = function(t, e, r, i) {
  return t[e](i.fp, r);
}, po = function(t, e, r) {
  return t.setAttribute(e, r);
}, xi = function(t, e) {
  return H(t[e]) ? Xn : li(t[e]) && t.setAttribute ? po : mi;
}, Gn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, go = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, qn = function(t, e) {
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
}, yi = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, mo = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, xo = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? br(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, yo = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, Wn = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, dt = /* @__PURE__ */ function() {
  function a(e, r, i, n, s, o, f, l, u) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || Gn, this.d = f || this, this.set = l || mi, this.pr = u || 0, this._next = e, e && (e._prev = this);
  }
  var t = a.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = yo, this.m = r, this.mt = n, this.tween = i;
  }, a;
}();
_t(_i + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
  return ci[a] = 1;
});
bt.TweenMax = bt.TweenLite = Q;
bt.TimelineLite = bt.TimelineMax = ht;
q = new ht({
  sortChildren: !1,
  defaults: we,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
vt.stringFilter = zn;
var ae = [], ar = {}, vo = [], Yi = 0, bo = 0, Nr = function(t) {
  return (ar[t] || vo).map(function(e) {
    return e();
  });
}, Zr = function() {
  var t = Date.now(), e = [];
  t - Yi > 2 && (Nr("matchMediaInit"), ae.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, o, f, l;
    for (o in i)
      s = Rt.matchMedia(i[o]).matches, s && (f = 1), s !== n[o] && (n[o] = s, l = 1);
    l && (r.revert(), f && e.push(r));
  }), Nr("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), Yi = t, Nr("matchMedia"));
}, Hn = /* @__PURE__ */ function() {
  function a(e, r) {
    this.selector = r && qr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = bo++, e && this.add(e);
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
      return i instanceof a ? r.push.apply(r, i.getTweens()) : i instanceof Q && !(i.parent && i.parent.data === "nested") && r.push(i);
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
        l = n.data[f], l instanceof ht ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(), l.kill()) : !(l instanceof Q) && l.revert && l.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(o) {
      return o.kill && o.kill();
    }), this.clear(), i)
      for (var s = ae.length; s--; )
        ae[s].id === this.id && ae.splice(s, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, a;
}(), To = /* @__PURE__ */ function() {
  function a(e) {
    this.contexts = [], this.scope = e, U && U.data.push(this);
  }
  var t = a.prototype;
  return t.add = function(r, i, n) {
    Lt(r) || (r = {
      matches: r
    });
    var s = new Hn(0, n || this.scope), o = s.conditions = {}, f, l, u;
    U && !s.selector && (s.selector = U.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (l in r)
      l === "all" ? u = 1 : (f = Rt.matchMedia(r[l]), f && (ae.indexOf(s) < 0 && ae.push(s), (o[l] = f.matches) && (u = 1), f.addListener ? f.addListener(Zr) : f.addEventListener("change", Zr)));
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
}(), dr = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return Dn(i);
    });
  },
  timeline: function(t) {
    return new ht(t);
  },
  getTweensOf: function(t, e) {
    return q.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    et(t) && (t = Ot(t)[0]);
    var n = ne(t || {}).get, s = r ? bn : vn;
    return r === "native" && (r = ""), t && (e ? s((mt[e] && mt[e].get || n)(t, e, r, i)) : function(o, f, l) {
      return s((mt[o] && mt[o].get || n)(t, o, f, l));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Ot(t), t.length > 1) {
      var i = t.map(function(u) {
        return gt.quickSetter(u, e, r);
      }), n = i.length;
      return function(u) {
        for (var h = n; h--; )
          i[h](u);
      };
    }
    t = t[0] || {};
    var s = mt[e], o = ne(t), f = o.harness && (o.harness.aliases || {})[e] || e, l = s ? function(u) {
      var h = new s();
      me._pt = 0, h.init(t, r ? u + r : u, me, 0, [t]), h.render(1, h), me._pt && yi(1, me);
    } : o.set(t, f);
    return s ? l : function(u) {
      return l(t, f, r ? u + r : u, o, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = gt.to(t, ue((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(f, l, u) {
      return n.resetTo(e, f, l, u);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return q.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = oe(t.ease, we.ease)), zi(we, t || {});
  },
  config: function(t) {
    return zi(vt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(o) {
      return o && !mt[o] && !bt[o] && $e(e + " effect requires " + o + " plugin.");
    }), kr[e] = function(o, f, l) {
      return r(Ot(o), Et(f || {}, n), l);
    }, s && (ht.prototype[e] = function(o, f, l) {
      return this.add(kr[e](o, Lt(f) ? f : (l = f) && {}, this), l);
    });
  },
  registerEase: function(t, e) {
    L[t] = oe(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? oe(t, e) : L;
  },
  getById: function(t) {
    return q.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new ht(t), i, n;
    for (r.smoothChildTiming = ct(t.smoothChildTiming), q.remove(r), r._dp = 0, r._time = r._tTime = q._time, i = q._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof Q && i.vars.onComplete === i._targets[0])) && At(r, i, i._start - i._delay), i = n;
    return At(q, r, 0), r;
  },
  context: function(t, e) {
    return t ? new Hn(t, e) : U;
  },
  matchMedia: function(t) {
    return new To(t);
  },
  matchMediaRefresh: function() {
    return ae.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || Zr();
  },
  addEventListener: function(t, e) {
    var r = ar[t] || (ar[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = ar[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Ks,
    wrapYoyo: to,
    distribute: En,
    random: Mn,
    snap: kn,
    normalize: Qs,
    getUnit: st,
    clamp: Ws,
    splitColor: Ln,
    toArray: Ot,
    selector: qr,
    mapRange: An,
    pipe: Zs,
    unitize: Js,
    interpolate: eo,
    shuffle: Cn
  },
  install: pn,
  effects: kr,
  ticker: xt,
  updateRoot: ht.updateRoot,
  plugins: mt,
  globalTimeline: q,
  core: {
    PropTween: dt,
    globals: gn,
    Tween: Q,
    Timeline: ht,
    Animation: Xe,
    getCache: ne,
    _removeLinkedListItem: br,
    reverting: function() {
      return ot;
    },
    context: function(t) {
      return t && U && (U.data.push(t), t._ctx = U), U;
    },
    suppressOverwrites: function(t) {
      return ai = t;
    }
  }
};
_t("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
  return dr[a] = Q[a];
});
xt.add(ht.updateRoot);
me = dr.to({}, {
  duration: 0
});
var wo = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, So = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = wo(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, Dr = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(o) {
        var f, l;
        if (et(n) && (f = {}, _t(n, function(u) {
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
}, gt = dr.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, o, f;
    this.tween = r;
    for (s in e)
      f = t.getAttribute(s) || "", o = this.add(t, "setAttribute", (f || 0) + "", e[s], i, n, 0, 0, s), o.op = s, o.b = f, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      ot ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, Dr("roundProps", Wr), Dr("modifiers"), Dr("snap", kn)) || dr;
Q.version = ht.version = gt.version = "3.12.5";
dn = 1;
fi() && Oe();
L.Power0;
L.Power1;
L.Power2;
L.Power3;
L.Power4;
L.Linear;
L.Quad;
L.Cubic;
L.Quart;
L.Quint;
L.Strong;
L.Elastic;
L.Back;
L.SteppedEase;
L.Bounce;
L.Sine;
L.Expo;
L.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Vi, Gt, ve, vi, ie, Ui, bi, Po = function() {
  return typeof window < "u";
}, Vt = {}, re = 180 / Math.PI, be = Math.PI / 180, de = Math.atan2, Xi = 1e8, Ti = /([A-Z])/g, Oo = /(left|right|width|margin|padding|x)/i, Co = /[\s,\(]\S/, Nt = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Jr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Eo = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, ko = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, Mo = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, Zn = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, Jn = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, Ro = function(t, e, r) {
  return t.style[e] = r;
}, Ao = function(t, e, r) {
  return t.style.setProperty(e, r);
}, No = function(t, e, r) {
  return t._gsap[e] = r;
}, Do = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Lo = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, jo = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, W = "transform", pt = W + "Origin", zo = function a(t, e) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (t in Vt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = Nt[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(o) {
        return r.tfm[o] = Bt(i, o);
      }) : this.tfm[t] = s.x ? s[t] : Bt(i, t), t === pt && (this.tfm.zOrigin = s.zOrigin);
    else
      return Nt.transform.split(",").forEach(function(o) {
        return a.call(r, o, e);
      });
    if (this.props.indexOf(W) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(pt, e, "")), t = W;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, Qn = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Fo = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ti, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = bi(), (!n || !n.isStart) && !r[W] && (Qn(r), i.zOrigin && r[pt] && (r[pt] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, Kn = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Fo,
    save: zo
  };
  return t._gsap || gt.core.getCache(t), e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, ts, Qr = function(t, e) {
  var r = Gt.createElementNS ? Gt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Gt.createElement(t);
  return r && r.style ? r : Gt.createElement(t);
}, Dt = function a(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Ti, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && a(t, Ce(e) || e, 1) || "";
}, Gi = "O,Moz,ms,Ms,Webkit".split(","), Ce = function(t, e, r) {
  var i = e || ie, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Gi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Gi[s] : "") + t;
}, Kr = function() {
  Po() && window.document && (Vi = window, Gt = Vi.document, ve = Gt.documentElement, ie = Qr("div") || {
    style: {}
  }, Qr("div"), W = Ce(W), pt = W + "Origin", ie.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", ts = !!Ce("perspective"), bi = gt.core.reverting, vi = 1);
}, Lr = function a(t) {
  var e = Qr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (ve.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), ve.removeChild(e), this.style.cssText = n, s;
}, qi = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, es = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = Lr.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === Lr || (e = Lr.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +qi(t, ["x", "cx", "x1"]) || 0,
    y: +qi(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, rs = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && es(t));
}, he = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in Vt && e !== pt && (e = W), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(Ti, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, qt = function(t, e, r, i, n, s) {
  var o = new dt(t._pt, e, r, 0, 1, s ? Jn : Zn);
  return t._pt = o, o.b = i, o.e = n, t._props.push(r), o;
}, Wi = {
  deg: 1,
  rad: 1,
  turn: 1
}, Bo = {
  grid: 1,
  flex: 1
}, Jt = function a(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", o = ie.style, f = Oo.test(e), l = t.tagName.toLowerCase() === "svg", u = (l ? "client" : "offset") + (f ? "Width" : "Height"), h = 100, _ = i === "px", d = i === "%", p, c, m, x;
  if (i === s || !n || Wi[i] || Wi[s])
    return n;
  if (s !== "px" && !_ && (n = a(t, e, r, "px")), x = t.getCTM && rs(t), (d || s === "%") && (Vt[e] || ~e.indexOf("adius")))
    return p = x ? t.getBBox()[f ? "width" : "height"] : t[u], Z(d ? n / p * h : n / 100 * p);
  if (o[f ? "width" : "height"] = h + (_ ? s : i), c = ~e.indexOf("adius") || i === "em" && t.appendChild && !l ? t : t.parentNode, x && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Gt || !c.appendChild) && (c = Gt.body), m = c._gsap, m && d && m.width && f && m.time === xt.time && !m.uncache)
    return Z(n / m.width * h);
  if (d && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = h + i, p = t[u], y ? t.style[e] = y : he(t, e);
  } else
    (d || s === "%") && !Bo[Dt(c, "display")] && (o.position = Dt(t, "position")), c === t && (o.position = "static"), c.appendChild(ie), p = ie[u], c.removeChild(ie), o.position = "absolute";
  return f && d && (m = ne(c), m.time = xt.time, m.width = c[u]), Z(_ ? p * n / h : p && n ? h / p * n : 0);
}, Bt = function(t, e, r, i) {
  var n;
  return vi || Kr(), e in Nt && e !== "transform" && (e = Nt[e], ~e.indexOf(",") && (e = e.split(",")[0])), Vt[e] && e !== "transform" ? (n = qe(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : gr(Dt(t, pt)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = pr[e] && pr[e](t, e, r) || Dt(t, e) || xn(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Jt(t, e, n, r) + r : n;
}, Io = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = Ce(e, t, 1), s = n && Dt(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = Dt(t, "borderTopColor"));
  }
  var o = new dt(this._pt, t.style, e, 0, 1, qn), f = 0, l = 0, u, h, _, d, p, c, m, x, y, v, w, b;
  if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (c = t.style[e], t.style[e] = i, i = Dt(t, e) || i, c ? t.style[e] = c : he(t, e)), u = [r, i], zn(u), r = u[0], i = u[1], _ = r.match(ge) || [], b = i.match(ge) || [], b.length) {
    for (; h = ge.exec(i); )
      m = h[0], y = i.substring(f, h.index), p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1), m !== (c = _[l++] || "") && (d = parseFloat(c) || 0, w = c.substr((d + "").length), m.charAt(1) === "=" && (m = ye(d, m) + w), x = parseFloat(m), v = m.substr((x + "").length), f = ge.lastIndex - v.length, v || (v = v || vt.units[e] || w, f === i.length && (i += v, o.e += v)), w !== v && (d = Jt(t, e, c, v) || 0), o._pt = {
        _next: o._pt,
        p: y || l === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: d,
        c: x - d,
        m: p && p < 4 || e === "zIndex" ? Math.round : 0
      });
    o.c = f < i.length ? i.substring(f, i.length) : "";
  } else
    o.r = e === "display" && i === "none" ? Jn : Zn;
  return cn.test(i) && (o.e = 0), this._pt = o, o;
}, Hi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, $o = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = Hi[r] || r, e[1] = Hi[i] || i, e.join(" ");
}, Yo = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, o, f, l;
    if (n === "all" || n === !0)
      i.cssText = "", f = 1;
    else
      for (n = n.split(","), l = n.length; --l > -1; )
        o = n[l], Vt[o] && (f = 1, o = o === "transformOrigin" ? pt : W), he(r, o);
    f && (he(r, W), s && (s.svg && r.removeAttribute("transform"), qe(r, 1), s.uncache = 1, Qn(i)));
  }
}, pr = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new dt(t._pt, e, r, 0, 0, Yo);
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
}, Ge = [1, 0, 0, 1, 0, 0], is = {}, ns = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, Zi = function(t) {
  var e = Dt(t, W);
  return ns(e) ? Ge : e.substr(7).match(hn).map(Z);
}, wi = function(t, e) {
  var r = t._gsap || ne(t), i = t.style, n = Zi(t), s, o, f, l;
  return r.svg && t.getAttribute("transform") ? (f = t.transform.baseVal.consolidate().matrix, n = [f.a, f.b, f.c, f.d, f.e, f.f], n.join(",") === "1,0,0,1,0,0" ? Ge : n) : (n === Ge && !t.offsetParent && t !== ve && !r.svg && (f = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (l = 1, o = t.nextElementSibling, ve.appendChild(t)), n = Zi(t), f ? i.display = f : he(t, "display"), l && (o ? s.insertBefore(t, o) : s ? s.appendChild(t) : ve.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, ti = function(t, e, r, i, n, s) {
  var o = t._gsap, f = n || wi(t, !0), l = o.xOrigin || 0, u = o.yOrigin || 0, h = o.xOffset || 0, _ = o.yOffset || 0, d = f[0], p = f[1], c = f[2], m = f[3], x = f[4], y = f[5], v = e.split(" "), w = parseFloat(v[0]) || 0, b = parseFloat(v[1]) || 0, S, P, O, T;
  r ? f !== Ge && (P = d * m - p * c) && (O = w * (m / P) + b * (-c / P) + (c * y - m * x) / P, T = w * (-p / P) + b * (d / P) - (d * y - p * x) / P, w = O, b = T) : (S = es(t), w = S.x + (~v[0].indexOf("%") ? w / 100 * S.width : w), b = S.y + (~(v[1] || v[0]).indexOf("%") ? b / 100 * S.height : b)), i || i !== !1 && o.smooth ? (x = w - l, y = b - u, o.xOffset = h + (x * d + y * c) - x, o.yOffset = _ + (x * p + y * m) - y) : o.xOffset = o.yOffset = 0, o.xOrigin = w, o.yOrigin = b, o.smooth = !!i, o.origin = e, o.originIsAbsolute = !!r, t.style[pt] = "0px 0px", s && (qt(s, o, "xOrigin", l, w), qt(s, o, "yOrigin", u, b), qt(s, o, "xOffset", h, o.xOffset), qt(s, o, "yOffset", _, o.yOffset)), t.setAttribute("data-svg-origin", w + " " + b);
}, qe = function(t, e) {
  var r = t._gsap || new $n(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", o = "deg", f = getComputedStyle(t), l = Dt(t, pt) || "0", u, h, _, d, p, c, m, x, y, v, w, b, S, P, O, T, M, R, N, A, I, j, z, Y, K, lt, kt, X, Tt, rt, J, ft;
  return u = h = _ = c = m = x = y = v = w = 0, d = p = 1, r.svg = !!(t.getCTM && rs(t)), f.translate && ((f.translate !== "none" || f.scale !== "none" || f.rotate !== "none") && (i[W] = (f.translate !== "none" ? "translate3d(" + (f.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (f.rotate !== "none" ? "rotate(" + f.rotate + ") " : "") + (f.scale !== "none" ? "scale(" + f.scale.split(" ").join(",") + ") " : "") + (f[W] !== "none" ? f[W] : "")), i.scale = i.rotate = i.translate = "none"), P = wi(t, r.svg), r.svg && (r.uncache ? (K = t.getBBox(), l = r.xOrigin - K.x + "px " + (r.yOrigin - K.y) + "px", Y = "") : Y = !e && t.getAttribute("data-svg-origin"), ti(t, Y || l, !!Y || r.originIsAbsolute, r.smooth !== !1, P)), b = r.xOrigin || 0, S = r.yOrigin || 0, P !== Ge && (R = P[0], N = P[1], A = P[2], I = P[3], u = j = P[4], h = z = P[5], P.length === 6 ? (d = Math.sqrt(R * R + N * N), p = Math.sqrt(I * I + A * A), c = R || N ? de(N, R) * re : 0, y = A || I ? de(A, I) * re + c : 0, y && (p *= Math.abs(Math.cos(y * be))), r.svg && (u -= b - (b * R + S * A), h -= S - (b * N + S * I))) : (ft = P[6], rt = P[7], kt = P[8], X = P[9], Tt = P[10], J = P[11], u = P[12], h = P[13], _ = P[14], O = de(ft, Tt), m = O * re, O && (T = Math.cos(-O), M = Math.sin(-O), Y = j * T + kt * M, K = z * T + X * M, lt = ft * T + Tt * M, kt = j * -M + kt * T, X = z * -M + X * T, Tt = ft * -M + Tt * T, J = rt * -M + J * T, j = Y, z = K, ft = lt), O = de(-A, Tt), x = O * re, O && (T = Math.cos(-O), M = Math.sin(-O), Y = R * T - kt * M, K = N * T - X * M, lt = A * T - Tt * M, J = I * M + J * T, R = Y, N = K, A = lt), O = de(N, R), c = O * re, O && (T = Math.cos(O), M = Math.sin(O), Y = R * T + N * M, K = j * T + z * M, N = N * T - R * M, z = z * T - j * M, R = Y, j = K), m && Math.abs(m) + Math.abs(c) > 359.9 && (m = c = 0, x = 180 - x), d = Z(Math.sqrt(R * R + N * N + A * A)), p = Z(Math.sqrt(z * z + ft * ft)), O = de(j, z), y = Math.abs(O) > 2e-4 ? O * re : 0, w = J ? 1 / (J < 0 ? -J : J) : 0), r.svg && (Y = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ns(Dt(t, W)), Y && t.setAttribute("transform", Y))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1, y += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (p *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = u - ((r.xPercent = u && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = h - ((r.yPercent = h && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = _ + s, r.scaleX = Z(d), r.scaleY = Z(p), r.rotation = Z(c) + o, r.rotationX = Z(m) + o, r.rotationY = Z(x) + o, r.skewX = y + o, r.skewY = v + o, r.transformPerspective = w + s, (r.zOrigin = parseFloat(l.split(" ")[2]) || !e && r.zOrigin || 0) && (i[pt] = gr(l)), r.xOffset = r.yOffset = 0, r.force3D = vt.force3D, r.renderTransform = r.svg ? Uo : ts ? ss : Vo, r.uncache = 0, r;
}, gr = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, jr = function(t, e, r) {
  var i = st(e);
  return Z(parseFloat(e) + parseFloat(Jt(t, "x", r + "px", i))) + i;
}, Vo = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ss(t, e);
}, te = "0deg", Re = "0px", ee = ") ", ss = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, f = r.z, l = r.rotation, u = r.rotationY, h = r.rotationX, _ = r.skewX, d = r.skewY, p = r.scaleX, c = r.scaleY, m = r.transformPerspective, x = r.force3D, y = r.target, v = r.zOrigin, w = "", b = x === "auto" && t && t !== 1 || x === !0;
  if (v && (h !== te || u !== te)) {
    var S = parseFloat(u) * be, P = Math.sin(S), O = Math.cos(S), T;
    S = parseFloat(h) * be, T = Math.cos(S), s = jr(y, s, P * T * -v), o = jr(y, o, -Math.sin(S) * -v), f = jr(y, f, O * T * -v + v);
  }
  m !== Re && (w += "perspective(" + m + ee), (i || n) && (w += "translate(" + i + "%, " + n + "%) "), (b || s !== Re || o !== Re || f !== Re) && (w += f !== Re || b ? "translate3d(" + s + ", " + o + ", " + f + ") " : "translate(" + s + ", " + o + ee), l !== te && (w += "rotate(" + l + ee), u !== te && (w += "rotateY(" + u + ee), h !== te && (w += "rotateX(" + h + ee), (_ !== te || d !== te) && (w += "skew(" + _ + ", " + d + ee), (p !== 1 || c !== 1) && (w += "scale(" + p + ", " + c + ee), y.style[W] = w || "translate(0, 0)";
}, Uo = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, o = r.y, f = r.rotation, l = r.skewX, u = r.skewY, h = r.scaleX, _ = r.scaleY, d = r.target, p = r.xOrigin, c = r.yOrigin, m = r.xOffset, x = r.yOffset, y = r.forceCSS, v = parseFloat(s), w = parseFloat(o), b, S, P, O, T;
  f = parseFloat(f), l = parseFloat(l), u = parseFloat(u), u && (u = parseFloat(u), l += u, f += u), f || l ? (f *= be, l *= be, b = Math.cos(f) * h, S = Math.sin(f) * h, P = Math.sin(f - l) * -_, O = Math.cos(f - l) * _, l && (u *= be, T = Math.tan(l - u), T = Math.sqrt(1 + T * T), P *= T, O *= T, u && (T = Math.tan(u), T = Math.sqrt(1 + T * T), b *= T, S *= T)), b = Z(b), S = Z(S), P = Z(P), O = Z(O)) : (b = h, O = _, S = P = 0), (v && !~(s + "").indexOf("px") || w && !~(o + "").indexOf("px")) && (v = Jt(d, "x", s, "px"), w = Jt(d, "y", o, "px")), (p || c || m || x) && (v = Z(v + p - (p * b + c * P) + m), w = Z(w + c - (p * S + c * O) + x)), (i || n) && (T = d.getBBox(), v = Z(v + i / 100 * T.width), w = Z(w + n / 100 * T.height)), T = "matrix(" + b + "," + S + "," + P + "," + O + "," + v + "," + w + ")", d.setAttribute("transform", T), y && (d.style[W] = T);
}, Xo = function(t, e, r, i, n) {
  var s = 360, o = et(n), f = parseFloat(n) * (o && ~n.indexOf("rad") ? re : 1), l = f - i, u = i + l + "deg", h, _;
  return o && (h = n.split("_")[1], h === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), h === "cw" && l < 0 ? l = (l + s * Xi) % s - ~~(l / s) * s : h === "ccw" && l > 0 && (l = (l - s * Xi) % s - ~~(l / s) * s)), t._pt = _ = new dt(t._pt, e, r, i, l, Eo), _.e = u, _.u = "deg", t._props.push(r), _;
}, Ji = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Go = function(t, e, r) {
  var i = Ji({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, o, f, l, u, h, _, d, p;
  i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), s[W] = e, o = qe(r, 1), he(r, W), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[W], s[W] = e, o = qe(r, 1), s[W] = l);
  for (f in Vt)
    l = i[f], u = o[f], l !== u && n.indexOf(f) < 0 && (d = st(l), p = st(u), h = d !== p ? Jt(r, f, l, p) : parseFloat(l), _ = parseFloat(u), t._pt = new dt(t._pt, o, f, h, _ - h, Jr), t._pt.u = p || 0, t._props.push(f));
  Ji(o, i);
};
_t("padding,margin,Width,Radius", function(a, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(o) {
    return t < 2 ? a + o : "border" + o + a;
  });
  pr[t > 1 ? "border" + a : a] = function(o, f, l, u, h) {
    var _, d;
    if (arguments.length < 4)
      return _ = s.map(function(p) {
        return Bt(o, p, l);
      }), d = _.join(" "), d.split(_[0]).length === 5 ? _[0] : d;
    _ = (u + "").split(" "), d = {}, s.forEach(function(p, c) {
      return d[p] = _[c] = _[c] || _[(c - 1) / 2 | 0];
    }), o.init(f, d, h);
  };
});
var os = {
  name: "css",
  register: Kr,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, o = t.style, f = r.vars.startAt, l, u, h, _, d, p, c, m, x, y, v, w, b, S, P, O;
    vi || Kr(), this.styles = this.styles || Kn(t), O = this.styles.props, this.tween = r;
    for (c in e)
      if (c !== "autoRound" && (u = e[c], !(mt[c] && Yn(c, e, r, i, t, n)))) {
        if (d = typeof u, p = pr[c], d === "function" && (u = u.call(r, i, t, n), d = typeof u), d === "string" && ~u.indexOf("random(") && (u = Ve(u)), p)
          p(this, t, c, u, r) && (P = 1);
        else if (c.substr(0, 2) === "--")
          l = (getComputedStyle(t).getPropertyValue(c) + "").trim(), u += "", Ht.lastIndex = 0, Ht.test(l) || (m = st(l), x = st(u)), x ? m !== x && (l = Jt(t, c, l, x) + x) : m && (u += m), this.add(o, "setProperty", l, u, i, n, 0, 0, c), s.push(c), O.push(c, 0, o[c]);
        else if (d !== "undefined") {
          if (f && c in f ? (l = typeof f[c] == "function" ? f[c].call(r, i, t, n) : f[c], et(l) && ~l.indexOf("random(") && (l = Ve(l)), st(l + "") || l === "auto" || (l += vt.units[c] || st(Bt(t, c)) || ""), (l + "").charAt(1) === "=" && (l = Bt(t, c))) : l = Bt(t, c), _ = parseFloat(l), y = d === "string" && u.charAt(1) === "=" && u.substr(0, 2), y && (u = u.substr(2)), h = parseFloat(u), c in Nt && (c === "autoAlpha" && (_ === 1 && Bt(t, "visibility") === "hidden" && h && (_ = 0), O.push("visibility", 0, o.visibility), qt(this, o, "visibility", _ ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)), c !== "scale" && c !== "transform" && (c = Nt[c], ~c.indexOf(",") && (c = c.split(",")[0]))), v = c in Vt, v) {
            if (this.styles.save(c), w || (b = t._gsap, b.renderTransform && !e.parseTransform || qe(t, e.parseTransform), S = e.smoothOrigin !== !1 && b.smooth, w = this._pt = new dt(this._pt, o, W, 0, 1, b.renderTransform, b, 0, -1), w.dep = 1), c === "scale")
              this._pt = new dt(this._pt, b, "scaleY", b.scaleY, (y ? ye(b.scaleY, y + h) : h) - b.scaleY || 0, Jr), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              O.push(pt, 0, o[pt]), u = $o(u), b.svg ? ti(t, u, 0, S, 0, this) : (x = parseFloat(u.split(" ")[2]) || 0, x !== b.zOrigin && qt(this, b, "zOrigin", b.zOrigin, x), qt(this, o, c, gr(l), gr(u)));
              continue;
            } else if (c === "svgOrigin") {
              ti(t, u, 1, S, 0, this);
              continue;
            } else if (c in is) {
              Xo(this, b, c, _, y ? ye(_, y + u) : u);
              continue;
            } else if (c === "smoothOrigin") {
              qt(this, b, "smooth", b.smooth, u);
              continue;
            } else if (c === "force3D") {
              b[c] = u;
              continue;
            } else if (c === "transform") {
              Go(this, u, t);
              continue;
            }
          } else c in o || (c = Ce(c) || c);
          if (v || (h || h === 0) && (_ || _ === 0) && !Co.test(u) && c in o)
            m = (l + "").substr((_ + "").length), h || (h = 0), x = st(u) || (c in vt.units ? vt.units[c] : m), m !== x && (_ = Jt(t, c, l, x)), this._pt = new dt(this._pt, v ? b : o, c, _, (y ? ye(_, y + h) : h) - _, !v && (x === "px" || c === "zIndex") && e.autoRound !== !1 ? Mo : Jr), this._pt.u = x || 0, m !== x && x !== "%" && (this._pt.b = l, this._pt.r = ko);
          else if (c in o)
            Io.call(this, t, c, l, y ? y + u : u);
          else if (c in t)
            this.add(t, c, l || t[c], y ? y + u : u, i, n);
          else if (c !== "parseTransform") {
            hi(c, u);
            continue;
          }
          v || (c in o ? O.push(c, 0, o[c]) : O.push(c, 1, l || t[c])), s.push(c);
        }
      }
    P && Wn(this);
  },
  render: function(t, e) {
    if (e.tween._time || !bi())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: Bt,
  aliases: Nt,
  getSetter: function(t, e, r) {
    var i = Nt[e];
    return i && i.indexOf(",") < 0 && (e = i), e in Vt && e !== pt && (t._gsap.x || Bt(t, "x")) ? r && Ui === r ? e === "scale" ? Do : No : (Ui = r || {}) && (e === "scale" ? Lo : jo) : t.style && !li(t.style[e]) ? Ro : ~e.indexOf("-") ? Ao : xi(t, e);
  },
  core: {
    _removeProperty: he,
    _getMatrix: wi
  }
};
gt.utils.checkPrefix = Ce;
gt.core.getStyleSaver = Kn;
(function(a, t, e, r) {
  var i = _t(a + "," + t + "," + e, function(n) {
    Vt[n] = 1;
  });
  _t(t, function(n) {
    vt.units[n] = "deg", is[n] = 1;
  }), Nt[i[13]] = a + "," + t, _t(r, function(n) {
    var s = n.split(":");
    Nt[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
  vt.units[a] = "px";
});
gt.registerPlugin(os);
var as = gt.registerPlugin(os) || gt;
as.core.Tween;
/*!
 * paths 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qo = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Wo = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig, Ho = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig, Zo = /(^[#\.][a-z]|[a-y][a-z])/i, Jo = Math.PI / 180, Qo = 180 / Math.PI, ir = Math.sin, nr = Math.cos, Ct = Math.abs, It = Math.sqrt, Ko = Math.atan2, ei = 1e8, Qi = function(t) {
  return typeof t == "string";
}, ls = function(t) {
  return typeof t == "number";
}, ta = function(t) {
  return typeof t > "u";
}, ea = {}, ra = {}, mr = 1e5, fs = function(t) {
  return Math.round((t + ei) % 1 * mr) / mr || (t < 0 ? 0 : 1);
}, B = function(t) {
  return Math.round(t * mr) / mr || 0;
}, Ki = function(t) {
  return Math.round(t * 1e10) / 1e10 || 0;
}, tn = function(t, e, r, i) {
  var n = t[e], s = i === 1 ? 6 : ri(n, r, i);
  if ((s || !i) && s + r + 2 < n.length)
    return t.splice(e, 0, n.slice(0, r + s + 2)), n.splice(0, r + s), 1;
}, us = function(t, e, r) {
  var i = t.length, n = ~~(r * i);
  if (t[n] > e) {
    for (; --n && t[n] > e; )
      ;
    n < 0 && (n = 0);
  } else
    for (; t[++n] < e && n < i; )
      ;
  return n < i ? n : i - 1;
}, ia = function(t, e) {
  var r = t.length;
  for (t.reverse(); r--; )
    t[r].reversed || oa(t[r]);
}, en = function(t, e) {
  return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e;
}, na = function(t, e) {
  var r = t.length, i = t[r - 1] || [], n = i.length;
  r && e[0] === i[n - 2] && e[1] === i[n - 1] && (e = i.concat(e.slice(2)), r--), t[r] = e;
};
function lr(a) {
  a = Qi(a) && Zo.test(a) && document.querySelector(a) || a;
  var t = a.getAttribute ? a : 0, e;
  return t && (a = a.getAttribute("d")) ? (t._gsPath || (t._gsPath = {}), e = t._gsPath[a], e && !e._dirty ? e : t._gsPath[a] = xr(a)) : a ? Qi(a) ? xr(a) : ls(a[0]) ? [a] : a : console.warn("Expecting a <path> element or an SVG path data string");
}
function sa(a) {
  for (var t = [], e = 0; e < a.length; e++)
    t[e] = en(a[e], a[e].slice(0));
  return en(a, t);
}
function oa(a) {
  var t = 0, e;
  for (a.reverse(); t < a.length; t += 2)
    e = a[t], a[t] = a[t + 1], a[t + 1] = e;
  a.reversed = !a.reversed;
}
var aa = function(t, e) {
  var r = document.createElementNS("http://www.w3.org/2000/svg", "path"), i = [].slice.call(t.attributes), n = i.length, s;
  for (e = "," + e + ","; --n > -1; )
    s = i[n].nodeName.toLowerCase(), e.indexOf("," + s + ",") < 0 && r.setAttributeNS(null, s, i[n].nodeValue);
  return r;
}, la = {
  rect: "rx,ry,x,y,width,height",
  circle: "r,cx,cy",
  ellipse: "rx,ry,cx,cy",
  line: "x1,x2,y1,y2"
}, fa = function(t, e) {
  for (var r = e ? e.split(",") : [], i = {}, n = r.length; --n > -1; )
    i[r[n]] = +t.getAttribute(r[n]) || 0;
  return i;
};
function ua(a, t) {
  var e = a.tagName.toLowerCase(), r = 0.552284749831, i, n, s, o, f, l, u, h, _, d, p, c, m, x, y, v, w, b, S, P, O, T;
  return e === "path" || !a.getBBox ? a : (l = aa(a, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), T = fa(a, la[e]), e === "rect" ? (o = T.rx, f = T.ry || o, n = T.x, s = T.y, d = T.width - o * 2, p = T.height - f * 2, o || f ? (c = n + o * (1 - r), m = n + o, x = m + d, y = x + o * r, v = x + o, w = s + f * (1 - r), b = s + f, S = b + p, P = S + f * r, O = S + f, i = "M" + v + "," + b + " V" + S + " C" + [v, P, y, O, x, O, x - (x - m) / 3, O, m + (x - m) / 3, O, m, O, c, O, n, P, n, S, n, S - (S - b) / 3, n, b + (S - b) / 3, n, b, n, w, c, s, m, s, m + (x - m) / 3, s, x - (x - m) / 3, s, x, s, y, s, v, w, v, b].join(",") + "z") : i = "M" + (n + d) + "," + s + " v" + p + " h" + -d + " v" + -p + " h" + d + "z") : e === "circle" || e === "ellipse" ? (e === "circle" ? (o = f = T.r, h = o * r) : (o = T.rx, f = T.ry, h = f * r), n = T.cx, s = T.cy, u = o * r, i = "M" + (n + o) + "," + s + " C" + [n + o, s + h, n + u, s + f, n, s + f, n - u, s + f, n - o, s + h, n - o, s, n - o, s - h, n - u, s - f, n, s - f, n + u, s - f, n + o, s - h, n + o, s].join(",") + "z") : e === "line" ? i = "M" + T.x1 + "," + T.y1 + " L" + T.x2 + "," + T.y2 : (e === "polyline" || e === "polygon") && (_ = (a.getAttribute("points") + "").match(Wo) || [], n = _.shift(), s = _.shift(), i = "M" + n + "," + s + " L" + _.join(","), e === "polygon" && (i += "," + n + "," + s + "z")), l.setAttribute("d", _s(l._gsRawPath = xr(i))), t && a.parentNode && (a.parentNode.insertBefore(l, a), a.parentNode.removeChild(a)), l);
}
function hs(a, t, e) {
  var r = a[t], i = a[t + 2], n = a[t + 4], s;
  return r += (i - r) * e, i += (n - i) * e, r += (i - r) * e, s = i + (n + (a[t + 6] - n) * e - i) * e - r, r = a[t + 1], i = a[t + 3], n = a[t + 5], r += (i - r) * e, i += (n - i) * e, r += (i - r) * e, B(Ko(i + (n + (a[t + 7] - n) * e - i) * e - r, s) * Qo);
}
function cs(a, t, e) {
  e = ta(e) ? 1 : Ki(e) || 0, t = Ki(t) || 0;
  var r = Math.max(0, ~~(Ct(e - t) - 1e-8)), i = sa(a);
  if (t > e && (t = 1 - t, e = 1 - e, ia(i), i.totalLength = 0), t < 0 || e < 0) {
    var n = Math.abs(~~Math.min(t, e)) + 1;
    t += n, e += n;
  }
  i.totalLength || le(i);
  var s = e > 1, o = rn(i, t, ea, !0), f = rn(i, e, ra), l = f.segment, u = o.segment, h = f.segIndex, _ = o.segIndex, d = f.i, p = o.i, c = _ === h, m = d === p && c, x, y, v, w, b, S, P, O;
  if (s || r) {
    for (x = h < _ || c && d < p || m && f.t < o.t, tn(i, _, p, o.t) && (_++, x || (h++, m ? (f.t = (f.t - o.t) / (1 - o.t), d = 0) : c && (d -= p))), Math.abs(1 - (e - t)) < 1e-5 ? h = _ - 1 : !f.t && h ? h-- : tn(i, h, d, f.t) && x && _++, o.t === 1 && (_ = (_ + 1) % i.length), b = [], S = i.length, P = 1 + S * r, O = _, P += (S - _ + h) % S, w = 0; w < P; w++)
      na(b, i[O++ % S]);
    i = b;
  } else if (v = f.t === 1 ? 6 : ri(l, d, f.t), t !== e)
    for (y = ri(u, p, m ? o.t / f.t : o.t), c && (v += y), l.splice(d + v + 2), (y || p) && u.splice(0, p + y), w = i.length; w--; )
      (w < _ || w > h) && i.splice(w, 1);
  else
    l.angle = hs(l, d + v, 0), d += v, o = l[d], f = l[d + 1], l.length = l.totalLength = 0, l.totalPoints = i.totalPoints = 8, l.push(o, f, o, f, o, f, o, f);
  return i.totalLength = 0, i;
}
function ha(a, t, e) {
  t = t || 0, a.samples || (a.samples = [], a.lookup = []);
  var r = ~~a.resolution || 12, i = 1 / r, n = a.length, s = a[t], o = a[t + 1], f = t ? t / 6 * r : 0, l = a.samples, u = a.lookup, h = (t ? a.minLength : ei) || ei, _ = l[f + e * r - 1], d = t ? l[f - 1] : 0, p, c, m, x, y, v, w, b, S, P, O, T, M, R, N, A, I;
  for (l.length = u.length = 0, c = t + 2; c < n; c += 6) {
    if (m = a[c + 4] - s, x = a[c + 2] - s, y = a[c] - s, b = a[c + 5] - o, S = a[c + 3] - o, P = a[c + 1] - o, v = w = O = T = 0, Ct(m) < 0.01 && Ct(b) < 0.01 && Ct(y) + Ct(P) < 0.01)
      a.length > 8 && (a.splice(c, 6), c -= 6, n -= 6);
    else
      for (p = 1; p <= r; p++)
        R = i * p, M = 1 - R, v = w - (w = (R * R * m + 3 * M * (R * x + M * y)) * R), O = T - (T = (R * R * b + 3 * M * (R * S + M * P)) * R), A = It(O * O + v * v), A < h && (h = A), d += A, l[f++] = d;
    s += m, o += b;
  }
  if (_)
    for (_ -= d; f < l.length; f++)
      l[f] += _;
  if (l.length && h) {
    if (a.totalLength = I = l[l.length - 1] || 0, a.minLength = h, I / h < 9999)
      for (A = N = 0, p = 0; p < I; p += h)
        u[A++] = l[N] < p ? ++N : N;
  } else
    a.totalLength = l[0] = 0;
  return t ? d - l[t / 2 - 1] : d;
}
function le(a, t) {
  var e, r, i;
  for (i = e = r = 0; i < a.length; i++)
    a[i].resolution = ~~t || 12, r += a[i].length, e += ha(a[i]);
  return a.totalPoints = r, a.totalLength = e, a;
}
function ri(a, t, e) {
  if (e <= 0 || e >= 1)
    return 0;
  var r = a[t], i = a[t + 1], n = a[t + 2], s = a[t + 3], o = a[t + 4], f = a[t + 5], l = a[t + 6], u = a[t + 7], h = r + (n - r) * e, _ = n + (o - n) * e, d = i + (s - i) * e, p = s + (f - s) * e, c = h + (_ - h) * e, m = d + (p - d) * e, x = o + (l - o) * e, y = f + (u - f) * e;
  return _ += (x - _) * e, p += (y - p) * e, a.splice(
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
    B(x),
    //fourth control point
    B(y)
  ), a.samples && a.samples.splice(t / 6 * a.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6;
}
function rn(a, t, e, r) {
  e = e || {}, a.totalLength || le(a), (t < 0 || t > 1) && (t = fs(t));
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
    s = n.samples, o = n.resolution, f = n.totalLength * t, h = n.lookup.length ? n.lookup[~~(f / n.minLength)] || 0 : us(s, f, t), l = h ? s[h - 1] : 0, u = s[h], u < f && (l = u, u = s[++h]), _ = 1 / o * ((f - l) / (u - l) + h % o), h = ~~(h / o) * 6, r && _ === 1 && (h + 6 < n.length ? (h += 6, _ = 0) : i + 1 < a.length && (h = _ = 0, n = a[++i]));
  }
  return e.t = _, e.i = h, e.path = a, e.segment = n, e.segIndex = i, e;
}
function nn(a, t, e, r) {
  var i = a[0], n = r || {}, s, o, f, l, u, h, _, d, p;
  if ((t < 0 || t > 1) && (t = fs(t)), i.lookup || le(a), a.length > 1) {
    for (f = a.totalLength * t, u = h = 0; (u += a[h++].totalLength) < f; )
      i = a[h];
    l = u - i.totalLength, t = (f - l) / (u - l) || 0;
  }
  return s = i.samples, o = i.resolution, f = i.totalLength * t, h = i.lookup.length ? i.lookup[t < 1 ? ~~(f / i.minLength) : i.lookup.length - 1] || 0 : us(s, f, t), l = h ? s[h - 1] : 0, u = s[h], u < f && (l = u, u = s[++h]), _ = 1 / o * ((f - l) / (u - l) + h % o) || 0, p = 1 - _, h = ~~(h / o) * 6, d = i[h], n.x = B((_ * _ * (i[h + 6] - d) + 3 * p * (_ * (i[h + 4] - d) + p * (i[h + 2] - d))) * _ + d), n.y = B((_ * _ * (i[h + 7] - (d = i[h + 1])) + 3 * p * (_ * (i[h + 5] - d) + p * (i[h + 3] - d))) * _ + d), e && (n.angle = i.totalLength ? hs(i, h, _ >= 1 ? 1 - 1e-9 : _ || 1e-9) : i.angle || 0), n;
}
function Le(a, t, e, r, i, n, s) {
  for (var o = a.length, f, l, u, h, _; --o > -1; )
    for (f = a[o], l = f.length, u = 0; u < l; u += 2)
      h = f[u], _ = f[u + 1], f[u] = h * t + _ * r + n, f[u + 1] = h * e + _ * i + s;
  return a._dirty = 1, a;
}
function ca(a, t, e, r, i, n, s, o, f) {
  if (!(a === o && t === f)) {
    e = Ct(e), r = Ct(r);
    var l = i % 360 * Jo, u = nr(l), h = ir(l), _ = Math.PI, d = _ * 2, p = (a - o) / 2, c = (t - f) / 2, m = u * p + h * c, x = -h * p + u * c, y = m * m, v = x * x, w = y / (e * e) + v / (r * r);
    w > 1 && (e = It(w) * e, r = It(w) * r);
    var b = e * e, S = r * r, P = (b * S - b * v - S * y) / (b * v + S * y);
    P < 0 && (P = 0);
    var O = (n === s ? -1 : 1) * It(P), T = O * (e * x / r), M = O * -(r * m / e), R = (a + o) / 2, N = (t + f) / 2, A = R + (u * T - h * M), I = N + (h * T + u * M), j = (m - T) / e, z = (x - M) / r, Y = (-m - T) / e, K = (-x - M) / r, lt = j * j + z * z, kt = (z < 0 ? -1 : 1) * Math.acos(j / It(lt)), X = (j * K - z * Y < 0 ? -1 : 1) * Math.acos((j * Y + z * K) / It(lt * (Y * Y + K * K)));
    isNaN(X) && (X = _), !s && X > 0 ? X -= d : s && X < 0 && (X += d), kt %= d, X %= d;
    var Tt = Math.ceil(Ct(X) / (d / 4)), rt = [], J = X / Tt, ft = 4 / 3 * ir(J / 2) / (1 + nr(J / 2)), Ze = u * e, Je = h * e, Qe = h * -r, Ke = u * r, it;
    for (it = 0; it < Tt; it++)
      i = kt + it * J, m = nr(i), x = ir(i), j = nr(i += J), z = ir(i), rt.push(m - ft * x, x + ft * m, j + ft * z, z - ft * j, j, z);
    for (it = 0; it < rt.length; it += 2)
      m = rt[it], x = rt[it + 1], rt[it] = m * Ze + x * Qe + A, rt[it + 1] = m * Je + x * Ke + I;
    return rt[it - 2] = o, rt[it - 1] = f, rt;
  }
}
function xr(a) {
  var t = (a + "").replace(Ho, function(T) {
    var M = +T;
    return M < 1e-4 && M > -1e-4 ? 0 : M;
  }).match(qo) || [], e = [], r = 0, i = 0, n = 2 / 3, s = t.length, o = 0, f = "ERROR: malformed path: " + a, l, u, h, _, d, p, c, m, x, y, v, w, b, S, P, O = function(M, R, N, A) {
    y = (N - M) / 3, v = (A - R) / 3, c.push(M + y, R + v, N - y, A - v, N, A);
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
      O(r, i, r = h, i), l += 1;
    else if (d === "V")
      O(r, i, r, i = h + (p ? i - r : 0)), l += 1;
    else if (d === "L" || d === "Z")
      d === "Z" && (h = m, _ = x, c.closed = !0), (d === "L" || Ct(r - h) > 0.5 || Ct(i - _) > 0.5) && (O(r, i, h, _), d === "L" && (l += 2)), r = h, i = _;
    else if (d === "A") {
      if (S = t[l + 4], P = t[l + 5], y = t[l + 6], v = t[l + 7], u = 7, S.length > 1 && (S.length < 3 ? (v = y, y = P, u--) : (v = P, y = S.substr(2), u -= 2), P = S.charAt(1), S = S.charAt(0)), w = ca(r, i, +t[l + 1], +t[l + 2], +t[l + 3], +S, +P, (p ? r : 0) + y * 1, (p ? i : 0) + v * 1), l += u, w)
        for (u = 0; u < w.length; u++)
          c.push(w[u]);
      r = c[c.length - 2], i = c[c.length - 1];
    } else
      console.log(f);
  return l = c.length, l < 6 ? (e.pop(), l = 0) : c[0] === c[l - 2] && c[1] === c[l - 1] && (c.closed = !0), e.totalPoints = o + l, e;
}
function _a(a, t) {
  t === void 0 && (t = 1);
  for (var e = a[0], r = 0, i = [e, r], n = 2; n < a.length; n += 2)
    i.push(e, r, a[n], r = (a[n] - e) * t / 2, e = a[n], -r);
  return i;
}
function ii(a, t) {
  Ct(a[0] - a[2]) < 1e-4 && Ct(a[1] - a[3]) < 1e-4 && (a = a.slice(2));
  var e = a.length - 2, r = +a[0], i = +a[1], n = +a[2], s = +a[3], o = [r, i, r, i], f = n - r, l = s - i, u = Math.abs(a[e] - r) < 1e-3 && Math.abs(a[e + 1] - i) < 1e-3, h, _, d, p, c, m, x, y, v, w, b, S, P, O, T;
  for (u && (a.push(n, s), n = r, s = i, r = a[e - 2], i = a[e - 1], a.unshift(r, i), e += 4), t = t || t === 0 ? +t : 1, d = 2; d < e; d += 2)
    h = r, _ = i, r = n, i = s, n = +a[d + 2], s = +a[d + 3], !(r === n && i === s) && (p = f, c = l, f = n - r, l = s - i, m = It(p * p + c * c), x = It(f * f + l * l), y = It(Math.pow(f / x + p / m, 2) + Math.pow(l / x + c / m, 2)), v = (m + x) * t * 0.25 / y, w = r - (r - h) * (m ? v / m : 0), b = r + (n - r) * (x ? v / x : 0), S = r - (w + ((b - w) * (m * 3 / (m + x) + 0.5) / 4 || 0)), P = i - (i - _) * (m ? v / m : 0), O = i + (s - i) * (x ? v / x : 0), T = i - (P + ((O - P) * (m * 3 / (m + x) + 0.5) / 4 || 0)), (r !== h || i !== _) && o.push(
      B(w + S),
      // first control point
      B(P + T),
      B(r),
      // anchor
      B(i),
      B(b + S),
      // second control point
      B(O + T)
    ));
  return r !== n || i !== s || o.length < 4 ? o.push(B(n), B(s), B(n), B(s)) : o.length -= 2, o.length === 2 ? o.push(r, i, r, i, r, i) : u && (o.splice(0, 6), o.length = o.length - 6), o;
}
function _s(a) {
  ls(a[0]) && (a = [a]);
  var t = "", e = a.length, r, i, n, s;
  for (i = 0; i < e; i++) {
    for (s = a[i], t += "M" + B(s[0]) + "," + B(s[1]) + " C", r = s.length, n = 2; n < r; n++)
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
var $t, fe, Si, Sr, je, fr, yr, Ie, Mt = "transform", ni = Mt + "Origin", ds, ps = function(t) {
  var e = t.ownerDocument || t;
  for (!(Mt in t.style) && ("msTransform" in t.style) && (Mt = "msTransform", ni = Mt + "Origin"); e.parentNode && (e = e.parentNode); )
    ;
  if (fe = window, yr = new We(), e) {
    $t = e, Si = e.documentElement, Sr = e.body, Ie = $t.createElementNS("http://www.w3.org/2000/svg", "g"), Ie.style.transform = "none";
    var r = e.createElement("div"), i = e.createElement("div"), n = e && (e.body || e.firstElementChild);
    n && n.appendChild && (n.appendChild(r), r.appendChild(i), r.setAttribute("style", "position:static;transform:translate3d(0,0,1px)"), ds = i.offsetParent !== r, n.removeChild(r));
  }
  return e;
}, da = function(t) {
  for (var e, r; t && t !== Sr; )
    r = t._gsap, r && r.uncache && r.get(t, "x"), r && !r.scaleX && !r.scaleY && r.renderTransform && (r.scaleX = r.scaleY = 1e-4, r.renderTransform(1, r), e ? e.push(r) : e = [r]), t = t.parentNode;
  return e;
}, gs = [], ms = [], pa = function() {
  return fe.pageYOffset || $t.scrollTop || Si.scrollTop || Sr.scrollTop || 0;
}, ga = function() {
  return fe.pageXOffset || $t.scrollLeft || Si.scrollLeft || Sr.scrollLeft || 0;
}, Pi = function(t) {
  return t.ownerSVGElement || ((t.tagName + "").toLowerCase() === "svg" ? t : null);
}, ma = function a(t) {
  if (fe.getComputedStyle(t).position === "fixed")
    return !0;
  if (t = t.parentNode, t && t.nodeType === 1)
    return a(t);
}, zr = function a(t, e) {
  if (t.parentNode && ($t || ps(t))) {
    var r = Pi(t), i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", n = r ? e ? "rect" : "g" : "div", s = e !== 2 ? 0 : 100, o = e === 3 ? 100 : 0, f = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", l = $t.createElementNS ? $t.createElementNS(i.replace(/^https/, "http"), n) : $t.createElement(n);
    return e && (r ? (fr || (fr = a(t)), l.setAttribute("width", 0.01), l.setAttribute("height", 0.01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), fr.appendChild(l)) : (je || (je = a(t), je.style.cssText = f), l.style.cssText = f + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", je.appendChild(l))), l;
  }
  throw "Need document and parent.";
}, xa = function(t) {
  for (var e = new We(), r = 0; r < t.numberOfItems; r++)
    e.multiply(t.getItem(r).matrix);
  return e;
}, ya = function(t) {
  var e = t.getCTM(), r;
  return e || (r = t.style[Mt], t.style[Mt] = "none", t.appendChild(Ie), e = Ie.getCTM(), t.removeChild(Ie), r ? t.style[Mt] = r : t.style.removeProperty(Mt.replace(/([A-Z])/g, "-$1").toLowerCase())), e || yr.clone();
}, va = function(t, e) {
  var r = Pi(t), i = t === r, n = r ? gs : ms, s = t.parentNode, o, f, l, u, h, _;
  if (t === fe)
    return t;
  if (n.length || n.push(zr(t, 1), zr(t, 2), zr(t, 3)), o = r ? fr : je, r)
    i ? (l = ya(t), u = -l.e / l.a, h = -l.f / l.d, f = yr) : t.getBBox ? (l = t.getBBox(), f = t.transform ? t.transform.baseVal : {}, f = f.numberOfItems ? f.numberOfItems > 1 ? xa(f) : f.getItem(0).matrix : yr, u = f.a * l.x + f.c * l.y, h = f.b * l.x + f.d * l.y) : (f = new We(), u = h = 0), e && t.tagName.toLowerCase() === "g" && (u = h = 0), (i ? r : s).appendChild(o), o.setAttribute("transform", "matrix(" + f.a + "," + f.b + "," + f.c + "," + f.d + "," + (f.e + u) + "," + (f.f + h) + ")");
  else {
    if (u = h = 0, ds)
      for (f = t.offsetParent, l = t; l && (l = l.parentNode) && l !== f && l.parentNode; )
        (fe.getComputedStyle(l)[Mt] + "").length > 4 && (u = l.offsetLeft, h = l.offsetTop, l = 0);
    if (_ = fe.getComputedStyle(t), _.position !== "absolute" && _.position !== "fixed")
      for (f = t.offsetParent; s && s !== f; )
        u += s.scrollLeft || 0, h += s.scrollTop || 0, s = s.parentNode;
    l = o.style, l.top = t.offsetTop - h + "px", l.left = t.offsetLeft - u + "px", l[Mt] = _[Mt], l[ni] = _[ni], l.position = _.position === "fixed" ? "fixed" : "absolute", t.parentNode.appendChild(o);
  }
  return o;
}, Fr = function(t, e, r, i, n, s, o) {
  return t.a = e, t.b = r, t.c = i, t.d = n, t.e = s, t.f = o, t;
}, We = /* @__PURE__ */ function() {
  function a(e, r, i, n, s, o) {
    e === void 0 && (e = 1), r === void 0 && (r = 0), i === void 0 && (i = 0), n === void 0 && (n = 1), s === void 0 && (s = 0), o === void 0 && (o = 0), Fr(this, e, r, i, n, s, o);
  }
  var t = a.prototype;
  return t.inverse = function() {
    var r = this.a, i = this.b, n = this.c, s = this.d, o = this.e, f = this.f, l = r * s - i * n || 1e-10;
    return Fr(this, s / l, -i / l, -n / l, r / l, (n * f - s * o) / l, -(r * f - i * o) / l);
  }, t.multiply = function(r) {
    var i = this.a, n = this.b, s = this.c, o = this.d, f = this.e, l = this.f, u = r.a, h = r.c, _ = r.b, d = r.d, p = r.e, c = r.f;
    return Fr(this, u * i + _ * s, u * n + _ * o, h * i + d * s, h * n + d * o, f + p * i + c * s, l + p * n + c * o);
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
  if (!a || !a.parentNode || ($t || ps(a)).documentElement === a)
    return new We();
  var i = da(a), n = Pi(a), s = n ? gs : ms, o = va(a, e), f = s[0].getBoundingClientRect(), l = s[1].getBoundingClientRect(), u = s[2].getBoundingClientRect(), h = o.parentNode, _ = !r && ma(a), d = new We((l.left - f.left) / 100, (l.top - f.top) / 100, (u.left - f.left) / 100, (u.top - f.top) / 100, f.left + (_ ? 0 : ga()), f.top + (_ ? 0 : pa()));
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
var ba = "x,translateX,left,marginLeft,xPercent".split(","), Ta = "y,translateY,top,marginTop,yPercent".split(","), wa = Math.PI / 180, St, xs, pe, si, Br, sn, Sa = function() {
  return St || typeof window < "u" && (St = window.gsap) && St.registerPlugin && St;
}, Ae = function(t, e, r, i) {
  for (var n = e.length, s = i === 2 ? 0 : i, o = 0; o < n; o++)
    t[s] = parseFloat(e[o][r]), i === 2 && (t[s + 1] = 0), s += 2;
  return t;
}, xe = function(t, e, r) {
  return parseFloat(t._gsap.get(t, e, r || "px")) || 0;
}, ys = function(t) {
  var e = t[0], r = t[1], i;
  for (i = 2; i < t.length; i += 2)
    e = t[i] += e, r = t[i + 1] += r;
}, on = function(t, e, r, i, n, s, o, f, l) {
  if (o.type === "cubic")
    e = [e];
  else {
    o.fromCurrent !== !1 && e.unshift(xe(r, i, f), n ? xe(r, n, l) : 0), o.relative && ys(e);
    var u = n ? ii : _a;
    e = [u(e, o.curviness)];
  }
  return e = s(vs(e, r, o)), vr(t, r, i, e, "x", f), n && vr(t, r, n, e, "y", l), le(e, o.resolution || (o.curviness === 0 ? 20 : 12));
}, Pa = function(t) {
  return t;
}, Oa = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g, an = function(t, e, r) {
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
}, oi = function(t, e, r, i) {
  var n = Te(t.parentNode, !0, !0), s = n.clone().multiply(Te(e)), o = an(t, r, n), f = an(e, i, n), l = f.x, u = f.y, h;
  return s.e = s.f = 0, i === "auto" && e.getTotalLength && e.tagName.toLowerCase() === "path" && (h = e.getAttribute("d").match(Oa) || [], h = s.apply({
    x: +h[0],
    y: +h[1]
  }), l += h.x, u += h.y), h && (h = s.apply(e.getBBox()), l -= h.x, u -= h.y), s.e = l - o.x, s.f = u - o.y, s;
}, vs = function(t, e, r) {
  var i = r.align, n = r.matrix, s = r.offsetX, o = r.offsetY, f = r.alignOrigin, l = t[0][0], u = t[0][1], h = xe(e, "x"), _ = xe(e, "y"), d, p, c;
  return !t || !t.length ? lr("M0,0L0,0") : (i && (i === "self" || (d = si(i)[0] || e) === e ? Le(t, 1, 0, 0, 1, h - l, _ - u) : (f && f[2] !== !1 ? St.set(e, {
    transformOrigin: f[0] * 100 + "% " + f[1] * 100 + "%"
  }) : f = [xe(e, "xPercent") / -100, xe(e, "yPercent") / -100], p = oi(e, d, f, "auto"), c = p.apply({
    x: l,
    y: u
  }), Le(t, p.a, p.b, p.c, p.d, h + p.e - (c.x - p.e), _ + p.f - (c.y - p.f)))), n ? Le(t, n.a, n.b, n.c, n.d, n.e, n.f) : (s || o) && Le(t, 1, 0, 0, 1, s || 0, o || 0), t);
}, vr = function(t, e, r, i, n, s) {
  var o = e._gsap, f = o.harness, l = f && f.aliases && f.aliases[r], u = l && l.indexOf(",") < 0 ? l : r, h = t._pt = new xs(t._pt, e, u, 0, 0, Pa, 0, o.set(e, u, t));
  h.u = pe(o.get(e, u, s)) || 0, h.path = i, h.pp = n, t._props.push(u);
}, Ca = function(t, e) {
  return function(r) {
    return t || e !== 1 ? cs(r, t, e) : r;
  };
}, bs = {
  version: "3.12.5",
  name: "motionPath",
  register: function(t, e, r) {
    St = t, pe = St.utils.getUnit, si = St.utils.toArray, Br = St.core.getStyleSaver, sn = St.core.reverting || function() {
    }, xs = r;
  },
  init: function(t, e, r) {
    if (!St)
      return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
    (!(typeof e == "object" && !e.style) || !e.path) && (e = {
      path: e
    });
    var i = [], n = e, s = n.path, o = n.autoRotate, f = n.unitX, l = n.unitY, u = n.x, h = n.y, _ = s[0], d = Ca(e.start, "end" in e ? e.end : 1), p, c;
    if (this.rawPaths = i, this.target = t, this.tween = r, this.styles = Br && Br(t, "transform"), (this.rotate = o || o === 0) && (this.rOffset = parseFloat(o) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = pe(t._gsap.get(t, this.rProp)) || 0), Array.isArray(s) && !("closed" in s) && typeof _ != "number") {
      for (c in _)
        !u && ~ba.indexOf(c) ? u = c : !h && ~Ta.indexOf(c) && (h = c);
      u && h ? i.push(on(this, Ae(Ae([], s, u, 0), s, h, 1), t, u, h, d, e, f || pe(s[0][u]), l || pe(s[0][h]))) : u = h = 0;
      for (c in _)
        c !== u && c !== h && i.push(on(this, Ae([], s, c, 2), t, c, 0, d, e, pe(s[0][c])));
    } else
      p = d(vs(lr(e.path), t, e)), le(p, e.resolution), i.push(p), vr(this, t, e.x || "x", p, "x", e.unitX || "px"), vr(this, t, e.y || "y", p, "y", e.unitY || "px");
  },
  render: function(t, e) {
    var r = e.rawPaths, i = r.length, n = e._pt;
    if (e.tween._time || !sn()) {
      for (t > 1 ? t = 1 : t < 0 && (t = 0); i--; )
        nn(r[i], t, !i && e.rotate, r[i]);
      for (; n; )
        n.set(n.t, n.p, n.path[n.pp] + n.u, n.d, t), n = n._next;
      e.rotate && e.rSet(e.target, e.rProp, r[0].angle * (e.radians ? wa : 1) + e.rOffset + e.ru, e, t);
    } else
      e.styles.revert();
  },
  getLength: function(t) {
    return le(lr(t)).totalLength;
  },
  sliceRawPath: cs,
  getRawPath: lr,
  pointsToSegment: ii,
  stringToRawPath: xr,
  rawPathToString: _s,
  transformRawPath: Le,
  getGlobalMatrix: Te,
  getPositionOnPath: nn,
  cacheRawPathMeasurements: le,
  convertToPath: function(t, e) {
    return si(t).map(function(r) {
      return ua(r, e !== !1);
    });
  },
  convertCoordinates: function(t, e, r) {
    var i = Te(e, !0, !0).multiply(Te(t));
    return r ? i.apply(r) : i;
  },
  getAlignMatrix: oi,
  getRelativePosition: function(t, e, r, i) {
    var n = oi(t, e, r, i);
    return {
      x: n.e,
      y: n.f
    };
  },
  arrayToRawPath: function(t, e) {
    e = e || {};
    var r = Ae(Ae([], t, e.x || "x", 0), t, e.y || "y", 1);
    return e.relative && ys(r), [e.type === "cubic" ? r : ii(r, e.curviness)];
  }
};
Sa() && St.registerPlugin(bs);
as.registerPlugin(bs);
const Na = ({ children: a }) => /* @__PURE__ */ k.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ k.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ k.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ k.jsx(ks, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ k.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ k.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ k.jsx(Li, {}) }),
  /* @__PURE__ */ k.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ k.jsx(Li, {}) }),
  /* @__PURE__ */ k.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ k.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ k.jsx("div", { className: "content", children: a }) }) })
] }), Da = ({
  headBlockChildren: a,
  width: t,
  height: e,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: s
}) => /* @__PURE__ */ k.jsxs("div", { className: "card-container relative", style: { width: t, height: e }, children: [
  /* @__PURE__ */ k.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ k.jsx("div", { className: `text-${i} head-block`, children: a }),
        /* @__PURE__ */ k.jsx("div", { className: `text-${i} main-block'`, children: n })
      ]
    }
  ),
  /* @__PURE__ */ k.jsx(
    "div",
    {
      className: `artifact text-${r} ${s ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ k.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] });
export {
  Da as Card,
  ka as EvaBorderPanel,
  Aa as EvaOptionList,
  Ma as EvaProgressBar,
  ks as EvaTilePanel,
  Ra as EvaUnitBox,
  Na as GeometricLayout
};
//# sourceMappingURL=index.es.js.map
