

在css中，可以使用cursor属性来改变鼠标的样式。

cursor属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状

## css 设置
```
*{
    cursor:url(../images/shubiao.ico),auto;
}
```
注意：

图片大小最好是32*32的大小
Css中的cursor属性不仅仅需要将url（）书写正确，还需要填写一个备用样式。 cursor:url('图片地址'),备用选项;。 缺一不可

## cursor的属性介绍

|属性  | 样式 |
|--|--|
| default |默认 |
| text | 文字/编辑 |
| auto | 自动 |
| pointer, hand(hand是IE专有) | 手形 |
| move | 可移动对象|
| not-allowed| 不允许 |
| no-drop| 无法释放 |
| wait | 等待/沙漏 |
| help | 帮助 |
| crosshair | 十字准星 |
| n-resize | 向上改变大小(North) |
| s_resize 与n-resize效果相同 | 向下改变大小(South) |
| w-resize| 向左改变大小(West) |
| e-resize 与w-resize效果相同| 向右改变大小(East)|
| nw-resize | 向左上改变大小（NorthWest）|
| sw-resize | 向左下改变大小（SouthWest）|
| ne-resize 与sw-resize效果相同 | 向右上改变大小（NorthEast）|
| se-resize 与nw-resize效果相同 | 向右下改变大小（SouthEast）|
| url('光标地址') | 自定义光标 |

## 鼠标指针图片资源

