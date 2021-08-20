<template><h1 id="inhibitor" tabindex="-1"><a class="header-anchor" href="#inhibitor" aria-hidden="true">#</a> Inhibitor</h1>
<p>Represents a inhibitor.</p>
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
<td>The client.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>name</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The name of the inhibitor.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>options</td>
<td><RouterLink to="/doc/typedef/InhibitorOptions.html">InhibitorOptions</RouterLink></td>
<td>The options of the inhibitor</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="unregister" tabindex="-1"><a class="header-anchor" href="#unregister" aria-hidden="true">#</a> unregister()</h3>
<p>Unregister a inhibitor from the bot.</p>
<p>Return true</p>
<h3 id="async-reload" tabindex="-1"><a class="header-anchor" href="#async-reload" aria-hidden="true">#</a> [async] reload()</h3>
<p>Reload a inhibotor.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">Inhibitor</a>&gt; or null</p>
<h3 id="async-register" tabindex="-1"><a class="header-anchor" href="#async-register" aria-hidden="true">#</a> [async] register()</h3>
<p>Register the inhibotor.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">Inhibitor</a>&gt; or null</p>
</template>
