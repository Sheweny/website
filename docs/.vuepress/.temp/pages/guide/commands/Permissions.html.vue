<template><h1 id="command-permissions" tabindex="-1"><a class="header-anchor" href="#command-permissions" aria-hidden="true">#</a> Command permissions</h1>
<p>With sheweny you can defined permissions of bot and user.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>You can use <code>BOT_ADMIN</code> permissions for check if user is admin of bot.</p>
</div>
<p>If user missing permissions the client emit <code>userMissingPermissions</code> :</p>
<p>Parameters :</p>
<ul>
<li>interaction or message (if bot use slash-commands or not) (type : <a href="https://discord.js.org/#/docs/main/stable/class/Interaction" target="_blank" rel="noopener noreferrer">Interaction<OutboundLink/></a> or <a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a>)</li>
<li>missing (type : [Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;)</li>
</ul>
<p>If bot missing permissions the client emit <code>botMissingPermissions</code> :</p>
<p>Parameters :</p>
<ul>
<li>interaction or message (if bot use slash-commands or not) (type : <a href="https://discord.js.org/#/docs/main/stable/class/Interaction" target="_blank" rel="noopener noreferrer">Interaction<OutboundLink/></a> or <a href="https://discord.js.org/#/docs/main/stable/class/Message" target="_blank" rel="noopener noreferrer">Message<OutboundLink/></a>)</li>
<li>missing (type : [Array&lt;<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" target="_blank" rel="noopener noreferrer">String<OutboundLink/></a>&gt;)</li>
</ul>
<h2 id="slash-command" tabindex="-1"><a class="header-anchor" href="#slash-command" aria-hidden="true">#</a> Slash-command</h2>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Command <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      userPermissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BAN_MEMBERS"</span><span class="token punctuation">,</span> <span class="token string">"BOT_ADMIN"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      userPermissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BAN_MEMBERS"</span><span class="token punctuation">,</span> <span class="token string">"BOT_ADMIN"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">PingCommand</span> <span class="token keyword">extends</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      category<span class="token operator">:</span> <span class="token string">"Misc"</span><span class="token punctuation">,</span>
      userPermissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BAN_MEMBERS"</span><span class="token punctuation">,</span> <span class="token string">"BOT_ADMIN"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
      userPermissions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BAN_MEMBERS"</span><span class="token punctuation">,</span> <span class="token string">"BOT_ADMIN"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>message<span class="token operator">:</span> Message<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span>channel<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> content<span class="token operator">:</span> <span class="token string">"Pong !"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
