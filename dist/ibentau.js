function et() {
}
function $t(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function zt(e) {
  return e();
}
function St() {
  return /* @__PURE__ */ Object.create(null);
}
function U(e) {
  e.forEach(zt);
}
function xt(e) {
  return typeof e == "function";
}
function bt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let ft;
function Lt(e, t) {
  return ft || (ft = document.createElement("a")), ft.href = t, e === ft.href;
}
function te(e) {
  return Object.keys(e).length === 0;
}
function Vt(e, t, n, l) {
  if (e) {
    const i = Pt(e, t, n, l);
    return e[0](i);
  }
}
function Pt(e, t, n, l) {
  return e[1] && l ? $t(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function Wt(e, t, n, l) {
  if (e[2] && l) {
    const i = e[2](l(n));
    if (t.dirty === void 0)
      return i;
    if (typeof i == "object") {
      const s = [], o = Math.max(t.dirty.length, i.length);
      for (let c = 0; c < o; c += 1)
        s[c] = t.dirty[c] | i[c];
      return s;
    }
    return t.dirty | i;
  }
  return t.dirty;
}
function Dt(e, t, n, l, i, s) {
  if (i) {
    const o = Pt(t, n, l, s);
    e.p(o, i);
  }
}
function Zt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function p(e, t) {
  e.appendChild(t);
}
function N(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Qt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function lt(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function P(e) {
  return document.createTextNode(e);
}
function V() {
  return P(" ");
}
function Rt() {
  return P("");
}
function K(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function ee(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function kt(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : b(e, t, n);
}
function ne(e) {
  return Array.from(e.childNodes);
}
function it(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Tt(e, t) {
  e.value = t == null ? "" : t;
}
function F(e, t, n, l) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let ht;
function le() {
  if (ht === void 0) {
    ht = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      ht = !0;
    }
  }
  return ht;
}
function oe(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = v("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const i = le();
  let s;
  return i ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = K(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    s = K(l.contentWindow, "resize", t), t();
  }), p(e, l), () => {
    (i || s && l.contentWindow) && s(), M(l);
  };
}
function It(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let st;
function ot(e) {
  st = e;
}
function ie() {
  if (!st)
    throw new Error("Function called outside component initialization");
  return st;
}
function Yt(e) {
  ie().$$.on_mount.push(e);
}
const $ = [], rt = [];
let nt = [];
const Ct = [], Gt = /* @__PURE__ */ Promise.resolve();
let Mt = !1;
function Kt() {
  Mt || (Mt = !0, Gt.then(Ut));
}
function tt() {
  return Kt(), Gt;
}
function dt(e) {
  nt.push(e);
}
function se(e) {
  Ct.push(e);
}
const yt = /* @__PURE__ */ new Set();
let X = 0;
function Ut() {
  if (X !== 0)
    return;
  const e = st;
  do {
    try {
      for (; X < $.length; ) {
        const t = $[X];
        X++, ot(t), re(t.$$);
      }
    } catch (t) {
      throw $.length = 0, X = 0, t;
    }
    for (ot(null), $.length = 0, X = 0; rt.length; )
      rt.pop()();
    for (let t = 0; t < nt.length; t += 1) {
      const n = nt[t];
      yt.has(n) || (yt.add(n), n());
    }
    nt.length = 0;
  } while ($.length);
  for (; Ct.length; )
    Ct.pop()();
  Mt = !1, yt.clear(), ot(e);
}
function re(e) {
  if (e.fragment !== null) {
    e.update(), U(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(dt);
  }
}
function ce(e) {
  const t = [], n = [];
  nt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), nt = t;
}
const _t = /* @__PURE__ */ new Set();
let G;
function mt() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function gt() {
  G.r || U(G.c), G = G.p;
}
function I(e, t) {
  e && e.i && (_t.delete(e), e.i(t));
}
function B(e, t, n, l) {
  if (e && e.o) {
    if (_t.has(e))
      return;
    _t.add(e), G.c.push(() => {
      _t.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function ae(e, t) {
  B(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function ue(e, t, n, l, i, s, o, c, r, a, f, h) {
  let u = e.length, _ = s.length, y = u;
  const z = {};
  for (; y--; )
    z[e[y].key] = y;
  const A = [], m = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), S = [];
  for (y = _; y--; ) {
    const w = h(i, s, y), C = n(w);
    let H = o.get(C);
    H ? l && S.push(() => H.p(w, t)) : (H = a(C, w), H.c()), m.set(C, A[y] = H), C in z && L.set(C, Math.abs(y - z[C]));
  }
  const x = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
  function Z(w) {
    I(w, 1), w.m(c, f), o.set(w.key, w), f = w.first, _--;
  }
  for (; u && _; ) {
    const w = A[_ - 1], C = e[u - 1], H = w.key, d = C.key;
    w === C ? (f = w.first, u--, _--) : m.has(d) ? !o.has(H) || x.has(H) ? Z(w) : W.has(d) ? u-- : L.get(H) > L.get(d) ? (W.add(H), Z(w)) : (x.add(d), u--) : (r(C, o), u--);
  }
  for (; u--; ) {
    const w = e[u];
    m.has(w.key) || r(w, o);
  }
  for (; _; )
    Z(A[_ - 1]);
  return U(S), A;
}
function fe(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function pt(e) {
  e && e.c();
}
function ct(e, t, n, l) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), l || dt(() => {
    const o = e.$$.on_mount.map(zt).filter(xt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : U(o), e.$$.on_mount = [];
  }), s.forEach(dt);
}
function at(e, t) {
  const n = e.$$;
  n.fragment !== null && (ce(n.after_update), U(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function he(e, t) {
  e.$$.dirty[0] === -1 && ($.push(e), Kt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function wt(e, t, n, l, i, s, o, c = [-1]) {
  const r = st;
  ot(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: et,
    not_equal: i,
    bound: St(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (r ? r.$$.context : [])),
    callbacks: St(),
    dirty: c,
    skip_bound: !1,
    root: t.target || r.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = n ? n(e, t.props || {}, (h, u, ..._) => {
    const y = _.length ? _[0] : u;
    return a.ctx && i(a.ctx[h], a.ctx[h] = y) && (!a.skip_bound && a.bound[h] && a.bound[h](y), f && he(e, h)), u;
  }) : [], a.update(), f = !0, U(a.before_update), a.fragment = l ? l(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = ne(t.target);
      a.fragment && a.fragment.l(h), h.forEach(M);
    } else
      a.fragment && a.fragment.c();
    t.intro && I(e.$$.fragment), ct(e, t.target, t.anchor, t.customElement), Ut();
  }
  ot(r);
}
class vt {
  $destroy() {
    at(this, 1), this.$destroy = et;
  }
  $on(t, n) {
    if (!xt(n))
      return et;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !te(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function At(e, t, n) {
  const l = e.slice();
  return l[23] = t[n], l;
}
const _e = (e) => ({ item: e & 16 }), Ht = (e) => ({ item: e[23].data });
function de(e) {
  let t;
  return {
    c() {
      t = P("Missing template");
    },
    m(n, l) {
      N(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Et(e, t) {
  let n, l, i;
  const s = t[15].default, o = Vt(s, t, t[14], Ht), c = o || de();
  return {
    key: e,
    first: null,
    c() {
      n = v("svelte-virtual-list-row"), c && c.c(), l = V(), kt(n, "class", "svelte-1tqh76q"), this.first = n;
    },
    m(r, a) {
      N(r, n, a), c && c.m(n, null), p(n, l), i = !0;
    },
    p(r, a) {
      t = r, o && o.p && (!i || a & 16400) && Dt(
        o,
        s,
        t,
        t[14],
        i ? Wt(s, t[14], a, _e) : Zt(t[14]),
        Ht
      );
    },
    i(r) {
      i || (I(c, r), i = !0);
    },
    o(r) {
      B(c, r), i = !1;
    },
    d(r) {
      r && M(n), c && c.d(r);
    }
  };
}
function be(e) {
  let t, n, l = [], i = /* @__PURE__ */ new Map(), s, o, c, r, a = e[4];
  const f = (h) => h[23].index;
  for (let h = 0; h < a.length; h += 1) {
    let u = At(e, a, h), _ = f(u);
    i.set(_, l[h] = Et(_, u));
  }
  return {
    c() {
      t = v("svelte-virtual-list-viewport"), n = v("svelte-virtual-list-contents");
      for (let h = 0; h < l.length; h += 1)
        l[h].c();
      F(n, "padding-top", e[5] + "px"), F(n, "padding-bottom", e[6] + "px"), kt(n, "class", "svelte-1tqh76q"), F(t, "height", e[0]), kt(t, "class", "svelte-1tqh76q"), dt(() => e[18].call(t));
    },
    m(h, u) {
      N(h, t, u), p(t, n);
      for (let _ = 0; _ < l.length; _ += 1)
        l[_] && l[_].m(n, null);
      e[16](n), e[17](t), s = oe(t, e[18].bind(t)), o = !0, c || (r = K(t, "scroll", e[7]), c = !0);
    },
    p(h, [u]) {
      u & 16400 && (a = h[4], mt(), l = ue(l, u, f, 1, h, a, i, n, ae, Et, null, At), gt()), (!o || u & 32) && F(n, "padding-top", h[5] + "px"), (!o || u & 64) && F(n, "padding-bottom", h[6] + "px"), (!o || u & 1) && F(t, "height", h[0]);
    },
    i(h) {
      if (!o) {
        for (let u = 0; u < a.length; u += 1)
          I(l[u]);
        o = !0;
      }
    },
    o(h) {
      for (let u = 0; u < l.length; u += 1)
        B(l[u]);
      o = !1;
    },
    d(h) {
      h && M(t);
      for (let u = 0; u < l.length; u += 1)
        l[u].d();
      e[16](null), e[17](null), s(), c = !1, r();
    }
  };
}
function me(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { items: s } = t, { height: o = "100%" } = t, { itemHeight: c = void 0 } = t, { start: r = 0 } = t, { end: a = 0 } = t, f = [], h, u, _, y = 0, z, A, m = 0, L = 0, S;
  async function x(d, k, E) {
    d.length < r && await Z(d.length - 1, { behavior: "auto" });
    const { scrollTop: q } = u;
    await tt();
    let Y = m - q, Q = r;
    for (; Y < k && Q < d.length; ) {
      let D = h[Q - r];
      D || (n(9, a = Q + 1), await tt(), D = h[Q - r]);
      const T = f[Q] = E || D.offsetHeight;
      Y += T, Q += 1;
    }
    n(9, a = Q);
    const ut = d.length - a;
    S = (m + Y) / a, n(6, L = ut * S), f.length = d.length;
  }
  async function W() {
    const { scrollTop: d } = u;
    for (let q = 0; q < h.length; q += 1)
      f[r + q] = c || h[q].offsetHeight;
    let k = 0, E = 0;
    for (; k < s.length; ) {
      const q = f[k] || S;
      if (E + q > d) {
        n(8, r = k), n(5, m = E);
        break;
      }
      E += q, k += 1;
    }
    for (; k < s.length && (E += f[k] || S, k += 1, !(E > d + y)); )
      ;
    n(9, a = k);
    const j = s.length - a;
    for (S = E / a; k < s.length; )
      f[k++] = S;
    n(6, L = j * S);
  }
  async function Z(d, k) {
    const { scrollTop: E } = u, Y = (d - r) * (c || S);
    k = {
      left: 0,
      top: E + Y,
      behavior: "smooth",
      ...k
    }, u.scrollTo(k);
  }
  Yt(() => {
    h = _.getElementsByTagName("svelte-virtual-list-row"), n(13, A = !0);
  });
  function w(d) {
    rt[d ? "unshift" : "push"](() => {
      _ = d, n(3, _);
    });
  }
  function C(d) {
    rt[d ? "unshift" : "push"](() => {
      u = d, n(2, u);
    });
  }
  function H() {
    y = this.offsetHeight, n(1, y);
  }
  return e.$$set = (d) => {
    "items" in d && n(10, s = d.items), "height" in d && n(0, o = d.height), "itemHeight" in d && n(11, c = d.itemHeight), "start" in d && n(8, r = d.start), "end" in d && n(9, a = d.end), "$$scope" in d && n(14, i = d.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & 1792 && n(4, z = s.slice(r, a).map((d, k) => ({ index: k + r, data: d }))), e.$$.dirty & 11266 && A && x(s, y, c);
  }, [
    o,
    y,
    u,
    _,
    z,
    m,
    L,
    W,
    r,
    a,
    s,
    c,
    Z,
    A,
    i,
    l,
    w,
    C,
    H
  ];
}
class ge extends vt {
  constructor(t) {
    super(), wt(this, t, me, be, bt, {
      items: 10,
      height: 0,
      itemHeight: 11,
      start: 8,
      end: 9,
      scrollToIndex: 12
    });
  }
  get scrollToIndex() {
    return this.$$.ctx[12];
  }
}
function qt(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l;
}
function pe(e) {
  let t, n, l;
  const i = e[6].default, s = Vt(i, e, e[5], null);
  let o = e[3].length > 0 && Ot(e);
  return {
    c() {
      s && s.c(), t = V(), o && o.c(), n = Rt();
    },
    m(c, r) {
      s && s.m(c, r), N(c, t, r), o && o.m(c, r), N(c, n, r), l = !0;
    },
    p(c, r) {
      s && s.p && (!l || r & 32) && Dt(
        s,
        i,
        c,
        c[5],
        l ? Wt(i, c[5], r, null) : Zt(c[5]),
        null
      ), c[3].length > 0 ? o ? o.p(c, r) : (o = Ot(c), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    i(c) {
      l || (I(s, c), l = !0);
    },
    o(c) {
      B(s, c), l = !1;
    },
    d(c) {
      s && s.d(c), c && M(t), o && o.d(c), c && M(n);
    }
  };
}
function we(e) {
  let t, n, l, i, s;
  return {
    c() {
      t = v("div"), n = V(), l = v("div"), i = V(), s = v("div"), b(t, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), F(t, "animation-delay", "0.1s"), b(l, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), F(l, "animation-delay", "0.2s"), b(s, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), F(s, "animation-delay", "0.3s");
    },
    m(o, c) {
      N(o, t, c), N(o, n, c), N(o, l, c), N(o, i, c), N(o, s, c);
    },
    p: et,
    i: et,
    o: et,
    d(o) {
      o && M(t), o && M(n), o && M(l), o && M(i), o && M(s);
    }
  };
}
function Ot(e) {
  let t, n, l, i = e[4], s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Bt(qt(e, i, o));
  return {
    c() {
      t = v("div"), n = v("span"), n.textContent = "Sources:", l = V();
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      b(t, "class", "chatbot-flex chatbot-gap-1 chatbot-mt-2 chatbot-items-center chatbot-flex-wrap");
    },
    m(o, c) {
      N(o, t, c), p(t, n), p(t, l);
      for (let r = 0; r < s.length; r += 1)
        s[r] && s[r].m(t, null);
    },
    p(o, c) {
      if (c & 16) {
        i = o[4];
        let r;
        for (r = 0; r < i.length; r += 1) {
          const a = qt(o, i, r);
          s[r] ? s[r].p(a, c) : (s[r] = Bt(a), s[r].c(), s[r].m(t, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = i.length;
      }
    },
    d(o) {
      o && M(t), Qt(s, o);
    }
  };
}
function Bt(e) {
  let t, n, l = e[7].text + "", i, s;
  return {
    c() {
      t = v("a"), n = P("/"), i = P(l), b(t, "href", s = e[7].url), b(t, "class", "chatbot-btn chatbot-btn-xs");
    },
    m(o, c) {
      N(o, t, c), p(t, n), p(t, i);
    },
    p(o, c) {
      c & 16 && l !== (l = o[7].text + "") && it(i, l), c & 16 && s !== (s = o[7].url) && b(t, "href", s);
    },
    d(o) {
      o && M(t);
    }
  };
}
function ve(e) {
  let t, n, l, i, s, o, c, r;
  const a = [we, pe], f = [];
  function h(u, _) {
    return u[2] ? 0 : 1;
  }
  return i = h(e), s = f[i] = a[i](e), {
    c() {
      t = v("div"), n = v("div"), l = v("div"), s.c(), F(l, "background-color", e[0] ? "" : e[1]), b(l, "class", o = `chatbot-chat-bubble ${e[2] ? "chatbot-flex chatbot-space-x-2 chatbot-items-center" : ""}`), b(n, "class", c = `chatbot-chat ${e[0] ? "chatbot-chat-end" : "chatbot-chat-start"}`);
    },
    m(u, _) {
      N(u, t, _), p(t, n), p(n, l), f[i].m(l, null), r = !0;
    },
    p(u, [_]) {
      let y = i;
      i = h(u), i === y ? f[i].p(u, _) : (mt(), B(f[y], 1, 1, () => {
        f[y] = null;
      }), gt(), s = f[i], s ? s.p(u, _) : (s = f[i] = a[i](u), s.c()), I(s, 1), s.m(l, null)), (!r || _ & 3) && F(l, "background-color", u[0] ? "" : u[1]), (!r || _ & 4 && o !== (o = `chatbot-chat-bubble ${u[2] ? "chatbot-flex chatbot-space-x-2 chatbot-items-center" : ""}`)) && b(l, "class", o), (!r || _ & 1 && c !== (c = `chatbot-chat ${u[0] ? "chatbot-chat-end" : "chatbot-chat-start"}`)) && b(n, "class", c);
    },
    i(u) {
      r || (I(s), r = !0);
    },
    o(u) {
      B(s), r = !1;
    },
    d(u) {
      u && M(t), f[i].d();
    }
  };
}
function ye(e, t, n) {
  let l, { $$slots: i = {}, $$scope: s } = t, { isFromMe: o = !0 } = t, { mainColor: c } = t, { loading: r = !1 } = t, { sources: a = [] } = t;
  return e.$$set = (f) => {
    "isFromMe" in f && n(0, o = f.isFromMe), "mainColor" in f && n(1, c = f.mainColor), "loading" in f && n(2, r = f.loading), "sources" in f && n(3, a = f.sources), "$$scope" in f && n(5, s = f.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & 8 && n(4, l = a.map((f) => ({
      text: f.split("/").pop(),
      url: f
    })));
  }, [o, c, r, a, l, s, i];
}
class Xt extends vt {
  constructor(t) {
    super(), wt(this, t, ye, ve, bt, {
      isFromMe: 0,
      mainColor: 1,
      loading: 2,
      sources: 3
    });
  }
}
function jt(e, t, n) {
  const l = e.slice();
  return l[14] = t[n], l;
}
function ke(e) {
  var l;
  let t, n;
  return t = new Xt({
    props: {
      sources: (l = e[17].sources) != null ? l : [],
      mainColor: e[2],
      isFromMe: e[17].type === "end",
      $$slots: { default: [Me] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      pt(t.$$.fragment);
    },
    m(i, s) {
      ct(t, i, s), n = !0;
    },
    p(i, s) {
      var c;
      const o = {};
      s & 131072 && (o.sources = (c = i[17].sources) != null ? c : []), s & 4 && (o.mainColor = i[2]), s & 131072 && (o.isFromMe = i[17].type === "end"), s & 393216 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (I(t.$$.fragment, i), n = !0);
    },
    o(i) {
      B(t.$$.fragment, i), n = !1;
    },
    d(i) {
      at(t, i);
    }
  };
}
function Ce(e) {
  let t, n;
  return t = new Xt({
    props: {
      loading: !0,
      mainColor: e[2],
      isFromMe: !1
    }
  }), {
    c() {
      pt(t.$$.fragment);
    },
    m(l, i) {
      ct(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i & 4 && (s.mainColor = l[2]), t.$set(s);
    },
    i(l) {
      n || (I(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      at(t, l);
    }
  };
}
function Me(e) {
  let t = e[17].text + "", n;
  return {
    c() {
      n = P(t);
    },
    m(l, i) {
      N(l, n, i);
    },
    p(l, i) {
      i & 131072 && t !== (t = l[17].text + "") && it(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Ne(e) {
  let t, n, l, i;
  const s = [Ce, ke], o = [];
  function c(r, a) {
    return r[17].loading ? 0 : 1;
  }
  return t = c(e), n = o[t] = s[t](e), {
    c() {
      n.c(), l = Rt();
    },
    m(r, a) {
      o[t].m(r, a), N(r, l, a), i = !0;
    },
    p(r, a) {
      let f = t;
      t = c(r), t === f ? o[t].p(r, a) : (mt(), B(o[f], 1, 1, () => {
        o[f] = null;
      }), gt(), n = o[t], n ? n.p(r, a) : (n = o[t] = s[t](r), n.c()), I(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      i || (I(n), i = !0);
    },
    o(r) {
      B(n), i = !1;
    },
    d(r) {
      o[t].d(r), r && M(l);
    }
  };
}
function Ft(e) {
  let t, n = e[14] + "", l, i, s;
  function o() {
    return e[12](e[14]);
  }
  return {
    c() {
      t = v("button"), l = P(n), b(t, "class", "chatbot-btn chatbot-btn-outline chatbot-btn-xs chatbot-break-words chatbot-max-w-full");
    },
    m(c, r) {
      N(c, t, r), p(t, l), i || (s = K(t, "click", o), i = !0);
    },
    p(c, r) {
      e = c, r & 64 && n !== (n = e[14] + "") && it(l, n);
    },
    d(c) {
      c && M(t), i = !1, s();
    }
  };
}
function Se(e) {
  let t, n, l, i, s, o, c, r, a, f, h, u = e[5] ? "online" : "offline", _, y, z, A, m, L, S, x, W, Z, w, C, H, d, k, E, j, q, Y;
  function Q(g) {
    e[11](g);
  }
  let ut = {
    items: e[8],
    $$slots: {
      default: [
        Ne,
        ({ item: g }) => ({ 17: g }),
        ({ item: g }) => g ? 131072 : 0
      ]
    },
    $$scope: { ctx: e }
  };
  e[4] !== void 0 && (ut.scrollToIndex = e[4]), m = new ge({ props: ut }), rt.push(() => fe(m, "scrollToIndex", Q));
  let D = e[6], T = [];
  for (let g = 0; g < D.length; g += 1)
    T[g] = Ft(jt(e, D, g));
  return {
    c() {
      t = v("div"), n = v("div"), l = v("div"), i = v("div"), s = v("div"), o = v("img"), r = V(), a = v("span"), f = P(e[0]), h = P(" is "), _ = P(u), y = P(" !"), z = V(), A = v("div"), pt(m.$$.fragment), S = V(), x = v("div"), W = v("div");
      for (let g = 0; g < T.length; g += 1)
        T[g].c();
      Z = V(), w = v("form"), C = v("input"), H = V(), d = v("button"), k = lt("svg"), E = lt("path"), b(o, "alt", "Bot Avatar"), Lt(o.src, c = e[1]) || b(o, "src", c), b(s, "class", "chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8"), b(i, "class", "chatbot-avatar chatbot-placeholder"), It(i, "chatbot-online", e[5]), b(l, "class", "chatbot-card-title"), b(A, "class", "chatbot-h-60"), b(W, "class", "chatbot-gap-2 chatbot-flex chatbot-flex-wrap"), b(C, "maxlength", "200"), b(C, "type", "text"), b(C, "placeholder", "Type here"), b(C, "class", "chatbot-input chatbot-w-full chatbot-max-w-full"), b(E, "fill", "currentColor"), b(E, "d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"), b(k, "class", "chatbot-h-4"), b(k, "viewBox", "0 0 24 24"), d.disabled = e[3], b(d, "type", "submit"), b(d, "class", "chatbot-btn chatbot-btn-md"), b(w, "class", "chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full"), b(x, "class", "chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full"), b(n, "class", "chatbot-card-body"), b(t, "class", "chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans");
    },
    m(g, O) {
      N(g, t, O), p(t, n), p(n, l), p(l, i), p(i, s), p(s, o), p(l, r), p(l, a), p(a, f), p(a, h), p(a, _), p(a, y), p(n, z), p(n, A), ct(m, A, null), p(n, S), p(n, x), p(x, W);
      for (let R = 0; R < T.length; R += 1)
        T[R] && T[R].m(W, null);
      p(x, Z), p(x, w), p(w, C), Tt(C, e[7]), p(w, H), p(w, d), p(d, k), p(k, E), j = !0, q || (Y = [
        K(C, "input", e[13]),
        K(w, "submit", ee(e[9]))
      ], q = !0);
    },
    p(g, [O]) {
      (!j || O & 2 && !Lt(o.src, c = g[1])) && b(o, "src", c), (!j || O & 32) && It(i, "chatbot-online", g[5]), (!j || O & 1) && it(f, g[0]), (!j || O & 32) && u !== (u = g[5] ? "online" : "offline") && it(_, u);
      const R = {};
      if (O & 256 && (R.items = g[8]), O & 393220 && (R.$$scope = { dirty: O, ctx: g }), !L && O & 16 && (L = !0, R.scrollToIndex = g[4], se(() => L = !1)), m.$set(R), O & 192) {
        D = g[6];
        let J;
        for (J = 0; J < D.length; J += 1) {
          const Nt = jt(g, D, J);
          T[J] ? T[J].p(Nt, O) : (T[J] = Ft(Nt), T[J].c(), T[J].m(W, null));
        }
        for (; J < T.length; J += 1)
          T[J].d(1);
        T.length = D.length;
      }
      O & 128 && C.value !== g[7] && Tt(C, g[7]), (!j || O & 8) && (d.disabled = g[3]);
    },
    i(g) {
      j || (I(m.$$.fragment, g), j = !0);
    },
    o(g) {
      B(m.$$.fragment, g), j = !1;
    },
    d(g) {
      g && M(t), at(m), Qt(T, g), q = !1, U(Y);
    }
  };
}
function Le(e, t, n) {
  let { endpoint: l } = t, { botName: i } = t, { botAvatar: s } = t, { mainColor: o } = t, c = !1, r, a = !0, f = ["Where is the venue?", "Things to do"];
  Yt(() => {
    const m = localStorage.getItem("messages");
    m && n(8, _ = JSON.parse(m));
    const L = localStorage.getItem("suggestions");
    L && n(6, f = JSON.parse(L));
  });
  async function h() {
    try {
      if (u.trim() === "")
        return;
      n(3, c = !0), n(8, _ = [
        ..._,
        {
          text: u,
          type: "end",
          sources: []
        },
        {
          text: "...is writing",
          type: "start",
          loading: !0,
          sources: []
        }
      ]), await tt(), await tt(), r(_.length - 1);
      const m = u;
      n(7, u = "");
      const L = await fetch(l, {
        body: JSON.stringify({ text: m }),
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (!L.ok) {
        n(
          8,
          _[_.length - 1] = {
            text: "I don't understand",
            type: "start",
            sources: []
          },
          _
        );
        return;
      }
      const S = await L.json();
      n(
        8,
        _[_.length - 1] = {
          text: S.text,
          type: "start",
          sources: S.sources
        },
        _
      ), n(6, f = S.suggestions), localStorage.setItem("messages", JSON.stringify(_)), localStorage.setItem("suggestions", JSON.stringify(f));
    } catch (m) {
      console.error(m), n(
        8,
        _[_.length - 1] = {
          text: "Humm \u{1F914}... It seems that your message did not find the correct wire.",
          type: "start",
          sources: []
        },
        _
      ), n(5, a = !1);
    } finally {
      await tt(), await tt(), r(_.length - 1), n(3, c = !1);
    }
  }
  let u = "", _ = [
    {
      text: `Hello \u{1F44B} ! I'm ${i} the bot! I can help you with your questions. Just ask me!`,
      type: "start",
      sources: []
    }
  ];
  function y(m) {
    r = m, n(4, r);
  }
  const z = (m) => n(7, u = m);
  function A() {
    u = this.value, n(7, u);
  }
  return e.$$set = (m) => {
    "endpoint" in m && n(10, l = m.endpoint), "botName" in m && n(0, i = m.botName), "botAvatar" in m && n(1, s = m.botAvatar), "mainColor" in m && n(2, o = m.mainColor);
  }, [
    i,
    s,
    o,
    c,
    r,
    a,
    f,
    u,
    _,
    h,
    l,
    y,
    z,
    A
  ];
}
class Te extends vt {
  constructor(t) {
    super(), wt(this, t, Le, Se, bt, {
      endpoint: 10,
      botName: 0,
      botAvatar: 1,
      mainColor: 2
    });
  }
}
function Jt(e) {
  let t, n;
  return t = new Te({
    props: {
      endpoint: e[0],
      botName: e[1],
      botAvatar: e[2],
      mainColor: e[3]
    }
  }), {
    c() {
      pt(t.$$.fragment);
    },
    m(l, i) {
      ct(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i & 1 && (s.endpoint = l[0]), i & 2 && (s.botName = l[1]), i & 4 && (s.botAvatar = l[2]), i & 8 && (s.mainColor = l[3]), t.$set(s);
    },
    i(l) {
      n || (I(t.$$.fragment, l), n = !0);
    },
    o(l) {
      B(t.$$.fragment, l), n = !1;
    },
    d(l) {
      at(t, l);
    }
  };
}
function Ie(e) {
  let t, n;
  return {
    c() {
      t = lt("svg"), n = lt("path"), b(n, "d", "M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"), b(t, "class", "chatbot-h-10"), b(t, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      N(l, t, i), p(t, n);
    },
    d(l) {
      l && M(t);
    }
  };
}
function Ae(e) {
  let t, n;
  return {
    c() {
      t = lt("svg"), n = lt("path"), b(n, "d", "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"), b(t, "class", "chatbot-h-10"), b(t, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      N(l, t, i), p(t, n);
    },
    d(l) {
      l && M(t);
    }
  };
}
function He(e) {
  let t, n, l, i, s, o = e[4] && Jt(e);
  function c(f, h) {
    return f[4] ? Ae : Ie;
  }
  let r = c(e), a = r(e);
  return {
    c() {
      o && o.c(), t = V(), n = v("button"), a.c(), F(n, "background-color", e[3]), b(n, "class", "chatbot-flex chatbot-items-center chatbot-justify-center chatbot-rounded-full chatbot-p-4 chatbot-h-20 chatbot-aspect-square chatbot-fixed chatbot-bottom-5 chatbot-right-5 chatbot-fill-white chatbot-hover:scale-110 chatbot-transition-transform chatbot-shadow");
    },
    m(f, h) {
      o && o.m(f, h), N(f, t, h), N(f, n, h), a.m(n, null), l = !0, i || (s = K(n, "click", e[5]), i = !0);
    },
    p(f, [h]) {
      f[4] ? o ? (o.p(f, h), h & 16 && I(o, 1)) : (o = Jt(f), o.c(), I(o, 1), o.m(t.parentNode, t)) : o && (mt(), B(o, 1, 1, () => {
        o = null;
      }), gt()), r !== (r = c(f)) && (a.d(1), a = r(f), a && (a.c(), a.m(n, null))), (!l || h & 8) && F(n, "background-color", f[3]);
    },
    i(f) {
      l || (I(o), l = !0);
    },
    o(f) {
      B(o), l = !1;
    },
    d(f) {
      o && o.d(f), f && M(t), f && M(n), a.d(), i = !1, s();
    }
  };
}
function Ee(e, t, n) {
  let l = !1, { endpoint: i = "http://127.0.0.1:3000/chat" } = t, { botName: s = "Ibentau Assistant" } = t, { botAvatar: o = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2" } = t, { mainColor: c = "#00bfa5" } = t;
  const r = () => n(4, l = !l);
  return e.$$set = (a) => {
    "endpoint" in a && n(0, i = a.endpoint), "botName" in a && n(1, s = a.botName), "botAvatar" in a && n(2, o = a.botAvatar), "mainColor" in a && n(3, c = a.mainColor);
  }, [i, s, o, c, l, r];
}
class qe extends vt {
  constructor(t) {
    super(), wt(this, t, Ee, He, bt, {
      endpoint: 0,
      botName: 1,
      botAvatar: 2,
      mainColor: 3
    });
  }
}
window.ChatBot = qe;
