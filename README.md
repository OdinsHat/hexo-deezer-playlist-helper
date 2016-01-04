# Hexo Dezer Playlist Helper
[![Build Status](https://travis-ci.org/OdinsHat/hexo-deezer-playlist-helper.svg?branch=master)](https://travis-ci.org/OdinsHat/hexo-deezer-playlist-helper) [![Code Climate](https://codeclimate.com/github/OdinsHat/hexo-deezer-playlist-helper/badges/gpa.svg)](https://codeclimate.com/github/OdinsHat/hexo-deezer-playlist-helper)

Hexo helper for use in templates to display a Deezer playlist with a given playlist ID, width and height.

## Installation

``` bash
$ npm install hexo-deezer-playlist-helper --save
```

## Usage

Helpers are for use in Hexo templates so to add a playlist on your sidebar or in posts or somewhere else in your template the very least would be something like this:

```
<%- deezerpl(1302841255); %>

// Or for custom width and height:

<%- deezerpl(1302841255, {width: 270, height: 300});

```

You could also have the playlist as a config variable and a widget setup like so:

## Usage Example

On my own blog I have this as a weidgt in the default Light theme of Hexo. The widget has the following code:

```
<!-- This is in wigets/_deezerpl.ejs -->
<% if (config.deezer.playlist){ %>
<div class="widget deezerpl">
    <h3 class="title">Deezer Playlist</h3>
    <%- deezerpl(config.deezer.playlist, 270, 300) %>
</div>
<% } %>
```

Note that the above EJS (template) code has the following:

1. It checks to see if deezer playlist is defined in the site _config.yml 
2. If it is then it will display that playlist.
3. I not the widget will nt display at all.

You can see this in action on the left sidebar of my site [here](http://www.dougbromley.com).

### Screenshot

![Screenshot of Deezer Playlist for Hexo](https://raw.githubusercontent.com/OdinsHat/hexo-deezer-playlist-helper/9f3b4c2d428c92eb73f24f906498c26968ef6f25/assets/deezerpl-screen.png)

## Uninstall

1. Remove all usages of the helper from your template.

2. Then run:

```bash
$ npm uninstall hexo-deezer-playlist-helper
```

## License

MIT
