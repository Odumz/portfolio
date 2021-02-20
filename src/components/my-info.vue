<template>
    <div class="lg:tw-flex md:tw-flex-row tw-w-full tw-flex-col tw-items-center">
        <div class="md:tw-w-2/5 lg:tw-w-2/5 xs::tw-w-full sm:tw-w-full tw-text-primary py-26 md:tw-text-6xl tw-text-xl tw-flex tw-flex-col tw-items-end tw-pr-12 tw-align-middle">
            <p> About Me </p>
            <hr id="hr" style="height: 3px; width: 100px; border: none; color: #F97C46; background-color: #F97C46;" class="tw-mt-2" />
        </div>
        <div class="md:tw-w-3/5 lg:tw-w-3/5 xs::tw-w-full sm:tw-w-full tw-mx-auto tw-bg-primary tw-flex tw-p-14 lg:tw-p-20 xs:tw-p-10 sm:tw-p-10 tw-content-start tw-text-justify">
            I am Odumosu Oluwashina, born and raised in Lagos, Nigeria. I schooled mostly in Engreg International Schools before going to Obafemi Awolowo University where I graduated with a B.Sc. in Computer Engineering. I am mostly adventurous, positive-minded as well as inquisitive and I love to learn especially so I can provide lasting solutions to local/global challenges.
            <div>
                <Button :buttons = "buttons" />
                <button title="Hello"/>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './button.vue'
export default {
  components: { Button },
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
        {
          text: 'Portfolio',
          path: '/my-works',
          icon: 'portfolio'
        },
        {
          text: 'Services',
          path: '/services-i-offer',
          icon: 'services'
        },
        {
          text: 'Contact',
          path: '/contact-me',
          icon: 'contact'
        },
        {
          text: 'Blog',
          path: '/my-blogs',
          icon: 'blog'
        }
      ]
  }),
    
}
</script>

<style scoped>
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