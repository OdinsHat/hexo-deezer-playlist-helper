'use srict';

/**
 * Deezer Playlist helper
 *
 * @param {object} options
 * @returns {string}
 */
module.exports = function(id, opts) {

    debugger;

    var id = id;
    if (opts) {
        var width = opts.width || 200;
        var height = opts.height || 200;
    }

    return '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="http://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=' + width + '&height=' + height + '&color=1990DB&layout=dark&size=medium&type=playlist&id=' + id + '&title=" width="' + width + '" height="' + height + '"></iframe>';
};
