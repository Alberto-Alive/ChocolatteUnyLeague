<script setup lang="ts"></script>

<template>
    <VitarView />
    <div>
        <header class="pt-4 px-4 lg:px-12 font-lexend">
            <nav class="mx-auto p-4 py-3 h-14 bg-[#f2e6e8] text-white flex justify-between shadow-lg rounded-2xl z-10">
                <div class="w-fit">
                    <NuxtLink to="/" class="navbar__link" aria-label="Choco Logo">
                        <img src="/img/logotxt.png" alt="Logo" class="pt-1 w-36 m-auto h-auto" width="0" height="0" />
                    </NuxtLink>
                </div>
                <div class="bg-white h-8 text-chocolate-900 rounded-lg px-4 transition-all">
                    <ul class="flex gap-4 pt-[0.15rem]">
                        <li class="navbar__list">
                            <NuxtLink to="/" class="navbar__link" aria-label="Home page"
                                ><Icon name="material-symbols:home"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/students" class="navbar__link" aria-label="Students page"
                                ><Icon name="mdi:account-school"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/groups" class="navbar__link" aria-label="Groups page"
                                ><Icon name="material-symbols:groups"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/university" class="navbar__link" aria-label="University page"
                                ><Icon name="mdi:school"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/downloads" class="navbar__link" aria-label="Downloads page"
                                ><Icon name="material-symbols:download"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list">
                            <NuxtLink to="/contact" class="navbar__link" aria-label="Contact page"
                                ><Icon name="bxs:envelope"
                            /></NuxtLink>
                        </li>
                        <li class="navbar__list hidden md:block">
                            <NuxtLink to="/schedule" class="navbar__link" aria-label="Schedule page"
                                ><Icon name="material-symbols:auto-schedule-rounded"
                            /></NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
</template>
<style></style>
