"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[9613],{9705:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=n(4848),t=n(8453);const l={sidebar_label:"llms",title:"ALToolbox.llms"},o=void 0,r={id:"reference/ALToolbox/llms",title:"ALToolbox.llms",description:"chat\\_completion",source:"@site/docs/reference/ALToolbox/llms.md",sourceDirName:"reference/ALToolbox",slug:"/reference/ALToolbox/llms",permalink:"/docs/reference/ALToolbox/llms",draft:!1,unlisted:!1,editUrl:"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/reference/ALToolbox/llms.md",tags:[],version:"current",frontMatter:{sidebar_label:"llms",title:"ALToolbox.llms"},sidebar:"docs",previous:{title:"save_input_data",permalink:"/docs/reference/ALToolbox/save_input_data"},next:{title:"ALRecipes",permalink:"/docs/framework/alrecipes"}},d={},c=[{value:"chat_completion",id:"chat_completion",level:4},{value:"extract_fields_from_text",id:"extract_fields_from_text",level:4},{value:"match_goals_from_text",id:"match_goals_from_text",level:4},{value:"classify_text",id:"classify_text",level:4},{value:"synthesize_user_responses",id:"synthesize_user_responses",level:4},{value:"define_fields_from_dict",id:"define_fields_from_dict",level:4},{value:"Goal Objects",id:"goal-objects",level:2},{value:"response_satisfies_me_or_follow_up",id:"response_satisfies_me_or_follow_up",level:4},{value:"get_next_question",id:"get_next_question",level:4},{value:"GoalDict Objects",id:"goaldict-objects",level:2},{value:"satisfied",id:"satisfied",level:4},{value:"GoalQuestion Objects",id:"goalquestion-objects",level:2},{value:"GoalSatisfactionList Objects",id:"goalsatisfactionlist-objects",level:2},{value:"mark_satisfied_goals",id:"mark_satisfied_goals",level:4},{value:"keep_going",id:"keep_going",level:4},{value:"need_more_questions",id:"need_more_questions",level:4},{value:"satisfied",id:"satisfied-1",level:4},{value:"get_next_goal_and_question",id:"get_next_goal_and_question",level:4},{value:"synthesize_draft_response",id:"synthesize_draft_response",level:4},{value:"provide_feedback",id:"provide_feedback",level:4},{value:"IntakeQuestion Objects",id:"intakequestion-objects",level:2},{value:"IntakeQuestionList Objects",id:"intakequestionlist-objects",level:2},{value:"need_more_questions",id:"need_more_questions-1",level:4}];function h(e){const s={code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h4,{id:"chat_completion",children:"chat_completion"}),"\n",(0,i.jsx)(s.p,{children:"A light wrapper on the OpenAI chat endpoint."}),"\n",(0,i.jsx)(s.p,{children:"Includes support for token limits, error handling, and moderation queue."}),"\n",(0,i.jsx)(s.p,{children:"It is also possible to specify an alternative model, and we support GPT-4-turbo's JSON\nmode."}),"\n",(0,i.jsx)(s.p,{children:"As of May 2024, json mode is available with both GPT-4-turbo and GPT-3.5-turbo (and no longer requires the 1106-preview versions)"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"system_message"})," ",(0,i.jsx)(s.em,{children:"str"})," - The role the chat engine should play"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"user_message"})," ",(0,i.jsx)(s.em,{children:"str"})," - The message (data) from the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_client"})," ",(0,i.jsx)(s.em,{children:"Optional[OpenAI]"})," - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_api"})," ",(0,i.jsx)(s.em,{children:"Optional[str]"})," - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"temperature"})," ",(0,i.jsx)(s.em,{children:"float"})," - The temperature to use for the GPT API"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"json_mode"})," ",(0,i.jsx)(s.em,{children:"bool"})," - Whether to use JSON mode for the GPT API. Requires the word ",(0,i.jsx)(s.code,{children:"json"})," in the system message, but will add if you omit it."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"model"})," ",(0,i.jsx)(s.em,{children:"str"})," - The model to use for the GPT API"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"messages"})," ",(0,i.jsx)(s.em,{children:"Optional[List[Dict[str, str]]]"})," - A list of messages to send to the chat engine. If provided, system_message and user_message will be ignored."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"skip_moderation"})," ",(0,i.jsx)(s.em,{children:"bool"})," - Whether to skip the OpenAI moderation step, which may save seconds but risks banning your account. Only enable when you have full control over the inputs."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"A string with the response from the API endpoint or JSON data if json_mode is True"}),"\n",(0,i.jsx)(s.h4,{id:"extract_fields_from_text",children:"extract_fields_from_text"}),"\n",(0,i.jsx)(s.p,{children:"Extracts fields from text."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"text"})," ",(0,i.jsx)(s.em,{children:"str"})," - The text to extract fields from"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"field_list"})," ",(0,i.jsx)(s.em,{children:"Dict[str,str]"})," - A list of fields to extract, with the key being the field name and the value being a description of the field"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"A dictionary of fields extracted from the text"}),"\n",(0,i.jsx)(s.h4,{id:"match_goals_from_text",children:"match_goals_from_text"}),"\n",(0,i.jsx)(s.p,{children:"Reads a user's message and determines whether it meets a set of goals, with the help of an LLM."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"text"})," ",(0,i.jsx)(s.em,{children:"str"})," - The text to extract goals from"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"field_list"})," ",(0,i.jsx)(s.em,{children:"Dict[str,str]"})," - A list of goals to extract, with the key being the goal name and the value being a description of the goal"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"A dictionary of fields extracted from the text"}),"\n",(0,i.jsx)(s.h4,{id:"classify_text",children:"classify_text"}),"\n",(0,i.jsx)(s.p,{children:"Given a text, classify it into one of the provided choices with the assistance of a large language model."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"text"})," ",(0,i.jsx)(s.em,{children:"str"})," - The text to classify"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"choices"})," ",(0,i.jsx)(s.em,{children:"Dict[str,str]"})," - A list of choices to classify the text into, with the key being the choice name and the value being a description of the choice"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_client"})," ",(0,i.jsx)(s.em,{children:"Optional[OpenAI]"})," - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_api"})," ",(0,i.jsx)(s.em,{children:"Optional[str]"})," - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"temperature"})," ",(0,i.jsx)(s.em,{children:"float"})," - The temperature to use for GPT. Defaults to 0."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"model"})," ",(0,i.jsx)(s.em,{children:"str"})," - The model to use for the GPT API"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"synthesize_user_responses",children:"synthesize_user_responses"}),"\n",(0,i.jsx)(s.p,{children:"Given a first draft and a series of follow-up questions and answers, use an LLM to synthesize the user's responses\ninto a single, coherent reply."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"custom_instructions"})," ",(0,i.jsx)(s.em,{children:"str"})," - Custom instructions for the LLM to follow in constructing the synthesized response"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"initial_draft"})," ",(0,i.jsx)(s.em,{children:"str"})," - The initial draft of the response from the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"messages"})," ",(0,i.jsx)(s.em,{children:"List[Dict[str, str]]"})," - A list of questions from the LLM and responses from the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_client"})," ",(0,i.jsx)(s.em,{children:"Optional[OpenAI]"})," - An OpenAI client object, optional. If omitted, will fall back to creating a new OpenAI client with the API key provided as an environment variable"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"openai_api"})," ",(0,i.jsx)(s.em,{children:"Optional[str]"})," - the API key for an OpenAI client, optional. If provided, a new OpenAI client will be created."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"temperature"})," ",(0,i.jsx)(s.em,{children:"float"})," - The temperature to use for GPT. Defaults to 0."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"model"})," ",(0,i.jsx)(s.em,{children:"str"})," - The model to use for the GPT API"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"define_fields_from_dict",children:"define_fields_from_dict"}),"\n",(0,i.jsx)(s.p,{children:"Assigns the values in a dictionary of fields to the corresponding fields in a Docassemble interview."}),"\n",(0,i.jsx)(s.p,{children:"Docassemble and built-in keywords are never defined by this function. If fields_to_ignore is provided, those fields will also be ignored."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"field_dict"})," ",(0,i.jsx)(s.em,{children:"Dict[str, Any]"})," - A dictionary of fields to define, with the key being the field name and the value\npresumably taken from the output of extract_fields_from_text."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"fields_to_ignore"})," ",(0,i.jsx)(s.em,{children:"Optional[List]"}),' - A list of fields to ignore. Defaults to None. Should be used to ensure\nsafety when defining fields from untrusted sources. E.g., ["user_is_logged_in"]']}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"None"}),"\n",(0,i.jsx)(s.h2,{id:"goal-objects",children:"Goal Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class Goal(DAObject)\n"})}),"\n",(0,i.jsx)(s.p,{children:"A class to represent a goal."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"name"})," ",(0,i.jsx)(s.em,{children:"str"})," - The name of the goal"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"description"})," ",(0,i.jsx)(s.em,{children:"str"})," - A description of the goal"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"satisfied"})," ",(0,i.jsx)(s.em,{children:"bool"})," - Whether the goal is satisfied"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"response_satisfies_me_or_follow_up",children:"response_satisfies_me_or_follow_up"}),"\n",(0,i.jsx)(s.p,{children:'Returns the text of the next question to ask the user or the string "satisfied"\nif the user\'s response satisfies the goal.'}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"response"})," ",(0,i.jsx)(s.em,{children:"str"})," - The response to check"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"True if the response satisfies the goal, False otherwise"}),"\n",(0,i.jsx)(s.h4,{id:"get_next_question",children:"get_next_question"}),"\n",(0,i.jsx)(s.p,{children:"Returns the text of the next question to ask the user."}),"\n",(0,i.jsx)(s.h2,{id:"goaldict-objects",children:"GoalDict Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class GoalDict(DADict)\n"})}),"\n",(0,i.jsx)(s.p,{children:"A class to represent a DADict of Goals."}),"\n",(0,i.jsx)(s.h4,{id:"satisfied",children:"satisfied"}),"\n",(0,i.jsx)(s.p,{children:"Returns True if all goals are satisfied, False otherwise."}),"\n",(0,i.jsx)(s.h2,{id:"goalquestion-objects",children:"GoalQuestion Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class GoalQuestion(DAObject)\n"})}),"\n",(0,i.jsx)(s.p,{children:"A class to represent a question about a goal."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"goal"})," ",(0,i.jsx)(s.em,{children:"Goal"})," - The goal the question is about"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"question"})," ",(0,i.jsx)(s.em,{children:"str"})," - The question to ask the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"response"})," ",(0,i.jsx)(s.em,{children:"str"})," - The user's response to the question"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"goalsatisfactionlist-objects",children:"GoalSatisfactionList Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class GoalSatisfactionList(DAList)\n"})}),"\n",(0,i.jsx)(s.p,{children:"A class to help ask the user questions until all goals are satisfied."}),"\n",(0,i.jsx)(s.p,{children:"Uses an LLM to prompt the user with follow-up questions if the initial response isn't complete.\nBy default, the number of follow-up questions is limited to 10."}),"\n",(0,i.jsx)(s.p,{children:"This can consume a lot of tokens, as each follow-up has a chance to send the whole conversation\nthread to the LLM."}),"\n",(0,i.jsx)(s.p,{children:"By default, this will use the OpenAI API key defined in the global configuration under this path:"}),"\n",(0,i.jsxs)(s.p,{children:["You can specify the path to an alternative configuration by setting the ",(0,i.jsx)(s.code,{children:"openai_configuration_path"})," attribute."]}),"\n",(0,i.jsx)(s.p,{children:"This object does NOT accept the key as a direct parameter, as that will be leaked in the user's answers."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"open ai:\n    key: sk-...\n"})}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"goals"})," ",(0,i.jsx)(s.em,{children:"List[Goal]"})," - The goals in the list, provided as a dictionary"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"goal_list"})," ",(0,i.jsx)(s.em,{children:"GoalList"})," - The list of Goals"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"question_limit"})," ",(0,i.jsx)(s.em,{children:"int"})," - The maximum number of follow-up questions to ask the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"question_per_goal_limit"})," ",(0,i.jsx)(s.em,{children:"int"})," - The maximum number of follow-up questions to ask the user per goal"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"initial_draft"})," ",(0,i.jsx)(s.em,{children:"str"})," - The initial draft of the user's response"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"initial_question"})," ",(0,i.jsx)(s.em,{children:"str"})," - The original question posed in the interview"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"mark_satisfied_goals",children:"mark_satisfied_goals"}),"\n",(0,i.jsx)(s.p,{children:"Marks goals as satisfied if the user's response satisfies the goal.\nThis should be used as soon as the user gives their initial reply."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"None"}),"\n",(0,i.jsx)(s.h4,{id:"keep_going",children:"keep_going"}),"\n",(0,i.jsx)(s.p,{children:"Returns True if there is at least one unsatisfied goal and if the number of follow-up questions asked is less than the question limit, False otherwise."}),"\n",(0,i.jsx)(s.h4,{id:"need_more_questions",children:"need_more_questions"}),"\n",(0,i.jsx)(s.p,{children:"Returns True if there is at least one unsatisfied goal, False otherwise."}),"\n",(0,i.jsx)(s.p,{children:"Also has the side effect of checking the user's most recent response to see if it satisfies the goal\nand updating the next question to be asked."}),"\n",(0,i.jsx)(s.h4,{id:"satisfied-1",children:"satisfied"}),"\n",(0,i.jsx)(s.p,{children:"Returns True if all goals are satisfied, False otherwise."}),"\n",(0,i.jsx)(s.h4,{id:"get_next_goal_and_question",children:"get_next_goal_and_question"}),"\n",(0,i.jsx)(s.p,{children:"Returns the next unsatisfied goal, along with a follow-up question to ask the user, if relevant."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsx)(s.p,{children:"A tuple of (Goal, str) where the first item is the next unsatisfied goal and the second item is the next question to ask the user, if relevant.\nIf the user's response to the last question satisfied the goal, returns (None, None)."}),"\n",(0,i.jsx)(s.h4,{id:"synthesize_draft_response",children:"synthesize_draft_response"}),"\n",(0,i.jsx)(s.p,{children:"Returns a draft response that synthesizes the user's responses to the questions."}),"\n",(0,i.jsx)(s.h4,{id:"provide_feedback",children:"provide_feedback"}),"\n",(0,i.jsx)(s.p,{children:"Returns feedback to the user based on the goals they satisfied."}),"\n",(0,i.jsx)(s.h2,{id:"intakequestion-objects",children:"IntakeQuestion Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class IntakeQuestion(DAObject)\n"})}),"\n",(0,i.jsx)(s.p,{children:"A class to represent a question in an LLM-assisted intake questionnaire."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"question"})," ",(0,i.jsx)(s.em,{children:"str"})," - The question to ask the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"response"})," ",(0,i.jsx)(s.em,{children:"str"})," - The user's response to the question"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"intakequestionlist-objects",children:"IntakeQuestionList Objects"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-python",children:"class IntakeQuestionList(DAList)\n"})}),"\n",(0,i.jsx)(s.p,{children:"Class to help create an LLM-assisted intake questionnaire."}),"\n",(0,i.jsx)(s.p,{children:"The LLM will be provided a free-form set of in/out criteria (like that\nprovided to a phone intake worker), an initial draft question from the user,\nand then guide the user through a series of follow-up questions to gather only\nenough information to determine if the user meets the criteria."}),"\n",(0,i.jsx)(s.p,{children:"In/out criteria are often pretty short, so we do not make or support\nembeddings at the moment."}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Attributes"}),":"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"criteria"})," ",(0,i.jsx)(s.em,{children:"Dict[str, str]"})," - A dictionary of criteria to match, indexed by problem type"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"problem_type_descriptions"})," ",(0,i.jsx)(s.em,{children:"Dict[str, str]"})," - A dictionary of descriptions of the problem types"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"problem_type"})," ",(0,i.jsx)(s.em,{children:"str"})," - The type of problem to match. E.g., a unit/department inside the law firm"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"initial_problem_description"})," ",(0,i.jsx)(s.em,{children:"str"})," - The initial description of the problem from the user"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"initial_question"})," ",(0,i.jsx)(s.em,{children:"str"})," - The original question posed in the interview"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"question_limit"})," ",(0,i.jsx)(s.em,{children:"int"})," - The maximum number of follow-up questions to ask the user. Defaults to 10."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"model"})," ",(0,i.jsx)(s.em,{children:"str"})," - The model to use for the GPT API. Defaults to gpt-4-turbo. gpt-3.5 is not smart enough"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"llm_role"})," ",(0,i.jsx)(s.em,{children:"str"})," - The role the LLM should play. Allows you to customize the script the LLM uses to guide the user.\nWe have provided a default script that should work for most intake questionnaires."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"llm_user_qualifies_prompt"})," ",(0,i.jsx)(s.em,{children:"str"})," - The prompt to use to determine if the user qualifies. We have provided a default prompt."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"out_of_questions"})," ",(0,i.jsx)(s.em,{children:"bool"})," - Whether the user has run out of questions to answer"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"qualifies"})," ",(0,i.jsx)(s.em,{children:"bool"})," - Whether the user qualifies based on the criteria"]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"need_more_questions-1",children:"need_more_questions"}),"\n",(0,i.jsx)(s.p,{children:"Returns True if the user needs to answer more questions, False otherwise."}),"\n",(0,i.jsx)(s.p,{children:"Also has the side effect of checking the user's most recent response to see if it satisfies the criteria\nand updating both the next question to be asked and the current qualification status."})]})}function a(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>r});var i=n(6540);const t={},l=i.createContext(t);function o(e){const s=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(l.Provider,{value:s},e.children)}}}]);