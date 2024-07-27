"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[8389],{4244:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=i(4848),s=i(8453);const o={id:"efiling_through_docassemble",title:"E-filing through Docassemble\n",sidebar_label:"Integrating Docassemble interviews with e-filing",slug:"/efiling/docassemble"},a=void 0,l={id:"efiling/efiling_through_docassemble",title:"E-filing through Docassemble\n",description:"This is a guide to get from a working Assembly Line Interview to an interview that can e-file through our EFSP to the Tyler EFM system.",source:"@site/docs/efiling/efiling_through_docassemble.md",sourceDirName:"efiling",slug:"/efiling/docassemble",permalink:"/docs/efiling/docassemble",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/efiling/efiling_through_docassemble.md",tags:[],version:"current",frontMatter:{id:"efiling_through_docassemble",title:"E-filing through Docassemble\n",sidebar_label:"Integrating Docassemble interviews with e-filing",slug:"/efiling/docassemble"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/efiling/overview"},next:{title:"Case Search",permalink:"/docs/efiling/case_search"}},r={},c=[{value:"Before starting",id:"before-starting",level:2},{value:"Steps",id:"steps",level:2},{value:"Server Setup",id:"server-setup",level:3},{value:"Including the EFSP Library",id:"including-the-efsp-library",level:3},{value:"Get the information needed to file",id:"get-the-information-needed-to-file",level:3},{value:"Find the jurisdiction and start browsing services and codes",id:"find-the-jurisdiction-and-start-browsing-services-and-codes",level:4},{value:"Find the code for a court",id:"find-the-code-for-a-court",level:4},{value:"Find the case category name and code",id:"find-the-case-category-name-and-code",level:4},{value:"Find the code for the case type",id:"find-the-code-for-the-case-type",level:4},{value:"Find the code for the filing type",id:"find-the-code-for-the-filing-type",level:4},{value:"Interview Logic and Question Screens",id:"interview-logic-and-question-screens",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This is a guide to get from a working Assembly Line Interview to an interview that can e-file through our EFSP to the Tyler EFM system."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["This e-filing functionality is being updated often, so this documentation might be out of date.\nIf anything is incorrect or doesn't work as expected, feel free to email us at\n",(0,n.jsx)(t.a,{href:"mailto:massaccess@suffolk.edu",children:"massaccess@suffolk.edu"}),"."]})}),"\n",(0,n.jsx)(t.p,{children:"This example interview will be simple; it will make an initial filing into a new case. While our API is flexible enough to\nlet you add capabilities and features to your interview, it's also complex, and some of that complexity will need\nto be embedded into your interview."}),"\n",(0,n.jsx)(t.h2,{id:"before-starting",children:"Before starting"}),"\n",(0,n.jsx)(t.p,{children:"Before starting this guide, you should have:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["a working docassemble interview, preferably using the AssemblyLine.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If you don't have one yet, follow ",(0,n.jsx)(t.a,{href:"https://assemblyline.suffolklitlab.org/docs/planning",children:"these steps to author your interview"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"contacted us for access to the EFSP server. We aren't yet making access publicly available, but will include an interest form here when we do."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(t.h3,{id:"server-setup",children:"Server Setup"}),"\n",(0,n.jsx)(t.p,{children:"To start, you'll need to setup the server."}),"\n",(0,n.jsxs)(t.p,{children:["First, install the ",(0,n.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration",children:"docassemble.EFSPIntegration"})," package on your server in docassemble's ",(0,n.jsx)(t.a,{href:"https://docassemble.org/docs/packages.html#installing",children:"Package Management menu"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Then, set your docassemble server's ",(0,n.jsx)(t.a,{href:"https://docassemble.org/docs/config.html",children:"configuration"}),".\nIn the configuration file, add the below section, replacing each value on the right with the information that we provide to you."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"efile proxy:\n  api key: abcDEFghiJKL123456789\n  url: https://efile-test.serverurl.com\n  jeffnet api token: ABCDEF123  # only required if your interview operates is Louisiana\n  global waiver: 123a4567-b89c-1234-abcd-123456789000\n  global server admins:\n    - your_email@example.com\n"})}),"\n",(0,n.jsx)(t.h3,{id:"including-the-efsp-library",children:"Including the EFSP Library"}),"\n",(0,n.jsxs)(t.p,{children:["Start by making a blank YAML file in a ",(0,n.jsx)(t.a,{href:"https://docassemble.org/docs/playground.html#interview_files",children:"playground project"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Next, add our EFSP library to your interview, as well as the AssemblyLine library (so we can use the ALDocument class)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"include:\n  - docassemble.AssemblyLine:assembly_line.yml\n  - docassemble.EFSPIntegration:efiling_integration.yml\n  - docassemble.EFSPIntegration:login_qs.yml\n  - docassemble.EFSPIntegration:codes_helper.yml\n"})}),"\n",(0,n.jsx)(t.p,{children:"Next, create a connection to our EFSP server. This allows your interview to communicate with our EFSP server."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"code: |\n  proxy_conn = ProxyConnection(credentials_code_block='tyler_login', default_jurisdiction='illinois')\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"credentials_code_block"})," is a YAML code block that triggers asking the user questions to login to the Tyler system.\nWe provide a code block that additionally handles password resets and incorrect logins. It defines ",(0,n.jsx)(t.code,{children:"tyler_login"})," at the end, which is why we pass ",(0,n.jsx)(t.code,{children:"tyler_login"})," to the connection object. If you want to have different login screens, you can define your own code block, as long as it sets the trigger variable to\n",(0,n.jsx)(t.code,{children:"True"})," only if ",(0,n.jsx)(t.code,{children:"proxy_conn.authenticate_user(...).is_ok()."}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"default_jurisdiction"})," is the jurisdiction that you are filing in. Currently, we only support ",(0,n.jsx)(t.code,{children:"illinois"}),", and ",(0,n.jsx)(t.code,{children:"louisiana"})," (with ",(0,n.jsx)(t.code,{children:"massachusetts"})," coming soon)."]}),"\n",(0,n.jsx)(t.h3,{id:"get-the-information-needed-to-file",children:"Get the information needed to file"}),"\n",(0,n.jsx)(t.p,{children:"As mentioned previously, this interview will create a new case with the court, aka an initial filing.\nTo keep it simple, the interview will only file one type of case; this lets us hardcode a few pieces of information in our interview."}),"\n",(0,n.jsx)(t.p,{children:"We'll first need to find the right \"codes\" for our interview. Tyler's E-filing system defines specific codes for many different\nparts of the filing process, include the over-arching category of the case, the more specific case type, and even things like whether or not\nthe filed document should be confidential or not."}),"\n",(0,n.jsxs)(t.p,{children:["You will usually need to lookup the ",(0,n.jsx)(t.code,{children:"case category"})," and the ",(0,n.jsx)(t.code,{children:"case type"}),". The docassemble integration allows some fuzzy matching based\non the name of the case type or category, because codes can change without warning. But in some cases, you will want to specify the exact code. Therefore,\nyou will want to note and enter both the name and the associated code for both case category and case type."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/",children:"https://efile-test.suffolklitlab.org/"})," has a fairly complete interface to help you locate codes. But:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You might need to write down a code you get at one step to effectively use it as a required parameter or in the endpoint URL in a follow-up search."}),"\n",(0,n.jsx)(t.li,{children:"One common example is the court's name. The court code is often required to be part of the endpoint's path. Court codes are often\nthe same as the court's name, but may have a slight variation. You can look up the court code."}),"\n",(0,n.jsxs)(t.li,{children:["Some of the endpoints require that you add a URL parameter. URL parameters follow standard GET rules, with the first parameter needing a ",(0,n.jsx)(t.code,{children:"?"})," and each following parameter separated by an ",(0,n.jsx)(t.code,{children:"&"}),". The value for each parameter follows a ",(0,n.jsx)(t.code,{children:"="}),". E.g., ?paramater1=value&parameter2=value"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"find-the-jurisdiction-and-start-browsing-services-and-codes",children:"Find the jurisdiction and start browsing services and codes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Locate the jurisdiction you want by visiting ",(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/",children:"https://efile-test.suffolklitlab.org/jurisdictions/"}),". You can click on the URL next to the jurisdiction name to visit the page for that jurisdiction's courts."]}),"\n",(0,n.jsxs)(t.li,{children:['Find the "GetCodesService" link to browse all available codes. For example: ',(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"find-the-code-for-a-court",children:"Find the code for a court"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Find the code for the court that you want to file in by visiting the "GetCourts" link. It may help to add the parameter ?with_names=true. For example: ',(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts?with_names=true",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts?with_names=true"}),". Note: the available paramaters are documented on the previous page, with the link to each available service."]}),"\n",(0,n.jsxs)(t.li,{children:['Note the appropriate court code. For example, "appeals',":acsj",'" is the code associated with "Appeals Court - Single Justice (J Docket)".']}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"find-the-case-category-name-and-code",children:"Find the case category name and code"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:['Go back to the "GetCodesService" link (',(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/"}),") and click the example link for\nthe getCategories service. You will need to edit the URL to place the proper court code in the URL. For example: ",(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/categories",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/categories"}),", where ",(0,n.jsx)(t.code,{children:"appeals:acsj"})," is the court code."]}),"\n",(0,n.jsx)(t.li,{children:'Note the case category\'s name and code. For example: Case category "Appeals Court Single Justice - Civil" has the associated code 8151.'}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"find-the-code-for-the-case-type",children:"Find the code for the case type"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"To get the code for a case type, we need to look at the case types available for a specific category associated with a specific court."}),"\n",(0,n.jsxs)(t.li,{children:["Visit the getCaseTypes service. Edit the example URL to ",(0,n.jsx)(t.strong,{children:"specify both the court code and a category ID."})," For example: ",(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/case_types?category_id=8151",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/case_types?category_id=8151"})]}),"\n",(0,n.jsx)(t.li,{children:'Look through the list of codes and pick the appropriate code. For example, for a "MAC Rule 6.0 \u2013 Motion to stay" the code is 101447.'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Note that some jurisdictions may use the same case type code for all cases of the same type, across all courts. But at least one jurisdiction, Illinois, uses\ndifferent codes in different courts. The most recent version of the ",(0,n.jsx)(t.code,{children:"efiling_integration.yml"})," provided by docassemble-EFSPIntegration allows you to reference\nthe filing code by name to resolve this problem, but some fuzzy matching may be necessary because even the name for the case type can have variations in\nIllinois."]}),"\n",(0,n.jsx)(t.h4,{id:"find-the-code-for-the-filing-type",children:"Find the code for the filing type"}),"\n",(0,n.jsx)(t.p,{children:'In addition to a case type that describes the whole "envelope", individual documents inside the case type have their own codes.'}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Use the getFilingTypes endpoint to get a list of available filing types and their associated codes. For example: ",(0,n.jsx)(t.a,{href:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/filing_types",children:"https://efile-test.suffolklitlab.org/jurisdictions/massachusetts/codes/courts/appeals:acsj/filing_types"}),"."]}),"\n",(0,n.jsx)(t.li,{children:'You can search in the page for the matching filing type. For example, for "Rule 6.0 Motion to Stay" the filing type is 101450.'}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Assuming that your Docassemble interview allows filing exactly one case type and category, the efiling_integration.yml file will expect to find the codes defined this way:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"code: |\n  efile_case_category_filters = ['Appeals Court Single Justice - Civil', 'Civil']\n  efile_case_category_default = '8151'\n  efile_case_category_exclude = None\n  efile_case_type_filters = ['Rule 6.0 Motion to Stay']\n  efile_case_type_default = '101447'\n  efile_case_type_exclude = None\n"})}),"\n",(0,n.jsx)(t.p,{children:"The filing type is defined at the bundle level (note you can have as many bundles as you choose in a given interview)."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'\n\n#### Complete example -- Illinois single court adoption codes\nFor example, say we want to write an Adoption interview. The codes in Illinois are split by courts, so to see the case categories available to\none particular court, say Adams, we can go to\n[https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/categories](https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/categories), and scroll through the responses until we find the "Adoption" entry,\ncode 7306. We would then see the case types for Adoption cases in adams at\n[https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial](https://efile-test.suffolklitlab.org/jurisdictions/illinois/codes/courts/adams/case_types?category_id=7306&timing=Initial), which is 25361.\n\nThe endpoints should say when they need parameters, like we provided with `category_id=7306&timing=Initial` above.\n\nFor this guide, we\'ll stick with a single court, to make things simple to understand. We\'ll use the following codes:\n\nvariable name | purpose | example value | example meaning\n---------|-----------|-----------|-------------\n`efile_case_category` | the over arching category of the case | `"7306"` | Adoption\n`efile_case_type` | the specific type of case | `"25361"` | Adoption\n`efile_case_subtype` | optional, if there needs to be more specific case types | N/A | N/A\n`party_type` | what the role of an individual or party is in the case | `"7067"` or `"20640"` | Adoptive parent or child\n`filing_type` | what the filing actually is, usually the name of the document | `"29730"` | Application\n`document_type` | If the document is confidential or not | `"5766"` | Non-confidential\n`filing_component` | If this is the lead document or if it\'s an attachment | `"332"` | Lead document\n\n### Give all of the info that the EFSP needs to file your doc\n\nNow that we have all of the codes that we want, we need to define the right variables, setting their values to the codes we found above.\n\nYour interview must define the list of `ALIndividual`, `users` and `other_parties`. Each individual should have at least a first name. Note that if only a first name is provided, then the person is assumed to be a business. `users[0]` is almost always the person completing the interview, or at least who the form is being completed on behalf of.\n\nFor each object in `users` and in `other_parties`, your interview needs to define the following attributes:\n\n* `party_type`: this should be the Tyler party type code of that user\n* `is_new`: if you are filing into an existing case and are adding additional participants to the case, this should be true. They aren\'t necessary since this interview is making an initial case (where all parties are implicitly new).\n* `users[0].email` must be defined. Email is not required for any other parties.\n\n```yaml\ncode: |\n  trial_court = \'adams`\n  efile_case_category = \'7306\'\n  efile_case_type= \'25361\'\n---\ncode: |\n  users[i].name.first\n  if i == 0:\n    users[i].email\n  users[i].party_type = \'7067\' # adoptive parent\n  users[i].completed = True\n---\ncode: |\n  other_parties[i].name.first\n  other_parties[i].party_type = \'20640\' # adoptive child\n  other_parties[i].completed = True\n'})}),"\n",(0,n.jsx)(t.p,{children:"The following variables must also be defined:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"user_started_case"}),": an Assembly Line variable determining if the ",(0,n.jsx)(t.code,{children:"users"})," are plaintiffs/petitioners."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"lead_contact"}),": this is the person who will be contacted about the status of this filing, and can just be set to ",(0,n.jsx)(t.code,{children:"users[0]"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"tyler_payment_id"}),": This is the payment information that Tyler needs to collect payment for the filing. It is the string of the payment method ID. We'll deal more with this in the advanced guide (coming soon), but  for now, we'll assume that the filer qualifies for a fee waiver, and can use the global waiver payment account, \"global\" meaning that any filer can use when filing. You can get this waiver payment account from the config: ",(0,n.jsx)(t.code,{children:"get_config('efile proxy', {}).get('global waiver', '')"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"al_court_bundle"})," should be an ALDocumentBundle, containing all of the documents that you want to file. Each top level ALDocument or ALDocumentBundle in ",(0,n.jsx)(t.code,{children:"al_court_bundle"})," will be treated as a separate filing, and each filing needs the following attributes:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"filing_component"})," and ",(0,n.jsx)(t.code,{children:"filing_type"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"filename"}),": this will be defined by default when declaring the ALDocument"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"filing_parties"}),": these are the parties that are initiating the filing. When the party that's filing is also being added in that filing, the value is the ",(0,n.jsx)(t.code,{children:"instanceName"})," of docassemble var representing that individual. Usually this will be ",(0,n.jsx)(t.code,{children:'"users[0]"'}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"filing_action"}),": for us, this will be ",(0,n.jsx)(t.code,{children:'"efile"'})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"---\ncode: |\n  main_document.document_type = '5766'\n  main_document.filing_component = '332'\n  main_document.filing_type = '29730'\n  main_document.filing_parties = ['users[0]']\n  main_document.filing_action = 'efile'\n  main_document.completed = True\n"})}),"\n",(0,n.jsx)(t.h2,{id:"interview-logic-and-question-screens",children:"Interview Logic and Question Screens"}),"\n",(0,n.jsxs)(t.p,{children:["Now that all of the information is defined, we just need to specify the interview order logic. Notably, you can use the variable ",(0,n.jsx)(t.code,{children:"can_check_efile"})," to\nask the user if they want to e-file their documents, or if they'd rather print them out themselves. You can then define the variables ",(0,n.jsx)(t.code,{children:"ready_to_efile"})," and ",(0,n.jsx)(t.code,{children:"efile"})," to trigger actual document to e-file."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"mandatory: True\nid: main interview order block\ncode: |\n  user_ask_role = 'plaintiff'\n  users.gather(complete_attribute='completed')\n  other_parties.gather(complete_attribute='completed')\n  if can_check_efile:\n    tyler_login\n    lead_contact = users[0]\n    main_document.completed\n    tyler_payment_id = get_config('efile proxy', {}).get('global waiver', '')\n    ready_to_efile\n    efile\n    ending_screen\n  else:\n    cannot_efile # triggers the kickout event screen\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The full minimal interview file can be found ",(0,n.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/minimal_interview.yml",children:"in the EFSPIntegration github"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var n=i(6540);const s={},o=n.createContext(s);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);