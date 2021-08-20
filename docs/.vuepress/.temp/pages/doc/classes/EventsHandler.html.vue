<template><h1 id="eventshandler" tabindex="-1"><a class="header-anchor" href="#eventshandler" aria-hidden="true">#</a> EventsHandler</h1>
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
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></td>
<td>The client</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>directory</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The directory of events</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>loadAll</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noopener noreferrer">Boolean<OutboundLink/></a></td>
<td>If handler load all in constructor</td>
<td>None</td>
<td>No</td>
</tr>
</tbody>
</table>
<h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2>
<h3 id="eventshandler-client" tabindex="-1"><a class="header-anchor" href="#eventshandler-client" aria-hidden="true">#</a> EventsHandler.client</h3>
<p>The client of framework.</p>
<p>Return : <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></p>
<h3 id="eventshandler-directory" tabindex="-1"><a class="header-anchor" href="#eventshandler-directory" aria-hidden="true">#</a> EventsHandler.directory</h3>
<p>The directory of events.</p>
<p>Return : String</p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="eventshandler-loadall" tabindex="-1"><a class="header-anchor" href="#eventshandler-loadall" aria-hidden="true">#</a> EventsHandler#loadAll()</h3>
<p>Regsiter all events in client.events Collection.</p>
<p>Return promise Collection&lt;string, <RouterLink to="/doc/classes/Event.html">Event</RouterLink>&gt;</p>
<h3 id="eventshandler-regieterall" tabindex="-1"><a class="header-anchor" href="#eventshandler-regieterall" aria-hidden="true">#</a> EventsHandler#regieterAll()</h3>
<p>Register loaded events and register them if no events exist.</p>
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
<td>events</td>
<td>Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>, <RouterLink to="/doc/structures/Command.html">Command</RouterLink>)&gt;</td>
<td>The events</td>
<td>client.events</td>
<td>✓</td>
</tr>
</tbody>
</table>
<p>Return Promise&lt;undefined&gt;</p>
</template>
