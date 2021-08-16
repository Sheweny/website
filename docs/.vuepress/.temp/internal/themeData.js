export const themeData = {
  "repo": "",
  "base": "/",
  "editLinks": false,
  "editLinkText": "",
  "lastUpdated": false,
  "docsDir": "doc",
  "displayAllHeaders": true,
  "sidebarDepth": 1,
  "navbar": [
    {
      "text": "Guide",
      "link": "/guide/"
    },
    {
      "text": "Ducumentation",
      "link": "/doc/"
    },
    {
      "text": "Github",
      "link": "https://github.com/Discord-util/website"
    }
  ],
  "sidebar": {
    "/doc/": [
      {
        "text": "Home",
        "path": "/doc/",
        "collapsable": false,
        "children": [
          "/doc"
        ]
      },
      {
        "text": "Classes",
        "path": "/doc/classes",
        "collapsable": false,
        "children": [
          "/doc/classes/ShewenyClient.md",
          "/doc/classes/Command.md",
          "/doc/classes/Event.md",
          "/doc/classes/CommandsHandler.md",
          "/doc/classes/EventsHandler.md",
          "/doc/classes/SlashHandler.md"
        ]
      },
      {
        "text": "Typedef",
        "path": "/doc/typedef",
        "collapsable": false,
        "children": [
          "/doc/typedef/ClientHandlers.md",
          "/doc/typedef/CommandArg.md",
          "/doc/typedef/CommandOptions.md",
          "/doc/typedef/CommandsHandlerOptions.md",
          "/doc/typedef/CommandTypeResolvable.md",
          "/doc/typedef/EventOptions.md",
          "/doc/typedef/EventsHandlerOptions.md",
          "/doc/typedef/HandlersOptions.md",
          "/doc/typedef/ShewenyClientOptions.md",
          "/doc/typedef/SubCommand.md"
        ]
      }
    ],
    "/guide/": [
      {
        "text": "Guide",
        "collapsable": false,
        "path": "/guide",
        "children": [
          "/guide"
        ]
      },
      {
        "text": "Getting started",
        "path": "/guide/getting-started",
        "collapsable": false,
        "children": [
          "/guide/getting-started/Start.md",
          "/guide/getting-started/ProjectStructure.md",
          "/guide/getting-started/Client.md"
        ]
      },
      {
        "text": "Commands",
        "path": "/guide/commands",
        "collapsable": false,
        "children": [
          "/guide/commands/Basic.md",
          "/guide/commands/Cooldown.md",
          "/guide/commands/Permissions.md"
        ]
      },
      {
        "text": "Events",
        "path": "/guide/commands",
        "collapsable": false,
        "children": [
          "/guide/events/Basic.md"
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
