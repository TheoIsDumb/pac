#!/bin/bash

## pac.
## yet another pacman wrapper made by theo for himself.

## functions ##########################################

function depcheck() {
	if [[ -z $(command -v fzf) ]]; then
		printf "fzf not found. Please install it.\n" >&2
		exit 2
	fi
}

function interactive() {
	depcheck

	pacman -Sl | fzf --multi --preview="pacman -Si {1}/{2}" --preview-window=top,45% --bind 'enter:execute(doas pacman -S {1}/{2})' --margin 5% --info=inline
}

help() {
  cat << EOF
Usage: pac [OPTION] [ARGS]
A lil pacman wrapper.

  i [PKGS]        install packages
	ii              install packages interactively
  r [PKGS]        remove packages
  u               update repositories & upgrade packages
  s [ARG]         search for packages
  l               list installed packages
  info [PKG]      show information about a package
  files [PKG]     list files owned by the queried package
  clean           clean pacman cache
  cache-size      show pacman cache size
  autoremove      remove orphaned packages
  count           show number of installed packages

EOF
}


## main ###############################################

case $1 in
	"i")
		pacman -S ${@:2} ;;
	"ii")
		interactive ;;
	"r")
		pacman -Rns ${@:2} ;;
	"autoremove")
		pacman -Rns `pacman -Qdttq` ;;
	"s")
		pacman -Ss ${@:2} ;;
	"u")
		pacman -Syu ;;
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
	"" | "h")
		help ;;
	*)
		echo "bruh.exe stopped working"
		;;
esac
