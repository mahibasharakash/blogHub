<template>

    <section
        class="w-full max-w-7xl mx-auto min-h-[250px] font-medium max-h-[250px] bg-cover object-cover flex justify-center items-center flex-col relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/45"
        :style="{ backgroundImage: 'url(/images/breadcrumb.jpg)' }">
        <div class="relative flex justify-center items-center flex-col">
            <div class="text-3xl text-center mb-4 text-white"> Article Details</div>
            <div class="flex justify-center items-center gap-3">
                <router-link :to="{name:'index'}" class="decoration-0 text-white">
                    Home
                </router-link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-white w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
                <router-link :to="{name:'articles'}" class="decoration-0 text-white">
                    Articles
                </router-link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-white w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                    </svg>
                </div>
                <router-link :to="{name:'singleArticle',params:{id:1}}" class="decoration-0 text-white">
                    Article Details
                </router-link>
            </div>
        </div>
    </section>

    <section class="py-16">
        <article class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <h3 class="text-3xl font-bold text-gray-900 leading-tight max-w-[550px] w-full mx-auto text-center mb-10 duration-500">
                Mastering Remote Work: A Complete Guide to Productivity
            </h3>

            <div class="relative h-100 overflow-hidden rounded-xl group">
                <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Remote Work Productivity" class="w-full h-full object-cover duration-300 scale-100 group-hover:scale-125"/>
                <div class="absolute top-3 start-3">
                    <span class="bg-green-100 text-green-800 px-4 py-2 rounded-md text-xs font-medium pointer-events-none"> Productivity </span>
                </div>
            </div>

            <div class="flex items-center text-black mb-3 gap-3 mt-10 flex-wrap justify-between">
                <span class="inline-flex justify-start items-center">
                    <span class="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-black h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                        </svg>
                    </span>
                    <span class="mr-3 text-md"> Michael Chen </span>
                </span>
                <span class="inline-flex justify-start items-center">
                    <span class="me-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-black h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                        </svg>
                    </span>
                    <span class="mr-3 text-md"> Dec 12, 2024 </span>
                </span>
            </div>

            <div class="text-[15px] text-gray-700 mt-10">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci beatae, consectetur corporis deleniti
                distinctio dolorem doloribus dolorum, earum eius exercitationem fugiat in magni maiores minima odio

                <br><br>

                odit, officia possimus quas quidem quisquam quod ratione reiciendis repellat reprehenderit repudiandae
                sed similique sint sit suscipit veritatis vitae voluptatem voluptatibus voluptatum! Ab aliquid
                blanditiis cum cupiditate, delectus dignissimos doloremque doloribus eos eum impedit iure magnam natus,
                nemo obcaecati officia optio porro quam quasi quibusdam quod quos sint velit voluptate? Asperiores

                <br><br>

                <div class="max-w-[750px] mx-auto">
                    <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Remote Work Productivity" class="w-full min-h-[350px] max-h-[350px] object-cover"/>
                </div>

                <br><br>

                vel voluptas! A labore nihil odio porro. Asperiores cumque delectus deserunt possimus quaerat qui
                sapiente, ut! Ab accusamus animi asperiores consectetur consequatur, cumque debitis deserunt dignissimos
                ducimus et, exercitationem explicabo hic illum labore, laboriosam laborum minima minus modi molestias
                nemo provident quasi quibusdam quisquam quod repudiandae sapiente similique soluta ullam vel vitae!
                Beatae cupiditate provident ullam vero! Ab consequatur deleniti dolorem doloribus ducimus eius enim
                fugit in itaque molestiae natus, nesciunt, optio quod quos sed temporibus totam voluptate, voluptatum?

                <br><br>

                <div class="py-10 px-4 bg-gray-200 border-s-8 border-s-yellow-400">
                    <q>
                        officiis, porro tempora totam. Amet animi architecto aspernatur, commodi consequuntur corporis
                        cupiditate, deserunt dolorum eius eveniet ex expedita fuga hic, ipsa ipsam iste laborum libero magni
                        nisi nobis nostrum pariatur perspiciatis quas quidem quod rem repellendus sapiente sequi similique sint
                    </q>
                </div>

                <br><br>

                distinctio, laborum modi quia reprehenderit saepe sequi! Eos necessitatibus, pariatur! Iure minima
                pariatur quibusdam quos vel! Accusamus ad animi aperiam aut consequatur cupiditate distinctio, dolores
                doloribus eligendi, eos et eveniet exercitationem expedita, facilis inventore iure magnam magni maiores
                maxime nisi nostrum odit officia optio quam qui repellendus temporibus velit! Aliquam, consectetur culpa
                deleniti dignissimos dolor fuga illum quas quod ratione rem repellat tempora tempore vel? Asperiores
                consequatur cumque ducimus ea earum eligendi eos, esse est eveniet explicabo facilis fuga illo in ipsa
                ipsum itaque laborum laudantium nisi non optio porro quod rem saepe sint tempore! Animi at consectetur
                eum exercitationem in iure nesciunt nulla numquam, omnis voluptatem. Et, placeat.

            </div>

            <div class="flex items-center justify-between mt-10">
                <div class="flex flex-wrap gap-1">
                    <span class="bg-gray-200 text-gray-900 px-3 py-1 rounded text-sm">Remote Work</span>
                    <span class="bg-gray-200 text-gray-900 px-3 py-1 rounded text-sm">Productivity</span>
                </div>
                <div class="flex items-center space-x-3 text-gray-500">
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <span class="text-sm ms-3"> 189 </span>
                    </div>
                    <div class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                        </svg>
                        <span class="text-sm ms-3"> 32 </span>
                    </div>
                    <button class="text-gray-400 hover:text-blue-600 duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="w-full bg-gray-50 p-7">
                <form class="w-full flex flex-wrap">
                    <div class="w-1/2 p-2">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1"> Name </label>
                        <input id="name" type="text" name="name" class="text-sm outline-0 w-full px-4 py-3 border border-white bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-1/2 p-2">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
                        <input id="email" type="email" name="email" class="text-sm outline-0 w-full px-4 py-3 border border-white bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="w-full p-2">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1"> Message </label>
                        <textarea id="message" name="message" cols="30" rows="10" class="text-sm outline-0 w-full px-3 py-4 border border-white bg-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off"></textarea>
                    </div>
                    <div class="w-full p-2">
                        <button type="submit" class="text-sm cursor-pointer w-full bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 outline-0 duration-500">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

        </article>
    </section>

</template>

<script>

export default {
    data() {
        return {}
    },
    mounted() {

    },
    methods: {}
}

</script>
