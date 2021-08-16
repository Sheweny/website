(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{312:function(e,t,o){"use strict";o.r(t);var n=o(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"installing-node-js-and-sheweny"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js-and-sheweny"}},[e._v("#")]),e._v(" Installing Node.js and sheweny")]),e._v(" "),o("h2",{attrs:{id:"installing-node-js"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-node-js"}},[e._v("#")]),e._v(" Installing Node.js")]),e._v(" "),o("p",[e._v("To use sheweny, you'll need to install Node.js. You can do so by going to "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("::: warning\nIf you "),o("em",[e._v("do")]),e._v(" have Node installed, but it's an older version (i.e. anything below 16.6.0), then you must upgrade to the latest version. sheweny V1 requires Node v16.6.0 or higher.\n:::")]),e._v(" "),o("h3",{attrs:{id:"installing-on-windows"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-windows"}},[e._v("#")]),e._v(" Installing on Windows")]),e._v(" "),o("p",[e._v("If you're developing on Windows, it's as simple as installing any other program. Go to "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),o("OutboundLink")],1),e._v(", download the latest version, open up the downloaded file, and follow the steps from the installer.")]),e._v(" "),o("h3",{attrs:{id:"installing-on-macos"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-macos"}},[e._v("#")]),e._v(" Installing on macOS")]),e._v(" "),o("p",[e._v("If you're developing on macOS, you have a few options. You can go to "),o("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the Node.js website"),o("OutboundLink")],1),e._v(", download the latest version, double click the package installer, and follow the instructions. You can also use a package manager like "),o("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Homebrew"),o("OutboundLink")],1),e._v(" with the command "),o("code",[e._v("brew install node")]),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"installing-on-linux"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-on-linux"}},[e._v("#")]),e._v(" Installing on Linux")]),e._v(" "),o("p",[e._v("If you're developing on Linux, you may consult "),o("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(" to determine how you should install Node. On that note, there's a possibility that you may already have Node installed on your machine (e.g., if you're using a VPS). You can check the installed version by running the "),o("code",[e._v("node -v")]),e._v(" command. If it outputs something like "),o("code",[e._v("v16.6.0")]),e._v(" or higher, then you're good to go! Otherwise, take a look at "),o("a",{attrs:{href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),o("OutboundLink")],1),e._v(" for instructions on installing Node on your OS.")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"preparing-the-essentials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#preparing-the-essentials"}},[e._v("#")]),e._v(" Preparing the essentials")]),e._v(" "),o("p",[e._v("To use sheweny, you'll need to install it via npm (Node's package manager). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.")]),e._v(" "),o("h3",{attrs:{id:"setting-up-a-project-folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-a-project-folder"}},[e._v("#")]),e._v(" Setting up a project folder")]),e._v(" "),o("p",[e._v("Like any other project, you should have a dedicated folder to keep it organized and manageable.")]),e._v(" "),o("p",[e._v("Navigate to a place on your machine that's easy to find and reopen in the future for convenience purposes. Create a new folder like you normally would (depending on your OS, you can use "),o("code",[e._v("mkdir project-name")]),e._v(" inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like "),o("code",[e._v("discord-bot")]),e._v(" for the time being (or anything else you have in mind).")]),e._v(" "),o("p",[e._v("Once you're done making the folder, open it up (depending on your OS, you can use "),o("code",[e._v("cd project-name")]),e._v(" inside your terminal).")]),e._v(" "),o("h3",{attrs:{id:"opening-the-command-prompt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-the-command-prompt"}},[e._v("#")]),e._v(" Opening the command prompt")]),e._v(" "),o("p",[e._v("If you're on Linux, you can quickly open up the terminal with "),o("code",[e._v("Ctrl + Alt + T")]),e._v(".")]),e._v(" "),o("p",[e._v("If you're on Windows and aren't familiar with opening up the command prompt, do the following:")]),e._v(" "),o("ol",[o("li",[e._v("Open your bot project folder.")]),e._v(" "),o("li",[e._v("Hold down the "),o("code",[e._v("Shift")]),e._v(" key and right-click inside the folder.")]),e._v(" "),o("li",[e._v('Choose the "Open command window here" option.')])]),e._v(" "),o("p",[e._v("It should then open up a window with a black background. It's a bit unattractive, but we'll talk about using better, more powerful tools in a different part of the guide.")]),e._v(" "),o("h3",{attrs:{id:"using-the-command-prompt"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-the-command-prompt"}},[e._v("#")]),e._v(" Using the command prompt")]),e._v(" "),o("p",[e._v("With the command prompt open, run the "),o("code",[e._v("node -v")]),e._v(" command to make sure you've successfully installed Node.js. If you see something like "),o("code",[e._v("v16.6")]),e._v(" or higher, great! If not, go back and try installing again.")]),e._v(" "),o("p",[e._v("The next command you'll be running is "),o("code",[e._v("npm init")]),e._v(". This command creates a "),o("code",[e._v("package.json")]),e._v(" file for you, which will keep track of the dependencies your bot uses and other info. If you're a bit confused by that, you can ignore it for the time being.")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("npm init")]),e._v(" command will ask you a sequence of questions–you should fill them out as you see fit. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.")]),e._v(" "),o("p",[e._v("::: tip\nWant to get started quickly? Use "),o("code",[e._v("npm init -y")]),e._v(" to have it fill out everything for you!\n:::")]),e._v(" "),o("p",[e._v("Once you're done with that, you're ready to install sheweny!")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"installing-sheweny"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-sheweny"}},[e._v("#")]),e._v(" Installing sheweny")]),e._v(" "),o("p",[e._v("Now that you've installed Node.js and know how to open up your console and run commands, you can finally install sheweny!")]),e._v(" "),o("p",[e._v("To install sheweny, run the "),o("code",[e._v("npm install sheweny")]),e._v(". This can take a bit of time but should finish fairly quickly.")]),e._v(" "),o("p",[e._v("And that's it! With all the necessities installed, you're almost ready to start coding your bot.")]),e._v(" "),o("hr"),e._v(" "),o("h2",{attrs:{id:"installing-a-linter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installing-a-linter"}},[e._v("#")]),e._v(" Installing a linter")]),e._v(" "),o("p",[e._v("While you are coding, you may find that you run into numerous syntax errors or code in an inconsistent style. You should install a linter to ease these troubles. While code editors generally can point out syntax errors, with a linter, you can coerce your coding to be in a specific style as you define in the configuration. While this is not required, it's advisable. "),o("RouterLink",{attrs:{to:"/preparations/setting-up-a-linter.html"}},[e._v("Click here for the linter guide!")])],1),e._v(" "),o("h2",{attrs:{id:"sumarry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sumarry"}},[e._v("#")]),e._v(" Sumarry")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/ShewenyClient.html"}},[e._v("ShewenyClient")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/doc/ShewenyClient.html#properties"}},[e._v("Properties")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/ShewenyClient.html#events"}},[e._v("Events")])],1)])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/Command.html"}},[e._v("Command")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/doc/Command.html#methods"}},[e._v("Methods")])],1)])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/CommandsHandler.html"}},[e._v("CommandsHandler.md")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/doc/CommandsHandler.html#properties"}},[e._v("Properties")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/CommandsHandler.html#methods"}},[e._v("Methods")])],1)])],1),e._v(" "),o("li",[o("a",{attrs:{href:"#SlashHandler"}},[e._v("SlashHandler.md")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#SlashHandler#properties"}},[e._v("Properties")])]),e._v(" "),o("li",[o("a",{attrs:{href:"#SlashHandler#methods"}},[e._v("Methods")])])])]),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/EventsHandler.html"}},[e._v("EventsHandler")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/doc/EventsHandler.html#properties"}},[e._v("Properties")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/EventsHandler.html#methods"}},[e._v("Methods")])],1)])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/doc/Event.html"}},[e._v("Event")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/doc/Event.html#methods"}},[e._v("Methods")])],1)])],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);