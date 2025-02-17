"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1521],{8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const o={},i=s.createContext(o);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(i.Provider,{value:n},e.children)}},8843:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"coding_style/yaml_interface","title":"Choosing interface options","description":"Use radio buttons for short lists of options","source":"@site/docs/coding_style/yaml_interface.md","sourceDirName":"coding_style","slug":"/coding_style/yaml_interface","permalink":"/docs/coding_style/yaml_interface","draft":false,"unlisted":false,"editUrl":"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml_interface.md","tags":[],"version":"current","frontMatter":{"id":"yaml_interface","title":"Choosing interface options","sidebar_label":"Choosing interface options","slug":"yaml_interface"},"sidebar":"docs","previous":{"title":"Making your interview dynamic","permalink":"/docs/coding_style/yaml_dynamic"},"next":{"title":"Planning for translation","permalink":"/docs/coding_style/yaml_translation"}}');var o=t(4848),i=t(8453);const a={id:"yaml_interface",title:"Choosing interface options",sidebar_label:"Choosing interface options",slug:"yaml_interface"},r=void 0,l={},c=[{value:"Use radio buttons for short lists of options",id:"use-radio-buttons-for-short-lists-of-options",level:2},{value:"Have a &quot;next&quot; or &quot;continue&quot; button on most screens",id:"have-a-next-or-continue-button-on-most-screens",level:2},{value:"Adding help in context",id:"adding-help-in-context",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"use-radio-buttons-for-short-lists-of-options",children:"Use radio buttons for short lists of options"}),"\n",(0,o.jsx)(n.p,{children:"When the user has only one valid choice among a relatively short list,\nuse radio buttons. Use a dropdown menu in situations where:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"the list of choices is longer than about 7 options"}),"\n",(0,o.jsx)(n.li,{children:"the choice is optional and not very common (such as a name suffix)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"have-a-next-or-continue-button-on-most-screens",children:'Have a "next" or "continue" button on most screens'}),"\n",(0,o.jsx)(n.p,{children:'Docassemble has a "yesno" question type that replaces the "Continue" button\nwith buttons that immediately move to the next screen. This feature\ncan be disorienting to users with a screen reader and you may lose user trust\nby having an inconsistent user interface.'}),"\n",(0,o.jsxs)(n.p,{children:["Instead, use ",(0,o.jsx)(n.code,{children:"fields"})," and ",(0,o.jsx)(n.code,{children:"yesnoradio"})," even with a screen that asks a single\nyes/no question:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"question: |\n  Do you like pudding?\nfields:\n  - no label: likes_pudding\n    datatype: yesnoradio\n"})}),"\n",(0,o.jsx)(n.p,{children:"However, if the buttons represent actions, rather than choices, buttons may be\nappropriate."}),"\n",(0,o.jsx)(n.h2,{id:"adding-help-in-context",children:"Adding help in context"}),"\n",(0,o.jsxs)(n.p,{children:["We prefer using the progressive disclosure element to provide help in-context.\nThis is available from ",(0,o.jsx)(n.code,{children:"ALToolbox"})," with the name ",(0,o.jsx)(n.code,{children:"collapse_template()"})," and\nincluded by default in the Assembly Line package."]}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"collapse_template()"})," function with a ",(0,o.jsx)(n.code,{children:"template"})," block to add\nin-context explanatory text in the ",(0,o.jsx)(n.code,{children:"subquestion"})," of your question block."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\nid: intro\nquestion: |\n  Social Security Overpayment Waiver or Change\nsubquestion: |\n  This website can help you ask the Social Security administration to \n  \n  1. **lower the amount that must be paid back**, or;\n  1. **change the schedule of payments** for someone who is told that they\n  owe the Social Security Administration money.\n  \n  ${ collapse_template(overpayment_waiver_help_template) }\ncontinue button field: intro_screen\n---\ntemplate: overpayment_waiver_help_template\nsubject: |\n  More information about an overpayment waiver\ncontent: |\n  When Social Security says that you have an overpayment they are saying that\n  you got more SSI or SSDI than you should have gotten under their rules. The\n  reason Social Security says you have an overpayment is in the Notice of \n  Overpayment. \n"})}),"\n",(0,o.jsx)(n.p,{children:"Docassemble has many features that allow you to add help\nin-context. They include:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/modifiers.html#help",children:"question help button"})]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsxs)(n.a,{href:"https://docassemble.org/docs/modifiers.html#terms",children:["glossary ",(0,o.jsx)(n.code,{children:"terms"})," feature"]})]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.code,{children:"under"})," area"]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsxs)(n.a,{href:"https://docassemble.org/docs/fields.html#hint",children:["field ",(0,o.jsx)(n.code,{children:"hint"})," modifier"]})," that adds placeholder text"]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsxs)(n.a,{href:"https://docassemble.org/docs/fields.html#help",children:["field ",(0,o.jsx)(n.code,{children:"help"})," modifier"]})]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsxs)(n.a,{href:"https://docassemble.org/docs/fields.html#field%20with%20choices",children:["option ",(0,o.jsx)(n.code,{children:"help"})," modifier"]})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:'Through expert feedback, we have determined that the question help button should\nnever be used. The placement of the button and the use of a separate mode for\nhelp text can be confusing. Help may also come "too late" with this feature,\nafter a user has already completed answering the questions on screen.'}),"\n",(0,o.jsxs)(n.p,{children:["We also discourage use of the ",(0,o.jsx)(n.code,{children:"hint"})," modifier that adds placeholder text to a\nfield. ",(0,o.jsx)(n.a,{href:"https://www.nngroup.com/articles/form-design-placeholders/",children:"Multiple\nreferences"}),"\ndiscourage this feature."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"under"})," feature can be a helpful place to add additional context to a\nscreen, although the field-specific ",(0,o.jsx)(n.code,{children:"note"})," feature may be more consistent with\nuser expectations across multiple questions."]}),"\n",(0,o.jsxs)(n.p,{children:["The glossary ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#terms",children:(0,o.jsx)(n.code,{children:"terms"})})," feature\nshould be used cautiously, perhaps with additional CSS to make it more\ndistinctive. The risk with this feature is distracting or confusing users."]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"field"})," and ",(0,o.jsx)(n.code,{children:"option"})," help modifiers are both relatively clear and simple to\nuse for field-specific hints and to explain choices that may otherwise not be\nclear. Custom CSS may make these features slightly more polished than the\nstock Docassemble appearance."]}),"\n",(0,o.jsx)(n.h2,{id:""})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);