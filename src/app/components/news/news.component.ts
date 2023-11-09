import {Component} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  public title: string = '我是一个新闻组件';

  msg: string = '我是一个新闻组件的msg';

  username: string = 'ショウ　ガクヒン';

  // 推荐
  public student: any = '学生title（student）';

  public userinfo: { username: string, age: number } = {
    username: '钟学斌',
    age: 30
  }

  public message: any;

  //属性修饰符
  /*
    声明属性的几种方式：
    public      公共（*默认）可以在这个类里面使用，也可以在类外面使用
    protected   保护类型，他只有在当前类和子类里面可以访问
    private     私有，只有在当前类才可以访问这个属性
   */

  // 定义html标签数据
  public content = "<h2>我是一个h2标签</h2>";

  // 定义数组
  public arr: any[] = [111, '222', 333, '444', 555, 'ZhangSan'];

  // 对象数组
  public userList: any[] = [{
    username: 'Zxb',
    age: 20
  }, {
    username: 'Zxb2',
    age: 22
  }, {
    username: 'Zxb3',
    age: 23
  }]

  public cars: any[] = [{
    car: "BMW",
    list: [
      {
        title: 'BMW X1',
        price: '30万'
      }, {
        title: 'BMW X2',
        price: '50万'
      }, {
        title: 'BMW X3',
        price: '70万'
      }
    ]
  },
    {
      car: "Audi",
      list: [
        {
          title: 'Audi A3',
          price: '20万'
        }, {
          title: 'Audi A5',
          price: '40万'
        }, {
          title: 'Audi A7',
          price: '60万'
        }
      ]
    }]

  constructor() {
    this.message = 'this is message.';
    this.msg = '修改后的msg';
  }
}
