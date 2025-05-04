-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO
    task (
        title,
        description,
        created,
        updated,
        due_date,
        status_id,
        user_id
    )
VALUES (
        "new task",
        "description of the task",
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        CURRENT_TIMESTAMP,
        1,
        5
    );

-- Change the title of a task
UPDATE task SET title = "new title" WHERE id = 40;
-- Change a task due date
UPDATE task SET due_date = "2025-01-01" where id = 40;
-- Change a task status
UPDATE task set status_id = 2 where id = 40;

-- Mark a task as complete
update task
set
    status_id = (
        select id
        from status
        where
            name = 'Done'
    )
where
    id = 40;
-- Delete a task
DELETE FROM task WHERE id = 40;