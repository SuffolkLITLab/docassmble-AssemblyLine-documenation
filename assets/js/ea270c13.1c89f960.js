"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[2311],{9870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>r});var s=n(4848),o=n(8453);const i={sidebar_label:"interview_logic",title:"EFSPIntegration.interview_logic"},c=void 0,a={id:"components/EFSPIntegration/interview_logic",title:"EFSPIntegration.interview_logic",description:"A group of methods that were code blocks in various parts of the EFSP",source:"@site/docs/components/EFSPIntegration/interview_logic.md",sourceDirName:"components/EFSPIntegration",slug:"/components/EFSPIntegration/interview_logic",permalink:"/docs/components/EFSPIntegration/interview_logic",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/EFSPIntegration/interview_logic.md",tags:[],version:"current",frontMatter:{sidebar_label:"interview_logic",title:"EFSPIntegration.interview_logic"},sidebar:"docs",previous:{title:"conversions",permalink:"/docs/components/EFSPIntegration/conversions"},next:{title:"py_efsp_client",permalink:"/docs/components/EFSPIntegration/py_efsp_client"}},l={},r=[{value:"EFCaseSearch Objects",id:"efcasesearch-objects",level:2},{value:"search_went_wrong",id:"search_went_wrong",level:4},{value:"get_lookup_choices",id:"get_lookup_choices",level:4},{value:"num_case_choices",id:"num_case_choices",level:4},{value:"search_case_by_name",id:"search_case_by_name",level:4},{value:"shift_case_select_window",id:"shift_case_select_window",level:4},{value:"get_full_court_info",id:"get_full_court_info",level:4},{value:"get_max_allowed_sizes",id:"get_max_allowed_sizes",level:4},{value:"make_filter",id:"make_filter",level:4},{value:"filter_codes",id:"filter_codes",level:4},{value:"get_available_efile_courts",id:"get_available_efile_courts",level:4}];function d(e){const t={code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"A group of methods that were code blocks in various parts of the EFSP\npackage, but for better python tooling support, were moved here."}),"\n",(0,s.jsx)(t.h2,{id:"efcasesearch-objects",children:"EFCaseSearch Objects"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"class EFCaseSearch(DAObject)\n"})}),"\n",(0,s.jsx)(t.p,{children:"A data-class that has holds all of the information and state for a single case search"}),"\n",(0,s.jsx)(t.h4,{id:"search_went_wrong",children:"search_went_wrong"}),"\n",(0,s.jsx)(t.p,{children:"Returns true if something errored during the case search process"}),"\n",(0,s.jsx)(t.h4,{id:"get_lookup_choices",children:"get_lookup_choices"}),"\n",(0,s.jsx)(t.p,{children:'Returns the DA choice list of what ways you are allowed to search for a case;\nBy default, this is "party_search", and "docket_lookup", and depending on the\ncourt, it could also include "non_indexed_case".'}),"\n",(0,s.jsxs)(t.p,{children:["Not passed as direct arguments, but the object attributes ",(0,s.jsx)(t.code,{children:"party_search_choice"}),",\n",(0,s.jsx)(t.code,{children:"docket_lookup_choice"}),", and ",(0,s.jsx)(t.code,{children:"non_indexed_choice"})," are the user-facing labels\nfor each choice."]}),"\n",(0,s.jsx)(t.h4,{id:"num_case_choices",children:"num_case_choices"}),"\n",(0,s.jsx)(t.p,{children:"The number of cases that someone should have to choose between if there are too many.\nMostly to limit the amount of up-front waiting someone will have to do."}),"\n",(0,s.jsx)(t.h4,{id:"search_case_by_name",children:"search_case_by_name"}),"\n",(0,s.jsx)(t.p,{children:"Searches for cases by party name. If there are more than 10 cases found, we don't\nadd all of the detailed information about the case, just for the first few cases"}),"\n",(0,s.jsx)(t.h4,{id:"shift_case_select_window",children:"shift_case_select_window"}),"\n",(0,s.jsx)(t.p,{children:"Specifically used in case_search.yml, with an action to only fetch a detailed information\nfor a few cases at a time"}),"\n",(0,s.jsx)(t.h4,{id:"get_full_court_info",children:"get_full_court_info"}),"\n",(0,s.jsx)(t.p,{children:"Gets all of the information about the court from the id"}),"\n",(0,s.jsx)(t.h4,{id:"get_max_allowed_sizes",children:"get_max_allowed_sizes"}),"\n",(0,s.jsx)(t.p,{children:"Returns attachment max size, then message max size"}),"\n",(0,s.jsx)(t.h4,{id:"make_filter",children:"make_filter"}),"\n",(0,s.jsx)(t.p,{children:"Makes a 'filter' function from some simple type."}),"\n",(0,s.jsx)(t.p,{children:"Necessary because docassemble doesn't store lambdas and functions well in\ninterview dicts, so the filters need to be set as primitive types and kept\nthat way until the search actually happens (in filter_codes)."}),"\n",(0,s.jsx)(t.h4,{id:"filter_codes",children:"filter_codes"}),"\n",(0,s.jsx)(t.p,{children:"Given a list of filter functions from most specific to least specific,\n(if true, use that code), filters a total list of codes. If any codes match the exclude filter, won't use them."}),"\n",(0,s.jsx)(t.h4,{id:"get_available_efile_courts",children:"get_available_efile_courts"}),"\n",(0,s.jsx)(t.p,{children:"Gets the list of efilable courts, if it can"})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function c(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);