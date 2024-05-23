<script setup lang="ts">
import {
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTrigger,
} from 'radix-vue'
import ButtonPrimary from './defaultCmp/button/ButtonPrimary.vue';
const props = defineProps({
    labelTrigger: { type: String, default: "" },
    labelClassTrigger: { type: String, default: "" },
    btnClassTrigger: { type: String, default: "" },
    data: { type: Object, default: {} },
    btnClass: { type: String, default: "" },
    btnLabel: { type: String, default: "" },
    btnLabelClass: { type: String, default: "" },
    disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['confirm'])
const onClick = () => {
    emit('confirm')
}
</script>

<template>
    <DialogRoot>
        <DialogTrigger :class="`${props.btnClassTrigger}`">
            <slot name="prefix"></slot>
            <p v-if="labelTrigger !== ''" :class="`${props.labelClassTrigger}`">
                {{ props.labelTrigger }}
            </p>
            <slot name="sufix"></slot>
        </DialogTrigger>
        <DialogPortal>
            <DialogOverlay class="backdrop-blur-sm shrink justify-between fixed inset-0 z-30" />
            <DialogContent class="w-11/12 px-4 py-8 grid grid-cols-2 gap-y-2 justify-between bg-primary rounded-xl
                shadow-[0_1px_8px_0px_rgba(16,25,32,0.16)] fixed top-[50%] left-[50%]
                 translate-x-[-50%] translate-y-[-50%] focus:outline-none z-[100] animate-enterFromRight">
                <slot name="content"></slot>
            </DialogContent>
        </DialogPortal>
    </DialogRoot>
</template>