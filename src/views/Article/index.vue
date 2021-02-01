<template>
  <div class="articles">
    <el-row
      type="flex"
      justify="end"
      style="padding-bottom: 5px; border-bottom: 1px solid rgba(7, 17, 27, 0.1)"
    >
      <el-button @click="onCreate">添加文章</el-button>
    </el-row>
    <el-row style="margin-top: 10px">
      <el-table :data="datas" style="width: 100%" v-loading="loading">
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="title" label="Title" min-width="180"></el-table-column>
        <el-table-column prop="time" label="Date" width="180"></el-table-column>
        <el-table-column label="options" width="160">
          <template #default="props">
            <i class="el-icon-edit icon-edit" @click="handleUpdate(props.row)"></i>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="text-align: right; width: 100%; margin-top: 10px"
        layout="total, prev, pager, next"
        :total="total"
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
  loading: boolean;
}

export default defineComponent({
  name: 'Article',
  setup() {
    const state = reactive<ArticleState>({
      datas: [],
      pageSizeList: [10, 20, 50, 100],
      total: 0,
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
      const query = {
        params: {
          page: 1,
        },
      };
      state.loading = true;
      GetArticles(query)
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
    };
  },
});
</script>

<style lang="scss" scoped>
.articles {
  margin: 20px;
  padding: 10px;
  background-color: #fff;
  .icon-edit {
    padding: 10px;
    cursor: pointer;
  }
}
</style>
