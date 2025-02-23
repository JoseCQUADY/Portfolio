#!/bin/bash

#Apagar nginx y ngrok 

echo "Apagando Nginx"
sudo service stop nginx

echo "Apagando Ngrok"
pkill -f "ngrok"

#Verificar que nginx y ngrok se apagó o no están prendidos

if ! pgrep -x "nginx" > /dev/null; then
	echo "Nginx apagado correctamente"
else
	echo "Nginx no pudo apagarse o no se encuentra prendido"

if ! pgrep -x "ngrok" > /dev/null; then
	echo "Ngrok apagado correctamente"
else
	echo "Ngrok no pudo apagarse o no se encuentra prendido"

# Entrar a la ruta de html

echo "Entrando en la ruta del porfatolio"

cd /var/www/html

#Verificamos si existe la carpeta y si sí la eliminamos y creamos una nueva

if [-d /var/www/html/Portfolio]: then
	echo "Eliminando el repositorio antiguo"
	sudo rm -r /var/www/Portfolio
	
	echo "Clonando el nuevo repositorio"
	git clone https://github.com/JoseCQUADY/Portfolio
	
	echo "Buildeando la nueva imagen del portafolio"
	cd /var/www/html/Portfolio
	npm install
	npm run build
	echo "Versión actualizada de la web"
else
	echo "Clonando el nuevo repositorio"
	git clone https://github.com/JoseCQUADY/Portfolio
	
	echo "Buildeando la nueva imagen del portafolio"
	cd /var/www/html/Portfolio
	npm install
	npm run build

	echo "Versión actualizada de la web"

echo "Prendiendo Nginx"
sudo service nginx start

echo "Generando url de Ngrok" 
ngrok http 80




