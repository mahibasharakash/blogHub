<template>

    <header class="bg-white sticky top-0 z-50 duration-500" :class="{ 'shadow-lg' : isScrolled, 'shadow-none' : !isScrolled }">
        <div class="max-w-7xl mx-auto px-2 sm:px-0">
            <div class="flex justify-between items-center h-16">
                <router-link :to="{name:'index'}" class="cursor-pointer decoration-0 flex justify-start items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-yellow-500 me-2 h-8 w-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <h1 class="text-2xl font-bold text-black mb-0">BlogHub</h1>
                </router-link>
                <nav class="hidden lg:flex items-center space-x-4">
                    <router-link :to="{name:'index'}" :class="{ 'text-blue-600' : $route.name === 'index', 'text-black' : $route.name !== 'index' }" class="cursor-pointer decoration-0 hover:text-blue-600 font-medium duration-500">
                        Home
                    </router-link>
                    <router-link :to="{name:'articles'}" :class="{ 'text-blue-600' : $route.name === 'articles', 'text-black' : $route.name !== 'articles' }" class="cursor-pointer decoration-0 hover:text-blue-600 font-medium duration-500">
                        Articles
                    </router-link>
                    <router-link :to="{name:'authors'}" :class="{ 'text-blue-600' : $route.name === 'authors', 'text-black' : $route.name !== 'authors' }" class="cursor-pointer decoration-0 hover:text-blue-600 font-medium duration-500">
                        Authors
                    </router-link>
                </nav>
                <div class="flex items-center space-x-4">
                    <button class="p-2 text-gray-600 hover:text-blue-600 duration-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button class="lg:hidden p-2 text-gray-600 hover:text-blue-600 duration-500 cursor-pointer" @click.stop="openSidebar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                    <div class="relative">
                        <button class="p-2 text-gray-700 hover:text-blue-600 duration-500 cursor-pointer" @click.stop="openDropdown()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>
                        <div class="absolute top-auto end-0 min-w-[160px] mt-3 rounded-xl duration-500 overflow-hidden" :class="{ 'max-h-[450px]' : isDropdownActive, 'max-h-[0px]' : !isDropdownActive }" @click.stop>
                            <div class="p-2 border border-gray-200 bg-white rounded-xl">
                                <router-link :to="{name:'login'}" class="block py-2 px-3 w-full bg-transparent duration-500 hover:bg-gray-200 rounded-lg" @click="closeDropdown()">
                                    Sign In
                                </router-link>
                                <router-link :to="{name:'registration'}" class="block py-2 px-3 w-full bg-transparent duration-500 hover:bg-gray-200 rounded-lg" @click="closeDropdown()">
                                    Sign Up
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-white py-4 shadow-xl fixed top-0 bottom-0 flex justify-center items-center flex-col w-full sm:max-w-[320px] sm:min-w-[320px] gap-4 duration-500" :class="{ 'end-[0px]' : isSidebarActive, '-end-[110%] sm:-end-[330px]' : !isSidebarActive }" @click.stop>
                <div class="absolute top-0 end-0 p-5">
                    <button type="button" class="bg-transparent duration-500 hover:bg-gray-200 cursor-pointer rounded-xl outline-0 max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] inline-flex justify-center items-center" @click="closeSidebar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="max-w-[20px] min-w-[20px] max-h-[20px] min-h-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <router-link :to="{name:'index'}" class="cursor-pointer decoration-0 text-black hover:text-blue-600 font-medium duration-500">
                    Home
                </router-link>
                <router-link :to="{name:'articles'}" class="cursor-pointer decoration-0 text-black hover:text-blue-600 font-medium duration-500">
                    Articles
                </router-link>
                <router-link :to="{name:'authors'}" class="cursor-pointer decoration-0 text-black hover:text-blue-600 font-medium duration-500">
                    Authors
                </router-link>
            </div>
        </div>
    </header>

</template>

<script>

export default {
    data() {
        return {
            isScrolled: false,
            isSidebarActive: false,
            isDropdownActive: false,
            currentSection: 'home',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', this.handleSidebarClose);
        window.addEventListener('click', this.handleDropdownClose);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', this.handleSidebarClose);
        window.removeEventListener('click', this.handleDropdownClose);
    },
    methods: {
        openSidebar() {
            this.isSidebarActive = true;
        },
        closeSidebar() {
            this.isSidebarActive = false;
        },
        handleSidebarClose() {
            if (this.isSidebarActive) {
                this.isSidebarActive = false;
            }
        },
        openDropdown() {
            this.isDropdownActive = !this.isDropdownActive;
        },
        closeDropdown() {
            this.isDropdownActive = false;
        },
        handleDropdownClose() {
            if (this.isDropdownActive) {
                this.isDropdownActive = false;
            }
        },
        scrollToSection(id) {
            if (this.$route.name !== 'index') {
                this.$router.push({ name: 'index' }).then(() => {
                    this.scrollToElement(id);
                });
            } else {
                this.scrollToElement(id);
            }
            this.closeSidebar();
        },
        scrollToElement(id) {
            this.$nextTick(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                    this.currentSection = id;
                }
            });
        },
        handleScroll() {
            this.isScrolled = window.scrollY > 150;

            const sections = [
                'home',
                'featured_articles',
                'about_us',
                'contact_us',
                'latest_articles',
                'featured_authors'
            ];

            for (let id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        this.currentSection = id;
                        break;
                    }
                }
            }
        },
    }
}

</script>
