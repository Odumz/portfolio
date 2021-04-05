<template>
    <div class="tw-flex tw-w-full tw-justify-around tw-items-center tw-bg-gray-100 dark:tw-bg-gray-900 tw-text-gray-900 dark:tw-text-white py-5">
        <div class="theme-switcher">
            <button class="theme-switcher-button theme-switcher-light tw-bg-gray-200 tw-border-gray-200 tw-border-2 dark:tw-bg-black dark:tw-border-black tw-p-2 focus:tw-outline-none" title="Light"><i class="fas fa-sun pointer-events-none"></i> Light</button><button class="theme-switcher-button theme-switcher-dark tw-bg-gray-200 tw-border-gray-200 tw-border-2 dark:tw-bg-black dark:tw-border-black tw-p-2 focus:tw-outline-none" title="Dark"><i class="fas fa-moon pointer-events-none"></i> Dark</button><button class="theme-switcher-button theme-switcher-auto tw-bg-gray-200 tw-border-gray-200 dark:tw-bg-black tw-border-2 dark:tw-border-black tw-p-2 focus:tw-outline-none" title="Auto"><i class="fas fa-adjust pointer-events-none"></i> Auto</button>
        </div>
    </div>
</template>

<script>
    const themeSwitcher = document.querySelector('.theme-switcher');

    console.log(themeSwitcher)

    themeSwitcher.addEventListener('click', (e) => {
        setTheme(e);
        getTheme();
    });

    window.addEventListener('load', () => {
        getTheme();
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        getTheme();
    });

    function setActive(selectedButton) {
        const themeSwitcherButtons = document.querySelectorAll('.theme-switcher-button');
        themeSwitcherButtons.forEach((button) => {
            if (button.classList.contains('is-active')) {
                button.classList.remove('is-active');
            }
        })
        let activeButton = document.querySelector(`.theme-switcher-${selectedButton}`);
        activeButton.classList.add('is-active');
    }

    function getTheme() {
        const localTheme = localStorage.theme;
        let selectedButton;

        if (localTheme === 'dark') {
            document.documentElement.classList.add('dark');
            selectedButton = 'dark';
        } else if (localTheme === 'light') {
            document.documentElement.classList.remove('dark');
            selectedButton = 'light';
        } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            selectedButton = 'auto';
        }
        
        setActive(selectedButton);
    }

    function setTheme(e) {
        let elem = e.target;

        if (elem.classList.contains('theme-switcher-dark')) {
            localStorage.theme = 'dark';
        } else if (elem.classList.contains('theme-switcher-light')) {
            localStorage.theme = 'light';
        } else {
            localStorage.removeItem('theme');
        }
    }
</script>