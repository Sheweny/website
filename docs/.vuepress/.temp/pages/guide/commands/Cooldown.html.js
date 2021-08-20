export const data = {
  "key": "v-610ed4d3",
  "path": "/guide/commands/Cooldown.html",
  "title": "Command cooldown",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Slash-command",
      "slug": "slash-command",
      "children": []
    },
    {
      "level": 2,
      "title": "Message command",
      "slug": "message-command",
      "children": []
    }
  ],
  "filePathRelative": "guide/commands/Cooldown.md",
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
