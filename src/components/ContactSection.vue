<template>
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
</template>
