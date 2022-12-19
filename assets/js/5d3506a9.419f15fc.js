"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[1294],{4137:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return t?i.createElement(f,o(o({ref:n},c),{},{components:t})):i.createElement(f,o({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var u=2;u<l;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4663:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var i=t(7462),a=t(3366),l=(t(7294),t(4137)),o=["components"],r={id:"yaml",title:"Interview files",sidebar_label:"Interview files",slug:"/coding_style_guide/yaml"},s=void 0,u={unversionedId:"coding_style/yaml",id:"coding_style/yaml",title:"Interview files",description:"Docassemble interviews are written in",source:"@site/docs/coding_style/yaml.md",sourceDirName:"coding_style",slug:"/coding_style_guide/yaml",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml",draft:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml.md",tags:[],version:"current",frontMatter:{id:"yaml",title:"Interview files",sidebar_label:"Interview files",slug:"/coding_style_guide/yaml"},sidebar:"someSidebar",previous:{title:"Python",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/python"},next:{title:"Structuring your interview",permalink:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/yaml_structure"}},c={},d=[{value:"Use Python conventions for variable names and Python code in your YAML files",id:"use-python-conventions-for-variable-names-and-python-code-in-your-yaml-files",level:2},{value:"Organize and name your files",id:"organize-and-name-your-files",level:2},{value:"Use descriptive package names; include state and forum identifiers",id:"use-descriptive-package-names-include-state-and-forum-identifiers",level:3},{value:"Avoid spaces in file names; use lowercase letters",id:"avoid-spaces-in-file-names-use-lowercase-letters",level:3},{value:"Avoid using leading numbers in file names",id:"avoid-using-leading-numbers-in-file-names",level:3},{value:"Use descriptive names for YAML files",id:"use-descriptive-names-for-yaml-files",level:3},{value:"Use a small number of YAML files for each project",id:"use-a-small-number-of-yaml-files-for-each-project",level:3},{value:"Use clear filenames for modular interview files",id:"use-clear-filenames-for-modular-interview-files",level:3}],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Docassemble interviews are written in\n",(0,l.kt)("a",{parentName:"p",href:"https://suffolklitlab.org/legal-tech-class/docs/yaml"},"YAML"),"."),(0,l.kt)("p",null,"They may also contain:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"template files (e.g., DOCX, PDF, or Markdown (.md) files)"),(0,l.kt)("li",{parentName:"ul"},"images"),(0,l.kt)("li",{parentName:"ul"},"css"),(0,l.kt)("li",{parentName:"ul"},"javascript"),(0,l.kt)("li",{parentName:"ul"},"data sources in CSV, XLSX, or JSON format")),(0,l.kt)("p",null,"Keeping your files neat and organized can help other developers understand\nyour code."),(0,l.kt)("h2",{id:"use-python-conventions-for-variable-names-and-python-code-in-your-yaml-files"},"Use Python conventions for variable names and Python code in your YAML files"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/coding_style_guide/python"},"Python style guide"),"."),(0,l.kt)("h2",{id:"organize-and-name-your-files"},"Organize and name your files"),(0,l.kt)("h3",{id:"use-descriptive-package-names-include-state-and-forum-identifiers"},"Use descriptive package names; include state and forum identifiers"),(0,l.kt)("p",null,"For the Docassemble package, use names that help someone understand at a glance\nwhat your form does and where it can be used:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"include the form ",(0,l.kt)("strong",{parentName:"li"},"function")," and subject area. E.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"EvictionStay")," not\njust ",(0,l.kt)("inlineCode",{parentName:"li"},"Stay")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Motion")),(0,l.kt)("li",{parentName:"ul"},"include the state abbreviation if it is state-specific. E.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"MAEvictionStay")),(0,l.kt)("li",{parentName:"ul"},"include a forum abbreviation if a form with a similar name exists in a more\ncommon forum. E.g., ",(0,l.kt)("inlineCode",{parentName:"li"},"MAAppealsEvictionStay")," if you can request a stay in the\nAppeals and the trial courts. But: you likely don't need to specify\n",(0,l.kt)("inlineCode",{parentName:"li"},"MATrialEvictionStay")," if most of your forms are designed for the trial level."),(0,l.kt)("li",{parentName:"ul"},"unless you have a good reason, avoid internal court form reference numbers in\npackage names (you may want one interview to handle multiple forms in the\nfuture)")),(0,l.kt)("p",null,"Descriptive names will help you and external parties looking for examples in the\nfuture locate your package on GitHub."),(0,l.kt)("h3",{id:"avoid-spaces-in-file-names-use-lowercase-letters"},"Avoid spaces in file names; use lowercase letters"),(0,l.kt)("p",null,"Files in your Docassemble package, including YAML files, Python modules, and any\nstatic resource files or data sources, should all be be named without spaces.\nYou may choose to use ",(0,l.kt)("inlineCode",{parentName:"p"},"snake_case")," (underscores separating words) or ",(0,l.kt)("inlineCode",{parentName:"p"},"kebab-case"),"\n(hyphens separating words). Using snake case avoids problems with some\ncommand-line tools, as well as being more consistent with Python file name\nconventions, but one challenge is that ",(0,l.kt)("inlineCode",{parentName:"p"},"snake_case")," underscores can be hard to see\nin a file browser window."),(0,l.kt)("p",null,"Use lowercase letters in file names. Some file systems (Unix and Linux) are\ncase sensitive. Using a consistent case can reduce problems. Lower case is\nthe most commonly used convention."),(0,l.kt)("h3",{id:"avoid-using-leading-numbers-in-file-names"},"Avoid using leading numbers in file names"),(0,l.kt)("p",null,"Where possible, avoid using leading digits in file names. Leading digits\nare not valid in Python variable names, and it is often convenient to have\nvariable names and file names have matching prefixes."),(0,l.kt)("h3",{id:"use-descriptive-names-for-yaml-files"},"Use descriptive names for YAML files"),(0,l.kt)("p",null,'When you are editing a file, the context sometimes is missing in places that the\nfile name is displayed. Therefore, you should prefer using file names like\n"eviction_interview.yml" to just "interview.yml". Have the name describe the\nfunction of the file, and give it a name that might be meaningful and build\ntrust with your end user.'),(0,l.kt)("p",null,'Avoid using numbers, underscores, and other markers to indicate that you have a\n"final", "draft", etc. interview even during the editing process, as these have\na chance of getting leaked to the public. Instead, use ',(0,l.kt)("a",{parentName:"p",href:"/docassemble-AssemblyLine-documentation/docs/github"},"version\ncontrol")," to track the history of your files as your project develops."),(0,l.kt)("h3",{id:"use-a-small-number-of-yaml-files-for-each-project"},"Use a small number of YAML files for each project"),(0,l.kt)("p",null,'It can be a frustrating game of "which file is that in, again?" if you have too\nmany YAML files. Start out with just one YAML file for your interview. Start\nadding additional files when:'),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"you want to use an interview like a module inside another interview"),(0,l.kt)("li",{parentName:"ol"},'your YAML file is thousands of lines long and you have clear functional\nseparation between each file. For example: code, style, questions; or\nmaybe "eviction", "appeals", "bad_housing_conditions".'),(0,l.kt)("li",{parentName:"ol"},"you need to split work between multiple developers and you are running into\nchallenges with overwriting each others' work"),(0,l.kt)("li",{parentName:"ol"},"you need non-technical members of your team to be able to make changes with\nconfidence. You might choose to separate code from question language, in that\ncase.")),(0,l.kt)("h3",{id:"use-clear-filenames-for-modular-interview-files"},"Use clear filenames for modular interview files"),(0,l.kt)("p",null,"Docassemble allows you to include one interview into another interview file.\nIf you want to design a file to be re-used:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"avoid putting any mandatory blocks in the file"),(0,l.kt)("li",{parentName:"ol"},"use the ",(0,l.kt)("a",{parentName:"li",href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks"},(0,l.kt)("inlineCode",{parentName:"a"},"named block")," pattern")," for the ",(0,l.kt)("inlineCode",{parentName:"li"},"interview order")," block"),(0,l.kt)("li",{parentName:"ol"},"reference your ",(0,l.kt)("inlineCode",{parentName:"li"},"named block")," in the file users will run"),(0,l.kt)("li",{parentName:"ol"},"describe the function of each file in the name")),(0,l.kt)("p",null,"We recommend the annotations:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"to_include")," for the file with the interview logic, attachment block, and questions"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"standalone")," for a file that includes and then runs just one ",(0,l.kt)("inlineCode",{parentName:"li"},"to_include")," file"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"umbrella")," for a file that generates multiple templates")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Filename"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eviction_to_include.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"The interview order block, questions, and content for one interview that cannot be run from this file.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eviction_standalone.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"Include and run just one interview about evictions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eviction_umbrella.yml"),(0,l.kt)("td",{parentName:"tr",align:null},"Include and run multiple interviews related to eviction")))))}p.isMDXComponent=!0}}]);