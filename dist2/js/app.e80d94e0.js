(function(t){function e(e){for(var r, i, c = e[0], s = e[1], u = e[2], l = 0, f = [];l < c.length;l++)i = c[l], Object.prototype.hasOwnProperty.call(a, i) && a[i] && f.push(a[i][0]), a[i] = 0;for(r in s)Object.prototype.hasOwnProperty.call(s, r) && (t[r] = s[r]);p && p(e);while(f.length)f.shift()();return o.push.apply(o, u || []), n()}function n(){for(var t, e = 0;e < o.length;e++){for(var n = o[e], r = !0, i = 1;i < n.length;i++){var c = n[i];0 !== a[c] && (r = !1)}r && (o.splice(e--, 1), t = s(s.s = n[0]))}return t}var r = {}, i = {app: 0}, a = {app: 0}, o = [];function c(t){return s.p + 'js/' + ({}[t] || t) + '.' + {'chunk-2d20f91a': '0ed4d17c', 'chunk-3736255c': '35240ccb'}[t] + '.js'}function s(e){if(r[e])return r[e].exports;var n = r[e] = {i: e, l: !1, exports: {}};return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports}s.e = function(t){var e = [], n = {'chunk-3736255c': 1};i[t] ? e.push(i[t]) : 0 !== i[t] && n[t] && e.push(i[t] = new Promise((function(e, n){for(var r = 'css/' + ({}[t] || t) + '.' + {'chunk-2d20f91a': '31d6cfe0', 'chunk-3736255c': 'b944ae04'}[t] + '.css', a = s.p + r, o = document.getElementsByTagName('link'), c = 0;c < o.length;c++){var u = o[c], l = u.getAttribute('data-href') || u.getAttribute('href');if('stylesheet' === u.rel && (l === r || l === a))return e()}var f = document.getElementsByTagName('style');for(c = 0;c < f.length;c++){u = f[c], l = u.getAttribute('data-href');if(l === r || l === a)return e()}var p = document.createElement('link');p.rel = 'stylesheet', p.type = 'text/css', p.onload = e, p.onerror = function(e){var r = e && e.target && e.target.src || a, o = new Error('Loading CSS chunk ' + t + ' failed.\n(' + r + ')');o.code = 'CSS_CHUNK_LOAD_FAILED', o.request = r, delete i[t], p.parentNode.removeChild(p), n(o)}, p.href = a;var d = document.getElementsByTagName('head')[0];d.appendChild(p)})).then((function(){i[t] = 0})));var r = a[t];if(0 !== r)if(r)e.push(r[2]);else{var o = new Promise((function(e, n){r = a[t] = [e, n]}));e.push(r[2] = o);var u, l = document.createElement('script');l.charset = 'utf-8', l.timeout = 120, s.nc && l.setAttribute('nonce', s.nc), l.src = c(t);var f = new Error;u = function(e){l.onerror = l.onload = null, clearTimeout(p);var n = a[t];if(0 !== n){if(n){var r = e && ('load' === e.type ? 'missing' : e.type), i = e && e.target && e.target.src;f.message = 'Loading chunk ' + t + ' failed.\n(' + r + ': ' + i + ')', f.name = 'ChunkLoadError', f.type = r, f.request = i, n[1](f)}a[t] = void 0}};var p = setTimeout((function(){u({type: 'timeout', target: l})}), 12e4);l.onerror = l.onload = u, document.head.appendChild(l)}return Promise.all(e)}, s.m = t, s.c = r, s.d = function(t, e, n){s.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})}, s.r = function(t){'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0})}, s.t = function(t, e){if(1 & e && (t = s(t)), 8 & e)return t;if(4 & e && 'object' === typeof t && t && t.__esModule)return t;var n = Object.create(null);if(s.r(n), Object.defineProperty(n, 'default', {enumerable: !0, value: t}), 2 & e && 'string' != typeof t)for(var r in t)s.d(n, r, function(e){return t[e]}.bind(null, r));return n}, s.n = function(t){var e = t && t.__esModule ? function(){return t['default']} : function(){return t};return s.d(e, 'a', e), e}, s.o = function(t, e){return Object.prototype.hasOwnProperty.call(t, e)}, s.p = '/', s.oe = function(t){throw console.error(t), t};var u = window['webpackJsonp'] = window['webpackJsonp'] || [], l = u.push.bind(u);u.push = e, u = u.slice();for(var f = 0;f < u.length;f++)e(u[f]);var p = l;o.push([0, 'chunk-vendors']), n()})({0: function(t, e, n){t.exports = n('56d7')}, '2ffc': function(t, e, n){}, '315b': function(t, e, n){}, 3224: function(t, e, n){'use strict';var r = n('315b'), i = n.n(r);i.a}, '4ee2': function(t, e, n){}, '56d7': function(t, e, n){'use strict';n.r(e);n('e260'), n('e6cf'), n('cca6'), n('a79d');var r = n('2b0e'), i = function(){var t = this, e = t.$createElement, n = t._self._c || e;return n('div', {attrs: {id: 'app'}}, [n('main-tab-bar'), n('router-view')], 1)}, a = [], o = function(){var t = this, e = t.$createElement, n = t._self._c || e;return n('div', {staticClass: 'index'}, [n('tab-bar', [n('div', {staticClass: 'nav-left'}, [n('i', {staticClass: 'login'})]), n('div', {staticClass: 'nav-center'}, [n('tab-bar-item', {attrs: {path: '/home', activeColor: 'pink'}}, [n('div', {attrs: {slot: 'item-text'}, slot: 'item-text'}, [t._v('我的')])]), n('tab-bar-item', {attrs: {path: '/find', activeColor: 'black'}, nativeOn: {click: function(e){return t.tip(e)}}}, [n('div', {attrs: {slot: 'item-text'}, slot: 'item-text'}, [t._v('发现')])])], 1), n('div', {staticClass: 'nav-right'}, [n('router-link', {attrs: {to: '/search'}}, [t._v('搜索')])], 1)]), n('top-tip', {ref: 'tip'}, [n('span', {staticClass: 'tips'}, [t._v(t._s(t.tips))])])], 1)}, c = [], s = function(){var t = this, e = t.$createElement, n = t._self._c || e;return n('div', {attrs: {id: 'tab-bar'}}, [t._t('default')], 2)}, u = [], l = {name: 'TabBar', components: {}, data: function(){return{}}}, f = l, p = (n('ea95'), n('2877')), d = Object(p['a'])(f, s, u, !1, null, 'f09101d8', null), h = d.exports, v = function(){var t = this, e = t.$createElement, n = t._self._c || e;return n('div', {staticClass: 'tab-bar-item', on: {click: t.itemCilck}}, [n('div', {class: {changeFont: t.isActive, font: t.isActive}}, [t._t('item-text')], 2), n('div', {staticClass: 'cover', class: {active: t.isLeave, bgc: t.isTouch}, on: {touchstart: t.touch, touchend: t.touchEnd}})])}, m = [], b = {props: {path: String, activeColor: {typr: String, default: '12px'}}, data: function(){return{isTouch: !1, isLeave: !1}}, computed: {isActive: function(){return this.$route.path == this.path}, activeStyle: function(){return this.isActive ? {fontSize: this.activeColor} : {}}}, methods: {itemCilck: function(){this.$router.push(this.path)}, touch: function(){this.isTouch = !0, this.isLeave = !1}, touchEnd: function(){this.isLeave = !0, this.isTouch = !1}}}, g = b, y = (n('3224'), Object(p['a'])(g, v, m, !1, null, '397cdc96', null)), T = y.exports, _ = function(){var t = this, e = t.$createElement, n = t._self._c || e;return n('transition', {attrs: {name: 'tip-show', mode: 'out-in'}}, [n('div', {directives: [{name: 'show', rawName: 'v-show', value: t.isTip, expression: 'isTip'}], staticClass: 'tip'}, [t._t('default')], 2)])}, w = [], k = null, C = {name: '', data: function(){return{isTip: !1}}, methods: {showTip: function(){var t = this;this.isTip = !0, k && clearTimeout(k), k = setTimeout((function(){t.hideTip()}), 3e3)}, hideTip: function(){this.isTip = !1}}}, x = C, O = (n('da0a'), Object(p['a'])(x, _, w, !1, null, '7484cb46', null)), j = O.exports, E = {data: function(){return{tips: '为你推荐更多有趣的内容'}}, components: {TabBar: h, TabBarItem: T, TopTip: j}, mounted: function(){var t = this;setTimeout((function(){t.$refs.tip.showTip()}), 500)}, methods: {tip: function(){this.$refs.tip.showTip()}}}, S = E, A = (n('590e'), Object(p['a'])(S, o, c, !1, null, '7d55825e', null)), P = A.exports, $ = {components: {MainTabBar: P}}, L = $, B = Object(p['a'])(L, i, a, !1, null, 'df8f4e76', null), N = B.exports, M = (n('d3b7'), n('8c4f')), q = function(){return n.e('chunk-2d20f91a').then(n.bind(null, 'b3d7'))}, D = function(){return n.e('chunk-3736255c').then(n.bind(null, 'd344'))};r['a'].use(M['a']);var F = [{path: '/', redirect: '/find'}, {path: '/home', component: q}, {path: '/find', component: D}], I = new M['a']({mode: 'history', routes: F}), J = I, z = M['a'].prototype.push;M['a'].prototype.push = function(t){return z.call(this, t).catch((function(t){return t}))};n('4ee2');r['a'].config.productionTip = !1, new r['a']({render: function(t){return t(N)}, router: J}).$mount('#app')}, '590e': function(t, e, n){'use strict';var r = n('912d'), i = n.n(r);i.a}, '8da0': function(t, e, n){}, '912d': function(t, e, n){}, da0a: function(t, e, n){'use strict';var r = n('2ffc'), i = n.n(r);i.a}, ea95: function(t, e, n){'use strict';var r = n('8da0'), i = n.n(r);i.a}});
//# sourceMappingURL=app.e80d94e0.js.map