<template>
    <div class="">
        <div class="tw-p-2 tw-text-justify tw-mx-auto">
            <!-- <div style="background-image:url(http://www.sonoquilibrium.com/wp-content/uploads/2014/11/3134971.jpg)" class="tw-text-white tw-bg-gray-700 tw-bg-no-repeat tw-bg-center tw-bg-cover" >
                <div class="tw-absolute tw-w-2/5 tw-inset-0 tw-bg-black tw-opacity-50 tw-h-full tw-flex tw-flex-col">

                    <h1 class="tw-font-bold tw-text-center tw-text-6xl tw-mt-4">I am Oluwashina Odumosu</h1>
                    <h2 class=" tw-font-extrabold tw-text-center tw-text-6xl tw-mt-4">Software Engineer (Jr.)</h2>

                    <p class="tw-mt-3 tw-pl-5 tw-pr-5 tw-text-center tw-uppercase">
                        I help create unforgetable experiences
                    </p>

                    <div class="tw-mt-8 tw-text-center">
                        <a href="#what" class="tw-bg-green-500 hover:tw-bg-green-700 tw-text-white tw-font-bold tw-text-center tw-py-2 tw-px-4 tw-rounded">Take a look!</a
                        >
                    </div>

                </div>
            </div> -->
            <div class="hero-img tw-relative tw-w-full tw-h-auto tw-text-center tw-text-white">
                <div class="hero-content tw-relative tw-w-full md:tw-w-1/2 tw-flex tw-justify-center tw-mx-auto tw-items-center tw-px-6 tw-h-screen">
                    <div class="hero-inner-content">
                        <h1 class="tw-text-5xl tw-font-bold tw-py-4">I am Oluwashina </h1>
                        <p class="tw-w-3/4 tw-mx-auto tw-text-white tw-text-2xl tw-font-normal tw-pb-5">
                            Freelance Web Developer & Mobile UI/UX Designer
                        </p>
                        <button type="button">Button</button>
                        <Button type="button">My portfolio</Button>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import Button from '../components/button.vue'
export default {
  components: { Button },
    
}
</script>

<style scoped>
.hero-img {
    background: url(https://res.cloudinary.com/griffintech/image/upload/v1591145178/Fotostack/IMG-20191210-WA0012_li6qsv.jpg) center right ;
    background-size: cover;
    background-repeat: no-repeat;
}

.hero-img::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
}

.hero-inner-content {
    line-height: 23px;
}

 @media screen and (max-width: 768px) {

     .hero-img::before {
         width: 100% !important;
     }

     .hero-inner-content h1 {
         font-size: 35px;
     }

    .hero-inner-content {
        line-height: 3px !important;
    }

     .hero-inner-content p {
         font-size: 16px;
     }
 }
</style>