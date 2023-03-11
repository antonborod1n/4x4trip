document.addEventListener('DOMContentLoaded', function () {
    //tabs
    const tabsBtn = document.querySelectorAll('.activity__tabs-item');
    const tabsContent = document.querySelectorAll('.activity__content');
    const tabsControl = document.querySelector('.activity__tabs');
    const active = 'active';

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabsBtn.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabsBtn[i].classList.add(active);
    }

    hideTabContent();
    showTabsContent();

    tabsControl.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('activity__tabs-item')) {
            tabsBtn.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabsContent(i);
                    console.log(i)
                }
            });
        }
    });
})