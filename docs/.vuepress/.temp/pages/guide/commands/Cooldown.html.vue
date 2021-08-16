<template><h1 id="command-cooldown" tabindex="-1"><a class="header-anchor" href="#command-cooldown" aria-hidden="true">#</a> Command cooldown</h1>
<p>Create cooldown in a command with the cooldown property in the constructor.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>The cooldown value is in seconds and it type is <code>number</code></p>
</div>
<h2 id="slash-command" tabindex="-1"><a class="header-anchor" href="#slash-command" aria-hidden="true">#</a> Slash-command</h2>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      cooldown<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// cooldown 5 seconds</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">interaction</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    interaction<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">"Pong !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> CommandInteraction <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      cooldown<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// cooldown 5 seconds</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>interaction<span class="token operator">:</span> CommandInteraction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    interaction<span class="token punctuation">.</span><span class="token function">reply</span><span class="token punctuation">(</span><span class="token string">"Pong !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="message-command" tabindex="-1"><a class="header-anchor" href="#message-command" aria-hidden="true">#</a> Message command</h2>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      cooldown<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// cooldown 5 seconds</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">"Pong !"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Command<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      cooldown<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// cooldown 5 seconds</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">"Pong !"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>After a restart of the bot the cooldowns are not kept</p>
</div>
</template>
