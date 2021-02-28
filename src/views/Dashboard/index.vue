<template>
  <div class="home custom-space">
    <div class="header">
      <i class="el-icon-magic-stick"></i>
      <span class="text">万物皆有裂痕，那是光照进来的地方</span>
    </div>
    <div class="container">
      <section class="info">
        <h4>Hello，你好，我是谁！</h4>
        <div>
          <p>重新认识、审视、定义一下自己吧。</p>
          <ul>
            <li><span class="el-icon-ice-drink"></span>现在的你，是个怎样的人？</li>
            <li><span class="el-icon-lollipop"></span>你希望以后成为怎样的人？</li>
            <li><span class="el-icon-lollipop"></span>你心中的未来是怎样的？</li>
            <li><span class="el-icon-lollipop"></span>最想做的一件事是什么？</li>
            <li><span class="el-icon-lollipop"></span>你现在的生活，开心吗？</li>
            <li><span class="el-icon-hot-water"></span>心如止水，淡中得味，加油。</li>
          </ul>
        </div>
      </section>
      <section class="article">
        <h3>文章区</h3>
        <!-- <div class="box">
            <p>
                <span class="total">{{$data.articleQty}}</span>
                <span>篇</span>
            </p>
            <p>{{dateDiff($data.article.time)}} 发布了新的心情，继续加油哦！</p>
        </div> -->
        <div class="box">
          <p>
            <span class="total">0</span>
            <span>篇</span>
          </p>
          <p>快来发布新文章啦!</p>
        </div>
      </section>
      <section class="info border-top">
        <h3>评论区</h3>
        <!-- <div class="box" v-if="$data.commentQty">
            <p>
                <span class="total">{{$data.commentQty}}</span>
                <span>条</span>
            </p>
            <p>过去的时间里，收获了些许陌生的美好。</p>
        </div> -->
        <div class="box">
          <p>
            <span class="total">0</span>
            <span>条</span>
          </p>
          <p>过去的时间里，收获了些许陌生的美好。</p>
        </div>
      </section>
      <section class="border-top">
        <h3>备忘录</h3>
        <!-- <div class="envelope" v-if="$envelope && $envelope.length > 0">
            <p v-for="(item, index) in $envelope" :key="index"><span>{{index + 1}}</span>{{item.content}}</p>
        </div> -->
        <div class="envelope box" style="height: 80%;">
          <p>空空如也</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from '/@/store';

export default defineComponent({
  setup() {
    const state = reactive({
      token: '',
    });

    const store = useStore();
    state.token = store.state.token;

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
$border-1px: 1px solid rgba(7, 17, 27, .1);

.home {
  position: relative;
  margin: 20px;
  padding: 10px;
  .header {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    margin: 10px 0 30px;
    letter-spacing: 1px;
    color: #0e8dff;
    i {
      color: #0e8bff;
      font-size: 20px;
    }
    .text {
      border-bottom: $border-1px;
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    section {
      width: calc(50%);
      display: inline-block;
      height: 300px;
      // box-shadow: 0 2px 20px #e0f0ff;
      // border-radius: 20px;
      background: #fff;
      padding: 20px;
      margin-bottom: 24px;
      position: relative;
      &.border-top {
        border-top: $border-1px;
      }
      &.article {
        margin-bottom: 0;
      }
      h3 {
        font-size: 18px;
        color: #7fc3ff;
        font-weight: 400;
        text-transform: uppercase;
        position: relative;
        height: 20px;
        margin-bottom: 20px;
        &::before {
          content: '';
          height: 1px;
          width: 26px;
          background: #c7dcf3;
          position: absolute;
          bottom: -2px;
        }
      }
      &.info {
        border-right: $border-1px;
        margin-bottom: 0;
        h4 {
          font-size: 16px;
          font-weight: 400;
          margin: 22px 0 10px;
          color: #0e8bff;
          padding-left: 15px;
          &::after {
            content: '\e6a4';
            font-family: element-icons !important;
            speak: none;
            font-style: normal;
            font-weight: 400;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            vertical-align: baseline;
            display: inline-block;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            position: absolute;
            left: 14px;
            top: 10px;
            font-size: 30px;
            color: #7fc3ff;
          }
        }
        p {
          font-size: 13px;
          color: #909399;
          padding-left: 15px;
        }
        ul {
          margin: 10px 0;
          padding: 14px 15px 12px;
          border-radius: 10px;
          // border: 1px solid #edf3f9;
          li {
            position: relative;
            color: #5182b3;
            line-height: 24px;
            font-size: 13px;
            letter-spacing: 1px;
            span {
              margin-right: 4px;
            }
          }
        }
      }
      .box{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        height: calc(100% - 40px);
        & > p:last-child{
          margin-top: 30px;
          color: #c4ccd4;
        }
      }
    }
  }
}
</style>
