<template>

    <header class="bg-white sticky top-0 z-50 duration-500" :class="{ 'shadow-lg' : isScrolled, 'shadow-none' : !isScrolled }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-yellow-500 me-2 h-8 w-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    <h1 class="text-2xl font-bold text-black mb-0">BlogHub</h1>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex items-center space-x-4">
                    <a @click="scrollToSection('home')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'home' ? 'text-blue-600' : 'text-black']">
                        Home
                    </a>
                    <a @click="scrollToSection('featured_articles')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'featured_articles' ? 'text-blue-600' : 'text-black']">
                        Featured Articles
                    </a>
                    <a @click="scrollToSection('about_us')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'about_us' ? 'text-blue-600' : 'text-black']">
                        About Us
                    </a>
                    <a @click="scrollToSection('contact_us')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'contact_us' ? 'text-blue-600' : 'text-black']">
                        Contact Us
                    </a>
                    <a @click="scrollToSection('latest_articles')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'latest_articles' ? 'text-blue-600' : 'text-black']">
                        Latest Articles
                    </a>
                    <a @click="scrollToSection('featured_authors')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'featured_authors' ? 'text-blue-600' : 'text-black']">
                        Featured Authors
                    </a>
                </nav>

                <!-- Search and Menu -->
                <div class="flex items-center space-x-4">
                    <button class="p-2 text-gray-600 hover:text-blue-600 duration-500 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 hover:text-blue-600 duration-500 cursor-pointer" @click.stop="openSidebar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div class="bg-white py-4 fixed top-0 bottom-0 flex justify-center items-center flex-col w-full sm:max-w-[320px] sm:min-w-[320px] gap-4 duration-500" :class="{ 'end-[0px]' : isSidebarActive, '-end-[110%] sm:-end-[330px]' : !isSidebarActive }" @click.stop>
                <div class="absolute top-0 end-0 p-5">
                    <button type="button" class="bg-transparent duration-500 hover:bg-gray-200 cursor-pointer rounded-xl outline-0 max-w-[45px] min-w-[45px] max-h-[45px] min-h-[45px] inline-flex justify-center items-center" @click="closeSidebar()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="max-w-[20px] min-w-[20px] max-h-[20px] min-h-[20px]">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <a @click="closeSidebar();scrollToSection('home')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'home' ? 'text-blue-600' : 'text-black']">
                    Home
                </a>
                <a @click="closeSidebar();scrollToSection('featured_articles')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'featured_articles' ? 'text-blue-600' : 'text-black']">
                    Featured Articles
                </a>
                <a @click="closeSidebar();scrollToSection('about_us')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'about_us' ? 'text-blue-600' : 'text-black']">
                    About Us
                </a>
                <a @click="closeSidebar();scrollToSection('contact_us')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'contact_us' ? 'text-blue-600' : 'text-black']">
                    Contact Us
                </a>
                <a @click="closeSidebar();scrollToSection('latest_articles')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'latest_articles' ? 'text-blue-600' : 'text-black']">
                    Latest Articles
                </a>
                <a @click="closeSidebar();scrollToSection('featured_authors')" :class="['cursor-pointer hover:text-blue-600 font-medium duration-500', currentSection === 'featured_authors' ? 'text-blue-600' : 'text-black']">
                    Featured Authors
                </a>
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
            currentSection: 'home',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('click', (event) => this.handleSidebarClose(event));
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('click', (event) => this.handleSidebarClose(event));
    },
    methods: {

        openSidebar() {
            this.isSidebarActive = true;
        },

        closeSidebar() {
            this.isSidebarActive = false;
        },

        handleSidebarClose(event) {
            if (this.isSidebarActive) {
                this.isSidebarActive = false;
            }
        },

        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                this.currentSection = id;
            }
            this.closeSidebar();
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
