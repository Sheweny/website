export const data = {
  "key": "v-66d2becb",
  "path": "/guide/getting-started/Client.html",
  "title": "Create the client",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Import ShewenyClient",
      "slug": "import-shewenyclient",
      "children": [
        {
          "level": 3,
          "title": "Using CommonJS syntax",
          "slug": "using-commonjs-syntax",
          "children": []
        },
        {
          "level": 3,
          "title": "Using ES modules syntax",
          "slug": "using-es-modules-syntax",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Create new instance of client",
      "slug": "create-new-instance-of-client",
      "children": []
    }
  ],
  "filePathRelative": "guide/getting-started/Client.md",
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
