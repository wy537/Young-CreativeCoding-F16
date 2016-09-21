import random
startminutes = minute()

class Particle:
    def __init__(self, x, y, xv, yv):
        self.x = x
        self.y = y
        self.xv = random.randint(2, 7)
        self.yv = random.randint(1, 9)

    def move(self):
        self.x += self.xv
        self.y += self.yv
        if self.x > 580 or self. x < 20:
            self.xv *= (-1)
        if self.y > 580 or self. y < 20:
            self.yv *= (-1)
            

class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

def setup():
    size(600,600)
    
p = Particle(200, 200, 0, 0)
q = Particle(200, 200, 0, 0)
r = Particle(200, 200, 0, 0)
t = Particle(200, 200, 0, 0)

def draw():
    lf = (int(s.life)*6)
    if (lf > 0):
        p.move()
        q.move()
        r.move()
        t.move()
        background(-q.x, 100, p.x)
        fill(255, 0, 0)
        ellipse(p.x, p.y, 40, 40)
        ellipse(q.x, q.y, 40, 40)
        ellipse(r.x, r.y, 40, 40)
        ellipse(t.x, t.y, 40, 40)
        fill(255)
        if s.y < 20:
            s.yv = 10
        elif s.y > 580:
            s.yv = -10
        elif s.x < 20:
            s.xv = 10
        elif s.x > 580:
            s.xv = -10
        s.move()
        
        fill(300-lf, lf, 0)
        textSize(25)
        text("Avoid the canniBALLS with 'w', 's', 'a' and 'd'!", 47, 35)
        text("Life:", 194, 68)
        surviveminutes = str(minute()-startminutes)
        textSize(17)
        text("You have survived for "+surviveminutes+" mintue(s).", 155, 580)
        rect(250, 50, lf, 20)
        if (abs(p.x - s.x) < 30 and abs(p.y - s.y) < 30):
            s.life -= 1
        if (abs(q.x - s.x) < 30 and abs(q.y - s.y) < 30):
            s.life -= 1
        if (abs(r.x - s.x) < 30 and abs(r.y - s.y) < 30):
            s.life -= 1
        if (abs(t.x - s.x) < 30 and abs(t.y - s.y) < 30):
            s.life -= 1
        fill(255)
        ellipse(s.x, s.y, 20, 20)
            
    else:
        background(0)
        textSize(95)
        text("Game Over", 50, 300)
        textSize(30)
        surviveminutes = str(minute()-startminutes)
        text("You have survived for "+surviveminutes+" mintue(s).", 55, 500)
        
        
    

class Player:
    def __init__(self, x, y, xv, yv, life):
        self.x = x
        self.y = y
        self.xv = xv
        self.yv = yv
        self.life = 50
    def move(self):
        self.x += self.xv
        self.y += self.yv
        
s = Player(30, 30, 0, 0, 0)
    
def keyTyped():
    if key == 'w':
        s.yv = -5
        s.xv = 0
    if key == 's':
        s.yv = 5
        s.xv = 0
    if key == 'a':
        s.yv = 0
        s.xv = -5
    if key == 'd':
        s.yv = 0
        s.xv = 5