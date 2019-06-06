<template>
    <dl>
        <input type="text" 
          @keyup.enter="(e) => {
            addEvent({id: item.id, val: e.target.value.trim()})
            openText = false
          }" 
          :class="['adds', {'isShow': openText === true}]">
        <dt>
          <h2>{{item.title}}</h2>
          <span @click="() => {
            openText = true
            }">+</span>
        </dt>
        <dd>
          <template v-if="item.children.length">
            <li v-for="(val, i) in item.children"  :key="i" @click="changeDd(item.state, val.title, i, val.id, item.id)">
              <i :style="{border: (item.state === 0 ? '3px solid red' : item.state === 1 ? '3px solid yellow' : item.state === 2 ? '3px solid blue' : '3px solid green')}">
              </i>
              <span>{{val.title}}</span>
            </li>
          </template>
        </dd>
      </dl>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ItemDl',
  props: ['item'],
  data () {
    return {
      openText: false
    }
  },
  methods: {
    ...mapMutations([
			'addEvent'
    ]),
    changeDd(state, title, i, id, itemid) {
      console.log(state, title, i, id, itemid)
      //当前状态， 当前文字，当前下标
      this.$emit('openMaskFn', true)
      this.$emit('openSolid', state)
      this.$emit('chooseVal', title)
      this.$emit('chooseIndex', i)
      this.$emit('chooseOldId', {id, itemid})
    }
  }
}
</script>

<style>
.isShow {
  display: block !important;
}
dl{
  position: relative;
}
.adds{
  display: none;
  position: absolute;
  top: -44px;
  height: 44px;
  width: 100%;
}
dd li i{
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%; 
}
dd li i b {
  display: none;
}

</style>
