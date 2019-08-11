const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《计算机导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《ES6标准入门》',
        date: '2015-9',
        price: 78.00,
        count: 1
      },
      {
        id: 3,
        name: '《Vue入门》',
        date: '2018-7',
        price: 88.00,
        count: 1
      },
      {
        id: 4,
        name: '《C++》',
        date: '2000-9',
        price: 55.00,
        count: 1
      }
    ],


  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  computed: {
    finallPrice() {
      let result = 0;
      for(let n in this.books){
        result += this.books[n].price * this.books[n].count;
      }
      return result;
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeHandle(index) {
      this.books.splice(index,1)
    }
  }
})