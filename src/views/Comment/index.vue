<template>
  <div class="comment-list custom-space">
    <el-table :data="datas" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="content" label="内容"></el-table-column>
      <el-table-column prop="date" label="日期" width="180">
        <template #default="{ row }">
          <div>
            <span v-if="row.time" style="margin-right: 8px">{{ row.time.time }}</span>
            <span v-if="row.time" style="margin-right: 8px">{{ row.time.month.en }}</span>
            <span v-if="row.time">{{ row.time.year }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template #default="props">
          <i class="el-icon-edit icon-edit" @click="handleUpdate(props.row)"></i>
          <svg-icon icon-class="comment"></svg-icon>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: right; width: 100%; margin-top: 10px"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetComment } from '/@/api';

interface Row {
  id: string;
}

interface CommentState {
  datas: any[];
  pageSizeList: number[];
  total: number;
  loading: boolean;
}

export default defineComponent({
  setup() {
    const state = reactive<CommentState>({
      datas: [],
      pageSizeList: [10, 20, 50, 100],
      total: 0,
      loading: false,
    });

    onMounted(() => {
      getData();
    });

    const getData = () => {
      state.loading = true;
      GetComment()
        .then((res: any) => {
          console.log(res);
          const data = res.body;
          state.datas = data.data;
          state.total = data.total;
          state.loading = false;
        })
        .catch((e) => {
          console.log(e);
          state.loading = false;
        });
    };

    const handleUpdate = <T extends Row>(row: T) => {
      console.log(row);
    };

    return {
      ...toRefs(state),
      handleUpdate,
    };
  },
});
</script>

<style lang="scss" scoped>
.comment-list {
}
</style>
