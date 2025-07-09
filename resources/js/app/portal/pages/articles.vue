<template>

    <section class="w-full max-w-7xl mx-auto min-h-[250px] font-medium max-h-[250px] bg-cover object-cover flex justify-center items-center flex-col relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/45" :style="{ backgroundImage: 'url(/images/breadcrumb.jpg)' }">
        <div class="relative flex justify-center items-center flex-col">
            <div class="text-3xl text-center mb-4 text-white"> Articles </div>
            <div class="flex justify-center items-center gap-3">
                <router-link :to="{name:'index'}" class="decoration-0 text-white">
                    Home
                </router-link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-white w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <router-link :to="{name:'articles'}" class="decoration-0 text-white">
                    Articles
                </router-link>
            </div>
        </div>
    </section>

    <section class="pt-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full flex flex-wrap">
                <div class="p-1 w-full sm:w-1/2 md:w-3/12">
                    <div class="relative w-full">
                        <select name="" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off">
                            <option value=""> Select Articles Type </option>
                            <option value="featured"> Featured Articles </option>
                            <option value="latest"> Latest Articles </option>
                            <option value="most-views"> Most Views Articles </option>
                        </select>
                        <div class="absolute top-0 bottom-0 end-0 flex items-center pe-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" class="w-4 h-4 stroke-gray-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-1 w-full sm:w-1/2 md:w-3/12">
                    <input type="text" name="keyword" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required placeholder="Search Here ..." autocomplete="off" />
                </div>
                <div class="p-1 w-full sm:w-1/2 md:w-3/12">
                    <div class="relative w-full">
                        <select name="" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off">
                            <option value=""> Select Author </option>
                            <option value=""> Sarah Johnson </option>
                            <option value=""> Michael Chen </option>
                            <option value=""> Dr. Lisa Thompson </option>
                            <option value=""> David Kim </option>
                            <option value=""> Sarah Johnson </option>
                            <option value=""> Michael Chen </option>
                            <option value=""> Dr. Lisa Thompson </option>
                            <option value=""> David Kim </option>
                        </select>
                        <div class="absolute top-0 bottom-0 end-0 flex items-center pe-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" class="w-4 h-4 stroke-gray-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-1 w-full sm:w-1/2 md:w-3/12">
                    <Flatpickr v-model="data" class="appearance-none outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" placeholder="Select Date Range" :config="config"/>
                </div>
            </div>
        </div>
    </section>

    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">

                <!-- article 1 -->
                <article data-aos="fade-right" data-aos-delay="200">
                    <router-link :to="{name:'singleArticle',params:{id:1}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Remote Work Productivity" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-green-100 text-green-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Productivity </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                            <span class="inline-flex justify-start items-center">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Michael Chen</span>
                            </span>
                                <span class="inline-flex justify-start items-center">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 12, 2024</span>
                            </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                Mastering Remote Work: A Complete Guide to Productivity
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                Learn proven strategies and tools to maximize your productivity while working remotely.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Remote Work</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Productivity</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">189</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">32</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

                <!-- article 2 -->
                <article data-aos="fade-right" data-aos-delay="400">
                    <router-link :to="{name:'singleArticle',params:{id:2}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sustainable Living" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Lifestyle </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                            <span class="inline-flex justify-start items-center">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Emma Rodriguez</span>
                            </span>
                                <span class="inline-flex justify-start items-center">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 10, 2024</span>
                            </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                Sustainable Living: Small Changes, Big Impact
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                Discover simple yet effective ways to live more sustainably and benefit the planet.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Sustainability</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Environment</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">156</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">28</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

                <!-- article 3 -->
                <article data-aos="fade-right" data-aos-delay="600">
                    <router-link :to="{name:'singleArticle',params:{id:3}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Minimalist Design" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-pink-100 text-pink-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Design </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">David Kim</span>
                                </span>
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Dec 8, 2024</span>
                                </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                The Art of Minimalist Design: Less is More
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                Understanding the principles of minimalist design and how to apply them effectively.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Design</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Minimalism</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">298</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">67</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

                <!-- article 4 -->
                <article data-aos="fade-right" data-aos-delay="800">
                    <router-link :to="{name:'singleArticle',params:{id:4}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthy Habits" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-orange-100 text-orange-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Health </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Lisa Thompson</span>
                                </span>
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Dec 5, 2024</span>
                                </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                Building Healthy Habits That Actually Stick
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                Science-backed strategies for creating lasting positive changes in your life.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Health</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Habits</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">412</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">89</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

                <!-- article 5 -->
                <article data-aos="fade-right" data-aos-delay="1000">
                    <router-link :to="{name:'singleArticle',params:{id:5}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Investment Strategies" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Finance </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Robert Martinez</span>
                                </span>
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Dec 3, 2024</span>
                                </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                Investment Strategies for Young Professionals
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                A comprehensive guide to smart investing for those just starting their careers.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Finance</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Investment</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">267</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">54</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

                <!-- article 6 -->
                <article data-aos="fade-right" data-aos-delay="1200">
                    <router-link :to="{name:'singleArticle',params:{id:6}}" class="cursor-pointer block group bg-white rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl">
                        <div class="relative h-48 overflow-hidden">
                            <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Technology" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                            <div class="absolute top-3 start-3">
                                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Technology </span>
                            </div>
                        </div>
                        <div class="p-3 sm:p-6">
                            <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap justify-between">
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Alex Chen</span>
                                </span>
                                <span class="inline-flex justify-start items-center">
                                    <span class="me-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                        </svg>
                                    </span>
                                    <span class="mr-3">Dec 1, 2024</span>
                                </span>
                            </div>
                            <h3 class="text-lg font-medium text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
                                AI Revolution: How Machine Learning is Changing Everything
                            </h3>
                            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                                Exploring the transformative impact of AI across industries and daily life.
                            </p>
                            <div class="flex items-center justify-between">
                                <div class="flex flex-wrap gap-1">
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">AI</span>
                                    <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">Technology</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500">
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                        </svg>
                                        <span class="text-xs">345</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                        </svg>
                                        <span class="text-xs">78</span>
                                    </div>
                                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>

            </div>
        </div>
    </section>

    <section class="pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full md:flex justify-between items-center">
                <div data-aos="fade-bottom" data-aos-delay="200" class="order-2 flex mb-4 justify-center sm:justify-start items-center gap-2 text-gray-700">
                    <div class="min-w-[80px] max-w-[80px]">
                        <select class="cursor-pointer outline-0 w-full text-center px-0 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500 appearance-none">
                            <option v-for="n in 10" :key="n" :value="n * 6">
                                {{ n * 6 }}
                            </option>
                        </select>
                    </div>
                    <div> Show: </div>
                    <div> 0 </div>
                    <div> To </div>
                    <div> 6 </div>
                    <div> Out of 400 </div>
                </div>
                <div data-aos="fade-bottom" data-aos-delay="400" class="order-1 flex mb-4 justify-center sm:justify-end items-center gap-2">
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
import Flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
    components: {
        Flatpickr
    },
    data() {
        return {
            data: null,
            config: {
                mode: "range",
                enableTime: false,
                dateFormat: "d M Y",
                disableMobile: true,
            }
        }
    },
    mounted() {
        AOS.init();
    },
    methods: {



    }
}

</script>
