list2: List[number] = []
begin = 1000
distance_for_14 = 2
strip = neopixel.create(DigitalPin.P0, 102, NeoPixelMode.RGB)
list2.append(begin)
for index in range(5):
    list2.append(list2[index] - 4 * distance_for_14)
    list2.append(list2[index] - 2 * distance_for_14)
    list2.append(list2[index] - 4 * distance_for_14)
    list2.append(list2[index] - 4 * distance_for_14)
    list2.append(list2[index] - 2 * distance_for_14)
for index2 in range(5):
    serial.write_line("" + str((index2)))

def on_forever():
    strip.clear()
    index3 = 0
    while index3 <= len(list2) - 1:
        list2[index3] = list2[index3] - 1
        strip.set_pixel_color(list2[index3], neopixel.colors(NeoPixelColors.RED))
        index3 += 1
    strip.show()
    basic.pause(1000)
basic.forever(on_forever)
