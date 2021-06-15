<template>
  <span v-if="false"></span>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1560285509-3ebfa70a171d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fGNvcHl3cml0aW5nfGVufDB8fHx8MTYyMjY5NDg0Mw&ixlib=rb-1.2.1&q=80&w=2000',
    },
    title: {
      type: String,
      required: true,
    },
    ogDescription: {
      type: String,
      required: true,
    },
    twitterDescription: {
      type: String,
      required: true,
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.title,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: this.ogDescription,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.image,
        },
        {
          hid: 'og:image:secure_url',
          name: 'og:image:secure_url',
          content: this.image,
        },
        {
          hid: 'og:image:alt',
          name: 'og:image:alt',
          content: this.title,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.twitterDescription,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title,
        },
      ],
    }
  },
}
</script>
