<template>
    <view class="fixed inset-x-0 bottom-0">
        <view class="flex items-start justify-center bg-white">
            <view v-for="(item, index) in list" class="flex-auto text-center" @click="handleSelect(index)">
                <view :class="item.icon"></view>
                <text class="text-xl">{{ item.text }}</text>
            </view>
        </view>
    </view>    
</template>

<script setup>
    import 'uno.css'
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
            icon: 'i-mingcute-menu-fill',
            text: '更多'
        },
    ]

    const tabbarStore = useTabbarStore()

    const selected = computed(() => {
        return tabbarStore.selected
    })

    const handleSelect = (index) => {
        tabbarStore.select(index)
    }

</script>