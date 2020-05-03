<template>
  <div class="container">
    <div class="row">
        <div clas="col-xs-12">
         
            <button @click="pageStatus='appQuote'">Quote</button>
            <button @click="pageStatus='appAuthor'">Author</button>
            <button @click="pageStatus='appNew'">New</button>

            <p> {{ pageStatus }} </p>

            <!--
            <app-quote>
                <h2 slot="title">The Quote</h2>
                <p>A wonderful Quote !</p>
            </app-quote>

            <app-author>
                <h2 slot="title">The Author</h2>
                <p>A wonderful Author !</p>
            </app-author>

            <app-new>
                <h2 slot="title">The New</h2>
                <p>A wonderful New !</p>
            </app-new>
            -->


            <keep-alive>
              <component :is="pageStatus">
                <p>...</p>
              </component>

            </keep-alive>
            
        </div>
    </div>

  </div>
</template>

<script>

import Quote from './components/Quote';
import Author from './components/Author';
import New from './components/New';

export default {
  data: function() {
    return {
      quoteTitle : "The quote",
      pageStatus : "appQuote"
    }
  },
  components:  {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New,
  }

}
</script>

<style>

    h2 {
        color : red;
    }

</style>
