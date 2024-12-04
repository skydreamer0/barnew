(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[844],{9477:function(e,r,t){Promise.resolve().then(t.bind(t,9062)),Promise.resolve().then(t.bind(t,1879)),Promise.resolve().then(t.bind(t,891))},9062:function(e,r,t){"use strict";t.r(r),t.d(r,{AboutContent:function(){return o}});var n=t(7437),a=t(4998),i=t(6691),l=t.n(i);function o(e){let{dictionary:r}=e;return(0,n.jsx)("div",{className:"relative",children:(0,n.jsxs)("div",{className:"grid gap-16 md:grid-cols-2 items-center",children:[(0,n.jsxs)(a.E.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative",children:[(0,n.jsx)("div",{className:"aspect-[4/3] relative rounded-2xl overflow-hidden",children:(0,n.jsx)(l(),{src:"https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",alt:"Restaurant Interior",fill:!0,className:"object-cover"})}),(0,n.jsx)("div",{className:"absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"}),(0,n.jsx)("div",{className:"absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl"})]}),(0,n.jsxs)(a.E.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative z-10",children:[(0,n.jsx)("h2",{className:"text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60",children:r.about.content.title}),(0,n.jsx)("div",{className:"prose prose-lg dark:prose-invert",children:(0,n.jsx)("p",{className:"leading-relaxed text-muted-foreground",children:r.about.content.description})})]})]})})}},1879:function(e,r,t){"use strict";t.r(r),t.d(r,{Team:function(){return R}});var n=t(7437),a=t(4998),i=t(2265),l=t(6989),o=t(6459),s=t(1030),c=t(9381),u="Avatar",[d,f]=(0,l.b)(u),[m,p]=d(u),x=i.forwardRef((e,r)=>{let{__scopeAvatar:t,...a}=e,[l,o]=i.useState("idle");return(0,n.jsx)(m,{scope:t,imageLoadingStatus:l,onImageLoadingStatusChange:o,children:(0,n.jsx)(c.WV.span,{...a,ref:r})})});x.displayName=u;var h="AvatarImage",v=i.forwardRef((e,r)=>{let{__scopeAvatar:t,src:a,onLoadingStatusChange:l=()=>{},...u}=e,d=p(h,t),f=function(e,r){let[t,n]=i.useState("idle");return(0,s.b)(()=>{if(!e){n("error");return}let t=!0,a=new window.Image,i=e=>()=>{t&&n(e)};return n("loading"),a.onload=i("loaded"),a.onerror=i("error"),a.src=e,r&&(a.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(a,u.referrerPolicy),m=(0,o.W)(e=>{l(e),d.onImageLoadingStatusChange(e)});return(0,s.b)(()=>{"idle"!==f&&m(f)},[f,m]),"loaded"===f?(0,n.jsx)(c.WV.img,{...u,ref:r,src:a}):null});v.displayName=h;var N="AvatarFallback",w=i.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:a,...l}=e,o=p(N,t),[s,u]=i.useState(void 0===a);return i.useEffect(()=>{if(void 0!==a){let e=window.setTimeout(()=>u(!0),a);return()=>window.clearTimeout(e)}},[a]),s&&"loaded"!==o.imageLoadingStatus?(0,n.jsx)(c.WV.span,{...l,ref:r}):null});w.displayName=N;var g=t(9311);let b=i.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(x,{ref:r,className:(0,g.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});b.displayName=x.displayName;let y=i.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(v,{ref:r,className:(0,g.cn)("aspect-square h-full w-full",t),...a})});y.displayName=v.displayName;let j=i.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)(w,{ref:r,className:(0,g.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});j.displayName=w.displayName;var C=t(6110);function R(e){let{dictionary:r}=e,t=["https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?fit=crop&w=800&h=800","https://images.unsplash.com/photo-1580489944761-15a19d654956?fit=crop&w=800&h=800"];return(0,n.jsxs)("section",{className:"py-12","data-testid":"team-section",children:[(0,n.jsxs)(a.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-12",children:[(0,n.jsx)("h2",{className:"text-3xl font-bold mb-4",children:r.about.team.title}),(0,n.jsx)("p",{className:"text-lg text-muted-foreground max-w-2xl mx-auto",children:r.about.team.description})]}),(0,n.jsx)("div",{className:"grid gap-8 md:grid-cols-2 max-w-4xl mx-auto",children:r.about.team.members.map((e,r)=>(0,n.jsx)(a.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*r},children:(0,n.jsx)(C.Zb,{className:"overflow-hidden",children:(0,n.jsx)(C.aY,{className:"p-6",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)("div",{className:"relative w-32 h-32 mb-6",children:(0,n.jsxs)(b,{className:"w-full h-full border-4 border-background shadow-lg",children:[(0,n.jsx)(y,{src:t[r],alt:e.name,className:"object-cover"}),(0,n.jsx)(j,{className:"text-2xl",children:e.name.split(" ").map(e=>e[0]).join("")})]})}),(0,n.jsx)("h3",{className:"text-xl font-semibold mb-1",children:e.name}),(0,n.jsx)("p",{className:"text-sm text-primary/80 font-medium mb-4",children:e.role}),(0,n.jsx)("p",{className:"text-center text-muted-foreground leading-relaxed",children:e.bio})]})})})},e.name))})]})}},6110:function(e,r,t){"use strict";t.d(r,{Zb:function(){return l},aY:function(){return u}});var n=t(7437),a=t(2265),i=t(9311);let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});l.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",t),...a})});o.displayName="CardHeader";let s=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});s.displayName="CardTitle";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",t),...a})});c.displayName="CardDescription";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("p-6 pt-0",t),...a})});u.displayName="CardContent";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",t),...a})});d.displayName="CardFooter"},891:function(e,r,t){"use strict";t.r(r),t.d(r,{Separator:function(){return u}});var n=t(7437),a=t(2265),i=t(9381),l="horizontal",o=["horizontal","vertical"],s=a.forwardRef((e,r)=>{let{decorative:t,orientation:a=l,...s}=e,c=o.includes(a)?a:l;return(0,n.jsx)(i.WV.div,{"data-orientation":c,...t?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...s,ref:r})});s.displayName="Separator";var c=t(9311);let u=a.forwardRef((e,r)=>{let{className:t,orientation:a="horizontal",decorative:i=!0,...l}=e;return(0,n.jsx)(s,{ref:r,decorative:i,orientation:a,className:(0,c.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",t),...l})});u.displayName=s.displayName},9311:function(e,r,t){"use strict";t.d(r,{cn:function(){return i}});var n=t(7042),a=t(4769);function i(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},2210:function(e,r,t){"use strict";t.d(r,{F:function(){return a},e:function(){return i}});var n=t(2265);function a(...e){return r=>e.forEach(e=>{"function"==typeof e?e(r):null!=e&&(e.current=r)})}function i(...e){return n.useCallback(a(...e),e)}},6989:function(e,r,t){"use strict";t.d(r,{b:function(){return l},k:function(){return i}});var n=t(2265),a=t(7437);function i(e,r){let t=n.createContext(r),i=e=>{let{children:r,...i}=e,l=n.useMemo(()=>i,Object.values(i));return(0,a.jsx)(t.Provider,{value:l,children:r})};return i.displayName=e+"Provider",[i,function(a){let i=n.useContext(t);if(i)return i;if(void 0!==r)return r;throw Error(`\`${a}\` must be used within \`${e}\``)}]}function l(e,r=[]){let t=[],i=()=>{let r=t.map(e=>n.createContext(e));return function(t){let a=t?.[e]||r;return n.useMemo(()=>({[`__scope${e}`]:{...t,[e]:a}}),[t,a])}};return i.scopeName=e,[function(r,i){let l=n.createContext(i),o=t.length;t=[...t,i];let s=r=>{let{scope:t,children:i,...s}=r,c=t?.[e]?.[o]||l,u=n.useMemo(()=>s,Object.values(s));return(0,a.jsx)(c.Provider,{value:u,children:i})};return s.displayName=r+"Provider",[s,function(t,a){let s=a?.[e]?.[o]||l,c=n.useContext(s);if(c)return c;if(void 0!==i)return i;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let a=t.reduce((r,{useScope:t,scopeName:n})=>{let a=t(e),i=a[`__scope${n}`];return{...r,...i}},{});return n.useMemo(()=>({[`__scope${r.scopeName}`]:a}),[a])}};return t.scopeName=r.scopeName,t}(i,...r)]}},9381:function(e,r,t){"use strict";t.d(r,{WV:function(){return o},jH:function(){return s}});var n=t(2265),a=t(4887),i=t(7256),l=t(7437),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let t=n.forwardRef((e,t)=>{let{asChild:n,...a}=e,o=n?i.g7:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,l.jsx)(o,{...a,ref:t})});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function s(e,r){e&&a.flushSync(()=>e.dispatchEvent(r))}},7256:function(e,r,t){"use strict";t.d(r,{g7:function(){return l}});var n=t(2265),a=t(2210),i=t(7437),l=n.forwardRef((e,r)=>{let{children:t,...a}=e,l=n.Children.toArray(t),s=l.find(c);if(s){let e=s.props.children,t=l.map(r=>r!==s?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,i.jsx)(o,{...a,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,i.jsx)(o,{...a,ref:r,children:t})});l.displayName="Slot";var o=n.forwardRef((e,r)=>{let{children:t,...i}=e;if(n.isValidElement(t)){let e,l;let o=(e=Object.getOwnPropertyDescriptor(t.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.ref:(e=Object.getOwnPropertyDescriptor(t,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning?t.props.ref:t.props.ref||t.ref;return n.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let a=e[n],i=r[n],l=/^on[A-Z]/.test(n);l?a&&i?t[n]=(...e)=>{i(...e),a(...e)}:a&&(t[n]=a):"style"===n?t[n]={...a,...i}:"className"===n&&(t[n]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}(i,t.props),ref:r?(0,a.F)(r,o):o})}return n.Children.count(t)>1?n.Children.only(null):null});o.displayName="SlotClone";var s=({children:e})=>(0,i.jsx)(i.Fragment,{children:e});function c(e){return n.isValidElement(e)&&e.type===s}},6459:function(e,r,t){"use strict";t.d(r,{W:function(){return a}});var n=t(2265);function a(e){let r=n.useRef(e);return n.useEffect(()=>{r.current=e}),n.useMemo(()=>(...e)=>r.current?.(...e),[])}},1030:function(e,r,t){"use strict";t.d(r,{b:function(){return a}});var n=t(2265),a=globalThis?.document?n.useLayoutEffect:()=>{}}},function(e){e.O(0,[895,206,971,864,744],function(){return e(e.s=9477)}),_N_E=e.O()}]);