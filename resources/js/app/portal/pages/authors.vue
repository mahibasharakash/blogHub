<template>

    <section class="w-full max-w-7xl mx-auto min-h-[250px] font-medium max-h-[250px] bg-cover object-cover flex justify-center items-center flex-col relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/45" :style="{ backgroundImage: 'url(/images/breadcrumb.jpg)' }">
        <div class="relative flex justify-center items-center flex-col">
            <div class="text-3xl text-center mb-4 text-white"> Authors </div>
            <div class="flex justify-center items-center gap-3">
                <router-link :to="{name:'index'}" class="decoration-0 text-white">
                    Home
                </router-link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-white w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <router-link :to="{name:'authors'}" class="decoration-0 text-white">
                    Authors
                </router-link>
            </div>
        </div>
    </section>

    <section class="pt-16">
        <div class="max-w-7xl mx-auto px-2">
            <div class="w-full flex flex-wrap justify-between">
                <div class="p-6 w-full sm:w-1/2 md:w-3/12">
                    <div class="relative w-full">
                        <select name="" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off">
                            <option value=""> Select Author Type </option>
                            <option value="male"> Male </option>
                            <option value="female"> Female </option>
                        </select>
                        <div class="absolute top-0 bottom-0 end-0 flex items-center pe-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" class="w-4 h-4 stroke-gray-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-6 w-full sm:w-1/2 md:w-3/12">
                    <input type="text" name="keyword" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required placeholder="Search Here ..." autocomplete="off" />
                </div>
            </div>
        </div>
    </section>

    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                <div data-aos="fade-right" data-aos-delay="200" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Sarah Johnson"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                    <p class="text-sm text-gray-600 mb-3">Tech Writer & AI Specialist</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>24 Articles</span>
                        <span>•</span>
                        <span>50K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="400" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Michael Chen"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Michael Chen</h3>
                    <p class="text-sm text-gray-600 mb-3">Productivity Expert</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>18 Articles</span>
                        <span>•</span>
                        <span>32K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="600" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Dr. Lisa Thompson"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Dr. Lisa Thompson</h3>
                    <p class="text-sm text-gray-600 mb-3">Health & Wellness Coach</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>31 Articles</span>
                        <span>•</span>
                        <span>78K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="800" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="David Kim"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">David Kim</h3>
                    <p class="text-sm text-gray-600 mb-3">UX Designer & Design Strategist</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>15 Articles</span>
                        <span>•</span>
                        <span>41K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="1000" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Sarah Johnson"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                    <p class="text-sm text-gray-600 mb-3">Tech Writer & AI Specialist</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>24 Articles</span>
                        <span>•</span>
                        <span>50K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="1200" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Michael Chen"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Michael Chen</h3>
                    <p class="text-sm text-gray-600 mb-3">Productivity Expert</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>18 Articles</span>
                        <span>•</span>
                        <span>32K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="1400" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Dr. Lisa Thompson"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">Dr. Lisa Thompson</h3>
                    <p class="text-sm text-gray-600 mb-3">Health & Wellness Coach</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>31 Articles</span>
                        <span>•</span>
                        <span>78K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

                <div data-aos="fade-right" data-aos-delay="1600" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                        src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="David Kim"
                        class="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 class="font-bold text-gray-900 mb-2">David Kim</h3>
                    <p class="text-sm text-gray-600 mb-3">UX Designer & Design Strategist</p>
                    <div class="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                        <span>15 Articles</span>
                        <span>•</span>
                        <span>41K Followers</span>
                    </div>
                    <button class="cursor-pointer bg-blue-500 text-white px-10 py-2 text-[12px] rounded-lg text-sm font-medium hover:bg-blue-700 duration-500">
                        Follow
                    </button>
                </div>

            </div>
        </div>
    </section>

    <section class="pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full md:flex justify-between items-center">

                <div class="order-2 flex mb-4 justify-center sm:justify-start items-center gap-2 text-gray-700">
                    <div class="min-w-[80px] max-w-[80px]">
                        <select class="outline-0 w-full text-center px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500 appearance-none">
                            <option v-for="n in 10" :key="n" :value="n * 8">
                                {{ n * 8 }}
                            </option>
                        </select>
                    </div>
                    <div> Show: </div>
                    <div> 0 </div>
                    <div> To </div>
                    <div> 8 </div>
                    <div> Out of 400 </div>
                </div>

                <div class="order-1 flex mb-4 justify-center sm:justify-end items-center gap-2">
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] group inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" class="stroke-black duration-500 group-hover:stroke-white w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        1
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        2
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        3
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        4
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        5
                    </button>
                    <button type="button" class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] group inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" class="stroke-black duration-500 group-hover:stroke-white w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    </section>

</template>

<script>

import AOS from "aos";
import "aos/dist/aos.css";

export default {
    data() {
        return {

        }
    },
    mounted() {
        AOS.init();
    },
    methods: {

    }
}

</script>
