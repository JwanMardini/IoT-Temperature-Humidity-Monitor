import dht
import machine
import time
import urequests
import ujson
from lib.keys import URL

# Define the pins for the LEDs and the DHT11 sensor
LED_Pin_Red = machine.Pin(27, machine.Pin.OUT)
LED_Pin_Green = machine.Pin(26, machine.Pin.OUT)
temp_sensor = dht.DHT11(machine.Pin(28))  # DHT11 Constructor



def RGB_led(temperature, humidity):
    if temperature > 24:
        print("Temperature is too high")
        LED_Pin_Red.value(1)
        LED_Pin_Green.value(0)
        return "#FF0000"  # Red color
    else:
        print("Temperature is normal")
        LED_Pin_Red.value(0)
        LED_Pin_Green.value(1)
        return "#008000"  # Green color


def read_DHT():
    temp_sensor.measure()
    temp = temp_sensor.temperature()
    humidity = temp_sensor.humidity()
    print("Temperature: ", temp, "C")
    print("Humidity: ", humidity, "%")
    return temp, humidity


def send_values(temp, hum, color):
    print(URL)
    headers = {'content-type': 'application/json'}
    data = {"temp": temp, "humidity": hum, "color": color}
    try:
        json_data = ujson.dumps(data)  # Convert dictionary to JSON string
        print(json_data)
        response = urequests.post(URL, data=json_data, headers=headers)
        print("Data sent to the server")
        print(response.text)  # Print the response from the server
        response.close()  # Close the connection to the server after sending the data to the server to avoid memory leaks in the ESP32
    except Exception as e:
        print("Error: ", e)


while True:
    try:
        temp, hum = read_DHT()
        color = RGB_led(temp, hum)
        send_values(temp, hum, color)
        time.sleep(180)
    except Exception as e:
        print("Error: ", e)
        time.sleep(10)
