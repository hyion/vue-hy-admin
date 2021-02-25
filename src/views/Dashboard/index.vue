<template>
  <div class="home custom-space">
    <h2>
      <span class="el-icon-magic-stick"></span>
      万物皆有裂痕，那是光照进来的地方
    </h2>
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
.home {
  position: relative;
  margin: 20px;
  padding: 10px;
  h2 {
      width: 100%;
      font-size: 16px;
      font-weight: 400;
      margin: 10px 0 30px;
      letter-spacing: 1px;
      color: #0e8dff;
      span {
        color: #0e8bff;
        font-size: 20px;
      }
    }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    section {
      width: calc(50% - 15px);
      display: inline-block;
      height: 300px;
      box-shadow: 0 2px 20px #e0f0ff;
      border-radius: 20px;
      background: #fff;
      padding: 20px;
      margin-bottom: 24px;
      position: relative;
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
          border: 1px solid #edf3f9;
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
    }
  }
}
</style>
