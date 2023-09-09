import{i as B,u as F,c as R,f as O,a as T,r as d,R as f,j as e,m as l,b as A}from"./motion-9ac5b863.js";import{N as H}from"./index-b35466db.js";import{u as L,r as D,a as w,b as W}from"./use-scroll-9cee48d0.js";const Y=s=>typeof s=="object"&&s.mix,U=s=>Y(s)?s.mix:void 0;function _(...s){const t=!Array.isArray(s[0]),a=t?0:-1,i=s[0+a],n=s[1+a],r=s[2+a],c=s[3+a],x=B(n,r,{mixer:U(r[0]),...c});return t?x(i):x}function G(s,t){const a=L(t()),i=()=>a.set(t());return i(),F(()=>{const n=()=>O.update(i,!1,!0),r=s.map(c=>c.on("change",n));return()=>{r.forEach(c=>c()),R(i)}}),a}function N(s,t,a,i){const n=typeof t=="function"?t:_(t,a,i);return Array.isArray(s)?C(s,n):C([s],([r])=>n(r))}function C(s,t){const a=T(()=>[]);return G(s,()=>{a.length=0;const i=s.length;for(let n=0;n<i;n++)a[n]=s[n].get();return t(a)})}const J={some:0,all:1};function $(s,t,{root:a,margin:i,amount:n="some"}={}){const r=D(s),c=new WeakMap,x=v=>{v.forEach(g=>{const y=c.get(g.target);if(g.isIntersecting!==!!y)if(g.isIntersecting){const z=t(g);typeof z=="function"?c.set(g.target,z):m.unobserve(g.target)}else y&&(y(g),c.delete(g.target))})},m=new IntersectionObserver(x,{root:a,rootMargin:i,threshold:typeof n=="number"?n:J[n]});return r.forEach(v=>m.observe(v)),()=>m.disconnect()}function j(s,{root:t,margin:a,amount:i,once:n=!1}={}){const[r,c]=d.useState(!1);return d.useEffect(()=>{if(!s.current||n&&r)return;const x=()=>(c(!0),n?void 0:()=>c(!1)),m={root:t&&t.current||void 0,margin:a,amount:i};return $(s.current,x,m)},[t,s,a,n]),r}var S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},I=f.createContext&&f.createContext(S),u=globalThis&&globalThis.__assign||function(){return u=Object.assign||function(s){for(var t,a=1,i=arguments.length;a<i;a++){t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=t[n])}return s},u.apply(this,arguments)},Z=globalThis&&globalThis.__rest||function(s,t){var a={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&t.indexOf(i)<0&&(a[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(s);n<i.length;n++)t.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(s,i[n])&&(a[i[n]]=s[i[n]]);return a};function M(s){return s&&s.map(function(t,a){return f.createElement(t.tag,u({key:a},t.attr),M(t.child))})}function h(s){return function(t){return f.createElement(q,u({attr:u({},s.attr)},t),M(s.child))}}function q(s){var t=function(a){var i=s.attr,n=s.size,r=s.title,c=Z(s,["attr","size","title"]),x=n||a.size||"1em",m;return a.className&&(m=a.className),s.className&&(m=(m?m+" ":"")+s.className),f.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,c,{className:m,style:u(u({color:s.color||a.color},a.style),s.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),r&&f.createElement("title",null,r),s.children)};return I!==void 0?f.createElement(I.Consumer,null,function(a){return t(a)}):t(S)}function K(s){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(s)}function V(s){return h({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(s)}function Q(s){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(s)}function k(s){return h({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(s)}function X(s){return h({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M496 224c-79.59 0-144 64.41-144 144s64.41 144 144 144 144-64.41 144-144-64.41-144-144-144zm64 150.29c0 5.34-4.37 9.71-9.71 9.71h-60.57c-5.34 0-9.71-4.37-9.71-9.71v-76.57c0-5.34 4.37-9.71 9.71-9.71h12.57c5.34 0 9.71 4.37 9.71 9.71V352h38.29c5.34 0 9.71 4.37 9.71 9.71v12.58zM496 192c5.4 0 10.72.33 16 .81V144c0-25.6-22.4-48-48-48h-80V48c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h395.12c28.6-20.09 63.35-32 100.88-32zM320 96H192V64h128v32zm6.82 224H208c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h291.43C327.1 423.96 320 396.82 320 368c0-16.66 2.48-32.72 6.82-48z"}}]})(s)}function E(s){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(s)}function P(s){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"}}]})(s)}function ee(){const s="kyawzinmyat00000001@gmail.com",t="",a="";return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"box secondary-bg p-[3em] border-t-2 primary-color",children:e.jsxs("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 my-[4em] gap-10",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"py-2 text-lg",children:"Kyaw Zin Myat"}),e.jsx("p",{className:"py-2",children:"20 Years Old"}),e.jsx("p",{className:"py-2",children:"Software Developer"})]}),e.jsx("div",{className:"md:text-md text-xs sm:text-sm",children:e.jsxs("ul",{children:[e.jsx("li",{className:""}),e.jsx("li",{className:"",children:e.jsxs("a",{href:`mailto:${s}?subject=${encodeURIComponent(t)||""}&body=${encodeURIComponent(a)||""}`,className:"inline-flex  py-2 gap-2 items-center",children:[e.jsx(E,{}),e.jsx("span",{children:"kyawzinmyat00000001@gmail.com"})]})}),e.jsxs("li",{className:"py-2 inline-flex  gap-2 items-center",children:[e.jsx(P,{}),"+95 (09) 968-935-307"]}),e.jsx("li",{className:"py-2",children:e.jsxs("a",{className:"inline-flex  gap-2 items-center",href:"https://github.com/kyawzinmyat/",children:[e.jsx(V,{})," Kyawzin Myat"]})})]})}),e.jsx("div",{children:e.jsxs("div",{className:"grid grid-cols-3 list-none md:text-sm",children:[e.jsx("li",{children:"Python"}),e.jsx("li",{children:"Html"}),e.jsx("li",{children:"JavaScrilit"}),e.jsx("li",{children:"Odoo"}),e.jsx("li",{children:"CSS"}),e.jsx("li",{children:"React"}),e.jsx("li",{children:"Flask"}),e.jsx("li",{children:"Bootstrali"}),e.jsx("li",{children:"Vite"}),e.jsx("li",{children:"Django"}),e.jsx("li",{children:"Tailwind CSS"})]})})]})}),e.jsx("div",{className:"box w-full text-center secondary-accent-bg black-color p-5",children:e.jsx("p",{children:"Copyright © KyawzinMyat, 20 2023"})})]})}function p({width:s,height:t,radius:a="10px",progress:i}){const n={width:s,borderRadius:a},r={height:t};return e.jsx("div",{style:n,children:e.jsx("div",{style:r,className:i})})}function se({title:s,image:t,setCurrentImage:a}){const i=d.useRef(null),n=j(i,{margin:"-50% 0 -50% 0"});return d.useEffect(()=>{n&&a(e.jsx(l.img,{src:t,className:"rounded-[20px] mx-auto object-cover",alt:"image",style:{transition:"all 2s ease"}}))},[n]),e.jsx(l.p,{ref:i,className:"my-3 text-sm lg:text-md xl:text-4xl md:p-5 p-1",style:n?{fontWeight:900,scale:1.5,transition:"scale 3s ease"}:{fontWeight:200,opacity:.3},children:s})}function b({information:s,title:t,setCurrentImage:a}){let[i,n]=d.useState();const r=()=>{n(!i)};let c="rounded-[5px] row-span-3 shadow-lg";return i&&(c="rounded-[5px] row-span-3 shadow-lg "),i===!1&&(c="rounded-[5px] row-span-3 shadow-lg"),e.jsx("div",{children:e.jsx("div",{id:"accordian",className:c,onClick:r,children:e.jsx("div",{className:"flex gap-20 items-start w-full p-5 md:text-[15px] text-[10px] primary-color font-md",children:e.jsx("div",{className:"w-full flex flex-col xl:gap-20 lg:gap-10",children:s.map((x,m)=>e.jsx(se,{setCurrentImage:a,image:x[1],title:x[0]},m))})})})})}const o="/assets/python-0fa6d622.png",te="/assets/django-0f7ceeda.png",ae="/assets/eclipse-deb6971b.png",ne="/assets/github-784fbd98.png",ie="/assets/html5-0e3ca69b.png",re="/assets/css3-b46fc5cf.png",le="/assets/javascript-b1634bc3.png",ce="/assets/visual-studio-code-7aaded20.png",oe=[["Python",o],["Django/Rest",te],["Odoo",o],["PostgreSQL",o],["Mongodb",o],["HTML",ie],["CSS",re],["Bootstrap",o],["Tailwind CSS",o],["JavaScript",le],["React",o],["Vite",o]],de=[["Visual Studio Code",ce],["Eclipse",ae],["pgAdmin",o],["Ubuntu",o],["Figma",o],["Git",ne],["Docker",o]],me=[["Communication",o],["Positive Attitude",o],["Team Player",o],["Time Management",o]];function xe(){var s=d.useRef(null);const{scrollYProgress:t}=w({target:s,offset:["end end","end start"]});let[a,i]=d.useState(null);d.useState(!1);var n=N(t,[.5,.8],[1,0]);return d.useEffect(()=>{console.log(t)},[]),e.jsxs(l.div,{className:"box",ref:s,style:{opacity:n},children:[e.jsxs("div",{className:"primary-color",children:[e.jsx("h1",{className:"font-extrabold text-center primary-color header-upper-text",children:"Technical Stack"}),e.jsx("div",{className:"md:w-4/12 w-8/12 my-5 mx-auto",children:e.jsx("p",{className:"text-center md:p-4 my-[3rem] md:text-md font-md text-sm",children:"I used a variety of technologies as a Developer responsible for building dynamic web apps to provide high-quality software. "})})]}),e.jsx("div",{className:"primary-color my-4",children:e.jsxs(l.div,{className:"flex w-10/12 items-start gap-20 mx-auto ",children:[e.jsxs("div",{className:"w-full py-[40vh]",children:[e.jsx(b,{setCurrentImage:i,information:oe,title:"Technical"}),e.jsx(b,{setCurrentImage:i,information:de,title:"Tools"}),e.jsx(b,{setCurrentImage:i,information:me,title:"Soft Skills"})]}),e.jsx("div",{className:"w-full sticky top-0 h-[100vh] flex items-center",children:e.jsx("div",{className:"w-full aspect-square flex justify-center items-center",children:a})})]})}),e.jsxs("div",{className:"grid md:grid-cols-3 mx-auto progress section-margin gap-y-[8rem]",children:[e.jsxs("div",{className:"secondary-bg md:p-5 m-[3em] md:m-3",children:[e.jsx("h1",{className:"primary-color text-md lg:text-3xl text-center p-5",children:"Programming Languages"}),e.jsxs("div",{className:"py-[3em] px-[1.9rem] flex flex-col gap-6",children:[e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Python"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"JavaScript"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-70"})}),e.jsx("span",{children:"70%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Java"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-60"})}),e.jsx("span",{children:"60%"})]})]})]}),e.jsxs("div",{className:"secondary-bg md:p-5 m-[3em] md:m-3 primary-accent-gradient-bg rounded-[30px]",children:[e.jsx("h1",{className:"primary-color text-md lg:text-3xl text-center p-5",children:"Frameworks"}),e.jsxs("div",{className:"py-[3em] px-[1.9rem] flex flex-col gap-6",children:[e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Django"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Flask"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Odoo"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Tailwindcss"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-80"})}),e.jsx("span",{children:"80%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"Bootstrap"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-80"})}),e.jsx("span",{children:"80%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"React"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-70"})}),e.jsx("span",{children:"70%"})]})]})]}),e.jsxs("div",{className:"secondary-bg md:p-5 m-[3em] md:m-3",children:[e.jsx("h1",{className:"primary-color text-md lg:text-3xl text-center p-5",children:"Markup Languages"}),e.jsxs("div",{className:"py-[3em] px-[1.9em] flex flex-col gap-6",children:[e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"HTML"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"CSS"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]}),e.jsxs("div",{className:"gap-5 primary-color font-extrabold grid grid-cols-5",children:[e.jsx("p",{className:"col-span-full",children:"XML"}),e.jsx("div",{className:"col-span-4",children:e.jsx(p,{height:"20px",progress:"linear-progress-90"})}),e.jsx("span",{children:"90%"})]})]})]})]})]})}const pe="/assets/cs50-c242c707.webp",he="/assets/java_oo-0b25f7ed.png";function ge({title:s,img:t}){return e.jsxs(l.div,{className:"shadow-lg md:w-1/3 w-full",children:[e.jsx("img",{src:t,alt:s,className:"rounded-full"}),e.jsx("p",{className:"p-4 md:text-md text-sm",children:s})]})}const ue=[{img:pe,title:"Introduction to Computer Science is a course that focuses on developing students problem-solving abilities rather than their knowledge of various programming syntaxes."},{img:he,title:"This course focused on using the Java programming language for powerful, complex systems and object-oriented programming."}];function fe(){const s=d.useRef(null),t=j(s,{once:!0});return e.jsxs("div",{className:"primary-color text-3xl text-center font-bold m-5 md:p-[2em] p-[2em] box",children:[e.jsx("h1",{className:"p-[2em] md:text-3xl text-lg primary-color",children:"Certificates"}),e.jsx("div",{className:"flex flex-wrap md:w-8/12 mx-auto gap-[3em] my-5",ref:s,style:{transform:t?"none":"translateY(-200px)",opacity:t?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"},children:ue.map((a,i)=>e.jsx(ge,{title:a.title,img:a.img},i))})]})}function je(){return d.useEffect(()=>{const s=new IntersectionObserver(n=>{n.forEach(r=>{r.target.classList.toggle("left-fall",r.isIntersecting),r.isIntersecting&&s.unobserve(r.target)})},{threshold:1}),t=new IntersectionObserver(n=>{n.forEach(r=>{r.target.classList.toggle("right-fall",r.isIntersecting),r.isIntersecting&&t.unobserve(r.target)})},{threshold:1});document.querySelectorAll(".third").forEach(n=>{s.observe(n)}),document.querySelectorAll(".second").forEach(n=>{t.observe(n)})}),e.jsxs("div",{className:" w-8/12 mx-auto box my-5 secondary-color p-[3em]",children:[e.jsx("h1",{className:"font-extrabold primary-color text-lg md:text-3xl text-center p-5 my-[3em]",children:"Personal Goals and Road Map"}),e.jsxs("div",{className:"grid grid-rows-5 md:grid-cols-10 gap-[5em] p-5 secondary-color font-extrabold",children:[e.jsx("div",{className:"mx-auto md:w-full bg-[#ec5656d3] md:col-start-5 md:col-span-4 row-start-1 rounded-lg first",children:e.jsx("p",{className:"p-7 ",children:"start a professional software developer position in the US"})}),e.jsx("div",{className:"row-start-2 md:col-start-3 md:col-span-4  bg-[#df16e2c0] rounded-lg second",children:e.jsx("p",{className:"p-7 ",children:"Upgrading my computer science skills by learning design patterns."})}),e.jsx("div",{className:"row-start-3  md:col-start-4 md:col-span-4  bg-[#52d0aac4] rounded-lg first",children:e.jsx("p",{className:"p-7",children:"Put more emphasis on data structures and algorithms as a major step toward my dream."})}),e.jsx("div",{className:"row-start-4  bg-[#ddca1ee4]  md:col-start-3 md:col-span-4 rounded-lg first",children:e.jsx("p",{className:" p-7",children:"Improving English Language Proficiency for Better Communication"})}),e.jsx("div",{className:"row-start-5  bg-[#c76c57ec] md:col-start-2 md:col-span-4 rounded-lg third",children:e.jsx("p",{className:"p-7 ",children:"Pursuing a bachelor's While taking up the experience as much as I can"})})]})]})}function ve(){const s=d.useRef(null),{scrollYProgress:t}=w({target:s,offset:["end end","end start"]}),a=N(t,n=>{if(n<.5)return`linear-gradient(-${n*365}deg , rgba(0, 0, 0, .1) 70%,  rgba(0, 0, 0, .8) 50%,  rgba(0, 0, 0, .8) 50%,var(--primary-accent-color)  100%)`}),i=N(t,[0,.8,1],[1,.2,0]);return e.jsx(l.div,{ref:s,style:{background:a,opacity:i},transition:{delay:.2},className:"box landing-body wrapper flex justify-center items-center relative top-[-150px]",children:e.jsx("div",{className:"flex justify-center items-center",children:e.jsx("div",{className:"lg:grid lg:grid-cols-1 md:w-8/12 w-10/12 mx-auto my-[4em] grid",children:e.jsx("div",{className:"primary-color p-10 text-center flex justify-end items-center",children:e.jsxs("div",{className:"md:py-[2em] py-[8em] text-pop-animation landing-text",children:[e.jsx("h1",{className:"lg:text-2xl md:text-xl sm:text-lg text-sm header-upper-text font-light",children:"Who Am I?"}),e.jsxs("p",{className:"my-5 body-text",children:["I'm an ",e.jsx("strong",{className:"",children:"enthusiastic software developer"})," who lives in Yangon."]}),e.jsx("p",{className:"text-s md:text-sm font-md",children:"Passionate about creating cutting-edge web applications with both frontend and backend functionality."}),e.jsxs("div",{className:"flex justify-center py-[2em] gap-10",children:[e.jsx(V,{size:"50px"}),e.jsx(K,{size:"50px"}),e.jsx(Q,{size:"50px"})]})]})})})})})}function ye(){const s=d.useRef(null),t=j(s,{once:!0});let[a,i]=d.useState("professional");return e.jsxs("div",{className:"box aboutme-container mx-auto my-5 py-[2em] primary-color text-center max-h-max",ref:s,children:[e.jsx("h1",{className:"md:text-4xl header-text text-xs sm:text-xl font-extrabold primary-color p-[2em] md:p-[5em]",children:"A Brief Introduction of Myself"}),e.jsx("div",{className:"lg:w-9/12 w-full mx-auto about-me-container",style:{opacity:t?1:0,transition:"all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"},children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-y-10",children:[e.jsx(l.div,{className:"flex md:col-span-2 px-[2em] justify-end",children:e.jsxs("ul",{className:"flex gap-5 md:text-[1.3rem] xl:text-[1.5rem] text-[0.6rem] sm:text-[0.9rem] p-[0.1em] about-me-sections",children:[e.jsx("li",{className:"p-[1em] font-bold secondary-bg rounded-full ",style:a==="professional"?{backgroundColor:"var(--secondary-accent-color)",color:"black",opacity:1}:{opacity:.7},onClick:()=>i("professional"),children:"Professional"}),e.jsx("li",{className:"p-[1em] font-bold secondary-bg rounded-full",style:a==="personal"?{backgroundColor:"var(--secondary-accent-color)",color:"black",opacity:1}:{opacity:.7},onClick:()=>i("personal"),children:"Personal"}),e.jsx("li",{className:"p-[1em] font-bold secondary-bg rounded-full",style:a==="education"?{backgroundColor:"var(--secondary-accent-color)",color:"black",opacity:1}:{opacity:.7},onClick:()=>i("education"),children:"Education"})]})}),a==="professional"&&e.jsx(l.div,{className:"primary-color rounded-[5px]  shadow-lg col-span-2",children:e.jsx("div",{className:"p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx(l.h1,{initial:"hidden",animate:"visible",transition:{duration:10},className:"text-lg font-bold md:text-2xl my-3",children:"Professional"}),e.jsx("hr",{}),e.jsxs("div",{className:"font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text",children:[e.jsxs("p",{children:["My primary responsibilities include ",e.jsx("strong",{className:"uppercase font-black",children:"managing the timeline, maintaining communication with senior developers, and delivering the finished product on time"})," while providing software implementations for customer demands via project manager and team leader. I took involved in my seniors' projects in addition to my own by helping them with bug finding, brainstorming with them to come up with better solutions, and taking ownership of their assignments."]}),e.jsx("p",{className:"my-[2em]",children:"I have experience working on a variety of ERP projects, including those related to the manufacturing of shoes, iron and steel, processed foods, managing  human resources, and more. They used a number of modules, including inventory, invoicing, sales, and procurement. I must implement extensive customizations in addition to the well-functioning modules to satisfy the client's localization requirements and address the business need."})]})]})})}),a==="personal"&&e.jsx(l.div,{className:"primary-color rounded-[5px]  shadow-lg col-span-2",children:e.jsx("div",{className:"p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx(l.h1,{initial:"hidden",animate:"visible",transition:{duration:10},className:"text-lg font-bold md:text-2xl my-3",children:"Personal"}),e.jsx("hr",{}),e.jsxs("div",{className:"font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text",children:[e.jsx("p",{children:"I'm currently 20 years old living in Kamayut Township, Yangon. Playing video games and learning about new technologies, such as networking, software, and computer architecture, are two of my passions."}),e.jsx("p",{className:"my-3",children:" I'm pursuing a Bachelor in Computer Science at an online university right now."})]})]})})}),a==="education"&&e.jsx(l.div,{className:"primary-color rounded-[5px]  shadow-lg col-span-2",children:e.jsx("div",{className:"p-[2em] w-full lg:w-10/12 text-left flex justify-center items-center",children:e.jsxs("div",{children:[e.jsx(l.h1,{initial:"hidden",animate:"visible",transition:{duration:10},className:"text-lg font-bold md:text-2xl my-3",children:"Education"}),e.jsx("hr",{}),e.jsxs("div",{className:"font-md text-sm md:text-md lg:py[5em] py-[3em] about-me-text",children:[e.jsx("p",{children:"In 2019, I earned my high school diploma. At UCSY, I majored in computer science, but I no longer do so due to the political controversy."}),e.jsx("p",{className:"my-3",children:"During the COVID pandemic, I took computer science courses like CS50 and Object-Oriented Java programming to advance my skills."})]})]})})})]})}),e.jsx("div",{className:"aboutme-image-container"})]})}function be(s){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 3.75C0 2.784.784 2 1.75 2h20.5c.966 0 1.75.784 1.75 1.75v16.5A1.75 1.75 0 0 1 22.25 22H1.75A1.75 1.75 0 0 1 0 20.25ZM22.5 7h-21v13.25c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25Zm-10-3.5v2h10V3.75a.25.25 0 0 0-.25-.25ZM7 3.5v2h4v-2Zm-5.25 0a.25.25 0 0 0-.25.25V5.5h4v-2Z"}}]})(s)}function Ne(s){return h({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 2h13l.5.5V9h-1V6H2v7h7v1H1.5l-.5-.5v-11l.5-.5zM2 5h12V3H2v2zm5 7v-1.094a1.633 1.633 0 0 1-.469-.265l-.945.539-.5-.86.937-.547a1.57 1.57 0 0 1 0-.547l-.937-.546.5-.86.945.54c.151-.12.308-.209.469-.266V7h1v1.094a1.48 1.48 0 0 1 .469.265l.945-.539.5.86-.937.547a1.57 1.57 0 0 1 0 .546l.937.547-.5.86-.945-.54a1.807 1.807 0 0 1-.469.266V12H7zm-.25-2.5c0 .208.073.385.219.531a.723.723 0 0 0 .531.219.723.723 0 0 0 .531-.219.723.723 0 0 0 .219-.531.723.723 0 0 0-.219-.531.723.723 0 0 0-.531-.219.723.723 0 0 0-.531.219.723.723 0 0 0-.219.531zm5.334 5.5v-1.094a1.634 1.634 0 0 1-.469-.265l-.945.539-.5-.86.938-.547a1.572 1.572 0 0 1 0-.547l-.938-.546.5-.86.945.54c.151-.12.308-.209.47-.266V10h1v1.094a1.486 1.486 0 0 1 .468.265l.945-.539.5.86-.937.547a1.562 1.562 0 0 1 0 .546l.937.547-.5.86-.945-.54a1.806 1.806 0 0 1-.469.266V15h-1zm-.25-2.5c0 .208.073.385.219.531a.723.723 0 0 0 .531.219.723.723 0 0 0 .531-.219.723.723 0 0 0 .22-.531.723.723 0 0 0-.22-.531.723.723 0 0 0-.53-.219.723.723 0 0 0-.532.219.723.723 0 0 0-.219.531z"}}]})(s)}function we(s){return h({tag:"svg",attr:{version:"1.1",viewBox:"0 0 32 32"},child:[{tag:"path",attr:{d:"M22.624 11.916c0-0.58 0.002-1.129-0-1.677-0.002-0.545-0.24-0.784-0.791-0.784-4.983-0.001-9.965-0.001-14.947 0-0.537 0-0.772 0.236-0.772 0.768-0.001 1.566-0 3.132-0 4.698 0 0.090 0 0.181 0 0.289 0.338 0 0.655 0 0.999 0 0-1.581 0-3.151 0-4.731 4.849 0 9.67 0 14.52 0 0 0.486 0 0.957 0 1.437 0.338 0 0.647 0 0.992 0zM19.106 18.397c-3.301 0-6.585 0-9.878 0 0 0.662 0 1.306 0 1.957 3.302 0 6.585 0 9.878 0 0-0.66 0-1.306 0-1.957zM16.863 22.644c0.025-0.031 0.050-0.062 0.075-0.094-0.64-0.322-0.841-0.876-0.843-1.522-1.17 0-2.295 0-3.426 0-0.071 0.308-0.084 0.637-0.224 0.9-0.135 0.255-0.399 0.443-0.66 0.716 1.748 0 3.413 0 5.078 0zM27.343 22.017c-0.199 0.515-0.58 0.675-1.119 0.668-1.823-0.022-3.646-0.008-5.469-0.009-0.665-0-0.97-0.305-0.97-0.977-0.001-2.712-0.001-5.424-0-8.135 0-0.677 0.297-0.975 0.968-0.976 1.841-0.001 3.683 0.011 5.524-0.008 0.537-0.005 0.898 0.175 1.067 0.695 0 2.914 0 5.827 0 8.741zM26.778 21.024c0-2.589 0-5.147 0-7.707-2.163 0-4.303 0-6.45 0 0 2.579 0 5.143 0 7.707 2.162 0 4.301 0 6.45 0zM25.097 21.825c0.005-0.211-0.157-0.391-0.362-0.402-0.217-0.012-0.409 0.164-0.415 0.382-0.006 0.22 0.174 0.403 0.394 0.401 0.214-0.002 0.378-0.165 0.383-0.381zM22.787 21.82c0.002-0.221-0.18-0.401-0.399-0.397-0.203 0.004-0.379 0.183-0.383 0.388-0.004 0.217 0.18 0.399 0.401 0.395 0.208-0.004 0.38-0.177 0.381-0.386zM23.563 21.423c-0.204-0.007-0.388 0.163-0.398 0.369-0.011 0.223 0.158 0.408 0.379 0.414 0.213 0.006 0.386-0.155 0.397-0.367 0.011-0.223-0.158-0.408-0.378-0.416zM5.187 23.117c-0.404-0.121-0.533-0.393-0.529-0.809 0.016-1.904 0.006-3.809 0.007-5.713 0-0.498 0.192-0.701 0.695-0.705 0.833-0.008 1.666-0.007 2.5-0 0.483 0.004 0.689 0.214 0.689 0.689 0.002 1.941-0.004 3.882 0.005 5.823 0.002 0.38-0.18 0.59-0.508 0.715-0.953 0-1.906 0-2.859 0zM5.050 17.135c0 1.603 0 3.181 0 4.762 1.049 0 2.079 0 3.112 0 0-1.596 0-3.174 0-4.762-1.043 0-2.066 0-3.112 0zM22.624 11.916c-0.345 0-0.654 0-0.992 0 0-0.48 0-0.95 0-1.437-4.85 0-9.671 0-14.52 0 0 1.58 0 3.15 0 4.731-0.345 0-0.661 0-0.999 0 0-0.108 0-0.198 0-0.289 0-1.566-0-3.132 0-4.698 0-0.531 0.235-0.767 0.772-0.768 4.982-0.001 9.965-0.001 14.947 0 0.551 0 0.789 0.239 0.791 0.784 0.002 0.549 0 1.097 0 1.677zM19.106 18.397c0 0.651 0 1.297 0 1.957-3.293 0-6.577 0-9.878 0 0-0.651 0-1.295 0-1.957 3.294 0 6.577 0 9.878 0zM14.807 19.357c-0.006-0.248-0.216-0.439-0.468-0.427-0.24 0.012-0.424 0.21-0.417 0.45 0.006 0.234 0.209 0.434 0.44 0.435 0.242 0.001 0.451-0.214 0.446-0.458zM16.863 22.644c-1.665 0-3.331 0-5.078 0 0.261-0.273 0.525-0.46 0.66-0.716 0.139-0.263 0.153-0.592 0.224-0.9 1.132 0 2.256 0 3.426 0 0.001 0.646 0.203 1.2 0.843 1.522-0.025 0.031-0.050 0.062-0.075 0.094zM6.801 22.456c0 0.133-0.108 0.24-0.24 0.24s-0.24-0.108-0.24-0.24c0-0.133 0.108-0.24 0.24-0.24s0.24 0.108 0.24 0.24z"}}]})(s)}function ze(){let[s,t]=d.useState(0);return e.jsxs("div",{className:"box",children:[e.jsx("h1",{className:"p-[3em] w-11/12 md:w-8/12 mx-auto text-center secondary-gradient-color",children:"Employ the services to keep your company abreast of new technological developments!"}),e.jsxs("div",{className:"grid grid-cols-1 grid-rows-4 md:grid-rows-2 mx-auto gap-10 w-11/12 md:w-10/12 text-left md:grid-cols-2 lg:grid-cols-3",children:[e.jsxs(l.div,{viewport:{once:!0},whileInView:{opacity:s===0?1:.5},transition:{delay:.3},initial:{opacity:0},className:"rounded-[15px] md:col-start-2 shadow-sm shadow-neutral-700 p-[2em]",style:s===0?{background:"linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"}:{opacity:.5},onClick:()=>t(0),children:[e.jsxs("span",{className:"inline-flex gap-5 items-center ",children:[e.jsx(be,{size:"30px",fill:"#B2FF59"}),e.jsx("h3",{children:"Landing Pages"})]}),e.jsx("div",{className:"my-[2em]",children:e.jsx("p",{children:"Create a striking, straightforward, and contemporary landing page to impress visitors and strengthen customer relationships. "})})]}),e.jsxs(l.div,{viewport:{once:!0},whileInView:{opacity:s===1?1:.5},transition:{delay:.4},initial:{opacity:0},className:"rounded-[15px] shadow-sm shadow-neutral-700 p-[2em]",style:s===1?{background:"linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"}:{},onClick:()=>t(1),children:[e.jsxs("span",{className:"inline-flex gap-5 items-center ",children:[e.jsx(Ne,{size:"30px",fill:"#B2FF59"}),e.jsx("h3",{children:"Backend Application"})]}),e.jsx("div",{className:"my-[2em]",children:e.jsx("p",{children:"Additionally, it is feasible to combine the business logic with a front-end website made by the client or by me to create a completely functional business web application."})})]}),e.jsxs(l.div,{viewport:{once:!0},whileInView:{opacity:s===2?1:.5},transition:{delay:.5},initial:{opacity:0},className:"rounded-[15px] shadow-sm shadow-neutral-700 p-[2em]",style:s===2?{background:"linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)"}:{opacity:.5},onClick:()=>t(2),children:[e.jsxs("span",{className:"inline-flex gap-5 items-center ",children:[e.jsx(X,{size:"30px",fill:"#B2FF59"}),e.jsx("h3",{children:"ERP Business Website"})]}),e.jsx("div",{className:"my-[2em]",children:e.jsx("p",{children:"Create a striking, straightforward, and contemporary landing page to impress visitors and strengthen customer relationships. "})})]}),e.jsxs(l.div,{viewport:{once:!0},whileInView:{opacity:s===3?1:.5},transition:{delay:.6},initial:{opacity:0},className:"rounded-[15px] md:col-start-2 shadow-sm shadow-neutral-700 p-[2em]",style:s===3?{background:"linear-gradient(to right, var(--primary-accent-color) 0%,rgba(160,77,239, 0.6) 100%)",opacity:1}:{opacity:.5},onClick:()=>t(3),children:[e.jsxs("span",{className:"inline-flex gap-5 items-center ",children:[e.jsx(we,{size:"30px",fill:"#B2FF59"}),e.jsx("h3",{children:"Responsive Fullstack Web"})]}),e.jsx("div",{className:"my-[2em]",children:e.jsx("p",{children:"Web applications with a full range of functionality, including business logic, complicated computations, and a lovely user experience that works flawlessly on a variety of devices, including a phone, laptop, etc."})})]})]})]})}function Ce(){const s="kyawzinmyat00000001@gmail.com",t="",a="",i=d.useRef(null),n=j(i,{once:!0});return e.jsx("div",{className:"box",id:"contactme",ref:i,children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 w-11/12 lg:w-10/12 mx-auto gap-10  section-margin",children:[e.jsxs(l.div,{className:"pb-[5em] w-full md:w-10/12 md:p-[2em]",initial:{opacity:.3},viewport:{once:!0},whileInView:{opacity:1},transition:{delay:.7},children:[e.jsx("h1",{className:"font-bold",children:"Get in touch with me"}),e.jsx("p",{style:{fontWeight:200},className:"py-4",children:"Let's transform an idea into reality!"})]}),e.jsxs("div",{style:{transform:n?"none":"translateY(-200px)",opacity:n?1:0,transition:"transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s, opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"},className:"rounded-[10px] contactme md:row-start-2 p-[2em] inline-flex justify-between md:w-10/12 items-center text-[0.9em] lg:text-[1.5em]",children:[e.jsxs("a",{className:"inline-flex items-center",href:`mailto:${s}?subject=${encodeURIComponent(t)||""}&body=${encodeURIComponent(a)||""}`,children:[e.jsx("div",{className:"opacity-[.7]",children:e.jsx(E,{size:25})}),e.jsx("span",{className:"mx-[.7em] font-md",children:"Send me an Email"})]}),e.jsx("span",{children:e.jsx(k,{size:18})})]}),e.jsxs("div",{style:{transform:n?"none":"translateY(-200px)",opacity:n?1:0,transition:"transform 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s, opacity 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"},className:"rounded-[10px] contactme md:row-start-2 p-[2em] inline-flex justify-between md:w-10/12 items-center text-[0.9em] lg:text-[1.5em]",children:[e.jsxs("a",{className:"inline-flex items-center",href:"tel:09-968935307",children:[e.jsx("div",{className:"opacity-[.7]",children:e.jsx(P,{size:25})}),e.jsx("span",{className:"mx-[.7em] font-md",children:"Call me directly"})]}),e.jsx("span",{children:e.jsx(k,{size:18})})]})]})})}function Ie(){return e.jsxs(e.Fragment,{children:[e.jsx(ve,{}),e.jsx(ye,{}),e.jsx("div",{className:"section-margin",children:e.jsx(xe,{})}),e.jsxs("div",{className:"section-margin",children:[e.jsx(ze,{}),e.jsx(Ce,{})]}),e.jsx("div",{className:"section-margin",children:e.jsx(fe,{})}),e.jsx("div",{className:"section-margin",children:e.jsx(je,{})})]})}function ke(){const{scrollYProgress:s}=w();return W(s,{stiffness:100,damping:30,restDelta:.001}),e.jsxs(l.div,{children:[e.jsx(H,{activePage:"home"}),e.jsx(Ie,{}),e.jsx("div",{className:"section-margin",children:e.jsx(ee,{})})]})}A.createRoot(document.getElementById("root")).render(e.jsx(ke,{}));
