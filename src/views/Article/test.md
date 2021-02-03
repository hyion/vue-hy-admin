## this、call和apply
### 1. this的调用
>this 谁调用就指向谁

- 作为对象的方法调用
  >当函数作为对象的方法被调用时， this 指向该对象
  ```js
    var obj = {
      a: 1,
        getA: function(){
        alert ( this === obj ); // 输出：true
        alert ( this.a ); // 输出: 1
      }
    };
    obj.getA();
  ```

- 作为普通函数调用
  >当函数不作为对象的属性被调用时，也就是我们常说的普通函数方式，此时的 this 总是指向全局对象, 即``window``对象
  ```js
    window.name = 'globalName';
    var myObject = {
      name: 'sven',
      getName: function() {
        return this.name;
      }
    };
    var getName = myObject.getName;
    console.log(getName()); // globalName
  ```

- 构造器使用

  在ES6之前, JavaScript 中没有类，但是可以从构造器中创建对象，同时也提供了 `new` 运算符，使得构造器看起来更像一个类。


### 2. call和apply

#### 2.1 call和apply的区别

#### 2.2 call和apply的用途
  >能够熟练使用 call 和 apply ，是我们真正成为一名 JavaScript程序员的重要一步。

- 改变 this 的指向
