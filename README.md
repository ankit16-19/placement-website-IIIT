

> Steps to update placement website.
1. Fork/clone this repo
2. Make changes in your local
3. push changes to this repository
4. SSH to server and run script.

## run script
```bash
1. SSH to server (IP: 14.139.198.171)
2. cd ankit
3. bash push.bash
```
---

# Script Info.
Check it this direcetories exist, If not create this.
1. /home/administrator/tmp_dump/source

```bash
# home/administrator/ankit/push.bash
#!/bin/bash

cd /home/administrator/tmp_dump/source
git clone https://github.com/ankit16-19/placement-website-IIIT.git
sudo cp -R  /home/administrator/tmp_dump/source/*/* /var/www/html/
rm -rf /home/administrator/tmp_dump/source/*
```



---

# Script customization.
```bash
#!/bin/bash

# tempoaray source directly to store new code.
cd <--temporary source directory-->

# Clone new code from repository
git clone <-- repository to clone from -->

# copy all data from soruce directy recursively to server directory.
sudo cp -R  <--same temporary source directy-->/*/* /var/www/html/

# remove all content from remporary srouce directy
rm -rf <--same temporary source directy-->/*
```

## Remeber to make the script executable
```bash
chmod +x filename.sh
```
