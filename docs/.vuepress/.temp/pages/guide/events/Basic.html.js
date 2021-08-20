export const data = {
  "key": "v-7ed72e56",
  "path": "/guide/events/Basic.html",
  "title": "Basic event",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Import Event",
      "slug": "import-event",
      "children": []
    },
    {
      "level": 2,
      "title": "Create the Event",
      "slug": "create-the-event",
      "children": [
        {
          "level": 3,
          "title": "guildMemberAdd Event",
          "slug": "guildmemberadd-event",
          "children": []
        },
        {
          "level": 3,
          "title": "Message Event",
          "slug": "message-event",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/events/Basic.md",
  "git": {
    "contributors": [
      {
        "name": "Natchi",
        "email": "nathan.caron@natchi.fr",
        "commits": 1
      },
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
