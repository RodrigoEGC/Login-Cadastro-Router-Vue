<template>
  <div class="cadastrar">
    <p>Oi</p>
  </div>
</template>
<!--<template>-->
<!--  <div class="container">-->
<!--    <form>-->
<!--      <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--        <h1>Minha Biblioteca de Jogos</h1>-->
<!--        <div class="form-group">-->
<!--          <label for="product-name">Nome do Jogo-->
<!--            <input type="text" id="product-name"  v-model="product.name" placeholder="Exemplo: biohazard" />-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--          <label for="product-date">Data de Lançamento-->
<!--            <input type="date" id="product-date"  v-model="product.date" placeholder="00/00/0000" />-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--          <label for="product-value">Preço do Jogo-->
<!--            <input type="text" id="product-value" v-model="product.value"  placeholder="200" />-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--          <label for="plataforma">Plataformas-->
<!--            <input type="text" id="plataforma" v-model="product.plataform"   />-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="row">-->
<!--        <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--          <label for="playstation">-->
<!--            <input type="radio" id="playstation" value="PlayStation 4" v-model="product.plataform"   />-->
<!--            <span>PlayStation 4</span>-->
<!--          </label>-->
<!--          <label for="xbox">-->
<!--            <input type="radio" id="xbox" value="Xbox One" v-model="product.plataform"   />-->
<!--            <span>Xbox One</span>-->
<!--          </label>-->
<!--          <label for="microsoft">-->
<!--            <input type="radio" id="microsoft" value="Microsoft Windows" v-model="product.plataform"   />-->
<!--            <span>Microsoft Windows</span>-->
<!--          </label>-->
<!--          <label for="nintendo">-->
<!--            <input type="radio" id="nintendo" value="Nintendo Switch" v-model="product.plataform"   />-->
<!--            <span>Nintendo Switch</span>-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <div class="col-xs-12 col-sm-8 col-md-6">-->
<!--          <label for="texto">Descrição-->
<!--            <textarea id="texto" rows=5 class="form-control" v-model="product.description" ></textarea>-->
<!--          </label>-->
<!--        </div>-->
<!--      </div>-->
<!--      <button @click="addProduct()">Salvar</button>-->
<!--    </form>-->
<!--    <div>-->
<!--      <ul>-->
<!--        <li v-for="product of products" v-bind:key="product['.key']">-->
<!--          <div v-if="!product.edit">-->
<!--            {{ product.product.name }}-->
<!--            <div>-->
<!--              <button @click="removeProduct(product['.key'])">Deletar</button>-->
<!--              <button @click="setEditProduct(product['.key'])">Editar</button>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div v-else>-->
<!--            <input type="text" v-model="product.product.name"  />-->
<!--            <input type="date" v-model="product.product.date" />-->
<!--            <input type="text" v-model="product.product.value" />-->
<!--            <input type="text" v-model="product.product.plataform" />-->
<!--            <input type="text" v-model="product.description" />-->
<!--            <button @click="saveEdit(product)">Salvar</button>-->
<!--            <button @click="backEdit(product['.key'])">Voltar</button>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<script>
    // import { productRef } from '../database/firebase'

    export default {
        name: "cadastrar",
        data() {
            return {
                //product: {}
            }
        },
        // firebase: {
        //     products:  productRef
        // },
        // methods: {
        //     addProduct() {
        //         productRef.push({
        //             product: this.product, edit: false
        //         });
        //         this.product = {}
        //     },
        //     setEditProduct(product) {
        //         productRef.child(product).update({
        //             edit: true
        //         })
        //     },
        //     removeProduct(product) {
        //         productRef.child(product).remove()
        //     },
        //     backEdit(product) {
        //         productRef.child(product).update({
        //             edit: false
        //         })
        //     },
        //     saveEdit(product) {
        //         const key = product['.key'];
        //
        //         productRef.child(key).set({
        //             product: {
        //                 name: product.product.name,
        //                 date: product.product.date,
        //                 value: product.product.value,
        //                 plataform: product.product.plataform,
        //                 description: product.description
        //             },
        //             edit: false
        //         })
        //     }
        // }
    }
</script>

<style scoped>

</style>
