import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home page",["/index.html","/README.md"]],
  ["v-7445f070","/doc/","Documentation",["/doc/index.html","/doc/README.md"]],
  ["v-fffb8e28","/guide/","Installing Node.js and sheweny",["/guide/index.html","/guide/README.md"]],
  ["v-1c5acc47","/doc/classes/Command.html","Command",["/doc/classes/Command","/doc/classes/Command.md"]],
  ["v-4daf3560","/doc/classes/CommandsHandler.html","Commands Handler",["/doc/classes/CommandsHandler","/doc/classes/CommandsHandler.md"]],
  ["v-6f021498","/doc/classes/Event.html","Event",["/doc/classes/Event","/doc/classes/Event.md"]],
  ["v-84a266be","/doc/classes/EventsHandler.html","Events Handler",["/doc/classes/EventsHandler","/doc/classes/EventsHandler.md"]],
  ["v-63d85b7e","/doc/classes/ShewenyClient.html","Sheweny client",["/doc/classes/ShewenyClient","/doc/classes/ShewenyClient.md"]],
  ["v-270cf5b3","/doc/classes/SlashHandler.html","Events Handler",["/doc/classes/SlashHandler","/doc/classes/SlashHandler.md"]],
  ["v-1d6871f1","/doc/typedef/ClientHandlers.html","Command Args",["/doc/typedef/ClientHandlers","/doc/typedef/ClientHandlers.md"]],
  ["v-05e6169a","/doc/typedef/CommandArg.html","Command Args",["/doc/typedef/CommandArg","/doc/typedef/CommandArg.md"]],
  ["v-579a73d2","/doc/typedef/CommandOptions.html","CommandOptions",["/doc/typedef/CommandOptions","/doc/typedef/CommandOptions.md"]],
  ["v-2488ccae","/doc/typedef/CommandsHandlerOptions.html","HandlersOptions",["/doc/typedef/CommandsHandlerOptions","/doc/typedef/CommandsHandlerOptions.md"]],
  ["v-595734f5","/doc/typedef/CommandTypeResolvable.html","CommandsTypeResolvable",["/doc/typedef/CommandTypeResolvable","/doc/typedef/CommandTypeResolvable.md"]],
  ["v-8090d8be","/doc/typedef/EventOptions.html","EventOptions",["/doc/typedef/EventOptions","/doc/typedef/EventOptions.md"]],
  ["v-159f7a78","/doc/typedef/EventsHandlerOptions.html","HandlersOptions",["/doc/typedef/EventsHandlerOptions","/doc/typedef/EventsHandlerOptions.md"]],
  ["v-7782e0d0","/doc/typedef/HandlersOptions.html","HandlersOptions",["/doc/typedef/HandlersOptions","/doc/typedef/HandlersOptions.md"]],
  ["v-739de8fb","/doc/typedef/ShewenyClientOptions.html","Sheweny client",["/doc/typedef/ShewenyClientOptions","/doc/typedef/ShewenyClientOptions.md"]],
  ["v-13d1268c","/doc/typedef/SubCommand.html","Sub-Command",["/doc/typedef/SubCommand","/doc/typedef/SubCommand.md"]],
  ["v-f62701f4","/guide/commands/Basic.html","Basic command",["/guide/commands/Basic","/guide/commands/Basic.md"]],
  ["v-610ed4d3","/guide/commands/Cooldown.html","Command cooldown",["/guide/commands/Cooldown","/guide/commands/Cooldown.md"]],
  ["v-c25177a0","/guide/commands/Permissions.html","Command permissions",["/guide/commands/Permissions","/guide/commands/Permissions.md"]],
  ["v-7ed72e56","/guide/events/Basic.html","Basic event",["/guide/events/Basic","/guide/events/Basic.md"]],
  ["v-66d2becb","/guide/getting-started/Client.html","Create the client",["/guide/getting-started/Client","/guide/getting-started/Client.md"]],
  ["v-0c51555c","/guide/getting-started/ProjectStructure.html","Project structure",["/guide/getting-started/ProjectStructure","/guide/getting-started/ProjectStructure.md"]],
  ["v-0e9bcf3a","/guide/getting-started/Start.html","Start with Sheweny",["/guide/getting-started/Start","/guide/getting-started/Start.md"]],
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
