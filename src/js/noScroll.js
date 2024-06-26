// !(function (e, o) {
//   if ('function' == typeof define && define.amd) define(['exports'], o);
//   else if ('undefined' != typeof exports) o(exports);
//   else {
//     var t = {};
//     o(t), (e.bodyScrollLock = t);
//   }
// })(this, function (exports) {
//   'use strict';
//   Object.defineProperty(exports, '__esModule', { value: !0 });
//   var t = !1;
//   if ('undefined' != typeof window) {
//     var e = {
//       get passive() {
//         t = !0;
//       },
//     };
//     window.addEventListener('testPassive', null, e),
//       window.removeEventListener('testPassive', null, e);
//   }
//   function l(o) {
//     return c.some(function (e) {
//       return !(!e.options.allowTouchMove || !e.options.allowTouchMove(o));
//     });
//   }
//   function d(e) {
//     var o = e || window.event;
//     return (
//       !!l(o.target) ||
//       1 < o.touches.length ||
//       (o.preventDefault && o.preventDefault(), !1)
//     );
//   }
//   function n() {
//     void 0 !== v && ((document.body.style.paddingRight = v), (v = void 0)),
//       void 0 !== s && ((document.body.style.overflow = s), (s = void 0));
//   }
//   var i =
//       'undefined' != typeof window &&
//       window.navigator &&
//       window.navigator.platform &&
//       (/iP(ad|hone|od)/.test(window.navigator.platform) ||
//         ('MacIntel' === window.navigator.platform &&
//           1 < window.navigator.maxTouchPoints)),
//     c = [],
//     a = !1,
//     u = -1,
//     s = void 0,
//     v = void 0;
//   (exports.disableBodyScroll = function (r, e) {
//     if (r) {
//       if (
//         !c.some(function (e) {
//           return e.targetElement === r;
//         })
//       ) {
//         var o = { targetElement: r, options: e || {} };
//         (c = [].concat(
//           (function (e) {
//             if (Array.isArray(e)) {
//               for (var o = 0, t = Array(e.length); o < e.length; o++)
//                 t[o] = e[o];
//               return t;
//             }
//             return Array.from(e);
//           })(c),
//           [o]
//         )),
//           i
//             ? ((r.ontouchstart = function (e) {
//                 1 === e.targetTouches.length &&
//                   (u = e.targetTouches[0].clientY);
//               }),
//               (r.ontouchmove = function (e) {
//                 var o, t, n, i;
//                 1 === e.targetTouches.length &&
//                   ((t = r),
//                   (i = (o = e).targetTouches[0].clientY - u),
//                   l(o.target) ||
//                     ((t && 0 === t.scrollTop && 0 < i) ||
//                     ((n = t) &&
//                       n.scrollHeight - n.scrollTop <= n.clientHeight &&
//                       i < 0)
//                       ? d(o)
//                       : o.stopPropagation()));
//               }),
//               a ||
//                 (document.addEventListener(
//                   'touchmove',
//                   d,
//                   t ? { passive: !1 } : void 0
//                 ),
//                 (a = !0)))
//             : (function (e) {
//                 if (void 0 === v) {
//                   var o = !!e && !0 === e.reserveScrollBarGap,
//                     t =
//                       window.innerWidth - document.documentElement.clientWidth;
//                   o &&
//                     0 < t &&
//                     ((v = document.body.style.paddingRight),
//                     (document.body.style.paddingRight = t + 'px'));
//                 }
//                 void 0 === s &&
//                   ((s = document.body.style.overflow),
//                   (document.body.style.overflow = 'hidden'));
//               })(e);
//       }
//     } else
//       console.error(
//         'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
//       );
//   }),
//     (exports.clearAllBodyScrollLocks = function () {
//       i
//         ? (c.forEach(function (e) {
//             (e.targetElement.ontouchstart = null),
//               (e.targetElement.ontouchmove = null);
//           }),
//           a &&
//             (document.removeEventListener(
//               'touchmove',
//               d,
//               t ? { passive: !1 } : void 0
//             ),
//             (a = !1)),
//           (u = -1))
//         : n(),
//         (c = []);
//     }),
//     (exports.enableBodyScroll = function (o) {
//       o
//         ? ((c = c.filter(function (e) {
//             return e.targetElement !== o;
//           })),
//           i
//             ? ((o.ontouchstart = null),
//               (o.ontouchmove = null),
//               a &&
//                 0 === c.length &&
//                 (document.removeEventListener(
//                   'touchmove',
//                   d,
//                   t ? { passive: !1 } : void 0
//                 ),
//                 (a = !1)))
//             : c.length || n())
//         : console.error(
//             'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
//           );
//     });
// });
