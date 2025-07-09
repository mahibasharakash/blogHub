<template>

    <section class="px-5 py-3 flex justify-between items-center">
        <div class="text-[21px] font-medium"> Articles </div>
        <button type="button" class="cursor-pointer text-sm min-w-[120px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center duration-500 bg-blue-400 hover:bg-blue-800 text-white rounded-xl" @click="openManageModal()">
            Create
        </button>
    </section>

    <section class="p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

            <!-- article 1 -->
            <div class="relative group">
                <div class="opacity-0 group-hover:opacity-100 absolute z-10 inset-0 w-full h-full bg-white/65 rounded-xl shadow-md overflow-hidden duration-500 hover:shadow-2xl flex justify-center items-center gap-2">
                    <button type="button" class="size-[45px] rounded-full bg-gray-200 duration-500 hover:bg-gray-800 inline-flex justify-center items-center group/item cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-800 duration-500 group-hover/item:stroke-white size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button type="button" class="size-[45px] rounded-full bg-gray-200 duration-500 hover:bg-gray-800 inline-flex justify-center items-center group/item cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-800 duration-500 group-hover/item:stroke-white size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                        </svg>
                    </button>
                    <button type="button" class="size-[45px] rounded-full bg-gray-200 duration-500 hover:bg-gray-800 inline-flex justify-center items-center group/item cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-800 duration-500 group-hover/item:stroke-white size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                    </button>
                    <button type="button" class="size-[45px] rounded-full bg-gray-200 duration-500 hover:bg-gray-800 inline-flex justify-center items-center group/item cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-800 duration-500 group-hover/item:stroke-white size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </button>
                </div>
                <div class="block bg-white rounded-xl overflow-hidden duration-500 shadow-md group-hover:shadow-none">
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
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                </svg>
                            </span>
                            <span class="mr-3">Michael Chen</span>
                        </span>
                            <span class="inline-flex justify-start items-center">
                            <span class="me-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
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
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                    <span class="text-xs">189</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"/>
                                    </svg>
                                    <span class="text-xs">32</span>
                                </div>
                                <button class="text-gray-400 hover:text-blue-600 duration-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section class="pb-16">
        <div class="px-5 py-3">
            <div class="w-full md:flex justify-between items-center">
                <div class="order-2 flex mb-4 mb:mb-0 justify-center sm:justify-start items-center gap-2 text-gray-700">
                    <div class="min-w-[80px] max-w-[80px]">
                        <select
                            class="cursor-pointer outline-0 w-full text-center px-0 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500 appearance-none">
                            <option v-for="n in 10" :key="n" :value="n * 6">
                                {{ n * 6 }}
                            </option>
                        </select>
                    </div>
                    <div> Show:</div>
                    <div> 0</div>
                    <div> To</div>
                    <div> 6</div>
                    <div> Out of 400</div>
                </div>
                <div class="order-1 flex mb-4 mb:mb-0 justify-center sm:justify-end items-center gap-2">
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] group inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                             class="stroke-black duration-500 group-hover:stroke-white w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        1
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        2
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        3
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        4
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400 hover:text-white">
                        5
                    </button>
                    <button type="button"
                            class="cursor-pointer min-w-[45px] max-w-[45px] min-h-[45px] max-h-[45px] group inline-flex justify-center items-center rounded-full font-medium outline-0 border-0 bg-gray-200 duration-500 hover:bg-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                             class="stroke-black duration-500 group-hover:stroke-white w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="fixed inset-0 size-full grid sm:justify-center items-center duration-500 z-50 p-5 overflow-y-auto" :class="{ 'invisible bg-black/35' : !isActiveManageModal, 'visible bg-black/65' : isActiveManageModal }" @click="isActiveManageModal = false">
        <aside class="bg-white rounded-3xl w-full sm:max-w-[550px] sm:min-w-[550px] px-10 py-7 duration-500 origin-top" :class="{ 'translate-y-0 opacity-100' : isActiveManageModal, '-translate-y-1/2 opacity-0' : !isActiveManageModal }" @click.stop>
            <form class="w-full h-full block">
                <div class="w-full flex justify-between mb-3">
                    <div class="text-[20px] font-medium block"> Create Article </div>
                    <button type="button" class="w-9 h-9 rounded-full outline-0 border-0 bg-transparent duration-500 hover:bg-gray-300 inline-flex justify-center items-center cursor-pointer" @click="closeManageModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="block w-full mb-3">
                    <label for="author-name" class="block text-sm font-medium text-gray-700 mb-1"> Author Name </label>
                    <input id="author-name" type="text" name="author-name" placeholder="Enter author name" class="text-sm outline-0 w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" autocomplete="off"/>
                </div>
                <div class="block w-full mb-3">
                    <label for="read-time" class="block text-sm font-medium text-gray-700 mb-1"> Read Time </label>
                    <input id="read-time" type="text" name="read-time" placeholder="Enter read time" class="text-sm outline-0 w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" autocomplete="off"/>
                </div>
                <div class="block w-full mb-3">
                    <label for="tags" class="block text-sm font-medium text-gray-700 mb-1"> Tags </label>
                    <input id="tags" type="text" hidden="hidden">
                    <vue3-tags-input :tags="tags" placeholder="Enter tags" autocomplete="off" @on-tags-changed="handleChangeTag"/>
                </div>
                <div class="block w-full mb-3">
                    <label for="date" class="block text-sm font-medium text-gray-700 mb-1"> Date </label>
                    <Flatpickr id="date" type="date" name="date" placeholder="Enter publish date" v-model="date" :config="config" class="text-sm outline-0 w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" autocomplete="off"/>
                </div>
                <div class="block w-full mb-3">
                    <label for="title" class="block text-sm font-medium text-gray-700 mb-1"> Title </label>
                    <input id="title" type="text" name="title" placeholder="Enter title" class="text-sm outline-0 w-full px-4 py-3 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" autocomplete="off"/>
                </div>
                <div class="block w-full mb-3">
                    <label for="short-description" class="block text-sm font-medium text-gray-700 mb-1"> Short Description </label>
                    <textarea id="short-description" name="short-description" placeholder="Enter short description" class="text-sm outline-0 w-full px-4 py-4 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" cols="30" rows="2"></textarea>
                </div>
                <div class="block w-full mb-3">
                    <label for="long-description" class="block text-sm font-medium text-gray-700 mb-1"> Long Description </label>
                    <textarea id="long-description" name="long-description" placeholder="Enter long description" class="text-sm outline-0 w-full px-4 py-4 border border-gray-200 bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" cols="30" rows="4"></textarea>
                </div>
                <div class="flex justify-end items-center gap-2 w-full">
                    <button type="button" class="text-sm rounded-xl duration-500 bg-gray-100 text-gray-800 hover:bg-gray-600 hover:text-white max-w-[120px] min-w-[120px] h-[45px] inline-flex justify-center items-center rounded-xl cursor-pointer font-medium" @click="closeManageModal()">
                        Cancel
                    </button>
                    <button type="submit" class="text-sm rounded-xl max-w-[120px] min-w-[120px] h-[45px] bg-blue-400 duration-500 hover:bg-blue-800 text-white font-medium">
                        Save
                    </button>
                </div>
            </form>
        </aside>
    </section>

</template>

<script>

import Flatpickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import Vue3TagsInput from 'vue3-tags-input';

export default {
    components: {
        Flatpickr, Vue3TagsInput
    },
    data() {
        return {
            isActiveManageModal: false,
            date: null,
            config: {
                enableTime: false,
                dateFormat: "d M Y",
                disableMobile: true,
            },
            tags: []
        }
    },
    mounted() {

    },
    methods: {

        openManageModal() {
            this.isActiveManageModal = true;
        },

        closeManageModal() {
            this.isActiveManageModal = false;
        },

        handleChangeTag(tags) {
            this.tags = tags;
        },

    }
}

</script>
