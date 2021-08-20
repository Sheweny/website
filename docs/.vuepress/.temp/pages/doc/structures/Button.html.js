export const data = {
  "key": "v-4fc73b08",
  "path": "/doc/structures/Button.html",
  "title": "Button",
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
          "title": "unregister()",
          "slug": "unregister",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] reload()",
          "slug": "async-reload",
          "children": []
        },
        {
          "level": 3,
          "title": "[async] register()",
          "slug": "async-register",
          "children": []
        }
      ]
    }
  ],
  "filePathRelative": "doc/structures/Button.md",
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
