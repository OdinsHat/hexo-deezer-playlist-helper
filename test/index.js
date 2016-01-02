'use strict'

var cheerio = require('cheerio');
var should = require('chai').should();
var Hexo = require('hexo');


describe('deezerpl', function() {
    var hexo = new Hexo(process.cwd(), {silent: true});
    var deezerpl = require('../index.js');

    it('deezer playlist iframe should be formatted right given a playlist id', function(){
        var $ = cheerio.load(deezerpl('1279432131'));

        expect($('iframe').attr('src')).to.contain('http://www.deezer.com/plugins/player');
        expect($('iframe').attr('src')).to.contain('1279432131');
        //$('iframe').attr('src').should.eql('http://zespia.tw');
        //$('iframe').attr('width').should.eql('500');
        //$('iframe').attr('height').should.eql('300');
        //$('iframe').attr('frameborder').should.eql('0');
        //$('iframe').attr('allowfullscreen').should.eql('');
    });
});
