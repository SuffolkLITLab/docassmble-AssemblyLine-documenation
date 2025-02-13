"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[4993],{4892:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=l(4848),s=l(8453);const a={sidebar_label:"language",title:"AssemblyLine.language"},i=void 0,r={id:"components/AssemblyLine/language",title:"AssemblyLine.language",description:"get\\local\\languages\\_yaml",source:"@site/docs/components/AssemblyLine/language.md",sourceDirName:"components/AssemblyLine",slug:"/components/AssemblyLine/language",permalink:"/docs/components/AssemblyLine/language",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/AssemblyLine/language.md",tags:[],version:"current",frontMatter:{sidebar_label:"language",title:"AssemblyLine.language"},sidebar:"docs",previous:{title:"al_document",permalink:"/docs/components/AssemblyLine/al_document"},next:{title:"sessions",permalink:"/docs/components/AssemblyLine/sessions"}},o={},d=[{value:"get_local_languages_yaml",id:"get_local_languages_yaml",level:4},{value:"get_tuples",id:"get_tuples",level:4},{value:"get_language_list_dropdown",id:"get_language_list_dropdown",level:4},{value:"get_language_list_dropdown_item",id:"get_language_list_dropdown_item",level:4},{value:"get_language_list",id:"get_language_list",level:4},{value:"get_language_list_item",id:"get_language_list_item",level:4}];function g(e){const n={code:"code",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h4,{id:"get_local_languages_yaml",children:"get_local_languages_yaml"}),"\n",(0,t.jsx)(n.p,{children:"Get the path to the local languages.yml file. If it does not exist, it will return the path to the languages.yml"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"})," - the path to the local languages.yml file if it exists, otherwise the path to the languages.yml file"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"get_tuples",children:"get_tuples"}),"\n",(0,t.jsx)(n.p,{children:"Returns a list of tuples representing the language name, followed by language ISO 639-1 code."}),"\n",(0,t.jsx)(n.p,{children:"It will use the native_name value from the languages.yml file if available, otherwise it will use the\nEnglish name from pycountry. If neither is present, it will use the language code itself."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lang_codes"})," - a list of ISO 639-1 language codes (e.g. ['en', 'es'])"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"languages_path"})," - the path to the languages.yml file (defaults to data/sources/languages.yml)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A list of tuples representing the language name, followed by language ISO 639-1 code."}),"\n",(0,t.jsx)(n.h4,{id:"get_language_list_dropdown",children:"get_language_list_dropdown"}),"\n",(0,t.jsx)(n.p,{children:"Get a Bootstrap 5 dropdown menu for language selection that can be added to navigation bar."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lang_codes"})," - a list of ISO 639-1 language codes (e.g. ['en', 'es'])"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"current"})," - the current language code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"languages_path"})," - the path to the languages.yml file (defaults to data/sources/languages.yml)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event_name"})," - the name of the event to trigger when the language is changed"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"icon"})," - the name of the icon to use for the dropdown menu (defaults to fa-solid fa-language fa-xl)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"extra_class"})," - additional classes to add to the link"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A string containing the HTML for a dropdown menu for language selection."}),"\n",(0,t.jsx)(n.h4,{id:"get_language_list_dropdown_item",children:"get_language_list_dropdown_item"}),"\n",(0,t.jsx)(n.p,{children:"Given an ordered tuple, returns a link to the current interview with lang=language code and the link title\ngiven in the first part of the tuple."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"language"})," - a tuple containing the language name and language code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"link"})," - whether to return a link or just the text"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event_name"})," - the name of the event to trigger when the language is changed"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"})," - A string containing the HTML for a dropdown menu item for language selection."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"get_language_list",children:"get_language_list"}),"\n",(0,t.jsx)(n.p,{children:"Given a list of language codes, returns\na Bootstrap-formatted unordered inline list. The current language will not be a link."}),"\n",(0,t.jsx)(n.p,{children:"Deprecated behavior: instead of a list of language codes, you can provide list of\ntuples containing the language name and language code. This is deprecated and may be removed in a future version."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"languages"})," - a list of tuples containing the language name and language code (deprecated)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"current"})," - the current language code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"lang_codes"})," - a list of ISO 639-1 language codes (e.g. ['en', 'es'])"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"languages_path"})," - the path to the languages.yml file (defaults to data/sources/languages.yml)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event_name"})," - the name of the event to trigger when the language is changed"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"A string containing the HTML for an unordered inline list of language selection."}),"\n",(0,t.jsx)(n.h4,{id:"get_language_list_item",children:"get_language_list_item"}),"\n",(0,t.jsx)(n.p,{children:"Given an ordered tuple, returns a link to the current interview with lang=language code and the link title\ngiven in the first part of the tuple."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"language"})," - a tuple containing the language name and language code"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"link"})," - whether to return a link or just the text"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"event_name"})," - the name of the event to trigger when the language is changed"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"str"})," - A string containing the HTML for an unordered inline list item for language selection."]}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>r});var t=l(6540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);