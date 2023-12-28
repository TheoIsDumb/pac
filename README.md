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

NB: `doas` is used to execute pacman as root by default. Change `power` variable in the pac script to `sudo` if you use `sudo`.

## usage

```
Usage: pac [OPTION] [ARGS]
A lil pacman wrapper.

  i [PKGS]        install packages
  interactive     install packages interactively
  r [PKGS]        remove packages
  u               update repositories & upgrade packages;
                  can mention package to install alongside upgrade
  s [ARG]         search for packages
  l               list installed packages
  info [PKG]      show information about a package
  files [PKG]     list files owned by the queried package
  clean           clean pacman cache
  cache-size      show pacman cache size
  orphan          list orphaned packages
  autoremove      remove orphaned packages
  count           show number of installed packages
```

## completion

if for some reason `pac-completion.bash` doesn't work, do this:

`echo 'complete -W "i interactive r orphan s autoremove u info files clean cache-size l count h help" pac' >> ~/.bashrc`

or `~/.zshrc`
