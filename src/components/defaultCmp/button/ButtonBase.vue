<template>
    <button color="black" class="w-full hover:brightness-[105%] transition"
        :class="`${!disabled ? `${bgActive}` : `${bgDisable}`} ${btnClass} ${height}`" :disabled="disabled">
        <slot name="prefix"></slot>
        <div :class="`${!disabled ? 'text-gray-10' : 'text-gray-80'} ${labelClass}`">
            <slot>{{ label }}</slot>
        </div>
        <slot name="suffix"></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    label: { type: String, default: '' },
    labelClass: {
        type: String,
        default: 'flex text-center text-base font-semibold leading-tight h-7 items-center uppercase'
    },
    btnClass: {
        type: String,
        default:
            'rounded text-gray-80 dark:text-gray-10  inline-block items-center justify-center flex text-nowrap max-w-fit px-8'
    },
    disabled: { type: Boolean, default: false },
    bgActive: { type: String, default: 'bg-primary' },
    bgDisable: { type: String, default: 'bg-gray-60' },
    height: { type: String, default: 'h-14' }
})
</script>