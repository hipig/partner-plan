<template>
    <view class="h-96 border-t border-stone-100 border-solid">
        <view class="h-full center bg-white">
            <view v-for="(item, index) in list" class="flex-auto flex-col center py-1.5" :class="[selected === index ? 'text-indigo-500' : 'text-stone-400']" @tap="handleSelect(item.pagePath, index)">
                <view class="text-1.5rem" :class="item.icon"></view>
                <text class="mt-0.5 text-xs">{{ item.text }}</text>
            </view>
        </view>
    </view>    
</template>

<script>
  export default {
    options: {
      addGlobalClass: true
    }
  }
</script>

<script setup>
    import {switchTab} from '@tarojs/taro'
    import {useTabbarStore} from '../store'
    import { computed } from 'vue'

    const list = [
        {
            pagePath: '/pages/index/index',
            icon: 'i-mingcute-calendar-day-fill',
            text: '计划'
        },
        {
            pagePath: '/pages/store/index',
            icon: 'i-mingcute-gift-fill',
            text: '奖励'
        },
        {
            pagePath: '/pages/my/index',
            icon: 'i-mingcute-more-3-fill',
            text: '更多'
        },
    ]

    const tabbarStore = useTabbarStore()

    const selected = computed(() => {
        return tabbarStore.selected
    })

    const handleSelect = (url, index) => {
        tabbarStore.select(index)
        switchTab({url})
    }

</script>