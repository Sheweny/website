import{_ as e,p as n,q as a,a1 as t}from"./framework-69d00ee0.js";const s={},c=t(`<h1 id="project-structure" tabindex="-1"><a class="header-anchor" href="#project-structure" aria-hidden="true">#</a> Project structure</h1><p>Create a directory in which the bot will be.</p><p>Install dependencies and create configuration file (usually called <code>config.json</code>)</p><p>Create a folder with the code of the bot (usualy called <code>src</code>)</p><p>In source directory create <code>index.js</code> file in which will be the client&#39;s declaration.</p><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands" aria-hidden="true">#</a> Commands</h2><p>Create directory for the commands (usually called <code>commands</code>).</p><h2 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h2><p>Create directory for the events (usually called <code>events</code> or <code>listeners</code>).</p><h2 id="interactions" tabindex="-1"><a class="header-anchor" href="#interactions" aria-hidden="true">#</a> Interactions</h2><p>Create directory for the buttons and select-menus (usually called <code>interactions</code>).</p><h3 id="buttons" tabindex="-1"><a class="header-anchor" href="#buttons" aria-hidden="true">#</a> Buttons</h3><p>Create directory for the buttons (usually called <code>buttons</code>).</p><h3 id="select-menus" tabindex="-1"><a class="header-anchor" href="#select-menus" aria-hidden="true">#</a> Select-menus</h3><p>Create directory for the select-menus (usually called <code>select-menus</code>).</p><hr><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Folders can contain as many sub-folders as desired</p></div><h2 id="final-structure" tabindex="-1"><a class="header-anchor" href="#final-structure" aria-hidden="true">#</a> Final structure</h2><p>The final structure of the bot :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bot
   │   config.json
   │   package-lock.json
   │   package.json
   │
   ├───node_modules
   └───src
       │   index.js
       │
       ├───commands
       ├───events
       └───interactions
           ├───buttons
           └───select-menus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),r=[c];function d(i,l){return n(),a("div",null,r)}const u=e(s,[["render",d],["__file","ProjectStructure.html.vue"]]);export{u as default};
