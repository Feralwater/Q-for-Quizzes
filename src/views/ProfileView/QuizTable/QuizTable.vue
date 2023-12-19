<script setup lang="ts">

</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in 7"
        :key="item.name"
      >
        <td>{{ item }}</td>
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<style scoped>

</style>