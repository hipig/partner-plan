<template>
    <view>
        <view class="py-4 px-4 overflow-x-auto">
            <view class="flex flex-wrap items-center space-x-4">
                <view class="bg-indigo-500 text-white text-sm px-4 py-2 rounded-xl">热门</view>
                <view class="bg-stone-200 text-stone-500 text-sm px-4 py-2 rounded-xl">运动健康</view>
            </view>
        </view>
        <view class="flex flex-wrap -mx-4">
            <view class="w-1/3 flex justify-center mb-6">
                <view class="px-2 space-y-1 overflow-hidden">
                    <view class="flex justify-center">
                        <view class="w-150 h-150 flex flex-col bg-blue-50 rounded-3xl shadow shadow-blue-100">
                        <view class="flex-auto center">
                            <view class="text-blue-400 flex items-baseline space-x-px">
                            <view class="i-mingcute-bed-fill text-5xl"></view>
                            </view>
                        </view>
                        </view>
                    </view>
                    <view class="text-center">
                        <view class="text-base truncate">健身</view>
                        <view class="text-stone-400 text-xs">236587人坚持</view>
                    </view>
                </view>
            </view>
            <view class="w-1/3 flex justify-center mb-6">
                <view class="px-2 space-y-1 overflow-hidden">
                    <view class="flex justify-center">
                        <view class="w-150 h-150 flex flex-col bg-green-50 rounded-3xl shadow shadow-green-100">
                        <view class="flex-auto center">
                            <view class="text-green-400 flex items-baseline space-x-px">
                            <view class="i-mingcute-bed-fill text-5xl"></view>
                            </view>
                        </view>
                        </view>
                    </view>
                    <view class="text-center">
                        <view class="text-base truncate">早睡</view>
                        <view class="text-stone-400 text-xs">14578人坚持</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>