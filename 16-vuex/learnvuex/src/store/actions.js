export default{
  // context 上下文
  aUpdateInfo(context, payload) {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('changeInfo')
        resolve('我是执行后返回的data')
      }, 100);
    }
    )

  }
}