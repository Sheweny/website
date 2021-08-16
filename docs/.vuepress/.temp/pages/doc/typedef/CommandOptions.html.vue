<template><h1 id="commandoptions" tabindex="-1"><a class="header-anchor" href="#commandoptions" aria-hidden="true">#</a> CommandOptions</h1>
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
<td>description</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>Desription of the command</td>
<td></td>
<td>Yes</td>
</tr>
<tr>
<td>type</td>
<td><a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandType" target="_blank" rel="noopener noreferrer">ApplicationCommandType<OutboundLink/></a></td>
<td>The type of the command</td>
<td>none</td>
<td>Yes</td>
</tr>
<tr>
<td>aliases</td>
<td>Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>Aliases of the command</td>
<td>[]</td>
<td>No</td>
</tr>
<tr>
<td>options</td>
<td>Array&lt;<RouterLink to="/doc/typedef/CommandArgs.html">CommandArgs</RouterLink>&gt;</td>
<td>Options of the command</td>
<td>null</td>
<td>No</td>
</tr>
<tr>
<td>category</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>Category of the command</td>
<td>Bot</td>
<td>No</td>
</tr>
<tr>
<td>cooldown</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer">Number<OutboundLink/></a></td>
<td>Cooldown of the command</td>
<td>0</td>
<td>No</td>
</tr>
<tr>
<td>userPermissions</td>
<td>Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The member permissions required to execute command</td>
<td>[]</td>
<td>No</td>
</tr>
<tr>
<td>botPermissions</td>
<td>Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The bot permissions required to execute command</td>
<td>[]</td>
<td>No</td>
</tr>
<tr>
<td>subCommands</td>
<td>Array&lt;<RouterLink to="/doc/typedef/SubCommand.html">SubCommand</RouterLink>&gt;</td>
<td>The sub commands of the command</td>
<td>[]</td>
<td>No</td>
</tr>
<tr>
<td>defaultPermissions</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noopener noreferrer">Boolean<OutboundLink/></a></td>
<td>Whether the command is enabled by default when the app is added to a guild</td>
<td>[]</td>
<td>No</td>
</tr>
</tbody>
</table>
</template>
