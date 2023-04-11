function ft() {
}
function Rt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Ot(t) {
  return t();
}
function Ct() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(Ot);
}
function Bt(t) {
  return typeof t == "function";
}
function mt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let rt;
function Lt(t, e) {
  return rt || (rt = document.createElement("a")), rt.href = e, t === rt.href;
}
function Yt(t) {
  return Object.keys(t).length === 0;
}
function Gt(t, e, n, l) {
  if (t) {
    const o = jt(t, e, n, l);
    return t[0](o);
  }
}
function jt(t, e, n, l) {
  return t[1] && l ? Rt(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function Kt(t, e, n, l) {
  if (t[2] && l) {
    const o = t[2](l(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const c = [], i = Math.max(e.dirty.length, o.length);
      for (let f = 0; f < i; f += 1)
        c[f] = e.dirty[f] | o[f];
      return c;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function Ut(t, e, n, l, o, c) {
  if (o) {
    const i = jt(e, n, l, c);
    t.p(i, o);
  }
}
function Xt(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function g(t, e) {
  t.appendChild(e);
}
function V(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Jt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function v(t) {
  return document.createElement(t);
}
function Q(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function J(t) {
  return document.createTextNode(t);
}
function F() {
  return J(" ");
}
function $t() {
  return J("");
}
function K(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function te(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function d(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function _t(t, e, n) {
  e in t ? t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n : d(t, e, n);
}
function ee(t) {
  return Array.from(t.childNodes);
}
function ot(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ht(t, e) {
  t.value = e == null ? "" : e;
}
function O(t, e, n, l) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
let at;
function ne() {
  if (at === void 0) {
    at = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      at = !0;
    }
  }
  return at;
}
function le(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const l = v("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const o = ne();
  let c;
  return o ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", c = K(window, "message", (i) => {
    i.source === l.contentWindow && e();
  })) : (l.src = "about:blank", l.onload = () => {
    c = K(l.contentWindow, "resize", e), e();
  }), g(t, l), () => {
    (o || c && l.contentWindow) && c(), N(l);
  };
}
function Nt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let it;
function lt(t) {
  it = t;
}
function oe() {
  if (!it)
    throw new Error("Function called outside component initialization");
  return it;
}
function zt(t) {
  oe().$$.on_mount.push(t);
}
const tt = [], st = [];
let nt = [];
const bt = [], Pt = /* @__PURE__ */ Promise.resolve();
let gt = !1;
function Wt() {
  gt || (gt = !0, Pt.then(Zt));
}
function et() {
  return Wt(), Pt;
}
function ht(t) {
  nt.push(t);
}
function ie(t) {
  bt.push(t);
}
const dt = /* @__PURE__ */ new Set();
let $ = 0;
function Zt() {
  if ($ !== 0)
    return;
  const t = it;
  do {
    try {
      for (; $ < tt.length; ) {
        const e = tt[$];
        $++, lt(e), se(e.$$);
      }
    } catch (e) {
      throw tt.length = 0, $ = 0, e;
    }
    for (lt(null), tt.length = 0, $ = 0; st.length; )
      st.pop()();
    for (let e = 0; e < nt.length; e += 1) {
      const n = nt[e];
      dt.has(n) || (dt.add(n), n());
    }
    nt.length = 0;
  } while (tt.length);
  for (; bt.length; )
    bt.pop()();
  gt = !1, dt.clear(), lt(t);
}
function se(t) {
  if (t.fragment !== null) {
    t.update(), X(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(ht);
  }
}
function ce(t) {
  const e = [], n = [];
  nt.forEach((l) => t.indexOf(l) === -1 ? e.push(l) : n.push(l)), n.forEach((l) => l()), nt = e;
}
const ut = /* @__PURE__ */ new Set();
let G;
function Dt() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function Ft() {
  G.r || X(G.c), G = G.p;
}
function R(t, e) {
  t && t.i && (ut.delete(t), t.i(e));
}
function U(t, e, n, l) {
  if (t && t.o) {
    if (ut.has(t))
      return;
    ut.add(t), G.c.push(() => {
      ut.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function re(t, e) {
  U(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ae(t, e, n, l, o, c, i, f, h, s, u, r) {
  let a = t.length, _ = c.length, C = a;
  const B = {};
  for (; C--; )
    B[t[C].key] = C;
  const S = [], m = /* @__PURE__ */ new Map(), L = /* @__PURE__ */ new Map(), I = [];
  for (C = _; C--; ) {
    const w = r(o, c, C), k = n(w);
    let T = i.get(k);
    T ? l && I.push(() => T.p(w, e)) : (T = s(k, w), T.c()), m.set(k, S[C] = T), k in B && L.set(k, Math.abs(C - B[k]));
  }
  const j = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  function W(w) {
    R(w, 1), w.m(f, u), i.set(w.key, w), u = w.first, _--;
  }
  for (; a && _; ) {
    const w = S[_ - 1], k = t[a - 1], T = w.key, b = k.key;
    w === k ? (u = w.first, a--, _--) : m.has(b) ? !i.has(T) || j.has(T) ? W(w) : z.has(b) ? a-- : L.get(T) > L.get(b) ? (z.add(T), W(w)) : (j.add(b), a--) : (h(k, i), a--);
  }
  for (; a--; ) {
    const w = t[a];
    m.has(w.key) || h(w, i);
  }
  for (; _; )
    W(S[_ - 1]);
  return X(I), S;
}
function ue(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function Qt(t) {
  t && t.c();
}
function pt(t, e, n, l) {
  const { fragment: o, after_update: c } = t.$$;
  o && o.m(e, n), l || ht(() => {
    const i = t.$$.on_mount.map(Ot).filter(Bt);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : X(i), t.$$.on_mount = [];
  }), c.forEach(ht);
}
function wt(t, e) {
  const n = t.$$;
  n.fragment !== null && (ce(n.after_update), X(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function fe(t, e) {
  t.$$.dirty[0] === -1 && (tt.push(t), Wt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function vt(t, e, n, l, o, c, i, f = [-1]) {
  const h = it;
  lt(t);
  const s = t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: ft,
    not_equal: o,
    bound: Ct(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (h ? h.$$.context : [])),
    callbacks: Ct(),
    dirty: f,
    skip_bound: !1,
    root: e.target || h.$$.root
  };
  i && i(s.root);
  let u = !1;
  if (s.ctx = n ? n(t, e.props || {}, (r, a, ..._) => {
    const C = _.length ? _[0] : a;
    return s.ctx && o(s.ctx[r], s.ctx[r] = C) && (!s.skip_bound && s.bound[r] && s.bound[r](C), u && fe(t, r)), a;
  }) : [], s.update(), u = !0, X(s.before_update), s.fragment = l ? l(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const r = ee(e.target);
      s.fragment && s.fragment.l(r), r.forEach(N);
    } else
      s.fragment && s.fragment.c();
    e.intro && R(t.$$.fragment), pt(t, e.target, e.anchor, e.customElement), Zt();
  }
  lt(h);
}
class yt {
  $destroy() {
    wt(this, 1), this.$destroy = ft;
  }
  $on(e, n) {
    if (!Bt(n))
      return ft;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const o = l.indexOf(n);
      o !== -1 && l.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !Yt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function St(t, e, n) {
  const l = t.slice();
  return l[23] = e[n], l;
}
const he = (t) => ({ item: t & 16 }), Tt = (t) => ({ item: t[23].data });
function de(t) {
  let e;
  return {
    c() {
      e = J("Missing template");
    },
    m(n, l) {
      V(n, e, l);
    },
    d(n) {
      n && N(e);
    }
  };
}
function At(t, e) {
  let n, l, o;
  const c = e[15].default, i = Gt(c, e, e[14], Tt), f = i || de();
  return {
    key: t,
    first: null,
    c() {
      n = v("svelte-virtual-list-row"), f && f.c(), l = F(), _t(n, "class", "svelte-1tqh76q"), this.first = n;
    },
    m(h, s) {
      V(h, n, s), f && f.m(n, null), g(n, l), o = !0;
    },
    p(h, s) {
      e = h, i && i.p && (!o || s & 16400) && Ut(
        i,
        c,
        e,
        e[14],
        o ? Kt(c, e[14], s, he) : Xt(e[14]),
        Tt
      );
    },
    i(h) {
      o || (R(f, h), o = !0);
    },
    o(h) {
      U(f, h), o = !1;
    },
    d(h) {
      h && N(n), f && f.d(h);
    }
  };
}
function _e(t) {
  let e, n, l = [], o = /* @__PURE__ */ new Map(), c, i, f, h, s = t[4];
  const u = (r) => r[23].index;
  for (let r = 0; r < s.length; r += 1) {
    let a = St(t, s, r), _ = u(a);
    o.set(_, l[r] = At(_, a));
  }
  return {
    c() {
      e = v("svelte-virtual-list-viewport"), n = v("svelte-virtual-list-contents");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      O(n, "padding-top", t[5] + "px"), O(n, "padding-bottom", t[6] + "px"), _t(n, "class", "svelte-1tqh76q"), O(e, "height", t[0]), _t(e, "class", "svelte-1tqh76q"), ht(() => t[18].call(e));
    },
    m(r, a) {
      V(r, e, a), g(e, n);
      for (let _ = 0; _ < l.length; _ += 1)
        l[_] && l[_].m(n, null);
      t[16](n), t[17](e), c = le(e, t[18].bind(e)), i = !0, f || (h = K(e, "scroll", t[7]), f = !0);
    },
    p(r, [a]) {
      a & 16400 && (s = r[4], Dt(), l = ae(l, a, u, 1, r, s, o, n, re, At, null, St), Ft()), (!i || a & 32) && O(n, "padding-top", r[5] + "px"), (!i || a & 64) && O(n, "padding-bottom", r[6] + "px"), (!i || a & 1) && O(e, "height", r[0]);
    },
    i(r) {
      if (!i) {
        for (let a = 0; a < s.length; a += 1)
          R(l[a]);
        i = !0;
      }
    },
    o(r) {
      for (let a = 0; a < l.length; a += 1)
        U(l[a]);
      i = !1;
    },
    d(r) {
      r && N(e);
      for (let a = 0; a < l.length; a += 1)
        l[a].d();
      t[16](null), t[17](null), c(), f = !1, h();
    }
  };
}
function be(t, e, n) {
  let { $$slots: l = {}, $$scope: o } = e, { items: c } = e, { height: i = "100%" } = e, { itemHeight: f = void 0 } = e, { start: h = 0 } = e, { end: s = 0 } = e, u = [], r, a, _, C = 0, B, S, m = 0, L = 0, I;
  async function j(b, y, A) {
    b.length < h && await W(b.length - 1, { behavior: "auto" });
    const { scrollTop: M } = a;
    await et();
    let Y = m - M, Z = h;
    for (; Y < y && Z < b.length; ) {
      let P = r[Z - h];
      P || (n(9, s = Z + 1), await et(), P = r[Z - h]);
      const H = u[Z] = A || P.offsetHeight;
      Y += H, Z += 1;
    }
    n(9, s = Z);
    const ct = b.length - s;
    I = (m + Y) / s, n(6, L = ct * I), u.length = b.length;
  }
  async function z() {
    const { scrollTop: b } = a;
    for (let M = 0; M < r.length; M += 1)
      u[h + M] = f || r[M].offsetHeight;
    let y = 0, A = 0;
    for (; y < c.length; ) {
      const M = u[y] || I;
      if (A + M > b) {
        n(8, h = y), n(5, m = A);
        break;
      }
      A += M, y += 1;
    }
    for (; y < c.length && (A += u[y] || I, y += 1, !(A > b + C)); )
      ;
    n(9, s = y);
    const q = c.length - s;
    for (I = A / s; y < c.length; )
      u[y++] = I;
    n(6, L = q * I);
  }
  async function W(b, y) {
    const { scrollTop: A } = a, Y = (b - h) * (f || I);
    y = {
      left: 0,
      top: A + Y,
      behavior: "smooth",
      ...y
    }, a.scrollTo(y);
  }
  zt(() => {
    r = _.getElementsByTagName("svelte-virtual-list-row"), n(13, S = !0);
  });
  function w(b) {
    st[b ? "unshift" : "push"](() => {
      _ = b, n(3, _);
    });
  }
  function k(b) {
    st[b ? "unshift" : "push"](() => {
      a = b, n(2, a);
    });
  }
  function T() {
    C = this.offsetHeight, n(1, C);
  }
  return t.$$set = (b) => {
    "items" in b && n(10, c = b.items), "height" in b && n(0, i = b.height), "itemHeight" in b && n(11, f = b.itemHeight), "start" in b && n(8, h = b.start), "end" in b && n(9, s = b.end), "$$scope" in b && n(14, o = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & 1792 && n(4, B = c.slice(h, s).map((b, y) => ({ index: y + h, data: b }))), t.$$.dirty & 11266 && S && j(c, C, f);
  }, [
    i,
    C,
    a,
    _,
    B,
    m,
    L,
    z,
    h,
    s,
    c,
    f,
    W,
    S,
    o,
    l,
    w,
    k,
    T
  ];
}
class ge extends yt {
  constructor(e) {
    super(), vt(this, e, be, _e, mt, {
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
function It(t, e, n) {
  const l = t.slice();
  return l[14] = e[n], l;
}
function Mt(t, e, n) {
  const l = t.slice();
  return l[18] = e[n], l;
}
function me(t) {
  let e, n, l, o = t[17].text + "", c, i, f, h, s = t[17].buttons && Et(t);
  return {
    c() {
      e = v("div"), n = v("div"), l = v("div"), c = J(o), h = F(), s && s.c(), O(l, "background-color", t[17].type === "end" ? t[2] : ""), d(l, "class", i = `chatbot-chat-bubble ${t[17].type === "end", ""}`), d(n, "class", f = `chatbot-chat chatbot-chat-${t[17].type}`);
    },
    m(u, r) {
      V(u, e, r), g(e, n), g(n, l), g(l, c), g(e, h), s && s.m(e, null);
    },
    p(u, r) {
      r & 131072 && o !== (o = u[17].text + "") && ot(c, o), r & 131076 && O(l, "background-color", u[17].type === "end" ? u[2] : ""), r & 131072 && i !== (i = `chatbot-chat-bubble ${u[17].type === "end", ""}`) && d(l, "class", i), r & 131072 && f !== (f = `chatbot-chat chatbot-chat-${u[17].type}`) && d(n, "class", f), u[17].buttons ? s ? s.p(u, r) : (s = Et(u), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(u) {
      u && N(e), s && s.d();
    }
  };
}
function pe(t) {
  let e;
  return {
    c() {
      e = v("div"), e.innerHTML = `<div class="chatbot-chat-bubble chatbot-flex chatbot-space-x-2 chatbot-items-center"><div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.1s;"></div> 
                            <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.2s;"></div> 
                            <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.3s;"></div></div>`, d(e, "class", "chatbot-chat chatbot-chat-start");
    },
    m(n, l) {
      V(n, e, l);
    },
    p: ft,
    d(n) {
      n && N(e);
    }
  };
}
function Et(t) {
  let e, n = t[17].buttons, l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = Vt(Mt(t, n, o));
  return {
    c() {
      e = v("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      d(e, "class", "chatbot-flex chatbot-gap-2");
    },
    m(o, c) {
      V(o, e, c);
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(e, null);
    },
    p(o, c) {
      if (c & 131076) {
        n = o[17].buttons;
        let i;
        for (i = 0; i < n.length; i += 1) {
          const f = Mt(o, n, i);
          l[i] ? l[i].p(f, c) : (l[i] = Vt(f), l[i].c(), l[i].m(e, null));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    d(o) {
      o && N(e), Jt(l, o);
    }
  };
}
function Vt(t) {
  let e, n, l, o, c, i, f, h = t[18].text + "", s, u;
  return {
    c() {
      e = v("a"), n = Q("svg"), l = Q("title"), o = J("open-in-new"), c = Q("path"), i = F(), f = v("span"), s = J(h), d(c, "d", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"), d(n, "class", "chatbot-h-4 chatbot-fill-current"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(n, "viewBox", "0 0 24 24"), O(e, "background-color", t[2]), d(e, "href", u = t[18].value), d(e, "target", "_blank"), d(e, "class", "chatbot-btn chatbot-btn-sm chatbot-space-x-2");
    },
    m(r, a) {
      V(r, e, a), g(e, n), g(n, l), g(l, o), g(n, c), g(e, i), g(e, f), g(f, s);
    },
    p(r, a) {
      a & 131072 && h !== (h = r[18].text + "") && ot(s, h), a & 4 && O(e, "background-color", r[2]), a & 131072 && u !== (u = r[18].value) && d(e, "href", u);
    },
    d(r) {
      r && N(e);
    }
  };
}
function we(t) {
  let e;
  function n(c, i) {
    return c[17].loading ? pe : me;
  }
  let l = n(t), o = l(t);
  return {
    c() {
      o.c(), e = $t();
    },
    m(c, i) {
      o.m(c, i), V(c, e, i);
    },
    p(c, i) {
      l === (l = n(c)) && o ? o.p(c, i) : (o.d(1), o = l(c), o && (o.c(), o.m(e.parentNode, e)));
    },
    d(c) {
      o.d(c), c && N(e);
    }
  };
}
function qt(t) {
  let e, n = t[14] + "", l, o, c;
  function i() {
    return t[12](t[14]);
  }
  return {
    c() {
      e = v("button"), l = J(n), d(e, "class", "chatbot-btn chatbot-btn-outline chatbot-btn-xs chatbot-break-words chatbot-max-w-full");
    },
    m(f, h) {
      V(f, e, h), g(e, l), o || (c = K(e, "click", i), o = !0);
    },
    p(f, h) {
      t = f, h & 64 && n !== (n = t[14] + "") && ot(l, n);
    },
    d(f) {
      f && N(e), o = !1, c();
    }
  };
}
function ve(t) {
  let e, n, l, o, c, i, f, h, s, u, r, a = t[5] ? "online" : "offline", _, C, B, S, m, L, I, j, z, W, w, k, T, b, y, A, q, M, Y;
  function Z(p) {
    t[11](p);
  }
  let ct = {
    items: t[8],
    $$slots: {
      default: [
        we,
        ({ item: p }) => ({ 17: p }),
        ({ item: p }) => p ? 131072 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  t[4] !== void 0 && (ct.scrollToIndex = t[4]), m = new ge({ props: ct }), st.push(() => ue(m, "scrollToIndex", Z));
  let P = t[6], H = [];
  for (let p = 0; p < P.length; p += 1)
    H[p] = qt(It(t, P, p));
  return {
    c() {
      e = v("div"), n = v("div"), l = v("h2"), o = v("div"), c = v("div"), i = v("img"), h = F(), s = v("span"), u = J(t[0]), r = J(" is "), _ = J(a), C = J(" !"), B = F(), S = v("div"), Qt(m.$$.fragment), I = F(), j = v("div"), z = v("div");
      for (let p = 0; p < H.length; p += 1)
        H[p].c();
      W = F(), w = v("form"), k = v("input"), T = F(), b = v("button"), y = Q("svg"), A = Q("path"), d(i, "alt", "Bot Avatar"), Lt(i.src, f = t[1]) || d(i, "src", f), d(c, "class", "chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8"), d(o, "class", "chatbot-avatar chatbot-placeholder"), Nt(o, "chatbot-online", t[5]), d(l, "class", "chatbot-card-title"), d(S, "class", "chatbot-h-60"), d(z, "class", "chatbot-gap-2 chatbot-flex chatbot-flex-wrap"), d(k, "maxlength", "200"), d(k, "type", "text"), d(k, "placeholder", "Type here"), d(k, "class", "chatbot-input chatbot-w-full chatbot-max-w-full"), d(A, "fill", "currentColor"), d(A, "d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"), d(y, "class", "chatbot-h-4"), d(y, "viewBox", "0 0 24 24"), b.disabled = t[3], d(b, "type", "submit"), d(b, "class", "chatbot-btn chatbot-btn-md"), d(w, "class", "chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full"), d(j, "class", "chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full"), d(n, "class", "chatbot-card-body"), d(e, "class", "chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans");
    },
    m(p, E) {
      V(p, e, E), g(e, n), g(n, l), g(l, o), g(o, c), g(c, i), g(l, h), g(l, s), g(s, u), g(s, r), g(s, _), g(s, C), g(n, B), g(n, S), pt(m, S, null), g(n, I), g(n, j), g(j, z);
      for (let D = 0; D < H.length; D += 1)
        H[D] && H[D].m(z, null);
      g(j, W), g(j, w), g(w, k), Ht(k, t[7]), g(w, T), g(w, b), g(b, y), g(y, A), q = !0, M || (Y = [
        K(k, "input", t[13]),
        K(w, "submit", te(t[9]))
      ], M = !0);
    },
    p(p, [E]) {
      (!q || E & 2 && !Lt(i.src, f = p[1])) && d(i, "src", f), (!q || E & 32) && Nt(o, "chatbot-online", p[5]), (!q || E & 1) && ot(u, p[0]), (!q || E & 32) && a !== (a = p[5] ? "online" : "offline") && ot(_, a);
      const D = {};
      if (E & 256 && (D.items = p[8]), E & 2228228 && (D.$$scope = { dirty: E, ctx: p }), !L && E & 16 && (L = !0, D.scrollToIndex = p[4], ie(() => L = !1)), m.$set(D), E & 192) {
        P = p[6];
        let x;
        for (x = 0; x < P.length; x += 1) {
          const kt = It(p, P, x);
          H[x] ? H[x].p(kt, E) : (H[x] = qt(kt), H[x].c(), H[x].m(z, null));
        }
        for (; x < H.length; x += 1)
          H[x].d(1);
        H.length = P.length;
      }
      E & 128 && k.value !== p[7] && Ht(k, p[7]), (!q || E & 8) && (b.disabled = p[3]);
    },
    i(p) {
      q || (R(m.$$.fragment, p), q = !0);
    },
    o(p) {
      U(m.$$.fragment, p), q = !1;
    },
    d(p) {
      p && N(e), wt(m), Jt(H, p), M = !1, X(Y);
    }
  };
}
function ye(t, e, n) {
  let { endpoint: l } = e, { botName: o } = e, { botAvatar: c } = e, { mainColor: i } = e, f = !1, h, s = !0, u = ["Where is the venue?", "Things to do"];
  zt(() => {
    const m = localStorage.getItem("messages");
    m && n(8, _ = JSON.parse(m));
    const L = localStorage.getItem("suggestions");
    L && n(6, u = JSON.parse(L));
  });
  async function r() {
    try {
      if (a.trim() === "")
        return;
      n(3, f = !0), n(8, _ = [
        ..._,
        { text: a, type: "end" },
        {
          text: "...is writing",
          type: "start",
          loading: !0
        }
      ]), await et(), await et(), h(_.length - 1);
      const m = await fetch(l, {
        body: JSON.stringify({ text: a }),
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });
      if (n(7, a = ""), !m.ok) {
        n(
          8,
          _[_.length - 1] = {
            text: "I don't understand",
            type: "start"
          },
          _
        );
        return;
      }
      const L = await m.json();
      n(
        8,
        _[_.length - 1] = {
          text: L.text,
          type: "start",
          buttons: []
        },
        _
      ), n(6, u = L.suggestions), localStorage.setItem("messages", JSON.stringify(_)), localStorage.setItem("suggestions", JSON.stringify(u));
    } catch (m) {
      console.error(m), n(
        8,
        _[_.length - 1] = {
          text: "Humm \u{1F914}... It seems that your message did not find the correct wire.",
          type: "start"
        },
        _
      ), n(5, s = !1);
    } finally {
      await et(), await et(), h(_.length - 1), n(3, f = !1);
    }
  }
  let a = "", _ = [
    {
      text: `Hello \u{1F44B} ! I'm ${o} the bot! I can help you with your questions. Just ask me!`,
      type: "start"
    }
  ];
  function C(m) {
    h = m, n(4, h);
  }
  const B = (m) => n(7, a = m);
  function S() {
    a = this.value, n(7, a);
  }
  return t.$$set = (m) => {
    "endpoint" in m && n(10, l = m.endpoint), "botName" in m && n(0, o = m.botName), "botAvatar" in m && n(1, c = m.botAvatar), "mainColor" in m && n(2, i = m.mainColor);
  }, [
    o,
    c,
    i,
    f,
    h,
    s,
    u,
    a,
    _,
    r,
    l,
    C,
    B,
    S
  ];
}
class ke extends yt {
  constructor(e) {
    super(), vt(this, e, ye, ve, mt, {
      endpoint: 10,
      botName: 0,
      botAvatar: 1,
      mainColor: 2
    });
  }
}
function xt(t) {
  let e, n;
  return e = new ke({
    props: {
      endpoint: t[0],
      botName: t[1],
      botAvatar: t[2],
      mainColor: t[3]
    }
  }), {
    c() {
      Qt(e.$$.fragment);
    },
    m(l, o) {
      pt(e, l, o), n = !0;
    },
    p(l, o) {
      const c = {};
      o & 1 && (c.endpoint = l[0]), o & 2 && (c.botName = l[1]), o & 4 && (c.botAvatar = l[2]), o & 8 && (c.mainColor = l[3]), e.$set(c);
    },
    i(l) {
      n || (R(e.$$.fragment, l), n = !0);
    },
    o(l) {
      U(e.$$.fragment, l), n = !1;
    },
    d(l) {
      wt(e, l);
    }
  };
}
function Ce(t) {
  let e, n;
  return {
    c() {
      e = Q("svg"), n = Q("path"), d(n, "d", "M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"), d(e, "class", "chatbot-h-10"), d(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      V(l, e, o), g(e, n);
    },
    d(l) {
      l && N(e);
    }
  };
}
function Le(t) {
  let e, n;
  return {
    c() {
      e = Q("svg"), n = Q("path"), d(n, "d", "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"), d(e, "class", "chatbot-h-10"), d(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      V(l, e, o), g(e, n);
    },
    d(l) {
      l && N(e);
    }
  };
}
function He(t) {
  let e, n, l, o, c, i = t[4] && xt(t);
  function f(u, r) {
    return u[4] ? Le : Ce;
  }
  let h = f(t), s = h(t);
  return {
    c() {
      i && i.c(), e = F(), n = v("button"), s.c(), O(n, "background-color", t[3]), d(n, "class", "chatbot-flex chatbot-items-center chatbot-justify-center chatbot-rounded-full chatbot-p-4 chatbot-h-20 chatbot-aspect-square chatbot-fixed chatbot-bottom-5 chatbot-right-5 chatbot-fill-white chatbot-hover:scale-110 chatbot-transition-transform chatbot-shadow");
    },
    m(u, r) {
      i && i.m(u, r), V(u, e, r), V(u, n, r), s.m(n, null), l = !0, o || (c = K(n, "click", t[5]), o = !0);
    },
    p(u, [r]) {
      u[4] ? i ? (i.p(u, r), r & 16 && R(i, 1)) : (i = xt(u), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (Dt(), U(i, 1, 1, () => {
        i = null;
      }), Ft()), h !== (h = f(u)) && (s.d(1), s = h(u), s && (s.c(), s.m(n, null))), (!l || r & 8) && O(n, "background-color", u[3]);
    },
    i(u) {
      l || (R(i), l = !0);
    },
    o(u) {
      U(i), l = !1;
    },
    d(u) {
      i && i.d(u), u && N(e), u && N(n), s.d(), o = !1, c();
    }
  };
}
function Ne(t, e, n) {
  let l = !1, { endpoint: o = "http://127.0.0.1:3000/chat" } = e, { botName: c = "Ibentau Assistant" } = e, { botAvatar: i = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2" } = e, { mainColor: f = "#00bfa5" } = e;
  const h = () => n(4, l = !l);
  return t.$$set = (s) => {
    "endpoint" in s && n(0, o = s.endpoint), "botName" in s && n(1, c = s.botName), "botAvatar" in s && n(2, i = s.botAvatar), "mainColor" in s && n(3, f = s.mainColor);
  }, [o, c, i, f, l, h];
}
class Se extends yt {
  constructor(e) {
    super(), vt(this, e, Ne, He, mt, {
      endpoint: 0,
      botName: 1,
      botAvatar: 2,
      mainColor: 3
    });
  }
}
window.ChatBot = Se;
