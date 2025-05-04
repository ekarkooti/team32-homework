--  Get all the tasks assigned to users whose email ends in @spotify.com
SELECT t.title, t.description, u.email
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON ut.user_id = u.id
WHERE
    u.email LIKE '%@spotify.com';

--  Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT t.title, t.description, u.name, s.name
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON ut.user_id = u.id
    JOIN status s ON t.status_id = s.id
WHERE
    u.name = 'Donald Duck'
    AND s.name = 'Not started';

--  Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT t.title, t.description, u.name, t.created
FROM
    task t
    JOIN user_task ut ON t.id = ut.task_id
    JOIN user u ON ut.user_id = u.id
WHERE
    u.name = 'Maryrose Meadows'
    AND MONTH(t.created) = 9;

-- Find how many tasks where created in each month.
SELECT MONTHNAME(created) AS month, COUNT(*) AS number_of_tasks
FROM task
GROUP BY
    MONTHNAME(created)