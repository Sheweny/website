export const data = {
  "key": "v-270cf5b3",
  "path": "/doc/classes/SlashHandler.html",
  "title": "Events Handler",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Properties",
      "slug": "properties",
      "children": [
        {
          "level": 3,
          "title": "EventsHandler.client",
          "slug": "eventshandler-client",
          "children": []
        },
        {
          "level": 3,
          "title": "EventsHandler.commands",
          "slug": "eventshandler-commands",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Methods",
      "slug": "methods",
      "children": [
        {
          "level": 3,
          "title": "EventsHandler#getData()",
          "slug": "eventshandler-getdata",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] EventsHandler#registerCommands(commands, guildId)",
          "slug": "async-eventshandler-registercommands-commands-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] EventsHandler#createCommand(command, guildId)",
          "slug": "async-eventshandler-createcommand-command-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] EventsHandler#editCommand(oldCommand, newCommand, guildId)",
          "slug": "async-eventshandler-editcommand-oldcommand-newcommand-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] EventsHandler#deleteCommand(command, guildId)",
          "slug": "async-eventshandler-deletecommand-command-guildid",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] EventsHandler#deleteAllCommands( guildId)",
          "slug": "async-eventshandler-deleteallcommands-guildid",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "doc/classes/SlashHandler.md",
  "git": {
    "contributors": [
      {
        "name": "Raphael",
        "email": "veauville.raphael@gmail.com",
        "commits": 1
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
