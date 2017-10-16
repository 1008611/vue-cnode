<template>
  <div class="detail">
    <mu-appbar :title="info.title">
      <mu-icon-button icon=":fa fa-close" slot="left" @click="goback"/>
      <mu-icon-button icon=":fa fa-share" slot="right"/>
    </mu-appbar>

    <mu-card>
      <mu-card-title :title="info.title" subTitle=" "/>
      <mu-card-header :title="info.author.loginname" subTitle="">
        <mu-avatar :src="info.author.avatar_url" slot="avatar"/>
      </mu-card-header>
      <mu-card-text v-html="info.content"></mu-card-text>
    </mu-card>

    <mu-list>
      <mu-sub-header>{{replies.length}} 条评论</mu-sub-header>
      <template v-for="(item,index) in replies">
        <mu-list-item :title="item.author.loginname">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>

          <mu-flat-button v-if="item.ups.length>0" :label="item.ups.length" icon=":fa fa-thumbs-up" slot="right"/>

          <mu-card>
            <mu-card-text v-html="item.content"></mu-card-text>
          </mu-card>
        </mu-list-item>
        <mu-divider/>
      </template>
    </mu-list>

  </div>
</template>

<script>
  import api from '../api/index'

  export default {
    name: '',
    data() {
      return {
        id: '',
        info: {},
        replies: []
      }
    },
    created() {
      this.id = this.$route.params.id
      console.log('获取到的 ID：' + this.id)
      this.getNewsDetail()

    },

    methods: {
      goback() {
        this.$router.go(-1)
      },
      getNewsDetail() {
        let self = this
        api.getTopicsDetails(self.id).then((response) => {
          console.log(response)
          self.info = response.data.data
          self.replies = response.data.data.replies
        })
      },

    }
  }
</script>

<style lang="less">

  .detail{
    .mu-card-text {
      padding: 5px 16px;
      img {
        width: 100%;
      }
    }

    .mu-card {
      margin-top: 15px;
    }

    .mu-item-right {
      margin-top: -10px;
    }

    .mu-icon {
      /*float: right;*/
      font-size: 18px;
    }
  }

</style>
