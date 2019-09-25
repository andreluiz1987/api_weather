#include <LiquidCrystal_I2C.h>
#include <ESP8266WiFi.h>
#include <WiFiClientSecure.h> 
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>
#include <Wire.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);

const char * ssid = "redmi"; 
const char * password = "xxxxxxx";
byte grau[8] ={ B00001100,
                B00010010,
                B00010010,
                B00001100,
                B00000000,
                B00000000,
                B00000000,
                B00000000,};
                
void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Wire.begin(D2, D1); //Use predefined PINS consts
  lcd.begin(20, 4); // The begin call takes the width and height. This
  // Should match the number provided to the constructor.

  lcd.backlight(); // Turn on the backlight.
  lcd.home();
  //Cria o caractere customizado com o simbolo do grau
  lcd.createChar(0, grau);
  
  lcd.clear();
    
  lcd.setCursor(1,1);
  lcd.print("SSID: ");

  lcd.setCursor(7,1);
  lcd.print(ssid);
    
  lcd.setCursor(1,2);
  lcd.print("Conectando...");
    
  while (WiFi.status() != WL_CONNECTED) {  
    delay(2000);
    Serial.println(WiFi.status());
  }
}

void loop() {

  lcd.clear();    
  lcd.setCursor(1,1);
  lcd.print("Buscando... ");
  
  if (WiFi.status() == WL_CONNECTED) {
  
    HTTPClient http; //Object of class HTTPClient
    http.begin("https://api-weather-custom.herokuapp.com/api/v1/weather", "08:3B:71:72:02:43:6E:CA:ED:42:86:93:BA:7E:DF:81:C4:BC:62:30");
    
    http.addHeader("Content-Type", "application/json");
    
    int httpCode = http.GET();
    
    if (httpCode > 0) {      
   
      const size_t bufferSize = JSON_OBJECT_SIZE(2) + JSON_OBJECT_SIZE(3) + JSON_OBJECT_SIZE(5) + JSON_OBJECT_SIZE(8) + 370;
    
      DynamicJsonBuffer jsonBuffer(bufferSize);
      Serial.println(http.getString());
      JsonObject & root = jsonBuffer.parseObject(http.getString());

      const char * temp = root["temperature"];
      const char * city = root["city"];
      const char * humidity = root["humidity"];

      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print(city);
      
      String message = "Temperatura: ";
      message += temp;
      lcd.setCursor(0, 2);
      lcd.print(message);
      //Mostra o simbolo do grau formado pelo array
      lcd.write((byte)0);
      
      message = "Umidade: ";
      message += humidity;
      message += "%";
      lcd.setCursor(0, 3);
      lcd.print(message);
    }
    
    http.end(); //Close connection
  }
  delay(60000);
}
