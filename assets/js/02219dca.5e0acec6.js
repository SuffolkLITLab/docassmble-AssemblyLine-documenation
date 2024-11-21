"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[453],{5136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=t(4848),s=t(8453);const r={id:"writing_review_screen",title:"Writing a Review Screen\n",sidebar_label:"Review Screen\n",slug:"review_screen"},o=void 0,a={id:"authoring/writing_review_screen",title:"Writing a Review Screen\n",description:"Overview",source:"@site/docs/authoring/writing_review_screen.md",sourceDirName:"authoring",slug:"/authoring/review_screen",permalink:"/docs/authoring/review_screen",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/authoring/writing_review_screen.md",tags:[],version:"current",frontMatter:{id:"writing_review_screen",title:"Writing a Review Screen\n",sidebar_label:"Review Screen\n",slug:"review_screen"},sidebar:"docs",previous:{title:"Editing your interview",permalink:"/docs/authoring/customizing_interview"},next:{title:"Appendix: Understanding the YAML code\n",permalink:"/docs/authoring/generated_yaml"}},l={},h=[{value:"Overview",id:"overview",level:2},{value:"Why make a review screen?",id:"why-make-a-review-screen",level:2},{value:"Creating your review screen",id:"creating-your-review-screen",level:2},{value:"Step 0: Complete the main port of your interview!",id:"step-0-complete-the-main-port-of-your-interview",level:3},{value:"Step 1: AL Review Generator",id:"step-1-al-review-generator",level:3},{value:"Step 2: Understanding and Editing the Generated Review Screen",id:"step-2-understanding-and-editing-the-generated-review-screen",level:3},{value:"Edits to the Review Screen",id:"edits-to-the-review-screen",level:4},{value:"Step 4: Things to add to the review screen",id:"step-4-things-to-add-to-the-review-screen",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",section:"section",sup:"sup",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"In Docassemble, a review screen is the way that a user can make changes to their answers. A review screen displays one or more of the user's existing answers along with buttons that let the user edit each choice."}),"\n",(0,i.jsx)(n.p,{children:"This page is a step-by-step tutorial on how to write a review screen, and covers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#overview",children:"Overview"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#why-make-a-review-screen",children:"Why make a review screen?"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#creating-your-review-screen",children:"Creating your review screen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#step-0-complete-the-main-port-of-your-interview",children:"Step 0: Complete the main port of your interview!"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#step-1-al-review-generator",children:"Step 1: AL Review Generator"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#step-2-understanding-and-editing-the-generated-review-screen",children:"Step 2: Understanding and Editing the Generated Review Screen"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#edits-to-the-review-screen",children:"Edits to the Review Screen"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#step-4-things-to-add-to-the-review-screen",children:"Step 4: Things to add to the review screen"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-make-a-review-screen",children:"Why make a review screen?"}),"\n",(0,i.jsxs)(n.p,{children:["Review screens let your user change their mind about their previous answers. Like the list of fields in a ",(0,i.jsx)(n.code,{children:"question"})," screen, one ",(0,i.jsx)(n.code,{children:"review"})," screen can let the user review many answers. This list of answers goes under the heading ",(0,i.jsx)(n.code,{children:"review"})," instead of ",(0,i.jsx)(n.code,{children:"fields"}),". Each answer you want to let your user change includes:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'A button, with a label of your choice (we usually use "Edit")'}),"\n",(0,i.jsx)(n.li,{children:"Fields that you want the user to revisit when they click the edit button"}),"\n",(0,i.jsx)(n.li,{children:"Some preview of the user's current answer. It's common to repeat or paraphrase the question from the interview and show the answer next to the question."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can do more advanced things with review screens, too:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you want the user to jump to another screen, perhaps they could edit multiple fields asked over several different screens in the interview, you can make the field name point to another question screen, labeled with an ",(0,i.jsx)(n.code,{children:"event"}),". This is usually used to edit lists of people with a ",(0,i.jsx)(n.code,{children:"revisit"})," block."]}),"\n",(0,i.jsx)(n.li,{children:"You can trigger follow-up code to run after the user makes a change. For example: you can trigger a code block to re-run, delete the value of another answer, or trigger another follow-up screen."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:['Writing a review screen is important. Without one, the only way a user can change their answers is with the "back" button, but the "back" button will undo the user\'s progress in the interview so far.\nReview screens are necessary for interviews to be fully WCAG compliant; for legal applications,\n',(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/WCAG21/#error-prevention-legal-financial-data",children:"WCAG 2.1 success criterion 3.3.4"})," requires that"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"a mechanism is available for reviewing, confirming, and correcting information before finalizing the submission"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For docassemble applications, this means a review screen that allows the user to correct the information they entered needs to be present at the end of your interview."}),"\n",(0,i.jsx)(n.h2,{id:"creating-your-review-screen",children:"Creating your review screen"}),"\n",(0,i.jsx)(n.h3,{id:"step-0-complete-the-main-port-of-your-interview",children:"Step 0: Complete the main port of your interview!"}),"\n",(0,i.jsx)(n.p,{children:"Large changes to an interview's logic will require large changes to the review screen as well. Before starting to make the review screen, it's best to have completed your interview."}),"\n",(0,i.jsx)(n.h3,{id:"step-1-al-review-generator",children:"Step 1: AL Review Generator"}),"\n",(0,i.jsx)(n.p,{children:"Download the primary YAML files of your interview. You can download the YAML file either:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'from the docassemble playground, clicking on the "Download" button below the YAML editor, or'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["from GitHub. For example, for the ",(0,i.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-MotionToStayEviction/",children:"Motion to Stay Eviction"}),", you can navigate\nto ",(0,i.jsx)(n.a,{href:"https://github.com/SuffolkLITLab/docassemble-MotionToStayEviction/blob/main/docassemble/MotionToStayEviction/data/questions/SP6A.yml",children:"the primary YAML file, SP6A.yml"}),', and click the "download raw file" button.']}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"A github page screenshot, the &quot;download raw file&quot; button in the top bar of the github file is circled",src:t(7468).A+"",width:"566",height:"416"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You should download all of the YAML files that define variables used in your interview. The more YAML files you download, the more content you might have to\ncut from the generated review screen."}),"\n",(0,i.jsxs)(n.p,{children:["Once you have the YAML files, go to ",(0,i.jsx)(n.a,{href:"https://apps-dev.suffolklitlab.org/start/ALDashboard/review_screen_generator",children:"the ALDashboard's review screen generator"}),', and upload your YAML files. You should leave the two checkboxes ("create revisit screens", and "point section blocks to review screen") checked, and press "continue". The next screen will have your review blocks! Make a file called ',(0,i.jsx)(n.code,{children:"review.yml"})," in your playground, and copy the content from the review screen generator into it. Then, add a block in your main interview near the end like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"include:\n  - review.yml\n"})}),"\n",(0,i.jsx)(n.h3,{id:"step-2-understanding-and-editing-the-generated-review-screen",children:"Step 2: Understanding and Editing the Generated Review Screen"}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["About ",(0,i.jsx)(n.code,{children:"|-"})]}),(0,i.jsxs)(n.p,{children:["The generated YAML uses lots of ",(0,i.jsx)(n.code,{children:"|-"}),". In short, something like this:"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"event: |-\n  review_intro\n\ncode: |-\n  review_form\n\n"})}),(0,i.jsx)(n.p,{children:"is the same as this:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"event: review_intro\ncode: |\n  review_form\n"})}),(0,i.jsxs)(n.p,{children:["I'd recommend changing the YAML to how you normally write it to be more concise ",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". The remainder of the examples will use the more concise YAML notation."]})]}),"\n",(0,i.jsx)(n.p,{children:"There are a few sections of the generated review screen YAML:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"There are the events. These blocks look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"event: review_intro\ncode: |\n  review_form\n---\nevent: review_prior_case\ncode: |\n  review_form\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These blocks take each ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/initial.html#sections",children:"section"})," from your interview and make it so that if a user clicks on the section, they are brought to the review page.\nIn our experience, this works best, as all of the information that the interview asks can be edited in one place, and the user doesn't have to remember which section a piece of information belonged to."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The main ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#review",children:"review block"}),". The block looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: review screen\nevent: review_form\nquestion: |\n  Review your answers\nreview:\n  - Edit: users.revisit\n    button: |\n      **Users**\n\n      % for item in users:\n      - ${ item }\n      % endfor\n  - Edit: has_existing_case\n    button: |\n      **Do you have an existing Michigan family court case?**\n\n      Do you have an existing Michigan family court case?: ${ word(yesno(has_existing_case)) }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This block looks like a normal question block, except there is a ",(0,i.jsx)(n.code,{children:"review"})," attribute instead of ",(0,i.jsx)(n.code,{children:"fields"}),".\nEach list item under the ",(0,i.jsx)(n.code,{children:"review"})," attribute is generated from question screens in the interview, and shows the text content and the fields from that question screen."]}),"\n",(0,i.jsx)(n.p,{children:"Each element in the review can have the following dictionary attributes:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Edit"}),' adds an "Edit" button in this section of the review screen. When clicked, the "Edit" button will take the user to fields on the right side of the ',(0,i.jsx)(n.code,{children:":"})," they have already answered. These fields can be:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A single field, e.g. ",(0,i.jsx)(n.code,{children:"Edit: has_existing_case"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A list of fields. Each of the fields will be re-shown to the user. e.g."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"- Edit:\n  - who_pays\n  - which_side_pays\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also use ",(0,i.jsx)(n.code,{children:"recompute"})," as an item in the list that contains a sub-list of fields to re-calculate using ",(0,i.jsx)(n.code,{children:"code"})," blocks, without asking questions to the user again. You won't see ",(0,i.jsx)(n.code,{children:"recompute"})," in your generated interview, but you should add it if necessary. Here's an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"- Edit:\n  - county_choice\n  - recompute:\n    - trial_court\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"button"})," acts like the ",(0,i.jsx)(n.code,{children:"subquestion"})," of this section of the review screen. It is where you should display the current value of the field or fields you want to let the user edit. You can use multiple lines and Mako tags in this area."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The revisit screens. These blocks look like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"id: revisit users\ncontinue button field: users.revisit\nquestion: |\n  Edit your answers about Users\nsubquestion: |\n  ${ users.table }\n\n  ${ users.add_action() }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Revisit screens are used to let people edit items in ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#DAList",children:(0,i.jsx)(n.code,{children:"DALists"})}),".\nFor each of the other variables in the ",(0,i.jsx)(n.code,{children:"review"}),' block, clicking their "Edit" button brings users directly to the\nquestion to let them edit their answers. That approach works well for simple variables like text, dates that the user enters, or yes no questions.']}),"\n",(0,i.jsxs)(n.p,{children:["But your interview might include ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#Individual",children:"objects"})," and lists of objects, like a list of plaintiffs and another list of defendants. Instead of re-asking every question that someone answered to fill the list, docassemble brings to the user to a ",(0,i.jsx)(n.code,{children:"revisit"})," screen that shows each item in the list to the user, and lets them choose which to edit individually."]}),"\n",(0,i.jsxs)(n.p,{children:["If you used the ",(0,i.jsx)(n.a,{href:"/docs/authoring/label_variables#standard-roles",children:"Weaver"})," to make your interview, your interview might have a few different lists for people,\nlike ",(0,i.jsx)(n.code,{children:"users"}),", ",(0,i.jsx)(n.code,{children:"other_parties"}),", ",(0,i.jsx)(n.code,{children:"children"}),", ",(0,i.jsx)(n.code,{children:"debt_collectors"}),", and ",(0,i.jsx)(n.code,{children:"guardians"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"revisit"})," screens each show the ",(0,i.jsx)(n.code,{children:"table"})," attribute of the ",(0,i.jsx)(n.code,{children:"DAList"}),". If needed, blocks defining the table for the lists will appear at the end of the generated review file."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"table: children.table\nrows: children\ncolumns:\n  - Birthdate: |\n      row_item.birthdate if hasattr(row_item, 'birthdate') else ''\nedit:\n  - birthdate\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"edits-to-the-review-screen",children:"Edits to the Review Screen"}),"\n",(0,i.jsx)(n.p,{children:"You'll want to change some aspects of the generated review screen. Note that if any errors happen in a specific edit element on the review screen, that element won't appear. It also won't appear if the attribute or variable to be edited doesn't exist. You should make sure that it does."}),"\n",(0,i.jsx)(n.p,{children:"Some common issues to the generated review screen that I personally have run into before:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Remove generated ",(0,i.jsx)(n.code,{children:"revisit"})," and ",(0,i.jsx)(n.code,{children:"table"})," blocks for attachments and other non-people objects, if any, as well as their entries in the ",(0,i.jsx)(n.code,{children:"review"})," block. ",(0,i.jsx)(n.code,{children:"revisit"})," is only needed for things the user enters themselves. Since the review screen generator can't determine which object types people have to enter information for, it generates them for all objects."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Remove questions you don't want the user to edit. Sometimes, you will have questions that do set a variable in the interview, but the variable isn't used in the interview logic after that. For example, a question that's only use is to kickout a user if their problem isn't covered by the form. Here's an example of one:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"---\nquestion: |\n  Are you Filing in a Probate Case?\nfields:\n  - Is your case a probate case?: probate_case\n    datatype: yesnoradio\n---\nevent: probate_case_exit\nquestion: |\n  You cannot continue to use the tool.\nsubquestion: |\n  Based on your answer, you can't use this tool. Probate cases have different procedural rules than other cases. You may want to speak to a lawyer.\n  \n  If you made a mistake, click the **Undo** button. Otherwise, click the **Exit** button to return to Michigan Legal Help.\nbuttons:\n  - Exit: exit\n    url: https://michiganlegalhelp.org\n"})}),"\n",(0,i.jsx)(n.p,{children:"If editing the value of a variable like this would only lead the person to a kickout screen and not change any other logic of the interview, then the generated review section should be removed."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"step-4-things-to-add-to-the-review-screen",children:"Step 4: Things to add to the review screen"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["You'll find that certain variables often depend on each other, either explicitly or implicitly. For example, if you have a variable called ",(0,i.jsx)(n.code,{children:"hearing_date_and_time"})," that you set to ",(0,i.jsx)(n.code,{children:'hearing_date + " " + hearing_time'}),", you should recompute that field whenever the user edits the hearing date or time. You can do something like this to update the variable whenever you edit the hearing date:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"  - label: Edit\n    fields:\n      - hearing_date\n      - recompute:\n        - hearing_date_and_time\n    button: |\n      ...\n"})}),"\n",(0,i.jsx)(n.p,{children:"Another example of when two variables are implicitly dependent would be if you asked the user if the plaintiff or defendant is paying child support. If the user changes what side of the case they are on, their answer to what side is paying might change too! You can use a review entry that looks like this to edit both."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yml",children:"  - label: Edit\n    fields:\n      - user_ask_role\n      - who_paid\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["As mentioned in step 2, if a variable doesn't exist or any errors occur when showing a section of the review screen, that whole section won't be shown. If some of the fields on a screen or optional, then their absence can cause their section of the review screen to not appear. Use ",(0,i.jsx)(n.code,{children:"showifdef"})," on optional fields, or fields that use ",(0,i.jsx)(n.code,{children:"show if"}),", to prevent this issue."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"While writing the review screen, you will likely have to redo your interview logic, so that it doesn't make assumptions about the presence or absence of variables, just their values, which I'd encourage. From the docassemble documentation:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"For example, if you ask \u201cDo you want to include your cell phone number?\u201d and then you ask \u201cWhat is your cell phone number,\u201d the user\u2019s cell phone number will be defined. If the user then changes the answer to the \u201cDo you want to include your cell phone number?\u201d question, then you will have a situation where the user\u2019s cell phone number is defined but it should not be used."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://docassemble.org/docs/documents.html#template%20code",children:"the last paragraph of this section of the docassemble documentation"})," for more info."]}),"\n"]}),"\n"]}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:["Changing the whitespace and types of strings that are used by the review screen generator isn't possible at the moment. ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},7468:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/review_download_yaml_from_github-d8f6f0ef035d0c544e2788f51c20ea9c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);