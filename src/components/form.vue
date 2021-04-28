<template>    
    <div class="tw-flex lg:tw-w-1/2">
        <div class="tw-relative">
            <div class="tw-absolute tw-z-0 lg:tw-left-40 lg:tw--top-6 ball-top tw-w-40 tw-h-40 tw-bg-primary tw-rounded-full"></div>
        </div>
        <div class="tw-relative">
            <div class="tw-absolute tw-z-0 tw--left-20 tw-top-96 ball-bottom tw-w-40 tw-h-40 tw-bg-secondary tw-rounded-full"></div>
        </div>
        <div class="tw-relative tw-z-10 tw-w-full tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-8">
            <form action="" class="tw-flex tw-flex-col tw-space-y-4" method="post">
                <div>
                    <label for="name" class="tw-text-sm">Your name</label>
                    <input type="text" 
                        v-model="data.name"
                        name="name" 
                        id="name" 
                        placeholder="Your name" 
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400" />
                </div>
                <div>
                    <label for="email" class="tw-text-sm">Email Address</label>
                    <input type="text" 
                        name="email" 
                        v-model="data.email"
                        id="email" 
                        placeholder="Your email" 
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400" />
                </div>
                <div>
                    <label for="message" class="tw-text-sm">Drop a message...</label>
                    <textarea
                        name="message" 
                        v-model="data.message"
                        id="message" 
                        placeholder="Your message"
                        rows="4"
                        class="tw-mt-2 tw-ring-1 tw-ring-gray-500 tw-w-full tw-rounded-md tw-px-4 tw-py-2 tw-outline-none focus:tw-ring-2 focus:tw-ring-indigo-400"></textarea>
                </div>
                <button @click.prevent="sendMail" :disabled = "clicked" class="tw-inline-block tw-self-end tw-bg-tertiary hover:tw-bg-secondary hover:tw-text-tertiary tw-text-secondary tw-font-bold tw-rounded-lg tw-px-6 tw-py-2 tw-uppercase tw-text-sm">{{ button_text }}</button>
            </form>
        </div>
    </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
    data() {
        return {
            key: ['name', 'email', 'message'],
            data : {},
            errors: {},
            clicked: false,
            button_text: 'Send Message'
        }
    },
    methods: {
        sendMail() {
            this.errorCheck();
            console.log('Hello')
            this.submit();
        },
        errorCheck() {
            console.log('Hello1')
            this.errors = {};
            console.log('Hello2')
            let key = this.key
            console.log(key)
            for (let i of key)
            if(!this.data[key[i]]) {
                console.log('Hello4')
                this.errors[key[i]] = true;
                console.log('There is nothing here', this.errors[key[i]])
                return;
            }
            console.log('Hello20')
        },
        sendEmail() {
            console.log('Hello5')
            try {
                console.log('Hello6')
                const templateParams = {
                    from_name: this.data.name,
                    to_name: 'Biodun',
                    email: this.data.email,
                    message: this.data.message
                }
                console.log(templateParams)
                if (templateParams.from_name === undefined || templateParams.email === undefined || templateParams.message === undefined) {
                    console.log('Please fill all fields')
                    alert('Please fill all fields')
                } else { 
                    emailjs.send('service_u8de7e5', 'template_llnx0yt', templateParams, 'user_MT6KU1tpIihHDSbn0oXqO').then((response) => {
                        console.log('Success', response.status, response.text);
                        alert(response.text);
                    }, (err) => {
                        console.log('Failed...', err)
                    });
                    
                    this.data.name = '';
                    this.data.email = '';
                    this.data.message = '';

                }
                console.log('Hello7')
            } catch {
                // this.$toasted(`Oops, we need help Houston <br/>`, {
                //     theme: 'bubble',
                //     position: 'top-center',
                //     duration: 5000,
                // });
                console.log('here I am')
            }

            console.log('Hello8')

            

            console.log('Hello9')
        },
        submit() {
            console.log('Hello10')
            // this.errorCheck();
            console.log('Hello11')
            this.clicked = true;
            console.log('Hello12')
            this.button_text = 'Sending...';
            console.log('Hello13')
            // const self = this;
            console.log('Hello14')
            // this.errors = false;

            console.log('Hello15')

            // if (this.errors) {
            //     console.log('Hello16')
            //     self.button_text = 'Send Message';
            //     console.log('Hello17')
            //     setTimeout(function() {
            //     self.$toasted
            //         .error('An error occured', {
            //         theme: 'bubble',
            //         position: 'top-center',
            //         duration: 5000,
            //         })
            //         .goAway(2500);
            //     }, 2500);
            //     setTimeout(function() {
            //     self.clicked = false;
            //     }, 3500);
            // } else {
                console.log('Hello18')
                this.sendEmail();
                console.log('Hello19')
                this.clicked = false;
                console.log('Hello20')
                this.button_text = 'Send Message';
                console.log('hello21')
                // setTimeout(function() {
                // self.$toasted
                //     .success('Account successfully created', {
                //     theme: 'bubble',
                //     position: 'top-center',
                //     duration: 5000,
                //     })
                //     .goAway(2500);
                // // }, 3200);
                // setTimeout(function() {
                // self.clicked = false;
                // // self.$router.push('/dashboard');
                // }, 4000);
            // }
        },
    },
}
</script>

<style scoped>

@media only screen and (max-width: 376px) {
    /* .ball-top{
        left: 150px;
        bottom: -120px;
    } */

    /* .ball-bottom{
        left: -80px;
        top: 30px
    } */
}

@media only screen and (max-width: 440px) {
    .ball-top{
        left: 175px !important;
        top: -41px !important;
    }

    .ball-bottom {
        left: -90px !important;
        top: 400px !important;
    }
}

@media only screen and (max-width: 500px) {
    .ball-top{
        left: 275px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}

@media only screen and (max-width: 598px) {
    .ball-top{
        left: 335px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}

@media only screen and (max-width: 650px) {
    .ball-top{
        left: 355px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}

@media only screen and (max-width: 700px) {
    .ball-top{
        left: 455px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}

@media only screen and (max-width: 767px) {
    .ball-top{
        left: 455px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}
/* 
@media only screen and (max-width: ) {
    .ball-top{
        left: 365px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
}

@media only screen and (max-width: ) {
    .ball-top{
        left: 365px !important;
        top: -71px !important;
    }

    .ball-bottom {
        left: -70px;
        top: 378px;
    }
} */
</style>