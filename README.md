# IT-storage 🗄️

## Description
Online service for storing and managing favorite content such as links, tutorials etc., 
which has convenient search and tagging systems.


## Features
- REST API service with SOLID and clean architecture principles applied
- Asynchronous working principle
- Quick database migrations
- JWT tokens for authorization
- Email service as a micro-service with background tasks
- Content search with different filters
- Tagging system
- Frontend as a single page application (SPA)
- Router with protected pages (which require authorization)
- Logging system


## Tech
This project uses a number of open source projects to work properly:

### Frontend
- [HTML] - language for web layout
- [CSS] - language for applying custom styles to HTML pages
- [Bootstrap] - CSS framework for quick page layout
- [JavaScript] - language for developing frontend functionality
- [React.js] - JavaScript framework for developing web user interfaces (UI)

### API
- [Python] - the main language of the project
- [FastAPI] - python asynchronous framework for web development
- [PostgreSQL] - main database
- [SQLAlchemy] - database interaction (queries)
- [Alembic] - database migrations
- [Dependency Injector] - python framework for implementing dependency injection principle
- [JWT] - authorization tokens
- [Pydantic] - input/output data validation
- [Docker] - quick deployment

### Background tasks (Email Service)
- [Celery] - background tasks
- [Redis] - database for proper work of [Celery]


## Services

### Authorization 
This is an internal service which uses [JWT] tokens for users authorization. It is configured is such a way 
that tokens are stored in secure http only cookies which means that they cannot be accessed from frontend
(through JavaScript).

### Email
Email service is realised as a background micro-service, using [Celery] and [Redis].\
\
It is implemented with the help of [Gmail API] which allows you to send emails directly from the code, using such 
programming languages as Python, Java, JavaScript, Go or Node.js. The only thing you need is google account and slight 
configuration.

### Search
Search service allows users to apply convenient content search using different filters and tag system. 
This functionality is not yet organised as a separate service but in the future with the development of 
search system it will.


## Deployment
[Docker] and [Docker Compose] are used to run the application and dependent services in containers. 
See [docker-compose.yml] in the root directory for more details.\
\
The docker-compose file contains the following services/containers:
- **frontend**: React application
- **redis**: Redis service
- **celery-worker**: Background tasks (Email service)
- **postgres**: PostgreSQL service (main database)
- **api**: main FastAPI application


## License
This project is open source and MIT Licensed. See [LICENSE].


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job.)

  [Python]: <https://www.python.org/>
  [FastAPI]: <https://fastapi.tiangolo.com/>
  [HTML]: <https://html.com/>
  [CSS]: <https://www.css3.com/>
  [Bootstrap]: <https://getbootstrap.com/>
  [JavaScript]: <https://www.javascript.com/>
  [React.js]: <https://react.dev/>
  [PostgreSQL]: <https://www.postgresql.org/>
  [SQLAlchemy]: <https://www.sqlalchemy.org/>
  [Alembic]: <https://alembic.sqlalchemy.org/en/latest/>
  [Dependency Injector]: <https://python-dependency-injector.ets-labs.org/>
  [JWT]: <https://jwt.io/>
  [Pydantic]: <https://docs.pydantic.dev/latest/>
  [Celery]: <https://docs.celeryq.dev/en/stable/getting-started/first-steps-with-celery.html>
  [Redis]: <https://redis.io/>
  [Docker]: <https://docs.docker.com/>
  [Docker Compose]: <https://docs.docker.com/compose/>
  [Gmail API]: <https://developers.google.com/gmail/api/guides?hl=en>
  [docker-compose.yml]: <https://github.com/iurii-umnov/it-storage/blob/master/docker-compose.yml>
  [LICENSE]: <https://github.com/iurii-umnov/it-storage/blob/master/LICENSE>