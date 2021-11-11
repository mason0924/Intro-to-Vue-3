app.component('product-details', {
  props: {
    details: {
      type: String
    }
  },
  template:
  /*hmtl*/
  `<li v-for="detail in details">{{ detail }}</li>`,
  
})