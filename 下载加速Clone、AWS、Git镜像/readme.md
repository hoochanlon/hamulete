### git下载

使用淘宝源加快国内git下载

https://npm.taobao.org/mirrors/git-for-windows/

### host

将以下host复制进`C:\Windows\System32\drivers\etc\hosts`，再使用命令行输入`ipconfig /flushdns`刷新dns缓存。目的：此host只为解除红色镰刀锤对GitHub（asw、ssh）下载及克隆的网络限制干扰

详情 [关于Github克隆及下载过慢的解决方案](https://hoochanlon.github.io/note/2019/10-01/4ee4554a.html)

```
## GitHub Start

192.30.253.112 github.com
192.30.253.113 github.com
151.101.184.133 assets-cdn.github.com
151.101.185.194 github.global.ssl.fastly.net 


192.30.253.112 github.com
192.30.253.113 github.com
192.30.253.118 gist.github.com
151.101.185.194 github.global.ssl.fastly.net
151.101.129.194 github.global.ssl.fastly.net
151.101.65.194 github.global.ssl.fastly.net
151.101.1.194 github.global.ssl.fastly.net
151.101.193.194 github.global.ssl.fastly.net
151.101.77.194 github.global.ssl.fastly.net
151.101.229.194 github.global.ssl.fastly.net
151.101.113.194 github.global.ssl.fastly.net
151.101.196.133 assets-cdn.github.com
151.101.24.133 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
151.101.112.133 assets-cdn.github.com

151.101.112.133 avatars0.githubusercontent.com
151.101.112.133 avatars1.githubusercontent.com
151.101.184.133 avatars2.githubusercontent.com
151.101.12.133 avatars3.githubusercontent.com
151.101.12.133 avatars4.githubusercontent.com
151.101.184.133 avatars5.githubusercontent.com
151.101.184.133 avatars6.githubusercontent.com
151.101.184.133 avatars7.githubusercontent.com
151.101.12.133 avatars8.githubusercontent.com

151.101.184.133 raw.githubusercontent.com
151.101.112.133 gist.githubusercontent.com
151.101.184.133 cloud.githubusercontent.com
151.101.112.133 camo.githubusercontent.com
52.216.227.168 github-cloud.s3.amazonaws.com

192.30.253.112 github.com
185.199.108.153 assets-cdn.github.com
151.101.185.194 github.global.ssl.fastly.net
140.82.113.10 codeload.github.com

## GitHub End
```
附加速小工具：http://www.toolzl.com/tools/githubjiasu.html

<!--

**说在前面：这些问题都可以使用VPN直接解决，但由于红朝特殊环境，找到合适性价比的VPN又是一件比较困难的事，更不用说免费的了，而且免费的基本都赶尽杀绝了...**

## Github 下载过慢处理（releases）

关于releases，它可以是压缩包如zip、7z等格式；也可以是软体程式，比方说：exe、msi

1. 打开[www.ipaddress.com](https://www.ipaddress.com/)，查询以下链接的DNS解析地址 

    ```
    github.com 
    assets-cdn.github.com 
    github.global.ssl.fastly.net

    # 下载链接 raw.githubusercontent.com 的实际地址
    codeload.github.com 
    ```

2. 记录下查询到的IP地址，并添加进入`C:\Windows\System32\drivers\etc\Hosts`文件
3. 运行`cmd`输入`ipconfig /flushdns` 指令刷新系统DNS

## Git Clone 克隆过慢改进

### 浅克隆

git clone 默认会下载项目的完整历史版本，若只关心最新的代码，而不关心之前的历史，可以使用浅复制功能：

```
$ git clone --depth=1  https://github.com/你的用户名/你的repo.git
```

`--depth=1` 表示只下载最近一次的版本，使用浅复制可以大大减少下载的数据量，这样即使在红色网络环境下，也可以快速的获得代码；若之后想获取完整历史信息，可以使用指令 `$ git fetch --unshallow`

### 代理方案

```
# 代理设置
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
# 取消代理
git config --global --unset https.proxy 'socks5://127.0.0.1:1080'
git config --global --unset http.proxy 'socks5://127.0.0.1:1080'
```




-->
