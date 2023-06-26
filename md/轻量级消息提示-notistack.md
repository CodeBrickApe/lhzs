
# Notistack - 轻量级，适合基础提示的应用场景

notistack 提示消息组件库功能非常简洁，成功、错误、警告、信息这些基本功能外，还有个可与用户交互的提示框，内嵌了一个点击事件的按钮，可让用户在看到提示后，执行一个事件。notistack 样式高度可定制，改几个参数，让提示框符合你的网站风格，一个组件解决所有提示问题。

## 安装

```
npm install notistack --save
```

## 简单使用notistack

注意：如果使用的是 material-ui ThemeProvider，请确保 SnackbarProvider 是它的子项。


```
import { SnackbarProvider } from 'notistack';

<SnackbarProvider>
    <MyApp />
</SnackbarProvider>
```

1. 使用 withSnackbar 导出任何需要发送通知的组件。这样做可以访问两种方法 enqueueSnackbar 和 closeSnackbar，前者可用于发送 snackbar
  
```
import { withSnackbar } from 'notistack';

class MyComponent extends Component {
    handleConnectionLoss = () => {
        this.key = this.props.enqueueSnackbar('You're offline.');
    };

    handleBackOnline = () => {
        this.props.closeSnackbar(this.key);
    };

    render() {
        //...
    };
}

export default withSnackbar(MyComponent);
```

2. （替代）：也可以在功能组件中使用 useSnackbar hook。
  
```
import { useSnackbar } from 'notistack';

const MyButton = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClick = () => {
        enqueueSnackbar('I love hooks');
    };

    return (
        <Button onClick={handleClick}>Show snackbar</Button>
    );
}
```

enqueueSnackbar：将 snackbar 添加到要显示给用户的队列中。它接受两个参数消息和一个选项对象，并返回一个键，用于稍后引用该 snackbar（例如以编程方式关闭它）。

```
const key = this.props.enqueueSnackbar(message, options)
```

closeSnackbar：使用给定的键关闭 snackbar，可以通过不向此功能传递键来立即关闭所有 snackbar。

```
// dismiss all open snackbars
this.props.closeSnackbar()

// dismiss a specific snackbar
this.props.closeSnackbar(key)
```