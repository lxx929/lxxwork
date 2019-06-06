<template>
<div>
	<h1 @click="openMaster">+</h1>
  <div class="home-wrap">
    <div class="wrap">
      <ItemDl v-for="item in list"
				:key="item.id" :item="item" 
				@openMaskFn="(data) => {open = data}" 	
				@openSolid="(data) => {stateSolid = data; oldState = data}"
				@chooseVal="(data) => {val = data}"
				@chooseIndex="(data) => {liIndex = data}"
				@chooseOldId="(data) => {oldId = data.id; itemId = data.itemid}"
				/>
    </div>
		<div class="masker" :class="{'active': open === true}">
			<p>
				<span>取消</span>
				<span @click="() => {changeState({states: stateSolid, id: indexs, oldState, liIndex, val, oldId, itemId}); open = false}">保存</span>
			</p>
			<li v-for="vals in list" :key="vals.id">
				<i
					:style="{border: (vals.state === 0 ? '3px solid red' : vals.state === 1 ? '3px solid yellow' : vals.state === 2 ? '3px solid blue' : '3px solid green')}"
					@click="stateSolid = vals.state; indexs = vals.id"
					>
					<b
						:class="{isSolide: stateSolid === vals.state}" 
						:style="{background: (vals.state === 0 ? 'red' : vals.state === 1 ? 'yellow' : vals.state === 2 ? 'blue' : 'green')}"></b>
				</i>
				<span>{{vals.title}}</span>
			</li>
		</div>
  </div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ItemDl from '@/components/Item'
export default {
  name: "Home",
  data() {
    return {
			open: false,
			stateSolid: null,
			indexs: null,
			oldState: null,
			val: null,
			liIndex: null,
			oldId: null,
			itemId: null
		};
  },
  computed: {
    ...mapGetters(["list"])
	},
	components: {
		ItemDl
	},
	methods: {
		...mapMutations([
			'changeState'
		]),
		openMaster() {
			this.open = !this.open;
		}
	
	}
};
</script>

<style>
.isSolide{
  position: absolute;
  z-index: 1;
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 50%;
  margin-top: 50%;
  transform: translate(-50%, -50%);
  display: block !important;
}
.active{ 
	display: block !important;
}
h1{
	height: 60px;
	text-align: right;
	padding: 0 12px;
}
.home-wrap{
	display: flex;
}
.masker{
	display: none;
	width: 300px;
}
.masker p{
	padding: 0 12px;
	height: 44px;
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.masker li i{
	position: relative;
	display: inline-block;
	width: 20px;
	height: 20px;
	border-radius:50%; 
}
.masker li i b{
	display: none;
	border-radius: 50%;
}
.wrap {
	flex: 1;
  display: flex;
  flex-wrap: wrap;
}
dl {
  height: 300px;
  width: 49%;
  border: 1px solid skyblue;
}

dl dt {
  padding: 0 12px;
  height: 42px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
