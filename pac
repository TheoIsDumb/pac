#!/bin/bash

case $1 in
	"i")
		pacman -S ${@:2} ;;
	"r")
		pacman -Rns ${@:2} ;;
	"s")
		pacman -Ss ${@:2} ;;
	"info")
		pacman -Si ${@:2} ;;
	"files")
		pacman -Fl ${@:2} ;;
	"clean")
		pacman -Scc ;;
	"cache-size")
		du -sh /var/cache/pacman/pkg | awk '{print $1}' ;;
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
