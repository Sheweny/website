<template><h1 id="selectmenu" tabindex="-1"><a class="header-anchor" href="#selectmenu" aria-hidden="true">#</a> SelectMenu</h1>
<p>Represents a button.</p>
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
<td><RouterLink to="/doc/structures/ShewenyClient.html">ShewenyClient</RouterLink></td>
<td>The client.</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>customId</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;</td>
<td>The list of select-menus ids</td>
<td>None</td>
<td>Yes</td>
</tr>
</tbody>
</table>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="unregister" tabindex="-1"><a class="header-anchor" href="#unregister" aria-hidden="true">#</a> unregister()</h3>
<p>Unregister a select-menus group from the bot.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean" target="_blank" rel="noopener noreferrer">Boolean<OutboundLink/></a></p>
<h3 id="async-reload" tabindex="-1"><a class="header-anchor" href="#async-reload" aria-hidden="true">#</a> [async] reload()</h3>
<p>Reload a select-menus group.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">SelectMenu</a>&gt; or null</p>
<h3 id="async-register" tabindex="-1"><a class="header-anchor" href="#async-register" aria-hidden="true">#</a> [async] register()</h3>
<p>Register the select-menu.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;<a href=".">SelectMenu</a>&gt; or null</p>
</template>
