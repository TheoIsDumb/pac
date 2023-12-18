#!/bin/bash

case $1 in
	"i")
		pacman -S ${@:2} ;;
	"r")
		pacman -Rs ${@:2} ;;
	"info")
		pacman -Si ${@:2} ;;
	"l")
		pacman -Q ;;
	"count")
		pacman -Q | wc -l ;;
	"")
		pacman -V ;;
	*)
		echo "bruh.exe stopped working"
		;;
esac
