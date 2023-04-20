function nt() {
}
function le(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Yt(e) {
  return e();
}
function Ot() {
  return /* @__PURE__ */ Object.create(null);
}
function U(e) {
  e.forEach(Yt);
}
function Gt(e) {
  return typeof e == "function";
}
function pt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let dt;
function Bt(e, t) {
  return dt || (dt = document.createElement("a")), dt.href = t, e === dt.href;
}
function oe(e) {
  return Object.keys(e).length === 0;
}
function It(e, t, n, l) {
  if (e) {
    const i = Kt(e, t, n, l);
    return e[0](i);
  }
}
function Kt(e, t, n, l) {
  return e[1] && l ? le(n.ctx.slice(), e[1](l(t))) : n.ctx;
}
function At(e, t, n, l) {
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
function Ht(e, t, n, l, i, s) {
  if (i) {
    const o = Kt(t, n, l, s);
    e.p(o, i);
  }
}
function Et(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let l = 0; l < n; l++)
      t[l] = -1;
    return t;
  }
  return -1;
}
function g(e, t) {
  e.appendChild(t);
}
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function M(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ut(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function v(e) {
  return document.createElement(e);
}
function ot(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Q(e) {
  return document.createTextNode(e);
}
function W() {
  return Q(" ");
}
function Xt() {
  return Q("");
}
function K(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function ie(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function b(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Lt(e, t, n) {
  t in e ? e[t] = typeof e[t] == "boolean" && n === "" ? !0 : n : b(e, t, n);
}
function se(e) {
  return Array.from(e.childNodes);
}
function rt(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function jt(e, t) {
  e.value = t == null ? "" : t;
}
function V(e, t, n, l) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, l ? "important" : "");
}
let bt;
function re() {
  if (bt === void 0) {
    bt = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      bt = !0;
    }
  }
  return bt;
}
function ce(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const l = v("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const i = re();
  let s;
  return i ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = K(window, "message", (o) => {
    o.source === l.contentWindow && t();
  })) : (l.src = "about:blank", l.onload = () => {
    s = K(l.contentWindow, "resize", t), t();
  }), g(e, l), () => {
    (i || s && l.contentWindow) && s(), M(l);
  };
}
function Ft(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
let ct;
function st(e) {
  ct = e;
}
function ae() {
  if (!ct)
    throw new Error("Function called outside component initialization");
  return ct;
}
function xt(e) {
  ae().$$.on_mount.push(e);
}
const tt = [], at = [];
let lt = [];
const St = [], $t = /* @__PURE__ */ Promise.resolve();
let Tt = !1;
function te() {
  Tt || (Tt = !0, $t.then(ee));
}
function et() {
  return te(), $t;
}
function gt(e) {
  lt.push(e);
}
function ue(e) {
  St.push(e);
}
const Nt = /* @__PURE__ */ new Set();
let $ = 0;
function ee() {
  if ($ !== 0)
    return;
  const e = ct;
  do {
    try {
      for (; $ < tt.length; ) {
        const t = tt[$];
        $++, st(t), fe(t.$$);
      }
    } catch (t) {
      throw tt.length = 0, $ = 0, t;
    }
    for (st(null), tt.length = 0, $ = 0; at.length; )
      at.pop()();
    for (let t = 0; t < lt.length; t += 1) {
      const n = lt[t];
      Nt.has(n) || (Nt.add(n), n());
    }
    lt.length = 0;
  } while (tt.length);
  for (; St.length; )
    St.pop()();
  Tt = !1, Nt.clear(), st(e);
}
function fe(e) {
  if (e.fragment !== null) {
    e.update(), U(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(gt);
  }
}
function he(e) {
  const t = [], n = [];
  lt.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), lt = t;
}
const mt = /* @__PURE__ */ new Set();
let G;
function wt() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function vt() {
  G.r || U(G.c), G = G.p;
}
function A(e, t) {
  e && e.i && (mt.delete(e), e.i(t));
}
function F(e, t, n, l) {
  if (e && e.o) {
    if (mt.has(e))
      return;
    mt.add(e), G.c.push(() => {
      mt.delete(e), l && (n && e.d(1), l());
    }), e.o(t);
  } else
    l && l();
}
function _e(e, t) {
  F(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function de(e, t, n, l, i, s, o, c, r, u, a, h) {
  let f = e.length, m = s.length, w = f;
  const k = {};
  for (; w--; )
    k[e[w].key] = w;
  const E = [], S = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), p = [];
  for (w = m; w--; ) {
    const y = h(i, s, w), N = n(y);
    let q = o.get(N);
    q ? l && p.push(() => q.p(y, t)) : (q = u(N, y), q.c()), S.set(N, E[w] = q), N in k && z.set(N, Math.abs(w - k[N]));
  }
  const T = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set();
  function R(y) {
    A(y, 1), y.m(c, a), o.set(y.key, y), a = y.first, m--;
  }
  for (; f && m; ) {
    const y = E[m - 1], N = e[f - 1], q = y.key, _ = N.key;
    y === N ? (a = y.first, f--, m--) : S.has(_) ? !o.has(q) || T.has(q) ? R(y) : J.has(_) ? f-- : z.get(q) > z.get(_) ? (J.add(q), R(y)) : (T.add(_), f--) : (r(N, o), f--);
  }
  for (; f--; ) {
    const y = e[f];
    S.has(y.key) || r(y, o);
  }
  for (; m; )
    R(E[m - 1]);
  return U(p), E;
}
function be(e, t, n) {
  const l = e.$$.props[t];
  l !== void 0 && (e.$$.bound[l] = n, n(e.$$.ctx[l]));
}
function yt(e) {
  e && e.c();
}
function ut(e, t, n, l) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), l || gt(() => {
    const o = e.$$.on_mount.map(Yt).filter(Gt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...o) : U(o), e.$$.on_mount = [];
  }), s.forEach(gt);
}
function ft(e, t) {
  const n = e.$$;
  n.fragment !== null && (he(n.after_update), U(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function me(e, t) {
  e.$$.dirty[0] === -1 && (tt.push(e), te(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function kt(e, t, n, l, i, s, o, c = [-1]) {
  const r = ct;
  st(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: nt,
    not_equal: i,
    bound: Ot(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (r ? r.$$.context : [])),
    callbacks: Ot(),
    dirty: c,
    skip_bound: !1,
    root: t.target || r.$$.root
  };
  o && o(u.root);
  let a = !1;
  if (u.ctx = n ? n(e, t.props || {}, (h, f, ...m) => {
    const w = m.length ? m[0] : f;
    return u.ctx && i(u.ctx[h], u.ctx[h] = w) && (!u.skip_bound && u.bound[h] && u.bound[h](w), a && me(e, h)), f;
  }) : [], u.update(), a = !0, U(u.before_update), u.fragment = l ? l(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const h = se(t.target);
      u.fragment && u.fragment.l(h), h.forEach(M);
    } else
      u.fragment && u.fragment.c();
    t.intro && A(e.$$.fragment), ut(e, t.target, t.anchor, t.customElement), ee();
  }
  st(r);
}
class Ct {
  $destroy() {
    ft(this, 1), this.$destroy = nt;
  }
  $on(t, n) {
    if (!Gt(n))
      return nt;
    const l = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return l.push(n), () => {
      const i = l.indexOf(n);
      i !== -1 && l.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !oe(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function Jt(e, t, n) {
  const l = e.slice();
  return l[23] = t[n], l;
}
const ge = (e) => ({ item: e & 16 }), zt = (e) => ({ item: e[23].data });
function pe(e) {
  let t;
  return {
    c() {
      t = Q("Missing template");
    },
    m(n, l) {
      L(n, t, l);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Vt(e, t) {
  let n, l, i;
  const s = t[15].default, o = It(s, t, t[14], zt), c = o || pe();
  return {
    key: e,
    first: null,
    c() {
      n = v("svelte-virtual-list-row"), c && c.c(), l = W(), Lt(n, "class", "svelte-1tqh76q"), this.first = n;
    },
    m(r, u) {
      L(r, n, u), c && c.m(n, null), g(n, l), i = !0;
    },
    p(r, u) {
      t = r, o && o.p && (!i || u & 16400) && Ht(
        o,
        s,
        t,
        t[14],
        i ? At(s, t[14], u, ge) : Et(t[14]),
        zt
      );
    },
    i(r) {
      i || (A(c, r), i = !0);
    },
    o(r) {
      F(c, r), i = !1;
    },
    d(r) {
      r && M(n), c && c.d(r);
    }
  };
}
function we(e) {
  let t, n, l = [], i = /* @__PURE__ */ new Map(), s, o, c, r, u = e[4];
  const a = (h) => h[23].index;
  for (let h = 0; h < u.length; h += 1) {
    let f = Jt(e, u, h), m = a(f);
    i.set(m, l[h] = Vt(m, f));
  }
  return {
    c() {
      t = v("svelte-virtual-list-viewport"), n = v("svelte-virtual-list-contents");
      for (let h = 0; h < l.length; h += 1)
        l[h].c();
      V(n, "padding-top", e[5] + "px"), V(n, "padding-bottom", e[6] + "px"), Lt(n, "class", "svelte-1tqh76q"), V(t, "height", e[0]), Lt(t, "class", "svelte-1tqh76q"), gt(() => e[18].call(t));
    },
    m(h, f) {
      L(h, t, f), g(t, n);
      for (let m = 0; m < l.length; m += 1)
        l[m] && l[m].m(n, null);
      e[16](n), e[17](t), s = ce(t, e[18].bind(t)), o = !0, c || (r = K(t, "scroll", e[7]), c = !0);
    },
    p(h, [f]) {
      f & 16400 && (u = h[4], wt(), l = de(l, f, a, 1, h, u, i, n, _e, Vt, null, Jt), vt()), (!o || f & 32) && V(n, "padding-top", h[5] + "px"), (!o || f & 64) && V(n, "padding-bottom", h[6] + "px"), (!o || f & 1) && V(t, "height", h[0]);
    },
    i(h) {
      if (!o) {
        for (let f = 0; f < u.length; f += 1)
          A(l[f]);
        o = !0;
      }
    },
    o(h) {
      for (let f = 0; f < l.length; f += 1)
        F(l[f]);
      o = !1;
    },
    d(h) {
      h && M(t);
      for (let f = 0; f < l.length; f += 1)
        l[f].d();
      e[16](null), e[17](null), s(), c = !1, r();
    }
  };
}
function ve(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { items: s } = t, { height: o = "100%" } = t, { itemHeight: c = void 0 } = t, { start: r = 0 } = t, { end: u = 0 } = t, a = [], h, f, m, w = 0, k, E, S = 0, z = 0, p;
  async function T(_, C, O) {
    _.length < r && await R(_.length - 1, { behavior: "auto" });
    const { scrollTop: B } = f;
    await et();
    let I = S - B, D = r;
    for (; I < C && D < _.length; ) {
      let it = h[D - r];
      it || (n(9, u = D + 1), await et(), it = h[D - r]);
      const _t = a[D] = O || it.offsetHeight;
      I += _t, D += 1;
    }
    n(9, u = D);
    const ht = _.length - u;
    p = (S + I) / u, n(6, z = ht * p), a.length = _.length;
  }
  async function J() {
    const { scrollTop: _ } = f;
    for (let B = 0; B < h.length; B += 1)
      a[r + B] = c || h[B].offsetHeight;
    let C = 0, O = 0;
    for (; C < s.length; ) {
      const B = a[C] || p;
      if (O + B > _) {
        n(8, r = C), n(5, S = O);
        break;
      }
      O += B, C += 1;
    }
    for (; C < s.length && (O += a[C] || p, C += 1, !(O > _ + w)); )
      ;
    n(9, u = C);
    const X = s.length - u;
    for (p = O / u; C < s.length; )
      a[C++] = p;
    n(6, z = X * p);
  }
  async function R(_, C) {
    const { scrollTop: O } = f, I = (_ - r) * (c || p);
    C = {
      left: 0,
      top: O + I,
      behavior: "smooth",
      ...C
    }, f.scrollTo(C);
  }
  xt(() => {
    h = m.getElementsByTagName("svelte-virtual-list-row"), n(13, E = !0);
  });
  function y(_) {
    at[_ ? "unshift" : "push"](() => {
      m = _, n(3, m);
    });
  }
  function N(_) {
    at[_ ? "unshift" : "push"](() => {
      f = _, n(2, f);
    });
  }
  function q() {
    w = this.offsetHeight, n(1, w);
  }
  return e.$$set = (_) => {
    "items" in _ && n(10, s = _.items), "height" in _ && n(0, o = _.height), "itemHeight" in _ && n(11, c = _.itemHeight), "start" in _ && n(8, r = _.start), "end" in _ && n(9, u = _.end), "$$scope" in _ && n(14, i = _.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & 1792 && n(4, k = s.slice(r, u).map((_, C) => ({ index: C + r, data: _ }))), e.$$.dirty & 11266 && E && T(s, w, c);
  }, [
    o,
    w,
    f,
    m,
    k,
    S,
    z,
    J,
    r,
    u,
    s,
    c,
    R,
    E,
    i,
    l,
    y,
    N,
    q
  ];
}
class ye extends Ct {
  constructor(t) {
    super(), kt(this, t, ve, we, pt, {
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
function Pt(e, t, n) {
  const l = e.slice();
  return l[7] = t[n], l;
}
function ke(e) {
  let t, n, l;
  const i = e[6].default, s = It(i, e, e[5], null);
  let o = e[3].length > 0 && Wt(e);
  return {
    c() {
      s && s.c(), t = W(), o && o.c(), n = Xt();
    },
    m(c, r) {
      s && s.m(c, r), L(c, t, r), o && o.m(c, r), L(c, n, r), l = !0;
    },
    p(c, r) {
      s && s.p && (!l || r & 32) && Ht(
        s,
        i,
        c,
        c[5],
        l ? At(i, c[5], r, null) : Et(c[5]),
        null
      ), c[3].length > 0 ? o ? o.p(c, r) : (o = Wt(c), o.c(), o.m(n.parentNode, n)) : o && (o.d(1), o = null);
    },
    i(c) {
      l || (A(s, c), l = !0);
    },
    o(c) {
      F(s, c), l = !1;
    },
    d(c) {
      s && s.d(c), c && M(t), o && o.d(c), c && M(n);
    }
  };
}
function Ce(e) {
  let t, n, l, i, s;
  return {
    c() {
      t = v("div"), n = W(), l = v("div"), i = W(), s = v("div"), b(t, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), V(t, "animation-delay", "0.1s"), b(l, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), V(l, "animation-delay", "0.2s"), b(s, "class", "chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce"), V(s, "animation-delay", "0.3s");
    },
    m(o, c) {
      L(o, t, c), L(o, n, c), L(o, l, c), L(o, i, c), L(o, s, c);
    },
    p: nt,
    i: nt,
    o: nt,
    d(o) {
      o && M(t), o && M(n), o && M(l), o && M(i), o && M(s);
    }
  };
}
function Wt(e) {
  let t, n, l, i = e[4], s = [];
  for (let o = 0; o < i.length; o += 1)
    s[o] = Dt(Pt(e, i, o));
  return {
    c() {
      t = v("div"), n = v("span"), n.textContent = "Sources:", l = W();
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      b(t, "class", "chatbot-flex chatbot-gap-1 chatbot-mt-2 chatbot-items-center chatbot-flex-wrap");
    },
    m(o, c) {
      L(o, t, c), g(t, n), g(t, l);
      for (let r = 0; r < s.length; r += 1)
        s[r] && s[r].m(t, null);
    },
    p(o, c) {
      if (c & 16) {
        i = o[4];
        let r;
        for (r = 0; r < i.length; r += 1) {
          const u = Pt(o, i, r);
          s[r] ? s[r].p(u, c) : (s[r] = Dt(u), s[r].c(), s[r].m(t, null));
        }
        for (; r < s.length; r += 1)
          s[r].d(1);
        s.length = i.length;
      }
    },
    d(o) {
      o && M(t), Ut(s, o);
    }
  };
}
function Dt(e) {
  let t, n, l = e[7].text + "", i, s;
  return {
    c() {
      t = v("a"), n = Q("/"), i = Q(l), b(t, "href", s = e[7].url), b(t, "class", "chatbot-btn chatbot-btn-xs");
    },
    m(o, c) {
      L(o, t, c), g(t, n), g(t, i);
    },
    p(o, c) {
      c & 16 && l !== (l = o[7].text + "") && rt(i, l), c & 16 && s !== (s = o[7].url) && b(t, "href", s);
    },
    d(o) {
      o && M(t);
    }
  };
}
function Me(e) {
  let t, n, l, i, s, o, c, r;
  const u = [Ce, ke], a = [];
  function h(f, m) {
    return f[2] ? 0 : 1;
  }
  return i = h(e), s = a[i] = u[i](e), {
    c() {
      t = v("div"), n = v("div"), l = v("div"), s.c(), V(l, "background-color", e[0] ? "" : e[1]), b(l, "class", o = `chatbot-chat-bubble ${e[2] ? "chatbot-flex chatbot-space-x-2 chatbot-items-center" : ""}`), b(n, "class", c = `chatbot-chat ${e[0] ? "chatbot-chat-end" : "chatbot-chat-start"}`);
    },
    m(f, m) {
      L(f, t, m), g(t, n), g(n, l), a[i].m(l, null), r = !0;
    },
    p(f, [m]) {
      let w = i;
      i = h(f), i === w ? a[i].p(f, m) : (wt(), F(a[w], 1, 1, () => {
        a[w] = null;
      }), vt(), s = a[i], s ? s.p(f, m) : (s = a[i] = u[i](f), s.c()), A(s, 1), s.m(l, null)), (!r || m & 3) && V(l, "background-color", f[0] ? "" : f[1]), (!r || m & 4 && o !== (o = `chatbot-chat-bubble ${f[2] ? "chatbot-flex chatbot-space-x-2 chatbot-items-center" : ""}`)) && b(l, "class", o), (!r || m & 1 && c !== (c = `chatbot-chat ${f[0] ? "chatbot-chat-end" : "chatbot-chat-start"}`)) && b(n, "class", c);
    },
    i(f) {
      r || (A(s), r = !0);
    },
    o(f) {
      F(s), r = !1;
    },
    d(f) {
      f && M(t), a[i].d();
    }
  };
}
function Ne(e, t, n) {
  let l, { $$slots: i = {}, $$scope: s } = t, { isFromMe: o = !0 } = t, { mainColor: c } = t, { loading: r = !1 } = t, { sources: u = [] } = t;
  return e.$$set = (a) => {
    "isFromMe" in a && n(0, o = a.isFromMe), "mainColor" in a && n(1, c = a.mainColor), "loading" in a && n(2, r = a.loading), "sources" in a && n(3, u = a.sources), "$$scope" in a && n(5, s = a.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & 8 && n(4, l = u.map((a) => ({
      text: a.split("/").pop(),
      url: a
    })));
  }, [o, c, r, u, l, s, i];
}
class ne extends Ct {
  constructor(t) {
    super(), kt(this, t, Ne, Me, pt, {
      isFromMe: 0,
      mainColor: 1,
      loading: 2,
      sources: 3
    });
  }
}
function Zt(e, t, n) {
  const l = e.slice();
  return l[16] = t[n], l;
}
function Le(e) {
  var l;
  let t, n;
  return t = new ne({
    props: {
      sources: (l = e[19].sources) != null ? l : [],
      mainColor: e[2],
      isFromMe: e[19].type === "end",
      $$slots: { default: [Te] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      yt(t.$$.fragment);
    },
    m(i, s) {
      ut(t, i, s), n = !0;
    },
    p(i, s) {
      var c;
      const o = {};
      s & 524288 && (o.sources = (c = i[19].sources) != null ? c : []), s & 4 && (o.mainColor = i[2]), s & 524288 && (o.isFromMe = i[19].type === "end"), s & 557056 && (o.$$scope = { dirty: s, ctx: i }), t.$set(o);
    },
    i(i) {
      n || (A(t.$$.fragment, i), n = !0);
    },
    o(i) {
      F(t.$$.fragment, i), n = !1;
    },
    d(i) {
      ft(t, i);
    }
  };
}
function Se(e) {
  let t, n;
  return t = new ne({
    props: {
      loading: !0,
      mainColor: e[2],
      isFromMe: !1
    }
  }), {
    c() {
      yt(t.$$.fragment);
    },
    m(l, i) {
      ut(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i & 4 && (s.mainColor = l[2]), t.$set(s);
    },
    i(l) {
      n || (A(t.$$.fragment, l), n = !0);
    },
    o(l) {
      F(t.$$.fragment, l), n = !1;
    },
    d(l) {
      ft(t, l);
    }
  };
}
function Te(e) {
  let t = e[19].text + "", n;
  return {
    c() {
      n = Q(t);
    },
    m(l, i) {
      L(l, n, i);
    },
    p(l, i) {
      i & 524288 && t !== (t = l[19].text + "") && rt(n, t);
    },
    d(l) {
      l && M(n);
    }
  };
}
function Ie(e) {
  let t, n, l, i;
  const s = [Se, Le], o = [];
  function c(r, u) {
    return r[19].loading ? 0 : 1;
  }
  return t = c(e), n = o[t] = s[t](e), {
    c() {
      n.c(), l = Xt();
    },
    m(r, u) {
      o[t].m(r, u), L(r, l, u), i = !0;
    },
    p(r, u) {
      let a = t;
      t = c(r), t === a ? o[t].p(r, u) : (wt(), F(o[a], 1, 1, () => {
        o[a] = null;
      }), vt(), n = o[t], n ? n.p(r, u) : (n = o[t] = s[t](r), n.c()), A(n, 1), n.m(l.parentNode, l));
    },
    i(r) {
      i || (A(n), i = !0);
    },
    o(r) {
      F(n), i = !1;
    },
    d(r) {
      o[t].d(r), r && M(l);
    }
  };
}
function Qt(e) {
  let t, n = e[16] + "", l, i, s;
  function o() {
    return e[13](e[16]);
  }
  return {
    c() {
      t = v("button"), l = Q(n), b(t, "class", "chatbot-btn chatbot-btn-outline chatbot-btn-xs chatbot-break-words chatbot-max-w-full");
    },
    m(c, r) {
      L(c, t, r), g(t, l), i || (s = K(t, "click", o), i = !0);
    },
    p(c, r) {
      e = c, r & 64 && n !== (n = e[16] + "") && rt(l, n);
    },
    d(c) {
      c && M(t), i = !1, s();
    }
  };
}
function Ae(e) {
  let t, n, l, i, s, o, c, r, u, a, h, f = e[5] ? "online" : "offline", m, w, k, E, S, z, p, T, J, R, y, N, q, _, C, O, X, B, I, D, ht;
  function it(d) {
    e[12](d);
  }
  let _t = {
    items: e[8],
    $$slots: {
      default: [
        Ie,
        ({ item: d }) => ({ 19: d }),
        ({ item: d }) => d ? 524288 : 0
      ]
    },
    $$scope: { ctx: e }
  };
  e[4] !== void 0 && (_t.scrollToIndex = e[4]), S = new ye({ props: _t }), at.push(() => be(S, "scrollToIndex", it));
  let x = e[6], j = [];
  for (let d = 0; d < x.length; d += 1)
    j[d] = Qt(Zt(e, x, d));
  const Mt = e[11].default, Z = It(Mt, e, e[15], null);
  return {
    c() {
      t = v("div"), n = v("div"), l = v("div"), i = v("div"), s = v("div"), o = v("img"), r = W(), u = v("span"), a = Q(e[0]), h = Q(" is "), m = Q(f), w = Q(" !"), k = W(), E = v("div"), yt(S.$$.fragment), p = W(), T = v("div"), J = v("div");
      for (let d = 0; d < j.length; d += 1)
        j[d].c();
      R = W(), y = v("form"), N = v("input"), q = W(), _ = v("button"), C = ot("svg"), O = ot("path"), X = W(), B = v("div"), Z && Z.c(), b(o, "alt", "Bot Avatar"), Bt(o.src, c = e[1]) || b(o, "src", c), b(s, "class", "chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8"), b(i, "class", "chatbot-avatar chatbot-placeholder"), Ft(i, "chatbot-online", e[5]), b(l, "class", "chatbot-card-title"), b(E, "class", "chatbot-h-60"), b(J, "class", "chatbot-gap-2 chatbot-flex chatbot-flex-wrap"), b(N, "maxlength", "200"), b(N, "type", "text"), b(N, "placeholder", "Type here"), b(N, "class", "chatbot-input chatbot-w-full chatbot-max-w-full"), b(O, "fill", "currentColor"), b(O, "d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"), b(C, "class", "chatbot-h-4"), b(C, "viewBox", "0 0 24 24"), _.disabled = e[3], b(_, "type", "submit"), b(_, "class", "chatbot-btn chatbot-btn-md"), b(y, "class", "chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full"), b(B, "class", "chatbot-text-gray-500"), b(T, "class", "chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full"), b(n, "class", "chatbot-card-body"), b(t, "class", "chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans");
    },
    m(d, H) {
      L(d, t, H), g(t, n), g(n, l), g(l, i), g(i, s), g(s, o), g(l, r), g(l, u), g(u, a), g(u, h), g(u, m), g(u, w), g(n, k), g(n, E), ut(S, E, null), g(n, p), g(n, T), g(T, J);
      for (let Y = 0; Y < j.length; Y += 1)
        j[Y] && j[Y].m(J, null);
      g(T, R), g(T, y), g(y, N), jt(N, e[7]), g(y, q), g(y, _), g(_, C), g(C, O), g(T, X), g(T, B), Z && Z.m(B, null), I = !0, D || (ht = [
        K(N, "input", e[14]),
        K(y, "submit", ie(e[9]))
      ], D = !0);
    },
    p(d, [H]) {
      (!I || H & 2 && !Bt(o.src, c = d[1])) && b(o, "src", c), (!I || H & 32) && Ft(i, "chatbot-online", d[5]), (!I || H & 1) && rt(a, d[0]), (!I || H & 32) && f !== (f = d[5] ? "online" : "offline") && rt(m, f);
      const Y = {};
      if (H & 256 && (Y.items = d[8]), H & 557060 && (Y.$$scope = { dirty: H, ctx: d }), !z && H & 16 && (z = !0, Y.scrollToIndex = d[4], ue(() => z = !1)), S.$set(Y), H & 192) {
        x = d[6];
        let P;
        for (P = 0; P < x.length; P += 1) {
          const qt = Zt(d, x, P);
          j[P] ? j[P].p(qt, H) : (j[P] = Qt(qt), j[P].c(), j[P].m(J, null));
        }
        for (; P < j.length; P += 1)
          j[P].d(1);
        j.length = x.length;
      }
      H & 128 && N.value !== d[7] && jt(N, d[7]), (!I || H & 8) && (_.disabled = d[3]), Z && Z.p && (!I || H & 32768) && Ht(
        Z,
        Mt,
        d,
        d[15],
        I ? At(Mt, d[15], H, null) : Et(d[15]),
        null
      );
    },
    i(d) {
      I || (A(S.$$.fragment, d), A(Z, d), I = !0);
    },
    o(d) {
      F(S.$$.fragment, d), F(Z, d), I = !1;
    },
    d(d) {
      d && M(t), ft(S), Ut(j, d), Z && Z.d(d), D = !1, U(ht);
    }
  };
}
function He(e, t, n) {
  let { $$slots: l = {}, $$scope: i } = t, { endpoint: s } = t, { botName: o } = t, { botAvatar: c } = t, { mainColor: r } = t, u = !1, a, h = !0, f = ["Where is the venue?", "Things to do"];
  xt(() => {
    const p = localStorage.getItem("messages");
    p && n(8, k = JSON.parse(p));
    const T = localStorage.getItem("suggestions");
    T && n(6, f = JSON.parse(T));
  });
  async function m() {
    try {
      if (w.trim() === "")
        return;
      n(3, u = !0), n(8, k = [
        ...k,
        {
          text: w,
          type: "end",
          sources: []
        },
        {
          text: "...is writing",
          type: "start",
          loading: !0,
          sources: []
        }
      ]), await et(), await et(), a(k.length - 1);
      const p = w;
      n(7, w = "");
      const T = await fetch(s, {
        body: JSON.stringify({ text: p }),
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (!T.ok) {
        n(
          8,
          k[k.length - 1] = {
            text: "I don't understand",
            type: "start",
            sources: []
          },
          k
        );
        return;
      }
      const J = await T.json();
      n(
        8,
        k[k.length - 1] = {
          text: J.text,
          type: "start",
          sources: J.sources
        },
        k
      ), n(6, f = J.suggestions), localStorage.setItem("messages", JSON.stringify(k)), localStorage.setItem("suggestions", JSON.stringify(f));
    } catch (p) {
      console.error(p), n(
        8,
        k[k.length - 1] = {
          text: "Humm \u{1F914}... It seems that your message did not find the correct wire.",
          type: "start",
          sources: []
        },
        k
      ), n(5, h = !1);
    } finally {
      await et(), await et(), a(k.length - 1), n(3, u = !1);
    }
  }
  let w = "", k = [
    {
      text: `Hello \u{1F44B} ! I'm ${o} the bot! I can help you with your questions. Just ask me!`,
      type: "start",
      sources: []
    }
  ];
  function E(p) {
    a = p, n(4, a);
  }
  const S = (p) => n(7, w = p);
  function z() {
    w = this.value, n(7, w);
  }
  return e.$$set = (p) => {
    "endpoint" in p && n(10, s = p.endpoint), "botName" in p && n(0, o = p.botName), "botAvatar" in p && n(1, c = p.botAvatar), "mainColor" in p && n(2, r = p.mainColor), "$$scope" in p && n(15, i = p.$$scope);
  }, [
    o,
    c,
    r,
    u,
    a,
    h,
    f,
    w,
    k,
    m,
    s,
    l,
    E,
    S,
    z,
    i
  ];
}
class Ee extends Ct {
  constructor(t) {
    super(), kt(this, t, He, Ae, pt, {
      endpoint: 10,
      botName: 0,
      botAvatar: 1,
      mainColor: 2
    });
  }
}
function Rt(e) {
  let t, n;
  return t = new Ee({
    props: {
      endpoint: e[0],
      botName: e[1],
      botAvatar: e[2],
      mainColor: e[3],
      $$slots: { default: [qe] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      yt(t.$$.fragment);
    },
    m(l, i) {
      ut(t, l, i), n = !0;
    },
    p(l, i) {
      const s = {};
      i & 1 && (s.endpoint = l[0]), i & 2 && (s.botName = l[1]), i & 4 && (s.botAvatar = l[2]), i & 8 && (s.mainColor = l[3]), i & 144 && (s.$$scope = { dirty: i, ctx: l }), t.$set(s);
    },
    i(l) {
      n || (A(t.$$.fragment, l), n = !0);
    },
    o(l) {
      F(t.$$.fragment, l), n = !1;
    },
    d(l) {
      ft(t, l);
    }
  };
}
function qe(e) {
  let t;
  return {
    c() {
      t = v("p");
    },
    m(n, l) {
      L(n, t, l), t.innerHTML = e[4];
    },
    p(n, l) {
      l & 16 && (t.innerHTML = n[4]);
    },
    d(n) {
      n && M(t);
    }
  };
}
function Oe(e) {
  let t, n;
  return {
    c() {
      t = ot("svg"), n = ot("path"), b(n, "d", "M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"), b(t, "class", "chatbot-h-10"), b(t, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      L(l, t, i), g(t, n);
    },
    d(l) {
      l && M(t);
    }
  };
}
function Be(e) {
  let t, n;
  return {
    c() {
      t = ot("svg"), n = ot("path"), b(n, "d", "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"), b(t, "class", "chatbot-h-10"), b(t, "viewBox", "0 0 24 24");
    },
    m(l, i) {
      L(l, t, i), g(t, n);
    },
    d(l) {
      l && M(t);
    }
  };
}
function je(e) {
  let t, n, l, i, s, o = e[5] && Rt(e);
  function c(a, h) {
    return a[5] ? Be : Oe;
  }
  let r = c(e), u = r(e);
  return {
    c() {
      o && o.c(), t = W(), n = v("button"), u.c(), V(n, "background-color", e[3]), b(n, "class", "chatbot-flex chatbot-items-center chatbot-justify-center chatbot-rounded-full chatbot-p-4 chatbot-h-20 chatbot-aspect-square chatbot-fixed chatbot-bottom-5 chatbot-right-5 chatbot-fill-white chatbot-hover:scale-110 chatbot-transition-transform chatbot-shadow");
    },
    m(a, h) {
      o && o.m(a, h), L(a, t, h), L(a, n, h), u.m(n, null), l = !0, i || (s = K(n, "click", e[6]), i = !0);
    },
    p(a, [h]) {
      a[5] ? o ? (o.p(a, h), h & 32 && A(o, 1)) : (o = Rt(a), o.c(), A(o, 1), o.m(t.parentNode, t)) : o && (wt(), F(o, 1, 1, () => {
        o = null;
      }), vt()), r !== (r = c(a)) && (u.d(1), u = r(a), u && (u.c(), u.m(n, null))), (!l || h & 8) && V(n, "background-color", a[3]);
    },
    i(a) {
      l || (A(o), l = !0);
    },
    o(a) {
      F(o), l = !1;
    },
    d(a) {
      o && o.d(a), a && M(t), a && M(n), u.d(), i = !1, s();
    }
  };
}
function Fe(e, t, n) {
  let l = !1, { endpoint: i = "http://127.0.0.1:3000/chat" } = t, { botName: s = "Ibentau Assistant" } = t, { botAvatar: o = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2" } = t, { mainColor: c = "#00bfa5" } = t, { footer: r = "Powered by Ibentau" } = t;
  const u = () => n(5, l = !l);
  return e.$$set = (a) => {
    "endpoint" in a && n(0, i = a.endpoint), "botName" in a && n(1, s = a.botName), "botAvatar" in a && n(2, o = a.botAvatar), "mainColor" in a && n(3, c = a.mainColor), "footer" in a && n(4, r = a.footer);
  }, [i, s, o, c, r, l, u];
}
class Je extends Ct {
  constructor(t) {
    super(), kt(this, t, Fe, je, pt, {
      endpoint: 0,
      botName: 1,
      botAvatar: 2,
      mainColor: 3,
      footer: 4
    });
  }
}
window.ChatBot = Je;
