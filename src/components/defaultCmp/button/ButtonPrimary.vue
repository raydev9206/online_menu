<script setup lang="ts">
import ButtonBase from './ButtonBase.vue'
</script>
<template>
    <ButtonBase class="shadow text-white">
        <template v-for="(index, name) in $slots" v-slot:[name]="data">
            <slot :name="name" v-bind="data" />
        </template>
    </ButtonBase>
</template>
