/**
 * Created by Toast Server Development Team on 2016. 3. 9..
 */
(function () {

  function currentDomain() {
    const hostname = document.location.hostname;
    const parts = hostname.split('.')
    return parts.splice(parts.length - 2).join(".");
  }

  try {
    document.domain = currentDomain();
  } catch (e) {
    // do nothing
  }

  //  IE console
  window.console = window.console || {
    log: function () {},
    warn: function () {},
    error: function () {}
  };

  /**
   * STRING TRIM
   */
  //String.prototype._trim = function () {
  //    return this.replace(/(^\s*)|(\s*$)/gi, '');
  //
  //};

  /**
   * ARRAY REMOVE
   */
  //Array.prototype._remove = function (obj) {
  //    var i = 0, l=this.length;
  //    for (i; i<l; i++){
  //        if (this[i] === obj){
  //            this.splice(i, 1);
  //            break;
  //        }
  //    }
  //    return this;
  //};

  /**
   * MAKE NAMESPACE
   */
  var namespace = function (notation) {
    var object = window;
    var names = notation.split('.');

    for (var i = 0; i < names.length; i++) {
      var next = object[names[i]];
      if (typeof next == 'undefined') {
        next = {};
        object[names[i]] = next;
      }
      object = next;
    }
    return object;
  };

  var commonData = {};
  commonData.urls = {
    dev: {
      id: 'https://id.alpha-nhncloud.com',
      client_id: 'NXzXvxYPavnmGQqzbtZY',
      join: 'https://id.alpha-nhncloud.com/join',
      login: 'https://id.alpha-nhncloud.com/login',
      logout: 'https://id.alpha-nhncloud.com/logout',
      personalinfousage: 'https://www.alpha-nhncloud.com/popup/personalInfoUsage',
      com: 'https://www.alpha-nhncloud.com',
      cloud: 'https://www.alpha-nhncloud.com',
      console: '',
      consoleUrls: 'https://console.alpha-nhncloud.com',
      docs: 'https://docs.alpha-nhncloud.com',
      meetup: 'https://meetup.alpha-nhncloud.com'
    },
    alpha: {
      id: 'https://id.alpha-nhncloud.com',
      client_id: 'NXzXvxYPavnmGQqzbtZY',
      join: 'https://id.alpha-nhncloud.com/join',
      login: 'https://id.alpha-nhncloud.com/login',
      logout: 'https://id.alpha-nhncloud.com/logout',
      personalinfousage: 'https://www.alpha-nhncloud.com/popup/personalInfoUsage',
      com: 'https://www.alpha-nhncloud.com',
      cloud: 'https://www.alpha-nhncloud.com',
      console: '',
      consoleUrls: 'https://console.alpha-nhncloud.com',
      docs: 'https://docs.alpha-nhncloud.com',
      meetup: 'https://meetup.alpha-nhncloud.com'
    },
    beta: {
      id: 'https://id.beta-nhncloud.com',
      client_id: 'd7bJZfIF87uCMoNXCetn',
      login: 'https://id.beta-nhncloud.com/login',
      logout: 'https://id.beta-nhncloud.com/logout',
      personalinfousage: 'https://www.beta-nhncloud.com/popup/personalInfoUsage',
      com: 'https://www.beta-nhncloud.com',
      cloud: 'https://www.beta-nhncloud.com',
      console: '',
      consoleUrls: 'https://console.beta-nhncloud.com',
      docs: 'https://docs.beta-nhncloud.com',
      meetup: 'https://meetup.nhncloud.com'
    },
    service: {
      id: 'https://id.nhncloud.com',
      client_id: 'd7bJZfIF87uCMoNXCetn',
      login: 'https://id.nhncloud.com/login',
      logout: 'https://id.nhncloud.com/logout',
      personalinfousage: 'https://www.nhncloud.com/popup/personalInfoUsage',
      com: 'https://www.nhncloud.com',
      cloud: 'https://nhncloud.com',
      console: '',
      consoleUrls: 'https://console.nhncloud.com',
      docs: 'https://docs.nhncloud.com',
      meetup: 'https://meetup.nhncloud.com'
    }
  };

  commonData.handler = {
    login: {
      PUBLIC: function (myinfo, urls, lanRsc) {
        return '';
      }
    },
    logout: {
      PUBLIC: function (myinfo, urls, lanRsc) {
        return '';
      }
    },
    myaccount: {
      PUBLIC: function (myinfo, urls, lanRsc) {
        return '';
      }
    }
  };

  commonData.familyBrand = [{
      code: 'com',
      name: 'NHNCLOUD.COM'
    },
    {
      code: 'cloud',
      name: 'TOAST Cloud'
    },
    {
      code: 'tcc',
      name: 'TCC'
    },
    {
      code: 'analytics',
      name: 'TOAST Analytics'
    },
    {
      code: 'cam',
      name: 'TOAST CAM'
    },
    {
      code: 'bizcam',
      name: 'TOAST CAM Biz'
    },
    {
      code: 'bill',
      name: 'TOAST bill'
    },
    {
      code: 'dooray',
      name: 'Dooray!'
    }
    //{code: 'meetup', name:'Meetup'}
  ];

  commonData.resource = {
    ko_KR: {
      gnb: {
        code: "ko",
        login: "로그인",
        join: "회원가입",
        language: "KOR",
        language_shorten: "KOR",
        placeholder: '검색',
        service: '서비스'
      }
    },
    en_US: {
      gnb: {
        code: "en",
        login: "sign in",
        join: "join",
        language: "ENG",
        language_shorten: "ENG",
        placeholder: 'Search',
        service: 'Service'
      }
    },
    ja_JP: {
      gnb: {
        code: "ja",
        login: "ログイン",
        join: "会員登録",
        language: "JPN",
        language_shorten: "JPN",
        placeholder: '検索',
        service: 'サービス'
      }
    },
    zh_CN: {
      gnb: {
        code: "zh",
        login: "sign in",
        join: "join",
        language: "CHN",
        language_shorten: "CHN",
        placeholder: '檢索',
        service: '服务'
      }
    }
  };

  commonData.gnb = {
    name: 'gnbData',
    myInfo: null,
    myServiceMenus: null,
    serviceMenus: null,
    customerService: '',
    supportLanguage: null,
    //locale : 'ko_KR',
    useMain: false,
    parentElement: null,
    parentId: 'toast-gnb-header',
    dephase: 'service',
    hideLogo: false
  };

  commonData.footer = {
    name: 'footerData',
    terms: '',
    privacy: '',
    notice: '',
    //locale : 'ko_KR',
    customerNumber: '',
    mailto: 'support@nhncloud.com',
    parentId: 'toast-gnb-footer',
    useMain: false,
    useAddress: false,
    parentElement: null,
    dephase: 'service',
    serviceName: ''
  };

  commonData.locale = 'ko_KR';

  var Error = function (params) {
    var error = {
      name: 'toast.com.Error'
    };
    if (params !== undefined && params !== null) {
      if (params.errorType !== undefined) error.errorType = params.errorType;
      if (params.message !== undefined) error.message = params.message;
    }
    return error;
  };

  var dataHandler = {
    setData: function (what, params) {
      if (params === undefined || params === null) return new Error({
        errorType: 'DataError',
        message: 'The parameters required.'
      });
      params.parentElement = document.getElementById(commonData[what].parentId);
      if (params.parentElement === null || params.parentElement === undefined) return new Error({
        errorType: 'DataError',
        message: 'The parent element is required.'
      });

      commonData[what].type = (params.type != null) ? params.type : 'PUBLIC';
      commonData[what].parentElement = params.parentElement;
      if (TCC.utils.is(params.useMain)) commonData[what].useMain = true;
      if (TCC.utils.is(params.hideLogo)) commonData[what].hideLogo = true;
      if (TCC.utils.is(params.useAddress)) commonData[what].useAddress = true;
      if (params.locale !== null && params.locale !== undefined) commonData.locale = TCC.utils.trimString(params.locale);
      if (params.dephase !== null && params.dephase !== undefined && params.dephase !== 'release') commonData[what].dephase = TCC.utils.trimString(params.dephase);
      if (commonData[what].dephase === '' || commonData[what].dephase === 'master') {
        commonData[what].dephase = 'service';
      }
      if (params.myInfo !== null && params.myInfo !== undefined) commonData[what].myInfo = params.myInfo;
      if (params.myServiceMenus !== null && params.myServiceMenus !== undefined) commonData[what].myServiceMenus = params.myServiceMenus;
      if (params.serviceMenus !== null && params.serviceMenus !== undefined) commonData[what].serviceMenus = params.serviceMenus;
      if (params.customerService !== null && params.customerService !== undefined) commonData[what].customerService = TCC.utils.trimString(params.customerService);
      if (params.supportLanguage !== null && params.supportLanguage !== undefined) commonData[what].supportLanguage = params.supportLanguage;

      //if (params.corporation !== null && params.corporation !== undefined) commonData[what].corporation = params.corporation;
      if (params.terms !== null && params.terms !== undefined) commonData[what].terms = TCC.utils.trimString(params.terms);
      if (params.privacy !== null && params.privacy !== undefined) {
        commonData[what].privacy = TCC.utils.trimString(params.privacy.replace(/^(https?:\/\/)?id\.payco\.com\/privacyPolicy\.nhn/, "https://member.nhnent.com/provision/privacy"));
      }
      if (params.notice !== null && params.notice !== undefined) commonData[what].notice = TCC.utils.trimString(params.notice);
      if (params.customerNumber !== null && params.customerNumber !== undefined) commonData[what].customerNumber = TCC.utils.trimString(params.customerNumber);
      if (params.mailto !== null && params.mailto !== undefined) commonData[what].mailto = TCC.utils.trimString(params.mailto);
      //if (params.serviceName !== null && params.serviceName !== undefined) commonData[what].serviceName = params.serviceName;

      if (params.serviceName !== null && params.serviceName !== undefined) {
        commonData[what].serviceName = TCC.utils.trimString(params.serviceName).toLowerCase();
      } else {
        commonData[what].serviceName = TCC.utils.getServiceName();
      }

      commonData[what].query = params.query || '';

      /* when submenu, changed header(logo, text color, background color, left icon background color, left icon text color, underline color) style */
      commonData[what].subStyle = {
        backgroundColor: '#FFFFFF',
        textColor: '#313338',
        isLogoColor: true,
        rightIconBackgroundColor: 'rgba(232,232,232,0.75)',
        rightIconTextColor: '#313338',
        underLineColor: '#4B96E6',
      };
      if (params.subStyle !== null && params.subStyle !== undefined) {
        if (params.subStyle.backgroundColor !== null && params.subStyle.backgroundColor !== undefined) {
          commonData[what].subStyle.backgroundColor = params.subStyle.backgroundColor;
        }

        if (params.subStyle.textColor !== null && params.subStyle.textColor !== undefined) {
          commonData[what].subStyle.textColor = params.subStyle.textColor;
        }

        if (params.subStyle.isLogoColor !== null && params.subStyle.isLogoColor !== undefined) {
          if (params.subStyle.isLogoColor === true || params.subStyle.isLogoColor === 'true') {
            commonData[what].subStyle.isLogoColor = true;
          } else {
            commonData[what].subStyle.isLogoColor = false;
          }
        }

        if (params.subStyle.rightIconBackgroundColor !== null && params.subStyle.rightIconBackgroundColor !== undefined) {
          commonData[what].subStyle.rightIconBackgroundColor = params.subStyle.rightIconBackgroundColor;
        }

        if (params.subStyle.rightIconTextColor !== null && params.subStyle.rightIconTextColor !== undefined) {
          commonData[what].subStyle.rightIconTextColor = params.subStyle.rightIconTextColor;
        }

        if (params.changedStyle.underLineColor !== null && params.changedStyle.underLineColor !== undefined) {
          commonData[what].changedStyle.underLineColor = params.changedStyle.underLineColor;
        }
      }

      /* setting blue theme */
      if (params.isBlueTheme === true || params.isBlueTheme === 'true') {
        commonData[what].subStyle = {
          backgroundColor: '#4B96E6',
          textColor: '#FFFFFF !important',
          isLogoColor: false,
          rightIconBackgroundColor: 'rgba(53, 124, 200, 0.8)',
          rightIconTextColor: '#FFFFFF',
          underLineColor: '#FFFFFF',
        };
      }

      /* show toast small logo */
      if (params.showToastSmLogo === true || params.showToastSmLogo === 'true') {
        commonData[what].showToastSmLogo = true;
      } else {
        commonData[what].showToastSmLogo = false;
      }

      /* custom main menu*/
      commonData[what].leftMenus = params.leftMenus;
      commonData[what].rightMenus = params.rightMenus;

      /* custom header logo */
      commonData[what].logo = {
        color: '',
        white: ''
      };
      if (params.logo !== null && params.logo !== undefined) {
        if (params.logo.color !== null && params.logo.color !== undefined && params.logo.white !== null && params.logo.white !== undefined) {
          commonData[what].logo.color = params.logo.color;
          commonData[what].logo.white = params.logo.white;
        } else {
          if (params.logo.color !== null && params.logo.color !== undefined) {
            commonData[what].logo.white = commonData[what].logo.color = params.logo.color;
          } else {
            commonData[what].logo.white = commonData[what].logo.color = params.logo.white;
          }
        }
      }

      /* footer head */
      commonData[what].head = params.head;

      /* footer sitemap */
      commonData[what].sitemap = params.sitemap;

      /* footer width */
      if (params.width !== null && params.width !== undefined) {
        commonData[what].width = params.width;
      } else {
        commonData[what].width = 'auto';
      }

      /* footer between margin */
      if (params.betweenMargin !== null && params.betweenMargin !== undefined) {
        commonData[what].betweenMargin = params.betweenMargin;
      } else {
        commonData[what].betweenMargin = 'auto';
      }

      /* setting fontFamily */
      if (params.fontFamily !== null && params.fontFamily !== undefined) {
        commonData[what].fontFamily = params.fontFamily;
      }
    },
    updateMenuList: function () {

    },
    updateParent: function (what, element) {
      commonData[what].parentElement = element;
    },
    getData: function (what) {
      return commonData[what];
    },
    getLocale: function () {
      return commonData.locale;
    }
  };

  var generator = {
    gnb: {
      getLogo: function (urls) {
        var getSmLogo = function () {
          return [
            '<a class="logo-sm" href="' + urls.cloud + '">',
            '<img class="logo_white" src="' + urls.cloud + '/resources/img/new_main/logo_toast_sm.svg" alt="TOAST">',
            '<img class="logo_color" src="' + urls.cloud + '/resources/img/new_main/logo_toast_color_sm.svg" alt="TOAST">',
            '</a>'
          ].join('');
        };

        var html = [
          '<div class="navbar-brand">',
          ((dataHandler.getData('gnb').showToastSmLogo) ? getSmLogo() : ''),
          '<a class="logo" href="/">',
          '<img class="logo_white" src="' + dataHandler.getData('gnb').logo.white + '">',
          '<img class="logo_color" src="' + dataHandler.getData('gnb').logo.color + '">',
          '</a>',
          '</div>',
        ].join('');

        return html;
      },

      createLinkMenu: function (menu) {
        var menuHtml = [
          '<a class="nav-link' + ((menu.submenu) ? ' dropdown' : '') + '" href="' + menu.url + '" ' + ((menu.isBlank) ? ' target="_blank"' : '') + ((menu.submenu) ? 'aria-haspopup="true" aria-expanded="false"' : '') + '>',
          '<span>',
          menu.content,
          '</span>',
          '</a>'
        ];

        if (menu.submenu) {
          if (typeof menu.submenu === 'object') {
            menuHtml.push('<div class="dropdown-menu margin-0px nav-link__dropdown-menu"><div class="dropdown-items-wrapper">');
            var submenuLen = menu.submenu.length;
            for (var i = 0; i < submenuLen; i++) {
              var submenuHtml = [
                '<a href="' + menu.submenu[i].url + '"' + ((menu.isBlank) ? ' target="_blank"' : '') + '>',
                menu.submenu[i].content,
                '</a>',
              ];
              menuHtml.push(submenuHtml.join(''));
            }
            menuHtml.push('</div></div>');
          } else if (typeof menu.submenu === 'string') {
            menuHtml.push('<div class="dropdown-menu margin-0px nav-link__dropdown-menu">');
            menuHtml.push(menu.submenu);
            menuHtml.push('</div>');
          }
        }
        return menuHtml.join('');
      },

      createCircleMenu: function (menu) {
        var menuHtml = [
          '<div class="nav-circle-wrapper">',
          '<a class="nav-circle' + ((menu.submenu) ? ' dropdown' : '') + '" href="" ' + ((menu.submenu) ? 'aria-haspopup="true" aria-expanded="false"' : '') + 'style="text-shadow: none;">',
          menu.content,
          '</a>',
        ];

        if (menu.submenu) {
          if (typeof menu.submenu === 'object') {
            menuHtml.push('<div class="dropdown-menu nav-circle__dropdown-menu" style=" left:' + ((menu.submenuOffset) ? menu.submenuOffset : '0') + 'px;' + ((menu.submenuWidth) ? 'width: ' + menu.submenuWidth + 'px' : '') + '">');
            var submenuLen = menu.submenu.length;
            for (var i = 0; i < submenuLen; i++) {
              var submenuHtml = [];
              if (menu.submenu[i].isDivider) {
                submenuHtml.push('<hr class="divider">');
              } else {
                var className = menu.submenu[i].className || '';
                if (menu.submenu[i].url) {
                  submenuHtml.push('<a class="dropdown-item ' + className + '" href="' + menu.submenu[i].url + '">');
                  submenuHtml.push(menu.submenu[i].content);
                  submenuHtml.push('</a>');
                } else {
                  submenuHtml.push('<div class="dropdown-item ' + className + '">');
                  submenuHtml.push(menu.submenu[i].content);
                  submenuHtml.push('</div>');
                }
              }
              menuHtml.push(submenuHtml.join(''));
            }
            menuHtml.push('</div>');
          } else if (typeof menu.submenu === 'string') {
            menuHtml.push('<div class="dropdown-menu nav-circle__dropdown-menu" style=" left:' + ((menu.submenuOffset) ? menu.submenuOffset : '0') + 'px;">');
            menuHtml.push(menu.submenu);
            menuHtml.push('</div>');
          }
        }
        menuHtml.push('</div>');
        return menuHtml.join('');
      },

      createButtonMenu: function (menu) {
        var menuHtml = [
          '<a class="btn btn-sm btn-primary" ' + ((menu.isBlank) ? 'target="_blank"' : '') + ' href="' + menu.url + '">',
          menu.content,
          '</a>'
        ];
        return menuHtml.join('');
      },

      createSearchMenu: function (query) {
        return [
          '<div class="navbar-search input-group">',
          '<span class="btn-search">',
          '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">',
          '<g fill="#FFF" fill-rule="nonzero">',
          '<path d="M8.293 9.707l1.414-1.414 4.5 4.5-1.414 1.414z"/>',
          '<path d="M5.5 11a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>',
          '</svg>',
          //'<object data="' + commonData.urls[dataHandler.getData('gnb').dephase].cloud + '/resources/img/gnb/icon_search.svg" type="image/svg+xml"></object>',
          '</span>',
          '<input type="text" class="form-control form-control-sm right-menu__icon" value="' + query + '" placeholder="">',
          '<span class="btn-text-clear">',
          '<svg width="16px" height="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">',
          '<path stroke="white" d="M14,3.2L12.8,2L8,6.8L3.2,2L2,3.2L6.8,8L2,12.8L3.2,14L8,9.2l4.8,4.8l1.2-1.2L9.2,8L14,3.2z">',
          '</svg>',
          '</span>',
          '</div>'
        ].join('');
      },

      createLangMenu: function (options) {
        var locale = TCC.utils.locale.get();
        return [
          '<div class="nav-circle-wrapper nav-circle-wrapper__lang">',
          '<a class="nav-circle dropdown" href="javascript:;" aria-haspopup="true" aria-expanded="false" style="text-shadow: none;">' + commonData.resource[locale].gnb.language_shorten + '</a>',
          '<div class="dropdown-menu nav-circle__dropdown-menu" style=" left:-15px;">',
          ((options.lang.ko) ? '<a class="dropdown-item" href="javascript:;" onclick="gnb.select_lang({locale: \'ko_KR\'})" data-locale-name="ko_KR" style="text-align: center; padding: 6px 13px;">' + commonData.resource['ko_KR'].gnb.language + '</a>' : ''),
          ((options.lang.en) ? '<a class="dropdown-item" href="javascript:;" onclick="gnb.select_lang({locale: \'en_US\'})" data-locale-name="en_US" style="text-align: center; padding: 6px 13px;">' + commonData.resource['en_US'].gnb.language + '</a>' : ''),
          ((options.lang.ja) ? '<a class="dropdown-item" href="javascript:;" onclick="gnb.select_lang({locale: \'ja_JP\'})" data-locale-name="ja_JP" style="text-align: center; padding: 6px 13px;">' + commonData.resource['ja_JP'].gnb.language + '</a>' : ''),
          ((options.lang.zh) ? '<a class="dropdown-item" href="javascript:;" onclick="gnb.select_lang({locale: \'zh_CN\'})" data-locale-name="zh_CN" style="text-align: center; padding: 6px 13px;">' + commonData.resource['zh_CN'].gnb.language + '</a>' : ''),
          '</div>',
          '</div>',
        ].join('');
      },

      createUserMenu: function (menu) {
        var urls = commonData.urls[dataHandler.getData('gnb').dephase];
        var userInfo = dataHandler.getData('gnb').myInfo,
          html = [];
        var isLogin = function () {
          return userInfo.userId;
        };
        if (isLogin()) {
          var submenu = [{
            content: userInfo.username + ' 님',
            className: 'text-overflow-ellipsis'
          }, {
            content: userInfo.email
          }, {
            isDivider: true
          }];
          var userMenu = {
            content: [
              '<svg width="16px" height="16px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style="enable-background:new 0 0 16 16;" xml:space="preserve">',
              '<style type="text/css">',
              '.st0{clip-path:url(#SVGID_2_);enable-background:new    ;}',
              '.st1{clip-path:url(#SVGID_4_);}',
              '.st2{clip-path:url(#SVGID_6_);}',
              '.st3{clip-path:url(#SVGID_8_);enable-background:new    ;}',
              '.st4{clip-path:url(#SVGID_10_);}',
              '.st5{clip-path:url(#SVGID_12_);}',
              '.st6{clip-path:url(#SVGID_14_);enable-background:new    ;}',
              '.st7{clip-path:url(#SVGID_16_);}',
              '.st8{clip-path:url(#SVGID_18_);}',
              '</style>',
              '<path d="M8,8c1.7,0,3-1.3,3-3c0-1.7-1.3-3-3-3S5,3.3,5,5C5,6.7,6.3,8,8,8z M8,9.5c-2,0-6,1-6,3V14h12v-1.5C14,10.5,10,9.5,8,9.5z"/>',
              '</svg>'
            ].join(''),
            url: "#",
            submenuOffset: '-123',
            submenuWidth: '200',
            submenu: submenu.concat(menu.submenu)
          };
          html.push(this.createCircleMenu(userMenu));
        } else {
          var locale = TCC.utils.locale.get();
          html = [
            '<li class="nav-item">',
            '<a class="nav-link not-underbar" href="' + urls.login + '/?nextUrl=' + encodeURIComponent(location.href) + '" style="padding-left: 0px; padding-right: 0px;">' + commonData.resource[locale].gnb.login + '</a>',
            '</li>',
            '<li class="nav-item" style="margin-right: 0px;">',
            '<a class="nav-link not-underbar" href="' + urls.join + '" style="padding-left: 0px; padding-right: 0px;">' + commonData.resource[locale].gnb.join + '</a>',
            '</li>'
          ];
        }
        return html.join('');
      },

      getLeftMenus: function (menus, callback) {
        var html = ['<ul class="navbar-nav mr-auto left-navbar">'];
        if (menus) {
          var menusLen = menus.length;
          for (var i = 0; i < menusLen; i++) {
            var menuHtml = ['<li class="nav-item">'];
            if (menus[i].type === 'link') {
              menuHtml.push(this.createLinkMenu(menus[i]));
            } else if (menus[i].type === 'circle') {
              menuHtml.push(this.createCircleMenu(menus[i]));
            } else if (menus[i].type === 'button') {
              menuHtml.push(this.createButtonMenu(menus[i]));
            }

            menuHtml.push('</li>');
            html.push(menuHtml.join(''));
          }
        }

        html.push('</ul>');
        callback(html.join(''));
      },

      getRightMenus: function (menus) {
        var html = ['<ul class="navbar-nav right-navbar">'];
        if (menus) {
          var menusLen = menus.length;
          for (var i = 0; i < menusLen; i++) {
            var menuHtml = ['<li class="nav-item">'];
            if (menus[i].type === 'link') {
              menuHtml.push(this.createLinkMenu(menus[i]));
            } else if (menus[i].type === 'circle') {
              menuHtml.push(this.createCircleMenu(menus[i]));
            } else if (menus[i].type === 'button') {
              menuHtml.push(this.createButtonMenu(menus[i]));
            } else if (menus[i].type === 'search') {
              menuHtml.push(this.createSearchMenu(dataHandler.getData('gnb').query));
            } else if (menus[i].type === 'lang') {
              menuHtml.push(this.createLangMenu(menus[i]));
            } else if (menus[i].type === 'user') {
              /*
              									menuHtml.push(this.createUserMenu(menus[i]));
              */
            }

            menuHtml.push('</li>');
            html.push(menuHtml.join(''));
          }
        }

        html.push('</ul>');

        return html.join('');
      }
    },
    footer: {
      getSitemap: function (sitemap) {
        /*
        						var CONTENT_TITLE_TYPE = 'title';
        						var sitemapLen = sitemap.length, sitemapHtml = ['<div class="col-12 footer__sitemap">'];
        						for(var i = 0; i < sitemapLen; i++){
        							var column = sitemap[i], columnHtml = ['<div class="footer__sitemap-column'+ ((column[0].type === CONTENT_TITLE_TYPE)? '':' no-title') + '">'], columnLen = column.length;
        							for(var j = 0; j < columnLen; j++){
        								var content = column[j];
        								columnHtml.push('<' + ((content.url)? ('a href="' + content.url + '"'):'div') + ' class="'+content.type+'">'+content.text+'</' + ((content.url)? 'a':'div') + '>');
        							}
        							columnHtml.push('</div>');
        							sitemapHtml.push(columnHtml.join(''));
        						}
        						sitemapHtml.push('</div><hr class="divider">');
        						return sitemapHtml.join('');
        */
        return '';
      },

      getNhn: function (urls) {

        var locale = TCC.utils.locale.get();
        if (locale !== 'ko_KR') {
          locale = 'default';
        }

        var html = {
          ko_KR: [
            '<div class="footer__nhn">',
            '<div class="footer__nhn-logo">',
            '<a href="http://www.nhnent.com" class="f_logo N=a:ftr.logo" target="_blank"><img src="https://images.toast.com/toast/com/web/common/logo_footer.png" alt="NHN ENTERTAINMENT"></a>',
            '</div>',
            '<div class="footer__nhn-info">',
            '<div class="footer__nhn-link">',
            '<div>',
            '<a href="http://www.nhnent.com/ko/company/companyInfo.nhn" target="_blank">회사소개</a>',
            '</div>',
            '<span class="bar"></span>',
            '<div>',
            '<a href="javascript:;" onclick="window.open(\'' + urls.cloud + '/rules/terms\', \'terms\', \'scrollbars=yes,toolbar=no,resizable=yes,width=600,height=720\'); return false;">이용약관</a>',
            '</div>',
            '<span class="bar"></span>',
            '<div>',
            '<a href="' + urls.cloud + '/provision/privacy" class="point_txt">개인정보처리방침</a>',
            '</div>',
            '</div>',
            '<ul class="footer__nhn-address-info">',
            '상호 : 엔에이치엔엔터테인먼트(주) 대표 : 백도민, 김동훈<br/>',
            '주소 : 경기도 성남시 분당구 대왕판교로 645번길 16 NHN엔터테인먼트 플레이뮤지엄(경기도 성남시 분당구 삼평동 629 NHN엔터테인먼트 플레이뮤지엄)<br/>',
            '대표번호 : 1588-7967 이메일 : <a class="mail" id="footer_mailto">support@toast.com</a>',
            ' 사업자등록번호 : 424-88-02352 통신판매업신고번호 : 2013-경기성남-1067호 <a class="text-underline" href="http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2013378021930201084&amp;area1=&amp;area2=&amp;currpage=1&amp;searchKey=01&amp;searchVal=%BF%A3%BF%A1%C0%CC%C4%A1%BF%A3" target="_blank">사업자 정보확인</a>',
            '</ul>',
            '<p class="copyright">',
            '© NHN Entertainment Corp. All Rights Reserved.',
            '</p>',
            '</div>',
            '<div class="family-site btn-group ml-auto">',
            '<button class="family-site__dropdown-toggle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
            'Family site',
            '<div class="horizontally-bar"></div>',
            '<div class="vertically-bar"></div>',
            '</button>',
            '<div class="family-site__dropdown-menu dropdown-menu" x-placement="bottom-end" style="position: absolute; transform: translate3d(287px, 36px, 0px); top: -393px; left: -287px; will-change: transform;">',
            '<a target="_blank" href="http://cloud.toast.com" class="dropdown-item">TOAST Cloud</a>',
            '<a target="_blank" href="https://tcc.toast.com/" class="dropdown-item">TCC</a>',
            '<a target="_blank" href="http://analytics.toast.com" class="dropdown-item">TOAST Analytics</a>',
            '<a target="_blank" href="http://cam.toast.com" class="dropdown-item">TOAST CAM</a>',
            '<a target="_blank" href="http://bizcam.toast.com" class="dropdown-item">TOAST CAM Biz</a>',
            '<a target="_blank" href="https://bill.toast.com" class="dropdown-item">TOAST bill</a>',
            '<a target="_blank" href="http://dooray.toast.com" class="dropdown-item">Dooray!</a>',
            '<hr class="divider">',
            '<a target="_blank" href="http://www.payco.com" class="dropdown-item">PAYCO</a>',
            '<a target="_blank" href="https://developers.payco.com" class="dropdown-item">PAYCO 개발자센터</a>',
            '<a target="_blank" href="http://www.hangame.com" class="dropdown-item">Hangame</a>',
            '</div>',
            '</div>',
            '</div>'
          ].join(''),
          default: [
            '<div class="footer__nhn">',
            '<div class="footer__nhn-logo">',
            '<a href="http://www.nhnent.com" class="f_logo N=a:ftr.logo" target="_blank"><img src="https://images.toast.com/toast/com/web/common/logo_footer.png" alt="NHN ENTERTAINMENT"></a>',
            '</div>',
            '<div class="footer__nhn-info">',
            '<div class="footer__nhn-link">',
            '<div>',
            '<a href="http://www.nhnent.com/ko/company/companyInfo.nhn" target="_blank">회사소개</a>',
            '</div>',
            '<span class="bar"></span>',
            '<div>',
            '<a href="javascript:;" onclick="window.open(\'' + urls.cloud + '/rules/terms\', \'terms\', \'scrollbars=yes,toolbar=no,resizable=yes,width=600,height=720\'); return false;">이용약관</a>',
            '</div>',
            '<span class="bar"></span>',
            '<div>',
            '<a href="' + urls.cloud + '/provision/privacy" class="point_txt">개인정보처리방침</a>',
            '</div>',
            '</div>',
            '<ul class="footer__nhn-address-info">',
            '상호 : 엔에이치엔엔터테인먼트(주) 대표 : 백도민, 김동훈<br/>',
            '주소 : 경기도 성남시 분당구 대왕판교로 645번길 16 NHN엔터테인먼트 플레이뮤지엄(경기도 성남시 분당구 삼평동 629 NHN엔터테인먼트 플레이뮤지엄)<br/>',
            '대표번호 : 1588-7967 이메일 : <a class="mail" id="footer_mailto">support@toast.com</a>',
            ' 사업자등록번호 : 424-88-02352 통신판매업신고번호 : 2013-경기성남-1067호 <a class="text-underline" href="http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2013378021930201084&amp;area1=&amp;area2=&amp;currpage=1&amp;searchKey=01&amp;searchVal=%BF%A3%BF%A1%C0%CC%C4%A1%BF%A3" target="_blank">사업자 정보확인</a>',
            '</ul>',
            '<p class="copyright">',
            '© NHN Entertainment Corp. All Rights Reserved.',
            '</p>',
            '</div>',
            '<div class="family-site btn-group ml-auto">',
            '<button class="family-site__dropdown-toggle dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">',
            'Family site',
            '<div class="horizontally-bar"></div>',
            '<div class="vertically-bar"></div>',
            '</button>',
            '<div class="family-site__dropdown-menu dropdown-menu" x-placement="bottom-end" style="position: absolute; transform: translate3d(287px, 36px, 0px); top: -393px; left: -287px; will-change: transform;">',
            '<a target="_blank" href="http://cloud.toast.com" class="dropdown-item">TOAST Cloud</a>',
            '<a target="_blank" href="https://tcc.toast.com/" class="dropdown-item">TCC</a>',
            '<a target="_blank" href="http://analytics.toast.com" class="dropdown-item">TOAST Analytics</a>',
            '<a target="_blank" href="http://cam.toast.com" class="dropdown-item">TOAST CAM</a>',
            '<a target="_blank" href="http://bizcam.toast.com" class="dropdown-item">TOAST CAM Biz</a>',
            '<a target="_blank" href="https://bill.toast.com" class="dropdown-item">TOAST bill</a>',
            '<a target="_blank" href="http://dooray.toast.com" class="dropdown-item">Dooray!</a>',
            '<hr class="divider">',
            '<a target="_blank" href="http://www.payco.com" class="dropdown-item">PAYCO</a>',
            '<a target="_blank" href="https://developers.payco.com" class="dropdown-item">PAYCO 개발자센터</a>',
            '<a target="_blank" href="http://www.hangame.com" class="dropdown-item">Hangame</a>',
            '</div>',
            '</div>',
            '</div>'
          ].join('')
        };
        return html[locale];
      }
    }
  };

  var creater = {
    gnb: function (callback) {
      var gnbData = dataHandler.getData('gnb');

      var urls = commonData.urls[gnbData.dephase];

      if (!urls) {
        urls = {
          'cloud': ''
        };
      }

      var info = gnbData.myInfo;
      var query = gnbData.query;
      var locale = TCC.utils.locale.get();
      var html = [
        '<nav class="navbar navbar-expand" role="navigation">',
        '<!-- Collapsed navigation -->',
        '<div class="header-brand">',
        '<img width="223" src="' + base_url + '/img/logo_nhn_cloud_document_v2.png" alt="NHN Cloud">',
        '<a href="' + urls.cloud + '" class="link_homepage"><span class="blind">NHN Cloud Homepage</span></a>',
        '</div>',
        generator.gnb.getRightMenus(gnbData.rightMenus),
        '</nav>'
      ].join('');

      callback(html);
    },
    footer: function () {
      var gnbData = dataHandler.getData('footer');
      var urls = commonData.urls[gnbData.dephase];

      if (urls.cloud.indexOf('goorm') > -1) {
        urls.cloud = '';
      }

      var html = [
        '<div>',
        '<div>',
        gnbData.head,
        '</div>',
        '<div>',
        ((gnbData.sitemap) ? generator.footer.getSitemap(gnbData.sitemap) : ''),
        '</div>',
        '<div>',
        generator.footer.getNhn(urls),
        '</div>',
        '</div>'
      ].join('');

      return html;
    }
  };

  TCC = namespace('toast.com.common');
  TCC.utils = {
    is: function (param) {
      //if (param === undefined) return fasle;
      if (typeof param === 'string' && param === 'true') return true;
      if (typeof param === 'boolean' && param === true) return true;
      return false;
    },
    hideAllLayer: function () {
      var allLayers = document.querySelectorAll('.layer');
      var i = 0,
        l = allLayers.length;
      for (i; i < l; i++) {
        TCC.utils.removeClass(allLayers[i], 'open');
      }
    },
    toggleLayer: function (params) {
      //var curCN = document.getElementsByClassName(selector);
      var targetEl = TCC.utils.closestByClass(params.el, function (el) {
        // Here's the beauty of this function, we have control
        // on the target, here we're using class name
        return (el.className.indexOf('layer') > -1);
      });

      var curCN = TCC.utils.trimString(targetEl.className),
        hasClass = (curCN.indexOf(params.className) > -1);

      // other layer close - focusout ì²˜ë¦¬ë¡œ ë¶ˆí•„ìš”
      var layerEls = document.querySelectorAll('.layer'),
        i = 0,
        ln = layerEls.length;

      for (i; i < ln; i++) {
        var layerEl = layerEls[i];
        if (layerEl !== targetEl) {
          layerEl.className = TCC.utils.trimString(layerEl.className.replace(params.className, ''));
        }
      }
      targetEl.className = (hasClass || params.off) ? TCC.utils.trimString(curCN.replace(params.className, '')) : curCN + ' ' + params.className;
    },
    closestByClass: function (el, fn) {
      return el && (fn(el) ? el : TCC.utils.closestByClass(el.parentNode, fn));
    },
    hasClass: function (classes, className) {
      var i = 0,
        l = classes.length,
        has = false;

      for (i; i < l; i++) {
        if (classes[i] === className) {
          has = true;
          break;
        }
      }
      return has;
    },
    toggleClass: function (el, className) {

      var activeClass = className.split(' ');

      if (this.hasClass(activeClass, className)) {
        activeClass = TCC.utils.removeArray(activeClass, className);
      } else {
        activeClass.push(className);
      }

      el.className = activeClass.join(' ');

    },
    removeClass: function (el, className) {
      var activeClass = el.className.split(' ');
      if (this.hasClass(activeClass, className)) {
        activeClass = TCC.utils.removeArray(activeClass, className);
        el.className = activeClass.join(' ');
      }
    },
    addClass: function (el, className) {
      var activeClass = el.className.split(' ');
      if (!this.hasClass(activeClass, className)) {
        activeClass.push(className);
        el.className = activeClass.join(' ');
      }
    },
    getServiceName: function () {
      var href = document.location.href;
      if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)cloud.toast.com/.test(href)) {
        return 'cloud';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)cam.toast.com/.test(href)) {
        return 'cam';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)bizcam.toast.com/.test(href)) {
        return 'bizcam';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)meetup.toast.com/.test(href)) {
        return 'meetup';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)analytics.toast.com/.test(href)) {
        return 'analytics';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)pc.toast.com/.test(href)) {
        return 'pc';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)www.toast.com/.test(href)) {
        return 'com';
      } else if (/^((https?\:\/\/)?)((((dev)|(alpha)|(beta))-)?)dooray.toast.com/.test(href)) {
        return 'dooray';
      }
      return '';
    },
    trimString: function (str) {
      if (str !== '') return str;
      return str.replace(/(^\s*)|(\s*$)/gi, '');
    },
    removeArray: function (arr, obj) {
      var i = 0,
        l = arr.length;
      for (i; i < l; i++) {
        if (arr[i] === obj) {
          arr.splice(i, 1);
          break;
        }
      }
      return arr;
    },
    logoutPayco: function (paycoLogout, toastLogout) {
      //console.log(paycoLogout, toastLogout);
      try {
        document.getElementById('ifcon').innerHTML = '<iframe src="' + paycoLogout + '"></iframe>';
      } catch (e) {

      } finally {
        setTimeout(function () {
          window.top.location.href = toastLogout;
        }, 500);

        //window.location.href = toastLogout;
      }

    },
    cookies: {
      set: function (cName, cValue, expireDay) {

        if (expireDay !== undefined) {
          var today = new Date();
          today.setHours(0);
          today.setMinutes(0);
          today.setSeconds(0);
          today.setMilliseconds(0);
          today.setDate(today.getDate() + parseInt(expireDay));
          document.cookie = cName + "=" + escape(cValue) + "; path=/; expires=" + today.toGMTString() + ";";
        } else {
          const domain = currentDomain()
          document.cookie = cName + "=" + escape(cValue) + "; domain=."+domain+"; path=/;";
        }
      },
      get: function (cName) {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if (start != -1) {
          start += cName.length;
          var end = cookieData.indexOf(';', start);
          if (end == -1) end = cookieData.length;
          cValue = cookieData.substring(start, end);
        }
        //console.log(unescape(cValue));
        return unescape(cValue);
      }
    },
    removeElement: function (el) {
      if (el !== null && el !== undefined) {
        try {
          var parentEl = el.parentNode;
          parentEl.removeChild(el);
        } catch (e) {} finally {}
      }
    },
    browser: null,
    checkBrowser: function () {
      var matched, browser;

      var uaMatch = function (ua) {
        ua = ua.toLowerCase();
        var match = /(opr)[\/]([\w.]+)/.exec(ua) ||
          /(chrome)[ \/]([\w.]+)/.exec(ua) ||
          /(webkit)[ \/]([\w.]+)/.exec(ua) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
          /(msie) ([\w.]+)/.exec(ua) ||
          /(firefox)[ \/]([\w.]+)/.exec(ua) ||
          ua.indexOf('trident') && /(rv) ([\w.]+)/.exec(ua) ||
          ua.indexOf('compatible') < 0 && /(Mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
        var platform_match = /(ipad)/.exec(ua) ||
          /(iphone)/.exec(ua) ||
          /(android)/.exec(ua) || [];

        return {
          browser: ((match[1] === 'opr') ? 'opera' : match[1]) || '',
          version: match[2] || '0',
          platform: platform_match[0] || ((ua.indexOf('mac os x') < 0) ? '' : 'mac')
        };
      };
      matched = uaMatch(window.navigator.userAgent);
      browser = {};
      if (matched.browser) {
        browser[matched.browser] = true;
        browser.version = matched.version;
      }
      if (matched.platform) {
        browser[matched.platform] = true;
      }
      // Chrome is Webkit, but Webkit is also Safari.
      if (browser.chrome) {
        browser.webkit = true;
      } else if (browser.webkit) {
        browser.safari = true;
      }

      // IE11 has a new token so we will assign it msie to avoid breaking changes
      if (browser.rv) {
        browser.msie = true;
      }

      TCC.utils.browser = browser;

      return TCC.utils.browser;
    },
    locale: {
      set: function (options) {
        var locale = TCC.utils.locale.validate(options.locale);
        commonData.locale = locale;
        TCC.utils.cookies.set('userLocale', locale);
      },
      get: function () {
        return TCC.utils.cookies.get('userLocale') || TCC.utils.locale.validate('ko_KR');
      },
      validate: function (locale) {
        var locale_list = ['ko_KR', 'en_US', 'ja_JP', 'zh_CN'];

        if (locale_list.indexOf(locale) === -1) {
          return locale_list[0];
        } else {
          return locale;
        }
      }
    }
  };

  TCC.gnb = function (params) {
    var result = dataHandler.setData('gnb', params);
    if (result !== undefined) return result;
    var gnb = {
      name: 'toast.com.gnb',
      draw: function (element) {
        var self = this;

        if (element !== undefined) {
          dataHandler.updateParent('gnb', element);
        }
        var gnbData = dataHandler.getData('gnb');
        var serviceHtml = gnbData.parentElement.innerHTML;

        creater.gnb(function (html) {
          gnbData.parentElement.innerHTML = html + serviceHtml;

          self.set_sub_style(gnbData.subStyle);
          self.set_scroll_event();
          self.set_search_event();
          self.set_dropdown_menu_position();
          self.select_lang({
            locale: TCC.utils.locale.get(),
            reload: false
          });
          self.set_font_family(gnbData.fontFamily);
          gnbData.parentElement.style.opacity = '1';
        });
      },

      set_sub_style: function (style) {
        var sheet = document.createElement('style');
        sheet.innerHTML = [
          '#toast-gnb-header.sub, #toast-gnb-header.sub:hover {background-color: ' + style.backgroundColor + '; }',
          '#toast-gnb-header.sub .navbar-nav .nav-link, #toast-gnb-header.sub:hover .navbar-nav .nav-link{ color: ' + style.textColor + '; }',
          '#toast-gnb-header.sub input::placeholder,#toast-gnb-header.sub input[type="text"]::-webkit-input-placeholder, #toast-gnb-header.sub input[type="text"]::-moz-placeholder, #toast-gnb-header.sub input[type="text"]:-ms-input-placeholder, #toast-gnb-header.sub input[type="text"]:-moz-placeholder { color: ' + style.textColor + '; }',
          '#toast-gnb-header.sub .right-navbar .nav-circle, #toast-gnb-header.sub:hover .right-navbar .nav-circle, #toast-gnb-header.sub .right-navbar input, #toast-gnb-header.sub:hover .right-navbar input{background-color: ' + style.rightIconBackgroundColor + '; color: ' + style.rightIconTextColor + ';}',
          '#toast-gnb-header.sub .right-navbar, #toast-gnb-header.sub .right-navbar .nav-circle, #toast-gnb-header.sub:hover .right-navbar, #toast-gnb-header.sub:hover .right-navbar .nav-circle { color: ' + style.rightIconTextColor + '; }',
          '#toast-gnb-header.sub .navbar-brand .logo_white, #toast-gnb-header.sub:hover .navbar-brand .logo_white {' + ((style.isLogoColor) ? 'display: none;' : 'display: inline;') + '}',
          '#toast-gnb-header.sub .navbar-brand .logo_color, #toast-gnb-header.sub:hover .navbar-brand .logo_color {' + ((style.isLogoColor) ? 'display: inline;' : 'display: none;') + '}',
          '#toast-gnb-header.sub .left-navbar .nav-item:hover .nav-link:after, #toast-gnb-header.sub:hover .left-navbar .nav-item:hover .nav-link:after, #toast-gnb-header.sub:hover .nav-item.active .nav-link:after{ background-color: ' + style.underLineColor + '}',
        ].join('');
        document.body.appendChild(sheet);

        if (document.querySelector('#toast-gnb-header.sub') && style.rightIconTextColor) {
          var svgs = document.querySelectorAll('#toast-gnb-header .right-navbar svg');
          for (var i = 0; i < svgs.length; i++) {
            svgs[i].querySelector('path').setAttribute('fill', style.rightIconTextColor);
          }
        }
      },

      set_scroll_event: function () {
        function changed_header_for_scroll() {
          var header = document.getElementById('toast-gnb-header');
          if (!header) {
            return;
          }

          if (header.className.indexOf('scrolled-fix') > -1) {
            return;
          }

          if (window.scrollY === 0) {
            if (header.className.indexOf('scrolled') > -1) {
              header.className = header.className.replace('scrolled', '');
            }
          } else if (window.scrollY > 0) {
            if (header.className.indexOf('scrolled') === -1) {
              header.className += ' scrolled';
            }
          }
        }

        window.addEventListener('scroll', changed_header_for_scroll);

        function mark_current_header_nav_item() {
          // document.querySelectorAll('#toast-gnb-header .left-navbar .nav-item > a').forEach(function(obj){
          //   var current_pathname = window.location.href.split('/')[3];
          //   var href = obj.getAttribute('href');
          //   var href_pathname = href.split('/')[3];

          //   if (href[href.length - 1] === '#') {
          //     return;
          //   }

          //   if (current_pathname && current_pathname.indexOf('#') > -1) {
          //     current_pathname = current_pathname.split('#').shift();
          //   }

          //   if (current_pathname && (current_pathname === href_pathname)) {
          //     if (obj.parentNode.className.indexOf('active') === -1) {
          //       obj.parentNode.className += ' active';
          //     }
          //   }  
          // });	
          var nodes = document.querySelectorAll('#toast-gnb-header .left-navbar .nav-item > a');
          for (var i = 0; i < nodes.length; i++) {
            var obj = nodes[i];

            var current_pathname = window.location.href.split('/')[3];
            var href = obj.getAttribute('href');
            var href_pathname = href.split('/')[3];

            if (href[href.length - 1] === '#') {
              return;
            }

            if (current_pathname && current_pathname.indexOf('#') > -1) {
              current_pathname = current_pathname.split('#').shift();
            }

            if (current_pathname && (current_pathname === href_pathname)) {
              if (obj.parentNode.className.indexOf('active') === -1) {
                obj.parentNode.className += ' active';
              }
            }
          }
        }

        function is_scroll_top() {
          if (window.scrollY === 0) {
            return true;
          } else if (window.scrollY > 0) {
            return false;
          }
        }
        /* header nav-item hover */
        mark_current_header_nav_item();
        /* scrolled header for anchor shift */
        changed_header_for_scroll();

        var header_nav_item = document.querySelectorAll('#toast-gnb-header .left-navbar .nav-item');
        for (var i = 0; i < header_nav_item.length; i++) {
          (function (obj) {
            obj.addEventListener('mouseover', function () {
              for (var j = 0; j < header_nav_item.length; j++) {
                var inner_obj = header_nav_item[j];

                inner_obj.className = inner_obj.className.replace('active', '');
              }
            });
          })(header_nav_item[i]);
        }
        // header_nav_item.forEach(function(obj) {
        //   obj.addEventListener('mouseover', function () {
        //     header_nav_item.forEach(function(inner_obj) {
        //       inner_obj.className = inner_obj.className.replace('active', '');
        //     });
        //   });
        // });

        var header = document.querySelector('#toast-gnb-header');
        var header_left_nav = document.querySelector('#toast-gnb-header .left-navbar');

        /* service list hover */
        var hover_link = document.querySelectorAll('#toast-gnb-header .hover-link');
        var service_link = document.querySelector('#toast-gnb-header .service-link');
        var price_link = document.querySelector('#toast-gnb-header .price-link');
        var header_service = document.querySelector('#toast-gnb-header .service-link .dropdown-menu');
        var header_price = document.querySelector('#toast-gnb-header .price-link .dropdown-menu');

        // document.querySelectorAll('#toast-gnb-header .nav-item').forEach(function(obj) {
        //   obj.addEventListener('mouseover', function () {
        //     if (is_scroll_top() && header.className.indexOf('scrolled-fix') === -1) {
        //       header.className = header.className.replace('scrolled', '');
        //     }
        //   });
        // });
        var nodes = document.querySelectorAll('#toast-gnb-header .nav-item');
        for (var i = 0; i < nodes.length; i++) {
          (function (obj) {
            obj.addEventListener('mouseover', function () {
              if (is_scroll_top() && header.className.indexOf('scrolled-fix') === -1) {
                header.className = header.className.replace('scrolled', '');
              }
            });
          })(nodes[i]);
        }

        header.addEventListener('mouseleave', function () {
          // hover_link.forEach(function(obj) {
          //   obj.className = obj.className.replace('active', '');
          // });
          for (var i = 0; i < hover_link.length; i++) {
            var obj = hover_link[i];

            obj.className = obj.className.replace('active', '');
          }

          if (is_scroll_top() && header.className.indexOf('scrolled-fix') === -1) {
            header.className = header.className.replace('scrolled', '');
          }

          mark_current_header_nav_item();
        });
      },

      set_search_event: function () {
        var headerElement = document.querySelector('#toast-gnb-header'),
          navbarBrandElement = document.querySelector('#toast-gnb-header .navbar-brand'),
          leftNavbarElement = document.querySelector('#toast-gnb-header .left-navbar'),
          rightNavbarElement = document.querySelector('#toast-gnb-header .right-navbar'),
          searchElement = document.querySelector('#toast-gnb-header .navbar-search'),
          searchInput = searchElement.querySelector('#toast-gnb-header input[type="text"]'),
          searchClearBtn = searchElement.querySelector('#toast-gnb-header .btn-text-clear');

        var searchFocusOn = function () {
          /*
           * 60px: custom 
           * 24px: navbar-brand margin-right
           * 
           */
          var width = 250;

          searchElement.style.width = width + 'px';

          searchInput.style.paddingLeft = '30px';
          searchInput.style.paddingRight = '25px';
          searchInput.setAttribute('placeholder', commonData.resource[TCC.utils.locale.get()].gnb.placeholder);
          searchInput.focus();
        };
        var searchFocusOut = function () {
          searchElement.style.width = '30px';

          searchInput.style.paddingLeft = '0px';
          searchInput.style.paddingRight = '0px';
          searchInput.setAttribute('placeholder', '');
          searchInput.value = "";

          searchInput.blur();
        };
        var searchClearBtnShow = function () {
          searchClearBtn.style.visibility = 'visible';
        };
        var searchClearBtnHide = function () {
          searchClearBtn.style.visibility = 'hidden';
        };
        var search = function () {
          location.href = commonData.urls[commonData.gnb.dephase].cloud + '/search/documents?q=' + encodeURIComponent(searchInput.value);
        };

        searchFocusOut();
        searchClearBtnHide();

        searchElement.querySelector('input').onkeydown = function (e) {
          if (searchInput.value.length > 0) {
            searchClearBtnShow();
          } else {
            searchClearBtnHide();
          }
          if (e.keyCode === 13) {
            search();
          }
        };

        searchInput.onblur = function () {
          if (searchInput.value.length <= 0) {
            searchFocusOut();
            searchClearBtnHide();
          }
        };

        searchElement.querySelector('.btn-search').onclick = function () {
          if (searchInput.value.length > 0) {
            search();
          } else {
            searchFocusOn();
          }
        };

        searchClearBtn.onclick = function () {
          searchInput.value = '';
          searchInput.focus();
          searchClearBtnHide();
        };

        var gnbData = dataHandler.getData('gnb');
        var query = gnbData.query;

        if (query) {
          searchElement.querySelector('input').value = query;
          searchFocusOn();
        }
      },

      set_dropdown_menu_position: function () {
        var leftNavbarNavItems = document.querySelectorAll('#toast-gnb-header .left-navbar .nav-item .nav-link');
        for (var i = 0; i < leftNavbarNavItems.length; i++) {
          var leftNavbarNavItem = leftNavbarNavItems[i];
          leftNavbarNavItem.addEventListener('mouseover', function () {
            if (this.nextSibling && this.nextSibling.className.indexOf('dropdown-menu') > -1) {
              this.nextSibling.style.paddingLeft = (parseInt(this.getBoundingClientRect().left) + 8) + 'px';
            }
          });
        }
      },

      select_lang: function (options) {
        currentLang = TCC.utils.locale.get();

        TCC.utils.locale.set({
          locale: options.locale
        });

        // change lang display & dropdown selected
        // document.querySelector('#toast-gnb-header .left-navbar .nav-item').text = commonData.resource[TCC.utils.locale.get()].gnb.language_shorten;
        document.querySelector('#toast-gnb-header .nav-circle-wrapper__lang [data-locale-name="' + TCC.utils.locale.get() + '"]').classList.add('active');

        if (options.reload !== false) {
          currentUrl = window.location.pathname
          window.location.href = currentUrl.split('/' + commonData.resource[currentLang].gnb.code + '/')
            .join('/' + commonData.resource[TCC.utils.locale.get()].gnb.code + '/');
          //window.location.reload();
        }
      },

      set_font_family: function (fontFamily) {
        if (fontFamily) {
          var sheet = document.createElement('style');
          sheet.innerHTML = '#toast-gnb-header {font-family: ' + fontFamily + '; }';
          document.body.appendChild(sheet);
        }
      },
    };

    return gnb;

  };

  TCC.footer = function (params) {
    var result = dataHandler.setData('footer', params);
    if (result !== undefined) return result;
    var footer = {
      name: 'toast.com.footer',
      draw: function (element) {
        if (element !== undefined) {
          dataHandler.updateParent('footer', element);
        }

        var commonData = dataHandler.getData('footer');
        var serviceHtml = commonData.parentElement.innerHTML;

        commonData.parentElement.innerHTML = creater.footer() + serviceHtml;
        this.set_family_site_event();
        this.set_between_margin(commonData.betweenMargin);
        this.set_width(commonData.width);
        this.set_font_family(commonData.fontFamily);
      },
      set_family_site_event: function () {
        var toggle = document.querySelector('#toast-gnb-footer .family-site__dropdown-toggle'),
          verticallyBar = toggle.querySelector('.vertically-bar'),
          dropdownMenu = document.querySelector('#toast-gnb-footer .family-site__dropdown-menu.dropdown-menu');

        $($(dropdownMenu).parent()).on('shown.bs.dropdown', function () {
          $(verticallyBar).hide();
        });
        $($(dropdownMenu).parent()).on('hidden.bs.dropdown', function () {
          $(verticallyBar).show();
        });
      },
      set_between_margin: function (margin) {
        var sheet = document.createElement('style');
        sheet.innerHTML = [
          '#toast-gnb-footer > div {margin-left: ' + margin + '; margin-right: ' + margin + '}',
        ].join('');
        document.body.appendChild(sheet);
      },
      set_width: function (width) {
        var sheet = document.createElement('style');
        sheet.innerHTML = [
          '#toast-gnb-footer > div {width: ' + width + ';}',
        ].join('');
        document.body.appendChild(sheet);
      },
      set_font_family: function (fontFamily) {
        if (fontFamily) {
          var sheet = document.createElement('style');
          sheet.innerHTML = '#toast-gnb-footer {font-family: ' + fontFamily + '; }';
          document.body.appendChild(sheet);
        }
      }
    };

    return footer;
  };

  TCC.logger = {
    getCommonData: function (what) {
      return commonData[what];
    }
  };
})();
