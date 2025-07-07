<template>

    <section class="w-full max-w-7xl mx-auto min-h-[250px] font-medium max-h-[250px] bg-cover object-cover flex justify-center items-center flex-col relative before:absolute before:inset-0 before:w-full before:h-full before:bg-black/45" :style="{ backgroundImage: 'url(/images/breadcrumb.jpg)' }">
        <div class="relative flex justify-center items-center flex-col">
            <div class="text-3xl text-center mb-4 text-white"> Registration </div>
            <div class="flex justify-center items-center gap-3">
                <router-link :to="{name:'index'}" class="decoration-0 text-white">
                    Home
                </router-link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-white w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
                <router-link :to="{name:'registration'}" class="decoration-0 text-white">
                    Registration
                </router-link>
            </div>
        </div>
    </section>

    <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="w-full flex justify-center">
                <form class="max-w-[470px] w-full border border-gray-200 p-10">
                    <div class="mb-3 block w-full text-[23px]"> Sign Up </div>
                    <div class="mb-10 block w-full"> Enter your info to registration </div>
                    <div class="mb-3 w-full block">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2"> Name </label>
                        <input id="name" type="text" name="name" class="outline-0 w-full px-4 py-3 border border-gray-200 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2"> Email </label>
                        <input id="email" type="email" name="email" class="outline-0 w-full px-4 py-3 border border-gray-200 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-2"> Password </label>
                        <input id="password" type="password" name="password" class="outline-0 w-full px-4 py-3 border border-gray-200 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="mb-3 w-full block">
                        <label for="confirm_password" class="block text-sm font-medium text-gray-700 mb-2"> Confirm Password </label>
                        <input id="confirm_password" type="password" name="confirm_password" class="outline-0 w-full px-4 py-3 border border-gray-200 bg-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" required autocomplete="off" />
                    </div>
                    <div class="mb-5 w-full block">
                        <button type="submit" class="cursor-pointer outline-0 border-0 bg-blue-400 duration-500 hover:bg-blue-700 text-white min-w-[120px] py-3 rounded-lg ">
                            Login
                        </button>
                    </div>
                    <div class="text-center">
                        Already have an account? <br> <router-link :to="{name:'login'}" class="decoration-0 duration-500 text-blue-400 hover:text-blue-800"> Login </router-link>
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>

<script>

export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}

</script>
