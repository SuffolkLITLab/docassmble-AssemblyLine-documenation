"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7083],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,y=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),i=n(3366),o=(n(7294),n(4137)),l=["components"],a={id:"coding_style_yaml_structure",title:"Structuring your interview",sidebar_label:"Structuring your interview",slug:"/coding_style_guide/yaml_structure"},s=void 0,c={unversionedId:"coding_style_yaml_structure",id:"coding_style_yaml_structure",title:"Structuring your interview",description:"Use a logical order for blocks inside your YAML file",source:"@site/docs/coding_style_yaml_structure.md",sourceDirName:".",slug:"/coding_style_guide/yaml_structure",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_structure",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style_yaml_structure.md",tags:[],version:"current",frontMatter:{id:"coding_style_yaml_structure",title:"Structuring your interview",sidebar_label:"Structuring your interview",slug:"/coding_style_guide/yaml_structure"},sidebar:"someSidebar",previous:{title:"Interview files",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml"},next:{title:"Making your interview dynamic",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_dynamic"}},d=[{value:"Use a logical order for blocks inside your YAML file",id:"use-a-logical-order-for-blocks-inside-your-yaml-file",children:[],level:3},{value:"Add an <code>id</code> keyword to every question block",id:"add-an-id-keyword-to-every-question-block",children:[],level:3},{value:"Use an interview order block",id:"use-an-interview-order-block",children:[],level:3},{value:"Avoid setting values in your interview order block",id:"avoid-setting-values-in-your-interview-order-block",children:[],level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"use-a-logical-order-for-blocks-inside-your-yaml-file"},"Use a logical order for blocks inside your YAML file"),(0,o.kt)("p",null,"Each block in your YAML file is separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"---"),". Below is a suggested\ngood practice for organizing your blocks into a YAML file:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"include"),"d files. Your file may break or act unexpectedly if your\n",(0,o.kt)("inlineCode",{parentName:"li"},"include"),"s are in the wrong order. Keep them up top."),(0,o.kt)("li",{parentName:"ol"},"Metadata, such as file description and title, navigation ",(0,o.kt)("a",{parentName:"li",href:"https://docassemble.org/docs/initial.html#sections"},(0,o.kt)("inlineCode",{parentName:"a"},"sections")),"."),(0,o.kt)("li",{parentName:"ol"},"Your single, mandatory, ",(0,o.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block"},"interview\norder"),'\nblock. Ideally this should start "above the fold" in your playground. I.e.,\nin the first 20 or so lines. Relocate other blocks as needed to get this "above the fold" (except the ',(0,o.kt)("inlineCode",{parentName:"li"},"include")," block)."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"object")," blocks representing variables used in your interview."),(0,o.kt)("li",{parentName:"ol"},"Your ",(0,o.kt)("inlineCode",{parentName:"li"},"question")," blocks, in the approximate order that they appear in your\ninterview."),(0,o.kt)("li",{parentName:"ol"},"If short and clearly related, place ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," blocks that set variables based on\nquestions directly after the question that they respond to."),(0,o.kt)("li",{parentName:"ol"},"More complex ",(0,o.kt)("inlineCode",{parentName:"li"},"code")," blocks, including ",(0,o.kt)("inlineCode",{parentName:"li"},"named blocks"),", come next."),(0,o.kt)("li",{parentName:"ol"},"Your review screen logic."),(0,o.kt)("li",{parentName:"ol"},"Any object blocks that are used solely for the attachments, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"ALDocumentBundle")," objects."),(0,o.kt)("li",{parentName:"ol"},"Your attachment block.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ninclude:\n  - ...\n---\nmetadata:\n  title: My Interview\n  ...\n---\nid: interview order\nmandatory: True\ncode: |\n  intro_screen\n  ...\n  download_screen\n---\nid: intro\nquestion: |\n  Welcome to my interview\ncontinue button field: intro_screen\n---\nid: review screen\nquestion: |\n  Review your answers\nreview: \n  - Edit: users[0].name.first\n    button: |\n      Your name: ${ users[0] }\n---\nobjects:\n  - my_interview_attachment: ALDocument...\n---\nobjects:\n  - al_user_bundle: ALDocumentBundle...\n---\nattachment:\n  variable name: my_interview_attachment[i]\n  docx template file: my_interview.docx          \n")),(0,o.kt)("h3",{id:"add-an-id-keyword-to-every-question-block"},"Add an ",(0,o.kt)("inlineCode",{parentName:"h3"},"id")," keyword to every question block"),(0,o.kt)("p",null,"Add a unique ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," to every question block. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," can just be\na copy of the question text with punctuation removed."),(0,o.kt)("p",null,"Adding an id to each question:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'gives you an invariant piece of text to enter in the "search" bar for\nfeedback and bugs in your YAML file for the benefit of both developers and testers'),(0,o.kt)("li",{parentName:"ol"},"allows you to track your questions with analytics"),(0,o.kt)("li",{parentName:"ol"},"can prevent some (rare) docassemble bugs, or make it easier to find them"),(0,o.kt)("li",{parentName:"ol"},"make it easier to read and understand an interview phrase translation file")),(0,o.kt)("h3",{id:"use-an-interview-order-block"},"Use an ",(0,o.kt)("a",{parentName:"h3",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block"},"interview order")," block"),(0,o.kt)("p",null,"It is important to be able view the logic of your interview at a glance. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"interview order")," block concept is the most powerful way that we have found to\naccomplish that goal in Docassemble."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#the-interview-order-block"},"Read more about interview order blocks"),"."),(0,o.kt)("h3",{id:"avoid-setting-values-in-your-interview-order-block"},"Avoid setting values in your interview order block"),(0,o.kt)("p",null,"Wherever possible, use small code blocks that are triggered dynamically by the interview order block\nwhen a value is defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),". Do not set the values directly in the interview order block.\nSetting values in the order block can trigger infinite loops or unintended logic; it can also\nmake your code less flexible."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: client_is_overpaid_person\nquestion: |\n  ${ client.familiar() }, are you filing for yourself or someone else?\nfields:\n  - no label: filing_for\n    datatype: radio\n    choices:\n      - Myself: self\n      - Someone else: someone_else  \n---\ndepends on:\n  - filing_for\ncode: |\n  client_is_overpaid_person = filing_for == 'self'\n")))}m.isMDXComponent=!0}}]);