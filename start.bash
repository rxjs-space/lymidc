#!/bin/bash
eval $(ssh-agent -s)
wait
ssh-add /home/timliu/.ssh/ly_envy_rsa
wait
git -C /home/timliu/codes/ly/lyback pull