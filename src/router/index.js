import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        title: 'کابینت و دکوراسیون داریوش | طراحی و اجرای کابینت و دکوراسیون داخلی',
        description:
          'دکوراسیون داریوش با طراحی و اجرای کابینت، درب و تجهیزات آشپزخانه در استان البرز و تهران همراه شماست. از مشاوره تا نصب، همه چیز با تیم متخصص داریوش انجام می‌شود.',
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        title: 'وبلاگ دکوراسیون داریوش | ایده‌ها و مقالات دکوراسیون داخلی',
        description:
          'جدیدترین مقالات و نکات کاربردی درباره طراحی کابینت، دکوراسیون داخلی و انتخاب متریال مناسب را در وبلاگ دکوراسیون داریوش دنبال کنید.',
        ogTitle: 'وبلاگ دکوراسیون داریوش',
        ogDescription:
          'مرجع ایده‌ها، آموزش‌ها و خبرهای به‌روز در زمینه دکوراسیون داخلی، کابینت و تجهیزات آشپزخانه.',
      },
    },
  ],
})

const SITE_URL = 'https://dariushdecor.ir'

const defaultMeta = {
  title: 'کابینت و دکوراسیون داریوش | طراحی و اجرای کابینت و دکوراسیون داخلی',
  description:
    'دکوراسیون داریوش ارائه‌دهنده طراحی، تولید و نصب کابینت، درب‌های داخلی و ضدسرقت و تجهیزات آشپزخانه در استان البرز و تهران با بیش از ۱۵ سال تجربه.',
}

const updateMetaTag = (id, selectorAttr, selectorValue, content) => {
  if (typeof document === 'undefined' || !content) return

  const element = document.getElementById(id) || document.querySelector(`meta[${selectorAttr}="${selectorValue}"]`)
  if (element) {
    element.setAttribute('content', content)
  }
}

router.afterEach((to) => {
  if (typeof document === 'undefined') return

  const meta = to.meta || {}
  const title = meta.title || defaultMeta.title
  const description = meta.description || defaultMeta.description
  const ogTitle = meta.ogTitle || title
  const ogDescription = meta.ogDescription || description
  const normalizedPath = to.path !== '/' && to.path.endsWith('/') ? to.path.slice(0, -1) : to.path
  const url = `${SITE_URL}${normalizedPath === '/' ? '/' : normalizedPath}`

  document.title = title

  updateMetaTag('meta-description', 'name', 'description', description)
  updateMetaTag('meta-og-title', 'property', 'og:title', ogTitle)
  updateMetaTag('meta-og-description', 'property', 'og:description', ogDescription)
  updateMetaTag('meta-og-url', 'property', 'og:url', url)
  updateMetaTag('meta-twitter-title', 'name', 'twitter:title', meta.twitterTitle || title)
  updateMetaTag('meta-twitter-description', 'name', 'twitter:description', meta.twitterDescription || description)
  updateMetaTag('meta-twitter-url', 'name', 'twitter:url', url)

  const canonicalLink = document.getElementById('canonical-link') || document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', url)
  }
})

export default router
