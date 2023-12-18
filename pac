#!/bin/bash

case $1 in
	"i")
		pacman -S ${@:2}
		;;
	*)
		echo "bruh.exe stopped working"
		;;
esac
