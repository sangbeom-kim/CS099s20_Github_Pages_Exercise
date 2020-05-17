//
//Title           : Face Animation
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Animate A Face Assignment
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

var X = 250
var Y = 250
var eyex1 = -80
var eyex2 = 80
var eyes1 = 100
var eyes2 = 100
var eyey = -30
var pupilx1 = 0
var pupilx2 = 0
var pupily = 0
var pupils1 = 50
var pupils2 = 50
var browy = 0
var blink = 100
var mouthX = 0
var mouthY = 0
var b = false
var c = false
var m = false
var n = false
var o = false
var p = false
var q = false
var r = false
var pm1 = false
var pm2 = false
var pm3 = false
var pm4 = false
var pm5 = false
var pm6 = false
var pm7 = false
var pm8 = false
var pm9 = false
var pm10 = false
var pm11 = false
var pm12 = false
var t = 0
var s = 0
var R = 250

function setup() {
  createCanvas(500, 500);
  Text1 = createP()
  Text2 = createP()
}

function draw() {
  background(230);
  noStroke()
  if (mouseIsPressed) {
    eyex1 = -80
    eyex2 = 80
    eyes1 = 100
    eyes2 = 100
    eyey = -30
    pupilx1 = 0
    pupilx2 = 0
    pupily = 0
    pupils1 = 50
    pupils2 = 50
    mouthX = 0
    mouthY = 0
    t = t + 1 * deltaTime
    if (t >= 1000 * PI) {
      t = 0
    }
    if (t == 0) {
      b = true
      c = true
    }
    if (b == true) {
      if (c == true && blink < 150) {
        blink = blink + 10
        if (blink >= 150) {
          c = false
        }
      } else {
        blink = blink - 10
        if (blink <= 0) {
          b = false
        }
      }
    }
    s = s + 1
    if (s > 900) {
      s = 0
    }
    if (browy > -30){
      browy = browy - 10
    }
    else {
      browy = browy
    }
    Y = map(sin(t / 500), 1, -1, 245, 252)
    push()
    fill(R, 215, 80)
    circle(X, Y, 400)
    pop()
    push()
    translate(X, Y)
    fill(255)
    ellipse(eyex1, eyey, eyes1, 100)
    ellipse(eyex2, eyey, eyes2, 100)
    pop()
    push()
    fill(0)
    translate(X, Y)
    translate(eyex1, eyey)
    ellipse(pupilx1, pupily, pupils1, 50)
    noFill()
    stroke(0)
    strokeWeight(10)
    arc(0, browy, 150, 150, PI + PI * 1 / 3, PI + PI * 2 / 3)
    pop()
    push()
    fill(0)
    translate(X, Y)
    translate(eyex2, eyey)
    ellipse(pupilx2, pupily, pupils2, 50)
    noFill()
    stroke(0)
    strokeWeight(10)
    arc(0, browy, 150, 150, PI + PI * 1 / 3, PI + PI * 2 / 3)
    pop()
    push()
    fill(R, 215, 80)
    translate(X, Y)
    rect((eyex1 + eyex2) / 2 - 130, eyey - 50, 260, blink)
    pop()
    push()
    noFill()
    stroke(0)
    strokeWeight(10)
    translate(X, Y)
    arc(mouthX, mouthY, 250, 250, PI * 1 / 4, PI * 3 / 4)
    pop()
    push()
    fill(R, 215, 80)
    rect(X - 100, Y + 50, 200, 100)
    pop()
    push()
    stroke(0)
    strokeWeight(10)
    fill(255)
    ellipse(X, Y + 120, 70, 80)
  } else {
    t = t + 1 * deltaTime
    if (t >= 1000 * PI) {
      t = 0
    }
    if (t == 0) {
      b = true
      c = true
    }
    if (b == true) {
      if (c == true && blink < 150) {
        blink = blink + 10
        if (blink >= 150) {
          c = false
        }
      } else {
        blink = blink - 10
        if (blink <= 0) {
          b = false
        }
      }
    }
    s = s + 1
    if (s > 900) {
      s = 0
    }
    if (s == 200) {
      m = true
      n = true
    }
    if (m == true) {
      if (n == true && eyey > -70) {
        eyey = eyey - 1
        eyex1 = eyex1 - 0.5
        eyex2 = eyex2 - 0.5
        mouthX = mouthX - 0.5
        mouthY = mouthY - 0.5
        eyes1 = eyes1 - 0.1
        pupils1 = pupils1 - 0.1
        browy = browy - 0.5
        if (eyey <= -70) {
          n = false
        }
      }
    }
    if (s == 500) {
      o = true
      p = true
    }
    if (o == true) {
      if (p == true && eyey < -10) {
        eyey = eyey + 1
        eyex1 = eyex1 + 1
        eyex2 = eyex2 + 1
        mouthX = mouthX + 0.8
        mouthY = mouthY + 0.8
        eyes1 = eyes1 + 2 / 30
        pupils1 = pupils1 + 2 / 30
        eyes2 = eyes2 - 2 / 30
        pupils2 = pupils2 - 2 / 30
        browy = browy + 0.45
        if (eyey >= -10) {
          p = false
        }
      }
    }
    if (s == 800) {
      q = true
      r = true
    }
    if (q == true) {
      if (r == true && eyey > -30) {
        eyey = eyey - 1
        eyex1 = eyex1 - 2
        eyex2 = eyex2 - 2
        mouthX = mouthX - 1.41
        mouthY = mouthY - 1.41
        eyes2 = eyes2 + 0.2
        pupils2 = pupils2 + 0.2
        browy = browy - 0.32
        if (eyey <= -30) {
          eyes2 = 100
          pupils2 = 50
          mouthX = 0
          mouthY = 0
          browy = 0
          r = false
        }
      }
    }
    if (s == 190) {
      pm1 = true
      pm2 = true
    }
    if (pm1 == true) {
      if (pm2 == true && pupily > -20) {
        pupily = pupily - 1
        pupilx1 = pupilx1 - 0.2
        pupilx2 = pupilx2 - 0.2
      }
      if (pupily <= -20) {
        pm2 = false
      }
    }
    if (s == 350) {
      pm3 = true
      pm4 = true
    }
    if (pm3 == true) {
      if (pm4 == true && pupily < -5) {
        pupily = pupily + 1
        pupilx1 = pupilx1 - 1.2
        pupilx2 = pupilx2 - 1.2
      }
      if (pupily >= -5) {
        pm4 = false
      }
    }
    if (s == 510) {
      pm5 = true
      pm6 = true
    }
    if (pm5 == true) {
      if (pm6 == true && pupily < 20) {
        pupily = pupily + 1
        pupilx1 = pupilx1 + 1.2
        pupilx2 = pupilx2 + 1.2
      }
      if (pupily >= 20) {
        pm6 = false
      }
    }
    if (s == 650) {
      pm7 = true
      pm8 = true
    }
    if (pm7 == true) {
      if (pm8 == true && pupily > 5) {
        pupily = pupily - 1
        pupilx1 = pupilx1 + 0.8
        pupilx2 = pupilx2 + 0.8
      }
      if (pupily <= 5) {
        pm8 = false
      }
    }
    if (s == 720) {
      pm9 = true
      pm10 = true
    }
    if (pm9 == true) {
      if (pm10 == true && pupily < 15) {
        pupily = pupily + 1
        pupilx1 = pupilx1 - 0.4
        pupilx2 = pupilx2 - 0.4
      }
      if (pupily >= 15) {
        pm10 = false
      }
    }
    if (s == 810) {
      pm11 = true
      pm12 = true
    }
    if (pm11 == true) {
      if (pm12 == true && pupily > 0) {
        pupily = pupily - 1
        pupilx1 = pupilx1 - 1.1
        pupilx2 = pupilx2 - 1.1
      }
      if (pupily <= 0) {
        pupilx1 = 0
        pupilx2 = 0
        pupily = 0
        pm11 = false
        pm12 = false
      }
    }
    Y = map(sin(t / 500), 1, -1, 245, 252)
    C = map(mouseX, 200, 300, 0, 255)
    push()
    fill(R, 215, 80)
    circle(X, Y, 400)
    pop()
    push()
    translate(X, Y)
    fill(255)
    ellipse(eyex1, eyey, eyes1, 100)
    ellipse(eyex2, eyey, eyes2, 100)
    pop()
    push()
    fill(0)
    translate(X, Y)
    translate(eyex1, eyey)
    ellipse(pupilx1, pupily, pupils1, 50)
    noFill()
    stroke(0)
    strokeWeight(10)
    arc(0, browy, 150, 150, PI + PI * 1 / 3, PI + PI * 2 / 3)
    pop()
    push()
    fill(0)
    translate(X, Y)
    translate(eyex2, eyey)
    ellipse(pupilx2, pupily, pupils2, 50)
    noFill()
    stroke(0)
    strokeWeight(10)
    arc(0, browy, 150, 150, PI + PI * 1 / 3, PI + PI * 2 / 3)
    pop()
    push()
    fill(R, 215, 80)
    translate(X, Y)
    rect((eyex1 + eyex2) / 2 - 130, eyey - 50, 260, blink)
    pop()
    push()
    noFill()
    stroke(0)
    strokeWeight(10)
    translate(X, Y)
    arc(mouthX, mouthY, 250, 250, PI * 1 / 4, PI * 3 / 4)
    pop()
  }
  Text1.html('click to surprise')
  Text2.html('scroll to change face color')
}

function mouseReleased() {
  s = 0
  t = 0
  eyex1 = -80
  eyex2 = 80
  eyes1 = 100
  eyes2 = 100
  eyey = -30
  pupilx1 = 0
  pupilx2 = 0
  pupily = 0
  pupils1 = 50
  pupils2 = 50
  browy = 0
  blink = 0
  mouthX = 0
  mouthY = 0
}

function mouseWheel(event) {
  R = R - event.delta / 10
  if (R < 0) {
    R = 0
  }
  if (R > 250) {
    R = 250
  }
}