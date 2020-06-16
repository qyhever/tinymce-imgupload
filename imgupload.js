(function () {
  function createFileInput(fn) {
    var input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.onchange = function(e) {
      var file = e.target.files[0]
      fn && fn(file)
    }
    input.click()
    input.remove()
  }
  // 创建一个文件选择的命令
  function commandRegister(editor) {
    editor.addCommand('mceImageUpload', function() {
      createFileInput(function(file) {
        // 对外暴露上传回调
        editor.settings.imageSelectorCallback(file, success)
        function success(url) {
          editor.insertContent(`<img src="${url}" alt="加载失败" style="max-width: 100%;height: auto;" />`)
        }
      })
    })
  }

  function componentRegister(editor) {
    editor.addButton('imgupload', {
      title: '上传图片',
      icon: 'image',
      // 触发命令
      cmd: 'mceImageUpload'
      // 指定图片地址
      // image : '/img/upload.png'
    })
  }

  window.tinymce.PluginManager.add('imgupload', function(editor) {
    componentRegister(editor)
    commandRegister(editor)
  })
})()
