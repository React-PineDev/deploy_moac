import{j as e,b as n,c as l,d as f,e as p,C as j,f as g,h as _,i as v,k as y,H as k,B as O,D as W,R as w,M as N}from"./index-RWzWC8mP.js";import{L as c}from"./ListContent-CgWxE8yV.js";import{B as S}from"./BannerPage-Dm1fbpHB.js";const B=()=>{const u=n.services,i=n.pages.services.banner,x=n.pages.services.title,d=s=>{const t="w-16 h-16 stroke-blue_bayoux-400 transition-colors duration-300 group-hover:stroke-blue_bayoux-200";switch(s){case"arbitrations":return e.jsx(l,{className:t,strokeWidth:1});case"tranining_seminars":return e.jsx(N,{className:t,strokeWidth:1});case"project_startups":return e.jsx(w,{className:t,strokeWidth:1});case"quantity_surveying":return e.jsx(W,{className:t,strokeWidth:1});case"commercial_claims":return e.jsx(O,{className:t,strokeWidth:1});case"constrction_infrastructure":return e.jsx(k,{className:t,strokeWidth:1});case"procurement":return e.jsx(y,{className:t,strokeWidth:1});case"business_advisory":return e.jsx(v,{className:t,strokeWidth:1});case"dispute_adjudication_boards":return e.jsx(_,{className:t,strokeWidth:1});case"contract_advice":return e.jsx(g,{className:t,strokeWidth:1});case"dispute_reslution":return e.jsx(j,{className:t,strokeWidth:1});case"project_monitoring":return e.jsx(p,{className:t,strokeWidth:1});case"commercial_techical_due_diligence":return e.jsx(f,{className:t,strokeWidth:1});default:return e.jsx(l,{className:t,strokeWidth:1})}},b=s=>{const t=[];let a=!1;for(const r of s)typeof r=="object"&&(a=!0,t.push(r));const o=[];if(a){for(let r=0;r<t.length;r++)o.push(e.jsx(c,{className:(r==0?"w-full mb-2 ":"w-auto ")+"list-disc pl-5 text-sm text-blue_bayoux-600",listData:t[r]},r));return e.jsxs(e.Fragment,{children:[o[0],e.jsxs("div",{className:"flex justify-between",children:[o[1],o[2]]})]})}else{for(let r=0;r<s.length;r++)o.push(s[r].toString());return e.jsx(c,{className:"block w-full list-disc pl-5 text-sm text-blue_bayoux-600",listData:o})}},m=({brief:s,listTitle:t,list:a})=>e.jsxs(e.Fragment,{children:[typeof s<"u"?e.jsx("p",{className:"mb-3 text-center text-sm text-blue_bayoux-600",children:s}):"",typeof t<"u"?e.jsx("p",{className:"mb-3 text-sm font-semibold text-blue_bayoux-600",children:t}):"",typeof a<"u"?b(a):""]}),h=()=>e.jsx(e.Fragment,{children:u.map((s,t)=>e.jsxs("div",{className:"group mb-5 flex break-inside-avoid-column flex-col rounded-[32px] border border-solid border-blue_bayoux-100 bg-blue_bayoux-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 hover:border-blue_bayoux-200 hover:bg-blue_bayoux-50 hover:shadow-custom-12xl",children:[d(s.icon),e.jsx("h4",{className:"mb-6 block h-14 w-full content-end text-right text-xl font-bold uppercase text-blue_bayoux-900 transition-colors duration-300 group-hover:text-harvest_gold-400",children:s.title}),e.jsx(m,{brief:s.content.brief,listTitle:s.content.listTitle,list:s.content.list})]},t))});return e.jsxs(e.Fragment,{children:[e.jsx(S,{title:i.title,bgImage:i.backgroundImage}),e.jsxs("div",{className:"container max-w-6xl px-3 py-[38px] sm:py-[68px]",children:[e.jsx("h3",{className:"after:content-[' '] relative mb-8 px-8 py-5 text-sm font-bold uppercase text-blue_bayoux-900 after:absolute after:bottom-0 after:left-0 after:top-0 after:-z-10 after:h-full after:w-1/5 after:rounded-l-2xl after:bg-blue_bayoux-100 sm:text-2xl sm:after:w-1/6",children:x}),e.jsx("div",{className:"columns-1 gap-5 md:columns-2 lg:columns-3",children:e.jsx(h,{})})]})]})};export{B as default};
