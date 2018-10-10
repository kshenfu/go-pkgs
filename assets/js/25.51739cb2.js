(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{185:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"os"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#os","aria-hidden":"true"}},[t._v("#")]),t._v(" os")]),t._v(" "),n("h2",{attrs:{id:"filemode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#filemode","aria-hidden":"true"}},[t._v("#")]),t._v(" FileMode")]),t._v(" "),n("p",[n("code",[t._v("FileMode")]),t._v("表示了一个文件的模式（是否为目录，是否为临时文件等）和权限（读、写、执行），本质上"),n("code",[t._v("FileMode")]),t._v("就是"),n("code",[t._v("uint32")]),t._v("类型，如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" FileMode "),n("span",{attrs:{class:"token builtin"}},[t._v("uint32")]),t._v("\n")])])]),n("p",[n("code",[t._v("FileMode")]),t._v("相关的一些常量定义：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// The single letters are the abbreviations")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// used by the String method's formatting.")]),t._v("\n    ModeDir        FileMode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token number"}},[t._v("32")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("iota")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// d: is a directory")]),t._v("\n    ModeAppend                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// a: append-only")]),t._v("\n    ModeExclusive                                  "),n("span",{attrs:{class:"token comment"}},[t._v("// l: exclusive use")]),t._v("\n    ModeTemporary                                  "),n("span",{attrs:{class:"token comment"}},[t._v("// T: temporary file (not backed up)")]),t._v("\n    ModeSymlink                                    "),n("span",{attrs:{class:"token comment"}},[t._v("// L: symbolic link")]),t._v("\n    ModeDevice                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// D: device file")]),t._v("\n    ModeNamedPipe                                  "),n("span",{attrs:{class:"token comment"}},[t._v("// p: named pipe (FIFO)")]),t._v("\n    ModeSocket                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// S: Unix domain socket")]),t._v("\n    ModeSetuid                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// u: setuid")]),t._v("\n    ModeSetgid                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// g: setgid")]),t._v("\n    ModeCharDevice                                 "),n("span",{attrs:{class:"token comment"}},[t._v("// c: Unix character device, when ModeDevice is set")]),t._v("\n    ModeSticky                                     "),n("span",{attrs:{class:"token comment"}},[t._v("// t: sticky")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// Mask for the type bits. For regular files, none will be set.")]),t._v("\n    ModeType "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" ModeDir "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" ModeSymlink "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" ModeNamedPipe "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" ModeSocket "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" ModeDevice\n\n    ModePerm FileMode "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0777")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// Unix permission bits")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("即"),n("code",[t._v("ModeDir")]),t._v("为"),n("code",[t._v("1<<31 (0x80000000)")]),t._v("，"),n("code",[t._v("ModeAppend")]),t._v("为"),n("code",[t._v("1<<30 (0x40000000)")]),t._v("，以此类推。")]),t._v(" "),n("h3",{attrs:{id:"isdir"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isdir","aria-hidden":"true"}},[t._v("#")]),t._v(" IsDir")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m FileMode"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("IsDir")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" m"),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("ModeDir "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("判断是否为目录。由于"),n("code",[t._v("ModeDir")]),t._v("只有目录为是1，因此通过"),n("code",[t._v("&")]),t._v("操作，如果"),n("code",[t._v("m")]),t._v("的目录位为1，则结果不为0，否则结果为0。")]),t._v(" "),n("h3",{attrs:{id:"isregular"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#isregular","aria-hidden":"true"}},[t._v("#")]),t._v(" IsRegular")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m FileMode"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("IsRegular")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("bool")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" m"),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v("ModeType "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("ModeType")]),t._v("的定义为"),n("code",[t._v("ModeDir | ModeSymlink | ModeNamedPipe | ModeSocket | ModeDevice")]),t._v("，即表示为特殊文件类型（目录、软连接、管道、socket、设备）之一。如果"),n("code",[t._v("m&ModeType")]),t._v("为0，则说明"),n("code",[t._v("m")]),t._v("不属于特殊文件类型。")]),t._v(" "),n("h3",{attrs:{id:"perm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#perm","aria-hidden":"true"}},[t._v("#")]),t._v(" Perm")]),t._v(" "),n("p",[t._v("获取权限位：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m FileMode"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Perm")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" FileMode "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" m "),n("span",{attrs:{class:"token operator"}},[t._v("&")]),t._v(" ModePerm\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#string","aria-hidden":"true"}},[t._v("#")]),t._v(" String")]),t._v(" "),n("p",[t._v("返回字符串形式，例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModeDir"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         "),n("span",{attrs:{class:"token comment"}},[t._v("// d---------")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModePerm"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("String")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),n("span",{attrs:{class:"token comment"}},[t._v("// -rwxrwxrwx")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModeDir "),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ModeSymlink"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// dL---------")]),t._v("\n")])])]),n("h2",{attrs:{id:"环境变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境变量")]),t._v(" "),n("p",[n("code",[t._v("os")]),t._v("包提供了对环境变量的一些操作，包括：")]),t._v(" "),n("ul",[n("li",[t._v("func Environ() []string")]),t._v(" "),n("li",[t._v("func Getenv(key string) string")]),t._v(" "),n("li",[t._v("func LookupEnv(key string) (string, bool)")]),t._v(" "),n("li",[t._v("func Setenv(key, value string) error")]),t._v(" "),n("li",[t._v("func Unsetenv(key string) error")]),t._v(" "),n("li",[t._v("func Clearenv()")]),t._v(" "),n("li",[t._v("func ExpandEnv(s string) string")])]),t._v(" "),n("p",[t._v("例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("key "),n("span",{attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"hello_go"')]),t._v("\nos"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Setenv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"hello-go"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Getenv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                           "),n("span",{attrs:{class:"token comment"}},[t._v("// hello-go")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("LookupEnv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                        "),n("span",{attrs:{class:"token comment"}},[t._v("// hello-go true")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ExpandEnv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"the value is ${hello_go}"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// the value is hello-go")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("ExpandEnv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"the value is $hello_go"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),n("span",{attrs:{class:"token comment"}},[t._v("// the value is hello-go")]),t._v("\n")])])]),n("p",[t._v("对于环境变量的获取以及修改操作都是调用了"),n("code",[t._v("syscall")]),t._v("包中的方法。")]),t._v(" "),n("p",[t._v("对于"),n("code",[t._v("ExpandEnv")]),t._v("方法，它是将一个字符串中的"),n("code",[t._v("${var}")]),t._v("或"),n("code",[t._v("$var")]),t._v("进行替换，例如会将"),n("code",[t._v("${path}")]),t._v("或"),n("code",[t._v("$path")]),t._v("替换为环境变量"),n("code",[t._v("path")]),t._v("的值。它实际上是调用了"),n("code",[t._v("Expand")]),t._v("方法：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("ExpandEnv")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Expand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Getenv"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("Expand")]),t._v("方法的签名如下：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Expand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapping "),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n")])])]),n("p",[t._v("它是将字符串"),n("code",[t._v("s")]),t._v("中的变量进行替换，替换规则由函数"),n("code",[t._v("mapping")]),t._v("来确定。例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("mapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" s "),n("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"a"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"b"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"a"')]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("main")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Expand")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"${a} ${b}"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" mapping"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// b a")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"errors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#errors","aria-hidden":"true"}},[t._v("#")]),t._v(" errors")]),t._v(" "),n("p",[t._v("变量有：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    ErrInvalid    "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"invalid argument"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// methods on File will return this error when the receiver is nil")]),t._v("\n    ErrPermission "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"permission denied"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ErrExist      "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"file already exists"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ErrNotExist   "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" errors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("New")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"file does not exist"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("类型有：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" PathError "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Op   "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Path "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Err  "),n("span",{attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" LinkError "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Op  "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Old "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    New "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Err "),n("span",{attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token keyword"}},[t._v("type")]),t._v(" SyscallError "),n("span",{attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Syscall "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),t._v("\n    Err     "),n("span",{attrs:{class:"token builtin"}},[t._v("error")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("通过"),n("code",[t._v("NewSyscallError(syscall string, err error)")]),t._v("可以新建一个系统调用错误。")]),t._v(" "),n("p",[t._v("其它相关方法有：")]),t._v(" "),n("ul",[n("li",[t._v("func IsExist(err error) bool")]),t._v(" "),n("li",[t._v("func IsNotExist(err error) bool")]),t._v(" "),n("li",[t._v("func IsPermission(err error) bool")])]),t._v(" "),n("p",[t._v("分别用来判断一个错误是否是“文件已经存在”、“文件不存在”、“权限错误”，例如：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[t._v("fmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsExist")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrExist"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsNotExist")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrNotExist"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nfmt"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("Println")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("IsPermission")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ErrPermission"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),n("h2",{attrs:{id:"file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#file","aria-hidden":"true"}},[t._v("#")]),t._v(" File")]),t._v(" "),n("p",[t._v("os包提供了平台无关的文件操作。即对于不同的操作系统，它有着不同的具体实现，但是对外的接口是一致的。")]),t._v(" "),n("p",[t._v("文件的创建和打开相关的方法如下：")]),t._v(" "),n("ul",[n("li",[t._v("func Create(name string) (*File, error)")]),t._v(" "),n("li",[t._v("func NewFile(fd uintptr, name string) *File")]),t._v(" "),n("li",[t._v("func Open(name string) (*File, error)")]),t._v(" "),n("li",[t._v("func OpenFile(name string, flag int, perm FileMode) (*File, error)")])]),t._v(" "),n("p",[t._v("其中，"),n("code",[t._v("NewFile")]),t._v("是根据文件描述符和文件名来返回一个指针，实际上并没有真正创建文件。")]),t._v(" "),n("p",[n("code",[t._v("OpenFile")]),t._v("根据文件名、flag和权限来打开或者创建文件，并通过"),n("code",[t._v("NewFile")]),t._v("来返回文件指针。其中flag可取值为：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// Flags to OpenFile wrapping those of the underlying system. Not all")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// flags may be implemented on a given system.")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    O_RDONLY "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_RDONLY "),n("span",{attrs:{class:"token comment"}},[t._v("// open the file read-only.")]),t._v("\n    O_WRONLY "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_WRONLY "),n("span",{attrs:{class:"token comment"}},[t._v("// open the file write-only.")]),t._v("\n    O_RDWR   "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_RDWR   "),n("span",{attrs:{class:"token comment"}},[t._v("// open the file read-write.")]),t._v("\n    O_APPEND "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_APPEND "),n("span",{attrs:{class:"token comment"}},[t._v("// append data to the file when writing.")]),t._v("\n    O_CREATE "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_CREAT  "),n("span",{attrs:{class:"token comment"}},[t._v("// create a new file if none exists.")]),t._v("\n    O_EXCL   "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_EXCL   "),n("span",{attrs:{class:"token comment"}},[t._v("// used with O_CREATE, file must not exist")]),t._v("\n    O_SYNC   "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_SYNC   "),n("span",{attrs:{class:"token comment"}},[t._v("// open for synchronous I/O.")]),t._v("\n    O_TRUNC  "),n("span",{attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" syscall"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("O_TRUNC  "),n("span",{attrs:{class:"token comment"}},[t._v("// if possible, truncate file when opened.")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("Create")]),t._v("调用了"),n("code",[t._v("OpenFile")]),t._v("，来创建一个文件：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 以读写模式来创建新文件")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 如果文件已经存在，则会清空原有文件")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Create")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("File"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("OpenFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O_RDWR"),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("O_CREATE"),n("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v("O_TRUNC"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0666")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("Open")]),t._v("调用了"),n("code",[t._v("OpenFile")]),t._v("，以只读模式打开一个文件：")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// 以只读模式打开文件")]),t._v("\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 如果文件不存在，会报错")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("Open")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),n("span",{attrs:{class:"token builtin"}},[t._v("string")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("File"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token builtin"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("OpenFile")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" O_RDONLY"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"read"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#read","aria-hidden":"true"}},[t._v("#")]),t._v(" read")]),t._v(" "),n("ul",[n("li",[t._v("func (f *File) Read(b []byte) (n int, err error)")]),t._v(" "),n("li",[t._v("func (f *File) ReadAt(b []byte, off int64) (n int, err error)")]),t._v(" "),n("li",[t._v("func (f *File) Readdir(n int) ([]FileInfo, error)")]),t._v(" "),n("li",[t._v("func (f *File) Readdirnames(n int) (names []string, err error)")])]),t._v(" "),n("p",[t._v("如果文件是一个目录的话，"),n("code",[t._v("Readdir(n int)")]),t._v("可以读取该目录下文件的信息。如果参数"),n("code",[t._v("n")]),t._v("大于0，则会返回前"),n("code",[t._v("n")]),t._v("个文件的信息，否则返回所有子文件的信息。")]),t._v(" "),n("p",[n("code",[t._v("Readdirnames")]),t._v("会返回子文件的文件名，参数限定和"),n("code",[t._v("Readdir")]),t._v("一致。")]),t._v(" "),n("h3",{attrs:{id:"write"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#write","aria-hidden":"true"}},[t._v("#")]),t._v(" write")]),t._v(" "),n("ul",[n("li",[t._v("func (f *File) Write(b []byte) (n int, err error)")]),t._v(" "),n("li",[t._v("func (f *File) WriteAt(b []byte, off int64) (n int, err error)")]),t._v(" "),n("li",[t._v("func (f *File) WriteString(s string) (n int, err error)")])]),t._v(" "),n("h3",{attrs:{id:"其它操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它操作","aria-hidden":"true"}},[t._v("#")]),t._v(" 其它操作")]),t._v(" "),n("ul",[n("li",[t._v("func (f *File) Chdir() error")]),t._v(" "),n("li",[t._v("func (f *File) Chmod(mode FileMode) error")]),t._v(" "),n("li",[t._v("func (f *File) Chown(uid, gid int) error")]),t._v(" "),n("li",[t._v("func (f *File) Close() error")]),t._v(" "),n("li",[t._v("func (f *File) Fd() uintptr")]),t._v(" "),n("li",[t._v("func (f *File) Name() string")]),t._v(" "),n("li",[t._v("func (f *File) Sync() error")]),t._v(" "),n("li",[t._v("func (f *File) Stat() (FileInfo, error)")]),t._v(" "),n("li",[t._v("func (f *File) Seek(offset int64, whence int) (ret int64, err error)")]),t._v(" "),n("li",[t._v("func (f *File) Truncate(size int64) error")])]),t._v(" "),n("p",[t._v("其中"),n("code",[t._v("Sync")]),t._v("方法会将写入该文件的数据从内存持久化到磁盘上。")]),t._v(" "),n("h2",{attrs:{id:"其它系统调用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它系统调用","aria-hidden":"true"}},[t._v("#")]),t._v(" 其它系统调用")]),t._v(" "),n("ul",[n("li",[t._v("func Getpid() int")]),t._v(" "),n("li",[t._v("func Getppid() int")]),t._v(" "),n("li",[t._v("func Getgid() int")]),t._v(" "),n("li",[t._v("func Getegid() int")]),t._v(" "),n("li",[t._v("func Getuid() int")]),t._v(" "),n("li",[t._v("func Geteuid() int")]),t._v(" "),n("li",[t._v("func Getgroups() ([]int, error)")]),t._v(" "),n("li",[t._v("func Exit(code int)")]),t._v(" "),n("li",[t._v("func Getpagesize() int")]),t._v(" "),n("li",[t._v("func Getwd() (dir string, err error)")]),t._v(" "),n("li",[t._v("func Hostname() (name string, err error)")])]),t._v(" "),n("h2",{attrs:{id:"其它方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#其它方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 其它方法")]),t._v(" "),n("ul",[n("li",[t._v("func Chdir(dir string) error")]),t._v(" "),n("li",[t._v("func Chmod(name string, mode FileMode) error")]),t._v(" "),n("li",[t._v("func Chown(name string, uid, gid int) error")]),t._v(" "),n("li",[t._v("func Chtimes(name string, atime time.Time, mtime time.Time) error")]),t._v(" "),n("li",[t._v("func IsPathSeparator(c uint8) bool")]),t._v(" "),n("li",[t._v("func Lchown(name string, uid, gid int) error")]),t._v(" "),n("li",[t._v("func Link(oldname, newname string) error")]),t._v(" "),n("li",[t._v("func Mkdir(name string, perm FileMode) error")]),t._v(" "),n("li",[t._v("func MkdirAll(path string, perm FileMode) error")]),t._v(" "),n("li",[t._v("func Readlink(name string) (string, error)")]),t._v(" "),n("li",[t._v("func Remove(name string) error")]),t._v(" "),n("li",[t._v("func RemoveAll(path string) error")]),t._v(" "),n("li",[t._v("func Rename(oldpath, newpath string) error")]),t._v(" "),n("li",[t._v("func SameFile(fi1, fi2 FileInfo) bool")]),t._v(" "),n("li",[t._v("func Symlink(oldname, newname string) error")]),t._v(" "),n("li",[t._v("func TempDir() string")]),t._v(" "),n("li",[t._v("func Truncate(name string, size int64) error")])])])}],!1,null,null,null);e.options.__file="README.md";s.default=e.exports}}]);