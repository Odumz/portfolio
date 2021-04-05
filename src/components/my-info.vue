<template>
    <div class="md:tw-flex-row tw-w-full tw-flex-col tw-items-center">
        <div class="md:tw-w-2/5 tw-w-full tw-text-tertiary py-26 md:tw-text-6xl tw-text-xl tw-flex tw-flex-col tw-items-end tw-pr-12">
            <p> About Me </p>
            <hr id="hr" style="height: 3px; width: 100px; border: none; color: #FBD214; background-color: #FBD214;" class="tw-mt-2" />
        </div>
        <div class="md:tw-w-3/5 tw-w-full md:tw-mt-10 tw-mx-auto tw-bg-tertiary md:tw-text-base tw-text-sm tw-p-10 md:tw-px-10 tw-text-justify">
            I am Odumosu Oluwashina, born and raised in Lagos, Nigeria. I schooled mostly in Engreg International Schools before going to Obafemi Awolowo University where I graduated with a B.Sc. in Computer Engineering. I am mostly adventurous, positive-minded as well as inquisitive and I love to learn especially so I can see things in a wider perspective, thereby providing lasting solutions to local/global challenges.
            <div class="tw-mt-5 md:tw-my-4 md:tw-pb-4 tw-flex">
                <!-- <Button :buttons = "buttons" /> -->
                <router-link class="md:tw-text-base tw-text-sm hover:tw-bg-secondary hover:tw-text-tertiary line tw-px-8 md:tw-px-4 md:tw-py-2 tw-py-4 tw-text-center tw-mx-auto tw-flex tw-items-center " to="/my-works"> 
                Check out my portfolio 
                <span class="tw-flex tw-justify-center tw-items-center tw-h-3 tw-w-3"> &nbsp;
                  <span class="tw-animate-ping hover:tw-bg-tertiary tw-absolute tw-inline-flex tw-w-9 tw-h-9 tw-rounded-full tw-bg-secondary tw-opacity-75"></span>
                  <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-1 tw-w-1 hover:tw-bg-tertiary tw-bg-secondary"></span>
                </span></router-link>
            </div>
        </div>
    </div>
</template>

<script>
// import Button from './button.vue'
export default {
  // components: { Button },
  data: () => ({
      buttons: [
        {
          text: 'Home',
          path: '/',
          icon: 'home'
        },
        {
          text: 'About',
          path: '/about-me',
          icon: 'about'
        },
      ]
  }),
    
}
</script>

<style scoped>
.line {
    border-color: rgba(42, 47, 50, 0.29);
    border-width: 2px;
    border-radius: 60px;
}

.py-26 {
    padding-top: 104px !important;
    padding-bottom: 105px !important;
}

  @media screen and (max-width: 768px) {
        /* .index {
            padding-left: 60px !important;
            padding-right: 10px !important;
        } */

        .py-26 {
          padding-top: 14px !important;
          padding-bottom: 35px !important;
        }
    }

</style>