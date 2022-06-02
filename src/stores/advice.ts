import { defineStore } from 'pinia'

export const adviceStore = defineStore({
  id: 'advice',

  state: () => ({
    list: null
  }),

  actions: {
    async fetch () {
      this.list = null

      const data = await fetch('https://api.adviceslip.com/advice')
      const json = await data.json()

      this.list = json?.slip ?? {}

      return json
    }
  }
})
