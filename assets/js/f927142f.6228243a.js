"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8810],{2895:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=o(4848),t=o(8453);const s={id:"efiling_monitoring",title:"Monitoring your e-filing operations\n",sidebar_label:"Monitoring",slug:"monitoring"},r=void 0,a={id:"components/EFSPIntegration/efiling_monitoring",title:"Monitoring your e-filing operations\n",description:"Monitoring",source:"@site/docs/components/EFSPIntegration/efiling_monitoring.md",sourceDirName:"components/EFSPIntegration",slug:"/components/EFSPIntegration/monitoring",permalink:"/docs/components/EFSPIntegration/monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/EFSPIntegration/efiling_monitoring.md",tags:[],version:"current",frontMatter:{id:"efiling_monitoring",title:"Monitoring your e-filing operations\n",sidebar_label:"Monitoring",slug:"monitoring"},sidebar:"docs",previous:{title:"E-filing codes",permalink:"/docs/components/EFSPIntegration/tyler_codes"},next:{title:"REST API",permalink:"/docs/components/EFSPIntegration/api"}},l={},c=[{value:"Monitoring",id:"monitoring",level:2},{value:"Accessing E-filing Proxy Logs",id:"accessing-e-filing-proxy-logs",level:3},{value:"Keeping track of Court Codes",id:"keeping-track-of-court-codes",level:3}];function g(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"monitoring",children:"Monitoring"}),"\n",(0,i.jsx)(e.p,{children:"Once you have developed and deployed your e-filing application, you will\nhave to monitor it to ensure it is functioning properly. This page has some\ntips and tools that you can use to help you monitor your application."}),"\n",(0,i.jsx)(e.h3,{id:"accessing-e-filing-proxy-logs",children:"Accessing E-filing Proxy Logs"}),"\n",(0,i.jsxs)(e.p,{children:["While you can add logs to your docassemble interview, you also might need\nto access logs from the e-filing proxy to have a better idea of what is\nhappening during the e-filing process. If you are a server administrator, you can access these e-filing logs by using the E-filing logs interview, which you can access at ",(0,i.jsx)(e.code,{children:"https://yourservername.com/start/EFSPIntegration/logs_interview"}),". This\nwill use the e-filing proxy credentials stored on your docassemble server to download all the logs from traffic from your server."]}),"\n",(0,i.jsx)(e.p,{children:"This interview also includes a filter for filing review comments, which is useful during a pilot launch and in making sure that your application isn't generating filings incorrectly."}),"\n",(0,i.jsx)(e.h3,{id:"keeping-track-of-court-codes",children:"Keeping track of Court Codes"}),"\n",(0,i.jsxs)(e.p,{children:["When making your interview, the court codes used might change. You should\ncontinually run ",(0,i.jsx)(e.a,{href:"/docs/components/ALKiln/alkiln",children:"automated testing"})," against your\ninterview to ensure that the codes still exist as your program expects them to."]})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>a});var i=o(6540);const t={},s=i.createContext(t);function r(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);