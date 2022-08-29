const code_example_options =[
  {
    name: "时间生成",
    code: `import time  # 引入time模块
print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(time.time())))       # 打印按指定格式排版的时间
`
  },
  { name: "冰墩墩", code: `import turtle

turtle.speed(1000)  # 速度

# 左手
turtle.penup()
turtle.goto(177, 112)
turtle.pencolor("lightgray")
turtle.pensize(3)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(80)
turtle.circle(-45, 200)
turtle.circle(-300, 23)
turtle.end_fill()

# 左手内
turtle.penup()
turtle.goto(182, 95)
turtle.pencolor("black")
turtle.pensize(1)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.setheading(95)
turtle.pendown()
turtle.circle(-37, 160)
turtle.circle(-20, 50)
turtle.circle(-200, 30)
turtle.end_fill()
# 轮廓
# 头顶
turtle.penup()
turtle.goto(-73, 230)
turtle.pencolor("lightgray")
turtle.pensize(3)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(20)
turtle.circle(-250, 35)
# 左耳
turtle.setheading(50)
turtle.circle(-42, 180)
# 左侧
turtle.setheading(-50)
turtle.circle(-190, 30)
turtle.circle(-320, 45)
# 左腿
turtle.circle(120, 30)
turtle.circle(200, 12)
turtle.circle(-18, 85)
turtle.circle(-180, 23)
turtle.circle(-20, 110)
turtle.circle(15, 115)
turtle.circle(100, 12)
# 右腿
turtle.circle(15, 120)
turtle.circle(-15, 110)
turtle.circle(-150, 30)
turtle.circle(-15, 70)
turtle.circle(-150, 10)
turtle.circle(200, 35)
turtle.circle(-150, 20)
# 右手
turtle.setheading(-120)
turtle.circle(50, 30)
turtle.circle(-35, 200)
turtle.circle(-300, 23)
# 右侧
turtle.setheading(86)
turtle.circle(-300, 26)
# 右耳
turtle.setheading(122)
turtle.circle(-53, 160)
turtle.end_fill()

# 右耳内
turtle.penup()
turtle.goto(-130, 180)
turtle.pencolor("black")
turtle.pensize(1)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(120)
turtle.circle(-28, 160)
turtle.setheading(210)
turtle.circle(150, 20)
turtle.end_fill()

# 左耳内
turtle.penup()
turtle.goto(90, 230)
turtle.setheading(40)
turtle.begin_fill()
turtle.pendown()
turtle.circle(-30, 170)
turtle.setheading(125)
turtle.circle(150, 23)
turtle.end_fill()

# 右手内
turtle.penup()
turtle.goto(-180, -55)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.setheading(-120)
turtle.pendown()
turtle.circle(50, 30)
turtle.circle(-27, 200)
turtle.circle(-300, 20)
turtle.setheading(-90)
turtle.circle(300, 14)
turtle.end_fill()

# 左腿内
turtle.penup()
turtle.goto(108, -168)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-115)
turtle.circle(110, 15)
turtle.circle(200, 10)
turtle.circle(-18, 80)
turtle.circle(-180, 13)
turtle.circle(-20, 90)
turtle.circle(15, 60)
turtle.setheading(42)
turtle.circle(-200, 29)
turtle.end_fill()
# 右腿内
turtle.penup()
turtle.goto(-38, -210)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-155)
turtle.circle(15, 100)
turtle.circle(-10, 110)
turtle.circle(-100, 30)
turtle.circle(-15, 65)
turtle.circle(-100, 10)
turtle.circle(200, 15)
turtle.setheading(-14)
turtle.circle(-200, 27)
turtle.end_fill()

# 右眼
# 眼圈
turtle.penup()
turtle.goto(-64, 120)
turtle.begin_fill()
turtle.pendown()
turtle.setheading(40)
turtle.circle(-35, 152)
turtle.circle(-100, 50)
turtle.circle(-35, 130)
turtle.circle(-100, 50)
turtle.end_fill()
# 眼珠
turtle.penup()
turtle.goto(-47, 55)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(25, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(-45, 62)
turtle.pencolor("darkslategray")
turtle.fillcolor("darkslategray")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(19, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(-45, 68)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(10, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(-47, 86)
turtle.pencolor("white")
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(5, 360)
turtle.end_fill()

# 左眼
# 眼圈
turtle.penup()
turtle.goto(51, 82)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(120)
turtle.circle(-32, 152)
turtle.circle(-100, 55)
turtle.circle(-25, 120)
turtle.circle(-120, 45)
turtle.end_fill()
# 眼珠
turtle.penup()
turtle.goto(79, 60)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(24, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(79, 64)
turtle.pencolor("darkslategray")
turtle.fillcolor("darkslategray")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(19, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(79, 70)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(10, 360)
turtle.end_fill()
turtle.penup()
turtle.goto(79, 88)
turtle.pencolor("white")
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(0)
turtle.circle(5, 360)
turtle.end_fill()

# 鼻子
turtle.penup()
turtle.goto(37, 80)
turtle.fillcolor("black")
turtle.begin_fill()
turtle.pendown()
turtle.circle(-8, 130)
turtle.circle(-22, 100)
turtle.circle(-8, 130)
turtle.end_fill()

# 嘴
turtle.penup()
turtle.goto(-15, 48)
turtle.setheading(-36)
turtle.begin_fill()
turtle.pendown()
turtle.circle(60, 70)
turtle.setheading(-132)
turtle.circle(-45, 100)
turtle.end_fill()

# 彩虹圈
turtle.penup()
turtle.goto(-135, 120)
turtle.pensize(5)
turtle.pencolor("cyan")
turtle.pendown()
turtle.setheading(60)
turtle.circle(-165, 150)
turtle.circle(-130, 78)
turtle.circle(-250, 30)
turtle.circle(-138, 105)
turtle.penup()
turtle.goto(-131, 116)
turtle.pencolor("slateblue")
turtle.pendown()
turtle.setheading(60)
turtle.circle(-160, 144)
turtle.circle(-120, 78)
turtle.circle(-242, 30)
turtle.circle(-135, 105)
turtle.penup()
turtle.goto(-127, 112)
turtle.pencolor("orangered")
turtle.pendown()
turtle.setheading(60)
turtle.circle(-155, 136)
turtle.circle(-116, 86)
turtle.circle(-220, 30)
turtle.circle(-134, 103)
turtle.penup()
turtle.goto(-123, 108)
turtle.pencolor("gold")
turtle.pendown()
turtle.setheading(60)
turtle.circle(-150, 136)
turtle.circle(-104, 86)
turtle.circle(-220, 30)
turtle.circle(-126, 102)
turtle.penup()
turtle.goto(-120, 104)
turtle.pencolor("greenyellow")
turtle.pendown()
turtle.setheading(60)
turtle.circle(-145, 136)
turtle.circle(-90, 83)
turtle.circle(-220, 30)
turtle.circle(-120, 100)
turtle.penup()

# 爱心
turtle.penup()
turtle.goto(220, 115)
turtle.pencolor("brown")
turtle.pensize(1)
turtle.fillcolor("brown")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(36)
turtle.circle(-8, 180)
turtle.circle(-60, 24)
turtle.setheading(110)
turtle.circle(-60, 24)
turtle.circle(-8, 180)
turtle.end_fill()

# 五环
turtle.penup()
turtle.goto(-5, -170)
turtle.pendown()
turtle.pencolor("blue")
turtle.circle(6)
turtle.penup()
turtle.goto(10, -170)
turtle.pendown()
turtle.pencolor("black")
turtle.circle(6)
turtle.penup()
turtle.goto(25, -170)
turtle.pendown()
turtle.pencolor("brown")
turtle.circle(6)
turtle.penup()
turtle.goto(2, -175)
turtle.pendown()
turtle.pencolor("lightgoldenrod")
turtle.circle(6)
turtle.penup()
turtle.goto(16, -175)
turtle.pendown()
turtle.pencolor("green")
turtle.circle(6)
turtle.penup()

turtle.pencolor("black")
turtle.goto(-16, -160)
turtle.write("BEIJING 2022", font=('Arial', 10, 'bold italic'))
turtle.hideturtle()

turtle.done()` },
{ name: "大白", code: `import turtle as t
pen = t.Turtle()  # 定义画笔实例
pen.speed(0)
pen.pensize(5)
pen.pu()
pen.right(90)# 头部
pen.goto(-100,200)
pen.pd()
a = 1
for i in range(120):
    if 0 <= i < 30 or 60 <= i < 90:
        a = a + 0.2
        pen.lt(3)  # 向左转3度
        pen.fd(a)  # 向前走a的步长
    else:
        a = a - 0.2
        pen.lt(3)
        pen.fd(a)
pen.pu()
pen.goto(-50,200)
pen.dot(20)
pen.goto(35,200)
pen.dot(20)
pen.right(90)
pen.pd()
# 身体
pen.pensize(5)
pen.fd(85)
pen.pu()
pen.goto(-70,150)
pen.pd()
pen.left(30)
pen.circle(200,90)
pen.pu()
pen.goto(50,150)
pen.left(30)
pen.pd()
pen.circle(-200,90)
pen.pu()
pen.goto(-140,-125)
pen.pd()
pen.left(90)
pen.circle(270,59)
#腿
pen.pu()
pen.goto(-120,-140)#左腿
pen.right(135)
pen.pd()
pen.circle(90,120)
pen.seth(-270)
pen.fd(90)
pen.pu()#右腿
pen.goto(100,-140)
pen.right(165)
pen.pd()
pen.circle(-90,120)
pen.seth(-270)
pen.fd(88)
#胳膊
pen.pu()#左臂
pen.goto(-130,100)
pen.pd()
pen.seth(200)
pen.circle(200,70)
pen.circle(30,180)
pen.fd(50)
pen.right(45)
pen.fd(50)
pen.up()#右臂
pen.goto(110,100)
pen.pd()
pen.seth(162)
pen.circle(200,-70)
pen.circle(30,-180)
pen.fd(-50)
pen.left(225)
pen.fd(50)
pen.hideturtle()
` },
{ name: "雪容融", code: `import turtle
from turtle import *

#turtle.bgpic("xrr.png")

pm=Screen() #新建屏幕对象
pm.delay(2)  #设定屏幕延时为0
pm.title("雪容融")
turtle.hideturtle()
turtle.speed(200)  # 速度


# 大头的圈圈
turtle.penup()
turtle.goto(-145, 135)
turtle.pensize(10)
turtle.pencolor("#BB3529")
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(45)
turtle.circle(-150, 45)
turtle.forward(80)
turtle.circle(-150, 180)
turtle.forward(80)
turtle.circle(-150, 135)
turtle.end_fill()


#花纹
turtle.fillcolor("#FF9300")
turtle.begin_fill()

turtle.pensize(5)
turtle.setheading(15)
turtle.circle(-600, 28)
turtle.pencolor("#FF9300")
turtle.right(30)
turtle.circle(-150, -35)
turtle.setheading(180)
turtle.forward(100)
turtle.circle(150, 42)
turtle.end_fill()

turtle.pencolor("#DA2D20")
turtle.penup()
turtle.goto(-100, 160)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.circle(4, 360)
turtle.end_fill()

turtle.penup()
turtle.goto(-40, 169)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.circle(4, 360)
turtle.end_fill()

turtle.penup()
turtle.goto(20, 169)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.circle(4, 360)
turtle.end_fill()

turtle.penup()
turtle.goto(80, 163)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.circle(4, 360)
turtle.end_fill()

#内部弧线
#从左往右
#1
turtle.pencolor("#FF9300")
turtle.penup()
turtle.goto(-130, 135)
turtle.setheading(52)
turtle.pendown()
turtle.circle(-175, -60)
turtle.circle(-125, -70)
#2
turtle.penup()
turtle.goto(-80, 150)
turtle.setheading(54)
turtle.pendown()
turtle.circle(-175, -40)
turtle.circle(-200, -50)
#3
turtle.penup()
turtle.goto(-10, 155)
turtle.setheading(75)
turtle.pendown()
turtle.circle(-480, -35)
#4
turtle.penup()
turtle.goto(50, 150)
turtle.setheading(115)
turtle.pendown()
turtle.circle(270, -40)
turtle.circle(500, -12)
#5
turtle.penup()
turtle.goto(120, 140)
turtle.setheading(130)
turtle.pendown()
turtle.circle(180, -40)
turtle.circle(145, -80)

#脸部
turtle.pensize(8)
turtle.pencolor("#BB3529")
turtle.penup()
turtle.goto(-125, 40)
turtle.setheading(216)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.circle(34, 170)
turtle.right(60)
turtle.circle(170, 63)
turtle.right(60)
turtle.circle(32, 158)
turtle.right(65)
turtle.circle(34, 157)
turtle.circle(-15, 155)
turtle.left(30)
turtle.circle(36, 127)
turtle.circle(-15, 45)
turtle.right(38)
turtle.circle(36, 107)
turtle.circle(-15, 55)
turtle.right(22)
turtle.circle(32, 120)
turtle.end_fill()
#脸蛋
#左边
turtle.pencolor("#F44F39")
turtle.penup()
turtle.goto(-120, 5)
turtle.fillcolor("#F44F39")
turtle.begin_fill()
turtle.pendown()
turtle.circle(15, 360)
turtle.end_fill()
#右边
turtle.penup()
turtle.goto(85, 0)
turtle.fillcolor("#F44F39")
turtle.begin_fill()
turtle.pendown()
turtle.circle(15, 360)
turtle.end_fill()
#眼睛
turtle.pensize(1)
#右黑
turtle.pencolor("#534A49")
turtle.penup()
turtle.goto(65, 35)
turtle.fillcolor("#534A49")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(90)
turtle.circle(9, 180)
turtle.forward(9)
turtle.circle(9, 180)
turtle.forward(9)
turtle.end_fill()
#右白
turtle.penup()
turtle.pencolor("white")
turtle.goto(57, 36)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(90)
turtle.circle(3, 360)
turtle.end_fill()
#左黑
turtle.pencolor("#534A49")
turtle.penup()
turtle.goto(-51, 35)
turtle.fillcolor("#534A49")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(90)
turtle.circle(9, 180)
turtle.forward(9)
turtle.circle(9, 180)
turtle.forward(9)
turtle.end_fill()
#左白
turtle.penup()
turtle.pencolor("white")
turtle.goto(-58, 36)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(90)
turtle.circle(3, 360)
turtle.end_fill()

#头顶
turtle.pensize(5)
turtle.penup()
turtle.pencolor("#5FA8D2")
turtle.goto(-108, 170)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(24)
turtle.forward(70)
turtle.left(15)
turtle.circle(-68, 80)
turtle.left(22)
turtle.forward(78)
turtle.circle(-4, 175)
turtle.forward(40)
turtle.right(22)
turtle.circle(24, 62)
turtle.circle(-34, 62)
turtle.circle(34, 75)
turtle.circle(-34, 62)
turtle.circle(24, 72)
turtle.right(30)
turtle.forward(24)
turtle.circle(-4, 180)
turtle.forward(4)
turtle.end_fill()

#皇冠
turtle.pensize(5)
turtle.setheading(0)
turtle.penup()
turtle.pencolor("#E7A910")
turtle.goto(-15, 225)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.circle(-7, 260)
turtle.left(70)
turtle.circle(-11, 180)
turtle.left(52)
turtle.circle(-27, 93)
turtle.left(62)
turtle.circle(-10, 180)
turtle.left(70)
turtle.circle(-7, 260)
turtle.setheading(-135)
turtle.forward(15)
turtle.right(90)
turtle.forward(10)
turtle.left(90)
turtle.forward(10)
turtle.end_fill()

#左手
turtle.pensize(6)
turtle.penup()
turtle.pencolor("#BB3529")
turtle.goto(-60, -135)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(150)
turtle.forward(50)
turtle.circle(25,110)
turtle.circle(32,90)
turtle.circle(332,10)
turtle.end_fill()

#右手
turtle.pensize(6)
turtle.penup()
turtle.pencolor("#BB3529")
turtle.goto(80, -125)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-30)
turtle.forward(50)
turtle.circle(-25,110)
turtle.circle(-32,90)
turtle.end_fill()

#左脚
turtle.pensize(6)
turtle.penup()
turtle.pencolor("#BB3529")
turtle.goto(-65, -225)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-70)
turtle.forward(40)
turtle.circle(10,40)
turtle.circle(55,40)
turtle.circle(10,70)
turtle.forward(25)
turtle.end_fill()

#右脚
turtle.pensize(6)
turtle.penup()
turtle.pencolor("#BB3529")
turtle.goto(70, -225)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-110)
turtle.forward(40)
turtle.circle(-10,40)
turtle.circle(-50,40)
turtle.circle(-10,70)
turtle.forward(25)
turtle.end_fill()

#脚的花纹
turtle.pensize(7)
turtle.penup()
turtle.pencolor("#FF9300")
turtle.goto(-50, -255)
turtle.pendown()
turtle.setheading(-20)
turtle.circle(100,27)

turtle.pensize(7)
turtle.penup()
turtle.pencolor("#FF9300")
turtle.goto(15, -258)
turtle.pendown()
turtle.setheading(-10)
turtle.circle(80,28)

#身体
turtle.pensize(10)
turtle.penup()
turtle.pencolor("#BB3529")
turtle.goto(-60, -125)
turtle.fillcolor("#DA2D20")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-120)
turtle.circle(130,30)
turtle.circle(40,62)
turtle.circle(145,45)
turtle.circle(42,62)
turtle.circle(130,35)
turtle.end_fill()
#中间白色
turtle.penup()
turtle.pencolor("white")
turtle.goto(45, -173)
turtle.fillcolor("white")
turtle.begin_fill()
turtle.pendown()
turtle.circle(38,360)
turtle.end_fill()
#冬奥会象形字
turtle.setheading(-138)
turtle.pensize(4)
turtle.penup()
turtle.pencolor("red")
turtle.goto(10, -162)
turtle.pendown()
turtle.forward(12)

turtle.setheading(18)
turtle.pencolor("blue")
turtle.forward(22)

turtle.setheading(-140)
turtle.pencolor("lightblue")
turtle.forward(34)

turtle.setheading(28)
turtle.pencolor("yellowgreen")
turtle.forward(24)

turtle.pencolor("yellow")
turtle.circle(-5,200)

turtle.pensize(2)
turtle.pencolor("lightblue")
turtle.circle(23,18)

turtle.penup()
turtle.setheading(135)
turtle.pencolor("red")
turtle.goto(0, -215)
turtle.pendown()
turtle.circle(-4,150)

turtle.penup()
turtle.setheading(175)
turtle.pencolor("blue")
turtle.goto(8, -220)
turtle.pendown()
turtle.circle(-5,120)

turtle.penup()
turtle.setheading(245)
turtle.pencolor("green")
turtle.goto(18, -215)
turtle.pendown()
turtle.circle(-4,180)

turtle.penup()
turtle.goto(-16, -199)
turtle.pencolor("black")
turtle.pendown()
turtle.write("BEIJING 2022", font=('华文行楷', 6, 'bold italic'))
turtle.penup()
turtle.goto(-10, -203)
turtle.pencolor("black")
turtle.pendown()
turtle.write("Paralympic Games", font=('Arial', 4))

#围巾
turtle.pensize(1)
turtle.penup()
turtle.pencolor("#FF9300")
turtle.goto(-74, -113)
turtle.fillcolor("#FF9300")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(5)
turtle.circle(-1000,3)
turtle.right(10)
turtle.circle(300,19)
turtle.right(30)
turtle.circle(-15,120)
turtle.circle(-100,4)
turtle.right(20)
turtle.circle(-300,25)
turtle.right(20)
turtle.circle(-65,23)
turtle.circle(-15,80)
turtle.end_fill()

turtle.pensize(1)
turtle.penup()
turtle.pencolor("#FF9300")
turtle.goto(-57, -135)
turtle.fillcolor("#FF9300")
turtle.begin_fill()
turtle.pendown()
turtle.setheading(-105)
turtle.forward(50)
turtle.circle(5,80)
turtle.forward(28)
turtle.circle(5,100)
turtle.forward(60)
turtle.end_fill()
#围巾末尾
turtle.pensize(3)
turtle.penup()
turtle.pencolor("#DA2D20")
turtle.goto(-61, -175)
turtle.pendown()
turtle.setheading(-105)
turtle.forward(20)

turtle.penup()
turtle.pencolor("#DA2D20")
turtle.goto(-54, -178)
turtle.pendown()
turtle.setheading(-105)
turtle.forward(20)

turtle.penup()
turtle.pencolor("#DA2D20")
turtle.goto(-47, -181)
turtle.pendown()
turtle.setheading(-105)
turtle.forward(20)

turtle.penup()
turtle.pencolor("#DA2D20")
turtle.goto(-40, -184)
turtle.pendown()
turtle.setheading(-105)
turtle.forward(20)


turtle.hideturtle()

pm.exitonclick()   #单击屏幕关闭窗口


turtle.done()
` },
{ name: "小猪佩奇", code: `# coding:utf-8
import turtle as t

t.pensize(4)
t.hideturtle()
t.colormode(255)
t.color((255,155,192),"pink")
# t.setup(840,500)
t.speed(1000)

#鼻子
t.pu()
t.goto(-100,100)
t.pd()
t.seth(-30)
t.begin_fill()
a=0.4
for i in range(120):
    if 0<=i<30 or 60<=i<90:
        a=a+0.08
        t.lt(3) #向左转3度
        t.fd(a) #向前走a的步长
    else:
        a=a-0.08
        t.lt(3)
        t.fd(a)
t.end_fill()

t.pu()
t.seth(90)
t.fd(25)
t.seth(0)
t.fd(10)
t.pd()
t.pencolor(255,155,192)
t.seth(10)
t.begin_fill()
t.circle(5)
t.color(160,82,45)
t.end_fill()

t.pu()
t.seth(0)
t.fd(20)
t.pd()
t.pencolor(255,155,192)
t.seth(10)
t.begin_fill()
t.circle(5)
t.color(160,82,45)
t.end_fill()

#头
t.color((255,155,192),"pink")
t.pu()
t.seth(90)
t.fd(41)
t.seth(0)
t.fd(0)
t.pd()
t.begin_fill()
t.seth(180)
t.circle(300,-30)
t.circle(100,-60)
t.circle(80,-100)
t.circle(150,-20)
t.circle(60,-95)
t.seth(161)
t.circle(-300,15)
t.pu()
t.goto(-100,100)
t.pd()
t.seth(-30)
a=0.4
for i in range(60):
    if 0<=i<30 or 60<=i<90:
        a=a+0.08
        t.lt(3) #向左转3度
        t.fd(a) #向前走a的步长
    else:
        a=a-0.08
        t.lt(3)
        t.fd(a)
t.end_fill()

#耳朵
t.color((255,155,192),"pink")
t.pu()
t.seth(90)
t.fd(-7)
t.seth(0)
t.fd(70)
t.pd()
t.begin_fill()
t.seth(100)
t.circle(-50,50)
t.circle(-10,120)
t.circle(-50,54)
t.end_fill()

t.pu()
t.seth(90)
t.fd(-12)
t.seth(0)
t.fd(30)
t.pd()
t.begin_fill()
t.seth(100)
t.circle(-50,50)
t.circle(-10,120)
t.circle(-50,56)
t.end_fill()

#眼睛
t.color((255,155,192),"white")
t.pu()
t.seth(90)
t.fd(-20)
t.seth(0)
t.fd(-95)
t.pd()
t.begin_fill()
t.circle(15)
t.end_fill()

t.color("black")
t.pu()
t.seth(90)
t.fd(12)
t.seth(0)
t.fd(-3)
t.pd()
t.begin_fill()
t.circle(3)
t.end_fill()

t.color((255,155,192),"white")
t.pu()
t.seth(90)
t.fd(-25)
t.seth(0)
t.fd(40)
t.pd()
t.begin_fill()
t.circle(15)
t.end_fill()

t.color("black")
t.pu()
t.seth(90)
t.fd(12)
t.seth(0)
t.fd(-3)
t.pd()
t.begin_fill()
t.circle(3)
t.end_fill()

#腮
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(-95)
t.seth(0)
t.fd(65)
t.pd()
t.begin_fill()
t.circle(30)
t.end_fill()

#嘴
t.color(239,69,19)
t.pu()
t.seth(90)
t.fd(15)
t.seth(0)
t.fd(-100)
t.pd()
t.seth(-80)
t.circle(30,40)
t.circle(40,80)

#身体
t.color("red",(255,99,71))
t.pu()
t.seth(90)
t.fd(-20)
t.seth(0)
t.fd(-78)
t.pd()
t.begin_fill()
t.seth(-130)
t.circle(100,10)
t.circle(300,30)
t.seth(0)
t.fd(230)
t.seth(90)
t.circle(300,30)
t.circle(100,3)
t.color((255,155,192),(255,100,100))
t.seth(-135)
t.circle(-80,63)
t.circle(-150,24)
t.end_fill()

#手
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(-40)
t.seth(0)
t.fd(-27)
t.pd()
t.seth(-160)
t.circle(300,15)
t.pu()
t.seth(90)
t.fd(15)
t.seth(0)
t.fd(0)
t.pd()
t.seth(-10)
t.circle(-20,90)

t.pu()
t.seth(90)
t.fd(30)
t.seth(0)
t.fd(237)
t.pd()
t.seth(-20)
t.circle(-300,15)
t.pu()
t.seth(90)
t.fd(20)
t.seth(0)
t.fd(0)
t.pd()
t.seth(-170)
t.circle(20,90)

#脚
t.pensize(10)
t.color((240,128,128))
t.pu()
t.seth(90)
t.fd(-75)
t.seth(0)
t.fd(-180)
t.pd()
t.seth(-90)
t.fd(40)
t.seth(-180)
t.color("black")
t.pensize(15)
t.fd(20)

t.pensize(10)
t.color((240,128,128))
t.pu()
t.seth(90)
t.fd(40)
t.seth(0)
t.fd(90)
t.pd()
t.seth(-90)
t.fd(40)
t.seth(-180)
t.color("black")
t.pensize(15)
t.fd(20)

#尾巴
t.pensize(4)
t.color((255,155,192))
t.pu()
t.seth(90)
t.fd(70)
t.seth(0)
t.fd(95)
t.pd()
t.seth(0)
t.circle(70,20)
t.circle(10,330)
t.circle(70,30)
t.done()` },
{ name: "文字对话游戏", code: `import random


class Creature():
    def __init__(self, hp, name):
        self.hp = hp
        self.name = name

    def attack(self):
        # 我希望得到一个随机数
        attack_value = random.randint(0, 50)
        return attack_value

    def not_dead(self):
        if self.hp <= 0:
            return False
        else:
            return True

    def being_attack(self, attack_value):
        self.hp = self.hp - attack_value

    def show_status(self):
        # print(self.hp)
        print("{}'hp is {}.".format(self.name, self.hp))


player = Creature(100, "AI悦创")
enemy = Creature(80, "Enemy")

while player.not_dead() and enemy.not_dead():
    player.show_status()
    enemy.show_status()

    user_input = input("Attack or Defence(A/D):").upper()

    if user_input == "A":
        player_attack_value = player.attack()
        enemy_attack_value = enemy.attack()
        enemy.being_attack(player_attack_value)
        player.being_attack(enemy_attack_value)

    elif user_input == "D":
        enemy_attack_value = enemy.attack() * 0.1
        player.being_attack(enemy_attack_value)

if player.not_dead():
    print("You Win!")
else:
    print("Loser!")

`}
];
const code_size_options= [
      "12px",
      "14px",
      "16px",
      "18px",
      "20px",
      "22px",
      "24px",
      "26px",
      "28px",
      "30px",
    ];
const console_size_options= [
      "12px",
      "14px",
      "16px",
      "18px",
      "20px",
      "22px",
      "24px",
      "26px",
      "28px",
      "30px",
    ];
export {
code_example_options,
code_size_options,
console_size_options,
}
