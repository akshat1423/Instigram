import{R as l,d as u,j as e,u as p,r as f,B as d}from"./index-D9AcpMqu.js";/* empty css                  */import"./equalAtom-PdIFVlGp.js";import{I as x,S as n}from"./SelectInput-2E8gJ46G.js";import{i as g}from"./imageAtom-EX3fMRaZ.js";function h({handleSubmit:s}){const i=l(u);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"details-title",children:"Profile Details"}),e.jsxs("form",{className:"setup-form",onSubmit:r=>s(r),children:[e.jsx("label",{htmlFor:"bio",className:"dark",children:"Bio: "}),e.jsx(x,{name:"image",id:"image"}),e.jsx("label",{htmlFor:"bio",className:"bio-label dark",children:"Bio: "}),e.jsx("textarea",{name:"bio",id:"bio",cols:"30",rows:"10",className:"dark"}),e.jsx(n,{placeholder:"Department",name:"department",id:"department",type:"text",required:!0}),e.jsxs("div",{className:"details",children:[e.jsx(n,{placeholder:"Degree",name:"degree",id:"degree",type:"text",required:!0}),e.jsx(n,{placeholder:"Year",name:"year",id:"year",type:"text",required:!0})]}),e.jsx("div",{className:"submit-div",children:e.jsx("button",{type:"submit",className:"submit "+(i?"dark":""),children:"Next"})})]})]})}function I(){const s=p(),i=l(g);f.useEffect(()=>{fetch(`${d}/cookie`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"}}).then(async function(a){const t=a.status;await a.json(),t==401&&s("/signin")})},[]);function r(a){a.preventDefault();const t=new FormData(a.target),c={userId:localStorage.getItem("userId"),bio:t.get("bio"),department:t.get("department"),degree:t.get("degree"),year:t.get("year"),profileImage:i};fetch(`${d}/profile/details`,{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify(c)}).then(async function(o){const m=o.status;await o.json(),m==200&&s("/feed")})}return e.jsx("div",{className:"main",children:e.jsx("div",{className:"details-background",children:e.jsx(h,{handleSubmit:r})})})}export{I as default};