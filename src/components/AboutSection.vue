<script setup>
import ConsultationCTA from './ConsultationCTA.vue'
import DariushIntro from './DariushIntro.vue'
import StatsGrid from './StatsGrid.vue'

const stats = [
  {
    label: 'سال تجربه',
    value: '+15',
    subtitle: 'سابقه حرفه‌ای در تولید و نصب کابینت و دکوراسیون داخلی',
  },
  {
    label: 'پروژه‌های اجرا شده',
    value: '+900',
    subtitle: 'پروژه‌های موفق در استان البرز، تهران و شهرهای اطراف',
  },
  {
    label: 'برندهای همکار',
    value: '+15',
    subtitle: 'همکاری با برندهای معتبر تجهیزات آشپزخانه و درب‌های ضدسرقت',
  },
]
</script>

<template>
  <section id="about">
    <div class="grid gap-12 bg-base-200/80 p-10 backdrop-blur lg:grid-cols-[1.1fr_1fr] lg:items-start">
      <DariushIntro />
      <div class="flex flex-col gap-8">
        <StatsGrid :stats="stats" />
        <ConsultationCTA />
      </div>
    </div>
  </section>
</template>
