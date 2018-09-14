import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    news: [
      {'title': 'The title of the News',
        'body_slug': 'As you can see, TypeScript has evolved to the standard and has become a standard for large projects. ' +
          'It provides a statically typed system that helps us check for bugs as early as possible. At the same time, it provid'
      },
      {
        'title': 'The test',
        'body_slug': 'test'
      }
    ]
  }
})

