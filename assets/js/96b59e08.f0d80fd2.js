"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8510],{4137:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3872:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),i=["components"],s={id:"efiling",title:"E-filing through Assembly Line\n",sidebar_label:"E-filing",slug:"/framework/efiling"},c=void 0,l={unversionedId:"framework/efiling",id:"framework/efiling",title:"E-filing through Assembly Line\n",description:"Overview",source:"@site/docs/framework/efiling.md",sourceDirName:"framework",slug:"/framework/efiling",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/efiling",editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/framework/efiling.md",tags:[],version:"current",frontMatter:{id:"efiling",title:"E-filing through Assembly Line\n",sidebar_label:"E-filing",slug:"/framework/efiling"},sidebar:"someSidebar",previous:{title:"Automated testing",permalink:"/docassemble-AssemblyLine-documentation/docs/automated_integrated_testing"},next:{title:"Contributors",permalink:"/docassemble-AssemblyLine-documentation/docs/contributors"}},u=[{value:"Overview",id:"overview",children:[{value:"E-file Proxy Server",id:"e-file-proxy-server",children:[],level:3},{value:"EFSP Docassemble Package",id:"efsp-docassemble-package",children:[],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Once you have an application that assembles court documents for users, the next logical step is to send those documents to the court directly for the user.\nThe features on this page assist with communicating to certain court Electronic Filing Managers, or EFMs, so you can send documents to those courts."),(0,a.kt)("p",null,"Currently, we support ",(0,a.kt)("a",{parentName:"p",href:"https://www.tylertech.com/products/odyssey/file-serve"},"Tyler Technology's implementation")," of ",(0,a.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/legalxml-courtfiling/specs/ecf/v4.01/ecf-v4.01-spec/os/ecf-v4.01-spec-os.html"},"ECF v4.0"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://www.jpclerkofcourt.us/courts/24th-judicial-district-court/e-filing/"},"Jefferson Parish's JeffNet"),"."),(0,a.kt)("p",null,"Below is a broad diagram of the entities that the e-filing feature interacts with."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"A diagram of the e-filing proxy server interacting with the EFSP docassemble package, and courts",src:r(9510).Z})),(0,a.kt)("h3",{id:"e-file-proxy-server"},"E-file Proxy Server"),(0,a.kt)("p",null,"The biggest part of the e-filing feature is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/EfileProxyServer"},"E-file Proxy Server"),", a docker packaged Java server that converts docassemble variables into ECF XML types and communicates with courts either over REST or SOAP."),(0,a.kt)("p",null,"You can host the proxy server on the same machine as a docassemble server, using docker-compose, or set up a separate HTTPS enabled server that servers multiple docassemble servers."),(0,a.kt)("p",null,"Further documentation on using the Proxy Server can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/EfileProxyServer/tree/main/docs"},"on Github"),". "),(0,a.kt)("h3",{id:"efsp-docassemble-package"},"EFSP Docassemble Package"),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration"},"companion python package")," to the Proxy Server that is intended to simplify the communication from the docassemble interview to the proxy server.\nIt provides a python API to the Proxy Server, and handles more advanced docassemble features for you."),(0,a.kt)("p",null,"The EFSP package also contains a generic filing interview that can be used an example of how to work with the python API."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The generic filing interview is made for development purposes, and not intended for non-expert (legal or technical) use."))))}m.isMDXComponent=!0},9510:function(e,t,r){t.Z=r.p+"assets/images/efile_broad_arch-49d84ccf7d067cea365c04f68a8bc693.svg"}}]);