#Pin - wiringPi pin 0 is BCM_GPIO 17.
PIN=0

gpio mode $PIN out
gpio write $PIN 0
gpio write $PIN 1
sleep 0.5
gpio write $PIN 0
sleep 0.5

echo "OK"