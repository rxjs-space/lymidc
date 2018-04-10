#!/bin/bash
eval $(ssh-agent -s)
ssh-add /home/timliu/.ssh/rxjs_space_rsa
git -C /home/timliu/codes/ly/lyback pull