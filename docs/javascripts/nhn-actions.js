// NHN Cloud 사용자 가이드 - 공유 + PDF 인쇄 액션
(function() {
    'use strict';

    // 토스트 알림 표시
    function showToast(message, isError) {
        var toast = document.getElementById('nhn-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'nhn-toast';
            toast.className = 'nhn-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.className = 'nhn-toast' + (isError ? ' nhn-toast--error' : ' nhn-toast--success') + ' nhn-toast--show';
        clearTimeout(toast._timer);
        toast._timer = setTimeout(function() {
            toast.classList.remove('nhn-toast--show');
        }, 2200);
    }

    // 페이지 공유 - Web Share API 우선, 없으면 클립보드 복사
    window.nhnSharePage = function(btn) {
        var url = window.location.href;
        var title = document.title;
        var text = '';
        var h1 = document.querySelector('article h1');
        if (h1) text = h1.textContent.trim() + ' - NHN Cloud 사용자 가이드';

        // Web Share API 지원 시 (모바일/일부 데스크톱)
        if (navigator.share) {
            navigator.share({
                title: title,
                text: text,
                url: url
            }).then(function() {
                showToast('공유 완료');
            }).catch(function(err) {
                if (err.name !== 'AbortError') {
                    fallbackCopy(url);
                }
            });
            return;
        }

        // Fallback - 클립보드 복사
        fallbackCopy(url);
    };

    function fallbackCopy(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('링크가 클립보드에 복사되었습니다');
            }).catch(function() {
                legacyCopy(text);
            });
        } else {
            legacyCopy(text);
        }
    }

    function legacyCopy(text) {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try {
            var ok = document.execCommand('copy');
            showToast(ok ? '링크가 클립보드에 복사되었습니다' : '링크 복사 실패', !ok);
        } catch (e) {
            showToast('링크 복사 실패', true);
        }
        document.body.removeChild(ta);
    }

    // PDF 인쇄 - 브라우저 인쇄 다이얼로그 호출
    window.nhnPrintPage = function() {
        // 인쇄 전 우측 RNB 와 사이드바 숨김 (CSS @media print 에서 처리됨)
        showToast('인쇄 다이얼로그를 엽니다');
        setTimeout(function() {
            window.print();
        }, 300);
    };
})();
