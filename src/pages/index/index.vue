<template>
  <view>
    <view class="bg-indigo-50 py-3 px-4">
      <view class="flex items-center space-x-2">
        <view class="bg-white text-indigo-500 px-6 py-0.5 rounded-full text-lg font-bold">今日</view>
        <view class="text-stone-600 px-6 py-0.5 rounded-full text-lg font-bold">全部</view>
      </view>
    </view>
    <view class="px-4 py-2">
      <view class="space-y-2">
        <view class="flex justify-between py-2">
          <view class="text-lg">默认</view>
          <view class="i-mingcute-down-line text-2xl text-stone-400"></view>
        </view>
        <view class="flex flex-wrap -mx-4 box-border">
          <view class="w-1/3 flex justify-center mb-6">
            <view class="px-2 space-y-1 overflow-hidden">
              <view class="flex justify-center">
                <view class="relative w-150 h-150 flex flex-col bg-yellow-50 rounded-3xl shadow shadow-yellow-100">
                  <view class="flex-none bg-yellow-400 text-white text-center px-2 py-px rounded-t-3xl">倒数</view>
                  <view class="flex-auto center">
                    <view class="text-yellow-400 flex items-baseline space-x-px">
                      <text class="text-3xl">10</text>
                    </view>
                  </view>
                  <view class="absolute -right-8 -bottom-8">
                    <view class="w-50 h-50 bg-white center rounded-full">
                      <view class="i-mingcute-book-5-fill text-yellow-400 text-xl"></view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="text-center">
                <view class="text-base truncate">备考</view>
                <view class="text-stone-400 text-xs">坚持1天</view>
              </view>
            </view>
          </view>
          <view class="w-1/3 flex justify-center mb-6">
            <view class="px-2 space-y-1 overflow-hidden">
              <view class="flex justify-center">
                <view class="w-150 h-150 flex flex-col bg-blue-50 rounded-3xl shadow shadow-blue-100">
                  <view class="flex-none bg-blue-400 text-white text-center px-2 py-px rounded-t-3xl">进度</view>
                  <view class="flex-auto center">
                    <view class="text-blue-400 flex items-baseline space-x-px">
                      <text class="text-3xl">5</text>
                      <text>%</text>
                    </view>
                  </view>
                </view>
              </view>
              <view class="text-center">
                <view class="text-base truncate">阅读100个小时</view>
                <view class="text-stone-400 text-xs">坚持1天</view>
              </view>
            </view>
          </view>
          <view class="w-1/3 flex justify-center mb-6">
            <view class="px-2 space-y-1 overflow-hidden">
              <view class="flex justify-center">
                <view class="w-150 h-150 flex flex-col bg-green-50 rounded-3xl shadow shadow-green-100">
                  <view class="flex-auto center">
                    <view class="text-green-400 flex items-baseline space-x-px">
                      <view class="i-mingcute-book-2-fill text-5xl"></view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="text-center">
                <view class="text-base truncate">自习</view>
                <view class="text-stone-400 text-xs">坚持2天</view>
              </view>
            </view>
          </view>
          <view class="w-1/3 flex justify-center mb-6">
            <view class="px-2 space-y-1 overflow-hidden">
              <view class="flex justify-center">
                <view class="w-150 h-150 flex flex-col bg-indigo-50 rounded-3xl shadow shadow-indigo-100">
                  <view class="flex-auto center">
                    <view class="text-indigo-400 flex items-baseline space-x-px">
                      <view class="i-mingcute-check-fill text-4xl"></view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="text-center">
                <view class="text-base line-through truncate">早起</view>
                <view class="text-stone-400 text-xs">坚持1天</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view> 
    <view class="fixed bottom-0 right-0 mb-18 mr-6">
      <button class="w-120 h-120 center bg-indigo-500 text-white rounded-3xl shadow shadow-indigo">
        <view class="i-mingcute-add-fill text-3xl"></view>
      </button>
    </view>
  </view>
</template>

<script setup>

</script>
