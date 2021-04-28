<template>
    <div class="tw-p-10">
        <form @submit.prevent="search">
            <div class="tw-flex tw-justify-center tw-m-auto">
                <input v-model="searchTerm" type="text" placeholder="Search here..." class="tw-rounded-md lg:tw-w-2/12 tw-bg-purple-300 tw-pl-4">
                <button @click="search" class="tw-bg-yellow-200 tw-p-2 tw-rounded-md tw-ml-4 tw-text-white tw-uppercase">
                    Search
                </button>
            </div>
        </form>
        <div class="tw-flex tw-flex-wrap tw-justify-around">
            <div v-for="img of imgs" :key="img.title"  class="tw-w-64 tw-bg-yellow-200 tw-p-3 tw-rounded-md tw-mt-4">
                <img :src="img.poster" alt="img.title">
                <h3 class="tw-text-xl tw-font-extrabold">{{ img.title }}</h3>
                <span>{{ img.date }}</span>
            </div>            
        </div>      
    </div>
</template>

<script>
const imgTest = 'http://www.sonoquilibrium.com/wp-content/uploads/2014/11/3134971.jpg'
const popURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key='
const bg = 'https://image.tmdb.org/t/p/w1280/';
const searchURL = 'https://image.tmcb.org/t/p/w1280/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg';


export default {
    data() {
        return {
            imgTest: imgTest,
            imgs: [],
            searchTerm: ''
        }
    },
    mounted() {
        fetch(popURL).then(
            (info) => info.json()
        ).then (
            (movies) => {
                console.log(movies);
                this.imgs = this.parseImgResponse(movies)
            }
        )
    },
    methods: {
        search () {
            if (this.searchTerm === "") {
                return;
            }

            fetch(`${searchURL}${this.searchTerm}`).then(
                (val) => val.json()
            ).then(
                (movies) => {
                    this.imgs = this.parseImgResponse(movies)
                }
            )
        },
        parseImgResponse(movies) {
            return movies.results.reduce((acc, movie) => {
                if(!movie.poster_path) {
                    return acc
                }
                acc.push({
                    poster: `${bg}${movie.poster_path}`,
                    date: movie.release_date,
                    title: movie.title
                })
                return acc;
            }, []);
        }
    },
}
</script>