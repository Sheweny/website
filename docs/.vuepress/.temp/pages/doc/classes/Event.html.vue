<template><h1 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h1>
<p>Represents a event.</p>
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
<td>Client</td>
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink></td>
<td>The client.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>name</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The name of the event.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>options</td>
<td><RouterLink to="/doc/classes/typedef/EventOptions.html">EventOptions</RouterLink></td>
<td>The options of the event</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="event-unregister" tabindex="-1"><a class="header-anchor" href="#event-unregister" aria-hidden="true">#</a> Event#unregister()</h3>
<p>Unregister a event from the bot.</p>
<p>Return true</p>
<h3 id="async-event-reload" tabindex="-1"><a class="header-anchor" href="#async-event-reload" aria-hidden="true">#</a> [async] Event#reload()</h3>
<p>Reload a event of bot.</p>
<p>Return Promise&lt;<a href=".">Event</a>&gt;|null</p>
<h3 id="async-event-register" tabindex="-1"><a class="header-anchor" href="#async-event-register" aria-hidden="true">#</a> [async] Event#register()</h3>
<p>Register the event.</p>
<p>Return Promise&lt;<a href=".">Event</a>&gt;|null</p>
</template>
