<script setup lang="ts">
// import { Button, Card } from 'primevue'

import type { Pricing } from '@/types/index.type'

defineProps<{
  pricingDetails: Pricing
}>()
</script>

<template>
  <Card>
    <template #title>
      <div class="tier p-4 text-center">
        {{ pricingDetails.tier }}
      </div>
    </template>
    <template #content>
      <div v-if="pricingDetails.most_popular" class="text-center">
        <Tag severity="contrast" value="Most Popular" />
      </div>
      <div>
        <div class="font-medium text-md">
          <span>$</span>
          <span>{{ pricingDetails.amount_per_month }}</span>
          <span v-if="pricingDetails.amount_per_month > 0">/mo</span>
        </div>
        <h3 class="text-xl font-medium">
          {{ pricingDetails.title }}
        </h3>
        <p>{{ pricingDetails.description }}</p>
      </div>
      <div class="flex flex-col gap-1.5 mt-3">
        <div v-for="item in pricingDetails.features" :key="item.title" class="flex gap-2 items-center">
          <!-- icon -->
          <iconify-icon :class="item.checked ? 'text-green-400' : 'text-red-500'" :icon="item.checked ? 'mdi:checkbox-marked-circle-outline' : 'mdi:cross-circle-outline'" width="32" height="32" />
          <!-- text -->
          <p>{{ item.title }}</p>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
</style>
