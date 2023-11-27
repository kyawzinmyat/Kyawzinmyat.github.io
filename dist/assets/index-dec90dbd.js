import{r as e,u as R,f as B,a as F,P as H,L as $,j as s,m as b}from"./motion-9ac5b863.js";function L(){const t=e.useRef(!1);return R(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function A(){const t=L(),[o,n]=e.useState(0),r=e.useCallback(()=>{t.current&&n(o+1)},[o]);return[e.useCallback(()=>B.postRender(r),[r]),o]}class K extends e.Component{getSnapshotBeforeUpdate(o){const n=this.props.childRef.current;if(n&&o.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function O({children:t,isPresent:o}){const n=e.useId(),r=e.useRef(null),x=e.useRef({width:0,height:0,top:0,left:0});return e.useInsertionEffect(()=>{const{width:m,height:f,top:d,left:p}=x.current;if(o||!r.current||!m||!f)return;r.current.dataset.motionPopId=n;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${m}px !important;
            height: ${f}px !important;
            top: ${d}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[o]),e.createElement(K,{isPresent:o,childRef:r,sizeRef:x},e.cloneElement(t,{ref:r}))}const E=({children:t,initial:o,isPresent:n,onExitComplete:r,custom:x,presenceAffectsLayout:m,mode:f})=>{const d=F(U),p=e.useId(),l=e.useMemo(()=>({id:p,initial:o,isPresent:n,custom:x,onExitComplete:i=>{d.set(i,!0);for(const a of d.values())if(!a)return;r&&r()},register:i=>(d.set(i,!1),()=>d.delete(i))}),m?void 0:[n]);return e.useMemo(()=>{d.forEach((i,a)=>d.set(a,!1))},[n]),e.useEffect(()=>{!n&&!d.size&&r&&r()},[n]),f==="popLayout"&&(t=e.createElement(O,{isPresent:n},t)),e.createElement(H.Provider,{value:l},t)};function U(){return new Map}function Y(t){return e.useEffect(()=>()=>t(),[])}const g=t=>t.key||"";function D(t,o){t.forEach(n=>{const r=g(n);o.set(r,n)})}function S(t){const o=[];return e.Children.forEach(t,n=>{e.isValidElement(n)&&o.push(n)}),o}const _=({children:t,custom:o,initial:n=!0,onExitComplete:r,exitBeforeEnter:x,presenceAffectsLayout:m=!0,mode:f="sync"})=>{const d=e.useContext($).forceRender||A()[0],p=L(),l=S(t);let i=l;const a=e.useRef(new Map).current,h=e.useRef(i),v=e.useRef(new Map).current,y=e.useRef(!0);if(R(()=>{y.current=!1,D(l,v),h.current=i}),Y(()=>{y.current=!0,v.clear(),a.clear()}),y.current)return e.createElement(e.Fragment,null,i.map(c=>e.createElement(E,{key:g(c),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:m,mode:f},c)));i=[...i];const C=h.current.map(g),N=l.map(g),k=C.length;for(let c=0;c<k;c++){const u=C[c];N.indexOf(u)===-1&&!a.has(u)&&a.set(u,void 0)}return f==="wait"&&a.size&&(i=[]),a.forEach((c,u)=>{if(N.indexOf(u)!==-1)return;const w=v.get(u);if(!w)return;const I=C.indexOf(u);let j=c;if(!j){const M=()=>{v.delete(u),a.delete(u);const P=h.current.findIndex(z=>z.key===u);if(h.current.splice(P,1),!a.size){if(h.current=l,p.current===!1)return;d(),r&&r()}};j=e.createElement(E,{key:g(w),isPresent:!1,onExitComplete:M,custom:o,presenceAffectsLayout:m,mode:f},w),a.set(u,j)}i.splice(I,0,j)}),i=i.map(c=>{const u=c.key;return a.has(u)?c:e.createElement(E,{key:g(c),isPresent:!0,presenceAffectsLayout:m,mode:f},c)}),e.createElement(e.Fragment,null,a.size?i:i.map(c=>e.cloneElement(c)))};function T({children:t}){return s.jsx("a",{href:"/buttons/61",class:"py-3 px-5 primary-accent-bg text-white text-lg font-semibold rounded-md shadow-lg shadow-indigo-100/40 focus:outline-none hover:text-black",children:t})}function V(){return s.jsx("div",{className:"nav-toggle",id:"nav-toggle",children:s.jsx("div",{className:"hamburger"})})}function W({activePage:t}){let[o,n]=e.useState(!1),r=()=>{document.getElementById("nav-toggle").classList.toggle("nav-open"),n(!o)};e.useEffect(()=>{const l=document.getElementById("nav"),i=document.getElementById("hamburger");let a=0;window.addEventListener("scroll",()=>{const h=window.scrollY;a>50?(h<=a&&(l.classList.remove("scroll-down"),i.classList.remove("top-[-30em]")),h>a&&(l.classList.add("scroll-down"),l.classList.add("nav-nontransparent"),i.classList.add("top-[-30em]"))):l.classList.remove("nav-nontransparent"),a=h})},[]);let x="md:border-none p-[1em] "+(t==="home"?"active-nav-section":""),m=" md:border-none p-[1em] "+(t==="projects"?"active-nav-section":"");const f={initial:{scaleY:0},animate:{scaleY:1,transition:{duration:.5,ease:[.12,0,.39,0]}},exit:{scaleY:0,transition:{delay:.5,duration:.5,ease:[.22,1,.36,1]}}},d={initial:{y:"35vh",transition:{duration:.5}},open:{y:0,transition:{duration:.5}}},p={initial:{transition:{staggerChildren:.2,staggerDirection:-1}},open:{transition:{staggerChildren:.09,delayChildren:.3,staggerDirection:1}}};return s.jsxs("div",{className:"box sticky top-0",style:{zIndex:"10000"},children:[s.jsx("div",{className:"md:w-11/12 lg:w-10/12 w-full mx-auto",children:s.jsxs("div",{id:"nav",className:"flex md:flex-row md:justify-between md:items-center flex-col  w-full md:w-11/12 mx-auto primar-color secondary-bg",children:[s.jsx("div",{className:"md:mx-[2em] md:my-0",children:s.jsx("h1",{className:"font-extrabold text-xl  md:m-0 m-4",children:"KZM.asm"})}),s.jsx(_,{children:o&&s.jsx(b.ul,{variants:f,initial:"initial",animate:"animate",exit:"exit",className:"desktop-hide header-upper-text origin-top flex justify-center items-center md:flex md:flex-row md:justify-evenly md:m-0  md:gap-0 mx-auto flex-col w-4/12 sm:text-xl md:text-lg",id:"sub-nav",children:s.jsxs(b.div,{className:"overflow-hidden header-upper-text flex-col text-center",variants:p,initial:"initial",animate:"open",exit:"initial",children:[s.jsx(b.div,{variants:d,className:"py-[1em]",children:s.jsx("li",{className:x,children:s.jsx("a",{className:"font-extrabold text-3xl",href:"/",children:"Home"})})}),s.jsx(b.div,{variants:d,className:"py-[1em]",children:s.jsx("li",{className:m,children:s.jsx("a",{className:"font-extrabold text-3xl",href:"/projects/",children:"Projects"})})})]})})}),s.jsx("div",{className:"font-extrabold text-xl md:my-0 m-3 hidden md:block",id:"sub-button",children:s.jsxs("ul",{className:"mobile-hide origin-center flex justify-center items-center md:flex md:flex-row md:justify-evenly md:m-0  md:gap-10 mx-auto flex-col w-full sm:text-xl md:text-lg",id:"sub-nav",children:[s.jsx("li",{className:x,children:s.jsx("a",{className:"font-extrabold",href:"/",children:"Home"})}),s.jsx("li",{className:m,children:s.jsx("a",{className:"font-extrabold",href:"/projects/",children:"Projects"})}),s.jsx(T,{children:s.jsx("a",{href:"#contactme",className:"hover:text-black font-extrabold",children:"Contact Me"})})]})})]})}),s.jsx("div",{id:"hamburger",className:"desktop-hide  absolute top-7 left-[90%]",onClick:r,children:s.jsx(V,{})})]})}export{_ as A,W as N,T as P};