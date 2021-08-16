<template><h1 id="installing-node-js-and-sheweny" tabindex="-1"><a class="header-anchor" href="#installing-node-js-and-sheweny" aria-hidden="true">#</a> Installing Node.js and sheweny</h1>
<h2 id="installing-node-js" tabindex="-1"><a class="header-anchor" href="#installing-node-js" aria-hidden="true">#</a> Installing Node.js</h2>
<p>To use sheweny, you'll need to install Node.js. You can do so by going to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">the Node.js website<OutboundLink/></a>.</p>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>If you <em>do</em> have Node installed, but it's an older version (i.e. anything below 16.6.0), then you must upgrade to the latest version. sheweny V1 requires Node v16.6.0 or higher.</p>
</div>
<h3 id="installing-on-windows" tabindex="-1"><a class="header-anchor" href="#installing-on-windows" aria-hidden="true">#</a> Installing on Windows</h3>
<p>If you're developing on Windows, it's as simple as installing any other program. Go to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">the Node.js website<OutboundLink/></a>, download the latest version, open up the downloaded file, and follow the steps from the installer.</p>
<h3 id="installing-on-macos" tabindex="-1"><a class="header-anchor" href="#installing-on-macos" aria-hidden="true">#</a> Installing on macOS</h3>
<p>If you're developing on macOS, you have a few options. You can go to <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">the Node.js website<OutboundLink/></a>, download the latest version, double click the package installer, and follow the instructions. You can also use a package manager like <a href="https://brew.sh/" target="_blank" rel="noopener noreferrer">Homebrew<OutboundLink/></a> with the command <code>brew install node</code>.</p>
<h3 id="installing-on-linux" tabindex="-1"><a class="header-anchor" href="#installing-on-linux" aria-hidden="true">#</a> Installing on Linux</h3>
<p>If you're developing on Linux, you may consult <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noopener noreferrer">this page<OutboundLink/></a> to determine how you should install Node. On that note, there's a possibility that you may already have Node installed on your machine (e.g., if you're using a VPS). You can check the installed version by running the <code>node -v</code> command. If it outputs something like <code>v16.6.0</code> or higher, then you're good to go! Otherwise, take a look at <a href="https://nodejs.org/en/download/package-manager/" target="_blank" rel="noopener noreferrer">this page<OutboundLink/></a> for instructions on installing Node on your OS.</p>
<hr>
<h2 id="preparing-the-essentials" tabindex="-1"><a class="header-anchor" href="#preparing-the-essentials" aria-hidden="true">#</a> Preparing the essentials</h2>
<p>To use sheweny, you'll need to install it via npm (Node's package manager). npm comes with every Node installation, so you don't have to worry about installing that. However, before you install anything, you should set up a new project folder.</p>
<h3 id="setting-up-a-project-folder" tabindex="-1"><a class="header-anchor" href="#setting-up-a-project-folder" aria-hidden="true">#</a> Setting up a project folder</h3>
<p>Like any other project, you should have a dedicated folder to keep it organized and manageable.</p>
<p>Navigate to a place on your machine that's easy to find and reopen in the future for convenience purposes. Create a new folder like you normally would (depending on your OS, you can use <code>mkdir project-name</code> inside your terminal). If you already have a name you want to use for your bot, you can use that as the folder name. Otherwise, you may name it something like <code>discord-bot</code> for the time being (or anything else you have in mind).</p>
<p>Once you're done making the folder, open it up (depending on your OS, you can use <code>cd project-name</code> inside your terminal).</p>
<h3 id="opening-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#opening-the-command-prompt" aria-hidden="true">#</a> Opening the command prompt</h3>
<p>If you're on Linux, you can quickly open up the terminal with <code>Ctrl + Alt + T</code>.</p>
<p>If you're on Windows and aren't familiar with opening up the command prompt, do the following:</p>
<ol>
<li>Open your bot project folder.</li>
<li>Hold down the <code>Shift</code> key and right-click inside the folder.</li>
<li>Choose the &quot;Open command window here&quot; option.</li>
</ol>
<p>It should then open up a window with a black background. It's a bit unattractive, but we'll talk about using better, more powerful tools in a different part of the guide.</p>
<h3 id="using-the-command-prompt" tabindex="-1"><a class="header-anchor" href="#using-the-command-prompt" aria-hidden="true">#</a> Using the command prompt</h3>
<p>With the command prompt open, run the <code>node -v</code> command to make sure you've successfully installed Node.js. If you see something like <code>v16.6</code> or higher, great! If not, go back and try installing again.</p>
<p>The next command you'll be running is <code>npm init</code>. This command creates a <code>package.json</code> file for you, which will keep track of the dependencies your bot uses and other info. If you're a bit confused by that, you can ignore it for the time being.</p>
<p>The <code>npm init</code> command will ask you a sequence of questions–you should fill them out as you see fit. If you're not sure of something or want to skip it as a whole, leave it blank and press enter.</p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>Want to get started quickly? Use <code>npm init -y</code> to have it fill out everything for you!</p>
</div>
<p>Once you're done with that, you're ready to install sheweny!</p>
<hr>
<h2 id="installing-sheweny" tabindex="-1"><a class="header-anchor" href="#installing-sheweny" aria-hidden="true">#</a> Installing sheweny</h2>
<p>Now that you've installed Node.js and know how to open up your console and run commands, you can finally install sheweny!</p>
<p>To install sheweny, run the <code>npm install sheweny</code>. This can take a bit of time but should finish fairly quickly.</p>
<p>And that's it! With all the necessities installed, you're almost ready to start coding your bot.</p>
<hr>
<h2 id="installing-a-linter" tabindex="-1"><a class="header-anchor" href="#installing-a-linter" aria-hidden="true">#</a> Installing a linter</h2>
<p>While you are coding, you may find that you run into numerous syntax errors or code in an inconsistent style. You should install a linter to ease these troubles. While code editors generally can point out syntax errors, with a linter, you can coerce your coding to be in a specific style as you define in the configuration. While this is not required, it's advisable. <RouterLink to="/preparations/setting-up-a-linter.html">Click here for the linter guide!</RouterLink></p>
</template>
