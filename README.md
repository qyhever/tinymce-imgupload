# tinymce-imgupload

A image upload plugin for tinymce.

## Installation

```
npm install tinymce-imgupload --save
```

## Example

When using with webpack:
In the file that initialed tinymce
``` js
import 'tinymce-imgupload'
window.tinymce.init({
  selector: '#tinymceEditor',
  plugins: ['imgupload'],
  toolbar: ['imgupload'],
  imageSelectorCallback(file, success) {
    // mock the file upload
    const formData = new FormData()
    formData.append('file', file)
    axios({
      method: 'post',
      url: 'xxx',
      data: formData
    }).then(res => {
      if (res.success) {
        success(res.url)
      } else {
        console.log('upload filed!')
      }
    }).catch(err => {
      console.log('upload filed!', err)
    })
  }
})
```

## License

None (public domain)

