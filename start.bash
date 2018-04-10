#!/bin/bash
dirX=/home/timliu/codes/ly/lyback
eval $(ssh-agent -s)
wait
ssh-add /home/timliu/.ssh/ly_envy_rsa
wait
git -C $dirX pull
wait
npm --prefix $dirX install $dirX