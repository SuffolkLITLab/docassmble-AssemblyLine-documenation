"use strict";(self.webpackChunkdocassemble_assembly_line_documentation=self.webpackChunkdocassemble_assembly_line_documentation||[]).push([[239],{4462:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/dashboard-bootstrap-example-b61dc18100ea064951d5482a15c0d5a3.png"},7944:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"components/ALThemeTemplate/althemetemplate_overview","title":"ALThemeTemplate: Applying a Custom Theme or Brand\\n","description":"Sharing a custom look and feel across multiple Assembly Line interviews","source":"@site/docs/components/ALThemeTemplate/althemetemplate_overview.md","sourceDirName":"components/ALThemeTemplate","slug":"/components/ALThemeTemplate/overview","permalink":"/docs/components/ALThemeTemplate/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/SuffolkLITLab/docassemble-AssemblyLine-documentation/edit/main/docs/components/ALThemeTemplate/althemetemplate_overview.md","tags":[],"version":"current","frontMatter":{"id":"althemetemplate_overview","title":"ALThemeTemplate: Applying a Custom Theme or Brand\\n","sidebar_label":"ALThemeTemplate","slug":"overview"},"sidebar":"docs","previous":{"title":"llms","permalink":"/docs/components/ALToolbox/llms"},"next":{"title":"RateMyPDF","permalink":"/docs/components/RateMyPDF/overview"}}');var s=o(4848),a=o(8453);const i={id:"althemetemplate_overview",title:"ALThemeTemplate: Applying a Custom Theme or Brand\n",sidebar_label:"ALThemeTemplate",slug:"overview"},r=void 0,l={},c=[{value:"Sharing a custom look and feel across multiple Assembly Line interviews",id:"sharing-a-custom-look-and-feel-across-multiple-assembly-line-interviews",level:2},{value:"Visual customization",id:"visual-customization",level:2},{value:"Customizing the logo and title for Assembly Line interviews",id:"customizing-the-logo-and-title-for-assembly-line-interviews",level:3},{value:"Creating a custom CSS theme with Bootstrap.build",id:"creating-a-custom-css-theme-with-bootstrapbuild",level:3},{value:"Creating a custom theme from source instead of with a theme generator",id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator",level:3},{value:"Running node and npm to build a Bootstrap config (optional)",id:"running-node-and-npm-to-build-a-bootstrap-config-optional",level:4},{value:"Using dark mode",id:"using-dark-mode",level:3},{value:"Using custom fonts in the frontend",id:"using-custom-fonts-in-the-frontend",level:3},{value:"Using custom fonts when creating PDF files from DOCX templates",id:"using-custom-fonts-when-creating-pdf-files-from-docx-templates",level:3},{value:"Use the ALDashboard to install the font",id:"use-the-aldashboard-to-install-the-font",level:4},{value:"Manually install the font",id:"manually-install-the-font",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"sharing-a-custom-look-and-feel-across-multiple-assembly-line-interviews",children:"Sharing a custom look and feel across multiple Assembly Line interviews"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALThemeTemplate",children:"ALThemeTemplate"}),'\nrepository is a template for a "brand" package that you can use for your own organization.']}),"\n",(0,s.jsx)(t.h2,{id:"visual-customization",children:"Visual customization"}),"\n",(0,s.jsx)(t.p,{children:"You can customize Docassemble, and Assembly Line interviews, with a Bootstrap 5 theme."}),"\n",(0,s.jsx)(t.h3,{id:"customizing-the-logo-and-title-for-assembly-line-interviews",children:"Customizing the logo and title for Assembly Line interviews"}),"\n",(0,s.jsx)(t.p,{children:"You should also customize the:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/components/AssemblyLine/magic_variables#al_organization_title",children:"Title"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/components/AssemblyLine/magic_variables#al_organization_homepage",children:"Home page"})}),"\n",(0,s.jsxs)(t.li,{children:["and ",(0,s.jsx)(t.a,{href:"/docs/components/AssemblyLine/magic_variables#al_logo",children:"logo"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-custom-css-theme-with-bootstrapbuild",children:"Creating a custom CSS theme with Bootstrap.build"}),"\n",(0,s.jsx)(t.p,{children:"If you want to build a custom theme, encompassing colors, fonts, button styles and other\noptions that are configurable with css, you can:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"build one from Bootstrap 5 source"}),"\n",(0,s.jsxs)(t.li,{children:["start with a theme generator tool like ",(0,s.jsx)(t.a,{href:"https://bootstrap.build/",children:"bootstrap.build"}),"\nand in some cases, add some custom CSS to make it work with Docassemble."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Using bootstrap.build is the simplest option for most authors."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Visit the ",(0,s.jsx)(t.a,{href:"https://bootstrap.build/",children:"bootstrap.build"})," website."]}),"\n",(0,s.jsx)(t.li,{children:"Click the button to open the Builder"}),"\n",(0,s.jsxs)(t.li,{children:["Customize the options that you want to customize. Typically those will include:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Under color system, the $gray/$blue/etc. colors, if you use a matching color in your theme"}),"\n",(0,s.jsxs)(t.li,{children:["Under color system, almost always the variables ",(0,s.jsx)(t.code,{children:"primary"}),", ",(0,s.jsx)(t.code,{children:"secondary"}),", ",(0,s.jsx)(t.code,{children:"success"}),", ",(0,s.jsx)(t.code,{children:"info"}),", ",(0,s.jsx)(t.code,{children:"warning"}),", ",(0,s.jsx)(t.code,{children:"danger"}),",\n",(0,s.jsx)(t.code,{children:"light"})," and ",(0,s.jsx)(t.code,{children:"dark"})]}),"\n",(0,s.jsx)(t.li,{children:"Under Typography, customize any fonts that you wish to use"}),"\n",(0,s.jsx)(t.li,{children:"Under forms, you may want to customize button size and rounded edges"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:['Click the "export theme" button (it may be hidden behind a banner at the top of the page) and choose the\n"bootstrap.min.css" option. Rename this theme to be more specific. Optionally, download the ',(0,s.jsx)(t.code,{children:"_variables.scss"})," file\nso that you can easily load and adjust your settings in future."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Next, you will need to make a small adjustment to the theme generated by bootstrap.build.\nCopy and paste the code below into the ",(0,s.jsx)(t.code,{children:"bootstrap.min.css"})," file (or your new file name)."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:".visually-hidden {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n  \n.bg-dark {\n  background-color: #1a73e8!important;  /* replace with your desired nav bar color */\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Add this theme to your Docassemble playground using the Folders | Static menu."}),"\n",(0,s.jsx)(t.p,{children:"You can then reference your new file by adding a bootstrap theme feature to your interview:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"features:\n  bootstrap theme: bootstrap.min.css\n"})}),"\n",(0,s.jsx)(t.h3,{id:"creating-a-custom-theme-from-source-instead-of-with-a-theme-generator",children:"Creating a custom theme from source instead of with a theme generator"}),"\n",(0,s.jsxs)(t.p,{children:["While the above instructions to use bootstrap.build can work well in most\ncircumstances, you may run into small interface bugs introduced by the theme\ngenerator. If you prefer more control over building the theme, you can create\na custom theme from the bootstrap source code. The Bootstrap documentation\n",(0,s.jsx)(t.a,{href:"https://getbootstrap.com/docs/5.1/customize/overview",children:"covers the details of theming"}),"\nif you want to take this approach."]}),"\n",(0,s.jsxs)(t.p,{children:["Create a new ",(0,s.jsx)(t.code,{children:"custom.scss"})," file anywhere on your computer to contain the SASS/CSS styles for your branding.\nDetailed instructions on what this file can contain are in the ",(0,s.jsx)(t.a,{href:"https://getbootstrap.com/docs/5.1/customize/sass/#importing",children:"Bootstrap\ndocumentation"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["You can use a ",(0,s.jsx)(t.a,{href:"https://huemint.com/bootstrap-basic/",children:"color theme generator"})," like\n",(0,s.jsx)(t.a,{href:"https://huemint.com/bootstrap-basic/",children:"Huemint.com"})," to make sure that you have a\nconsistent set of all 9 Bootstrap variables. When you use the color theme\ngenerator, at the bottom of the page, you will see a small snippet of code that\nyou can copy into the ",(0,s.jsx)(t.code,{children:"customs.scss"})," file."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, your new ",(0,s.jsx)(t.code,{children:"custom.scss"})," might look like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-scss",children:'// Custom.scss\n// Option A: Include all of Bootstrap\n\n// Include any default variable overrides here (though functions won\'t be available)\n\n$white: #ffffff;\n\n$theme-colors: (\n    "light":      #d8e2a5,\n    "dark":       #1b1b1b,\n    "primary":    #25dec6,\n    "secondary":  #375b5a,\n    "info":       #d74d72,\n    "success":    #0cb545,\n    "warning":    #f4ca0b,\n    "danger":     #fa043c,\n);\n\n// Note: we placed our custom.scss file in the bootstrap path for simplicity,\n// so we use a different path than in the bootstrap documentation\n// @import "../node_modules/bootstrap/scss/bootstrap";\n@import "bootstrap";\n\n// Then add additional custom code here\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Once you have written your ",(0,s.jsx)(t.code,{children:"custom.scss"})," file, you can use the\n",(0,s.jsx)(t.a,{href:"https://github.com/SuffolkLITLab/docassemble-ALDashboard",children:"ALDashboard"})," (which you can ",(0,s.jsx)(t.a,{href:"/docs/get_started/installation#install-aldashboard",children:"install on\nyour docassemble server"}),")\nto compile a custom Bootstrap theme. If you are associated with the Suffolk LIT Lab and have an account on\nthe Suffolk Development server, you can visit a ",(0,s.jsx)(t.a,{href:"https://apps-dev.suffolklitlab.org/start/ALDashboard/compile_bootstrap",children:"live version of the tool"}),"\nto try it out."]}),"\n",(0,s.jsx)(t.p,{children:'At the end of the tool, you can view what all of the different bootstrap components will look like with your theme.\nIf you want to change any of the colors, you can go back and edit your "custom.scss" file and regenerate the bootstrap theme.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A screenshot that says &quot;Your file is compiled! You can view and copy your file, or download it directly by right clicking the link to save it as a CSS file&quot;. Below are examples of Bootstrap components like buttons and nav bars.",src:o(4462).A+"",width:"1362",height:"821"})}),"\n",(0,s.jsxs)(t.p,{children:["Once you like the colors you've chosen, download the compiled file, and then add it\na docassemble project, in the ",(0,s.jsx)(t.code,{children:"static"})," folder. You can then reference your new file\nby adding a ",(0,s.jsx)(t.a,{href:"https://docassemble.org/docs/initial.html#bootstrap%20theme",children:"bootstrap theme feature"})," to your interview:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"features:\n  bootstrap theme: my_bootstrap_theme.css\n"})}),"\n",(0,s.jsx)(t.h4,{id:"running-node-and-npm-to-build-a-bootstrap-config-optional",children:"Running node and npm to build a Bootstrap config (optional)"}),"\n",(0,s.jsx)(t.p,{children:"If you don't have access to a docassemble server yourself, you can\nalso compile a bootstrap theme from source using node and npm."}),"\n",(0,s.jsxs)(t.p,{children:["Use a computer with a ",(0,s.jsx)(t.a,{href:"https://nodejs.dev/en/",children:"current version of Node"}),".\nThe instructions on this page\nassume you are using an Ubuntu Linux computer with Node installed, but they\nshould be the same on any workstation. They were tested on a machine running\nWindows 11 with Ubuntu running under Windows Subsystem for Linux (WSL)."]}),"\n",(0,s.jsx)(t.p,{children:"It also assumes that you have VS Code installed, but you can use any text\neditor of your choice."}),"\n",(0,s.jsxs)(t.p,{children:["First, ",(0,s.jsx)(t.a,{href:"https://getbootstrap.com/docs/5.1/getting-started/download/",children:"download the Bootstrap source"}),",\nand install its dependencies. As of this writing, the latest version you should use is 5.1.3."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"wget https://github.com/twbs/bootstrap/releases/download/v5.1.3/bootstrap-5.1.3-dist.zip\nunzip bootstrap-5.1.3-dist.zip\ncd bootstrap-5.1.3\nnpm install\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Place the ",(0,s.jsx)(t.code,{children:"custom.scss"})," file you wrote from ",(0,s.jsx)(t.a,{href:"#creating-a-custom-theme-from-source-instead-of-with-a-theme-generator",children:"the above section"}),"\nin the unzipped bootstrap-5.1.3 folder, and use ",(0,s.jsx)(t.code,{children:"npm"})," to compile the theme file."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"cd ~/bootstrap-5.1.3\nnpm run css-compile\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Your new ",(0,s.jsx)(t.code,{children:"custom.css"})," file is in the\n",(0,s.jsx)(t.code,{children:"~/bootstrap-5.1.3/dist/css"})," directory. Copy this file to your Docassemble\n",(0,s.jsx)(t.code,{children:"static"})," folder and reference it as a ",(0,s.jsx)(t.code,{children:"bootstrap theme"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"using-dark-mode",children:"Using dark mode"}),"\n",(0,s.jsxs)(t.p,{children:['Docassemble by default will show an alternate "dark mode" version of your interview to\nusers who request it, usually with a browser or OS setting. You can set your browser\nor OS to use dark mode by following ',(0,s.jsx)(t.a,{href:"https://support.google.com/chrome/answer/9275525?hl=en&co=GENIE.Platform%3DDesktop#zippy=",children:"these instructions"})," to see what your interview looks like."]}),"\n",(0,s.jsx)(t.h3,{id:"using-custom-fonts-in-the-frontend",children:"Using custom fonts in the frontend"}),"\n",(0,s.jsx)(t.p,{children:"You can use custom webfonts with Docassemble, just like you can with any other web\nproduct."}),"\n",(0,s.jsxs)(t.p,{children:["This ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts",children:"Mozilla guide about web\nfonts"}),"\nis a good place to start."]}),"\n",(0,s.jsxs)(t.p,{children:["If you do not already have a .woff or .woff2 file but you do have a TrueType\n(TTF) or OpenType (OTF) file that you are licensed to distribute, you can create\none with a ",(0,s.jsx)(t.a,{href:"https://www.fontsquirrel.com/tools/webfont-generator",children:"free online web font\ntool"}),"."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Once you have a .woff file, upload it to the /static folder of a Docassemble playground."}),"\n",(0,s.jsxs)(t.li,{children:["Add an ",(0,s.jsx)(t.code,{children:"@font-face"})," directive to your bootstrap.css file (or a separate CSS file that you\nreference in the ",(0,s.jsx)(t.code,{children:"features"})," block of your interview)"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"You cannot include Mako tags in your CSS file, so in order to use the new font face, you should\nadd it to a Docassemble package and then install the package on your server."}),"\n",(0,s.jsx)(t.p,{children:"Example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-css",children:"@font-face {\n    font-family: 'my_font';\n    src: url('/packagestatic/docassemble.MyTheme/my_font.woff2') format('woff2'),\n         url('/packagestatic/docassemble.MyTheme/my_font.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"In the example above, MyTheme is a Docassemble package that is installed\nserver-wide. my_font is both the name of a web font and the name of the WOFF file."}),"\n",(0,s.jsx)(t.h3,{id:"using-custom-fonts-when-creating-pdf-files-from-docx-templates",children:"Using custom fonts when creating PDF files from DOCX templates"}),"\n",(0,s.jsxs)(t.p,{children:["If you would like to use a font ",(0,s.jsx)(t.strong,{children:"other than"})," the Microsoft fonts popular in\nthe late 1990s-2000 era (Arial, Times New Roman, Courier) then you will need to\ninstall the fonts on your Docassemble server."]}),"\n",(0,s.jsx)(t.p,{children:"Make sure that you have a license for each font you want to install."}),"\n",(0,s.jsx)(t.p,{children:"The first step is to locate the .otf or .ttf file representing the font that you want to use\ninside your Word template (note that these are often in c:\\windows\\fonts)"}),"\n",(0,s.jsx)(t.h4,{id:"use-the-aldashboard-to-install-the-font",children:"Use the ALDashboard to install the font"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"https://github.com/suffolklitlab/docassemble-ALDashboard",children:"ALDashboard"})," tool has a\nwidget that helps you install a font server-wide so it is available when a DOCX\nis converted to PDF."]}),"\n",(0,s.jsx)(t.p,{children:"If you do not already have ALDashboard installed:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Install the ALDashboard package via the global Package Management page (e.g., add ",(0,s.jsx)(t.code,{children:"https://github.com/suffolklitlab/docassemble-ALDashboard"}),' to the GitHub input field and click "update")']}),"\n",(0,s.jsx)(t.li,{children:'Run it, either from the "Dashboard" menu item (if you added the menu shortcut) or by visiting /start/ALDashboard/menu on your\nserver.'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Once you are at the ALDashboard menu page:"}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsx)(t.li,{children:"Click the Install Fonts button."}),"\n",(0,s.jsx)(t.li,{children:'Drag and drop the OTF or TTF file on the upload target and click "Continue". The font should be available\nafter a short wait.'}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["If the font isn't available, you can try stopping and then re-starting the container by logging in to the server\nhosting your Docassemble container and running ",(0,s.jsx)(t.code,{children:"docker stop -t 600 CONTAINERNAME"})," followed by ",(0,s.jsx)(t.code,{children:"docker start CONTAINERNAME"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"manually-install-the-font",children:"Manually install the font"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Copy the font to your docassemble server"}),"\n",(0,s.jsx)(t.li,{children:"Copy the font inside the docker container"}),"\n",(0,s.jsx)(t.li,{children:"reset the font cache"}),"\n",(0,s.jsx)(t.li,{children:"restart the docassemble supervisor processes"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"scp ~/myfont.ttf apps.example.com:\nssh apps.example.com\ndocker cp myfont.ttf CONTAINERNAME:/usr/share/fonts\ndocker exec mycontainer /bin/bash\nfc-cache -f -v\nsupervisorctl restart uwsgi\nsupervisorctl start reset\nsupervisorctl -s http://localhost:9001 restart unoconv\n"})}),"\n",(0,s.jsxs)(t.p,{children:['Replace "CONTAINERNAME" with the actual name of your container. You can often\nauto-complete the container name by hitting ',(0,s.jsx)(t.code,{children:"tab"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Instead of copying the fonts to /usr/share/fonts, you could likely copy\nthem to ",(0,s.jsx)(t.code,{children:"/var/www/.fonts"}),". This has the advantage of being writable by the\nweb process from a Python module."]}),"\n",(0,s.jsxs)(t.p,{children:["If the font still does not appear to be installed (try generating a PDF with the\ncustom font),you may need to do a ",(0,s.jsx)(t.code,{children:"docker stop -t 600 CONTAINERNAME"})," followed by a\n",(0,s.jsx)(t.code,{children:"docker start CONTAINERNAME"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>r});var n=o(6540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);