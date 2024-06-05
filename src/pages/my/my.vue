<template>
  <view class="page">
    <view class="form">
      <input v-model="title" class="uni-input" placeholder="填写你的梦想标题吧~" />
      <textarea
        v-model="content"
        placeholder-style="color:#ccc"
        style="margin-top: 30rpx; height: 300rpx"
        class="uni-input"
        placeholder="你的梦想计划是什么呢？可以写的详细一点哦"
      />
      <view class="picker-wrapper" @click="handleOpen">
        <view class="label">选标签</view>
        <view class="right">
          <view v-if="selectedTag" class="tag">#{{ selectedTag }}</view>
          <u-icon name="arrow-right" color="#aaa" size="22"></u-icon>
        </view>
      </view>

      <view class="submit-btn" @click="handleCreateDream"> 创建梦 </view>
    </view>

    <u-popup :show="popupVisible" mode="bottom" :closeable="true" @close="handleClose">
      <view class="popup-wrapper">
        <view class="title">选择你梦想的标签</view>
        <view class="label">考试</view>
        <view class="tags">
          <view
            v-for="tag of tags1"
            @click="handleClickTag(tag)"
            :key="tag"
            class="tag"
            :class="{ active: tag === selectedTag }"
          >
            <text>#{{ tag }}</text>
          </view>
        </view>

        <view class="label">学习</view>
        <view class="tags">
          <view
            v-for="tag of tags2"
            @click="handleClickTag(tag)"
            :key="tag"
            class="tag"
            :class="{ active: tag === selectedTag }"
          >
            <text>#{{ tag }}</text>
          </view>
        </view>

        <view class="label">生活</view>
        <view class="tags">
          <view
            v-for="tag of tags3"
            @click="handleClickTag(tag)"
            :key="tag"
            class="tag"
            :class="{ empty: tag === '', active: tag === selectedTag }"
          >
            <text v-if="tag">#{{ tag }}</text>
          </view>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      popupVisible: false,
      selectedTag: null,
      tags1: [
        '研究生考试',
        '公务员考试',
        '教师资格证',
        '专升本考试',
        '英语4级',
        '英语6级',
        '普通话考试',
        '英语专四',
        '英语专八',
        '注册会计师',
        '托福考试',
        '雅思考试',
      ],
      tags2: ['看书', '自习', '写作', '画画', '练舞', '练字', '刷题', '练乐器', '背单词'],
      tags3: ['减肥', '追星', '八卦', '恋爱', '工作', '健身', '游戏上分', '存钱', '早起', '早睡', '不迟到', ''],
    }
  },
  methods: {
    handleClickTag(tag) {
      if (!tag) {
        return
      }
      this.selectedTag = tag
      this.popupVisible = false
    },
    handleCreateDream() {
      const dreamList = uni.getStorageSync('dreamList') || []
      dreamList.push({ title: this.title, content: this.content, tag: this.selectedTag, id: new Date().valueOf() })
      uni.setStorage({
        key: 'dreamList',
        data: dreamList,
      })
      uni.switchTab({
        url: '/pages/home/home',
      })
    },
    handleOpen() {
      this.popupVisible = true
    },
    handleClose() {
      this.popupVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  padding: 0 20rpx;
  background-color: #fff;
  .form {
    padding: 20rpx 0;
    .uni-input {
      font-size: 34rpx;
      width: 100%;
    }

    .picker-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .label {
        font-size: 34rpx;
      }

      .right {
        display: flex;
        align-items: center;
        .tag {
          color: #fff;
          background-color: #00d0c5;
          padding: 4rpx 8rpx;
          border-radius: 8rpx;
          margin-right: 5rpx;
          font-size: 24rpx;
        }
      }
    }

    .submit-btn {
      width: 100%;
      height: 80rpx;
      background-color: #00d0c5;
      color: #fff;
      font-size: 40rpx;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30rpx;
      margin-top: 160rpx;
    }
  }

  .popup-wrapper {
    padding: 20rpx 30rpx;
    .title {
      font-size: 32rpx;
      color: #333;
      font-weight: bold;
    }

    .label {
      margin-top: 30rpx;
      font-size: 28rpx;
      color: #333;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin-top: 10rpx;
      .tag {
        width: 210rpx;
        height: 60rpx;
        background-color: #f3f4f6;
        color: #666;
        margin-top: 15rpx;
        border-radius: 20rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 26rpx;

        &.empty {
          background-color: transparent;
        }
        &.active {
          color: #fff;
          background-color: #00d0c5;
        }
      }
    }
  }
}
</style>
