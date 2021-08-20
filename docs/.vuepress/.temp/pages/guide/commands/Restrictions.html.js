export const data = {
  "key": "v-03278117",
  "path": "/guide/commands/Restrictions.html",
  "title": "Command cooldown",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Guild only with slash-commands",
      "slug": "guild-only-with-slash-commands",
      "children": []
    },
    {
      "level": 2,
      "title": "DMs only with message-commands",
      "slug": "dms-only-with-message-commands",
      "children": []
    }
  ],
  "filePathRelative": "guide/commands/Restrictions.md",
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
