<template><h1 id="applicationcommandshandler" tabindex="-1"><a class="header-anchor" href="#applicationcommandshandler" aria-hidden="true">#</a> ApplicationCommandsHandler</h1>
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
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink> or <a href="https://discord.js.org/#/docs/main/stable/class/Client" target="_blank" rel="noopener noreferrer">Client<OutboundLink/></a></td>
<td>The client</td>
<td>None</td>
<td>✓</td>
</tr>
<tr>
<td>directory</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The directory of commands</td>
<td>None</td>
<td>✓</td>
</tr>
<tr>
<td>loadAll</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noopener noreferrer">Boolean<OutboundLink/></a></td>
<td>If the loadAll function must be called in constructor</td>
<td>None</td>
<td>no</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="async-loadall" tabindex="-1"><a class="header-anchor" href="#async-loadall" aria-hidden="true">#</a> [async] loadAll()</h3>
<p>Load commands.</p>
<p>Return : Promise&lt;Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/structures/ApplicationApplicationCommand.html">ApplicationCommand</RouterLink>&gt;&gt;;</p>
<h3 id="getdata" tabindex="-1"><a class="header-anchor" href="#getdata" aria-hidden="true">#</a> getData()</h3>
<p>Create an array with all commands data for register it.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandData" target="_blank" rel="noopener noreferrer">ApplicationCommandData<OutboundLink/></a>&gt;</p>
<h3 id="async-registercommands-commands-guildid" tabindex="-1"><a class="header-anchor" href="#async-registercommands-commands-guildid" aria-hidden="true">#</a> [async] registerCommands(commands, guildId)</h3>
<p>Register commands.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>commands</td>
<td>Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/structures/ApplicationCommand.html">Command</RouterLink>)&gt;</td>
<td>The commands</td>
<td>client.commands</td>
<td>✓</td>
</tr>
<tr>
<td>guildId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The guild to register commands</td>
<td></td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-createcommand-command-guildid" tabindex="-1"><a class="header-anchor" href="#async-createcommand-command-guildid" aria-hidden="true">#</a> [async] createCommand(command, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>command</td>
<td><RouterLink to="/doc/structures/ApplicationCommand.html">Command</RouterLink></td>
<td>The command</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>guildId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The guild to register command</td>
<td></td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-editcommand-oldcommand-newcommand-guildid" tabindex="-1"><a class="header-anchor" href="#async-editcommand-oldcommand-newcommand-guildid" aria-hidden="true">#</a> [async] editCommand(oldCommand, newCommand, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>command</td>
<td><a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable" target="_blank" rel="noopener noreferrer">ApplicationCommandResolvable<OutboundLink/></a></td>
<td>The command to edit</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>newCommand</td>
<td><RouterLink to="/doc/structures/ApplicationCommand.html">Command</RouterLink></td>
<td>The new command</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>guildId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The guild to update command</td>
<td></td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-deletecommand-command-guildid" tabindex="-1"><a class="header-anchor" href="#async-deletecommand-command-guildid" aria-hidden="true">#</a> [async] deleteCommand(command, guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>command</td>
<td><a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandResolvable" target="_blank" rel="noopener noreferrer">ApplicationCommandResolvable<OutboundLink/></a></td>
<td>The command to delete</td>
<td></td>
<td>no</td>
</tr>
<tr>
<td>guildId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The guild to delete command</td>
<td></td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
<h3 id="async-deleteallcommands-guildid" tabindex="-1"><a class="header-anchor" href="#async-deleteallcommands-guildid" aria-hidden="true">#</a> [async] deleteAllCommands( guildId)</h3>
<p>Create single commands.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
<th>Default</th>
<th>Optional</th>
</tr>
</thead>
<tbody>
<tr>
<td>guildId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The guild to delete command</td>
<td></td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;Collection&lt;Snowflake, ApplicationCommand&gt;&gt;;</p>
</template>
