<template>
  <v-card 
  v-for="job in jobs"
  :key="job.id"
  class="mx-auto" subtitle="The #1 Vue UI Library" width="400">
    <template v-slot:title>
      <span class="font-weight-black">{{ job.title }}</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      {{ job.description }}
    </v-card-text>
  </v-card>
</template>

<script setup>
import { useApi } from '~/composables/useApi.js';

const { jobs, loading, error, getJobs } = useApi()

await getJobs();

console.log('Jobs:', jobs);
</script>