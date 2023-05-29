<script setup lang="ts">
useHead({
    title: 'University',
});
const identity_text = ref('Communication, Promotion, Environment');
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">For Universities</h1>
            <div class="flex flex-wrap">
                <div class="p-2 lg:py-3 lg:w-1/2">
                    <h2 class="text-lg text-chocolate-600 font-semibold my-2">What's in for your organisation:</h2>
                    <p class="text-base text-chocolate-700">
                        ❥ keep in touch with your students
                        <br />
                        ❥ promote your services and courses
                        <br />
                        ❥ create an attractive academic environment
                        <br />
                    </p>
                    <br />
                    <h2 class="text-lg text-chocolate-600 font-semibold my-2">..a little more detail:</h2>
                    <p class="text-base text-chocolate-700">
                        <b>Elevate Your Image:</b> <i>Our app offers unique and innovative features that enhance your
                            university's
                            reputation and make it stand out from the competition.</i>
                        <br />
                        <b>Attract More Students:</b> <i>With our app, you'll create a thriving community that fosters
                            positive
                            interactions between students, and creates a welcoming environment that new students can't
                            resist.</i>
                        <br />
                        <b>Improve Student Life:</b> <i>Our app provides a one-stop-shop for students to connect with each
                            other,
                            access vital resources, and stay up-to-date with campus events, clubs, and more.</i>
                        <br />
                        <b>Join the Movement:</b> <i>Don't get left behind! Adopt our app today and take your university to
                            the next
                            level of student engagement and satisfaction.</i>
                        <br />
                    </p>
                </div>
                <div class="pb-2 lg:flex-1">
                    <img src="/img/albummin.png" alt="Traveler model" class="h-[25rem] m-auto" />
                </div>
            </div>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Three services: {{ identity_text }}</h2>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-3 mt-4">
                <div class="grid-card group flex items-center justify-center" @mouseover=" identity_text = 'Communication'"
                    @mouseleave=" identity_text = '🎙️'">
                    <img class="grid-card-img  object-cover  m-auto" src="/img/art/u1.gif"
                        style="width: 350px; height: 200px;" alt="Communication" />
                    <p class="text-lg text-chocolate-600 font-semibold my-2">Communication Platform</p>
                </div>
                <div class="grid-card group bg-[#c9ecff] flex items-center justify-center"
                    @mouseover=" identity_text = 'Promotion'" @mouseleave=" identity_text = '📰'">
                    <img class="grid-card-img object-cover object-center m-auto" src="/img/art/u2min.gif"
                        style="width: 350px; height: 200px;" alt="Promotion" />
                    <p class="text-2xl text-chocolate-600 font-semibold my-2">Marketing Solutions</p>
                </div>
                <div class="grid-card group bg-[#edcaf4] flex items-center justify-center"
                    @mouseover=" identity_text = 'Engagement'" @mouseleave=" identity_text = '📃'">
                    <img class="grid-card-img  object-cover object-center m-auto" src="/img/art/u3min.gif"
                        style="width: 350px; height: 200px;" alt="Organisation" />
                    <p class="text-4xl text-chocolate-600 font-semibold my-2">Academic Engagement</p>
                </div>
            </div>
            <h2 class="text-xl text-chocolate-600 font-semibold my-4">Join us now!</h2>
            <Button class="w-full lg:w-52" name="Contact" icon="uiw:right" dest="/contact" icon-class="w-6 h-6" />
        </div>
    </FullScreenCard>
</template>
