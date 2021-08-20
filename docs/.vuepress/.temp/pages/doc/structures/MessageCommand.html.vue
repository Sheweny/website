<template><h1 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h1>
<p>Represents a message command.</p>
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
<td>The name of the command.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>options</td>
<td><RouterLink to="/doc/typedef/CommandOptions.html">ApplicationCommandOptions</RouterLink></td>
<td>The options of the command</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="before" tabindex="-1"><a class="header-anchor" href="#before" aria-hidden="true">#</a> before()</h3>
<p>Executed before commands checks.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td><a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a></td>
<td>The message</td>
</tr>
<tr>
<td>args</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The arguments of command</td>
</tr>
</tbody>
</table>
<p>Return true</p>
<h3 id="abstract-execute" tabindex="-1"><a class="header-anchor" href="#abstract-execute" aria-hidden="true">#</a> [abstract] execute()</h3>
<p>The execution of command.</p>
<p>Parameters :</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td><a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a></td>
<td>The message</td>
</tr>
<tr>
<td>args</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The arguments of command</td>
</tr>
</tbody>
</table>
<p>Return : Promise&lt;any&gt; | any</p>
<h3 id="unregister" tabindex="-1"><a class="header-anchor" href="#unregister" aria-hidden="true">#</a> unregister()</h3>
<p>Unregister a command from the bot.</p>
<p>Return true</p>
<h3 id="async-reload" tabindex="-1"><a class="header-anchor" href="#async-reload" aria-hidden="true">#</a> [async] reload()</h3>
<p>Reload a command of bot.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">Command</a>&gt; or null</p>
<h3 id="async-register" tabindex="-1"><a class="header-anchor" href="#async-register" aria-hidden="true">#</a> [async] register()</h3>
<p>Register the command.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">Command</a>&gt; or null</p>
</template>
