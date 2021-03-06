<template>
  <div class="articles">
    <el-row type="flex" justify="space-between">
      <h2>文章列表</h2>
      <div>
        <el-button style="margin-top: 10px" @click="onCreate">添加文章</el-button>
      </div>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-table :data="datas" style="width: 100%" v-loading="loading">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="title" label="Title" min-width="180"></el-table-column>
        <el-table-column label="Date" width="180">
          <template #default="{ row }">
            <div>
              <span v-if="row.time" style="margin-right: 8px">{{ row.time.time }}</span>
              <span v-if="row.time" style="margin-right: 8px">{{ row.time.month.en }}</span>
              <span v-if="row.time">{{ row.time.year }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="options" width="160">
          <template #default="{ row }">
            <i class="el-icon-edit icon-edit" @click="handleUpdate(row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="text-align: right; width: 100%; margin-top: 10px"
        layout="total, prev, pager, next"
        :total="total"
        @current-change="onCurrChange"
      >
      </el-pagination>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetArticles } from '/@/api';
import { useRouter } from 'vue-router';

interface Row {
  id: string;
}
interface ArticleState {
  datas: any[];
  pageSizeList: number[];
  total: number;
  page: number;
  loading: boolean;
}

export default defineComponent({
  name: 'Article',
  setup() {
    const state = reactive<ArticleState>({
      datas: [],
      pageSizeList: [10, 20, 50, 100],
      total: 0,
      page: 1,
      loading: false,
    });

    const router = useRouter();

    onMounted(() => {
      getData();
    });

    const currentChange = (index: number) => {
      console.log(index);
    };

    const getData = () => {
      state.loading = true;
      GetArticles(state.page)
        .then((res: any) => {
          console.log(res);
          const data = res.body;
          state.total = data.total;
          state.datas = data.data;
          state.loading = false;
        })
        .catch((e) => {
          console.log(e);
          state.loading = false;
        });
    };

    const onCurrChange = (cur: number) => {
      state.page = cur;
      getData();
    };

    const onCreate = () => {
      router.push(`/article-detail/add`);
    };

    const handleUpdate = <T extends Row>(row: T) => {
      router.push(`/article-detail/${row.id}`);
      // router.push(`/article/${row.id}`);
    };

    return {
      ...toRefs(state),
      currentChange,
      onCreate,
      handleUpdate,
      onCurrChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.articles {
  margin: 20px;
  padding: 10px;
  background-color: #fff;
  h2 {
    border-left: 2px solid #0084ff;
    padding-left: 16px;
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
    color: #0084ff;
  }
  .icon-edit {
    padding: 10px;
    cursor: pointer;
  }
}
</style>
