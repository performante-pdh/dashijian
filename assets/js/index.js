var layer = layui.layer

// 点击按钮，实现退出功能
$('#btnLogout').on('click', function() {
  // 提示用户是否确认退出    获得索引 防止关闭错误
  layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
    //do something
    // 1. 清空本地存储中的 token
    localStorage.removeItem('token')
    // 2. 重新跳转到登录页面
    location.href = '/login.html'

    // 关闭 confirm 询问框
    layer.close(index)
  })
})