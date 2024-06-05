<template>
  <view class="page">
    <view class="title">
      {{ dreamDetail.title }}
    </view>
    <view class="content">
      {{ dreamDetail.content }}
    </view>
    <view class="tag"> #{{ dreamDetail.tag }} </view>
    <view @click="handleSubmit" class="submit-button"> 打卡 </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dreamDetail: {},
    }
  },
  onLoad(e) {
    const dreamList = uni.getStorageSync('dreamList') || []
    const find = dreamList.find((item) => item.id === +e.id)
    this.dreamDetail = find
  },
  methods: {
    handleSubmit() {
      uni.showToast({
        title: '打卡成功~',
        duration: 2000,
      })
      setTimeout(() => {
        uni.navigateBack()
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: 0 20rpx;
  background-color: #fff;
  .title {
    margin-top: 20rpx;
    font-size: 36rpx;
    font-weight: bold;
  }

  .content {
    margin-top: 20rpx;
    font-size: 28rpx;
    color: #666;
  }

  .tag {
    margin-top: 20rpx;
    border-radius: 10rpx;
    width: 100rpx;
    height: 50rpx;
    color: #00d0c5;
    border: 1rpx solid #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit-button {
    width: 90%;
    margin: 0 auto;
    margin-top: 100rpx;
    background-color: #00d0c5;
    padding: 20rpx 0;
    text-align: center;
    font-size: 36rpx;
    color: #fff;
    font-weight: bold;
    border-radius: 30rpx;
  }
}
</style>
