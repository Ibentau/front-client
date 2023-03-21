function ut() {}

function Rt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}

function Bt(t) {
  return t();
}

function Ct() {
  return /* @__PURE__ */ Object.create(null);
}

function et(t) {
  t.forEach(Bt);
}

function Ot(t) {
  return typeof t == "function";
}

function mt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}

let st;

function Lt(t, e) {
  return st || (st = document.createElement("a")), (st.href = e), t === st.href;
}

function Yt(t) {
  return Object.keys(t).length === 0;
}

function Gt(t, e, n, l) {
  if (t) {
    const o = xt(t, e, n, l);
    return t[0](o);
  }
}

function xt(t, e, n, l) {
  return t[1] && l ? Rt(n.ctx.slice(), t[1](l(e))) : n.ctx;
}

function Kt(t, e, n, l) {
  if (t[2] && l) {
    const o = t[2](l(n));
    if (e.dirty === void 0) return o;
    if (typeof o == "object") {
      const c = [],
        i = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < i; a += 1) c[a] = e.dirty[a] | o[a];
      return c;
    }
    return e.dirty | o;
  }
  return e.dirty;
}

function Ut(t, e, n, l, o, c) {
  if (o) {
    const i = xt(e, n, l, c);
    t.p(i, o);
  }
}

function Xt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let l = 0; l < n; l++) e[l] = -1;
    return e;
  }
  return -1;
}

function b(t, e) {
  t.appendChild(e);
}

function E(t, e, n) {
  t.insertBefore(e, n || null);
}

function M(t) {
  t.parentNode && t.parentNode.removeChild(t);
}

function zt(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}

function v(t) {
  return document.createElement(t);
}

function F(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}

function P(t) {
  return document.createTextNode(t);
}

function D() {
  return P(" ");
}

function $t() {
  return P("");
}

function K(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}

function te(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}

function d(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}

function _t(t, e, n) {
  e in t ? (t[e] = typeof t[e] == "boolean" && n === "" ? !0 : n) : d(t, e, n);
}

function ee(t) {
  return Array.from(t.childNodes);
}

function ft(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}

function Ht(t, e) {
  t.value = e == null ? "" : e;
}

function x(t, e, n, l) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, l ? "important" : "");
}

let ct;

function ne() {
  if (ct === void 0) {
    ct = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      ct = !0;
    }
  }
  return ct;
}

function le(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const l = v("iframe");
  l.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ),
    l.setAttribute("aria-hidden", "true"),
    (l.tabIndex = -1);
  const o = ne();
  let c;
  return (
    o
      ? ((l.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (c = K(window, "message", (i) => {
          i.source === l.contentWindow && e();
        })))
      : ((l.src = "about:blank"),
        (l.onload = () => {
          c = K(l.contentWindow, "resize", e);
        })),
    b(t, l),
    () => {
      (o || (c && l.contentWindow)) && c(), M(l);
    }
  );
}

function Tt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}

let lt;

function nt(t) {
  lt = t;
}

function oe() {
  if (!lt) throw new Error("Function called outside component initialization");
  return lt;
}

function Pt(t) {
  oe().$$.on_mount.push(t);
}

const $ = [],
  ot = [],
  rt = [],
  bt = [],
  Jt = Promise.resolve();
let gt = !1;

function Wt() {
  gt || ((gt = !0), Jt.then(Zt));
}

function tt() {
  return Wt(), Jt;
}

function ht(t) {
  rt.push(t);
}

function ie(t) {
  bt.push(t);
}

const dt = /* @__PURE__ */ new Set();
let X = 0;

function Zt() {
  if (X !== 0) return;
  const t = lt;
  do {
    try {
      for (; X < $.length; ) {
        const e = $[X];
        X++, nt(e), se(e.$$);
      }
    } catch (e) {
      throw (($.length = 0), (X = 0), e);
    }
    for (nt(null), $.length = 0, X = 0; ot.length; ) ot.pop()();
    for (let e = 0; e < rt.length; e += 1) {
      const n = rt[e];
      dt.has(n) || (dt.add(n), n());
    }
    rt.length = 0;
  } while ($.length);
  for (; bt.length; ) bt.pop()();
  (gt = !1), dt.clear(), nt(t);
}

function se(t) {
  if (t.fragment !== null) {
    t.update(), et(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(ht);
  }
}

const at = /* @__PURE__ */ new Set();
let G;

function Dt() {
  G = {
    r: 0,
    c: [],
    p: G,
  };
}

function Ft() {
  G.r || et(G.c), (G = G.p);
}

function Q(t, e) {
  t && t.i && (at.delete(t), t.i(e));
}

function U(t, e, n, l) {
  if (t && t.o) {
    if (at.has(t)) return;
    at.add(t),
      G.c.push(() => {
        at.delete(t), l && (n && t.d(1), l());
      }),
      t.o(e);
  } else l && l();
}

function ce(t, e) {
  U(t, 1, 1, () => {
    e.delete(t.key);
  });
}

function re(t, e, n, l, o, c, i, a, f, s, u, r) {
  let h = t.length,
    p = c.length,
    w = h;
  const y = {};
  for (; w--; ) y[t[w].key] = w;
  const I = [],
    T = /* @__PURE__ */ new Map(),
    j = /* @__PURE__ */ new Map();
  for (w = p; w--; ) {
    const k = r(o, c, w),
      H = n(k);
    let L = i.get(H);
    L ? l && L.p(k, e) : ((L = s(H, k)), L.c()),
      T.set(H, (I[w] = L)),
      H in y && j.set(H, Math.abs(w - y[H]));
  }
  const _ = /* @__PURE__ */ new Set(),
    A = /* @__PURE__ */ new Set();

  function z(k) {
    Q(k, 1), k.m(a, u), i.set(k.key, k), (u = k.first), p--;
  }

  for (; h && p; ) {
    const k = I[p - 1],
      H = t[h - 1],
      L = k.key,
      W = H.key;
    k === H
      ? ((u = k.first), h--, p--)
      : T.has(W)
      ? !i.has(L) || _.has(L)
        ? z(k)
        : A.has(W)
        ? h--
        : j.get(L) > j.get(W)
        ? (A.add(L), z(k))
        : (_.add(W), h--)
      : (f(H, i), h--);
  }
  for (; h--; ) {
    const k = t[h];
    T.has(k.key) || f(k, i);
  }
  for (; p; ) z(I[p - 1]);
  return I;
}

function ae(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && ((t.$$.bound[l] = n), n(t.$$.ctx[l]));
}

function Qt(t) {
  t && t.c();
}

function pt(t, e, n, l) {
  const { fragment: o, after_update: c } = t.$$;
  o && o.m(e, n),
    l ||
      ht(() => {
        const i = t.$$.on_mount.map(Bt).filter(Ot);
        t.$$.on_destroy ? t.$$.on_destroy.push(...i) : et(i),
          (t.$$.on_mount = []);
      }),
    c.forEach(ht);
}

function wt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (et(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}

function ue(t, e) {
  t.$$.dirty[0] === -1 && ($.push(t), Wt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}

function vt(t, e, n, l, o, c, i, a = [-1]) {
  const f = lt;
  nt(t);
  const s = (t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: ut,
    not_equal: o,
    bound: Ct(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (f ? f.$$.context : [])),
    callbacks: Ct(),
    dirty: a,
    skip_bound: !1,
    root: e.target || f.$$.root,
  });
  i && i(s.root);
  let u = !1;
  if (
    ((s.ctx = n
      ? n(t, e.props || {}, (r, h, ...p) => {
          const w = p.length ? p[0] : h;
          return (
            s.ctx &&
              o(s.ctx[r], (s.ctx[r] = w)) &&
              (!s.skip_bound && s.bound[r] && s.bound[r](w), u && ue(t, r)),
            h
          );
        })
      : []),
    s.update(),
    (u = !0),
    et(s.before_update),
    (s.fragment = l ? l(s.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const r = ee(e.target);
      s.fragment && s.fragment.l(r), r.forEach(M);
    } else s.fragment && s.fragment.c();
    e.intro && Q(t.$$.fragment),
      pt(t, e.target, e.anchor, e.customElement),
      Zt();
  }
  nt(f);
}

class yt {
  $destroy() {
    wt(this, 1), (this.$destroy = ut);
  }

  $on(e, n) {
    if (!Ot(n)) return ut;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      l.push(n),
      () => {
        const o = l.indexOf(n);
        o !== -1 && l.splice(o, 1);
      }
    );
  }

  $set(e) {
    this.$$set &&
      !Yt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}

function At(t, e, n) {
  const l = t.slice();
  return (l[23] = e[n]), l;
}

const fe = (t) => ({ item: t & 16 }),
  Nt = (t) => ({ item: t[23].data });

function he(t) {
  let e;
  return {
    c() {
      e = P("Missing template");
    },
    m(n, l) {
      E(n, e, l);
    },
    d(n) {
      n && M(e);
    },
  };
}

function Mt(t, e) {
  let n, l, o;
  const c = e[15].default,
    i = Gt(c, e, e[14], Nt),
    a = i || he();
  return {
    key: t,
    first: null,
    c() {
      (n = v("svelte-virtual-list-row")),
        a && a.c(),
        (l = D()),
        _t(n, "class", "svelte-1tqh76q"),
        (this.first = n);
    },
    m(f, s) {
      E(f, n, s), a && a.m(n, null), b(n, l), (o = !0);
    },
    p(f, s) {
      (e = f),
        i &&
          i.p &&
          (!o || s & 16400) &&
          Ut(i, c, e, e[14], o ? Kt(c, e[14], s, fe) : Xt(e[14]), Nt);
    },
    i(f) {
      o || (Q(a, f), (o = !0));
    },
    o(f) {
      U(a, f), (o = !1);
    },
    d(f) {
      f && M(n), a && a.d(f);
    },
  };
}

function de(t) {
  let e,
    n,
    l = [],
    o = /* @__PURE__ */ new Map(),
    c,
    i,
    a,
    f,
    s = t[4];
  const u = (r) => r[23].index;
  for (let r = 0; r < s.length; r += 1) {
    let h = At(t, s, r),
      p = u(h);
    o.set(p, (l[r] = Mt(p, h)));
  }
  return {
    c() {
      (e = v("svelte-virtual-list-viewport")),
        (n = v("svelte-virtual-list-contents"));
      for (let r = 0; r < l.length; r += 1) l[r].c();
      x(n, "padding-top", t[5] + "px"),
        x(n, "padding-bottom", t[6] + "px"),
        _t(n, "class", "svelte-1tqh76q"),
        x(e, "height", t[0]),
        _t(e, "class", "svelte-1tqh76q"),
        ht(() => t[18].call(e));
    },
    m(r, h) {
      E(r, e, h), b(e, n);
      for (let p = 0; p < l.length; p += 1) l[p].m(n, null);
      t[16](n),
        t[17](e),
        (c = le(e, t[18].bind(e))),
        (i = !0),
        a || ((f = K(e, "scroll", t[7])), (a = !0));
    },
    p(r, [h]) {
      h & 16400 &&
        ((s = r[4]),
        Dt(),
        (l = re(l, h, u, 1, r, s, o, n, ce, Mt, null, At)),
        Ft()),
        (!i || h & 32) && x(n, "padding-top", r[5] + "px"),
        (!i || h & 64) && x(n, "padding-bottom", r[6] + "px"),
        (!i || h & 1) && x(e, "height", r[0]);
    },
    i(r) {
      if (!i) {
        for (let h = 0; h < s.length; h += 1) Q(l[h]);
        i = !0;
      }
    },
    o(r) {
      for (let h = 0; h < l.length; h += 1) U(l[h]);
      i = !1;
    },
    d(r) {
      r && M(e);
      for (let h = 0; h < l.length; h += 1) l[h].d();
      t[16](null), t[17](null), c(), (a = !1), f();
    },
  };
}

function _e(t, e, n) {
  let { $$slots: l = {}, $$scope: o } = e,
    { items: c } = e,
    { height: i = "100%" } = e,
    { itemHeight: a = void 0 } = e,
    { start: f = 0 } = e,
    { end: s = 0 } = e,
    u = [],
    r,
    h,
    p,
    w = 0,
    y,
    I,
    T = 0,
    j = 0,
    _;

  async function A(g, C, S) {
    g.length < f && (await k(g.length - 1, { behavior: "auto" }));
    const { scrollTop: V } = h;
    await tt();
    let R = T - V,
      Z = f;
    for (; R < C && Z < g.length; ) {
      let J = r[Z - f];
      J || (n(9, (s = Z + 1)), await tt(), (J = r[Z - f]));
      const N = (u[Z] = S || J.offsetHeight);
      (R += N), (Z += 1);
    }
    n(9, (s = Z));
    const it = g.length - s;
    (_ = (T + R) / s), n(6, (j = it * _)), (u.length = g.length);
  }

  async function z() {
    const { scrollTop: g } = h;
    for (let V = 0; V < r.length; V += 1) u[f + V] = a || r[V].offsetHeight;
    let C = 0,
      S = 0;
    for (; C < c.length; ) {
      const V = u[C] || _;
      if (S + V > g) {
        n(8, (f = C)), n(5, (T = S));
        break;
      }
      (S += V), (C += 1);
    }
    for (; C < c.length && ((S += u[C] || _), (C += 1), !(S > g + w)); );
    n(9, (s = C));
    const B = c.length - s;
    for (_ = S / s; C < c.length; ) u[C++] = _;
    n(6, (j = B * _));
  }

  async function k(g, C) {
    const { scrollTop: S } = h,
      R = (g - f) * (a || _);
    (C = {
      left: 0,
      top: S + R,
      behavior: "smooth",
      ...C,
    }),
      h.scrollTo(C);
  }

  Pt(() => {
    (r = p.getElementsByTagName("svelte-virtual-list-row")), n(13, (I = !0));
  });

  function H(g) {
    ot[g ? "unshift" : "push"](() => {
      (p = g), n(3, p);
    });
  }

  function L(g) {
    ot[g ? "unshift" : "push"](() => {
      (h = g), n(2, h);
    });
  }

  function W() {
    (w = this.offsetHeight), n(1, w);
  }

  return (
    (t.$$set = (g) => {
      "items" in g && n(10, (c = g.items)),
        "height" in g && n(0, (i = g.height)),
        "itemHeight" in g && n(11, (a = g.itemHeight)),
        "start" in g && n(8, (f = g.start)),
        "end" in g && n(9, (s = g.end)),
        "$$scope" in g && n(14, (o = g.$$scope));
    }),
    (t.$$.update = () => {
      t.$$.dirty & 1792 &&
        n(
          4,
          (y = c.slice(f, s).map((g, C) => ({
            index: C + f,
            data: g,
          })))
        ),
        t.$$.dirty & 11266 && I && A(c, w, a);
    }),
    [i, w, h, p, y, T, j, z, f, s, c, a, k, I, o, l, H, L, W]
  );
}

class be extends yt {
  constructor(e) {
    super(),
      vt(this, e, _e, de, mt, {
        items: 10,
        height: 0,
        itemHeight: 11,
        start: 8,
        end: 9,
        scrollToIndex: 12,
      });
  }

  get scrollToIndex() {
    return this.$$.ctx[12];
  }
}

function It(t, e, n) {
  const l = t.slice();
  return (l[16] = e[n]), l;
}

function St(t, e, n) {
  const l = t.slice();
  return (l[20] = e[n]), l;
}

function ge(t) {
  let e,
    n,
    l,
    o = t[19].text + "",
    c,
    i,
    a,
    f,
    s = t[19].buttons && Vt(t);
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (l = v("div")),
        (c = P(o)),
        (f = D()),
        s && s.c(),
        x(l, "background-color", t[19].type === "end" ? t[2] : ""),
        d(
          l,
          "class",
          (i = `chatbot-chat-bubble ${(t[19].type === "end", "")}`)
        ),
        d(n, "class", (a = `chatbot-chat chatbot-chat-${t[19].type}`));
    },
    m(u, r) {
      E(u, e, r), b(e, n), b(n, l), b(l, c), b(e, f), s && s.m(e, null);
    },
    p(u, r) {
      r & 524288 && o !== (o = u[19].text + "") && ft(c, o),
        r & 524292 &&
          x(l, "background-color", u[19].type === "end" ? u[2] : ""),
        r & 524288 &&
          i !== (i = `chatbot-chat-bubble ${(u[19].type === "end", "")}`) &&
          d(l, "class", i),
        r & 524288 &&
          a !== (a = `chatbot-chat chatbot-chat-${u[19].type}`) &&
          d(n, "class", a),
        u[19].buttons
          ? s
            ? s.p(u, r)
            : ((s = Vt(u)), s.c(), s.m(e, null))
          : s && (s.d(1), (s = null));
    },
    d(u) {
      u && M(e), s && s.d();
    },
  };
}

function me(t) {
  let e;
  return {
    c() {
      (e = v("div")),
        (e.innerHTML = `<div class="chatbot-chat-bubble chatbot-flex chatbot-space-x-2 chatbot-items-center"><div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.1s;"></div> 
              <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.2s;"></div> 
              <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.3s;"></div></div>`),
        d(e, "class", "chatbot-chat chatbot-chat-start");
    },
    m(n, l) {
      E(n, e, l);
    },
    p: ut,
    d(n) {
      n && M(e);
    },
  };
}

function Vt(t) {
  let e,
    n = t[19].buttons,
    l = [];
  for (let o = 0; o < n.length; o += 1) l[o] = qt(St(t, n, o));
  return {
    c() {
      e = v("div");
      for (let o = 0; o < l.length; o += 1) l[o].c();
      d(e, "class", "chatbot-flex chatbot-gap-2");
    },
    m(o, c) {
      E(o, e, c);
      for (let i = 0; i < l.length; i += 1) l[i].m(e, null);
    },
    p(o, c) {
      if (c & 524292) {
        n = o[19].buttons;
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = St(o, n, i);
          l[i] ? l[i].p(a, c) : ((l[i] = qt(a)), l[i].c(), l[i].m(e, null));
        }
        for (; i < l.length; i += 1) l[i].d(1);
        l.length = n.length;
      }
    },
    d(o) {
      o && M(e), zt(l, o);
    },
  };
}

function qt(t) {
  let e,
    n,
    l,
    o,
    c,
    i,
    a,
    f = t[20].text + "",
    s,
    u;
  return {
    c() {
      (e = v("a")),
        (n = F("svg")),
        (l = F("title")),
        (o = P("open-in-new")),
        (c = F("path")),
        (i = D()),
        (a = v("span")),
        (s = P(f)),
        d(
          c,
          "d",
          "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
        ),
        d(n, "class", "chatbot-h-4 chatbot-fill-current"),
        d(n, "xmlns", "http://www.w3.org/2000/svg"),
        d(n, "viewBox", "0 0 24 24"),
        x(e, "background-color", t[2]),
        d(e, "href", (u = t[20].value)),
        d(e, "target", "_blank"),
        d(e, "class", "chatbot-btn chatbot-btn-sm chatbot-space-x-2");
    },
    m(r, h) {
      E(r, e, h), b(e, n), b(n, l), b(l, o), b(n, c), b(e, i), b(e, a), b(a, s);
    },
    p(r, h) {
      h & 524288 && f !== (f = r[20].text + "") && ft(s, f),
        h & 4 && x(e, "background-color", r[2]),
        h & 524288 && u !== (u = r[20].value) && d(e, "href", u);
    },
    d(r) {
      r && M(e);
    },
  };
}

function pe(t) {
  let e;

  function n(c, i) {
    return c[19].loading ? me : ge;
  }

  let l = n(t),
    o = l(t);
  return {
    c() {
      o.c(), (e = $t());
    },
    m(c, i) {
      o.m(c, i), E(c, e, i);
    },
    p(c, i) {
      l === (l = n(c)) && o
        ? o.p(c, i)
        : (o.d(1), (o = l(c)), o && (o.c(), o.m(e.parentNode, e)));
    },
    d(c) {
      o.d(c), c && M(e);
    },
  };
}

function Et(t) {
  let e,
    n = t[16] + "",
    l,
    o,
    c;

  function i() {
    return t[13](t[16]);
  }

  return {
    c() {
      (e = v("button")),
        (l = P(n)),
        d(e, "class", "chatbot-btn chatbot-btn-outline chatbot-btn-xs");
    },
    m(a, f) {
      E(a, e, f), b(e, l), o || ((c = K(e, "click", i)), (o = !0));
    },
    p(a, f) {
      t = a;
    },
    d(a) {
      a && M(e), (o = !1), c();
    },
  };
}

function we(t) {
  let e,
    n,
    l,
    o,
    c,
    i,
    a,
    f,
    s,
    u,
    r,
    h = t[5] ? "online" : "offline",
    p,
    w,
    y,
    I,
    T,
    j,
    _,
    A,
    z,
    k,
    H,
    L,
    W,
    g,
    C,
    S,
    B,
    V,
    R;

  function Z(m) {
    t[12](m);
  }

  let it = {
    items: t[7],
    $$slots: {
      default: [
        pe,
        ({ item: m }) => ({ 19: m }),
        ({ item: m }) => (m ? 524288 : 0),
      ],
    },
    $$scope: { ctx: t },
  };
  t[4] !== void 0 && (it.scrollToIndex = t[4]),
    (T = new be({ props: it })),
    ot.push(() => ae(T, "scrollToIndex", Z));
  let J = t[8],
    N = [];
  for (let m = 0; m < J.length; m += 1) N[m] = Et(It(t, J, m));
  return {
    c() {
      (e = v("div")),
        (n = v("div")),
        (l = v("h2")),
        (o = v("div")),
        (c = v("div")),
        (i = v("img")),
        (f = D()),
        (s = v("span")),
        (u = P(t[0])),
        (r = P(" is ")),
        (p = P(h)),
        (w = P(" !")),
        (y = D()),
        (I = v("div")),
        Qt(T.$$.fragment),
        (_ = D()),
        (A = v("div")),
        (z = v("div"));
      for (let m = 0; m < N.length; m += 1) N[m].c();
      (k = D()),
        (H = v("form")),
        (L = v("input")),
        (W = D()),
        (g = v("button")),
        (C = F("svg")),
        (S = F("path")),
        d(i, "alt", "Bot Avatar"),
        Lt(i.src, (a = t[1])) || d(i, "src", a),
        d(
          c,
          "class",
          "chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8"
        ),
        d(o, "class", "chatbot-avatar chatbot-placeholder"),
        Tt(o, "chatbot-online", t[5]),
        d(l, "class", "chatbot-card-title"),
        d(I, "class", "chatbot-h-60"),
        d(z, "class", "chatbot-gap-2 chatbot-flex"),
        d(L, "type", "text"),
        d(L, "placeholder", "Type here"),
        d(L, "class", "chatbot-input chatbot-w-full chatbot-max-w-full"),
        d(S, "fill", "currentColor"),
        d(S, "d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"),
        d(C, "class", "chatbot-h-4"),
        d(C, "viewBox", "0 0 24 24"),
        (g.disabled = t[3]),
        d(g, "type", "submit"),
        d(g, "class", "chatbot-btn chatbot-btn-md"),
        d(
          H,
          "class",
          "chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full"
        ),
        d(
          A,
          "class",
          "chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full"
        ),
        d(n, "class", "chatbot-card-body"),
        d(
          e,
          "class",
          "chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans"
        );
    },
    m(m, q) {
      E(m, e, q),
        b(e, n),
        b(n, l),
        b(l, o),
        b(o, c),
        b(c, i),
        b(l, f),
        b(l, s),
        b(s, u),
        b(s, r),
        b(s, p),
        b(s, w),
        b(n, y),
        b(n, I),
        pt(T, I, null),
        b(n, _),
        b(n, A),
        b(A, z);
      for (let Y = 0; Y < N.length; Y += 1) N[Y].m(z, null);
      b(A, k),
        b(A, H),
        b(H, L),
        Ht(L, t[6]),
        b(H, W),
        b(H, g),
        b(g, C),
        b(C, S),
        (B = !0),
        V || ((R = [K(L, "input", t[14]), K(H, "submit", te(t[9]))]), (V = !0));
    },
    p(m, [q]) {
      (!B || (q & 2 && !Lt(i.src, (a = m[1])))) && d(i, "src", a),
        (!B || q & 32) && Tt(o, "chatbot-online", m[5]),
        (!B || q & 1) && ft(u, m[0]),
        (!B || q & 32) && h !== (h = m[5] ? "online" : "offline") && ft(p, h);
      const Y = {};
      if (
        (q & 128 && (Y.items = m[7]),
        q & 8912900 &&
          (Y.$$scope = {
            dirty: q,
            ctx: m,
          }),
        !j &&
          q & 16 &&
          ((j = !0), (Y.scrollToIndex = m[4]), ie(() => (j = !1))),
        T.$set(Y),
        q & 320)
      ) {
        J = m[8];
        let O;
        for (O = 0; O < J.length; O += 1) {
          const kt = It(m, J, O);
          N[O] ? N[O].p(kt, q) : ((N[O] = Et(kt)), N[O].c(), N[O].m(z, null));
        }
        for (; O < N.length; O += 1) N[O].d(1);
        N.length = J.length;
      }
      q & 64 && L.value !== m[6] && Ht(L, m[6]),
        (!B || q & 8) && (g.disabled = m[3]);
    },
    i(m) {
      B || (Q(T.$$.fragment, m), (B = !0));
    },
    o(m) {
      U(T.$$.fragment, m), (B = !1);
    },
    d(m) {
      m && M(e), wt(T), zt(N, m), (V = !1), et(R);
    },
  };
}

function ve(t, e, n) {
  let { endpoint: l } = e,
    { botName: o } = e,
    { botAvatar: c } = e,
    { mainColor: i } = e,
    a = !1,
    f,
    { demo: s = !1 } = e,
    u = !1,
    r = ["Where is the venue?", "Things to do"];
  Pt(() => {
    h();
  });

  async function h() {
    try {
      const _ = await fetch(l, {
        body: JSON.stringify({ message: "Hello" }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((A) => A.json());
      n(5, (u = !0));
    } catch {
      n(5, (u = !1));
    }
  }

  async function p() {
    try {
      if (s) return;
      n(3, (a = !0)),
        n(
          7,
          (y = [
            ...y,
            { text: w, type: "end" },
            {
              text: "...is writing",
              type: "start",
              loading: !0,
            },
          ])
        ),
        await tt(),
        await tt(),
        f(y.length - 1);
      const _ = await fetch(l, {
        body: JSON.stringify({ message: w }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
      }).then((A) => A.json());
      if ((console.log(_), n(6, (w = "")), _.length === 0))
        n(
          7,
          (y[y.length - 1] = {
            text: "I don't understand",
            type: "start",
          }),
          y
        );
      else {
        let A = [];
        _.length > 1 &&
          _[1].custom &&
          (A = [
            {
              text: _[1].custom.button_name,
              value: _[1].custom.url,
            },
          ]),
          n(
            7,
            (y[y.length - 1] = {
              text: _[0].text,
              type: "start",
              buttons: A,
            }),
            y
          );
      }
      await tt(), await tt(), f(y.length - 1);
    } catch (_) {
      console.error(_),
        n(
          7,
          (y[y.length - 1] = {
            text: "Humm \u{1F914}... It seems that your message did not find the correct wire.",
            type: "start",
          }),
          y
        ),
        await h();
    } finally {
      n(3, (a = !1));
    }
  }

  let w = "",
    y = [
      {
        text: `Hello \u{1F44B} ! I'm ${o} the bot! I can help you with your questions. Just ask me!`,
        type: "start",
      },
    ];

  function I(_) {
    (f = _), n(4, f);
  }

  const T = (_) => n(6, (w = _));

  function j() {
    (w = this.value), n(6, w);
  }

  return (
    (t.$$set = (_) => {
      "endpoint" in _ && n(10, (l = _.endpoint)),
        "botName" in _ && n(0, (o = _.botName)),
        "botAvatar" in _ && n(1, (c = _.botAvatar)),
        "mainColor" in _ && n(2, (i = _.mainColor)),
        "demo" in _ && n(11, (s = _.demo));
    }),
    [o, c, i, a, f, u, w, y, r, p, l, s, I, T, j]
  );
}

class ye extends yt {
  constructor(e) {
    super(),
      vt(this, e, ve, we, mt, {
        endpoint: 10,
        botName: 0,
        botAvatar: 1,
        mainColor: 2,
        demo: 11,
      });
  }
}

function jt(t) {
  let e, n;
  return (
    (e = new ye({
      props: {
        endpoint: t[0],
        botName: t[1],
        botAvatar: t[2],
        mainColor: t[3],
      },
    })),
    {
      c() {
        Qt(e.$$.fragment);
      },
      m(l, o) {
        pt(e, l, o), (n = !0);
      },
      p(l, o) {
        const c = {};
        o & 1 && (c.endpoint = l[0]),
          o & 2 && (c.botName = l[1]),
          o & 4 && (c.botAvatar = l[2]),
          o & 8 && (c.mainColor = l[3]),
          e.$set(c);
      },
      i(l) {
        n || (Q(e.$$.fragment, l), (n = !0));
      },
      o(l) {
        U(e.$$.fragment, l), (n = !1);
      },
      d(l) {
        wt(e, l);
      },
    }
  );
}

function ke(t) {
  let e, n;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        d(
          n,
          "d",
          "M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11S17.5 3 12 3M13 15H11V13H13V15M14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"
        ),
        d(e, "class", "chatbot-h-10"),
        d(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      E(l, e, o), b(e, n);
    },
    d(l) {
      l && M(e);
    },
  };
}

function Ce(t) {
  let e, n;
  return {
    c() {
      (e = F("svg")),
        (n = F("path")),
        d(
          n,
          "d",
          "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        ),
        d(e, "class", "chatbot-h-10"),
        d(e, "viewBox", "0 0 24 24");
    },
    m(l, o) {
      E(l, e, o), b(e, n);
    },
    d(l) {
      l && M(e);
    },
  };
}

function Le(t) {
  let e,
    n,
    l,
    o,
    c,
    i = t[4] && jt(t);

  function a(u, r) {
    return u[4] ? Ce : ke;
  }

  let f = a(t),
    s = f(t);
  return {
    c() {
      i && i.c(),
        (e = D()),
        (n = v("button")),
        s.c(),
        x(n, "background-color", t[3]),
        d(
          n,
          "class",
          "chatbot-flex chatbot-items-center chatbot-justify-center chatbot-rounded-full chatbot-p-4 chatbot-h-20 chatbot-aspect-square chatbot-fixed chatbot-bottom-5 chatbot-right-5 chatbot-fill-white chatbot-hover:scale-110 chatbot-transition-transform chatbot-shadow"
        );
    },
    m(u, r) {
      i && i.m(u, r),
        E(u, e, r),
        E(u, n, r),
        s.m(n, null),
        (l = !0),
        o || ((c = K(n, "click", t[5])), (o = !0));
    },
    p(u, [r]) {
      u[4]
        ? i
          ? (i.p(u, r), r & 16 && Q(i, 1))
          : ((i = jt(u)), i.c(), Q(i, 1), i.m(e.parentNode, e))
        : i &&
          (Dt(),
          U(i, 1, 1, () => {
            i = null;
          }),
          Ft()),
        f !== (f = a(u)) && (s.d(1), (s = f(u)), s && (s.c(), s.m(n, null))),
        (!l || r & 8) && x(n, "background-color", u[3]);
    },
    i(u) {
      l || (Q(i), (l = !0));
    },
    o(u) {
      U(i), (l = !1);
    },
    d(u) {
      i && i.d(u), u && M(e), u && M(n), s.d(), (o = !1), c();
    },
  };
}

function He(t, e, n) {
  let l = !1,
    { endpoint: o = "http://127.0.0.1:5005/webhooks/rest/webhook" } = e,
    { botName: c = "Ibentau Assistant" } = e,
    {
      botAvatar:
        i = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2",
    } = e,
    { mainColor: a = "#00bfa5" } = e;
  const f = () => n(4, (l = !l));
  return (
    (t.$$set = (s) => {
      "endpoint" in s && n(0, (o = s.endpoint)),
        "botName" in s && n(1, (c = s.botName)),
        "botAvatar" in s && n(2, (i = s.botAvatar)),
        "mainColor" in s && n(3, (a = s.mainColor));
    }),
    [o, c, i, a, l, f]
  );
}

class Te extends yt {
  constructor(e) {
    super(),
      vt(this, e, He, Le, mt, {
        endpoint: 0,
        botName: 1,
        botAvatar: 2,
        mainColor: 3,
      });
  }
}

window.ChatBot = Te;
