<template><h1 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project structure</h1>
<p>Create a directory in which the bot will be.</p>
<p>Install dependencies and create configuration file (usually called <code>config.json</code>)</p>
<p>Create a folder with the code of the bot (usualy called <code>src</code>)</p>
<p>In source directory create <code>index.js</code> file in which will be the client's declaration.</p>
<h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2>
<p>Create directory for the commands (usually called <code>commands</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This directory can have the desired number of sub-directory</p>
</div>
<h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2>
<p>Create directory for the events (usually called <code>events</code> or <code>listners</code>).</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This directory can have the desired number of sub-directory</p>
</div>
<h2 id="final-structure" tabindex="-1"><a class="header-anchor" href="#final-structure" aria-hidden="true">#</a> Final structure</h2>
<p>The final structure of the bot :</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>│   config.json
│   package-lock.json
│   package.json
│
└───src
    │   index.js
    │
    ├───commands
    └───events
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
