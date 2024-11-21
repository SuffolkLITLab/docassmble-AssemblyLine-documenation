"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7137],{6242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>_,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4848),i=t(8453);const o={sidebar_label:"efm_client",title:"EFSPIntegration.efm_client"},r=void 0,c={id:"components/EFSPIntegration/efm_client",title:"EFSPIntegration.efm_client",description:"ProxyConnection Objects",source:"@site/docs/components/EFSPIntegration/efm_client.md",sourceDirName:"components/EFSPIntegration",slug:"/components/EFSPIntegration/efm_client",permalink:"/docs/components/EFSPIntegration/efm_client",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/EFSPIntegration/efm_client.md",tags:[],version:"current",frontMatter:{sidebar_label:"efm_client",title:"EFSPIntegration.efm_client"},sidebar:"docs",previous:{title:"REST API",permalink:"/docs/components/EFSPIntegration/api"},next:{title:"conversions",permalink:"/docs/components/EFSPIntegration/conversions"}},a={},l=[{value:"ProxyConnection Objects",id:"proxyconnection-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"authenticate_user",id:"authenticate_user",level:4},{value:"register_user",id:"register_user",level:4},{value:"get_service_types",id:"get_service_types",level:4},{value:"serialize_person",id:"serialize_person",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"proxyconnection-objects",children:"ProxyConnection Objects"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class ProxyConnection(EfspConnection)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The main class you use to communicate with the E-file proxy server from docassemble."}),"\n",(0,s.jsxs)(n.p,{children:["Many methods are unchanged from the parent class, ",(0,s.jsx)(n.a,{href:"py_efsp_client#EfspConnection",children:"EfspConnection"}),",\nand are documented there."]}),"\n",(0,s.jsx)(n.h4,{id:"__init__",children:"__init__"}),"\n",(0,s.jsxs)(n.p,{children:["Creates the connection. Tries to get params from docassemble's config, but can\nbe overriden with parameters to ",(0,s.jsx)(n.strong,{children:"init"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"authenticate_user",children:"authenticate_user"}),"\n",(0,s.jsx)(n.p,{children:"Params:\ntyler_email (str)\ntyler_password (str)\njeffnet_key (str)"}),"\n",(0,s.jsx)(n.h4,{id:"register_user",children:"register_user"}),"\n",(0,s.jsx)(n.p,{children:"registration_type needs to be INDIVIDUAL, FIRM_ADMINISTRATOR, or FIRM_ADMIN_NEW_MEMBER.\nIf registration_type is INDIVIDUAL or FIRM_ADMINISTRATOR, you need a password.\nIf it's FIRM_ADMINISTRATOR or FIRM_ADMIN_NEW_MEMBER, you need a firm_name_or_id"}),"\n",(0,s.jsx)(n.h4,{id:"get_service_types",children:"get_service_types"}),"\n",(0,s.jsx)(n.p,{children:"Checks the court info: if it has conditional service types, call a special API with all filing info so far to get service types"}),"\n",(0,s.jsx)(n.h4,{id:"serialize_person",children:"serialize_person"}),"\n",(0,s.jsx)(n.p,{children:"Converts a Docassemble Person or Individual into a dictionary suitable for\njson.dumps and in format expected by Tyler-specific endpoints on the EFSPProxy"})]})}function _(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var s=t(6540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);