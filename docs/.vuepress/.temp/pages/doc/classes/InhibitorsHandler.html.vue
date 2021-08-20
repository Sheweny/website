<template><h1 id="inhibitorshandler" tabindex="-1"><a class="header-anchor" href="#inhibitorshandler" aria-hidden="true">#</a> InhibitorsHandler</h1>
<p>Create an handler for bot inhibitors. The inhibitors can be in as many subfolders as desired.</p>
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
<td>directory</td>
<td><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a></td>
<td>The directory of inhibitors</td>
<td>None</td>
<td>Yes</td>
</tr>
<tr>
<td>client</td>
<td><RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></td>
<td>The client</td>
<td>None</td>
<td>No</td>
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
<h3 id="client" tabindex="-1"><a class="header-anchor" href="#client" aria-hidden="true">#</a> client</h3>
<p>The client of framework.</p>
<p>Return : <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClientOptions</RouterLink></p>
<h3 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> directory</h3>
<p>The directory of inhibitors.</p>
<p>Return : String</p>
<h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2>
<h3 id="loadall" tabindex="-1"><a class="header-anchor" href="#loadall" aria-hidden="true">#</a> loadAll()</h3>
<p>Load all inhibitors in directory of inhibitors.</p>
<p>Return : <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank" rel="noopener noreferrer">Promise<OutboundLink/></a>&lt;Collection&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array<OutboundLink/></a>&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;, <RouterLink to="/doc/structures/Inhibitor.html">Inhibitor</RouterLink>&gt;&gt;</p>
</template>
