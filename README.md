# CS5703-02
## Installation and Run

### Backend

```bash
$ cd fakenewz/backend
$ python3 -m venv env
$ source env/bin/activate
$ pip install -r requirements.txt
$ python manage.py migrate 
$ python manage.py runserver 0.0.0.0:8000
```

### Frontend

```bash
$ cd fakenewz/frontend
$ npm i --legacy-peer-deps
$ npm run serve
```

## Environment Variables

Edit `.env` file to add relevant variables.

## Database

Our database is hosted on cloud and you can access it through URL:

```
db-postgresql-sgp1-18306-do-user-12863027-0.b.db.ondigitalocean.com
```

## Generate translated json file

### [Language representation code](https://py-googletrans.readthedocs.io/en/latest/)

```sh
pip install googletrans==3.1.0a0 
cd frontend\src\locales
python translate_json.py -l <target_language> -fi <input_file> -fo <output_file>
```

## Prettier

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Run below command **before creating any pull requests!**

```bash
$ cd frontend
$ npm run format
```
