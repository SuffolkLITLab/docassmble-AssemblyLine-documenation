"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5228],{223:(e,n,a)=>{a.d(n,{A:()=>t});const t=a.p+"assets/images/example-al-language-68d9c4b7dbca50cd3eb08fe48a6c3e3b.png"},1470:(e,n,a)=>{a.d(n,{A:()=>_});var t=a(6540),r=a(8215),s=a(3104),o=a(6347),i=a(205),l=a(7485),u=a(1682),c=a(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,u.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,s=g(e),[o,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Dv)(a);return[r,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),f=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function y(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),r=i[a].value;r!==t&&(u(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function w(e){let{lazy:n,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(w,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(n))}},4478:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"style_guide/question_library/ql_language","title":"language","description":"The information on this page describes an input that allows the user to","source":"@site/docs/style_guide/question_library/language.md","sourceDirName":"style_guide/question_library","slug":"/style_guide/question_library/language","permalink":"/docs/style_guide/question_library/language","draft":false,"unlisted":false,"editUrl":"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/style_guide/question_library/language.md","tags":[],"version":"current","frontMatter":{"id":"ql_language","title":"language","sidebar_label":"Language","slug":"language"},"sidebar":"docs","previous":{"title":"Pronouns","permalink":"/docs/style_guide/question_library/pronouns"},"next":{"title":"Terms of Use","permalink":"/docs/style_guide/question_library/terms_of_use"}}');var r=a(4848),s=a(8453),o=a(1470),i=a(9365);const l={id:"ql_language",title:"language",sidebar_label:"Language",slug:"language"},u=void 0,c={},d=[{value:"Provide language choices that match your region&#39;s most spoken languages",id:"provide-language-choices-that-match-your-regions-most-spoken-languages",level:2},{value:"Sort in alphabetical order, excluding the two most popular languages",id:"sort-in-alphabetical-order-excluding-the-two-most-popular-languages",level:3},{value:"Avoid using a drop-down menu for language",id:"avoid-using-a-drop-down-menu-for-language",level:2},{value:"When possible, store the language name using the ISO 2 or 3 letter code",id:"when-possible-store-the-language-name-using-the-iso-2-or-3-letter-code",level:2},{value:"Do not use the native language version of the language name in ordinary circumstances",id:"do-not-use-the-native-language-version-of-the-language-name-in-ordinary-circumstances",level:2},{value:"Adding language fields in Docassemble",id:"adding-language-fields-in-docassemble",level:3}];function g(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The information on this page describes an input that allows the user to\nreport the language spoken by that user or a different participant in the\ncase to the court or tribunal."}),"\n",(0,r.jsx)(n.h2,{id:"provide-language-choices-that-match-your-regions-most-spoken-languages",children:"Provide language choices that match your region's most spoken languages"}),"\n",(0,r.jsx)(n.p,{children:"It can be hard for a user to interact with a long list of language choices.\nAbout 7 is ideal. For Massachusetts forms, we default to 9 options, giving\nspace for both Mandarin and Cantonese, to reflect the heterogeneity of\nimmigrant single-language populations in Eastern Massachusetts."}),"\n",(0,r.jsx)(n.h3,{id:"sort-in-alphabetical-order-excluding-the-two-most-popular-languages",children:"Sort in alphabetical order, excluding the two most popular languages"}),"\n",(0,r.jsx)(n.p,{children:"Ordinarily, your list of languages should be alphabetized, leaving room for the\ntwo most dominant languages in your region at the top, outside of the\nalphabetized sort. Any other order will cause your user extra effort to read. If\nthe second most popular language is very uncommon, we recommend placing it in\nits alphabetical sort rather than as the second option."}),"\n",(0,r.jsx)(n.p,{children:'Put the "other" option at the end of the list.'}),"\n",(0,r.jsx)(n.h2,{id:"avoid-using-a-drop-down-menu-for-language",children:"Avoid using a drop-down menu for language"}),"\n",(0,r.jsx)(n.p,{children:"You can safely provide about 7 choices using a radio button input. This style of\ninput is much easier to interact with, especially on a mobile device, and lets\nthe user identify the appropriate option at a glance."}),"\n",(0,r.jsx)(n.h2,{id:"when-possible-store-the-language-name-using-the-iso-2-or-3-letter-code",children:"When possible, store the language name using the ISO 2 or 3 letter code"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"language_name()"})," function will translate the ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes",children:"ISO 639-1\n"})," or ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/ISO_639-3",children:"ISO\n639-3"})," code back into its full written\nform. It is best to avoid translation issues by storing the code rather than a\nhuman-readable version of the name."]}),"\n",(0,r.jsx)(n.h2,{id:"do-not-use-the-native-language-version-of-the-language-name-in-ordinary-circumstances",children:"Do not use the native language version of the language name in ordinary circumstances"}),"\n",(0,r.jsx)(n.p,{children:"Your language picker may be used by an advocate or attorney, or it may be used\nby the litigant to report the language spoken by someone else. Therefore, you\nshould default to displaying the language name in the language that the\ninterview is currently being used in, rather than in its native version."}),"\n",(0,r.jsxs)(n.p,{children:["However, in some circumstances you may know that the litigant and not an\nadvocate will be reporting their ",(0,r.jsx)(n.em,{children:"own"})," spoken language. In that case, you can\ndisplay the language's name in the person's native language."]}),"\n",(0,r.jsx)(n.p,{children:"This advice does not apply to a selector that allows the user to choose the\nlanguage that they will answer questions in the guided interview with. When\nallowing the user to change the guided interview's language, use the native\nlanguage name."}),"\n",(0,r.jsx)(n.h3,{id:"adding-language-fields-in-docassemble",children:"Adding language fields in Docassemble"}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(i.A,{value:"Assembly Line Example",label:"Assembly Line Example",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sets:\n  - person.language\nid: language\nquestion: |\n  What language does ${ person } prefer to speak?\nfields:\n  - code: |\n      person.language_fields()\n"})})}),(0,r.jsx)(i.A,{value:"Vanilla Docassemble",label:"Vanilla Docassemble",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"sets:\n  - person.language\nid: language\nquestion: |\n  What language does ${ person } prefer to speak?\nfields:\n  - Language: person.language\n    datatype: radio\n    choices:\n      - English: en\n      - Spanish: es\n      - Arabic: ar\n      - Cape Verdean: kea\n      - Chinese (Cantonese): yue\n      - Chinese (Mandarin): cmn\n      - French: fr\n      - Haitian: ht\n      - Portuguese: pt\n      - Other: other\n  - Other language: person.language_other\n    show if: \n      variable: person.language\n      is: other\n"})})}),(0,r.jsx)(i.A,{value:"preview",label:"Preview",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:a(223).A+"",width:"907",height:"777"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}},9365:(e,n,a)=>{a.d(n,{A:()=>o});a(6540);var t=a(8215);const r={tabItem:"tabItem_Ymn6"};var s=a(4848);function o(e){let{children:n,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,o),hidden:a,children:n})}}}]);