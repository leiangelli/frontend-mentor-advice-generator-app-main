import '@/sass/style.scss'

import { defineComponent } from 'vue'
import AdviceCard from '@/components/AdviceCard.vue'

export default defineComponent({
  setup () {
    return () => {
      return <AdviceCard />
    }
  }
})
