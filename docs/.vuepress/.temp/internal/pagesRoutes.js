import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home page",["/index.html","/README.md"]],
  ["v-7445f070","/doc/","Documentation",["/doc/index.html","/doc/README.md"]],
  ["v-fffb8e28","/guide/","Installing Node.js and sheweny",["/guide/index.html","/guide/README.md"]],
  ["v-be7d2124","/doc/classes/ApplicationCommandsHandler.html","ApplicationCommandsHandler",["/doc/classes/ApplicationCommandsHandler","/doc/classes/ApplicationCommandsHandler.md"]],
  ["v-37285012","/doc/classes/ButtonsHandler.html","ButtonsHandler",["/doc/classes/ButtonsHandler","/doc/classes/ButtonsHandler.md"]],
  ["v-84a266be","/doc/classes/EventsHandler.html","EventsHandler",["/doc/classes/EventsHandler","/doc/classes/EventsHandler.md"]],
  ["v-9cea8b9e","/doc/classes/InhibitorsHandler.html","InhibitorsHandler",["/doc/classes/InhibitorsHandler","/doc/classes/InhibitorsHandler.md"]],
  ["v-33e3c425","/doc/classes/MessageCommandsHandler.html","CommandsHandler",["/doc/classes/MessageCommandsHandler","/doc/classes/MessageCommandsHandler.md"]],
  ["v-029fe1ce","/doc/classes/SelectMenusHandler.html","SelectMenuHandler",["/doc/classes/SelectMenusHandler","/doc/classes/SelectMenusHandler.md"]],
  ["v-63d85b7e","/doc/classes/ShewenyClient.html","ShewenyClient",["/doc/classes/ShewenyClient","/doc/classes/ShewenyClient.md"]],
  ["v-6beb3b02","/doc/structures/ApplicationCommand.html","Command",["/doc/structures/ApplicationCommand","/doc/structures/ApplicationCommand.md"]],
  ["v-4fc73b08","/doc/structures/Button.html","Button",["/doc/structures/Button","/doc/structures/Button.md"]],
  ["v-3dffa43e","/doc/structures/Event.html","Event",["/doc/structures/Event","/doc/structures/Event.md"]],
  ["v-4ceddece","/doc/structures/Inhibitor.html","Inhibitor",["/doc/structures/Inhibitor","/doc/structures/Inhibitor.md"]],
  ["v-53690994","/doc/structures/MessageCommand.html","Command",["/doc/structures/MessageCommand","/doc/structures/MessageCommand.md"]],
  ["v-e1f42242","/doc/structures/SelectMenu.html","SelectMenu",["/doc/structures/SelectMenu","/doc/structures/SelectMenu.md"]],
  ["v-61476ef3","/doc/typedef/ClientCommandsManager.html","Command Args",["/doc/typedef/ClientCommandsManager","/doc/typedef/ClientCommandsManager.md"]],
  ["v-1d6871f1","/doc/typedef/ClientHandlers.html","Client handlers",["/doc/typedef/ClientHandlers","/doc/typedef/ClientHandlers.md"]],
  ["v-8a3935fa","/doc/typedef/ClientHandlersOptions.html","HandlersOptions",["/doc/typedef/ClientHandlersOptions","/doc/typedef/ClientHandlersOptions.md"]],
  ["v-579a73d2","/doc/typedef/CommandOptions.html","ApplicationCommandOptions",["/doc/typedef/CommandOptions","/doc/typedef/CommandOptions.md"]],
  ["v-50e13b06","/doc/typedef/CommandOptionsOnly.html","CommandOptionsOnly",["/doc/typedef/CommandOptionsOnly","/doc/typedef/CommandOptionsOnly.md"]],
  ["v-8090d8be","/doc/typedef/EventOptions.html","EventOptions",["/doc/typedef/EventOptions","/doc/typedef/EventOptions.md"]],
  ["v-159f7a78","/doc/typedef/EventsHandlerOptions.html","HandlersOptions",["/doc/typedef/EventsHandlerOptions","/doc/typedef/EventsHandlerOptions.md"]],
  ["v-156e355e","/doc/typedef/HandlerOptions.html","HandlersOptions",["/doc/typedef/HandlerOptions","/doc/typedef/HandlerOptions.md"]],
  ["v-460b9991","/doc/typedef/InhibitorOptions.html","EventOptions",["/doc/typedef/InhibitorOptions","/doc/typedef/InhibitorOptions.md"]],
  ["v-f37a2b54","/doc/typedef/InhibitorTypeResolvable.html","CommandsTypeResolvable",["/doc/typedef/InhibitorTypeResolvable","/doc/typedef/InhibitorTypeResolvable.md"]],
  ["v-58d5006d","/doc/typedef/MessageCommandHandlerOptions.html","HandlersOptions",["/doc/typedef/MessageCommandHandlerOptions","/doc/typedef/MessageCommandHandlerOptions.md"]],
  ["v-739de8fb","/doc/typedef/ShewenyClientOptions.html","Sheweny client",["/doc/typedef/ShewenyClientOptions","/doc/typedef/ShewenyClientOptions.md"]],
  ["v-7ed72e56","/guide/events/Basic.html","Basic event",["/guide/events/Basic","/guide/events/Basic.md"]],
  ["v-66d2becb","/guide/getting-started/Client.html","Create the client",["/guide/getting-started/Client","/guide/getting-started/Client.md"]],
  ["v-0c51555c","/guide/getting-started/ProjectStructure.html","Project structure",["/guide/getting-started/ProjectStructure","/guide/getting-started/ProjectStructure.md"]],
  ["v-0e9bcf3a","/guide/getting-started/Start.html","Start with Sheweny",["/guide/getting-started/Start","/guide/getting-started/Start.md"]],
  ["v-f62701f4","/guide/commands/Basic.html","Basic command",["/guide/commands/Basic","/guide/commands/Basic.md"]],
  ["v-610ed4d3","/guide/commands/Cooldown.html","Command cooldown",["/guide/commands/Cooldown","/guide/commands/Cooldown.md"]],
  ["v-c25177a0","/guide/commands/Permissions.html","Command permissions",["/guide/commands/Permissions","/guide/commands/Permissions.md"]],
  ["v-03278117","/guide/commands/Restrictions.html","Command cooldown",["/guide/commands/Restrictions","/guide/commands/Restrictions.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
