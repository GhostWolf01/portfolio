Vue.component('tag-open', {
  props: ['nameTag'],
  template: `<section v-on:click="$emit('click-tag')">
			<div class="label">
			<h2>{{ nameTag }}</h2>
			</div>
		</section>`
})
Vue.component('item-gods', {
  props: ['img', 'name',	'price'],
  data () {
    return {
      style: {
        background: 'url(' + this.img + ')',
        'background-repeat': 'no-repeat',
        'background-size': '100% 100%'
      }
    }
  },
  computed: {
    amount: function () {
      if (app.basket.basketItems[this.basketItemIndex] != undefined) {
        return app.basket.basketItems[this.basketItemIndex].amount
      }
      return 0
    },
    basketItemIndex: function () {
      if (app.basket.basketItems.length > 0) {
        for (let item = 0; item < app.basket.basketItems.length; item++) {
          if (this.name == app.basket.basketItems[item].name) {
            return item
          }
        }
      }
      return null
    }
  },
  methods: {
    amountAdd: function () {
      if (this.amount == 0) {
        app.basket.basketItems.push({
          name: this.name,
          amount: 0,
          price: this.price
        })
      }
      app.basket.basketItems[this.basketItemIndex].amount++
      app.basket.basketSumm += Number(this.price)
    },
    amountMinus: function () {
      if (this.amount > 0) {
        app.basket.basketItems[this.basketItemIndex].amount--
        app.basket.basketSumm -= Number(this.price)
        if (this.amount == 0) {
          const array = []
          for (let i = 0; i < app.basket.basketItems.length; i++) {
            if (i == this.basketItemIndex) {
              continue
            }
            array.push(app.basket.basketItems[i])
          }
          app.basket.basketItems = array
        }
      } else {

      }
    }
  },
  template: `<section class="item-goods" >
		<div v-bind:style="style" class="item-bg">
			<div class="label">
				<h2 class="name-item"> {{ name }}</h2>
				<p class="price-item">$ {{ price }} </p>
			</div>
		</div>
		<div class="amount">
			<p>amount</p>
			<img class="minus-item" src="minus.png" v-on:click="amountMinus()"/>
			<p class="number-item">{{ amount }}</p>
			<img class="add-item" src="addItem.png" v-on:click="amountAdd()"/>
		</div>
	</section>`
})
Vue.component('shop-list-item', {
  props: ['name', 'price'],
  data () {
    return {
    }
  },
  computed: {
    amount: function () {
      if (app.basket.basketItems[this.basketItemIndex] != undefined) {
        return app.basket.basketItems[this.basketItemIndex].amount
      }
      return 0
    },
    basketItemIndex: function () {
      if (app.basket.basketItems.length > 0) {
        for (let item = 0; item < app.basket.basketItems.length; item++) {
          if (this.name == app.basket.basketItems[item].name) {
            return item
          }
        }
      }
      return null
    },
    summPrice: function () {
      return this.amount * this.price
    }
  },
  methods: {
    amountAdd: function () {
      app.basket.basketItems[this.basketItemIndex].amount++
      app.basket.basketSumm += Number(this.price)
    },
    amountMinus: function () {
      if (this.amount > 0) {
        app.basket.basketItems[this.basketItemIndex].amount--
        app.basket.basketSumm -= Number(this.price)
        if (this.amount == 0) {
          const array = []
          for (let i = 0; i < app.basket.basketItems.length; i++) {
            if (i == this.basketItemIndex) {
              continue
            }
            array.push(app.basket.basketItems[i])
          }
          app.basket.basketItems = array
          this.$el.innerHTML = ''
          if (app.basket.basketItems.length == 0) {
            this.$el.outerHTML = '<tr style="height: 0px;"></tr>'
            this.$destroy()
          } else {
            this.$el.outerHTML = ''
            this.$destroy()
          }
        }
      } else {

      }
    }
  },
  template: `<tr><td class="name-goods-shop-list"><p>{{name}}</p></td>
	<td class="amount-shop-list">
	<img class="minus-item" src="minus.png" v-on:click="amountMinus()"/>
	<p class="number-item">{{amount}}</p>
	<img class="add-item" src="addItem.png" v-on:click="amountAdd()"/>
	</td>
	<td class="price-shop-list"><p>$ {{summPrice}}</p></td></tr>`
})
window.onunload = function (event) {
  app.$destroy()
}
let godsApp, basketApp
const app = new Vue({
  el: '#app',
  data: {
    basket: {
      basketSumm: 0,
      basketItems: []
    },
    basketOpen: false,
    tagOpen: false,
    tagName: '',
    gods: {}
  },
  beforeDestroy: function () {
    document.cookie = 'basket_cookie = ' + JSON.stringify(this.basket) + '; max-age=' + (3600 * 24 * 7)
  },
  mounted: function () {
    const arrayCookies = document.cookie.split(';')
    for (let i = 0; i < arrayCookies.length; i++) {
      const arrayCookie = arrayCookies[i].split('=')
      if (arrayCookie[0] == 'basket_cookie') {
        if (arrayCookie[1].basketSumm != 0) {
          this.basket = JSON.parse(arrayCookie[1])
        }
      }
    }
  },
  methods: {
    clickTag: function (tags) {
      this.tagName = tags
      this.tagOpen = true
      axios.get('./Gods/gods.json')
        .then(function (response) {
          app.gods = response.data[tags].items
        })
        .catch(function (error) {
          console.log(error)
        })
        .finally(function () {
          let template = ''
          for (const item of app.gods) {
            template += '<item-gods img="' + item.img + '" name="' + item.name + '" price="' + item.price + '" ></item-gods>\n'
          }
          godsApp = new Vue({
            parent: app,
            el: '#godsApp',
            data () {
              return {

              }
            },
            computed: {
              tagName: function () {
                return tags
              },
              basketOpen: function () {
                return app.basketOpen
              },
              tagOpen: function () {
                return app.tagOpen
              }
            },
            template: `<article v-show="tagOpen && !basketOpen" id="godsApp" class="open-goods" >
						<section class="goods">` + template + `</section>
						</article>`
          })
        })
    },
    clickBasket: function () {
      this.tagName = 'Your Cart'
      this.basketOpen = true
      let template = ''
      if (this.basket.basketItems.length > 0) {
        for (const item of this.basket.basketItems) {
          template += '<shop-list-item name="' + item.name + '" price="' + item.price + '" ></shop-list-item>'
        }
      } else {
        template = '<tr style="height: 0px;"></tr>'
      }
      basketApp = new Vue({
        parent: app,
        el: '#basketApp',
        data () {
          return {

          }
        },
        computed: {
          basket: function () {
            return app.basket
          },
          basketOpen: function () {
            return app.basketOpen
          }
        },
        methods: {
          clearAll: function () {
            app.basket.basketItems = []
            app.basket.basketSumm = 0
            for (let i = this.$children.length - 1; i > 0; i--) {
              this.$children[i].$el.innerHTML = ''
              this.$children[i].$el.outerHTML = ''
              this.$children[i].$destroy()
            }
            this.$children[0].$el.innerHTML = ''
            this.$children[0].$el.outerHTML = '<tr style="height: 0px;"></tr>'
            this.$children[0].$destroy()
          },
          buy: function () {
            alert('Thanks for your purchase\n Summ: $' + this.basket.basketSumm)
          },
          closeTag: function () {
            app.closeTag()
          }
        },
        template: `<article  v-show="basketOpen" id="basketApp" class="open-goods" v-bind:class="{'open-shop': basketOpen}">
				<section class="goods">
					<section class="item-goods">
						<table class="shop-list">
							<thead>
								<tr><td class="name-goods-shop-list">Shop List</td><td class="amount-shop-list">Amount</td><td class="price-shop-list">Price</td></tr>
							</thead>
							<tbody>
							` + template + `
							</tbody>
							<tfoot>
								<tr><td><button class="clear-all" v-on:click="clearAll()">Clear All</button></td><td>Summ $ {{basket.basketSumm}}</td></tr>
							</tfoot>
						</table>
						<div class="button-block">
							<button class="clear-all" v-on:click="closeTag()"><p>Continue shopping</p></button>
							<button class="clear-all" v-on:click="buy()"><p>Buy</p></button>
						</div>
					</section>
				</section>
			</article>`
      })
    },
    closeTag: function () {
      if (this.basketOpen) {
        this.basketOpen = false
        this.tagName = godsApp.tagName
      } else {
        if (this.tagOpen) {
          this.tagOpen = false
        }
      }
    }
  }
})
