export const data = {
  "key": "v-f62701f4",
  "path": "/guide/commands/Basic.html",
  "title": "Basic command",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Import Command",
      "slug": "import-command",
      "children": []
    },
    {
      "level": 2,
      "title": "Create the command",
      "slug": "create-the-command",
      "children": [
        {
          "level": 3,
          "title": "Slash-command",
          "slug": "slash-command",
          "children": []
        },
        {
          "level": 3,
          "title": "Message command",
          "slug": "message-command",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "guide/commands/Basic.md",
  "git": {
    "contributors": []
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
