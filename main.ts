WSJoyStick.onKey(KEY.F, function () {
    radio.sendString("F")
})
WSJoyStick.onKey(KEY.A, function () {
    radio.sendString("A")
})
WSJoyStick.onKey(KEY.E, function () {
    radio.sendString("E")
})
WSJoyStick.onKey(KEY.D, function () {
    radio.sendString("D")
})
WSJoyStick.onKey(KEY.B, function () {
    radio.sendString("B")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showIcon(IconNames.Heart)
    }
})
WSJoyStick.onKey(KEY.C, function () {
    radio.sendString("C")
})
WSJoyStick.JoyStickInit()
radio.setGroup(1)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        radio.sendString("m")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        radio.sendString("l")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        radio.sendString("k")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        radio.sendString("n")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 510 && pins.analogReadPin(AnalogPin.P2) < 530)) {
        radio.sendString("o")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        radio.sendString("r")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        radio.sendString("w")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) > 530 && pins.analogReadPin(AnalogPin.P2) <= 760)) {
        radio.sendString("h")
    } else if (pins.analogReadPin(AnalogPin.P1) > 510 && pins.analogReadPin(AnalogPin.P1) < 530 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        radio.sendString("c")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        radio.sendString("s")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        radio.sendString("y")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        radio.sendString("g")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        radio.sendString("a")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        radio.sendString("i")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        radio.sendString("e")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        radio.sendString("q")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        radio.sendString("u")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        radio.sendString("f")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        radio.sendString("b")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) >= 760 && pins.analogReadPin(AnalogPin.P2) < 1024)) {
        radio.sendString("d")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) >= 530 && pins.analogReadPin(AnalogPin.P2) < 760)) {
        radio.sendString("j")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 760 && pins.analogReadPin(AnalogPin.P1) < 1024 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        radio.sendString("t")
    } else if (pins.analogReadPin(AnalogPin.P1) >= 530 && pins.analogReadPin(AnalogPin.P1) < 760 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        radio.sendString("x")
    } else if (pins.analogReadPin(AnalogPin.P1) > 115 && pins.analogReadPin(AnalogPin.P1) <= 510 && (pins.analogReadPin(AnalogPin.P2) > 0 && pins.analogReadPin(AnalogPin.P2) <= 115)) {
        radio.sendString("v")
    } else if (pins.analogReadPin(AnalogPin.P1) > 0 && pins.analogReadPin(AnalogPin.P1) <= 115 && (pins.analogReadPin(AnalogPin.P2) > 115 && pins.analogReadPin(AnalogPin.P2) <= 510)) {
        radio.sendString("p")
    } else {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
