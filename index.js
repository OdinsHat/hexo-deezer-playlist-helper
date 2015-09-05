(function () {
    'use strict';

    hexo.extend.helper.register('deezerpl', function(playlistId, width, height){
        return '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=' + width + '&height=' + height + '&color=1990DB&layout=dark&size=medium&type=playlist&id=' + playlistId + '&title=" width="' + width + '" height="' + height + '"></iframe>';
    });
})();