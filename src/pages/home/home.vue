<template>
  <view class="page">
    <image style="width: 300rpx; height: 113rpx; margin-top: 30rpx" src="@/static/images/home1.png"></image>
    <view class="empty-card" v-if="dreamList.length === 0">
      <view class="left">
        <view class="t1">你还没有梦想呢</view>
        <view @click="toMy" class="create-btn">
          <view class="plus">+</view>
          <view class="btn-text">创建梦想</view>
        </view>
      </view>
      <image style="width: 304rpx; height: 278rpx" src="@/static/images/home3.png"></image>
    </view>
    <view class="dream-card-list" v-else>
      <view @click="handleDetail(dream)" v-for="dream of dreamList" :key="dream.id" class="dream-card-item">
        <view class="card-title">
          {{ dream.title }}
        </view>
        <view class="content"> 梦想实现的如何了，快来打卡吧~ </view>
      </view>
    </view>

    <image style="width: 300rpx; height: 113rpx; margin-top: 60rpx" src="@/static/images/home2.png"></image>
    <view class="success-card">
      <view class="label"> 还没有成就展示 </view>
      <view class="text"> 当你梦想实现时，可以标记为梦想完成，标记后成就就会在这里展示，作为个人记录。 </view>
      <view class="example">
        <view style="color: #00d0c5">示例：</view>
        <view class="item"> 历时99天 </view>
        <view class="item"> 累计筑梦99次 </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dreamList: [],
    }
  },
  onShow() {
    const dreamList = uni.getStorageSync('dreamList') || []
    this.dreamList = dreamList
  },
  methods: {
    toMy() {
      uni.switchTab({
        url: '/pages/my/my',
      })
    },
    handleDetail(item) {
      uni.navigateTo({
        url: `/pages/detail/detail?id=${item.id}`,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: 0 20rpx;
  background-color: #f1f1f1;
  .empty-card {
    height: 380rpx;
    margin-top: 10rpx;
    width: 100%;
    background: linear-gradient(to bottom, #f9ffe0, #cff9d6 40%, #a7f4cc 80%, #94f1c7);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20rpx;
    box-sizing: border-box;
    border: 2rpx solid #000;
    .left {
      height: 100%;
      .t1 {
        margin-top: 90rpx;
        font-size: 36rpx;
        font-weight: bold;
        color: #000;
      }

      .create-btn {
        background-color: #00d0c5;
        padding: 20rpx 80rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: #fff;
        border-radius: 15rpx;
        margin-top: 40rpx;
        .plus {
          border: 1rpx solid #fff;
          border-radius: 50%;
          color: #fff;
          width: 36rpx;
          height: 36rpx;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .btn-text {
          color: #fff;
          margin-left: 10rpx;
        }
      }
    }
  }

  .dream-card-list {
    margin-top: 10rpx;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .dream-card-item {
      width: 50%;
      box-sizing: border-box;
      padding: 10rpx;
      .card-title {
        background-color: #f4fedf;
        border: 2rpx solid #000;
        padding-left: 15rpx;
        height: 48rpx;
        line-height: 48rpx;
        font-size: 30rpx;
        font-weight: bold;
      }

      .content {
        border: 2rpx solid #000;
        border-top: none;
        background-color: #fff;
        color: #666;
        padding: 20rpx;
      }
    }
  }

  .success-card {
    margin-top: 10rpx;
    background-color: #fff;
    border-radius: 20rpx;
    padding: 30rpx;
    .label {
      font-size: 30rpx;
      color: #333;
      font-weight: bold;
    }

    .text {
      margin-top: 10rpx;
      color: #666;
    }
    .example {
      margin-top: 10rpx;
      display: flex;
      align-items: center;
      .item {
        background-color: #f2fffe;
        color: #00d0c5;
        padding: 5rpx;
        margin-right: 5rpx;
        font-size: 24rpx;
      }
    }
  }
}
</style>
