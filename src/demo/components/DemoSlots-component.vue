<template>
  <div class="card card--primary">
    <el-alert
      title=""
      type="info"
      :closable="false">
      <slot name="header">No HEADER slot content passed (this is default value)</slot>
    </el-alert>

    <p>
      This is text from inside of the element
    </p>

    <p>
      <el-alert
        title=""
        type="info"
        :closable="false">
        <slot>No DEFAULT slot content passed (this is default value)</slot>
      </el-alert>
    </p>

    <el-alert
      title=""
      type="info"
      :closable="false">
      <slot name="footer">No FOOTER slot content passed (this is default value)</slot>
    </el-alert>
  </div>
</template>

<script>
  export default {};
</script>

