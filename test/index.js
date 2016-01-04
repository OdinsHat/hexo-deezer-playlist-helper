'use strict'

var cheerio = require('cheerio');
var should = require('chai').should();
var expect = require('chai').expect;


describe('deezerpl', function() {
    var deezerpl = require('../lib/deezerpl');

    debugger;

    it('deezer playlist iframe should contain correct playlist id', function(){

        var frame = deezerpl('1279432131');

        var $ = cheerio.load(frame);

        $('iframe').attr('src').should.be.a('string');
        expect($('iframe').attr('src').search('www.deezer.com')).to.equal(7);
        expect($('iframe').attr('src')).to.include('1279432131');
    });
    
    it('deezer playlist iframe have correct width and height as given', function(){

        var frame = deezerpl('1279432131', {width: 300, height: 200});

        var $ = cheerio.load(frame);

        expect($('iframe').attr('src')).to.include('width=300');
        expect($('iframe').attr('src')).to.include('height=200');
    });
});
