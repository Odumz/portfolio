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
                        <div class="md:tw-flex md:tw-w-3/5 tw-mx-auto">
                            <router-link class="md:tw-text-base tw-text-sm tw-animate-bounce tw-w-auto hover:tw-bg-secondary hover:tw-text-tertiary line tw-px-8 md:tw-px-4 md:tw-py-2 tw-py-4 tw-my-4 tw-text-center tw-mx-auto tw-flex tw-justify-center " to="/about-me"> 
                            About me </router-link>
                            <router-link class="md:tw-text-base tw-text-sm tw-w-auto hover:tw-bg-secondary tw-bg-tertiary hover:tw-text-tertiary tw-text-secondary line tw-px-8 md:tw-px-4 md:tw-py-2 tw-py-4 tw-my-4 tw-text-center tw-mx-auto tw-flex tw-justify-center " to="/contact-me"> 
                            Hire me! 
                                <span class="tw-flex tw-justify-center tw-items-center tw-h-3 tw-w-3"> &nbsp;
                                <span class="tw-animate-ping hover:tw-bg-tertiary tw-absolute tw-inline-flex tw-w-9 tw-h-9 tw-rounded-full tw-bg-secondary tw-opacity-75"></span>
                                <span class="tw-relative tw-inline-flex tw-rounded-full tw-h-1 tw-w-1 hover:tw-bg-tertiary tw-bg-secondary"></span>
                                </span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
// import Button from '../components/button.vue'
export default {
//   components: { Button },
    
}
</script>

<style scoped>
.line {
    border-color: rgba(251, 210, 20, 0.39);
    border-width: 2px;
    border-radius: 60px;
}

.hero-img {
    background: url(https://res.cloudinary.com/griffintech/image/upload/v1591145178/Fotostack/IMG-20191210-WA0012_li6qsv.jpg) center right ;
    background-size: cover;
    background-repeat: no-repeat;
    max-height: 90vh;
}

.hero-img::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
}

.hero-inner-content {
    line-height: 23px;
}

/* .hero-inner-content {
    right: 0;
} */

 @media screen and (max-width: 768px) {
     .hero-img {
            max-height: 75vh !important;
        }

     .hero-img::before {
         width: 100% !important;
     }

     .hero-inner-content h1 {
         font-size: 35px;
     }

    .hero-inner-content {
        line-height: 3px !important;
        margin-top: -170px;
    }

     .hero-inner-content p {
         font-size: 16px;
     }
 }
</style>