#!/bin/bash
pushd /home/timliu/codes/ly/lyback
eval $(ssh-agent -s)
ssh-add /home/timliu/.ssh/rxjs_space_rsa
echo git pulling
git pull
popd