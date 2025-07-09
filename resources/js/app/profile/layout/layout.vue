<template>

    <section class="py-16 w-full">
        <div class="max-w-7xl w-full mx-auto flex items-start">
            <aside class="border border-gray-200 bg-white block w-full min-w-[360px]">
                <div class="flex justify-center items-center pt-10 pb-5">
                    <label for="upload-file" class="min-w-[200px] max-w-[200px] min-h-[200px] max-w-[200px] cursor-pointer rounded-full bg-gray-50 border border-dashed border-blue-400 inline-flex justify-center items-center text-[14px]">
                        <input id="upload-file" type="file" name="upload-file" hidden="hidden" />
                        <span> Upload Image </span>
                    </label>
                </div>
                <div class="pb-4 w-full block">
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Designation: </div>
                        <div class="font-medium"> Web Developer </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Name: </div>
                        <div class="font-medium"> Mahi Bashar Akash </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Skills: </div>
                        <div class="font-medium"> HTML, CSS, Javascript, PHP, MySQL </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> UpperSkills: </div>
                        <div class="font-medium"> Laravel, Vue, React, Angular </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Work Duration: </div>
                        <div class="font-medium"> 6 Hours </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Work Experience: </div>
                        <div class="font-medium"> 3.7 Years </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Official Gmail: </div>
                        <div class="font-medium"> mahibashar@codevioso.com </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Official Phone: </div>
                        <div class="font-medium"> +880 01400125289 </div>
                    </div>
                    <div class="text-start px-3 pb-2 text-[13px]">
                        <div class="font-bold"> Official Location: </div>
                        <div class="font-medium"> Jessore Sadar, Jessore, Bangladesh </div>
                    </div>
                </div>
            </aside>
            <main class="ps-3 min-w-[calc(100%-360px)]">
                <RouterView></RouterView>
            </main>
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
