import * as A from "react";
import yn, { useRef as Jr, useMemo as Cn, createElement as bn } from "react";
var jt = { exports: {} }, vt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kr;
function Tn() {
  if (Kr) return vt;
  Kr = 1;
  var o = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var s = null;
    if (n !== void 0 && (s = "" + n), i.key !== void 0 && (s = "" + i.key), "key" in i) {
      n = {};
      for (var a in i)
        a !== "key" && (n[a] = i[a]);
    } else n = i;
    return i = n.ref, {
      $$typeof: o,
      type: r,
      key: s,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return vt.Fragment = e, vt.jsx = t, vt.jsxs = t, vt;
}
var yt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function wn() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    function o(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === ce ? null : h.displayName || h.name || null;
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
        case L:
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
            var O = h.render;
            return h = h.displayName, h || (h = O.displayName || O.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case G:
            return O = h.displayName || null, O !== null ? O : o(h.type) || "Memo";
          case B:
            O = h._payload, h = h._init;
            try {
              return o(h(O));
            } catch {
            }
        }
      return null;
    }
    function e(h) {
      return "" + h;
    }
    function t(h) {
      try {
        e(h);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var S = O.error, D = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return S.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), e(h);
      }
    }
    function r() {
    }
    function i() {
      if (ie === 0) {
        be = console.log, Ir = console.info, Wr = console.warn, Yr = console.error, Br = console.group, Ur = console.groupCollapsed, $r = console.groupEnd;
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
      ie++;
    }
    function n() {
      if (ie--, ie === 0) {
        var h = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: he({}, h, { value: be }),
          info: he({}, h, { value: Ir }),
          warn: he({}, h, { value: Wr }),
          error: he({}, h, { value: Yr }),
          group: he({}, h, { value: Br }),
          groupCollapsed: he({}, h, { value: Ur }),
          groupEnd: he({}, h, { value: $r })
        });
      }
      0 > ie && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function s(h) {
      if (Jt === void 0)
        try {
          throw Error();
        } catch (S) {
          var O = S.stack.trim().match(/\n( *(at )?)/);
          Jt = O && O[1] || "", Gr = -1 < S.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < S.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Jt + h + Gr;
    }
    function a(h, O) {
      if (!h || Kt) return "";
      var S = Qt.get(h);
      if (S !== void 0) return S;
      Kt = !0, S = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var D = null;
      D = ve.H, ve.H = null, i();
      try {
        var Q = {
          DetermineComponentFrameRoot: function() {
            try {
              if (O) {
                var Fe = function() {
                  throw Error();
                };
                if (Object.defineProperty(Fe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(Fe, []);
                  } catch (Re) {
                    var Lt = Re;
                  }
                  Reflect.construct(h, [], Fe);
                } else {
                  try {
                    Fe.call();
                  } catch (Re) {
                    Lt = Re;
                  }
                  h.call(Fe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (Re) {
                  Lt = Re;
                }
                (Fe = h()) && typeof Fe.catch == "function" && Fe.catch(function() {
                });
              }
            } catch (Re) {
              if (Re && Lt && typeof Re.stack == "string")
                return [Re.stack, Lt.stack];
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
        var M = Q.DetermineComponentFrameRoot(), Ne = M[0], st = M[1];
        if (Ne && st) {
          var ne = Ne.split(`
`), Xe = st.split(`
`);
          for (M = I = 0; I < ne.length && !ne[I].includes(
            "DetermineComponentFrameRoot"
          ); )
            I++;
          for (; M < Xe.length && !Xe[M].includes(
            "DetermineComponentFrameRoot"
          ); )
            M++;
          if (I === ne.length || M === Xe.length)
            for (I = ne.length - 1, M = Xe.length - 1; 1 <= I && 0 <= M && ne[I] !== Xe[M]; )
              M--;
          for (; 1 <= I && 0 <= M; I--, M--)
            if (ne[I] !== Xe[M]) {
              if (I !== 1 || M !== 1)
                do
                  if (I--, M--, 0 > M || ne[I] !== Xe[M]) {
                    var xt = `
` + ne[I].replace(
                      " at new ",
                      " at "
                    );
                    return h.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", h.displayName)), typeof h == "function" && Qt.set(h, xt), xt;
                  }
                while (1 <= I && 0 <= M);
              break;
            }
        }
      } finally {
        Kt = !1, ve.H = D, n(), Error.prepareStackTrace = S;
      }
      return ne = (ne = h ? h.displayName || h.name : "") ? s(ne) : "", typeof h == "function" && Qt.set(h, ne), ne;
    }
    function l(h) {
      if (h == null) return "";
      if (typeof h == "function") {
        var O = h.prototype;
        return a(
          h,
          !(!O || !O.isReactComponent)
        );
      }
      if (typeof h == "string") return s(h);
      switch (h) {
        case L:
          return s("Suspense");
        case j:
          return s("SuspenseList");
      }
      if (typeof h == "object")
        switch (h.$$typeof) {
          case z:
            return h = a(h.render, !1), h;
          case G:
            return l(h.type);
          case B:
            O = h._payload, h = h._init;
            try {
              return l(h(O));
            } catch {
            }
        }
      return "";
    }
    function u() {
      var h = ve.A;
      return h === null ? null : h.getOwner();
    }
    function f(h) {
      if (ze.call(h, "key")) {
        var O = Object.getOwnPropertyDescriptor(h, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function _(h, O) {
      function S() {
        Xr || (Xr = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      S.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: S,
        configurable: !0
      });
    }
    function d() {
      var h = o(this.type);
      return Zr[h] || (Zr[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function p(h, O, S, D, Q, I) {
      return S = I.ref, h = {
        $$typeof: C,
        type: h,
        key: O,
        props: I,
        _owner: Q
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(h, "ref", {
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
    function m(h, O, S, D, Q, I) {
      if (typeof h == "string" || typeof h == "function" || h === w || h === E || h === k || h === L || h === j || h === U || typeof h == "object" && h !== null && (h.$$typeof === B || h.$$typeof === G || h.$$typeof === R || h.$$typeof === b || h.$$typeof === z || h.$$typeof === Me || h.getModuleId !== void 0)) {
        var M = O.children;
        if (M !== void 0)
          if (D)
            if (nt(M)) {
              for (D = 0; D < M.length; D++)
                c(M[D], h);
              Object.freeze && Object.freeze(M);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else c(M, h);
      } else
        M = "", (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (M += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), h === null ? D = "null" : nt(h) ? D = "array" : h !== void 0 && h.$$typeof === C ? (D = "<" + (o(h.type) || "Unknown") + " />", M = " Did you accidentally export a JSX literal instead of a component?") : D = typeof h, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          D,
          M
        );
      if (ze.call(O, "key")) {
        M = o(h);
        var Ne = Object.keys(O).filter(function(ne) {
          return ne !== "key";
        });
        D = 0 < Ne.length ? "{key: someKey, " + Ne.join(": ..., ") + ": ...}" : "{key: someKey}", qr[M + D] || (Ne = 0 < Ne.length ? "{" + Ne.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          M,
          Ne,
          M
        ), qr[M + D] = !0);
      }
      if (M = null, S !== void 0 && (t(S), M = "" + S), f(O) && (t(O.key), M = "" + O.key), "key" in O) {
        S = {};
        for (var st in O)
          st !== "key" && (S[st] = O[st]);
      } else S = O;
      return M && _(
        S,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), p(h, M, I, Q, u(), S);
    }
    function c(h, O) {
      if (typeof h == "object" && h && h.$$typeof !== vn) {
        if (nt(h))
          for (var S = 0; S < h.length; S++) {
            var D = h[S];
            g(D) && v(D, O);
          }
        else if (g(h))
          h._store && (h._store.validated = 1);
        else if (h === null || typeof h != "object" ? S = null : (S = X && h[X] || h["@@iterator"], S = typeof S == "function" ? S : null), typeof S == "function" && S !== h.entries && (S = S.call(h), S !== h))
          for (; !(h = S.next()).done; )
            g(h.value) && v(h.value, O);
      }
    }
    function g(h) {
      return typeof h == "object" && h !== null && h.$$typeof === C;
    }
    function v(h, O) {
      if (h._store && !h._store.validated && h.key == null && (h._store.validated = 1, O = y(O), !Hr[O])) {
        Hr[O] = !0;
        var S = "";
        h && h._owner != null && h._owner !== u() && (S = null, typeof h._owner.tag == "number" ? S = o(h._owner.type) : typeof h._owner.name == "string" && (S = h._owner.name), S = " It was passed a child from " + S + ".");
        var D = ve.getCurrentStack;
        ve.getCurrentStack = function() {
          var Q = l(h.type);
          return D && (Q += D() || ""), Q;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          O,
          S
        ), ve.getCurrentStack = D;
      }
    }
    function y(h) {
      var O = "", S = u();
      return S && (S = o(S.type)) && (O = `

Check the render method of \`` + S + "`."), O || (h = o(h)) && (O = `

Check the top-level render call using <` + h + ">."), O;
    }
    var T = yn, C = Symbol.for("react.transitional.element"), x = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), R = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), X = Symbol.iterator, ce = Symbol.for("react.client.reference"), ve = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ze = Object.prototype.hasOwnProperty, he = Object.assign, Me = Symbol.for("react.client.reference"), nt = Array.isArray, ie = 0, be, Ir, Wr, Yr, Br, Ur, $r;
    r.__reactDisabledLog = !0;
    var Jt, Gr, Kt = !1, Qt = new (typeof WeakMap == "function" ? WeakMap : Map)(), vn = Symbol.for("react.client.reference"), Xr, Zr = {}, qr = {}, Hr = {};
    yt.Fragment = w, yt.jsx = function(h, O, S, D, Q) {
      return m(h, O, S, !1, D, Q);
    }, yt.jsxs = function(h, O, S, D, Q) {
      return m(h, O, S, !0, D, Q);
    };
  }()), yt;
}
var ei;
function kn() {
  return ei || (ei = 1, process.env.NODE_ENV === "production" ? jt.exports = Tn() : jt.exports = wn()), jt.exports;
}
var P = kn();
const $s = ({
  children: o,
  mode: e = "warning",
  pulseAnimation: t = !0
}) => /* @__PURE__ */ P.jsx("div", { className: `piece ${t && "animate-pulse"}`, children: /* @__PURE__ */ P.jsx(
  "div",
  {
    className: `glowedBorder ${e === "warning" ? "text-evaTextWarning text-shadow-warning border-evaTextWarning" : "text-evaTextDanger text-shadow-danger border-evaTextDanger"}  ${e} label`,
    children: o
  }
) }), Gs = ({ barsCount: o, currentBarIndex: e }) => {
  function t() {
    const r = [];
    for (let i = 0; i < o; i++)
      r.push(
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `h-full w-[7px] rounded-md bg-evaTextDanger glowedDanger ${i < e ? "visible" : "hidden"}`
          },
          i
        )
      );
    return r;
  }
  return /* @__PURE__ */ P.jsxs("div", { className: "h-[135px] flex flex-col", style: { width: `${o * 10}px` }, children: [
    /* @__PURE__ */ P.jsxs("div", { className: "h-[15px] flex justify-between", children: [
      /* @__PURE__ */ P.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +0.0 |" }),
      /* @__PURE__ */ P.jsx("div", { className: "warning text-evaTextWarning text-xs font-[600] h-full font-['RobotoCondensed']", children: "| +50.0 |" }),
      /* @__PURE__ */ P.jsxs("div", { className: "danger text-evaTextDanger text-xs font-[600] h-full font-['RobotoCondensed']", children: [
        /* @__PURE__ */ P.jsx("span", { className: "", children: "| CAUTION" }),
        /* @__PURE__ */ P.jsx("span", { children: " | +100.0 |" })
      ] })
    ] }),
    /* @__PURE__ */ P.jsx("div", { className: "h-[105px] flex flex-row overflow-hidden gap-[3px]", children: t() }),
    /* @__PURE__ */ P.jsx("div", { className: "h-[15px]" })
  ] });
}, Xs = ({ unitNumber: o, subjectName: e }) => /* @__PURE__ */ P.jsxs("div", { className: "grid grid-rows-3 p-2 h-[135px] w-auto text-evaTextWarning text-shadow-warning text-center bg-red-600 bg-opacity-20 border-2 border-evaTextDanger glowedBorder", children: [
  /* @__PURE__ */ P.jsx("div", { className: "text-xl font-[400] label", children: "Subject" }),
  /* @__PURE__ */ P.jsx("div", { className: "text-2xl font-[600] label", children: o }),
  /* @__PURE__ */ P.jsx("div", { className: "text-xl font-[400] label", children: e })
] }), En = (o) => /* @__PURE__ */ A.createElement("svg", { className: "w-full h-full", viewBox: "0 0 80 80", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...o }, /* @__PURE__ */ A.createElement("g", { clipPath: "url(#clip0_2004_472)" }, /* @__PURE__ */ A.createElement("path", { className: "scanner", d: "M0 0 H463", opacity: 0, stroke: "#3ee73e", strokeWidth: 2, fill: "#3ee73e" }), /* @__PURE__ */ A.createElement("path", { d: "M43.3464 45.3351V42.717C43.3464 41.6847 42.4622 40.8448 41.3754 40.8448C40.2886 40.8448 39.4044 41.6847 39.4044 42.717V45.0808C39.4044 47.9293 38.2996 50.6642 36.2933 52.7815L33.5271 55.7009C33.2947 55.9462 33.3156 56.324 33.5739 56.5448C33.832 56.7656 34.2297 56.7456 34.4622 56.5004L37.2284 53.581C39.4429 51.2438 40.6625 48.2251 40.6625 45.0808V42.717C40.6625 42.3436 40.9823 42.0398 41.3754 42.0398C41.7685 42.0398 42.0883 42.3436 42.0883 42.717V45.3351C42.0883 48.8405 40.7211 52.1995 38.2385 54.7934L35.5421 57.6106C35.3084 57.8547 35.3274 58.2327 35.5844 58.4547C35.705 58.5588 35.8564 58.61 36.0073 58.61C36.1784 58.61 36.3489 58.5442 36.473 58.4145L39.1693 55.5972C41.8629 52.7829 43.3464 49.1384 43.3464 45.3351Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M46.0303 42.7169C46.0303 40.2789 43.9421 38.2955 41.3754 38.2955C38.8087 38.2955 36.7205 40.2789 36.7205 42.7169V45.0807C36.7205 47.2985 35.8603 49.4277 34.2984 51.0761L32.3318 53.1516C32.0994 53.3969 32.1204 53.7747 32.3786 53.9955C32.6369 54.2162 33.0345 54.1962 33.267 53.951L35.2335 51.8755C37.0037 50.0073 37.9787 47.5942 37.9787 45.0807V42.7169C37.9787 40.9378 39.5024 39.4905 41.3755 39.4905C43.2485 39.4905 44.7723 40.9378 44.7723 42.7169V45.335C44.7723 49.4759 43.1573 53.444 40.2245 56.5081L37.9495 58.8852C37.7157 59.1293 37.7347 59.5073 37.9917 59.7293C38.1123 59.8334 38.2637 59.8846 38.4146 59.8846C38.5857 59.8846 38.7562 59.8187 38.8803 59.689L41.1554 57.3119C44.299 54.0274 46.0303 49.7739 46.0303 45.335V42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.7142 42.717C48.7142 38.8733 45.422 35.7463 41.3754 35.7463C37.3287 35.7463 34.0366 38.8733 34.0366 42.717V45.0808C34.0366 46.6677 33.4211 48.1913 32.3034 49.3708L30.5327 51.2396C30.3003 51.4849 30.3212 51.8626 30.5795 52.0835C30.8376 52.3042 31.2354 52.2841 31.4679 52.039L33.2386 50.1702C34.5645 48.7709 35.2947 46.9634 35.2947 45.0808V42.717C35.2947 39.5322 38.0224 36.9413 41.3754 36.9413C44.7283 36.9413 47.4561 39.5322 47.4561 42.717V45.3351C47.4561 50.1116 45.5931 54.6887 42.2103 58.223L41.5807 58.8808C41.347 59.125 41.366 59.5029 41.6231 59.7249C41.7436 59.8289 41.8951 59.8802 42.0459 59.8802C42.217 59.8802 42.3875 59.8143 42.5116 59.6847L43.1411 59.0268C46.7349 55.272 48.7141 50.4096 48.7141 45.3351V42.717H48.7142Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M31.3527 42.7169C31.3527 43.047 31.6344 43.3144 31.9818 43.3144C32.3292 43.3144 32.6108 43.047 32.6108 42.7169C32.6108 40.705 33.3798 38.7615 34.7763 37.2444C36.1598 35.7414 38.0585 34.7585 40.1228 34.4768C40.4667 34.4298 40.7054 34.127 40.656 33.8004C40.6066 33.4738 40.2874 33.2474 39.9439 33.294C37.5821 33.6163 35.4104 34.7399 33.8291 36.4579C32.2322 38.1928 31.3527 40.4157 31.3527 42.7169Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M32.6107 45.0808C32.6107 44.7508 32.3291 44.4833 31.9817 44.4833C31.6343 44.4833 31.3526 44.7508 31.3526 45.0808C31.3526 46.037 30.9818 46.9548 30.3085 47.6654L28.7335 49.3277C28.5011 49.5729 28.5221 49.9507 28.7803 50.1715C28.9006 50.2743 29.0509 50.3249 29.2009 50.3249C29.373 50.3249 29.5445 50.2581 29.6687 50.1271L31.2437 48.4648C32.1252 47.5344 32.6107 46.3327 32.6107 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M50.1634 50.4144C49.8272 50.3312 49.4836 50.522 49.3956 50.8411C49.1633 51.6839 48.8745 52.5217 48.5367 53.3313C48.4087 53.6381 48.5668 53.9853 48.8898 54.1068C48.9659 54.1354 49.0442 54.149 49.1214 54.149C49.3717 54.149 49.6085 54.006 49.7064 53.7714C50.0628 52.917 50.3676 52.033 50.6127 51.1436C50.7006 50.8245 50.4994 50.4979 50.1634 50.4144Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.0696 35.6373C47.8112 35.4165 47.4134 35.4368 47.1812 35.6821C46.949 35.9275 46.9701 36.3053 47.2284 36.5259C49.0787 38.1058 50.1399 40.3623 50.1399 42.7169V45.335C50.1399 46.3287 50.0677 47.33 49.9254 48.3112C49.878 48.6381 50.1186 48.9396 50.4627 48.9846C50.4918 48.9884 50.5207 48.9903 50.5493 48.9903C50.8587 48.9903 51.1283 48.7734 51.1717 48.4742C51.3218 47.4391 51.3979 46.3829 51.3979 45.3349V42.7169C51.398 40.0239 50.1848 37.4434 48.0696 35.6373Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M45.1289 35.1947C45.2162 35.2342 45.3082 35.2529 45.3989 35.2529C45.634 35.2529 45.8595 35.1271 45.9673 34.9121C46.1167 34.6142 45.9834 34.2576 45.6698 34.1158C44.7635 33.7059 43.8002 33.4294 42.8067 33.2939C42.4624 33.2473 42.1441 33.4738 42.0947 33.8003C42.0453 34.1269 42.284 34.4298 42.6278 34.4767C43.4957 34.5952 44.3372 34.8367 45.1289 35.1947Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M41.3754 30.6478C41.1401 30.6478 40.9021 30.654 40.6678 30.6662C40.3209 30.6844 40.0552 30.9663 40.0743 31.2957C40.0935 31.6252 40.3899 31.8789 40.7371 31.8593C40.9484 31.8482 41.1631 31.8427 41.3754 31.8427C47.6881 31.8427 52.8239 36.7208 52.8239 42.7169V45.335C52.8239 45.665 53.1055 45.9324 53.4529 45.9324C53.8003 45.9324 54.082 45.665 54.082 45.335V42.7169C54.082 36.062 48.3818 30.6478 41.3754 30.6478Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M34.4976 33.8896C34.6214 33.8896 34.7467 33.8548 34.8561 33.7826C35.9027 33.0913 37.052 32.5753 38.2725 32.2484C38.6069 32.1588 38.8015 31.8287 38.7073 31.5112C38.613 31.1936 38.2653 31.009 37.9311 31.0982C36.5757 31.4611 35.2995 32.0342 34.1379 32.8013C33.8527 32.9898 33.7822 33.3621 33.9806 33.633C34.1028 33.8001 34.2985 33.8896 34.4976 33.8896Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M29.9269 45.0808V42.717C29.9269 39.9375 31.0351 37.2904 33.0474 35.2631C33.2856 35.023 33.274 34.645 33.0212 34.4185C32.7684 34.1921 32.3703 34.2034 32.132 34.4434C29.8987 36.6932 28.6688 39.6316 28.6688 42.717V45.0808C28.6688 45.406 28.5427 45.7182 28.3137 45.9599L27.5381 46.7784C27.3056 47.0237 27.3266 47.4015 27.5849 47.6222C27.705 47.7251 27.8555 47.7757 28.0055 47.7757C28.1776 47.7757 28.349 47.709 28.4732 47.5779L29.2489 46.7594C29.6861 46.2978 29.9269 45.7017 29.9269 45.0808Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M55.9669 38.0648C55.277 36.1174 54.1805 34.358 52.708 32.8355C52.4729 32.5925 52.075 32.5764 51.8192 32.7997C51.5634 33.023 51.5465 33.4009 51.7815 33.644C53.1341 35.0424 54.1412 36.658 54.7746 38.4459C54.863 38.6955 55.108 38.853 55.3706 38.853C55.4372 38.853 55.5048 38.8428 55.5714 38.8216C55.9005 38.7163 56.0777 38.3775 55.9669 38.0648Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M46.3465 28.881C46.018 28.7742 45.6602 28.9406 45.5477 29.2529C45.4352 29.5651 45.6105 29.9048 45.9392 30.0115C47.3263 30.4623 48.6286 31.1154 49.8099 31.9528C49.9229 32.0329 50.0548 32.0715 50.1857 32.0715C50.3774 32.0715 50.5668 31.9885 50.6903 31.8313C50.8982 31.5669 50.8408 31.1924 50.5624 30.9951C49.2761 30.0834 47.8576 29.372 46.3465 28.881Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M31.6014 33.0304C34.2475 30.6207 37.7186 29.2935 41.3754 29.2935C42.0544 29.2935 42.7372 29.34 43.4047 29.4314C43.7489 29.4791 44.0676 29.252 44.1172 28.9254C44.1669 28.5988 43.9284 28.2959 43.5846 28.2487C42.8576 28.1492 42.1143 28.0986 41.3754 28.0986C37.3925 28.0986 33.6122 29.5438 30.7308 32.1679C27.8583 34.7839 26.1785 38.2945 26.0006 42.053C25.985 42.3827 26.2538 42.662 26.6007 42.6767C26.6104 42.6772 26.62 42.6773 26.6295 42.6773C26.9639 42.6773 27.2423 42.4272 27.2575 42.1067C27.4206 38.6563 28.9633 35.433 31.6014 33.0304Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M41.3753 25.5493C39.9686 25.5493 38.5669 25.7041 37.2091 26.0096C36.871 26.0856 36.6619 26.4076 36.7419 26.7286C36.822 27.0497 37.161 27.2483 37.499 27.1723C38.762 26.8883 40.0661 26.7442 41.3753 26.7442C45.988 26.7442 50.2936 28.4898 53.499 31.6591C53.6226 31.7813 53.7875 31.8428 53.9528 31.8428C54.1095 31.8428 54.2665 31.7875 54.3885 31.6762C54.639 31.4475 54.6471 31.0693 54.4063 30.8314C52.7362 29.18 50.7744 27.881 48.5754 26.9705C46.2978 26.0274 43.8753 25.5493 41.3753 25.5493Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M27.2456 32.9902C27.3607 33.0758 27.4973 33.1173 27.633 33.1173C27.8198 33.1173 28.0046 33.0387 28.1287 32.8882C29.9214 30.7132 32.2816 29.0072 34.9539 27.9544C35.2748 27.828 35.4271 27.4784 35.294 27.1736C35.1609 26.8688 34.7927 26.724 34.472 26.8506C31.6001 27.9819 29.0641 29.8149 27.1381 32.1514C26.9239 32.4113 26.9721 32.7868 27.2456 32.9902Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M32.6532 26.085C32.745 26.085 32.8382 26.0659 32.9262 26.0254C35.5747 24.8108 38.4174 24.195 41.3753 24.195C42.9167 24.195 44.4519 24.3672 45.938 24.7069C46.2756 24.7838 46.6155 24.5866 46.6967 24.2658C46.778 23.945 46.5701 23.6223 46.2323 23.5451C44.6499 23.1834 43.0158 23 41.3753 23C38.2264 23 35.1997 23.6558 32.3793 24.9493C32.0665 25.0928 31.9353 25.45 32.0863 25.7472C32.1948 25.9606 32.4194 26.085 32.6532 26.085Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { d: "M48.5671 25.5001C49.2156 25.7454 49.8575 26.0274 50.4749 26.3382C50.5687 26.3855 50.6695 26.4079 50.7688 26.4079C50.9943 26.4079 51.2123 26.2925 51.3252 26.09C51.4878 25.7985 51.3709 25.4369 51.0639 25.2823C50.4066 24.9515 49.7231 24.6512 49.0325 24.39C48.7097 24.2679 48.3439 24.4175 48.2154 24.7239C48.0869 25.0305 48.2444 25.3781 48.5671 25.5001Z", fill: "none", className: "stroke-fng", stroke: "currentColor", strokeWidth: 1 }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-top", d: "M40.8143 11.61429L34 5H47.6286L40.8143 11.61429Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-right", d: "M66 40.7945L70 34L70 47.5891L66 40.7945Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-right-top", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 18.2286L70.4849 5L70.4849 5L67 5L57 5L57 8.30714L67 8.30714L67 18.2286L70.4849 18.2286Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-right-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M70.4849 71.9214L70.4849 62L67.1137 62L67.1137 71.9214L57 71.9214L57 75.2286L67.1137 75.2286L67.1137 75.2286L70.4849 75.2286L70.4849 75.2286L70.4849 71.9214Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-left-top", fillRule: "evenodd", clipRule: "evenodd", d: "M10 8.30715V18.2286H13.37123L13.37123 8.30715H23.4849V5H13.37123V5L10 5V5V8.30715Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "corner-left-bot", fillRule: "evenodd", clipRule: "evenodd", d: "M13.37125 75.2286L23.4849 75.2286L23.4849 71.9214L13.37125 71.9214L13.37125 62L10 62L10 71.9214L10 71.9214L10 75.2286L10 75.2286L13.37125 75.2286Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-left", d: "M14 40.7946L10 47.5891L10 34L14 40.7946Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("path", { className: "edge-triangle-bot", d: "M40.815 69L47.63 75.6143L34 75.6143L40.815 69Z", fill: "currentColor" }), /* @__PURE__ */ A.createElement("text", { className: "text font-[RobotoCondensed]", x: 22, y: 15, opacity: 0, fontWeight: 600, fontSize: 5, textAnchor: "left", fill: "#3ee73e" }, `\r
            ACCESS GRANTED\r
        `)), /* @__PURE__ */ A.createElement("defs", null, /* @__PURE__ */ A.createElement("clipPath", { id: "clip0_2004_472" }, /* @__PURE__ */ A.createElement("rect", { width: 80, height: 80, fill: "white" }))));
function Ae(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function vi(o, e) {
  o.prototype = Object.create(e.prototype), o.prototype.constructor = o, o.__proto__ = e;
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
var me = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, ht = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Tr, K, V, Oe = 1e8, te = 1 / Oe, lr = Math.PI * 2, On = lr / 4, Sn = 0, yi = Math.sqrt, Pn = Math.cos, Mn = Math.sin, J = function(e) {
  return typeof e == "string";
}, $ = function(e) {
  return typeof e == "function";
}, Le = function(e) {
  return typeof e == "number";
}, wr = function(e) {
  return typeof e > "u";
}, Pe = function(e) {
  return typeof e == "object";
}, ae = function(e) {
  return e !== !1;
}, kr = function() {
  return typeof window < "u";
}, zt = function(e) {
  return $(e) || J(e);
}, Ci = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, re = Array.isArray, ur = /(?:-?\.?\d|\.)+/gi, bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ot = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, er = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Ti = /[+-]=-?[.\d]+/, wi = /[^,'"\[\]\s]+/gi, Nn = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, W, we, fr, Er, ge = {}, Wt = {}, ki, Ei = function(e) {
  return (Wt = _t(e, ge)) && fe;
}, Or = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, Ot = function(e, t) {
  return !t && console.warn(e);
}, Oi = function(e, t) {
  return e && (ge[e] = t) && Wt && (Wt[e] = t) || ge;
}, St = function() {
  return 0;
}, Rn = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, Ft = {
  suppressEvents: !0,
  kill: !1
}, An = {
  suppressEvents: !0
}, Sr = {}, Ye = [], cr = {}, Si, _e = {}, tr = {}, ti = 30, Vt = [], Pr = "", Mr = function(e) {
  var t = e[0], r, i;
  if (Pe(t) || $(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = Vt.length; i-- && !Vt[i].targetTest(t); )
      ;
    r = Vt[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new Ki(e[i], r))) || e.splice(i, 1);
  return e;
}, Ke = function(e) {
  return e._gsap || Mr(Ce(e))[0]._gsap;
}, Pi = function(e, t, r) {
  return (r = e[t]) && $(r) ? e[t]() : wr(r) && e.getAttribute && e.getAttribute(t) || r;
}, oe = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, Z = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, H = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ut = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, Dn = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Yt = function() {
  var e = Ye.length, t = Ye.slice(0), r, i;
  for (cr = {}, Ye.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Mi = function(e, t, r, i) {
  Ye.length && !K && Yt(), e.render(t, r, K && t < 0 && (e._initted || e._startAt)), Ye.length && !K && Yt();
}, Ni = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(wi).length < 2 ? t : J(e) ? e.trim() : e;
}, Ri = function(e) {
  return e;
}, xe = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Ln = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, _t = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, ri = function o(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Pe(t[r]) ? o(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Bt = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, wt = function(e) {
  var t = e.parent || W, r = e.keyframes ? Ln(re(e.keyframes)) : xe;
  if (ae(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, jn = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, Ai = function(e, t, r, i, n) {
  var s = e[i], a;
  if (n)
    for (a = t[n]; s && s[n] > a; )
      s = s._prev;
  return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t;
}, Zt = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, s = t._next;
  n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Ue = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, Qe = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, zn = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, hr = function(e, t, r, i) {
  return e._startAt && (K ? e._startAt.revert(Ft) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Fn = function o(e) {
  return !e || e._ts && o(e.parent);
}, ii = function(e) {
  return e._repeat ? dt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, dt = function(e, t) {
  var r = Math.floor(e = H(e / t));
  return e && r === e ? r - 1 : r;
}, Ut = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, qt = function(e) {
  return e._end = H(e._start + (e._tDur / Math.abs(e._ts || e._rts || te) || 0));
}, Ht = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = H(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), qt(e), r._dirty || Qe(r, e)), e;
}, Di = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Ut(e.rawTime(), t), (!t._dur || Dt(0, t.totalDuration(), r) - t._tTime > te) && t.render(r, !0)), Qe(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -1e-8;
  }
}, ke = function(e, t, r, i) {
  return t.parent && Ue(t), t._start = H((Le(r) ? r : r || e !== W ? ye(e, r, t) : e._time) + t._delay), t._end = H(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), Ai(e, t, "_first", "_last", e._sort ? "_start" : 0), _r(t) || (e._recent = t), i || Di(e, t), e._ts < 0 && Ht(e, e._tTime), e;
}, Li = function(e, t) {
  return (ge.ScrollTrigger || Or("scrollTrigger", t)) && ge.ScrollTrigger.create(t, e);
}, ji = function(e, t, r, i, n) {
  if (Rr(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !K && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Si !== de.frame)
    return Ye.push(e), e._lazy = [n, i], 1;
}, Vn = function o(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || o(t));
}, _r = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, In = function(e, t, r, i) {
  var n = e.ratio, s = t < 0 || !t && (!e._start && Vn(e) && !(!e._initted && _r(e)) || (e._ts < 0 || e._dp._ts < 0) && !_r(e)) ? 0 : 1, a = e._rDelay, l = 0, u, f, _;
  if (a && e._repeat && (l = Dt(0, e._tDur, t), f = dt(l, a), e._yoyo && f & 1 && (s = 1 - s), f !== dt(e._tTime, a) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || K || i || e._zTime === te || !t && e._zTime) {
    if (!e._initted && ji(e, t, i, r, l))
      return;
    for (_ = e._zTime, e._zTime = t || (r ? te : 0), r || (r = t && !_), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(s, u.d), u = u._next;
    t < 0 && hr(e, t, r, !0), e._onUpdate && !r && pe(e, "onUpdate"), l && e._repeat && !r && e.parent && pe(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Ue(e, 1), !r && !K && (pe(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, Wn = function(e, t, r) {
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
}, pt = function(e, t, r, i) {
  var n = e._repeat, s = H(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : H(s * (n + 1) + e._rDelay * n) : s, a > 0 && !i && Ht(e, e._tTime = e._tDur * a), e.parent && qt(e), r || Qe(e.parent, e), e;
}, ni = function(e) {
  return e instanceof se ? Qe(e) : pt(e, e._dur);
}, Yn = {
  _start: 0,
  endTime: St,
  totalDuration: St
}, ye = function o(e, t, r) {
  var i = e.labels, n = e._recent || Yn, s = e.duration() >= Oe ? n.endTime(!1) : e._dur, a, l, u;
  return J(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = s), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && r && (l = l / 100 * (re(r) ? r[0] : r).totalDuration()), a > 1 ? o(e, t.substr(0, a - 1), r) + l : s + l)) : t == null ? s : +t;
}, kt = function(e, t, r) {
  var i = Le(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), s = t[n], a, l;
  if (i && (s.duration = t[1]), s.parent = r, e) {
    for (a = s, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = ae(l.vars.inherit) && l.parent;
    s.immediateRender = ae(a.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1];
  }
  return new q(t[0], s, t[n + 1]);
}, Ge = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Dt = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, ee = function(e, t) {
  return !J(e) || !(t = Nn.exec(e)) ? "" : t[1];
}, Bn = function(e, t, r) {
  return Ge(r, function(i) {
    return Dt(e, t, i);
  });
}, dr = [].slice, zi = function(e, t) {
  return e && Pe(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Pe(e[0])) && !e.nodeType && e !== we;
}, Un = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return J(i) && !t || zi(i, 1) ? (n = r).push.apply(n, Ce(i)) : r.push(i);
  }) || r;
}, Ce = function(e, t, r) {
  return V && !t && V.selector ? V.selector(e) : J(e) && !r && (fr || !mt()) ? dr.call((t || Er).querySelectorAll(e), 0) : re(e) ? Un(e, r) : zi(e) ? dr.call(e, 0) : e ? [e] : [];
}, pr = function(e) {
  return e = Ce(e)[0] || Ot("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Ce(t, r.querySelectorAll ? r : r === e ? Ot("Invalid scope") || Er.createElement("div") : e);
  };
}, Fi = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, Vi = function(e) {
  if ($(e))
    return e;
  var t = Pe(e) ? e : {
    each: e
  }, r = et(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, s = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = t.axis, f = i, _ = i;
  return J(i) ? f = _ = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (f = i[0], _ = i[1]), function(d, p, m) {
    var c = (m || t).length, g = s[c], v, y, T, C, x, w, k, E, b;
    if (!g) {
      if (b = t.grid === "auto" ? 0 : (t.grid || [1, Oe])[1], !b) {
        for (k = -1e8; k < (k = m[b++].getBoundingClientRect().left) && b < c; )
          ;
        b < c && b--;
      }
      for (g = s[c] = [], v = l ? Math.min(b, c) * f - 0.5 : i % b, y = b === Oe ? 0 : l ? c * _ / b - 0.5 : i / b | 0, k = 0, E = Oe, w = 0; w < c; w++)
        T = w % b - v, C = y - (w / b | 0), g[w] = x = u ? Math.abs(u === "y" ? C : T) : yi(T * T + C * C), x > k && (k = x), x < E && (E = x);
      i === "random" && Fi(g), g.max = k - E, g.min = E, g.v = c = (parseFloat(t.amount) || parseFloat(t.each) * (b > c ? c - 1 : u ? u === "y" ? c / b : b : Math.max(b, c / b)) || 0) * (i === "edges" ? -1 : 1), g.b = c < 0 ? n - c : n, g.u = ee(t.amount || t.each) || 0, r = r && c < 0 ? qi(r) : r;
    }
    return c = (g[d] - g.min) / g.max || 0, H(g.b + (r ? r(c) : c) * g.v) + g.u;
  };
}, mr = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = H(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + (Le(r) ? 0 : ee(r));
  };
}, Ii = function(e, t) {
  var r = re(e), i, n;
  return !r && Pe(e) && (i = r = e.radius || Oe, e.values ? (e = Ce(e.values), (n = !Le(e[0])) && (i *= i)) : e = mr(e.increment)), Ge(t, r ? $(e) ? function(s) {
    return n = e(s), Math.abs(n - s) <= i ? n : s;
  } : function(s) {
    for (var a = parseFloat(n ? s.x : s), l = parseFloat(n ? s.y : 0), u = Oe, f = 0, _ = e.length, d, p; _--; )
      n ? (d = e[_].x - a, p = e[_].y - l, d = d * d + p * p) : d = Math.abs(e[_] - a), d < u && (u = d, f = _);
    return f = !i || u <= i ? e[f] : s, n || f === s || Le(s) ? f : f + ee(s);
  } : mr(e));
}, Wi = function(e, t, r, i) {
  return Ge(re(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return re(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, $n = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, s) {
      return s(n);
    }, i);
  };
}, Gn = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || ee(r));
  };
}, Xn = function(e, t, r) {
  return Bi(e, t, 0, 1, r);
}, Yi = function(e, t, r) {
  return Ge(r, function(i) {
    return e[~~t(i)];
  });
}, Zn = function o(e, t, r) {
  var i = t - e;
  return re(e) ? Yi(e, o(0, e.length), t) : Ge(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, qn = function o(e, t, r) {
  var i = t - e, n = i * 2;
  return re(e) ? Yi(e, o(0, e.length - 1), t) : Ge(r, function(s) {
    return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s);
  });
}, Pt = function(e) {
  for (var t = 0, r = "", i, n, s, a; ~(i = e.indexOf("random(", t)); )
    s = e.indexOf(")", i), a = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(a ? wi : ur), r += e.substr(t, i - t) + Wi(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
  return r + e.substr(t, e.length - t);
}, Bi = function(e, t, r, i, n) {
  var s = t - e, a = i - r;
  return Ge(n, function(l) {
    return r + ((l - e) / s * a || 0);
  });
}, Hn = function o(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(p) {
    return (1 - p) * e + p * t;
  };
  if (!n) {
    var s = J(e), a = {}, l, u, f, _, d;
    if (r === !0 && (i = 1) && (r = null), s)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (re(e) && !re(t)) {
      for (f = [], _ = e.length, d = _ - 2, u = 1; u < _; u++)
        f.push(o(e[u - 1], e[u]));
      _--, n = function(m) {
        m *= _;
        var c = Math.min(d, ~~m);
        return f[c](m - c);
      }, r = t;
    } else i || (e = _t(re(e) ? [] : {}, e));
    if (!f) {
      for (l in t)
        Nr.call(a, e, l, "get", t[l]);
      n = function(m) {
        return Lr(m, a) || (s ? e.p : e);
      };
    }
  }
  return Ge(r, n);
}, si = function(e, t, r) {
  var i = e.labels, n = Oe, s, a, l;
  for (s in i)
    a = i[s] - t, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = s, n = a);
  return l;
}, pe = function(e, t, r) {
  var i = e.vars, n = i[t], s = V, a = e._ctx, l, u, f;
  if (n)
    return l = i[t + "Params"], u = i.callbackScope || e, r && Ye.length && Yt(), a && (V = a), f = l ? n.apply(u, l) : n.call(u), V = s, f;
}, bt = function(e) {
  return Ue(e), e.scrollTrigger && e.scrollTrigger.kill(!!K), e.progress() < 1 && pe(e, "onInterrupt"), e;
}, lt, Ui = [], $i = function(e) {
  if (e)
    if (e = !e.name && e.default || e, kr() || e.headless) {
      var t = e.name, r = $(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: St,
        render: Lr,
        add: Nr,
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
      if (mt(), e !== i) {
        if (_e[t])
          return;
        xe(i, xe(Bt(e, n), s)), _t(i.prototype, _t(n, Bt(e, s))), _e[i.prop = t] = i, e.targetTest && (Vt.push(i), Sr[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      Oi(t, i), e.register && e.register(fe, i, le);
    } else
      Ui.push(e);
}, F = 255, Tt = {
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
}, rr = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * F + 0.5 | 0;
}, Gi = function(e, t, r) {
  var i = e ? Le(e) ? [e >> 16, e >> 8 & F, e & F] : 0 : Tt.black, n, s, a, l, u, f, _, d, p, m;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Tt[e])
      i = Tt[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), a = e.charAt(3), e = "#" + n + n + s + s + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & F, i & F, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & F, e & F];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = m = e.match(ur), !t)
        l = +i[0] % 360 / 360, u = +i[1] / 100, f = +i[2] / 100, s = f <= 0.5 ? f * (u + 1) : f + u - f * u, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = rr(l + 1 / 3, n, s), i[1] = rr(l, n, s), i[2] = rr(l - 1 / 3, n, s);
      else if (~e.indexOf("="))
        return i = e.match(bi), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(ur) || Tt.transparent;
    i = i.map(Number);
  }
  return t && !m && (n = i[0] / F, s = i[1] / F, a = i[2] / F, _ = Math.max(n, s, a), d = Math.min(n, s, a), f = (_ + d) / 2, _ === d ? l = u = 0 : (p = _ - d, u = f > 0.5 ? p / (2 - _ - d) : p / (_ + d), l = _ === n ? (s - a) / p + (s < a ? 6 : 0) : _ === s ? (a - n) / p + 2 : (n - s) / p + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(f * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, Xi = function(e) {
  var t = [], r = [], i = -1;
  return e.split(Be).forEach(function(n) {
    var s = n.match(ot) || [];
    t.push.apply(t, s), r.push(i += s.length + 1);
  }), t.c = r, t;
}, ai = function(e, t, r) {
  var i = "", n = (e + i).match(Be), s = t ? "hsla(" : "rgba(", a = 0, l, u, f, _;
  if (!n)
    return e;
  if (n = n.map(function(d) {
    return (d = Gi(d, t, 1)) && s + (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) + ")";
  }), r && (f = Xi(e), l = r.c, l.join(i) !== f.c.join(i)))
    for (u = e.replace(Be, "1").split(ot), _ = u.length - 1; a < _; a++)
      i += u[a] + (~l.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : r).shift());
  if (!u)
    for (u = e.split(Be), _ = u.length - 1; a < _; a++)
      i += u[a] + n[a];
  return i + u[_];
}, Be = function() {
  var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Tt)
    o += "|" + e + "\\b";
  return new RegExp(o + ")", "gi");
}(), Jn = /hsl[a]?\(/, Zi = function(e) {
  var t = e.join(" "), r;
  if (Be.lastIndex = 0, Be.test(t))
    return r = Jn.test(t), e[1] = ai(e[1], r), e[0] = ai(e[0], r, Xi(e[1])), !0;
}, Mt, de = function() {
  var o = Date.now, e = 500, t = 33, r = o(), i = r, n = 1e3 / 240, s = n, a = [], l, u, f, _, d, p, m = function c(g) {
    var v = o() - i, y = g === !0, T, C, x, w;
    if ((v > e || v < 0) && (r += v - t), i += v, x = i - r, T = x - s, (T > 0 || y) && (w = ++_.frame, d = x - _.time * 1e3, _.time = x = x / 1e3, s += T + (T >= n ? 4 : n - T), C = 1), y || (l = u(c)), C)
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
      ki && (!fr && kr() && (we = fr = window, Er = we.document || {}, ge.gsap = fe, (we.gsapVersions || (we.gsapVersions = [])).push(fe.version), Ei(Wt || we.GreenSockGlobals || !we.gsap && we || {}), Ui.forEach($i)), f = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && _.sleep(), u = f || function(g) {
        return setTimeout(g, s - _.time * 1e3 + 1 | 0);
      }, Mt = 1, m(2));
    },
    sleep: function() {
      (f ? cancelAnimationFrame : clearTimeout)(l), Mt = 0, u = St;
    },
    lagSmoothing: function(g, v) {
      e = g || 1 / 0, t = Math.min(v || 33, e);
    },
    fps: function(g) {
      n = 1e3 / (g || 240), s = _.time * 1e3 + n;
    },
    add: function(g, v, y) {
      var T = v ? function(C, x, w, k) {
        g(C, x, w, k), _.remove(T);
      } : g;
      return _.remove(g), a[y ? "unshift" : "push"](T), mt(), T;
    },
    remove: function(g, v) {
      ~(v = a.indexOf(g)) && a.splice(v, 1) && p >= v && p--;
    },
    _listeners: a
  }, _;
}(), mt = function() {
  return !Mt && de.wake();
}, N = {}, Kn = /^[\d.\-M][\d.\-,\s]/, Qn = /["']/g, es = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, a, l, u; n < s; n++)
    l = r[n], a = n !== s - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[i] = isNaN(u) ? u.replace(Qn, "").trim() : +u, i = l.substr(a + 1).trim();
  return t;
}, ts = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, rs = function(e) {
  var t = (e + "").split("("), r = N[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [es(t[1])] : ts(e).split(",").map(Ni)) : N._CE && Kn.test(e) ? N._CE("", e) : r;
}, qi = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, Hi = function o(e, t) {
  for (var r = e._first, i; r; )
    r instanceof se ? o(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? o(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, et = function(e, t) {
  return e && ($(e) ? e : N[e] || rs(e)) || t;
}, it = function(e, t, r, i) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, s;
  return oe(e, function(a) {
    N[a] = ge[a] = n, N[s = a.toLowerCase()] = r;
    for (var l in n)
      N[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = N[a + "." + l] = n[l];
  }), n;
}, Ji = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, ir = function o(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), s = n / lr * (Math.asin(1 / i) || 0), a = function(f) {
    return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Mn((f - s) * n) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : Ji(a);
  return n = lr / n, l.config = function(u, f) {
    return o(e, u, f);
  }, l;
}, nr = function o(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(s) {
    return s ? --s * s * ((t + 1) * s + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(n) {
    return 1 - r(1 - n);
  } : Ji(r);
  return i.config = function(n) {
    return o(e, n);
  }, i;
};
oe("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, e) {
  var t = e < 5 ? e + 1 : e;
  it(o + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
it("Elastic", ir("in"), ir("out"), ir());
(function(o, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, n = function(a) {
    return a < t ? o * a * a : a < r ? o * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? o * (a -= 2.25 / e) * a + 0.9375 : o * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  it("Bounce", function(s) {
    return 1 - n(1 - s);
  }, n);
})(7.5625, 2.75);
it("Expo", function(o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
it("Circ", function(o) {
  return -(yi(1 - o * o) - 1);
});
it("Sine", function(o) {
  return o === 1 ? 1 : -Pn(o * On) + 1;
});
it("Back", nr("in"), nr("out"), nr());
N.SteppedEase = N.steps = ge.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, s = 1 - te;
    return function(a) {
      return ((i * Dt(0, s, a) | 0) + n) * r;
    };
  }
};
ht.ease = N["quad.out"];
oe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
  return Pr += o + "," + o + "Params,";
});
var Ki = function(e, t) {
  this.id = Sn++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Pi, this.set = t ? t.getSetter : Dr;
}, Nt = /* @__PURE__ */ function() {
  function o(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, pt(this, +t.duration, 1, 1), this.data = t.data, V && (this._ctx = V, V.data.push(this)), Mt || de.wake();
  }
  var e = o.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, pt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (mt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (Ht(this, r), !n._dp || n.parent || Di(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && ke(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === te || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Mi(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + ii(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + ii(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? dt(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -1e-8 ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Ut(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -1e-8 ? 0 : this._rts, this.totalTime(Dt(-Math.abs(this._delay), this._tDur, n), i !== !1), qt(this), zn(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (mt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== te && (this._tTime -= te)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && ke(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (ae(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ut(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = An);
    var i = K;
    return K = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), K = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, ni(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, ni(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(ye(this, r), ae(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, ae(i)), this._dur || (this._zTime = -1e-8), this;
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
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - te);
  }, e.eventCallback = function(r, i, n) {
    var s = this.vars;
    return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var s = $(r) ? r : Ri, a = function() {
        var u = i.then;
        i.then = null, $(s) && (s = s(i)) && (s.then || s === i) && (i.then = u), n(s), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    bt(this);
  }, o;
}();
xe(Nt.prototype, {
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
var se = /* @__PURE__ */ function(o) {
  vi(e, o);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = o.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = ae(r.sortChildren), W && ke(r.parent || W, Ae(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && Li(Ae(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, s) {
    return kt(0, arguments, this), this;
  }, t.from = function(i, n, s) {
    return kt(1, arguments, this), this;
  }, t.fromTo = function(i, n, s, a) {
    return kt(2, arguments, this), this;
  }, t.set = function(i, n, s) {
    return n.duration = 0, n.parent = this, wt(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new q(i, n, ye(this, s), 1), this;
  }, t.call = function(i, n, s) {
    return ke(this, q.delayedCall(0, i, n), s);
  }, t.staggerTo = function(i, n, s, a, l, u, f) {
    return s.duration = n, s.stagger = s.stagger || a, s.onComplete = u, s.onCompleteParams = f, s.parent = this, new q(i, s, ye(this, l)), this;
  }, t.staggerFrom = function(i, n, s, a, l, u, f) {
    return s.runBackwards = 1, wt(s).immediateRender = ae(s.immediateRender), this.staggerTo(i, n, s, a, l, u, f);
  }, t.staggerFromTo = function(i, n, s, a, l, u, f, _) {
    return a.startAt = s, wt(a).immediateRender = ae(a.immediateRender), this.staggerTo(i, n, a, l, u, f, _);
  }, t.render = function(i, n, s) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = i <= 0 ? 0 : H(i), _ = this._zTime < 0 != i < 0 && (this._initted || !u), d, p, m, c, g, v, y, T, C, x, w, k;
    if (this !== W && f > l && i >= 0 && (f = l), f !== this._tTime || s || _) {
      if (a !== this._time && u && (f += this._time - a, i += this._time - a), d = f, C = this._start, T = this._ts, v = !T, _ && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (w = this._yoyo, g = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(g * 100 + i, n, s);
        if (d = H(f % g), f === l ? (c = this._repeat, d = u) : (x = H(f / g), c = ~~x, c && c === x && (d = u, c--), d > u && (d = u)), x = dt(this._tTime, g), !a && this._tTime && x !== c && this._tTime - x * g - this._dur <= 0 && (x = c), w && c & 1 && (d = u - d, k = 1), c !== x && !this._lock) {
          var E = w && x & 1, b = E === (w && c & 1);
          if (c < x && (E = !E), a = E ? 0 : f % u ? u : f, this._lock = 1, this.render(a || (k ? 0 : H(c * g)), n, !u)._lock = 0, this._tTime = f, !n && this.parent && pe(this, "onRepeat"), this.vars.repeatRefresh && !k && (this.invalidate()._lock = 1), a && a !== this._time || v !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, b && (this._lock = 2, a = E ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !k && this.invalidate()), this._lock = 0, !this._ts && !v)
            return this;
          Hi(this, k);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (y = Wn(this, H(a), H(d)), y && (f -= d - (d = y._start))), this._tTime = f, this._time = d, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && d && !n && !c && (pe(this, "onStart"), this._tTime !== f))
        return this;
      if (d >= a && i >= 0)
        for (p = this._first; p; ) {
          if (m = p._next, (p._act || d >= p._start) && p._ts && y !== p) {
            if (p.parent !== this)
              return this.render(i, n, s);
            if (p.render(p._ts > 0 ? (d - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (d - p._start) * p._ts, n, s), d !== this._time || !this._ts && !v) {
              y = 0, m && (f += this._zTime = -1e-8);
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
            if (p.render(p._ts > 0 ? (R - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (R - p._start) * p._ts, n, s || K && (p._initted || p._startAt)), d !== this._time || !this._ts && !v) {
              y = 0, m && (f += this._zTime = R ? -1e-8 : te);
              break;
            }
          }
          p = m;
        }
      }
      if (y && !n && (this.pause(), y.render(d >= a ? 0 : -1e-8)._zTime = d >= a ? 1 : -1, this._ts))
        return this._start = C, qt(this), this.render(i, n, s);
      this._onUpdate && !n && pe(this, "onUpdate", !0), (f === l && this._tTime >= this.totalDuration() || !f && a) && (C === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Ue(this, 1), !n && !(i < 0 && !a) && (f || a || !l) && (pe(this, f === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var s = this;
    if (Le(n) || (n = ye(this, n, i)), !(i instanceof Nt)) {
      if (re(i))
        return i.forEach(function(a) {
          return s.add(a, n);
        }), this;
      if (J(i))
        return this.addLabel(i, n);
      if ($(i))
        i = q.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? ke(this, i, n) : this;
  }, t.getChildren = function(i, n, s, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), a === void 0 && (a = -1e8);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof q ? n && l.push(u) : (s && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, s)))), u = u._next;
    return l;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
      if (n[s].vars.id === i)
        return n[s];
  }, t.remove = function(i) {
    return J(i) ? this.removeLabel(i) : $(i) ? this.killTweensOf(i) : (i.parent === this && Zt(this, i), i === this._recent && (this._recent = this._last), Qe(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = H(de.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), o.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = ye(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, s) {
    var a = q.delayedCall(0, n || St, s);
    return a.data = "isPause", this._hasPause = 1, ke(this, a, ye(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = ye(this, i); n; )
      n._start === i && n.data === "isPause" && Ue(n), n = n._next;
  }, t.killTweensOf = function(i, n, s) {
    for (var a = this.getTweensOf(i, s), l = a.length; l--; )
      Ve !== a[l] && a[l].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var s = [], a = Ce(i), l = this._first, u = Le(n), f; l; )
      l instanceof q ? Dn(l._targets, a) && (u ? (!Ve || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && s.push(l) : (f = l.getTweensOf(a, n)).length && s.push.apply(s, f), l = l._next;
    return s;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var s = this, a = ye(s, i), l = n, u = l.startAt, f = l.onStart, _ = l.onStartParams, d = l.immediateRender, p, m = q.to(s, xe({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale()) || te,
      onStart: function() {
        if (s.pause(), !p) {
          var g = n.duration || Math.abs((a - (u && "time" in u ? u.time : s._time)) / s.timeScale());
          m._dur !== g && pt(m, g, 0, 1).render(m._time, !0, !0), p = 1;
        }
        f && f.apply(m, _ || []);
      }
    }, n));
    return d ? m.render(0) : m;
  }, t.tweenFromTo = function(i, n, s) {
    return this.tweenTo(n, xe({
      startAt: {
        time: ye(this, i)
      }
    }, s));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), si(this, ye(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), si(this, ye(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + te);
  }, t.shiftChildren = function(i, n, s) {
    s === void 0 && (s = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= s && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (u in l)
        l[u] >= s && (l[u] += i);
    return Qe(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return o.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, s; n; )
      s = n._next, this.remove(n), n = s;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Qe(this);
  }, t.totalDuration = function(i) {
    var n = 0, s = this, a = s._last, l = Oe, u, f, _;
    if (arguments.length)
      return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
    if (s._dirty) {
      for (_ = s.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), f = a._start, f > l && s._sort && a._ts && !s._lock ? (s._lock = 1, ke(s, a, f - a._delay, 1)._lock = 0) : l = f, f < 0 && a._ts && (n -= f, (!_ && !s._dp || _ && _.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      pt(s, s === W && s._time > n ? s._time : n, 1, 1), s._dirty = 0;
    }
    return s._tDur;
  }, e.updateRoot = function(i) {
    if (W._ts && (Mi(W, Ut(i, W)), Si = de.frame), de.frame >= ti) {
      ti += me.autoSleep || 120;
      var n = W._first;
      if ((!n || !n._ts) && me.autoSleep && de._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || de.sleep();
      }
    }
  }, e;
}(Nt);
xe(se.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var is = function(e, t, r, i, n, s, a) {
  var l = new le(this._pt, e, t, 0, 1, sn, null, n), u = 0, f = 0, _, d, p, m, c, g, v, y;
  for (l.b = r, l.e = i, r += "", i += "", (v = ~i.indexOf("random(")) && (i = Pt(i)), s && (y = [r, i], s(y, e, t), r = y[0], i = y[1]), d = r.match(er) || []; _ = er.exec(i); )
    m = _[0], c = i.substring(u, _.index), p ? p = (p + 1) % 5 : c.substr(-5) === "rgba(" && (p = 1), m !== d[f++] && (g = parseFloat(d[f - 1]) || 0, l._pt = {
      _next: l._pt,
      p: c || f === 1 ? c : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: g,
      c: m.charAt(1) === "=" ? ut(g, m) - g : parseFloat(m) - g,
      m: p && p < 4 ? Math.round : 0
    }, u = er.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (Ti.test(i) || v) && (l.e = 0), this._pt = l, l;
}, Nr = function(e, t, r, i, n, s, a, l, u, f) {
  $(i) && (i = i(n || 0, e, s));
  var _ = e[t], d = r !== "get" ? r : $(_) ? u ? e[t.indexOf("set") || !$(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : _, p = $(_) ? u ? ls : rn : Ar, m;
  if (J(i) && (~i.indexOf("random(") && (i = Pt(i)), i.charAt(1) === "=" && (m = ut(d, i) + (ee(d) || 0), (m || m === 0) && (i = m))), !f || d !== i || gr)
    return !isNaN(d * i) && i !== "" ? (m = new le(this._pt, e, t, +d || 0, i - (d || 0), typeof _ == "boolean" ? fs : nn, 0, p), u && (m.fp = u), a && m.modifier(a, this, e), this._pt = m) : (!_ && !(t in e) && Or(t, i), is.call(this, e, t, d, i, p, l || me.stringFilter, u));
}, ns = function(e, t, r, i, n) {
  if ($(e) && (e = Et(e, n, t, r, i)), !Pe(e) || e.style && e.nodeType || re(e) || Ci(e))
    return J(e) ? Et(e, n, t, r, i) : e;
  var s = {}, a;
  for (a in e)
    s[a] = Et(e[a], n, t, r, i);
  return s;
}, Qi = function(e, t, r, i, n, s) {
  var a, l, u, f;
  if (_e[e] && (a = new _e[e]()).init(n, a.rawVars ? t[e] : ns(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = l = new le(r._pt, n, e, 0, 1, a.render, a, 0, a.priority), r !== lt))
    for (u = r._ptLookup[r._targets.indexOf(n)], f = a._props.length; f--; )
      u[a._props[f]] = l;
  return a;
}, Ve, gr, Rr = function o(e, t, r) {
  var i = e.vars, n = i.ease, s = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, f = i.runBackwards, _ = i.yoyoEase, d = i.keyframes, p = i.autoRevert, m = e._dur, c = e._startAt, g = e._targets, v = e.parent, y = v && v.data === "nested" ? v.vars.targets : g, T = e._overwrite === "auto" && !Tr, C = e.timeline, x, w, k, E, b, R, z, L, j, G, B, U, X;
  if (C && (!d || !n) && (n = "none"), e._ease = et(n, ht.ease), e._yEase = _ ? qi(et(_ === !0 ? n : _, ht.ease)) : 0, _ && e._yoyo && !e._repeat && (_ = e._yEase, e._yEase = e._ease, e._ease = _), e._from = !C && !!i.runBackwards, !C || d && !i.stagger) {
    if (L = g[0] ? Ke(g[0]).harness : 0, U = L && i[L.prop], x = Bt(i, Sr), c && (c._zTime < 0 && c.progress(1), t < 0 && f && a && !p ? c.render(-1, !0) : c.revert(f && m ? Ft : Rn), c._lazy = 0), s) {
      if (Ue(e._startAt = q.set(g, xe({
        data: "isStart",
        overwrite: !1,
        parent: v,
        immediateRender: !0,
        lazy: !c && ae(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return pe(e, "onUpdate");
        },
        stagger: 0
      }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (K || !a && !p) && e._startAt.revert(Ft), a && m && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (f && m && !c) {
      if (t && (a = !1), k = xe({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !c && ae(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: v
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, x), U && (k[L.prop] = U), Ue(e._startAt = q.set(g, k)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (K ? e._startAt.revert(Ft) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        o(e._startAt, te, te);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = m && ae(l) || l && !m, w = 0; w < g.length; w++) {
      if (b = g[w], z = b._gsap || Mr(g)[w]._gsap, e._ptLookup[w] = G = {}, cr[z.id] && Ye.length && Yt(), B = y === g ? w : y.indexOf(b), L && (j = new L()).init(b, U || x, e, B, y) !== !1 && (e._pt = E = new le(e._pt, b, j.name, 0, 1, j.render, j, 0, j.priority), j._props.forEach(function(ce) {
        G[ce] = E;
      }), j.priority && (R = 1)), !L || U)
        for (k in x)
          _e[k] && (j = Qi(k, x, e, B, b, y)) ? j.priority && (R = 1) : G[k] = E = Nr.call(e, b, k, "get", x[k], B, y, 0, i.stringFilter);
      e._op && e._op[w] && e.kill(b, e._op[w]), T && e._pt && (Ve = e, W.killTweensOf(b, G, e.globalTime(t)), X = !e.parent, Ve = 0), e._pt && l && (cr[z.id] = 1);
    }
    R && an(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !X, d && t <= 0 && C.render(Oe, !0, !0);
}, ss = function(e, t, r, i, n, s, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], f, _, d, p;
  if (!u)
    for (u = e._ptCache[t] = [], d = e._ptLookup, p = e._targets.length; p--; ) {
      if (f = d[p][t], f && f.d && f.d._pt)
        for (f = f.d._pt; f && f.p !== t && f.fp !== t; )
          f = f._next;
      if (!f)
        return gr = 1, e.vars[t] = "+=0", Rr(e, a), gr = 0, l ? Ot(t + " not eligible for reset") : 1;
      u.push(f);
    }
  for (p = u.length; p--; )
    _ = u[p], f = _._pt || _, f.s = (i || i === 0) && !n ? i : f.s + (i || 0) + s * f.c, f.c = r - f.s, _.e && (_.e = Z(r) + ee(_.e)), _.b && (_.b = f.s + ee(_.b));
}, as = function(e, t) {
  var r = e[0] ? Ke(e[0]).harness : 0, i = r && r.aliases, n, s, a, l;
  if (!i)
    return t;
  n = _t({}, t);
  for (s in i)
    if (s in n)
      for (l = i[s].split(","), a = l.length; a--; )
        n[l[a]] = n[s];
  return n;
}, os = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", s, a;
  if (re(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
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
}, Et = function(e, t, r, i, n) {
  return $(e) ? e.call(t, r, i, n) : J(e) && ~e.indexOf("random(") ? Pt(e) : e;
}, en = Pr + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", tn = {};
oe(en + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
  return tn[o] = 1;
});
var q = /* @__PURE__ */ function(o) {
  vi(e, o);
  function e(r, i, n, s) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = o.call(this, s ? i : wt(i)) || this;
    var l = a.vars, u = l.duration, f = l.delay, _ = l.immediateRender, d = l.stagger, p = l.overwrite, m = l.keyframes, c = l.defaults, g = l.scrollTrigger, v = l.yoyoEase, y = i.parent || W, T = (re(r) || Ci(r) ? Le(r[0]) : "length" in i) ? [r] : Ce(r), C, x, w, k, E, b, R, z;
    if (a._targets = T.length ? Mr(T) : Ot("GSAP target " + r + " not found. https://gsap.com", !me.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = p, m || d || zt(u) || zt(f)) {
      if (i = a.vars, C = a.timeline = new se({
        data: "nested",
        defaults: c || {},
        targets: y && y.data === "nested" ? y.vars.targets : T
      }), C.kill(), C.parent = C._dp = Ae(a), C._start = 0, d || zt(u) || zt(f)) {
        if (k = T.length, R = d && Vi(d), Pe(d))
          for (E in d)
            ~en.indexOf(E) && (z || (z = {}), z[E] = d[E]);
        for (x = 0; x < k; x++)
          w = Bt(i, tn), w.stagger = 0, v && (w.yoyoEase = v), z && _t(w, z), b = T[x], w.duration = +Et(u, Ae(a), x, b, T), w.delay = (+Et(f, Ae(a), x, b, T) || 0) - a._delay, !d && k === 1 && w.delay && (a._delay = f = w.delay, a._start += f, w.delay = 0), C.to(b, w, R ? R(x, b, T) : 0), C._ease = N.none;
        C.duration() ? u = f = 0 : a.timeline = 0;
      } else if (m) {
        wt(xe(C.vars.defaults, {
          ease: "none"
        })), C._ease = et(m.ease || i.ease || "none");
        var L = 0, j, G, B;
        if (re(m))
          m.forEach(function(U) {
            return C.to(T, U, ">");
          }), C.duration();
        else {
          w = {};
          for (E in m)
            E === "ease" || E === "easeEach" || os(E, m[E], w, m.easeEach);
          for (E in w)
            for (j = w[E].sort(function(U, X) {
              return U.t - X.t;
            }), L = 0, x = 0; x < j.length; x++)
              G = j[x], B = {
                ease: G.e,
                duration: (G.t - (x ? j[x - 1].t : 0)) / 100 * u
              }, B[E] = G.v, C.to(T, B, L), L += B.duration;
          C.duration() < u && C.to({}, {
            duration: u - C.duration()
          });
        }
      }
      u || a.duration(u = C.duration());
    } else
      a.timeline = 0;
    return p === !0 && !Tr && (Ve = Ae(a), W.killTweensOf(T), Ve = 0), ke(y, Ae(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (_ || !u && !m && a._start === H(y._time) && ae(_) && Fn(Ae(a)) && y.data !== "nested") && (a._tTime = -1e-8, a.render(Math.max(0, -f) || 0)), g && Li(Ae(a), g), a;
  }
  var t = e.prototype;
  return t.render = function(i, n, s) {
    var a = this._time, l = this._tDur, u = this._dur, f = i < 0, _ = i > l - te && !f ? l : i < te ? 0 : i, d, p, m, c, g, v, y, T, C;
    if (!u)
      In(this, i, n, s);
    else if (_ !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f || this._lazy) {
      if (d = _, T = this.timeline, this._repeat) {
        if (c = u + this._rDelay, this._repeat < -1 && f)
          return this.totalTime(c * 100 + i, n, s);
        if (d = H(_ % c), _ === l ? (m = this._repeat, d = u) : (g = H(_ / c), m = ~~g, m && m === g ? (d = u, m--) : d > u && (d = u)), v = this._yoyo && m & 1, v && (C = this._yEase, d = u - d), g = dt(this._tTime, c), d === a && !s && this._initted && m === g)
          return this._tTime = _, this;
        m !== g && (T && this._yEase && Hi(T, v), this.vars.repeatRefresh && !v && !this._lock && d !== c && this._initted && (this._lock = s = 1, this.render(H(c * m), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (ji(this, f ? i : d, s, n, _))
          return this._tTime = 0, this;
        if (a !== this._time && !(s && this.vars.repeatRefresh && m !== g))
          return this;
        if (u !== this._dur)
          return this.render(i, n, s);
      }
      if (this._tTime = _, this._time = d, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = y = (C || this._ease)(d / u), this._from && (this.ratio = y = 1 - y), d && !a && !n && !m && (pe(this, "onStart"), this._tTime !== _))
        return this;
      for (p = this._pt; p; )
        p.r(y, p.d), p = p._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(d / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && hr(this, i, n, s), pe(this, "onUpdate")), this._repeat && m !== g && this.vars.onRepeat && !n && this.parent && pe(this, "onRepeat"), (_ === this._tDur || !_) && this._tTime === _ && (f && !this._onUpdate && hr(this, i, !0, !0), (i || !u) && (_ === this._tDur && this._ts > 0 || !_ && this._ts < 0) && Ue(this, 1), !n && !(f && !a) && (_ || a || v) && (pe(this, _ === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), o.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, s, a, l) {
    Mt || de.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
    return this._initted || Rr(this, u), f = this._ease(u / this._dur), ss(this, i, n, s, a, f, u, l) ? this.resetTo(i, n, s, a, 1) : (Ht(this, 0), this.parent || Ai(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? bt(this) : this.scrollTrigger && this.scrollTrigger.kill(!!K), this;
    if (this.timeline) {
      var s = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, Ve && Ve.vars.overwrite !== !0)._first || bt(this), this.parent && s !== this.timeline.totalDuration() && pt(this, this._dur * this.timeline._tDur / s, 0, 1), this;
    }
    var a = this._targets, l = i ? Ce(i) : a, u = this._ptLookup, f = this._pt, _, d, p, m, c, g, v;
    if ((!n || n === "all") && jn(a, l))
      return n === "all" && (this._pt = 0), bt(this);
    for (_ = this._op = this._op || [], n !== "all" && (J(n) && (c = {}, oe(n, function(y) {
      return c[y] = 1;
    }), n = c), n = as(a, n)), v = a.length; v--; )
      if (~l.indexOf(a[v])) {
        d = u[v], n === "all" ? (_[v] = n, m = d, p = {}) : (p = _[v] = _[v] || {}, m = n);
        for (c in m)
          g = d && d[c], g && ((!("kill" in g.d) || g.d.kill(c) === !0) && Zt(this, g, "_pt"), delete d[c]), p !== "all" && (p[c] = 1);
      }
    return this._initted && !this._pt && f && bt(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return kt(1, arguments);
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
    return kt(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, s) {
    return W.killTweensOf(i, n, s);
  }, e;
}(Nt);
xe(q.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
oe("staggerTo,staggerFrom,staggerFromTo", function(o) {
  q[o] = function() {
    var e = new se(), t = dr.call(arguments, 0);
    return t.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), e[o].apply(e, t);
  };
});
var Ar = function(e, t, r) {
  return e[t] = r;
}, rn = function(e, t, r) {
  return e[t](r);
}, ls = function(e, t, r, i) {
  return e[t](i.fp, r);
}, us = function(e, t, r) {
  return e.setAttribute(t, r);
}, Dr = function(e, t) {
  return $(e[t]) ? rn : wr(e[t]) && e.setAttribute ? us : Ar;
}, nn = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, fs = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, sn = function(e, t) {
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
}, Lr = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, cs = function(e, t, r, i) {
  for (var n = this._pt, s; n; )
    s = n._next, n.p === i && n.modifier(e, t, r), n = s;
}, hs = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? Zt(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, _s = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, an = function(e) {
  for (var t = e._pt, r, i, n, s; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : s) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : s = t, t = r;
  }
  e._pt = n;
}, le = /* @__PURE__ */ function() {
  function o(t, r, i, n, s, a, l, u, f) {
    this.t = r, this.s = n, this.c = s, this.p = i, this.r = a || nn, this.d = l || this, this.set = u || Ar, this.pr = f || 0, this._next = t, t && (t._prev = this);
  }
  var e = o.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = _s, this.m = r, this.mt = n, this.tween = i;
  }, o;
}();
oe(Pr + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
  return Sr[o] = 1;
});
ge.TweenMax = ge.TweenLite = q;
ge.TimelineLite = ge.TimelineMax = se;
W = new se({
  sortChildren: !1,
  defaults: ht,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
me.stringFilter = Zi;
var tt = [], It = {}, ds = [], oi = 0, ps = 0, sr = function(e) {
  return (It[e] || ds).map(function(t) {
    return t();
  });
}, xr = function() {
  var e = Date.now(), t = [];
  e - oi > 2 && (sr("matchMediaInit"), tt.forEach(function(r) {
    var i = r.queries, n = r.conditions, s, a, l, u;
    for (a in i)
      s = we.matchMedia(i[a]).matches, s && (l = 1), s !== n[a] && (n[a] = s, u = 1);
    u && (r.revert(), l && t.push(r));
  }), sr("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), oi = e, sr("matchMedia"));
}, on = /* @__PURE__ */ function() {
  function o(t, r) {
    this.selector = r && pr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = ps++, t && this.add(t);
  }
  var e = o.prototype;
  return e.add = function(r, i, n) {
    $(r) && (n = i, i = r, r = $);
    var s = this, a = function() {
      var u = V, f = s.selector, _;
      return u && u !== s && u.data.push(s), n && (s.selector = pr(n)), V = s, _ = i.apply(s, arguments), $(_) && s._r.push(_), V = u, s.selector = f, s.isReverted = !1, _;
    };
    return s.last = a, r === $ ? a(s, function(l) {
      return s.add(null, l);
    }) : r ? s[r] = a : a;
  }, e.ignore = function(r) {
    var i = V;
    V = null, r(this), V = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof o ? r.push.apply(r, i.getTweens()) : i instanceof q && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var n = this;
    if (r ? function() {
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(f) {
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
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof se ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof q) && u.revert && u.revert(r);
      n._r.forEach(function(f) {
        return f(r, n);
      }), n.isReverted = !0;
    }() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var s = tt.length; s--; )
        tt[s].id === this.id && tt.splice(s, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, o;
}(), ms = /* @__PURE__ */ function() {
  function o(t) {
    this.contexts = [], this.scope = t, V && V.data.push(this);
  }
  var e = o.prototype;
  return e.add = function(r, i, n) {
    Pe(r) || (r = {
      matches: r
    });
    var s = new on(0, n || this.scope), a = s.conditions = {}, l, u, f;
    V && !s.selector && (s.selector = V.selector), this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
    for (u in r)
      u === "all" ? f = 1 : (l = we.matchMedia(r[u]), l && (tt.indexOf(s) < 0 && tt.push(s), (a[u] = l.matches) && (f = 1), l.addListener ? l.addListener(xr) : l.addEventListener("change", xr)));
    return f && i(s, function(_) {
      return s.add(null, _);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, o;
}(), $t = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return $i(i);
    });
  },
  timeline: function(e) {
    return new se(e);
  },
  getTweensOf: function(e, t) {
    return W.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    J(e) && (e = Ce(e)[0]);
    var n = Ke(e || {}).get, s = r ? Ri : Ni;
    return r === "native" && (r = ""), e && (t ? s((_e[t] && _e[t].get || n)(e, t, r, i)) : function(a, l, u) {
      return s((_e[a] && _e[a].get || n)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Ce(e), e.length > 1) {
      var i = e.map(function(f) {
        return fe.quickSetter(f, t, r);
      }), n = i.length;
      return function(f) {
        for (var _ = n; _--; )
          i[_](f);
      };
    }
    e = e[0] || {};
    var s = _e[t], a = Ke(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = s ? function(f) {
      var _ = new s();
      lt._pt = 0, _.init(e, r ? f + r : f, lt, 0, [e]), _.render(1, _), lt._pt && Lr(1, lt);
    } : a.set(e, l);
    return s ? u : function(f) {
      return u(e, l, r ? f + r : f, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = fe.to(e, xe((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), s = function(l, u, f) {
      return n.resetTo(t, l, u, f);
    };
    return s.tween = n, s;
  },
  isTweening: function(e) {
    return W.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = et(e.ease, ht.ease)), ri(ht, e || {});
  },
  config: function(e) {
    return ri(me, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, s = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !_e[a] && !ge[a] && Ot(t + " effect requires " + a + " plugin.");
    }), tr[t] = function(a, l, u) {
      return r(Ce(a), xe(l || {}, n), u);
    }, s && (se.prototype[t] = function(a, l, u) {
      return this.add(tr[t](a, Pe(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    N[e] = et(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? et(e, t) : N;
  },
  getById: function(e) {
    return W.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new se(e), i, n;
    for (r.smoothChildTiming = ae(e.smoothChildTiming), W.remove(r), r._dp = 0, r._time = r._tTime = W._time, i = W._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof q && i.vars.onComplete === i._targets[0])) && ke(r, i, i._start - i._delay), i = n;
    return ke(W, r, 0), r;
  },
  context: function(e, t) {
    return e ? new on(e, t) : V;
  },
  matchMedia: function(e) {
    return new ms(e);
  },
  matchMediaRefresh: function() {
    return tt.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || xr();
  },
  addEventListener: function(e, t) {
    var r = It[e] || (It[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = It[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Zn,
    wrapYoyo: qn,
    distribute: Vi,
    random: Wi,
    snap: Ii,
    normalize: Xn,
    getUnit: ee,
    clamp: Bn,
    splitColor: Gi,
    toArray: Ce,
    selector: pr,
    mapRange: Bi,
    pipe: $n,
    unitize: Gn,
    interpolate: Hn,
    shuffle: Fi
  },
  install: Ei,
  effects: tr,
  ticker: de,
  updateRoot: se.updateRoot,
  plugins: _e,
  globalTimeline: W,
  core: {
    PropTween: le,
    globals: Oi,
    Tween: q,
    Timeline: se,
    Animation: Nt,
    getCache: Ke,
    _removeLinkedListItem: Zt,
    reverting: function() {
      return K;
    },
    context: function(e) {
      return e && V && (V.data.push(e), e._ctx = V), V;
    },
    suppressOverwrites: function(e) {
      return Tr = e;
    }
  }
};
oe("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
  return $t[o] = q[o];
});
de.add(se.updateRoot);
lt = $t.to({}, {
  duration: 0
});
var gs = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, xs = function(e, t) {
  var r = e._targets, i, n, s;
  for (i in t)
    for (n = r.length; n--; )
      s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = gs(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i));
}, ar = function(e, t) {
  return {
    name: e,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, s) {
      s._onInit = function(a) {
        var l, u;
        if (J(n) && (l = {}, oe(n, function(f) {
          return l[f] = 1;
        }), n = l), t) {
          l = {};
          for (u in n)
            l[u] = t(n[u]);
          n = l;
        }
        xs(a, n);
      };
    }
  };
}, fe = $t.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var s, a, l;
    this.tween = r;
    for (s in t)
      l = e.getAttribute(s) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[s], i, n, 0, 0, s), a.op = s, a.b = l, this._props.push(s);
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
}, ar("roundProps", mr), ar("modifiers"), ar("snap", Ii)) || $t;
q.version = se.version = fe.version = "3.12.7";
ki = 1;
kr() && mt();
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
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var li, Ie, ft, jr, Je, ui, zr, vs = function() {
  return typeof window < "u";
}, je = {}, He = 180 / Math.PI, ct = Math.PI / 180, at = Math.atan2, fi = 1e8, Fr = /([A-Z])/g, ys = /(left|right|width|margin|padding|x)/i, Cs = /[\s,\(]\S/, Ee = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, vr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, bs = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Ts = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, ws = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, ln = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, un = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, ks = function(e, t, r) {
  return e.style[t] = r;
}, Es = function(e, t, r) {
  return e.style.setProperty(t, r);
}, Os = function(e, t, r) {
  return e._gsap[t] = r;
}, Ss = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, Ps = function(e, t, r, i, n) {
  var s = e._gsap;
  s.scaleX = s.scaleY = r, s.renderTransform(n, s);
}, Ms = function(e, t, r, i, n) {
  var s = e._gsap;
  s[t] = r, s.renderTransform(n, s);
}, Y = "transform", ue = Y + "Origin", Ns = function o(e, t) {
  var r = this, i = this.target, n = i.style, s = i._gsap;
  if (e in je && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ee[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = De(i, a);
      }) : this.tfm[e] = s.x ? s[e] : De(i, e), e === ue && (this.tfm.zOrigin = s.zOrigin);
    else
      return Ee.transform.split(",").forEach(function(a) {
        return o.call(r, a, t);
      });
    if (this.props.indexOf(Y) >= 0)
      return;
    s.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(ue, t, "")), e = Y;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, fn = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Rs = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, n, s;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Fr, "-$1").toLowerCase());
  if (this.tfm) {
    for (s in this.tfm)
      i[s] = this.tfm[s];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = zr(), (!n || !n.isStart) && !r[Y] && (fn(r), i.zOrigin && r[ue] && (r[ue] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, cn = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: Rs,
    save: Ns
  };
  return e._gsap || fe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, hn, yr = function(e, t) {
  var r = Ie.createElementNS ? Ie.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ie.createElement(e);
  return r && r.style ? r : Ie.createElement(e);
}, Se = function o(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Fr, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && o(e, gt(t) || t, 1) || "";
}, ci = "O,Moz,ms,Ms,Webkit".split(","), gt = function(e, t, r) {
  var i = t || Je, n = i.style, s = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(ci[s] + e in n); )
    ;
  return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ci[s] : "") + e;
}, Cr = function() {
  vs() && window.document && (li = window, Ie = li.document, ft = Ie.documentElement, Je = yr("div") || {
    style: {}
  }, yr("div"), Y = gt(Y), ue = Y + "Origin", Je.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", hn = !!gt("perspective"), zr = fe.core.reverting, jr = 1);
}, hi = function(e) {
  var t = e.ownerSVGElement, r = yr("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), ft.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), ft.removeChild(r), n;
}, _i = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, _n = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = hi(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = hi(e)), t && !t.width && !t.x && !t.y ? {
    x: +_i(e, ["x", "cx", "x1"]) || 0,
    y: +_i(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, dn = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _n(e));
}, rt = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in je && t !== ue && (t = Y), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(Fr, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, We = function(e, t, r, i, n, s) {
  var a = new le(e._pt, t, r, 0, 1, s ? un : ln);
  return e._pt = a, a.b = i, a.e = n, e._props.push(r), a;
}, di = {
  deg: 1,
  rad: 1,
  turn: 1
}, As = {
  grid: 1,
  flex: 1
}, $e = function o(e, t, r, i) {
  var n = parseFloat(r) || 0, s = (r + "").trim().substr((n + "").length) || "px", a = Je.style, l = ys.test(t), u = e.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), _ = 100, d = i === "px", p = i === "%", m, c, g, v;
  if (i === s || !n || di[i] || di[s])
    return n;
  if (s !== "px" && !d && (n = o(e, t, r, "px")), v = e.getCTM && dn(e), (p || s === "%") && (je[t] || ~t.indexOf("adius")))
    return m = v ? e.getBBox()[l ? "width" : "height"] : e[f], Z(p ? n / m * _ : n / 100 * m);
  if (a[l ? "width" : "height"] = _ + (d ? s : i), c = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, v && (c = (e.ownerSVGElement || {}).parentNode), (!c || c === Ie || !c.appendChild) && (c = Ie.body), g = c._gsap, g && p && g.width && l && g.time === de.time && !g.uncache)
    return Z(n / g.width * _);
  if (p && (t === "height" || t === "width")) {
    var y = e.style[t];
    e.style[t] = _ + i, m = e[f], y ? e.style[t] = y : rt(e, t);
  } else
    (p || s === "%") && !As[Se(c, "display")] && (a.position = Se(e, "position")), c === e && (a.position = "static"), c.appendChild(Je), m = Je[f], c.removeChild(Je), a.position = "absolute";
  return l && p && (g = Ke(c), g.time = de.time, g.width = c[f]), Z(d ? m * n / _ : m && n ? _ / m * n : 0);
}, De = function(e, t, r, i) {
  var n;
  return jr || Cr(), t in Ee && t !== "transform" && (t = Ee[t], ~t.indexOf(",") && (t = t.split(",")[0])), je[t] && t !== "transform" ? (n = At(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Xt(Se(e, ue)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Gt[t] && Gt[t](e, t, r) || Se(e, t) || Pi(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? $e(e, t, n, r) + r : n;
}, Ds = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = gt(t, e, 1), s = n && Se(e, n, 1);
    s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = Se(e, "borderTopColor"));
  }
  var a = new le(this._pt, e.style, t, 0, 1, sn), l = 0, u = 0, f, _, d, p, m, c, g, v, y, T, C, x;
  if (a.b = r, a.e = i, r += "", i += "", i === "auto" && (c = e.style[t], e.style[t] = i, i = Se(e, t) || i, c ? e.style[t] = c : rt(e, t)), f = [r, i], Zi(f), r = f[0], i = f[1], d = r.match(ot) || [], x = i.match(ot) || [], x.length) {
    for (; _ = ot.exec(i); )
      g = _[0], y = i.substring(l, _.index), m ? m = (m + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (m = 1), g !== (c = d[u++] || "") && (p = parseFloat(c) || 0, C = c.substr((p + "").length), g.charAt(1) === "=" && (g = ut(p, g) + C), v = parseFloat(g), T = g.substr((v + "").length), l = ot.lastIndex - T.length, T || (T = T || me.units[t] || C, l === i.length && (i += T, a.e += T)), C !== T && (p = $e(e, t, c, T) || 0), a._pt = {
        _next: a._pt,
        p: y || u === 1 ? y : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: p,
        c: v - p,
        m: m && m < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? un : ln;
  return Ti.test(i) && (a.e = 0), this._pt = a, a;
}, pi = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Ls = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = pi[r] || r, t[1] = pi[i] || i, t.join(" ");
}, js = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, s = r._gsap, a, l, u;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], je[a] && (l = 1, a = a === "transformOrigin" ? ue : Y), rt(r, a);
    l && (rt(r, Y), s && (s.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", At(r, 1), s.uncache = 1, fn(i)));
  }
}, Gt = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var s = e._pt = new le(e._pt, t, r, 0, 0, js);
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
}, Rt = [1, 0, 0, 1, 0, 0], pn = {}, mn = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, mi = function(e) {
  var t = Se(e, Y);
  return mn(t) ? Rt : t.substr(7).match(bi).map(Z);
}, Vr = function(e, t) {
  var r = e._gsap || Ke(e), i = e.style, n = mi(e), s, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? Rt : n) : (n === Rt && !e.offsetParent && e !== ft && !r.svg && (l = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, ft.appendChild(e)), n = mi(e), l ? i.display = l : rt(e, "display"), u && (a ? s.insertBefore(e, a) : s ? s.appendChild(e) : ft.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, br = function(e, t, r, i, n, s) {
  var a = e._gsap, l = n || Vr(e, !0), u = a.xOrigin || 0, f = a.yOrigin || 0, _ = a.xOffset || 0, d = a.yOffset || 0, p = l[0], m = l[1], c = l[2], g = l[3], v = l[4], y = l[5], T = t.split(" "), C = parseFloat(T[0]) || 0, x = parseFloat(T[1]) || 0, w, k, E, b;
  r ? l !== Rt && (k = p * g - m * c) && (E = C * (g / k) + x * (-c / k) + (c * y - g * v) / k, b = C * (-m / k) + x * (p / k) - (p * y - m * v) / k, C = E, x = b) : (w = _n(e), C = w.x + (~T[0].indexOf("%") ? C / 100 * w.width : C), x = w.y + (~(T[1] || T[0]).indexOf("%") ? x / 100 * w.height : x)), i || i !== !1 && a.smooth ? (v = C - u, y = x - f, a.xOffset = _ + (v * p + y * c) - v, a.yOffset = d + (v * m + y * g) - y) : a.xOffset = a.yOffset = 0, a.xOrigin = C, a.yOrigin = x, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!r, e.style[ue] = "0px 0px", s && (We(s, a, "xOrigin", u, C), We(s, a, "yOrigin", f, x), We(s, a, "xOffset", _, a.xOffset), We(s, a, "yOffset", d, a.yOffset)), e.setAttribute("data-svg-origin", C + " " + x);
}, At = function(e, t) {
  var r = e._gsap || new Ki(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, s = "px", a = "deg", l = getComputedStyle(e), u = Se(e, ue) || "0", f, _, d, p, m, c, g, v, y, T, C, x, w, k, E, b, R, z, L, j, G, B, U, X, ce, ve, ze, he, Me, nt, ie, be;
  return f = _ = d = c = g = v = y = T = C = 0, p = m = 1, r.svg = !!(e.getCTM && dn(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[Y] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[Y] !== "none" ? l[Y] : "")), i.scale = i.rotate = i.translate = "none"), k = Vr(e, r.svg), r.svg && (r.uncache ? (ce = e.getBBox(), u = r.xOrigin - ce.x + "px " + (r.yOrigin - ce.y) + "px", X = "") : X = !t && e.getAttribute("data-svg-origin"), br(e, X || u, !!X || r.originIsAbsolute, r.smooth !== !1, k)), x = r.xOrigin || 0, w = r.yOrigin || 0, k !== Rt && (z = k[0], L = k[1], j = k[2], G = k[3], f = B = k[4], _ = U = k[5], k.length === 6 ? (p = Math.sqrt(z * z + L * L), m = Math.sqrt(G * G + j * j), c = z || L ? at(L, z) * He : 0, y = j || G ? at(j, G) * He + c : 0, y && (m *= Math.abs(Math.cos(y * ct))), r.svg && (f -= x - (x * z + w * j), _ -= w - (x * L + w * G))) : (be = k[6], nt = k[7], ze = k[8], he = k[9], Me = k[10], ie = k[11], f = k[12], _ = k[13], d = k[14], E = at(be, Me), g = E * He, E && (b = Math.cos(-E), R = Math.sin(-E), X = B * b + ze * R, ce = U * b + he * R, ve = be * b + Me * R, ze = B * -R + ze * b, he = U * -R + he * b, Me = be * -R + Me * b, ie = nt * -R + ie * b, B = X, U = ce, be = ve), E = at(-j, Me), v = E * He, E && (b = Math.cos(-E), R = Math.sin(-E), X = z * b - ze * R, ce = L * b - he * R, ve = j * b - Me * R, ie = G * R + ie * b, z = X, L = ce, j = ve), E = at(L, z), c = E * He, E && (b = Math.cos(E), R = Math.sin(E), X = z * b + L * R, ce = B * b + U * R, L = L * b - z * R, U = U * b - B * R, z = X, B = ce), g && Math.abs(g) + Math.abs(c) > 359.9 && (g = c = 0, v = 180 - v), p = Z(Math.sqrt(z * z + L * L + j * j)), m = Z(Math.sqrt(U * U + be * be)), E = at(B, U), y = Math.abs(E) > 2e-4 ? E * He : 0, C = ie ? 1 / (ie < 0 ? -ie : ie) : 0), r.svg && (X = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !mn(Se(e, Y)), X && e.setAttribute("transform", X))), Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (p *= -1, y += c <= 0 ? 180 : -180, c += c <= 0 ? 180 : -180) : (m *= -1, y += y <= 0 ? 180 : -180)), t = t || r.uncache, r.x = f - ((r.xPercent = f && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = _ - ((r.yPercent = _ && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = d + s, r.scaleX = Z(p), r.scaleY = Z(m), r.rotation = Z(c) + a, r.rotationX = Z(g) + a, r.rotationY = Z(v) + a, r.skewX = y + a, r.skewY = T + a, r.transformPerspective = C + s, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (i[ue] = Xt(u)), r.xOffset = r.yOffset = 0, r.force3D = me.force3D, r.renderTransform = r.svg ? Fs : hn ? gn : zs, r.uncache = 0, r;
}, Xt = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, or = function(e, t, r) {
  var i = ee(t);
  return Z(parseFloat(t) + parseFloat($e(e, "x", r + "px", i))) + i;
}, zs = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, gn(e, t);
}, Ze = "0deg", Ct = "0px", qe = ") ", gn = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, l = r.z, u = r.rotation, f = r.rotationY, _ = r.rotationX, d = r.skewX, p = r.skewY, m = r.scaleX, c = r.scaleY, g = r.transformPerspective, v = r.force3D, y = r.target, T = r.zOrigin, C = "", x = v === "auto" && e && e !== 1 || v === !0;
  if (T && (_ !== Ze || f !== Ze)) {
    var w = parseFloat(f) * ct, k = Math.sin(w), E = Math.cos(w), b;
    w = parseFloat(_) * ct, b = Math.cos(w), s = or(y, s, k * b * -T), a = or(y, a, -Math.sin(w) * -T), l = or(y, l, E * b * -T + T);
  }
  g !== Ct && (C += "perspective(" + g + qe), (i || n) && (C += "translate(" + i + "%, " + n + "%) "), (x || s !== Ct || a !== Ct || l !== Ct) && (C += l !== Ct || x ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + qe), u !== Ze && (C += "rotate(" + u + qe), f !== Ze && (C += "rotateY(" + f + qe), _ !== Ze && (C += "rotateX(" + _ + qe), (d !== Ze || p !== Ze) && (C += "skew(" + d + ", " + p + qe), (m !== 1 || c !== 1) && (C += "scale(" + m + ", " + c + qe), y.style[Y] = C || "translate(0, 0)";
}, Fs = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, s = r.x, a = r.y, l = r.rotation, u = r.skewX, f = r.skewY, _ = r.scaleX, d = r.scaleY, p = r.target, m = r.xOrigin, c = r.yOrigin, g = r.xOffset, v = r.yOffset, y = r.forceCSS, T = parseFloat(s), C = parseFloat(a), x, w, k, E, b;
  l = parseFloat(l), u = parseFloat(u), f = parseFloat(f), f && (f = parseFloat(f), u += f, l += f), l || u ? (l *= ct, u *= ct, x = Math.cos(l) * _, w = Math.sin(l) * _, k = Math.sin(l - u) * -d, E = Math.cos(l - u) * d, u && (f *= ct, b = Math.tan(u - f), b = Math.sqrt(1 + b * b), k *= b, E *= b, f && (b = Math.tan(f), b = Math.sqrt(1 + b * b), x *= b, w *= b)), x = Z(x), w = Z(w), k = Z(k), E = Z(E)) : (x = _, E = d, w = k = 0), (T && !~(s + "").indexOf("px") || C && !~(a + "").indexOf("px")) && (T = $e(p, "x", s, "px"), C = $e(p, "y", a, "px")), (m || c || g || v) && (T = Z(T + m - (m * x + c * k) + g), C = Z(C + c - (m * w + c * E) + v)), (i || n) && (b = p.getBBox(), T = Z(T + i / 100 * b.width), C = Z(C + n / 100 * b.height)), b = "matrix(" + x + "," + w + "," + k + "," + E + "," + T + "," + C + ")", p.setAttribute("transform", b), y && (p.style[Y] = b);
}, Vs = function(e, t, r, i, n) {
  var s = 360, a = J(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? He : 1), u = l - i, f = i + u + "deg", _, d;
  return a && (_ = n.split("_")[1], _ === "short" && (u %= s, u !== u % (s / 2) && (u += u < 0 ? s : -360)), _ === "cw" && u < 0 ? u = (u + s * fi) % s - ~~(u / s) * s : _ === "ccw" && u > 0 && (u = (u - s * fi) % s - ~~(u / s) * s)), e._pt = d = new le(e._pt, t, r, i, u, bs), d.e = f, d.u = "deg", e._props.push(r), d;
}, gi = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, Is = function(e, t, r) {
  var i = gi({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = r.style, a, l, u, f, _, d, p, m;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), s[Y] = t, a = At(r, 1), rt(r, Y), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[Y], s[Y] = t, a = At(r, 1), s[Y] = u);
  for (l in je)
    u = i[l], f = a[l], u !== f && n.indexOf(l) < 0 && (p = ee(u), m = ee(f), _ = p !== m ? $e(r, l, u, m) : parseFloat(u), d = parseFloat(f), e._pt = new le(e._pt, a, l, _, d - _, vr), e._pt.u = m || 0, e._props.push(l));
  gi(a, i);
};
oe("padding,margin,Width,Radius", function(o, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(a) {
    return e < 2 ? o + a : "border" + a + o;
  });
  Gt[e > 1 ? "border" + o : o] = function(a, l, u, f, _) {
    var d, p;
    if (arguments.length < 4)
      return d = s.map(function(m) {
        return De(a, m, u);
      }), p = d.join(" "), p.split(d[0]).length === 5 ? d[0] : p;
    d = (f + "").split(" "), p = {}, s.forEach(function(m, c) {
      return p[m] = d[c] = d[c] || d[(c - 1) / 2 | 0];
    }), a.init(l, p, _);
  };
});
var xn = {
  name: "css",
  register: Cr,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var s = this._props, a = e.style, l = r.vars.startAt, u, f, _, d, p, m, c, g, v, y, T, C, x, w, k, E;
    jr || Cr(), this.styles = this.styles || cn(e), E = this.styles.props, this.tween = r;
    for (c in t)
      if (c !== "autoRound" && (f = t[c], !(_e[c] && Qi(c, t, r, i, e, n)))) {
        if (p = typeof f, m = Gt[c], p === "function" && (f = f.call(r, i, e, n), p = typeof f), p === "string" && ~f.indexOf("random(") && (f = Pt(f)), m)
          m(this, e, c, f, r) && (k = 1);
        else if (c.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(c) + "").trim(), f += "", Be.lastIndex = 0, Be.test(u) || (g = ee(u), v = ee(f)), v ? g !== v && (u = $e(e, c, u, v) + v) : g && (f += g), this.add(a, "setProperty", u, f, i, n, 0, 0, c), s.push(c), E.push(c, 0, a[c]);
        else if (p !== "undefined") {
          if (l && c in l ? (u = typeof l[c] == "function" ? l[c].call(r, i, e, n) : l[c], J(u) && ~u.indexOf("random(") && (u = Pt(u)), ee(u + "") || u === "auto" || (u += me.units[c] || ee(De(e, c)) || ""), (u + "").charAt(1) === "=" && (u = De(e, c))) : u = De(e, c), d = parseFloat(u), y = p === "string" && f.charAt(1) === "=" && f.substr(0, 2), y && (f = f.substr(2)), _ = parseFloat(f), c in Ee && (c === "autoAlpha" && (d === 1 && De(e, "visibility") === "hidden" && _ && (d = 0), E.push("visibility", 0, a.visibility), We(this, a, "visibility", d ? "inherit" : "hidden", _ ? "inherit" : "hidden", !_)), c !== "scale" && c !== "transform" && (c = Ee[c], ~c.indexOf(",") && (c = c.split(",")[0]))), T = c in je, T) {
            if (this.styles.save(c), C || (x = e._gsap, x.renderTransform && !t.parseTransform || At(e, t.parseTransform), w = t.smoothOrigin !== !1 && x.smooth, C = this._pt = new le(this._pt, a, Y, 0, 1, x.renderTransform, x, 0, -1), C.dep = 1), c === "scale")
              this._pt = new le(this._pt, x, "scaleY", x.scaleY, (y ? ut(x.scaleY, y + _) : _) - x.scaleY || 0, vr), this._pt.u = 0, s.push("scaleY", c), c += "X";
            else if (c === "transformOrigin") {
              E.push(ue, 0, a[ue]), f = Ls(f), x.svg ? br(e, f, 0, w, 0, this) : (v = parseFloat(f.split(" ")[2]) || 0, v !== x.zOrigin && We(this, x, "zOrigin", x.zOrigin, v), We(this, a, c, Xt(u), Xt(f)));
              continue;
            } else if (c === "svgOrigin") {
              br(e, f, 1, w, 0, this);
              continue;
            } else if (c in pn) {
              Vs(this, x, c, d, y ? ut(d, y + f) : f);
              continue;
            } else if (c === "smoothOrigin") {
              We(this, x, "smooth", x.smooth, f);
              continue;
            } else if (c === "force3D") {
              x[c] = f;
              continue;
            } else if (c === "transform") {
              Is(this, f, e);
              continue;
            }
          } else c in a || (c = gt(c) || c);
          if (T || (_ || _ === 0) && (d || d === 0) && !Cs.test(f) && c in a)
            g = (u + "").substr((d + "").length), _ || (_ = 0), v = ee(f) || (c in me.units ? me.units[c] : g), g !== v && (d = $e(e, c, u, v)), this._pt = new le(this._pt, T ? x : a, c, d, (y ? ut(d, y + _) : _) - d, !T && (v === "px" || c === "zIndex") && t.autoRound !== !1 ? ws : vr), this._pt.u = v || 0, g !== v && v !== "%" && (this._pt.b = u, this._pt.r = Ts);
          else if (c in a)
            Ds.call(this, e, c, u, y ? y + f : f);
          else if (c in e)
            this.add(e, c, u || e[c], y ? y + f : f, i, n);
          else if (c !== "parseTransform") {
            Or(c, f);
            continue;
          }
          T || (c in a ? E.push(c, 0, a[c]) : typeof e[c] == "function" ? E.push(c, 2, e[c]()) : E.push(c, 1, u || e[c])), s.push(c);
        }
      }
    k && an(this);
  },
  render: function(e, t) {
    if (t.tween._time || !zr())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: De,
  aliases: Ee,
  getSetter: function(e, t, r) {
    var i = Ee[t];
    return i && i.indexOf(",") < 0 && (t = i), t in je && t !== ue && (e._gsap.x || De(e, "x")) ? r && ui === r ? t === "scale" ? Ss : Os : (ui = r || {}) && (t === "scale" ? Ps : Ms) : e.style && !wr(e.style[t]) ? ks : ~t.indexOf("-") ? Es : Dr(e, t);
  },
  core: {
    _removeProperty: rt,
    _getMatrix: Vr
  }
};
fe.utils.checkPrefix = gt;
fe.core.getStyleSaver = cn;
(function(o, e, t, r) {
  var i = oe(o + "," + e + "," + t, function(n) {
    je[n] = 1;
  });
  oe(e, function(n) {
    me.units[n] = "deg", pn[n] = 1;
  }), Ee[i[13]] = o + "," + e, oe(r, function(n) {
    var s = n.split(":");
    Ee[s[1]] = i[s[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
oe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
  me.units[o] = "px";
});
fe.registerPlugin(xn);
var Te = fe.registerPlugin(xn) || fe;
Te.core.Tween;
const Zs = ({ width: o, height: e }) => {
  const t = Jr(null), r = Jr(
    Te.timeline({ paused: !0, yoyo: !0, repeat: 0 })
  ), i = (l) => (r.current.clear(), r.current.to(l(".corner-left-bot"), { x: -10, y: 5, duration: 0.05 }).to(l(".edge-triangle-left"), { x: -10, duration: 0.05 }).to(l(".corner-left-top"), { x: -10, y: -5, duration: 0.05 }).to(l(".edge-triangle-top"), { y: -5, duration: 0.05 }).to(l(".corner-right-top"), { x: 10, y: -5, duration: 0.05 }).to(l(".edge-triangle-right"), { x: 10, duration: 0.05 }).to(l(".corner-right-bot"), { x: 10, y: 5, duration: 0.05 }).to(l(".edge-triangle-bot"), { y: 5, duration: 0.05 }).to(l("text"), {
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
  })), n = (l, u = !1) => {
    l.forEach((f) => {
      const _ = f.getTotalLength();
      u ? Te.to(f, {
        stroke: "currentColor"
      }) : (Te.set(f, {
        strokeDasharray: _,
        strokeDashoffset: _,
        stroke: "transparent"
      }), Te.to(f, {
        strokeDashoffset: 0,
        stroke: "#3ee73e",
        duration: 1,
        ease: "power1.inOut"
      }));
    });
  }, s = () => {
    const l = Te.utils.selector(t.current), u = l(".stroke-fng");
    n(u), i(l), r.current.play();
  }, a = () => {
    if (t.current) {
      const l = Te.utils.selector(t.current), u = l(".stroke-fng");
      r.current.reverse(), Te.killTweensOf(u), n(u, !0), Te.killTweensOf(l(".scanner")), Te.set(l(".scanner"), { y: 0, opacity: 0 });
    }
  };
  return /* @__PURE__ */ P.jsx(
    "button",
    {
      className: "text-black dark:text-white dark:fill-white",
      onMouseEnter: s,
      onMouseLeave: a,
      style: { height: e, width: o },
      children: /* @__PURE__ */ P.jsx(En, { ref: t })
    }
  );
}, Ws = ({
  rowsCount: o,
  tilesPerRowCount: e,
  animationActive: t = !1
}) => {
  function r() {
    return Array(o).fill(null).map((i, n) => /* @__PURE__ */ P.jsx("div", { className: "hex-row rotate-method", children: Array(e).fill(null).map((s, a) => /* @__PURE__ */ P.jsx("div", { className: `hex ${t ? "animation-active" : ""}` }, a)) }, n));
  }
  return /* @__PURE__ */ P.jsx("div", { className: "piece rotateMethod", children: r() });
}, Ys = (o) => Cn(() => {
  const e = (n, s) => {
    const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return a[(n + s) % a.length];
  }, t = (n, s) => (n % s).toString(), r = `U-${t(o * 3, 9)}`, i = `${e(o, 20)}${t(o * 7, 99)}`;
  return `${r}${i}`;
}, [o]), Bs = ({ title: o, sciFiCode: e, isActive: t }) => {
  const r = Ys(e);
  return /* @__PURE__ */ P.jsxs(
    "div",
    {
      className: "flex flex-row gap-2 h-[45px] items-center theme-text cursor-pointer group font-['RobotoCondensed']",
      children: [
        /* @__PURE__ */ P.jsx(
          "div",
          {
            className: `w-[2.5%] h-full bg-evaTextWarning trapezoid ${t ? "glowedWarning" : ""}`,
            children: /* @__PURE__ */ P.jsx("div", { className: "rotate-90 text-[0.45rem] text-nowrap font-bold m-1", children: r })
          }
        ),
        /* @__PURE__ */ P.jsxs(
          "div",
          {
            className: `h-full w-full flex items-center gap-2 border-r transition-all duration-300 ease-in-out 
          ${t ? "activeItem glowedWarning border-1" : "hoveredItem"} 
        `,
            children: [
              /* @__PURE__ */ P.jsx(
                "div",
                {
                  className: `font-bold w-full ${t ? "" : "border-b"} group-hover:border-none h-full m-1`,
                  children: o
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
}, qs = ({ options: o, width: e = "w-full" }) => /* @__PURE__ */ P.jsx("div", { className: `flex flex-col gap-2 ${e}`, children: o.map((t, r) => /* @__PURE__ */ bn(Bs, { ...t, key: r, sciFiCode: r })) }), xi = () => /* @__PURE__ */ P.jsxs("div", { className: "w-[150px] h-[50px] flex flex-row align-top gap-[2px]", children: [
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
] }), Hs = ({ children: o }) => /* @__PURE__ */ P.jsxs("div", { className: "relative flex flex-col min-h-screen bg-gray-100 dark:bg-darkGrayBg theme-text font-[RobotoCondensed] ", children: [
  /* @__PURE__ */ P.jsxs("div", { className: "sticky top-0 bg-gray-100 dark:bg-darkGrayBg w-full shadow-md z-10 flex gap-2 items-center border-b-evaTextDanger glowed-border-b", children: [
    /* @__PURE__ */ P.jsx("div", { className: "ml-2 mt-2 hidden md:block z-10", children: /* @__PURE__ */ P.jsx(Ws, { tilesPerRowCount: 2, rowsCount: 2 }) }),
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
  /* @__PURE__ */ P.jsx("div", { className: "flex-1 overflow-y-auto flex items-center justify-center text-center px-4 pt-8 pb-8", children: /* @__PURE__ */ P.jsx("div", { className: "content mx-auto max-w-screen-md text-2xl md:text-1xl font-bold", children: /* @__PURE__ */ P.jsx("div", { className: "content", children: o }) }) })
] }), Js = ({
  headBlockChildren: o,
  width: e,
  height: t,
  borderColor: r,
  textColor: i,
  mainBlockChildren: n,
  animated: s
}) => /* @__PURE__ */ P.jsxs("div", { className: "card-container relative", style: { width: e, height: t }, children: [
  /* @__PURE__ */ P.jsxs(
    "div",
    {
      "data-augmented-ui": "bl-clip tr-clip br-clip-x bl-clip tl-clip-y border",
      className: `w-full h-full card text-${r} ${s ? "animated" : ""}`,
      children: [
        /* @__PURE__ */ P.jsx("div", { className: `text-${i} head-block`, children: o }),
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
  Ws as EvaTilePanel,
  Xs as EvaUnitBox,
  Hs as GeometricLayout
};
