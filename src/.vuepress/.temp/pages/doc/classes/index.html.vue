<template><h1 id="sheweny-client" tabindex="-1"><a class="header-anchor" href="#sheweny-client" aria-hidden="true">#</a> Sheweny client</h1>
<p>The Sheweny framework client.</p>
<p>Parameters :</p>
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
<td>options</td>
<td><RouterLink to="/doc/classes/typedef/ShewenyClientOptions.html">ShewenyClientOptions</RouterLink></td>
<td>The options for the client</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="shewenyclient-handlers" tabindex="-1"><a class="header-anchor" href="#shewenyclient-handlers" aria-hidden="true">#</a> ShewenyClient.handlers</h3>
<p>The handlers of the client.</p>
<p>Return : <RouterLink to="/doc/classes/typedef/ClientHandlers.html">ClientHandlers</RouterLink>.</p>
<h3 id="shewenyclient-commands" tabindex="-1"><a class="header-anchor" href="#shewenyclient-commands" aria-hidden="true">#</a> ShewenyClient.commands</h3>
<p>A collection of commands or undefined if no command handler provided</p>
<p>Return : Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/classes/Command.html">Command</RouterLink>&gt;.</p>
<h3 id="shewenyclient-commandstype" tabindex="-1"><a class="header-anchor" href="#shewenyclient-commandstype" aria-hidden="true">#</a> ShewenyClient.commandsType</h3>
<p>The type of the commands (MESSAGE_COMMANDS or SLASH_COMMANDS)</p>
<p>Return : <RouterLink to="/doc/classes/typedef/CommandTypeResolvable.html">CommandTypeResolvable</RouterLink> .</p>
<h3 id="shewenyclient-events" tabindex="-1"><a class="header-anchor" href="#shewenyclient-events" aria-hidden="true">#</a> ShewenyClient.events</h3>
<p>A collection of commands or undefined if no command handler provided</p>
<p>Return : Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/classes/Event.html">Event</RouterLink>&gt;.</p>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>
<h2 id="events-permissions" tabindex="-1"><a class="header-anchor" href="#events-permissions" aria-hidden="true">#</a> Events permissions</h2>
<h3 id="shewenyclient-usermissingpermissions" tabindex="-1"><a class="header-anchor" href="#shewenyclient-usermissingpermissions" aria-hidden="true">#</a> ShewenyClient#userMissingPermissions</h3>
<p>Emitted when an user missing permission for a command.</p>
<p>Parameters :</p>
<ul>
<li>interaction or message (if bot use slash-commands or not) (type : <a href="https://discord.js.org/#/docs/main/stable/class/Interaction" target="_blank" rel="noopener noreferrer">Interaction<OutboundLink/></a> or <a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a>)</li>
<li>missing (type : [Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;)</li>
</ul>
<h3 id="shewenyclient-botmissingpermissions" tabindex="-1"><a class="header-anchor" href="#shewenyclient-botmissingpermissions" aria-hidden="true">#</a> ShewenyClient#botMissingPermissions</h3>
<p>Emitted when bot missing permission for a command.</p>
<p>Parameters :</p>
<ul>
<li>interaction or message (if bot use slash-commands or not) (type : <a href="https://discord.js.org/#/docs/main/stable/class/Interaction" target="_blank" rel="noopener noreferrer">Interaction<OutboundLink/></a> or <a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a>)</li>
<li>missing (type : [Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;)</li>
</ul>
<h2 id="events-cooldowns" tabindex="-1"><a class="header-anchor" href="#events-cooldowns" aria-hidden="true">#</a> Events cooldowns</h2>
<h3 id="shewenyclient-cooldownlimite" tabindex="-1"><a class="header-anchor" href="#shewenyclient-cooldownlimite" aria-hidden="true">#</a> ShewenyClient#cooldownLimite</h3>
<p>Emitted when command cooldown limit is reached.</p>
<p>Parameters :</p>
<ul>
<li>interaction or message (if bot use slash-commands or not) (type : <a href="https://discord.js.org/#/docs/main/stable/class/Interaction" target="_blank" rel="noopener noreferrer">Interaction<OutboundLink/></a> or <a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a>)</li>
</ul>
<h2 id="events-interactions" tabindex="-1"><a class="header-anchor" href="#events-interactions" aria-hidden="true">#</a> Events interactions</h2>
<h3 id="shewenyclient-interactionbuttoncreate" tabindex="-1"><a class="header-anchor" href="#shewenyclient-interactionbuttoncreate" aria-hidden="true">#</a> ShewenyClient#interactionButtonCreate</h3>
<p>Emitted when an interaction button is created.</p>
<p>Parameters :</p>
<ul>
<li>interaction (type : <a href="https://discord.js.org/#/docs/main/stable/class/ButtonInteraction" target="_blank" rel="noopener noreferrer">ButtonInteraction<OutboundLink/></a>)</li>
</ul>
<h3 id="shewenyclient-interactioncommmandcreate" tabindex="-1"><a class="header-anchor" href="#shewenyclient-interactioncommmandcreate" aria-hidden="true">#</a> ShewenyClient#interactionCommmandCreate</h3>
<p>Emitted when an slash-command is created.</p>
<p>Parameters :</p>
<ul>
<li>interaction (type : <a href="https://discord.js.org/#/docs/main/stable/class/CommandInteraction" target="_blank" rel="noopener noreferrer">CommandInteraction<OutboundLink/></a>)</li>
</ul>
<h3 id="shewenyclient-interactioncontextmenucreate" tabindex="-1"><a class="header-anchor" href="#shewenyclient-interactioncontextmenucreate" aria-hidden="true">#</a> ShewenyClient#interactionContextMenuCreate</h3>
<p>Emitted when an interaction context menu is created.</p>
<p>Parameters :</p>
<ul>
<li>interaction (type : <a href="https://discord.js.org/#/docs/main/stable/class/ContextMenuInteraction" target="_blank" rel="noopener noreferrer">ContextMenuInteraction<OutboundLink/></a>)</li>
</ul>
<h3 id="shewenyclient-interactionselectmenuitemcreate" tabindex="-1"><a class="header-anchor" href="#shewenyclient-interactionselectmenuitemcreate" aria-hidden="true">#</a> ShewenyClient#interactionSelectMenuItemCreate</h3>
<p>Emitted when an select menu interaction is created.</p>
<p>Parameters :</p>
<ul>
<li>interaction (type : <a href="https://discord.js.org/#/docs/main/stable/class/SelectMenuInteraction" target="_blank" rel="noopener noreferrer">SelectMenuInteraction<OutboundLink/></a>)</li>
</ul>
<h3 id="shewenyclient-interactionmessagecomponentcreate" tabindex="-1"><a class="header-anchor" href="#shewenyclient-interactionmessagecomponentcreate" aria-hidden="true">#</a> ShewenyClient#interactionMessageComponentCreate</h3>
<p>Emitted when an message component interaction is created.</p>
<p>Parameters :</p>
<ul>
<li>interaction (type : <a href="https://discord.js.org/#/docs/main/stable/class/MessageComponentInteraction" target="_blank" rel="noopener noreferrer">MessageComponentInteraction<OutboundLink/></a>)</li>
</ul>
</template>
