<template><h1 id="basic-event" tabindex="-1"><a class="header-anchor" href="#basic-event" aria-hidden="true">#</a> Basic event</h1>
<p>With sapphire each Event must be a class which extends from the <RouterLink to="/doc/Events.html">Event</RouterLink> class</p>
<h2 id="import-event" tabindex="-1"><a class="header-anchor" href="#import-event" aria-hidden="true">#</a> Import Event</h2>
<p>Import the <RouterLink to="/doc/guide/classes/Event.html">Event</RouterLink> :</p>
<CodeGroup>
<CodeGroupItem title="CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sapphire/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="ESM">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sapphire/framework"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="create-the-event" tabindex="-1"><a class="header-anchor" href="#create-the-event" aria-hidden="true">#</a> Create the Event</h2>
<h3 id="slash-event" tabindex="-1"><a class="header-anchor" href="#slash-event" aria-hidden="true">#</a> Slash-Event</h3>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GuildMemberAdd</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"guildMemberAdd"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Member join the guild"</span><span class="token punctuation">,</span>
      once<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">member</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Event<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GuildMember <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GuildMemberAdd</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      once<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>member<span class="token operator">:</span> GuildMember<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
</CodeGroup>
<h3 id="message-event" tabindex="-1"><a class="header-anchor" href="#message-event" aria-hidden="true">#</a> Message Event</h3>
<CodeGroup>
<CodeGroupItem title="JS CommonJS">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> Event <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@sheweny/framework"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GuildMemberAdd</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">client</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      once<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span><span class="token parameter">member</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></CodeGroupItem>
<CodeGroupItem title="TS ES Modules">
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Event<span class="token punctuation">,</span> ShewenyClient <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@sheweny/framework"</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> GuildMember <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"discord.js"</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">GuildMemberAdd</span> <span class="token keyword">extends</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>client<span class="token operator">:</span> ShewenyClient<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>client<span class="token punctuation">,</span> <span class="token string">"ping"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      description<span class="token operator">:</span> <span class="token string">"Ping the bot"</span><span class="token punctuation">,</span>
      once<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">execute</span><span class="token punctuation">(</span>member<span class="token operator">:</span> GuildMember<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>member<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></CodeGroupItem>
</CodeGroup>
</template>
