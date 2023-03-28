function ut() {
}
function Qt(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Bt(t) {
  return t();
}
function Ct() {
  return /* @__PURE__ */ Object.create(null);
}
function X(t) {
  t.forEach(Bt);
}
function jt(t) {
  return typeof t == "function";
}
function mt(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let ct;
function Lt(t, e) {
  return ct || (ct = document.createElement("a")), ct.href = e, t === ct.href;
}
function Rt(t) {
  return Object.keys(t).length === 0;
}
function Yt(t, e, n, l) {
  if (t) {
    const o = Ot(t, e, n, l);
    return t[0](o);
  }
}
function Ot(t, e, n, l) {
  return t[1] && l ? Qt(n.ctx.slice(), t[1](l(e))) : n.ctx;
}
function Gt(t, e, n, l) {
  if (t[2] && l) {
    const o = t[2](l(n));
    if (e.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const c = [], i = Math.max(e.dirty.length, o.length);
      for (let a = 0; a < i; a += 1)
        c[a] = e.dirty[a] | o[a];
      return c;
    }
    return e.dirty | o;
  }
  return e.dirty;
}
function Kt(t, e, n, l, o, c) {
  if (o) {
    const i = Ot(e, n, l, c);
    t.p(i, o);
  }
}
function Ut(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let l = 0; l < n; l++)
      e[l] = -1;
    return e;
  }
  return -1;
}
function b(t, e) {
  t.appendChild(e);
}
function q(t, e, n) {
  t.insertBefore(e, n || null);
}
function A(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function zt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function y(t) {
  return document.createElement(t);
}
function Q(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function z(t) {
  return document.createTextNode(t);
}
function F() {
  return z(" ");
}
function Xt() {
  return z("");
}
function K(t, e, n, l) {
  return t.addEventListener(e, n, l), () => t.removeEventListener(e, n, l);
}
function $t(t) {
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
function te(t) {
  return Array.from(t.childNodes);
}
function ft(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function Ht(t, e) {
  t.value = e == null ? "" : e;
}
function B(t, e, n, l) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, l ? "important" : "");
}
let rt;
function ee() {
  if (rt === void 0) {
    rt = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      rt = !0;
    }
  }
  return rt;
}
function ne(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const l = y("iframe");
  l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), l.setAttribute("aria-hidden", "true"), l.tabIndex = -1;
  const o = ee();
  let c;
  return o ? (l.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", c = K(window, "message", (i) => {
    i.source === l.contentWindow && e();
  })) : (l.src = "about:blank", l.onload = () => {
    c = K(l.contentWindow, "resize", e), e();
  }), b(t, l), () => {
    (o || c && l.contentWindow) && c(), A(l);
  };
}
function Tt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
let ot;
function lt(t) {
  ot = t;
}
function le() {
  if (!ot)
    throw new Error("Function called outside component initialization");
  return ot;
}
function oe(t) {
  le().$$.on_mount.push(t);
}
const tt = [], it = [];
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
  const t = ot;
  do {
    try {
      for (; $ < tt.length; ) {
        const e = tt[$];
        $++, lt(e), se(e.$$);
      }
    } catch (e) {
      throw tt.length = 0, $ = 0, e;
    }
    for (lt(null), tt.length = 0, $ = 0; it.length; )
      it.pop()();
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
const at = /* @__PURE__ */ new Set();
let G;
function Dt() {
  G = {
    r: 0,
    c: [],
    p: G
  };
}
function Jt() {
  G.r || X(G.c), G = G.p;
}
function R(t, e) {
  t && t.i && (at.delete(t), t.i(e));
}
function U(t, e, n, l) {
  if (t && t.o) {
    if (at.has(t))
      return;
    at.add(t), G.c.push(() => {
      at.delete(t), l && (n && t.d(1), l());
    }), t.o(e);
  } else
    l && l();
}
function re(t, e) {
  U(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function ae(t, e, n, l, o, c, i, a, u, s, f, r) {
  let h = t.length, g = c.length, w = h;
  const j = {};
  for (; w--; )
    j[t[w].key] = w;
  const M = [], L = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), H = [];
  for (w = g; w--; ) {
    const v = r(o, c, w), C = n(v);
    let N = i.get(C);
    N ? l && H.push(() => N.p(v, e)) : (N = s(C, v), N.c()), L.set(C, M[w] = N), C in j && m.set(C, Math.abs(w - j[C]));
  }
  const O = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
  function Z(v) {
    R(v, 1), v.m(a, f), i.set(v.key, v), f = v.first, g--;
  }
  for (; h && g; ) {
    const v = M[g - 1], C = t[h - 1], N = v.key, _ = C.key;
    v === C ? (f = v.first, h--, g--) : L.has(_) ? !i.has(N) || O.has(N) ? Z(v) : P.has(_) ? h-- : m.get(N) > m.get(_) ? (P.add(N), Z(v)) : (O.add(_), h--) : (u(C, i), h--);
  }
  for (; h--; ) {
    const v = t[h];
    L.has(v.key) || u(v, i);
  }
  for (; g; )
    Z(M[g - 1]);
  return X(H), M;
}
function ue(t, e, n) {
  const l = t.$$.props[e];
  l !== void 0 && (t.$$.bound[l] = n, n(t.$$.ctx[l]));
}
function Ft(t) {
  t && t.c();
}
function pt(t, e, n, l) {
  const { fragment: o, after_update: c } = t.$$;
  o && o.m(e, n), l || ht(() => {
    const i = t.$$.on_mount.map(Bt).filter(jt);
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
function vt(t, e, n, l, o, c, i, a = [-1]) {
  const u = ot;
  lt(t);
  const s = t.$$ = {
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
    context: new Map(e.context || (u ? u.$$.context : [])),
    callbacks: Ct(),
    dirty: a,
    skip_bound: !1,
    root: e.target || u.$$.root
  };
  i && i(s.root);
  let f = !1;
  if (s.ctx = n ? n(t, e.props || {}, (r, h, ...g) => {
    const w = g.length ? g[0] : h;
    return s.ctx && o(s.ctx[r], s.ctx[r] = w) && (!s.skip_bound && s.bound[r] && s.bound[r](w), f && fe(t, r)), h;
  }) : [], s.update(), f = !0, X(s.before_update), s.fragment = l ? l(s.ctx) : !1, e.target) {
    if (e.hydrate) {
      const r = te(e.target);
      s.fragment && s.fragment.l(r), r.forEach(A);
    } else
      s.fragment && s.fragment.c();
    e.intro && R(t.$$.fragment), pt(t, e.target, e.anchor, e.customElement), Zt();
  }
  lt(u);
}
class yt {
  $destroy() {
    wt(this, 1), this.$destroy = ut;
  }
  $on(e, n) {
    if (!jt(n))
      return ut;
    const l = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return l.push(n), () => {
      const o = l.indexOf(n);
      o !== -1 && l.splice(o, 1);
    };
  }
  $set(e) {
    this.$$set && !Rt(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function At(t, e, n) {
  const l = t.slice();
  return l[23] = e[n], l;
}
const he = (t) => ({ item: t & 16 }), Mt = (t) => ({ item: t[23].data });
function de(t) {
  let e;
  return {
    c() {
      e = z("Missing template");
    },
    m(n, l) {
      q(n, e, l);
    },
    d(n) {
      n && A(e);
    }
  };
}
function Nt(t, e) {
  let n, l, o;
  const c = e[15].default, i = Yt(c, e, e[14], Mt), a = i || de();
  return {
    key: t,
    first: null,
    c() {
      n = y("svelte-virtual-list-row"), a && a.c(), l = F(), _t(n, "class", "svelte-1tqh76q"), this.first = n;
    },
    m(u, s) {
      q(u, n, s), a && a.m(n, null), b(n, l), o = !0;
    },
    p(u, s) {
      e = u, i && i.p && (!o || s & 16400) && Kt(
        i,
        c,
        e,
        e[14],
        o ? Gt(c, e[14], s, he) : Ut(e[14]),
        Mt
      );
    },
    i(u) {
      o || (R(a, u), o = !0);
    },
    o(u) {
      U(a, u), o = !1;
    },
    d(u) {
      u && A(n), a && a.d(u);
    }
  };
}
function _e(t) {
  let e, n, l = [], o = /* @__PURE__ */ new Map(), c, i, a, u, s = t[4];
  const f = (r) => r[23].index;
  for (let r = 0; r < s.length; r += 1) {
    let h = At(t, s, r), g = f(h);
    o.set(g, l[r] = Nt(g, h));
  }
  return {
    c() {
      e = y("svelte-virtual-list-viewport"), n = y("svelte-virtual-list-contents");
      for (let r = 0; r < l.length; r += 1)
        l[r].c();
      B(n, "padding-top", t[5] + "px"), B(n, "padding-bottom", t[6] + "px"), _t(n, "class", "svelte-1tqh76q"), B(e, "height", t[0]), _t(e, "class", "svelte-1tqh76q"), ht(() => t[18].call(e));
    },
    m(r, h) {
      q(r, e, h), b(e, n);
      for (let g = 0; g < l.length; g += 1)
        l[g] && l[g].m(n, null);
      t[16](n), t[17](e), c = ne(e, t[18].bind(e)), i = !0, a || (u = K(e, "scroll", t[7]), a = !0);
    },
    p(r, [h]) {
      h & 16400 && (s = r[4], Dt(), l = ae(l, h, f, 1, r, s, o, n, re, Nt, null, At), Jt()), (!i || h & 32) && B(n, "padding-top", r[5] + "px"), (!i || h & 64) && B(n, "padding-bottom", r[6] + "px"), (!i || h & 1) && B(e, "height", r[0]);
    },
    i(r) {
      if (!i) {
        for (let h = 0; h < s.length; h += 1)
          R(l[h]);
        i = !0;
      }
    },
    o(r) {
      for (let h = 0; h < l.length; h += 1)
        U(l[h]);
      i = !1;
    },
    d(r) {
      r && A(e);
      for (let h = 0; h < l.length; h += 1)
        l[h].d();
      t[16](null), t[17](null), c(), a = !1, u();
    }
  };
}
function be(t, e, n) {
  let { $$slots: l = {}, $$scope: o } = e, { items: c } = e, { height: i = "100%" } = e, { itemHeight: a = void 0 } = e, { start: u = 0 } = e, { end: s = 0 } = e, f = [], r, h, g, w = 0, j, M, L = 0, m = 0, H;
  async function O(_, k, I) {
    _.length < u && await Z(_.length - 1, { behavior: "auto" });
    const { scrollTop: E } = h;
    await et();
    let Y = L - E, D = u;
    for (; Y < k && D < _.length; ) {
      let W = r[D - u];
      W || (n(9, s = D + 1), await et(), W = r[D - u]);
      const T = f[D] = I || W.offsetHeight;
      Y += T, D += 1;
    }
    n(9, s = D);
    const st = _.length - s;
    H = (L + Y) / s, n(6, m = st * H), f.length = _.length;
  }
  async function P() {
    const { scrollTop: _ } = h;
    for (let E = 0; E < r.length; E += 1)
      f[u + E] = a || r[E].offsetHeight;
    let k = 0, I = 0;
    for (; k < c.length; ) {
      const E = f[k] || H;
      if (I + E > _) {
        n(8, u = k), n(5, L = I);
        break;
      }
      I += E, k += 1;
    }
    for (; k < c.length && (I += f[k] || H, k += 1, !(I > _ + w)); )
      ;
    n(9, s = k);
    const S = c.length - s;
    for (H = I / s; k < c.length; )
      f[k++] = H;
    n(6, m = S * H);
  }
  async function Z(_, k) {
    const { scrollTop: I } = h, Y = (_ - u) * (a || H);
    k = {
      left: 0,
      top: I + Y,
      behavior: "smooth",
      ...k
    }, h.scrollTo(k);
  }
  oe(() => {
    r = g.getElementsByTagName("svelte-virtual-list-row"), n(13, M = !0);
  });
  function v(_) {
    it[_ ? "unshift" : "push"](() => {
      g = _, n(3, g);
    });
  }
  function C(_) {
    it[_ ? "unshift" : "push"](() => {
      h = _, n(2, h);
    });
  }
  function N() {
    w = this.offsetHeight, n(1, w);
  }
  return t.$$set = (_) => {
    "items" in _ && n(10, c = _.items), "height" in _ && n(0, i = _.height), "itemHeight" in _ && n(11, a = _.itemHeight), "start" in _ && n(8, u = _.start), "end" in _ && n(9, s = _.end), "$$scope" in _ && n(14, o = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & 1792 && n(4, j = c.slice(u, s).map((_, k) => ({ index: k + u, data: _ }))), t.$$.dirty & 11266 && M && O(c, w, a);
  }, [
    i,
    w,
    h,
    g,
    j,
    L,
    m,
    P,
    u,
    s,
    c,
    a,
    Z,
    M,
    o,
    l,
    v,
    C,
    N
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
  return l[15] = e[n], l;
}
function Et(t, e, n) {
  const l = t.slice();
  return l[19] = e[n], l;
}
function me(t) {
  let e, n, l, o = t[18].text + "", c, i, a, u, s = t[18].buttons && Vt(t);
  return {
    c() {
      e = y("div"), n = y("div"), l = y("div"), c = z(o), u = F(), s && s.c(), B(l, "background-color", t[18].type === "end" ? t[2] : ""), d(l, "class", i = `chatbot-chat-bubble ${t[18].type === "end", ""}`), d(n, "class", a = `chatbot-chat chatbot-chat-${t[18].type}`);
    },
    m(f, r) {
      q(f, e, r), b(e, n), b(n, l), b(l, c), b(e, u), s && s.m(e, null);
    },
    p(f, r) {
      r & 262144 && o !== (o = f[18].text + "") && ft(c, o), r & 262148 && B(l, "background-color", f[18].type === "end" ? f[2] : ""), r & 262144 && i !== (i = `chatbot-chat-bubble ${f[18].type === "end", ""}`) && d(l, "class", i), r & 262144 && a !== (a = `chatbot-chat chatbot-chat-${f[18].type}`) && d(n, "class", a), f[18].buttons ? s ? s.p(f, r) : (s = Vt(f), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    d(f) {
      f && A(e), s && s.d();
    }
  };
}
function pe(t) {
  let e;
  return {
    c() {
      e = y("div"), e.innerHTML = `<div class="chatbot-chat-bubble chatbot-flex chatbot-space-x-2 chatbot-items-center"><div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.1s;"></div> 
              <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.2s;"></div> 
              <div class="chatbot-bg-current chatbot-h-2 chatbot-aspect-square chatbot-rounded-full chatbot-animate-bounce" style="animation-delay: 0.3s;"></div></div>`, d(e, "class", "chatbot-chat chatbot-chat-start");
    },
    m(n, l) {
      q(n, e, l);
    },
    p: ut,
    d(n) {
      n && A(e);
    }
  };
}
function Vt(t) {
  let e, n = t[18].buttons, l = [];
  for (let o = 0; o < n.length; o += 1)
    l[o] = qt(Et(t, n, o));
  return {
    c() {
      e = y("div");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      d(e, "class", "chatbot-flex chatbot-gap-2");
    },
    m(o, c) {
      q(o, e, c);
      for (let i = 0; i < l.length; i += 1)
        l[i] && l[i].m(e, null);
    },
    p(o, c) {
      if (c & 262148) {
        n = o[18].buttons;
        let i;
        for (i = 0; i < n.length; i += 1) {
          const a = Et(o, n, i);
          l[i] ? l[i].p(a, c) : (l[i] = qt(a), l[i].c(), l[i].m(e, null));
        }
        for (; i < l.length; i += 1)
          l[i].d(1);
        l.length = n.length;
      }
    },
    d(o) {
      o && A(e), zt(l, o);
    }
  };
}
function qt(t) {
  let e, n, l, o, c, i, a, u = t[19].text + "", s, f;
  return {
    c() {
      e = y("a"), n = Q("svg"), l = Q("title"), o = z("open-in-new"), c = Q("path"), i = F(), a = y("span"), s = z(u), d(c, "d", "M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"), d(n, "class", "chatbot-h-4 chatbot-fill-current"), d(n, "xmlns", "http://www.w3.org/2000/svg"), d(n, "viewBox", "0 0 24 24"), B(e, "background-color", t[2]), d(e, "href", f = t[19].value), d(e, "target", "_blank"), d(e, "class", "chatbot-btn chatbot-btn-sm chatbot-space-x-2");
    },
    m(r, h) {
      q(r, e, h), b(e, n), b(n, l), b(l, o), b(n, c), b(e, i), b(e, a), b(a, s);
    },
    p(r, h) {
      h & 262144 && u !== (u = r[19].text + "") && ft(s, u), h & 4 && B(e, "background-color", r[2]), h & 262144 && f !== (f = r[19].value) && d(e, "href", f);
    },
    d(r) {
      r && A(e);
    }
  };
}
function we(t) {
  let e;
  function n(c, i) {
    return c[18].loading ? pe : me;
  }
  let l = n(t), o = l(t);
  return {
    c() {
      o.c(), e = Xt();
    },
    m(c, i) {
      o.m(c, i), q(c, e, i);
    },
    p(c, i) {
      l === (l = n(c)) && o ? o.p(c, i) : (o.d(1), o = l(c), o && (o.c(), o.m(e.parentNode, e)));
    },
    d(c) {
      o.d(c), c && A(e);
    }
  };
}
function St(t) {
  let e, n = t[15] + "", l, o, c;
  function i() {
    return t[13](t[15]);
  }
  return {
    c() {
      e = y("button"), l = z(n), d(e, "class", "chatbot-btn chatbot-btn-outline chatbot-btn-xs");
    },
    m(a, u) {
      q(a, e, u), b(e, l), o || (c = K(e, "click", i), o = !0);
    },
    p(a, u) {
      t = a;
    },
    d(a) {
      a && A(e), o = !1, c();
    }
  };
}
function ve(t) {
  let e, n, l, o, c, i, a, u, s, f, r, h = t[5] ? "online" : "offline", g, w, j, M, L, m, H, O, P, Z, v, C, N, _, k, I, S, E, Y;
  function D(p) {
    t[12](p);
  }
  let st = {
    items: t[7],
    $$slots: {
      default: [
        we,
        ({ item: p }) => ({ 18: p }),
        ({ item: p }) => p ? 262144 : 0
      ]
    },
    $$scope: { ctx: t }
  };
  t[4] !== void 0 && (st.scrollToIndex = t[4]), L = new ge({ props: st }), it.push(() => ue(L, "scrollToIndex", D));
  let W = t[8], T = [];
  for (let p = 0; p < W.length; p += 1)
    T[p] = St(It(t, W, p));
  return {
    c() {
      e = y("div"), n = y("div"), l = y("h2"), o = y("div"), c = y("div"), i = y("img"), u = F(), s = y("span"), f = z(t[0]), r = z(" is "), g = z(h), w = z(" !"), j = F(), M = y("div"), Ft(L.$$.fragment), H = F(), O = y("div"), P = y("div");
      for (let p = 0; p < T.length; p += 1)
        T[p].c();
      Z = F(), v = y("form"), C = y("input"), N = F(), _ = y("button"), k = Q("svg"), I = Q("path"), d(i, "alt", "Bot Avatar"), Lt(i.src, a = t[1]) || d(i, "src", a), d(c, "class", "chatbot-bg-neutral-focus chatbot-text-neutral-content chatbot-rounded-full chatbot-w-8"), d(o, "class", "chatbot-avatar chatbot-placeholder"), Tt(o, "chatbot-online", t[5]), d(l, "class", "chatbot-card-title"), d(M, "class", "chatbot-h-60"), d(P, "class", "chatbot-gap-2 chatbot-flex"), d(C, "maxlength", "200"), d(C, "type", "text"), d(C, "placeholder", "Type here"), d(C, "class", "chatbot-input chatbot-w-full chatbot-max-w-full"), d(I, "fill", "currentColor"), d(I, "d", "M2,21L23,12L2,3V10L17,12L2,14V21Z"), d(k, "class", "chatbot-h-4"), d(k, "viewBox", "0 0 24 24"), _.disabled = t[3], d(_, "type", "submit"), d(_, "class", "chatbot-btn chatbot-btn-md"), d(v, "class", "chatbot-flex chatbot-items-center chatbot-space-x-2 chatbot-w-full"), d(O, "class", "chatbot-card-action chatbot-mt-2 chatbot-space-y-2 chatbot-w-full"), d(n, "class", "chatbot-card-body"), d(e, "class", "chatbot-card chatbot-card-compact chatbot-bg-base-200 chatbot-shadow-xl chatbot-fixed chatbot-bottom-28 chatbot-right-5 chatbot-max-w-lg chatbot-font-sans");
    },
    m(p, V) {
      q(p, e, V), b(e, n), b(n, l), b(l, o), b(o, c), b(c, i), b(l, u), b(l, s), b(s, f), b(s, r), b(s, g), b(s, w), b(n, j), b(n, M), pt(L, M, null), b(n, H), b(n, O), b(O, P);
      for (let J = 0; J < T.length; J += 1)
        T[J] && T[J].m(P, null);
      b(O, Z), b(O, v), b(v, C), Ht(C, t[6]), b(v, N), b(v, _), b(_, k), b(k, I), S = !0, E || (Y = [
        K(C, "input", t[14]),
        K(v, "submit", $t(t[9]))
      ], E = !0);
    },
    p(p, [V]) {
      (!S || V & 2 && !Lt(i.src, a = p[1])) && d(i, "src", a), (!S || V & 32) && Tt(o, "chatbot-online", p[5]), (!S || V & 1) && ft(f, p[0]), (!S || V & 32) && h !== (h = p[5] ? "online" : "offline") && ft(g, h);
      const J = {};
      if (V & 128 && (J.items = p[7]), V & 4456452 && (J.$$scope = { dirty: V, ctx: p }), !m && V & 16 && (m = !0, J.scrollToIndex = p[4], ie(() => m = !1)), L.$set(J), V & 320) {
        W = p[8];
        let x;
        for (x = 0; x < W.length; x += 1) {
          const kt = It(p, W, x);
          T[x] ? T[x].p(kt, V) : (T[x] = St(kt), T[x].c(), T[x].m(P, null));
        }
        for (; x < T.length; x += 1)
          T[x].d(1);
        T.length = W.length;
      }
      V & 64 && C.value !== p[6] && Ht(C, p[6]), (!S || V & 8) && (_.disabled = p[3]);
    },
    i(p) {
      S || (R(L.$$.fragment, p), S = !0);
    },
    o(p) {
      U(L.$$.fragment, p), S = !1;
    },
    d(p) {
      p && A(e), wt(L), zt(T, p), E = !1, X(Y);
    }
  };
}
function ye(t, e, n) {
  let { endpoint: l } = e, { botName: o } = e, { botAvatar: c } = e, { mainColor: i } = e, a = !1, u, { demo: s = !1 } = e, f = !0, r = ["Where is the venue?", "Things to do"];
  async function h() {
    try {
      if (s || g.trim() === "")
        return;
      if (g.length > 200) {
        n(6, g = "");
        return;
      }
      n(3, a = !0), n(7, w = [
        ...w,
        { text: g, type: "end" },
        {
          text: "...is writing",
          type: "start",
          loading: !0
        }
      ]), await et(), await et(), u(w.length - 1);
      const m = await fetch(l, {
        body: JSON.stringify({ message: g }),
        method: "POST",
        headers: { "Content-Type": "application/json" }
      }).then((H) => H.json());
      if (console.log(m), n(6, g = ""), m.length === 0)
        n(
          7,
          w[w.length - 1] = {
            text: "I don't understand",
            type: "start"
          },
          w
        );
      else {
        let H = [];
        m.length > 1 && m[1].custom && (H = [
          {
            text: m[1].custom.button_name,
            value: m[1].custom.url
          }
        ]), n(
          7,
          w[w.length - 1] = {
            text: m[0].text,
            type: "start",
            buttons: H
          },
          w
        );
      }
      await et(), await et(), u(w.length - 1);
    } catch (m) {
      console.error(m), n(
        7,
        w[w.length - 1] = {
          text: "Humm \u{1F914}... It seems that your message did not find the correct wire.",
          type: "start"
        },
        w
      ), n(5, f = !1);
    } finally {
      n(3, a = !1);
    }
  }
  let g = "", w = [
    {
      text: `Hello \u{1F44B} ! I'm ${o} the bot! I can help you with your questions. Just ask me!`,
      type: "start"
    }
  ];
  function j(m) {
    u = m, n(4, u);
  }
  const M = (m) => n(6, g = m);
  function L() {
    g = this.value, n(6, g);
  }
  return t.$$set = (m) => {
    "endpoint" in m && n(10, l = m.endpoint), "botName" in m && n(0, o = m.botName), "botAvatar" in m && n(1, c = m.botAvatar), "mainColor" in m && n(2, i = m.mainColor), "demo" in m && n(11, s = m.demo);
  }, [
    o,
    c,
    i,
    a,
    u,
    f,
    g,
    w,
    r,
    h,
    l,
    s,
    j,
    M,
    L
  ];
}
class ke extends yt {
  constructor(e) {
    super(), vt(this, e, ye, ve, mt, {
      endpoint: 10,
      botName: 0,
      botAvatar: 1,
      mainColor: 2,
      demo: 11
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
      Ft(e.$$.fragment);
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
      q(l, e, o), b(e, n);
    },
    d(l) {
      l && A(e);
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
      q(l, e, o), b(e, n);
    },
    d(l) {
      l && A(e);
    }
  };
}
function He(t) {
  let e, n, l, o, c, i = t[4] && xt(t);
  function a(f, r) {
    return f[4] ? Le : Ce;
  }
  let u = a(t), s = u(t);
  return {
    c() {
      i && i.c(), e = F(), n = y("button"), s.c(), B(n, "background-color", t[3]), d(n, "class", "chatbot-flex chatbot-items-center chatbot-justify-center chatbot-rounded-full chatbot-p-4 chatbot-h-20 chatbot-aspect-square chatbot-fixed chatbot-bottom-5 chatbot-right-5 chatbot-fill-white chatbot-hover:scale-110 chatbot-transition-transform chatbot-shadow");
    },
    m(f, r) {
      i && i.m(f, r), q(f, e, r), q(f, n, r), s.m(n, null), l = !0, o || (c = K(n, "click", t[5]), o = !0);
    },
    p(f, [r]) {
      f[4] ? i ? (i.p(f, r), r & 16 && R(i, 1)) : (i = xt(f), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (Dt(), U(i, 1, 1, () => {
        i = null;
      }), Jt()), u !== (u = a(f)) && (s.d(1), s = u(f), s && (s.c(), s.m(n, null))), (!l || r & 8) && B(n, "background-color", f[3]);
    },
    i(f) {
      l || (R(i), l = !0);
    },
    o(f) {
      U(i), l = !1;
    },
    d(f) {
      i && i.d(f), f && A(e), f && A(n), s.d(), o = !1, c();
    }
  };
}
function Te(t, e, n) {
  let l = !1, { endpoint: o = "http://127.0.0.1:5005/webhooks/rest/webhook" } = e, { botName: c = "Ibentau Assistant" } = e, { botAvatar: i = "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2022-07/kitten-playing-575035.jpg?h=b1b36da8&itok=ySAJgYQ2" } = e, { mainColor: a = "#00bfa5" } = e;
  const u = () => n(4, l = !l);
  return t.$$set = (s) => {
    "endpoint" in s && n(0, o = s.endpoint), "botName" in s && n(1, c = s.botName), "botAvatar" in s && n(2, i = s.botAvatar), "mainColor" in s && n(3, a = s.mainColor);
  }, [o, c, i, a, l, u];
}
class Ae extends yt {
  constructor(e) {
    super(), vt(this, e, Te, He, mt, {
      endpoint: 0,
      botName: 1,
      botAvatar: 2,
      mainColor: 3
    });
  }
}
window.ChatBot = Ae;
