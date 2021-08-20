<template><h1 id="applicationcommandoptions" tabindex="-1"><a class="header-anchor" href="#applicationcommandoptions" aria-hidden="true">#</a> ApplicationCommandOptions</h1>
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
<td>The name of the category</td>
<td>None</td>
<td>No</td>
</tr>
<tr>
<td>category</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The name of the category</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>only</td>
<td><RouterLink to="/doc/typedef/CommandOptionOnly.html">CommandOptionOnly</RouterLink></td>
<td>Whre the command can be executed</td>
<td>None</td>
<td>No</td>
</tr>
<tr>
<td>cooldown</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number" target="_blank" rel="noopener noreferrer">Number<OutboundLink/></a></td>
<td>The cooldown time in seconde</td>
<td>0</td>
<td>No</td>
</tr>
<tr>
<td>userPermissions</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The user permissions required</td>
<td>[]</td>
<td>No</td>
</tr>
<tr>
<td>botPermissions</td>
<td><a href="https://discord.js.org/#/docs/main/stable/typedef/ApplicationCommandOptionChoice" target="_blank" rel="noopener noreferrer">ApplicationCommandOptionChoice<OutboundLink/></a></td>
<td>The bot permissions required</td>
<td>[]</td>
<td>No</td>
</tr>
</tbody>
</table>
</template>
