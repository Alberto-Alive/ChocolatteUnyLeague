<script setup lang="ts">
useHead({
    title: 'Universities',
});
const identity_text = ref('Memories, Parties, Dates');
</script>

<template>
    <FullScreenCard class="h-auto">
        <div class="p-2 lg:py-9">
            <h1 class="text-3xl text-chocolate-800 font-bold">For Universities</h1>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">What's in for you:</h2>
            <p class="text-base text-chocolate-700">
                ❥ keep in touch with your students 
                <br />
                ❥ promote your services and courses
                <br />
                ❥ create an attractive academic environment
                <br />
            </p>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Terms of Service</h2>
            <ul class="list-disc text-chocolate-700 mx-5">
                <li>Free advertisement and communication with your own students</li>
                <li>Paid advertisement to students not studying at your university</li>
                <li>The fees per student cover the server costs to protect their photo albums</li>
                <li>There are no charges or fees incurred by students (fees are only charged to universities)</li>
                <li>There should be no other type of users than those with the status of students enrolled at your university</li>
                <li>We strive to keep students safe and provide them with quick-links for menthal-health or sexual-health related issues</li>
                <li>User data is not sold to 3rd parties, yet minimal information (like degree, interests) may be used for targetted advertising </li>
                <li>Graduating users receive an album with their memories, their accounts are disabled and universities are no longer charged for those users</li>
            </ul>
            <h2 class="text-lg text-chocolate-600 font-semibold my-2">Three services:  {{ identity_text }}</h2>
            <div class="grid grid-cols-1 gap-2 md:grid-cols-3 mt-4">
                <div class="grid-card group flex items-center justify-center"  @mouseover=" identity_text = 'Memories'" @mouseleave= " identity_text = '📷'">
                    <img class="grid-card-img  object-cover  m-auto" src="/img/art/selfie.gif" style="width: 350px; height: 200px;" alt="Memories" />
                    <p class="text-lg text-chocolate-600 font-semibold my-2">Memories</p>
                </div>
                <div class="grid-card group bg-[#c9ecff] flex items-center justify-center" @mouseover=" identity_text = 'Parties'" @mouseleave= " identity_text = '🎉'">
                    <img class="grid-card-img object-cover object-center m-auto" src="/img/art/party.gif" style="width: 350px; height: 200px;" alt="Parties" />
                <p class="text-2xl text-chocolate-600 font-semibold my-2">Parties</p>
                </div>
                <div class="grid-card group bg-[#edcaf4] flex items-center justify-center" @mouseover=" identity_text = 'Dates'" @mouseleave= " identity_text = '💓'">
                    <img class="grid-card-img  object-cover object-center m-auto" src="/img/art/love.gif" style="width: 350px; height: 200px;" alt="Dates" />
                    <p class="text-4xl text-chocolate-600 font-semibold my-2">Dates</p>
                </div>
            </div>
            <h2 class="text-xl text-chocolate-600 font-semibold my-4">Make a deal now!</h2>
            <Button class="w-full lg:w-52" name="Sign Up" icon="uiw:pay" dest="/contact" />
        </div>
    </FullScreenCard>
</template>

<style scoped></style>
