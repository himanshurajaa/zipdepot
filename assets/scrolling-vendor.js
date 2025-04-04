var Ln = Object.create;
var Re = Object.defineProperty;
var Cn = Object.getOwnPropertyDescriptor;
var Rn = Object.getOwnPropertyNames;
var Mn = Object.getPrototypeOf
  , kn = Object.prototype.hasOwnProperty;
var jn = (e, t) => () => (t || e((t = {
    exports: {}
}).exports, t),
t.exports)
  , zn = (e, t) => {
    for (var r in t)
        Re(e, r, {
            get: t[r],
            enumerable: !0
        })
}
  , $n = (e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function")
        for (let i of Rn(t))
            !kn.call(e, i) && i !== r && Re(e, i, {
                get: () => t[i],
                enumerable: !(n = Cn(t, i)) || n.enumerable
            });
    return e
}
;
var Wn = (e, t, r) => (r = e != null ? Ln(Mn(e)) : {},
$n(t || !e || !e.__esModule ? Re(r, "default", {
    value: e,
    enumerable: !0
}) : r, e));
var kr = jn( () => {
    (function() {
        "use strict";
        var e = function(h, l) {
            var p = function(P) {
                for (var E = 0, N = P.length; E < N; E++)
                    b(P[E])
            }
              , b = function(P) {
                var E = P.target
                  , N = P.attributeName
                  , q = P.oldValue;
                E.attributeChangedCallback(N, q, E.getAttribute(N))
            };
            return function(w, P) {
                var E = w.constructor.observedAttributes;
                return E && h(P).then(function() {
                    new l(p).observe(w, {
                        attributes: !0,
                        attributeOldValue: !0,
                        attributeFilter: E
                    });
                    for (var N = 0, q = E.length; N < q; N++)
                        w.hasAttribute(E[N]) && b({
                            target: w,
                            attributeName: E[N],
                            oldValue: null
                        })
                }),
                w
            }
        };
        function t(h, l) {
            if (h) {
                if (typeof h == "string")
                    return r(h, l);
                var p = Object.prototype.toString.call(h).slice(8, -1);
                if (p === "Object" && h.constructor && (p = h.constructor.name),
                p === "Map" || p === "Set")
                    return Array.from(h);
                if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
                    return r(h, l)
            }
        }
        function r(h, l) {
            (l == null || l > h.length) && (l = h.length);
            for (var p = 0, b = new Array(l); p < l; p++)
                b[p] = h[p];
            return b
        }
        function n(h, l) {
            var p = typeof Symbol < "u" && h[Symbol.iterator] || h["@@iterator"];
            if (!p) {
                if (Array.isArray(h) || (p = t(h)) || l && h && typeof h.length == "number") {
                    p && (h = p);
                    var b = 0
                      , w = function() {};
                    return {
                        s: w,
                        n: function() {
                            return b >= h.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: h[b++]
                            }
                        },
                        e: function(q) {
                            throw q
                        },
                        f: w
                    }
                }
                throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
            }
            var P = !0, E = !1, N;
            return {
                s: function() {
                    p = p.call(h)
                },
                n: function() {
                    var q = p.next();
                    return P = q.done,
                    q
                },
                e: function(q) {
                    E = !0,
                    N = q
                },
                f: function() {
                    try {
                        !P && p.return != null && p.return()
                    } finally {
                        if (E)
                            throw N
                    }
                }
            }
        }
        var i = !0
          , a = !1
          , o = "querySelectorAll"
          , c = function(l) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document
              , b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : MutationObserver
              , w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ["*"]
              , P = function q(mt, vt, tt, S, V, G) {
                var nt = n(mt), Dt;
                try {
                    for (nt.s(); !(Dt = nt.n()).done; ) {
                        var Q = Dt.value;
                        (G || o in Q) && (V ? tt.has(Q) || (tt.add(Q),
                        S.delete(Q),
                        l(Q, V)) : S.has(Q) || (S.add(Q),
                        tt.delete(Q),
                        l(Q, V)),
                        G || q(Q[o](vt), vt, tt, S, V, i))
                    }
                } catch (Ce) {
                    nt.e(Ce)
                } finally {
                    nt.f()
                }
            }
              , E = new b(function(q) {
                if (w.length) {
                    var mt = w.join(","), vt = new Set, tt = new Set, S = n(q), V;
                    try {
                        for (S.s(); !(V = S.n()).done; ) {
                            var G = V.value
                              , nt = G.addedNodes
                              , Dt = G.removedNodes;
                            P(Dt, mt, vt, tt, a, a),
                            P(nt, mt, vt, tt, i, a)
                        }
                    } catch (Q) {
                        S.e(Q)
                    } finally {
                        S.f()
                    }
                }
            }
            )
              , N = E.observe;
            return (E.observe = function(q) {
                return N.call(E, q, {
                    subtree: i,
                    childList: i
                })
            }
            )(p),
            E
        }
          , d = "querySelectorAll"
          , u = self
          , y = u.document
          , g = u.Element
          , v = u.MutationObserver
          , C = u.Set
          , I = u.WeakMap
          , k = function(l) {
            return d in l
        }
          , j = [].filter
          , M = function(h) {
            var l = new I
              , p = function(S) {
                for (var V = 0, G = S.length; V < G; V++)
                    l.delete(S[V])
            }
              , b = function() {
                for (var S = mt.takeRecords(), V = 0, G = S.length; V < G; V++)
                    E(j.call(S[V].removedNodes, k), !1),
                    E(j.call(S[V].addedNodes, k), !0)
            }
              , w = function(S) {
                return S.matches || S.webkitMatchesSelector || S.msMatchesSelector
            }
              , P = function(S, V) {
                var G;
                if (V)
                    for (var nt, Dt = w(S), Q = 0, Ce = N.length; Q < Ce; Q++)
                        Dt.call(S, nt = N[Q]) && (l.has(S) || l.set(S, new C),
                        G = l.get(S),
                        G.has(nt) || (G.add(nt),
                        h.handle(S, V, nt)));
                else
                    l.has(S) && (G = l.get(S),
                    l.delete(S),
                    G.forEach(function(Fn) {
                        h.handle(S, V, Fn)
                    }))
            }
              , E = function(S) {
                for (var V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, G = 0, nt = S.length; G < nt; G++)
                    P(S[G], V)
            }
              , N = h.query
              , q = h.root || y
              , mt = c(P, q, v, N)
              , vt = g.prototype.attachShadow;
            return vt && (g.prototype.attachShadow = function(tt) {
                var S = vt.call(this, tt);
                return mt.observe(S),
                S
            }
            ),
            N.length && E(q[d](N)),
            {
                drop: p,
                flush: b,
                observer: mt,
                parse: E
            }
        }
          , D = self
          , F = D.document
          , z = D.Map
          , B = D.MutationObserver
          , K = D.Object
          , Y = D.Set
          , U = D.WeakMap
          , L = D.Element
          , et = D.HTMLElement
          , T = D.Node
          , O = D.Error
          , s = D.TypeError
          , f = D.Reflect
          , m = K.defineProperty
          , A = K.keys
          , _ = K.getOwnPropertyNames
          , R = K.setPrototypeOf
          , x = !self.customElements
          , $ = function(l) {
            for (var p = A(l), b = [], w = new Y, P = p.length, E = 0; E < P; E++) {
                b[E] = l[p[E]];
                try {
                    delete l[p[E]]
                } catch {
                    w.add(E)
                }
            }
            return function() {
                for (var N = 0; N < P; N++)
                    w.has(N) || (l[p[N]] = b[N])
            }
        };
        if (x) {
            var W = function() {
                var l = this.constructor;
                if (!ct.has(l))
                    throw new s("Illegal constructor");
                var p = ct.get(l);
                if (Jt)
                    return or(Jt, p);
                var b = at.call(F, p);
                return or(R(b, l.prototype), p)
            }
              , at = F.createElement
              , ct = new z
              , rt = new z
              , ht = new z
              , pt = new z
              , Pt = []
              , Ct = function(l, p, b) {
                var w = ht.get(b);
                if (p && !w.isPrototypeOf(l)) {
                    var P = $(l);
                    Jt = R(l, w);
                    try {
                        new w.constructor
                    } finally {
                        Jt = null,
                        P()
                    }
                }
                var E = "".concat(p ? "" : "dis", "connectedCallback");
                E in w && l[E]()
            }
              , bn = M({
                query: Pt,
                handle: Ct
            })
              , wn = bn.parse
              , Jt = null
              , Ne = function(l) {
                if (!rt.has(l)) {
                    var p, b = new Promise(function(w) {
                        p = w
                    }
                    );
                    rt.set(l, {
                        $: b,
                        _: p
                    })
                }
                return rt.get(l).$
            }
              , or = e(Ne, B);
            self.customElements = {
                define: function(l, p) {
                    if (pt.has(l))
                        throw new O('the name "'.concat(l, '" has already been used with this registry'));
                    ct.set(p, l),
                    ht.set(l, p.prototype),
                    pt.set(l, p),
                    Pt.push(l),
                    Ne(l).then(function() {
                        wn(F.querySelectorAll(l))
                    }),
                    rt.get(l)._(p)
                },
                get: function(l) {
                    return pt.get(l)
                },
                whenDefined: Ne
            },
            m(W.prototype = et.prototype, "constructor", {
                value: W
            }),
            self.HTMLElement = W,
            F.createElement = function(h, l) {
                var p = l && l.is
                  , b = p ? pt.get(p) : pt.get(h);
                return b ? new b : at.call(F, h)
            }
            ,
            "isConnected"in T.prototype || m(T.prototype, "isConnected", {
                configurable: !0,
                get: function() {
                    return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED)
                }
            })
        } else if (x = !self.customElements.get("extends-br"),
        x)
            try {
                var ar = function h() {
                    return self.Reflect.construct(HTMLBRElement, [], h)
                };
                ar.prototype = HTMLLIElement.prototype;
                var sr = "extends-br";
                self.customElements.define("extends-br", ar, {
                    extends: "br"
                }),
                x = F.createElement("br", {
                    is: sr
                }).outerHTML.indexOf(sr) < 0;
                var lr = self.customElements
                  , En = lr.get
                  , xn = lr.whenDefined;
                self.customElements.whenDefined = function(h) {
                    var l = this;
                    return xn.call(this, h).then(function(p) {
                        return p || En.call(l, h)
                    })
                }
            } catch {}
        if (x) {
            var cr = function(l) {
                var p = Pe.get(l);
                pr(p.querySelectorAll(this), l.isConnected)
            }
              , st = self.customElements
              , ur = F.createElement
              , Sn = st.define
              , On = st.get
              , Tn = st.upgrade
              , An = f || {
                construct: function(l) {
                    return l.call(this)
                }
            }
              , _n = An.construct
              , Pe = new U
              , De = new Y
              , te = new z
              , ee = new z
              , fr = new z
              , re = new z
              , dr = []
              , ne = []
              , hr = function(l) {
                return re.get(l) || On.call(st, l)
            }
              , In = function(l, p, b) {
                var w = fr.get(b);
                if (p && !w.isPrototypeOf(l)) {
                    var P = $(l);
                    ie = R(l, w);
                    try {
                        new w.constructor
                    } finally {
                        ie = null,
                        P()
                    }
                }
                var E = "".concat(p ? "" : "dis", "connectedCallback");
                E in w && l[E]()
            }
              , Nn = M({
                query: ne,
                handle: In
            })
              , pr = Nn.parse
              , Pn = M({
                query: dr,
                handle: function(l, p) {
                    Pe.has(l) && (p ? De.add(l) : De.delete(l),
                    ne.length && cr.call(ne, l))
                }
            })
              , Dn = Pn.parse
              , mr = L.prototype.attachShadow;
            mr && (L.prototype.attachShadow = function(h) {
                var l = mr.call(this, h);
                return Pe.set(this, l),
                l
            }
            );
            var Fe = function(l) {
                if (!ee.has(l)) {
                    var p, b = new Promise(function(w) {
                        p = w
                    }
                    );
                    ee.set(l, {
                        $: b,
                        _: p
                    })
                }
                return ee.get(l).$
            }
              , Le = e(Fe, B)
              , ie = null;
            _(self).filter(function(h) {
                return /^HTML.*Element$/.test(h)
            }).forEach(function(h) {
                var l = self[h];
                function p() {
                    var b = this.constructor;
                    if (!te.has(b))
                        throw new s("Illegal constructor");
                    var w = te.get(b)
                      , P = w.is
                      , E = w.tag;
                    if (P) {
                        if (ie)
                            return Le(ie, P);
                        var N = ur.call(F, E);
                        return N.setAttribute("is", P),
                        Le(R(N, b.prototype), P)
                    } else
                        return _n.call(this, l, [], b)
                }
                m(p.prototype = l.prototype, "constructor", {
                    value: p
                }),
                m(self, h, {
                    value: p
                })
            }),
            F.createElement = function(h, l) {
                var p = l && l.is;
                if (p) {
                    var b = re.get(p);
                    if (b && te.get(b).tag === h)
                        return new b
                }
                var w = ur.call(F, h);
                return p && w.setAttribute("is", p),
                w
            }
            ,
            st.get = hr,
            st.whenDefined = Fe,
            st.upgrade = function(h) {
                var l = h.getAttribute("is");
                if (l) {
                    var p = re.get(l);
                    if (p) {
                        Le(R(h, p.prototype), l);
                        return
                    }
                }
                Tn.call(st, h)
            }
            ,
            st.define = function(h, l, p) {
                if (hr(h))
                    throw new O("'".concat(h, "' has already been defined as a custom element"));
                var b, w = p && p.extends;
                te.set(l, w ? {
                    is: h,
                    tag: w
                } : {
                    is: "",
                    tag: h
                }),
                w ? (b = "".concat(w, '[is="').concat(h, '"]'),
                fr.set(b, l.prototype),
                re.set(h, l),
                ne.push(b)) : (Sn.apply(st, arguments),
                dr.push(b = h)),
                Fe(h).then(function() {
                    w ? (pr(F.querySelectorAll(b)),
                    De.forEach(cr, [b])) : Dn(F.querySelectorAll(b))
                }),
                ee.get(h)._(l)
            }
        }
    }
    )()
}
);
var oe = null, gr, yr, br, wr = 65, Me, Rt, vr = new Set, Er = 1111;
Vn();
function Vn() {
    if (!document.createElement("link").relList.supports("prefetch"))
        return;
    let t = "instantVaryAccept"in document.body.dataset || "Shopify"in window
      , r = navigator.userAgent.indexOf("Chrome/");
    if (r > -1 && (oe = parseInt(navigator.userAgent.substring(r + 7))),
    t && oe && oe < 110)
        return;
    let n = "instantMousedownShortcut"in document.body.dataset;
    gr = "instantAllowQueryString"in document.body.dataset,
    yr = "instantAllowExternalLinks"in document.body.dataset,
    br = "instantWhitelist"in document.body.dataset;
    let i = {
        capture: !0,
        passive: !0
    }
      , a = !1
      , o = !1
      , c = !1;
    if ("instantIntensity"in document.body.dataset) {
        let d = document.body.dataset.instantIntensity;
        if (d.startsWith("mousedown"))
            a = !0,
            d == "mousedown-only" && (o = !0);
        else if (d.startsWith("viewport")) {
            let u = navigator.connection && navigator.connection.saveData
              , y = navigator.connection && navigator.connection.effectiveType && navigator.connection.effectiveType.includes("2g");
            !u && !y && (d == "viewport" ? document.documentElement.clientWidth * document.documentElement.clientHeight < 45e4 && (c = !0) : d == "viewport-all" && (c = !0))
        } else {
            let u = parseInt(d);
            isNaN(u) || (wr = u)
        }
    }
    if (o || document.addEventListener("touchstart", Bn, i),
    a ? n || document.addEventListener("mousedown", Kn, i) : document.addEventListener("mouseover", Hn, i),
    n && document.addEventListener("mousedown", qn, i),
    c) {
        let d = window.requestIdleCallback;
        d || (d = u => {
            u()
        }
        ),
        d(function() {
            let y = new IntersectionObserver(g => {
                g.forEach(v => {
                    if (v.isIntersecting) {
                        let C = v.target;
                        y.unobserve(C),
                        se(C.href)
                    }
                }
                )
            }
            );
            document.querySelectorAll("a").forEach(g => {
                ae(g) && y.observe(g)
            }
            )
        }, {
            timeout: 1500
        })
    }
}
function Bn(e) {
    Me = performance.now();
    let t = e.target.closest("a");
    ae(t) && se(t.href, "high")
}
function Hn(e) {
    if (performance.now() - Me < Er || !("closest"in e.target))
        return;
    let t = e.target.closest("a");
    ae(t) && (t.addEventListener("mouseout", Un, {
        passive: !0
    }),
    Rt = setTimeout( () => {
        se(t.href, "high"),
        Rt = void 0
    }
    , wr))
}
function Kn(e) {
    let t = e.target.closest("a");
    ae(t) && se(t.href, "high")
}
function Un(e) {
    e.relatedTarget && e.target.closest("a") == e.relatedTarget.closest("a") || Rt && (clearTimeout(Rt),
    Rt = void 0)
}
function qn(e) {
    if (performance.now() - Me < Er)
        return;
    let t = e.target.closest("a");
    if (e.which > 1 || e.metaKey || e.ctrlKey || !t)
        return;
    t.addEventListener("click", function(n) {
        n.detail != 1337 && n.preventDefault()
    }, {
        capture: !0,
        passive: !1,
        once: !0
    });
    let r = new MouseEvent("click",{
        view: window,
        bubbles: !0,
        cancelable: !1,
        detail: 1337
    });
    t.dispatchEvent(r)
}
function ae(e) {
    if (!(!e || !e.href) && !(br && !("instant"in e.dataset)) && !(e.origin != location.origin && (!(yr || "instant"in e.dataset) || !oe)) && ["http:", "https:"].includes(e.protocol) && !(e.protocol == "http:" && location.protocol == "https:") && !(!gr && e.search && !("instant"in e.dataset)) && !(e.hash && e.pathname + e.search == location.pathname + location.search) && !("noInstant"in e.dataset))
        return !0
}
function se(e, t="auto") {
    if (vr.has(e))
        return;
    let r = document.createElement("link");
    r.rel = "prefetch",
    r.href = e,
    r.fetchPriority = t,
    r.as = "document",
    document.head.appendChild(r),
    vr.add(e)
}
var Mr = {};
zn(Mr, {
    createFocusTrap: () => xi
});
var Sr = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"]
  , le = Sr.join(",")
  , Or = typeof Element > "u"
  , Ot = Or ? function() {}
: Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
  , ce = !Or && Element.prototype.getRootNode ? function(e) {
    var t;
    return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e)
}
: function(e) {
    return e?.ownerDocument
}
  , ue = function e(t, r) {
    var n;
    r === void 0 && (r = !0);
    var i = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "inert")
      , a = i === "" || i === "true"
      , o = a || r && t && e(t.parentNode);
    return o
}
  , Gn = function(t) {
    var r, n = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "contenteditable");
    return n === "" || n === "true"
}
  , Tr = function(t, r, n) {
    if (ue(t))
        return [];
    var i = Array.prototype.slice.apply(t.querySelectorAll(le));
    return r && Ot.call(t, le) && i.unshift(t),
    i = i.filter(n),
    i
}
  , Ar = function e(t, r, n) {
    for (var i = [], a = Array.from(t); a.length; ) {
        var o = a.shift();
        if (!ue(o, !1))
            if (o.tagName === "SLOT") {
                var c = o.assignedElements()
                  , d = c.length ? c : o.children
                  , u = e(d, !0, n);
                n.flatten ? i.push.apply(i, u) : i.push({
                    scopeParent: o,
                    candidates: u
                })
            } else {
                var y = Ot.call(o, le);
                y && n.filter(o) && (r || !t.includes(o)) && i.push(o);
                var g = o.shadowRoot || typeof n.getShadowRoot == "function" && n.getShadowRoot(o)
                  , v = !ue(g, !1) && (!n.shadowRootFilter || n.shadowRootFilter(o));
                if (g && v) {
                    var C = e(g === !0 ? o.children : g.children, !0, n);
                    n.flatten ? i.push.apply(i, C) : i.push({
                        scopeParent: o,
                        candidates: C
                    })
                } else
                    a.unshift.apply(a, o.children)
            }
    }
    return i
}
  , _r = function(t) {
    return !isNaN(parseInt(t.getAttribute("tabindex"), 10))
}
  , gt = function(t) {
    if (!t)
        throw new Error("No node provided");
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Gn(t)) && !_r(t) ? 0 : t.tabIndex
}
  , Zn = function(t, r) {
    var n = gt(t);
    return n < 0 && r && !_r(t) ? 0 : n
}
  , Xn = function(t, r) {
    return t.tabIndex === r.tabIndex ? t.documentOrder - r.documentOrder : t.tabIndex - r.tabIndex
}
  , Ir = function(t) {
    return t.tagName === "INPUT"
}
  , Yn = function(t) {
    return Ir(t) && t.type === "hidden"
}
  , Qn = function(t) {
    var r = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(n) {
        return n.tagName === "SUMMARY"
    });
    return r
}
  , Jn = function(t, r) {
    for (var n = 0; n < t.length; n++)
        if (t[n].checked && t[n].form === r)
            return t[n]
}
  , ti = function(t) {
    if (!t.name)
        return !0;
    var r = t.form || ce(t), n = function(c) {
        return r.querySelectorAll('input[type="radio"][name="' + c + '"]')
    }, i;
    if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
        i = n(window.CSS.escape(t.name));
    else
        try {
            i = n(t.name)
        } catch (o) {
            return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", o.message),
            !1
        }
    var a = Jn(i, t.form);
    return !a || a === t
}
  , ei = function(t) {
    return Ir(t) && t.type === "radio"
}
  , ri = function(t) {
    return ei(t) && !ti(t)
}
  , ni = function(t) {
    var r, n = t && ce(t), i = (r = n) === null || r === void 0 ? void 0 : r.host, a = !1;
    if (n && n !== t) {
        var o, c, d;
        for (a = !!((o = i) !== null && o !== void 0 && (c = o.ownerDocument) !== null && c !== void 0 && c.contains(i) || t != null && (d = t.ownerDocument) !== null && d !== void 0 && d.contains(t)); !a && i; ) {
            var u, y, g;
            n = ce(i),
            i = (u = n) === null || u === void 0 ? void 0 : u.host,
            a = !!((y = i) !== null && y !== void 0 && (g = y.ownerDocument) !== null && g !== void 0 && g.contains(i))
        }
    }
    return a
}
  , xr = function(t) {
    var r = t.getBoundingClientRect()
      , n = r.width
      , i = r.height;
    return n === 0 && i === 0
}
  , ii = function(t, r) {
    var n = r.displayCheck
      , i = r.getShadowRoot;
    if (getComputedStyle(t).visibility === "hidden")
        return !0;
    var a = Ot.call(t, "details>summary:first-of-type")
      , o = a ? t.parentElement : t;
    if (Ot.call(o, "details:not([open]) *"))
        return !0;
    if (!n || n === "full" || n === "legacy-full") {
        if (typeof i == "function") {
            for (var c = t; t; ) {
                var d = t.parentElement
                  , u = ce(t);
                if (d && !d.shadowRoot && i(d) === !0)
                    return xr(t);
                t.assignedSlot ? t = t.assignedSlot : !d && u !== t.ownerDocument ? t = u.host : t = d
            }
            t = c
        }
        if (ni(t))
            return !t.getClientRects().length;
        if (n !== "legacy-full")
            return !0
    } else if (n === "non-zero-area")
        return xr(t);
    return !1
}
  , oi = function(t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
        for (var r = t.parentElement; r; ) {
            if (r.tagName === "FIELDSET" && r.disabled) {
                for (var n = 0; n < r.children.length; n++) {
                    var i = r.children.item(n);
                    if (i.tagName === "LEGEND")
                        return Ot.call(r, "fieldset[disabled] *") ? !0 : !i.contains(t)
                }
                return !0
            }
            r = r.parentElement
        }
    return !1
}
  , fe = function(t, r) {
    return !(r.disabled || ue(r) || Yn(r) || ii(r, t) || Qn(r) || oi(r))
}
  , ke = function(t, r) {
    return !(ri(r) || gt(r) < 0 || !fe(t, r))
}
  , ai = function(t) {
    var r = parseInt(t.getAttribute("tabindex"), 10);
    return !!(isNaN(r) || r >= 0)
}
  , si = function e(t) {
    var r = []
      , n = [];
    return t.forEach(function(i, a) {
        var o = !!i.scopeParent
          , c = o ? i.scopeParent : i
          , d = Zn(c, o)
          , u = o ? e(i.candidates) : c;
        d === 0 ? o ? r.push.apply(r, u) : r.push(c) : n.push({
            documentOrder: a,
            tabIndex: d,
            item: i,
            isScope: o,
            content: u
        })
    }),
    n.sort(Xn).reduce(function(i, a) {
        return a.isScope ? i.push.apply(i, a.content) : i.push(a.content),
        i
    }, []).concat(r)
}
  , Nr = function(t, r) {
    r = r || {};
    var n;
    return r.getShadowRoot ? n = Ar([t], r.includeContainer, {
        filter: ke.bind(null, r),
        flatten: !1,
        getShadowRoot: r.getShadowRoot,
        shadowRootFilter: ai
    }) : n = Tr(t, r.includeContainer, ke.bind(null, r)),
    si(n)
}
  , Pr = function(t, r) {
    r = r || {};
    var n;
    return r.getShadowRoot ? n = Ar([t], r.includeContainer, {
        filter: fe.bind(null, r),
        flatten: !0,
        getShadowRoot: r.getShadowRoot
    }) : n = Tr(t, r.includeContainer, fe.bind(null, r)),
    n
}
  , Tt = function(t, r) {
    if (r = r || {},
    !t)
        throw new Error("No node provided");
    return Ot.call(t, le) === !1 ? !1 : ke(r, t)
}
  , li = Sr.concat("iframe").join(",")
  , de = function(t, r) {
    if (r = r || {},
    !t)
        throw new Error("No node provided");
    return Ot.call(t, li) === !1 ? !1 : fe(r, t)
};
function je(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = Array(t); r < t; r++)
        n[r] = e[r];
    return n
}
function ci(e) {
    if (Array.isArray(e))
        return je(e)
}
function ui(e, t, r) {
    return (t = mi(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function fi(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e)
}
function di() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function Dr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t && (n = n.filter(function(i) {
            return Object.getOwnPropertyDescriptor(e, i).enumerable
        })),
        r.push.apply(r, n)
    }
    return r
}
function Fr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Dr(Object(r), !0).forEach(function(n) {
            ui(e, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dr(Object(r)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return e
}
function hi(e) {
    return ci(e) || fi(e) || vi(e) || di()
}
function pi(e, t) {
    if (typeof e != "object" || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (r !== void 0) {
        var n = r.call(e, t || "default");
        if (typeof n != "object")
            return n;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}
function mi(e) {
    var t = pi(e, "string");
    return typeof t == "symbol" ? t : t + ""
}
function vi(e, t) {
    if (e) {
        if (typeof e == "string")
            return je(e, t);
        var r = {}.toString.call(e).slice(8, -1);
        return r === "Object" && e.constructor && (r = e.constructor.name),
        r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? je(e, t) : void 0
    }
}
var Lr = {
    activateTrap: function(t, r) {
        if (t.length > 0) {
            var n = t[t.length - 1];
            n !== r && n.pause()
        }
        var i = t.indexOf(r);
        i === -1 || t.splice(i, 1),
        t.push(r)
    },
    deactivateTrap: function(t, r) {
        var n = t.indexOf(r);
        n !== -1 && t.splice(n, 1),
        t.length > 0 && t[t.length - 1].unpause()
    }
}
  , gi = function(t) {
    return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function"
}
  , yi = function(t) {
    return t?.key === "Escape" || t?.key === "Esc" || t?.keyCode === 27
}
  , kt = function(t) {
    return t?.key === "Tab" || t?.keyCode === 9
}
  , bi = function(t) {
    return kt(t) && !t.shiftKey
}
  , wi = function(t) {
    return kt(t) && t.shiftKey
}
  , Cr = function(t) {
    return setTimeout(t, 0)
}
  , Rr = function(t, r) {
    var n = -1;
    return t.every(function(i, a) {
        return r(i) ? (n = a,
        !1) : !0
    }),
    n
}
  , Mt = function(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
        n[i - 1] = arguments[i];
    return typeof t == "function" ? t.apply(void 0, n) : t
}
  , he = function(t) {
    return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target
}
  , Ei = []
  , xi = function(t, r) {
    var n = r?.document || document, i = r?.trapStack || Ei, a = Fr({
        returnFocusOnDeactivate: !0,
        escapeDeactivates: !0,
        delayInitialFocus: !0,
        isKeyForward: bi,
        isKeyBackward: wi
    }, r), o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0
    }, c, d = function(s, f, m) {
        return s && s[f] !== void 0 ? s[f] : a[m || f]
    }, u = function(s, f) {
        var m = typeof f?.composedPath == "function" ? f.composedPath() : void 0;
        return o.containerGroups.findIndex(function(A) {
            var _ = A.container
              , R = A.tabbableNodes;
            return _.contains(s) || m?.includes(_) || R.find(function(x) {
                return x === s
            })
        })
    }, y = function(s) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , m = f.hasFallback
          , A = m === void 0 ? !1 : m
          , _ = f.params
          , R = _ === void 0 ? [] : _
          , x = a[s];
        if (typeof x == "function" && (x = x.apply(void 0, hi(R))),
        x === !0 && (x = void 0),
        !x) {
            if (x === void 0 || x === !1)
                return x;
            throw new Error("`".concat(s, "` was specified but was not a node, or did not return a node"))
        }
        var $ = x;
        if (typeof x == "string") {
            try {
                $ = n.querySelector(x)
            } catch (W) {
                throw new Error("`".concat(s, '` appears to be an invalid selector; error="').concat(W.message, '"'))
            }
            if (!$ && !A)
                throw new Error("`".concat(s, "` as selector refers to no known node"))
        }
        return $
    }, g = function() {
        var s = y("initialFocus", {
            hasFallback: !0
        });
        if (s === !1)
            return !1;
        if (s === void 0 || s && !de(s, a.tabbableOptions))
            if (u(n.activeElement) >= 0)
                s = n.activeElement;
            else {
                var f = o.tabbableGroups[0]
                  , m = f && f.firstTabbableNode;
                s = m || y("fallbackFocus")
            }
        else
            s === null && (s = y("fallbackFocus"));
        if (!s)
            throw new Error("Your focus-trap needs to have at least one focusable element");
        return s
    }, v = function() {
        if (o.containerGroups = o.containers.map(function(s) {
            var f = Nr(s, a.tabbableOptions)
              , m = Pr(s, a.tabbableOptions)
              , A = f.length > 0 ? f[0] : void 0
              , _ = f.length > 0 ? f[f.length - 1] : void 0
              , R = m.find(function(W) {
                return Tt(W)
            })
              , x = m.slice().reverse().find(function(W) {
                return Tt(W)
            })
              , $ = !!f.find(function(W) {
                return gt(W) > 0
            });
            return {
                container: s,
                tabbableNodes: f,
                focusableNodes: m,
                posTabIndexesFound: $,
                firstTabbableNode: A,
                lastTabbableNode: _,
                firstDomTabbableNode: R,
                lastDomTabbableNode: x,
                nextTabbableNode: function(at) {
                    var ct = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
                      , rt = f.indexOf(at);
                    return rt < 0 ? ct ? m.slice(m.indexOf(at) + 1).find(function(ht) {
                        return Tt(ht)
                    }) : m.slice(0, m.indexOf(at)).reverse().find(function(ht) {
                        return Tt(ht)
                    }) : f[rt + (ct ? 1 : -1)]
                }
            }
        }),
        o.tabbableGroups = o.containerGroups.filter(function(s) {
            return s.tabbableNodes.length > 0
        }),
        o.tabbableGroups.length <= 0 && !y("fallbackFocus"))
            throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
        if (o.containerGroups.find(function(s) {
            return s.posTabIndexesFound
        }) && o.containerGroups.length > 1)
            throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")
    }, C = function(s) {
        var f = s.activeElement;
        if (f)
            return f.shadowRoot && f.shadowRoot.activeElement !== null ? C(f.shadowRoot) : f
    }, I = function(s) {
        if (s !== !1 && s !== C(document)) {
            if (!s || !s.focus) {
                I(g());
                return
            }
            s.focus({
                preventScroll: !!a.preventScroll
            }),
            o.mostRecentlyFocusedNode = s,
            gi(s) && s.select()
        }
    }, k = function(s) {
        var f = y("setReturnFocus", {
            params: [s]
        });
        return f || (f === !1 ? !1 : s)
    }, j = function(s) {
        var f = s.target
          , m = s.event
          , A = s.isBackward
          , _ = A === void 0 ? !1 : A;
        f = f || he(m),
        v();
        var R = null;
        if (o.tabbableGroups.length > 0) {
            var x = u(f, m)
              , $ = x >= 0 ? o.containerGroups[x] : void 0;
            if (x < 0)
                _ ? R = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode : R = o.tabbableGroups[0].firstTabbableNode;
            else if (_) {
                var W = Rr(o.tabbableGroups, function(Pt) {
                    var Ct = Pt.firstTabbableNode;
                    return f === Ct
                });
                if (W < 0 && ($.container === f || de(f, a.tabbableOptions) && !Tt(f, a.tabbableOptions) && !$.nextTabbableNode(f, !1)) && (W = x),
                W >= 0) {
                    var at = W === 0 ? o.tabbableGroups.length - 1 : W - 1
                      , ct = o.tabbableGroups[at];
                    R = gt(f) >= 0 ? ct.lastTabbableNode : ct.lastDomTabbableNode
                } else
                    kt(m) || (R = $.nextTabbableNode(f, !1))
            } else {
                var rt = Rr(o.tabbableGroups, function(Pt) {
                    var Ct = Pt.lastTabbableNode;
                    return f === Ct
                });
                if (rt < 0 && ($.container === f || de(f, a.tabbableOptions) && !Tt(f, a.tabbableOptions) && !$.nextTabbableNode(f)) && (rt = x),
                rt >= 0) {
                    var ht = rt === o.tabbableGroups.length - 1 ? 0 : rt + 1
                      , pt = o.tabbableGroups[ht];
                    R = gt(f) >= 0 ? pt.firstTabbableNode : pt.firstDomTabbableNode
                } else
                    kt(m) || (R = $.nextTabbableNode(f))
            }
        } else
            R = y("fallbackFocus");
        return R
    }, M = function(s) {
        var f = he(s);
        if (!(u(f, s) >= 0)) {
            if (Mt(a.clickOutsideDeactivates, s)) {
                c.deactivate({
                    returnFocus: a.returnFocusOnDeactivate
                });
                return
            }
            Mt(a.allowOutsideClick, s) || s.preventDefault()
        }
    }, D = function(s) {
        var f = he(s)
          , m = u(f, s) >= 0;
        if (m || f instanceof Document)
            m && (o.mostRecentlyFocusedNode = f);
        else {
            s.stopImmediatePropagation();
            var A, _ = !0;
            if (o.mostRecentlyFocusedNode)
                if (gt(o.mostRecentlyFocusedNode) > 0) {
                    var R = u(o.mostRecentlyFocusedNode)
                      , x = o.containerGroups[R].tabbableNodes;
                    if (x.length > 0) {
                        var $ = x.findIndex(function(W) {
                            return W === o.mostRecentlyFocusedNode
                        });
                        $ >= 0 && (a.isKeyForward(o.recentNavEvent) ? $ + 1 < x.length && (A = x[$ + 1],
                        _ = !1) : $ - 1 >= 0 && (A = x[$ - 1],
                        _ = !1))
                    }
                } else
                    o.containerGroups.some(function(W) {
                        return W.tabbableNodes.some(function(at) {
                            return gt(at) > 0
                        })
                    }) || (_ = !1);
            else
                _ = !1;
            _ && (A = j({
                target: o.mostRecentlyFocusedNode,
                isBackward: a.isKeyBackward(o.recentNavEvent)
            })),
            I(A || o.mostRecentlyFocusedNode || g())
        }
        o.recentNavEvent = void 0
    }, F = function(s) {
        var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = s;
        var m = j({
            event: s,
            isBackward: f
        });
        m && (kt(s) && s.preventDefault(),
        I(m))
    }, z = function(s) {
        (a.isKeyForward(s) || a.isKeyBackward(s)) && F(s, a.isKeyBackward(s))
    }, B = function(s) {
        yi(s) && Mt(a.escapeDeactivates, s) !== !1 && (s.preventDefault(),
        c.deactivate())
    }, K = function(s) {
        var f = he(s);
        u(f, s) >= 0 || Mt(a.clickOutsideDeactivates, s) || Mt(a.allowOutsideClick, s) || (s.preventDefault(),
        s.stopImmediatePropagation())
    }, Y = function() {
        if (o.active)
            return Lr.activateTrap(i, c),
            o.delayInitialFocusTimer = a.delayInitialFocus ? Cr(function() {
                I(g())
            }) : I(g()),
            n.addEventListener("focusin", D, !0),
            n.addEventListener("mousedown", M, {
                capture: !0,
                passive: !1
            }),
            n.addEventListener("touchstart", M, {
                capture: !0,
                passive: !1
            }),
            n.addEventListener("click", K, {
                capture: !0,
                passive: !1
            }),
            n.addEventListener("keydown", z, {
                capture: !0,
                passive: !1
            }),
            n.addEventListener("keydown", B),
            c
    }, U = function() {
        if (o.active)
            return n.removeEventListener("focusin", D, !0),
            n.removeEventListener("mousedown", M, !0),
            n.removeEventListener("touchstart", M, !0),
            n.removeEventListener("click", K, !0),
            n.removeEventListener("keydown", z, !0),
            n.removeEventListener("keydown", B),
            c
    }, L = function(s) {
        var f = s.some(function(m) {
            var A = Array.from(m.removedNodes);
            return A.some(function(_) {
                return _ === o.mostRecentlyFocusedNode
            })
        });
        f && I(g())
    }, et = typeof window < "u" && "MutationObserver"in window ? new MutationObserver(L) : void 0, T = function() {
        et && (et.disconnect(),
        o.active && !o.paused && o.containers.map(function(s) {
            et.observe(s, {
                subtree: !0,
                childList: !0
            })
        }))
    };
    return c = {
        get active() {
            return o.active
        },
        get paused() {
            return o.paused
        },
        activate: function(s) {
            if (o.active)
                return this;
            var f = d(s, "onActivate")
              , m = d(s, "onPostActivate")
              , A = d(s, "checkCanFocusTrap");
            A || v(),
            o.active = !0,
            o.paused = !1,
            o.nodeFocusedBeforeActivation = n.activeElement,
            f?.();
            var _ = function() {
                A && v(),
                Y(),
                T(),
                m?.()
            };
            return A ? (A(o.containers.concat()).then(_, _),
            this) : (_(),
            this)
        },
        deactivate: function(s) {
            if (!o.active)
                return this;
            var f = Fr({
                onDeactivate: a.onDeactivate,
                onPostDeactivate: a.onPostDeactivate,
                checkCanReturnFocus: a.checkCanReturnFocus
            }, s);
            clearTimeout(o.delayInitialFocusTimer),
            o.delayInitialFocusTimer = void 0,
            U(),
            o.active = !1,
            o.paused = !1,
            T(),
            Lr.deactivateTrap(i, c);
            var m = d(f, "onDeactivate")
              , A = d(f, "onPostDeactivate")
              , _ = d(f, "checkCanReturnFocus")
              , R = d(f, "returnFocus", "returnFocusOnDeactivate");
            m?.();
            var x = function() {
                Cr(function() {
                    R && I(k(o.nodeFocusedBeforeActivation)),
                    A?.()
                })
            };
            return R && _ ? (_(k(o.nodeFocusedBeforeActivation)).then(x, x),
            this) : (x(),
            this)
        },
        pause: function(s) {
            if (o.paused || !o.active)
                return this;
            var f = d(s, "onPause")
              , m = d(s, "onPostPause");
            return o.paused = !0,
            f?.(),
            U(),
            T(),
            m?.(),
            this
        },
        unpause: function(s) {
            if (!o.paused || !o.active)
                return this;
            var f = d(s, "onUnpause")
              , m = d(s, "onPostUnpause");
            return o.paused = !1,
            f?.(),
            v(),
            Y(),
            T(),
            m?.(),
            this
        },
        updateContainerElements: function(s) {
            var f = [].concat(s).filter(Boolean);
            return o.containers = f.map(function(m) {
                return typeof m == "string" ? n.querySelector(m) : m
            }),
            o.active && v(),
            T(),
            this
        }
    },
    c.updateContainerElements(t),
    c
};
var Jl = Wn(kr());
function ze(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function $e(e, t) {
    let r = e.indexOf(t);
    r > -1 && e.splice(r, 1)
}
var jt = (e, t, r) => Math.min(Math.max(r, e), t);
var H = {
    duration: .3,
    delay: 0,
    endDelay: 0,
    repeat: 0,
    easing: "ease"
};
var J = e => typeof e == "number";
var lt = e => Array.isArray(e) && !J(e[0]);
var jr = (e, t, r) => {
    let n = t - e;
    return ((r - e) % n + n) % n + e
}
;
function zt(e, t) {
    return lt(e) ? e[jr(0, e.length, t)] : e
}
var At = (e, t, r) => -r * e + r * t + e;
var $t = () => {}
  , X = e => e;
var ot = (e, t, r) => t - e === 0 ? 1 : (r - e) / (t - e);
function Ft(e, t) {
    let r = e[e.length - 1];
    for (let n = 1; n <= t; n++) {
        let i = ot(0, t, n);
        e.push(At(r, 1, i))
    }
}
function _t(e) {
    let t = [0];
    return Ft(t, e - 1),
    t
}
function Wt(e, t=_t(e.length), r=X) {
    let n = e.length
      , i = n - t.length;
    return i > 0 && Ft(t, i),
    a => {
        let o = 0;
        for (; o < n - 2 && !(a < t[o + 1]); o++)
            ;
        let c = jt(0, 1, ot(t[o], t[o + 1], a));
        return c = zt(r, o)(c),
        At(e[o], e[o + 1], c)
    }
}
var Vt = e => Array.isArray(e) && J(e[0]);
var yt = e => typeof e == "object" && !!e.createAnimation;
var Z = e => typeof e == "function";
var ut = e => typeof e == "string";
var bt = {
    ms: e => e * 1e3,
    s: e => e / 1e3
};
function We(e, t) {
    return t ? e * (1e3 / t) : 0
}
var zr = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e
  , Si = 1e-7
  , Oi = 12;
function Ti(e, t, r, n, i) {
    let a, o, c = 0;
    do
        o = t + (r - t) / 2,
        a = zr(o, n, i) - e,
        a > 0 ? r = o : t = o;
    while (Math.abs(a) > Si && ++c < Oi);
    return o
}
function It(e, t, r, n) {
    if (e === t && r === n)
        return X;
    let i = a => Ti(a, 0, 1, e, r);
    return a => a === 0 || a === 1 ? a : zr(i(a), t, n)
}
var Ve = (e, t="end") => r => {
    r = t === "end" ? Math.min(r, .999) : Math.max(r, .001);
    let n = r * e
      , i = t === "end" ? Math.floor(n) : Math.ceil(n);
    return jt(0, 1, i / e)
}
;
var Ai = {
    ease: It(.25, .1, .25, 1),
    "ease-in": It(.42, 0, 1, 1),
    "ease-in-out": It(.42, 0, .58, 1),
    "ease-out": It(0, 0, .58, 1)
}
  , _i = /\((.*?)\)/;
function Lt(e) {
    if (Z(e))
        return e;
    if (Vt(e))
        return It(...e);
    let t = Ai[e];
    if (t)
        return t;
    if (e.startsWith("steps")) {
        let r = _i.exec(e);
        if (r) {
            let n = r[1].split(",");
            return Ve(parseFloat(n[0]), n[1].trim())
        }
    }
    return X
}
var ft = class {
    constructor(t, r=[0, 1], {easing: n, duration: i=H.duration, delay: a=H.delay, endDelay: o=H.endDelay, repeat: c=H.repeat, offset: d, direction: u="normal", autoplay: y=!0}={}) {
        if (this.startTime = null,
        this.rate = 1,
        this.t = 0,
        this.cancelTimestamp = null,
        this.easing = X,
        this.duration = 0,
        this.totalDuration = 0,
        this.repeat = 0,
        this.playState = "idle",
        this.finished = new Promise( (v, C) => {
            this.resolve = v,
            this.reject = C
        }
        ),
        n = n || H.easing,
        yt(n)) {
            let v = n.createAnimation(r);
            n = v.easing,
            r = v.keyframes || r,
            i = v.duration || i
        }
        this.repeat = c,
        this.easing = lt(n) ? X : Lt(n),
        this.updateDuration(i);
        let g = Wt(r, d, lt(n) ? n.map(Lt) : X);
        this.tick = v => {
            var C;
            a = a;
            let I = 0;
            this.pauseTime !== void 0 ? I = this.pauseTime : I = (v - this.startTime) * this.rate,
            this.t = I,
            I /= 1e3,
            I = Math.max(I - a, 0),
            this.playState === "finished" && this.pauseTime === void 0 && (I = this.totalDuration);
            let k = I / this.duration
              , j = Math.floor(k)
              , M = k % 1;
            !M && k >= 1 && (M = 1),
            M === 1 && j--;
            let D = j % 2;
            (u === "reverse" || u === "alternate" && D || u === "alternate-reverse" && !D) && (M = 1 - M);
            let F = I >= this.totalDuration ? 1 : Math.min(M, 1)
              , z = g(this.easing(F));
            t(z),
            this.pauseTime === void 0 && (this.playState === "finished" || I >= this.totalDuration + o) ? (this.playState = "finished",
            (C = this.resolve) === null || C === void 0 || C.call(this, z)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick))
        }
        ,
        y && this.play()
    }
    play() {
        let t = performance.now();
        this.playState = "running",
        this.pauseTime !== void 0 ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t),
        this.cancelTimestamp = this.startTime,
        this.pauseTime = void 0,
        this.frameRequestId = requestAnimationFrame(this.tick)
    }
    pause() {
        this.playState = "paused",
        this.pauseTime = this.t
    }
    finish() {
        this.playState = "finished",
        this.tick(0)
    }
    stop() {
        var t;
        this.playState = "idle",
        this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId),
        (t = this.reject) === null || t === void 0 || t.call(this, !1)
    }
    cancel() {
        this.stop(),
        this.tick(this.cancelTimestamp)
    }
    reverse() {
        this.rate *= -1
    }
    commitStyles() {}
    updateDuration(t) {
        this.duration = t,
        this.totalDuration = t * (this.repeat + 1)
    }
    get currentTime() {
        return this.t
    }
    set currentTime(t) {
        this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate
    }
    get playbackRate() {
        return this.rate
    }
    set playbackRate(t) {
        this.rate = t
    }
}
;
var Bt = function() {};
var Ht = class {
    setAnimation(t) {
        this.animation = t,
        t?.finished.then( () => this.clearAnimation()).catch( () => {}
        )
    }
    clearAnimation() {
        this.animation = this.generator = void 0
    }
}
;
var Be = new WeakMap;
function pe(e) {
    return Be.has(e) || Be.set(e, {
        transforms: [],
        values: new Map
    }),
    Be.get(e)
}
function $r(e, t) {
    return e.has(t) || e.set(t, new Ht),
    e.get(t)
}
var Ii = ["", "X", "Y", "Z"]
  , Ni = ["translate", "scale", "rotate", "skew"]
  , Kt = {
    x: "translateX",
    y: "translateY",
    z: "translateZ"
}
  , Wr = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: e => e + "deg"
}
  , Pi = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: e => e + "px"
    },
    rotate: Wr,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: X
    },
    skew: Wr
}
  , wt = new Map
  , ve = e => `--motion-${e}`
  , me = ["x", "y", "z"];
Ni.forEach(e => {
    Ii.forEach(t => {
        me.push(e + t),
        wt.set(ve(e + t), Pi[e])
    }
    )
}
);
var Di = (e, t) => me.indexOf(e) - me.indexOf(t)
  , Fi = new Set(me)
  , ge = e => Fi.has(e)
  , Vr = (e, t) => {
    Kt[t] && (t = Kt[t]);
    let {transforms: r} = pe(e);
    ze(r, t),
    e.style.transform = Li(r)
}
  , Li = e => e.sort(Di).reduce(Ci, "").trim()
  , Ci = (e, t) => `${e} ${t}(var(${ve(t)}))`;
var Ut = e => e.startsWith("--")
  , Br = new Set;
function Hr(e) {
    if (!Br.has(e)) {
        Br.add(e);
        try {
            let {syntax: t, initialValue: r} = wt.has(e) ? wt.get(e) : {};
            CSS.registerProperty({
                name: e,
                inherits: !1,
                syntax: t,
                initialValue: r
            })
        } catch {}
    }
}
var He = (e, t) => document.createElement("div").animate(e, t)
  , Kr = {
    cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            He({
                opacity: [1]
            })
        } catch {
            return !1
        }
        return !0
    }
    ,
    finished: () => !!He({
        opacity: [0, 1]
    }, {
        duration: .001
    }).finished,
    linearEasing: () => {
        try {
            He({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch {
            return !1
        }
        return !0
    }
}
  , Ke = {}
  , Et = {};
for (let e in Kr)
    Et[e] = () => (Ke[e] === void 0 && (Ke[e] = Kr[e]()),
    Ke[e]);
var Ri = .015
  , Mi = (e, t) => {
    let r = ""
      , n = Math.round(t / Ri);
    for (let i = 0; i < n; i++)
        r += e(ot(0, n - 1, i)) + ", ";
    return r.substring(0, r.length - 2)
}
  , Ue = (e, t) => Z(e) ? Et.linearEasing() ? `linear(${Mi(e, t)})` : H.easing : Vt(e) ? ki(e) : e
  , ki = ([e,t,r,n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`;
function Ur(e, t) {
    for (let r = 0; r < e.length; r++)
        e[r] === null && (e[r] = r ? e[r - 1] : t());
    return e
}
var ye = e => Array.isArray(e) ? e : [e];
function qt(e) {
    return Kt[e] && (e = Kt[e]),
    ge(e) ? ve(e) : e
}
var Gt = {
    get: (e, t) => {
        t = qt(t);
        let r = Ut(t) ? e.style.getPropertyValue(t) : getComputedStyle(e)[t];
        if (!r && r !== 0) {
            let n = wt.get(t);
            n && (r = n.initialValue)
        }
        return r
    }
    ,
    set: (e, t, r) => {
        t = qt(t),
        Ut(t) ? e.style.setProperty(t, r) : e.style[t] = r
    }
};
function be(e, t=!0) {
    if (!(!e || e.playState === "finished"))
        try {
            e.stop ? e.stop() : (t && e.commitStyles(),
            e.cancel())
        } catch {}
}
function qr(e, t) {
    var r;
    let n = t?.toDefaultUnit || X
      , i = e[e.length - 1];
    if (ut(i)) {
        let a = ((r = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || r === void 0 ? void 0 : r[2]) || "";
        a && (n = o => o + a)
    }
    return n
}
function ji() {
    return window.__MOTION_DEV_TOOLS_RECORD
}
function we(e, t, r, n={}, i) {
    let a = ji(), o = n.record !== !1 && a, c, {duration: d=H.duration, delay: u=H.delay, endDelay: y=H.endDelay, repeat: g=H.repeat, easing: v=H.easing, persist: C=!1, direction: I, offset: k, allowWebkitAcceleration: j=!1, autoplay: M=!0} = n, D = pe(e), F = ge(t), z = Et.waapi();
    F && Vr(e, t);
    let B = qt(t)
      , K = $r(D.values, B)
      , Y = wt.get(B);
    return be(K.animation, !(yt(v) && K.generator) && n.record !== !1),
    () => {
        let U = () => {
            var T, O;
            return (O = (T = Gt.get(e, B)) !== null && T !== void 0 ? T : Y?.initialValue) !== null && O !== void 0 ? O : 0
        }
          , L = Ur(ye(r), U)
          , et = qr(L, Y);
        if (yt(v)) {
            let T = v.createAnimation(L, t !== "opacity", U, B, K);
            v = T.easing,
            L = T.keyframes || L,
            d = T.duration || d
        }
        if (Ut(B) && (Et.cssRegisterProperty() ? Hr(B) : z = !1),
        F && !Et.linearEasing() && (Z(v) || lt(v) && v.some(Z)) && (z = !1),
        z) {
            Y && (L = L.map(s => J(s) ? Y.toDefaultUnit(s) : s)),
            L.length === 1 && (!Et.partialKeyframes() || o) && L.unshift(U());
            let T = {
                delay: bt.ms(u),
                duration: bt.ms(d),
                endDelay: bt.ms(y),
                easing: lt(v) ? void 0 : Ue(v, d),
                direction: I,
                iterations: g + 1,
                fill: "both"
            };
            c = e.animate({
                [B]: L,
                offset: k,
                easing: lt(v) ? v.map(s => Ue(s, d)) : void 0
            }, T),
            c.finished || (c.finished = new Promise( (s, f) => {
                c.onfinish = s,
                c.oncancel = f
            }
            ));
            let O = L[L.length - 1];
            c.finished.then( () => {
                C || (Gt.set(e, B, O),
                c.cancel())
            }
            ).catch($t),
            j || (c.playbackRate = 1.000001)
        } else if (i && F)
            L = L.map(T => typeof T == "string" ? parseFloat(T) : T),
            L.length === 1 && L.unshift(parseFloat(U())),
            c = new i(T => {
                Gt.set(e, B, et ? et(T) : T)
            }
            ,L,Object.assign(Object.assign({}, n), {
                duration: d,
                easing: v
            }));
        else {
            let T = L[L.length - 1];
            Gt.set(e, B, Y && J(T) ? Y.toDefaultUnit(T) : T)
        }
        return o && a(e, t, L, {
            duration: d,
            delay: u,
            easing: v,
            repeat: g,
            offset: k
        }, "motion-one"),
        K.setAnimation(c),
        c && !M && c.pause(),
        c
    }
}
var Ee = (e, t) => e[t] ? Object.assign(Object.assign({}, e), e[t]) : Object.assign({}, e);
function xt(e, t) {
    var r;
    return typeof e == "string" ? t ? ((r = t[e]) !== null && r !== void 0 || (t[e] = document.querySelectorAll(e)),
    e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]),
    Array.from(e || [])
}
var zi = e => e()
  , Nt = (e, t, r=H.duration) => new Proxy({
    animations: e.map(zi).filter(Boolean),
    duration: r,
    options: t
},Wi)
  , $i = e => e.animations[0]
  , Wi = {
    get: (e, t) => {
        let r = $i(e);
        switch (t) {
        case "duration":
            return e.duration;
        case "currentTime":
            return bt.s(r?.[t] || 0);
        case "playbackRate":
        case "playState":
            return r?.[t];
        case "finished":
            return e.finished || (e.finished = Promise.all(e.animations.map(Vi)).catch($t)),
            e.finished;
        case "stop":
            return () => {
                e.animations.forEach(n => be(n))
            }
            ;
        case "forEachNative":
            return n => {
                e.animations.forEach(i => n(i, e))
            }
            ;
        default:
            return typeof r?.[t] > "u" ? void 0 : () => e.animations.forEach(n => n[t]())
        }
    }
    ,
    set: (e, t, r) => {
        switch (t) {
        case "currentTime":
            r = bt.ms(r);
        case "playbackRate":
            for (let n = 0; n < e.animations.length; n++)
                e.animations[n][t] = r;
            return !0
        }
        return !1
    }
}
  , Vi = e => e.finished;
function Gr(e=.1, {start: t=0, from: r=0, easing: n}={}) {
    return (i, a) => {
        let o = J(r) ? r : Bi(r, a)
          , c = Math.abs(o - i)
          , d = e * c;
        if (n) {
            let u = a * e;
            d = Lt(n)(d / u) * u
        }
        return t + d
    }
}
function Bi(e, t) {
    if (e === "first")
        return 0;
    {
        let r = t - 1;
        return e === "last" ? r : r / 2
    }
}
function xe(e, t, r) {
    return Z(e) ? e(t, r) : e
}
function Zr(e) {
    return function(r, n, i={}) {
        r = xt(r);
        let a = r.length;
        Bt(!!a, "No valid element provided."),
        Bt(!!n, "No keyframes defined.");
        let o = [];
        for (let c = 0; c < a; c++) {
            let d = r[c];
            for (let u in n) {
                let y = Ee(i, u);
                y.delay = xe(y.delay, c, a);
                let g = we(d, u, n[u], y, e);
                o.push(g)
            }
        }
        return Nt(o, i, i.duration)
    }
}
var qe = Zr(ft);
function Se(e, t) {
    var r = {};
    for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
    return r
}
function Ge(e, t, r, n) {
    var i;
    return J(t) ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? r : (i = n.get(t)) !== null && i !== void 0 ? i : e
}
function Hi(e, t, r) {
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        i.at > t && i.at < r && ($e(e, i),
        n--)
    }
}
function Xr(e, t, r, n, i, a) {
    Hi(e, i, a);
    for (let o = 0; o < t.length; o++)
        e.push({
            value: t[o],
            at: At(i, a, n[o]),
            easing: zt(r, o)
        })
}
function Yr(e, t) {
    return e.at === t.at ? e.value === null ? 1 : -1 : e.at - t.at
}
function Qr(e, t={}) {
    var r;
    let n = Ki(e, t)
      , i = n.map(a => we(...a, ft)).filter(Boolean);
    return Nt(i, t, (r = n[0]) === null || r === void 0 ? void 0 : r[3].duration)
}
function Ki(e, t={}) {
    var {defaultOptions: r={}} = t
      , n = Se(t, ["defaultOptions"]);
    let i = []
      , a = new Map
      , o = {}
      , c = new Map
      , d = 0
      , u = 0
      , y = 0;
    for (let g = 0; g < e.length; g++) {
        let v = e[g];
        if (ut(v)) {
            c.set(v, u);
            continue
        } else if (!Array.isArray(v)) {
            c.set(v.name, Ge(u, v.at, d, c));
            continue
        }
        let[C,I,k={}] = v;
        k.at !== void 0 && (u = Ge(u, k.at, d, c));
        let j = 0
          , M = xt(C, o)
          , D = M.length;
        for (let F = 0; F < D; F++) {
            let z = M[F]
              , B = Ui(z, a);
            for (let K in I) {
                let Y = qi(K, B)
                  , U = ye(I[K])
                  , L = Ee(k, K)
                  , {duration: et=r.duration || H.duration, easing: T=r.easing || H.easing} = L;
                if (yt(T)) {
                    Bt(K === "opacity" || U.length > 1, "spring must be provided 2 keyframes within timeline()");
                    let _ = T.createAnimation(U, K !== "opacity", () => 0, K);
                    T = _.easing,
                    U = _.keyframes || U,
                    et = _.duration || et
                }
                let O = xe(k.delay, F, D) || 0
                  , s = u + O
                  , f = s + et
                  , {offset: m=_t(U.length)} = L;
                m.length === 1 && m[0] === 0 && (m[1] = 1);
                let A = m.length - U.length;
                A > 0 && Ft(m, A),
                U.length === 1 && U.unshift(null),
                Xr(Y, U, T, m, s, f),
                j = Math.max(O + et, j),
                y = Math.max(f, y)
            }
        }
        d = u,
        u += j
    }
    return a.forEach( (g, v) => {
        for (let C in g) {
            let I = g[C];
            I.sort(Yr);
            let k = []
              , j = []
              , M = [];
            for (let D = 0; D < I.length; D++) {
                let {at: F, value: z, easing: B} = I[D];
                k.push(z),
                j.push(ot(0, y, F)),
                M.push(B || H.easing)
            }
            j[0] !== 0 && (j.unshift(0),
            k.unshift(k[0]),
            M.unshift("linear")),
            j[j.length - 1] !== 1 && (j.push(1),
            k.push(null)),
            i.push([v, C, k, Object.assign(Object.assign(Object.assign({}, r), {
                duration: y,
                easing: M,
                offset: j
            }), n)])
        }
    }
    ),
    i
}
function Ui(e, t) {
    return !t.has(e) && t.set(e, {}),
    t.get(e)
}
function qi(e, t) {
    return t[e] || (t[e] = []),
    t[e]
}
var Gi = {
    any: 0,
    all: 1
};
function Jr(e, t, {root: r, margin: n, amount: i="any"}={}) {
    if (typeof IntersectionObserver > "u")
        return () => {}
        ;
    let a = xt(e)
      , o = new WeakMap
      , c = u => {
        u.forEach(y => {
            let g = o.get(y.target);
            if (y.isIntersecting !== !!g)
                if (y.isIntersecting) {
                    let v = t(y);
                    Z(v) ? o.set(y.target, v) : d.unobserve(y.target)
                } else
                    g && (g(y),
                    o.delete(y.target))
        }
        )
    }
      , d = new IntersectionObserver(c,{
        root: r,
        rootMargin: n,
        threshold: typeof i == "number" ? i : Gi[i]
    });
    return a.forEach(u => d.observe(u)),
    () => d.disconnect()
}
var Oe = new WeakMap, St;
function Zi(e, t) {
    if (t) {
        let {inlineSize: r, blockSize: n} = t[0];
        return {
            width: r,
            height: n
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function Xi({target: e, contentRect: t, borderBoxSize: r}) {
    var n;
    (n = Oe.get(e)) === null || n === void 0 || n.forEach(i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return Zi(e, r)
            }
        })
    }
    )
}
function Yi(e) {
    e.forEach(Xi)
}
function Qi() {
    typeof ResizeObserver > "u" || (St = new ResizeObserver(Yi))
}
function tn(e, t) {
    St || Qi();
    let r = xt(e);
    return r.forEach(n => {
        let i = Oe.get(n);
        i || (i = new Set,
        Oe.set(n, i)),
        i.add(t),
        St?.observe(n)
    }
    ),
    () => {
        r.forEach(n => {
            let i = Oe.get(n);
            i?.delete(t),
            i?.size || St?.unobserve(n)
        }
        )
    }
}
var Te = new Set, Zt;
function Ji() {
    Zt = () => {
        let e = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , t = {
            target: window,
            size: e,
            contentSize: e
        };
        Te.forEach(r => r(t))
    }
    ,
    window.addEventListener("resize", Zt)
}
function en(e) {
    return Te.add(e),
    Zt || Ji(),
    () => {
        Te.delete(e),
        !Te.size && Zt && (Zt = void 0)
    }
}
function rn(e, t) {
    return Z(e) ? en(e) : tn(e, t)
}
var to = 50
  , nn = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , an = () => ({
    time: 0,
    x: nn(),
    y: nn()
})
  , eo = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function on(e, t, r, n) {
    let i = r[t]
      , {length: a, position: o} = eo[t]
      , c = i.current
      , d = r.time;
    i.current = e[`scroll${o}`],
    i.scrollLength = e[`scroll${a}`] - e[`client${a}`],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = ot(0, i.scrollLength, i.current);
    let u = n - d;
    i.velocity = u > to ? 0 : We(i.current - c, u)
}
function sn(e, t, r) {
    on(e, "x", t, r),
    on(e, "y", t, r),
    t.time = r
}
function ln(e, t) {
    let r = {
        x: 0,
        y: 0
    }
      , n = e;
    for (; n && n !== t; )
        if (n instanceof HTMLElement)
            r.x += n.offsetLeft,
            r.y += n.offsetTop,
            n = n.offsetParent;
        else if (n instanceof SVGGraphicsElement && "getBBox"in n) {
            let {top: i, left: a} = n.getBBox();
            for (r.x += a,
            r.y += i; n && n.tagName !== "svg"; )
                n = n.parentNode
        }
    return r
}
var Ae = {
    Enter: [[0, 1], [1, 1]],
    Exit: [[0, 0], [1, 0]],
    Any: [[1, 0], [0, 1]],
    All: [[0, 0], [1, 1]]
};
var _e = {
    start: 0,
    center: .5,
    end: 1
};
function Ze(e, t, r=0) {
    let n = 0;
    if (_e[e] !== void 0 && (e = _e[e]),
    ut(e)) {
        let i = parseFloat(e);
        e.endsWith("px") ? n = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? n = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = i / 100 * document.documentElement.clientHeight : e = i
    }
    return J(e) && (n = t * e),
    r + n
}
var ro = [0, 0];
function cn(e, t, r, n) {
    let i = Array.isArray(e) ? e : ro
      , a = 0
      , o = 0;
    return J(e) ? i = [e, e] : ut(e) && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, _e[e] ? e : "0"]),
    a = Ze(i[0], r, n),
    o = Ze(i[1], t),
    a - o
}
var no = {
    x: 0,
    y: 0
};
function un(e, t, r) {
    let {offset: n=Ae.All} = r
      , {target: i=e, axis: a="y"} = r
      , o = a === "y" ? "height" : "width"
      , c = i !== e ? ln(i, e) : no
      , d = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : {
        width: i.clientWidth,
        height: i.clientHeight
    }
      , u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[a].offset.length = 0;
    let y = !t[a].interpolate
      , g = n.length;
    for (let v = 0; v < g; v++) {
        let C = cn(n[v], u[o], d[o], c[a]);
        !y && C !== t[a].interpolatorOffsets[v] && (y = !0),
        t[a].offset[v] = C
    }
    y && (t[a].interpolate = Wt(_t(g), t[a].offset),
    t[a].interpolatorOffsets = [...t[a].offset]),
    t[a].progress = t[a].interpolate(t[a].current)
}
function io(e, t=e, r) {
    if (r.x.targetOffset = 0,
    r.y.targetOffset = 0,
    t !== e) {
        let n = t;
        for (; n && n != e; )
            r.x.targetOffset += n.offsetLeft,
            r.y.targetOffset += n.offsetTop,
            n = n.offsetParent
    }
    r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    r.x.containerLength = e.clientWidth,
    r.y.containerLength = e.clientHeight
}
function fn(e, t, r, n={}) {
    let i = n.axis || "y";
    return {
        measure: () => io(e, n.target, r),
        update: a => {
            sn(e, r, a),
            (n.offset || n.target) && un(e, r, n)
        }
        ,
        notify: Z(t) ? () => t(r) : oo(t, r[i])
    }
}
function oo(e, t) {
    return e.pause(),
    e.forEachNative( (r, {easing: n}) => {
        var i, a;
        if (r.updateDuration)
            n || (r.easing = X),
            r.updateDuration(1);
        else {
            let o = {
                duration: 1e3
            };
            n || (o.easing = "linear"),
            (a = (i = r.effect) === null || i === void 0 ? void 0 : i.updateTiming) === null || a === void 0 || a.call(i, o)
        }
    }
    ),
    () => {
        e.currentTime = t.progress
    }
}
var Xt = new WeakMap
  , dn = new WeakMap
  , Xe = new WeakMap
  , hn = e => e === document.documentElement ? window : e;
function pn(e, t={}) {
    var {container: r=document.documentElement} = t
      , n = Se(t, ["container"]);
    let i = Xe.get(r);
    i || (i = new Set,
    Xe.set(r, i));
    let a = an()
      , o = fn(r, e, a, n);
    if (i.add(o),
    !Xt.has(r)) {
        let u = () => {
            let g = performance.now();
            for (let v of i)
                v.measure();
            for (let v of i)
                v.update(g);
            for (let v of i)
                v.notify()
        }
        ;
        Xt.set(r, u);
        let y = hn(r);
        window.addEventListener("resize", u, {
            passive: !0
        }),
        r !== document.documentElement && dn.set(r, rn(r, u)),
        y.addEventListener("scroll", u, {
            passive: !0
        })
    }
    let c = Xt.get(r)
      , d = requestAnimationFrame(c);
    return () => {
        var u;
        typeof e != "function" && e.stop(),
        cancelAnimationFrame(d);
        let y = Xe.get(r);
        if (!y || (y.delete(o),
        y.size))
            return;
        let g = Xt.get(r);
        Xt.delete(r),
        g && (hn(r).removeEventListener("scroll", g),
        (u = dn.get(r)) === null || u === void 0 || u(),
        window.removeEventListener("resize", g))
    }
}
function ao(e, t={}) {
    return Nt([ () => {
        let r = new ft(e,[0, 1],t);
        return r.finished.catch( () => {}
        ),
        r
    }
    ], t, t.duration)
}
function mn(e, t, r) {
    return (Z(e) ? ao : qe)(e, t, r)
}
function dt(e) {
    this.listenerMap = [{}, {}],
    e && this.root(e),
    this.handle = dt.prototype.handle.bind(this),
    this._removedListeners = []
}
dt.prototype.root = function(e) {
    let t = this.listenerMap, r;
    if (this.rootElement) {
        for (r in t[1])
            t[1].hasOwnProperty(r) && this.rootElement.removeEventListener(r, this.handle, !0);
        for (r in t[0])
            t[0].hasOwnProperty(r) && this.rootElement.removeEventListener(r, this.handle, !1)
    }
    if (!e || !e.addEventListener)
        return this.rootElement && delete this.rootElement,
        this;
    this.rootElement = e;
    for (r in t[1])
        t[1].hasOwnProperty(r) && this.rootElement.addEventListener(r, this.handle, !0);
    for (r in t[0])
        t[0].hasOwnProperty(r) && this.rootElement.addEventListener(r, this.handle, !1);
    return this
}
;
dt.prototype.captureForType = function(e) {
    return ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(e) !== -1
}
;
dt.prototype.on = function(e, t, r, n) {
    let i, a, o, c;
    if (!e)
        throw new TypeError("Invalid event type: " + e);
    if (typeof t == "function" && (n = r,
    r = t,
    t = null),
    n === void 0 && (n = this.captureForType(e)),
    typeof r != "function")
        throw new TypeError("Handler must be a type of Function");
    return i = this.rootElement,
    a = this.listenerMap[n ? 1 : 0],
    a[e] || (i && i.addEventListener(e, this.handle, n),
    a[e] = []),
    t ? /^[a-z]+$/i.test(t) ? (c = t,
    o = so) : /^#[a-z0-9\-_]+$/i.test(t) ? (c = t.slice(1),
    o = co) : (c = t,
    o = Element.prototype.matches) : (c = null,
    o = lo.bind(this)),
    a[e].push({
        selector: t,
        handler: r,
        matcher: o,
        matcherParam: c
    }),
    this
}
;
dt.prototype.off = function(e, t, r, n) {
    let i, a, o, c, d;
    if (typeof t == "function" && (n = r,
    r = t,
    t = null),
    n === void 0)
        return this.off(e, t, r, !0),
        this.off(e, t, r, !1),
        this;
    if (o = this.listenerMap[n ? 1 : 0],
    !e) {
        for (d in o)
            o.hasOwnProperty(d) && this.off(d, t, r);
        return this
    }
    if (c = o[e],
    !c || !c.length)
        return this;
    for (i = c.length - 1; i >= 0; i--)
        a = c[i],
        (!t || t === a.selector) && (!r || r === a.handler) && (this._removedListeners.push(a),
        c.splice(i, 1));
    return c.length || (delete o[e],
    this.rootElement && this.rootElement.removeEventListener(e, this.handle, n)),
    this
}
;
dt.prototype.handle = function(e) {
    let t, r, n = e.type, i, a, o, c, d = [], u, y = "ftLabsDelegateIgnore";
    if (e[y] === !0)
        return;
    switch (u = e.target,
    u.nodeType === 3 && (u = u.parentNode),
    u.correspondingUseElement && (u = u.correspondingUseElement),
    i = this.rootElement,
    a = e.eventPhase || (e.target !== e.currentTarget ? 3 : 2),
    a) {
    case 1:
        d = this.listenerMap[1][n];
        break;
    case 2:
        this.listenerMap[0] && this.listenerMap[0][n] && (d = d.concat(this.listenerMap[0][n])),
        this.listenerMap[1] && this.listenerMap[1][n] && (d = d.concat(this.listenerMap[1][n]));
        break;
    case 3:
        d = this.listenerMap[0][n];
        break
    }
    let g = [];
    for (r = d.length; u && r; ) {
        for (t = 0; t < r && (o = d[t],
        !!o); t++)
            u.tagName && ["button", "input", "select", "textarea"].indexOf(u.tagName.toLowerCase()) > -1 && u.hasAttribute("disabled") ? g = [] : o.matcher.call(u, o.matcherParam, u) && g.push([e, u, o]);
        if (u === i || (r = d.length,
        u = u.parentElement || u.parentNode,
        u instanceof HTMLDocument))
            break
    }
    let v;
    for (t = 0; t < g.length; t++)
        if (!(this._removedListeners.indexOf(g[t][2]) > -1) && (c = this.fire.apply(this, g[t]),
        c === !1)) {
            g[t][0][y] = !0,
            g[t][0].preventDefault(),
            v = !1;
            break
        }
    return v
}
;
dt.prototype.fire = function(e, t, r) {
    return r.handler.call(t, e, t)
}
;
function so(e, t) {
    return e.toLowerCase() === t.tagName.toLowerCase()
}
function lo(e, t) {
    return this.rootElement === window ? t === document || t === document.documentElement || t === window : this.rootElement === t
}
function co(e, t) {
    return e === t.id
}
dt.prototype.destroy = function() {
    this.off(),
    this.root()
}
;
var uo = dt;
function Yt(e, t, r) {
    let n = document.createElement(t);
    return e && (n.className = e),
    r && r.appendChild(n),
    n
}
function fo(e, t, r) {
    let n = `translate3d(${e}px,${t || 0}px,0)`;
    return r !== void 0 && (n += ` scale3d(${r},${r},1)`),
    n
}
function Ye(e, t, r) {
    e.style.width = typeof t == "number" ? `${t}px` : t,
    e.style.height = typeof r == "number" ? `${r}px` : r
}
var it = {
    IDLE: "idle",
    LOADING: "loading",
    LOADED: "loaded",
    ERROR: "error"
};
function ho(e) {
    return "button"in e && e.button === 1 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey
}
function Qt(e, t, r=document) {
    let n = [];
    if (e instanceof Element)
        n = [e];
    else if (e instanceof NodeList || Array.isArray(e))
        n = Array.from(e);
    else {
        let i = typeof e == "string" ? e : t;
        i && (n = Array.from(r.querySelectorAll(i)))
    }
    return n
}
function po(e) {
    return typeof e == "function" && e.prototype && e.prototype.goTo
}
function vn() {
    return !!(navigator.vendor && navigator.vendor.match(/apple/i))
}
var Qe = class {
    constructor(t, r) {
        this.type = t,
        this.defaultPrevented = !1,
        r && Object.assign(this, r)
    }
    preventDefault() {
        this.defaultPrevented = !0
    }
}
  , Je = class {
    constructor() {
        this._listeners = {},
        this._filters = {},
        this.pswp = void 0,
        this.options = void 0
    }
    addFilter(t, r, n=100) {
        var i, a, o;
        this._filters[t] || (this._filters[t] = []),
        (i = this._filters[t]) === null || i === void 0 || i.push({
            fn: r,
            priority: n
        }),
        (a = this._filters[t]) === null || a === void 0 || a.sort( (c, d) => c.priority - d.priority),
        (o = this.pswp) === null || o === void 0 || o.addFilter(t, r, n)
    }
    removeFilter(t, r) {
        this._filters[t] && (this._filters[t] = this._filters[t].filter(n => n.fn !== r)),
        this.pswp && this.pswp.removeFilter(t, r)
    }
    applyFilters(t, ...r) {
        var n;
        return (n = this._filters[t]) === null || n === void 0 || n.forEach(i => {
            r[0] = i.fn.apply(this, r)
        }
        ),
        r[0]
    }
    on(t, r) {
        var n, i;
        this._listeners[t] || (this._listeners[t] = []),
        (n = this._listeners[t]) === null || n === void 0 || n.push(r),
        (i = this.pswp) === null || i === void 0 || i.on(t, r)
    }
    off(t, r) {
        var n;
        this._listeners[t] && (this._listeners[t] = this._listeners[t].filter(i => r !== i)),
        (n = this.pswp) === null || n === void 0 || n.off(t, r)
    }
    dispatch(t, r) {
        var n;
        if (this.pswp)
            return this.pswp.dispatch(t, r);
        let i = new Qe(t,r);
        return (n = this._listeners[t]) === null || n === void 0 || n.forEach(a => {
            a.call(this, i)
        }
        ),
        i
    }
}
  , tr = class {
    constructor(t, r) {
        if (this.element = Yt("pswp__img pswp__img--placeholder", t ? "img" : "div", r),
        t) {
            let n = this.element;
            n.decoding = "async",
            n.alt = "",
            n.src = t,
            n.setAttribute("role", "presentation")
        }
        this.element.setAttribute("aria-hidden", "true")
    }
    setDisplayedSize(t, r) {
        this.element && (this.element.tagName === "IMG" ? (Ye(this.element, 250, "auto"),
        this.element.style.transformOrigin = "0 0",
        this.element.style.transform = fo(0, 0, t / 250)) : Ye(this.element, t, r))
    }
    destroy() {
        var t;
        (t = this.element) !== null && t !== void 0 && t.parentNode && this.element.remove(),
        this.element = null
    }
}
  , er = class {
    constructor(t, r, n) {
        this.instance = r,
        this.data = t,
        this.index = n,
        this.element = void 0,
        this.placeholder = void 0,
        this.slide = void 0,
        this.displayedImageWidth = 0,
        this.displayedImageHeight = 0,
        this.width = Number(this.data.w) || Number(this.data.width) || 0,
        this.height = Number(this.data.h) || Number(this.data.height) || 0,
        this.isAttached = !1,
        this.hasSlide = !1,
        this.isDecoding = !1,
        this.state = it.IDLE,
        this.data.type ? this.type = this.data.type : this.data.src ? this.type = "image" : this.type = "html",
        this.instance.dispatch("contentInit", {
            content: this
        })
    }
    removePlaceholder() {
        this.placeholder && !this.keepPlaceholder() && setTimeout( () => {
            this.placeholder && (this.placeholder.destroy(),
            this.placeholder = void 0)
        }
        , 1e3)
    }
    load(t, r) {
        if (this.slide && this.usePlaceholder())
            if (this.placeholder) {
                let n = this.placeholder.element;
                n && !n.parentElement && this.slide.container.prepend(n)
            } else {
                let n = this.instance.applyFilters("placeholderSrc", this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : !1, this);
                this.placeholder = new tr(n,this.slide.container)
            }
        this.element && !r || this.instance.dispatch("contentLoad", {
            content: this,
            isLazy: t
        }).defaultPrevented || (this.isImageContent() ? (this.element = Yt("pswp__img", "img"),
        this.displayedImageWidth && this.loadImage(t)) : (this.element = Yt("pswp__content", "div"),
        this.element.innerHTML = this.data.html || ""),
        r && this.slide && this.slide.updateContentSize(!0))
    }
    loadImage(t) {
        var r, n;
        if (!this.isImageContent() || !this.element || this.instance.dispatch("contentLoadImage", {
            content: this,
            isLazy: t
        }).defaultPrevented)
            return;
        let i = this.element;
        this.updateSrcsetSizes(),
        this.data.srcset && (i.srcset = this.data.srcset),
        i.src = (r = this.data.src) !== null && r !== void 0 ? r : "",
        i.alt = (n = this.data.alt) !== null && n !== void 0 ? n : "",
        this.state = it.LOADING,
        i.complete ? this.onLoaded() : (i.onload = () => {
            this.onLoaded()
        }
        ,
        i.onerror = () => {
            this.onError()
        }
        )
    }
    setSlide(t) {
        this.slide = t,
        this.hasSlide = !0,
        this.instance = t.pswp
    }
    onLoaded() {
        this.state = it.LOADED,
        this.slide && this.element && (this.instance.dispatch("loadComplete", {
            slide: this.slide,
            content: this
        }),
        this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode && (this.append(),
        this.slide.updateContentSize(!0)),
        (this.state === it.LOADED || this.state === it.ERROR) && this.removePlaceholder())
    }
    onError() {
        this.state = it.ERROR,
        this.slide && (this.displayError(),
        this.instance.dispatch("loadComplete", {
            slide: this.slide,
            isError: !0,
            content: this
        }),
        this.instance.dispatch("loadError", {
            slide: this.slide,
            content: this
        }))
    }
    isLoading() {
        return this.instance.applyFilters("isContentLoading", this.state === it.LOADING, this)
    }
    isError() {
        return this.state === it.ERROR
    }
    isImageContent() {
        return this.type === "image"
    }
    setDisplayedSize(t, r) {
        if (this.element && (this.placeholder && this.placeholder.setDisplayedSize(t, r),
        !this.instance.dispatch("contentResize", {
            content: this,
            width: t,
            height: r
        }).defaultPrevented && (Ye(this.element, t, r),
        this.isImageContent() && !this.isError()))) {
            let n = !this.displayedImageWidth && t;
            this.displayedImageWidth = t,
            this.displayedImageHeight = r,
            n ? this.loadImage(!1) : this.updateSrcsetSizes(),
            this.slide && this.instance.dispatch("imageSizeChange", {
                slide: this.slide,
                width: t,
                height: r,
                content: this
            })
        }
    }
    isZoomable() {
        return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== it.ERROR, this)
    }
    updateSrcsetSizes() {
        if (!this.isImageContent() || !this.element || !this.data.srcset)
            return;
        let t = this.element
          , r = this.instance.applyFilters("srcsetSizesWidth", this.displayedImageWidth, this);
        (!t.dataset.largestUsedSize || r > parseInt(t.dataset.largestUsedSize, 10)) && (t.sizes = r + "px",
        t.dataset.largestUsedSize = String(r))
    }
    usePlaceholder() {
        return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this)
    }
    lazyLoad() {
        this.instance.dispatch("contentLazyLoad", {
            content: this
        }).defaultPrevented || this.load(!0)
    }
    keepPlaceholder() {
        return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this)
    }
    destroy() {
        this.hasSlide = !1,
        this.slide = void 0,
        !this.instance.dispatch("contentDestroy", {
            content: this
        }).defaultPrevented && (this.remove(),
        this.placeholder && (this.placeholder.destroy(),
        this.placeholder = void 0),
        this.isImageContent() && this.element && (this.element.onload = null,
        this.element.onerror = null,
        this.element = void 0))
    }
    displayError() {
        if (this.slide) {
            var t, r;
            let n = Yt("pswp__error-msg", "div");
            n.innerText = (t = (r = this.instance.options) === null || r === void 0 ? void 0 : r.errorMsg) !== null && t !== void 0 ? t : "",
            n = this.instance.applyFilters("contentErrorElement", n, this),
            this.element = Yt("pswp__content pswp__error-msg-container", "div"),
            this.element.appendChild(n),
            this.slide.container.innerText = "",
            this.slide.container.appendChild(this.element),
            this.slide.updateContentSize(!0),
            this.removePlaceholder()
        }
    }
    append() {
        if (this.isAttached || !this.element)
            return;
        if (this.isAttached = !0,
        this.state === it.ERROR) {
            this.displayError();
            return
        }
        if (this.instance.dispatch("contentAppend", {
            content: this
        }).defaultPrevented)
            return;
        let t = "decode"in this.element;
        this.isImageContent() ? t && this.slide && (!this.slide.isActive || vn()) ? (this.isDecoding = !0,
        this.element.decode().catch( () => {}
        ).finally( () => {
            this.isDecoding = !1,
            this.appendImage()
        }
        )) : this.appendImage() : this.slide && !this.element.parentNode && this.slide.container.appendChild(this.element)
    }
    activate() {
        this.instance.dispatch("contentActivate", {
            content: this
        }).defaultPrevented || !this.slide || (this.isImageContent() && this.isDecoding && !vn() ? this.appendImage() : this.isError() && this.load(!1, !0),
        this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "false"))
    }
    deactivate() {
        this.instance.dispatch("contentDeactivate", {
            content: this
        }),
        this.slide && this.slide.holderElement && this.slide.holderElement.setAttribute("aria-hidden", "true")
    }
    remove() {
        this.isAttached = !1,
        !this.instance.dispatch("contentRemove", {
            content: this
        }).defaultPrevented && (this.element && this.element.parentNode && this.element.remove(),
        this.placeholder && this.placeholder.element && this.placeholder.element.remove())
    }
    appendImage() {
        this.isAttached && (this.instance.dispatch("contentAppendImage", {
            content: this
        }).defaultPrevented || (this.slide && this.element && !this.element.parentNode && this.slide.container.appendChild(this.element),
        (this.state === it.LOADED || this.state === it.ERROR) && this.removePlaceholder()))
    }
}
;
function mo(e, t) {
    if (e.getViewportSizeFn) {
        let r = e.getViewportSizeFn(e, t);
        if (r)
            return r
    }
    return {
        x: document.documentElement.clientWidth,
        y: window.innerHeight
    }
}
function Ie(e, t, r, n, i) {
    let a = 0;
    if (t.paddingFn)
        a = t.paddingFn(r, n, i)[e];
    else if (t.padding)
        a = t.padding[e];
    else {
        let o = "padding" + e[0].toUpperCase() + e.slice(1);
        t[o] && (a = t[o])
    }
    return Number(a) || 0
}
function vo(e, t, r, n) {
    return {
        x: t.x - Ie("left", e, t, r, n) - Ie("right", e, t, r, n),
        y: t.y - Ie("top", e, t, r, n) - Ie("bottom", e, t, r, n)
    }
}
var gn = 4e3
  , rr = class {
    constructor(t, r, n, i) {
        this.pswp = i,
        this.options = t,
        this.itemData = r,
        this.index = n,
        this.panAreaSize = null,
        this.elementSize = null,
        this.fit = 1,
        this.fill = 1,
        this.vFill = 1,
        this.initial = 1,
        this.secondary = 1,
        this.max = 1,
        this.min = 1
    }
    update(t, r, n) {
        let i = {
            x: t,
            y: r
        };
        this.elementSize = i,
        this.panAreaSize = n;
        let a = n.x / i.x
          , o = n.y / i.y;
        this.fit = Math.min(1, a < o ? a : o),
        this.fill = Math.min(1, a > o ? a : o),
        this.vFill = Math.min(1, o),
        this.initial = this._getInitial(),
        this.secondary = this._getSecondary(),
        this.max = Math.max(this.initial, this.secondary, this._getMax()),
        this.min = Math.min(this.fit, this.initial, this.secondary),
        this.pswp && this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData
        })
    }
    _parseZoomLevelOption(t) {
        let r = t + "ZoomLevel"
          , n = this.options[r];
        if (n)
            return typeof n == "function" ? n(this) : n === "fill" ? this.fill : n === "fit" ? this.fit : Number(n)
    }
    _getSecondary() {
        let t = this._parseZoomLevelOption("secondary");
        return t || (t = Math.min(1, this.fit * 3),
        this.elementSize && t * this.elementSize.x > gn && (t = gn / this.elementSize.x),
        t)
    }
    _getInitial() {
        return this._parseZoomLevelOption("initial") || this.fit
    }
    _getMax() {
        return this._parseZoomLevelOption("max") || Math.max(1, this.fit * 4)
    }
}
;
function yn(e, t, r) {
    let n = t.createContentFromData(e, r), i, {options: a} = t;
    if (a) {
        i = new rr(a,e,-1);
        let o;
        t.pswp ? o = t.pswp.viewportSize : o = mo(a, t);
        let c = vo(a, o, e, r);
        i.update(n.width, n.height, c)
    }
    return n.lazyLoad(),
    i && n.setDisplayedSize(Math.ceil(n.width * i.initial), Math.ceil(n.height * i.initial)),
    n
}
function go(e, t) {
    let r = t.getItemData(e);
    if (!t.dispatch("lazyLoadSlide", {
        index: e,
        itemData: r
    }).defaultPrevented)
        return yn(r, t, e)
}
var nr = class extends Je {
    getNumItems() {
        var t;
        let r = 0
          , n = (t = this.options) === null || t === void 0 ? void 0 : t.dataSource;
        n && "length"in n ? r = n.length : n && "gallery"in n && (n.items || (n.items = this._getGalleryDOMElements(n.gallery)),
        n.items && (r = n.items.length));
        let i = this.dispatch("numItems", {
            dataSource: n,
            numItems: r
        });
        return this.applyFilters("numItems", i.numItems, n)
    }
    createContentFromData(t, r) {
        return new er(t,this,r)
    }
    getItemData(t) {
        var r;
        let n = (r = this.options) === null || r === void 0 ? void 0 : r.dataSource
          , i = {};
        Array.isArray(n) ? i = n[t] : n && "gallery"in n && (n.items || (n.items = this._getGalleryDOMElements(n.gallery)),
        i = n.items[t]);
        let a = i;
        a instanceof Element && (a = this._domElementToItemData(a));
        let o = this.dispatch("itemData", {
            itemData: a || {},
            index: t
        });
        return this.applyFilters("itemData", o.itemData, t)
    }
    _getGalleryDOMElements(t) {
        var r, n;
        return (r = this.options) !== null && r !== void 0 && r.children || (n = this.options) !== null && n !== void 0 && n.childSelector ? Qt(this.options.children, this.options.childSelector, t) || [] : [t]
    }
    _domElementToItemData(t) {
        let r = {
            element: t
        }
          , n = t.tagName === "A" ? t : t.querySelector("a");
        if (n) {
            r.src = n.dataset.pswpSrc || n.href,
            n.dataset.pswpSrcset && (r.srcset = n.dataset.pswpSrcset),
            r.width = n.dataset.pswpWidth ? parseInt(n.dataset.pswpWidth, 10) : 0,
            r.height = n.dataset.pswpHeight ? parseInt(n.dataset.pswpHeight, 10) : 0,
            r.w = r.width,
            r.h = r.height,
            n.dataset.pswpType && (r.type = n.dataset.pswpType);
            let a = t.querySelector("img");
            if (a) {
                var i;
                r.msrc = a.currentSrc || a.src,
                r.alt = (i = a.getAttribute("alt")) !== null && i !== void 0 ? i : ""
            }
            (n.dataset.pswpCropped || n.dataset.cropped) && (r.thumbCropped = !0)
        }
        return this.applyFilters("domItemData", r, t, n)
    }
    lazyLoadData(t, r) {
        return yn(t, this, r)
    }
}
  , ir = class extends nr {
    constructor(t) {
        super(),
        this.options = t || {},
        this._uid = 0,
        this.shouldOpen = !1,
        this._preloadedContent = void 0,
        this.onThumbnailsClick = this.onThumbnailsClick.bind(this)
    }
    init() {
        Qt(this.options.gallery, this.options.gallerySelector).forEach(t => {
            t.addEventListener("click", this.onThumbnailsClick, !1)
        }
        )
    }
    onThumbnailsClick(t) {
        if (ho(t) || window.pswp)
            return;
        let r = {
            x: t.clientX,
            y: t.clientY
        };
        !r.x && !r.y && (r = null);
        let n = this.getClickedIndex(t);
        n = this.applyFilters("clickedIndex", n, t, this);
        let i = {
            gallery: t.currentTarget
        };
        n >= 0 && (t.preventDefault(),
        this.loadAndOpen(n, i, r))
    }
    getClickedIndex(t) {
        if (this.options.getClickedIndexFn)
            return this.options.getClickedIndexFn.call(this, t);
        let r = t.target
          , i = Qt(this.options.children, this.options.childSelector, t.currentTarget).findIndex(a => a === r || a.contains(r));
        return i !== -1 ? i : this.options.children || this.options.childSelector ? -1 : 0
    }
    loadAndOpen(t, r, n) {
        if (window.pswp || !this.options)
            return !1;
        if (!r && this.options.gallery && this.options.children) {
            let i = Qt(this.options.gallery);
            i[0] && (r = {
                gallery: i[0]
            })
        }
        return this.options.index = t,
        this.options.initialPointerPos = n,
        this.shouldOpen = !0,
        this.preload(t, r),
        !0
    }
    preload(t, r) {
        let {options: n} = this;
        r && (n.dataSource = r);
        let i = []
          , a = typeof n.pswpModule;
        if (po(n.pswpModule))
            i.push(Promise.resolve(n.pswpModule));
        else {
            if (a === "string")
                throw new Error("pswpModule as string is no longer supported");
            if (a === "function")
                i.push(n.pswpModule());
            else
                throw new Error("pswpModule is not valid")
        }
        typeof n.openPromise == "function" && i.push(n.openPromise()),
        n.preloadFirstSlide !== !1 && t >= 0 && (this._preloadedContent = go(t, this));
        let o = ++this._uid;
        Promise.all(i).then(c => {
            if (this.shouldOpen) {
                let d = c[0];
                this._openPhotoswipe(d, o)
            }
        }
        )
    }
    _openPhotoswipe(t, r) {
        if (r !== this._uid && this.shouldOpen || (this.shouldOpen = !1,
        window.pswp))
            return;
        let n = typeof t == "object" ? new t.default(this.options) : new t(this.options);
        this.pswp = n,
        window.pswp = n,
        Object.keys(this._listeners).forEach(i => {
            var a;
            (a = this._listeners[i]) === null || a === void 0 || a.forEach(o => {
                n.on(i, o)
            }
            )
        }
        ),
        Object.keys(this._filters).forEach(i => {
            var a;
            (a = this._filters[i]) === null || a === void 0 || a.forEach(o => {
                n.addFilter(i, o.fn, o.priority)
            }
            )
        }
        ),
        this._preloadedContent && (n.contentLoader.addToCache(this._preloadedContent),
        this._preloadedContent = void 0),
        n.on("destroy", () => {
            this.pswp = void 0,
            delete window.pswp
        }
        ),
        n.init()
    }
    destroy() {
        var t;
        (t = this.pswp) === null || t === void 0 || t.destroy(),
        this.shouldOpen = !1,
        this._listeners = {},
        Qt(this.options.gallery, this.options.gallerySelector).forEach(r => {
            r.removeEventListener("click", this.onThumbnailsClick, !1)
        }
        )
    }
}
;
(function() {
    Node.prototype.replaceChildren === void 0 && (Node.prototype.replaceChildren = e => {
        for (; this.lastChild; )
            this.removeChild(this.lastChild);
        e !== void 0 && this.append(e)
    }
    )
}
)();
(function() {
    let e = !1;
    if (document.createElement("i").addEventListener("click", () => {}
    , {
        get signal() {
            e = !0
        }
    }),
    e || !window.AbortController)
        return;
    let t = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(r, n, i) {
        if (i && i.signal) {
            if (i.signal.aborted)
                return;
            i.signal.addEventListener("abort", () => this.removeEventListener(r, n, {
                ...i
            }))
        }
        return t.call(this, r, n, i)
    }
}
)();
export {Jl as CustomElementsPolyfill, uo as Delegate, Mr as FocusTrap, ir as PhotoSwipeLightbox, Ae as ScrollOffset, mn as animate, Jr as inView, pn as scroll, Gr as stagger, Qr as timeline};
/*! Bundled license information:

@ungap/custom-elements/index.js:
  (*! (c) Andrea Giammarchi @webreflection ISC *)
  (*! (c) Andrea Giammarchi - ISC *)

instant.page/instantpage.js:
  (*! instant.page v5.2.0 - (C) 2019-2023 Alexandre Dieulot - https://instant.page/license *)

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)

focus-trap/dist/focus-trap.esm.js:
  (*!
  * focus-trap 7.6.1
  * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
  *)

photoswipe/dist/photoswipe-lightbox.esm.js:
  (*!
    * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
    * (c) 2024 Dmytro Semenov
    *)
*/
