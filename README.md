# Hexo Dezer Playlist Helper

Hexo helper for use in templates to display a Deezer playlist with a given playlist ID, width and height.

## Installation

``` bash
$ npm install hexo-deezer-playlist-helper --save
```

## Usage

Helpers are for use in Hexo templates so to add a playlist on your sidebar or in posts or somewhere else in your template the very least would be something like this:

```html
<%- deezerpl(1302841255, 270, 300) %>
```

## Usage Example

On my own blog I have this as a weidgt in the default Light theme of Hexo. The widget has the following code:

```
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

## Uninstall

1. Remove all usages of the helper form your template.

2. Then run :

``` bash
$ npm uninstall hexo-deezer-playlist-helper
```

## License

MIT
