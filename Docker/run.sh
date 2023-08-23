#!/usr/bin/bash
nohup python3 /home/CS37-2-2023S2/backend/manage.py runserver 0.0.0.0:8000 >> /home/CS37-2-2023S2/run.log 2>&1 &
service nginx restart
tail -f /home/CS37-2-2023S2/run.log