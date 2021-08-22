const { description } = require("../../package");

module.exports = {
  title: "Sheweny",

  description: description,
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    base: "/website",
    editLinks: false,
    editLinkText: "",
    lastUpdated: false,
    docsDir: "doc",
    displayAllHeaders: true,
    sidebarDepth: 1,
    navbar: [
      {
        text: "Ducumentation",
        link: "/doc/",
      },
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Github",
        link: "https://github.com/Discord-util/website",
      },
    ],
    sidebar: {
      "/doc/": [
        {
          text: "Home",
          path: "/doc/", // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          children: ["/doc/README.md"],
        },
        {
          text: "Classes",
          path: "/doc/classes",
          collapsable: false,
          children: [
            "/doc/classes/ApplicationCommandsHandler.md",
            "/doc/classes/ButtonsHandler.md",
            "/doc/classes/EventsHandler.md",
            "/doc/classes/InhibitorsHandler.md",
            "/doc/classes/MessageCommandsHandler.md",
            "/doc/classes/SelectMenusHandler.md",
            "/doc/classes/ShewenyClient.md",
          ],
        },
        {
          text: "Structures",
          path: "/doc/structures",
          collapsable: false,
          children: [
            "/doc/structures/ApplicationCommand.md",
            "/doc/structures/Button.md",
            "/doc/structures/Event.md",
            "/doc/structures/Inhibitor.md",
            "/doc/structures/MessageCommand.md",
            "/doc/structures/SelectMenu.md",
          ],
        },
        {
          text: "Typedef",
          path: "/doc/typedef",
          collapsable: false,
          children: [
            "/doc/typedef/BaseHandlerOptions.md",
            "/doc/typedef/ClientCommandsManager.md",
            "/doc/typedef/ClientHandlers.md",
            "/doc/typedef/ClientHandlersOptions.md",
            "/doc/typedef/CommandOptionsOnly.md",
            "/doc/typedef/CommandOptions.md",
            "/doc/typedef/EventOptions.md",
            "/doc/typedef/HandlerApplicationCommandOptions.md",
            "/doc/typedef/InhibitorOptions.md",
            "/doc/typedef/InhibitorTypeResolvable.md",
            "/doc/typedef/MessageCommandHandlerOptions.md",
            "/doc/typedef/ShewenyClientOptions.md",
          ],
        },
      ],
      "/guide/": [
        {
          text: "Guide",
          collapsable: false, // optional, defaults to true
          path: "/guide",
          children: ["/guide/README.md"],
        },
        {
          text: "Getting started",
          path: "/guide/getting-started",
          collapsable: false,
          children: [
            "/guide/getting-started/Start.md",
            "/guide/getting-started/ProjectStructure.md",
            "/guide/getting-started/Client.md",
          ],
        },
        {
          text: "Handlers",
          path: "/guide/handlers",
          collapsable: false,
          children: [
            "/guide/handlers/applicationCommands.md",
            "/guide/handlers/buttons.md",
            "/guide/handlers/events.md",
            "/guide/handlers/inhibitors.md",
            "/guide/handlers/messageCommands.md",
            "/guide/handlers/selectMenus.md",
          ],
        },
        {
          text: "Commands",
          path: "/guide/commands",
          collapsable: false,
          children: [
            "/guide/commands/Basic.md",
            "/guide/commands/Before.md",
            "/guide/commands/Cooldown.md",
            "/guide/commands/Permissions.md",
            "/guide/commands/Restrictions.md",
          ],
        },
        {
          text: "Events",
          path: "/guide/events",
          collapsable: false,
          children: ["/guide/events/Basic.md", "/guide/events/Once.md"],
        },
        {
          text: "Buttons",
          path: "/guide/buttons",
          collapsable: false,
          children: ["/guide/buttons/Basic.md", "/guide/buttons/Before.md"],
        },
        {
          text: "SelectMenus",
          path: "/guide/select-menus",
          collapsable: false,
          children: [
            "/guide/select-menus/Basic.md",
            "/guide/select-menus/Before.md",
          ],
        },
        {
          text: "Inhibitors",
          path: "/guide/inhibitors",
          collapsable: false,
          children: [
            "/guide/inhibitors/Inhibitor.md",
            "/guide/inhibitors/InhibitorType.md",
            "/guide/inhibitors/InhibitorPriority.md",
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
