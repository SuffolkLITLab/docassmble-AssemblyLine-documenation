"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[515],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(4137)),r=["components"],s={id:"yaml_interface",title:"Choosing interface options",sidebar_label:"Choosing interface options",slug:"/coding_style_guide/yaml_interface"},l=void 0,c={unversionedId:"coding_style/yaml_interface",id:"coding_style/yaml_interface",title:"Choosing interface options",description:"Use radio buttons for short lists of options",source:"@site/docs/coding_style/yaml_interface.md",sourceDirName:"coding_style",slug:"/coding_style_guide/yaml_interface",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_interface",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml_interface.md",tags:[],version:"current",frontMatter:{id:"yaml_interface",title:"Choosing interface options",sidebar_label:"Choosing interface options",slug:"/coding_style_guide/yaml_interface"},sidebar:"someSidebar",previous:{title:"Making your interview dynamic",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_dynamic"},next:{title:"Planning for translation",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_translation"}},u={},p=[{value:"Use radio buttons for short lists of options",id:"use-radio-buttons-for-short-lists-of-options",level:2},{value:"Have a &quot;next&quot; or &quot;continue&quot; button on most screens",id:"have-a-next-or-continue-button-on-most-screens",level:2},{value:"Adding help in context",id:"adding-help-in-context",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"use-radio-buttons-for-short-lists-of-options"},"Use radio buttons for short lists of options"),(0,i.kt)("p",null,"When the user has only one valid choice among a relatively short list,\nuse radio buttons. Use a dropdown menu in situations where:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the list of choices is longer than about 7 options"),(0,i.kt)("li",{parentName:"ol"},"the choice is optional and not very common (such as a name suffix)")),(0,i.kt)("h2",{id:"have-a-next-or-continue-button-on-most-screens"},'Have a "next" or "continue" button on most screens'),(0,i.kt)("p",null,'Docassemble has a "yesno" question type that replaces the "Continue" button\nwith buttons that immediately move to the next screen. This feature\ncan be disorienting to users with a screen reader and you may lose user trust\nby having an inconsistent user interface.'),(0,i.kt)("p",null,"Instead, use ",(0,i.kt)("inlineCode",{parentName:"p"},"fields")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"yesnoradio")," even with a screen that asks a single\nyes/no question:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"question: |\n  Do you like pudding?\nfields:\n  - no label: likes_pudding\n    datatype: yesnoradio\n")),(0,i.kt)("p",null,"However, if the buttons represent actions, rather than choices, buttons may be\nappropriate."),(0,i.kt)("h2",{id:"adding-help-in-context"},"Adding help in context"),(0,i.kt)("p",null,"We prefer using the progressive disclosure element to provide help in-context.\nThis is available from ",(0,i.kt)("inlineCode",{parentName:"p"},"ALToolbox")," with the name ",(0,i.kt)("inlineCode",{parentName:"p"},"collapse_template()")," and\nincluded by default in the Assembly Line package."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"collapse_template()")," function with a ",(0,i.kt)("inlineCode",{parentName:"p"},"template")," block to add\nin-context explanatory text in the ",(0,i.kt)("inlineCode",{parentName:"p"},"subquestion")," of your question block."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: intro\nquestion: |\n  Social Security Overpayment Waiver or Change\nsubquestion: |\n  This website can help you ask the Social Security administration to \n  \n  1. **lower the amount that must be paid back**, or;\n  1. **change the schedule of payments** for someone who is told that they\n  owe the Social Security Administration money.\n  \n  ${ collapse_template(overpayment_waiver_help_template) }\ncontinue button field: intro_screen\n---\ntemplate: overpayment_waiver_help_template\nsubject: |\n  More information about an overpayment waiver\ncontent: |\n  When Social Security says that you have an overpayment they are saying that\n  you got more SSI or SSDI than you should have gotten under their rules. The\n  reason Social Security says you have an overpayment is in the Notice of \n  Overpayment. \n")),(0,i.kt)("p",null,"Docassemble has many features that allow you to add help\nin-context. They include:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/modifiers.html#help"},"question help button")),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/modifiers.html#terms"},"glossary ",(0,i.kt)("inlineCode",{parentName:"a"},"terms")," feature")),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"under")," area"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#hint"},"field ",(0,i.kt)("inlineCode",{parentName:"a"},"hint")," modifier")," that adds placeholder text"),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#help"},"field ",(0,i.kt)("inlineCode",{parentName:"a"},"help")," modifier")),(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/fields.html#field%20with%20choices"},"option ",(0,i.kt)("inlineCode",{parentName:"a"},"help")," modifier"))),(0,i.kt)("p",null,'Through expert feedback, we have determined that the question help button should\nnever be used. The placement of the button and the use of a separate mode for\nhelp text can be confusing. Help may also come "too late" with this feature,\nafter a user has already completed answering the questions on screen.'),(0,i.kt)("p",null,"We also discourage use of the ",(0,i.kt)("inlineCode",{parentName:"p"},"hint")," modifier that adds placeholder text to a\nfield. ",(0,i.kt)("a",{parentName:"p",href:"https://www.nngroup.com/articles/form-design-placeholders/"},"Multiple\nreferences"),"\ndiscourage this feature."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"under")," feature can be a helpful place to add additional context to a\nscreen, although the field-specific ",(0,i.kt)("inlineCode",{parentName:"p"},"note")," feature may be more consistent with\nuser expectations across multiple questions."),(0,i.kt)("p",null,"The glossary ",(0,i.kt)("a",{parentName:"p",href:"https://docassemble.org/docs/initial.html#terms"},(0,i.kt)("inlineCode",{parentName:"a"},"terms"))," feature\nshould be used cautiously, perhaps with additional CSS to make it more\ndistinctive. The risk with this feature is distracting or confusing users."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"field")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"option")," help modifiers are both relatively clear and simple to\nuse for field-specific hints and to explain choices that may otherwise not be\nclear. Custom CSS may make these features slightly more polished than the\nstock Docassemble appearance."),(0,i.kt)("h2",{id:""}))}m.isMDXComponent=!0}}]);