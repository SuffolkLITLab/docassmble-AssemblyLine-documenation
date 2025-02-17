"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[7431],{306:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"authoring/dynamic_phrasing_based_on_values","title":"Dynamic phrasing based on values (gender, list length, and more)","description":"Docassemble has several clever features that you can use in templates","source":"@site/docs/authoring/dynamic_phrasing_based_on_values.md","sourceDirName":"authoring","slug":"/authoring/dynamic_phrasing_based_on_values","permalink":"/docs/authoring/dynamic_phrasing_based_on_values","draft":false,"unlisted":false,"editUrl":"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/authoring/dynamic_phrasing_based_on_values.md","tags":[],"version":"current","frontMatter":{"id":"dynamic_phrasing_based_on_values","title":"Dynamic phrasing based on values (gender, list length, and more)","sidebar_label":"Dynamic phrasing based on values","slug":"dynamic_phrasing_based_on_values"},"sidebar":"docs","previous":{"title":"Working with DOCX files","permalink":"/docs/authoring/docx"},"next":{"title":"Field labels to use in template files","permalink":"/docs/authoring/label_variables"}}');var o=s(4848),r=s(8453);const a={id:"dynamic_phrasing_based_on_values",title:"Dynamic phrasing based on values (gender, list length, and more)",sidebar_label:"Dynamic phrasing based on values",slug:"dynamic_phrasing_based_on_values"},t=void 0,l={},d=[{value:"Show the person&#39;s full name, without abbreviation",id:"show-the-persons-full-name-without-abbreviation",level:2},{value:"Friendly name for a person",id:"friendly-name-for-a-person",level:2},{value:"Referring to a list automatically uses <code>comma_and_list</code>",id:"referring-to-a-list-automatically-uses-comma_and_list",level:2},{value:"Pluralize a word depending on the number of people in a list",id:"pluralize-a-word-depending-on-the-number-of-people-in-a-list",level:2},{value:"Create a singular version of the list name",id:"create-a-singular-version-of-the-list-name",level:2},{value:"Conjugate a verb based on the number of people in a list",id:"conjugate-a-verb-based-on-the-number-of-people-in-a-list",level:2},{value:"Using responsive pronouns and titles",id:"using-responsive-pronouns-and-titles",level:2},{value:"<code>pronoun</code> and <code>pronoun_objective</code>",id:"pronoun-and-pronoun_objective",level:3},{value:"<code>pronoun_subjective</code>",id:"pronoun_subjective",level:3},{value:"<code>pronoun_posessive</code>",id:"pronoun_posessive",level:3},{value:"Automatically use responsive first and second person pronouns (&quot;I&quot;, &quot;We&quot;, &quot;You&quot;, &quot;Your&quot;, etc.)",id:"automatically-use-responsive-first-and-second-person-pronouns-i-we-you-your-etc",level:3},{value:"More about adapting language based on gender and plurality",id:"more-about-adapting-language-based-on-gender-and-plurality",level:3},{value:"<code>salutation</code>",id:"salutation",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Docassemble has several clever features that you can use in templates\nand in the body of your interview to automatically rephrase text in a\ncontext specific way depending on:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"the length of a list"}),"\n",(0,o.jsx)(n.li,{children:"the gender or pronouns of an individual"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In general, these features are useful short-hand solutions for problems that\nyou could also solve with ordinary conditional text (e.g., an ",(0,o.jsx)(n.code,{children:"if"})," statement)."]}),"\n",(0,o.jsxs)(n.p,{children:["These are covered in more depth in the documentation for\n",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#DAList",children:"DAList"}),", although it may be hard to\nfind the specific functions on that fairly long documentation page without internal anchors. The best solution\nto learn more may be to read about the method on this page, then visit the DAList documentation page\nand search within the page for the appropriate keyword with command/control+f."]}),"\n",(0,o.jsxs)(n.admonition,{title:"Be careful with grammar shortcuts if the interview will be translated",type:"caution",children:[(0,o.jsx)(n.p,{children:'These functions help you write short, readable code, but they result in text\n"fragments". In languages that have a different order of verbs, subjects, and objects, this\ncan result in nonsense. It\'s usually best to use a condition at the whole paragraph level if your text will be translated.'}),(0,o.jsx)(n.p,{children:"It's often safe to use the grammar shortcuts inside a template (because it will be single language), and best\nto avoid them inside the interview itself."})]}),"\n",(0,o.jsx)(n.h2,{id:"show-the-persons-full-name-without-abbreviation",children:"Show the person's full name, without abbreviation"}),"\n",(0,o.jsx)(n.p,{children:"By default, Docassemble abbreviates an individual's middle name, so\nJohn Quincy Adams is printed as John Q Adams."}),"\n",(0,o.jsxs)(n.p,{children:["You can write someone's full name, in a template or the interview, with the ",(0,o.jsx)(n.code,{children:"name_full()"})," or ",(0,o.jsx)(n.code,{children:'name.full(middle="full")'}),"\nmethods."]}),"\n",(0,o.jsx)(n.p,{children:"For example, in a DOCX template:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'{{ users[0].name_full() }} {# if it is an ALIndividual #}\n{{ users[0].name.full(middle="full") }} {# if it is regular Docassemble Individual #}\n'})}),"\n",(0,o.jsx)(n.p,{children:"And for a list of people, you can use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"{{ users.full_names() }} {# only available for ALPeopleList #}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"friendly-name-for-a-person",children:"Friendly name for a person"}),"\n",(0,o.jsxs)(n.p,{children:["Often, throughout an interview, you want to use the person's first name.\nYou can write this as ",(0,o.jsx)(n.code,{children:"users[0].name.first"}),", but this is both long to write\nand doesn't help if you want to show multiple peoples' first names."]}),"\n",(0,o.jsxs)(n.p,{children:["A convenient shorthand for this is the ",(0,o.jsx)(n.code,{children:".familiar()"})," method. If you have a list of\npeople in an ALPeopleList, you can use ",(0,o.jsx)(n.code,{children:".familiar()"})," on the list, as well as ",(0,o.jsx)(n.code,{children:".familiar_or()"}),"."]}),"\n",(0,o.jsx)(n.p,{children:'For example, if you have an ALPeopleList with "John Adams" and "Jane Smith":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"{{ users[0].familiar() }}\n{{ users.familiar() }}\n{{ users.familiar_or() }}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"John\nJohn and Jane\nJohn or Jane\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"referring-to-a-list-automatically-uses-comma_and_list",children:["Referring to a list automatically uses ",(0,o.jsx)(n.code,{children:"comma_and_list"})]}),"\n",(0,o.jsxs)(n.p,{children:['If your list is a DAList or a ALPeopleList, referring to the list in\nthe YAML or in your template results in the items all being printed,\nseparated by a comma and with the ending word "and", thanks to\nDocassemble automatically applying the function ',(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/functions.html#comma_and_list",children:(0,o.jsx)(n.code,{children:"comma_and_list"})}),"\nto the list."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"children"}),' is a list with "John", "Jane" and "Mary":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"{{ children }}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"John, Jane, and Mary\n"})}),"\n",(0,o.jsxs)(n.p,{children:['You can customize the word (for example, you can substitute "or") and the trailing "Oxford comma"\nby explicitly passing the list name to ',(0,o.jsx)(n.code,{children:"comma_and_list()"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'{{ comma_and_list(children, and_string="or", oxford=False) }}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"John, Jane or Mary\n"})}),"\n",(0,o.jsx)(n.h2,{id:"pluralize-a-word-depending-on-the-number-of-people-in-a-list",children:"Pluralize a word depending on the number of people in a list"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:".as_noun()"})," method lets you automatically use the plural or singular\nversion of the list's name, depending on how many items it contains.\nThis uses an academic natural language processing library named ",(0,o.jsx)(n.code,{children:"pattern"}),' that\nshould work with most words in the English language. For example, it can handle\nnon-standard pluralizations for words like "goose" and "octopus".']}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"children"}),' is a list with "John", "Jane" and "Mary":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"I gift the rest, residue, and remainder to my {{ children.as_noun() }}, {{ children }}, per stirpes.\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"I gift the rest, residue, and remainder to my children, John, Jane, and Mary, per stirpes\n"})}),"\n",(0,o.jsx)(n.p,{children:'And if the list contains only "John":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"I gift the rest, residue, and remainder to my child, John, per stirpes\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Notice that ",(0,o.jsx)(n.code,{children:"as_noun()"})," passes the ",(0,o.jsx)(n.strong,{children:"name"})," of the list implicitly. If your variable\nname does not match the word you want to make plural or singular, add the word you want\npluralized as a parameter:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'My spouse\'s {{ children_of_spouse.as_noun("children")}}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"create-a-singular-version-of-the-list-name",children:"Create a singular version of the list name"}),"\n",(0,o.jsxs)(n.p,{children:["In case you need to refer to the singular version for the question to make sense, you can use\n",(0,o.jsx)(n.code,{children:"as_singular_noun()"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"generic object: DAList\nquestion: |\n  ${ x.as_singular_noun() }'s name\nsubquestion: |\n  Start with the name of the first ${ x.as_singular_noun() }\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conjugate-a-verb-based-on-the-number-of-people-in-a-list",children:"Conjugate a verb based on the number of people in a list"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"does_verb()"})," and ",(0,o.jsx)(n.code,{children:"did_verb()"})," methods allow you to automatically conjugate\nverbs in the present and past tense, respectively, to match the number of subjects\nin a list. This is useful for creating grammatically correct sentences in\ndynamically generated documents."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"employees"}),' is a list containing the names "Alice" and "Bob":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'{{ employees }} {{ employees.does_verb("work") }} at the company.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Alice and Bob work at the company.\n"})}),"\n",(0,o.jsx)(n.p,{children:'And if the list contains only "Carol":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'{{ employees }} {{ employees.does_verb("work") }} at the company.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Carol works at the company.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Similarly, for past actions using ",(0,o.jsx)(n.code,{children:"did_verb()"}),":"]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"participants"}),' is a list with "Dave", "Ella", and "Frank":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'Last year, {{ participants }} {{ participants.did_verb("be") }} at the conference.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Last year, Dave, Ella, and Frank were at the conference.\n"})}),"\n",(0,o.jsx)(n.p,{children:'And if the list contains only "Greg":'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'Last year, {{ participants }} {{ participants.did_verb("be") }} at the conference.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Last year, Greg was at the conference.\n"})}),"\n",(0,o.jsx)(n.h2,{id:"using-responsive-pronouns-and-titles",children:"Using responsive pronouns and titles"}),"\n",(0,o.jsx)(n.p,{children:"You can also insert appropriate pronouns into a document with the following methods:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"pronoun"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"pronoun_objective"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"pronoun_possessive"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"pronoun_subjective"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"These methods work on an Individual, ALIndividual, DAList and ALPeopleList."}),"\n",(0,o.jsx)(n.p,{children:"Note that if you use the standard Individual class (and not the Assembly Line ALIndividual class)\nthe only pronouns will be of the he/she/they forms, but ALIndividual allows\nasking for an using the individual's unique set of pronouns."}),"\n",(0,o.jsxs)(n.p,{children:["If you are using standard Individual and DAList object, the ",(0,o.jsx)(n.code,{children:"pronoun_*"})," methods\nrequire the definition of each object's ",(0,o.jsx)(n.code,{children:"gender"})," attribute. If you are using the\nALIndividual or ALPeopleList classes, they will first look for the value of\nthe individual's ",(0,o.jsx)(n.code,{children:"pronouns"})," attribute."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pronouns"}),' can either be a single string, of the form "he/him/his" or "xe/xir/xirs",\nor a DADict with various pronouns marked as True or False, as would be created by\na Docassemble ',(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#fields%20checkboxes",children:"datatype: checkboxes"})," question."]}),"\n",(0,o.jsxs)(n.h3,{id:"pronoun-and-pronoun_objective",children:[(0,o.jsx)(n.code,{children:"pronoun"})," and ",(0,o.jsx)(n.code,{children:"pronoun_objective"})]}),"\n",(0,o.jsxs)(n.p,{children:["For an Individual, ",(0,o.jsx)(n.code,{children:"pronoun_objective"})," returns ",(0,o.jsx)(n.code,{children:"him"})," if the person has the ",(0,o.jsx)(n.code,{children:"gender"})," ",(0,o.jsx)(n.code,{children:"male"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For an ALIndividual, ",(0,o.jsx)(n.code,{children:"pronoun_objective"})," returns ",(0,o.jsx)(n.code,{children:"him"})," if the person has the ",(0,o.jsx)(n.code,{children:"pronouns"})," ",(0,o.jsx)(n.code,{children:"he/him/his"})," or ",(0,o.jsx)(n.code,{children:'{"he/him/his": True}'}),"\n(with a fallback to the ",(0,o.jsx)(n.code,{children:"gender"})," attribute if ",(0,o.jsx)(n.code,{children:"pronouns"})," cannot be parsed or doesn't exist)."]}),"\n",(0,o.jsxs)(n.p,{children:["For a DAList or ALPeopleList, ",(0,o.jsx)(n.code,{children:"pronoun_objective"})," returns ",(0,o.jsx)(n.code,{children:"him"})," if the list has only one person with the\nappropriate ",(0,o.jsx)(n.code,{children:"gender"})," or ",(0,o.jsx)(n.code,{children:"pronouns"})," attributes, and ",(0,o.jsx)(n.code,{children:"them"})," if the list has multiple items."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pronoun"})," is the same as ",(0,o.jsx)(n.code,{children:"pronoun_objective"})," in all of these circumstances. The two only behave differently\nif the list contains something other than Individuals or ALIndividuals."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"users[0]"})," has the ",(0,o.jsx)(n.code,{children:"pronouns"})," attribute ",(0,o.jsx)(n.code,{children:"ze/zir/zirs"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"I asked {{ other_parties[0].pronoun() }} to fix the problem on {{ request_date }}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"I asked zir to fix the problem on May 1st, 2024.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"users"}),' is a list with "John" and "Jane":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"I asked {{ other_parties.pronoun() }} to fix the problem on {{ request_date }}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"I asked them to fix the problem on May 1st, 2024\n"})}),"\n",(0,o.jsx)(n.h3,{id:"pronoun_subjective",children:(0,o.jsx)(n.code,{children:"pronoun_subjective"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"pronoun_subjective"}),' returns the word "he", "she", "they" or "it", otherwise following the same pattern as ',(0,o.jsx)(n.code,{children:"pronoun"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["For example, if ",(0,o.jsx)(n.code,{children:"users"}),' is a list with just 1 party "John" with pronouns "they/them/theirs":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:"Why did {{ users.pronoun_subjective() }} do it?\n"})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"Why did they do it?\n"})}),"\n",(0,o.jsx)(n.h3,{id:"pronoun_posessive",children:(0,o.jsx)(n.code,{children:"pronoun_posessive"})}),"\n",(0,o.jsxs)(n.p,{children:["For an Individual or ALIndividual, ",(0,o.jsx)(n.code,{children:"pronoun_possessive"})," works the same\nas ",(0,o.jsx)(n.code,{children:"pronoun"})," and ",(0,o.jsx)(n.code,{children:"pronoun_subjective"}),', except it returns the word\n"his/her/their" in the appropriate place.']}),"\n",(0,o.jsxs)(n.p,{children:["Unlike ",(0,o.jsx)(n.code,{children:"pronoun"})," and ",(0,o.jsx)(n.code,{children:"pronoun_subjective"}),", ",(0,o.jsx)(n.code,{children:"pronoun_posessive"}),' requires that you include the word you want to\n"posessify" as a parameter.']}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"users"}),' is a list with just 1 party "Jane" with the pronouns "she/her/hers":']}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'They are {{ users.pronoun_possessive("shoes") }}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"They are her shoes.\n"})}),"\n",(0,o.jsx)(n.h3,{id:"automatically-use-responsive-first-and-second-person-pronouns-i-we-you-your-etc",children:'Automatically use responsive first and second person pronouns ("I", "We", "You", "Your", etc.)'}),"\n",(0,o.jsx)(n.p,{children:"Versions of the Assembly Line >= 3.0.0 and Docassemble servers later than 1.4.103 can\nconjugate pronouns in the first and second person as well as the default third-person.\nThis works both for an ALIndividual and an ALPeopleList."}),"\n",(0,o.jsxs)(n.p,{children:["These minimum versions support a new parameter, ",(0,o.jsx)(n.code,{children:"person"}),", that can be one of:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"1 (First person, responsive to list length)"}),"\n",(0,o.jsx)(n.li,{children:'"1p" (first person plural)'}),"\n",(0,o.jsx)(n.li,{children:"2 (second person, responsive to list length)"}),"\n",(0,o.jsx)(n.li,{children:'"2p" (second person plural)'}),"\n",(0,o.jsxs)(n.li,{children:["3 (third person, responsive to list length. ",(0,o.jsx)(n.strong,{children:"Default"}),")"]}),"\n",(0,o.jsx)(n.li,{children:'"3p" (third person plural)'}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This is especially helpful in an output document when there can be either 1 or multiple litigants,\nsuch as a letter or complaint that is written from the litigant's perspective."}),"\n",(0,o.jsx)(n.p,{children:"For example, to write a letter that is from the perspective of the user or users:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jinja",children:'It\'s all about {{ users.pronoun(person=1) }}.\n\n{{ users.pronoun_subjective(person=1) }} love animals.\n\nEspecially {{ users.pronoun_possessive("elephant", person=1) }}.\n'})}),"\n",(0,o.jsx)(n.p,{children:"Results in:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"It's all about me.\nI love animals.\nEspecially my elephant."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If users is a list with exactly 1 person, and"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"It's all about us.\nWe love animals.\nEspecially our elephant."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"When there are 2 or more people in the list."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"person=2"})," parameter would result in the following output,\nregardless of the length of the list (because there is not a separate\nsecond person pronoun in English):"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"It's all about you.\nYou love animals.\nEspecially your elephant."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"more-about-adapting-language-based-on-gender-and-plurality",children:"More about adapting language based on gender and plurality"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#language%20methods",children:"Docassemble's documentation"}),"\nincludes several more comprehensive examples of how to use these functions to automatically\nuse appropriate pronouns."]}),"\n",(0,o.jsx)(n.h3,{id:"salutation",children:(0,o.jsx)(n.code,{children:"salutation"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://docassemble.org/docs/objects.html#Individual.salutation",children:(0,o.jsx)(n.code,{children:"salutation"})}),' method\nreturns the word "Mr." or "Ms." depending entirely on the user\'s ',(0,o.jsx)(n.code,{children:"gender"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>t});var i=s(6540);const o={},r=i.createContext(o);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);