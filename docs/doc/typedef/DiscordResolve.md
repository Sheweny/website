# DiscordResolve

## [async] resolveUser(arg)

Get a user and fetch discord if it is not in the cache.

Parameters :

- arg : Id, mention, name, start of name, name + discriminator. (string)

Return : [User](https://discord.js.org/#/docs/main/stable/class/User) or undefined

## resolveGuild(arg)

Get a guild in common with the bot.

Parameters :

- arg : Name or id of guild. (string)

Return : [Guild](https://discord.js.org/#/docs/main/stable/class/Guild) or undefined

## [async] resolveMember(guild, arg)

Get a guild member and fetch discord if it is not in the cache.

Parameters :

- guild : The guild where is the member (Guild)
- arg : Id, mention, username, start of username. (string)

Return : [GuildMember](https://discord.js.org/#/docs/main/stable/class/GuildMember) or undefined

## resolveChannel(guild, arg)

Get a guild channel from a guild.

Parameters :

- guild : The guild where is the channel (Guild)
- arg : Id, mention, name, start of name. (string)

Return : [GuildChannel](https://discord.js.org/#/docs/main/stable/class/GuildChannel) or undefined

## resolveRole(guild, arg)

Get a guild role.

Parameters :

- guild : The guild (Guild)
- arg : Id, mention, name, start of name. (string)

Return : [Role](https://discord.js.org/#/docs/main/stable/class/Role) or undefined

## resolveGuildEmoji(guild, arg)

Get a emoji from a guild.

Parameters :

- guild : The guild where is the emoji (Guild)
- arg : Id, name, emoji (mention). (string)

Return : [GuildEmoji](https://discord.js.org/#/docs/main/stable/class/GuildEmoji) or undefined

Parameters :

- member : [GuildMember](https://discord.js.org/#/docs/main/stable/class/GuildMember)

Return : [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
