<template>
  <div class="comment-list custom-space">
    <el-table :data="datas" style="width: 100%" v-loading="loading">
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
          <div class="action">
            <!-- <i
              class="el-icon-edit icon-edit icon"
              title="edit"
              @click="handleUpdate(props.row)"
            ></i> -->
            <i class="el-icon-s-comment icon" title="reply" @click="handleReply(props.row)"></i>
            <i class="icon el-icon-close" title="delete" @click="handleDelete(props.row)"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      style="text-align: right; width: 100%; margin-top: 10px"
      layout="total, prev, pager, next"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetComment, DeleteComment } from '/@/api';
import { useMessage } from '/@/hooks/useMessage';
import { ElMessageBox } from 'element-plus';

interface Row {
  id: string;
  parent_id?: string;
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

    const { $message } = useMessage();

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

    const handleReply = <T extends Row>(row: T) => {
      console.log(row);
    };

    const handleDelete = <T extends Row>(row: T) => {
      ElMessageBox({
        title: '注意',
        type: 'warning',
        message: '是否现在删除此评论?',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
      })
        .then(() => {
          state.loading = true;
          const query = {
            id: row.id,
            parent_id: row.parent_id,
          };
          DeleteComment(query)
            .then((res) => {
              console.log(res);
              // state.loading = false;
              getData();
              $message('success', '删除成功');
            })
            .catch((e) => {
              console.log(e);
              state.loading = false;
            });
        })
        .catch(() => {
          $message('info', '已取消删除');
        });
    };

    const handleSizeChange = (size: number) => {
      console.log(size);
    };

    const handleCurrentChange = (current: number) => {
      console.log(current);
    };

    return {
      ...toRefs(state),
      handleUpdate,
      handleDelete,
      handleReply,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
</script>

<style lang="scss" scoped>
.comment-list {
  .action {
    .icon {
      cursor: pointer;
      margin-right: 8px;
      color: #666;
    }
  }
}
</style>
