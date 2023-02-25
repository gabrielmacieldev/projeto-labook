-- Active: 1675445072939@@127.0.0.1@3306

CREATE TABLE
    users(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL
    );

DROP TABLE users;

SELECT * FROM users;

INSERT INTO
    users(id, name, email, password, role)
VALUES (
        "a01",
        "Alfredinho",
        "alfredinho@email.com",
        "123456",
        "adm"
    ), (
        "a02",
        "tio patinhas",
        "tiopatinhas@email.com",
        "654321",
        "normal"
    ), (
        "a03",
        "Phill",
        "phill@email.com",
        "phill",
        "adm"
    );

CREATE TABLE posts(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        creator_id TEXT NOT NULL,
        content TEXT NOT NULL,
        likes INTEGER DEFAULT(0) NOT NULL,
        dislikes INTEGER DEFAULT (0) NOT NULL,
        created_at TEXT DEFAULT (DATETIME()) NOT NULL,
        update_at TEXT DEFAULT (DATETIME()) NOT NULL,
        FOREIGN KEY (creator_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
    );

DROP TABLE posts;

SELECT * FROM posts;

INSERT INTO posts (id, creator_id, content)
VALUES 
    ("p01", "a01", "Dia no parquinho"), 
    ("p02", "a02", "Torre em Dubai");

UPDATE posts SET likes = 1 WHERE id = "p01";

UPDATE posts SET dislikes = 1 WHERE id = "p01";

CREATE TABLE likes_dislikes (
        user_id TEXT NOT NULL,
        post_id TEXT NOT NULL,
        like INTEGER NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
        FOREIGN KEY (post_id) REFERENCES posts(id) 
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);

DROP TABLE likes_dislikes;

INSERT INTO likes_dislikes (user_id, post_id, like)
VALUES 
("a02", "p01", 1), 
("a01", "p02", 1), 
("a03", "p01", 0), 
("a03", "p02", 1);

SELECT * FROM likes_dislikes;

SELECT
    posts.id,
    posts.creator_id,
    posts.content,
    posts.likes,
    posts.dislikes,
    posts.created_at,
    posts.update_at,
    users.name AS creator_name
    FROM posts
    JOIN users
    ON posts.creator_id = users.id;