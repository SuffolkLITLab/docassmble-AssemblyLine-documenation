"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9507],{4137:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return f}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,p=d["".concat(l,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(p,o(o({ref:t},h),{},{components:n})):a.createElement(p,o({ref:t},h))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(4137)),o=["components"],s={id:"overview",title:"E-filing with Assembly Line\n",sidebar_label:"Overview",slug:"/efiling/overview"},l=void 0,c={unversionedId:"efiling/overview",id:"efiling/overview",title:"E-filing with Assembly Line\n",description:"Overview",source:"@site/docs/efiling/overview.md",sourceDirName:"efiling",slug:"/efiling/overview",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/overview",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"E-filing with Assembly Line\n",sidebar_label:"Overview",slug:"/efiling/overview"},sidebar:"someSidebar",previous:{title:"Reserved variable names that you cannot use",permalink:"/docassemble-AssemblyLine-documentation/docs/framework/reserved_keywords"},next:{title:"Integrating Docassemble interviews with e-filing",permalink:"/docassemble-AssemblyLine-documentation/docs/efiling/docassemble"}},h={},u=[{value:"Overview",id:"overview",level:2},{value:"What is e-filing?",id:"what-is-e-filing",level:3},{value:"Which courts can the LIT Lab&#39;s product talk to?",id:"which-courts-can-the-lit-labs-product-talk-to",level:3},{value:"Why use integrated e-filing?",id:"why-use-integrated-e-filing",level:3},{value:"Using the LIT Lab&#39;s product",id:"using-the-lit-labs-product",level:2},{value:"For users of the Assembly Line framework",id:"for-users-of-the-assembly-line-framework",level:3},{value:"For owners of third-party document assembly platforms",id:"for-owners-of-third-party-document-assembly-platforms",level:3},{value:"Technical information",id:"technical-information",level:2},{value:"E-file Proxy Server",id:"e-file-proxy-server",level:3},{value:"EFSP Docassemble Package",id:"efsp-docassemble-package",level:3},{value:"Handling cases with fees",id:"handling-cases-with-fees",level:3}],d={toc:u};function f(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Suffolk LIT Lab has created a tool to let guided interview authors add\none-click delivery of documents directly to the court's electronic docket."),(0,r.kt)("p",null,"This section talks about how to use our tools whether you are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an interview author using the Document Assembly Line framework, or"),(0,r.kt)("li",{parentName:"ul"},"the owner of a third-party document assembly platform who can integrate with a\nmodern REST API")),(0,r.kt)("h3",{id:"what-is-e-filing"},"What is e-filing?"),(0,r.kt)("p",null,"E-filing is the process of delivering a document directly to a court's case\nmanagement system, usually with some extra information or ",(0,r.kt)("em",{parentName:"p"},"metadata"),". The\nmetadata can include things like a case number, the names of parties, and codes\nthat tell a clerk what kind of filing is being delivered."),(0,r.kt)("p",null,"E-filing ",(0,r.kt)("strong",{parentName:"p"},"replaces")," delivering documents to the court by hand, mail, or\ncourier."),(0,r.kt)("p",null,"Traditionally, e-filing requires visiting a dedicated web page, creating an\naccount, converting documents into PDF format, and then inputting a lot of\nconfusing information, such as document type, filing codes, and court codes."),(0,r.kt)("p",null,"The LIT Lab's primary tool is code that guided interview authors can incorporate\nto add a ",(0,r.kt)("strong",{parentName:"p"},"simple one-click e-file button")," into an existing guided interview.\nThe interview author can pre-select or help the litigant select the proper\ncodes. This removes the most challenging part of traditional e-filing. If the\nlitigant qualifies for a fee waiver, they may not even be required to create an\naccount."),(0,r.kt)("p",null,'We have also created a very simple e-filing "portal" that works much like\ntraditional e-filing websites. This is not a product we expect end-users to\ninteract with just yet.'),(0,r.kt)("p",null,"There are many competing systems of e-filing, but often there is a ",(0,r.kt)("strong",{parentName:"p"},"monopoly"),"\nvendor within a given jurisdiction. Often, the vendor may have a program that\nallows third-parties to deliver documents to the vendor. Then, the vendor takes\ncare of delivering the document the rest of the way to the court's docket."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNqFkD9vgzAQR7_KyVMrhaHtxlApAVpFylA1bIHhYh9g4T_I2K0i4LvXNO0WKTfd8N4bfhPjVhBLWetw6KDMKwPxtqf3IAUJkMaT-5L0XUOSvM6fxbGE7ccerANhOY4j6bMiGJD32NIMu4fDvoQDnh-vod2qQTaVF0UOSuKdscq2ksblCmS_3UIR984ayddsT36G_NRg2mCi0AiNrofMBufhqb7jFbe953ve223vpWYbpslplCLONK2VivmONFUsja-gBoPyFavMEtEwCPRUCOmtY7GnRtowDN4eL4az1LtA_1AuMa6u_6jlBzqehAQ"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNqFkD9vgzAQR7_KyVMrhaHtxlApAVpFylA1bIHhYh9g4T_I2K0i4LvXNO0WKTfd8N4bfhPjVhBLWetw6KDMKwPxtqf3IAUJkMaT-5L0XUOSvM6fxbGE7ccerANhOY4j6bMiGJD32NIMu4fDvoQDnh-vod2qQTaVF0UOSuKdscq2ksblCmS_3UIR984ayddsT36G_NRg2mCi0AiNrofMBufhqb7jFbe953ve223vpWYbpslplCLONK2VivmONFUsja-gBoPyFavMEtEwCPRUCOmtY7GnRtowDN4eL4az1LtA_1AuMa6u_6jlBzqehAQ",alt:null}))),(0,r.kt)("p",null,"If you think of the e-filing vendor as a corporate mail room, then third-party\nvendors like the Suffolk LIT Lab are the equivalent of UPS or FedEx. We just get\nthe document to the building. The e-filing vendor handles getting it to the\nright desk. ",(0,r.kt)("strong",{parentName:"p"},"From a court clerk's point of view, the filing looks just like a\nfiling uploaded through the vendor's first-party system.")),(0,r.kt)("h3",{id:"which-courts-can-the-lit-labs-product-talk-to"},"Which courts can the LIT Lab's product talk to?"),(0,r.kt)("p",null,"The LIT Lab is a certified EFSP, or Electronic Filing Service Provider, for the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.tylertech.com/products/odyssey/file-serve"},"Tyler Technologies"),"\nsystem. We have a signed agreement with Illinois, and have finished the\ntechnical qualifications to file in these additional Tyler states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Illinois")," (fully certified with Tyler and executed agreement with court)"),(0,r.kt)("li",{parentName:"ul"},"California"),(0,r.kt)("li",{parentName:"ul"},"Georgia"),(0,r.kt)("li",{parentName:"ul"},"Indiana"),(0,r.kt)("li",{parentName:"ul"},"Maryland (requires a separate bond)"),(0,r.kt)("li",{parentName:"ul"},"Minnesota"),(0,r.kt)("li",{parentName:"ul"},"New Hampshire"),(0,r.kt)("li",{parentName:"ul"},"Texas (requires separate but identical technical certification)")),(0,r.kt)("p",null,"While the states listed above have third-party e-filing arrangements in place\nand we have been certified on a technical level to participate, there may be\nadditional requirements from the court for us to start filing documents in\nstates other than Illinois."),(0,r.kt)("p",null,"There are additional states that use Tyler as the monopoly vendor but do not\nhave a current EFSP agreement in place. In two states Suffolk LIT Lab has\nstarted conversations to be the first participants in a new EFSP program."),(0,r.kt)("p",null,"The LIT Lab also has a bespoke integration with ",(0,r.kt)("a",{parentName:"p",href:"https://www.jpclerkofcourt.us/courts/24th-judicial-district-court/e-filing/"},"Jefferson\nParish's\nJeffNet"),",\nan in-house e-filing tool built for ",(0,r.kt)("strong",{parentName:"p"},"Jefferson Parish, Louisiana"),"."),(0,r.kt)("p",null,"We are vendor neutral and interested in working with developers to add support\nfor additional e-filing systems if it makes sense. This is most likely to work\nif we can play a support and documentation role and the primary development\nhappens by an outside party."),(0,r.kt)("h3",{id:"why-use-integrated-e-filing"},"Why use integrated e-filing?"),(0,r.kt)("p",null,"Litigants often find ",(0,r.kt)("strong",{parentName:"p"},"filing")," a case to be one of the most confusing parts of\nstarting a new case. Integrating filing with a guided interview simplifies the\nlitigant's experience dramatically. The interview author can pre-define the\nanswers to a lot of questions the litigant would otherwise need to provide in\ntraditional e-filing."),(0,r.kt)("p",null,"In addition to helping with the filing process, our e-filing system allows\nlitigants to lookup court information, electronically serve the other party, and\nto look up information from existing cases."),(0,r.kt)("h2",{id:"using-the-lit-labs-product"},"Using the LIT Lab's product"),(0,r.kt)("p",null,"The LIT Lab has actually created three products that operate at different layers\nto connect with Tyler Technologies and JeffNet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/EfileProxyServer"},"REST API")," provided by a\nJava server that speaks directly to Tyler and JeffNet"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration"},"Python\npackage")," that\nprovides an object-oriented interface to the REST API"),(0,r.kt)("li",{parentName:"ol"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/efiling_integration.yml"},"Docassemble YAML\nfile"),"\nthat uses the Python code to provide an end-to-end filing solution.")),(0,r.kt)("p",null,"Many states are also interested in the accessibility of guided interview that\nuse an e-filing integration. We have produced a ",(0,r.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/automated_integrated_testing"},"test\nsuite")," that can provide automated\naccessibility information to audit Docassemble interview compliance with WCAG 2.0 and 2.1's A and AA certification levels."),(0,r.kt)("h3",{id:"for-users-of-the-assembly-line-framework"},"For users of the Assembly Line framework"),(0,r.kt)("p",null,"If you are an interview author using the Assembly Line Framework, using the LIT\nLab EFSP can be as simple as adding an ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," statement to your ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/efiling_integration.yml"},"Docassemble\ninterview\nYAML"),"\nand specifying a few variables, such as the filing code."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/efiling/docassemble"},"Get started integrating with Docassemble"),"."),(0,r.kt)("p",null,"If you want to use features in any way that is different to our implementation\nin our Assembly Line-focused YAML file, you can use the Python library or the\nREST API directly for advanced features."),(0,r.kt)("p",null,"In order to pass certification, we had to implement a user interface to all of\nthe features in the Tyler Technologies suite. We did that in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/any_filing_interview.yml"},"Docassemble\ninterview"),"\nthat we have made open source, so there is likely sample code for most use\ncases."),(0,r.kt)("h3",{id:"for-owners-of-third-party-document-assembly-platforms"},"For owners of third-party document assembly platforms"),(0,r.kt)("p",null,"If you are the owner of a third-party document assembly platform, such as ",(0,r.kt)("a",{parentName:"p",href:"https://a2jauthor.org"},"A2J\nAuthor"),", you will want to skip the Python and Docassemble\npackages and write code that speaks directly to our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/EfileProxyServer/"},"Java REST\nendpoint"),"."),(0,r.kt)("p",null,"This may require understanding some of the Tyler or JeffNet business rules. The\nDocassemble interview may be a useful reference guide as a supplement to the EFSP\nserver documentation."),(0,r.kt)("h2",{id:"technical-information"},"Technical information"),(0,r.kt)("p",null,"Both Tyler Technologies and JeffNet use the ",(0,r.kt)("a",{parentName:"p",href:"http://docs.oasis-open.org/legalxml-courtfiling/specs/ecf/v4.01/ecf-v4.01-spec/os/ecf-v4.01-spec-os.html"},"ECF\nv4.0"),'\n"envelope" as a wrapper around filed documents and metadata.'),(0,r.kt)("p",null,"Below is a broad diagram of the entities that the e-filing feature interacts with."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A diagram of the e-filing proxy server interacting with the EFSP docassemble package, and courts",src:n(3380).Z,width:"2187",height:"827"})),(0,r.kt)("h3",{id:"e-file-proxy-server"},"E-file Proxy Server"),(0,r.kt)("p",null,"The biggest part of the e-filing feature is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/EfileProxyServer"},"E-file Proxy Server"),", a docker packaged Java server that converts docassemble variables into ECF XML types and communicates with courts either over REST or SOAP."),(0,r.kt)("p",null,"You can host the proxy server on the same machine as a docassemble server, using docker-compose, or set up a separate HTTPS enabled server that serves multiple docassemble servers."),(0,r.kt)("p",null,"Currently, only the Suffolk LIT Lab has permission from Tyler to host and run\nthe proxy server."),(0,r.kt)("p",null,"Further documentation on using the Proxy Server can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/EfileProxyServer/tree/main/docs"},"on Github"),"."),(0,r.kt)("h3",{id:"efsp-docassemble-package"},"EFSP Docassemble Package"),(0,r.kt)("p",null,"There is also a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration"},"companion python\npackage")," to the\nProxy Server that is intended to simplify the communication from the docassemble\ninterview to the proxy server. It provides a python API to the Proxy Server, and\nhandles more advanced docassemble features for you."),(0,r.kt)("p",null,"The EFSP package also contains a generic filing interview that can be used an example of how to work with the python API."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The generic filing interview is made for development purposes, and not intended for non-expert (legal or technical) use."))),(0,r.kt)("h3",{id:"handling-cases-with-fees"},"Handling cases with fees"),(0,r.kt)("p",null,"Some cases require fees. In Louisiana's Jefferson Parish, the court prefers to\ncollect fees after the case is filed."),(0,r.kt)("p",null,"In jurisdictions that use the Tyler Technologies EFM, fees can be collected at\nthe time the case is filed. Collection of payment information happens on a page\nentirely controlled by Tyler technologies. Interviews request a fee calculation,\npass off control to the Tyler Payment Gateway, and then once payment is\ncompleted control passes back to the interview."),(0,r.kt)("p",null,"The Suffolk e-filing server also allows filing cases with a fee waiver. Some\ncourts may require that the litigant provide payment information even if they\nhave filed a fee waiver. That can be a court-by-court decision."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Payment information is never stored on the Suffolk e-filing server, or inside\nthe guided interview.")),(0,r.kt)("p",null,"Below is a technical diagram showing the fee collection process:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mermaid-js.github.io/mermaid-live-editor/edit#pako:eNplkctuwjAQRX9l5G3JD3jBplBUdVGksMxmiG_Akh_gR6sI8e91SkCm9crSnHt9bF9E7xWEFBHnDNdjpfkQ2HaOylr5nmOE3Rs0y-XL-q3dUovwhSCpzXurEzEN2mh3uAUqYgrsRjOhr2z6bDiBBiDeyN9RU6DmqXV31JHKoaBQhHRArDJ1-5Ss9CS9kwMUnXi0cIm0G3ywnLR3_-_ycKPtjG-K3TePkjZIj44heEs5IlTKfxNT15PHff75QdUSC2FRfLQqb32Z-jqRjrDohCxbhYGzSZ3o3LWg-aRK-1rp5IOQA5uIheCcfDu6XsgUMu7Q_F8zdf0BXUKbJA"},(0,r.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNplkctuwjAQRX9l5G3JD3jBplBUdVGksMxmiG_Akh_gR6sI8e91SkCm9crSnHt9bF9E7xWEFBHnDNdjpfkQ2HaOylr5nmOE3Rs0y-XL-q3dUovwhSCpzXurEzEN2mh3uAUqYgrsRjOhr2z6bDiBBiDeyN9RU6DmqXV31JHKoaBQhHRArDJ1-5Ss9CS9kwMUnXi0cIm0G3ywnLR3_-_ycKPtjG-K3TePkjZIj44heEs5IlTKfxNT15PHff75QdUSC2FRfLQqb32Z-jqRjrDohCxbhYGzSZ3o3LWg-aRK-1rp5IOQA5uIheCcfDu6XsgUMu7Q_F8zdf0BXUKbJA",alt:null}))))}f.isMDXComponent=!0},3380:function(e,t,n){t.Z=n.p+"assets/images/efile_broad_arch-49d84ccf7d067cea365c04f68a8bc693.svg"}}]);