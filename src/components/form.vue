<template>
    <body class="tw-bg-white dark:tw-bg-gray-900">
    <div class="tw-flex tw-w-full tw-justify-around tw-items-center tw-bg-gray-100 dark:tw-bg-gray-900 tw-text-gray-900 dark:tw-text-white tw-py-5">
        <div class="theme-switcher">
            <button class="theme-switcher-button theme-switcher-light bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Light"><i class="fas fa-sun pointer-events-none"></i> Light</button><button class="theme-switcher-button theme-switcher-dark bg-gray-200 border-gray-200 border-2 dark:bg-black dark:border-black p-2 focus:outline-none" title="Dark"><i class="fas fa-moon pointer-events-none"></i> Dark</button><button class="theme-switcher-button theme-switcher-auto bg-gray-200 border-gray-200 dark:bg-black border-2 dark:border-black p-2 focus:outline-none" title="Auto"><i class="fas fa-adjust pointer-events-none"></i> Auto</button>
        </div>
    </div>
    <form action="http://localhost:3000" method="post" class="my-20 p-10 max-w-xl mx-auto shadow-md sm:border-0 md:border md:border-gray-900 md:dark:border-gray-100 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <div class="form-message"></div>
        <input type="hidden" name="redirect" class="redirect">
        <div class="mb-10">
            <h1 class="font-bold text-4xl mb-3">Get in touch</h1>
            <p class="font-medium text-lg mb-5">Send us a quick message and we'll get back to you shortly.</p>
            <hr class="border-gray-900 dark:border-gray-100">
        </div>
        <div class="mb-5">
            <label for="message" class="text-lg flex justify-between items-end"><span>Message</span><span class="text-xs text-red-500">Required</span></label>
            <textarea name="message" id="message" cols="30" rows="10" class="shadow-md mt-1 block w-full sm:text-sm rounded-none border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900"></textarea>
        </div>
        <div class="mb-5">
            <label for="name" class="text-lg flex justify-between items-end"><span>Name</span><span class="text-xs text-red-500 ">Required</span></label>
            <div class="mt-1 flex shadow-md">
                <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-user"></i></span>
                <input type="text" name="name" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900">
            </div>
        </div>
        <div class="mb-5">
            <label for="email" class="text-lg flex justify-between items-end"><span>Email</span><span class="text-xs text-red-500">Required</span></label>
            <div class="mt-1 flex shadow-md">
                <span class="inline-flex items-center px-3 rounded-none border border-r-0 border-gray-900 dark:border-gray-100"><i class="fas fa-envelope"></i></span>
                <input type="email" name="email" class="flex-1 block w-full sm:text-sm rounded-none border border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900">
            </div>
        </div>
        <div>
            <button type="submit" class="font-medium shadow-md rounded-none p-2 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-900 dark:border-gray-100 bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 hover:bg-gray-900 dark:hover:bg-gray-100"><i class="fas fa-check"></i> Send</button>
        </div>
    </form>
</body>
</template>

<script>
    const redirectField = document.querySelector('.redirect');
    const pageUrl = window.location.href;
    console.log(window.location.href)
    redirectField.value = pageUrl;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const formMessage = document.querySelector('.form-message');

    if(urlParams.has('submit')) {
        if(urlParams.get('submit') === 'true') {
            formMessage.innerHTML = `<div class="tw-mb-5 tw-p-3 tw-max-w-xl tw-mx-auto tw-shadow-md sm:tw-border-0 md:tw-border md:tw-border-gray-900 md:dark:tw-border-gray-100 tw-bg-green-400 dark:tw-bg-green-400 tw-text-gray-900 dark:tw-text-gray-900">Thanks for your enquiry, someone will be in touch shortly.</div>`;
            formMessage.scrollIntoView();
            window.scrollBy(0, -20);
        }
    }
</script>

<style scoped>

</style>