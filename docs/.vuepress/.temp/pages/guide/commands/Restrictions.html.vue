<template><h1 id="command-cooldown" tabindex="-1"><a class="header-anchor" href="#command-cooldown" aria-hidden="true">#</a> Command cooldown</h1>
<p>You can add restrictions to prevent a command from being executed on a guild or in DMs</p>
<h2 id="guild-only-with-slash-commands" tabindex="-1"><a class="header-anchor" href="#guild-only-with-slash-commands" aria-hidden="true">#</a> Guild only with slash-commands</h2>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      guildOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// The command cannot be executing in DMs</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">interaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    interaction<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">"Pong !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CommandInteraction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      guildOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// The command cannot be executing in DMs</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>interaction<span class="token operator">:</span> CommandInteraction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    interaction<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">"Pong !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="dms-only-with-message-commands" tabindex="-1"><a class="header-anchor" href="#dms-only-with-message-commands" aria-hidden="true">#</a> DMs only with message-commands</h2>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      DMOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// The command cannot be executing in DMs</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">"Pong !"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      DMOnly<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// The command cannot be executing in DMs</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">"Pong !"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
