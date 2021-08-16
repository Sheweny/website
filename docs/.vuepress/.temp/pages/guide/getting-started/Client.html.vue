<template><h1 id="create-the-client" tabindex="-1"><a class="header-anchor" href="#create-the-client" aria-hidden="true">#</a> Create the client</h1>
<h2 id="import-shewenyclient" tabindex="-1"><a class="header-anchor" href="#import-shewenyclient" aria-hidden="true">#</a> Import ShewenyClient</h2>
<p>Import the class <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink> from library.</p>
<h3 id="using-commonjs-syntax" tabindex="-1"><a class="header-anchor" href="#using-commonjs-syntax" aria-hidden="true">#</a> Using CommonJS syntax</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> ShewenyClient <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-es-modules-syntax" tabindex="-1"><a class="header-anchor" href="#using-es-modules-syntax" aria-hidden="true">#</a> Using ES modules syntax</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="create-new-instance-of-client" tabindex="-1"><a class="header-anchor" href="#create-new-instance-of-client" aria-hidden="true">#</a> Create new instance of client</h2>
<p>Create a new instance of <RouterLink to="/doc/classes/ShewenyClient.html">ShewenyClient</RouterLink> with <RouterLink to="/doc/typedef/ShewenyClientOptions.html">ShewenyClientOptions</RouterLink></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ShewenyClient</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  intents<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"GUILDS"</span><span class="token punctuation">,</span> <span class="token string">"GUILDS_MESSAGES"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  admins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"611468402263064577"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// Admins permissions for the bot</span>
  handlers<span class="token operator">:</span> <span class="token punctuation">{</span>
    commands<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">"SLASH_COMMANDS"</span><span class="token punctuation">,</span> <span class="token comment">// Use slash-commands instead of message commands (MESSAGE_COMMANDS)</span>
      directory<span class="token operator">:</span> <span class="token string">"./commands"</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>The <code>intents</code> options is required with discord.js V13.0.0 or higher.</p>
</div>
</template>
