$(function () {
    var lang_code = {
        'ko': 'ko_KR',
        'en': 'en_US',
        'ja': 'ja_JP',
        'zh': 'zh_CN',
    };

    $.getScript(base_url + "/js/tc-document-gnb-builder.js", function () {
        var version = '';
        try {
            version = READTHEDOCS_DATA['version'];
        } catch (e) {
            version = 'master';
        }
        if (READTHEDOCS_DATA['language']) {
            TCC.utils.locale.set({
                locale: lang_code[READTHEDOCS_DATA['language']] || 'ko_KR'
            });
        }
        gnb = new TCC.gnb({
            parentElement: document.getElementById('toast-gnb-header'),
            dephase: version,
            myInfo: {
                username: '',
                email: ''
            },
            query: '',
            rightMenus: [{
                    type: 'search'
                },
                {
                    type: 'lang',
                    lang: {
                        ko: true,
                        en: true,
                        ja: true,
                        zh: true
                    }
                }
            ]
        });
        if (gnb.name.indexOf('Error') < 0) {
            gnb.draw();
        }
    });
});