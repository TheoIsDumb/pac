#!/bin/bash

case $1 in
	"i")
		pacman -S ${@:2} ;;
	"")
		pacman -V ;;
	*)
		echo "bruh.exe stopped working"
		;;
esac
