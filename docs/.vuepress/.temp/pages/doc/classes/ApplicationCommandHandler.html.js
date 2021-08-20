export const data = {
  "key": "v-5cec5a3a",
  "path": "/doc/classes/ApplicationCommandHandler.html",
  "title": "SlashHandler",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Methods",
      "slug": "methods",
      "children": [
        {
          "level": 3,
          "title": "[async] loadAll()",
          "slug": "async-loadall",
          "children": []
        },
        {
          "level": 3,
          "title": "getData()",
          "slug": "getdata",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] registerCommands(commands, guildId)",
          "slug": "async-registercommands-commands-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] createCommand(command, guildId)",
          "slug": "async-createcommand-command-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] editCommand(oldCommand, newCommand, guildId)",
          "slug": "async-editcommand-oldcommand-newcommand-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] deleteCommand(command, guildId)",
          "slug": "async-deletecommand-command-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] deleteAllCommands( guildId)",
          "slug": "async-deleteallcommands-guildid",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "doc/classes/ApplicationCommandHandler.md",
  "git": {
    "contributors": [
      {
        "name": "Raphael",
        "email": "veauville.raphael@gmail.com",
        "commits": 2
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
