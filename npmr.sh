setterm -foreground white
read -p "Paquetes: " pk
if [ -z "$pk" ]; then
	clear
	setterm -foreground red
	echo "Error escribe algo!"
else
	clear
	npm i $pk
	clear
fi
./npmr.sh
