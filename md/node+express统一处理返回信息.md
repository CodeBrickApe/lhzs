日常开发中前端在和后端的交互时，固定的HTTP状态码很难满足庞大业务需求，因此接口统一的API返回格式是十分有必要的，能够大大降低调用方(client)的开发成本。
本文主要讲解了在Node.js + Express框架下的接口返回结果设计。

## 定义返回JSON格式

``` javascript
{
  // 返回状态码
  "code":integer,
  // 返回信息描述
  "message":string,
  // 返回数据
  "data":object,
  // 返回时间
  "timestamp":integer
}
```

## 定义状态码枚举类

在ResultCode.js，枚举常用的状态码，状态码和信息就会一一对应，比较好维护。

``` javascript
class ResultCode {

  /* 业务码code */
  code;
  /** 信息说明 */
  desc;

  constructor(code, desc) {
    this.code = code;
    this.desc = desc;
  }

  static SUCCESS = new ResultCode(200, '成功');
  static FAILED = new ResultCode(500, '失败');
  static VALIDATE_FAILED = new ResultCode(400, '参数校验失败');
  static API_NOT_FOUNT = new ResultCode(404, '接口不存在');
  static API_BUSY = new ResultCode(700, '操作过于频繁')

}

module.exports = ResultCode
```

## 定义返回体类

Result.js中，返回体类Result中增加常用的静态方法，使得业务处理代码简洁。
引入ResultCode.js的状态码

``` javascript
const ResultCode = require('./BaseResultCode');
class Result {

  /** 返回状态码 */
  code;
  /**  返回信息描述 */
  message;
  /**  返回数据 */
  data;
  /**  返回时间 */
  timestamp;

  /**
   * 
   * @param code {number} 返回code
   * @param message {string} 返回消息
   * @param data {any} 返回具体对象
   */
  constructor(code, message, data, total) {
    this.code = code;
    this.message = message;
    this.data = data;
    this.timestamp = Date.now();
  }

  /**
   * 成功
   * @param data {any} 返回对象
   * @return {Result}
   */
  static success (data) {
    return new Result(ResultCode.SUCCESS.code, ResultCode.SUCCESS.desc, data);
  }

  /**
   * 失败
   */
  static fail (errData) {
    return new Result(ResultCode.FAILED.code, ResultCode.FAILED.desc, errData);
  }

  /**
   * 参数校验失败
   */
  static validateFailed (param) {
    return new Result(ResultCode.VALIDATE_FAILED.code, ResultCode.VALIDATE_FAILED.desc, param);
  }

  /**
   * 拦截到的业务异常
   * @param Exception {Exception} 业务异常
   */
  static abnormal (Exception) {
    return new Result(Exception.code, Exception.message, null);
  }
  /**
    * 自定义状态参数
    */
  static customState (code, message, data) {
    return new Result(code, message, data);
  }
}

module.exports = Result

```

## Result实体返回测试

``` javascript
module.exports = app => {
  const Result = require('../../utils/Result')
  
  // 记录信息
  app.post('/portal/api/visit', async (req, res) => {
      // 返回成功信息 
      res.send(Result.success())
  })
}
``` 