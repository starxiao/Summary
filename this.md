

# this

## 一、概念
1. this既不是指向函数自身也不指向函数的词法作用域，
this 实际上是在函数调用时发生的绑定，取决于函数在哪里被调用。
2. 调用位置就是函数在代码中被调用的位置（而不是被声明的位置）
3. 绑定规则：在函数的执行过程中调用位置如何决定this的绑定对象。
4. 四条规则判断，优先级依次。
    1. 由new调用？绑定到新建的对象
    2. 由call或者apply、bind调用？绑定到指定的对象
    3. 由上下文对象调用（上下文对象指函数前面有修饰符）？绑定到那个上下文对象。
    4. 默认：在严格模式下绑定到undefined,否则绑定到全局对象（都是绑定到window）。
5. es6的箭头函数不适用上面四条规则，而是根据当前的词法作用域来决定this。跟self = this机制是一样的。



## 二、代码

1. 默认绑定

<code>

    function foo(){
        let a = 123;
        console.log(this.a);
        function bar(){
            console.log(this.a);
        }
        bar();
    }
    let a = 'xxx' 输出'xxx','xxx'全部绑定到window
</code>

2. 隐式绑定

<code>

    function foo(){
        let a = 123;
        console.log(this.a);
    }
    let obj = {a: 'xxx',foo: foo};
    obj.foo() // 'xxx'
</code>

3. 显式绑定

<code>

    function foo(){
        let a = 123;
        console.log(this.a);
    }
    let obj = {a: 'xxx'};
    foo.call(obj);  // 'xxx'
</code>

4. new绑定

<code>

    function foo(a){
        this.a = a;
    }

    let bar = new foo('xxx');
    bar.a // 'xxx';
</code>