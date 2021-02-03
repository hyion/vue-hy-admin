<template>
  <div class="envelope custom-space">
    <h2>短语列表</h2>
    <el-table :data="datas" style="width: 100%" v-loading="loading">
      <el-table-column prop="content" label="title"></el-table-column>
      <el-table-column prop="date" label="date" width="180">
        <template #default="{ row }">
          <div>
            <span v-if="row.time" style="margin-right: 8px">{{ row.time.time }}</span>
            <span v-if="row.time" style="margin-right: 8px">{{ row.time.month.en }}</span>
            <span v-if="row.time">{{ row.time.year }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="action" width="160">
        <template #default="props">
          <div class="action">
            <i
              class="el-icon-edit icon-edit icon"
              title="edit"
              @click="handleUpdate(props.row)"
            ></i>
            <!-- <i class="el-icon-s-comment icon" title="reply" @click="handleReply(props.row)"></i> -->
            <i class="icon el-icon-close" title="delete" @click="handleDelete(props.row)"></i>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import { GetEnvelope, DeleteEnvelope } from '/@/api';
import { useMessage } from '/@/hooks/useMessage';
import { ElMessageBox } from 'element-plus';

interface Row {
  id: string;
  parent_id?: string;
}

interface State {
  datas: any[];
  loading: boolean;
}

export default defineComponent({
  name: 'Envelope',
  setup() {
    const state = reactive<State>({
      datas: [],
      loading: false,
    });

    const { $message } = useMessage();

    onMounted(() => {
      getData();
    });

    const getData = () => {
      state.loading = true;
      GetEnvelope()
        .then((res: any) => {
          console.log(res);
          state.datas = res.body;
          console.log('datas--', state.datas);
          state.loading = false;
        })
        .catch((e) => {
          console.log(e);
          state.loading = false;
        });
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
          DeleteEnvelope(query)
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

    const handleUpdate = <T extends Row>(row: T) => {
      console.log(row);
    };

    return {
      ...toRefs(state),
      handleDelete,
      handleUpdate,
    };
  },
});
</script>

<style lang="scss" scoped>
.envelope {
  h2 {
    border-left: 2px solid #0084ff;
    padding-left: 16px;
    font-size: 18px;
    font-weight: 400;
    margin: 10px 0;
    color: #0084ff;
  }
  .action {
    .icon {
      cursor: pointer;
      margin-right: 8px;
      color: #666;
    }
  }
}
</style>
