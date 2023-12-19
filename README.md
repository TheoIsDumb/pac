# pac



https://github.com/TheoIsDumb/pac/assets/118801625/1b26bbc7-3b22-4c26-9228-1a70b46edb3a



a lil pacman wrapper made by me for myself.  
(should've made it a loooooooooooooong time ago)

## installation

`sudo ./install.sh`

OR

`doas ./install.sh`

## prerequisites

- pacman (duh)
- bash
- fzf (optional) [for interactive install]

## usage

```
Usage: pac [OPTION] [ARGS]
A lil pacman wrapper.

  i [PKGS]        install packages
  interactive     install packages interactively
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
```

## completion

if for some reason `pac-completion.bash` doesn't work, do this:

`echo 'complete -W "i interactive r s autoremove u info files clean cache-size l count h" pac' >> ~/.bashrc`

or `~/.zshrc`
