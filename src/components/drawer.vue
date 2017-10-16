<template>

  <mu-drawer :open="openLeftMenu" :docked="docked" @close="closeMenu()">
    <div class="drawer-header">
      <mu-list-item title="请登录" disabled class="mt8">
        <mu-avatar slot="left" color="deepOrange300" backgroundColor="purple500">2B</mu-avatar>
      </mu-list-item>

      <mu-flexbox class="mt8">
        <mu-flexbox-item class="flex-demo">
          <mu-flat-button label="我的收藏" icon=":fa fa-star"/>
        </mu-flexbox-item>

        <mu-flexbox-item class="flex-demo">
          <mu-flat-button label="注销" icon=":fa fa-sign-out"/>
        </mu-flexbox-item>
      </mu-flexbox>
    </div>

    <mu-list>
      <mu-list-item :title="item.title" v-for="(item,index) in themeList" :key="index" @click="switchTheme(item.path)">
        <mu-icon slot="right" :value="item.icon"/>
      </mu-list-item>
    </mu-list>

  </mu-drawer>

</template>

<script>
  import api from '../api/index'
  import {bus} from '../common/bus'

  export default {
    name: '',
    data() {
      return {
        themeList: [
          {title:'全部',path:'all',icon:':fa fa-home'},
          {title:'精华',path:'good',icon:':fa fa-star'},
          {title:'分享',path:'share',icon:':fa fa-share'},
          {title:'问答',path:'ask',icon:':fa fa-quora'},
          {title:'招聘',path:'job',icon:':fa fa-bank'},
        ],
        docked: true,
        openLeftMenu: false,
      }
    },
    created() {
      bus.$on('open', res => {
        console.log(res)
        this.openLeftMenu = true
        this.docked = false
      })
    },
    methods: {
      closeMenu() {
        this.openLeftMenu = false
      },

      //去详情页
      switchTheme(v) {
        this.openLeftMenu = false
//        this.$router.push({name: '/Index', params: {tab: v}})
        bus.$emit('tab', v)
      }

    }
  }
</script>

<style lang="less" scoped>
  .drawer-header {
    padding: 5px;
    background-color: #e57373;
    .mt8 {
      margin-top: 8px;
    }
    .mu-flat-button {
      color: #fff;
    }
    .mu-item {
      color: #fff;
    }
  }

</style>
