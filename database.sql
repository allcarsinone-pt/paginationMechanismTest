CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL
);

DO $$
DECLARE
    i INTEGER := 0;
BEGIN
    WHILE i < 30 LOOP
        INSERT INTO users (username, name)
        VALUES (
            'user' || i+1,
            'user' || i+1 || 'name'
        );
        i := i + 1;
    END LOOP;
END $$;