/*! @name videojs-playlist @version 5.0.0 @license Apache-2.0 */
(function (QUnit, sinon, videojs) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var QUnit__default = /*#__PURE__*/_interopDefaultLegacy(QUnit);
	var sinon__default = /*#__PURE__*/_interopDefaultLegacy(sinon);
	var videojs__default = /*#__PURE__*/_interopDefaultLegacy(videojs);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var win;

	if (typeof window !== "undefined") {
	  win = window;
	} else if (typeof commonjsGlobal !== "undefined") {
	  win = commonjsGlobal;
	} else if (typeof self !== "undefined") {
	  win = self;
	} else {
	  win = {};
	}

	var window_1 = win;

	function cov_bi52yoj7r() {
	  var path = "/Users/abarstow/videojs/videojs-playlist/src/auto-advance.js";
	  var hash = "759c2b7b82d32d9a5374e720965b00111036725f";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/Users/abarstow/videojs/videojs-playlist/src/auto-advance.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 12,
	          column: 21
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      "1": {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      },
	      "2": {
	        start: {
	          line: 21,
	          column: 12
	        },
	        end: {
	          line: 34,
	          column: 1
	        }
	      },
	      "3": {
	        start: {
	          line: 22,
	          column: 13
	        },
	        end: {
	          line: 22,
	          column: 41
	        }
	      },
	      "4": {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 26,
	          column: 3
	        }
	      },
	      "5": {
	        start: {
	          line: 25,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 36
	        }
	      },
	      "6": {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 3
	        }
	      },
	      "7": {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 36
	        }
	      },
	      "8": {
	        start: {
	          line: 32,
	          column: 2
	        },
	        end: {
	          line: 32,
	          column: 20
	        }
	      },
	      "9": {
	        start: {
	          line: 33,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 20
	        }
	      },
	      "10": {
	        start: {
	          line: 48,
	          column: 14
	        },
	        end: {
	          line: 80,
	          column: 1
	        }
	      },
	      "11": {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 49,
	          column: 16
	        }
	      },
	      "12": {
	        start: {
	          line: 53,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 3
	        }
	      },
	      "13": {
	        start: {
	          line: 54,
	          column: 4
	        },
	        end: {
	          line: 54,
	          column: 46
	        }
	      },
	      "14": {
	        start: {
	          line: 55,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 11
	        }
	      },
	      "15": {
	        start: {
	          line: 58,
	          column: 2
	        },
	        end: {
	          line: 58,
	          column: 45
	        }
	      },
	      "16": {
	        start: {
	          line: 60,
	          column: 2
	        },
	        end: {
	          line: 77,
	          column: 4
	        }
	      },
	      "17": {
	        start: {
	          line: 64,
	          column: 25
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      "18": {
	        start: {
	          line: 64,
	          column: 31
	        },
	        end: {
	          line: 64,
	          column: 51
	        }
	      },
	      "19": {
	        start: {
	          line: 70,
	          column: 4
	        },
	        end: {
	          line: 70,
	          column: 37
	        }
	      },
	      "20": {
	        start: {
	          line: 72,
	          column: 4
	        },
	        end: {
	          line: 76,
	          column: 21
	        }
	      },
	      "21": {
	        start: {
	          line: 73,
	          column: 6
	        },
	        end: {
	          line: 73,
	          column: 20
	        }
	      },
	      "22": {
	        start: {
	          line: 74,
	          column: 6
	        },
	        end: {
	          line: 74,
	          column: 39
	        }
	      },
	      "23": {
	        start: {
	          line: 75,
	          column: 6
	        },
	        end: {
	          line: 75,
	          column: 29
	        }
	      },
	      "24": {
	        start: {
	          line: 79,
	          column: 2
	        },
	        end: {
	          line: 79,
	          column: 60
	        }
	      },
	      "25": {
	        start: {
	          line: 89,
	          column: 18
	        },
	        end: {
	          line: 91,
	          column: 1
	        }
	      },
	      "26": {
	        start: {
	          line: 90,
	          column: 2
	        },
	        end: {
	          line: 90,
	          column: 13
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 12,
	            column: 21
	          },
	          end: {
	            line: 12,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        line: 13
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 21,
	            column: 12
	          },
	          end: {
	            line: 21,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 24
	          },
	          end: {
	            line: 34,
	            column: 1
	          }
	        },
	        line: 21
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 48,
	            column: 14
	          },
	          end: {
	            line: 48,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 48,
	            column: 33
	          },
	          end: {
	            line: 80,
	            column: 1
	          }
	        },
	        line: 48
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 60,
	            column: 41
	          },
	          end: {
	            line: 60,
	            column: 42
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 52
	          },
	          end: {
	            line: 77,
	            column: 3
	          }
	        },
	        line: 60
	      },
	      "4": {
	        name: "(anonymous_4)",
	        decl: {
	          start: {
	            line: 64,
	            column: 25
	          },
	          end: {
	            line: 64,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 31
	          },
	          end: {
	            line: 64,
	            column: 51
	          }
	        },
	        line: 64
	      },
	      "5": {
	        name: "(anonymous_5)",
	        decl: {
	          start: {
	            line: 72,
	            column: 61
	          },
	          end: {
	            line: 72,
	            column: 62
	          }
	        },
	        loc: {
	          start: {
	            line: 72,
	            column: 67
	          },
	          end: {
	            line: 76,
	            column: 5
	          }
	        },
	        line: 72
	      },
	      "6": {
	        name: "(anonymous_6)",
	        decl: {
	          start: {
	            line: 89,
	            column: 18
	          },
	          end: {
	            line: 89,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 89,
	            column: 26
	          },
	          end: {
	            line: 91,
	            column: 1
	          }
	        },
	        line: 89
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 13,
	            column: 2
	          },
	          end: {
	            line: 13,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 27
	          },
	          end: {
	            line: 13,
	            column: 36
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 40
	          },
	          end: {
	            line: 13,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 13,
	            column: 50
	          },
	          end: {
	            line: 13,
	            column: 62
	          }
	        }],
	        line: 13
	      },
	      "1": {
	        loc: {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 26,
	            column: 3
	          }
	        }],
	        line: 24
	      },
	      "2": {
	        loc: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }],
	        line: 28
	      },
	      "3": {
	        loc: {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }],
	        line: 53
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0,
	      "24": 0,
	      "25": 0,
	      "26": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0
	    },
	    b: {
	      "0": [0, 0, 0, 0],
	      "1": [0, 0],
	      "2": [0, 0],
	      "3": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "759c2b7b82d32d9a5374e720965b00111036725f"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});

	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }

	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_bi52yoj7r = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}

	cov_bi52yoj7r();
	cov_bi52yoj7r().s[0]++;
	/**
	* Validates a number of seconds to use as the auto-advance delay.
	*
	* @private
	* @param   {number} s
	*          The number to check
	*
	* @return  {boolean}
	*          Whether this is a valid second or not
	*/

	const validSeconds = s => {
	  cov_bi52yoj7r().f[0]++;
	  cov_bi52yoj7r().s[1]++;
	  return (cov_bi52yoj7r().b[0][0]++, typeof s === 'number') && (cov_bi52yoj7r().b[0][1]++, !isNaN(s)) && (cov_bi52yoj7r().b[0][2]++, s >= 0) && (cov_bi52yoj7r().b[0][3]++, s < Infinity);
	};
	/**
	* Resets the auto-advance behavior of a player.
	*
	* @param {Player} player
	*        The player to reset the behavior on
	*/


	cov_bi52yoj7r().s[2]++;

	let reset = player => {
	  cov_bi52yoj7r().f[1]++;
	  const aa = (cov_bi52yoj7r().s[3]++, player.playlist.autoadvance_);
	  cov_bi52yoj7r().s[4]++;

	  if (aa.timeout) {
	    cov_bi52yoj7r().b[1][0]++;
	    cov_bi52yoj7r().s[5]++;
	    player.clearTimeout(aa.timeout);
	  } else {
	    cov_bi52yoj7r().b[1][1]++;
	  }

	  cov_bi52yoj7r().s[6]++;

	  if (aa.trigger) {
	    cov_bi52yoj7r().b[2][0]++;
	    cov_bi52yoj7r().s[7]++;
	    player.off('ended', aa.trigger);
	  } else {
	    cov_bi52yoj7r().b[2][1]++;
	  }

	  cov_bi52yoj7r().s[8]++;
	  aa.timeout = null;
	  cov_bi52yoj7r().s[9]++;
	  aa.trigger = null;
	};
	/**
	* Sets up auto-advance behavior on a player.
	*
	* @param  {Player} player
	*         the current player
	*
	* @param  {number} delay
	*         The number of seconds to wait before each auto-advance.
	*
	* @return {undefined}
	*         Used to short circuit function logic
	*/


	cov_bi52yoj7r().s[10]++;

	const setup = (player, delay) => {
	  cov_bi52yoj7r().f[2]++;
	  cov_bi52yoj7r().s[11]++;
	  reset(player); // Before queuing up new auto-advance behavior, check if `seconds` was
	  // called with a valid value.

	  cov_bi52yoj7r().s[12]++;

	  if (!validSeconds(delay)) {
	    cov_bi52yoj7r().b[3][0]++;
	    cov_bi52yoj7r().s[13]++;
	    player.playlist.autoadvance_.delay = null;
	    cov_bi52yoj7r().s[14]++;
	    return;
	  } else {
	    cov_bi52yoj7r().b[3][1]++;
	  }

	  cov_bi52yoj7r().s[15]++;
	  player.playlist.autoadvance_.delay = delay;
	  cov_bi52yoj7r().s[16]++;

	  player.playlist.autoadvance_.trigger = function () {
	    cov_bi52yoj7r().f[3]++;
	    cov_bi52yoj7r().s[17]++; // This calls setup again, which will reset the existing auto-advance and
	    // set up another auto-advance for the next "ended" event.

	    const cancelOnPlay = () => {
	      cov_bi52yoj7r().f[4]++;
	      cov_bi52yoj7r().s[18]++;
	      return setup(player, delay);
	    }; // If there is a "play" event while we're waiting for an auto-advance,
	    // we need to cancel the auto-advance. This could mean the user seeked
	    // back into the content or restarted the content. This is reproducible
	    // with an auto-advance > 0.


	    cov_bi52yoj7r().s[19]++;
	    player.one('play', cancelOnPlay);
	    cov_bi52yoj7r().s[20]++;
	    player.playlist.autoadvance_.timeout = player.setTimeout(() => {
	      cov_bi52yoj7r().f[5]++;
	      cov_bi52yoj7r().s[21]++;
	      reset(player);
	      cov_bi52yoj7r().s[22]++;
	      player.off('play', cancelOnPlay);
	      cov_bi52yoj7r().s[23]++;
	      player.playlist.next();
	    }, delay * 1000);
	  };

	  cov_bi52yoj7r().s[24]++;
	  player.one('ended', player.playlist.autoadvance_.trigger);
	};
	/**
	* Used to change the reset function in this module at runtime
	* This should only be used in tests.
	*
	* @param {Function} fn
	*        The function to se the reset to
	*/


	cov_bi52yoj7r().s[25]++;

	const setReset_ = fn => {
	  cov_bi52yoj7r().f[6]++;
	  cov_bi52yoj7r().s[26]++;
	  reset = fn;
	};

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	const proxy = props => {
	  const player = _extends({}, videojs__default["default"].EventTarget.prototype, {
	    play: () => {},
	    paused: () => {},
	    ended: () => {},
	    poster: () => {},
	    src: () => {},
	    currentSrc: () => {},
	    addRemoteTextTrack: () => {},
	    removeRemoteTextTrack: () => {},
	    remoteTextTracks: () => {},
	    playlist: () => [],
	    ready: cb => cb(),
	    setTimeout: (cb, wait) => window_1.setTimeout(cb, wait),
	    clearTimeout: id => window_1.clearTimeout(id)
	  }, props);

	  player.constructor = videojs__default["default"].getComponent('Player');
	  player.playlist.player_ = player;
	  player.playlist.autoadvance_ = {};
	  player.playlist.currentIndex_ = -1;

	  player.playlist.autoadvance = () => {};

	  player.playlist.contains = () => {};

	  player.playlist.currentItem = () => {};

	  player.playlist.first = () => {};

	  player.playlist.indexOf = () => {};

	  player.playlist.next = () => {};

	  player.playlist.previous = () => {};

	  return player;
	};

	QUnit__default["default"].module('auto-advance');
	QUnit__default["default"].test('set up ended listener if one does not exist yet', function (assert) {
	  const player = proxy();
	  const ones = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	});
	QUnit__default["default"].test('off previous listener if exists before adding a new one', function (assert) {
	  const player = proxy();
	  const ones = [];
	  const offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  assert.equal(ones.length, 1, 'there should have been only one one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 0, 'we should not have off-ed anything yet');
	  setup(player, 10);
	  assert.equal(ones.length, 2, 'there should have been only two one event added');
	  assert.equal(ones[0], 'ended', 'the event we want to one is "ended"');
	  assert.equal(ones[1], 'ended', 'the event we want to one is "ended"');
	  assert.equal(offs.length, 1, 'there should have been only one off event added');
	  assert.equal(offs[0], 'ended', 'the event we want to off is "ended"');
	});
	QUnit__default["default"].test('do nothing if timeout is weird', function (assert) {
	  const player = proxy();
	  const ones = [];
	  const offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, -1);
	  setup(player, -100);
	  setup(player, null);
	  setup(player, {});
	  setup(player, []);
	  assert.equal(offs.length, 0, 'we did nothing');
	  assert.equal(ones.length, 0, 'we did nothing');
	});
	QUnit__default["default"].test('reset if timeout is weird after we advance', function (assert) {
	  const player = proxy();
	  const ones = [];
	  const offs = [];

	  player.one = function (type) {
	    ones.push(type);
	  };

	  player.off = function (type) {
	    offs.push(type);
	  };

	  setup(player, 0);
	  setup(player, -1);
	  setup(player, 0);
	  setup(player, -100);
	  setup(player, 0);
	  setup(player, null);
	  setup(player, 0);
	  setup(player, {});
	  setup(player, 0);
	  setup(player, []);
	  setup(player, 0);
	  setup(player, NaN);
	  setup(player, 0);
	  setup(player, Infinity);
	  setup(player, 0);
	  setup(player, -Infinity);
	  assert.equal(offs.length, 8, 'we reset the advance 8 times');
	  assert.equal(ones.length, 8, 'we autoadvanced 8 times');
	});
	QUnit__default["default"].test('reset if we have already started advancing', function (assert) {
	  const player = proxy();
	  const oldClearTimeout = window_1.clearTimeout;
	  let clears = 0;

	  window_1.clearTimeout = function () {
	    clears++;
	  }; // pretend we started autoadvancing


	  player.playlist.autoadvance_.timeout = 1;
	  setup(player, 0);
	  assert.equal(clears, 1, 'we reset the auto advance');
	  window_1.clearTimeout = oldClearTimeout;
	});
	QUnit__default["default"].test('timeout is given in seconds', function (assert) {
	  const player = proxy();
	  const oldSetTimeout = window_1.setTimeout;
	  player.addEventListener = Function.prototype;

	  window_1.setTimeout = function (fn, timeout) {
	    assert.equal(timeout, 10 * 1000, 'timeout was given in seconds');
	  };

	  setup(player, 10);
	  player.trigger('ended');
	  window_1.setTimeout = oldSetTimeout;
	});
	QUnit__default["default"].test('cancel a pending auto-advance if play is requested', function (assert) {
	  const clock = sinon__default["default"].useFakeTimers();
	  const player = proxy();
	  sinon__default["default"].spy(player.playlist, 'next');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was called');
	  setup(player, 10);
	  player.trigger('ended');
	  clock.tick(5000);
	  player.trigger('play');
	  clock.tick(5000);
	  assert.equal(player.playlist.next.callCount, 1, 'next was not called because a "play" occurred');
	  player.trigger('ended');
	  clock.tick(10000);
	  assert.equal(player.playlist.next.callCount, 2, 'next was called again because the content ended again and the appropriate wait time elapsed');
	});

	function cov_2jsoh2ztlw() {
	  var path = "/Users/abarstow/videojs/videojs-playlist/src/play-item.js";
	  var hash = "ab80446b5be761923589d16e1bf1f72e9a8e2519";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/Users/abarstow/videojs/videojs-playlist/src/play-item.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 9,
	          column: 20
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      "1": {
	        start: {
	          line: 10,
	          column: 17
	        },
	        end: {
	          line: 10,
	          column: 42
	        }
	      },
	      "2": {
	        start: {
	          line: 11,
	          column: 10
	        },
	        end: {
	          line: 11,
	          column: 38
	        }
	      },
	      "3": {
	        start: {
	          line: 15,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 3
	        }
	      },
	      "4": {
	        start: {
	          line: 16,
	          column: 4
	        },
	        end: {
	          line: 16,
	          column: 44
	        }
	      },
	      "5": {
	        start: {
	          line: 32,
	          column: 17
	        },
	        end: {
	          line: 64,
	          column: 1
	        }
	      },
	      "6": {
	        start: {
	          line: 33,
	          column: 17
	        },
	        end: {
	          line: 33,
	          column: 51
	        }
	      },
	      "7": {
	        start: {
	          line: 35,
	          column: 2
	        },
	        end: {
	          line: 35,
	          column: 67
	        }
	      },
	      "8": {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      "9": {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 66
	        }
	      },
	      "10": {
	        start: {
	          line: 41,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 35
	        }
	      },
	      "11": {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 27
	        }
	      },
	      "12": {
	        start: {
	          line: 43,
	          column: 2
	        },
	        end: {
	          line: 43,
	          column: 22
	        }
	      },
	      "13": {
	        start: {
	          line: 45,
	          column: 2
	        },
	        end: {
	          line: 61,
	          column: 5
	        }
	      },
	      "14": {
	        start: {
	          line: 47,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 76
	        }
	      },
	      "15": {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 63
	        }
	      },
	      "16": {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 58,
	          column: 5
	        }
	      },
	      "17": {
	        start: {
	          line: 51,
	          column: 26
	        },
	        end: {
	          line: 51,
	          column: 39
	        }
	      },
	      "18": {
	        start: {
	          line: 55,
	          column: 6
	        },
	        end: {
	          line: 57,
	          column: 7
	        }
	      },
	      "19": {
	        start: {
	          line: 56,
	          column: 8
	        },
	        end: {
	          line: 56,
	          column: 42
	        }
	      },
	      "20": {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 54
	        }
	      },
	      "21": {
	        start: {
	          line: 63,
	          column: 2
	        },
	        end: {
	          line: 63,
	          column: 16
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 9,
	            column: 20
	          },
	          end: {
	            line: 9,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 9,
	            column: 32
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 9
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 32,
	            column: 17
	          },
	          end: {
	            line: 32,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 32,
	            column: 35
	          },
	          end: {
	            line: 64,
	            column: 1
	          }
	        },
	        line: 32
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 45,
	            column: 15
	          },
	          end: {
	            line: 45,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 45,
	            column: 21
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        },
	        line: 45
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 56,
	            column: 31
	          },
	          end: {
	            line: 56,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 56,
	            column: 38
	          },
	          end: {
	            line: 56,
	            column: 40
	          }
	        },
	        line: 56
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 11,
	            column: 10
	          },
	          end: {
	            line: 11,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 20
	          },
	          end: {
	            line: 11,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 11,
	            column: 37
	          },
	          end: {
	            line: 11,
	            column: 38
	          }
	        }],
	        line: 11
	      },
	      "1": {
	        loc: {
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 33,
	            column: 17
	          },
	          end: {
	            line: 33,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 37
	          },
	          end: {
	            line: 33,
	            column: 51
	          }
	        }],
	        line: 33
	      },
	      "2": {
	        loc: {
	          start: {
	            line: 35,
	            column: 39
	          },
	          end: {
	            line: 35,
	            column: 65
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 35,
	            column: 39
	          },
	          end: {
	            line: 35,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 61
	          },
	          end: {
	            line: 35,
	            column: 65
	          }
	        }],
	        line: 35
	      },
	      "3": {
	        loc: {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 37,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }],
	        line: 37
	      },
	      "4": {
	        loc: {
	          start: {
	            line: 41,
	            column: 16
	          },
	          end: {
	            line: 41,
	            column: 33
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 41,
	            column: 16
	          },
	          end: {
	            line: 41,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 41,
	            column: 31
	          },
	          end: {
	            line: 41,
	            column: 33
	          }
	        }],
	        line: 41
	      },
	      "5": {
	        loc: {
	          start: {
	            line: 47,
	            column: 5
	          },
	          end: {
	            line: 47,
	            column: 26
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 47,
	            column: 5
	          },
	          end: {
	            line: 47,
	            column: 20
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 24
	          },
	          end: {
	            line: 47,
	            column: 26
	          }
	        }],
	        line: 47
	      },
	      "6": {
	        loc: {
	          start: {
	            line: 48,
	            column: 35
	          },
	          end: {
	            line: 48,
	            column: 61
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 48,
	            column: 35
	          },
	          end: {
	            line: 48,
	            column: 53
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 57
	          },
	          end: {
	            line: 48,
	            column: 61
	          }
	        }],
	        line: 48
	      },
	      "7": {
	        loc: {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 58,
	            column: 5
	          }
	        }],
	        line: 50
	      },
	      "8": {
	        loc: {
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 55,
	            column: 6
	          },
	          end: {
	            line: 57,
	            column: 7
	          }
	        }],
	        line: 55
	      },
	      "9": {
	        loc: {
	          start: {
	            line: 55,
	            column: 10
	          },
	          end: {
	            line: 55,
	            column: 86
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 55,
	            column: 10
	          },
	          end: {
	            line: 55,
	            column: 44
	          }
	        }, {
	          start: {
	            line: 55,
	            column: 48
	          },
	          end: {
	            line: 55,
	            column: 86
	          }
	        }],
	        line: 55
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0
	    },
	    b: {
	      "0": [0, 0, 0],
	      "1": [0, 0],
	      "2": [0, 0],
	      "3": [0, 0],
	      "4": [0, 0],
	      "5": [0, 0],
	      "6": [0, 0],
	      "7": [0, 0],
	      "8": [0, 0],
	      "9": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "ab80446b5be761923589d16e1bf1f72e9a8e2519"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});

	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }

	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_2jsoh2ztlw = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}

	cov_2jsoh2ztlw();
	/**
	* Removes all remote text tracks from a player.
	*
	* @param  {Player} player
	*         The player to clear tracks on
	*/

	cov_2jsoh2ztlw().s[0]++;

	const clearTracks = player => {
	  cov_2jsoh2ztlw().f[0]++;
	  const tracks = (cov_2jsoh2ztlw().s[1]++, player.remoteTextTracks());
	  let i = (cov_2jsoh2ztlw().s[2]++, (cov_2jsoh2ztlw().b[0][0]++, tracks) && (cov_2jsoh2ztlw().b[0][1]++, tracks.length) || (cov_2jsoh2ztlw().b[0][2]++, 0)); // This uses a `while` loop rather than `forEach` because the
	  // `TextTrackList` object is a live DOM list (not an array).

	  cov_2jsoh2ztlw().s[3]++;

	  while (i--) {
	    cov_2jsoh2ztlw().s[4]++;
	    player.removeRemoteTextTrack(tracks[i]);
	  }
	};
	/**
	* Plays an item on a player's playlist.
	*
	* @param  {Player} player
	*         The player to play the item on
	*
	* @param  {Object} item
	*         A source from the playlist.
	*
	* @return {Player}
	*         The player that is now playing the item
	*/


	cov_2jsoh2ztlw().s[5]++;

	const playItem = (player, item) => {
	  cov_2jsoh2ztlw().f[1]++;
	  const replay = (cov_2jsoh2ztlw().s[6]++, (cov_2jsoh2ztlw().b[1][0]++, !player.paused()) || (cov_2jsoh2ztlw().b[1][1]++, player.ended()));
	  cov_2jsoh2ztlw().s[7]++;
	  player.trigger('beforeplaylistitem', (cov_2jsoh2ztlw().b[2][0]++, item.originalValue) || (cov_2jsoh2ztlw().b[2][1]++, item));
	  cov_2jsoh2ztlw().s[8]++;

	  if (item.playlistItemId_) {
	    cov_2jsoh2ztlw().b[3][0]++;
	    cov_2jsoh2ztlw().s[9]++;
	    player.playlist.currentPlaylistItemId_ = item.playlistItemId_;
	  } else {
	    cov_2jsoh2ztlw().b[3][1]++;
	  }

	  cov_2jsoh2ztlw().s[10]++;
	  player.poster((cov_2jsoh2ztlw().b[4][0]++, item.poster) || (cov_2jsoh2ztlw().b[4][1]++, ''));
	  cov_2jsoh2ztlw().s[11]++;
	  player.src(item.sources);
	  cov_2jsoh2ztlw().s[12]++;
	  clearTracks(player);
	  cov_2jsoh2ztlw().s[13]++;
	  player.ready(() => {
	    cov_2jsoh2ztlw().f[2]++;
	    cov_2jsoh2ztlw().s[14]++;
	    ((cov_2jsoh2ztlw().b[5][0]++, item.textTracks) || (cov_2jsoh2ztlw().b[5][1]++, [])).forEach(player.addRemoteTextTrack.bind(player));
	    cov_2jsoh2ztlw().s[15]++;
	    player.trigger('playlistitem', (cov_2jsoh2ztlw().b[6][0]++, item.originalValue) || (cov_2jsoh2ztlw().b[6][1]++, item));
	    cov_2jsoh2ztlw().s[16]++;

	    if (replay) {
	      cov_2jsoh2ztlw().b[7][0]++;
	      const playPromise = (cov_2jsoh2ztlw().s[17]++, player.play()); // silence error when a pause interrupts a play request
	      // on browsers which return a promise

	      cov_2jsoh2ztlw().s[18]++;

	      if ((cov_2jsoh2ztlw().b[9][0]++, typeof playPromise !== 'undefined') && (cov_2jsoh2ztlw().b[9][1]++, typeof playPromise.then === 'function')) {
	        cov_2jsoh2ztlw().b[8][0]++;
	        cov_2jsoh2ztlw().s[19]++;
	        playPromise.then(null, e => {
	          cov_2jsoh2ztlw().f[3]++;
	        });
	      } else {
	        cov_2jsoh2ztlw().b[8][1]++;
	      }
	    } else {
	      cov_2jsoh2ztlw().b[7][1]++;
	    }

	    cov_2jsoh2ztlw().s[20]++;
	    setup(player, player.playlist.autoadvance_.delay);
	  });
	  cov_2jsoh2ztlw().s[21]++;
	  return player;
	};

	function cov_1sdiraligc() {
	  var path = "/Users/abarstow/videojs/videojs-playlist/src/playlist-maker.js";
	  var hash = "a1f3a8711afebe0fa7a16dca90cc5a5abef8f429";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/Users/abarstow/videojs/videojs-playlist/src/playlist-maker.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 16,
	          column: 21
	        },
	        end: {
	          line: 18,
	          column: 1
	        }
	      },
	      "1": {
	        start: {
	          line: 17,
	          column: 2
	        },
	        end: {
	          line: 17,
	          column: 46
	        }
	      },
	      "2": {
	        start: {
	          line: 33,
	          column: 32
	        },
	        end: {
	          line: 49,
	          column: 1
	        }
	      },
	      "3": {
	        start: {
	          line: 34,
	          column: 15
	        },
	        end: {
	          line: 34,
	          column: 17
	        }
	      },
	      "4": {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      "5": {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 5
	        }
	      },
	      "6": {
	        start: {
	          line: 39,
	          column: 6
	        },
	        end: {
	          line: 39,
	          column: 30
	        }
	      },
	      "7": {
	        start: {
	          line: 40,
	          column: 6
	        },
	        end: {
	          line: 40,
	          column: 36
	        }
	      },
	      "8": {
	        start: {
	          line: 42,
	          column: 6
	        },
	        end: {
	          line: 42,
	          column: 22
	        }
	      },
	      "9": {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 45,
	          column: 24
	        }
	      },
	      "10": {
	        start: {
	          line: 48,
	          column: 2
	        },
	        end: {
	          line: 48,
	          column: 14
	        }
	      },
	      "11": {
	        start: {
	          line: 61,
	          column: 31
	        },
	        end: {
	          line: 67,
	          column: 1
	        }
	      },
	      "12": {
	        start: {
	          line: 62,
	          column: 13
	        },
	        end: {
	          line: 62,
	          column: 14
	        }
	      },
	      "13": {
	        start: {
	          line: 64,
	          column: 2
	        },
	        end: {
	          line: 66,
	          column: 5
	        }
	      },
	      "14": {
	        start: {
	          line: 65,
	          column: 4
	        },
	        end: {
	          line: 65,
	          column: 34
	        }
	      },
	      "15": {
	        start: {
	          line: 82,
	          column: 31
	        },
	        end: {
	          line: 90,
	          column: 1
	        }
	      },
	      "16": {
	        start: {
	          line: 83,
	          column: 2
	        },
	        end: {
	          line: 87,
	          column: 3
	        }
	      },
	      "17": {
	        start: {
	          line: 83,
	          column: 15
	        },
	        end: {
	          line: 83,
	          column: 16
	        }
	      },
	      "18": {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 86,
	          column: 5
	        }
	      },
	      "19": {
	        start: {
	          line: 85,
	          column: 6
	        },
	        end: {
	          line: 85,
	          column: 15
	        }
	      },
	      "20": {
	        start: {
	          line: 89,
	          column: 2
	        },
	        end: {
	          line: 89,
	          column: 12
	        }
	      },
	      "21": {
	        start: {
	          line: 107,
	          column: 21
	        },
	        end: {
	          line: 126,
	          column: 1
	        }
	      },
	      "22": {
	        start: {
	          line: 108,
	          column: 13
	        },
	        end: {
	          line: 108,
	          column: 20
	        }
	      },
	      "23": {
	        start: {
	          line: 109,
	          column: 13
	        },
	        end: {
	          line: 109,
	          column: 20
	        }
	      },
	      "24": {
	        start: {
	          line: 111,
	          column: 2
	        },
	        end: {
	          line: 113,
	          column: 3
	        }
	      },
	      "25": {
	        start: {
	          line: 112,
	          column: 4
	        },
	        end: {
	          line: 112,
	          column: 23
	        }
	      },
	      "26": {
	        start: {
	          line: 114,
	          column: 2
	        },
	        end: {
	          line: 116,
	          column: 3
	        }
	      },
	      "27": {
	        start: {
	          line: 115,
	          column: 4
	        },
	        end: {
	          line: 115,
	          column: 23
	        }
	      },
	      "28": {
	        start: {
	          line: 118,
	          column: 2
	        },
	        end: {
	          line: 120,
	          column: 3
	        }
	      },
	      "29": {
	        start: {
	          line: 119,
	          column: 4
	        },
	        end: {
	          line: 119,
	          column: 42
	        }
	      },
	      "30": {
	        start: {
	          line: 121,
	          column: 2
	        },
	        end: {
	          line: 123,
	          column: 3
	        }
	      },
	      "31": {
	        start: {
	          line: 122,
	          column: 4
	        },
	        end: {
	          line: 122,
	          column: 42
	        }
	      },
	      "32": {
	        start: {
	          line: 125,
	          column: 2
	        },
	        end: {
	          line: 125,
	          column: 23
	        }
	      },
	      "33": {
	        start: {
	          line: 143,
	          column: 23
	        },
	        end: {
	          line: 159,
	          column: 1
	        }
	      },
	      "34": {
	        start: {
	          line: 144,
	          column: 2
	        },
	        end: {
	          line: 156,
	          column: 3
	        }
	      },
	      "35": {
	        start: {
	          line: 144,
	          column: 15
	        },
	        end: {
	          line: 144,
	          column: 16
	        }
	      },
	      "36": {
	        start: {
	          line: 145,
	          column: 20
	        },
	        end: {
	          line: 145,
	          column: 34
	        }
	      },
	      "37": {
	        start: {
	          line: 147,
	          column: 4
	        },
	        end: {
	          line: 155,
	          column: 5
	        }
	      },
	      "38": {
	        start: {
	          line: 148,
	          column: 6
	        },
	        end: {
	          line: 154,
	          column: 7
	        }
	      },
	      "39": {
	        start: {
	          line: 148,
	          column: 19
	        },
	        end: {
	          line: 148,
	          column: 20
	        }
	      },
	      "40": {
	        start: {
	          line: 149,
	          column: 23
	        },
	        end: {
	          line: 149,
	          column: 33
	        }
	      },
	      "41": {
	        start: {
	          line: 151,
	          column: 8
	        },
	        end: {
	          line: 153,
	          column: 9
	        }
	      },
	      "42": {
	        start: {
	          line: 152,
	          column: 10
	        },
	        end: {
	          line: 152,
	          column: 19
	        }
	      },
	      "43": {
	        start: {
	          line: 158,
	          column: 2
	        },
	        end: {
	          line: 158,
	          column: 12
	        }
	      },
	      "44": {
	        start: {
	          line: 171,
	          column: 18
	        },
	        end: {
	          line: 184,
	          column: 1
	        }
	      },
	      "45": {
	        start: {
	          line: 172,
	          column: 14
	        },
	        end: {
	          line: 172,
	          column: 16
	        }
	      },
	      "46": {
	        start: {
	          line: 173,
	          column: 20
	        },
	        end: {
	          line: 173,
	          column: 34
	        }
	      },
	      "47": {
	        start: {
	          line: 175,
	          column: 2
	        },
	        end: {
	          line: 181,
	          column: 3
	        }
	      },
	      "48": {
	        start: {
	          line: 176,
	          column: 17
	        },
	        end: {
	          line: 176,
	          column: 76
	        }
	      },
	      "49": {
	        start: {
	          line: 177,
	          column: 18
	        },
	        end: {
	          line: 177,
	          column: 27
	        }
	      },
	      "50": {
	        start: {
	          line: 179,
	          column: 4
	        },
	        end: {
	          line: 179,
	          column: 27
	        }
	      },
	      "51": {
	        start: {
	          line: 180,
	          column: 4
	        },
	        end: {
	          line: 180,
	          column: 23
	        }
	      },
	      "52": {
	        start: {
	          line: 183,
	          column: 2
	        },
	        end: {
	          line: 183,
	          column: 13
	        }
	      },
	      "53": {
	        start: {
	          line: 218,
	          column: 13
	        },
	        end: {
	          line: 218,
	          column: 17
	        }
	      },
	      "54": {
	        start: {
	          line: 219,
	          column: 17
	        },
	        end: {
	          line: 219,
	          column: 22
	        }
	      },
	      "55": {
	        start: {
	          line: 239,
	          column: 19
	        },
	        end: {
	          line: 298,
	          column: 3
	        }
	      },
	      "56": {
	        start: {
	          line: 240,
	          column: 4
	        },
	        end: {
	          line: 242,
	          column: 5
	        }
	      },
	      "57": {
	        start: {
	          line: 241,
	          column: 6
	        },
	        end: {
	          line: 241,
	          column: 73
	        }
	      },
	      "58": {
	        start: {
	          line: 244,
	          column: 4
	        },
	        end: {
	          line: 293,
	          column: 5
	        }
	      },
	      "59": {
	        start: {
	          line: 247,
	          column: 31
	        },
	        end: {
	          line: 247,
	          column: 72
	        }
	      },
	      "60": {
	        start: {
	          line: 248,
	          column: 27
	        },
	        end: {
	          line: 248,
	          column: 42
	        }
	      },
	      "61": {
	        start: {
	          line: 250,
	          column: 6
	        },
	        end: {
	          line: 250,
	          column: 34
	        }
	      },
	      "62": {
	        start: {
	          line: 253,
	          column: 6
	        },
	        end: {
	          line: 255,
	          column: 7
	        }
	      },
	      "63": {
	        start: {
	          line: 253,
	          column: 30
	        },
	        end: {
	          line: 253,
	          column: 48
	        }
	      },
	      "64": {
	        start: {
	          line: 254,
	          column: 8
	        },
	        end: {
	          line: 254,
	          column: 45
	        }
	      },
	      "65": {
	        start: {
	          line: 260,
	          column: 6
	        },
	        end: {
	          line: 260,
	          column: 35
	        }
	      },
	      "66": {
	        start: {
	          line: 263,
	          column: 6
	        },
	        end: {
	          line: 263,
	          column: 22
	        }
	      },
	      "67": {
	        start: {
	          line: 265,
	          column: 6
	        },
	        end: {
	          line: 273,
	          column: 9
	        }
	      },
	      "68": {
	        start: {
	          line: 275,
	          column: 6
	        },
	        end: {
	          line: 275,
	          column: 23
	        }
	      },
	      "69": {
	        start: {
	          line: 277,
	          column: 6
	        },
	        end: {
	          line: 279,
	          column: 7
	        }
	      },
	      "70": {
	        start: {
	          line: 278,
	          column: 8
	        },
	        end: {
	          line: 278,
	          column: 39
	        }
	      },
	      "71": {
	        start: {
	          line: 288,
	          column: 6
	        },
	        end: {
	          line: 292,
	          column: 7
	        }
	      },
	      "72": {
	        start: {
	          line: 289,
	          column: 8
	        },
	        end: {
	          line: 291,
	          column: 14
	        }
	      },
	      "73": {
	        start: {
	          line: 290,
	          column: 10
	        },
	        end: {
	          line: 290,
	          column: 43
	        }
	      },
	      "74": {
	        start: {
	          line: 297,
	          column: 4
	        },
	        end: {
	          line: 297,
	          column: 66
	        }
	      },
	      "75": {
	        start: {
	          line: 297,
	          column: 30
	        },
	        end: {
	          line: 297,
	          column: 56
	        }
	      },
	      "76": {
	        start: {
	          line: 301,
	          column: 2
	        },
	        end: {
	          line: 305,
	          column: 5
	        }
	      },
	      "77": {
	        start: {
	          line: 302,
	          column: 4
	        },
	        end: {
	          line: 304,
	          column: 5
	        }
	      },
	      "78": {
	        start: {
	          line: 303,
	          column: 6
	        },
	        end: {
	          line: 303,
	          column: 32
	        }
	      },
	      "79": {
	        start: {
	          line: 307,
	          column: 2
	        },
	        end: {
	          line: 307,
	          column: 30
	        }
	      },
	      "80": {
	        start: {
	          line: 308,
	          column: 2
	        },
	        end: {
	          line: 308,
	          column: 28
	        }
	      },
	      "81": {
	        start: {
	          line: 309,
	          column: 2
	        },
	        end: {
	          line: 309,
	          column: 29
	        }
	      },
	      "82": {
	        start: {
	          line: 310,
	          column: 2
	        },
	        end: {
	          line: 310,
	          column: 27
	        }
	      },
	      "83": {
	        start: {
	          line: 311,
	          column: 2
	        },
	        end: {
	          line: 311,
	          column: 41
	        }
	      },
	      "84": {
	        start: {
	          line: 324,
	          column: 2
	        },
	        end: {
	          line: 373,
	          column: 4
	        }
	      },
	      "85": {
	        start: {
	          line: 326,
	          column: 4
	        },
	        end: {
	          line: 328,
	          column: 5
	        }
	      },
	      "86": {
	        start: {
	          line: 327,
	          column: 6
	        },
	        end: {
	          line: 327,
	          column: 36
	        }
	      },
	      "87": {
	        start: {
	          line: 331,
	          column: 4
	        },
	        end: {
	          line: 344,
	          column: 5
	        }
	      },
	      "88": {
	        start: {
	          line: 337,
	          column: 6
	        },
	        end: {
	          line: 337,
	          column: 37
	        }
	      },
	      "89": {
	        start: {
	          line: 338,
	          column: 6
	        },
	        end: {
	          line: 341,
	          column: 8
	        }
	      },
	      "90": {
	        start: {
	          line: 343,
	          column: 6
	        },
	        end: {
	          line: 343,
	          column: 36
	        }
	      },
	      "91": {
	        start: {
	          line: 346,
	          column: 16
	        },
	        end: {
	          line: 346,
	          column: 51
	        }
	      },
	      "92": {
	        start: {
	          line: 353,
	          column: 4
	        },
	        end: {
	          line: 366,
	          column: 5
	        }
	      },
	      "93": {
	        start: {
	          line: 354,
	          column: 29
	        },
	        end: {
	          line: 354,
	          column: 90
	        }
	      },
	      "94": {
	        start: {
	          line: 355,
	          column: 19
	        },
	        end: {
	          line: 355,
	          column: 39
	        }
	      },
	      "95": {
	        start: {
	          line: 358,
	          column: 6
	        },
	        end: {
	          line: 361,
	          column: 7
	        }
	      },
	      "96": {
	        start: {
	          line: 359,
	          column: 8
	        },
	        end: {
	          line: 359,
	          column: 48
	        }
	      },
	      "97": {
	        start: {
	          line: 360,
	          column: 8
	        },
	        end: {
	          line: 360,
	          column: 38
	        }
	      },
	      "98": {
	        start: {
	          line: 365,
	          column: 6
	        },
	        end: {
	          line: 365,
	          column: 45
	        }
	      },
	      "99": {
	        start: {
	          line: 370,
	          column: 4
	        },
	        end: {
	          line: 370,
	          column: 51
	        }
	      },
	      "100": {
	        start: {
	          line: 372,
	          column: 4
	        },
	        end: {
	          line: 372,
	          column: 34
	        }
	      },
	      "101": {
	        start: {
	          line: 384,
	          column: 2
	        },
	        end: {
	          line: 386,
	          column: 4
	        }
	      },
	      "102": {
	        start: {
	          line: 385,
	          column: 4
	        },
	        end: {
	          line: 385,
	          column: 42
	        }
	      },
	      "103": {
	        start: {
	          line: 397,
	          column: 2
	        },
	        end: {
	          line: 415,
	          column: 4
	        }
	      },
	      "104": {
	        start: {
	          line: 398,
	          column: 4
	        },
	        end: {
	          line: 400,
	          column: 5
	        }
	      },
	      "105": {
	        start: {
	          line: 399,
	          column: 6
	        },
	        end: {
	          line: 399,
	          column: 41
	        }
	      },
	      "106": {
	        start: {
	          line: 402,
	          column: 20
	        },
	        end: {
	          line: 402,
	          column: 64
	        }
	      },
	      "107": {
	        start: {
	          line: 404,
	          column: 4
	        },
	        end: {
	          line: 412,
	          column: 5
	        }
	      },
	      "108": {
	        start: {
	          line: 404,
	          column: 17
	        },
	        end: {
	          line: 404,
	          column: 18
	        }
	      },
	      "109": {
	        start: {
	          line: 405,
	          column: 21
	        },
	        end: {
	          line: 405,
	          column: 31
	        }
	      },
	      "110": {
	        start: {
	          line: 407,
	          column: 6
	        },
	        end: {
	          line: 411,
	          column: 7
	        }
	      },
	      "111": {
	        start: {
	          line: 408,
	          column: 8
	        },
	        end: {
	          line: 408,
	          column: 44
	        }
	      },
	      "112": {
	        start: {
	          line: 409,
	          column: 13
	        },
	        end: {
	          line: 411,
	          column: 7
	        }
	      },
	      "113": {
	        start: {
	          line: 410,
	          column: 8
	        },
	        end: {
	          line: 410,
	          column: 48
	        }
	      },
	      "114": {
	        start: {
	          line: 414,
	          column: 4
	        },
	        end: {
	          line: 414,
	          column: 14
	        }
	      },
	      "115": {
	        start: {
	          line: 424,
	          column: 2
	        },
	        end: {
	          line: 424,
	          column: 55
	        }
	      },
	      "116": {
	        start: {
	          line: 424,
	          column: 32
	        },
	        end: {
	          line: 424,
	          column: 54
	        }
	      },
	      "117": {
	        start: {
	          line: 433,
	          column: 2
	        },
	        end: {
	          line: 433,
	          column: 45
	        }
	      },
	      "118": {
	        start: {
	          line: 433,
	          column: 29
	        },
	        end: {
	          line: 433,
	          column: 44
	        }
	      },
	      "119": {
	        start: {
	          line: 442,
	          column: 2
	        },
	        end: {
	          line: 458,
	          column: 4
	        }
	      },
	      "120": {
	        start: {
	          line: 443,
	          column: 20
	        },
	        end: {
	          line: 443,
	          column: 42
	        }
	      },
	      "121": {
	        start: {
	          line: 445,
	          column: 4
	        },
	        end: {
	          line: 447,
	          column: 5
	        }
	      },
	      "122": {
	        start: {
	          line: 446,
	          column: 6
	        },
	        end: {
	          line: 446,
	          column: 16
	        }
	      },
	      "123": {
	        start: {
	          line: 449,
	          column: 22
	        },
	        end: {
	          line: 449,
	          column: 42
	        }
	      },
	      "124": {
	        start: {
	          line: 452,
	          column: 4
	        },
	        end: {
	          line: 454,
	          column: 5
	        }
	      },
	      "125": {
	        start: {
	          line: 453,
	          column: 6
	        },
	        end: {
	          line: 453,
	          column: 15
	        }
	      },
	      "126": {
	        start: {
	          line: 457,
	          column: 4
	        },
	        end: {
	          line: 457,
	          column: 44
	        }
	      },
	      "127": {
	        start: {
	          line: 467,
	          column: 2
	        },
	        end: {
	          line: 481,
	          column: 4
	        }
	      },
	      "128": {
	        start: {
	          line: 468,
	          column: 20
	        },
	        end: {
	          line: 468,
	          column: 42
	        }
	      },
	      "129": {
	        start: {
	          line: 470,
	          column: 4
	        },
	        end: {
	          line: 472,
	          column: 5
	        }
	      },
	      "130": {
	        start: {
	          line: 471,
	          column: 6
	        },
	        end: {
	          line: 471,
	          column: 16
	        }
	      },
	      "131": {
	        start: {
	          line: 475,
	          column: 4
	        },
	        end: {
	          line: 477,
	          column: 5
	        }
	      },
	      "132": {
	        start: {
	          line: 476,
	          column: 6
	        },
	        end: {
	          line: 476,
	          column: 34
	        }
	      },
	      "133": {
	        start: {
	          line: 480,
	          column: 4
	        },
	        end: {
	          line: 480,
	          column: 36
	        }
	      },
	      "134": {
	        start: {
	          line: 489,
	          column: 2
	        },
	        end: {
	          line: 500,
	          column: 4
	        }
	      },
	      "135": {
	        start: {
	          line: 490,
	          column: 4
	        },
	        end: {
	          line: 492,
	          column: 5
	        }
	      },
	      "136": {
	        start: {
	          line: 491,
	          column: 6
	        },
	        end: {
	          line: 491,
	          column: 13
	        }
	      },
	      "137": {
	        start: {
	          line: 493,
	          column: 20
	        },
	        end: {
	          line: 493,
	          column: 43
	        }
	      },
	      "138": {
	        start: {
	          line: 495,
	          column: 4
	        },
	        end: {
	          line: 497,
	          column: 5
	        }
	      },
	      "139": {
	        start: {
	          line: 496,
	          column: 6
	        },
	        end: {
	          line: 496,
	          column: 58
	        }
	      },
	      "140": {
	        start: {
	          line: 499,
	          column: 4
	        },
	        end: {
	          line: 499,
	          column: 32
	        }
	      },
	      "141": {
	        start: {
	          line: 508,
	          column: 2
	        },
	        end: {
	          line: 519,
	          column: 4
	        }
	      },
	      "142": {
	        start: {
	          line: 509,
	          column: 4
	        },
	        end: {
	          line: 511,
	          column: 5
	        }
	      },
	      "143": {
	        start: {
	          line: 510,
	          column: 6
	        },
	        end: {
	          line: 510,
	          column: 13
	        }
	      },
	      "144": {
	        start: {
	          line: 512,
	          column: 20
	        },
	        end: {
	          line: 512,
	          column: 62
	        }
	      },
	      "145": {
	        start: {
	          line: 514,
	          column: 4
	        },
	        end: {
	          line: 516,
	          column: 5
	        }
	      },
	      "146": {
	        start: {
	          line: 515,
	          column: 6
	        },
	        end: {
	          line: 515,
	          column: 58
	        }
	      },
	      "147": {
	        start: {
	          line: 518,
	          column: 4
	        },
	        end: {
	          line: 518,
	          column: 32
	        }
	      },
	      "148": {
	        start: {
	          line: 527,
	          column: 2
	        },
	        end: {
	          line: 539,
	          column: 4
	        }
	      },
	      "149": {
	        start: {
	          line: 528,
	          column: 4
	        },
	        end: {
	          line: 530,
	          column: 5
	        }
	      },
	      "150": {
	        start: {
	          line: 529,
	          column: 6
	        },
	        end: {
	          line: 529,
	          column: 13
	        }
	      },
	      "151": {
	        start: {
	          line: 532,
	          column: 18
	        },
	        end: {
	          line: 532,
	          column: 38
	        }
	      },
	      "152": {
	        start: {
	          line: 534,
	          column: 4
	        },
	        end: {
	          line: 538,
	          column: 5
	        }
	      },
	      "153": {
	        start: {
	          line: 535,
	          column: 22
	        },
	        end: {
	          line: 535,
	          column: 49
	        }
	      },
	      "154": {
	        start: {
	          line: 537,
	          column: 6
	        },
	        end: {
	          line: 537,
	          column: 58
	        }
	      },
	      "155": {
	        start: {
	          line: 547,
	          column: 2
	        },
	        end: {
	          line: 559,
	          column: 4
	        }
	      },
	      "156": {
	        start: {
	          line: 548,
	          column: 4
	        },
	        end: {
	          line: 550,
	          column: 5
	        }
	      },
	      "157": {
	        start: {
	          line: 549,
	          column: 6
	        },
	        end: {
	          line: 549,
	          column: 13
	        }
	      },
	      "158": {
	        start: {
	          line: 552,
	          column: 18
	        },
	        end: {
	          line: 552,
	          column: 42
	        }
	      },
	      "159": {
	        start: {
	          line: 554,
	          column: 4
	        },
	        end: {
	          line: 558,
	          column: 5
	        }
	      },
	      "160": {
	        start: {
	          line: 555,
	          column: 22
	        },
	        end: {
	          line: 555,
	          column: 49
	        }
	      },
	      "161": {
	        start: {
	          line: 557,
	          column: 6
	        },
	        end: {
	          line: 557,
	          column: 58
	        }
	      },
	      "162": {
	        start: {
	          line: 567,
	          column: 2
	        },
	        end: {
	          line: 569,
	          column: 4
	        }
	      },
	      "163": {
	        start: {
	          line: 568,
	          column: 4
	        },
	        end: {
	          line: 568,
	          column: 47
	        }
	      },
	      "164": {
	        start: {
	          line: 581,
	          column: 2
	        },
	        end: {
	          line: 593,
	          column: 4
	        }
	      },
	      "165": {
	        start: {
	          line: 582,
	          column: 4
	        },
	        end: {
	          line: 584,
	          column: 5
	        }
	      },
	      "166": {
	        start: {
	          line: 583,
	          column: 6
	        },
	        end: {
	          line: 583,
	          column: 30
	        }
	      },
	      "167": {
	        start: {
	          line: 586,
	          column: 4
	        },
	        end: {
	          line: 589,
	          column: 5
	        }
	      },
	      "168": {
	        start: {
	          line: 587,
	          column: 6
	        },
	        end: {
	          line: 587,
	          column: 75
	        }
	      },
	      "169": {
	        start: {
	          line: 588,
	          column: 6
	        },
	        end: {
	          line: 588,
	          column: 13
	        }
	      },
	      "170": {
	        start: {
	          line: 591,
	          column: 4
	        },
	        end: {
	          line: 591,
	          column: 29
	        }
	      },
	      "171": {
	        start: {
	          line: 592,
	          column: 4
	        },
	        end: {
	          line: 592,
	          column: 28
	        }
	      },
	      "172": {
	        start: {
	          line: 604,
	          column: 2
	        },
	        end: {
	          line: 625,
	          column: 4
	        }
	      },
	      "173": {
	        start: {
	          line: 607,
	          column: 4
	        },
	        end: {
	          line: 609,
	          column: 5
	        }
	      },
	      "174": {
	        start: {
	          line: 608,
	          column: 6
	        },
	        end: {
	          line: 608,
	          column: 13
	        }
	      },
	      "175": {
	        start: {
	          line: 611,
	          column: 4
	        },
	        end: {
	          line: 611,
	          column: 23
	        }
	      },
	      "176": {
	        start: {
	          line: 614,
	          column: 4
	        },
	        end: {
	          line: 616,
	          column: 5
	        }
	      },
	      "177": {
	        start: {
	          line: 615,
	          column: 6
	        },
	        end: {
	          line: 615,
	          column: 13
	        }
	      },
	      "178": {
	        start: {
	          line: 624,
	          column: 4
	        },
	        end: {
	          line: 624,
	          column: 37
	        }
	      },
	      "179": {
	        start: {
	          line: 633,
	          column: 2
	        },
	        end: {
	          line: 654,
	          column: 4
	        }
	      },
	      "180": {
	        start: {
	          line: 636,
	          column: 4
	        },
	        end: {
	          line: 638,
	          column: 5
	        }
	      },
	      "181": {
	        start: {
	          line: 637,
	          column: 6
	        },
	        end: {
	          line: 637,
	          column: 13
	        }
	      },
	      "182": {
	        start: {
	          line: 640,
	          column: 4
	        },
	        end: {
	          line: 640,
	          column: 19
	        }
	      },
	      "183": {
	        start: {
	          line: 643,
	          column: 4
	        },
	        end: {
	          line: 645,
	          column: 5
	        }
	      },
	      "184": {
	        start: {
	          line: 644,
	          column: 6
	        },
	        end: {
	          line: 644,
	          column: 13
	        }
	      },
	      "185": {
	        start: {
	          line: 653,
	          column: 4
	        },
	        end: {
	          line: 653,
	          column: 37
	        }
	      },
	      "186": {
	        start: {
	          line: 674,
	          column: 2
	        },
	        end: {
	          line: 710,
	          column: 4
	        }
	      },
	      "187": {
	        start: {
	          line: 675,
	          column: 16
	        },
	        end: {
	          line: 675,
	          column: 17
	        }
	      },
	      "188": {
	        start: {
	          line: 676,
	          column: 14
	        },
	        end: {
	          line: 676,
	          column: 18
	        }
	      },
	      "189": {
	        start: {
	          line: 680,
	          column: 4
	        },
	        end: {
	          line: 683,
	          column: 5
	        }
	      },
	      "190": {
	        start: {
	          line: 681,
	          column: 6
	        },
	        end: {
	          line: 681,
	          column: 41
	        }
	      },
	      "191": {
	        start: {
	          line: 682,
	          column: 6
	        },
	        end: {
	          line: 682,
	          column: 30
	        }
	      },
	      "192": {
	        start: {
	          line: 686,
	          column: 4
	        },
	        end: {
	          line: 688,
	          column: 5
	        }
	      },
	      "193": {
	        start: {
	          line: 687,
	          column: 6
	        },
	        end: {
	          line: 687,
	          column: 13
	        }
	      },
	      "194": {
	        start: {
	          line: 690,
	          column: 4
	        },
	        end: {
	          line: 690,
	          column: 19
	        }
	      },
	      "195": {
	        start: {
	          line: 694,
	          column: 4
	        },
	        end: {
	          line: 696,
	          column: 5
	        }
	      },
	      "196": {
	        start: {
	          line: 695,
	          column: 6
	        },
	        end: {
	          line: 695,
	          column: 54
	        }
	      },
	      "197": {
	        start: {
	          line: 699,
	          column: 4
	        },
	        end: {
	          line: 701,
	          column: 5
	        }
	      },
	      "198": {
	        start: {
	          line: 700,
	          column: 6
	        },
	        end: {
	          line: 700,
	          column: 13
	        }
	      },
	      "199": {
	        start: {
	          line: 709,
	          column: 4
	        },
	        end: {
	          line: 709,
	          column: 37
	        }
	      },
	      "200": {
	        start: {
	          line: 713,
	          column: 2
	        },
	        end: {
	          line: 719,
	          column: 3
	        }
	      },
	      "201": {
	        start: {
	          line: 714,
	          column: 4
	        },
	        end: {
	          line: 714,
	          column: 48
	        }
	      },
	      "202": {
	        start: {
	          line: 718,
	          column: 4
	        },
	        end: {
	          line: 718,
	          column: 14
	        }
	      },
	      "203": {
	        start: {
	          line: 721,
	          column: 2
	        },
	        end: {
	          line: 721,
	          column: 18
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 16,
	            column: 21
	          },
	          end: {
	            line: 16,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 16,
	            column: 32
	          },
	          end: {
	            line: 18,
	            column: 1
	          }
	        },
	        line: 16
	      },
	      "1": {
	        name: "(anonymous_1)",
	        decl: {
	          start: {
	            line: 33,
	            column: 32
	          },
	          end: {
	            line: 33,
	            column: 33
	          }
	        },
	        loc: {
	          start: {
	            line: 33,
	            column: 41
	          },
	          end: {
	            line: 49,
	            column: 1
	          }
	        },
	        line: 33
	      },
	      "2": {
	        name: "(anonymous_2)",
	        decl: {
	          start: {
	            line: 37,
	            column: 14
	          },
	          end: {
	            line: 37,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 37,
	            column: 22
	          },
	          end: {
	            line: 46,
	            column: 3
	          }
	        },
	        line: 37
	      },
	      "3": {
	        name: "(anonymous_3)",
	        decl: {
	          start: {
	            line: 61,
	            column: 31
	          },
	          end: {
	            line: 61,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 61,
	            column: 40
	          },
	          end: {
	            line: 67,
	            column: 1
	          }
	        },
	        line: 61
	      },
	      "4": {
	        name: "(anonymous_4)",
	        decl: {
	          start: {
	            line: 64,
	            column: 14
	          },
	          end: {
	            line: 64,
	            column: 15
	          }
	        },
	        loc: {
	          start: {
	            line: 64,
	            column: 22
	          },
	          end: {
	            line: 66,
	            column: 3
	          }
	        },
	        line: 64
	      },
	      "5": {
	        name: "(anonymous_5)",
	        decl: {
	          start: {
	            line: 82,
	            column: 31
	          },
	          end: {
	            line: 82,
	            column: 32
	          }
	        },
	        loc: {
	          start: {
	            line: 82,
	            column: 56
	          },
	          end: {
	            line: 90,
	            column: 1
	          }
	        },
	        line: 82
	      },
	      "6": {
	        name: "(anonymous_6)",
	        decl: {
	          start: {
	            line: 107,
	            column: 21
	          },
	          end: {
	            line: 107,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 107,
	            column: 43
	          },
	          end: {
	            line: 126,
	            column: 1
	          }
	        },
	        line: 107
	      },
	      "7": {
	        name: "(anonymous_7)",
	        decl: {
	          start: {
	            line: 143,
	            column: 23
	          },
	          end: {
	            line: 143,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 143,
	            column: 37
	          },
	          end: {
	            line: 159,
	            column: 1
	          }
	        },
	        line: 143
	      },
	      "8": {
	        name: "(anonymous_8)",
	        decl: {
	          start: {
	            line: 171,
	            column: 18
	          },
	          end: {
	            line: 171,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 171,
	            column: 27
	          },
	          end: {
	            line: 184,
	            column: 1
	          }
	        },
	        line: 171
	      },
	      "9": {
	        name: "factory",
	        decl: {
	          start: {
	            line: 217,
	            column: 24
	          },
	          end: {
	            line: 217,
	            column: 31
	          }
	        },
	        loc: {
	          start: {
	            line: 217,
	            column: 71
	          },
	          end: {
	            line: 722,
	            column: 1
	          }
	        },
	        line: 217
	      },
	      "10": {
	        name: "(anonymous_10)",
	        decl: {
	          start: {
	            line: 239,
	            column: 37
	          },
	          end: {
	            line: 239,
	            column: 38
	          }
	        },
	        loc: {
	          start: {
	            line: 239,
	            column: 64
	          },
	          end: {
	            line: 298,
	            column: 3
	          }
	        },
	        line: 239
	      },
	      "11": {
	        name: "(anonymous_11)",
	        decl: {
	          start: {
	            line: 253,
	            column: 22
	          },
	          end: {
	            line: 253,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 253,
	            column: 30
	          },
	          end: {
	            line: 253,
	            column: 48
	          }
	        },
	        line: 253
	      },
	      "12": {
	        name: "(anonymous_12)",
	        decl: {
	          start: {
	            line: 289,
	            column: 26
	          },
	          end: {
	            line: 289,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 289,
	            column: 32
	          },
	          end: {
	            line: 291,
	            column: 9
	          }
	        },
	        line: 289
	      },
	      "13": {
	        name: "(anonymous_13)",
	        decl: {
	          start: {
	            line: 297,
	            column: 20
	          },
	          end: {
	            line: 297,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        },
	        line: 297
	      },
	      "14": {
	        name: "(anonymous_14)",
	        decl: {
	          start: {
	            line: 301,
	            column: 25
	          },
	          end: {
	            line: 301,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 301,
	            column: 31
	          },
	          end: {
	            line: 305,
	            column: 3
	          }
	        },
	        line: 301
	      },
	      "15": {
	        name: "(anonymous_15)",
	        decl: {
	          start: {
	            line: 324,
	            column: 25
	          },
	          end: {
	            line: 324,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 324,
	            column: 36
	          },
	          end: {
	            line: 373,
	            column: 3
	          }
	        },
	        line: 324
	      },
	      "16": {
	        name: "(anonymous_16)",
	        decl: {
	          start: {
	            line: 384,
	            column: 22
	          },
	          end: {
	            line: 384,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 384,
	            column: 33
	          },
	          end: {
	            line: 386,
	            column: 3
	          }
	        },
	        line: 384
	      },
	      "17": {
	        name: "(anonymous_17)",
	        decl: {
	          start: {
	            line: 397,
	            column: 21
	          },
	          end: {
	            line: 397,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 397,
	            column: 32
	          },
	          end: {
	            line: 415,
	            column: 3
	          }
	        },
	        line: 397
	      },
	      "18": {
	        name: "(anonymous_18)",
	        decl: {
	          start: {
	            line: 424,
	            column: 26
	          },
	          end: {
	            line: 424,
	            column: 27
	          }
	        },
	        loc: {
	          start: {
	            line: 424,
	            column: 32
	          },
	          end: {
	            line: 424,
	            column: 54
	          }
	        },
	        line: 424
	      },
	      "19": {
	        name: "(anonymous_19)",
	        decl: {
	          start: {
	            line: 433,
	            column: 23
	          },
	          end: {
	            line: 433,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 433,
	            column: 29
	          },
	          end: {
	            line: 433,
	            column: 44
	          }
	        },
	        line: 433
	      },
	      "20": {
	        name: "(anonymous_20)",
	        decl: {
	          start: {
	            line: 442,
	            column: 23
	          },
	          end: {
	            line: 442,
	            column: 24
	          }
	        },
	        loc: {
	          start: {
	            line: 442,
	            column: 29
	          },
	          end: {
	            line: 458,
	            column: 3
	          }
	        },
	        line: 442
	      },
	      "21": {
	        name: "(anonymous_21)",
	        decl: {
	          start: {
	            line: 467,
	            column: 27
	          },
	          end: {
	            line: 467,
	            column: 28
	          }
	        },
	        loc: {
	          start: {
	            line: 467,
	            column: 33
	          },
	          end: {
	            line: 481,
	            column: 3
	          }
	        },
	        line: 467
	      },
	      "22": {
	        name: "(anonymous_22)",
	        decl: {
	          start: {
	            line: 489,
	            column: 19
	          },
	          end: {
	            line: 489,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 489,
	            column: 25
	          },
	          end: {
	            line: 500,
	            column: 3
	          }
	        },
	        line: 489
	      },
	      "23": {
	        name: "(anonymous_23)",
	        decl: {
	          start: {
	            line: 508,
	            column: 18
	          },
	          end: {
	            line: 508,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 508,
	            column: 24
	          },
	          end: {
	            line: 519,
	            column: 3
	          }
	        },
	        line: 508
	      },
	      "24": {
	        name: "(anonymous_24)",
	        decl: {
	          start: {
	            line: 527,
	            column: 18
	          },
	          end: {
	            line: 527,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 527,
	            column: 24
	          },
	          end: {
	            line: 539,
	            column: 3
	          }
	        },
	        line: 527
	      },
	      "25": {
	        name: "(anonymous_25)",
	        decl: {
	          start: {
	            line: 547,
	            column: 22
	          },
	          end: {
	            line: 547,
	            column: 23
	          }
	        },
	        loc: {
	          start: {
	            line: 547,
	            column: 28
	          },
	          end: {
	            line: 559,
	            column: 3
	          }
	        },
	        line: 547
	      },
	      "26": {
	        name: "(anonymous_26)",
	        decl: {
	          start: {
	            line: 567,
	            column: 25
	          },
	          end: {
	            line: 567,
	            column: 26
	          }
	        },
	        loc: {
	          start: {
	            line: 567,
	            column: 36
	          },
	          end: {
	            line: 569,
	            column: 3
	          }
	        },
	        line: 567
	      },
	      "27": {
	        name: "(anonymous_27)",
	        decl: {
	          start: {
	            line: 581,
	            column: 20
	          },
	          end: {
	            line: 581,
	            column: 21
	          }
	        },
	        loc: {
	          start: {
	            line: 581,
	            column: 29
	          },
	          end: {
	            line: 593,
	            column: 3
	          }
	        },
	        line: 581
	      },
	      "28": {
	        name: "(anonymous_28)",
	        decl: {
	          start: {
	            line: 604,
	            column: 18
	          },
	          end: {
	            line: 604,
	            column: 19
	          }
	        },
	        loc: {
	          start: {
	            line: 604,
	            column: 31
	          },
	          end: {
	            line: 625,
	            column: 3
	          }
	        },
	        line: 604
	      },
	      "29": {
	        name: "(anonymous_29)",
	        decl: {
	          start: {
	            line: 633,
	            column: 21
	          },
	          end: {
	            line: 633,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 633,
	            column: 27
	          },
	          end: {
	            line: 654,
	            column: 3
	          }
	        },
	        line: 633
	      },
	      "30": {
	        name: "(anonymous_30)",
	        decl: {
	          start: {
	            line: 674,
	            column: 21
	          },
	          end: {
	            line: 674,
	            column: 22
	          }
	        },
	        loc: {
	          start: {
	            line: 674,
	            column: 38
	          },
	          end: {
	            line: 710,
	            column: 3
	          }
	        },
	        line: 674
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 45
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 17,
	            column: 20
	          },
	          end: {
	            line: 17,
	            column: 45
	          }
	        }],
	        line: 17
	      },
	      "1": {
	        loc: {
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 38,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }],
	        line: 38
	      },
	      "2": {
	        loc: {
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 84,
	            column: 4
	          },
	          end: {
	            line: 86,
	            column: 5
	          }
	        }],
	        line: 84
	      },
	      "3": {
	        loc: {
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 111,
	            column: 2
	          },
	          end: {
	            line: 113,
	            column: 3
	          }
	        }],
	        line: 111
	      },
	      "4": {
	        loc: {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 114,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        }],
	        line: 114
	      },
	      "5": {
	        loc: {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 118,
	            column: 2
	          },
	          end: {
	            line: 120,
	            column: 3
	          }
	        }],
	        line: 118
	      },
	      "6": {
	        loc: {
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 121,
	            column: 2
	          },
	          end: {
	            line: 123,
	            column: 3
	          }
	        }],
	        line: 121
	      },
	      "7": {
	        loc: {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 147,
	            column: 4
	          },
	          end: {
	            line: 155,
	            column: 5
	          }
	        }],
	        line: 147
	      },
	      "8": {
	        loc: {
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        }, {
	          start: {
	            line: 151,
	            column: 8
	          },
	          end: {
	            line: 153,
	            column: 9
	          }
	        }],
	        line: 151
	      },
	      "9": {
	        loc: {
	          start: {
	            line: 151,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 47
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 151,
	            column: 12
	          },
	          end: {
	            line: 151,
	            column: 18
	          }
	        }, {
	          start: {
	            line: 151,
	            column: 22
	          },
	          end: {
	            line: 151,
	            column: 47
	          }
	        }],
	        line: 151
	      },
	      "10": {
	        loc: {
	          start: {
	            line: 217,
	            column: 53
	          },
	          end: {
	            line: 217,
	            column: 69
	          }
	        },
	        type: "default-arg",
	        locations: [{
	          start: {
	            line: 217,
	            column: 68
	          },
	          end: {
	            line: 217,
	            column: 69
	          }
	        }],
	        line: 217
	      },
	      "11": {
	        loc: {
	          start: {
	            line: 239,
	            column: 47
	          },
	          end: {
	            line: 239,
	            column: 59
	          }
	        },
	        type: "default-arg",
	        locations: [{
	          start: {
	            line: 239,
	            column: 58
	          },
	          end: {
	            line: 239,
	            column: 59
	          }
	        }],
	        line: 239
	      },
	      "12": {
	        loc: {
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 240,
	            column: 4
	          },
	          end: {
	            line: 242,
	            column: 5
	          }
	        }],
	        line: 240
	      },
	      "13": {
	        loc: {
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 244,
	            column: 4
	          },
	          end: {
	            line: 293,
	            column: 5
	          }
	        }],
	        line: 244
	      },
	      "14": {
	        loc: {
	          start: {
	            line: 247,
	            column: 31
	          },
	          end: {
	            line: 247,
	            column: 72
	          }
	        },
	        type: "cond-expr",
	        locations: [{
	          start: {
	            line: 247,
	            column: 53
	          },
	          end: {
	            line: 247,
	            column: 65
	          }
	        }, {
	          start: {
	            line: 247,
	            column: 68
	          },
	          end: {
	            line: 247,
	            column: 72
	          }
	        }],
	        line: 247
	      },
	      "15": {
	        loc: {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 253,
	            column: 6
	          },
	          end: {
	            line: 255,
	            column: 7
	          }
	        }],
	        line: 253
	      },
	      "16": {
	        loc: {
	          start: {
	            line: 272,
	            column: 26
	          },
	          end: {
	            line: 272,
	            column: 48
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 272,
	            column: 26
	          },
	          end: {
	            line: 272,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 272,
	            column: 46
	          },
	          end: {
	            line: 272,
	            column: 48
	          }
	        }],
	        line: 272
	      },
	      "17": {
	        loc: {
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 277,
	            column: 6
	          },
	          end: {
	            line: 279,
	            column: 7
	          }
	        }],
	        line: 277
	      },
	      "18": {
	        loc: {
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 288,
	            column: 6
	          },
	          end: {
	            line: 292,
	            column: 7
	          }
	        }],
	        line: 288
	      },
	      "19": {
	        loc: {
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 297,
	            column: 30
	          },
	          end: {
	            line: 297,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 297,
	            column: 52
	          },
	          end: {
	            line: 297,
	            column: 56
	          }
	        }],
	        line: 297
	      },
	      "20": {
	        loc: {
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 302,
	            column: 4
	          },
	          end: {
	            line: 304,
	            column: 5
	          }
	        }],
	        line: 302
	      },
	      "21": {
	        loc: {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 326,
	            column: 4
	          },
	          end: {
	            line: 328,
	            column: 5
	          }
	        }],
	        line: 326
	      },
	      "22": {
	        loc: {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 331,
	            column: 4
	          },
	          end: {
	            line: 344,
	            column: 5
	          }
	        }],
	        line: 331
	      },
	      "23": {
	        loc: {
	          start: {
	            line: 332,
	            column: 6
	          },
	          end: {
	            line: 335,
	            column: 25
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 332,
	            column: 6
	          },
	          end: {
	            line: 332,
	            column: 31
	          }
	        }, {
	          start: {
	            line: 333,
	            column: 6
	          },
	          end: {
	            line: 333,
	            column: 38
	          }
	        }, {
	          start: {
	            line: 334,
	            column: 6
	          },
	          end: {
	            line: 334,
	            column: 16
	          }
	        }, {
	          start: {
	            line: 335,
	            column: 6
	          },
	          end: {
	            line: 335,
	            column: 25
	          }
	        }],
	        line: 332
	      },
	      "24": {
	        loc: {
	          start: {
	            line: 346,
	            column: 16
	          },
	          end: {
	            line: 346,
	            column: 51
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 346,
	            column: 16
	          },
	          end: {
	            line: 346,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 346,
	            column: 49
	          },
	          end: {
	            line: 346,
	            column: 51
	          }
	        }],
	        line: 346
	      },
	      "25": {
	        loc: {
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 353,
	            column: 4
	          },
	          end: {
	            line: 366,
	            column: 5
	          }
	        }],
	        line: 353
	      },
	      "26": {
	        loc: {
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 6
	          },
	          end: {
	            line: 361,
	            column: 7
	          }
	        }],
	        line: 358
	      },
	      "27": {
	        loc: {
	          start: {
	            line: 358,
	            column: 10
	          },
	          end: {
	            line: 358,
	            column: 81
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 358,
	            column: 10
	          },
	          end: {
	            line: 358,
	            column: 14
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 18
	          },
	          end: {
	            line: 358,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 358,
	            column: 49
	          },
	          end: {
	            line: 358,
	            column: 81
	          }
	        }],
	        line: 358
	      },
	      "28": {
	        loc: {
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 398,
	            column: 4
	          },
	          end: {
	            line: 400,
	            column: 5
	          }
	        }],
	        line: 398
	      },
	      "29": {
	        loc: {
	          start: {
	            line: 402,
	            column: 20
	          },
	          end: {
	            line: 402,
	            column: 64
	          }
	        },
	        type: "cond-expr",
	        locations: [{
	          start: {
	            line: 402,
	            column: 43
	          },
	          end: {
	            line: 402,
	            column: 48
	          }
	        }, {
	          start: {
	            line: 402,
	            column: 51
	          },
	          end: {
	            line: 402,
	            column: 64
	          }
	        }],
	        line: 402
	      },
	      "30": {
	        loc: {
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 407,
	            column: 6
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }],
	        line: 407
	      },
	      "31": {
	        loc: {
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 409,
	            column: 13
	          },
	          end: {
	            line: 411,
	            column: 7
	          }
	        }],
	        line: 409
	      },
	      "32": {
	        loc: {
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 445,
	            column: 4
	          },
	          end: {
	            line: 447,
	            column: 5
	          }
	        }],
	        line: 445
	      },
	      "33": {
	        loc: {
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 452,
	            column: 4
	          },
	          end: {
	            line: 454,
	            column: 5
	          }
	        }],
	        line: 452
	      },
	      "34": {
	        loc: {
	          start: {
	            line: 452,
	            column: 8
	          },
	          end: {
	            line: 452,
	            column: 49
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 452,
	            column: 8
	          },
	          end: {
	            line: 452,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 452,
	            column: 28
	          },
	          end: {
	            line: 452,
	            column: 49
	          }
	        }],
	        line: 452
	      },
	      "35": {
	        loc: {
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 470,
	            column: 4
	          },
	          end: {
	            line: 472,
	            column: 5
	          }
	        }],
	        line: 470
	      },
	      "36": {
	        loc: {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 475,
	            column: 4
	          },
	          end: {
	            line: 477,
	            column: 5
	          }
	        }],
	        line: 475
	      },
	      "37": {
	        loc: {
	          start: {
	            line: 475,
	            column: 8
	          },
	          end: {
	            line: 475,
	            column: 41
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 475,
	            column: 8
	          },
	          end: {
	            line: 475,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 475,
	            column: 28
	          },
	          end: {
	            line: 475,
	            column: 41
	          }
	        }],
	        line: 475
	      },
	      "38": {
	        loc: {
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 490,
	            column: 4
	          },
	          end: {
	            line: 492,
	            column: 5
	          }
	        }],
	        line: 490
	      },
	      "39": {
	        loc: {
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 495,
	            column: 4
	          },
	          end: {
	            line: 497,
	            column: 5
	          }
	        }],
	        line: 495
	      },
	      "40": {
	        loc: {
	          start: {
	            line: 496,
	            column: 13
	          },
	          end: {
	            line: 496,
	            column: 57
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 496,
	            column: 13
	          },
	          end: {
	            line: 496,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 496,
	            column: 44
	          },
	          end: {
	            line: 496,
	            column: 57
	          }
	        }],
	        line: 496
	      },
	      "41": {
	        loc: {
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 509,
	            column: 4
	          },
	          end: {
	            line: 511,
	            column: 5
	          }
	        }],
	        line: 509
	      },
	      "42": {
	        loc: {
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 514,
	            column: 4
	          },
	          end: {
	            line: 516,
	            column: 5
	          }
	        }],
	        line: 514
	      },
	      "43": {
	        loc: {
	          start: {
	            line: 515,
	            column: 13
	          },
	          end: {
	            line: 515,
	            column: 57
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 515,
	            column: 13
	          },
	          end: {
	            line: 515,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 515,
	            column: 44
	          },
	          end: {
	            line: 515,
	            column: 57
	          }
	        }],
	        line: 515
	      },
	      "44": {
	        loc: {
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 528,
	            column: 4
	          },
	          end: {
	            line: 530,
	            column: 5
	          }
	        }],
	        line: 528
	      },
	      "45": {
	        loc: {
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 534,
	            column: 4
	          },
	          end: {
	            line: 538,
	            column: 5
	          }
	        }],
	        line: 534
	      },
	      "46": {
	        loc: {
	          start: {
	            line: 537,
	            column: 13
	          },
	          end: {
	            line: 537,
	            column: 57
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 537,
	            column: 13
	          },
	          end: {
	            line: 537,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 537,
	            column: 44
	          },
	          end: {
	            line: 537,
	            column: 57
	          }
	        }],
	        line: 537
	      },
	      "47": {
	        loc: {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 548,
	            column: 4
	          },
	          end: {
	            line: 550,
	            column: 5
	          }
	        }],
	        line: 548
	      },
	      "48": {
	        loc: {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 554,
	            column: 4
	          },
	          end: {
	            line: 558,
	            column: 5
	          }
	        }],
	        line: 554
	      },
	      "49": {
	        loc: {
	          start: {
	            line: 557,
	            column: 13
	          },
	          end: {
	            line: 557,
	            column: 57
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 557,
	            column: 13
	          },
	          end: {
	            line: 557,
	            column: 40
	          }
	        }, {
	          start: {
	            line: 557,
	            column: 44
	          },
	          end: {
	            line: 557,
	            column: 57
	          }
	        }],
	        line: 557
	      },
	      "50": {
	        loc: {
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 582,
	            column: 4
	          },
	          end: {
	            line: 584,
	            column: 5
	          }
	        }],
	        line: 582
	      },
	      "51": {
	        loc: {
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 586,
	            column: 4
	          },
	          end: {
	            line: 589,
	            column: 5
	          }
	        }],
	        line: 586
	      },
	      "52": {
	        loc: {
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 607,
	            column: 4
	          },
	          end: {
	            line: 609,
	            column: 5
	          }
	        }],
	        line: 607
	      },
	      "53": {
	        loc: {
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 614,
	            column: 4
	          },
	          end: {
	            line: 616,
	            column: 5
	          }
	        }],
	        line: 614
	      },
	      "54": {
	        loc: {
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 636,
	            column: 4
	          },
	          end: {
	            line: 638,
	            column: 5
	          }
	        }],
	        line: 636
	      },
	      "55": {
	        loc: {
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 643,
	            column: 4
	          },
	          end: {
	            line: 645,
	            column: 5
	          }
	        }],
	        line: 643
	      },
	      "56": {
	        loc: {
	          start: {
	            line: 674,
	            column: 22
	          },
	          end: {
	            line: 674,
	            column: 33
	          }
	        },
	        type: "default-arg",
	        locations: [{
	          start: {
	            line: 674,
	            column: 31
	          },
	          end: {
	            line: 674,
	            column: 33
	          }
	        }],
	        line: 674
	      },
	      "57": {
	        loc: {
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 680,
	            column: 4
	          },
	          end: {
	            line: 683,
	            column: 5
	          }
	        }],
	        line: 680
	      },
	      "58": {
	        loc: {
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 686,
	            column: 4
	          },
	          end: {
	            line: 688,
	            column: 5
	          }
	        }],
	        line: 686
	      },
	      "59": {
	        loc: {
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 694,
	            column: 4
	          },
	          end: {
	            line: 696,
	            column: 5
	          }
	        }],
	        line: 694
	      },
	      "60": {
	        loc: {
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 699,
	            column: 4
	          },
	          end: {
	            line: 701,
	            column: 5
	          }
	        }],
	        line: 699
	      },
	      "61": {
	        loc: {
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        },
	        type: "if",
	        locations: [{
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 713,
	            column: 2
	          },
	          end: {
	            line: 719,
	            column: 3
	          }
	        }],
	        line: 713
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0,
	      "24": 0,
	      "25": 0,
	      "26": 0,
	      "27": 0,
	      "28": 0,
	      "29": 0,
	      "30": 0,
	      "31": 0,
	      "32": 0,
	      "33": 0,
	      "34": 0,
	      "35": 0,
	      "36": 0,
	      "37": 0,
	      "38": 0,
	      "39": 0,
	      "40": 0,
	      "41": 0,
	      "42": 0,
	      "43": 0,
	      "44": 0,
	      "45": 0,
	      "46": 0,
	      "47": 0,
	      "48": 0,
	      "49": 0,
	      "50": 0,
	      "51": 0,
	      "52": 0,
	      "53": 0,
	      "54": 0,
	      "55": 0,
	      "56": 0,
	      "57": 0,
	      "58": 0,
	      "59": 0,
	      "60": 0,
	      "61": 0,
	      "62": 0,
	      "63": 0,
	      "64": 0,
	      "65": 0,
	      "66": 0,
	      "67": 0,
	      "68": 0,
	      "69": 0,
	      "70": 0,
	      "71": 0,
	      "72": 0,
	      "73": 0,
	      "74": 0,
	      "75": 0,
	      "76": 0,
	      "77": 0,
	      "78": 0,
	      "79": 0,
	      "80": 0,
	      "81": 0,
	      "82": 0,
	      "83": 0,
	      "84": 0,
	      "85": 0,
	      "86": 0,
	      "87": 0,
	      "88": 0,
	      "89": 0,
	      "90": 0,
	      "91": 0,
	      "92": 0,
	      "93": 0,
	      "94": 0,
	      "95": 0,
	      "96": 0,
	      "97": 0,
	      "98": 0,
	      "99": 0,
	      "100": 0,
	      "101": 0,
	      "102": 0,
	      "103": 0,
	      "104": 0,
	      "105": 0,
	      "106": 0,
	      "107": 0,
	      "108": 0,
	      "109": 0,
	      "110": 0,
	      "111": 0,
	      "112": 0,
	      "113": 0,
	      "114": 0,
	      "115": 0,
	      "116": 0,
	      "117": 0,
	      "118": 0,
	      "119": 0,
	      "120": 0,
	      "121": 0,
	      "122": 0,
	      "123": 0,
	      "124": 0,
	      "125": 0,
	      "126": 0,
	      "127": 0,
	      "128": 0,
	      "129": 0,
	      "130": 0,
	      "131": 0,
	      "132": 0,
	      "133": 0,
	      "134": 0,
	      "135": 0,
	      "136": 0,
	      "137": 0,
	      "138": 0,
	      "139": 0,
	      "140": 0,
	      "141": 0,
	      "142": 0,
	      "143": 0,
	      "144": 0,
	      "145": 0,
	      "146": 0,
	      "147": 0,
	      "148": 0,
	      "149": 0,
	      "150": 0,
	      "151": 0,
	      "152": 0,
	      "153": 0,
	      "154": 0,
	      "155": 0,
	      "156": 0,
	      "157": 0,
	      "158": 0,
	      "159": 0,
	      "160": 0,
	      "161": 0,
	      "162": 0,
	      "163": 0,
	      "164": 0,
	      "165": 0,
	      "166": 0,
	      "167": 0,
	      "168": 0,
	      "169": 0,
	      "170": 0,
	      "171": 0,
	      "172": 0,
	      "173": 0,
	      "174": 0,
	      "175": 0,
	      "176": 0,
	      "177": 0,
	      "178": 0,
	      "179": 0,
	      "180": 0,
	      "181": 0,
	      "182": 0,
	      "183": 0,
	      "184": 0,
	      "185": 0,
	      "186": 0,
	      "187": 0,
	      "188": 0,
	      "189": 0,
	      "190": 0,
	      "191": 0,
	      "192": 0,
	      "193": 0,
	      "194": 0,
	      "195": 0,
	      "196": 0,
	      "197": 0,
	      "198": 0,
	      "199": 0,
	      "200": 0,
	      "201": 0,
	      "202": 0,
	      "203": 0
	    },
	    f: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0,
	      "5": 0,
	      "6": 0,
	      "7": 0,
	      "8": 0,
	      "9": 0,
	      "10": 0,
	      "11": 0,
	      "12": 0,
	      "13": 0,
	      "14": 0,
	      "15": 0,
	      "16": 0,
	      "17": 0,
	      "18": 0,
	      "19": 0,
	      "20": 0,
	      "21": 0,
	      "22": 0,
	      "23": 0,
	      "24": 0,
	      "25": 0,
	      "26": 0,
	      "27": 0,
	      "28": 0,
	      "29": 0,
	      "30": 0
	    },
	    b: {
	      "0": [0, 0],
	      "1": [0, 0],
	      "2": [0, 0],
	      "3": [0, 0],
	      "4": [0, 0],
	      "5": [0, 0],
	      "6": [0, 0],
	      "7": [0, 0],
	      "8": [0, 0],
	      "9": [0, 0],
	      "10": [0],
	      "11": [0],
	      "12": [0, 0],
	      "13": [0, 0],
	      "14": [0, 0],
	      "15": [0, 0],
	      "16": [0, 0],
	      "17": [0, 0],
	      "18": [0, 0],
	      "19": [0, 0],
	      "20": [0, 0],
	      "21": [0, 0],
	      "22": [0, 0],
	      "23": [0, 0, 0, 0],
	      "24": [0, 0],
	      "25": [0, 0],
	      "26": [0, 0],
	      "27": [0, 0, 0],
	      "28": [0, 0],
	      "29": [0, 0],
	      "30": [0, 0],
	      "31": [0, 0],
	      "32": [0, 0],
	      "33": [0, 0],
	      "34": [0, 0],
	      "35": [0, 0],
	      "36": [0, 0],
	      "37": [0, 0],
	      "38": [0, 0],
	      "39": [0, 0],
	      "40": [0, 0],
	      "41": [0, 0],
	      "42": [0, 0],
	      "43": [0, 0],
	      "44": [0, 0],
	      "45": [0, 0],
	      "46": [0, 0],
	      "47": [0, 0],
	      "48": [0, 0],
	      "49": [0, 0],
	      "50": [0, 0],
	      "51": [0, 0],
	      "52": [0, 0],
	      "53": [0, 0],
	      "54": [0, 0],
	      "55": [0, 0],
	      "56": [0],
	      "57": [0, 0],
	      "58": [0, 0],
	      "59": [0, 0],
	      "60": [0, 0],
	      "61": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "a1f3a8711afebe0fa7a16dca90cc5a5abef8f429"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});

	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }

	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_1sdiraligc = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}

	cov_1sdiraligc();
	/**
	* Returns whether a playlist item is an object of any kind, excluding null.
	*
	* @private
	*
	* @param {Object}
	*         value to be checked
	*
	* @return {boolean}
	*          The result
	*/

	cov_1sdiraligc().s[0]++;

	const isItemObject = value => {
	  cov_1sdiraligc().f[0]++;
	  cov_1sdiraligc().s[1]++;
	  return (cov_1sdiraligc().b[0][0]++, !!value) && (cov_1sdiraligc().b[0][1]++, typeof value === 'object');
	};
	/**
	* Look through an array of playlist items and transform any primitive
	* as well as null values to objects. This method also adds a property
	* to the transformed item containing original value passed in an input list.
	*
	* @private
	*
	* @param  {Array} arr
	*         An array of playlist items
	*
	* @return {Array}
	*         A new array with transformed items
	*/


	cov_1sdiraligc().s[2]++;

	const transformPrimitiveItems = arr => {
	  cov_1sdiraligc().f[1]++;
	  const list = (cov_1sdiraligc().s[3]++, []);
	  let tempItem;
	  cov_1sdiraligc().s[4]++;
	  arr.forEach(item => {
	    cov_1sdiraligc().f[2]++;
	    cov_1sdiraligc().s[5]++;

	    if (!isItemObject(item)) {
	      cov_1sdiraligc().b[1][0]++;
	      cov_1sdiraligc().s[6]++;
	      tempItem = Object(item);
	      cov_1sdiraligc().s[7]++;
	      tempItem.originalValue = item;
	    } else {
	      cov_1sdiraligc().b[1][1]++;
	      cov_1sdiraligc().s[8]++;
	      tempItem = item;
	    }

	    cov_1sdiraligc().s[9]++;
	    list.push(tempItem);
	  });
	  cov_1sdiraligc().s[10]++;
	  return list;
	};
	/**
	* Generate a unique id for each playlist item object. This id will be used to determine
	* index of an item in the playlist array for cases where there are multiple items with
	* the same source set.
	*
	* @private
	*
	* @param  {Array} arr
	*         An array of playlist items
	*/


	cov_1sdiraligc().s[11]++;

	const generatePlaylistItemId = arr => {
	  cov_1sdiraligc().f[3]++;
	  let guid = (cov_1sdiraligc().s[12]++, 1);
	  cov_1sdiraligc().s[13]++;
	  arr.forEach(item => {
	    cov_1sdiraligc().f[4]++;
	    cov_1sdiraligc().s[14]++;
	    item.playlistItemId_ = guid++;
	  });
	};
	/**
	* Look through an array of playlist items for a specific playlist item id.
	*
	* @private
	* @param   {Array} list
	*          An array of playlist items to look through
	*
	* @param   {number} currentItemId
	*          The current item ID.
	*
	* @return  {number}
	*          The index of the playlist item or -1 if not found
	*/


	cov_1sdiraligc().s[15]++;

	const indexInPlaylistItemIds = (list, currentItemId) => {
	  cov_1sdiraligc().f[5]++;
	  cov_1sdiraligc().s[16]++;

	  for (let i = (cov_1sdiraligc().s[17]++, 0); i < list.length; i++) {
	    cov_1sdiraligc().s[18]++;

	    if (list[i].playlistItemId_ === currentItemId) {
	      cov_1sdiraligc().b[2][0]++;
	      cov_1sdiraligc().s[19]++;
	      return i;
	    } else {
	      cov_1sdiraligc().b[2][1]++;
	    }
	  }

	  cov_1sdiraligc().s[20]++;
	  return -1;
	};
	/**
	* Given two sources, check to see whether the two sources are equal.
	* If both source urls have a protocol, the protocols must match, otherwise, protocols
	* are ignored.
	*
	* @private
	* @param {string|Object} source1
	*        The first source
	*
	* @param {string|Object} source2
	*        The second source
	*
	* @return {boolean}
	*         The result
	*/


	cov_1sdiraligc().s[21]++;

	const sourceEquals = (source1, source2) => {
	  cov_1sdiraligc().f[6]++;
	  let src1 = (cov_1sdiraligc().s[22]++, source1);
	  let src2 = (cov_1sdiraligc().s[23]++, source2);
	  cov_1sdiraligc().s[24]++;

	  if (typeof source1 === 'object') {
	    cov_1sdiraligc().b[3][0]++;
	    cov_1sdiraligc().s[25]++;
	    src1 = source1.src;
	  } else {
	    cov_1sdiraligc().b[3][1]++;
	  }

	  cov_1sdiraligc().s[26]++;

	  if (typeof source2 === 'object') {
	    cov_1sdiraligc().b[4][0]++;
	    cov_1sdiraligc().s[27]++;
	    src2 = source2.src;
	  } else {
	    cov_1sdiraligc().b[4][1]++;
	  }

	  cov_1sdiraligc().s[28]++;

	  if (/^\/\//.test(src1)) {
	    cov_1sdiraligc().b[5][0]++;
	    cov_1sdiraligc().s[29]++;
	    src2 = src2.slice(src2.indexOf('//'));
	  } else {
	    cov_1sdiraligc().b[5][1]++;
	  }

	  cov_1sdiraligc().s[30]++;

	  if (/^\/\//.test(src2)) {
	    cov_1sdiraligc().b[6][0]++;
	    cov_1sdiraligc().s[31]++;
	    src1 = src1.slice(src1.indexOf('//'));
	  } else {
	    cov_1sdiraligc().b[6][1]++;
	  }

	  cov_1sdiraligc().s[32]++;
	  return src1 === src2;
	};
	/**
	* Look through an array of playlist items for a specific `source`;
	* checking both the value of elements and the value of their `src`
	* property.
	*
	* @private
	* @param   {Array} arr
	*          An array of playlist items to look through
	*
	* @param   {string} src
	*          The source to look for
	*
	* @return  {number}
	*          The index of that source or -1
	*/


	cov_1sdiraligc().s[33]++;

	const indexInSources = (arr, src) => {
	  cov_1sdiraligc().f[7]++;
	  cov_1sdiraligc().s[34]++;

	  for (let i = (cov_1sdiraligc().s[35]++, 0); i < arr.length; i++) {
	    const sources = (cov_1sdiraligc().s[36]++, arr[i].sources);
	    cov_1sdiraligc().s[37]++;

	    if (Array.isArray(sources)) {
	      cov_1sdiraligc().b[7][0]++;
	      cov_1sdiraligc().s[38]++;

	      for (let j = (cov_1sdiraligc().s[39]++, 0); j < sources.length; j++) {
	        const source = (cov_1sdiraligc().s[40]++, sources[j]);
	        cov_1sdiraligc().s[41]++;

	        if ((cov_1sdiraligc().b[9][0]++, source) && (cov_1sdiraligc().b[9][1]++, sourceEquals(source, src))) {
	          cov_1sdiraligc().b[8][0]++;
	          cov_1sdiraligc().s[42]++;
	          return i;
	        } else {
	          cov_1sdiraligc().b[8][1]++;
	        }
	      }
	    } else {
	      cov_1sdiraligc().b[7][1]++;
	    }
	  }

	  cov_1sdiraligc().s[43]++;
	  return -1;
	};
	/**
	* Randomize the contents of an array.
	*
	* @private
	* @param  {Array} arr
	*         An array.
	*
	* @return {Array}
	*         The same array that was passed in.
	*/


	cov_1sdiraligc().s[44]++;

	const randomize = arr => {
	  cov_1sdiraligc().f[8]++;
	  let index = (cov_1sdiraligc().s[45]++, -1);
	  const lastIndex = (cov_1sdiraligc().s[46]++, arr.length - 1);
	  cov_1sdiraligc().s[47]++;

	  while (++index < arr.length) {
	    const rand = (cov_1sdiraligc().s[48]++, index + Math.floor(Math.random() * (lastIndex - index + 1)));
	    const value = (cov_1sdiraligc().s[49]++, arr[rand]);
	    cov_1sdiraligc().s[50]++;
	    arr[rand] = arr[index];
	    cov_1sdiraligc().s[51]++;
	    arr[index] = value;
	  }

	  cov_1sdiraligc().s[52]++;
	  return arr;
	};
	/**
	* Factory function for creating new playlist implementation on the given player.
	*
	* API summary:
	*
	* playlist(['a', 'b', 'c']) // setter
	* playlist() // getter
	* playlist.currentItem() // getter, 0
	* playlist.currentItem(1) // setter, 1
	* playlist.next() // 'c'
	* playlist.previous() // 'b'
	* playlist.first() // 'a'
	* playlist.last() // 'c'
	* playlist.autoadvance(5) // 5 second delay
	* playlist.autoadvance() // cancel autoadvance
	*
	* @param  {Player} player
	*         The current player
	*
	* @param  {Array=} initialList
	*         If given, an initial list of sources with which to populate
	*         the playlist.
	*
	* @param  {number=}  initialIndex
	*         If given, the index of the item in the list that should
	*         be loaded first. If -1, no video is loaded. If omitted, The
	*         the first video is loaded.
	*
	* @return {Function}
	*         Returns the playlist function specific to the given player.
	*/


	function factory(player, initialList, initialIndex = (cov_1sdiraligc().b[10][0]++, 0)) {
	  cov_1sdiraligc().f[9]++;
	  let list = (cov_1sdiraligc().s[53]++, null);
	  let changing = (cov_1sdiraligc().s[54]++, false);
	  /**
	  * Get/set the playlist for a player.
	  *
	  * This function is added as an own property of the player and has its
	  * own methods which can be called to manipulate the internal state.
	  *
	  * @param  {Array} [newList]
	  *         If given, a new list of sources with which to populate the
	  *         playlist. Without this, the function acts as a getter.
	  *
	  * @param  {number}  [newIndex]
	  *         If given, the index of the item in the list that should
	  *         be loaded first. If -1, no video is loaded. If omitted, The
	  *         the first video is loaded.
	  *
	  * @return {Array}
	  *         The playlist
	  */

	  const playlist = (cov_1sdiraligc().s[55]++, player.playlist = (newList, newIndex = (cov_1sdiraligc().b[11][0]++, 0)) => {
	    cov_1sdiraligc().f[10]++;
	    cov_1sdiraligc().s[56]++;

	    if (changing) {
	      cov_1sdiraligc().b[12][0]++;
	      cov_1sdiraligc().s[57]++;
	      throw new Error('do not call playlist() during a playlist change');
	    } else {
	      cov_1sdiraligc().b[12][1]++;
	    }

	    cov_1sdiraligc().s[58]++;

	    if (Array.isArray(newList)) {
	      cov_1sdiraligc().b[13][0]++; // @todo - Simplify this to `list.slice()` for v5.

	      const previousPlaylist = (cov_1sdiraligc().s[59]++, Array.isArray(list) ? (cov_1sdiraligc().b[14][0]++, list.slice()) : (cov_1sdiraligc().b[14][1]++, null));
	      const nextPlaylist = (cov_1sdiraligc().s[60]++, newList.slice());
	      cov_1sdiraligc().s[61]++;
	      list = nextPlaylist.slice(); // Transform any primitive and null values in an input list to objects

	      cov_1sdiraligc().s[62]++;

	      if (list.filter(item => {
	        cov_1sdiraligc().f[11]++;
	        cov_1sdiraligc().s[63]++;
	        return isItemObject(item);
	      }).length !== list.length) {
	        cov_1sdiraligc().b[15][0]++;
	        cov_1sdiraligc().s[64]++;
	        list = transformPrimitiveItems(list);
	      } else {
	        cov_1sdiraligc().b[15][1]++;
	      } // Add unique id to each playlist item. This id will be used
	      // to determine index in cases where there are more than one
	      // identical sources in the playlist.


	      cov_1sdiraligc().s[65]++;
	      generatePlaylistItemId(list); // Mark the playlist as changing during the duringplaylistchange lifecycle.

	      cov_1sdiraligc().s[66]++;
	      changing = true;
	      cov_1sdiraligc().s[67]++;
	      player.trigger({
	        type: 'duringplaylistchange',
	        nextIndex: newIndex,
	        nextPlaylist,
	        previousIndex: playlist.currentIndex_,
	        // @todo - Simplify this to simply pass along `previousPlaylist` for v5.
	        previousPlaylist: (cov_1sdiraligc().b[16][0]++, previousPlaylist) || (cov_1sdiraligc().b[16][1]++, [])
	      });
	      cov_1sdiraligc().s[68]++;
	      changing = false;
	      cov_1sdiraligc().s[69]++;

	      if (newIndex !== -1) {
	        cov_1sdiraligc().b[17][0]++;
	        cov_1sdiraligc().s[70]++;
	        playlist.currentItem(newIndex);
	      } else {
	        cov_1sdiraligc().b[17][1]++;
	      } // The only time the previous playlist is null is the first call to this
	      // function. This allows us to fire the `duringplaylistchange` event
	      // every time the playlist is populated and to maintain backward
	      // compatibility by not firing the `playlistchange` event on the initial
	      // population of the list.
	      //
	      // @todo - Remove this condition in preparation for v5.


	      cov_1sdiraligc().s[71]++;

	      if (previousPlaylist) {
	        cov_1sdiraligc().b[18][0]++;
	        cov_1sdiraligc().s[72]++;
	        player.setTimeout(() => {
	          cov_1sdiraligc().f[12]++;
	          cov_1sdiraligc().s[73]++;
	          player.trigger('playlistchange');
	        }, 0);
	      } else {
	        cov_1sdiraligc().b[18][1]++;
	      }
	    } else {
	      cov_1sdiraligc().b[13][1]++;
	    } // Always return a shallow clone of the playlist list.
	    //  We also want to return originalValue if any item in the list has it.


	    cov_1sdiraligc().s[74]++;
	    return list.map(item => {
	      cov_1sdiraligc().f[13]++;
	      cov_1sdiraligc().s[75]++;
	      return (cov_1sdiraligc().b[19][0]++, item.originalValue) || (cov_1sdiraligc().b[19][1]++, item);
	    }).slice();
	  }); // On a new source, if there is no current item, disable auto-advance.

	  cov_1sdiraligc().s[76]++;
	  player.on('loadstart', () => {
	    cov_1sdiraligc().f[14]++;
	    cov_1sdiraligc().s[77]++;

	    if (playlist.currentItem() === -1) {
	      cov_1sdiraligc().b[20][0]++;
	      cov_1sdiraligc().s[78]++;
	      reset(player);
	    } else {
	      cov_1sdiraligc().b[20][1]++;
	    }
	  });
	  cov_1sdiraligc().s[79]++;
	  playlist.currentIndex_ = -1;
	  cov_1sdiraligc().s[80]++;
	  playlist.player_ = player;
	  cov_1sdiraligc().s[81]++;
	  playlist.autoadvance_ = {};
	  cov_1sdiraligc().s[82]++;
	  playlist.repeat_ = false;
	  cov_1sdiraligc().s[83]++;
	  playlist.currentPlaylistItemId_ = null;
	  /**
	  * Get or set the current item in the playlist.
	  *
	  * During the duringplaylistchange event, acts only as a getter.
	  *
	  * @param  {number} [index]
	  *         If given as a valid value, plays the playlist item at that index.
	  *
	  * @return {number}
	  *         The current item index.
	  */

	  cov_1sdiraligc().s[84]++;

	  playlist.currentItem = index => {
	    cov_1sdiraligc().f[15]++;
	    cov_1sdiraligc().s[85]++; // If the playlist is changing, only act as a getter.

	    if (changing) {
	      cov_1sdiraligc().b[21][0]++;
	      cov_1sdiraligc().s[86]++;
	      return playlist.currentIndex_;
	    } else {
	      cov_1sdiraligc().b[21][1]++;
	    } // Act as a setter when the index is given and is a valid number.


	    cov_1sdiraligc().s[87]++;

	    if ((cov_1sdiraligc().b[23][0]++, typeof index === 'number') && (cov_1sdiraligc().b[23][1]++, playlist.currentIndex_ !== index) && (cov_1sdiraligc().b[23][2]++, index >= 0) && (cov_1sdiraligc().b[23][3]++, index < list.length)) {
	      cov_1sdiraligc().b[22][0]++;
	      cov_1sdiraligc().s[88]++;
	      playlist.currentIndex_ = index;
	      cov_1sdiraligc().s[89]++;
	      playItem(playlist.player_, list[playlist.currentIndex_]);
	      cov_1sdiraligc().s[90]++;
	      return playlist.currentIndex_;
	    } else {
	      cov_1sdiraligc().b[22][1]++;
	    }

	    const src = (cov_1sdiraligc().s[91]++, (cov_1sdiraligc().b[24][0]++, playlist.player_.currentSrc()) || (cov_1sdiraligc().b[24][1]++, '')); // If there is a currentPlaylistItemId_, validate that it matches the
	    // current source URL returned by the player. This is sufficient evidence
	    // to suggest that the source was set by the playlist plugin. This code
	    // exists primarily to deal with playlists where multiple items have the
	    // same source.

	    cov_1sdiraligc().s[92]++;

	    if (playlist.currentPlaylistItemId_) {
	      cov_1sdiraligc().b[25][0]++;
	      const indexInItemIds = (cov_1sdiraligc().s[93]++, indexInPlaylistItemIds(list, playlist.currentPlaylistItemId_));
	      const item = (cov_1sdiraligc().s[94]++, list[indexInItemIds]); // Found a match, this is our current index!

	      cov_1sdiraligc().s[95]++;

	      if ((cov_1sdiraligc().b[27][0]++, item) && (cov_1sdiraligc().b[27][1]++, Array.isArray(item.sources)) && (cov_1sdiraligc().b[27][2]++, indexInSources([item], src) > -1)) {
	        cov_1sdiraligc().b[26][0]++;
	        cov_1sdiraligc().s[96]++;
	        playlist.currentIndex_ = indexInItemIds;
	        cov_1sdiraligc().s[97]++;
	        return playlist.currentIndex_;
	      } else {
	        cov_1sdiraligc().b[26][1]++;
	      } // If this does not match the current source, null it out so subsequent
	      // calls can skip this step.


	      cov_1sdiraligc().s[98]++;
	      playlist.currentPlaylistItemId_ = null;
	    } else {
	      cov_1sdiraligc().b[25][1]++;
	    } // Finally, if we don't have a valid, current playlist item ID, we can
	    // auto-detect it based on the player's current source URL.


	    cov_1sdiraligc().s[99]++;
	    playlist.currentIndex_ = playlist.indexOf(src);
	    cov_1sdiraligc().s[100]++;
	    return playlist.currentIndex_;
	  };
	  /**
	  * Checks if the playlist contains a value.
	  *
	  * @param  {string|Object|Array} value
	  *         The value to check
	  *
	  * @return {boolean}
	  *         The result
	  */


	  cov_1sdiraligc().s[101]++;

	  playlist.contains = value => {
	    cov_1sdiraligc().f[16]++;
	    cov_1sdiraligc().s[102]++;
	    return playlist.indexOf(value) !== -1;
	  };
	  /**
	  * Gets the index of a value in the playlist or -1 if not found.
	  *
	  * @param  {string|Object|Array} value
	  *         The value to find the index of
	  *
	  * @return {number}
	  *         The index or -1
	  */


	  cov_1sdiraligc().s[103]++;

	  playlist.indexOf = value => {
	    cov_1sdiraligc().f[17]++;
	    cov_1sdiraligc().s[104]++;

	    if (typeof value === 'string') {
	      cov_1sdiraligc().b[28][0]++;
	      cov_1sdiraligc().s[105]++;
	      return indexInSources(list, value);
	    } else {
	      cov_1sdiraligc().b[28][1]++;
	    }

	    const sources = (cov_1sdiraligc().s[106]++, Array.isArray(value) ? (cov_1sdiraligc().b[29][0]++, value) : (cov_1sdiraligc().b[29][1]++, value.sources));
	    cov_1sdiraligc().s[107]++;

	    for (let i = (cov_1sdiraligc().s[108]++, 0); i < sources.length; i++) {
	      const source = (cov_1sdiraligc().s[109]++, sources[i]);
	      cov_1sdiraligc().s[110]++;

	      if (typeof source === 'string') {
	        cov_1sdiraligc().b[30][0]++;
	        cov_1sdiraligc().s[111]++;
	        return indexInSources(list, source);
	      } else {
	        cov_1sdiraligc().b[30][1]++;
	        cov_1sdiraligc().s[112]++;

	        if (source.src) {
	          cov_1sdiraligc().b[31][0]++;
	          cov_1sdiraligc().s[113]++;
	          return indexInSources(list, source.src);
	        } else {
	          cov_1sdiraligc().b[31][1]++;
	        }
	      }
	    }

	    cov_1sdiraligc().s[114]++;
	    return -1;
	  };
	  /**
	  * Get the index of the current item in the playlist. This is identical to
	  * calling `currentItem()` with no arguments.
	  *
	  * @return {number}
	  *         The current item index.
	  */


	  cov_1sdiraligc().s[115]++;

	  playlist.currentIndex = () => {
	    cov_1sdiraligc().f[18]++;
	    cov_1sdiraligc().s[116]++;
	    return playlist.currentItem();
	  };
	  /**
	  * Get the index of the last item in the playlist.
	  *
	  * @return {number}
	  *         The index of the last item in the playlist or -1 if there are no
	  *         items.
	  */


	  cov_1sdiraligc().s[117]++;

	  playlist.lastIndex = () => {
	    cov_1sdiraligc().f[19]++;
	    cov_1sdiraligc().s[118]++;
	    return list.length - 1;
	  };
	  /**
	  * Get the index of the next item in the playlist.
	  *
	  * @return {number}
	  *         The index of the next item in the playlist or -1 if there is no
	  *         current item.
	  */


	  cov_1sdiraligc().s[119]++;

	  playlist.nextIndex = () => {
	    cov_1sdiraligc().f[20]++;
	    const current = (cov_1sdiraligc().s[120]++, playlist.currentItem());
	    cov_1sdiraligc().s[121]++;

	    if (current === -1) {
	      cov_1sdiraligc().b[32][0]++;
	      cov_1sdiraligc().s[122]++;
	      return -1;
	    } else {
	      cov_1sdiraligc().b[32][1]++;
	    }

	    const lastIndex = (cov_1sdiraligc().s[123]++, playlist.lastIndex()); // When repeating, loop back to the beginning on the last item.

	    cov_1sdiraligc().s[124]++;

	    if ((cov_1sdiraligc().b[34][0]++, playlist.repeat_) && (cov_1sdiraligc().b[34][1]++, current === lastIndex)) {
	      cov_1sdiraligc().b[33][0]++;
	      cov_1sdiraligc().s[125]++;
	      return 0;
	    } else {
	      cov_1sdiraligc().b[33][1]++;
	    } // Don't go past the end of the playlist.


	    cov_1sdiraligc().s[126]++;
	    return Math.min(current + 1, lastIndex);
	  };
	  /**
	  * Get the index of the previous item in the playlist.
	  *
	  * @return {number}
	  *         The index of the previous item in the playlist or -1 if there is
	  *         no current item.
	  */


	  cov_1sdiraligc().s[127]++;

	  playlist.previousIndex = () => {
	    cov_1sdiraligc().f[21]++;
	    const current = (cov_1sdiraligc().s[128]++, playlist.currentItem());
	    cov_1sdiraligc().s[129]++;

	    if (current === -1) {
	      cov_1sdiraligc().b[35][0]++;
	      cov_1sdiraligc().s[130]++;
	      return -1;
	    } else {
	      cov_1sdiraligc().b[35][1]++;
	    } // When repeating, loop back to the end of the playlist.


	    cov_1sdiraligc().s[131]++;

	    if ((cov_1sdiraligc().b[37][0]++, playlist.repeat_) && (cov_1sdiraligc().b[37][1]++, current === 0)) {
	      cov_1sdiraligc().b[36][0]++;
	      cov_1sdiraligc().s[132]++;
	      return playlist.lastIndex();
	    } else {
	      cov_1sdiraligc().b[36][1]++;
	    } // Don't go past the beginning of the playlist.


	    cov_1sdiraligc().s[133]++;
	    return Math.max(current - 1, 0);
	  };
	  /**
	  * Plays the first item in the playlist.
	  *
	  * @return {Object|undefined}
	  *         Returns undefined and has no side effects if the list is empty.
	  */


	  cov_1sdiraligc().s[134]++;

	  playlist.first = () => {
	    cov_1sdiraligc().f[22]++;
	    cov_1sdiraligc().s[135]++;

	    if (changing) {
	      cov_1sdiraligc().b[38][0]++;
	      cov_1sdiraligc().s[136]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[38][1]++;
	    }

	    const newItem = (cov_1sdiraligc().s[137]++, playlist.currentItem(0));
	    cov_1sdiraligc().s[138]++;

	    if (list.length) {
	      cov_1sdiraligc().b[39][0]++;
	      cov_1sdiraligc().s[139]++;
	      return (cov_1sdiraligc().b[40][0]++, list[newItem].originalValue) || (cov_1sdiraligc().b[40][1]++, list[newItem]);
	    } else {
	      cov_1sdiraligc().b[39][1]++;
	    }

	    cov_1sdiraligc().s[140]++;
	    playlist.currentIndex_ = -1;
	  };
	  /**
	  * Plays the last item in the playlist.
	  *
	  * @return {Object|undefined}
	  *         Returns undefined and has no side effects if the list is empty.
	  */


	  cov_1sdiraligc().s[141]++;

	  playlist.last = () => {
	    cov_1sdiraligc().f[23]++;
	    cov_1sdiraligc().s[142]++;

	    if (changing) {
	      cov_1sdiraligc().b[41][0]++;
	      cov_1sdiraligc().s[143]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[41][1]++;
	    }

	    const newItem = (cov_1sdiraligc().s[144]++, playlist.currentItem(playlist.lastIndex()));
	    cov_1sdiraligc().s[145]++;

	    if (list.length) {
	      cov_1sdiraligc().b[42][0]++;
	      cov_1sdiraligc().s[146]++;
	      return (cov_1sdiraligc().b[43][0]++, list[newItem].originalValue) || (cov_1sdiraligc().b[43][1]++, list[newItem]);
	    } else {
	      cov_1sdiraligc().b[42][1]++;
	    }

	    cov_1sdiraligc().s[147]++;
	    playlist.currentIndex_ = -1;
	  };
	  /**
	  * Plays the next item in the playlist.
	  *
	  * @return {Object|undefined}
	  *         Returns undefined and has no side effects if on last item.
	  */


	  cov_1sdiraligc().s[148]++;

	  playlist.next = () => {
	    cov_1sdiraligc().f[24]++;
	    cov_1sdiraligc().s[149]++;

	    if (changing) {
	      cov_1sdiraligc().b[44][0]++;
	      cov_1sdiraligc().s[150]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[44][1]++;
	    }

	    const index = (cov_1sdiraligc().s[151]++, playlist.nextIndex());
	    cov_1sdiraligc().s[152]++;

	    if (index !== playlist.currentIndex_) {
	      cov_1sdiraligc().b[45][0]++;
	      const newItem = (cov_1sdiraligc().s[153]++, playlist.currentItem(index));
	      cov_1sdiraligc().s[154]++;
	      return (cov_1sdiraligc().b[46][0]++, list[newItem].originalValue) || (cov_1sdiraligc().b[46][1]++, list[newItem]);
	    } else {
	      cov_1sdiraligc().b[45][1]++;
	    }
	  };
	  /**
	  * Plays the previous item in the playlist.
	  *
	  * @return {Object|undefined}
	  *         Returns undefined and has no side effects if on first item.
	  */


	  cov_1sdiraligc().s[155]++;

	  playlist.previous = () => {
	    cov_1sdiraligc().f[25]++;
	    cov_1sdiraligc().s[156]++;

	    if (changing) {
	      cov_1sdiraligc().b[47][0]++;
	      cov_1sdiraligc().s[157]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[47][1]++;
	    }

	    const index = (cov_1sdiraligc().s[158]++, playlist.previousIndex());
	    cov_1sdiraligc().s[159]++;

	    if (index !== playlist.currentIndex_) {
	      cov_1sdiraligc().b[48][0]++;
	      const newItem = (cov_1sdiraligc().s[160]++, playlist.currentItem(index));
	      cov_1sdiraligc().s[161]++;
	      return (cov_1sdiraligc().b[49][0]++, list[newItem].originalValue) || (cov_1sdiraligc().b[49][1]++, list[newItem]);
	    } else {
	      cov_1sdiraligc().b[48][1]++;
	    }
	  };
	  /**
	  * Set up auto-advance on the playlist.
	  *
	  * @param  {number} [delay]
	  *         The number of seconds to wait before each auto-advance.
	  */


	  cov_1sdiraligc().s[162]++;

	  playlist.autoadvance = delay => {
	    cov_1sdiraligc().f[26]++;
	    cov_1sdiraligc().s[163]++;
	    setup(playlist.player_, delay);
	  };
	  /**
	  * Sets `repeat` option, which makes the "next" video of the last video in
	  * the playlist be the first video in the playlist.
	  *
	  * @param  {boolean} [val]
	  *         The value to set repeat to
	  *
	  * @return {boolean}
	  *         The current value of repeat
	  */


	  cov_1sdiraligc().s[164]++;

	  playlist.repeat = val => {
	    cov_1sdiraligc().f[27]++;
	    cov_1sdiraligc().s[165]++;

	    if (val === undefined) {
	      cov_1sdiraligc().b[50][0]++;
	      cov_1sdiraligc().s[166]++;
	      return playlist.repeat_;
	    } else {
	      cov_1sdiraligc().b[50][1]++;
	    }

	    cov_1sdiraligc().s[167]++;

	    if (typeof val !== 'boolean') {
	      cov_1sdiraligc().b[51][0]++;
	      cov_1sdiraligc().s[168]++;
	      videojs__default["default"].log.error('videojs-playlist: Invalid value for repeat', val);
	      cov_1sdiraligc().s[169]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[51][1]++;
	    }

	    cov_1sdiraligc().s[170]++;
	    playlist.repeat_ = !!val;
	    cov_1sdiraligc().s[171]++;
	    return playlist.repeat_;
	  };
	  /**
	  * Sorts the playlist array.
	  *
	  * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}
	  * @fires playlistsorted
	  *
	  * @param {Function} compare
	  *        A comparator function as per the native Array method.
	  */


	  cov_1sdiraligc().s[172]++;

	  playlist.sort = compare => {
	    cov_1sdiraligc().f[28]++;
	    cov_1sdiraligc().s[173]++; // Bail if the array is empty.

	    if (!list.length) {
	      cov_1sdiraligc().b[52][0]++;
	      cov_1sdiraligc().s[174]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[52][1]++;
	    }

	    cov_1sdiraligc().s[175]++;
	    list.sort(compare); // If the playlist is changing, don't trigger events.

	    cov_1sdiraligc().s[176]++;

	    if (changing) {
	      cov_1sdiraligc().b[53][0]++;
	      cov_1sdiraligc().s[177]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[53][1]++;
	    }
	    /**
	    * Triggered after the playlist is sorted internally.
	    *
	    * @event playlistsorted
	    * @type {Object}
	    */


	    cov_1sdiraligc().s[178]++;
	    player.trigger('playlistsorted');
	  };
	  /**
	  * Reverses the playlist array.
	  *
	  * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse}
	  * @fires playlistsorted
	  */


	  cov_1sdiraligc().s[179]++;

	  playlist.reverse = () => {
	    cov_1sdiraligc().f[29]++;
	    cov_1sdiraligc().s[180]++; // Bail if the array is empty.

	    if (!list.length) {
	      cov_1sdiraligc().b[54][0]++;
	      cov_1sdiraligc().s[181]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[54][1]++;
	    }

	    cov_1sdiraligc().s[182]++;
	    list.reverse(); // If the playlist is changing, don't trigger events.

	    cov_1sdiraligc().s[183]++;

	    if (changing) {
	      cov_1sdiraligc().b[55][0]++;
	      cov_1sdiraligc().s[184]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[55][1]++;
	    }
	    /**
	    * Triggered after the playlist is sorted internally.
	    *
	    * @event playlistsorted
	    * @type {Object}
	    */


	    cov_1sdiraligc().s[185]++;
	    player.trigger('playlistsorted');
	  };
	  /**
	  * Shuffle the contents of the list randomly.
	  *
	  * @see   {@link https://github.com/lodash/lodash/blob/40e096b6d5291a025e365a0f4c010d9a0efb9a69/shuffle.js}
	  * @fires playlistsorted
	  * @todo  Make the `rest` option default to `true` in v5.0.0.
	  * @param {Object} [options]
	  *        An object containing shuffle options.
	  *
	  * @param {boolean} [options.rest = false]
	  *        By default, the entire playlist is randomized. However, this may
	  *        not be desirable in all cases, such as when a user is already
	  *        watching a video.
	  *
	  *        When `true` is passed for this option, it will only shuffle
	  *        playlist items after the current item. For example, when on the
	  *        first item, will shuffle the second item and beyond.
	  */


	  cov_1sdiraligc().s[186]++;

	  playlist.shuffle = ({
	    rest
	  } = (cov_1sdiraligc().b[56][0]++, {})) => {
	    cov_1sdiraligc().f[30]++;
	    let index = (cov_1sdiraligc().s[187]++, 0);
	    let arr = (cov_1sdiraligc().s[188]++, list); // When options.rest is true, start randomization at the item after the
	    // current item.

	    cov_1sdiraligc().s[189]++;

	    if (rest) {
	      cov_1sdiraligc().b[57][0]++;
	      cov_1sdiraligc().s[190]++;
	      index = playlist.currentIndex_ + 1;
	      cov_1sdiraligc().s[191]++;
	      arr = list.slice(index);
	    } else {
	      cov_1sdiraligc().b[57][1]++;
	    } // Bail if the array is empty or too short to shuffle.


	    cov_1sdiraligc().s[192]++;

	    if (arr.length <= 1) {
	      cov_1sdiraligc().b[58][0]++;
	      cov_1sdiraligc().s[193]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[58][1]++;
	    }

	    cov_1sdiraligc().s[194]++;
	    randomize(arr); // When options.rest is true, splice the randomized sub-array back into
	    // the original array.

	    cov_1sdiraligc().s[195]++;

	    if (rest) {
	      cov_1sdiraligc().b[59][0]++;
	      cov_1sdiraligc().s[196]++;
	      list.splice(...[index, arr.length].concat(arr));
	    } else {
	      cov_1sdiraligc().b[59][1]++;
	    } // If the playlist is changing, don't trigger events.


	    cov_1sdiraligc().s[197]++;

	    if (changing) {
	      cov_1sdiraligc().b[60][0]++;
	      cov_1sdiraligc().s[198]++;
	      return;
	    } else {
	      cov_1sdiraligc().b[60][1]++;
	    }
	    /**
	    * Triggered after the playlist is sorted internally.
	    *
	    * @event playlistsorted
	    * @type {Object}
	    */


	    cov_1sdiraligc().s[199]++;
	    player.trigger('playlistsorted');
	  }; // If an initial list was given, populate the playlist with it.


	  cov_1sdiraligc().s[200]++;

	  if (Array.isArray(initialList)) {
	    cov_1sdiraligc().b[61][0]++;
	    cov_1sdiraligc().s[201]++;
	    playlist(initialList.slice(), initialIndex); // If there is no initial list given, silently set an empty array.
	  } else {
	    cov_1sdiraligc().b[61][1]++;
	    cov_1sdiraligc().s[202]++;
	    list = [];
	  }

	  cov_1sdiraligc().s[203]++;
	  return playlist;
	}

	var version = "5.0.0";

	function cov_pmb8hjld4() {
	  var path = "/Users/abarstow/videojs/videojs-playlist/src/plugin.js";
	  var hash = "2ea5d207e377368b27020b8a5625a47f0a8d0287";
	  var global = new Function("return this")();
	  var gcv = "__coverage__";
	  var coverageData = {
	    path: "/Users/abarstow/videojs/videojs-playlist/src/plugin.js",
	    statementMap: {
	      "0": {
	        start: {
	          line: 6,
	          column: 23
	        },
	        end: {
	          line: 6,
	          column: 63
	        }
	      },
	      "1": {
	        start: {
	          line: 18,
	          column: 15
	        },
	        end: {
	          line: 20,
	          column: 1
	        }
	      },
	      "2": {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 19,
	          column: 34
	        }
	      },
	      "3": {
	        start: {
	          line: 22,
	          column: 0
	        },
	        end: {
	          line: 22,
	          column: 35
	        }
	      },
	      "4": {
	        start: {
	          line: 24,
	          column: 0
	        },
	        end: {
	          line: 24,
	          column: 25
	        }
	      }
	    },
	    fnMap: {
	      "0": {
	        name: "(anonymous_0)",
	        decl: {
	          start: {
	            line: 18,
	            column: 15
	          },
	          end: {
	            line: 18,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 36
	          },
	          end: {
	            line: 20,
	            column: 1
	          }
	        },
	        line: 18
	      }
	    },
	    branchMap: {
	      "0": {
	        loc: {
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        },
	        type: "binary-expr",
	        locations: [{
	          start: {
	            line: 6,
	            column: 23
	          },
	          end: {
	            line: 6,
	            column: 45
	          }
	        }, {
	          start: {
	            line: 6,
	            column: 49
	          },
	          end: {
	            line: 6,
	            column: 63
	          }
	        }],
	        line: 6
	      }
	    },
	    s: {
	      "0": 0,
	      "1": 0,
	      "2": 0,
	      "3": 0,
	      "4": 0
	    },
	    f: {
	      "0": 0
	    },
	    b: {
	      "0": [0, 0]
	    },
	    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
	    hash: "2ea5d207e377368b27020b8a5625a47f0a8d0287"
	  };
	  var coverage = global[gcv] || (global[gcv] = {});

	  if (!coverage[path] || coverage[path].hash !== hash) {
	    coverage[path] = coverageData;
	  }

	  var actualCoverage = coverage[path];
	  {
	    // @ts-ignore
	    cov_pmb8hjld4 = function () {
	      return actualCoverage;
	    };
	  }
	  return actualCoverage;
	}

	cov_pmb8hjld4();

	const registerPlugin = (cov_pmb8hjld4().s[0]++, (cov_pmb8hjld4().b[0][0]++, videojs__default["default"].registerPlugin) || (cov_pmb8hjld4().b[0][1]++, videojs__default["default"].plugin));
	/**
	* The video.js playlist plugin. Invokes the playlist-maker to create a
	* playlist function on the specific player.
	*
	* @param {Array} list
	*        a list of sources
	*
	* @param {number} item
	*        The index to start at
	*/

	cov_pmb8hjld4().s[1]++;

	const plugin = function (list, item) {
	  cov_pmb8hjld4().f[0]++;
	  cov_pmb8hjld4().s[2]++;
	  factory(this, list, item);
	};

	cov_pmb8hjld4().s[3]++;
	registerPlugin('playlist', plugin);
	cov_pmb8hjld4().s[4]++;
	plugin.VERSION = version;

	var _nodeResolve_empty = {};

	var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': _nodeResolve_empty
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

	var topLevel = typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : typeof window !== 'undefined' ? window : {};
	var minDoc = require$$0;
	var doccy;

	if (typeof document !== 'undefined') {
	  doccy = document;
	} else {
	  doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	  if (!doccy) {
	    doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	  }
	}

	var document_1 = doccy;

	/**
	 * Destroy a fixture player.
	 *
	 * @param  {Object} context
	 *         A testing context.
	 */

	function destroyFixturePlayer(context) {
	  context.player.dispose();
	}
	/**
	 * Create a fixture player.
	 *
	 * @param  {Object} context
	 *         A testing context.
	 */

	function createFixturePlayer(context) {
	  context.video = document_1.createElement('video');
	  context.fixture = document_1.querySelector('#qunit-fixture');
	  context.fixture.appendChild(context.video);
	  context.playerIsReady = false;
	  context.player = videojs__default["default"](context.video, {}, () => {
	    context.playerIsReady = true;
	  });
	  context.player.playlist();
	}

	const samplePlaylist = [{
	  sources: [{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://www.videojs.com/img/poster.jpg'
	}];
	QUnit__default["default"].module('current-item', {
	  beforeEach() {
	    this.clock = sinon__default["default"].useFakeTimers();
	    createFixturePlayer(this);
	  },

	  afterEach() {
	    destroyFixturePlayer(this);
	    this.clock.restore();
	  }

	}, function () {
	  QUnit__default["default"].module('without a playlist', function () {
	    QUnit__default["default"].test('player without a source', function (assert) {
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() after tech ready');
	    });
	    QUnit__default["default"].test('player with a source', function (assert) {
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'currentItem() after tech ready');
	    });
	  });
	  QUnit__default["default"].module('with a playlist', function () {
	    QUnit__default["default"].test('set new source by calling currentItem()', function (assert) {
	      this.player.playlist(samplePlaylist);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() changes the current item');
	    });
	    QUnit__default["default"].test('set a new source via src()', function (assert) {
	      this.player.playlist(samplePlaylist);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), 2, 'src() changes the current item');
	    });
	    QUnit__default["default"].test('set a new source via src() - source is NOT in the playlist', function (assert) {
	      // Populate the player with a playlist without oceans.mp4
	      this.player.playlist(samplePlaylist.slice(0, 2));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready');
	      this.player.src({
	        src: 'http://vjs.zencdn.net/v/oceans.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), -1, 'src() changes the current item');
	    });
	  });
	  QUnit__default["default"].module('duplicate sources playlist', function () {
	    QUnit__default["default"].test('set new sources by calling currentItem()', function (assert) {
	      // Populate the player with a playlist with another sintel on the end.
	      this.player.playlist(samplePlaylist.concat([{
	        sources: [{
	          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	          type: 'video/mp4'
	        }],
	        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	      }]));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready'); // Set the playlist to the last item.

	      this.player.playlist.currentItem(3);
	      assert.strictEqual(this.player.playlist.currentItem(), 3, 'currentItem() matches the duplicated item that was actually selected'); // Set the playlist back to the first item (also sintel).

	      this.player.playlist.currentItem(0);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() matches the duplicated item that was actually selected'); // Set the playlist to the second item (NOT sintel).

	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() is correct');
	    });
	    QUnit__default["default"].test('set new source by calling src()', function (assert) {
	      // Populate the player with a playlist with another sintel on the end.
	      this.player.playlist(samplePlaylist.concat([{
	        sources: [{
	          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	          type: 'video/mp4'
	        }],
	        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	      }]));
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() before tech ready'); // Tick forward to ready the playback tech.

	      this.clock.tick(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() after tech ready'); // Set the playlist to the second item (NOT sintel).

	      this.player.playlist.currentItem(1);
	      assert.strictEqual(this.player.playlist.currentItem(), 1, 'currentItem() acted as a setter');
	      this.player.src({
	        src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	        type: 'video/mp4'
	      });
	      assert.strictEqual(this.player.playlist.currentItem(), 0, 'currentItem() defaults to the first playlist item that matches the current source');
	    });
	  });
	});

	QUnit__default["default"].module('play-item');
	QUnit__default["default"].test('clearTracks will try and remove all tracks', function (assert) {
	  const player = proxy();
	  const remoteTracks = [1, 2, 3];
	  const removedTracks = [];

	  player.remoteTextTracks = function () {
	    return remoteTracks;
	  };

	  player.removeRemoteTextTrack = function (tt) {
	    removedTracks.push(tt);
	  };

	  clearTracks(player);
	  assert.deepEqual(removedTracks.sort(), remoteTracks.sort(), 'the removed tracks are equivalent to our remote tracks');
	});
	QUnit__default["default"].test('will not try to play if paused', function (assert) {
	  const player = proxy();
	  let tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not reply on paused');
	});
	QUnit__default["default"].test('will try to play if not paused', function (assert) {
	  const player = proxy();
	  let tryPlay = false;

	  player.paused = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit__default["default"].test('will not try to play if paused and not ended', function (assert) {
	  const player = proxy();
	  let tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return false;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    textTracks: [4, 5, 6],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(!tryPlay, 'we did not replaye on paused and not ended');
	});
	QUnit__default["default"].test('will try to play if paused and ended', function (assert) {
	  const player = proxy();
	  let tryPlay = false;

	  player.paused = function () {
	    return true;
	  };

	  player.ended = function () {
	    return true;
	  };

	  player.play = function () {
	    tryPlay = true;
	  };

	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.ok(tryPlay, 'we replayed on not-paused');
	});
	QUnit__default["default"].test('fires "beforeplaylistitem" and "playlistitem"', function (assert) {
	  const player = proxy();
	  const beforeSpy = sinon__default["default"].spy();
	  const spy = sinon__default["default"].spy();
	  player.on('beforeplaylistitem', beforeSpy);
	  player.on('playlistitem', spy);
	  playItem(player, {
	    sources: [1, 2, 3],
	    poster: 'http://example.com/poster.png'
	  });
	  assert.strictEqual(beforeSpy.callCount, 1);
	  assert.strictEqual(spy.callCount, 1);
	});

	const videoList = [{
	  sources: [{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://www.videojs.com/img/poster.jpg'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	}, {
	  sources: [{
	    src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	    type: 'video/mp4'
	  }],
	  poster: 'http://media.w3.org/2010/05/video/poster.png'
	}];
	QUnit__default["default"].module('playlist-maker', {
	  beforeEach() {
	    this.clock = sinon__default["default"].useFakeTimers();
	  },

	  afterEach() {
	    this.clock.restore();
	  }

	});
	QUnit__default["default"].test('playlistMaker takes a player and a list and returns a playlist', function (assert) {
	  const playlist = factory(proxy(), []);
	  assert.equal(typeof playlist, 'function', 'playlist is a function');
	  assert.equal(typeof playlist.autoadvance, 'function', 'we have a autoadvance function');
	  assert.equal(typeof playlist.currentItem, 'function', 'we have a currentItem function');
	  assert.equal(typeof playlist.first, 'function', 'we have a first function');
	  assert.equal(typeof playlist.indexOf, 'function', 'we have a indexOf function');
	  assert.equal(typeof playlist.next, 'function', 'we have a next function');
	  assert.equal(typeof playlist.previous, 'function', 'we have a previous function');
	});
	QUnit__default["default"].test('playlistMaker can either take nothing or an Array as its first argument', function (assert) {
	  const playlist1 = factory(proxy());
	  const playlist2 = factory(proxy(), 'foo');
	  const playlist3 = factory(proxy(), {
	    foo: [1, 2, 3]
	  });
	  assert.deepEqual(playlist1(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist2(), [], 'if given no initial array, default to an empty array');
	  assert.deepEqual(playlist3(), [], 'if given no initial array, default to an empty array');
	});
	QUnit__default["default"].test('playlist() is a getter and setter for the list', function (assert) {
	  const playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist(), [1, 2, 3], 'equal to input list');
	  assert.deepEqual(playlist([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], 'equal to input list, arguments ignored');
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'equal to input list');
	  const list = playlist();
	  list.unshift(10);
	  assert.deepEqual(playlist(), [1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	  assert.notDeepEqual(playlist(), [10, 1, 2, 3, 4, 5], 'changing the list did not affect the playlist');
	});
	QUnit__default["default"].test('playlist() should only accept an Array as a new playlist', function (assert) {
	  const playlist = factory(proxy(), [1, 2, 3]);
	  assert.deepEqual(playlist('foo'), [1, 2, 3], 'when given "foo", it should be treated as a getter');
	  assert.deepEqual(playlist({
	    foo: [1, 2, 3]
	  }), [1, 2, 3], 'when given {foo: [1,2,3]}, it should be treated as a getter');
	});
	QUnit__default["default"].test('playlist.currentItem() works as expected', function (assert) {
	  const player = proxy();
	  const playlist = factory(player, videoList);
	  let src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'begin at the first item, item 0');
	  assert.equal(playlist.currentItem(2), 2, 'setting to item 2 gives us back the new item index');
	  assert.equal(playlist.currentItem(), 2, 'the current item is now 2');
	  assert.equal(playlist.currentItem(5), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(-1), 2, 'cannot change to an out-of-bounds item');
	  assert.equal(playlist.currentItem(null), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(NaN), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(Infinity), 2, 'cannot change to an invalid item');
	  assert.equal(playlist.currentItem(-Infinity), 2, 'cannot change to an invalid item');
	});
	QUnit__default["default"].test('playlist.currentItem() returns -1 with an empty playlist', function (assert) {
	  const playlist = factory(proxy(), []);
	  assert.equal(playlist.currentItem(), -1, 'we should get a -1 with an empty playlist');
	});
	QUnit__default["default"].test('playlist.currentItem() does not change items if same index is given', function (assert) {
	  const player = proxy();
	  let sources = 0;
	  let src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }

	    sources++;
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  const playlist = factory(player, videoList);
	  assert.equal(sources, 1, 'we switched to the first playlist item');
	  sources = 0;
	  assert.equal(playlist.currentItem(), 0, 'we start at index 0');
	  playlist.currentItem(0);
	  assert.equal(sources, 0, 'we did not try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did try to set sources');
	  playlist.currentItem(1);
	  assert.equal(sources, 1, 'we did not try to set sources');
	});
	QUnit__default["default"].test('playlistMaker accepts a starting index', function (assert) {
	  const player = proxy();
	  let src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  const playlist = factory(player, videoList, 1);
	  assert.equal(playlist.currentItem(), 1, 'if given an initial index, load that video');
	});
	QUnit__default["default"].test('playlistMaker accepts a starting index', function (assert) {
	  const player = proxy();
	  let src;

	  player.src = function (s) {
	    if (s) {
	      if (typeof s === 'string') {
	        src = s;
	      } else if (Array.isArray(s)) {
	        return player.src(s[0]);
	      } else {
	        return player.src(s.src);
	      }
	    }
	  };

	  player.currentSrc = function () {
	    return src;
	  };

	  const playlist = factory(player, videoList, -1);
	  assert.equal(playlist.currentItem(), -1, 'if given -1 as initial index, load no video');
	});
	QUnit__default["default"].test('playlist.contains() works as expected', function (assert) {
	  const player = proxy();
	  const playlist = factory(player, videoList);
	  player.playlist = playlist;
	  assert.ok(playlist.contains('http://media.w3.org/2010/05/sintel/trailer.mp4'), 'we can ask whether it contains a source string');
	  assert.ok(playlist.contains(['http://media.w3.org/2010/05/sintel/trailer.mp4']), 'we can ask whether it contains a sources list of strings');
	  assert.ok(playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	    type: 'video/mp4'
	  }]), 'we can ask whether it contains a sources list of objects');
	  assert.ok(playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/trailer.mp4']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }]
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains('http://media.w3.org/2010/05/sintel/poster.png'), 'we get false for a non-existent source string');
	  assert.ok(!playlist.contains(['http://media.w3.org/2010/05/sintel/poster.png']), 'we get false for a non-existent source list of strings');
	  assert.ok(!playlist.contains([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), 'we get false for a non-existent source list of objects');
	  assert.ok(!playlist.contains({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), 'we can ask whether it contains a playlist item');
	  assert.ok(!playlist.contains({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), 'we get false for a non-existent playlist item');
	});
	QUnit__default["default"].test('playlist.indexOf() works as expected', function (assert) {
	  const player = proxy();
	  const playlist = factory(player, videoList);
	  const mixedSourcesPlaylist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }]);
	  player.playlist = playlist;
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item');
	  assert.equal(playlist.indexOf('//media.w3.org/2010/05/sintel/trailer.mp4'), 0, 'sintel trailer is first item, protocol-relative url considered equal');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/bunny/trailer.mp4']), 1, 'bunny trailer is second item');
	  assert.equal(playlist.indexOf([{
	    src: 'http://vjs.zencdn.net/v/oceans.mp4',
	    type: 'video/mp4'
	  }]), 2, 'oceans is third item');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/bunny/movie.mp4']
	  }), 3, 'bunny movie is fourth item');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
	      type: 'video/mp4'
	    }]
	  }), 4, 'timer video is fifth item');
	  assert.equal(playlist.indexOf('http://media.w3.org/2010/05/sintel/poster.png'), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf(['http://media.w3.org/2010/05/sintel/poster.png']), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf([{
	    src: 'http://media.w3.org/2010/05/sintel/poster.png',
	    type: 'video/mp4'
	  }]), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: ['http://media.w3.org/2010/05/sintel/poster.png']
	  }), -1, 'poster.png does not exist');
	  assert.equal(playlist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/poster.png',
	      type: 'video/mp4'
	    }]
	  }), -1, 'poster.png does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/bunny/movie',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), -1, 'bunny movie does not exist');
	  assert.equal(mixedSourcesPlaylist.indexOf({
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }, {
	      app_name: 'rtmp://example.com/sintel/trailer',
	      // eslint-disable-line
	      avg_bitrate: 4255000,
	      // eslint-disable-line
	      codec: 'H264',
	      container: 'MP4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }), 0, 'sintel trailer does exist');
	});
	QUnit__default["default"].test('playlist.nextIndex() works as expected', function (assert) {
	  const playlist = factory(proxy(), []);
	  assert.equal(playlist.nextIndex(), -1, 'the next index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = () => 0;

	  assert.equal(playlist.nextIndex(), 1, 'the next index was 1');

	  playlist.currentItem = () => 1;

	  assert.equal(playlist.nextIndex(), 2, 'the next index was 2');

	  playlist.currentItem = () => 2;

	  assert.equal(playlist.nextIndex(), 2, 'the next index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.nextIndex(), 0, 'the next index was now 0 because the playlist repeats');
	});
	QUnit__default["default"].test('playlist.previousIndex() works as expected', function (assert) {
	  const playlist = factory(proxy(), []);
	  assert.equal(playlist.previousIndex(), -1, 'the previous index was -1 for an empty list');
	  playlist([1, 2, 3]);

	  playlist.currentItem = () => 2;

	  assert.equal(playlist.previousIndex(), 1, 'the previous index was 1');

	  playlist.currentItem = () => 1;

	  assert.equal(playlist.previousIndex(), 0, 'the previous index was 0');

	  playlist.currentItem = () => 0;

	  assert.equal(playlist.previousIndex(), 0, 'the previous index did not change because the playlist does not repeat');
	  playlist.repeat(true);
	  assert.equal(playlist.previousIndex(), 2, 'the previous index was now 2 because the playlist repeats');
	});
	QUnit__default["default"].test('playlist.lastIndex() works as expected', function (assert) {
	  const playlist = factory(proxy(), []);
	  assert.equal(playlist.lastIndex(), -1, 'the last index was -1 for an empty list');
	  playlist([1, 2, 3]);
	  assert.equal(playlist.lastIndex(), 2, 'the last index was 2');
	});
	QUnit__default["default"].test('playlist.next() works as expected', function (assert) {
	  const player = proxy();
	  const playlist = factory(player, videoList);
	  let src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.deepEqual(playlist.next(), videoList[1], 'we get back the value of currentItem 2');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are now on item 1');
	  assert.deepEqual(playlist.next(), videoList[2], 'we get back the value of currentItem 3');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are now on item 2');
	  src = videoList[4].sources[0].src;
	  assert.equal(playlist.currentItem(4), 4, 'we are now on item 4');
	  assert.equal(typeof playlist.next(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit__default["default"].test('playlist.previous() works as expected', function (assert) {
	  const player = proxy();
	  const playlist = factory(player, videoList);
	  let src;

	  player.currentSrc = function () {
	    return src;
	  };

	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we start on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	  src = videoList[2].sources[0].src;
	  assert.equal(playlist.currentItem(), 2, 'we are on item 2');
	  assert.deepEqual(playlist.previous(), videoList[1], 'we get back value of currentItem 1');
	  src = videoList[1].sources[0].src;
	  assert.equal(playlist.currentItem(), 1, 'we are on item 1');
	  assert.deepEqual(playlist.previous(), videoList[0], 'we get back value of currentItem 0');
	  src = videoList[0].sources[0].src;
	  assert.equal(playlist.currentItem(), 0, 'we are on item 0');
	  assert.equal(typeof playlist.previous(), 'undefined', 'we get nothing back if we try to go out of bounds');
	});
	QUnit__default["default"].test('loading a non-playlist video will cancel autoadvance and set index of -1', function (assert) {
	  const oldReset = reset;
	  const player = proxy();
	  const playlist = factory(player, [{
	    sources: [{
	      src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/sintel/poster.png'
	  }, {
	    sources: [{
	      src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
	      type: 'video/mp4'
	    }],
	    poster: 'http://media.w3.org/2010/05/bunny/poster.png'
	  }]);

	  player.currentSrc = function () {
	    return 'http://vjs.zencdn.net/v/oceans.mp4';
	  };

	  setReset_(function () {
	    assert.ok(true, 'autoadvance.reset was called');
	  });
	  player.trigger('loadstart');
	  assert.equal(playlist.currentItem(), -1, 'new currentItem is -1');

	  player.currentSrc = function () {
	    return 'http://media.w3.org/2010/05/sintel/trailer.mp4';
	  };

	  setReset_(function () {
	    assert.ok(false, 'autoadvance.reset should not be called');
	  });
	  player.trigger('loadstart');
	  setReset_(oldReset);
	});
	QUnit__default["default"].test('when loading a new playlist, trigger "duringplaylistchange" on the player', function (assert) {
	  const done = assert.async();
	  const player = proxy();
	  const playlist = factory(player, [1, 2, 3], 1);
	  player.on('duringplaylistchange', e => {
	    assert.strictEqual(e.type, 'duringplaylistchange', 'the event object had the correct "type" property');
	    assert.strictEqual(e.previousIndex, 1, 'the event object had the correct "previousIndex" property');
	    assert.deepEqual(e.previousPlaylist, [1, 2, 3], 'the event object had the correct "previousPlaylist" property');
	    assert.strictEqual(e.nextIndex, 0, 'the event object had the correct "nextIndex" property');
	    assert.deepEqual(e.nextPlaylist, [4, 5, 6], 'the event object had the correct "nextPlaylist" property');
	    assert.throws(() => {
	      playlist([1, 2, 3]);
	    }, Error, 'cannot set a new playlist during a change');
	    const spy = sinon__default["default"].spy();
	    player.on('playlistsorted', spy);
	    playlist.sort();
	    playlist.reverse();
	    playlist.shuffle();
	    assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event never fired');
	    playlist.currentItem(2);
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.next();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.previous();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.first();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    playlist.last();
	    assert.strictEqual(playlist.currentItem(), 1, 'the playlist current item could not be changed');
	    done();
	  });
	  playlist([4, 5, 6]);
	});
	QUnit__default["default"].test('when loading a new playlist, trigger "playlistchange" on the player', function (assert) {
	  const spy = sinon__default["default"].spy();
	  const player = proxy();
	  player.on('playlistchange', spy);
	  const playlist = factory(player, [1, 2, 3]);
	  playlist([4, 5, 6]);
	  this.clock.tick(1);
	  assert.strictEqual(spy.callCount, 1);
	  assert.strictEqual(spy.firstCall.args[0].type, 'playlistchange');
	});
	QUnit__default["default"].test('"duringplaylistchange" and "playlistchange" on first call without an initial list', function (assert) {
	  const changeSpy = sinon__default["default"].spy();
	  const duringSpy = sinon__default["default"].spy();
	  const player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  const playlist = factory(player);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 0, 'on initial call, the "duringplaylistchange" event did not fire');
	  playlist([1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit__default["default"].test('"duringplaylistchange" and "playlistchange" on first call with an initial list', function (assert) {
	  const changeSpy = sinon__default["default"].spy();
	  const duringSpy = sinon__default["default"].spy();
	  const player = proxy();
	  player.on('playlistchange', changeSpy);
	  player.on('duringplaylistchange', duringSpy);
	  const playlist = factory(player, [1]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 0, 'on initial call, the "playlistchange" event did not fire');
	  assert.strictEqual(duringSpy.callCount, 1, 'on initial call, the "duringplaylistchange" event did fire');
	  playlist([2]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 1, 'on second call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 2, 'on second call, the "duringplaylistchange" event did fire');
	  playlist([3]);
	  this.clock.tick(1);
	  assert.strictEqual(changeSpy.callCount, 2, 'on third call, the "playlistchange" event did fire');
	  assert.strictEqual(duringSpy.callCount, 3, 'on third call, the "duringplaylistchange" event did fire');
	});
	QUnit__default["default"].test('playlist.sort() works as expected', function (assert) {
	  const player = proxy();
	  const spy = sinon__default["default"].spy();
	  player.on('playlistsorted', spy);
	  const playlist = factory(player, []);
	  playlist.sort();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([4, 2, 1, 3]);
	  playlist.sort();
	  assert.deepEqual(playlist(), [1, 2, 3, 4], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.sort((a, b) => b - a);
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is sorted per default sort behavior');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	});
	QUnit__default["default"].test('playlist.reverse() works as expected', function (assert) {
	  const player = proxy();
	  const spy = sinon__default["default"].spy();
	  player.on('playlistsorted', spy);
	  const playlist = factory(player, []);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.reverse();
	  assert.deepEqual(playlist(), [4, 3, 2, 1], 'playlist is reversed');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit__default["default"].test('playlist.shuffle() works as expected', function (assert) {
	  const player = proxy();
	  const spy = sinon__default["default"].spy();
	  player.on('playlistsorted', spy);
	  const playlist = factory(player, []);
	  playlist.shuffle();
	  assert.deepEqual(playlist(), [], 'playlist did not change because it is empty');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event did not trigger');
	  playlist([1, 2, 3, 4]);
	  playlist.shuffle();
	  const list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	});
	QUnit__default["default"].test('playlist.shuffle({rest: true}) works as expected', function (assert) {
	  const player = proxy();
	  const spy = sinon__default["default"].spy();
	  player.on('playlistsorted', spy);
	  const playlist = factory(player, [1, 2, 3, 4]);
	  playlist.currentIndex_ = 3;
	  playlist.shuffle({
	    rest: true
	  });
	  let list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 2;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.deepEqual(list, [1, 2, 3, 4], 'playlist is unchanged because the second-to-last item is selected');
	  assert.strictEqual(spy.callCount, 0, 'the "playlistsorted" event was not triggered');
	  playlist.currentIndex_ = 1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.strictEqual(list.indexOf(2), 1, '2 is the second item in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 1, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = 0;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.strictEqual(list.indexOf(1), 0, '1 is the first item in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 2, 'the "playlistsorted" event triggered');
	  playlist.currentIndex_ = -1;
	  playlist.shuffle({
	    rest: true
	  });
	  list = playlist();
	  assert.strictEqual(list.length, 4, 'playlist is the correct length');
	  assert.notStrictEqual(list.indexOf(1), -1, '1 is in the list');
	  assert.notStrictEqual(list.indexOf(2), -1, '2 is in the list');
	  assert.notStrictEqual(list.indexOf(3), -1, '3 is in the list');
	  assert.notStrictEqual(list.indexOf(4), -1, '4 is in the list');
	  assert.strictEqual(spy.callCount, 3, 'the "playlistsorted" event triggered');
	});

	QUnit__default["default"].test('the environment is sane', function (assert) {
	  assert.strictEqual(typeof Array.isArray, 'function', 'es5 exists');
	  assert.strictEqual(typeof sinon__default["default"], 'object', 'sinon exists');
	  assert.strictEqual(typeof videojs__default["default"], 'function', 'videojs exists');
	  assert.strictEqual(typeof plugin, 'function', 'plugin is a function');
	});
	QUnit__default["default"].test('registers itself with video.js', function (assert) {
	  assert.expect(1);
	  assert.strictEqual(typeof videojs__default["default"].getComponent('Player').prototype.playlist, 'function', 'videojs-playlist plugin was registered');
	});

})(QUnit, sinon, videojs);
