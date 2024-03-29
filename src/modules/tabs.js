document.addEventListener('DOMContentLoaded', function () {
    //tabs

    function tabs(btn, content, control) {
        const tabsBtn = document.querySelectorAll(btn);
        const tabsContent = document.querySelectorAll(content);
        const tabsControl = document.querySelector(control);
        const active = 'active';

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.style.display = 'none';
            });

            tabsBtn.forEach(item => {
                item.classList.remove(active);
                item.parentElement.classList.remove(active);

            });
        }

        function showTabsContent(i = 0) {
            tabsContent[i].style.display = 'block';
            tabsBtn[i].classList.add(active);
            tabsBtn[i].parentElement.classList.add(active);
        }

        hideTabContent();
        showTabsContent();

        tabsControl.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('activity__tabs-year')) {
                tabsBtn.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabsContent(i);
                    }
                });
            }
        });
    }

    tabs('.activity__tabs-year', '.activity__content', '.activity__tabs');
})
