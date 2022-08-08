"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[5891],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(t),p=i,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return t?a.createElement(g,l(l({ref:n},c),{},{components:t})):a.createElement(g,l({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9607:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var a=t(7462),i=t(3366),o=(t(7294),t(4137)),l=["components"],r={id:"yaml_translation",title:"Planning for translation and flexible updates",sidebar_label:"Planning for translation",slug:"/coding_style_guide/yaml_translation"},s=void 0,d={unversionedId:"coding_style/yaml_translation",id:"coding_style/yaml_translation",title:"Planning for translation and flexible updates",description:"Use labeled options with the choices modifier",source:"@site/docs/coding_style/yaml_translation.md",sourceDirName:"coding_style",slug:"/coding_style_guide/yaml_translation",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_translation",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml_translation.md",tags:[],version:"current",frontMatter:{id:"yaml_translation",title:"Planning for translation and flexible updates",sidebar_label:"Planning for translation",slug:"/coding_style_guide/yaml_translation"},sidebar:"someSidebar",previous:{title:"Choosing interface options",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_interface"},next:{title:'"Safe" coding\n',permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/defense"}},c={},u=[{value:"Use labeled options with the <code>choices</code> modifier",id:"use-labeled-options-with-the-choices-modifier",level:3},{value:"Avoid hardcoded string in code - use templates instead",id:"avoid-hardcoded-string-in-code---use-templates-instead",level:3},{value:"Do not add a language modifier to blocks in the default language",id:"do-not-add-a-language-modifier-to-blocks-in-the-default-language",level:3},{value:"Avoid using the language functions from <code>pattern.en</code> in your interview",id:"avoid-using-the-language-functions-from-patternen-in-your-interview",level:3}],m={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"use-labeled-options-with-the-choices-modifier"},"Use labeled options with the ",(0,o.kt)("inlineCode",{parentName:"h3"},"choices")," modifier"),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"choices")," field modifier, always provide both\na display label and a value."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fields: \n  - Pick a card, any card: which_card\n    choices:\n      - Ace: ace\n      - Queen: queen\n      - 3: three\n      - 1: one\n")),(0,o.kt)("p",null,"The value will remain stable for translation and any language changes that will\nbe made during the course of the project, allowing you to avoid updating your\nlogic with minor language tweaks."),(0,o.kt)("p",null,"It may be helpful to use ",(0,o.kt)("inlineCode",{parentName:"p"},"snake_case")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"choices")," values. This will help\nsignal that they are static terms that will not change when other interview\nlanguage changes."),(0,o.kt)("h3",{id:"avoid-hardcoded-string-in-code---use-templates-instead"},"Avoid hardcoded string in code - use templates instead"),(0,o.kt)("p",null,"Avoid placing literal English text inside code blocks, functions and methods. Instead,\nuse Docassemble ",(0,o.kt)("inlineCode",{parentName:"p"},"template")," blocks. You should use an ",(0,o.kt)("inlineCode",{parentName:"p"},"f")," string or explicitly\nconvert ",(0,o.kt)("inlineCode",{parentName:"p"},"template"),"s to ",(0,o.kt)("inlineCode",{parentName:"p"},"str")," to avoid certain Docassemble bugs."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ntemplate: my_text_template\ncontent: |\n  Hello, World\n---\ncode: |\n  list_options = [{'option1': str(my_text_template)}]\n")),(0,o.kt)("p",null,"Template blocks will become part of the Docassemble XLSX or XLIFF translation\nfile, which makes them the most convenient way to handle text that must be\ntranslated."),(0,o.kt)("h3",{id:"do-not-add-a-language-modifier-to-blocks-in-the-default-language"},"Do not add a language modifier to blocks in the default language"),(0,o.kt)("p",null,"For certain kinds of metadata, such as navigation sections, the only way to make\nthem change when the interview language changes is to add a ",(0,o.kt)("inlineCode",{parentName:"p"},"language:")," modifier."),(0,o.kt)("p",null,"Leave the default language with no modifier. E.g., if your interview is written\nin English, do not add a ",(0,o.kt)("inlineCode",{parentName:"p"},"language: en")," modifier. Instead, add the modifier\nto each new language as you go."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# English\nsections: \n  - Section 1\n  - Section 2\n---\nlanguage: es\nsections:\n  - Secci\xf3n 1\n  - Secci\xf3n 2\n")),(0,o.kt)("h3",{id:"avoid-using-the-language-functions-from-patternen-in-your-interview"},"Avoid using the language functions from ",(0,o.kt)("inlineCode",{parentName:"h3"},"pattern.en")," in your interview"),(0,o.kt)("p",null,"Docassemble includes very useful features to conjugate verbs, match gender, and\nmore that are drawn from ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern.en"),", such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"does_verb")," method of a\nDAList. These are safe to use inside a language-specific template, such as a\ncourt form that will always be filed in English. Never use these inside a\n",(0,o.kt)("inlineCode",{parentName:"p"},"question")," block:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"using ",(0,o.kt)("inlineCode",{parentName:"li"},"does_verb"),' and its cousins inside a question block leads to question\n"fragments" that may not be grammatical in another language'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"does_verb")," may not be available in a language that you decide to translate\nyour interview to in the future.")),(0,o.kt)("p",null,"Similarly, do not use sentence fragments to update text that will change if:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the number of people in a list is either 1 or more"),(0,o.kt)("li",{parentName:"ol"},"the user is answering the question on their own behalf or for someone else")),(0,o.kt)("p",null,"Instead: use a Mako ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," statement on the whole sentence."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\nid: agree overpaid\nquestion: |\n  % if client_is_overpaid_person:\n  Do you agree that you got too much money from Social Security?\n  % else:\n  Do you agree that ${recordee} got too much money from Social Security?\n  % endif\n")))}p.isMDXComponent=!0}}]);