/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {}, vn = [], xe = () => {
}, bn = () => !1, an = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vr = (e) => e.startsWith("onUpdate:"), te = Object.assign, $r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hf = Object.prototype.hasOwnProperty, ie = (e, t) => Hf.call(e, t), B = Array.isArray, En = (e) => Vn(e) === "[object Map]", fn = (e) => Vn(e) === "[object Set]", Fo = (e) => Vn(e) === "[object Date]", Uf = (e) => Vn(e) === "[object RegExp]", G = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Br = (e) => (le(e) || G(e)) && G(e.then) && G(e.catch), Kl = Object.prototype.toString, Vn = (e) => Kl.call(e), jf = (e) => Vn(e).slice(8, -1), vi = (e) => Vn(e) === "[object Object]", Hr = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Kf = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ei = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Wf = /-\w/g, fe = Ei(
  (e) => e.replace(Wf, (t) => t.slice(1).toUpperCase())
), qf = /\B([A-Z])/g, Ue = Ei(
  (e) => e.replace(qf, "-$1").toLowerCase()
), un = Ei((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tn = Ei(
  (e) => e ? `on${un(e)}` : ""
), De = (e, t) => !Object.is(e, t), Cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Wl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Xs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Zs = (e) => {
  const t = Z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vo;
const Ti = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Gf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const Jf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Yf = /* @__PURE__ */ ze(Jf);
function _s(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = Z(s) ? ql(s) : _s(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Z(e) || le(e))
    return e;
}
const Xf = /;(?![^(]*\))/g, Zf = /:([^]+)/, zf = /\/\*[^]*?\*\//g;
function ql(e) {
  const t = {};
  return e.replace(zf, "").split(Xf).forEach((n) => {
    if (n) {
      const s = n.split(Zf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function $n(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = $n(e[n]);
      s && (t += s + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Qf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Z(t) && (e.class = $n(t)), n && (e.style = _s(n)), e;
}
const eu = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", tu = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", nu = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", su = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", iu = /* @__PURE__ */ ze(eu), ru = /* @__PURE__ */ ze(tu), ou = /* @__PURE__ */ ze(nu), lu = /* @__PURE__ */ ze(su), cu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", au = /* @__PURE__ */ ze(cu);
function Gl(e) {
  return !!e || e === "";
}
function fu(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Wt(e[s], t[s]);
  return n;
}
function Wt(e, t) {
  if (e === t) return !0;
  let n = Fo(e), s = Fo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ke(e), s = Ke(t), n || s)
    return e === t;
  if (n = B(e), s = B(t), n || s)
    return n && s ? fu(e, t) : !1;
  if (n = le(e), s = le(t), n || s) {
    if (!n || !s)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !Wt(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Ci(e, t) {
  return e.findIndex((n) => Wt(n, t));
}
const Jl = (e) => !!(e && e.__v_isRef === !0), An = (e) => Z(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === Kl || !G(e.toString)) ? Jl(e) ? An(e.value) : JSON.stringify(e, Yl, 2) : String(e), Yl = (e, t) => Jl(t) ? Yl(e, t.value) : En(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Xi(s, r) + " =>"] = i, n),
    {}
  )
} : fn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Xi(n))
} : Ke(t) ? Xi(t) : le(t) && !B(t) && !vi(t) ? String(t) : t, Xi = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function uu(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Oe;
class Ur {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Oe, Oe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Oe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function hu(e) {
  return new Ur(e);
}
function Xl() {
  return Oe;
}
function pu(e, t = !1) {
  Oe && Oe.cleanups.push(e);
}
let ae;
const Zi = /* @__PURE__ */ new WeakSet();
class ns {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && Oe.active && Oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Zi.has(this) && (Zi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || zl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $o(this), Ql(this);
    const t = ae, n = ct;
    ae = this, ct = !0;
    try {
      return this.fn();
    } finally {
      ec(this), ae = t, ct = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wr(t);
      this.deps = this.depsTail = void 0, $o(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Zi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fr(this) && this.run();
  }
  get dirty() {
    return fr(this);
  }
}
let Zl = 0, Jn, Yn;
function zl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yn, Yn = e;
    return;
  }
  e.next = Jn, Jn = e;
}
function jr() {
  Zl++;
}
function Kr() {
  if (--Zl > 0)
    return;
  if (Yn) {
    let t = Yn;
    for (Yn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Jn; ) {
    let t = Jn;
    for (Jn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Ql(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ec(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Wr(s), du(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function fr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ss) || (e.globalVersion = ss, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ae, s = ct;
  ae = e, ct = !0;
  try {
    Ql(e);
    const i = e.fn(e._value);
    (t.version === 0 || De(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ae = n, ct = s, ec(e), e.flags &= -3;
  }
}
function Wr(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Wr(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function du(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function gu(e, t) {
  e.effect instanceof ns && (e = e.effect.fn);
  const n = new ns(e);
  t && te(n, t);
  try {
    n.run();
  } catch (i) {
    throw n.stop(), i;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function mu(e) {
  e.effect.stop();
}
let ct = !0;
const nc = [];
function xt() {
  nc.push(ct), ct = !1;
}
function wt() {
  const e = nc.pop();
  ct = e === void 0 ? !0 : e;
}
function $o(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ae;
    ae = void 0;
    try {
      t();
    } finally {
      ae = n;
    }
  }
}
let ss = 0;
class yu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ai {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ae || !ct || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new yu(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, sc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, ss++, this.notify(t);
  }
  notify(t) {
    jr();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Kr();
    }
  }
}
function sc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        sc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const zs = /* @__PURE__ */ new WeakMap(), Qt = Symbol(
  ""
), ur = Symbol(
  ""
), is = Symbol(
  ""
);
function Pe(e, t, n) {
  if (ct && ae) {
    let s = zs.get(e);
    s || zs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ai()), i.map = s, i.key = n), i.track();
  }
}
function Tt(e, t, n, s, i, r) {
  const o = zs.get(e);
  if (!o) {
    ss++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (jr(), t === "clear")
    o.forEach(l);
  else {
    const c = B(e), f = c && Hr(n);
    if (c && n === "length") {
      const a = Number(s);
      o.forEach((u, p) => {
        (p === "length" || p === is || !Ke(p) && p >= a) && l(u);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), f && l(o.get(is)), t) {
        case "add":
          c ? f && l(o.get("length")) : (l(o.get(Qt)), En(e) && l(o.get(ur)));
          break;
        case "delete":
          c || (l(o.get(Qt)), En(e) && l(o.get(ur)));
          break;
        case "set":
          En(e) && l(o.get(Qt));
          break;
      }
  }
  Kr();
}
function _u(e, t) {
  const n = zs.get(e);
  return n && n.get(t);
}
function dn(e) {
  const t = se(e);
  return t === e ? t : (Pe(t, "iterate", is), Xe(e) ? t : t.map(Ce));
}
function Ni(e) {
  return Pe(e = se(e), "iterate", is), e;
}
const bu = {
  __proto__: null,
  [Symbol.iterator]() {
    return zi(this, Symbol.iterator, Ce);
  },
  concat(...e) {
    return dn(this).concat(
      ...e.map((t) => B(t) ? dn(t) : t)
    );
  },
  entries() {
    return zi(this, "entries", (e) => (e[1] = Ce(e[1]), e));
  },
  every(e, t) {
    return _t(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return _t(this, "filter", e, t, (n) => n.map(Ce), arguments);
  },
  find(e, t) {
    return _t(this, "find", e, t, Ce, arguments);
  },
  findIndex(e, t) {
    return _t(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return _t(this, "findLast", e, t, Ce, arguments);
  },
  findLastIndex(e, t) {
    return _t(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return _t(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qi(this, "includes", e);
  },
  indexOf(...e) {
    return Qi(this, "indexOf", e);
  },
  join(e) {
    return dn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return _t(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jn(this, "pop");
  },
  push(...e) {
    return jn(this, "push", e);
  },
  reduce(e, ...t) {
    return Bo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bo(this, "reduceRight", e, t);
  },
  shift() {
    return jn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return _t(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jn(this, "splice", e);
  },
  toReversed() {
    return dn(this).toReversed();
  },
  toSorted(e) {
    return dn(this).toSorted(e);
  },
  toSpliced(...e) {
    return dn(this).toSpliced(...e);
  },
  unshift(...e) {
    return jn(this, "unshift", e);
  },
  values() {
    return zi(this, "values", Ce);
  }
};
function zi(e, t, n) {
  const s = Ni(e), i = s[t]();
  return s !== e && !Xe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const Su = Array.prototype;
function _t(e, t, n, s, i, r) {
  const o = Ni(e), l = o !== e && !Xe(e), c = o[t];
  if (c !== Su[t]) {
    const u = c.apply(e, r);
    return l ? Ce(u) : u;
  }
  let f = n;
  o !== e && (l ? f = function(u, p) {
    return n.call(this, Ce(u), p, e);
  } : n.length > 2 && (f = function(u, p) {
    return n.call(this, u, p, e);
  }));
  const a = c.call(o, f, s);
  return l && i ? i(a) : a;
}
function Bo(e, t, n, s) {
  const i = Ni(e);
  let r = n;
  return i !== e && (Xe(e) ? n.length > 3 && (r = function(o, l, c) {
    return n.call(this, o, l, c, e);
  }) : r = function(o, l, c) {
    return n.call(this, o, Ce(l), c, e);
  }), i[t](r, ...s);
}
function Qi(e, t, n) {
  const s = se(e);
  Pe(s, "iterate", is);
  const i = s[t](...n);
  return (i === -1 || i === !1) && Oi(n[0]) ? (n[0] = se(n[0]), s[t](...n)) : i;
}
function jn(e, t, n = []) {
  xt(), jr();
  const s = se(e)[t].apply(e, n);
  return Kr(), wt(), s;
}
const vu = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), ic = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function Eu(e) {
  Ke(e) || (e = String(e));
  const t = se(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class rc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (i ? r ? uc : fc : r ? ac : cc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = B(t);
    if (!i) {
      let c;
      if (o && (c = bu[n]))
        return c;
      if (n === "hasOwnProperty")
        return Eu;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ee(t) ? t : s
    );
    return (Ke(n) ? ic.has(n) : vu(n)) || (i || Pe(t, "get", n), r) ? l : Ee(l) ? o && Hr(n) ? l : l.value : le(l) ? i ? qr(l) : wi(l) : l;
  }
}
class oc extends rc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const c = It(r);
      if (!Xe(s) && !It(s) && (r = se(r), s = se(s)), !B(t) && Ee(r) && !Ee(s))
        return c || (r.value = s), !0;
    }
    const o = B(t) && Hr(n) ? Number(n) < t.length : ie(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ee(t) ? t : i
    );
    return t === se(i) && (o ? De(s, r) && Tt(t, "set", n, s) : Tt(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Tt(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ke(n) || !ic.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      B(t) ? "length" : Qt
    ), Reflect.ownKeys(t);
  }
}
class lc extends rc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const Tu = /* @__PURE__ */ new oc(), Cu = /* @__PURE__ */ new lc(), Au = /* @__PURE__ */ new oc(!0), Nu = /* @__PURE__ */ new lc(!0), hr = (e) => e, Is = (e) => Reflect.getPrototypeOf(e);
function xu(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = se(i), o = En(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, f = i[e](...s), a = n ? hr : t ? Qs : Ce;
    return !t && Pe(
      r,
      "iterate",
      c ? ur : Qt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: p } = f.next();
        return p ? { value: u, done: p } : {
          value: l ? [a(u[0]), a(u[1])] : a(u),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Os(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function wu(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = se(r), l = se(i);
      e || (De(i, l) && Pe(o, "get", i), Pe(o, "get", l));
      const { has: c } = Is(o), f = t ? hr : e ? Qs : Ce;
      if (c.call(o, i))
        return f(r.get(i));
      if (c.call(o, l))
        return f(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Pe(se(i), "iterate", Qt), i.size;
    },
    has(i) {
      const r = this.__v_raw, o = se(r), l = se(i);
      return e || (De(i, l) && Pe(o, "has", i), Pe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = se(l), f = t ? hr : e ? Qs : Ce;
      return !e && Pe(c, "iterate", Qt), l.forEach((a, u) => i.call(r, f(a), f(u), o));
    }
  };
  return te(
    n,
    e ? {
      add: Os("add"),
      set: Os("set"),
      delete: Os("delete"),
      clear: Os("clear")
    } : {
      add(i) {
        !t && !Xe(i) && !It(i) && (i = se(i));
        const r = se(this);
        return Is(r).has.call(r, i) || (r.add(i), Tt(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Xe(r) && !It(r) && (r = se(r));
        const o = se(this), { has: l, get: c } = Is(o);
        let f = l.call(o, i);
        f || (i = se(i), f = l.call(o, i));
        const a = c.call(o, i);
        return o.set(i, r), f ? De(r, a) && Tt(o, "set", i, r) : Tt(o, "add", i, r), this;
      },
      delete(i) {
        const r = se(this), { has: o, get: l } = Is(r);
        let c = o.call(r, i);
        c || (i = se(i), c = o.call(r, i)), l && l.call(r, i);
        const f = r.delete(i);
        return c && Tt(r, "delete", i, void 0), f;
      },
      clear() {
        const i = se(this), r = i.size !== 0, o = i.clear();
        return r && Tt(
          i,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = xu(i, e, t);
  }), n;
}
function xi(e, t) {
  const n = wu(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const Iu = {
  get: /* @__PURE__ */ xi(!1, !1)
}, Ou = {
  get: /* @__PURE__ */ xi(!1, !0)
}, Ru = {
  get: /* @__PURE__ */ xi(!0, !1)
}, Pu = {
  get: /* @__PURE__ */ xi(!0, !0)
}, cc = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), uc = /* @__PURE__ */ new WeakMap();
function ku(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Mu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ku(jf(e));
}
function wi(e) {
  return It(e) ? e : Ii(
    e,
    !1,
    Tu,
    Iu,
    cc
  );
}
function hc(e) {
  return Ii(
    e,
    !1,
    Au,
    Ou,
    ac
  );
}
function qr(e) {
  return Ii(
    e,
    !0,
    Cu,
    Ru,
    fc
  );
}
function Lu(e) {
  return Ii(
    e,
    !0,
    Nu,
    Pu,
    uc
  );
}
function Ii(e, t, n, s, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Mu(e);
  if (r === 0)
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
function Ht(e) {
  return It(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function It(e) {
  return !!(e && e.__v_isReadonly);
}
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
function Oi(e) {
  return e ? !!e.__v_raw : !1;
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function pc(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && Wl(e, "__v_skip", !0), e;
}
const Ce = (e) => le(e) ? wi(e) : e, Qs = (e) => le(e) ? qr(e) : e;
function Ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function en(e) {
  return gc(e, !1);
}
function dc(e) {
  return gc(e, !0);
}
function gc(e, t) {
  return Ee(e) ? e : new Du(e, t);
}
class Du {
  constructor(t, n) {
    this.dep = new Ai(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : se(t), this._value = n ? t : Ce(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Xe(t) || It(t);
    t = s ? t : se(t), De(t, n) && (this._rawValue = t, this._value = s ? t : Ce(t), this.dep.trigger());
  }
}
function Fu(e) {
  e.dep && e.dep.trigger();
}
function Ri(e) {
  return Ee(e) ? e.value : e;
}
function Vu(e) {
  return G(e) ? e() : Ri(e);
}
const $u = {
  get: (e, t, n) => t === "__v_raw" ? e : Ri(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Ee(i) && !Ee(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Gr(e) {
  return Ht(e) ? e : new Proxy(e, $u);
}
class Bu {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ai(), { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function mc(e) {
  return new Bu(e);
}
function Hu(e) {
  const t = B(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = yc(e, n);
  return t;
}
class Uu {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return _u(se(this._object), this._key);
  }
}
class ju {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Ku(e, t, n) {
  return Ee(e) ? e : G(e) ? new ju(e) : le(e) && arguments.length > 1 ? yc(e, t, n) : en(e);
}
function yc(e, t, n) {
  const s = e[t];
  return Ee(s) ? s : new Uu(e, t, n);
}
class Wu {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ai(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ss - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return zl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return tc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function qu(e, t, n = !1) {
  let s, i;
  return G(e) ? s = e : (s = e.get, i = e.set), new Wu(s, i, n);
}
const Gu = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Ju = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Rs = {}, ei = /* @__PURE__ */ new WeakMap();
let Dt;
function Yu() {
  return Dt;
}
function _c(e, t = !1, n = Dt) {
  if (n) {
    let s = ei.get(n);
    s || ei.set(n, s = []), s.push(e);
  }
}
function Xu(e, t, n = ee) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, f = (y) => i ? y : Xe(y) || i === !1 || i === 0 ? Ct(y, 1) : Ct(y);
  let a, u, p, d, b = !1, _ = !1;
  if (Ee(e) ? (u = () => e.value, b = Xe(e)) : Ht(e) ? (u = () => f(e), b = !0) : B(e) ? (_ = !0, b = e.some((y) => Ht(y) || Xe(y)), u = () => e.map((y) => {
    if (Ee(y))
      return y.value;
    if (Ht(y))
      return f(y);
    if (G(y))
      return c ? c(y, 2) : y();
  })) : G(e) ? t ? u = c ? () => c(e, 2) : e : u = () => {
    if (p) {
      xt();
      try {
        p();
      } finally {
        wt();
      }
    }
    const y = Dt;
    Dt = a;
    try {
      return c ? c(e, 3, [d]) : e(d);
    } finally {
      Dt = y;
    }
  } : u = xe, t && i) {
    const y = u, v = i === !0 ? 1 / 0 : i;
    u = () => Ct(y(), v);
  }
  const O = Xl(), N = () => {
    a.stop(), O && O.active && $r(O.effects, a);
  };
  if (r && t) {
    const y = t;
    t = (...v) => {
      y(...v), N();
    };
  }
  let A = _ ? new Array(e.length).fill(Rs) : Rs;
  const g = (y) => {
    if (!(!(a.flags & 1) || !a.dirty && !y))
      if (t) {
        const v = a.run();
        if (i || b || (_ ? v.some((w, V) => De(w, A[V])) : De(v, A))) {
          p && p();
          const w = Dt;
          Dt = a;
          try {
            const V = [
              v,
              // pass undefined as the old value when it's changed for the first time
              A === Rs ? void 0 : _ && A[0] === Rs ? [] : A,
              d
            ];
            A = v, c ? c(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            Dt = w;
          }
        }
      } else
        a.run();
  };
  return l && l(g), a = new ns(u), a.scheduler = o ? () => o(g, !1) : g, d = (y) => _c(y, !1, a), p = a.onStop = () => {
    const y = ei.get(a);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const v of y) v();
      ei.delete(a);
    }
  }, t ? s ? g(!0) : A = a.run() : o ? o(g.bind(null, !0), !0) : a.run(), N.pause = a.pause.bind(a), N.resume = a.resume.bind(a), N.stop = N, N;
}
function Ct(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, Ee(e))
    Ct(e.value, t, n);
  else if (B(e))
    for (let s = 0; s < e.length; s++)
      Ct(e[s], t, n);
  else if (fn(e) || En(e))
    e.forEach((s) => {
      Ct(s, t, n);
    });
  else if (vi(e)) {
    for (const s in e)
      Ct(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ct(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bc = [];
function Zu(e) {
  bc.push(e);
}
function zu() {
  bc.pop();
}
function Qu(e, t) {
}
const eh = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, th = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    hn(i, t, n);
  }
}
function it(e, t, n, s) {
  if (G(e)) {
    const i = Bn(e, t, n, s);
    return i && Br(i) && i.catch((r) => {
      hn(r, t, n);
    }), i;
  }
  if (B(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(it(e[r], t, n, s));
    return i;
  }
}
function hn(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const a = l.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](e, c, f) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      xt(), Bn(r, null, 10, [
        e,
        c,
        f
      ]), wt();
      return;
    }
  }
  nh(e, n, i, s, o);
}
function nh(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Fe = [];
let dt = -1;
const Nn = [];
let Ft = null, yn = 0;
const Sc = /* @__PURE__ */ Promise.resolve();
let ti = null;
function Pi(e) {
  const t = ti || Sc;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = dt + 1, n = Fe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = Fe[s], r = os(i);
    r < e || r === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Jr(e) {
  if (!(e.flags & 1)) {
    const t = os(e), n = Fe[Fe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= os(n) ? Fe.push(e) : Fe.splice(sh(t), 0, e), e.flags |= 1, vc();
  }
}
function vc() {
  ti || (ti = Sc.then(Ec));
}
function rs(e) {
  B(e) ? Nn.push(...e) : Ft && e.id === -1 ? Ft.splice(yn + 1, 0, e) : e.flags & 1 || (Nn.push(e), e.flags |= 1), vc();
}
function Ho(e, t, n = dt + 1) {
  for (; n < Fe.length; n++) {
    const s = Fe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Fe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ni(e) {
  if (Nn.length) {
    const t = [...new Set(Nn)].sort(
      (n, s) => os(n) - os(s)
    );
    if (Nn.length = 0, Ft) {
      Ft.push(...t);
      return;
    }
    for (Ft = t, yn = 0; yn < Ft.length; yn++) {
      const n = Ft[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ft = null, yn = 0;
  }
}
const os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ec(e) {
  try {
    for (dt = 0; dt < Fe.length; dt++) {
      const t = Fe[dt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; dt < Fe.length; dt++) {
      const t = Fe[dt];
      t && (t.flags &= -2);
    }
    dt = -1, Fe.length = 0, ni(), ti = null, (Fe.length || Nn.length) && Ec();
  }
}
let _n, Ps = [];
function Tc(e, t) {
  var n, s;
  _n = e, _n ? (_n.enabled = !0, Ps.forEach(({ event: i, args: r }) => _n.emit(i, ...r)), Ps = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Tc(r, t);
  }), setTimeout(() => {
    _n || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ps = []);
  }, 3e3)) : Ps = [];
}
let Ne = null, ki = null;
function ls(e) {
  const t = Ne;
  return Ne = e, ki = e && e.type.__scopeId || null, t;
}
function ih(e) {
  ki = e;
}
function rh() {
  ki = null;
}
const oh = (e) => Yr;
function Yr(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && fs(-1);
    const r = ls(t);
    let o;
    try {
      o = e(...i);
    } finally {
      ls(r), s._d && fs(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function lh(e, t) {
  if (Ne === null)
    return e;
  const n = Es(Ne), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = ee] = t[i];
    r && (G(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ct(o), s.push({
      dir: r,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function gt(e, t, n, s) {
  const i = e.dirs, r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    r && (l.oldValue = r[o].value);
    let c = l.dir[s];
    c && (xt(), it(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), wt());
  }
}
const Cc = Symbol("_vte"), Ac = (e) => e.__isTeleport, Xn = (e) => e && (e.disabled || e.disabled === ""), Uo = (e) => e && (e.defer || e.defer === ""), jo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ko = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, pr = (e, t) => {
  const n = e && e.to;
  return Z(n) ? t ? t(n) : null : n;
}, Nc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, i, r, o, l, c, f) {
    const {
      mc: a,
      pc: u,
      pbc: p,
      o: { insert: d, querySelector: b, createText: _, createComment: O }
    } = f, N = Xn(t.props);
    let { shapeFlag: A, children: g, dynamicChildren: y } = t;
    if (e == null) {
      const v = t.el = _(""), w = t.anchor = _("");
      d(v, n, s), d(w, n, s);
      const V = (S, C) => {
        A & 16 && (i && i.isCE && (i.ce._teleportTarget = S), a(
          g,
          S,
          C,
          i,
          r,
          o,
          l,
          c
        ));
      }, R = () => {
        const S = t.target = pr(t.props, b), C = xc(S, t, _, d);
        S && (o !== "svg" && jo(S) ? o = "svg" : o !== "mathml" && Ko(S) && (o = "mathml"), N || (V(S, C), Us(t, !1)));
      };
      N && (V(n, w), Us(t, !0)), Uo(t.props) ? (t.el.__isMounted = !1, Se(() => {
        R(), delete t.el.__isMounted;
      }, r)) : R();
    } else {
      if (Uo(t.props) && e.el.__isMounted === !1) {
        Se(() => {
          Nc.process(
            e,
            t,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            f
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const v = t.anchor = e.anchor, w = t.target = e.target, V = t.targetAnchor = e.targetAnchor, R = Xn(e.props), S = R ? n : w, C = R ? v : V;
      if (o === "svg" || jo(w) ? o = "svg" : (o === "mathml" || Ko(w)) && (o = "mathml"), y ? (p(
        e.dynamicChildren,
        y,
        S,
        i,
        r,
        o,
        l
      ), oo(e, t, !0)) : c || u(
        e,
        t,
        S,
        C,
        i,
        r,
        o,
        l,
        !1
      ), N)
        R ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ks(
          t,
          n,
          v,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const M = t.target = pr(
          t.props,
          b
        );
        M && ks(
          t,
          M,
          null,
          f,
          0
        );
      } else R && ks(
        t,
        w,
        V,
        f,
        1
      );
      Us(t, N);
    }
  },
  remove(e, t, n, { um: s, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: f,
      targetAnchor: a,
      target: u,
      props: p
    } = e;
    if (u && (i(f), i(a)), r && i(c), o & 16) {
      const d = r || !Xn(p);
      for (let b = 0; b < l.length; b++) {
        const _ = l[b];
        s(
          _,
          t,
          n,
          d,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: ks,
  hydrate: ch
};
function ks(e, t, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: f, props: a } = e, u = r === 2;
  if (u && s(o, t, n), (!u || Xn(a)) && c & 16)
    for (let p = 0; p < f.length; p++)
      i(
        f[p],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function ch(e, t, n, s, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: f, createText: a }
}, u) {
  function p(_, O, N, A) {
    O.anchor = u(
      o(_),
      O,
      l(_),
      n,
      s,
      i,
      r
    ), O.targetStart = N, O.targetAnchor = A;
  }
  const d = t.target = pr(
    t.props,
    c
  ), b = Xn(t.props);
  if (d) {
    const _ = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (b)
        p(
          e,
          t,
          _,
          _ && o(_)
        );
      else {
        t.anchor = o(e);
        let O = _;
        for (; O; ) {
          if (O && O.nodeType === 8) {
            if (O.data === "teleport start anchor")
              t.targetStart = O;
            else if (O.data === "teleport anchor") {
              t.targetAnchor = O, d._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          O = o(O);
        }
        t.targetAnchor || xc(d, t, a, f), u(
          _ && o(_),
          t,
          d,
          n,
          s,
          i,
          r
        );
      }
    Us(t, b);
  } else b && t.shapeFlag & 16 && p(e, t, e, o(e));
  return t.anchor && o(t.anchor);
}
const ah = Nc;
function Us(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, i;
    for (t ? (s = e.el, i = e.anchor) : (s = e.targetStart, i = e.targetAnchor); s && s !== i; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function xc(e, t, n, s) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[Cc] = r, e && (s(i, e), s(r, e)), r;
}
const Et = Symbol("_leaveCb"), Ms = Symbol("_enterCb");
function Xr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Ss(() => {
    e.isMounted = !0;
  }), Vi(() => {
    e.isUnmounting = !0;
  }), e;
}
const et = [Function, Array], Zr = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: et,
  onEnter: et,
  onAfterEnter: et,
  onEnterCancelled: et,
  // leave
  onBeforeLeave: et,
  onLeave: et,
  onAfterLeave: et,
  onLeaveCancelled: et,
  // appear
  onBeforeAppear: et,
  onAppear: et,
  onAfterAppear: et,
  onAppearCancelled: et
}, wc = (e) => {
  const t = e.subTree;
  return t.component ? wc(t.component) : t;
}, fh = {
  name: "BaseTransition",
  props: Zr,
  setup(e, { slots: t }) {
    const n = We(), s = Xr();
    return () => {
      const i = t.default && Mi(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = Ic(i), o = se(e), { mode: l } = o;
      if (s.isLeaving)
        return er(r);
      const c = Wo(r);
      if (!c)
        return er(r);
      let f = On(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => f = u
      );
      c.type !== ye && Ot(c, f);
      let a = n.subTree && Wo(n.subTree);
      if (a && a.type !== ye && !lt(a, c) && wc(n).type !== ye) {
        let u = On(
          a,
          o,
          s,
          n
        );
        if (Ot(a, u), l === "out-in" && c.type !== ye)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, a = void 0;
          }, er(r);
        l === "in-out" && c.type !== ye ? u.delayLeave = (p, d, b) => {
          const _ = Rc(
            s,
            a
          );
          _[String(a.key)] = a, p[Et] = () => {
            d(), p[Et] = void 0, delete f.delayedLeave, a = void 0;
          }, f.delayedLeave = () => {
            b(), delete f.delayedLeave, a = void 0;
          };
        } : a = void 0;
      } else a && (a = void 0);
      return r;
    };
  }
};
function Ic(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== ye) {
        t = n;
        break;
      }
  }
  return t;
}
const Oc = fh;
function Rc(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function On(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: f,
    onAfterEnter: a,
    onEnterCancelled: u,
    onBeforeLeave: p,
    onLeave: d,
    onAfterLeave: b,
    onLeaveCancelled: _,
    onBeforeAppear: O,
    onAppear: N,
    onAfterAppear: A,
    onAppearCancelled: g
  } = t, y = String(e.key), v = Rc(n, e), w = (S, C) => {
    S && it(
      S,
      s,
      9,
      C
    );
  }, V = (S, C) => {
    const M = C[1];
    w(S, C), B(S) ? S.every((E) => E.length <= 1) && M() : S.length <= 1 && M();
  }, R = {
    mode: o,
    persisted: l,
    beforeEnter(S) {
      let C = c;
      if (!n.isMounted)
        if (r)
          C = O || c;
        else
          return;
      S[Et] && S[Et](
        !0
        /* cancelled */
      );
      const M = v[y];
      M && lt(e, M) && M.el[Et] && M.el[Et](), w(C, [S]);
    },
    enter(S) {
      let C = f, M = a, E = u;
      if (!n.isMounted)
        if (r)
          C = N || f, M = A || a, E = g || u;
        else
          return;
      let D = !1;
      const W = S[Ms] = (J) => {
        D || (D = !0, J ? w(E, [S]) : w(M, [S]), R.delayedLeave && R.delayedLeave(), S[Ms] = void 0);
      };
      C ? V(C, [S, W]) : W();
    },
    leave(S, C) {
      const M = String(e.key);
      if (S[Ms] && S[Ms](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      w(p, [S]);
      let E = !1;
      const D = S[Et] = (W) => {
        E || (E = !0, C(), W ? w(_, [S]) : w(b, [S]), S[Et] = void 0, v[M] === e && delete v[M]);
      };
      v[M] = e, d ? V(d, [S, D]) : D();
    },
    clone(S) {
      const C = On(
        S,
        t,
        n,
        s,
        i
      );
      return i && i(C), C;
    }
  };
  return R;
}
function er(e) {
  if (bs(e))
    return e = yt(e), e.children = null, e;
}
function Wo(e) {
  if (!bs(e))
    return Ac(e.type) && e.children ? Ic(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && G(n.default))
      return n.default();
  }
}
function Ot(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ot(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Mi(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === be ? (o.patchFlag & 128 && i++, s = s.concat(
      Mi(o.children, t, l)
    )) : (t || o.type !== ye) && s.push(l != null ? yt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Li(e, t) {
  return G(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    te({ name: e.name }, t, { setup: e })
  ) : e;
}
function uh() {
  const e = We();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function zr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function hh(e) {
  const t = We(), n = dc(null);
  if (t) {
    const i = t.refs === ee ? t.refs = {} : t.refs;
    Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  }
  return n;
}
const si = /* @__PURE__ */ new WeakMap();
function xn(e, t, n, s, i = !1) {
  if (B(e)) {
    e.forEach(
      (b, _) => xn(
        b,
        t && (B(t) ? t[_] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Ut(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && xn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? Es(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, f = t && t.r, a = l.refs === ee ? l.refs = {} : l.refs, u = l.setupState, p = se(u), d = u === ee ? bn : (b) => ie(p, b);
  if (f != null && f !== c) {
    if (qo(t), Z(f))
      a[f] = null, d(f) && (u[f] = null);
    else if (Ee(f)) {
      f.value = null;
      const b = t;
      b.k && (a[b.k] = null);
    }
  }
  if (G(c))
    Bn(c, l, 12, [o, a]);
  else {
    const b = Z(c), _ = Ee(c);
    if (b || _) {
      const O = () => {
        if (e.f) {
          const N = b ? d(c) ? u[c] : a[c] : c.value;
          if (i)
            B(N) && $r(N, r);
          else if (B(N))
            N.includes(r) || N.push(r);
          else if (b)
            a[c] = [r], d(c) && (u[c] = a[c]);
          else {
            const A = [r];
            c.value = A, e.k && (a[e.k] = A);
          }
        } else b ? (a[c] = o, d(c) && (u[c] = o)) : _ && (c.value = o, e.k && (a[e.k] = o));
      };
      if (o) {
        const N = () => {
          O(), si.delete(e);
        };
        N.id = -1, si.set(e, N), Se(N, n);
      } else
        qo(e), O();
    }
  }
}
function qo(e) {
  const t = si.get(e);
  t && (t.flags |= 8, si.delete(e));
}
let Go = !1;
const gn = () => {
  Go || (console.error("Hydration completed but contains mismatches."), Go = !0);
}, ph = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", dh = (e) => e.namespaceURI.includes("MathML"), Ls = (e) => {
  if (e.nodeType === 1) {
    if (ph(e)) return "svg";
    if (dh(e)) return "mathml";
  }
}, Sn = (e) => e.nodeType === 8;
function gh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: i,
      nextSibling: r,
      parentNode: o,
      remove: l,
      insert: c,
      createComment: f
    }
  } = e, a = (g, y) => {
    if (!y.hasChildNodes()) {
      n(null, g, y), ni(), y._vnode = g;
      return;
    }
    u(y.firstChild, g, null, null, null), ni(), y._vnode = g;
  }, u = (g, y, v, w, V, R = !1) => {
    R = R || !!y.dynamicChildren;
    const S = Sn(g) && g.data === "[", C = () => _(
      g,
      y,
      v,
      w,
      V,
      S
    ), { type: M, ref: E, shapeFlag: D, patchFlag: W } = y;
    let J = g.nodeType;
    y.el = g, W === -2 && (R = !1, y.dynamicChildren = null);
    let U = null;
    switch (M) {
      case jt:
        J !== 3 ? y.children === "" ? (c(y.el = i(""), o(g), g), U = g) : U = C() : (g.data !== y.children && (gn(), g.data = y.children), U = r(g));
        break;
      case ye:
        A(g) ? (U = r(g), N(
          y.el = g.content.firstChild,
          g,
          v
        )) : J !== 8 || S ? U = C() : U = r(g);
        break;
      case nn:
        if (S && (g = r(g), J = g.nodeType), J === 1 || J === 3) {
          U = g;
          const Y = !y.children.length;
          for (let j = 0; j < y.staticCount; j++)
            Y && (y.children += U.nodeType === 1 ? U.outerHTML : U.data), j === y.staticCount - 1 && (y.anchor = U), U = r(U);
          return S ? r(U) : U;
        } else
          C();
        break;
      case be:
        S ? U = b(
          g,
          y,
          v,
          w,
          V,
          R
        ) : U = C();
        break;
      default:
        if (D & 1)
          (J !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) && !A(g) ? U = C() : U = p(
            g,
            y,
            v,
            w,
            V,
            R
          );
        else if (D & 6) {
          y.slotScopeIds = V;
          const Y = o(g);
          if (S ? U = O(g) : Sn(g) && g.data === "teleport start" ? U = O(g, g.data, "teleport end") : U = r(g), t(
            y,
            Y,
            null,
            v,
            w,
            Ls(Y),
            R
          ), Ut(y) && !y.type.__asyncResolved) {
            let j;
            S ? (j = ge(be), j.anchor = U ? U.previousSibling : Y.lastChild) : j = g.nodeType === 3 ? lo("") : ge("div"), j.el = g, y.component.subTree = j;
          }
        } else D & 64 ? J !== 8 ? U = C() : U = y.type.hydrate(
          g,
          y,
          v,
          w,
          V,
          R,
          e,
          d
        ) : D & 128 && (U = y.type.hydrate(
          g,
          y,
          v,
          w,
          Ls(o(g)),
          V,
          R,
          e,
          u
        ));
    }
    return E != null && xn(E, null, w, y), U;
  }, p = (g, y, v, w, V, R) => {
    R = R || !!y.dynamicChildren;
    const { type: S, props: C, patchFlag: M, shapeFlag: E, dirs: D, transition: W } = y, J = S === "input" || S === "option";
    if (J || M !== -1) {
      D && gt(y, null, v, "created");
      let U = !1;
      if (A(g)) {
        U = ra(
          null,
          // no need check parentSuspense in hydration
          W
        ) && v && v.vnode.props && v.vnode.props.appear;
        const j = g.content.firstChild;
        if (U) {
          const pe = j.getAttribute("class");
          pe && (j.$cls = pe), W.beforeEnter(j);
        }
        N(j, g, v), y.el = g = j;
      }
      if (E & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let j = d(
          g.firstChild,
          y,
          g,
          v,
          w,
          V,
          R
        );
        for (; j; ) {
          Ds(
            g,
            1
            /* CHILDREN */
          ) || gn();
          const pe = j;
          j = j.nextSibling, l(pe);
        }
      } else if (E & 8) {
        let j = y.children;
        j[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (j = j.slice(1)), g.textContent !== j && (Ds(
          g,
          0
          /* TEXT */
        ) || gn(), g.textContent = y.children);
      }
      if (C) {
        if (J || !R || M & 48) {
          const j = g.tagName.includes("-");
          for (const pe in C)
            (J && (pe.endsWith("value") || pe === "indeterminate") || an(pe) && !Bt(pe) || // force hydrate v-bind with .prop modifiers
            pe[0] === "." || j) && s(g, pe, null, C[pe], void 0, v);
        } else if (C.onClick)
          s(
            g,
            "onClick",
            null,
            C.onClick,
            void 0,
            v
          );
        else if (M & 4 && Ht(C.style))
          for (const j in C.style) C.style[j];
      }
      let Y;
      (Y = C && C.onVnodeBeforeMount) && Be(Y, v, y), D && gt(y, null, v, "beforeMount"), ((Y = C && C.onVnodeMounted) || D || U) && da(() => {
        Y && Be(Y, v, y), U && W.enter(g), D && gt(y, null, v, "mounted");
      }, w);
    }
    return g.nextSibling;
  }, d = (g, y, v, w, V, R, S) => {
    S = S || !!y.dynamicChildren;
    const C = y.children, M = C.length;
    for (let E = 0; E < M; E++) {
      const D = S ? C[E] : C[E] = He(C[E]), W = D.type === jt;
      g ? (W && !S && E + 1 < M && He(C[E + 1]).type === jt && (c(
        i(
          g.data.slice(D.children.length)
        ),
        v,
        r(g)
      ), g.data = D.children), g = u(
        g,
        D,
        w,
        V,
        R,
        S
      )) : W && !D.children ? c(D.el = i(""), v) : (Ds(
        v,
        1
        /* CHILDREN */
      ) || gn(), n(
        null,
        D,
        v,
        null,
        w,
        V,
        Ls(v),
        R
      ));
    }
    return g;
  }, b = (g, y, v, w, V, R) => {
    const { slotScopeIds: S } = y;
    S && (V = V ? V.concat(S) : S);
    const C = o(g), M = d(
      r(g),
      y,
      C,
      v,
      w,
      V,
      R
    );
    return M && Sn(M) && M.data === "]" ? r(y.anchor = M) : (gn(), c(y.anchor = f("]"), C, M), M);
  }, _ = (g, y, v, w, V, R) => {
    if (Ds(
      g.parentElement,
      1
      /* CHILDREN */
    ) || gn(), y.el = null, R) {
      const M = O(g);
      for (; ; ) {
        const E = r(g);
        if (E && E !== M)
          l(E);
        else
          break;
      }
    }
    const S = r(g), C = o(g);
    return l(g), n(
      null,
      y,
      C,
      S,
      v,
      w,
      Ls(C),
      V
    ), v && (v.vnode.el = y.el, Hi(v, y.el)), S;
  }, O = (g, y = "[", v = "]") => {
    let w = 0;
    for (; g; )
      if (g = r(g), g && Sn(g) && (g.data === y && w++, g.data === v)) {
        if (w === 0)
          return r(g);
        w--;
      }
    return g;
  }, N = (g, y, v) => {
    const w = y.parentNode;
    w && w.replaceChild(g, y);
    let V = v;
    for (; V; )
      V.vnode.el === y && (V.vnode.el = V.subTree.el = g), V = V.parent;
  }, A = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [a, u];
}
const Jo = "data-allow-mismatch", mh = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Ds(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Jo); )
      e = e.parentElement;
  const n = e && e.getAttribute(Jo);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(mh[t]);
  }
}
const yh = Ti().requestIdleCallback || ((e) => setTimeout(e, 1)), _h = Ti().cancelIdleCallback || ((e) => clearTimeout(e)), bh = (e = 1e4) => (t) => {
  const n = yh(t, { timeout: e });
  return () => _h(n);
};
function Sh(e) {
  const { top: t, left: n, bottom: s, right: i } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: o } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < o || i > 0 && i < o);
}
const vh = (e) => (t, n) => {
  const s = new IntersectionObserver((i) => {
    for (const r of i)
      if (r.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((i) => {
    if (i instanceof Element) {
      if (Sh(i))
        return t(), s.disconnect(), !1;
      s.observe(i);
    }
  }), () => s.disconnect();
}, Eh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Th = (e = []) => (t, n) => {
  Z(e) && (e = [e]);
  let s = !1;
  const i = (o) => {
    s || (s = !0, r(), t(), o.target.dispatchEvent(new o.constructor(o.type, o)));
  }, r = () => {
    n((o) => {
      for (const l of e)
        o.removeEventListener(l, i);
    });
  };
  return n((o) => {
    for (const l of e)
      o.addEventListener(l, i, { once: !0 });
  }), r;
};
function Ch(e, t) {
  if (Sn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Sn(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const Ut = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Ah(e) {
  G(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: i = 200,
    hydrate: r,
    timeout: o,
    // undefined = never times out
    suspensible: l = !0,
    onError: c
  } = e;
  let f = null, a, u = 0;
  const p = () => (u++, f = null, d()), d = () => {
    let b;
    return f || (b = f = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), c)
        return new Promise((O, N) => {
          c(_, () => O(p()), () => N(_), u + 1);
        });
      throw _;
    }).then((_) => b !== f && f ? f : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), a = _, _)));
  };
  return /* @__PURE__ */ Li({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    __asyncHydrate(b, _, O) {
      let N = !1;
      (_.bu || (_.bu = [])).push(() => N = !0);
      const A = () => {
        N || O();
      }, g = r ? () => {
        const y = r(
          A,
          (v) => Ch(b, v)
        );
        y && (_.bum || (_.bum = [])).push(y);
      } : A;
      a ? g() : d().then(() => !_.isUnmounted && g());
    },
    get __asyncResolved() {
      return a;
    },
    setup() {
      const b = Ae;
      if (zr(b), a)
        return () => tr(a, b);
      const _ = (g) => {
        f = null, hn(
          g,
          b,
          13,
          !s
        );
      };
      if (l && b.suspense || Rn)
        return d().then((g) => () => tr(g, b)).catch((g) => (_(g), () => s ? ge(s, {
          error: g
        }) : null));
      const O = en(!1), N = en(), A = en(!!i);
      return i && setTimeout(() => {
        A.value = !1;
      }, i), o != null && setTimeout(() => {
        if (!O.value && !N.value) {
          const g = new Error(
            `Async component timed out after ${o}ms.`
          );
          _(g), N.value = g;
        }
      }, o), d().then(() => {
        O.value = !0, b.parent && bs(b.parent.vnode) && b.parent.update();
      }).catch((g) => {
        _(g), N.value = g;
      }), () => {
        if (O.value && a)
          return tr(a, b);
        if (N.value && s)
          return ge(s, {
            error: N.value
          });
        if (n && !A.value)
          return ge(n);
      };
    }
  });
}
function tr(e, t) {
  const { ref: n, props: s, children: i, ce: r } = t.vnode, o = ge(e, s, i);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const bs = (e) => e.type.__isKeepAlive, Nh = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = We(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const A = t.default && t.default();
        return A && A.length === 1 ? A[0] : A;
      };
    const i = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set();
    let o = null;
    const l = n.suspense, {
      renderer: {
        p: c,
        m: f,
        um: a,
        o: { createElement: u }
      }
    } = s, p = u("div");
    s.activate = (A, g, y, v, w) => {
      const V = A.component;
      f(A, g, y, 0, l), c(
        V.vnode,
        A,
        g,
        y,
        V,
        l,
        v,
        A.slotScopeIds,
        w
      ), Se(() => {
        V.isDeactivated = !1, V.a && Cn(V.a);
        const R = A.props && A.props.onVnodeMounted;
        R && Be(R, V.parent, A);
      }, l);
    }, s.deactivate = (A) => {
      const g = A.component;
      ri(g.m), ri(g.a), f(A, p, null, 1, l), Se(() => {
        g.da && Cn(g.da);
        const y = A.props && A.props.onVnodeUnmounted;
        y && Be(y, g.parent, A), g.isDeactivated = !0;
      }, l);
    };
    function d(A) {
      nr(A), a(A, n, l, !0);
    }
    function b(A) {
      i.forEach((g, y) => {
        const v = Cr(g.type);
        v && !A(v) && _(y);
      });
    }
    function _(A) {
      const g = i.get(A);
      g && (!o || !lt(g, o)) ? d(g) : o && nr(o), i.delete(A), r.delete(A);
    }
    wn(
      () => [e.include, e.exclude],
      ([A, g]) => {
        A && b((y) => qn(A, y)), g && b((y) => !qn(g, y));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let O = null;
    const N = () => {
      O != null && (oi(n.subTree.type) ? Se(() => {
        i.set(O, Fs(n.subTree));
      }, n.subTree.suspense) : i.set(O, Fs(n.subTree)));
    };
    return Ss(N), Fi(N), Vi(() => {
      i.forEach((A) => {
        const { subTree: g, suspense: y } = n, v = Fs(g);
        if (A.type === v.type && A.key === v.key) {
          nr(v);
          const w = v.component.da;
          w && Se(w, y);
          return;
        }
        d(A);
      });
    }), () => {
      if (O = null, !t.default)
        return o = null;
      const A = t.default(), g = A[0];
      if (A.length > 1)
        return o = null, A;
      if (!Rt(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return o = null, g;
      let y = Fs(g);
      if (y.type === ye)
        return o = null, y;
      const v = y.type, w = Cr(
        Ut(y) ? y.type.__asyncResolved || {} : v
      ), { include: V, exclude: R, max: S } = e;
      if (V && (!w || !qn(V, w)) || R && w && qn(R, w))
        return y.shapeFlag &= -257, o = y, g;
      const C = y.key == null ? v : y.key, M = i.get(C);
      return y.el && (y = yt(y), g.shapeFlag & 128 && (g.ssContent = y)), O = C, M ? (y.el = M.el, y.component = M.component, y.transition && Ot(y, y.transition), y.shapeFlag |= 512, r.delete(C), r.add(C)) : (r.add(C), S && r.size > parseInt(S, 10) && _(r.values().next().value)), y.shapeFlag |= 256, o = y, oi(g.type) ? g : y;
    };
  }
}, xh = Nh;
function qn(e, t) {
  return B(e) ? e.some((n) => qn(n, t)) : Z(e) ? e.split(",").includes(t) : Uf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Pc(e, t) {
  Mc(e, "a", t);
}
function kc(e, t) {
  Mc(e, "da", t);
}
function Mc(e, t, n = Ae) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Di(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      bs(i.parent.vnode) && wh(s, t, n, i), i = i.parent;
  }
}
function wh(e, t, n, s) {
  const i = Di(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  $i(() => {
    $r(s[t], i);
  }, n);
}
function nr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Fs(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Di(e, t, n = Ae, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      xt();
      const l = ln(n), c = it(t, n, e, o);
      return l(), wt(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Pt = (e) => (t, n = Ae) => {
  (!Rn || e === "sp") && Di(e, (...s) => t(...s), n);
}, Lc = Pt("bm"), Ss = Pt("m"), Qr = Pt(
  "bu"
), Fi = Pt("u"), Vi = Pt(
  "bum"
), $i = Pt("um"), Dc = Pt(
  "sp"
), Fc = Pt("rtg"), Vc = Pt("rtc");
function $c(e, t = Ae) {
  Di("ec", e, t);
}
const eo = "components", Ih = "directives";
function Oh(e, t) {
  return to(eo, e, !0, t) || e;
}
const Bc = Symbol.for("v-ndc");
function Hc(e) {
  return Z(e) ? to(eo, e, !1) || e : e || Bc;
}
function Rh(e) {
  return to(Ih, e);
}
function to(e, t, n = !0, s = !1) {
  const i = Ne || Ae;
  if (i) {
    const r = i.type;
    if (e === eo) {
      const l = Cr(
        r,
        !1
      );
      if (l && (l === t || l === fe(t) || l === un(fe(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Yo(i[e] || r[e], t) || // global registration
      Yo(i.appContext[e], t)
    );
    return !o && s ? r : o;
  }
}
function Yo(e, t) {
  return e && (e[t] || e[fe(t)] || e[un(fe(t))]);
}
function Uc(e, t, n, s) {
  let i;
  const r = n && n[s], o = B(e);
  if (o || Z(e)) {
    const l = o && Ht(e);
    let c = !1, f = !1;
    l && (c = !Xe(e), f = It(e), e = Ni(e)), i = new Array(e.length);
    for (let a = 0, u = e.length; a < u; a++)
      i[a] = t(
        c ? f ? Qs(Ce(e[a])) : Ce(e[a]) : e[a],
        a,
        void 0,
        r && r[a]
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r && r[l]);
  } else if (le(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, c) => t(l, c, void 0, r && r[c])
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let c = 0, f = l.length; c < f; c++) {
        const a = l[c];
        i[c] = t(e[a], a, c, r && r[c]);
      }
    }
  else
    i = [];
  return n && (n[s] = i), i;
}
function Ph(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (B(s))
      for (let i = 0; i < s.length; i++)
        e[s[i].name] = s[i].fn;
    else s && (e[s.name] = s.key ? (...i) => {
      const r = s.fn(...i);
      return r && (r.key = s.key), r;
    } : s.fn);
  }
  return e;
}
function jc(e, t, n = {}, s, i) {
  if (Ne.ce || Ne.parent && Ut(Ne.parent) && Ne.parent.ce)
    return t !== "default" && (n.name = t), Ze(), us(
      be,
      null,
      [ge("slot", n, s && s())],
      64
    );
  let r = e[t];
  r && r._c && (r._d = !1), Ze();
  const o = r && no(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = us(
    be,
    {
      key: (l && !Ke(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!o && s ? "_fb" : "")
    },
    o || (s ? s() : []),
    o && e._ === 1 ? 64 : -2
  );
  return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), r && r._c && (r._d = !0), c;
}
function no(e) {
  return e.some((t) => Rt(t) ? !(t.type === ye || t.type === be && !no(t.children)) : !0) ? e : null;
}
function kh(e, t) {
  const n = {};
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : Tn(s)] = e[s];
  return n;
}
const dr = (e) => e ? va(e) ? Es(e) : dr(e.parent) : null, Zn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => dr(e.parent),
    $root: (e) => dr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => so(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Jr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Pi.bind(e.proxy)),
    $watch: (e) => up.bind(e)
  })
), sr = (e, t) => e !== ee && !e.__isScriptSetup && ie(e, t), gr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    let f;
    if (t[0] !== "$") {
      const d = o[t];
      if (d !== void 0)
        switch (d) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (sr(s, t))
          return o[t] = 1, s[t];
        if (i !== ee && ie(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && ie(f, t)
        )
          return o[t] = 3, r[t];
        if (n !== ee && ie(n, t))
          return o[t] = 4, n[t];
        mr && (o[t] = 0);
      }
    }
    const a = Zn[t];
    let u, p;
    if (a)
      return t === "$attrs" && Pe(e.attrs, "get", ""), a(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      p = c.config.globalProperties, ie(p, t)
    )
      return p[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return sr(i, t) ? (i[t] = n, !0) : s !== ee && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r, type: o }
  }, l) {
    let c, f;
    return !!(n[l] || e !== ee && l[0] !== "$" && ie(e, l) || sr(t, l) || (c = r[0]) && ie(c, l) || ie(s, l) || ie(Zn, l) || ie(i.config.globalProperties, l) || (f = o.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
}, Mh = /* @__PURE__ */ te({}, gr, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return gr.get(e, t, e);
  },
  has(e, t) {
    return t[0] !== "_" && !Yf(t);
  }
});
function Lh() {
  return null;
}
function Dh() {
  return null;
}
function Fh(e) {
}
function Vh(e) {
}
function $h() {
  return null;
}
function Bh() {
}
function Hh(e, t) {
  return null;
}
function Uh() {
  return Kc().slots;
}
function jh() {
  return Kc().attrs;
}
function Kc(e) {
  const t = We();
  return t.setupContext || (t.setupContext = Aa(t));
}
function cs(e) {
  return B(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Kh(e, t) {
  const n = cs(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let i = n[s];
    i ? B(i) || G(i) ? i = n[s] = { type: i, default: t[s] } : i.default = t[s] : i === null && (i = n[s] = { default: t[s] }), i && t[`__skip_${s}`] && (i.skipFactory = !0);
  }
  return n;
}
function Wh(e, t) {
  return !e || !t ? e || t : B(e) && B(t) ? e.concat(t) : te({}, cs(e), cs(t));
}
function qh(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function Gh(e) {
  const t = We();
  let n = e();
  return vr(), Br(n) && (n = n.catch((s) => {
    throw ln(t), s;
  })), [n, () => ln(t)];
}
let mr = !0;
function Jh(e) {
  const t = so(e), n = e.proxy, s = e.ctx;
  mr = !1, t.beforeCreate && Xo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: f,
    // lifecycle
    created: a,
    beforeMount: u,
    mounted: p,
    beforeUpdate: d,
    updated: b,
    activated: _,
    deactivated: O,
    beforeDestroy: N,
    beforeUnmount: A,
    destroyed: g,
    unmounted: y,
    render: v,
    renderTracked: w,
    renderTriggered: V,
    errorCaptured: R,
    serverPrefetch: S,
    // public API
    expose: C,
    inheritAttrs: M,
    // assets
    components: E,
    directives: D,
    filters: W
  } = t;
  if (f && Yh(f, s, null), o)
    for (const Y in o) {
      const j = o[Y];
      G(j) && (s[Y] = j.bind(n));
    }
  if (i) {
    const Y = i.call(n, n);
    le(Y) && (e.data = wi(Y));
  }
  if (mr = !0, r)
    for (const Y in r) {
      const j = r[Y], pe = G(j) ? j.bind(n, n) : G(j.get) ? j.get.bind(n, n) : xe, ft = !G(j) && G(j.set) ? j.set.bind(n) : xe, rt = Na({
        get: pe,
        set: ft
      });
      Object.defineProperty(s, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => rt.value,
        set: (ut) => rt.value = ut
      });
    }
  if (l)
    for (const Y in l)
      Wc(l[Y], s, n, Y);
  if (c) {
    const Y = G(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((j) => {
      Gc(j, Y[j]);
    });
  }
  a && Xo(a, e, "c");
  function U(Y, j) {
    B(j) ? j.forEach((pe) => Y(pe.bind(n))) : j && Y(j.bind(n));
  }
  if (U(Lc, u), U(Ss, p), U(Qr, d), U(Fi, b), U(Pc, _), U(kc, O), U($c, R), U(Vc, w), U(Fc, V), U(Vi, A), U($i, y), U(Dc, S), B(C))
    if (C.length) {
      const Y = e.exposed || (e.exposed = {});
      C.forEach((j) => {
        Object.defineProperty(Y, j, {
          get: () => n[j],
          set: (pe) => n[j] = pe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === xe && (e.render = v), M != null && (e.inheritAttrs = M), E && (e.components = E), D && (e.directives = D), S && zr(e);
}
function Yh(e, t, n = xe) {
  B(e) && (e = yr(e));
  for (const s in e) {
    const i = e[s];
    let r;
    le(i) ? "default" in i ? r = zn(
      i.from || s,
      i.default,
      !0
    ) : r = zn(i.from || s) : r = zn(i), Ee(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (o) => r.value = o
    }) : t[s] = r;
  }
}
function Xo(e, t, n) {
  it(
    B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Wc(e, t, n, s) {
  let i = s.includes(".") ? fa(n, s) : () => n[s];
  if (Z(e)) {
    const r = t[e];
    G(r) && wn(i, r);
  } else if (G(e))
    wn(i, e.bind(n));
  else if (le(e))
    if (B(e))
      e.forEach((r) => Wc(r, t, n, s));
    else {
      const r = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(r) && wn(i, r, e);
    }
}
function so(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !i.length && !n && !s ? c = t : (c = {}, i.length && i.forEach(
    (f) => ii(c, f, o, !0)
  ), ii(c, t, o)), le(t) && r.set(t, c), c;
}
function ii(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && ii(e, r, n, !0), i && i.forEach(
    (o) => ii(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Xh[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Xh = {
  data: Zo,
  props: zo,
  emits: zo,
  // objects
  methods: Gn,
  computed: Gn,
  // lifecycle
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  // assets
  components: Gn,
  directives: Gn,
  // watch
  watch: zh,
  // provide / inject
  provide: Zo,
  inject: Zh
};
function Zo(e, t) {
  return t ? e ? function() {
    return te(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zh(e, t) {
  return Gn(yr(e), yr(t));
}
function yr(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Gn(e, t) {
  return e ? te(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zo(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : te(
    /* @__PURE__ */ Object.create(null),
    cs(e),
    cs(t ?? {})
  ) : t;
}
function zh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Le(e[s], t[s]);
  return n;
}
function qc() {
  return {
    app: null,
    config: {
      isNativeTag: bn,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Qh = 0;
function ep(e, t) {
  return function(s, i = null) {
    G(s) || (s = te({}, s)), i != null && !le(i) && (i = null);
    const r = qc(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const f = r.app = {
      _uid: Qh++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ia,
      get config() {
        return r.config;
      },
      set config(a) {
      },
      use(a, ...u) {
        return o.has(a) || (a && G(a.install) ? (o.add(a), a.install(f, ...u)) : G(a) && (o.add(a), a(f, ...u))), f;
      },
      mixin(a) {
        return r.mixins.includes(a) || r.mixins.push(a), f;
      },
      component(a, u) {
        return u ? (r.components[a] = u, f) : r.components[a];
      },
      directive(a, u) {
        return u ? (r.directives[a] = u, f) : r.directives[a];
      },
      mount(a, u, p) {
        if (!c) {
          const d = f._ceVNode || ge(s, i);
          return d.appContext = r, p === !0 ? p = "svg" : p === !1 && (p = void 0), u && t ? t(d, a) : e(d, a, p), c = !0, f._container = a, a.__vue_app__ = f, Es(d.component);
        }
      },
      onUnmount(a) {
        l.push(a);
      },
      unmount() {
        c && (it(
          l,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(a, u) {
        return r.provides[a] = u, f;
      },
      runWithContext(a) {
        const u = tn;
        tn = f;
        try {
          return a();
        } finally {
          tn = u;
        }
      }
    };
    return f;
  };
}
let tn = null;
function Gc(e, t) {
  if (Ae) {
    let n = Ae.provides;
    const s = Ae.parent && Ae.parent.provides;
    s === n && (n = Ae.provides = Object.create(s)), n[e] = t;
  }
}
function zn(e, t, n = !1) {
  const s = We();
  if (s || tn) {
    let i = tn ? tn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && G(t) ? t.call(s && s.proxy) : t;
  }
}
function tp() {
  return !!(We() || tn);
}
const Jc = {}, Yc = () => Object.create(Jc), Xc = (e) => Object.getPrototypeOf(e) === Jc;
function np(e, t, n, s = !1) {
  const i = {}, r = Yc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zc(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : hc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function sp(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = se(i), [c] = e.propsOptions;
  let f = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let u = 0; u < a.length; u++) {
        let p = a[u];
        if (Bi(e.emitsOptions, p))
          continue;
        const d = t[p];
        if (c)
          if (ie(r, p))
            d !== r[p] && (r[p] = d, f = !0);
          else {
            const b = fe(p);
            i[b] = _r(
              c,
              l,
              b,
              d,
              e,
              !1
            );
          }
        else
          d !== r[p] && (r[p] = d, f = !0);
      }
    }
  } else {
    Zc(e, t, i, r) && (f = !0);
    let a;
    for (const u in l)
      (!t || // for camelCase
      !ie(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = Ue(u)) === u || !ie(t, a))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[a] !== void 0) && (i[u] = _r(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (r !== l)
      for (const u in r)
        (!t || !ie(t, u)) && (delete r[u], f = !0);
  }
  f && Tt(e.attrs, "set", "");
}
function Zc(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const f = t[c];
      let a;
      i && ie(i, a = fe(c)) ? !r || !r.includes(a) ? n[a] = f : (l || (l = {}))[a] = f : Bi(e.emitsOptions, c) || (!(c in s) || f !== s[c]) && (s[c] = f, o = !0);
    }
  if (r) {
    const c = se(n), f = l || ee;
    for (let a = 0; a < r.length; a++) {
      const u = r[a];
      n[u] = _r(
        i,
        c,
        u,
        f[u],
        e,
        !ie(f, u)
      );
    }
  }
  return o;
}
function _r(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && G(c)) {
        const { propsDefaults: f } = i;
        if (n in f)
          s = f[n];
        else {
          const a = ln(i);
          s = f[n] = c.call(
            null,
            t
          ), a();
        }
      } else
        s = c;
      i.ce && i.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ue(n)) && (s = !0));
  }
  return s;
}
const ip = /* @__PURE__ */ new WeakMap();
function zc(e, t, n = !1) {
  const s = n ? ip : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!G(e)) {
    const a = (u) => {
      c = !0;
      const [p, d] = zc(u, t, !0);
      te(o, p), d && l.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!r && !c)
    return le(e) && s.set(e, vn), vn;
  if (B(r))
    for (let a = 0; a < r.length; a++) {
      const u = fe(r[a]);
      Qo(u) && (o[u] = ee);
    }
  else if (r)
    for (const a in r) {
      const u = fe(a);
      if (Qo(u)) {
        const p = r[a], d = o[u] = B(p) || G(p) ? { type: p } : te({}, p), b = d.type;
        let _ = !1, O = !0;
        if (B(b))
          for (let N = 0; N < b.length; ++N) {
            const A = b[N], g = G(A) && A.name;
            if (g === "Boolean") {
              _ = !0;
              break;
            } else g === "String" && (O = !1);
          }
        else
          _ = G(b) && b.name === "Boolean";
        d[
          0
          /* shouldCast */
        ] = _, d[
          1
          /* shouldCastTrue */
        ] = O, (_ || ie(d, "default")) && l.push(u);
      }
    }
  const f = [o, l];
  return le(e) && s.set(e, f), f;
}
function Qo(e) {
  return e[0] !== "$" && !Bt(e);
}
const io = (e) => e === "_" || e === "_ctx" || e === "$stable", ro = (e) => B(e) ? e.map(He) : [He(e)], rp = (e, t, n) => {
  if (t._n)
    return t;
  const s = Yr((...i) => ro(t(...i)), n);
  return s._c = !1, s;
}, Qc = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (io(i)) continue;
    const r = e[i];
    if (G(r))
      t[i] = rp(i, r, s);
    else if (r != null) {
      const o = ro(r);
      t[i] = () => o;
    }
  }
}, ea = (e, t) => {
  const n = ro(t);
  e.slots.default = () => n;
}, ta = (e, t, n) => {
  for (const s in t)
    (n || !io(s)) && (e[s] = t[s]);
}, op = (e, t, n) => {
  const s = e.slots = Yc();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (ta(s, t, n), n && Wl(s, "_", i, !0)) : Qc(t, s);
  } else t && ea(e, t);
}, lp = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ee;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : ta(i, t, n) : (r = !t.$stable, Qc(t, i)), o = t;
  } else t && (ea(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !io(l) && o[l] == null && delete i[l];
}, Se = da;
function na(e) {
  return ia(e);
}
function sa(e) {
  return ia(e, gh);
}
function ia(e, t) {
  const n = Ti();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: f,
    setElementText: a,
    parentNode: u,
    nextSibling: p,
    setScopeId: d = xe,
    insertStaticContent: b
  } = e, _ = (h, m, T, P = null, x = null, I = null, $ = void 0, F = null, L = !!m.dynamicChildren) => {
    if (h === m)
      return;
    h && !lt(h, m) && (P = ws(h), ut(h, x, I, !0), h = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: k, ref: q, shapeFlag: H } = m;
    switch (k) {
      case jt:
        O(h, m, T, P);
        break;
      case ye:
        N(h, m, T, P);
        break;
      case nn:
        h == null && A(m, T, P, $);
        break;
      case be:
        E(
          h,
          m,
          T,
          P,
          x,
          I,
          $,
          F,
          L
        );
        break;
      default:
        H & 1 ? v(
          h,
          m,
          T,
          P,
          x,
          I,
          $,
          F,
          L
        ) : H & 6 ? D(
          h,
          m,
          T,
          P,
          x,
          I,
          $,
          F,
          L
        ) : (H & 64 || H & 128) && k.process(
          h,
          m,
          T,
          P,
          x,
          I,
          $,
          F,
          L,
          pn
        );
    }
    q != null && x ? xn(q, h && h.ref, I, m || h, !m) : q == null && h && h.ref != null && xn(h.ref, null, I, h, !0);
  }, O = (h, m, T, P) => {
    if (h == null)
      s(
        m.el = l(m.children),
        T,
        P
      );
    else {
      const x = m.el = h.el;
      m.children !== h.children && f(x, m.children);
    }
  }, N = (h, m, T, P) => {
    h == null ? s(
      m.el = c(m.children || ""),
      T,
      P
    ) : m.el = h.el;
  }, A = (h, m, T, P) => {
    [h.el, h.anchor] = b(
      h.children,
      m,
      T,
      P,
      h.el,
      h.anchor
    );
  }, g = ({ el: h, anchor: m }, T, P) => {
    let x;
    for (; h && h !== m; )
      x = p(h), s(h, T, P), h = x;
    s(m, T, P);
  }, y = ({ el: h, anchor: m }) => {
    let T;
    for (; h && h !== m; )
      T = p(h), i(h), h = T;
    i(m);
  }, v = (h, m, T, P, x, I, $, F, L) => {
    m.type === "svg" ? $ = "svg" : m.type === "math" && ($ = "mathml"), h == null ? w(
      m,
      T,
      P,
      x,
      I,
      $,
      F,
      L
    ) : S(
      h,
      m,
      x,
      I,
      $,
      F,
      L
    );
  }, w = (h, m, T, P, x, I, $, F) => {
    let L, k;
    const { props: q, shapeFlag: H, transition: K, dirs: X } = h;
    if (L = h.el = o(
      h.type,
      I,
      q && q.is,
      q
    ), H & 8 ? a(L, h.children) : H & 16 && R(
      h.children,
      L,
      null,
      P,
      x,
      ir(h, I),
      $,
      F
    ), X && gt(h, null, P, "created"), V(L, h, h.scopeId, $, P), q) {
      for (const ce in q)
        ce !== "value" && !Bt(ce) && r(L, ce, null, q[ce], I, P);
      "value" in q && r(L, "value", null, q.value, I), (k = q.onVnodeBeforeMount) && Be(k, P, h);
    }
    X && gt(h, null, P, "beforeMount");
    const ne = ra(x, K);
    ne && K.beforeEnter(L), s(L, m, T), ((k = q && q.onVnodeMounted) || ne || X) && Se(() => {
      k && Be(k, P, h), ne && K.enter(L), X && gt(h, null, P, "mounted");
    }, x);
  }, V = (h, m, T, P, x) => {
    if (T && d(h, T), P)
      for (let I = 0; I < P.length; I++)
        d(h, P[I]);
    if (x) {
      let I = x.subTree;
      if (m === I || oi(I.type) && (I.ssContent === m || I.ssFallback === m)) {
        const $ = x.vnode;
        V(
          h,
          $,
          $.scopeId,
          $.slotScopeIds,
          x.parent
        );
      }
    }
  }, R = (h, m, T, P, x, I, $, F, L = 0) => {
    for (let k = L; k < h.length; k++) {
      const q = h[k] = F ? Vt(h[k]) : He(h[k]);
      _(
        null,
        q,
        m,
        T,
        P,
        x,
        I,
        $,
        F
      );
    }
  }, S = (h, m, T, P, x, I, $) => {
    const F = m.el = h.el;
    let { patchFlag: L, dynamicChildren: k, dirs: q } = m;
    L |= h.patchFlag & 16;
    const H = h.props || ee, K = m.props || ee;
    let X;
    if (T && Jt(T, !1), (X = K.onVnodeBeforeUpdate) && Be(X, T, m, h), q && gt(m, h, T, "beforeUpdate"), T && Jt(T, !0), (H.innerHTML && K.innerHTML == null || H.textContent && K.textContent == null) && a(F, ""), k ? C(
      h.dynamicChildren,
      k,
      F,
      T,
      P,
      ir(m, x),
      I
    ) : $ || j(
      h,
      m,
      F,
      null,
      T,
      P,
      ir(m, x),
      I,
      !1
    ), L > 0) {
      if (L & 16)
        M(F, H, K, T, x);
      else if (L & 2 && H.class !== K.class && r(F, "class", null, K.class, x), L & 4 && r(F, "style", H.style, K.style, x), L & 8) {
        const ne = m.dynamicProps;
        for (let ce = 0; ce < ne.length; ce++) {
          const oe = ne[ce], Ve = H[oe], we = K[oe];
          (we !== Ve || oe === "value") && r(F, oe, Ve, we, x, T);
        }
      }
      L & 1 && h.children !== m.children && a(F, m.children);
    } else !$ && k == null && M(F, H, K, T, x);
    ((X = K.onVnodeUpdated) || q) && Se(() => {
      X && Be(X, T, m, h), q && gt(m, h, T, "updated");
    }, P);
  }, C = (h, m, T, P, x, I, $) => {
    for (let F = 0; F < m.length; F++) {
      const L = h[F], k = m[F], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lt(L, k) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? u(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      _(
        L,
        k,
        q,
        null,
        P,
        x,
        I,
        $,
        !0
      );
    }
  }, M = (h, m, T, P, x) => {
    if (m !== T) {
      if (m !== ee)
        for (const I in m)
          !Bt(I) && !(I in T) && r(
            h,
            I,
            m[I],
            null,
            x,
            P
          );
      for (const I in T) {
        if (Bt(I)) continue;
        const $ = T[I], F = m[I];
        $ !== F && I !== "value" && r(h, I, F, $, x, P);
      }
      "value" in T && r(h, "value", m.value, T.value, x);
    }
  }, E = (h, m, T, P, x, I, $, F, L) => {
    const k = m.el = h ? h.el : l(""), q = m.anchor = h ? h.anchor : l("");
    let { patchFlag: H, dynamicChildren: K, slotScopeIds: X } = m;
    X && (F = F ? F.concat(X) : X), h == null ? (s(k, T, P), s(q, T, P), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      T,
      q,
      x,
      I,
      $,
      F,
      L
    )) : H > 0 && H & 64 && K && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren ? (C(
      h.dynamicChildren,
      K,
      T,
      x,
      I,
      $,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || x && m === x.subTree) && oo(
      h,
      m,
      !0
      /* shallow */
    )) : j(
      h,
      m,
      T,
      q,
      x,
      I,
      $,
      F,
      L
    );
  }, D = (h, m, T, P, x, I, $, F, L) => {
    m.slotScopeIds = F, h == null ? m.shapeFlag & 512 ? x.ctx.activate(
      m,
      T,
      P,
      $,
      L
    ) : W(
      m,
      T,
      P,
      x,
      I,
      $,
      L
    ) : J(h, m, L);
  }, W = (h, m, T, P, x, I, $) => {
    const F = h.component = Sa(
      h,
      P,
      x
    );
    if (bs(h) && (F.ctx.renderer = pn), Ea(F, !1, $), F.asyncDep) {
      if (x && x.registerDep(F, U, $), !h.el) {
        const L = F.subTree = ge(ye);
        N(null, L, m, T), h.placeholder = L.el;
      }
    } else
      U(
        F,
        h,
        m,
        T,
        x,
        I,
        $
      );
  }, J = (h, m, T) => {
    const P = m.component = h.component;
    if (_p(h, m, T))
      if (P.asyncDep && !P.asyncResolved) {
        Y(P, m, T);
        return;
      } else
        P.next = m, P.update();
    else
      m.el = h.el, P.vnode = m;
  }, U = (h, m, T, P, x, I, $) => {
    const F = () => {
      if (h.isMounted) {
        let { next: H, bu: K, u: X, parent: ne, vnode: ce } = h;
        {
          const qe = oa(h);
          if (qe) {
            H && (H.el = ce.el, Y(h, H, $)), qe.asyncDep.then(() => {
              h.isUnmounted || F();
            });
            return;
          }
        }
        let oe = H, Ve;
        Jt(h, !1), H ? (H.el = ce.el, Y(h, H, $)) : H = ce, K && Cn(K), (Ve = H.props && H.props.onVnodeBeforeUpdate) && Be(Ve, ne, H, ce), Jt(h, !0);
        const we = js(h), ot = h.subTree;
        h.subTree = we, _(
          ot,
          we,
          // parent may have changed if it's in a teleport
          u(ot.el),
          // anchor may have changed if it's in a fragment
          ws(ot),
          h,
          x,
          I
        ), H.el = we.el, oe === null && Hi(h, we.el), X && Se(X, x), (Ve = H.props && H.props.onVnodeUpdated) && Se(
          () => Be(Ve, ne, H, ce),
          x
        );
      } else {
        let H;
        const { el: K, props: X } = m, { bm: ne, m: ce, parent: oe, root: Ve, type: we } = h, ot = Ut(m);
        if (Jt(h, !1), ne && Cn(ne), !ot && (H = X && X.onVnodeBeforeMount) && Be(H, oe, m), Jt(h, !0), K && Yi) {
          const qe = () => {
            h.subTree = js(h), Yi(
              K,
              h.subTree,
              h,
              x,
              null
            );
          };
          ot && we.__asyncHydrate ? we.__asyncHydrate(
            K,
            h,
            qe
          ) : qe();
        } else {
          Ve.ce && // @ts-expect-error _def is private
          Ve.ce._def.shadowRoot !== !1 && Ve.ce._injectChildStyle(we);
          const qe = h.subTree = js(h);
          _(
            null,
            qe,
            T,
            P,
            h,
            x,
            I
          ), m.el = qe.el;
        }
        if (ce && Se(ce, x), !ot && (H = X && X.onVnodeMounted)) {
          const qe = m;
          Se(
            () => Be(H, oe, qe),
            x
          );
        }
        (m.shapeFlag & 256 || oe && Ut(oe.vnode) && oe.vnode.shapeFlag & 256) && h.a && Se(h.a, x), h.isMounted = !0, m = T = P = null;
      }
    };
    h.scope.on();
    const L = h.effect = new ns(F);
    h.scope.off();
    const k = h.update = L.run.bind(L), q = h.job = L.runIfDirty.bind(L);
    q.i = h, q.id = h.uid, L.scheduler = () => Jr(q), Jt(h, !0), k();
  }, Y = (h, m, T) => {
    m.component = h;
    const P = h.vnode.props;
    h.vnode = m, h.next = null, sp(h, m.props, P, T), lp(h, m.children, T), xt(), Ho(h), wt();
  }, j = (h, m, T, P, x, I, $, F, L = !1) => {
    const k = h && h.children, q = h ? h.shapeFlag : 0, H = m.children, { patchFlag: K, shapeFlag: X } = m;
    if (K > 0) {
      if (K & 128) {
        ft(
          k,
          H,
          T,
          P,
          x,
          I,
          $,
          F,
          L
        );
        return;
      } else if (K & 256) {
        pe(
          k,
          H,
          T,
          P,
          x,
          I,
          $,
          F,
          L
        );
        return;
      }
    }
    X & 8 ? (q & 16 && Hn(k, x, I), H !== k && a(T, H)) : q & 16 ? X & 16 ? ft(
      k,
      H,
      T,
      P,
      x,
      I,
      $,
      F,
      L
    ) : Hn(k, x, I, !0) : (q & 8 && a(T, ""), X & 16 && R(
      H,
      T,
      P,
      x,
      I,
      $,
      F,
      L
    ));
  }, pe = (h, m, T, P, x, I, $, F, L) => {
    h = h || vn, m = m || vn;
    const k = h.length, q = m.length, H = Math.min(k, q);
    let K;
    for (K = 0; K < H; K++) {
      const X = m[K] = L ? Vt(m[K]) : He(m[K]);
      _(
        h[K],
        X,
        T,
        null,
        x,
        I,
        $,
        F,
        L
      );
    }
    k > q ? Hn(
      h,
      x,
      I,
      !0,
      !1,
      H
    ) : R(
      m,
      T,
      P,
      x,
      I,
      $,
      F,
      L,
      H
    );
  }, ft = (h, m, T, P, x, I, $, F, L) => {
    let k = 0;
    const q = m.length;
    let H = h.length - 1, K = q - 1;
    for (; k <= H && k <= K; ) {
      const X = h[k], ne = m[k] = L ? Vt(m[k]) : He(m[k]);
      if (lt(X, ne))
        _(
          X,
          ne,
          T,
          null,
          x,
          I,
          $,
          F,
          L
        );
      else
        break;
      k++;
    }
    for (; k <= H && k <= K; ) {
      const X = h[H], ne = m[K] = L ? Vt(m[K]) : He(m[K]);
      if (lt(X, ne))
        _(
          X,
          ne,
          T,
          null,
          x,
          I,
          $,
          F,
          L
        );
      else
        break;
      H--, K--;
    }
    if (k > H) {
      if (k <= K) {
        const X = K + 1, ne = X < q ? m[X].el : P;
        for (; k <= K; )
          _(
            null,
            m[k] = L ? Vt(m[k]) : He(m[k]),
            T,
            ne,
            x,
            I,
            $,
            F,
            L
          ), k++;
      }
    } else if (k > K)
      for (; k <= H; )
        ut(h[k], x, I, !0), k++;
    else {
      const X = k, ne = k, ce = /* @__PURE__ */ new Map();
      for (k = ne; k <= K; k++) {
        const Ge = m[k] = L ? Vt(m[k]) : He(m[k]);
        Ge.key != null && ce.set(Ge.key, k);
      }
      let oe, Ve = 0;
      const we = K - ne + 1;
      let ot = !1, qe = 0;
      const Un = new Array(we);
      for (k = 0; k < we; k++) Un[k] = 0;
      for (k = X; k <= H; k++) {
        const Ge = h[k];
        if (Ve >= we) {
          ut(Ge, x, I, !0);
          continue;
        }
        let ht;
        if (Ge.key != null)
          ht = ce.get(Ge.key);
        else
          for (oe = ne; oe <= K; oe++)
            if (Un[oe - ne] === 0 && lt(Ge, m[oe])) {
              ht = oe;
              break;
            }
        ht === void 0 ? ut(Ge, x, I, !0) : (Un[ht - ne] = k + 1, ht >= qe ? qe = ht : ot = !0, _(
          Ge,
          m[ht],
          T,
          null,
          x,
          I,
          $,
          F,
          L
        ), Ve++);
      }
      const Mo = ot ? cp(Un) : vn;
      for (oe = Mo.length - 1, k = we - 1; k >= 0; k--) {
        const Ge = ne + k, ht = m[Ge], Lo = m[Ge + 1], Do = Ge + 1 < q ? (
          // #13559, fallback to el placeholder for unresolved async component
          Lo.el || Lo.placeholder
        ) : P;
        Un[k] === 0 ? _(
          null,
          ht,
          T,
          Do,
          x,
          I,
          $,
          F,
          L
        ) : ot && (oe < 0 || k !== Mo[oe] ? rt(ht, T, Do, 2) : oe--);
      }
    }
  }, rt = (h, m, T, P, x = null) => {
    const { el: I, type: $, transition: F, children: L, shapeFlag: k } = h;
    if (k & 6) {
      rt(h.component.subTree, m, T, P);
      return;
    }
    if (k & 128) {
      h.suspense.move(m, T, P);
      return;
    }
    if (k & 64) {
      $.move(h, m, T, pn);
      return;
    }
    if ($ === be) {
      s(I, m, T);
      for (let H = 0; H < L.length; H++)
        rt(L[H], m, T, P);
      s(h.anchor, m, T);
      return;
    }
    if ($ === nn) {
      g(h, m, T);
      return;
    }
    if (P !== 2 && k & 1 && F)
      if (P === 0)
        F.beforeEnter(I), s(I, m, T), Se(() => F.enter(I), x);
      else {
        const { leave: H, delayLeave: K, afterLeave: X } = F, ne = () => {
          h.ctx.isUnmounted ? i(I) : s(I, m, T);
        }, ce = () => {
          I._isLeaving && I[Et](
            !0
            /* cancelled */
          ), H(I, () => {
            ne(), X && X();
          });
        };
        K ? K(I, ne, ce) : ce();
      }
    else
      s(I, m, T);
  }, ut = (h, m, T, P = !1, x = !1) => {
    const {
      type: I,
      props: $,
      ref: F,
      children: L,
      dynamicChildren: k,
      shapeFlag: q,
      patchFlag: H,
      dirs: K,
      cacheIndex: X
    } = h;
    if (H === -2 && (x = !1), F != null && (xt(), xn(F, null, T, h, !0), wt()), X != null && (m.renderCache[X] = void 0), q & 256) {
      m.ctx.deactivate(h);
      return;
    }
    const ne = q & 1 && K, ce = !Ut(h);
    let oe;
    if (ce && (oe = $ && $.onVnodeBeforeUnmount) && Be(oe, m, h), q & 6)
      Bf(h.component, T, P);
    else {
      if (q & 128) {
        h.suspense.unmount(T, P);
        return;
      }
      ne && gt(h, null, m, "beforeUnmount"), q & 64 ? h.type.remove(
        h,
        m,
        T,
        pn,
        P
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== be || H > 0 && H & 64) ? Hn(
        k,
        m,
        T,
        !1,
        !0
      ) : (I === be && H & 384 || !x && q & 16) && Hn(L, m, T), P && Po(h);
    }
    (ce && (oe = $ && $.onVnodeUnmounted) || ne) && Se(() => {
      oe && Be(oe, m, h), ne && gt(h, null, m, "unmounted");
    }, T);
  }, Po = (h) => {
    const { type: m, el: T, anchor: P, transition: x } = h;
    if (m === be) {
      $f(T, P);
      return;
    }
    if (m === nn) {
      y(h);
      return;
    }
    const I = () => {
      i(T), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (h.shapeFlag & 1 && x && !x.persisted) {
      const { leave: $, delayLeave: F } = x, L = () => $(T, I);
      F ? F(h.el, I, L) : L();
    } else
      I();
  }, $f = (h, m) => {
    let T;
    for (; h !== m; )
      T = p(h), i(h), h = T;
    i(m);
  }, Bf = (h, m, T) => {
    const { bum: P, scope: x, job: I, subTree: $, um: F, m: L, a: k } = h;
    ri(L), ri(k), P && Cn(P), x.stop(), I && (I.flags |= 8, ut($, h, m, T)), F && Se(F, m), Se(() => {
      h.isUnmounted = !0;
    }, m);
  }, Hn = (h, m, T, P = !1, x = !1, I = 0) => {
    for (let $ = I; $ < h.length; $++)
      ut(h[$], m, T, P, x);
  }, ws = (h) => {
    if (h.shapeFlag & 6)
      return ws(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const m = p(h.anchor || h.el), T = m && m[Cc];
    return T ? p(T) : m;
  };
  let Gi = !1;
  const ko = (h, m, T) => {
    h == null ? m._vnode && ut(m._vnode, null, null, !0) : _(
      m._vnode || null,
      h,
      m,
      null,
      null,
      null,
      T
    ), m._vnode = h, Gi || (Gi = !0, Ho(), ni(), Gi = !1);
  }, pn = {
    p: _,
    um: ut,
    m: rt,
    r: Po,
    mt: W,
    mc: R,
    pc: j,
    pbc: C,
    n: ws,
    o: e
  };
  let Ji, Yi;
  return t && ([Ji, Yi] = t(
    pn
  )), {
    render: ko,
    hydrate: Ji,
    createApp: ep(ko, Ji)
  };
}
function ir({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ra(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (B(s) && B(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Vt(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && oo(o, l)), l.type === jt && // avoid cached text nodes retaining detached dom nodes
      l.patchFlag !== -1 && (l.el = o.el), l.type === ye && !l.el && (l.el = o.el);
    }
}
function cp(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const f = e[s];
    if (f !== 0) {
      if (i = n[n.length - 1], e[i] < f) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < f ? r = l + 1 : o = l;
      f < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function oa(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : oa(t);
}
function ri(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const la = Symbol.for("v-scx"), ca = () => zn(la);
function ap(e, t) {
  return vs(e, null, t);
}
function fp(e, t) {
  return vs(
    e,
    null,
    { flush: "post" }
  );
}
function aa(e, t) {
  return vs(
    e,
    null,
    { flush: "sync" }
  );
}
function wn(e, t, n) {
  return vs(e, t, n);
}
function vs(e, t, n = ee) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = te({}, n), c = t && s || !t && r !== "post";
  let f;
  if (Rn) {
    if (r === "sync") {
      const d = ca();
      f = d.__watcherHandles || (d.__watcherHandles = []);
    } else if (!c) {
      const d = () => {
      };
      return d.stop = xe, d.resume = xe, d.pause = xe, d;
    }
  }
  const a = Ae;
  l.call = (d, b, _) => it(d, a, b, _);
  let u = !1;
  r === "post" ? l.scheduler = (d) => {
    Se(d, a && a.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (d, b) => {
    b ? d() : Jr(d);
  }), l.augmentJob = (d) => {
    t && (d.flags |= 4), u && (d.flags |= 2, a && (d.id = a.uid, d.i = a));
  };
  const p = Xu(e, t, l);
  return Rn && (f ? f.push(p) : c && p()), p;
}
function up(e, t, n) {
  const s = this.proxy, i = Z(e) ? e.includes(".") ? fa(s, e) : () => s[e] : e.bind(s, s);
  let r;
  G(t) ? r = t : (r = t.handler, n = t);
  const o = ln(this), l = vs(i, r.bind(s), n);
  return o(), l;
}
function fa(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
function hp(e, t, n = ee) {
  const s = We(), i = fe(t), r = Ue(t), o = ua(e, i), l = mc((c, f) => {
    let a, u = ee, p;
    return aa(() => {
      const d = e[i];
      De(a, d) && (a = d, f());
    }), {
      get() {
        return c(), n.get ? n.get(a) : a;
      },
      set(d) {
        const b = n.set ? n.set(d) : d;
        if (!De(b, a) && !(u !== ee && De(d, u)))
          return;
        const _ = s.vnode.props;
        _ && // check if parent has passed v-model
        (t in _ || i in _ || r in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${r}` in _) || (a = d, f()), s.emit(`update:${t}`, b), De(d, b) && De(d, u) && !De(b, p) && f(), u = d, p = b;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let c = 0;
    return {
      next() {
        return c < 2 ? { value: c++ ? o || ee : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const ua = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${fe(t)}Modifiers`] || e[`${Ue(t)}Modifiers`];
function pp(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let i = n;
  const r = t.startsWith("update:"), o = r && ua(s, t.slice(7));
  o && (o.trim && (i = n.map((a) => Z(a) ? a.trim() : a)), o.number && (i = n.map(Xs)));
  let l, c = s[l = Tn(t)] || // also try camelCase event handler (#2249)
  s[l = Tn(fe(t))];
  !c && r && (c = s[l = Tn(Ue(t))]), c && it(
    c,
    e,
    6,
    i
  );
  const f = s[l + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, it(
      f,
      e,
      6,
      i
    );
  }
}
const dp = /* @__PURE__ */ new WeakMap();
function ha(e, t, n = !1) {
  const s = n ? dp : t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!G(e)) {
    const c = (f) => {
      const a = ha(f, t, !0);
      a && (l = !0, te(o, a));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (le(e) && s.set(e, null), null) : (B(r) ? r.forEach((c) => o[c] = null) : te(o, r), le(e) && s.set(e, o), o);
}
function Bi(e, t) {
  return !e || !an(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Ue(t)) || ie(e, t));
}
function js(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: f,
    renderCache: a,
    props: u,
    data: p,
    setupState: d,
    ctx: b,
    inheritAttrs: _
  } = e, O = ls(e);
  let N, A;
  try {
    if (n.shapeFlag & 4) {
      const y = i || s, v = y;
      N = He(
        f.call(
          v,
          y,
          a,
          u,
          d,
          p,
          b
        )
      ), A = l;
    } else {
      const y = t;
      N = He(
        y.length > 1 ? y(
          u,
          { attrs: l, slots: o, emit: c }
        ) : y(
          u,
          null
        )
      ), A = t.props ? l : mp(l);
    }
  } catch (y) {
    Qn.length = 0, hn(y, e, 1), N = ge(ye);
  }
  let g = N;
  if (A && _ !== !1) {
    const y = Object.keys(A), { shapeFlag: v } = g;
    y.length && v & 7 && (r && y.some(Vr) && (A = yp(
      A,
      r
    )), g = yt(g, A, !1, !0));
  }
  return n.dirs && (g = yt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && Ot(g, n.transition), N = g, ls(O), N;
}
function gp(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Rt(i)) {
      if (i.type !== ye || i.children === "v-if") {
        if (n)
          return;
        n = i;
      }
    } else
      return;
  }
  return n;
}
const mp = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || an(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, yp = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function _p(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, f = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? el(s, o, f) : !!o;
    if (c & 8) {
      const a = t.dynamicProps;
      for (let u = 0; u < a.length; u++) {
        const p = a[u];
        if (o[p] !== s[p] && !Bi(f, p))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? el(s, o, f) : !0 : !!o;
  return !1;
}
function el(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Bi(n, r))
      return !0;
  }
  return !1;
}
function Hi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const oi = (e) => e.__isSuspense;
let br = 0;
const bp = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, i, r, o, l, c, f) {
    if (e == null)
      vp(
        t,
        n,
        s,
        i,
        r,
        o,
        l,
        c,
        f
      );
    else {
      if (r && r.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Ep(
        e,
        t,
        n,
        s,
        i,
        o,
        l,
        c,
        f
      );
    }
  },
  hydrate: Tp,
  normalize: Cp
}, Sp = bp;
function as(e, t) {
  const n = e.props && e.props[t];
  G(n) && n();
}
function vp(e, t, n, s, i, r, o, l, c) {
  const {
    p: f,
    o: { createElement: a }
  } = c, u = a("div"), p = e.suspense = pa(
    e,
    i,
    s,
    t,
    u,
    n,
    r,
    o,
    l,
    c
  );
  f(
    null,
    p.pendingBranch = e.ssContent,
    u,
    null,
    s,
    p,
    r,
    o
  ), p.deps > 0 ? (as(e, "onPending"), as(e, "onFallback"), f(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    r,
    o
  ), In(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Ep(e, t, n, s, i, r, o, l, { p: c, um: f, o: { createElement: a } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const p = t.ssContent, d = t.ssFallback, { activeBranch: b, pendingBranch: _, isInFallback: O, isHydrating: N } = u;
  if (_)
    u.pendingBranch = p, lt(_, p) ? (c(
      _,
      p,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : O && (N || (c(
      b,
      d,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), In(u, d)))) : (u.pendingId = br++, N ? (u.isHydrating = !1, u.activeBranch = _) : f(_, i, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = a("div"), O ? (c(
      null,
      p,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : (c(
      b,
      d,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), In(u, d))) : b && lt(b, p) ? (c(
      b,
      p,
      n,
      s,
      i,
      u,
      r,
      o,
      l
    ), u.resolve(!0)) : (c(
      null,
      p,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (b && lt(b, p))
    c(
      b,
      p,
      n,
      s,
      i,
      u,
      r,
      o,
      l
    ), In(u, p);
  else if (as(t, "onPending"), u.pendingBranch = p, p.shapeFlag & 512 ? u.pendingId = p.component.suspenseId : u.pendingId = br++, c(
    null,
    p,
    u.hiddenContainer,
    null,
    i,
    u,
    r,
    o,
    l
  ), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: A, pendingId: g } = u;
    A > 0 ? setTimeout(() => {
      u.pendingId === g && u.fallback(d);
    }, A) : A === 0 && u.fallback(d);
  }
}
function pa(e, t, n, s, i, r, o, l, c, f, a = !1) {
  const {
    p: u,
    m: p,
    um: d,
    n: b,
    o: { parentNode: _, remove: O }
  } = f;
  let N;
  const A = Ap(e);
  A && t && t.pendingBranch && (N = t.pendingId, t.deps++);
  const g = e.props ? Zs(e.props.timeout) : void 0, y = r, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: s,
    hiddenContainer: i,
    deps: 0,
    pendingId: br++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !a,
    isHydrating: a,
    isUnmounted: !1,
    effects: [],
    resolve(w = !1, V = !1) {
      const {
        vnode: R,
        activeBranch: S,
        pendingBranch: C,
        pendingId: M,
        effects: E,
        parentComponent: D,
        container: W
      } = v;
      let J = !1;
      v.isHydrating ? v.isHydrating = !1 : w || (J = S && C.transition && C.transition.mode === "out-in", J && (S.transition.afterLeave = () => {
        M === v.pendingId && (p(
          C,
          W,
          r === y ? b(S) : r,
          0
        ), rs(E));
      }), S && (_(S.el) === W && (r = b(S)), d(S, D, v, !0)), J || p(C, W, r, 0)), In(v, C), v.pendingBranch = null, v.isInFallback = !1;
      let U = v.parent, Y = !1;
      for (; U; ) {
        if (U.pendingBranch) {
          U.effects.push(...E), Y = !0;
          break;
        }
        U = U.parent;
      }
      !Y && !J && rs(E), v.effects = [], A && t && t.pendingBranch && N === t.pendingId && (t.deps--, t.deps === 0 && !V && t.resolve()), as(R, "onResolve");
    },
    fallback(w) {
      if (!v.pendingBranch)
        return;
      const { vnode: V, activeBranch: R, parentComponent: S, container: C, namespace: M } = v;
      as(V, "onFallback");
      const E = b(R), D = () => {
        v.isInFallback && (u(
          null,
          w,
          C,
          E,
          S,
          null,
          // fallback tree will not have suspense context
          M,
          l,
          c
        ), In(v, w));
      }, W = w.transition && w.transition.mode === "out-in";
      W && (R.transition.afterLeave = D), v.isInFallback = !0, d(
        R,
        S,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), W || D();
    },
    move(w, V, R) {
      v.activeBranch && p(v.activeBranch, w, V, R), v.container = w;
    },
    next() {
      return v.activeBranch && b(v.activeBranch);
    },
    registerDep(w, V, R) {
      const S = !!v.pendingBranch;
      S && v.deps++;
      const C = w.vnode.el;
      w.asyncDep.catch((M) => {
        hn(M, w, 0);
      }).then((M) => {
        if (w.isUnmounted || v.isUnmounted || v.pendingId !== w.suspenseId)
          return;
        w.asyncResolved = !0;
        const { vnode: E } = w;
        Er(w, M, !1), C && (E.el = C);
        const D = !C && w.subTree.el;
        V(
          w,
          E,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          _(C || w.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          C ? null : b(w.subTree),
          v,
          o,
          R
        ), D && O(D), Hi(w, E.el), S && --v.deps === 0 && v.resolve();
      });
    },
    unmount(w, V) {
      v.isUnmounted = !0, v.activeBranch && d(
        v.activeBranch,
        n,
        w,
        V
      ), v.pendingBranch && d(
        v.pendingBranch,
        n,
        w,
        V
      );
    }
  };
  return v;
}
function Tp(e, t, n, s, i, r, o, l, c) {
  const f = t.suspense = pa(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    i,
    r,
    o,
    l,
    !0
  ), a = c(
    e,
    f.pendingBranch = t.ssContent,
    n,
    f,
    r,
    o
  );
  return f.deps === 0 && f.resolve(!1, !0), a;
}
function Cp(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = tl(
    s ? n.default : n
  ), e.ssFallback = s ? tl(n.fallback) : ge(ye);
}
function tl(e) {
  let t;
  if (G(e)) {
    const n = on && e._c;
    n && (e._d = !1, Ze()), e = e(), n && (e._d = !0, t = ke, ga());
  }
  return B(e) && (e = gp(e)), e = He(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function da(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : rs(e);
}
function In(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let i = t.el;
  for (; !i && t.component; )
    t = t.component.subTree, i = t.el;
  n.el = i, s && s.subTree === n && (s.vnode.el = i, Hi(s, i));
}
function Ap(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const be = Symbol.for("v-fgt"), jt = Symbol.for("v-txt"), ye = Symbol.for("v-cmt"), nn = Symbol.for("v-stc"), Qn = [];
let ke = null;
function Ze(e = !1) {
  Qn.push(ke = e ? null : []);
}
function ga() {
  Qn.pop(), ke = Qn[Qn.length - 1] || null;
}
let on = 1;
function fs(e, t = !1) {
  on += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function ma(e) {
  return e.dynamicChildren = on > 0 ? ke || vn : null, ga(), on > 0 && ke && ke.push(e), e;
}
function qt(e, t, n, s, i, r) {
  return ma(
    mt(
      e,
      t,
      n,
      s,
      i,
      r,
      !0
    )
  );
}
function us(e, t, n, s, i) {
  return ma(
    ge(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Rt(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Np(e) {
}
const ya = ({ key: e }) => e ?? null, Ks = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Z(e) || Ee(e) || G(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function mt(e, t = null, n = null, s = 0, i = null, r = e === be ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ya(t),
    ref: t && Ks(t),
    scopeId: ki,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return l ? (co(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= Z(n) ? 8 : 16), on > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  ke && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ke.push(c), c;
}
const ge = xp;
function xp(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Bc) && (e = ye), Rt(e)) {
    const l = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && co(l, n), on > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Lp(e) && (e = e.__vccOpts), t) {
    t = _a(t);
    let { class: l, style: c } = t;
    l && !Z(l) && (t.class = $n(l)), le(c) && (Oi(c) && !B(c) && (c = te({}, c)), t.style = _s(c));
  }
  const o = Z(e) ? 1 : oi(e) ? 128 : Ac(e) ? 64 : le(e) ? 4 : G(e) ? 2 : 0;
  return mt(
    e,
    t,
    n,
    s,
    i,
    o,
    r,
    !0
  );
}
function _a(e) {
  return e ? Oi(e) || Xc(e) ? te({}, e) : e : null;
}
function yt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, f = t ? ba(i || {}, t) : i, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && ya(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? B(r) ? r.concat(Ks(t)) : [r, Ks(t)] : Ks(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== be ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && yt(e.ssContent),
    ssFallback: e.ssFallback && yt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Ot(
    a,
    c.clone(a)
  ), a;
}
function lo(e = " ", t = 0) {
  return ge(jt, null, e, t);
}
function wp(e, t) {
  const n = ge(nn, null, e);
  return n.staticCount = t, n;
}
function Ip(e = "", t = !1) {
  return t ? (Ze(), us(ye, null, e)) : ge(ye, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? ge(ye) : B(e) ? ge(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rt(e) ? Vt(e) : ge(jt, null, String(e));
}
function Vt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : yt(e);
}
function co(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (B(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), co(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Xc(t) ? t._ctx = Ne : i === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else G(t) ? (t = { default: t, _ctx: Ne }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ba(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = $n([t.class, s.class]));
      else if (i === "style")
        t.style = _s([t.style, s.style]);
      else if (an(i)) {
        const r = t[i], o = s[i];
        o && r !== o && !(B(r) && r.includes(o)) && (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Be(e, t, n, s = null) {
  it(e, t, 7, [
    n,
    s
  ]);
}
const Op = qc();
let Rp = 0;
function Sa(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || Op, r = {
    uid: Rp++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Ur(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: zc(s, i),
    emitsOptions: ha(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = pp.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const We = () => Ae || Ne;
let li, Sr;
{
  const e = Ti(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  li = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ae = n
  ), Sr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Rn = n
  );
}
const ln = (e) => {
  const t = Ae;
  return li(e), e.scope.on(), () => {
    e.scope.off(), li(t);
  };
}, vr = () => {
  Ae && Ae.scope.off(), li(null);
};
function va(e) {
  return e.vnode.shapeFlag & 4;
}
let Rn = !1;
function Ea(e, t = !1, n = !1) {
  t && Sr(t);
  const { props: s, children: i } = e.vnode, r = va(e);
  np(e, s, r, t), op(e, i, n || t);
  const o = r ? Pp(e, t) : void 0;
  return t && Sr(!1), o;
}
function Pp(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gr);
  const { setup: s } = n;
  if (s) {
    xt();
    const i = e.setupContext = s.length > 1 ? Aa(e) : null, r = ln(e), o = Bn(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Br(o);
    if (wt(), r(), (l || e.sp) && !Ut(e) && zr(e), l) {
      if (o.then(vr, vr), t)
        return o.then((c) => {
          Er(e, c, t);
        }).catch((c) => {
          hn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      Er(e, o, t);
  } else
    Ca(e, t);
}
function Er(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Gr(t)), Ca(e, n);
}
let ci, Tr;
function Ta(e) {
  ci = e, Tr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Mh));
  };
}
const kp = () => !ci;
function Ca(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ci && !s.render) {
      const i = s.template || so(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, f = te(
          te(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        s.render = ci(i, f);
      }
    }
    e.render = s.render || xe, Tr && Tr(e);
  }
  {
    const i = ln(e);
    xt();
    try {
      Jh(e);
    } finally {
      wt(), i();
    }
  }
}
const Mp = {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function Aa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Mp),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Es(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gr(pc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Zn)
        return Zn[n](e);
    },
    has(t, n) {
      return n in t || n in Zn;
    }
  })) : e.proxy;
}
function Cr(e, t = !0) {
  return G(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Lp(e) {
  return G(e) && "__vccOpts" in e;
}
const Na = (e, t) => qu(e, t, Rn);
function xa(e, t, n) {
  const s = (r, o, l) => {
    fs(-1);
    try {
      return ge(r, o, l);
    } finally {
      fs(1);
    }
  }, i = arguments.length;
  return i === 2 ? le(t) && !B(t) ? Rt(t) ? s(e, null, [t]) : s(e, t) : s(e, null, t) : (i > 3 ? n = Array.prototype.slice.call(arguments, 2) : i === 3 && Rt(n) && (n = [n]), s(e, t, n));
}
function Dp() {
}
function Fp(e, t, n, s) {
  const i = n[s];
  if (i && wa(i, e))
    return i;
  const r = t();
  return r.memo = e.slice(), r.cacheIndex = s, n[s] = r;
}
function wa(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (De(n[s], t[s]))
      return !1;
  return on > 0 && ke && ke.push(e), !0;
}
const Ia = "3.5.21", Vp = xe, $p = th, Bp = _n, Hp = Tc, Up = {
  createComponentInstance: Sa,
  setupComponent: Ea,
  renderComponentRoot: js,
  setCurrentRenderingInstance: ls,
  isVNode: Rt,
  normalizeVNode: He,
  getComponentPublicInstance: Es,
  ensureValidVNode: no,
  pushWarningContext: Zu,
  popWarningContext: zu
}, jp = Up, Kp = null, Wp = null, qp = null;
/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ar;
const nl = typeof window < "u" && window.trustedTypes;
if (nl)
  try {
    Ar = /* @__PURE__ */ nl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Oa = Ar ? (e) => Ar.createHTML(e) : (e) => e, Gp = "http://www.w3.org/2000/svg", Jp = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, sl = vt && /* @__PURE__ */ vt.createElement("template"), Yp = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? vt.createElementNS(Gp, e) : t === "mathml" ? vt.createElementNS(Jp, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, r) {
    const o = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      sl.innerHTML = Oa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = sl.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, kt = "transition", Kn = "animation", Pn = Symbol("_vtc"), Ra = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Pa = /* @__PURE__ */ te(
  {},
  Zr,
  Ra
), Xp = (e) => (e.displayName = "Transition", e.props = Pa, e), Zp = /* @__PURE__ */ Xp(
  (e, { slots: t }) => xa(Oc, ka(e), t)
), Yt = (e, t = []) => {
  B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, il = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ka(e) {
  const t = {};
  for (const E in e)
    E in Ra || (t[E] = e[E]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: i,
    enterFromClass: r = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = r,
    appearActiveClass: f = o,
    appearToClass: a = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: d = `${n}-leave-to`
  } = e, b = zp(i), _ = b && b[0], O = b && b[1], {
    onBeforeEnter: N,
    onEnter: A,
    onEnterCancelled: g,
    onLeave: y,
    onLeaveCancelled: v,
    onBeforeAppear: w = N,
    onAppear: V = A,
    onAppearCancelled: R = g
  } = t, S = (E, D, W, J) => {
    E._enterCancelled = J, Lt(E, D ? a : l), Lt(E, D ? f : o), W && W();
  }, C = (E, D) => {
    E._isLeaving = !1, Lt(E, u), Lt(E, d), Lt(E, p), D && D();
  }, M = (E) => (D, W) => {
    const J = E ? V : A, U = () => S(D, E, W);
    Yt(J, [D, U]), rl(() => {
      Lt(D, E ? c : r), pt(D, E ? a : l), il(J) || ol(D, s, _, U);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      Yt(N, [E]), pt(E, r), pt(E, o);
    },
    onBeforeAppear(E) {
      Yt(w, [E]), pt(E, c), pt(E, f);
    },
    onEnter: M(!1),
    onAppear: M(!0),
    onLeave(E, D) {
      E._isLeaving = !0;
      const W = () => C(E, D);
      pt(E, u), E._enterCancelled ? (pt(E, p), Nr()) : (Nr(), pt(E, p)), rl(() => {
        E._isLeaving && (Lt(E, u), pt(E, d), il(y) || ol(E, s, O, W));
      }), Yt(y, [E, W]);
    },
    onEnterCancelled(E) {
      S(E, !1, void 0, !0), Yt(g, [E]);
    },
    onAppearCancelled(E) {
      S(E, !0, void 0, !0), Yt(R, [E]);
    },
    onLeaveCancelled(E) {
      C(E), Yt(v, [E]);
    }
  });
}
function zp(e) {
  if (e == null)
    return null;
  if (le(e))
    return [rr(e.enter), rr(e.leave)];
  {
    const t = rr(e);
    return [t, t];
  }
}
function rr(e) {
  return Zs(e);
}
function pt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Pn] || (e[Pn] = /* @__PURE__ */ new Set())).add(t);
}
function Lt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Pn];
  n && (n.delete(t), n.size || (e[Pn] = void 0));
}
function rl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qp = 0;
function ol(e, t, n, s) {
  const i = e._endId = ++Qp, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Ma(e, t);
  if (!o)
    return s();
  const f = o + "end";
  let a = 0;
  const u = () => {
    e.removeEventListener(f, p), r();
  }, p = (d) => {
    d.target === e && ++a >= c && u();
  };
  setTimeout(() => {
    a < c && u();
  }, l + 1), e.addEventListener(f, p);
}
function Ma(e, t) {
  const n = window.getComputedStyle(e), s = (b) => (n[b] || "").split(", "), i = s(`${kt}Delay`), r = s(`${kt}Duration`), o = ll(i, r), l = s(`${Kn}Delay`), c = s(`${Kn}Duration`), f = ll(l, c);
  let a = null, u = 0, p = 0;
  t === kt ? o > 0 && (a = kt, u = o, p = r.length) : t === Kn ? f > 0 && (a = Kn, u = f, p = c.length) : (u = Math.max(o, f), a = u > 0 ? o > f ? kt : Kn : null, p = a ? a === kt ? r.length : c.length : 0);
  const d = a === kt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${kt}Property`).toString()
  );
  return {
    type: a,
    timeout: u,
    propCount: p,
    hasTransform: d
  };
}
function ll(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => cl(n) + cl(e[s])));
}
function cl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nr() {
  return document.body.offsetHeight;
}
function ed(e, t, n) {
  const s = e[Pn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ai = Symbol("_vod"), La = Symbol("_vsh"), Da = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ai] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Wn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Wn(e, !0), s.enter(e)) : s.leave(e, () => {
      Wn(e, !1);
    }) : Wn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Wn(e, t);
  }
};
function Wn(e, t) {
  e.style.display = t ? e[ai] : "none", e[La] = !t;
}
function td() {
  Da.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Fa = Symbol("");
function nd(e) {
  const t = We();
  if (!t)
    return;
  const n = t.ut = (i = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => fi(r, i));
  }, s = () => {
    const i = e(t.proxy);
    t.ce ? fi(t.ce, i) : xr(t.subTree, i), n(i);
  };
  Qr(() => {
    rs(s);
  }), Ss(() => {
    wn(s, xe, { flush: "post" });
    const i = new MutationObserver(s);
    i.observe(t.subTree.el.parentNode, { childList: !0 }), $i(() => i.disconnect());
  });
}
function xr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      xr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    fi(e.el, t);
  else if (e.type === be)
    e.children.forEach((n) => xr(n, t));
  else if (e.type === nn) {
    let { el: n, anchor: s } = e;
    for (; n && (fi(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function fi(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const i in t) {
      const r = uu(t[i]);
      n.setProperty(`--${i}`, r), s += `--${i}: ${r};`;
    }
    n[Fa] = s;
  }
}
const sd = /(?:^|;)\s*display\s*:/;
function id(e, t, n) {
  const s = e.style, i = Z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ws(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ws(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), Ws(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[Fa];
      o && (n += ";" + o), s.cssText = n, r = sd.test(n);
    }
  } else t && e.removeAttribute("style");
  ai in e && (e[ai] = r ? s.display : "", e[La] && (s.display = "none"));
}
const al = /\s*!important$/;
function Ws(e, t, n) {
  if (B(n))
    n.forEach((s) => Ws(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = rd(e, t);
    al.test(n) ? e.setProperty(
      Ue(s),
      n.replace(al, ""),
      "important"
    ) : e[s] = n;
  }
}
const fl = ["Webkit", "Moz", "ms"], or = {};
function rd(e, t) {
  const n = or[t];
  if (n)
    return n;
  let s = fe(t);
  if (s !== "filter" && s in e)
    return or[t] = s;
  s = un(s);
  for (let i = 0; i < fl.length; i++) {
    const r = fl[i] + s;
    if (r in e)
      return or[t] = r;
  }
  return t;
}
const ul = "http://www.w3.org/1999/xlink";
function hl(e, t, n, s, i, r = au(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ul, t.slice(6, t.length)) : e.setAttributeNS(ul, t, n) : n == null || r && !Gl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ke(n) ? String(n) : n
  );
}
function pl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Oa(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Gl(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function At(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function od(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const dl = Symbol("_vei");
function ld(e, t, n, s, i = null) {
  const r = e[dl] || (e[dl] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = cd(t);
    if (s) {
      const f = r[t] = ud(
        s,
        i
      );
      At(e, l, f, c);
    } else o && (od(e, l, o, c), r[t] = void 0);
  }
}
const gl = /(?:Once|Passive|Capture)$/;
function cd(e) {
  let t;
  if (gl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(gl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ue(e.slice(2)), t];
}
let lr = 0;
const ad = /* @__PURE__ */ Promise.resolve(), fd = () => lr || (ad.then(() => lr = 0), lr = Date.now());
function ud(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    it(
      hd(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = fd(), n;
}
function hd(e, t) {
  if (B(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pd = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? ed(e, s, o) : t === "style" ? id(e, n, s) : an(t) ? Vr(t) || ld(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dd(e, t, s, o)) ? (pl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && hl(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Z(s)) ? pl(e, fe(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), hl(e, t, s, o));
};
function dd(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ml(t) && G(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ml(t) && Z(n) ? !1 : t in e;
}
const yl = {};
// @__NO_SIDE_EFFECTS__
function Ts(e, t, n) {
  let s = /* @__PURE__ */ Li(e, t);
  vi(s) && (s = te({}, s, t));
  class i extends Ui {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
const gd = (/* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Ts(e, t, Ya)), md = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ui extends md {
  constructor(t, n = {}, s = wr) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== wr ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Ui) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Pi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const i of s)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: r, styles: o } = s;
      let l;
      if (r && !B(r))
        for (const c in r) {
          const f = r[c];
          (f === Number || f && f.type === Number) && (c in this._props && (this._props[c] = Zs(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[fe(c)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot && this._applyStyles(o), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        ie(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Ri(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = B(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(fe))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(r) {
          this._setProp(i, r, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : yl;
    const i = fe(t);
    n && this._numberProps && this._numberProps[i] && (s = Zs(s)), this._setProp(i, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (n === yl ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(Ue(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ue(t), n + "") : n || this.removeAttribute(Ue(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), Ja(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = ge(this._def, te(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            vi(o[0]) ? te({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (r, ...o) => {
        i(r, o), Ue(r) !== r && i(Ue(r), o);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const r = document.createElement("style");
      s && r.setAttribute("nonce", s), r.textContent = t[i], this.shadowRoot.prepend(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], r = i.getAttribute("name") || "default", o = this._slots[r], l = i.parentNode;
      if (o)
        for (const c of o) {
          if (n && c.nodeType === 1) {
            const f = n + "-s", a = document.createTreeWalker(c, 1);
            c.setAttribute(f, "");
            let u;
            for (; u = a.nextNode(); )
              u.setAttribute(f, "");
          }
          l.insertBefore(c, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
function Va(e) {
  const t = We(), n = t && t.ce;
  return n || null;
}
function yd() {
  const e = Va();
  return e && e.shadowRoot;
}
function _d(e = "$style") {
  {
    const t = We();
    if (!t)
      return ee;
    const n = t.type.__cssModules;
    if (!n)
      return ee;
    const s = n[e];
    return s || ee;
  }
}
const $a = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), ui = Symbol("_moveCb"), _l = Symbol("_enterCb"), bd = (e) => (delete e.props.mode, e), Sd = /* @__PURE__ */ bd({
  name: "TransitionGroup",
  props: /* @__PURE__ */ te({}, Pa, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = We(), s = Xr();
    let i, r;
    return Fi(() => {
      if (!i.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Ad(
        i[0].el,
        n.vnode.el,
        o
      )) {
        i = [];
        return;
      }
      i.forEach(Ed), i.forEach(Td);
      const l = i.filter(Cd);
      Nr(), l.forEach((c) => {
        const f = c.el, a = f.style;
        pt(f, o), a.transform = a.webkitTransform = a.transitionDuration = "";
        const u = f[ui] = (p) => {
          p && p.target !== f || (!p || p.propertyName.endsWith("transform")) && (f.removeEventListener("transitionend", u), f[ui] = null, Lt(f, o));
        };
        f.addEventListener("transitionend", u);
      }), i = [];
    }), () => {
      const o = se(e), l = ka(o);
      let c = o.tag || be;
      if (i = [], r)
        for (let f = 0; f < r.length; f++) {
          const a = r[f];
          a.el && a.el instanceof Element && (i.push(a), Ot(
            a,
            On(
              a,
              l,
              s,
              n
            )
          ), $a.set(
            a,
            a.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Mi(t.default()) : [];
      for (let f = 0; f < r.length; f++) {
        const a = r[f];
        a.key != null && Ot(
          a,
          On(a, l, s, n)
        );
      }
      return ge(c, null, r);
    };
  }
}), vd = Sd;
function Ed(e) {
  const t = e.el;
  t[ui] && t[ui](), t[_l] && t[_l]();
}
function Td(e) {
  Ba.set(e, e.el.getBoundingClientRect());
}
function Cd(e) {
  const t = $a.get(e), n = Ba.get(e), s = t.left - n.left, i = t.top - n.top;
  if (s || i) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", e;
  }
}
function Ad(e, t, n) {
  const s = e.cloneNode(), i = e[Pn];
  i && i.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: o } = Ma(s);
  return r.removeChild(s), o;
}
const Gt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => Cn(t, n) : t;
};
function Nd(e) {
  e.target.composing = !0;
}
function bl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign"), hi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e[st] = Gt(i);
    const r = s || i.props && i.props.type === "number";
    At(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = Xs(l)), e[st](l);
    }), n && At(e, "change", () => {
      e.value = e.value.trim();
    }), t || (At(e, "compositionstart", Nd), At(e, "compositionend", bl), At(e, "change", bl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[st] = Gt(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Xs(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === c) || (e.value = c));
  }
}, ao = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[st] = Gt(n), At(e, "change", () => {
      const s = e._modelValue, i = kn(e), r = e.checked, o = e[st];
      if (B(s)) {
        const l = Ci(s, i), c = l !== -1;
        if (r && !c)
          o(s.concat(i));
        else if (!r && c) {
          const f = [...s];
          f.splice(l, 1), o(f);
        }
      } else if (fn(s)) {
        const l = new Set(s);
        r ? l.add(i) : l.delete(i), o(l);
      } else
        o(Ua(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sl,
  beforeUpdate(e, t, n) {
    e[st] = Gt(n), Sl(e, t, n);
  }
};
function Sl(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (B(t))
    i = Ci(t, s.props.value) > -1;
  else if (fn(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = Wt(t, Ua(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const fo = {
  created(e, { value: t }, n) {
    e.checked = Wt(t, n.props.value), e[st] = Gt(n), At(e, "change", () => {
      e[st](kn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[st] = Gt(s), t !== n && (e.checked = Wt(t, s.props.value));
  }
}, Ha = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const i = fn(t);
    At(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Xs(kn(o)) : kn(o)
      );
      e[st](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, Pi(() => {
        e._assigning = !1;
      });
    }), e[st] = Gt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    vl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[st] = Gt(n);
  },
  updated(e, { value: t }) {
    e._assigning || vl(e, t);
  }
};
function vl(e, t) {
  const n = e.multiple, s = B(t);
  if (!(n && !s && !fn(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = kn(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((f) => String(f) === String(l)) : o.selected = Ci(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Wt(kn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function kn(e) {
  return "_value" in e ? e._value : e.value;
}
function Ua(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ja = {
  created(e, t, n) {
    Vs(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Vs(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Vs(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Vs(e, t, n, s, "updated");
  }
};
function Ka(e, t) {
  switch (e) {
    case "SELECT":
      return Ha;
    case "TEXTAREA":
      return hi;
    default:
      switch (t) {
        case "checkbox":
          return ao;
        case "radio":
          return fo;
        default:
          return hi;
      }
  }
}
function Vs(e, t, n, s, i) {
  const o = Ka(
    e.tagName,
    n.props && n.props.type
  )[i];
  o && o(e, t, n, s);
}
function xd() {
  hi.getSSRProps = ({ value: e }) => ({ value: e }), fo.getSSRProps = ({ value: e }, t) => {
    if (t.props && Wt(t.props.value, e))
      return { checked: !0 };
  }, ao.getSSRProps = ({ value: e }, t) => {
    if (B(e)) {
      if (t.props && Ci(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (fn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, ja.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Ka(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const wd = ["ctrl", "shift", "alt", "meta"], Id = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => wd.some((n) => e[`${n}Key`] && !t.includes(n))
}, Od = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Id[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  }));
}, Rd = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Pd = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((i) => {
    if (!("key" in i))
      return;
    const r = Ue(i.key);
    if (t.some(
      (o) => o === r || Rd[o] === r
    ))
      return e(i);
  }));
}, Wa = /* @__PURE__ */ te({ patchProp: pd }, Yp);
let es, El = !1;
function qa() {
  return es || (es = na(Wa));
}
function Ga() {
  return es = El ? es : sa(Wa), El = !0, es;
}
const Ja = ((...e) => {
  qa().render(...e);
}), kd = ((...e) => {
  Ga().hydrate(...e);
}), wr = ((...e) => {
  const t = qa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Za(s);
    if (!i) return;
    const r = t._component;
    !G(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Xa(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
}), Ya = ((...e) => {
  const t = Ga().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Za(s);
    if (i)
      return n(i, !0, Xa(i));
  }, t;
});
function Xa(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Za(e) {
  return Z(e) ? document.querySelector(e) : e;
}
let Tl = !1;
const Md = () => {
  Tl || (Tl = !0, xd(), td());
}, Ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: Oc,
  BaseTransitionPropsValidators: Zr,
  Comment: ye,
  DeprecationTypes: qp,
  EffectScope: Ur,
  ErrorCodes: eh,
  ErrorTypeStrings: $p,
  Fragment: be,
  KeepAlive: xh,
  ReactiveEffect: ns,
  Static: nn,
  Suspense: Sp,
  Teleport: ah,
  Text: jt,
  TrackOpTypes: Gu,
  Transition: Zp,
  TransitionGroup: vd,
  TriggerOpTypes: Ju,
  VueElement: Ui,
  assertNumber: Qu,
  callWithAsyncErrorHandling: it,
  callWithErrorHandling: Bn,
  camelize: fe,
  capitalize: un,
  cloneVNode: yt,
  compatUtils: Wp,
  computed: Na,
  createApp: wr,
  createBlock: us,
  createCommentVNode: Ip,
  createElementBlock: qt,
  createElementVNode: mt,
  createHydrationRenderer: sa,
  createPropsRestProxy: qh,
  createRenderer: na,
  createSSRApp: Ya,
  createSlots: Ph,
  createStaticVNode: wp,
  createTextVNode: lo,
  createVNode: ge,
  customRef: mc,
  defineAsyncComponent: Ah,
  defineComponent: Li,
  defineCustomElement: Ts,
  defineEmits: Dh,
  defineExpose: Fh,
  defineModel: Bh,
  defineOptions: Vh,
  defineProps: Lh,
  defineSSRCustomElement: gd,
  defineSlots: $h,
  devtools: Bp,
  effect: gu,
  effectScope: hu,
  getCurrentInstance: We,
  getCurrentScope: Xl,
  getCurrentWatcher: Yu,
  getTransitionRawChildren: Mi,
  guardReactiveProps: _a,
  h: xa,
  handleError: hn,
  hasInjectionContext: tp,
  hydrate: kd,
  hydrateOnIdle: bh,
  hydrateOnInteraction: Th,
  hydrateOnMediaQuery: Eh,
  hydrateOnVisible: vh,
  initCustomFormatter: Dp,
  initDirectivesForSSR: Md,
  inject: zn,
  isMemoSame: wa,
  isProxy: Oi,
  isReactive: Ht,
  isReadonly: It,
  isRef: Ee,
  isRuntimeOnly: kp,
  isShallow: Xe,
  isVNode: Rt,
  markRaw: pc,
  mergeDefaults: Kh,
  mergeModels: Wh,
  mergeProps: ba,
  nextTick: Pi,
  normalizeClass: $n,
  normalizeProps: Qf,
  normalizeStyle: _s,
  onActivated: Pc,
  onBeforeMount: Lc,
  onBeforeUnmount: Vi,
  onBeforeUpdate: Qr,
  onDeactivated: kc,
  onErrorCaptured: $c,
  onMounted: Ss,
  onRenderTracked: Vc,
  onRenderTriggered: Fc,
  onScopeDispose: pu,
  onServerPrefetch: Dc,
  onUnmounted: $i,
  onUpdated: Fi,
  onWatcherCleanup: _c,
  openBlock: Ze,
  popScopeId: rh,
  provide: Gc,
  proxyRefs: Gr,
  pushScopeId: ih,
  queuePostFlushCb: rs,
  reactive: wi,
  readonly: qr,
  ref: en,
  registerRuntimeCompiler: Ta,
  render: Ja,
  renderList: Uc,
  renderSlot: jc,
  resolveComponent: Oh,
  resolveDirective: Rh,
  resolveDynamicComponent: Hc,
  resolveFilter: Kp,
  resolveTransitionHooks: On,
  setBlockTracking: fs,
  setDevtoolsHook: Hp,
  setTransitionHooks: Ot,
  shallowReactive: hc,
  shallowReadonly: Lu,
  shallowRef: dc,
  ssrContextKey: la,
  ssrUtils: jp,
  stop: mu,
  toDisplayString: An,
  toHandlerKey: Tn,
  toHandlers: kh,
  toRaw: se,
  toRef: Ku,
  toRefs: Hu,
  toValue: Vu,
  transformVNodeArgs: Np,
  triggerRef: Fu,
  unref: Ri,
  useAttrs: jh,
  useCssModule: _d,
  useCssVars: nd,
  useHost: Va,
  useId: uh,
  useModel: hp,
  useSSRContext: ca,
  useShadowRoot: yd,
  useSlots: Uh,
  useTemplateRef: hh,
  useTransitionState: Xr,
  vModelCheckbox: ao,
  vModelDynamic: ja,
  vModelRadio: fo,
  vModelSelect: Ha,
  vModelText: hi,
  vShow: Da,
  version: Ia,
  warn: Vp,
  watch: wn,
  watchEffect: ap,
  watchPostEffect: fp,
  watchSyncEffect: aa,
  withAsyncContext: Gh,
  withCtx: Yr,
  withDefaults: Hh,
  withDirectives: lh,
  withKeys: Pd,
  withMemo: Fp,
  withModifiers: Od,
  withScopeId: oh
}, Symbol.toStringTag, { value: "Module" }));
/**
* @vue/compiler-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const hs = Symbol(""), ts = Symbol(""), uo = Symbol(""), pi = Symbol(""), za = Symbol(
  ""
), cn = Symbol(""), Qa = Symbol(""), ef = Symbol(
  ""
), ho = Symbol(""), po = Symbol(
  ""
), Cs = Symbol(
  ""
), go = Symbol(
  ""
), tf = Symbol(
  ""
), mo = Symbol(
  ""
), yo = Symbol(
  ""
), _o = Symbol(
  ""
), bo = Symbol(
  ""
), So = Symbol(
  ""
), vo = Symbol(""), nf = Symbol(""), sf = Symbol(""), ji = Symbol(
  ""
), di = Symbol(""), Eo = Symbol(
  ""
), To = Symbol(
  ""
), ps = Symbol(
  ""
), As = Symbol(
  ""
), Co = Symbol(""), Ir = Symbol(""), Dd = Symbol(""), Or = Symbol(
  ""
), gi = Symbol(
  ""
), Fd = Symbol(""), Vd = Symbol(""), Ao = Symbol(""), $d = Symbol(""), Bd = Symbol(""), No = Symbol(""), rf = Symbol(""), Mn = {
  [hs]: "Fragment",
  [ts]: "Teleport",
  [uo]: "Suspense",
  [pi]: "KeepAlive",
  [za]: "BaseTransition",
  [cn]: "openBlock",
  [Qa]: "createBlock",
  [ef]: "createElementBlock",
  [ho]: "createVNode",
  [po]: "createElementVNode",
  [Cs]: "createCommentVNode",
  [go]: "createTextVNode",
  [tf]: "createStaticVNode",
  [mo]: "resolveComponent",
  [yo]: "resolveDynamicComponent",
  [_o]: "resolveDirective",
  [bo]: "resolveFilter",
  [So]: "withDirectives",
  [vo]: "renderList",
  [nf]: "renderSlot",
  [sf]: "createSlots",
  [ji]: "toDisplayString",
  [di]: "mergeProps",
  [Eo]: "normalizeClass",
  [To]: "normalizeStyle",
  [ps]: "normalizeProps",
  [As]: "guardReactiveProps",
  [Co]: "toHandlers",
  [Ir]: "camelize",
  [Dd]: "capitalize",
  [Or]: "toHandlerKey",
  [gi]: "setBlockTracking",
  [Fd]: "pushScopeId",
  [Vd]: "popScopeId",
  [Ao]: "withCtx",
  [$d]: "unref",
  [Bd]: "isRef",
  [No]: "withMemo",
  [rf]: "isMemoSame"
};
function Hd(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Mn[t] = e[t];
  });
}
const Qe = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function Ud(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: Qe
  };
}
function ds(e, t, n, s, i, r, o, l = !1, c = !1, f = !1, a = Qe) {
  return e && (l ? (e.helper(cn), e.helper(Fn(e.inSSR, f))) : e.helper(Dn(e.inSSR, f)), o && e.helper(So)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: i,
    dynamicProps: r,
    directives: o,
    isBlock: l,
    disableTracking: c,
    isComponent: f,
    loc: a
  };
}
function sn(e, t = Qe) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function nt(e, t = Qe) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function _e(e, t) {
  return {
    type: 16,
    loc: Qe,
    key: Z(e) ? z(e, !0) : e,
    value: t
  };
}
function z(e, t = !1, n = Qe, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function at(e, t = Qe) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function ve(e, t = [], n = Qe) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function Ln(e, t = void 0, n = !1, s = !1, i = Qe) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: i
  };
}
function Rr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Qe
  };
}
function jd(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: Qe
  };
}
function Kd(e) {
  return {
    type: 21,
    body: e,
    loc: Qe
  };
}
function Dn(e, t) {
  return e || t ? ho : po;
}
function Fn(e, t) {
  return e || t ? Qa : ef;
}
function xo(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Dn(s, e.isComponent)), t(cn), t(Fn(s, e.isComponent)));
}
const Cl = new Uint8Array([123, 123]), Al = new Uint8Array([125, 125]);
function Nl(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Je(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function Mt(e) {
  return e === 47 || e === 62 || Je(e);
}
function mi(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const Ie = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class Wd {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Cl, this.delimiterClose = Al, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Cl, this.delimiterClose = Al;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, s = t + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const r = this.newlines[i];
      if (t > r) {
        n = i + 2, s = t - r;
        break;
      }
    }
    return {
      column: s,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      Mt(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || Je(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const s = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = s;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Ie.TitleEnd || this.currentSequence === Ie.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === Ie.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Ie.Cdata.length && (this.state = 28, this.currentSequence = Ie.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Nl(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    Mt(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (Mt(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(mi("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Je(t) || (t === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = Nl(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || Je(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? this.state = 7 : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Je(t) || this.handleAttrStart(t);
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Je(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    (t === 61 || Mt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t));
  }
  stateInDirName(t) {
    t === 61 || Mt(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || Mt(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || Mt(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t));
  }
  stateInDirModifier(t) {
    t === 61 || Mt(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : Je(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Je(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    Je(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = Ie.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === Ie.ScriptEnd[3] ? this.startSpecial(Ie.ScriptEnd, 4) : t === Ie.StyleEnd[3] ? this.startSpecial(Ie.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === Ie.TitleEnd[3] ? this.startSpecial(Ie.TitleEnd, 4) : t === Ie.TextareaEnd[3] ? this.startSpecial(Ie.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === Ie.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
function xl(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function rn(e, t) {
  const n = xl("MODE", t), s = xl(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function gs(e, t, n, ...s) {
  return rn(e, t);
}
function wo(e) {
  throw e;
}
function of(e) {
}
function he(e, t, n, s) {
  const i = `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(i));
  return r.code = e, r.loc = t, r;
}
const je = (e) => e.type === 4 && e.isStatic;
function lf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return ts;
    case "Suspense":
    case "suspense":
      return uo;
    case "KeepAlive":
    case "keep-alive":
      return pi;
    case "BaseTransition":
    case "base-transition":
      return za;
  }
}
const qd = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Io = (e) => !qd.test(e), Gd = /[A-Za-z_$\xA0-\uFFFF]/, Jd = /[\.\?\w$\xA0-\uFFFF]/, Yd = /\s+[.[]\s*|\s*[.[]\s+/g, cf = (e) => e.type === 4 ? e.content : e.loc.source, Xd = (e) => {
  const t = cf(e).trim().replace(Yd, (l) => l.trim());
  let n = 0, s = [], i = 0, r = 0, o = null;
  for (let l = 0; l < t.length; l++) {
    const c = t.charAt(l);
    switch (n) {
      case 0:
        if (c === "[")
          s.push(n), n = 1, i++;
        else if (c === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? Gd : Jd).test(c))
          return !1;
        break;
      case 1:
        c === "'" || c === '"' || c === "`" ? (s.push(n), n = 3, o = c) : c === "[" ? i++ : c === "]" && (--i || (n = s.pop()));
        break;
      case 2:
        if (c === "'" || c === '"' || c === "`")
          s.push(n), n = 3, o = c;
        else if (c === "(")
          r++;
        else if (c === ")") {
          if (l === t.length - 1)
            return !1;
          --r || (n = s.pop());
        }
        break;
      case 3:
        c === o && (n = s.pop(), o = null);
        break;
    }
  }
  return !i && !r;
}, af = Xd, Zd = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/, zd = (e) => Zd.test(cf(e)), Qd = zd;
function tt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const i = e.props[s];
    if (i.type === 7 && (n || i.exp) && (Z(t) ? i.name === t : t.test(i.name)))
      return i;
  }
}
function Ki(e, t, n = !1, s = !1) {
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 6) {
      if (n) continue;
      if (r.name === t && (r.value || s))
        return r;
    } else if (r.name === "bind" && (r.exp || s) && Zt(r.arg, t))
      return r;
  }
}
function Zt(e, t) {
  return !!(e && je(e) && e.content === t);
}
function eg(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function cr(e) {
  return e.type === 5 || e.type === 2;
}
function wl(e) {
  return e.type === 7 && e.name === "pre";
}
function tg(e) {
  return e.type === 7 && e.name === "slot";
}
function yi(e) {
  return e.type === 1 && e.tagType === 3;
}
function _i(e) {
  return e.type === 1 && e.tagType === 2;
}
const ng = /* @__PURE__ */ new Set([ps, As]);
function ff(e, t = []) {
  if (e && !Z(e) && e.type === 14) {
    const n = e.callee;
    if (!Z(n) && ng.has(n))
      return ff(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function bi(e, t, n) {
  let s, i = e.type === 13 ? e.props : e.arguments[2], r = [], o;
  if (i && !Z(i) && i.type === 14) {
    const l = ff(i);
    i = l[0], r = l[1], o = r[r.length - 1];
  }
  if (i == null || Z(i))
    s = nt([t]);
  else if (i.type === 14) {
    const l = i.arguments[0];
    !Z(l) && l.type === 15 ? Il(t, l) || l.properties.unshift(t) : i.callee === Co ? s = ve(n.helper(di), [
      nt([t]),
      i
    ]) : i.arguments.unshift(nt([t])), !s && (s = i);
  } else i.type === 15 ? (Il(t, i) || i.properties.unshift(t), s = i) : (s = ve(n.helper(di), [
    nt([t]),
    i
  ]), o && o.callee === As && (o = r[r.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = s : e.props = s : o ? o.arguments[0] = s : e.arguments[2] = s;
}
function Il(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (i) => i.key.type === 4 && i.key.content === s
    );
  }
  return n;
}
function ms(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function sg(e) {
  return e.type === 14 && e.callee === No ? e.arguments[1].returns : e;
}
const ig = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, uf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: bn,
  isPreTag: bn,
  isIgnoreNewlineTag: bn,
  isCustomElement: bn,
  onError: wo,
  onWarn: of,
  comments: !1,
  prefixIdentifiers: !1
};
let re = uf, ys = null, Nt = "", Re = null, Q = null, $e = "", St = -1, Xt = -1, Oo = 0, $t = !1, Pr = null;
const ue = [], de = new Wd(ue, {
  onerr: bt,
  ontext(e, t) {
    $s(Te(e, t), e, t);
  },
  ontextentity(e, t, n) {
    $s(e, t, n);
  },
  oninterpolation(e, t) {
    if ($t)
      return $s(Te(e, t), e, t);
    let n = e + de.delimiterOpen.length, s = t - de.delimiterClose.length;
    for (; Je(Nt.charCodeAt(n)); )
      n++;
    for (; Je(Nt.charCodeAt(s - 1)); )
      s--;
    let i = Te(n, s);
    i.includes("&") && (i = re.decodeEntities(i, !1)), kr({
      type: 5,
      content: Gs(i, !1, me(n, s)),
      loc: me(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Te(e, t);
    Re = {
      type: 1,
      tag: n,
      ns: re.getNamespace(n, ue[0], re.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: me(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    Rl(e);
  },
  onclosetag(e, t) {
    const n = Te(e, t);
    if (!re.isVoidTag(n)) {
      let s = !1;
      for (let i = 0; i < ue.length; i++)
        if (ue[i].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, i > 0 && bt(24, ue[0].loc.start.offset);
          for (let o = 0; o <= i; o++) {
            const l = ue.shift();
            qs(l, t, o < i);
          }
          break;
        }
      s || bt(23, hf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Re.tag;
    Re.isSelfClosing = !0, Rl(e), ue[0] && ue[0].tag === t && qs(ue.shift(), e);
  },
  onattribname(e, t) {
    Q = {
      type: 6,
      name: Te(e, t),
      nameLoc: me(e, t),
      value: void 0,
      loc: me(e)
    };
  },
  ondirname(e, t) {
    const n = Te(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!$t && s === "" && bt(26, e), $t || s === "")
      Q = {
        type: 6,
        name: n,
        nameLoc: me(e, t),
        value: void 0,
        loc: me(e)
      };
    else if (Q = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [z("prop")] : [],
      loc: me(e)
    }, s === "pre") {
      $t = de.inVPre = !0, Pr = Re;
      const i = Re.props;
      for (let r = 0; r < i.length; r++)
        i[r].type === 7 && (i[r] = gg(i[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Te(e, t);
    if ($t && !wl(Q))
      Q.name += n, zt(Q.nameLoc, t);
    else {
      const s = n[0] !== "[";
      Q.arg = Gs(
        s ? n : n.slice(1, -1),
        s,
        me(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Te(e, t);
    if ($t && !wl(Q))
      Q.name += "." + n, zt(Q.nameLoc, t);
    else if (Q.name === "slot") {
      const s = Q.arg;
      s && (s.content += "." + n, zt(s.loc, t));
    } else {
      const s = z(n, !0, me(e, t));
      Q.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    $e += Te(e, t), St < 0 && (St = e), Xt = t;
  },
  onattribentity(e, t, n) {
    $e += e, St < 0 && (St = t), Xt = n;
  },
  onattribnameend(e) {
    const t = Q.loc.start.offset, n = Te(t, e);
    Q.type === 7 && (Q.rawName = n), Re.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && bt(2, t);
  },
  onattribend(e, t) {
    if (Re && Q) {
      if (zt(Q.loc, t), e !== 0)
        if ($e.includes("&") && ($e = re.decodeEntities(
          $e,
          !0
        )), Q.type === 6)
          Q.name === "class" && ($e = df($e).trim()), e === 1 && !$e && bt(13, t), Q.value = {
            type: 2,
            content: $e,
            loc: e === 1 ? me(St, Xt) : me(St - 1, Xt + 1)
          }, de.inSFCRoot && Re.tag === "template" && Q.name === "lang" && $e && $e !== "html" && de.enterRCDATA(mi("</template"), 0);
        else {
          let n = 0;
          Q.exp = Gs(
            $e,
            !1,
            me(St, Xt),
            0,
            n
          ), Q.name === "for" && (Q.forParseResult = og(Q.exp));
          let s = -1;
          Q.name === "bind" && (s = Q.modifiers.findIndex(
            (i) => i.content === "sync"
          )) > -1 && gs(
            "COMPILER_V_BIND_SYNC",
            re,
            Q.loc,
            Q.arg.loc.source
          ) && (Q.name = "model", Q.modifiers.splice(s, 1));
        }
      (Q.type !== 7 || Q.name !== "pre") && Re.props.push(Q);
    }
    $e = "", St = Xt = -1;
  },
  oncomment(e, t) {
    re.comments && kr({
      type: 3,
      content: Te(e, t),
      loc: me(e - 4, t + 3)
    });
  },
  onend() {
    const e = Nt.length;
    for (let t = 0; t < ue.length; t++)
      qs(ue[t], e - 1), bt(24, ue[t].loc.start.offset);
  },
  oncdata(e, t) {
    ue[0].ns !== 0 ? $s(Te(e, t), e, t) : bt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (ue[0] ? ue[0].ns : re.ns) === 0 && bt(
      21,
      e - 1
    );
  }
}), Ol = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, rg = /^\(|\)$/g;
function og(e) {
  const t = e.loc, n = e.content, s = n.match(ig);
  if (!s) return;
  const [, i, r] = s, o = (u, p, d = !1) => {
    const b = t.start.offset + p, _ = b + u.length;
    return Gs(
      u,
      !1,
      me(b, _),
      0,
      d ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(r.trim(), n.indexOf(r, i.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let c = i.trim().replace(rg, "").trim();
  const f = i.indexOf(c), a = c.match(Ol);
  if (a) {
    c = c.replace(Ol, "").trim();
    const u = a[1].trim();
    let p;
    if (u && (p = n.indexOf(u, f + c.length), l.key = o(u, p, !0)), a[2]) {
      const d = a[2].trim();
      d && (l.index = o(
        d,
        n.indexOf(
          d,
          l.key ? p + u.length : f + c.length
        ),
        !0
      ));
    }
  }
  return c && (l.value = o(c, f, !0)), l;
}
function Te(e, t) {
  return Nt.slice(e, t);
}
function Rl(e) {
  de.inSFCRoot && (Re.innerLoc = me(e + 1, e + 1)), kr(Re);
  const { tag: t, ns: n } = Re;
  n === 0 && re.isPreTag(t) && Oo++, re.isVoidTag(t) ? qs(Re, e) : (ue.unshift(Re), (n === 1 || n === 2) && (de.inXML = !0)), Re = null;
}
function $s(e, t, n) {
  {
    const r = ue[0] && ue[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = re.decodeEntities(e, !1));
  }
  const s = ue[0] || ys, i = s.children[s.children.length - 1];
  i && i.type === 2 ? (i.content += e, zt(i.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: me(t, n)
  });
}
function qs(e, t, n = !1) {
  n ? zt(e.loc, hf(t, 60)) : zt(e.loc, lg(t, 62) + 1), de.inSFCRoot && (e.children.length ? e.innerLoc.end = te({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = te({}, e.innerLoc.start), e.innerLoc.source = Te(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: i, children: r } = e;
  if ($t || (s === "slot" ? e.tagType = 2 : Pl(e) ? e.tagType = 3 : ag(e) && (e.tagType = 1)), de.inRCDATA || (e.children = pf(r)), i === 0 && re.isIgnoreNewlineTag(s)) {
    const o = r[0];
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""));
  }
  i === 0 && re.isPreTag(s) && Oo--, Pr === e && ($t = de.inVPre = !1, Pr = null), de.inXML && (ue[0] ? ue[0].ns : re.ns) === 0 && (de.inXML = !1);
  {
    const o = e.props;
    if (!de.inSFCRoot && rn(
      "COMPILER_NATIVE_TEMPLATE",
      re
    ) && e.tag === "template" && !Pl(e)) {
      const c = ue[0] || ys, f = c.children.indexOf(e);
      c.children.splice(f, 1, ...e.children);
    }
    const l = o.find(
      (c) => c.type === 6 && c.name === "inline-template"
    );
    l && gs(
      "COMPILER_INLINE_TEMPLATE",
      re,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: Te(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function lg(e, t) {
  let n = e;
  for (; Nt.charCodeAt(n) !== t && n < Nt.length - 1; ) n++;
  return n;
}
function hf(e, t) {
  let n = e;
  for (; Nt.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const cg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Pl({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && cg.has(t[n].name))
        return !0;
  }
  return !1;
}
function ag({ tag: e, props: t }) {
  if (re.isCustomElement(e))
    return !1;
  if (e === "component" || fg(e.charCodeAt(0)) || lf(e) || re.isBuiltInComponent && re.isBuiltInComponent(e) || re.isNativeTag && !re.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (gs(
          "COMPILER_IS_ON_ELEMENT",
          re,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Zt(s.arg, "is") && gs(
        "COMPILER_IS_ON_ELEMENT",
        re,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function fg(e) {
  return e > 64 && e < 91;
}
const ug = /\r\n/g;
function pf(e) {
  const t = re.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.type === 2)
      if (Oo)
        i.content = i.content.replace(ug, `
`);
      else if (hg(i.content)) {
        const r = e[s - 1] && e[s - 1].type, o = e[s + 1] && e[s + 1].type;
        !r || !o || t && (r === 3 && (o === 3 || o === 1) || r === 1 && (o === 3 || o === 1 && pg(i.content))) ? (n = !0, e[s] = null) : i.content = " ";
      } else t && (i.content = df(i.content));
  }
  return n ? e.filter(Boolean) : e;
}
function hg(e) {
  for (let t = 0; t < e.length; t++)
    if (!Je(e.charCodeAt(t)))
      return !1;
  return !0;
}
function pg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function df(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    Je(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function kr(e) {
  (ue[0] || ys).children.push(e);
}
function me(e, t) {
  return {
    start: de.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : de.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Te(e, t)
  };
}
function dg(e) {
  return me(e.start.offset, e.end.offset);
}
function zt(e, t) {
  e.end = de.getPos(t), e.source = Te(e.start.offset, t);
}
function gg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: me(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function Gs(e, t = !1, n, s = 0, i = 0) {
  return z(e, t, n, s);
}
function bt(e, t, n) {
  re.onError(
    he(e, me(t, t))
  );
}
function mg() {
  de.reset(), Re = null, Q = null, $e = "", St = -1, Xt = -1, ue.length = 0;
}
function yg(e, t) {
  if (mg(), Nt = e, re = te({}, uf), t) {
    let i;
    for (i in t)
      t[i] != null && (re[i] = t[i]);
  }
  de.mode = re.parseMode === "html" ? 1 : re.parseMode === "sfc" ? 2 : 0, de.inXML = re.ns === 1 || re.ns === 2;
  const n = t && t.delimiters;
  n && (de.delimiterOpen = mi(n[0]), de.delimiterClose = mi(n[1]));
  const s = ys = Ud([], e);
  return de.parse(Nt), s.loc = me(0, e.length), s.children = pf(s.children), ys = null, s;
}
function _g(e, t) {
  Js(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!gf(e)
  );
}
function gf(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !_i(t[0]) ? t[0] : null;
}
function Js(e, t, n, s = !1, i = !1) {
  const { children: r } = e, o = [];
  for (let a = 0; a < r.length; a++) {
    const u = r[a];
    if (u.type === 1 && u.tagType === 0) {
      const p = s ? 0 : Ye(u, n);
      if (p > 0) {
        if (p >= 2) {
          u.codegenNode.patchFlag = -1, o.push(u);
          continue;
        }
      } else {
        const d = u.codegenNode;
        if (d.type === 13) {
          const b = d.patchFlag;
          if ((b === void 0 || b === 512 || b === 1) && yf(u, n) >= 2) {
            const _ = _f(u);
            _ && (d.props = n.hoist(_));
          }
          d.dynamicProps && (d.dynamicProps = n.hoist(d.dynamicProps));
        }
      }
    } else if (u.type === 12 && (s ? 0 : Ye(u, n)) >= 2) {
      u.codegenNode.type === 14 && u.codegenNode.arguments.length > 0 && u.codegenNode.arguments.push(
        "-1"
      ), o.push(u);
      continue;
    }
    if (u.type === 1) {
      const p = u.tagType === 1;
      p && n.scopes.vSlot++, Js(u, e, n, !1, i), p && n.scopes.vSlot--;
    } else if (u.type === 11)
      Js(u, e, n, u.children.length === 1, !0);
    else if (u.type === 9)
      for (let p = 0; p < u.branches.length; p++)
        Js(
          u.branches[p],
          e,
          n,
          u.branches[p].children.length === 1,
          i
        );
  }
  let l = !1;
  if (o.length === r.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && B(e.codegenNode.children))
      e.codegenNode.children = c(
        sn(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !B(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const a = f(e.codegenNode, "default");
      a && (a.returns = c(
        sn(a.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !B(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const a = tt(e, "slot", !0), u = a && a.arg && f(t.codegenNode, a.arg);
      u && (u.returns = c(
        sn(u.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const a of o)
      a.codegenNode = n.cache(a.codegenNode);
  function c(a) {
    const u = n.cache(a);
    return u.needArraySpread = !0, u;
  }
  function f(a, u) {
    if (a.children && !B(a.children) && a.children.type === 15) {
      const p = a.children.properties.find(
        (d) => d.key === u || d.key.content === u
      );
      return p && p.value;
    }
  }
  o.length && n.transformHoist && n.transformHoist(r, n, e);
}
function Ye(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const s = n.get(e);
      if (s !== void 0)
        return s;
      const i = e.codegenNode;
      if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (i.patchFlag === void 0) {
        let o = 3;
        const l = yf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < o && (o = l);
        for (let c = 0; c < e.children.length; c++) {
          const f = Ye(e.children[c], t);
          if (f === 0)
            return n.set(e, 0), 0;
          f < o && (o = f);
        }
        if (o > 1)
          for (let c = 0; c < e.props.length; c++) {
            const f = e.props[c];
            if (f.type === 7 && f.name === "bind" && f.exp) {
              const a = Ye(f.exp, t);
              if (a === 0)
                return n.set(e, 0), 0;
              a < o && (o = a);
            }
          }
        if (i.isBlock) {
          for (let c = 0; c < e.props.length; c++)
            if (e.props[c].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(cn), t.removeHelper(
            Fn(t.inSSR, i.isComponent)
          ), i.isBlock = !1, t.helper(Dn(t.inSSR, i.isComponent));
        }
        return n.set(e, o), o;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return Ye(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let r = 3;
      for (let o = 0; o < e.children.length; o++) {
        const l = e.children[o];
        if (Z(l) || Ke(l))
          continue;
        const c = Ye(l, t);
        if (c === 0)
          return 0;
        c < r && (r = c);
      }
      return r;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const bg = /* @__PURE__ */ new Set([
  Eo,
  To,
  ps,
  As
]);
function mf(e, t) {
  if (e.type === 14 && !Z(e.callee) && bg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Ye(n, t);
    if (n.type === 14)
      return mf(n, t);
  }
  return 0;
}
function yf(e, t) {
  let n = 3;
  const s = _f(e);
  if (s && s.type === 15) {
    const { properties: i } = s;
    for (let r = 0; r < i.length; r++) {
      const { key: o, value: l } = i[r], c = Ye(o, t);
      if (c === 0)
        return c;
      c < n && (n = c);
      let f;
      if (l.type === 4 ? f = Ye(l, t) : l.type === 14 ? f = mf(l, t) : f = 0, f === 0)
        return f;
      f < n && (n = f);
    }
  }
  return n;
}
function _f(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function Sg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: i = !1,
  cacheHandlers: r = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: c = null,
  isBuiltInComponent: f = xe,
  isCustomElement: a = xe,
  expressionPlugins: u = [],
  scopeId: p = null,
  slotted: d = !0,
  ssr: b = !1,
  inSSR: _ = !1,
  ssrCssVars: O = "",
  bindingMetadata: N = ee,
  inline: A = !1,
  isTS: g = !1,
  onError: y = wo,
  onWarn: v = of,
  compatConfig: w
}) {
  const V = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), R = {
    // options
    filename: t,
    selfName: V && un(fe(V[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: i,
    cacheHandlers: r,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: c,
    isBuiltInComponent: f,
    isCustomElement: a,
    expressionPlugins: u,
    scopeId: p,
    slotted: d,
    ssr: b,
    inSSR: _,
    ssrCssVars: O,
    bindingMetadata: N,
    inline: A,
    isTS: g,
    onError: y,
    onWarn: v,
    compatConfig: w,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(S) {
      const C = R.helpers.get(S) || 0;
      return R.helpers.set(S, C + 1), S;
    },
    removeHelper(S) {
      const C = R.helpers.get(S);
      if (C) {
        const M = C - 1;
        M ? R.helpers.set(S, M) : R.helpers.delete(S);
      }
    },
    helperString(S) {
      return `_${Mn[R.helper(S)]}`;
    },
    replaceNode(S) {
      R.parent.children[R.childIndex] = R.currentNode = S;
    },
    removeNode(S) {
      const C = R.parent.children, M = S ? C.indexOf(S) : R.currentNode ? R.childIndex : -1;
      !S || S === R.currentNode ? (R.currentNode = null, R.onNodeRemoved()) : R.childIndex > M && (R.childIndex--, R.onNodeRemoved()), R.parent.children.splice(M, 1);
    },
    onNodeRemoved: xe,
    addIdentifiers(S) {
    },
    removeIdentifiers(S) {
    },
    hoist(S) {
      Z(S) && (S = z(S)), R.hoists.push(S);
      const C = z(
        `_hoisted_${R.hoists.length}`,
        !1,
        S.loc,
        2
      );
      return C.hoisted = S, C;
    },
    cache(S, C = !1, M = !1) {
      const E = jd(
        R.cached.length,
        S,
        C,
        M
      );
      return R.cached.push(E), E;
    }
  };
  return R.filters = /* @__PURE__ */ new Set(), R;
}
function vg(e, t) {
  const n = Sg(e, t);
  Wi(e, n), t.hoistStatic && _g(e, n), t.ssr || Eg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function Eg(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const i = gf(e);
    if (i && i.codegenNode) {
      const r = i.codegenNode;
      r.type === 13 && xo(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let i = 64;
    e.codegenNode = ds(
      t,
      n(hs),
      void 0,
      e.children,
      i,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function Tg(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const i = e.children[n];
    Z(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, Wi(i, t));
  }
}
function Wi(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let r = 0; r < n.length; r++) {
    const o = n[r](e, t);
    if (o && (B(o) ? s.push(...o) : s.push(o)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Cs);
      break;
    case 5:
      t.ssr || t.helper(ji);
      break;
    // for container types, further traverse downwards
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        Wi(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Tg(e, t);
      break;
  }
  t.currentNode = e;
  let i = s.length;
  for (; i--; )
    s[i]();
}
function bf(e, t) {
  const n = Z(e) ? (s) => s === e : (s) => e.test(s);
  return (s, i) => {
    if (s.type === 1) {
      const { props: r } = s;
      if (s.tagType === 3 && r.some(tg))
        return;
      const o = [];
      for (let l = 0; l < r.length; l++) {
        const c = r[l];
        if (c.type === 7 && n(c.name)) {
          r.splice(l, 1), l--;
          const f = t(s, c, i);
          f && o.push(f);
        }
      }
      return o;
    }
  };
}
const qi = "/*@__PURE__*/", Sf = (e) => `${Mn[e]}: _${Mn[e]}`;
function Cg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: i = "template.vue.html",
  scopeId: r = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: c = "vue",
  ssrRuntimeModuleName: f = "vue/server-renderer",
  ssr: a = !1,
  isTS: u = !1,
  inSSR: p = !1
}) {
  const d = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: i,
    scopeId: r,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: c,
    ssrRuntimeModuleName: f,
    ssr: a,
    isTS: u,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(_) {
      return `_${Mn[_]}`;
    },
    push(_, O = -2, N) {
      d.code += _;
    },
    indent() {
      b(++d.indentLevel);
    },
    deindent(_ = !1) {
      _ ? --d.indentLevel : b(--d.indentLevel);
    },
    newline() {
      b(d.indentLevel);
    }
  };
  function b(_) {
    d.push(
      `
` + "  ".repeat(_),
      0
      /* Start */
    );
  }
  return d;
}
function Ag(e, t = {}) {
  const n = Cg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: i,
    prefixIdentifiers: r,
    indent: o,
    deindent: l,
    newline: c,
    scopeId: f,
    ssr: a
  } = n, u = Array.from(e.helpers), p = u.length > 0, d = !r && s !== "module";
  Ng(e, n);
  const _ = a ? "ssrRender" : "render", N = (a ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (i(`function ${_}(${N}) {`), o(), d && (i("with (_ctx) {"), o(), p && (i(
    `const { ${u.map(Sf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), c())), e.components.length && (ar(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (ar(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), ar(e.filters, "filter", n), c()), e.temps > 0) {
    i("let ");
    for (let A = 0; A < e.temps; A++)
      i(`${A > 0 ? ", " : ""}_temp${A}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (i(
    `
`,
    0
    /* Start */
  ), c()), a || i("return "), e.codegenNode ? Me(e.codegenNode, n) : i("null"), d && (l(), i("}")), l(), i("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Ng(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: i,
    newline: r,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: c
  } = t, f = l, a = Array.from(e.helpers);
  if (a.length > 0 && (i(
    `const _Vue = ${f}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      ho,
      po,
      Cs,
      go,
      tf
    ].filter((p) => a.includes(p)).map(Sf).join(", ");
    i(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  xg(e.hoists, t), r(), i("return ");
}
function ar(e, t, { helper: n, push: s, newline: i, isTS: r }) {
  const o = n(
    t === "filter" ? bo : t === "component" ? mo : _o
  );
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    const f = c.endsWith("__self");
    f && (c = c.slice(0, -6)), s(
      `const ${ms(c, t)} = ${o}(${JSON.stringify(c)}${f ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && i();
  }
}
function xg(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let i = 0; i < e.length; i++) {
    const r = e[i];
    r && (n(`const _hoisted_${i + 1} = `), Me(r, t), s());
  }
  t.pure = !1;
}
function Ro(e, t) {
  const n = e.length > 3 || !1;
  t.push("["), n && t.indent(), Ns(e, t, n), n && t.deindent(), t.push("]");
}
function Ns(e, t, n = !1, s = !0) {
  const { push: i, newline: r } = t;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    Z(l) ? i(
      l,
      -3
      /* Unknown */
    ) : B(l) ? Ro(l, t) : Me(l, t), o < e.length - 1 && (n ? (s && i(","), r()) : s && i(", "));
  }
}
function Me(e, t) {
  if (Z(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Ke(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      Me(e.codegenNode, t);
      break;
    case 2:
      wg(e, t);
      break;
    case 4:
      vf(e, t);
      break;
    case 5:
      Ig(e, t);
      break;
    case 12:
      Me(e.codegenNode, t);
      break;
    case 8:
      Ef(e, t);
      break;
    case 3:
      Rg(e, t);
      break;
    case 13:
      Pg(e, t);
      break;
    case 14:
      Mg(e, t);
      break;
    case 15:
      Lg(e, t);
      break;
    case 17:
      Dg(e, t);
      break;
    case 18:
      Fg(e, t);
      break;
    case 19:
      Vg(e, t);
      break;
    case 20:
      $g(e, t);
      break;
    case 21:
      Ns(e.body, t, !0, !1);
      break;
  }
}
function wg(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function vf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Ig(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(qi), n(`${s(ji)}(`), Me(e.content, t), n(")");
}
function Ef(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    Z(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : Me(s, t);
  }
}
function Og(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Ef(e, t), n("]");
  else if (e.isStatic) {
    const s = Io(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Rg(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(qi), n(
    `${s(Cs)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Pg(e, t) {
  const { push: n, helper: s, pure: i } = t, {
    tag: r,
    props: o,
    children: l,
    patchFlag: c,
    dynamicProps: f,
    directives: a,
    isBlock: u,
    disableTracking: p,
    isComponent: d
  } = e;
  let b;
  c && (b = String(c)), a && n(s(So) + "("), u && n(`(${s(cn)}(${p ? "true" : ""}), `), i && n(qi);
  const _ = u ? Fn(t.inSSR, d) : Dn(t.inSSR, d);
  n(s(_) + "(", -2, e), Ns(
    kg([r, o, l, b, f]),
    t
  ), n(")"), u && n(")"), a && (n(", "), Me(a, t), n(")"));
}
function kg(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Mg(e, t) {
  const { push: n, helper: s, pure: i } = t, r = Z(e.callee) ? e.callee : s(e.callee);
  i && n(qi), n(r + "(", -2, e), Ns(e.arguments, t), n(")");
}
function Lg(e, t) {
  const { push: n, indent: s, deindent: i, newline: r } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || !1;
  n(l ? "{" : "{ "), l && s();
  for (let c = 0; c < o.length; c++) {
    const { key: f, value: a } = o[c];
    Og(f, t), n(": "), Me(a, t), c < o.length - 1 && (n(","), r());
  }
  l && i(), n(l ? "}" : " }");
}
function Dg(e, t) {
  Ro(e.elements, t);
}
function Fg(e, t) {
  const { push: n, indent: s, deindent: i } = t, { params: r, returns: o, body: l, newline: c, isSlot: f } = e;
  f && n(`_${Mn[Ao]}(`), n("(", -2, e), B(r) ? Ns(r, t) : r && Me(r, t), n(") => "), (c || l) && (n("{"), s()), o ? (c && n("return "), B(o) ? Ro(o, t) : Me(o, t)) : l && Me(l, t), (c || l) && (i(), n("}")), f && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Vg(e, t) {
  const { test: n, consequent: s, alternate: i, newline: r } = e, { push: o, indent: l, deindent: c, newline: f } = t;
  if (n.type === 4) {
    const u = !Io(n.content);
    u && o("("), vf(n, t), u && o(")");
  } else
    o("("), Me(n, t), o(")");
  r && l(), t.indentLevel++, r || o(" "), o("? "), Me(s, t), t.indentLevel--, r && f(), r || o(" "), o(": ");
  const a = i.type === 19;
  a || t.indentLevel++, Me(i, t), a || t.indentLevel--, r && c(
    !0
    /* without newline */
  );
}
function $g(e, t) {
  const { push: n, helper: s, indent: i, deindent: r, newline: o } = t, { needPauseTracking: l, needArraySpread: c } = e;
  c && n("[...("), n(`_cache[${e.index}] || (`), l && (i(), n(`${s(gi)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), Me(e.value, t), l && (n(`).cacheIndex = ${e.index},`), o(), n(`${s(gi)}(1),`), o(), n(`_cache[${e.index}]`), r()), n(")"), c && n(")]");
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const Bg = bf(
  /^(?:if|else|else-if)$/,
  (e, t, n) => Hg(e, t, n, (s, i, r) => {
    const o = n.parent.children;
    let l = o.indexOf(s), c = 0;
    for (; l-- >= 0; ) {
      const f = o[l];
      f && f.type === 9 && (c += f.branches.length);
    }
    return () => {
      if (r)
        s.codegenNode = Ml(
          i,
          c,
          n
        );
      else {
        const f = Ug(s.codegenNode);
        f.alternate = Ml(
          i,
          c + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function Hg(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const i = t.exp ? t.exp.loc : e.loc;
    n.onError(
      he(28, t.loc)
    ), t.exp = z("true", !1, i);
  }
  if (t.name === "if") {
    const i = kl(e, t), r = {
      type: 9,
      loc: dg(e.loc),
      branches: [i]
    };
    if (n.replaceNode(r), s)
      return s(r, i, !0);
  } else {
    const i = n.parent.children;
    let r = i.indexOf(e);
    for (; r-- >= -1; ) {
      const o = i[r];
      if (o && o.type === 3) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 2 && !o.content.trim().length) {
        n.removeNode(o);
        continue;
      }
      if (o && o.type === 9) {
        (t.name === "else-if" || t.name === "else") && o.branches[o.branches.length - 1].condition === void 0 && n.onError(
          he(30, e.loc)
        ), n.removeNode();
        const l = kl(e, t);
        o.branches.push(l);
        const c = s && s(o, l, !1);
        Wi(l, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          he(30, e.loc)
        );
      break;
    }
  }
}
function kl(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !tt(e, "for") ? e.children : [e],
    userKey: Ki(e, "key"),
    isTemplateIf: n
  };
}
function Ml(e, t, n) {
  return e.condition ? Rr(
    e.condition,
    Ll(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    ve(n.helper(Cs), [
      '""',
      "true"
    ])
  ) : Ll(e, t, n);
}
function Ll(e, t, n) {
  const { helper: s } = n, i = _e(
    "key",
    z(
      `${t}`,
      !1,
      Qe,
      2
    )
  ), { children: r } = e, o = r[0];
  if (r.length !== 1 || o.type !== 1)
    if (r.length === 1 && o.type === 11) {
      const c = o.codegenNode;
      return bi(c, i, n), c;
    } else
      return ds(
        n,
        s(hs),
        nt([i]),
        r,
        64,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
  else {
    const c = o.codegenNode, f = sg(c);
    return f.type === 13 && xo(f, n), bi(f, i, n), c;
  }
}
function Ug(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const jg = (e, t, n) => {
  const { modifiers: s, loc: i } = e, r = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        he(
          52,
          r.loc
        )
      ), {
        props: [
          _e(r, z("", !0, i))
        ]
      };
    Tf(e), o = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = fe(r.content) : r.content = `${n.helperString(Ir)}(${r.content})` : (r.children.unshift(`${n.helperString(Ir)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && Dl(r, "."), s.some((l) => l.content === "attr") && Dl(r, "^")), {
    props: [_e(r, o)]
  };
}, Tf = (e, t) => {
  const n = e.arg, s = fe(n.content);
  e.exp = z(s, !1, n.loc);
}, Dl = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Kg = bf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: i } = n;
    return Wg(e, t, n, (r) => {
      const o = ve(s(vo), [
        r.source
      ]), l = yi(e), c = tt(e, "memo"), f = Ki(e, "key", !1, !0);
      f && f.type === 7 && !f.exp && Tf(f);
      let u = f && (f.type === 6 ? f.value ? z(f.value.content, !0) : void 0 : f.exp);
      const p = f && u ? _e("key", u) : null, d = r.source.type === 4 && r.source.constType > 0, b = d ? 64 : f ? 128 : 256;
      return r.codegenNode = ds(
        n,
        s(hs),
        void 0,
        o,
        b,
        void 0,
        void 0,
        !0,
        !d,
        !1,
        e.loc
      ), () => {
        let _;
        const { children: O } = r, N = O.length !== 1 || O[0].type !== 1, A = _i(e) ? e : l && e.children.length === 1 && _i(e.children[0]) ? e.children[0] : null;
        if (A ? (_ = A.codegenNode, l && p && bi(_, p, n)) : N ? _ = ds(
          n,
          s(hs),
          p ? nt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (_ = O[0].codegenNode, l && p && bi(_, p, n), _.isBlock !== !d && (_.isBlock ? (i(cn), i(
          Fn(n.inSSR, _.isComponent)
        )) : i(
          Dn(n.inSSR, _.isComponent)
        )), _.isBlock = !d, _.isBlock ? (s(cn), s(Fn(n.inSSR, _.isComponent))) : s(Dn(n.inSSR, _.isComponent))), c) {
          const g = Ln(
            Mr(r.parseResult, [
              z("_cached")
            ])
          );
          g.body = Kd([
            at(["const _memo = (", c.exp, ")"]),
            at([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                rf
              )}(_cached, _memo)) return _cached`
            ]),
            at(["const _item = ", _]),
            z("_item.memo = _memo"),
            z("return _item")
          ]), o.arguments.push(
            g,
            z("_cache"),
            z(String(n.cached.length))
          ), n.cached.push(null);
        } else
          o.arguments.push(
            Ln(
              Mr(r.parseResult),
              _,
              !0
            )
          );
      };
    });
  }
);
function Wg(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      he(31, t.loc)
    );
    return;
  }
  const i = t.forParseResult;
  if (!i) {
    n.onError(
      he(32, t.loc)
    );
    return;
  }
  Cf(i);
  const { addIdentifiers: r, removeIdentifiers: o, scopes: l } = n, { source: c, value: f, key: a, index: u } = i, p = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: f,
    keyAlias: a,
    objectIndexAlias: u,
    parseResult: i,
    children: yi(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const d = s && s(p);
  return () => {
    l.vFor--, d && d();
  };
}
function Cf(e, t) {
  e.finalized || (e.finalized = !0);
}
function Mr({ value: e, key: t, index: n }, s = []) {
  return qg([e, t, n, ...s]);
}
function qg(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || z("_".repeat(s + 1), !1));
}
const Fl = z("undefined", !1), Gg = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = tt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, Jg = (e, t, n, s) => Ln(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function Yg(e, t, n = Jg) {
  t.helper(Ao);
  const { children: s, loc: i } = e, r = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const c = tt(e, "slot", !0);
  if (c) {
    const { arg: O, exp: N } = c;
    O && !je(O) && (l = !0), r.push(
      _e(
        O || z("default", !0),
        n(N, void 0, s, i)
      )
    );
  }
  let f = !1, a = !1;
  const u = [], p = /* @__PURE__ */ new Set();
  let d = 0;
  for (let O = 0; O < s.length; O++) {
    const N = s[O];
    let A;
    if (!yi(N) || !(A = tt(N, "slot", !0))) {
      N.type !== 3 && u.push(N);
      continue;
    }
    if (c) {
      t.onError(
        he(37, A.loc)
      );
      break;
    }
    f = !0;
    const { children: g, loc: y } = N, {
      arg: v = z("default", !0),
      exp: w,
      loc: V
    } = A;
    let R;
    je(v) ? R = v ? v.content : "default" : l = !0;
    const S = tt(N, "for"), C = n(w, S, g, y);
    let M, E;
    if (M = tt(N, "if"))
      l = !0, o.push(
        Rr(
          M.exp,
          Bs(v, C, d++),
          Fl
        )
      );
    else if (E = tt(
      N,
      /^else(?:-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let D = O, W;
      for (; D-- && (W = s[D], !(W.type !== 3 && Lr(W))); )
        ;
      if (W && yi(W) && tt(W, /^(?:else-)?if$/)) {
        let J = o[o.length - 1];
        for (; J.alternate.type === 19; )
          J = J.alternate;
        J.alternate = E.exp ? Rr(
          E.exp,
          Bs(
            v,
            C,
            d++
          ),
          Fl
        ) : Bs(v, C, d++);
      } else
        t.onError(
          he(30, E.loc)
        );
    } else if (S) {
      l = !0;
      const D = S.forParseResult;
      D ? (Cf(D), o.push(
        ve(t.helper(vo), [
          D.source,
          Ln(
            Mr(D),
            Bs(v, C),
            !0
          )
        ])
      )) : t.onError(
        he(
          32,
          S.loc
        )
      );
    } else {
      if (R) {
        if (p.has(R)) {
          t.onError(
            he(
              38,
              V
            )
          );
          continue;
        }
        p.add(R), R === "default" && (a = !0);
      }
      r.push(_e(v, C));
    }
  }
  if (!c) {
    const O = (N, A) => {
      const g = n(N, void 0, A, i);
      return t.compatConfig && (g.isNonScopedSlot = !0), _e("default", g);
    };
    f ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((N) => Lr(N)) && (a ? t.onError(
      he(
        39,
        u[0].loc
      )
    ) : r.push(
      O(void 0, u)
    )) : r.push(O(void 0, s));
  }
  const b = l ? 2 : Ys(e.children) ? 3 : 1;
  let _ = nt(
    r.concat(
      _e(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        z(
          b + "",
          !1
        )
      )
    ),
    i
  );
  return o.length && (_ = ve(t.helper(sf), [
    _,
    sn(o)
  ])), {
    slots: _,
    hasDynamicSlots: l
  };
}
function Bs(e, t, n) {
  const s = [
    _e("name", e),
    _e("fn", t)
  ];
  return n != null && s.push(
    _e("key", z(String(n), !0))
  ), nt(s);
}
function Ys(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Ys(n.children))
          return !0;
        break;
      case 9:
        if (Ys(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Ys(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Lr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Lr(e.content);
}
const Af = /* @__PURE__ */ new WeakMap(), Xg = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: i } = e, r = e.tagType === 1;
  let o = r ? Zg(e, t) : `"${s}"`;
  const l = le(o) && o.callee === yo;
  let c, f, a = 0, u, p, d, b = (
    // dynamic component may resolve to plain elements
    l || o === ts || o === uo || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (i.length > 0) {
    const _ = Nf(
      e,
      t,
      void 0,
      r,
      l
    );
    c = _.props, a = _.patchFlag, p = _.dynamicPropNames;
    const O = _.directives;
    d = O && O.length ? sn(
      O.map((N) => Qg(N, t))
    ) : void 0, _.shouldUseBlock && (b = !0);
  }
  if (e.children.length > 0)
    if (o === pi && (b = !0, a |= 1024), r && // Teleport is not a real component and has dedicated runtime handling
    o !== ts && // explained above.
    o !== pi) {
      const { slots: O, hasDynamicSlots: N } = Yg(e, t);
      f = O, N && (a |= 1024);
    } else if (e.children.length === 1 && o !== ts) {
      const O = e.children[0], N = O.type, A = N === 5 || N === 8;
      A && Ye(O, t) === 0 && (a |= 1), A || N === 2 ? f = O : f = e.children;
    } else
      f = e.children;
  p && p.length && (u = em(p)), e.codegenNode = ds(
    t,
    o,
    c,
    f,
    a === 0 ? void 0 : a,
    u,
    d,
    !!b,
    !1,
    r,
    e.loc
  );
};
function Zg(e, t, n = !1) {
  let { tag: s } = e;
  const i = Dr(s), r = Ki(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (r)
    if (i || rn(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (r.type === 6 ? l = r.value && z(r.value.content, !0) : (l = r.exp, l || (l = z("is", !1, r.arg.loc))), l)
        return ve(t.helper(yo), [
          l
        ]);
    } else r.type === 6 && r.value.content.startsWith("vue:") && (s = r.value.content.slice(4));
  const o = lf(s) || t.isBuiltInComponent(s);
  return o ? (n || t.helper(o), o) : (t.helper(mo), t.components.add(s), ms(s, "component"));
}
function Nf(e, t, n = e.props, s, i, r = !1) {
  const { tag: o, loc: l, children: c } = e;
  let f = [];
  const a = [], u = [], p = c.length > 0;
  let d = !1, b = 0, _ = !1, O = !1, N = !1, A = !1, g = !1, y = !1;
  const v = [], w = (C) => {
    f.length && (a.push(
      nt(Vl(f), l)
    ), f = []), C && a.push(C);
  }, V = () => {
    t.scopes.vFor > 0 && f.push(
      _e(
        z("ref_for", !0),
        z("true")
      )
    );
  }, R = ({ key: C, value: M }) => {
    if (je(C)) {
      const E = C.content, D = an(E);
      if (D && (!s || i) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      E.toLowerCase() !== "onclick" && // omit v-model handlers
      E !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Bt(E) && (A = !0), D && Bt(E) && (y = !0), D && M.type === 14 && (M = M.arguments[0]), M.type === 20 || (M.type === 4 || M.type === 8) && Ye(M, t) > 0)
        return;
      E === "ref" ? _ = !0 : E === "class" ? O = !0 : E === "style" ? N = !0 : E !== "key" && !v.includes(E) && v.push(E), s && (E === "class" || E === "style") && !v.includes(E) && v.push(E);
    } else
      g = !0;
  };
  for (let C = 0; C < n.length; C++) {
    const M = n[C];
    if (M.type === 6) {
      const { loc: E, name: D, nameLoc: W, value: J } = M;
      let U = !0;
      if (D === "ref" && (_ = !0, V()), D === "is" && (Dr(o) || J && J.content.startsWith("vue:") || rn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      f.push(
        _e(
          z(D, !0, W),
          z(
            J ? J.content : "",
            U,
            J ? J.loc : E
          )
        )
      );
    } else {
      const { name: E, arg: D, exp: W, loc: J, modifiers: U } = M, Y = E === "bind", j = E === "on";
      if (E === "slot") {
        s || t.onError(
          he(40, J)
        );
        continue;
      }
      if (E === "once" || E === "memo" || E === "is" || Y && Zt(D, "is") && (Dr(o) || rn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || j && r)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (Y && Zt(D, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        j && p && Zt(D, "vue:before-update")) && (d = !0), Y && Zt(D, "ref") && V(), !D && (Y || j)
      ) {
        if (g = !0, W)
          if (Y) {
            if (w(), rn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              a.unshift(W);
              continue;
            }
            V(), w(), a.push(W);
          } else
            w({
              type: 14,
              loc: J,
              callee: t.helper(Co),
              arguments: s ? [W] : [W, "true"]
            });
        else
          t.onError(
            he(
              Y ? 34 : 35,
              J
            )
          );
        continue;
      }
      Y && U.some((ft) => ft.content === "prop") && (b |= 32);
      const pe = t.directiveTransforms[E];
      if (pe) {
        const { props: ft, needRuntime: rt } = pe(M, e, t);
        !r && ft.forEach(R), j && D && !je(D) ? w(nt(ft, l)) : f.push(...ft), rt && (u.push(M), Ke(rt) && Af.set(M, rt));
      } else Kf(E) || (u.push(M), p && (d = !0));
    }
  }
  let S;
  if (a.length ? (w(), a.length > 1 ? S = ve(
    t.helper(di),
    a,
    l
  ) : S = a[0]) : f.length && (S = nt(
    Vl(f),
    l
  )), g ? b |= 16 : (O && !s && (b |= 2), N && !s && (b |= 4), v.length && (b |= 8), A && (b |= 32)), !d && (b === 0 || b === 32) && (_ || y || u.length > 0) && (b |= 512), !t.inSSR && S)
    switch (S.type) {
      case 15:
        let C = -1, M = -1, E = !1;
        for (let J = 0; J < S.properties.length; J++) {
          const U = S.properties[J].key;
          je(U) ? U.content === "class" ? C = J : U.content === "style" && (M = J) : U.isHandlerKey || (E = !0);
        }
        const D = S.properties[C], W = S.properties[M];
        E ? S = ve(
          t.helper(ps),
          [S]
        ) : (D && !je(D.value) && (D.value = ve(
          t.helper(Eo),
          [D.value]
        )), W && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (N || W.value.type === 4 && W.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        W.value.type === 17) && (W.value = ve(
          t.helper(To),
          [W.value]
        )));
        break;
      case 14:
        break;
      default:
        S = ve(
          t.helper(ps),
          [
            ve(t.helper(As), [
              S
            ])
          ]
        );
        break;
    }
  return {
    props: S,
    directives: u,
    patchFlag: b,
    dynamicPropNames: v,
    shouldUseBlock: d
  };
}
function Vl(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.key.type === 8 || !i.key.isStatic) {
      n.push(i);
      continue;
    }
    const r = i.key.content, o = t.get(r);
    o ? (r === "style" || r === "class" || an(r)) && zg(o, i) : (t.set(r, i), n.push(i));
  }
  return n;
}
function zg(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = sn(
    [e.value, t.value],
    e.loc
  );
}
function Qg(e, t) {
  const n = [], s = Af.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(_o), t.directives.add(e.name), n.push(ms(e.name, "directive")));
  const { loc: i } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = z("true", !1, i);
    n.push(
      nt(
        e.modifiers.map(
          (o) => _e(o, r)
        ),
        i
      )
    );
  }
  return sn(n, e.loc);
}
function em(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Dr(e) {
  return e === "component" || e === "Component";
}
const tm = (e, t) => {
  if (_i(e)) {
    const { children: n, loc: s } = e, { slotName: i, slotProps: r } = nm(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      i,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (o[2] = r, l = 3), n.length && (o[3] = Ln([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = ve(
      t.helper(nf),
      o,
      s
    );
  }
};
function nm(e, t) {
  let n = '"default"', s;
  const i = [];
  for (let r = 0; r < e.props.length; r++) {
    const o = e.props[r];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = fe(o.name), i.push(o)));
    else if (o.name === "bind" && Zt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = fe(o.arg.content);
        n = o.exp = z(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && je(o.arg) && (o.arg.content = fe(o.arg.content)), i.push(o);
  }
  if (i.length > 0) {
    const { props: r, directives: o } = Nf(
      e,
      t,
      i,
      !1,
      !1
    );
    s = r, o.length && t.onError(
      he(
        36,
        o[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: s
  };
}
const xf = (e, t, n, s) => {
  const { loc: i, modifiers: r, arg: o } = e;
  !e.exp && !r.length && n.onError(he(35, i));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let u = o.content;
      u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const p = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        Tn(fe(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = z(p, !0, o.loc);
    } else
      l = at([
        `${n.helperString(Or)}(`,
        o,
        ")"
      ]);
  else
    l = o, l.children.unshift(`${n.helperString(Or)}(`), l.children.push(")");
  let c = e.exp;
  c && !c.content.trim() && (c = void 0);
  let f = n.cacheHandlers && !c && !n.inVOnce;
  if (c) {
    const u = af(c), p = !(u || Qd(c)), d = c.content.includes(";");
    (p || f && u) && (c = at([
      `${p ? "$event" : "(...args)"} => ${d ? "{" : "("}`,
      c,
      d ? "}" : ")"
    ]));
  }
  let a = {
    props: [
      _e(
        l,
        c || z("() => {}", !1, i)
      )
    ]
  };
  return s && (a = s(a)), f && (a.props[0].value = n.cache(a.props[0].value)), a.props.forEach((u) => u.key.isHandlerKey = !0), a;
}, sm = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, i = !1;
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (cr(o)) {
          i = !0;
          for (let l = r + 1; l < n.length; l++) {
            const c = n[l];
            if (cr(c))
              s || (s = n[r] = at(
                [o],
                o.loc
              )), s.children.push(" + ", c), n.splice(l, 1), l--;
            else {
              s = void 0;
              break;
            }
          }
        }
      }
      if (!(!i || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (r) => r.type === 7 && !t.directiveTransforms[r.name]
      ) && e.tag !== "template")))
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if (cr(o) || o.type === 8) {
            const l = [];
            (o.type !== 2 || o.content !== " ") && l.push(o), !t.ssr && Ye(o, t) === 0 && l.push(
              "1"
            ), n[r] = {
              type: 12,
              content: o,
              loc: o.loc,
              codegenNode: ve(
                t.helper(go),
                l
              )
            };
          }
        }
    };
}, $l = /* @__PURE__ */ new WeakSet(), im = (e, t) => {
  if (e.type === 1 && tt(e, "once", !0))
    return $l.has(e) || t.inVOnce || t.inSSR ? void 0 : ($l.add(e), t.inVOnce = !0, t.helper(gi), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, wf = (e, t, n) => {
  const { exp: s, arg: i } = e;
  if (!s)
    return n.onError(
      he(41, e.loc)
    ), Hs();
  const r = s.loc.source.trim(), o = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(he(44, s.loc)), Hs();
  if (!o.trim() || !af(s))
    return n.onError(
      he(42, s.loc)
    ), Hs();
  const c = i || z("modelValue", !0), f = i ? je(i) ? `onUpdate:${fe(i.content)}` : at(['"onUpdate:" + ', i]) : "onUpdate:modelValue";
  let a;
  const u = n.isTS ? "($event: any)" : "$event";
  a = at([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    _e(c, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    _e(f, a)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const d = e.modifiers.map((_) => _.content).map((_) => (Io(_) ? _ : JSON.stringify(_)) + ": true").join(", "), b = i ? je(i) ? `${i.content}Modifiers` : at([i, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      _e(
        b,
        z(
          `{ ${d} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Hs(p);
};
function Hs(e = []) {
  return { props: e };
}
const rm = /[\w).+\-_$\]]/, om = (e, t) => {
  rn("COMPILER_FILTERS", t) && (e.type === 5 ? Si(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Si(n.exp, t);
  }));
};
function Si(e, t) {
  if (e.type === 4)
    Bl(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? Bl(s, t) : s.type === 8 ? Si(e, t) : s.type === 5 && Si(s.content, t));
    }
}
function Bl(e, t) {
  const n = e.content;
  let s = !1, i = !1, r = !1, o = !1, l = 0, c = 0, f = 0, a = 0, u, p, d, b, _ = [];
  for (d = 0; d < n.length; d++)
    if (p = u, u = n.charCodeAt(d), s)
      u === 39 && p !== 92 && (s = !1);
    else if (i)
      u === 34 && p !== 92 && (i = !1);
    else if (r)
      u === 96 && p !== 92 && (r = !1);
    else if (o)
      u === 47 && p !== 92 && (o = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(d + 1) !== 124 && n.charCodeAt(d - 1) !== 124 && !l && !c && !f)
      b === void 0 ? (a = d + 1, b = n.slice(0, d).trim()) : O();
    else {
      switch (u) {
        case 34:
          i = !0;
          break;
        // "
        case 39:
          s = !0;
          break;
        // '
        case 96:
          r = !0;
          break;
        // `
        case 40:
          f++;
          break;
        // (
        case 41:
          f--;
          break;
        // )
        case 91:
          c++;
          break;
        // [
        case 93:
          c--;
          break;
        // ]
        case 123:
          l++;
          break;
        // {
        case 125:
          l--;
          break;
      }
      if (u === 47) {
        let N = d - 1, A;
        for (; N >= 0 && (A = n.charAt(N), A === " "); N--)
          ;
        (!A || !rm.test(A)) && (o = !0);
      }
    }
  b === void 0 ? b = n.slice(0, d).trim() : a !== 0 && O();
  function O() {
    _.push(n.slice(a, d).trim()), a = d + 1;
  }
  if (_.length) {
    for (d = 0; d < _.length; d++)
      b = lm(b, _[d], t);
    e.content = b, e.ast = void 0;
  }
}
function lm(e, t, n) {
  n.helper(bo);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${ms(t, "filter")}(${e})`;
  {
    const i = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(i), `${ms(i, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Hl = /* @__PURE__ */ new WeakSet(), cm = (e, t) => {
  if (e.type === 1) {
    const n = tt(e, "memo");
    return !n || Hl.has(e) || t.inSSR ? void 0 : (Hl.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && xo(s, t), e.codegenNode = ve(t.helper(No), [
        n.exp,
        Ln(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function am(e) {
  return [
    [
      im,
      Bg,
      cm,
      Kg,
      om,
      tm,
      Xg,
      Gg,
      sm
    ],
    {
      on: xf,
      bind: jg,
      model: wf
    }
  ];
}
function fm(e, t = {}) {
  const n = t.onError || wo, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(he(47)) : s && n(he(48));
  const i = !1;
  t.cacheHandlers && n(he(49)), t.scopeId && !s && n(he(50));
  const r = te({}, t, {
    prefixIdentifiers: i
  }), o = Z(e) ? yg(e, r) : e, [l, c] = am();
  return vg(
    o,
    te({}, r, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: te(
        {},
        c,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), Ag(o, r);
}
const um = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const If = Symbol(""), Of = Symbol(
  ""
), Rf = Symbol(""), Pf = Symbol(
  ""
), Fr = Symbol(
  ""
), kf = Symbol(
  ""
), Mf = Symbol(
  ""
), Lf = Symbol(""), Df = Symbol(""), Ff = Symbol(
  ""
);
Hd({
  [If]: "vModelRadio",
  [Of]: "vModelCheckbox",
  [Rf]: "vModelText",
  [Pf]: "vModelSelect",
  [Fr]: "vModelDynamic",
  [kf]: "withModifiers",
  [Mf]: "withKeys",
  [Lf]: "vShow",
  [Df]: "Transition",
  [Ff]: "TransitionGroup"
});
let mn;
function hm(e, t = !1) {
  return mn || (mn = document.createElement("div")), t ? (mn.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, mn.children[0].getAttribute("foo")) : (mn.innerHTML = e, mn.textContent);
}
const pm = {
  parseMode: "html",
  isVoidTag: lu,
  isNativeTag: (e) => iu(e) || ru(e) || ou(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: hm,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Df;
    if (e === "TransitionGroup" || e === "transition-group")
      return Ff;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let s = t ? t.ns : n;
    if (t && s === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (i) => i.type === 6 && i.name === "encoding" && i.value != null && (i.value.content === "text/html" || i.value.content === "application/xhtml+xml")
        ) && (s = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (s = 0);
    else t && s === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (s = 0);
    if (s === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return s;
  }
}, dm = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: z("style", !0, t.loc),
      exp: gm(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, gm = (e, t) => {
  const n = ql(e);
  return z(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Kt(e, t) {
  return he(
    e,
    t
  );
}
const mm = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(53, i)
  ), t.children.length && (n.onError(
    Kt(54, i)
  ), t.children.length = 0), {
    props: [
      _e(
        z("innerHTML", !0, i),
        s || z("", !0)
      )
    ]
  };
}, ym = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(55, i)
  ), t.children.length && (n.onError(
    Kt(56, i)
  ), t.children.length = 0), {
    props: [
      _e(
        z("textContent", !0),
        s ? Ye(s, n) > 0 ? s : ve(
          n.helperString(ji),
          [s],
          i
        ) : z("", !0)
      )
    ]
  };
}, _m = (e, t, n) => {
  const s = wf(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Kt(
      58,
      e.arg.loc
    )
  );
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let o = Rf, l = !1;
    if (i === "input" || r) {
      const c = Ki(t, "type");
      if (c) {
        if (c.type === 7)
          o = Fr;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              o = If;
              break;
            case "checkbox":
              o = Of;
              break;
            case "file":
              l = !0, n.onError(
                Kt(
                  59,
                  e.loc
                )
              );
              break;
          }
      } else eg(t) && (o = Fr);
    } else i === "select" && (o = Pf);
    l || (s.needRuntime = n.helper(o));
  } else
    n.onError(
      Kt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (o) => !(o.key.type === 4 && o.key.content === "modelValue")
  ), s;
}, bm = /* @__PURE__ */ ze("passive,once,capture"), Sm = /* @__PURE__ */ ze(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), vm = /* @__PURE__ */ ze("left,right"), Vf = /* @__PURE__ */ ze("onkeyup,onkeydown,onkeypress"), Em = (e, t, n, s) => {
  const i = [], r = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const c = t[l].content;
    c === "native" && gs(
      "COMPILER_V_ON_NATIVE",
      n
    ) || bm(c) ? o.push(c) : vm(c) ? je(e) ? Vf(e.content.toLowerCase()) ? i.push(c) : r.push(c) : (i.push(c), r.push(c)) : Sm(c) ? r.push(c) : i.push(c);
  }
  return {
    keyModifiers: i,
    nonKeyModifiers: r,
    eventOptionModifiers: o
  };
}, Ul = (e, t) => je(e) && e.content.toLowerCase() === "onclick" ? z(t, !0) : e.type !== 4 ? at([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Tm = (e, t, n) => xf(e, t, n, (s) => {
  const { modifiers: i } = e;
  if (!i.length) return s;
  let { key: r, value: o } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: c, eventOptionModifiers: f } = Em(r, i, n, e.loc);
  if (c.includes("right") && (r = Ul(r, "onContextmenu")), c.includes("middle") && (r = Ul(r, "onMouseup")), c.length && (o = ve(n.helper(kf), [
    o,
    JSON.stringify(c)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!je(r) || Vf(r.content.toLowerCase())) && (o = ve(n.helper(Mf), [
    o,
    JSON.stringify(l)
  ])), f.length) {
    const a = f.map(un).join("");
    r = je(r) ? z(`${r.content}${a}`, !0) : at(["(", r, `) + "${a}"`]);
  }
  return {
    props: [_e(r, o)]
  };
}), Cm = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(61, i)
  ), {
    props: [],
    needRuntime: n.helper(Lf)
  };
}, Am = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode();
}, Nm = [
  dm
], xm = {
  cloak: um,
  html: mm,
  text: ym,
  model: _m,
  // override compiler-core
  on: Tm,
  // override compiler-core
  show: Cm
};
function wm(e, t = {}) {
  return fm(
    e,
    te({}, pm, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Am,
        ...Nm,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: te(
        {},
        xm,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
/**
* vue v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const jl = /* @__PURE__ */ Object.create(null);
function Im(e, t) {
  if (!Z(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return xe;
  const n = Gf(e, t), s = jl[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const l = document.querySelector(e);
    e = l ? l.innerHTML : "";
  }
  const i = te(
    {
      hoistStatic: !0,
      onError: void 0,
      onWarn: xe
    },
    t
  );
  !i.isCustomElement && typeof customElements < "u" && (i.isCustomElement = (l) => !!customElements.get(l));
  const { code: r } = wm(e, i), o = new Function("Vue", r)(Ld);
  return o._rc = !0, jl[n] = o;
}
Ta(Im);
const Om = /* @__PURE__ */ Li({
  __name: "Example",
  props: {
    title: { type: String },
    description: { type: String },
    isValid: { type: Boolean }
  },
  emits: ["new-font-size"],
  setup(e) {
    const t = en(16);
    return (n, s) => (Ze(), qt(be, null, [
      mt("h1", null, An(n.title), 1),
      mt("p", null, An(n.description), 1),
      s[1] || (s[1] = mt("br", null, null, -1)),
      mt("p", null, [
        mt("button", {
          onClick: s[0] || (s[0] = (i) => {
            t.value++, n.$emit("new-font-size", t.value);
          })
        }, " Set the font size to " + An(t.value) + "px. ", 1)
      ])
    ], 64));
  }
}), Rm = ".alert-box[data-v-71faf2cc]{background-color:red;color:#fff;padding:20px}", xs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Pm = {}, km = { class: "alert-box" };
function Mm(e, t) {
  return Ze(), qt("div", km, [
    t[0] || (t[0] = mt("strong", null, "This is an Error Message", -1)),
    jc(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Lm = /* @__PURE__ */ xs(Pm, [["render", Mm], ["styles", [Rm]], ["__scopeId", "data-v-71faf2cc"]]), Dm = {};
function Fm(e, t) {
  return Ze(), qt("div", null, "This is Home");
}
const Vm = /* @__PURE__ */ xs(Dm, [["render", Fm]]), $m = ".tab[data-v-4b345717]{border:1px solid #ccc;padding:10px}", Bm = {}, Hm = { class: "tab" };
function Um(e, t) {
  return Ze(), qt("div", Hm, "Posts");
}
const jm = /* @__PURE__ */ xs(Bm, [["render", Um], ["styles", [$m]], ["__scopeId", "data-v-4b345717"]]), Km = {}, Wm = { class: "tab" };
function qm(e, t) {
  return Ze(), qt("div", Wm, "Archive");
}
const Gm = /* @__PURE__ */ xs(Km, [["render", qm]]), Jm = ".demo{font-family:sans-serif;border:10px solid red;border-radius:2px;padding:20px 30px;margin-top:1em;margin-bottom:40px;-webkit-user-select:none;user-select:none;overflow-x:auto}.tab-button{cursor:pointer;padding:6px 10px;border-top-left-radius:3px;border-top-right-radius:3px;border:3px dotted #43a147;background:#f0f0f0;margin-bottom:-1px;margin-right:-1px}.tab-button:hover,.tab-button.active{background:#e0e0e0}.tab{border:1px solid #ccc;padding:10px}", Ym = { class: "demo" }, Xm = ["onClick"], Zm = {
  __name: "Tabs",
  setup(e) {
    const t = en("Home"), n = {
      Home: Vm,
      Posts: jm,
      Archive: Gm
    };
    return (s, i) => (Ze(), qt("div", Ym, [
      (Ze(), qt(be, null, Uc(n, (r, o) => mt("button", {
        key: o,
        class: $n(["tab-button", { active: t.value === o }]),
        onClick: (l) => t.value = o
      }, An(o), 11, Xm)), 64)),
      (Ze(), us(Hc(n[t.value]), { class: "tab" }))
    ]));
  }
}, zm = /* @__PURE__ */ xs(Zm, [["styles", [Jm]]]), Qm = /* @__PURE__ */ Ts(Om), ey = /* @__PURE__ */ Ts(Lm), ty = /* @__PURE__ */ Ts(zm);
customElements.define("example-webcomponent", Qm);
customElements.define("alert-box", ey);
customElements.define("tabs-component", ty);
export {
  ey as AlertBoxWebComponent,
  Oc as BaseTransition,
  Zr as BaseTransitionPropsValidators,
  ye as Comment,
  qp as DeprecationTypes,
  Ur as EffectScope,
  eh as ErrorCodes,
  $p as ErrorTypeStrings,
  Qm as ExampleWebComponent,
  be as Fragment,
  xh as KeepAlive,
  ns as ReactiveEffect,
  nn as Static,
  Sp as Suspense,
  ty as TabsWebComponent,
  ah as Teleport,
  jt as Text,
  Gu as TrackOpTypes,
  Zp as Transition,
  vd as TransitionGroup,
  Ju as TriggerOpTypes,
  Ui as VueElement,
  Qu as assertNumber,
  it as callWithAsyncErrorHandling,
  Bn as callWithErrorHandling,
  fe as camelize,
  un as capitalize,
  yt as cloneVNode,
  Wp as compatUtils,
  Im as compile,
  Na as computed,
  wr as createApp,
  us as createBlock,
  Ip as createCommentVNode,
  qt as createElementBlock,
  mt as createElementVNode,
  sa as createHydrationRenderer,
  qh as createPropsRestProxy,
  na as createRenderer,
  Ya as createSSRApp,
  Ph as createSlots,
  wp as createStaticVNode,
  lo as createTextVNode,
  ge as createVNode,
  mc as customRef,
  Ah as defineAsyncComponent,
  Li as defineComponent,
  Ts as defineCustomElement,
  Dh as defineEmits,
  Fh as defineExpose,
  Bh as defineModel,
  Vh as defineOptions,
  Lh as defineProps,
  gd as defineSSRCustomElement,
  $h as defineSlots,
  Bp as devtools,
  gu as effect,
  hu as effectScope,
  We as getCurrentInstance,
  Xl as getCurrentScope,
  Yu as getCurrentWatcher,
  Mi as getTransitionRawChildren,
  _a as guardReactiveProps,
  xa as h,
  hn as handleError,
  tp as hasInjectionContext,
  kd as hydrate,
  bh as hydrateOnIdle,
  Th as hydrateOnInteraction,
  Eh as hydrateOnMediaQuery,
  vh as hydrateOnVisible,
  Dp as initCustomFormatter,
  Md as initDirectivesForSSR,
  zn as inject,
  wa as isMemoSame,
  Oi as isProxy,
  Ht as isReactive,
  It as isReadonly,
  Ee as isRef,
  kp as isRuntimeOnly,
  Xe as isShallow,
  Rt as isVNode,
  pc as markRaw,
  Kh as mergeDefaults,
  Wh as mergeModels,
  ba as mergeProps,
  Pi as nextTick,
  $n as normalizeClass,
  Qf as normalizeProps,
  _s as normalizeStyle,
  Pc as onActivated,
  Lc as onBeforeMount,
  Vi as onBeforeUnmount,
  Qr as onBeforeUpdate,
  kc as onDeactivated,
  $c as onErrorCaptured,
  Ss as onMounted,
  Vc as onRenderTracked,
  Fc as onRenderTriggered,
  pu as onScopeDispose,
  Dc as onServerPrefetch,
  $i as onUnmounted,
  Fi as onUpdated,
  _c as onWatcherCleanup,
  Ze as openBlock,
  rh as popScopeId,
  Gc as provide,
  Gr as proxyRefs,
  ih as pushScopeId,
  rs as queuePostFlushCb,
  wi as reactive,
  qr as readonly,
  en as ref,
  Ta as registerRuntimeCompiler,
  Ja as render,
  Uc as renderList,
  jc as renderSlot,
  Oh as resolveComponent,
  Rh as resolveDirective,
  Hc as resolveDynamicComponent,
  Kp as resolveFilter,
  On as resolveTransitionHooks,
  fs as setBlockTracking,
  Hp as setDevtoolsHook,
  Ot as setTransitionHooks,
  hc as shallowReactive,
  Lu as shallowReadonly,
  dc as shallowRef,
  la as ssrContextKey,
  jp as ssrUtils,
  mu as stop,
  An as toDisplayString,
  Tn as toHandlerKey,
  kh as toHandlers,
  se as toRaw,
  Ku as toRef,
  Hu as toRefs,
  Vu as toValue,
  Np as transformVNodeArgs,
  Fu as triggerRef,
  Ri as unref,
  jh as useAttrs,
  _d as useCssModule,
  nd as useCssVars,
  Va as useHost,
  uh as useId,
  hp as useModel,
  ca as useSSRContext,
  yd as useShadowRoot,
  Uh as useSlots,
  hh as useTemplateRef,
  Xr as useTransitionState,
  ao as vModelCheckbox,
  ja as vModelDynamic,
  fo as vModelRadio,
  Ha as vModelSelect,
  hi as vModelText,
  Da as vShow,
  Ia as version,
  Vp as warn,
  wn as watch,
  ap as watchEffect,
  fp as watchPostEffect,
  aa as watchSyncEffect,
  Gh as withAsyncContext,
  Yr as withCtx,
  Hh as withDefaults,
  lh as withDirectives,
  Pd as withKeys,
  Fp as withMemo,
  Od as withModifiers,
  oh as withScopeId
};
