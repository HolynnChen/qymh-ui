import Vue from 'vue'
import HighLight from 'highlight.js'
import Swiper from 'swiper'
import MobileSelect from 'mobile-select'
import MeScroll from 'mescroll.js'

const Tree=Object.create(null)

Tree.install=(Vue:any)=>{
  Vue.prototype.$tree={
    HighLight:HighLight,
    Swiper:Swiper,
    MobileSelect:MobileSelect,
    MeScroll:MeScroll
  }
}

Vue.use(Tree)