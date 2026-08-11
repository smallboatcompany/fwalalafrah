// ============================================================
// فوال الأفراح — سلوكيات مشتركة (الهيدر، قائمة الجوال، ظهور العناصر)
// ============================================================
(function () {
    function init() {
        // زر قائمة الجوال
        var toggleBtn = document.getElementById('menuToggle');
        var mobileMenu = document.getElementById('mobileMenu');
        var menuIcon = document.getElementById('menuIcon');

        function closeMobileMenu() {
            if (!mobileMenu) return;
            mobileMenu.classList.remove('open');
            if (menuIcon) {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        }

        if (toggleBtn && mobileMenu) {
            toggleBtn.addEventListener('click', function () {
                var isOpen = mobileMenu.classList.toggle('open');
                if (menuIcon) {
                    menuIcon.classList.toggle('fa-bars', !isOpen);
                    menuIcon.classList.toggle('fa-xmark', isOpen);
                }
            });
            mobileMenu.querySelectorAll('a').forEach(function (a) {
                a.addEventListener('click', closeMobileMenu);
            });
        }

        // ظل الهيدر عند التمرير
        var header = document.getElementById('siteHeader');
        if (header) {
            var onScroll = function () {
                if (window.scrollY > 12) header.classList.add('scrolled');
                else header.classList.remove('scrolled');
            };
            window.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
        }

        // ظهور العناصر تدريجياً عند التمرير
        var revealEls = document.querySelectorAll('.reveal');
        if ('IntersectionObserver' in window && revealEls.length) {
            var observer = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
            );
            revealEls.forEach(function (el) { observer.observe(el); });
        } else {
            revealEls.forEach(function (el) { el.classList.add('is-visible'); });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
