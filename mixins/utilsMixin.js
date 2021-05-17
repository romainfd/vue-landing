import smoothscroll from 'smoothscroll-polyfill'

// Safari doesn't support scroll-behavior: smooth | Ref.: https://stackoverflow.com/a/56011281
// kick off the polyfill!
smoothscroll.polyfill()

const utilsMixin = {
  methods: {
    smoothScroll (querySelector) {
      document.querySelector(querySelector).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
export { utilsMixin }
