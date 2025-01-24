import * as A from "react";
import yn, { useRef as Kr, useMemo as Cn, createElement as bn } from "react";
var je = { exports: {} }, ve = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function Tn() {
  if (Qr) return ve;
  Qr = 1;
  var l = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function e(r, i, n) {
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
  return ve.Fragment = t, ve.jsx = e, ve.jsxs = e, ve;
}
var ye = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function wn() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && function() {
    function l(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === ct ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case w:
          return "Fragment";
        case x:
          return "Portal";
        case E:
          return "Profiler";
        case k:
          return "StrictMode";
        case D:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case R:
            return (h.displayName || "Context") + ".Provider";
          case b:
            return (h._context.displayName || "Context") + ".Consumer";
          case z:
            var S = h.render;
            return h = h.displayName, h || (h = S.displayName || S.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case X:
            return S = h.displayName || null, S !== null ? S : l(h.type) || "Memo";
          case U:
            S = h._payload, h = h._init;
            try {
              return l(h(S));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function e(h) {
      try {
        t(h);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var O = S.error, L = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return O.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), t(h);
      }
    }
    function r() {
    }
    function i() {
      if (it === 0) {
        Tt = console.log, Ir = console.info, Wr = console.warn, Yr = console.error, Ur = console.group, $r = console.groupCollapsed, Gr = console.groupEnd;
        var h = {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        };
        Object.defineProperties(console, {
          info: h,
          log: h,
          warn: h,
          error: h,
          group: h,
          groupCollapsed: h,
          groupEnd: h
        });
      }
      it++;
    }
    function n() {
      if (it--, it === 0) {
        var h = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: ht({}, h, { value: Tt }),
          info: ht({}, h, { value: Ir }),
          warn: ht({}, h, { value: Wr }),
          error: ht({}, h, { value: Yr }),
          group: ht({}, h, { value: Ur }),
          groupCollapsed: ht({}, h, { value: $r }),
          groupEnd: ht({}, h, { value: Gr })
        });
      }
      0 > it && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(h) {
      if (Je === void 0)
        try {
          throw Error();
        } catch (O) {
          var S = O.stack.trim().match(/\n( *(at )?)/);
          Je = S && S[1] || "", Xr = -1 < O.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < O.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Je + h + Xr;
    }
    function a(h, S) {
      if (!h || Ke) return "";
      var O = Qe.get(h);
      if (O !== void 0) return O;
      Ke = !0, O = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var L = null;
      L = xt.H, xt.H = null, i();
      try {
        var Q = {
          DetermineComponentFrameRoot: function() {
            try {
              if (S) {
                var Ft = function() {
                  throw Error();
                };
                if (Object.defineProperty(Ft.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Ft, []);
                  } catch (Rt) {
                    var De = Rt;
                  }
                  Reflect.construct(h, [], Ft);
                } else {
                  try {
                    Ft.call();
                  } catch (Rt) {
                    De = Rt;
                  }
                  h.call(Ft.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Rt) {
                  De = Rt;
                }
                (Ft = h()) && typeof Ft.catch == "function" && Ft.catch(function() {
                });
              }
            } catch (Rt) {
              if (Rt && De && typeof Rt.stack == "string")
                return [Rt.stack, De.stack];
            }
            return [null, null];
          }
        };
        Q.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var I = Object.getOwnPropertyDescriptor(
          Q.DetermineComponentFrameRoot,
          "name"
        );
        I && I.configurable && Object.defineProperty(
          Q.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var M = Q.DetermineComponentFrameRoot(), Nt = M[0], ae = M[1];
        if (Nt && ae) {
          var nt = Nt.split(`
`), Xt = ae.split(`
`);
          for (M = I = 0; I < nt.length && !nt[I].includes(
            "DetermineComponentFrameRoot"
          ); )
            I++;
          for (; M < Xt.length && !Xt[M].includes(
            "DetermineComponentFrameRoot"
          ); )
            M++;
          if (I === nt.length || M === Xt.length)
            for (I = nt.length - 1, M = Xt.length - 1; 1 <= I && 0 <= M && nt[I] !== Xt[M]; )
              M--;
          for (; 1 <= I && 0 <= M; I--, M--)
            if (nt[I] !== Xt[M]) {
              if (I !== 1 || M !== 1)
                do
                  if (I--, M--, 0 > M || nt[I] !== Xt[M]) {
                    var xe = `
` + nt[I].replace(
                      " at new ",
                      " at "
                    );
                    return h.displayName && xe.includes("<anonymous>") && (xe = xe.replace("<anonymous>", h.displayName)), typeof h == "function" && Qe.set(h, xe), xe;
                  }
                while (1 <= I && 0 <= M);
              break;
            }
        }
      } finally {
        Ke = !1, xt.H = L, n(), Error.prepareStackTrace = O;
      }
      return nt = (nt = h ? h.displayName || h.name : "") ? s(nt) : "", typeof h == "function" && Qe.set(h, nt), nt;
    }
    function o(h) {
      if (h == null) return "";
      if (typeof h == "function") {
        var S = h.prototype;
        return a(
          h,
          !(!S || !S.isReactComponent)
        );
      }
      if (typeof h == "string") return s(h);
      switch (h) {
        case D:
          return s("Suspense");
        case j:
          return s("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case z:
            return h = a(h.render, !1), h;
          case X:
            return o(h.type);
          case U:
            S = h._payload, h = h._init;
            try {
              return o(h(S));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var h = xt.A;
      return h === null ? null : h.getOwner();
    }
    function f(h) {
      if (zt.call(h, "key")) {
        var S = Object.getOwnPropertyDescriptor(h, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function _(h, S) {
      function O() {
        Zr || (Zr = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      O.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: O,
        configurable: !0
      });
    }
    function d() {
      var h = l(this.type);
      return qr[h] || (qr[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function p(h, S, O, L, Q, I) {
      return O = I.ref, h = {
        $$typeof: C,
        type: h,
        key: S,
        props: I,
        _owner: Q
      }, (O !== void 0 ? O : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function m(h, S, O, L, Q, I) {
      if (typeof h == "string" || typeof h == "function" || h === w || h === E || h === k || h === D || h === j || h === $ || typeof h == "object" && h !== null && (h.$$typeof === U || h.$$typeof === X || h.$$typeof === R || h.$$typeof === b || h.$$typeof === z || h.$$typeof === Mt || h.getModuleId !== void 0)) {
        var M = S.children;
        if (M !== void 0)
          if (L)
            if (se(M)) {
              for (L = 0; L < M.length; L++)
                c(M[L], h);
              Object.freeze && Object.freeze(M);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(M, h);
      } else
        M = "", (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), h === null ? L = "null" : se(h) ? L = "array" : h !== void 0 && h.$$typeof === C ? (L = "<" + (l(h.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : L = typeof h, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          L,
          M
        );
      if (zt.call(S, "key")) {
        M = l(h);
        var Nt = Object.keys(S).filter(function(nt) {
          return nt !== "key";
        });
        L = 0 < Nt.length ? "{key: someKey, " + Nt.join(": ..., ") + ": ...}" : "{key: someKey}", Hr[M + L] || (Nt = 0 < Nt.length ? "{" + Nt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          M,
          Nt,
          M
        ), Hr[M + L] = !0);
      }
      if (M = null, O !== void 0 && (e(O), M = "" + O), f(S) && (e(S.key), M = "" + S.key), "key" in S) {
        O = {};
        for (var ae in S)
          ae !== "key" && (O[ae] = S[ae]);
      } else O = S;
      return M && _(
        O,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), p(h, M, I, Q, u(), O);
    }
    function c(h, S) {
      if (typeof h == "object" && h && h.$$typeof !== vn) {
        if (se(h))
          for (var O = 0; O < h.length; O++) {
            var L = h[O];
            g(L) && v(L, S);
          }
        else if (g(h))
          h._store && (h._store.validated = 1);
        else if (h === null || typeof h != "object" ? O = null : (O = Z && h[Z] || h["@@iterator"], O = typeof O == "function" ? O : null), typeof O == "function" && O !== h.entries && (O = O.call(h), O !== h))
          for (; !(h = O.next()).done; )
            g(h.value) && v(h.value, S);
      }
    }
    function g(h) {
      return typeof h == "object" && h !== null && h.$$typeof === C;
    }
    function v(h, S) {
      if (h._store && !h._store.validated && h.key == null && (h._store.validated = 1, S = y(S), !Jr[S])) {
        Jr[S] = !0;
        var O = "";
        h && h._owner != null && h._owner !== u() && (O = null, typeof h._owner.tag == "number" ? O = l(h._owner.type) : typeof h._owner.name == "string" && (O = h._owner.name), O = " It was passed a child from " + O + ".");
        var L = xt.getCurrentStack;
        xt.getCurrentStack = function() {
          var Q = o(h.type);
          return L && (Q += L() || ""), Q;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          S,
          O
        ), xt.getCurrentStack = L;
      }
    }
    function y(h) {
      var S = "", O = u();
      return O && (O = l(O.type)) && (S = `

Check the render method of \`` + O + "`."), S || (h = l(h)) && (S = `

Check the top-level render call using <` + h + ">."), S;
    }
    var T = yn, C = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), R = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Z = Symbol.iterator, ct = Symbol.for("react.client.reference"), xt = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, zt = Object.prototype.hasOwnProperty, ht = Object.assign, Mt = Symbol.for("react.client.reference"), se = Array.isArray, it = 0, Tt, Ir, Wr, Yr, Ur, $r, Gr;
    r.__reactDisabledLog = !0;
    var Je, Xr, Ke = !1, Qe = new (typeof WeakMap == "function" ? WeakMap : Map)(), vn = Symbol.for("react.client.reference"), Zr, qr = {}, Hr = {}, Jr = {};
    ye.Fragment = w, ye.jsx = function(h, S, O, L, Q) {
      return m(h, S, O, !1, L, Q);
    }, ye.jsxs = function(h, S, O, L, Q) {
      return m(h, S, O, !0, L, Q);
    };
  }()), ye;
}
var ei;
function kn() {
  return ei || (ei = 1, process.env.NODE_ENV === "production" ? je.exports = Tn() : je.exports = wn()), je.exports;
}
var P = kn();
const $s = ({
  children: l,
  mode: t = "warning",
  pulseAnimation: e = !0
}) => /* @__PURE__ */ P.jsx("div", { className: `piece ${e && "animate-pulse"}`, children: /* @__PURE__ */ P.jsx(
  "div",
  {
    className: `glowedBorder ${t === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${t} label`,
    children: l
  }
) }), Gs = ({ barsCount: l, currentBarIndex: t }) => {
  function e() {
    const r = [];
    for (let i = 0; i < l; i++)
      r.push(
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < t ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ P.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${l * 10}px` }, children: [
    /* @__PURE__ */ P.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ P.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ P.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ P.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ P.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ P.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: e() }),
    /* @__PURE__ */ P.jsx("div", { className: "h-[15px]" })
  ] });
}, Xs = ({ unitNumber: l, subjectName: t }) => /* @__PURE__ */ P.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ P.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ P.jsx("div", { className: "text-2xl font-[600] label", children: l }),
  /* @__PURE__ */ P.jsx("div", { className: "text-xl font-[400] label", children: t })
] }), En = (l) => /* @__PURE__ */ A.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...l }, /* @__PURE__ */ A.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ A.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ A.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ A.createElement("rect", { width: 80, height: 80, fill: "white" }))));
function At(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function vi(l, t) {
  l.prototype = Object.create(t.prototype), l.prototype.constructor = l, l.__proto__ = t;
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
var mt = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _e = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, wr, et, B, yt = 1e8, V = 1 / yt, ur = Math.PI * 2, Sn = ur / 4, On = 0, yi = Math.sqrt, Pn = Math.cos, Mn = Math.sin, K = function(t) {
  return typeof t == "string";
}, G = function(t) {
  return typeof t == "function";
}, Dt = function(t) {
  return typeof t == "number";
}, kr = function(t) {
  return typeof t > "u";
}, Pt = function(t) {
  return typeof t == "object";
}, at = function(t) {
  return t !== !1;
}, Er = function() {
  return typeof window < "u";
}, ze = function(t) {
  return G(t) || K(t);
}, Ci = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, rt = Array.isArray, fr = /(?:-?\.?\d|\.)+/gi, bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, le = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, tr = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ti = /[+-]=-?[.\d]+/, wi = /[^,'"\[\]\s]+/gi, Nn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, W, kt, cr, Sr, gt = {}, Ie = {}, ki, Ei = function(t) {
  return (Ie = re(t, gt)) && ft;
}, Or = function(t, e) {
  return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
}, Se = function(t, e) {
  return !e && console.warn(t);
}, Si = function(t, e) {
  return t && (gt[t] = e) && Ie && (Ie[t] = e) || gt;
}, Oe = function() {
  return 0;
}, Rn = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Fe = {
  suppressEvents: !0,
  kill: !1
}, An = {
  suppressEvents: !0
}, Pr = {}, Wt = [], hr = {}, Oi, _t = {}, er = {}, ri = 30, Ve = [], Mr = "", Nr = function(t) {
  var e = t[0], r, i;
  if (Pt(e) || G(e) || (t = [t]), !(r = (e._gsap || {}).harness)) {
    for (i = Ve.length; i-- && !Ve[i].targetTest(e); )
      ;
    r = Ve[i];
  }
  for (i = t.length; i--; )
    t[i] && (t[i]._gsap || (t[i]._gsap = new Ki(t[i], r))) || t.splice(i, 1);
  return t;
}, Kt = function(t) {
  return t._gsap || Nr(Ct(t))[0]._gsap;
}, Pi = function(t, e, r) {
  return (r = t[e]) && G(r) ? t[e]() : kr(r) && t.getAttribute && t.getAttribute(e) || r;
}, ot = function(t, e) {
  return (t = t.split(",")).forEach(e) || t;
}, q = function(t) {
  return Math.round(t * 1e5) / 1e5 || 0;
}, J = function(t) {
  return Math.round(t * 1e7) / 1e7 || 0;
}, fe = function(t, e) {
  var r = e.charAt(0), i = parseFloat(e.substr(2));
  return t = parseFloat(t), r === "+" ? t + i : r === "-" ? t - i : r === "*" ? t * i : t / i;
}, Ln = function(t, e) {
  for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, We = function() {
  var t = Wt.length, e = Wt.slice(0), r, i;
  for (hr = {}, Wt.length = 0, r = 0; r < t; r++)
    i = e[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Mi = function(t, e, r, i) {
  Wt.length && !et && We(), t.render(e, r, et && e < 0 && (t._initted || t._startAt)), Wt.length && !et && We();
}, Ni = function(t) {
  var e = parseFloat(t);
  return (e || e === 0) && (t + "").match(wi).length < 2 ? e : K(t) ? t.trim() : t;
}, Ri = function(t) {
  return t;
}, bt = function(t, e) {
  for (var r in e)
    r in t || (t[r] = e[r]);
  return t;
}, Dn = function(t) {
  return function(e, r) {
    for (var i in r)
      i in e || i === "duration" && t || i === "ease" || (e[i] = r[i]);
  };
}, re = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, ii = function l(t, e) {
  for (var r in e)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (t[r] = Pt(e[r]) ? l(t[r] || (t[r] = {}), e[r]) : e[r]);
  return t;
}, Ye = function(t, e) {
  var r = {}, i;
  for (i in t)
    i in e || (r[i] = t[i]);
  return r;
}, we = function(t) {
  var e = t.parent || W, r = t.keyframes ? Dn(rt(t.keyframes)) : bt;
  if (at(t.inherit))
    for (; e; )
      r(t, e.vars.defaults), e = e.parent || e._dp;
  return t;
}, jn = function(t, e) {
  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; )
    ;
  return r < 0;
}, Ai = function(t, e, r, i, n) {
  var s = t[i], a;
  if (n)
    for (a = e[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
}, Ze = function(t, e, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = e._prev, s = e._next;
  n ? n._next = s : t[r] === e && (t[r] = s), s ? s._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
}, Ut = function(t, e) {
  t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0;
}, Qt = function(t, e) {
  if (t && (!e || e._end > t._dur || e._start < 0))
    for (var r = t; r; )
      r._dirty = 1, r = r.parent;
  return t;
}, zn = function(t) {
  for (var e = t.parent; e && e.parent; )
    e._dirty = 1, e.totalDuration(), e = e.parent;
  return t;
}, _r = function(t, e, r, i) {
  return t._startAt && (et ? t._startAt.revert(Fe) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i));
}, Fn = function l(t) {
  return !t || t._ts && l(t.parent);
}, ni = function(t) {
  return t._repeat ? de(t._tTime, t = t.duration() + t._rDelay) * t : 0;
}, de = function(t, e) {
  var r = Math.floor(t /= e);
  return t && r === t ? r - 1 : r;
}, Ue = function(t, e) {
  return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur);
}, qe = function(t) {
  return t._end = J(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
}, He = function(t, e) {
  var r = t._dp;
  return r && r.smoothChildTiming && t._ts && (t._start = J(r._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), qe(t), r._dirty || Qt(r, t)), t;
}, Li = function(t, e) {
  var r;
  if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ue(t.rawTime(), e), (!e._dur || Le(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), Qt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
    if (t._dur < t.duration())
      for (r = t; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    t._zTime = -V;
  }
}, Et = function(t, e, r, i) {
  return e.parent && Ut(e), e._start = J((Dt(r) ? r : r || t !== W ? vt(t, r, e) : t._time) + e._delay), e._end = J(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), Ai(t, e, "_first", "_last", t._sort ? "_start" : 0), dr(e) || (t._recent = e), i || Li(t, e), t._ts < 0 && He(t, t._tTime), t;
}, Di = function(t, e) {
  return (gt.ScrollTrigger || Or("scrollTrigger", e)) && gt.ScrollTrigger.create(e, t);
}, ji = function(t, e, r, i, n) {
  if (Ar(t, e, n), !t._initted)
    return 1;
  if (!r && t._pt && !et && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Oi !== dt.frame)
    return Wt.push(t), t._lazy = [n, i], 1;
}, Vn = function l(t) {
  var e = t.parent;
  return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || l(e));
}, dr = function(t) {
  var e = t.data;
  return e === "isFromStart" || e === "isStart";
}, Bn = function(t, e, r, i) {
  var n = t.ratio, s = e < 0 || !e && (!t._start && Vn(t) && !(!t._initted && dr(t)) || (t._ts < 0 || t._dp._ts < 0) && !dr(t)) ? 0 : 1, a = t._rDelay, o = 0, u, f, _;
  if (a && t._repeat && (o = Le(0, t._tDur, e), f = de(o, a), t._yoyo && f & 1 && (s = 1 - s), f !== de(t._tTime, a) && (n = 1 - s, t.vars.repeatRefresh && t._initted && t.invalidate())), s !== n || et || i || t._zTime === V || !e && t._zTime) {
    if (!t._initted && ji(t, e, i, r, o))
      return;
    for (_ = t._zTime, t._zTime = e || (r ? V : 0), r || (r = e && !_), t.ratio = s, t._from && (s = 1 - s), t._time = 0, t._tTime = o, u = t._pt; u; )
      u.r(s, u.d), u = u._next;
    e < 0 && _r(t, e, r, !0), t._onUpdate && !r && pt(t, "onUpdate"), o && t._repeat && !r && t.parent && pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === s && (s && Ut(t, 1), !r && !et && (pt(t, s ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
  } else t._zTime || (t._zTime = e);
}, In = function(t, e, r) {
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
}, pe = function(t, e, r, i) {
  var n = t._repeat, s = J(e) || 0, a = t._tTime / t._tDur;
  return a && !i && (t._time *= s / t._dur), t._dur = s, t._tDur = n ? n < 0 ? 1e10 : J(s * (n + 1) + t._rDelay * n) : s, a > 0 && !i && He(t, t._tTime = t._tDur * a), t.parent && qe(t), r || Qt(t.parent, t), t;
}, si = function(t) {
  return t instanceof st ? Qt(t) : pe(t, t._dur);
}, Wn = {
  _start: 0,
  endTime: Oe,
  totalDuration: Oe
}, vt = function l(t, e, r) {
  var i = t.labels, n = t._recent || Wn, s = t.duration() >= yt ? n.endTime(!1) : t._dur, a, o, u;
  return K(e) && (isNaN(e) || e in i) ? (o = e.charAt(0), u = e.substr(-1) === "%", a = e.indexOf("="), o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")), (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (e in i || (i[e] = s), i[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)), u && r && (o = o / 100 * (rt(r) ? r[0] : r).totalDuration()), a > 1 ? l(t, e.substr(0, a - 1), r) + o : s + o)) : e == null ? s : +e;
}, ke = function(t, e, r) {
  var i = Dt(e[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
  if (i && (s.duration = e[1]), s.parent = r, t) {
    for (a = s, o = r; o && !("immediateRender" in a); )
      a = o.vars.defaults || {}, o = at(o.vars.inherit) && o.parent;
    s.immediateRender = at(a.immediateRender), t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1];
  }
  return new H(e[0], s, e[n + 1]);
}, Gt = function(t, e) {
  return t || t === 0 ? e(t) : e;
}, Le = function(t, e, r) {
  return r < t ? t : r > e ? e : r;
}, tt = function(t, e) {
  return !K(t) || !(e = Nn.exec(t)) ? "" : e[1];
}, Yn = function(t, e, r) {
  return Gt(r, function(i) {
    return Le(t, e, i);
  });
}, pr = [].slice, zi = function(t, e) {
  return t && Pt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Pt(t[0])) && !t.nodeType && t !== kt;
}, Un = function(t, e, r) {
  return r === void 0 && (r = []), t.forEach(function(i) {
    var n;
    return K(i) && !e || zi(i, 1) ? (n = r).push.apply(n, Ct(i)) : r.push(i);
  }) || r;
}, Ct = function(t, e, r) {
  return B && !e && B.selector ? B.selector(t) : K(t) && !r && (cr || !me()) ? pr.call((e || Sr).querySelectorAll(t), 0) : rt(t) ? Un(t, r) : zi(t) ? pr.call(t, 0) : t ? [t] : [];
}, mr = function(t) {
  return t = Ct(t)[0] || Se("Invalid scope") || {}, function(e) {
    var r = t.current || t.nativeElement || t;
    return Ct(e, r.querySelectorAll ? r : r === t ? Se("Invalid scope") || Sr.createElement("div") : t);
  };
}, Fi = function(t) {
  return t.sort(function() {
    return 0.5 - Math.random();
  });
}, Vi = function(t) {
  if (G(t))
    return t;
  var e = Pt(t) ? t : {
    each: t
  }, r = te(e.ease), i = e.from || 0, n = parseFloat(e.base) || 0, s = {}, a = i > 0 && i < 1, o = isNaN(i) || a, u = e.axis, f = i, _ = i;
  return K(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && o && (f = i[0], _ = i[1]), function(d, p, m) {
    var c = (m || e).length, g = s[c], v, y, T, C, x, w, k, E, b;
    if (!g) {
      if (b = e.grid === "auto" ? 0 : (e.grid || [1, yt])[1], !b) {
        for (k = -yt; k < (k = m[b++].getBoundingClientRect().left) && b < c; )
          ;
        b < c && b--;
      }
      for (g = s[c] = [], v = o ? Math.min(b, c) * f - 0.5 : i % b, y = b === yt ? 0 : o ? c * _ / b - 0.5 : i / b | 0, k = 0, E = yt, w = 0; w < c; w++)
        T = w % b - v, C = y - (w / b | 0), g[w] = x = u ? Math.abs(u === "y" ? C : T) : yi(T * T + C * C), x > k && (k = x), x < E && (E = x);
      i === "random" && Fi(g), g.max = k - E, g.min = E, g.v = c = (parseFloat(e.amount) || parseFloat(e.each) * (b > c ? c - 1 : u ? u === "y" ? c / b : b : Math.max(b, c / b)) || 0) * (i === "edges" ? -1 : 1), g.b = c < 0 ? n - c : n, g.u = tt(e.amount || e.each) || 0, r = r && c < 0 ? qi(r) : r;
    }
    return c = (g[d] - g.min) / g.max || 0, J(g.b + (r ? r(c) : c) * g.v) + g.u;
  };
}, gr = function(t) {
  var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
  return function(r) {
    var i = J(Math.round(parseFloat(r) / t) * t * e);
    return (i - i % 1) / e + (Dt(r) ? 0 : tt(r));
  };
}, Bi = function(t, e) {
  var r = rt(t), i, n;
  return !r && Pt(t) && (i = r = t.radius || yt, t.values ? (t = Ct(t.values), (n = !Dt(t[0])) && (i *= i)) : t = gr(t.increment)), Gt(e, r ? G(t) ? function(s) {
    return n = t(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), u = yt, f = 0, _ = t.length, d, p; _--; )
      n ? (d = t[_].x - a, p = t[_].y - o, d = d * d + p * p) : d = Math.abs(t[_] - a), d < u && (u = d, f = _);
    return f = !i || u <= i ? t[f] : s, n || f === s || Dt(s) ? f : f + tt(s);
  } : gr(t));
}, Ii = function(t, e, r, i) {
  return Gt(rt(t) ? !e : r === !0 ? !!(r = 0) : !i, function() {
    return rt(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + r * 0.99)) / r) * r * i) / i;
  });
}, $n = function() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return function(i) {
    return e.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, Gn = function(t, e) {
  return function(r) {
    return t(parseFloat(r)) + (e || tt(r));
  };
}, Xn = function(t, e, r) {
  return Yi(t, e, 0, 1, r);
}, Wi = function(t, e, r) {
  return Gt(r, function(i) {
    return t[~~e(i)];
  });
}, Zn = function l(t, e, r) {
  var i = e - t;
  return rt(t) ? Wi(t, l(0, t.length), e) : Gt(r, function(n) {
    return (i + (n - t) % i) % i + t;
  });
}, qn = function l(t, e, r) {
  var i = e - t, n = i * 2;
  return rt(t) ? Wi(t, l(0, t.length - 1), e) : Gt(r, function(s) {
    return s = (n + (s - t) % n) % n || 0, t + (s > i ? n - s : s);
  });
}, Pe = function(t) {
  for (var e = 0, r = "", i, n, s, a; ~(i = t.indexOf("random(", e)); )
    s = t.indexOf(")", i), a = t.charAt(i + 7) === "[", n = t.substr(i + 7, s - i - 7).match(a ? wi : fr), r += t.substr(e, i - e) + Ii(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), e = s + 1;
  return r + t.substr(e, t.length - e);
}, Yi = function(t, e, r, i, n) {
  var s = e - t, a = i - r;
  return Gt(n, function(o) {
    return r + ((o - t) / s * a || 0);
  });
}, Hn = function l(t, e, r, i) {
  var n = isNaN(t + e) ? 0 : function(p) {
    return (1 - p) * t + p * e;
  };
  if (!n) {
    var s = K(t), a = {}, o, u, f, _, d;
    if (r === !0 && (i = 1) && (r = null), s)
      t = {
        p: t
      }, e = {
        p: e
      };
    else if (rt(t) && !rt(e)) {
      for (f = [], _ = t.length, d = _ - 2, u = 1; u < _; u++)
        f.push(l(t[u - 1], t[u]));
      _--, n = function(m) {
        m *= _;
        var c = Math.min(d, ~~m);
        return f[c](m - c);
      }, r = e;
    } else i || (t = re(rt(t) ? [] : {}, t));
    if (!f) {
      for (o in e)
        Rr.call(a, t, o, "get", e[o]);
      n = function(m) {
        return jr(m, a) || (s ? t.p : t);
      };
    }
  }
  return Gt(r, n);
}, ai = function(t, e, r) {
  var i = t.labels, n = yt, s, a, o;
  for (s in i)
    a = i[s] - e, a < 0 == !!r && a && n > (a = Math.abs(a)) && (o = s, n = a);
  return o;
}, pt = function(t, e, r) {
  var i = t.vars, n = i[e], s = B, a = t._ctx, o, u, f;
  if (n)
    return o = i[e + "Params"], u = i.callbackScope || t, r && Wt.length && We(), a && (B = a), f = o ? n.apply(u, o) : n.call(u), B = s, f;
}, be = function(t) {
  return Ut(t), t.scrollTrigger && t.scrollTrigger.kill(!!et), t.progress() < 1 && pt(t, "onInterrupt"), t;
}, ue, Ui = [], $i = function(t) {
  if (t)
    if (t = !t.name && t.default || t, Er() || t.headless) {
      var e = t.name, r = G(t), i = e && !r && t.init ? function() {
        this._props = [];
      } : t, n = {
        init: Oe,
        render: jr,
        add: Rr,
        kill: hs,
        modifier: cs,
        rawVars: 0
      }, s = {
        targetTest: 0,
        get: 0,
        getSetter: Dr,
        aliases: {},
        register: 0
      };
      if (me(), t !== i) {
        if (_t[e])
          return;
        bt(i, bt(Ye(t, n), s)), re(i.prototype, re(n, Ye(t, s))), _t[i.prop = e] = i, t.targetTest && (Ve.push(i), Pr[e] = 1), e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
      }
      Si(e, i), t.register && t.register(ft, i, lt);
    } else
      Ui.push(t);
}, F = 255, Te = {
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
}, rr = function(t, e, r) {
  return t += t < 0 ? 1 : t > 1 ? -1 : 0, (t * 6 < 1 ? e + (r - e) * t * 6 : t < 0.5 ? r : t * 3 < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * F + 0.5 | 0;
}, Gi = function(t, e, r) {
  var i = t ? Dt(t) ? [t >> 16, t >> 8 & F, t & F] : 0 : Te.black, n, s, a, o, u, f, _, d, p, m;
  if (!i) {
    if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), Te[t])
      i = Te[t];
    else if (t.charAt(0) === "#") {
      if (t.length < 6 && (n = t.charAt(1), s = t.charAt(2), a = t.charAt(3), t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")), t.length === 9)
        return i = parseInt(t.substr(1, 6), 16), [i >> 16, i >> 8 & F, i & F, parseInt(t.substr(7), 16) / 255];
      t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & F, t & F];
    } else if (t.substr(0, 3) === "hsl") {
      if (i = m = t.match(fr), !e)
        o = +i[0] % 360 / 360, u = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = rr(o + 1 / 3, n, s), i[1] = rr(o, n, s), i[2] = rr(o - 1 / 3, n, s);
      else if (~t.indexOf("="))
        return i = t.match(bi), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = t.match(fr) || Te.transparent;
    i = i.map(Number);
  }
  return e && !m && (n = i[0] / F, s = i[1] / F, a = i[2] / F, _ = Math.max(n, s, a), d = Math.min(n, s, a), f = (_ + d) / 2, _ === d ? o = u = 0 : (p = _ - d, u = f > 0.5 ? p / (2 - _ - d) : p / (_ + d), o = _ === n ? (s - a) / p + (s < a ? 6 : 0) : _ === s ? (a - n) / p + 2 : (n - s) / p + 4, o *= 60), i[0] = ~~(o + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Xi = function(t) {
  var e = [], r = [], i = -1;
  return t.split(Yt).forEach(function(n) {
    var s = n.match(le) || [];
    e.push.apply(e, s), r.push(i += s.length + 1);
  }), e.c = r, e;
}, oi = function(t, e, r) {
  var i = "", n = (t + i).match(Yt), s = e ? "hsla(" : "rgba(", a = 0, o, u, f, _;
  if (!n)
    return t;
  if (n = n.map(function(d) {
    return (d = Gi(d, e, 1)) && s + (e ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (f = Xi(t), o = r.c, o.join(i) !== f.c.join(i)))
    for (u = t.replace(Yt, "1").split(le), _ = u.length - 1; a < _; a++)
      i += u[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
  if (!u)
    for (u = t.split(Yt), _ = u.length - 1; a < _; a++)
      i += u[a] + n[a];
  return i + u[_];
}, Yt = function() {
  var l = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
  for (t in Te)
    l += "|" + t + "\\b";
  return new RegExp(l + ")", "gi");
}(), Jn = /hsl[a]?\(/, Zi = function(t) {
  var e = t.join(" "), r;
  if (Yt.lastIndex = 0, Yt.test(e))
    return r = Jn.test(e), t[1] = oi(t[1], r), t[0] = oi(t[0], r, Xi(t[1])), !0;
}, Me, dt = function() {
  var l = Date.now, t = 500, e = 33, r = l(), i = r, n = 1e3 / 240, s = n, a = [], o, u, f, _, d, p, m = function c(g) {
    var v = l() - i, y = g === !0, T, C, x, w;
    if ((v > t || v < 0) && (r += v - e), i += v, x = i - r, T = x - s, (T > 0 || y) && (w = ++_.frame, d = x - _.time * 1e3, _.time = x = x / 1e3, s += T + (T >= n ? 4 : n - T), C = 1), y || (o = u(c)), C)
      for (p = 0; p < a.length; p++)
        a[p](x, d, w, g);
  };
  return _ = {
    time: 0,
    frame: 0,
    tick: function() {
      m(!0);
    },
    deltaRatio: function(g) {
      return d / (1e3 / (g || 60));
    },
    wake: function() {
      ki && (!cr && Er() && (kt = cr = window, Sr = kt.document || {}, gt.gsap = ft, (kt.gsapVersions || (kt.gsapVersions = [])).push(ft.version), Ei(Ie || kt.GreenSockGlobals || !kt.gsap && kt || {}), Ui.forEach($i)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, o && _.sleep(), u = f || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, Me = 1, m(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(o), Me = 0, u = Oe;
    },
    lagSmoothing: function(g, v) {
      t = g || 1 / 0, e = Math.min(v || 33, t);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = _.time * 1e3 + n;
    },
    add: function(g, v, y) {
      var T = v ? function(C, x, w, k) {
        g(C, x, w, k), _.remove(T);
      } : g;
      return _.remove(g), a[y ? "unshift" : "push"](T), me(), T;
    },
    remove: function(g, v) {
      ~(v = a.indexOf(g)) && a.splice(v, 1) && p >= v && p--;
    },
    _listeners: a
  }, _;
}(), me = function() {
  return !Me && dt.wake();
}, N = {}, Kn = /^[\d.\-M][\d.\-,\s]/, Qn = /["']/g, ts = function(t) {
  for (var e = {}, r = t.substr(1, t.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, o, u; n < s; n++)
    o = r[n], a = n !== s - 1 ? o.lastIndexOf(",") : o.length, u = o.substr(0, a), e[i] = isNaN(u) ? u.replace(Qn, "").trim() : +u, i = o.substr(a + 1).trim();
  return e;
}, es = function(t) {
  var e = t.indexOf("(") + 1, r = t.indexOf(")"), i = t.indexOf("(", e);
  return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
}, rs = function(t) {
  var e = (t + "").split("("), r = N[e[0]];
  return r && e.length > 1 && r.config ? r.config.apply(null, ~t.indexOf("{") ? [ts(e[1])] : es(t).split(",").map(Ni)) : N._CE && Kn.test(t) ? N._CE("", t) : r;
}, qi = function(t) {
  return function(e) {
    return 1 - t(1 - e);
  };
}, Hi = function l(t, e) {
  for (var r = t._first, i; r; )
    r instanceof st ? l(r, e) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== e && (r.timeline ? l(r.timeline, e) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = e)), r = r._next;
}, te = function(t, e) {
  return t && (G(t) ? t : N[t] || rs(t)) || e;
}, ne = function(t, e, r, i) {
  r === void 0 && (r = function(o) {
    return 1 - e(1 - o);
  }), i === void 0 && (i = function(o) {
    return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
  });
  var n = {
    easeIn: e,
    easeOut: r,
    easeInOut: i
  }, s;
  return ot(t, function(a) {
    N[a] = gt[a] = n, N[s = a.toLowerCase()] = r;
    for (var o in n)
      N[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = N[a + "." + o] = n[o];
  }), n;
}, Ji = function(t) {
  return function(e) {
    return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
  };
}, ir = function l(t, e, r) {
  var i = e >= 1 ? e : 1, n = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1), s = n / ur * (Math.asin(1 / i) || 0), a = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Mn((f - s) * n) + 1;
  }, o = t === "out" ? a : t === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Ji(a);
  return n = ur / n, o.config = function(u, f) {
    return l(t, u, f);
  }, o;
}, nr = function l(t, e) {
  e === void 0 && (e = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
  }, i = t === "out" ? r : t === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Ji(r);
  return i.config = function(n) {
    return l(t, n);
  }, i;
};
ot("Linear,Quad,Cubic,Quart,Quint,Strong", function(l, t) {
  var e = t < 5 ? t + 1 : t;
  ne(l + ",Power" + (e - 1), t ? function(r) {
    return Math.pow(r, e);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, e);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, e) / 2 : 1 - Math.pow((1 - r) * 2, e) / 2;
  });
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
ne("Elastic", ir("in"), ir("out"), ir());
(function(l, t) {
  var e = 1 / t, r = 2 * e, i = 2.5 * e, n = function(a) {
    return a < e ? l * a * a : a < r ? l * Math.pow(a - 1.5 / t, 2) + 0.75 : a < i ? l * (a -= 2.25 / t) * a + 0.9375 : l * Math.pow(a - 2.625 / t, 2) + 0.984375;
  };
  ne("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
ne("Expo", function(l) {
  return l ? Math.pow(2, 10 * (l - 1)) : 0;
});
ne("Circ", function(l) {
  return -(yi(1 - l * l) - 1);
});
ne("Sine", function(l) {
  return l === 1 ? 1 : -Pn(l * Sn) + 1;
});
ne("Back", nr("in"), nr("out"), nr());
N.SteppedEase = N.steps = gt.SteppedEase = {
  config: function(t, e) {
    t === void 0 && (t = 1);
    var r = 1 / t, i = t + (e ? 0 : 1), n = e ? 1 : 0, s = 1 - V;
    return function(a) {
      return ((i * Le(0, s, a) | 0) + n) * r;
    };
  }
};
_e.ease = N["quad.out"];
ot("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(l) {
  return Mr += l + "," + l + "Params,";
});
var Ki = function(t, e) {
  this.id = On++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : Pi, this.set = e ? e.getSetter : Dr;
}, Ne = /* @__PURE__ */ function() {
  function l(e) {
    this.vars = e, this._delay = +e.delay || 0, (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0, this._yoyo = !!e.yoyo || !!e.yoyoEase), this._ts = 1, pe(this, +e.duration, 1, 1), this.data = e.data, B && (this._ctx = B, B.data.push(this)), Me || dt.wake();
  }
  var t = l.prototype;
  return t.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, t.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, t.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, pe(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, t.totalTime = function(r, i) {
    if (me(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (He(this, r), !n._dp || n.parent || Li(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Et(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === V || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Mi(this, r, i)), this;
  }, t.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ni(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, t.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  }, t.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ni(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, t.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? de(this._tTime, n) + 1 : 1;
  }, t.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -V ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Ue(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -V ? 0 : this._rts, this.totalTime(Le(-Math.abs(this._delay), this._tDur, n), i !== !1), qe(this), zn(this);
  }, t.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (me(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
  }, t.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Et(i, this, r - this._delay), this;
    }
    return this._start;
  }, t.endTime = function(r) {
    return this._start + (at(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, t.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ue(i.rawTime(r), this) : this._tTime : this._tTime;
  }, t.revert = function(r) {
    r === void 0 && (r = An);
    var i = et;
    return et = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), et = i, this;
  }, t.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, t.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, si(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, t.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, si(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, t.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, t.seek = function(r, i) {
    return this.totalTime(vt(this, r), at(i));
  }, t.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, at(i));
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
      var s = G(r) ? r : Ri, a = function() {
        var u = i.then;
        i.then = null, G(s) && (s = s(i)) && (s.then || s === i) && (i.then = u), n(s), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, t.kill = function() {
    be(this);
  }, l;
}();
bt(Ne.prototype, {
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
var st = /* @__PURE__ */ function(l) {
  vi(t, l);
  function t(r, i) {
    var n;
    return r === void 0 && (r = {}), n = l.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = at(r.sortChildren), W && Et(r.parent || W, At(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Di(At(n), r.scrollTrigger), n;
  }
  var e = t.prototype;
  return e.to = function(i, n, s) {
    return ke(0, arguments, this), this;
  }, e.from = function(i, n, s) {
    return ke(1, arguments, this), this;
  }, e.fromTo = function(i, n, s, a) {
    return ke(2, arguments, this), this;
  }, e.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, we(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new H(i, n, vt(this, s), 1), this;
  }, e.call = function(i, n, s) {
    return Et(this, H.delayedCall(0, i, n), s);
  }, e.staggerTo = function(i, n, s, a, o, u, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = f, s.parent = this, new H(i, s, vt(this, o)), this;
  }, e.staggerFrom = function(i, n, s, a, o, u, f) {
    return s.runBackwards = 1, we(s).immediateRender = at(s.immediateRender), this.staggerTo(i, n, s, a, o, u, f);
  }, e.staggerFromTo = function(i, n, s, a, o, u, f, _) {
    return a.startAt = s, we(a).immediateRender = at(a.immediateRender), this.staggerTo(i, n, a, o, u, f, _);
  }, e.render = function(i, n, s) {
    var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = i <= 0 ? 0 : J(i), _ = this._zTime < 0 != i < 0 && (this._initted || !u), d, p, m, c, g, v, y, T, C, x, w, k;
    if (this !== W && f > o && i >= 0 && (f = o), f !== this._tTime || s || _) {
      if (a !== this._time && u && (f += this._time - a, i += this._time - a), d = f, C = this._start, T = this._ts, v = !T, _ && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (w = this._yoyo, g = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, n, s);
        if (d = J(f % g), f === o ? (c = this._repeat, d = u) : (c = ~~(f / g), c && c === f / g && (d = u, c--), d > u && (d = u)), x = de(this._tTime, g), !a && this._tTime && x !== c && this._tTime - x * g - this._dur <= 0 && (x = c), w && c & 1 && (d = u - d, k = 1), c !== x && !this._lock) {
          var E = w && x & 1, b = E === (w && c & 1);
          if (c < x && (E = !E), a = E ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (k ? 0 : J(c * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && pt(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, o = this._tDur, b && (this._lock = 2, a = E ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Hi(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = In(this, J(a), J(d)), y && (f -= d - (d = y._start))), this._tTime = f, this._time = d, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !n && !c && (pt(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= a && i >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, n, s), d !== this._time || !this._ts && !v) {
              y = 0, m && (f += this._zTime = -V);
              break;
            }
          }
          p = m;
        }
      else {
        p = this._last;
        for (var R = i < 0 ? i : d; p; ) {
          if (m = p._prev, (p._act || R <= p._end) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (R - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (R - p._start) * p._ts, n, s || et && (p._initted || p._startAt)), d !== this._time || !this._ts && !v) {
              y = 0, m && (f += this._zTime = R ? -V : V);
              break;
            }
          }
          p = m;
        }
      }
      if (y && !n && (this.pause(), y.render(d >= a ? 0 : -V)._zTime = d >= a ? 1 : -1, this._ts))
        return this._start = C, qe(this), this.render(i, n, s);
      this._onUpdate && !n && pt(this, "onUpdate", !0), (f === o && this._tTime >= this.totalDuration() || !f && a) && (C === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === o && this._ts > 0 || !f && this._ts < 0) && Ut(this, 1), !n && !(i < 0 && !a) && (f || a || !o) && (pt(this, f === o && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < o && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, e.add = function(i, n) {
    var s = this;
    if (Dt(n) || (n = vt(this, n, i)), !(i instanceof Ne)) {
      if (rt(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (K(i))
        return this.addLabel(i, n);
      if (G(i))
        i = H.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Et(this, i, n) : this;
  }, e.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -yt);
    for (var o = [], u = this._first; u; )
      u._start >= a && (u instanceof H ? n && o.push(u) : (s && o.push(u), i && o.push.apply(o, u.getChildren(!0, n, s)))), u = u._next;
    return o;
  }, e.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, e.remove = function(i) {
    return K(i) ? this.removeLabel(i) : G(i) ? this.killTweensOf(i) : (Ze(this, i), i === this._recent && (this._recent = this._last), Qt(this));
  }, e.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = J(dt.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), l.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, e.addLabel = function(i, n) {
    return this.labels[i] = vt(this, n), this;
  }, e.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, e.addPause = function(i, n, s) {
    var a = H.delayedCall(0, n || Oe, s);
    return a.data = "isPause", this._hasPause = 1, Et(this, a, vt(this, i));
  }, e.removePause = function(i) {
    var n = this._first;
    for (i = vt(this, i); n; )
      n._start === i && n.data === "isPause" && Ut(n), n = n._next;
  }, e.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), o = a.length; o--; )
      Vt !== a[o] && a[o].kill(i, n);
    return this;
  }, e.getTweensOf = function(i, n) {
    for (var s = [], a = Ct(i), o = this._first, u = Dt(n), f; o; )
      o instanceof H ? Ln(o._targets, a) && (u ? (!Vt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (f = o.getTweensOf(a, n)).length && s.push.apply(s, f), o = o._next;
    return s;
  }, e.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = vt(s, i), o = n, u = o.startAt, f = o.onStart, _ = o.onStartParams, d = o.immediateRender, p, m = H.to(s, bt({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || V,
      onStart: function() {
        if (s.pause(), !p) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          m._dur !== g && pe(m, g, 0, 1).render(m._time, !0, !0), p = 1;
        }
        f && f.apply(m, _ || []);
      }
    }, n));
    return d ? m.render(0) : m;
  }, e.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, bt({
      startAt: {
        time: vt(this, i)
      }
    }, s));
  }, e.recent = function() {
    return this._recent;
  }, e.nextLabel = function(i) {
    return i === void 0 && (i = this._time), ai(this, vt(this, i));
  }, e.previousLabel = function(i) {
    return i === void 0 && (i = this._time), ai(this, vt(this, i), 1);
  }, e.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + V);
  }, e.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, o = this.labels, u; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (u in o)
        o[u] >= s && (o[u] += i);
    return Qt(this);
  }, e.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return l.prototype.invalidate.call(this, i);
  }, e.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Qt(this);
  }, e.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, o = yt, u, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > o && s._sort && a._ts && !s._lock ? (s._lock = 1, Et(s, a, f - a._delay, 1)._lock = 0) : o = f, f < 0 && a._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), o = 0), a._end > n && a._ts && (n = a._end), a = u;
      pe(s, s === W && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, t.updateRoot = function(i) {
    if (W._ts && (Mi(W, Ue(i, W)), Oi = dt.frame), dt.frame >= ri) {
      ri += mt.autoSleep || 120;
      var n = W._first;
      if ((!n || !n._ts) && mt.autoSleep && dt._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || dt.sleep();
      }
    }
  }, t;
}(Ne);
bt(st.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var is = function(t, e, r, i, n, s, a) {
  var o = new lt(this._pt, t, e, 0, 1, sn, null, n), u = 0, f = 0, _, d, p, m, c, g, v, y;
  for (o.b = r, o.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = Pe(i)), s && (y = [r, i], s(y, t, e), r = y[0], i = y[1]), d = r.match(tr) || []; _ = tr.exec(i); )
    m = _[0], c = i.substring(u, _.index), p ? p = (p + 1) % 5 : c.substr(-5) === "rgba(" && (p = 1), m !== d[f++] && (g = parseFloat(d[f - 1]) || 0, o._pt = {
      _next: o._pt,
      p: c || f === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? fe(g, m) - g : parseFloat(m) - g,
      m: p && p < 4 ? Math.round : 0
    }, u = tr.lastIndex);
  return o.c = u < i.length ? i.substring(u, i.length) : "", o.fp = a, (Ti.test(i) || v) && (o.e = 0), this._pt = o, o;
}, Rr = function(t, e, r, i, n, s, a, o, u, f) {
  G(i) && (i = i(n || 0, t, s));
  var _ = t[e], d = r !== "get" ? r : G(_) ? u ? t[e.indexOf("set") || !G(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : _, p = G(_) ? u ? ls : rn : Lr, m;
  if (K(i) && (~i.indexOf("random(") && (i = Pe(i)), i.charAt(1) === "=" && (m = fe(d, i) + (tt(d) || 0), (m || m === 0) && (i = m))), !f || d !== i || xr)
    return !isNaN(d * i) && i !== "" ? (m = new lt(this._pt, t, e, +d || 0, i - (d || 0), typeof _ == "boolean" ? fs : nn, 0, p), u && (m.fp = u), a && m.modifier(a, this, t), this._pt = m) : (!_ && !(e in t) && Or(e, i), is.call(this, t, e, d, i, p, o || mt.stringFilter, u));
}, ns = function(t, e, r, i, n) {
  if (G(t) && (t = Ee(t, n, e, r, i)), !Pt(t) || t.style && t.nodeType || rt(t) || Ci(t))
    return K(t) ? Ee(t, n, e, r, i) : t;
  var s = {}, a;
  for (a in t)
    s[a] = Ee(t[a], n, e, r, i);
  return s;
}, Qi = function(t, e, r, i, n, s) {
  var a, o, u, f;
  if (_t[t] && (a = new _t[t]()).init(n, a.rawVars ? e[t] : ns(e[t], i, n, s, r), r, i, s) !== !1 && (r._pt = o = new lt(r._pt, n, t, 0, 1, a.render, a, 0, a.priority), r !== ue))
    for (u = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = o;
  return a;
}, Vt, xr, Ar = function l(t, e, r) {
  var i = t.vars, n = i.ease, s = i.startAt, a = i.immediateRender, o = i.lazy, u = i.onUpdate, f = i.runBackwards, _ = i.yoyoEase, d = i.keyframes, p = i.autoRevert, m = t._dur, c = t._startAt, g = t._targets, v = t.parent, y = v && v.data === "nested" ? v.vars.targets : g, T = t._overwrite === "auto" && !wr, C = t.timeline, x, w, k, E, b, R, z, D, j, X, U, $, Z;
  if (C && (!d || !n) && (n = "none"), t._ease = te(n, _e.ease), t._yEase = _ ? qi(te(_ === !0 ? n : _, _e.ease)) : 0, _ && t._yoyo && !t._repeat && (_ = t._yEase, t._yEase = t._ease, t._ease = _), t._from = !C && !!i.runBackwards, !C || d && !i.stagger) {
    if (D = g[0] ? Kt(g[0]).harness : 0, $ = D && i[D.prop], x = Ye(i, Pr), c && (c._zTime < 0 && c.progress(1), e < 0 && f && a && !p ? c.render(-1, !0) : c.revert(f && m ? Fe : Rn), c._lazy = 0), s) {
      if (Ut(t._startAt = H.set(g, bt({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !c && at(o),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return pt(t, "onUpdate");
        },
        stagger: 0
      }, s))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (et || !a && !p) && t._startAt.revert(Fe), a && m && e <= 0 && r <= 0) {
        e && (t._zTime = e);
        return;
      }
    } else if (f && m && !c) {
      if (e && (a = !1), k = bt({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !c && at(o),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), $ && (k[D.prop] = $), Ut(t._startAt = H.set(g, k)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (et ? t._startAt.revert(Fe) : t._startAt.render(-1, !0)), t._zTime = e, !a)
        l(t._startAt, V, V);
      else if (!e)
        return;
    }
    for (t._pt = t._ptCache = 0, o = m && at(o) || o && !m, w = 0; w < g.length; w++) {
      if (b = g[w], z = b._gsap || Nr(g)[w]._gsap, t._ptLookup[w] = X = {}, hr[z.id] && Wt.length && We(), U = y === g ? w : y.indexOf(b), D && (j = new D()).init(b, $ || x, t, U, y) !== !1 && (t._pt = E = new lt(t._pt, b, j.name, 0, 1, j.render, j, 0, j.priority), j._props.forEach(function(ct) {
        X[ct] = E;
      }), j.priority && (R = 1)), !D || $)
        for (k in x)
          _t[k] && (j = Qi(k, x, t, U, b, y)) ? j.priority && (R = 1) : X[k] = E = Rr.call(t, b, k, "get", x[k], U, y, 0, i.stringFilter);
      t._op && t._op[w] && t.kill(b, t._op[w]), T && t._pt && (Vt = t, W.killTweensOf(b, X, t.globalTime(e)), Z = !t.parent, Vt = 0), t._pt && o && (hr[z.id] = 1);
    }
    R && an(t), t._onInit && t._onInit(t);
  }
  t._onUpdate = u, t._initted = (!t._op || t._pt) && !Z, d && e <= 0 && C.render(yt, !0, !0);
}, ss = function(t, e, r, i, n, s, a, o) {
  var u = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, _, d, p;
  if (!u)
    for (u = t._ptCache[e] = [], d = t._ptLookup, p = t._targets.length; p--; ) {
      if (f = d[p][e], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
          f = f._next;
      if (!f)
        return xr = 1, t.vars[e] = "+=0", Ar(t, a), xr = 0, o ? Se(e + " not eligible for reset") : 1;
      u.push(f);
    }
  for (p = u.length; p--; )
    _ = u[p], f = _._pt || _, f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c, f.c = r - f.s, _.e && (_.e = q(r) + tt(_.e)), _.b && (_.b = f.s + tt(_.b));
}, as = function(t, e) {
  var r = t[0] ? Kt(t[0]).harness : 0, i = r && r.aliases, n, s, a, o;
  if (!i)
    return e;
  n = re({}, e);
  for (s in i)
    if (s in n)
      for (o = i[s].split(","), a = o.length; a--; )
        n[o[a]] = n[s];
  return n;
}, os = function(t, e, r, i) {
  var n = e.ease || i || "power1.inOut", s, a;
  if (rt(e))
    a = r[t] || (r[t] = []), e.forEach(function(o, u) {
      return a.push({
        t: u / (e.length - 1) * 100,
        v: o,
        e: n
      });
    });
  else
    for (s in e)
      a = r[s] || (r[s] = []), s === "ease" || a.push({
        t: parseFloat(t),
        v: e[s],
        e: n
      });
}, Ee = function(t, e, r, i, n) {
  return G(t) ? t.call(e, r, i, n) : K(t) && ~t.indexOf("random(") ? Pe(t) : t;
}, tn = Mr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", en = {};
ot(tn + ",id,stagger,delay,duration,paused,scrollTrigger", function(l) {
  return en[l] = 1;
});
var H = /* @__PURE__ */ function(l) {
  vi(t, l);
  function t(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = l.call(this, s ? i : we(i)) || this;
    var o = a.vars, u = o.duration, f = o.delay, _ = o.immediateRender, d = o.stagger, p = o.overwrite, m = o.keyframes, c = o.defaults, g = o.scrollTrigger, v = o.yoyoEase, y = i.parent || W, T = (rt(r) || Ci(r) ? Dt(r[0]) : "length" in i) ? [r] : Ct(r), C, x, w, k, E, b, R, z;
    if (a._targets = T.length ? Nr(T) : Se("GSAP target " + r + " not found. https://gsap.com", !mt.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || d || ze(u) || ze(f)) {
      if (i = a.vars, C = a.timeline = new st({
        data: "nested",
        defaults: c || {},
        targets: y && y.data === "nested" ? y.vars.targets : T
      }), C.kill(), C.parent = C._dp = At(a), C._start = 0, d || ze(u) || ze(f)) {
        if (k = T.length, R = d && Vi(d), Pt(d))
          for (E in d)
            ~tn.indexOf(E) && (z || (z = {}), z[E] = d[E]);
        for (x = 0; x < k; x++)
          w = Ye(i, en), w.stagger = 0, v && (w.yoyoEase = v), z && re(w, z), b = T[x], w.duration = +Ee(u, At(a), x, b, T), w.delay = (+Ee(f, At(a), x, b, T) || 0) - a._delay, !d && k === 1 && w.delay && (a._delay = f = w.delay, a._start += f, w.delay = 0), C.to(b, w, R ? R(x, b, T) : 0), C._ease = N.none;
        C.duration() ? u = f = 0 : a.timeline = 0;
      } else if (m) {
        we(bt(C.vars.defaults, {
          ease: "none"
        })), C._ease = te(m.ease || i.ease || "none");
        var D = 0, j, X, U;
        if (rt(m))
          m.forEach(function($) {
            return C.to(T, $, ">");
          }), C.duration();
        else {
          w = {};
          for (E in m)
            E === "ease" || E === "easeEach" || os(E, m[E], w, m.easeEach);
          for (E in w)
            for (j = w[E].sort(function($, Z) {
              return $.t - Z.t;
            }), D = 0, x = 0; x < j.length; x++)
              X = j[x], U = {
                ease: X.e,
                duration: (X.t - (x ? j[x - 1].t : 0)) / 100 * u
              }, U[E] = X.v, C.to(T, U, D), D += U.duration;
          C.duration() < u && C.to({}, {
            duration: u - C.duration()
          });
        }
      }
      u || a.duration(u = C.duration());
    } else
      a.timeline = 0;
    return p === !0 && !wr && (Vt = At(a), W.killTweensOf(T), Vt = 0), Et(y, At(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !u && !m && a._start === J(y._time) && at(_) && Fn(At(a)) && y.data !== "nested") && (a._tTime = -V, a.render(Math.max(0, -f) || 0)), g && Di(At(a), g), a;
  }
  var e = t.prototype;
  return e.render = function(i, n, s) {
    var a = this._time, o = this._tDur, u = this._dur, f = i < 0, _ = i > o - V && !f ? o : i < V ? 0 : i, d, p, m, c, g, v, y, T, C;
    if (!u)
      Bn(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
      if (d = _, T = this.timeline, this._repeat) {
        if (c = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(c * 100 + i, n, s);
        if (d = J(_ % c), _ === o ? (m = this._repeat, d = u) : (m = ~~(_ / c), m && m === J(_ / c) && (d = u, m--), d > u && (d = u)), v = this._yoyo && m & 1, v && (C = this._yEase, d = u - d), g = de(this._tTime, c), d === a && !s && this._initted && m === g)
          return this._tTime = _, this;
        m !== g && (T && this._yEase && Hi(T, v), this.vars.repeatRefresh && !v && !this._lock && this._time !== c && this._initted && (this._lock = s = 1, this.render(J(c * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ji(this, f ? i : d, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && m !== g))
          return this;
        if (u !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (C || this._ease)(d / u), this._from && (this.ratio = y = 1 - y), d && !a && !n && !m && (pt(this, "onStart"), this._tTime !== _))
        return this;
      for (p = this._pt; p; )
        p.r(y, p.d), p = p._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && _r(this, i, n, s), pt(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !n && this.parent && pt(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && _r(this, i, !0, !0), (i || !u) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Ut(this, 1), !n && !(f && !a) && (_ || a || v) && (pt(this, _ === o ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < o && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, e.targets = function() {
    return this._targets;
  }, e.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), l.prototype.invalidate.call(this, i);
  }, e.resetTo = function(i, n, s, a, o) {
    Me || dt.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Ar(this, u), f = this._ease(u / this._dur), ss(this, i, n, s, a, f, u, o) ? this.resetTo(i, n, s, a, 1) : (He(this, 0), this.parent || Ai(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, e.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? be(this) : this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Vt && Vt.vars.overwrite !== !0)._first || be(this), this.parent && s !== this.timeline.totalDuration() && pe(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, o = i ? Ct(i) : a, u = this._ptLookup, f = this._pt, _, d, p, m, c, g, v;
    if ((!n || n === "all") && jn(a, o))
      return n === "all" && (this._pt = 0), be(this);
    for (_ = this._op = this._op || [], n !== "all" && (K(n) && (c = {}, ot(n, function(y) {
      return c[y] = 1;
    }), n = c), n = as(a, n)), v = a.length; v--; )
      if (~o.indexOf(a[v])) {
        d = u[v], n === "all" ? (_[v] = n, m = d, p = {}) : (p = _[v] = _[v] || {}, m = n);
        for (c in m)
          g = d && d[c], g && ((!("kill" in g.d) || g.d.kill(c) === !0) && Ze(this, g, "_pt"), delete d[c]), p !== "all" && (p[c] = 1);
      }
    return this._initted && !this._pt && f && be(this), this;
  }, t.to = function(i, n) {
    return new t(i, n, arguments[2]);
  }, t.from = function(i, n) {
    return ke(1, arguments);
  }, t.delayedCall = function(i, n, s, a) {
    return new t(n, 0, {
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
  }, t.fromTo = function(i, n, s) {
    return ke(2, arguments);
  }, t.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new t(i, n);
  }, t.killTweensOf = function(i, n, s) {
    return W.killTweensOf(i, n, s);
  }, t;
}(Ne);
bt(H.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
ot("staggerTo,staggerFrom,staggerFromTo", function(l) {
  H[l] = function() {
    var t = new st(), e = pr.call(arguments, 0);
    return e.splice(l === "staggerFromTo" ? 5 : 4, 0, 0), t[l].apply(t, e);
  };
});
var Lr = function(t, e, r) {
  return t[e] = r;
}, rn = function(t, e, r) {
  return t[e](r);
}, ls = function(t, e, r, i) {
  return t[e](i.fp, r);
}, us = function(t, e, r) {
  return t.setAttribute(e, r);
}, Dr = function(t, e) {
  return G(t[e]) ? rn : kr(t[e]) && t.setAttribute ? us : Lr;
}, nn = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
}, fs = function(t, e) {
  return e.set(e.t, e.p, !!(e.s + e.c * t), e);
}, sn = function(t, e) {
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
}, jr = function(t, e) {
  for (var r = e._pt; r; )
    r.r(t, r.d), r = r._next;
}, cs = function(t, e, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(t, e, r), n = s;
}, hs = function(t) {
  for (var e = this._pt, r, i; e; )
    i = e._next, e.p === t && !e.op || e.op === t ? Ze(this, e, "_pt") : e.dep || (r = 1), e = i;
  return !r;
}, _s = function(t, e, r, i) {
  i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
}, an = function(t) {
  for (var e = t._pt, r, i, n, s; e; ) {
    for (r = e._next, i = n; i && i.pr > e.pr; )
      i = i._next;
    (e._prev = i ? i._prev : s) ? e._prev._next = e : n = e, (e._next = i) ? i._prev = e : s = e, e = r;
  }
  t._pt = n;
}, lt = /* @__PURE__ */ function() {
  function l(e, r, i, n, s, a, o, u, f) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || nn, this.d = o || this, this.set = u || Lr, this.pr = f || 0, this._next = e, e && (e._prev = this);
  }
  var t = l.prototype;
  return t.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = _s, this.m = r, this.mt = n, this.tween = i;
  }, l;
}();
ot(Mr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(l) {
  return Pr[l] = 1;
});
gt.TweenMax = gt.TweenLite = H;
gt.TimelineLite = gt.TimelineMax = st;
W = new st({
  sortChildren: !1,
  defaults: _e,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
mt.stringFilter = Zi;
var ee = [], Be = {}, ds = [], li = 0, ps = 0, sr = function(t) {
  return (Be[t] || ds).map(function(e) {
    return e();
  });
}, vr = function() {
  var t = Date.now(), e = [];
  t - li > 2 && (sr("matchMediaInit"), ee.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, o, u;
    for (a in i)
      s = kt.matchMedia(i[a]).matches, s && (o = 1), s !== n[a] && (n[a] = s, u = 1);
    u && (r.revert(), o && e.push(r));
  }), sr("matchMediaRevert"), e.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), li = t, sr("matchMedia"));
}, on = /* @__PURE__ */ function() {
  function l(e, r) {
    this.selector = r && mr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = ps++, e && this.add(e);
  }
  var t = l.prototype;
  return t.add = function(r, i, n) {
    G(r) && (n = i, i = r, r = G);
    var s = this, a = function() {
      var u = B, f = s.selector, _;
      return u && u !== s && u.data.push(s), n && (s.selector = mr(n)), B = s, _ = i.apply(s, arguments), G(_) && s._r.push(_), B = u, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = a, r === G ? a(s, function(o) {
      return s.add(null, o);
    }) : r ? s[r] = a : a;
  }, t.ignore = function(r) {
    var i = B;
    B = null, r(this), B = i;
  }, t.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof l ? r.push.apply(r, i.getTweens()) : i instanceof H && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, t.clear = function() {
    this._r.length = this.data.length = 0;
  }, t.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var a = n.getTweens(), o = n.data.length, u; o--; )
        u = n.data[o], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
          return a.splice(a.indexOf(f), 1);
        }));
      for (a.map(function(f) {
        return {
          g: f._dur || f._delay || f._sat && !f._sat.vars.immediateRender ? f.globalTime(0) : -1 / 0,
          t: f
        };
      }).sort(function(f, _) {
        return _.g - f.g || -1 / 0;
      }).forEach(function(f) {
        return f.t.revert(r);
      }), o = n.data.length; o--; )
        u = n.data[o], u instanceof st ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof H) && u.revert && u.revert(r);
      n._r.forEach(function(f) {
        return f(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var s = ee.length; s--; )
        ee[s].id === this.id && ee.splice(s, 1);
  }, t.revert = function(r) {
    this.kill(r || {});
  }, l;
}(), ms = /* @__PURE__ */ function() {
  function l(e) {
    this.contexts = [], this.scope = e, B && B.data.push(this);
  }
  var t = l.prototype;
  return t.add = function(r, i, n) {
    Pt(r) || (r = {
      matches: r
    });
    var s = new on(0, n || this.scope), a = s.conditions = {}, o, u, f;
    B && !s.selector && (s.selector = B.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (u in r)
      u === "all" ? f = 1 : (o = kt.matchMedia(r[u]), o && (ee.indexOf(s) < 0 && ee.push(s), (a[u] = o.matches) && (f = 1), o.addListener ? o.addListener(vr) : o.addEventListener("change", vr)));
    return f && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, t.revert = function(r) {
    this.kill(r || {});
  }, t.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, l;
}(), $e = {
  registerPlugin: function() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
      e[r] = arguments[r];
    e.forEach(function(i) {
      return $i(i);
    });
  },
  timeline: function(t) {
    return new st(t);
  },
  getTweensOf: function(t, e) {
    return W.getTweensOf(t, e);
  },
  getProperty: function(t, e, r, i) {
    K(t) && (t = Ct(t)[0]);
    var n = Kt(t || {}).get, s = r ? Ri : Ni;
    return r === "native" && (r = ""), t && (e ? s((_t[e] && _t[e].get || n)(t, e, r, i)) : function(a, o, u) {
      return s((_t[a] && _t[a].get || n)(t, a, o, u));
    });
  },
  quickSetter: function(t, e, r) {
    if (t = Ct(t), t.length > 1) {
      var i = t.map(function(f) {
        return ft.quickSetter(f, e, r);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    t = t[0] || {};
    var s = _t[e], a = Kt(t), o = a.harness && (a.harness.aliases || {})[e] || e, u = s ? function(f) {
      var _ = new s();
      ue._pt = 0, _.init(t, r ? f + r : f, ue, 0, [t]), _.render(1, _), ue._pt && jr(1, ue);
    } : a.set(t, o);
    return s ? u : function(f) {
      return u(t, o, r ? f + r : f, a, 1);
    };
  },
  quickTo: function(t, e, r) {
    var i, n = ft.to(t, re((i = {}, i[e] = "+=0.1", i.paused = !0, i), r || {})), s = function(o, u, f) {
      return n.resetTo(e, o, u, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(t) {
    return W.getTweensOf(t, !0).length > 0;
  },
  defaults: function(t) {
    return t && t.ease && (t.ease = te(t.ease, _e.ease)), ii(_e, t || {});
  },
  config: function(t) {
    return ii(mt, t || {});
  },
  registerEffect: function(t) {
    var e = t.name, r = t.effect, i = t.plugins, n = t.defaults, s = t.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !_t[a] && !gt[a] && Se(e + " effect requires " + a + " plugin.");
    }), er[e] = function(a, o, u) {
      return r(Ct(a), bt(o || {}, n), u);
    }, s && (st.prototype[e] = function(a, o, u) {
      return this.add(er[e](a, Pt(o) ? o : (u = o) && {}, this), u);
    });
  },
  registerEase: function(t, e) {
    N[t] = te(e);
  },
  parseEase: function(t, e) {
    return arguments.length ? te(t, e) : N;
  },
  getById: function(t) {
    return W.getById(t);
  },
  exportRoot: function(t, e) {
    t === void 0 && (t = {});
    var r = new st(t), i, n;
    for (r.smoothChildTiming = at(t.smoothChildTiming), W.remove(r), r._dp = 0, r._time = r._tTime = W._time, i = W._first; i; )
      n = i._next, (e || !(!i._dur && i instanceof H && i.vars.onComplete === i._targets[0])) && Et(r, i, i._start - i._delay), i = n;
    return Et(W, r, 0), r;
  },
  context: function(t, e) {
    return t ? new on(t, e) : B;
  },
  matchMedia: function(t) {
    return new ms(t);
  },
  matchMediaRefresh: function() {
    return ee.forEach(function(t) {
      var e = t.conditions, r, i;
      for (i in e)
        e[i] && (e[i] = !1, r = 1);
      r && t.revert();
    }) || vr();
  },
  addEventListener: function(t, e) {
    var r = Be[t] || (Be[t] = []);
    ~r.indexOf(e) || r.push(e);
  },
  removeEventListener: function(t, e) {
    var r = Be[t], i = r && r.indexOf(e);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Zn,
    wrapYoyo: qn,
    distribute: Vi,
    random: Ii,
    snap: Bi,
    normalize: Xn,
    getUnit: tt,
    clamp: Yn,
    splitColor: Gi,
    toArray: Ct,
    selector: mr,
    mapRange: Yi,
    pipe: $n,
    unitize: Gn,
    interpolate: Hn,
    shuffle: Fi
  },
  install: Ei,
  effects: er,
  ticker: dt,
  updateRoot: st.updateRoot,
  plugins: _t,
  globalTimeline: W,
  core: {
    PropTween: lt,
    globals: Si,
    Tween: H,
    Timeline: st,
    Animation: Ne,
    getCache: Kt,
    _removeLinkedListItem: Ze,
    reverting: function() {
      return et;
    },
    context: function(t) {
      return t && B && (B.data.push(t), t._ctx = B), B;
    },
    suppressOverwrites: function(t) {
      return wr = t;
    }
  }
};
ot("to,from,fromTo,delayedCall,set,killTweensOf", function(l) {
  return $e[l] = H[l];
});
dt.add(st.updateRoot);
ue = $e.to({}, {
  duration: 0
});
var gs = function(t, e) {
  for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
    r = r._next;
  return r;
}, xs = function(t, e) {
  var r = t._targets, i, n, s;
  for (i in e)
    for (n = r.length; n--; )
      s = t._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = gs(s, i)), s && s.modifier && s.modifier(e[i], t, r[n], i));
}, ar = function(t, e) {
  return {
    name: t,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var o, u;
        if (K(n) && (o = {}, ot(n, function(f) {
          return o[f] = 1;
        }), n = o), e) {
          o = {};
          for (u in n)
            o[u] = e(n[u]);
          n = o;
        }
        xs(a, n);
      };
    }
  };
}, ft = $e.registerPlugin({
  name: "attr",
  init: function(t, e, r, i, n) {
    var s, a, o;
    this.tween = r;
    for (s in e)
      o = t.getAttribute(s) || "", a = this.add(t, "setAttribute", (o || 0) + "", e[s], i, n, 0, 0, s), a.op = s, a.b = o, this._props.push(s);
  },
  render: function(t, e) {
    for (var r = e._pt; r; )
      et ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next;
  }
}, {
  name: "endArray",
  init: function(t, e) {
    for (var r = e.length; r--; )
      this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1);
  }
}, ar("roundProps", gr), ar("modifiers"), ar("snap", Bi)) || $e;
H.version = st.version = ft.version = "3.12.5";
ki = 1;
Er() && me();
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
var ui, Bt, ce, zr, Jt, fi, Fr, vs = function() {
  return typeof window < "u";
}, jt = {}, Ht = 180 / Math.PI, he = Math.PI / 180, oe = Math.atan2, ci = 1e8, Vr = /([A-Z])/g, ys = /(left|right|width|margin|padding|x)/i, Cs = /[\s,\(]\S/, St = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, yr = function(t, e) {
  return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, bs = function(t, e) {
  return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
}, Ts = function(t, e) {
  return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e);
}, ws = function(t, e) {
  var r = e.s + e.c * t;
  e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
}, ln = function(t, e) {
  return e.set(e.t, e.p, t ? e.e : e.b, e);
}, un = function(t, e) {
  return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
}, ks = function(t, e, r) {
  return t.style[e] = r;
}, Es = function(t, e, r) {
  return t.style.setProperty(e, r);
}, Ss = function(t, e, r) {
  return t._gsap[e] = r;
}, Os = function(t, e, r) {
  return t._gsap.scaleX = t._gsap.scaleY = r;
}, Ps = function(t, e, r, i, n) {
  var s = t._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Ms = function(t, e, r, i, n) {
  var s = t._gsap;
  s[e] = r, s.renderTransform(n, s);
}, Y = "transform", ut = Y + "Origin", Ns = function l(t, e) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (t in jt && n) {
    if (this.tfm = this.tfm || {}, t !== "transform")
      t = St[t] || t, ~t.indexOf(",") ? t.split(",").forEach(function(a) {
        return r.tfm[a] = Lt(i, a);
      }) : this.tfm[t] = s.x ? s[t] : Lt(i, t), t === ut && (this.tfm.zOrigin = s.zOrigin);
    else
      return St.transform.split(",").forEach(function(a) {
        return l.call(r, a, e);
      });
    if (this.props.indexOf(Y) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ut, e, "")), t = Y;
  }
  (n || e) && this.props.push(t, e, n[t]);
}, fn = function(t) {
  t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"));
}, Rs = function() {
  var t = this.props, e = this.target, r = e.style, i = e._gsap, n, s;
  for (n = 0; n < t.length; n += 3)
    t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? r[t[n]] = t[n + 2] : r.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Vr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), e.setAttribute("data-svg-origin", this.svgo || "")), n = Fr(), (!n || !n.isStart) && !r[Y] && (fn(r), i.zOrigin && r[ut] && (r[ut] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, cn = function(t, e) {
  var r = {
    target: t,
    props: [],
    revert: Rs,
    save: Ns
  };
  return t._gsap || ft.core.getCache(t), e && e.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, hn, Cr = function(t, e) {
  var r = Bt.createElementNS ? Bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Bt.createElement(t);
  return r && r.style ? r : Bt.createElement(t);
}, Ot = function l(t, e, r) {
  var i = getComputedStyle(t);
  return i[e] || i.getPropertyValue(e.replace(Vr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && l(t, ge(e) || e, 1) || "";
}, hi = "O,Moz,ms,Ms,Webkit".split(","), ge = function(t, e, r) {
  var i = e || Jt, n = i.style, s = 5;
  if (t in n && !r)
    return t;
  for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(hi[s] + t in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? hi[s] : "") + t;
}, br = function() {
  vs() && window.document && (ui = window, Bt = ui.document, ce = Bt.documentElement, Jt = Cr("div") || {
    style: {}
  }, Cr("div"), Y = ge(Y), ut = Y + "Origin", Jt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", hn = !!ge("perspective"), Fr = ft.core.reverting, zr = 1);
}, or = function l(t) {
  var e = Cr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, i = this.nextSibling, n = this.style.cssText, s;
  if (ce.appendChild(e), e.appendChild(this), this.style.display = "block", t)
    try {
      s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = l;
    } catch {
    }
  else this._gsapBBox && (s = this._gsapBBox());
  return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), ce.removeChild(e), this.style.cssText = n, s;
}, _i = function(t, e) {
  for (var r = e.length; r--; )
    if (t.hasAttribute(e[r]))
      return t.getAttribute(e[r]);
}, _n = function(t) {
  var e;
  try {
    e = t.getBBox();
  } catch {
    e = or.call(t, !0);
  }
  return e && (e.width || e.height) || t.getBBox === or || (e = or.call(t, !0)), e && !e.width && !e.x && !e.y ? {
    x: +_i(t, ["x", "cx", "x1"]) || 0,
    y: +_i(t, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : e;
}, dn = function(t) {
  return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && _n(t));
}, ie = function(t, e) {
  if (e) {
    var r = t.style, i;
    e in jt && e !== ut && (e = Y), r.removeProperty ? (i = e.substr(0, 2), (i === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e), r.removeProperty(i === "--" ? e : e.replace(Vr, "-$1").toLowerCase())) : r.removeAttribute(e);
  }
}, It = function(t, e, r, i, n, s) {
  var a = new lt(t._pt, e, r, 0, 1, s ? un : ln);
  return t._pt = a, a.b = i, a.e = n, t._props.push(r), a;
}, di = {
  deg: 1,
  rad: 1,
  turn: 1
}, As = {
  grid: 1,
  flex: 1
}, $t = function l(t, e, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Jt.style, o = ys.test(e), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (o ? "Width" : "Height"), _ = 100, d = i === "px", p = i === "%", m, c, g, v;
  if (i === s || !n || di[i] || di[s])
    return n;
  if (s !== "px" && !d && (n = l(t, e, r, "px")), v = t.getCTM && dn(t), (p || s === "%") && (jt[e] || ~e.indexOf("adius")))
    return m = v ? t.getBBox()[o ? "width" : "height"] : t[f], q(p ? n / m * _ : n / 100 * m);
  if (a[o ? "width" : "height"] = _ + (d ? s : i), c = ~e.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode, v && (c = (t.ownerSVGElement || {}).parentNode), (!c || c === Bt || !c.appendChild) && (c = Bt.body), g = c._gsap, g && p && g.width && o && g.time === dt.time && !g.uncache)
    return q(n / g.width * _);
  if (p && (e === "height" || e === "width")) {
    var y = t.style[e];
    t.style[e] = _ + i, m = t[f], y ? t.style[e] = y : ie(t, e);
  } else
    (p || s === "%") && !As[Ot(c, "display")] && (a.position = Ot(t, "position")), c === t && (a.position = "static"), c.appendChild(Jt), m = Jt[f], c.removeChild(Jt), a.position = "absolute";
  return o && p && (g = Kt(c), g.time = dt.time, g.width = c[f]), q(d ? m * n / _ : m && n ? _ / m * n : 0);
}, Lt = function(t, e, r, i) {
  var n;
  return zr || br(), e in St && e !== "transform" && (e = St[e], ~e.indexOf(",") && (e = e.split(",")[0])), jt[e] && e !== "transform" ? (n = Ae(t, i), n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : Xe(Ot(t, ut)) + " " + n.zOrigin + "px") : (n = t.style[e], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Ge[e] && Ge[e](t, e, r) || Ot(t, e) || Pi(t, e) || (e === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? $t(t, e, n, r) + r : n;
}, Ls = function(t, e, r, i) {
  if (!r || r === "none") {
    var n = ge(e, t, 1), s = n && Ot(t, n, 1);
    s && s !== r ? (e = n, r = s) : e === "borderColor" && (r = Ot(t, "borderTopColor"));
  }
  var a = new lt(this._pt, t.style, e, 0, 1, sn), o = 0, u = 0, f, _, d, p, m, c, g, v, y, T, C, x;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (c = t.style[e], t.style[e] = i, i = Ot(t, e) || i, c ? t.style[e] = c : ie(t, e)), f = [r, i], Zi(f), r = f[0], i = f[1], d = r.match(le) || [], x = i.match(le) || [], x.length) {
    for (; _ = le.exec(i); )
      g = _[0], y = i.substring(o, _.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), g !== (c = d[u++] || "") && (p = parseFloat(c) || 0, C = c.substr((p + "").length), g.charAt(1) === "=" && (g = fe(p, g) + C), v = parseFloat(g), T = g.substr((v + "").length), o = le.lastIndex - T.length, T || (T = T || mt.units[e] || C, o === i.length && (i += T, a.e += T)), C !== T && (p = $t(t, e, c, T) || 0), a._pt = {
        _next: a._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: v - p,
        m: m && m < 4 || e === "zIndex" ? Math.round : 0
      });
    a.c = o < i.length ? i.substring(o, i.length) : "";
  } else
    a.r = e === "display" && i === "none" ? un : ln;
  return Ti.test(i) && (a.e = 0), this._pt = a, a;
}, pi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ds = function(t) {
  var e = t.split(" "), r = e[0], i = e[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (t = r, r = i, i = t), e[0] = pi[r] || r, e[1] = pi[i] || i, e.join(" ");
}, js = function(t, e) {
  if (e.tween && e.tween._time === e.tween._dur) {
    var r = e.t, i = r.style, n = e.u, s = r._gsap, a, o, u;
    if (n === "all" || n === !0)
      i.cssText = "", o = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], jt[a] && (o = 1, a = a === "transformOrigin" ? ut : Y), ie(r, a);
    o && (ie(r, Y), s && (s.svg && r.removeAttribute("transform"), Ae(r, 1), s.uncache = 1, fn(i)));
  }
}, Ge = {
  clearProps: function(t, e, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = t._pt = new lt(t._pt, e, r, 0, 0, js);
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
}, Re = [1, 0, 0, 1, 0, 0], pn = {}, mn = function(t) {
  return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
}, mi = function(t) {
  var e = Ot(t, Y);
  return mn(e) ? Re : e.substr(7).match(bi).map(q);
}, Br = function(t, e) {
  var r = t._gsap || Kt(t), i = t.style, n = mi(t), s, a, o, u;
  return r.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix, n = [o.a, o.b, o.c, o.d, o.e, o.f], n.join(",") === "1,0,0,1,0,0" ? Re : n) : (n === Re && !t.offsetParent && t !== ce && !r.svg && (o = i.display, i.display = "block", s = t.parentNode, (!s || !t.offsetParent) && (u = 1, a = t.nextElementSibling, ce.appendChild(t)), n = mi(t), o ? i.display = o : ie(t, "display"), u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : ce.removeChild(t))), e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Tr = function(t, e, r, i, n, s) {
  var a = t._gsap, o = n || Br(t, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, _ = a.xOffset || 0, d = a.yOffset || 0, p = o[0], m = o[1], c = o[2], g = o[3], v = o[4], y = o[5], T = e.split(" "), C = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0, w, k, E, b;
  r ? o !== Re && (k = p * g - m * c) && (E = C * (g / k) + x * (-c / k) + (c * y - g * v) / k, b = C * (-m / k) + x * (p / k) - (p * y - m * v) / k, C = E, x = b) : (w = _n(t), C = w.x + (~T[0].indexOf("%") ? C / 100 * w.width : C), x = w.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * w.height : x)), i || i !== !1 && a.smooth ? (v = C - u, y = x - f, a.xOffset = _ + (v * p + y * c) - v, a.yOffset = d + (v * m + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = C, a.yOrigin = x, a.smooth = !!i, a.origin = e, a.originIsAbsolute = !!r, t.style[ut] = "0px 0px", s && (It(s, a, "xOrigin", u, C), It(s, a, "yOrigin", f, x), It(s, a, "xOffset", _, a.xOffset), It(s, a, "yOffset", d, a.yOffset)), t.setAttribute("data-svg-origin", C + " " + x);
}, Ae = function(t, e) {
  var r = t._gsap || new Ki(t);
  if ("x" in r && !e && !r.uncache)
    return r;
  var i = t.style, n = r.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), u = Ot(t, ut) || "0", f, _, d, p, m, c, g, v, y, T, C, x, w, k, E, b, R, z, D, j, X, U, $, Z, ct, xt, zt, ht, Mt, se, it, Tt;
  return f = _ = d = c = g = v = y = T = C = 0, p = m = 1, r.svg = !!(t.getCTM && dn(t)), o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (i[Y] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[Y] !== "none" ? o[Y] : "")), i.scale = i.rotate = i.translate = "none"), k = Br(t, r.svg), r.svg && (r.uncache ? (ct = t.getBBox(), u = r.xOrigin - ct.x + "px " + (r.yOrigin - ct.y) + "px", Z = "") : Z = !e && t.getAttribute("data-svg-origin"), Tr(t, Z || u, !!Z || r.originIsAbsolute, r.smooth !== !1, k)), x = r.xOrigin || 0, w = r.yOrigin || 0, k !== Re && (z = k[0], D = k[1], j = k[2], X = k[3], f = U = k[4], _ = $ = k[5], k.length === 6 ? (p = Math.sqrt(z * z + D * D), m = Math.sqrt(X * X + j * j), c = z || D ? oe(D, z) * Ht : 0, y = j || X ? oe(j, X) * Ht + c : 0, y && (m *= Math.abs(Math.cos(y * he))), r.svg && (f -= x - (x * z + w * j), _ -= w - (x * D + w * X))) : (Tt = k[6], se = k[7], zt = k[8], ht = k[9], Mt = k[10], it = k[11], f = k[12], _ = k[13], d = k[14], E = oe(Tt, Mt), g = E * Ht, E && (b = Math.cos(-E), R = Math.sin(-E), Z = U * b + zt * R, ct = $ * b + ht * R, xt = Tt * b + Mt * R, zt = U * -R + zt * b, ht = $ * -R + ht * b, Mt = Tt * -R + Mt * b, it = se * -R + it * b, U = Z, $ = ct, Tt = xt), E = oe(-j, Mt), v = E * Ht, E && (b = Math.cos(-E), R = Math.sin(-E), Z = z * b - zt * R, ct = D * b - ht * R, xt = j * b - Mt * R, it = X * R + it * b, z = Z, D = ct, j = xt), E = oe(D, z), c = E * Ht, E && (b = Math.cos(E), R = Math.sin(E), Z = z * b + D * R, ct = U * b + $ * R, D = D * b - z * R, $ = $ * b - U * R, z = Z, U = ct), g && Math.abs(g) + Math.abs(c) > 359.9 && (g = c = 0, v = 180 - v), p = q(Math.sqrt(z * z + D * D + j * j)), m = q(Math.sqrt($ * $ + Tt * Tt)), E = oe(U, $), y = Math.abs(E) > 2e-4 ? E * Ht : 0, C = it ? 1 / (it < 0 ? -it : it) : 0), r.svg && (Z = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !mn(Ot(t, Y)), Z && t.setAttribute("transform", Z))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (p *= -1, y += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), e = e || r.uncache, r.x = f - ((r.xPercent = f && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + s, r.z = d + s, r.scaleX = q(p), r.scaleY = q(m), r.rotation = q(c) + a, r.rotationX = q(g) + a, r.rotationY = q(v) + a, r.skewX = y + a, r.skewY = T + a, r.transformPerspective = C + s, (r.zOrigin = parseFloat(u.split(" ")[2]) || !e && r.zOrigin || 0) && (i[ut] = Xe(u)), r.xOffset = r.yOffset = 0, r.force3D = mt.force3D, r.renderTransform = r.svg ? Fs : hn ? gn : zs, r.uncache = 0, r;
}, Xe = function(t) {
  return (t = t.split(" "))[0] + " " + t[1];
}, lr = function(t, e, r) {
  var i = tt(e);
  return q(parseFloat(e) + parseFloat($t(t, "x", r + "px", i))) + i;
}, zs = function(t, e) {
  e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, gn(t, e);
}, Zt = "0deg", Ce = "0px", qt = ") ", gn = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.z, u = r.rotation, f = r.rotationY, _ = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, c = r.scaleY, g = r.transformPerspective, v = r.force3D, y = r.target, T = r.zOrigin, C = "", x = v === "auto" && t && t !== 1 || v === !0;
  if (T && (_ !== Zt || f !== Zt)) {
    var w = parseFloat(f) * he, k = Math.sin(w), E = Math.cos(w), b;
    w = parseFloat(_) * he, b = Math.cos(w), s = lr(y, s, k * b * -T), a = lr(y, a, -Math.sin(w) * -T), o = lr(y, o, E * b * -T + T);
  }
  g !== Ce && (C += "perspective(" + g + qt), (i || n) && (C += "translate(" + i + "%, " + n + "%) "), (x || s !== Ce || a !== Ce || o !== Ce) && (C += o !== Ce || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + qt), u !== Zt && (C += "rotate(" + u + qt), f !== Zt && (C += "rotateY(" + f + qt), _ !== Zt && (C += "rotateX(" + _ + qt), (d !== Zt || p !== Zt) && (C += "skew(" + d + ", " + p + qt), (m !== 1 || c !== 1) && (C += "scale(" + m + ", " + c + qt), y.style[Y] = C || "translate(0, 0)";
}, Fs = function(t, e) {
  var r = e || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, o = r.rotation, u = r.skewX, f = r.skewY, _ = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, c = r.yOrigin, g = r.xOffset, v = r.yOffset, y = r.forceCSS, T = parseFloat(s), C = parseFloat(a), x, w, k, E, b;
  o = parseFloat(o), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, o += f), o || u ? (o *= he, u *= he, x = Math.cos(o) * _, w = Math.sin(o) * _, k = Math.sin(o - u) * -d, E = Math.cos(o - u) * d, u && (f *= he, b = Math.tan(u - f), b = Math.sqrt(1 + b * b), k *= b, E *= b, f && (b = Math.tan(f), b = Math.sqrt(1 + b * b), x *= b, w *= b)), x = q(x), w = q(w), k = q(k), E = q(E)) : (x = _, E = d, w = k = 0), (T && !~(s + "").indexOf("px") || C && !~(a + "").indexOf("px")) && (T = $t(p, "x", s, "px"), C = $t(p, "y", a, "px")), (m || c || g || v) && (T = q(T + m - (m * x + c * k) + g), C = q(C + c - (m * w + c * E) + v)), (i || n) && (b = p.getBBox(), T = q(T + i / 100 * b.width), C = q(C + n / 100 * b.height)), b = "matrix(" + x + "," + w + "," + k + "," + E + "," + T + "," + C + ")", p.setAttribute("transform", b), y && (p.style[Y] = b);
}, Vs = function(t, e, r, i, n) {
  var s = 360, a = K(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? Ht : 1), u = o - i, f = i + u + "deg", _, d;
  return a && (_ = n.split("_")[1], _ === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -s)), _ === "cw" && u < 0 ? u = (u + s * ci) % s - ~~(u / s) * s : _ === "ccw" && u > 0 && (u = (u - s * ci) % s - ~~(u / s) * s)), t._pt = d = new lt(t._pt, e, r, i, u, bs), d.e = f, d.u = "deg", t._props.push(r), d;
}, gi = function(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}, Bs = function(t, e, r) {
  var i = gi({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, o, u, f, _, d, p, m;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), s[Y] = e, a = Ae(r, 1), ie(r, Y), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Y], s[Y] = e, a = Ae(r, 1), s[Y] = u);
  for (o in jt)
    u = i[o], f = a[o], u !== f && n.indexOf(o) < 0 && (p = tt(u), m = tt(f), _ = p !== m ? $t(r, o, u, m) : parseFloat(u), d = parseFloat(f), t._pt = new lt(t._pt, a, o, _, d - _, yr), t._pt.u = m || 0, t._props.push(o));
  gi(a, i);
};
ot("padding,margin,Width,Radius", function(l, t) {
  var e = "Top", r = "Right", i = "Bottom", n = "Left", s = (t < 3 ? [e, r, i, n] : [e + n, e + r, i + r, i + n]).map(function(a) {
    return t < 2 ? l + a : "border" + a + l;
  });
  Ge[t > 1 ? "border" + l : l] = function(a, o, u, f, _) {
    var d, p;
    if (arguments.length < 4)
      return d = s.map(function(m) {
        return Lt(a, m, u);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (f + "").split(" "), p = {}, s.forEach(function(m, c) {
      return p[m] = d[c] = d[c] || d[(c - 1) / 2 | 0];
    }), a.init(o, p, _);
  };
});
var xn = {
  name: "css",
  register: br,
  targetTest: function(t) {
    return t.style && t.nodeType;
  },
  init: function(t, e, r, i, n) {
    var s = this._props, a = t.style, o = r.vars.startAt, u, f, _, d, p, m, c, g, v, y, T, C, x, w, k, E;
    zr || br(), this.styles = this.styles || cn(t), E = this.styles.props, this.tween = r;
    for (c in e)
      if (c !== "autoRound" && (f = e[c], !(_t[c] && Qi(c, e, r, i, t, n)))) {
        if (p = typeof f, m = Ge[c], p === "function" && (f = f.call(r, i, t, n), p = typeof f), p === "string" && ~f.indexOf("random(") && (f = Pe(f)), m)
          m(this, t, c, f, r) && (k = 1);
        else if (c.substr(0, 2) === "--")
          u = (getComputedStyle(t).getPropertyValue(c) + "").trim(), f += "", Yt.lastIndex = 0, Yt.test(u) || (g = tt(u), v = tt(f)), v ? g !== v && (u = $t(t, c, u, v) + v) : g && (f += g), this.add(a, "setProperty", u, f, i, n, 0, 0, c), s.push(c), E.push(c, 0, a[c]);
        else if (p !== "undefined") {
          if (o && c in o ? (u = typeof o[c] == "function" ? o[c].call(r, i, t, n) : o[c], K(u) && ~u.indexOf("random(") && (u = Pe(u)), tt(u + "") || u === "auto" || (u += mt.units[c] || tt(Lt(t, c)) || ""), (u + "").charAt(1) === "=" && (u = Lt(t, c))) : u = Lt(t, c), d = parseFloat(u), y = p === "string" && f.charAt(1) === "=" && f.substr(0, 2), y && (f = f.substr(2)), _ = parseFloat(f), c in St && (c === "autoAlpha" && (d === 1 && Lt(t, "visibility") === "hidden" && _ && (d = 0), E.push("visibility", 0, a.visibility), It(this, a, "visibility", d ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), c !== "scale" && c !== "transform" && (c = St[c], ~c.indexOf(",") && (c = c.split(",")[0]))), T = c in jt, T) {
            if (this.styles.save(c), C || (x = t._gsap, x.renderTransform && !e.parseTransform || Ae(t, e.parseTransform), w = e.smoothOrigin !== !1 && x.smooth, C = this._pt = new lt(this._pt, a, Y, 0, 1, x.renderTransform, x, 0, -1), C.dep = 1), c === "scale")
              this._pt = new lt(this._pt, x, "scaleY", x.scaleY, (y ? fe(x.scaleY, y + _) : _) - x.scaleY || 0, yr), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              E.push(ut, 0, a[ut]), f = Ds(f), x.svg ? Tr(t, f, 0, w, 0, this) : (v = parseFloat(f.split(" ")[2]) || 0, v !== x.zOrigin && It(this, x, "zOrigin", x.zOrigin, v), It(this, a, c, Xe(u), Xe(f)));
              continue;
            } else if (c === "svgOrigin") {
              Tr(t, f, 1, w, 0, this);
              continue;
            } else if (c in pn) {
              Vs(this, x, c, d, y ? fe(d, y + f) : f);
              continue;
            } else if (c === "smoothOrigin") {
              It(this, x, "smooth", x.smooth, f);
              continue;
            } else if (c === "force3D") {
              x[c] = f;
              continue;
            } else if (c === "transform") {
              Bs(this, f, t);
              continue;
            }
          } else c in a || (c = ge(c) || c);
          if (T || (_ || _ === 0) && (d || d === 0) && !Cs.test(f) && c in a)
            g = (u + "").substr((d + "").length), _ || (_ = 0), v = tt(f) || (c in mt.units ? mt.units[c] : g), g !== v && (d = $t(t, c, u, v)), this._pt = new lt(this._pt, T ? x : a, c, d, (y ? fe(d, y + _) : _) - d, !T && (v === "px" || c === "zIndex") && e.autoRound !== !1 ? ws : yr), this._pt.u = v || 0, g !== v && v !== "%" && (this._pt.b = u, this._pt.r = Ts);
          else if (c in a)
            Ls.call(this, t, c, u, y ? y + f : f);
          else if (c in t)
            this.add(t, c, u || t[c], y ? y + f : f, i, n);
          else if (c !== "parseTransform") {
            Or(c, f);
            continue;
          }
          T || (c in a ? E.push(c, 0, a[c]) : E.push(c, 1, u || t[c])), s.push(c);
        }
      }
    k && an(this);
  },
  render: function(t, e) {
    if (e.tween._time || !Fr())
      for (var r = e._pt; r; )
        r.r(t, r.d), r = r._next;
    else
      e.styles.revert();
  },
  get: Lt,
  aliases: St,
  getSetter: function(t, e, r) {
    var i = St[e];
    return i && i.indexOf(",") < 0 && (e = i), e in jt && e !== ut && (t._gsap.x || Lt(t, "x")) ? r && fi === r ? e === "scale" ? Os : Ss : (fi = r || {}) && (e === "scale" ? Ps : Ms) : t.style && !kr(t.style[e]) ? ks : ~e.indexOf("-") ? Es : Dr(t, e);
  },
  core: {
    _removeProperty: ie,
    _getMatrix: Br
  }
};
ft.utils.checkPrefix = ge;
ft.core.getStyleSaver = cn;
(function(l, t, e, r) {
  var i = ot(l + "," + t + "," + e, function(n) {
    jt[n] = 1;
  });
  ot(t, function(n) {
    mt.units[n] = "deg", pn[n] = 1;
  }), St[i[13]] = l + "," + t, ot(r, function(n) {
    var s = n.split(":");
    St[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
ot("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(l) {
  mt.units[l] = "px";
});
ft.registerPlugin(xn);
var wt = ft.registerPlugin(xn) || ft;
wt.core.Tween;
const Zs = ({ width: l, height: t }) => {
  const e = Kr(null), r = Kr(
    wt.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), i = (o) => (r.current.clear(), r.current.to(o(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(o(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(o(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(o(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(o(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(o(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(o(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(o(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(o("text"), {
    opacity: 1,
    duration: 1,
    ease: "power1.in"
  }).to(o(".scanner"), {
    opacity: 1,
    y: 80,
    duration: 1,
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
  })), n = (o, u = !1) => {
    o.forEach((f) => {
      const _ = f.getTotalLength();
      u ? wt.to(f, {
        stroke: "currentColor"
      }) : (wt.set(f, {
        strokeDasharray: _,
        strokeDashoffset: _,
        stroke: "transparent"
      }), wt.to(f, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, s = () => {
    const o = wt.utils.selector(e.current), u = o(".stroke-fng");
    n(u), i(o), r.current.play();
  }, a = () => {
    if (e.current) {
      const o = wt.utils.selector(e.current), u = o(".stroke-fng");
      r.current.reverse(), wt.killTweensOf(u), n(u, !0), wt.killTweensOf(o(".scanner")), wt.set(o(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: s,
      onMouseLeave: a,
      style: { height: t, width: l },
      children: /* @__PURE__ */ P.jsx(En, { ref: e })
    }
  );
}, Is = ({
  rowsCount: l,
  tilesPerRowCount: t,
  animationActive: e = !1
}) => {
  function r() {
    return Array(l).fill(null).map((i, n) => /* @__PURE__ */ P.jsx("div", { className: "hex-row rotate-method", children: Array(t).fill(null).map((s, a) => /* @__PURE__ */ P.jsx("div", { className: `hex ${e ? "animation-active" : ""}` }, a)) }, n));
  }
  return /* @__PURE__ */ P.jsx("div", { className: "piece rotateMethod", children: r() });
}, Ws = (l) => Cn(() => {
  const t = (n, s) => {
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return a[(n + s) % a.length];
  }, e = (n, s) => (n % s).toString(), r = `U-${e(l * 3, 9)}`, i = `${t(l, 20)}${e(l * 7, 99)}`;
  return `${r}${i}`;
}, [l]), Ys = ({ title: l, sciFiCode: t, isActive: e }) => {
  const r = Ws(t);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${e ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ P.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${e ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: `font-bold w-full ${e ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: l
                }
              ),
              /* @__PURE__ */ P.jsxs("div", { className: "text-[0.5rem] text-nowrap mr-2 font-bold", children: [
                "UNIT: ",
                r,
                " AV-OK"
              ] }),
              /* @__PURE__ */ P.jsx(
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
}, qs = ({ options: l, width: t = "w-full" }) => /* @__PURE__ */ P.jsx("div", { className: `flex flex-col gap-2 ${t}`, children: l.map((e, r) => /* @__PURE__ */ bn(Ys, { ...e, key: r, sciFiCode: r })) }), xi = () => /* @__PURE__ */ P.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
  /* @__PURE__ */ P.jsxs("div", { className: "flex flex-col gap-1", children: [
    /* @__PURE__ */ P.jsx("div", { className: "h-full w-[4px] artifact-border" }),
    /* @__PURE__ */ P.jsx("div", { className: "h-1/6 artifact-border" })
  ] }),
  /* @__PURE__ */ P.jsx("div", { className: "h-3/4 w-[4px] artifact-border glowedGray" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-full w-[4px] artifact-border" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-1/4 w-[4px] artifact-border ml-2 self-end" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-1/4 w-[15px] artifact-border self-end rounded-sm glowedGray" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-1/4 w-[4px] artifact-border self-end" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" }),
  /* @__PURE__ */ P.jsx("div", { className: "h-[4px] w-[7px] artifact-border self-end rounded-none glowedGray bg-white ml-5" })
] }), Hs = ({ children: l }) => /* @__PURE__ */ P.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ P.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ P.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ P.jsx(Is, { tilesPerRowCount: 2, rowsCount: 2 }) }),
    /* @__PURE__ */ P.jsx(
      "div",
      {
        className: "font-bold flex items-center text-[40px] font-[Eva]",
        style: { transform: "scaleX(0.79)" },
        children: "NEON GENESIS EVANGELION"
      }
    )
  ] }),
  /* @__PURE__ */ P.jsx("div", { className: "fixed bottom-3 left-3", children: /* @__PURE__ */ P.jsx(xi, {}) }),
  /* @__PURE__ */ P.jsx("div", { className: "fixed bottom-3 right-3 [transform:rotateY(180deg)]", children: /* @__PURE__ */ P.jsx(xi, {}) }),
  /* @__PURE__ */ P.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ P.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ P.jsx("div", { className: "content", children: l }) }) })
] }), Js = ({
  headBlockChildren: l,
  width: t,
  height: e,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: s
}) => /* @__PURE__ */ P.jsxs("div", { className: "card-container relative", style: { width: t, height: e }, children: [
  /* @__PURE__ */ P.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ P.jsx("div", { className: `text-${i} head-block`, children: l }),
        /* @__PURE__ */ P.jsx("div", { className: `text-${i} main-block'`, children: n })
      ]
    }
  ),
  /* @__PURE__ */ P.jsx(
    "div",
    {
      className: `artifact text-${r} ${s ? "animated" : ""}`,
      "data-augmented-ui": "tl-clip border"
    }
  ),
  /* @__PURE__ */ P.jsx(
    "div",
    {
      className: `icon-artifact text-${r} p-1`,
      "data-augmented-ui": "br-clip border"
    }
  )
] });
export {
  Zs as ButtonFinger,
  Js as Card,
  $s as EvaBorderPanel,
  qs as EvaOptionList,
  Gs as EvaProgressBar,
  Is as EvaTilePanel,
  Xs as EvaUnitBox,
  Hs as GeometricLayout
};
