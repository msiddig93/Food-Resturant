/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.4.0
build: nightly
*/
YUI.add("highlight-accentfold",function(e){var d=e.Text.AccentFold,b=e.Escape,c={},a=e.mix(e.Highlight,{allFold:function(o,f,q){var n=a._TEMPLATE,g=[],l=0,m,h,k,j,p;q=e.merge({escapeHTML:false,replacer:function(r,t,s,u){var i;if(t&&!(/\s/).test(s)){return r;}i=s.length;g.push([o.substring(l,u),o.substr(u,i)]);l=u+i;}},q||c);a.all(d.fold(o),d.fold(f),q);if(l<o.length){g.push([o.substr(l)]);}for(h=0,k=g.length;h<k;++h){m=b.html(g[h][0]);if((j=g[h][1])){m+=n.replace(/\{s\}/g,b.html(j));}g[h]=m;}return g.join("");},startFold:function(g,f){return a.allFold(g,f,{startsWith:true});},wordsFold:function(h,g){var f=a._TEMPLATE;return a.words(h,d.fold(g),{mapper:function(j,i){if(i.hasOwnProperty(d.fold(j))){return f.replace(/\{s\}/g,b.html(j));}return b.html(j);}});}});},"3.4.0",{requires:["highlight-base","text-accentfold"]});