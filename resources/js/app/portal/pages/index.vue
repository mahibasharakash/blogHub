<template>

    <!-- Hero section -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right" data-aos-delay="300">
                    <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Discover Stories That
                        <span class="text-blue-600">Inspire</span>
                    </h2>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">
                        Join thousands of readers exploring ideas, insights, and inspiration through our carefully curated collection of articles from expert writers and thought leaders.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <button class="cursor-pointer bg-blue-500 text-white min-w-[160px] py-3 rounded-lg font-medium hover:bg-blue-800 duration-500">
                            Start Reading
                        </button>
                        <button class="cursor-pointer border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white min-w-[160px] py-3 rounded-lg font-medium duration-500">
                            Subscribe
                        </button>
                    </div>
                    <div ref="counterSection" class="grid grid-cols-2 sm:grid-cols-3 mt-10">
                        <div class="text-start py-3">
                            <div class="text-gray-600 text-4xl mb-2 font-medium">
                                 + {{counters.monthly_readers}}
                            </div>
                            <div class="text-gray-900 font-normal">
                                Monthly Readers
                            </div>
                        </div>
                        <div class="text-start py-3">
                            <div class="text-gray-600 text-4xl mb-2 font-medium">
                                 + {{counters.articles_published}}
                            </div>
                            <div class="text-gray-900 font-normal">
                                Articles Published
                            </div>
                        </div>
                        <div class="text-start py-3">
                            <div class="text-gray-600 text-4xl mb-2 font-medium">
                                + {{counters.expert_authors}}
                            </div>
                            <div class="text-gray-900 font-normal">
                                Expert Authors
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative" data-aos="fade-left" data-aos-delay="300">
                    <img
                        src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="Hero"
                        class="rounded-2xl shadow-2xl w-full"
                    />
                    <div class="absolute -bottom-6 start-6 sm:-start-6 bg-white p-6 rounded-xl shadow-lg animate-slideDown">
                        <div class="flex items-center space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="h-8 w-8 stroke-green-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                            </svg>
                            <div>
                                <p class="font-semibold text-gray-900">50K+</p>
                                <p class="text-sm text-gray-600">Monthly Readers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured article -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-down" data-aos-delay="300">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Our editor's pick for this week - a must-read article that's generating buzz in the community
                </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="300" class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="grid lg:grid-cols-2 gap-0">
                    <div class="relative h-64 lg:h-auto">
                        <img
                            src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="The Future of Web Development"
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute top-4 start-4">
                            <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-sm font-medium">
                                Technology
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <div class="flex items-center text-sm text-gray-500 flex-wrap gap-3 mb-3">
                            <span class="inline-flex items-center justify-start">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="me-4">Sarah Johnson</span>
                            </span>
                            <span class="inline-flex items-center justify-start">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="me-4">Dec 15, 2024</span>
                            </span>
                            <span class="inline-flex items-center justify-start">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>8 min read</span>
                            </span>
                        </div>
                        <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            The Future of Web Development: Trends to Watch in 2025
                        </h3>
                        <p class="text-gray-600 mb-6 leading-relaxed">
                            Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks that are revolutionizing how we build digital experiences.
                        </p>
                        <div class="flex items-center justify-between">
                            <button class="bg-blue-500 text-[14px] duration-500 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium duration-500 flex items-center cursor-pointer">
                                Read More
                                <span class="ms-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" class="stroke-white h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                            <div class="flex items-center space-x-4 text-gray-500">
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <span class="text-sm">234</span>
                                </div>
                                <div class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4 me-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                    </svg>
                                    <span class="text-sm">45</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About us -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-16 bg-gray-50 mb-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-down" data-aos-delay="300">
                    <h2 class="text-3xl font-bold text-gray-900 mb-6">About BlogHub</h2>
                    <p class="text-gray-600 mb-6 leading-relaxed" data-aos="fade-down" data-aos-delay="300">
                        BlogHub is more than just a blog platform – we're a community of passionate writers, thought leaders, and curious minds who believe in the power of sharing knowledge and inspiring others.
                    </p>
                    <p class="text-gray-600 mb-6 leading-relaxed" data-aos="fade-down" data-aos-delay="300">
                        Founded in 2020, we've grown to become one of the most trusted sources for high-quality content across technology, lifestyle, business, health, and more. Our mission is to democratize knowledge and make expert insights accessible to everyone.
                    </p>
                    <div class="grid grid-cols-2 gap-6">
                        <div data-aos="fade-right" data-aos-delay="300">
                            <h3 class="font-semibold text-gray-900 mb-2">Our Mission</h3>
                            <p class="text-sm text-gray-600">To inspire and educate through quality content that makes a difference in people's lives.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-delay="300">
                            <h3 class="font-semibold text-gray-900 mb-2">Our Vision</h3>
                            <p class="text-sm text-gray-600">To be the world's most trusted platform for knowledge sharing and community building.</p>
                        </div>
                    </div>
                </div>
                <div class="relative" data-aos="fade-left" data-aos-delay="300">
                    <img
                        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="About BlogHub"
                        class="rounded-2xl shadow-lg"
                    />
                    <div class="absolute -bottom-6 end-3 sm:-end-6 bg-white p-4 rounded-xl shadow-lg animate-slideDown">
                        <div class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-yellow-500 h-6 w-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <div>
                                <p class="font-semibold text-gray-900 text-[14px]">Award Winning</p>
                                <p class="text-gray-600 text-[12px]">Best Blog Platform 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact us -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up" data-aos-delay="300">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">
                    Have a question, suggestion, or want to collaborate? We'd love to hear from you.
                    Reach out and let's start a conversation.
                </p>
            </div>
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-gray-50 rounded-2xl p-3 sm:p-8" data-aos="fade-up" data-aos-delay="300">
                    <h3 class="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                    <form class="space-y-6">
                        <div class="grid md:grid-cols-2 gap-6">
                            <div data-aos="fade-down" data-aos-delay="300">
                                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input type="text" id="name" required class="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" placeholder="Your full name"/>
                            </div>
                            <div data-aos="fade-down" data-aos-delay="300">
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" required class="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" placeholder="your@email.com"/>
                            </div>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="300">
                            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input type="text" id="subject" required class="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" placeholder="What's this about?"/>
                        </div>
                        <div data-aos="fade-down" data-aos-delay="300">
                            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea id="message" rows="5" class="outline-0 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 duration-500" placeholder="Tell us more about your inquiry..."></textarea>
                        </div>
                        <button type="submit" class="cursor-pointer w-full bg-blue-400 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 outline-0 duration-500">
                            Send Message
                        </button>
                    </form>
                </div>
                <!-- Contact Information -->
                <div class="space-y-8">
                    <div data-aos="fade-up" data-aos-delay="300">
                        <h3 class="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                        <div class="space-y-6">
                            <div class="flex items-start" data-aos="fade-right" data-aos-delay="300">
                                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-900">Email</h4>
                                    <p class="text-gray-600">contact@bloghub.com</p>
                                    <p class="text-gray-600">support@bloghub.com</p>
                                </div>
                            </div>
                            <div class="flex items-start" data-aos="fade-right" data-aos-delay="300">
                                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-900">Phone</h4>
                                    <p class="text-gray-600">+1 (555) 123-4567</p>
                                    <p class="text-gray-600">+1 (555) 987-6543</p>
                                </div>
                            </div>
                            <div class="flex items-start" data-aos="fade-right" data-aos-delay="300">
                                <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="text-lg font-medium text-gray-900">Address</h4>
                                    <p class="text-gray-600">123 Blog Street</p>
                                    <p class="text-gray-600">Content City, CC 12345</p>
                                    <p class="text-gray-600">United States</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Office Hours -->
                    <div class="bg-gray-50 rounded-2xl p-3 sm:p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Office Hours</h4>
                        <div class="space-y-2 text-gray-600">
                            <div class="flex justify-between" data-aos="fade-left" data-aos-delay="300">
                                <span>Monday - Friday</span>
                                <span>9:00 AM - 6:00 PM</span>
                            </div>
                            <div class="flex justify-between" data-aos="fade-left" data-aos-delay="300">
                                <span>Saturday</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </div>
                            <div class="flex justify-between" data-aos="fade-left" data-aos-delay="300">
                                <span>Sunday</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Links -->
                    <div class="bg-blue-50 rounded-2xl p-3 sm:p-6">
                        <h4 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
                        <div class="w-full flex flex-wrap gap-3">
                            <div data-aos="fade-left" data-aos-delay="200">
                                <a href="javascript:void(0)" class="inline-block text-gray-800 hover:text-blue-700 duration-500">
                                    FAQ
                                </a>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="400">
                                <a href="javascript:void(0)" class="inline-block text-gray-800 hover:text-blue-700 duration-500">
                                    Support Center
                                </a>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="600">
                                <a href="javascript:void(0)" class="inline-block text-gray-800 hover:text-blue-700 duration-500">
                                    Community Guidelines
                                </a>
                            </div>
                            <div data-aos="fade-left" data-aos-delay="800">
                                <a href="javascript:void(0)" class="inline-block text-gray-800 hover:text-blue-700 duration-500">
                                    Press Kit
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Latest articles card -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center" data-aos="fade-up" data-aos-delay="300">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Stay up to date with our newest content and insights from industry experts
                </p>
            </div>
            <div data-aos="fade-up" class="py-8 mb-4">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-wrap gap-3 justify-start sm:justify-center">
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-blue-500 text-white" data-category="all">
                                All Articles
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="technology">
                                Technology (24)
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="productivity">
                                Productivity (18)
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="lifestyle">
                                Lifestyle (32)
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="design">
                                Design (15)
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="health">
                                Health (21)
                            </button>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="300">
                            <button class="duration-500 cursor-pointer px-4 sm:px-8 text-[12px] sm:text-[14px] py-2 rounded-xl font-medium bg-gray-300 text-gray-900 hover:bg-blue-500 hover:text-white" data-category="finance">
                                Finance (12)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="articles-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                <!-- Article 1 -->
                <article data-aos="fade-right" data-aos-delay="200" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="productivity">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Remote Work Productivity" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-green-100 text-green-800 px-4 py-2 rounded-md text-xs font-medium">
                                Productivity
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
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
                            <span class="inline-flex justify-start items-center">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>12 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>

                <!-- Article 2 -->
                <article data-aos="fade-right" data-aos-delay="400" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="lifestyle">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Sustainable Living" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-purple-100 text-purple-800 px-4 py-2 rounded-md text-xs font-medium">
                                Lifestyle
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Emma Rodriguez</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 10, 2024</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>6 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>

                <!-- Article 3 -->
                <article data-aos="fade-right" data-aos-delay="600" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="design">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Minimalist Design" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-pink-100 text-pink-800 px-4 py-2 rounded-md text-xs font-medium">
                                Design
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">David Kim</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 8, 2024</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>10 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>

                <!-- Article 4 -->
                <article data-aos="fade-right" data-aos-delay="800" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="health">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1562058/pexels-photo-1562058.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthy Habits" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-orange-100 text-orange-800 px-4 py-2 rounded-md text-xs font-medium">
                                Health
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Lisa Thompson</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 5, 2024</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>9 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>

                <!-- Article 5 -->
                <article data-aos="fade-right" data-aos-delay="1000" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="finance">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Investment Strategies" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md text-xs font-medium">
                                Finance
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Robert Martinez</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 3, 2024</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>15 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>

                <!-- Article 6 -->
                <article data-aos="fade-right" data-aos-delay="1200" class="article-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow group" data-category="technology">
                    <div class="relative h-48 overflow-hidden">
                        <img src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Technology" class="w-full h-full object-cover transition-transform duration-300"/>
                        <div class="absolute top-3 start-3">
                            <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-md text-xs font-medium">
                                Technology
                            </span>
                        </div>
                    </div>
                    <div class="p-3 sm:p-6">
                        <div class="flex items-center text-xs text-gray-500 mb-3 gap-3 flex-wrap">
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </span>
                                <span class="mr-3">Alex Chen</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                                    </svg>
                                </span>
                                <span class="mr-3">Dec 1, 2024</span>
                            </span>
                            <span class="inline-flex justify-start items-center flex-wrap">
                                <span class="me-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" class="stroke-gray-500 h-4 w-4">
                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                </span>
                                <span>11 min read</span>
                            </span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 duration-500">
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
                </article>
            </div>
            <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="300">
                <button class="cursor-pointer bg-blue-500 text-white px-10 py-3 text-[14px] rounded-lg font-semibold hover:bg-blue-700 duration-500">
                    Load More Articles
                </button>
            </div>
        </div>
    </section>

    <!-- featured Authors -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Authors</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">
                    Meet our expert writers and thought leaders who bring you the best content
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Author 1 -->
                <div data-aos="fade-down" data-aos-delay="200" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
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

                <!-- Author 2 -->
                <div data-aos="fade-down" data-aos-delay="400" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
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

                <!-- Author 3 -->
                <div data-aos="fade-down" data-aos-delay="600" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
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

                <!-- Author 4 -->
                <div data-aos="fade-down" data-aos-delay="800" class="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
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

    <!-- Newsletter -->
    <section data-aos="fade-up" data-aos-delay="300" class="scroll-my-[100px] py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold text-white mb-4">
                Never Miss a Story
            </h2>
            <p class="text-blue-100 text-lg mb-8">
                Subscribe to our newsletter and get the latest articles delivered straight to your inbox
            </p>
            <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" required autocomplete="new-email"
                    class="flex-1 px-4 py-3 bg-white rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"/>
                <button class="cursor-pointer bg-white hover:bg-blue-800 hover:text-white text-blue-600 px-10 py-3 rounded-lg font-medium duration-500">
                    Subscribe
                </button>
            </form>
        </div>
    </section>

</template>

<script>

import AOS from "aos";
import "aos/dist/aos.css";

export default {
    data() {
        return {
            tab: 1,
            counters: {
                monthly_readers: 0,
                articles_published: 0,
                expert_authors: 0,
            },
            targetValues: {
                monthly_readers: 1200,
                articles_published:  60,
                expert_authors: 100,
            },
            timers: {},
        }
    },
    mounted() {
        AOS.init();
        this.observeSection();
    },
    methods: {

        observeSection() {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        this.startCounters();
                    } else {
                        this.resetCounters();
                    }
                },
                { threshold: 0.3 }
            );
            observer.observe(this.$refs.counterSection);
        },

        startCounters() {
            Object.keys(this.counters).forEach((key) => {
                if (this.timers[key]) {
                    clearInterval(this.timers[key]);
                }
                const target = this.targetValues[key];
                let current = 0;
                const duration = 2000;
                const increment = 20;
                const steps = Math.ceil(duration / increment);
                const stepAmount = Math.ceil(target / steps);
                this.timers[key] = setInterval(() => {
                    current += stepAmount;
                    if (current >= target) {
                        current = target;
                        clearInterval(this.timers[key]);
                    }
                    this.counters[key] = current.toLocaleString();
                }, increment);
            });
        },

        resetCounters() {
            Object.keys(this.counters).forEach((key) => {
                this.counters[key] = 0;
                if (this.timers[key]) {
                    clearInterval(this.timers[key]);
                }
            });
        },

    }
}

</script>
