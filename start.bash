#!/bin/bash
eval $(ssh-agent -s)
wait
ssh-add /home/timliu/.ssh/rxjs_space_rsa
wait
git -C /home/timliu/codes/ly/lyback pull