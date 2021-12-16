"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8324],{4137:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(b,r(r({ref:t},c),{},{components:n})):o.createElement(b,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4657:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var o=n(7462),i=n(3366),a=(n(7294),n(4137)),r=["components"],l={id:"customization_overview",title:"Customization and theming",sidebar_label:"Customization and theming",slug:"/customization/overview"},s=void 0,u={unversionedId:"customization/customization_overview",id:"customization/customization_overview",title:"Customization and theming",description:"Visual customization",source:"@site/docs/customization/customization_overview.md",sourceDirName:"customization",slug:"/customization/overview",permalink:"/docassemble-AssemblyLine-documentation/docs/customization/overview",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/customization/customization_overview.md",tags:[],version:"current",frontMatter:{id:"customization_overview",title:"Customization and theming",sidebar_label:"Customization and theming",slug:"/customization/overview"},sidebar:"someSidebar",previous:{title:"AL Project Architecture",permalink:"/docassemble-AssemblyLine-documentation/docs/al_project_architecture"},next:{title:"Planning your interview",permalink:"/docassemble-AssemblyLine-documentation/docs/planning"}},c=[{value:"Visual customization",id:"visual-customization",children:[{value:"Starting with bootstrap.build",id:"starting-with-bootstrapbuild",children:[],level:3}],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"visual-customization"},"Visual customization"),(0,a.kt)("p",null,"You can customize Docassemble, and Assembly Line interviews, with a Bootstrap 5 theme."),(0,a.kt)("p",null,"If you want to build a custom theme, you can:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"build one from Bootstrap 5 source"),(0,a.kt)("li",{parentName:"ol"},"start with a theme generator tool like ",(0,a.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build"),"\nand in some cases, add some custom CSS to make it work with Docassemble.")),(0,a.kt)("h3",{id:"starting-with-bootstrapbuild"},"Starting with bootstrap.build"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://bootstrap.build/"},"bootstrap.build")," website."),(0,a.kt)("li",{parentName:"ol"},"Click the button to open the Builder"),(0,a.kt)("li",{parentName:"ol"},"Customize the options that you want to customize. Typically those will include:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Under color system, the $gray/$blue/etc. colors, if you use a matching color in your theme"),(0,a.kt)("li",{parentName:"ul"},"Under color system, almost always the variables ",(0,a.kt)("inlineCode",{parentName:"li"},"primary"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"secondary"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"info"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"warning"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"danger"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"light")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"dark")),(0,a.kt)("li",{parentName:"ul"},"Under Typography, customize any fonts that you wish to use"),(0,a.kt)("li",{parentName:"ul"},"Under forms, you may want to customize button size and rounded edges"))),(0,a.kt)("li",{parentName:"ol"},'Click the "export theme" button (it may be hidden behind a banner at the top of the page) and choose the\n"bootstrap.min.css" option. Rename this theme to be more specific. Optionally, download the ',(0,a.kt)("inlineCode",{parentName:"li"},"_variables.scss")," file\nso that you can easily load and adjust your settings in future.")),(0,a.kt)("p",null,"Add this theme to your Docassemble playground using the Folders | Static menu."),(0,a.kt)("p",null,"Next, you will need to make a small adjustment to the theme generated by bootstrap.build.\nCopy and paste the code below into the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.min.css")," file (or your new file name)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".visually-hidden {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n  \n.bg-dark {\n  background-color: #1a73e8!important;  /* replace with your desired nav bar color */\n}\n")))}p.isMDXComponent=!0}}]);