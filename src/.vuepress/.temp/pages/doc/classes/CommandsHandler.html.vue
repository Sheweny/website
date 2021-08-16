<template><h1 id="commands-handler" tabindex="-1"><a class="header-anchor" href="#commands-handler" aria-hidden="true">#</a> Commands Handler</h1>
<p>Create an handler for bot commands. The commands can be in as many subfolders as desired.</p>
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
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></td>
<td>The client</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>options</td>
<td><RouterLink to="/doc/classes/typedef/CommandsHandlerOptions.html">CommandsHandlerOptions</RouterLink></td>
<td>The directory of commands</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="commandshandler-client" tabindex="-1"><a class="header-anchor" href="#commandshandler-client" aria-hidden="true">#</a> CommandsHandler.client</h3>
<p>The client of framework.</p>
<p>Return : <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></p>
<h3 id="commandshandler-slashcommands" tabindex="-1"><a class="header-anchor" href="#commandshandler-slashcommands" aria-hidden="true">#</a> CommandsHandler.slashCommands</h3>
<p>The slash commands manager.
Note this is only available when options.type is SLASH_COMMANDS</p>
<p>Return : <RouterLink to="/doc/classes/SlashHandler.html">SlashHandler</RouterLink></p>
<h3 id="commandshandler-directory" tabindex="-1"><a class="header-anchor" href="#commandshandler-directory" aria-hidden="true">#</a> CommandsHandler.directory</h3>
<p>The directory of commands.</p>
<p>Return : String</p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="commandshandler-loadall" tabindex="-1"><a class="header-anchor" href="#commandshandler-loadall" aria-hidden="true">#</a> CommandsHandler#loadAll()</h3>
<p>Load all commands in directory of commands.
Note : For load slash-commands you need to use SlashHandler.registerCommands() after.</p>
<p>Return promise Collection&lt;string, <RouterLink to="/doc/classes/Command.html">Command</RouterLink>&gt;</p>
</template>
