<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const hash = window.location.search.slice(1);
    window.opener.location.href = window.location.origin + '/login#' + hash;
    window.close();
  },
});
</script>
