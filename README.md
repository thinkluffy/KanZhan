KanZhan
=======
***

使用方法
-------

请确保你的Mac机器和手机在同一个局域网中。

### 1, 查看Mac机器IP地址
+ 1, 打开终端（terminal）
+ 2, 执行命令 ifconfig

```
$ ifconfig
lo0: flags=8049<UP,LOOPBACK,RUNNING,MULTICAST> mtu 16384
	options=3<RXCSUM,TXCSUM>
	inet6 ::1 prefixlen 128
	inet 127.0.0.1 netmask 0xff000000
	inet6 fe80::1%lo0 prefixlen 64 scopeid 0x1
	nd6 options=1<PERFORMNUD>
gif0: flags=8010<POINTOPOINT,MULTICAST> mtu 1280
stf0: flags=0<> mtu 1280
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=10b<RXCSUM,TXCSUM,VLAN_HWTAGGING,AV>
	ether 3c:07:54:14:62:4d
	inet6 fe80::3e07:54ff:fe14:624d%en0 prefixlen 64 scopeid 0x4
	inet 192.168.1.106 netmask 0xffffff80 broadcast 10.64.43.127
	nd6 options=1<PERFORMNUD>
	media: autoselect (1000baseT <full-duplex>)
	status: active
en1: flags=8923<UP,BROADCAST,SMART,PROMISC,SIMPLEX,MULTICAST> mtu 1500
	ether e4:ce:8f:64:a3:27
	nd6 options=1<PERFORMNUD>
	media: autoselect (<unknown type>)
	status: inactive
en2: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=60<TSO4,TSO6>
	ether d2:00:12:65:71:40
	nd6 options=1<PERFORMNUD>
	media: autoselect <full-duplex>
	status: inactive
fw0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 4078
	lladdr a4:b1:97:ff:fe:26:57:14
	nd6 options=1<PERFORMNUD>
	media: autoselect <full-duplex>
	status: inactive
p2p0: flags=8802<BROADCAST,SIMPLEX,MULTICAST> mtu 2304
	ether 06:ce:8f:64:a3:27
	media: autoselect
	status: inactive
```
如上，IP为192.168.1.106

### 2, 启动网页服务器

+ 1, 打开终端（terminal）
+ 2, 路径切换到Tools
+ 3, 执行命令 ./local_server.sh

```
$ ./local_server.sh 
Serving HTTP on 0.0.0.0 port 8000 ...
```
 
### 3, 在Chrome上演示

+ 1, 打开Chrome，访问http://__[IP]__:8000/index.html
    
    IP填入在步骤1中查询到的IP。

+ 2, 在打开的网页上右击，选择"Inspect Eelment"
+ 3, 在调试界面中，点击右上角的"Show Console"按钮，调出console
+ 4, 在console中，选择Elemulation面板，Device选成App iPhone 5, 然后点击Emulate按钮
+ 5, 点击右上角的"undock into separate window"按钮，以获得更好的演示效果(可选) 

### 4, 在iPhone上演示

+ 1, 在iPhone上打开Safari，访问http://__[IP]__:8000/index.html

    IP填入在步骤1中查询到的IP。
    
+ 2, 点击Safari的分享按钮，然后选择添加到桌面（可选）


***
#__Have Fun!__





