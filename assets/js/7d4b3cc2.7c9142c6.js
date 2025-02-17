"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8145],{8404:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"coding_style/yaml_dynamic","title":"Making your interview dynamic","description":"Use the depends on modifier when setting values with code","source":"@site/docs/coding_style/yaml_dynamic.md","sourceDirName":"coding_style","slug":"/coding_style/yaml_dynamic","permalink":"/docs/coding_style/yaml_dynamic","draft":false,"unlisted":false,"editUrl":"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/coding_style/yaml_dynamic.md","tags":[],"version":"current","frontMatter":{"id":"yaml_dynamic","title":"Making your interview dynamic","sidebar_label":"Making your interview dynamic","slug":"yaml_dynamic"},"sidebar":"docs","previous":{"title":"Structuring your interview","permalink":"/docs/coding_style/yaml_structure"},"next":{"title":"Choosing interface options","permalink":"/docs/coding_style/yaml_interface"}}');var o=i(4848),t=i(8453);const l={id:"yaml_dynamic",title:"Making your interview dynamic",sidebar_label:"Making your interview dynamic",slug:"yaml_dynamic"},a=void 0,d={},c=[{value:"Use the <code>depends on</code> modifier when setting values with code",id:"use-the-depends-on-modifier-when-setting-values-with-code",level:3},{value:"Use the attachment block or template file for display-only logic",id:"use-the-attachment-block-or-template-file-for-display-only-logic",level:3},{value:"Use Python classes in module files to keep complex logic readable",id:"use-python-classes-in-module-files-to-keep-complex-logic-readable",level:3},{value:"Use the &quot;named block&quot; pattern sparingly",id:"use-the-named-block-pattern-sparingly",level:3},{value:"Avoid <code>needs</code>, <code>sets</code>, <code>force_ask</code> and other logic &quot;hacks&quot;",id:"avoid-needs-sets-force_ask-and-other-logic-hacks",level:3},{value:"Use <code>validation code</code> carefully",id:"use-validation-code-carefully",level:3},{value:"Use <code>show if</code> with extra caution",id:"use-show-if-with-extra-caution",level:3}];function r(e){const n={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.h3,{id:"use-the-depends-on-modifier-when-setting-values-with-code",children:["Use the ",(0,o.jsx)(n.code,{children:"depends on"})," modifier when setting values with code"]}),"\n",(0,o.jsxs)(n.p,{children:["Using ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/logic.html#depends%20on",children:(0,o.jsx)(n.code,{children:"depends on"})})," keeps\nthe value of your variables fresh, while also keeping your YAML file easy to\nread and performant."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"---\nid: client_is_overpaid_person\nquestion: |\n  ${ client.familiar() }, are you filing for yourself or someone else?\nfields:\n  - no label: filing_for\n    datatype: radio\n    choices:\n      - Myself: self\n      - Someone else: someone_else  \n---\ndepends on:\n  - filing_for\ncode: |\n  client_is_overpaid_person = filing_for == 'self'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The snippet above will recalculate the value of ",(0,o.jsx)(n.code,{children:"client_is_overpaid_person"})," if\nthe user ever changes the value of ",(0,o.jsx)(n.code,{children:"filing_for"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"use-the-attachment-block-or-template-file-for-display-only-logic",children:"Use the attachment block or template file for display-only logic"}),"\n",(0,o.jsxs)(n.p,{children:["When the output document or form has responses that should sometimes be hidden,\nit is better to keep your variables general and use short logical statements\ninside the ",(0,o.jsx)(n.code,{children:"attachment"})," ",(0,o.jsx)(n.code,{children:"fields"})," block (or inside the DOCX template's Jinja2\ncode) to control when the variables are displayed or hidden."]}),"\n",(0,o.jsxs)(n.p,{children:["Use the multi-line ",(0,o.jsx)(n.code,{children:"mako"})," ",(0,o.jsx)(n.code,{children:"if"})," statement rather than a one-line ",(0,o.jsx)(n.code,{children:"ternary"})," ",(0,o.jsx)(n.code,{children:"if"}),"\nstatement. The preferred option is shown below:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"attachment:\n  pdf template file: my_template.pdf\n  fields:\n      - \"client_relationship_other\": |\n          % if not client_is_overpaid_person:\n          ${ relationship_to_user['other'] }\n          % endif\n      - \"client_relationship_other_explanation\": |\n          % if not client_is_overpaid_person and relationship_to_user['other']:\n          ${ client_relationship_other_explanation }\n          % endif\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The advantage of this is keeping your variable name space neat and completely\nsemantic. It reduces the need for adding ",(0,o.jsx)(n.code,{children:"depends on"})," modifiers."]}),"\n",(0,o.jsx)(n.p,{children:"When your logic starts to become nested several levels deep or you have very\ncomplex calculations, abandon this rule."}),"\n",(0,o.jsx)(n.h3,{id:"use-python-classes-in-module-files-to-keep-complex-logic-readable",children:"Use Python classes in module files to keep complex logic readable"}),"\n",(0,o.jsxs)(n.p,{children:["When you have very complex business rules that are reflected in the template\nfile, it is appropriate to move away from small ",(0,o.jsx)(n.code,{children:"mako"})," blocks inside the\ntemplate or attachment block. However, replacing complex logic with long ",(0,o.jsx)(n.code,{children:"code"}),"\nblocks is not always clear and easy to read."]}),"\n",(0,o.jsx)(n.p,{children:"It is better to encapsulate that logic inside a Python class."}),"\n",(0,o.jsx)(n.p,{children:"Use logical method names to encapsulate such logic. For example:"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"ALIndividual"})," class has a ",(0,o.jsx)(n.code,{children:"gender_female()"})," method that helps\nfill in checkboxes. It returns ",(0,o.jsx)(n.code,{children:"True"})," or ",(0,o.jsx)(n.code,{children:"False"})," depending on\nwhether the user specifies that ",(0,o.jsx)(n.code,{children:"the_individual.gender == 'female'"}),".\nThere is also a matching ",(0,o.jsx)(n.code,{children:"gender_male"})," and ",(0,o.jsx)(n.code,{children:"gender_other"})," method."]}),"\n",(0,o.jsx)(n.p,{children:"Small helper methods like this can make your attachment block or\nDOCX template easier to read. They can also reduce errors caused by\ncopying and pasting code."}),"\n",(0,o.jsx)(n.h3,{id:"use-the-named-block-pattern-sparingly",children:'Use the "named block" pattern sparingly'}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsxs)(n.a,{href:"https://suffolklitlab.org/legal-tech-class/docs/practical-guide-docassemble/controlling-interview-order#triggering-code-and-then-continuing-using-named-blocks",children:[(0,o.jsx)(n.code,{children:"named block"}),"\npattern"]}),'\nshould not be overused. Most often, it is appropriate to just use a standard\ncode block that defines a variable without giving it a "name".']}),"\n",(0,o.jsxs)(n.p,{children:["Use ",(0,o.jsx)(n.code,{children:"named blocks"})," when performing a calculation that should only need to be\nperformed once, such as sending an email or e-filing a form."]}),"\n",(0,o.jsxs)(n.h3,{id:"avoid-needs-sets-force_ask-and-other-logic-hacks",children:["Avoid ",(0,o.jsx)(n.code,{children:"needs"}),", ",(0,o.jsx)(n.code,{children:"sets"}),", ",(0,o.jsx)(n.code,{children:"force_ask"}),' and other logic "hacks"']}),"\n",(0,o.jsxs)(n.p,{children:["Avoid the use of question modifiers that make your logic harder to follow, such\nas ",(0,o.jsx)(n.code,{children:"needs"}),", ",(0,o.jsx)(n.code,{children:"sets"}),", ",(0,o.jsx)(n.code,{children:"force_ask()"})," and the like. Instead, be explicit with your\ninterview logic and place most logic directly in the ",(0,o.jsx)(n.code,{children:"interview order"})," block."]}),"\n",(0,o.jsx)(n.p,{children:"However, there are common exceptions to this rule:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"needs"})," on review screens and other blocks that do not automatically\ntrigger referenced variables to trigger ",(0,o.jsx)(n.code,{children:"template:"})," blocks and the like"]}),"\n",(0,o.jsxs)(n.li,{children:["use ",(0,o.jsx)(n.code,{children:"sets"})," with ",(0,o.jsx)(n.code,{children:"ALIndividual"})," blocks that rely on ",(0,o.jsx)(n.code,{children:"name_fields()"})," and\nsimilar fields, where needed for Docassemble to locate the question"]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"use-validation-code-carefully",children:["Use ",(0,o.jsx)(n.code,{children:"validation code"})," carefully"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"validation code"}),' is powerful, but can will cause a visible error when a\nvariable that is not already defined is mentioned. This may lead to bugs that\nshow up as pop-up "toast" notifications. This can be a poor user experience.']}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Use ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#validation%20code",children:(0,o.jsx)(n.code,{children:"validation code"})})," only for\nvalidation, not to set variable values."]}),"\n",(0,o.jsxs)(n.li,{children:["Always use the ",(0,o.jsx)(n.code,{children:"field"})," parameter when using ",(0,o.jsx)(n.code,{children:"validation_error()"})," inside a\n",(0,o.jsx)(n.code,{children:"validation code"})," modifier to ensure that errors are raised in context."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"use-show-if-with-extra-caution",children:["Use ",(0,o.jsx)(n.code,{children:"show if"})," with extra caution"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#show%20if",children:(0,o.jsx)(n.code,{children:"show if"})})," can be used\nto make question screens dynamic and usable. Still, be cautious when using\nit: if your ",(0,o.jsx)(n.code,{children:"show if"})," logic hides a variable that is referenced in a ",(0,o.jsx)(n.code,{children:"mandatory"}),"\nblock somewhere else in the interview, your user can be stuck on a screen\nwithout being able to continue."]}),"\n",(0,o.jsx)(n.p,{children:"To reduce this risk:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["unless it is necessary, use only one level deep of ",(0,o.jsx)(n.code,{children:"show if"})]}),"\n",(0,o.jsxs)(n.li,{children:["always implement the logic on your screen that uses ",(0,o.jsx)(n.code,{children:"show if"})," in the template\nor attachment block at the same time you implement it in the question block"]}),"\n",(0,o.jsxs)(n.li,{children:["always test your interview with answers that leave ",(0,o.jsx)(n.code,{children:"show if"})," fields hidden"]}),"\n",(0,o.jsxs)(n.li,{children:["actively search your code for ",(0,o.jsx)(n.code,{children:"show if"})," and confirm that hidden variables are\nonly referenced with matching logic as a final step before release"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var s=i(6540);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);