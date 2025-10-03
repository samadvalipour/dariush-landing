<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<template>
  <div class="bg-base-100">
    <Navbar />

    <main class="space-y-24">
      <section id="home" class="hero min-h-[calc(100vh-5rem)] bg-base-200">
        <div class="hero-content text-center">
          <div class="max-w-xl space-y-6">
            <h1 class="text-4xl font-bold">به داریوش خوش آمدید</h1>
            <p class="text-base-content/70">
              این یک صفحه فرود ساده است که با استفاده از
              <span class="font-semibold">daisyUI</span>
              و <span class="font-semibold">Tailwind CSS</span> ساخته شده تا بتوانید به سرعت رابط‌های
              کاربری زیبا ایجاد کنید.
            </p>
            <div class="flex flex-wrap justify-center gap-3">
              <RouterLink to="/blog" class="btn btn-primary">مشاهده بلاگ</RouterLink>
              <button type="button" class="btn btn-outline">شروع کنید</button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="container mx-auto px-4">
        <div class="rounded-2xl bg-base-200 p-10">
          <h2 class="text-3xl font-bold">خدمات ما</h2>
          <p class="mt-4 text-base-content/70">
            ما مجموعه‌ای از خدمات طراحی، توسعه و مشاوره را برای کمک به رشد کسب‌وکار شما ارائه می‌کنیم.
            تیم ما به شما کمک می‌کند تا تجربه دیجیتال بی‌نقصی برای کاربران خود خلق کنید.
          </p>
        </div>
      </section>

      <section id="products" class="bg-base-200 py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-center text-3xl font-bold">محصولات ما</h2>
          <p class="mx-auto mt-4 max-w-2xl text-center text-base-content/70">
            از ابزارهای اتوماسیون گرفته تا داشبوردهای تحلیلی، محصولات ما برای ساده‌سازی فرآیندهای شما
            طراحی شده‌اند.
          </p>
        </div>
      </section>

      <section id="about" class="container mx-auto px-4">
        <div class="grid gap-10 rounded-2xl bg-base-200 p-10 lg:grid-cols-2 lg:items-center">
          <div class="space-y-4">
            <h2 class="text-3xl font-bold">درباره ما</h2>
            <p class="text-base-content/70">
              ما تیمی از طراحان، توسعه‌دهندگان و استراتژیست‌های پرشور هستیم که به ارائه راهکارهای نوآورانه
              برای برندها و کسب‌وکارهای رو به رشد متعهدیم.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="stats stats-vertical lg:stats-horizontal shadow">
              <div class="stat">
                <div class="stat-title">سال تجربه</div>
                <div class="stat-value">۸+</div>
              </div>
              <div class="stat">
                <div class="stat-title">مشتریان خوشحال</div>
                <div class="stat-value">۱۲۰+</div>
              </div>
              <div class="stat">
                <div class="stat-title">پروژه‌های موفق</div>
                <div class="stat-value">۳۰۰+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="bg-base-200 py-16">
        <div class="container mx-auto px-4">
          <div class="card mx-auto max-w-2xl bg-base-100 shadow-lg">
            <div class="card-body space-y-4">
              <h2 class="card-title justify-center text-3xl">تماس با ما</h2>
              <p class="text-center text-base-content/70">
                برای شروع همکاری یا دریافت مشاوره رایگان، فرم زیر را تکمیل کنید.
              </p>
              <form class="space-y-4">
                <div class="grid gap-4 md:grid-cols-2">
                  <input type="text" placeholder="نام" class="input input-bordered" />
                  <input type="email" placeholder="ایمیل" class="input input-bordered" />
                </div>
                <textarea class="textarea textarea-bordered h-32 w-full" placeholder="پیام"></textarea>
                <button type="submit" class="btn btn-primary w-full">ارسال پیام</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
