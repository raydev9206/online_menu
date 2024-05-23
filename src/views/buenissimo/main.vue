<template>
  <div
    class="w-full min-h-[100vh] p-1.5 border-2 border-primary justify-start items-start gap-2.5 inline-flex"
    :style="`background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('/img/bg-menu.webp'), lightgray 0px -746.363px / cover no-repeat;`"
  >
    <div
      class="grow shrink basis-0 self-stretch px-3 py-3 border border-primary flex-col justify-start items-center gap-7 inline-flex"
    >
      <div class="self-stretch flex-col justify-start items-center gap-7 flex">
        <div class="flex-col justify-start items-center gap-2 flex">
          <div class="w-40 relative">
            <img src="/icons/Logo.svg" />
          </div>
        </div>
        <div class="self-stretch px-8 justify-between items-end inline-flex">
          <div class="w-8 flex-col justify-center items-center inline-flex"></div>
          <div class="w-14 pt-px flex-col justify-center items-center inline-flex">
            <div class="w-14 relative"></div>
          </div>
          <div class="w-8 flex-col justify-center items-center inline-flex">
            <div class="w-8 relative"></div>
          </div>
        </div>
      </div>
      <!-- TAB PANEL -->
      <TabsRoot
        class="flex flex-col w-full sm:w-full"
        :modelValue="activeTab"
        @update:modelValue="(newVal: string) => (activeTab = newVal)"
      >
        <TabsList class="px-10 justify-between relative shrink-0 flex items-end">
          <TabsIndicator
            class="absolute px-8 left-0 h-[4px] bottom w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full transition-[width,transform] duration-300"
          >
            <div class="bg-grass8 w-full h-full" />
          </TabsIndicator>
          <div v-for="(item, index) in categories" :key="index">
            <TabsTrigger :value="item.id">
              <img v-if="activeTab == item.id" :src="`/icons/${item.icon}.svg`" />
              <img v-else :src="`/icons/${item.icon}-no-active.svg`" />
            </TabsTrigger>
          </div>
        </TabsList>
        <div v-for="(item, index) in categories" :key="index">
          <TabsContent v-if="activeTab === item.id" :value="activeTab" class="pt-12 pb-28">
            <div class="flex flex-col gap-8">
              <div class="w-full flex justify-center">
                <div
                  class="px-3 py-1 border border-primary justify-start items-start gap-2.5 inline-flex"
                >
                  <div class="text-white text-2xl font-bold font-RobotoCondensed uppercase">
                    {{ item.name.es }}
                  </div>
                </div>
              </div>
              <div
                v-for="(subcat, index) in Object.keys(offer)"
                :key="index"
                class="self-stretch flex-col justify-start items-start gap-3 flex"
              >
                <div
                  class="self-stretch py-1 border-b border-white justify-start items-start gap-2.5 inline-flex"
                >
                  <div class="text-white text-xl font-bold font-RobotoCondensed uppercase">
                    {{ subcat }}
                  </div>
                </div>
                <div
                  v-for="(prod, index) in offer[subcat]"
                  :key="index"
                  class="w-full self-stretch justify-center items-start gap-4"
                >
                  <div class="w-full flex self-stretch justify-between items-center gap-1">
                    <div
                      class="max-w-[200px] flex-none text-white text-md font-medium font-Roboto uppercase"
                    >
                      {{ prod.name.es }}
                    </div>
                    <div class="flex grow text-white overflow-hidden items-center justify-center">
                      <img src="/icons/separator.svg" />
                    </div>
                    <div class="flex-none text-white text-md font-black font-Roboto uppercase">
                      $ {{ prod.price }} CUP
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ModalInfo
              v-if="spec.length > 0"
              labelTrigger="Sabores"
              btn-class-trigger="px-4 py-4  flex justify-center items-center text-center
                            fixed right-8 bottom-12 bg-primary font-Roboto rounded-full 
                            cursor-pointer uppercase rounded-3xl text-white"
            >
              <template #content>
                <div
                  v-for="(item, index) in spec"
                  :key="index"
                  class="w-full grid grid-cols-2 place-content-center"
                >
                  <div class="font-RobotoCondensed text-white uppercase">{{ item?.name.es }}</div>
                </div>
              </template>
            </ModalInfo>
          </TabsContent>
        </div>
      </TabsRoot>
      <!-- END TAB PANEL -->
    </div>
  </div>
</template>

<script setup lang="ts">
import ModalInfo from '@/components/ModalInfo.vue'
import useCategory from '@/composables/useCategory'
import useOffer from '@/composables/useOffer'
import useSpecification from '@/composables/useSpecification'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'radix-vue'
import { onBeforeMount, ref, watch } from 'vue'
const activeTab = ref('')
const categories = ref()
const offer = ref()
const spec = ref()
const Specification = useSpecification()
const Category = useCategory()
const Offer = useOffer()

watch(activeTab, async () => {
  offer.value = []
  spec.value = []
  offer.value = await Offer.getAll(activeTab.value)
  spec.value = await Specification.getAll(activeTab.value)
})

onBeforeMount(async () => {
  categories.value = await Category.getAll()
  activeTab.value = categories.value[0]?.id
})
</script>
