/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {}, Sn = [], xe = () => {
}, Wn = () => !1, an = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vr = (e) => e.startsWith("onUpdate:"), te = Object.assign, $r = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, $f = Object.prototype.hasOwnProperty, ie = (e, t) => $f.call(e, t), B = Array.isArray, vn = (e) => Fn(e) === "[object Map]", fn = (e) => Fn(e) === "[object Set]", Fo = (e) => Fn(e) === "[object Date]", Bf = (e) => Fn(e) === "[object RegExp]", G = (e) => typeof e == "function", Z = (e) => typeof e == "string", Ke = (e) => typeof e == "symbol", le = (e) => e !== null && typeof e == "object", Br = (e) => (le(e) || G(e)) && G(e.then) && G(e.catch), jl = Object.prototype.toString, Fn = (e) => jl.call(e), Hf = (e) => Fn(e).slice(8, -1), bi = (e) => Fn(e) === "[object Object]", Hr = (e) => Z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Uf = /* @__PURE__ */ ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Si = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jf = /-(\w)/g, ue = Si(
  (e) => e.replace(jf, (t, n) => n ? n.toUpperCase() : "")
), Kf = /\B([A-Z])/g, Ue = Si(
  (e) => e.replace(Kf, "-$1").toLowerCase()
), un = Si((e) => e.charAt(0).toUpperCase() + e.slice(1)), En = Si(
  (e) => e ? `on${un(e)}` : ""
), De = (e, t) => !Object.is(e, t), Tn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cr = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Ys = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Xs = (e) => {
  const t = Z(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Vo;
const vi = () => Vo || (Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Wf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const qf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ ze(qf);
function ys(e) {
  if (B(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = Z(s) ? Kl(s) : ys(s);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (Z(e) || le(e))
    return e;
}
const Jf = /;(?![^(]*\))/g, Yf = /:([^]+)/, Xf = /\/\*[^]*?\*\//g;
function Kl(e) {
  const t = {};
  return e.replace(Xf, "").split(Jf).forEach((n) => {
    if (n) {
      const s = n.split(Yf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Vn(e) {
  let t = "";
  if (Z(e))
    t = e;
  else if (B(e))
    for (let n = 0; n < e.length; n++) {
      const s = Vn(e[n]);
      s && (t += s + " ");
    }
  else if (le(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Zf(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !Z(t) && (e.class = Vn(t)), n && (e.style = ys(n)), e;
}
const zf = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Qf = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", eu = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", tu = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", nu = /* @__PURE__ */ ze(zf), su = /* @__PURE__ */ ze(Qf), iu = /* @__PURE__ */ ze(eu), ru = /* @__PURE__ */ ze(tu), ou = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lu = /* @__PURE__ */ ze(ou);
function Wl(e) {
  return !!e || e === "";
}
function cu(e, t) {
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
    return n && s ? cu(e, t) : !1;
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
function Ei(e, t) {
  return e.findIndex((n) => Wt(n, t));
}
const ql = (e) => !!(e && e.__v_isRef === !0), Cn = (e) => Z(e) ? e : e == null ? "" : B(e) || le(e) && (e.toString === jl || !G(e.toString)) ? ql(e) ? Cn(e.value) : JSON.stringify(e, Gl, 2) : String(e), Gl = (e, t) => ql(t) ? Gl(e, t.value) : vn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], r) => (n[Ji(s, r) + " =>"] = i, n),
    {}
  )
} : fn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ji(n))
} : Ke(t) ? Ji(t) : le(t) && !B(t) && !bi(t) ? String(t) : t, Ji = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ke(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function au(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.18
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
function fu(e) {
  return new Ur(e);
}
function Jl() {
  return Oe;
}
function uu(e, t = !1) {
  Oe && Oe.cleanups.push(e);
}
let ae;
const Yi = /* @__PURE__ */ new WeakSet();
class ns {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Oe && Oe.active && Oe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yi.has(this) && (Yi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $o(this), Zl(this);
    const t = ae, n = ct;
    ae = this, ct = !0;
    try {
      return this.fn();
    } finally {
      zl(this), ae = t, ct = n, this.flags &= -3;
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
    this.flags & 64 ? Yi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ar(this) && this.run();
  }
  get dirty() {
    return ar(this);
  }
}
let Yl = 0, Jn, Yn;
function Xl(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Yn, Yn = e;
    return;
  }
  e.next = Jn, Jn = e;
}
function jr() {
  Yl++;
}
function Kr() {
  if (--Yl > 0)
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
function Zl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function zl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), Wr(s), hu(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function ar(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ql(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ql(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ss) || (e.globalVersion = ss, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ar(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ae, s = ct;
  ae = e, ct = !0;
  try {
    Zl(e);
    const i = e.fn(e._value);
    (t.version === 0 || De(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    ae = n, ct = s, zl(e), e.flags &= -3;
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
function hu(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function du(e, t) {
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
function pu(e) {
  e.effect.stop();
}
let ct = !0;
const ec = [];
function Nt() {
  ec.push(ct), ct = !1;
}
function xt() {
  const e = ec.pop();
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
class gu {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ti {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ae || !ct || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new gu(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, tc(n);
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
function tc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        tc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zs = /* @__PURE__ */ new WeakMap(), Qt = Symbol(
  ""
), fr = Symbol(
  ""
), is = Symbol(
  ""
);
function Pe(e, t, n) {
  if (ct && ae) {
    let s = Zs.get(e);
    s || Zs.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ti()), i.map = s, i.key = n), i.track();
  }
}
function Et(e, t, n, s, i, r) {
  const o = Zs.get(e);
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
    const c = B(e), a = c && Hr(n);
    if (c && n === "length") {
      const f = Number(s);
      o.forEach((u, d) => {
        (d === "length" || d === is || !Ke(d) && d >= f) && l(u);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), a && l(o.get(is)), t) {
        case "add":
          c ? a && l(o.get("length")) : (l(o.get(Qt)), vn(e) && l(o.get(fr)));
          break;
        case "delete":
          c || (l(o.get(Qt)), vn(e) && l(o.get(fr)));
          break;
        case "set":
          vn(e) && l(o.get(Qt));
          break;
      }
  }
  Kr();
}
function mu(e, t) {
  const n = Zs.get(e);
  return n && n.get(t);
}
function pn(e) {
  const t = se(e);
  return t === e ? t : (Pe(t, "iterate", is), Xe(e) ? t : t.map(Ce));
}
function Ci(e) {
  return Pe(e = se(e), "iterate", is), e;
}
const yu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xi(this, Symbol.iterator, Ce);
  },
  concat(...e) {
    return pn(this).concat(
      ...e.map((t) => B(t) ? pn(t) : t)
    );
  },
  entries() {
    return Xi(this, "entries", (e) => (e[1] = Ce(e[1]), e));
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
    return Zi(this, "includes", e);
  },
  indexOf(...e) {
    return Zi(this, "indexOf", e);
  },
  join(e) {
    return pn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Zi(this, "lastIndexOf", e);
  },
  map(e, t) {
    return _t(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Un(this, "pop");
  },
  push(...e) {
    return Un(this, "push", e);
  },
  reduce(e, ...t) {
    return Bo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bo(this, "reduceRight", e, t);
  },
  shift() {
    return Un(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return _t(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Un(this, "splice", e);
  },
  toReversed() {
    return pn(this).toReversed();
  },
  toSorted(e) {
    return pn(this).toSorted(e);
  },
  toSpliced(...e) {
    return pn(this).toSpliced(...e);
  },
  unshift(...e) {
    return Un(this, "unshift", e);
  },
  values() {
    return Xi(this, "values", Ce);
  }
};
function Xi(e, t, n) {
  const s = Ci(e), i = s[t]();
  return s !== e && !Xe(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const _u = Array.prototype;
function _t(e, t, n, s, i, r) {
  const o = Ci(e), l = o !== e && !Xe(e), c = o[t];
  if (c !== _u[t]) {
    const u = c.apply(e, r);
    return l ? Ce(u) : u;
  }
  let a = n;
  o !== e && (l ? a = function(u, d) {
    return n.call(this, Ce(u), d, e);
  } : n.length > 2 && (a = function(u, d) {
    return n.call(this, u, d, e);
  }));
  const f = c.call(o, a, s);
  return l && i ? i(f) : f;
}
function Bo(e, t, n, s) {
  const i = Ci(e);
  let r = n;
  return i !== e && (Xe(e) ? n.length > 3 && (r = function(o, l, c) {
    return n.call(this, o, l, c, e);
  }) : r = function(o, l, c) {
    return n.call(this, o, Ce(l), c, e);
  }), i[t](r, ...s);
}
function Zi(e, t, n) {
  const s = se(e);
  Pe(s, "iterate", is);
  const i = s[t](...n);
  return (i === -1 || i === !1) && wi(n[0]) ? (n[0] = se(n[0]), s[t](...n)) : i;
}
function Un(e, t, n = []) {
  Nt(), jr();
  const s = se(e)[t].apply(e, n);
  return Kr(), xt(), s;
}
const bu = /* @__PURE__ */ ze("__proto__,__v_isRef,__isVue"), nc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function Su(e) {
  Ke(e) || (e = String(e));
  const t = se(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class sc {
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
      return s === (i ? r ? ac : cc : r ? lc : oc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = B(t);
    if (!i) {
      let c;
      if (o && (c = yu[n]))
        return c;
      if (n === "hasOwnProperty")
        return Su;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ee(t) ? t : s
    );
    return (Ke(n) ? nc.has(n) : bu(n)) || (i || Pe(t, "get", n), r) ? l : Ee(l) ? o && Hr(n) ? l : l.value : le(l) ? i ? qr(l) : Ni(l) : l;
  }
}
class ic extends sc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let r = t[n];
    if (!this._isShallow) {
      const c = wt(r);
      if (!Xe(s) && !wt(s) && (r = se(r), s = se(s)), !B(t) && Ee(r) && !Ee(s))
        return c ? !1 : (r.value = s, !0);
    }
    const o = B(t) && Hr(n) ? Number(n) < t.length : ie(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ee(t) ? t : i
    );
    return t === se(i) && (o ? De(s, r) && Et(t, "set", n, s) : Et(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = ie(t, n);
    t[n];
    const i = Reflect.deleteProperty(t, n);
    return i && s && Et(t, "delete", n, void 0), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ke(n) || !nc.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      B(t) ? "length" : Qt
    ), Reflect.ownKeys(t);
  }
}
class rc extends sc {
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
const vu = /* @__PURE__ */ new ic(), Eu = /* @__PURE__ */ new rc(), Tu = /* @__PURE__ */ new ic(!0), Cu = /* @__PURE__ */ new rc(!0), ur = (e) => e, ws = (e) => Reflect.getPrototypeOf(e);
function Au(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, r = se(i), o = vn(r), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, a = i[e](...s), f = n ? ur : t ? zs : Ce;
    return !t && Pe(
      r,
      "iterate",
      c ? fr : Qt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: d } = a.next();
        return d ? { value: u, done: d } : {
          value: l ? [f(u[0]), f(u[1])] : f(u),
          done: d
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Is(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Nu(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, o = se(r), l = se(i);
      e || (De(i, l) && Pe(o, "get", i), Pe(o, "get", l));
      const { has: c } = ws(o), a = t ? ur : e ? zs : Ce;
      if (c.call(o, i))
        return a(r.get(i));
      if (c.call(o, l))
        return a(r.get(l));
      r !== o && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Pe(se(i), "iterate", Qt), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, o = se(r), l = se(i);
      return e || (De(i, l) && Pe(o, "has", i), Pe(o, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const o = this, l = o.__v_raw, c = se(l), a = t ? ur : e ? zs : Ce;
      return !e && Pe(c, "iterate", Qt), l.forEach((f, u) => i.call(r, a(f), a(u), o));
    }
  };
  return te(
    n,
    e ? {
      add: Is("add"),
      set: Is("set"),
      delete: Is("delete"),
      clear: Is("clear")
    } : {
      add(i) {
        !t && !Xe(i) && !wt(i) && (i = se(i));
        const r = se(this);
        return ws(r).has.call(r, i) || (r.add(i), Et(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Xe(r) && !wt(r) && (r = se(r));
        const o = se(this), { has: l, get: c } = ws(o);
        let a = l.call(o, i);
        a || (i = se(i), a = l.call(o, i));
        const f = c.call(o, i);
        return o.set(i, r), a ? De(r, f) && Et(o, "set", i, r) : Et(o, "add", i, r), this;
      },
      delete(i) {
        const r = se(this), { has: o, get: l } = ws(r);
        let c = o.call(r, i);
        c || (i = se(i), c = o.call(r, i)), l && l.call(r, i);
        const a = r.delete(i);
        return c && Et(r, "delete", i, void 0), a;
      },
      clear() {
        const i = se(this), r = i.size !== 0, o = i.clear();
        return r && Et(
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
    n[i] = Au(i, e, t);
  }), n;
}
function Ai(e, t) {
  const n = Nu(e, t);
  return (s, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    ie(n, i) && i in s ? n : s,
    i,
    r
  );
}
const xu = {
  get: /* @__PURE__ */ Ai(!1, !1)
}, wu = {
  get: /* @__PURE__ */ Ai(!1, !0)
}, Iu = {
  get: /* @__PURE__ */ Ai(!0, !1)
}, Ou = {
  get: /* @__PURE__ */ Ai(!0, !0)
}, oc = /* @__PURE__ */ new WeakMap(), lc = /* @__PURE__ */ new WeakMap(), cc = /* @__PURE__ */ new WeakMap(), ac = /* @__PURE__ */ new WeakMap();
function Ru(e) {
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
function Pu(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ru(Hf(e));
}
function Ni(e) {
  return wt(e) ? e : xi(
    e,
    !1,
    vu,
    xu,
    oc
  );
}
function fc(e) {
  return xi(
    e,
    !1,
    Tu,
    wu,
    lc
  );
}
function qr(e) {
  return xi(
    e,
    !0,
    Eu,
    Iu,
    cc
  );
}
function ku(e) {
  return xi(
    e,
    !0,
    Cu,
    Ou,
    ac
  );
}
function xi(e, t, n, s, i) {
  if (!le(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Pu(e);
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
  return wt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function wt(e) {
  return !!(e && e.__v_isReadonly);
}
function Xe(e) {
  return !!(e && e.__v_isShallow);
}
function wi(e) {
  return e ? !!e.__v_raw : !1;
}
function se(e) {
  const t = e && e.__v_raw;
  return t ? se(t) : e;
}
function uc(e) {
  return !ie(e, "__v_skip") && Object.isExtensible(e) && cr(e, "__v_skip", !0), e;
}
const Ce = (e) => le(e) ? Ni(e) : e, zs = (e) => le(e) ? qr(e) : e;
function Ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function en(e) {
  return dc(e, !1);
}
function hc(e) {
  return dc(e, !0);
}
function dc(e, t) {
  return Ee(e) ? e : new Mu(e, t);
}
class Mu {
  constructor(t, n) {
    this.dep = new Ti(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : se(t), this._value = n ? t : Ce(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || Xe(t) || wt(t);
    t = s ? t : se(t), De(t, n) && (this._rawValue = t, this._value = s ? t : Ce(t), this.dep.trigger());
  }
}
function Lu(e) {
  e.dep && e.dep.trigger();
}
function Ii(e) {
  return Ee(e) ? e.value : e;
}
function Du(e) {
  return G(e) ? e() : Ii(e);
}
const Fu = {
  get: (e, t, n) => t === "__v_raw" ? e : Ii(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Ee(i) && !Ee(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Gr(e) {
  return Ht(e) ? e : new Proxy(e, Fu);
}
class Vu {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ti(), { get: s, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function pc(e) {
  return new Vu(e);
}
function $u(e) {
  const t = B(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = gc(e, n);
  return t;
}
class Bu {
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
    return mu(se(this._object), this._key);
  }
}
class Hu {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Uu(e, t, n) {
  return Ee(e) ? e : G(e) ? new Hu(e) : le(e) && arguments.length > 1 ? gc(e, t, n) : en(e);
}
function gc(e, t, n) {
  const s = e[t];
  return Ee(s) ? s : new Bu(e, t, n);
}
class ju {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ti(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ss - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return Xl(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ql(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Ku(e, t, n = !1) {
  let s, i;
  return G(e) ? s = e : (s = e.get, i = e.set), new ju(s, i, n);
}
const Wu = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, qu = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Os = {}, Qs = /* @__PURE__ */ new WeakMap();
let Lt;
function Gu() {
  return Lt;
}
function mc(e, t = !1, n = Lt) {
  if (n) {
    let s = Qs.get(n);
    s || Qs.set(n, s = []), s.push(e);
  }
}
function Ju(e, t, n = ee) {
  const { immediate: s, deep: i, once: r, scheduler: o, augmentJob: l, call: c } = n, a = (y) => i ? y : Xe(y) || i === !1 || i === 0 ? Tt(y, 1) : Tt(y);
  let f, u, d, p, b = !1, _ = !1;
  if (Ee(e) ? (u = () => e.value, b = Xe(e)) : Ht(e) ? (u = () => a(e), b = !0) : B(e) ? (_ = !0, b = e.some((y) => Ht(y) || Xe(y)), u = () => e.map((y) => {
    if (Ee(y))
      return y.value;
    if (Ht(y))
      return a(y);
    if (G(y))
      return c ? c(y, 2) : y();
  })) : G(e) ? t ? u = c ? () => c(e, 2) : e : u = () => {
    if (d) {
      Nt();
      try {
        d();
      } finally {
        xt();
      }
    }
    const y = Lt;
    Lt = f;
    try {
      return c ? c(e, 3, [p]) : e(p);
    } finally {
      Lt = y;
    }
  } : u = xe, t && i) {
    const y = u, v = i === !0 ? 1 / 0 : i;
    u = () => Tt(y(), v);
  }
  const M = Jl(), x = () => {
    f.stop(), M && M.active && $r(M.effects, f);
  };
  if (r && t) {
    const y = t;
    t = (...v) => {
      y(...v), x();
    };
  }
  let A = _ ? new Array(e.length).fill(Os) : Os;
  const g = (y) => {
    if (!(!(f.flags & 1) || !f.dirty && !y))
      if (t) {
        const v = f.run();
        if (i || b || (_ ? v.some((w, V) => De(w, A[V])) : De(v, A))) {
          d && d();
          const w = Lt;
          Lt = f;
          try {
            const V = [
              v,
              // pass undefined as the old value when it's changed for the first time
              A === Os ? void 0 : _ && A[0] === Os ? [] : A,
              p
            ];
            A = v, c ? c(t, 3, V) : (
              // @ts-expect-error
              t(...V)
            );
          } finally {
            Lt = w;
          }
        }
      } else
        f.run();
  };
  return l && l(g), f = new ns(u), f.scheduler = o ? () => o(g, !1) : g, p = (y) => mc(y, !1, f), d = f.onStop = () => {
    const y = Qs.get(f);
    if (y) {
      if (c)
        c(y, 4);
      else
        for (const v of y) v();
      Qs.delete(f);
    }
  }, t ? s ? g(!0) : A = f.run() : o ? o(g.bind(null, !0), !0) : f.run(), x.pause = f.pause.bind(f), x.resume = f.resume.bind(f), x.stop = x, x;
}
function Tt(e, t = 1 / 0, n) {
  if (t <= 0 || !le(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ee(e))
    Tt(e.value, t, n);
  else if (B(e))
    for (let s = 0; s < e.length; s++)
      Tt(e[s], t, n);
  else if (fn(e) || vn(e))
    e.forEach((s) => {
      Tt(s, t, n);
    });
  else if (bi(e)) {
    for (const s in e)
      Tt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Tt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const yc = [];
function Yu(e) {
  yc.push(e);
}
function Xu() {
  yc.pop();
}
function Zu(e, t) {
}
const zu = {
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
}, Qu = {
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
function $n(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    hn(i, t, n);
  }
}
function it(e, t, n, s) {
  if (G(e)) {
    const i = $n(e, t, n, s);
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
    const c = t.proxy, a = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let u = 0; u < f.length; u++)
          if (f[u](e, c, a) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Nt(), $n(r, null, 10, [
        e,
        c,
        a
      ]), xt();
      return;
    }
  }
  eh(e, n, i, s, o);
}
function eh(e, t, n, s = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Fe = [];
let pt = -1;
const An = [];
let Dt = null, yn = 0;
const _c = /* @__PURE__ */ Promise.resolve();
let ei = null;
function Oi(e) {
  const t = ei || _c;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function th(e) {
  let t = pt + 1, n = Fe.length;
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
    !(e.flags & 2) && t >= os(n) ? Fe.push(e) : Fe.splice(th(t), 0, e), e.flags |= 1, bc();
  }
}
function bc() {
  ei || (ei = _c.then(Sc));
}
function rs(e) {
  B(e) ? An.push(...e) : Dt && e.id === -1 ? Dt.splice(yn + 1, 0, e) : e.flags & 1 || (An.push(e), e.flags |= 1), bc();
}
function Ho(e, t, n = pt + 1) {
  for (; n < Fe.length; n++) {
    const s = Fe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Fe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ti(e) {
  if (An.length) {
    const t = [...new Set(An)].sort(
      (n, s) => os(n) - os(s)
    );
    if (An.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, yn = 0; yn < Dt.length; yn++) {
      const n = Dt[yn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Dt = null, yn = 0;
  }
}
const os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sc(e) {
  try {
    for (pt = 0; pt < Fe.length; pt++) {
      const t = Fe[pt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), $n(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; pt < Fe.length; pt++) {
      const t = Fe[pt];
      t && (t.flags &= -2);
    }
    pt = -1, Fe.length = 0, ti(), ei = null, (Fe.length || An.length) && Sc();
  }
}
let _n, Rs = [];
function vc(e, t) {
  var n, s;
  _n = e, _n ? (_n.enabled = !0, Rs.forEach(({ event: i, args: r }) => _n.emit(i, ...r)), Rs = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    vc(r, t);
  }), setTimeout(() => {
    _n || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Rs = []);
  }, 3e3)) : Rs = [];
}
let Ne = null, Ri = null;
function ls(e) {
  const t = Ne;
  return Ne = e, Ri = e && e.type.__scopeId || null, t;
}
function nh(e) {
  Ri = e;
}
function sh() {
  Ri = null;
}
const ih = (e) => Yr;
function Yr(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && br(-1);
    const r = ls(t);
    let o;
    try {
      o = e(...i);
    } finally {
      ls(r), s._d && br(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function rh(e, t) {
  if (Ne === null)
    return e;
  const n = vs(Ne), s = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, o, l, c = ee] = t[i];
    r && (G(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Tt(o), s.push({
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
    c && (Nt(), it(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), xt());
  }
}
const Ec = Symbol("_vte"), Tc = (e) => e.__isTeleport, Xn = (e) => e && (e.disabled || e.disabled === ""), Uo = (e) => e && (e.defer || e.defer === ""), jo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ko = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, hr = (e, t) => {
  const n = e && e.to;
  return Z(n) ? t ? t(n) : null : n;
}, Cc = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, i, r, o, l, c, a) {
    const {
      mc: f,
      pc: u,
      pbc: d,
      o: { insert: p, querySelector: b, createText: _, createComment: M }
    } = a, x = Xn(t.props);
    let { shapeFlag: A, children: g, dynamicChildren: y } = t;
    if (e == null) {
      const v = t.el = _(""), w = t.anchor = _("");
      p(v, n, s), p(w, n, s);
      const V = (S, C) => {
        A & 16 && (i && i.isCE && (i.ce._teleportTarget = S), f(
          g,
          S,
          C,
          i,
          r,
          o,
          l,
          c
        ));
      }, O = () => {
        const S = t.target = hr(t.props, b), C = Ac(S, t, _, p);
        S && (o !== "svg" && jo(S) ? o = "svg" : o !== "mathml" && Ko(S) && (o = "mathml"), x || (V(S, C), Hs(t, !1)));
      };
      x && (V(n, w), Hs(t, !0)), Uo(t.props) ? (t.el.__isMounted = !1, Se(() => {
        O(), delete t.el.__isMounted;
      }, r)) : O();
    } else {
      if (Uo(t.props) && e.el.__isMounted === !1) {
        Se(() => {
          Cc.process(
            e,
            t,
            n,
            s,
            i,
            r,
            o,
            l,
            c,
            a
          );
        }, r);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const v = t.anchor = e.anchor, w = t.target = e.target, V = t.targetAnchor = e.targetAnchor, O = Xn(e.props), S = O ? n : w, C = O ? v : V;
      if (o === "svg" || jo(w) ? o = "svg" : (o === "mathml" || Ko(w)) && (o = "mathml"), y ? (d(
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
      ), x)
        O ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Ps(
          t,
          n,
          v,
          a,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const k = t.target = hr(
          t.props,
          b
        );
        k && Ps(
          t,
          k,
          null,
          a,
          0
        );
      } else O && Ps(
        t,
        w,
        V,
        a,
        1
      );
      Hs(t, x);
    }
  },
  remove(e, t, n, { um: s, o: { remove: i } }, r) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: a,
      targetAnchor: f,
      target: u,
      props: d
    } = e;
    if (u && (i(a), i(f)), r && i(c), o & 16) {
      const p = r || !Xn(d);
      for (let b = 0; b < l.length; b++) {
        const _ = l[b];
        s(
          _,
          t,
          n,
          p,
          !!_.dynamicChildren
        );
      }
    }
  },
  move: Ps,
  hydrate: oh
};
function Ps(e, t, n, { o: { insert: s }, m: i }, r = 2) {
  r === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: a, props: f } = e, u = r === 2;
  if (u && s(o, t, n), (!u || Xn(f)) && c & 16)
    for (let d = 0; d < a.length; d++)
      i(
        a[d],
        t,
        n,
        2
      );
  u && s(l, t, n);
}
function oh(e, t, n, s, i, r, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: a, createText: f }
}, u) {
  const d = t.target = hr(
    t.props,
    c
  );
  if (d) {
    const p = Xn(t.props), b = d._lpa || d.firstChild;
    if (t.shapeFlag & 16)
      if (p)
        t.anchor = u(
          o(e),
          t,
          l(e),
          n,
          s,
          i,
          r
        ), t.targetStart = b, t.targetAnchor = b && o(b);
      else {
        t.anchor = o(e);
        let _ = b;
        for (; _; ) {
          if (_ && _.nodeType === 8) {
            if (_.data === "teleport start anchor")
              t.targetStart = _;
            else if (_.data === "teleport anchor") {
              t.targetAnchor = _, d._lpa = t.targetAnchor && o(t.targetAnchor);
              break;
            }
          }
          _ = o(_);
        }
        t.targetAnchor || Ac(d, t, f, a), u(
          b && o(b),
          t,
          d,
          n,
          s,
          i,
          r
        );
      }
    Hs(t, p);
  }
  return t.anchor && o(t.anchor);
}
const lh = Cc;
function Hs(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, i;
    for (t ? (s = e.el, i = e.anchor) : (s = e.targetStart, i = e.targetAnchor); s && s !== i; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ac(e, t, n, s) {
  const i = t.targetStart = n(""), r = t.targetAnchor = n("");
  return i[Ec] = r, e && (s(i, e), s(r, e)), r;
}
const Ft = Symbol("_leaveCb"), ks = Symbol("_enterCb");
function Xr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return bs(() => {
    e.isMounted = !0;
  }), Di(() => {
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
}, Nc = (e) => {
  const t = e.subTree;
  return t.component ? Nc(t.component) : t;
}, ch = {
  name: "BaseTransition",
  props: Zr,
  setup(e, { slots: t }) {
    const n = We(), s = Xr();
    return () => {
      const i = t.default && Pi(t.default(), !0);
      if (!i || !i.length)
        return;
      const r = xc(i), o = se(e), { mode: l } = o;
      if (s.isLeaving)
        return zi(r);
      const c = Wo(r);
      if (!c)
        return zi(r);
      let a = In(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (u) => a = u
      );
      c.type !== _e && It(c, a);
      let f = n.subTree && Wo(n.subTree);
      if (f && f.type !== _e && !lt(c, f) && Nc(n).type !== _e) {
        let u = In(
          f,
          o,
          s,
          n
        );
        if (It(f, u), l === "out-in" && c.type !== _e)
          return s.isLeaving = !0, u.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete u.afterLeave, f = void 0;
          }, zi(r);
        l === "in-out" && c.type !== _e ? u.delayLeave = (d, p, b) => {
          const _ = Ic(
            s,
            f
          );
          _[String(f.key)] = f, d[Ft] = () => {
            p(), d[Ft] = void 0, delete a.delayedLeave, f = void 0;
          }, a.delayedLeave = () => {
            b(), delete a.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return r;
    };
  }
};
function xc(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== _e) {
        t = n;
        break;
      }
  }
  return t;
}
const wc = ch;
function Ic(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function In(e, t, n, s, i) {
  const {
    appear: r,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: a,
    onAfterEnter: f,
    onEnterCancelled: u,
    onBeforeLeave: d,
    onLeave: p,
    onAfterLeave: b,
    onLeaveCancelled: _,
    onBeforeAppear: M,
    onAppear: x,
    onAfterAppear: A,
    onAppearCancelled: g
  } = t, y = String(e.key), v = Ic(n, e), w = (S, C) => {
    S && it(
      S,
      s,
      9,
      C
    );
  }, V = (S, C) => {
    const k = C[1];
    w(S, C), B(S) ? S.every((E) => E.length <= 1) && k() : S.length <= 1 && k();
  }, O = {
    mode: o,
    persisted: l,
    beforeEnter(S) {
      let C = c;
      if (!n.isMounted)
        if (r)
          C = M || c;
        else
          return;
      S[Ft] && S[Ft](
        !0
        /* cancelled */
      );
      const k = v[y];
      k && lt(e, k) && k.el[Ft] && k.el[Ft](), w(C, [S]);
    },
    enter(S) {
      let C = a, k = f, E = u;
      if (!n.isMounted)
        if (r)
          C = x || a, k = A || f, E = g || u;
        else
          return;
      let D = !1;
      const W = S[ks] = (J) => {
        D || (D = !0, J ? w(E, [S]) : w(k, [S]), O.delayedLeave && O.delayedLeave(), S[ks] = void 0);
      };
      C ? V(C, [S, W]) : W();
    },
    leave(S, C) {
      const k = String(e.key);
      if (S[ks] && S[ks](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return C();
      w(d, [S]);
      let E = !1;
      const D = S[Ft] = (W) => {
        E || (E = !0, C(), W ? w(_, [S]) : w(b, [S]), S[Ft] = void 0, v[k] === e && delete v[k]);
      };
      v[k] = e, p ? V(p, [S, D]) : D();
    },
    clone(S) {
      const C = In(
        S,
        t,
        n,
        s,
        i
      );
      return i && i(C), C;
    }
  };
  return O;
}
function zi(e) {
  if (_s(e))
    return e = yt(e), e.children = null, e;
}
function Wo(e) {
  if (!_s(e))
    return Tc(e.type) && e.children ? xc(e.children) : e;
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
function It(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, It(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pi(e, t = !1, n) {
  let s = [], i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === be ? (o.patchFlag & 128 && i++, s = s.concat(
      Pi(o.children, t, l)
    )) : (t || o.type !== _e) && s.push(l != null ? yt(o, { key: l }) : o);
  }
  if (i > 1)
    for (let r = 0; r < s.length; r++)
      s[r].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ki(e, t) {
  return G(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    te({ name: e.name }, t, { setup: e })
  ) : e;
}
function ah() {
  const e = We();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function zr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function fh(e) {
  const t = We(), n = hc(null);
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
function Nn(e, t, n, s, i = !1) {
  if (B(e)) {
    e.forEach(
      (b, _) => Nn(
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
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Nn(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? vs(s.component) : s.el, o = i ? null : r, { i: l, r: c } = e, a = t && t.r, f = l.refs === ee ? l.refs = {} : l.refs, u = l.setupState, d = se(u), p = u === ee ? () => !1 : (b) => ie(d, b);
  if (a != null && a !== c && (Z(a) ? (f[a] = null, p(a) && (u[a] = null)) : Ee(a) && (a.value = null)), G(c))
    $n(c, l, 12, [o, f]);
  else {
    const b = Z(c), _ = Ee(c);
    if (b || _) {
      const M = () => {
        if (e.f) {
          const x = b ? p(c) ? u[c] : f[c] : c.value;
          i ? B(x) && $r(x, r) : B(x) ? x.includes(r) || x.push(r) : b ? (f[c] = [r], p(c) && (u[c] = f[c])) : (c.value = [r], e.k && (f[e.k] = c.value));
        } else b ? (f[c] = o, p(c) && (u[c] = o)) : _ && (c.value = o, e.k && (f[e.k] = o));
      };
      o ? (M.id = -1, Se(M, n)) : M();
    }
  }
}
let qo = !1;
const gn = () => {
  qo || (console.error("Hydration completed but contains mismatches."), qo = !0);
}, uh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", hh = (e) => e.namespaceURI.includes("MathML"), Ms = (e) => {
  if (e.nodeType === 1) {
    if (uh(e)) return "svg";
    if (hh(e)) return "mathml";
  }
}, bn = (e) => e.nodeType === 8;
function dh(e) {
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
      createComment: a
    }
  } = e, f = (g, y) => {
    if (!y.hasChildNodes()) {
      n(null, g, y), ti(), y._vnode = g;
      return;
    }
    u(y.firstChild, g, null, null, null), ti(), y._vnode = g;
  }, u = (g, y, v, w, V, O = !1) => {
    O = O || !!y.dynamicChildren;
    const S = bn(g) && g.data === "[", C = () => _(
      g,
      y,
      v,
      w,
      V,
      S
    ), { type: k, ref: E, shapeFlag: D, patchFlag: W } = y;
    let J = g.nodeType;
    y.el = g, W === -2 && (O = !1, y.dynamicChildren = null);
    let U = null;
    switch (k) {
      case jt:
        J !== 3 ? y.children === "" ? (c(y.el = i(""), o(g), g), U = g) : U = C() : (g.data !== y.children && (gn(), g.data = y.children), U = r(g));
        break;
      case _e:
        A(g) ? (U = r(g), x(
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
          O
        ) : U = C();
        break;
      default:
        if (D & 1)
          (J !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) && !A(g) ? U = C() : U = d(
            g,
            y,
            v,
            w,
            V,
            O
          );
        else if (D & 6) {
          y.slotScopeIds = V;
          const Y = o(g);
          if (S ? U = M(g) : bn(g) && g.data === "teleport start" ? U = M(g, g.data, "teleport end") : U = r(g), t(
            y,
            Y,
            null,
            v,
            w,
            Ms(Y),
            O
          ), Ut(y) && !y.type.__asyncResolved) {
            let j;
            S ? (j = fe(be), j.anchor = U ? U.previousSibling : Y.lastChild) : j = g.nodeType === 3 ? lo("") : fe("div"), j.el = g, y.component.subTree = j;
          }
        } else D & 64 ? J !== 8 ? U = C() : U = y.type.hydrate(
          g,
          y,
          v,
          w,
          V,
          O,
          e,
          p
        ) : D & 128 && (U = y.type.hydrate(
          g,
          y,
          v,
          w,
          Ms(o(g)),
          V,
          O,
          e,
          u
        ));
    }
    return E != null && Nn(E, null, w, y), U;
  }, d = (g, y, v, w, V, O) => {
    O = O || !!y.dynamicChildren;
    const { type: S, props: C, patchFlag: k, shapeFlag: E, dirs: D, transition: W } = y, J = S === "input" || S === "option";
    if (J || k !== -1) {
      D && gt(y, null, v, "created");
      let U = !1;
      if (A(g)) {
        U = sa(
          null,
          // no need check parentSuspense in hydration
          W
        ) && v && v.vnode.props && v.vnode.props.appear;
        const j = g.content.firstChild;
        if (U) {
          const pe = j.getAttribute("class");
          pe && (j.$cls = pe), W.beforeEnter(j);
        }
        x(j, g, v), y.el = g = j;
      }
      if (E & 16 && // skip if element has innerHTML / textContent
      !(C && (C.innerHTML || C.textContent))) {
        let j = p(
          g.firstChild,
          y,
          g,
          v,
          w,
          V,
          O
        );
        for (; j; ) {
          Ls(
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
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (j = j.slice(1)), g.textContent !== j && (Ls(
          g,
          0
          /* TEXT */
        ) || gn(), g.textContent = y.children);
      }
      if (C) {
        if (J || !O || k & 48) {
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
        else if (k & 4 && Ht(C.style))
          for (const j in C.style) C.style[j];
      }
      let Y;
      (Y = C && C.onVnodeBeforeMount) && Be(Y, v, y), D && gt(y, null, v, "beforeMount"), ((Y = C && C.onVnodeMounted) || D || U) && ha(() => {
        Y && Be(Y, v, y), U && W.enter(g), D && gt(y, null, v, "mounted");
      }, w);
    }
    return g.nextSibling;
  }, p = (g, y, v, w, V, O, S) => {
    S = S || !!y.dynamicChildren;
    const C = y.children, k = C.length;
    for (let E = 0; E < k; E++) {
      const D = S ? C[E] : C[E] = He(C[E]), W = D.type === jt;
      g ? (W && !S && E + 1 < k && He(C[E + 1]).type === jt && (c(
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
        O,
        S
      )) : W && !D.children ? c(D.el = i(""), v) : (Ls(
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
        Ms(v),
        O
      ));
    }
    return g;
  }, b = (g, y, v, w, V, O) => {
    const { slotScopeIds: S } = y;
    S && (V = V ? V.concat(S) : S);
    const C = o(g), k = p(
      r(g),
      y,
      C,
      v,
      w,
      V,
      O
    );
    return k && bn(k) && k.data === "]" ? r(y.anchor = k) : (gn(), c(y.anchor = a("]"), C, k), k);
  }, _ = (g, y, v, w, V, O) => {
    if (Ls(
      g.parentElement,
      1
      /* CHILDREN */
    ) || gn(), y.el = null, O) {
      const k = M(g);
      for (; ; ) {
        const E = r(g);
        if (E && E !== k)
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
      Ms(C),
      V
    ), v && (v.vnode.el = y.el, $i(v, y.el)), S;
  }, M = (g, y = "[", v = "]") => {
    let w = 0;
    for (; g; )
      if (g = r(g), g && bn(g) && (g.data === y && w++, g.data === v)) {
        if (w === 0)
          return r(g);
        w--;
      }
    return g;
  }, x = (g, y, v) => {
    const w = y.parentNode;
    w && w.replaceChild(g, y);
    let V = v;
    for (; V; )
      V.vnode.el === y && (V.vnode.el = V.subTree.el = g), V = V.parent;
  }, A = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
  return [f, u];
}
const Go = "data-allow-mismatch", ph = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function Ls(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Go); )
      e = e.parentElement;
  const n = e && e.getAttribute(Go);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(ph[t]);
  }
}
const gh = vi().requestIdleCallback || ((e) => setTimeout(e, 1)), mh = vi().cancelIdleCallback || ((e) => clearTimeout(e)), yh = (e = 1e4) => (t) => {
  const n = gh(t, { timeout: e });
  return () => mh(n);
};
function _h(e) {
  const { top: t, left: n, bottom: s, right: i } = e.getBoundingClientRect(), { innerHeight: r, innerWidth: o } = window;
  return (t > 0 && t < r || s > 0 && s < r) && (n > 0 && n < o || i > 0 && i < o);
}
const bh = (e) => (t, n) => {
  const s = new IntersectionObserver((i) => {
    for (const r of i)
      if (r.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((i) => {
    if (i instanceof Element) {
      if (_h(i))
        return t(), s.disconnect(), !1;
      s.observe(i);
    }
  }), () => s.disconnect();
}, Sh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, vh = (e = []) => (t, n) => {
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
function Eh(e, t) {
  if (bn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (bn(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const Ut = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Th(e) {
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
  let a = null, f, u = 0;
  const d = () => (u++, a = null, p()), p = () => {
    let b;
    return a || (b = a = t().catch((_) => {
      if (_ = _ instanceof Error ? _ : new Error(String(_)), c)
        return new Promise((M, x) => {
          c(_, () => M(d()), () => x(_), u + 1);
        });
      throw _;
    }).then((_) => b !== a && a ? a : (_ && (_.__esModule || _[Symbol.toStringTag] === "Module") && (_ = _.default), f = _, _)));
  };
  return /* @__PURE__ */ ki({
    name: "AsyncComponentWrapper",
    __asyncLoader: p,
    __asyncHydrate(b, _, M) {
      let x = !1;
      (_.bu || (_.bu = [])).push(() => x = !0);
      const A = () => {
        x || M();
      }, g = r ? () => {
        const y = r(
          A,
          (v) => Eh(b, v)
        );
        y && (_.bum || (_.bum = [])).push(y);
      } : A;
      f ? g() : p().then(() => !_.isUnmounted && g());
    },
    get __asyncResolved() {
      return f;
    },
    setup() {
      const b = Ae;
      if (zr(b), f)
        return () => Qi(f, b);
      const _ = (g) => {
        a = null, hn(
          g,
          b,
          13,
          !s
        );
      };
      if (l && b.suspense || On)
        return p().then((g) => () => Qi(g, b)).catch((g) => (_(g), () => s ? fe(s, {
          error: g
        }) : null));
      const M = en(!1), x = en(), A = en(!!i);
      return i && setTimeout(() => {
        A.value = !1;
      }, i), o != null && setTimeout(() => {
        if (!M.value && !x.value) {
          const g = new Error(
            `Async component timed out after ${o}ms.`
          );
          _(g), x.value = g;
        }
      }, o), p().then(() => {
        M.value = !0, b.parent && _s(b.parent.vnode) && b.parent.update();
      }).catch((g) => {
        _(g), x.value = g;
      }), () => {
        if (M.value && f)
          return Qi(f, b);
        if (x.value && s)
          return fe(s, {
            error: x.value
          });
        if (n && !A.value)
          return fe(n);
      };
    }
  });
}
function Qi(e, t) {
  const { ref: n, props: s, children: i, ce: r } = t.vnode, o = fe(e, s, i);
  return o.ref = n, o.ce = r, delete t.vnode.ce, o;
}
const _s = (e) => e.type.__isKeepAlive, Ch = {
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
        m: a,
        um: f,
        o: { createElement: u }
      }
    } = s, d = u("div");
    s.activate = (A, g, y, v, w) => {
      const V = A.component;
      a(A, g, y, 0, l), c(
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
        V.isDeactivated = !1, V.a && Tn(V.a);
        const O = A.props && A.props.onVnodeMounted;
        O && Be(O, V.parent, A);
      }, l);
    }, s.deactivate = (A) => {
      const g = A.component;
      si(g.m), si(g.a), a(A, d, null, 1, l), Se(() => {
        g.da && Tn(g.da);
        const y = A.props && A.props.onVnodeUnmounted;
        y && Be(y, g.parent, A), g.isDeactivated = !0;
      }, l);
    };
    function p(A) {
      er(A), f(A, n, l, !0);
    }
    function b(A) {
      i.forEach((g, y) => {
        const v = Cr(g.type);
        v && !A(v) && _(y);
      });
    }
    function _(A) {
      const g = i.get(A);
      g && (!o || !lt(g, o)) ? p(g) : o && er(o), i.delete(A), r.delete(A);
    }
    xn(
      () => [e.include, e.exclude],
      ([A, g]) => {
        A && b((y) => qn(A, y)), g && b((y) => !qn(g, y));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let M = null;
    const x = () => {
      M != null && (ii(n.subTree.type) ? Se(() => {
        i.set(M, Ds(n.subTree));
      }, n.subTree.suspense) : i.set(M, Ds(n.subTree)));
    };
    return bs(x), Li(x), Di(() => {
      i.forEach((A) => {
        const { subTree: g, suspense: y } = n, v = Ds(g);
        if (A.type === v.type && A.key === v.key) {
          er(v);
          const w = v.component.da;
          w && Se(w, y);
          return;
        }
        p(A);
      });
    }), () => {
      if (M = null, !t.default)
        return o = null;
      const A = t.default(), g = A[0];
      if (A.length > 1)
        return o = null, A;
      if (!Ot(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128))
        return o = null, g;
      let y = Ds(g);
      if (y.type === _e)
        return o = null, y;
      const v = y.type, w = Cr(
        Ut(y) ? y.type.__asyncResolved || {} : v
      ), { include: V, exclude: O, max: S } = e;
      if (V && (!w || !qn(V, w)) || O && w && qn(O, w))
        return y.shapeFlag &= -257, o = y, g;
      const C = y.key == null ? v : y.key, k = i.get(C);
      return y.el && (y = yt(y), g.shapeFlag & 128 && (g.ssContent = y)), M = C, k ? (y.el = k.el, y.component = k.component, y.transition && It(y, y.transition), y.shapeFlag |= 512, r.delete(C), r.add(C)) : (r.add(C), S && r.size > parseInt(S, 10) && _(r.values().next().value)), y.shapeFlag |= 256, o = y, ii(g.type) ? g : y;
    };
  }
}, Ah = Ch;
function qn(e, t) {
  return B(e) ? e.some((n) => qn(n, t)) : Z(e) ? e.split(",").includes(t) : Bf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Oc(e, t) {
  Pc(e, "a", t);
}
function Rc(e, t) {
  Pc(e, "da", t);
}
function Pc(e, t, n = Ae) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Mi(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      _s(i.parent.vnode) && Nh(s, t, n, i), i = i.parent;
  }
}
function Nh(e, t, n, s) {
  const i = Mi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Fi(() => {
    $r(s[t], i);
  }, n);
}
function er(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Ds(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Mi(e, t, n = Ae, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...o) => {
      Nt();
      const l = ln(n), c = it(t, n, e, o);
      return l(), xt(), c;
    });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const Rt = (e) => (t, n = Ae) => {
  (!On || e === "sp") && Mi(e, (...s) => t(...s), n);
}, kc = Rt("bm"), bs = Rt("m"), Qr = Rt(
  "bu"
), Li = Rt("u"), Di = Rt(
  "bum"
), Fi = Rt("um"), Mc = Rt(
  "sp"
), Lc = Rt("rtg"), Dc = Rt("rtc");
function Fc(e, t = Ae) {
  Mi("ec", e, t);
}
const eo = "components", xh = "directives";
function wh(e, t) {
  return to(eo, e, !0, t) || e;
}
const Vc = Symbol.for("v-ndc");
function $c(e) {
  return Z(e) ? to(eo, e, !1) || e : e || Vc;
}
function Ih(e) {
  return to(xh, e);
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
      if (l && (l === t || l === ue(t) || l === un(ue(t))))
        return r;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jo(i[e] || r[e], t) || // global registration
      Jo(i.appContext[e], t)
    );
    return !o && s ? r : o;
  }
}
function Jo(e, t) {
  return e && (e[t] || e[ue(t)] || e[un(ue(t))]);
}
function Bc(e, t, n, s) {
  let i;
  const r = n && n[s], o = B(e);
  if (o || Z(e)) {
    const l = o && Ht(e);
    let c = !1, a = !1;
    l && (c = !Xe(e), a = wt(e), e = Ci(e)), i = new Array(e.length);
    for (let f = 0, u = e.length; f < u; f++)
      i[f] = t(
        c ? a ? zs(Ce(e[f])) : Ce(e[f]) : e[f],
        f,
        void 0,
        r && r[f]
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
      for (let c = 0, a = l.length; c < a; c++) {
        const f = l[c];
        i[c] = t(e[f], f, c, r && r[c]);
      }
    }
  else
    i = [];
  return n && (n[s] = i), i;
}
function Oh(e, t) {
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
function Hc(e, t, n = {}, s, i) {
  if (Ne.ce || Ne.parent && Ut(Ne.parent) && Ne.parent.ce)
    return t !== "default" && (n.name = t), Ze(), fs(
      be,
      null,
      [fe("slot", n, s && s())],
      64
    );
  let r = e[t];
  r && r._c && (r._d = !1), Ze();
  const o = r && no(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  o && o.key, c = fs(
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
  return e.some((t) => Ot(t) ? !(t.type === _e || t.type === be && !no(t.children)) : !0) ? e : null;
}
function Rh(e, t) {
  const n = {};
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : En(s)] = e[s];
  return n;
}
const dr = (e) => e ? ba(e) ? vs(e) : dr(e.parent) : null, Zn = (
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
    $nextTick: (e) => e.n || (e.n = Oi.bind(e.proxy)),
    $watch: (e) => ad.bind(e)
  })
), tr = (e, t) => e !== ee && !e.__isScriptSetup && ie(e, t), pr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: r, accessCache: o, type: l, appContext: c } = e;
    let a;
    if (t[0] !== "$") {
      const p = o[t];
      if (p !== void 0)
        switch (p) {
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
        if (tr(s, t))
          return o[t] = 1, s[t];
        if (i !== ee && ie(i, t))
          return o[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (a = e.propsOptions[0]) && ie(a, t)
        )
          return o[t] = 3, r[t];
        if (n !== ee && ie(n, t))
          return o[t] = 4, n[t];
        gr && (o[t] = 0);
      }
    }
    const f = Zn[t];
    let u, d;
    if (f)
      return t === "$attrs" && Pe(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && ie(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      d = c.config.globalProperties, ie(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: r } = e;
    return tr(i, t) ? (i[t] = n, !0) : s !== ee && ie(s, t) ? (s[t] = n, !0) : ie(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: r }
  }, o) {
    let l;
    return !!n[o] || e !== ee && ie(e, o) || tr(t, o) || (l = r[0]) && ie(l, o) || ie(s, o) || ie(Zn, o) || ie(i.config.globalProperties, o);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ie(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
}, Ph = /* @__PURE__ */ te({}, pr, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return pr.get(e, t, e);
  },
  has(e, t) {
    return t[0] !== "_" && !Gf(t);
  }
});
function kh() {
  return null;
}
function Mh() {
  return null;
}
function Lh(e) {
}
function Dh(e) {
}
function Fh() {
  return null;
}
function Vh() {
}
function $h(e, t) {
  return null;
}
function Bh() {
  return Uc().slots;
}
function Hh() {
  return Uc().attrs;
}
function Uc(e) {
  const t = We();
  return t.setupContext || (t.setupContext = Ta(t));
}
function cs(e) {
  return B(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Uh(e, t) {
  const n = cs(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let i = n[s];
    i ? B(i) || G(i) ? i = n[s] = { type: i, default: t[s] } : i.default = t[s] : i === null && (i = n[s] = { default: t[s] }), i && t[`__skip_${s}`] && (i.skipFactory = !0);
  }
  return n;
}
function jh(e, t) {
  return !e || !t ? e || t : B(e) && B(t) ? e.concat(t) : te({}, cs(e), cs(t));
}
function Kh(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function Wh(e) {
  const t = We();
  let n = e();
  return vr(), Br(n) && (n = n.catch((s) => {
    throw ln(t), s;
  })), [n, () => ln(t)];
}
let gr = !0;
function qh(e) {
  const t = so(e), n = e.proxy, s = e.ctx;
  gr = !1, t.beforeCreate && Yo(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: o,
    watch: l,
    provide: c,
    inject: a,
    // lifecycle
    created: f,
    beforeMount: u,
    mounted: d,
    beforeUpdate: p,
    updated: b,
    activated: _,
    deactivated: M,
    beforeDestroy: x,
    beforeUnmount: A,
    destroyed: g,
    unmounted: y,
    render: v,
    renderTracked: w,
    renderTriggered: V,
    errorCaptured: O,
    serverPrefetch: S,
    // public API
    expose: C,
    inheritAttrs: k,
    // assets
    components: E,
    directives: D,
    filters: W
  } = t;
  if (a && Gh(a, s, null), o)
    for (const Y in o) {
      const j = o[Y];
      G(j) && (s[Y] = j.bind(n));
    }
  if (i) {
    const Y = i.call(n, n);
    le(Y) && (e.data = Ni(Y));
  }
  if (gr = !0, r)
    for (const Y in r) {
      const j = r[Y], pe = G(j) ? j.bind(n, n) : G(j.get) ? j.get.bind(n, n) : xe, ft = !G(j) && G(j.set) ? j.set.bind(n) : xe, rt = Ca({
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
      jc(l[Y], s, n, Y);
  if (c) {
    const Y = G(c) ? c.call(n) : c;
    Reflect.ownKeys(Y).forEach((j) => {
      Wc(j, Y[j]);
    });
  }
  f && Yo(f, e, "c");
  function U(Y, j) {
    B(j) ? j.forEach((pe) => Y(pe.bind(n))) : j && Y(j.bind(n));
  }
  if (U(kc, u), U(bs, d), U(Qr, p), U(Li, b), U(Oc, _), U(Rc, M), U(Fc, O), U(Dc, w), U(Lc, V), U(Di, A), U(Fi, y), U(Mc, S), B(C))
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
  v && e.render === xe && (e.render = v), k != null && (e.inheritAttrs = k), E && (e.components = E), D && (e.directives = D), S && zr(e);
}
function Gh(e, t, n = xe) {
  B(e) && (e = mr(e));
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
function Yo(e, t, n) {
  it(
    B(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function jc(e, t, n, s) {
  let i = s.includes(".") ? ca(n, s) : () => n[s];
  if (Z(e)) {
    const r = t[e];
    G(r) && xn(i, r);
  } else if (G(e))
    xn(i, e.bind(n));
  else if (le(e))
    if (B(e))
      e.forEach((r) => jc(r, t, n, s));
    else {
      const r = G(e.handler) ? e.handler.bind(n) : t[e.handler];
      G(r) && xn(i, r, e);
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
    (a) => ni(c, a, o, !0)
  ), ni(c, t, o)), le(t) && r.set(t, c), c;
}
function ni(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && ni(e, r, n, !0), i && i.forEach(
    (o) => ni(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = Jh[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Jh = {
  data: Xo,
  props: Zo,
  emits: Zo,
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
  watch: Xh,
  // provide / inject
  provide: Xo,
  inject: Yh
};
function Xo(e, t) {
  return t ? e ? function() {
    return te(
      G(e) ? e.call(this, this) : e,
      G(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Yh(e, t) {
  return Gn(mr(e), mr(t));
}
function mr(e) {
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
function Zo(e, t) {
  return e ? B(e) && B(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : te(
    /* @__PURE__ */ Object.create(null),
    cs(e),
    cs(t ?? {})
  ) : t;
}
function Xh(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = te(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Le(e[s], t[s]);
  return n;
}
function Kc() {
  return {
    app: null,
    config: {
      isNativeTag: Wn,
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
let Zh = 0;
function zh(e, t) {
  return function(s, i = null) {
    G(s) || (s = te({}, s)), i != null && !le(i) && (i = null);
    const r = Kc(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const a = r.app = {
      _uid: Zh++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: xa,
      get config() {
        return r.config;
      },
      set config(f) {
      },
      use(f, ...u) {
        return o.has(f) || (f && G(f.install) ? (o.add(f), f.install(a, ...u)) : G(f) && (o.add(f), f(a, ...u))), a;
      },
      mixin(f) {
        return r.mixins.includes(f) || r.mixins.push(f), a;
      },
      component(f, u) {
        return u ? (r.components[f] = u, a) : r.components[f];
      },
      directive(f, u) {
        return u ? (r.directives[f] = u, a) : r.directives[f];
      },
      mount(f, u, d) {
        if (!c) {
          const p = a._ceVNode || fe(s, i);
          return p.appContext = r, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(p, f) : e(p, f, d), c = !0, a._container = f, f.__vue_app__ = a, vs(p.component);
        }
      },
      onUnmount(f) {
        l.push(f);
      },
      unmount() {
        c && (it(
          l,
          a._instance,
          16
        ), e(null, a._container), delete a._container.__vue_app__);
      },
      provide(f, u) {
        return r.provides[f] = u, a;
      },
      runWithContext(f) {
        const u = tn;
        tn = a;
        try {
          return f();
        } finally {
          tn = u;
        }
      }
    };
    return a;
  };
}
let tn = null;
function Wc(e, t) {
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
function Qh() {
  return !!(We() || tn);
}
const qc = {}, Gc = () => Object.create(qc), Jc = (e) => Object.getPrototypeOf(e) === qc;
function ed(e, t, n, s = !1) {
  const i = {}, r = Gc();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yc(e, t, i, r);
  for (const o in e.propsOptions[0])
    o in i || (i[o] = void 0);
  n ? e.props = s ? i : fc(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function td(e, t, n, s) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: o }
  } = e, l = se(i), [c] = e.propsOptions;
  let a = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let d = f[u];
        if (Vi(e.emitsOptions, d))
          continue;
        const p = t[d];
        if (c)
          if (ie(r, d))
            p !== r[d] && (r[d] = p, a = !0);
          else {
            const b = ue(d);
            i[b] = yr(
              c,
              l,
              b,
              p,
              e,
              !1
            );
          }
        else
          p !== r[d] && (r[d] = p, a = !0);
      }
    }
  } else {
    Yc(e, t, i, r) && (a = !0);
    let f;
    for (const u in l)
      (!t || // for camelCase
      !ie(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = Ue(u)) === u || !ie(t, f))) && (c ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[f] !== void 0) && (i[u] = yr(
        c,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (r !== l)
      for (const u in r)
        (!t || !ie(t, u)) && (delete r[u], a = !0);
  }
  a && Et(e.attrs, "set", "");
}
function Yc(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Bt(c))
        continue;
      const a = t[c];
      let f;
      i && ie(i, f = ue(c)) ? !r || !r.includes(f) ? n[f] = a : (l || (l = {}))[f] = a : Vi(e.emitsOptions, c) || (!(c in s) || a !== s[c]) && (s[c] = a, o = !0);
    }
  if (r) {
    const c = se(n), a = l || ee;
    for (let f = 0; f < r.length; f++) {
      const u = r[f];
      n[u] = yr(
        i,
        c,
        u,
        a[u],
        e,
        !ie(a, u)
      );
    }
  }
  return o;
}
function yr(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const l = ie(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && G(c)) {
        const { propsDefaults: a } = i;
        if (n in a)
          s = a[n];
        else {
          const f = ln(i);
          s = a[n] = c.call(
            null,
            t
          ), f();
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
const nd = /* @__PURE__ */ new WeakMap();
function Xc(e, t, n = !1) {
  const s = n ? nd : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const r = e.props, o = {}, l = [];
  let c = !1;
  if (!G(e)) {
    const f = (u) => {
      c = !0;
      const [d, p] = Xc(u, t, !0);
      te(o, d), p && l.push(...p);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!r && !c)
    return le(e) && s.set(e, Sn), Sn;
  if (B(r))
    for (let f = 0; f < r.length; f++) {
      const u = ue(r[f]);
      zo(u) && (o[u] = ee);
    }
  else if (r)
    for (const f in r) {
      const u = ue(f);
      if (zo(u)) {
        const d = r[f], p = o[u] = B(d) || G(d) ? { type: d } : te({}, d), b = p.type;
        let _ = !1, M = !0;
        if (B(b))
          for (let x = 0; x < b.length; ++x) {
            const A = b[x], g = G(A) && A.name;
            if (g === "Boolean") {
              _ = !0;
              break;
            } else g === "String" && (M = !1);
          }
        else
          _ = G(b) && b.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = _, p[
          1
          /* shouldCastTrue */
        ] = M, (_ || ie(p, "default")) && l.push(u);
      }
    }
  const a = [o, l];
  return le(e) && s.set(e, a), a;
}
function zo(e) {
  return e[0] !== "$" && !Bt(e);
}
const io = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", ro = (e) => B(e) ? e.map(He) : [He(e)], sd = (e, t, n) => {
  if (t._n)
    return t;
  const s = Yr((...i) => ro(t(...i)), n);
  return s._c = !1, s;
}, Zc = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (io(i)) continue;
    const r = e[i];
    if (G(r))
      t[i] = sd(i, r, s);
    else if (r != null) {
      const o = ro(r);
      t[i] = () => o;
    }
  }
}, zc = (e, t) => {
  const n = ro(t);
  e.slots.default = () => n;
}, Qc = (e, t, n) => {
  for (const s in t)
    (n || !io(s)) && (e[s] = t[s]);
}, id = (e, t, n) => {
  const s = e.slots = Gc();
  if (e.vnode.shapeFlag & 32) {
    const i = t.__;
    i && cr(s, "__", i, !0);
    const r = t._;
    r ? (Qc(s, t, n), n && cr(s, "_", r, !0)) : Zc(t, s);
  } else t && zc(e, t);
}, rd = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let r = !0, o = ee;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? r = !1 : Qc(i, t, n) : (r = !t.$stable, Zc(t, i)), o = t;
  } else t && (zc(e, t), o = { default: 1 });
  if (r)
    for (const l in i)
      !io(l) && o[l] == null && delete i[l];
}, Se = ha;
function ea(e) {
  return na(e);
}
function ta(e) {
  return na(e, dh);
}
function na(e, t) {
  const n = vi();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: i,
    patchProp: r,
    createElement: o,
    createText: l,
    createComment: c,
    setText: a,
    setElementText: f,
    parentNode: u,
    nextSibling: d,
    setScopeId: p = xe,
    insertStaticContent: b
  } = e, _ = (h, m, T, R = null, N = null, I = null, $ = void 0, F = null, L = !!m.dynamicChildren) => {
    if (h === m)
      return;
    h && !lt(h, m) && (R = xs(h), ut(h, N, I, !0), h = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
    const { type: P, ref: q, shapeFlag: H } = m;
    switch (P) {
      case jt:
        M(h, m, T, R);
        break;
      case _e:
        x(h, m, T, R);
        break;
      case nn:
        h == null && A(m, T, R, $);
        break;
      case be:
        E(
          h,
          m,
          T,
          R,
          N,
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
          R,
          N,
          I,
          $,
          F,
          L
        ) : H & 6 ? D(
          h,
          m,
          T,
          R,
          N,
          I,
          $,
          F,
          L
        ) : (H & 64 || H & 128) && P.process(
          h,
          m,
          T,
          R,
          N,
          I,
          $,
          F,
          L,
          dn
        );
    }
    q != null && N ? Nn(q, h && h.ref, I, m || h, !m) : q == null && h && h.ref != null && Nn(h.ref, null, I, h, !0);
  }, M = (h, m, T, R) => {
    if (h == null)
      s(
        m.el = l(m.children),
        T,
        R
      );
    else {
      const N = m.el = h.el;
      m.children !== h.children && a(N, m.children);
    }
  }, x = (h, m, T, R) => {
    h == null ? s(
      m.el = c(m.children || ""),
      T,
      R
    ) : m.el = h.el;
  }, A = (h, m, T, R) => {
    [h.el, h.anchor] = b(
      h.children,
      m,
      T,
      R,
      h.el,
      h.anchor
    );
  }, g = ({ el: h, anchor: m }, T, R) => {
    let N;
    for (; h && h !== m; )
      N = d(h), s(h, T, R), h = N;
    s(m, T, R);
  }, y = ({ el: h, anchor: m }) => {
    let T;
    for (; h && h !== m; )
      T = d(h), i(h), h = T;
    i(m);
  }, v = (h, m, T, R, N, I, $, F, L) => {
    m.type === "svg" ? $ = "svg" : m.type === "math" && ($ = "mathml"), h == null ? w(
      m,
      T,
      R,
      N,
      I,
      $,
      F,
      L
    ) : S(
      h,
      m,
      N,
      I,
      $,
      F,
      L
    );
  }, w = (h, m, T, R, N, I, $, F) => {
    let L, P;
    const { props: q, shapeFlag: H, transition: K, dirs: X } = h;
    if (L = h.el = o(
      h.type,
      I,
      q && q.is,
      q
    ), H & 8 ? f(L, h.children) : H & 16 && O(
      h.children,
      L,
      null,
      R,
      N,
      nr(h, I),
      $,
      F
    ), X && gt(h, null, R, "created"), V(L, h, h.scopeId, $, R), q) {
      for (const ce in q)
        ce !== "value" && !Bt(ce) && r(L, ce, null, q[ce], I, R);
      "value" in q && r(L, "value", null, q.value, I), (P = q.onVnodeBeforeMount) && Be(P, R, h);
    }
    X && gt(h, null, R, "beforeMount");
    const ne = sa(N, K);
    ne && K.beforeEnter(L), s(L, m, T), ((P = q && q.onVnodeMounted) || ne || X) && Se(() => {
      P && Be(P, R, h), ne && K.enter(L), X && gt(h, null, R, "mounted");
    }, N);
  }, V = (h, m, T, R, N) => {
    if (T && p(h, T), R)
      for (let I = 0; I < R.length; I++)
        p(h, R[I]);
    if (N) {
      let I = N.subTree;
      if (m === I || ii(I.type) && (I.ssContent === m || I.ssFallback === m)) {
        const $ = N.vnode;
        V(
          h,
          $,
          $.scopeId,
          $.slotScopeIds,
          N.parent
        );
      }
    }
  }, O = (h, m, T, R, N, I, $, F, L = 0) => {
    for (let P = L; P < h.length; P++) {
      const q = h[P] = F ? Vt(h[P]) : He(h[P]);
      _(
        null,
        q,
        m,
        T,
        R,
        N,
        I,
        $,
        F
      );
    }
  }, S = (h, m, T, R, N, I, $) => {
    const F = m.el = h.el;
    let { patchFlag: L, dynamicChildren: P, dirs: q } = m;
    L |= h.patchFlag & 16;
    const H = h.props || ee, K = m.props || ee;
    let X;
    if (T && Jt(T, !1), (X = K.onVnodeBeforeUpdate) && Be(X, T, m, h), q && gt(m, h, T, "beforeUpdate"), T && Jt(T, !0), (H.innerHTML && K.innerHTML == null || H.textContent && K.textContent == null) && f(F, ""), P ? C(
      h.dynamicChildren,
      P,
      F,
      T,
      R,
      nr(m, N),
      I
    ) : $ || j(
      h,
      m,
      F,
      null,
      T,
      R,
      nr(m, N),
      I,
      !1
    ), L > 0) {
      if (L & 16)
        k(F, H, K, T, N);
      else if (L & 2 && H.class !== K.class && r(F, "class", null, K.class, N), L & 4 && r(F, "style", H.style, K.style, N), L & 8) {
        const ne = m.dynamicProps;
        for (let ce = 0; ce < ne.length; ce++) {
          const oe = ne[ce], Ve = H[oe], we = K[oe];
          (we !== Ve || oe === "value") && r(F, oe, Ve, we, N, T);
        }
      }
      L & 1 && h.children !== m.children && f(F, m.children);
    } else !$ && P == null && k(F, H, K, T, N);
    ((X = K.onVnodeUpdated) || q) && Se(() => {
      X && Be(X, T, m, h), q && gt(m, h, T, "updated");
    }, R);
  }, C = (h, m, T, R, N, I, $) => {
    for (let F = 0; F < m.length; F++) {
      const L = h[F], P = m[F], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !lt(L, P) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? u(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          T
        )
      );
      _(
        L,
        P,
        q,
        null,
        R,
        N,
        I,
        $,
        !0
      );
    }
  }, k = (h, m, T, R, N) => {
    if (m !== T) {
      if (m !== ee)
        for (const I in m)
          !Bt(I) && !(I in T) && r(
            h,
            I,
            m[I],
            null,
            N,
            R
          );
      for (const I in T) {
        if (Bt(I)) continue;
        const $ = T[I], F = m[I];
        $ !== F && I !== "value" && r(h, I, F, $, N, R);
      }
      "value" in T && r(h, "value", m.value, T.value, N);
    }
  }, E = (h, m, T, R, N, I, $, F, L) => {
    const P = m.el = h ? h.el : l(""), q = m.anchor = h ? h.anchor : l("");
    let { patchFlag: H, dynamicChildren: K, slotScopeIds: X } = m;
    X && (F = F ? F.concat(X) : X), h == null ? (s(P, T, R), s(q, T, R), O(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      T,
      q,
      N,
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
      N,
      I,
      $,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (m.key != null || N && m === N.subTree) && oo(
      h,
      m,
      !0
      /* shallow */
    )) : j(
      h,
      m,
      T,
      q,
      N,
      I,
      $,
      F,
      L
    );
  }, D = (h, m, T, R, N, I, $, F, L) => {
    m.slotScopeIds = F, h == null ? m.shapeFlag & 512 ? N.ctx.activate(
      m,
      T,
      R,
      $,
      L
    ) : W(
      m,
      T,
      R,
      N,
      I,
      $,
      L
    ) : J(h, m, L);
  }, W = (h, m, T, R, N, I, $) => {
    const F = h.component = _a(
      h,
      R,
      N
    );
    if (_s(h) && (F.ctx.renderer = dn), Sa(F, !1, $), F.asyncDep) {
      if (N && N.registerDep(F, U, $), !h.el) {
        const L = F.subTree = fe(_e);
        x(null, L, m, T), h.placeholder = L.el;
      }
    } else
      U(
        F,
        h,
        m,
        T,
        N,
        I,
        $
      );
  }, J = (h, m, T) => {
    const R = m.component = h.component;
    if (gd(h, m, T))
      if (R.asyncDep && !R.asyncResolved) {
        Y(R, m, T);
        return;
      } else
        R.next = m, R.update();
    else
      m.el = h.el, R.vnode = m;
  }, U = (h, m, T, R, N, I, $) => {
    const F = () => {
      if (h.isMounted) {
        let { next: H, bu: K, u: X, parent: ne, vnode: ce } = h;
        {
          const qe = ia(h);
          if (qe) {
            H && (H.el = ce.el, Y(h, H, $)), qe.asyncDep.then(() => {
              h.isUnmounted || F();
            });
            return;
          }
        }
        let oe = H, Ve;
        Jt(h, !1), H ? (H.el = ce.el, Y(h, H, $)) : H = ce, K && Tn(K), (Ve = H.props && H.props.onVnodeBeforeUpdate) && Be(Ve, ne, H, ce), Jt(h, !0);
        const we = Us(h), ot = h.subTree;
        h.subTree = we, _(
          ot,
          we,
          // parent may have changed if it's in a teleport
          u(ot.el),
          // anchor may have changed if it's in a fragment
          xs(ot),
          h,
          N,
          I
        ), H.el = we.el, oe === null && $i(h, we.el), X && Se(X, N), (Ve = H.props && H.props.onVnodeUpdated) && Se(
          () => Be(Ve, ne, H, ce),
          N
        );
      } else {
        let H;
        const { el: K, props: X } = m, { bm: ne, m: ce, parent: oe, root: Ve, type: we } = h, ot = Ut(m);
        if (Jt(h, !1), ne && Tn(ne), !ot && (H = X && X.onVnodeBeforeMount) && Be(H, oe, m), Jt(h, !0), K && Gi) {
          const qe = () => {
            h.subTree = Us(h), Gi(
              K,
              h.subTree,
              h,
              N,
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
          const qe = h.subTree = Us(h);
          _(
            null,
            qe,
            T,
            R,
            h,
            N,
            I
          ), m.el = qe.el;
        }
        if (ce && Se(ce, N), !ot && (H = X && X.onVnodeMounted)) {
          const qe = m;
          Se(
            () => Be(H, oe, qe),
            N
          );
        }
        (m.shapeFlag & 256 || oe && Ut(oe.vnode) && oe.vnode.shapeFlag & 256) && h.a && Se(h.a, N), h.isMounted = !0, m = T = R = null;
      }
    };
    h.scope.on();
    const L = h.effect = new ns(F);
    h.scope.off();
    const P = h.update = L.run.bind(L), q = h.job = L.runIfDirty.bind(L);
    q.i = h, q.id = h.uid, L.scheduler = () => Jr(q), Jt(h, !0), P();
  }, Y = (h, m, T) => {
    m.component = h;
    const R = h.vnode.props;
    h.vnode = m, h.next = null, td(h, m.props, R, T), rd(h, m.children, T), Nt(), Ho(h), xt();
  }, j = (h, m, T, R, N, I, $, F, L = !1) => {
    const P = h && h.children, q = h ? h.shapeFlag : 0, H = m.children, { patchFlag: K, shapeFlag: X } = m;
    if (K > 0) {
      if (K & 128) {
        ft(
          P,
          H,
          T,
          R,
          N,
          I,
          $,
          F,
          L
        );
        return;
      } else if (K & 256) {
        pe(
          P,
          H,
          T,
          R,
          N,
          I,
          $,
          F,
          L
        );
        return;
      }
    }
    X & 8 ? (q & 16 && Bn(P, N, I), H !== P && f(T, H)) : q & 16 ? X & 16 ? ft(
      P,
      H,
      T,
      R,
      N,
      I,
      $,
      F,
      L
    ) : Bn(P, N, I, !0) : (q & 8 && f(T, ""), X & 16 && O(
      H,
      T,
      R,
      N,
      I,
      $,
      F,
      L
    ));
  }, pe = (h, m, T, R, N, I, $, F, L) => {
    h = h || Sn, m = m || Sn;
    const P = h.length, q = m.length, H = Math.min(P, q);
    let K;
    for (K = 0; K < H; K++) {
      const X = m[K] = L ? Vt(m[K]) : He(m[K]);
      _(
        h[K],
        X,
        T,
        null,
        N,
        I,
        $,
        F,
        L
      );
    }
    P > q ? Bn(
      h,
      N,
      I,
      !0,
      !1,
      H
    ) : O(
      m,
      T,
      R,
      N,
      I,
      $,
      F,
      L,
      H
    );
  }, ft = (h, m, T, R, N, I, $, F, L) => {
    let P = 0;
    const q = m.length;
    let H = h.length - 1, K = q - 1;
    for (; P <= H && P <= K; ) {
      const X = h[P], ne = m[P] = L ? Vt(m[P]) : He(m[P]);
      if (lt(X, ne))
        _(
          X,
          ne,
          T,
          null,
          N,
          I,
          $,
          F,
          L
        );
      else
        break;
      P++;
    }
    for (; P <= H && P <= K; ) {
      const X = h[H], ne = m[K] = L ? Vt(m[K]) : He(m[K]);
      if (lt(X, ne))
        _(
          X,
          ne,
          T,
          null,
          N,
          I,
          $,
          F,
          L
        );
      else
        break;
      H--, K--;
    }
    if (P > H) {
      if (P <= K) {
        const X = K + 1, ne = X < q ? m[X].el : R;
        for (; P <= K; )
          _(
            null,
            m[P] = L ? Vt(m[P]) : He(m[P]),
            T,
            ne,
            N,
            I,
            $,
            F,
            L
          ), P++;
      }
    } else if (P > K)
      for (; P <= H; )
        ut(h[P], N, I, !0), P++;
    else {
      const X = P, ne = P, ce = /* @__PURE__ */ new Map();
      for (P = ne; P <= K; P++) {
        const Ge = m[P] = L ? Vt(m[P]) : He(m[P]);
        Ge.key != null && ce.set(Ge.key, P);
      }
      let oe, Ve = 0;
      const we = K - ne + 1;
      let ot = !1, qe = 0;
      const Hn = new Array(we);
      for (P = 0; P < we; P++) Hn[P] = 0;
      for (P = X; P <= H; P++) {
        const Ge = h[P];
        if (Ve >= we) {
          ut(Ge, N, I, !0);
          continue;
        }
        let ht;
        if (Ge.key != null)
          ht = ce.get(Ge.key);
        else
          for (oe = ne; oe <= K; oe++)
            if (Hn[oe - ne] === 0 && lt(Ge, m[oe])) {
              ht = oe;
              break;
            }
        ht === void 0 ? ut(Ge, N, I, !0) : (Hn[ht - ne] = P + 1, ht >= qe ? qe = ht : ot = !0, _(
          Ge,
          m[ht],
          T,
          null,
          N,
          I,
          $,
          F,
          L
        ), Ve++);
      }
      const Mo = ot ? od(Hn) : Sn;
      for (oe = Mo.length - 1, P = we - 1; P >= 0; P--) {
        const Ge = ne + P, ht = m[Ge], Lo = m[Ge + 1], Do = Ge + 1 < q ? (
          // #13559, fallback to el placeholder for unresolved async component
          Lo.el || Lo.placeholder
        ) : R;
        Hn[P] === 0 ? _(
          null,
          ht,
          T,
          Do,
          N,
          I,
          $,
          F,
          L
        ) : ot && (oe < 0 || P !== Mo[oe] ? rt(ht, T, Do, 2) : oe--);
      }
    }
  }, rt = (h, m, T, R, N = null) => {
    const { el: I, type: $, transition: F, children: L, shapeFlag: P } = h;
    if (P & 6) {
      rt(h.component.subTree, m, T, R);
      return;
    }
    if (P & 128) {
      h.suspense.move(m, T, R);
      return;
    }
    if (P & 64) {
      $.move(h, m, T, dn);
      return;
    }
    if ($ === be) {
      s(I, m, T);
      for (let H = 0; H < L.length; H++)
        rt(L[H], m, T, R);
      s(h.anchor, m, T);
      return;
    }
    if ($ === nn) {
      g(h, m, T);
      return;
    }
    if (R !== 2 && P & 1 && F)
      if (R === 0)
        F.beforeEnter(I), s(I, m, T), Se(() => F.enter(I), N);
      else {
        const { leave: H, delayLeave: K, afterLeave: X } = F, ne = () => {
          h.ctx.isUnmounted ? i(I) : s(I, m, T);
        }, ce = () => {
          H(I, () => {
            ne(), X && X();
          });
        };
        K ? K(I, ne, ce) : ce();
      }
    else
      s(I, m, T);
  }, ut = (h, m, T, R = !1, N = !1) => {
    const {
      type: I,
      props: $,
      ref: F,
      children: L,
      dynamicChildren: P,
      shapeFlag: q,
      patchFlag: H,
      dirs: K,
      cacheIndex: X
    } = h;
    if (H === -2 && (N = !1), F != null && (Nt(), Nn(F, null, T, h, !0), xt()), X != null && (m.renderCache[X] = void 0), q & 256) {
      m.ctx.deactivate(h);
      return;
    }
    const ne = q & 1 && K, ce = !Ut(h);
    let oe;
    if (ce && (oe = $ && $.onVnodeBeforeUnmount) && Be(oe, m, h), q & 6)
      Vf(h.component, T, R);
    else {
      if (q & 128) {
        h.suspense.unmount(T, R);
        return;
      }
      ne && gt(h, null, m, "beforeUnmount"), q & 64 ? h.type.remove(
        h,
        m,
        T,
        dn,
        R
      ) : P && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !P.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== be || H > 0 && H & 64) ? Bn(
        P,
        m,
        T,
        !1,
        !0
      ) : (I === be && H & 384 || !N && q & 16) && Bn(L, m, T), R && Po(h);
    }
    (ce && (oe = $ && $.onVnodeUnmounted) || ne) && Se(() => {
      oe && Be(oe, m, h), ne && gt(h, null, m, "unmounted");
    }, T);
  }, Po = (h) => {
    const { type: m, el: T, anchor: R, transition: N } = h;
    if (m === be) {
      Ff(T, R);
      return;
    }
    if (m === nn) {
      y(h);
      return;
    }
    const I = () => {
      i(T), N && !N.persisted && N.afterLeave && N.afterLeave();
    };
    if (h.shapeFlag & 1 && N && !N.persisted) {
      const { leave: $, delayLeave: F } = N, L = () => $(T, I);
      F ? F(h.el, I, L) : L();
    } else
      I();
  }, Ff = (h, m) => {
    let T;
    for (; h !== m; )
      T = d(h), i(h), h = T;
    i(m);
  }, Vf = (h, m, T) => {
    const {
      bum: R,
      scope: N,
      job: I,
      subTree: $,
      um: F,
      m: L,
      a: P,
      parent: q,
      slots: { __: H }
    } = h;
    si(L), si(P), R && Tn(R), q && B(H) && H.forEach((K) => {
      q.renderCache[K] = void 0;
    }), N.stop(), I && (I.flags |= 8, ut($, h, m, T)), F && Se(F, m), Se(() => {
      h.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve());
  }, Bn = (h, m, T, R = !1, N = !1, I = 0) => {
    for (let $ = I; $ < h.length; $++)
      ut(h[$], m, T, R, N);
  }, xs = (h) => {
    if (h.shapeFlag & 6)
      return xs(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const m = d(h.anchor || h.el), T = m && m[Ec];
    return T ? d(T) : m;
  };
  let Wi = !1;
  const ko = (h, m, T) => {
    h == null ? m._vnode && ut(m._vnode, null, null, !0) : _(
      m._vnode || null,
      h,
      m,
      null,
      null,
      null,
      T
    ), m._vnode = h, Wi || (Wi = !0, Ho(), ti(), Wi = !1);
  }, dn = {
    p: _,
    um: ut,
    m: rt,
    r: Po,
    mt: W,
    mc: O,
    pc: j,
    pbc: C,
    n: xs,
    o: e
  };
  let qi, Gi;
  return t && ([qi, Gi] = t(
    dn
  )), {
    render: ko,
    hydrate: qi,
    createApp: zh(ko, qi)
  };
}
function nr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function oo(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (B(s) && B(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = Vt(i[r]), l.el = o.el), !n && l.patchFlag !== -2 && oo(o, l)), l.type === jt && (l.el = o.el), l.type === _e && !l.el && (l.el = o.el);
    }
}
function od(e) {
  const t = e.slice(), n = [0];
  let s, i, r, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const a = e[s];
    if (a !== 0) {
      if (i = n[n.length - 1], e[i] < a) {
        t[s] = i, n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        l = r + o >> 1, e[n[l]] < a ? r = l + 1 : o = l;
      a < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; )
    n[r] = o, o = t[o];
  return n;
}
function ia(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ia(t);
}
function si(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ra = Symbol.for("v-scx"), oa = () => zn(ra);
function ld(e, t) {
  return Ss(e, null, t);
}
function cd(e, t) {
  return Ss(
    e,
    null,
    { flush: "post" }
  );
}
function la(e, t) {
  return Ss(
    e,
    null,
    { flush: "sync" }
  );
}
function xn(e, t, n) {
  return Ss(e, t, n);
}
function Ss(e, t, n = ee) {
  const { immediate: s, deep: i, flush: r, once: o } = n, l = te({}, n), c = t && s || !t && r !== "post";
  let a;
  if (On) {
    if (r === "sync") {
      const p = oa();
      a = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!c) {
      const p = () => {
      };
      return p.stop = xe, p.resume = xe, p.pause = xe, p;
    }
  }
  const f = Ae;
  l.call = (p, b, _) => it(p, f, b, _);
  let u = !1;
  r === "post" ? l.scheduler = (p) => {
    Se(p, f && f.suspense);
  } : r !== "sync" && (u = !0, l.scheduler = (p, b) => {
    b ? p() : Jr(p);
  }), l.augmentJob = (p) => {
    t && (p.flags |= 4), u && (p.flags |= 2, f && (p.id = f.uid, p.i = f));
  };
  const d = Ju(e, t, l);
  return On && (a ? a.push(d) : c && d()), d;
}
function ad(e, t, n) {
  const s = this.proxy, i = Z(e) ? e.includes(".") ? ca(s, e) : () => s[e] : e.bind(s, s);
  let r;
  G(t) ? r = t : (r = t.handler, n = t);
  const o = ln(this), l = Ss(i, r.bind(s), n);
  return o(), l;
}
function ca(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
function fd(e, t, n = ee) {
  const s = We(), i = ue(t), r = Ue(t), o = aa(e, i), l = pc((c, a) => {
    let f, u = ee, d;
    return la(() => {
      const p = e[i];
      De(f, p) && (f = p, a());
    }), {
      get() {
        return c(), n.get ? n.get(f) : f;
      },
      set(p) {
        const b = n.set ? n.set(p) : p;
        if (!De(b, f) && !(u !== ee && De(p, u)))
          return;
        const _ = s.vnode.props;
        _ && // check if parent has passed v-model
        (t in _ || i in _ || r in _) && (`onUpdate:${t}` in _ || `onUpdate:${i}` in _ || `onUpdate:${r}` in _) || (f = p, a()), s.emit(`update:${t}`, b), De(p, b) && De(p, u) && !De(b, d) && a(), u = p, d = b;
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
const aa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${Ue(t)}Modifiers`];
function ud(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let i = n;
  const r = t.startsWith("update:"), o = r && aa(s, t.slice(7));
  o && (o.trim && (i = n.map((f) => Z(f) ? f.trim() : f)), o.number && (i = n.map(Ys)));
  let l, c = s[l = En(t)] || // also try camelCase event handler (#2249)
  s[l = En(ue(t))];
  !c && r && (c = s[l = En(Ue(t))]), c && it(
    c,
    e,
    6,
    i
  );
  const a = s[l + "Once"];
  if (a) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, it(
      a,
      e,
      6,
      i
    );
  }
}
function fa(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let o = {}, l = !1;
  if (!G(e)) {
    const c = (a) => {
      const f = fa(a, t, !0);
      f && (l = !0, te(o, f));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (le(e) && s.set(e, null), null) : (B(r) ? r.forEach((c) => o[c] = null) : te(o, r), le(e) && s.set(e, o), o);
}
function Vi(e, t) {
  return !e || !an(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ie(e, t[0].toLowerCase() + t.slice(1)) || ie(e, Ue(t)) || ie(e, t));
}
function Us(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [r],
    slots: o,
    attrs: l,
    emit: c,
    render: a,
    renderCache: f,
    props: u,
    data: d,
    setupState: p,
    ctx: b,
    inheritAttrs: _
  } = e, M = ls(e);
  let x, A;
  try {
    if (n.shapeFlag & 4) {
      const y = i || s, v = y;
      x = He(
        a.call(
          v,
          y,
          f,
          u,
          p,
          d,
          b
        )
      ), A = l;
    } else {
      const y = t;
      x = He(
        y.length > 1 ? y(
          u,
          { attrs: l, slots: o, emit: c }
        ) : y(
          u,
          null
        )
      ), A = t.props ? l : dd(l);
    }
  } catch (y) {
    Qn.length = 0, hn(y, e, 1), x = fe(_e);
  }
  let g = x;
  if (A && _ !== !1) {
    const y = Object.keys(A), { shapeFlag: v } = g;
    y.length && v & 7 && (r && y.some(Vr) && (A = pd(
      A,
      r
    )), g = yt(g, A, !1, !0));
  }
  return n.dirs && (g = yt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && It(g, n.transition), x = g, ls(M), x;
}
function hd(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (Ot(i)) {
      if (i.type !== _e || i.children === "v-if") {
        if (n)
          return;
        n = i;
      }
    } else
      return;
  }
  return n;
}
const dd = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || an(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, pd = (e, t) => {
  const n = {};
  for (const s in e)
    (!Vr(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function gd(e, t, n) {
  const { props: s, children: i, component: r } = e, { props: o, children: l, patchFlag: c } = t, a = r.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Qo(s, o, a) : !!o;
    if (c & 8) {
      const f = t.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        if (o[d] !== s[d] && !Vi(a, d))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Qo(s, o, a) : !0 : !!o;
  return !1;
}
function Qo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !Vi(n, r))
      return !0;
  }
  return !1;
}
function $i({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ii = (e) => e.__isSuspense;
let _r = 0;
const md = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, i, r, o, l, c, a) {
    if (e == null)
      _d(
        t,
        n,
        s,
        i,
        r,
        o,
        l,
        c,
        a
      );
    else {
      if (r && r.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      bd(
        e,
        t,
        n,
        s,
        i,
        o,
        l,
        c,
        a
      );
    }
  },
  hydrate: Sd,
  normalize: vd
}, yd = md;
function as(e, t) {
  const n = e.props && e.props[t];
  G(n) && n();
}
function _d(e, t, n, s, i, r, o, l, c) {
  const {
    p: a,
    o: { createElement: f }
  } = c, u = f("div"), d = e.suspense = ua(
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
  a(
    null,
    d.pendingBranch = e.ssContent,
    u,
    null,
    s,
    d,
    r,
    o
  ), d.deps > 0 ? (as(e, "onPending"), as(e, "onFallback"), a(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    r,
    o
  ), wn(d, e.ssFallback)) : d.resolve(!1, !0);
}
function bd(e, t, n, s, i, r, o, l, { p: c, um: a, o: { createElement: f } }) {
  const u = t.suspense = e.suspense;
  u.vnode = t, t.el = e.el;
  const d = t.ssContent, p = t.ssFallback, { activeBranch: b, pendingBranch: _, isInFallback: M, isHydrating: x } = u;
  if (_)
    u.pendingBranch = d, lt(d, _) ? (c(
      _,
      d,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : M && (x || (c(
      b,
      p,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), wn(u, p)))) : (u.pendingId = _r++, x ? (u.isHydrating = !1, u.activeBranch = _) : a(_, i, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), M ? (c(
      null,
      d,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 ? u.resolve() : (c(
      b,
      p,
      n,
      s,
      i,
      null,
      // fallback tree will not have suspense context
      r,
      o,
      l
    ), wn(u, p))) : b && lt(d, b) ? (c(
      b,
      d,
      n,
      s,
      i,
      u,
      r,
      o,
      l
    ), u.resolve(!0)) : (c(
      null,
      d,
      u.hiddenContainer,
      null,
      i,
      u,
      r,
      o,
      l
    ), u.deps <= 0 && u.resolve()));
  else if (b && lt(d, b))
    c(
      b,
      d,
      n,
      s,
      i,
      u,
      r,
      o,
      l
    ), wn(u, d);
  else if (as(t, "onPending"), u.pendingBranch = d, d.shapeFlag & 512 ? u.pendingId = d.component.suspenseId : u.pendingId = _r++, c(
    null,
    d,
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
      u.pendingId === g && u.fallback(p);
    }, A) : A === 0 && u.fallback(p);
  }
}
function ua(e, t, n, s, i, r, o, l, c, a, f = !1) {
  const {
    p: u,
    m: d,
    um: p,
    n: b,
    o: { parentNode: _, remove: M }
  } = a;
  let x;
  const A = Ed(e);
  A && t && t.pendingBranch && (x = t.pendingId, t.deps++);
  const g = e.props ? Xs(e.props.timeout) : void 0, y = r, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: o,
    container: s,
    hiddenContainer: i,
    deps: 0,
    pendingId: _r++,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(w = !1, V = !1) {
      const {
        vnode: O,
        activeBranch: S,
        pendingBranch: C,
        pendingId: k,
        effects: E,
        parentComponent: D,
        container: W
      } = v;
      let J = !1;
      v.isHydrating ? v.isHydrating = !1 : w || (J = S && C.transition && C.transition.mode === "out-in", J && (S.transition.afterLeave = () => {
        k === v.pendingId && (d(
          C,
          W,
          r === y ? b(S) : r,
          0
        ), rs(E));
      }), S && (_(S.el) === W && (r = b(S)), p(S, D, v, !0)), J || d(C, W, r, 0)), wn(v, C), v.pendingBranch = null, v.isInFallback = !1;
      let U = v.parent, Y = !1;
      for (; U; ) {
        if (U.pendingBranch) {
          U.effects.push(...E), Y = !0;
          break;
        }
        U = U.parent;
      }
      !Y && !J && rs(E), v.effects = [], A && t && t.pendingBranch && x === t.pendingId && (t.deps--, t.deps === 0 && !V && t.resolve()), as(O, "onResolve");
    },
    fallback(w) {
      if (!v.pendingBranch)
        return;
      const { vnode: V, activeBranch: O, parentComponent: S, container: C, namespace: k } = v;
      as(V, "onFallback");
      const E = b(O), D = () => {
        v.isInFallback && (u(
          null,
          w,
          C,
          E,
          S,
          null,
          // fallback tree will not have suspense context
          k,
          l,
          c
        ), wn(v, w));
      }, W = w.transition && w.transition.mode === "out-in";
      W && (O.transition.afterLeave = D), v.isInFallback = !0, p(
        O,
        S,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), W || D();
    },
    move(w, V, O) {
      v.activeBranch && d(v.activeBranch, w, V, O), v.container = w;
    },
    next() {
      return v.activeBranch && b(v.activeBranch);
    },
    registerDep(w, V, O) {
      const S = !!v.pendingBranch;
      S && v.deps++;
      const C = w.vnode.el;
      w.asyncDep.catch((k) => {
        hn(k, w, 0);
      }).then((k) => {
        if (w.isUnmounted || v.isUnmounted || v.pendingId !== w.suspenseId)
          return;
        w.asyncResolved = !0;
        const { vnode: E } = w;
        Er(w, k, !1), C && (E.el = C);
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
          O
        ), D && M(D), $i(w, E.el), S && --v.deps === 0 && v.resolve();
      });
    },
    unmount(w, V) {
      v.isUnmounted = !0, v.activeBranch && p(
        v.activeBranch,
        n,
        w,
        V
      ), v.pendingBranch && p(
        v.pendingBranch,
        n,
        w,
        V
      );
    }
  };
  return v;
}
function Sd(e, t, n, s, i, r, o, l, c) {
  const a = t.suspense = ua(
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
  ), f = c(
    e,
    a.pendingBranch = t.ssContent,
    n,
    a,
    r,
    o
  );
  return a.deps === 0 && a.resolve(!1, !0), f;
}
function vd(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = el(
    s ? n.default : n
  ), e.ssFallback = s ? el(n.fallback) : fe(_e);
}
function el(e) {
  let t;
  if (G(e)) {
    const n = on && e._c;
    n && (e._d = !1, Ze()), e = e(), n && (e._d = !0, t = ke, da());
  }
  return B(e) && (e = hd(e)), e = He(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ha(e, t) {
  t && t.pendingBranch ? B(e) ? t.effects.push(...e) : t.effects.push(e) : rs(e);
}
function wn(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let i = t.el;
  for (; !i && t.component; )
    t = t.component.subTree, i = t.el;
  n.el = i, s && s.subTree === n && (s.vnode.el = i, $i(s, i));
}
function Ed(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const be = Symbol.for("v-fgt"), jt = Symbol.for("v-txt"), _e = Symbol.for("v-cmt"), nn = Symbol.for("v-stc"), Qn = [];
let ke = null;
function Ze(e = !1) {
  Qn.push(ke = e ? null : []);
}
function da() {
  Qn.pop(), ke = Qn[Qn.length - 1] || null;
}
let on = 1;
function br(e, t = !1) {
  on += e, e < 0 && ke && t && (ke.hasOnce = !0);
}
function pa(e) {
  return e.dynamicChildren = on > 0 ? ke || Sn : null, da(), on > 0 && ke && ke.push(e), e;
}
function qt(e, t, n, s, i, r) {
  return pa(
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
function fs(e, t, n, s, i) {
  return pa(
    fe(
      e,
      t,
      n,
      s,
      i,
      !0
    )
  );
}
function Ot(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function lt(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Td(e) {
}
const ga = ({ key: e }) => e ?? null, js = ({
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
    key: t && ga(t),
    ref: t && js(t),
    scopeId: Ri,
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
const fe = Cd;
function Cd(e, t = null, n = null, s = 0, i = null, r = !1) {
  if ((!e || e === Vc) && (e = _e), Ot(e)) {
    const l = yt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && co(l, n), on > 0 && !r && ke && (l.shapeFlag & 6 ? ke[ke.indexOf(e)] = l : ke.push(l)), l.patchFlag = -2, l;
  }
  if (Pd(e) && (e = e.__vccOpts), t) {
    t = ma(t);
    let { class: l, style: c } = t;
    l && !Z(l) && (t.class = Vn(l)), le(c) && (wi(c) && !B(c) && (c = te({}, c)), t.style = ys(c));
  }
  const o = Z(e) ? 1 : ii(e) ? 128 : Tc(e) ? 64 : le(e) ? 4 : G(e) ? 2 : 0;
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
function ma(e) {
  return e ? wi(e) || Jc(e) ? te({}, e) : e : null;
}
function yt(e, t, n = !1, s = !1) {
  const { props: i, ref: r, patchFlag: o, children: l, transition: c } = e, a = t ? ya(i || {}, t) : i, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && ga(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? B(r) ? r.concat(js(t)) : [r, js(t)] : js(t)
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
  return c && s && It(
    f,
    c.clone(f)
  ), f;
}
function lo(e = " ", t = 0) {
  return fe(jt, null, e, t);
}
function Ad(e, t) {
  const n = fe(nn, null, e);
  return n.staticCount = t, n;
}
function Nd(e = "", t = !1) {
  return t ? (Ze(), fs(_e, null, e)) : fe(_e, null, e);
}
function He(e) {
  return e == null || typeof e == "boolean" ? fe(_e) : B(e) ? fe(
    be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Ot(e) ? Vt(e) : fe(jt, null, String(e));
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
      !i && !Jc(t) ? t._ctx = Ne : i === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else G(t) ? (t = { default: t, _ctx: Ne }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ya(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Vn([t.class, s.class]));
      else if (i === "style")
        t.style = ys([t.style, s.style]);
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
const xd = Kc();
let wd = 0;
function _a(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || xd, r = {
    uid: wd++,
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
    propsOptions: Xc(s, i),
    emitsOptions: fa(s, i),
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
  return r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = ud.bind(null, r), e.ce && e.ce(r), r;
}
let Ae = null;
const We = () => Ae || Ne;
let ri, Sr;
{
  const e = vi(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (r) => {
      i.length > 1 ? i.forEach((o) => o(r)) : i[0](r);
    };
  };
  ri = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ae = n
  ), Sr = t(
    "__VUE_SSR_SETTERS__",
    (n) => On = n
  );
}
const ln = (e) => {
  const t = Ae;
  return ri(e), e.scope.on(), () => {
    e.scope.off(), ri(t);
  };
}, vr = () => {
  Ae && Ae.scope.off(), ri(null);
};
function ba(e) {
  return e.vnode.shapeFlag & 4;
}
let On = !1;
function Sa(e, t = !1, n = !1) {
  t && Sr(t);
  const { props: s, children: i } = e.vnode, r = ba(e);
  ed(e, s, r, t), id(e, i, n || t);
  const o = r ? Id(e, t) : void 0;
  return t && Sr(!1), o;
}
function Id(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, pr);
  const { setup: s } = n;
  if (s) {
    Nt();
    const i = e.setupContext = s.length > 1 ? Ta(e) : null, r = ln(e), o = $n(
      s,
      e,
      0,
      [
        e.props,
        i
      ]
    ), l = Br(o);
    if (xt(), r(), (l || e.sp) && !Ut(e) && zr(e), l) {
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
    Ea(e, t);
}
function Er(e, t, n) {
  G(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : le(t) && (e.setupState = Gr(t)), Ea(e, n);
}
let oi, Tr;
function va(e) {
  oi = e, Tr = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, Ph));
  };
}
const Od = () => !oi;
function Ea(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && oi && !s.render) {
      const i = s.template || so(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config, { delimiters: l, compilerOptions: c } = s, a = te(
          te(
            {
              isCustomElement: r,
              delimiters: l
            },
            o
          ),
          c
        );
        s.render = oi(i, a);
      }
    }
    e.render = s.render || xe, Tr && Tr(e);
  }
  {
    const i = ln(e);
    Nt();
    try {
      qh(e);
    } finally {
      xt(), i();
    }
  }
}
const Rd = {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function Ta(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rd),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function vs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Gr(uc(e.exposed)), {
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
function Pd(e) {
  return G(e) && "__vccOpts" in e;
}
const Ca = (e, t) => Ku(e, t, On);
function Aa(e, t, n) {
  const s = arguments.length;
  return s === 2 ? le(t) && !B(t) ? Ot(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && Ot(n) && (n = [n]), fe(e, t, n));
}
function kd() {
}
function Md(e, t, n, s) {
  const i = n[s];
  if (i && Na(i, e))
    return i;
  const r = t();
  return r.memo = e.slice(), r.cacheIndex = s, n[s] = r;
}
function Na(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (De(n[s], t[s]))
      return !1;
  return on > 0 && ke && ke.push(e), !0;
}
const xa = "3.5.18", Ld = xe, Dd = Qu, Fd = _n, Vd = vc, $d = {
  createComponentInstance: _a,
  setupComponent: Sa,
  renderComponentRoot: Us,
  setCurrentRenderingInstance: ls,
  isVNode: Ot,
  normalizeVNode: He,
  getComponentPublicInstance: vs,
  ensureValidVNode: no,
  pushWarningContext: Yu,
  popWarningContext: Xu
}, Bd = $d, Hd = null, Ud = null, jd = null;
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ar;
const tl = typeof window < "u" && window.trustedTypes;
if (tl)
  try {
    Ar = /* @__PURE__ */ tl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const wa = Ar ? (e) => Ar.createHTML(e) : (e) => e, Kd = "http://www.w3.org/2000/svg", Wd = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, nl = vt && /* @__PURE__ */ vt.createElement("template"), qd = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? vt.createElementNS(Kd, e) : t === "mathml" ? vt.createElementNS(Wd, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
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
      nl.innerHTML = wa(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = nl.content;
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
}, Pt = "transition", jn = "animation", Rn = Symbol("_vtc"), Ia = {
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
}, Oa = /* @__PURE__ */ te(
  {},
  Zr,
  Ia
), Gd = (e) => (e.displayName = "Transition", e.props = Oa, e), Jd = /* @__PURE__ */ Gd(
  (e, { slots: t }) => Aa(wc, Ra(e), t)
), Yt = (e, t = []) => {
  B(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, sl = (e) => e ? B(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ra(e) {
  const t = {};
  for (const E in e)
    E in Ia || (t[E] = e[E]);
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
    appearActiveClass: a = o,
    appearToClass: f = l,
    leaveFromClass: u = `${n}-leave-from`,
    leaveActiveClass: d = `${n}-leave-active`,
    leaveToClass: p = `${n}-leave-to`
  } = e, b = Yd(i), _ = b && b[0], M = b && b[1], {
    onBeforeEnter: x,
    onEnter: A,
    onEnterCancelled: g,
    onLeave: y,
    onLeaveCancelled: v,
    onBeforeAppear: w = x,
    onAppear: V = A,
    onAppearCancelled: O = g
  } = t, S = (E, D, W, J) => {
    E._enterCancelled = J, Mt(E, D ? f : l), Mt(E, D ? a : o), W && W();
  }, C = (E, D) => {
    E._isLeaving = !1, Mt(E, u), Mt(E, p), Mt(E, d), D && D();
  }, k = (E) => (D, W) => {
    const J = E ? V : A, U = () => S(D, E, W);
    Yt(J, [D, U]), il(() => {
      Mt(D, E ? c : r), dt(D, E ? f : l), sl(J) || rl(D, s, _, U);
    });
  };
  return te(t, {
    onBeforeEnter(E) {
      Yt(x, [E]), dt(E, r), dt(E, o);
    },
    onBeforeAppear(E) {
      Yt(w, [E]), dt(E, c), dt(E, a);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(E, D) {
      E._isLeaving = !0;
      const W = () => C(E, D);
      dt(E, u), E._enterCancelled ? (dt(E, d), Nr()) : (Nr(), dt(E, d)), il(() => {
        E._isLeaving && (Mt(E, u), dt(E, p), sl(y) || rl(E, s, M, W));
      }), Yt(y, [E, W]);
    },
    onEnterCancelled(E) {
      S(E, !1, void 0, !0), Yt(g, [E]);
    },
    onAppearCancelled(E) {
      S(E, !0, void 0, !0), Yt(O, [E]);
    },
    onLeaveCancelled(E) {
      C(E), Yt(v, [E]);
    }
  });
}
function Yd(e) {
  if (e == null)
    return null;
  if (le(e))
    return [sr(e.enter), sr(e.leave)];
  {
    const t = sr(e);
    return [t, t];
  }
}
function sr(e) {
  return Xs(e);
}
function dt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Rn] || (e[Rn] = /* @__PURE__ */ new Set())).add(t);
}
function Mt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Rn];
  n && (n.delete(t), n.size || (e[Rn] = void 0));
}
function il(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Xd = 0;
function rl(e, t, n, s) {
  const i = e._endId = ++Xd, r = () => {
    i === e._endId && s();
  };
  if (n != null)
    return setTimeout(r, n);
  const { type: o, timeout: l, propCount: c } = Pa(e, t);
  if (!o)
    return s();
  const a = o + "end";
  let f = 0;
  const u = () => {
    e.removeEventListener(a, d), r();
  }, d = (p) => {
    p.target === e && ++f >= c && u();
  };
  setTimeout(() => {
    f < c && u();
  }, l + 1), e.addEventListener(a, d);
}
function Pa(e, t) {
  const n = window.getComputedStyle(e), s = (b) => (n[b] || "").split(", "), i = s(`${Pt}Delay`), r = s(`${Pt}Duration`), o = ol(i, r), l = s(`${jn}Delay`), c = s(`${jn}Duration`), a = ol(l, c);
  let f = null, u = 0, d = 0;
  t === Pt ? o > 0 && (f = Pt, u = o, d = r.length) : t === jn ? a > 0 && (f = jn, u = a, d = c.length) : (u = Math.max(o, a), f = u > 0 ? o > a ? Pt : jn : null, d = f ? f === Pt ? r.length : c.length : 0);
  const p = f === Pt && /\b(transform|all)(,|$)/.test(
    s(`${Pt}Property`).toString()
  );
  return {
    type: f,
    timeout: u,
    propCount: d,
    hasTransform: p
  };
}
function ol(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ll(n) + ll(e[s])));
}
function ll(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Nr() {
  return document.body.offsetHeight;
}
function Zd(e, t, n) {
  const s = e[Rn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const li = Symbol("_vod"), ka = Symbol("_vsh"), Ma = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[li] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Kn(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Kn(e, !0), s.enter(e)) : s.leave(e, () => {
      Kn(e, !1);
    }) : Kn(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Kn(e, t);
  }
};
function Kn(e, t) {
  e.style.display = t ? e[li] : "none", e[ka] = !t;
}
function zd() {
  Ma.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const La = Symbol("");
function Qd(e) {
  const t = We();
  if (!t)
    return;
  const n = t.ut = (i = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((r) => ci(r, i));
  }, s = () => {
    const i = e(t.proxy);
    t.ce ? ci(t.ce, i) : xr(t.subTree, i), n(i);
  };
  Qr(() => {
    rs(s);
  }), bs(() => {
    xn(s, xe, { flush: "post" });
    const i = new MutationObserver(s);
    i.observe(t.subTree.el.parentNode, { childList: !0 }), Fi(() => i.disconnect());
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
    ci(e.el, t);
  else if (e.type === be)
    e.children.forEach((n) => xr(n, t));
  else if (e.type === nn) {
    let { el: n, anchor: s } = e;
    for (; n && (ci(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function ci(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const i in t) {
      const r = au(t[i]);
      n.setProperty(`--${i}`, r), s += `--${i}: ${r};`;
    }
    n[La] = s;
  }
}
const ep = /(^|;)\s*display\s*:/;
function tp(e, t, n) {
  const s = e.style, i = Z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (Z(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && Ks(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && Ks(s, o, "");
    for (const o in n)
      o === "display" && (r = !0), Ks(s, o, n[o]);
  } else if (i) {
    if (t !== n) {
      const o = s[La];
      o && (n += ";" + o), s.cssText = n, r = ep.test(n);
    }
  } else t && e.removeAttribute("style");
  li in e && (e[li] = r ? s.display : "", e[ka] && (s.display = "none"));
}
const cl = /\s*!important$/;
function Ks(e, t, n) {
  if (B(n))
    n.forEach((s) => Ks(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = np(e, t);
    cl.test(n) ? e.setProperty(
      Ue(s),
      n.replace(cl, ""),
      "important"
    ) : e[s] = n;
  }
}
const al = ["Webkit", "Moz", "ms"], ir = {};
function np(e, t) {
  const n = ir[t];
  if (n)
    return n;
  let s = ue(t);
  if (s !== "filter" && s in e)
    return ir[t] = s;
  s = un(s);
  for (let i = 0; i < al.length; i++) {
    const r = al[i] + s;
    if (r in e)
      return ir[t] = r;
  }
  return t;
}
const fl = "http://www.w3.org/1999/xlink";
function ul(e, t, n, s, i, r = lu(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fl, t.slice(6, t.length)) : e.setAttributeNS(fl, t, n) : n == null || r && !Wl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Ke(n) ? String(n) : n
  );
}
function hl(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? wa(n) : n);
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
    l === "boolean" ? n = Wl(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(i || t);
}
function Ct(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function sp(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const dl = Symbol("_vei");
function ip(e, t, n, s, i = null) {
  const r = e[dl] || (e[dl] = {}), o = r[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = rp(t);
    if (s) {
      const a = r[t] = cp(
        s,
        i
      );
      Ct(e, l, a, c);
    } else o && (sp(e, l, o, c), r[t] = void 0);
  }
}
const pl = /(?:Once|Passive|Capture)$/;
function rp(e) {
  let t;
  if (pl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(pl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ue(e.slice(2)), t];
}
let rr = 0;
const op = /* @__PURE__ */ Promise.resolve(), lp = () => rr || (op.then(() => rr = 0), rr = Date.now());
function cp(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    it(
      ap(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = lp(), n;
}
function ap(e, t) {
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
const gl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fp = (e, t, n, s, i, r) => {
  const o = i === "svg";
  t === "class" ? Zd(e, s, o) : t === "style" ? tp(e, n, s) : an(t) ? Vr(t) || ip(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : up(e, t, s, o)) ? (hl(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ul(e, t, s, o, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Z(s)) ? hl(e, ue(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ul(e, t, s, o));
};
function up(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gl(t) && G(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gl(t) && Z(n) ? !1 : t in e;
}
const ml = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Es(e, t, n) {
  const s = /* @__PURE__ */ ki(e, t);
  bi(s) && te(s, t);
  class i extends Bi {
    constructor(o) {
      super(s, o, n);
    }
  }
  return i.def = s, i;
}
/*! #__NO_SIDE_EFFECTS__ */
const hp = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Es(e, t, Ga), dp = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Bi extends dp {
  constructor(t, n = {}, s = wr) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== wr ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Bi) {
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
    this._connected = !1, Oi(() => {
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
          const a = r[c];
          (a === Number || a && a.type === Number) && (c in this._props && (this._props[c] = Xs(this._props[c])), (l || (l = /* @__PURE__ */ Object.create(null)))[ue(c)] = !0);
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
          get: () => Ii(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = B(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(ue))
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
    let s = n ? this.getAttribute(t) : ml;
    const i = ue(t);
    n && this._numberProps && this._numberProps[i] && (s = Xs(s)), this._setProp(i, s, !1, !0);
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
    if (n !== this._props[t] && (n === ml ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const r = this._ob;
      r && r.disconnect(), n === !0 ? this.setAttribute(Ue(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ue(t), n + "") : n || this.removeAttribute(Ue(t)), r && r.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), qa(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = fe(this._def, te(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const i = (r, o) => {
        this.dispatchEvent(
          new CustomEvent(
            r,
            bi(o[0]) ? te({ detail: o }, o[0]) : { detail: o }
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
            const a = n + "-s", f = document.createTreeWalker(c, 1);
            c.setAttribute(a, "");
            let u;
            for (; u = f.nextNode(); )
              u.setAttribute(a, "");
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
function Da(e) {
  const t = We(), n = t && t.ce;
  return n || null;
}
function pp() {
  const e = Da();
  return e && e.shadowRoot;
}
function gp(e = "$style") {
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
const Fa = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap(), ai = Symbol("_moveCb"), yl = Symbol("_enterCb"), mp = (e) => (delete e.props.mode, e), yp = /* @__PURE__ */ mp({
  name: "TransitionGroup",
  props: /* @__PURE__ */ te({}, Oa, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = We(), s = Xr();
    let i, r;
    return Li(() => {
      if (!i.length)
        return;
      const o = e.moveClass || `${e.name || "v"}-move`;
      if (!Ep(
        i[0].el,
        n.vnode.el,
        o
      )) {
        i = [];
        return;
      }
      i.forEach(bp), i.forEach(Sp);
      const l = i.filter(vp);
      Nr(), l.forEach((c) => {
        const a = c.el, f = a.style;
        dt(a, o), f.transform = f.webkitTransform = f.transitionDuration = "";
        const u = a[ai] = (d) => {
          d && d.target !== a || (!d || /transform$/.test(d.propertyName)) && (a.removeEventListener("transitionend", u), a[ai] = null, Mt(a, o));
        };
        a.addEventListener("transitionend", u);
      }), i = [];
    }), () => {
      const o = se(e), l = Ra(o);
      let c = o.tag || be;
      if (i = [], r)
        for (let a = 0; a < r.length; a++) {
          const f = r[a];
          f.el && f.el instanceof Element && (i.push(f), It(
            f,
            In(
              f,
              l,
              s,
              n
            )
          ), Fa.set(
            f,
            f.el.getBoundingClientRect()
          ));
        }
      r = t.default ? Pi(t.default()) : [];
      for (let a = 0; a < r.length; a++) {
        const f = r[a];
        f.key != null && It(
          f,
          In(f, l, s, n)
        );
      }
      return fe(c, null, r);
    };
  }
}), _p = yp;
function bp(e) {
  const t = e.el;
  t[ai] && t[ai](), t[yl] && t[yl]();
}
function Sp(e) {
  Va.set(e, e.el.getBoundingClientRect());
}
function vp(e) {
  const t = Fa.get(e), n = Va.get(e), s = t.left - n.left, i = t.top - n.top;
  if (s || i) {
    const r = e.el.style;
    return r.transform = r.webkitTransform = `translate(${s}px,${i}px)`, r.transitionDuration = "0s", e;
  }
}
function Ep(e, t, n) {
  const s = e.cloneNode(), i = e[Rn];
  i && i.forEach((l) => {
    l.split(/\s+/).forEach((c) => c && s.classList.remove(c));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const r = t.nodeType === 1 ? t : t.parentNode;
  r.appendChild(s);
  const { hasTransform: o } = Pa(s);
  return r.removeChild(s), o;
}
const Gt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return B(t) ? (n) => Tn(t, n) : t;
};
function Tp(e) {
  e.target.composing = !0;
}
function _l(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const st = Symbol("_assign"), fi = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
    e[st] = Gt(i);
    const r = s || i.props && i.props.type === "number";
    Ct(e, t ? "change" : "input", (o) => {
      if (o.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = Ys(l)), e[st](l);
    }), n && Ct(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ct(e, "compositionstart", Tp), Ct(e, "compositionend", _l), Ct(e, "change", _l));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: i, number: r } }, o) {
    if (e[st] = Gt(o), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? Ys(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || i && e.value.trim() === c) || (e.value = c));
  }
}, ao = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[st] = Gt(n), Ct(e, "change", () => {
      const s = e._modelValue, i = Pn(e), r = e.checked, o = e[st];
      if (B(s)) {
        const l = Ei(s, i), c = l !== -1;
        if (r && !c)
          o(s.concat(i));
        else if (!r && c) {
          const a = [...s];
          a.splice(l, 1), o(a);
        }
      } else if (fn(s)) {
        const l = new Set(s);
        r ? l.add(i) : l.delete(i), o(l);
      } else
        o(Ba(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: bl,
  beforeUpdate(e, t, n) {
    e[st] = Gt(n), bl(e, t, n);
  }
};
function bl(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let i;
  if (B(t))
    i = Ei(t, s.props.value) > -1;
  else if (fn(t))
    i = t.has(s.props.value);
  else {
    if (t === n) return;
    i = Wt(t, Ba(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const fo = {
  created(e, { value: t }, n) {
    e.checked = Wt(t, n.props.value), e[st] = Gt(n), Ct(e, "change", () => {
      e[st](Pn(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[st] = Gt(s), t !== n && (e.checked = Wt(t, s.props.value));
  }
}, $a = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const i = fn(t);
    Ct(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (o) => o.selected).map(
        (o) => n ? Ys(Pn(o)) : Pn(o)
      );
      e[st](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, Oi(() => {
        e._assigning = !1;
      });
    }), e[st] = Gt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Sl(e, t);
  },
  beforeUpdate(e, t, n) {
    e[st] = Gt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Sl(e, t);
  }
};
function Sl(e, t) {
  const n = e.multiple, s = B(t);
  if (!(n && !s && !fn(t))) {
    for (let i = 0, r = e.options.length; i < r; i++) {
      const o = e.options[i], l = Pn(o);
      if (n)
        if (s) {
          const c = typeof l;
          c === "string" || c === "number" ? o.selected = t.some((a) => String(a) === String(l)) : o.selected = Ei(t, l) > -1;
        } else
          o.selected = t.has(l);
      else if (Wt(Pn(o), t)) {
        e.selectedIndex !== i && (e.selectedIndex = i);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Pn(e) {
  return "_value" in e ? e._value : e.value;
}
function Ba(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Ha = {
  created(e, t, n) {
    Fs(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Fs(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    Fs(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    Fs(e, t, n, s, "updated");
  }
};
function Ua(e, t) {
  switch (e) {
    case "SELECT":
      return $a;
    case "TEXTAREA":
      return fi;
    default:
      switch (t) {
        case "checkbox":
          return ao;
        case "radio":
          return fo;
        default:
          return fi;
      }
  }
}
function Fs(e, t, n, s, i) {
  const o = Ua(
    e.tagName,
    n.props && n.props.type
  )[i];
  o && o(e, t, n, s);
}
function Cp() {
  fi.getSSRProps = ({ value: e }) => ({ value: e }), fo.getSSRProps = ({ value: e }, t) => {
    if (t.props && Wt(t.props.value, e))
      return { checked: !0 };
  }, ao.getSSRProps = ({ value: e }, t) => {
    if (B(e)) {
      if (t.props && Ei(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (fn(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Ha.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Ua(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Ap = ["ctrl", "shift", "alt", "meta"], Np = {
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
  exact: (e, t) => Ap.some((n) => e[`${n}Key`] && !t.includes(n))
}, xp = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (i, ...r) => {
    for (let o = 0; o < t.length; o++) {
      const l = Np[t[o]];
      if (l && l(i, t)) return;
    }
    return e(i, ...r);
  });
}, wp = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ip = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (i) => {
    if (!("key" in i))
      return;
    const r = Ue(i.key);
    if (t.some(
      (o) => o === r || wp[o] === r
    ))
      return e(i);
  });
}, ja = /* @__PURE__ */ te({ patchProp: fp }, qd);
let es, vl = !1;
function Ka() {
  return es || (es = ea(ja));
}
function Wa() {
  return es = vl ? es : ta(ja), vl = !0, es;
}
const qa = (...e) => {
  Ka().render(...e);
}, Op = (...e) => {
  Wa().hydrate(...e);
}, wr = (...e) => {
  const t = Ka().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ya(s);
    if (!i) return;
    const r = t._component;
    !G(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const o = n(i, !1, Ja(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), o;
  }, t;
}, Ga = (...e) => {
  const t = Wa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const i = Ya(s);
    if (i)
      return n(i, !0, Ja(i));
  }, t;
};
function Ja(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ya(e) {
  return Z(e) ? document.querySelector(e) : e;
}
let El = !1;
const Rp = () => {
  El || (El = !0, Cp(), zd());
}, Pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: wc,
  BaseTransitionPropsValidators: Zr,
  Comment: _e,
  DeprecationTypes: jd,
  EffectScope: Ur,
  ErrorCodes: zu,
  ErrorTypeStrings: Dd,
  Fragment: be,
  KeepAlive: Ah,
  ReactiveEffect: ns,
  Static: nn,
  Suspense: yd,
  Teleport: lh,
  Text: jt,
  TrackOpTypes: Wu,
  Transition: Jd,
  TransitionGroup: _p,
  TriggerOpTypes: qu,
  VueElement: Bi,
  assertNumber: Zu,
  callWithAsyncErrorHandling: it,
  callWithErrorHandling: $n,
  camelize: ue,
  capitalize: un,
  cloneVNode: yt,
  compatUtils: Ud,
  computed: Ca,
  createApp: wr,
  createBlock: fs,
  createCommentVNode: Nd,
  createElementBlock: qt,
  createElementVNode: mt,
  createHydrationRenderer: ta,
  createPropsRestProxy: Kh,
  createRenderer: ea,
  createSSRApp: Ga,
  createSlots: Oh,
  createStaticVNode: Ad,
  createTextVNode: lo,
  createVNode: fe,
  customRef: pc,
  defineAsyncComponent: Th,
  defineComponent: ki,
  defineCustomElement: Es,
  defineEmits: Mh,
  defineExpose: Lh,
  defineModel: Vh,
  defineOptions: Dh,
  defineProps: kh,
  defineSSRCustomElement: hp,
  defineSlots: Fh,
  devtools: Fd,
  effect: du,
  effectScope: fu,
  getCurrentInstance: We,
  getCurrentScope: Jl,
  getCurrentWatcher: Gu,
  getTransitionRawChildren: Pi,
  guardReactiveProps: ma,
  h: Aa,
  handleError: hn,
  hasInjectionContext: Qh,
  hydrate: Op,
  hydrateOnIdle: yh,
  hydrateOnInteraction: vh,
  hydrateOnMediaQuery: Sh,
  hydrateOnVisible: bh,
  initCustomFormatter: kd,
  initDirectivesForSSR: Rp,
  inject: zn,
  isMemoSame: Na,
  isProxy: wi,
  isReactive: Ht,
  isReadonly: wt,
  isRef: Ee,
  isRuntimeOnly: Od,
  isShallow: Xe,
  isVNode: Ot,
  markRaw: uc,
  mergeDefaults: Uh,
  mergeModels: jh,
  mergeProps: ya,
  nextTick: Oi,
  normalizeClass: Vn,
  normalizeProps: Zf,
  normalizeStyle: ys,
  onActivated: Oc,
  onBeforeMount: kc,
  onBeforeUnmount: Di,
  onBeforeUpdate: Qr,
  onDeactivated: Rc,
  onErrorCaptured: Fc,
  onMounted: bs,
  onRenderTracked: Dc,
  onRenderTriggered: Lc,
  onScopeDispose: uu,
  onServerPrefetch: Mc,
  onUnmounted: Fi,
  onUpdated: Li,
  onWatcherCleanup: mc,
  openBlock: Ze,
  popScopeId: sh,
  provide: Wc,
  proxyRefs: Gr,
  pushScopeId: nh,
  queuePostFlushCb: rs,
  reactive: Ni,
  readonly: qr,
  ref: en,
  registerRuntimeCompiler: va,
  render: qa,
  renderList: Bc,
  renderSlot: Hc,
  resolveComponent: wh,
  resolveDirective: Ih,
  resolveDynamicComponent: $c,
  resolveFilter: Hd,
  resolveTransitionHooks: In,
  setBlockTracking: br,
  setDevtoolsHook: Vd,
  setTransitionHooks: It,
  shallowReactive: fc,
  shallowReadonly: ku,
  shallowRef: hc,
  ssrContextKey: ra,
  ssrUtils: Bd,
  stop: pu,
  toDisplayString: Cn,
  toHandlerKey: En,
  toHandlers: Rh,
  toRaw: se,
  toRef: Uu,
  toRefs: $u,
  toValue: Du,
  transformVNodeArgs: Td,
  triggerRef: Lu,
  unref: Ii,
  useAttrs: Hh,
  useCssModule: gp,
  useCssVars: Qd,
  useHost: Da,
  useId: ah,
  useModel: fd,
  useSSRContext: oa,
  useShadowRoot: pp,
  useSlots: Bh,
  useTemplateRef: fh,
  useTransitionState: Xr,
  vModelCheckbox: ao,
  vModelDynamic: Ha,
  vModelRadio: fo,
  vModelSelect: $a,
  vModelText: fi,
  vShow: Ma,
  version: xa,
  warn: Ld,
  watch: xn,
  watchEffect: ld,
  watchPostEffect: cd,
  watchSyncEffect: la,
  withAsyncContext: Wh,
  withCtx: Yr,
  withDefaults: $h,
  withDirectives: rh,
  withKeys: Ip,
  withMemo: Md,
  withModifiers: xp,
  withScopeId: ih
}, Symbol.toStringTag, { value: "Module" }));
/**
* @vue/compiler-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const us = Symbol(""), ts = Symbol(""), uo = Symbol(""), ui = Symbol(""), Xa = Symbol(
  ""
), cn = Symbol(""), Za = Symbol(""), za = Symbol(
  ""
), ho = Symbol(""), po = Symbol(
  ""
), Ts = Symbol(
  ""
), go = Symbol(
  ""
), Qa = Symbol(
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
), vo = Symbol(""), ef = Symbol(""), tf = Symbol(""), Hi = Symbol(
  ""
), hi = Symbol(""), Eo = Symbol(
  ""
), To = Symbol(
  ""
), hs = Symbol(
  ""
), Cs = Symbol(
  ""
), Co = Symbol(""), Ir = Symbol(""), kp = Symbol(""), Or = Symbol(
  ""
), di = Symbol(
  ""
), Mp = Symbol(""), Lp = Symbol(""), Ao = Symbol(""), Dp = Symbol(""), Fp = Symbol(""), No = Symbol(""), nf = Symbol(""), kn = {
  [us]: "Fragment",
  [ts]: "Teleport",
  [uo]: "Suspense",
  [ui]: "KeepAlive",
  [Xa]: "BaseTransition",
  [cn]: "openBlock",
  [Za]: "createBlock",
  [za]: "createElementBlock",
  [ho]: "createVNode",
  [po]: "createElementVNode",
  [Ts]: "createCommentVNode",
  [go]: "createTextVNode",
  [Qa]: "createStaticVNode",
  [mo]: "resolveComponent",
  [yo]: "resolveDynamicComponent",
  [_o]: "resolveDirective",
  [bo]: "resolveFilter",
  [So]: "withDirectives",
  [vo]: "renderList",
  [ef]: "renderSlot",
  [tf]: "createSlots",
  [Hi]: "toDisplayString",
  [hi]: "mergeProps",
  [Eo]: "normalizeClass",
  [To]: "normalizeStyle",
  [hs]: "normalizeProps",
  [Cs]: "guardReactiveProps",
  [Co]: "toHandlers",
  [Ir]: "camelize",
  [kp]: "capitalize",
  [Or]: "toHandlerKey",
  [di]: "setBlockTracking",
  [Mp]: "pushScopeId",
  [Lp]: "popScopeId",
  [Ao]: "withCtx",
  [Dp]: "unref",
  [Fp]: "isRef",
  [No]: "withMemo",
  [nf]: "isMemoSame"
};
function Vp(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    kn[t] = e[t];
  });
}
const Qe = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function $p(e, t = "") {
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
function ds(e, t, n, s, i, r, o, l = !1, c = !1, a = !1, f = Qe) {
  return e && (l ? (e.helper(cn), e.helper(Dn(e.inSSR, a))) : e.helper(Ln(e.inSSR, a)), o && e.helper(So)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: i,
    dynamicProps: r,
    directives: o,
    isBlock: l,
    disableTracking: c,
    isComponent: a,
    loc: f
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
function me(e, t) {
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
function Mn(e, t = void 0, n = !1, s = !1, i = Qe) {
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
function Bp(e, t, n = !1, s = !1) {
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
function Hp(e) {
  return {
    type: 21,
    body: e,
    loc: Qe
  };
}
function Ln(e, t) {
  return e || t ? ho : po;
}
function Dn(e, t) {
  return e || t ? Za : za;
}
function xo(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Ln(s, e.isComponent)), t(cn), t(Dn(s, e.isComponent)));
}
const Tl = new Uint8Array([123, 123]), Cl = new Uint8Array([125, 125]);
function Al(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Je(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function kt(e) {
  return e === 47 || e === 62 || Je(e);
}
function pi(e) {
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
class Up {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Tl, this.delimiterClose = Cl, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Tl, this.delimiterClose = Cl;
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
      kt(t)
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
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : Al(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    kt(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if (kt(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(pi("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    Je(t) || (t === 62 ? (this.state = 1, this.sectionStart = this.index + 1) : (this.state = Al(t) ? 9 : 27, this.sectionStart = this.index));
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
    (t === 61 || kt(t)) && (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t));
  }
  stateInDirName(t) {
    t === 61 || kt(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || kt(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || kt(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t));
  }
  stateInDirModifier(t) {
    t === 61 || kt(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
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
function Nl(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function rn(e, t) {
  const n = Nl("MODE", t), s = Nl(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function ps(e, t, n, ...s) {
  return rn(e, t);
}
function wo(e) {
  throw e;
}
function sf(e) {
}
function de(e, t, n, s) {
  const i = `https://vuejs.org/error-reference/#compiler-${e}`, r = new SyntaxError(String(i));
  return r.code = e, r.loc = t, r;
}
const je = (e) => e.type === 4 && e.isStatic;
function rf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return ts;
    case "Suspense":
    case "suspense":
      return uo;
    case "KeepAlive":
    case "keep-alive":
      return ui;
    case "BaseTransition":
    case "base-transition":
      return Xa;
  }
}
const jp = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Io = (e) => !jp.test(e), Kp = /[A-Za-z_$\xA0-\uFFFF]/, Wp = /[\.\?\w$\xA0-\uFFFF]/, qp = /\s+[.[]\s*|\s*[.[]\s+/g, of = (e) => e.type === 4 ? e.content : e.loc.source, Gp = (e) => {
  const t = of(e).trim().replace(qp, (l) => l.trim());
  let n = 0, s = [], i = 0, r = 0, o = null;
  for (let l = 0; l < t.length; l++) {
    const c = t.charAt(l);
    switch (n) {
      case 0:
        if (c === "[")
          s.push(n), n = 1, i++;
        else if (c === "(")
          s.push(n), n = 2, r++;
        else if (!(l === 0 ? Kp : Wp).test(c))
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
}, lf = Gp, Jp = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, Yp = (e) => Jp.test(of(e)), Xp = Yp;
function tt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const i = e.props[s];
    if (i.type === 7 && (n || i.exp) && (Z(t) ? i.name === t : t.test(i.name)))
      return i;
  }
}
function Ui(e, t, n = !1, s = !1) {
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
function Zp(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function or(e) {
  return e.type === 5 || e.type === 2;
}
function xl(e) {
  return e.type === 7 && e.name === "pre";
}
function zp(e) {
  return e.type === 7 && e.name === "slot";
}
function gi(e) {
  return e.type === 1 && e.tagType === 3;
}
function mi(e) {
  return e.type === 1 && e.tagType === 2;
}
const Qp = /* @__PURE__ */ new Set([hs, Cs]);
function cf(e, t = []) {
  if (e && !Z(e) && e.type === 14) {
    const n = e.callee;
    if (!Z(n) && Qp.has(n))
      return cf(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function yi(e, t, n) {
  let s, i = e.type === 13 ? e.props : e.arguments[2], r = [], o;
  if (i && !Z(i) && i.type === 14) {
    const l = cf(i);
    i = l[0], r = l[1], o = r[r.length - 1];
  }
  if (i == null || Z(i))
    s = nt([t]);
  else if (i.type === 14) {
    const l = i.arguments[0];
    !Z(l) && l.type === 15 ? wl(t, l) || l.properties.unshift(t) : i.callee === Co ? s = ve(n.helper(hi), [
      nt([t]),
      i
    ]) : i.arguments.unshift(nt([t])), !s && (s = i);
  } else i.type === 15 ? (wl(t, i) || i.properties.unshift(t), s = i) : (s = ve(n.helper(hi), [
    nt([t]),
    i
  ]), o && o.callee === Cs && (o = r[r.length - 2]));
  e.type === 13 ? o ? o.arguments[0] = s : e.props = s : o ? o.arguments[0] = s : e.arguments[2] = s;
}
function wl(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (i) => i.key.type === 4 && i.key.content === s
    );
  }
  return n;
}
function gs(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function eg(e) {
  return e.type === 14 && e.callee === No ? e.arguments[1].returns : e;
}
const tg = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, af = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: Wn,
  isPreTag: Wn,
  isIgnoreNewlineTag: Wn,
  isCustomElement: Wn,
  onError: wo,
  onWarn: sf,
  comments: !1,
  prefixIdentifiers: !1
};
let re = af, ms = null, At = "", Re = null, Q = null, $e = "", St = -1, Xt = -1, Oo = 0, $t = !1, Pr = null;
const he = [], ge = new Up(he, {
  onerr: bt,
  ontext(e, t) {
    Vs(Te(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Vs(e, t, n);
  },
  oninterpolation(e, t) {
    if ($t)
      return Vs(Te(e, t), e, t);
    let n = e + ge.delimiterOpen.length, s = t - ge.delimiterClose.length;
    for (; Je(At.charCodeAt(n)); )
      n++;
    for (; Je(At.charCodeAt(s - 1)); )
      s--;
    let i = Te(n, s);
    i.includes("&") && (i = re.decodeEntities(i, !1)), kr({
      type: 5,
      content: qs(i, !1, ye(n, s)),
      loc: ye(e, t)
    });
  },
  onopentagname(e, t) {
    const n = Te(e, t);
    Re = {
      type: 1,
      tag: n,
      ns: re.getNamespace(n, he[0], re.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: ye(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    Ol(e);
  },
  onclosetag(e, t) {
    const n = Te(e, t);
    if (!re.isVoidTag(n)) {
      let s = !1;
      for (let i = 0; i < he.length; i++)
        if (he[i].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, i > 0 && bt(24, he[0].loc.start.offset);
          for (let o = 0; o <= i; o++) {
            const l = he.shift();
            Ws(l, t, o < i);
          }
          break;
        }
      s || bt(23, ff(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = Re.tag;
    Re.isSelfClosing = !0, Ol(e), he[0] && he[0].tag === t && Ws(he.shift(), e);
  },
  onattribname(e, t) {
    Q = {
      type: 6,
      name: Te(e, t),
      nameLoc: ye(e, t),
      value: void 0,
      loc: ye(e)
    };
  },
  ondirname(e, t) {
    const n = Te(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!$t && s === "" && bt(26, e), $t || s === "")
      Q = {
        type: 6,
        name: n,
        nameLoc: ye(e, t),
        value: void 0,
        loc: ye(e)
      };
    else if (Q = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [z("prop")] : [],
      loc: ye(e)
    }, s === "pre") {
      $t = ge.inVPre = !0, Pr = Re;
      const i = Re.props;
      for (let r = 0; r < i.length; r++)
        i[r].type === 7 && (i[r] = hg(i[r]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = Te(e, t);
    if ($t && !xl(Q))
      Q.name += n, zt(Q.nameLoc, t);
    else {
      const s = n[0] !== "[";
      Q.arg = qs(
        s ? n : n.slice(1, -1),
        s,
        ye(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = Te(e, t);
    if ($t && !xl(Q))
      Q.name += "." + n, zt(Q.nameLoc, t);
    else if (Q.name === "slot") {
      const s = Q.arg;
      s && (s.content += "." + n, zt(s.loc, t));
    } else {
      const s = z(n, !0, ye(e, t));
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
          Q.name === "class" && ($e = hf($e).trim()), e === 1 && !$e && bt(13, t), Q.value = {
            type: 2,
            content: $e,
            loc: e === 1 ? ye(St, Xt) : ye(St - 1, Xt + 1)
          }, ge.inSFCRoot && Re.tag === "template" && Q.name === "lang" && $e && $e !== "html" && ge.enterRCDATA(pi("</template"), 0);
        else {
          let n = 0;
          Q.exp = qs(
            $e,
            !1,
            ye(St, Xt),
            0,
            n
          ), Q.name === "for" && (Q.forParseResult = sg(Q.exp));
          let s = -1;
          Q.name === "bind" && (s = Q.modifiers.findIndex(
            (i) => i.content === "sync"
          )) > -1 && ps(
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
      loc: ye(e - 4, t + 3)
    });
  },
  onend() {
    const e = At.length;
    for (let t = 0; t < he.length; t++)
      Ws(he[t], e - 1), bt(24, he[t].loc.start.offset);
  },
  oncdata(e, t) {
    he[0].ns !== 0 ? Vs(Te(e, t), e, t) : bt(1, e - 9);
  },
  onprocessinginstruction(e) {
    (he[0] ? he[0].ns : re.ns) === 0 && bt(
      21,
      e - 1
    );
  }
}), Il = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ng = /^\(|\)$/g;
function sg(e) {
  const t = e.loc, n = e.content, s = n.match(tg);
  if (!s) return;
  const [, i, r] = s, o = (u, d, p = !1) => {
    const b = t.start.offset + d, _ = b + u.length;
    return qs(
      u,
      !1,
      ye(b, _),
      0,
      p ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: o(r.trim(), n.indexOf(r, i.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let c = i.trim().replace(ng, "").trim();
  const a = i.indexOf(c), f = c.match(Il);
  if (f) {
    c = c.replace(Il, "").trim();
    const u = f[1].trim();
    let d;
    if (u && (d = n.indexOf(u, a + c.length), l.key = o(u, d, !0)), f[2]) {
      const p = f[2].trim();
      p && (l.index = o(
        p,
        n.indexOf(
          p,
          l.key ? d + u.length : a + c.length
        ),
        !0
      ));
    }
  }
  return c && (l.value = o(c, a, !0)), l;
}
function Te(e, t) {
  return At.slice(e, t);
}
function Ol(e) {
  ge.inSFCRoot && (Re.innerLoc = ye(e + 1, e + 1)), kr(Re);
  const { tag: t, ns: n } = Re;
  n === 0 && re.isPreTag(t) && Oo++, re.isVoidTag(t) ? Ws(Re, e) : (he.unshift(Re), (n === 1 || n === 2) && (ge.inXML = !0)), Re = null;
}
function Vs(e, t, n) {
  {
    const r = he[0] && he[0].tag;
    r !== "script" && r !== "style" && e.includes("&") && (e = re.decodeEntities(e, !1));
  }
  const s = he[0] || ms, i = s.children[s.children.length - 1];
  i && i.type === 2 ? (i.content += e, zt(i.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: ye(t, n)
  });
}
function Ws(e, t, n = !1) {
  n ? zt(e.loc, ff(t, 60)) : zt(e.loc, ig(t, 62) + 1), ge.inSFCRoot && (e.children.length ? e.innerLoc.end = te({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = te({}, e.innerLoc.start), e.innerLoc.source = Te(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: i, children: r } = e;
  if ($t || (s === "slot" ? e.tagType = 2 : Rl(e) ? e.tagType = 3 : og(e) && (e.tagType = 1)), ge.inRCDATA || (e.children = uf(r)), i === 0 && re.isIgnoreNewlineTag(s)) {
    const o = r[0];
    o && o.type === 2 && (o.content = o.content.replace(/^\r?\n/, ""));
  }
  i === 0 && re.isPreTag(s) && Oo--, Pr === e && ($t = ge.inVPre = !1, Pr = null), ge.inXML && (he[0] ? he[0].ns : re.ns) === 0 && (ge.inXML = !1);
  {
    const o = e.props;
    if (!ge.inSFCRoot && rn(
      "COMPILER_NATIVE_TEMPLATE",
      re
    ) && e.tag === "template" && !Rl(e)) {
      const c = he[0] || ms, a = c.children.indexOf(e);
      c.children.splice(a, 1, ...e.children);
    }
    const l = o.find(
      (c) => c.type === 6 && c.name === "inline-template"
    );
    l && ps(
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
function ig(e, t) {
  let n = e;
  for (; At.charCodeAt(n) !== t && n < At.length - 1; ) n++;
  return n;
}
function ff(e, t) {
  let n = e;
  for (; At.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const rg = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function Rl({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && rg.has(t[n].name))
        return !0;
  }
  return !1;
}
function og({ tag: e, props: t }) {
  if (re.isCustomElement(e))
    return !1;
  if (e === "component" || lg(e.charCodeAt(0)) || rf(e) || re.isBuiltInComponent && re.isBuiltInComponent(e) || re.isNativeTag && !re.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (ps(
          "COMPILER_IS_ON_ELEMENT",
          re,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Zt(s.arg, "is") && ps(
        "COMPILER_IS_ON_ELEMENT",
        re,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function lg(e) {
  return e > 64 && e < 91;
}
const cg = /\r\n/g;
function uf(e) {
  const t = re.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.type === 2)
      if (Oo)
        i.content = i.content.replace(cg, `
`);
      else if (ag(i.content)) {
        const r = e[s - 1] && e[s - 1].type, o = e[s + 1] && e[s + 1].type;
        !r || !o || t && (r === 3 && (o === 3 || o === 1) || r === 1 && (o === 3 || o === 1 && fg(i.content))) ? (n = !0, e[s] = null) : i.content = " ";
      } else t && (i.content = hf(i.content));
  }
  return n ? e.filter(Boolean) : e;
}
function ag(e) {
  for (let t = 0; t < e.length; t++)
    if (!Je(e.charCodeAt(t)))
      return !1;
  return !0;
}
function fg(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function hf(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    Je(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function kr(e) {
  (he[0] || ms).children.push(e);
}
function ye(e, t) {
  return {
    start: ge.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : ge.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : Te(e, t)
  };
}
function ug(e) {
  return ye(e.start.offset, e.end.offset);
}
function zt(e, t) {
  e.end = ge.getPos(t), e.source = Te(e.start.offset, t);
}
function hg(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: ye(
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
function qs(e, t = !1, n, s = 0, i = 0) {
  return z(e, t, n, s);
}
function bt(e, t, n) {
  re.onError(
    de(e, ye(t, t))
  );
}
function dg() {
  ge.reset(), Re = null, Q = null, $e = "", St = -1, Xt = -1, he.length = 0;
}
function pg(e, t) {
  if (dg(), At = e, re = te({}, af), t) {
    let i;
    for (i in t)
      t[i] != null && (re[i] = t[i]);
  }
  ge.mode = re.parseMode === "html" ? 1 : re.parseMode === "sfc" ? 2 : 0, ge.inXML = re.ns === 1 || re.ns === 2;
  const n = t && t.delimiters;
  n && (ge.delimiterOpen = pi(n[0]), ge.delimiterClose = pi(n[1]));
  const s = ms = $p([], e);
  return ge.parse(At), s.loc = ye(0, e.length), s.children = uf(s.children), ms = null, s;
}
function gg(e, t) {
  Gs(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!df(e)
  );
}
function df(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !mi(t[0]) ? t[0] : null;
}
function Gs(e, t, n, s = !1, i = !1) {
  const { children: r } = e, o = [];
  for (let u = 0; u < r.length; u++) {
    const d = r[u];
    if (d.type === 1 && d.tagType === 0) {
      const p = s ? 0 : Ye(d, n);
      if (p > 0) {
        if (p >= 2) {
          d.codegenNode.patchFlag = -1, o.push(d);
          continue;
        }
      } else {
        const b = d.codegenNode;
        if (b.type === 13) {
          const _ = b.patchFlag;
          if ((_ === void 0 || _ === 512 || _ === 1) && gf(d, n) >= 2) {
            const M = mf(d);
            M && (b.props = n.hoist(M));
          }
          b.dynamicProps && (b.dynamicProps = n.hoist(b.dynamicProps));
        }
      }
    } else if (d.type === 12 && (s ? 0 : Ye(d, n)) >= 2) {
      d.codegenNode.type === 14 && d.codegenNode.arguments.length > 0 && d.codegenNode.arguments.push(
        "-1"
      ), o.push(d);
      continue;
    }
    if (d.type === 1) {
      const p = d.tagType === 1;
      p && n.scopes.vSlot++, Gs(d, e, n, !1, i), p && n.scopes.vSlot--;
    } else if (d.type === 11)
      Gs(d, e, n, d.children.length === 1, !0);
    else if (d.type === 9)
      for (let p = 0; p < d.branches.length; p++)
        Gs(
          d.branches[p],
          e,
          n,
          d.branches[p].children.length === 1,
          i
        );
  }
  let l = !1;
  const c = [];
  if (o.length === r.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && B(e.codegenNode.children))
      e.codegenNode.children = a(
        sn(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !B(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const u = f(e.codegenNode, "default");
      u && (c.push(n.cached.length), u.returns = a(
        sn(u.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !B(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const u = tt(e, "slot", !0), d = u && u.arg && f(t.codegenNode, u.arg);
      d && (c.push(n.cached.length), d.returns = a(
        sn(d.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const u of o)
      c.push(n.cached.length), u.codegenNode = n.cache(u.codegenNode);
  c.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !B(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    me(
      "__",
      z(JSON.stringify(c), !1)
    )
  );
  function a(u) {
    const d = n.cache(u);
    return i && n.hmr && (d.needArraySpread = !0), d;
  }
  function f(u, d) {
    if (u.children && !B(u.children) && u.children.type === 15) {
      const p = u.children.properties.find(
        (b) => b.key === d || b.key.content === d
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
        const l = gf(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < o && (o = l);
        for (let c = 0; c < e.children.length; c++) {
          const a = Ye(e.children[c], t);
          if (a === 0)
            return n.set(e, 0), 0;
          a < o && (o = a);
        }
        if (o > 1)
          for (let c = 0; c < e.props.length; c++) {
            const a = e.props[c];
            if (a.type === 7 && a.name === "bind" && a.exp) {
              const f = Ye(a.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < o && (o = f);
            }
          }
        if (i.isBlock) {
          for (let c = 0; c < e.props.length; c++)
            if (e.props[c].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(cn), t.removeHelper(
            Dn(t.inSSR, i.isComponent)
          ), i.isBlock = !1, t.helper(Ln(t.inSSR, i.isComponent));
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
const mg = /* @__PURE__ */ new Set([
  Eo,
  To,
  hs,
  Cs
]);
function pf(e, t) {
  if (e.type === 14 && !Z(e.callee) && mg.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Ye(n, t);
    if (n.type === 14)
      return pf(n, t);
  }
  return 0;
}
function gf(e, t) {
  let n = 3;
  const s = mf(e);
  if (s && s.type === 15) {
    const { properties: i } = s;
    for (let r = 0; r < i.length; r++) {
      const { key: o, value: l } = i[r], c = Ye(o, t);
      if (c === 0)
        return c;
      c < n && (n = c);
      let a;
      if (l.type === 4 ? a = Ye(l, t) : l.type === 14 ? a = pf(l, t) : a = 0, a === 0)
        return a;
      a < n && (n = a);
    }
  }
  return n;
}
function mf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function yg(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: i = !1,
  cacheHandlers: r = !1,
  nodeTransforms: o = [],
  directiveTransforms: l = {},
  transformHoist: c = null,
  isBuiltInComponent: a = xe,
  isCustomElement: f = xe,
  expressionPlugins: u = [],
  scopeId: d = null,
  slotted: p = !0,
  ssr: b = !1,
  inSSR: _ = !1,
  ssrCssVars: M = "",
  bindingMetadata: x = ee,
  inline: A = !1,
  isTS: g = !1,
  onError: y = wo,
  onWarn: v = sf,
  compatConfig: w
}) {
  const V = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), O = {
    // options
    filename: t,
    selfName: V && un(ue(V[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: i,
    cacheHandlers: r,
    nodeTransforms: o,
    directiveTransforms: l,
    transformHoist: c,
    isBuiltInComponent: a,
    isCustomElement: f,
    expressionPlugins: u,
    scopeId: d,
    slotted: p,
    ssr: b,
    inSSR: _,
    ssrCssVars: M,
    bindingMetadata: x,
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
      const C = O.helpers.get(S) || 0;
      return O.helpers.set(S, C + 1), S;
    },
    removeHelper(S) {
      const C = O.helpers.get(S);
      if (C) {
        const k = C - 1;
        k ? O.helpers.set(S, k) : O.helpers.delete(S);
      }
    },
    helperString(S) {
      return `_${kn[O.helper(S)]}`;
    },
    replaceNode(S) {
      O.parent.children[O.childIndex] = O.currentNode = S;
    },
    removeNode(S) {
      const C = O.parent.children, k = S ? C.indexOf(S) : O.currentNode ? O.childIndex : -1;
      !S || S === O.currentNode ? (O.currentNode = null, O.onNodeRemoved()) : O.childIndex > k && (O.childIndex--, O.onNodeRemoved()), O.parent.children.splice(k, 1);
    },
    onNodeRemoved: xe,
    addIdentifiers(S) {
    },
    removeIdentifiers(S) {
    },
    hoist(S) {
      Z(S) && (S = z(S)), O.hoists.push(S);
      const C = z(
        `_hoisted_${O.hoists.length}`,
        !1,
        S.loc,
        2
      );
      return C.hoisted = S, C;
    },
    cache(S, C = !1, k = !1) {
      const E = Bp(
        O.cached.length,
        S,
        C,
        k
      );
      return O.cached.push(E), E;
    }
  };
  return O.filters = /* @__PURE__ */ new Set(), O;
}
function _g(e, t) {
  const n = yg(e, t);
  ji(e, n), t.hoistStatic && gg(e, n), t.ssr || bg(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function bg(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const i = df(e);
    if (i && i.codegenNode) {
      const r = i.codegenNode;
      r.type === 13 && xo(r, t), e.codegenNode = r;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let i = 64;
    e.codegenNode = ds(
      t,
      n(us),
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
function Sg(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const i = e.children[n];
    Z(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, ji(i, t));
  }
}
function ji(e, t) {
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
      t.ssr || t.helper(Ts);
      break;
    case 5:
      t.ssr || t.helper(Hi);
      break;
    // for container types, further traverse downwards
    case 9:
      for (let r = 0; r < e.branches.length; r++)
        ji(e.branches[r], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Sg(e, t);
      break;
  }
  t.currentNode = e;
  let i = s.length;
  for (; i--; )
    s[i]();
}
function yf(e, t) {
  const n = Z(e) ? (s) => s === e : (s) => e.test(s);
  return (s, i) => {
    if (s.type === 1) {
      const { props: r } = s;
      if (s.tagType === 3 && r.some(zp))
        return;
      const o = [];
      for (let l = 0; l < r.length; l++) {
        const c = r[l];
        if (c.type === 7 && n(c.name)) {
          r.splice(l, 1), l--;
          const a = t(s, c, i);
          a && o.push(a);
        }
      }
      return o;
    }
  };
}
const Ki = "/*@__PURE__*/", _f = (e) => `${kn[e]}: _${kn[e]}`;
function vg(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: i = "template.vue.html",
  scopeId: r = null,
  optimizeImports: o = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: c = "vue",
  ssrRuntimeModuleName: a = "vue/server-renderer",
  ssr: f = !1,
  isTS: u = !1,
  inSSR: d = !1
}) {
  const p = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: i,
    scopeId: r,
    optimizeImports: o,
    runtimeGlobalName: l,
    runtimeModuleName: c,
    ssrRuntimeModuleName: a,
    ssr: f,
    isTS: u,
    inSSR: d,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(_) {
      return `_${kn[_]}`;
    },
    push(_, M = -2, x) {
      p.code += _;
    },
    indent() {
      b(++p.indentLevel);
    },
    deindent(_ = !1) {
      _ ? --p.indentLevel : b(--p.indentLevel);
    },
    newline() {
      b(p.indentLevel);
    }
  };
  function b(_) {
    p.push(
      `
` + "  ".repeat(_),
      0
      /* Start */
    );
  }
  return p;
}
function Eg(e, t = {}) {
  const n = vg(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: i,
    prefixIdentifiers: r,
    indent: o,
    deindent: l,
    newline: c,
    scopeId: a,
    ssr: f
  } = n, u = Array.from(e.helpers), d = u.length > 0, p = !r && s !== "module";
  Tg(e, n);
  const _ = f ? "ssrRender" : "render", x = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (i(`function ${_}(${x}) {`), o(), p && (i("with (_ctx) {"), o(), d && (i(
    `const { ${u.map(_f).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), c())), e.components.length && (lr(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (lr(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), lr(e.filters, "filter", n), c()), e.temps > 0) {
    i("let ");
    for (let A = 0; A < e.temps; A++)
      i(`${A > 0 ? ", " : ""}_temp${A}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (i(
    `
`,
    0
    /* Start */
  ), c()), f || i("return "), e.codegenNode ? Me(e.codegenNode, n) : i("null"), p && (l(), i("}")), l(), i("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function Tg(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: i,
    newline: r,
    runtimeModuleName: o,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: c
  } = t, a = l, f = Array.from(e.helpers);
  if (f.length > 0 && (i(
    `const _Vue = ${a}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const u = [
      ho,
      po,
      Ts,
      go,
      Qa
    ].filter((d) => f.includes(d)).map(_f).join(", ");
    i(
      `const { ${u} } = _Vue
`,
      -1
      /* End */
    );
  }
  Cg(e.hoists, t), r(), i("return ");
}
function lr(e, t, { helper: n, push: s, newline: i, isTS: r }) {
  const o = n(
    t === "filter" ? bo : t === "component" ? mo : _o
  );
  for (let l = 0; l < e.length; l++) {
    let c = e[l];
    const a = c.endsWith("__self");
    a && (c = c.slice(0, -6)), s(
      `const ${gs(c, t)} = ${o}(${JSON.stringify(c)}${a ? ", true" : ""})${r ? "!" : ""}`
    ), l < e.length - 1 && i();
  }
}
function Cg(e, t) {
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
  t.push("["), n && t.indent(), As(e, t, n), n && t.deindent(), t.push("]");
}
function As(e, t, n = !1, s = !0) {
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
      Ag(e, t);
      break;
    case 4:
      bf(e, t);
      break;
    case 5:
      Ng(e, t);
      break;
    case 12:
      Me(e.codegenNode, t);
      break;
    case 8:
      Sf(e, t);
      break;
    case 3:
      wg(e, t);
      break;
    case 13:
      Ig(e, t);
      break;
    case 14:
      Rg(e, t);
      break;
    case 15:
      Pg(e, t);
      break;
    case 17:
      kg(e, t);
      break;
    case 18:
      Mg(e, t);
      break;
    case 19:
      Lg(e, t);
      break;
    case 20:
      Dg(e, t);
      break;
    case 21:
      As(e.body, t, !0, !1);
      break;
  }
}
function Ag(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function bf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function Ng(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(Ki), n(`${s(Hi)}(`), Me(e.content, t), n(")");
}
function Sf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    Z(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : Me(s, t);
  }
}
function xg(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), Sf(e, t), n("]");
  else if (e.isStatic) {
    const s = Io(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function wg(e, t) {
  const { push: n, helper: s, pure: i } = t;
  i && n(Ki), n(
    `${s(Ts)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function Ig(e, t) {
  const { push: n, helper: s, pure: i } = t, {
    tag: r,
    props: o,
    children: l,
    patchFlag: c,
    dynamicProps: a,
    directives: f,
    isBlock: u,
    disableTracking: d,
    isComponent: p
  } = e;
  let b;
  c && (b = String(c)), f && n(s(So) + "("), u && n(`(${s(cn)}(${d ? "true" : ""}), `), i && n(Ki);
  const _ = u ? Dn(t.inSSR, p) : Ln(t.inSSR, p);
  n(s(_) + "(", -2, e), As(
    Og([r, o, l, b, a]),
    t
  ), n(")"), u && n(")"), f && (n(", "), Me(f, t), n(")"));
}
function Og(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Rg(e, t) {
  const { push: n, helper: s, pure: i } = t, r = Z(e.callee) ? e.callee : s(e.callee);
  i && n(Ki), n(r + "(", -2, e), As(e.arguments, t), n(")");
}
function Pg(e, t) {
  const { push: n, indent: s, deindent: i, newline: r } = t, { properties: o } = e;
  if (!o.length) {
    n("{}", -2, e);
    return;
  }
  const l = o.length > 1 || !1;
  n(l ? "{" : "{ "), l && s();
  for (let c = 0; c < o.length; c++) {
    const { key: a, value: f } = o[c];
    xg(a, t), n(": "), Me(f, t), c < o.length - 1 && (n(","), r());
  }
  l && i(), n(l ? "}" : " }");
}
function kg(e, t) {
  Ro(e.elements, t);
}
function Mg(e, t) {
  const { push: n, indent: s, deindent: i } = t, { params: r, returns: o, body: l, newline: c, isSlot: a } = e;
  a && n(`_${kn[Ao]}(`), n("(", -2, e), B(r) ? As(r, t) : r && Me(r, t), n(") => "), (c || l) && (n("{"), s()), o ? (c && n("return "), B(o) ? Ro(o, t) : Me(o, t)) : l && Me(l, t), (c || l) && (i(), n("}")), a && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function Lg(e, t) {
  const { test: n, consequent: s, alternate: i, newline: r } = e, { push: o, indent: l, deindent: c, newline: a } = t;
  if (n.type === 4) {
    const u = !Io(n.content);
    u && o("("), bf(n, t), u && o(")");
  } else
    o("("), Me(n, t), o(")");
  r && l(), t.indentLevel++, r || o(" "), o("? "), Me(s, t), t.indentLevel--, r && a(), r || o(" "), o(": ");
  const f = i.type === 19;
  f || t.indentLevel++, Me(i, t), f || t.indentLevel--, r && c(
    !0
    /* without newline */
  );
}
function Dg(e, t) {
  const { push: n, helper: s, indent: i, deindent: r, newline: o } = t, { needPauseTracking: l, needArraySpread: c } = e;
  c && n("[...("), n(`_cache[${e.index}] || (`), l && (i(), n(`${s(di)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), Me(e.value, t), l && (n(`).cacheIndex = ${e.index},`), o(), n(`${s(di)}(1),`), o(), n(`_cache[${e.index}]`), r()), n(")"), c && n(")]");
}
new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
const Fg = yf(
  /^(if|else|else-if)$/,
  (e, t, n) => Vg(e, t, n, (s, i, r) => {
    const o = n.parent.children;
    let l = o.indexOf(s), c = 0;
    for (; l-- >= 0; ) {
      const a = o[l];
      a && a.type === 9 && (c += a.branches.length);
    }
    return () => {
      if (r)
        s.codegenNode = kl(
          i,
          c,
          n
        );
      else {
        const a = $g(s.codegenNode);
        a.alternate = kl(
          i,
          c + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function Vg(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const i = t.exp ? t.exp.loc : e.loc;
    n.onError(
      de(28, t.loc)
    ), t.exp = z("true", !1, i);
  }
  if (t.name === "if") {
    const i = Pl(e, t), r = {
      type: 9,
      loc: ug(e.loc),
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
        t.name === "else-if" && o.branches[o.branches.length - 1].condition === void 0 && n.onError(
          de(30, e.loc)
        ), n.removeNode();
        const l = Pl(e, t);
        o.branches.push(l);
        const c = s && s(o, l, !1);
        ji(l, n), c && c(), n.currentNode = null;
      } else
        n.onError(
          de(30, e.loc)
        );
      break;
    }
  }
}
function Pl(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !tt(e, "for") ? e.children : [e],
    userKey: Ui(e, "key"),
    isTemplateIf: n
  };
}
function kl(e, t, n) {
  return e.condition ? Rr(
    e.condition,
    Ml(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    ve(n.helper(Ts), [
      '""',
      "true"
    ])
  ) : Ml(e, t, n);
}
function Ml(e, t, n) {
  const { helper: s } = n, i = me(
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
      return yi(c, i, n), c;
    } else
      return ds(
        n,
        s(us),
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
    const c = o.codegenNode, a = eg(c);
    return a.type === 13 && xo(a, n), yi(a, i, n), c;
  }
}
function $g(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const Bg = (e, t, n) => {
  const { modifiers: s, loc: i } = e, r = e.arg;
  let { exp: o } = e;
  if (o && o.type === 4 && !o.content.trim() && (o = void 0), !o) {
    if (r.type !== 4 || !r.isStatic)
      return n.onError(
        de(
          52,
          r.loc
        )
      ), {
        props: [
          me(r, z("", !0, i))
        ]
      };
    vf(e), o = e.exp;
  }
  return r.type !== 4 ? (r.children.unshift("("), r.children.push(') || ""')) : r.isStatic || (r.content = r.content ? `${r.content} || ""` : '""'), s.some((l) => l.content === "camel") && (r.type === 4 ? r.isStatic ? r.content = ue(r.content) : r.content = `${n.helperString(Ir)}(${r.content})` : (r.children.unshift(`${n.helperString(Ir)}(`), r.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && Ll(r, "."), s.some((l) => l.content === "attr") && Ll(r, "^")), {
    props: [me(r, o)]
  };
}, vf = (e, t) => {
  const n = e.arg, s = ue(n.content);
  e.exp = z(s, !1, n.loc);
}, Ll = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, Hg = yf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: i } = n;
    return Ug(e, t, n, (r) => {
      const o = ve(s(vo), [
        r.source
      ]), l = gi(e), c = tt(e, "memo"), a = Ui(e, "key", !1, !0);
      a && a.type === 7 && !a.exp && vf(a);
      let u = a && (a.type === 6 ? a.value ? z(a.value.content, !0) : void 0 : a.exp);
      const d = a && u ? me("key", u) : null, p = r.source.type === 4 && r.source.constType > 0, b = p ? 64 : a ? 128 : 256;
      return r.codegenNode = ds(
        n,
        s(us),
        void 0,
        o,
        b,
        void 0,
        void 0,
        !0,
        !p,
        !1,
        e.loc
      ), () => {
        let _;
        const { children: M } = r, x = M.length !== 1 || M[0].type !== 1, A = mi(e) ? e : l && e.children.length === 1 && mi(e.children[0]) ? e.children[0] : null;
        if (A ? (_ = A.codegenNode, l && d && yi(_, d, n)) : x ? _ = ds(
          n,
          s(us),
          d ? nt([d]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (_ = M[0].codegenNode, l && d && yi(_, d, n), _.isBlock !== !p && (_.isBlock ? (i(cn), i(
          Dn(n.inSSR, _.isComponent)
        )) : i(
          Ln(n.inSSR, _.isComponent)
        )), _.isBlock = !p, _.isBlock ? (s(cn), s(Dn(n.inSSR, _.isComponent))) : s(Ln(n.inSSR, _.isComponent))), c) {
          const g = Mn(
            Mr(r.parseResult, [
              z("_cached")
            ])
          );
          g.body = Hp([
            at(["const _memo = (", c.exp, ")"]),
            at([
              "if (_cached",
              ...u ? [" && _cached.key === ", u] : [],
              ` && ${n.helperString(
                nf
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
            Mn(
              Mr(r.parseResult),
              _,
              !0
            )
          );
      };
    });
  }
);
function Ug(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      de(31, t.loc)
    );
    return;
  }
  const i = t.forParseResult;
  if (!i) {
    n.onError(
      de(32, t.loc)
    );
    return;
  }
  Ef(i);
  const { addIdentifiers: r, removeIdentifiers: o, scopes: l } = n, { source: c, value: a, key: f, index: u } = i, d = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: a,
    keyAlias: f,
    objectIndexAlias: u,
    parseResult: i,
    children: gi(e) ? e.children : [e]
  };
  n.replaceNode(d), l.vFor++;
  const p = s && s(d);
  return () => {
    l.vFor--, p && p();
  };
}
function Ef(e, t) {
  e.finalized || (e.finalized = !0);
}
function Mr({ value: e, key: t, index: n }, s = []) {
  return jg([e, t, n, ...s]);
}
function jg(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || z("_".repeat(s + 1), !1));
}
const Dl = z("undefined", !1), Kg = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = tt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, Wg = (e, t, n, s) => Mn(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function qg(e, t, n = Wg) {
  t.helper(Ao);
  const { children: s, loc: i } = e, r = [], o = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const c = tt(e, "slot", !0);
  if (c) {
    const { arg: M, exp: x } = c;
    M && !je(M) && (l = !0), r.push(
      me(
        M || z("default", !0),
        n(x, void 0, s, i)
      )
    );
  }
  let a = !1, f = !1;
  const u = [], d = /* @__PURE__ */ new Set();
  let p = 0;
  for (let M = 0; M < s.length; M++) {
    const x = s[M];
    let A;
    if (!gi(x) || !(A = tt(x, "slot", !0))) {
      x.type !== 3 && u.push(x);
      continue;
    }
    if (c) {
      t.onError(
        de(37, A.loc)
      );
      break;
    }
    a = !0;
    const { children: g, loc: y } = x, {
      arg: v = z("default", !0),
      exp: w,
      loc: V
    } = A;
    let O;
    je(v) ? O = v ? v.content : "default" : l = !0;
    const S = tt(x, "for"), C = n(w, S, g, y);
    let k, E;
    if (k = tt(x, "if"))
      l = !0, o.push(
        Rr(
          k.exp,
          $s(v, C, p++),
          Dl
        )
      );
    else if (E = tt(
      x,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let D = M, W;
      for (; D-- && (W = s[D], !(W.type !== 3 && Lr(W))); )
        ;
      if (W && gi(W) && tt(W, /^(else-)?if$/)) {
        let J = o[o.length - 1];
        for (; J.alternate.type === 19; )
          J = J.alternate;
        J.alternate = E.exp ? Rr(
          E.exp,
          $s(
            v,
            C,
            p++
          ),
          Dl
        ) : $s(v, C, p++);
      } else
        t.onError(
          de(30, E.loc)
        );
    } else if (S) {
      l = !0;
      const D = S.forParseResult;
      D ? (Ef(D), o.push(
        ve(t.helper(vo), [
          D.source,
          Mn(
            Mr(D),
            $s(v, C),
            !0
          )
        ])
      )) : t.onError(
        de(
          32,
          S.loc
        )
      );
    } else {
      if (O) {
        if (d.has(O)) {
          t.onError(
            de(
              38,
              V
            )
          );
          continue;
        }
        d.add(O), O === "default" && (f = !0);
      }
      r.push(me(v, C));
    }
  }
  if (!c) {
    const M = (x, A) => {
      const g = n(x, void 0, A, i);
      return t.compatConfig && (g.isNonScopedSlot = !0), me("default", g);
    };
    a ? u.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    u.some((x) => Lr(x)) && (f ? t.onError(
      de(
        39,
        u[0].loc
      )
    ) : r.push(
      M(void 0, u)
    )) : r.push(M(void 0, s));
  }
  const b = l ? 2 : Js(e.children) ? 3 : 1;
  let _ = nt(
    r.concat(
      me(
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
  return o.length && (_ = ve(t.helper(tf), [
    _,
    sn(o)
  ])), {
    slots: _,
    hasDynamicSlots: l
  };
}
function $s(e, t, n) {
  const s = [
    me("name", e),
    me("fn", t)
  ];
  return n != null && s.push(
    me("key", z(String(n), !0))
  ), nt(s);
}
function Js(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || Js(n.children))
          return !0;
        break;
      case 9:
        if (Js(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (Js(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function Lr(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : Lr(e.content);
}
const Tf = /* @__PURE__ */ new WeakMap(), Gg = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: i } = e, r = e.tagType === 1;
  let o = r ? Jg(e, t) : `"${s}"`;
  const l = le(o) && o.callee === yo;
  let c, a, f = 0, u, d, p, b = (
    // dynamic component may resolve to plain elements
    l || o === ts || o === uo || !r && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (i.length > 0) {
    const _ = Cf(
      e,
      t,
      void 0,
      r,
      l
    );
    c = _.props, f = _.patchFlag, d = _.dynamicPropNames;
    const M = _.directives;
    p = M && M.length ? sn(
      M.map((x) => Xg(x, t))
    ) : void 0, _.shouldUseBlock && (b = !0);
  }
  if (e.children.length > 0)
    if (o === ui && (b = !0, f |= 1024), r && // Teleport is not a real component and has dedicated runtime handling
    o !== ts && // explained above.
    o !== ui) {
      const { slots: M, hasDynamicSlots: x } = qg(e, t);
      a = M, x && (f |= 1024);
    } else if (e.children.length === 1 && o !== ts) {
      const M = e.children[0], x = M.type, A = x === 5 || x === 8;
      A && Ye(M, t) === 0 && (f |= 1), A || x === 2 ? a = M : a = e.children;
    } else
      a = e.children;
  d && d.length && (u = Zg(d)), e.codegenNode = ds(
    t,
    o,
    c,
    a,
    f === 0 ? void 0 : f,
    u,
    p,
    !!b,
    !1,
    r,
    e.loc
  );
};
function Jg(e, t, n = !1) {
  let { tag: s } = e;
  const i = Dr(s), r = Ui(
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
  const o = rf(s) || t.isBuiltInComponent(s);
  return o ? (n || t.helper(o), o) : (t.helper(mo), t.components.add(s), gs(s, "component"));
}
function Cf(e, t, n = e.props, s, i, r = !1) {
  const { tag: o, loc: l, children: c } = e;
  let a = [];
  const f = [], u = [], d = c.length > 0;
  let p = !1, b = 0, _ = !1, M = !1, x = !1, A = !1, g = !1, y = !1;
  const v = [], w = (C) => {
    a.length && (f.push(
      nt(Fl(a), l)
    ), a = []), C && f.push(C);
  }, V = () => {
    t.scopes.vFor > 0 && a.push(
      me(
        z("ref_for", !0),
        z("true")
      )
    );
  }, O = ({ key: C, value: k }) => {
    if (je(C)) {
      const E = C.content, D = an(E);
      if (D && (!s || i) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      E.toLowerCase() !== "onclick" && // omit v-model handlers
      E !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Bt(E) && (A = !0), D && Bt(E) && (y = !0), D && k.type === 14 && (k = k.arguments[0]), k.type === 20 || (k.type === 4 || k.type === 8) && Ye(k, t) > 0)
        return;
      E === "ref" ? _ = !0 : E === "class" ? M = !0 : E === "style" ? x = !0 : E !== "key" && !v.includes(E) && v.push(E), s && (E === "class" || E === "style") && !v.includes(E) && v.push(E);
    } else
      g = !0;
  };
  for (let C = 0; C < n.length; C++) {
    const k = n[C];
    if (k.type === 6) {
      const { loc: E, name: D, nameLoc: W, value: J } = k;
      let U = !0;
      if (D === "ref" && (_ = !0, V()), D === "is" && (Dr(o) || J && J.content.startsWith("vue:") || rn(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      a.push(
        me(
          z(D, !0, W),
          z(
            J ? J.content : "",
            U,
            J ? J.loc : E
          )
        )
      );
    } else {
      const { name: E, arg: D, exp: W, loc: J, modifiers: U } = k, Y = E === "bind", j = E === "on";
      if (E === "slot") {
        s || t.onError(
          de(40, J)
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
        j && d && Zt(D, "vue:before-update")) && (p = !0), Y && Zt(D, "ref") && V(), !D && (Y || j)
      ) {
        if (g = !0, W)
          if (Y) {
            if (w(), rn(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              f.unshift(W);
              continue;
            }
            V(), w(), f.push(W);
          } else
            w({
              type: 14,
              loc: J,
              callee: t.helper(Co),
              arguments: s ? [W] : [W, "true"]
            });
        else
          t.onError(
            de(
              Y ? 34 : 35,
              J
            )
          );
        continue;
      }
      Y && U.some((ft) => ft.content === "prop") && (b |= 32);
      const pe = t.directiveTransforms[E];
      if (pe) {
        const { props: ft, needRuntime: rt } = pe(k, e, t);
        !r && ft.forEach(O), j && D && !je(D) ? w(nt(ft, l)) : a.push(...ft), rt && (u.push(k), Ke(rt) && Tf.set(k, rt));
      } else Uf(E) || (u.push(k), d && (p = !0));
    }
  }
  let S;
  if (f.length ? (w(), f.length > 1 ? S = ve(
    t.helper(hi),
    f,
    l
  ) : S = f[0]) : a.length && (S = nt(
    Fl(a),
    l
  )), g ? b |= 16 : (M && !s && (b |= 2), x && !s && (b |= 4), v.length && (b |= 8), A && (b |= 32)), !p && (b === 0 || b === 32) && (_ || y || u.length > 0) && (b |= 512), !t.inSSR && S)
    switch (S.type) {
      case 15:
        let C = -1, k = -1, E = !1;
        for (let J = 0; J < S.properties.length; J++) {
          const U = S.properties[J].key;
          je(U) ? U.content === "class" ? C = J : U.content === "style" && (k = J) : U.isHandlerKey || (E = !0);
        }
        const D = S.properties[C], W = S.properties[k];
        E ? S = ve(
          t.helper(hs),
          [S]
        ) : (D && !je(D.value) && (D.value = ve(
          t.helper(Eo),
          [D.value]
        )), W && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (x || W.value.type === 4 && W.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
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
          t.helper(hs),
          [
            ve(t.helper(Cs), [
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
    shouldUseBlock: p
  };
}
function Fl(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (i.key.type === 8 || !i.key.isStatic) {
      n.push(i);
      continue;
    }
    const r = i.key.content, o = t.get(r);
    o ? (r === "style" || r === "class" || an(r)) && Yg(o, i) : (t.set(r, i), n.push(i));
  }
  return n;
}
function Yg(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = sn(
    [e.value, t.value],
    e.loc
  );
}
function Xg(e, t) {
  const n = [], s = Tf.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(_o), t.directives.add(e.name), n.push(gs(e.name, "directive")));
  const { loc: i } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const r = z("true", !1, i);
    n.push(
      nt(
        e.modifiers.map(
          (o) => me(o, r)
        ),
        i
      )
    );
  }
  return sn(n, e.loc);
}
function Zg(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function Dr(e) {
  return e === "component" || e === "Component";
}
const zg = (e, t) => {
  if (mi(e)) {
    const { children: n, loc: s } = e, { slotName: i, slotProps: r } = Qg(e, t), o = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      i,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    r && (o[2] = r, l = 3), n.length && (o[3] = Mn([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), o.splice(l), e.codegenNode = ve(
      t.helper(ef),
      o,
      s
    );
  }
};
function Qg(e, t) {
  let n = '"default"', s;
  const i = [];
  for (let r = 0; r < e.props.length; r++) {
    const o = e.props[r];
    if (o.type === 6)
      o.value && (o.name === "name" ? n = JSON.stringify(o.value.content) : (o.name = ue(o.name), i.push(o)));
    else if (o.name === "bind" && Zt(o.arg, "name")) {
      if (o.exp)
        n = o.exp;
      else if (o.arg && o.arg.type === 4) {
        const l = ue(o.arg.content);
        n = o.exp = z(l, !1, o.arg.loc);
      }
    } else
      o.name === "bind" && o.arg && je(o.arg) && (o.arg.content = ue(o.arg.content)), i.push(o);
  }
  if (i.length > 0) {
    const { props: r, directives: o } = Cf(
      e,
      t,
      i,
      !1,
      !1
    );
    s = r, o.length && t.onError(
      de(
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
const Af = (e, t, n, s) => {
  const { loc: i, modifiers: r, arg: o } = e;
  !e.exp && !r.length && n.onError(de(35, i));
  let l;
  if (o.type === 4)
    if (o.isStatic) {
      let u = o.content;
      u.startsWith("vue:") && (u = `vnode-${u.slice(4)}`);
      const d = t.tagType !== 0 || u.startsWith("vnode") || !/[A-Z]/.test(u) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        En(ue(u))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${u}`
      );
      l = z(d, !0, o.loc);
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
  let a = n.cacheHandlers && !c && !n.inVOnce;
  if (c) {
    const u = lf(c), d = !(u || Xp(c)), p = c.content.includes(";");
    (d || a && u) && (c = at([
      `${d ? "$event" : "(...args)"} => ${p ? "{" : "("}`,
      c,
      p ? "}" : ")"
    ]));
  }
  let f = {
    props: [
      me(
        l,
        c || z("() => {}", !1, i)
      )
    ]
  };
  return s && (f = s(f)), a && (f.props[0].value = n.cache(f.props[0].value)), f.props.forEach((u) => u.key.isHandlerKey = !0), f;
}, em = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, i = !1;
      for (let r = 0; r < n.length; r++) {
        const o = n[r];
        if (or(o)) {
          i = !0;
          for (let l = r + 1; l < n.length; l++) {
            const c = n[l];
            if (or(c))
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
          if (or(o) || o.type === 8) {
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
}, Vl = /* @__PURE__ */ new WeakSet(), tm = (e, t) => {
  if (e.type === 1 && tt(e, "once", !0))
    return Vl.has(e) || t.inVOnce || t.inSSR ? void 0 : (Vl.add(e), t.inVOnce = !0, t.helper(di), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, Nf = (e, t, n) => {
  const { exp: s, arg: i } = e;
  if (!s)
    return n.onError(
      de(41, e.loc)
    ), Bs();
  const r = s.loc.source.trim(), o = s.type === 4 ? s.content : r, l = n.bindingMetadata[r];
  if (l === "props" || l === "props-aliased")
    return n.onError(de(44, s.loc)), Bs();
  if (!o.trim() || !lf(s))
    return n.onError(
      de(42, s.loc)
    ), Bs();
  const c = i || z("modelValue", !0), a = i ? je(i) ? `onUpdate:${ue(i.content)}` : at(['"onUpdate:" + ', i]) : "onUpdate:modelValue";
  let f;
  const u = n.isTS ? "($event: any)" : "$event";
  f = at([
    `${u} => ((`,
    s,
    ") = $event)"
  ]);
  const d = [
    // modelValue: foo
    me(c, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    me(a, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const p = e.modifiers.map((_) => _.content).map((_) => (Io(_) ? _ : JSON.stringify(_)) + ": true").join(", "), b = i ? je(i) ? `${i.content}Modifiers` : at([i, ' + "Modifiers"']) : "modelModifiers";
    d.push(
      me(
        b,
        z(
          `{ ${p} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Bs(d);
};
function Bs(e = []) {
  return { props: e };
}
const nm = /[\w).+\-_$\]]/, sm = (e, t) => {
  rn("COMPILER_FILTERS", t) && (e.type === 5 ? _i(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && _i(n.exp, t);
  }));
};
function _i(e, t) {
  if (e.type === 4)
    $l(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? $l(s, t) : s.type === 8 ? _i(e, t) : s.type === 5 && _i(s.content, t));
    }
}
function $l(e, t) {
  const n = e.content;
  let s = !1, i = !1, r = !1, o = !1, l = 0, c = 0, a = 0, f = 0, u, d, p, b, _ = [];
  for (p = 0; p < n.length; p++)
    if (d = u, u = n.charCodeAt(p), s)
      u === 39 && d !== 92 && (s = !1);
    else if (i)
      u === 34 && d !== 92 && (i = !1);
    else if (r)
      u === 96 && d !== 92 && (r = !1);
    else if (o)
      u === 47 && d !== 92 && (o = !1);
    else if (u === 124 && // pipe
    n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !l && !c && !a)
      b === void 0 ? (f = p + 1, b = n.slice(0, p).trim()) : M();
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
          a++;
          break;
        // (
        case 41:
          a--;
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
        let x = p - 1, A;
        for (; x >= 0 && (A = n.charAt(x), A === " "); x--)
          ;
        (!A || !nm.test(A)) && (o = !0);
      }
    }
  b === void 0 ? b = n.slice(0, p).trim() : f !== 0 && M();
  function M() {
    _.push(n.slice(f, p).trim()), f = p + 1;
  }
  if (_.length) {
    for (p = 0; p < _.length; p++)
      b = im(b, _[p], t);
    e.content = b, e.ast = void 0;
  }
}
function im(e, t, n) {
  n.helper(bo);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${gs(t, "filter")}(${e})`;
  {
    const i = t.slice(0, s), r = t.slice(s + 1);
    return n.filters.add(i), `${gs(i, "filter")}(${e}${r !== ")" ? "," + r : r}`;
  }
}
const Bl = /* @__PURE__ */ new WeakSet(), rm = (e, t) => {
  if (e.type === 1) {
    const n = tt(e, "memo");
    return !n || Bl.has(e) ? void 0 : (Bl.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && xo(s, t), e.codegenNode = ve(t.helper(No), [
        n.exp,
        Mn(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function om(e) {
  return [
    [
      tm,
      Fg,
      rm,
      Hg,
      sm,
      zg,
      Gg,
      Kg,
      em
    ],
    {
      on: Af,
      bind: Bg,
      model: Nf
    }
  ];
}
function lm(e, t = {}) {
  const n = t.onError || wo, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n(de(47)) : s && n(de(48));
  const i = !1;
  t.cacheHandlers && n(de(49)), t.scopeId && !s && n(de(50));
  const r = te({}, t, {
    prefixIdentifiers: i
  }), o = Z(e) ? pg(e, r) : e, [l, c] = om();
  return _g(
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
  ), Eg(o, r);
}
const cm = () => ({ props: [] });
/**
* @vue/compiler-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const xf = Symbol(""), wf = Symbol(
  ""
), If = Symbol(""), Of = Symbol(
  ""
), Fr = Symbol(
  ""
), Rf = Symbol(
  ""
), Pf = Symbol(
  ""
), kf = Symbol(""), Mf = Symbol(""), Lf = Symbol(
  ""
);
Vp({
  [xf]: "vModelRadio",
  [wf]: "vModelCheckbox",
  [If]: "vModelText",
  [Of]: "vModelSelect",
  [Fr]: "vModelDynamic",
  [Rf]: "withModifiers",
  [Pf]: "withKeys",
  [kf]: "vShow",
  [Mf]: "Transition",
  [Lf]: "TransitionGroup"
});
let mn;
function am(e, t = !1) {
  return mn || (mn = document.createElement("div")), t ? (mn.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, mn.children[0].getAttribute("foo")) : (mn.innerHTML = e, mn.textContent);
}
const fm = {
  parseMode: "html",
  isVoidTag: ru,
  isNativeTag: (e) => nu(e) || su(e) || iu(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: am,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return Mf;
    if (e === "TransitionGroup" || e === "transition-group")
      return Lf;
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
}, um = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: z("style", !0, t.loc),
      exp: hm(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, hm = (e, t) => {
  const n = Kl(e);
  return z(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Kt(e, t) {
  return de(
    e,
    t
  );
}
const dm = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(53, i)
  ), t.children.length && (n.onError(
    Kt(54, i)
  ), t.children.length = 0), {
    props: [
      me(
        z("innerHTML", !0, i),
        s || z("", !0)
      )
    ]
  };
}, pm = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(55, i)
  ), t.children.length && (n.onError(
    Kt(56, i)
  ), t.children.length = 0), {
    props: [
      me(
        z("textContent", !0),
        s ? Ye(s, n) > 0 ? s : ve(
          n.helperString(Hi),
          [s],
          i
        ) : z("", !0)
      )
    ]
  };
}, gm = (e, t, n) => {
  const s = Nf(e, t, n);
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
    let o = If, l = !1;
    if (i === "input" || r) {
      const c = Ui(t, "type");
      if (c) {
        if (c.type === 7)
          o = Fr;
        else if (c.value)
          switch (c.value.content) {
            case "radio":
              o = xf;
              break;
            case "checkbox":
              o = wf;
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
      } else Zp(t) && (o = Fr);
    } else i === "select" && (o = Of);
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
}, mm = /* @__PURE__ */ ze("passive,once,capture"), ym = /* @__PURE__ */ ze(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), _m = /* @__PURE__ */ ze("left,right"), Df = /* @__PURE__ */ ze("onkeyup,onkeydown,onkeypress"), bm = (e, t, n, s) => {
  const i = [], r = [], o = [];
  for (let l = 0; l < t.length; l++) {
    const c = t[l].content;
    c === "native" && ps(
      "COMPILER_V_ON_NATIVE",
      n
    ) || mm(c) ? o.push(c) : _m(c) ? je(e) ? Df(e.content.toLowerCase()) ? i.push(c) : r.push(c) : (i.push(c), r.push(c)) : ym(c) ? r.push(c) : i.push(c);
  }
  return {
    keyModifiers: i,
    nonKeyModifiers: r,
    eventOptionModifiers: o
  };
}, Hl = (e, t) => je(e) && e.content.toLowerCase() === "onclick" ? z(t, !0) : e.type !== 4 ? at([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Sm = (e, t, n) => Af(e, t, n, (s) => {
  const { modifiers: i } = e;
  if (!i.length) return s;
  let { key: r, value: o } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: c, eventOptionModifiers: a } = bm(r, i, n, e.loc);
  if (c.includes("right") && (r = Hl(r, "onContextmenu")), c.includes("middle") && (r = Hl(r, "onMouseup")), c.length && (o = ve(n.helper(Rf), [
    o,
    JSON.stringify(c)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!je(r) || Df(r.content.toLowerCase())) && (o = ve(n.helper(Pf), [
    o,
    JSON.stringify(l)
  ])), a.length) {
    const f = a.map(un).join("");
    r = je(r) ? z(`${r.content}${f}`, !0) : at(["(", r, `) + "${f}"`]);
  }
  return {
    props: [me(r, o)]
  };
}), vm = (e, t, n) => {
  const { exp: s, loc: i } = e;
  return s || n.onError(
    Kt(61, i)
  ), {
    props: [],
    needRuntime: n.helper(kf)
  };
}, Em = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && t.removeNode();
}, Tm = [
  um
], Cm = {
  cloak: cm,
  html: dm,
  text: pm,
  model: gm,
  // override compiler-core
  on: Sm,
  // override compiler-core
  show: vm
};
function Am(e, t = {}) {
  return lm(
    e,
    te({}, fm, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Em,
        ...Tm,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: te(
        {},
        Cm,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ul = /* @__PURE__ */ Object.create(null);
function Nm(e, t) {
  if (!Z(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return xe;
  const n = Wf(e, t), s = Ul[n];
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
  const { code: r } = Am(e, i), o = new Function("Vue", r)(Pp);
  return o._rc = !0, Ul[n] = o;
}
va(Nm);
const xm = /* @__PURE__ */ ki({
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
      mt("h1", null, Cn(n.title), 1),
      mt("p", null, Cn(n.description), 1),
      s[1] || (s[1] = mt("br", null, null, -1)),
      mt("p", null, [
        mt("button", {
          onClick: s[0] || (s[0] = (i) => {
            t.value++, n.$emit("new-font-size", t.value);
          })
        }, " Set the font size to " + Cn(t.value) + "px. ", 1)
      ])
    ], 64));
  }
}), wm = ".alert-box[data-v-71faf2cc]{background-color:red;color:#fff;padding:20px}", Ns = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Im = {}, Om = { class: "alert-box" };
function Rm(e, t) {
  return Ze(), qt("div", Om, [
    t[0] || (t[0] = mt("strong", null, "This is an Error Message", -1)),
    Hc(e.$slots, "default", {}, void 0, !0)
  ]);
}
const Pm = /* @__PURE__ */ Ns(Im, [["render", Rm], ["styles", [wm]], ["__scopeId", "data-v-71faf2cc"]]), km = {};
function Mm(e, t) {
  return Ze(), qt("div", null, "This is Home");
}
const Lm = /* @__PURE__ */ Ns(km, [["render", Mm]]), Dm = ".tab[data-v-4b345717]{border:1px solid #ccc;padding:10px}", Fm = {}, Vm = { class: "tab" };
function $m(e, t) {
  return Ze(), qt("div", Vm, "Posts");
}
const Bm = /* @__PURE__ */ Ns(Fm, [["render", $m], ["styles", [Dm]], ["__scopeId", "data-v-4b345717"]]), Hm = {}, Um = { class: "tab" };
function jm(e, t) {
  return Ze(), qt("div", Um, "Archive");
}
const Km = /* @__PURE__ */ Ns(Hm, [["render", jm]]), Wm = ".demo{font-family:sans-serif;border:10px solid red;border-radius:2px;padding:20px 30px;margin-top:1em;margin-bottom:40px;-webkit-user-select:none;user-select:none;overflow-x:auto}.tab-button{cursor:pointer;padding:6px 10px;border-top-left-radius:3px;border-top-right-radius:3px;border:3px dotted #43a147;background:#f0f0f0;margin-bottom:-1px;margin-right:-1px}.tab-button:hover,.tab-button.active{background:#e0e0e0}.tab{border:1px solid #ccc;padding:10px}", qm = { class: "demo" }, Gm = ["onClick"], Jm = {
  __name: "Tabs",
  setup(e) {
    const t = en("Home"), n = {
      Home: Lm,
      Posts: Bm,
      Archive: Km
    };
    return (s, i) => (Ze(), qt("div", qm, [
      (Ze(), qt(be, null, Bc(n, (r, o) => mt("button", {
        key: o,
        class: Vn(["tab-button", { active: t.value === o }]),
        onClick: (l) => t.value = o
      }, Cn(o), 11, Gm)), 64)),
      (Ze(), fs($c(n[t.value]), { class: "tab" }))
    ]));
  }
}, Ym = /* @__PURE__ */ Ns(Jm, [["styles", [Wm]]]), Xm = /* @__PURE__ */ Es(xm), Zm = /* @__PURE__ */ Es(Pm), zm = /* @__PURE__ */ Es(Ym);
customElements.define("example-webcomponent", Xm);
customElements.define("alert-box", Zm);
customElements.define("tabs-component", zm);
export {
  Zm as AlertBoxWebComponent,
  wc as BaseTransition,
  Zr as BaseTransitionPropsValidators,
  _e as Comment,
  jd as DeprecationTypes,
  Ur as EffectScope,
  zu as ErrorCodes,
  Dd as ErrorTypeStrings,
  Xm as ExampleWebComponent,
  be as Fragment,
  Ah as KeepAlive,
  ns as ReactiveEffect,
  nn as Static,
  yd as Suspense,
  zm as TabsWebComponent,
  lh as Teleport,
  jt as Text,
  Wu as TrackOpTypes,
  Jd as Transition,
  _p as TransitionGroup,
  qu as TriggerOpTypes,
  Bi as VueElement,
  Zu as assertNumber,
  it as callWithAsyncErrorHandling,
  $n as callWithErrorHandling,
  ue as camelize,
  un as capitalize,
  yt as cloneVNode,
  Ud as compatUtils,
  Nm as compile,
  Ca as computed,
  wr as createApp,
  fs as createBlock,
  Nd as createCommentVNode,
  qt as createElementBlock,
  mt as createElementVNode,
  ta as createHydrationRenderer,
  Kh as createPropsRestProxy,
  ea as createRenderer,
  Ga as createSSRApp,
  Oh as createSlots,
  Ad as createStaticVNode,
  lo as createTextVNode,
  fe as createVNode,
  pc as customRef,
  Th as defineAsyncComponent,
  ki as defineComponent,
  Es as defineCustomElement,
  Mh as defineEmits,
  Lh as defineExpose,
  Vh as defineModel,
  Dh as defineOptions,
  kh as defineProps,
  hp as defineSSRCustomElement,
  Fh as defineSlots,
  Fd as devtools,
  du as effect,
  fu as effectScope,
  We as getCurrentInstance,
  Jl as getCurrentScope,
  Gu as getCurrentWatcher,
  Pi as getTransitionRawChildren,
  ma as guardReactiveProps,
  Aa as h,
  hn as handleError,
  Qh as hasInjectionContext,
  Op as hydrate,
  yh as hydrateOnIdle,
  vh as hydrateOnInteraction,
  Sh as hydrateOnMediaQuery,
  bh as hydrateOnVisible,
  kd as initCustomFormatter,
  Rp as initDirectivesForSSR,
  zn as inject,
  Na as isMemoSame,
  wi as isProxy,
  Ht as isReactive,
  wt as isReadonly,
  Ee as isRef,
  Od as isRuntimeOnly,
  Xe as isShallow,
  Ot as isVNode,
  uc as markRaw,
  Uh as mergeDefaults,
  jh as mergeModels,
  ya as mergeProps,
  Oi as nextTick,
  Vn as normalizeClass,
  Zf as normalizeProps,
  ys as normalizeStyle,
  Oc as onActivated,
  kc as onBeforeMount,
  Di as onBeforeUnmount,
  Qr as onBeforeUpdate,
  Rc as onDeactivated,
  Fc as onErrorCaptured,
  bs as onMounted,
  Dc as onRenderTracked,
  Lc as onRenderTriggered,
  uu as onScopeDispose,
  Mc as onServerPrefetch,
  Fi as onUnmounted,
  Li as onUpdated,
  mc as onWatcherCleanup,
  Ze as openBlock,
  sh as popScopeId,
  Wc as provide,
  Gr as proxyRefs,
  nh as pushScopeId,
  rs as queuePostFlushCb,
  Ni as reactive,
  qr as readonly,
  en as ref,
  va as registerRuntimeCompiler,
  qa as render,
  Bc as renderList,
  Hc as renderSlot,
  wh as resolveComponent,
  Ih as resolveDirective,
  $c as resolveDynamicComponent,
  Hd as resolveFilter,
  In as resolveTransitionHooks,
  br as setBlockTracking,
  Vd as setDevtoolsHook,
  It as setTransitionHooks,
  fc as shallowReactive,
  ku as shallowReadonly,
  hc as shallowRef,
  ra as ssrContextKey,
  Bd as ssrUtils,
  pu as stop,
  Cn as toDisplayString,
  En as toHandlerKey,
  Rh as toHandlers,
  se as toRaw,
  Uu as toRef,
  $u as toRefs,
  Du as toValue,
  Td as transformVNodeArgs,
  Lu as triggerRef,
  Ii as unref,
  Hh as useAttrs,
  gp as useCssModule,
  Qd as useCssVars,
  Da as useHost,
  ah as useId,
  fd as useModel,
  oa as useSSRContext,
  pp as useShadowRoot,
  Bh as useSlots,
  fh as useTemplateRef,
  Xr as useTransitionState,
  ao as vModelCheckbox,
  Ha as vModelDynamic,
  fo as vModelRadio,
  $a as vModelSelect,
  fi as vModelText,
  Ma as vShow,
  xa as version,
  Ld as warn,
  xn as watch,
  ld as watchEffect,
  cd as watchPostEffect,
  la as watchSyncEffect,
  Wh as withAsyncContext,
  Yr as withCtx,
  $h as withDefaults,
  rh as withDirectives,
  Ip as withKeys,
  Md as withMemo,
  xp as withModifiers,
  ih as withScopeId
};
