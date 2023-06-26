## 问题

new Date()方法，其他浏览器都能接受各种时间格式数据如：yyyy-MM-dd hh:mm:ss，[safari](https://so.csdn.net/so/search?q=safari&spm=1001.2101.3001.7020)浏览器接受的时间如果是小时时间，那前面的年月日只能用/隔开(yyyy/MM/dd hh:mm:ss)，否则计算的为无效数据 ，显示：`Invalid Date`。

## 解决

在new Date(‘yyyy-MM-dd HH:mm:ss’)格式化前需要先把[字符串](https://so.csdn.net/so/search?q=字符串&spm=1001.2101.3001.7020)转化为Safari支持的格式，可以是yyyy/MM/dd HH:mm:ss或yyyy-MM-ddTHH:mm:ss或其他

1. 改变时间格式

```javascript
new Date('2018-11-11 00:00:00'.replace(/-/g, "/"))
new Date('2018-11-11 00:00:00'.replace(/ /g,"T"))
```

- 注：由于IE8上根本不支持`-`分割的日期，所以这里建议用`/`分割日期字符串，你也可以不考虑IE8

2. 改变Date原型链方法

- 在vue或者react项目中

```javascript
// 重写Date对象
// 如果是vue或者react项目  在入口文件处写下方代码
window.OldDate = window.Date
var bind = Function.bind
var unbind = bind.bind(bind)
function instantiate (constructor, args) {
  return new (unbind(constructor, null).apply(null, args))()
}

window.Date = (function (Date) {
  Object.setPrototypeOf(MyDate, Date)
  MyDate.prototype = Date.prototype
  return MyDate
  function MyDate () {
    let arg = arguments[0]
    if (Object.prototype.toString.call(arg) === '[object String]') {
      arguments[0] = arg = arg.replace(/-/g, '/')
      arguments[0] = arg.replace(/T/, ' ')
      console.log(arguments[0])
    }
    return instantiate(Date, arguments)
  }
}(window.OldDate))
```

- 在其他项目中

这段代码应该放在所有new Date操作之前去执行，如html的`<head>`中

```javascript
/**
     * 在Safari和IE8上执行 new Date('2017-12-8 11:36:45'); 会得到Invalid Date
     * 本函数重写默认的Date函数，以解决其在Safari，IE8上的bug
     */
    Date = function (Date) {
      MyDate.prototype = Date.prototype;
      return MyDate;

      function MyDate() {
        // 当只有一个参数并且参数类型是字符串时，把字符串中的-替换为/
        if (arguments.length === 1) {
          let arg = arguments[0];
          if (Object.prototype.toString.call(arg) === '[object String]' && arg.indexOf('T') === -1) {
            arguments[0] = arg.replace(/-/g, "/");
            // console.log(arguments[0]);
          }
        }
        let bind = Function.bind;
        let unbind = bind.bind(bind);
        return new (unbind(Date, null).apply(null, arguments));
      }
    }(Date);
```

