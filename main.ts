/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: william simard
 * Created on: dec 2023
 * This program bluetooth radio stuff
*/

// variable
let distance: Number = 0

//setup
radio.setGroup(7)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    distance = sonar.ping( 
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
  )
{ 

radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
 })
}