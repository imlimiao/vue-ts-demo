import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ResizeMixin'
})

export default class extends Vue {
  minxMsg: string = "我是被混合的，我在这声明了变量"
  minxFun(val: any) {
    console.log(`我是被继承的，嘿嘿～～～${val}`);
  }
}