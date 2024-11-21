"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[3307],{4976:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=s(4848),i=s(8453);const a={id:"efiling_case_search",title:"E-filing: Case Search\n",sidebar_label:"Case Search",slug:"case_search"},o=void 0,r={id:"components/EFSPIntegration/efiling_case_search",title:"E-filing: Case Search\n",description:"This guide will help you integrate a case search feature into",source:"@site/docs/components/EFSPIntegration/efiling_case_search.md",sourceDirName:"components/EFSPIntegration",slug:"/components/EFSPIntegration/case_search",permalink:"/docs/components/EFSPIntegration/case_search",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/EFSPIntegration/efiling_case_search.md",tags:[],version:"current",frontMatter:{id:"efiling_case_search",title:"E-filing: Case Search\n",sidebar_label:"Case Search",slug:"case_search"},sidebar:"docs",previous:{title:"Integrating Docassemble interviews with e-filing",permalink:"/docs/components/EFSPIntegration/docassemble_integration"},next:{title:"E-filing codes",permalink:"/docs/components/EFSPIntegration/tyler_codes"}},c={},l=[{value:"Before starting",id:"before-starting",level:2},{value:"Steps",id:"steps",level:2},{value:"Creating a interview",id:"creating-a-interview",level:3},{value:"Using case search data in your Assembly Line interview",id:"using-case-search-data-in-your-assembly-line-interview",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide will help you integrate a case search feature into\nyour interview, helping your users find their cases in their\ncourt's e-filing system."}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["This e-filing functionality is being updated often, so this documentation might be out of date.\nIf anything is incorrect or doesn't work as expected, feel free to email us at\n",(0,t.jsx)(n.a,{href:"mailto:massaccess@suffolk.edu",children:"massaccess@suffolk.edu"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"This example interview will be straight-forward; it will allow users\nto search for a case, and will display all of the available information\nabout the found case. You will want to use that data to automatically\nfill in information for the user in your interview later, but that won't be covered here."}),"\n",(0,t.jsx)(n.h2,{id:"before-starting",children:"Before starting"}),"\n",(0,t.jsx)(n.p,{children:"Before staring this guide you should:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["have access to a docassemble server for developing docassemble interviews","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["the ",(0,t.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration",children:"EFSPIntegration package"})," should be installed on the server"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["have setup your server to be able to e-file","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"first, you can contact us for access to the EFSP server.\nWe aren't yet making access publicly available, but\nwill include an interest form here when we do."}),"\n",(0,t.jsxs)(n.li,{children:["second, you can follow the instructions in ",(0,t.jsx)(n.a,{href:"/docs/components/EFSPIntegration/docassemble_integration#server-setup",children:'"Server Setup"'})," to setup your server's\nconfiguration."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["know about ",(0,t.jsx)(n.a,{href:"/docs/components/EFSPIntegration/tyler_codes",children:"Tyler e-filing codes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Note: this tutorial is only partially written, but it will be completed soon!"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,t.jsx)(n.h3,{id:"creating-a-interview",children:"Creating a interview"}),"\n",(0,t.jsx)(n.p,{children:"Let's first start out with the simplest possible interview:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'include:\n  - docassemble.AssemblyLine:assembly_line.yml\n  - docassemble.EFSPIntegration:case_search.yml\n---\nobjects:\n  - case_search:  EFCaseSearch.using(court_id="adams")\n---\ncode: |\n  jurisdiction_id = \'illinois\'\n  trial_court = "Adams"\n---\nevent: show_all_info\nquestion: The found case\nsubquestion: |\n  ${ pretty_display(case_search.found_caseas_serializable()) }\n---\nmandatory: True\ncode: |\n  tyler_login\n  case_search.case_was_found\n  show_all_info\n'})}),"\n",(0,t.jsx)(n.p,{children:"Start off by hard coding a few pieces of information:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"use the `illinois' jurisdiction. Currently, the E-file proxy server is only running in production in Illinois, but we have access to the staging servers in Massachusetts and Texas."}),"\n",(0,t.jsxs)(n.li,{children:["file in the \"adams\" county court in Illinois. Handling court\nhierarchies is a complicated task, and something that the AssemblyLine can't do for you. You'll need to make your own way to let users select what court they want to file in depending on your jurisdiction. See ",(0,t.jsxs)(n.a,{href:"../AssemblyLine/al_courts",children:["our documentation for ",(0,t.jsx)(n.code,{children:"al_courts"})]})," for some possible ideas."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You should be able to run the interview now. If this is the first time you're running the interview on the server, you will be asked to log in to eFileIL. If you don't yet have an account, you should be able to make a new pro-se user account with eFileIL by following the links to make a new account on the page. Once you've logged in on the server, subsequent runs of the interview won't ask you to log in, until the eFileIL token expires and you have to log in again, in about 1-2 hours."}),"\n",(0,t.jsx)(n.p,{children:"The next page will ask if you want to search by party name or by case number."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A screenshot of the case search screen. The title says &quot;Find your case in Adams&quot;, followed by the question &quot;How do you want to find your case?&quot; and the options &quot;Party name&quot; and &quot;Case number&quot;.",src:s(228).A+"",width:"328",height:"300"})}),"\n",(0,t.jsx)(n.p,{children:'For now, let\'s search by case number. If you select "case number", and then enter the case number "2022SC9",\nyou should find a case, John Smith vs. Bob Doe, a small claims case.'}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:'This case search worked at the time of writing (February 28th, 2023). However,\ncourts have removed older cases from their staging servers before, and it is\npossible that this search won\'t work in the future. You can try searching\ncommon names like "John Brown" or "John Smith", or you could ask a court\nofficial if they are able to provide you with some testing case numbers from\ntheir staging server.'}),(0,t.jsx)(n.p,{children:"We recommend that you build a working relationship with your local courts so\nthey can help you with details like this."})]}),"\n",(0,t.jsx)(n.p,{children:'You can also go back and search by "Party name" instead. You can enter the name "John Smith",\npress continue, and wait. Searching by party name takes longer on eFileIL\'s server, especially on the staging server, you might have to wait around 30 seconds. Once the search completes, you\nwill see that there are many cases involving John Smith. For speed purposes, the EFSP library\nonly gets information about the first 8, and let\'s you click the next button to see the next 8.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"A screenshot of the &quot;case search results&quot; page. At the top it says &quot;We found 25 cases. Here are 1 to 8:&quot;, with a &quot;next&quot; button below it. There is a bulleted list showing 8 cases involving John Smith and various other parties.",src:s(3686).A+"",width:"667",height:"554"})}),"\n",(0,t.jsxs)(n.p,{children:["If you select the John Smith vs. Bob Doe case, you then see the last page in the interview YAML; ",(0,t.jsx)(n.code,{children:"show_all_info"}),". This page shows all of the information that you, the interview author, can use\nfrom the ",(0,t.jsx)(n.code,{children:"case_search.found_case"}),", the variable for the found case. The ",(0,t.jsx)(n.code,{children:"details"})," and\n",(0,t.jsx)(n.code,{children:"case_details"})," attributes aren't stable APIs, but you might find the following attributes useful:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"court_id"}),', the court that this case came from. Some courts have sub-courts that handle\nspecific case types, so even though you searched for cases in the "adams" court, you\nshould use this value for the rest of the interview.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"participants"}),", an ALPeopleList object that has all of the participants in the case on both sides.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["each participant has a ",(0,t.jsx)(n.code,{children:"party_type"})," and ",(0,t.jsx)(n.code,{children:"party_type_name"}),", i.e. ",(0,t.jsx)(n.code,{children:"participants[0].party_type_name"}),' might be "Plaintiff/Petitioner". These values are ',(0,t.jsx)(n.a,{href:"/docs/components/EFSPIntegration/tyler_codes",children:"Tyler e-filing codes"})," that are set by the court."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"attorneys"})," is a dictionary that contains any attorneys that are a part of the case."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"efile_case_type"})," is the Tyler e-filing code for the type of case. This is useful if your interview\nis only relevant for certain case types. If users don't or can't fill out your form for their case, you can send users to a page that says they don't need this form and why."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docket_number"}),' has the case number of the court. "Docket number" is the term that Massachusetts\nuses for a unique number assigned to each case by the court. You might know it as "case number".\nYou might see it by either name in the ',(0,t.jsx)(n.code,{children:"EFSPIntegration"})," package."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"using-case-search-data-in-your-assembly-line-interview",children:"Using case search data in your Assembly Line interview"}),"\n",(0,t.jsxs)(n.p,{children:["You are likely using the ",(0,t.jsx)(n.a,{href:"/docs/authoring/generating_code",children:"ALWeaver"})," and the rest of the Assembly Line framework\nin your docassemble interview, and you will want to put this information from the case search into\nvariables that your interview knows about, like ",(0,t.jsx)(n.code,{children:"users"})," and ",(0,t.jsx)(n.code,{children:"other_parties"}),". To do this, we can add\nsome more code to the above example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"---\ncode: |\n  target_case = case_search\n---\nevent: show_user_info\nquestion: The found participants\nsubquestion: |\n  Users: ${ users }\n\n  Other parties: ${ other_parties }\n---\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can then change the mandatory block to the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"mandatory: True\ncode: |\n  tyler_login\n  case_search.case_was_found\n  show_all_info\n  add_existing_users\n  show_user_info\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Setting the ",(0,t.jsx)(n.code,{children:"target_case"})," variable lets the system know that this case search is the one you want to use to fill in ",(0,t.jsx)(n.code,{children:"users"})," and ",(0,t.jsx)(n.code,{children:"other_parties"})," (in an appeals court, you could be searching in a lower court, or searching for existing appeals\ncourt cases). Including the ",(0,t.jsx)(n.code,{children:"add_existing_users"})," line triggers code in the EFSPIntegration package that asks the user which participant they are in the case,\nand then fills in ",(0,t.jsx)(n.code,{children:"users"})," and ",(0,t.jsx)(n.code,{children:"other_parties"})," based on that information."]}),"\n",(0,t.jsxs)(n.p,{children:['If your form generally deals with party types other than "defendant" and "plaintiff", you will likely want to look at the ',(0,t.jsx)(n.code,{children:"is_defendant_filters"})," and ",(0,t.jsx)(n.code,{children:"is_plaintiff_filters"})," variables in ",(0,t.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-EFSPIntegration/blob/main/docassemble/EFSPIntegration/data/questions/case_search.yml",children:(0,t.jsx)(n.code,{children:"docassemble-EFSPIntegration:case_search.yml"})}),"\nwhich you can override to sort participants by their codes from a case into your typical\nALPeopleLists in your form."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},3686:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/case_search_results-48d7aef85d6c642a3d21e6b8995caefa.png"},228:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/case_search_start-de2d77f70c63e079bc42f03eac260b8d.png"},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(6540);const i={},a=t.createContext(i);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);