(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{500:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"netty-应用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-应用指南"}},[t._v("#")]),t._v(" Netty 应用指南")]),t._v(" "),a("h2",{attrs:{id:"netty-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-简介"}},[t._v("#")]),t._v(" Netty 简介")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Netty 是一款基于 NIO（Nonblocking I/O，非阻塞 IO）开发的网络通信框架")]),t._v("。")])]),t._v(" "),a("h3",{attrs:{id:"netty-的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-的特性"}},[t._v("#")]),t._v(" Netty 的特性")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("高并发")]),t._v("：Netty 是一款"),a("strong",[t._v("基于 NIO")]),t._v("（Nonblocking IO，非阻塞 IO）开发的网络通信框架，对比于 BIO（Blocking I/O，阻塞 IO），他的并发性能得到了很大提高。")]),t._v(" "),a("li",[a("strong",[t._v("传输快")]),t._v("：Netty 的传输依赖于"),a("strong",[t._v("内存零拷贝")]),t._v("特性，尽量减少不必要的内存拷贝，实现了更高效率的传输。")]),t._v(" "),a("li",[a("strong",[t._v("封装好")]),t._v("：Netty "),a("strong",[t._v("封装了 NIO 操作")]),t._v("的很多细节，提供了易于使用调用接口。")])]),t._v(" "),a("h2",{attrs:{id:"核心组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心组件"}},[t._v("#")]),t._v(" 核心组件")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Channel")]),t._v("：Netty 网络操作抽象类，它除了包括基本的 I/O 操作，如 bind、connect、read、write 等。")]),t._v(" "),a("li",[a("code",[t._v("EventLoop")]),t._v("：主要是配合 Channel 处理 I/O 操作，用来处理连接的生命周期中所发生的事情。")]),t._v(" "),a("li",[a("code",[t._v("ChannelFuture")]),t._v("：Netty 框架中所有的 I/O 操作都为异步的，因此我们需要 ChannelFuture 的 addListener()注册一个 ChannelFutureListener 监听事件，当操作执行成功或者失败时，监听就会自动触发返回结果。")]),t._v(" "),a("li",[a("code",[t._v("ChannelHandler")]),t._v("：充当了所有处理入站和出站数据的逻辑容器。ChannelHandler 主要用来处理各种事件，这里的事件很广泛，比如可以是连接、数据接收、异常、数据转换等。")]),t._v(" "),a("li",[a("code",[t._v("ChannelPipeline")]),t._v("：为 ChannelHandler 链提供了容器，当 channel 创建时，就会被自动分配到它专属的 ChannelPipeline，这个关联是永久性的。")])]),t._v(" "),a("p",[t._v("Netty 有两种发送消息的方式：")]),t._v(" "),a("ul",[a("li",[t._v("直接写入 Channel 中，消息从 ChannelPipeline 当中尾部开始移动；")]),t._v(" "),a("li",[t._v("写入和 ChannelHandler 绑定的 ChannelHandlerContext 中，消息从 ChannelPipeline 中的下一个 ChannelHandler 中移动。")])]),t._v(" "),a("h2",{attrs:{id:"高性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高性能"}},[t._v("#")]),t._v(" 高性能")]),t._v(" "),a("p",[t._v("Netty 高性能表现在哪些方面：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("NIO 线程模型")]),t._v("：同步非阻塞，用最少的资源做更多的事。")]),t._v(" "),a("li",[a("strong",[t._v("内存零拷贝")]),t._v("：尽量减少不必要的内存拷贝，实现了更高效率的传输。")]),t._v(" "),a("li",[a("strong",[t._v("内存池设计")]),t._v("：申请的内存可以重用，主要指直接内存。内部实现是用一颗二叉查找树管理内存分配情况。")]),t._v(" "),a("li",[a("strong",[t._v("串形化处理读写")]),t._v("：避免使用锁带来的性能开销。")]),t._v(" "),a("li",[a("strong",[t._v("高性能序列化协议")]),t._v("：支持 protobuf 等高性能序列化协议。")])]),t._v(" "),a("h2",{attrs:{id:"零拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零拷贝"}},[t._v("#")]),t._v(" 零拷贝")]),t._v(" "),a("h3",{attrs:{id:"传统意义的拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传统意义的拷贝"}},[t._v("#")]),t._v(" 传统意义的拷贝")]),t._v(" "),a("p",[t._v("是在发送数据的时候，传统的实现方式是：")]),t._v(" "),a("p",[a("code",[t._v("File.read(bytes)")])]),t._v(" "),a("p",[a("code",[t._v("Socket.send(bytes)")])]),t._v(" "),a("p",[t._v("这种方式需要四次数据拷贝和四次上下文切换：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("数据从磁盘读取到内核的 read buffer")])]),t._v(" "),a("li",[a("p",[t._v("数据从内核缓冲区拷贝到用户缓冲区")])]),t._v(" "),a("li",[a("p",[t._v("数据从用户缓冲区拷贝到内核的 socket buffer")])]),t._v(" "),a("li",[a("p",[t._v("数据从内核的 socket buffer 拷贝到网卡接口（硬件）的缓冲区")])])]),t._v(" "),a("h3",{attrs:{id:"零拷贝的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#零拷贝的概念"}},[t._v("#")]),t._v(" 零拷贝的概念")]),t._v(" "),a("p",[t._v("明显上面的第二步和第三步是非必要的，通过 java 的 FileChannel.transferTo 方法，可以避免上面两次多余的拷贝（当然这需要底层操作系统支持）")]),t._v(" "),a("ul",[a("li",[t._v("调用 transferTo，数据从文件由 DMA 引擎拷贝到内核 read buffer")]),t._v(" "),a("li",[t._v("接着 DMA 从内核 read buffer 将数据拷贝到网卡接口 buffer")])]),t._v(" "),a("p",[t._v("上面的两次操作都不需要 CPU 参与，所以就达到了零拷贝。")]),t._v(" "),a("h3",{attrs:{id:"netty-中的零拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-中的零拷贝"}},[t._v("#")]),t._v(" Netty 中的零拷贝")]),t._v(" "),a("p",[t._v("主要体现在三个方面：")]),t._v(" "),a("p",[a("strong",[t._v("bytebuffer")])]),t._v(" "),a("p",[t._v("Netty 发送和接收消息主要使用 bytebuffer，bytebuffer 使用对外内存（DirectMemory）直接进行 Socket 读写。")]),t._v(" "),a("p",[t._v("原因：如果使用传统的堆内存进行 Socket 读写，JVM 会将堆内存 buffer 拷贝一份到直接内存中然后再写入 socket，多了一次缓冲区的内存拷贝。DirectMemory 中可以直接通过 DMA 发送到网卡接口")]),t._v(" "),a("p",[a("strong",[t._v("Composite Buffers")])]),t._v(" "),a("p",[t._v("传统的 ByteBuffer，如果需要将两个 ByteBuffer 中的数据组合到一起，我们需要首先创建一个 size=size1+size2 大小的新的数组，然后将两个数组中的数据拷贝到新的数组中。但是使用 Netty 提供的组合 ByteBuf，就可以避免这样的操作，因为 CompositeByteBuf 并没有真正将多个 Buffer 组合起来，而是保存了它们的引用，从而避免了数据的拷贝，实现了零拷贝。")]),t._v(" "),a("p",[a("strong",[t._v("对于 FileChannel.transferTo 的使用")])]),t._v(" "),a("p",[t._v("Netty 中使用了 FileChannel 的 transferTo 方法，该方法依赖于操作系统实现零拷贝。")]),t._v(" "),a("h2",{attrs:{id:"netty-流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#netty-流程"}},[t._v("#")]),t._v(" Netty 流程")]),t._v(" "),a("h2",{attrs:{id:"应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[t._v("#")]),t._v(" 应用")]),t._v(" "),a("blockquote",[a("p",[t._v("Netty 是一个广泛使用的 Java 网络编程框架。很多著名软件都使用了它，如：Dubbo、Cassandra、Elasticsearch、Vert.x 等。")])]),t._v(" "),a("p",[t._v("有了 Netty，你可以实现自己的 HTTP 服务器，FTP 服务器，UDP 服务器，RPC 服务器，WebSocket 服务器，Redis 的 Proxy 服务器，MySQL 的 Proxy 服务器等等。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NettyOioServer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuf")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unpooled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("unreleasableBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Unpooled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("copiedBuffer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi!\\r\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Charset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UTF-8"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" group "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OioEventLoopGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1")]),t._v("\n\n            b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OioServerSocketChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("localAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("childHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelInitializer")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                     ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelInboundHandlerAdapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4")]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelActive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelHandlerContext")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                             ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeAndFlush")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("duplicate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFutureListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLOSE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\n                         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFuture")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//6")]),t._v("\n            f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeFuture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            group"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownGracefully")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//7")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("官方")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://netty.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netty 官网"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/netty/netty",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netty Github"),a("OutboundLink")],1)])])]),t._v(" "),a("li",[a("strong",[t._v("文章")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/b9f3f6a16911",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netty 入门教程——认识 Netty"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5bdaf8ea6fb9a0227b02275a",target:"_blank",rel:"noopener noreferrer"}},[t._v("彻底理解 Netty，这一篇文章就够了"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5c81b08f5188257a323f4cef",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 200+ 面试题补充 ② Netty 模块"),a("OutboundLink")],1)])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);