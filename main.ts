// You will change the length of your strip.
// 
// You will change the pause time at the bottom of the loop.  That is how fast the led's move down.
// 
// You can change the distance between led's that will be 1/4 beat of time.
input.onButtonPressed(Button.A, function () {
    Note3 += 1
    for (let index = 0; index <= list.length - 1; index++) {
        if (4 == list[index]) {
            range.showColor(neopixel.colors(NeoPixelColors.Yellow))
            numCorrectHits += 1
            basic.pause(100)
            break;
// won't show because after break.
            basic.showNumber(numCorrectHits)
        }
    }
    if (Note3 <= 1) {
        music.playTone(220, music.beat(BeatFraction.Whole))
    } else if (Note3 == 2) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 3) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 4) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 5) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 6) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 7) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note3 == 8) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note3 == 9) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    } else if (Note3 == 10) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 <= 11) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 12) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note3 == 13) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 14) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 15) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 16) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 17) {
        music.playTone(220, music.beat(BeatFraction.Half))
    } else if (Note3 == 18) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 19) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 20) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 21) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 22) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 23) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 24) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 25) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 26) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 27) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 28) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 29) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 30) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 31) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 32) {
        music.playTone(220, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 33) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 34) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 35) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 36) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 37) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 38) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 == 39) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 40) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 41) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 42) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note3 == 43) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note3 == 44) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 45) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 46) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 47) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 48) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 49) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 50) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 51) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 52) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (Note3 == 53) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 54) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 55) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 56) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 57) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 58) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note3 == 59) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 60) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 61) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note3 == 62) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 63) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 64) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 65) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 66) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 67) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 68) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 69) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 70) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 71) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 == 72) {
        music.playTone(330, music.beat(BeatFraction.Half))
    } else if (Note3 == 73) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note3 == 74) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 75) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 76) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 77) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 78) {
        music.playTone(220, music.beat(BeatFraction.Half))
    } else if (Note3 == 79) {
        music.playTone(262, music.beat(BeatFraction.Half))
    } else if (Note3 == 80) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 81) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 82) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 83) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 84) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 == 85) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 86) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 == 87) {
        music.playTone(440, music.beat(BeatFraction.Half))
    } else if (Note3 == 88) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note3 == 89) {
        music.playTone(466, music.beat(BeatFraction.Half))
    } else if (Note3 == 90) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 91) {
        music.playTone(392, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 92) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 93) {
        music.playTone(294, music.beat(BeatFraction.Half))
    } else if (Note3 == 94) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 95) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 96) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 97) {
        music.playTone(349, music.beat(BeatFraction.Half))
    } else if (Note3 == 98) {
        music.playTone(392, music.beat(BeatFraction.Half))
    } else if (Note3 == 99) {
        music.playTone(440, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 100) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (Note3 == 101) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 102) {
        music.playTone(349, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 103) {
        music.playTone(330, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 104) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (Note3 == 105) {
        music.playTone(294, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 106) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
    } else if (Note3 == 107) {
        music.playTone(294, music.beat(BeatFraction.Breve))
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(466, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.playTone(294, music.beat(BeatFraction.Breve))
})
let numCorrectHits = 0
let Note3 = 0
let range: neopixel.Strip = null
let list: number[] = []
list = []
let timings = [
4,
2,
4,
4,
4,
2,
4,
4,
4,
2,
2,
4,
2,
2,
2,
4,
2,
2,
2,
2,
1,
2,
2,
2,
2,
1,
2,
2,
1,
1,
4,
1,
1,
2,
1,
1,
2,
2,
1,
1,
1,
2,
2,
1,
1,
1,
4,
1,
1,
2,
2,
4,
1,
4,
1,
1,
2,
4,
1,
2,
4,
1,
1,
2,
2,
1,
2,
2,
1,
1,
2,
2,
4,
1,
1,
2,
4,
2,
2,
2,
1,
1,
1,
2,
1,
2,
2,
2,
2,
1,
1,
1,
2,
1,
1,
2,
2,
2,
1,
4,
1,
1,
1,
4,
1,
1,
4
]
let lengthOfStrip = 60
let begin = 414 + lengthOfStrip
let distance_for_14 = 2
let strip = neopixel.create(DigitalPin.P0, 102, NeoPixelMode.RGB)
list.push(begin)
for (let index2 = 0; index2 <= timings.length - 1; index2++) {
    list.push(list[index2] - timings[index2] * distance_for_14)
}
serial.writeLine("" + (list[list.length - 1]))
range = strip.range(0, 3)
Note3 = 0
basic.forever(function () {
    strip.clear()
    for (let index3 = 0; index3 <= list.length - 1; index3++) {
        list[index3] = list[index3] - 1
        strip.setPixelColor(list[index3], neopixel.colors(NeoPixelColors.Red))
    }
    strip.show()
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
})
