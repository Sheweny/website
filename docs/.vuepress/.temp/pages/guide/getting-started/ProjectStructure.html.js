export const data = {
  "key": "v-0c51555c",
  "path": "/guide/getting-started/ProjectStructure.html",
  "title": "Project structure",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Commands",
      "slug": "commands",
      "children": []
    },
    {
      "level": 2,
      "title": "Events",
      "slug": "events",
      "children": []
    },
    {
      "level": 2,
      "title": "Final structure",
      "slug": "final-structure",
      "children": []
    }
  ],
  "filePathRelative": "guide/getting-started/ProjectStructure.md",
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
