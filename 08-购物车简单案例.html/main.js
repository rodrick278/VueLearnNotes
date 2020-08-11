const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '算法导论',
        date: '2020-06',
        price: 85.01,
        count: 1
      },
      {
        id: 2,
        name: 'Linux私房菜',
        date: '2020-07',
        price: 86.00,
        count: 1
      },
      {
        id: 3,
        name: '哈利波特全集',
        date: '2020-08',
        price: 87.00,
        count: 1
      },
      {
        id: 4,
        name: '三体',
        date: '2020-09',
        price: 88.00,
        count: 1
      }
    ]
  },
  methods: {
    plus(index) {
      this.books[index].count++
    },
    min(index) {
      // this.books[index].count===1?alert('数量不可少于1！'):this.books[index].count--
      this.books[index].count--
    },
    del(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      // let priceAll=0;
      // for(book of this.books){
      //   priceAll+=book.count*book.price
      // }
      // return priceAll

      return this.books.reduce((pre, book) => {
        return pre + book.price * book.count
      }, 0)
    }
  },
  // 过滤器
  filters: {
    showPrice(price) {
      return '$' + price.toFixed(2)
    }
  }
});
