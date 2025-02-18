import * as h from "react";
import y0, { useRef as _e, useEffect as q9, useMemo as E0, createElement as M0, useState as v1 } from "react";
var D9 = { exports: {} }, v9 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e1;
function b0() {
  if (e1) return v9;
  e1 = 1;
  var l = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var s = null;
    if (n !== void 0 && (s = "" + n), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      n = {};
      for (var a in i)
        a !== "key" && (n[a] = i[a]);
    } else n = i;
    return i = n.ref, {
      $$typeof: l,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return v9.Fragment = e, v9.jsx = t, v9.jsxs = t, v9;
}
var y9 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var t1;
function T0() {
  return t1 || (t1 = 1, process.env.NODE_ENV !== "production" && function() {
    function l(d) {
      if (d == null) return null;
      if (typeof d == "function")
        return d.$$typeof === ce ? null : d.displayName || d.name || null;
      if (typeof d == "string") return d;
      switch (d) {
        case T:
          return "Fragment";
        case y:
          return "Portal";
        case S:
          return "Profiler";
        case k:
          return "StrictMode";
        case A:
          return "Suspense";
        case V:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (typeof d.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), d.$$typeof) {
          case N:
            return (d.displayName || "Context") + ".Provider";
          case b:
            return (d._context.displayName || "Context") + ".Consumer";
          case j:
            var L = d.render;
            return d = d.displayName, d || (d = L.displayName || L.name || "", d = d !== "" ? "ForwardRef(" + d + ")" : "ForwardRef"), d;
          case $:
            return L = d.displayName || null, L !== null ? L : l(d.type) || "Memo";
          case H:
            L = d._payload, d = d._init;
            try {
              return l(d(L));
            } catch {
            }
        }
      return null;
    }
    function e(d) {
      return "" + d;
    }
    function t(d) {
      try {
        e(d);
        var L = !1;
      } catch {
        L = !0;
      }
      if (L) {
        L = console;
        var O = L.error, R = typeof Symbol == "function" && Symbol.toStringTag && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return O.call(
          L,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          R
        ), e(d);
      }
    }
    function r() {
    }
    function i() {
      if (ne === 0) {
        Me = console.log, Bt = console.info, Ht = console.warn, Yt = console.error, Ut = console.group, $t = console.groupCollapsed, Gt = console.groupEnd;
        var d = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: d,
          log: d,
          warn: d,
          error: d,
          group: d,
          groupCollapsed: d,
          groupEnd: d
        });
      }
      ne++;
    }
    function n() {
      if (ne--, ne === 0) {
        var d = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: de({}, d, { value: Me }),
          info: de({}, d, { value: Bt }),
          warn: de({}, d, { value: Ht }),
          error: de({}, d, { value: Yt }),
          group: de({}, d, { value: Ut }),
          groupCollapsed: de({}, d, { value: $t }),
          groupEnd: de({}, d, { value: Gt })
        });
      }
      0 > ne && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(d) {
      if (et === void 0)
        try {
          throw Error();
        } catch (O) {
          var L = O.stack.trim().match(/\n( *(at )?)/);
          et = L && L[1] || "", Xt = -1 < O.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < O.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + et + d + Xt;
    }
    function a(d, L) {
      if (!d || tt) return "";
      var O = rt.get(d);
      if (O !== void 0) return O;
      tt = !0, O = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var R = null;
      R = ve.H, ve.H = null, i();
      try {
        var ee = {
          DetermineComponentFrameRoot: function() {
            try {
              if (L) {
                var ze = function() {
                  throw Error();
                };
                if (Object.defineProperty(ze.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(ze, []);
                  } catch (Ne) {
                    var j9 = Ne;
                  }
                  Reflect.construct(d, [], ze);
                } else {
                  try {
                    ze.call();
                  } catch (Ne) {
                    j9 = Ne;
                  }
                  d.call(ze.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Ne) {
                  j9 = Ne;
                }
                (ze = d()) && typeof ze.catch == "function" && ze.catch(function() {
                });
              }
            } catch (Ne) {
              if (Ne && j9 && typeof Ne.stack == "string")
                return [Ne.stack, j9.stack];
            }
            return [null, null];
          }
        };
        ee.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var W = Object.getOwnPropertyDescriptor(
          ee.DetermineComponentFrameRoot,
          "name"
        );
        W && W.configurable && Object.defineProperty(
          ee.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var Z = ee.DetermineComponentFrameRoot(), Pe = Z[0], l9 = Z[1];
        if (Pe && l9) {
          var se = Pe.split(`
`), Xe = l9.split(`
`);
          for (Z = W = 0; W < se.length && !se[W].includes(
            "DetermineComponentFrameRoot"
          ); )
            W++;
          for (; Z < Xe.length && !Xe[Z].includes(
            "DetermineComponentFrameRoot"
          ); )
            Z++;
          if (W === se.length || Z === Xe.length)
            for (W = se.length - 1, Z = Xe.length - 1; 1 <= W && 0 <= Z && se[W] !== Xe[Z]; )
              Z--;
          for (; 1 <= W && 0 <= Z; W--, Z--)
            if (se[W] !== Xe[Z]) {
              if (W !== 1 || Z !== 1)
                do
                  if (W--, Z--, 0 > Z || se[W] !== Xe[Z]) {
                    var w9 = `
` + se[W].replace(
                      " at new ",
                      " at "
                    );
                    return d.displayName && w9.includes("<anonymous>") && (w9 = w9.replace("<anonymous>", d.displayName)), typeof d == "function" && rt.set(d, w9), w9;
                  }
                while (1 <= W && 0 <= Z);
              break;
            }
        }
      } finally {
        tt = !1, ve.H = R, n(), Error.prepareStackTrace = O;
      }
      return se = (se = d ? d.displayName || d.name : "") ? s(se) : "", typeof d == "function" && rt.set(d, se), se;
    }
    function o(d) {
      if (d == null) return "";
      if (typeof d == "function") {
        var L = d.prototype;
        return a(
          d,
          !(!L || !L.isReactComponent)
        );
      }
      if (typeof d == "string") return s(d);
      switch (d) {
        case A:
          return s("Suspense");
        case V:
          return s("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case j:
            return d = a(d.render, !1), d;
          case $:
            return o(d.type);
          case H:
            L = d._payload, d = d._init;
            try {
              return o(d(L));
            } catch {
            }
        }
      return "";
    }
    function f() {
      var d = ve.A;
      return d === null ? null : d.getOwner();
    }
    function u(d) {
      if (Fe.call(d, "key")) {
        var L = Object.getOwnPropertyDescriptor(d, "key").get;
        if (L && L.isReactWarning) return !1;
      }
      return d.key !== void 0;
    }
    function _(d, L) {
      function O() {
        qt || (qt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          L
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(d, "key", {
        get: O,
        configurable: !0
      });
    }
    function C() {
      var d = l(this.type);
      return Jt[d] || (Jt[d] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), d = this.props.ref, d !== void 0 ? d : null;
    }
    function p(d, L, O, R, ee, W) {
      return O = W.ref, d = {
        $$typeof: M,
        type: d,
        key: L,
        props: W,
        _owner: ee
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(d, "ref", {
        enumerable: !1,
        get: C
      }) : Object.defineProperty(d, "ref", { enumerable: !1, value: null }), d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(d, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    }
    function g(d, L, O, R, ee, W) {
      if (typeof d == "string" || typeof d == "function" || d === T || d === S || d === k || d === A || d === V || d === Y || typeof d == "object" && d !== null && (d.$$typeof === H || d.$$typeof === $ || d.$$typeof === N || d.$$typeof === b || d.$$typeof === j || d.$$typeof === Ze || d.getModuleId !== void 0)) {
        var Z = L.children;
        if (Z !== void 0)
          if (R)
            if (a9(Z)) {
              for (R = 0; R < Z.length; R++)
                c(Z[R], d);
              Object.freeze && Object.freeze(Z);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(Z, d);
      } else
        Z = "", (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), d === null ? R = "null" : a9(d) ? R = "array" : d !== void 0 && d.$$typeof === M ? (R = "<" + (l(d.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : R = typeof d, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          R,
          Z
        );
      if (Fe.call(L, "key")) {
        Z = l(d);
        var Pe = Object.keys(L).filter(function(se) {
          return se !== "key";
        });
        R = 0 < Pe.length ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}", Qt[Z + R] || (Pe = 0 < Pe.length ? "{" + Pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          R,
          Z,
          Pe,
          Z
        ), Qt[Z + R] = !0);
      }
      if (Z = null, O !== void 0 && (t(O), Z = "" + O), u(L) && (t(L.key), Z = "" + L.key), "key" in L) {
        O = {};
        for (var l9 in L)
          l9 !== "key" && (O[l9] = L[l9]);
      } else O = L;
      return Z && _(
        O,
        typeof d == "function" ? d.displayName || d.name || "Unknown" : d
      ), p(d, Z, W, ee, f(), O);
    }
    function c(d, L) {
      if (typeof d == "object" && d && d.$$typeof !== v0) {
        if (a9(d))
          for (var O = 0; O < d.length; O++) {
            var R = d[O];
            m(R) && w(R, L);
          }
        else if (m(d))
          d._store && (d._store.validated = 1);
        else if (d === null || typeof d != "object" ? O = null : (O = G && d[G] || d["@@iterator"], O = typeof O == "function" ? O : null), typeof O == "function" && O !== d.entries && (O = O.call(d), O !== d))
          for (; !(d = O.next()).done; )
            m(d.value) && w(d.value, L);
      }
    }
    function m(d) {
      return typeof d == "object" && d !== null && d.$$typeof === M;
    }
    function w(d, L) {
      if (d._store && !d._store.validated && d.key == null && (d._store.validated = 1, L = v(L), !Kt[L])) {
        Kt[L] = !0;
        var O = "";
        d && d._owner != null && d._owner !== f() && (O = null, typeof d._owner.tag == "number" ? O = l(d._owner.type) : typeof d._owner.name == "string" && (O = d._owner.name), O = " It was passed a child from " + O + ".");
        var R = ve.getCurrentStack;
        ve.getCurrentStack = function() {
          var ee = o(d.type);
          return R && (ee += R() || ""), ee;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          L,
          O
        ), ve.getCurrentStack = R;
      }
    }
    function v(d) {
      var L = "", O = f();
      return O && (O = l(O.type)) && (L = `

Check the render method of \`` + O + "`."), L || (d = l(d)) && (L = `

Check the top-level render call using <` + d + ">."), L;
    }
    var E = y0, M = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), N = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), G = Symbol.iterator, ce = Symbol.for("react.client.reference"), ve = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Fe = Object.prototype.hasOwnProperty, de = Object.assign, Ze = Symbol.for("react.client.reference"), a9 = Array.isArray, ne = 0, Me, Bt, Ht, Yt, Ut, $t, Gt;
    r.__reactDisabledLog = !0;
    var et, Xt, tt = !1, rt = new (typeof WeakMap == "function" ? WeakMap : Map)(), v0 = Symbol.for("react.client.reference"), qt, Jt = {}, Qt = {}, Kt = {};
    y9.Fragment = T, y9.jsx = function(d, L, O, R, ee) {
      return g(d, L, O, !1, R, ee);
    }, y9.jsxs = function(d, L, O, R, ee) {
      return g(d, L, O, !0, R, ee);
    };
  }()), y9;
}
var r1;
function k0() {
  return r1 || (r1 = 1, process.env.NODE_ENV === "production" ? D9.exports = b0() : D9.exports = T0()), D9.exports;
}
var x = k0();
const Qr = ({
  children: l,
  mode: e = "warning",
  pulseAnimation: t = !0
}) => /* @__PURE__ */ x.jsx("div", { className: `piece ${t && "animate-pulse"}`, children: /* @__PURE__ */ x.jsx(
  "div",
  {
    className: `glowedBorder ${e === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${e} label`,
    children: l
  }
) }), Kr = ({ barsCount: l, currentBarIndex: e }) => {
  function t() {
    const r = [];
    for (let i = 0; i < l; i++)
      r.push(
        /* @__PURE__ */ x.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < e ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ x.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${l * 10}px` }, children: [
    /* @__PURE__ */ x.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ x.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ x.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ x.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ x.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ x.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: t() }),
    /* @__PURE__ */ x.jsx("div", { className: "h-[15px]" })
  ] });
}, ei = ({ unitNumber: l, subjectName: e }) => /* @__PURE__ */ x.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ x.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ x.jsx("div", { className: "text-2xl font-[600] label", children: l }),
  /* @__PURE__ */ x.jsx("div", { className: "text-xl font-[400] label", children: e })
] }), S0 = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ h.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ h.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ h.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ h.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ h.createElement("defs", null, /* @__PURE__ */ h.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ h.createElement("rect", { width: 80, height: 80, fill: "white" }))));
function Ae(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function y1(l, e) {
  l.prototype = Object.create(e.prototype), l.prototype.constructor = l, l.__proto__ = e;
}
/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ge = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _9 = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Tt, K, z, Se = 1e8, re = 1 / Se, ht = Math.PI * 2, L0 = ht / 4, O0 = 0, E1 = Math.sqrt, Z0 = Math.cos, P0 = Math.sin, Q = function(e) {
  return typeof e == "string";
}, U = function(e) {
  return typeof e == "function";
}, je = function(e) {
  return typeof e == "number";
}, kt = function(e) {
  return typeof e > "u";
}, Oe = function(e) {
  return typeof e == "object";
}, le = function(e) {
  return e !== !1;
}, St = function() {
  return typeof window < "u";
}, F9 = function(e) {
  return U(e) || Q(e);
}, M1 = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, ie = Array.isArray, ct = /(?:-?\.?\d|\.)+/gi, b1 = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, f9 = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, T1 = /[+-]=-?[.\d]+/, k1 = /[^,'"\[\]\s]+/gi, N0 = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, I, be, dt, Lt, xe = {}, B9 = {}, S1, L1 = function(e) {
  return (B9 = C9(e, xe)) && he;
}, Ot = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, L9 = function(e, t) {
  return !t && console.warn(e);
}, O1 = function(e, t) {
  return e && (xe[e] = t) && B9 && (B9[e] = t) || xe;
}, O9 = function() {
  return 0;
}, R0 = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, z9 = {
  suppressEvents: !0,
  kill: !1
}, A0 = {
  suppressEvents: !0
}, Zt = {}, He = [], _t = {}, Z1, Ce = {}, nt = {}, i1 = 30, W9 = [], Pt = "", Nt = function(e) {
  var t = e[0], r, i;
  if (Oe(t) || U(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = W9.length; i-- && !W9[i].targetTest(t); )
      ;
    r = W9[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new t0(e[i], r))) || e.splice(i, 1);
  return e;
}, e9 = function(e) {
  return e._gsap || Nt(Ee(e))[0]._gsap;
}, P1 = function(e, t, r) {
  return (r = e[t]) && U(r) ? e[t]() : kt(r) && e.getAttribute && e.getAttribute(t) || r;
}, oe = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, X = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, J = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, h9 = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, V0 = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, H9 = function() {
  var e = He.length, t = He.slice(0), r, i;
  for (_t = {}, He.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, N1 = function(e, t, r, i) {
  He.length && !K && H9(), e.render(t, r, K && t < 0 && (e._initted || e._startAt)), He.length && !K && H9();
}, R1 = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(k1).length < 2 ? t : Q(e) ? e.trim() : e;
}, A1 = function(e) {
  return e;
}, we = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, j0 = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, C9 = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, n1 = function l(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Oe(t[r]) ? l(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Y9 = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, T9 = function(e) {
  var t = e.parent || I, r = e.keyframes ? j0(ie(e.keyframes)) : we;
  if (le(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, D0 = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, V1 = function(e, t, r, i, n) {
  var s = e[i], a;
  if (n)
    for (a = t[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t;
}, J9 = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, s = t._next;
  n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Ue = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, t9 = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, F0 = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, Ct = function(e, t, r, i) {
  return e._startAt && (K ? e._startAt.revert(z9) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, z0 = function l(e) {
  return !e || e._ts && l(e.parent);
}, s1 = function(e) {
  return e._repeat ? p9(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, p9 = function(e, t) {
  var r = Math.floor(e = J(e / t));
  return e && r === e ? r - 1 : r;
}, U9 = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, Q9 = function(e) {
  return e._end = J(e._start + (e._tDur / Math.abs(e._ts || e._rts || re) || 0));
}, K9 = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = J(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), Q9(e), r._dirty || t9(r, e)), e;
}, j1 = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = U9(e.rawTime(), t), (!t._dur || V9(0, t.totalDuration(), r) - t._tTime > re) && t.render(r, !0)), t9(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -1e-8;
  }
}, Te = function(e, t, r, i) {
  return t.parent && Ue(t), t._start = J((je(r) ? r : r || e !== I ? ye(e, r, t) : e._time) + t._delay), t._end = J(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), V1(e, t, "_first", "_last", e._sort ? "_start" : 0), pt(t) || (e._recent = t), i || j1(e, t), e._ts < 0 && K9(e, e._tTime), e;
}, D1 = function(e, t) {
  return (xe.ScrollTrigger || Ot("scrollTrigger", t)) && xe.ScrollTrigger.create(t, e);
}, F1 = function(e, t, r, i, n) {
  if (At(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !K && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Z1 !== pe.frame)
    return He.push(e), e._lazy = [n, i], 1;
}, W0 = function l(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || l(t));
}, pt = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, I0 = function(e, t, r, i) {
  var n = e.ratio, s = t < 0 || !t && (!e._start && W0(e) && !(!e._initted && pt(e)) || (e._ts < 0 || e._dp._ts < 0) && !pt(e)) ? 0 : 1, a = e._rDelay, o = 0, f, u, _;
  if (a && e._repeat && (o = V9(0, e._tDur, t), u = p9(o, a), e._yoyo && u & 1 && (s = 1 - s), u !== p9(e._tTime, a) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || K || i || e._zTime === re || !t && e._zTime) {
    if (!e._initted && F1(e, t, i, r, o))
      return;
    for (_ = e._zTime, e._zTime = t || (r ? re : 0), r || (r = t && !_), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = o, f = e._pt; f; )
      f.r(s, f.d), f = f._next;
    t < 0 && Ct(e, t, r, !0), e._onUpdate && !r && me(e, "onUpdate"), o && e._repeat && !r && e.parent && me(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Ue(e, 1), !r && !K && (me(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, B0 = function(e, t, r) {
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
}, m9 = function(e, t, r, i) {
  var n = e._repeat, s = J(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : J(s * (n + 1) + e._rDelay * n) : s, a > 0 && !i && K9(e, e._tTime = e._tDur * a), e.parent && Q9(e), r || t9(e.parent, e), e;
}, a1 = function(e) {
  return e instanceof ae ? t9(e) : m9(e, e._dur);
}, H0 = {
  _start: 0,
  endTime: O9,
  totalDuration: O9
}, ye = function l(e, t, r) {
  var i = e.labels, n = e._recent || H0, s = e.duration() >= Se ? n.endTime(!1) : e._dur, a, o, f;
  return Q(t) && (isNaN(t) || t in i) ? (o = t.charAt(0), f = t.substr(-1) === "%", a = t.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (f ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (o = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), f && r && (o = o / 100 * (ie(r) ? r[0] : r).totalDuration()), a > 1 ? l(e, t.substr(0, a - 1), r) + o : s + o)) : t == null ? s : +t;
}, k9 = function(e, t, r) {
  var i = je(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], a, o;
  if (i && (s.duration = t[1]), s.parent = r, e) {
    for (a = s, o = r; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = le(o.vars.inherit) && o.parent;
    s.immediateRender = le(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
  }
  return new q(t[0], s, t[n + 1]);
}, Ge = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, V9 = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, te = function(e, t) {
  return !Q(e) || !(t = N0.exec(e)) ? "" : t[1];
}, Y0 = function(e, t, r) {
  return Ge(r, function(i) {
    return V9(e, t, i);
  });
}, mt = [].slice, z1 = function(e, t) {
  return e && Oe(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Oe(e[0])) && !e.nodeType && e !== be;
}, U0 = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return Q(i) && !t || z1(i, 1) ? (n = r).push.apply(n, Ee(i)) : r.push(i);
  }) || r;
}, Ee = function(e, t, r) {
  return z && !t && z.selector ? z.selector(e) : Q(e) && !r && (dt || !g9()) ? mt.call((t || Lt).querySelectorAll(e), 0) : ie(e) ? U0(e, r) : z1(e) ? mt.call(e, 0) : e ? [e] : [];
}, gt = function(e) {
  return e = Ee(e)[0] || L9("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ee(t, r.querySelectorAll ? r : r === e ? L9("Invalid scope") || Lt.createElement("div") : e);
  };
}, W1 = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, I1 = function(e) {
  if (U(e))
    return e;
  var t = Oe(e) ? e : {
    each: e
  }, r = r9(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {}, a = i > 0 && i < 1, o = isNaN(i) || a, f = t.axis, u = i, _ = i;
  return Q(i) ? u = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && o && (u = i[0], _ = i[1]), function(C, p, g) {
    var c = (g || t).length, m = s[c], w, v, E, M, y, T, k, S, b;
    if (!m) {
      if (b = t.grid === "auto" ? 0 : (t.grid || [1, Se])[1], !b) {
        for (k = -1e8; k < (k = g[b++].getBoundingClientRect().left) && b < c; )
          ;
        b < c && b--;
      }
      for (m = s[c] = [], w = o ? Math.min(b, c) * u - 0.5 : i % b, v = b === Se ? 0 : o ? c * _ / b - 0.5 : i / b | 0, k = 0, S = Se, T = 0; T < c; T++)
        E = T % b - w, M = v - (T / b | 0), m[T] = y = f ? Math.abs(f === "y" ? M : E) : E1(E * E + M * M), y > k && (k = y), y < S && (S = y);
      i === "random" && W1(m), m.max = k - S, m.min = S, m.v = c = (parseFloat(t.amount) || parseFloat(t.each) * (b > c ? c - 1 : f ? f === "y" ? c / b : b : Math.max(b, c / b)) || 0) * (i === "edges" ? -1 : 1), m.b = c < 0 ? n - c : n, m.u = te(t.amount || t.each) || 0, r = r && c < 0 ? Q1(r) : r;
    }
    return c = (m[C] - m.min) / m.max || 0, J(m.b + (r ? r(c) : c) * m.v) + m.u;
  };
}, xt = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = J(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + (je(r) ? 0 : te(r));
  };
}, B1 = function(e, t) {
  var r = ie(e), i, n;
  return !r && Oe(e) && (i = r = e.radius || Se, e.values ? (e = Ee(e.values), (n = !je(e[0])) && (i *= i)) : e = xt(e.increment)), Ge(t, r ? U(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), f = Se, u = 0, _ = e.length, C, p; _--; )
      n ? (C = e[_].x - a, p = e[_].y - o, C = C * C + p * p) : C = Math.abs(e[_] - a), C < f && (f = C, u = _);
    return u = !i || f <= i ? e[u] : s, n || u === s || je(s) ? u : u + te(s);
  } : xt(e));
}, H1 = function(e, t, r, i) {
  return Ge(ie(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return ie(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, $0 = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, G0 = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || te(r));
  };
}, X0 = function(e, t, r) {
  return U1(e, t, 0, 1, r);
}, Y1 = function(e, t, r) {
  return Ge(r, function(i) {
    return e[~~t(i)];
  });
}, q0 = function l(e, t, r) {
  var i = t - e;
  return ie(e) ? Y1(e, l(0, e.length), t) : Ge(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, J0 = function l(e, t, r) {
  var i = t - e, n = i * 2;
  return ie(e) ? Y1(e, l(0, e.length - 1), t) : Ge(r, function(s) {
    return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s);
  });
}, Z9 = function(e) {
  for (var t = 0, r = "", i, n, s, a; ~(i = e.indexOf("random(", t)); )
    s = e.indexOf(")", i), a = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(a ? k1 : ct), r += e.substr(t, i - t) + H1(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
  return r + e.substr(t, e.length - t);
}, U1 = function(e, t, r, i, n) {
  var s = t - e, a = i - r;
  return Ge(n, function(o) {
    return r + ((o - e) / s * a || 0);
  });
}, Q0 = function l(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!n) {
    var s = Q(e), a = {}, o, f, u, _, C;
    if (r === !0 && (i = 1) && (r = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (ie(e) && !ie(t)) {
      for (u = [], _ = e.length, C = _ - 2, f = 1; f < _; f++)
        u.push(l(e[f - 1], e[f]));
      _--, n = function(g) {
        g *= _;
        var c = Math.min(C, ~~g);
        return u[c](g - c);
      }, r = t;
    } else i || (e = C9(ie(e) ? [] : {}, e));
    if (!u) {
      for (o in t)
        Rt.call(a, e, o, "get", t[o]);
      n = function(g) {
        return Dt(g, a) || (s ? e.p : e);
      };
    }
  }
  return Ge(r, n);
}, l1 = function(e, t, r) {
  var i = e.labels, n = Se, s, a, o;
  for (s in i)
    a = i[s] - t, a < 0 == !!r && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, me = function(e, t, r) {
  var i = e.vars, n = i[t], s = z, a = e._ctx, o, f, u;
  if (n)
    return o = i[t + "Params"], f = i.callbackScope || e, r && He.length && H9(), a && (z = a), u = o ? n.apply(f, o) : n.call(f), z = s, u;
}, M9 = function(e) {
  return Ue(e), e.scrollTrigger && e.scrollTrigger.kill(!!K), e.progress() < 1 && me(e, "onInterrupt"), e;
}, u9, $1 = [], G1 = function(e) {
  if (e)
    if (e = !e.name && e.default || e, St() || e.headless) {
      var t = e.name, r = U(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: O9,
        render: Dt,
        add: Rt,
        kill: _r,
        modifier: dr,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: jt,
        aliases: {},
        register: 0
      };
      if (g9(), e !== i) {
        if (Ce[t])
          return;
        we(i, we(Y9(e, n), s)), C9(i.prototype, C9(n, Y9(e, s))), Ce[i.prop = t] = i, e.targetTest && (W9.push(i), Zt[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      O1(t, i), e.register && e.register(he, i, fe);
    } else
      $1.push(e);
}, F = 255, b9 = {
  aqua: [0, F, F],
  lime: [0, F, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, F],
  navy: [0, 0, 128],
  white: [F, F, F],
  olive: [128, 128, 0],
  yellow: [F, F, 0],
  orange: [F, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [F, 0, 0],
  pink: [F, 192, 203],
  cyan: [0, F, F],
  transparent: [F, F, F, 0]
}, st = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * F + 0.5 | 0;
}, X1 = function(e, t, r) {
  var i = e ? je(e) ? [e >> 16, e >> 8 & F, e & F] : 0 : b9.black, n, s, a, o, f, u, _, C, p, g;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), b9[e])
      i = b9[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & F, i & F, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & F, e & F];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = g = e.match(ct), !t)
        o = +i[0] % 360 / 360, f = +i[1] / 100, u = +i[2] / 100, s = u <= 0.5 ? u * (f + 1) : u + f - u * f, n = u * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = st(o + 1 / 3, n, s), i[1] = st(o, n, s), i[2] = st(o - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(b1), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ct) || b9.transparent;
    i = i.map(Number);
  }
  return t && !g && (n = i[0] / F, s = i[1] / F, a = i[2] / F, _ = Math.max(n, s, a), C = Math.min(n, s, a), u = (_ + C) / 2, _ === C ? o = f = 0 : (p = _ - C, f = u > 0.5 ? p / (2 - _ - C) : p / (_ + C), o = _ === n ? (s - a) / p + (s < a ? 6 : 0) : _ === s ? (a - n) / p + 2 : (n - s) / p + 4, o *= 60), i[0] = ~~(o + 0.5), i[1] = ~~(f * 100 + 0.5), i[2] = ~~(u * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, q1 = function(e) {
  var t = [], r = [], i = -1;
  return e.split(Ye).forEach(function(n) {
    var s = n.match(f9) || [];
    t.push.apply(t, s), r.push(i += s.length + 1);
  }), t.c = r, t;
}, o1 = function(e, t, r) {
  var i = "", n = (e + i).match(Ye), s = t ? "hsla(" : "rgba(", a = 0, o, f, u, _;
  if (!n)
    return e;
  if (n = n.map(function(C) {
    return (C = X1(C, t, 1)) && s + (t ? C[0] + "," + C[1] + "%," + C[2] + "%," + C[3] : C.join(",")) + ")";
  }), r && (u = q1(e), o = r.c, o.join(i) !== u.c.join(i)))
    for (f = e.replace(Ye, "1").split(f9), _ = f.length - 1; a < _; a++)
      i += f[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (u.length ? u : n.length ? n : r).shift());
  if (!f)
    for (f = e.split(Ye), _ = f.length - 1; a < _; a++)
      i += f[a] + n[a];
  return i + f[_];
}, Ye = function() {
  var l = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in b9)
    l += "|" + e + "\\b";
  return new RegExp(l + ")", "gi");
}(), K0 = /hsl[a]?\(/, J1 = function(e) {
  var t = e.join(" "), r;
  if (Ye.lastIndex = 0, Ye.test(t))
    return r = K0.test(t), e[1] = o1(e[1], r), e[0] = o1(e[0], r, q1(e[1])), !0;
}, P9, pe = function() {
  var l = Date.now, e = 500, t = 33, r = l(), i = r, n = 1e3 / 240, s = n, a = [], o, f, u, _, C, p, g = function c(m) {
    var w = l() - i, v = m === !0, E, M, y, T;
    if ((w > e || w < 0) && (r += w - t), i += w, y = i - r, E = y - s, (E > 0 || v) && (T = ++_.frame, C = y - _.time * 1e3, _.time = y = y / 1e3, s += E + (E >= n ? 4 : n - E), M = 1), v || (o = f(c)), M)
      for (p = 0; p < a.length; p++)
        a[p](y, C, T, m);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      g(!0);
    },
    deltaRatio: function(m) {
      return C / (1e3 / (m || 60));
    },
    wake: function() {
      S1 && (!dt && St() && (be = dt = window, Lt = be.document || {}, xe.gsap = he, (be.gsapVersions || (be.gsapVersions = [])).push(he.version), L1(B9 || be.GreenSockGlobals || !be.gsap && be || {}), $1.forEach(G1)), u = typeof requestAnimationFrame < "u" && requestAnimationFrame, o && _.sleep(), f = u || function(m) {
        return setTimeout(m, s - _.time * 1e3 + 1 | 0);
      }, P9 = 1, g(2));
    },
    sleep: function() {
      (u ? cancelAnimationFrame : clearTimeout)(o), P9 = 0, f = O9;
    },
    lagSmoothing: function(m, w) {
      e = m || 1 / 0, t = Math.min(w || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), s = _.time * 1e3 + n;
    },
    add: function(m, w, v) {
      var E = w ? function(M, y, T, k) {
        m(M, y, T, k), _.remove(E);
      } : m;
      return _.remove(m), a[v ? "unshift" : "push"](E), g9(), E;
    },
    remove: function(m, w) {
      ~(w = a.indexOf(m)) && a.splice(w, 1) && p >= w && p--;
    },
    _listeners: a
  }, _;
}(), g9 = function() {
  return !P9 && pe.wake();
}, P = {}, er = /^[\d.\-M][\d.\-,\s]/, tr = /["']/g, rr = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, o, f; n < s; n++)
    o = r[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, f = o.substr(0, a), t[i] = isNaN(f) ? f.replace(tr, "").trim() : +f, i = o.substr(a + 1).trim();
  return t;
}, ir = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, nr = function(e) {
  var t = (e + "").split("("), r = P[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [rr(t[1])] : ir(e).split(",").map(R1)) : P._CE && er.test(e) ? P._CE("", e) : r;
}, Q1 = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, K1 = function l(e, t) {
  for (var r = e._first, i; r; )
    r instanceof ae ? l(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? l(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, r9 = function(e, t) {
  return e && (U(e) ? e : P[e] || nr(e)) || t;
}, s9 = function(e, t, r, i) {
  r === void 0 && (r = function(o) {
    return 1 - t(1 - o);
  }), i === void 0 && (i = function(o) {
    return o < 0.5 ? t(o * 2) / 2 : 1 - t((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, s;
  return oe(e, function(a) {
    P[a] = xe[a] = n, P[s = a.toLowerCase()] = r;
    for (var o in n)
      P[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = P[a + "." + o] = n[o];
  }), n;
}, e0 = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, at = function l(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = n / ht * (Math.asin(1 / i) || 0), a = function(u) {
    return u === 1 ? 1 : i * Math.pow(2, -10 * u) * P0((u - s) * n) + 1;
  }, o = e === "out" ? a : e === "in" ? function(f) {
    return 1 - a(1 - f);
  } : e0(a);
  return n = ht / n, o.config = function(f, u) {
    return l(e, f, u);
  }, o;
}, lt = function l(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(n) {
    return 1 - r(1 - n);
  } : e0(r);
  return i.config = function(n) {
    return l(e, n);
  }, i;
};
oe("Linear,Quad,Cubic,Quart,Quint,Strong", function(l, e) {
  var t = e < 5 ? e + 1 : e;
  s9(l + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
P.Linear.easeNone = P.none = P.Linear.easeIn;
s9("Elastic", at("in"), at("out"), at());
(function(l, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, n = function(a) {
    return a < t ? l * a * a : a < r ? l * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? l * (a -= 2.25 / e) * a + 0.9375 : l * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  s9("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
s9("Expo", function(l) {
  return Math.pow(2, 10 * (l - 1)) * l + l * l * l * l * l * l * (1 - l);
});
s9("Circ", function(l) {
  return -(E1(1 - l * l) - 1);
});
s9("Sine", function(l) {
  return l === 1 ? 1 : -Z0(l * L0) + 1;
});
s9("Back", lt("in"), lt("out"), lt());
P.SteppedEase = P.steps = xe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, s = 1 - re;
    return function(a) {
      return ((i * V9(0, s, a) | 0) + n) * r;
    };
  }
};
_9.ease = P["quad.out"];
oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(l) {
  return Pt += l + "," + l + "Params,";
});
var t0 = function(e, t) {
  this.id = O0++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : P1, this.set = t ? t.getSetter : jt;
}, N9 = /* @__PURE__ */ function() {
  function l(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, m9(this, +t.duration, 1, 1), this.data = t.data, z && (this._ctx = z, z.data.push(this)), P9 || pe.wake();
  }
  var e = l.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, m9(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (g9(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (K9(this, r), !n._dp || n.parent || j1(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Te(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === re || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), N1(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + s1(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + s1(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? p9(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -1e-8 ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? U9(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -1e-8 ? 0 : this._rts, this.totalTime(V9(-Math.abs(this._delay), this._tDur, n), i !== !1), Q9(this), F0(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (g9(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== re && (this._tTime -= re)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Te(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (le(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? U9(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = A0);
    var i = K;
    return K = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), K = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, a1(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, a1(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(ye(this, r), le(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, le(i)), this._dur || (this._zTime = -1e-8), this;
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -1e-8 : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -1e-8, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - re);
  }, e.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = U(r) ? r : A1, a = function() {
        var f = i.then;
        i.then = null, U(s) && (s = s(i)) && (s.then || s === i) && (i.then = f), n(s), i.then = f;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    M9(this);
  }, l;
}();
we(N9.prototype, {
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
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ae = /* @__PURE__ */ function(l) {
  y1(e, l);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = l.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = le(r.sortChildren), I && Te(r.parent || I, Ae(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && D1(Ae(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, s) {
    return k9(0, arguments, this), this;
  }, t.from = function(i, n, s) {
    return k9(1, arguments, this), this;
  }, t.fromTo = function(i, n, s, a) {
    return k9(2, arguments, this), this;
  }, t.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, T9(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new q(i, n, ye(this, s), 1), this;
  }, t.call = function(i, n, s) {
    return Te(this, q.delayedCall(0, i, n), s);
  }, t.staggerTo = function(i, n, s, a, o, f, u) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = f, s.onCompleteParams = u, s.parent = this, new q(i, s, ye(this, o)), this;
  }, t.staggerFrom = function(i, n, s, a, o, f, u) {
    return s.runBackwards = 1, T9(s).immediateRender = le(s.immediateRender), this.staggerTo(i, n, s, a, o, f, u);
  }, t.staggerFromTo = function(i, n, s, a, o, f, u, _) {
    return a.startAt = s, T9(a).immediateRender = le(a.immediateRender), this.staggerTo(i, n, a, o, f, u, _);
  }, t.render = function(i, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, u = i <= 0 ? 0 : J(i), _ = this._zTime < 0 != i < 0 && (this._initted || !f), C, p, g, c, m, w, v, E, M, y, T, k;
    if (this !== I && u > o && i >= 0 && (u = o), u !== this._tTime || s || _) {
      if (a !== this._time && f && (u += this._time - a, i += this._time - a), C = u, M = this._start, E = this._ts, w = !E, _ && (f || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (T = this._yoyo, m = f + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, s);
        if (C = J(u % m), u === o ? (c = this._repeat, C = f) : (y = J(u / m), c = ~~y, c && c === y && (C = f, c--), C > f && (C = f)), y = p9(this._tTime, m), !a && this._tTime && y !== c && this._tTime - y * m - this._dur <= 0 && (y = c), T && c & 1 && (C = f - C, k = 1), c !== y && !this._lock) {
          var S = T && y & 1, b = S === (T && c & 1);
          if (c < y && (S = !S), a = S ? 0 : u % f ? f : u, this._lock = 1, this.render(a || (k ? 0 : J(c * m)), n, !f)._lock = 0, this._tTime = u, !n && this.parent && me(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (f = this._dur, o = this._tDur, b && (this._lock = 2, a = S ? f : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !w)
            return this;
          K1(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (v = B0(this, J(a), J(C)), v && (u -= C - (C = v._start))), this._tTime = u, this._time = C, this._act = !E, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && C && !n && !c && (me(this, "onStart"), this._tTime !== u))
        return this;
      if (C >= a && i >= 0)
        for (p = this._first; p; ) {
          if (g = p._next, (p._act || C >= p._start) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (C - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (C - p._start) * p._ts, n, s), C !== this._time || !this._ts && !w) {
              v = 0, g && (u += this._zTime = -1e-8);
              break;
            }
          }
          p = g;
        }
      else {
        p = this._last;
        for (var N = i < 0 ? i : C; p; ) {
          if (g = p._prev, (p._act || N <= p._end) && p._ts && v !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (N - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (N - p._start) * p._ts, n, s || K && (p._initted || p._startAt)), C !== this._time || !this._ts && !w) {
              v = 0, g && (u += this._zTime = N ? -1e-8 : re);
              break;
            }
          }
          p = g;
        }
      }
      if (v && !n && (this.pause(), v.render(C >= a ? 0 : -1e-8)._zTime = C >= a ? 1 : -1, this._ts))
        return this._start = M, Q9(this), this.render(i, n, s);
      this._onUpdate && !n && me(this, "onUpdate", !0), (u === o && this._tTime >= this.totalDuration() || !u && a) && (M === this._start || Math.abs(E) !== Math.abs(this._ts)) && (this._lock || ((i || !f) && (u === o && this._ts > 0 || !u && this._ts < 0) && Ue(this, 1), !n && !(i < 0 && !a) && (u || a || !o) && (me(this, u === o && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(u < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var s = this;
    if (je(n) || (n = ye(this, n, i)), !(i instanceof N9)) {
      if (ie(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (Q(i))
        return this.addLabel(i, n);
      if (U(i))
        i = q.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Te(this, i, n) : this;
  }, t.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -1e8);
    for (var o = [], f = this._first; f; )
      f._start >= a && (f instanceof q ? n && o.push(f) : (s && o.push(f), i && o.push.apply(o, f.getChildren(!0, n, s)))), f = f._next;
    return o;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, t.remove = function(i) {
    return Q(i) ? this.removeLabel(i) : U(i) ? this.killTweensOf(i) : (i.parent === this && J9(this, i), i === this._recent && (this._recent = this._last), t9(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = J(pe.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), l.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = ye(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, s) {
    var a = q.delayedCall(0, n || O9, s);
    return a.data = "isPause", this._hasPause = 1, Te(this, a, ye(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = ye(this, i); n; )
      n._start === i && n.data === "isPause" && Ue(n), n = n._next;
  }, t.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), o = a.length; o--; )
      We !== a[o] && a[o].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var s = [], a = Ee(i), o = this._first, f = je(n), u; o; )
      o instanceof q ? V0(o._targets, a) && (f ? (!We || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (u = o.getTweensOf(a, n)).length && s.push.apply(s, u), o = o._next;
    return s;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = ye(s, i), o = n, f = o.startAt, u = o.onStart, _ = o.onStartParams, C = o.immediateRender, p, g = q.to(s, we({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale()) || re,
      onStart: function() {
        if (s.pause(), !p) {
          var m = n.duration || Math.abs((a - (f && "time" in f ? f.time : s._time)) / s.timeScale());
          g._dur !== m && m9(g, m, 0, 1).render(g._time, !0, !0), p = 1;
        }
        u && u.apply(g, _ || []);
      }
    }, n));
    return C ? g.render(0) : g;
  }, t.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, we({
      startAt: {
        time: ye(this, i)
      }
    }, s));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), l1(this, ye(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), l1(this, ye(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + re);
  }, t.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o = this.labels, f; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (f in o)
        o[f] >= s && (o[f] += i);
    return t9(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return l.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), t9(this);
  }, t.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, o = Se, f, u, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        f = a._prev, a._dirty && a.totalDuration(), u = a._start, u > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Te(s, a, u - a._delay, 1)._lock = 0) : o = u, u < 0 && a._ts && (n -= u, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += u / s._ts, s._time -= u, s._tTime -= u), s.shiftChildren(-u, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = f;
      m9(s, s === I && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (I._ts && (N1(I, U9(i, I)), Z1 = pe.frame), pe.frame >= i1) {
      i1 += ge.autoSleep || 120;
      var n = I._first;
      if ((!n || !n._ts) && ge.autoSleep && pe._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || pe.sleep();
      }
    }
  }, e;
}(N9);
we(ae.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var sr = function(e, t, r, i, n, s, a) {
  var o = new fe(this._pt, e, t, 0, 1, l0, null, n), f = 0, u = 0, _, C, p, g, c, m, w, v;
  for (o.b = r, o.e = i, r += "", i += "", (w = ~i.indexOf("random(")) && (i = Z9(i)), s && (v = [r, i], s(v, e, t), r = v[0], i = v[1]), C = r.match(it) || []; _ = it.exec(i); )
    g = _[0], c = i.substring(f, _.index), p ? p = (p + 1) % 5 : c.substr(-5) === "rgba(" && (p = 1), g !== C[u++] && (m = parseFloat(C[u - 1]) || 0, o._pt = {
      _next: o._pt,
      p: c || u === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: g.charAt(1) === "=" ? h9(m, g) - m : parseFloat(g) - m,
      m: p && p < 4 ? Math.round : 0
    }, f = it.lastIndex);
  return o.c = f < i.length ? i.substring(f, i.length) : "", o.fp = a, (T1.test(i) || w) && (o.e = 0), this._pt = o, o;
}, Rt = function(e, t, r, i, n, s, a, o, f, u) {
  U(i) && (i = i(n || 0, e, s));
  var _ = e[t], C = r !== "get" ? r : U(_) ? f ? e[t.indexOf("set") || !U(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](f) : e[t]() : _, p = U(_) ? f ? ur : s0 : Vt, g;
  if (Q(i) && (~i.indexOf("random(") && (i = Z9(i)), i.charAt(1) === "=" && (g = h9(C, i) + (te(C) || 0), (g || g === 0) && (i = g))), !u || C !== i || wt)
    return !isNaN(C * i) && i !== "" ? (g = new fe(this._pt, e, t, +C || 0, i - (C || 0), typeof _ == "boolean" ? cr : a0, 0, p), f && (g.fp = f), a && g.modifier(a, this, e), this._pt = g) : (!_ && !(t in e) && Ot(t, i), sr.call(this, e, t, C, i, p, o || ge.stringFilter, f));
}, ar = function(e, t, r, i, n) {
  if (U(e) && (e = S9(e, n, t, r, i)), !Oe(e) || e.style && e.nodeType || ie(e) || M1(e))
    return Q(e) ? S9(e, n, t, r, i) : e;
  var s = {}, a;
  for (a in e)
    s[a] = S9(e[a], n, t, r, i);
  return s;
}, r0 = function(e, t, r, i, n, s) {
  var a, o, f, u;
  if (Ce[e] && (a = new Ce[e]()).init(n, a.rawVars ? t[e] : ar(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = o = new fe(r._pt, n, e, 0, 1, a.render, a, 0, a.priority), r !== u9))
    for (f = r._ptLookup[r._targets.indexOf(n)], u = a._props.length; u--; )
      f[a._props[u]] = o;
  return a;
}, We, wt, At = function l(e, t, r) {
  var i = e.vars, n = i.ease, s = i.startAt, a = i.immediateRender, o = i.lazy, f = i.onUpdate, u = i.runBackwards, _ = i.yoyoEase, C = i.keyframes, p = i.autoRevert, g = e._dur, c = e._startAt, m = e._targets, w = e.parent, v = w && w.data === "nested" ? w.vars.targets : m, E = e._overwrite === "auto" && !Tt, M = e.timeline, y, T, k, S, b, N, j, A, V, $, H, Y, G;
  if (M && (!C || !n) && (n = "none"), e._ease = r9(n, _9.ease), e._yEase = _ ? Q1(r9(_ === !0 ? n : _, _9.ease)) : 0, _ && e._yoyo && !e._repeat && (_ = e._yEase, e._yEase = e._ease, e._ease = _), e._from = !M && !!i.runBackwards, !M || C && !i.stagger) {
    if (A = m[0] ? e9(m[0]).harness : 0, Y = A && i[A.prop], y = Y9(i, Zt), c && (c._zTime < 0 && c.progress(1), t < 0 && u && a && !p ? c.render(-1, !0) : c.revert(u && g ? z9 : R0), c._lazy = 0), s) {
      if (Ue(e._startAt = q.set(m, we({
        data: "isStart",
        overwrite: !1,
        parent: w,
        immediateRender: !0,
        lazy: !c && le(o),
        startAt: null,
        delay: 0,
        onUpdate: f && function() {
          return me(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (K || !a && !p) && e._startAt.revert(z9), a && g && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (u && g && !c) {
      if (t && (a = !1), k = we({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !c && le(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: w
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, y), Y && (k[A.prop] = Y), Ue(e._startAt = q.set(m, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (K ? e._startAt.revert(z9) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        l(e._startAt, re, re);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, o = g && le(o) || o && !g, T = 0; T < m.length; T++) {
      if (b = m[T], j = b._gsap || Nt(m)[T]._gsap, e._ptLookup[T] = $ = {}, _t[j.id] && He.length && H9(), H = v === m ? T : v.indexOf(b), A && (V = new A()).init(b, Y || y, e, H, v) !== !1 && (e._pt = S = new fe(e._pt, b, V.name, 0, 1, V.render, V, 0, V.priority), V._props.forEach(function(ce) {
        $[ce] = S;
      }), V.priority && (N = 1)), !A || Y)
        for (k in y)
          Ce[k] && (V = r0(k, y, e, H, b, v)) ? V.priority && (N = 1) : $[k] = S = Rt.call(e, b, k, "get", y[k], H, v, 0, i.stringFilter);
      e._op && e._op[T] && e.kill(b, e._op[T]), E && e._pt && (We = e, I.killTweensOf(b, $, e.globalTime(t)), G = !e.parent, We = 0), e._pt && o && (_t[j.id] = 1);
    }
    N && o0(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = f, e._initted = (!e._op || e._pt) && !G, C && t <= 0 && M.render(Se, !0, !0);
}, lr = function(e, t, r, i, n, s, a, o) {
  var f = (e._pt && e._ptCache || (e._ptCache = {}))[t], u, _, C, p;
  if (!f)
    for (f = e._ptCache[t] = [], C = e._ptLookup, p = e._targets.length; p--; ) {
      if (u = C[p][t], u && u.d && u.d._pt)
        for (u = u.d._pt; u && u.p !== t && u.fp !== t; )
          u = u._next;
      if (!u)
        return wt = 1, e.vars[t] = "+=0", At(e, a), wt = 0, o ? L9(t + " not eligible for reset") : 1;
      f.push(u);
    }
  for (p = f.length; p--; )
    _ = f[p], u = _._pt || _, u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + s * u.c, u.c = r - u.s, _.e && (_.e = X(r) + te(_.e)), _.b && (_.b = u.s + te(_.b));
}, or = function(e, t) {
  var r = e[0] ? e9(e[0]).harness : 0, i = r && r.aliases, n, s, a, o;
  if (!i)
    return t;
  n = C9({}, t);
  for (s in i)
    if (s in n)
      for (o = i[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, fr = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", s, a;
  if (ie(t))
    a = r[e] || (r[e] = []), t.forEach(function(o, f) {
      return a.push({
        t: f / (t.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in t)
      a = r[s] || (r[s] = []), s === "ease" || a.push({
        t: parseFloat(e),
        v: t[s],
        e: n
      });
}, S9 = function(e, t, r, i, n) {
  return U(e) ? e.call(t, r, i, n) : Q(e) && ~e.indexOf("random(") ? Z9(e) : e;
}, i0 = Pt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", n0 = {};
oe(i0 + ",id,stagger,delay,duration,paused,scrollTrigger", function(l) {
  return n0[l] = 1;
});
var q = /* @__PURE__ */ function(l) {
  y1(e, l);
  function e(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = l.call(this, s ? i : T9(i)) || this;
    var o = a.vars, f = o.duration, u = o.delay, _ = o.immediateRender, C = o.stagger, p = o.overwrite, g = o.keyframes, c = o.defaults, m = o.scrollTrigger, w = o.yoyoEase, v = i.parent || I, E = (ie(r) || M1(r) ? je(r[0]) : "length" in i) ? [r] : Ee(r), M, y, T, k, S, b, N, j;
    if (a._targets = E.length ? Nt(E) : L9("GSAP target " + r + " not found. https://gsap.com", !ge.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, g || C || F9(f) || F9(u)) {
      if (i = a.vars, M = a.timeline = new ae({
        data: "nested",
        defaults: c || {},
        targets: v && v.data === "nested" ? v.vars.targets : E
      }), M.kill(), M.parent = M._dp = Ae(a), M._start = 0, C || F9(f) || F9(u)) {
        if (k = E.length, N = C && I1(C), Oe(C))
          for (S in C)
            ~i0.indexOf(S) && (j || (j = {}), j[S] = C[S]);
        for (y = 0; y < k; y++)
          T = Y9(i, n0), T.stagger = 0, w && (T.yoyoEase = w), j && C9(T, j), b = E[y], T.duration = +S9(f, Ae(a), y, b, E), T.delay = (+S9(u, Ae(a), y, b, E) || 0) - a._delay, !C && k === 1 && T.delay && (a._delay = u = T.delay, a._start += u, T.delay = 0), M.to(b, T, N ? N(y, b, E) : 0), M._ease = P.none;
        M.duration() ? f = u = 0 : a.timeline = 0;
      } else if (g) {
        T9(we(M.vars.defaults, {
          ease: "none"
        })), M._ease = r9(g.ease || i.ease || "none");
        var A = 0, V, $, H;
        if (ie(g))
          g.forEach(function(Y) {
            return M.to(E, Y, ">");
          }), M.duration();
        else {
          T = {};
          for (S in g)
            S === "ease" || S === "easeEach" || fr(S, g[S], T, g.easeEach);
          for (S in T)
            for (V = T[S].sort(function(Y, G) {
              return Y.t - G.t;
            }), A = 0, y = 0; y < V.length; y++)
              $ = V[y], H = {
                ease: $.e,
                duration: ($.t - (y ? V[y - 1].t : 0)) / 100 * f
              }, H[S] = $.v, M.to(E, H, A), A += H.duration;
          M.duration() < f && M.to({}, {
            duration: f - M.duration()
          });
        }
      }
      f || a.duration(f = M.duration());
    } else
      a.timeline = 0;
    return p === !0 && !Tt && (We = Ae(a), I.killTweensOf(E), We = 0), Te(v, Ae(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !f && !g && a._start === J(v._time) && le(_) && z0(Ae(a)) && v.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -u) || 0)), m && D1(Ae(a), m), a;
  }
  var t = e.prototype;
  return t.render = function(i, n, s) {
    var a = this._time, o = this._tDur, f = this._dur, u = i < 0, _ = i > o - re && !u ? o : i < re ? 0 : i, C, p, g, c, m, w, v, E, M;
    if (!f)
      I0(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== u || this._lazy) {
      if (C = _, E = this.timeline, this._repeat) {
        if (c = f + this._rDelay, this._repeat < -1 && u)
          return this.totalTime(c * 100 + i, n, s);
        if (C = J(_ % c), _ === o ? (g = this._repeat, C = f) : (m = J(_ / c), g = ~~m, g && g === m ? (C = f, g--) : C > f && (C = f)), w = this._yoyo && g & 1, w && (M = this._yEase, C = f - C), m = p9(this._tTime, c), C === a && !s && this._initted && g === m)
          return this._tTime = _, this;
        g !== m && (E && this._yEase && K1(E, w), this.vars.repeatRefresh && !w && !this._lock && C !== c && this._initted && (this._lock = s = 1, this.render(J(c * g), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (F1(this, u ? i : C, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && g !== m))
          return this;
        if (f !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = C, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = v = (M || this._ease)(C / f), this._from && (this.ratio = v = 1 - v), C && !a && !n && !g && (me(this, "onStart"), this._tTime !== _))
        return this;
      for (p = this._pt; p; )
        p.r(v, p.d), p = p._next;
      E && E.render(i < 0 ? i : E._dur * E._ease(C / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (u && Ct(this, i, n, s), me(this, "onUpdate")), this._repeat && g !== m && this.vars.onRepeat && !n && this.parent && me(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (u && !this._onUpdate && Ct(this, i, !0, !0), (i || !f) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Ue(this, 1), !n && !(u && !a) && (_ || a || w) && (me(this, _ === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), l.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, s, a, o) {
    P9 || pe.wake(), this._ts || this.play();
    var f = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
    return this._initted || At(this, f), u = this._ease(f / this._dur), lr(this, i, n, s, a, u, f, o) ? this.resetTo(i, n, s, a, 1) : (K9(this, 0), this.parent || V1(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? M9(this) : this.scrollTrigger && this.scrollTrigger.kill(!!K), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, We && We.vars.overwrite !== !0)._first || M9(this), this.parent && s !== this.timeline.totalDuration() && m9(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = i ? Ee(i) : a, f = this._ptLookup, u = this._pt, _, C, p, g, c, m, w;
    if ((!n || n === "all") && D0(a, o))
      return n === "all" && (this._pt = 0), M9(this);
    for (_ = this._op = this._op || [], n !== "all" && (Q(n) && (c = {}, oe(n, function(v) {
      return c[v] = 1;
    }), n = c), n = or(a, n)), w = a.length; w--; )
      if (~o.indexOf(a[w])) {
        C = f[w], n === "all" ? (_[w] = n, g = C, p = {}) : (p = _[w] = _[w] || {}, g = n);
        for (c in g)
          m = C && C[c], m && ((!("kill" in m.d) || m.d.kill(c) === !0) && J9(this, m, "_pt"), delete C[c]), p !== "all" && (p[c] = 1);
      }
    return this._initted && !this._pt && u && M9(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return k9(1, arguments);
  }, e.delayedCall = function(i, n, s, a) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: s,
      onReverseCompleteParams: s,
      callbackScope: a
    });
  }, e.fromTo = function(i, n, s) {
    return k9(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, s) {
    return I.killTweensOf(i, n, s);
  }, e;
}(N9);
we(q.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
oe("staggerTo,staggerFrom,staggerFromTo", function(l) {
  q[l] = function() {
    var e = new ae(), t = mt.call(arguments, 0);
    return t.splice(l === "staggerFromTo" ? 5 : 4, 0, 0), e[l].apply(e, t);
  };
});
var Vt = function(e, t, r) {
  return e[t] = r;
}, s0 = function(e, t, r) {
  return e[t](r);
}, ur = function(e, t, r, i) {
  return e[t](i.fp, r);
}, hr = function(e, t, r) {
  return e.setAttribute(t, r);
}, jt = function(e, t) {
  return U(e[t]) ? s0 : kt(e[t]) && e.setAttribute ? hr : Vt;
}, a0 = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, cr = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, l0 = function(e, t) {
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
}, Dt = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, dr = function(e, t, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, t, r), n = s;
}, _r = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? J9(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, Cr = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, o0 = function(e) {
  for (var t = e._pt, r, i, n, s; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : s) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : s = t, t = r;
  }
  e._pt = n;
}, fe = /* @__PURE__ */ function() {
  function l(t, r, i, n, s, a, o, f, u) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || a0, this.d = o || this, this.set = f || Vt, this.pr = u || 0, this._next = t, t && (t._prev = this);
  }
  var e = l.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = Cr, this.m = r, this.mt = n, this.tween = i;
  }, l;
}();
oe(Pt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(l) {
  return Zt[l] = 1;
});
xe.TweenMax = xe.TweenLite = q;
xe.TimelineLite = xe.TimelineMax = ae;
I = new ae({
  sortChildren: !1,
  defaults: _9,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ge.stringFilter = J1;
var i9 = [], I9 = {}, pr = [], f1 = 0, mr = 0, ot = function(e) {
  return (I9[e] || pr).map(function(t) {
    return t();
  });
}, vt = function() {
  var e = Date.now(), t = [];
  e - f1 > 2 && (ot("matchMediaInit"), i9.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, o, f;
    for (a in i)
      s = be.matchMedia(i[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, f = 1);
    f && (r.revert(), o && t.push(r));
  }), ot("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), f1 = e, ot("matchMedia"));
}, f0 = /* @__PURE__ */ function() {
  function l(t, r) {
    this.selector = r && gt(r), this.data = [], this._r = [], this.isReverted = !1, this.id = mr++, t && this.add(t);
  }
  var e = l.prototype;
  return e.add = function(r, i, n) {
    U(r) && (n = i, i = r, r = U);
    var s = this, a = function() {
      var f = z, u = s.selector, _;
      return f && f !== s && f.data.push(s), n && (s.selector = gt(n)), z = s, _ = i.apply(s, arguments), U(_) && s._r.push(_), z = f, s.selector = u, s.isReverted = !1, _;
    };
    return s.last = a, r === U ? a(s, function(o) {
      return s.add(null, o);
    }) : r ? s[r] = a : a;
  }, e.ignore = function(r) {
    var i = z;
    z = null, r(this), z = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof l ? r.push.apply(r, i.getTweens()) : i instanceof q && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var a = n.getTweens(), o = n.data.length, f; o--; )
        f = n.data[o], f.data === "isFlip" && (f.revert(), f.getChildren(!0, !0, !1).forEach(function(u) {
          return a.splice(a.indexOf(u), 1);
        }));
      for (a.map(function(u) {
        return {
          g: u._dur || u._delay || u._sat && !u._sat.vars.immediateRender ? u.globalTime(0) : -1 / 0,
          t: u
        };
      }).sort(function(u, _) {
        return _.g - u.g || -1 / 0;
      }).forEach(function(u) {
        return u.t.revert(r);
      }), o = n.data.length; o--; )
        f = n.data[o], f instanceof ae ? f.data !== "nested" && (f.scrollTrigger && f.scrollTrigger.revert(), f.kill()) : !(f instanceof q) && f.revert && f.revert(r);
      n._r.forEach(function(u) {
        return u(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var s = i9.length; s--; )
        i9[s].id === this.id && i9.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, l;
}(), gr = /* @__PURE__ */ function() {
  function l(t) {
    this.contexts = [], this.scope = t, z && z.data.push(this);
  }
  var e = l.prototype;
  return e.add = function(r, i, n) {
    Oe(r) || (r = {
      matches: r
    });
    var s = new f0(0, n || this.scope), a = s.conditions = {}, o, f, u;
    z && !s.selector && (s.selector = z.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (f in r)
      f === "all" ? u = 1 : (o = be.matchMedia(r[f]), o && (i9.indexOf(s) < 0 && i9.push(s), (a[f] = o.matches) && (u = 1), o.addListener ? o.addListener(vt) : o.addEventListener("change", vt)));
    return u && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, l;
}(), $9 = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return G1(i);
    });
  },
  timeline: function(e) {
    return new ae(e);
  },
  getTweensOf: function(e, t) {
    return I.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    Q(e) && (e = Ee(e)[0]);
    var n = e9(e || {}).get, s = r ? A1 : R1;
    return r === "native" && (r = ""), e && (t ? s((Ce[t] && Ce[t].get || n)(e, t, r, i)) : function(a, o, f) {
      return s((Ce[a] && Ce[a].get || n)(e, a, o, f));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ee(e), e.length > 1) {
      var i = e.map(function(u) {
        return he.quickSetter(u, t, r);
      }), n = i.length;
      return function(u) {
        for (var _ = n; _--; )
          i[_](u);
      };
    }
    e = e[0] || {};
    var s = Ce[t], a = e9(e), o = a.harness && (a.harness.aliases || {})[t] || t, f = s ? function(u) {
      var _ = new s();
      u9._pt = 0, _.init(e, r ? u + r : u, u9, 0, [e]), _.render(1, _), u9._pt && Dt(1, u9);
    } : a.set(e, o);
    return s ? f : function(u) {
      return f(e, o, r ? u + r : u, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = he.to(e, we((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), s = function(o, f, u) {
      return n.resetTo(t, o, f, u);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return I.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = r9(e.ease, _9.ease)), n1(_9, e || {});
  },
  config: function(e) {
    return n1(ge, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !Ce[a] && !xe[a] && L9(t + " effect requires " + a + " plugin.");
    }), nt[t] = function(a, o, f) {
      return r(Ee(a), we(o || {}, n), f);
    }, s && (ae.prototype[t] = function(a, o, f) {
      return this.add(nt[t](a, Oe(o) ? o : (f = o) && {}, this), f);
    });
  },
  registerEase: function(e, t) {
    P[e] = r9(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? r9(e, t) : P;
  },
  getById: function(e) {
    return I.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new ae(e), i, n;
    for (r.smoothChildTiming = le(e.smoothChildTiming), I.remove(r), r._dp = 0, r._time = r._tTime = I._time, i = I._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof q && i.vars.onComplete === i._targets[0])) && Te(r, i, i._start - i._delay), i = n;
    return Te(I, r, 0), r;
  },
  context: function(e, t) {
    return e ? new f0(e, t) : z;
  },
  matchMedia: function(e) {
    return new gr(e);
  },
  matchMediaRefresh: function() {
    return i9.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || vt();
  },
  addEventListener: function(e, t) {
    var r = I9[e] || (I9[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = I9[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: q0,
    wrapYoyo: J0,
    distribute: I1,
    random: H1,
    snap: B1,
    normalize: X0,
    getUnit: te,
    clamp: Y0,
    splitColor: X1,
    toArray: Ee,
    selector: gt,
    mapRange: U1,
    pipe: $0,
    unitize: G0,
    interpolate: Q0,
    shuffle: W1
  },
  install: L1,
  effects: nt,
  ticker: pe,
  updateRoot: ae.updateRoot,
  plugins: Ce,
  globalTimeline: I,
  core: {
    PropTween: fe,
    globals: O1,
    Tween: q,
    Timeline: ae,
    Animation: N9,
    getCache: e9,
    _removeLinkedListItem: J9,
    reverting: function() {
      return K;
    },
    context: function(e) {
      return e && z && (z.data.push(e), e._ctx = z), z;
    },
    suppressOverwrites: function(e) {
      return Tt = e;
    }
  }
};
oe("to,from,fromTo,delayedCall,set,killTweensOf", function(l) {
  return $9[l] = q[l];
});
pe.add(ae.updateRoot);
u9 = $9.to({}, {
  duration: 0
});
var xr = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, wr = function(e, t) {
  var r = e._targets, i, n, s;
  for (i in t)
    for (n = r.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = xr(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i));
}, ft = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var o, f;
        if (Q(n) && (o = {}, oe(n, function(u) {
          return o[u] = 1;
        }), n = o), t) {
          o = {};
          for (f in n)
            o[f] = t(n[f]);
          n = o;
        }
        wr(a, n);
      };
    }
  };
}, he = $9.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var s, a, o;
    this.tween = r;
    for (s in t)
      o = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (o || 0) + "", t[s], i, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      K ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, ft("roundProps", xt), ft("modifiers"), ft("snap", B1)) || $9;
q.version = ae.version = he.version = "3.12.7";
S1 = 1;
St() && g9();
P.Power0;
P.Power1;
P.Power2;
P.Power3;
P.Power4;
P.Linear;
P.Quad;
P.Cubic;
P.Quart;
P.Quint;
P.Strong;
P.Elastic;
P.Back;
P.SteppedEase;
P.Bounce;
P.Sine;
P.Expo;
P.Circ;
/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var u1, Ie, c9, Ft, Ke, h1, zt, vr = function() {
  return typeof window < "u";
}, De = {}, Qe = 180 / Math.PI, d9 = Math.PI / 180, o9 = Math.atan2, c1 = 1e8, Wt = /([A-Z])/g, yr = /(left|right|width|margin|padding|x)/i, Er = /[\s,\(]\S/, ke = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, yt = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Mr = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, br = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Tr = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, u0 = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, h0 = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, kr = function(e, t, r) {
  return e.style[t] = r;
}, Sr = function(e, t, r) {
  return e.style.setProperty(t, r);
}, Lr = function(e, t, r) {
  return e._gsap[t] = r;
}, Or = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Zr = function(e, t, r, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Pr = function(e, t, r, i, n) {
  var s = e._gsap;
  s[t] = r, s.renderTransform(n, s);
}, B = "transform", ue = B + "Origin", Nr = function l(e, t) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (e in De && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = ke[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = Ve(i, a);
      }) : this.tfm[e] = s.x ? s[e] : Ve(i, e), e === ue && (this.tfm.zOrigin = s.zOrigin);
    else
      return ke.transform.split(",").forEach(function(a) {
        return l.call(r, a, t);
      });
    if (this.props.indexOf(B) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ue, t, "")), e = B;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, c0 = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Rr = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, n, s;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Wt, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = zt(), (!n || !n.isStart) && !r[B] && (c0(r), i.zOrigin && r[ue] && (r[ue] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, d0 = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: Rr,
    save: Nr
  };
  return e._gsap || he.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, _0, Et = function(e, t) {
  var r = Ie.createElementNS ? Ie.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ie.createElement(e);
  return r && r.style ? r : Ie.createElement(e);
}, Le = function l(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Wt, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && l(e, x9(t) || t, 1) || "";
}, d1 = "O,Moz,ms,Ms,Webkit".split(","), x9 = function(e, t, r) {
  var i = t || Ke, n = i.style, s = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(d1[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? d1[s] : "") + e;
}, Mt = function() {
  vr() && window.document && (u1 = window, Ie = u1.document, c9 = Ie.documentElement, Ke = Et("div") || {
    style: {}
  }, Et("div"), B = x9(B), ue = B + "Origin", Ke.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", _0 = !!x9("perspective"), zt = he.core.reverting, Ft = 1);
}, _1 = function(e) {
  var t = e.ownerSVGElement, r = Et("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), c9.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), c9.removeChild(r), n;
}, C1 = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, C0 = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = _1(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = _1(e)), t && !t.width && !t.x && !t.y ? {
    x: +C1(e, ["x", "cx", "x1"]) || 0,
    y: +C1(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, p0 = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && C0(e));
}, n9 = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in De && t !== ue && (t = B), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(Wt, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Be = function(e, t, r, i, n, s) {
  var a = new fe(e._pt, t, r, 0, 1, s ? h0 : u0);
  return e._pt = a, a.b = i, a.e = n, e._props.push(r), a;
}, p1 = {
  deg: 1,
  rad: 1,
  turn: 1
}, Ar = {
  grid: 1,
  flex: 1
}, $e = function l(e, t, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Ke.style, o = yr.test(t), f = e.tagName.toLowerCase() === "svg", u = (f ? "client" : "offset") + (o ? "Width" : "Height"), _ = 100, C = i === "px", p = i === "%", g, c, m, w;
  if (i === s || !n || p1[i] || p1[s])
    return n;
  if (s !== "px" && !C && (n = l(e, t, r, "px")), w = e.getCTM && p0(e), (p || s === "%") && (De[t] || ~t.indexOf("adius")))
    return g = w ? e.getBBox()[o ? "width" : "height"] : e[u], X(p ? n / g * _ : n / 100 * g);
  if (a[o ? "width" : "height"] = _ + (C ? s : i), c = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !f ? e : e.parentNode, w && (c = (e.ownerSVGElement || {}).parentNode), (!c || c === Ie || !c.appendChild) && (c = Ie.body), m = c._gsap, m && p && m.width && o && m.time === pe.time && !m.uncache)
    return X(n / m.width * _);
  if (p && (t === "height" || t === "width")) {
    var v = e.style[t];
    e.style[t] = _ + i, g = e[u], v ? e.style[t] = v : n9(e, t);
  } else
    (p || s === "%") && !Ar[Le(c, "display")] && (a.position = Le(e, "position")), c === e && (a.position = "static"), c.appendChild(Ke), g = Ke[u], c.removeChild(Ke), a.position = "absolute";
  return o && p && (m = e9(c), m.time = pe.time, m.width = c[u]), X(C ? g * n / _ : g && n ? _ / g * n : 0);
}, Ve = function(e, t, r, i) {
  var n;
  return Ft || Mt(), t in ke && t !== "transform" && (t = ke[t], ~t.indexOf(",") && (t = t.split(",")[0])), De[t] && t !== "transform" ? (n = A9(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : X9(Le(e, ue)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = G9[t] && G9[t](e, t, r) || Le(e, t) || P1(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? $e(e, t, n, r) + r : n;
}, Vr = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = x9(t, e, 1), s = n && Le(e, n, 1);
    s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = Le(e, "borderTopColor"));
  }
  var a = new fe(this._pt, e.style, t, 0, 1, l0), o = 0, f = 0, u, _, C, p, g, c, m, w, v, E, M, y;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (c = e.style[t], e.style[t] = i, i = Le(e, t) || i, c ? e.style[t] = c : n9(e, t)), u = [r, i], J1(u), r = u[0], i = u[1], C = r.match(f9) || [], y = i.match(f9) || [], y.length) {
    for (; _ = f9.exec(i); )
      m = _[0], v = i.substring(o, _.index), g ? g = (g + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (g = 1), m !== (c = C[f++] || "") && (p = parseFloat(c) || 0, M = c.substr((p + "").length), m.charAt(1) === "=" && (m = h9(p, m) + M), w = parseFloat(m), E = m.substr((w + "").length), o = f9.lastIndex - E.length, E || (E = E || ge.units[t] || M, o === i.length && (i += E, a.e += E)), M !== E && (p = $e(e, t, c, E) || 0), a._pt = {
        _next: a._pt,
        p: v || f === 1 ? v : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: w - p,
        m: g && g < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = o < i.length ? i.substring(o, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? h0 : u0;
  return T1.test(i) && (a.e = 0), this._pt = a, a;
}, m1 = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, jr = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = m1[r] || r, t[1] = m1[i] || i, t.join(" ");
}, Dr = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, s = r._gsap, a, o, f;
    if (n === "all" || n === !0)
      i.cssText = "", o = 1;
    else
      for (n = n.split(","), f = n.length; --f > -1; )
        a = n[f], De[a] && (o = 1, a = a === "transformOrigin" ? ue : B), n9(r, a);
    o && (n9(r, B), s && (s.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", A9(r, 1), s.uncache = 1, c0(i)));
  }
}, G9 = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new fe(e._pt, t, r, 0, 0, Dr);
      return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1;
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
}, R9 = [1, 0, 0, 1, 0, 0], m0 = {}, g0 = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, g1 = function(e) {
  var t = Le(e, B);
  return g0(t) ? R9 : t.substr(7).match(b1).map(X);
}, It = function(e, t) {
  var r = e._gsap || e9(e), i = e.style, n = g1(e), s, a, o, f;
  return r.svg && e.getAttribute("transform") ? (o = e.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? R9 : n) : (n === R9 && !e.offsetParent && e !== c9 && !r.svg && (o = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (f = 1, a = e.nextElementSibling, c9.appendChild(e)), n = g1(e), o ? i.display = o : n9(e, "display"), f && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : c9.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, bt = function(e, t, r, i, n, s) {
  var a = e._gsap, o = n || It(e, !0), f = a.xOrigin || 0, u = a.yOrigin || 0, _ = a.xOffset || 0, C = a.yOffset || 0, p = o[0], g = o[1], c = o[2], m = o[3], w = o[4], v = o[5], E = t.split(" "), M = parseFloat(E[0]) || 0, y = parseFloat(E[1]) || 0, T, k, S, b;
  r ? o !== R9 && (k = p * m - g * c) && (S = M * (m / k) + y * (-c / k) + (c * v - m * w) / k, b = M * (-g / k) + y * (p / k) - (p * v - g * w) / k, M = S, y = b) : (T = C0(e), M = T.x + (~E[0].indexOf("%") ? M / 100 * T.width : M), y = T.y + (~(E[1] || E[0]).indexOf("%") ? y / 100 * T.height : y)), i || i !== !1 && a.smooth ? (w = M - f, v = y - u, a.xOffset = _ + (w * p + v * c) - w, a.yOffset = C + (w * g + v * m) - v) : a.xOffset = a.yOffset = 0, a.xOrigin = M, a.yOrigin = y, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!r, e.style[ue] = "0px 0px", s && (Be(s, a, "xOrigin", f, M), Be(s, a, "yOrigin", u, y), Be(s, a, "xOffset", _, a.xOffset), Be(s, a, "yOffset", C, a.yOffset)), e.setAttribute("data-svg-origin", M + " " + y);
}, A9 = function(e, t) {
  var r = e._gsap || new t0(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(e), f = Le(e, ue) || "0", u, _, C, p, g, c, m, w, v, E, M, y, T, k, S, b, N, j, A, V, $, H, Y, G, ce, ve, Fe, de, Ze, a9, ne, Me;
  return u = _ = C = c = m = w = v = E = M = 0, p = g = 1, r.svg = !!(e.getCTM && p0(e)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (i[B] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[B] !== "none" ? o[B] : "")), i.scale = i.rotate = i.translate = "none"), k = It(e, r.svg), r.svg && (r.uncache ? (ce = e.getBBox(), f = r.xOrigin - ce.x + "px " + (r.yOrigin - ce.y) + "px", G = "") : G = !t && e.getAttribute("data-svg-origin"), bt(e, G || f, !!G || r.originIsAbsolute, r.smooth !== !1, k)), y = r.xOrigin || 0, T = r.yOrigin || 0, k !== R9 && (j = k[0], A = k[1], V = k[2], $ = k[3], u = H = k[4], _ = Y = k[5], k.length === 6 ? (p = Math.sqrt(j * j + A * A), g = Math.sqrt($ * $ + V * V), c = j || A ? o9(A, j) * Qe : 0, v = V || $ ? o9(V, $) * Qe + c : 0, v && (g *= Math.abs(Math.cos(v * d9))), r.svg && (u -= y - (y * j + T * V), _ -= T - (y * A + T * $))) : (Me = k[6], a9 = k[7], Fe = k[8], de = k[9], Ze = k[10], ne = k[11], u = k[12], _ = k[13], C = k[14], S = o9(Me, Ze), m = S * Qe, S && (b = Math.cos(-S), N = Math.sin(-S), G = H * b + Fe * N, ce = Y * b + de * N, ve = Me * b + Ze * N, Fe = H * -N + Fe * b, de = Y * -N + de * b, Ze = Me * -N + Ze * b, ne = a9 * -N + ne * b, H = G, Y = ce, Me = ve), S = o9(-V, Ze), w = S * Qe, S && (b = Math.cos(-S), N = Math.sin(-S), G = j * b - Fe * N, ce = A * b - de * N, ve = V * b - Ze * N, ne = $ * N + ne * b, j = G, A = ce, V = ve), S = o9(A, j), c = S * Qe, S && (b = Math.cos(S), N = Math.sin(S), G = j * b + A * N, ce = H * b + Y * N, A = A * b - j * N, Y = Y * b - H * N, j = G, H = ce), m && Math.abs(m) + Math.abs(c) > 359.9 && (m = c = 0, w = 180 - w), p = X(Math.sqrt(j * j + A * A + V * V)), g = X(Math.sqrt(Y * Y + Me * Me)), S = o9(H, Y), v = Math.abs(S) > 2e-4 ? S * Qe : 0, M = ne ? 1 / (ne < 0 ? -ne : ne) : 0), r.svg && (G = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !g0(Le(e, B)), G && e.setAttribute("transform", G))), Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (p *= -1, v += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (g *= -1, v += v <= 0 ? 180 : -180)), t = t || r.uncache, r.x = u - ((r.xPercent = u && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = C + s, r.scaleX = X(p), r.scaleY = X(g), r.rotation = X(c) + a, r.rotationX = X(m) + a, r.rotationY = X(w) + a, r.skewX = v + a, r.skewY = E + a, r.transformPerspective = M + s, (r.zOrigin = parseFloat(f.split(" ")[2]) || !t && r.zOrigin || 0) && (i[ue] = X9(f)), r.xOffset = r.yOffset = 0, r.force3D = ge.force3D, r.renderTransform = r.svg ? zr : _0 ? x0 : Fr, r.uncache = 0, r;
}, X9 = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, ut = function(e, t, r) {
  var i = te(t);
  return X(parseFloat(t) + parseFloat($e(e, "x", r + "px", i))) + i;
}, Fr = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, x0(e, t);
}, qe = "0deg", E9 = "0px", Je = ") ", x0 = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.z, f = r.rotation, u = r.rotationY, _ = r.rotationX, C = r.skewX, p = r.skewY, g = r.scaleX, c = r.scaleY, m = r.transformPerspective, w = r.force3D, v = r.target, E = r.zOrigin, M = "", y = w === "auto" && e && e !== 1 || w === !0;
  if (E && (_ !== qe || u !== qe)) {
    var T = parseFloat(u) * d9, k = Math.sin(T), S = Math.cos(T), b;
    T = parseFloat(_) * d9, b = Math.cos(T), s = ut(v, s, k * b * -E), a = ut(v, a, -Math.sin(T) * -E), o = ut(v, o, S * b * -E + E);
  }
  m !== E9 && (M += "perspective(" + m + Je), (i || n) && (M += "translate(" + i + "%, " + n + "%) "), (y || s !== E9 || a !== E9 || o !== E9) && (M += o !== E9 || y ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Je), f !== qe && (M += "rotate(" + f + Je), u !== qe && (M += "rotateY(" + u + Je), _ !== qe && (M += "rotateX(" + _ + Je), (C !== qe || p !== qe) && (M += "skew(" + C + ", " + p + Je), (g !== 1 || c !== 1) && (M += "scale(" + g + ", " + c + Je), v.style[B] = M || "translate(0, 0)";
}, zr = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.rotation, f = r.skewX, u = r.skewY, _ = r.scaleX, C = r.scaleY, p = r.target, g = r.xOrigin, c = r.yOrigin, m = r.xOffset, w = r.yOffset, v = r.forceCSS, E = parseFloat(s), M = parseFloat(a), y, T, k, S, b;
  o = parseFloat(o), f = parseFloat(f), u = parseFloat(u), u && (u = parseFloat(u), f += u, o += u), o || f ? (o *= d9, f *= d9, y = Math.cos(o) * _, T = Math.sin(o) * _, k = Math.sin(o - f) * -C, S = Math.cos(o - f) * C, f && (u *= d9, b = Math.tan(f - u), b = Math.sqrt(1 + b * b), k *= b, S *= b, u && (b = Math.tan(u), b = Math.sqrt(1 + b * b), y *= b, T *= b)), y = X(y), T = X(T), k = X(k), S = X(S)) : (y = _, S = C, T = k = 0), (E && !~(s + "").indexOf("px") || M && !~(a + "").indexOf("px")) && (E = $e(p, "x", s, "px"), M = $e(p, "y", a, "px")), (g || c || m || w) && (E = X(E + g - (g * y + c * k) + m), M = X(M + c - (g * T + c * S) + w)), (i || n) && (b = p.getBBox(), E = X(E + i / 100 * b.width), M = X(M + n / 100 * b.height)), b = "matrix(" + y + "," + T + "," + k + "," + S + "," + E + "," + M + ")", p.setAttribute("transform", b), v && (p.style[B] = b);
}, Wr = function(e, t, r, i, n) {
  var s = 360, a = Q(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? Qe : 1), f = o - i, u = i + f + "deg", _, C;
  return a && (_ = n.split("_")[1], _ === "short" && (f %= s, f !== f % (s / 2) && (f += f < 0 ? s : -360)), _ === "cw" && f < 0 ? f = (f + s * c1) % s - ~~(f / s) * s : _ === "ccw" && f > 0 && (f = (f - s * c1) % s - ~~(f / s) * s)), e._pt = C = new fe(e._pt, t, r, i, f, Mr), C.e = u, C.u = "deg", e._props.push(r), C;
}, x1 = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Ir = function(e, t, r) {
  var i = x1({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, o, f, u, _, C, p, g;
  i.svg ? (f = r.getAttribute("transform"), r.setAttribute("transform", ""), s[B] = t, a = A9(r, 1), n9(r, B), r.setAttribute("transform", f)) : (f = getComputedStyle(r)[B], s[B] = t, a = A9(r, 1), s[B] = f);
  for (o in De)
    f = i[o], u = a[o], f !== u && n.indexOf(o) < 0 && (p = te(f), g = te(u), _ = p !== g ? $e(r, o, f, g) : parseFloat(f), C = parseFloat(u), e._pt = new fe(e._pt, a, o, _, C - _, yt), e._pt.u = g || 0, e._props.push(o));
  x1(a, i);
};
oe("padding,margin,Width,Radius", function(l, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(a) {
    return e < 2 ? l + a : "border" + a + l;
  });
  G9[e > 1 ? "border" + l : l] = function(a, o, f, u, _) {
    var C, p;
    if (arguments.length < 4)
      return C = s.map(function(g) {
        return Ve(a, g, f);
      }), p = C.join(" "), p.split(C[0]).length === 5 ? C[0] : p;
    C = (u + "").split(" "), p = {}, s.forEach(function(g, c) {
      return p[g] = C[c] = C[c] || C[(c - 1) / 2 | 0];
    }), a.init(o, p, _);
  };
});
var w0 = {
  name: "css",
  register: Mt,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var s = this._props, a = e.style, o = r.vars.startAt, f, u, _, C, p, g, c, m, w, v, E, M, y, T, k, S;
    Ft || Mt(), this.styles = this.styles || d0(e), S = this.styles.props, this.tween = r;
    for (c in t)
      if (c !== "autoRound" && (u = t[c], !(Ce[c] && r0(c, t, r, i, e, n)))) {
        if (p = typeof u, g = G9[c], p === "function" && (u = u.call(r, i, e, n), p = typeof u), p === "string" && ~u.indexOf("random(") && (u = Z9(u)), g)
          g(this, e, c, u, r) && (k = 1);
        else if (c.substr(0, 2) === "--")
          f = (getComputedStyle(e).getPropertyValue(c) + "").trim(), u += "", Ye.lastIndex = 0, Ye.test(f) || (m = te(f), w = te(u)), w ? m !== w && (f = $e(e, c, f, w) + w) : m && (u += m), this.add(a, "setProperty", f, u, i, n, 0, 0, c), s.push(c), S.push(c, 0, a[c]);
        else if (p !== "undefined") {
          if (o && c in o ? (f = typeof o[c] == "function" ? o[c].call(r, i, e, n) : o[c], Q(f) && ~f.indexOf("random(") && (f = Z9(f)), te(f + "") || f === "auto" || (f += ge.units[c] || te(Ve(e, c)) || ""), (f + "").charAt(1) === "=" && (f = Ve(e, c))) : f = Ve(e, c), C = parseFloat(f), v = p === "string" && u.charAt(1) === "=" && u.substr(0, 2), v && (u = u.substr(2)), _ = parseFloat(u), c in ke && (c === "autoAlpha" && (C === 1 && Ve(e, "visibility") === "hidden" && _ && (C = 0), S.push("visibility", 0, a.visibility), Be(this, a, "visibility", C ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), c !== "scale" && c !== "transform" && (c = ke[c], ~c.indexOf(",") && (c = c.split(",")[0]))), E = c in De, E) {
            if (this.styles.save(c), M || (y = e._gsap, y.renderTransform && !t.parseTransform || A9(e, t.parseTransform), T = t.smoothOrigin !== !1 && y.smooth, M = this._pt = new fe(this._pt, a, B, 0, 1, y.renderTransform, y, 0, -1), M.dep = 1), c === "scale")
              this._pt = new fe(this._pt, y, "scaleY", y.scaleY, (v ? h9(y.scaleY, v + _) : _) - y.scaleY || 0, yt), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              S.push(ue, 0, a[ue]), u = jr(u), y.svg ? bt(e, u, 0, T, 0, this) : (w = parseFloat(u.split(" ")[2]) || 0, w !== y.zOrigin && Be(this, y, "zOrigin", y.zOrigin, w), Be(this, a, c, X9(f), X9(u)));
              continue;
            } else if (c === "svgOrigin") {
              bt(e, u, 1, T, 0, this);
              continue;
            } else if (c in m0) {
              Wr(this, y, c, C, v ? h9(C, v + u) : u);
              continue;
            } else if (c === "smoothOrigin") {
              Be(this, y, "smooth", y.smooth, u);
              continue;
            } else if (c === "force3D") {
              y[c] = u;
              continue;
            } else if (c === "transform") {
              Ir(this, u, e);
              continue;
            }
          } else c in a || (c = x9(c) || c);
          if (E || (_ || _ === 0) && (C || C === 0) && !Er.test(u) && c in a)
            m = (f + "").substr((C + "").length), _ || (_ = 0), w = te(u) || (c in ge.units ? ge.units[c] : m), m !== w && (C = $e(e, c, f, w)), this._pt = new fe(this._pt, E ? y : a, c, C, (v ? h9(C, v + _) : _) - C, !E && (w === "px" || c === "zIndex") && t.autoRound !== !1 ? Tr : yt), this._pt.u = w || 0, m !== w && w !== "%" && (this._pt.b = f, this._pt.r = br);
          else if (c in a)
            Vr.call(this, e, c, f, v ? v + u : u);
          else if (c in e)
            this.add(e, c, f || e[c], v ? v + u : u, i, n);
          else if (c !== "parseTransform") {
            Ot(c, u);
            continue;
          }
          E || (c in a ? S.push(c, 0, a[c]) : typeof e[c] == "function" ? S.push(c, 2, e[c]()) : S.push(c, 1, f || e[c])), s.push(c);
        }
      }
    k && o0(this);
  },
  render: function(e, t) {
    if (t.tween._time || !zt())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: Ve,
  aliases: ke,
  getSetter: function(e, t, r) {
    var i = ke[t];
    return i && i.indexOf(",") < 0 && (t = i), t in De && t !== ue && (e._gsap.x || Ve(e, "x")) ? r && h1 === r ? t === "scale" ? Or : Lr : (h1 = r || {}) && (t === "scale" ? Zr : Pr) : e.style && !kt(e.style[t]) ? kr : ~t.indexOf("-") ? Sr : jt(e, t);
  },
  core: {
    _removeProperty: n9,
    _getMatrix: It
  }
};
he.utils.checkPrefix = x9;
he.core.getStyleSaver = d0;
(function(l, e, t, r) {
  var i = oe(l + "," + e + "," + t, function(n) {
    De[n] = 1;
  });
  oe(e, function(n) {
    ge.units[n] = "deg", m0[n] = 1;
  }), ke[i[13]] = l + "," + e, oe(r, function(n) {
    var s = n.split(":");
    ke[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(l) {
  ge.units[l] = "px";
});
he.registerPlugin(w0);
var D = he.registerPlugin(w0) || he;
D.core.Tween;
const ti = ({
  width: l,
  height: e,
  onClick: t,
  hideAfterClick: r = !1,
  destroyCallback: i,
  delayedAppearing: n = 0
}) => {
  const s = _e(null), a = _e(null), o = _e(
    D.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), f = _e(
    D.timeline({
      delay: n,
      onComplete: () => {
        var m;
        (m = s.current) != null && m.matches(":hover") && u();
      },
      onReverseComplete: () => {
        r && D.to(a.current, { opacity: 0 }), i && i();
      }
    })
  ), u = () => {
    if (o.current.isActive() || f.current.reversed() || f.current.isActive() || f.current.rawTime() < 0)
      return;
    const m = D.utils.selector(a.current), w = m(".stroke-fng");
    C(w), _(m), o.current.play();
  };
  q9(() => {
    const m = D.utils.selector(a.current), w = m(".stroke-fng");
    f.current.from(m(".corner-left-bot"), {
      x: 20,
      y: -22,
      scale: 0.2,
      duration: 0.1,
      ease: "power2.out"
    }).from(".edge-triangle-left", {
      scale: 0.4,
      x: 20,
      duration: 0.1,
      ease: "power2.out"
    }).from(".corner-left-top", {
      scale: 0.2,
      x: 20,
      y: 26,
      duration: 0.1,
      ease: "power2.out"
    }).from(".edge-triangle-top", {
      scale: 0.2,
      y: 26,
      duration: 0.1,
      ease: "power2.out"
    }).from(".corner-right-top", {
      scale: 0.2,
      x: -19,
      y: 26,
      duration: 0.1,
      ease: "power2.out"
    }).from(".edge-triangle-right", {
      scale: 0.4,
      x: -27,
      duration: 0.1,
      ease: "power2.out"
    }).from(".corner-right-bot", {
      scale: 0.2,
      x: -19,
      y: -22,
      duration: 0.1,
      ease: "power2.out"
    }).from(".edge-triangle-bot", {
      scale: 0.2,
      y: -27.5,
      duration: 0.1,
      ease: "power2.out"
    }).from(w, { scale: 0, duration: 0.5, ease: "power2.out" });
  }, []);
  const _ = (m) => (o.current.clear(), o.current.to(m(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(m(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(m(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(m(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(m(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(m(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(m(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(m(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(m("text"), {
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
  })), C = (m, w = !1) => {
    m.forEach((v) => {
      const E = v.getTotalLength();
      w ? D.to(v, {
        stroke: "currentColor"
      }) : (D.set(v, {
        strokeDasharray: E,
        strokeDashoffset: E,
        stroke: "transparent"
      }), D.to(v, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, p = () => {
    a.current && u();
  }, g = () => {
    if (!a.current || f.current.reversed() || f.current.isActive() || f.current.rawTime() < 0)
      return;
    const m = D.utils.selector(a.current), w = m(".stroke-fng"), v = () => {
      o.current.reverse(), D.killTweensOf(w), C(w, !0), D.killTweensOf(m(".scanner")), D.set(m(".scanner"), { y: 0, opacity: 0 });
    };
    f.current.isActive() ? D.delayedCall(f.current.duration() - f.current.time(), () => {
      v();
    }) : v();
  }, c = (m) => {
    if (f.current.reversed() || f.current.isActive() || f.current.rawTime() < 0)
      return;
    const w = D.utils.selector(a.current);
    r ? (D.killTweensOf(w(".scanner")), o.current.kill(), D.set(w(".scanner"), { y: 0, opacity: 0 }), D.set(w(".text"), { opacity: 0 }), f.current.reverse()) : D.to(a.current, {
      scale: 1.1,
      duration: 0.05,
      repeat: 1,
      yoyo: !0,
      ease: "power1.out"
    }), t && t(m);
  };
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      ref: s,
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: p,
      onMouseLeave: g,
      onClick: c,
      style: { height: e, width: l },
      children: /* @__PURE__ */ x.jsx(S0, { ref: a })
    }
  );
}, Br = ({
  rowsCount: l,
  tilesPerRowCount: e,
  animationActive: t = !1
}) => {
  function r() {
    return Array(l).fill(null).map((i, n) => /* @__PURE__ */ x.jsx("div", { className: "hex-row rotate-method", children: Array(e).fill(null).map((s, a) => /* @__PURE__ */ x.jsx("div", { className: `hex ${t ? "animation-active" : ""}` }, a)) }, n));
  }
  return /* @__PURE__ */ x.jsx("div", { className: "piece rotateMethod", children: r() });
}, Hr = (l) => E0(() => {
  const e = (n, s) => {
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return a[(n + s) % a.length];
  }, t = (n, s) => (n % s).toString(), r = `U-${t(l * 3, 9)}`, i = `${e(l, 20)}${t(l * 7, 99)}`;
  return `${r}${i}`;
}, [l]), Yr = ({ title: l, sciFiCode: e, isActive: t }) => {
  const r = Hr(e);
  return /* @__PURE__ */ x.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ x.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${t ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ x.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ x.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${t ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ x.jsx(
                "div",
                {
                  className: `font-bold w-full ${t ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: l
                }
              ),
              /* @__PURE__ */ x.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ x.jsx(
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
}, ri = ({ options: l, width: e = "w-full" }) => /* @__PURE__ */ x.jsx("div", { className: `flex flex-col gap-2 ${e}`, children: l.map((t, r) => /* @__PURE__ */ M0(Yr, { ...t, key: r, sciFiCode: r })) }), w1 = () => /* @__PURE__ */ x.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ x.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ x.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ x.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ x.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] }), ii = ({ children: l }) => /* @__PURE__ */ x.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ x.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ x.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ x.jsx(Br, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ x.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ x.jsx(w1, {}) }),
  /* @__PURE__ */ x.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ x.jsx(w1, {}) }),
  /* @__PURE__ */ x.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ x.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ x.jsx("div", { className: "content", children: l }) }) })
] }), ni = ({
  headBlockChildren: l,
  width: e,
  height: t,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: s
}) => /* @__PURE__ */ x.jsxs("div", { className: "card-container relative", style: { width: e, height: t }, children: [
  /* @__PURE__ */ x.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ x.jsx("div", { className: `text-${i} head-block`, children: l }),
        /* @__PURE__ */ x.jsx("div", { className: `text-${i} main-block'`, children: n })
      ]
    }
  ),
  /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `artifact text-${r} ${s ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ x.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] }), si = ({
  children: l,
  primaryColour: e = "#CFFF55",
  secondaryColour: t = "#909090",
  width: r = "220px",
  height: i = "150px"
}) => {
  const n = _e(D.timeline({ paused: !0 })), s = _e(null), a = _e(null), o = _e(null), f = _e(null), u = _e(null), _ = _e(null);
  return q9(() => {
    if (!s.current || !a.current || !o.current) return;
    const C = o.current.getTotalLength(), p = a.current.getTotalLength();
    D.set(o.current, {
      strokeDasharray: C,
      strokeDashoffset: C,
      fill: "none",
      // Запрещаем заливку
      stroke: e,
      // Цвет обводки
      strokeWidth: 0.7
      // Ширина линии
    }), D.set(a.current, {
      strokeDasharray: p,
      strokeDashoffset: p,
      // Начинаем с полностью скрытого пути
      stroke: t,
      // Цвет линии
      strokeWidth: 0.5,
      // Ширина линии
      fill: "none"
      // Без заливки
    }), n.current.to(o.current, {
      strokeDashoffset: 0,
      // Линия будет нарисована полностью
      duration: 2,
      // Время анимации
      ease: "power2.in"
    }).to(a.current, {
      strokeDashoffset: p / 2,
      // Линия будет рисоваться полностью
      duration: 1,
      // Время анимации
      ease: "power2.out"
    }).fromTo(
      s.current,
      { scaleX: 0, transformOrigin: "left center" },
      // Start with scaleX 0
      { scaleX: 1, duration: 1, ease: "power3.out" }
      // End with scaleX 1
    ).to(_.current, {
      opacity: 1
    }).to(f.current, {
      opacity: 0.45,
      duration: 0.5
    }).to(u.current, {
      opacity: 1,
      duration: 0.5
    }), n.current.play();
  }, [e, t]), /* @__PURE__ */ x.jsx("div", { style: { width: r, height: i }, children: /* @__PURE__ */ x.jsxs(
    "svg",
    {
      className: "w-full h-full",
      viewBox: "0 0 135 86",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ x.jsx(
          "path",
          {
            ref: s,
            id: "text-path",
            opacity: "0.9",
            d: "M65 0H0V15H135V0Z",
            fill: "white",
            fillOpacity: "0.15"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "text",
          {
            ref: _,
            className: "text font-[Oxanium]",
            fontWeight: 600,
            fontSize: "8",
            opacity: 0,
            fill: "white",
            x: "2",
            y: "9.5",
            textAnchor: "left",
            children: l
          }
        ),
        /* @__PURE__ */ x.jsx("path", { d: "M4.80008 21.3872H3.27393V22.9385H4.80008V21.3872Z", fill: t }),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            className: "animate-pulse",
            d: "M1.52616 21.3872H0V22.9385H1.52616V21.3872Z",
            fill: e
          }
        ),
        /* @__PURE__ */ x.jsx("g", { opacity: "0.65", children: /* @__PURE__ */ x.jsx(
          "path",
          {
            ref: a,
            opacity: "0.65",
            d: "M93.3184 58.532L54.4642 19.0394H0V18.1963H54.8092L93.9023 57.9351L93.3184 58.532Z",
            fill: t
          }
        ) }),
        /* @__PURE__ */ x.jsx("g", { opacity: "0.5", children: /* @__PURE__ */ x.jsx(
          "path",
          {
            opacity: "0.5",
            d: "M93.4877 76.2722C89.9318 76.2722 86.4558 75.2178 83.4992 73.2422C80.5425 71.2667 78.2381 68.4588 76.8774 65.1736C75.5166 61.8884 75.1605 58.2734 75.8543 54.7858C76.548 51.2983 78.2603 48.0947 80.7747 45.5804C83.2891 43.066 86.4926 41.3536 89.9802 40.6599C93.4678 39.9662 97.0827 40.3222 100.368 41.683C103.653 43.0438 106.461 45.3482 108.437 48.3048C110.412 51.2614 111.467 54.7375 111.467 58.2933C111.461 63.06 109.565 67.63 106.195 71.0005C102.824 74.3711 98.2544 76.267 93.4877 76.2722ZM93.4877 42.2819C90.3209 42.2819 87.2253 43.2209 84.5922 44.9803C81.9591 46.7397 79.9069 49.2403 78.695 52.166C77.4831 55.0917 77.1661 58.3111 77.7839 61.417C78.4017 64.523 79.9266 67.3759 82.1659 69.6152C84.4051 71.8544 87.2581 73.3793 90.364 73.9971C93.4699 74.615 96.6893 74.2979 99.615 73.086C102.541 71.8741 105.041 69.8219 106.801 67.1888C108.56 64.5558 109.499 61.4601 109.499 58.2933C109.49 54.0508 107.8 49.9846 104.799 46.9859C101.798 43.9872 97.7303 42.3004 93.4877 42.2952V42.2819Z",
            fill: t
          }
        ) }),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            ref: o,
            d: "M93.4877 76.2722C89.9318 76.2722 86.4558 75.2178 83.4992 73.2422C80.5425 71.2667 78.2381 68.4588 76.8774 65.1736C75.5166 61.8884 75.1605 58.2734 75.8543 54.7858C76.548 51.2983 78.2603 48.0947 80.7747 45.5804C83.2891 43.066 86.4926 41.3536 89.9802 40.6599C93.4678 39.9662 97.0827 40.3222 100.368 41.683C103.653 43.0438 106.461 45.3482 108.437 48.3048C110.412 51.2614 111.467 54.7375 111.467 58.2933C111.461 63.06 109.565 67.63 106.195 71.0005C102.824 74.3711 98.2544 76.267 93.4877 76.2722ZM93.4877 42.2819C90.3209 42.2819 87.2253 43.2209 84.5922 44.9803C81.9591 46.7397 79.9069 49.2403 78.695 52.166C77.4831 55.0917 77.1661 58.3111 77.7839 61.417C78.4017 64.523 79.9266 67.3759 82.1659 69.6152C84.4051 71.8544 87.2581 73.3793 90.364 73.9971C93.4699 74.615 96.6893 74.2979 99.615 73.086C102.541 71.8741 105.041 69.8219 106.801 67.1888C108.56 64.5558 109.499 61.4601 109.499 58.2933C109.49 54.0508 107.8 49.9846 104.799 46.9859C101.798 43.9872 97.7303 42.3004 93.4877 42.2952V42.2819Z",
            fill: "none"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            ref: u,
            opacity: "0.45",
            d: "M120.988 25.2749H109.356V27.1859H120.988V25.2749Z",
            fill: e
          }
        ),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            ref: f,
            d: "M106.038 25.2749H94.4062V27.1859H106.038V25.2749Z",
            fill: "#ff4a4a"
          }
        ),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            opacity: "0.75",
            d: "M115.716 35.0963L110.97 39.8423L112.025 40.898L116.771 36.152L115.716 35.0963Z",
            fill: t
          }
        ),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            opacity: "0.75",
            d: "M75.0382 75.7743L70.2031 80.6094L71.2588 81.6651L76.0939 76.83L75.0382 75.7743Z",
            fill: t
          }
        ),
        /* @__PURE__ */ x.jsx(
          "path",
          {
            d: "M93.4674 60.5032C94.6878 60.5032 95.6771 59.5139 95.6771 58.2936C95.6771 57.0733 94.6878 56.084 93.4674 56.084C92.2471 56.084 91.2578 57.0733 91.2578 58.2936C91.2578 59.5139 92.2471 60.5032 93.4674 60.5032Z",
            fill: t
          }
        )
      ]
    }
  ) });
}, Ur = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-full", viewBox: "0 0 931 128", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("g", { opacity: 0.5 }, /* @__PURE__ */ h.createElement("path", { d: "M930.1 127.5H0.900146V0.5H930.1V127.5ZM1.20044 127.2H929.8V0.800003H1.20044V127.2Z", fill: "white" })), /* @__PURE__ */ h.createElement("path", { d: "M920.6 118H10.3V10H920.6V118ZM12.0002 116.4H918.9V11.6H12.0002V116.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("defs", null, /* @__PURE__ */ h.createElement("mask", { id: "loading-mask" }, /* @__PURE__ */ h.createElement("rect", { id: "mask-rect", x: -931, y: 0, width: 931, height: 128, fill: "white" }))), /* @__PURE__ */ h.createElement("rect", { x: 0, y: 0, width: 931, height: 128 }), /* @__PURE__ */ h.createElement("g", { id: "loading-content", mask: "url(#loading-mask)" }, /* @__PURE__ */ h.createElement("g", { opacity: 0.6768 }, /* @__PURE__ */ h.createElement("path", { d: "M908.8 106.2H866.6L782.1 21.7998H824.3L908.8 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.5157 }, /* @__PURE__ */ h.createElement("path", { d: "M824.3 106.2H782.1L697.7 21.7998H739.9L824.3 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.7193 }, /* @__PURE__ */ h.createElement("path", { d: "M739.9 106.2H697.7L613.2 21.7998H655.4L739.9 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.7284 }, /* @__PURE__ */ h.createElement("path", { d: "M655.4 106.2H613.2L528.8 21.7998H571L655.4 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.1551 }, /* @__PURE__ */ h.createElement("path", { d: "M571 106.2H528.8L444.3 21.7998H486.6L571 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.9513 }, /* @__PURE__ */ h.createElement("path", { d: "M486.6 106.2H444.3L359.9 21.7998H402.1L486.6 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.82 }, /* @__PURE__ */ h.createElement("path", { d: "M402.1 106.2H359.9L275.4 21.7998H317.7L402.1 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.2836 }, /* @__PURE__ */ h.createElement("path", { d: "M317.7 106.2H275.4L191 21.7998H233.2L317.7 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.702 }, /* @__PURE__ */ h.createElement("path", { d: "M233.2 106.2H191L106.6 21.7998H148.8L233.2 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.587 }, /* @__PURE__ */ h.createElement("path", { d: "M148.8 106.2H106.6L22.1003 21.7998H64.3L148.8 106.2Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.4373 }, /* @__PURE__ */ h.createElement("path", { d: "M908.8 63.9998L866.6 21.7998H908.8V63.9998Z", fill: "#DD1920" })), /* @__PURE__ */ h.createElement("g", { opacity: 0.7504 }, /* @__PURE__ */ h.createElement("path", { d: "M22.1003 106.2H64.3L22.1003 64V106.2Z", fill: "#DD1920" })))), $r = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-full", viewBox: "0 0 700 88", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("g", { opacity: 0.75 }, /* @__PURE__ */ h.createElement("path", { d: "M1906 82.1003C1905.8 82.1003 1905.7 82.0004 1905.7 81.8004V6.20032C1905.7 6.00032 1905.8 5.90039 1906 5.90039C1906.2 5.90039 1906.3 6.00032 1906.3 6.20032V81.8004C1906.3 82.0004 1906.2 82.1003 1906 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1846.6 82.1003C1846.4 82.1003 1846.3 82.0004 1846.3 81.8004V6.20032C1846.3 6.00032 1846.4 5.90039 1846.6 5.90039C1846.8 5.90039 1846.9 6.00032 1846.9 6.20032V81.8004C1846.9 82.0004 1846.8 82.1003 1846.6 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1787.2 82.1003C1787 82.1003 1786.9 82.0004 1786.9 81.8004V6.20032C1786.9 6.00032 1787 5.90039 1787.2 5.90039C1787.4 5.90039 1787.5 6.00032 1787.5 6.20032V81.8004C1787.6 82.0004 1787.4 82.1003 1787.2 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1727.9 82.1003C1727.7 82.1003 1727.6 82.0004 1727.6 81.8004V6.20032C1727.6 6.00032 1727.7 5.90039 1727.9 5.90039C1728.1 5.90039 1728.2 6.00032 1728.2 6.20032V81.8004C1728.2 82.0004 1728.1 82.1003 1727.9 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1668.5 82.1003C1668.3 82.1003 1668.2 82.0004 1668.2 81.8004V6.20032C1668.2 6.00032 1668.3 5.90039 1668.5 5.90039C1668.7 5.90039 1668.8 6.00032 1668.8 6.20032V81.8004C1668.8 82.0004 1668.7 82.1003 1668.5 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1609.1 82.1003C1608.9 82.1003 1608.8 82.0004 1608.8 81.8004V6.20032C1608.8 6.00032 1608.9 5.90039 1609.1 5.90039C1609.3 5.90039 1609.4 6.00032 1609.4 6.20032V81.8004C1609.4 82.0004 1609.3 82.1003 1609.1 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1549.7 82.1003C1549.5 82.1003 1549.4 82.0004 1549.4 81.8004V6.20032C1549.4 6.00032 1549.5 5.90039 1549.7 5.90039C1549.9 5.90039 1550 6.00032 1550 6.20032V81.8004C1550.1 82.0004 1549.9 82.1003 1549.7 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1490.4 82.1003C1490.2 82.1003 1490.1 82.0004 1490.1 81.8004V6.20032C1490.1 6.00032 1490.2 5.90039 1490.4 5.90039C1490.6 5.90039 1490.7 6.00032 1490.7 6.20032V81.8004C1490.7 82.0004 1490.6 82.1003 1490.4 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1431 82.1003C1430.8 82.1003 1430.7 82.0004 1430.7 81.8004V6.20032C1430.7 6.00032 1430.8 5.90039 1431 5.90039C1431.2 5.90039 1431.3 6.00032 1431.3 6.20032V81.8004C1431.3 82.0004 1431.2 82.1003 1431 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1371.6 82.1003C1371.4 82.1003 1371.3 82.0004 1371.3 81.8004V6.20032C1371.3 6.00032 1371.4 5.90039 1371.6 5.90039C1371.8 5.90039 1371.9 6.00032 1371.9 6.20032V81.8004C1371.9 82.0004 1371.8 82.1003 1371.6 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1312.2 82.1003C1312 82.1003 1311.9 82.0004 1311.9 81.8004V6.20032C1311.9 6.00032 1312 5.90039 1312.2 5.90039C1312.4 5.90039 1312.5 6.00032 1312.5 6.20032V81.8004C1312.6 82.0004 1312.4 82.1003 1312.2 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1252.9 82.1003C1252.7 82.1003 1252.6 82.0004 1252.6 81.8004V6.20032C1252.6 6.00032 1252.7 5.90039 1252.9 5.90039C1253.1 5.90039 1253.2 6.00032 1253.2 6.20032V81.8004C1253.2 82.0004 1253.1 82.1003 1252.9 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1193.5 82.1003C1193.3 82.1003 1193.2 82.0004 1193.2 81.8004V6.20032C1193.2 6.00032 1193.3 5.90039 1193.5 5.90039C1193.7 5.90039 1193.8 6.00032 1193.8 6.20032V81.8004C1193.8 82.0004 1193.7 82.1003 1193.5 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1134.1 82.1003C1133.9 82.1003 1133.8 82.0004 1133.8 81.8004V6.20032C1133.8 6.00032 1133.9 5.90039 1134.1 5.90039C1134.3 5.90039 1134.4 6.00032 1134.4 6.20032V81.8004C1134.4 82.0004 1134.3 82.1003 1134.1 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1074.8 82.1003C1074.6 82.1003 1074.5 82.0004 1074.5 81.8004V6.20032C1074.5 6.00032 1074.6 5.90039 1074.8 5.90039C1075 5.90039 1075.1 6.00032 1075.1 6.20032V81.8004C1075.1 82.0004 1074.9 82.1003 1074.8 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1015.4 82.1003C1015.2 82.1003 1015.1 82.0004 1015.1 81.8004V6.20032C1015.1 6.00032 1015.2 5.90039 1015.4 5.90039C1015.6 5.90039 1015.7 6.00032 1015.7 6.20032V81.8004C1015.7 82.0004 1015.6 82.1003 1015.4 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M956 82.1003C955.8 82.1003 955.7 82.0004 955.7 81.8004V6.20032C955.7 6.00032 955.8 5.90039 956 5.90039C956.2 5.90039 956.3 6.00032 956.3 6.20032V81.8004C956.3 82.0004 956.2 82.1003 956 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M896.6 82.1003C896.4 82.1003 896.3 82.0004 896.3 81.8004V6.20032C896.3 6.00032 896.4 5.90039 896.6 5.90039C896.8 5.90039 896.9 6.00032 896.9 6.20032V81.8004C896.9 82.0004 896.8 82.1003 896.6 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M837.2 82.1003C837 82.1003 836.9 82.0004 836.9 81.8004V6.20032C836.9 6.00032 837 5.90039 837.2 5.90039C837.4 5.90039 837.5 6.00032 837.5 6.20032V81.8004C837.6 82.0004 837.4 82.1003 837.2 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M777.9 82.1003C777.7 82.1003 777.6 82.0004 777.6 81.8004V6.20032C777.6 6.00032 777.7 5.90039 777.9 5.90039C778.1 5.90039 778.2 6.00032 778.2 6.20032V81.8004C778.2 82.0004 778.1 82.1003 777.9 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M718.5 82.1003C718.3 82.1003 718.2 82.0004 718.2 81.8004V6.20032C718.2 6.00032 718.3 5.90039 718.5 5.90039C718.7 5.90039 718.8 6.00032 718.8 6.20032V81.8004C718.8 82.0004 718.7 82.1003 718.5 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M659.1 82.1003C658.9 82.1003 658.8 82.0004 658.8 81.8004V6.20032C658.8 6.00032 658.9 5.90039 659.1 5.90039C659.3 5.90039 659.4 6.00032 659.4 6.20032V81.8004C659.4 82.0004 659.3 82.1003 659.1 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M599.8 82.1003C599.6 82.1003 599.5 82.0004 599.5 81.8004V6.20032C599.5 6.00032 599.6 5.90039 599.8 5.90039C600 5.90039 600.1 6.00032 600.1 6.20032V81.8004C600.1 82.0004 599.9 82.1003 599.8 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M540.4 82.1003C540.2 82.1003 540.1 82.0004 540.1 81.8004V6.20032C540.1 6.00032 540.2 5.90039 540.4 5.90039C540.6 5.90039 540.7 6.00032 540.7 6.20032V81.8004C540.7 82.0004 540.6 82.1003 540.4 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M481 82.1003C480.8 82.1003 480.7 82.0004 480.7 81.8004V6.20032C480.7 6.00032 480.8 5.90039 481 5.90039C481.2 5.90039 481.3 6.00032 481.3 6.20032V81.8004C481.3 82.0004 481.2 82.1003 481 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M421.6 82.1003C421.4 82.1003 421.3 82.0004 421.3 81.8004V6.20032C421.3 6.00032 421.4 5.90039 421.6 5.90039C421.8 5.90039 421.9 6.00032 421.9 6.20032V81.8004C421.9 82.0004 421.8 82.1003 421.6 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M362.2 82.1003C362 82.1003 361.9 82.0004 361.9 81.8004V6.20032C361.9 6.00032 362 5.90039 362.2 5.90039C362.4 5.90039 362.5 6.00032 362.5 6.20032V81.8004C362.6 82.0004 362.4 82.1003 362.2 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M302.9 82.1003C302.7 82.1003 302.6 82.0004 302.6 81.8004V6.20032C302.6 6.00032 302.7 5.90039 302.9 5.90039C303.1 5.90039 303.2 6.00032 303.2 6.20032V81.8004C303.2 82.0004 303.1 82.1003 302.9 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M243.5 82.1003C243.3 82.1003 243.2 82.0004 243.2 81.8004V6.20032C243.2 6.00032 243.3 5.90039 243.5 5.90039C243.7 5.90039 243.8 6.00032 243.8 6.20032V81.8004C243.8 82.0004 243.7 82.1003 243.5 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M184.1 82.1003C183.9 82.1003 183.8 82.0004 183.8 81.8004V6.20032C183.8 6.00032 183.9 5.90039 184.1 5.90039C184.3 5.90039 184.4 6.00032 184.4 6.20032V81.8004C184.4 82.0004 184.3 82.1003 184.1 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M124.8 82.1003C124.6 82.1003 124.5 82.0004 124.5 81.8004V6.20032C124.5 6.00032 124.6 5.90039 124.8 5.90039C125 5.90039 125.1 6.00032 125.1 6.20032V81.8004C125.1 82.0004 124.9 82.1003 124.8 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M65.3999 82.1003C65.1999 82.1003 65.1001 82.0004 65.1001 81.8004V6.20032C65.1001 6.00032 65.1999 5.90039 65.3999 5.90039C65.5999 5.90039 65.7 6.00032 65.7 6.20032V81.8004C65.7 82.0004 65.5999 82.1003 65.3999 82.1003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M6 82.1003C5.8 82.1003 5.69995 82.0004 5.69995 81.8004V6.20032C5.69995 6.00032 5.8 5.90039 6 5.90039C6.2 5.90039 6.30005 6.00032 6.30005 6.20032V81.8004C6.30005 82.0004 6.2 82.1003 6 82.1003Z", fill: "white" })), /* @__PURE__ */ h.createElement("g", { id: "solar-graph" }, /* @__PURE__ */ h.createElement("path", { d: "M35.7001 22.9001C33.9001 22.9001 32.1001 22.0001 31.0001 20.5001C29.2001 17.9001 29.9 14.4001 32.4 12.6001C35 10.8001 38.5002 11.4001 40.3002 14.0001C42.1002 16.6001 41.5 20.1001 38.9 21.9001C38.9 21.9001 38.9002 21.9001 38.8002 21.9001C37.9002 22.6001 36.8001 22.9001 35.7001 22.9001Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M5.99994 49.6996C4.59994 49.6996 3.29989 49.1996 2.19989 48.1996C-0.100106 46.0996 -0.300008 42.4996 1.79999 40.1996C1.89999 40.0996 2.00004 39.9997 2.10004 39.8997C4.30004 37.6997 7.90004 37.7997 10.1 39.9997C12.3 42.1997 12.3 45.7997 10.1 47.9997C8.90004 49.0997 7.49994 49.6996 5.99994 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M65.3999 11.9C62.2999 11.9 59.7 9.39995 59.7 6.19995C59.7 2.99995 62.1999 0.5 65.3999 0.5C68.5999 0.5 71.1001 2.99995 71.1001 6.19995C71.1001 9.39995 68.4999 11.9 65.3999 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M35.6999 22.9001C33.9999 22.9001 32.2999 22.1001 31.1999 20.6001C29.2999 18.1001 29.8 14.5001 32.3 12.7001C32.3 12.7001 32.3999 12.6001 32.4999 12.6001C34.9999 10.8001 38.5998 11.4001 40.3998 13.9001C42.1998 16.4001 41.6 19.9002 39.1 21.8002C38 22.6002 36.7999 22.9001 35.6999 22.9001Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M95.1002 22.8999C94.0002 22.8999 92.8 22.5999 91.9 21.8999C89.4 20.0999 88.7 16.6999 90.4 14.0999C92.1 11.4999 95.7001 10.7999 98.3001 12.4999C98.4001 12.5999 98.5002 12.5999 98.6002 12.6999C101.1 14.5999 101.6 18.0999 99.7 20.5999C98.5 22.1999 96.8002 22.8999 95.1002 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M65.3999 11.9C62.2999 11.9 59.7 9.39995 59.7 6.19995C59.7 2.99995 62.1999 0.5 65.3999 0.5C68.5999 0.5 71.1001 2.99995 71.1001 6.19995C71.1001 9.39995 68.4999 11.9 65.3999 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M124.7 49.6996C123.3 49.6996 121.8 49.0996 120.7 47.9996C118.5 45.7996 118.5 42.1996 120.7 39.9996C122.9 37.7996 126.5 37.7996 128.7 39.9996C130.9 42.1996 130.9 45.7996 128.7 47.9996C127.6 49.0996 126.2 49.6996 124.7 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M95.1001 23C93.9001 23 92.8001 22.6 91.8001 21.9C91.7001 21.9 91.7001 21.8 91.6001 21.8C89.1001 19.9 88.7001 16.3 90.6001 13.8C92.5001 11.4 95.8999 10.8999 98.3999 12.6999C98.4999 12.6999 98.5001 12.8 98.6001 12.8C101.1 14.7 101.5 18.3 99.6001 20.8C98.4001 22.2 96.8001 23 95.1001 23Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M154.4 76.3997C153.3 76.3997 152.1 76.0997 151.2 75.3997L157.7 66.0996C160.3 67.8996 160.9 71.3996 159.1 73.9996C158 75.5996 156.2 76.3997 154.4 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M124.8 49.6999C123.3 49.6999 121.8 49.1 120.7 47.9L120.6 47.8C118.5 45.5 118.7 41.9 121 39.8C123.3 37.7 126.8 37.8999 128.9 40.0999L129 40.1999C131.1 42.4999 130.9 46.0999 128.6 48.1999C127.5 49.1999 126.1 49.6999 124.8 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M184.1 87.4996C181 87.4996 178.4 84.9997 178.4 81.7997C178.4 78.5997 180.9 76.0996 184.1 76.0996C187.3 76.0996 189.8 78.5997 189.8 81.7997C189.8 84.9997 187.3 87.4996 184.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M154.5 76.3997C153.4 76.3997 152.3 76.0997 151.4 75.3997C151.3 75.2997 151.2 75.2996 151.1 75.1996C148.6 73.2996 148.1 69.7997 150 67.2997C151.9 64.7997 155.3 64.2996 157.8 66.0996C160.3 67.8996 160.9 71.2997 159.2 73.8997C158.1 75.4997 156.3 76.3997 154.5 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M213.8 76.4C212 76.4 210.2 75.5 209.1 73.9C207.4 71.3 208.1 67.8999 210.6 66.0999C213.1 64.3999 216.5 64.9 218.4 67.3C220.3 69.8 219.8 73.3999 217.3 75.1999C217.2 75.2999 217.1 75.3 217 75.4C216 76.1 214.9 76.4 213.8 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M184.1 87.4996C181 87.4996 178.4 84.9997 178.4 81.7997C178.4 78.5997 180.9 76.0996 184.1 76.0996C187.3 76.0996 189.8 78.5997 189.8 81.7997C189.8 84.9997 187.3 87.4996 184.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M243.5 49.6996C242.1 49.6996 240.8 49.1996 239.7 48.1996C237.4 46.0996 237.2 42.4996 239.3 40.1996C239.4 40.0996 239.5 39.9997 239.6 39.8997C241.8 37.6997 245.4 37.7997 247.6 39.9997C249.8 42.1997 249.8 45.7997 247.6 47.9997C246.4 49.0997 245 49.6996 243.5 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M213.8 76.3994C212.1 76.3994 210.4 75.5994 209.3 74.1994C207.4 71.6994 207.8 68.1994 210.3 66.1994C210.4 66.1994 210.4 66.0994 210.5 66.0994C213 64.2994 216.4 64.7994 218.3 67.1994C220.2 69.6994 219.8 73.1994 217.3 75.1994C217.2 75.1994 217.2 75.2995 217.1 75.2995C216.1 75.9995 215 76.3994 213.8 76.3994Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M273.2 23.0004C271.5 23.0004 269.8 22.2004 268.7 20.8004C266.8 18.3004 267.2 14.8004 269.7 12.8004C269.8 12.7004 269.9 12.6003 270 12.6003C272.6 10.9003 276.1 11.5004 277.8 14.0004C279.6 16.6004 279 20.1004 276.4 21.9004C275.4 22.6004 274.3 23.0004 273.2 23.0004Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M243.5 49.6999C242.1 49.6999 240.8 49.1999 239.7 48.1999C237.4 46.0999 237.2 42.4999 239.3 40.1999L239.4 40.0999C241.5 37.8999 245 37.7 247.3 39.8C249.6 41.9 249.8 45.5 247.7 47.8L247.6 47.9C246.5 49.1 245 49.6999 243.5 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M302.9 11.9C299.8 11.9 297.2 9.39995 297.2 6.19995C297.2 2.99995 299.7 0.5 302.9 0.5C306.1 0.5 308.6 2.99995 308.6 6.19995C308.6 9.39995 306 11.9 302.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M273.2 22.8999C271.6 22.8999 269.9 22.2 268.8 20.8C266.8 18.4 267.2 14.8 269.6 12.8C269.7 12.7 269.9 12.5999 270.1 12.4999C272.7 10.7999 276.2 11.4999 278 14.0999C279.7 16.5999 279.1 20.1 276.6 21.8C275.5 22.6 274.4 22.8999 273.2 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M332.6 22.8999C331.5 22.8999 330.3 22.5999 329.4 21.8999C326.9 20.0999 326.2 16.6999 327.9 14.0999C329.6 11.4999 333.2 10.7999 335.8 12.4999C335.9 12.5999 336 12.5999 336.1 12.6999C338.6 14.5999 339.1 18.0999 337.2 20.5999C336 22.1999 334.3 22.8999 332.6 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M302.9 11.9C299.8 11.9 297.2 9.39995 297.2 6.19995C297.2 2.99995 299.7 0.5 302.9 0.5C306.1 0.5 308.6 2.99995 308.6 6.19995C308.6 9.39995 306 11.9 302.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M362.3 49.6998C360.9 49.6998 359.4 49.1999 358.3 48.0999C358.2 47.9999 358.1 47.8999 358 47.7999C355.9 45.4999 356.1 41.8999 358.4 39.7999C360.7 37.7999 364.1 37.8999 366.2 39.9999C368.4 42.1999 368.4 45.7999 366.2 47.9999C365.2 49.0999 363.7 49.6998 362.3 49.6998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M332.6 23C331.4 23 330.3 22.6 329.3 21.9C329.2 21.9 329.2 21.8 329.1 21.8C326.6 19.9 326.2 16.3 328.1 13.8C330 11.4 333.4 10.8999 335.9 12.6999C336 12.6999 336 12.8 336.1 12.8C338.6 14.7 339 18.3 337.1 20.8C335.9 22.2 334.3 23 332.6 23Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M391.9 76.4004C390.7 76.4004 389.6 76.0004 388.6 75.3004C388.5 75.3004 388.5 75.2003 388.4 75.2003C385.9 73.3003 385.5 69.7003 387.4 67.2003C389.3 64.8003 392.7 64.3004 395.2 66.1004C395.3 66.1004 395.3 66.2003 395.4 66.2003C397.9 68.1003 398.3 71.7003 396.4 74.2003C395.3 75.6003 393.6 76.4004 391.9 76.4004Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M362.3 49.6999C360.8 49.6999 359.3 49.1 358.2 47.9L358.1 47.8C356 45.5 356.2 41.9 358.5 39.8C360.8 37.7 364.3 37.8999 366.4 40.0999L366.5 40.1999C368.6 42.4999 368.4 46.0999 366.1 48.1999C365 49.1999 363.6 49.6999 362.3 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M421.6 87.4996C418.5 87.4996 415.9 84.9997 415.9 81.7997C415.9 78.5997 418.4 76.0996 421.6 76.0996C424.8 76.0996 427.3 78.5997 427.3 81.7997C427.3 84.9997 424.8 87.4996 421.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M392 76.3997C390.9 76.3997 389.8 76.0997 388.9 75.3997C388.8 75.2997 388.7 75.2996 388.6 75.1996C386.1 73.2996 385.6 69.7997 387.5 67.2997C389.3 64.7997 392.8 64.2996 395.3 66.0996C397.8 67.8996 398.5 71.2997 396.8 73.8997C395.6 75.4997 393.8 76.3997 392 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M451.3 76.4C449.5 76.4 447.7 75.5 446.6 73.9C444.9 71.4 445.5 67.8999 448 66.1999C450.4 64.3999 453.8 64.8999 455.7 67.1999C457.7 69.5999 457.3 73.1999 454.9 75.1999C454.8 75.2999 454.6 75.3999 454.4 75.4999C453.5 76.0999 452.4 76.4 451.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M421.6 87.4996C418.5 87.4996 415.9 84.9997 415.9 81.7997C415.9 78.5997 418.4 76.0996 421.6 76.0996C424.8 76.0996 427.3 78.5997 427.3 81.7997C427.3 84.9997 424.8 87.4996 421.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M481 49.6999C479.6 49.6999 478.3 49.1999 477.2 48.1999C474.9 46.0999 474.7 42.4999 476.8 40.1999L476.9 40.0999C479 37.8999 482.5 37.7 484.8 39.8C487.1 41.9 487.3 45.5 485.2 47.8L485.1 47.9C484 49.1 482.5 49.6999 481 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M451.3 76.4C449.5 76.4 447.8 75.5999 446.7 73.9999C444.9 71.3999 445.5 67.8999 448.1 66.0999C450.6 64.3999 454 64.9 455.8 67.3C457.7 69.8 457.3 73.3 454.8 75.3C454.7 75.4 454.6 75.4999 454.5 75.4999C453.5 76.0999 452.4 76.4 451.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M510.7 23C509 23 507.3 22.2 506.2 20.8C504.3 18.3 504.7 14.8 507.2 12.8C507.3 12.8 507.3 12.6999 507.4 12.6999C509.9 10.8999 513.3 11.4 515.2 13.8C517.1 16.3 516.7 19.8 514.2 21.8C514.1 21.8 514.1 21.9 514 21.9C513 22.6 511.8 23 510.7 23Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M481 49.6998C479.5 49.6998 478.1 49.0998 477 47.9998C474.8 45.7998 474.8 42.1998 477 39.9998C479.1 37.8998 482.6 37.6999 484.8 39.7999C487.1 41.8999 487.3 45.4999 485.2 47.7999C485.1 47.8999 485 47.9998 484.9 48.0998C483.8 49.0998 482.4 49.6998 481 49.6998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M540.4 11.9C537.3 11.9 534.7 9.39995 534.7 6.19995C534.7 2.99995 537.2 0.5 540.4 0.5C543.6 0.5 546.1 2.99995 546.1 6.19995C546.1 9.39995 543.5 11.9 540.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M510.7 22.8999C509 22.8999 507.3 22.0999 506.2 20.5999C504.3 18.0999 504.8 14.4999 507.3 12.6999C507.4 12.5999 507.5 12.5999 507.6 12.4999C510.2 10.7999 513.7 11.4999 515.5 14.0999C517.2 16.6999 516.5 20.0999 514 21.8999C513 22.5999 511.8 22.8999 510.7 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M570.1 22.9003C569 22.9003 567.8 22.6003 566.8 21.8003C564.3 20.0003 563.7 16.6003 565.4 14.0003C567.1 11.4003 570.7 10.7003 573.3 12.4003C573.4 12.5003 573.5 12.5003 573.6 12.6003C576.1 14.5003 576.6 18.0003 574.7 20.5003C573.5 22.2003 571.8 22.9003 570.1 22.9003Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M540.4 11.9C537.3 11.9 534.7 9.39995 534.7 6.19995C534.7 2.99995 537.2 0.5 540.4 0.5C543.6 0.5 546.1 2.99995 546.1 6.19995C546.1 9.39995 543.5 11.9 540.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M599.8 49.6999C598.3 49.6999 596.8 49.1 595.7 47.9L595.6 47.8C593.5 45.5 593.7 41.9 596 39.8C598.3 37.7 601.8 37.8999 603.9 40.0999L604 40.1999C606.1 42.4999 605.9 46.0999 603.6 48.1999C602.5 49.1999 601.1 49.6999 599.8 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M570.1 22.9998C569 22.9998 567.8 22.6998 566.8 21.9998C564.2 20.1998 563.6 16.6998 565.4 14.0998C567.2 11.5998 570.7 10.8998 573.2 12.6998C573.3 12.7998 573.4 12.7999 573.5 12.8999C576 14.7999 576.4 18.3999 574.5 20.8999C573.4 22.1999 571.8 22.9998 570.1 22.9998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M629.4 76.3994C628.2 76.3994 627.1 75.9995 626.1 75.2995C626 75.2995 626 75.1994 625.9 75.1994C623.4 73.2994 623 69.6994 624.9 67.1994C626.8 64.7994 630.2 64.2994 632.7 66.0994C632.8 66.0994 632.8 66.1994 632.9 66.1994C635.4 68.0994 635.8 71.6994 633.9 74.1994C632.8 75.5994 631.1 76.3994 629.4 76.3994Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M599.8 49.6996C598.4 49.6996 596.9 49.0996 595.8 47.9996C593.6 45.7996 593.6 42.1996 595.8 39.9996C598 37.7996 601.6 37.7996 603.8 39.9996C606 42.1996 606 45.7996 603.8 47.9996C602.7 49.0996 601.2 49.6996 599.8 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M659.1 87.4996C656 87.4996 653.4 84.9997 653.4 81.7997C653.4 78.5997 655.9 76.0996 659.1 76.0996C662.3 76.0996 664.8 78.5997 664.8 81.7997C664.8 84.9997 662.3 87.4996 659.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M629.5 76.3997C628.4 76.3997 627.3 76.0997 626.4 75.3997C626.3 75.2997 626.2 75.2996 626.1 75.1996C623.6 73.2996 623.1 69.7997 625 67.2997C626.8 64.7997 630.3 64.2996 632.8 66.0996C635.3 67.8996 636 71.2997 634.3 73.8997C633.1 75.4997 631.3 76.3997 629.5 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M688.8 76.3997C687 76.3997 685.3 75.5996 684.2 73.9996C682.4 71.4996 683 67.9996 685.5 66.0996C688 64.2996 691.5 64.7997 693.3 67.2997C695.2 69.7997 694.7 73.3996 692.2 75.1996C692.2 75.1996 692.1 75.2997 692 75.2997C691.1 76.0997 689.9 76.3997 688.8 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M659.1 87.4996C656 87.4996 653.4 84.9997 653.4 81.7997C653.4 78.5997 655.9 76.0996 659.1 76.0996C662.3 76.0996 664.8 78.5997 664.8 81.7997C664.8 84.9997 662.3 87.4996 659.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M718.5 49.6998C717 49.6998 715.6 49.0998 714.5 47.9998C712.3 45.7998 712.3 42.1998 714.5 39.9998C716.6 37.8998 720.1 37.6999 722.3 39.7999C724.6 41.8999 724.8 45.4999 722.7 47.7999C722.6 47.8999 722.5 47.9998 722.4 48.0998C721.3 49.1998 719.9 49.6998 718.5 49.6998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M688.8 76.4001C687 76.4001 685.2 75.5001 684.1 74.0001C682.3 71.4001 683 67.9001 685.5 66.1001C688.1 64.3001 691.6 64.9001 693.4 67.5001C695.2 70.1001 694.6 73.6001 692 75.4001C692 75.4001 692 75.4001 691.9 75.4001C691 76.1001 689.9 76.4001 688.8 76.4001Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M748.2 23.0005C746.4 23.0005 744.7 22.2005 743.6 20.6005C741.8 18.0005 742.4 14.5005 745 12.7005C747.5 11.0005 750.9 11.5006 752.7 13.9006C754.6 16.4006 754.2 19.9006 751.7 21.9006C751.6 22.0006 751.5 22.1005 751.4 22.1005C750.4 22.6005 749.3 23.0005 748.2 23.0005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M718.5 49.7005C717 49.7005 715.6 49.1006 714.5 48.0006C712.3 45.8006 712.3 42.2006 714.5 40.0006C716.7 37.8006 720.3 37.8006 722.5 40.0006C724.7 42.2006 724.7 45.8006 722.5 48.0006C721.4 49.1006 720 49.7005 718.5 49.7005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M777.9 11.9C774.8 11.9 772.2 9.39995 772.2 6.19995C772.2 2.99995 774.7 0.5 777.9 0.5C781.1 0.5 783.6 2.99995 783.6 6.19995C783.6 9.39995 781 11.9 777.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M748.2 22.8999C746.5 22.8999 744.8 22.0999 743.7 20.5999C741.8 18.0999 742.3 14.4999 744.8 12.6999C744.9 12.5999 745 12.5999 745.1 12.4999C747.7 10.7999 751.2 11.4999 753 14.0999C754.7 16.6999 754 20.0999 751.5 21.8999C750.5 22.5999 749.3 22.8999 748.2 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M807.6 22.8999C806.5 22.8999 805.3 22.5999 804.4 21.8999C801.9 20.0999 801.2 16.6999 802.9 14.0999C804.6 11.4999 808.2 10.7999 810.8 12.4999C810.9 12.5999 811 12.5999 811.1 12.6999C813.6 14.5999 814.1 18.0999 812.2 20.5999C811 22.1999 809.3 22.8999 807.6 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M777.9 11.9C774.8 11.9 772.2 9.39995 772.2 6.19995C772.2 2.99995 774.7 0.5 777.9 0.5C781.1 0.5 783.6 2.99995 783.6 6.19995C783.6 9.39995 781 11.9 777.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M837.3 49.7005C835.8 49.7005 834.4 49.1006 833.3 48.0006C831.1 45.8006 831.1 42.2006 833.3 40.0006C835.5 37.8006 839.1 37.8006 841.3 40.0006C841.4 40.1006 841.5 40.2005 841.5 40.2005C843.6 42.5005 843.4 46.1005 841.1 48.2005C840 49.2005 838.6 49.7005 837.3 49.7005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M807.6 23.0002C806.5 23.0002 805.3 22.7002 804.4 22.0002L810.9 12.7002C813.5 14.5002 814.1 18.0002 812.3 20.6002C811.1 22.1002 809.4 23.0002 807.6 23.0002Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M866.9 76.3992C865.8 76.3992 864.6 76.0992 863.6 75.3992C861 73.5992 860.4 70.0992 862.2 67.4992C864 64.9992 867.5 64.2992 870 66.0992C870.1 66.1992 870.2 66.1993 870.3 66.2993C872.8 68.1993 873.2 71.7993 871.3 74.2993C870.3 75.5993 868.6 76.3992 866.9 76.3992Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M837.3 49.6996C835.9 49.6996 834.4 49.0996 833.3 47.9996C831.1 45.7996 831.1 42.1996 833.3 39.9996C835.5 37.7996 839.1 37.7996 841.3 39.9996C843.5 42.1996 843.5 45.7996 841.3 47.9996C840.2 49.0996 838.7 49.6996 837.3 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M896.6 87.4996C893.5 87.4996 890.9 84.9997 890.9 81.7997C890.9 78.5997 893.4 76.0996 896.6 76.0996C899.8 76.0996 902.3 78.5997 902.3 81.7997C902.3 84.9997 899.8 87.4996 896.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M867 76.3997C865.9 76.3997 864.8 76.0997 863.9 75.3997C863.8 75.2997 863.7 75.2996 863.6 75.1996C861.1 73.2996 860.6 69.7997 862.5 67.2997C864.3 64.7997 867.8 64.2996 870.3 66.0996C872.8 67.8996 873.5 71.2997 871.8 73.8997C870.6 75.4997 868.8 76.3997 867 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M926.3 76.4C924.5 76.4 922.7 75.5 921.6 73.9C919.9 71.3 920.6 67.8999 923.1 66.0999C925.6 64.3999 929 64.9 930.9 67.3C932.8 69.8 932.3 73.3999 929.8 75.1999C929.7 75.2999 929.6 75.3 929.5 75.4C928.5 76.1 927.4 76.4 926.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M896.6 87.4996C893.5 87.4996 890.9 84.9997 890.9 81.7997C890.9 78.5997 893.4 76.0996 896.6 76.0996C899.8 76.0996 902.3 78.5997 902.3 81.7997C902.3 84.9997 899.8 87.4996 896.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M956 49.6996C954.5 49.6996 953.1 49.0996 952 47.9996C949.8 45.7996 949.8 42.1996 952 39.9996C954.2 37.7996 957.8 37.7996 960 39.9996C962.2 42.1996 962.2 45.7996 960 47.9996C958.9 49.0996 957.4 49.6996 956 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M926.3 76.3991C924.5 76.3991 922.7 75.4991 921.6 73.9991C919.8 71.3991 920.5 67.8991 923 66.0991C925.6 64.2991 929.1 64.8991 930.9 67.4991C932.7 70.0991 932.1 73.5991 929.5 75.3991C929.5 75.3991 929.5 75.3991 929.4 75.3991C928.5 76.0991 927.4 76.3991 926.3 76.3991Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M985.7 23.0005C983.9 23.0005 982.2 22.2005 981.1 20.6005C979.3 18.1005 979.9 14.6006 982.4 12.8006C984.7 11.1006 988.1 11.4005 990 13.6005C992.1 16.0005 991.8 19.5005 989.5 21.6005C989.3 21.7005 989.1 21.9005 989 22.0005C987.9 22.6005 986.8 23.0005 985.7 23.0005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M956 49.7005C954.5 49.7005 953.1 49.1006 952 48.0006C949.8 45.8006 949.8 42.2006 952 40.0006C954.2 37.8006 957.8 37.8006 960 40.0006C962.2 42.2006 962.2 45.8006 960 48.0006C958.9 49.1006 957.5 49.7005 956 49.7005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1015.4 11.9C1012.3 11.9 1009.7 9.39995 1009.7 6.19995C1009.7 2.99995 1012.2 0.5 1015.4 0.5C1018.6 0.5 1021.1 2.99995 1021.1 6.19995C1021.1 9.39995 1018.5 11.9 1015.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M985.7 22.8999C984 22.8999 982.3 22.0999 981.2 20.5999C979.3 18.0999 979.8 14.4999 982.3 12.6999C982.4 12.5999 982.5 12.5999 982.6 12.4999C985.2 10.7999 988.7 11.4999 990.5 14.0999C992.2 16.6999 991.5 20.0999 989 21.8999C988 22.5999 986.8 22.8999 985.7 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1045.1 22.8999C1044 22.8999 1042.8 22.5999 1041.9 21.8999C1039.4 20.0999 1038.7 16.6999 1040.4 14.0999C1042.1 11.4999 1045.7 10.7999 1048.3 12.4999C1048.4 12.5999 1048.5 12.5999 1048.6 12.6999C1051.1 14.5999 1051.6 18.0999 1049.7 20.5999C1048.5 22.1999 1046.8 22.8999 1045.1 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1015.4 11.9C1012.3 11.9 1009.7 9.39995 1009.7 6.19995C1009.7 2.99995 1012.2 0.5 1015.4 0.5C1018.6 0.5 1021.1 2.99995 1021.1 6.19995C1021.1 9.39995 1018.5 11.9 1015.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1074.8 49.7C1073.1 49.7 1071.5 49 1070.4 47.6L1074.8 44L1078.8 40C1078.9 40.1 1079.1 40.3 1079.2 40.5C1081.2 42.9 1080.8 46.5 1078.3 48.5C1077.2 49.3 1076 49.7 1074.8 49.7Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1045.1 23.0001C1044 23.0001 1042.9 22.7001 1041.9 22.0001C1041.9 22.0001 1041.8 22.0001 1041.8 21.9001C1039.2 20.1001 1038.6 16.6001 1040.4 14.0001C1042.2 11.5001 1045.6 10.8001 1048.2 12.5001C1048.2 12.5001 1048.3 12.5001 1048.3 12.6001C1050.9 14.4001 1051.5 17.9001 1049.7 20.5001C1048.6 22.1001 1046.9 23.0001 1045.1 23.0001Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1104.4 76.3992C1103.2 76.3992 1102 75.9993 1101 75.2993C1098.5 73.4993 1097.9 69.9992 1099.7 67.4992C1101.5 64.9992 1105 64.2992 1107.5 66.0992C1107.7 66.1992 1107.9 66.3992 1108 66.4992C1110.4 68.5992 1110.6 72.0992 1108.5 74.4992C1107.6 75.6992 1106 76.3992 1104.4 76.3992Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1074.8 49.6996C1073.4 49.6996 1072 49.1996 1070.9 48.0996L1070.8 47.9996C1068.6 45.7996 1068.6 42.1996 1070.8 39.9996C1073 37.7996 1076.5 37.7996 1078.8 39.8996C1078.8 39.8996 1078.9 39.8996 1078.9 39.9996C1081.1 42.1996 1081.1 45.7996 1078.9 47.9996C1077.7 49.0996 1076.2 49.6996 1074.8 49.6996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1134.1 87.4996C1131 87.4996 1128.4 84.9997 1128.4 81.7997C1128.4 78.5997 1130.9 76.0996 1134.1 76.0996C1137.3 76.0996 1139.8 78.5997 1139.8 81.7997C1139.8 84.9997 1137.3 87.4996 1134.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1104.4 76.3997C1103.3 76.3997 1102.2 76.0997 1101.3 75.3997C1101.2 75.2997 1101.1 75.2996 1101 75.1996C1098.5 73.2996 1098 69.7997 1099.9 67.2997C1101.7 64.7997 1105.2 64.2996 1107.7 66.0996C1110.2 67.8996 1110.9 71.2997 1109.2 73.8997C1108.1 75.4997 1106.3 76.3997 1104.4 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1163.8 76.4C1162 76.4 1160.2 75.5 1159.1 73.9C1157.4 71.3 1158.1 67.8999 1160.6 66.0999C1163.1 64.3999 1166.5 64.9 1168.4 67.3C1170.3 69.8 1169.8 73.3999 1167.3 75.1999C1167.2 75.2999 1167.1 75.3 1167 75.4C1166 76.1 1164.9 76.4 1163.8 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1134.1 87.4996C1131 87.4996 1128.4 84.9997 1128.4 81.7997C1128.4 78.5997 1130.9 76.0996 1134.1 76.0996C1137.3 76.0996 1139.8 78.5997 1139.8 81.7997C1139.8 84.9997 1137.3 87.4996 1134.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1193.5 49.6999C1192 49.6999 1190.6 49.0999 1189.5 47.9999C1187.3 45.7999 1187.3 42.2999 1189.4 40.0999C1191.4 37.9999 1194.7 37.6999 1197.1 39.5999C1199.5 41.5999 1199.9 45.0999 1198 47.5999C1197.9 47.7999 1197.7 47.9999 1197.5 48.0999C1196.3 49.0999 1194.9 49.6999 1193.5 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1163.8 76.4001C1162 76.4001 1160.3 75.6001 1159.2 74.0001C1157.4 71.4001 1158 67.9001 1160.6 66.1001C1160.6 66.1001 1160.7 66.1001 1160.7 66.0001C1163.3 64.3001 1166.7 64.9001 1168.5 67.5001C1170.3 70.1001 1169.7 73.6001 1167.1 75.4001C1167.1 75.4001 1167 75.4001 1167 75.5001C1166 76.1001 1164.9 76.4001 1163.8 76.4001Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1223.2 23.0005C1221.4 23.0005 1219.7 22.2005 1218.6 20.6005C1216.8 18.1005 1217.4 14.6006 1219.9 12.8006C1222.2 11.1006 1225.6 11.4005 1227.5 13.6005C1229.6 16.0005 1229.3 19.5005 1227 21.6005C1226.8 21.7005 1226.6 21.9005 1226.5 22.0005C1225.4 22.6005 1224.3 23.0005 1223.2 23.0005Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1193.5 49.7006C1192 49.7006 1190.6 49.1006 1189.5 48.0006C1187.3 45.8006 1187.3 42.2006 1189.5 40.0006C1189.5 40.0006 1189.5 40.0007 1189.6 39.9007C1191.8 37.7007 1195.4 37.8006 1197.6 40.0006C1199.8 42.2006 1199.8 45.8006 1197.6 48.0006C1197.6 48.0006 1197.6 48.0006 1197.5 48.1006C1196.4 49.1006 1194.9 49.7006 1193.5 49.7006Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1252.9 11.9C1249.8 11.9 1247.2 9.39995 1247.2 6.19995C1247.2 2.99995 1249.7 0.5 1252.9 0.5C1256.1 0.5 1258.6 2.99995 1258.6 6.19995C1258.6 9.39995 1256 11.9 1252.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1223.2 22.8999C1221.5 22.8999 1219.8 22.0999 1218.7 20.5999C1216.8 18.0999 1217.3 14.4999 1219.8 12.6999C1219.9 12.5999 1220 12.5999 1220.1 12.4999C1222.7 10.7999 1226.2 11.4999 1228 14.0999C1229.7 16.6999 1229 20.0999 1226.5 21.8999C1225.5 22.5999 1224.3 22.8999 1223.2 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1282.6 22.8999C1281.5 22.8999 1280.3 22.5999 1279.4 21.8999C1276.9 20.0999 1276.2 16.6999 1277.9 14.0999C1279.6 11.4999 1283.2 10.7999 1285.8 12.4999C1285.9 12.5999 1286 12.5999 1286.1 12.6999C1288.6 14.5999 1289.1 18.0999 1287.2 20.5999C1286 22.1999 1284.3 22.8999 1282.6 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1252.9 11.9C1249.8 11.9 1247.2 9.39995 1247.2 6.19995C1247.2 2.99995 1249.7 0.5 1252.9 0.5C1256.1 0.5 1258.6 2.99995 1258.6 6.19995C1258.6 9.39995 1256 11.9 1252.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1312.3 49.7C1310.6 49.7 1309 49 1307.9 47.6L1312.3 44L1316.3 40C1316.4 40.1 1316.6 40.3 1316.7 40.5C1318.7 42.9 1318.3 46.5 1315.8 48.5C1314.7 49.3 1313.5 49.7 1312.3 49.7Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1282.6 22.9998C1281.4 22.9998 1280.2 22.5999 1279.2 21.8999C1276.7 20.0999 1276.1 16.5998 1277.9 14.0998C1279.7 11.5998 1283.2 10.8998 1285.7 12.6998C1285.9 12.7998 1286.1 12.9998 1286.2 13.0998C1288.6 15.1998 1288.8 18.6998 1286.7 21.0998C1285.7 22.2998 1284.2 22.9998 1282.6 22.9998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1341.9 76.4002C1340.7 76.4002 1339.5 76.0002 1338.5 75.3002C1336 73.5002 1335.4 70.0002 1337.2 67.5002C1339 65.0002 1342.5 64.3002 1345 66.1002C1345.2 66.2002 1345.4 66.4002 1345.5 66.5002C1347.9 68.6002 1348.1 72.1002 1346 74.5002C1345.1 75.7002 1343.5 76.4002 1341.9 76.4002Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1312.3 49.7C1310.6 49.7 1309 49 1307.9 47.6L1312.3 44L1316.3 40C1316.4 40.1 1316.6 40.3 1316.7 40.5C1318.7 42.9 1318.3 46.5 1315.8 48.5C1314.8 49.3 1313.5 49.7 1312.3 49.7Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1371.6 87.4996C1368.5 87.4996 1365.9 84.9997 1365.9 81.7997C1365.9 78.5997 1368.4 76.0996 1371.6 76.0996C1374.8 76.0996 1377.3 78.5997 1377.3 81.7997C1377.3 84.9997 1374.8 87.4996 1371.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1341.9 76.3997C1340.8 76.3997 1339.7 76.0997 1338.8 75.3997C1338.7 75.2997 1338.6 75.2996 1338.5 75.1996C1336 73.2996 1335.5 69.7997 1337.4 67.2997C1339.2 64.7997 1342.7 64.2996 1345.2 66.0996C1347.7 67.8996 1348.4 71.2997 1346.7 73.8997C1345.6 75.4997 1343.8 76.3997 1341.9 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1401.3 76.4C1399.5 76.4 1397.7 75.5 1396.6 73.9C1394.9 71.3 1395.6 67.8999 1398.1 66.0999C1400.6 64.3999 1404 64.9 1405.9 67.3C1407.8 69.8 1407.3 73.3999 1404.8 75.1999C1404.7 75.2999 1404.6 75.3 1404.5 75.4C1403.5 76.1 1402.4 76.4 1401.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1371.6 87.4996C1368.5 87.4996 1365.9 84.9997 1365.9 81.7997C1365.9 78.5997 1368.4 76.0996 1371.6 76.0996C1374.8 76.0996 1377.3 78.5997 1377.3 81.7997C1377.3 84.9997 1374.8 87.4996 1371.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1431 49.6998C1429.8 49.6998 1428.5 49.2998 1427.5 48.4998C1425.1 46.4998 1424.7 42.9998 1426.6 40.4998C1426.7 40.3998 1426.8 40.2998 1426.9 40.1998C1428.9 37.9998 1432.3 37.7998 1434.6 39.5998C1437 41.5998 1437.4 45.0998 1435.5 47.5998C1435.4 47.6998 1435.3 47.7998 1435.2 47.8998C1434 49.0998 1432.5 49.6998 1431 49.6998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1401.3 76.4C1399.5 76.4 1397.8 75.6 1396.7 74C1394.9 71.5 1395.5 67.9999 1398 66.1999C1400.3 64.4999 1403.7 64.8 1405.6 67C1407.7 69.4 1407.4 72.9 1405.1 75C1404.9 75.1 1404.7 75.3 1404.6 75.4C1403.5 76.1 1402.4 76.4 1401.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1460.7 22.9996C1459.1 22.9996 1457.6 22.2996 1456.4 21.0996C1454.3 18.6996 1454.6 15.1996 1456.9 13.0996C1457 12.9996 1457.1 12.8996 1457.2 12.7996C1459.5 10.9996 1462.9 11.3996 1464.9 13.5996C1467 15.9996 1466.7 19.4996 1464.4 21.5996C1464.3 21.6996 1464.2 21.7996 1464.1 21.8996C1463.1 22.5996 1461.9 22.9996 1460.7 22.9996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1431 49.6999C1429.5 49.6999 1428.1 49.0999 1427 47.9999C1424.8 45.7999 1424.8 42.2999 1426.9 40.0999C1428.9 37.9999 1432.2 37.6999 1434.6 39.5999C1437 41.5999 1437.4 45.0999 1435.5 47.5999C1435.4 47.7999 1435.2 47.9999 1435 48.0999C1433.9 49.0999 1432.4 49.6999 1431 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1490.4 11.9C1487.3 11.9 1484.7 9.39995 1484.7 6.19995C1484.7 2.99995 1487.2 0.5 1490.4 0.5C1493.6 0.5 1496.1 2.99995 1496.1 6.19995C1496.1 9.39995 1493.5 11.9 1490.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1460.7 22.8999C1459 22.8999 1457.3 22.0999 1456.2 20.5999C1454.3 18.0999 1454.8 14.4999 1457.3 12.6999C1457.4 12.5999 1457.5 12.5999 1457.6 12.4999C1460.2 10.7999 1463.7 11.4999 1465.5 14.0999C1467.2 16.6999 1466.5 20.0999 1464 21.8999C1463 22.5999 1461.8 22.8999 1460.7 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1520.1 22.8999C1519 22.8999 1517.8 22.5999 1516.9 21.8999C1514.4 20.0999 1513.7 16.6999 1515.4 14.0999C1517.1 11.4999 1520.7 10.7999 1523.3 12.4999C1523.4 12.5999 1523.5 12.5999 1523.6 12.6999C1526.1 14.5999 1526.6 18.0999 1524.7 20.5999C1523.5 22.1999 1521.8 22.8999 1520.1 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1490.4 11.9C1487.3 11.9 1484.7 9.39995 1484.7 6.19995C1484.7 2.99995 1487.2 0.5 1490.4 0.5C1493.6 0.5 1496.1 2.99995 1496.1 6.19995C1496.1 9.39995 1493.5 11.9 1490.4 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1545.8 48.0997C1545.6 47.8997 1545.5 47.7997 1545.3 47.5997C1543.3 45.1997 1543.7 41.5997 1546.2 39.5997C1548.6 37.5997 1552.2 37.9998 1554.2 40.4998L1549.8 44.0997L1545.8 48.0997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1520.1 22.9998C1518.9 22.9998 1517.7 22.5999 1516.7 21.8999C1514.2 20.0999 1513.6 16.5998 1515.4 14.0998C1517.2 11.5998 1520.7 10.8998 1523.2 12.6998C1523.4 12.7998 1523.6 12.9998 1523.7 13.0998C1526.1 15.1998 1526.3 18.6998 1524.2 21.0998C1523.2 22.2998 1521.7 22.9998 1520.1 22.9998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1579.4 76.4C1578.3 76.4 1577.2 76.1 1576.2 75.4C1576 75.3 1575.8 75.1 1575.7 75C1573.3 72.9 1573.1 69.4 1575.2 67C1577.2 64.8 1580.5 64.4 1582.8 66.2C1585.3 68 1585.9 71.5 1584.1 74C1583 75.6 1581.2 76.4 1579.4 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1549.8 49.7C1548.1 49.7 1546.5 49 1545.4 47.6L1549.8 44L1553.8 40C1553.9 40.1 1554.1 40.3 1554.2 40.5C1556.2 42.9 1555.8 46.5 1553.3 48.5C1552.3 49.3 1551 49.7 1549.8 49.7Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1609.1 87.4996C1606 87.4996 1603.4 84.9997 1603.4 81.7997C1603.4 78.5997 1605.9 76.0996 1609.1 76.0996C1612.3 76.0996 1614.8 78.5997 1614.8 81.7997C1614.8 84.9997 1612.3 87.4996 1609.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1579.4 76.3997C1578.3 76.3997 1577.2 76.0997 1576.3 75.3997C1576.2 75.2997 1576.1 75.2996 1576 75.1996C1573.5 73.2996 1573 69.7997 1574.9 67.2997C1576.7 64.7997 1580.2 64.2996 1582.7 66.0996C1585.2 67.8996 1585.9 71.2997 1584.2 73.8997C1583.1 75.4997 1581.3 76.3997 1579.4 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1638.8 76.4C1637 76.4 1635.2 75.5 1634.1 73.9C1632.4 71.3 1633.1 67.8999 1635.6 66.0999C1638.1 64.3999 1641.5 64.9 1643.4 67.3C1645.3 69.8 1644.8 73.3999 1642.3 75.1999C1642.2 75.2999 1642.1 75.3 1642 75.4C1641 76.1 1639.9 76.4 1638.8 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1609.1 87.4996C1606 87.4996 1603.4 84.9997 1603.4 81.7997C1603.4 78.5997 1605.9 76.0996 1609.1 76.0996C1612.3 76.0996 1614.8 78.5997 1614.8 81.7997C1614.8 84.9997 1612.3 87.4996 1609.1 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1668.5 49.7002C1667.3 49.7002 1666 49.3003 1665 48.5003C1662.6 46.5003 1662.2 43.0003 1664.1 40.5003C1664.2 40.3003 1664.4 40.1003 1664.6 40.0003C1666.8 37.8003 1670.4 37.9003 1672.6 40.1003C1674.8 42.3003 1674.8 45.8003 1672.7 48.0003C1671.5 49.1003 1670 49.7002 1668.5 49.7002Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1638.8 76.4C1637 76.4 1635.3 75.6 1634.2 74C1632.4 71.5 1633 67.9999 1635.5 66.1999C1637.8 64.4999 1641.2 64.8 1643.1 67C1645.2 69.4 1644.9 72.9 1642.6 75C1642.4 75.1 1642.2 75.3 1642.1 75.4C1641 76.1 1639.9 76.4 1638.8 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1698.2 22.9998C1696.6 22.9998 1695.1 22.2998 1693.9 21.0998C1691.8 18.6998 1692.1 15.1998 1694.4 13.0998C1694.6 12.9998 1694.8 12.7998 1694.9 12.6998C1697.5 10.8998 1701 11.5998 1702.7 14.0998C1704.5 16.5998 1703.9 20.0999 1701.4 21.8999C1700.5 22.5999 1699.4 22.9998 1698.2 22.9998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1668.5 49.6999C1667 49.6999 1665.6 49.0999 1664.5 47.9999C1662.3 45.7999 1662.3 42.2999 1664.4 40.0999C1666.4 37.9999 1669.7 37.6999 1672.1 39.5999C1674.5 41.5999 1674.9 45.0999 1673 47.5999C1672.9 47.7999 1672.7 47.9999 1672.5 48.0999C1671.4 49.0999 1669.9 49.6999 1668.5 49.6999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1727.9 11.9C1724.8 11.9 1722.2 9.39995 1722.2 6.19995C1722.2 2.99995 1724.7 0.5 1727.9 0.5C1731.1 0.5 1733.6 2.99995 1733.6 6.19995C1733.6 9.39995 1731 11.9 1727.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1698.2 22.8999C1696.5 22.8999 1694.8 22.0999 1693.7 20.5999C1691.8 18.0999 1692.3 14.4999 1694.8 12.6999C1694.9 12.5999 1695 12.5999 1695.1 12.4999C1697.7 10.7999 1701.2 11.4999 1703 14.0999C1704.7 16.6999 1704 20.0999 1701.5 21.8999C1700.5 22.5999 1699.3 22.8999 1698.2 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1757.6 22.8999C1756.5 22.8999 1755.3 22.5999 1754.4 21.8999C1751.9 20.0999 1751.2 16.6999 1752.9 14.0999C1754.6 11.4999 1758.2 10.7999 1760.8 12.4999C1760.9 12.5999 1761 12.5999 1761.1 12.6999C1763.6 14.5999 1764.1 18.0999 1762.2 20.5999C1761 22.1999 1759.3 22.8999 1757.6 22.8999Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1727.9 11.9C1724.8 11.9 1722.2 9.39995 1722.2 6.19995C1722.2 2.99995 1724.7 0.5 1727.9 0.5C1731.1 0.5 1733.6 2.99995 1733.6 6.19995C1733.6 9.39995 1731 11.9 1727.9 11.9Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1783.3 48.0997C1783.1 47.8997 1783 47.7997 1782.8 47.5997C1780.8 45.1997 1781.2 41.5997 1783.7 39.5997C1786.1 37.5997 1789.7 37.9998 1791.7 40.4998L1787.3 44.0997L1783.3 48.0997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1757.6 22.9998C1756.4 22.9998 1755.2 22.5999 1754.2 21.8999C1751.7 20.0999 1751.1 16.5998 1752.9 14.0998C1754.7 11.5998 1758.2 10.8998 1760.7 12.6998C1760.9 12.7998 1761.1 12.9998 1761.2 13.0998C1763.6 15.1998 1763.8 18.6998 1761.7 21.0998C1760.7 22.2998 1759.2 22.9998 1757.6 22.9998Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1816.9 76.4C1815.8 76.4 1814.7 76.1 1813.7 75.4C1813.5 75.3 1813.3 75.1 1813.2 75C1810.8 72.9 1810.6 69.4 1812.7 67C1814.7 64.8 1818 64.4 1820.3 66.2C1822.8 68 1823.4 71.5 1821.6 74C1820.5 75.6 1818.7 76.4 1816.9 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1787.3 49.7C1785.6 49.7 1784 49 1782.9 47.6L1787.3 44L1791.3 40C1791.4 40.1 1791.6 40.3 1791.7 40.5C1793.7 42.9 1793.3 46.5 1790.8 48.5C1789.8 49.3 1788.5 49.7 1787.3 49.7Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1846.6 87.4996C1843.5 87.4996 1840.9 84.9997 1840.9 81.7997C1840.9 78.5997 1843.4 76.0996 1846.6 76.0996C1849.8 76.0996 1852.3 78.5997 1852.3 81.7997C1852.3 84.9997 1849.8 87.4996 1846.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1816.9 76.3997C1815.8 76.3997 1814.7 76.0997 1813.8 75.3997C1813.7 75.2997 1813.6 75.2996 1813.5 75.1996C1811 73.2996 1810.5 69.7997 1812.4 67.2997C1814.2 64.7997 1817.7 64.2996 1820.2 66.0996C1822.7 67.8996 1823.4 71.2997 1821.7 73.8997C1820.6 75.4997 1818.8 76.3997 1816.9 76.3997Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1876.3 76.4C1874.5 76.4 1872.7 75.5 1871.6 73.9C1869.9 71.3 1870.6 67.8999 1873.1 66.0999C1875.6 64.3999 1879 64.9 1880.9 67.3C1882.8 69.8 1882.3 73.3999 1879.8 75.1999C1879.7 75.2999 1879.6 75.3 1879.5 75.4C1878.5 76.1 1877.4 76.4 1876.3 76.4Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1846.6 87.4996C1843.5 87.4996 1840.9 84.9997 1840.9 81.7997C1840.9 78.5997 1843.4 76.0996 1846.6 76.0996C1849.8 76.0996 1852.3 78.5997 1852.3 81.7997C1852.3 84.9997 1849.8 87.4996 1846.6 87.4996Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1906 49.7002C1904.8 49.7002 1903.5 49.3003 1902.5 48.5003C1900.1 46.5003 1899.7 43.0003 1901.6 40.5003C1901.7 40.3003 1901.9 40.1003 1902.1 40.0003C1904.3 37.8003 1907.9 37.9003 1910.1 40.1003C1912.3 42.3003 1912.3 45.8003 1910.2 48.0003C1909 49.1003 1907.5 49.7002 1906 49.7002Z", fill: "white" }), /* @__PURE__ */ h.createElement("path", { d: "M1876.3 76.4C1874.5 76.4 1872.8 75.6 1871.7 74C1869.9 71.5 1870.5 67.9999 1873 66.1999C1875.3 64.4999 1878.7 64.8 1880.6 67C1882.7 69.4 1882.4 72.9 1880.1 75C1879.9 75.1 1879.7 75.3 1879.6 75.4C1878.5 76.1 1877.4 76.4 1876.3 76.4Z", fill: "white" }))), Gr = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-auto", viewBox: "0 0 9 58", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("path", { d: "M1.5 33.6703V3.3297L7.5 0.758269V36.2417L1.5 33.6703Z", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M1 38L8 41", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M1 42L8 45", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M1 46L8 49", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M1 50L8 53", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M1 54L8 57", stroke: "#FA0" })), Xr = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-full", viewBox: "0 0 199 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("g", { clipPath: "url(#clip0_7_435)" }, /* @__PURE__ */ h.createElement("path", { d: "M155.972 1.53072L160.58 8.00772L1.17693 8.00772L7.04054 1.53196L8.67103 3.42271L8.82062 3.59617H9.04968L153.55 3.59617H153.746L153.89 3.46273L155.972 1.53072Z", stroke: "#FA0" }), /* @__PURE__ */ h.createElement("path", { d: "M31.5497 1.93656L20.0497 1.93656L10.5497 1.93656L9.04968 0.00386047L154.05 0.00386047L152.05 1.93656L43.0497 1.93656L31.5497 1.93656Z", fill: "#Fa0" })), /* @__PURE__ */ h.createElement("defs", null, /* @__PURE__ */ h.createElement("clipPath", { id: "clip0_7_435" }, /* @__PURE__ */ h.createElement("rect", { width: 9, height: 161, fill: "white", transform: "matrix(0 1 -1 0 161.525 0)" })))), qr = (l) => /* @__PURE__ */ h.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 9", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ h.createElement("path", { d: "M5.87329 1.02452L0.904968 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M11.8416 1.02452L6.87329 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M17.8099 1.02452L12.8416 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M23.7783 1.02452L18.8099 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M29.7466 1.02452L24.7783 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M35.7149 1.02452L30.7466 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M41.6832 1.02452L36.7149 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M47.6516 1.02452L42.6832 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M53.6199 1.02452L48.6515 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M59.5882 1.02452L54.6199 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M65.5565 1.02452L60.5882 7.97547", stroke: "#FA0", strokeWidth: 1.5 }), /* @__PURE__ */ h.createElement("path", { d: "M71.5248 1.02452L66.5565 7.97547", stroke: "#FA0", strokeWidth: 1.5 })), Re = ({ children: l, label: e, limit: t, textSize: r }) => {
  const [i, n] = v1("0");
  return q9(() => {
    const s = setInterval(() => {
      n((a) => {
        const o = parseFloat(a);
        return o < t ? (Math.random() * (t - o) + o).toFixed(1) : (clearInterval(s), a);
      });
    }, 1e3);
    return () => clearInterval(s);
  }, [t]), /* @__PURE__ */ x.jsxs("div", { className: "flex items-center gap-1 w-[100%]", children: [
    /* @__PURE__ */ x.jsx("div", { className: "h-3/4 w-[3%] bg-green-500" }),
    /* @__PURE__ */ x.jsxs(
      "div",
      {
        style: { fontSize: `${r}px`, width: `${r * 15}px` },
        className: "opacity-50",
        children: [
          e,
          i,
          l
        ]
      }
    )
  ] });
}, ai = ({ width: l, height: e }) => {
  const t = _e(null), r = _e(null), [i, n] = v1({ text: 12, header: 24, sidePx: 13 });
  return q9(() => {
    const s = new ResizeObserver((a) => {
      for (const o of a) {
        const f = o.target.getBoundingClientRect().width;
        let u;
        f < 300 ? u = { text: 4, header: 10, sidePx: 13 } : f >= 300 && f < 600 ? u = { text: 5, header: 18, sidePx: 16 } : f >= 600 && f < 900 ? u = { text: 10, header: 32, sidePx: 25 } : u = { text: 12, header: 38, sidePx: 28 }, n(u);
      }
    });
    return r.current && s.observe(r.current), r.current && D.from(r.current, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    }), t.current && (D.to("#mask-rect", {
      x: 931,
      // Двигаем маску справа налево
      duration: 8,
      // Скорость анимации
      ease: "linear",
      // Плавное движение
      onComplete: () => {
        D.to("#loading-content", {
          opacity: 0.5,
          // Затемняем немного
          duration: 0.8,
          // Длительность одного цикла пульсации
          repeat: -1,
          // Бесконечно
          yoyo: !0,
          // Возвращаем обратно
          ease: "sine.inOut"
          // Мягкое появление и исчезновение
        });
      }
    }), D.to("#solar-graph", {
      x: "-=1300",
      // Move the wave group to the left for smooth scrolling
      duration: 5,
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: D.utils.unitize((a) => parseFloat(a) % 1300)
        // Keep x within range
      }
    })), () => s.disconnect();
  }, []), /* @__PURE__ */ x.jsxs(
    "div",
    {
      ref: r,
      style: { width: l, height: e },
      className: "font-[Oxanium] text-white flex gap-1 flex-row",
      children: [
        /* @__PURE__ */ x.jsx(
          "div",
          {
            className: "flex flex-col justify-center",
            style: { minWidth: `${i.sidePx}px`, maxWidth: `${i.sidePx}px` },
            children: /* @__PURE__ */ x.jsx(Gr, {})
          }
        ),
        /* @__PURE__ */ x.jsxs("div", { className: "flex-col flex", children: [
          /* @__PURE__ */ x.jsxs("div", { className: "max-h-[10%] flex", children: [
            /* @__PURE__ */ x.jsx("div", { className: "w-[30%]", children: /* @__PURE__ */ x.jsx(qr, {}) }),
            /* @__PURE__ */ x.jsx("div", { className: "w-[70%]", children: /* @__PURE__ */ x.jsx(Xr, {}) })
          ] }),
          /* @__PURE__ */ x.jsxs("div", { className: "flex flex-row h-[70%] p-1 gap-1", children: [
            /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col w-[50%]", children: [
              /* @__PURE__ */ x.jsx("div", { style: { fontSize: `${i.header}px` }, children: "SOLAR ENERGY" }),
              /* @__PURE__ */ x.jsx("div", { className: "h-1/2", children: /* @__PURE__ */ x.jsx($r, {}) })
            ] }),
            /* @__PURE__ */ x.jsxs("div", { className: "flex flex-row p-1 justify-between w-[50%]", children: [
              /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col h-full justify-between w-1/3", children: [
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 50.5, label: "SPEC-" }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 100, label: "PV-CAP " }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 100, label: "SOL-CHR ", children: "%" })
              ] }),
              /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col h-full justify-between w-1/3", children: [
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 9.8, label: "PHOTON-INT " }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 220, label: "VOLT-REG " }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 14.5, label: "AUX-ENG " })
              ] }),
              /* @__PURE__ */ x.jsxs("div", { className: "flex flex-col h-full justify-between w-1/3", children: [
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 99.8, label: "SYN-SAT " }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 99.9, label: "BATT-OPT ", children: "%" }),
                /* @__PURE__ */ x.jsx(Re, { textSize: i.text, limit: 50.5, label: "ION-FREQ " })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ x.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ x.jsx(Ur, { ref: t }) })
        ] })
      ]
    }
  );
};
export {
  ti as ButtonFinger,
  ni as Card,
  si as CircleIndicator,
  Qr as EvaBorderPanel,
  ri as EvaOptionList,
  Kr as EvaProgressBar,
  Br as EvaTilePanel,
  ei as EvaUnitBox,
  ii as GeometricLayout,
  ai as LoadingBattery
};
