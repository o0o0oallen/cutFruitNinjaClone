window.__require = function e(t, i, n) {
	function o(c, s) {
		if (!i[c]) {
			if (!t[c]) {
				var r = c.split("/");
				if (r = r[r.length - 1], !t[r]) {
					var l = "function" == typeof __require && __require;
					if (!s && l) return l(r, !0);
					if (a) return a(r, !0);
					throw new Error("Cannot find module '" + c + "'")
				}
				c = r
			}
			var d = i[c] = {
				exports: {}
			};
			t[c][0].call(d.exports, function (e) {
				return o(t[c][1][e] || e)
			}, d, d.exports, e, t, i, n)
		}
		return i[c].exports
	}
	for (var a = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
	return o
}({
	ADManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "c5bdcJWLCFGUZjmtFVQ5fAp", "ADManager");
		var n = e("Common"),
			o = (e("AudioManager"), e("JSNativeBridge"), cc.Class({
				extends: cc.Component,
				properties: {},
				statics: {
					_init: null,
					VIDEO_AD_TYPE_UNLOCK: 1,
					VIDEO_AD_TYPE_ADDWEAPON: 2,
					VIDEO_AD_TYPE_RESET: 3,
					VIDEO_AD_TYPE_GETCOIN: 4,
					VIDEO_AD_TYPE_EXPERIENCE: 5,
					VIDEO_AD_TYPE_SHOOTAGAIN: 6,
					DoubleCoin: 7,
					luckBox: 8,
					videoExpGainSkin: 9,
					videoGainSkin: 10,
					videoRoll: 11
				},
				onLoad: function () {
					o._init = this, o._init.initVideoAd(), o._init.unlockCallback = null, o._init.addWeaponCallback = null, o._init.resetCallback = null, o._init.getCoinCallback = null, o._init.experienceCallback = null, o._init.shootAgainCallback = null, o._init.DoubleCoinCallBack = null, o._init.videoExpGainSkinCallBack = null, o._init.videoGainSkinCallBack = null, o._init.videoRollCallBack = null, o._init.videoCallBack = null
				},
				start: function () { },
				initVideoAd: function () { },
				videoAdCallback: function () {
					switch (n.videoAdType) {
						case o.VIDEO_AD_TYPE_UNLOCK:
							o._init.unlockCallback instanceof Function ? o._init.unlockCallback() : console.error("unlockCallback not a function");
							break;
						case o.VIDEO_AD_TYPE_ADDWEAPON:
							o._init.addWeaponCallback instanceof Function ? o._init.addWeaponCallback() : console.error("addWeaponCallback not a function");
							break;
						case o.VIDEO_AD_TYPE_RESET:
							o._init.resetCallback instanceof Function ? o._init.resetCallback() : console.error("resetCallback not a function");
							break;
						case o.VIDEO_AD_TYPE_GETCOIN:
							o._init.getCoinCallback instanceof Function ? o._init.getCoinCallback() : console.error("getCoinCallback not a function");
							break;
						case o.VIDEO_AD_TYPE_EXPERIENCE:
							o._init.experienceCallback instanceof Function ? o._init.experienceCallback() : console.error("experienceCallback not a function");
							break;
						case o.VIDEO_AD_TYPE_SHOOTAGAIN:
							o._init.shootAgainCallback instanceof Function ? o._init.shootAgainCallback() : console.error("shootAgainCallback not a function");
							break;
						case o.DoubleCoin:
							o._init.DoubleCoinCallBack instanceof Function ? o._init.DoubleCoinCallBack() : console.error("Double Coin is not a function");
							break;
						case o.luckBox:
							o._init.luckBoxCallBack instanceof Function ? o._init.luckBoxCallBack() : console.error("luckBox is not a function");
							break;
						case o.videoExpGainSkin:
							o._init.videoExpGainSkinCallBack instanceof Function ? o._init.videoExpGainSkinCallBack() : console.error("videoExpGainSkinCallBack is not a function");
							break;
						case o.videoGainSkin:
							o._init.videoGainSkinCallBack instanceof Function ? o._init.videoGainSkinCallBack() : console.error("videoGainSkinCallBack is not a function");
							break;
						case o.videoRoll:
							o._init.videoRollCallBack instanceof Function ? o._init.videoRollCallBack() : console.error("videoRollCallBack is not a function");
							break;
						default:
							o._init.videoCallBack instanceof Function ? o._init.videoCallBack() : console.error("videoRollCallBack is not a function"), console.log("ceshi")
					}
				},
				clickVideo: function () {
					n.videoAdType = ad.videoRoll, ad._init.videoAd.show()
				},
				videoReward: function () {
					ad._init.videoRollCallBack = function () { }, ad._init.videoAd || ad._init.initVideoAd()
				},
				update: function (e) { }
			}));
		cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		JSNativeBridge: "JSNativeBridge"
	}],
	AddBtnView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "0b363hYrphA6Lh4+oWttDsm", "AddBtnView"), cc.Class({
			extends: cc.Component,
			properties: {
				addLabel: cc.Label
			},
			onLoad: function () {
				this.scaleToAction = cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.2), cc.scaleTo(.5, 1))), this.btn = this.node.getComponent(cc.Button)
			},
			onEnable: function () {
				this.node.on("runAction", this.runAction, this), this.node.on("stopAction", this.stopAction, this)
			},
			start: function () {
				this.runAction()
			},
			runAction: function () {
				this.btn.enabled = !0, this.node.stopAllActions(), this.node.runAction(this.scaleToAction), this.addLabel.string = "\u70b9\u51fb\u83b7\u53d6"
			},
			stopAction: function () {
				this.btn.enabled = !1, this.node.stopAllActions(), this.addLabel.string = "\u4f53\u9a8c\u4e2d"
			}
		}), cc._RF.pop()
	}, {}],
	AddToMinProgramBtnView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "b9d95hYscBIpZNzcJdnvJvT", "AddToMinProgramBtnView"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				this.doAdapter()
			},
			start: function () {
				this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.5, cc.v2(15, 0)), cc.moveBy(.5, cc.v2(-15, 0)))))
			},
			doAdapter: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = this,
						t = (wx.getSystemInfoSync().windowHeight, wx.getSystemInfoSync().windowWidth),
						i = cc.view.getVisibleSize().height,
						n = cc.view.getVisibleSize().width,
						o = n / 2 - 120 * n / t - this.node.width * this.node.scale * this.node.parent.scale / 2;
					console.log(o), this.node.x = o;
					var a = i / n,
						c = this.node.getComponent(cc.Widget);
					c.isAlignTop = !0, wx.getSystemInfo({
						success: function (t) {
							console.log(t);
							var i = new RegExp("iPhone"),
								n = new RegExp("iPhone4S"),
								o = new RegExp("iPhone8");
							console.log(t.model.match(i)), t.model.match(i) && a > 1.9 ? c.top = 75 : t.model.match(n) ? c.top = 40 : t.model.match(o) ? c.top = 5 : c.top = a < 1.5 ? 10 : a > 1.9 ? 25 : 20, console.log("what is the phone", t.model), console.log("what is the width.top", c.top), console.log(e.node.position)
						}
					})
				}
			}
		}), cc._RF.pop()
	}, {}],
	AudioManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "5d268uPdfdFkpKpIpEjSy/R", "AudioManager");
		var n = e("Common"),
			o = cc.Class({
				extends: cc.Component,
				properties: {
					audioClips: {
						default: [],
						type: [cc.AudioClip]
					}
				},
				statics: {
					_instance: null
				},
				onLoad: function () {
					o._instance = this
				},
				resume: function () {
					var e = cc.sys.__audioSupport.context;
					"interrupted" === e.state && e.resume()
				},
				play_clickBtn: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[0], !1, 1)
				},
				play_flyKnife: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[1], !1, 1)
				},
				play_fruit: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[2], !1, 1)
				},
				play_win: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[3], !1, 1)
				},
				play_miss: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[4], !1, 1)
				},
				play_getCoin: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[5], !1, 1)
				},
				play_good: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[6], !1, 1)
				},
				play_cool: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[7], !1, 1)
				},
				play_great: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[8], !1, 1)
				},
				play_excellent: function () {
					n.voiceon_off && cc.audioEngine.playEffect(this.audioClips[9], !1, 1)
				}
			});
		cc._RF.pop()
	}, {
		Common: "Common"
	}],
	ChangeView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "642f6aBW9xNKYBY1zsqkAXq", "ChangeView");
		var n = e("Common"),
			o = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				moreGameSprite: cc.Sprite,
				moreGameBox: cc.Node
			},
			onLoad: function () {
				this.timer = 0, this.count = 0;
				var e = this;
				cc.loader.loadRes("texture/more/1", cc.SpriteFrame, function (t, i) {
					t ? cc.error(t.message || t) : e.moreGameSprite.spriteFrame = i
				}), this.moreBtn = this.moreGameBox.getComponent(cc.Button)
			},
			start: function () {
				this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(.9, 15), cc.rotateTo(.9, -15))))
			},
			update: function (e) {
				0 !== n.moreGames.length && (this.timer += e, this.timer > 3 && (this.timer = 0, this.count++, this.moreGameSprite.spriteFrame = n.moreGames[this.count % n.moreGames.length]))
			},
			toMore: function () {
				n.hideBannerAd(), cc.director.emit("gameBoxShow", {
					appid: n.appIdArr[this.count % n.appIdArr.length]
				}), console.log("apppid>>>", n.appIdArr[this.count % n.appIdArr.length]), o._instance.play_clickBtn()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common"
	}],
	Common: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "5b215iQ7aZDtoxbqPNu4EPa", "Common");
		var n = e("../WyMiniGame");
		t.exports = {
			onLine: !1,
			isShowLose: !1,
			isShowWin: !1,
			showWinLp: 0,
			shareLpCallBack: null,
			watchVideoLock: [3, 3, 3, 3, 3],
			watchVideoGainSkin: [0, 0, 0, 0, 0],
			expTime: 0,
			expThree: !1,
			curItemsIdx: 0,
			curItemsArr: [],
			signCount: 0,
			signTime: 0,
			signWeek: 0,
			signMoney: [100, 200, 300, 400, 500, 600, 700],
			isSign: !1,
			totals: [4, 5, 7, 9, 8, 10, 5, 8, 8, 6, 12, 9, 13, 6, 5, 10, 14, 6, 15, 6, 6, 9, 9, 9, 9, 6, 10, 9, 5, 7, 7, 7, 7, 7, 7, 7, 4, 4, 4, 5, 5, 5, 9, 9, 5, 6, 14, 10],
			curMoney: 0,
			qianDaoCount: 0,
			oneKnife: 0,
			isShare: 0,
			onceAgain: 0,
			isHideGame: !1,
			isWatchVideo: !1,
			qianDaoBiaoQian: 0,
			isLoadBannerAd: !1,
			curWeaponIdx: 0,
			addWeaponCount: 0,
			resetCount: 0,
			isShareLpSuccess: 0,
			startjs: null,
			menuOpenTurn: !1,
			menuOpenXianDing: !1,
			voiceon_off: !0,
			isAddWeapon: !1,
			isExperience: !1,
			experienceCount: 0,
			showWhichPrefab: 0,
			res: null,
			xigua: !1,
			waterMelonCount: 0,
			appleCount: 0,
			lemonCount: 0,
			orangeCount: 0,
			boLuoCount: 0,
			missionTime: 0,
			watchVideoTime: 0,
			randomMission: 0,
			LpCount: 0,
			buySkin: 0,
			reliveCount: 0,
			rewardArrar: [0, 0, 0, 0, 0, 0],
			interstitialAd: null,
			isLoadAnotherBannerAd: !1,
			anotherBannerAd: null,
			appIdArr: ["wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c", "wx81ca6eefc75f9a0e", "wx77296317fcad8126", "wx4e436e3404287175", "wx4443d8e37ed71c72", "wxd7984673a9c88bd9"],
			iosAppid: ["wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c", "wx81ca6eefc75f9a0e", "wx77296317fcad8126", "wx4e436e3404287175", "wx4443d8e37ed71c72", "wxd7984673a9c88bd9"],
			moreIdx: 0,
			moreGameList: [],
			moreGames: [],
			iosmoreGames: [],
			shares: ["\u767e\u79cd\u6c34\u679c\u7684\u738b\u8005\u5207\u6cd5\uff0c\u4f60\u77e5\u9053\u5417\uff1f", "\u5feb\u6765\u8bd5\u8bd5\u4f60\u4e00\u5200\u80fd\u5207\u591a\u5c11\u6c34\u679c\u5427\uff01", "\u592a\u571f\u8c6a\u4e86\uff0c\u7eaf\u91d1\u4e09\u5200\u98de\u5207\u6c34\u679c\u7684\u573a\u9762\u4f60\u89c1\u8fc7\u6ca1\uff1f", "\u6709\u4eba@\u4f60\uff0c\u5168\u65b0\u6c34\u679c\u98de\u5200\u53f2\u8bd7\u76ae\u80a4\u514d\u8d39\u9886\u53d6\u5566\uff01"],
			videoAdType: 0,
			videoAdisLoad: !1,
			isAndroid: !1,
			audit_ver: !1,
			isLoadPicSuccess: !1,
			doAdapter: function (e) { },
			doAccount: function (e) {
				isNaN(this.money) || isNaN(e) || (this.money = parseInt(this.money) + parseInt(e), new Number("1"), new Number("2"), cc.sys.localStorage.setItem("money", this.money))
			},
			submitTopLv: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && wx.setUserCloudStorage ? window.wx.postMessage({
					messageType: 3,
					MAIN_MENU_NUM: "r1",
					score: this.topLvIdx
				}) : cc.log("\u63d0\u4ea4\u6700\u9ad8\u7b49\u7ea7: r1 : " + this.topLvIdx)
			},
			wechatShare: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = Math.floor(Math.random() * this.shares.length),
						t = this.shares[e];
					wx.shareAppMessage({
						title: t,
						imageUrl: cc.url.raw("resources/share/share" + e + ".jpg"),
						success: function (e) {
							console.log("\u6210\u529f")
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			wechatGroupShare: function () {
				var e = this;
				return new Promise(function (t, i) {
					if (cc.sys.platform === cc.sys.WECHAT_GAME) {
						var n = !1,
							o = Math.floor(Math.random() * e.shares.length),
							a = e.shares[o];
						wx.shareAppMessage({
							title: a,
							imageUrl: wxDownloader.REMOTE_SERVER_ROOT + cc.url.raw("resources/share/share" + o + ".jpg"),
							success: function (e) {
								void 0 != e.shareTickets && e.shareTickets.length > 0 && t(), console.log("\u6210\u529f")
							},
							fail: function (e) {
								i(), console.log("\u5931\u8d25")
							},
							complete: function () {
								n = !0
							}
						}), e.isHightVersion && setTimeout(function () {
							n || t()
						}, 2300)
					} else t()
				})
			},
			wechatInitMoreGame: function (e) {
				var t = this;
				cc.sys.platform === cc.sys.WECHAT_GAME && (t.getSystem(), cc.loader.loadResDir("texture/more", cc.SpriteFrame, function (e, i, n) {
					if (e) return console.log(e);
					cc.log(i), t.moreGames = i.sort(function (e, t) {
						return parseInt(e.name) - parseInt(t.name)
					})
				}), wx.request({
					url: "https://www.7cgames.cn/GameRes/fangyipengDir/7CGamesBoxWX/QRCode/WXGamesCode.json",
					headers: {
						"Content-Type": "application/json"
					},
					success: function (i) {
						t.moreGameList = i.data.data, e instanceof Function && e()
					}
				}))
			},
			wechatShowMoreGame: function (e) {
				var t = !1;
				e || (e = "wx361c9e49bd9033ca", t = !0), cc.sys.platform === cc.sys.WECHAT_GAME && (wx.navigateToMiniProgram ? this.isAndroid || !t ? wx.navigateToMiniProgram({
					appId: e,
					path: "",
					extarData: {
						AppID: e
					},
					success: function (e) {
						console.log("\u6253\u5f00\u6210\u529f")
					}
				}) : this.previewMoreImage() : wx.previewImage && this.previewMoreImage())
			},
			previewMoreImage: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					this.moreGameList ? wx.previewImage({
						urls: [this.moreGameList[this.moreIdx % this.moreGameList.length].QRCode]
					}) : this.wechatInitMoreGame(this.previewMoreImage.bind(this)), this.moreIdx++
				}
			},
			getSystem: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = this;
					wx.getSystemInfo({
						success: function (t) {
							console.log(t);
							var i = new RegExp("iOS");
							console.log(t.system.match(i)), t.system.match(i) || (e.isAndroid = !0)
						}
					})
				}
			},
			loadBannerAd: function () {
				var e = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME && tt.createBannerAd) {
					var t = tt.getSystemInfoSync().windowWidth,
						i = tt.getSystemInfoSync().windowHeight;
					tt.getSystemInfo({
						success: function (t) {
							"XiGua" == t.appName && (e.xigua = !0)
						}
					});
					this.bannerAd = wx.createBannerAd({
						adUnitId: "9rbkb7pcpbr38384c0",
						style: {
							width: 200
						}
					}), this.bannerAd.onResize(function (n) {
						0 == n.height ? n.height = 108 : n.height < 40 && e.xigua && (n.height = 110), i / t > 2.05 && "iOS" == cc.sys.os ? 0 == e.isLoadBannerAd && (e.bannerAd.style.top = i - n.height - 30, e.bannerAd.style.left = (t - n.width) / 2, e.isLoadBannerAd = !0) : 0 == e.isLoadBannerAd && (e.bannerAd.style.top = i - n.height, e.bannerAd.style.left = (t - n.width) / 2, e.isLoadBannerAd = !0)
					}), this.bannerAd.onError(function (e) {
						console.log(e)
					})
				}
				console.log("\u5bfc\u5165\u5e7f\u544a")
			},
			showBannerAd: function () {
				n.showBanner()
			},
			loadOnline: function () {
				var e = this;
				cc.sys.platform === cc.sys.WECHAT_GAME && wx.request({
					url: "https://www.7cgames.cn/tongquApi/newFunctionManage?platform=tt&appId=tt22aa5417bd80c8e6&version=1.2.4",
					headers: {
						"Content-Type": "application/json"
					},
					success: function (t) {
						e.onLine = t.data.data.display, console.log("\u6570\u636e", e.onLine)
					}
				})
			},
			showInter: function () {
				n.showInterstitial()
			},
			hideBannerAd: function () {
				n.hideBanner()
			},
			getImgBase64: function () {
				var e = new Image;
				e.crossOrigin = "", e.src = cc.url.raw("resources/share/share3.jpg");
				var t = document.createElement("canvas");
				return t.width = width || e.width, t.height = height || e.height, t.getContext("2d").drawImage(e, 0, 0, t.width, t.height), t.toDataURL()
			}
		}, cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame"
	}],
	DataManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "7f44eyJdY9NV6bQ660TNr+k", "DataManager");
		var n = e("Common"),
			o = e("SkinManager"),
			a = e("../../GameBox/exported-gameBox/script/WeChatFileSystem").init;
		cc.Class({
			extends: cc.Component,
			properties: {
				signPnl: cc.Node,
				rewardButton: cc.Node,
				shareButton: cc.Node,
				videoButton: cc.Node,
				alreadyButton: [cc.Node],
				sevenDay: [cc.Node],
				todayAlreadyClime: cc.Node
			},
			signManager: function () {
				if (n.signTime > this.zeroTime && n.signTime < this.zeroTime + 864e5 - 100) {
					console.log("\u5f53\u5929\u7b7e\u5230\u8fc7\u4e86", n.signCount), n.isSign = !0, this.signPnl.active = !1, this.rewardButton.active = !1, this.shareButton.active = !1, this.videoButton.active = !1, this.todayAlreadyClime.active = !0, console.warn("-----com.signCount", n.signCount);
					for (var e = 0; e < n.signCount; e++) this.alreadyButton[e].active = !0
				} else {
					console.log("\u5f53\u5929\u6ca1\u7b7e\u5230", n.signCount), 7 == n.signCount && (n.signCount = 0, cc.sys.localStorage.setItem("signCount", n.signCount)), console.warn("-----com.signCount1", n.signCount);
					for (var t = 0; t < n.signCount; t++) this.alreadyButton[t].active = !0;
					this.rewardButton.active && n.signCount < 7 && (this.sevenDay[n.signCount].active = !0), this.signPnl.active = !0
				}
			},
			onLoad: function () {
				var e = this,
					t = cc.view.getVisibleSize().width;
				cc.view.getVisibleSize().height / t < 1.6 && (cc.find("Canvas").getComponent(cc.Canvas).fitWidth = !1, cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0);
				var i = this;
				i.time = 0, i.liveTime = 0;
				var o = new Date;
				this.zeroTime = o.setHours(0, 0, 0, 0), cc.game.on(cc.game.EVENT_HIDE, function () {
					var e = new Date;
					n.isHideGame = !0, i.time = e.getTime(), cc.sys.localStorage.setItem("liveGame", i.time)
				}), cc.game.on(cc.game.EVENT_SHOW, function () {
					i.time = cc.sys.localStorage.getItem("liveGame");
					var t = new Date;
					if (i.liveTime = t.getTime(), i.liveTime - i.time >= 2300 && 1 == n.isShare) cc.find("Canvas/losePnl").getComponent("LoseView").alive(), n.isShare = 0;
					else if (i.liveTime - i.time >= 2300 && 2 == n.isShare) {
						var o = cc.find("Canvas/winPnl/cion/rewardLabel").getComponent(cc.Label),
							a = parseInt(o.string);
						n.doAccount(a), e.startPnl.emit("updateMoney"), cc.find("Canvas/winPnl/share").active = !1, n.isShare = 0
					} else i.liveTime - i.time >= 2300 && 3 == n.isShare ? (cc.find("Canvas/gamePnl").getComponent("GameView").shareGainReward(), n.isShare = 0) : i.liveTime - i.time >= 2300 && 4 == n.isShare ? (cc.find("Canvas/rewardView").getComponent("RewatdView").shareGainReward(), n.isShare = 0) : i.liveTime - i.time >= 2300 && 5 == n.isShare ? (cc.find("Canvas/shopPnl").getComponent("ShopView").shareGainReward(), n.isShare = 0) : n.isShare > 0 && (i.liveTime, i.time)
				}), this.resetParam(), n.isOld || (n.isOld = this.getIsOld()), n.money || (n.money = this.getMoney()), n.buy || (n.buy = this.getBuy(), 0 === n.buy.length && (n.buy = [0])), n.curWeaponIdx || (n.curWeaponIdx = this.getCurWeaponIdx()), n.topLvIdx || (n.topLvIdx = this.getTopLvIdx(), n.curLvIdx = n.topLvIdx), this.startPnl = cc.find("Canvas/startPnl")
			},
			start: function () {
				if (a(), n.signTime > this.zeroTime && n.signTime < this.zeroTime + 864e5 - 100) {
					console.log("\u5f53\u5929\u7b7e\u5230\u8fc7\u4e86", n.signCount), n.isSign = !0, this.signPnl.active = !1, this.rewardButton.active = !1, this.shareButton.active = !1, this.videoButton.active = !1, this.todayAlreadyClime.active = !0, console.warn("-----com.signCount2", n.signCount);
					for (var e = 0; e < n.signCount; e++) this.alreadyButton[e].active = !0
				} else {
					console.log("\u5f53\u5929\u6ca1\u7b7e\u5230", n.signCount), 7 == n.signCount && (n.signCount = 0, cc.sys.localStorage.setItem("signCount", n.signCount)), console.warn("-----com.signCount3", n.signCount);
					for (var t = 0; t < n.signCount; t++) this.alreadyButton[t].active = !0;
					this.rewardButton.active && n.signCount < 7 && (this.sevenDay[n.signCount].active = !0)
				}
			},
			loadSubpackage: function (e) {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) return new Promise(function (t, i) {
					wx.loadSubpackage ? cc.loader.downloader.loadSubpackage(e, function (e) {
						e && i(e), console.log("load subpackage successfully."), t()
					}) : (window.require("subpackages/" + e + "/game.js"), t())
				})
			},
			loadResDir: function (e, t) {
				cc.loader.loadResDir("texture/knife", cc.SpriteFrame, function (i, o, a) {
					i && t(i), e(o), n.res = o, n.isLoadPicSuccess = !0
				})
			},
			init: function (e) {
				var t = this;
				n.res = e, n.res.sort(function (e, i) {
					return t.getWeaponIdxByName(e.name) - t.getWeaponIdxByName(i.name)
				}), o._init.changeSkin(n.res[n.curWeaponIdx])
			},
			resetParam: function () {
				var e = (new Date).getDay(),
					t = parseInt(cc.sys.localStorage.getItem("lastday"));
				if (isNaN(t) && (cc.sys.localStorage.setItem("lastday", e), t = e), e !== t) cc.sys.localStorage.setItem("lastday", e), cc.sys.localStorage.setItem("addWeaponCount", 0), cc.sys.localStorage.setItem("resetCount", 0), n.addWeaponCount = 0, n.resetCount = 0;
				else {
					var i = parseInt(cc.sys.localStorage.getItem("addWeaponCount")),
						o = parseInt(cc.sys.localStorage.getItem("resetCount"));
					n.addWeaponCount = isNaN(i) ? 0 : i, n.resetCount = isNaN(o) ? 0 : o
				}
			},
			getWeaponIdxByName: function (e) {
				var t = e.split("n").map(function (e) {
					return +e
				});
				return 16 * t[0] + t[1]
			},
			getIsOld: function () {
				var e = parseInt(cc.sys.localStorage.getItem("isOld"));
				return isNaN(e) ? (cc.sys.localStorage.setItem("isOld", 1), 0) : e
			},
			getMoney: function () {
				var e = parseInt(cc.sys.localStorage.getItem("money"));
				return isNaN(e) ? 0 : e
			},
			getBuy: function () {
				var e = cc.sys.localStorage.getItem("buy");
				return console.log("\u4e70\u7684\u6b66\u5668", e), this.transformStrToIntArr(e)
			},
			getCurWeaponIdx: function () {
				var e = parseInt(cc.sys.localStorage.getItem("curWeaponIdx"));
				return isNaN(e) ? 0 : e
			},
			getTopLvIdx: function () {
				var e = parseInt(cc.sys.localStorage.getItem("topLvIdx"));
				return isNaN(e) ? 0 : e
			},
			transformStrToIntArr: function (e) {
				var t = [];
				e instanceof Array && e.length > 0 && (t = e), "string" == typeof e && e.length > 0 && (e.startsWith("[") && (e = e.substr(1, e.length - 2)), t = e.split(","));
				var i = [];
				return t.forEach(function (e) {
					var t = parseInt(e);
					isNaN(t) || i.push(t)
				}), 0 === i.length && i.push(0), i
			}
		}), cc._RF.pop()
	}, {
		"../../GameBox/exported-gameBox/script/WeChatFileSystem": "WeChatFileSystem",
		Common: "Common",
		SkinManager: "SkinManager"
	}],
	DoAdapt: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "1e5789WOqZOIpP19EI5eTMZ", "DoAdapt");
		var n = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				n.doAdapter(this.node)
			},
			start: function () { },
			update: function (e) { }
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	GameController: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "babb0eMphFEZJOZI+WEkBIa", "GameController");
		var n = c(e("../Model/GameModel")),
			o = c(e("../Model/SliceModel")),
			a = c(e("../Model/WeaponModel"));

		function c(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var s = e("Common"),
			r = e("AudioManager"),
			l = (e("SkinManager"), e("ttLp"));
		cc.Class({
			extends: cc.Component,
			properties: {
				gameView: cc.Node,
				itemSpace: cc.Node,
				moneyLabel: cc.Label,
				levelLabel: cc.Label,
				luckBoxPnl: cc.Node,
				xianDingPnl: cc.Node
			},
			onLoad: function () {
				this.luckBox = 0, this.winPnl = cc.find("Canvas/winPnl"), this.winScript = this.winPnl.getComponent("WinView"), this.winScript.setCtl(this), this.losePnl = cc.find("Canvas/losePnl"), this.loseScript = this.losePnl.getComponent("LoseView"), this.loseScript.setCtl(this), this.rankScript = this.losePnl.getComponentInChildren("Rank"), this.gameScript = this.gameView.getComponent("GameView"), this.gameScript.setCtl(this), this.sliceScript = this.gameView.getComponentInChildren("SliceView"), this.progressBar = this.gameView.getComponentInChildren(cc.ProgressBar), this.gameModel = new n.default, this.sliceModel = new o.default, this.weaponModel = new a.default, s.doAdapter(this.node), this.resetParam()
			},
			onEnable: function () {
				cc.director.getCollisionManager().enabled = !0, cc.director.getPhysicsManager().enabled = !0
			},
			start: function () {
				var e = this;
				this.loadLvInfo().then(function () {
					return e.loadItems()
				})
			},
			init: function () {
				var e = this;
				this.gameModel.reset(), this.sliceModel.reset(), this.weaponModel.reset(), this.data = {
					itemTotal: 0
				}, this.weaponScripts = this.gameView.getComponentsInChildren("WeaponView"), this.weaponScripts.forEach(function (t) {
					t.setCtl(e)
				}), this.itemsScript = this.gameView.getComponentInChildren("ItemsView"), this.itemsScript.setCtl(this), this.itemScripts = this.gameView.getComponentsInChildren("ItemView"), this.itemScripts.forEach(function (t) {
					t.setCtl(e), e.data.itemTotal++
				}), this.gameModel.init(this.data), this.sliceModel.init(this.data), s.oneKnife = this.data.itemTotal, this.resumeTouch()
			},
			loadLvInfo: function () {
				var e = this;
				return new Promise(function (t, i) {
					if (0 === s.curLvIdx) s.curItemsArr = [19];
					else {
						s.curItemsArr = [];
						for (var n = Math.ceil(s.curLvIdx / 25) + 1, o = 0, a = 0; a < n && a < 10;) o = Math.floor(Math.random() * s.totals.length), s.curItemsArr.indexOf(o) < 0 && (s.curItemsArr.push(o), a++)
					}
					e.sum = e.getSum(), e.itemsPrefabArr = [], cc.loader.loadResArray(s.curItemsArr.map(function (e) {
						return "prefab/items/items" + e
					}), cc.Prefab, function (n, o) {
						n && (console.log(n), i()), e.itemsPrefabArr = o, t()
					})
				})
			},
			getSum: function () {
				var e = 0;
				return s.curItemsArr.forEach(function (t) {
					e += s.totals[t]
				}), e
			},
			loadItems: function () {
				this.itemSpace.removeAllChildren(), cc.instantiate(this.itemsPrefabArr[s.curItemsIdx]).parent = this.itemSpace, this.init()
			},
			reset: function () {
				this.resetParam(), void 0 != this.progressBar && (this.sliceScript.doEffect(), this.loadItems())
			},
			resetParam: function () {
				s.curItemsIdx = 0, s.curMoney = 0, this.sum = this.getSum(), void 0 != this.progressBar && (this.progressBar.progress = 0, this.moneyLabel.string = s.curMoney, this.levelLabel.string = s.curLvIdx + 1, this.gameScript.showAddBtn())
			},
			nextItems: function () {
				this.loadItems()
			},
			itemCollision: function () {
				return this.gameModel.itemCollision(), this.weaponModel.hint(), this.progressBar.progress += 1 / this.sum, this.moneyLabel.string = s.curMoney, this.weaponModel.getHintCount()
			},
			addWeapon: function () {
				var e = this;
				this.gameScript.addWeapon(), this.weaponScripts = this.gameView.getComponentsInChildren("WeaponView"), this.weaponScripts.forEach(function (t) {
					t.setCtl(e)
				})
			},
			delWeapon: function () {
				var e = this;
				s.expThree || (this.gameScript.delWeapon(), this.weaponScripts = this.gameView.getComponentsInChildren("WeaponView"), this.weaponScripts.forEach(function (t) {
					t.setCtl(e)
				}))
			},
			runWeaponAction: function () {
				this.weaponScripts && (this.weaponScripts.forEach(function (e) {
					e.runAction()
				}), s.expThree && (s.expTime--, s.expTime <= 0 && (s.expThree = !1)))
			},
			resetWeapon: function () {
				if (this.delWeapon(), this.weaponScripts.forEach(function (e) {
					e.reset()
				}), this.gameModel.isNext()) this.pauseTouch();
				else if (!this.weaponModel.isHint()) {
					if (l.stopLp(), this.pauseItemsAction(), s.curLvIdx <= 3) this.losePnl.active = !0, this.loseScript.startTimer();
					else if (s.isShowLose = !0, this.luckBox++, this.luckBox % 2 != 0) this.luckBoxPnl.active = !0;
					else cc.find("Canvas/wheelPnlAgain").active = !0, s.hideBannerAd();
					r._instance.play_miss()
				}
				this.weaponModel.reset()
			},
			appendSlice: function (e) {
				if (this.sliceScript.appendSlice(e), this.sliceModel.appendSlice()) {
					if (s.curItemsIdx++, this.gameModel.isNext())
						if (this.resetWeapon(), this.gameModel.isPass()) {
							l.stopLp();
							var t = cc.instantiate(this.sliceScript.node);
							if (this.itemsScript && this.itemsScript.node.stopAllActions(), this.gameModel.doPass(), console.log("\u4e0b\u4e00\u5173\uff0c\u63d0\u4ea4\u5f97\u5206"), this.winScript.setRewardLabel(s.curMoney), s.curLvIdx > 3)
								if (this.winPnl.active = !0, this.winPnl.active = !1, s.isShowWin = !0, this.luckBox++, this.luckBox % 2 != 0) this.luckBoxPnl.active = !0;
								else cc.find("Canvas/wheelPnlAgain").active = !0, s.hideBannerAd();
							else this.winPnl.active = !0;
							this.winScript.setBoard(t), this.loadLvInfo(), r._instance.play_win(), this.progressBar.progress = 1
						} else this.nextItems();
					this.sliceScript.doEffect()
				}
			},
			getArr: function () {
				for (var e = [], t = 43; t < 48; t++) - 1 == s.buy.indexOf(t) && e.push(t);
				return e
			},
			doPass: function () {
				this.resetParam(), this.loadItems()
			},
			relive: function () {
				var e = this;
				this.resetParam(), this.sliceScript.doEffect(), this.loadLvInfo().then(function () {
					return e.loadItems()
				})
			},
			pauseItemsAction: function () {
				this.itemsScript && this.itemsScript.node.pauseAllActions()
			},
			resumeItemsAction: function () {
				this.itemsScript && this.itemsScript.node.resumeAllActions()
			},
			pauseTouch: function () {
				this.node.active && this.gameView.pauseSystemEvents()
			},
			resumeTouch: function () {
				this.node.active && this.gameView.resumeSystemEvents()
			}
		}), cc._RF.pop()
	}, {
		"../Model/GameModel": "GameModel",
		"../Model/SliceModel": "SliceModel",
		"../Model/WeaponModel": "WeaponModel",
		AudioManager: "AudioManager",
		Common: "Common",
		SkinManager: "SkinManager",
		ttLp: "ttLp"
	}],
	GameModel: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "f22cdm8Ok5Na6o3LUf2R1kg", "GameModel"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.default = o;
		var n = e("Common");

		function o() {
			this.itemCount = 0, this.itemTotal = 0
		}
		o.prototype.init = function (e) {
			this.itemTotal = e.itemTotal
		}, o.prototype.reset = function () {
			this.itemCount = 0, this.itemTotal = 0
		}, o.prototype.itemCollision = function () {
			this.itemCount++
		}, o.prototype.isNext = function () {
			return !(this.itemCount < this.itemTotal)
		}, o.prototype.isPass = function () {
			return !(n.curItemsIdx < n.curItemsArr.length) && (n.doAccount(n.curMoney), !0)
		}, o.prototype.doPass = function () {
			n.topLvIdx === n.curLvIdx && (n.topLvIdx++, cc.sys.localStorage.setItem("topLvIdx", n.topLvIdx), n.submitTopLv(), cc.log("\u6700\u9ad8\u7b49\u7ea7")), n.curLvIdx++
		}, t.exports = i.default, cc._RF.pop()
	}, {
		Common: "Common"
	}],
	GameView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "cae8502LChETbTt1ygCdN4c", "GameView");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("ADManager"),
			c = (e("JSNativeBridge"), e("../WyMiniGame"));
		cc.Class({
			extends: cc.Component,
			properties: {
				weapon: cc.Node,
				addBtn: cc.Node,
				addWeaponView: cc.Node,
				weaponSps: cc.Node,
				videoBtn: cc.Node
			},
			onLoad: function () {
				this.threeWeapons = this.videoBtn.getComponent(cc.Button), this.startPnl = cc.find("Canvas/startPnl"), this.startScript = this.startPnl.getComponent("StartView"), this.wheelPnl = cc.find("Canvas/wheelPnl"), this.initVideoAd()
			},
			onEnable: function () {
				n.hideBannerAd()
			},
			onClickVideoBtn: function () {
				var e = this;
				this.addBtn.active = !1, o._instance.play_clickBtn(), this.threeWeapons.interactable = !1, setTimeout(function () {
					e.threeWeapons.interactable = !0
				}, 1e3), n.videoAdType = a.VIDEO_AD_TYPE_ADDWEAPON, c.showRewardedVideo(a._init.videoAdCallback)
			},
			init: function () {
				var e = this.node.getComponentsInChildren("WeaponView"),
					t = this.startScript.weaponSp.spriteFrame;
				t && e.forEach(function (e) {
					e.getComponent(cc.Sprite).spriteFrame = t
				})
			},
			initVideoAd: function () {
				var e = this;
				a._init.addWeaponCallback = function () {
					e.addBtn.emit("stopAction"), e.ctl.addWeapon(), e.hideAddWeapoView()
				}, a._init.videoAd || a._init.initVideoAd()
			},
			shareAddWeapon: function () {
				var e = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var t = Math.floor(Math.random() * n.shares.length),
						i = n.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.shareGainReward()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			shareGainReward: function () {
				this.addBtn.emit("stopAction"), this.ctl.addWeapon(), this.hideAddWeapoView()
			},
			aliveAction: function () {
				this.addBtn.emit("stopAction"), this.ctl.addWeapon(), this.hideAddWeapoView()
			},
			start: function () {
				this.init(), this.bindTouch()
			},
			setCtl: function (e) {
				this.ctl = e
			},
			bindTouch: function () {
				this.scheduleOnce(function () {
					this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this)
				}, .3)
			},
			touchStartHandler: function () {
				this.ctl && (this.ctl.runWeaponAction(), o._instance.play_flyKnife())
			},
			showAddBtn: function () {
				this.node.getComponentsInChildren("WeaponView").length < 2 && this.addBtn.emit("runAction")
			},
			addWeapon: function () {
				var e = this.node.getComponentsInChildren("WeaponView");
				if (e.length < 4) {
					n.expTime = 5, n.expThree = !0;
					for (var t = 0; t < 2; t++) {
						var i = cc.instantiate(this.weapon),
							o = cc.v2(0, -300),
							a = 15 * Math.pow(-1, t),
							c = 30 * Math.pow(-1, t);
						i.angle = -a, i.position = cc.v2(o.x + c, o.y - 10), i.parent = this.node
					}
					e.forEach(function (e) {
						e.reset()
					}), this.addBtn.emit("stopAction")
				}
			},
			delWeapon: function () {
				this.addBtn.active = !0;
				var e = this.node.getComponentsInChildren("WeaponView");
				if (e.length > 1) {
					for (var t = 1; t < e.length; t++) e[t].node.destroy();
					this.addBtn.emit("runAction")
				}
			},
			showAddWeaponView: function () {
				this.addBtn.active = !1, console.log(n.addWeaponCount), n.videoAdisLoad || n.addWeaponCount < 1 && !n.audit_ver ? (console.log("videoAdisLoad:" + n.videoAdisLoad), this.ctl.pauseItemsAction(), this.addWeaponView.active = !0) : (cc.sys.platform, cc.sys.WECHAT_GAME)
			},
			hideAddWeapoView: function () {
				this.ctl.resumeItemsAction(), this.addWeaponView.active = !1
			},
			toBack: function () {
				this.node.active = !1, this.startPnl.active = !0
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common",
		JSNativeBridge: "JSNativeBridge"
	}],
	GlobalDefine: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "0dd3cSkLllO7aUGwn6llRfW", "GlobalDefine"), t.exports = {
			miniGameList: ["wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c", "wx81ca6eefc75f9a0e", "wx77296317fcad8126", "wx4e436e3404287175", "wx4443d8e37ed71c72", "wxd7984673a9c88bd9", "wx8fefaf1e4b4b919a"],
			need_remove_appId: "wx8fefaf1e4b4b919a",
			self_appid: "wx8ffc421017f36bd8",
			android_box_appid: "wx361c9e49bd9033ca",
			game_name: "qieshuiguowangzhe_wx8ffc421017f36bd8",
			KEY: "InnerBox",
			version: "1.5.3",
			SERVE_PATH: "https://www.7cgames.cn/GameRes/wechat/7cgames/WeChatMiniGameBox/BoxList/InnerBox/20190926_v1.5.3/"
		}, cc._RF.pop()
	}, {}],
	GuessYouLike: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "9837aXsN7ZHMYueKmCAv+3x", "GuessYouLike");
		e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				gameIcon: [cc.SpriteFrame],
				parentNode: cc.Node
			},
			onLoad: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = tt.getSystemInfoSync();
					window.Douyin_flag && "ios" !== e.platform && tt.showMoreGamesModal ? this.parentNode.active = !0 : this.parentNode.active = !1
				}
				this.name = ["\u5f39\u73e0\u9ad8\u624b", "\u6316\u5751\u5929\u624d", "\u6b22\u4e50\u98a0\u7403\u624b", "\u65b9\u5757\u6536\u96c6", "\u83dc\u5200\u51b2\u51b2\u51b2", "\u6c34\u676f\u5927\u5e08", "\u7d22\u9053\u6551\u63f4", "\u7403\u7403\u6d82\u4e00\u6d82", "\u5806\u6808\u7403\u7403", "\u770b\u56fe\u627e\u832c"]
			},
			start: function () {
				this.initNamePic(), this.toMinPro();
				var e = parseInt(cc.sys.localStorage.getItem("runDir"));
				0 == (e = isNaN(e) ? 0 : e) ? (this.actionLeft(), cc.sys.localStorage.setItem("runDir", 1)) : (this.actionRight(), cc.sys.localStorage.setItem("runDir", 0))
			},
			toMinPro: function () {
				for (var e = this, t = 0; t < this.node.childrenCount; t++) {
					this.node.children[t].on("touchstart", function () {
						e.moreGame()
					})
				}
			},
			initNamePic: function () {
				for (var e = 0; e < this.node.childrenCount; e++) {
					var t = this.node.children[e],
						i = t.getChildByName("1").getComponent(cc.Sprite),
						n = t.getChildByName("name").getComponent(cc.Label);
					i.spriteFrame = this.gameIcon[e], n.string = this.name[e]
				}
			},
			moreGame: function () {
				"ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal && tt.showMoreGamesModal({
					appLaunchOptions: [{
						appId: "ttceb4b809519e3259"
					}],
					success: function (e) {
						console.log("success", e)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			},
			actionLeft: function () {
				var e = this,
					t = this.node.children[0].width,
					i = 0,
					n = 9,
					o = cc.callFunc(function () {
						e.node.children[i].x = e.node.children[n].x + t, n = i, i = i + 1 > 9 ? 0 : i + 1
					});
				this.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(1, -t, 0), cc.delayTime(1), o)))
			},
			actionRight: function () {
				var e = this,
					t = this.node.children[0].width,
					i = 0,
					n = 9,
					o = cc.callFunc(function () {
						e.node.children[n].x = e.node.children[i].x - t, i = n, n = n - 1 < 0 ? 9 : n - 1
					});
				this.node.runAction(cc.repeatForever(cc.sequence(o, cc.moveBy(1, t, 0), cc.delayTime(1))))
			}
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	ItemView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "ae625r/YtBJ25oY3QCSGq6M", "ItemView");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				halfItemPrefab: cc.Prefab,
				spinePrefab: cc.Prefab,
				sliceItemSpriteFrame: cc.SpriteFrame,
				pointSpriteFrame: cc.SpriteFrame
			},
			onLoad: function () {
				this.type = this.node.getComponent(cc.Sprite).spriteFrame.name, console.log("this.type", this.type), this.gamePnl = cc.find("Canvas/gamePnl"), this.sliceView = this.gamePnl.getComponentInChildren("SliceView"), this.isCollision = !1, this.speed = 1400, this.slicePos = cc.v2(-cc.view.getVisibleSize().width / 2 / this.gamePnl.scale + 80, -360 / this.gamePnl.scale - 180);
				var e = this;
				cc.loader.loadRes("prefab/other/score", cc.Prefab, function (t, i) {
					if (t) return console.log(t);
					e.scorePrefab = i
				})
			},
			start: function () {
				this.randRotate()
			},
			setCtl: function (e) {
				this.ctl = e
			},
			randRotate: function () {
				var e = 2 * (Math.floor(2 * Math.random()) - .5);
				this.node.runAction(cc.sequence(cc.rotateBy(1, 135 * e), cc.callFunc(this.randRotate, this)))
			},
			onCollisionEnter: function (e, t) {
				if (!this.isCollision) switch (this.isCollision = !0, e.node.name) {
					case "weapon":
						t.node.stopAllActions();
						var i = this.ctl.itemCollision();
						this.doEffect(i), o._instance.play_fruit(), "watermelon" == this.type ? (n.default.waterMelonCount++, cc.sys.localStorage.setItem("waterMelonCount", n.default.waterMelonCount)) : "apple" == this.type ? (n.default.appleCount++, cc.sys.localStorage.setItem("appleCount", n.default.appleCount)) : "lemon" == this.type ? (n.default.lemonCount++, cc.sys.localStorage.setItem("lemonCount", n.default.lemonCount)) : "juzi" == this.type ? (n.default.orangeCount++, cc.sys.localStorage.setItem("orangeCount", n.default.orangeCount)) : "boluo" == this.type && (n.default.boLuoCount++, cc.sys.localStorage.setItem("bolLuoCount", n.default.boLuoCount));
						break;
					default:
						this.isCollision = !1
				}
			},
			doEffect: function (e) {
				if (this.node.getComponent(cc.Sprite).spriteFrame = this.pointSpriteFrame, this.node.width = 16, this.node.height = 16, this.halfItemPrefab) {
					var t = this.node.position,
						i = this.getAngle(t),
						n = cc.v2(t.mag() * Math.cos(i), t.mag() * Math.sin(i) + 230),
						o = cc.instantiate(this.halfItemPrefab);
					o.position = n, o.parent = this.gamePnl;
					var a = cc.instantiate(this.spinePrefab);
					a.position = n, a.parent = this.gamePnl;
					var c = cc.instantiate(this.scorePrefab);
					c.getComponent(cc.Label).string = "+" + e, c.position = n, c.parent = this.gamePnl;
					var s = n.sub(this.slicePos).mag() / this.speed,
						r = o.getComponentsInChildren(cc.RigidBody);
					this.scheduleOnce(function () {
						r.forEach(function (e) {
							e.node.runAction(cc.moveTo(.2, cc.v2(0, 0))), e.destroy()
						}), o.runAction(cc.sequence(cc.moveTo(s, this.slicePos), cc.callFunc(this.destroyNode, this)))
					}, .1)
				}
			},
			getAngle: function (e) {
				var t = - -this.node.parent.angle % 360 * Math.PI / 180;
				return 0 == e.x && 0 == e.y ? t : e.y >= 0 ? t + e.angle(cc.Vec2.RIGHT) : t - e.angle(cc.Vec2.RIGHT) + 2 * Math.PI
			},
			destroyNode: function (e) {
				e.destroy(), this.ctl.appendSlice(this.sliceItemSpriteFrame)
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		AudioManager: "AudioManager"
	}],
	ItemsView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "053c2u4k8ZBwroDC3cDQoVF", "ItemsView");
		var n = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {},
			start: function () {
				this.randRotate()
			},
			setCtl: function (e) {
				this.ctl = e
			},
			randRotate: function () {
				var e = Math.pow(n.curLvIdx + 1, .5),
					t = Math.random(),
					i = 720 * t - 360,
					o = t + .02 * Math.abs(i) / e;
				this.node.runAction(cc.sequence(cc.rotateBy(o, i), cc.callFunc(this.randRotate, this)))
			}
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	JSGameDataManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "d9b4dmlSjpKQr7lhe1M5OLh", "JSGameDataManager");
		e("ADManager");
		t.exports = {
			onRewardAdClose: function (e) { }
		}, cc._RF.pop()
	}, {
		ADManager: "ADManager"
	}],
	JSNativeBridge: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "7206dqaUwhBdKDL1Tq9hVmx", "JSNativeBridge");
		var n = e("JSGameDataManager");
		window.Global_onRewardAdClose = function (e) {
			n.onRewardAdClose(e)
		}, t.exports = {
			showShareMenu: function () { },
			shareAppMessage: function () { },
			navigateToMiniProgram: function () { },
			showLeaderboard: function (e) { },
			submitScore: function (e, t) { },
			submitScoreBySingle: function (e) { },
			initAds: function () { },
			setBannerAdPosition: function (e) { },
			showBannerAd: function (e) { },
			showRectAd: function (e) { },
			showInterstitial: function () { },
			showChartboostInterstitial: function () { },
			showRewardedVideoAd: function () { }
		}, cc._RF.pop()
	}, {
		JSGameDataManager: "JSGameDataManager"
	}],
	Loading: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "20dc1iRyOxHF5E+o2bLHvZz", "Loading");
		var n = e("Common"),
			o = !1;
		cc.Class({
			extends: cc.Component,
			properties: {
				progressBar: cc.ProgressBar
			},
			onLoad: function () {
				n.loadOnline(), this.loadSubCount = 0, this.preLoadScene = !1, cc.view.getVisibleSize().height / cc.view.getVisibleSize().width <= 1.6 && (cc.find("Canvas").getComponent(cc.Canvas).fitHeight = !0, cc.find("Canvas").getComponent(cc.Canvas).fitWidth = !1), this.visitServer()
			},
			start: function () {
				var e = this;
				cc.director.preloadScene("game", function (e, t, i) { }, function () {
					e.preLoadScene = !0, n.loadBannerAd()
				})
			},
			visitServer: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = this;
					tt.getSystemInfo({
						success: function (t) {
							console.log(t.appName);
							var i = "https://www.7cgames.cn/GameRes/byteDance/7cgames/ByteDanceMoreGameVersion/Versions/20200318_v1.0.1/bytedanceMoreGame.json?cutFruit_tt22aa5417bd80c8e6_" + t.appName;
							isNaN(cc.sys.localStorage.getItem("GameBoxDateTT")) || e.changeToDate(Date.now()) > cc.sys.localStorage.getItem("GameBoxDateTT") ? cc.loader.load(i, function (t, i) {
								t ? console.log("\u76d2\u5b50\u8bbf\u95ee\u5931\u8d25", t) : (console.log("\u76d2\u5b50\u8bbf\u95ee\u6570+1", "cutFruit_tt22aa5417bd80c8e6"), cc.sys.localStorage.setItem("GameBoxDateTT", e.changeToDate(Date.now())))
							}) : console.log("\u4eca\u5929\u5df2\u7ecf\u8bb0\u5f55\u8fc7\uff01\uff01\uff01\uff01\uff01")
						}
					})
				}
			},
			changeToDate: function (e) {
				return Math.floor(e / 864e5)
			},
			init: function () {
				return Promise.all([this.loadSubpackage("spine"), this.loadSubpackage("texture")])
			},
			loadSubpackage: function (e) {
				var t = this;
				return new Promise(function (i, n) {
					wx.loadSubpackage ? cc.loader.downloader.loadSubpackage(e, function (e) {
						e && n(e), t.loadSubCount++, console.log("load subpackage successfully."), i()
					}) : (window.require("subpackages/" + e + "/game.js"), i())
				})
			},
			update: function (e) {
				this.progressBar.progress < .56 ? this.progressBar.progress += .005 : this.progressBar.progress < .78 && 2 != this.loadSubCount && 0 == this.preLoadScene ? this.progressBar.progress += 2e-4 : this.progressBar.progress < 1 && 0 == this.loadSubCount && 1 == this.preLoadScene ? this.progressBar.progress += .005 : 0 == o && this.progressBar.progress >= 1 && (o = !0, new Promise(this.loadResDir).then(function () {
					cc.director.loadScene("game")
				}))
			},
			loadResDir: function (e, t) {
				cc.loader.loadResDir("texture/knife", cc.SpriteFrame, function (i, o, a) {
					i && t(i), e(o), n.res = o, n.isLoadPicSuccess = !0
				})
			}
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	LoseView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "a9d09XzR8JINpkqVpCYh4dj", "LoseView");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("ADManager"),
			c = (e("JSNativeBridge"), e("ttLp")),
			s = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				timerNode: cc.Node,
				timerLayer: cc.Node,
				rankLayer: cc.Node,
				scoreLabel: cc.Label,
				icLabel: cc.Label,
				resetShareBtn: cc.Node,
				resetVideoBtn: cc.Node,
				rankView: cc.Node,
				pass: cc.Node,
				lpButton: cc.Node,
				experiencePnl: cc.Node,
				loseEmjio: cc.Node,
				loseLpPnl: cc.Node,
				watchVideNode: cc.Node,
				watchVideWhiteNode: cc.Node,
				NoWatchVideoNode: cc.Node,
				NoWatchVideoWhiteNode: cc.Node,
				videoPic: cc.SpriteFrame,
				whiteNode: cc.Node,
				SBVideo: cc.Node
			},
			onLoad: function () {
				n.onLine && (console.log("\u66ff\u6362\u56fe\u7247"), this.resetVideoBtn.getComponent(cc.Sprite).spriteFrame = this.videoPic, this.pass.opacity = 100), this.count = 0, this.reLife = this.resetVideoBtn.getComponent(cc.Button), this.startPnl = cc.find("Canvas/startPnl"), this.gamePnl = cc.find("Canvas/gamePnl"), this.rankPnl = cc.find("Canvas/rankPnl"), this.shopPnl = cc.find("Canvas/shopPnl"), this.close = cc.find("Canvas/rankPnl/close"), this.loseClose = cc.find("Canvas/rankPnl/loseClose"), this.closeShop = cc.find("Canvas/shopPnl/backBtn"), this.hidecc = cc.find("Canvas/shopPnl/close"), this.timerSp = this.timerNode.getComponent(cc.Sprite), this.timerLb = this.timerNode.getComponentInChildren(cc.Label), n.doAdapter(this.node), this.resetShareBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1)))), this.resetVideoBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1)))), this.lpButton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1)))), this.initVideoAd()
			},
			start: function () { },
			onEnable: function () {
				this.lpButton.active = !1, n.showBannerAd()
			},
			clickWhiteNode: function () {
				this.whiteNode.active && (this.whiteNode.active = !1, this.SBVideo.active = !1)
			},
			clickWatchNode: function () {
				this.watchVideWhiteNode.active ? this.watchVideWhiteNode.active = !1 : this.watchVideWhiteNode.active = !0
			},
			clickNoWatchNode: function () {
				this.NoWatchVideoWhiteNode.active ? this.NoWatchVideoWhiteNode.active = !1 : this.NoWatchVideoWhiteNode.active = !0
			},
			clickSure: function () {
				this.watchVideNode.active ? this.watchVideWhiteNode.active ? this.onClickVideoBtn() : (this.loseLpPnl.active = !0, this.timerLayer.active = !1) : this.NoWatchVideoWhiteNode.active ? (this.loseLpPnl.active = !0, this.timerLayer.active = !1) : this.onClickVideoBtn()
			},
			onDisable: function () {
				this.loseLpPnl.active = !1
			},
			onClickShareBtn: function () {
				this.wechatShareGroup()
			},
			onClickVideoBtn: function () {
				var e = this;
				cc.find("Canvas/gamePnl/bottom/addBtn").active = !1;
				n.videoAdisLoad ? (n.isWatchVideo = !0, console.log("????why1", n.isWatchVideo)) : (n.isWatchVideo = !1, n.startjs = !0, this.isStart = !0), o._instance.play_clickBtn(), this.reLife.interactable = !1, setTimeout(function () {
					e.reLife.interactable = !0
				}, 1e3), n.videoAdType = a.VIDEO_AD_TYPE_RESET, s.showRewardedVideo(a._init.videoAdCallback)
			},
			setCtl: function (e) {
				this.ctl = e
			},
			initVideoAd: function () {
				var e = this;
				a._init.resetCallback = function () {
					e.reset(), cc.find("Canvas/gamePnl").getComponent("GameView").aliveAction(), e.isStart = !0, c.startLp()
				}, a._init.videoAd || a._init.initVideoAd()
			},
			resetTimer: function () {
				this.timer = 0, this.timerLb.string = 10, this.timerSp.fillRange = 1
			},
			startTimer: function () {
				this.isStart = !0, this.resetTimer(), this.showTimerLayer()
			},
			reset: function () {
				this.ctl.resumeItemsAction(), this.node.active = !1, n.hideBannerAd(), n.reliveCount++, cc.sys.localStorage.setItem("reliveCount", n.reliveCount)
			},
			restart: function () {
				o._instance.play_clickBtn(), this.checkVideo()
			},
			checkVideo: function () {
				n.curLvIdx >= 3 && this.SBVideo.active ? this.clickVideo() : (cc.sys.platform === cc.sys.WECHAT_GAME && n.doAccount(10), this.ctl.resumeItemsAction(), this.ctl.reset(), this.node.active = !1, c.startLp(), n.hideBannerAd(), n.curLvIdx >= 2 && (this.experiencePnl.active = !0))
			},
			clickVideo: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME ? a._init.videoAd && (n.videoAdType = null, a._init.videoAd.load(), a._init.videoAd.show(), a._init.videoCallBack = this.videoReward.bind(this).catch(function (e) {
					n.videoAdisLoad, console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				})) : (this.videoReward(), console.log("\u53bb\u770b\u89c6\u9891"))
			},
			videoReward: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && n.doAccount(10), this.ctl.resumeItemsAction(), this.ctl.reset(), this.node.active = !1, c.startLp(), n.hideBannerAd(), n.curLvIdx >= 2 && (this.experiencePnl.active = !0)
			},
			showTimerLayer: function () {
				this.scoreLabel.string = n.curMoney, this.timerLayer.active = !0, n.showBannerAd(), this.rankLayer.active = !1, n.doAccount(n.curMoney), this.startPnl.emit("updateMoney")
			},
			showRankLayer: function () {
				var e = this;
				if (this.loseLpPnl.active = !1, n.showInter(), this.isStart = !1, this.icLabel.string = n.topLvIdx, this.timerLayer.active = !1, this.rankLayer.active = !0, n.showBannerAd(), n.curLvIdx >= 3 && n.onLine) {
					var t = cc.find("Canvas/losePnl/rank/backBtn");
					this.whiteNode.active = !1, t.active = !1, this.SBVideo.active = !0, setTimeout(function () {
						e.whiteNode.active = !0
					}, 2e3), setTimeout(function () {
						t.active = !0
					}, 3e3)
				} else this.whiteNode.active = !1, this.SBVideo.active = !1
			},
			showRank: function () {
				o._instance.play_clickBtn(), (cc.sys.platform !== cc.sys.WECHAT_GAME || wx.setUserCloudStorage) && (this.rankView.active = !1, cc.sys.platform === cc.sys.WECHAT_GAME ? wx.postMessage({
					messageType: 1,
					MAIN_MENU_NUM: "r1"
				}) : cc.log("\u83b7\u53d6\u6a2a\u5411\u5c55\u793a\u6392\u884c\u699c\u6570\u636e\u3002r1"), this.startPnl.emit("updateMoney"), n.hideBannerAd(), this.close.active = !1, this.loseClose.active = !0, this.rankPnl.active = !0)
			},
			showResetShareBtn: function () {
				this.resetShareBtn.active || (this.resetVideoBtn.active = !1, this.resetShareBtn.active = !0)
			},
			switchResetBtn: function () {
				!this.resetVideoBtn.active && n.videoAdisLoad ? (this.resetVideoBtn.active = !0, this.resetShareBtn.active = !1) : (this.resetVideoBtn.active = !1, this.resetShareBtn.active = !0)
			},
			toBack: function () {
				o._instance.play_clickBtn(), this.ctl.reset(), this.startPnl.active = !0, this.gamePnl.active = !1, this.node.active = !1, this.startPnl.emit("updateMoney")
			},
			showShop: function () {
				o._instance.play_clickBtn(), n.hideBannerAd(), this.shopPnl.active = !0, this.hidecc.active = !0, this.closeShop.active = !1, this.startPnl.emit("updateMoney")
			},
			doShare: function (e) {
				o._instance.play_clickBtn(), n.isShareLpSuccess = 3, setTimeout(function () {
					c.shareLp(e.target)
				}, 100)
			},
			doShareFree: function () {
				o._instance.play_clickBtn(), setTimeout(function () {
					c.shareLp()
				}, 100)
			},
			wechatShareGroup: function () {
				var e = this;
				n.isShareLpSuccess = 1, n.isWatchVideo = !0, setTimeout(function () {
					c.shareLp(e.resetShareBtn)
				}, 100)
			},
			addShare: function () {
				n.wechatShare()
			},
			alive: function () {
				this.reset(), n.resetCount++, cc.sys.localStorage.setItem("resetCount", n.resetCount), this.isStart = !0, c.startLp()
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common",
		JSNativeBridge: "JSNativeBridge",
		ttLp: "ttLp"
	}],
	MoreGameView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "ec77ahiK1JGvJL61ZLzZNU6", "MoreGameView");
		e("Common");
		var n = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				moreGameBtn: cc.Node
			},
			onLoad: function () {
				this.moreBtn = this.moreGameBtn.getComponent(cc.Button)
			},
			start: function () {
				this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, .95))))
			},
			toMore: function () {
				this.moreBtn.interactable = !1, n._instance.play_clickBtn()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common"
	}],
	MoreGame: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "38e30aiQKBJlJT/40RtcnjJ", "MoreGame");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("./GlobalDefine"));
		var o = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				moreGameList: [],
				moreIndex: 0
			},
			onLoad: function () {
				if (this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.1), cc.scaleTo(.5, .95)))), cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = this;
					wx.request({
						url: n.default.SERVE_PATH + "WXGameCode.json",
						headers: {
							"Content-Type": "application/json"
						},
						success: function (t) {
							e.moreGameList = t.data.data
						}
					})
				}
			},
			showMoreGame: function () {
				if (o._instance.play_clickBtn(), cc.sys.os === cc.sys.OS_ANDROID) wx.navigateToMiniProgram && wx.navigateToMiniProgram({
					appId: n.default.android_box_appid,
					path: ""
				});
				else {
					this.moreIndex = this.moreIndex % this.moreGameList.length, this.moreGameList[this.moreIndex].appid === n.default.self_appid && this.moreIndex++, this.moreIndex = this.moreIndex % this.moreGameList.length;
					var e = this;
					wx.previewImage && wx.previewImage({
						urls: [n.default.SERVE_PATH + this.moreGameList[this.moreIndex].QRCode],
						success: function () {
							console.log("\u4e8c\u7ef4\u7801\u8df3\u8f6c\u6210\u529f"), e.moreIndex++
						}
					})
				}
			}
		}), cc._RF.pop()
	}, {
		"./GlobalDefine": "GlobalDefine",
		AudioManager: "AudioManager"
	}],
	MsgManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "670cbJ1aXpDqrZiwn/1084U", "MsgManager");
		var n = cc.Class({
			extends: cc.Component,
			properties: {
				msgNode: cc.Node
			},
			statics: {
				_init: null
			},
			onLoad: function () {
				n._init = this
			},
			start: function () { },
			showMsg: function (e) {
				var t = n._init.msgNode;
				t.isShow || (t.isShow = !0, t.active = !0, t.getComponentInChildren(cc.Label).string = e, t.runAction(cc.fadeIn(1)), n._init.scheduleOnce(function () {
					t.runAction(cc.sequence(cc.fadeOut(1), cc.callFunc(function () {
						return t.isShow = !1
					})))
				}, 1))
			}
		});
		cc._RF.pop()
	}, {}],
	QianDaoView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "ea7d3D4HtxDUbBRUN4FJxoV", "QianDaoView");
		var n = e("AudioManager"),
			o = e("Common"),
			a = e("SkinManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				lingQu1: cc.Node,
				lingQu2: cc.Node,
				lingQu3: cc.Node,
				lingQu4: cc.Node,
				lingQu5: cc.Node,
				lingQu6: cc.Node,
				lingQu7: cc.Node,
				weaponSp: cc.Sprite
			},
			onLoad: function () {
				this.tips = cc.find("Canvas/Qiandao/296/seven/tips"), this.weaponLabel = cc.find("Canvas/Qiandao/weaponLabel"), this.Mon = cc.find("Canvas/Qiandao/296/one/1"), this.Tue = cc.find("Canvas/Qiandao/296/two/2"), this.Wen = cc.find("Canvas/Qiandao/296/three/3"), this.Thru = cc.find("Canvas/Qiandao/296/four/4"), this.Fri = cc.find("Canvas/Qiandao/296/five/5"), this.Sta = cc.find("Canvas/Qiandao/296/six/6"), this.Sun = cc.find("Canvas/Qiandao/296/seven/7"), this.startPnl = cc.find("Canvas/startPnl"), this.lingQuBtn1 = this.lingQu1.getComponent(cc.Button), this.lingQuBtn2 = this.lingQu2.getComponent(cc.Button), this.lingQuBtn3 = this.lingQu3.getComponent(cc.Button), this.lingQuBtn4 = this.lingQu4.getComponent(cc.Button), this.lingQuBtn5 = this.lingQu5.getComponent(cc.Button), this.lingQuBtn6 = this.lingQu6.getComponent(cc.Button), this.lingQuBtn7 = this.lingQu7.getComponent(cc.Button), this.restData(), this.arr = this.getArr()
			},
			getArr: function () {
				for (var e = [], t = 0; t < 64; t++) - 1 === o.buy.indexOf(t) && e.push(t);
				return e
			},
			getRandom: function () {
				return 1 === this.arr.length ? 0 : Math.floor(Math.random() * this.arr.length)
			},
			refreshWeaponSp: function () {
				this.random = this.getRandom(), this.random ? this.weaponSp.spriteFrame = o.res[this.arr[this.random]] : this.weaponSp.spriteFrame = o.res[1]
			},
			hideReward: function () {
				this.random ? this.weaponSp.spriteFrame = o.res[this.arr[this.random]] : this.weaponSp.spriteFrame = o.res[1]
			},
			start: function () { },
			clickBtn1: function () {
				o.qianDaoBiaoQian++, this.time(), n._instance.play_clickBtn(), o.doAccount(100), this.startPnl.emit("updateMoney"), this.lingQuBtn1.interactable = !1, this.Mon.active = !0, cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn2: function () {
				o.qianDaoBiaoQian++, this.time(), n._instance.play_clickBtn(), o.doAccount(200), this.startPnl.emit("updateMoney"), this.lingQuBtn2.interactable = !1, this.Tue.active = !0, cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn3: function () {
				n._instance.play_clickBtn(), o.qianDaoBiaoQian++, this.time(), o.doAccount(300), this.startPnl.emit("updateMoney"), this.lingQuBtn3.interactable = !1, this.Wen.active = !0, cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn4: function () {
				o.qianDaoBiaoQian++, this.time(), n._instance.play_clickBtn(), o.doAccount(500), this.startPnl.emit("updateMoney"), this.lingQuBtn4.interactable = !1, this.Thru.active = !0, cc.sys.localStorage.setItem("", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn5: function () {
				o.qianDaoBiaoQian++, this.time(), n._instance.play_clickBtn(), o.doAccount(700), this.startPnl.emit("updateMoney"), this.lingQuBtn5.interactable = !1, this.Fri.active = !0, cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn6: function () {
				o.qianDaoBiaoQian++, this.time(), n._instance.play_clickBtn(), o.doAccount(1e3), this.startPnl.emit("updateMoney"), this.lingQuBtn6.interactable = !1, this.Sta.active = !0, cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			clickBtn7: function () {
				n._instance.play_clickBtn(), o.qianDaoBiaoQian -= o.qianDaoBiaoQian, console.log("\u662f\u5426\u91cd\u7f6e", o.qianDaoBiaoQian), setTimeout(function () {
					o.qianDaoCount -= o.qianDaoCount
				}), cc.log("\u6267\u884c");
				var e = this.arr[this.random]; - 1 === o.buy.indexOf(e) && (a._init.buySkin(e), this.arr.splice(this.random, 1), this.random = this.getRandom(), cc.sys.localStorage.setItem("curWeaponIdx", o.curWeaponIdx), this.lingQuBtn7.interactable = !1, this.Sun.active = !0), cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount), cc.sys.localStorage.setItem("qianDaoBiaoQian", o.qianDaoBiaoQian)
			},
			time: function () {
				setTimeout(function () {
					o.qianDaoCount++
				}, 5e3)
			},
			flashWeapon: function () {
				this.tips.active = !1, this.refreshWeaponSp()
			},
			closeQianDao: function () {
				this.node.active = !1
			},
			restData: function () {
				var e = (new Date).setHours(0, 0, 0, 0).getDay(),
					t = parseInt(cc.sys.localStorage.getItem("lastday"));
				if (console.log("\u4eca\u5929\u662f\u5468\u51e0", e), console.log("\u6628\u5929\u662f\u5468\u51e0", t), isNaN(t) && (cc.sys.localStorage.setItem("lastday", e), t = e), e != t) cc.sys.localStorage.setItem("qianDaoCount", 0), cc.sys.localStorage.setItem("qianDaoBiaoQian", 0), o.qianDaoCount = 0, o.qianDaoBiaoQian = 0;
				else {
					var i = parseInt(cc.sys.localStorage.getItem("qianDaoCount")),
						n = parseInt(cc.sys.localStorage.getItem("qianDaoBiaoQian"));
					o.qianDaoCount = isNaN(i) ? 0 : i, o.qianDaoBiaoQian = isNaN(n) ? 0 : n
				}
				0 == o.qianDaoCount && 0 == o.qianDaoBiaoQian ? (this.Mon.active = !1, this.lingQuBtn1.interactable = !0, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !1) : this.lingQuBtn1.interactable = !1, 1 == o.qianDaoCount && 1 == o.qianDaoBiaoQian ? (this.Tue.active = !1, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !0, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !1) : this.lingQuBtn2.interactable = !1, 2 == o.qianDaoCount && 2 == o.qianDaoBiaoQian ? (this.Wen.active = !1, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !0, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !1) : this.lingQuBtn3.interactable = !1, 3 == o.qianDaoCount && 3 == o.qianDaoBiaoQian ? (this.Thru.active = !1, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !0, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !1) : this.lingQuBtn4.interactable = !1, 4 == o.qianDaoCount && 4 == o.qianDaoBiaoQian ? (this.Fri.active = !1, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !0, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !1) : this.lingQuBtn5.interactable = !1, 5 == o.qianDaoCount && 5 == o.qianDaoBiaoQian ? (this.Sta.active = !1, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !0, this.lingQuBtn7.interactable = !1) : this.lingQuBtn6.interactable = !1, 6 == o.qianDaoCount && 6 == o.qianDaoBiaoQian ? (this.weaponLabel.active = !0, this.Sun.active, this.lingQuBtn1.interactable = !1, this.lingQuBtn2.interactable = !1, this.lingQuBtn3.interactable = !1, this.lingQuBtn4.interactable = !1, this.lingQuBtn5.interactable = !1, this.lingQuBtn6.interactable = !1, this.lingQuBtn7.interactable = !0) : this.lingQuBtn7.interactable = !1
			},
			update: function (e) {
				cc.sys.localStorage.setItem("qianDaoCount", o.qianDaoCount)
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		SkinManager: "SkinManager"
	}],
	RankDoAdapter: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "45d78Xc/hxKSJmcEIOr3C9m", "RankDoAdapter"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				cc.view.getVisibleSize().height / cc.view.getVisibleSize().width > 2 && this.node.parent.scale > .8 && (this.node.scale = .8)
			},
			start: function () { }
		}), cc._RF.pop()
	}, {}],
	RankView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "464f9DBL6hFFqxjzPBeqOP+", "RankView");
		var n = e("Common"),
			o = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				groupFriendButton: cc.Node,
				losePnlRankView: cc.Node,
				rankingView: cc.Sprite
			},
			onLoad: function () {
				this.startPnl = cc.find("Canvas/startPnl"), this.rrr = cc.find("Canvas/rankPnl"), this.losePnl = cc.find("Canvas/losePnl"), this.gamePnl = cc.find("Canvas/gamePnl")
			},
			start: function () { },
			friendButtonFunc: function (e) {
				cc.sys.platform === cc.sys.WECHAT_GAME ? wx.postMessage({
					messageType: 1,
					MAIN_MENU_NUM: "r1"
				}) : cc.log("\u83b7\u53d6\u597d\u53cb\u6392\u884c\u699c\u3002r1")
			},
			groupFriendButtonFunc: function (e) {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var t = Math.floor(Math.random() * n.shares.length),
						i = n.shares[t];
					console.log(i), n.shareIdx++, wx.shareAppMessage({
						title: i,
						imageUrl: wxDownloader.REMOTE_SERVER_ROOT + cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (e) {
							void 0 != e.shareTickets && e.shareTickets.length > 0 && wx.postMessage({
								messageType: 5,
								MAIN_MENU_NUM: "r1",
								shareTickets: e.shareTickets[0]
							})
						}
					})
				} else cc.log("\u83b7\u53d6\u7fa4\u6392\u884c\u699c\u3002r1");
				cc.log("\u7fa4\u597d\u53cb\u6392\u884c\u699c\u4ee5\u53ca\u5206\u4eab\u5230\u7fa4")
			},
			gameOverButtonFunc: function (e) {
				cc.sys.platform === cc.sys.WECHAT_GAME ? wx.postMessage({
					messageType: 4,
					MAIN_MENU_NUM: "r1"
				}) : cc.log("\u83b7\u53d6\u6a2a\u5411\u5c55\u793a\u6392\u884c\u699c\u3002r1"), cc.log("\u6a2a\u5411\u6392\u884c\u699c")
			},
			submitScoreButtonFunc: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME ? wx.postMessage({
					messageType: 3,
					MAIN_MENU_NUM: "r1",
					score: 0
				}) : console.log("\u63d0\u4ea4\u5f97\u5206\uff1ar1:0")
			},
			toBack: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && wx.postMessage({
					messageType: 0,
					MAIN_MENU_NUM: "r1"
				}), this.node.active = !1, this.startPnl.active = !0, this.losePnl.active = !1, this.gamePnl.active = !1;
				var t = e("GameController"),
					i = cc.find("Canvas/gamePnl");
				this.aaa = i.getComponent(t), this.aaa.resumeItemsAction(), this.aaa.reset(), o._instance.play_clickBtn(), n.showBannerAd()
			},
			toLoseView: function () {
				var e = this;
				cc.sys.platform === cc.sys.WECHAT_GAME ? (wx.postMessage({
					messageType: 0,
					MAIN_MENU_NUM: "r1"
				}), setTimeout(function () {
					e.node.active = !1, o._instance.play_clickBtn(), n.showBannerAd(), e.losePnlRankView.active = !0, wx.postMessage({
						messageType: 4,
						MAIN_MENU_NUM: "r1"
					})
				}, 100)) : console.log("\u83b7\u53d6\u6a2a\u5411\u5c55\u793a\u6392\u884c\u699c\u3002r1")
			},
			_updateSubDomainCanvas: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && void 0 != sharedCanvas && (this.tex.initWithElement(sharedCanvas), this.tex.handleLoadedTexture(), this.rankingView.spriteFrame = new cc.SpriteFrame(this.tex))
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		GameController: "GameController"
	}],
	RewatdView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "3281eiIyKxMkJjjJOH2xWiD", "RewatdView");
		var n = e("Common"),
			o = e("ADManager"),
			a = e("AudioManager"),
			c = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				light: cc.Node,
				slowLight: cc.Node,
				shareButton: cc.Node,
				videoButton: cc.Node,
				startPnl: cc.Node
			},
			onLoad: function () {
				n.doAdapter(this.node), this.count = 0
			},
			start: function () {
				this.light.runAction(cc.repeatForever(cc.rotateBy(5, 360))), this.slowLight.runAction(cc.repeatForever(cc.rotateBy(13, 360))), this.videoButton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1))))
			},
			onEnable: function () {
				this.count++, this.count > 2 && this.count, this.shareButton.active = !1, this.videoButton.active = !0, this.initVideoAd(), n.showBannerAd()
			},
			onClickVideoBtn: function () {
				a._instance.play_clickBtn(), n.videoAdType = o.DoubleCoin, c.showRewardedVideo(o._init.videoAdCallback)
			},
			initVideoAd: function () {
				n.hideBannerAd();
				var e = this;
				o._init.DoubleCoinCallBack = function () {
					e.node.active = !1, n.doAccount(1e3), e.startPnl.emit("updateMoney"), cc.sys.platform, cc.sys.WECHAT_GAME
				}, o._init.videoAd || o._init.initVideoAd()
			},
			doShare: function () {
				a._instance.play_clickBtn();
				var e = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var t = Math.floor(Math.random() * n.shares.length),
						i = n.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.shareGainReward()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			shareGainReward: function () {
				n.doAccount(500), this.startPnl.emit("updateMoney"), this.shareButton.active = !1
			},
			close: function () {
				n.hideBannerAd(), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common"
	}],
	ScoreView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "97739wFc09ElpmST7r3V7WM", "ScoreView"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function () {
				this.node.runAction(cc.sequence(cc.moveBy(.5, cc.v2(0, 100)), cc.callFunc(this.destroyNode, this)))
			},
			destroyNode: function () {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {}],
	ShopView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "9f3cdTvo3JGOIxGWdDIUmvf", "ShopView");
		var n = e("Common"),
			o = e("ADManager"),
			a = e("AudioManager"),
			c = e("SkinManager"),
			s = e("MsgManager"),
			r = (e("JSNativeBridge"), e("../WyMiniGame"));
		cc.Class({
			extends: cc.Component,
			properties: {
				pageView: cc.PageView,
				pageContent: cc.Node,
				k1: cc.SpriteFrame,
				k2: cc.SpriteFrame,
				openItemPrefab: cc.Prefab,
				buyNode: cc.Node,
				videoNode: cc.Node,
				wheelNode: cc.Node,
				moneyLabel: cc.Label,
				aaa: cc.Node,
				addMoneyNode: cc.Node,
				light: cc.Node,
				showKnife: cc.Sprite,
				startPnlKnife: cc.Sprite,
				gamePnlKnife: cc.Sprite
			},
			onLoad: function () {
				this.count = 0, this.checked = null, this.showWhich = !1, this.startPnl = cc.find("Canvas/startPnl"), this.startScript = this.startPnl.getComponent("StartView"), this.gamePnl = cc.find("Canvas/gamePnl"), this.wheelPnl = cc.find("Canvas/wheelPnl"), this.buyLabel = this.buyNode.getComponentInChildren(cc.Label), this.buyBtn = this.buyNode.getComponent(cc.Button), this.videoBtn1 = this.videoNode.getChildByName("b_03"), this.shareBtn = this.videoNode.getChildByName("b_04"), this.rewardView = cc.find("Canvas/rewardView"), this.closeShop = cc.find("Canvas/shopPnl/backBtn"), this.hidecc = cc.find("Canvas/shopPnl/close"), this.twice = this.aaa.getComponent(cc.Button), this.addMoney = this.addMoneyNode.getComponent(cc.Button), n.doAdapter(this.node), this.initVideoAd()
			},
			onClickShareBtn: function () {
				a._instance.play_clickBtn();
				var e = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var t = Math.floor(Math.random() * n.shares.length),
						i = n.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.shareGainReward()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			shareGainReward: function () {
				this.count++, n.doAccount(500), this.startPnl.emit("updateMoney"), this.shareBtn.active = !1, this.videoBtn1.active = !0
			},
			onClickShowModel: function () {
				this.onClickVideoBtnOne()
			},
			onClickVideoBtnOne: function () {
				var e = this;
				a._instance.play_clickBtn(), this.addMoney.interactable = !1, setTimeout(function () {
					e.addMoney.interactable = !0
				}, 1e3), n.videoAdType = o.VIDEO_AD_TYPE_GETCOIN, r.showRewardedVideo(o._init.videoAdCallback)
			},
			onClickVideoBtn: function () {
				var e = this;
				a._instance.play_clickBtn(), this.twice.interactable = !1, setTimeout(function () {
					e.twice.interactable = !0
				}, 1e3), this.count >= 2 && (this.videoBtn1.active = !0, this.shareBtn.active = !1), n.videoAdType = o.VIDEO_AD_TYPE_GETCOIN, r.showRewardedVideo(o._init.videoAdCallback)
			},
			start: function () {
				this.init(), this.light.runAction(cc.repeatForever(cc.rotateBy(3, 360)))
			},
			init: function () {
				this.appendItem()
			},
			videoCionCallBack: function () {
				this.count++, n.doAccount(500), this.startPnl.emit("updateMoney"), cc.sys.platform, cc.sys.WECHAT_GAME
			},
			initVideoAd: function () {
				var e = this;
				o._init.getCoinCallback = function () {
					e.count++, e.rewardView.active = !0, n.doAccount(500), e.startPnl.emit("updateMoney")
				}
			},
			appendItem: function () {
				for (var e = this.pageContent.children, t = 0; t < n.res.length; t++) {
					var i = Math.floor(t / 16),
						o = cc.instantiate(this.openItemPrefab),
						a = new cc.Node("weapon"),
						s = a.addComponent(cc.Sprite);
					s.sizeMode = cc.Sprite.SizeMode.RAW, s.trim = !1, s.spriteFrame = n.res[t], a.parent = o, n.curWeaponIdx === t && (console.log(">>>>>>>>>>", t), this.weapon = s, this.checked = o.getChildByName("checked").getComponent(cc.Sprite), this.checked.spriteFrame = this.k1, this.curWeaponIdx = n.curWeaponIdx, this.money = 1500 + 2e3 * Math.floor(this.curWeaponIdx / 16), c._init.changeSkin(this.weapon.spriteFrame)), a.angle = -45, a.scale = .7, o.parent = e[i], o.on("click", this.checkItem, this)
				}
			},
			onEnable: function () {
				var e = this;
				n.showBannerAd(), console.log("buy,,,,", n.buy), setTimeout(function () {
					for (var t = e.pageContent.children, i = 0; i < 4; i++)
						for (var o = 0; o < 16; o++) {
							var a = t[i].children[o],
								c = a.getChildByName("weapon"),
								s = a.getChildByName("checked").getComponent(cc.Sprite);
							s.spriteFrame = null, 0 == i && 0 == o ? c.color = new cc.Color(255, 255, 255) : (e.curWeaponIdx1 = 16 * a.parent.getSiblingIndex() + a.getSiblingIndex(), -1 === n.buy.indexOf(e.curWeaponIdx1) ? (c.color = new cc.Color(0, 0, 0), c.opacity = 100, 0 == e.showWhich && (s.spriteFrame = e.k1, e.showWhich = !0, e.checked = s, e.buyNode.active = !0, e.wheelNode.active = !1, e.buyBtn.interactable = !0, e.money = 1500 + 2e3 * Math.floor(e.curWeaponIdx1 / 16), e.showKnife.spriteFrame = n.res[e.curWeaponIdx1], e.curWeaponIdx = e.curWeaponIdx1, e.weaponNode = c, e.showKnife.node.color = new cc.Color(80, 80, 80), e.showKnife.node.runAction(cc.scaleTo(.2, 1.3)), e.buyLabel.string = e.money)) : (c.color = new cc.Color(255, 255, 255), c.opacity = 255))
						}
				}, 100)
			},
			onDisable: function () {
				this.showWhich = !1
			},
			checkItem: function (e) {
				this.showKnife.node.scale = 1, this.checked && (this.checked.spriteFrame = null);
				var t = e.target;
				this.weapon = t.getChildByName("weapon").getComponent(cc.Sprite), this.checked = t.getChildByName("checked").getComponent(cc.Sprite), this.weaponNode = t.getChildByName("weapon"), this.checked.spriteFrame = this.k1, this.curWeaponIdx = 16 * t.parent.getSiblingIndex() + t.getSiblingIndex(), -1 !== n.buy.indexOf(this.curWeaponIdx) ? (n.isExperience = !1, n.experienceCount = 0, this.buyBtn.interactable = !1, this.wheelNode.active = !1, this.buyNode.active = !1, this.buyLabel.string = "\u5df2\u62e5\u6709", this.checked.spriteFrame = this.k2, this.showKnife.spriteFrame = this.weapon.spriteFrame, this.showKnife.node.color = new cc.Color(255, 255, 255), this.showKnife.node.runAction(cc.scaleTo(.2, 1.3)), n.curWeaponIdx !== this.curWeaponIdx && (n.curWeaponIdx = this.curWeaponIdx, c._init.changeSkin(this.weapon.spriteFrame), cc.sys.localStorage.setItem("curWeaponIdx", n.curWeaponIdx))) : this.curWeaponIdx > 37 && this.curWeaponIdx <= 47 ? (this.buyNode.active = !1, this.showKnife.spriteFrame = this.weapon.spriteFrame, this.showKnife.node.color = new cc.Color(80, 80, 80), this.showKnife.node.runAction(cc.scaleTo(.2, 1.3))) : this.curWeaponIdx > 47 ? (this.buyNode.active = !1, this.wheelNode.active = !0, this.showKnife.spriteFrame = this.weapon.spriteFrame, this.showKnife.node.color = new cc.Color(80, 80, 80), this.showKnife.node.runAction(cc.scaleTo(.2, 1.3))) : (this.buyNode.active = !0, this.wheelNode.active = !1, this.buyBtn.interactable = !0, this.money = 1500 + 2e3 * Math.floor(this.curWeaponIdx / 16), this.showKnife.spriteFrame = this.weapon.spriteFrame, this.showKnife.node.color = new cc.Color(80, 80, 80), this.showKnife.node.runAction(cc.scaleTo(.2, 1.3)), this.buyLabel.string = this.money)
			},
			buyItem: function () {
				if (a._instance.play_clickBtn(), -1 === n.buy.indexOf(this.curWeaponIdx))
					if (this.isEnough(this.money)) n.doAccount(-this.money), c._init.buySkin(this.curWeaponIdx), this.startPnl.emit("updateMoney"), this.buyBtn.interactable = !1, this.buyNode.active = !1, this.weaponNode.color = new cc.Color(255, 255, 255), this.weaponNode.opacity = 255, this.showKnife.node.color = new cc.Color(255, 255, 255), this.buyLabel.string = "\u5df2\u62e5\u6709", this.checked.spriteFrame = this.k2;
					else if (cc.sys.platform === cc.sys.WECHAT_GAME);
					else {
						s._init.showMsg("Need more coins")
					}
			},
			isEnough: function (e) {
				return !(e > n.money)
			},
			showPnl: function () {
				!this.node.active && n.isLoadPicSuccess && (this.node.active = !0, this.startPnl.active = !1, this.closeShop.active = !0, this.hidecc.active = !1, n.hideBannerAd(), r.hideBanner())
			},
			closePnl: function () {
				this.node.active && (this.node.active = !1, this.startPnl.active = !0, n.hideBannerAd())
			},
			hidePnl: function () {
				this.node.active = !1, n.hideBannerAd()
			},
			update: function (e) {
				this.moneyLabel.string = n.money
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common",
		JSNativeBridge: "JSNativeBridge",
		MsgManager: "MsgManager",
		SkinManager: "SkinManager"
	}],
	SignView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "dd1efflVsNBrrF+5fq7N+uS", "SignView");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager"),
			a = e("ADManager"),
			c = e("SkinManager"),
			s = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				startPnl: cc.Node,
				rewardButton: cc.Node,
				shareButton: cc.Node,
				videoButton: cc.Node,
				alreadyButton: [cc.Node],
				sevenDay: [cc.Node],
				todayAlreadyClime: cc.Node,
				onceAgainNode: cc.Node,
				skinNode: cc.Node,
				moneyNode: cc.Node
			},
			onLoad: function () {
				this.count = 0, n.default.signWeek > 0 ? (this.skinNode.active = !1, this.moneyNode.active = !0) : (this.skinNode.active = !0, this.moneyNode.active = !1), this.videoButton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.75, .9), cc.scaleTo(.75, .75))))
			},
			start: function () {
				this.videoReward()
			},
			onEnable: function () {
				if (n.default.showBannerAd(), this.count++, n.default.isSign || (this.count, this.shareButton.active = !1, this.videoButton.active = !0), console.warn("-----com.signCount4", n.default.signCount), n.default.signCount > 0)
					for (var e = 0; e < n.default.signCount; e++) this.alreadyButton[e].active = !0;
				6 == n.default.signCount && (this.videoButton.active = !1)
			},
			clickClime: function () {
				o._instance.play_clickBtn(), n.default.isSign = !0;
				var e = new Date;
				n.default.signTime = e.getTime(), n.default.signCount++, this.rewardButton.active = !1, this.shareButton.active = !1, this.videoButton.active = !1, this.todayAlreadyClime.active = !0, this.sevenDay[n.default.signCount - 1].active = !1, this.alreadyButton[n.default.signCount - 1].active = !0, this.node.active = !1, n.default.signWeek > 0 ? (n.default.doAccount(n.default.signMoney[n.default.signCount - 1]), this.onceAgainNode.active = !0) : (console.log("\u7b2c\u4e00\u5468"), n.default.signCount < 7 ? (n.default.doAccount(n.default.signMoney[n.default.signCount - 1]), this.onceAgainNode.active = !0) : c._init.buySkin(51)), 7 == n.default.signCount && (n.default.signWeek++, cc.sys.localStorage.setItem("signWeek", n.default.signWeek)), cc.sys.localStorage.setItem("signCount", n.default.signCount), cc.sys.localStorage.setItem("signTime", n.default.signTime), this.startPnl.emit("updateMoney")
			},
			doubleReceive: function () {
				n.default.isSign = !0;
				var e = new Date;
				n.default.signTime = e.getTime(), n.default.signCount++, this.rewardButton.active = !1, this.shareButton.active = !1, this.videoButton.active = !1, this.todayAlreadyClime.active = !0, this.sevenDay[n.default.signCount - 1].active = !1, this.alreadyButton[n.default.signCount - 1].active = !0, this.node.active = !1, n.default.signWeek > 0 ? (n.default.doAccount(2 * n.default.signMoney[n.default.signCount - 1]), this.onceAgainNode.active = !0) : (console.log("\u7b2c\u4e00\u5468"), n.default.signCount < 7 ? (n.default.doAccount(2 * n.default.signMoney[n.default.signCount - 1]), this.onceAgainNode.active = !0) : c._init.buySkin(51)), 7 == n.default.signCount && (n.default.signWeek++, cc.sys.localStorage.setItem("signWeek", n.default.signWeek)), cc.sys.localStorage.setItem("signCount", n.default.signCount), cc.sys.localStorage.setItem("signTime", n.default.signTime), this.startPnl.emit("updateMoney")
			},
			shareDouble: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = this;
					o._instance.play_clickBtn();
					var t = Math.floor(Math.random() * n.default.shares.length),
						i = n.default.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.doubleReceive()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			clickVideo: function () {
				o._instance.play_clickBtn(), n.default.signWeek < 1 && 6 == n.default.signCount || (n.default.videoAdType = a.DoubleCoin, s.showRewardedVideo(a._init.videoAdCallback))
			},
			videoReward: function () {
				var e = this;
				a._init.DoubleCoinCallBack = function () {
					e.doubleReceive()
				}, a._init.videoAd || a._init.initVideoAd()
			},
			close: function () {
				n.default.hideBannerAd(), o._instance.play_clickBtn(), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		SkinManager: "SkinManager"
	}],
	SkinManager: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "1a887o1gH9IDKU1oPcMbNOG", "SkinManager");
		var n = e("Common"),
			o = e("MsgManager"),
			a = cc.Class({
				extends: cc.Component,
				properties: {},
				statics: {
					_init: null
				},
				onLoad: function () {
					a._init = this, this.startScript = cc.find("Canvas/startPnl").getComponent("StartView"), this.gameScript = cc.find("Canvas/gamePnl").getComponent("GameView"), this.wheelScript = cc.find("Canvas/wheelPnl").getComponent("WheelView"), this.shopScript = cc.find("Canvas/shopPnl").getComponent("ShopView")
				},
				start: function () { },
				buySkin: function (e) {
					-1 !== n.buy.indexOf(e) || isNaN(parseInt(e)) ? (console.log("already own Skin"), 51 == e && this.changeSkin(n.res[e])) : (n.buySkin++, cc.sys.localStorage.setItem("buySkin", n.buySkin), console.log("buy skin success"), n.curWeaponIdx = e, n.buy.push(e), cc.sys.localStorage.setItem("curWeaponIdx", n.curWeaponIdx), cc.sys.localStorage.setItem("buy", JSON.stringify(n.buy)), this.changeSkin(n.res[e]))
				},
				experienceSkin: function (e) {
					-1 === n.buy.indexOf(e) && (n.isExperience = !0, n.experienceCount = 0, this.changeSkin(n.res[e]), cc.log(e))
				},
				experienceCount: function () {
					if (n.isExperience && (n.experienceCount++, n.experienceCount > 9)) {
						n.isExperience = !1, n.experienceCount = 0;
						var e = n.res[n.curWeaponIdx];
						this.changeSkin(e);
						cc.sys.platform === cc.sys.WECHAT_GAME || o._init.showMsg("Trial ended")
					}
				},
				changeSkin: function (e) {
					this.startScript.weaponSp.spriteFrame = e, this.wheelScript.weapon.getComponent(cc.Sprite).spriteFrame = e, this.gameScript.node.getComponentsInChildren("WeaponView").forEach(function (t) {
						t.getComponent(cc.Sprite).spriteFrame = e
					}), this.gameScript.weaponSps.getComponentsInChildren(cc.Sprite).forEach(function (t) {
						t.spriteFrame = e
					})
				}
			});
		cc._RF.pop()
	}, {
		Common: "Common",
		MsgManager: "MsgManager"
	}],
	SliceModel: [function (e, t, i) {
		"use strict";

		function n() {
			this.sliceCount = 0, this.sliceTotal = 0
		}
		cc._RF.push(t, "9d3d7EpLndFKYWsY9y/ZnvD", "SliceModel"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.default = n, n.prototype.init = function (e) {
			this.sliceTotal = e.itemTotal
		}, n.prototype.reset = function () {
			this.sliceCount = 0, this.sliceTotal = 0
		}, n.prototype.appendSlice = function () {
			return this.sliceCount++, this.sliceTotal < 10 ? this.isFull() : this.isFullone()
		}, n.prototype.isFull = function () {
			return !(this.sliceTotal < 10 && this.sliceCount < this.sliceTotal)
		}, n.prototype.isFullone = function () {
			return 10 == this.sliceCount || this.sliceCount >= this.sliceTotal
		}, t.exports = i.default, cc._RF.pop()
	}, {}],
	SliceView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "e91156qRZ5E0pRkmnCTSQJj", "SliceView"), cc.Class({
			extends: cc.Component,
			properties: {
				plateSpriteFrame: cc.SpriteFrame
			},
			onLoad: function () { },
			start: function () {
				this.appendPlate()
			},
			setCtl: function (e) {
				this.ctl = e
			},
			appendPlate: function () {
				if (1 === this.node.childrenCount) {
					var e = new cc.Node;
					e.addComponent(cc.Sprite).spriteFrame = this.plateSpriteFrame, e.parent = this.node
				}
			},
			appendSlice: function (e) {
				var t = new cc.Node,
					i = t.addComponent(cc.Sprite);
				i.spriteFrame = e, i.node.y = 10, t.parent = this.node.children[0], t.zIndex = -1
			},
			doEffect: function () {
				this.node.childrenCount > 1 && this.node.runAction(cc.sequence(cc.moveBy(.4, cc.v2(-200, 0)), cc.callFunc(this.destroySlice, this)))
			},
			destroySlice: function () {
				this.node.children[0].removeAllChildren(), this.appendPlate(), this.node.runAction(cc.moveBy(.4, cc.v2(200, 0)))
			}
		}), cc._RF.pop()
	}, {}],
	SpineView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "e121fH616tLTIP7cRMo7OGD", "SpineView"), cc.Class({
			extends: cc.Component,
			properties: {},
			start: function () { },
			destroyNode: function () {
				this.node.destroy()
			}
		}), cc._RF.pop()
	}, {}],
	StartView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "9e37eL/XItDU5JyNwaeXeu6", "StartView");
		var n = e("./Common"),
			o = e("AudioManager"),
			a = (e("JSNativeBridge"), e("ADManager")),
			c = e("MsgManager"),
			s = e("ttLp"),
			r = e("../WyMiniGame"),
			l = "happyGlass_tta2e5d4583dcf5807";
		cc.Class({
			extends: cc.Component,
			properties: {
				weaponSp: cc.Sprite,
				sound: cc.Node,
				moneyLabel: cc.Label,
				addMoneyNode: cc.Node,
				moreBtn: cc.Node,
				rewardPnl: cc.Node,
				signPnl: cc.Node,
				experienceNode: cc.Node,
				missionPnl: cc.Node,
				experienceLock: cc.Node,
				xianDingPnl: cc.Node,
				newWheelNode: cc.Node,
				xianDingBtn: cc.Node
			},
			clearStora: function () {
				cc.sys.localStorage.clear()
			},
			onEnable: function () {
				n.hideBannerAd(), this.node.on("updateMoney", this.updateMoney, this), this.node.on("startGame", this.startGame, this), s.stopLp(), this.showSign++;
				var e = parseInt(cc.sys.localStorage.getItem("signCount"));
				(console.warn("count: " + e), e > 0) && (console.warn("---------43showSign"), cc.find("Canvas/manager").getComponent("DataManager").signManager())
			},
			openXianDing: function () {
				n.menuOpenXianDing = !0, this.xianDingPnl.active = !0
			},
			openWheel: function () {
				n.isLoadPicSuccess && (n.menuOpenTurn = !0, this.newWheelNode.active = !0, n.hideBannerAd())
			},
			init: function () {
				var e = this;
				cc.sys.platform === cc.sys.WECHAT_GAME && tt.getSystemInfo({
					success: function (t) {
						console.log(t.appName);
						var i = "https://www.7cgames.cn/GameRes/byteDance/7cgames/ByteDanceMoreGameVersion/Versions/20200318_v1.0.1/bytedanceMoreGame.json?" + l + "_" + t.appName;
						isNaN(cc.sys.localStorage.getItem("GameBoxDateTT")) || e.changeToDate(Date.now()) > cc.sys.localStorage.getItem("GameBoxDateTT") ? cc.loader.load(i, function (t, i) {
							t ? console.log("\u76d2\u5b50\u8bbf\u95ee\u5931\u8d25", t) : (console.log("\u76d2\u5b50\u8bbf\u95ee\u6570+1", l), cc.sys.localStorage.setItem("GameBoxDateTT", e.changeToDate(Date.now())))
						}) : console.log("\u4eca\u5929\u5df2\u7ecf\u8bb0\u5f55\u8fc7\uff01\uff01\uff01\uff01\uff01")
					}
				})
			},
			changeToDate: function (e) {
				return Math.floor(e / 864e5)
			},
			onLoad: function () {
				n.hideBannerAd(), this.showSign = 0, this.addMoney = this.addMoneyNode.getComponent(cc.Button), this.gamePnl = cc.find("Canvas/gamePnl"), this.rankPnl = cc.find("Canvas/rankPnl"), this.qianDao = cc.find("Canvas/Qiandao"), this.close = cc.find("Canvas/rankPnl/close"), this.loseClose = cc.find("Canvas/rankPnl/loseClose"), this.sound_on = this.sound.getChildByName("m2_0n"), this.sound_off = this.sound.getChildByName("m2_off"), n.doAdapter(this.node), cc.sys.platform === cc.sys.WECHAT_GAME && (wx.updateShareMenu({
					withShareTicket: !0
				}), wx.showShareMenu(), wx.onShareAppMessage(function () {
					var e = Math.floor(Math.random() * n.shares.length);
					return {
						title: n.shares[e],
						imageUrl: cc.url.raw("resources/share/share" + e + ".jpg")
					}
				})), this.initVideoAd(), this.init(), this.xianDingBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.7, 1.1), cc.scaleTo(.7, 1))))
			},
			start: function () {
				this.updateMoney(), this.weaponSp.node.runAction(cc.repeatForever(cc.sequence(cc.moveBy(.4, 0, 10), cc.moveBy(.4, 0, -10))))
			},
			startGame: function () {
				o._instance.play_clickBtn(), this.gamePnl.active = !0, this.node.active = !1, s.startLp(), n.hideBannerAd();
				var e = new Date;
				n.missionTime = e.getTime(), cc.sys.localStorage.setItem("missionTime", n.missionTime);
				var t = this.getArr();
				n.curLvIdx >= 2 && (64 == n.buy.length ? console.log("own all weapon") : 0 != t.length ? this.experienceLock.active = !0 : this.experienceNode.active = !0)
			},
			getArr: function () {
				for (var e = [], t = 38; t < 43; t++) - 1 == n.buy.indexOf(t) && e.push(t);
				return e
			},
			openQiandao: function () {
				c._init.showMsg("\u8be5\u529f\u80fd\u5c1a\u672a\u4e0a\u7ebf\uff01\u656c\u8bf7\u671f\u5f85~")
			},
			openMission: function () {
				this.missionPnl.active = !0
			},
			toGameBox: function () {
				n.hideBannerAd(), cc.director.emit("gameBoxShow", {})
			},
			onClickShowModel: function () {
				this.onClickVideoBtn()
			},
			onClickVideoBtn: function () {
				var e = this;
				o._instance.play_clickBtn(), this.addMoney.interactable = !1, setTimeout(function () {
					e.addMoney.interactable = !0
				}, 1e3), n.videoAdType = a.VIDEO_AD_TYPE_GETCOIN, r.showRewardedVideo(a._init.videoAdCallback)
			},
			initVideoAd: function () {
				console.warn("--------240");
				var e = this;
				a._init.getCoinCallback = function () {
					console.warn("-------243"), n.doAccount(500), e.node.emit("updateMoney"), e.rewardPnl.active = !0
				}, a._init.videoAd || console.warn("------249"), a._init.initVideoAd()
			},
			updateMoney: function () {
				this.moneyLabel.string = n.money
			},
			doShare: function () {
				o._instance.play_clickBtn(), n.wechatShare()
			},
			toRank: function () {
				o._instance.play_clickBtn(), this.close.active = !0, this.loseClose.active = !1, this.rankPnl.active = !0, this.node.active = !1, n.hideBannerAd()
			},
			switchSound: function () {
				o._instance.play_clickBtn(), n.voiceon_off ? (n.voiceon_off = !1, this.sound_on.active = !1, this.sound_off.active = !0) : (n.voiceon_off = !0, this.sound_on.active = !0, this.sound_off.active = !1), cc.sys.localStorage.setItem("voiceon_off", n.voiceon_off), cc.log("\u70b9\u51fb")
			},
			toSignPnl: function () {
				o._instance.play_clickBtn(), this.signPnl.active = !0
			},
			update: function (e) {
				this.moneyLabel.string = n.money, 1 == cc.sys.localStorage.getItem("xiandingshow") && (this.xianDingBtn.active = !1)
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		"./Common": "Common",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		JSNativeBridge: "JSNativeBridge",
		MsgManager: "MsgManager",
		ttLp: "ttLp"
	}],
	WeChatFileSystem: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "1225bXCeKxH7JJZAOBFjdlh", "WeChatFileSystem"), t.exports = {
			init: function (e, t) {
				this.urlRoot = e, this.gameName = t, console.log(this.gameName)
			},
			getFileName: function (e) {
				if (!e) return null;
				for (var t = e.substring(e.indexOf(this.urlRoot), e.length); - 1 != t.indexOf("/");) {
					var i = t.indexOf("/");
					t = t.substring(0, i) + "-" + t.substring(i + 1, t.length)
				}
				return t
			},
			getFile: function (e) {
				var t = this.getFileName(e.url),
					i = this.rootPath + "/" + t,
					n = this;
				this.fileSystemManager.stat({
					path: i,
					success: function (t) {
						t.stats.isDirectory(), t.stats.isFile() && e.success(i)
					},
					fail: function (t) {
						wx.downloadFile({
							url: e.url + "?" + n.gameName,
							success: function (t) {
								wx.saveFile({
									tempFilePath: t.tempFilePath,
									filePath: i,
									success: function (t) {
										e.success(i)
									},
									fail: function (t) {
										e.fail()
									}
								})
							},
							fail: function (t) {
								e.fail()
							}
						})
					}
				})
			},
			removeFile: function (e) {
				var t = this.getFileName(e.url),
					i = this.rootPath + "/" + t,
					n = this;
				this.fileSystemManager.stat({
					path: i,
					success: function (t) {
						n.fileSystemManager.unlink({
							filePath: i,
							success: function () {
								e.success()
							},
							fail: function (e) {
								console.log(e)
							}
						})
					},
					fail: function (t) {
						e.success()
					}
				})
			},
			showFile: function () {
				this.fileSystemManager.readdir({
					dirPath: "".concat(wx.env.USER_DATA_PATH),
					success: function (e) { },
					fail: function () { }
				})
			}
		}, cc._RF.pop()
	}, {}],
	WeaponModel: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "80dfd3An95Ew6nzeIjGJ5n4", "WeaponModel"), Object.defineProperty(i, "__esModule", {
			value: !0
		}), i.default = o;
		var n = e("Common");

		function o() {
			this.hintCount = 0
		}
		o.prototype.reset = function () {
			this.hintCount = 0
		}, o.prototype.hint = function () {
			return this.hintCount++, n.curMoney += this.hintCount, n.showWhichPrefab = this.hintCount, this.isHint()
		}, o.prototype.isHint = function () {
			return !(this.hintCount < 1)
		}, o.prototype.getHintCount = function () {
			return this.hintCount
		}, t.exports = i.default, cc._RF.pop()
	}, {
		Common: "Common"
	}],
	WeaponView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "8ebdfILhGpN/KZkToJg/Yd3", "WeaponView");
		var n = e("Common"),
			o = e("AudioManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				linerVelocity: 1800,
				angularVelocity: 2400,
				distance: 1200,
				angle: 360,
				wellPre: cc.Prefab,
				coolPre: cc.Prefab,
				greatPre: cc.Prefab,
				excellent: cc.Prefab
			},
			onLoad: function () {
				this.startRot = -this.node.angle, this.startPos = this.node.position
			},
			start: function () {
				this.runStartAction()
			},
			setCtl: function (e) {
				this.ctl = e
			},
			runStartAction: function () {
				var e = cc.moveBy(.5, cc.v2(0, 30)),
					t = cc.moveBy(.5, cc.v2(0, -30));
				this.node.runAction(cc.repeatForever(cc.sequence(e, t)))
			},
			runAction: function () {
				var e = this;
				this.ctl && this.ctl.pauseTouch(), this.stopAction();
				var t = cc.repeatForever(cc.rotateBy(this.angle / this.angularVelocity, this.angle)),
					i = cc.moveBy(this.distance / this.linerVelocity, cc.v2(this.distance * Math.sin(this.startRot * Math.PI / 180), this.distance));
				this.node.runAction(t), this.ctl ? this.node.runAction(cc.sequence(i, cc.callFunc(function () {
					if (console.log(">>>>>>>>>", n.oneKnife), console.log("\u51e0\u4e2a\u6c34\u679c", n.showWhichPrefab), n.showWhichPrefab == n.oneKnife) o._instance.play_excellent(), (t = cc.instantiate(e.excellent)).parent = e.node.parent, t.setPosition(0, 100), setTimeout(function () {
						t.destroy()
					}, 700);
					else if (3 == n.showWhichPrefab) o._instance.play_good(), (t = cc.instantiate(e.wellPre)).parent = e.node.parent, t.setPosition(0, 100), setTimeout(function () {
						t.destroy()
					}, 700);
					else if (4 == n.showWhichPrefab) {
						o._instance.play_cool(), (t = cc.instantiate(e.coolPre)).parent = e.node.parent, t.setPosition(0, 100), setTimeout(function () {
							t.destroy()
						}, 700)
					} else if (n.showWhichPrefab > 4) {
						var t;
						o._instance.play_great(), (t = cc.instantiate(e.greatPre)).parent = e.node.parent, t.setPosition(0, 100), setTimeout(function () {
							t.destroy()
						}, 700)
					}
					n.showWhichPrefab = 0
				}), cc.callFunc(this.ctl.resetWeapon, this.ctl))) : this.node.runAction(i)
			},
			stopAction: function () {
				this.node.stopAllActions()
			},
			reset: function () {
				this.stopAction(), this.node.angle = -this.startRot, this.node.position = this.startPos, this.runStartAction(), this.ctl && this.ctl.resumeTouch()
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common"
	}],
	WheelRewardView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "68b79gh2Z5GfYGR7H5bm8gB", "WheelRewardView");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("SkinManager"),
			c = e("MsgManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				reward: cc.Node,
				weaponSp: cc.Sprite,
				videoNode: cc.Node,
				shareNode: cc.Node
			},
			onLoad: function () {
				this.startPnl = cc.find("Canvas/startPnl"), this.gamePnl = cc.find("Canvas/gamePnl"), this.wheelPnl = cc.find("Canvas/wheelPnl"), this.rewardLabel = this.reward.getComponentInChildren(cc.Label), this.arr = this.getArr(), this.videoNode.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.5, 1.15), cc.scaleTo(.5, 1))))
			},
			onEnable: function () {
				this.node.runAction(cc.moveTo(.3, 0, 197))
			},
			onDisable: function () {
				this.node.position = cc.v2(-800, 197)
			},
			onCollisionEnter: function (e, t) {
				switch (e.node.name) {
					case "weapon":
						e.node.stopAllActions(), e.node.angle = -0, t.node.stopAllActions(), this.node.parent.off(cc.Node.EventType.TOUCH_START);
						var i = -t.node.angle % 360,
							a = this.getReward(i);
						n.doAccount(a), this.showReward(a), o._instance.play_getCoin()
				}
			},
			getReward: function (e) {
				var t;
				if (e < 14) t = "Coins x20";
				else if (e < 64) t = "Coins x20";
				else if (e < 104) t = "Coins x99";
				else if (e < 161) t = "Coins x50";
				else if (e < 195)
					if (t = "Null", null !== this.random) {
						var i = this.arr[this.random]; - 1 === n.buy.indexOf(i) && (n.isExperience = !1, n.experienceCount = 0, a._init.buySkin(i), this.random = this.getRandom(), t = "special knife")
					} else if (cc.sys.platform === cc.sys.WECHAT_GAME);
					else {
						c._init.showMsg("\u4ee5\u83b7\u5f97\u8be5\u6b66\u5668")
					} else t = e < 244 ? "Coins x10" : e < 283 ? "Coins x80" : "Coins x20";
				return t
			},
			start: function () { },
			reset: function () {
				n.videoAdisLoad && 0 == n.onceAgain ? this.videoNode.active = !0 : this.videoNode.active = !1, this.refreshWeaponSp()
			},
			refreshWeaponSp: function () {
				this.random = this.getRandom(), this.random ? this.weaponSp.spriteFrame = n.res[this.arr[this.random]] : this.weaponSp.spriteFrame = n.res[48]
			},
			getArr: function () {
				for (var e = [], t = 48; t < 64; t++) - 1 === n.buy.indexOf(t) && e.push(t);
				return e
			},
			getRandom: function () {
				return this.arr = this.getArr(), 0 === this.arr.length ? null : 1 === this.arr.length ? 0 : Math.floor(Math.random() * this.arr.length)
			},
			showReward: function (e) {
				n.showBannerAd(), console.log("\u770b\u89c6\u9891\u56fe\u7247", n.onceAgain), this.reward.active = !0, 0 == n.onceAgain ? this.videoNode.active = !0 : this.videoNode.active = !1, this.rewardLabel.string = "Get " + e
			},
			hideReward: function () {
				n.hideBannerAd(), this.reward.active = !1, this.random ? this.weaponSp.spriteFrame = n.res[this.arr[this.random]] : this.weaponSp.spriteFrame = n.res[48]
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		MsgManager: "MsgManager",
		SkinManager: "SkinManager"
	}],
	WheelView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "bb74afiwJVKIIv6oxDqCEAu", "WheelView");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("ADManager"),
			c = (e("JSNativeBridge"), e("../WyMiniGame"));
		cc.Class({
			extends: cc.Component,
			properties: {
				angle: 360,
				angularVelocity: 135,
				wheel: cc.Node,
				weapon: cc.Node,
				again: cc.Node,
				rewardLabel: cc.Node,
				whiteNode: cc.Node
			},
			onLoad: function () {
				this.count = 0, this.againBtn = this.again.getComponent(cc.Button), this.startPnl = cc.find("Canvas/startPnl"), this.startScript = this.startPnl.getComponent("StartView"), this.weaponScript = this.weapon.getComponent("WeaponView"), this.wheelRewardScript = this.wheel.getComponent("WheelRewardView"), this.gamePnl = cc.find("Canvas/gamePnl"), this.initVideoAd()
			},
			onEnable: function () {
				this.rewardLabel.runAction(cc.spawn(cc.moveBy(1, 600, 0), cc.fadeOut(1))), n.showBannerAd()
			},
			onDisable: function () {
				this.rewardLabel.position = cc.v2(-600, -70)
			},
			onVideoBtnClick: function (e) {
				var t = this;
				n.onceAgain = 1, n.videoAdType = a.VIDEO_AD_TYPE_SHOOTAGAIN, console.warn("-------41", n.videoAdType), this.againBtn.interactable = !1, setTimeout(function () {
					t.againBtn.interactable = !0
				}, 1e3), c.showRewardedVideo(a._init.videoAdCallback), o._instance.play_clickBtn()
			},
			initVideoAd: function () {
				var e = this;
				a._init.shootAgainCallback = function () {
					e.reset(), e.again.active = !1
				}, a._init.videoAd || a._init.initVideoAd()
			},
			start: function () {
				this.runWheelAction(), this.bindTouch()
			},
			bindTouch: function () {
				this.node.on(cc.Node.EventType.TOUCH_START, this.touchStartHandler, this)
			},
			touchStartHandler: function () {
				this.weaponScript.runAction(), o._instance.play_flyKnife()
			},
			runWheelAction: function () {
				this.wheel.runAction(cc.repeatForever(cc.rotateBy(this.angle / this.angularVelocity, this.angle)))
			},
			shareAgain: function (e) {
				var t = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var i = Math.floor(Math.random() * n.shares.length),
						o = n.shares[i];
					wx.shareAppMessage({
						title: o,
						imageUrl: cc.url.raw("resources/share/share" + i + ".jpg"),
						success: function (i) {
							console.log("\u6210\u529f"), t.reset(), e.target.active = !1
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			reset: function () {
				this.wheelRewardScript.hideReward(), this.weaponScript.reset(), this.runWheelAction(), this.bindTouch()
			},
			showPnl: function () {
				this.node.active || (n.hideBannerAd(), n.curLvIdx <= 3 ? (this.node.active = !0, cc.find("Canvas/winPnl").getComponent("WinView").onClickExpBtn()) : this.whiteNode.active ? cc.sys.platform === cc.sys.WECHAT_GAME && a._init.videoAd && (n.videoAdType = null, a._init.videoCallBack = this.nextCallBack.bind(this), a._init.videoAd.show().catch(function (e) {
					0 == n.videoAdisLoad && console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				})) : (this.node.active = !0, cc.find("Canvas/winPnl").getComponent("WinView").onClickExpBtn()))
			},
			nextCallBack: function () {
				this.node.active || (this.node.active = !0, cc.find("Canvas/winPnl").getComponent("WinView").onClickExpBtn())
			},
			closePnl: function () {
				n.hideBannerAd(), this.node.active = !1, this.gamePnl.active = !0, n.onceAgain = 0
			},
			backHome: function () {
				n.hideBannerAd(), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common",
		JSNativeBridge: "JSNativeBridge"
	}],
	WinView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "562f7T5sDNHO6slVSgwAIb4", "WinView");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("ADManager"),
			c = e("ttLp"),
			s = e("SkinManager"),
			r = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				rewardLabel: cc.Label,
				boards: cc.Node,
				expBtn: cc.Node,
				nextBtn: cc.Node,
				gamePnlWeapon: cc.Node,
				sharebutton: cc.Node,
				videoButton: cc.Node,
				luckBoxPnl: cc.Node,
				SBVideo: cc.Node,
				whiteNode: cc.Node,
				winLpPnl: cc.Node,
				losePnl: cc.Node
			},
			onLoad: function () {
				this.shouldVideo = !0, this.index = 0, this.count = 1, this.isDouble = !1, this.startPnl = cc.find("Canvas/startPnl"), this.gamePnl = cc.find("Canvas/gamePnl"), this.wheelPnl = cc.find("Canvas/wheelPnl"), this.boardIdx = 0, this.boradArr = this.boards.children, n.doAdapter(this.node)
			},
			start: function () {
				this.initVideoAd()
			},
			onEnable: function () {
				var e = this;
				if (n.showBannerAd(), this.videoButton.getComponent(cc.Button).interactable = !0, n.showInter(), this.shouldVideo = !0, this.whiteNode.active = !0, n.curLvIdx > 3 && (this.node.opacity = 255), this.videoButton.active = !0, this.isDouble = !1, n.onLine) {
					var t = cc.find("Canvas/winPnl/backBtn");
					n.curLvIdx <= 3 || !n.onLine ? this.SBVideo.active = !1 : (this.SBVideo.active = !1, t.active = !1, setTimeout(function () {
						e.SBVideo.active = !0, setTimeout(function () {
							t.active = !0
						}, 1e3)
					}, 2e3))
				} else n.curLvIdx <= 3 || !n.onLine ? (this.SBVideo.active = !1, this.whiteNode.active = !1) : (this.SBVideo.active = !0, this.whiteNode.active = !1)
			},
			clickWhiteNode: function () {
				this.whiteNode.active && (this.whiteNode.active = !1, this.SBVideo.active = !1)
			},
			clickWatchVideo: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && (n.videoAdType = null, a._init.videoCallBack = this.nextCallBack.bind(this), a._init.videoAd.show().catch(function (e) {
					0 == n.videoAdisLoad && console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				}))
			},
			setCtl: function (e) {
				this.ctl = e
			},
			onClickVideoBtn: function () {
				this.videoButton.getComponent(cc.Button).interactable = !1, o._instance.play_clickBtn(), n.videoAdType = a.DoubleCoin, r.showRewardedVideo(a._init.videoAdCallback)
			},
			initVideoAd: function () {
				var e = this;
				a._init.DoubleCoinCallBack = function () {
					e.shareLpAndVideoReward(e.videoButton)
				}, a._init.videoAd || a._init.initVideoAd()
			},
			doShare: function () {
				var e = this;
				o._instance.play_clickBtn(), n.isShareLpSuccess = 2, setTimeout(function () {
					c.shareLp(e.sharebutton)
				}, 100)
			},
			shareLpAndVideoReward: function (e) {
				if (e.active = !0, this.isDouble) {
					console.log("\u53cc\u500d");
					var t = 3 * parseInt(this.rewardLabel.string);
					this.isDouble = !0
				} else {
					t = 2 * parseInt(this.rewardLabel.string);
					this.isDouble = !0
				}
				n.doAccount(t), this.startPnl.emit("updateMoney"), this.toNext()
			},
			setRewardLabel: function (e) {
				this.rewardLabel.string = e
			},
			setBoard: function (e) {
				this.boardIdx < this.boradArr.length && (e.position = cc.v2(0, 0), e.scale = .4, e.parent = this.boradArr[this.boardIdx], this.boardIdx++, this.boardIdx === this.boradArr.length && (this.expBtn.active = !0, this.nextBtn.active = !1))
			},
			removeAllBoard: function () {
				this.boardIdx === this.boradArr.length && (this.boradArr.forEach(function (e) {
					e.removeAllChildren()
				}), this.boardIdx = 0, n.isAddWeapon = !0)
			},
			onClickExpBtn: function () {
				this.expBtn.active = !1, this.gamePnl.active = !1, this.nextBtn.active = !0, this.node.active = !1
			},
			videPassLv: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && a._init.videoAd && (n.videoAdType = null, a._init.videoCallBack = this.lpPass.bind(this), a._init.videoAd.show().catch(function (e) {
					n.videoAdisLoad, console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				}))
			},
			LosePnlShareLp: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME ? (n.isShareLpSuccess = 4, n.shareLpCallBack = this.lpPass.bind(this), c.shareLp(this.losePnl)) : this.lpPass()
			},
			lpPass: function () {
				console.log("\u8df3\u5173\u6210\u529f"), this.losePnl.active = !1, n.curLvIdx++, n.experienceCount = 10, s._init.experienceCount(), this.ctl.relive(), cc.find("Canvas/startPnl").emit("updateMoney"), console.log("\u52a0\u8f7d\u4e0b\u4e00\u7ec4\u6c34\u679c"), c.startLp(), cc.sys.localStorage.setItem("topLvIdx", n.topLvIdx), n.hideBannerAd()
			},
			wheelViewNext: function () {
				n.experienceCount = 10, s._init.experienceCount(), this.ctl.doPass(), this.startPnl.emit("updateMoney"), cc.log("\u52a0\u8f7d\u4e0b\u4e00\u7ec4\u6c34\u679c"), this.removeAllBoard(), this.node.active = !1, c.startLp(), n.hideBannerAd()
			},
			toNext: function () {
				this.videoButton.getComponent(cc.Button).interactable = !0;
				o._instance.play_clickBtn(), n.curLvIdx <= 3 || !n.onLine ? (n.experienceCount = 10, s._init.experienceCount(), this.ctl.doPass(), this.startPnl.emit("updateMoney"), cc.log("\u52a0\u8f7d\u4e0b\u4e00\u7ec4\u6c34\u679c"), this.removeAllBoard(), this.node.active = !1, c.startLp(), n.hideBannerAd()) : this.whiteNode.active ? cc.sys.platform === cc.sys.WECHAT_GAME && (n.videoAdType = null, a._init.videoCallBack = this.nextCallBack.bind(this), a._init.videoAd.show().catch(function (e) {
					n.videoAdisLoad, console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				})) : (n.experienceCount = 10, s._init.experienceCount(), this.ctl.doPass(), this.startPnl.emit("updateMoney"), cc.log("\u52a0\u8f7d\u4e0b\u4e00\u7ec4\u6c34\u679c"), this.removeAllBoard(), this.node.active = !1, c.startLp(), n.hideBannerAd())
			},
			nextCallBack: function () {
				n.experienceCount = 10, s._init.experienceCount(), this.ctl.doPass(), this.startPnl.emit("updateMoney"), this.removeAllBoard(), this.node.active = !1, c.startLp(), n.hideBannerAd(), n.doAccount(100), cc.sys.platform, cc.sys.WECHAT_GAME
			},
			toBack: function () {
				n.hideBannerAd(), o._instance.play_clickBtn(), this.ctl.reset(), this.expBtn.active || this.removeAllBoard(), this.startPnl.active = !0, this.gamePnl.active = !1, this.node.active = !1, this.startPnl.emit("updateMoney")
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		Common: "Common",
		SkinManager: "SkinManager",
		ttLp: "ttLp"
	}],
	WyMiniGame: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "1861e7+RxRPmYHQuv/PHL/d", "WyMiniGame");
		var n = e("Common");
		t.exports = {
			showInterstitial: function () {
				/*var e = parseInt(cc.sys.localStorage.getItem("time")),
					t = Number(new Date);
				if (console.warn("showInterstitial", e, t, (t - e) / 1e3), (t - e) / 1e3 >= 40) {
					var i = MiniGameAds.isInterstitialReady();
					console.warn("-----\x3e>>5 isInterstitialReady", i), i ? MiniGameAds.showInterstitial().then(function () {
						console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a: \u6210\u529f")
					}).catch(function (e) {
						console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u63d2\u5c4f\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0:" + e.message)
					}) : console.info("\u63d2\u5c4f\u5e7f\u544a\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e"), cc.sys.localStorage.setItem("time", Number(new Date))
				}*/
			},
			showRewardedVideo: function (e) {
				console.warn("-------24", "25", Number(new Date));
				e();
				/*var t = Number(new Date);
				cc.sys.localStorage.setItem("time", String(t)), MiniGameAds.isRewardvideoReady() ? MiniGameAds.showRewardedVideo().then(function () {
					var t = parseInt(cc.sys.localStorage.getItem("watchVideoTime"));
					t += 1, console.warn("Rewarded Video", n.watchVideoTime), cc.sys.localStorage.setItem("watchVideoTime", String(t)), e(), console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u6fc0\u52b1\u5e7f\u544a: \u6210\u529f")
				}).catch(function (e) {
					console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u6fc0\u52b1\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
				}) : console.info("\u6fc0\u52b1\u89c6\u9891\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e")*/
			},
			showBanner: function () {
				/*MiniGameAds.isBannerReady() ? MiniGameAds.showBanner().then(function () {
					console.info("\u65b0\u63a5\u53e3\u64ad\u653e\u6a2a\u5e45\u5e7f\u544a: \u6210\u529f")
				}).catch(function (e) {
					console.error("\u65b0\u63a5\u53e3\u64ad\u653e\u6a2a\u5e45\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
				}) : console.info("\u6a2a\u5e45\u5e7f\u544a\u6ca1\u6709\u52a0\u8f7d\u6210\u529f\uff0c\u65e0\u6cd5\u64ad\u653e")*/
			},
			hideBanner: function () {
				/*MiniGameAds.hideBanner().then(function () {
					console.info("\u65b0\u63a5\u53e3\u9690\u85cf\u6fc0\u52b1\u5e7f\u544a: \u6210\u529f")
				}).catch(function (e) {
					console.error("\u65b0\u63a5\u53e3\u9690\u85cf\u6fc0\u52b1\u5e7f\u544a: \u5931\u8d25\uff0c\u539f\u56e0: " + e.message)
				})*/
			}
		}, cc._RF.pop()
	}, {
		Common: "Common"
	}],
	changePic: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "5fb03urNmxHuqChCpVoDV4j", "changePic"), cc.Class({
			extends: cc.Component,
			properties: {
				gameoverMoreGameButton: cc.Sprite,
				changePicture: [cc.SpriteFrame]
			},
			onLoad: function () {
				var e = this;
				(this.index = 0, cc.sys.platform === cc.sys.WECHAT_GAME) && ("ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal && !window.XiGua ? (this.gameoverMoreGameButton.node.active = !0, setInterval(function () {
					e.index++;
					var t = e.index % 10;
					e.gameoverMoreGameButton.spriteFrame = e.changePicture[t]
				}, 2500)) : this.gameoverMoreGameButton.node.active = !1)
			},
			start: function () { },
			moreGame: function () {
				"ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal && tt.showMoreGamesModal({
					appLaunchOptions: [{
						appId: "ttceb4b809519e3259"
					}],
					success: function (e) {
						console.log("success", e)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			}
		}), cc._RF.pop()
	}, {}],
	experienceLock: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "fb905/INkRLe754rTMkSgjn", "experienceLock");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("./Common"));
		var o = e("SkinManager"),
			a = e("ADManager"),
			c = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				light: cc.Node,
				weapon: cc.Sprite,
				showCount: cc.Label,
				closeBtn: cc.Node,
				videoBtn: cc.Node,
				onLineNode: cc.Node,
				offLineNode: cc.Node,
				nowatchVideo: cc.Node,
				watchNode: cc.Node,
				zanshishiyong: cc.Node,
				zanbushiyong: cc.Node
			},
			onLoad: function () {
				this.count = 0, this.videoBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, 1.15), cc.scaleTo(.8, 1)))), n.default.onLine ? (this.onLineNode.active = !0, this.offLineNode.active = !1) : (this.onLineNode.active = !1, this.offLineNode.active = !0)
			},
			onEnable: function () {
				var e = this;
				this.watchNode.children[0].active = !0, this.nowatchVideo.children[0].active = !0, this.count++, this.count % 2 == 0 ? (this.nowatchVideo.active = !0, this.nowatchVideo.getComponent(cc.Button).interactable = !1, this.watchNode.active = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !1, setTimeout(function () {
					e.zanbushiyong.active = !0, e.nowatchVideo.getComponent(cc.Button).interactable = !0
				}, 1500)) : (this.watchNode.active = !0, this.nowatchVideo.active = !1, this.watchNode.getComponent(cc.Button).interactable = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !1, setTimeout(function () {
					e.zanshishiyong.active = !0, e.watchNode.getComponent(cc.Button).interactable = !0
				}, 1500), console.log(">>>111111>>>\u663e\u793a")), this.showWeaponSprite(), setTimeout(function () {
					e.closeBtn.active = !0
				}, 1500), n.default.showBannerAd()
			},
			onDisable: function () {
				n.default.hideBannerAd()
			},
			clickWatchNode: function () {
				this.watchNode.children[0].active ? (this.watchNode.children[0].active = !1, this.zanbushiyong.active = !0, this.zanshishiyong.active = !1) : (this.watchNode.children[0].active = !0, this.zanbushiyong.active = !1, this.zanshishiyong.active = !0)
			},
			clickNowatchNode: function () {
				this.nowatchVideo.children[0].active ? (this.nowatchVideo.children[0].active = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !0) : (this.nowatchVideo.children[0].active = !0, this.zanbushiyong.active = !0, this.zanshishiyong.active = !1)
			},
			zanbushiyongEvent: function () {
				this.close()
			},
			zanshishiyongEvent: function () {
				this.clickVideo()
			},
			clickStartGame: function () {
				this.watchNode.active ? this.watchNode.children[0].active ? this.clickVideo() : this.close() : this.nowatchVideo.children[0].active ? this.close() : this.clickVideo()
			},
			getArr: function () {
				for (var e = [], t = 38; t < 43; t++) - 1 == n.default.buy.indexOf(t) && e.push(t);
				return e
			},
			buySkin: function (e) {
				o._init.buySkin(e)
			},
			showWeaponSprite: function () {
				if (this.arr = this.getArr(), 0 != this.arr.length) {
					this.rand = Math.floor(Math.random() * this.arr.length);
					var e = this.arr[this.rand];
					this.weapon.spriteFrame = n.default.res[e], this.showCount.string = n.default.watchVideoLock[e - 38]
				} else this.weapon.spriteFrame = n.default.res[43], this.showCount.string = n.default.watchVideoLock[5], console.log("\u5df2\u7ecf\u6ca1\u6709\u53ef\u4ee5\u5c55\u793a\u7684\u4e86")
			},
			clickVideo: function () {
				n.default.videoAdType = a.videoExpGainSkin, c.showRewardedVideo(a._init.videoAdCallback)
			},
			videoReward: function () {
				n.default.hideBannerAd();
				var e = this;
				a._init.videoExpGainSkinCallBack = function () {
					n.default.watchVideoLock[e.arr[e.rand] - 38]--, cc.sys.localStorage.setItem("watchVideoLock", JSON.stringify(n.default.watchVideoLock)), o._init.experienceSkin(e.arr[e.rand]), n.default.watchVideoLock[e.arr[e.rand] - 38] <= 0 && (e.buySkin(e.arr[e.rand]), e.showWeaponSprite()), e.showCount.string = n.default.watchVideoLock[e.arr[e.rand] - 38], e.node.active = !1
				}, a._init.videoAd || a._init.initVideoAd()
			},
			close: function () {
				n.default.hideBannerAd(), this.node.active = !1
			},
			start: function () {
				this.light.runAction(cc.repeatForever(cc.rotateBy(5, 360))), this.videoReward()
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		"./Common": "Common",
		ADManager: "ADManager",
		SkinManager: "SkinManager"
	}],
	experienceView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "0498fcAIDFLjbIYFpqAM2gl", "experienceView");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager"),
			a = e("ADManager"),
			c = e("SkinManager"),
			s = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				experiencePic: cc.Sprite,
				light: cc.Node,
				shareButton: cc.Node,
				videoButton: cc.Node,
				closeBtn: cc.Node,
				onLineNode: cc.Node,
				offLineNode: cc.Node,
				nowatchVideo: cc.Node,
				watchNode: cc.Node,
				zanshishiyong: cc.Node,
				zanbushiyong: cc.Node
			},
			onLoad: function () {
				this.arr = [], this.random = 0, this.count = 0, this.videoButton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1)))), n.default.onLine ? (this.onLineNode.active = !0, this.offLineNode.active = !1) : (this.onLineNode.active = !1, this.offLineNode.active = !0)
			},
			onEnable: function () {
				var e = this;
				this.arr = this.getArr(), this.random = this.getRandom(), null !== this.random ? this.experiencePic.spriteFrame = n.default.res[this.arr[this.random]] : console.log("\u5df2\u7ecf\u89e3\u9501\u6240\u6709\u6b66\u5668"), this.watchNode.children[0].active = !0, this.nowatchVideo.children[0].active = !0, this.count++, this.count % 2 == 0 ? (this.shareButton.active = !1, this.videoButton.active = !0, this.nowatchVideo.active = !0, this.watchNode.active = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !1, this.nowatchVideo.getComponent(cc.Button).interactable = !1, setTimeout(function () {
					e.zanbushiyong.active = !0, e.nowatchVideo.getComponent(cc.Button).interactable = !0
				}, 1500)) : (this.shareButton.active = !1, this.videoButton.active = !0, this.watchNode.active = !0, this.nowatchVideo.active = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !1, this.watchNode.getComponent(cc.Button).interactable = !1, setTimeout(function () {
					e.zanshishiyong.active = !0, e.watchNode.getComponent(cc.Button).interactable = !0
				}, 1500), console.log(">>222222>>>>\u663e\u793a")), n.default.showBannerAd()
			},
			clickWatchNode: function () {
				this.watchNode.children[0].active ? (this.watchNode.children[0].active = !1, this.zanbushiyong.active = !0, this.zanshishiyong.active = !1) : (this.watchNode.children[0].active = !0, this.zanbushiyong.active = !1, this.zanshishiyong.active = !0)
			},
			clickNowatchNode: function () {
				this.nowatchVideo.children[0].active ? (this.nowatchVideo.children[0].active = !1, this.zanbushiyong.active = !1, this.zanshishiyong.active = !0) : (this.nowatchVideo.children[0].active = !0, this.zanbushiyong.active = !0, this.zanshishiyong.active = !1)
			},
			zanbushiyongEvent: function () {
				this.close()
			},
			zanshishiyongEvent: function () {
				this.clickVideo()
			},
			clickStartGame: function () {
				this.watchNode.active ? this.watchNode.children[0].active ? this.clickVideo() : this.close() : this.nowatchVideo.children[0].active ? this.close() : this.clickVideo()
			},
			doExperience: function () {
				n.default.hideBannerAd();
				null !== this.random && (c._init.experienceSkin(this.arr[this.random]), this.node.active = !1)
			},
			getArr: function () {
				for (var e = [], t = 0; t < 64; t++) - 1 === n.default.buy.indexOf(t) && e.push(t);
				return e
			},
			getRandom: function () {
				return 0 === this.arr.length ? null : 1 === this.arr.length ? 0 : Math.floor(Math.random() * this.arr.length)
			},
			start: function () {
				this.light.runAction(cc.repeatForever(cc.rotateBy(5, 360))), this.videoReward()
			},
			clickVideo: function () {
				o._instance.play_clickBtn(), n.default.videoAdType = a.VIDEO_AD_TYPE_EXPERIENCE, s.showRewardedVideo(a._init.videoAdCallback)
			},
			videoReward: function () {
				var e = this;
				a._init.experienceCallback = function () {
					e.doExperience()
				}, a._init.videoAd || a._init.initVideoAd()
			},
			share: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					o._instance.play_clickBtn();
					var e = this,
						t = Math.floor(Math.random() * n.default.shares.length),
						i = n.default.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.doExperience()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			close: function () {
				n.default.hideBannerAd(), o._instance.play_clickBtn(), this.node.active = !1
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		SkinManager: "SkinManager"
	}],
	"exported-GameBoxInter": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "78b72Z28rxKybaFuT/nEvWs", "exported-GameBoxInter");
		var n = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				manage: cc.Node
			},
			init: function () {
				this.manage.getComponent("exported").init()
			},
			onLoad: function () {
				var e = this;
				cc.director.on("gameBoxShow", function (t) {
					e.node.active = !0, this.manage.getComponent("exported").show({
						appid: t.appid,
						callback: function () {
							console.log("\u6709 appid \u7684\u6253\u5f00")
						}
					})
				}.bind(this))
			},
			start: function () {
				this.init()
			},
			show: function (e) {
				this.node.active = !0, this.manage.getComponent("exported").show({
					appid: e,
					callback: function () {
						console.log("\u6253\u5f00\u5b8c\u6210")
					}
				})
			},
			hide: function () {
				var e = this;
				n.showBannerAd(), this.manage.getComponent("exported").hide({
					callback: function () {
						e.node.active = !1
					}
				})
			}
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	"exported-GameIcon": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "01336qoUOVMGZUDdxEaRrrO", "exported-GameIcon"), cc.Class({
			extends: cc.Component,
			properties: {
				gameName: cc.Label,
				gameSprite: cc.Sprite,
				gameStyle: cc.Label,
				ui: cc.Node
			},
			init: function (e) {
				if (e.width) {
					var t = e.width / this.node.width;
					this.ui.scale = t, this.node.width = this.node.width * t, this.node.height = this.node.height * t
				}
				e.appid && (this.appid = e.appid), e.name && (this.gameName.string = e.name), e.spriteFrame && (this.gameSprite.spriteFrame = e.spriteFrame), e.style && (this.gameStyle.string = e.style), e.qrcode && (this.qrcode = e.qrcode), e.btnCallback && (this.btnCallback = e.btnCallback)
			},
			setSpriteFrame: function (e) {
				this.gameSprite.spriteFrame = e
			},
			btn: function () {
				this.btnCallback && this.btnCallback({
					name: this.gameName.string,
					appid: this.appid,
					qrcode: this.qrcode
				})
			}
		}), cc._RF.pop()
	}, {}],
	"exported-ItemTitleUI": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "d6534EZXjZOYL57pVSQOYR3", "exported-ItemTitleUI"), cc.Class({
			extends: cc.Component,
			properties: {
				ui: cc.Node
			},
			onLoad: function () {
				var e = cc.winSize.width / 750;
				this.node.height = this.node.height * e, this.ui.scale = e
			}
		}), cc._RF.pop()
	}, {}],
	"exported-Layer": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "e716fNPOr1I65gUE4GAAgGm", "exported-Layer"), cc.Class({
			extends: cc.Component,
			properties: {
				gameLogo: cc.Sprite,
				gameTitle: cc.Label,
				gameDesc: cc.Label
			},
			init: function (e) {
				this.node.scale = cc.winSize.width / 750, this.gameTitle.string = e.title, this.gameDesc.string = e.desc, this.appid = e.appid, this.qrcode = e.qrcode, this.callback = e.callback
			},
			setGameLogo: function (e) {
				this.gameLogo.spriteFrame = e
			},
			btnCallBack: function () {
				this.callback({
					appid: this.appid,
					qrcode: this.qrcode
				})
			},
			close: function () {
				this.node.active = !1
			}
		}), cc._RF.pop()
	}, {}],
	"exported-TopUI": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "56f6emQeBNBoY5WZPQmfaSG", "exported-TopUI"), cc.Class({
			extends: cc.Component,
			properties: {
				ui: cc.Node
			},
			onLoad: function () {
				var e = cc.winSize.width / 750;
				this.node.height = this.node.height * e, this.ui.scale = e
			}
		}), cc._RF.pop()
	}, {}],
	exported: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "6d55fkwOaVEI5O6sIresH23", "exported");
		var n = e("GlobalDefine"),
			o = e("WeChatFileSystem"),
			a = n.KEY;
		cc.Class({
			extends: cc.Component,
			properties: {
				itemBox: {
					default: [],
					type: cc.Node
				},
				gamePrefab: cc.Prefab,
				gamePrefabScript: "",
				canvas: cc.Node,
				layout: cc.Node,
				waiting: cc.Node,
				layer: cc.Node,
				version: cc.Label
			},
			init: function () {
				var e = n.game_name;
				if (cc.sys.platform === cc.sys.WECHAT_GAME && o.init(a, e), this.version.string = "V " + n.version, this.initItemBox(), this.initLayout(), this.isRunningA = !0, this.localData = {}, this.newlist = {}, cc.sys.localStorage.getItem("first_gameBoxOpen")) {
					var t = cc.sys.localStorage.getItem(a);
					console.log("-------------\x3e>", t.length), t.length > 0 && (this.localData = JSON.parse(t), this.newlist = JSON.parse(t), this.initLocalData())
				} else this.removeAllFile(), cc.sys.localStorage.setItem("first_gameBoxOpen", "not"), cc.sys.localStorage.setItem(a, {});
				this.updateData(e)
			},
			initLocalData: function () {
				var e = this,
					t = this;
				Object.keys(this.localData).forEach(function (i) {
					var n = e.localData[i],
						o = cc.instantiate(t.gamePrefab);
					o.getComponent(t.gamePrefabScript).init({
						width: .2 * cc.winSize.width,
						name: n.title,
						appid: i,
						spriteFrame: null,
						style: n.style,
						qrcode: n.QRCode,
						btnCallback: t.btnCallback.bind(t)
					}), o.name = i, o.setSiblingIndex(n.index), o.parent = t.itemBox[n.type - 1], e.updateNodeSpriteFrame(o, n.logo)
				})
			},
			updateData: function (e) {
				var t = this,
					i = n.SERVE_PATH + "7cgamesBoxData.json?" + e;
				cc.loader.load(i, function (e, i) {
					e ? console.log(e) : t.updateList(i)
				})
			},
			updateList: function (e) {
				var t = this;
				this.newlist = {};
				var i = this,
					n = -1,
					c = -1;
				e.data.forEach(function (e) {
					var a;
					if (a = 1 == e.type ? ++n : ++c, t.newlist[e.appid] = {
						index: a,
						type: e.type,
						desc: e.desc,
						title: e.title,
						logo: e.logo,
						style: e.style,
						QRCode: e.QRCode
					}, t.localData[e.appid]) {
						for (var s, r = 0; r < t.itemBox.length; r++)
							if (t.itemBox[r].getChildByName(e.appid)) {
								s = t.itemBox[r].getChildByName(e.appid);
								break
							} s.parent = t.itemBox[e.type - 1], s.setSiblingIndex(a), s.getComponent(i.gamePrefabScript).init({
								name: e.title,
								style: e.style
							}), e.logo != t.localData[e.appid].logo && (cc.sys.platform === cc.sys.WECHAT_GAME && o.removeFile({
								url: t.localData[e].logo,
								success: function () {
									console.log("\u5220\u9664\u6210\u529f")
								}
							}), t.updateNodeSpriteFrame(s, e.logo)), e.QRCode != t.localData[e.appid].QRCode && (cc.sys.platform === cc.sys.WECHAT_GAME && o.removeFile({
								url: t.localData[e].QRCode,
								success: function () {
									console.log("\u5220\u9664\u6210\u529f")
								}
							}), s.getComponent(i.gamePrefabScript).init({
								qrcode: e.QRCode
							}))
					} else {
						var l = cc.instantiate(i.gamePrefab);
						l.getComponent(i.gamePrefabScript).init({
							width: .2 * cc.winSize.width,
							name: e.title,
							appid: e.appid,
							spriteFrame: null,
							style: e.style,
							qrcode: e.QRCode,
							btnCallback: i.btnCallback.bind(i)
						}), l.name = e.appid, l.parent = i.itemBox[e.type - 1], l.setSiblingIndex(a), t.updateNodeSpriteFrame(l, e.logo)
					}
				}), this.removeOldData(), cc.sys.localStorage.setItem(a, JSON.stringify(this.newlist))
			},
			removeOldData: function () {
				var e = this;
				Object.keys(this.localData).forEach(function (t) {
					if (!e.newlist[t]) {
						cc.sys.platform === cc.sys.WECHAT_GAME && o.removeFile({
							url: e.localData[t].logo,
							success: function () {
								console.log("\u5220\u9664\u6210\u529f")
							}
						}), e.localData[t].QRCode != e.localData[t].QRCode && cc.sys.platform === cc.sys.WECHAT_GAME && o.removeFile({
							url: e.localData[t].QRCode,
							success: function () {
								console.log("\u5220\u9664\u6210\u529f")
							}
						});
						for (var i = 0; i < e.itemBox.length; i++) {
							var n = e.itemBox[i].getChildByName(t);
							if (n) {
								n.removeFromParent();
								break
							}
						}
					}
				})
			},
			updateNodeSpriteFrame: function (e, t) {
				var i = this;
				if (cc.sys.platform === cc.sys.WECHAT_GAME) o.getFile({
					url: n.SERVE_PATH + t,
					success: function (t) {
						cc.loader.load(t, function (t, n) {
							var o = new cc.SpriteFrame(n);
							e.getComponent(i.gamePrefabScript).setSpriteFrame(o)
						})
					},
					fail: function () { }
				});
				else {
					var a = {
						url: n.SERVE_PATH + t + "?ass",
						type: "png"
					};
					cc.loader.load(a, function (t, n) {
						var o = new cc.SpriteFrame(n);
						e.getComponent(i.gamePrefabScript).setSpriteFrame(o)
					})
				}
			},
			btnCallback: function (e) {
				console.log(e);
				var t = e.appid,
					i = e.qrcode,
					n = this;
				n.waiting.active = !0, cc.sys.platform === cc.sys.WECHAT_GAME ? wx.navigateToMiniProgram ? wx.navigateToMiniProgram({
					appId: t,
					path: "",
					success: function () {
						n.waiting.active = !1
					},
					fail: function (e) {
						-1 == e.errMsg.indexOf("fail cancel") ? n.showQR({
							qrcode: i
						}) : n.waiting.active = !1
					}
				}) : n.showQR({
					qrcode: i
				}) : n.waiting.active = !1
			},
			showQR: function (e) {
				var t = this;
				wx.previewImage({
					urls: [n.SERVE_PATH + e.qrcode],
					success: function () {
						t.waiting.active = !1, console.log("wei xin previewImage success....")
					}
				})
			},
			initLayout: function () {
				var e = cc.winSize;
				e.height / e.width >= 2.1 && (this.layout.getComponent("cc.Widget").top = 40)
			},
			initItemBox: function () {
				this.itemBox.forEach(function (e) {
					e.getComponent("cc.Layout").spacingX = .04 * cc.winSize.width, e.getComponent("cc.Layout").spacingY = .03 * cc.winSize.width, e.getComponent("cc.Layout").paddingTop = .02 * cc.winSize.width, e.getComponent("cc.Layout").paddingBottom = .04 * cc.winSize.width, e.getComponent("cc.Layout").paddingLeft = .04 * cc.winSize.width
				})
			},
			show: function (e) {
				console.log("------------------------\x3e>show");
				var t = this,
					i = cc.callFunc(function () {
						this.startPosition = this.canvas.position, console.log("------------------------\x3e>SHOW___00"), t.isRunningA = !1
					}, this),
					a = cc.moveTo(.3, cc.v2(0, 0)),
					c = cc.callFunc(function () {
						if (console.log("------------------------\x3e>SHOW___1111"), !t.newlist) return console.log("------------------------\x3e>SHOW___222"), void t.init();
						t.isRunningA = !0, e.callback && e.callback(), e.appid && (t.newlist[e.appid] ? (this.layer.getComponent("exported-Layer").init({
							appid: e.appid,
							title: t.newlist[e.appid].title,
							desc: t.newlist[e.appid].desc,
							qrcode: t.newlist[e.appid].QRCode,
							callback: t.btnCallback.bind(t)
						}), cc.sys.platform === cc.sys.WECHAT_GAME && o.getFile({
							url: n.SERVE_PATH + t.newlist[e.appid].logo,
							success: function (e) {
								cc.loader.load(e, function (e, i) {
									var n = new cc.SpriteFrame(i);
									t.layer.getComponent("exported-Layer").setGameLogo(n)
								})
							},
							fail: function () {
								console.log("\u52a0\u8f7d\u56fe\u7247\u5931\u8d25")
							}
						}), this.layer.active = !0) : console.log("\u4e0d\u5b58\u5728"))
					}, this),
					s = cc.sequence(i, a, c);
				console.log("------------------------\x3e>SHOW___333"), this.isRunningA && (console.log("------------------------\x3e>SHOW___444"), this.canvas.runAction(s))
			},
			hide: function (e) {
				var t = this,
					i = cc.callFunc(function () {
						t.isRunningA = !1
					}, this),
					n = cc.moveTo(.3, this.startPosition),
					o = cc.callFunc(function () {
						t.isRunningA = !0, e.callback()
					}, this),
					a = cc.sequence(i, n, o);
				this.isRunningA && this.canvas.runAction(a)
			},
			readBtn: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) o.showFile();
				else {
					var e = cc.sys.localStorage.getItem(a);
					if ("null" != e) Object.keys(e)
				}
			},
			clearLocsl: function () {
				cc.sys.localStorage.setItem(a, {})
			},
			removeAllFile: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					var e = cc.sys.localStorage.getItem(a);
					if (!e) return;
					var t = e;
					Object.keys(t).forEach(function (e) {
						o.removeFile({
							url: t[e].logo,
							success: function () { }
						}), o.removeFile({
							url: t[e].qrcode,
							success: function () { }
						})
					}), cc.sys.localStorage.setItem(a, {})
				} else cc.sys.localStorage.setItem(a, {})
			}
		}), cc._RF.pop()
	}, {
		GlobalDefine: "GlobalDefine",
		WeChatFileSystem: "WeChatFileSystem"
	}],
	gameOverGameBox: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "cbff0HMZ65E5KbqccT2Rok7", "gameOverGameBox"), cc.Class({
			extends: cc.Component,
			properties: {
				changeSprite: [cc.SpriteFrame]
			},
			onLoad: function () {
				this.appIdList = ["wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c", "wx81ca6eefc75f9a0e", "wx77296317fcad8126", "wx4e436e3404287175", "wx4443d8e37ed71c72", "wxd7984673a9c88bd9", "wxd7984673a9c88bd9"];
				for (var e = 0; e < 10; e++) this.changeSprite[e].appid = this.appIdList[e];
				for (var t = 0; t < this.node.childrenCount; t++) this.node.children[t].getComponent(cc.Sprite).spriteFrame = this.changeSprite[t];
				this.changeSprite.splice(0, 6)
			},
			start: function () {
				this.clickSprite()
			},
			clickSprite: function () {
				for (var e = this, t = 0; t < this.node.childrenCount; t++) this.node.children[t].on("touchstart", function (t) {
					e.changeSprite.push(t.target.getComponent(cc.Sprite).spriteFrame), t.target.getComponent(cc.Sprite).spriteFrame = e.changeSprite[0], e.changeSprite.splice(0, 1), e.moreGame()
				})
			},
			moreGame: function () {
				"ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal && tt.showMoreGamesModal({
					appLaunchOptions: [{
						appId: "ttceb4b809519e3259"
					}],
					success: function (e) {
						console.log("success", e)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			}
		}), cc._RF.pop()
	}, {}],
	guessLike: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "c5c670uOXFLv5zkZehUfRaQ", "guessLike"), cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				this.minPro = ["wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c", "wx81ca6eefc75f9a0e", "wx77296317fcad8126", "wx4e436e3404287175", "wx4443d8e37ed71c72", "wxd7984673a9c88bd9", "wx6b755b2236bbc30a", "wxc2e87e974b7ee0e3", "wxd00371bcee8a36cc", "wx98213e73c7b9a04c"]
			},
			start: function () {
				this.toMinPro()
			},
			toMinPro: function () {
				for (var e = this, t = this, i = function (i) {
					e.node.children[i].on("touchstart", function () {
						wx.navigateToMiniProgram({
							appId: t.minPro[i],
							path: ""
						})
					})
				}, n = 0; n < this.node.childrenCount; n++) {
					i(n)
				}
			}
		}), cc._RF.pop()
	}, {}],
	loseLp: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "58e72emGPhC4LGBPRlmrNWE", "loseLp"), cc.Class({
			extends: cc.Component,
			properties: {
				nextStep: cc.Node,
				showPic: cc.Sprite,
				showSpriteFrame: [cc.SpriteFrame],
				whiteNode: cc.Node,
				videoBtn: cc.Node
			},
			onEnable: function () {
				var e = this;
				this.videoBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, 1.1), cc.scaleTo(.8, 1))));
				var t = Math.floor(Math.random() * this.showSpriteFrame.length);
				this.showPic.spriteFrame = this.showSpriteFrame[t], setTimeout(function () {
					e.nextStep.active = !0
				}, 3e3)
			},
			clickWhiteNode: function () {
				this.whiteNode.active ? this.whiteNode.active = !1 : this.whiteNode.active = !0
			},
			onDisable: function () {
				this.nextStep.active = !1
			},
			start: function () { }
		}), cc._RF.pop()
	}, {}],
	luckBoxView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "7deb4oN+T9IIK4GrK6lVMgU", "luckBoxView");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager"),
			a = e("ADManager"),
			c = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				light: cc.Node,
				sharkStar: [cc.Node],
				startPnl: cc.Node,
				shareButton: cc.Node,
				videoBUtton: cc.Node,
				winPnl: cc.Node,
				closeBtn: cc.Node,
				whiteBtn: cc.Node,
				xianDingPnl: cc.Node
			},
			onLoad: function () {
				this.losePnl = cc.find("Canvas/losePnl"), this.loseScript = this.losePnl.getComponent("LoseView"), this.count = 0
			},
			onEnable: function () {
				this.random = Math.floor(900 * Math.random()) + 100, n.default.showBannerAd()
			},
			clickwihteBtn: function () {
				this.whiteBtn.active ? (this.whiteBtn.active = !1, this.closeBtn.active = !0) : (this.whiteBtn.active = !0, this.closeBtn.active = !1)
			},
			onDisable: function () { },
			start: function () {
				var e = this;
				this.light.runAction(cc.repeatForever(cc.rotateBy(8, 360))), this.sharkStar[0].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1)))), setTimeout(function () {
					e.sharkStar[1].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1))))
				}, 150), setTimeout(function () {
					e.sharkStar[2].runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.3, 1.2), cc.scaleTo(.3, 1))))
				}, 200), this.videoBUtton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1)))), this.videoReward()
			},
			clickVideo: function () {
				o._instance.play_clickBtn(), n.default.videoAdType = a.luckBox, c.showRewardedVideo(a._init.videoAdCallback)
			},
			videoReward: function () {
				var e = this;
				a._init.luckBoxCallBack = function () {
					e.shareAndVideoCallBack()
				}, a._init.videoAd || a._init.initVideoAd()
			},
			shareAndVideoCallBack: function () {
				n.default.hideBannerAd();
				n.default.doAccount(this.random), this.startPnl.emit("updateMoney"), this.node.active = !1, this.winPnl.active = !0
			},
			share: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					o._instance.play_clickBtn();
					var e = this,
						t = Math.floor(Math.random() * n.default.shares.length),
						i = n.default.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.shareAndVideoCallBack()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			close: function () {
				n.default.hideBannerAd(), this.getArr().length > 0 && (n.default.isShowLose || n.default.isShowWin) ? (this.showXianDingPnl(), this.node.active = !1) : n.default.isShowLose ? (n.default.isShowLose = !1, this.losePnl.active = !0, this.loseScript.startTimer()) : (n.default.isShowWin = !1, this.node.active = !1, this.winPnl.active = !0), o._instance.play_clickBtn()
			},
			getArr: function () {
				for (var e = [], t = 43; t < 48; t++) - 1 == n.default.buy.indexOf(t) && e.push(t);
				return e
			},
			showXianDingPnl: function () {
				this.xianDingPnl.active = !0
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager"
	}],
	missionView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "50bb6H8M6lJ85YXtCSFoLvd", "missionView");
		var n = e("SkinManager"),
			o = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {
				fortyFruit: [cc.SpriteFrame],
				hundredFruit: [cc.SpriteFrame],
				fortyChangePic: cc.Sprite,
				hundredChangePic: cc.Sprite,
				content: cc.Node,
				startPnl: cc.Node,
				toPlayButton: [cc.Node],
				rewardButton: [cc.Node],
				gamePnl: cc.Node
			},
			onLoad: function () {
				var e = new Date;
				o.missionTime = e.getTime(), cc.sys.localStorage.setItem("missionTime", o.missionTime), this.fortyChangePic.spriteFrame = this.fortyFruit[o.randomMission], this.hundredChangePic.spriteFrame = this.hundredFruit[o.randomMission]
			},
			onEnable: function () {
				var e = this.content.children[0].getChildByName("targetLabel").getComponent(cc.Label),
					t = this.content.children[1].getChildByName("targetLabel").getComponent(cc.Label),
					i = this.content.children[2].getChildByName("targetLabel").getComponent(cc.Label),
					n = this.content.children[3].getChildByName("targetLabel").getComponent(cc.Label),
					a = this.content.children[4].getChildByName("targetLabel").getComponent(cc.Label),
					c = this.content.children[5].getChildByName("targetLabel").getComponent(cc.Label);
				0 == o.randomMission ? (e.string = (o.waterMelonCount > 40 ? 40 : o.waterMelonCount) + "/40", t.string = (o.waterMelonCount > 100 ? 100 : o.waterMelonCount) + "/100", o.waterMelonCount >= 40 && (this.toPlayButton[0].active = !1), o.waterMelonCount >= 100 && (this.toPlayButton[1].active = !1)) : 1 == o.randomMission ? (e.string = (o.appleCount > 40 ? 40 : o.appleCount) + "/40", t.string = (o.appleCount > 100 ? 100 : o.appleCount) + "/100", o.appleCount >= 40 && (this.toPlayButton[0].active = !1), o.appleCount >= 100 && (this.toPlayButton[1].active = !1)) : 2 == o.randomMission ? (e.string = (o.lemonCount > 40 ? 40 : o.lemonCount) + "/40", t.string = (o.lemonCount > 100 ? 100 : o.lemonCount) + "/100", o.lemonCount >= 40 && (this.toPlayButton[0].active = !1), o.lemonCount >= 100 && (this.toPlayButton[1].active = !1)) : 3 == o.randomMission ? (e.string = (o.orangeCount > 40 ? 40 : o.orangeCount) + "/40", t.string = (o.orangeCount > 100 ? 100 : o.orangeCount) + "/100", o.orangeCount >= 40 && (this.toPlayButton[0].active = !1), o.orangeCount >= 100 && (this.toPlayButton[1].active = !1)) : 4 == o.randomMission && (e.string = (o.boLuoCount > 40 ? 40 : o.boLuoCount) + "/40", t.string = (o.boLuoCount > 100 ? 100 : o.boLuoCount) + "/100", o.boLuoCount >= 40 && (this.toPlayButton[0].active = !1), o.boLuoCount >= 100 && (this.toPlayButton[1].active = !1)), i.string = (o.LpCount > 5 ? 5 : o.LpCount) + "/5", o.LpCount >= 5 && (this.toPlayButton[2].active = !1);
				var s = parseInt(cc.sys.localStorage.getItem("watchVideoTime"));
				n.string = (s > 8 ? 8 : s) + "/8", s >= 8 && (this.toPlayButton[3].active = !1), a.string = (o.buySkin > 1 ? 1 : o.buySkin) + "/1", o.buySkin >= 1 && (this.toPlayButton[4].active = !1), c.string = (o.reliveCount > 5 ? 5 : o.reliveCount) + "/5", o.reliveCount >= 5 && (this.toPlayButton[5].active = !1);
				for (var r = 0; r < o.rewardArrar.length; r++) 1 == o.rewardArrar[r] && (this.rewardButton[r].active = !1);
				o.showBannerAd()
			},
			start: function () { },
			buyItem: function () {
				for (var e = 0; e < 64; e++)
					if (-1 === o.buy.indexOf(e)) return this.curWeaponIdx = e, void n._init.buySkin(this.curWeaponIdx)
			},
			clickToFinish: function () {
				this.node.active = !1, this.gamePnl.active = !0, this.startPnl.active = !1, o.hideBannerAd()
			},
			closeToFinish: function () {
				this.node.active = !1, this.startPnl.active = !0, o.hideBannerAd()
			},
			clickReward: function (e, t) {
				var i = new Date;
				switch (o.missionTime = i.getTime(), cc.sys.localStorage.setItem("missionTime", o.missionTime), e.target.active = !1, t) {
					case "0":
						o.doAccount(1500), o.rewardArrar[0] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar));
						break;
					case "1":
						this.buyItem(), o.rewardArrar[1] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar));
						break;
					case "2":
						o.doAccount(2e3), o.rewardArrar[2] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar));
						break;
					case "3":
						o.doAccount(2e3), o.rewardArrar[3] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar));
						break;
					case "4":
						o.doAccount(500), o.rewardArrar[4] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar));
						break;
					case "5":
						o.doAccount(500), o.rewardArrar[5] = 1, cc.sys.localStorage.setItem("rewardArray", JSON.stringify(o.rewardArrar))
				}
				this.startPnl.emit("updateMoney")
			}
		}), cc._RF.pop()
	}, {
		Common: "Common",
		SkinManager: "SkinManager"
	}],
	newReward: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "07877cx2RJLtKFuo9sjzPhO", "newReward");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager"),
			a = e("ADManager"),
			c = e("SkinManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				experiencePic: cc.Sprite,
				light: cc.Node,
				closeBtn: cc.Node
			},
			onLoad: function () {
				this.losePnl = cc.find("Canvas/losePnl"), this.loseScript = this.losePnl.getComponent("LoseView"), this.arr = [], this.random = 0
			},
			onEnable: function () {
				this.arr = this.getArr(), this.random = this.getRandom(), null !== this.random ? this.experiencePic.spriteFrame = n.default.res[this.arr[this.random]] : console.log("\u5df2\u7ecf\u89e3\u9501\u6240\u6709\u6b66\u5668"), n.default.showBannerAd()
			},
			doExperience: function () {
				if (null !== this.random) {
					if (c._init.experienceSkin(this.arr[this.random]), this.node.active = !1, n.default.isShowWin) n.default.isShowWin = !1, cc.find("Canvas/winPnl").active = !0;
					else n.default.isShowLose && (n.default.isShowLose = !1, this.losePnl.active = !0, this.loseScript.startTimer());
					this.closeBtn.active = !1, cc.sys.platform, cc.sys.WECHAT_GAME
				}
			},
			getArr: function () {
				for (var e = [], t = 0; t < 64; t++) - 1 === n.default.buy.indexOf(t) && e.push(t);
				return e
			},
			getRandom: function () {
				return 0 === this.arr.length ? null : 1 === this.arr.length ? 0 : Math.floor(Math.random() * this.arr.length)
			},
			start: function () {
				this.light.runAction(cc.repeatForever(cc.rotateBy(5, 360)))
			},
			clickVideo: function () {
				n.default.hideBannerAd();
				o._instance.play_clickBtn(), cc.sys.platform === cc.sys.WECHAT_GAME ? a._init.videoAd && (n.default.videoAdType = null, a._init.videoCallBack = this.doExperience.bind(this), a._init.videoAd.show().catch(function (e) {
					n.default.videoAdisLoad, console.log("\u9519\u8bef\u4fe1\u606f", e.errMsg)
				})) : this.doExperience()
			},
			close: function () {
				n.default.hideBannerAd();
				(o._instance.play_clickBtn(), this.node.active = !1, n.default.isShowWin) ? (n.default.isShowWin = !1, cc.find("Canvas/winPnl").active = !0) : n.default.isShowLose && (n.default.isShowLose = !1, this.losePnl.active = !0, this.loseScript.startTimer())
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		ADManager: "ADManager",
		AudioManager: "AudioManager",
		SkinManager: "SkinManager"
	}],
	newWheelNode: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "a5fe7V0LzhKJq0WjP1v0XWF", "newWheelNode");
		var n = e("Common"),
			o = e("ADManager"),
			a = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				weapon: cc.Node,
				gameNodeWeapon: cc.Sprite,
				wheelRoll: cc.Node,
				shootNode: cc.Node,
				rewardNode: cc.Node,
				videoNode: cc.Node,
				AtOncePic: cc.SpriteFrame,
				onceAgainPic: cc.SpriteFrame,
				onLineNode: cc.Node,
				passBtn: cc.Node,
				closeBtn: cc.Node
			},
			onLoad: function () {
				this.losePnl = cc.find("Canvas/losePnl"), this.loseScript = this.losePnl.getComponent("LoseView"), this.startPosition = this.weapon.position
			},
			onEnable: function () {
				var e = this;
				n.showBannerAd(), this.wheelRoll.getComponent("newWheel").isPlay = !1, this.videoNode.getComponent(cc.Button).interactable = !0, n.onLine ? (this.onLineNode.active = !1, setTimeout(function () {
					e.onLineNode.active = !0
				}, 2e3), this.onLineNode.children[0].active = !0, this.videoNode.getComponent(cc.Sprite).spriteFrame = this.AtOncePic, this.closeBtn.active = !1, this.passBtn.active = !1, this.videoNode.x = 0, this.shootNode.x = 0) : (this.onLineNode.active = !1, this.closeBtn.active = !0, this.passBtn.active = !1, this.videoNode.x = -140, this.shootNode.x = -140), this.visitServer()
			},
			clickOnLineNode: function () {
				this.onLineNode.children[0].active ? (this.onLineNode.children[0].active = !1, this.passBtn.active = !0, this.videoNode.x = -140, this.shootNode.x = -140) : (this.onLineNode.children[0].active = !0, this.passBtn.active = !1, this.videoNode.x = 0, this.shootNode.x = 0)
			},
			start: function () { },
			visitServer: function () {
				isNaN(cc.sys.localStorage.getItem("RollTime")) || this.changeToDate(Date.now()) > cc.sys.localStorage.getItem("RollTime") ? this.shootNode.active = !0 : (console.log("\u4eca\u5929\u5df2\u7ecf\u8bb0\u5f55\u8fc7\uff01\uff01\uff01\uff01\uff01"), this.shootNode.active = !1)
			},
			clickFree: function () {
				var e = this;
				this.videoNode.getComponent(cc.Button).interactable = !1, setTimeout(function () {
					e.videoNode.getComponent(cc.Button).interactable = !0
				}, 2e3);
				n.onLine ? this.clickVideo() : (cc.sys.localStorage.setItem("RollTime", this.changeToDate(Date.now())), this.rollWheel(), this.shootNode.active = !1)
			},
			changeToDate: function (e) {
				return Math.floor(e / 864e5)
			},
			rollWheel: function () {
				this.wheelRoll.getComponent("newWheel").rollWheel()
			},
			clickVideo: function () {
				this.videoNode.getComponent(cc.Button).interactable = !1, console.warn("------113,,", this.videoNode.getComponent(cc.Button).interactable);
				n.videoAdType = null, o._init.videoCallBack = this.videoReward.bind(this), a.showRewardedVideo(o._init.videoCallBack)
			},
			videoReward: function () {
				var e = this;
				setTimeout(function () {
					e.videoNode.getComponent(cc.Button).interactable = !0
				}, 2e3), console.warn("--------142");
				console.warn("-------Date.now-", Date.now(), this.changeToDate(Date.now())), cc.sys.localStorage.setItem("RollTime", this.changeToDate(Date.now())), this.shootNode.active = !1, this.rollWheel(), this.rewardNode.active = !1, this.videoNode.active = !0, n.onLine && (this.videoNode.getComponent(cc.Sprite).spriteFrame = this.onceAgainPic)
			},
			reset: function () {
				var e = this;
				this.node.on("touchstart", function () {
					e.weaponAction()
				})
			},
			weaponAction: function () {
				var e = this;
				this.node.off("touchstart"), this.weapon.runAction(cc.repeatForever(cc.rotateBy(.5, 360))), this.weapon.runAction(cc.moveBy(3, 0, 1200)), setTimeout(function () {
					e.videoNode.active = !0
				}, 3100)
			},
			close: function () {
				if (n.hideBannerAd(), !this.wheelRoll.getComponent("newWheel").isPlay) {
					if (n.menuOpenTurn) return this.node.active = !1, void (n.menuOpenTurn = !1);
					this.node.active = !1;
					var e = this.getArr();
					if (n.isShowLose)
						if (e.length > 0 && n.onLine) console.log("\u5c55\u793a\u76ae\u80a4\u8bd5\u7528\u754c\u9762"), cc.find("Canvas/reWardPnl").active = !0;
						else n.isShowLose = !1, this.losePnl.active = !0, this.loseScript.startTimer();
					else if (n.isShowWin) {
						if (e.length > 0 && n.onLine) console.log("\u5c55\u793a\u76ae\u80a4\u8bd5\u7528\u754c\u9762"), cc.find("Canvas/reWardPnl").active = !0;
						else n.isShowWin = !1, cc.find("Canvas/winPnl").active = !0
					}
				}
			},
			getArr: function () {
				for (var e = [], t = 0; t < 64; t++) - 1 === n.buy.indexOf(t) && e.push(t);
				return e
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		Common: "Common"
	}],
	newWheel: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "7b0624Rt0RPNrtBMxVHafQb", "newWheel");
		var n = e("Common"),
			o = e("AudioManager"),
			a = e("SkinManager");
		cc.Class({
			extends: cc.Component,
			properties: {
				reward: cc.Node,
				weaponSp: cc.Sprite,
				videoNode: cc.Node,
				showWeapon: cc.Sprite,
				isPlay: !1
			},
			onLoad: function () {
				cc.director.getCollisionManager().enabled = !0, this.arr = this.getArr(), this.startPnl = cc.find("Canvas/startPnl"), this.gamePnl = cc.find("Canvas/gamePnl"), this.rewardLabel = this.reward.getComponentInChildren(cc.Label)
			},
			onEnable: function () {
				this.reset()
			},
			onDisable: function () {
				this.reward.active = !1
			},
			onCollisionEnter: function (e, t) {
				switch (console.log("\u78b0\u649e"), e.node.name) {
					case "weapon":
						t.node.stopAllActions(), e.node.stopAllActions(), e.node.angle = -0;
						var i = -t.node.angle % 360,
							a = this.getReward(i);
						n.doAccount(a), this.showReward(a), o._instance.play_getCoin()
				}
			},
			rollWheel: function () {
				var e = this;
				this.isPlay = !0;
				var t = this,
					i = 360 * Math.random() + 720;
				this.node.runAction(cc.sequence(cc.rotateBy(2, i), cc.callFunc(function () {
					var i = (180 - t.node.angle) % 360;
					console.log("jiaodu", i);
					var o = e.getReward(i),
						a = o.split("x");
					n.doAccount(a[1]), e.showReward(o), e.isPlay = !1
				})))
			},
			getReward: function (e) {
				var t;
				if (e < 14) t = "Coins x20";
				else if (e < 64) t = "Coins x20";
				else if (e < 104) t = "Coins x99";
				else if (e < 161) t = "Coins x50";
				else if (e < 195)
					if (t = "Null", null !== this.random) {
						var i = this.arr[this.random]; - 1 === n.buy.indexOf(i) && (n.isExperience = !1, n.experienceCount = 0, a._init.buySkin(i), this.random = this.getRandom(), this.showWeapon.spriteFrame = n.res[i], t = "special knife")
					} else cc.sys.platform, cc.sys.WECHAT_GAME;
				else t = e < 244 ? "Coins x10" : e < 283 ? "Coins x80" : "Coins x20";
				return t
			},
			start: function () { },
			reset: function () {
				this.refreshWeaponSp()
			},
			refreshWeaponSp: function () {
				this.random = this.getRandom(), this.random ? this.weaponSp.spriteFrame = n.res[this.arr[this.random]] : this.weaponSp.spriteFrame = n.res[48]
			},
			getArr: function () {
				for (var e = [], t = 48; t < 64; t++) - 1 === n.buy.indexOf(t) && e.push(t);
				return e
			},
			getRandom: function () {
				return this.arr = this.getArr(), 0 === this.arr.length ? null : 1 === this.arr.length ? 0 : Math.floor(Math.random() * this.arr.length)
			},
			showReward: function (e) {
				this.reward.active = !0, this.rewardLabel.string = "Get " + e
			},
			hideReward: function () {
				this.reward.active = !1, this.random ? this.weaponSp.spriteFrame = n.res[this.arr[this.random]] : this.weaponSp.spriteFrame = n.res[48]
			}
		}), cc._RF.pop()
	}, {
		AudioManager: "AudioManager",
		Common: "Common",
		SkinManager: "SkinManager"
	}],
	onceAgainView: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "fe1beuHRXZA87BWpcFk11wD", "onceAgainView");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("../../Script/View/Common"));
		var o = e("AudioManager"),
			a = e("ADManager"),
			c = e("../WyMiniGame");
		cc.Class({
			extends: cc.Component,
			properties: {
				slowLight: cc.Node,
				middleLight: cc.Node,
				quickLight: cc.Node,
				showMoney: cc.Label,
				shareButton: cc.Node,
				videoButton: cc.Node,
				closeBtn: cc.Node
			},
			onLoad: function () {
				this.videoButton.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.15), cc.scaleTo(1, 1))))
			},
			start: function () {
				var e = this;
				this.slowLight.runAction(cc.repeatForever(cc.rotateBy(10, 360))), this.middleLight.runAction(cc.repeatForever(cc.rotateBy(8, 360))), this.quickLight.runAction(cc.repeatForever(cc.rotateBy(5, 360))), this.videoReward(), setTimeout(function () {
					e.closeBtn.active = !0
				}, 2500)
			},
			clime: function () {
				n.default.hideBannerAd(), o._instance.play_clickBtn(), this.node.active = !1
			},
			onEnable: function () {
				n.default.showBannerAd(), this.showMoney.string = n.default.signMoney[n.default.signCount - 1], n.default.signCount, this.shareButton.active = !1, this.videoButton.active = !0
			},
			doubleReceive: function () {
				n.default.doAccount(n.default.signMoney[n.default.signCount - 1]), this.node.active = !1
			},
			shareDouble: function () {
				if (cc.sys.platform === cc.sys.WECHAT_GAME) {
					o._instance.play_clickBtn();
					var e = this,
						t = Math.floor(Math.random() * n.default.shares.length),
						i = n.default.shares[t];
					wx.shareAppMessage({
						title: i,
						imageUrl: cc.url.raw("resources/share/share" + t + ".jpg"),
						success: function (t) {
							console.log("\u6210\u529f"), e.doubleReceive()
						},
						fail: function (e) {
							console.log("\u5931\u8d25")
						}
					})
				}
			},
			clickVideo: function () {
				o._instance.play_clickBtn(), n.default.videoAdType = a.DoubleCoin, c.showRewardedVideo(a._init.videoAdCallback)
			},
			videoReward: function () {
				n.default.hideBannerAd();
				var e = this;
				a._init.DoubleCoinCallBack = function () {
					e.doubleReceive()
				}, a._init.videoAd || a._init.initVideoAd()
			}
		}), cc._RF.pop()
	}, {
		"../../Script/View/Common": "Common",
		"../WyMiniGame": "WyMiniGame",
		ADManager: "ADManager",
		AudioManager: "AudioManager"
	}],
	signDate: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "c774a5TV8lCnJgMbHIzVJvN", "signDate");
		var n = e("Common");
		cc.Class({
			extends: cc.Component,
			properties: {},
			onLoad: function () {
				this.getData()
			},
			start: function () {
				if (isNaN(cc.sys.localStorage.getItem("random")) || this.changeToDate(Date.now()) > cc.sys.localStorage.getItem("random")) {
					n.randomMission = Math.floor(5 * Math.random()), cc.sys.localStorage.setItem("randomMission", n.randomMission);
					cc.sys.localStorage.setItem("random", this.changeToDate(Date.now()))
				} else {
					var e = parseInt(cc.sys.localStorage.getItem("randomMission"));
					n.randomMission = isNaN(e) ? 0 : e
				}
			},
			changeToDate: function (e) {
				return Math.floor(e / 864e5)
			},
			getData: function () {
				var e = cc.sys.localStorage.getItem("watchVideoLock");
				n.watchVideoLock = e ? JSON.parse(e) : [3, 3, 3, 3, 3];
				var t = cc.sys.localStorage.getItem("watchVideoGainSkin");
				n.watchVideoGainSkin = t ? JSON.parse(t) : [0, 0, 0, 0, 0];
				var i = parseInt(cc.sys.localStorage.getItem("signWeek"));
				n.signWeek = isNaN(i) ? 0 : i;
				var o = parseInt(cc.sys.localStorage.getItem("signCount"));
				n.signCount = isNaN(o) ? 0 : o;
				var a = parseInt(cc.sys.localStorage.getItem("signTime"));
				n.signTime = isNaN(a) ? 0 : a;
				var c = parseInt(cc.sys.localStorage.getItem("missionTime"));
				n.missionTime = isNaN(c) ? 0 : c;
				var s = new Date;
				if (this.zeroTime = s.setHours(0, 0, 0, 0), n.missionTime > this.zeroTime && n.missionTime < this.zeroTime + 86313600) {
					console.log("\u540c\u4e00\u5929");
					var r = parseInt(cc.sys.localStorage.getItem("waterMelonCount"));
					n.waterMelonCount = isNaN(r) ? 0 : r;
					var l = parseInt(cc.sys.localStorage.getItem("appleCount"));
					n.appleCount = isNaN(l) ? 0 : l;
					var d = parseInt(cc.sys.localStorage.getItem("lemonCount"));
					n.lemonCount = isNaN(d) ? 0 : d;
					var h = parseInt(cc.sys.localStorage.getItem("orangeCount"));
					n.orangeCount = isNaN(h) ? 0 : h;
					var u = parseInt(cc.sys.localStorage.getItem("bolLuoCount"));
					n.boLuoCount = isNaN(u) ? 0 : u;
					var p = parseInt(cc.sys.localStorage.getItem("watchVideoTime"));
					n.watchVideoTime = isNaN(p) ? 0 : p;
					var m = parseInt(cc.sys.localStorage.getItem("LpCount"));
					n.LpCount = isNaN(m) ? 0 : m;
					var g = parseInt(cc.sys.localStorage.getItem("buySkin"));
					n.buySkin = isNaN(g) ? 0 : g;
					var f = parseInt(cc.sys.localStorage.getItem("reliveCount"));
					n.reliveCount = isNaN(f) ? 0 : f;
					var v = cc.sys.localStorage.getItem("rewardArray");
					n.rewardArrar = void 0 == v || null == v ? [0, 0, 0, 0, 0, 0] : JSON.parse(v)
				} else console.log("\u4e0d\u662f\u540c\u4e00\u5929"), n.waterMelonCount = 0, n.appleCount = 0, n.lemonCount = 0, n.orangeCount = 0, n.boLuoCount = 0, n.watchVideTime = 0, n.LpCount = 0, n.buySkin = 0, n.reliveCount = 0, n.rewardArrar = [0, 0, 0, 0, 0, 0], cc.sys.localStorage.setItem("waterMelonCount", 0), cc.sys.localStorage.setItem("appleCount", 0), cc.sys.localStorage.setItem("lemonCount", 0), cc.sys.localStorage.setItem("orangeCount", 0), cc.sys.localStorage.setItem("bolLuoCount", 0), cc.sys.localStorage.setItem("watchVideoTime", 0), cc.sys.localStorage.setItem("LpCount", 0), cc.sys.localStorage.setItem("buySkin", 0), cc.sys.localStorage.setItem("reliveCount", 0), cc.sys.localStorage.setItem("rewardArray", JSON.stringify(n.rewardArrar))
			}
		}), cc._RF.pop()
	}, {
		Common: "Common"
	}],
	toMoreGame: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "f1cbfOwSs5IxIyfgXZIPAbq", "toMoreGame"), window.more_game_btn_index = 0, window.tt && tt.getSystemInfo({
			success: function (e) {
				if ("Douyin" == e.appName) {
					window.douyin = !0;
					var t = e.version.split(".").map(function (e) {
						return +e
					});
					console.log(t), (t[0] > 7 || 7 == t[0] && t[1] > 8) && (window.Douyin_flag = !0)
				} else "XiGua" == e.appName && (window.XiGua = !0)
			}
		}), cc.Class({
			extends: cc.Component,
			properties: {
				gameoverMoreGameButton: cc.Sprite,
				changePicture: [cc.SpriteFrame]
			},
			onLoad: function () {
				this.index = 0
			},
			start: function () { },
			createMoreGameButton: function () {
				tt.getSystemInfoSync().windowHeight, tt.getSystemInfoSync().windowWidth;
				var e = window.more_game_btn_index % 10 + 1;
				this.moreGBtnHome = tt.createMoreGamesButton({
					type: "image",
					image: cc.url.raw("resources/icon/" + e + ".png"),
					style: {
						left: 20,
						top: 120,
						width: 45,
						height: 46,
						lineHeight: 40,
						backgroundColor: "",
						textColor: "#ffffff",
						textAlign: "center",
						fontSize: 16,
						borderRadius: 4,
						borderWidth: 0,
						borderColor: "#ffffff"
					},
					appLaunchOptions: [{
						appId: "ttb810cead273a3849"
					}],
					onNavigateToMiniGame: function (e) {
						console.log("\u8df3\u8f6c\u5176\u4ed6\u5c0f\u6e38\u620f", e)
					}
				}), this.moreGBtnHome.onTap(function () {
					console.log("\u70b9\u51fb\u66f4\u591a\u6e38\u620f")
				})
			},
			moreGame: function () {
				"ios" !== tt.getSystemInfoSync().platform && tt.showMoreGamesModal && tt.showMoreGamesModal({
					appLaunchOptions: [{
						appId: "ttceb4b809519e3259"
					}],
					success: function (e) {
						console.log("success", e)
					},
					fail: function (e) {
						console.log("fail", e.errMsg)
					}
				})
			}
		}), cc._RF.pop()
	}, {}],
	ttLp: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "4ff54hLb/5DTptG4Yp80Izu", "ttLp"), window.tt && (window.ZZC_TT_lpManger = new tt.getGameRecorderManager, ZZC_TT_lpManger.onStop(function (e) {
			console.log(e.videoPath), window.ZZC_LPvideoPath = e.videoPath, console.log("\u5f55\u5c4f\u7ed3\u675f")
		}));
		e("Common");
		t.exports = {
			startLp: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && ZZC_TT_lpManger && (window.ZZC_LPvideoPath = null, ZZC_TT_lpManger.start({
					duration: 300
				}))
			},
			shareLp: function (t) {
				cc.sys.platform === cc.sys.WECHAT_GAME && ZZC_TT_lpManger && tt.shareAppMessage({
					channel: "video",
					title: "\u5feb\u6765\u8bd5\u8bd5\u5207\u6c34\u679c\u5fcd\u8005\u5c0f\u6e38\u620f",
					imageUrl: "",
					query: "",
					extra: {
						videoPath: window.ZZC_LPvideoPath,
						videoTopics: ["\u5207\u6c34\u679c\u5fcd\u8005"],
						hashtag_list: ["\u5207\u6c34\u679c\u5fcd\u8005"]
					},
					success: function () {
						var i = e("Common");
						if (console.log("\u5206\u4eab\u89c6\u9891\u6210\u529f"), i.LpCount++, cc.sys.localStorage.setItem("LpCount", i.LpCount), 1 == i.isShareLpSuccess) cc.find("Canvas/losePnl").getComponent("LoseView").alive(), cc.find("Canvas/gamePnl").getComponent("GameView").aliveAction(), i.isShareLpSuccess = 0;
						else if (2 == i.isShareLpSuccess) {
							cc.find("Canvas/winPnl").getComponent("WinView").shareLpAndVideoReward(t), i.isShareLpSuccess = 0
						} else 3 == i.isShareLpSuccess ? (i.doAccount(30), t.active = !1, i.isShareLpSuccess = 0) : 4 == i.isShareLpSuccess && (console.log("\u8fdb\u5165\u8df3\u5173"), i.isShareLpSuccess = 0, i.shareLpCallBack());
						i.isWatchVideo = !1
					},
					fail: function (t) {
						console.log("\u5206\u4eab\u89c6\u9891\u5931\u8d25", t.errMsg);
						var i = e("Common");
						i.isWatchVideo = !1, -1 == t.errMsg.split(":")[1].search("cancel") ? window.XiGua && i.isHideGame && i.isShareLpSuccess > 0 && (i.isHideGame = !1) : i.isShareLpSuccess, i.isShareLpSuccess = 0
					}
				})
			},
			stopLp: function () {
				cc.sys.platform === cc.sys.WECHAT_GAME && window.ZZC_TT_lpManger && window.ZZC_TT_lpManger.stop()
			}
		}, cc._RF.pop()
	}, {
		Common: "Common"
	}],
	"use_v2.0.x_cc.Toggle_event": [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "baea8kDNDxAh6jwQ2ggLHmW", "use_v2.0.x_cc.Toggle_event"), cc.Toggle && (cc.Toggle._triggerEventInScript_check = !0), cc._RF.pop()
	}, {}],
	winLp: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "dfddbhqGHVG7KaBob6T/ZqI", "winLp");
		var n = a(e("../Script/View/Common")),
			o = a(e("../Script/ttLp"));

		function a(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		cc.Class({
			extends: cc.Component,
			properties: {
				closeBtn: cc.Node,
				startPnl: cc.Node,
				winPnl: cc.Node,
				showPic: cc.Sprite,
				showSpriteFrame: [cc.SpriteFrame],
				shareLpBtn: cc.Node
			},
			onEnable: function () {
				var e = Math.floor(Math.random() * this.showSpriteFrame.length);
				this.showPic.spriteFrame = this.showSpriteFrame[e]
			},
			onDisable: function () { },
			start: function () {
				this.shareLpBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, 1.1), cc.scaleTo(.8, 1))))
			},
			shareLp: function () {
				n.default.isShareLpSuccess = 4, n.default.shareLpCallBack = this.shareLpCallBack.bind(this), o.default.shareLp(this.node)
			},
			shareLpCallBack: function () {
				n.default.doAccount(500), this.node.active = !1, this.winPnl.opacity = 255, this.winPnl.active = !0, this.startPnl.emit("updateMoney")
			},
			closePnl: function () {
				this.node.active = !1, this.winPnl.opacity = 255
			}
		}), cc._RF.pop()
	}, {
		"../Script/View/Common": "Common",
		"../Script/ttLp": "ttLp"
	}],
	xianding: [function (e, t, i) {
		"use strict";
		cc._RF.push(t, "a82d4q40sVNGqQS+ZEuPiE9", "xianding");
		var n = function (e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(e("./Common"));
		var o = e("SkinManager"),
			a = e("ADManager"),
			c = (e("StartView"), e("../WyMiniGame"));
		cc.Class({
			extends: cc.Component,
			properties: {
				weapon: cc.Sprite,
				showCount: [cc.Node],
				light: cc.Node,
				closeBtn: cc.Node,
				viedoBtn: cc.Node
			},
			onLoad: function () {
				this.losePnl = cc.find("Canvas/losePnl"), this.loseScript = this.losePnl.getComponent("LoseView"), this.light.runAction(cc.repeatForever(cc.rotateBy(4, 360))), this.viedoBtn.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(.8, 1.1), cc.scaleTo(.8, 1))))
			},
			onEnable: function () {
				this.showWeaponSprite(), n.default.showBannerAd()
			},
			onDisable: function () {
				for (var e = 0; e < 3; e++) this.showCount[e].active = !1
			},
			getArr: function () {
				for (var e = [], t = 43; t < 48; t++) - 1 == n.default.buy.indexOf(t) && e.push(t);
				return e
			},
			buySkin: function (e) {
				o._init.buySkin(e)
			},
			showWeaponSprite: function () {
				if (this.arr = this.getArr(), 0 != this.arr.length) {
					this.rand = Math.floor(Math.random() * this.arr.length);
					var e = this.arr[this.rand];
					this.weapon.spriteFrame = n.default.res[e];
					for (var t = 0; t < n.default.watchVideoGainSkin[e - 43]; t++) this.showCount[t].active = !0;
					cc.sys.localStorage.setItem("xiandingshow", 0)
				} else {
					this.weapon.spriteFrame = n.default.res[47];
					for (var i = 0; i < n.default.watchVideoGainSkin[e - 43]; i++) this.showCount[i].active = !0;
					cc.sys.localStorage.setItem("xiandingshow", 1), console.log("\u5df2\u7ecf\u6ca1\u6709\u53ef\u4ee5\u5c55\u793a\u7684\u4e86")
				}
			},
			clickVideo: function () {
				n.default.videoAdType = a.videoGainSkin, c.showRewardedVideo(a._init.videoAdCallback)
			},
			videoReward: function () {
				var e = this;
				a._init.videoGainSkinCallBack = function () {
					if (n.default.watchVideoGainSkin[e.arr[e.rand] - 43]++, cc.sys.localStorage.setItem("watchVideoGainSkin", JSON.stringify(n.default.watchVideoGainSkin)), n.default.watchVideoGainSkin[e.arr[e.rand] - 43] >= 3) {
						if (e.buySkin(e.arr[e.rand]), e.showWeaponSprite(), e.node.active = !1, n.default.isShowLose) n.default.isShowLose = !1, e.losePnl.active = !0, e.loseScript.startTimer();
						else if (n.default.isShowWin) {
							n.default.isShowWin = !1, cc.find("Canvas/winPnl").active = !0
						}
						n.default.hideBannerAd()
					}
					for (var t = 0; t < n.default.watchVideoGainSkin[e.arr[e.rand] - 43]; t++) e.showCount[t].active = !0
				}, a._init.videoAd || a._init.initVideoAd()
			},
			close: function () {
				if (n.default.hideBannerAd(), n.default.menuOpenXianDing) return this.node.active = !1, void (n.default.menuOpenXianDing = !1);
				if (this.node.active = !1, n.default.isShowLose) n.default.isShowLose = !1, this.losePnl.active = !0, this.loseScript.startTimer();
				else if (n.default.isShowWin) {
					n.default.isShowWin = !1, cc.find("Canvas/winPnl").active = !0
				}
			},
			start: function () {
				this.videoReward()
			}
		}), cc._RF.pop()
	}, {
		"../WyMiniGame": "WyMiniGame",
		"./Common": "Common",
		ADManager: "ADManager",
		SkinManager: "SkinManager",
		StartView: "StartView"
	}]
}, {}, ["GlobalDefine", "MoreGame", "exported-GameBoxInter", "exported-GameIcon", "WeChatFileSystem", "exported-Layer", "exported", "exported-ItemTitleUI", "exported-TopUI", "guessLike", "GameController", "Loading", "GameModel", "SliceModel", "WeaponModel", "signDate", "ADManager", "AddBtnView", "AddToMinProgramBtnView", "AudioManager", "ChangeView", "Common", "DataManager", "DoAdapt", "GameView", "ItemView", "ItemsView", "JSGameDataManager", "JSNativeBridge", "LoseView", "MoreGameView", "MsgManager", "QianDaoView", "RankDoAdapter", "RankView", "RewatdView", "ScoreView", "ShopView", "SignView", "SkinManager", "SliceView", "SpineView", "StartView", "WeaponView", "WheelRewardView", "WheelView", "WinView", "experienceLock", "experienceView", "luckBoxView", "onceAgainView", "xianding", "WyMiniGame", "loseLp", "missionView", "newReward", "newWheel", "newWheelNode", "toMoreGame", "ttLp", "winLp", "GuessYouLike", "changePic", "gameOverGameBox", "use_v2.0.x_cc.Toggle_event"]);