# Blog API Task

## Initial Steps

- Clone the repo using the command "git clone https://github.com/deepg7/BlogAPI.git"
- Run the command "npm run setup" to install the dependencies
- Run the command "npm run dev" to run the project with Nodemon OR "npm run start" to run without Nodemon

## Deployment Link

=> https://koderbox-blog.herokuapp.com/

## POSTMAN DOCUMENTATION LINK

=>https://documenter.getpostman.com/view/15313751/UzBpKksN

## NOTES

- POST BLOG => SEND {NAME,AUTHOR,TEXT,COVER} ALL REQUIRED WHILE CREATING BLOG IN REQUEST BODY
- GET ALL BLOGS => SEND PAGE AND LIMIT OR LIMIT(PAGE WILL BE SET TO 1) IN REQUEST QUERY OR DONT SEND ANYTHING (GET ALL)
- GET/UPDATE/DELETE BLOG BY ID => SEND ID IN REQ PARAMS
- UPDATE => YOU CANNOT UPDATE \_id, EVERYTHING ELSE IS ALLOWED
