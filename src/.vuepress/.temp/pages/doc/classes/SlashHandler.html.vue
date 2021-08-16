<template><h1 id="events-handler" tabindex="-1"><a class="header-anchor" href="#events-handler" aria-hidden="true">#</a> Events Handler</h1>
<p>Create an handler for bot events. The events can be in as many subfolders as desired.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Required</th>
</tr>
</thead>
<tbody>
<tr>
<td>client</td>
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink></td>
<td>The client</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="eventshandler-client" tabindex="-1"><a class="header-anchor" href="#eventshandler-client" aria-hidden="true">#</a> EventsHandler.client</h3>
<p>The client of framework.</p>
<p>Return : <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink></p>
<h3 id="eventshandler-commands" tabindex="-1"><a class="header-anchor" href="#eventshandler-commands" aria-hidden="true">#</a> EventsHandler.commands</h3>
<p>The commands of bot.</p>
<p>Return : String</p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="eventshandler-getdata" tabindex="-1"><a class="header-anchor" href="#eventshandler-getdata" aria-hidden="true">#</a> EventsHandler#getData()</h3>
<p>Create an array with all commands data for register it.</p>
<p>Return promise Collection&lt;string, <RouterLink to="/doc/classes/Event.html">Event</RouterLink>&gt;</p>
<h3 id="async-eventshandler-registercommands-commands-guildid" tabindex="-1"><a class="header-anchor" href="#async-eventshandler-registercommands-commands-guildid" aria-hidden="true">#</a> [async] EventsHandler#registerCommands(commands, guildId)</h3>
<p>Register commands.</p>
<p>Parameters :</p>
<ul>
<li>commands : [Optional] The commands to register (type Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/classes/Command.html">Command</RouterLink>)&gt;. Default : All commands loaded in loader.</li>
<li>guildId : [Optional] The guild id to register commands.</li>
</ul>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-eventshandler-createcommand-command-guildid" tabindex="-1"><a class="header-anchor" href="#async-eventshandler-createcommand-command-guildid" aria-hidden="true">#</a> [async] EventsHandler#createCommand(command, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<ul>
<li>command : The commands to register (type <RouterLink to="/doc/classes/Command.html">Command</RouterLink>).</li>
<li>guildId : [Optional] The guild id to register command.</li>
</ul>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-eventshandler-editcommand-oldcommand-newcommand-guildid" tabindex="-1"><a class="header-anchor" href="#async-eventshandler-editcommand-oldcommand-newcommand-guildid" aria-hidden="true">#</a> [async] EventsHandler#editCommand(oldCommand, newCommand, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<ul>
<li>oldCommand : The old command (type <a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable" target="_blank" rel="noopener noreferrer">ApplicationCommandResolvable<OutboundLink/></a>).</li>
<li>newCommand : The new command (type <RouterLink to="/doc/classes/Command.html">Command</RouterLink>).</li>
<li>guildId : [Optional] The guild id to register command.</li>
</ul>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-eventshandler-deletecommand-command-guildid" tabindex="-1"><a class="header-anchor" href="#async-eventshandler-deletecommand-command-guildid" aria-hidden="true">#</a> [async] EventsHandler#deleteCommand(command, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<ul>
<li>command : The old command (type <a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable" target="_blank" rel="noopener noreferrer">ApplicationCommandResolvable<OutboundLink/></a>).</li>
<li>guildId : [Optional] The guild id to register command.</li>
</ul>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-eventshandler-deleteallcommands-guildid" tabindex="-1"><a class="header-anchor" href="#async-eventshandler-deleteallcommands-guildid" aria-hidden="true">#</a> [async] EventsHandler#deleteAllCommands( guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<ul>
<li>guildId : [Optional] The guild id to delete commands.</li>
</ul>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
</template>
