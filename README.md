# Hexo Dezer Playlist Helper

Hexo helper for use in templates to display a playllist with a given playlist ID, width and height.

## Installation

``` bash
$ npm install hexo-deezer-playlist-helper --save
```

## Usage

Helpers are for use in Hexo templates so to add a playlist on your sidebar or in posts or somewhere else in your template simply add the following:

```html
<%- deezerpl(1302841255, 270, 300) %>
```

Uninstall

1. Remove all usages of the helper form your template.

2. Then run :

``` bash
$ npm uninstall hexo-deezer-playlist-helper
```

## License

MIT